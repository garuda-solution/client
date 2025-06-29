import React from "react";
import Icon from "../../components/Icon/Icon";
import styles from "./HomePage.module.css";
import { useTranslation } from "../../i18n";

const HomePage = ({ lang = "ru" }) => {
  const t = useTranslation(lang);

  const partnersData = [
    {
      id: 1,
      title: t("home.partners.forums.title"),
      description: t("home.partners.forums.description"),
    },
    {
      id: 2,
      title: t("home.partners.export.title"),
      description: t("home.partners.export.description"),
    },
    {
      id: 3,
      title: t("home.partners.it.title"),
      description: t("home.partners.it.description"),
    },
    {
      id: 4,
      title: t("home.partners.tourism.title"),
      description: t("home.partners.tourism.description"),
    },
  ];

  const newsData = t("home.newsItems").map((item, index) => ({
    id: index + 1,
    title: item.title,
    img: [
      "https://rscf.ru/upload/resize_cache/iblock/a22/500_500_1/tocwoh0c7skihvs4pefcc0slsl0wwfkv.webp",
      "https://rscf.ru/upload/resize_cache/iblock/d38/500_500_1/4wy6r9culekj1f9tj57angg6nww56a3m.jpg",
      "https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2022-07/RIAN_8232294.HR_.ru%20copy.jpg?itok=UZYqdhvq",
      "https://rscf.ru/upload/resize_cache/iblock/a22/500_500_1/tocwoh0c7skihvs4pefcc0slsl0wwfkv.webp",
    ][index],
    description: item.description,
  }));

  const partnersLogos = [
    "space-travel.svg",
    "t8.svg",
    "heotek.svg",
    "rdw.svg",
    "inform.svg",
    "delovaya-azia.svg",
    "idea.svg",
    "aquarius.svg",
    "astra.svg",
    "kod-bezopasnosti.svg",
    "luzales.svg",
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{t("home.title")}</h1>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>
              <span>{t("home.learnMore")}</span>
              <img
                src="/u_arrow.svg"
                alt=""
                className={styles.arrow}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </button>
            <button className={styles.secondaryButton}>
              <span>{t("home.contact")}</span>
              <img src="/u_arrow.svg" alt="" className={styles.arrow} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutCircle}></div>
        <p>{t("home.aboutText")}</p>
      </section>

      {/* Competencies Section */}
      <section className={styles.competencies}>
        <h2>{t("home.competencies")}</h2>
        <div className={styles.grid}>
          {t("home.competenciesList").map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
        <button className={styles.moreButton}>{t("home.moreDetails")}</button>
      </section>

      {/* Partners Section */}
      <section className={styles.partnersSection}>
        <h2>{t("home.forPartners")}</h2>
        <div className={styles.partnersContainer}>
          <div className={styles.partnersGrid}>
            {partnersData.map((partner, index) => (
              <div
                key={partner.id}
                className={styles.partnerCard}
                style={{
                  alignSelf: index < 2 ? "flex-start" : "flex-end",
                }}
              >
                <div className={styles.cardHeader}>
                  <h3>{partner.title}</h3>
                  <span className={styles.cardNumber}>{`0${index + 1}.`}</span>
                </div>
                <p>{partner.description}</p>
              </div>
            ))}
          </div>
          <button className={styles.contactButton}>
            {t("home.contactUs")}
          </button>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trustSection}>
        <h2>{t("home.trustUs")}</h2>
        <div className={styles.trustLogos}>
          {/* First row - 4 logos */}
          <div className={styles.logosRow}>
            {partnersLogos.slice(0, 4).map((logo, index) => (
              <div key={index} className={styles.trustLogo}>
                <img
                  src={`/partners/${logo}`}
                  alt={`Partner ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Second row - 3 logos */}
          <div className={styles.logosRow}>
            {partnersLogos.slice(4, 7).map((logo, index) => (
              <div key={index + 4} className={styles.trustLogo}>
                <img
                  src={`/partners/${logo}`}
                  alt={`Partner ${index + 5}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Third row - 4 logos */}
          <div className={styles.logosRow}>
            {partnersLogos.slice(7, 11).map((logo, index) => (
              <div key={index + 7} className={styles.trustLogo}>
                <img
                  src={`/partners/${logo}`}
                  alt={`Partner ${index + 8}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className={styles.newsSection}>
        <h2>{t("home.news")}</h2>
        <div className={styles.newsContainer}>
          {newsData.map((news) => (
            <div key={news.id} className={styles.newsCard}>
              <div
                className={styles.newsImage}
                style={{ backgroundImage: `url(${news.img})` }}
                role="img"
                aria-label={news.title}
              ></div>
              <div className={styles.newsContent}>
                <p>{news.description}</p>
                <span className={styles.readButton}>{t("home.readMore")}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
