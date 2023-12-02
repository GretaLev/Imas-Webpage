import press from "../assets/Group 3.svg";
import opal from "../assets/Group 19.svg";
import coffee from "../assets/Group 20.svg";
import seb from "../assets/Group 4.svg";

const Projects = () => {
  return (
    <div className="container">
      <div className="column">
        <div className="d-flex flex-column">
          <div className="title">Projects</div>
          <div className="content">
            The best evaluation of our work is the trust of our clients and
            long-term partnership. We set the highest standards for the quality
            of our services and successfully achieve clients' business goals.
          </div>
        </div>
        <div className="cards d-flex flex-row col-12">
          <div className="card" style={{ width: "18rem" }}>
            <img src={press} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={opal} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={coffee} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={seb} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
