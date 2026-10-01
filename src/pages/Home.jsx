import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Services from '../components/Services'
import Work from '../components/Work'
import About from '../components/About'
import Stats from '../components/Stats'
import Process from '../components/Process'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <About />
      <Stats />
      <Process />
      <CTA />
    </>
  )
}
