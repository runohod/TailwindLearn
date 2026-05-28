import { Hero } from "../../../widgets/hero";
import { About } from "../../../widgets/about.jsx";
import { Values } from "../../../widgets/values.jsx";
import { AskForm } from "../../../widgets/askForm.jsx";
import { Services } from "../../../widgets/services.jsx";
import { OurProjects } from "../../../widgets/ourProjects.jsx";
import { Partners } from "../../../widgets/partners.jsx";
import { Facts } from "../../../widgets/facts.jsx";
import { QuickDiscuss } from "../../../widgets/quickDiscuss.jsx";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <AskForm />
      <Services />
      <OurProjects />
      <Partners />
      <Facts />
      <QuickDiscuss />
    </>
  );
}
