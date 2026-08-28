import "./ProfileCard.css";

export type ProfileCardProps = {
  image: string;
  name: string;
  description: string;
  imageAlt?: string;
  className?: string;
};

export default function ProfileCard({
  image,
  name,
  description,
  imageAlt,
  className = "",
}: ProfileCardProps) {
  return (
    <article className={`profile-card ${className}`.trim()}>
      <div className="profile-card-image-wrap">
        <img
          className="profile-card-image"
          src={image}
          alt={imageAlt ?? `${name} profile`}
          loading="lazy"
        />
      </div>
      <div className="profile-card-content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
}
