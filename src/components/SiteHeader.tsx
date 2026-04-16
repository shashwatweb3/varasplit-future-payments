import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type WalletAccount = { address: string };
type WalletExtension = { accounts?: { get: () => Promise<WalletAccount[]> } };
type InjectedProvider = { enable: (appName: string) => Promise<WalletExtension> };

type InjectedWindow = Window & {
  injectedWeb3?: Record<string, InjectedProvider>;
};

function formatAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

const SiteHeader = () => {
  const location = useLocation();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectError, setConnectError] = useState<string | null>(null);

  const isDocs = useMemo(() => location.pathname.startsWith("/docs"), [location.pathname]);

  const connectWallet = async () => {
    setConnectError(null);
    setIsConnecting(true);

    try {
      const injectedWeb3 = (window as InjectedWindow).injectedWeb3;
      if (!injectedWeb3 || Object.keys(injectedWeb3).length === 0) {
        throw new Error("No wallet extension detected. Install SubWallet or Polkadot.js extension.");
      }

      const [providerKey] = Object.keys(injectedWeb3);
      const provider = injectedWeb3[providerKey];
      const extension = await provider.enable("VaraSplit");

      if (!extension.accounts?.get) {
        throw new Error("Wallet connected but account API is unavailable.");
      }

      const accounts = await extension.accounts.get();
      if (!accounts || accounts.length === 0) {
        throw new Error("Wallet is connected but no account was found.");
      }

      setWalletAddress(accounts[0].address);
    } catch (error) {
      setConnectError(error instanceof Error ? error.message : "Failed to connect wallet.");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="font-display text-lg font-bold tracking-wide">
          VaraSplit
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            to="/"
            className={`rounded-lg px-4 py-2 text-sm border transition-colors ${
              !isDocs ? "border-primary/50 text-primary" : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/docs"
            className={`rounded-lg px-4 py-2 text-sm border transition-colors ${
              isDocs ? "border-primary/50 text-primary" : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            Docs
          </Link>
          <button
            type="button"
            onClick={connectWallet}
            disabled={isConnecting}
            className="btn-primary-glow !px-5 !py-2.5 text-sm"
          >
            {isConnecting ? "Connecting..." : walletAddress ? formatAddress(walletAddress) : "Connect Wallet"}
          </button>
        </nav>
      </div>
      {connectError && <p className="max-w-6xl mx-auto px-6 pb-3 text-xs text-red-400">{connectError}</p>}
    </header>
  );
};

export default SiteHeader;
