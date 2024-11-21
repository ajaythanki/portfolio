import { motion } from 'framer-motion';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ name: string; href: string; }>;
}

export const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-2 py-2"
    >
      {navItems.map((item) => (
        <div key={item.name} className="px-4 py-2">
          <NavLink href={item.href} onClick={onClose}>
            {item.name}
          </NavLink>
        </div>
      ))}
    </motion.div>
  );
};
