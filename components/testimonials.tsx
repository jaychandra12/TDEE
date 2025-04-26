"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: "Alex Johnson",
      position: "CTO, TechInnovate",
      image: "/placeholder.svg?height=200&width=200",
      text: "Jaya is an exceptional developer who consistently delivers high-quality code. His expertise in full-stack development has been invaluable to our projects. He's not just technically proficient but also a great team player.",
    },
    {
      name: "Sarah Williams",
      position: "Project Manager, DataSolutions",
      image: "/placeholder.svg?height=200&width=200",
      text: "Working with Jaya has been a pleasure. His attention to detail and problem-solving skills are outstanding. He takes ownership of his work and always goes the extra mile to ensure project success.",
    },
    {
      name: "Michael Chen",
      position: "Lead Developer, CloudTech",
      image: "/placeholder.svg?height=200&width=200",
      text: "Jaya's technical knowledge and ability to quickly adapt to new technologies is impressive. He's a resourceful developer who can tackle complex challenges with innovative solutions.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full dot-pattern opacity-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="section-title">Testimonials</h2>
          <p className="text-muted-foreground max-w-[700px] mt-4">What people say about working with me</p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-on-scroll" ref={testimonialsRef}>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="testimonial-card border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6">
                          <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent opacity-50 blur-sm rounded-full"></div>
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                        <QuoteIcon className="h-8 w-8 text-accent/30 mb-4" />
                        <p className="text-lg mb-6 italic">{testimonial.text}</p>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary/20 hover:bg-primary/5"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 p-0 rounded-full ${
                  currentIndex === index ? "bg-gradient-to-r from-primary to-accent" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary/20 hover:bg-primary/5"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
