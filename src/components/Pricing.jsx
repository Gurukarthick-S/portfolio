import { plans } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Pricing() {
  return (
    <section id="pricing" className="section section--tinted">
      <div className="container">
        <SectionHeading kicker="Pricing" title="Transparent packages" />
        <div className="grid grid--3 grid--stretch">
          {plans.map((plan) => (
            <article key={plan.name} className={`plan${plan.featured ? ' plan--featured' : ''}`}>
              <div className="plan__head">
                <h3 className="plan__name">{plan.name}</h3>
                {plan.featured && <span className="badge">Most popular</span>}
              </div>
              <p className="plan__blurb">{plan.blurb}</p>
              <div className="plan__price">{plan.price}</div>
              <ul className="plan__features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${plan.featured ? 'btn--light' : 'btn--outline-dark'} plan__cta`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
