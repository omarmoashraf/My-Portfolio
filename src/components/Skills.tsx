import { motion } from "motion/react";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 100 },
        { name: "JavaScript", level: 100 },
        { name: "Tailwind CSS", level: 100 },
        { name: "HTML/CSS", level: 100 },
      ],
      color: "from-purple-600 to-pink-600",
    },
    {
      category: "Backend",
      skills: [
        { name: "C#", level: 100 },
        { name: "Python", level: 100 },
        { name: "Node.js", level: 100 },
        { name: ".NET", level: 100 },
        { name: "SQL", level: 100 },
      ],
      color: "from-blue-600 to-cyan-600",
    },
    {
      category: "Systems & Tools",
      skills: [
        { name: "C++", level: 100 },
        { name: "Git", level: 100 },
        
      ],
      color: "from-cyan-600 to-green-600",
    },
  ];

  const technologies = [
    "React",
    "C#",
    "C++",
    "Python",
    "Tailwind CSS",
    ".NET",
    "MVC",
    "Node.js",
    "SQL",
    "MongoDB",
    "GraphQL",
    "REST APIs",
    "Git",
    
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5" />
      
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 right-10 w-64 h-64 border border-purple-600/10 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Technical <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Skill bars by category */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-600/5 to-blue-600/5 border border-purple-600/10 backdrop-blur-sm"
            >
              <h3 className="mb-6 bg-gradient-to-r {category.color} bg-clip-text text-transparent">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground/80">{skill.name}</span>
                      <span className="text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border-purple-600/20 hover:border-purple-600/50 transition-all cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
