"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

const SESSION_TYPES = [
  "Wedding",
  "Event",
  "Commercial",
  "Portrait",
  "Something else",
];

const inputClasses =
  "w-full border-b border-ink/20 bg-transparent py-3 text-sm text-ink placeholder:text-stone/70 focus:border-gold focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setErrorMessage(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 border border-gold/30 bg-cream/60 px-8 py-16 text-center">
        <CheckCircle2 className="text-gold" size={40} />
        <h3 className="font-display text-2xl text-ink">Enquiry sent</h3>
        <p className="max-w-sm text-sm text-stone">
          Thank you for reaching out. We typically reply within 24 hours with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* honeypot — hidden from real users, visible to bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs uppercase tracking-widest-xl text-stone">
            Name
          </label>
          <input required name="name" type="text" placeholder="Your full name" className={inputClasses} />
        </div>
        <div>
          <label className="mb-1 block text-xs uppercase tracking-widest-xl text-stone">
            Email
          </label>
          <input required name="email" type="email" placeholder="you@email.com" className={inputClasses} />
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs uppercase tracking-widest-xl text-stone">
            Phone (optional)
          </label>
          <input name="phone" type="tel" placeholder="+1 (555) 000-0000" className={inputClasses} />
        </div>
        <div>
          <label className="mb-1 block text-xs uppercase tracking-widest-xl text-stone">
            I&apos;m enquiring about
          </label>
          <select name="sessionType" defaultValue="Wedding" className={`${inputClasses} appearance-none`}>
            {SESSION_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs uppercase tracking-widest-xl text-stone">
            Preferred date (optional)
          </label>
          <input name="date" type="date" className={inputClasses} />
        </div>
        <div>
          <label className="mb-1 block text-xs uppercase tracking-widest-xl text-stone">
            Location (optional)
          </label>
          <input name="location" type="text" placeholder="City, venue..." className={inputClasses} />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs uppercase tracking-widest-xl text-stone">
          Tell us about your vision
        </label>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Share a few details — date, location, style you love..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 bg-ink px-8 py-4 text-xs uppercase tracking-widest-xl text-white transition-colors hover:bg-gold disabled:opacity-60"
      >
        {status === "loading" && <Loader2 className="animate-spin" size={16} />}
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
