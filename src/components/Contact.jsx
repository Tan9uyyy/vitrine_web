const CONTACT_DATA = {
  fr: {
    title: "Contact",
    phone: "Téléphone",
    desc: "N'hésitez pas à me contacter pour toute opportunité, ou simplement pour échanger !"
  },
  en: {
    title: "Contact",
    phone: "Phone",
    desc: "Feel free to reach out to me for any opportunity, or just to have a chat!"
  }
};

function Contact({ lang }) {
  const t = CONTACT_DATA[lang] || CONTACT_DATA.fr;

  return (
    <section id="contact">
      <h2>{t.title}</h2>
      <div className="card">
        <p style={{ marginBottom: '2rem' }}>{t.desc}</p>
        <div className="contact-grid">
          <div className="contact-item">
            <svg className="contact-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div>
              <strong>{t.phone} :</strong>{' '}
              <a href="tel:+33769506044">+33 7 69 50 60 44</a>
            </div>
          </div>

          <div className="contact-item">
            <svg className="contact-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <div>
              <strong>Email :</strong>{' '}
              <a href="mailto:tanguy.bouchut@phelma.grenoble-inp.fr" className="contact-link-break">
                tanguy.bouchut@phelma.grenoble-inp.fr
              </a>
            </div>
          </div>

          <div className="contact-item">
            <svg className="contact-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <div>
              <strong>LinkedIn :</strong>{' '}
              <a href="https://linkedin.com/in/tanguybouchut/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/tanguybouchut/
              </a>
            </div>
          </div>

          <div className="contact-item">
            <svg className="contact-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <div>
              <strong>CV :</strong>{' '}
              <a href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank" rel="noopener noreferrer">
                {lang === 'fr' ? 'Consulter mon CV (PDF)' : 'View my Resume (PDF)'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
