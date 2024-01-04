import ClientsPageClientsList from "./ClientsPageClientsList/ClientsPageClientsList";
import ClientsPageContent from "./ClientsPageContent/ClientsPageContent";
import ClientsPageFooter from "./ClientsPageFooter/ClientsPageFooter";
import ClientsPageHeader from "./ClientsPageHeader/ClientsPageHeader";

const ClientsPage = () => {
  return (
    <div className="bg-white text-black">
      <ClientsPageHeader />
      <ClientsPageContent />
      <ClientsPageClientsList />
      <ClientsPageFooter />
    </div>
  );
};

export default ClientsPage;
