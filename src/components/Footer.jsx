import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-content">
        <p>
          © {currentYear} Tanguy BOUCHUT — {t.footerRights}
        </p>
        <p className="footer-meta">
          {t.builtWith} • Grenoble INP - PHELMA
        </p>
      </div>
    </footer>
  );
}

export default Footer;
