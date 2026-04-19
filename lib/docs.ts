export type DocItem = {
  title: string;
  href: string;
};

export type DocSection = {
  title: string;
  items: DocItem[];
};

export const docsNav: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "What is Lightning Address?", href: "/docs/getting-started/what-is-lightning-address" },
      { title: "How it works", href: "/docs/getting-started/how-it-works" },
    ],
  },
  {
    title: "Setup Guide",
    items: [
      { title: "Get an Address", href: "/docs/setup/get-an-address" },
      { title: "Self-Hosted (DIY)", href: "/docs/setup/self-hosted" },
      { title: "Bridge Servers", href: "/docs/setup/bridge-servers" },
    ],
  },
  {
    title: "Capabilities",
    items: [
      { title: "Comments", href: "/docs/capabilities/comments" },
      { title: "Success Actions", href: "/docs/capabilities/success-actions" },
      { title: "Payment Verification", href: "/docs/capabilities/payment-verification" },
      { title: "Sender Identity", href: "/docs/capabilities/sender-identity" },
      { title: "Currency Denomination", href: "/docs/capabilities/currency-denomination" },
      { title: "Reusable Requests", href: "/docs/capabilities/reusable-requests" },
      { title: "Payment Rail Discovery", href: "/docs/capabilities/payment-rail-discovery" },
    ],
  },
  {
    title: "For Agents & AI",
    items: [
      { title: "Overview", href: "/docs/agents/overview" },
      { title: "llms.txt", href: "/docs/agents/llms-txt" },
    ],
  },
  {
    title: "Showcase",
    items: [
      { title: "ZBD Gamertags", href: "/docs/showcase/zbd-gamertags" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "/api/v1/directory", href: "/docs/api/directory" },
    ],
  },
];

export function getDocBySlug(slug: string[]): { title: string; section: string } | null {
  const href = "/docs/" + slug.join("/");

  for (const section of docsNav) {
    for (const item of section.items) {
      if (item.href === href) {
        return { title: item.title, section: section.title };
      }
    }
  }

  return null;
}

// Get flattened list of all doc pages in order
export function getFlatDocsList(): Array<{ title: string; href: string; section: string }> {
  const pages: Array<{ title: string; href: string; section: string }> = [];

  for (const section of docsNav) {
    for (const item of section.items) {
      pages.push({
        title: item.title,
        href: item.href,
        section: section.title,
      });
    }
  }

  return pages;
}

// Get prev/next pages for navigation
export function getPrevNextPages(currentPath: string): {
  prev: { title: string; href: string; section: string } | null;
  next: { title: string; href: string; section: string } | null;
} {
  const pages = getFlatDocsList();
  const currentIndex = pages.findIndex((page) => page.href === currentPath);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? pages[currentIndex - 1] : null,
    next: currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null,
  };
}
