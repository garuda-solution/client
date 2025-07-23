import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../../pages/Home/HomePage";
import AboutPage from "../../pages/About/AboutPage";
import ContactsPage from "../../pages/Contacts/ContactsPage";
import Layout from "../Layout/Layout";
import ActivityPage from "../../pages/Activity/ActivityPage";
import CooperationPage from "../../pages/Cooperation/CooperationPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="activity" element={<ActivityPage />} />
        <Route path="cooperation" element={<CooperationPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
