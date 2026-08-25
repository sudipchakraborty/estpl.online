import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Visual AI home">
          <span className="brand-mark">V</span>
          <span>Visual AI</span>
        </a>
        <div className="nav-links">
          <a href="#platform">Platform</a>
          <a href="#about">About</a>
          <a href="#insights">Insights</a>
        </div>
        <a className="nav-cta" href="mailto:hello@visualai.example">Talk to us <span>↗</span></a>
      </nav>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Intelligence, made visible</p>
          <h1>See what<br /><em>matters.</em></h1>
          <p className="hero-lede">Visual AI turns complex information into clear, confident decisions for the teams shaping what comes next.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#platform">Explore the platform <span>↗</span></a>
            <a className="text-link" href="#about">Our approach <span>→</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract visual representing layered intelligence" role="img">
          <div className="visual-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <img src={heroImg} alt="Layered abstract Visual AI mark" />
          <div className="visual-label"><span>01</span><span>Signal / Structure</span></div>
        </div>
        <div className="scroll-cue">Scroll to discover <span>↓</span></div>
      </section>

      <section className="statement-section" id="about">
        <p className="section-kicker">The new perspective</p>
        <h2>When the world gets<br /><span>more complex,</span> clarity<br />becomes a superpower.</h2>
        <p className="statement-note">We build intelligent systems that help ambitious organizations find the signal, move with purpose, and make progress measurable.</p>
      </section>

      <section className="platform-section" id="platform">
        <div className="section-heading"><p className="section-kicker">Our platform</p><p className="section-index">02 / 03</p></div>
        <div className="capability-grid">
          <article><span className="card-number">01</span><h3>Observe</h3><p>Bring every relevant signal into focus, from the visible to the overlooked.</p><a href="#insights" aria-label="Learn about Observe">Learn more <span>↗</span></a></article>
          <article><span className="card-number">02</span><h3>Understand</h3><p>Reveal the patterns and context hidden inside your most important data.</p><a href="#insights" aria-label="Learn about Understand">Learn more <span>↗</span></a></article>
          <article><span className="card-number">03</span><h3>Act</h3><p>Move from insight to impact with intelligent workflows built for momentum.</p><a href="#insights" aria-label="Learn about Act">Learn more <span>↗</span></a></article>
        </div>
      </section>

      <section className="closing-section" id="insights">
        <p className="section-kicker">Make the next move</p>
        <h2>Better seeing.<br /><em>Brighter outcomes.</em></h2>
        <a className="primary-button light-button" href="mailto:hello@visualai.example">Start a conversation <span>↗</span></a>
      </section>
      <footer><span>© 2026 Visual AI</span><span>Built for a clearer future.</span><a href="mailto:hello@visualai.example">hello@visualai.example</a></footer>
    </main>
  )
}

export default App
