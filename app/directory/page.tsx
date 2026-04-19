"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, ExternalLink, Zap, Send, Download, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import walletsData from "@/data/wallets.json";
import featuredData from "@/data/featured.json";

type Wallet = {
  id: string;
  name: string;
  url: string;
  logo: string | null;
  domain: string;
  type: string[];
  platforms: string[];
  send: boolean;
  receive: boolean;
  features: string[];
};

const featureMap: Record<string, string> = {
  "lud-09": "Success Actions",
  "lud-11": "Reusable Requests",
  "lud-12": "Comments",
  "lud-18": "Sender Identity",
  "lud-21": "Payment Verification",
  "lud-22": "Currency Denomination",
  "lud-25": "Payment Rail Discovery",
};

const platformLabels: Record<string, string> = {
  ios: "iOS",
  android: "Android",
  web: "Web",
  desktop: "Desktop",
  api: "API",
};

const typeLabels: Record<string, string> = {
  wallet: "Wallet",
  service: "Service",
  exchange: "Exchange",
  "developer-tool": "Developer Tool",
};

const allTypes = ["wallet", "service", "exchange", "developer-tool"];
const allPlatforms = ["ios", "android", "web", "desktop", "api"];
const allFeatures = [
  "lud-09",
  "lud-11",
  "lud-12",
  "lud-18",
  "lud-21",
  "lud-22",
  "lud-25",
];

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [filtersExpanded, setFiltersExpanded] = useState(false);

  const wallets = walletsData as Wallet[];
  const featuredIds = featuredData.map((f) => f.id);

  const toggleFilter = (
    value: string,
    selected: string[],
    setSelected: (v: string[]) => void
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const activeFilterCount = selectedTypes.length + selectedPlatforms.length + selectedFeatures.length;

  const filteredWallets = useMemo(() => {
    return wallets.filter((wallet) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !wallet.name.toLowerCase().includes(query) &&
          !wallet.domain.toLowerCase().includes(query)
        ) {
          return false;
        }
      }

      // Type filter
      if (
        selectedTypes.length > 0 &&
        !selectedTypes.some((t) => wallet.type.includes(t))
      ) {
        return false;
      }

      // Platform filter
      if (
        selectedPlatforms.length > 0 &&
        !selectedPlatforms.some((p) => wallet.platforms.includes(p))
      ) {
        return false;
      }

      // Feature filter
      if (
        selectedFeatures.length > 0 &&
        !selectedFeatures.some((f) => wallet.features.includes(f))
      ) {
        return false;
      }

      return true;
    });
  }, [wallets, searchQuery, selectedTypes, selectedPlatforms, selectedFeatures]);

  const featuredWallets = filteredWallets.filter((w) =>
    featuredIds.includes(w.id)
  );
  const otherWallets = filteredWallets.filter(
    (w) => !featuredIds.includes(w.id)
  );

  const WalletCard = ({
    wallet,
    featured = false,
  }: {
    wallet: Wallet;
    featured?: boolean;
  }) => (
    <Card
      className={`p-4 sm:p-5 bg-card/50 border-border/50 hover:border-yellow-400/50 transition-colors ${featured ? "ring-1 ring-yellow-400/30" : ""}`}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
          {wallet.logo ? (
            <Image
              src={`/images/${wallet.logo}`}
              alt={wallet.name}
              width={32}
              height={32}
              className="object-contain w-6 h-6 sm:w-8 sm:h-8"
            />
          ) : (
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold truncate text-sm sm:text-base">{wallet.name}</h3>
            {featured && (
              <Badge variant="outline" className="text-yellow-400 border-yellow-400/50 text-xs">
                Featured
              </Badge>
            )}
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground font-mono truncate">
            @{wallet.domain}
          </p>
        </div>
        <a
          href={wallet.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-muted-foreground hover:text-foreground p-1"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
        {wallet.send && (
          <Badge variant="secondary" className="text-xs">
            <Send className="mr-1 h-3 w-3" />
            Send
          </Badge>
        )}
        {wallet.receive && (
          <Badge variant="secondary" className="text-xs">
            <Download className="mr-1 h-3 w-3" />
            Receive
          </Badge>
        )}
        {wallet.platforms.map((platform) => (
          <Badge key={platform} variant="outline" className="text-xs">
            {platformLabels[platform] || platform}
          </Badge>
        ))}
      </div>

      {wallet.features.filter((f) => f !== "lud-12").length > 0 && (
        <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-1.5">
          <TooltipProvider>
            {wallet.features
              .filter((f) => f !== "lud-12")
              .map((feature) => (
                <Tooltip key={feature}>
                  <TooltipTrigger>
                    <Badge
                      variant="outline"
                      className="text-xs bg-yellow-400/10 border-yellow-400/30 text-yellow-400"
                    >
                      {featureMap[feature] || feature}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{feature.toUpperCase()}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
          </TooltipProvider>
        </div>
      )}
    </Card>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-2xl mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
          Wallet & Service Directory
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Discover wallets and services that support Lightning Address. Filter
          by type, platform, or capabilities.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 sm:mb-8 space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search wallets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Mobile filter toggle */}
        <button
          onClick={() => setFiltersExpanded(!filtersExpanded)}
          className="flex items-center gap-2 text-sm font-medium md:hidden"
        >
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {activeFilterCount}
            </Badge>
          )}
          {filtersExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {/* Filters - collapsible on mobile */}
        <div className={`${filtersExpanded ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
            {/* Type filters */}
            <div>
              <p className="text-xs text-muted-foreground mb-2">Type</p>
              <div className="flex flex-wrap gap-1.5">
                {allTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() =>
                      toggleFilter(type, selectedTypes, setSelectedTypes)
                    }
                    className={`px-2.5 py-1 text-xs rounded-md border transition-colors ${
                      selectedTypes.includes(type)
                        ? "bg-yellow-400 text-black border-yellow-400"
                        : "border-border hover:border-yellow-400/50"
                    }`}
                  >
                    {typeLabels[type]}
                  </button>
                ))}
              </div>
            </div>

            {/* Platform filters */}
            <div>
              <p className="text-xs text-muted-foreground mb-2">Platform</p>
              <div className="flex flex-wrap gap-1.5">
                {allPlatforms.map((platform) => (
                  <button
                    key={platform}
                    onClick={() =>
                      toggleFilter(
                        platform,
                        selectedPlatforms,
                        setSelectedPlatforms
                      )
                    }
                    className={`px-2.5 py-1 text-xs rounded-md border transition-colors ${
                      selectedPlatforms.includes(platform)
                        ? "bg-yellow-400 text-black border-yellow-400"
                        : "border-border hover:border-yellow-400/50"
                    }`}
                  >
                    {platformLabels[platform]}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature filters */}
            <div>
              <p className="text-xs text-muted-foreground mb-2">Features</p>
              <div className="flex flex-wrap gap-1.5">
                {allFeatures.map((feature) => (
                  <button
                    key={feature}
                    onClick={() =>
                      toggleFilter(feature, selectedFeatures, setSelectedFeatures)
                    }
                    className={`px-2.5 py-1 text-xs rounded-md border transition-colors ${
                      selectedFeatures.includes(feature)
                        ? "bg-yellow-400 text-black border-yellow-400"
                        : "border-border hover:border-yellow-400/50"
                    }`}
                  >
                    {featureMap[feature]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      {featuredWallets.length > 0 && (
        <div className="mb-8 sm:mb-12">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
            Featured
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {featuredWallets.map((wallet) => (
              <WalletCard key={wallet.id} wallet={wallet} featured />
            ))}
          </div>
        </div>
      )}

      {/* All Wallets */}
      <div>
        <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
          All Providers ({otherWallets.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {otherWallets.map((wallet) => (
            <WalletCard key={wallet.id} wallet={wallet} />
          ))}
        </div>

        {filteredWallets.length === 0 && (
          <div className="text-center py-8 sm:py-12 text-muted-foreground text-sm sm:text-base">
            No wallets found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
