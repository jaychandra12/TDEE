import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 hero-gradient overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto relative z-10">
          <div>
            <p className="text-lg font-medium text-accent mb-2">Hello, I'm</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
              Jaya Chandra <span className="gradient-text">Gundeboina</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Seasoned Full Stack Developer | Expert in Scalable Web Applications & Cloud Solutions
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#contact">
              <Button size="lg" className="premium-button group">
                Contact Me
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#projects">
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
