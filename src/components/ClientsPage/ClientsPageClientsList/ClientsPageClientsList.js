import zmones from "../../../assets/zmones.svg";
import bns from "../../..//assets/bns.svg";
import kiloHealth from "../../../assets/kiloHealth.svg";
import guruPay from "../../../assets/guruPay.svg";
import luminor from "../../../assets/luminor.svg";
import telia from "../../../assets/telia.svg";
import axioma from "../../../assets/axioma.svg";
import litexpo from "../../../assets/litexpo.svg";
import gjensidige from "../../../assets/gjensidige.svg";
import juodeliai from "../../../assets/juodeliai.svg";
import balticTours from "../../../assets/balticTours.svg";
import beKredito from "../../../assets/beKredito.svg";
import kitron from "../../../assets/kitron.svg";
import skrendu from "../../../assets/skrendu.svg";
import citadele from "../../../assets/citadele.svg";
import autobilis from "../../../assets/autobilis.svg";
import unlokk from "../../../assets/unlokk.svg";
import scanorama from "../../../assets/scanorama.svg";

import styles from "./ClientsPageClientsList.module.scss";

const clientsList = [
  {
    logo: zmones,
    alt: "Zmones.lt",
    url: "https://zmones.15min.lt/",
  },
  {
    logo: bns,
    alt: "Bns",
    url: "https://www.bns.lt/",
  },
  {
    logo: kiloHealth,
    alt: "KiloHealth",
    url: "https://kilo.health/",
  },
  {
    logo: guruPay,
    alt: "GuruPay",
    url: "https://gurupay.eu/lt/",
  },
  {
    logo: luminor,
    alt: "Luminor",
    url: "https://www.luminor.lt/",
  },
  {
    logo: telia,
    alt: "Telia",
    url: "https://www.telia.lt/privatiems",
  },
  {
    logo: axioma,
    alt: "Axioma",
    url: "https://www.axiomametering.com/lt",
  },
  {
    logo: litexpo,
    alt: "Litexpo",
    url: "https://zmones.15min.lt",
  },
  {
    logo: gjensidige,
    alt: "Gjensidige",
    url: "https://www.gjensidige.lt/",
  },
  {
    logo: juodeliai,
    alt: "Juodeliai",
    url: "https://www.juodeliai.com/lt/home",
  },
  {
    logo: balticTours,
    alt: "BalticTours",
    url: "https://www.baltictours.lt/",
  },
  {
    logo: beKredito,
    alt: "BeKredito",
    url: "https://www.bekredito.lt/",
  },
  {
    logo: kitron,
    alt: "Kitron",
    url: "https://kitron.com/",
  },
  {
    logo: skrendu,
    alt: "Skrendu.lt",
    url: "https://skrendu.lt/",
  },
  {
    logo: citadele,
    alt: "Citadele",
    url: "https://www.citadele.lt/lt/private/",
  },
  {
    logo: autobilis,
    alt: "Autobilis",
    url: "https://www.citadele.lt/lt/private/",
  },
  {
    logo: unlokk,
    alt: "Unlokk",
    url: "https://unlokk.lt/",
  },
  {
    logo: scanorama,
    alt: "Scanorama",
    url: "https://www.scanorama.lt/lt",
  },
];

const ClientsPageClientsList = () => {
  return (
    <div className="container">
      <div className="row mb-8 offset-md-1">
        {clientsList.map((client) => (
          <div
            key={client.alt}
            className={[
              styles.logos,
              "col-6 col-sm-4 col-md-3 col-xl-2 d-flex align-items-center justify-content-center justify-content-sm-start bg-black",
            ].join(" ")}
          >
            <a href={client.url}>
              <img src={client.logo} alt={client.alt} className="logo-img" />
            </a>
          </div>
        ))}
      </div>
      <div className="offset-md-1">+50 more</div>
    </div>
  );
};

export default ClientsPageClientsList;
