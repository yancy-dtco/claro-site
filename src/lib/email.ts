/**
 * Claro Email — powered by Resend
 * Handles: report delivery, follow-up sequence, upgrade nudges
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM = "Claro <reports@meetclaro.ai>";

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

async function sendEmail({ to, subject, html }: SendEmailOptions): Promise<boolean> {
  if (!RESEND_API_KEY) {
    console.warn("[Email] RESEND_API_KEY not set — skipping email");
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from: FROM, to, subject, html }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("[Email] Resend error:", data);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[Email] Send failed:", err);
    return false;
  }
}

// ─── EMAIL TEMPLATES ──────────────────────────────────────────────────────────

export async function sendReportReadyEmail(
  to: string,
  reportId: string,
  shopOrCategory: string,
  buyerPersonaName?: string,
  signalCount?: number
): Promise<boolean> {
  const reportUrl = `https://meetclaro.ai/report/${reportId}`;
  const persona = buyerPersonaName || "your buyer";
  const signals = signalCount || 0;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Your Claro buyer report is ready</title>
</head>
<body style="margin:0;padding:0;background:#F7F4EF;font-family:'Inter',system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F4EF;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 0 32px;">
              <span style="font-family:Georgia,serif;font-size:24px;color:#0D1B2A;letter-spacing:-0.01em;">
                Claro<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#4A7AB5;margin-left:1px;vertical-align:middle;position:relative;top:-2px;"></span>
              </span>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td style="background:#2C5282;border-radius:16px;padding:40px;margin-bottom:24px;">
              <p style="margin:0 0 8px;font-size:13px;color:#A8C5E8;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;">Your Buyer Intelligence Report</p>
              <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:32px;color:#F7F4EF;line-height:1.2;">Now you know.</h1>
              <p style="margin:0 0 28px;font-size:16px;color:#A8C5E8;line-height:1.6;">
                ${signals > 0 ? `Claro analyzed ${signals.toLocaleString()} buyer signals` : "Claro analyzed real buyer conversations"} for <strong style="color:#F7F4EF;">${shopOrCategory}</strong> and built your complete buyer profile.
              </p>
              <a href="${reportUrl}" style="display:inline-block;padding:14px 28px;background:#C9A84C;color:#0D1B2A;border-radius:8px;font-size:15px;font-weight:700;text-decoration:none;">
                View your buyer report →
              </a>
            </td>
          </tr>

          <tr><td style="height:24px;"></td></tr>

          <!-- Teaser -->
          <tr>
            <td style="background:#E8F1FA;border-radius:16px;padding:32px;border:1px solid #A8C5E8;">
              <p style="margin:0 0 8px;font-size:11px;color:#4A7AB5;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">What you&apos;ll find</p>
              <h2 style="margin:0 0 20px;font-family:Georgia,serif;font-size:22px;color:#0D1B2A;">Meet ${persona}</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${[
                  "A complete psychographic profile of who&apos;s buying from you",
                  "The exact words and phrases your buyers use — ready to put in your listings",
                  "What triggers their purchase decision (and what stops them)",
                  "10 content angles built from real buyer signals",
                ].map(item => `
                <tr>
                  <td style="padding:8px 0;vertical-align:top;">
                    <table cellpadding="0" cellspacing="0"><tr>
                      <td style="padding-right:12px;color:#2C5282;font-size:16px;vertical-align:top;line-height:1.4;">✓</td>
                      <td style="font-size:15px;color:#1A2E4A;line-height:1.5;">${item}</td>
                    </tr></table>
                  </td>
                </tr>`).join("")}
              </table>
              <div style="margin-top:24px;padding-top:20px;border-top:1px solid #A8C5E8;">
                <a href="${reportUrl}" style="font-size:15px;color:#2C5282;font-weight:600;text-decoration:none;">Read your full report →</a>
              </div>
            </td>
          </tr>

          <tr><td style="height:24px;"></td></tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 0;border-top:1px solid #E8F1FA;">
              <p style="margin:0 0 8px;font-size:12px;color:#4A7AB5;">
                Clarity about your buyer. Confidence in your brand.
              </p>
              <p style="margin:0;font-size:12px;color:#4A7AB5;">
                © ${new Date().getFullYear()} Claro · <a href="https://meetclaro.ai" style="color:#4A7AB5;">meetclaro.ai</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return sendEmail({
    to,
    subject: `Your Claro buyer report is ready`,
    html,
  });
}

export async function sendDay3FollowupEmail(
  to: string,
  reportId: string,
  insight: string
): Promise<boolean> {
  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F7F4EF;font-family:'Inter',system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F4EF;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="padding:0 0 32px;">
            <span style="font-family:Georgia,serif;font-size:22px;color:#0D1B2A;">Claro</span>
          </td>
        </tr>
        <tr>
          <td style="padding:0 0 24px;">
            <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:28px;color:#0D1B2A;line-height:1.2;">
              One thing your buyers kept saying.
            </h1>
            <p style="margin:0 0 20px;font-size:16px;color:#1A2E4A;line-height:1.7;">
              When Claro analyzed your buyer signals, this kept showing up:
            </p>
            <div style="background:#E8F1FA;border-left:3px solid #2C5282;border-radius:8px;padding:20px 24px;margin-bottom:24px;">
              <p style="margin:0;font-size:17px;color:#0D1B2A;line-height:1.6;font-style:italic;">&ldquo;${insight}&rdquo;</p>
            </div>
            <p style="margin:0 0 20px;font-size:16px;color:#1A2E4A;line-height:1.7;">
              Your full report has 9 more insights like this — plus 10 content angles built from what your buyers actually say.
            </p>
            <a href="https://meetclaro.ai/report/${reportId}" style="display:inline-block;padding:13px 24px;background:#2C5282;color:#F7F4EF;border-radius:8px;font-size:15px;font-weight:600;text-decoration:none;margin-bottom:16px;">
              Back to your report →
            </a>
            <p style="margin:16px 0 0;font-size:14px;color:#4A7AB5;">
              Or upgrade to <a href="https://meetclaro.ai/pricing" style="color:#2C5282;font-weight:600;">Know Your Buyer ($49/mo)</a> for monthly refreshes + deeper signals.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 0;border-top:1px solid #E8F1FA;">
            <p style="margin:0;font-size:12px;color:#4A7AB5;">© ${new Date().getFullYear()} Claro · <a href="https://meetclaro.ai" style="color:#4A7AB5;">meetclaro.ai</a></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return sendEmail({ to, subject: "One thing your buyers kept saying", html });
}
