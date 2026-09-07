import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilitaire pour fusionner les classes Tailwind CSS de manière conditionnelle.
 * Combine clsx (logique conditionnelle) avec tailwind-merge (résolution des conflits).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formate un numéro de téléphone français pour l'affichage.
 * Ex: "0666470743" -> "06.66.47.07.43"
 */
export function formatPhone(phone: string): string {
  return phone.replace(/(\d{2})(?=\d)/g, "$1.").replace(/\.$/, "");
}

/**
 * Formate une date ISO en date française lisible.
 * Ex: "2026-08-15" -> "15 août 2026"
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
