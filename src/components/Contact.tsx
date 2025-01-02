import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Linkedin } from "lucide-react";

export const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <section id="contact" className="relative bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg md:p-12"
        >
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Let's Connect
              </h2>
              <p className="mb-6 text-gray-400">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:toluwanimioyetade@gmail.com"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                  <Mail className="h-5 w-5" />
                  toluwanimioyetade@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/toluwanimi-oyetade-017ba7327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Subscribe to Newsletter
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-blue-500 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};