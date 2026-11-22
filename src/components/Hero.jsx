import { profile } from '../data.js'

function HeroMock() {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock__bar">
        <span />
        <span />
        <span />
      </div>
      <div className="mock__body">
        <div className="mock__line mock__line--title" />
        <div className="mock__line mock__line--wide" />
        <div className="mock__line mock__line--mid" />
        <div className="mock__button" />
        <div className="mock__tiles">
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <div className="pill">
            <span className="pill__dot" />
            Accepting new projects
          </div>
          <h1 className="hero__title">Websites that make your business look as good as it is.</h1>
          <p className="hero__lead">
            I'm {profile.name}, a freelance {profile.role}. I design and build fast, well-crafted
            websites for small businesses and professionals who want to be taken seriously online.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Start a project
            </a>
            <a href="#services" className="btn btn--outline">
              See what I do
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <HeroMock />
        </div>
      </div>
    </section>
  )
}
