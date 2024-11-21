import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { TechIcon } from '@/components/shared/TechIcon';
import { motion } from 'framer-motion';

const technologies = [
  { icon: SiReact, name: 'React' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiExpress, name: 'Express' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiTailwindcss, name: 'Tailwind' },
];

export const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-wrap justify-center gap-8"
    >
      {technologies.map((tech, index) => (
        <TechIcon
          key={tech.name}
          icon={tech.icon}
          name={tech.name}
          delay={0.1 * index}
        />
      ))}
    </motion.div>
  );
};
