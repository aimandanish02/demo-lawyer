"use client";

import { useState, type FormEvent } from "react";
import {
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
} from "@phosphor-icons/react";

const CONTACT_DETAILS = [
  { icon: MapPin, label: "1200 Lorem Avenue, Suite 400, Ipsum City" },
  { icon: Phone, label: "+1 (312) 555-0148" },
  { icon: EnvelopeSimple, label: "consult@loremipsumlaw.com" },
  { icon: Clock, label: "Mon-Fri, 9:00-18:00" },
];

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    window.setTimeout(() => {
      setStatus("success");
    }, 900);
  }

  return (
    <section id="contact" className="py-(--space-section)">
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
