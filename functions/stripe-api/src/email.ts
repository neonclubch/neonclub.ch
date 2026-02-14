import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  console.warn("RESEND_API_KEY not set — magic link emails will fail.");
}

const resend = new Resend(process.env.RESEND_API_KEY);

const templates = {
  de: {
    subject: "Deine Spende verwalten — NEON",
    heading: "Spende verwalten",
    body: "Klicke auf den Button unten, um deine NEON-Spende zu verwalten. Der Link ist 15 Minuten gültig.",
    cta: "Spende verwalten",
    footer:
      "Falls du diese E-Mail nicht angefordert hast, kannst du sie ignorieren.",
  },
  en: {
    subject: "Manage your donation — NEON",
    heading: "Manage Donation",
    body: "Click the button below to manage your NEON donation. This link expires in 15 minutes.",
    cta: "Manage Donation",
    footer:
      "If you did not request this email, you can safely ignore it.",
  },
} as const;

function buildHtml(locale: "de" | "en", magicLink: string): string {
  const t = templates[locale];

  return `<!DOCTYPE html>
<html lang="${locale}">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#050505;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:40px 20px">
    <tr><td align="center">
      <table width="480" cellpadding="0" cellspacing="0" style="background:#0a0a0a;border-radius:8px;padding:40px">
        <tr><td>
          <p style="color:#39ff14;font-size:12px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 24px">NEON</p>
          <h1 style="color:#e5e5e5;font-size:24px;font-weight:700;margin:0 0 16px">${t.heading}</h1>
          <p style="color:#888;font-size:16px;line-height:1.6;margin:0 0 32px">${t.body}</p>
          <a href="${magicLink}" style="display:inline-block;background:#39ff14;color:#050505;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:4px;letter-spacing:0.05em">${t.cta}</a>
          <p style="color:#555;font-size:13px;line-height:1.5;margin:32px 0 0">${t.footer}</p>
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
  const t = templates[params.locale];

  await resend.emails.send({
    from: "NEON <noreply@neonclub.ch>",
    to: params.to,
    subject: t.subject,
    html: buildHtml(params.locale, params.magicLink),
  });
}
