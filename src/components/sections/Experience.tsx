'use client'

import { motion } from "framer-motion"

interface TimelineItem {
  title: string
  organization: string
  duration: string
  description: string
}

interface TimelineSection {
  title: string
  items: TimelineItem[]
}

const experienceData: TimelineSection[] = [
  {
    title: 'WORK EXPERIENCE',
    items: [
      {
        title: 'MERN Stack Developer',
        organization: 'Web Brains Technologies',
        duration: '2024 - Current',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
      },
      {
        title: 'Freelance Web Developer',
        organization: 'Various',
        duration: '2019 - 2024',
        description: 'Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
      },
    ]
  },
  {
    title: 'EDUCATION',
    items: [
      {
        title: 'Bachelors Degree',
        organization: 'Shri V.J. Modha College of I.T., Porbandar, Gujarat, India',
        duration: '2015 - 2018',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
      },
      {
        title: 'HSC',
        organization: 'Navyug Vidhyalaya - Porbandar, Gujarat, India',
        duration: '2014 - 2015',
        description: 'Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
      },
      {
        title: 'SSC',
        organization: 'Navyug Vidhyalaya - Porbandar, Gujarat, India',
        duration: '2009 - 2010',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
      }
    ]
  }
]

const TimelineEntry = ({ item, index }: { item: TimelineItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="mb-12 ml-6 group"
  >
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
      className="absolute w-4 h-4 bg-[hsl(var(--accent-1))] rounded-full -left-2 border-4 border-[hsl(var(--surface))] transition-transform duration-300 group-hover:scale-110"
    />
    <motion.div
      whileHover={{ y: -5 }}
      className="relative bg-[hsl(var(--surface-bright))] p-6 rounded-2xl backdrop-blur-sm border border-[hsl(var(--border))] transition-all duration-300 hover:bg-[hsl(var(--surface-bright))/70] hover:border-[hsl(var(--accent-1))]"
    >
      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{item.organization} - {item.duration}</p>
      <p className="text-gray-300">{item.description}</p>
    </motion.div>
  </motion.div>
)

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[hsl(var(--surface))] text-white p-8 font-mono"
    >
      <div className="max-w-4xl mx-auto">
        {experienceData.map((section, idx) => (
          <div key={idx} className="relative pb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 mb-12 bg-[hsl(var(--surface-bright))] text-white text-sm tracking-widest rounded-full border border-[hsl(var(--border))] backdrop-blur-sm"
            >
              {section.title}
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative border-l-2 border-[hsl(var(--accent-1))]"
            >
              {section.items.map((item, index) => (
                <TimelineEntry key={index} item={item} index={index} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
