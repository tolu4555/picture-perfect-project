"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [orbs, setOrbs] = useState([
    { x: 0, y: 0, size: 30, color: "bg-blue-500" },
    { x: 0, y: 0, size: 20, color: "bg-purple-500" },
    { x: 0, y: 0, size: 25, color: "bg-pink-500" },
  ]);

  useEffect(() => {
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
          x: mousePosition.x + Math.sin(Date.now() * 0.001 + index) * 50,
          y: mousePosition.y + Math.cos(Date.now() * 0.001 + index) * 50,
        }))
      );
    };

    const intervalId = setInterval(updateOrbs, 16);
    return () => clearInterval(intervalId);
  }, [mousePosition]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Floating orbs */}
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${orb.color} opacity-50 blur-sm`}
          animate={{
            x: orb.x - orb.size / 2,
            y: orb.y - orb.size / 2,
          }}
          style={{
            width: orb.size,
            height: orb.size,
          }}
          transition={{ type: "spring", damping: 10 }}
        />
      ))}

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold text-transparent md:text-8xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Toluwanimi Oyetade
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-gray-400 md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-3 text-white transition-transform hover:scale-105"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/toluwanimi-oyetade-017ba7327/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-white backdrop-blur-sm transition-transform hover:scale-105"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-gradient-to-br from-blue-500/20 blur-[100px]" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-gradient-to-bl from-purple-500/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] bg-gradient-to-tl from-pink-500/20 blur-[100px]" />
      </div>
    </div>
  );
};