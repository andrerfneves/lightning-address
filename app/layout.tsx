import type { Metadata } from "next";
import Link from "next/link";
import { Chakra_Petch, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { MobileNav } from "@/components/mobile-nav";
import { Footer50 } from "@/components/footer50";

const fontSans = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Lightning Address - The identity layer for Bitcoin payments",
  description:
    "Send and receive Bitcoin like you do emails — to any wallet, over any rail. Made for humans and agents alike.",
  openGraph: {
    title: "Lightning Address",
    description:
      "Send and receive Bitcoin like you do emails — to any wallet, over any rail.",
    url: "https://lightningaddress.com",
    siteName: "Lightning Address",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lightning Address",
    description:
      "Send and receive Bitcoin like you do emails — to any wallet, over any rail.",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/directory", label: "Directory" },
  { href: "/docs", label: "Docs" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} min-h-screen bg-background text-foreground antialiased font-sans`}>
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Lightning Address</span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/directory"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Directory
              </Link>
              <Link
                href="/docs"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Docs
              </Link>
              <a
                href="https://github.com/andrerfneves/lightning-address"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            </div>

            {/* Mobile navigation */}
            <MobileNav links={navLinks} />
          </nav>
        </header>
        <main>{children}</main>
        <Footer50
          heading="The open standard for Bitcoin payments"
          description="Lightning Address is a free, open protocol. Anyone can implement it."
          ctaText="Read the spec"
          ctaHref="/docs"
          navigation={[
            { name: "Directory", href: "/directory" },
            { name: "Docs", href: "/docs" },
            { name: "GitHub", href: "https://github.com/andrerfneves/lightning-address" },
            { name: "LUD-25 Draft", href: "/docs" },
          ]}
          social={[
            { name: "GitHub", href: "https://github.com/andrerfneves/lightning-address" },
            { name: "Twitter", href: "https://twitter.com/andreneves" },
          ]}
          legal={[
            { name: "MIT License", href: "https://github.com/andrerfneves/lightning-address/blob/main/LICENSE.md" },
          ]}
          brandName="Lightning Address"
        />
      </body>
    </html>
  );
}
