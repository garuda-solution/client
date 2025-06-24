import styles from "./HomePage.module.css";

const HomePage = () => {
  const partnersData = [
    {
      id: 1,
      title: "Форумы и бизнес-миссии",
      description:
        "Представительные экономические и отраслевые форумы с участием лидеров рынка в области ИКТ, кибербезопасности, торговли и промышленности. Компания выступает партнером международных экономических форумов и участвует в деятельности Межправительственных комиссий",
    },
    {
      id: 2,
      title: "Экспорт и импорт",
      description:
        "Обеспечиваем полное сопровождение экспортных и импортных сделок продовольственной, сельскохозяйственной и иной отраслевой продукции",
    },
    {
      id: 3,
      title: "IT проекты",
      description:
        "Успешные проекты по выходу российских вендоров на зарубежные рынки с проведением анализа целевой аудитории, установления партнерства с дистрибьюторами и реализацией мультиканального маркетинга. Закрепляя позиции на рынке, узнаваемость бренда и формирования стратегии развития",
    },
    {
      id: 4,
      title: "Туризм",
      description:
        "Содействуем развитию деятельности российских игроков на новых рынках, предоставляем комплексную поддержку во взаимодействии с регуляторами, создаем уникальные возможности и обеспечиваем участие на отраслевых и региональных площадках",
    },
  ];

  const newsData = [
    {
      id: 1,
      title: "Новость 1",
      img: "https://rscf.ru/upload/resize_cache/iblock/a22/500_500_1/tocwoh0c7skihvs4pefcc0slsl0wwfkv.webp",
      description:
        "Максим Решетников: сейчас задача – грамотно пройти период охлаждения экономики",
    },
    {
      id: 2,
      title: "Новость 2",
      img: "https://rscf.ru/upload/resize_cache/iblock/d38/500_500_1/4wy6r9culekj1f9tj57angg6nww56a3m.jpg",
      description: "Михаил Мишустин принял участие в конференции ЦИПР-2025",
    },
    {
      id: 3,
      title: "Новость 3",
      img: "https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2022-07/RIAN_8232294.HR_.ru%20copy.jpg?itok=UZYqdhvq",
      description: "Вклады уже не те.  Банки снижают ставки  по депозитам",
    },
    {
      id: 4,
      title: "Новость 4",
      img: "https://rscf.ru/upload/resize_cache/iblock/a22/500_500_1/tocwoh0c7skihvs4pefcc0slsl0wwfkv.webp",
      description: "Максим Решетников: сейчас задача – грамотно пройти период охлаждения экономики",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Герой-секция */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>ВАШИ ЦЕЛИ – НАШИ РЕШЕНИЯ</h1>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Узнать больше</button>
            <button className={styles.secondaryButton}>Связаться</button>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutCircle}></div>
        <p>
          «Гаруда Солюшн» – ваш надежный внешнеэкономический партнер.
          Консалтинг, аналитика и деловое сопровождение для успешного выхода на
          международные рынки
        </p>
      </section>

      <section className={styles.competencies}>
        <h2>Наши компетенции</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Доступ к рынкам</h3>
          </div>
          <div className={styles.card}>
            <h3>Исследование и аналитика</h3>
          </div>
          <div className={styles.card}>
            <h3>Деловое сопровождение</h3>
          </div>
          <div className={styles.card}>
            <h3>Поддержка экспорта и импорта</h3>
          </div>
          <div className={styles.card}>
            <h3>Маркетинговая локализация</h3>
          </div>
          <div className={styles.card}>
            <h3>Бизнес-миссии</h3>
          </div>
        </div>
        <button className={styles.moreButton}>Подробнее</button>
      </section>

      <section className={styles.partnersSection}>
        <h2>Для партнеров</h2>
        <div className={styles.partnersContainer}>
          <div className={styles.partnersGrid}>
            {partnersData.map((partner, index) => (
              <div key={partner.id} className={styles.partnerCard}>
                <div className={styles.cardHeader}>
                  <h3>{partner.title}</h3>
                  <span className={styles.cardNumber}>{`0${index + 1}`}</span>
                </div>
                <p>{partner.description}</p>
              </div>
            ))}
          </div>
          <button className={styles.contactButton}>Связаться с нами</button>
        </div>
      </section>

      <section className={styles.trustSection}>
        <h2>Нам доверяют</h2>
        <div className={styles.trustLogos}>
          {/* Добавьте логотипы компаний */}
          <div className={styles.trustLogo}></div>
          <div className={styles.trustLogo}></div>
          <div className={styles.trustLogo}></div>
          <div className={styles.trustLogo}></div>
          <div className={styles.trustLogo}></div>
        </div>
      </section>

      <section className={styles.newsSection}>
        <h2>Новости</h2>
        <div className={styles.newsContainer}>
          {newsData.map((news) => (
            <div key={news.id} className={styles.newsCard}>
              <div
                className={styles.newsImage}
                style={{ backgroundImage: `url(${news.img})` }}
              ></div>
              <div className={styles.newsContent}>
                <p>{news.description}</p>
                <span className={styles.readButton}>Читать далее</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
