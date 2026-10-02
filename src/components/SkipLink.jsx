import { useLanguage } from '../context/LanguageContext';

function SkipLink() {
  const { t } = useLanguage();

  return (
    <a href="#main-content" className="skip-link">
      {t.skipLink}
    </a>
  );
}

export default SkipLink;
