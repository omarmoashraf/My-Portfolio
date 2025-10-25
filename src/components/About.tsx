import { motion } from "motion/react";
import { Code2, Lightbulb, Rocket, Sparkles } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Problem Solver",
      description: "Analytical thinker who breaks down complex challenges into elegant solutions",
    },
    {
      icon: Lightbulb,
      title: "Creative Mindset",
      description: "Bringing fresh perspectives and innovative approaches to every project",
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Always exploring cutting-edge technologies and best practices",
    },
    {
      icon: Sparkles,
      title: "Detail Oriented",
      description: "Committed to writing clean, maintainable, and scalable code",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-foreground/80">
                I'm a passionate software engineer with a deep love for creating innovative
                solutions that push the boundaries of what's possible. With expertise spanning
                across multiple programming languages and frameworks, I thrive on transforming
                complex challenges into elegant, user-friendly applications.
              </p>
              <p className="text-foreground/80">
                My approach combines technical excellence with creative problem-solving,
                ensuring every project I work on is not just functional, but exceptional.
                Whether it's building scalable web applications, optimizing system performance,
                or architecting robust solutions, I bring dedication and innovation to every
                line of code.
              </p>
              <p className="text-foreground/80">
                When I'm not coding, you'll find me exploring the latest tech trends,
                contributing to open-source projects, or sharing knowledge with the developer
                community. I believe in continuous learning and staying at the forefront of
                technological advancement.
              </p>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-600/5 to-blue-600/5 border border-purple-600/10 hover:border-purple-600/30 transition-all backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
