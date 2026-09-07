"use client";

import { motion } from "framer-motion";
import { Zap, BookOpen, Award, type LucideProps } from "lucide-react";
import { PILLARS } from "@/lib/constants";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type LucideIcon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

const iconMap: Record<string, LucideIcon> = { Zap, BookOpen, Award };

const ordinals = ["01", "02", "03"];

export function PillarCards() {
  return (
    <section
      className="bg-[#f5f0e8] py-20 md:py-28"
      aria-labelledby="pillars-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">

        {/* En-tête éditorial */}
        <div className="mb-16 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="divider-red" aria-hidden="true" />
            <h2
              id="pillars-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: "#07090f",
              }}
            >
              Trois piliers,<br />
              une seule priorité
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#64748b] md:text-right">
            La spécialisation exclusive en droit pénal n&apos;est pas un
            positionnement — c&apos;est une conviction fondatrice du Cabinet 222.
          </p>
        </div>

        {/* Strips éditoriaux */}
        <div className="flex flex-col divide-y" style={{ borderColor: "#e8e2d5" }}>
          {PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.icon] ?? Zap;
            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="group flex flex-col gap-6 py-10 md:flex-row md:items-start md:gap-12"
              >
                {/* Numéro ordinal — Cormorant */}
                <div className="shrink-0 md:w-20">
                  <span
                    className="text-5xl font-bold text-[#8c1212]/20 transition-colors duration-300 group-hover:text-[#8c1212]/40 select-none"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                    aria-hidden="true"
                  >
                    {ordinals[index]}
                  </span>
                </div>

                {/* Icône */}
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-[#07090f] text-white transition-colors duration-300 group-hover:bg-[#8c1212]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex-1">
                  <h3
                    className="mb-3 text-xl font-bold text-[#0f172a]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.4rem" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="leading-relaxed text-[#64748b]">
                    {pillar.description}
                  </p>
                </div>

                {/* Indicateur hover */}
                <div
                  className="hidden shrink-0 items-center md:flex"
                  aria-hidden="true"
                >
                  <div className="h-8 w-0.5 rounded-full bg-[#e8e2d5] transition-colors duration-300 group-hover:bg-[#8c1212]" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
