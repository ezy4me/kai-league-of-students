import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "@layouts/MainLayout";

import HomePage from "@pages/HomePage";
import VenuesPage from "@pages/VenuesPage";
import ContactsPage from "@pages/ContactsPage";
import DocumentsPage from "@pages/DocumentsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/venues" element={<VenuesPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/documents" element={<DocumentsPage />} />
    </Route>
  )
);

export default router;
