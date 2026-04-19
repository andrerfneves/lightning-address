# Lightning Address

Like an email address, but for your Bitcoin.

Lightning Address is the open protocol and canonical website for human-readable Bitcoin payment identifiers built on LNURL-pay.

## What lives in this repo

This repository powers **lightningaddress.com** and now includes:

- a modern Next.js site
- a searchable wallet/service **directory**
- MDX-based **documentation**
- public JSON and helper APIs
- `public/llms.txt` for agent-friendly protocol consumption

## Start here

- **Website:** [lightningaddress.com](https://lightningaddress.com)
- **Docs:** [lightningaddress.com/docs](https://lightningaddress.com/docs)
- **Directory:** [lightningaddress.com/directory](https://lightningaddress.com/directory)
- **LLMs / agents:** [lightningaddress.com/llms.txt](https://lightningaddress.com/llms.txt)

## Where the legacy docs went

The older root-level docs have been folded into the site:

- DIY / self-hosting guidance → `/docs/setup/self-hosted`
- Bridge server guidance → `/docs/setup/bridge-servers`
- Protocol overview → `/docs/getting-started`
- Wallet/provider list → `/directory` and `data/wallets.json`

## Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Contributing

Contributions are welcome for:

- protocol documentation
- provider directory updates
- showcase examples
- site improvements

If you are updating ecosystem support, prefer editing `data/wallets.json` instead of maintaining long markdown tables.

## License

MIT — see [LICENSE.md](./LICENSE.md).
