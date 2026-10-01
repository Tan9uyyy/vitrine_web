const SUMMER_JOBS_DATA = {
  fr: {
    title: "Jobs Saisonniers & Étudiants",
    jobs: [
      {
        company: "Divers emplois saisonniers & étudiants",
        subtitle: "Intermarché, RGIS, EHPAD, Agriculture",
        date: "2019 – 2025",
        resp: "Grande distribution, agriculture, restauration.",
        skills: "Développement de l'autonomie, du service client et du travail en équipe."
      }
    ]
  },
  en: {
    title: "Seasonal & Student Jobs",
    jobs: [
      {
        company: "Diverse seasonal & student jobs",
        subtitle: "Intermarché, RGIS, EHPAD, Agriculture",
        date: "2019 – 2025",
        resp: "Retail distribution, agriculture, catering services.",
        skills: "Development of autonomy, customer service, and teamwork."
      }
    ]
  }
};

function SummerJobs({ lang }) {
  const t = SUMMER_JOBS_DATA[lang] || SUMMER_JOBS_DATA.fr;

  return (
    <section id="jobs">
      <h2>{t.title}</h2>
      {t.jobs.map((job, i) => (
        <div className="card" key={i}>
          <div className="card-header">
            <div>
              <h3>{job.company}</h3>
              {job.subtitle && <p className="card-subtitle">{job.subtitle}</p>}
            </div>
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
