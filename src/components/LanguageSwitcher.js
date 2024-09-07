import { React, useState } from "react";
import { useTranslation } from "react-i18next";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LanguageSwitcher = () => {
  const [toogle, setToogle] = useState(true);

  const { i18n } = useTranslation();

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
    setToogle(!toogle);
  };
  const menuToogle = () => {
    setToogle(!toogle);
  };

  return (
    <div className={toogle ? "no-lang" : "lang"} onClick={() => menuToogle}>
      <div className="flex-col">
        <button
          onClick={() => handleLanguageChange("")}
          className="open-lang"
          style={{ cursor: "pointer" }}
        >
          {/* Lang &#x25BC; */}
          <FontAwesomeIcon icon={faGlobe} />
          <span> &#9661;</span>
        </button>
        <button
          className="sr"
          onClick={() => handleLanguageChange("sr")}
          style={{ cursor: "pointer" }}
        >
          Sr
        </button>
        <button
          className="en"
          onClick={() => handleLanguageChange("en")}
          style={{ cursor: "pointer" }}
        >
          En
        </button>
        <button
          className="fr"
          onClick={() => handleLanguageChange("fr")}
          style={{ cursor: "pointer" }}
        >
          Fr
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

