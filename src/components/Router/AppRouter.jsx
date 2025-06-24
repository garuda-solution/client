import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../../pages/Home/HomePage";
import AboutPage from "../../pages/About/AboutPage";
import ContactsPage from "../../pages/Contacts/ContactsPage";
import Layout from "../Layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
