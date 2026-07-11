import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import PortfolioExplorer from "@/components/PortfolioExplorer";

export const metadata: Metadata = {
  title: "Portfolio — OSmedia Creation",
  description:
    "Browse OSmedia Creation's portfolio across commercial studio, maternity, weddings and corporate events.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        image="/images/wedding/wedding-04.jpg"
        eyebrow="Portfolio"
        title="A collection of moments, well kept."
        subtitle="Commercial studio, maternity, weddings and corporate events — filter by category to explore the archive."
      />
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Suspense fallback={null}>
            <PortfolioExplorer />
          </Suspense>
        </div>
      </section>
    </>
  );
}
