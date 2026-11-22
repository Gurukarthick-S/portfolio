import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Testimonial from './components/Testimonial.jsx'
import Pricing from './components/Pricing.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Testimonial />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
