import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';

function About() {
  const { lang, t } = useLanguage();
  const data = (PORTFOLIO_DATA[lang] || PORTFOLIO_DATA.fr).about;

  return (
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title">{data.title}</h2>
      <div className="card about-card">
        <p className="about-lead">
          <strong>{data.p1}</strong>
        </p>
        <p className="about-text">{data.p2}</p>
        <div className="card-actions">
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cv-download"
            aria-label={`${t.viewCv} (${t.openNewTab})`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>{t.viewCv}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
