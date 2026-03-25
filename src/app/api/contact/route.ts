import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // The Payload
    const discordPayload = {
      content: `🚨 **NEW PORTFOLIO LEAD (VERCEL SECURED)** 🚨\n\n**Identifier:** ${name}\n**Return Address:** ${email}\n**Parameters:**\n> ${message}`,
    };

    // The Webhook (Make sure to add this to Vercel Environment Variables!)
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
   
    
    if (!webhookUrl) {
      console.error("Missing Webhook URL");
      return NextResponse.json({ success: false, error: "Server Config Error" }, { status: 500 });
    }

    // The VIP Bypass Ping
    await axios.post(webhookUrl, discordPayload, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Siyaf-Portfolio-Agent/1.0",
      },
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Discord Ping Failed:", error?.response?.data || error.message);
    return NextResponse.json(
      { success: false, error: "Transmission Blocked" },
      { status: 500 }
    );
  }
}