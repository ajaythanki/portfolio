import { Card, CardContent } from "@/components/ui/custom/Card"
import { motion } from "framer-motion"
import { Code, Server, Palette } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  index: number
}

const ServiceCard = ({ title, description, features, icon, index }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group h-full"
  >
    <Card className="h-full bg-[hsl(var(--surface-bright))] border-[hsl(var(--border))] hover:border-[hsl(var(--accent-1))] transition-all backdrop-blur-sm rounded-2xl overflow-hidden">
      <CardContent className="p-6 flex flex-col h-full relative">
        {/* Gradient overlay */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[hsl(var(--accent-1))] to-transparent opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700" />
        
        <div className="text-[hsl(var(--accent-1))] mb-4 text-3xl group-hover:scale-110 transition-transform relative">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[hsl(var(--accent-1))] transition-colors relative">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-6 text-sm flex-grow relative">
          {description}
        </p>
        
        <ul className="space-y-2 relative">
          {features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-1))]" />
              {feature}
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
)

const services = [
  {
    title: "Frontend Development",
    description: "Creating responsive and intuitive user interfaces that provide exceptional user experiences.",
    icon: <Code className="w-7 h-7" />,
    features: [
      "Responsive web applications",
      "Single Page Applications (SPA)",
      "Interactive UI components",
      "Performance optimization",
    ],
  },
  {
    title: "Backend Development",
    description: "Building robust server-side solutions that power your web applications.",
    icon: <Server className="w-7 h-7" />,
    features: [
      "RESTful API development",
      "Database architecture",
      "Authentication & security",
      "Server optimization",
    ],
  },
  {
    title: "UI/UX Design",
    description: "Designing beautiful and functional interfaces that users love to interact with.",
    icon: <Palette className="w-7 h-7" />,
    features: [
      "User-centered design",
      "Wireframing & prototyping",
      "Visual design",
      "Interaction design",
    ],
  },
  // {
  //   title: "Database Solutions",
  //   description: "Designing and implementing efficient database solutions for your applications.",
  //   icon: <Database className="w-7 h-7" />,
  //   features: [
  //     "Database design",
  //     "Data modeling",
  //     "Query optimization",
  //     "Data migration",
  //   ],
  // },
  // {
  //   title: "Cloud Services",
  //   description: "Deploying and managing applications on modern cloud platforms.",
  //   icon: <Cloud className="w-7 h-7" />,
  //   features: [
  //     "Cloud deployment",
  //     "Serverless architecture",
  //     "CI/CD implementation",
  //     "Cloud optimization",
  //   ],
  // },
  // {
  //   title: "Technical Consulting",
  //   description: "Providing expert advice and solutions for your technical challenges.",
  //   icon: <Users className="w-7 h-7" />,
  //   features: [
  //     "Architecture planning",
  //     "Technology selection",
  //     "Performance audits",
  //     "Security assessment",
  //   ],
  // },
]

export default function Services() {
  return (
    <section className="py-20 bg-[hsl(var(--surface))] relative overflow-hidden" id="services">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[hsl(var(--accent-1))] opacity-[0.03] blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your needs. From frontend to backend,
            I deliver high-quality, scalable, and maintainable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
