"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { docsNav } from "@/lib/docs";

type NavLink = {
  href: string;
  label: string;
};

export function MobileNav({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 overflow-y-auto">
          <SheetHeader className="text-left">
            <SheetTitle>Lightning Address</SheetTitle>
          </SheetHeader>

          <nav className="mt-6 space-y-6">
            {/* Top nav links */}
            <div className="space-y-1">
              {links
                .filter((link) => link.href !== "/docs")
                .map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-2 px-3 text-base font-medium rounded-md transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Documentation section */}
            <div>
              <h3 className="px-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Documentation
              </h3>
              <div className="space-y-4">
                {docsNav.map((section) => (
                  <div key={section.title}>
                    <h4 className="px-3 text-sm font-semibold mb-1">
                      {section.title}
                    </h4>
                    <ul className="space-y-0.5">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className={`block py-1.5 px-3 text-sm rounded-md transition-colors ${
                                pathname === item.href
                                  ? "bg-primary/10 text-primary"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                              }`}
                            >
                              {item.title}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Footer - GitHub link */}
            <div>
              <SheetClose asChild>
                <a
                  href="https://github.com/andrerfneves/lightning-address"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 px-3 text-base font-medium rounded-md transition-colors hover:bg-muted"
                >
                  GitHub
                </a>
              </SheetClose>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
