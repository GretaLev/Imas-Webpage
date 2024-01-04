import PagesHeader from "../../components/PagesHeader/PagesHeader";
import ClientsPageClientsList from "./ClientsPageClientsList/ClientsPageClientsList";
import ClientsPageContent from "./ClientsPageContent/ClientsPageContent";
import ClientsPageFooter from "./ClientsPageFooter/ClientsPageFooter";

const ClientsPage = () => {
  return (
    <div className="bg-white text-black">
      <PagesHeader />
      <ClientsPageContent />
      <ClientsPageClientsList />
      <ClientsPageFooter />
    </div>
  );
};

export default ClientsPage;
