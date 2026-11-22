import { projects } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

// Placeholder thumbnails. Replace <Thumb /> with an <img src="..." alt="..." /> once you have screenshots.
function Thumb({ variant }) {
  return (
    <div className={`thumb thumb--${variant}`} aria-hidden="true">
      <div className="thumb__window">
        <div className="mock__bar mock__bar--small">
          <span />
          <span />
          <span />
        </div>
        {variant === 'one' && (
          <>
            <div className="tl tl--title" />
            <div className="tl tl--wide" />
            <div className="tl tl--mid" />
            <div className="thumb__btn" />
          </>
        )}
        {variant === 'two' && (
          <>
            <div className="thumb__tiles">
              <div />
              <div />
              <div />
            </div>
            <div className="tl tl--sub" />
            <div className="tl tl--wide" />
          </>
        )}
        {variant === 'three' && (
          <div className="thumb__profile">
            <div className="thumb__avatar" />
            <div className="thumb__profile-lines">
              <div className="tl tl--name" />
              <div className="tl tl--wide" />
              <div className="tl tl--mid" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="section section--tinted">
      <div className="container">
        <SectionHeading kicker="Selected work" title="Recent projects" />
        <div className="grid grid--3 grid--wide">
          {projects.map((project) => (
            <a key={project.title} href="#contact" className="project">
              <Thumb variant={project.variant} />
              <div className="project__body">
                <h3 className="card__title">{project.title}</h3>
                <p className="project__meta">{project.meta}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
