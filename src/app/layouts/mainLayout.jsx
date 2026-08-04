import { Outlet } from "react-router-dom";

import { Header } from "@/app/layouts/header";
import { Footer } from "@/app/layouts/footer";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
