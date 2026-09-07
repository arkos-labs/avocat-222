import type { Metadata } from "next";
import { CABINET_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité et de protection des données personnelles du Cabinet d'Avocats 222.",
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <div className="bg-[#f5f0e8] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <h1 className="mb-10 text-3xl font-extrabold text-[#0f172a]">
          Politique de Confidentialité
        </h1>

        <div className="flex flex-col gap-8 rounded-sm border border-[#e8e2d5] bg-white p-8 md:p-10">
          <section aria-labelledby="data-controller">
            <h2 id="data-controller" className="mb-4 text-lg font-bold text-[#0f172a]">
              Responsable du traitement
            </h2>
            <p className="text-[#64748b] text-sm leading-relaxed">
              {CABINET_INFO.name} ({CABINET_INFO.legalForm}),{" "}
              {CABINET_INFO.address.street}, {CABINET_INFO.address.postalCode}{" "}
              {CABINET_INFO.address.city}.
              <br />
              Email :{" "}
              <a href={`mailto:${CABINET_INFO.email}`} className="text-[#991b1b] hover:underline">
                {CABINET_INFO.email}
              </a>
            </p>
          </section>

          <div className="h-px bg-[#f1f5f9]" />

          <section aria-labelledby="data-collected">
            <h2 id="data-collected" className="mb-4 text-lg font-bold text-[#0f172a]">
              Données collectées
            </h2>
            <p className="text-[#64748b] text-sm leading-relaxed">
              Lors de l&apos;utilisation du formulaire de contact, les données
              suivantes sont collectées : prénom, nom, adresse email, numéro de
              téléphone, nature de la demande, et contenu du message. Ces données
              sont utilisées exclusivement pour répondre à votre demande.
            </p>
          </section>

          <div className="h-px bg-[#f1f5f9]" />

          <section aria-labelledby="secret">
            <h2 id="secret" className="mb-4 text-lg font-bold text-[#0f172a]">
              Secret professionnel
            </h2>
            <p className="text-[#64748b] text-sm leading-relaxed">
              Toutes les informations que vous nous communiquez sont protégées
              par le secret professionnel de l&apos;avocat (article 66-5 de la loi du
              31 décembre 1971). Elles ne seront jamais transmises à des tiers.
            </p>
          </section>

          <div className="h-px bg-[#f1f5f9]" />

          <section aria-labelledby="rights">
            <h2 id="rights" className="mb-4 text-lg font-bold text-[#0f172a]">
              Vos droits (RGPD)
            </h2>
            <p className="text-[#64748b] text-sm leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement et de portabilité de vos données. Pour exercer ces
              droits, contactez-nous à l&apos;adresse :{" "}
              <a href={`mailto:${CABINET_INFO.email}`} className="text-[#991b1b] hover:underline">
                {CABINET_INFO.email}
              </a>
              .
            </p>
          </section>

          <div className="h-px bg-[#f1f5f9]" />

          <section aria-labelledby="cookies">
            <h2 id="cookies" className="mb-4 text-lg font-bold text-[#0f172a]">
              Cookies
            </h2>
            <p className="text-[#64748b] text-sm leading-relaxed">
              Ce site n&apos;utilise pas de cookies publicitaires ou de traçage. Des
              cookies techniques essentiels peuvent être utilisés pour assurer le
              bon fonctionnement du site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
