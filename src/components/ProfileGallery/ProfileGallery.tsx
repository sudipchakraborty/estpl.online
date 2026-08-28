import ProfileCard, { type ProfileCardProps } from "../ProfileCard/ProfileCard";
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
