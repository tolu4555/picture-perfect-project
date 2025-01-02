import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2070&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Introducing Innovation
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Create the Future
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Experience technology that transforms the way we live and work.
            Designed with purpose, built for tomorrow.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button className="px-6 py-3 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors">
              Discover More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};