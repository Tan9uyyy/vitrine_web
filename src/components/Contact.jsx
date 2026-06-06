import React from 'react';

function Contact({ lang }) {
  const t = {
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

  return (
    <section id="contact">
      <h2>{t[lang].title}</h2>
      <div className="card">
        <p style={{marginBottom: '2rem'}}>{t[lang].desc}</p>
        <div className="contact-grid">
          <div className="contact-item">
            <strong>{t[lang].phone} :</strong> <a href="tel:+33769506044">+33 7 69 50 60 44</a>
          </div>
          <div className="contact-item">
            <strong>Email :</strong> <a href="mailto:tanguy.bouchut@phelma.grenoble-inp.fr">tanguy.bouchut@phelma.grenoble-inp.fr</a>
          </div>
          <div className="contact-item">
            <strong>LinkedIn :</strong> <a href="https://linkedin.com/in/tanguybouchut/" target="_blank" rel="noreferrer">linkedin.com/in/tanguybouchut/</a>
          </div>
          <div className="contact-item">
            <strong>GitHub / Portfolio :</strong> <a href="https://tanguy-bouchut-github-portfolio.carrd.co/" target="_blank" rel="noreferrer">Lien Portfolio</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
