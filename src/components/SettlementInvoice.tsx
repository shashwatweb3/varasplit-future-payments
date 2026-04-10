import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ExternalLink, Copy, X } from "lucide-react";

// --- Debt Settlement Algorithm ---
const members = ["Shashwat", "Lucky", "Rohan", "Priya"];
const txHash = "0x7a3f...b29e";
const totalAmount = 150;

// Shashwat paid $150 for 4 people → each owes $37.50
function computeMinimalSettlement() {
  const perPerson = totalAmount / members.length;
  const balances: Record<string, number> = {};
  // Shashwat paid everything; others paid nothing
  members.forEach((m) => {
    balances[m] = m === "Shashwat" ? totalAmount - perPerson : -perPerson;
  });

  const creditors: { name: string; amount: number }[] = [];
  const debtors: { name: string; amount: number }[] = [];

  for (const [name, bal] of Object.entries(balances)) {
    if (bal > 0.01) creditors.push({ name, amount: bal });
    else if (bal < -0.01) debtors.push({ name, amount: Math.abs(bal) });
  }

  // Sort: largest first
  creditors.sort((a, b) => b.amount - a.amount);
  debtors.sort((a, b) => b.amount - a.amount);

  const txs: { from: string; to: string; amount: number }[] = [];
  let i = 0, j = 0;
  while (i < debtors.length && j < creditors.length) {
    const settled = Math.min(debtors[i].amount, creditors[j].amount);
    txs.push({ from: debtors[i].name, to: creditors[j].name, amount: Math.round(settled * 100) / 100 });
    debtors[i].amount -= settled;
    creditors[j].amount -= settled;
    if (debtors[i].amount < 0.01) i++;
    if (creditors[j].amount < 0.01) j++;
  }

  return txs;
}

const transactions = computeMinimalSettlement();

function CountUp({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>${value} USDC</span>;
}

function InvoiceCard({ inModal = false }: { inModal?: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`relative w-full max-w-md mx-auto ${inModal ? "" : "animate-float"}`}
    >
      {/* Outer glow */}
      <div className="absolute -inset-1 rounded-3xl bg-primary/20 blur-xl animate-pulse-glow" />

      <div className="relative glass-card rounded-3xl p-6 sm:p-8 border border-primary/30 overflow-hidden">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/40 rounded-br-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Settlement Invoice</p>
            <h3 className="font-display text-xl font-bold mt-1">Goa Trip 🏖️</h3>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center"
          >
            <Check className="w-5 h-5 text-primary" />
          </motion.div>
        </div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary">Optimized Settlement ✅</span>
        </motion.div>
        <p className="text-[11px] text-muted-foreground mb-6">Minimized to {transactions.length} transaction{transactions.length !== 1 ? "s" : ""}</p>

        {/* Members */}
        <div className="flex items-center gap-1 mb-6">
          {members.map((m, i) => (
            <motion.div
              key={m}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-bold -ml-2 first:ml-0"
              title={m}
            >
              {m[0]}
            </motion.div>
          ))}
          <span className="text-xs text-muted-foreground ml-2">{members.length} members</span>
        </div>

        {/* Transactions */}
        <div className="space-y-3 mb-6">
          {transactions.map((tx, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              className="flex items-center justify-between py-3 px-4 rounded-xl bg-secondary/50 border border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  {tx.from[0]}
                </div>
                <span className="text-sm">
                  <span className="font-medium">{tx.from}</span>
                  <span className="text-muted-foreground mx-2">→</span>
                  <span className="font-medium">{tx.to}</span>
                </span>
              </div>
              <span className="font-display font-semibold text-primary">${tx.amount} USDC</span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-4" />

        {/* Total */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-muted-foreground">Total Settled</span>
          <span className="font-display text-2xl font-bold text-primary">
            <CountUp target={totalAmount} />
          </span>
        </div>

        {/* On-chain badge + hash */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-lg px-2.5 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-medium text-primary uppercase tracking-wider">Verified on-chain</span>
          </div>
          <span className="text-[10px] text-muted-foreground font-mono">{txHash}</span>
        </div>

        {/* Timestamp */}
        <div className="mt-4 text-center">
          <p className="text-[10px] text-muted-foreground">April 10, 2026 · 14:32 UTC</p>
          <p className="text-[10px] text-muted-foreground/60 mt-1">Powered by Varaspit</p>
        </div>
      </div>
    </motion.div>
  );
}

const SettlementInvoice = () => {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareText = `We settled our trip in 1 click. No chaos. No confusion. Just on-chain proof. 🧾⚡\n\n#Varaspit #Vara`;

  const handleShare = () => {
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 gradient-blob" />

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
                On-Chain Settlement Invoice
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight mb-6">
                Not just payments.
                <br />
                <span className="text-primary glow-text">Proof.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
                Every settlement becomes a shareable on-chain receipt. Turn settlements into shareable proof.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowModal(true)}
                  className="btn-primary-glow font-display flex items-center gap-2 justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  Preview Invoice
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleShare}
                  className="btn-outline-glow font-display flex items-center gap-2 justify-center"
                >
                  Share on 𝕏 →
                </motion.button>
              </div>
            </motion.div>

            {/* Right: Invoice preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <InvoiceCard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative z-10 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <InvoiceCard inModal />

              {/* Modal actions */}
              <div className="flex gap-3 mt-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShare}
                  className="btn-primary-glow font-display text-sm px-6 py-3 flex items-center gap-2"
                >
                  Share on 𝕏
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="btn-outline-glow font-display text-sm px-6 py-3 flex items-center gap-2"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copied ? "Copied!" : "Copy text"}
                </motion.button>
              </div>

              {/* Close */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SettlementInvoice;
