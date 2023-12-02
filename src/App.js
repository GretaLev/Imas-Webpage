import Clients from "./components/Clients/Clients";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <Projects />
      <Clients />
    </div>
  );
}

export default App;
