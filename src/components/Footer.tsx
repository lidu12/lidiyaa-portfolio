import { personalInfo, navLinks } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__brand-block">
            <div className="footer__brand">
              <span className="footer__monogram">L</span>
              <span className="footer__name">{personalInfo.name}</span>
            </div>
            <p className="footer__tagline">
              Computer Science Student & Software Developer · Addis Ababa University
            </p>
          </div>

          <div className="footer__nav-block">
            <span className="footer__heading">Navigation</span>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__social-block">
            <span className="footer__heading">Connect</span>
            <ul className="footer__links">
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  GitHub (@lidu12)
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  LinkedIn (lidiya-fetene)
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className="footer__link">
                  {personalInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} {personalInfo.name}. Designed & built with care.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer__back-to-top"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
