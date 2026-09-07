"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, PHONE_URGENCE_LINK, CABINET_INFO } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsMenuOpen(false); }, [pathname]);

  return (
    <header
      role="banner"
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-[#07090f]/96 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-[#07090f]"
      )}
    >
      {/* ── Barre principale ── */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090f] rounded-sm transition-opacity hover:opacity-90"
          aria-label="Cabinet d'Avocats 222 — Accueil"
        >
          <div className="bg-white rounded-md p-1 flex items-center justify-center h-12 shadow-sm overflow-hidden">
            <img 
              src="/logo.png" 
              alt="Logo Cabinet 222" 
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* Navigation desktop */}
        <nav
          className="hidden md:flex items-center gap-0.5"
          aria-label="Navigation principale"
        >
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm transition-all duration-150 rounded-sm",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-[#07090f]",
                  active
                    ? "text-white font-semibold"
                    : "text-[#94a3b8] font-medium hover:text-white"
                )}
              >
                {item.label}
                {active && (
                  <span
                    className="absolute bottom-0 left-4 right-4 h-px bg-[#8c1212]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Droite */}
        <div className="flex items-center gap-2">
          {/* Bouton urgence */}
          <a
            href={PHONE_URGENCE_LINK}
            id="btn-urgence-header"
            className="flex items-center gap-2 rounded-sm bg-[#8c1212] px-4 py-2 text-xs font-bold text-white tracking-wide uppercase hover:bg-[#7f1d1d] active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={`Urgence pénale — appeler le ${CABINET_INFO.phone.urgence}`}
          >
            <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline">Urgence 24/7</span>
            <span className="sm:hidden">Urgence</span>
          </a>

          {/* Burger mobile */}
          <button
            id="btn-menu-burger"
            type="button"
            className={cn(
              "flex md:hidden items-center justify-center h-9 w-9 rounded-sm text-[#94a3b8]",
              "hover:bg-white/8 hover:text-white transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen
              ? <X className="h-5 w-5" aria-hidden="true" />
              : <Menu className="h-5 w-5" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* ── Menu mobile ── */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Navigation mobile"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t",
          isMenuOpen ? "max-h-80" : "max-h-0 border-transparent",
        )}
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-3 text-sm rounded-sm transition-all duration-150",
                "hover:bg-white/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                pathname === item.href
                  ? "text-white font-semibold bg-white/8"
                  : "text-[#94a3b8] font-medium hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={PHONE_URGENCE_LINK}
            className="mt-2 flex items-center gap-2 rounded-sm bg-[#8c1212] px-4 py-3 text-sm font-bold text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {CABINET_INFO.phone.urgence} — Urgence 24/7
          </a>
        </nav>
      </div>
    </header>
  );
}
