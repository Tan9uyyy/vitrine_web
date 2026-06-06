import React from 'react';

function About({ lang }) {
  const t = {
    fr: {
      title: "À propos",
      p1: "Motivé par la compréhension du fonctionnement interne des systèmes techniques, habitué aux projets collaboratifs et toujours désireux d'apprendre.",
      p2: "En tant qu'étudiant en ingénierie logicielle et systèmes embarqués à Grenoble INP - PHELMA, je suis à la recherche d'un stage de 16 semaines entre mi-mai et septembre 2026. Je suis particulièrement intéressé par le développement, le firmware, les pilotes, les systèmes d'exploitation temps réel, le web, les protocoles IoT, l'IA, ou la découverte d'un tout nouveau domaine."
    },
    en: {
      title: "About",
      p1: "Motivated by understanding the inner workings of technical systems, accustomed to collaborative projects, and eager to learn.",
      p2: "As a student in software engineering and embedded systems at Grenoble INP - PHELMA, I am looking for a 16-week internship between mid-May and September 2026 related in some way to development, firmware, drivers, real-time operating systems, web, IoT protocols, AI, or discovering a whole new field."
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
