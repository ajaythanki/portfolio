import { motion } from 'framer-motion';
import { LinkButton } from '@/components/shared/Button';
import { SocialLinks } from './SocialLinks';
import { TechStack } from './TechStack';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
            Ajay Thanki
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
            MERN Stack Developer | React/Next.js Expert
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate full-stack developer with 3+ years of experience in building modern web applications
            using the MERN stack and related technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <LinkButton href="#projects">
              View Projects
            </LinkButton>
            <LinkButton href="#contact" variant="outline">
              Contact Me
            </LinkButton>
          </div>

          <SocialLinks />
          <TechStack />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
