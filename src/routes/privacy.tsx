import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import { SITE_URL } from "../lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Neminath Global" },
      {
        name: "description",
        content: "How Neminath Global collects, uses, and protects your personal information.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: Privacy,
});

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `We collect information you voluntarily provide when you contact us through our website, including your name, email address, phone number, company name, and the nature of your trade inquiry. We do not collect any information automatically beyond standard server logs (IP address, browser type, referring URL) for security and analytics purposes.`,
  },
  {
    title: "How We Use Your Information",
    body: `Information you share with us is used solely to respond to your inquiries, process trade requests, send relevant product and service communications, and maintain our business relationship with you. We do not use your data for automated decision-making or profiling. We will never sell, rent, or trade your personal information to third parties for marketing purposes.`,
  },
  {
    title: "Cookies",
    body: `Our website uses essential cookies to ensure basic functionality and a smooth browsing experience. We do not use tracking or advertising cookies. You can disable cookies through your browser settings at any time; however, doing so may affect certain features of the website.`,
  },
  {
    title: "Third-Party Services",
    body: `We may use trusted third-party service providers (such as email delivery and website hosting) to operate our business. These providers are contractually obligated to keep your information confidential and may only use it to perform services on our behalf. Links to third-party websites on our site are not covered by this policy; we encourage you to review their privacy practices.`,
  },
  {
    title: "Data Security",
    body: `We implement commercially reasonable technical and organisational measures to protect your personal information from unauthorised access, disclosure, or loss. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Data Retention",
    body: `We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. When your information is no longer needed, we securely delete or anonymise it.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to access, correct, or request deletion of the personal information we hold about you. To exercise any of these rights, or to opt out of receiving communications from us, please contact us at info@neminathglobal.com. We will respond to your request within 30 days.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.`,
  },
];

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-cyan-900 to-zinc-700 dark:from-cyan-glow dark:via-white dark:to-zinc-500">
              Policy.
            </span>
          </>
        }
        subtitle="We respect your privacy and are committed to protecting your personal information. This policy explains what we collect, why we collect it, and how we keep it safe."
      />

      <section className="px-6 md:px-12 py-16 md:py-24 border-t border-border">
        <div className="max-w-[860px] mx-auto">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-12">
              Effective date: 1 January 2025
            </p>
          </Reveal>

          <div className="space-y-14">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="grid md:grid-cols-12 gap-6 md:gap-10 pb-14 border-b border-border last:border-0 last:pb-0">
                  <div className="md:col-span-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-glow font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-2 text-lg font-bold leading-snug">{s.title}</h2>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-muted-foreground leading-relaxed text-[15px]">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 rounded-3xl border border-border bg-card/80 dark:bg-zinc-900/40 p-8">
              <h3 className="font-bold text-base">Questions about this policy?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Contact our team at{" "}
                <a href="mailto:info@neminathglobal.com" className="text-cyan-glow hover:underline">
                  info@neminathglobal.com
                </a>{" "}
                — we aim to respond within 2 business days.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
