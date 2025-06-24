import styles from "./Header.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

import usdFlag from "../../assets/usd-flag.svg";
import eurFlag from "../../assets/eur-flag.svg";
import cnyFlag from "../../assets/cny-flag.svg";
import clock from "../../assets/clock.svg";

const Header = () => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState("");

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

        console.log(ratesData);
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

  const formatRate = (value) => {
    return value ? value.toFixed(2).replace(".", ",") : "00,00";
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Гаруда Солюшн</div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/">О компании</a>
            </li>
            <li>
              <a href="/about">Деятельность</a>
            </li>
            <li>
              <a href="/partners">Сотрудничество</a>
            </li>
            <li>
              <a href="/contacts">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className={styles.rightHeaderContainer}>
          <div className={styles.clockContainer}>
            <img src={clock} alt="clock" className={styles.clock} />
            <span className={styles.time}>{currentTime}</span>
          </div>
          <div className={styles.currency}>
            <div className={styles.currencyItem}>
              <img src={usdFlag} alt="USD" className={styles.flag} />
              <span>USD / RUB {loading ? "00,00" : formatRate(rates.USD)}</span>
            </div>
            <div className={styles.currencyItem}>
              <img src={eurFlag} alt="EUR" className={styles.flag} />
              <span>EUR / RUB {loading ? "00,00" : formatRate(rates.EUR)}</span>
            </div>
            <div className={styles.currencyItem}>
              <img src={cnyFlag} alt="CNY" className={styles.flag} />
              <span>CNY / RUB {loading ? "00,00" : formatRate(rates.CNY)}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
