"use client";

import Link from "next/link";
import { docsNav } from "@/lib/docs";

function Sidebar({ currentPath }: { currentPath: string }) {
  return (
    <nav className="space-y-6">
      {docsNav.map((section) => (
        <div key={section.title}>
          <h4 className="font-semibold text-sm mb-2">{section.title}</h4>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block text-sm py-1.5 px-3 rounded-md transition-colors ${
                    currentPath === item.href
                      ? "bg-primary/10 text-primary"
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
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
