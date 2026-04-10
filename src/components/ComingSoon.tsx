import { motion } from "framer-motion";

const ComingSoon = () => (
  <section className="relative py-40 px-6 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-[600px] h-[600px] rounded-full bg-primary/10 gradient-blob animate-pulse-glow" />
    </div>
    <div className="relative z-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold glow-text text-primary"
      >
        Launching Soon on Vara ⚡
      </motion.h2>
    </div>
  </section>
);

export default ComingSoon;
