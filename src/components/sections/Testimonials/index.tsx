'use client'

import { motion } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    name: "John Smith",
    role: "Senior Developer",
    company: "TechCorp",
    testimonial: "Working with Ajay was a fantastic experience. His attention to detail and problem-solving skills are exceptional. He consistently delivered high-quality code and was always willing to go the extra mile.",
    image: "/testimonials/person1.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "InnovateSoft",
    testimonial: "Ajay is an outstanding developer who brings both technical expertise and creative solutions to every project. His ability to understand complex requirements and translate them into elegant solutions is remarkable.",
    image: "/testimonials/person2.jpg"
  },
  {
    name: "Michael Chen",
    role: "Tech Lead",
    company: "DevHub",
    testimonial: "I've had the pleasure of working with Ajay on several projects. His deep understanding of modern web technologies and commitment to writing clean, maintainable code makes him an invaluable team member.",
    image: "/testimonials/person3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it - here's what others have to say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
