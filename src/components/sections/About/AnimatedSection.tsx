'use client'

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  title: string;
  children: ReactNode;
  direction: 'left' | 'right';
  delay?: number;
}

export const AnimatedSection = ({ title, children, direction, delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      {children}
    </motion.div>
  );
};
