import React, { useState, useRef, useEffect } from "react";
import './HeaderBar.css';
import { useTranslation } from "react-i18next";

const HeaderBar = () => {
  const { t, i18n } = useTranslation();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showUsefulMenu, setShowUsefulMenu] = useState(false);
  const langRef = useRef(null);
  const usefulRef = useRef(null);

  const languages = [
    { code: 'en', flag: '/flags/en.png', label: 'EN' },
    { code: 'bg', flag: '/flags/bg.png', label: 'BG' },
    { code: 'de', flag: '/flags/de.png', label: 'DE' },
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setShowLangMenu(false);
  };

  //----- Close the drop menu when you click outside of the drop menu 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setShowLangMenu(false);
      }
      if (usefulRef.current && !usefulRef.current.contains(event.target)) {
        setShowUsefulMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  //------

  return (
    <div className="header-bar">
      <h1>
        <a href="/" className="logo">
          <img src="/NG_03.png" height={65} alt="Nikea GLOBAL Ltd." className="logo-img" />
        </a>
      </h1>
      <nav>
        <ul>

          <li className="home-href"><a href="/">{t("home")}</a></li>




          <li className="services-href"><a href="/services">{t("services")}</a></li>

          <li className="contact-href"><a href="/contact">{t("contact")}</a></li>
          <li className="about-href"><a href="/about">{t("about")}</a></li>
          <li className="useful-dropdown" ref={usefulRef}>
  <span className="dropdown-toggle" onClick={() => setShowUsefulMenu(!showUsefulMenu)}>
    {t("useful")}
  </span>
  <ul className={`dropdown-menu ${showUsefulMenu ? "show" : ""}`}>
    <li><a href="/incoterms">{t("incoterms")}</a></li>
    <li><a href="/containers">{t("types-of-containers")}</a></li>
  </ul>
</li>

          <li ref={langRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <img
                src={currentLang.flag}
                alt={currentLang.label}
                style={{ width: 30, height: 20, borderRadius: 3 }}
              />
            </button>

            {showLangMenu && (
              <ul className="lang-dropdown">
                {languages.map((lang) => (
                  <li key={lang.code} onClick={() => changeLanguage(lang.code)}>
                    <img src={lang.flag} alt={lang.label} style={{ width: 20, height: 14 }} />
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBar;
