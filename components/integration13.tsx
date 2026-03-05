"use client";

import { motion } from "framer-motion";
import {
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";

const walletIntegrations = [
  { title: "ZBD", src: "/images/zbd.svg" },
  { title: "Wallet of Satoshi", src: "/images/wos.svg" },
  { title: "Strike", src: "/images/STRIKE.png" },
  { title: "Alby", src: "/images/alby.svg" },
  { title: "Phoenix", src: "/images/phoenix.png" },
  { title: "Breez", src: "/images/breez.png" },
  { title: "BlueWallet", src: "/images/bluewallet.svg" },
  { title: "BTCPay", src: "/images/btcpay.svg" },
  { title: "Blink", src: "/images/blink.png" },
  { title: "CoinCorner", src: "/images/coincorner.svg" },
];

const Integration13 = () => {
  return (
    <section className="overflow-hidden py-16 sm:py-20 md:py-24 bg-muted/30">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <p className="mb-3 sm:mb-4 rounded-full bg-yellow-400/10 text-yellow-400 px-3 py-1 text-xs uppercase tracking-wider">
          Ecosystem
        </p>
        <h2 className="relative py-2 text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Supported by the ecosystem
        </h2>
        <p className="mx-auto mt-3 sm:mt-5 max-w-xl px-4 sm:px-5 text-center text-sm sm:text-base text-muted-foreground">
          Lightning Address is an open protocol supported by wallets, exchanges,
          and services across the Bitcoin ecosystem.
        </p>

        <div className="relative container my-10 sm:my-16 md:my-20 w-fit rounded-2xl sm:rounded-4xl bg-muted/50 border border-border/50">
          <DockIntegrations
            integrations={walletIntegrations}
            className="hidden md:flex"
          />
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-4 sm:py-6 md:hidden">
            {walletIntegrations.map((integration) => (
              <div
                key={integration.title}
                className="flex items-center justify-center transition-transform hover:scale-105"
              >
                <div className="relative h-12 w-12 sm:h-16 sm:w-16 rounded-xl overflow-hidden bg-background/50 p-2">
                  <Image
                    src={integration.src}
                    alt={integration.title}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DockIntegrations = ({
  integrations,
  className,
}: {
  integrations: {
    title: string;
    src: string;
  }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <div
      className={cn("flex items-end gap-2 px-6 py-6", className)}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {integrations.map((integration) => (
        <DockIcon
          key={integration.title}
          integration={integration}
          mouseX={mouseX}
        />
      ))}
    </div>
  );
};

const DockIcon = ({
  integration,
  mouseX,
}: {
  integration: { title: string; src: string };
  mouseX: MotionValue<number>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const width = useSpring(
    useTransform(distance, [-100, 0, 100], [64, 85, 64]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    },
  );
  const height = useSpring(
    useTransform(distance, [-100, 0, 100], [64, 94, 64]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    },
  );

  const y = useSpring(useTransform(distance, [-150, 0, 150], [0, -12, 0]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <div
      ref={ref}
      className="relative flex h-16 w-16 flex-col items-center justify-end"
    >
      <motion.div
        style={{ width, height, y, transformOrigin: "bottom center" }}
        className="absolute bottom-0 flex items-center justify-center rounded-xl bg-background/50 p-2 border border-border/30"
      >
        <Image
          src={integration.src}
          alt={integration.title}
          fill
          className="object-contain p-2"
        />
      </motion.div>
    </div>
  );
};

export { Integration13 };
