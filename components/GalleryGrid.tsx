"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/data";

const SPAN_CLASSES: Record<NonNullable<GalleryImage["span"]>, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 [grid-auto-rows:220px] sm:gap-4 md:grid-cols-4 md:[grid-auto-rows:260px]">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActiveIndex(i)}
            className={`group relative overflow-hidden bg-cream ${
              img.span ? SPAN_CLASSES[img.span] : ""
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute right-5 top-5 text-white/70 transition-colors hover:text-white"
          >
            <X size={28} />
          </button>

          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-white/70 transition-colors hover:text-white sm:left-6"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-white/70 transition-colors hover:text-white sm:right-6"
          >
            <ChevronRight size={32} />
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest-xl text-white/50">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
