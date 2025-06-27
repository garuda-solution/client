// i18n.js
export const translations = {
  ru: {
    home: {
      title: "ВАШИ ЦЕЛИ – НАШИ РЕШЕНИЯ",
      learnMore: "Узнать больше",
      contact: "Связаться",
      aboutText:
        "«Гаруда Солюшн» – ваш надежный внешнеэкономический партнер. Консалтинг, аналитика и деловое сопровождение для успешного выхода на международные рынки",
      competencies: "Наши компетенции",
      competenciesList: [
        "Доступ к рынкам",
        "Исследование и аналитика",
        "Деловое сопровождение",
        "Поддержка экспорта и импорта",
        "Маркетинговая локализация",
        "Бизнес-миссии",
      ],
      moreDetails: "Подробнее",
      forPartners: "Для партнеров",
      partners: {
        forums: {
          title: "Форумы и бизнес-миссии",
          description:
            "Представительные экономические и отраслевые форумы с участием лидеров рынка в области ИКТ, кибербезопасности, торговли и промышленности.",
        },
        export: {
          title: "Экспорт и импорт",
          description:
            "Обеспечиваем полное сопровождение экспортных и импортных сделок продовольственной, сельскохозяйственной и иной отраслевой продукции",
        },
        it: {
          title: "IT проекты",
          description:
            "Успешные проекты по выходу российских вендоров на зарубежные рынки с проведением анализа целевой аудитории.",
        },
        tourism: {
          title: "Туризм",
          description:
            "Содействуем развитию деятельности российских игроков на новых рынках, предоставляем комплексную поддержку.",
        },
      },
      contactUs: "Связаться с нами",
      trustUs: "Нам доверяют",
      news: "Новости",
      readMore: "Читать далее",
      newsItems: [
        {
          title: "Новость 1",
          description:
            "Максим Решетников: сейчас задача – грамотно пройти период охлаждения экономики",
        },
        {
          title: "Новость 2",
          description: "Михаил Мишустин принял участие в конференции ЦИПР-2025",
        },
        {
          title: "Новость 3",
          description: "Вклады уже не те. Банки снижают ставки по депозитам",
        },
        {
          title: "Новость 4",
          description:
            "Максим Решетников: сейчас задача – грамотно пройти период охлаждения экономики",
        },
      ],
    },
  },
  en: {
    home: {
      title: "YOUR GOALS – OUR SOLUTIONS",
      learnMore: "Learn more",
      contact: "Contact us",
      aboutText:
        "«Garuda Solution» is your reliable international trade partner. Consulting, analytics and business support for successful entry into global markets",
      competencies: "Our competencies",
      competenciesList: [
        "Market access",
        "Research and analytics",
        "Business support",
        "Export and import assistance",
        "Marketing localization",
        "Business missions",
      ],
      moreDetails: "More details",
      forPartners: "For partners",
      partners: {
        forums: {
          title: "Forums and business missions",
          description:
            "Representative economic and industry forums with participation of market leaders in ICT, cybersecurity, trade and industry.",
        },
        export: {
          title: "Export and import",
          description:
            "We provide full support for export and import transactions of food, agricultural and other industry products",
        },
        it: {
          title: "IT projects",
          description:
            "Successful projects for Russian vendors entering foreign markets with target audience analysis.",
        },
        tourism: {
          title: "Tourism",
          description:
            "We support the development of Russian players in new markets, providing comprehensive support.",
        },
      },
      contactUs: "Contact us",
      trustUs: "Trusted by",
      news: "News",
      readMore: "Read more",
      newsItems: [
        {
          title: "News 1",
          description:
            "Maxim Reshetnikov: the current task is to competently navigate the economic cooling period",
        },
        {
          title: "News 2",
          description:
            "Mikhail Mishustin participated in the CIPR-2025 conference",
        },
        {
          title: "News 3",
          description:
            "Deposits are not what they used to be. Banks are lowering deposit rates",
        },
        {
          title: "News 4",
          description:
            "Maxim Reshetnikov: the current task is to competently navigate the economic cooling period",
        },
      ],
    },
  },
};

export const useTranslation = (lang = "ru") => {
  return (key) => {
    const keys = key.split(".");
    let result = translations[lang];

    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) return key;
    }

    return result;
  };
};
