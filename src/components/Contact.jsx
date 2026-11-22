import { useState } from 'react'
import { profile } from '../data.js'

const empty = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => setForm({ ...form, [field]: event.target.value })

  const handleSubmit = (event) => {
    event.preventDefault()
    // Demo only: nothing is sent yet.
    // To receive real messages, post `form` to a service such as Formspree, Web3Forms
    // or your own API here, e.g. fetch('https://your-endpoint', { method: 'POST', body: JSON.stringify(form) })
    setSent(true)
    setForm(empty)
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__text">
          <p className="kicker kicker--light">Contact</p>
          <h2 className="contact__title">Let's discuss your project</h2>
          <p className="contact__lead">
            Share a few details and I'll reply within 1–2 working days with next steps and a clear
            estimate.
          </p>
          <p className="contact__email">
            Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="f-name">Full name</label>
            <input
              id="f-name"
              type="text"
              required
              value={form.name}
              onChange={update('name')}
              autoComplete="name"
            />
          </div>
          <div className="field">
            <label htmlFor="f-email">Email address</label>
            <input
              id="f-email"
              type="email"
              required
              value={form.email}
              onChange={update('email')}
              autoComplete="email"
            />
          </div>
          <div className="field">
            <label htmlFor="f-msg">About your project</label>
            <textarea
              id="f-msg"
              rows="5"
              required
              value={form.message}
              onChange={update('message')}
            />
          </div>
          <button type="submit" className="btn btn--primary btn--lg">
            Send message
          </button>
          {sent && (
            <p className="form__status" role="status">
              Thanks! Your message is ready to send once you connect a form service.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
