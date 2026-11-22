import { profile, skills } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__text">
          <p className="kicker">About</p>
          <h2 className="section-title about__title">Work directly with the person who builds it</h2>
          <p className="about__p">
           I'm {profile.name}, a freelancer based in {profile.city}. I've worked with small businesses, startups and entrepreneurs for 1 years, and I focus on building websites that are simple, fast and honest about what you offer.
          </p>
          <p className="about__p">
            You'll talk to me directly: no handoffs, no jargon, no surprises on the invoice.
          </p>
          <ul className="chips">
            {skills.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
