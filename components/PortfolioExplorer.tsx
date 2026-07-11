"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import GalleryGrid from "@/components/GalleryGrid";
import { categories, gallery, type Category } from "@/lib/data";

const CATEGORY_KEYS = categories.map((c) => c.key);

export default function PortfolioExplorer() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("category");
  const [active, setActive] = useState<Category | "all">(
    initial && CATEGORY_KEYS.includes(initial as Category) ? (initial as Category) : "all"
  );

  const filtered = useMemo(
    () => (active === "all" ? gallery : gallery.filter((img) => img.category === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-3 pb-14">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest-xl transition-colors ${
            active === "all"
              ? "border-ink bg-ink text-white"
              : "border-ink/20 text-stone hover:border-ink/50"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest-xl transition-colors ${
              active === cat.key
                ? "border-ink bg-ink text-white"
                : "border-ink/20 text-stone hover:border-ink/50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <GalleryGrid images={filtered} />
    </div>
  );
}
