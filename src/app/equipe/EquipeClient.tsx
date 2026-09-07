"use client";

import { motion } from "framer-motion";
import { TeamCard } from "@/components/sections/TeamCard";
import { TEAM_MEMBERS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EquipeClient() {
  return (
    <>
      {/* ── Hero éditorial ── */}
      <div className="relative overflow-hidden bg-[#07090f] py-24 md:py-32">
        <div className="absolute inset-0">
          <img src="/images/law_books.jpg" alt="Bibliothèque juridique" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-[#07090f]/60" />
        </div>
        {/* Ligne verticale */}
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1 bg-[#8c1212] z-10" />
        {/* 222 décoratif */}
        <span
          aria-hidden="true"
          className="absolute right-8 bottom-8 select-none text-[12rem] font-bold text-white/4 leading-none hidden lg:block"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          222
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
            Une équipe dédiée
            <br />
            à la{" "}
            <em className="not-italic" style={{ color: "#c0392b" }}>
              défense pénale
            </em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[#64748b] leading-relaxed">
            Trois avocates toulousaines, unies par la même passion pour le droit
            pénal et le même engagement pour leurs clients. Auteurs d&apos;infractions
            ou victimes — nous sommes à vos côtés.
          </p>
        </div>
      </div>

      {/* ── Grille équipe ── */}
      <section
        className="bg-[#f5f0e8] py-20 md:py-28"
        aria-labelledby="team-section-heading"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 id="team-section-heading" className="sr-only">
            Membres de l&apos;équipe
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement OIP — éditorial ── */}
      <section className="bg-[#f5f0e8] py-16 md:py-20" aria-labelledby="oip-heading">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-16">

            {/* Icône */}
            <div
              className="shrink-0 flex h-20 w-20 items-center justify-center rounded-sm bg-[#07090f] text-white"
              aria-hidden="true"
            >
              <span
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                OIP
              </span>
            </div>

            {/* Texte */}
            <div className="flex-1">
              <span className="divider-red" aria-hidden="true" />
              <h2
                id="oip-heading"
                className="mb-3 text-xl font-bold text-[#07090f]"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600 }}
              >
                Engagées au-delà du prétoire
              </h2>
              <p className="leading-relaxed text-[#64748b]">
                Les avocates du Cabinet 222 sont membres actives de l&apos;
                <strong className="text-[#0f172a]">
                  Observatoire International des Prisons (OIP)
                </strong>
                , association indépendante qui œuvre pour le respect des droits
                fondamentaux des personnes détenues. Cet engagement reflète notre
                conviction que la défense pénale ne s&apos;arrête pas aux portes du
                tribunal : elle s&apos;étend à la dignité de chaque personne, où
                qu&apos;elle se trouve.
              </p>
            </div>

            {/* CTA */}
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-[#07090f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8c1212] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07090f]"
              >
                Nous contacter
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
