import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <div className="grid gap-10 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={i * 120}>
          <div className="flex h-full flex-col border border-ink/10 bg-white/40 p-8">
            <Quote className="text-gold" size={26} />
            <p className="mt-6 flex-1 font-display text-lg italic leading-relaxed text-ink">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 border-t border-ink/10 pt-4">
              <p className="text-sm font-medium text-ink">{t.name}</p>
              <p className="text-xs uppercase tracking-widest-xl text-stone">{t.role}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
