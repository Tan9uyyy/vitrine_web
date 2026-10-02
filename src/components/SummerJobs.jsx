import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';

function SummerJobs() {
  const { lang } = useLanguage();
  const data = (PORTFOLIO_DATA[lang] || PORTFOLIO_DATA.fr).summerJobs;

  return (
    <section id="jobs" aria-labelledby="jobs-title">
      <h2 id="jobs-title">{data.title}</h2>
      <div className="jobs-list">
        {data.jobs.map((job, i) => (
          <article className="card job-card" key={i}>
            <div className="card-header">
              <div>
                <h3 className="job-company">{job.company}</h3>
                {job.subtitle && <p className="card-subtitle">{job.subtitle}</p>}
              </div>
              <span className="date-badge">{job.date}</span>
            </div>
            <ul className="custom-list">
              <li>{job.resp}</li>
              <li>{job.skills}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SummerJobs;
