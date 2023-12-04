import styles from "./Services.module.scss";

const servicesList = [
  "Software development",
  "Software maintenance",
  "User interfaces UI / UX design solutions",
  "IT consulting",
  "Mobile applications",
];

const Services = () => {
  return (
    <div className={[styles.services, "container"].join(" ")}>
      <div className="row">
        <div className="d-flex flex-column col-12 col-md-6 col-xl-5">
          <div className="font-large mb-8">Services</div>
          <div
            className={[styles.servicesContent, "font-small fw-normal"].join(
              " "
            )}
          >
            Project planning and needs analysis, interactive prototype and
            design development, programming of web solutions and mobile
            applications, testing, and software maintenance – these are our
            provided services.
          </div>
        </div>
        <div className="services-programs d-flex flex-column col-12 col-md-6 col-xl-7">
          <ul className="list-unstyled">
            {servicesList.map((service) => (
              <li key={service}>
                <a
                  href="/"
                  className={[
                    styles.service,
                    "font-medium text-decoration-none text-white",
                  ].join(" ")}
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
