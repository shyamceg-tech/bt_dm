import { NextResponse } from "next/server";

/**
 * /api/crm-reconcile — TEMPORARY safety net, retires itself.
 *
 * Once a day (vercel.json cron) this reads the last couple of days of contacts
 * from Zoho Bigin and offers each one that belongs to THIS site to the CRM in
 * "reconcile" mode: the CRM creates a lead only if it has none for that phone
 * and never touches one it has. So a lead that reached Bigin but not the CRM is
 * filled in within a day, whatever went wrong on the way.
 *
 * Bigin is shared by both sites and tells them apart by its Website field:
 * "AI Academy" is the .ai site, "Indiranagar"/"Hoodi" the .com site. Contacts
 * with neither (typed in by hand, a Google lead form) are counted but not
 * imported, since the CRM could not know which pipeline they belong to.
 *
 * Auth: Vercel Cron sends `Authorization: Bearer $CRON_SECRET`.
 *   ?dry=1   report what is missing without creating anything
 *   ?days=N  look back N days (default 2, max 30), for a one-off catch-up
 *
 * Remove this file and its vercel.json entry once the check has done its job.
 */
export const maxDuration = 60;

const SITE = "DM"; // this repo is bluetickacademy.com
const RETIRE_AFTER = process.env.RECONCILE_UNTIL || "2026-12-25"; // IST date
const ZOHO_CONTACTS = "https://www.zohoapis.in/bigin/v2/Contacts";
const FIELDS = [
  "Last_Name", "Phone", "Email", "Description", "Website", "Form_Type",
  "Lead_Source", "Created_Time",
].join(",");
const NOT_STUDENTS = ["hire", "franchisee", "newsletter"];

const siteOf = (website) => {
  const w = String(website || "").trim().toLowerCase();
  if (w === "ai academy") return "AI";
  if (w === "indiranagar" || w === "hoodi") return "DM";
  return null;
};

async function zohoToken() {
  const res = await fetch(
    `https://accounts.zoho.in/oauth/v2/token?refresh_token=${process.env.ZOHO_REFRESH_TOKEN}&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&grant_type=refresh_token`,
    { method: "POST" },
  );
  return (await res.json()).access_token;
}

/** Contacts created on or after `since`, newest first. */
async function recentContacts(token, since) {
  const out = [];
  for (let page = 1; page <= 10; page++) {
    const res = await fetch(
      `${ZOHO_CONTACTS}?fields=${FIELDS}&sort_by=Created_Time&sort_order=desc&per_page=200&page=${page}`,
      { headers: { Authorization: `Zoho-oauthtoken ${token}` } },
    );
    if (res.status === 204) break; // no more records
    const json = await res.json();
    if (!res.ok || !Array.isArray(json.data)) {
      throw new Error(`Bigin said ${res.status}: ${JSON.stringify(json).slice(0, 300)}`);
    }
    let reachedOld = false;
    for (const c of json.data) {
      if (new Date(c.Created_Time) < since) {
        reachedOld = true;
        break;
      }
      out.push(c);
    }
    if (reachedOld || !json.info?.more_records) break;
  }
  return out;
}

/** "Page: Home | Campaign: X | Source: hero" → { Page: "Home", ... } */
function describe(description) {
  const parts = {};
  for (const piece of String(description || "").split("|")) {
    const i = piece.indexOf(":");
    if (i > 0) parts[piece.slice(0, i).trim()] = piece.slice(i + 1).trim();
  }
  return parts;
}

function bodyFor(c, dry) {
  const d = describe(c.Description);
  return {
    page: SITE,
    reconcile: true,
    dryRun: dry,
    receivedAt: c.Created_Time,
    biginId: c.id,
    formType: c.Form_Type || "default",
    name: c.Last_Name && c.Last_Name !== "Lead" ? c.Last_Name : "",
    mobile: c.Phone,
    email: c.Email || "",
    siteLocation: c.Website,
    pageSource: d.Page || "",
    formPosition: d.Source || "",
    isGoogleAds: c.Lead_Source === "Google Ads",
    gAdsCampaign: d.Campaign || "",
    gAdsAdGroup: d["Ad group"] || "",
    gAdsKeyword: d.Keyword || "",
    gclid: d.GCLID || "",
  };
}

async function offerToCrm(body) {
  let last;
  for (const wait of [0, 3_000]) {
    if (wait) await new Promise((r) => setTimeout(r, wait));
    try {
      const res = await fetch(process.env.CRM_INTAKE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": process.env.CRM_INTAKE_KEY },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(15_000),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) return { tag: json.reconcile || "ok", orderId: json.orderId };
      last = `${res.status} ${JSON.stringify(json).slice(0, 120)}`;
      if (res.status < 500 && res.status !== 429) break;
    } catch (e) {
      last = String(e);
    }
  }
  return { tag: `failed: ${last}` };
}

export async function GET(req) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return NextResponse.json({ error: "CRON_SECRET is not set" }, { status: 503 });
  if (req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Not allowed" }, { status: 401 });
  }
  if (!process.env.CRM_INTAKE_URL || !process.env.CRM_INTAKE_KEY) {
    return NextResponse.json({ error: "CRM intake is not configured" }, { status: 503 });
  }

  const today = new Date(Date.now() + 330 * 60_000).toISOString().slice(0, 10);
  if (today > RETIRE_AFTER) {
    return NextResponse.json({ retired: true, note: `Switched off after ${RETIRE_AFTER}; remove this route.` });
  }

  const url = new URL(req.url);
  const dry = url.searchParams.get("dry") === "1";
  const onlyPhone = (url.searchParams.get("phone") || "").replace(/\D/g, "").slice(-10);
  const days = Math.min(30, Math.max(1, Number(url.searchParams.get("days")) || 2));
  const since = new Date(Date.now() - days * 86_400_000);

  try {
    const token = await zohoToken();
    if (!token) throw new Error("Could not get a Bigin access token");
    const contacts = await recentContacts(token, since);

    const summary = {
      days, dry, checked: contacts.length, thisSite: 0, otherSite: 0, unsorted: 0,
      notStudents: 0, noPhone: 0, present: 0, missing: 0, created: 0, failed: 0,
    };
    const recovered = [];
    const failures = [];
    const unsortedList = [];
    const mine = [];
    for (const c of contacts) {
      const site = siteOf(c.Website);
      if (!site) {
        summary.unsorted++;
        unsortedList.push({ name: c.Last_Name, mobile: c.Phone, source: c.Lead_Source, form: c.Form_Type, at: c.Created_Time, note: String(c.Description || "").slice(0, 120) });
        continue;
      }
      if (site !== SITE) { summary.otherSite++; continue; }
      if (NOT_STUDENTS.includes(String(c.Form_Type || "").toLowerCase())) { summary.notStudents++; continue; }
      if (!String(c.Phone || "").replace(/\D/g, "")) { summary.noPhone++; continue; }
      if (onlyPhone && !String(c.Phone).replace(/\D/g, "").endsWith(onlyPhone)) continue;
      summary.thisSite++;
      mine.push(c);
    }

    // A handful at a time: a quiet day is a few leads, a catch-up a few hundred.
    for (let i = 0; i < mine.length; i += 5) {
      await Promise.all(
        mine.slice(i, i + 5).map(async (c) => {
          const { tag: result, orderId } = await offerToCrm(bodyFor(c, dry));
          if (onlyPhone) recovered.push({ name: c.Last_Name, mobile: c.Phone, at: c.Created_Time, crm: result, orderId });
          if (result === "present") summary.present++;
          else if (result === "missing" || result === "created") {
            summary[result]++;
            if (!onlyPhone) recovered.push({ name: c.Last_Name, mobile: c.Phone, at: c.Created_Time });
          } else {
            summary.failed++;
            failures.push({ name: c.Last_Name, mobile: c.Phone, result });
          }
        }),
      );
    }

    console.log("CRM_RECONCILE", JSON.stringify(summary));
    for (const r of recovered) console.warn(dry ? "CRM_RECONCILE_MISSING" : "CRM_RECONCILE_RECOVERED", r.name, r.mobile, r.at);
    for (const f of failures) console.error("CRM_RECONCILE_FAILED", f.name, f.mobile, f.result);
    return NextResponse.json({ site: SITE, ...summary, recovered, failures, unsortedList });
  } catch (e) {
    console.error("CRM_RECONCILE_ERROR", e);
    return NextResponse.json({ error: String(e?.message || e) }, { status: 500 });
  }
}
