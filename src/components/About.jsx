const CONTENT = {
  fr: {
    title: "À propos",
    p1: "Futur ingénieur diplômé de Grenoble INP - PHELMA (filière SEOC), spécialisé en systèmes embarqués, robotique et temps réel.",
    p2: "Je recherche activement mon Projet de Fin d’Études (PFE) de 6 mois dès le 1er février 2027, ciblé sur le bassin stéphanois et ses environs, avec la volonté de m’investir durablement au sein de vos équipes techniques.",
    downloadCv: "Consulter mon CV (PDF)"
  },
  en: {
    title: "About",
    p1: "Future graduate engineer from Grenoble INP - PHELMA (SEOC major), specialized in embedded systems, robotics, and real-time systems.",
    p2: "I am actively seeking a 6-month Final Year Internship (PFE) starting February 1st, 2027, targeted in the Saint-Étienne area and its surroundings, with the ambition of a long-term commitment within your technical teams.",
    downloadCv: "View my Resume (PDF)"
  }
};

function About({ lang }) {
  const t = CONTENT[lang] || CONTENT.fr;

  return (
    <section id="about">
      <h2>{t.title}</h2>
      <div className="card">
        <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}><strong>{t.p1}</strong></p>
        <p style={{ marginBottom: '1.5rem' }}>{t.p2}</p>
        <a 
          href={`${import.meta.env.BASE_URL}cv.pdf`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-cv-download"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span>{t.downloadCv}</span>
        </a>
      </div>
    </section>
  );
}

export default About;
