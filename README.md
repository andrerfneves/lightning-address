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

| Wallet                                                            | Sending   | Receiving |
| :---                                                              | :-------: | :-----:   |
| [Alby](https://getalby.com)                                       |  ☑️        |   ☑️       |
| [BitBanana](https://bitbanana.app)                                | ☑️         |   ----    |
| [Bitnob](https://bitnob.com)                                      | ☑️         | ☑️         |
| [Blink (Bitcoin Beach Wallet)](https://blink.sv/)                 | ☑️         | ☑️         |
| [BitcoLi wallet](https://bitcoli.com/)                            | ☑️         | ☑️         |
| [Blixt](https://blixtwallet.github.io/)                           | ☑️         | [WIP](https://github.com/hsjoberg/lightning-box/blob/master/README.md)     |
| [BlueWallet](https://bluewallet.io/)                              | ☑️         |   ----    |
| [Bookmark.org](https://bookmark.org/)                             | ----      | ☑️         |
| [Bottlepay](https://bottlepay.com/)                               | ☑️       | ☑️       |
| [Breez](https://breez.technology/)                                | ☑️         |   ----    |
| [BTCPay](https://btcpayserver.org/)                               | ☑️         | ☑️        |
| [ByteWallet](https://www.bytefederal.com/bytewallet)              |  ☑️        |   ☑️       |
| [CoinCorner](https://www.coincorner.com/)                         |  ☑️        |   ☑️    |
| [CoinKit](https://coinkit.de/)                                    |  ☑️        |   ☑️    |
| [coinos](https://coinos.io/)                                      | ☑️         | ☑️         |
| [LifPay](https://lifpay.me/)                                      | ☑️         | ☑️         |
| [LNbits](https://lnbits.org/)                                     | ☑️         | WIP       |
| [@lntxbot](https://lntxbot.com/)                                  | ☑️         | ☑️         |
| [@LightningTipBot](https://github.com/LightningTipBot/LightningTipBot) | ☑️         | ☑️         |
| [Machankura](https://8333.mobi/)                                  | ☑️         | ☑️         |
| [Mash](https://getmash.com/)                                      | ----      |   ☑️       |
| [Muun](https://muun.com/)                                         |           |           |
| [NOAH](https://app.noah.com/)                                     | ☑️         | ☑️         |
| [Oak Node](https://oak-node.net)                                  | ☑️         |   ----    |
| [Phoenix](https://phoenix.acinq.co/)                              | ☑️         |   ----    |
| [Pouch.ph](https://pouch.ph/)                                     | ☑️         |   ☑️       |
| [Satoshi Lightning](https://vipsats.app)                          | ☑️         |   ☑️       |
| [SBW](https://sbw.app/)                                           | ☑️         |   ----    |
| [Spark Wallet](https://sparkwallet.io/)                           |  ☑️        |   ☑️       |
| [Speed Wallet](https://www.speed.app/)                           |  ☑️        |   ☑️       |
| [Stacker News](https://stacker.news/)                             | ----      |   ☑️       |
| [Strike](https://strike.me/)                                      | ☑️         |   ☑️       |
| [ThunderHub](https://github.com/apotdevin/thunderhub)             | ☑️         |   ----    |
| [Voltpay App](https://voltpay.app)                                | ☑️         |   ☑️    |
| [Wallet of Satoshi](https://www.walletofsatoshi.com/)             | ☑️         |   ☑️    |
| [ZEBEDEE App](https://zbd.gg) (and [Bots](https://zbd.gg), and [Extensions](https://zbd.gg))  | ☑️         | ☑️       |
| [Zeus](https://github.com/ZeusLN/zeus)                            |  ☑️        |   ----    |


## TLDR

Here's a quick primer on how Lightning Address works and how it relies on the [LNURL Pay protocol](https://github.com/fiatjaf/lnurl-rfc/blob/master/lnurl-pay.md).

![](https://i.imgur.com/DIV5q8q.png)

### Diagrams

All illustrative and informative diagrams are available under the [DIAGRAMS](./diagrams/README.md) folder.

### Videos & Podcasts

- [Introducing The Lightning Address](https://www.youtube.com/watch?v=G97yzYcyoug) - a recorded presentation on the explanations of why Lightning Address was created and the problems this protocol aims to solve
- [How To Set Up A Lightning Address Directly To Your Node](https://www.youtube.com/watch?v=15tFA9sZ-N0) - A quick video tutorial showing you how to set up a Lightning Address directly to your Umbrel or Citadel node, non-custodially (but not 100% trust-free)

## Contributions

Contributions are welcome, for both the lightningaddress.com website as well as the Lightning Address protocol itself. Please submit a PR here or on the core [LNURL RFC repository](https://github.com/fiatjaf/lnurl-rfc).

## Donations

If this project is important to you, consider donating to the contributors, creators, and developers pushing this initiative forward.

**Lightning Address:** lnaddress@zbd.gg / foxp2zeb@ln.tips
