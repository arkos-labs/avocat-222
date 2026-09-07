"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertTriangle, Briefcase, Users, Shield, BarChart2, Car,
  ArrowRight, type LucideProps,
} from "lucide-react";
import { EXPERTISES } from "@/lib/constants";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type LucideIcon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

const iconMap: Record<string, LucideIcon> = {
  AlertTriangle, Briefcase, Users, Shield, BarChart2, Car,
};

export function ExpertiseOverview() {
  const featured = EXPERTISES.filter((e) => e.featured);

  return (
    <section
      className="bg-[#07090f] py-20 md:py-28"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">

        {/* En-tête */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="divider-red" aria-hidden="true" />
            <h2
              id="expertise-heading"
              className="text-white"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
              }}
            >
              Une couverture pénale
              <br />
              <em className="not-italic" style={{ color: "#c0392b" }}>complète</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#64748b] md:text-right">
            De la garde à vue à l&apos;exécution de la peine, le Cabinet 222
            intervient à chaque stade.
          </p>
        </div>

        {/* Grille compétences vedettes */}
        <motion.div
          className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
          style={{ background: "rgba(255,255,255,0.06)", borderRadius: 2 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {featured.map((expertise, idx) => {
            const Icon = iconMap[expertise.icon] ?? AlertTriangle;
            return (
              <motion.article
                key={expertise.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                }}
                className="group relative flex flex-col gap-4 bg-[#07090f] p-8 transition-colors duration-300 hover:bg-[#0c1018] first:rounded-tl-sm last:rounded-br-sm"
              >
                {/* Numéro décoratif */}
                <span
                  className="absolute right-6 top-6 select-none text-6xl font-bold text-white/4 transition-opacity duration-300 group-hover:text-white/8"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Icône */}
                <div className="inline-flex h-10 w-10 items-center justify-center rounded bg-white/6 text-[#64748b] transition-all duration-300 group-hover:bg-[#8c1212]/20 group-hover:text-[#f87171]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                {/* Titre */}
                <h3 className="font-semibold text-white transition-colors duration-200 group-hover:text-[#f87171]">
                  {expertise.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#64748b]">
                  {expertise.description}
                </p>

                {/* Lien */}
                <Link
                  href={`/competences/${expertise.id}`}
                  className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-[#64748b] opacity-0 transition-all duration-200 group-hover:text-[#8c1212] group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c1212] rounded-sm"
                >
                  En savoir plus
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-sm text-[#64748b]">
            13 domaines du droit pénal couverts à Toulouse et en Haute-Garonne.
          </p>
          <Link
            href="/competences"
            id="expertise-see-all"
            className="inline-flex items-center gap-2 rounded border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-[#8c1212] hover:bg-[#8c1212]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
          >
            Voir toutes nos compétences
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
