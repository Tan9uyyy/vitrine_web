import { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'portfolio_preferred_lang';

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    // 1. Check local storage
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY);
      if (savedLang === 'fr' || savedLang === 'en') {
        return savedLang;
      }
    } catch {
      // Ignore localStorage access issues
    }

    // 2. Fallback to browser language
    if (typeof navigator !== 'undefined' && navigator.language) {
      if (navigator.language.startsWith('en')) {
        return 'en';
      }
    }

    return 'fr';
  });

  const setLang = (newLang) => {
    if (newLang === 'fr' || newLang === 'en') {
      setLangState(newLang);
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
      } catch {
        // Ignore localStorage error
      }
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'fr'
      ? 'Tanguy Bouchut - Portfolio & CV | Systèmes Embarqués'
      : 'Tanguy Bouchut - Portfolio & Resume | Embedded Systems';
  }, [lang]);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
