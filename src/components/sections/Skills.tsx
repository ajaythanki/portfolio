import { Card, CardContent } from "@/components/ui/custom/Card"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive web applications with cutting-edge technologies.",
    skills: [
      { name: "React.js", level: "Expert", percentage: 90 },
      { name: "Next.js", level: "Intermediate", percentage: 75 },
      { name: "TypeScript", level: "Advanced", percentage: 80 },
      { name: "Tailwind CSS", level: "Expert", percentage: 95 },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side solutions and scalable architectures.",
    skills: [
      { name: "Node.js", level: "Advanced", percentage: 85 },
      { name: "Express.js", level: "Advanced", percentage: 80 },
      { name: "MongoDB", level: "Intermediate", percentage: 75 },
      { name: "RESTful APIs", level: "Expert", percentage: 90 },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Implementing efficient development workflows and deployment strategies.",
    skills: [
      { name: "Git", level: "Advanced", percentage: 85 },
      // { name: "Docker", level: "Intermediate", percentage: 70 },
      { name: "AWS", level: "Intermediate", percentage: 65 },
      { name: "Testing", level: "Intermediate", percentage: 65 },
      { name: "CI/CD", level: "Intermediate", percentage: 65 },
    ],
  },
]

function SkillBar({ skill, index }: { skill: { name: string; level: string; percentage: number }; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6 group"
    >
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="text-white font-medium">{skill.name}</span>
          <span className="ml-2 text-sm text-[hsl(var(--accent-1))]">({skill.level})</span>
        </div>
        <span className="text-[hsl(var(--accent-1))]">{skill.percentage}%</span>
      </div>
      <div className="relative h-2 bg-[hsl(var(--surface))] rounded-xl overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section className="py-20 bg-[hsl(var(--surface))] relative overflow-hidden" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-white"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical expertise and proficiency levels across different domains.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <Card className="h-full bg-[hsl(var(--surface-bright))] border-[hsl(var(--border))] hover:border-[hsl(var(--accent-1))] transition-all backdrop-blur-sm rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{category.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm">{category.description}</p>
                  {category.skills.map((skill, index) => (
                    <SkillBar key={index} skill={skill} index={index} />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
