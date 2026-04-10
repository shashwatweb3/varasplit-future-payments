import { motion } from "framer-motion";
import { CheckCircle, Receipt, Zap, Repeat } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "1-click settlement",
    description: "Settle all balances in a single action. No chasing, no manual transfers.",
    action: "Execute Settlement →"
  },
  {
    icon: Receipt,
    title: "Settlement Invoice",
    description: "Shareable settlement receipts. Every settlement becomes a beautiful, verifiable on-chain invoice.",
    example: "0x7a3f…b29e\nLucky → Shashwat $50 USDC\nRohan → Shashwat $50 USDC\nVerified on Vara\nPaid in USDC"
  },
  {
    icon: Zap,
    title: "Auto-split",
    description: "Recurring splits. Rent, subscriptions, trips—automatically tracked and split on-chain.",
    example: "$200 USDC rent added automatically every month"
  }
];

const CoreFeatures = () => (
  <section className="relative py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6">
          Core Features
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Group payments, finally solved.<br />
          No more confusion. No more screenshots. Just USDC + on-chain logic.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-8"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-4">{feature.title}</h3>
            <p className="text-muted-foreground mb-6">{feature.description}</p>

            {feature.action && (
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-colors">
                {feature.action}
              </button>
            )}

            {feature.example && (
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                {feature.example.split('\n').map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreFeatures;