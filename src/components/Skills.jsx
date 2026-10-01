import React from 'react';

function Skills({ lang }) {
  const t = {
    fr: {
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
    en: {
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
    }
  };

  return (
    <section id="skills">
      <h2>{t[lang].title}</h2>
      {t[lang].categories.map((cat, i) => (
        <div className="card" key={i}>
          <h3 style={{marginBottom: '1rem'}}>{cat.name}</h3>
          <div className="skills-container">
            {cat.skills.map((skill, j) => (
              <span className="skill-tag" key={j}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
