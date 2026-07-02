"use client";

import { useState, type FormEvent } from "react";
import Script from "next/script";
import {
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
} from "@phosphor-icons/react";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

const CONTACT_DETAILS = [
  { icon: MapPin, label: "1200 Lorem Avenue, Suite 400, Ipsum City" },
  { icon: Phone, label: "+1 (312) 555-0148" },
  { icon: EnvelopeSimple, label: "consult@loremipsumlaw.com" },
  { icon: Clock, label: "Mon-Fri, 9:00-18:00" },
];

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          hpToken: formData.get("hpToken"),
          turnstileToken: formData.get("cf-turnstile-response"),
        }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (error: unknown) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
    }
  }

  return (
    <section id="contact" className="py-(--space-section)">
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" async defer />

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl leading-tight text-bone md:text-5xl">
            Nostrud exercitation.
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-bone-muted">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute
            irure dolor.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {CONTACT_DETAILS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-bone">
                <Icon size={20} weight="light" className="shrink-0 text-moss-strong" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-7">
          {status === "success" ? (
            <div
              role="status"
              className="flex min-h-[320px] flex-col justify-center rounded-[20px] border border-moss/40 bg-moss/10 p-8"
            >
              <p className="font-display text-2xl text-bone">
                Gratias tibi ago.
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-bone-muted">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate={false}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-bone">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="rounded-lg border border-ink-line bg-ink-raised px-4 py-3 text-sm text-bone placeholder:text-bone-muted/60 outline-none focus:border-moss focus:ring-2 focus:ring-moss/40"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-bone">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="rounded-lg border border-ink-line bg-ink-raised px-4 py-3 text-sm text-bone placeholder:text-bone-muted/60 outline-none focus:border-moss focus:ring-2 focus:ring-moss/40"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-bone">
                  Phone <span className="text-bone-muted">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="rounded-lg border border-ink-line bg-ink-raised px-4 py-3 text-sm text-bone placeholder:text-bone-muted/60 outline-none focus:border-moss focus:ring-2 focus:ring-moss/40"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-bone">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="resize-none rounded-lg border border-ink-line bg-ink-raised px-4 py-3 text-sm text-bone placeholder:text-bone-muted/60 outline-none focus:border-moss focus:ring-2 focus:ring-moss/40"
                />
                <p className="text-xs text-bone-muted">
                  Lorem ipsum dolor sit amet, do not include privileged
                  details in this form.
                </p>
              </div>

              <div
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
                aria-hidden="true"
              >
                <label htmlFor="hp-token">Leave this field empty</label>
                <input
                  id="hp-token"
                  name="hpToken"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  data-lpignore="true"
                  data-1p-ignore="true"
                />
              </div>

              <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-theme="dark" />

              {status === "error" && errorMessage ? (
                <p role="alert" className="text-sm text-red-400">
                  {errorMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-moss px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-moss-strong disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
              >
                {status === "submitting" ? "Sending..." : "Book Consult"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
