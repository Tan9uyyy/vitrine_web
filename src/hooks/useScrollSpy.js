import { useState, useEffect } from 'react';

/**
 * Custom hook to track which section is currently active in the viewport.
 * @param {string[]} sectionIds - Array of section element IDs to observe.
 * @param {number} offset - Pixel offset from the top to trigger activation.
 * @returns {string} activeId - ID of currently active section.
 */
export function useScrollSpy(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find all sections and their positions
      let currentSection = sectionIds[0] || '';

      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = id;
            break;
          } else if (scrollPosition >= top) {
            currentSection = id;
          }
        }
      }

      // Check if user scrolled near the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      setActiveId(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
