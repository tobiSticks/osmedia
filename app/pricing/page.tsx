import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { pricing, getCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing — OSmedia Creation",
  description:
    "Pricing guide for OSmedia Creation's Commercial Studio, Maternity, Wedding and Corporate Events photography & film services.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        image="/images/maternity/client-19.jpg"
        eyebrow="Pricing"
        title="Clear packages, honest starting points."
        subtitle="A guide to how we price each service. Every project is a little different, so treat these as a starting point — we'll always confirm exact scope before you book."
        small
      />

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-24">
          {pricing.map((group, gi) => {
            const category = getCategory(group.category);
            return (
              <div key={group.category}>
                <Reveal>
                  <p className="gold-rule text-xs uppercase tracking-widest-xl text-gold">
                    {category.tagline}
                  </p>
                  <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
                    {category.label}
                  </h2>
                </Reveal>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                  {group.tiers.map((tier, ti) => (
                    <Reveal key={tier.name} delay={ti * 100 + gi * 40}>
                      <div className="flex h-full flex-col border border-ink/10 bg-white/50 p-8">
                        <p className="text-xs uppercase tracking-widest-xl text-stone">
                          {tier.name}
                        </p>
                        <p className="mt-3 font-display text-3xl text-ink">{tier.price}</p>
                        <p className="mt-4 text-sm leading-relaxed text-stone">
                          {tier.description}
                        </p>
                        <ul className="mt-6 flex-1 space-y-3">
                          {tier.inclusions.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-ink">
                              <Check size={15} className="mt-0.5 shrink-0 text-gold" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/contact"
                          className="mt-8 inline-flex items-center justify-center gap-2 border border-ink px-6 py-3 text-xs uppercase tracking-widest-xl text-ink transition-colors hover:bg-ink hover:text-white"
                        >
                          Enquire <ArrowRight size={14} />
                        </Link>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
              Need something bespoke?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              Multi-day shoots, retainers and combined packages are all
              available — tell us what you have in mind.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white px-8 py-4 text-xs uppercase tracking-widest-xl text-ink transition-colors hover:bg-gold hover:text-white"
              >
                Request a Custom Quote <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
