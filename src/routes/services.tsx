import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Zentrix Software Solutions" },
      { name: "description", content: "Custom software, cloud, AI, and product design services from Zentrix." },
      { property: "og:title", content: "Services — Zentrix Software Solutions" },
      { property: "og:description", content: "Custom software, cloud, AI, and product design services from Zentrix." },
    ],
  }),
  component: Services,
});

const services = [
  {
    title: "Custom Software Development",
    desc: "Web platforms, mobile apps, APIs, and internal tools tailored to your operations.",
    items: ["Web applications (React, Next, TanStack)", "iOS & Android (React Native, Flutter)", "REST & GraphQL APIs", "Internal admin & ops tools"],
  },
  {
    title: "Cloud, DevOps & SRE",
    desc: "Ship faster, scale safely. We handle the plumbing so you focus on product.",
    items: ["AWS / GCP / Cloudflare architecture", "CI/CD & infrastructure as code", "Observability & incident response", "Cost optimization audits"],
  },
  {
    title: "AI & Automation",
    desc: "Practical AI that moves KPIs — not demos that impress in a slide deck.",
    items: ["LLM integrations & RAG systems", "Document & workflow automation", "Custom chat assistants", "Data pipelines & analytics"],
  },
  {
    title: "Product Design",
    desc: "Research, prototype, and design systems that make software feel effortless.",
    items: ["UX research & discovery", "High-fidelity UI design", "Design systems & tokens", "Clickable prototypes"],
  },
  {
    title: "Technical Consulting",
    desc: "Architecture reviews, hiring support, and CTO-level strategy on demand.",
    items: ["Architecture & code audits", "Team & hiring strategy", "Tech due diligence", "Fractional CTO"],
  },
  {
    title: "Maintenance & Support",
    desc: "Keep your systems healthy with proactive monitoring and rapid response.",
    items: ["24/7 monitoring", "SLA-backed support", "Security patching", "Quarterly roadmap reviews"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-12">
        <p className="text-sm text-primary font-medium uppercase tracking-widest">Services</p>
        <h1 className="mt-2 text-5xl md:text-6xl font-display font-semibold">What we build for you</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Six focused practices. One team. Engaged as a full build partner or as a specialist add-on to your existing crew.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="rounded-xl border border-border bg-card p-6 hover:border-primary/60 transition">
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">›</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-semibold">Not sure what you need?</h3>
            <p className="mt-2 text-muted-foreground">Start with a free 30-minute discovery call.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90">
            Get in touch
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
