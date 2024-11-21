import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface TechIconProps {
  icon: IconType;
  name: string;
  delay?: number;
}

export const TechIcon = ({ icon: Icon, name, delay = 0 }: TechIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
    >
      <Icon className="w-8 h-8" />
      <span className="text-sm">{name}</span>
    </motion.div>
  );
};
