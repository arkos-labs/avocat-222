import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cabinet222-avocat.com"),
  title: {
    template: "%s | Cabinet d'Avocats 222 — Droit Pénal Toulouse",
    default: "Cabinet d'Avocats 222 — Avocat Pénal Toulouse · Urgences 24h/24",
  },
  description:
    "Cabinet d'avocats spécialisé exclusivement en droit pénal à Toulouse. Garde à vue, pénal des affaires, mineurs, routier. Avocates disponibles 24h/24. Appelez le 06.66.47.07.43.",
  keywords: [
    "avocat pénal Toulouse",
    "avocat pénaliste Toulouse",
    "avocat criminaliste Toulouse",
    "garde à vue Toulouse",
    "avocat urgence pénale Toulouse",
    "droit pénal 31",
    "droit pénal Haute-Garonne",
    "Cabinet 222",
    "avocat garde à vue 24h Toulouse",
    "cabinet pénal Toulouse",
  ],
  authors: [{ name: "Cabinet d'Avocats 222" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cabinet222-avocat.com",
    siteName: "Cabinet d'Avocats 222",
    title: "Cabinet d'Avocats 222 — Avocat Pénal Toulouse",
    description:
      "Avocates pénalistes à Toulouse. Urgences garde à vue 24h/24 au 06.66.47.07.43. 13 domaines du droit pénal. 7 Rue des Prêtres, Toulouse.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinet d'Avocats 222 — Avocat Pénal Toulouse",
    description:
      "Avocates pénalistes à Toulouse. Urgences garde à vue 24h/24. Pénal des affaires, mineurs, routier, famille.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cabinet222-avocat.com",
  },
};

// Données structurées JSON-LD — LegalService + Persons
const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://cabinet222-avocat.com/#organization",
      name: "Cabinet d'Avocats 222",
      legalName: "Cabinet 222 SELARL",
      url: "https://cabinet222-avocat.com",
      logo: "https://cabinet222-avocat.com/logo.png",
      telephone: "+33531613782",
      email: "contact@cabinet222-avocat.com",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7 Rue des Prêtres",
        addressLocality: "Toulouse",
        postalCode: "31000",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.6047,
        longitude: 1.4442,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "12:30",
        },
      ],
      areaServed: {
        "@type": "City",
        name: "Toulouse",
      },
      knowsAbout: [
        "Droit pénal",
        "Garde à vue",
        "Pénal des affaires",
        "Droit pénal des mineurs",
        "Droit pénal routier",
        "Pénal du travail",
        "Pénal de la famille",
        "Terrorisme",
        "Criminalité organisée",
        "Aménagement de peine",
      ],
      employee: [
        { "@id": "https://cabinet222-avocat.com/#laura-costes" },
        { "@id": "https://cabinet222-avocat.com/#justine-dalloz" },
        { "@id": "https://cabinet222-avocat.com/#alicia-renard" },
      ],
      sameAs: [
        "https://www.avocats-toulouse.com",
        "https://oip.org",
      ],
    },
    {
      "@type": "Attorney",
      "@id": "https://cabinet222-avocat.com/#laura-costes",
      name: "Laura Costes",
      givenName: "Laura",
      familyName: "Costes",
      jobTitle: "Avocate associée – Fondatrice",
      worksFor: { "@id": "https://cabinet222-avocat.com/#organization" },
      knowsAbout: ["Droit pénal", "Procédure d'instruction", "Garde à vue", "Cour d'assises"],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Université Toulouse Capitole",
      },
      url: "https://cabinet222-avocat.com/equipe",
      image: "https://cabinet222-avocat.com/laura-costes.png",
    },
    {
      "@type": "Attorney",
      "@id": "https://cabinet222-avocat.com/#justine-dalloz",
      name: "Justine Dalloz",
      givenName: "Justine",
      familyName: "Dalloz",
      jobTitle: "Avocate associée",
      worksFor: { "@id": "https://cabinet222-avocat.com/#organization" },
      knowsAbout: [
        "Droit pénal du travail",
        "Défense des mineurs",
        "Droit pénal routier",
        "Comparution immédiate",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Université Toulouse Capitole",
      },
      url: "https://cabinet222-avocat.com/equipe",
      image: "https://cabinet222-avocat.com/justine-dalloz.png",
    },
    {
      "@type": "Attorney",
      "@id": "https://cabinet222-avocat.com/#alicia-renard",
      name: "Alicia Renard",
      givenName: "Alicia",
      familyName: "Renard",
      jobTitle: "Avocate collaboratrice",
      worksFor: { "@id": "https://cabinet222-avocat.com/#organization" },
      knowsAbout: ["Droits fondamentaux", "Procédure pénale", "Libertés publiques"],
      url: "https://cabinet222-avocat.com/equipe",
      image: "https://cabinet222-avocat.com/alicia-renard.png",
    },
    {
      "@type": "WebSite",
      "@id": "https://cabinet222-avocat.com/#website",
      url: "https://cabinet222-avocat.com",
      name: "Cabinet d'Avocats 222",
      publisher: { "@id": "https://cabinet222-avocat.com/#organization" },
      inLanguage: "fr-FR",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#f5f0e8] font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
