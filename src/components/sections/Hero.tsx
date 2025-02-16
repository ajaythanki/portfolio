'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/custom/Button"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "tween", duration: 0.5 }
} as const;

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-[hsl(var(--surface))] flex items-center relative overflow-hidden py-20 lg:py-0" id="home">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[hsl(var(--accent-1))] opacity-[0.03] blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-[hsl(var(--accent-2))] opacity-[0.03] blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div variants={fadeIn} className="inline-block px-6 py-2 mb-6 bg-[hsl(var(--surface-bright))] text-[hsl(var(--accent-1))] text-sm tracking-widest rounded-full border border-[hsl(var(--border))] backdrop-blur-sm">
              👋 Welcome to my portfolio
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-4xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
            >
              Hi, I'm Ajay Thanki
            </motion.h1>
            
            <motion.div 
              variants={fadeIn}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-2xl lg:text-3xl text-white">MERN Stack Developer</span>
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent-1))] animate-pulse" />
            </motion.div>

            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              Passionate about crafting exceptional web experiences. Specializing in building modern, responsive applications with cutting-edge technologies.
            </motion.p>

            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button variant="default" className="group">
                <Link href="#contact" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Link>
              </Button>
              <Button variant="outline" className="group">
                <Link href="/resume" target="_blank" className="flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="flex items-center gap-6"
            >
              <Link href="https://github.com/ajaythanki" target="_blank" 
                className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com/in/ajaythanki" target="_blank"
                className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <div className="w-px h-6 bg-[hsl(var(--border))]" />
              <Link href="#projects" className="text-white hover:text-[hsl(var(--accent-1))] transition-colors flex items-center gap-2 group">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          {/* Right content - Profile Image */}
          <motion.div 
            variants={fadeIn}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px]">
              {/* Animated gradient rings */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-1))] to-[hsl(var(--accent-2))] rounded-full animate-pulse opacity-20" />
              <div className="absolute inset-[3px] bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent-1))] rounded-full animate-pulse opacity-10" />
              
              {/* Image container */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden bg-[hsl(var(--surface))] p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-[hsl(var(--surface-bright))] relative group">
                  <Image
                    src="/profile-pic.jpg"
                    alt="Ajay Thanki"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full transition-all duration-500 blur-[2px] group-hover:blur-0 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-30 group-hover:opacity-0 transition-all duration-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
