import CompanyPage from "../../components/CompanyPage/CompanyPage";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <CompanyPage eyebrow="Contact" title="Contact Us" description="Contact ESTPL about your technology requirements.">
      <ContactForm />
    </CompanyPage>
  );
}
