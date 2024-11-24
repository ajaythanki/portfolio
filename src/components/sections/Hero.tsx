import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center relative overflow-hidden" id="home">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Ajay Thanki</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-400 mb-8">
              MERN Stack Developer
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              I craft responsive websites where technology meets creativity. Building innovative web applications with modern technologies.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#projects" className="group">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/yourusername" target="_blank" className="group">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" className="group">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-1))] to-[hsl(var(--accent-1))/0.2] rounded-full animate-pulse"></div>
              
              {/* Image container */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden bg-[hsl(var(--surface))] p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-[hsl(var(--surface-bright))] relative">
                  <Image
                    src="/profile-pic.jpg"
                    alt="Ajay Thanki"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
