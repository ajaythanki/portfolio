import { motion } from 'framer-motion';
import { ProjectCard, Project } from '@/components/shared/ProjectCard';

// Import project images
import nikeImg from '@/assets/nike-landing-page.jpg';
import telemedUserImg from '@/assets/telemed-user-site.jpg';
import telemedAdminImg from '@/assets/telemed-admin-dashboard.jpg';
import dealDinerUserImg from '@/assets/deal-diner-user-site.jpg';
import dealDinerAdminImg from '@/assets/deal-diner-admin-dashboard.jpg';
import dealDinerMerchantImg from '@/assets/deal-diner-merchant-dashboard.jpg';
import mavAdminImg from '@/assets/mav-admin-dashboard.jpg';
import mavVenueImg from '@/assets/mav-venue-dashboard.jpg';
import businessAdviceImg from '@/assets/business-advice.jpg';
import airPollutionImg from '@/assets/airpollution.jpg';
import fatahImg from '@/assets/fatah.jpg';

const projects: Project[] = [
  {
    id: 1,
    title: 'Nike Shoes Landing Page',
    description: 'A modern and responsive landing page for Nike shoes, converted from Figma design to a fully functional React website, showcasing Tailwind CSS implementation.',
    image: nikeImg,
    tags: ['React', 'Tailwind CSS', 'Figma', 'Responsive Design'],
    github: 'https://github.com/ajaythanki/nike-shoes',
    live: 'https://ajaythanki.github.io/nike-shoes/',
  },
  {
    id: 2,
    title: 'Telemed MD',
    description: 'Full-stack telemedicine platform featuring e-commerce flow, doctor & pharmacist dashboards. Implemented user authentication, prescription management, and appointment scheduling.',
    image: telemedUserImg,
    secondaryImages: [telemedAdminImg],
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'JWT', 'Material-UI', 'Formik'],
    github: 'https://github.com/ajaythanki/telemed-md',
    live: 'https://portal.telemedmd.ca/',
  },
  {
    id: 3,
    title: 'Deal Diner',
    description: 'Comprehensive restaurant platform with promotional website, admin dashboard for CMS, and merchant dashboard with custom restaurant registration stepper.',
    image: dealDinerUserImg,
    secondaryImages: [dealDinerAdminImg, dealDinerMerchantImg],
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe', 'Google Maps', 'Firebase'],
    github: 'https://github.com/ajaythanki/deal-diner',
    live: 'https://dealdiner.com/',
  },
  {
    id: 4,
    title: 'MAV Admin Dashboard',
    description: 'Full-featured admin dashboard for managing venues, staff, and rooms. Includes authentication, venue management, and CMS modules.',
    image: mavAdminImg,
    secondaryImages: [mavVenueImg],
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Material-UI', 'Google Maps'],
    github: 'https://github.com/ajaythanki/mav-admin-dashboard',
    live: 'https://app.mav.com.au/',
  },
  {
    id: 5,
    title: 'Business Advice',
    description: 'Custom webflow development with integrated authentication system. Implemented login/signup flows with Zapier, Memberstack, and Airtable integrations.',
    image: businessAdviceImg,
    tags: ['JavaScript', 'Webflow', 'Zapier', 'Airtable', 'Memberstack', 'Custom Forms'],
    github: 'https://github.com/ajaythanki/business-advice-app',
    live: 'https://businessadvice.com.au/',
  },
  {
    id: 6,
    title: 'Air Pollution Monitor',
    description: 'Dynamic Hugo website that displays air pollution data. Features automated daily updates through CSV API integration, deployed via GitHub Actions and Netlify CMS.',
    image: airPollutionImg,
    tags: ['Hugo', 'Node.js', 'Bootstrap', 'GitHub Actions', 'Netlify CMS', 'CSV API'],
    github: 'https://github.com/ajaythanki/air-pollution-monitor',
    live: 'https://www.airpollution.io/',
  },
  {
    id: 7,
    title: 'Fatah Consulting',
    description: 'Converted PSD design to a fully responsive Jekyll website, ensuring pixel-perfect implementation and optimal performance.',
    image: fatahImg,
    tags: ['Jekyll', 'SCSS', 'JavaScript', 'Responsive Design'],
    live: 'https://fatah.co/',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in full-stack development,
            from e-commerce platforms to admin dashboards and static sites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
