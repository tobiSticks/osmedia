import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/data";
import { InstagramIcon, FacebookIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact — OSmedia Creation",
  description:
    "Get in touch with OSmedia Creation to enquire about commercial studio, maternity, wedding or corporate photography.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/corporate/event-03.jpg"
        eyebrow="Contact"
        title="Let's talk about your story."
        subtitle="Whether it's a wedding date, an upcoming event or a brand shoot — tell us a little about it and we'll take it from there."
        small
      />

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="gold-rule text-xs uppercase tracking-widest-xl text-gold">
                Get in Touch
              </p>
              <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
                We&apos;d love to hear from you.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-stone">
                Fill out the form and we&apos;ll respond within 24 hours. Prefer to
                reach out directly? Use the details below.
              </p>

              <ul className="mt-10 space-y-6">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest-xl text-stone">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm text-ink hover:text-gold">
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest-xl text-stone">Phone</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-sm text-ink hover:text-gold"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest-xl text-stone">Location</p>
                    <a
                      href={siteConfig.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink hover:text-gold"
                    >
                      {siteConfig.location}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-10 flex gap-4">
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold"
                >
                  <InstagramIcon size={17} />
                </a>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold"
                >
                  <FacebookIcon size={17} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
