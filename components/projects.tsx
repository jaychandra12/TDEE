import { GithubIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "SneakerSpot - E-Commerce Platform",
      description:
        "Built a scalable E-Commerce Platform for sneaker enthusiasts using the MERN stack. Designed and implemented RESTful APIs to handle product listings, user authentication, and payment processing. Features include product search, filtering, shopping cart, and secure checkout process.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Redux", "Material UI", "Stripe API"],
      githubUrl: "https://github.com/jaychandra12/ecommerce-website-/tree/main/SneakerSpot",
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
      githubUrl: "https://github.com/jaychandra12/CustomerSupportGenius/tree/main/CustomerSupportGenius",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Health Tracker",
      description:
        "Created a comprehensive Health Tracker application that allows users to monitor their nutrition intake, set dietary goals, and track their progress over time. Features include meal logging, nutritional analysis, personalized recommendations, and progress visualization through interactive charts.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Express",
        "Redux",
        "Chart.js",
        "JWT",
        "OAuth",
        "Vercel",
      ],
      githubUrl: "https://github.com/jaychandra12/Nutrition-Tracker/tree/main/Nutrition%20Tracker",
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
                  <div className="flex justify-center">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" size="sm" className="gap-1">
                        <GithubIcon className="h-4 w-4" />
                        View Code
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
