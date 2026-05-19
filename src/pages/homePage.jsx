import { Header } from "../widgets/header.jsx";
import { Hero } from "../widgets/hero.jsx";
import { About } from "../widgets/about.jsx";
import { Values } from "../widgets/values.jsx";
import { AskForm } from "../widgets/askForm.jsx";
import { Services } from "../widgets/services.jsx";
import { OurProjects } from "../widgets/ourProjects.jsx"
import { Partners } from "../widgets/partners.jsx"

export function HomePage() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Values />
      <AskForm />
      <Services />
      <OurProjects />
      <Partners />
    </div>
  );
}