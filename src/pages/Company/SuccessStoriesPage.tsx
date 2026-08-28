import CompanyPage from "../../components/CompanyPage/CompanyPage";
import TextContent from "../../components/TextContent/TextContent";

import successStoriesContent from "../../assets/Success Stories/Success Stories.txt?raw";

export default function SuccessStoriesPage() {
  return (
    <CompanyPage
      eyebrow="Company"
      title="Success Stories"
      description="Discover how ESTPL transforms operational challenges into intelligent solutions."
    >
      <TextContent content={successStoriesContent} skipFirstHeading />
    </CompanyPage>
  );
}
