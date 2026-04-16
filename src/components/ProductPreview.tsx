import { motion } from "framer-motion";
import { ArrowRight, FileText, Shield, Eye } from "lucide-react";

const ProductPreview = () => (
  <section className="relative py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-primary/60 text-center text-sm font-medium tracking-widest uppercase mb-4"
      >
        🚀 Live Product
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="font-display text-3xl sm:text-5xl font-bold text-center mb-6"
      >
        Try it <span className="text-primary">now.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-muted-foreground text-center max-w-lg mx-auto mb-14"
      >
        Split a shared bill with friends, or create a formal on-chain payment record for work.
      </motion.p>

      {/* Product Preview Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="glass-card p-1 glow-box"
      >
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-card/80 to-background border border-border/30 p-8 sm:p-12 lg:p-16">
          {/* Floating dots decoration */}
          <div className="absolute top-6 left-8 w-1.5 h-1.5 rounded-full bg-primary/40" />
          <div className="absolute top-12 right-16 w-1 h-1 rounded-full bg-primary/30" />
          <div className="absolute bottom-16 left-20 w-1 h-1 rounded-full bg-primary/25" />
          <div className="absolute top-1/3 right-10 w-1.5 h-1.5 rounded-full bg-primary/20" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8"
            >
              <span className="text-primary text-sm">✨</span>
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                Simple Shared Expenses
              </span>
            </motion.div>

            {/* Headline */}
            <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Split costs. Prove
              <br />
              payments.
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base mb-10 max-w-md mx-auto">
              No confusion. No screenshots. Track, pay, claim, and share one clean proof.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <a
                href="https://varasplit-y8xv-six.vercel.app/create"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-glow font-display inline-flex items-center gap-2 justify-center text-sm px-6 py-3"
              >
                Create Group <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://varasplit-y8xv-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-glow font-display inline-flex items-center gap-2 justify-center text-sm px-6 py-3"
              >
                Create Payout Proof <FileText className="w-4 h-4" />
              </a>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { icon: Shield, label: "Track costs" },
                { icon: Shield, label: "Pay safely" },
                { icon: Eye, label: "Share proof" },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm text-sm text-muted-foreground"
                >
                  {pill.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProductPreview;
