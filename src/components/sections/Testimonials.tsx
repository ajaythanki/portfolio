import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

interface Testimonial {
  content: string
  author: {
    name: string
    title: string
    image: string
    social: {
      github?: string
      linkedin?: string
      twitter?: string
    }
  }
}

const testimonials: Testimonial[] = [
  {
    content: "Working with Ajay was a fantastic experience. His attention to detail and technical expertise made our project a huge success.",
    author: {
      name: "John Doe",
      title: "Tech Lead at Company",
      image: "/testimonials/person1.jpg",
      social: {
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    }
  },
  {
    content: "Ajay's ability to solve complex problems and deliver high-quality solutions is impressive. A true professional.",
    author: {
      name: "Jane Smith",
      title: "Project Manager",
      image: "/testimonials/person2.jpg",
      social: {
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith"
      }
    }
  },
  {
    content: "Outstanding developer with great communication skills. Delivered the project on time with excellent quality.",
    author: {
      name: "Mike Johnson",
      title: "CTO at Startup",
      image: "/testimonials/person3.jpg",
      social: {
        github: "https://github.com/mikejohnson",
        twitter: "https://twitter.com/mikejohnson"
      }
    }
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-black relative overflow-hidden" id="testimonials">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here's what people are saying about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[hsl(var(--surface-bright))] border-[hsl(var(--border))] hover:border-[hsl(var(--accent-1))] transition-colors">
              <CardContent className="pt-8 px-6 pb-6">
                <p className="text-gray-300 mb-6 text-lg">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden">
                    <Image
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.author.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.author.title}</p>
                  </div>
                  <div className="ml-auto flex gap-2">
                    {testimonial.author.social.github && (
                      <a
                        href={testimonial.author.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[hsl(var(--accent-1))] transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {testimonial.author.social.linkedin && (
                      <a
                        href={testimonial.author.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[hsl(var(--accent-1))] transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {testimonial.author.social.twitter && (
                      <a
                        href={testimonial.author.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[hsl(var(--accent-1))] transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
