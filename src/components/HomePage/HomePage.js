import Clients from "../Clients/Clients";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";

const HomePage = () => {
  return (
    <div className="bg-black">
      <Header />
      <HeroSection />
      <Services />
      <Projects />
      <Clients />
      <Footer />
    </div>
  );
};

export default HomePage;
