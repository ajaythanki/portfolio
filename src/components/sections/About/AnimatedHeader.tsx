'use client'

import { motion } from 'framer-motion';

interface AnimatedHeaderProps {
  title: string;
  description: string;
}

export const AnimatedHeader = ({ title, description }: AnimatedHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
        {description}
      </p>
    </motion.div>
  );
};
