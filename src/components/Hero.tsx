
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Sparkles, Code, Rocket } from "lucide-react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [orbs, setOrbs] = useState([
    { x: 0, y: 0, size: 30, color: "bg-blue-500" },
    { x: 0, y: 0, size: 20, color: "bg-purple-500" },
    { x: 0, y: 0, size: 25, color: "bg-pink-500" },
    { x: 0, y: 0, size: 15, color: "bg-cyan-500" },
    { x: 0, y: 0, size: 35, color: "bg-indigo-500" },
  ]);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const updateOrbs = () => {
      setOrbs((prevOrbs) =>
        prevOrbs.map((orb, index) => ({
          ...orb,
          x: mousePosition.x + Math.sin(Date.now() * 0.001 + index) * (50 + index * 20),
          y: mousePosition.y + Math.cos(Date.now() * 0.001 + index) * (50 + index * 20),
        }))
      );
    };

    const intervalId = setInterval(updateOrbs, 16);
    return () => clearInterval(intervalId);
  }, [mousePosition]);

  const floatingIcons = [
    { icon: Code, delay: 0 },
    { icon: Rocket, delay: 0.2 },
    { icon: Sparkles, delay: 0.4 },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Enhanced floating orbs */}
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${orb.color} opacity-30 blur-sm`}
          animate={{
            x: orb.x - orb.size / 2,
            y: orb.y - orb.size / 2,
          }}
          style={{
            width: orb.size,
            height: orb.size,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 50 }}
        />
      ))}

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] animate-pulse" />

      {/* Floating icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: item.delay, duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute text-white"
          style={{
            left: `${20 + index * 30}%`,
            top: `${30 + index * 20}%`,
          }}
        >
          <item.icon size={40} />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          {/* Typing animation effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-6"
          >
            <span className="text-blue-400 text-lg font-mono">
              {"<"}<span className="text-purple-400">Developer</span>{" />"}
            </span>
          </motion.div>

          <motion.h1
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold text-transparent md:text-8xl lg:text-9xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-blue-500 bg-[length:200%_auto] bg-clip-text"
            >
              Toluwanimi
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Oyetade
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-6 space-y-2"
          >
            <p className="text-2xl text-gray-300 md:text-3xl font-light">
              Full Stack Developer
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="text-lg text-gray-500 max-w-2xl mx-auto"
            >
              Crafting digital experiences with cutting-edge technologies
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 text-white font-semibold transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get In Touch
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/toluwanimi-oyetade-017ba7327/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-white/20 bg-white/10 px-8 py-4 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20 font-semibold"
            >
              View LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-sm mb-2 font-light">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>

      {/* Enhanced corner decorations */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute left-0 top-0 h-[400px] w-[400px] bg-gradient-to-br from-blue-500/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute right-0 top-0 h-[400px] w-[400px] bg-gradient-to-bl from-purple-500/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-gradient-to-tl from-pink-500/20 blur-[120px]"
        />
      </div>
    </div>
  );
};
