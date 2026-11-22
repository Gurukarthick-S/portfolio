import { services } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Icon from './Icons.jsx'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          kicker="Services"
          title="Everything you need to get online and look credible"
        />
        <div className="grid grid--3">
          {services.map((service) => (
            <article key={service.title} className="card">
              <div className="card__icon">
                <Icon name={service.icon} />
              </div>
              <h3 className="card__title">{service.title}</h3>
              <p className="card__text">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
