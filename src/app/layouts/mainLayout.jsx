import { Outlet } from "react-router-dom";

import { Header } from "@/widgets/home-page-widgets/ui/header";
import { Footer } from "@/widgets/home-page-widgets/ui/footer";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
