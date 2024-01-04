import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={[styles.header, "container"].join(" ")}>
      <div className="d-flex flex-row justify-content-between align-items-center mt-4">
        <img src={Logo} alt="company-logo" />
        <Link
          to={"/contacts"}
          href="#footer"
          className={[
            styles.btnBrand,
            "font-small-medium fw-bold text-decoration-none d-flex align-items-center justify-content-center",
          ].join(" ")}
        >
          {" "}
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default Header;
