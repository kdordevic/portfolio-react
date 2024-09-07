import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { Trans, useTranslation } from "react-i18next";
import "../style/Navbar.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
export default function Navbar() {
  const [toogle, setToogle] = useState(true);
  const { t } = useTranslation();
  const menuToogle = () => {
    setToogle(!toogle);
  };
  const handleLanguageSwitcherClick = (e) => {
    e.stopPropagation();
  };
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className={toogle ? "big-screen-nav" : "small-screen-nav"}>
      <div className={toogle ? "menu" : "no-menu"} onClick={menuToogle}>
        <div className="menu-line-1"></div>
        <div className="menu-line-2"></div>
        <div className="menu-line-3"></div>
      </div>
      <nav className="nav" onClick={menuToogle}>
        <div className="main-nav">
          <div className="logo-container">
            <Link to="/" className="navlink logo">
              
            </Link>
          </div>
          <div className="links">
            <Link to="/" className="navlink">
              {/* <Trans i18nKey="home.home"></Trans> */}
              {t("home.home")}
            </Link>
            <Link to="/about" className="navlink">
              {/* <Trans i18nKey="about"></Trans> */}
              {t("about.about")}
            </Link>
            <Link to="/works" className="navlink" >
              {/* <Trans i18nKey="Work"></Trans> */}
              {t("works.works")}
            </Link>
            <Link to="/contact" className="navlink">
              {/* <Trans i18nKey="Contact"></Trans> */}
              {t("contact.contact")}
            </Link>
            <Link to="/services" className="navlink">
              {/* <Trans i18nKey="Services"></Trans> */}
              {t("services.services")}
            </Link>
            <span onClick={handleLanguageSwitcherClick}>
              <LanguageSwitcher />
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
