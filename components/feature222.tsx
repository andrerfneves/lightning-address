"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type stat = {
  number: string;
  text: string;
};

interface CardData {
  title: string;
  link: string;
  gradient: string;
  stats: Array<stat>;
}

const LIST: Array<CardData> = [
  {
    title: "ZBD — Gaming & Esports Payments",
    link: "/docs/showcase/zbd-gamertags",
    gradient: "bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900",
    stats: [
      {
        number: "1M+",
        text: "gamers",
      },
      {
        number: "instant",
        text: "payouts",
      },
    ],
  },
  {
    title: "Strike — Global Remittances",
    link: "/docs",
    gradient: "bg-gradient-to-br from-zinc-900 via-zinc-850 to-zinc-800",
    stats: [
      {
        number: "150+",
        text: "countries",
      },
      {
        number: "reached",
        text: "instantly",
      },
    ],
  },
  {
    title: "PACT — Non-Custodial Commerce",
    link: "/docs/capabilities/payment-verification",
    gradient: "bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800",
    stats: [
      {
        number: "100%",
        text: "cryptographic verification",
      },
    ],
  },
];

const Card = ({ link, gradient, title, stats }: CardData) => {
  return (
    <Link
      href={link}
      className={cn(
        "relative min-h-auto w-full overflow-hidden rounded-[.5rem] p-5 transition-all duration-300 hover:ring-2 hover:ring-yellow-400/50 sm:aspect-square md:aspect-auto md:min-h-[20rem] md:max-w-[30rem]",
        gradient
      )}
    >
      <div className="relative z-20 flex size-full flex-col justify-between gap-12 md:gap-10">
        <div className="text-xl leading-[1.2] font-semibold text-white md:text-2xl">
          {title}
        </div>
        <div className="flex w-full flex-col gap-6">
          <div className="flex gap-6 text-white">
            {stats.map((item, i) => (
              <div key={`${title}-${i}`} className="flex flex-col gap-1">
                <div className="text-lg font-bold text-yellow-400 md:text-xl">{item.number}</div>
                <div className="text-sm opacity-80">{item.text}</div>
              </div>
            ))}
          </div>
          <Button variant="outline" size="sm" className="w-fit border-white/20 hover:border-yellow-400/50">
            Learn More
            <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

interface Feature222Props {
  className?: string;
  title?: string;
}

const Feature222 = ({ className, title = "Lightning Address in the wild" }: Feature222Props) => {
  return (
    <section className={cn("py-16 sm:py-20 md:py-24", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Real-world implementations powering payments across the globe.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {LIST.map((item, i) => (
            <Card key={`feature-222-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature222 };
