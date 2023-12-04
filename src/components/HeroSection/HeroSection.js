import Timer from "../../components/Timer/Timer";
import styles from "../HeroSection/HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className="container">
      <div
        className={[styles.hero, "d-flex flex-column align-items-center"].join(
          " "
        )}
      >
        <p className="font-extra-large text-center col-9 col-sm-8 col-md-8 col-xl-7 mb-8">
          We turn digital dreams into reality
        </p>
        <p className="font-small-medium  col-12 col-sm-10 col-md-8 col-xl-7 mb-12">
          We design unique websites, efficient e-commerce solutions,
          user-friendly mobile apps, stylish UI/UX, and advanced business
          management systems. Our creative innovation and technical excellence
          bring ideas to life, empowering clients in the digital realm.
        </p>
        <Timer />
      </div>
    </div>
  );
};

export default HeroSection;
