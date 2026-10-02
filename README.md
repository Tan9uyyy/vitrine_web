# Portfolio & CV — Tanguy Bouchut

> Portfolio web professionnel et interactif de **Tanguy Bouchut**, élève-ingénieur en Systèmes Embarqués & Objets Connectés (SEOC) à **Grenoble INP - PHELMA**.

---

## 🚀 Présentation

Ce site vitrine présente le profil, les compétences techniques, les projets d'ingénierie et le parcours académique de Tanguy Bouchut. Il est conçu pour offrir une navigation fluide, moderne et accessible aux recruteurs et tuteurs techniques.

### Fonctionnalités clés :
- **Bilingue (FR / EN)** : bascule instantanée français / anglais avec persistance de la préférence via `localStorage`.
- **Navigation active (ScrollSpy)** : suivi dynamique de la section visible à l'écran dans la barre latérale.
- **Accessibilité (a11y - WCAG)** : lien d'évitement (*Skip Link*), navigation clavier intégrale, états de focus visibles, balisage sémantique ARIA, respect de `prefers-reduced-motion`.
- **Aperçus multimédias interactifs** : prévisualisation en survol (desktop) et boutons dédiés (mobile) pour les démonstrations GIF des projets (RISC-V, simulateur de drones, OS en C, jeu C++).
- **Téléchargements directs** : accès en un clic au CV PDF et aux rapports techniques détaillés (Rapport de stage recherche, rapport de conception RISC-V).
- **SEO & Référencement** : balises Open Graph, cartes Twitter et métadonnées JSON-LD (`Person` schema).
- **Feuille de style d'impression** : adaptation automatique `@media print` pour une impression propre et soignée.

---

## 🛠️ Stack Technique

- **Framework frontend** : [React 19](https://react.dev/)
- **Bundler & Outillage** : [Vite 8](https://vite.dev/)
- **Qualité de code** : [ESLint 10](https://eslint.org/) (Flat Config + règles React Hooks)
- **Styles** : CSS3 moderne modulaire (CSS Variables, Flexbox, CSS Grid, Transitions douces)
- **Déploiement** : GitHub Pages (`gh-pages`)

---

## 📁 Architecture du Projet

```text
vitrine_web/
├── public/                     # Fichiers statiques servis à la racine
│   ├── favicon.svg             # Favicon SVG (processeur microcontrôleur)
│   ├── cv.pdf                  # CV au format PDF
│   └── assets/
│       ├── gif/                # GIFs animés de démonstration des projets
│       ├── photo/              # Photo de profil professionnelle
│       ├── rapportRiscv.pdf    # Rapport technique du cœur RISC-V en VHDL
│       ├── rapportStage.pdf    # Rapport de stage de recherche multi-drones
│       └── svg/                # Icônes vectorielles thématiques
├── src/
│   ├── context/
│   │   └── LanguageContext.jsx # Gestion d'état bilingue (fr/en) et stockage
│   ├── data/
│   │   ├── portfolioData.js    # Données structurées (Projets, Compétences, Formations, Contact)
│   │   └── translations.js     # Textes d'interface, boutons et labels d'accessibilité
│   ├── hooks/
│   │   └── useScrollSpy.js     # Détection de la section active lors du défilement
│   ├── components/
│   │   ├── SkipLink.jsx        # Lien d'évitement pour la navigation clavier
│   │   ├── Header.jsx          # Barre latérale fixe (desktop) / barre supérieure (mobile)
│   │   ├── About.jsx           # Section À propos & accroche PFE
│   │   ├── ExperienceProjects.jsx # Cartes de projets avec tags, prévisualisations et liens
│   │   ├── Skills.jsx          # Compétences organisées par catégories
│   │   ├── Education.jsx       # Parcours académique (PHELMA, CPGE)
│   │   ├── SummerJobs.jsx      # Expériences étudiantes et saisonnières
│   │   ├── Interests.jsx       # Sports et veille technologique
│   │   ├── Contact.jsx         # Coordonnées (téléphone, email, LinkedIn, GitHub)
│   │   ├── Footer.jsx          # Pied de page avec mentions et copyright
│   │   └── BackgroundIcons.jsx # Motifs vectoriels en arrière-plan optimisés
│   ├── App.jsx                 # Assemblage des composants
│   ├── index.css               # Système de design global & responsivité
│   └── main.jsx                # Point d'entrée de l'application
├── eslint.config.js            # Configuration du linter ESLint
├── index.html                  # Fichier HTML principal avec SEO & OpenGraph
├── package.json                # Dépendances et scripts npm
└── vite.config.js              # Configuration Vite (base GitHub Pages)
```

---

## ⚙️ Installation et Utilisation

### Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- npm (fourni avec Node.js)

### Installation des dépendances
```bash
npm install
```

### Lancement en mode développement (avec rechargement à chaud HMR)
```bash
npm run dev
```

### Vérification de la qualité du code (Linting)
```bash
npm run lint
```

### Compilation pour la production
```bash
npm run build
```
Les fichiers optimisés et minifiés sont générés dans le dossier `dist/`.

### Prévisualisation locale du build
```bash
npm run preview
```

### Déploiement sur GitHub Pages
```bash
npm run deploy
```

---

## 📝 Guide de Maintenance

### Ajouter ou modifier un projet
Toutes les données sont centralisées dans [`src/data/portfolioData.js`](file:///mnt/5A4CF8BE4CF895CB/bouchutt/PHELMA/PortFolio/vitrine_web/src/data/portfolioData.js). Il suffit d'ajouter une entrée dans le tableau `projects` des sections `fr` et `en` avec les champs appropriés (`title`, `tags`, `bullets`, `report`, `github`, `image`).

### Mettre à jour le CV
Déposez la nouvelle version de votre CV dans [`public/cv.pdf`](file:///mnt/5A4CF8BE4CF895CB/bouchutt/PHELMA/PortFolio/vitrine_web/public/cv.pdf). Les liens de téléchargement se mettront à jour automatiquement.
