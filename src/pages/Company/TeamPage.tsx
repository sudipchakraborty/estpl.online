import CompanyPage from "../../components/CompanyPage/CompanyPage";
import { GroupedProfileGallery } from "../../components/ProfileGallery/ProfileGallery";
import { createProfileGroupsFromModules } from "../../components/ProfileGallery/profileLoader";

const teamImages = import.meta.glob(
  "../../assets/Our Team/**/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const teamDetails = import.meta.glob(
  "../../assets/Our Team/**/*.txt",
  { eager: true, query: "?raw", import: "default" },
) as Record<string, string>;

const teamGroups = createProfileGroupsFromModules(teamImages, teamDetails, "Our Team");

export default function TeamPage() {
  return (
    <CompanyPage eyebrow="Company" title="Our Team" description="Meet the people behind ESTPL.">
      <GroupedProfileGallery groups={teamGroups} />
    </CompanyPage>
  );
}
