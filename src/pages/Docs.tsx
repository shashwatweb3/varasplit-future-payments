import { ArrowRight, CheckCircle2, Circle, Wallet, Blocks, BellRing } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

const sectionIds = [
  { id: "what-is", label: "1. What is VaraSplit" },
  { id: "core-features", label: "2. Core Features" },
  { id: "full-flow", label: "3. Full Flow" },
  { id: "diagrams", label: "4. Flow Diagrams" },
  { id: "architecture", label: "5. Architecture" },
  { id: "contracts", label: "6. Smart Contracts" },
  { id: "action-center", label: "7. Action Center" },
  { id: "limitations", label: "8. Current Limitations" },
  { id: "roadmap", label: "9. Future Roadmap" },
  { id: "advanced", label: "10. Advanced / Tech" },
];

const Docs = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="lg:sticky lg:top-24 h-fit glass-card p-4">
          <p className="text-xs uppercase tracking-wider text-primary mb-3">Docs Navigation</p>
          <nav className="space-y-1">
            {sectionIds.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50">
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="space-y-8">
          <section id="what-is" className="glass-card p-8">
            <p className="text-primary uppercase tracking-widest text-xs mb-3">VaraSplit Docs</p>
            <h1 className="font-display text-4xl font-bold mb-5">A complete guide to wallet-based expense settlement on Vara</h1>
            <p className="text-muted-foreground leading-relaxed">
              VaraSplit is a wallet-based expense and payout system built on the Vara network. Instead of tracking expenses in private chats and settling with screenshots, VaraSplit turns each split and settlement into provable on-chain activity. That means each participant can see what was paid, who still owes, who can claim, and when final settlement is complete.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Wallet-native payments and claims.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> On-chain proof for settlement disputes.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Trust-minimized shared payments for groups.</li>
            </ul>
          </section>

          <section id="core-features" className="glass-card p-8">
            <h2 className="font-display text-3xl font-bold mb-6">2) Core Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border p-5 bg-secondary/20">
                <h3 className="font-display text-xl mb-3">Group Split</h3>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Create a group.</li><li>Add members by wallet address.</li><li>Add expenses and payer info.</li><li>Generate an optimized settlement plan.</li><li>Pay directly from each wallet.</li><li>Claim remaining receivable funds.</li><li>Generate proof/invoice for records.</li>
                </ol>
              </div>
              <div className="rounded-xl border border-border p-5 bg-secondary/20">
                <h3 className="font-display text-xl mb-3">Work & Payouts</h3>
                <p className="text-sm text-muted-foreground mb-3">Work mode supports payer → recipient payout trails with claim and proof, but it is currently under development and may require an access code in current releases.</p>
                <p className="text-sm text-muted-foreground">Flow: assign payout, fund payout, recipient claims, proof generated for completion.</p>
              </div>
            </div>
          </section>

          <section id="full-flow" className="glass-card p-8">
            <h2 className="font-display text-3xl font-bold mb-6">3) Full Flow (Step by Step)</h2>
            <div className="space-y-3">
              {["Connect wallet", "Create group", "Add members", "Add expenses", "Generate payment plan", "Pay amount", "Close group", "Open invoice/proof", "Claim amount", "Final on-chain settlement"].map((item, index) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full border border-primary/30 text-primary flex items-center justify-center">{index + 1}</span>
                  <p className="pt-1 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">Multi-user reality: at least two wallets sign and submit actions independently. One wallet can create/fund, another confirms/claims. Settlement is complete only after both sides execute their steps on-chain.</p>
          </section>

          <section id="diagrams" className="glass-card p-8">
            <h2 className="font-display text-3xl font-bold mb-6">4) Flow Diagrams (UI-style)</h2>
            <div className="grid md:grid-cols-2 gap-5 text-sm">
              <div className="rounded-xl border border-border p-4"><p className="font-medium mb-3">Group Flow</p><div className="flex flex-wrap items-center gap-2"><span className="px-3 py-1 rounded-lg bg-secondary">Create</span><ArrowRight className="w-4 h-4 text-primary"/><span className="px-3 py-1 rounded-lg bg-secondary">Expense</span><ArrowRight className="w-4 h-4 text-primary"/><span className="px-3 py-1 rounded-lg bg-secondary">Pay</span><ArrowRight className="w-4 h-4 text-primary"/><span className="px-3 py-1 rounded-lg bg-secondary">Proof</span></div></div>
              <div className="rounded-xl border border-border p-4"><p className="font-medium mb-3">Wallet Flow</p><div className="flex flex-wrap items-center gap-2"><span className="px-3 py-1 rounded-lg bg-secondary">Connect</span><ArrowRight className="w-4 h-4 text-primary"/><span className="px-3 py-1 rounded-lg bg-secondary">Sign</span><ArrowRight className="w-4 h-4 text-primary"/><span className="px-3 py-1 rounded-lg bg-secondary">Contract</span></div></div>
              <div className="rounded-xl border border-border p-4"><p className="font-medium mb-3">Action Center</p><div className="flex flex-wrap items-center gap-2"><span className="px-3 py-1 rounded-lg bg-secondary">Fetch</span><ArrowRight className="w-4 h-4 text-primary"/><span className="px-3 py-1 rounded-lg bg-secondary">Pending</span><ArrowRight className="w-4 h-4 text-primary"/><span className="px-3 py-1 rounded-lg bg-secondary">Proof Ready</span></div></div>
              <div className="rounded-xl border border-border p-4"><p className="font-medium mb-3">Architecture</p><div className="flex flex-wrap items-center gap-2"><span className="px-3 py-1 rounded-lg bg-secondary">Frontend</span><ArrowRight className="w-4 h-4 text-primary"/><span className="px-3 py-1 rounded-lg bg-secondary">Wallet</span><ArrowRight className="w-4 h-4 text-primary"/><span className="px-3 py-1 rounded-lg bg-secondary">Smart Contract</span></div></div>
            </div>
          </section>

          <section id="architecture" className="glass-card p-8">
            <h2 className="font-display text-3xl font-bold mb-6">5) Architecture</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="rounded-xl border border-border p-4"><Wallet className="w-5 h-5 text-primary mb-2" />Frontend: Next.js-style app shell rendering group, payout, and proof views.</div>
              <div className="rounded-xl border border-border p-4"><Wallet className="w-5 h-5 text-primary mb-2" />Wallet Layer: Polkadot.js/SubWallet handles address identity + signatures.</div>
              <div className="rounded-xl border border-border p-4"><Blocks className="w-5 h-5 text-primary mb-2" />Smart Contract: Vara contracts execute split, pay, claim, and proof status changes.</div>
              <div className="rounded-xl border border-border p-4"><BellRing className="w-5 h-5 text-primary mb-2" />Action Center: contract-driven notification state for pending or proof-ready actions.</div>
            </div>
          </section>

          <section id="contracts" className="glass-card p-8">
            <h2 className="font-display text-3xl font-bold mb-6">6) Smart Contract Logic</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">VaraSplitEscrow stores group members, expense entries, settlement deltas, and claimable balances. WorkPayoutProof stores work-based payout obligations and marks proof completion after claim. In practice: payers send funds, recipients claim when eligible, and proof artifacts are generated after closure states are reached.</p>
            <p className="text-sm text-muted-foreground">No blockchain background required: think of contracts as shared backend logic no participant can privately alter.</p>
          </section>

          <section id="action-center" className="glass-card p-8">
            <h2 className="font-display text-3xl font-bold mb-6">7) Action Center</h2>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Shows pending settlements that need your signature or payment.</li>
              <li>Shows proof-ready settlements once all required actions finish.</li>
              <li>Fetch uses your wallet address to filter records (no full-scan).</li>
              <li>"You&apos;re all caught up" appears when no pending/proof entries match the connected wallet.</li>
              <li>Loading can take time because contract reads and wallet sync are asynchronous.</li>
            </ul>
          </section>

          <section id="limitations" className="glass-card p-8">
            <h2 className="font-display text-3xl font-bold mb-6">8) Current Limitations</h2>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Frequent wallet signing in multi-step flows.</li>
              <li>Contract reads can feel slow during peak network periods.</li>
              <li>Action center updates may appear delayed.</li>
              <li>Work & payout mode is incomplete in MVP state.</li>
            </ul>
          </section>

          <section id="roadmap" className="glass-card p-8">
            <h2 className="font-display text-3xl font-bold mb-6">9) Future Roadmap</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              {[
                "Faster wallet-indexed fetch pipeline",
                "Reduced signing friction via better UX",
                "Richer contract-based notifications",
                "Full Work & Payout production launch",
                "Improved indexing and query strategy",
                "Higher-scale deployment path for larger group volumes",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2"><Circle className="w-3 h-3 text-primary fill-primary" />{item}</div>
              ))}
            </div>
          </section>

          <section id="advanced" className="glass-card p-8">
            <h2 className="font-display text-3xl font-bold mb-6">10) Advanced / Tech Section</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              VaraSplit is contract-driven UI: the interface reflects contract state instead of local assumptions. Wallet-based fetch means each user reads actions scoped to their address. Proof matters because it replaces unverifiable chat logs with immutable evidence. Claim exists to let recipients pull owed funds when ready. Deployment is frontend + contract addresses + wallet provider compatibility layered for production hosting.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Docs;
