import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ReelGrid from "@/components/ReelGrid";
import { reels } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reels — OSmedia Creation",
  description:
    "Watch OSmedia Creation's reels — cinematic event films, corporate recaps, brand content and maternity films.",
};

export default function ReelsPage() {
  return (
    <>
      <PageHero
        image="/images/corporate/event-06.jpg"
        eyebrow="Reels"
        title="Moving images, still worth savouring."
        subtitle="Cinematic event films, corporate recaps, brand reels and maternity films — short-form content crafted alongside our photography."
      />
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ReelGrid reels={reels} />
        </div>
      </section>
    </>
  );
}
