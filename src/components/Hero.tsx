import { motion } from "motion/react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-cyan-600/10 dark:from-purple-600/20 dark:via-blue-600/20 dark:to-cyan-600/20" />

      {/* Animated circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-600/20 rounded-full"
            >
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Omar
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-foreground/90">
                Software Engineer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-foreground/70 mb-8 max-w-lg"
            >
              Crafting elegant solutions to complex problems.
              Passionate about building scalable applications
              and innovative digital experiences that make a
              difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                onClick={() => scrollToSection("#projects")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className="border-purple-600/50 hover:bg-purple-600/10"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/omarmoashraf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-600/20 hover:border-purple-600/50 transition-all hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/omar-ashraf-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-600/20 hover:border-purple-600/50 transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:omarmoashraf0@gmail.com"
                className="p-2 rounded-lg bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-600/20 hover:border-purple-600/50 transition-all hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-30" />

              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-purple-600/20 bg-gradient-to-br from-purple-600/5 to-blue-600/5 backdrop-blur-sm p-1">
                <ImageWithFallback
                  src="/omarr.jpg"
                  alt="Omar - Software Engineer"
                  className="w-full h-auto rounded-3xl object-cover"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl opacity-20 blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl opacity-20 blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}