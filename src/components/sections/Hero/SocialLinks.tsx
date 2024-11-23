'use client';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/ajaythanki',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/ajaythanki',
    label: 'LinkedIn',
  },
];

export const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex justify-center gap-6 mb-12"
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <Icon className="w-8 h-8" />
        </a>
      ))}
    </motion.div>
  );
};
