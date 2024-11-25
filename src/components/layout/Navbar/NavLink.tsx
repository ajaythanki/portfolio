'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const NavLink = ({ href, children, className = '', onClick }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href))

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e)
    }
    
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('/#')) {
      e.preventDefault()
      const targetId = href.replace('/#', '')
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${className} relative py-2 text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${
        isActive ? 'font-semibold' : ''
      }`}
    >
      {children}
      {isActive && (
        <span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300"
          aria-hidden="true"
        />
      )}
    </Link>
  )
}
