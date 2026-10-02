import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useFilter } from '../context/FilterContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { isSkillMatchingProject, isExactSkillMatch } from '../utils/skillMatcher';

function ExperienceProjects() {
  const { lang, t } = useLanguage();
  const { selectedSkill, setSelectedSkill, clearFilter } = useFilter();
  const data = (PORTFOLIO_DATA[lang] || PORTFOLIO_DATA.fr).experience;

  const [hoverImage, setHoverImage] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeInlinePreview, setActiveInlinePreview] = useState(null);

  const handleMouseMove = (e) => {
    const popupWidth = 360;
    const popupHeight = 240;
    const offset = 18;

    let x = e.clientX + offset;
    let y = e.clientY + offset;

    if (x + popupWidth > window.innerWidth) {
      x = Math.max(12, e.clientX - popupWidth - offset);
    }
    if (y + popupHeight > window.innerHeight) {
      y = Math.max(12, e.clientY - popupHeight - offset);
    }

    setMousePos({ x, y });
  };

  const toggleMobilePreview = (index) => {
    setActiveInlinePreview((prev) => (prev === index ? null : index));
  };

  // Filter projects if a skill is selected
  const displayedProjects = selectedSkill
    ? data.projects.filter((proj) => isSkillMatchingProject(selectedSkill, proj))
    : data.projects;

  return (
    <section id="experience" aria-labelledby="experience-title">
      <div className="section-header-row">
        <h2 id="experience-title">{data.title}</h2>
      </div>

      {/* Active Filter Notification Banner */}
      {selectedSkill && (
        <div className="filter-status-banner" role="status" aria-live="polite">
          <div className="filter-status-info">
            <span className="filter-status-label">{t.activeFilter}</span>
            <span className="filter-status-badge">{selectedSkill}</span>
            <span className="filter-status-count">
              ({displayedProjects.length}{' '}
              {displayedProjects.length > 1
                ? t.projectsFoundPlural
                : t.projectsFoundSingle}
              )
            </span>
          </div>
          <button
            type="button"
            className="btn-clear-filter"
            onClick={clearFilter}
            aria-label={t.resetFilter}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span>{t.resetFilter}</span>
          </button>
        </div>
      )}

      {displayedProjects.length === 0 && (
        <div className="card filter-empty-card">
          <p>{t.noProjectsMatch}</p>
          <button
            type="button"
            className="btn-clear-filter"
            onClick={clearFilter}
            style={{ marginTop: '1rem' }}
          >
            {t.resetFilter}
          </button>
        </div>
      )}

      {displayedProjects.map((proj, i) => {
        const fullImagePath = proj.image
          ? `${import.meta.env.BASE_URL}${proj.image}`
          : null;
        const fullReportUrl = proj.report
          ? `${import.meta.env.BASE_URL}${proj.report.url}`
          : null;

        return (
          <article
            className={`card project-card ${selectedSkill ? 'project-card-filtered' : ''}`}
            key={proj.id || i}
            onMouseEnter={() => fullImagePath && setHoverImage(fullImagePath)}
            onMouseLeave={() => setHoverImage(null)}
            onMouseMove={(e) => fullImagePath && handleMouseMove(e)}
          >
            <div className="card-header">
              <div>
                <h3 className="project-title">{proj.title}</h3>
                {proj.subtitle && <p className="card-subtitle">{proj.subtitle}</p>}
              </div>
              <div className="card-badges">
                {fullImagePath && (
                  <span
                    className="preview-badge"
                    title={t.hoverGifHint}
                    aria-label={t.hoverGifHint}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <span>GIF</span>
                  </span>
                )}
                <span className="date-badge">{proj.date}</span>
              </div>
            </div>

            {proj.tags && proj.tags.length > 0 && (
              <div className="project-tags" aria-label="Technologies utilisées">
                {proj.tags.map((tag, tagIdx) => {
                  const isTagActive =
                    selectedSkill && isExactSkillMatch(selectedSkill, tag);

                  return (
                    <button
                      type="button"
                      key={tagIdx}
                      className={`project-tag ${isTagActive ? 'active-highlight' : ''}`}
                      onClick={() => setSelectedSkill(tag, false)}
                      title={`${t.filterBySkill} : ${tag}`}
                      aria-pressed={isTagActive}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            )}

            {proj.bullets && (
              <ul className="custom-list">
                {proj.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}

            {/* Mobile / Touch interactive GIF preview */}
            {fullImagePath && (
              <div className="mobile-preview-container">
                <button
                  type="button"
                  className="btn-mobile-preview"
                  onClick={() => toggleMobilePreview(i)}
                  aria-expanded={activeInlinePreview === i}
                  aria-controls={`preview-media-${i}`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span>
                    {activeInlinePreview === i ? t.closePreview : t.previewBtn}
                  </span>
                </button>

                {activeInlinePreview === i && (
                  <div id={`preview-media-${i}`} className="mobile-preview-media">
                    <img
                      src={fullImagePath}
                      alt={`Aperçu animé du projet ${proj.title}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Action buttons (Reports & GitHub) */}
            {(proj.report || proj.github) && (
              <div className="card-actions">
                {proj.report && (
                  <a
                    href={fullReportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-report-download"
                    aria-label={`${proj.report.label} (${t.openNewTab})`}
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
                    <span>{proj.report.label}</span>
                  </a>
                )}

                {proj.github && (
                  <a
                    href={proj.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-report-download"
                    aria-label={`${proj.github.label} (${t.openNewTab})`}
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
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    <span>{proj.github.label}</span>
                  </a>
                )}
              </div>
            )}
          </article>
        );
      })}

      {/* Floating cursor preview for desktop users */}
      {hoverImage && (
        <aside
          className="project-popup"
          aria-hidden="true"
          style={{
            left: mousePos.x,
            top: mousePos.y
          }}
        >
          <img
            src={hoverImage}
            alt=""
            width="350"
            height="220"
            loading="eager"
            decoding="async"
          />
        </aside>
      )}
    </section>
  );
}

export default ExperienceProjects;
