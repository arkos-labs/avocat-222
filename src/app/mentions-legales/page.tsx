import type { Metadata } from "next";
import { CABINET_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du Cabinet d'Avocats 222, SELARL à Toulouse.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-[#f5f0e8] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <h1 className="mb-10 text-3xl font-extrabold text-[#0f172a]">
          Mentions Légales
        </h1>

        <div className="flex flex-col gap-8 rounded-sm border border-[#e8e2d5] bg-white p-8 md:p-10">
          <section aria-labelledby="editeur">
            <h2 id="editeur" className="mb-4 text-lg font-bold text-[#0f172a]">
              Éditeur du site
            </h2>
            <p className="text-[#64748b] text-sm leading-relaxed">
              <strong className="text-[#0f172a]">{CABINET_INFO.name}</strong> —{" "}
              {CABINET_INFO.legalForm}
              <br />
              {CABINET_INFO.address.street}, {CABINET_INFO.address.floor}
              <br />
              {CABINET_INFO.address.postalCode} {CABINET_INFO.address.city}
              <br />
              Tél : {CABINET_INFO.phone.secretariat}
              <br />
              Email :{" "}
              <a href={`mailto:${CABINET_INFO.email}`} className="text-[#991b1b] hover:underline">
                {CABINET_INFO.email}
              </a>
            </p>
          </section>

          <div className="h-px bg-[#f1f5f9]" />

          <section aria-labelledby="barreau">
            <h2 id="barreau" className="mb-4 text-lg font-bold text-[#0f172a]">
              Inscription au Barreau
            </h2>
            <p className="text-[#64748b] text-sm leading-relaxed">
              Les avocates du cabinet sont inscrites au Barreau de Toulouse et
              exercent sous le contrôle du Conseil National des Barreaux (CNB).
              Elles sont soumises au Règlement Intérieur National (RIN) de la
              profession d&apos;avocat.
            </p>
          </section>

          <div className="h-px bg-[#f1f5f9]" />

          <section aria-labelledby="responsabilite">
            <h2 id="responsabilite" className="mb-4 text-lg font-bold text-[#0f172a]">
              Responsabilité
            </h2>
            <p className="text-[#64748b] text-sm leading-relaxed">
              Les informations contenues sur ce site sont données à titre
              informatif. Elles ne constituent pas un conseil juridique et ne
              sauraient engager la responsabilité du cabinet. Pour toute situation
              spécifique, nous vous invitons à prendre rendez-vous.
            </p>
          </section>

          <div className="h-px bg-[#f1f5f9]" />

          <section aria-labelledby="hebergeur">
            <h2 id="hebergeur" className="mb-4 text-lg font-bold text-[#0f172a]">
              Hébergeur
            </h2>
            <p className="text-[#64748b] text-sm leading-relaxed">
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 700,
              San Francisco, California 94104, USA.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
