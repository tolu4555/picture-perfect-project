import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CompanySlider = () => {
  const [position, setPosition] = useState(0);
  
  const companies = [
    { name: "Vercel", logo: "/vercel.svg" },
    { name: "GitHub", logo: "/github.svg" },
    { name: "Visual Studio", logo: "/vs.svg" },
    // Add more companies as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % companies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [companies.length]);

  return (
    <section className="py-8 bg-transparent">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="w-24 h-12 relative grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};