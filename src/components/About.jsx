import React from 'react';

function About({ lang }) {
  const t = {
    fr: {
      title: "À propos",
      p1: "Motivé par la compréhension du fonctionnement interne des systèmes techniques, habitué aux projets collaboratifs et toujours désireux d'apprendre.",
      p2: "En tant qu'étudiant en dernière année à Grenoble INP - PHELMA, spécialisé en systèmes embarqués et objets connectés (SEOC), je suis passionné par l'architecture logicielle, le développement bas niveau et les systèmes temps réel. Je suis activement à la recherche d'un projet de fin d'études (PFE) à partir du 1er Février 2027 pour contribuer à des projets d'envergures dans votre équipe."
    },
    en: {
      title: "About",
      p1: "Motivated by understanding the inner workings of technical systems, accustomed to collaborative projects, and eager to learn.",
      p2: "As a final-year engineering student at Grenoble INP - PHELMA, specializing in embedded systems and connected objects (SEOC), I am passionate about software architecture, low-level development, and real-time systems. I am actively seeking a final year internship (PFE) starting February 1st, 2027, to contribute to large-scale projects within your team."
    }
  };

  return (
    <section id="about">
      <h2>{t[lang].title}</h2>
      <div className="card">
        <p style={{marginBottom: '1rem'}}><strong>{t[lang].p1}</strong></p>
        <p>{t[lang].p2}</p>
      </div>
    </section>
  );
}

export default About;
