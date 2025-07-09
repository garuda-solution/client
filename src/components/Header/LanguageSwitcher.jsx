import styles from "./Header.module.css";
import ukFlag from "../../assets/usd-flag.svg";
import ruFlag from "../../assets/ru-flag.svg";

const LanguageSwitcher = ({ lang, setLang }) => {
  const languages = [
    { code: "ru", name: "Русский", flag: ruFlag },
    { code: "en", name: "English", flag: ukFlag },
  ];

  return (
    <div className={styles.languageSwitcher}>
      {languages.map((language) => (
        <button
          key={language.code}
          className={`${styles.languageButton} ${
            lang === language.code ? styles.active : ""
          }`}
          onClick={() => setLang(language.code)}
          aria-label={`Switch to ${language.name}`}
        >
          <img
            src={language.flag}
            alt={language.code}
            className={styles.languageFlag}
          />
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
