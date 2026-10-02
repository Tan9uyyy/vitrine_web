import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';

function Interests() {
  const { lang } = useLanguage();
  const data = (PORTFOLIO_DATA[lang] || PORTFOLIO_DATA.fr).interests;

  return (
    <section id="interests" aria-labelledby="interests-title">
      <h2 id="interests-title">{data.title}</h2>
      <div className="interests-grid">
        {data.items.map((item, i) => (
          <div className="card interest-card" key={i}>
            <h3 className="interest-item-title">{item.title}</h3>
            <p className="interest-item-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interests;
