import ProfileCard, { type ProfileCardProps } from "../ProfileCard/ProfileCard";
import type { ProfileGroup } from "./profileLoader";
import "./ProfileGallery.css";

type ProfileGalleryProps = {
  profiles: ProfileCardProps[];
  emptyMessage?: string;
};

export default function ProfileGallery({
  profiles,
  emptyMessage = "Profiles will be added soon.",
}: ProfileGalleryProps) {
  if (profiles.length === 0) {
    return <p className="profile-gallery-empty">{emptyMessage}</p>;
  }

  return (
    <div className="profile-gallery">
      {profiles.map((profile) => (
        <ProfileCard key={`${profile.name}-${profile.image}`} {...profile} />
      ))}
    </div>
  );
}

type GroupedProfileGalleryProps = {
  groups: ProfileGroup[];
  emptyMessage?: string;
};

export function GroupedProfileGallery({
  groups,
  emptyMessage = "Profiles will be added soon.",
}: GroupedProfileGalleryProps) {
  const populatedGroups = groups.filter((group) => group.profiles.length > 0);

  if (populatedGroups.length === 0) {
    return <p className="profile-gallery-empty">{emptyMessage}</p>;
  }

  return (
    <div className="profile-group-list">
      {populatedGroups.map((group) => (
        <section className="profile-group" key={group.category}>
          <div className="profile-group-heading">
            <p>Department</p>
            <h2>{group.category}</h2>
            <span>{group.profiles.length} {group.profiles.length === 1 ? "member" : "members"}</span>
          </div>
          <div className="profile-gallery">
            {group.profiles.map((profile) => (
              <ProfileCard key={`${group.category}-${profile.name}-${profile.image}`} {...profile} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
