import type { ProfileCardProps } from "../ProfileCard/ProfileCard";

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

export function createProfilesFromModules(
  imageModules: Record<string, string>,
  detailModules: Record<string, string>,
): ProfileCardProps[] {
  return Object.entries(detailModules)
    .map(([detailsPath, contents]) => {
      const folder = folderFromPath(detailsPath);
      const imageEntry = Object.entries(imageModules).find(
        ([imagePath]) => folderFromPath(imagePath) === folder,
      );

      if (!imageEntry) return null;

      return {
        image: imageEntry[1],
        ...parseDetails(contents, folder),
      };
    })
    .filter((profile): profile is ProfileCardProps => profile !== null)
    .sort((first, second) => first.name.localeCompare(second.name));
}
