import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h3>Открыты к сотрудничеству и деловым предложениям</h3>
          <p>Связаться</p>
          <p>+7 495 147 08 76</p>
          <p>Вопросы и предложения main@garudasolution.ru</p>
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

      <div className={styles.bottom}>
        <div className={styles.copyright}>© Гаруда Солюшн</div>
        <nav className={styles.footerNav}>
          <a href="/">О компании</a>
          <a href="/about">Деятельность</a>
          <a href="/partners">Сотрудничество</a>
          <a href="/contacts">Контакты</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
