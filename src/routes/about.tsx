import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zentrix Software Solutions" },
      { name: "description", content: "Zentrix is a Nigerian software studio building premium, reliable systems for teams worldwide." },
      { property: "og:title", content: "About — Zentrix Software Solutions" },
      { property: "og:description", content: "Zentrix is a Nigerian software studio building premium, reliable systems for teams worldwide." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Craft over shortcuts", desc: "Every line ships with the same standard we'd apply to our own product." },
  { title: "Clarity over jargon", desc: "You always know what we're building, why, and what it costs." },
  { title: "Outcomes over output", desc: "We measure success by the numbers that move for your business." },
];

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16">
        <p className="text-sm text-primary font-medium uppercase tracking-widest">About</p>
        <h1 className="mt-2 text-5xl md:text-6xl font-display font-semibold">A studio for serious software.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Zentrix Software Solutions is a Nigerian software engineering studio, registered under CAMA 2020 (RC/BN 9648404). We partner with founders, operators, and enterprises to design and build software that quietly runs important things.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          We're small on purpose — a senior team that owns the outcome end-to-end, from the first sketch to the pager on-call at 3 a.m.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-3xl font-display font-semibold mb-8">What we believe</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-2xl border border-border bg-card p-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-display font-semibold">Registered business</h3>
            <p className="mt-3 text-muted-foreground text-sm">
              Zentrix Software Solutions is a registered business name in the Federal Republic of Nigeria.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div><dt className="text-muted-foreground">RC/BN</dt><dd className="font-mono">9648404</dd></div>
            <div><dt className="text-muted-foreground">Registered</dt><dd>01 Jul 2026</dd></div>
            <div><dt className="text-muted-foreground">Regulator</dt><dd>CAC, Nigeria</dd></div>
            <div><dt className="text-muted-foreground">Address</dt><dd>Otukpo, Benue</dd></div>
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}
