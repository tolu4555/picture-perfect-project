import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Floating orbs that follow cursor */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
          animate={{
            x: mousePosition.x + Math.sin(i * Math.PI * 0.5) * 50,
            y: mousePosition.y + Math.cos(i * Math.PI * 0.5) * 50,
          }}
          transition={{
            type: "spring",
            stiffness: 150 - i * 20,
            damping: 15,
            mass: 0.5,
          }}
        />
      ))}

      {/* Futuristic grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMzIyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      {/* Holographic effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10 animate-pulse" />

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full"
          >
            Welcome to 2067
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 animate-gradient">
            The Future is Now
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-cyan-200">
            Experience tomorrow's technology today. Step into a world where imagination meets reality.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            <button className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:opacity-90 transition-opacity">
              Enter the Future
            </button>
            <button className="px-6 py-3 text-sm font-medium text-white border border-purple-500/50 rounded-full hover:bg-purple-500/10 transition-colors">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated corner decorations */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`corner-${i}`}
          className="absolute w-32 h-32"
          style={{
            top: i < 2 ? 0 : "auto",
            bottom: i >= 2 ? 0 : "auto",
            left: i % 2 === 0 ? 0 : "auto",
            right: i % 2 === 1 ? 0 : "auto",
          }}
        >
          <motion.div
            className="w-full h-full border-2 border-cyan-500/30"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      ))}
    </section>
  );
};