import { useLanguage } from '../context/LanguageContext';
import { useScrollSpy } from '../hooks/useScrollSpy';

const SECTION_IDS = [
  'about',
  'experience',
  'skills',
  'education',
  'jobs',
  'interests',
  'contact'
];

function Header() {
  const { lang, setLang, t } = useLanguage();
  const activeSection = useScrollSpy(SECTION_IDS);

  const navLinks = [
    { id: 'about', label: t.about },
    { id: 'experience', label: t.exp },
    { id: 'skills', label: t.skills },
    { id: 'education', label: t.edu },
    { id: 'jobs', label: t.jobs },
    { id: 'interests', label: t.interests },
    { id: 'contact', label: t.contact }
  ];

  return (
    <header className="sidebar" role="banner">
      <div className="profile-img-container">
        <img
          src={`${import.meta.env.BASE_URL}assets/photo/photo.jpg`}
          alt="Tanguy Bouchut"
          width="160"
          height="192"
          loading="eager"
          decoding="async"
        />
      </div>

      <h1 className="sidebar-title">Tanguy BOUCHUT</h1>
      <p className="subtitle">{t.subtitle}</p>

      <a
        href={`${import.meta.env.BASE_URL}cv.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="sidebar-cv-btn"
        aria-label={`${t.downloadCv} (${t.openNewTab})`}
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
          style={{ flexShrink: 0 }}
          aria-hidden="true"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span>{t.downloadCv}</span>
      </a>

      <div className="sidebar-quick-contacts" role="group" aria-label={t.quickContactsAria}>
        <a
          href="mailto:tanguy.bouchut@phelma.grenoble-inp.fr"
          className="quick-icon-btn"
          aria-label={t.socialLinks.email}
          title={t.socialLinks.email}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/tanguybouchut/"
          target="_blank"
          rel="noopener noreferrer"
          className="quick-icon-btn"
          aria-label={t.socialLinks.linkedin}
          title={t.socialLinks.linkedin}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="https://github.com/Tan9uyyy"
          target="_blank"
          rel="noopener noreferrer"
          className="quick-icon-btn"
          aria-label={t.socialLinks.github}
          title={t.socialLinks.github}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
        <a
          href="tel:+33769506044"
          className="quick-icon-btn"
          aria-label={t.socialLinks.phone}
          title={t.socialLinks.phone}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>

      <nav aria-label={t.navAria}>
        <ul className="nav-links">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={isActive ? 'nav-item active' : 'nav-item'}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="lang-switch" role="group" aria-label={t.langAria}>
        <button
          type="button"
          className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
          onClick={() => setLang('fr')}
          aria-label={t.toFr}
          aria-pressed={lang === 'fr'}
          title="Français"
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/svg/flag_france.svg`}
            alt=""
            width="28"
            height="28"
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
          onClick={() => setLang('en')}
          aria-label={t.toEn}
          aria-pressed={lang === 'en'}
          title="English"
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/svg/flag_uk.svg`}
            alt=""
            width="28"
            height="28"
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
