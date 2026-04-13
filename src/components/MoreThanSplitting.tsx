import { motion } from "framer-motion";
import { Plane, Briefcase, FileText } from "lucide-react";

const cards = [
  {
    icon: Plane,
    title: "Group Trip Split",
    desc: "Split travel, food, and stays with friends. No confusion. One click settlement.",
  },
  {
    icon: Briefcase,
    title: "Bounty / Salary Split",
    desc: "Pay contributors or team members and share proof instantly with on-chain invoices.",
  },
  {
    icon: FileText,
    title: "Bills & Reimbursements",
    desc: "Pay expenses and generate shareable proof for reimbursements or tracking.",
  },
];

const MoreThanSplitting = () => (
  <section className="relative py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display text-3xl sm:text-5xl font-bold text-center mb-4"
      >
        More than just <span className="text-primary">splitting bills</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-muted-foreground text-center text-lg mb-3"
      >
        We're building the future of on-chain payments.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-primary/60 text-center text-sm mb-16"
      >
        Not just split. A new way to handle money on-chain.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
            className="glass-card p-8 text-center group cursor-default relative overflow-hidden"
          >
            {/* Hover glow overlay */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-primary/5 shadow-[inset_0_0_40px_hsl(var(--primary)/0.08)]" />

            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-shadow duration-300">
                <card.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{card.desc}</p>

              <motion.button
                animate={{ boxShadow: ["0 0 8px hsl(var(--primary)/0.2)", "0 0 16px hsl(var(--primary)/0.35)", "0 0 8px hsl(var(--primary)/0.2)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-primary/30 bg-primary/5 text-primary text-sm font-medium backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-colors duration-300 cursor-default"
              >
                Coming Soon
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MoreThanSplitting;
