import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message, company } = body as Record<string, string>;

  // honeypot field — bots fill hidden inputs, real users never do
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // TODO: wire up an email provider (e.g. Resend) to forward this enquiry
  // to the studio inbox. For now the submission is validated and accepted.
  console.log("New OSmedia enquiry:", body);

  return NextResponse.json({ ok: true });
}
