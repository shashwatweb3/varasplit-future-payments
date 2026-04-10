import { motion } from "framer-motion";
import { Eye, ShieldCheck, Sparkles, Box } from "lucide-react";

const items = [
  { icon: Eye, text: "On-chain transparency" },
  { icon: ShieldCheck, text: "No payment confusion" },
  { icon: Sparkles, text: "Gasless-like smooth UX" },
  { icon: Box, text: "Built on Vara" },
];

const WhyVaraspit = () => (
  <section className="relative py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-5xl font-bold text-center mb-16"
      >
        Why <span className="text-primary">Varaspit</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="glass-card p-6 flex items-center gap-5"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-medium text-lg">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyVaraspit;
