import "./Card_Middle_Home.css";
import FeatureCard from "../FeatureCard/FeatureCard";
import { pageConfig } from "../../config/featuresConfig";
import Carousel from "../Carousel/Carousel";
import CustomerShowcase, {
  type CustomerLogo,
} from "../CustomerShowcase/CustomerShowcase";

const logoModules = import.meta.glob(
  "../../assets/Our Client/*.{png,jpg,jpeg,webp,svg}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const valuedCustomers: CustomerLogo[] = Object.entries(logoModules)
  .map(([path, src]) => ({
    name: path
      .split("/")
      .pop()!
      .replace(/\.[^.]+$/, "")
      .replace(/[_-]+/g, " "),
    src,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

function Card_Middle_Home() {
  return (
    <div className="landing-container">
      {/* Hero Banner */}
      <Carousel />
      {/* Feature Section */}

      <section className="feature-section">
        <h2>Our Solutions</h2>

        <div
          className="feature-grid"
          style={{
            gridTemplateColumns: `repeat(${pageConfig.columns}, minmax(0, 1fr))`,
          }}
        >
          {pageConfig.cards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              image={card.image}
              description={card.description}
              url={card.url}
            />
          ))}
        </div>
      </section>

      <CustomerShowcase logos={valuedCustomers} />
    </div>
  );
}

export default Card_Middle_Home;
