import { useState } from "react";
import type { FormEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Download, X } from "lucide-react";

// TODO: replace with real Formspree form ID once created
const FORMSPREE_ENDPOINT = "https://formspree.io/f/PLACEHOLDER";
const CATALOGUE_PATH = "/downloads/Neminath_Global_Product_Catalogue.pdf";

export function CatalogueDownload({
  className,
  label = "Download Catalogue",
}: {
  className?: string;
  label?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, source: "product-catalogue-download" }),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("done");
      const a = document.createElement("a");
      a.href = CATALOGUE_PATH;
      a.download = "Neminath_Global_Product_Catalogue.pdf";
      a.click();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[110] bg-black/70 backdrop-blur-sm grid place-items-center px-4"
                onClick={() => setOpen(false)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-md rounded-3xl border border-border bg-background p-8 shadow-xl"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="absolute top-4 right-4 size-8 rounded-full border border-border dark:border-white/20 grid place-items-center hover:border-cyan-glow transition-colors"
                  >
                    <X size={14} />
                  </button>
                  {status === "done" ? (
                    <>
                      <h3 className="text-xl font-extrabold">Download starting…</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        If it doesn&apos;t start automatically,{" "}
                        <a href={CATALOGUE_PATH} download className="text-cyan-glow underline">
                          click here
                        </a>
                        .
                      </p>
                    </>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h3 className="text-xl font-extrabold">Get the product catalogue</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Enter your email to download our full export & solar product catalogue
                        (PDF).
                      </p>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="mt-6 w-full bg-transparent border-b border-border focus:border-cyan-glow outline-none py-3 text-base transition-colors placeholder:text-muted-foreground/50"
                      />
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="mt-6 w-full inline-flex items-center justify-center gap-3 bg-foreground text-background px-7 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-cyan-glow transition-all disabled:opacity-60"
                      >
                        {status === "submitting" ? (
                          "Sending…"
                        ) : (
                          <>
                            Download <Download size={14} />
                          </>
                        )}
                      </button>
                      {status === "error" && (
                        <p className="mt-3 text-xs text-red-500">
                          Something went wrong. Try again.
                        </p>
                      )}
                    </form>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
