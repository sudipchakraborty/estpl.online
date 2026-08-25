export default function SiteFooter({ company, product, email }) {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <p className="section-kicker">See beyond. Act sooner.</p>
        <h2>Bring visual intelligence<br />to your operation.</h2>
        <a className="button button-light" href={`mailto:${email}`}>
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {company}</span>
        <span>{product} · Visual AI</span>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </footer>
  )
}
