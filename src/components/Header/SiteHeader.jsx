export default function SiteHeader({ brand, navigation, cta }) {
  return (
    <header className="site-header">
      <a className="site-brand" href="#top" aria-label={`${brand.company} home`}>
        <span className="site-brand-mark" aria-hidden="true">E</span>
        <span className="site-brand-copy">
          <strong>{brand.product}</strong>
          <small>{brand.company}</small>
        </span>
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.label} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <a className="button button-small" href={cta.href}>
        {cta.label}<span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}
