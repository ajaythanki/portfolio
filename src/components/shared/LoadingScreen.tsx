import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen flex items-center justify-center"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ajay Thanki
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
