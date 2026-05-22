import { Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";

// ─── Profile ──────────────────────────────────────────────────────────────────

export const profile = {
	firstName: "Hugo",
	lastName: "Lerondel",
	initials: "HL",
	title: "Développeur Web Full Stack",
	intro:
		"Je recherche un CDI en développement web Full Stack avec une forte appétence pour le front-end. Avec des compétences couvrant aussi bien le back-end que le DevOps, je m'épanouis avant tout dans la création d'interfaces modernes et performantes.",
	contacts: [
		{
			icon: Mail,
			label: "hugo.lerondel@orange.fr",
			href: "mailto:hugo.lerondel@orange.fr",
		},
		{ icon: Phone, label: "+33 6 40 60 06 30", href: "tel:+33640600630" },
		{ icon: MapPin, label: "Paris, France", href: null },
		// { icon: Globe, label: "alexandre-martin.dev", href: "#" },
		// { icon: Github, label: "github.com/alex-martin", href: "#" },
		{
			icon: Linkedin,
			label: "https://fr.linkedin.com/in/hugo-lerondel-895757158",
			href: "#",
		},
	],
};

// ─── Experiences ──────────────────────────────────────────────────────────────

export const experiences = [
	{
		id: "takima",
		company: "Takima",
		companyType: "ESN",
		contractType: "CDI",
		period: "Juil. 2021 — Présent",
		location: "Paris",
		missions: [
			{
				client: "Cartier",
				role: "Développeur Full-Stack",
				period: "Juin 2022 — Nov. 2025",
				stack: [
					"React",
					"TypeScript",
					"Vite",
					"React Query",
					"Tailwind CSS",
					"Ant Design",
					"Kotlin",
					"Spring Boot",
					"Hibernate",
					"Maven",
				],
				bullets: [
					"Développement d'une applications gestion des flux de pièces confiées entre atelier et édition de feuilles de suivi (Web)",
					"Conception d'une application mobile à destination des clients finaux pour la consultation de certificats digitaux de pièces de joaillerie",
					"Refonte d'une application de rangement et de répartition de composants pour les ateliers logistiques (Web et Mobile)",
					"Implémentation d'architectures microservices avec intégration d'API SAP",
				],
			},
			{
				client: "Oney",
				role: "Développeur Full-Stack",
				period: "Fev. — Présent",
				stack: [
					"React",
					"TypeScript",
					"Playwright",
					"Java",
					"Spring Boot",
					"Hibernate",
					"Gradle",
				],
				bullets: [
					"Refonte d'un workflow d'upload de documents d'identité pour les clients d'Oney",
					"Mise en place de tests automatisés end-to-end avec Playwright",
				],
			},
		],
	},
	{
		id: "capgemini",
		company: "Capgemini",
		contractType: "Stage Elève Ingénieur",
		role: "Stagiaire Développeur",
		period: "Sept. 2019 — Janv. 2020",
		location: "Issy-les-Moulineaux",
		stack: ["Python", "Keras", "Tensorflow"],
		bullets: [
			"Proof of Concept d'un tri automatique d'objet grâce à un bras robotique et une caméra",
			"Synchronisation du bras robotique avec la caméra, pour pouvoir attraper un objet détecté par celle-ci.",
			"Entraînement / ré-entraînement d'un modèle de machine learning pour reconnaître des objets sur une image.",
		],
	},
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education = [
	{
		degree: "Diplôme d'Ingénieur",
		school: "EPF École d'Ingénieur·e·s",
		field: "Majeure Ingénierie et Numérique",
		period: "2016 — 2021",
		note: null,
	},
	{
		degree: "Norges teknisk-naturvitenskapelige universitet (NTNU)",
		school: "NTNU — Trondheim, Norvège",
		field: "Cybersecurity",
		period: "Janv. — Juin 2021",
		note: null,
	},
	{
		degree: "Verified Certificate for Introduction to Web Accessibility",
		school: "edX",
		field: "Identifiant du diplôme : cabd750c8baa4657bd42ee4e947e4c9d",
		period: "2025",
		note: null,
	},
];

// ─── Competences ──────────────────────────────────────────────────────────────

export const competences = {
	techniques: {
		Front: [
			"React",
			"TypeScript",
			"Tanstack",
			"Vite",
			"Tailwind CSS",
			"Storybook",
		],
		Back: ["Java", "Spring", "Hibernate", "PostgreSQL"],
		DevOps: [
			"Git / Gitlab / GitHub",
			"Gitlab CI/CD",
			"GitHub Actions",
			"Docker",
			"ansible",
		],
	},
	nonTechniques: [
		"Communication",
		"Travail en équipe Agile (Scrum)",
		"Curiosité technique et veille active",
	],
	langues: [
		{ langue: "Français", niveau: "Natif", pct: 100 },
		{ langue: "Anglais", niveau: "B2 - TOEIC (885)", pct: 80 },
		{ langue: "Espagnol", niveau: "B2", pct: 60 },
	],
};
