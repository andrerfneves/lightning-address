![](https://i.imgur.com/uwHlWPC.png)

# Bridge Server

At its core, a Lightning Address Bridge Server is a simple HTTP server that has one primary function: provide the LNURL Pay payload information necessary to allow payments to a Lightning Address to reach a specific Lightning node. There are a few ways to connect to a bridge server:

## `bridgeaddr`

The [`bridgeaddr`](https://bridgeaddr.fiatjaf.com/) server tool is a simple server that allows you to receive Lightning payments at `yourname@yourdomain.com` in a non-custodial fashion. It is compatible with the following Lightning backends:

* Sparko
* LND
* LNPay
* LNBits

This server will serve the necessary JSON and then use RPC calls to connect to your node and fetch invoices on demand. You don't have to do anything besides buying a domain and setting up some DNS records. HTTPS will be provided automatically for you.

If you already have a domain name and a Lightning node and are ready to get started, head on over to the [`bridgeaddr`](https://bridgeaddr.fiatjaf.com/) documentation page to set it up. You can also run `bridgeaddr` server yourself by going to the [GitHub repository](https://github.com/fiatjaf/bridgeaddr).

## Satdress

![](https://user-images.githubusercontent.com/2574011/129462071-49797997-f39a-4e8f-a378-5c9a9818adca.png)

If you'd like to host a Bridge Server on your own infrastructure to allow for you (and anyone else you would like to give access to) to connect your Lightning Address to a Lightning node, you can use [Satdress](https://github.com/fiatjaf/satdress). Satdress is a federated lightning addresses server.

Similar to `bridgeaddr` you can simply enter a few parameters on DNS and quickly connect your non-custodial Lightning node to a Lightning Address. It's a Simple plug-n-play server for supporting [Lightning Address](https://lightningaddress.com) protocol.

Satdress also has a simple web-facing user interface to provide an easy-to-use form to connect nodes to addresses.
