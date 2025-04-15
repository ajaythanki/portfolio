import { motion } from "framer-motion"
import { FaQuoteLeft } from "react-icons/fa"

interface TestimonialCardProps {
  name: string
  role?: string
  company?: string
  testimonial: string
  image?: string
  index?: number
  rating?: number
}

export const TestimonialCard = ({ name, role, company, testimonial, image, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-[hsl(var(--surface-bright))] rounded-2xl p-6 border border-[hsl(var(--border))] hover:border-[hsl(var(--accent-1))] transition-all relative backdrop-blur-sm max-w-3xl mx-auto">
      <div className="absolute -top-4 left-6">
        <div className="bg-[hsl(var(--accent-1))] rounded-full p-2 shadow-lg">
          <FaQuoteLeft className="text-white w-4 h-4" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-4 mt-2">
        {image && <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[hsl(var(--accent-1))]">
           <img src={image || "/placeholder.svg?height=64&width=64"} alt={name} className="object-cover w-full h-full" />
        </div>}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-white text-lg">{name}</h4>
          {role && company && <p className="text-sm text-gray-400">
            {role} at {company}
          </p>}
        </div>
      </div>

      <motion.p
        className="text-gray-300 leading-relaxed text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        "{testimonial}"
      </motion.p>
      {rating && (
        <div className="flex align-center justify-center my-2">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${index < (rating || 0) ? 'text-yellow-500' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 15l-5.878 3.09 1.12-6.57L0 6.36l6.637-.96L10 0l2.363 5.4L20 6.36l-5.242 5.16 1.12 6.57L10 15z" />
            </svg>
          ))}
          {" "}<span className="text-white font-medium  leading-tight">({rating} / 5)</span>
        </div>)}
    </div>
  )
}

