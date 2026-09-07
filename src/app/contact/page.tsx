import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez le Cabinet d'Avocats 222 à Toulouse. Formulaire en ligne, téléphone secrétariat 05.31.61.37.82, urgences 24h/24 au 06.66.47.07.43.",
};

export default function ContactPage() {
  return <ContactClient />;
}
