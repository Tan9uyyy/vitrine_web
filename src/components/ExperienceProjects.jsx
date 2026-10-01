import { useState } from 'react';

function ExperienceProjects({ lang }) {
  const [hoverImage, setHoverImage] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const popupSize = 360;
    const padding = 20;

    let x = e.clientX + padding;
    let y = e.clientY + padding;

    if (y + popupSize > window.innerHeight) {
      y = Math.max(10, e.clientY - popupSize - 10);
    }
    if (x + popupSize > window.innerWidth) {
      x = Math.max(10, e.clientX - popupSize - 10);
    }

    setMousePos({ x, y });
  };

  const t = {
    fr: {
      title: "Expériences & Projets",
      projects: [
        {
          title: "Stagiaire de Recherche – Robotique Autonome & Systèmes Multi-Drones",
          subtitle: "Laboratoire de vision et systèmes numériques (LVSN) - Université Laval, Québec (Canada)",
          date: "Mai 2026 – Août 2026",
          bullets: [
            "Simulateur multi-robots (Python, Buzz) : Modélisation des dynamiques de vol et de batterie, cartographie locale par grille d’occupation (OGM) et calcul temps réel de champs de distance signée (SDF).",
            "Sécurité physique (CBF-QP) : Conception d’un filtre réactif d’évitement d’obstacles par fonctions barrières de contrôle (Control Barrier Functions) résolu par optimisation quadratique.",
            "Planification spatio-temporelle & Énergie : Adaptation de l’algorithme GBPlanner sur graphes locaux (RRG) pour concilier exploration sous observabilité partielle et repli vers la station de recharge.",
            "Coordination d’essaim décentralisée : Implémentation d’une machine à états (FSM) en langage Buzz pour orchestrer la rotation de flotte et les passages de relais en vol (handover)."
          ],
          report: {
            url: `${import.meta.env.BASE_URL}assets/rapportStage.pdf`,
            label: "Télécharger mon rapport de stage (PDF)"
          },
          image: `${import.meta.env.BASE_URL}assets/gif/stage2A.gif`
        },
        {
          title: "Prototype de jeu multijoueur (MOBA) en C++",
          subtitle: "Projet personnel",
          date: "Projet personnel",
          bullets: [
            "Expérimentation architecturale autour d’un concept de MOBA.",
            "Intégration et migration vers la bibliothèque SFML 3 pour le rendu et la gestion des événements.",
            "Structuration de l’environnement de build avec CMake et maquettage des problématiques de synchronisation réseau."
          ],
          image: `${import.meta.env.BASE_URL}assets/gif/lol.gif`,
          link: "https://github.com/Tan9uyyy/MiniLeagueOfLegends",
          github: {
            url: "https://github.com/Tan9uyyy/MiniLeagueOfLegends",
            label: "Voir le projet sur GitHub"
          }
        },
        {
          title: "Conception d’un cœur de processeur RISC-V en VHDL",
          subtitle: "Projet académique – Architecture Avancée (Grenoble INP - PHELMA)",
          date: "Projet académique",
          bullets: [
            "Conception matérielle (RV32I) : Développement VHDL des étages FETCH (PC, ROM), DECODE (décodage instructions/immédiats, banc de 32 registres), EXECUTE (ALU 32 bits, Store Unit) et MEMORY (RAM, Load Unit).",
            "Architecture pipelinée 5 étages & Forwarding : Implémentation de la Forward Unit résolvant les aléas de données (hazards), atteignant un gain de performance mesuré de +382% par rapport au cœur séquentiel.",
            "Vérification & Benchmarking (GHDL, GCC) : Rédaction de testbenches automatisés, exécution bare-metal de programmes C via liaison UART et validation sur le benchmark standard Dhrystone 2.1."
          ],
          report: {
            url: `${import.meta.env.BASE_URL}assets/rapportRiscv.pdf`,
            label: "Consulter le rapport technique (PDF)"
          },
          github: {
            url: "https://github.com/Tan9uyyy/RISC-V-Core",
            label: "Voir le projet sur GitHub"
          },
          link: "https://github.com/Tan9uyyy/RISC-V-Core",
          image: `${import.meta.env.BASE_URL}assets/gif/riscv.gif`
        },
        {
          title: "Création d’un système d’exploitation en C",
          subtitle: "Projet académique",
          date: "Projet académique",
          bullets: [
            "Développement de l’architecture de base : système multitâche, gestion des interruptions, timer et console."
          ],
          image: `${import.meta.env.BASE_URL}assets/gif/os_animation.gif`
        },
        {
          title: "Compilateur Java",
          subtitle: "Projet académique",
          date: "Projet académique",
          bullets: [
            "Implémentation des étapes de compilation : Lexer, parser, analyse contextuelle, génération de code et optimisation."
          ]
        }
      ]
    },
    en: {
      title: "Experiences & Projects",
      projects: [
        {
          title: "Research Intern – Autonomous Robotics & Multi-Drone Systems",
          subtitle: "Computer Vision and Digital Systems Laboratory (LVSN) - Université Laval, Québec (Canada)",
          date: "May 2026 – August 2026",
          bullets: [
            "Multi-robot simulator (Python, Buzz): Modeling flight and battery dynamics, local mapping via Occupancy Grid Maps (OGM), and real-time Signed Distance Field (SDF) computation.",
            "Physical safety (CBF-QP): Design of a reactive obstacle avoidance filter using Control Barrier Functions (CBF) solved via quadratic programming.",
            "Spatio-temporal & Energy planning: Adaptation of the GBPlanner algorithm on Receding Horizon Random Graphs (RRG) to balance exploration under partial observability and return-to-base for recharging.",
            "Decentralized swarm coordination: Implementation of a Finite State Machine (FSM) in Buzz to orchestrate fleet rotation and in-flight handovers."
          ],
          report: {
            url: `${import.meta.env.BASE_URL}assets/rapportStage.pdf`,
            label: "Download Internship Report (PDF)"
          },
          image: `${import.meta.env.BASE_URL}assets/gif/stage2A.gif`
        },
        {
          title: "Multiplayer Game Prototype (MOBA) in C++",
          subtitle: "Personal Project",
          date: "Personal Project",
          bullets: [
            "Architectural experimentation around a MOBA concept.",
            "Integration and migration to the SFML 3 library for rendering and event handling.",
            "Structuring the build environment with CMake and prototyping network synchronization challenges."
          ],
          image: `${import.meta.env.BASE_URL}assets/gif/lol.gif`,
          link: "https://github.com/Tan9uyyy/MiniLeagueOfLegends",
          github: {
            url: "https://github.com/Tan9uyyy/MiniLeagueOfLegends",
            label: "View project on GitHub"
          }
        },
        {
          title: "RISC-V Processor Core Design in VHDL",
          subtitle: "Academic Project – Advanced Architecture (Grenoble INP - PHELMA)",
          date: "Academic Project",
          bullets: [
            "Hardware RTL Design (RV32I): VHDL development of FETCH (PC, ROM), DECODE (instruction/immediate decoding, 32-register file), EXECUTE (32-bit ALU, Store Unit), and MEMORY stages (RAM, Load Unit).",
            "5-Stage Pipeline & Data Forwarding: Implementation of the Forward Unit to eliminate data hazards, achieving a measured +382% performance gain over the sequential core baseline.",
            "Verification & Benchmarking (GHDL, GCC): Automated testbenches, bare-metal C cross-compilation with UART serial output, and full validation on the standard Dhrystone 2.1 benchmark."
          ],
          report: {
            url: `${import.meta.env.BASE_URL}assets/rapportRiscv.pdf`,
            label: "Download Technical Report (PDF)"
          },
          github: {
            url: "https://github.com/Tan9uyyy/RISC-V-Core",
            label: "View project on GitHub"
          },
          link: "https://github.com/Tan9uyyy/RISC-V-Core",
          image: `${import.meta.env.BASE_URL}assets/gif/riscv.gif`
        },
        {
          title: "Operating System Creation in C",
          subtitle: "Academic Project",
          date: "Academic Project",
          bullets: [
            "Development of the core architecture: multitasking system, interrupt management, timer, and console."
          ],
          image: `${import.meta.env.BASE_URL}assets/gif/os_animation.gif`
        },
        {
          title: "Java Compiler",
          subtitle: "Academic Project",
          date: "Academic Project",
          bullets: [
            "Implementation of compilation steps: Lexer, parser, contextual analysis, code generation, and optimization."
          ]
        }
      ]
    }
  };

  return (
    <section id="experience">
      <h2>{t[lang].title}</h2>
      {t[lang].projects.map((proj, i) => (
        <div 
          className="card" 
          key={i}
          onClick={() => {
            if (proj.link) {
              const selection = window.getSelection();
              if (selection && selection.toString().length > 0) return;
              window.open(proj.link, '_blank', 'noopener,noreferrer');
            }
          }}
          onKeyDown={(e) => {
            if (proj.link && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              window.open(proj.link, '_blank', 'noopener,noreferrer');
            }
          }}
          tabIndex={proj.link ? 0 : undefined}
          role={proj.link ? 'link' : undefined}
          onMouseEnter={() => proj.image && setHoverImage(proj.image)}
          onMouseLeave={() => setHoverImage(null)}
          onMouseMove={(e) => proj.image && handleMouseMove(e)}
          style={{ cursor: proj.link || proj.image ? 'pointer' : 'default' }}
        >
          <div className="card-header">
            <div>
              <h3>{proj.title}</h3>
              {proj.subtitle && <p className="card-subtitle">{proj.subtitle}</p>}
            </div>
            <span className="date-badge">{proj.date}</span>
          </div>
          {proj.desc && <p style={{ marginBottom: proj.bullets ? '0.75rem' : 0 }}>{proj.desc}</p>}
          {proj.bullets && (
            <ul className="custom-list">
              {proj.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          )}
          {(proj.report || proj.github) && (
            <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {proj.report && (
                <a 
                  href={proj.report.url}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-report-download"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>{proj.report.label}</span>
                </a>
              )}
              {proj.github && (
                <a 
                  href={proj.github.url}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-report-download"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span>{proj.github.label}</span>
                </a>
              )}
            </div>
          )}
        </div>
      ))}

      {hoverImage && (
        <div 
          className="project-popup"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y + 20
          }}
        >
          <img 
            src={hoverImage} 
            alt="Project Preview" 
          />
        </div>
      )}
    </section>
  );
}

export default ExperienceProjects;
