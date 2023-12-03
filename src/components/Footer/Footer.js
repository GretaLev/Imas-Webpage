import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer styles={styles.Footer}>
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column col-6">
            <div className="get-in-touch fw-bold">Get in touch</div>
            <div className="contact fw-bold">
              Drop us a line at{" "}
              <a className="link-opacity-100" href="mailto:info@imas.lt">
                info@imas.lt
              </a>{" "}
              or call{" "}
              <a className="link-opacity-100" href="tel:+37066240099">
                +370 662 400 99
              </a>
            </div>
          </div>
          <div className="d-flex flex-column col-3">
            <div className="office">
              <div className="city fw-bold">Vilnius</div>
              <div className="address d-flex flex-column">
                <p>A. Smetonos st. 5</p>
                <p>+370 662 400 99</p>
                <p>9:39 AM</p>
                <a
                  className="get-directions fw-bold"
                  href="https://maps.app.goo.gl/fGLnbpSS16RKymuS7"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column col-3">
            <div className="office">
              <div className="city fw-bold">Klaipėda</div>
              <div className="address d-flex flex-column">
                <p>Liepų st. 83A</p>
                <p>+370 662 400 99</p>
                <p>9:39 AM</p>
                <a
                  className="get-directions fw-bold"
                  href="https://maps.app.goo.gl/zred9weeH49qSAgu5"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">© 2024 Imas agency.</div>
          <div className="col-6 d-flex ">
            <div className="">LinkedIn</div>
            <div className="">Instagram</div>
            <div className="">Facebook</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
