import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface NavItem {
  name: string;
  href: string;
}

interface SocialItem {
  name: string;
  href: string;
}

interface SiteFooterProps {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  navigation?: NavItem[];
  social?: SocialItem[];
  legal?: NavItem[];
  brandName?: string;
  className?: string;
}

const SiteFooter = ({
  heading = "Start your free trial today",
  description = "The fit-for-purpose tool for planning and building modern software products.",
  ctaText = "Get started",
  ctaHref = "#",
  navigation = [
    { name: "Product", href: "#" },
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
  social = [
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
  ],
  legal = [{ name: "Privacy Policy", href: "/privacy" }],
  brandName = "mainline",
  className,
}: SiteFooterProps) => {
  return (
    <footer
      className={cn("flex flex-col items-center gap-14 pt-28 lg:pt-32", className)}
    >
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          {description}
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href={ctaHref}>{ctaText}</a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground text-sm mt-2">
          Supported by{" "}
          <a
            href="https://zbd.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:underline"
          >
            ZBD
          </a>
        </p>
      </nav>

      <div className="mt-10 w-full overflow-hidden md:mt-14 lg:mt-20">
        <p
          className="select-none text-center font-sans font-bold uppercase leading-none tracking-tighter text-primary opacity-20"
          style={{ fontSize: 'clamp(4rem, 18vw, 18rem)' }}
          aria-label="bitcoin"
        >
          bitcoin
        </p>
      </div>
    </footer>
  );
};

export { SiteFooter };
