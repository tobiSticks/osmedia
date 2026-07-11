import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { InstagramIcon, FacebookIcon } from "@/components/icons";

const NAV_LINKS = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/reels", label: "Reels" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/pricing", label: "Pricing" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-display text-2xl text-white">
                OS<span className="text-gold">media</span>
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-widest-xl text-gold">
                Creation
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold hover:text-gold"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest-xl text-gold">Explore</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest-xl text-gold">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={15} className="mt-0.5 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="transition-colors hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs md:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="text-white/40">Commercial &amp; Studio Photography</p>
        </div>
      </div>
    </footer>
  );
}
