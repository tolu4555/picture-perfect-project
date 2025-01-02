import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Hero />
      <Features />
      <Portfolio />
      <Contact />
    </motion.div>
  );
};

export default Index;