'use client'

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const iconMap = {
  'FaEnvelope': FaEnvelope,
  'FaGithub': FaGithub,
  'FaLinkedin': FaLinkedin,
};

interface ContactCardProps {
  iconName: string;
  label: string;
  value: string;
  href: string;
  index: number;
}

export const AnimatedContactCard = ({ iconName, label, value, href, index }: ContactCardProps) => {
  const Icon = iconMap[iconName as keyof typeof iconMap];
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <Icon className="text-4xl text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{label}</h3>
      <p className="text-gray-600 dark:text-gray-400">{value}</p>
    </motion.a>
  );
};
