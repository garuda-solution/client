import { useEffect, useState } from "react";

export const translations = {
  ru: {
    header: {
      navAbout: "О компании",
      navActivity: "Деятельность",
      navCooperation: "Сотрудничество",
      navContacts: "Контакты",
    },
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
            "Представительные экономические и отраслевые форумы с участием лидеров рынка в области ИКТ, кибербезопасности, торговли и промышленности",
        },
        export: {
          title: "Экспорт и импорт",
          description:
            "Обеспечиваем полное сопровождение экспортных и импортных сделок продовольственной, сельскохозяйственной и иной отраслевой продукции",
        },
        it: {
          title: "IT проекты",
          description:
            "Успешные проекты по выходу российских вендоров на зарубежные рынки с проведением анализа целевой аудитории",
        },
        tourism: {
          title: "Туризм",
          description:
            "Содействуем развитию деятельности российских игроков на новых рынках, предоставляем комплексную поддержку",
        },
      },
      contactUs: "Связаться с нами",
      trustUs: "Нам доверяют",
      news: "Новости",
      readMore: "Читать далее",
      readLess: "Свернуть",
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
    activity: {
      pageName: "Деятельность",
      pageTitle: "Гаруда Солюшн",
      keyServices: "Ключевые услуги",
      services: {
        marketAccess: {
          title: "Доступ к рынкам",
          description:
            "Обеспечиваем доступ к международным рынкам и качественной сети контрагентов для реализации коммерческих задач",
        },
        businessSupport: {
          title: "Деловое сопровождение",
          description:
            "Предоставляем консалтинговую, юридическую и административную поддержку на всех этапах проекта",
        },
        research: {
          title: "Исследования и аналитика",
          description:
            "Проводим социологические и отраслевые исследования для принятия обоснованных управленческих решений",
        },
        exportImport: {
          title: "Экспорт/импорт",
          description:
            "Обеспечиваем полное сопровождение экспортных и импортных сделок продовольственной, сельскохозяйственной и иной отраслевой продукции",
        },
        businessMissions: {
          title: "Бизнес-миссии",
          description:
            "Представительные экономические и отраслевые форумы с участием лидеров рынка в области ИКТ, кибербезопасности, торговли и промышленности",
        },
      },
      cooperationDirections: "Направления сотрудничества",
      cooperation: {
        start: "НАЧАЛО",
        advancement: "ПРОДВИЖЕНИЕ",
        realization: "РЕАЛИЗАЦИЯ",
        businessMissions: "Бизнес-миссии",
        businessMissionsDescription:
          "Компания предлагает организацию бизнес-миссий для своих партнеров. Предоставляем консалтинговую и MICE поддержку, включая планирование встреч, подбор местных компаний и решение логистических вопросов",
        directions: "Направления сотрудничества",
        directionsDescription:
          "Управление проектами в различных отраслях, продвижение продукта на зарубежных рынках. Взаимодействие с ключевыми партнерами в области промышленности и торговли, предлагая комплексные решения и стратегии для реализации деловых интересов Заказчика",
        exportImport: "Экспорт/импорт",
        exportImportDescription:
          "Анализируем тренды, разрабатываем стратегии, оказываем поддержку на всех этапах. Реализуем комплекс мер для успешной реализации ВЭД, взаимодействуя с надежными поставщиками, обеспечивая качество и минимизацию рисков",
      },
      specializationTitle: "Специализируемся",
      specialization: {
        forums: "Форумы и бизнес-миссии",
        exportImport: "Экспорт и импорт",
        itProjects: "IT проекты",
        tourism: "Туризм",
      },
    },
    about: {
      pageName: "Компания",
      pageTitle: "Гаруда Солюшн",
      company: {
        title: "Компания",
        description:
          "Консалтинговая организация с разветвленной сетью партнеров в России и за ее пределами. Мы объединяем усилия деловых, общественных и политических структур с целью успешной реализации проектов любой сложности, оказываем деловое сопровождение инициативам партнеров",
      },
      positioning: {
        title: "Позиционирование",
        paragraphs: [
          "Стремимся к надежному и взаимовыгодному сотрудничеству, формируя бизнес-проекты на международных рынках, используя наработанные решения и стратегии",
          "Предлагаем широкие компетенции, аналитические инструменты и надежных зарубежных партнеров",
          "Обеспечиваем индивидуальный подход и формируем исключительные предложения исходя из целей и потребностей Заказчика",
        ],
      },
      mission: {
        title: "Миссия",
        paragraphs: [
          "Поддерживать рост и развитие совместных проектных-инициатив. Предлагать комплексные решения для достижения ключевых целей и задач Вашего бизнеса",
          "Используем глубокое понимание рынков, административные ресурсы и возможности для развития",
          "Наша цель – поддерживать стратегическое сотрудничество в различных секторах экономики, способствуя устойчивому развитию деловых игроков",
        ],
      },
      photos: {
        meetingText: "Стратегические встречи с международными партнерами",
        analyticsText: "Анализ рынков и разработка стратегий",
      },
    },
    cooperation: {
      pageName: "Сотрудничество",
      pageTitle: "Гаруда Солюшн",
      blocks: {
        consulting: {
          title: "Международный бизнес-консалтинг и сопровождение",
          list1: {
            item1: "Разработка стратегий выхода на зарубежные рынки",
            item2: "Юридическое и административное сопровождение сделок",
            item3:
              "Поддержка экспортно-импортных операций (поиск контрагентов, минимизация рисков, логистика)",
          },
          list2: {
            item1:
              "Социологические, отраслевые и маркетинговые исследования (CAPI, CATI, CAWI, фокус-группы)",
            item2: "Анализ рыночного потенциала и конкурентной среды",
            item3: "Подготовка аналитических отчетов для принятия решений",
          },
        },
        missions: {
          title: "Организация деловых миссий и международных мероприятий",
          list1: {
            item1:
              "Проведение бизнес-миссий (подбор партнеров, MICE, переговоры)",
            item2:
              "Участие и организация форумов, выставок, отраслевых конференций",
            item3: "Содействие в установлении B2B и B2G контактов",
          },
          list2: {
            item1: "Продвижение высокотехнологичных решений",
            item2: "Выход IT-компаний на международные рынки",
            item3: "Поиск дистрибьюторов и интеграторов за рубежом",
            item4: "Маркетинговое сопровождение и позиционирование продукта",
          },
        },
      },
    },
    contacts: {
      pageName: "Контакты",
      pageTitle: "Гаруда Солюшн",
    },
    footer: {
      cooperationTitle: "Открыты к сотрудничеству и деловым предложениям",
      contactLabel: "Связаться",
      questionsLabel: "Вопросы и предложения",
      discussProject: "Обсудим ваш проект?",
      namePlaceholder: "Ваше ФИО",
      positionPlaceholder: "Должность и название компании",
      phonePlaceholder: "Телефон",
      emailPlaceholder: "E-mail",
      submitButton: "Связаться с нами",
      submitting: "Отправка...",
      privacyTextBeforeLink: "Нажимая на кнопку, вы соглашаетесь с ",
      privacyTextAfterLink: "",
      privacyPolicy: "политикой конфиденциальности",
      publicOffer: "Публичная оферта",
      privacyPolicy: "Политика конфиденциальности",
      successMessage:
        "Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.",
      errorMessage:
        "Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.",
      validationError: "Пожалуйста, заполните обязательные поля",
      language: "Язык",
      languages: {
        ru: "Русский",
        en: "English",
      },
    },
  },
  en: {
    header: {
      navAbout: "About the company",
      navActivity: "Activities",
      navCooperation: "Cooperation",
      navContacts: "Contacts",
    },
    home: {
      title: "YOUR GOALS – OUR SOLUTIONS",
      learnMore: "Learn more",
      contact: "Contact us",
      aboutText:
        "Garuda Solution is a reliable partner in international economic affairs. Consulting, analytics, and business support for successful entry into global markets",
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
            "Representative economic and industry forums with participation of market leaders in ICT, cybersecurity, trade and industry",
        },
        export: {
          title: "Export and import",
          description:
            "We provide end-to-end support for export and import transactions of food, agricultural, and other industrial products",
        },
        it: {
          title: "IT projects",
          description:
            "Successful projects for Russian vendors entering foreign markets with target audience analysis",
        },
        tourism: {
          title: "Tourism",
          description:
            "We support the development of Russian players in new markets, providing comprehensive support",
        },
      },
      contactUs: "Contact us",
      trustUs: "Trusted by",
      news: "News",
      readMore: "Read more",
      readLess: "Hide",
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
    activity: {
      pageName: "Activities",
      pageTitle: "of Garuda Solution",
      keyServices: "Key Services",
      services: {
        marketAccess: {
          title: "Access to markets",
          description:
            "We provide access to international markets and a high-quality network of counterparties to implement commercial tasks",
        },
        businessSupport: {
          title: "Business Support",
          description:
            "We provide consulting, legal and administrative support at all stages of the project",
        },
        research: {
          title: "Research and Analytics",
          description:
            "We conduct sociological and industry research to make informed management decisions",
        },
        exportImport: {
          title: "Export/Import",
          description:
            "We provide end-to-end support for export and import transactions of food, agricultural, and other industrial products",
        },
        businessMissions: {
          title: "Business missions and other individual solutions",
          description:
            "Representative economic and industry forums with the participation of market leaders in the field of ICT, cybersecurity, trade and industry. The company acts as a partner of international economic forums and participates in the activities of Intergovernmental Commissions",
        },
      },
      cooperationDirections: "Cooperation Directions",
      cooperation: {
        start: "Starting point",
        advancement: "Promotion",
        realization: "Implementation",
        businessMissions: "Business Missions",
        businessMissionsDescription:
          "The company offers organization of business missions for our partners. We provide consulting and MICE support, including planning meetings, selection of local companies and dealing with logistics issues",
        directions: "Cooperation areas",
        directionsDescription:
          "Project management in various industries, product promotion in foreign markets. Interaction with key partners in industry and trade, offering comprehensive solutions and strategies to implement the Customer's business interests",
        exportImport: "Export/Import",
        exportImportDescription:
          "We analyze trends, develop strategies, provide support at all stages. We make for the successful implementation of foreign economic activity, interacting with reliable suppliers, ensuring quality and minimizing risks",
      },
      specializationTitle: "We Specialize In",
      specialization: {
        forums: "Forums and Business Missions",
        exportImport: "Export and import operations",
        itProjects: "IT Projects",
        tourism: "Tourism",
      },
    },
    about: {
      pageName: "Company",
      pageTitle: "Garuda Solution",
      company: {
        title: "Company",
        description:
          "A consulting organization with an extensive network of partners in Russia and abroad. We unite the efforts of business, public and political structures with the aim of successfully implementing projects of any complexity, and provide business support to partners' initiatives",
      },
      positioning: {
        title: "Positioning",
        paragraphs: [
          "We strive for reliable and mutually beneficial cooperation, forming business projects in international markets using proven solutions and strategies",
          "We offer extensive competencies, analytical tools and reliable foreign partners",
          "We provide an individual approach and create exceptional offers based on the goals and needs of the Customer",
        ],
      },
      mission: {
        title: "Mission",
        paragraphs: [
          "To support the growth and development of joint project initiatives. To offer comprehensive solutions for achieving the key goals and objectives of your business",
          "We use deep market understanding, administrative resources and development opportunities",
          "Our goal is to support strategic cooperation in various sectors of the economy, contributing to the sustainable development of business players",
        ],
      },
      photos: {
        meetingText: "Strategic meetings with international partners",
        analyticsText: "Market analysis and strategy development",
      },
    },
    cooperation: {
      pageName: "Cooperation",
      pageTitle: "with Garuda Solution",
      blocks: {
        consulting: {
          title: "International Business Consulting and Support",
          list1: {
            item1: "Development of strategies for entering foreign markets",
            item2: "Legal and administrative support of transactions",
            item3:
              "Support of export-import operations (counterparty search, risk minimization, logistics)",
          },
          list2: {
            item1:
              "Sociological, industry and marketing research (CAPI, CATI, CAWI, focus groups)",
            item2: "Analysis of market potential and competitive environment",
            item3: "Preparation of analytical reports for decision making",
          },
        },
        missions: {
          title: "Organization of business missions and international events",
          list1: {
            item1:
              "Conducting business missions (partner selection, MICE, negotiations)",
            item2:
              "Participation and organization of forums, exhibitions, industry conferences",
            item3: "Assistance in establishing B2B and B2G contacts",
          },
          list2: {
            item1: "Promotion of high-tech solutions",
            item2: "Entry of IT companies into international markets",
            item3: "Search for distributors and integrators abroad",
            item4: "Marketing support and product positioning",
          },
        },
      },
    },
    contacts: {
      pageName: "Contacts",
      pageTitle: "with Garuda Solution",
    },
    footer: {
      cooperationTitle: "Open to cooperation and business proposals",
      contactLabel: "Contact",
      questionsLabel: "For questions and suggestions",
      discussProject: "Let's discuss your project?",
      namePlaceholder: "Your full name",
      positionPlaceholder: "Position and company name",
      phonePlaceholder: "Phone",
      emailPlaceholder: "E-mail",
      submitButton: "Contact us",
      submitting: "Sending...",
      privacyTextBeforeLink: "By clicking the button, you agree to the ",
      privacyTextAfterLink: "",
      privacyPolicy: "privacy policy",
      publicOffer: "Public offer",
      privacyPolicy: "Privacy policy",
      successMessage:
        "Thank you! Your message has been sent. We will contact you shortly.",
      errorMessage:
        "An error occurred while submitting the form. Please try again later.",
      validationError: "Please fill in the required fields",
      language: "Language",
      languages: {
        ru: "Russian",
        en: "English",
      },
    },
  },
};

export const useTranslation = (initialLang = "ru") => {
  const [language, setLanguage] = useState(() => {
    // Инициализируем язык из localStorage, если он там есть
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || initialLang;
    }
    return initialLang;
  });

  // Функция для изменения языка
  const changeLanguage = (newLanguage) => {
    if (["ru", "en"].includes(newLanguage)) {
      setLanguage(newLanguage);
      localStorage.setItem("language", newLanguage);
      window.location.reload();
    }
  };

  // Слушаем изменения в localStorage для синхронизации между вкладками
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "language") {
        setLanguage(e.newValue || "ru");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const t = (key) => {
    const keys = key.split(".");
    let result = translations[language];

    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) return key;
    }

    return result;
  };

  return {
    t,
    language,
    changeLanguage,
  };
};
