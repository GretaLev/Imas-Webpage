import opalWeb from "../../../assets/opal-web-pic.svg";
import opalPhone from "../../../assets/phone-mockup.svg";
import opalRates from "../../../assets/opalRates.svg";
import reviewImage from "../../../assets/dainius-miniotas.svg";
import styles from "../../../Pages/ProjectsPage/ProjectsPageContent/ProjectsPageContent.module.scss";

const ProjectsPageContent = () => {
  return (
    <div className="container">
      <div className="font-large mb-12 col-7 offset-md-1">
        Opal Transfer: Integrated digital solutions in the Fintech sector.{" "}
      </div>
      <div
        className={[
          styles.webOpal,
          "col-10 d-flex justify-content-center mb-12 offset-md-1",
        ].join(" ")}
      >
        <div>
          <img src={opalWeb} alt="Opal"></img>
        </div>
      </div>
      <div className="col-9 mb-16 d-flex offset-1">
        <div className="col-4 font-medium">
          Services
          <div className="font-small fw-normal">Platform UX/UI</div>
          <div className="font-small fw-normal">Style discovery</div>
        </div>
        <div className="col-4 font-medium">
          Results
          <div className="font-small fw-normal">Web page</div>
          <div className="font-small fw-normal">E-platform</div>
        </div>
        <div className="col-3 font-medium">
          Date
          <div className="font-small fw-normal">2023</div>
        </div>
      </div>
      <div className="offset-md-1 col-8">
        <div className="font-medium mb-4">Fintech platform UX/UI design</div>
        <div className="font-small fw-normal mb-12">
          Our primary challenges during the platform's design phase encompassed
          dealing with a complex process, navigating a challenging user journey,
          handling sensitive data, and addressing intricate analytics. Our
          foremost goals revolved around ensuring ease of use, maintaining
          process clarity, and instilling a sense of security through the
          interface design.
        </div>
      </div>
      <div className="col-10 offset-md-1 d-flex gap-3 mb-16">
        <div
          className={[
            styles.phoneImage,
            "col-3 position-relative overflow-hidden",
          ].join(" ")}
        >
          <img
            src={opalPhone}
            alt="mobile"
            className="position-absolute top-60 start-50 translate-middle"
          ></img>
        </div>
        <div
          className={[
            styles.opalRates,
            "col-7 position-relative overflow-hidden",
          ].join(" ")}
        >
          <img
            src={opalRates}
            alt="rates"
            className="position-relative top-10 start-5"
          ></img>
        </div>
      </div>
      <div className="offset-md-1 col-8">
        <div className="font-medium mb-4">
          Orientation to digitization and end-user of the platform.
        </div>
        <div className="font-small fw-normal mb-16">
          The complex process, a difficult user journey, sensitive data and
          analytics were the main challenges we had to overcome when designing
          the platform. Ease of use, clarity of processes and conveying a sense
          of security through interface design were our main objectives.
        </div>
      </div>
      <div
        className={[styles.review, "col-10 offset-md-1 pt-12 pb-12 mb-16"].join(
          " "
        )}
      >
        <div className={[styles.reviewContent, "col-8 ms-8 mb-8"].join(" ")}>
          "Imas has played a crucial role within the Opal Transfer product and
          technology team. They have diligently refined designs to align with
          Opal Transfer's vision and feature needs, offering valuable insights
          on optimal design strategies with a strong focus on user satisfaction,
          stakeholder considerations, and delivering aesthetically pleasing
          results."
        </div>
        <div className="col-4 ms-8 d-flex align-items-center">
          <div>
            <img src={reviewImage} alt="user" className="me-4"></img>
          </div>
          <div>
            <div className="font-medium">Dainius Miniotas</div>
            <div>Head Of Marketing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPageContent;
