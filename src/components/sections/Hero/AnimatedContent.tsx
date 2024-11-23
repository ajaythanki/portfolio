'use client'

import { motion } from 'framer-motion';
import { LinkButton } from '@/components/shared/Button';
import { SocialLinks } from './SocialLinks';
import { TechStack } from './TechStack';

interface AnimatedContentProps {
  title: string;
  subtitle: string;
  description: string;
}

export const AnimatedContent = ({ title, subtitle, description }: AnimatedContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
        {title}
      </h1>
      
      <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
        {subtitle}
      </h2>
      
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        {description}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <LinkButton href="#projects">
          View Projects
        </LinkButton>
        <LinkButton href="#contact" variant="outline">
          Contact Me
        </LinkButton>
      </div>

      <SocialLinks />
      <TechStack />
    </motion.div>
  );
};
