import CompanyPage from "../../components/CompanyPage/CompanyPage";
import EventGallery from "../../components/EventGallery/EventGallery";

export default function EventsPage() {
  return (
    <CompanyPage eyebrow="Company" title="Events" description="Company events and media.">
      <EventGallery />
    </CompanyPage>
  );
}
