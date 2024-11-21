import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ProjectLinksProps {
  github?: string;
  live?: string;
  delay?: number;
}

export const ProjectLinks = ({ github, live, delay = 0 }: ProjectLinksProps) => {
  if (!github && !live) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="flex gap-4 mt-4"
    >
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <FaGithub className="w-5 h-5" />
          <span>Code</span>
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <FaExternalLinkAlt className="w-4 h-4" />
          <span>Live Demo</span>
        </a>
      )}
    </motion.div>
  );
};
