"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TestimonialCard } from "./TestimonialCard"
import { testimonials } from "@/lib/data"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoSliding, setIsAutoSliding] = useState(true)

  const nextTestimonial = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isAutoSliding) {
      const timer = setInterval(() => {
        nextTestimonial()
      }, 5000) // Change slide every 5 seconds

      return () => clearInterval(timer)
    }
  }, [isAutoSliding, nextTestimonial])

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="py-20 bg-[hsl(var(--surface))] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it - here's what others have to say about working with me.
          </p>
        </motion.div>

        <div className="relative h-[400px] md:h-[300px] flex items-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <TestimonialCard {...testimonials[currentIndex]} index={currentIndex} />
            </motion.div>
          </AnimatePresence>

          <div className="absolute -top-5 lg:bottom-1/2 -translate-y-1/2 lg:translate-y-1/2 inset-0 flex items-center justify-between pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full pointer-events-auto bg-[hsl(var(--surface-bright))] text-white hover:bg-[hsl(var(--accent-1))] transition-colors z-10 opacity-70 hover:opacity-100"
              onClick={() => {
                prevTestimonial()
                setIsAutoSliding(false)
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full pointer-events-auto bg-[hsl(var(--surface-bright))] text-white hover:bg-[hsl(var(--accent-1))] transition-colors z-10 opacity-70 hover:opacity-100"
              onClick={() => {
                nextTestimonial()
                setIsAutoSliding(false)
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

