import styles from "../ProjectsPageFooter/ProjectsPageFooter.module.scss";

const ProjectsPageFooter = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-25">
      <div className="container">
        <div className="row mb-5 mb-lg-12">
          <div className="col-12 col-lg-8 col-xl-6 mb-5 mb-lg-8">
            <div className="d-flex flex-column">
              <div
                className={[
                  styles.footerTitle,
                  "font-extra-large mb-4 offset-1",
                ].join(" ")}
              >
                Next case study
              </div>
              <div className="font-large mb-0 offset-1">15 min</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProjectsPageFooter;
