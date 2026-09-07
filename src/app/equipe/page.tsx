import type { Metadata } from "next";
import { EquipeClient } from "./EquipeClient";

export const metadata: Metadata = {
  title: "Nos Avocates Pénalistes à Toulouse",
  description:
    "Découvrez Maître Laura Costes, Maître Justine Dalloz et Maître Alicia Renard, avocates pénalistes au Barreau de Toulouse. Spécialistes en droit pénal depuis 2018.",
  keywords: [
    "avocate pénaliste Toulouse",
    "maître Laura Costes",
    "maître Justine Dalloz",
    "cabinet avocat pénal Toulouse",
    "barreau Toulouse droit pénal",
  ],
};

export default function EquipePage() {
  return <EquipeClient />;
}
