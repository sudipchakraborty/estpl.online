export default function CapabilityGrid({ title, intro, items }) {
  return <section className="capabilities" id="capabilities"><div className="section-intro"><p className="section-kicker">What ELVA sees</p><h2>{title}</h2><p>{intro}</p></div><div className="capability-grid">{items.map((item, index) => <article key={item.title}><span className="card-number">0{index + 1}</span><div className="card-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>
}
