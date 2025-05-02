import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Jaya Chandra Gundeboina | Full Stack Developer",
  description: "Seasoned Full Stack Developer | Expert in Scalable Web Applications & Cloud Solutions",
}

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
