import { Hero, About, Values, AskForm, Services, OurProjects, Partners, Facts, QuickDiscuss} from "@/widgets/home-page-widgets";

export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Values />
      <AskForm />
      <Services />
      <OurProjects />
      <Partners />
      <Facts />
      <QuickDiscuss />
    </main>
  );
}
