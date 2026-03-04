"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { docsNav } from "@/lib/docs";

function Sidebar({
  currentPath,
  mobile = false,
  onClose,
}: {
  currentPath: string;
  mobile?: boolean;
  onClose?: () => void;
}) {
  return (
    <nav className={`space-y-6 ${mobile ? "p-4" : ""}`}>
      {docsNav.map((section) => (
        <div key={section.title}>
          <h4 className="font-semibold text-sm mb-2">{section.title}</h4>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
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
  );
}

export function DocsClientWrapper({
  children,
  currentPath,
}: {
  children: React.ReactNode;
  currentPath: string;
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Mobile nav toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-card/50 text-sm font-medium"
        >
          <Menu className="h-4 w-4" />
          <span>Documentation Menu</span>
        </button>
      </div>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mb-6 overflow-hidden"
          >
            <div className="border border-border rounded-lg bg-card/50">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-semibold text-sm">Navigation</span>
                <button
                  onClick={() => setMobileNavOpen(false)}
                  className="p-1 rounded hover:bg-muted"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <Sidebar
                currentPath={currentPath}
                mobile
                onClose={() => setMobileNavOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-24">
            <Sidebar currentPath={currentPath} />
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 max-w-3xl">{children}</main>
      </div>
    </div>
  );
}
