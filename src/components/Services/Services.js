const servicesList = [
  "Software development",
  "Software maintenance",
  "User interfaces UI / UX design solutions",
  "IT consulting",
  "Mobile applications",
];

const Services = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column col-5">
          <div className="title">Services</div>
          <div className="content">
            Project planning and needs analysis, interactive prototype and
            design development, programming of web solutions and mobile
            applications, testing, and software maintenance – these are our
            provided services.
          </div>
        </div>
        <div className="services-programs d-flex flex-column col-7">
          <ul>
            {servicesList.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
