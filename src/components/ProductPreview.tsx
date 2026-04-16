import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ProductPreview = () => (
  <section className="relative py-32 px-6 overflow-hidden">
    {/* Gradient blobs */}
    <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 gradient-blob animate-blob-move" style={{ animationDelay: "-5s" }} />
    <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-primary/15 gradient-blob animate-blob-move" style={{ animationDelay: "-10s" }} />

    <div className="relative z-10 text-center max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-8"
      >
        On testnet
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
      >
        Split costs.
        <br />
        <span className="text-primary glow-text">Prove payments.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
      >
        No confusion. No screenshots. Track, pay, claim, and share one clean proof.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="https://varasplit-y8xv-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-glow font-display inline-flex items-center gap-2 justify-center"
        >
          VaraSplit <ArrowRight className="w-4 h-4" />
        </a>
        <button
          disabled
          className="btn-outline-glow font-display inline-flex items-center gap-2 justify-center opacity-60 cursor-not-allowed"
        >
          Create Payout Proof — Coming Soon
        </button>
      </motion.div>
    </div>
  </section>
);

export default ProductPreview;
