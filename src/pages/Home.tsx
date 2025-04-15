import { lazy } from 'react';

const Hero = lazy(() => import('@/components/sections/Hero'));
const About = lazy(() => import('@/components/sections/About'));
const Experience = lazy(() => import('@/components/sections/Experience'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const Services = lazy(() => import('@/components/sections/Services'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Contact = lazy(() => import('@/components/sections/Contact'));
const Testimonials = lazy(() => import('@/components/sections/Testimonials'));
const Footer = lazy(() => import('@/components/layout/Footer'));
const Navbar = lazy(() => import('@/components/layout/Navbar'));

export default function Home() {
  return (
    <>
      <Navbar />
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
