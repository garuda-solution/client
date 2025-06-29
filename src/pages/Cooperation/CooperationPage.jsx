import { useTranslation } from "../../i18n";
import styles from "./CooperationPage.module.css";

const CooperationPage = ({ lang = "ru" }) => {
  const t = useTranslation(lang);

  return (
    <div className={styles.container}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <span className={styles.pageTitle}>{t("cooperation.pageName")}</span>
        <h2 className={styles.companyName}>{t("cooperation.pageTitle")}</h2>
      </section>
    </div>
  );
};

export default CooperationPage;
