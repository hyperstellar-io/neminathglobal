import { createFileRoute } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { z } from "zod";
import { motion as m } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Mail, Phone, MapPin, Send, Plus } from "lucide-react";
import { sendContactNotification } from "../lib/server/mailer";
import {
  SITE_URL,
  buildContactPageSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
  schemaScript,
} from "../lib/seo";

const contactFormSchema = z.object({
  name: z.string().trim().min(1).max(200),
  company: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  country: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().min(1).max(5000),
});

const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactFormSchema.parse(data))
  .handler(async ({ data }) => {
    await sendContactNotification(data);
    return { ok: true };
  });

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Neminath Global — Bulk Export Enquiries",
      },
      {
        name: "description",
        content:
          "Get in touch for bulk export quotes, MOQ details, FOB/CIF pricing or solar project enquiries. Our trade desk responds within one business day.",
      },
      {
        property: "og:title",
        content: "Contact Neminath Global — Bulk Export Enquiries",
      },
      {
        property: "og:description",
        content:
          "Get in touch for bulk export quotes, MOQ details, FOB/CIF pricing or solar project enquiries. Our trade desk responds within one business day.",
      },
      { property: "og:url", content: `${SITE_URL}/contact` },
      {
        name: "twitter:title",
        content: "Contact Neminath Global — Bulk Export Enquiries",
      },
      {
        name: "twitter:description",
        content:
          "Get in touch for bulk export quotes, MOQ details, FOB/CIF pricing or solar project enquiries. Our trade desk responds within one business day.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
    scripts: [
      schemaScript(buildContactPageSchema()),
      schemaScript(
        buildFaqSchema([
          {
            q: "What products do you export?",
            a: "We export Indian spices, grains, fresh produce (mangoes, pomegranates), personal hygiene goods, industrial commodities and packaging materials.",
          },
          {
            q: "What is your minimum order quantity?",
            a: "MOQ depends on the product category and destination. Most categories ship by full container; we work with you to optimize the load.",
          },
          {
            q: "Do you handle export documentation?",
            a: "Yes. We handle all export documentation, certifications and customs paperwork to make clearance hassle-free at destination.",
          },
          {
            q: "Do you offer solar services outside India?",
            a: "Solar installations are primarily delivered in India. International advisory and supply partnerships are available case-by-case.",
          },
        ]),
      ),
      schemaScript(
        buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]),
      ),
    ],
  }),
  component: Contact,
});

const FAQ = [
  {
    q: "What products do you export?",
    a: "We export Indian spices, grains, fresh produce (mangoes, pomegranates), personal hygiene goods, industrial commodities and packaging materials.",
  },
  {
    q: "What is your minimum order quantity?",
    a: "MOQ depends on the product category and destination. Most categories ship by full container; we work with you to optimize the load.",
  },
  {
    q: "Do you handle export documentation?",
    a: "Yes. We handle all export documentation, certifications and customs paperwork to make clearance hassle-free at destination.",
  },
  {
    q: "Do you offer solar services outside India?",
    a: "Solar installations are primarily delivered in India. International advisory and supply partnerships are available case-by-case.",
  },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Let&apos;s build a<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-cyan-900 to-zinc-700 dark:from-cyan-glow dark:via-white dark:to-zinc-500">
              trade corridor.
            </span>
          </>
        }
        subtitle="Send us a message about exports, solar services or partnership opportunities. Our trade desk responds within one business day."
      />

      <section className="px-6 md:px-30 pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 md:gap-x-20 md:gap-y-16">
          <div className="md:col-span-5 flex flex-col gap-6">
            <Reveal>
              <InfoCard
                icon={Mail}
                title="Email"
                lines={["info@neminathglobal.com"]}
                href="mailto:info@neminathglobal.com"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <InfoCard
                icon={Phone}
                title="Phone"
                lines={[
                  { text: "🇩🇪 +49 152 0826 8849", href: "tel:+4915208268849" },
                  { text: "🇮🇳 +91 90752 40933", href: "tel:+919075240933" },
                ]}
              />
            </Reveal>
            <Reveal delay={0.2}>
              <InfoCard
                icon={MapPin}
                title="Headquarters"
                lines={[
                  {
                    text: "FLAT NO. B-3, SHREENATH REGENCY, M.B.S NAGAR, KOTA JUNCTION, Kota, Rajasthan, 324002",
                    href: "https://www.google.com/maps/search/?api=1&query=FLAT+NO.+B-3%2C+SHREENATH+REGENCY%2C+M.B.S+NAGAR%2C+KOTA+JUNCTION%2C+Kota%2C+Rajasthan%2C+324002",
                  },
                ]}
              />
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-sm text-muted-foreground pt-6 border-t border-border mx-4">
                Neminath Global is a brand of{" "}
                <span className="text-foreground dark:text-white">Nemminath Enterprisee</span>{" "}
                (registered company name).
              </p>
            </Reveal>
          </div>
          <Reveal delay={1} className="md:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-glow">
              FAQ
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tighter leading-[0.95]">
              Quick
              <br />
              answers.
            </h2>
          </Reveal>
          <div className="md:col-span-8 divide-y divide-border border-y border-border">
            {FAQ.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: typeof Mail;
  title: string;
  lines: (string | { text: string; href: string })[];
  href?: string;
}) {
  const inner = (
    <div className="group mx-4 rounded-2xl border border-border bg-card/80 dark:bg-zinc-900/40 p-5 hover:border-cyan-glow/30 transition-colors">
      <div className="flex items-start gap-3">
        <div className="size-9 rounded-lg bg-cyan-glow/10 border border-cyan-glow/20 grid place-items-center text-cyan-glow">
          <Icon size={15} />
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{title}</div>
          <div className="mt-1 flex flex-wrap gap-x-5 gap-y-0.5">
            {lines.map((l) => {
              const text = typeof l === "string" ? l : l.text;
              const lineHref = typeof l === "string" ? undefined : l.href;
              const isExternal = lineHref?.startsWith("http");
              return lineHref ? (
                <a
                  key={text}
                  href={lineHref}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="text-sm font-semibold hover:text-cyan-glow transition-colors"
                >
                  {text}
                </a>
              ) : (
                <span
                  key={text}
                  className="text-sm font-semibold group-hover:text-cyan-glow transition-colors"
                >
                  {text}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const submit = useServerFn(submitContactForm);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    try {
      await submit({
        data: {
          name: form.name ?? "",
          company: form.company ?? "",
          email: form.email ?? "",
          country: form.country,
          phone: form.phone,
          message: form.message ?? "",
        },
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card/80 dark:bg-zinc-900/40 p-8 md:p-10 space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Name" name="name" required placeholder="Jane Doe" />
        <Field label="Company" name="company" required placeholder="Acme Traders Ltd" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Email" name="email" type="email" required placeholder="jane@company.com" />
        <Field label="Country" name="country" placeholder="Germany" />
      </div>
      <Field label="Phone number" name="phone" placeholder="+49 152 0000 0000" />
      <Field
        label="Message"
        name="message"
        textarea
        required
        placeholder="Tell us about the products or volumes you're looking for..."
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-cyan-glow transition-colors active:scale-95 disabled:opacity-60"
      >
        {status === "sent" ? (
          "Thank you — we'll be in touch"
        ) : status === "submitting" ? (
          "Sending…"
        ) : (
          <>
            Submit <Send size={14} />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block group">
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-focus-within:text-cyan-glow">
        {label}
        {required && " *"}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder}
          className="mt-2 w-full bg-transparent border-b border-border focus:border-cyan-glow outline-none py-3 text-base resize-none transition-colors placeholder:text-muted-foreground/50"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="mt-2 w-full bg-transparent border-b border-border focus:border-cyan-glow outline-none py-3 text-base transition-colors placeholder:text-muted-foreground/50"
        />
      )}
    </label>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      className="w-full text-left py-6 group"
    >
      <div className="flex items-start justify-between gap-6">
        <h3 className="text-lg md:text-xl font-bold group-hover:text-cyan-glow transition-colors">
          {q}
        </h3>
        <span className="size-8 shrink-0 rounded-full border border-border dark:border-white/20 flex items-center justify-center text-cyan-glow transition-transform group-aria-expanded:rotate-45">
          <Plus size={14} aria-hidden="true" />
        </span>
      </div>
      <m.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="mt-4 text-muted-foreground max-w-2xl">{a}</p>
      </m.div>
    </button>
  );
}
