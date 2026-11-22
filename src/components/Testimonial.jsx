import { testimonial } from '../data.js'

export default function Testimonial() {
  return (
    <section className="testimonial">
      <figure className="testimonial__inner">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7 7h4v4c0 3-1.5 5-4 6l-1-1.6c1.3-.7 2-1.7 2-3H7V7zm8 0h4v4c0 3-1.5 5-4 6l-1-1.6c1.3-.7 2-1.7 2-3h-1V7z" />
        </svg>
        <blockquote className="testimonial__quote">{testimonial.quote}</blockquote>
        <figcaption className="testimonial__author">{testimonial.author}</figcaption>
      </figure>
    </section>
  )
}
