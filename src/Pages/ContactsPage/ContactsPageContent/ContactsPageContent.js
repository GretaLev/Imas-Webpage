const ContactsPageContent = () => {
  return (
    <div className="container">
      <div className="row mb-5 mb-lg-12">
        <div className="col-12 col-lg-8 col-xl-6 mb-5 mb-lg-8">
          <div className="d-flex flex-column">
            <div className="get-in-touch font-large mb-5 mb-lg-8 offset-md-2">
              Let's create something of significance.
            </div>
            <div className="contact font-small offset-md-2">
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
        </div>
      </div>
    </div>
  );
};

export default ContactsPageContent;
