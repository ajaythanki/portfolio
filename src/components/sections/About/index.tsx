import { TechStack } from '@/components/sections/Hero/TechStack';
import { AnimatedHeader } from './AnimatedHeader';
import { AnimatedSection } from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedHeader 
          title="About Me"
          description="I'm a passionate full-stack developer with expertise in the MERN stack and modern web technologies."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection title="My Journey" direction="left" delay={0.2}>
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
          </AnimatedSection>

          <AnimatedSection title="Skills & Technologies" direction="right" delay={0.4}>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                I work with a wide range of technologies in the JavaScript ecosystem:
              </p>
              <TechStack />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
