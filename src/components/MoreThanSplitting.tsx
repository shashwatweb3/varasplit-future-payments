import { motion } from "framer-motion";
import { Plane, Briefcase, FileText } from "lucide-react";

const cards = [
  {
    icon: Plane,
    label: "For trips & friends",
    labelColor: "text-primary",
    borderColor: "border-primary/30",
    title: "Group Trip Split",
    lines: [
      "Goa trip? No chaos.",
      "",
      "Track every expense.",
      "Settle in one click.",
      "",
      "No \"bhai tu bhej de\".",
    ],
  },
  {
    icon: Briefcase,
    label: "For work & payouts",
    labelColor: "text-yellow-400",
    borderColor: "border-yellow-400/30",
    title: "Bounty / Salary Proof",
    lines: [
      "Paid someone?",
      "Generate a clean on-chain record.",
      "",
      "Perfect for:",
      "• Freelance payouts",
      "• Bounties",
      "• Salary splits",
      "",
      "No fake screenshots. Real proof.",
    ],
  },
  {
    icon: FileText,
    label: "For daily expenses",
    labelColor: "text-blue-400",
    borderColor: "border-blue-400/30",
    title: "Bill Payment & Reimbursement",
    lines: [
      "Paid the electricity bill? Office expense?",
      "",
      "Log it. Share proof.",
      "Get reimbursed cleanly.",
      "",
      "No confusion. No chasing.",
    ],
  },
];

const MoreThanSplitting = () => (
  <section className="relative py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-primary/60 text-center text-sm font-medium tracking-widest uppercase mb-4"
      >
        🎯 Beyond Splitting
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="font-display text-3xl sm:text-5xl font-bold text-center mb-4"
      >
        Not just splitting bills.
        <br />
        <span className="text-primary">Managing money—together.</span>
      </motion.h2>

      <div className="h-px w-24 mx-auto bg-primary/30 my-10" />

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
            className="glass-card p-8 group cursor-default relative overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-primary/5" />

            <div className="relative z-10 flex flex-col flex-1">
              {/* Label */}
              <span className={`text-xs font-medium tracking-wider uppercase ${card.labelColor} ${card.borderColor} border rounded-full px-3 py-1 self-start mb-5 backdrop-blur-sm`}>
                {card.label}
              </span>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-shadow duration-300">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold">{card.title}</h3>
              </div>

              {/* Description lines */}
              <div className="text-sm leading-relaxed text-muted-foreground flex-1 space-y-0.5">
                {card.lines.map((line, j) =>
                  line === "" ? (
                    <div key={j} className="h-3" />
                  ) : (
                    <p key={j}>{line}</p>
                  )
                )}
              </div>

              {/* Coming Soon button */}
              <motion.button
                animate={{
                  boxShadow: [
                    "0 0 8px hsl(var(--primary)/0.2)",
                    "0 0 16px hsl(var(--primary)/0.35)",
                    "0 0 8px hsl(var(--primary)/0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-primary/30 bg-primary/5 text-primary text-sm font-medium backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-colors duration-300 cursor-default self-start"
              >
                Coming Soon
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing line */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-20"
      >
        <p className="font-display text-2xl sm:text-3xl font-bold leading-snug">
          One app.
          <br />
          <span className="text-muted-foreground">Trips. Payments. Proof.</span>
        </p>
        <p className="text-primary font-display text-xl sm:text-2xl font-semibold mt-3">
          Everything—on-chain.
        </p>
      </motion.div>
    </div>
  </section>
);

export default MoreThanSplitting;
