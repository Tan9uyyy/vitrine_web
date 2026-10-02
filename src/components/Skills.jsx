import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';

function Skills() {
  const { lang } = useLanguage();
  const data = (PORTFOLIO_DATA[lang] || PORTFOLIO_DATA.fr).skills;

  return (
    <section id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">{data.title}</h2>
      <div className="skills-grid">
        {data.categories.map((cat, i) => (
          <div className="card skill-category-card" key={i}>
            <h3 className="skill-category-title">{cat.name}</h3>
            <div className="skills-container">
              {cat.skills.map((skill, j) => (
                <span className="skill-tag" key={j}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
