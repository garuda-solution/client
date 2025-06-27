import styles from "./Footer.module.css";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Верхняя часть футера с контактной информацией и формой */}
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <h3>Открыты к сотрудничеству и деловым предложениям</h3>
            <div className={styles.contactBlock}>
              <span className={styles.contactLabel}>Связаться</span>
              <p className={styles.contactValue}>+7 495 147 08 76</p>
            </div>
            <div className={styles.contactBlock}>
              <span className={styles.contactLabel}>Вопросы и предложения</span>
              <p className={styles.contactValue}>main@garudasolution.ru</p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3>Обсудим ваш проект?</h3>
            <form>
              <input type="text" placeholder="Ваше ФИО" />
              <input type="text" placeholder="Должность и название компании" />
              <input type="tel" placeholder="Телефон" />
              <input type="email" placeholder="E-mail" />
              <button type="submit">Связаться с нами</button>
            </form>
            <p className={styles.privacy}>
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomContainer}>
          {/* Логотип слева */}
          <div className={styles.logoColumn}>
            <Link to="/">
              <img
                src="/logo.svg"
                alt="Garuda Solution"
                className={styles.logo}
              />
            </Link>
          </div>

          {/* Центральная колонка с документами */}
          <div className={styles.documentsColumn}>
            <NavLink to="/public-offer" className={styles.documentLink}>
              Публичная оферта
            </NavLink>
            <NavLink to="/privacy-policy" className={styles.documentLink}>
              Политика конфиденциальности
            </NavLink>
          </div>

          {/* Правая колонка с навигацией */}
          <div className={styles.navColumn}>
            <NavLink to="/" className={styles.navLink}>
              О компании
            </NavLink>
            <NavLink to="/about" className={styles.navLink}>
              Деятельность
            </NavLink>
            <NavLink to="/partners" className={styles.navLink}>
              Сотрудничество
            </NavLink>
            <NavLink to="/contacts" className={styles.navLink}>
              Контакты
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
