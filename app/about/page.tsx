import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Aperture, Camera, Heart, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — OSmedia Creation",
  description:
    "Learn about OSmedia Creation — a commercial studio photography and film house specializing in studio, maternity, wedding and corporate work.",
};

const stats = [
  { value: "150+", label: "Studio Sessions" },
  { value: "300+", label: "Events Covered" },
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Brands & Businesses" },
];

const values = [
  {
    icon: Heart,
    title: "Authentic Moments",
    text: "We shoot what's real — genuine expressions over stiff, staged poses.",
  },
  {
    icon: Aperture,
    title: "Considered Craft",
    text: "Every frame is composed with intention — light, timing and detail all matter.",
  },
  {
    icon: Camera,
    title: "Reliable Delivery",
    text: "Clear timelines and fast turnaround, so you're never left waiting.",
  },
  {
    icon: Sparkles,
    title: "A Personal Touch",
    text: "Small enough to know your story, experienced enough to tell it well.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/hero/hero-about.jpg"
        eyebrow="About"
        title={`The studio behind ${siteConfig.shortName}.`}
        subtitle={`${siteConfig.name} is a commercial studio photography and film house, built on one idea: the best images come from real moments, not manufactured ones.`}
      />

      <section className="bg-paper py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/about/gear-01.jpg"
                alt="Camera and studio lens equipment used by OSmedia Creation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={150}>
              <p className="gold-rule text-xs uppercase tracking-widest-xl text-gold">
                Our Story
              </p>
              <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
                Photography, practiced as a craft — not a formula.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-stone sm:text-base">
                {siteConfig.name} began with a simple frustration: too much
                commercial photography felt generic, over-posed and disconnected
                from the people and products in front of the camera. We set out
                to do it differently — spending time understanding each client,
                each brand and each occasion before ever picking up a camera.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
                What started as a studio-first practice — headshots, product
                work and birthday sessions — has grown into a full creative
                house. Today we cover maternity, weddings and corporate
                events, alongside branding, social content and short-form
                video, all shot with the same studio discipline we started
                with: clean light, careful composition, and an editorial
                hand in the edit.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
                We work as a small, dedicated team rather than a factory —
                which means every project gets a considered plan, a consistent
                point of contact, and a gallery that feels genuinely curated,
                not dumped.
              </p>
              <Link
                href="/portfolio"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest-xl text-ink hover:text-gold"
              >
                See the Work <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="text-center">
                <p className="font-display text-4xl text-gold sm:text-5xl">{s.value}</p>
                <p className="mt-3 text-xs uppercase tracking-widest-xl text-white/60">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="What Guides Us"
              title="The values behind every shoot."
              center
            />
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <v.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-28">
        <Image
          src="/images/wedding/wedding-13.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
              Let&apos;s create something worth remembering.
            </h2>
            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white px-8 py-4 text-xs uppercase tracking-widest-xl text-ink transition-colors hover:bg-gold hover:text-white"
              >
                Start a Conversation <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
