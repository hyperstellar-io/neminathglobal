export const SITE_URL = "https://neminathglobal.com";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Neminath Global",
    alternateName: "Nemminath Enterprisee",
    url: SITE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-90752-40933",
      email: "info@neminathglobal.com",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Neminath Global",
    url: SITE_URL,
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Neminath Global",
    alternateName: "Nemminath Enterprisee",
    url: SITE_URL,
    telephone: "+91-90752-40933",
    email: "info@neminathglobal.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    areaServed: "Worldwide",
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function buildServiceSchema(opts: {
  name: string;
  description: string;
  serviceType: string;
  areaServed: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: opts.areaServed,
    url: opts.url ?? SITE_URL,
  };
}

export function buildItemListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function buildFaqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function buildContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Neminath Global",
    description:
      "Get in touch for bulk export quotes, MOQ details, FOB/CIF pricing or solar project enquiries.",
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "ContactPoint",
      telephone: "+91-90752-40933",
      email: "info@neminathglobal.com",
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function schemaScript(schema: object) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(schema),
  };
}
