import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 gradient-blob animate-blob-move" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 gradient-blob animate-blob-move" style={{ animationDelay: "-7s" }} />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-primary/15 gradient-blob animate-blob-move" style={{ animationDelay: "-13s" }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-8"
        >
          Powered by Vara Network
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
        >
          Split bills.
          <br />
          <span className="text-primary glow-text">Not friendships.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          VaraSplit makes group payments seamless on-chain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary-glow font-display">Coming Soon</button>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-glow font-display"
          >
            Follow for launch →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
