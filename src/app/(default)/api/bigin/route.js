import { NextResponse } from "next/server";

/**
 * /api/bigin — BlueTick 2026
 *
 * Receives every website form submission and pushes it to Zoho Bigin.
 *
 * 2026 lead-funnel additions:
 *   - reCAPTCHA v3 verification (fail-open when RECAPTCHA_SECRET_KEY unset, so
 *     the route keeps working before keys are provisioned).
 *   - Returns the created Bigin record `id` so the front-end can UPDATE the
 *     same record once the pop-up details are filled (no duplicate lead).
 *   - `action: "update"` + `id` → PATCHes an existing record with the extra
 *     pop-up fields (Online/Offline, Center, preferred date & time, Meet slot).
 *   - All extra detail is folded into the Description text field so it works
 *     regardless of which custom fields exist in the Bigin schema.
 */

const ZOHO_BASE = "https://www.zohoapis.in/bigin/v2/Contacts";

/* ---------------------------------------------------------------------------
   reCAPTCHA v3 — verify the token server-side. Returns true when verification
   passes OR when captcha isn't configured (fail-open). Returns false only when
   a secret IS configured and the token is missing/invalid/low-score.
--------------------------------------------------------------------------- */
async function verifyRecaptcha(token, expectedAction) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true; // not configured yet → allow
  if (!token) return false; // configured but no token → block

  try {
    const params = new URLSearchParams({ secret, response: token });
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const data = await res.json();
    const minScore = Number(process.env.RECAPTCHA_MIN_SCORE || "0.5");

    if (!data.success) return false;
    if (typeof data.score === "number" && data.score < minScore) return false;
    /* Action match is advisory — only enforce when both are present. */
    if (expectedAction && data.action && data.action !== expectedAction) {
      return false;
    }
    return true;
  } catch (e) {
    console.error("⚠️ reCAPTCHA verify error (failing open):", e);
    return true; // don't lose a real lead over a captcha outage
  }
}

/* ---------------------------------------------------------------------------
   Zoho access token refresh (unchanged behaviour).
--------------------------------------------------------------------------- */
async function getZohoAccessToken() {
  const tokenRes = await fetch(
    `https://accounts.zoho.in/oauth/v2/token?refresh_token=${process.env.ZOHO_REFRESH_TOKEN}&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&grant_type=refresh_token`,
    { method: "POST" }
  );
  const tokenData = await tokenRes.json();
  return tokenData.access_token;
}

/* Build a single human-readable Description string from all known fields, so
   the team sees the full enquiry in Bigin even without dedicated custom
   fields for preferred date/time and the Meet slot. */
function buildDescription(body) {
  const parts = [];
  if (body.learningMode) parts.push(`Mode: ${body.learningMode}`);
  if (body.center) parts.push(`Center: ${body.center}`);
  if (body.preferredDate) parts.push(`Preferred date: ${body.preferredDate}`);
  if (body.preferredTime) parts.push(`Preferred time: ${body.preferredTime}`);
  if (body.role) parts.push(`Intent: ${body.role}`);
  if (body.pageSource) parts.push(`Page: ${body.pageSource}`);
  if (body.gAdsCampaign) parts.push(`Campaign: ${body.gAdsCampaign}`);
  if (body.gAdsAdGroup) parts.push(`Ad group: ${body.gAdsAdGroup}`);
  if (body.gAdsKeyword) parts.push(`Keyword: ${body.gAdsKeyword}`);
  if (body.matchType) parts.push(`Match: ${body.matchType}`);
  if (body.gclid) parts.push(`GCLID: ${body.gclid}`);
  if (body.meetScheduled && body.meetDateTime) {
    parts.push(`Google Meet booked: ${body.meetDateTime}`);
    if (body.meetLink) parts.push(`Meet link: ${body.meetLink}`);
    if (body.studentEmail) parts.push(`Student email: ${body.studentEmail}`);
  }
  if (body.formPosition) parts.push(`Source: ${body.formPosition}`);
  return parts.join(" | ");
}

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("✅ Received Form Data:", body);

    // ✅ 0. reCAPTCHA gate
    const human = await verifyRecaptcha(
      body.recaptchaToken,
      body.recaptchaAction
    );
    if (!human) {
      console.warn("🤖 reCAPTCHA rejected submission");
      return NextResponse.json(
        { success: false, error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // ✅ 1. Zoho access token
    const accessToken = await getZohoAccessToken();
    if (!accessToken) {
      console.error("❌ Token Refresh Failed");
      return NextResponse.json(
        { success: false, error: "Failed to refresh Zoho access token" },
        { status: 500 }
      );
    }

    // -------------------------------------------------------------------
    // ✅ 2. UPDATE path — pop-up details for an already-created lead.
    //    Adds Online/Offline, Center, preferred date & time, Meet slot to
    //    the existing record so we never create a duplicate.
    // -------------------------------------------------------------------
    if (body.action === "update" && body.id) {
      const updatePayload = {
        data: [
          {
            Learning_Mode: body.learningMode || "",
            Center: body.center || "",
            Description: buildDescription(body),
          },
        ],
      };

      const upRes = await fetch(`${ZOHO_BASE}/${body.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatePayload),
      });
      const upResult = await upRes.json();
      console.log("📨 Zoho Update Response:", upResult);

      if (upResult?.data?.[0]?.code === "SUCCESS") {
        return NextResponse.json({ success: true, id: body.id });
      }
      return NextResponse.json(
        { success: false, error: upResult },
        { status: 400 }
      );
    }

    // -------------------------------------------------------------------
    // ✅ 3. CREATE path — identify form type (unchanged routing).
    // -------------------------------------------------------------------
    const formType = body.formType || "default";

    let leadSource = "Website Form";
    let leadSourceDetail = "Website Learning Form";

    if (formType === "hire") {
      leadSource = "Hire From Us";
      leadSourceDetail = "Hire From Us Form";
    }
    if (formType === "franchisee") {
      leadSource = "Franchisee Enquiry";
      leadSourceDetail = "Franchisee Enquiry Form";
    }
    if (formType === "newsletter") {
      leadSource = "Newsletter Signup";
      leadSourceDetail = "Website Footer Newsletter";
      body.name = (body.email && body.email.split("@")[0]) || "Subscriber";
    }

    /* Paid-search attribution: a lead that arrived via a Google Ads click
       (gclid / utm) is sourced as "Google Ads". We only override the generic
       learning-form source — Hire / Franchisee / Newsletter keep their own
       source so those funnels stay distinct in Bigin. The page the visitor
       came from (Near Me, Online, …) is carried separately in Page_Source. */
    if (body.isGoogleAds && (formType === "default" || !formType)) {
      leadSource = "Google Ads";
      leadSourceDetail = body.pageSource
        ? `Google Ads — ${body.pageSource}`
        : "Google Ads";
    }

    let description = buildDescription(body);
    if (formType === "hire") {
      description = `Hire enquiry from ${body.name} - ${body.company || ""}`;
    } else if (formType === "franchisee") {
      description = `Franchise enquiry from ${body.name} - ${body.location || ""}`;
    } else if (formType === "newsletter") {
      description = `Newsletter signup from ${body.email}`;
    }

    const record = {
      Last_Name: body.name || "Lead",
      Email: body.email || "",
      Phone: body.mobile || "",
      Center: body.center || "",
      Learning_Mode: body.learningMode || "",
      Company_Name: body.company || "",
      Location: body.location || "",
      Form_Type: formType,
      Lead_Source: leadSource,
      Lead_Source_Detail: leadSourceDetail,
      Description: description,
    };

    /* Page + Google Ads attribution as dedicated custom fields.
       IMPORTANT: Zoho REJECTS the whole record if you send an api_name that
       doesn't exist in the module. So these structured keys are OFF by default
       — the same data already rides along in `Description` (see buildDescription),
       which always works. Once the team creates the custom fields in Bigin (see
       setup steps) and sets BIGIN_ATTRIBUTION_FIELDS=1, the structured columns
       light up with no code change. Adjust the api_names below if Bigin
       generated different ones (e.g. a numeric suffix). */
    if (process.env.BIGIN_ATTRIBUTION_FIELDS === "1") {
      record.Page_Source = body.pageSource || "";
      record.Campaign_Name = body.gAdsCampaign || "";
      record.Ad_Group_Name = body.gAdsAdGroup || "";
      record.Keyword = body.gAdsKeyword || "";
      record.GCLID = body.gclid || "";
    }

    const payload = { data: [record] };

    console.log("📦 Payload to Zoho:", JSON.stringify(payload, null, 2));

    const zohoRes = await fetch(ZOHO_BASE, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await zohoRes.json();
    console.log("📨 Zoho Response:", result);

    if (result?.data?.[0]?.code === "SUCCESS") {
      return NextResponse.json({
        success: true,
        id: result.data[0].details?.id || null,
        message: "Lead successfully added to Zoho Bigin",
      });
    }

    return NextResponse.json({ success: false, error: result }, { status: 400 });
  } catch (err) {
    console.error("🔥 Server Error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
