import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const navigation = {
  main: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/yourusername',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:hello@example.com',
      icon: Mail,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--surface))] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[hsl(var(--accent-1))] opacity-[0.03] blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-[hsl(var(--accent-2))] opacity-[0.03] blur-[100px] rounded-full" />
      
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Link
              to="#home"
              className="text-2xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
            >
              Ajay Thanki
            </Link>
            <p className="text-gray-400 max-w-xs">
              Crafting digital experiences with modern web technologies. Let's build something amazing together.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"
          >
            <div>
              <h3 className="text-sm font-semibold text-white">Quick Links</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-[hsl(var(--accent-1))] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Contact Info</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="text-gray-400">
                  <strong className="text-white">Location:</strong><br />
                  Ahmedabad, Gujarat, India
                </li>
                <li>
                  <Link
                    to="mailto:hello@example.com"
                    className="text-gray-400 hover:text-[hsl(var(--accent-1))] transition-colors"
                  >
                    <strong className="text-white">Email:</strong><br />
                    hello@example.com
                  </Link>
                </li>
                <li>
                  <Link
                    to="tel:+1234567890"
                    className="text-gray-400 hover:text-[hsl(var(--accent-1))] transition-colors"
                  >
                    <strong className="text-white">Phone:</strong><br />
                    +1 (234) 567-890
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-[hsl(var(--border))] sm:mt-20 lg:mt-24"
        >
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ajay Thanki. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
