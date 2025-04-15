import * as React from 'react'
import { cn } from '@/lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "whileHover" | "whileTap"> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', isLoading = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
    
    const variants = {
      default: 'bg-white text-black hover:bg-gray-100',
      outline: 'border border-[hsl(var(--border))] bg-transparent hover:bg-[hsl(var(--surface-bright))] backdrop-blur-sm',
      ghost: 'bg-transparent text-white hover:bg-[hsl(var(--surface-bright))] backdrop-blur-sm'
    }
    
    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 px-3',
      lg: 'h-11 px-8'
    }

    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
        ) : null}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button, type ButtonProps }
