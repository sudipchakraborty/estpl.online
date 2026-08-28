import CompanyPage from "../../components/CompanyPage/CompanyPage";
import TextContent from "../../components/TextContent/TextContent";

import aboutUsContent from "../../assets/About Us/About Us.txt?raw";

export default function AboutUsPage() {
  return (
    <CompanyPage
      eyebrow="Company"
      title="About Us"
      description="Learn more about ESTPL."
    >
      <TextContent content={aboutUsContent} skipFirstHeading />
    </CompanyPage>
  );
}
