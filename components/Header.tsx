"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/reels", label: "Reels" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/pricing", label: "Pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        solid
          ? "bg-paper/95 backdrop-blur-sm border-b border-ink/10 py-4"
          : "bg-transparent border-b border-transparent py-7"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex flex-col leading-none">
          <span
            className={`font-display text-2xl tracking-wide transition-colors ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            OS<span className="text-gold">media</span>
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-widest-xl text-gold">
            Creation
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-widest-xl transition-colors hover:text-gold ${
                solid ? "text-ink" : "text-white"
              } ${pathname === link.href ? "text-gold" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${solid ? "text-ink" : "text-white"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-paper px-6 py-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-sm uppercase tracking-widest-xl text-ink transition-colors hover:text-gold ${
                pathname === link.href ? "text-gold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
