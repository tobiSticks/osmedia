import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import { categories, gallery } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.key === slug);
  if (!category) return {};
  return {
    title: `${category.label} — OSmedia Creation`,
    description: category.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.key === slug);
  if (!category) notFound();

  const images = gallery.filter((img) => img.category === category.key);

  return (
    <>
      <PageHero
        image={category.cover}
        eyebrow={category.label}
        title={category.tagline}
        subtitle={category.description}
      />

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="gold-rule text-xs uppercase tracking-widest-xl text-gold">
                What&apos;s Included
              </p>
              <ul className="mt-6 space-y-4">
                {category.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-ink">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-ink px-6 py-4 text-xs uppercase tracking-widest-xl text-white transition-colors hover:bg-gold"
                >
                  Enquire About {category.label} <ArrowRight size={15} />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 border border-ink px-6 py-4 text-xs uppercase tracking-widest-xl text-ink transition-colors hover:bg-ink hover:text-white"
                >
                  See Pricing
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <p className="gold-rule text-xs uppercase tracking-widest-xl text-gold">
                {category.tagline}
              </p>
              <h2 className="mt-6 font-display text-2xl leading-tight sm:text-3xl">
                A closer look at our {category.label.toLowerCase()} work.
              </h2>
              <div className="mt-10">
                <GalleryGrid images={images} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
