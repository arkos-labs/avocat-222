import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import {
  CABINET_INFO, NAV_ITEMS, FOOTER_EXTERNAL_LINKS,
  PHONE_URGENCE_LINK, PHONE_SECRETARIAT_LINK, EMAIL_LINK,
} from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07090f] text-[#64748b]" role="contentinfo">

      {/* ── Bande urgence ── */}
      <div className="bg-[#8c1212]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row md:px-10">
          <p className="text-sm font-semibold text-white">
            🚨 Garde à vue — Disponibles 24h/24, 7j/7
          </p>
          <a
            href={PHONE_URGENCE_LINK}
            className="flex items-center gap-2 rounded-sm border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-white hover:bg-white/20 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {CABINET_INFO.phone.urgence}
          </a>
        </div>
      </div>

      {/* ── Corps — 3 colonnes ── */}
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr]">

          {/* Colonne 1 — Identité */}
          <div>
            {/* Logo */}
            <Link
              href="/"
              className="mb-5 flex items-center gap-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm w-fit"
              aria-label="Cabinet d'Avocats 222 — Accueil"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#8c1212] text-white text-xs font-bold shrink-0"
                aria-hidden="true"
              >
                ⚖
              </span>
              <span className="font-semibold text-base text-white">
                Cabinet{" "}
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3em",
                    fontWeight: 700,
                    color: "#c0392b",
                  }}
                >
                  222
                </span>
              </span>
            </Link>

            <p className="mb-6 text-sm leading-relaxed" style={{ maxWidth: "28ch" }}>
              SELARL spécialisée exclusivement en droit pénal.<br />
              {CABINET_INFO.address.street}, Toulouse.
            </p>

            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8c1212]" aria-hidden="true" />
                <address className="not-italic">
                  {CABINET_INFO.address.street}, {CABINET_INFO.address.floor}
                  <br />
                  {CABINET_INFO.address.postalCode} {CABINET_INFO.address.city}
                </address>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-[#64748b]" aria-hidden="true" />
                <span>Lun–Ven : 9h–19h &bull; Sam : 9h–12h30</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#64748b]" aria-hidden="true" />
                <a href={PHONE_SECRETARIAT_LINK} className="hover:text-white transition-colors">
                  {CABINET_INFO.phone.secretariat}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#8c1212]" aria-hidden="true" />
                <a href={PHONE_URGENCE_LINK} className="font-semibold text-[#f87171] hover:text-white transition-colors">
                  {CABINET_INFO.phone.urgence} (Urgence 24/7)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#64748b]" aria-hidden="true" />
                <a href={EMAIL_LINK} className="hover:text-white transition-colors break-all">
                  {CABINET_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 2 — Navigation */}
          <nav aria-label="Liens rapides du pied de page">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                  >
                    <span className="h-px w-3 shrink-0 bg-[#8c1212]" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                >
                  <span className="h-px w-3 shrink-0 bg-[#8c1212]" aria-hidden="true" />
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Colonne 3 — Ressources */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
              Ressources &amp; Partenaires
            </h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_EXTERNAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                  >
                    <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8c1212]" aria-hidden="true" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bas ── */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs text-[#374151] sm:flex-row"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p>
            © {currentYear} {CABINET_INFO.name} ({CABINET_INFO.legalForm}). Tous droits réservés.
          </p>
          <nav aria-label="Liens légaux" className="flex items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-sm">
              Mentions légales
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/confidentialite" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-sm">
              Confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
