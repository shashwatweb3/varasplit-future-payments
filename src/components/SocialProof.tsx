import { motion } from "framer-motion";

const SocialProof = () => (
  <section className="relative py-32 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-muted-foreground"
      >
        "The future of group payments
        <br />
        <span className="text-foreground">is on-chain.</span>"
      </motion.p>
    </div>
  </section>
);

export default SocialProof;
