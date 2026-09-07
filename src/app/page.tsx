import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { PillarCards } from "@/components/sections/PillarCards";
import { ExpertiseOverview } from "@/components/sections/ExpertiseOverview";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CABINET_INFO, PHONE_URGENCE_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cabinet d'Avocats 222 — Droit Pénal · Toulouse",
  description:
    "Avocates spécialisées en droit pénal à Toulouse. Garde à vue, pénal des affaires, mineurs, routier. Urgences 24h/24 au 06.66.47.07.43.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PillarCards />
      <ExpertiseOverview />

      {/* ── CTA Contact ── */}
      <section className="bg-[#f5f0e8] py-24 md:py-32" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

            {/* Texte */}
            <div className="max-w-xl">
              <span className="divider-red" aria-hidden="true" />
              <h2
                id="cta-heading"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3vw, 2.75rem)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                  color: "#07090f",
                }}
              >
                Votre situation est unique.
                <br />
                <em className="not-italic" style={{ color: "#8c1212" }}>
                  Parlons-en.
                </em>
              </h2>
              <p className="mt-5 text-[#64748b] leading-relaxed">
                Le cabinet est joignable du lundi au vendredi de 9h à 19h et le
                samedi matin. Pour les urgences pénales, une ligne dédiée est
                disponible 24h/24, 7j/7.
              </p>
            </div>

            {/* Boutons */}
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                href="/contact"
                id="home-cta-contact"
                className="group inline-flex items-center justify-center gap-2 rounded bg-[#07090f] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0f172a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07090f] focus-visible:ring-offset-2"
              >
                Nous contacter
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <a
                href={PHONE_URGENCE_LINK}
                id="home-cta-urgence-bottom"
                className="inline-flex items-center justify-center gap-2 rounded bg-[#8c1212] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#7f1d1d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c1212] focus-visible:ring-offset-2"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {CABINET_INFO.phone.urgence} — Urgence
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
