import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

const buttonVariants = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  outline: 'border-2 border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white',
  ghost: 'text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5',
  lg: 'px-8 py-3 text-lg',
};

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-lg transition-colors duration-200',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const LinkButton = ({
  href,
  ...props
}: ButtonProps & { href: string }) => {
  return (
    <a
      href={href}
      className={cn(
        'rounded-lg transition-colors duration-200',
        buttonVariants[props.variant || 'primary'],
        buttonSizes[props.size || 'md'],
        props.className
      )}
    >
      {props.children}
    </a>
  );
};
