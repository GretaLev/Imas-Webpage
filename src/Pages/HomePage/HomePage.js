import Clients from "../../components/Clients/Clients";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Projects from "../../components/Projects/Projects";
import Services from "../../components/Services/Services";

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
