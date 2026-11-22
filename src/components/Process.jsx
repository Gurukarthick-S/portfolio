import { steps } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHeading kicker="Process" title="A clear process from first call to launch" />
        <div className="grid grid--4">
          {steps.map((step, index) => (
            <div key={step.title} className="step">
              <div className="step__num">STEP {String(index + 1).padStart(2, '0')}</div>
              <h3 className="card__title">{step.title}</h3>
              <p className="card__text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
