import "./CustomerShowcase.css";

export type CustomerLogo = {
  name: string;
  src: string;
};

type CustomerShowcaseProps = {
  logos: CustomerLogo[];
  title?: string;
  eyebrow?: string;
  className?: string;
};

function CustomerLogoCard({ logo }: { logo: CustomerLogo }) {
  return (
    <div className="customer-logo-card">
      <img src={logo.src} alt={`${logo.name} logo`} loading="lazy" />
    </div>
  );
}

export default function CustomerShowcase({
  logos,
  title = "Our Valued Customers",
  eyebrow = "Trusted partnerships",
  className = "",
}: CustomerShowcaseProps) {
  if (logos.length === 0) return null;

  return (
    <section
      className={`customers-section ${className}`.trim()}
      aria-labelledby="customers-heading"
    >
      <p className="customers-eyebrow">{eyebrow}</p>
      <h2 id="customers-heading">{title}</h2>
      <div className="customer-grid">
        {logos.map((logo) => (
          <CustomerLogoCard key={`${logo.name}-${logo.src}`} logo={logo} />
        ))}
      </div>
    </section>
  );
}
