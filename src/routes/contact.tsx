import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/site/layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zentrix Software Solutions" },
      { name: "description", content: "Tell us about your software project. We reply within one business day." },
      { property: "og:title", content: "Contact — Zentrix Software Solutions" },
      { property: "og:description", content: "Tell us about your software project. We reply within one business day." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`New project inquiry — ${name}${company ? ` (${company})` : ""}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`,
    );
    window.location.href = `mailto:zentrix195@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-24 grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm text-primary font-medium uppercase tracking-widest">Contact</p>
          <h1 className="mt-2 text-5xl font-display font-semibold">Let's talk.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about the problem you're trying to solve. We'll respond within one business day with next steps or a scoped proposal.
          </p>
          <div className="mt-10 space-y-6 text-sm">
            <div>
              <div className="text-muted-foreground uppercase tracking-wider text-xs">Email</div>
              <a href="mailto:zentrix195@gmail.com" className="text-lg hover:text-primary">zentrix195@gmail.com</a>
            </div>
            <div>
              <div className="text-muted-foreground uppercase tracking-wider text-xs">Phone</div>
              <div className="mt-1">
                Uyo: <a href="tel:+2349015718484" className="hover:text-primary">+234 901 571 8484</a>
              </div>
              <div>
                Benue: <a href="tel:+2349033957353" className="hover:text-primary">+234 903 395 7353</a>
              </div>
            </div>
            <div>
              <div className="text-muted-foreground uppercase tracking-wider text-xs">Office</div>
              <div className="mt-1">27, Alor Street, Otukpo</div>
              <div>Benue State, Nigeria</div>
            </div>
            <div>
              <div className="text-muted-foreground uppercase tracking-wider text-xs">Business hours</div>
              <div className="mt-1">Mon – Fri · 09:00 – 18:00 WAT</div>
            </div>
            <div>
              <div className="text-muted-foreground uppercase tracking-wider text-xs">Registration</div>
              <div className="mt-1 font-mono">RC/BN 9648404 · CAMA 2020</div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-8 space-y-5"
        >
          {sent ? (
            <div className="py-16 text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/20 text-primary grid place-items-center text-2xl">✓</div>
              <h3 className="mt-4 text-xl font-display font-semibold">Your email client just opened.</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Send the drafted message and we'll respond within one business day. If nothing opened, email us directly at{" "}
                <a href="mailto:zentrix195@gmail.com" className="text-primary hover:underline">zentrix195@gmail.com</a>.
              </p>
            </div>
          ) : (
            <>
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                <input id="name" name="name" required className="mt-1 w-full rounded-md bg-background border border-border px-3 py-2 outline-none focus:border-primary" />
              </div>
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Work email</label>
                <input id="email" name="email" required type="email" className="mt-1 w-full rounded-md bg-background border border-border px-3 py-2 outline-none focus:border-primary" />
              </div>
              <div>
                <label htmlFor="company" className="text-xs uppercase tracking-wider text-muted-foreground">Company</label>
                <input id="company" name="company" className="mt-1 w-full rounded-md bg-background border border-border px-3 py-2 outline-none focus:border-primary" />
              </div>
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">What are you building?</label>
                <textarea id="message" name="message" required rows={5} className="mt-1 w-full rounded-md bg-background border border-border px-3 py-2 outline-none focus:border-primary" />
              </div>
              <button className="w-full rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground hover:opacity-90">
                Send message
              </button>
              <p className="text-xs text-muted-foreground text-center">
                By sending this you agree to be contacted about your inquiry.
              </p>
            </>
          )}
        </form>
      </section>
    </SiteLayout>
  );
}
