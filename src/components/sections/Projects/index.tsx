import { useState } from 'react'
import { Boxes, Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from "@/lib/data"
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"All" | "Freelance" | "Professional">("All")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter projects based on active tab and search query
  const filteredProjects = projects.filter(p =>
    (activeTab === "All" || p.type === activeTab) &&
    (p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <section className="py-20 bg-[hsl(var(--surface))] relative overflow-hidden" id="projects">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[hsl(var(--accent-1))] opacity-[0.03] blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-[hsl(var(--accent-2))] opacity-[0.03] blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Boxes className="w-8 h-8 text-[hsl(var(--accent-1))]" />
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of web applications and digital solutions.
          </p>
        </motion.div>

        {/* Tabs & Search */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          {/* Tabs */}
          <div className="flex justify-center space-x-4 w-full md:w-auto">
            {["All", "Freelance", "Professional"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "All" | "Freelance" | "Professional")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === tab
                    ? "bg-[hsl(var(--accent-1))] text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full max-w-sm mt-3 md:mt-0">
            <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full  bg-gray-800 text-white px-10 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[hsl(var(--accent-1))]"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">No projects found.</p>
          )}
        </div>
      </div>
    </section>
  )
}
