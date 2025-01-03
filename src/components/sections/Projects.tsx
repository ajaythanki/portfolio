'use client'

import { Card, CardContent } from "@/components/ui/custom/Card"
import { Button } from "@/components/ui/custom/Button"
import { Github, ExternalLink, Boxes } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Full Stack Restaurant Portal",
    description: "A Restaurant Portal for the client where users can find the deals nearby them.",
    // image: "",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Bootsrap", "MUI", "Redux", "JWT", "Firebase Push Notifications"],
    features: [
      "Admin Dashboard",
      "User management",
      "Merchant Dashboard",
      "Restaurant verification",
      "Secure Payment Integration",
      "Deal Finding",
      "User Reviews & Ratings",
      "Table Booking, Menu and Analytics"
    ]
  },
  
  {
    title: "Full Stack Medicine Platform",
    description: "Healthcare platform connecting patients with doctors for virtual consultations.",
    // image: "",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Bootstrap", "MUI", "Redux", "JWT", "Firebase Push Notifications"],
    features: [
      "Video & Chat consultations",
      "User management",
      "Secure Payment Integration",
      "Appointment scheduling",
      "Medical records",
      "E-prescriptions"
    ]
  },
  {
    title: "Indian Panchang App Admin Dashboard and Backend API",
    description: "Panchang management dashboard with features to manage mobile app's content and panchang data.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "MUI", "Redux", "JWT", ],
    features: [
      "Integration",
      "Importing Bulk data",
      "Event planning tools"
    ]
  },
  {
    title: "Nike Landing Page",
    description: "Modern and responsive landing page design of Nike product to showcase my tailwind skills.",
    image: "/images/nike-landing-page.jpg",
    tags: ["React", "Framer Motion", "Tailwind"],
    githubUrl: "https://github.com/ajaythanki/nike-shoes",
    liveUrl: "https://ajaythanki.github.io/nike-shoes/",
    features: [
      "Responsive design",
      "Animation effects",
      "Product showcase",
      "Performance optimized"
    ]
  },
  {
    title: "Business Advice",
    description: "I have developed whole login & signup flow with integration of Zapier, Memberstack, Airtable as per clients requirement.",
    image: "/images/business-advice.jpg",
    tags: ["Webflow", "Zapier", "Memberstack", "Airtable", "Javascript"],
    // githubUrl: "https://github.com/ajaythanki/nike-shoes",
    liveUrl: "https://businessadvice.com.au/",
    features: [
      "Responsive design",
      "Customized UI Development",
      "Customized Forms"
    ]
  },
  {
    title: "Air Pollution",
    description: "It's a Hugo website which is created from Bootstrap theme and all the data comes from csv API and it get updated every midnight and all the pages are dynamically generated through the cvs data API using Node and Gulp, it's deployed on GihHub Action and hosted on Netlify CMS.",
    image: "/images/airpollution.jpg",
    tags: ["Hugo", "Bootstrap", "Node.js", "Gulp", "Netlify"],
    // githubUrl: "https://github.com/ajaythanki/nike-shoes",
    liveUrl: "https://www.airpollution.io/",
    features: [
      "Responsive design",
      "Air Pollution Forecast",
      "Data Visualization",
      "Performance optimized"
    ]
  },
]

interface ProjectCardProps {
  project: typeof projects[0]
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <Card className="h-full bg-[hsl(var(--surface-bright))] border-[hsl(var(--border))] hover:border-[hsl(var(--accent-1))] transition-all backdrop-blur-sm rounded-2xl overflow-hidden">
        {project.image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="project-image radius-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-30 group-hover:opacity-0 transition-all duration-500" />
          </div>
        )}

        <CardContent className="p-6 relative">
          {/* Gradient overlay */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[hsl(var(--accent-1))] to-transparent opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700" />

          <div className="relative">
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[hsl(var(--accent-1))] transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-[hsl(var(--accent-1))/0.1] text-[hsl(var(--accent-1))] rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-2 mb-6">
              {project.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-1))]" />
                  {feature}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project?.githubUrl && 
              <Button
                variant="outline"
                size="sm"
                className="border-[hsl(var(--accent-1))] text-[hsl(var(--accent-1))] hover:bg-[hsl(var(--accent-1))/0.1] whitespace-nowrap"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="w-4 h-4 mr-2" /> Code
                </a>
              </Button>
              }
              {project?.liveUrl && 
              <Button
                variant="outline"
                size="sm"
                className="border-[hsl(var(--accent-1))] text-[hsl(var(--accent-1))] hover:bg-[hsl(var(--accent-1))/0.1] whitespace-nowrap"
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                </a>
              </Button>
              }
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section className="py-20 bg-[hsl(var(--surface))] relative overflow-hidden" id="projects">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[hsl(var(--accent-1))] opacity-[0.03] blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-[hsl(var(--accent-2))] opacity-[0.03] blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Boxes className="w-8 h-8 text-[hsl(var(--accent-1))]" />
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of web applications and digital solutions. Each project represents
            my commitment to creating innovative, user-focused experiences with modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
