import type { ProfileCardProps } from "../ProfileCard/ProfileCard";

export type ProfileGroup = {
  category: string;
  profiles: ProfileCardProps[];
};

function pathParts(path: string) {
  return path.replaceAll("\\", "/").split("/").filter(Boolean);
}

function folderFromPath(path: string) {
  return pathParts(path).at(-2) ?? "";
}

function relativePartsFromRoot(path: string, rootFolder: string) {
  const parts = pathParts(path);
  const rootIndex = parts.lastIndexOf(rootFolder);
  return rootIndex >= 0 ? parts.slice(rootIndex + 1) : parts;
}

function profileKeyFromPath(path: string, rootFolder: string) {
  const relativeParts = relativePartsFromRoot(path, rootFolder);
  const profileFolder = relativeParts.at(-2) ?? "";
  const category = relativeParts.length >= 3 ? relativeParts.at(-3) ?? "" : "";

  return {
    category,
    profileFolder,
    key: category ? `${category}/${profileFolder}` : profileFolder,
  };
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

export function createProfileGroupsFromModules(
  imageModules: Record<string, string>,
  detailModules: Record<string, string>,
  rootFolder: string,
  fallbackCategory = "Team Members",
): ProfileGroup[] {
  const imageEntries = Object.entries(imageModules).map(([imagePath, image]) => ({
    image,
    ...profileKeyFromPath(imagePath, rootFolder),
  }));

  const groups = new Map<string, ProfileCardProps[]>();

  Object.entries(detailModules).forEach(([detailsPath, contents]) => {
    const detailKey = profileKeyFromPath(detailsPath, rootFolder);
    const imageEntry = imageEntries.find((entry) => entry.key === detailKey.key);

    if (!imageEntry) return;

    const category = detailKey.category || fallbackCategory;
    const profiles = groups.get(category) ?? [];

    profiles.push({
      image: imageEntry.image,
      ...parseGroupedDetails(contents, detailKey.profileFolder),
    });

    groups.set(category, profiles);
  });

  return Array.from(groups.entries())
    .map(([category, profiles]) => ({
      category,
      profiles: profiles.sort((first, second) => first.name.localeCompare(second.name)),
    }))
    .sort((first, second) => first.category.localeCompare(second.category));
}

function parseGroupedDetails(contents: string, folderName: string) {
  const parsed = parseDetails(contents, folderName);

  return {
    ...parsed,
    name: folderName,
  };
}
