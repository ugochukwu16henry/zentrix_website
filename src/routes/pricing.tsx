import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Zentrix Software Solutions" },
      { name: "description", content: "Transparent engagement models for startups and enterprises — sprints, retainers, and fixed-scope builds." },
      { property: "og:title", content: "Pricing — Zentrix Software Solutions" },
      { property: "og:description", content: "Transparent engagement models for startups and enterprises — sprints, retainers, and fixed-scope builds." },
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Launchpad",
    price: "$4,900",
    unit: "/ 2-week sprint",
    tagline: "For founders shipping their first version.",
    features: [
      "1 senior full-stack engineer",
      "Product & UI design included",
      "Weekly demos + async updates",
      "Deploy to production",
      "30 days post-launch support",
    ],
    cta: "Start with a sprint",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$14,900",
    unit: "/ month",
    tagline: "For teams scaling a product with real users.",
    features: [
      "Dedicated pod: 2 engineers + designer",
      "Cloud, DevOps & observability",
      "Roadmap & product management",
      "SLA-backed support",
      "Quarterly architecture reviews",
    ],
    cta: "Book a discovery call",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "",
    tagline: "For organizations with mission-critical systems.",
    features: [
      "Multi-pod delivery",
      "24/7 on-call & incident response",
      "Security, compliance & audits",
      "Fractional CTO advisory",
      "Custom contracts & SLAs",
    ],
    cta: "Talk to us",
    highlight: false,
  },
];

const addons = [
  { title: "AI & Automation Sprint", price: "$6,900", desc: "Prototype an LLM/RAG feature or automate a workflow in 2 weeks." },
  { title: "Architecture Audit", price: "$3,500", desc: "Deep review of your codebase, infra, and roadmap with a written report." },
  { title: "Design System", price: "from $8,000", desc: "Tokens, components, and Figma library aligned to your brand." },
  { title: "Fractional CTO", price: "$3,900 / mo", desc: "Weekly strategy, hiring, and architecture guidance." },
];

const faqs = [
  { q: "How do you bill?", a: "Sprints are fixed-price and paid upfront. Retainers bill monthly. Enterprise engagements are custom — usually milestone-based." },
  { q: "Do you sign NDAs?", a: "Yes. We sign your NDA before discovery, or provide our mutual NDA template." },
  { q: "Where is your team?", a: "Headquartered in Nigeria, working across African, EU, and US time zones." },
  { q: "Who owns the code?", a: "You do. On final payment, all IP transfers to your company." },
];

function Pricing() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-12 text-center">
        <p className="text-sm text-primary font-medium uppercase tracking-widest">Pricing</p>
        <h1 className="mt-2 text-5xl md:text-6xl font-display font-semibold">Simple, senior, transparent.</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          No offshore hand-offs. No junior surprises. Pick the engagement that fits your stage — upgrade or pause anytime.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                t.highlight
                  ? "border-primary bg-card shadow-[0_0_0_1px_var(--color-primary)]"
                  : "border-border bg-card"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-display font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.tagline}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-display font-semibold">{t.price}</span>
                <span className="text-muted-foreground text-sm">{t.unit}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 font-medium transition ${
                  t.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-3xl font-display font-semibold mb-8">Add-ons</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {addons.map((a) => (
            <div key={a.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold">{a.title}</h3>
              <div className="mt-2 text-primary font-mono text-sm">{a.price}</div>
              <p className="mt-3 text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <h2 className="text-3xl font-display font-semibold mb-8 text-center">Frequently asked</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-border bg-card p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
                {f.q}
                <span className="text-primary text-xl transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-card p-10 text-center">
          <h3 className="text-2xl font-display font-semibold">Ready to start?</h3>
          <p className="mt-2 text-muted-foreground">Book a free 30-minute discovery call — no obligation.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90">
            Get in touch
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
