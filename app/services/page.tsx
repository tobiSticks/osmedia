import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — OSmedia Creation",
  description:
    "Explore OSmedia Creation's services — Commercial Studio, Maternity, Weddings and Corporate Events photography & film.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/commercial/client-05.jpg"
        eyebrow="Services"
        title="Four disciplines, one standard of craft."
        subtitle="Select a service below to see the work, the approach, and what's included."
      />

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2">
            {categories.map((cat, i) => (
              <Reveal key={cat.key} delay={i * 100}>
                <Link
                  href={`/services/${cat.key}`}
                  className="group relative block aspect-[4/5] overflow-hidden bg-ink sm:aspect-square lg:aspect-[4/5]"
                >
                  <Image
                    src={cat.cover}
                    alt={cat.label}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10 transition-colors group-hover:from-ink/95" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                    <p className="text-xs uppercase tracking-widest-xl text-gold-light">
                      {cat.label}
                    </p>
                    <h2 className="mt-3 font-display text-3xl italic text-white sm:text-4xl">
                      {cat.tagline}
                    </h2>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                      {cat.blurb}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest-xl text-white transition-colors group-hover:text-gold">
                      View Service <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Not sure which service fits?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
              Tell us a little about your project and we&apos;ll point you in the
              right direction — no obligation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ink px-8 py-4 text-xs uppercase tracking-widest-xl text-white transition-colors hover:bg-gold"
              >
                Get in Touch
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 border border-ink px-8 py-4 text-xs uppercase tracking-widest-xl text-ink transition-colors hover:bg-ink hover:text-white"
              >
                See Pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
