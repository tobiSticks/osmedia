"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import type { Reel } from "@/lib/data";

export default function ReelGrid({ reels }: { reels: Reel[] }) {
  const [active, setActive] = useState<Reel | null>(null);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2">
        {reels.map((reel) => (
          <button
            key={reel.title}
            onClick={() => setActive(reel)}
            className="group relative aspect-video overflow-hidden bg-ink text-left"
          >
            <Image
              src={reel.poster}
              alt={reel.title}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover opacity-80 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:text-gold">
                <Play size={22} fill="currentColor" />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
              <h3 className="font-display text-lg text-white">{reel.title}</h3>
              <span className="text-xs text-white/60">{reel.duration}</span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 text-white/70 transition-colors hover:text-white"
          >
            <X size={28} />
          </button>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <video
              src={active.video}
              controls
              autoPlay
              className="aspect-video w-full bg-black"
            />
            <p className="mt-4 text-center font-display text-lg text-white">{active.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
