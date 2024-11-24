import { Card, CardContent } from "@/components/ui/card"
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiGithub, SiNextdotjs, SiRedux, SiPostman, SiVisualstudiocode, SiVercel } from "react-icons/si"

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
  <Card className="bg-[hsl(var(--surface-bright))] border-[hsl(var(--border))] hover:border-[hsl(var(--accent-1))] transition-colors">
    <CardContent className="pt-8 px-6 pb-6">
      <div className="text-[hsl(var(--accent-1))] mb-4 text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-300 hover:text-[hsl(var(--accent-1))] transition-colors">
            <span className="text-xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
)

export default function About() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and tools.",
      icon: <SiReact />,
      skills: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications and RESTful APIs.",
      icon: <SiNodedotjs />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "RESTful APIs", icon: <SiPostman /> },
      ],
    },
    {
      title: "Development Tools",
      description: "Utilizing industry-standard tools for efficient development workflow.",
      icon: <SiGit />,
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "VS Code", icon: <SiVisualstudiocode /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Vercel", icon: <SiVercel /> },
      ],
    },
  ]

  return (
    <section className="py-20 bg-[hsl(var(--surface))]" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a passionate MERN Stack Developer with experience in building web applications
            using modern technologies. I love creating elegant solutions to complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}
