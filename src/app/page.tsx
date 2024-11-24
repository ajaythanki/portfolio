import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Testimonials from '@/components/sections/Testimonials'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
