import React from 'react';

function Skills({ lang }) {
  const t = {
    fr: {
      title: "Compétences",
      categories: [
        {
          name: "Programmation",
          skills: ["C", "C++", "Java", "Python", "SQL (postgreSQL)", "HTML/CSS/Javascript"]
        },
        {
          name: "Systèmes embarqués / bas-niveau",
          skills: ["Temps réel", "Multithreading", "Microcontrôleurs"]
        },
        {
          name: "Conception de circuits intégrés",
          skills: ["VHDL/Verilog", "ModelSim"]
        },
        {
          name: "Outils & Environnements",
          skills: ["Terminal Linux", "Git / GitHub / GitLab", "Makefile, Maven", "Debugging"]
        },
        {
          name: "Méthodologies",
          skills: ["Tests unitaires", "Documentation technique", "Optimisation de performance", "Méthode Agile: Scrum"]
        }
      ]
    },
    en: {
      title: "Skills",
      categories: [
        {
          name: "Programming",
          skills: ["C", "C++", "Java", "Python", "SQL (postgreSQL)", "HTML/CSS/Javascript"]
        },
        {
          name: "Embedded systems / low-level",
          skills: ["Real-time", "Multithreading", "Microcontrollers"]
        },
        {
          name: "Digital integrated circuit design",
          skills: ["VHDL/Verilog", "ModelSim"]
        },
        {
          name: "Tools & environments",
          skills: ["Linux terminal", "Git / GitHub / GitLab", "Makefile, Maven", "Debugging"]
        },
        {
          name: "Methodologies",
          skills: ["Unit testing", "Technical documentation", "Performance optimization", "Agile methodology: scrum"]
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
