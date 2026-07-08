import { Link } from "@tanstack/react-router";

import { brand } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={brand.wordmark}
            alt="Zentrix Software Solutions"
            className="h-8 w-auto rounded-sm bg-white px-2 py-1"
          />
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Every software problem, solved. Premium engineering for teams and founders — from idea to production.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>

          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@zentrix.software</li>
            <li>27, Alor Street, Otukpo</li>
            <li>Benue State, Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Zentrix Software Solutions. RC/BN 9648404.</p>
          <p>Registered under CAMA 2020, Federal Republic of Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
