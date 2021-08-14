
![](https://i.imgur.com/uwHlWPC.png)

# Do-It-Yourself

Looking to add support for Lightning Addresses to your service or wallet? Want to self-host all your infrastructure and still make use of Lightning Addresses? This is for you!

## General

This document outlines the overall path to serving your own HTTP server with support for LNURL Pay + Internet Identifier protocols. At its core, Lightning Addresses are divided into two parts: `sending` and `receiving`. A wallet can support `sending` to Lightning Addresses without needing to support `receiving`. Any provider that supports `receiving` will likely also support `sending` for its users.

### Sending

Sending to a Lightning Address is essentially just doing some string transformations and making a GET request to retrieve a LNURL Pay callback payload. Below is a diagram explaining it:

![](https://i.imgur.com/4agivbH.png)

After receiving the LNURL Pay payload, the rest of the flow is the exact same as the LNURL Pay flow, there's virtually no difference. Again, Lightning Addresses are essentially another way of sharing how a user can obtain another user's LNURL Pay details.

Requirement: HTTPS is expected to be used, since this is sensitive data, where MITM impacts actual money.

### Receiving

In order to support receiving to a Lightning Address on your own infrastructure/domain setup, you will need a  handful of things outlined below.

* HTTP Server
  * [LNURL Pay support](https://github.com/fiatjaf/lnurl-rfc/blob/master/lnurl-pay.md)
    * [Internet Identifier metadata support](https://github.com/fiatjaf/lnurl-rfc/blob/luds/16.md)
    * [Commenting support](https://github.com/fiatjaf/lnurl-rfc/blob/luds/12.md) (Optional)
  * HTTPS security
* Lightning Network node
  * Used to create BOLT11 invoices for LNURL Pay flow
* Domain

You will essentially need a RESTful HTTP API server that will handle GET requests and return the proper payload outlined in the LNURL Pay specification.

#### Internet Identifier

The Lightning Address is nothing more than another [Internet Identifier](https://datatracker.ietf.org/doc/html/rfc5322#section-3.4.1), it should look identical to an email address. For more details on how to set up the Internet Identifier metadata check [here](https://github.com/fiatjaf/lnurl-rfc/blob/luds/16.md).

#### Comments

In order to accept messages/comments alongside payments to your Lightning Address, you will have to support the optional `comment` feature outlined [here](https://github.com/fiatjaf/lnurl-rfc/blob/luds/12.md).

## LNURL Protocol

[LNURL](https://github.com/fiatjaf/lnurl-rfc) is a UX protocol built for the Lightning Network that aims to facilitate the sending, receiving, and handling of Lightning invoices from wallets to services (and vice versa).

[LNURL](https://github.com/fiatjaf/lnurl-rfc) is comprised of many sub-protocols, each with their own required, and optional, properties and features. Please refer to the [LNURL RFC documentation](https://github.com/fiatjaf/lnurl-rfc) for more details on how LNURL works. Specifically for the Lightning Address protocol, we are relying on the Internet Identifier metadata optional feature of the LNURL Pay sub-protocol.


