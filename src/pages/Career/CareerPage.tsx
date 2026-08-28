import CompanyPage from "../../components/CompanyPage/CompanyPage";
import TextContent from "../../components/TextContent/TextContent";

import careersContent from "../../assets/Careers/Careers.txt?raw";

export default function CareerPage() {
  return (
    <CompanyPage
      eyebrow="Join our team"
      title="Careers"
      description="Explore career and internship opportunities at ESTPL."
    >
      <TextContent content={careersContent} skipFirstHeading />
    </CompanyPage>
  );
}
