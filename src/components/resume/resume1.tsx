"use client"

import { resumeData } from '@/lib/data'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Image from "next/image"
import { Quicksand } from 'next/font/google';
// import { useReactToPrint } from "react-to-print";
// import React, { useEffect } from 'react';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});
export default function Resume() {

  // const componentRef = React.useRef(null);

  // const handleAfterPrint = React.useCallback(() => {
  //   console.log("`onAfterPrint` called");
  // }, []);

  // const handleBeforePrint = React.useCallback(() => {
  //   console.log("`onBeforePrint` called");
  //   return Promise.resolve();
  // }, []);

  // const printFn = useReactToPrint({
  //   contentRef: componentRef,
  //   documentTitle: "AwesomeFileName",
  //   onAfterPrint: handleAfterPrint,
  //   onBeforePrint: handleBeforePrint,
  // });

  // useEffect(() => {
  //   if (componentRef.current)
  //     printFn()
  //   return () => {
  //     componentRef.current = null;
  //   }
  // }, [])

  return (
    <main className={`max-w-5xl mx-auto p-6 bg-white text-gray-800 ${quicksand.className}`}>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        <Image
          src="/profile-pic.jpg"
          alt="Thanki Ajay"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{resumeData.name}</h1>
          <p className="text-gray-600 max-w-2xl">
            {resumeData.summary}
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
              <span >{resumeData.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${resumeData.email}`} className="text-blue-600 hover:underline">
                {resumeData.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{resumeData.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <a href={resumeData.github} className="text-blue-600 hover:underline">
                {resumeData.github.split("https://").pop()}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a href={resumeData.linkedin} className="text-blue-600 hover:underline">
                {resumeData.linkedin.split("https://").pop()}
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.college}</p>
                  <p className="text-gray-500">{edu.duration}</p>
                  <p className="text-gray-600">{edu.place}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill) => (
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
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold">{exp.role}, {exp.company}</h3>
              </div>
              <div className="flex justify-between items-center text-gray-600 mb-2"><span>{exp.location}</span> <span>{exp.duration}</span></div>
              {/* <p className="text-gray-600 mb-2">{exp.description}</p> */}
              <div className="mb-4">
                <h4 className="font-bold mb-2">Projects</h4>
                <div className="space-y-4">
                  {exp.projects.map((project, projIndex) => (
                    <div key={projIndex}>
                      <h5 className="font-bold">{project.title}</h5>
                      <ul className="list-disc">
                        {project.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-gray-600 ml-4">{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </main>
  )
}