import { stats } from '../data.js'

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((item) => (
          <div key={item.value}>
            <div className="stats__value">{item.value}</div>
            <div className="stats__label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
