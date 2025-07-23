import { useRef, useEffect } from "react";
import { useTranslation } from "../../i18n";
import styles from "./ActivityPage.module.css";

const ActivityPage = () => {
  const { t } = useTranslation();
  const videoRefs = useRef([]);

  useEffect(() => {
  videoRefs.current.forEach((video) => {
    video.play().then(() => {
      video.pause();
      video.currentTime = 0;
    }).catch(e => console.error("Video play error:", e));
    
    video.addEventListener("mouseenter", () => video.play());
    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
}, []);

  const servicesData = [
    {
      id: 1,
      title: t("activity.services.marketAccess.title"),
      description: t("activity.services.marketAccess.description"),
    },
    {
      id: 2,
      title: t("activity.services.businessSupport.title"),
      description: t("activity.services.businessSupport.description"),
    },
    {
      id: 3,
      title: t("activity.services.research.title"),
      description: t("activity.services.research.description"),
    },
    {
      id: 4,
      title: t("activity.services.exportImport.title"),
      description: t("activity.services.exportImport.description"),
    },
    {
      id: 5,
      title: t("activity.services.businessMissions.title"),
      description: t("activity.services.businessMissions.description"),
    },
  ];

  const cooperationData = [
    {
      id: 1,
      phase: t("activity.cooperation.start"),
      title: t("activity.cooperation.businessMissions"),
      description: t("activity.cooperation.businessMissionsDescription"),
      image: "/images/activity-office.png",
    },
    {
      id: 2,
      phase: t("activity.cooperation.advancement"),
      title: t("activity.cooperation.directions"),
      description: t("activity.cooperation.directionsDescription"),
      image: "/images/activity-analytics.png",
    },
    {
      id: 3,
      phase: t("activity.cooperation.realization"),
      title: t("activity.cooperation.exportImport"),
      description: t("activity.cooperation.exportImportDescription"),
      image: "/images/activity-plane.png",
    },
  ];

  const specializationData = [
    {
      id: 1,
      title: t("activity.specialization.forums"),
      video: "/videos/forums.mp4",
      poster: "/images/forums-poster.jpg"
    },
    {
      id: 2,
      title: t("activity.specialization.exportImport"),
      video: "/videos/export.mp4",
      poster: "/images/plane.png"
    },
    {
      id: 3,
      title: t("activity.specialization.itProjects"),
      video: "/videos/it.mp4",
      poster: "/images/forums-poster.jpg"
    },
    {
      id: 4,
      title: t("activity.specialization.tourism"),
      video: "/videos/tourism.mp4",
      poster: "/images/forums-poster.jpg"
    },
  ];

  return (
    <div className={styles.container}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <span className={styles.pageTitle}>{t("activity.pageName")}</span>
        <h2 className={styles.companyName}>{t("activity.pageTitle")}</h2>
      </section>

      {/* Key Services Section */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>{t("activity.keyServices")}</h2>
        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={styles.serviceCard}
              style={{
                gridColumn: index < 3 ? `span 4` : `span 6`,
              }}
            >
              <div className={styles.cardHeader}>
                <h3>{service.title}</h3>
                <span className={styles.cardNumber}>{`0${index + 1}.`}</span>
              </div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cooperation Directions Section */}
      <section className={styles.cooperationSection}>
        <h2 className={styles.sectionTitle}>
          {t("activity.cooperationDirections")}
        </h2>
        <div className={styles.cooperationContainer}>
          {cooperationData.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.cooperationBlock} ${
                index % 2 === 0 ? styles.textFirst : styles.imageFirst
              }`}
            >
              <div className={styles.cooperationText}>
                <div className={styles.phaseContainer}>
                  <span className={styles.phase}>{item.phase}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className={styles.cooperationImage}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.roundedImage}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.specializationSection}>
        <h2 className={styles.sectionTitle}>
          {t("activity.specializationTitle")}
        </h2>
        <div className={styles.specializationWrapper}>
          <div className={styles.specializationGrid}>
            <div className={styles.specializationRow}>
              {specializationData.slice(0, 2).map((item, index) => (
                <div key={item.id} className={styles.specializationItem}>
                  <div className={styles.videoWrapper}>
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={item.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className={styles.specializationVideo}
                    />
                    <h3 className={styles.specializationTitle}>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.specializationRow}>
              {specializationData.slice(2, 4).map((item, index) => (
                <div key={item.id} className={styles.specializationItem}>
                  <div className={styles.videoWrapper}>
                    <video
                      ref={(el) => (videoRefs.current[index + 2] = el)}
                      src={item.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className={styles.specializationVideo}
                    />
                    <h3 className={styles.specializationTitle}>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityPage;
