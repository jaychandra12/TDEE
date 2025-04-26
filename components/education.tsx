import { GraduationCapIcon, CalendarIcon } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "West Virginia State University",
      period: "2023 – 2025",
      description: "Focused on advanced algorithms, machine learning, and distributed systems.",
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Jawaharlal Nehru Technological University Hyderabad",
      period: "2015 – 2019",
      description:
        "Studied computer science fundamentals, data structures, algorithms, and software engineering principles.",
    },
  ]

  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="section-title">Education</h2>
          <p className="text-muted-foreground max-w-[700px] mt-4">My academic background and qualifications</p>
        </div>

        <div className="max-w-3xl mx-auto animate-on-scroll">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index < education.length - 1 && <div className="absolute left-3 top-3 bottom-0 w-px bg-border"></div>}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCapIcon className="h-3 w-3 text-primary" />
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <p className="text-lg mb-1">{edu.institution}</p>
                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
