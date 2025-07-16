import styles from "./Header.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import usdFlag from "../../assets/usd-flag.svg";
import eurFlag from "../../assets/eur-flag.svg";
import cnyFlag from "../../assets/cny-flag.svg";
import clock from "../../assets/clock.svg";
import { Link } from "react-router-dom";
import GlobeWidget from "../GlobeWidget/GlobeWidget";
import { useTranslation } from "../../i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t, language, changeLanguage } = useTranslation();
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1204 });

  useEffect(() => {
    const updateMoscowTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateMoscowTime();
    const timeInterval = setInterval(updateMoscowTime, 60000);

    const fetchRates = async () => {
      try {
        const response = await axios.get(
          "https://www.cbr-xml-daily.ru/daily_json.js"
        );
        const data = response.data;

        const ratesData = {
          USD: data.Valute.USD.Value,
          EUR: data.Valute.EUR.Value,
          CNY: data.Valute.CNY.Value,
        };

        setRates(ratesData);
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
    const ratesInterval = setInterval(fetchRates, 3600000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(ratesInterval);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const formatRate = (value) => {
    return value ? value.toFixed(2).replace(".", ",") : "00,00";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link className={styles.logo} to="/">
            <img
              src="/logo.svg"
              alt="Garuda Solution"
              className={styles.logoImage}
            />
          </Link>

          {!isMobile ? (
            <>
              <nav className={styles.nav}>
                <ul>
                  <li>
                    <Link to="/about">{t("header.navAbout")}</Link>
                  </li>
                  <li>
                    <Link to="/activity">{t("header.navActivity")}</Link>
                  </li>
                  <li>
                    <Link to="/cooperation">{t("header.navCooperation")}</Link>
                  </li>
                  <li>
                    <Link to="/contacts">{t("header.navContacts")}</Link>
                  </li>
                </ul>
              </nav>
              <div className={styles.rightHeaderContainer}>
                <LanguageSwitcher lang={language} setLang={changeLanguage} />
                <div className={styles.clockContainer}>
                  <GlobeWidget time={currentTime} />
                  <span className={styles.time}>{currentTime}</span>
                </div>
                <div className={styles.currency}>
                  <div className={styles.currencyItem}>
                    <img src={usdFlag} alt="USD" className={styles.flag} />
                    <span>
                      USD / RUB {loading ? "00,00" : formatRate(rates?.USD)}
                    </span>
                  </div>
                  <div className={styles.currencyItem}>
                    <img src={eurFlag} alt="EUR" className={styles.flag} />
                    <span>
                      EUR / RUB {loading ? "00,00" : formatRate(rates?.EUR)}
                    </span>
                  </div>
                  <div className={styles.currencyItem}>
                    <img src={cnyFlag} alt="CNY" className={styles.flag} />
                    <span>
                      CNY / RUB {loading ? "00,00" : formatRate(rates?.CNY)}
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <button
              className={`${styles.burgerButton} ${
                isMenuOpen ? styles.open : ""
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
            </button>
          )}
        </div>
      </header>

      {isMobile && (
        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <div
            className={styles.mobileMenuContent}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className={styles.mobileNav}>
              <ul>
                <li>
                  <Link to="/about" onClick={toggleMenu}>
                    О компании
                  </Link>
                </li>
                <li>
                  <Link to="/activity" onClick={toggleMenu}>
                    Деятельность
                  </Link>
                </li>
                <li>
                  <Link to="/cooperation" onClick={toggleMenu}>
                    Сотрудничество
                  </Link>
                </li>
                <li>
                  <Link to="/contacts" onClick={toggleMenu}>
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.mobileInfo}>
              <div className={styles.mobileTopRow}>
                <div className={styles.mobileClock}>
                  <GlobeWidget time={currentTime} />
                  <span>{currentTime}</span>
                </div>
                <LanguageSwitcher
                  lang={language}
                  setLang={changeLanguage}
                  mobile
                />
              </div>
              <div className={styles.mobileCurrency}>
                <div className={styles.currencyItem}>
                  <img src={usdFlag} alt="USD" />
                  <span>
                    USD / RUB {loading ? "00,00" : formatRate(rates?.USD)}
                  </span>
                </div>
                <div className={styles.currencyItem}>
                  <img src={eurFlag} alt="EUR" />
                  <span>
                    EUR / RUB {loading ? "00,00" : formatRate(rates?.EUR)}
                  </span>
                </div>
                <div className={styles.currencyItem}>
                  <img src={cnyFlag} alt="CNY" />
                  <span>
                    CNY / RUB {loading ? "00,00" : formatRate(rates?.CNY)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
