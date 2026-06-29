import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/800.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LenisProvider } from "../components/Lenis";
import { ThemeProvider } from "../hooks/use-theme";
import { BackToTop } from "../components/BackToTop";
import { WhatsAppFAB } from "../components/WhatsAppFAB";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorPage } from "../components/ErrorPage";
import {
  buildOrganizationSchema,
  buildWebsiteSchema,
  schemaScript,
} from "../lib/seo";

function NotFoundComponent() {
  return (
    <ErrorPage
      code="404"
      title="Signal"
      subtitle="Lost."
      description="The page you're looking for has drifted off the trade route. It may have moved, been removed, or never existed."
    />
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <ErrorPage
      code="500"
      title="Shipment"
      subtitle="Failed."
      description="Something went wrong on our end. Our team has been notified. Try again or head back home."
      onRetry={() => { router.invalidate(); reset(); }}
    />
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Indian Agricultural Products Exporter | Neminath Global" },
      {
        name: "description",
        content:
          "Premium Indian spices, grains, frozen foods & hygiene goods exported worldwide. Trusted B2B export supplier from Rajasthan, India. Request a bulk quote.",
      },
      { name: "author", content: "Neminath Global" },
      { property: "og:site_name", content: "Neminath Global" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Indian Agricultural Products Exporter | Neminath Global",
      },
      {
        property: "og:description",
        content:
          "Premium Indian spices, grains, frozen foods & hygiene goods exported worldwide. Trusted B2B export supplier from Rajasthan, India.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Indian Agricultural Products Exporter | Neminath Global",
      },
      {
        name: "twitter:description",
        content:
          "Premium Indian spices, grains, frozen foods & hygiene goods exported worldwide. Trusted B2B export supplier from Rajasthan, India.",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      schemaScript(buildOrganizationSchema()),
      schemaScript(buildWebsiteSchema()),
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <LoadingScreen />
        <LenisProvider />
        <Navbar />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <BackToTop />
        <WhatsAppFAB />
        <Footer />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
