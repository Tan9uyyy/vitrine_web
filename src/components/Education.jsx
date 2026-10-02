import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';

function Education() {
  const { lang } = useLanguage();
  const data = (PORTFOLIO_DATA[lang] || PORTFOLIO_DATA.fr).education;

  return (
    <section id="education" aria-labelledby="education-title">
      <h2 id="education-title">{data.title}</h2>
      <div className="education-list">
        {data.items.map((ed, i) => (
          <article className="card education-card" key={i}>
            <div className="card-header">
              <div>
                <h3 className="education-school">{ed.school}</h3>
                {ed.degree && <p className="card-subtitle">{ed.degree}</p>}
              </div>
              <span className="date-badge">{ed.date}</span>
            </div>
            <p className="education-desc">{ed.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
