
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24"
    >
      <section className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold">About VenoBot</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
            <p className="mb-4 text-gray-600">
              At VenoBot, we're revolutionizing educational technology through innovative solutions 
              that bridge the gap between students and educators. With over five years of experience 
              in e-learning development, we're committed to creating tools that make education more 
              accessible, interactive, and data-driven.
            </p>
            <h2 className="mb-4 text-2xl font-semibold">Why VenoBot?</h2>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>Comprehensive CBT solutions tailored for universities</li>
              <li>Advanced analytics for performance tracking</li>
              <li>Interactive learning tools and practice tests</li>
              <li>User-friendly interface for both students and educators</li>
            </ul>
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <h2 className="mb-4 text-2xl font-semibold">Our Expertise</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">E-Learning Development</h3>
                <p className="text-gray-600">5+ years of experience in creating educational platforms</p>
              </div>
              <div>
                <h3 className="font-semibold">Instructional Design</h3>
                <p className="text-gray-600">Expert knowledge in creating effective learning experiences</p>
              </div>
              <div>
                <h3 className="font-semibold">Educational Technology</h3>
                <p className="text-gray-600">Cutting-edge solutions for modern education</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
