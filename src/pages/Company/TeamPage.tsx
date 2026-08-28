import CompanyPage from "../../components/CompanyPage/CompanyPage";
import ProfileGallery from "../../components/ProfileGallery/ProfileGallery";

const teamImages = import.meta.glob(
  "../../assets/Our Team/*/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const teamDetails = import.meta.glob(
  "../../assets/Our Team/*/*.txt",
  { eager: true, query: "?raw", import: "default" },
) as Record<string, string>;

function folderFromPath(path: string) {
  return path.replaceAll("\\", "/").split("/").at(-2) ?? "";
}

function parseDetails(contents: string, fallbackName: string) {
  const nameMatch = contents.match(/^\s*Name\s*:\s*(.+)$/im);
  const descriptionMatch = contents.match(/(?:^|\n)\s*Description\s*:\s*([\s\S]+)$/i);

  return {
    name: nameMatch?.[1].trim() || fallbackName,
    description: descriptionMatch?.[1].trim() || contents.trim(),
  };
}

const teamMembers = Object.entries(teamDetails)
  .map(([detailsPath, contents]) => {
    const folder = folderFromPath(detailsPath);
    const imageEntry = Object.entries(teamImages).find(
      ([imagePath]) => folderFromPath(imagePath) === folder,
    );

    if (!imageEntry) return null;

    return {
      image: imageEntry[1],
      ...parseDetails(contents, folder),
    };
  })
  .filter((member): member is NonNullable<typeof member> => member !== null)
  .sort((first, second) => first.name.localeCompare(second.name));

export default function TeamPage() {
  return (
    <CompanyPage eyebrow="Company" title="Our Team" description="Meet the people behind ESTPL.">
      <ProfileGallery profiles={teamMembers} />
    </CompanyPage>
  );
}
