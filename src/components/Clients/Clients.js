import zmones from "../../assets/zmones.svg";
import bns from "../../assets/bns.svg";
import kiloHealth from "../../assets/kiloHealth.svg";
import guruPay from "../../assets/guruPay.svg";
import luminor from "../../assets/luminor.svg";
import telia from "../../assets/telia.svg";
import axioma from "../../assets/axioma.svg";
import litexpo from "../../assets/litexpo.svg";
import gjensidige from "../../assets/gjensidige.svg";
import juodeliai from "../../assets/juodeliai.svg";
import balticTours from "../../assets/balticTours.svg";
import beKredito from "../../assets/beKredito.svg";
import kitron from "../../assets/kitron.svg";
import skrendu from "../../assets/skrendu.svg";
import citadele from "../../assets/citadele.svg";
import autobilis from "../../assets/autobilis.svg";
import unlokk from "../../assets/unlokk.svg";
import scanorama from "../../assets/scanorama.svg";

const clientsList = [
  {
    logo: zmones,
    alt: "zmones.lt",
  },
  {
    logo: bns,
    alt: "bns",
  },
  {
    logo: kiloHealth,
    alt: "kiloHealth",
  },
  {
    logo: guruPay,
    alt: "guruPay",
  },
  {
    logo: luminor,
    alt: "luminor",
  },
  {
    logo: telia,
    alt: "telia",
  },
  {
    logo: axioma,
    alt: "axioma",
  },
  {
    logo: litexpo,
    alt: "litexpo",
  },
  {
    logo: gjensidige,
    alt: "gjensidige",
  },
  {
    logo: juodeliai,
    alt: "juodeliai",
  },
  {
    logo: balticTours,
    alt: "balticTours",
  },
  {
    logo: beKredito,
    alt: "beKredito",
  },
  {
    logo: kitron,
    alt: "kitron",
  },
  {
    logo: skrendu,
    alt: "skrendu",
  },
  {
    logo: citadele,
    alt: "citadele",
  },
  {
    logo: autobilis,
    alt: "autobilis",
  },
  {
    logo: unlokk,
    alt: "unlokk",
  },
  {
    logo: scanorama,
    alt: "scanorama",
  },
];

const Clients = () => {
  return (
    <div className="container">
      <div className="row">
        {clientsList.map((client) => (
          <div key={client} className="col-2 d-flex align-items-center">
            <img src={client.logo} alt={client.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
