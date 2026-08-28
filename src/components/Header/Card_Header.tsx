import "./Card_Header.css";
import companyLogo1 from "../../assets/CompanyLogo_1.jpeg";
import companyLogo2 from "../../assets/CompanyLogo_2.jpeg";
import { menuConfig } from "../../config/menuConfig";
import siteConfig from "../../config/siteConfig.json";
import { downloadFile, navigateTo } from "../../utils/navigation";

export default function Header() {
  return (
    <header className="header-card">
      <div className="header-left" onClick={() => navigateTo("/")}>
        <img src={companyLogo1} alt={siteConfig.site.brandName} className="header-logo logo-primary" />
        <div className="logo-divider" />
        <div className="company-name">{siteConfig.site.brandName}</div>
      </div>
      <nav className="header-center" aria-label="Main navigation">
        <button className="nav-link" onClick={() => navigateTo("/")}>Home</button>
        {menuConfig.map((menu) => menu.items.length ? (
          <div key={menu.title} className="dropdown">
            <button className="nav-link" aria-haspopup="true">{menu.title} ▾</button>
            <div className="dropdown-menu">
              {menu.items.map((item) => (
                <button
                  key={item.title}
                  className="dropdown-item"
                  onClick={() => item.download ? downloadFile(item.url, item.download) : navigateTo(item.url)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button key={menu.title} className="nav-link" onClick={() => menu.url && navigateTo(menu.url)}>
            {menu.title}
          </button>
        ))}
        <button className="nav-link" onClick={() => navigateTo("/contact")}>Contact</button>
      </nav>
      <div className="header-right">
        <img src={companyLogo2} alt={siteConfig.site.companyName} className="header-logo logo-right" />
      </div>
    </header>
  );
}
