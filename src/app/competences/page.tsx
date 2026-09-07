import type { Metadata } from "next";
import { CompetencesClient } from "./CompetencesClient";

export const metadata: Metadata = {
  title: "Droit Pénal Toulouse : 13 Domaines d'Expertise",
  description:
    "Cabinet 222 : avocates spécialisées en droit pénal à Toulouse. Garde à vue, pénal des affaires, mineurs, routier, terrorisme, famille, presse, santé et plus. Urgences 24h/24.",
  keywords: [
    "compétences avocat pénal Toulouse",
    "droit pénal Toulouse",
    "garde à vue Toulouse",
    "pénal des affaires Toulouse",
    "avocat mineur Toulouse",
    "avocat routier Toulouse",
  ],
};

export default function CompetencesPage() {
  return <CompetencesClient />;
}
