import { Header } from "@/widgets/home-page-widgets/ui/header";
import { Footer } from "@/widgets/home-page-widgets/ui/footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
