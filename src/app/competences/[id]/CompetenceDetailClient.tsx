"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  AlertTriangle, Briefcase, Users, Shield, BarChart2, Car,
  Siren, Newspaper, Stethoscope, Scale, FileSearch, GraduationCap, Heart,
  Phone, ChevronDown, ChevronRight, CheckCircle2,
  type LucideProps
} from "lucide-react";
import type { Expertise } from "@/types";
import { PHONE_URGENCE_LINK, CABINET_INFO } from "@/lib/constants";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

const iconMap: Record<string, LucideIcon> = {
  AlertTriangle, Briefcase, Users, Shield, BarChart2, Car,
  Siren, Newspaper, Stethoscope, Scale, FileSearch, GraduationCap, Heart,
};

interface Props {
  expertise: Expertise;
  related: Expertise[];
}

// ─── Rendu Markdown simple (sans dépendance externe) ──────────────────────────
function renderMarkdown(md: string): React.ReactNode[] {
  const lines = md.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  const parseInline = (text: string) => {
    // Gras **texte**
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, idx) =>
      idx % 2 === 1
        ? <strong key={idx} className="font-semibold text-[#0f172a]">{part}</strong>
        : part
    );
  };

  while (i < lines.length) {
    const line = lines[i];

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={`h2-${i}`} className="mt-10 mb-4 text-xl font-bold text-[#0f172a] border-l-4 border-[#991b1b] pl-4">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // Liste à puces
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 flex flex-col gap-2">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-[#475569]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#991b1b]" aria-hidden="true" />
              <span>{parseInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ligne vide
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraphe normal
    elements.push(
      <p key={`p-${i}`} className="my-3 leading-relaxed text-[#475569]">
        {parseInline(line)}
      </p>
    );
    i++;
  }

  return elements;
}

// ─── Composant principal ──────────────────────────────────────────────────────
export function CompetenceDetailClient({ expertise, related }: Props) {
  const Icon = iconMap[expertise.icon] ?? Scale;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <article className="min-h-screen bg-slate-50 pb-20">

      {/* ── Hero ── */}
      <header className="relative bg-[#0a0f1c] pt-16 pb-20 text-white md:pt-24 md:pb-28 overflow-hidden">
        {expertise.imageUrl ? (
          <div className="absolute inset-0">
            <img src={expertise.imageUrl} alt={expertise.title} className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-[#0a0f1c]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/40 via-[#0a0f1c]/60 to-[#0a0f1c]" />
        )}
        <div className="relative mx-auto max-w-4xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
            <Link href="/competences" className="hover:text-white transition-colors">Compétences</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
            <span className="text-slate-300">{expertise.title}</span>
          </nav>

          <div className="flex items-center gap-6 mb-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#991b1b]/20 text-[#f87171] border border-[#991b1b]/30">
              <Icon className="h-8 w-8" aria-hidden="true" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{expertise.title}</h1>
          </div>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {expertise.description}
          </p>
        </div>
      </header>

      {/* ── Contenu principal ── */}
      <main className="mx-auto max-w-4xl px-6 md:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-sm border p-8 md:p-12" style={{ borderColor: "#e8e2d5" }}>

          {/* Contenu long */}
          <section aria-label={`Détails : ${expertise.title}`} className="min-h-[120px]">
            {expertise.longDescription
              ? renderMarkdown(expertise.longDescription)
              : (
                <div className="py-8 text-center">
                  <p className="text-slate-500">
                    Informations détaillées en cours de rédaction.{" "}
                    <Link href="/contact" className="font-semibold text-[#991b1b] hover:underline">
                      Contactez-nous
                    </Link>{" "}
                    pour toute question.
                  </p>
                </div>
              )
            }
          </section>

          {/* ── FAQ ── */}
          {expertise.faq && expertise.faq.length > 0 && (
            <section className="mt-14 pt-10 border-t border-slate-100" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-2xl font-bold text-[#0f172a] mb-8">
                Questions fréquentes
              </h2>
              <div className="flex flex-col gap-3">
                {expertise.faq.map((item, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`border rounded-sm transition-colors ${isOpen ? "border-[#8c1212]" : "hover:border-[#8c1212]/30"}`} style={{ borderColor: isOpen ? "#8c1212" : "#e8e2d5" }}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#991b1b] focus-visible:ring-inset rounded-xl"
                      >
                        <span className="font-semibold text-[#0f172a] pr-4">{item.question}</span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#991b1b]" : "text-slate-400"}`}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="px-6 pb-6 pt-2 text-[#475569] leading-relaxed border-t border-slate-100">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* ── CTA ── */}
          <section className="mt-14 bg-[#0f172a] rounded-2xl p-8 md:p-10 text-center" aria-labelledby="cta-competence">
            <h2 id="cta-competence" className="text-2xl font-bold text-white mb-3">
              Besoin d&apos;un avocat en {expertise.title.toLowerCase()} à Toulouse ?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
              Le Cabinet 222 vous défend à chaque étape de la procédure pénale.
              Premier entretien pour évaluer votre situation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={PHONE_URGENCE_LINK}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#991b1b] px-6 py-3 text-white font-semibold hover:bg-[#7f1d1d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Urgence 24/7 : {CABINET_INFO.phone.urgence}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-white font-semibold hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Prendre rendez-vous
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>

        {/* ── Compétences connexes ── */}
        {related.length > 0 && (
          <section className="mt-10 mb-4" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-base font-bold text-[#0f172a] mb-4 px-1">
              Autres domaines du Cabinet 222
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((rel) => {
                const RelIcon = iconMap[rel.icon] ?? Scale;
                return (
                  <Link
                    key={rel.id}
                    href={`/competences/${rel.id}`}
                    className="group flex items-start gap-4 rounded-sm border border-[#e8e2d5] bg-white p-5 transition-all hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 group-hover:bg-[#991b1b]/10 group-hover:text-[#991b1b] transition-colors">
                      <RelIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#0f172a] group-hover:text-[#991b1b] transition-colors leading-snug">
                        {rel.title}
                      </p>
                      <p className="text-xs text-slate-500 mt-1 leading-snug line-clamp-2">
                        {rel.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 text-center">
              <Link href="/competences" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#991b1b] hover:underline">
                Voir toutes nos compétences
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        )}
      </main>
    </article>
  );
}
