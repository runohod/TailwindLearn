import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from "@/app/layouts/mainLayout"
import { HomePage } from "@/pages/homePage"
import { ServicesPage } from "@/pages/servicesPage"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}