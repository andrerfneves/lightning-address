"use client";

import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Marquee } from "@/components/ui/marquee";

interface Integration8Props {
  className?: string;
}

const walletLogos = [
  { image: "/images/zbd.svg", name: "ZBD" },
  { image: "/images/wos.svg", name: "Wallet of Satoshi" },
  { image: "/images/STRIKE.png", name: "Strike" },
  { image: "/images/alby.svg", name: "Alby" },
  { image: "/images/phoenix.png", name: "Phoenix" },
  { image: "/images/breez.png", name: "Breez" },
  { image: "/images/bluewallet.svg", name: "BlueWallet" },
  { image: "/images/btcpay.svg", name: "BTCPay" },
  { image: "/images/blink.png", name: "Blink" },
  { image: "/images/coincorner.svg", name: "CoinCorner" },
];

const Integration8 = ({ className }: Integration8Props) => {
  return (
    <section className={cn("py-16 sm:py-20 md:py-24", className)}>
      <div className="container">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
          Compatible with every wallet
        </h2>
        <p className="mx-auto max-w-xl text-center text-sm sm:text-base text-muted-foreground px-4 sm:px-0">
          Lightning Address works with all major Bitcoin Lightning wallets. Send
          and receive sats from any provider in the ecosystem.
        </p>

        <div className="relative mt-8 sm:mt-12">
          <Marquee pauseOnHover className="[--duration:25s]">
            {walletLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 rounded-full bg-muted px-4 py-2"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={24}
                  height={24}
                  className="size-5 sm:size-6 object-contain"
                />
                <p className="text-sm sm:text-base whitespace-nowrap">{logo.name}</p>
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:25s]">
            {walletLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 rounded-full bg-muted px-4 py-2"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={24}
                  height={24}
                  className="size-5 sm:size-6 object-contain"
                />
                <p className="text-sm sm:text-base whitespace-nowrap">{logo.name}</p>
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
};

export { Integration8 };
