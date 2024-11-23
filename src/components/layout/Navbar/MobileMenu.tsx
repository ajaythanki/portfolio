'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from './NavLink'
import { ModeToggle } from '@/components/mode-toggle'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ name: string; href: string }>
}

export const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white dark:bg-gray-900 shadow-xl z-50 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
                <span className="text-lg font-semibold">Menu</span>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 px-4 py-6 space-y-6">
                {navItems.map((item) => (
                  <div key={item.name} className="block">
                    <NavLink
                      href={item.href}
                      className="block text-lg"
                      onClick={(e) => {
                        const href = e.currentTarget.getAttribute('href')
                        if (href?.startsWith('/#')) {
                          e.preventDefault()
                          const targetId = href.replace('/#', '')
                          const targetElement = document.getElementById(targetId)
                          if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' })
                            onClose()
                          }
                        } else {
                          onClose()
                        }
                      }}
                    >
                      {item.name}
                    </NavLink>
                  </div>
                ))}
              </nav>

              <div className="p-4 border-t dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Theme
                  </span>
                  <ModeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
