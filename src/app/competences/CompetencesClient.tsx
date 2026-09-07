"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  AlertTriangle, Briefcase, Users, Shield, BarChart2, Car,
  Siren, Newspaper, Stethoscope, Scale, FileSearch, GraduationCap, Heart,
  Phone, ChevronRight, type LucideProps
} from "lucide-react";
import { EXPERTISES, PHONE_URGENCE_LINK, CABINET_INFO } from "@/lib/constants";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

const iconMap: Record<string, LucideIcon> = {
  AlertTriangle, Briefcase, Users, Shield, BarChart2, Car,
  Siren, Newspaper, Stethoscope, Scale, FileSearch, GraduationCap, Heart,
};

const phases = [
  { label: "Enquête", description: "Garde à vue, audition libre, perquisition, mise en examen." },
  { label: "Instruction", description: "Expertise, commission rogatoire, demandes de mise en liberté." },
  { label: "Jugement", description: "Comparution immédiate, correctionnelle, assises, appel." },
  { label: "Exécution", description: "JAP, aménagements de peine, libération conditionnelle." },
];

export function CompetencesClient() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <>
      {/* ── Hero éditorial ── */}
      <div className="relative overflow-hidden bg-[#07090f] py-24 md:py-32">
        <div className="absolute inset-0">
          <img src="/images/law_books.jpg" alt="Bibliothèque juridique" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-[#07090f]/60" />
        </div>
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1 bg-[#8c1212] z-10" />
        <span
          aria-hidden="true"
          className="absolute right-8 bottom-8 select-none text-[10rem] font-bold text-white/4 leading-none hidden lg:block"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          13
        </span>
        <div className="relative mx-auto max-w-6xl px-6 md:px-10">
          <span className="divider-red" aria-hidden="true" />
          <h1
            className="text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            Toutes les phases,
            <br />
            <em className="not-italic" style={{ color: "#c0392b" }}>
              tous les contentieux
            </em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[#64748b] leading-relaxed">
            Le Cabinet 222 intervient à chaque étape de la procédure pénale,
            dans l&apos;ensemble des contentieux relevant du droit pénal.
          </p>
        </div>
      </div>

      {/* ── Timeline procédure ── */}
      <section className="bg-[#f5f0e8] py-20 md:py-28" aria-labelledby="phases-heading">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2
            id="phases-heading"
            className="mb-14 text-[#07090f]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            De l&apos;enquête à l&apos;exécution de la peine
          </h2>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-4">
            {phases.map((phase, idx) => (
              <motion.div
                key={phase.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.45, ease: "easeOut" }}
                className="relative flex flex-row gap-5 border-b py-8 md:flex-col md:border-b-0 md:border-r md:pr-6 md:py-0 last:border-0"
                style={{ borderColor: "#e8e2d5" }}
              >
                {/* Numéro */}
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#07090f] text-white text-sm font-bold"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem" }}
                >
                  {idx + 1}
                </div>
                <div className="md:mt-4">
                  <h3 className="mb-2 font-bold text-[#0f172a]">{phase.label}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grille des 13 compétences ── */}
      <section
        className="bg-[#f5f0e8] py-20 md:py-28"
        aria-labelledby="competences-list-heading"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2
            id="competences-list-heading"
            className="mb-14 text-[#07090f]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            Nos 13 domaines de compétences
          </h2>

          <div
            className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
            style={{ background: "#e8e2d5", borderRadius: 2 }}
            role="list"
          >
            {EXPERTISES.map((expertise, idx) => {
              const Icon = iconMap[expertise.icon] ?? Scale;
              return (
                <motion.div
                  key={expertise.id}
                  role="listitem"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: (idx % 3) * 0.08 }}
                  onMouseEnter={() => setHoveredId(expertise.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative overflow-hidden bg-[#f5f0e8] p-6 md:p-7 transition-colors duration-250 hover:bg-[#07090f]"
                >
                  <Link
                    href={`/competences/${expertise.id}`}
                    className="absolute inset-0 z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8c1212]"
                  >
                    <span className="sr-only">Voir {expertise.title}</span>
                  </Link>

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Numéro discret */}
                    <span
                      className="mb-4 text-xs font-semibold tabular-nums text-[#94a3b8] transition-colors duration-200 group-hover:text-[#64748b]"
                      aria-hidden="true"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Icône */}
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#e8e2d5] text-[#64748b] transition-all duration-250 group-hover:bg-[#8c1212]/20 group-hover:text-[#f87171]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    {/* Titre */}
                    <h3 className="mb-2 font-bold text-[#0f172a] transition-colors duration-200 group-hover:text-white">
                      {expertise.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-[#64748b] transition-colors duration-200 group-hover:text-[#94a3b8]">
                      {expertise.description}
                    </p>

                    {/* Lien indicateur */}
                    <div className="mt-5 flex translate-y-1 items-center gap-1 text-xs font-semibold text-[#8c1212] opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                      En savoir plus
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Urgence ── */}
      <section className="relative overflow-hidden bg-[#8c1212] py-20" aria-labelledby="competences-cta">
        {/* Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-8">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-sm bg-white/10 ring-4 ring-white/10">
            <Phone className="h-8 w-8 text-white" aria-hidden="true" />
          </div>
          <h2
            id="competences-cta"
            className="mb-4 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            Une urgence pénale ?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base text-red-200 leading-relaxed">
            Nos avocates sont disponibles 24h/24 pour les gardes à vue et
            situations d&apos;urgence nécessitant une intervention immédiate.
          </p>
          <a
            href={PHONE_URGENCE_LINK}
            className="inline-flex items-center gap-3 rounded-sm bg-white px-8 py-4 text-base font-bold text-[#8c1212] transition-all duration-200 hover:bg-[#f5f0e8] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {CABINET_INFO.phone.urgence} — Urgence 24/7
          </a>
        </div>
      </section>
    </>
  );
}
