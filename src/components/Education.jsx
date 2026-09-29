import React from 'react';

function Education({ lang }) {
  const t = {
    fr: {
      title: "Parcours (Formation)",
      edu: [
        {
          school: "Grenoble INP - PHELMA",
          date: "2024 – 2027",
          desc: "Diplôme d'ingénieur - Systèmes Embarqués et Objets Connectés (SEOC). Conception et vérification de SoC (multi-cœurs, NoC), sécurité matérielle, contrôle-commande temps réel."
        },
        {
          school: "Classes Préparatoires aux Grandes Écoles (CPGE)",
          date: "2022 – 2024",
          desc: "Spécialisation en Mathématiques, Physique et Informatique."
        }
      ]
    },
    en: {
      title: "Education",
      edu: [
        {
          school: "Grenoble INP - PHELMA",
          date: "2024 – 2027",
          desc: "Engineering Degree - Embedded Systems and Connected Objects (SEOC). SoC design and verification (multi-core, NoC), hardware security, real-time control."
        },
        {
          school: "Science preparatory classes (CPGE)",
          date: "2022 – 2024",
          desc: "Specialization in Mathematics, Physics, and Computer Science."
        }
      ]
    }
  };

  return (
    <section id="education">
      <h2>{t[lang].title}</h2>
      {t[lang].edu.map((ed, i) => (
        <div className="card" key={i}>
          <div className="card-header">
            <h3>{ed.school}</h3>
            <span className="date-badge">{ed.date}</span>
          </div>
          <p>{ed.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
