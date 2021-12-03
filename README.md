![](https://i.imgur.com/uwHlWPC.png)

# Lightning Address

### **Like an email address, but for your Bitcoin.**

## General Information

The Lightning Address is an [Internet Identifier](https://datatracker.ietf.org/doc/html/rfc5322#section-3.4.1) that allows anyone to send you Bitcoin over the Lightning Network. No scanning of QR codes or pasting invoices necessary.

For more information check out the website: [lightningaddress.com](https://lightningaddress.com)

## Developers

If you are a developer aiming to introduce support for Lightning Addresses in your application, wallet, check the [DIY](./DIY.md) section.

## Bridge Servers

If you don't want to roll out an entire HTTP / LNURL server on your own setup/infrastructure, but already have a Lightning node you want to use for your Lightning Address? You can use a Bridge Server to ensure your Lightning Node can properly receive payments from your Lightning Address. Check the [Bridge Server](./BRIDGE.md) instructions for a plug-n-play solution.

## Wallets Supported

_Bitcoin Lightning wallets that support sending and receiving to **Lightning Addresses**_.

| Wallet                                                                                                                   | Sending   | Receiving |
|:-------------------------------------------------------------------------------------------------------------------------| :-------: | :-----:   |
| [Blixt](https://blixtwallet.github.io/)                                                                                  | ☑️         | [WIP](https://github.com/hsjoberg/lightning-box/blob/master/README.md)     |
| [BlueWallet](https://bluewallet.io/)                                                                                     | ☑️         |   ----    |
| [Breez](https://breez.technology/)                                                                                       | ☑️         |   ----    |
| [coinos](https://coinos.io/)                                                                                             | WIP       | ☑️         |
| [LNbits](https://lnbits.org/)                                                                                            | ☑️         | WIP       |
| [@lntxbot](https://t.me/lntxbot)                                                                                         | ☑️         | ☑️         |
| [@LightningTipBot](https://github.com/LightningTipBot/LightningTipBot)                                                   | ☑️         | ☑️         |
| [Muun](https://muun.com/)                                                                                                |           |           |
| [Phoenix](https://phoenix.acinq.co/)                                                                                     | ☑️         |   ----    |
| [ThunderHub](https://github.com/apotdevin/thunderhub)                                                                    | ☑️         |   ----    |
| [Wallet of Satoshi](https://www.walletofsatoshi.com/)                                                                    | ☑️         |   ----    |
| [Zap](https://www.zaphq.io/)                                                                                             |           |           |
| [SBW](https://lightning-wallet.com/)                                                                                     | ☑️         |   ----    |
| [ZEBEDEE](https://zebedee.io/wallet) (and [Bots](https://zebedee.io/bots/), and [Extensions](https://zebedee.io/wallet)) | ☑️         | ☑️       |
| [Zeus](https://github.com/ZeusLN/zeus)                                                                                   |  ☑️        |   ----    |
| [FastBitcoins](https://fastbitcoins.com)                                                                                 | ☑️         | ☑️         |

## TLDR

Here's a quick primer on how Lightning Address works and how it relies on the [LNURL Pay protocol](https://github.com/fiatjaf/lnurl-rfc/blob/master/lnurl-pay.md).

![](https://i.imgur.com/DIV5q8q.png)

### Diagrams

All illustrative and informative diagrams are available under the [DIAGRAMS](./diagrams/README.md) folder.

### Videos & Podcasts

- [Introducing The Lightning Address](https://www.youtube.com/watch?v=G97yzYcyoug) - a recorded presentation on the explanations of why Lightning Address was created and the problems this protocol aims to solve

## Contributions

Contributions are welcome, for both the lightningaddress.com website as well as the Lightning Address protocol itself. Please submit a PR here or on the core [LNURL RFC repository](https://github.com/fiatjaf/lnurl-rfc).

## Donations

If this project is important to you, consider donating to the contributors, creators, and developers pushing this initiative forward.

**Lightning Address:** lnaddress@zbd.gg / foxp2zeb@ln.tips
