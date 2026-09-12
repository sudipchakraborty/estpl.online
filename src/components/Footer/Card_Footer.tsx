import { useState, type FormEvent } from "react";
import siteConfig from "../../config/siteConfig.json";
import "./Card_Footer.css";

function FooterLink({ label, url }: { label: string; url: string }) {
  return <a href={url}>{label}</a>;
}

export default function Footer() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { site, contact, footerLinks, socialLinks, legalLinks, assistant } = siteConfig;

  function askElva(event: FormEvent) {
    event.preventDefault();
    if (!query.trim()) return;
    setQuery("");
  }

  return (
    <>
      <footer className="site-standard-footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand-block">
            <strong>{site.brandName}</strong>
            <p>{site.tagline}</p>
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            <nav aria-label="Footer navigation">
              {footerLinks.map((link) => <FooterLink key={link.label} {...link} />)}
            </nav>
          </div>
          <div className="footer-column">
            <h2>Contact</h2>
            <div className="footer-contact-list">
              {contact.email && <a href={`mailto:${contact.email}`}>{contact.email}</a>}
              {contact.phone && <a href={`tel:${contact.phone}`}>{contact.phone}</a>}
              {contact.address && <span>{contact.address}</span>}
            </div>
          </div>
          <div className="footer-column">
            <h2>Follow us</h2>
            <div className="footer-socials">
              {socialLinks.map((link) => link.url
                ? <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                : <span key={link.label} aria-disabled="true">{link.label}</span>
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom-row">
          <span>© {new Date().getFullYear()} {site.companyName}. All rights reserved.</span>
          <div>{legalLinks.map((link) => <FooterLink key={link.label} {...link} />)}</div>
        </div>
      </footer>

      <div className="elva-assistant">
        {assistantOpen && (
          <div className="elva-panel" role="dialog" aria-label={`Ask ${assistant.name}`}>
            <div className="elva-panel-header">
              <div><span>AI assistant</span><strong>{assistant.name}</strong></div>
              <button type="button" onClick={() => setAssistantOpen(false)} aria-label="Close assistant">×</button>
            </div>
            <p>{assistant.welcomeMessage}</p>
            <form onSubmit={askElva}>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={assistant.placeholder} aria-label={assistant.placeholder} />
              <button type="submit">Send</button>
            </form>
          </div>
        )}
        <button className="elva-launcher" type="button" onClick={() => setAssistantOpen((open) => !open)} aria-expanded={assistantOpen}>
          <span className="elva-spark" aria-hidden="true">✦</span> Ask {assistant.name}
        </button>
      </div>
    </>
  );
}
