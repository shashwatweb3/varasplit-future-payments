import { motion } from "framer-motion";
import { ArrowRight, FileCheck, CalendarClock } from "lucide-react";

/* ─── Feature 1: Smart Settlement ─── */
function SmartSettlement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-3xl p-8 border border-primary/20 relative overflow-hidden group"
    >
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />

      {/* Arrow merge animation */}
      <div className="relative h-28 mb-6 flex items-center justify-center">
        {["-translate-y-6", "translate-y-0", "translate-y-6"].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute left-8 ${pos}`}
            animate={{ x: [0, 60, 60], opacity: [1, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.3, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center text-xs font-bold text-foreground">
                {["L", "R", "P"][i]}
              </div>
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>
          </motion.div>
        ))}
        {/* Receiver */}
        <motion.div
          className="absolute right-8"
          animate={{ boxShadow: ["0 0 0px hsl(var(--primary)/0)", "0 0 20px hsl(var(--primary)/0.4)", "0 0 0px hsl(var(--primary)/0)"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center text-sm font-bold text-primary">
            S
          </div>
        </motion.div>
      </div>

      <h3 className="font-display text-xl font-bold mb-2">1-click settlement</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        Settle all balances in a single action. No chasing, no manual transfers.
      </p>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full relative overflow-hidden rounded-xl py-3 px-6 font-display font-semibold text-sm text-primary-foreground bg-primary"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <span className="relative">Execute Settlement →</span>
      </motion.button>
    </motion.div>
  );
}

/* ─── Feature 2: On-Chain Invoices ─── */
function OnChainInvoices() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="glass-card rounded-3xl p-8 border border-primary/20 relative overflow-hidden group"
    >
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />

      {/* Mini invoice card */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
        className="relative mb-6"
      >
        <motion.div
          className="absolute -inset-1 rounded-2xl bg-primary/15 blur-lg"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <div className="relative bg-secondary/80 border border-border/60 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-display font-semibold">Settlement Invoice</span>
            </div>
            <span className="text-[10px] text-muted-foreground font-mono">0x7a3f…b29e</span>
          </div>
          <div className="h-px bg-border/50 mb-3" />
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Lucky → Shashwat</span>
              <span className="text-primary font-semibold">$50 USDC</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Rohan → Shashwat</span>
              <span className="text-primary font-semibold">$50 USDC</span>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <span className="text-[9px] bg-primary/10 text-primary border border-primary/20 rounded-full px-2 py-0.5 font-medium">Verified on Vara</span>
            <span className="text-[9px] bg-accent/10 text-accent border border-accent/20 rounded-full px-2 py-0.5 font-medium">Paid in USDC</span>
          </div>
        </div>
      </motion.div>

      <h3 className="font-display text-xl font-bold mb-2">Shareable settlement receipts</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Every settlement becomes a beautiful, verifiable on-chain invoice.
      </p>
    </motion.div>
  );
}

/* ─── Feature 3: Auto Expenses ─── */
function AutoExpenses() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="glass-card rounded-3xl p-8 border border-primary/20 relative overflow-hidden group"
    >
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />

      {/* Recurring animation */}
      <div className="relative h-28 mb-6 flex items-center justify-center gap-6">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <CalendarClock className="w-10 h-10 text-primary/60" />
        </motion.div>

        {/* Flowing arrows loop */}
        <div className="relative w-32 h-12">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 -translate-y-1/2"
              animate={{ x: [0, 120], opacity: [0, 1, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.6, ease: "linear" }}
            >
              <ArrowRight className="w-4 h-4 text-primary" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-secondary/80 border border-border/60 rounded-xl px-3 py-2"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <p className="text-[10px] text-muted-foreground">Auto-split</p>
          <p className="text-xs font-semibold text-primary">$200 USDC</p>
        </motion.div>
      </div>

      <h3 className="font-display text-xl font-bold mb-2">Recurring splits</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        Rent, subscriptions, trips—automatically tracked and split on-chain.
      </p>

      <div className="bg-secondary/50 border border-border/50 rounded-xl px-4 py-3">
        <p className="text-xs text-muted-foreground">
          <span className="text-primary font-semibold">$200 USDC</span> rent added automatically every month
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
const FeaturesBlock = () => (
  <section className="relative py-32 px-6 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-3xl" />

    <div className="max-w-6xl mx-auto relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
          Core Features
        </p>
        <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight mb-6">
          Group payments,{" "}
          <span className="text-primary glow-text">finally solved.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          No more confusion. No more screenshots. Just USDC + on-chain logic.
        </p>
      </motion.div>

      {/* Feature grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SmartSettlement />
        <OnChainInvoices />
        <AutoExpenses />
      </div>
    </div>
  </section>
);

export default FeaturesBlock;
