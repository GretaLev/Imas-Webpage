import PagesHeader from "../../components/PagesHeader/PagesHeader";
import ProjectsPageContent from "./ProjectsPageContent/ProjectsPageContent";
import ProjectsPageFooter from "./ProjectsPageFooter/ProjectsPageFooter";

const ProjectsPage = () => {
  return (
    <div className="bg-white text-black">
      <PagesHeader />
      <ProjectsPageContent />
      <ProjectsPageFooter />
    </div>
  );
};

export default ProjectsPage;
