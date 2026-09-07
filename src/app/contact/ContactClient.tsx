"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import {
  MapPin, Phone, Mail, Clock, AlertCircle, CheckCircle2, Loader2,
} from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/FormFields";
import {
  CABINET_INFO, PHONE_URGENCE_LINK, PHONE_SECRETARIAT_LINK, EMAIL_LINK,
} from "@/lib/constants";

// ─── Schéma Zod ───────────────────────────────────────────────────────────────

const contactSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères").max(50),
  lastName:  z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(50),
  phone:     z.string().regex(/^(\+33|0)[1-9](\d{2}){4}$/, "Numéro invalide (ex: 0666470743)"),
  email:     z.string().email("Adresse email invalide"),
  requestType: z.enum(["urgence", "conseil", "procedure"]),
  message:   z.string().min(20, "Votre message doit contenir au moins 20 caractères").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ─── Formulaire ───────────────────────────────────────────────────────────────

function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { requestType: "conseil" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setSubmitStatus("success");
    reset();
  };

  const requestTypeOptions = [
    { value: "urgence",   label: "🚨 Urgence pénale (garde à vue, perquisition…)" },
    { value: "conseil",   label: "💼 Demande de consultation" },
    { value: "procedure", label: "⚖️ Procédure en cours" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Formulaire de contact" className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input id="contact-firstname" label="Prénom" placeholder="Marie" autoComplete="given-name" required error={errors.firstName?.message} {...register("firstName")} />
        <Input id="contact-lastname"  label="Nom"    placeholder="Dupont" autoComplete="family-name" required error={errors.lastName?.message}  {...register("lastName")} />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input id="contact-phone" label="Téléphone" type="tel" placeholder="06 XX XX XX XX" autoComplete="tel"   required error={errors.phone?.message} {...register("phone")} />
        <Input id="contact-email" label="Email"     type="email" placeholder="marie.dupont@exemple.fr" autoComplete="email" required error={errors.email?.message} {...register("email")} />
      </div>
      <Select
        id="contact-request-type"
        label="Nature de la demande"
        required
        options={requestTypeOptions}
        placeholder="Sélectionnez la nature de votre demande"
        error={errors.requestType?.message}
        {...register("requestType")}
      />
      <Textarea
        id="contact-message"
        label="Votre message"
        placeholder="Décrivez brièvement votre situation (contexte, date des faits, procédure en cours…)"
        required
        rows={6}
        error={errors.message?.message}
        hint="Votre message est confidentiel. Ne transmettez pas de pièces sensibles par ce biais."
        {...register("message")}
      />
      <p className="text-xs text-[#94a3b8]">
        Les informations recueillies sont protégées par le secret professionnel de l&apos;avocat.{" "}
        <a href="/confidentialite" className="underline hover:text-[#64748b]">Politique de confidentialité</a>.
      </p>

      {submitStatus === "success" && (
        <div role="alert" className="flex items-start gap-3 rounded-sm border border-green-200 bg-green-50 p-4 text-green-800">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
          <div>
            <p className="font-semibold">Message envoyé !</p>
            <p className="text-sm">Nous vous répondrons sous 24h en jours ouvrés.</p>
          </div>
        </div>
      )}
      {submitStatus === "error" && (
        <div role="alert" className="flex items-start gap-3 rounded-sm border border-red-200 bg-red-50 p-4 text-red-800">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
          <div>
            <p className="font-semibold">Une erreur est survenue.</p>
            <p className="text-sm">Contactez-nous directement par téléphone.</p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={submitStatus === "loading"}
        id="contact-submit-btn"
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#07090f] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#8c1212] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07090f] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitStatus === "loading"
          ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />Envoi en cours…</>
          : "Envoyer ma demande"
        }
      </button>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function ContactClient() {
  const hoursItems = [
    { label: "Lundi – Vendredi", value: "9h00 – 19h00" },
    { label: "Samedi",           value: "9h00 – 12h30" },
    { label: "Dimanche",         value: "Fermé" },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-[#07090f] py-24 md:py-32">
        <div className="absolute inset-0">
          <img src="/images/courthouse.jpg" alt="Palais de Justice" className="w-full h-full object-cover opacity-40" />
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
            Prenons{" "}
            <em className="not-italic" style={{ color: "#c0392b" }}>contact</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[#64748b] leading-relaxed">
            Pour toute demande de consultation ou procédure en cours, remplissez
            le formulaire ci-dessous. Pour les urgences, appelez directement.
          </p>
        </div>
      </div>

      {/* ── Urgence — bannière pleine largeur ── */}
      <div className="bg-[#8c1212] py-5">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="animate-pulse-red inline-block h-2.5 w-2.5 rounded-full bg-white shrink-0" aria-hidden="true" />
              <p className="font-semibold text-white text-sm">
                🚨 Garde à vue — Ligne d&apos;urgence 24h/24, 7j/7
              </p>
            </div>
            <a
              href={PHONE_URGENCE_LINK}
              className="flex items-center gap-2 rounded-sm border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {CABINET_INFO.phone.urgence}
            </a>
          </div>
        </div>
      </div>

      {/* ── Split screen ── */}
      <section
        className="bg-[#f5f0e8] py-16 md:py-24"
        aria-labelledby="contact-section-heading"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 id="contact-section-heading" className="sr-only">Formulaire et coordonnées du cabinet</h2>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">

            {/* ── Colonne gauche — infos ── */}
            <div className="flex flex-col gap-5">

              {/* Coordonnées */}
              <div className="rounded-sm border bg-white p-6" style={{ borderColor: "#e8e2d5" }}>
                <h2 className="mb-5 font-bold text-[#0f172a]"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600 }}>
                  Coordonnées du cabinet
                </h2>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8c1212]" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">Adresse</p>
                      <address className="not-italic text-sm text-[#0f172a] mt-0.5">
                        {CABINET_INFO.address.street}, {CABINET_INFO.address.floor}<br />
                        {CABINET_INFO.address.postalCode} {CABINET_INFO.address.city}
                      </address>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-[#64748b]" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">Secrétariat</p>
                      <a href={PHONE_SECRETARIAT_LINK} className="text-sm text-[#0f172a] hover:text-[#8c1212] transition-colors">
                        {CABINET_INFO.phone.secretariat}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-[#64748b]" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">Email</p>
                      <a href={EMAIL_LINK} className="text-sm text-[#0f172a] hover:text-[#8c1212] transition-colors break-all">
                        {CABINET_INFO.email}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Horaires */}
              <div className="rounded-sm border bg-white p-6" style={{ borderColor: "#e8e2d5" }}>
                <div className="mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#8c1212]" aria-hidden="true" />
                  <h2 className="font-bold text-[#0f172a] text-sm">Horaires d&apos;accueil</h2>
                </div>
                <ul className="flex flex-col">
                  {hoursItems.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between border-b py-2.5 text-sm last:border-0"
                      style={{ borderColor: "#f5f0e8" }}
                    >
                      <span className="text-[#64748b]">{item.label}</span>
                      <span className={`font-semibold ${item.value === "Fermé" ? "text-[#94a3b8]" : "text-[#0f172a]"}`}>
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-sm bg-[#f5f0e8] px-4 py-3 text-xs font-medium text-[#64748b]">
                  ⚡ Urgences pénales disponibles 24h/24, 7j/7 au{" "}
                  <strong className="text-[#8c1212]">{CABINET_INFO.phone.urgence}</strong>
                </p>
              </div>

              {/* Carte Google Maps */}
              <div className="overflow-hidden rounded-sm border" style={{ borderColor: "#e8e2d5" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.6!2d1.4440!3d43.6047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s7+Rue+des+Pr%C3%AAtres%2C+31000+Toulouse!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation du Cabinet d'Avocats 222 — 7 Rue des Prêtres, Toulouse"
                  aria-label="Carte montrant l'emplacement du cabinet"
                />
              </div>
            </div>

            {/* ── Colonne droite — Formulaire ── */}
            <div>
              <div className="rounded-sm border bg-white p-8" style={{ borderColor: "#e8e2d5" }}>
                <h2
                  className="mb-1 font-bold text-[#0f172a]"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600 }}
                >
                  Envoyez-nous un message
                </h2>
                <p className="mb-7 text-sm text-[#64748b]">
                  Nous répondons dans un délai de 24h en jours ouvrés.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
