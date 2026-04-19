# PRD: lightningaddress.com Refresh

**Owner:** Andre Neves  
**Status:** Draft  
**Last Updated:** 2026-03-04

---

## Overview

A full refresh of lightningaddress.com — the canonical home of the Lightning Address protocol (LUD-16). Goals:

1. Modernize the tech stack (Next.js 16, shadcn/ui, Framer Motion, Tailwind, MDX)
2. Expand scope from "a protocol page" to "the home of the LNURL-pay ecosystem"
3. Connect ZBD as the creator/steward of the standard
4. Position Lightning Address as the payment layer for the agentic web
5. Replace the README wallet table with a queryable, structured directory

---

## Background

Andre Neves created the Lightning Address protocol (LUD-16) and owns lightningaddress.com. The current site is minimal — it explains the basic protocol, lists providers in a markdown table, and links to GitHub. It doesn't reflect the breadth of the LNURL-pay ecosystem, the ZBD origin story, or the emerging AI/agent use case.

---

## Goals

- Make lightningaddress.com the definitive resource for the full LNURL-pay ecosystem
- Surface ZBD's role without making the standard feel proprietary
- Attract developers, PMs, wallet teams, and AI/agent builders
- Drive protocol adoption by making capabilities discoverable
- Provide a queryable API for the wallet/service directory

---

## Non-Goals

- LNURL-auth, LNURL-channel, LNURL-withdraw (out of scope)
- FX / cross-currency conversion (handled at the edges, not the protocol)
- Custodial services or wallet infrastructure
- Adoption metrics or wallet count statistics (public spec — not trackable)

---

## Site Structure

Three pages total:

1. **Homepage** — marketing landing page
2. **Directory** — full wallet/service browser
3. **Docs** — documentation with sidebar (MDX, images, React components)

---

## Page 1: Homepage

Marketing landing page. Four sections:

### Section 1: Hero
- Headline: "The identity layer for Bitcoin payments"
- Subheadline: "Send and receive Bitcoin like you do emails — to any wallet, over any rail. Made for humans and agents alike. ⚡"
- **Animated address showcase** (Framer Motion fade in/out — not a ticker):
  - Each card shows: provider logo + Lightning Address (`user@domain.com` with domain visually distinct) + provider name
  - Cards fade in, hold, fade out, next one fades in. Smooth, elegant.
  - Example sequence: Cash App → `user@cash.app` → ZBD → `user@zbd.gg` → Wallet of Satoshi → `user@walletofsatoshi.com` → etc.

### Section 2: Capabilities Bento Grid
Visually rich bento grid showcasing the LNURL-pay ecosystem. Most powerful first:

| Friendly Name | LUD | Description |
|---|---|---|
| Comments | lud-12 | Attach a message to a payment |
| Success Actions | lud-09 | Trigger content, messages, or URLs after payment |
| Payment Verification | lud-21 | Cryptographic proof of settlement, non-custodial |
| Sender Identity | lud-18 | Self-declared payer info (name, email, Lightning Address) |
| Currency Denomination | lud-22 | Express payment amounts in any unit of account |
| Reusable Requests | lud-11 | Persistent vs disposable payment links |
| Payment Rail Discovery | lud-25 | Multi-protocol destinations: BOLT12, Ark, Spark, Liquid, onchain BTC |

### Section 3: Interactive Resolver
- Tagline: **"What's in your Lightning Address?"**
- User types their Lightning Address → resolves live → displays capabilities as checkmarks with friendly names only (no LUD numbers). Fun, visual, satisfying.

**Resolution logic (two-layer):**
1. Extract domain from typed address (e.g. `zbd.gg`)
2. Look up `domain` field in `wallets.json` → get declared feature set for that provider
3. Also live-fetch `/.well-known/lnurlp/<user>` and `/.well-known/pay-options/<user>` to confirm where detectable:
   - `commentAllowed > 0` → **Comments** ✓
   - `payerData` present → **Sender Identity** ✓
   - `currencies` present → **Currency Denomination** ✓
   - `pay-options` endpoint responds → **Payment Rail Discovery** ✓
   - Success Actions, Payment Verification, Reusable Requests → inferred from `wallets.json` declared features (require second callback, not detectable from first call)
4. Show friendly-name checkmarks only. No LUD numbers visible to end user.

### Section 4: For Agents & AI
- Why Lightning Address is the payment primitive for the agentic web:
  - Static, human-readable, machine-addressable
  - Fully programmatic — one HTTP call to pay anyone or any agent
  - Comments for transaction context and intent
  - Sender Identity for agent attribution
  - Payment Verification for cryptographic settlement proof
  - `pay-options` (LUD-25) for automatic rail selection
- `llms.txt` available for LLMs to consume the protocol directly

### Footer
- "Supported by ZBD"

---

## Page 2: Directory

Full-page wallet and service browser. No stats or counts.

### Data Source
Two JSON files in the repo. README table removed — README links to the site instead.

- **`wallets.json`** — all wallets and services
- **`featured.json`** — curated featured entries, maintained by Andre

### wallets.json Schema

```json
{
  "id": "zbd",
  "name": "ZBD",
  "url": "https://zbd.gg",
  "logo": "zbd.png",
  "domain": "zbd.gg",
  "type": ["wallet", "service"],
  "platforms": ["ios", "android", "web"],
  "send": true,
  "receive": true,
  "features": ["lud-09", "lud-11", "lud-12", "lud-18", "lud-21", "lud-22", "lud-25"]
}
```

### featured.json Schema

```json
[
  { "id": "zbd" },
  { "id": "walletofsatoshi" }
]
```

The `domain` field in `wallets.json` is how the Interactive Resolver maps a typed Lightning Address to a known provider and its declared capabilities.

**Type values:** `wallet`, `service`, `exchange`, `developer-tool`  
**Platform values:** `ios`, `android`, `web`, `desktop`, `api`

### UI
- Featured tier at top (from `featured.json`)
- Filterable grid — by type, platform, feature
- Search bar
- Cards: logo, name, platform badges, feature badges
- Feature badges show friendly names; LUD number in tooltip
- Wallet teams submit PRs to `wallets.json` — no more README table

### API
`GET /api/v1/directory` — full directory as JSON  
Queryable: `?feature=lud-21`, `?platform=ios`, `?type=wallet`  
Cacheable, publicly accessible

---

## Page 3: Docs

Documentation page with persistent sidebar. Supports MDX, images, React components inline.

### Sidebar Structure

```
Getting Started
  └── What is Lightning Address?
  └── How it works

Setup Guide
  └── Get an Address
  └── Self-Hosted (DIY)
  └── Bridge Servers

Capabilities
  └── Comments
  └── Success Actions
  └── Payment Verification
  └── Sender Identity
  └── Currency Denomination
  └── Reusable Requests
  └── Payment Rail Discovery (LUD-25)

For Agents & AI
  └── Overview
  └── llms.txt

Showcase
  └── [Post: Company/use case]
  └── [Post: Company/use case]
  └── ...

API Reference
  └── /api/v1/directory
```

### Content Style Per Page

**Capabilities pages** — two-layer approach:
1. Friendly top section: what it is, why it matters, real-world use case — written for PMs and non-technical readers
2. Technical section below: the actual LUD spec, request/response format, implementation details

**Showcase** — quasi-blog posts: text + images + screenshots showing how companies and people use Lightning Address and LNURL-pay well in the wild. Highlights real implementations, creative use cases, and ecosystem momentum. Editable via MDX so new posts can be added easily.

---

## Tech Stack

- **Framework:** Next.js 16, App Router
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS
- **Content:** MDX (supports React components, images, code blocks)
- **Deployment:** Vercel (or current host)
- **Data:** `wallets.json` + `featured.json`

---

## Out of Scope (v1)

- LNURL-auth, LNURL-channel, LNURL-withdraw
- FX/cross-currency at protocol level
- Adoption metrics or wallet count statistics
