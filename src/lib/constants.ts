import {
  CabinetInfo,
  TeamMember,
  Expertise,
  BlogPost,
  NavItem,
  Pillar,
} from "@/types";

// ─── Informations du Cabinet ──────────────────────────────────────────────────

export const CABINET_INFO: CabinetInfo = {
  name: "Cabinet d'Avocats 222",
  legalForm: "SELARL",
  address: {
    street: "7 Rue des Prêtres",
    floor: "4ème étage",
    city: "TOULOUSE",
    postalCode: "31000",
  },
  phone: {
    secretariat: "05.31.61.37.82",
    urgence: "06.66.47.07.43",
  },
  email: "contact@cabinet222-avocat.com",
  hours: {
    weekdays: "Lundi – Vendredi : 9h00 – 19h00",
    saturday: "Samedi : 9h00 – 12h30",
    urgence: "Urgences pénales 24h/24 – 7j/7",
  },
};

// Formatage des numéros de téléphone pour les liens tel:
export const PHONE_URGENCE_LINK = "tel:0666470743";
export const PHONE_SECRETARIAT_LINK = "tel:0531613782";
export const EMAIL_LINK = `mailto:${CABINET_INFO.email}`;

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: "Le Cabinet", href: "/equipe" },
  { label: "Compétences", href: "/competences" },
  { label: "Honoraires", href: "/honoraires" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_EXTERNAL_LINKS: NavItem[] = [
  {
    label: "OIP — Observatoire International des Prisons",
    href: "https://oip.org",
    external: true,
  },
  {
    label: "Barreau de Toulouse",
    href: "https://www.avocats-toulouse.com",
    external: true,
  },
  {
    label: "LinkedIn du Cabinet",
    href: "https://www.linkedin.com",
    external: true,
  },
];

// ─── Équipe ───────────────────────────────────────────────────────────────────

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "laura-costes",
    name: "Laura Costes",
    title: "Avocate associée – Fondatrice",
    barYear: 2018,
    description:
      "Titulaire d'un Master II en droit pénal et sciences criminelles, Laura Costes a prêté serment au Barreau de Toulouse en 2018. Spécialiste des procédures d'instruction et des contentieux pénaux complexes, elle intervient aux côtés des auteurs comme des victimes, avec une approche rigoureuse et combative. Elle assure également les permanences de garde à vue et assises.",
    engagements: [
      "Membre active de l'Observatoire International des Prisons (OIP)",
      "Formation continue en droit pénal des affaires",
      "Interventions en milieu carcéral pour l'accès au droit",
    ],
    imageInitials: "LC",
    imageUrl: "/laura-costes.png",
  },
  {
    id: "justine-dalloz",
    name: "Justine Dalloz",
    title: "Avocate associée",
    barYear: 2019,
    description:
      "Diplômée de l'Université Toulouse Capitole, Justine Dalloz a prêté serment en 2019. Elle s'est spécialisée en droit pénal du travail, en défense des mineurs et en droit pénal routier. Sa connaissance approfondie des procédures pénales et sa réactivité en font une défenseure redoutable, notamment lors des comparutions immédiates.",
    engagements: [
      "Membre du réseau Défense des Mineurs au Barreau de Toulouse",
      "Permanences d'aide juridictionnelle au tribunal",
      "Sensibilisation au droit des victimes",
    ],
    imageInitials: "JD",
    imageUrl: "/justine-dalloz.png",
  },
  {
    id: "alicia-renard",
    name: "Alicia Renard",
    title: "Avocate collaboratrice",
    barYear: 2025,
    description:
      "Dernière arrivée au cabinet, Alicia Renard a prêté serment en 2025 au Barreau de Toulouse. Passionnée par les droits fondamentaux et la procédure pénale, elle apporte au cabinet une vision renouvelée et une solide formation académique en droit des libertés. Elle accompagne les clients dès la phase d'enquête jusqu'au jugement.",
    engagements: [
      "Engagement auprès de l'OIP pour la défense des droits des détenus",
      "Recherche en procédure pénale et libertés publiques",
      "Permanences garde à vue",
    ],
    imageInitials: "AR",
    imageUrl: "/alicia-renard.png",
  },
];

// ─── Domaines de Compétences ──────────────────────────────────────────────────

export const EXPERTISES: Expertise[] = [
  {
    id: "urgences-penales",
    imageUrl: "/images/justice_scales.jpg",
    title: "Urgences Pénales & Garde à Vue",
    description:
      "Intervention immédiate dès le placement en garde à vue, 24h/24 et 7j/7. Assistance lors de l'audition, conseil sur vos droits, préparation à la mesure judiciaire.",
    icon: "AlertTriangle",
    featured: true,
    seoTitle: "Avocat Garde à Vue Toulouse 24h/24 — Urgences Pénales | Cabinet 222",
    seoDescription:
      "Avocat pénaliste à Toulouse disponible 24h/24 et 7j/7 pour urgences pénales et gardes à vue. Assistance immédiate, comparution immédiate et défense de vos droits. Appelez le 06.66.47.07.43.",
    keywords: [
      "avocat garde à vue Toulouse",
      "urgence pénale Toulouse",
      "avocat pénaliste 24h Toulouse",
      "comparution immédiate Toulouse",
      "avocat garde à vue 24h 31",
      "assistance garde à vue Toulouse",
    ],
    longDescription: `
## Assistance en garde à vue à Toulouse — 24h/24, 7j/7

La garde à vue est une mesure de contrainte particulièrement éprouvante où l'assistance d'un avocat est fondamentale. Dès la première heure, le Cabinet 222 intervient pour s'assurer du respect de vos droits et vous conseiller stratégiquement.

Le Cabinet 222 est joignable **24h/24 et 7j/7** pour toute urgence pénale à Toulouse et dans toute la Haute-Garonne. Nos avocates se déplacent dans tous les commissariats et gendarmeries de la région toulousaine.

## Nos actions immédiates

- Entretien confidentiel de 30 minutes avant toute audition
- Vérification de la régularité de la procédure (notification des droits, examen médical)
- Assistance active lors des auditions et confrontations
- Préparation à une éventuelle comparution immédiate ou mise en examen
- Demande de mise en liberté si la garde à vue est irrégulière

## Pourquoi ne pas rester seul en garde à vue ?

La garde à vue peut durer jusqu'à 48 heures en matière courante, et jusqu'à 96 voire 144 heures pour les affaires de terrorisme ou de criminalité organisée. Durant ce temps, chaque déclaration peut avoir des conséquences déterminantes sur la suite de la procédure pénale.

*Ne renoncez jamais à votre droit d'être assisté par un avocat en garde à vue. Le silence peut être une stratégie, mais il doit être conseillé par un professionnel.*

## Comparution immédiate à Toulouse

Si vous êtes présenté en comparution immédiate devant le Tribunal correctionnel de Toulouse après votre garde à vue, le Cabinet 222 assure votre défense dans l'urgence. Nos avocates maîtrisent les spécificités de cette procédure et plaident systématiquement pour votre remise en liberté si votre situation le permet.
    `,
    faq: [
      {
        question: "Quand faire appel à un avocat lors d'une garde à vue ?",
        answer:
          "Il est crucial de demander l'assistance d'un avocat dès la notification de vos droits, au tout début de la garde à vue, avant même la première audition. Vous pouvez appeler le Cabinet 222 au 06.66.47.07.43, disponible 24h/24.",
      },
      {
        question: "Combien de temps peut durer une garde à vue ?",
        answer:
          "En règle générale, une garde à vue dure 24 heures, renouvelable une fois (48h maximum). Pour des faits de criminalité organisée ou terrorisme, elle peut s'étendre jusqu'à 96h, voire 144h.",
      },
      {
        question: "Puis-je prévenir ma famille en garde à vue ?",
        answer:
          "Oui. Vous avez le droit de faire prévenir un proche et votre employeur de votre placement en garde à vue. Ce droit peut être différé par un magistrat dans certaines affaires graves (trafic de stupéfiants, crime organisé).",
      },
    ],

  },
  {
    id: "penal-travail",
    imageUrl: "/images/courthouse.jpg",
    title: "Pénal du Travail",
    description:
      "Défense des employeurs et salariés dans les contentieux pénaux liés au droit du travail : harcèlement, discrimination, travail dissimulé, mise en danger d'autrui.",
    icon: "Briefcase",
    featured: true,
    seoTitle: "Avocat Droit Pénal du Travail Toulouse — Harcèlement, Accident du Travail | Cabinet 222",
    seoDescription:
      "Défense en droit pénal du travail à Toulouse : harcèlement moral et sexuel, travail dissimulé, accident du travail, mise en danger. Avocates spécialisées pour dirigeants et salariés.",
    keywords: [
      "droit pénal du travail Toulouse",
      "avocat harcèlement moral Toulouse",
      "avocat travail dissimulé Toulouse",
      "avocat accident du travail pénal Toulouse",
      "avocat mise en danger autrui Toulouse",
      "avocat pénal entreprise Toulouse",
    ],
    longDescription: `
## Droit pénal du travail à Toulouse

Le droit pénal du travail sanctionne les manquements aux règles encadrant les relations professionnelles. Ces infractions peuvent avoir des conséquences désastreuses tant pour les dirigeants (responsabilité pénale personnelle) que pour les salariés victimes.

Le Cabinet 222 intervient pour **défendre les employeurs** poursuivis pénalement comme pour **représenter les salariés victimes** souhaitant se constituer partie civile.

## Domaines d'intervention

**Accidents du travail et maladies professionnelles**
- Homicide involontaire, blessures involontaires par manquement à une obligation de sécurité
- Mise en danger de la vie d'autrui (article 223-1 du Code pénal)
- Défense des dirigeants et mise en place de délégations de pouvoirs

**Harcèlement moral et sexuel**
- Harcèlement moral au travail (article L.1152-1 du Code du travail)
- Harcèlement sexuel dans le cadre professionnel
- Discrimination à l'embauche ou dans l'évolution de carrière

**Infractions au fonctionnement de l'entreprise**
- Entrave au fonctionnement du CSE (Comité Social et Économique)
- Travail illégal, travail dissimulé, emploi d'étrangers sans titre de travail

## Responsabilité pénale des dirigeants

Le chef d'entreprise est présumé responsable pénalement en cas d'infraction aux règles de sécurité. Toutefois, cette responsabilité peut être transférée via une délégation de pouvoirs valide et effective. Le Cabinet 222 accompagne les entreprises dans la mise en place de ces dispositifs préventifs.
    `,
    faq: [
      {
        question: "Un chef d'entreprise est-il toujours responsable pénalement en cas d'accident du travail ?",
        answer:
          "Le chef d'entreprise est présumé responsable, mais il peut s'exonérer s'il prouve qu'il avait mis en place une délégation de pouvoirs valide et effective, confiée à une personne compétente, disposant de l'autorité et des moyens nécessaires.",
      },
      {
        question: "Quelles sont les peines encourues pour travail dissimulé ?",
        answer:
          "Le travail dissimulé est un délit passible de 3 ans d'emprisonnement et 45 000 euros d'amende (225 000 euros pour une personne morale), outre des sanctions complémentaires comme des interdictions professionnelles et la fermeture d'établissement.",
      },
      {
        question: "Comment prouver un harcèlement moral en justice pénale ?",
        answer:
          "La preuve du harcèlement moral repose sur un faisceau d'indices : SMS, emails, témoignages de collègues, attestations médicales, rapports RH. Le Cabinet 222 vous aide à constituer ce dossier probatoire dès la première consultation.",
      },
    ],

  },
  {
    id: "penal-famille",
    imageUrl: "/images/gavel.jpg",
    title: "Pénal de la Famille",
    description:
      "Accompagnement des victimes et auteurs d'infractions commises dans le cadre familial : violences conjugales, soustraction d'enfant, non-paiement de pension.",
    icon: "Users",
    featured: true,
    seoTitle: "Avocat Pénal de la Famille Toulouse — Violences Conjugales, Soustraction d'Enfant | Cabinet 222",
    seoDescription:
      "Avocat spécialisé en pénal de la famille à Toulouse. Violences conjugales, violences intrafamiliales, soustraction d'enfant, non-paiement de pension alimentaire. Défense et représentation des victimes.",
    keywords: [
      "avocat violence conjugale Toulouse",
      "avocat violences intrafamiliales Toulouse",
      "avocat soustraction enfant Toulouse",
      "avocat non-paiement pension alimentaire Toulouse",
      "pénal de la famille Toulouse",
      "avocat victime violence conjugale Toulouse",
    ],
    longDescription: `
## Droit pénal de la famille à Toulouse

Les infractions commises dans le cadre familial sont parmi les plus délicates à traiter sur le plan pénal. Elles mêlent souvent des enjeux émotionnels forts, des procédures civiles parallèles (divorce, garde d'enfants) et des impératifs de protection immédiats.

Le Cabinet 222 intervient aussi bien pour **défendre les personnes mises en cause** que pour **accompagner les victimes** dans leur parcours judiciaire.

## Violences conjugales et intrafamiliales

Les violences conjugales (physiques, psychologiques, sexuelles) constituent des infractions pénales pouvant entraîner des peines significatives lorsqu'elles sont commises dans le cadre conjugal (circonstance aggravante). Le Cabinet 222 :

- Assiste les victimes dans leur dépôt de plainte et leur constitution de partie civile
- Sollicite des mesures d'urgence (ordonnance de protection, éviction du domicile)
- Défend les personnes mises en cause et veille au respect de la présomption d'innocence

## Soustraction d'enfant

La soustraction parentale d'enfant (article 227-7 du Code pénal) est punissable d'un an d'emprisonnement et 15 000 euros d'amende. En cas d'enlèvement à l'étranger, des procédures internationales spécifiques (Convention de La Haye) peuvent être engagées.

## Non-paiement de pension alimentaire

L'abandon de famille (article 227-3 du Code pénal) est un délit passible de 2 ans d'emprisonnement et 15 000 euros d'amende. Le Cabinet 222 assiste les bénéficiaires lésés dans leurs démarches pénales pour obtenir le paiement des sommes dues.
    `,
    faq: [
      {
        question: "Que faire en cas de violence conjugale en urgence ?",
        answer:
          "En cas de danger immédiat, appelez le 15 (SAMU), le 17 (Police) ou le 18 (Pompiers). Le 3919 est le numéro national des violences conjugales. Ensuite, consultez rapidement un avocat pour demander une ordonnance de protection au juge aux affaires familiales — une mesure que le Cabinet 222 peut solliciter en urgence.",
      },
      {
        question: "Mon ex-conjoint a emmené notre enfant sans mon accord, que faire ?",
        answer:
          "C'est une soustraction parentale, un délit pénal. Déposez plainte immédiatement. Si l'enfant a été emmené à l'étranger, la Convention de La Haye du 25 octobre 1980 permet d'obtenir son retour rapide. Contactez le Cabinet 222 immédiatement pour engager les procédures.",
      },
    ],

  },
  {
    id: "mineurs",
    imageUrl: "/images/justice_scales.jpg",
    title: "Droit Pénal des Mineurs",
    description:
      "Défense spécialisée des mineurs à chaque stade de la procédure. Maîtrise du Code de la justice pénale des mineurs (CJPM) et des mesures éducatives.",
    icon: "Shield",
    featured: true,
    seoTitle: "Avocat Droit Pénal des Mineurs Toulouse — CJPM, Mesures Éducatives | Cabinet 222",
    seoDescription:
      "Avocat spécialisé en défense des mineurs à Toulouse. Maîtrise du Code de la justice pénale des mineurs (CJPM), mesures éducatives, liberté surveillée, placement. Urgences 24h/24.",
    keywords: [
      "avocat mineur pénal Toulouse",
      "avocat défense mineur Toulouse",
      "CJPM Toulouse",
      "code justice pénale mineurs Toulouse",
      "avocat jeune délinquant Toulouse",
      "mesure éducative mineur Toulouse",
    ],
    longDescription: `
## Droit pénal des mineurs à Toulouse

Le droit pénal des mineurs est une matière à part entière, régie depuis le 30 septembre 2021 par le **Code de la justice pénale des mineurs (CJPM)**. Ce code instaure une procédure en deux temps — une audience de culpabilité suivie d'une audience sur la sanction — et privilégie les mesures éducatives sur les peines d'emprisonnement.

Le Cabinet 222 intervient aux côtés des mineurs de la première garde à vue jusqu'à l'exécution des mesures prononcées, et assiste également leurs parents dans les procédures civiles connexes.

## Les spécificités de la procédure pénale pour mineurs

- **Présomption de discernement** : le mineur de moins de 13 ans est présumé irresponsable pénalement, mais des mesures éducatives peuvent être prononcées
- **Tribunal pour enfants** : juridiction spécialisée de Toulouse compétente pour les mineurs
- **Présence des parents** : les représentants légaux sont convoqués et peuvent eux-mêmes être déclarés responsables civilement
- **Priorité aux mesures éducatives** : liberté surveillée, placement, travail d'intérêt général adapté

## Notre rôle aux côtés du mineur

- Assistance dès la garde à vue (droit à l'avocat renforcé pour les mineurs)
- Présence à toutes les auditions par le juge des enfants
- Défense lors des audiences du tribunal pour enfants
- Demande d'aménagement ou de modification des mesures prononcées
- Recours en appel devant la chambre spéciale des mineurs
    `,
    faq: [
      {
        question: "Mon enfant mineur a été arrêté, que dois-je faire ?",
        answer:
          "Votre enfant a le droit d'être assisté par un avocat dès le début de la garde à vue. Appelez immédiatement le Cabinet 222 au 06.66.47.07.43 (disponible 24h/24). L'avocat contactera le commissariat et sera présent avant toute audition de votre enfant.",
      },
      {
        question: "Quelles peines peut encourir un mineur ?",
        answer:
          "Le CJPM prévoit des mesures éducatives (liberté surveillée, placement, module de réparation) et des peines (emprisonnement avec sursis, travail d'intérêt général). L'emprisonnement ferme est exceptionnel pour les mineurs et soumis à des conditions strictes. Un mineur de moins de 13 ans ne peut pas être emprisonné.",
      },
      {
        question: "Les parents peuvent-ils être condamnés pour les actes de leur enfant mineur ?",
        answer:
          "Les parents ne sont pas pénalement responsables des actes de leur enfant mineur, sauf faute caractérisée de leur part. En revanche, ils peuvent être déclarés civilement responsables et condamnés à indemniser les victimes.",
      },
    ],

  },
  {
    id: "penal-affaires",
    imageUrl: "/images/courthouse.jpg",
    title: "Pénal des Affaires",
    description:
      "Assistance aux dirigeants et entreprises en matière d'abus de biens sociaux, escroquerie, fraude fiscale, blanchiment, corruption et délits boursiers.",
    icon: "BarChart2",
    featured: true,
    seoTitle: "Avocat Pénal des Affaires Toulouse — ABS, Fraude Fiscale, Corruption | Cabinet 222",
    seoDescription:
      "Avocat en droit pénal des affaires à Toulouse. Défense des dirigeants et entreprises : abus de biens sociaux, escroquerie, fraude fiscale, blanchiment, corruption. Cabinet 222.",
    keywords: [
      "avocat pénal affaires Toulouse",
      "avocat abus de biens sociaux Toulouse",
      "avocat fraude fiscale Toulouse",
      "avocat blanchiment Toulouse",
      "avocat corruption Toulouse",
      "avocat escroquerie Toulouse",
      "défense dirigeant pénal Toulouse",
    ],
    longDescription: `
## Droit pénal des affaires à Toulouse

Le droit pénal des affaires regroupe l'ensemble des infractions commises dans le cadre d'une activité économique ou commerciale. Ces affaires se caractérisent souvent par leur complexité technique (comptabilité, droit des sociétés, droit fiscal) et par les enjeux considérables pour les personnes mises en cause (réputation, carrière, liberté).

Le Cabinet 222 dispose d'une expertise pointue pour défendre les **dirigeants, cadres et entreprises** poursuivis pénalement, mais aussi pour représenter les **victimes d'infractions économiques**.

## Infractions les plus courantes

**Infractions contre le patrimoine de la société**
- Abus de biens sociaux (ABS) : utilisation des biens ou du crédit de la société dans un intérêt personnel
- Abus de confiance, escroquerie, faux et usage de faux

**Infractions fiscales et douanières**
- Fraude fiscale (article 1741 CGI) : peine maximale 7 ans d'emprisonnement et 3 millions d'euros d'amende
- Fraude à la TVA, travail dissimulé à grande échelle
- Infractions douanières

**Infractions contre la probité**
- Corruption active et passive (secteurs public et privé)
- Trafic d'influence, prise illégale d'intérêt
- Favoritisme dans les marchés publics

**Infractions boursières**
- Délit d'initié, manipulation de cours
- Diffusion de fausses informations sur les marchés financiers

## Défense en cas de perquisition ou de mise en examen

Les investigations en matière pénale des affaires sont souvent précédées ou accompagnées de perquisitions au siège social ou au domicile. Le Cabinet 222 intervient en urgence pour faire respecter les droits de la défense lors de ces opérations.
    `,
    faq: [
      {
        question: "Qu'est-ce que l'abus de biens sociaux et quelles sont les peines ?",
        answer:
          "L'abus de biens sociaux (ABS) est le fait pour un dirigeant d'utiliser les fonds, biens ou crédits de la société à des fins personnelles, contrairement à l'intérêt social. Il est puni de 5 ans d'emprisonnement et 375 000 euros d'amende. Le délai de prescription est de 6 ans à compter de la découverte des faits.",
      },
      {
        question: "Puis-je être poursuivi pénalement pour fraude fiscale ?",
        answer:
          "Oui. Depuis la loi de 2018 (procureur budgétaire), l'administration fiscale peut transmettre automatiquement au parquet les dossiers dépassant un certain seuil. La fraude fiscale est punie de 7 ans d'emprisonnement et 3 millions d'euros d'amende, voire davantage en cas de circonstances aggravantes.",
      },
      {
        question: "Que faire lors d'une perquisition dans mon entreprise ?",
        answer:
          "Restez calme, ne vous opposez pas à la perquisition (c'est un délit), mais exercez vos droits : exigez de voir le mandat, notez les objets saisis, et contactez immédiatement votre avocat. Rien n'oblige le dirigeant à commenter les documents saisis sur-le-champ.",
      },
    ],

  },
  {
    id: "penal-routier",
    imageUrl: "/images/gavel.jpg",
    title: "Pénal Routier",
    description:
      "Défense en cas d'infraction au Code de la route : conduite sous l'empire d'un état alcoolique ou stupéfiants, refus d'obtempérer, homicide routier.",
    icon: "Car",
    featured: true,
    seoTitle: "Avocat Pénal Routier Toulouse — Alcool, Stupéfiants, Homicide Routier | Cabinet 222",
    seoDescription:
      "Avocat spécialisé en droit pénal routier à Toulouse. Conduite sous alcool ou stupéfiants, refus d'obtempérer, homicide routier, suspension de permis. Défense efficace au Tribunal correctionnel.",
    keywords: [
      "avocat pénal routier Toulouse",
      "avocat conduite alcool Toulouse",
      "avocat stupéfiants volant Toulouse",
      "avocat homicide routier Toulouse",
      "avocat suspension permis Toulouse",
      "avocat refus d'obtempérer Toulouse",
      "avocat infraction code de la route Toulouse",
    ],
    longDescription: `
## Droit pénal routier à Toulouse

Les infractions au Code de la route peuvent avoir des conséquences graves : suspension ou annulation du permis de conduire, lourdes amendes, voire emprisonnement. Le Cabinet 222 défend les conducteurs poursuivis devant le Tribunal correctionnel de Toulouse.

## Infractions les plus fréquentes

**Conduite sous l'empire d'un état alcoolique**
- Alcoolémie délictuelle : taux égal ou supérieur à 0,8 g/L de sang (ou 0,40 mg/L d'air expiré)
- Peines : jusqu'à 2 ans d'emprisonnement, 4 500 € d'amende, suspension de permis, travail d'intérêt général
- Circonstances aggravantes : accident avec blessés ou mort, récidive

**Conduite sous l'emprise de stupéfiants**
- Détection par test salivaire ou prise de sang
- Même régime que l'alcool avec cumul possible des deux infractions
- Peines aggravées en cas de récidive ou d'accident

**Homicide routier et blessures involontaires**
- Depuis la loi du 12 mai 2024 : l'appellation "homicide routier" remplace "homicide involontaire" en cas de conduite avec circonstance aggravante
- Peines jusqu'à 10 ans d'emprisonnement et 150 000 € d'amende

**Refus d'obtempérer**
- Peine de base : 3 ans d'emprisonnement et 75 000 € d'amende
- Aggravée en cas de mise en danger d'autrui : jusqu'à 7 ans et 100 000 €

## Notre stratégie de défense

Le Cabinet 222 analyse systématiquement la régularité des contrôles (légalité du checkpoint, fonctionnement des éthylomètres, respect des procédures de prélèvement sanguin), les conditions d'interpellation et l'ensemble de la procédure pour identifier tout vice susceptible d'annuler les poursuites ou d'atténuer les sanctions.
    `,
    faq: [
      {
        question: "Peut-on contester un résultat d'alcootest ?",
        answer:
          "Oui. Vous pouvez demander une contre-expertise par prise de sang dans les heures suivant le contrôle. Par ailleurs, le bon fonctionnement de l'éthylomètre (date de vérification, procédure respectée) peut être contesté. Le Cabinet 222 vérifie systématiquement ces éléments.",
      },
      {
        question: "Mon permis est suspendu, puis-je continuer à conduire pour le travail ?",
        answer:
          "Non, une suspension de permis s'impose immédiatement. En revanche, selon les infractions, le Cabinet 222 peut plaider pour un permis blanc (autorisation de conduire à certaines heures pour raisons professionnelles) devant le tribunal.",
      },
      {
        question: "J'ai refusé un test de dépistage d'alcool, quelles sont les conséquences ?",
        answer:
          "Le refus de se soumettre aux vérifications de l'alcoolémie est un délit puni de 2 ans d'emprisonnement et 4 500 € d'amende, soit les mêmes peines qu'une alcoolémie délictuelle. Cette infraction est souvent mal comprise — il est toujours préférable de se soumettre au test.",
      },
    ],

  },
  {
    id: "terrorisme",
    imageUrl: "/images/justice_scales.jpg",
    title: "Terrorisme & Criminalité Organisée",
    description:
      "Défense dans les affaires de terrorisme, associations de malfaiteurs et criminalité organisée. Expertise dans les procédures spécialisées (PNAT).",
    icon: "Siren",
    featured: false,
    seoTitle: "Avocat Terrorisme & Criminalité Organisée Toulouse — PNAT | Cabinet 222",
    seoDescription:
      "Avocat défense terrorisme et criminalité organisée à Toulouse. Expertise en procédures PNAT (Parquet National Anti-Terroriste), association de malfaiteurs, trafic de stupéfiants en bande organisée.",
    keywords: [
      "avocat terrorisme Toulouse",
      "avocat criminalité organisée Toulouse",
      "avocat PNAT Toulouse",
      "avocat association malfaiteurs Toulouse",
      "avocat trafic stupéfiants bande organisée",
      "défense terrorisme France",
    ],
    longDescription: `
## Terrorisme et criminalité organisée — Défense à Toulouse

Les affaires de terrorisme et de criminalité organisée sont jugées devant des juridictions spécialisées soumises à des règles procédurales dérogatoires au droit commun. Ces affaires nécessitent une expertise technique approfondie et une parfaite maîtrise des dispositifs spéciaux.

## Le Parquet National Anti-Terroriste (PNAT)

Depuis 2019, le PNAT est compétent pour l'ensemble des affaires terroristes en France. Les investigations sont menées par des magistrats et enquêteurs spécialisés (DGSI, SDAT). La durée de garde à vue peut aller jusqu'à **144 heures** (6 jours).

## Infractions relevant de la criminalité organisée

La criminalité organisée (articles 706-73 et suivants du Code de procédure pénale) inclut notamment :
- Trafic de stupéfiants en bande organisée
- Association de malfaiteurs en vue de préparer un crime
- Enlèvement et séquestration en bande organisée
- Proxénétisme aggravé, traite des êtres humains
- Blanchiment du produit de ces infractions

## Garanties procédurales renforcées

Dans ces procédures, le droit à l'avocat peut être différé jusqu'à 72 heures en matière terroriste. Cependant, les droits fondamentaux de la défense demeurent intacts : droit au silence, droit à la contradiction, droit à l'interprète. Le Cabinet 222 veille au strict respect de ces garanties.
    `,
    faq: [
      {
        question: "Quelle est la différence entre une association de malfaiteurs et une bande organisée ?",
        answer:
          "L'association de malfaiteurs (article 450-1 du Code pénal) est un délit autonome sanctionnant le seul fait de s'entendre avec d'autres personnes pour commettre une infraction. La bande organisée est une circonstance aggravante qui alourdit les peines d'infractions déjà constituées (trafic de stupéfiants, vol, etc.).",
      },
      {
        question: "Comment se déroule une garde à vue en matière terroriste ?",
        answer:
          "La garde à vue peut durer jusqu'à 6 jours (144 heures) avec autorisation du juge des libertés et de la détention. L'intervention de l'avocat peut être différée jusqu'à 72 heures par décision motivée d'un magistrat. Des mesures spéciales de sécurité s'appliquent lors des entretiens.",
      },
    ],

  },
  {
    id: "presse",
    imageUrl: "/images/courthouse.jpg",
    title: "Droit Pénal de la Presse",
    description:
      "Diffamation, injure, provocation à la haine, atteinte à la vie privée. Défense des journalistes, éditeurs et particuliers devant les juridictions pénales.",
    icon: "Newspaper",
    featured: false,
    seoTitle: "Avocat Droit Pénal de la Presse Toulouse — Diffamation, Injure | Cabinet 222",
    seoDescription:
      "Avocat spécialisé en droit pénal de la presse à Toulouse. Diffamation publique, injure, provocation à la haine, protection de la vie privée. Défense des journalistes, éditeurs et particuliers.",
    keywords: [
      "avocat diffamation Toulouse",
      "avocat injure Toulouse",
      "avocat droit de la presse Toulouse",
      "avocat atteinte vie privée Toulouse",
      "avocat provocation haine Toulouse",
      "défense journaliste pénal Toulouse",
    ],
    longDescription: `
## Droit pénal de la presse à Toulouse

Le droit pénal de la presse est régi principalement par la **loi du 29 juillet 1881** sur la liberté de la presse, loi fondatrice qui définit un régime dérogatoire au droit commun avec des procédures strictes et des délais de prescription très courts (3 mois).

## Infractions de presse

**Diffamation**
La diffamation est l'allégation ou l'imputation d'un fait portant atteinte à l'honneur ou à la considération d'une personne ou d'un groupe de personnes. Elle peut être publique (presse, internet, réseaux sociaux) ou non publique.
- Peine : jusqu'à 1 an d'emprisonnement et 45 000 € d'amende (aggravée à 1 an et 45 000 € pour diffamation raciste)

**Injure**
Toute expression outrageante, termes de mépris ou invective sans allégation de fait précis. Peine : jusqu'à 6 mois d'emprisonnement et 22 500 € d'amende.

**Provocation à la haine et à la discrimination**
Les propos publics incitant à la haine, à la violence ou à la discrimination fondée sur l'origine, la religion, le sexe ou l'orientation sexuelle sont sanctionnés jusqu'à 1 an d'emprisonnement et 45 000 € d'amende.

## Défense des journalistes et lanceurs d'alerte

Le Cabinet 222 défend les journalistes poursuivis pour leurs publications et les lanceurs d'alerte bénéficiant des protections légales issues des lois Sapin II et Waserman.

## Un délai de prescription très court

En matière de presse, le délai de prescription est de **3 mois** à compter de la première publication. Il est impératif d'agir rapidement, que vous soyez victime ou mis en cause.
    `,
    faq: [
      {
        question: "Un commentaire sur les réseaux sociaux peut-il constituer une diffamation ?",
        answer:
          "Oui. Les publications sur Facebook, Twitter/X, Instagram et autres réseaux sociaux peuvent constituer une diffamation publique au sens de la loi de 1881, dès lors qu'elles sont accessibles à un groupe indéterminé de personnes. Le délai pour agir est de 3 mois à compter de la publication.",
      },
      {
        question: "Comment se défendre contre une plainte pour diffamation ?",
        answer:
          "La principale défense est l'exception de vérité (exceptio veritatis) : prouver que le fait allégué est vrai. D'autres moyens existent : la bonne foi (intention de nuire absente), le défaut de publicité, ou la prescription. Le Cabinet 222 analyse chaque situation pour construire la stratégie la plus efficace.",
      },
    ],

  },
  {
    id: "sante",
    imageUrl: "/images/gavel.jpg",
    title: "Pénal de la Santé",
    description:
      "Contentieux pénaux liés au secteur médical : homicide involontaire, blessures involontaires, mise en danger, infractions aux règles de déontologie.",
    icon: "Stethoscope",
    featured: false,
    seoTitle: "Avocat Pénal de la Santé Toulouse — Responsabilité Médicale Pénale | Cabinet 222",
    seoDescription:
      "Avocat spécialisé en droit pénal de la santé à Toulouse. Défense des professionnels de santé poursuivis pénalement et représentation des patients victimes. Homicide involontaire médical, faute médicale.",
    keywords: [
      "avocat pénal santé Toulouse",
      "avocat faute médicale pénale Toulouse",
      "avocat responsabilité médecin Toulouse",
      "avocat homicide involontaire médical Toulouse",
      "défense professionnel santé pénal Toulouse",
      "avocat victime faute médicale Toulouse",
    ],
    longDescription: `
## Droit pénal de la santé à Toulouse

Le droit pénal de la santé régit les poursuites pénales engagées à l'encontre des professionnels de santé (médecins, chirurgiens, infirmiers, pharmaciens) en cas de faute ayant causé un dommage au patient. Le Cabinet 222 intervient aussi bien pour **défendre les professionnels de santé** que pour **représenter les patients victimes**.

## Infractions pénales dans le secteur médical

**Homicide involontaire et blessures involontaires**
Ces infractions (articles 221-6 et 222-19 du Code pénal) sont les plus fréquentes dans le contentieux médico-pénal. Elles supposent une faute caractérisée (maladresse, imprudence, négligence ou manquement à une obligation de prudence ou de sécurité) ayant causé le décès ou la blessure du patient.

**Mise en danger de la vie d'autrui**
L'article 223-1 du Code pénal sanctionne le fait d'exposer délibérément autrui à un risque immédiat de mort ou de blessures graves, même sans dommage effectif.

**Violation du secret médical**
Le secret médical est protégé pénalement (article 226-13 du Code pénal). Sa violation est punie d'1 an d'emprisonnement et 15 000 € d'amende.

## La défense des professionnels de santé

La mise en cause pénale d'un professionnel de santé requiert la preuve d'une faute suffisamment grave. Le Cabinet 222 analyse les expertises médicales, les protocoles appliqués et l'ensemble du dossier médical pour construire une défense solide.

## L'accompagnement des victimes

Les patients victimes d'une faute médicale peuvent se constituer partie civile dans la procédure pénale afin d'obtenir réparation de leur préjudice. Le Cabinet 222 vous accompagne dans toutes les démarches.
    `,
    faq: [
      {
        question: "Quelle est la différence entre la responsabilité civile et la responsabilité pénale médicale ?",
        answer:
          "La responsabilité civile médicale vise à indemniser la victime (CRCI, tribunal). La responsabilité pénale vise à sanctionner le professionnel de santé pour une infraction. Les deux voies peuvent être poursuivies simultanément, la constitution de partie civile dans la procédure pénale permettant d'obtenir réparation.",
      },
      {
        question: "Un médecin peut-il être condamné pénalement pour une erreur médicale ?",
        answer:
          "Oui, mais uniquement si une faute pénalement qualifiable est établie. Une simple erreur d'appréciation ou un accident médical sans faute caractérisée ne suffit pas à engager la responsabilité pénale. L'expert médical judiciaire est au cœur de l'évaluation de cette faute.",
      },
    ],

  },
  {
    id: "execution-peine",
    imageUrl: "/images/justice_scales.jpg",
    title: "Exécution & Aménagement de Peine",
    description:
      "Recours devant le juge de l'application des peines (JAP) : demandes de liberté conditionnelle, semi-liberté, bracelet électronique, réduction de peine.",
    icon: "Scale",
    featured: false,
    seoTitle: "Avocat Aménagement de Peine Toulouse — Liberté Conditionnelle, Bracelet Électronique | Cabinet 222",
    seoDescription:
      "Avocat spécialisé en exécution et aménagement de peine à Toulouse. Liberté conditionnelle, semi-liberté, bracelet électronique (PSE), réduction de peine. Recours devant le JAP.",
    keywords: [
      "avocat aménagement peine Toulouse",
      "avocat liberté conditionnelle Toulouse",
      "avocat bracelet électronique Toulouse",
      "avocat semi-liberté Toulouse",
      "avocat JAP Toulouse",
      "juge application peine Toulouse",
      "réduction peine Toulouse",
    ],
    longDescription: `
## Exécution et aménagement de peine à Toulouse

La condamnation pénale n'est pas toujours synonyme d'incarcération effective. Le droit pénal prévoit de nombreux aménagements permettant d'exécuter la peine en dehors de la prison ou d'en réduire la durée. Le Cabinet 222 intervient devant le **juge de l'application des peines (JAP)** du Tribunal judiciaire de Toulouse.

## Les principaux aménagements de peine

**Placement sous surveillance électronique (PSE — bracelet électronique)**
Permet d'exécuter une peine de moins de 2 ans (ou le reliquat inférieur à 2 ans) à domicile, sous contrôle électronique. Conditions : projet d'insertion, domicile fixe, accord des personnes résidant au domicile.

**Semi-liberté**
Le condamné quitte l'établissement pénitentiaire le jour pour exercer une activité professionnelle, suivre une formation ou se soigner, et réintègre la prison le soir. Applicable pour les peines inférieures à 2 ans ou le reliquat inférieur à 2 ans.

**Liberté conditionnelle**
Permet la remise en liberté sous conditions (suivi socio-judiciaire, pointage, etc.) avant la fin de la peine. Accordée en principe à mi-peine, voire aux deux tiers pour les récidivistes.

**Réduction de peine**
Les réductions de peine ordinaires (RPO) et exceptionnelles (RPE) permettent de diminuer la durée d'incarcération en récompense des efforts de réinsertion.

## Intervention du Cabinet 222

Nos avocates préparent et présentent les demandes d'aménagement, plaident devant le JAP et représentent les condamnés lors des débats contradictoires. Elles interviennent également pour les personnes détenues dans les établissements pénitentiaires de la région toulousaine (Seysses, Muret).
    `,
    faq: [
      {
        question: "À partir de quelle durée de peine peut-on demander un bracelet électronique ?",
        answer:
          "Le placement sous surveillance électronique (PSE) peut être accordé pour toute peine d'emprisonnement inférieure ou égale à 2 ans (ou le reliquat de peine inférieur à 2 ans). Il peut être accordé dès le prononcé de la condamnation ou en cours d'exécution de la peine.",
      },
      {
        question: "Comment se prépare une demande de liberté conditionnelle ?",
        answer:
          "La demande de liberté conditionnelle doit reposer sur un projet sérieux de réinsertion : promesse d'embauche, hébergement stable, suivi médical si nécessaire. Le Cabinet 222 vous aide à constituer ce dossier et vous représente lors du débat contradictoire devant le JAP ou le tribunal d'application des peines.",
      },
    ],

  },
  {
    id: "fichiers",
    imageUrl: "/images/courthouse.jpg",
    title: "Fichiers & Casier Judiciaire",
    description:
      "Procédures d'effacement des fichiers de police (STIC, JUDEX, TAJ), contestation des inscriptions au casier judiciaire, demandes de relèvement.",
    icon: "FileSearch",
    featured: false,
    seoTitle: "Avocat Effacement Fichiers Police Casier Judiciaire Toulouse — STIC, TAJ | Cabinet 222",
    seoDescription:
      "Avocat spécialisé effacement fichiers de police (STIC, TAJ, JUDEX) et casier judiciaire à Toulouse. Demande de relèvement, rectification des données. Cabinet 222.",
    keywords: [
      "effacement fichier police Toulouse",
      "avocat STIC TAJ Toulouse",
      "avocat casier judiciaire Toulouse",
      "effacement casier judiciaire Toulouse",
      "demande relèvement condamnation Toulouse",
      "avocat TAJ STIC JUDEX",
      "suppression fiche police Toulouse",
    ],
    longDescription: `
## Fichiers de police et casier judiciaire — Effacement à Toulouse

Une inscription dans un fichier de police ou au casier judiciaire peut avoir des conséquences durables sur la vie professionnelle et personnelle. Le Cabinet 222 vous assiste dans toutes les démarches visant à contester, rectifier ou effacer ces données.

## Les fichiers de police judiciaire

**Le TAJ (Traitement des Antécédents Judiciaires)**
Le TAJ a remplacé le STIC et le JUDEX en 2013. Il centralise les informations sur les personnes mises en cause dans des affaires pénales. Une personne peut y figurer même sans condamnation (classement sans suite, non-lieu, acquittement).

**Droit à l'effacement ou à la rectification**
En cas de classement sans suite, d'acquittement ou de non-lieu, les données doivent en principe être actualisées ou effacées. Si tel n'est pas le cas, une demande peut être adressée au procureur de la République ou au responsable du fichier.

## Le casier judiciaire national

Le casier judiciaire comporte trois bulletins :
- **B1** : toutes les condamnations (réservé aux autorités judiciaires)
- **B2** : condamnations graves (réservé à certaines administrations et employeurs)
- **B3** : condamnations très graves (délivré à la personne elle-même)

**Le relèvement (dispense d'inscription)**
Toute personne condamnée peut, sous certaines conditions, demander au tribunal qui l'a jugée que sa condamnation ne soit pas inscrite au B2 ou au B3. Cette démarche, appelée relèvement, doit être demandée au moment du jugement ou dans un délai d'un an.

**L'effacement après réhabilitation**
La réhabilitation légale efface automatiquement les condamnations du casier judiciaire après l'écoulement d'un certain délai sans récidive. Le Cabinet 222 vérifie si vous remplissez les conditions de réhabilitation et vous accompagne dans les démarches.
    `,
    faq: [
      {
        question: "Je n'ai pas été condamné mais j'apparais dans un fichier de police, que faire ?",
        answer:
          "Si vous avez été mis en cause dans une affaire classée sans suite, non-lieu ou acquittement, vos données dans le TAJ doivent être actualisées. Vous pouvez adresser une demande de vérification et d'effacement au procureur de la République. Le Cabinet 222 rédige cette demande et suit la procédure.",
      },
      {
        question: "Peut-on faire effacer une condamnation du casier judiciaire ?",
        answer:
          "La réhabilitation légale efface les condamnations après un délai variant de 3 à 10 ans selon la nature de la condamnation et l'absence de récidive. Une réhabilitation judiciaire peut également être demandée avant ce délai. Certaines condamnations peuvent faire l'objet d'un relèvement pour ne pas figurer aux bulletins B2 et B3.",
      },
    ],

  },
  {
    id: "disciplinaire",
    imageUrl: "/images/gavel.jpg",
    title: "Droit Disciplinaire",
    description:
      "Représentation devant les conseils de discipline des professions réglementées. Assistance en matière de sanctions disciplinaires à caractère pénal.",
    icon: "GraduationCap",
    featured: false,
    seoTitle: "Avocat Droit Disciplinaire Toulouse — Professions Réglementées | Cabinet 222",
    seoDescription:
      "Avocat en droit disciplinaire à Toulouse. Représentation devant les conseils de discipline des professions réglementées : médecins, avocats, fonctionnaires. Sanctions disciplinaires à caractère pénal.",
    keywords: [
      "avocat droit disciplinaire Toulouse",
      "conseil discipline Toulouse",
      "défense professions réglementées Toulouse",
      "sanction disciplinaire avocat Toulouse",
      "avocat fonctionnaire sanction Toulouse",
      "discipline médicale Toulouse",
    ],
    longDescription: `
## Droit disciplinaire à Toulouse

Le droit disciplinaire régit les sanctions prononcées par les instances professionnelles à l'égard de leurs membres. Ces procédures présentent une double nature : elles sont propres à chaque corps professionnel tout en empruntant aux garanties du procès pénal équitable (droit à la défense, présomption d'innocence, principe du contradictoire).

## Professions concernées

Le Cabinet 222 intervient pour la défense des membres de nombreuses professions réglementées :

- **Professions juridiques et judiciaires** : avocats (Conseil de discipline du Barreau), notaires, huissiers, mandataires judiciaires
- **Professions médicales et paramédicales** : médecins, chirurgiens-dentistes, sages-femmes, pharmaciens (Ordre des médecins, ONCD, etc.)
- **Fonctionnaires et agents publics** : conseils de discipline de la fonction publique d'État, territoriale et hospitalière
- **Professions financières** : commissaires aux comptes, experts-comptables

## Les sanctions disciplinaires

Les sanctions varient selon les professions, mais incluent généralement : l'avertissement, le blâme, la suspension temporaire d'exercice, la radiation du tableau ou de l'ordre (mesure la plus grave), et l'interdiction d'exercer.

## Articulation avec la procédure pénale

Lorsqu'un professionnel est simultanément poursuivi pénalement et disciplinairement pour les mêmes faits, le Cabinet 222 assure une défense coordonnée pour éviter toute contradiction préjudiciable entre les deux procédures.
    `,
    faq: [
      {
        question: "La procédure disciplinaire est-elle indépendante de la procédure pénale ?",
        answer:
          "Oui, les deux procédures sont indépendantes et peuvent mener à des sanctions cumulées. Cependant, une décision pénale définitive d'acquittement ou de relaxe peut influencer favorablement la procédure disciplinaire. Le Cabinet 222 coordonne les deux défenses.",
      },
      {
        question: "Un fonctionnaire peut-il être radié suite à une condamnation pénale ?",
        answer:
          "Oui. Certaines condamnations pénales entraînent automatiquement des incapacités professionnelles dans la fonction publique (notamment les crimes et certains délits). Par ailleurs, l'administration peut engager une procédure disciplinaire autonome, même pour des faits commis hors service si ceux-ci sont de nature à porter atteinte à la dignité de la fonction.",
      },
    ],

  },
  {
    id: "victimes",
    imageUrl: "/images/justice_scales.jpg",
    title: "Défense & Assistance des Victimes",
    description:
      "Accompagnement des victimes de toute infraction pénale : constitution de partie civile, obtention de dommages-intérêts, suivi de la procédure.",
    icon: "Heart",
    featured: false,
    seoTitle: "Avocat Assistance des Victimes Toulouse — Partie Civile, Indemnisation | Cabinet 222",
    seoDescription:
      "Avocat pour l'assistance des victimes à Toulouse. Constitution de partie civile, indemnisation devant le FGTI, suivi de la procédure pénale. Le Cabinet 222 défend les victimes d'infractions pénales.",
    keywords: [
      "avocat victimes Toulouse",
      "avocat partie civile Toulouse",
      "indemnisation victime infraction Toulouse",
      "avocat FGTI Toulouse",
      "défense victime pénal Toulouse",
      "constitution partie civile Toulouse",
    ],
    longDescription: `
## Assistance et défense des victimes à Toulouse

Être victime d'une infraction pénale est une épreuve difficile. La procédure judiciaire peut sembler longue et opaque. Le Cabinet 222 accompagne les victimes à chaque étape pour faire valoir leurs droits, obtenir réparation et être informées du déroulement de l'affaire.

## La constitution de partie civile

La constitution de partie civile permet à la victime de devenir un acteur à part entière de la procédure pénale :
- Accès au dossier d'instruction et aux pièces de la procédure
- Droit de faire réaliser des actes d'enquête (expertise, audition de témoins)
- Demande de dommages-intérêts lors du jugement
- Recours en appel contre une décision d'acquittement ou de relaxe insuffisante

## Comment saisir la justice en tant que victime ?

- **Dépôt de plainte** : au commissariat, à la gendarmerie ou directement auprès du procureur de la République
- **Plainte avec constitution de partie civile** : directement adressée au doyen des juges d'instruction, permet de déclencher une instruction même si le parquet a classé sans suite
- **Citation directe** : en matière correctionnelle, la victime peut citer directement le mis en cause devant le tribunal

## Le Fonds de Garantie des victimes (FGTI)

Pour les victimes d'actes de terrorisme et de certaines infractions graves (viol, meurtre, coups et blessures volontaires ayant entraîné une ITT supérieure à 1 mois), le FGTI peut indemniser même en l'absence de condamnation de l'auteur ou en cas d'insolvabilité. Le Cabinet 222 vous accompagne dans ces démarches.

## CIVI — Commission d'Indemnisation des Victimes d'Infractions

La CIVI, rattachée à chaque tribunal judiciaire, peut accorder une indemnisation aux victimes de certaines infractions (violences, atteintes sexuelles, vols avec violences). Le Cabinet 222 constitue et soutient votre dossier devant la CIVI de Toulouse.
    `,
    faq: [
      {
        question: "Puis-je être indemnisée même si l'auteur de l'infraction n'est pas condamné ?",
        answer:
          "Oui. Le FGTI et la CIVI peuvent indemniser les victimes indépendamment de toute condamnation pénale, sous conditions (nature de l'infraction, situation de la victime). La CIVI peut notamment intervenir si l'auteur est inconnu, insolvable ou décédé.",
      },
      {
        question: "Que se passe-t-il si le parquet classe mon affaire sans suite ?",
        answer:
          "Un classement sans suite n'est pas définitif. Vous pouvez former un recours hiérarchique auprès du procureur général. Vous pouvez également déposer une plainte avec constitution de partie civile directement auprès du juge d'instruction pour déclencher une enquête judiciaire indépendante de la décision du parquet.",
      },
      {
        question: "Combien coûte l'assistance d'un avocat pour une victime ?",
        answer:
          "Les honoraires varient selon la complexité du dossier. Si vous bénéficiez de l'aide juridictionnelle, vos frais d'avocat seront pris en charge totalement ou partiellement par l'État. Si vous avez une protection juridique (assurance habitation, auto, carte bancaire), elle peut couvrir vos frais. Le Cabinet 222 examine avec vous toutes les options dès la première consultation.",
      },
    ],

  },
];

// ─── Les 3 Piliers du Cabinet ─────────────────────────────────────────────────

export const PILLARS: Pillar[] = [
  {
    id: "reactivite",
    title: "Réactivité & Mobilité",
    description:
      "En matière pénale, chaque heure compte. Le cabinet est disponible 24h/24, 7j/7 pour les urgences (garde à vue, perquisition). Nous nous déplaçons dans tous les établissements de détention et commissariats de la région toulousaine.",
    icon: "Zap",
  },
  {
    id: "technicite",
    title: "Technicité & Sérieux",
    description:
      "La procédure pénale est un champ d'une particulière complexité. Nos avocates cultivent une expertise pointue par une formation continue rigoureuse, garantissant une défense construite sur des arguments juridiques solides et innovants.",
    icon: "BookOpen",
  },
  {
    id: "integrite",
    title: "Intégrité & Pugnacité",
    description:
      "Nous croyons en l'égalité des armes et défendons cette conviction avec pugnacité. Notre engagement éthique — auprès de l'OIP notamment — témoigne de notre attachement profond aux droits fondamentaux et à la dignité de chaque justiciable.",
    icon: "Award",
  },
];

// ─── Articles de Blog ──────────────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "7",
    slug: "violences-conjugales-que-faire",
    title: "Violences conjugales : vos droits et les recours pénaux à Toulouse",
    excerpt:
      "Victime de violences conjugales ou mise en cause dans cette situation, vous devez connaître vos droits. Ordonnance de protection, dépôt de plainte, constitution de partie civile : le Cabinet 222 vous guide.",
    date: "2026-09-02",
    category: "Pénal de la Famille",
    readingTime: 8,
    content: `
Les violences conjugales constituent l'un des fléaux les plus graves de notre société. En droit pénal, elles font l'objet d'un traitement spécifique, extrêmement rigoureux, en raison de la relation de confiance qui lie ou a lié l'auteur à sa victime. La loi n'a cessé de se durcir ces dernières années pour mieux protéger les victimes et sanctionner plus sévèrement les auteurs. Que vous soyez victime cherchant à vous protéger ou mis en cause devant la justice, le Cabinet 222 vous éclaire sur les rouages de cette procédure complexe.

## La définition légale et les différentes formes de violences

Contrairement aux idées reçues, les violences conjugales ne se limitent pas aux seules agressions physiques. Le Code pénal et la jurisprudence reconnaissent plusieurs formes de violences, toutes pénalement répréhensibles :

- **Les violences physiques** : coups, bousculades, strangulations, séquestrations.
- **Les violences psychologiques et le harcèlement moral** : prévues par l'article 222-14-3 du Code pénal, elles se caractérisent par des propos ou comportements répétés ayant pour but ou pour effet une dégradation des conditions de vie (insultes, menaces, dénigrement, chantage).
- **Les violences économiques** : privation de moyens financiers, interdiction de travailler, contrôle abusif des dépenses.
- **Les violences sexuelles** : le viol et les agressions sexuelles entre conjoints sont sévèrement réprimés (le devoir conjugal n'existe pas en droit pénal).

## L'aggravation des peines : la circonstance de "conjoint"

L'article 222-13 du Code pénal fait de la qualité de conjoint, concubin ou partenaire de PACS une **circonstance aggravante**. Cette aggravation s'applique même si le couple est séparé, dès lors que les violences ont été commises en raison des relations ayant existé entre l'auteur et la victime.

Les peines maximales encourues sont dramatiquement alourdies :
- **Violences sans ITT (Incapacité Totale de Travail)** : 3 ans d'emprisonnement et 45 000 € d'amende (contre une simple contravention si l'infraction était commise dans la rue).
- **Violences avec ITT inférieure ou égale à 8 jours** : 5 ans d'emprisonnement et 75 000 € d'amende.
- **Violences avec ITT supérieure à 8 jours** : 10 ans d'emprisonnement et 150 000 € d'amende.
- **Violences ayant entraîné la mort sans intention de la donner** : 20 ans de réclusion criminelle.

## Les mesures de protection d'urgence pour la victime

Le droit a évolué pour offrir des boucliers juridiques immédiats aux victimes :

**1. L'Ordonnance de Protection (Juge aux Affaires Familiales)**
Délivrée en urgence (délai maximum de 6 jours), elle permet au JAF d'ordonner l'éviction du conjoint violent du domicile conjugal, d'interdire à ce dernier d'entrer en contact avec la victime, et de statuer provisoirement sur la garde des enfants. Le dépôt d'une plainte pénale n'est même plus obligatoire pour l'obtenir.

**2. Le Téléphone Grave Danger (TGD) et le Bracelet Anti-Rapprochement (BAR)**
Sur décision du procureur ou du juge, la victime peut se voir attribuer un TGD permettant de joindre immédiatement les forces de l'ordre. Le BAR, quant à lui, alerte les autorités si l'auteur s'approche de la victime au-delà d'un périmètre défini.

## Les conséquences sur les enfants

La loi considère désormais que l'enfant qui assiste à des violences conjugales n'est pas seulement un témoin, mais une **victime à part entière**. Les juridictions pénales sont particulièrement sévères lorsque les faits se déroulent en présence de mineurs, ce qui constitue une circonstance aggravante supplémentaire. En outre, le juge pénal ou le JAF peut suspendre ou retirer l'autorité parentale de l'auteur des violences.

## La défense des mis en cause

Si vous êtes accusé de violences conjugales, l'assistance d'un avocat est tout aussi primordiale. Les enquêtes sont souvent menées à charge et de manière expéditive en raison de la politique pénale de "tolérance zéro". Une défense efficace repose sur l'analyse minutieuse du dossier, la contestation des éléments matériels, l'étude des expertises médicales et psychologiques, et la contextualisation de la relation de couple. Les fausses accusations, notamment dans un contexte de séparation conflictuelle et de garde d'enfants, sont une réalité que nos avocates savent mettre en lumière devant les tribunaux.

## Le rôle crucial de l'avocat

Dès le dépôt de la plainte ou le placement en garde à vue, le Cabinet 222 se mobilise. Pour les victimes, nous constituons un dossier probatoire solide (certificats médicaux, témoignages, expertises) et vous assistons lors de l'audience pour obtenir une indemnisation intégrale de vos préjudices (physiques, moraux, économiques). Pour les mis en cause, nous garantissons le respect strict de la présomption d'innocence et de l'égalité des armes.

Contactez immédiatement notre cabinet au **06.66.47.07.43** (ligne d'urgence 24h/24) pour une intervention rapide à Toulouse et dans toute l'Occitanie.
    `,
    imageUrl: "/images/blog_violences.jpg",
  },
  {
    id: "4",
    slug: "reforme-homicide-routier-2024",
    title: "La réforme de l'homicide routier : ce qui change pour les conducteurs",
    excerpt:
      "Depuis la loi du 12 mai 2024, le terme 'homicide routier' remplace officiellement 'homicide involontaire' lorsque des circonstances aggravantes sont présentes. Quelles conséquences concrètes pour les automobilistes ?",
    date: "2026-05-20",
    category: "Pénal Routier",
    readingTime: 7,
    content: `
La loi du 12 mai 2024 a introduit une modification fondamentale dans le droit pénal routier français en créant officiellement l'infraction d'**homicide routier**. Cette réforme, réclamée de longue date par les associations de victimes et la société civile, modifie l'appellation juridique et aggrave considérablement les peines dans les situations impliquant des circonstances aggravantes. L'objectif du législateur est clair : refuser le terme "involontaire" lorsque le conducteur a délibérément violé une règle de sécurité manifeste.

## Homicide involontaire vs. Homicide routier : ce qui change

Avant cette loi, tous les accidents mortels causés par un conducteur, même sous l'empire d'un état alcoolique massif ou de stupéfiants, étaient qualifiés d'"homicide involontaire par conducteur". La loi de 2024 scinde désormais cette qualification en deux :

**1. L'homicide involontaire classique**
Pour les accidents mortels survenus par simple maladresse, imprudence, inattention ou négligence (sans circonstance aggravante). La qualification reste régie par l'article 221-6 du Code pénal. Les peines encourues demeurent fixées à **5 ans d'emprisonnement et 75 000 € d'amende**.

**2. L'homicide routier (nouvel article 221-6-1 du Code pénal)**
Lorsqu'au moins une circonstance aggravante est présente au moment de l'accident, la nouvelle appellation s'applique de plein droit. Les circonstances aggravantes retenues par le législateur sont les suivantes :
- Conduite sous l'empire d'un état alcoolique (taux délictuel supérieur à 0,8 g/l de sang) ou en état d'ivresse manifeste.
- Conduite après usage de substances ou plantes classées comme stupéfiants.
- Grand excès de vitesse (dépassement de 50 km/h ou plus de la vitesse maximale autorisée).
- Violation manifestement délibérée d'une obligation particulière de sécurité ou de prudence (ex: griller un feu rouge de façon caractérisée).
- Utilisation d'un téléphone tenu en main, manipulation d'un écran ou port d'oreillettes.
- Refus d'obtempérer à une sommation de s'arrêter.
- Défaut de permis de conduire valide (suspension, annulation, défaut d'obtention).
- Délit de fuite (tenter d'échapper à sa responsabilité pénale ou civile).

## L'alourdissement significatif des peines encourues

Le tableau des peines a été considérablement revu à la hausse, envoyant un signal de sévérité fort aux conducteurs et aux magistrats :

- **Homicide routier avec une seule circonstance aggravante** : la peine maximale passe à **7 ans d'emprisonnement et 100 000 € d'amende**.
- **Homicide routier avec au moins deux circonstances aggravantes** (par exemple : alcool + stupéfiants, ou stupéfiants + grand excès de vitesse) : la peine maximale est portée à **10 ans d'emprisonnement et 150 000 € d'amende**.
- En cas de récidive légale, le plafond peut atteindre **14 ans** voire **20 ans** de réclusion si l'homicide est accompagné de certaines circonstances spécifiques.

À ces peines principales s'ajoutent obligatoirement des peines complémentaires dramatiques : l'annulation de plein droit du permis de conduire (avec interdiction de le repasser pendant une durée pouvant aller jusqu'à 10 ans, voire à titre définitif), la confiscation du véhicule, et l'obligation d'accomplir un stage de sensibilisation à la sécurité routière.

## Les implications pour l'indemnisation des victimes

La reconnaissance de l'homicide routier facilite également le parcours indemnitaire des familles de victimes. Le Fonds de Garantie des Assurances Obligatoires de dommages (FGAO) et les assureurs sont tenus d'indemniser les préjudices moraux, économiques, et d'affection selon des barèmes qui tendent à être revalorisés suite à l'impact symbolique de la nouvelle qualification pénale. L'avocat joue ici un rôle essentiel en se constituant partie civile pour la famille endeuillée, afin d'évaluer chiffrer l'intégralité des préjudices.

## La stratégie de défense du conducteur mis en cause

Faire face à une accusation d'homicide routier est une épreuve d'une violence absolue. Le conducteur fait face à la justice, à la pression médiatique et au drame humain. La défense ne s'improvise pas et repose sur une technicité procédurale extrême :
- **Contestation de la matérialité des circonstances aggravantes** : les procédures de dépistage (éthylomètre, prélèvements sanguins, analyses toxicologiques) obéissent à des règles drastiques. Le moindre vice de forme peut faire tomber l'aggravation.
- **Expertise accidentologique** : il est crucial de contester, si nécessaire, les conclusions des forces de l'ordre sur la dynamique de l'accident et le lien de causalité (par exemple, démontrer la faute inexcusable exclusive de la victime).
- **Personnalité de l'auteur** : le travail de l'avocat est de présenter au tribunal le contexte de vie, les regrets, l'état psychologique et les garanties d'insertion du conducteur pour éviter un mandat de dépôt (incarcération immédiate) à l'audience.

Le Cabinet 222 maîtrise parfaitement ces procédures complexes. Nous vous assistons dès le placement en garde à vue, lors de l'instruction préparatoire, et devant le tribunal correctionnel. Contactez-nous en urgence absolue au **06.66.47.07.43**.
    `,
    imageUrl: "/images/courthouse.jpg",
  },
  {
    id: "5",
    slug: "mineur-garde-a-vue-droits-parents",
    title: "Mon enfant est en garde à vue : droits des mineurs et des parents",
    excerpt:
      "La garde à vue d'un mineur obéit à des règles strictes et protectrices. Parents, voici ce que vous devez savoir et faire dès que vous apprenez que votre enfant est retenu par la police.",
    date: "2026-04-14",
    category: "Droit Pénal des Mineurs",
    readingTime: 6,
    content: `
Apprendre que son enfant mineur est retenu au commissariat ou à la gendarmerie est un véritable traumatisme pour tout parent. La garde à vue des mineurs est une mesure privative de liberté extrêmement réglementée et dérogatoire au droit commun. Le législateur a souhaité maintenir un équilibre complexe entre les nécessités de l'enquête pénale et le besoin absolu de protéger la jeunesse, un principe consacré par le récent **Code de la justice pénale des mineurs (CJPM)**, entré en vigueur en septembre 2021.

## La durée de la garde à vue selon l'âge du mineur

Le droit pénal français gradue la sévérité et la nature de la contrainte policière en fonction de l'âge du mineur impliqué :

- **Pour les mineurs de moins de 13 ans** : La garde à vue est strictement interdite. Si le mineur est soupçonné d'un crime ou d'un délit puni d'au moins 5 ans d'emprisonnement, il peut seulement faire l'objet d'une "retenue", dont la durée maximale est de **12 heures** (renouvelable une seule fois sous de strictes conditions).
- **Pour les mineurs de 13 à 16 ans** : La garde à vue est possible uniquement pour les infractions punies d'au moins 5 ans d'emprisonnement. La durée initiale est de **24 heures**, prolongeable jusqu'à 48 heures sur décision d'un magistrat, exclusivement en matière de criminalité organisée ou de trafic de stupéfiants.
- **Pour les mineurs de 16 à 18 ans** : Le régime se rapproche de celui des majeurs. La garde à vue de **24 heures** peut être prolongée de 24 heures supplémentaires pour les infractions punies d'au moins 1 an de prison. En cas de terrorisme ou grande criminalité, la durée peut atteindre 96 heures.

## Les garanties fondamentales et les droits des parents

Le CJPM impose aux forces de l'ordre un formalisme protecteur. Tout manquement à ces règles peut entraîner la nullité intégrale de la procédure (et donc l'effondrement de l'accusation).

**L'information immédiate des parents**
Dès le placement en garde à vue, les officiers de police judiciaire (OPJ) ont l'obligation absolue de prévenir les représentants légaux (parents ou tuteurs). Cette information ne peut être différée que sur décision motivée du procureur de la République (généralement pour préserver des preuves ou empêcher une dissimulation, mais cela reste exceptionnel).

**Le droit obligatoire à l'avocat**
Contrairement aux majeurs qui peuvent renoncer à l'assistance d'un avocat (bien que ce soit fortement déconseillé), **la présence de l'avocat est obligatoire pour le mineur**. L'enfant doit être assisté dès la première heure, lors des interrogatoires et des confrontations. Si les parents n'en désignent pas un, un avocat sera commis d'office. L'avocat est le seul bouclier juridique de l'enfant face à la pression policière.

**L'enregistrement audiovisuel obligatoire**
Pour garantir la sincérité des déclarations et prévenir toute pression illégitime, l'intégralité des auditions des mineurs placés en garde à vue doit obligatoirement faire l'objet d'un enregistrement sonore et visuel. Cet enregistrement pourra être visionné par l'avocat en cas de contestation sur les conditions de l'interrogatoire.

**Le rôle primordial de la PJJ et l'examen médical**
Un examen médical est systématiquement proposé. De plus, les services de la Protection Judiciaire de la Jeunesse (PJJ) sont rapidement informés afin d'évaluer le profil socio-éducatif du mineur et de proposer au magistrat des mesures adaptées (mesures éducatives plutôt que répressives).

## L'issue de la garde à vue : que risque l'enfant ?

À l'issue de la mesure, le procureur de la République décide des suites à donner :
- **Le classement sans suite** : aucune charge n'est retenue.
- **Les mesures alternatives aux poursuites** : rappel à la loi, réparation pénale, stage de citoyenneté.
- **La mise en examen devant le Juge des enfants** : ouverture d'une instruction (procédure en deux temps prévue par le CJPM : audience de culpabilité, puis audience de sanction des mois plus tard, permettant une mise à l'épreuve éducative).
- **Le placement en détention provisoire ou en Centre Éducatif Fermé (CEF)** : mesure ultime et exceptionnelle pour les faits les plus graves.

## Comment réagir en tant que parents ?

La panique est mauvaise conseillère. Votre première urgence absolue est de mandater un cabinet spécialisé en droit pénal des mineurs. N'attendez pas de vous rendre au commissariat, votre présence ne fera pas sortir votre enfant plus vite. 

**Appelez immédiatement la permanence du Cabinet 222 au 06.66.47.07.43**. Nous nous déplaçons immédiatement au commissariat pour nous entretenir avec votre enfant sous le sceau du secret professionnel, préparer sa stratégie de défense, assister aux auditions, vérifier la régularité de la procédure et rassurer la famille. La défense d'un mineur requiert une expertise technique redoutable et une psychologie adaptée que nos avocates déploient avec humanité et pugnacité.
    `,
    imageUrl: "/images/law_books.jpg",
  },
  {
    id: "6",
    slug: "abus-biens-sociaux-risques-dirigeants",
    title: "Abus de biens sociaux : ce que risquent vraiment les dirigeants",
    excerpt:
      "L'abus de biens sociaux est l'une des infractions pénales les plus fréquentes en droit des affaires. Tout dirigeant d'entreprise peut y être exposé, parfois sans le savoir. Explications et conseils de prévention.",
    date: "2026-03-08",
    category: "Pénal des Affaires",
    readingTime: 9,
    content: `
L'abus de biens sociaux (ABS) est une infraction pénale majeure du droit des affaires. Souvent qualifié de "risque pénal numéro un du dirigeant", il menace tout chef d'entreprise (gérant de SARL, PDG, président de SAS ou de SA). La frontière entre une simple erreur de gestion et un délit pénal est parfois infime. Le Cabinet 222 décrypte pour vous cette infraction complexe aux conséquences potentiellement dévastatrices.

## Les éléments constitutifs de l'Abus de Biens Sociaux

L'ABS est défini par les articles L241-3 (pour les SARL) et L242-6 (pour les sociétés par actions) du Code de commerce. Pour que l'infraction soit caractérisée, quatre éléments cumulatifs doivent être prouvés par l'accusation :

**1. Un acte d'usage des biens ou du crédit de la société**
Cela inclut tout décaissement, mise à disposition de moyens matériels, cautionnement ou garantie donnés par la société. L'ABS concerne uniquement les sociétés commerciales (pour les associations ou sociétés civiles, on parlera d'abus de confiance).

**2. Un usage contraire à l'intérêt social**
L'acte doit faire courir à la société un risque financier qu'elle ne devrait pas supporter, appauvrir son patrimoine, ou compromettre son objet social. Une dépense inutile ou disproportionnée par rapport aux capacités de la structure constitue un acte contraire à ses intérêts.

**3. Un but personnel**
Le dirigeant doit avoir agi dans un intérêt personnel (matériel, financier, moral ou professionnel). Il peut s'agir de favoriser une autre entreprise dans laquelle il détient des intérêts directs ou indirects (la jurisprudence est très stricte sur ce point).

**4. La mauvaise foi (l'intention coupable)**
Le dirigeant doit avoir eu conscience du caractère abusif de l'acte et de son aspect contraire aux intérêts de l'entreprise. Une simple imprudence ou erreur de gestion sans intention frauduleuse ne constitue pas un ABS.

## Cas pratiques et situations à haut risque

La jurisprudence regorge d'exemples très variés d'ABS. Les dirigeants sont souvent poursuivis pour des pratiques qu'ils pensaient tolérées :

- **Rémunérations excessives** : S'allouer une rémunération ou des primes manifestement disproportionnées par rapport à la santé financière de l'entreprise ou au travail effectivement fourni.
- **Frais professionnels abusifs** : Imputer à la société des voyages d'agrément, des repas purement personnels, ou l'utilisation d'un véhicule de fonction pour les départs en vacances de la famille.
- **Les comptes courants d'associés débiteurs** : Il est formellement interdit (sous peine de sanctions pénales) pour un gérant ou un administrateur personne physique de contracter un emprunt auprès de sa société ou de se faire consentir un découvert.
- **Les conventions de trésorerie intragroupe ("management fees")** : Facturer des prestations fictives ou surévaluées entre une société mère et sa filiale pour faire remonter de la trésorerie.
- **Le paiement d'amendes personnelles ou d'avocats** : Faire régler par la société des amendes routières du gérant ou les honoraires de son avocat personnel pour un divorce.

## Peines encourues et risques annexes

L'abus de biens sociaux est sanctionné par des peines très lourdes : **5 ans d'emprisonnement et 375 000 € d'amende**.

Toutefois, le danger réside également dans les peines complémentaires et collatérales :
- **Interdiction de gérer** ou d'administrer une entreprise (pouvant aller jusqu'à 15 ans).
- **Faillite personnelle**.
- **Solidarité fiscale** : obligation de rembourser sur ses deniers personnels le passif de la société (action en comblement de passif).
- **Le blanchiment d'ABS** : si les fonds détournés sont réinvestis (achat immobilier personnel par exemple), le dirigeant encourt des poursuites pour blanchiment.

## La question cruciale de la prescription

La prescription de l'ABS est de **6 ans**. Cependant, la Cour de cassation applique une "prescription occulte" : le délai ne commence à courir qu'à partir du jour où l'infraction est "apparue et a pu être constatée dans des conditions permettant l'exercice de l'action publique" (généralement la date de présentation des comptes annuels ou le dépôt du rapport du commissaire aux comptes). Cela permet de poursuivre des faits commis parfois 10 ans plus tôt !

## Comment le Cabinet 222 organise votre défense

Notre expertise en droit pénal des affaires nous permet de déployer des stratégies défensives techniques :
- **L'exception de groupe de sociétés (Jurisprudence Rozenblum)** : Démontrer que le flux financier, bien que préjudiciable à une filiale, répondait à un intérêt stratégique du groupe, moyennant une contrepartie et sans excéder les capacités de la filiale.
- **La démonstration de la bonne foi** : Prouver l'absence d'intention frauduleuse par des audits comptables, des correspondances ou des validations préalables par des conseils extérieurs.
- **La contestation du préjudice** : Analyser les flux financiers avec des experts-comptables partenaires pour prouver l'absence d'appauvrissement réel.

Une enquête pour ABS (souvent déclenchée par un signalement Tracfin, un contrôle URSSAF ou une plainte d'associé minoritaire) nécessite une réponse immédiate. Contactez nos avocates pour un audit pénal préventif ou une défense acharnée devant les tribunaux judiciaires.
    `,
    imageUrl: "/images/luxury_desk.jpg",
  },
  {
    id: "1",
    slug: "duree-garde-a-vue",
    imageUrl: "/images/blog_garde_a_vue.jpg",
    title: "La durée de la garde à vue : ce que vous devez savoir",
    excerpt:
      "Placé en garde à vue, vous disposez de droits précis. Durée légale, prolongation, rôle de l'avocat : le cabinet fait le point sur cette mesure privative de liberté qui débute la procédure pénale.",
    date: "2026-08-15",
    category: "Urgences Pénales",
    readingTime: 7,
    content: `
La garde à vue est la mesure de contrainte la plus emblématique et la plus sensible de la procédure pénale. Elle permet à un Officier de Police Judiciaire (OPJ) de maintenir à disposition une personne contre laquelle il existe une ou plusieurs raisons plausibles de soupçonner qu'elle a commis (ou tenté de commettre) un crime ou un délit puni d'une peine d'emprisonnement. C'est durant ces heures cruciales, dans le huis clos d'un commissariat, que se scelle souvent l'avenir d'un dossier pénal.

## Durée légale et prolongations : le cadre strict de la loi

La durée de la garde à vue n'est pas arbitraire. Elle est strictement proportionnée à la nature de l'infraction poursuivie :

**1. Le régime de droit commun**
Pour la majorité des délits (vols simples, violences, escroqueries, délits routiers), la durée initiale est de **24 heures**. Elle peut être prolongée pour un nouveau délai de 24 heures (soit **48 heures au total**) sur autorisation expresse et motivée du procureur de la République. La prolongation nécessite en principe que la personne soit présentée au magistrat (physiquement ou par visioconférence).

**2. Les régimes dérogatoires (criminalité organisée et trafic de stupéfiants)**
Lorsque l'enquête porte sur des infractions relevant de la criminalité organisée (trafic de drogue en bande organisée, proxénétisme aggravé, vols en bande organisée, etc.), la garde à vue peut être prolongée au-delà de 48h. Deux prolongations supplémentaires de 24h peuvent être ordonnées par le Juge des Libertés et de la Détention (JLD) ou le Juge d'instruction, portant la durée totale à **96 heures (4 jours)**.

**3. Le régime exceptionnel (Terrorisme)**
En matière d'actes de terrorisme, si les nécessités de l'enquête ou le risque imminent d'une action terroriste l'exigent, une prolongation exceptionnelle d'encore 48h peut être décidée, portant la durée absolue à **144 heures (6 jours)**.

## Droits du gardé à vue : ce que l'OPJ doit vous notifier

Dès le début de la mesure, un ensemble de droits inaliénables doit vous être notifié, dans une langue que vous comprenez. Le non-respect de ces notifications peut entraîner l'annulation de toute la procédure.

- **Le droit de faire prévenir un proche**, son employeur, ou les autorités consulaires (pour les étrangers).
- **Le droit d'être examiné par un médecin**, renouvelable en cas de prolongation. Cet examen est capital si vous présentez des pathologies ou si vous avez subi des violences.
- **Le droit d'être assisté par un interprète**.
- **Le droit fondamental de se taire** lors des auditions, de répondre aux questions, ou de faire des déclarations spontanées.
- **Le droit absolu d'être assisté par un avocat** (choisi ou commis d'office) dès le début de la mesure.

## Le rôle crucial de l'avocat : votre seul rempart

La garde à vue est conçue pour déstabiliser et obtenir des aveux. Face aux méthodes d'interrogatoire des enquêteurs, l'avocat est votre bouclier. La loi lui confère des prérogatives très claires :

- **L'entretien confidentiel de 30 minutes** : Avant toute audition, l'avocat s'entretient seul à seul avec vous. C'est le moment de vérifier votre état physique et psychologique, de comprendre ce qui vous est reproché (bien que l'avocat n'ait pas accès à l'entier dossier, il a accès aux procès-verbaux de notification des droits et de placement), et d'élaborer la stratégie (se taire, répondre, ou faire de simples déclarations).
- **La présence aux auditions et confrontations** : Depuis la réforme historique de 2011, l'avocat est présent physiquement pendant les interrogatoires. Il s'assure qu'aucune pression n'est exercée, que vos propos sont fidèlement retranscrits sur le procès-verbal, et peut formuler des observations écrites à la fin de chaque audition, qui seront jointes au dossier pénal.
- **Les contrôles de nullité** : Fouilles à corps irrégulières, dépassements de délais, absence de notification : l'avocat relève tous les vices de procédure qui pourraient faire annuler la garde à vue devant le tribunal.

## L'issue : la décision du Procureur

À l'issue du délai, la garde à vue doit être levée. Le Procureur décide alors des suites : 
1. Remise en liberté sans poursuite (classement sans suite).
2. Remise en liberté avec convocation ultérieure (COPJ ou CRPC).
3. Présentation immédiate au parquet en vue d'une comparution immédiate ou d'une mise en examen devant un juge d'instruction. Dans ces hypothèses, vous partirez au tribunal sous escorte (le "défèrement").

La présence du Cabinet 222 dès les premières heures de votre garde à vue change radicalement la donne de votre dossier pénal. Disponibles **24h/24 au 06.66.47.07.43**, nos avocates interviennent en urgence dans toute la région toulousaine.
    `,

  },
  {
    id: "2",
    slug: "desertion-militaire",
    imageUrl: "/images/justice_scales.jpg",
    title: "La désertion militaire : infractions, procédures et défense",
    excerpt:
      "La désertion est une infraction militaire aux conséquences graves. Entre droit pénal militaire et droit commun, les règles sont complexes. Explications sur les peines encourues et les stratégies de défense possibles.",
    date: "2026-07-22",
    category: "Droit Pénal des Affaires",
    readingTime: 9,
    content: `
Le droit pénal militaire constitue une branche extrêmement spécifique du droit, à la croisée du droit disciplinaire des armées et du droit pénal commun. Parmi les infractions militaires, la **désertion** est de loin la plus fréquente et la plus lourdement sanctionnée. Contrairement aux idées reçues, la désertion ne concerne pas seulement la fuite au combat : de simples absences prolongées en temps de paix peuvent entraîner des condamnations pénales sévères, des jours de prison, et une exclusion définitive de l'institution militaire.

## Qu'est-ce que la désertion en droit pénal militaire ?

Le Code de Justice Militaire (CJM) encadre précisément les différentes formes de désertion. Il convient de distinguer fondamentalement la désertion de la simple absence irrégulière (qui relève de la faute disciplinaire).

**1. La désertion à l'intérieur en temps de paix (Art. L321-2 CJM)**
Est déclaré déserteur à l'intérieur (sur le territoire national) tout militaire qui :
- S'absente sans autorisation de son corps ou détachement pendant plus de **6 jours consécutifs** (le "délai de grâce" disciplinaire).
- Étant en permission, ne rejoint pas son unité à l'issue de celle-ci, passé un délai de 6 jours.
- Se trouve absent au moment d'un départ pour une mission opérationnelle ou une manœuvre, et ne rejoint pas l'unité (le délai de 6 jours ne s'applique alors pas).

**2. La désertion à l'étranger ou en présence de l'ennemi (Art. L321-3 à L321-11 CJM)**
Franchir les frontières du territoire français en état de désertion aggrave considérablement l'infraction. Le délai de grâce est réduit à 3 jours. Si la désertion a lieu "en présence de l'ennemi" (en zone de combat ou OPEX), la qualification criminelle peut être retenue.

**3. L'insoumission**
À ne pas confondre avec la désertion : l'insoumission concerne le civil (appelé ou réserviste convoqué) qui refuse de rejoindre son affectation militaire initiale. La désertion s'applique exclusivement à celui qui possède déjà le statut militaire en activité.

## Les sanctions encourues : de la correctionnelle aux Assises

Les peines prévues par le Code de Justice Militaire sont particulièrement dissuasives :

- **Désertion à l'intérieur en temps de paix** : Jusqu'à **3 ans d'emprisonnement**.
- **Désertion avec complot** (action concertée d'au moins deux militaires) : Jusqu'à **5 ans d'emprisonnement**.
- **Désertion à l'étranger** : Jusqu'à **10 ans d'emprisonnement**.
- **Désertion à bande armée ou avec emport de matériel** : Les peines sont portées à **10 ou 15 ans**.
- **Désertion à l'ennemi** : Jusqu'à **20 ans de réclusion criminelle** (et la réclusion criminelle à perpétuité si le militaire est officier).

À ces sanctions pénales s'ajoutent les sanctions disciplinaires inévitables : la suspension de la solde, la résiliation du contrat d'engagement, la rétrogradation, et la perte de la pension de retraite pour les militaires de carrière.

## La procédure : des juridictions spécialisées

Depuis la suppression des Tribunaux aux Armées Permanents (TAP) en 2011, les militaires sont jugés par des Chambres Spécialisées en matière militaire au sein des juridictions de droit commun. À Toulouse, le Tribunal Judiciaire dispose d'une chambre habilitée à juger ces contentieux avec des magistrats formés aux spécificités de la condition militaire. Les affaires liées aux OPEX (opérations extérieures) relèvent de la compétence exclusive du Tribunal Judiciaire de Paris.

Il est important de noter que le Parquet peut délivrer un **Mandat de Recherche** pour un militaire déserteur, entraînant son inscription au Fichier des Personnes Recherchées (FPR). Lors d'un simple contrôle d'identité ou routier, le militaire peut ainsi être placé en garde à vue et déféré.

## La stratégie de défense du Cabinet 222

Défendre un militaire pour désertion nécessite une approche très nuancée. Le rôle de l'avocat est de replacer l'infraction dans son contexte humain et hiérarchique.

- **La contestation de l'élément intentionnel** : La désertion exige une volonté claire de se soustraire aux obligations militaires. Un état de détresse psychologique aigu (burn-out, syndrome de stress post-traumatique lié à une OPEX), un harcèlement hiérarchique avéré, ou une urgence familiale gravissime (enfant malade, deuil) peuvent priver l'infraction de son élément intentionnel.
- **Les circonstances atténuantes et la régularisation** : La présentation volontaire du déserteur à la gendarmerie ou à son corps d'affectation constitue le meilleur levier d'atténuation. L'avocat accompagne son client dans cette démarche de régularisation pour éviter le placement en détention provisoire.
- **La procédure disciplinaire parallèle** : Nous accompagnons également le militaire dans la procédure de résiliation de contrat devant le conseil d'enquête, afin d'optimiser les conditions de son retour à la vie civile.

Si vous êtes en situation d'absence irrégulière, ou visé par une procédure pour désertion, il est urgent de reprendre la main sur la situation. Contactez le Cabinet 222 pour un accompagnement juridique strict, confidentiel, et adapté aux valeurs des forces armées.
    `,

  },
  {
    id: "3",
    slug: "amende-forfaitaire-delictuelle",
    imageUrl: "/images/gavel.jpg",
    title: "L'amende forfaitaire délictuelle : une révolution silencieuse",
    excerpt:
      "L'amende forfaitaire délictuelle (AFD) transforme profondément le traitement de certains délits. Usage de stupéfiants, occupation illicite de terrain : quelles infractions sont concernées et comment contester ?",
    date: "2026-06-10",
    category: "Procédure Pénale",
    readingTime: 6,
    content: `
Instaurée initialement pour désengorger les tribunaux et accélérer la réponse pénale, l'**Amende Forfaitaire Délictuelle (AFD)** bouleverse totalement la procédure pénale française. Progressivement étendue à de nombreuses infractions depuis la loi de mars 2019 de programmation et de réforme de la justice, l'AFD permet aux policiers et gendarmes de constater et de sanctionner immédiatement un délit par une amende pécuniaire forfaitaire, contournant ainsi l'intervention d'un magistrat, le principe du contradictoire et l'audience au tribunal. Une "justice de rue" rapide, mais qui recèle des pièges juridiques redoutables.

## Les infractions relevant de l'AFD : un champ en pleine expansion

Si l'AFD s'appliquait au départ aux simples infractions routières, le législateur l'applique désormais à des délits de droit commun beaucoup plus lourds de conséquences :

**L'usage illicite de stupéfiants (Art. L3421-1 du Code de la santé publique)**
C'est le domaine d'application le plus massif de l'AFD. Fumer un joint de cannabis ou détenir une petite quantité de cocaïne dans la rue entraîne la remise immédiate d'une amende, évitant ainsi le passage par la case garde à vue. Le montant est fixé à **200 €** (minoré à 150 € en cas de paiement dans les 15 jours).

**Les délits d'occupation illicite**
L'installation en réunion sur un terrain appartenant à autrui (squats, gens du voyage, rave parties), prévue par l'article 322-4-1 du Code pénal, est désormais sanctionnée par une AFD de **500 €** (minorée à 400 €).

**L'introduction dans certains établissements (loi JO 2024)**
Vente à la sauvette, intrusion sur une aire de compétition sportive, port d'arme blanche de catégorie D : toutes ces infractions peuvent désormais être "soldées" sur le champ par les forces de l'ordre via l'amende forfaitaire délictuelle, avec des montants variant de 300 à 800 €.

## Le piège redoutable du Fichier TAJ (Traitement des Antécédents Judiciaires)

C'est l'argument numéro un des forces de l'ordre lors de la verbalisation : *"Payez l'amende, c'est comme une contravention, ça ne laisse pas de trace au casier judiciaire"*. **C'est une contre-vérité lourde de conséquences.**

Il est exact que le paiement de l'AFD éteint l'action publique et n'entraîne **aucune inscription au bulletin n°2 du Casier Judiciaire**. Cependant, l'infraction est immédiatement inscrite, de manière indélébile, au **Fichier TAJ** de la police et de la gendarmerie ! 

Le fichier TAJ est consulté systématiquement dans le cadre d'enquêtes administratives (criblages). Une simple AFD pour usage de stupéfiants peut ainsi vous priver de :
- Une habilitation Secret Défense.
- L'accès à la fonction publique ou à l'armée.
- L'obtention d'une carte professionnelle de sécurité privée (CNAPS).
- L'accès à des zones réservées (aéroports, centrales nucléaires).

## Faut-il payer ou contester ? La stratégie pénale

Le paiement de l'AFD vaut **reconnaissance irrévocable de culpabilité**. Une fois payée, aucun recours n'est plus possible.

Si vous souhaitez contester l'infraction, la procédure est encadrée par des délais stricts :
- Vous disposez de **45 jours** pour formuler une "requête en exonération".
- La contestation doit obligatoirement être assortie de la **consignation** préalable du montant de l'amende (sauf exceptions légales limitatives comme le vol d'identité).
- La requête est transmise à l'Officier du Ministère Public (OMP) puis au Procureur.

**Les risques de la contestation :**
En cas de contestation refusée, le parquet a l'opportunité des poursuites. Il peut décider de vous convoquer devant le tribunal correctionnel. Dès lors, si vous êtes jugé coupable, le juge ne sera plus lié par le plafond forfaitaire : l'amende pénale pourra être beaucoup plus élevée (jusqu'à 3750 € pour usage de stupéfiants), et l'inscription au casier judiciaire B2 deviendra une réalité.

**Les motifs de contestation gagnants :**
L'intervention d'un avocat est indispensable pour auditer la régularité du procès-verbal initial. Les causes d'annulation sont techniques : absence des mentions légales obligatoires, erreur d'identité, absence d'analyse toxicologique prouvant la nature du produit saisi (un "test salivaire" positif ne suffit pas toujours), violation des droits de la défense.

## Le Cabinet 222 : conseil stratégique et contentieux

L'amende forfaitaire délictuelle est une "loterie pénale" : payer sécurise l'absence de procès mais stigmatise votre profil policier ; contester ouvre le risque d'une condamnation plus lourde mais préserve votre innocence. Face à ce dilemme, le Cabinet 222 analyse votre dossier, évalue les failles procédurales, et décide avec vous de l'opportunité d'engager le fer devant les tribunaux.

Pour faire face à une AFD ou engager une procédure d'effacement du fichier TAJ, contactez-nous au **05.31.61.37.82**.
    `,

  },
];
