import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Testimonials from '@/components/sections/Testimonials'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
