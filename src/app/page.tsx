// import { About } from '@/components/sections/About'
// import { Contact } from '@/components/sections/Contact'
// import { Hero } from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
// import { Skills } from '@/components/sections/Skills'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  )
}
