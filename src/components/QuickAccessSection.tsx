import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const QuickAccessSection = () => {
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
            <h3 className="font-display text-xl font-semibold mb-3">Open VaraSplit App</h3>
            <p className="text-muted-foreground mb-6">Go to the live VaraSplit experience to create groups and manage settlements.</p>
            <a
              href="https://varasplit-y8xv-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow inline-flex items-center gap-2 !py-2.5 !px-5 text-sm"
            >
              VaraSplit <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessSection;
