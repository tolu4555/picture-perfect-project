
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { CompanySlider } from "@/components/CompanySlider";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <>
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        <Hero />
        <CompanySlider />
        <Features />
        <Skills />
        <Portfolio />
        <FAQ />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
