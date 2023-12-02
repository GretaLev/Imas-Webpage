import press from "../../assets/press.svg";
import opal from "../../assets/opal.svg";
import coffee from "../../assets/coffee.svg";
import seb from "../../assets/seb.svg";
import pressLogo from "../../assets/15min.svg";
import opalLogo from "../../assets/opalLogo.svg";
import coffeeLogo from "../../assets/coffeeLogo.svg";
import sebLogo from "../../assets/sebLogo.svg";

const projectsList = [
  {
    mainImage: press,
    logo: pressLogo,
    alt: "15min.",
    title: "15min",
    category: "Press",
    services: ["Research", "UI/UX", "Mobile application"],
  },
  {
    mainImage: opal,
    logo: opalLogo,
    alt: "Opal-transfer",
    title: "Opal Transfer",
    category: "Fintech",
    services: ["Research", "UI/UX", "Mobile application"],
  },
  {
    mainImage: coffee,
    logo: coffeeLogo,
    alt: "Huracan-coffee",
    title: "Huracan Coffee",
    category: "E-commerce & Retail",
    services: ["Developing", "Website"],
  },
  {
    mainImage: seb,
    logo: sebLogo,
    alt: "Seb",
    title: "Seb",
    category: "Fintech",
    services: ["Strategy", "Developing"],
  },
];

const Projects = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column">
        <div className="title">Projects</div>
        <div className="content">
          The best evaluation of our work is the trust of our clients and
          long-term partnership. We set the highest standards for the quality of
          our services and successfully achieve clients' business goals.
        </div>
      </div>

      <div className="row">
        {projectsList.map((project) => (
          <div
            className="card col-12 col-sm-6 col-md-4 col-xl-3"
            key={project.title}
          >
            <img
              src={project.mainImage}
              className="card-img-top"
              alt={project.alt}
            ></img>
            <div className="card-body ps-0">
              <p className="card-text">{project.category}</p>
              <h5 className="card-title">{project.title}</h5>
              <div className="d-flex ">
                {project.services.map((service) => (
                  <small className="text-body-secondary" key={service}>
                    {service}
                  </small>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
