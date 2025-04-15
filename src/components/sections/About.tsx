import { Card, CardContent } from "@/components/ui/custom/Card"
import { motion } from "framer-motion"
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiGithub, SiNextdotjs, SiRedux, SiPostman, SiVisualstudiocode, SiVercel, SiMui, SiWebflow, SiBootstrap, SiFirebase, SiMysql,  SiAmazonaws,  SiGooglecloud, SiTrello } from "react-icons/si"
import { User, Code2, Briefcase, GraduationCap } from "lucide-react"

interface HighlightCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const HighlightCard = ({ icon, title, description }: HighlightCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group"
  >
    <Card className="bg-[hsl(var(--surface-bright))] border-[hsl(var(--border))] hover:border-[hsl(var(--accent-1))] transition-all backdrop-blur-sm rounded-2xl">
      <CardContent className="p-6">
        <div className="text-[hsl(var(--accent-1))] mb-4 text-2xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[hsl(var(--accent-1))] transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

interface SkillCardProps {
  title: string
  description: string
  icon: React.ReactNode
  skills: Array<{
    name: string
    icon: React.ReactNode
  }>
}

const SkillCard = ({ title, description, icon, skills }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group h-full"
  >
    <Card className="h-full bg-[hsl(var(--surface-bright))] border-[hsl(var(--border))] hover:border-[hsl(var(--accent-1))] transition-all backdrop-blur-sm rounded-2xl">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="text-[hsl(var(--accent-1))] mb-4 text-3xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[hsl(var(--accent-1))] transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-6 text-sm flex-grow">{description}</p>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-gray-300 hover:text-[hsl(var(--accent-1))] transition-colors"
            >
              <span className="text-xl">{skill.icon}</span>
              <span className="text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export default function About() {
  const highlights = [
    {
      icon: <User />,
      title: "Who I Am",
      description: "A specialized Webflow and MERN Stack Developer & Designer with 5+ years of web development experience.",
    },
    {
      icon: <Code2 />,
      title: "What I Do",
      description: "Build responsive web applications with a focus on user experience using modern technologies like NextJS, ReactJS, and Webflow.",
    },
    {
      icon: <Briefcase />,
      title: "Experience",
      description: "5+ years in web development with 3+ years specializing in React ecosystem and MERN stack development.",
    },
    {
      icon: <GraduationCap />,
      title: "Services",
      description: "Converting designs to code, building web applications, improving performance, and implementing CMS solutions.",
    },
  ]

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Expertise in modern frontend frameworks and design tools.",
      icon: <SiReact />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "React.js", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Material UI", icon: <SiMui /> },
        { name: "Webflow", icon: <SiWebflow /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
    },
    {
      title: "Backend & Database",
      description: "Building robust server-side applications and managing databases.",
      icon: <SiNodedotjs />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "MySQL", icon: <SiMysql /> },
        // { name: "GraphQL", icon: <SiGraphql /> },
      ],
    },
    {
      title: "DevOps & Tools",
      description: "Leveraging cloud services and development tools.",
      icon: <SiAmazonaws />,
      skills: [
        { name: "AWS", icon: <SiAmazonaws /> },
        // { name: "Docker", icon: <SiDocker /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "VS Code", icon: <SiVisualstudiocode /> },
        { name: "GCP", icon: <SiGooglecloud /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Trello", icon: <SiTrello /> },
      ],
    },
  ]

  return (
    <section className="py-20 bg-[hsl(var(--surface))] relative overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Passionate about building meaningful solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <HighlightCard {...highlight} />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="h-full"
            >
              <SkillCard {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
