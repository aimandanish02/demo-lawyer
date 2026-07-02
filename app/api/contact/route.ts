import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(4000),
  turnstileToken: z.string().min(1),
  hpToken: z.string().optional().or(z.literal("")),
});

async function verifyTurnstile(token: string, remoteIp: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    throw new Error("TURNSTILE_SECRET_KEY not configured");
  }

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

async function sendContactEmail(input: { name: string; email: string; phone?: string; message: string }): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    throw new Error("Email sending is not configured");
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { name: "Website Contact Form", email: fromEmail },
      to: [{ email: toEmail }],
      replyTo: { email: input.email, name: input.name },
      subject: `New consult request from ${input.name}`,
      textContent: [
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        `Phone: ${input.phone || "-"}`,
        "",
        input.message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Brevo request failed (${res.status}): ${errBody}`);
  }
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return Response.json({ error: "Invalid form data" }, { status: 400 });
  }

  const { name, email, phone, message, turnstileToken, hpToken } = parsed.data;

  // Honeypot: bots fill hidden fields. Pretend success without sending mail.
  if (hpToken) {
    return Response.json({ ok: true });
  }

  const remoteIp = request.headers.get("cf-connecting-ip");

  try {
    const humanVerified = await verifyTurnstile(turnstileToken, remoteIp);
    if (!humanVerified) {
      return Response.json({ error: "Verification failed" }, { status: 400 });
    }

    await sendContactEmail({ name, email, phone, message });

    return Response.json({ ok: true });
  } catch (error: unknown) {
    console.error("[contact] failed to process submission", error);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
