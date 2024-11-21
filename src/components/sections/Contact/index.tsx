import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'ajaythanki@gmail.com',
    href: 'mailto:ajaythanki@gmail.com',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/ajaythanki',
    href: 'https://github.com/ajaythanki',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ajaythanki',
    href: 'https://www.linkedin.com/in/ajaythanki',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Icon className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {label}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
