import { Github, Linkedin, Twitter } from 'lucide-react'

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/yourusername",
    label: "GitHub"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn"
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: "https://twitter.com/yourusername",
    label: "Twitter"
  }
]

export function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Ajay Thanki</h3>
            <p className="text-gray-400">MERN Stack Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--accent-1))] hover:text-[hsl(var(--accent-1))/0.8] transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              {new Date().getFullYear()} Ajay Thanki. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
