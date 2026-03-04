import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Lightning Address</span>
            </Link>
            <div className="flex items-center gap-6">
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
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-border/40 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
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
          </div>
        </footer>
      </body>
    </html>
  );
}
