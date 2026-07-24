import React from 'react';

function Header({ lang, setLang }) {
  const t = {
    fr: {
      subtitle: "Étudiant Ingénieur en Développement Logiciel & Systèmes Embarqués",
      about: "À propos",
      exp: "Expériences & Projets",
      skills: "Compétences",
      edu: "Parcours",
      jobs: "Jobs Saisonniers",
      contact: "Contact"
    },
    en: {
      subtitle: "Engineering Student in Software Development & Embedded Systems",
      about: "About",
      exp: "Experiences & Projects",
      skills: "Skills",
      edu: "Education",
      jobs: "Summer Jobs",
      contact: "Contact"
    }
  };

  const navLinks = [
    { id: 'about', label: t[lang].about },
    { id: 'experience', label: t[lang].exp },
    { id: 'skills', label: t[lang].skills },
    { id: 'education', label: t[lang].edu },
    { id: 'jobs', label: t[lang].jobs },
    { id: 'contact', label: t[lang].contact }
  ];

  return (
    <aside className="sidebar">
      <div className="profile-img-container">
        {/* Placeholder for now. Replace with real profile image */}
        <img src={`${import.meta.env.BASE_URL}assets/photo/photo_profil_Tanguy.png`} alt="Tanguy Bouchut Profile" />
      </div>
      <h2>Tanguy BOUCHUT</h2>
      <p className="subtitle">{t[lang].subtitle}</p>
      
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
