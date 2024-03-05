import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "@layouts/MainLayout";
import HomeLayout from "@/layouts/HomeLayout";
import AuthLayout from "@layouts/AuthLayout";
import AccountLayout from "@layouts/AccountLayout";

import HomePage from "@pages/Landing/HomePage";
import VenuesPage from "@pages/Landing/VenuesPage";
import ContactsPage from "@pages/Landing/ContactsPage";
import DocumentsPage from "@pages/Landing/DocumentsPage";

import AuthPage from "@pages/Auth/AuthPage";

import AccountPage from "@pages/Account/AccountPage";
import MainPage from "@pages/Account/MainPage";
import ProfilePage from "@pages/Account/ProfilePage";
import TeamPage from "@pages/Account/TeamPage";
import ApplicationPage from "@pages/Account/ApplicationPage";

import NotFoundPage from "@pages/Landing/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/venues" element={<VenuesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<AuthPage />} />
      </Route>

      <Route element={<AccountLayout />}>
        <Route path="/account" element={<AccountPage />}>
          <Route index element={<MainPage />} />
          <Route path="/account/profile" element={<ProfilePage />} />
          <Route path="/account/team" element={<TeamPage />} />
          <Route path="/account/application" element={<ApplicationPage />} />
        </Route>
      </Route>

      <Route path="/*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
