import Image from "next/image";

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  small = false,
}: {
  image: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  small?: boolean;
}) {
  return (
    <section
      className={`relative flex w-full items-end overflow-hidden bg-ink ${
        small ? "h-[50vh] min-h-[420px]" : "h-[92vh] min-h-[620px]"
      }`}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40 lg:px-12 lg:pb-24">
        <p className="gold-rule text-xs uppercase tracking-widest-xl text-gold-light">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
