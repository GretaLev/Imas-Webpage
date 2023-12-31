import styles from "./ClientsPageFooter.module.scss";

const ClientsPageFooter = () => {
  return (
    <footer
      id="footer"
      className={[styles.footer, "bg-black text-white"].join(" ")}
    >
      <div className="container">
        <div className={["row mb-5 mb-lg-12", styles.footerTop].join(" ")}>
          <div className="col-12 col-lg-8 col-xl-6 mb-5 mb-lg-8">
            <div className="d-flex flex-column">
              <div className="get-in-touch font-extra-large mb-5 mb-lg-8 offset-md-2">
                Get in touch
              </div>
              <div className="contact font-small fw-normal offset-md-2">
                Drop us a line at{" "}
                <a
                  className="text-decoration-none text-white"
                  href="mailto:info@imas.lt"
                >
                  info@imas.lt
                </a>{" "}
                or call{" "}
                <a
                  className="text-decoration-none text-white"
                  href="tel:+37066240099"
                >
                  +370 662 400 99
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ClientsPageFooter;
