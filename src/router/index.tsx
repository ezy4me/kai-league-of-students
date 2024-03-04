import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "@layouts/MainLayout";
import HomeLayout from "@/layouts/HomeLayout";
import AuthLayout from "@layouts/AuthLayout";
import AccountLayout from "@layouts/AccountLayout";

import HomePage from "@pages/HomePage";
import VenuesPage from "@pages/VenuesPage";
import ContactsPage from "@pages/ContactsPage";
import DocumentsPage from "@pages/DocumentsPage";

import AuthPage from "@pages/AuthPage";

import AccountPage from "@pages/AccountPage";

import NotFoundPage from "@pages/NotFoundPage";

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
        <Route path="/account" element={<AccountPage />} />
      </Route>

      <Route path="/*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
