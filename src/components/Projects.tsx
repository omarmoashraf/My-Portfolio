import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with real-time inventory management, payment processing, and analytics dashboard. Built with microservices architecture for scalability.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjEwMjU1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Bootstrap", "Asp.NET", "SQL Server", "MVC"],
      github: "https://github.com/omarmoashraf/Cartify",
      demo: "https://github.com/omarmoashraf/Cartify",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Car Rental Web Application",
      description:
        "RentiGO is a planned web application built to expand customer reach and simplify the car rental process. By combining a mobile-first customer experience with an efficient Admin Dashboard for fleet management, the project aims to reduce operational costs and significantly enhance customer satisfaction.",
      image: "/Rentigo.png",
      tags: ["React", "Node .js", "MongoDB"],
      github: "https://github.com/omarmoashraf/RentiGOO",
      demo: "https://renti-goo.vercel.app/",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "Oasis Fit Website",
      description:
        "The Oasis Fit Website provides a professional, mobile-first online presence for a fitness brand, allowing visitors to easily explore services, schedules, and trainers while facilitating seamless contact and booking.",
      image: "/Oasis Fit.png",
      tags: ["CSS", "HTML", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/omarmoashraf/Oasis-Fit",
      demo: "https://oasis-fit-two.vercel.app/",
      gradient: "from-cyan-600 to-green-600",
    },
   
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Explore some of my recent work showcasing innovation, technical expertise, and creative problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-purple-600/10 bg-gradient-to-br from-purple-600/5 to-blue-600/5 backdrop-blur-sm hover:border-purple-600/30 transition-all h-full flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden aspect-video">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`} />
                    
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          className="bg-background/90 text-foreground hover:bg-background"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${project.gradient} text-white hover:opacity-90`}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex-1">
                  <h3 className="mb-3">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 border-purple-600/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <div className="flex gap-4 w-full">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-purple-600/20 hover:bg-purple-600/10"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        className={`w-full bg-gradient-to-r ${project.gradient} text-white hover:opacity-90`}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
