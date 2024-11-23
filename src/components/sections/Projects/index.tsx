import { Project } from '@/components/shared/ProjectCard';
import { AnimatedProjectCard } from './AnimatedProjectCard';

const projects: Project[] = [
  {
    id: 1,
    title: 'Nike Shoes Landing Page',
    description: 'A modern and responsive landing page for Nike shoes, converted from Figma design to a fully functional React website, showcasing Tailwind CSS implementation.',
    image: 'images/nike-landing-page.jpg',
    tags: ['React', 'Tailwind CSS', 'Figma', 'Responsive Design'],
    github: 'https://github.com/ajaythanki/nike-shoes',
    live: 'https://ajaythanki.github.io/nike-shoes/',
  },
  {
    id: 2,
    title: 'Telemed MD',
    description: 'Full-stack telemedicine platform featuring e-commerce flow, doctor & pharmacist dashboards. Implemented user authentication, prescription management, and appointment scheduling.',
    image: 'images/telemed-user-site.jpg',
    secondaryImages: ['images/telemed-admin-dashboard.jpg'],
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'JWT', 'Material-UI', 'Formik'],
    github: 'https://github.com/ajaythanki/telemed-md',
    live: 'https://portal.telemedmd.ca/',
  },
  {
    id: 3,
    title: 'Deal Diner',
    description: 'Comprehensive restaurant platform with promotional website, admin dashboard for CMS, and merchant dashboard with custom restaurant registration stepper.',
    image: 'images/deal-diner-user-site.jpg',
    secondaryImages: ['images/deal-diner-admin-dashboard.jpg', 'images/deal-diner-merchant-dashboard.jpg'],
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe', 'Google Maps', 'Firebase'],
    github: 'https://github.com/ajaythanki/deal-diner',
    live: 'https://dealdiner.com/',
  },
  {
    id: 4,
    title: 'MAV Admin Dashboard',
    description: 'Full-featured admin dashboard for managing venues, staff, and rooms. Includes authentication, venue management, and CMS modules.',
    image: 'images/mav-admin-dashboard.jpg',
    secondaryImages: ['images/mav-venue-dashboard.jpg'],
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Material-UI', 'JWT'],
    github: 'https://github.com/ajaythanki/mav-admin',
    live: 'https://admin.mav.com/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedProjectCard 
              key={project.id} 
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
