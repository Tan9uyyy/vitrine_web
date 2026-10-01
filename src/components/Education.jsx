const EDUCATION_DATA = {
  fr: {
    title: "Parcours (Formation)",
    edu: [
      {
        school: "Grenoble INP - PHELMA",
        date: "2024 – 2027",
        desc: "Diplôme d'ingénieur - Systèmes Embarqués et Objets Connectés (SEOC). Conception et vérification de SoC (multi-cœurs, NoC), sécurité matérielle, contrôle-commande temps réel."
      },
      {
        school: "CPGE MP2I / MPI — Lycée Claude Fauriel (Saint-Étienne)",
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
        school: "CPGE MP2I / MPI — Lycée Claude Fauriel (Saint-Étienne)",
        date: "2022 – 2024",
        desc: "Specialization in Mathematics, Physics, and Computer Science."
      }
    ]
  }
};

function Education({ lang }) {
  const t = EDUCATION_DATA[lang] || EDUCATION_DATA.fr;

  return (
    <section id="education">
      <h2>{t.title}</h2>
      {t.edu.map((ed, i) => (
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
