import { motion } from "framer-motion";

export const Features = () => {
  const skills = [
    {
      title: "Frontend Development",
      description: "Expert in React, TypeScript, and modern CSS frameworks",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      description: "Proficient in Node.js, Express, and database management",
      icon: "⚙️",
    },
    {
      title: "Full Stack Integration",
      description: "Seamless integration of frontend and backend systems",
      icon: "🔄",
    },
    {
      title: "Modern Development",
      description: "Using cutting-edge tools and best practices",
      icon: "🚀",
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
          Skills & Expertise
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-transform hover:scale-105"
            >
              <div className="mb-4 text-4xl">{skill.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {skill.title}
              </h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};