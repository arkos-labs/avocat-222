import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EXPERTISES } from "@/lib/constants";
import { CompetenceDetailClient } from "./CompetenceDetailClient";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return EXPERTISES.map((expertise) => ({
    id: expertise.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const expertise = EXPERTISES.find((e) => e.id === id);
  if (!expertise) return { title: "Compétence non trouvée" };

  return {
    title: expertise.seoTitle || `${expertise.title} à Toulouse | Cabinet 222`,
    description: expertise.seoDescription || expertise.description,
    keywords: expertise.keywords || ["avocat", "droit pénal", "toulouse"],
    openGraph: {
      title: expertise.seoTitle || expertise.title,
      description: expertise.seoDescription || expertise.description,
      type: "article",
      url: `https://cabinet222-avocat.com/competences/${expertise.id}`,
    },
    alternates: {
      canonical: `https://cabinet222-avocat.com/competences/${expertise.id}`,
    },
  };
}

export default async function CompetencePage({ params }: Props) {
  const { id } = await params;
  const expertise = EXPERTISES.find((e) => e.id === id);
  if (!expertise) notFound();

  // Compétences connexes : on exclut la compétence courante, on prend 3 max
  const related = EXPERTISES.filter((e) => e.id !== expertise.id).slice(0, 3);

  // JSON-LD — LegalService + BreadcrumbList + FAQ si disponible
  const jsonLdParts: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://cabinet222-avocat.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Compétences",
          item: "https://cabinet222-avocat.com/competences",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: expertise.title,
          item: `https://cabinet222-avocat.com/competences/${expertise.id}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "@id": `https://cabinet222-avocat.com/competences/${expertise.id}`,
      name: `Cabinet 222 — ${expertise.title}`,
      description: expertise.seoDescription || expertise.description,
      url: `https://cabinet222-avocat.com/competences/${expertise.id}`,
      telephone: "+33666470743",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7 Rue des Prêtres",
        addressLocality: "Toulouse",
        postalCode: "31000",
        addressCountry: "FR",
      },
      areaServed: "Toulouse",
      parentOrganization: {
        "@id": "https://cabinet222-avocat.com/#organization",
      },
    },
  ];

  // FAQ schema si disponible
  if (expertise.faq && expertise.faq.length > 0) {
    jsonLdParts.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: expertise.faq.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <>
      {jsonLdParts.map((part, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(part) }}
        />
      ))}
      <CompetenceDetailClient expertise={expertise} related={related} />
    </>
  );
}
