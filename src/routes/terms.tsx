import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import { SITE_URL } from "../lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Neminath Global" },
      {
        name: "description",
        content: "Terms governing your use of the Neminath Global website and services.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/terms` }],
  }),
  component: Terms,
});

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using the Neminath Global website (neminathglobal.com), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please discontinue your use of the site. These terms apply to all visitors, users, and trade partners who access or use our website.`,
  },
  {
    title: "Use of the Website",
    body: `This website is provided for informational and business inquiry purposes only. You may use it to learn about our products and services, submit trade inquiries, and contact us. You agree not to use the site for any unlawful purpose, to distribute spam or malicious content, to attempt unauthorised access to any portion of the site, or to misrepresent your identity or affiliation.`,
  },
  {
    title: "Our Services",
    body: `Neminath Global is an export trading house specialising in spices, grains, agricultural goods, industrial materials, and solar energy solutions. All product descriptions, pricing, availability, and trade terms are subject to change without notice and must be confirmed directly with our team before any transaction is entered into. Nothing on this website constitutes a binding offer or contract.`,
  },
  {
    title: "Intellectual Property",
    body: `All content on this website — including text, graphics, logos, photographs, and software — is the property of Neminath Global (a brand of Nemminath Enterprisee) or its content suppliers, and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this site without our prior written consent.`,
  },
  {
    title: "Disclaimer of Warranties",
    body: `This website and its contents are provided on an "as is" and "as available" basis without any warranties of any kind, express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of viruses. To the fullest extent permitted by law, Neminath Global disclaims all warranties, including implied warranties of merchantability and fitness for a particular purpose.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the maximum extent permitted by applicable law, Neminath Global and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or its content. Our total liability to you for any claim arising out of your use of this site shall not exceed INR 1,000 (or equivalent).`,
  },
  {
    title: "Third-Party Links",
    body: `Our website may contain links to third-party websites for your convenience. These links do not constitute an endorsement of those sites or their content. We have no control over, and accept no responsibility for, the content, privacy policies, or practices of any third-party sites. We encourage you to review the terms and privacy policies of any linked sites you visit.`,
  },
  {
    title: "Governing Law",
    body: `These Terms of Use are governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Rajasthan, India.`,
  },
  {
    title: "Changes to These Terms",
    body: `We reserve the right to modify these Terms of Use at any time. Changes become effective immediately upon posting to this page. Your continued use of the website after any changes constitutes your acceptance of the revised terms. We recommend reviewing this page periodically.`,
  },
];

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Terms of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-cyan-900 to-zinc-700 dark:from-cyan-glow dark:via-white dark:to-zinc-500">
              Use.
            </span>
          </>
        }
        subtitle="Please read these terms carefully before using our website. By accessing Neminath Global's online presence, you agree to the conditions set out below."
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
              <h3 className="font-bold text-base">Questions about these terms?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach us at{" "}
                <a href="mailto:info@neminathglobal.com" className="text-cyan-glow hover:underline">
                  info@neminathglobal.com
                </a>{" "}
                and we will be happy to clarify.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
