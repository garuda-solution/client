import { useState } from "react";
import styles from "./Footer.module.css";
import { Link, NavLink } from "react-router-dom";
import { API_URL } from "../../utils/constants";
import axios from "axios";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валидация формы
    if (!formData.name || !formData.phone || !formData.email) {
      setSubmitStatus("error");
      setSubmitMessage("Пожалуйста, заполните обязательные поля");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const response = await axios.post(API_URL + "/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время."
        );
        // Очищаем форму после успешной отправки
        setFormData({
          name: "",
          position: "",
          phone: "",
          email: "",
        });
      } else {
        throw new Error("Ошибка при отправке формы");
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className={styles.footer}>
      <div id="contact-section" className={styles.topSection}>
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Ваше ФИО"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="position"
                placeholder="Должность и название компании"
                value={formData.position}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Отправка..." : "Связаться с нами"}
              </button>
              {submitStatus && (
                <p
                  className={
                    submitStatus === "success"
                      ? styles.successMessage
                      : styles.errorMessage
                  }
                >
                  {submitMessage}
                </p>
              )}
            </form>
            <p className={styles.privacy}>
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>

      <div className={styles.dividerWrapper}>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.bottomContainer}>
          <div className={styles.logoColumn}>
            <Link to="/">
              <img
                src="/logo.svg"
                alt="Garuda Solution"
                className={styles.logo}
              />
            </Link>
          </div>

          <div className={styles.documentsColumn}>
            <NavLink to="/public-offer" className={styles.documentLink}>
              Публичная оферта
            </NavLink>
            <NavLink to="/privacy-policy" className={styles.documentLink}>
              Политика конфиденциальности
            </NavLink>
          </div>

          <div className={styles.navColumn}>
            <NavLink to="/about" className={styles.navLink}>
              О компании
            </NavLink>
            <NavLink to="/activity" className={styles.navLink}>
              Деятельность
            </NavLink>
            <NavLink to="/cooperation" className={styles.navLink}>
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
