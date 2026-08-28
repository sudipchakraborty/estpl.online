import CompanyPage from "../../components/CompanyPage/CompanyPage";
import ProfileGallery from "../../components/ProfileGallery/ProfileGallery";
import { createProfilesFromModules } from "../../components/ProfileGallery/profileLoader";

const directorImages = import.meta.glob(
  "../../assets/Our Directors/*/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const directorDetails = import.meta.glob(
  "../../assets/Our Directors/*/*.txt",
  { eager: true, query: "?raw", import: "default" },
) as Record<string, string>;

const directors = createProfilesFromModules(directorImages, directorDetails);

export default function OurDirectorsPage() {
  return (
    <CompanyPage eyebrow="Company" title="Our Directors" description="Meet the leadership behind ESTPL.">
      <ProfileGallery profiles={directors} />
    </CompanyPage>
  );
}
