import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { PHONE_URGENCE_LINK, CABINET_INFO } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#07090f] flex items-center justify-center px-6">
      {/* Ligne verticale */}
      <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1 bg-[#8c1212]" />

      <div className="text-center max-w-xl">
        {/* 404 en Cormorant */}
        <p
          className="mb-2 leading-none text-[#8c1212]/30 select-none"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(6rem, 20vw, 14rem)",
          }}
          aria-hidden="true"
        >
          404
        </p>

        <h1
          className="mb-4 text-white"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
          }}
        >
          Page introuvable
        </h1>
        <p className="mb-10 text-[#64748b] leading-relaxed">
          Cette page n&apos;existe pas ou a été déplacée. Vous pouvez revenir à
          l&apos;accueil ou nous contacter directement pour toute urgence pénale.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-semibold text-[#07090f] hover:bg-[#f5f0e8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
          <a
            href={PHONE_URGENCE_LINK}
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#8c1212] px-6 py-3 text-sm font-semibold text-white hover:bg-[#7f1d1d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c1212]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Urgence : {CABINET_INFO.phone.urgence}
          </a>
        </div>
      </div>
    </div>
  );
}
