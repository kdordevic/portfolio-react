import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: {
            home: "home",
            heading: "Welcome",
          },
          about: {
            about: "About",
            heading: "About me",
          },
          works: {
            works: "Projects",
            heading: "Projects",
          },
          contact: {
            contact: "Contact",
            heading: "Contact",
          },
          services: {
            services: "Services",
            heading: "Services",
          },
        },
      },
      sr: {
        translation: {
          home: {
            home: "naslovna",
            heading: "Dobrodosli",
          },
          about: {
            about: "O meni",
            heading: "O meni",
          },
          works: {
            works: "Projekti",
            heading: "Moji projekti",
          },
          contact: {
            contact: "Kontakt",
            heading: "Kontakt",
          },
          services: {
            services: "Usluge",
            heading: "Usluge",
          },
        },
      },
      fr: {
        translation: {
          home: {
            home: "Accueil",
            heading: "Bienvenu",
          },
          about: {
            about: "About",
            heading: "About me",
          },
          works: {
            works: "Projets",
            heading: "Mes projets",
          },
          contact: {
            contact: "Kontakt",
            heading: "Kontakt",
          },
          services: {
            services: "Services",
            heading: "Services",
          },
        },
      },
    },
  });

export default i18n;


