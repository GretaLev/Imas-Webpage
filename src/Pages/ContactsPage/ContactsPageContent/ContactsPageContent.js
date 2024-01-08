import styles from "../ContactsPageContent/ContactsPageContent.module.scss";

const ContactsPageContent = () => {
  return (
    <div className="container">
      <div className="row mb-5 mb-lg-16">
        <div className="col-12 col-lg-8 col-xl-6 mb-5 mb-lg-8">
          <div className="d-flex flex-column">
            <div className="font-large mb-5 mb-lg-8 offset-md-2">
              Let's create something of significance.
            </div>
            <div className="contact font-small offset-md-2 mb-16">
              Drop us a line at{" "}
              <a
                className="text-decoration-none text-danger"
                href="mailto:info@imas.lt"
              >
                info@imas.lt
              </a>{" "}
              or call{" "}
              <a
                className="text-decoration-none text-danger"
                href="tel:+37066240099"
              >
                +370 662 400 99
              </a>
            </div>
          </div>
          <div className="col-10 d-flex gap-3 offset-1">
            <div className={[styles.addressBox, "col-5 "].join(" ")}>
              <div
                className={[styles.whiteFontOnHover, "ps-8 pt-12"].join(" ")}
              >
                <div className={[styles.cityName, "mb-8"].join(" ")}>
                  Vilnius
                </div>
                <div
                  className={[styles.contactsInfo, "font-small fw-normal"].join(
                    " "
                  )}
                >
                  <div>A. Smetonos st. 5</div>
                  <div>+370 662 400 99</div>
                </div>
                <div
                  className={[
                    styles.timeBox,
                    "d-flex gap-2 me-8 pt-8 pb-8 align-items-start",
                  ].join(" ")}
                >
                  <div className={styles.time}>11:17</div>
                  <div className={styles.hourPeriod}>AM</div>
                </div>
              </div>
            </div>
            <div className={[styles.addressBox, "col-5 "].join(" ")}>
              <div className="ps-8 pt-12">
                <div className={[styles.cityName, "mb-8"].join(" ")}>
                  Klaipėda
                </div>
                <div
                  className={[styles.contactsInfo, "font-small fw-normal"].join(
                    " "
                  )}
                >
                  <div>Liepų st. 83A</div>
                  <div>+370 662 400 99</div>
                </div>
                <div
                  className={[
                    styles.timeBox,
                    "d-flex gap-2 me-8 pt-8 pb-8",
                  ].join(" ")}
                >
                  <div className={styles.time}>11:17</div>
                  <div className={styles.hourPeriod}>AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPageContent;
