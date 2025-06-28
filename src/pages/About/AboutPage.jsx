import React from "react";
import { useTranslation } from "../../i18n";
import styles from "./AboutPage.module.css";

const AboutPage = ({ lang = "ru" }) => {
  const t = useTranslation(lang);

  const aboutData = {
    company: {
      title: t("about.company.title"),
      description: t("about.company.description"),
    },
    positioning: {
      title: t("about.positioning.title"),
      firstParagraph: t("about.positioning.paragraphs")[0],
    },
    mission: {
      title: t("about.mission.title"),
      firstParagraph: t("about.mission.paragraphs")[0],
    },
  };

  const positioningPhotos = [
    {
      id: 1,
      src: "/images/about/photo1.png",
      alt: "Office",
      height: 250,
    },
    {
      id: 2,
      src: "/images/about/rectangle.png",
      alt: "Meeting",
      height: 203,
      title: t("about.positioning.paragraphs")[1],
      icon: "/images/about/icon1.svg",
    },
    {
      id: 3,
      src: "/images/about/rectangle.png",
      alt: "Analytics",
      height: 203,
      title: t("about.positioning.paragraphs")[2],
      icon: "/images/about/icon2.svg",
    },
    {
      id: 4,
      src: "/images/about/photo2.png",
      alt: "Team",
      height: 250,
    },
  ];

  const missionPhotos = [
    {
      id: 1,
      src: "/images/about/photo3.png",
      alt: "Strategy",
      height: 250,
    },
    {
      id: 2,
      src: "/images/about/rectangle.png",
      alt: "Development",
      height: 203,
      title: t("about.mission.paragraphs")[1],
      icon: "/images/about/icon3.svg",
    },
    {
      id: 3,
      src: "/images/about/rectangle.png",
      alt: "Cooperation",
      height: 203,
      title: t("about.mission.paragraphs")[2],
      icon: "/images/about/icon4.svg",
    },
    {
      id: 4,
      src: "/images/about/photo4.png",
      alt: "Partners",
      height: 250,
    },
  ];

  return (
    <div className={styles.container}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <span className={styles.pageTitle}>{t("about.pageName")}</span>
        <h2 className={styles.companyName}>{t("about.pageTitle")}</h2>
        <p className={styles.companyDescription}>
          {aboutData.company.description}
        </p>
      </section>

      {/* Positioning Section */}
      <section className={styles.textSection}>
        <h2 className={styles.sectionTitle}>{aboutData.positioning.title}</h2>
        <p className={styles.sectionParagraph}>
          {aboutData.positioning.firstParagraph}
        </p>
      </section>

      {/* Positioning Photo Grid Section */}
      <section className={styles.photoGrid}>
        {positioningPhotos.map((photo) => (
          <div
            key={photo.id}
            className={`${styles.photoContainer} ${
              photo.title ? styles.specialPhoto : ""
            }`}
            style={{ height: `${photo.height}px` }}
          >
            <img src={photo.src} alt={photo.alt} className={styles.photo} />
            {photo.title && (
              <div className={styles.specialContent}>
                <div className={styles.iconContainer}>
                  <img src={photo.icon} alt="" className={styles.icon} />
                </div>
                <p className={styles.specialText}>{photo.title}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Mission Section */}
      <section className={styles.textSection}>
        <h2 className={styles.sectionTitle}>{aboutData.mission.title}</h2>
        <p className={styles.sectionParagraph}>
          {aboutData.mission.firstParagraph}
        </p>
      </section>

      {/* Mission Photo Grid Section */}
      <section className={styles.photoGrid}>
        {missionPhotos.map((photo) => (
          <div
            key={photo.id}
            className={`${styles.photoContainer} ${
              photo.title ? styles.specialPhoto : ""
            }`}
            style={{ height: `${photo.height}px` }}
          >
            <img src={photo.src} alt={photo.alt} className={styles.photo} />
            {photo.title && (
              <div className={styles.specialContent}>
                <div className={styles.iconContainer}>
                  <img src={photo.icon} alt="" className={styles.icon} />
                </div>
                <p className={styles.specialText}>{photo.title}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutPage;
