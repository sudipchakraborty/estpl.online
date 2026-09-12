import { useState } from "react";
import "./Card_Header.css";
import companyLogo1 from "../../assets/CompanyLogo_1.jpeg";
import companyLogo2 from "../../assets/CompanyLogo_2.jpeg";
import { menuConfig } from "../../config/menuConfig";
import siteConfig from "../../config/siteConfig.json";
import { downloadFile, navigateTo } from "../../utils/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function goTo(url: string) {
    setMenuOpen(false);
    navigateTo(url);
  }

  return (
    <header className="header-card">
      <button className="header-left" type="button" onClick={() => goTo("/")} aria-label="Go to home">
        <img src={companyLogo1} alt={siteConfig.site.brandName} className="header-logo logo-primary" />
        <div className="logo-divider" />
        <div className="company-name">
          <strong>{siteConfig.site.brandName}</strong>
          <span>{siteConfig.site.companyName}</span>
        </div>
      </button>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`header-center ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
        <button className="nav-link" onClick={() => goTo("/")}>Home</button>
        {menuConfig.map((menu) => menu.items.length ? (
          <div key={menu.title} className="dropdown">
            <button className="nav-link" aria-haspopup="true">{menu.title} <span aria-hidden="true">▾</span></button>
            <div className="dropdown-menu">
              {menu.items.map((item) => (
                <button
                  key={item.title}
                  className="dropdown-item"
                  onClick={() => item.download ? downloadFile(item.url, item.download) : goTo(item.url)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button key={menu.title} className="nav-link" onClick={() => menu.url && goTo(menu.url)}>
            {menu.title}
          </button>
        ))}
        <button className="nav-link nav-link-strong" onClick={() => goTo("/contact")}>Contact</button>
      </nav>

      <div className="header-right">
        <img src={companyLogo2} alt={siteConfig.site.companyName} className="header-logo logo-right" />
      </div>
    </header>
  );
}
