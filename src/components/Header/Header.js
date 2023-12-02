import Logo from "../../assets/logo.svg";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={[styles.header, "container"].join(" ")}>
      <div className="d-flex flex-row justify-content-between align-items-center mt-4">
        <img src={Logo} alt="company-logo"></img>
        <button className={styles.btnBrand}>Get in touch</button>
      </div>
    </div>
  );
};

export default Header;
