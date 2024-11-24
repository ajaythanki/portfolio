import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'
import { PlaceholderImage } from '@/components/ui/placeholder-image'

const projects = [
  {
    title: "Deal Diner - User Platform",
    description: "A comprehensive food ordering platform with real-time order tracking and payment integration.",
    image: "/images/deal-diner-user-site.jpg",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yourusername/deal-diner",
    liveUrl: "https://deal-diner.com"
  },
  {
    title: "Deal Diner - Merchant Dashboard",
    description: "Advanced dashboard for restaurant owners to manage orders, menu, and analytics.",
    image: "/images/deal-diner-merchant-dashboard.jpg",
    tags: ["React", "Firebase", "Material UI"],
    githubUrl: "https://github.com/yourusername/deal-diner-merchant",
    liveUrl: "https://merchant.deal-diner.com"
  },
  {
    title: "Deal Diner - Admin Portal",
    description: "Administrative platform for managing restaurants, users, and system configurations.",
    image: "/images/deal-diner-admin-dashboard.jpg",
    tags: ["React", "TypeScript", "Redux"],
    githubUrl: "https://github.com/yourusername/deal-diner-admin",
    liveUrl: "https://admin.deal-diner.com"
  },
  {
    title: "Telemedicine Platform",
    description: "Healthcare platform connecting patients with doctors for virtual consultations.",
    image: "/images/telemed-user-site.jpg",
    tags: ["Next.js", "WebRTC", "Tailwind"],
    githubUrl: "https://github.com/yourusername/telemedicine",
    liveUrl: "https://telemedicine.com"
  },
  {
    title: "MAV Venue Dashboard",
    description: "Event venue management system with booking and scheduling features.",
    image: "/images/mav-venue-dashboard.jpg",
    tags: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/mav-venue",
    liveUrl: "https://mav-venue.com"
  },
  {
    title: "Nike Landing Page",
    description: "Modern and responsive landing page design for Nike products.",
    image: "/images/nike-landing-page.jpg",
    tags: ["React", "Framer Motion", "Tailwind"],
    githubUrl: "https://github.com/yourusername/nike-landing",
    liveUrl: "https://nike-landing.com"
  }
]

export default function Projects() {
  return (
    <section className="py-20 bg-black relative overflow-hidden" id="projects">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development
            that showcases my skills and passion for building innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-[hsl(var(--surface))] border-[hsl(var(--border))] overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div className="relative h-48">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <PlaceholderImage className="w-full h-full" />
                )}
              </div>
              <CardContent className="pt-8 px-6 pb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[hsl(var(--accent-1))/0.1] text-[hsl(var(--accent-1))] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[hsl(var(--accent-1))] text-[hsl(var(--accent-1))] hover:bg-[hsl(var(--accent-1))/0.1]"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" /> Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[hsl(var(--accent-1))] text-[hsl(var(--accent-1))] hover:bg-[hsl(var(--accent-1))/0.1]"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
