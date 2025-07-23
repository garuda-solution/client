import styles from "./HomePage.module.css";
import { useTranslation } from "../../i18n";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNews } from "../../context/NewsContext";

export const handleScrollToContacts = () => {
  document.getElementById("contact-section")?.scrollIntoView({
    behavior: "smooth",
  });
};

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { news, loading, error } = useNews();
  const [expandedNews, setExpandedNews] = useState({});

  const partnersLinks = {
    "/RF/Т8/t8-1.png": "https://t8.ru",
    "/RF/Элвис-НеоТек/logo_102x.png": "https://www.elveesneotek.ru",
    "/RF/ЦентрИнформ/АО ЦентрИнформ-Photoroom.png": "https://center-inform.ru",
    "/RF/Спейс Тревел/logo_rebrand.svg": "https://space-travel.ru",
    "/International/IDEA/2.png": "https://globaldigitalmajority.com",
    "/RF/Лузалес/logo1.png.webp": "https://luzales.ru",
    "/RF/Код безопасности/Логотип_компании_Код_Безопасности_.svg.png":
      "https://www.securitycode.ru",
    "/RF/Деловая Азия/Деловая азия - лого - ru.svg": "#",
    "/International/Inyaland/InyaLand _ Accelerating technology innovations in Myanmar.avif":
      "https://www.inyaland.com",
    "/RF/Астра/logoGroupAstra/Astra-g-color_white.svg": "https://astra.ru",
    "/RF/Аквариус/Logo Eng/Logo_AQ-white.png": "https://www.aq.ru",
    "/RF/RDW Computers/2023-05-16-2mqsr4-RDW-Logo-CMYK.png":
      "https://rdwcomp.ru",
    "/International/7th Computing/o9SXyF4kPWv_4nhtaCnNLF7UNW_ctaPmkL2rgynHdD1Z9500tJx02HGcQLDVJDgWQqKfoVKXOwo=.png":
      "https://www.7thcomputing.com",
    "/International/MDEA/409837576_754309663382003_7232258249357238228_n-Photoroom.png":
      "https://www.mdea.org.mm",
    "/International/Mytel/The_Mytel_Logo-Photoroom.png":
      "https://mytel.com.mm/#/",
    "/International/Ponontle Business Solutions/PONONTLE-GROUP.png":
      "https://ponontle.co.za",
    "/International/UAB/UAB-New-Logo-.-e1736415840696-Photoroom.png":
      "https://www.uab.com.mm",
    "/International/Ассоциация дружбы/logo.png": "http://mrfa.info",
    "/International/МИФЕР/MIFER_Logo-Photoroom.png": "https://mifer.gov.mm/en",
    "/International/UMFCCI/umfcci-logo.png": "https://www.umfcci.com.mm",
    "/International/Минфин Мьянмы/MOPF 2 line s copy (1)_0.png":
      "https://www.mopf.gov.mm",
    "/International/Минтуризм Мьянмы/Logo_of_the_Ministry_of_Hotels_&_Tourism_(Burma).svg.png":
      "https://www.tourism.gov.mm",
    "/International/Минторг Мьянмы/commerce_logo_sep (1).png":
      "https://commerce.gov.mm",
    "/International/Минпром Мьянмы/MOPFI_Logo.png":
      "https://www.industry.gov.mm",
    "/International/MOTC LOGO NEW-Photoroom.png": "https://www.motc.gov.mm",
  };

  const partnersLogos = [
    [
      "/RF/Т8/t8-1.png",
      "/RF/Элвис-НеоТек/logo_102x.png",
      "/RF/ЦентрИнформ/АО ЦентрИнформ-Photoroom.png",
      "/RF/Спейс Тревел/logo_rebrand.svg",
    ],
    [
      "/International/IDEA/2.png",
      "/RF/Лузалес/logo1.png.webp",
      "/RF/Код безопасности/Логотип_компании_Код_Безопасности_.svg.png",
    ],
    [
      "/RF/Деловая Азия/Деловая азия - лого - ru.svg",
      "/International/Inyaland/InyaLand _ Accelerating technology innovations in Myanmar.avif",
      "/RF/Астра/logoGroupAstra/Astra-g-color_white.svg",
      "/RF/Аквариус/Logo Eng/Logo_AQ-white.png",
    ],
  ];

  const partnersLogos2 = [
    [
      "/RF/RDW Computers/2023-05-16-2mqsr4-RDW-Logo-CMYK.png",
      "/International/7th Computing/o9SXyF4kPWv_4nhtaCnNLF7UNW_ctaPmkL2rgynHdD1Z9500tJx02HGcQLDVJDgWQqKfoVKXOwo=.png",
      "/International/MDEA/409837576_754309663382003_7232258249357238228_n-Photoroom.png",
      "/RF/Т8/t8-1.png",
    ],
    [
      "/RF/Элвис-НеоТек/logo_102x.png",
      "/RF/ЦентрИнформ/АО ЦентрИнформ-Photoroom.png",
      "/RF/Спейс Тревел/logo_rebrand.svg",
    ],
    [
      "/International/IDEA/2.png",
      "/RF/Лузалес/logo1.png.webp",
      "/RF/Код безопасности/Логотип_компании_Код_Безопасности_.svg.png",
      "/RF/Деловая Азия/Деловая азия - лого - ru.svg",
    ],
  ];

  const partnersLogos3 = [
    [
      "/International/Mytel/The_Mytel_Logo-Photoroom.png",
      "/International/Ponontle Business Solutions/PONONTLE-GROUP.png",
      "/International/UAB/UAB-New-Logo-.-e1736415840696-Photoroom.png",
      "/International/UMFCCI/umfcci-logo.png",
    ],
    [
      "/International/Ассоциация дружбы/logo.png",
      "/International/Минпром Мьянмы/MOPFI_Logo.png",
      "/International/Минторг Мьянмы/commerce_logo_sep (1).png",
    ],
    [
      "/International/Минтуризм Мьянмы/Logo_of_the_Ministry_of_Hotels_&_Tourism_(Burma).svg.png",
      "/International/Минфин Мьянмы/MOPF 2 line s copy (1)_0.png",
      "/International/MOTC LOGO NEW-Photoroom.png",
      "/International/МИФЕР/MIFER_Logo-Photoroom.png",
    ],
  ];

  const createSlidesForViewport = () => {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1200;

    if (isMobile) {
      // Для мобильных - 2 логотипа в ряду, 3 ряда = 6 логотипов на слайд
      return [
        [
          ["/RF/Т8/t8-1.png", "/RF/Элвис-НеоТек/logo_102x.png"],
          [
            "/RF/ЦентрИнформ/АО ЦентрИнформ-Photoroom.png",
            "/RF/Спейс Тревел/logo_rebrand.svg",
          ],
          ["/International/IDEA/2.png", "/RF/Лузалес/logo1.png.webp"],
        ],
        [
          [
            "/RF/Код безопасности/Логотип_компании_Код_Безопасности_.svg.png",
            "/RF/Деловая Азия/Деловая азия - лого - ru.svg",
          ],
          [
            "/International/Inyaland/InyaLand _ Accelerating technology innovations in Myanmar.avif",
            "/RF/Астра/logoGroupAstra/Astra-g-color_white.svg",
          ],
          [
            "/RF/Аквариус/Logo Eng/Logo_AQ-white.png",
            "/RF/RDW Computers/2023-05-16-2mqsr4-RDW-Logo-CMYK.png",
          ],
        ],
        [
          [
            "/International/7th Computing/o9SXyF4kPWv_4nhtaCnNLF7UNW_ctaPmkL2rgynHdD1Z9500tJx02HGcQLDVJDgWQqKfoVKXOwo=.png",
            "/International/MDEA/409837576_754309663382003_7232258249357238228_n-Photoroom.png",
          ],
          [
            "/International/NewPartner1/logo1.png",
            "/International/NewPartner2/logo2.png",
          ],
          [
            "/International/NewPartner3/logo3.png",
            "/International/NewPartner4/logo4.png",
          ],
        ],
        [
          [
            "/International/NewPartner5/logo5.png",
            "/International/NewPartner6/logo6.png",
          ],
          [
            "/International/NewPartner7/logo7.png",
            "/International/NewPartner8/logo8.png",
          ],
          [
            "/International/NewPartner9/logo9.png",
            "/International/NewPartner10/logo10.png",
          ],
        ],
      ];
    } else if (isTablet) {
      // Для планшетов - 3 логотипа в ряду, 2 ряда = 6 логотипов на слайд
      return [
        [
          [
            "/RF/Т8/t8-1.png",
            "/RF/Элвис-НеоТек/logo_102x.png",
            "/RF/ЦентрИнформ/АО ЦентрИнформ-Photoroom.png",
          ],
          [
            "/RF/Спейс Тревел/logo_rebrand.svg",
            "/International/IDEA/2.png",
            "/RF/Лузалес/logo1.png.webp",
          ],
        ],
        [
          [
            "/RF/Код безопасности/Логотип_компании_Код_Безопасности_.svg.png",
            "/RF/Деловая Азия/Деловая азия - лого - ru.svg",
            "/International/Inyaland/InyaLand _ Accelerating technology innovations in Myanmar.avif",
          ],
          [
            "/RF/Астра/logoGroupAstra/Astra-g-color_white.svg",
            "/RF/Аквариус/Logo Eng/Logo_AQ-white.png",
            "/RF/RDW Computers/2023-05-16-2mqsr4-RDW-Logo-CMYK.png",
          ],
        ],
        [
          [
            "/International/7th Computing/o9SXyF4kPWv_4nhtaCnNLF7UNW_ctaPmkL2rgynHdD1Z9500tJx02HGcQLDVJDgWQqKfoVKXOwo=.png",
            "/International/MDEA/409837576_754309663382003_7232258249357238228_n-Photoroom.png",
            "/International/NewPartner1/logo1.png",
          ],
          [
            "/International/NewPartner2/logo2.png",
            "/International/NewPartner3/logo3.png",
            "/International/NewPartner4/logo4.png",
          ],
        ],
        [
          [
            "/International/NewPartner5/logo5.png",
            "/International/NewPartner6/logo6.png",
            "/International/NewPartner7/logo7.png",
          ],
          [
            "/International/NewPartner8/logo8.png",
            "/International/NewPartner9/logo9.png",
            "/International/NewPartner10/logo10.png",
          ],
        ],
      ];
    }

    // Для десктопной версии возвращаем все три слайда
    return [partnersLogos, partnersLogos2, partnersLogos3];
  };

  const [allSlides, setAllSlides] = useState([
    partnersLogos,
    partnersLogos2,
    partnersLogos3,
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [transitionDirection, setTransitionDirection] = useState("next");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Mobile
        setSlidesToShow(3); // 2 логотипа в ряду × 3 ряда
      } else if (window.innerWidth <= 1200) {
        // Tablet
        setSlidesToShow(2); // 3 логотипа в ряду × 2 ряда
      } else {
        // Desktop
        setSlidesToShow(1); // Оригинальные слайды
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionDirection("next");
      setCurrentSlide((prev) => (prev + 1) % allSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [allSlides.length]);

  useEffect(() => {
    console.log(
      "Current slide:",
      currentSlide,
      "Total slides:",
      allSlides.length
    );
  }, [currentSlide, allSlides.length]);

  const isMobile = window.innerWidth <= 768;
  const newsData = (isMobile ? news.allFilteredNews : news.desktopNews)?.map(
    (item, index) => ({
      id: index + 1,
      title: item.title,
      img: item.image || fallbackImages[index % fallbackImages.length],
      description: item.description || t("home.newsItems.defaultDescription"),
    })
  );

  const toggleNewsExpansion = (id) => {
    setExpandedNews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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

  const competenciesImages = [
    "/images/comp1.png",
    "/images/comp2.png",
    "/images/comp3.png",
    "/images/comp4.png",
    "/images/comp5.png",
    "/images/comp6.png",
  ];

  return (
    <div className={styles.container}>
      <img
        src="/home2.png"
        alt="Фоновое изображение"
        className={styles.heroImage}
        loading="lazy"
      />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{t("home.title")}</h1>
          <div className={styles.buttons}>
            <Link className={styles.primaryButton} to="about">
              <span>{t("home.learnMore")}</span>
              <img src="/u_arrow-white.svg" alt="" className={styles.arrow} />
            </Link>
            <button
              className={styles.secondaryButton}
              onClick={handleScrollToContacts}
            >
              <span>{t("home.contact")}</span>
              <img src="/u_arrow.svg" alt="" className={styles.arrow} />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutCircle}>
          <div>
            <div>
              <img src="/greeting.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.aboutContent}>
          <p>{t("home.aboutText")}</p>
        </div>
      </section>

      <section className={styles.competenciesSection}>
        <h2 className={styles.sectionTitle}>{t("home.competencies")}</h2>
        <div className={styles.competenciesGrid}>
          {t("home.competenciesList").map((item, index) => (
            <div key={index} className={styles.competencyCard}>
              <div className={styles.competencyImageWrapper}>
                <img
                  src={competenciesImages[index]}
                  alt={item}
                  className={styles.competencyImage}
                />
                <div className={styles.competenciesContentWrapper}>
                  <span className={styles.competencyNumber}>{`0${
                    index + 1
                  }`}</span>
                  <h3 className={styles.competencyTitle}>{item}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.moreButton} onClick={() => navigate("about")}>
          {t("home.moreDetails")}
          <img src="/u_arrow-white.svg" alt="" className={styles.arrow} />
        </button>
      </section>

      <section className={styles.partnersSection}>
        <h2 className={styles.sectionTitle}>{t("home.forPartners")}</h2>
        <div className={styles.partnersWrapper}>
          <div className={styles.partnersGrid}>
            {/* Первый ряд - теперь 3 карточки */}
            <div className={styles.partnersRow}>
              {partnersData.slice(0, 2).map((partner, index) => (
                <div key={partner.id} className={styles.partnerCard}>
                  <div className={styles.cardHeader}>
                    <h3>{partner.title}</h3>
                    <span className={styles.cardNumber}>{`0${
                      index + 1
                    }.`}</span>
                  </div>
                  <p>{partner.description}</p>
                </div>
              ))}
              {/* Третий элемент первого ряда с кнопкой */}
              <div className={`${styles.partnerCard} ${styles.buttonCard}`}>
                <button
                  className={styles.contactButton}
                  onClick={handleScrollToContacts}
                >
                  {t("home.contactUs")}
                  <img src="/arrow-right.svg" alt="" className={styles.arrow} />
                </button>
              </div>
            </div>

            {/* Второй ряд - оставляем как было */}
            <div className={styles.partnersRow}>
              {partnersData.slice(2, 4).map((partner, index) => (
                <div key={partner.id} className={styles.partnerCard}>
                  <div className={styles.cardHeader}>
                    <h3>{partner.title}</h3>
                    <span className={styles.cardNumber}>{`0${
                      index + 3
                    }.`}</span>
                  </div>
                  <p>{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.trustSection}>
        <h2 className={styles.sectionTitle}>{t("home.trustUs")}</h2>
        <div className={styles.trustCarousel}>
          <div className={styles.slidesContainer}>
            {allSlides.map((slide, index) => {
              const slideClass =
                index === currentSlide
                  ? styles.active
                  : index === (currentSlide + 1) % allSlides.length
                  ? styles.next
                  : styles.prev;

              return (
                <div
                  key={index}
                  className={`${styles.slide} ${slideClass}`}
                  data-direction={transitionDirection}
                >
                  {slide.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className={`${styles.logosRow} ${
                        rowIndex === 1 ? styles.centerRow : ""
                      }`}
                    >
                      {row.map((logo, logoIndex) => (
                        <Link
                          target="_blank"
                          to={partnersLinks[logo] || "#"}
                          key={logoIndex}
                          className={styles.trustLogo}
                        >
                          <img
                            src={`/partners/logos${logo}`}
                            alt={`Partner logo`}
                            loading="lazy"
                          />
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.newsSection}>
        <h2 className={styles.sectionTitle}>{t("home.news")}</h2>
        <div className={styles.newsContainer}>
          {newsData?.map((news) => (
            <div key={news.id} className={styles.newsCard}>
              <div
                className={styles.newsImage}
                style={{ backgroundImage: `url(${news.img})` }}
                role="img"
                aria-label={news.title}
              ></div>
              <div
                className={`${styles.newsContent} ${
                  expandedNews[news.id] ? styles.expanded : ""
                }`}
              >
                <p className={styles.newsDescription}>{news.description}</p>
                <span
                  className={styles.readButton}
                  onClick={() => toggleNewsExpansion(news.id)}
                >
                  {expandedNews[news.id]
                    ? t("home.readLess")
                    : t("home.readMore")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
