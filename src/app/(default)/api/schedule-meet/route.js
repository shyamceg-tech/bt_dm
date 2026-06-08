import { NextResponse } from "next/server";
import crypto from "crypto";

/**
 * /api/schedule-meet — BlueTick 2026
 *
 * Books a 15-minute Google Meet call from the Thank-You screen. Creates a
 * single Google Calendar event (with an auto-generated Meet link) on the
 * BlueTick academics calendar and invites everyone at once:
 *   - academics@bluetickacademy.com   (the calendar owner / impersonated user)
 *   - shyam.ceg1990@gmail.com          (second internal host)
 *   - the student's Gmail (collected in the UI)
 * `sendUpdates=all` makes Google email every attendee an invite, so the event
 * lands on each person's own calendar the moment they accept.
 *
 * Auth: a Google Workspace **service account with domain-wide delegation**,
 * impersonating GOOGLE_IMPERSONATE_SUBJECT. We sign the OAuth JWT with Node's
 * crypto (RS256) so no extra npm dependency is needed.
 *
 * Graceful degradation: if the Google env vars aren't set yet, this returns
 * HTTP 200 with { success: false, configured: false }. The front-end then
 * shows a "we'll email you the invite" fallback and still records the requested
 * slot to Zoho — so nothing is lost before the integration is wired up.
 */

export const runtime = "nodejs";

const TOKEN_URI = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/calendar.events";

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

/* Mint a Google OAuth access token for the impersonated subject via a signed
   JWT assertion (service-account flow with domain-wide delegation). */
async function getAccessToken({ clientEmail, privateKey, subject }) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: clientEmail,
    scope: SCOPE,
    aud: TOKEN_URI,
    iat: now,
    exp: now + 3600,
    sub: subject, // impersonate the calendar owner
  };

  const unsigned = `${base64url(JSON.stringify(header))}.${base64url(
    JSON.stringify(claim)
  )}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsigned);
  const signature = signer
    .sign(privateKey)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  const assertion = `${unsigned}.${signature}`;

  const res = await fetch(TOKEN_URI, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }).toString(),
  });
  const data = await res.json();
  if (!data.access_token) {
    throw new Error(
      `Google token exchange failed: ${data.error || ""} ${
        data.error_description || ""
      }`
    );
  }
  return data.access_token;
}

export async function POST(req) {
  const clientEmail = process.env.GOOGLE_SA_CLIENT_EMAIL;
  /* Private keys are stored with literal "\n" in env; restore real newlines. */
  const privateKey = (process.env.GOOGLE_SA_PRIVATE_KEY || "").replace(
    /\\n/g,
    "\n"
  );
  const subject =
    process.env.GOOGLE_IMPERSONATE_SUBJECT || "academics@bluetickacademy.com";
  const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";
  const secondHost =
    process.env.GOOGLE_SECOND_HOST || "shyam.ceg1990@gmail.com";

  try {
    const body = await req.json();
    const { name, mobile, studentEmail, start, end, timeZone } = body;

    if (!studentEmail || !start || !end) {
      return NextResponse.json(
        { success: false, error: "Missing studentEmail / start / end" },
        { status: 400 }
      );
    }

    // Not configured yet → graceful fallback (front-end handles this).
    if (!clientEmail || !privateKey) {
      return NextResponse.json({ success: false, configured: false });
    }

    const accessToken = await getAccessToken({
      clientEmail,
      privateKey,
      subject,
    });

    const event = {
      summary: `BlueTick · 15-min call with ${name || "you"}`,
      description:
        "15-minute Google Meet call with a BlueTick Academy learning advisor.\n" +
        `Contact: ${name || ""} ${mobile ? "(+91 " + mobile + ")" : ""}`,
      start: { dateTime: start, timeZone: timeZone || "Asia/Kolkata" },
      end: { dateTime: end, timeZone: timeZone || "Asia/Kolkata" },
      attendees: [
        { email: subject, organizer: true },
        { email: secondHost },
        { email: studentEmail },
      ],
      conferenceData: {
        createRequest: {
          requestId: `bt-${Date.now()}-${Math.floor(
            crypto.randomBytes(2).readUInt16BE(0)
          )}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 30 },
          { method: "popup", minutes: 10 },
        ],
      },
    };

    const calRes = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        calendarId
      )}/events?conferenceDataVersion=1&sendUpdates=all`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      }
    );
    const created = await calRes.json();

    if (!calRes.ok) {
      console.error("❌ Calendar insert failed:", created);
      return NextResponse.json(
        { success: false, error: created.error?.message || "Calendar error" },
        { status: 502 }
      );
    }

    const meetLink =
      created.hangoutLink ||
      created.conferenceData?.entryPoints?.find(
        (e) => e.entryPointType === "video"
      )?.uri ||
      "";

    return NextResponse.json({
      success: true,
      configured: true,
      meetLink,
      htmlLink: created.htmlLink || "",
      eventId: created.id || "",
    });
  } catch (err) {
    console.error("🔥 schedule-meet error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
