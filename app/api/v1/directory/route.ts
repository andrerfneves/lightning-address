import { NextRequest, NextResponse } from "next/server";
import walletsData from "@/data/wallets.json";

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

const wallets = walletsData as Wallet[];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const featureFilter = searchParams.get("feature");
  const platformFilter = searchParams.get("platform");
  const typeFilter = searchParams.get("type");

  let filteredWallets = [...wallets];

  // Filter by feature (e.g., ?feature=lud-21)
  if (featureFilter) {
    filteredWallets = filteredWallets.filter((w) =>
      w.features.includes(featureFilter)
    );
  }

  // Filter by platform (e.g., ?platform=ios)
  if (platformFilter) {
    filteredWallets = filteredWallets.filter((w) =>
      w.platforms.includes(platformFilter)
    );
  }

  // Filter by type (e.g., ?type=wallet)
  if (typeFilter) {
    filteredWallets = filteredWallets.filter((w) => w.type.includes(typeFilter));
  }

  // Set cache headers for public caching
  const response = NextResponse.json({
    count: filteredWallets.length,
    wallets: filteredWallets,
  });

  response.headers.set(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );

  return response;
}
