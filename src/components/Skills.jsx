import { useLanguage } from '../context/LanguageContext';
import { useFilter } from '../context/FilterContext';
import { PORTFOLIO_DATA, isSkillMatchingProject } from '../data/portfolioData';

function Skills() {
  const { lang, t } = useLanguage();
  const { selectedSkill, setSelectedSkill } = useFilter();
  const data = (PORTFOLIO_DATA[lang] || PORTFOLIO_DATA.fr).skills;
  const projects = (PORTFOLIO_DATA[lang] || PORTFOLIO_DATA.fr).experience.projects;

  const handleSkillClick = (skill) => {
    // Toggle filter and scroll to experience section
    setSelectedSkill(skill, true);
  };

  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="section-header-block">
        <h2 id="skills-title">{data.title}</h2>
        <p className="skills-filter-hint" aria-hidden="true">
          {t.filterHint}
        </p>
      </div>

      <div className="skills-grid">
        {data.categories.map((cat, i) => (
          <div className="card skill-category-card" key={i}>
            <h3 className="skill-category-title">{cat.name}</h3>
            <div className="skills-container">
              {cat.skills.map((skill, j) => {
                const isSelected = selectedSkill === skill;
                const matchingCount = projects.filter((p) =>
                  isSkillMatchingProject(skill, p)
                ).length;
                const hasMatchingProjects = matchingCount > 0;

                return (
                  <button
                    type="button"
                    key={j}
                    className={`skill-tag skill-tag-interactive ${
                      isSelected ? 'active' : ''
                    } ${hasMatchingProjects ? 'has-projects' : 'no-direct-project'}`}
                    onClick={() => hasMatchingProjects && handleSkillClick(skill)}
                    aria-pressed={isSelected}
                    title={
                      hasMatchingProjects
                        ? `${t.clickToFilter} (${matchingCount} ${
                            matchingCount > 1
                              ? t.projectsFoundPlural
                              : t.projectsFoundSingle
                          })`
                        : undefined
                    }
                    disabled={!hasMatchingProjects}
                  >
                    <span>{skill}</span>
                    {hasMatchingProjects && (
                      <span className="skill-count-badge" aria-hidden="true">
                        {matchingCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
