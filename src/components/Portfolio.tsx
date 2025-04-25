
import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Veno Bot",
      description: "An innovative educational platform I founded to revolutionize student-educator connections. This comprehensive CBT (Computer-Based Testing) application for Nigeria Uniosun University features adaptive learning, performance analytics, and interactive study tools built with over five years of e-learning development experience.",
      icon: <Bot className="h-8 w-8 text-indigo-400" />,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://venobot.online",
    },
  ];

  return (
    <section className="relative bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold text-white md:text-5xl"
        >
          Featured Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-transform hover:scale-105"
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-400 hover:text-blue-300"
                >
                  Visit Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
