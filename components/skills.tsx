"use client"

import { useEffect, useRef, useState } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "SQL", level: 88 },
      ],
    },
    {
      title: "Front-End Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "Redux", level: 88 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Material UI", level: 85 },
      ],
    },
    {
      title: "Back-End Development",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 90 },
        { name: "RESTful APIs", level: 95 },
        { name: "GraphQL", level: 85 },
        { name: "WebSockets", level: 80 },
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "AWS", level: 85 },
        { name: "Google Cloud", level: 82 },
        { name: "Docker", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="section-title">My Skills</h2>
          <p className="text-muted-foreground max-w-[700px] mt-4">
            My technical expertise and proficiencies developed over years of professional experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-on-scroll">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card space-y-6">
              <h3 className="text-xl font-semibold gradient-text">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
