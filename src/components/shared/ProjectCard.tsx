'use client'

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  secondaryImages?: string[];
  tags: string[];
  github?: string;
  live: string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        {!imageError ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageError(true)}
            loading={project.id <= 3 ? "eager" : "lazy"}
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <span className="text-sm">Image not available</span>
          </div>
        )}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <div className="p-6">
        <motion.h3 
          className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-400 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {project.tags.map((tag, index) => (
            <motion.span
              key={tag}
              className="px-3 py-1 text-sm bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-800"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </motion.a>
          )}
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt className="text-lg" />
            <span>Live Demo</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};
