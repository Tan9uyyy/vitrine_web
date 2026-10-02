export const PORTFOLIO_DATA = {
  fr: {
    about: {
      title: "À propos",
      p1: "Futur ingénieur diplômé de Grenoble INP - PHELMA (filière SEOC), spécialisé en systèmes embarqués, robotique et temps réel.",
      p2: "Je recherche activement mon Projet de Fin d’Études (PFE) de 6 mois dès le 1er février 2027, ciblé sur le bassin stéphanois et ses environs, avec la volonté de m’investir durablement au sein de vos équipes techniques."
    },

    experience: {
      title: "Expériences & Projets",
      projects: [
        {
          id: "research-internship",
          title: "Stagiaire de Recherche – Robotique Autonome & Systèmes Multi-Drones",
          subtitle: "Laboratoire de vision et systèmes numériques (LVSN) - Université Laval, Québec (Canada)",
          date: "Mai 2026 – Août 2026",
          tags: ["Python", "Buzz", "CBF-QP", "ROS", "Robotique d'essaim"],
          bullets: [
            "Simulateur multi-robots (Python, Buzz) : Modélisation des dynamiques de vol et de batterie, cartographie locale par grille d’occupation (OGM) et calcul temps réel de champs de distance signée (SDF).",
            "Sécurité physique (CBF-QP) : Conception d’un filtre réactif d’évitement d’obstacles par fonctions barrières de contrôle (Control Barrier Functions) résolu par optimisation quadratique.",
            "Planification spatio-temporelle & Énergie : Adaptation de l’algorithme GBPlanner sur graphes locaux (RRG) pour concilier exploration sous observabilité partielle et repli vers la station de recharge.",
            "Coordination d’essaim décentralisée : Implémentation d’une machine à états (FSM) en langage Buzz pour orchestrer la rotation de flotte et les passages de relais en vol (handover)."
          ],
          report: {
            url: "assets/rapportStage.pdf",
            label: "Consulter le rapport de stage (PDF)"
          },
          image: "assets/gif/stage2A.gif"
        },
        {
          id: "riscv-core",
          title: "Conception d’un cœur de processeur RISC-V en VHDL",
          type: "Projet académique",
          date: "Projet académique",
          tags: ["VHDL", "RISC-V (RV32I)", "Architecture pipelinée", "GHDL", "Dhrystone"],
          bullets: [
            "Conception matérielle (RV32I) : Développement VHDL des étages FETCH (PC, ROM), DECODE (décodage instructions/immédiats, banc de 32 registres), EXECUTE (ALU 32 bits, Store Unit) et MEMORY (RAM, Load Unit).",
            "Architecture pipelinée 5 étages & Forwarding : Implémentation de la Forward Unit résolvant les aléas de données (hazards), atteignant un gain de performance mesuré de +382% par rapport au cœur séquentiel.",
            "Vérification & Benchmarking (GHDL, GCC) : Rédaction de testbenches automatisés, exécution bare-metal de programmes C via liaison UART et validation sur le benchmark standard Dhrystone 2.1."
          ],
          report: {
            url: "assets/rapportRiscv.pdf",
            label: "Consulter le rapport technique (PDF)"
          },
          github: {
            url: "https://github.com/Tan9uyyy/RISC-V-Core",
            label: "Voir sur GitHub"
          },
          image: "assets/gif/riscv.gif"
        },
        {
          id: "operating-system",
          title: "Création d’un système d’exploitation en C",
          type: "Projet académique",
          date: "Projet académique",
          tags: ["C", "Systèmes d'exploitation", "Temps réel", "Gestion mémoire", "Multitâche"],
          bullets: [
            "Développement de l’architecture de base : système multitâche, gestion des interruptions, timer et console."
          ],
          image: "assets/gif/os_animation.gif"
        },
        {
          id: "moba-prototype",
          title: "Prototype de jeu multijoueur (MOBA) en C++",
          type: "Projet personnel",
          date: "Projet personnel",
          tags: ["C++", "SFML 3", "CMake", "Réseau", "Architecture logicielle"],
          bullets: [
            "Expérimentation architecturale autour d’un concept de MOBA.",
            "Intégration et migration vers la bibliothèque SFML 3 pour le rendu et la gestion des événements.",
            "Structuration de l’environnement de build avec CMake et maquettage des problématiques de synchronisation réseau."
          ],
          github: {
            url: "https://github.com/Tan9uyyy/MiniLeagueOfLegends",
            label: "Voir sur GitHub"
          },
          image: "assets/gif/lol.gif"
        },
        {
          id: "java-compiler",
          title: "Compilateur Java",
          type: "Projet académique",
          date: "Projet académique",
          tags: ["Java", "Compilation", "Analyse lexicale / syntaxique", "Optimisation"],
          bullets: [
            "Implémentation des étapes de compilation : Lexer, parser, analyse contextuelle, génération de code et optimisation."
          ]
        }
      ]
    },

    skills: {
      title: "Compétences",
      categories: [
        {
          name: "Programmation",
          skills: ["C", "C++", "Python", "Java", "SQL (PostgreSQL)", "Buzz (robotique d'essaim)"]
        },
        {
          name: "Systèmes embarqués / bas-niveau",
          skills: ["Temps réel", "Multithreading", "Microcontrôleurs"]
        },
        {
          name: "Conception numérique / FPGA",
          skills: ["VHDL", "Verilog", "ModelSim", "Vivado", "GHDL"]
        },
        {
          name: "Électronique & CAO",
          skills: ["KiCad"]
        },
        {
          name: "Outils & Environnements",
          skills: ["Linux (CLI)", "Git / GitHub", "GDB", "CMake", "Make", "VSCode"]
        },
        {
          name: "Méthodologies",
          skills: ["Tests unitaires", "Documentation technique", "Optimisation de performance", "Méthode Agile: Scrum"]
        },
        {
          name: "Langues",
          skills: ["Français (Langue maternelle)", "Anglais (C1 - Courant)"]
        }
      ]
    },

    education: {
      title: "Parcours (Formation)",
      items: [
        {
          school: "Grenoble INP - PHELMA",
          date: "2024 – 2027",
          degree: "Diplôme d'ingénieur",
          desc: "Diplôme d'ingénieur - Systèmes Embarqués et Objets Connectés (SEOC). Conception et vérification de SoC (multi-cœurs, NoC), sécurité matérielle, contrôle-commande temps réel."
        },
        {
          school: "CPGE MP2I / MPI — Lycée Claude Fauriel (Saint-Étienne)",
          date: "2022 – 2024",
          degree: "Classes Préparatoires aux Grandes Écoles",
          desc: "Spécialisation en Mathématiques, Physique et Informatique."
        }
      ]
    },

    summerJobs: {
      title: "Jobs Saisonniers & Étudiants",
      jobs: [
        {
          company: "Divers emplois saisonniers & étudiants",
          subtitle: "Intermarché, RGIS, EHPAD, Agriculture",
          date: "2019 – 2025",
          resp: "Grande distribution, agriculture, restauration.",
          skills: "Développement de l'autonomie, du sens du service client, de la ponctualité et du travail en équipe."
        }
      ]
    },

    interests: {
      title: "Centres d'intérêt",
      items: [
        {
          title: "Sport",
          desc: "Basketball universitaire, musculation."
        },
        {
          title: "Veille Technologique",
          desc: "Intelligence Artificielle (IA), architectures matérielles, développement bas-niveau."
        }
      ]
    },

    contact: {
      title: "Contact",
      phone: "Téléphone",
      desc: "N'hésitez pas à me contacter pour toute opportunité, ou simplement pour échanger !",
      phoneVal: "+33 7 69 50 60 44",
      phoneLink: "tel:+33769506044",
      emailVal: "tanguy.bouchut@phelma.grenoble-inp.fr",
      emailLink: "mailto:tanguy.bouchut@phelma.grenoble-inp.fr",
      linkedinVal: "linkedin.com/in/tanguybouchut/",
      linkedinLink: "https://linkedin.com/in/tanguybouchut/",
      githubVal: "github.com/Tan9uyyy",
      githubLink: "https://github.com/Tan9uyyy",
      cvLink: "cv.pdf"
    }
  },

  en: {
    about: {
      title: "About",
      p1: "Future graduate engineer from Grenoble INP - PHELMA (SEOC major), specialized in embedded systems, robotics, and real-time systems.",
      p2: "I am actively seeking a 6-month Final Year Internship (PFE) starting February 1st, 2027, targeted in the Saint-Étienne area and its surroundings, with the ambition of a long-term commitment within your technical teams."
    },

    experience: {
      title: "Experiences & Projects",
      projects: [
        {
          id: "research-internship",
          title: "Research Intern – Autonomous Robotics & Multi-Drone Systems",
          subtitle: "Computer Vision and Digital Systems Laboratory (LVSN) - Université Laval, Québec (Canada)",
          date: "May 2026 – August 2026",
          tags: ["Python", "Buzz", "CBF-QP", "ROS", "Swarm Robotics"],
          bullets: [
            "Multi-robot simulator (Python, Buzz): Modeling flight and battery dynamics, local mapping via Occupancy Grid Maps (OGM), and real-time Signed Distance Field (SDF) computation.",
            "Physical safety (CBF-QP): Design of a reactive obstacle avoidance filter using Control Barrier Functions (CBF) solved via quadratic programming.",
            "Spatio-temporal & Energy planning: Adaptation of the GBPlanner algorithm on Receding Horizon Random Graphs (RRG) to balance exploration under partial observability and return-to-base for recharging.",
            "Decentralized swarm coordination: Implementation of a Finite State Machine (FSM) in Buzz to orchestrate fleet rotation and in-flight handovers."
          ],
          report: {
            url: "assets/rapportStage.pdf",
            label: "Download Internship Report (PDF)"
          },
          image: "assets/gif/stage2A.gif"
        },
        {
          id: "riscv-core",
          title: "RISC-V Processor Core Design in VHDL",
          type: "Academic Project",
          date: "Academic Project",
          tags: ["VHDL", "RISC-V (RV32I)", "Pipelined Architecture", "GHDL", "Dhrystone"],
          bullets: [
            "Hardware RTL Design (RV32I): VHDL development of FETCH (PC, ROM), DECODE (instruction/immediate decoding, 32-register file), EXECUTE (32-bit ALU, Store Unit), and MEMORY stages (RAM, Load Unit).",
            "5-Stage Pipeline & Data Forwarding: Implementation of the Forward Unit to eliminate data hazards, achieving a measured +382% performance gain over the sequential core baseline.",
            "Verification & Benchmarking (GHDL, GCC): Automated testbenches, bare-metal C cross-compilation with UART serial output, and full validation on the standard Dhrystone 2.1 benchmark."
          ],
          report: {
            url: "assets/rapportRiscv.pdf",
            label: "Download Technical Report (PDF)"
          },
          github: {
            url: "https://github.com/Tan9uyyy/RISC-V-Core",
            label: "View on GitHub"
          },
          image: "assets/gif/riscv.gif"
        },
        {
          id: "operating-system",
          title: "Operating System Creation in C",
          type: "Academic Project",
          date: "Academic Project",
          tags: ["C", "Operating Systems", "Real-Time", "Memory Management", "Multitasking"],
          bullets: [
            "Development of the core architecture: multitasking system, interrupt management, timer, and console."
          ],
          image: "assets/gif/os_animation.gif"
        },
        {
          id: "moba-prototype",
          title: "Multiplayer Game Prototype (MOBA) in C++",
          type: "Personal Project",
          date: "Personal Project",
          tags: ["C++", "SFML 3", "CMake", "Networking", "Software Architecture"],
          bullets: [
            "Architectural experimentation around a MOBA concept.",
            "Integration and migration to the SFML 3 library for rendering and event handling.",
            "Structuring the build environment with CMake and prototyping network synchronization challenges."
          ],
          github: {
            url: "https://github.com/Tan9uyyy/MiniLeagueOfLegends",
            label: "View on GitHub"
          },
          image: "assets/gif/lol.gif"
        },
        {
          id: "java-compiler",
          title: "Java Compiler",
          type: "Academic Project",
          date: "Academic Project",
          tags: ["Java", "Compilation", "Lexer / Parser", "Optimization"],
          bullets: [
            "Implementation of compilation steps: Lexer, parser, contextual analysis, code generation, and optimization."
          ]
        }
      ]
    },

    skills: {
      title: "Skills",
      categories: [
        {
          name: "Programming",
          skills: ["C", "C++", "Python", "Java", "SQL (PostgreSQL)", "Buzz (swarm robotics)"]
        },
        {
          name: "Embedded systems / low-level",
          skills: ["Real-time", "Multithreading", "Microcontrollers"]
        },
        {
          name: "Digital Design & FPGA",
          skills: ["VHDL", "Verilog", "ModelSim", "Vivado", "GHDL"]
        },
        {
          name: "Electronics & CAD",
          skills: ["KiCad"]
        },
        {
          name: "Tools & environments",
          skills: ["Linux (CLI)", "Git / GitHub", "GDB", "CMake", "Make", "VSCode"]
        },
        {
          name: "Methodologies",
          skills: ["Unit testing", "Technical documentation", "Performance optimization", "Agile methodology: Scrum"]
        },
        {
          name: "Languages",
          skills: ["French (Native)", "English (C1 - Fluent)"]
        }
      ]
    },

    education: {
      title: "Education",
      items: [
        {
          school: "Grenoble INP - PHELMA",
          date: "2024 – 2027",
          degree: "Master's Degree in Engineering",
          desc: "Engineering Degree - Embedded Systems and Connected Objects (SEOC). SoC design and verification (multi-core, NoC), hardware security, real-time control."
        },
        {
          school: "CPGE MP2I / MPI — Lycée Claude Fauriel (Saint-Étienne)",
          date: "2022 – 2024",
          degree: "Preparatory Classes for Grandes Écoles",
          desc: "Specialization in Mathematics, Physics, and Computer Science."
        }
      ]
    },

    summerJobs: {
      title: "Seasonal & Student Jobs",
      jobs: [
        {
          company: "Diverse seasonal & student jobs",
          subtitle: "Intermarché, RGIS, EHPAD, Agriculture",
          date: "2019 – 2025",
          resp: "Retail distribution, agriculture, catering services.",
          skills: "Development of autonomy, customer service skills, punctuality, and teamwork."
        }
      ]
    },

    interests: {
      title: "Interests",
      items: [
        {
          title: "Sports",
          desc: "University basketball, weightlifting / fitness."
        },
        {
          title: "Technology Watch",
          desc: "Artificial Intelligence (AI), hardware architectures, low-level development."
        }
      ]
    },

    contact: {
      title: "Contact",
      phone: "Phone",
      desc: "Feel free to reach out to me for any opportunity, or just to have a chat!",
      phoneVal: "+33 7 69 50 60 44",
      phoneLink: "tel:+33769506044",
      emailVal: "tanguy.bouchut@phelma.grenoble-inp.fr",
      emailLink: "mailto:tanguy.bouchut@phelma.grenoble-inp.fr",
      linkedinVal: "linkedin.com/in/tanguybouchut/",
      linkedinLink: "https://linkedin.com/in/tanguybouchut/",
      githubVal: "github.com/Tan9uyyy",
      githubLink: "https://github.com/Tan9uyyy",
      cvLink: "cv.pdf"
    }
  }
};
