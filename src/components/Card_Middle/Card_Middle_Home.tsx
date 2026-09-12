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
      <section className="hero-stage">
        <Carousel />
        <div className="hero-content">
          <p className="hero-eyebrow"><span /> Industrial intelligence, built for the real world</p>
          <h1>See more.<br /><em>Know sooner.</em></h1>
          <p className="hero-copy">ELVA turns live visual data into confident decisions for safer operations, better quality, and measurable performance.</p>
          <div className="hero-actions">
            <a className="hero-button" href="/contact">Talk to our team <span>↗</span></a>
            <a className="hero-secondary" href="#solutions">Explore capabilities <span>↓</span></a>
          </div>
        </div>
        <div className="hero-caption">Visual AI platform <span>01 / 04</span></div>
      </section>

      <section className="proof-strip" aria-label="Platform highlights">
        <div><strong>24 / 7</strong><span>continuous monitoring</span></div>
        <div><strong>99.2%</strong><span>inspection consistency</span></div>
        <div><strong>01</strong><span>connected intelligence layer</span></div>
        <p>Designed in India<br />Ready for every industry</p>
      </section>

      <section className="feature-section" id="solutions">
        <div className="section-intro">
          <div><p className="section-label">What we make possible</p><span className="section-count">02 — 04</span></div>
          <h2>Clarity at the<br /><em>point of action.</em></h2>
          <p>From the production line to the control room, ELVA helps teams detect, understand, and respond to what matters.</p>
        </div>

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

      <section className="trust-section">
        <div><p className="section-label">Trusted by teams who build</p><h2>Technology that earns<br /><em>its place on the floor.</em></h2></div>
        <CustomerShowcase logos={valuedCustomers} />
      </section>
    </div>
  );
}

export default Card_Middle_Home;
