# cv-hugo

CV moderne et lisible, construit avec Vite (vanilla JS) et CSS variables.

## Structure du projet

```
cv-hugo/
├── index.html
├── package.json
├── public/
│   └── profile.jpg        ← ajouter une photo ici (optionnel)
├── src/
│   ├── data/
│   │   └── cv.json        ← toutes les données du CV à modifier ici
│   ├── scripts/
│   │   ├── render.js      ← génération des sections HTML
│   │   └── main.js        ← point d'entrée
│   ├── styles/
│   │   ├── reset.css
│   │   ├── variables.css  ← couleurs, typo, espacements
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── sections.css
│   │   └── print.css
│   └── utils/
│       └── format.js
└── README.md
```

## Démarrage

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
npm run preview
```

## Personnaliser le CV

Toutes les données sont dans **`src/data/cv.json`** :
- `profile` — identité, titre, intro, contacts
- `experience` — expériences professionnelles
- `education` — formations
- `skills.technical` — compétences techniques par catégorie
- `skills.soft` — savoir-être
- `skills.languages` — langues

## Export PDF

Ouvrir dans le navigateur → `Fichier > Imprimer` → choisir `Enregistrer en PDF`.  
Le CSS print (`src/styles/print.css`) est optimisé format A4.
