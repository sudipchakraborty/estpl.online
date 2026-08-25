import './Card_RightSideBar.css'

const deviceMetrics = [
  { label: 'AI devices ordered last week', value: 3 },
  { label: 'AI devices ordered in the last 2 months', value: 16 },
  { label: 'AI devices installed', value: 153 },
]

export default function RightSideBar() {
  return (
    <div className="right-card">
      <div className="device-metrics">
        {deviceMetrics.map((metric) => (
          <article className="device-metric" key={metric.label}>
            <p>{metric.label}</p>
            <div><strong>{metric.value}</strong><span>Nos.</span></div>
          </article>
        ))}
      </div>
    </div>
  )
}
