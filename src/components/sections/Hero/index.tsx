import { AnimatedContent } from './AnimatedContent';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <AnimatedContent 
          title="Ajay Thanki"
          subtitle="MERN Stack Developer | React/Next.js Expert"
          description="Passionate full-stack developer with 3+ years of experience in building modern web applications using the MERN stack and related technologies."
        />
      </div>
    </section>
  );
};

export default Hero;
