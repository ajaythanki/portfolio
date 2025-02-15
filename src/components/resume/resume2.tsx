"use client"

import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Image from "next/image"

export default function ResumeAlt() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white text-gray-800">
      {/* Header Section */}
      <div className="flex gap-6 mb-12">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gw3Bjicq6uUmrOHQQVGTV0tC1cViNO.png"
          alt="Thanki Ajay"
          width={120}
          height={120}
          className="rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">Thanki Ajay</h1>
          <p className="text-gray-600 max-w-2xl">
            Experienced Web Developer with 5+ years of experience building responsive web applications using HTML, CSS, Javascript & 3 years using Next.JS, React.JS, TypeScript, MongoDB, Node.JS, and ExpressJS, with a focus on user experience.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_300px] gap-8">
        {/* Main Content - Work Experience */}
        <main>
          <h2 className="text-lg font-bold uppercase mb-6 tracking-wider">Work Experience</h2>
          
          {/* Current Role */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold">MERN Stack Developer, Webbrians Technologies Pvt. Ltd.</h3>
            <p className="text-gray-600 text-sm mb-2">Vadodara, Gujarat • May 2024 — Present</p>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Projects</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium">SAAS Employee Expense Management System</h5>
                  <p className="text-gray-600 text-sm">
                    Developed a comprehensive SaaS platform for managing employee expenses, including features such as subscription management, secure payments, and real-time notifications.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium">Telemed</h5>
                  <p className="text-gray-600 text-sm">
                    Developed a healthcare platform enabling virtual consultations, appointment scheduling, and secure medical records management.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium">Full Stack Restaurant Portal</h5>
                  <p className="text-gray-600 text-sm">
                    Built a user-friendly restaurant portal with features like merchant dashboards, user reviews, and geolocation-based card discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Role */}
          <div>
            <h3 className="text-lg font-semibold">Freelance Web Developer, Self Employed</h3>
            <p className="text-gray-600 text-sm mb-2">Porbandar, Gujarat • June 2018 — April 2024</p>
            <ul className="list-disc ml-4 space-y-2 text-sm text-gray-600">
              <li>Developed a diverse range of web apps, including e-commerce platform, custom websites, and data-driven web app.</li>
              <li>Utilized a wide array of technologies such as React, Next, Node, MongoDB, Firebase and cloud platforms (AWS, GCP).</li>
              <li>Demonstrated strong problem-solving and analytical skills in designing and implementing robust and scalable solutions.</li>
              <li>Collaborated effectively with clients to understand their requirements and deliver projects on time and within budget.</li>
              <li>Maintained a high level of professionalism and client satisfaction throughout all projects.</li>
              <li>Presented virtually to the World Conference on Computational Intelligence.</li>
            </ul>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="space-y-8">
          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Porbandar, Gujarat</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 shrink-0" />
              <a href="mailto:ajaythanki@gmail.com" className="text-blue-600 hover:underline">
                ajaythanki@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+91 90998 01722</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Github className="w-4 h-4 shrink-0" />
              <a href="https://github.com/ajaythanki" className="text-blue-600 hover:underline">
                github.com/ajaythanki
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Linkedin className="w-4 h-4 shrink-0" />
              <a href="https://linkedin.com/in/ajaythanki" className="text-blue-600 hover:underline">
                linkedin.com/in/ajaythanki
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-lg font-bold uppercase mb-3 tracking-wider">Skills</h2>
            <p className="text-sm text-gray-600">
              React/Next.js, Node, Express, MongoDB, Javascript (ES6), HTML, CSS, MUI, TailwindCSS, Problem-Solving, Teamwork
            </p>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-lg font-bold uppercase mb-3 tracking-wider">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">BCA</h3>
                <p className="text-sm text-gray-600">Saurashtra University</p>
                <p className="text-sm text-gray-500">2018 - 2021</p>
                <p className="text-sm text-gray-600">Rajkot, Gujarat</p>
              </div>
              <div>
                <h3 className="font-semibold">HSC</h3>
                <p className="text-sm text-gray-600">Navyug Vidyalaya (GSHSEB)</p>
                <p className="text-sm text-gray-500">2017 - 2018</p>
                <p className="text-sm text-gray-600">Porbandar, Gujarat</p>
              </div>
              <div>
                <h3 className="font-semibold">SSC</h3>
                <p className="text-sm text-gray-600">Navyug Vidyalaya (GSEB)</p>
                <p className="text-sm text-gray-500">2015 - 2016</p>
                <p className="text-sm text-gray-600">Porbandar, Gujarat</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}