import Logo from "../../../assets/black-logo.svg";
import closingBtn from "../../../assets/closing-btn.svg";

const ClientsPageHeader = () => {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-between align-items-center mt-4">
        <img src={Logo} alt="company-logo" />
        <a
          href="/"
          className="font-small-medium fw-bold text-decoration-none d-flex align-items-center justify-content-center"
        >
          <img src={closingBtn} alt="closing-btn" />
        </a>
      </div>
    </div>
  );
};

export default ClientsPageHeader;
