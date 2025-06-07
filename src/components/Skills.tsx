
import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Cloud, Zap } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-8 w-8" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      title: "Backend",
      icon: <Database className="h-8 w-8" />,
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "RESTful APIs"],
      color: "from-green-500 to-emerald-500",
      delay: 0.1,
    },
    {
      title: "Tools & DevOps",
      icon: <Cloud className="h-8 w-8" />,
      skills: ["Git", "Docker", "Vercel", "AWS", "Linux"],
      color: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      title: "Mobile",
      icon: <Smartphone className="h-8 w-8" />,
      skills: ["React Native", "Flutter", "Progressive Web Apps"],
      color: "from-orange-500 to-red-500",
      delay: 0.3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-2 mb-6"
          >
            <Zap className="h-5 w-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Technical Expertise</span>
          </motion.div>
          
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Leveraging modern technologies to build exceptional digital solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg p-6 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} text-white mb-4`}
                  >
                    {category.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: category.delay + skillIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors cursor-pointer"
                      >
                        <motion.div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-sm font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Technologies Mastered", value: "20+" },
            { label: "Happy Clients", value: "100%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
