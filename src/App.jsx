import { Header } from "./components/header.jsx";
import { Hero } from "./components/hero.jsx";
import { About } from "./components/about.jsx";
import { Values } from "./components/values.jsx";
// import { AskTable } from ""./components/askTable.jsx";

export function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Values />
      {/* <AskTable /> */}
    </div>
  );
}