import { motion } from 'framer-motion';

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <motion.div
        className="w-12 h-12 border-4 border-gray-300 dark:border-gray-700 border-t-blue-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};
