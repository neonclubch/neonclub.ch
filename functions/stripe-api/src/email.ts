import { Resend } from "resend";

import { createLogger } from "./logger.js";

const log = createLogger("email");

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

/** Whether email sending is available. */
export const isEmailEnabled = resend !== null;

const FROM_EMAIL = process.env.FROM_EMAIL;
const FROM_NAME = process.env.FROM_NAME;

if (!isEmailEnabled) {
  log.warn("RESEND_API_KEY not set — magic link emails are disabled");
}

if (!FROM_EMAIL) {
  log.warn("FROM_EMAIL not set — email sending will fail");
}

const templates = {
  de: {
    subject: "Deine NEON Spende verwalten",
    heading: "Jährliche Spende verwalten",
    body: "Klicke auf den Button unten, um deine NEON-Spende zu verwalten. Der Link ist 15 Minuten gültig.",
    cta: "Spende verwalten",
    footer:
      "Falls du diese E-Mail nicht angefordert hast, kannst du sie ignorieren.",
  },
  en: {
    subject: "Manage your NEON donation",
    heading: "Manage your yearly donation",
    body: "Click the button below to manage your NEON donation. This link expires in 15 minutes.",
    cta: "Manage Donation",
    footer:
      "If you did not request this email, you can safely ignore it.",
  },
} as const;

function buildHtml(locale: "de" | "en", magicLink: string): string {
  const t = templates[locale];

  const fontSans = "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  const fontMono = "'JetBrains Mono', 'SF Mono', 'Fira Code', Consolas, monospace";

  return `<!DOCTYPE html>
<html lang="${locale}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
</head>
<body style="margin:0;padding:0;background:#050505;font-family:${fontSans}">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#050505;padding:48px 16px">
    <tr><td align="center">
      <table width="520" cellpadding="0" cellspacing="0" role="presentation" style="max-width:520px;width:100%">
        <!-- Wordmark -->
        <tr><td style="padding:0 0 40px">
          <span style="font-family:${fontMono};font-size:11px;font-weight:500;letter-spacing:0.25em;text-transform:uppercase;color:#FF3131">NEON</span>
        </td></tr>

        <!-- Divider -->
        <tr><td style="padding:0 0 40px">
          <div style="width:48px;height:1px;background:linear-gradient(90deg,#FF3131,transparent)"></div>
        </td></tr>

        <!-- Heading -->
        <tr><td style="padding:0 0 16px">
          <h1 style="margin:0;font-family:${fontSans};font-size:22px;font-weight:700;color:#f0f0f0;letter-spacing:-0.01em">${t.heading}</h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:0 0 40px">
          <p style="margin:0;font-family:${fontSans};font-size:15px;line-height:1.7;color:rgba(240,240,240,0.45)">${t.body}</p>
        </td></tr>

        <!-- CTA button -->
        <tr><td style="padding:0 0 48px">
          <a href="${magicLink}" style="display:inline-block;font-family:${fontMono};font-size:11px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;color:#050505;background:#FF3131;padding:14px 28px;border-radius:2px">${t.cta}</a>
        </td></tr>

        <!-- Footer divider -->
        <tr><td style="padding:0 0 24px">
          <div style="width:100%;height:1px;background:rgba(240,240,240,0.06)"></div>
        </td></tr>

        <!-- Footer -->
        <tr><td>
          <p style="margin:0;font-family:${fontSans};font-size:12px;line-height:1.6;color:rgba(240,240,240,0.2)">${t.footer}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function sendMagicLinkEmail(params: {
  to: string;
  magicLink: string;
  locale: "de" | "en";
}): Promise<void> {
  if (!resend) {
    throw new Error("Email sending is disabled (RESEND_API_KEY not set).");
  }

  const t = templates[params.locale];

  log.debug({ to: params.to, locale: params.locale }, "Sending magic link email");

  await resend.emails.send({
    from: FROM_NAME ? `${FROM_NAME} <${FROM_EMAIL}>` : FROM_EMAIL!,
    to: params.to,
    subject: t.subject,
    html: buildHtml(params.locale, params.magicLink),
  });

  log.info({ to: params.to }, "Magic link email sent");
}
