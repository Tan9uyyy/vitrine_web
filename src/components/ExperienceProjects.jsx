import React from 'react';

function ExperienceProjects({ lang }) {
  const t = {
    fr: {
      title: "Expériences & Projets",
      projects: [
        {
          title: "Développement d'un système d'exploitation en C",
          date: "2025/2026",
          desc: "Multitâche, interruptions, timer, console."
        },
        {
          title: "Compilateur Java en Java",
          date: "2025/2026",
          desc: "Lexer, parser, analyse contextuelle, génération de code, optimisation."
        },
        {
          title: "Bibliothèque générique en C - structures de données",
          date: "2025/2026",
          desc: "Listes, files, piles, ensembles et maps, arbres, tests automatisés et benchmarks."
        },
        {
          title: "Traitement d'image embarqué - comptage de bulles",
          date: "2024/2025",
          desc: "Mesure de débit utilisant vision + microcontrôleur."
        }
      ]
    },
    en: {
      title: "Experiences & Projects",
      projects: [
        {
          title: "Development of an operating system in C",
          date: "2025/2026",
          desc: "Multitasking, interruptions, timer, console."
        },
        {
          title: "Java compiler in Java",
          date: "2025/2026",
          desc: "Lexer, parser, contextual analysis, code generation, optimization."
        },
        {
          title: "Generic library in C - data structures",
          date: "2025/2026",
          desc: "Lists, queues, stacks, sets and maps, trees, automated testing and benchmarks."
        },
        {
          title: "Embedded image processing - bubble counting",
          date: "2024/2025",
          desc: "Flow measurement using vision + microcontroller."
        }
      ]
    }
  };

  return (
    <section id="experience">
      <h2>{t[lang].title}</h2>
      {t[lang].projects.map((proj, i) => (
        <div className="card" key={i}>
          <div className="card-header">
            <h3>{proj.title}</h3>
            <span className="date-badge">{proj.date}</span>
          </div>
          <p>{proj.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default ExperienceProjects;
