export const siteConfig = {
  shortName: "OSmedia",
  name: "OSmedia Creation",
  tagline: "Commercial & Studio Photography",
  description:
    "OSmedia Creation is a commercial studio photography and film house — specializing in studio, maternity, wedding and corporate work, built on a foundation of clean light and honest storytelling.",
  email: "hello@osmediacreation.com",
  phone: "+234 801 234 5678",
  location: "Lagos, Nigeria — available for travel",
  instagram: "https://instagram.com/osmediacreation",
  facebook: "https://facebook.com/osmediacreation",
  pinterest: "https://pinterest.com/osmediacreation",
};

export type Category = "commercial" | "maternity" | "wedding" | "corporate";

export const categories: {
  key: Category;
  label: string;
  tagline: string;
  blurb: string;
  description: string;
  features: string[];
  cover: string;
}[] = [
  {
    key: "commercial",
    label: "Commercial Studio",
    tagline: "Studio Gallery",
    blurb: "Portraits, brand shoots and birthday sessions — shot in studio with full creative control.",
    description:
      "Our studio is where brands, families and individuals come to be seen at their best. Personal branding, corporate portraits, birthday celebrations and family sessions — all shot with controlled lighting, considered styling and a clean, editorial finish. This is our core discipline and the heart of OSmedia Creation.",
    features: [
      "Personal & brand portraits",
      "Corporate & professional headshots",
      "Birthday shoots",
      "Family & children's sessions",
      "Couple & individual portraits",
      "Social media content add-ons",
    ],
    cover: "/images/commercial/client-05.jpg",
  },
  {
    key: "maternity",
    label: "Maternity",
    tagline: "Bump to Baby",
    blurb: "Studio sessions that celebrate the wait — for solo shoots or the whole family.",
    description:
      "Maternity is one of our favourite stories to tell. From soft, flowing studio gowns to playful couple and family portraits, every session is styled to celebrate the moment — captured with warm light and genuine emotion, ready to treasure long after the baby arrives.",
    features: [
      "Solo & couple maternity sessions",
      "Studio wardrobe & styling guidance",
      "Family & sibling portraits",
      "Multiple outfit changes",
      "Curated, hand-edited gallery",
    ],
    cover: "/images/maternity/client-20.jpg",
  },
  {
    key: "wedding",
    label: "Weddings",
    tagline: "Wedding Stories",
    blurb: "Full-day coverage of vows, details and the moments in between.",
    description:
      "From the first look to the last dance, we tell the full story of your day — the nerves, the tears, the dancing — with a mix of directed portraits and documentary-style candids, plus a cinematic film to relive it all.",
    features: [
      "Engagement sessions",
      "Full & half-day coverage",
      "Second shooter available",
      "Cinematic highlight film",
      "Same-day preview gallery",
    ],
    cover: "/images/wedding/wedding-11.jpg",
  },
  {
    key: "corporate",
    label: "Corporate Events",
    tagline: "Corporate Chronicles",
    blurb: "Conferences, launches, galas and business milestones — covered candidly and professionally.",
    description:
      "From keynote stages to boardroom handshakes, we cover corporate events the way they deserve — professional, unobtrusive and fast turnaround, so your brand's biggest moments are ready to share while they're still making headlines.",
    features: [
      "Conferences & seminars",
      "Product launches & galas",
      "Team & office documentation",
      "Corporate promos & adverts",
      "Same-week digital delivery",
    ],
    cover: "/images/corporate/event-04.jpg",
  },
];

export function getCategory(key: Category) {
  return categories.find((c) => c.key === key)!;
}

export type GalleryImage = {
  src: string;
  alt: string;
  category: Category;
  span?: "tall" | "wide" | "normal";
};

export const gallery: GalleryImage[] = [
  // Commercial Studio
  { src: "/images/commercial/client-46.jpg", alt: "Studio portrait of children in traditional print outfits", category: "commercial" },
  { src: "/images/commercial/client-14.jpg", alt: "Studio portrait of a woman in traditional gele and coral beads", category: "commercial", span: "tall" },
  { src: "/images/commercial/client-47.jpg", alt: "Studio portrait of children in traditional print outfits", category: "commercial" },
  { src: "/images/commercial/client-15.jpg", alt: "Studio portrait of a woman in traditional gold attire with a hand fan", category: "commercial" },
  { src: "/images/commercial/client-48.jpg", alt: "Studio portrait of children in traditional print outfits", category: "commercial" },
  { src: "/images/commercial/client-16.jpg", alt: "Studio portrait of a woman in a birdcage veil", category: "commercial" },
  { src: "/images/commercial/client-49.jpg", alt: "Studio portrait of children in traditional print outfits", category: "commercial", span: "tall" },
  { src: "/images/commercial/client-17.jpg", alt: "Studio portrait of a woman in a birdcage veil", category: "commercial", span: "wide" },
  { src: "/images/commercial/client-50.jpg", alt: "Studio portrait of children in traditional print outfits", category: "commercial" },
  { src: "/images/commercial/client-18.jpg", alt: "Studio portrait of a woman wrapped in green fabric", category: "commercial" },
  { src: "/images/commercial/client-51.jpg", alt: "Studio portrait of children in traditional print outfits", category: "commercial" },
  { src: "/images/commercial/client-19.jpg", alt: "Studio portrait of a woman wrapped in green fabric", category: "commercial" },
  { src: "/images/commercial/client-52.jpg", alt: "Studio portrait of children in traditional print outfits", category: "commercial", span: "wide" },
  { src: "/images/commercial/client-20.jpg", alt: "Studio portrait of a woman in a red dress", category: "commercial" },
  { src: "/images/commercial/client-21.jpg", alt: "Studio portrait of a woman in a blue ankara gown", category: "commercial", span: "tall" },
  { src: "/images/commercial/client-22.jpg", alt: "Studio portrait of a woman in a blue ankara gown", category: "commercial" },
  { src: "/images/commercial/client-01.jpg", alt: "Studio portrait of a Senior Advocate in ceremonial legal robes", category: "commercial" },
  { src: "/images/commercial/client-02.jpg", alt: "Studio portrait of a Senior Advocate in ceremonial legal robes", category: "commercial" },
  { src: "/images/commercial/client-03.jpg", alt: "Studio portrait of a Senior Advocate in ceremonial legal robes", category: "commercial", span: "wide" },
  { src: "/images/commercial/client-04.jpg", alt: "Studio portrait of a Senior Advocate in ceremonial legal robes", category: "commercial" },
  { src: "/images/commercial/client-05.jpg", alt: "Studio portrait of a Senior Advocate in ceremonial legal robes", category: "commercial" },
  { src: "/images/commercial/client-06.jpg", alt: "Studio portrait of a Senior Advocate in ceremonial legal robes", category: "commercial" },
  { src: "/images/commercial/client-07.jpg", alt: "Studio portrait of a Senior Advocate in ceremonial legal robes", category: "commercial", span: "tall" },
  { src: "/images/commercial/client-08.jpg", alt: "Studio portrait of a Senior Advocate in ceremonial legal robes", category: "commercial" },
  { src: "/images/commercial/client-09.jpg", alt: "Studio portrait of a Senior Advocate in ceremonial legal robes", category: "commercial" },
  { src: "/images/commercial/client-10.jpg", alt: "Studio portrait of a Senior Advocate in ceremonial legal robes", category: "commercial", span: "wide" },
  { src: "/images/commercial/client-11.jpg", alt: "Studio portrait of a Senior Advocate in ceremonial legal robes", category: "commercial" },
  { src: "/images/commercial/client-12.jpg", alt: "Studio portrait of a Senior Advocate in ceremonial legal robes", category: "commercial" },
  { src: "/images/commercial/client-13.jpg", alt: "Studio portrait of a Senior Advocate in ceremonial legal robes", category: "commercial" },
  { src: "/images/commercial/client-23.jpg", alt: "Studio portrait of two young siblings", category: "commercial" },
  { src: "/images/commercial/client-24.jpg", alt: "Studio portrait of two young siblings", category: "commercial", span: "wide" },
  { src: "/images/commercial/client-25.jpg", alt: "Studio portrait of a man in traditional attire", category: "commercial" },
  { src: "/images/commercial/client-26.jpg", alt: "Studio portrait of a man in traditional attire, seated", category: "commercial" },
  { src: "/images/commercial/client-27.jpg", alt: "Studio portrait of a man in traditional attire, seated", category: "commercial" },
  { src: "/images/commercial/client-28.jpg", alt: "Studio portrait of a man in white agbada", category: "commercial", span: "tall" },
  { src: "/images/commercial/client-29.jpg", alt: "Studio portrait of a man in white agbada", category: "commercial" },
  { src: "/images/commercial/client-30.jpg", alt: "Studio portrait of a woman in legal robes", category: "commercial" },
  { src: "/images/commercial/client-31.jpg", alt: "Studio portrait of a woman in legal robes", category: "commercial", span: "wide" },
  { src: "/images/commercial/client-32.jpg", alt: "Studio portrait of a woman in legal robes", category: "commercial" },
  { src: "/images/commercial/client-33.jpg", alt: "Studio fashion portrait in a black leather jacket", category: "commercial" },
  { src: "/images/commercial/client-34.jpg", alt: "Studio fashion portrait in a black leather jacket", category: "commercial" },
  { src: "/images/commercial/client-35.jpg", alt: "Studio fashion portrait in a black leather jacket", category: "commercial", span: "tall" },
  { src: "/images/commercial/client-36.jpg", alt: "Studio fashion portrait in a black leather jacket", category: "commercial" },
  { src: "/images/commercial/client-37.jpg", alt: "Studio fashion portrait in a black leather jacket", category: "commercial" },
  { src: "/images/commercial/client-38.jpg", alt: "Birthday studio portrait of a young girl", category: "commercial", span: "wide" },
  { src: "/images/commercial/client-39.jpg", alt: "Birthday studio portrait of a young girl", category: "commercial" },
  { src: "/images/commercial/client-40.jpg", alt: "Birthday studio portrait of a young girl", category: "commercial" },
  { src: "/images/commercial/client-41.jpg", alt: "Birthday studio portrait of a young girl", category: "commercial" },
  { src: "/images/commercial/client-42.jpg", alt: "Birthday studio portrait of a young girl", category: "commercial", span: "tall" },
  { src: "/images/commercial/client-43.jpg", alt: "Birthday studio portrait of a young girl", category: "commercial" },
  { src: "/images/commercial/client-44.jpg", alt: "Birthday studio portrait of a young boy turning four", category: "commercial" },
  { src: "/images/commercial/client-45.jpg", alt: "Birthday studio portrait of a young boy turning four", category: "commercial", span: "wide" },
  { src: "/images/commercial/client-53.jpg", alt: "Birthday studio portrait of a young boy", category: "commercial" },
  { src: "/images/commercial/client-54.jpg", alt: "Studio portrait, personal branding session", category: "commercial" },
  { src: "/images/commercial/client-55.jpg", alt: "Studio portrait, personal branding session", category: "commercial" },
  { src: "/images/commercial/client-56.jpg", alt: "Studio portrait, personal branding session", category: "commercial", span: "tall" },
  { src: "/images/commercial/client-57.jpg", alt: "Studio portrait, personal branding session", category: "commercial" },
  { src: "/images/commercial/client-58.jpg", alt: "Studio branding portrait for a personal chef business", category: "commercial" },
  { src: "/images/commercial/client-59.jpg", alt: "Studio branding portrait for a personal chef business", category: "commercial", span: "wide" },
  { src: "/images/commercial/client-60.jpg", alt: "Studio branding portrait for a personal chef business", category: "commercial" },
  { src: "/images/commercial/client-61.jpg", alt: "Studio branding portrait for a personal chef business", category: "commercial" },
  { src: "/images/commercial/client-62.jpg", alt: "Studio branding portrait for a personal chef business", category: "commercial" },
  { src: "/images/commercial/client-63.jpg", alt: "Studio branding portrait for a personal chef business", category: "commercial", span: "tall" },
  { src: "/images/commercial/client-64.jpg", alt: "Studio portrait of a young girl in a peach gown", category: "commercial" },
  { src: "/images/commercial/client-65.jpg", alt: "Birthday studio portrait of a young boy turning three", category: "commercial" },
  { src: "/images/commercial/client-66.jpg", alt: "Birthday studio portrait of a young boy turning three", category: "commercial", span: "wide" },
  { src: "/images/commercial/client-67.jpg", alt: "Birthday studio portrait of a young boy turning three", category: "commercial" },
  { src: "/images/commercial/client-68.jpg", alt: "Birthday studio portrait of a young boy turning three", category: "commercial" },
  { src: "/images/commercial/client-69.jpg", alt: "Birthday studio portrait of a young boy turning three", category: "commercial" },
  { src: "/images/commercial/client-70.jpg", alt: "Birthday studio portrait of a young boy turning three", category: "commercial", span: "tall" },
  { src: "/images/commercial/client-71.jpg", alt: "Birthday studio portrait of a young boy turning three", category: "commercial" },
  { src: "/images/commercial/client-72.jpg", alt: "Birthday studio portrait of a young boy turning three", category: "commercial" },
  { src: "/images/commercial/client-73.jpg", alt: "Birthday studio portrait of a young boy turning three", category: "commercial", span: "wide" },
  { src: "/images/commercial/client-74.jpg", alt: "Birthday studio portrait of a young boy turning three", category: "commercial" },
  // Maternity
  { src: "/images/maternity/client-19.jpg", alt: "Maternity couple portrait in an evening gown", category: "maternity" },
  { src: "/images/maternity/client-20.jpg", alt: "Maternity portrait with a floral backdrop", category: "maternity" },
  { src: "/images/maternity/client-21.jpg", alt: "Close-up of hands cradling a baby bump", category: "maternity", span: "tall" },
  { src: "/images/maternity/client-22.jpg", alt: "Maternity couple portrait with a floral backdrop", category: "maternity" },
  { src: "/images/maternity/client-23.jpg", alt: "Maternity couple portrait with a floral backdrop", category: "maternity" },
  { src: "/images/maternity/client-24.jpg", alt: "Maternity couple portrait with a floral backdrop", category: "maternity", span: "wide" },
  { src: "/images/maternity/client-25.jpg", alt: "Maternity couple portrait with a floral backdrop", category: "maternity" },
  { src: "/images/maternity/client-26.jpg", alt: "Maternity couple portrait with a floral backdrop", category: "maternity" },
  { src: "/images/maternity/client-27.jpg", alt: "Maternity portrait against an \"M\" lettered backdrop", category: "maternity" },
  { src: "/images/maternity/client-28.jpg", alt: "Maternity portrait against an \"M\" lettered backdrop", category: "maternity", span: "tall" },
  { src: "/images/maternity/client-29.jpg", alt: "Maternity portrait against an \"M\" lettered backdrop", category: "maternity" },
  { src: "/images/maternity/client-30.jpg", alt: "Portrait of the father-to-be", category: "maternity" },
  { src: "/images/maternity/client-31.jpg", alt: "Maternity portrait in a fitted black gown", category: "maternity", span: "wide" },
  { src: "/images/maternity/client-32.jpg", alt: "Maternity portrait in a fitted black gown", category: "maternity" },
  { src: "/images/maternity/client-33.jpg", alt: "Maternity portrait in a fitted black gown", category: "maternity" },
  { src: "/images/maternity/client-34.jpg", alt: "Maternity portrait, reclining pose", category: "maternity" },
  { src: "/images/maternity/client-35.jpg", alt: "Maternity portrait, reclining pose", category: "maternity", span: "tall" },
  { src: "/images/maternity/client-36.jpg", alt: "Maternity portrait, reclining pose", category: "maternity" },
  { src: "/images/maternity/client-37.jpg", alt: "Maternity couple portrait, reclining", category: "maternity" },
  { src: "/images/maternity/client-38.jpg", alt: "Maternity couple portrait, embracing", category: "maternity", span: "wide" },
  { src: "/images/maternity/client-39.jpg", alt: "Maternity portrait, side profile", category: "maternity" },
  { src: "/images/maternity/client-40.jpg", alt: "Maternity couple portrait in an evening gown", category: "maternity" },
  // Weddings
  { src: "/images/wedding/wedding-11.jpg", alt: "Couple portrait in traditional wedding attire", category: "wedding" },
  { src: "/images/wedding/wedding-12.jpg", alt: "Couple portrait in traditional wedding attire", category: "wedding" },
  { src: "/images/wedding/wedding-13.jpg", alt: "Couple portrait in traditional wedding attire", category: "wedding", span: "wide" },
  { src: "/images/wedding/wedding-14.jpg", alt: "Couple portrait in traditional wedding attire", category: "wedding" },
  { src: "/images/wedding/wedding-15.jpg", alt: "Couple portrait in traditional wedding attire", category: "wedding" },
  { src: "/images/wedding/wedding-16.jpg", alt: "Studio couple portrait in white and coral", category: "wedding" },
  { src: "/images/wedding/wedding-17.jpg", alt: "Studio couple portrait in white and coral", category: "wedding", span: "tall" },
  { src: "/images/wedding/wedding-18.jpg", alt: "Studio couple portrait in white and coral", category: "wedding" },
  { src: "/images/wedding/wedding-19.jpg", alt: "Casual studio couple portrait", category: "wedding" },
  { src: "/images/wedding/wedding-20.jpg", alt: "Casual studio couple portrait", category: "wedding", span: "wide" },
  { src: "/images/wedding/wedding-21.jpg", alt: "Casual studio couple portrait", category: "wedding" },
  { src: "/images/wedding/wedding-22.jpg", alt: "Casual studio couple portrait", category: "wedding" },
  { src: "/images/wedding/wedding-23.jpg", alt: "Casual studio couple portrait", category: "wedding" },
  { src: "/images/wedding/wedding-24.jpg", alt: "Casual studio couple portrait", category: "wedding", span: "tall" },
  { src: "/images/wedding/wedding-25.jpg", alt: "Casual studio couple portrait", category: "wedding" },
  { src: "/images/wedding/wedding-26.jpg", alt: "Casual studio couple portrait", category: "wedding" },
  { src: "/images/wedding/wedding-27.jpg", alt: "Casual studio couple portrait", category: "wedding", span: "wide" },
  { src: "/images/wedding/wedding-28.jpg", alt: "Casual studio couple portrait", category: "wedding" },

  // Corporate Events
  { src: "/images/corporate/event-04.jpg", alt: "Conference stage lit for a keynote session", category: "corporate", span: "wide" },
  { src: "/images/corporate/event-05.jpg", alt: "Audience seated at a corporate conference", category: "corporate" },
  { src: "/images/corporate/event-01.jpg", alt: "Plated dinner service at a private corporate event", category: "corporate", span: "tall" },
  { src: "/images/corporate/event-03.jpg", alt: "Guests toasting with glasses raised", category: "corporate" },
  { src: "/images/corporate/event-02.jpg", alt: "Ballroom set with round tables ahead of a gala", category: "corporate", span: "wide" },
  { src: "/images/corporate/event-06.jpg", alt: "Concert-style event with dramatic stage lighting", category: "corporate" },
  { src: "/images/corporate/event-07.jpg", alt: "Workshop session in a modern studio space", category: "corporate" },
  { src: "/images/corporate/commercial-01.jpg", alt: "Team collaborating in a bright creative office", category: "corporate", span: "tall" },
  { src: "/images/corporate/handshake-01.jpg", alt: "Business handshake sealing a partnership", category: "corporate" },
  { src: "/images/corporate/highfive-01.jpg", alt: "Colleagues celebrating with a high five in the office", category: "corporate" },
  { src: "/images/corporate/meeting-01.jpg", alt: "Team gathered around a table for a meeting", category: "corporate", span: "wide" },
];

export type Reel = {
  title: string;
  category: Category;
  poster: string;
  video: string;
  duration: string;
};

export const reels: Reel[] = [
  {
    title: "Wedding Film — Golden Hour",
    category: "wedding",
    poster: "/images/wedding/wedding-14.jpg",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    duration: "3:42",
  },
  {
    title: "Corporate Conference Recap",
    category: "corporate",
    poster: "/images/corporate/event-04.jpg",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    duration: "1:47",
  },
  {
    title: "Brand Reel — Behind the Scenes",
    category: "commercial",
    poster: "/images/commercial/client-58.jpg",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    duration: "0:45",
  },
  {
    title: "Maternity Film — Bump to Baby",
    category: "maternity",
    poster: "/images/maternity/client-21.jpg",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    duration: "1:58",
  },
];

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  inclusions: string[];
};

export const pricing: { category: Category; tiers: PricingTier[] }[] = [
  {
    category: "commercial",
    tiers: [
      {
        name: "Mini Session",
        price: "₦50,000",
        description: "A quick, focused studio session — perfect for headshots or a birthday mini.",
        inclusions: ["30-minute studio session", "1 look / setup", "10 edited digital images"],
      },
      {
        name: "Signature Session",
        price: "₦120,000",
        description: "Our most popular studio package for portraits and family sessions.",
        inclusions: ["90-minute studio session", "Up to 3 looks / setups", "25 edited digital images", "Styling guidance"],
      },
      {
        name: "Brand Package",
        price: "From ₦300,000",
        description: "A full studio day for product or brand campaigns.",
        inclusions: ["Full-day studio access", "Unlimited setups", "50+ edited images", "Commercial usage license"],
      },
    ],
  },
  {
    category: "maternity",
    tiers: [
      {
        name: "Solo Session",
        price: "₦80,000",
        description: "A studio session just for the mother-to-be.",
        inclusions: ["60-minute studio session", "2 outfit changes", "15 edited digital images"],
      },
      {
        name: "Couple Session",
        price: "₦130,000",
        description: "Our most-booked maternity package, styled for two.",
        inclusions: ["90-minute studio session", "Up to 3 outfit changes", "25 edited digital images", "Styling guidance"],
      },
      {
        name: "Family Package",
        price: "From ₦180,000",
        description: "A full maternity session including siblings and family portraits.",
        inclusions: ["2-hour studio session", "Unlimited outfit changes", "40+ edited images", "Printed keepsake option"],
      },
    ],
  },
  {
    category: "wedding",
    tiers: [
      {
        name: "Elopement / Intimate",
        price: "₦250,000",
        description: "For small ceremonies and intimate celebrations.",
        inclusions: ["Up to 4 hours coverage", "1 photographer", "Online gallery"],
      },
      {
        name: "Classic Day",
        price: "₦450,000",
        description: "Our most-booked wedding package for a full day of coverage.",
        inclusions: ["Up to 8 hours coverage", "2 photographers", "Engagement session", "Cinematic highlight film"],
      },
      {
        name: "Signature Wedding",
        price: "From ₦750,000",
        description: "The complete experience for a full wedding weekend.",
        inclusions: ["Full weekend coverage", "Photo + film team", "Printed album included"],
      },
    ],
  },
  {
    category: "corporate",
    tiers: [
      {
        name: "Half-Day Coverage",
        price: "₦150,000",
        description: "Ideal for smaller meetings, launches or team sessions.",
        inclusions: ["Up to 4 hours on-site", "1 photographer", "Edited gallery within 5 days"],
      },
      {
        name: "Full-Day Coverage",
        price: "₦280,000",
        description: "Complete coverage for conferences, galas and larger events.",
        inclusions: ["Up to 8 hours on-site", "1 photographer + assistant", "Same-week gallery", "Highlight reel add-on available"],
      },
      {
        name: "Conference & Multi-Day",
        price: "Custom Quote",
        description: "For multi-day events needing a full production team.",
        inclusions: ["Multiple photographers / videographers", "Dedicated project lead", "Rapid same-day social edits"],
      },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our product shoot came out cleaner than the reference boards we sent. OSmedia Creation clearly knows studio lighting.",
    name: "Amara & Kelvin",
    role: "Wedding client",
  },
  {
    quote:
      "Professional from the first email to final delivery. Our conference recap video was ready before the after-party ended.",
    name: "Priya N.",
    role: "Marketing Director",
  },
  {
    quote:
      "The maternity session felt effortless. No stiff poses — just genuinely great, usable images we're proud to have framed.",
    name: "Daniel R.",
    role: "Studio client",
  },
];

export const process = [
  {
    step: "01",
    title: "Enquire",
    text: "Tell us about your shoot, event or brand through the contact form — we typically reply within 24 hours.",
  },
  {
    step: "02",
    title: "Plan",
    text: "A short call to lock in coverage, timeline and any shot list essentials, followed by a written proposal.",
  },
  {
    step: "03",
    title: "Shoot",
    text: "In studio or on location, we work quickly and quietly, so you can stay present while everything is documented.",
  },
  {
    step: "04",
    title: "Deliver",
    text: "A curated, fully-edited online gallery, ready to download, share and print.",
  },
];
