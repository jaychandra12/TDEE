import { BriefcaseIcon, CalendarIcon } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer & Research Assistant",
      company: "West Virginia State University",
      period: "2025 – Present",
      description: [
        "Building scalable web applications using MERN stack and Next.js",
        "Optimizing RESTful APIs and database performance",
        "Implementing authentication (JWT, OAuth) and role-based access control",
        "Deploying applications on AWS, Google Cloud, and Vercel",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Next.js", "AWS"],
    },
    {
      title: "Software Developer",
      company: "TopEdge Technology",
      period: "2024 – 2024",
      description: [
        "Developed and maintained full-stack web applications",
        "Collaborated with cross-functional teams to deliver high-quality software",
        "Implemented responsive UI designs using modern front-end frameworks",
        "Participated in code reviews and provided technical guidance",
      ],
      technologies: ["JavaScript", "React", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      title: "Software Developer",
      company: "RGLOBITS",
      period: "2019 – 2023",
      description: [
        "Led migrations to microservices architecture",
        "Designed and implemented RESTful APIs for various client applications",
        "Optimized database queries and improved application performance",
        "Mentored junior developers and conducted technical training sessions",
      ],
      technologies: ["JavaScript", "React", "Express.js", "MongoDB", "AWS"],
    },
  ]

  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full dot-pattern opacity-50"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="section-title">Work Experience</h2>
          <p className="text-muted-foreground max-w-[700px] mt-4">My professional journey and accomplishments</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot - Using simple positioning without transforms */}
                <div className="absolute left-0 md:left-1/2 top-0">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent ml-[-8px] md:ml-[-8px] shadow-[0_0_0_4px_rgba(30,64,175,0.1)]"></div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"} premium-card p-6`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <BriefcaseIcon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                  </div>
                  <p className="text-lg font-medium mb-1">{exp.company}</p>
                  <div className="flex items-center gap-1 text-muted-foreground mb-4">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={`${index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"} hidden md:block`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
