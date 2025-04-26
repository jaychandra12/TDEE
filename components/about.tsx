import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full dot-pattern opacity-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden animate-on-scroll">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent opacity-20 blur-sm rounded-lg"></div>
            <Image
              src="/images/profile-city.png"
              alt="Jaya Chandra Gundeboina in the city"
              fill
              className="object-cover rounded-lg"
              priority
            />

            {/* Floating decorative elements */}
            <div
              className="absolute top-10 -left-5 w-10 h-10 bg-primary/20 rounded-full floating"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-10 -right-5 w-10 h-10 bg-accent/20 rounded-full floating"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 -right-5 w-5 h-5 bg-primary/20 rounded-full floating"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
          <div className="animate-on-scroll">
            <h2 className="section-title">About Me</h2>
            <p className="text-muted-foreground mb-6">
              Passionate about building <span className="gradient-text font-medium">scalable and efficient</span> web
              applications
            </p>
            <div className="space-y-4">
              <p>
                I am a seasoned Full Stack Developer with over 5 years of experience in designing, developing, and
                deploying scalable web applications and cloud solutions. My expertise spans across the entire
                development stack, from crafting intuitive user interfaces with React.js to building robust backend
                systems with Node.js and managing complex databases.
              </p>
              <p>
                Throughout my career, I have consistently delivered high-quality solutions that meet business
                requirements while adhering to best practices in software development. I am passionate about leveraging
                cutting-edge technologies to solve complex problems and create exceptional user experiences.
              </p>
              <p>
                I hold a Master of Science in Computer Science from West Virginia State University and a Bachelor of
                Technology in Computer Science from Jawaharlal Nehru Technological University Hyderabad, providing me
                with a strong theoretical foundation that complements my practical experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
