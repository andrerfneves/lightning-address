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
  const address = searchParams.get("address");

  if (!address || !address.includes("@")) {
    return NextResponse.json(
      { error: "Invalid Lightning Address format" },
      { status: 400 }
    );
  }

  const [username, domain] = address.split("@");

  if (!username || !domain) {
    return NextResponse.json(
      { error: "Invalid Lightning Address format" },
      { status: 400 }
    );
  }

  const features: string[] = [];
  const detectedFeatures = new Set<string>();

  // Look up provider from wallets.json to get declared features
  const provider = wallets.find((w) => w.domain === domain);
  const declaredFeatures = provider?.features || [];

  try {
    // Fetch LNURL-pay endpoint
    const lnurlResponse = await fetch(
      `https://${domain}/.well-known/lnurlp/${username}`,
      {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(5000),
      }
    );

    if (lnurlResponse.ok) {
      const lnurlData = await lnurlResponse.json();

      // Comments (LUD-12) - detectable
      if (
        lnurlData.commentAllowed &&
        typeof lnurlData.commentAllowed === "number" &&
        lnurlData.commentAllowed > 0
      ) {
        detectedFeatures.add("lud-12");
      }

      // Sender Identity (LUD-18) - detectable via payerData
      if (lnurlData.payerData && Object.keys(lnurlData.payerData).length > 0) {
        detectedFeatures.add("lud-18");
      }

      // Currency Denomination (LUD-22) - detectable
      if (lnurlData.currencies && Array.isArray(lnurlData.currencies)) {
        detectedFeatures.add("lud-22");
      }
    }
  } catch {
    // LNURL fetch failed, continue with declared features only
  }

  try {
    // Fetch pay-options endpoint for LUD-25
    const payOptionsResponse = await fetch(
      `https://${domain}/.well-known/pay-options/${username}`,
      {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(5000),
      }
    );

    if (payOptionsResponse.ok) {
      detectedFeatures.add("lud-25");
    }
  } catch {
    // pay-options fetch failed, will use declared features
  }

  // For features that can't be detected from initial call, use declared features
  // LUD-09 (Success Actions), LUD-11 (Reusable Requests), LUD-21 (Payment Verification)
  const inferredFromDeclared = ["lud-09", "lud-11", "lud-21"];
  for (const feature of inferredFromDeclared) {
    if (declaredFeatures.includes(feature)) {
      detectedFeatures.add(feature);
    }
  }

  // Also add detected features that match declared (like lud-12, lud-18, lud-22, lud-25)
  // These take precedence since they were actually detected
  for (const feature of detectedFeatures) {
    if (!features.includes(feature)) {
      features.push(feature);
    }
  }

  // Sort features by LUD number
  features.sort((a, b) => {
    const numA = parseInt(a.replace("lud-", ""));
    const numB = parseInt(b.replace("lud-", ""));
    return numA - numB;
  });

  return NextResponse.json({
    address,
    domain,
    provider: provider?.name || null,
    features,
  });
}
