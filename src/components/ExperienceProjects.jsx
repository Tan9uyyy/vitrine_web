import React, { useState } from 'react';

function ExperienceProjects({ lang }) {
  const [hoverImage, setHoverImage] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // TODO: Plus tard, ajouter une condition sur `e.clientY` 
    // pour vérifier si on est trop près du bas de la page.
    // Si c'est le cas, soustraire la hauteur de l'image pour l'afficher vers le haut.
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const t = {
    fr: {
      title: "Expériences & Projets",
      projects: [
        {
          title: "Stagiaire de Recherche – Systèmes Multi-Drones",
          date: "Avril 2026 – Présent",
          desc: "Développement d'un système de contrôle de vol multi-drones avec évitement d'obstacles. Modélisation mathématique et implémentation de fonctions de barrière de contrôle (CBF) en Python/C++."
        },
        {
          title: "Prototype de jeu multijoueur (MOBA) en C++",
          date: "Projet personnel",
          desc: "Expérimentation architecturale, intégration de la bibliothèque SFML 3 (rendu/événements), et structuration avec CMake pour gérer la synchronisation réseau."
        },
        {
          title: "Création d'un système d'exploitation en C",
          date: "2025/2026",
          desc: "Développement de l'architecture de base : système multitâche, gestion des interruptions, timer et console.",
          image: `${import.meta.env.BASE_URL}assets/gif/os_animation.gif`
        },
        {
          title: "Compilateur Java en Java",
          date: "2025/2026",
          desc: "Implémentation des étapes de compilation : Lexer, parser, analyse contextuelle, génération de code et optimisation."
        }
      ]
    },
    en: {
      title: "Experiences & Projects",
      projects: [
        {
          title: "Research Intern – Multi-Drone Systems",
          date: "April 2026 – Present",
          desc: "Development of a multi-drone flight control system with obstacle avoidance. Mathematical modeling and implementation of control barrier functions (CBF) in Python/C++."
        },
        {
          title: "Multiplayer Game Prototype (MOBA) in C++",
          date: "Personal Project",
          desc: "Architectural experimentation, integration of SFML 3 library (rendering/events), and structuring with CMake to manage network synchronization."
        },
        {
          title: "Operating System Creation in C",
          date: "2025/2026",
          desc: "Development of the core architecture: multitasking system, interrupt management, timer, and console.",
          image: `${import.meta.env.BASE_URL}assets/gif/os_animation.gif`
        },
        {
          title: "Java Compiler in Java",
          date: "2025/2026",
          desc: "Implementation of compilation steps: Lexer, parser, contextual analysis, code generation, and optimization."
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
          onMouseEnter={() => proj.image && setHoverImage(proj.image)}
          onMouseLeave={() => setHoverImage(null)}
          onMouseMove={(e) => proj.image && handleMouseMove(e)}
          style={{ cursor: proj.image ? 'pointer' : 'default' }}
        >
          <div className="card-header">
            <h3>{proj.title}</h3>
            <span className="date-badge">{proj.date}</span>
          </div>
          <p>{proj.desc}</p>
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
