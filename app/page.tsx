"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  Sparkles,
  ShieldCheck,
  User,
  DollarSign,
  RefreshCw,
  Route,
  CheckCircle2,
  Search,
  Bot,
  Zap,
  FileText,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const heroWallets = [
  { id: "cashapp", name: "Cash App", domain: "cash.app", logo: null },
  { id: "zbd", name: "ZBD", domain: "zbd.gg", logo: "/images/zbd.svg" },
  {
    id: "walletofsatoshi",
    name: "Wallet of Satoshi",
    domain: "walletofsatoshi.com",
    logo: "/images/wos.svg",
  },
  {
    id: "strike",
    name: "Strike",
    domain: "strike.me",
    logo: "/images/STRIKE.png",
  },
  { id: "alby", name: "Alby", domain: "getalby.com", logo: "/images/alby.svg" },
];

const capabilities = [
  {
    id: "lud-12",
    name: "Comments",
    description: "Attach a message to a payment",
    icon: MessageSquare,
    size: "large",
  },
  {
    id: "lud-09",
    name: "Success Actions",
    description: "Trigger content, messages, or URLs after payment",
    icon: Sparkles,
    size: "large",
  },
  {
    id: "lud-21",
    name: "Payment Verification",
    description: "Cryptographic proof of settlement, non-custodial",
    icon: ShieldCheck,
    size: "medium",
  },
  {
    id: "lud-18",
    name: "Sender Identity",
    description: "Self-declared payer info (name, email, Lightning Address)",
    icon: User,
    size: "medium",
  },
  {
    id: "lud-22",
    name: "Currency Denomination",
    description: "Express payment amounts in any unit of account",
    icon: DollarSign,
    size: "small",
  },
  {
    id: "lud-11",
    name: "Reusable Requests",
    description: "Persistent vs disposable payment links",
    icon: RefreshCw,
    size: "small",
  },
  {
    id: "lud-25",
    name: "Payment Rail Discovery",
    description: "Multi-protocol destinations: BOLT12, Ark, Spark, Liquid, onchain BTC",
    icon: Route,
    size: "medium",
  },
];

const featureMap: Record<string, string> = {
  "lud-09": "Success Actions",
  "lud-11": "Reusable Requests",
  "lud-12": "Comments",
  "lud-18": "Sender Identity",
  "lud-21": "Payment Verification",
  "lud-22": "Currency Denomination",
  "lud-25": "Payment Rail Discovery",
};

export default function HomePage() {
  const [currentWalletIndex, setCurrentWalletIndex] = useState(0);
  const [address, setAddress] = useState("");
  const [resolvedFeatures, setResolvedFeatures] = useState<string[]>([]);
  const [isResolving, setIsResolving] = useState(false);
  const [hasResolved, setHasResolved] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWalletIndex((prev) => (prev + 1) % heroWallets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleResolve = async () => {
    if (!address || !address.includes("@")) return;

    setIsResolving(true);
    setHasResolved(false);

    try {
      const res = await fetch(
        `/api/resolve?address=${encodeURIComponent(address)}`
      );
      const data = await res.json();
      setResolvedFeatures(data.features || []);
      setHasResolved(true);
    } catch {
      setResolvedFeatures([]);
      setHasResolved(true);
    } finally {
      setIsResolving(false);
    }
  };

  const currentWallet = heroWallets[currentWalletIndex];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              The identity layer for{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Bitcoin payments
              </span>
            </h1>
            <p className="mb-12 text-lg text-muted-foreground md:text-xl">
              Send and receive Bitcoin like you do emails — to any wallet, over
              any rail. Made for humans and agents alike. ⚡
            </p>

            {/* Animated Address Showcase */}
            <div className="mx-auto max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWallet.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden border-border/50 bg-card/50 p-6 backdrop-blur">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted">
                        {currentWallet.logo ? (
                          <Image
                            src={currentWallet.logo}
                            alt={currentWallet.name}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        ) : (
                          <Zap className="h-6 w-6 text-yellow-400" />
                        )}
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">
                          {currentWallet.name}
                        </p>
                        <p className="text-lg font-mono">
                          user@
                          <span className="text-yellow-400">
                            {currentWallet.domain}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Bento Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Built for the modern payments era
            </h2>
            <p className="text-muted-foreground">
              Lightning Address extends LNURL-pay with powerful capabilities for
              commerce, verification, and multi-rail payments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              const isLarge = cap.size === "large";
              const isMedium = cap.size === "medium";

              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${isLarge ? "md:col-span-2 md:row-span-1" : ""} ${isMedium ? "md:col-span-1" : ""}`}
                >
                  <Card className="h-full p-6 bg-card/50 border-border/50 hover:border-yellow-400/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10">
                        <Icon className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{cap.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Resolver */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              What&apos;s in your Lightning Address?
            </h2>
            <p className="text-muted-foreground">
              Enter any Lightning Address to discover its capabilities.
            </p>
          </div>

          <div className="mx-auto max-w-lg">
            <div className="flex gap-2 mb-8">
              <Input
                type="text"
                placeholder="user@example.com"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleResolve()}
                className="font-mono"
              />
              <Button
                onClick={handleResolve}
                disabled={isResolving || !address}
                className="bg-yellow-400 text-black hover:bg-yellow-500"
              >
                {isResolving ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
              </Button>
            </div>

            {hasResolved && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                {resolvedFeatures.length > 0 ? (
                  resolvedFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>{featureMap[feature] || feature}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground">
                    No additional capabilities detected.
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* For Agents & AI */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                The payment layer for the agentic web
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Lightning Address is the simplest way for AI agents to send and
                receive Bitcoin — static, human-readable, and fully programmable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/50 border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="h-6 w-6 text-yellow-400" />
                  <h3 className="font-semibold">Machine-Addressable</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  One HTTP call to pay anyone or any agent. No complex setup,
                  no invoice exchange — just a simple address.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="h-6 w-6 text-yellow-400" />
                  <h3 className="font-semibold">Transaction Context</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comments enable agents to include intent and context with
                  every payment for better coordination.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <User className="h-6 w-6 text-yellow-400" />
                  <h3 className="font-semibold">Agent Attribution</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sender Identity (LUD-18) allows agents to identify themselves
                  for accountability and trust.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="h-6 w-6 text-yellow-400" />
                  <h3 className="font-semibold">Settlement Proof</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Payment Verification (LUD-21) provides cryptographic proof of
                  payment for autonomous verification.
                </p>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="inline-flex items-center gap-3 p-4 bg-card/50 border-border/50">
                <FileText className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">
                  <code className="font-mono text-yellow-400">/llms.txt</code>{" "}
                  available for LLMs to consume the protocol directly
                </span>
              </Card>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <Link href="/docs/agents">
                <Button variant="outline">Learn More</Button>
              </Link>
              <Link href="/directory">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                  <Send className="mr-2 h-4 w-4" />
                  Explore Providers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
