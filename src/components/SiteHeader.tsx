import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const SiteHeader = () => {
  const location = useLocation();
  const isDocs = useMemo(() => location.pathname.startsWith("/docs"), [location.pathname]);

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
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
