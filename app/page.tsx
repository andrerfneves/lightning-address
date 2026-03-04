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
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              The identity layer for{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Bitcoin payments
              </span>
            </h1>
            <p className="mb-8 sm:mb-12 text-base sm:text-lg md:text-xl text-muted-foreground px-4 sm:px-0">
              Send and receive Bitcoin like you do emails — to any wallet, over
              any rail. Made for humans and agents alike. ⚡
            </p>

            {/* Animated Address Showcase */}
            <div className="mx-auto max-w-sm sm:max-w-md px-4 sm:px-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWallet.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden border-border/50 bg-card/50 p-4 sm:p-6 backdrop-blur">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-muted shrink-0">
                        {currentWallet.logo ? (
                          <Image
                            src={currentWallet.logo}
                            alt={currentWallet.name}
                            width={40}
                            height={40}
                            className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                          />
                        ) : (
                          <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                        )}
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {currentWallet.name}
                        </p>
                        <p className="text-sm sm:text-lg font-mono truncate">
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
      <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
              Built for the modern payments era
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground px-4 sm:px-0">
              Lightning Address extends LNURL-pay with powerful capabilities for
              commerce, verification, and multi-rail payments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              const isLarge = cap.size === "large";

              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${isLarge ? "sm:col-span-2 lg:col-span-2 lg:row-span-1" : ""}`}
                >
                  <Card className="h-full p-4 sm:p-6 bg-card/50 border-border/50 hover:border-yellow-400/50 transition-colors">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold mb-1 text-sm sm:text-base">{cap.name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
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
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
              What&apos;s in your Lightning Address?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Enter any Lightning Address to discover its capabilities.
            </p>
          </div>

          <div className="mx-auto max-w-lg px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row gap-2 mb-6 sm:mb-8">
              <Input
                type="text"
                placeholder="user@example.com"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleResolve()}
                className="font-mono flex-1"
              />
              <Button
                onClick={handleResolve}
                disabled={isResolving || !address}
                className="bg-yellow-400 text-black hover:bg-yellow-500 w-full sm:w-auto"
              >
                {isResolving ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <Search className="h-4 w-4 sm:mr-0" />
                    <span className="sm:hidden ml-2">Resolve</span>
                  </>
                )}
              </Button>
            </div>

            {hasResolved && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2 sm:space-y-3"
              >
                {resolvedFeatures.length > 0 ? (
                  resolvedFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="text-sm sm:text-base">{featureMap[feature] || feature}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground text-sm sm:text-base">
                    No additional capabilities detected.
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* For Agents & AI */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
                The payment layer for the agentic web
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                Lightning Address is the simplest way for AI agents to send and
                receive Bitcoin — static, human-readable, and fully programmable.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Card className="p-4 sm:p-6 bg-card/50 border-border/50">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 shrink-0" />
                  <h3 className="font-semibold text-sm sm:text-base">Machine-Addressable</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  One HTTP call to pay anyone or any agent. No complex setup,
                  no invoice exchange — just a simple address.
                </p>
              </Card>

              <Card className="p-4 sm:p-6 bg-card/50 border-border/50">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 shrink-0" />
                  <h3 className="font-semibold text-sm sm:text-base">Transaction Context</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Comments enable agents to include intent and context with
                  every payment for better coordination.
                </p>
              </Card>

              <Card className="p-4 sm:p-6 bg-card/50 border-border/50">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 shrink-0" />
                  <h3 className="font-semibold text-sm sm:text-base">Agent Attribution</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Sender Identity (LUD-18) allows agents to identify themselves
                  for accountability and trust.
                </p>
              </Card>

              <Card className="p-4 sm:p-6 bg-card/50 border-border/50">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 shrink-0" />
                  <h3 className="font-semibold text-sm sm:text-base">Settlement Proof</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Payment Verification (LUD-21) provides cryptographic proof of
                  payment for autonomous verification.
                </p>
              </Card>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <Card className="inline-flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card/50 border-border/50">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 shrink-0" />
                <span className="text-xs sm:text-sm">
                  <code className="font-mono text-yellow-400">/llms.txt</code>{" "}
                  available for LLMs to consume the protocol directly
                </span>
              </Card>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <Link href="/docs/agents" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </Link>
              <Link href="/directory" className="w-full sm:w-auto">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 w-full sm:w-auto">
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
