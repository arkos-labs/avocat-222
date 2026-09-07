import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Info, ArrowRight, Phone } from "lucide-react";
import { PHONE_URGENCE_LINK, CABINET_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Honoraires Avocat Pénal Toulouse",
  description:
    "Honoraires transparents du Cabinet 222 à Toulouse : forfait, temps passé, honoraire de résultat. Aide juridictionnelle et protection juridique acceptées. Convention écrite systématique.",
  keywords: [
    "honoraires avocat pénal Toulouse",
    "tarif avocat pénal Toulouse",
    "aide juridictionnelle avocat Toulouse",
    "protection juridique avocat pénal",
    "coût avocat garde à vue Toulouse",
  ],
};

const feeTypes = [
  {
    id: "forfait",
    ordinal: "01",
    title: "Honoraire Forfaitaire",
    tag: "Le plus courant",
    description:
      "Un honoraire global est fixé en début de mission pour une prestation définie. Ce mode est adapté aux procédures dont le périmètre est identifiable dès la prise en charge.",
    examples: [
      "Assistance en garde à vue",
      "Rédaction d'un acte de procédure",
      "Comparution à une audience correctionnelle",
      "Consultation juridique",
    ],
  },
  {
    id: "temps-passe",
    ordinal: "02",
    title: "Honoraire au Temps Passé",
    tag: "Procédures complexes",
    description:
      "L'honoraire est calculé sur la base d'un taux horaire convenu, multiplié par le temps effectivement consacré à votre dossier. Un relevé de temps peut être communiqué sur demande.",
    examples: [
      "Procédures d'information judiciaire (instruction)",
      "Dossiers criminels",
      "Affaires à rebondissements multiples",
      "Dossiers nécessitant de nombreux actes",
    ],
  },
  {
    id: "resultat",
    ordinal: "03",
    title: "Honoraire de Résultat",
    tag: "Complémentaire uniquement",
    description:
      "Conformément à la déontologie du Barreau, l'honoraire de résultat est strictement complémentaire à un honoraire de base. Il récompense l'obtention d'un résultat favorable convenu à l'avance.",
    examples: [
      "Non-lieu ou relaxe dans les affaires pénales",
      "Réduction significative de peine",
      "Obtention d'un aménagement de peine",
    ],
  },
];

const otherInfos = [
  {
    icon: Info,
    title: "TVA applicable",
    text: "Les honoraires sont soumis à la TVA au taux de 20 %. Une convention d'honoraires écrite est systématiquement proposée avant toute intervention.",
  },
  {
    icon: CheckCircle,
    title: "Aide Juridictionnelle",
    text: "Le cabinet est habilité à recevoir des clients bénéficiaires de l'aide juridictionnelle totale ou partielle, sous conditions de ressources, attribuée par le Bureau d'Aide Juridictionnelle de Toulouse.",
  },
  {
    icon: CheckCircle,
    title: "Protection Juridique",
    text: "Si vous disposez d'un contrat de protection juridique (assurance habitation, auto, carte bancaire…), vérifiez qu'il couvre les frais d'avocat en matière pénale.",
  },
];

export default function HonorairesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-[#07090f] py-24 md:py-32">
        <div className="absolute inset-0">
          <img src="/images/justice_scales.jpg" alt="Balance de justice" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-[#07090f]/60" />
        </div>
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1 bg-[#8c1212] z-10" />
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
            Honoraires{" "}
            <em className="not-italic" style={{ color: "#c0392b" }}>
              transparents
            </em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[#64748b] leading-relaxed">
            Le cabinet s&apos;engage à vous informer clairement sur les honoraires dès
            le premier rendez-vous et à formaliser cet accord par une convention
            d&apos;honoraires écrite.
          </p>
        </div>
      </div>

      {/* ── 3 Modes de facturation ── */}
      <section className="bg-[#f5f0e8] py-20 md:py-28" aria-labelledby="fee-types-heading">
        <div className="mx-auto max-w-6xl px-6 md:px-8">

          <h2
            id="fee-types-heading"
            className="mb-14 text-[#07090f]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            Les 3 modes de facturation
          </h2>

          {/* Strips éditoriaux (comme PillarCards) */}
          <div className="flex flex-col divide-y" style={{ borderColor: "#e8e2d5" }}>
            {feeTypes.map((fee, idx) => (
              <div
                key={fee.id}
                className="group flex flex-col gap-6 py-10 md:flex-row md:items-start md:gap-10"
              >
                {/* Numéro ordinal */}
                <div className="shrink-0 md:w-16">
                  <span
                    className="text-4xl font-bold text-[#8c1212]/25 select-none"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                    aria-hidden="true"
                  >
                    {fee.ordinal}
                  </span>
                </div>

                {/* Tag */}
                <div className="shrink-0 pt-2 md:w-40">
                  <span className="inline-block rounded-sm border px-3 py-1 text-xs font-semibold text-[#64748b]"
                    style={{ borderColor: "#e8e2d5" }}>
                    {fee.tag}
                  </span>
                </div>

                {/* Contenu */}
                <div className="flex-1">
                  <h3
                    className="mb-3 font-bold text-[#0f172a]"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 600 }}
                  >
                    {fee.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-[#64748b]">
                    {fee.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {fee.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2">
                        <span className="mt-2 h-0.5 w-3 shrink-0 bg-[#8c1212]" aria-hidden="true" />
                        <span className="text-xs text-[#64748b]">{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Infos complémentaires ── */}
      <section className="bg-[#f5f0e8] py-16 md:py-20" aria-labelledby="other-info-heading">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2
            id="other-info-heading"
            className="mb-10 text-[#07090f]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            TVA, Aide Juridictionnelle &amp; Protection Juridique
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {otherInfos.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="flex flex-col gap-4 rounded-sm border p-6 transition-colors duration-200 hover:border-[#8c1212]/30"
                  style={{ borderColor: "#e8e2d5" }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#07090f] text-white">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-sm">{info.title}</h3>
                  <p className="text-xs leading-relaxed text-[#64748b]">{info.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#07090f] py-20" aria-labelledby="honoraires-cta">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="divider-red" aria-hidden="true" />
              <h2
                id="honoraires-cta"
                className="text-white"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                }}
              >
                Connaître le coût de votre dossier ?
              </h2>
              <p className="mt-3 text-sm text-[#64748b]">
                Le premier entretien permet d&apos;évaluer votre situation et de fixer les honoraires.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-semibold text-[#07090f] hover:bg-[#f5f0e8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Demander un rendez-vous
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={PHONE_URGENCE_LINK}
                className="inline-flex items-center gap-2 rounded-sm bg-[#8c1212] px-6 py-3 text-sm font-semibold text-white hover:bg-[#7f1d1d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c1212]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {CABINET_INFO.phone.urgence}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
