"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export type Slide = { src: string; alt: string };

const SLIDE_DURATION = 2800;

type Variant = {
  initial: Record<string, number>;
  animate: Record<string, number>;
  exit: Record<string, number>;
};

const VARIANTS: Variant[] = [
  { initial: { opacity: 0, scale: 1.22, x: 90, rotate: 0 }, animate: { opacity: 1, scale: 1.06, x: 0, rotate: 0 }, exit: { opacity: 0, scale: 1.14, x: -90, rotate: 0 } },
  { initial: { opacity: 0, scale: 1.25, x: -90, rotate: -1.5 }, animate: { opacity: 1, scale: 1.05, x: 0, rotate: 0 }, exit: { opacity: 0, scale: 1.16, x: 90, rotate: 1.5 } },
  { initial: { opacity: 0, scale: 1.35, x: 0, rotate: 0 }, animate: { opacity: 1, scale: 1.04, x: 0, rotate: 0 }, exit: { opacity: 0, scale: 0.94, x: 0, rotate: 0 } },
  { initial: { opacity: 0, scale: 1.2, y: 100, rotate: 1.5 }, animate: { opacity: 1, scale: 1.06, y: 0, rotate: 0 }, exit: { opacity: 0, scale: 1.18, y: -100, rotate: -1.5 } },
];

export default function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [slides.length]);

  const variant = VARIANTS[index % VARIANTS.length];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={variant.initial}
          animate={variant.animate}
          exit={variant.exit}
          transition={{
            opacity: { duration: 0.7, ease: "easeInOut" },
            default: { duration: SLIDE_DURATION / 1000 + 0.3, ease: [0.16, 1, 0.3, 1] },
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
