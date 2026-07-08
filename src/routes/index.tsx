import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  component: Index,
});

const capabilities = [
  {
    title: "Custom Software",
    desc: "Web, mobile, and internal tools engineered around the way your team actually works.",
    tag: "Engineering",
  },
  {
    title: "Cloud & DevOps",
    desc: "Resilient infrastructure, automated pipelines, and observability you can sleep on.",
    tag: "Platform",
  },
  {
    title: "AI & Automation",
    desc: "LLM features, RAG, and workflow automation that measurably move the numbers.",
    tag: "Intelligence",
  },
  {
    title: "Product Design",
    desc: "Research-led interfaces and design systems that make complex software feel obvious.",
    tag: "Design",
  },
];

const principles = [
  { k: "01", t: "Senior by default", d: "Every engagement is staffed with senior engineers and designers — no offshore relay, no juniors on the critical path." },
  { k: "02", t: "Ship weekly", d: "You see working software at the end of every week. No 3-month reveals, no surprises." },
  { k: "03", t: "You own everything", d: "Full IP transfer on final payment. Source code, infrastructure, credentials — all yours." },
  { k: "04", t: "Fixed-price sprints", d: "Two-week sprints at a fixed price. Scope changes are transparent and negotiated before work starts." },
];

const industries = [
  "Fintech & Payments",
  "Health & Wellness",
  "Logistics & Mobility",
  "Education",
  "SaaS & Developer Tools",
  "E-commerce & Retail",
  "Media & Publishing",
  "Government & NGOs",
];

const stack = [
  "TypeScript", "React", "Next.js", "TanStack",
  "Node.js", "Python", "PostgreSQL", "Redis",
  "AWS", "Cloudflare", "Docker", "Kubernetes",
  "OpenAI", "Anthropic", "LangChain", "pgvector",
];

const process = [
  { step: "Discovery", desc: "A 30-minute call to understand the problem, users, and constraints." },
  { step: "Proposal", desc: "Written scope, timeline, and fixed price within 3 business days." },
  { step: "Build", desc: "Two-week sprints. Weekly demos. Async updates. Production at the end of each cycle." },
  { step: "Handover", desc: "Documentation, training, and 30 days of post-launch support included." },
];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "radial-gradient(600px 300px at 20% 10%, oklch(0.82 0.18 165 / 0.25), transparent 60%), radial-gradient(500px 300px at 80% 30%, oklch(0.7 0.15 200 / 0.15), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Taking on new engagements this quarter
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-display font-semibold leading-[1.05] tracking-tight">
              Every software problem, <span className="text-primary">solved.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Zentrix Software Solutions is a senior engineering studio. We design, build, and scale software that businesses and founders quietly rely on every day.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground hover:opacity-90">
                Start a project →
              </Link>
              <Link to="/services" className="inline-flex items-center rounded-md border border-border px-5 py-3 font-medium hover:bg-secondary">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Registered Nigerian studio · CAMA 2020 · <span className="font-mono">RC/BN 9648404</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Working across <span className="text-foreground">Africa</span>, <span className="text-foreground">EU</span>, and <span className="text-foreground">US</span> time zones
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-sm text-primary font-medium uppercase tracking-widest">What we do</p>
            <h2 className="mt-2 text-4xl font-display font-semibold">Four practices. One senior team.</h2>
          </div>
          <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground">All services →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div key={c.title} className="group rounded-xl border border-border bg-card p-6 hover:border-primary/60 transition">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-6">{c.tag}</div>
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm text-primary font-medium uppercase tracking-widest">How we work</p>
          <h2 className="mt-2 text-4xl font-display font-semibold max-w-2xl">Four principles that never bend.</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.k} className="flex gap-6">
                <div className="font-mono text-primary text-sm pt-1">{p.k}</div>
                <div>
                  <h3 className="font-semibold text-lg">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm text-primary font-medium uppercase tracking-widest">Engagement</p>
        <h2 className="mt-2 text-4xl font-display font-semibold max-w-2xl">From first call to production in weeks.</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {process.map((p, i) => (
            <div key={p.step} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">STEP {String(i + 1).padStart(2, "0")}</span>
                <span className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <h3 className="mt-6 font-semibold text-lg">{p.step}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries + Stack */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-10">
            <p className="text-sm text-primary font-medium uppercase tracking-widest">Industries</p>
            <h3 className="mt-2 text-2xl font-display font-semibold">Where we've built</h3>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {industries.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary">◆</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-10">
            <p className="text-sm text-primary font-medium uppercase tracking-widest">Stack</p>
            <h3 className="mt-2 text-2xl font-display font-semibold">What we build with</h3>
            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-mono text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Not on the list? We adapt to the stack your team already runs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-2xl border border-border bg-card p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-display font-semibold">Have a software problem?</h3>
            <p className="mt-2 text-muted-foreground">Tell us about it. We'll come back within one business day with a plan.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90">
            Book a discovery call
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
