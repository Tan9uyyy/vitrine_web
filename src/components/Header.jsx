import React from 'react';

function Header({ lang, setLang }) {
  const t = {
    fr: {
      subtitle: "Étudiant Ingénieur en Systèmes Embarqués & Objets Connectés",
      about: "À propos",
      exp: "Expériences & Projets",
      skills: "Compétences",
      edu: "Parcours",
      jobs: "Jobs Saisonniers",
      interests: "Centres d'intérêt",
      contact: "Contact",
      downloadCv: "Télécharger mon CV (PDF)"
    },
    en: {
      subtitle: "Engineering Student in Embedded Systems & Connected Objects",
      about: "About",
      exp: "Experiences & Projects",
      skills: "Skills",
      edu: "Education",
      jobs: "Summer Jobs",
      interests: "Interests",
      contact: "Contact",
      downloadCv: "Download CV (PDF)"
    }
  };

  const navLinks = [
    { id: 'about', label: t[lang].about },
    { id: 'experience', label: t[lang].exp },
    { id: 'skills', label: t[lang].skills },
    { id: 'education', label: t[lang].edu },
    { id: 'jobs', label: t[lang].jobs },
    { id: 'interests', label: t[lang].interests },
    { id: 'contact', label: t[lang].contact }
  ];

  return (
    <aside className="sidebar">
      <div className="profile-img-container">
        <img src={`${import.meta.env.BASE_URL}assets/photo/photo.jpg`} alt="Tanguy Bouchut" />
      </div>
      <h2>Tanguy BOUCHUT</h2>
      <p className="subtitle">{t[lang].subtitle}</p>
      
      <a 
        href={`${import.meta.env.BASE_URL}cv.pdf`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="sidebar-cv-btn"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span>{t[lang].downloadCv}</span>
      </a>

      <nav>
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="lang-switch">
        <img src={`${import.meta.env.BASE_URL}assets/svg/flag_france.svg`} alt="Français" onClick={() => setLang('fr')} style={{opacity: lang === 'fr' ? 1 : 0.4}}/>
        <img src={`${import.meta.env.BASE_URL}assets/svg/flag_uk.svg`} alt="English" onClick={() => setLang('en')} style={{opacity: lang === 'en' ? 1 : 0.4}}/>
      </div>
    </aside>
  );
}

export default Header;
