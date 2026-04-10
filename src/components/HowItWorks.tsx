import { motion } from "framer-motion";
import { Users, Receipt, Zap } from "lucide-react";

const steps = [
  { icon: Users, title: "Create Group", desc: "Add your friends and set up a shared space in seconds." },
  { icon: Receipt, title: "Add Expenses", desc: "Log bills, split costs — evenly or custom." },
  { icon: Zap, title: "Settle Instantly", desc: "One tap. On-chain. Done." },
];

const HowItWorks = () => (
  <section className="relative py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-5xl font-bold text-center mb-20"
      >
        How it <span className="text-primary">works</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass-card p-8 text-center group cursor-default"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:glow-box transition-shadow duration-300">
              <step.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            <div className="mt-6 text-primary/60 font-display text-4xl font-bold">
              {String(i + 1).padStart(2, "0")}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
