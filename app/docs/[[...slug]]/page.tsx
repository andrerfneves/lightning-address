import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { docsNav, getDocBySlug } from "@/lib/docs";
import { DocsClientWrapper } from "./client";

// Static MDX imports
import WhatIsLightningAddress from "@/content/docs/getting-started/what-is-lightning-address.mdx";
import HowItWorks from "@/content/docs/getting-started/how-it-works.mdx";
import GetAnAddress from "@/content/docs/setup/get-an-address.mdx";
import SelfHosted from "@/content/docs/setup/self-hosted.mdx";
import BridgeServers from "@/content/docs/setup/bridge-servers.mdx";
import Comments from "@/content/docs/capabilities/comments.mdx";
import SuccessActions from "@/content/docs/capabilities/success-actions.mdx";
import PaymentVerification from "@/content/docs/capabilities/payment-verification.mdx";
import SenderIdentity from "@/content/docs/capabilities/sender-identity.mdx";
import CurrencyDenomination from "@/content/docs/capabilities/currency-denomination.mdx";
import ReusableRequests from "@/content/docs/capabilities/reusable-requests.mdx";
import PaymentRailDiscovery from "@/content/docs/capabilities/payment-rail-discovery.mdx";
import AgentsOverview from "@/content/docs/agents/overview.mdx";
import LlmsTxt from "@/content/docs/agents/llms-txt.mdx";
import ZbdGamertags from "@/content/docs/showcase/zbd-gamertags.mdx";
import ApiDirectory from "@/content/docs/api/directory.mdx";

// Map slugs to components
const docs: Record<string, React.ComponentType> = {
  "getting-started/what-is-lightning-address": WhatIsLightningAddress,
  "getting-started/how-it-works": HowItWorks,
  "setup/get-an-address": GetAnAddress,
  "setup/self-hosted": SelfHosted,
  "setup/bridge-servers": BridgeServers,
  "capabilities/comments": Comments,
  "capabilities/success-actions": SuccessActions,
  "capabilities/payment-verification": PaymentVerification,
  "capabilities/sender-identity": SenderIdentity,
  "capabilities/currency-denomination": CurrencyDenomination,
  "capabilities/reusable-requests": ReusableRequests,
  "capabilities/payment-rail-discovery": PaymentRailDiscovery,
  "agents/overview": AgentsOverview,
  "agents/llms-txt": LlmsTxt,
  "showcase/zbd-gamertags": ZbdGamertags,
  "api/directory": ApiDirectory,
};

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  // Default to first doc if no slug
  const slugPath =
    slug && slug.length > 0
      ? slug.join("/")
      : "getting-started/what-is-lightning-address";

  const Content = docs[slugPath];
  const currentPath = `/docs/${slugPath}`;
  const docInfo = slug ? getDocBySlug(slug) : null;

  if (!Content) {
    notFound();
  }

  return (
    <DocsClientWrapper currentPath={currentPath}>
      <article className="prose prose-invert prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-a:text-yellow-400 prose-a:no-underline hover:prose-a:underline prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-yellow-400 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-strong:text-foreground max-w-none">
        {docInfo && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 not-prose">
            <span>{docInfo.section}</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{docInfo.title}</span>
          </div>
        )}
        <Content />
      </article>
    </DocsClientWrapper>
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
