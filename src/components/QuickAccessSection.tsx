import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type ActionRecord = {
  id: string;
  address: string;
  group: string;
  status: "pending" | "proof-ready";
  amount: number;
};

const actionCenterRecords: ActionRecord[] = [
  { id: "set-001", address: "5F3sa2TJAWMqDhXG6jhV4N8ko9KQPW4h84P9vyQf8xQ7o2Yh", group: "Goa Trip", status: "pending", amount: 42 },
  { id: "set-002", address: "5F3sa2TJAWMqDhXG6jhV4N8ko9KQPW4h84P9vyQf8xQ7o2Yh", group: "Team Lunch", status: "proof-ready", amount: 28 },
  { id: "set-003", address: "5CZxzM4fJQfGHfvmDfwm5Vax6LzYxq7h3v89qLP4CDP9iJbx", group: "Hackathon Stay", status: "pending", amount: 61 },
];

const QuickAccessSection = () => {
  const [walletAddress, setWalletAddress] = useState("5F3sa2TJAWMqDhXG6jhV4N8ko9KQPW4h84P9vyQf8xQ7o2Yh");
  const [isLoading, setIsLoading] = useState(false);
  const [records, setRecords] = useState<ActionRecord[]>([]);

  const pending = useMemo(() => records.filter((record) => record.status === "pending"), [records]);
  const proofReady = useMemo(() => records.filter((record) => record.status === "proof-ready"), [records]);

  const fetchActionCenter = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 450));
    const filtered = actionCenterRecords.filter((record) => record.address === walletAddress);
    setRecords(filtered);
    setIsLoading(false);
  };

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">Quick Access</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Jump straight into product + docs</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-display text-xl font-semibold mb-3">Explore Documentation</h3>
            <p className="text-muted-foreground mb-6">Read complete VaraSplit flows, architecture, wallet mechanics, and settlement proofs.</p>
            <Link to="/docs" className="btn-outline-glow inline-flex items-center gap-2 !py-2.5 !px-5 text-sm">
              Open Docs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-display text-xl font-semibold mb-4">Action Center (wallet-filtered)</h3>
            <label className="block text-xs text-muted-foreground mb-2">Wallet address filter</label>
            <input
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full rounded-lg bg-background/70 border border-border px-3 py-2 text-sm mb-4"
            />
            <button onClick={fetchActionCenter} className="btn-primary-glow !py-2.5 !px-5 text-sm" type="button">
              {isLoading ? "Loading settlements..." : "Fetch my actions"}
            </button>

            <div className="mt-5 text-sm text-muted-foreground">
              {isLoading ? (
                <p>Fetching only records tied to this wallet to reduce scan delay...</p>
              ) : records.length === 0 ? (
                <p>You&apos;re all caught up.</p>
              ) : (
                <div className="space-y-2">
                  <p>Pending settlements: <span className="text-foreground font-medium">{pending.length}</span></p>
                  <p>Proof ready: <span className="text-foreground font-medium">{proofReady.length}</span></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessSection;
