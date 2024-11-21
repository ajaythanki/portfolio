import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectTags } from './ProjectTags';
import { ProjectLinks } from './ProjectLinks';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  secondaryImages?: string[];
  tags: string[];
  github?: string;
  live?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const delay = 0.1 * index;
  const allImages = [project.image, ...(project.secondaryImages || [])];

  const handleImageChange = (newIndex: number) => {
    setCurrentImageIndex(newIndex);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative group">
        <img
          src={allImages[currentImageIndex]}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        
        {allImages.length > 1 && (
          <>
            <button
              onClick={() => handleImageChange((currentImageIndex - 1 + allImages.length) % allImages.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={() => handleImageChange((currentImageIndex + 1) % allImages.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next image"
            >
              →
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleImageChange(i)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    i === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <ProjectTags tags={project.tags} />
        <ProjectLinks github={project.github} live={project.live} />
      </div>
    </motion.article>
  );
};
