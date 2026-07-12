import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import HeroSlideshow from "@/components/HeroSlideshow";
import Testimonials from "@/components/Testimonials";
import { categories, gallery, reels, siteConfig } from "@/lib/data";

const featured = gallery.filter((img) =>
  [
    "wedding-17",
    "wedding-27",
    "event-04",
    "commercial/client-01",
    "commercial/client-14",
    "wedding/wedding-16",
    "maternity/client-27",
    "commercial/client-58",
  ].some((id) => img.src.includes(id))
);

const heroSlides = [
  { src: "/images/maternity/client-35.jpg", alt: "Maternity portrait in a black dress" },
  { src: "/images/commercial/client-24.jpg", alt: "Studio portrait of two young siblings" },
  { src: "/images/commercial/client-75.jpeg", alt: "Studio portrait in a tie-dye gown and wide-brim hat", position: "50% 25%" },
  { src: "/images/commercial/client-17.jpg", alt: "Studio portrait of a woman in a birdcage veil" },
  { src: "/images/commercial/client-14.jpg", alt: "Studio portrait of a woman in traditional gele and coral beads" },
  { src: "/images/wedding/wedding-29.jpg", alt: "Traditional wedding couple in purple and pink aso-oke", position: "50% 32%" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-screen min-h-[680px] w-full items-center overflow-hidden bg-ink">
        <HeroSlideshow slides={heroSlides} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12">
          <p className="text-xs uppercase tracking-widest-xl text-gold-light">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Stories worth remembering, told frame by frame.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
            {siteConfig.name} is a commercial studio photography and film
            house — capturing brands, events, weddings and real-life stories,
            with a timeless, editorial eye.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-white px-7 py-4 text-xs uppercase tracking-widest-xl text-ink transition-colors hover:bg-gold hover:text-white"
            >
              View Portfolio <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/40 px-7 py-4 text-xs uppercase tracking-widest-xl text-white transition-colors hover:border-white"
            >
              Enquire Now
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex">
          <span className="text-[10px] uppercase tracking-widest-xl">Scroll</span>
          <span className="h-10 w-px bg-white/40" />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-paper py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="gold-rule text-xs uppercase tracking-widest-xl text-gold">
                The Studio
              </p>
              <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
                Photography that feels like the moment it captured.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-stone sm:text-base">
                Founded on the belief that great images come from genuine
                moments, {siteConfig.name} works across commercial studio
                sessions, maternity, weddings and corporate events —
                always led by light, emotion and detail.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest-xl text-ink hover:text-gold"
              >
                Meet the Studio <ArrowRight size={15} />
              </Link>
            </Reveal>
            <Reveal delay={150} className="relative aspect-[4/5] w-full">
              <Image
                src="/images/about/author.jpg"
                alt="Portrait of the photographer behind OSmedia Creation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="bg-ink py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="What We Shoot"
              title="Every occasion, one dedicated eye."
              subtitle="From studio sessions to full wedding coverage, each project gets the same considered, editorial approach."
              center
              dark
            />
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <Reveal key={cat.key} delay={i * 100}>
                <Link
                  href={`/services/${cat.key}`}
                  className="group relative block aspect-[3/4] overflow-hidden"
                >
                  <Image
                    src={cat.cover}
                    alt={cat.label}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent transition-colors group-hover:from-ink/90" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[10px] uppercase tracking-widest-xl text-gold-light">
                      {cat.tagline}
                    </p>
                    <h3 className="mt-1 font-display text-xl text-white">{cat.label}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/60">
                      {cat.blurb}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-paper py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Selected Work"
              title="A glimpse into the archive."
              center
            />
          </Reveal>
          <div className="mt-16">
            <GalleryGrid images={featured} />
          </div>
          <div className="mt-14 flex justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border border-ink px-8 py-4 text-xs uppercase tracking-widest-xl text-ink transition-colors hover:bg-ink hover:text-white"
            >
              View Full Portfolio <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reels teaser */}
      <section className="bg-cream py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal className="relative aspect-video w-full overflow-hidden">
              <Image
                src={reels[0].poster}
                alt={reels[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/reels"
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 text-white transition-all hover:scale-110 hover:border-gold hover:text-gold"
                >
                  <Play size={22} fill="currentColor" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <p className="gold-rule text-xs uppercase tracking-widest-xl text-gold">
                Motion
              </p>
              <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
                Reels that move the way memories do.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-stone sm:text-base">
                Alongside stills, we craft cinematic event films, corporate
                recaps, brand reels and maternity films — content clients
                revisit for years to come.
              </p>
              <Link
                href="/reels"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest-xl text-ink hover:text-gold"
              >
                Watch the Reels <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-paper py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <SectionHeading eyebrow="Kind Words" title="From those we've worked with." center />
          </Reveal>
          <div className="mt-16">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-32">
        <Image
          src="/images/hero/hero-ceremony.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="gold-rule gold-rule--center text-xs uppercase tracking-widest-xl text-gold-light">
              Let&apos;s Work Together
            </p>
            <h2 className="mt-6 font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Have a shoot, event or story worth capturing?
            </h2>
            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white px-8 py-4 text-xs uppercase tracking-widest-xl text-ink transition-colors hover:bg-gold hover:text-white"
              >
                Start an Enquiry <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
