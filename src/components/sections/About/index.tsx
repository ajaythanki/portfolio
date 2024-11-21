import { motion } from 'framer-motion';
import { TechStack } from '@/components/sections/Hero/TechStack';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            I'm a passionate full-stack developer with expertise in the MERN stack and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              With over 4 years of experience in web development, I've worked on various projects
              ranging from e-commerce platforms to enterprise applications. I specialize in
              building scalable, performant web applications using React.js and Node.js.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I'm passionate about creating intuitive user experiences and writing clean,
              maintainable code. I stay up-to-date with the latest technologies and best
              practices in web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I work with a variety of modern web technologies and tools:
              </p>
              <TechStack />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
