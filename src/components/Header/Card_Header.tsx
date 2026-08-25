import './Card_Header.css'
import companyLogo1 from '../../assets/CompanyLogo_1.jpeg'
import companyLogo2 from '../../assets/CompanyLogo_2.jpeg'
import { menuConfig } from '../../config/menuConfig'

function goTo(url: string) {
  if (url.startsWith('#')) document.querySelector(url)?.scrollIntoView({ behavior: 'smooth' })
  else window.location.href = url
}

export default function Header() {
  return <header className="header-card"><div className="header-left" onClick={() => goTo('#top')}><img src={companyLogo1} alt="ELVA" className="header-logo logo-primary" /><div className="logo-divider" /><div className="company-name">ELVA Visual AI</div></div><nav className="header-center" aria-label="Main navigation"><button className="nav-link" onClick={() => goTo('#top')}>Home</button>{menuConfig.map((menu) => menu.items.length ? <div key={menu.title} className="dropdown"><button className="nav-link">{menu.title} ▾</button><div className="dropdown-menu">{menu.items.map((item) => <button key={item.title} className="dropdown-item" onClick={() => goTo(item.url)}>{item.title}</button>)}</div></div> : <button key={menu.title} className="nav-link">{menu.title}</button>)}<button className="nav-link" onClick={() => goTo('#contact')}>Contact</button></nav><div className="header-right"><img src={companyLogo2} alt="ELTERN SEGEN Technologie Pvt Ltd" className="header-logo logo-right" /></div></header>
}
