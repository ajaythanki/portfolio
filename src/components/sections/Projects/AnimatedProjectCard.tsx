'use client'

import { Project, ProjectCard } from '@/components/shared/ProjectCard';
import { motion } from 'framer-motion';

export const AnimatedProjectCard = ({ 
  project, 
  index 
}: { 
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 1.11, 0.81, 0.99] // spring-like easing
      }}
    >
      <ProjectCard project={project} />
    </motion.div>
  );
};
