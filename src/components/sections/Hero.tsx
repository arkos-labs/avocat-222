import Link from "next/link";
import { Phone, ArrowRight, Shield, Clock, Star } from "lucide-react";
import { PHONE_URGENCE_LINK, CABINET_INFO } from "@/lib/constants";

// Composant serveur (pas de Framer Motion) — LCP optimal
export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#07090f] text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <img src="/images/luxury_desk.jpg" alt="Bureau d'avocat de luxe" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-[#07090f]/60" />
      </div>

      {/* Texture de fond — diagonale subtile */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,.012) 0px, rgba(255,255,255,.012) 1px, transparent 1px, transparent 48px)",
        }}
      />

      {/* Barre d'accent verticale gauche */}
      <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1 bg-[#8c1212] z-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid min-h-[88vh] grid-cols-1 items-center gap-0 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px]">

          {/* ── Colonne gauche — éditoriale ── */}
          <div className="py-20 md:py-28 lg:pr-16">

            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-3 animate-fade-up">
              <Shield className="h-4 w-4 text-[#8c1212] shrink-0" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#94a3b8]">
                Cabinet spécialisé · Droit pénal · Toulouse
              </span>
            </div>

            {/* Titre principal — Cormorant Garamond */}
            <h1
              id="hero-heading"
              className="display-xl mb-8 animate-fade-up animate-delay-100"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 600,
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
              }}
            >
              La défense pénale,
              <br />
              <em
                className="not-italic"
                style={{ color: "#c0392b" }}
              >
                notre unique vocation.
              </em>
            </h1>

            {/* Sous-titre */}
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-[#8899aa] animate-fade-up animate-delay-200">
              Auteurs d&apos;infractions ou victimes — nous nous battons à vos côtés
              à chaque stade de la procédure. De la garde à vue jusqu&apos;à
              l&apos;exécution de la peine, le Cabinet 222 est votre défense.
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-3 sm:flex-row animate-fade-up animate-delay-300">
              <Link
                href="/contact"
                id="hero-cta-rdv"
                className="group inline-flex items-center justify-center gap-2.5 rounded bg-white px-7 py-3.5 text-sm font-semibold text-[#07090f] transition-all duration-200 hover:bg-[#f5f0e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090f]"
              >
                Prendre rendez-vous
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <a
                href={PHONE_URGENCE_LINK}
                id="hero-cta-urgence"
                className="inline-flex items-center justify-center gap-2.5 rounded bg-[#8c1212] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#7f1d1d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c1212] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090f]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Urgence 24h/24
              </a>
            </div>

            {/* Widget avis clients Google */}
            <div className="mb-10 mt-5 inline-flex items-center gap-3 rounded-sm border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm animate-fade-up animate-delay-350">
              {/* Étoiles */}
              <div className="flex items-center gap-0.5" aria-label="5 étoiles sur 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#f5c518] text-[#f5c518]" aria-hidden="true" />
                ))}
              </div>
              {/* Note */}
              <span className="text-sm font-bold text-white" aria-label="Note 5.0">5.0</span>
              <span className="h-3.5 w-px bg-white/20" aria-hidden="true" />
              {/* Compteur */}
              <span className="text-xs text-[#94a3b8]">
                <span className="font-semibold text-white">66 avis</span> Google vérifiés
              </span>
              {/* Logo G */}
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>

            {/* Ligne de confiance */}
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/8 pt-8 animate-fade-up animate-delay-400">
              {[
                { v: "3", l: "Avocates pénalistes" },
                { v: "13", l: "Domaines du droit pénal" },
                { v: "7+", l: "Années d'exercice" },
                { v: "24/7", l: "Ligne d'urgence" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col">
                  <span
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {s.v}
                  </span>
                  <span className="text-xs text-[#64748b]">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Colonne droite — panneau urgence + confiance ── */}
          <div
            className="hidden lg:flex flex-col gap-4 py-16 pl-8 border-l"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            {/* Carte urgence */}
            <div className="rounded-sm bg-[#8c1212] p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="animate-pulse-red inline-block h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                  Urgence pénale
                </span>
              </div>
              <a
                href={PHONE_URGENCE_LINK}
                className="block text-2xl font-bold text-white hover:text-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                {CABINET_INFO.phone.urgence}
              </a>
              <p className="mt-2 text-xs text-red-200/80 leading-relaxed">
                Disponible 24h/24, 7j/7.<br />
                Intervention immédiate en garde à vue.
              </p>
            </div>

            {/* Carte adresse + horaires */}
            <div className="rounded-sm border p-6" style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#64748b]">
                Cabinet
              </p>
              <p className="text-sm font-semibold text-white leading-snug">
                {CABINET_INFO.address.street}, {CABINET_INFO.address.floor}
              </p>
              <p className="text-xs text-[#64748b]">
                {CABINET_INFO.address.postalCode} {CABINET_INFO.address.city}
              </p>
              <div className="mt-4 flex items-start gap-2">
                <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#64748b]" aria-hidden="true" />
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Lun – Ven : 9h – 19h<br />
                  Samedi : 9h – 12h30
                </p>
              </div>
            </div>

            {/* Barreau */}
            <div className="rounded-sm border p-5" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
              <p className="text-xs text-[#64748b] leading-relaxed">
                Membres du{" "}
                <span className="text-white font-medium">Barreau de Toulouse</span>.
                SELARL spécialisée exclusivement en droit pénal.
              </p>
            </div>

            {/* Logo décoratif 222 */}
            <div className="mt-auto pt-4 text-right">
              <span
                className="select-none text-8xl font-bold text-white/4 leading-none"
                style={{ fontFamily: "var(--font-display)" }}
                aria-hidden="true"
              >
                222
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
