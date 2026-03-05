"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import type { BundledLanguage } from "@/components/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/components/kibo-ui/code-block";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProtocolCodeExamplesProps {
  className?: string;
}

const ProtocolCodeExamples = ({ className }: ProtocolCodeExamplesProps) => {
  const [selectedApi, setSelectedApi] = useState("resolve-address");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  const currentApi = apiExamples.find((api) => api.id === selectedApi);

  return (
    <section className={cn("py-16 sm:py-20 md:py-24", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 sm:mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Simple API, infinite possibilities
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Three HTTP requests. That&apos;s all it takes to pay anyone with a Lightning Address.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* API Selection Cards */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {apiExamples.map((api) => {
                return (
                  <div
                    key={api.id}
                    className={`cursor-pointer rounded-lg p-4 transition-all ${
                      selectedApi === api.id ? "bg-muted" : "hover:bg-muted"
                    }`}
                    onClick={() => setSelectedApi(api.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg p-2">
                        <img
                          src={api.image}
                          alt={api.title}
                          className="size-6"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-medium">{api.title}</h3>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          {api.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Code Display */}
          <div className="min-w-0 lg:col-span-2">
            <div className="space-y-6">
              {/* API Info Header */}

              {/* Language Selection */}
              <Tabs
                value={selectedLanguage}
                onValueChange={setSelectedLanguage}
              >
                <div className="overflow-x-auto">
                  <TabsList className="grid w-full min-w-max grid-cols-3">
                    {currentApi?.code.map((code) => (
                      <TabsTrigger
                        key={code.language}
                        value={code.language}
                        className="flex items-center gap-2 whitespace-nowrap capitalize"
                      >
                        <img
                          src={code.icon}
                          alt={code.language}
                          className="size-4 flex-shrink-0"
                        />
                        <span className="hidden lg:inline">
                          {code.language}
                        </span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </Tabs>

              {/* Code Block */}
              <div className="w-full overflow-hidden">
                <CodeBlock
                  data={currentApi?.code || []}
                  value={selectedLanguage}
                  className="w-full"
                >
                  <CodeBlockHeader>
                    <CodeBlockFiles>
                      {(item) => (
                        <CodeBlockFilename
                          key={item.language}
                          value={item.language}
                          className="truncate"
                        >
                          {item.filename}
                        </CodeBlockFilename>
                      )}
                    </CodeBlockFiles>
                    <CodeBlockCopyButton
                      onCopy={() => console.log("Copied code to clipboard")}
                      onError={() =>
                        console.error("Failed to copy code to clipboard")
                      }
                    />
                  </CodeBlockHeader>
                  <ScrollArea className="w-full">
                    <CodeBlockBody>
                      {(item) => (
                        <CodeBlockItem
                          key={item.language}
                          value={item.language}
                          className="max-h-96 w-full overflow-x-auto"
                        >
                          <CodeBlockContent
                            language={item.language as BundledLanguage}
                          >
                            {item.code}
                          </CodeBlockContent>
                        </CodeBlockItem>
                      )}
                    </CodeBlockBody>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProtocolCodeExamples };

const apiExamples = [
  {
    id: "resolve-address",
    title: "Resolve Address",
    description: "Fetch payment options from a Lightning Address",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/symbols/globe.svg",
    code: [
      {
        language: "javascript",
        filename: "resolve.js",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/javascript-icon.svg",
        code: `// Resolve a Lightning Address to get payment options
async function resolveLightningAddress(address) {
  const [username, domain] = address.split('@');

  // Fetch the LNURL-pay endpoint
  const url = \`https://\${domain}/.well-known/lnurlp/\${username}\`;
  const response = await fetch(url);
  const data = await response.json();

  console.log('Tag:', data.tag);           // "payRequest"
  console.log('Min:', data.minSendable);   // minimum msat
  console.log('Max:', data.maxSendable);   // maximum msat
  console.log('Callback:', data.callback); // invoice URL

  return data;
}

// Example usage
const paymentInfo = await resolveLightningAddress('user@zbd.gg');`,
      },
      {
        language: "python",
        filename: "resolve.py",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/python-icon.svg",
        code: `# Resolve a Lightning Address to get payment options
import requests

def resolve_lightning_address(address: str) -> dict:
    username, domain = address.split('@')

    # Fetch the LNURL-pay endpoint
    url = f"https://{domain}/.well-known/lnurlp/{username}"
    response = requests.get(url)
    data = response.json()

    print(f"Tag: {data['tag']}")           # "payRequest"
    print(f"Min: {data['minSendable']}")   # minimum msat
    print(f"Max: {data['maxSendable']}")   # maximum msat
    print(f"Callback: {data['callback']}") # invoice URL

    return data

# Example usage
payment_info = resolve_lightning_address('user@zbd.gg')`,
      },
      {
        language: "bash",
        filename: "resolve.sh",
        icon: "https://cdn.simpleicons.org/gnubash/white",
        code: `# Resolve a Lightning Address using curl
# Replace 'user' and 'zbd.gg' with actual values

curl -s "https://zbd.gg/.well-known/lnurlp/user" | jq

# Response:
# {
#   "tag": "payRequest",
#   "callback": "https://api.zebedee.io/v0/ln-address/...",
#   "minSendable": 1000,
#   "maxSendable": 500000000000,
#   "commentAllowed": 150,
#   "metadata": "[[\\"text/plain\\",\\"user@zbd.gg\\"]]"
# }`,
      },
    ],
  },
  {
    id: "pay-options",
    title: "Get Pay Options",
    description: "Discover supported payment rails via LUD-25",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/symbols/globe.svg",
    code: [
      {
        language: "javascript",
        filename: "pay-options.js",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/javascript-icon.svg",
        code: `// Discover all payment rails supported by an address (LUD-25)
async function getPayOptions(address) {
  const [username, domain] = address.split('@');

  // Fetch payment options endpoint
  const url = \`https://\${domain}/.well-known/pay-options/\${username}\`;
  const response = await fetch(url);
  const data = await response.json();

  // Each option specifies a different payment rail
  for (const option of data.options) {
    console.log(\`Rail: \${option.tag}\`);
    console.log(\`Callback: \${option.callback}\`);
    // Options may include: BOLT11, BOLT12, onchain, Liquid, Ark, etc.
  }

  return data;
}

// Example usage
const options = await getPayOptions('user@zbd.gg');`,
      },
      {
        language: "python",
        filename: "pay_options.py",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/python-icon.svg",
        code: `# Discover all payment rails supported by an address (LUD-25)
import requests

def get_pay_options(address: str) -> dict:
    username, domain = address.split('@')

    # Fetch payment options endpoint
    url = f"https://{domain}/.well-known/pay-options/{username}"
    response = requests.get(url)
    data = response.json()

    # Each option specifies a different payment rail
    for option in data.get('options', []):
        print(f"Rail: {option['tag']}")
        print(f"Callback: {option['callback']}")
        # Options may include: BOLT11, BOLT12, onchain, Liquid, Ark, etc.

    return data

# Example usage
options = get_pay_options('user@zbd.gg')`,
      },
      {
        language: "bash",
        filename: "pay-options.sh",
        icon: "https://cdn.simpleicons.org/gnubash/white",
        code: `# Discover payment rails via LUD-25 pay-options endpoint
# This endpoint reveals all supported payment methods

curl -s "https://example.com/.well-known/pay-options/user" | jq

# Response example:
# {
#   "options": [
#     {
#       "tag": "payRequest",
#       "callback": "https://example.com/lnurlp/user"
#     },
#     {
#       "tag": "bolt12Offer",
#       "offer": "lno1qgs..."
#     },
#     {
#       "tag": "onchainAddress",
#       "address": "bc1q..."
#     }
#   ]
# }`,
      },
    ],
  },
  {
    id: "request-invoice",
    title: "Request Invoice",
    description: "Get a BOLT11 invoice to complete the payment",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/symbols/globe.svg",
    code: [
      {
        language: "javascript",
        filename: "invoice.js",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/javascript-icon.svg",
        code: `// Request an invoice from the LNURL-pay callback
async function requestInvoice(callback, amountMsat, comment = '') {
  // Build the callback URL with amount
  const url = new URL(callback);
  url.searchParams.set('amount', amountMsat.toString());

  // Optional: add a comment (LUD-12)
  if (comment) {
    url.searchParams.set('comment', comment);
  }

  const response = await fetch(url.toString());
  const data = await response.json();

  console.log('Invoice:', data.pr);         // BOLT11 invoice
  console.log('Routes:', data.routes);      // Optional routing hints
  console.log('Success:', data.successAction); // Post-payment action

  return data.pr; // Return the invoice to pay
}

// Example: Pay 1000 sats (1,000,000 msat) with a comment
const invoice = await requestInvoice(
  'https://api.zebedee.io/v0/ln-address/callback/...',
  1000000,
  'Thanks for the coffee!'
);`,
      },
      {
        language: "python",
        filename: "invoice.py",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/python-icon.svg",
        code: `# Request an invoice from the LNURL-pay callback
import requests
from urllib.parse import urlencode

def request_invoice(callback: str, amount_msat: int, comment: str = '') -> str:
    # Build the callback URL with amount
    params = {'amount': amount_msat}

    # Optional: add a comment (LUD-12)
    if comment:
        params['comment'] = comment

    url = f"{callback}?{urlencode(params)}"
    response = requests.get(url)
    data = response.json()

    print(f"Invoice: {data['pr']}")         # BOLT11 invoice
    print(f"Routes: {data.get('routes')}")  # Optional routing hints
    print(f"Success: {data.get('successAction')}")  # Post-payment action

    return data['pr']  # Return the invoice to pay

# Example: Pay 1000 sats (1,000,000 msat) with a comment
invoice = request_invoice(
    'https://api.zebedee.io/v0/ln-address/callback/...',
    1000000,
    'Thanks for the coffee!'
)`,
      },
      {
        language: "bash",
        filename: "invoice.sh",
        icon: "https://cdn.simpleicons.org/gnubash/white",
        code: `# Request an invoice from the LNURL-pay callback
# Amount is in millisatoshis (1 sat = 1000 msat)

# Get callback URL from the resolve step, then:
CALLBACK="https://api.zebedee.io/v0/ln-address/callback/..."
AMOUNT=1000000  # 1000 sats in msat
COMMENT="Thanks!"

curl -s "\${CALLBACK}?amount=\${AMOUNT}&comment=\${COMMENT}" | jq

# Response:
# {
#   "pr": "lnbc10u1p...",    <-- BOLT11 invoice to pay
#   "routes": [],
#   "successAction": {
#     "tag": "message",
#     "message": "Payment received!"
#   }
# }

# Now pay the invoice with your Lightning wallet/node`,
      },
    ],
  },
];
