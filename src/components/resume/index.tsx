"use client"

import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Image from "next/image"

export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white text-gray-800">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G3VVAcDrgCZzWqdk1UXBkfgxoKGUFj.png"
          alt="Thanki Ajay"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">Thanki Ajay</h1>
          <p className="text-gray-600 max-w-2xl">
            Experienced Web Developer with 5+ years of experience building responsive web applications using HTML, CSS, Javascript & 3 years using Next.JS, React.JS, TypeScript, MongoDB, Node.JS, and ExpressJS, with a focus on user experience.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        {/* Left Sidebar */}
        <aside className="space-y-6">
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Porbandar, Gujarat</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:ajaythanki@gmail.com" className="text-blue-600 hover:underline">
                ajaythanki@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 90998 01722</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <a href="https://github.com/ajaythanki" className="text-blue-600 hover:underline">
                github.com/ajaythanki
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a href="https://linkedin.com/in/ajaythanki" className="text-blue-600 hover:underline">
                linkedin.com/in/ajaythanki
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">BCA</h3>
                <p className="text-gray-600">Saurashtra University</p>
                <p className="text-gray-500">2018 - 2021</p>
                <p className="text-gray-600">Rajkot, Gujarat</p>
              </div>
              <div>
                <h3 className="font-semibold">HSC</h3>
                <p className="text-gray-600">Navyug Vidyalaya (GSHSEB)</p>
                <p className="text-gray-500">2017 - 2018</p>
                <p className="text-gray-600">Porbandar, Gujarat</p>
              </div>
              <div>
                <h3 className="font-semibold">SSC</h3>
                <p className="text-gray-600">Navyug Vidyalaya (GSEB)</p>
                <p className="text-gray-500">2015 - 2016</p>
                <p className="text-gray-600">Porbandar, Gujarat</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React/Next.js",
                "Node",
                "Express",
                "MongoDB",
                "Javascript (ES6)",
                "HTML",
                "CSS",
                "MUI",
                "TailwindCSS",
                "Problem-Solving",
                "Teamwork",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content - Work Experience */}
        <main>
          <h2 className="text-xl font-bold mb-6">Work Experience</h2>
          
          {/* Current Role */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">MERN Stack Developer, Webbrians Technologies Pvt. Ltd.</h3>
            </div>
            <p className="text-gray-600 mb-2">Vadodara, Gujarat • May 2024 — Present</p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Projects</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium">SAAS Employee Expense Management System</h5>
                  <p className="text-gray-600 ml-4">
                    Developed a comprehensive SaaS platform for managing employee expenses, including features such as subscription management, secure payments, and real-time notifications.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium">Telemed</h5>
                  <p className="text-gray-600 ml-4">
                    Developed a healthcare platform enabling virtual consultations, appointment scheduling, and secure medical records management.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium">Full Stack Restaurant Portal</h5>
                  <p className="text-gray-600 ml-4">
                    Built a user-friendly restaurant portal with features like merchant dashboards, user reviews, and geolocation-based card discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Role */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">Freelance Web Developer, Self Employed</h3>
            </div>
            <p className="text-gray-600 mb-2">Porbandar, Gujarat • June 2018 — April 2024</p>
            <ul className="list-disc ml-4 space-y-2 text-gray-600">
              <li>Developed a diverse range of web apps, including e-commerce platform, custom websites, and SaaS solutions.</li>
              <li>Utilized a wide array of technologies such as React, Next, Node, MongoDB, Firebase and cloud platforms (AWS, GCP).</li>
              <li>Demonstrated strong problem-solving and analytical skills in designing and implementing robust and scalable solutions.</li>
              <li>Collaborated effectively with clients to understand their requirements and deliver projects on time and within budget.</li>
              <li>Maintained a high level of professionalism and client satisfaction throughout all projects.</li>
              <li>Presented virtually to the World Conference on Computational Intelligence.</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}