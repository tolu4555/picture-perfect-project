
import { motion } from "framer-motion";
import { Portfolio } from "@/components/Portfolio";

const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24"
    >
      <Portfolio />
    </motion.div>
  );
};

export default PortfolioPage;
