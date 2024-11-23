'use client'

import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
  index: number;
}

export const TestimonialCard = ({ name, role, company, testimonial, image, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 relative"
    >
      <div className="absolute -top-4 left-6">
        <div className="bg-indigo-500 dark:bg-indigo-600 rounded-full p-2 shadow-lg">
          <FaQuoteLeft className="text-white w-4 h-4" />
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4 mt-2">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {role} at {company}
          </p>
        </div>
      </div>

      <motion.p 
        className="text-gray-600 dark:text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + index * 0.1 }}
      >
        "{testimonial}"
      </motion.p>
    </motion.div>
  );
};
