import { navLinks, profile } from '../data.js'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo">
          <span className="logo__mark">{profile.initial}</span>
          {profile.logoName}
        </a>
        <nav className="nav" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary btn--sm">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  )
}
