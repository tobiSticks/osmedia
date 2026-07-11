export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`gold-rule ${center ? "gold-rule--center" : ""} text-xs uppercase tracking-widest-xl ${
          dark ? "text-gold-light" : "text-gold"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-6 font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-sm leading-relaxed sm:text-base ${
            dark ? "text-white/70" : "text-stone"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
