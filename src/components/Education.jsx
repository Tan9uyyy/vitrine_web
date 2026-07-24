import React from 'react';

function Education({ lang }) {
  const t = {
    fr: {
      title: "Parcours (Éducation)",
      edu: [
        {
          school: "Grenoble INP - PHELMA - France",
          date: "2024/2027",
          desc: "Diplôme d'ingénieur - Systèmes Embarqués et Objets Connectés (SEOC). Conception de circuits intégrés (VHDL), systèmes embarqués bas niveau, temps réel."
        },
        {
          school: "Classes Préparatoires aux Grandes Écoles (CPGE)",
          date: "2022/2024",
          desc: "Mathématiques, Physique, Informatique."
        },
        {
          school: "Baccalauréat - Mention Très Bien",
          date: "2022",
          desc: "Spécialités scientifiques : Mathématiques, Physique-Chimie, et Sciences de l'Ingénieur (options Mathématiques Expertes et Sport)."
        }
      ]
    },
    en: {
      title: "Education",
      edu: [
        {
          school: "Grenoble INP - PHELMA - France",
          date: "2024/2027",
          desc: "Engineering Degree - Embedded Systems and Connected Objects (SEOC). Integrated circuit design (VHDL), low-level embedded systems, real-time."
        },
        {
          school: "Science preparatory program",
          date: "2022/2024",
          desc: "Mathematics, Physics, Computer Science."
        },
        {
          school: "High school diploma - Summa cum laude",
          date: "2022",
          desc: "Scientific specializations: Mathematics, Physics-Chemistry, and Engineering Sciences with options in Advanced Mathematics and Sports."
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
