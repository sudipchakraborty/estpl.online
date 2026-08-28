import CompanyPage from "../../components/CompanyPage/CompanyPage";
import ProfileGallery from "../../components/ProfileGallery/ProfileGallery";
import { createProfilesFromModules } from "../../components/ProfileGallery/profileLoader";

const teamImages = import.meta.glob(
  "../../assets/Our Team/*/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const teamDetails = import.meta.glob(
  "../../assets/Our Team/*/*.txt",
  { eager: true, query: "?raw", import: "default" },
) as Record<string, string>;

const teamMembers = createProfilesFromModules(teamImages, teamDetails);

export default function TeamPage() {
  return (
    <CompanyPage eyebrow="Company" title="Our Team" description="Meet the people behind ESTPL.">
      <ProfileGallery profiles={teamMembers} />
    </CompanyPage>
  );
}
