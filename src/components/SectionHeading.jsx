export default function SectionHeading({ kicker, title }) {
  return (
    <>
      <p className="kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
    </>
  )
}
