import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { docsNav, getDocBySlug } from "@/lib/docs";

// Import all MDX content
const docs: Record<string, React.ComponentType> = {
  "getting-started/what-is-lightning-address": require("@/content/docs/getting-started/what-is-lightning-address.mdx")
    .default,
  "getting-started/how-it-works": require("@/content/docs/getting-started/how-it-works.mdx")
    .default,
  "setup/get-an-address": require("@/content/docs/setup/get-an-address.mdx")
    .default,
  "setup/self-hosted": require("@/content/docs/setup/self-hosted.mdx").default,
  "setup/bridge-servers": require("@/content/docs/setup/bridge-servers.mdx")
    .default,
  "capabilities/comments": require("@/content/docs/capabilities/comments.mdx")
    .default,
  "capabilities/success-actions": require("@/content/docs/capabilities/success-actions.mdx")
    .default,
  "capabilities/payment-verification": require("@/content/docs/capabilities/payment-verification.mdx")
    .default,
  "capabilities/sender-identity": require("@/content/docs/capabilities/sender-identity.mdx")
    .default,
  "capabilities/currency-denomination": require("@/content/docs/capabilities/currency-denomination.mdx")
    .default,
  "capabilities/reusable-requests": require("@/content/docs/capabilities/reusable-requests.mdx")
    .default,
  "capabilities/payment-rail-discovery": require("@/content/docs/capabilities/payment-rail-discovery.mdx")
    .default,
  "agents/overview": require("@/content/docs/agents/overview.mdx").default,
  "agents/llms-txt": require("@/content/docs/agents/llms-txt.mdx").default,
  "showcase/zbd-gamertags": require("@/content/docs/showcase/zbd-gamertags.mdx")
    .default,
  "api/directory": require("@/content/docs/api/directory.mdx").default,
};

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  // Default to first doc
  if (!slug || slug.length === 0) {
    const Content = docs["getting-started/what-is-lightning-address"];
    return (
      <DocsLayout currentPath="/docs/getting-started/what-is-lightning-address">
        <article className="prose prose-invert max-w-none">
          <Content />
        </article>
      </DocsLayout>
    );
  }

  const slugPath = slug.join("/");
  const Content = docs[slugPath];

  if (!Content) {
    notFound();
  }

  const docInfo = getDocBySlug(slug);

  return (
    <DocsLayout currentPath={"/docs/" + slugPath}>
      <article className="prose prose-invert max-w-none">
        {docInfo && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 not-prose">
            <span>{docInfo.section}</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{docInfo.title}</span>
          </div>
        )}
        <Content />
      </article>
    </DocsLayout>
  );
}

function DocsLayout({
  children,
  currentPath,
}: {
  children: React.ReactNode;
  currentPath: string;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 shrink-0">
          <nav className="sticky top-24 space-y-6">
            {docsNav.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-sm mb-2">{section.title}</h4>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block text-sm py-1.5 px-3 rounded-md transition-colors ${
                          currentPath === item.href
                            ? "bg-yellow-400/10 text-yellow-400"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 max-w-3xl">{children}</main>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const paths: { slug: string[] }[] = [];

  for (const section of docsNav) {
    for (const item of section.items) {
      const slug = item.href.replace("/docs/", "").split("/");
      paths.push({ slug });
    }
  }

  return paths;
}
