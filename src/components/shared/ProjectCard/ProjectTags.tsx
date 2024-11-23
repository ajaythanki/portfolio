import { motion } from 'framer-motion';

interface ProjectTagsProps {
  tags: string[];
  delay?: number;
}

export const ProjectTags = ({ tags, delay = 0 }: ProjectTagsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="flex flex-wrap gap-2 mt-4"
    >
      {tags?.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
        >
          {tag}
        </span>
      ))}
    </motion.div>
  );
};
