import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("✅ Received Form Data:", body);

    // -------------------------------------------------
    // ✅ 1. Refresh Zoho Access Token
    // -------------------------------------------------
//    console.log(process.env.ZOHO_REFRESH_TOKEN,process.env.ZOHO_CLIENT_ID,process.env.ZOHO_CLIENT_SECRET); //env check for amlify
    const tokenRes = await fetch(
      `https://accounts.zoho.in/oauth/v2/token?refresh_token=${process.env.ZOHO_REFRESH_TOKEN}&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&grant_type=refresh_token`,
      { method: "POST" }
    );

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      console.error("❌ Token Refresh Failed:", tokenData);
      return NextResponse.json(
        { success: false, error: "Failed to refresh Zoho access token" },
        { status: 500 }
      );
    }

    // -------------------------------------------------
    // ✅ 2. Identify Form Type
    // -------------------------------------------------
    const formType = body.formType || "default";

    let leadSource = "Website Form";
    let leadSourceDetail = "Website Learning Form";
    let description = `Learning Mode: ${body.learningMode || ""}, Center: ${body.center || ""}`;

    if (formType === "hire") {
      leadSource = "Hire From Us";
      leadSourceDetail = "Hire From Us Form";
      description = `Hire enquiry from ${body.name} - ${body.company || ""}`;
    }

    if (formType === "franchisee") {
      leadSource = "Franchisee Enquiry";
      leadSourceDetail = "Franchisee Enquiry Form";
      description = `Franchise enquiry from ${body.name} - ${body.location || ""}`;
    }

    // ✅🔥 NEW BLOCK: Newsletter Form
    if (formType === "newsletter") {
      leadSource = "Newsletter Signup";
      leadSourceDetail = "Website Footer Newsletter";
      description = `Newsletter signup from ${body.email}`;

      // ✅ Newsletter uses EMAIL ONLY → generate dummy Last Name
      body.name = body.email.split("@")[0] || "Subscriber";
    }

    // -------------------------------------------------
    // ✅ 3. Correct Zoho Bigin Payload
    // -------------------------------------------------
    const payload = {
      data: [
        {
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
        },
      ],
    };

    console.log("📦 Payload to Zoho:", JSON.stringify(payload, null, 2));

    // -------------------------------------------------
    // ✅ 4. Send Data to Zoho Bigin
    // -------------------------------------------------
    const zohoRes = await fetch("https://www.zohoapis.in/bigin/v2/Contacts", {
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
        message: "Lead successfully added to Zoho Bigin",
      });
    }

    return NextResponse.json(
      { success: false, error: result },
      { status: 400 }
    );
  } catch (err) {
    console.error("🔥 Server Error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
