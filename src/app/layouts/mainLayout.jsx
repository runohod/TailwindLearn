import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
