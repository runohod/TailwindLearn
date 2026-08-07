import { ReactNode } from "react";
import { HomePage } from "@/pages/homePage";
import { ServicesPage } from "@/pages/servicesPage";

export type TRoute = {
  path: string;
  element: ReactNode; 
};

export const routes: TRoute[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
];