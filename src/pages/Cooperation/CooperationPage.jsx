import { useTranslation } from "../../i18n";
import styles from "./CooperationPage.module.css";

const CooperationPage = () => {
  const { t } = useTranslation();

  const cooperationBlocks = [
    {
      id: 1,
      title: t("cooperation.blocks.consulting.title"),
      firstList: [
        t("cooperation.blocks.consulting.list1.item1"),
        t("cooperation.blocks.consulting.list1.item2"),
        t("cooperation.blocks.consulting.list1.item3"),
      ],
      secondList: [
        t("cooperation.blocks.consulting.list2.item1"),
        t("cooperation.blocks.consulting.list2.item2"),
        t("cooperation.blocks.consulting.list2.item3"),
      ],
      image: "/images/cooperation/consulting.png",
      reverse: true,
    },
    {
      id: 2,
      title: t("cooperation.blocks.missions.title"),
      firstList: [
        t("cooperation.blocks.missions.list1.item1"),
        t("cooperation.blocks.missions.list1.item2"),
        t("cooperation.blocks.missions.list1.item3"),
      ],
      secondList: [
        t("cooperation.blocks.missions.list2.item1"),
        t("cooperation.blocks.missions.list2.item2"),
        t("cooperation.blocks.missions.list2.item3"),
        t("cooperation.blocks.missions.list2.item4"),
      ],
      image: "/images/cooperation/missions.png",
      reverse: false,
    },
  ];

  return (
    <div className={styles.container}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <span className={styles.pageTitle}>{t("cooperation.pageName")}</span>
        <h2 className={styles.companyName}>{t("cooperation.pageTitle")}</h2>
      </section>

      {/* Cooperation Blocks */}
      <div className={styles.cooperationBlockWrapper}>
        {cooperationBlocks.map((block) => (
          <section
            key={block.id}
            className={`${styles.cooperationBlock} ${
              block.reverse ? styles.reverse : ""
            }`}
          >
            <div className={styles.textContent}>
              <h2 className={styles.blockTitle}>{block.title}</h2>
              <ul className={styles.list}>
                {block.firstList.map((item, index) => (
                  <li key={`first-${index}`} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.divider}></div>
              <ul className={styles.list}>
                {block.secondList.map((item, index) => (
                  <li key={`second-${index}`} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.imageContainer}>
              <img
                src={block.image}
                alt={block.title}
                className={styles.blockImage}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CooperationPage;
