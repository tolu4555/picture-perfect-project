import { motion } from "framer-motion";
import { Laptop, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Powerful Technology",
    description: "Built with cutting-edge technology for optimal performance.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure by Design",
    description: "Enterprise-grade security protecting your data at every level.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Optimized for speed and efficiency in every interaction.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary">Features</span>
          <h2 className="mt-3 text-3xl font-bold">Designed for Excellence</h2>
          <p className="mt-4 text-muted-foreground">
            Every feature is crafted with precision and purpose, delivering an
            unparalleled user experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-6 rounded-2xl"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};