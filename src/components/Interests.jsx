import React from 'react';

function Interests({ lang }) {
  const t = {
    fr: {
      title: "Centres d'intérêt",
      items: [
        {
          title: "Sport",
          desc: "Basketball universitaire, musculation."
        },
        {
          title: "Veille Technologique",
          desc: "Outils de développement, Intelligence Artificielle (IA), découvertes et innovations technologiques."
        }
      ]
    },
    en: {
      title: "Interests",
      items: [
        {
          title: "Sports",
          desc: "University basketball, weightlifting / fitness."
        },
        {
          title: "Technology Watch",
          desc: "Development tools, Artificial Intelligence (AI), emerging technological innovations."
        }
      ]
    }
  };

  return (
    <section id="interests">
      <h2>{t[lang].title}</h2>
      <div className="interests-grid">
        {t[lang].items.map((item, i) => (
          <div className="card interest-card" key={i}>
            <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interests;
