import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">
        <div className={["row mb-5 mb-lg-12", styles.footerTop].join(" ")}>
          <div className="col-12 col-lg-8 col-xl-6 mb-5 mb-lg-8">
            <div className="d-flex flex-column">
              <div className="get-in-touch font-extra-large mb-5 mb-lg-8">
                Get in touch
              </div>
              <div className="contact font-small">
                Drop us a line at{" "}
                <a
                  className="link-offset-3 link-danger"
                  href="mailto:info@imas.lt"
                >
                  info@imas.lt
                </a>{" "}
                or call{" "}
                <a
                  className="link-offset-3 link-danger"
                  href="tel:+37066240099"
                >
                  +370 662 400 99
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column col-6 col-md-4 col-lg-2 col-xl-3 mt-lg-6">
            <div className="office">
              <div className="city font-medium mb-4">Vilnius</div>
              <div className="address d-flex flex-column font-extra-small">
                <ul className="mb-4 list-unstyled">
                  <li>A. Smetonos st. 5</li>
                  <li>+370 662 400 99</li>
                  <li>9:39 AM</li>
                </ul>
              </div>
              <a
                className="font-extra-small fw-bold text-decoration-none text-black"
                href="https://maps.app.goo.gl/fGLnbpSS16RKymuS7"
              >
                Get directions
              </a>
            </div>
          </div>

          <div className="d-flex flex-column col-6 col-md-4 col-lg-2 col-xl-3 mt-lg-6">
            <div className="office">
              <div className="city font-medium mb-4">Klaipėda</div>
              <div className="address d-flex flex-column font-extra-small">
                <ul className="mb-4 list-unstyled">
                  <li>Liepų st. 83A</li>
                  <li>+370 662 400 99</li>
                  <li>9:39 AM</li>
                </ul>
              </div>
              <a
                className="font-extra-small fw-bold text-decoration-none text-black"
                href="https://maps.app.goo.gl/zred9weeH49qSAgu5"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-8 col-xl-6 font-extra-small mb-5">
            © 2024 Imas agency.
          </div>
          <div className="col-12 col-sm-6 col-md-8 col-lg-4 col-xl-6 d-flex ">
            <ul className="d-flex mb-4 list-unstyled">
              <li className="me-3 me-lg-8 me-xl-15">
                <a
                  className="text-decoration-none font-extra-small text-black"
                  href="https://lt.linkedin.com/"
                >
                  LinkedIn
                </a>
              </li>
              <li className="me-3 me-lg-8 me-xl-15">
                <a
                  className="text-decoration-none font-extra-small text-black"
                  href="https://www.instagram.com/"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none font-extra-small text-black"
                  href="https://www.facebook.com/"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
