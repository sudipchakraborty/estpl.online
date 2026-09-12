import "./FeatureCard.css";

interface FeatureCardProps {
  title: string;
  image: string;
  description: string;
  url: string;
}

function FeatureCard({
  title,
  image,
  description,
  url,
}: FeatureCardProps) {
  return (
    <a className="feature-card" href={url}>
      <img src={image} alt={title} />

      <div className="card-content">
        <span className="feature-arrow">↗</span>
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </a>
  );
}

export default FeatureCard;