import { AnimatedContactCard } from './AnimatedContactCard';
import { AnimatedHeader } from './AnimatedHeader';

const contactInfo = [
  {
    iconName: 'FaEnvelope',
    label: 'Email',
    value: 'ajaythanki@gmail.com',
    href: 'mailto:ajaythanki@gmail.com',
  },
  {
    iconName: 'FaGithub',
    label: 'GitHub',
    value: 'github.com/ajaythanki',
    href: 'https://github.com/ajaythanki',
  },
  {
    iconName: 'FaLinkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ajaythanki',
    href: 'https://www.linkedin.com/in/ajaythanki',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <AnimatedHeader 
          title="Get in Touch"
          description="I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together!"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <AnimatedContactCard 
              key={info.label}
              {...info}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
