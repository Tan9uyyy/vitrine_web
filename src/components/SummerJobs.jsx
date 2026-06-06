import React from 'react';

function SummerJobs({ lang }) {
  const t = {
    fr: {
      title: "Jobs Saisonniers",
      jobs: [
        {
          company: "Intermarché, RGIS, EHPAD, entreprise agricole, industrie textile",
          date: "2019 à 2025",
          resp: "Responsabilités clés : inventaire et mise en rayon dans de grands magasins, service en restauration collective, travail manuel et agricole.",
          skills: "Compétences transférables développées : travail d'équipe, service client, responsabilité, indépendance, attention aux détails."
        }
      ]
    },
    en: {
      title: "Seasonal Student Jobs",
      jobs: [
        {
          company: "Intermarché, RGIS, EHPAD, agricultural companie, textile industry",
          date: "2019 to 2025",
          resp: "Key responsibilities: inventory and stocking shelves in large retail stores, wait staff in institutional catering, manual labor and agricultural work.",
          skills: "Transferable skills developed: teamwork, customer service, responsibility, independence, attention to detail."
        }
      ]
    }
  };

  return (
    <section id="jobs">
      <h2>{t[lang].title}</h2>
      {t[lang].jobs.map((job, i) => (
        <div className="card" key={i}>
          <div className="card-header">
            <h3>{job.company}</h3>
            <span className="date-badge">{job.date}</span>
          </div>
          <ul className="custom-list">
            <li>{job.resp}</li>
            <li>{job.skills}</li>
          </ul>
        </div>
      ))}
    </section>
  );
}

export default SummerJobs;
