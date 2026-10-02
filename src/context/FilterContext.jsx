import { createContext, useContext, useState, useCallback } from 'react';

const FilterContext = createContext(null);

export function FilterProvider({ children }) {
  const [selectedSkill, setSelectedSkillState] = useState(null);

  const setSelectedSkill = useCallback((skill, shouldScrollToExperience = false) => {
    setSelectedSkillState((prev) => (prev === skill ? null : skill));

    if (shouldScrollToExperience) {
      const expEl = document.getElementById('experience');
      if (expEl) {
        expEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  const clearFilter = useCallback(() => {
    setSelectedSkillState(null);
  }, []);

  return (
    <FilterContext.Provider value={{ selectedSkill, setSelectedSkill, clearFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}
