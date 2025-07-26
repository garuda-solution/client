import { useState } from "react";
import styles from "./Footer.module.css";
import { Link, NavLink } from "react-router-dom";
import { API_URL } from "../../utils/constants";
import axios from "axios";
import { useTranslation } from "../../i18n";

const Footer = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      setSubmitStatus("error");
      setSubmitMessage(t("footer.validationError"));
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
        setSubmitMessage(t("footer.successMessage"));
        setFormData({
          name: "",
          position: "",
          phone: "",
          email: "",
        });
      } else {
        throw new Error("Form submission error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage(t("footer.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className={styles.footer}>
      <div id="contact-section" className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <h3>{t("footer.cooperationTitle")}</h3>
            <div>
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>
                  {t("footer.contactLabel")}
                </span>
                <p className={styles.contactValue}>+7 495 147 08 76</p>
              </div>
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>
                  {t("footer.questionsLabel")}
                </span>
                <p className={styles.contactValue}>main@garudasolution.ru</p>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3>{t("footer.discussProject")}</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder={t("footer.namePlaceholder")}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="position"
                placeholder={t("footer.positionPlaceholder")}
                value={formData.position}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder={t("footer.phonePlaceholder")}
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t("footer.emailPlaceholder")}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting
                  ? t("footer.submitting")
                  : t("footer.submitButton")}

                <img
                  src="/arrow-right-blue.svg"
                  alt=""
                  className={styles.arrow}
                />
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
              {t("footer.privacyTextBeforeLink")}
              <Link
                to="/Политика_в_отношении_обработки_персональных_данных.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.privacyLink}
              >
                {t("footer.privacyPolicy")}
              </Link>
              {t("footer.privacyTextAfterLink")}
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
            <Link
              to="/Политика_в_отношении_обработки_персональных_данных.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.documentLink}
            >
              {t("footer.privacyPolicy")}
            </Link>
          </div>

          <div className={styles.navColumn}>
            <NavLink
              to="/about"
              className={styles.navLink}
              onClick={scrollToTop}
            >
              {t("header.navAbout")}
            </NavLink>
            <NavLink
              to="/activity"
              className={styles.navLink}
              onClick={scrollToTop}
            >
              {t("header.navActivity")}
            </NavLink>
            <NavLink
              to="/cooperation"
              className={styles.navLink}
              onClick={scrollToTop}
            >
              {t("header.navCooperation")}
            </NavLink>
            <NavLink
              to="/contacts"
              className={styles.navLink}
              onClick={scrollToTop}
            >
              {t("header.navContacts")}
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
