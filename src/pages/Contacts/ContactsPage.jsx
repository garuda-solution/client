import { useTranslation } from "../../i18n";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {/* Page Header */}
      {/* <section className={styles.pageHeader}>
        <span className={styles.pageTitle}>{t("contacts.pageName")}</span>
        <h2 className={styles.companyName}>{t("contacts.pageTitle")}</h2>
      </section> */}
    </div>
  );
};

export default ContactsPage;
