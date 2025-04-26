import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform with Microservices Architecture",
      description:
        "Built a scalable E-Commerce Platform using microservices architecture and the MERN stack. Designed and implemented RESTful APIs and GraphQL endpoints to handle product listings, user authentication, and payment processing. Migrated from a monolithic architecture to microservices, improving system flexibility and fault tolerance.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "GraphQL",
        "AWS",
        "Docker",
        "Kubernetes",
        "JWT",
        "Redux",
        "Material UI",
      ],
      demoUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/example/project1",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "AI-Powered Chatbot for Customer Support",
      description:
        "Developed an AI-Powered Chatbot for customer support using Node.js, Express.js, and WebSockets for real-time communication. Integrated Natural Language Processing (NLP) capabilities to understand and respond to user queries effectively. Used MongoDB to store chat history and user data, ensuring quick retrieval and analysis.",
      technologies: [
        "Node.js",
        "Express.js",
        "WebSockets",
        "NLP",
        "MongoDB",
        "React",
        "Tailwind CSS",
        "AWS Lambda",
        "Slack API",
        "WhatsApp API",
      ],
      demoUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/example/project2",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Task Management Application with Kanban Board",
      description:
        "Created a Task Management Application with a Kanban board interface using the MERN stack and TypeScript. Implemented features like task creation, drag-and-drop functionality, and real-time updates using WebSockets. Designed a RESTful API for task management and used MongoDB for storing task data.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "WebSockets",
        "Redux",
        "Material UI",
        "JWT",
        "OAuth",
        "Vercel",
        "GitHub Actions",
      ],
      demoUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/example/project3",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Social Media Dashboard with Analytics",
      description:
        "Built a Social Media Dashboard for analyzing user engagement and performance metrics across multiple platforms. Used React.js and Next.js for the front-end, and Node.js with Express.js for the back-end. Integrated RESTful APIs to fetch data from platforms like Twitter, Facebook, and Instagram.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Chart.js",
        "D3.js",
        "JWT",
        "Docker",
        "Google Cloud",
        "RESTful APIs",
      ],
      demoUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/example/project4",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Research Data Visualization Tool",
      description:
        "A comprehensive data visualization platform built for research purposes, enabling researchers to analyze and visualize complex datasets through interactive charts and graphs. Implemented advanced filtering and data processing capabilities for scientific research applications.",
      technologies: ["React", "Node.js", "MongoDB", "Next.js", "D3.js", "AI", "Python", "Data Processing"],
      demoUrl: "https://example.com/demo5",
      githubUrl: "https://github.com/example/project5",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="section-title">My Projects</h2>
          <p className="text-muted-foreground max-w-[700px] mt-4">
            Showcasing my technical expertise through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="relative aspect-[4/3] w-full">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 blur-sm rounded-lg transition-opacity duration-300"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="project-card-overlay rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm mb-4 text-center line-clamp-4">{project.description}</p>
                  <div className="flex gap-3">
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" size="sm" className="gap-1">
                        <ExternalLinkIcon className="h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" size="sm" className="gap-1">
                        <GithubIcon className="h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-medium">{project.title}</h3>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-primary/10 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 bg-primary/10 text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
