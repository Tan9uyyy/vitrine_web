const INTERESTS_DATA = {
  fr: {
    title: "Centres d'intérêt",
    items: [
      {
        title: "Sport",
        desc: "Basketball universitaire, musculation."
      },
      {
        title: "Veille Technologique",
        desc: "Intelligence Artificielle (IA), architectures matérielles, développement bas-niveau."
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
        desc: "Artificial Intelligence (AI), hardware architectures, low-level development."
      }
    ]
  }
};

function Interests({ lang }) {
  const t = INTERESTS_DATA[lang] || INTERESTS_DATA.fr;

  return (
    <section id="interests">
      <h2>{t.title}</h2>
      <div className="interests-grid">
        {t.items.map((item, i) => (
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
