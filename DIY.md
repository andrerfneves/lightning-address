
![](https://i.imgur.com/uwHlWPC.png)

# Do-It-Yourself

Looking to add support for Lightning Addresses to your service or wallet? Want to self-host all your infrastructure and still make use of Lightning Addresses? This is for you!

## General

This document outlines the overall path to serving your own HTTP server with support for LNURL Pay + Internet Identifier protocols.

## LNURL Protocol

[LNURL](https://github.com/fiatjaf/lnurl-rfc) is a UX protocol built for the Lightning Network that aims to facilitate the sending, receiving, and handling of Lightning invoices from wallets to services (and vice versa).

[LNURL](https://github.com/fiatjaf/lnurl-rfc) is comprised of many sub-protocols, each with their own required, and optional, properties and features. Please refer to the [LNURL RFC documentation](https://github.com/fiatjaf/lnurl-rfc) for more details on how LNURL works. Specifically for the Lightning Address protocol, we are relying on the Internet Identifier metadata optional feature of the LNURL Pay sub-protocol.

In order to support Lightning Addresses on your own infrastructure/domain setup, you will need a handful of things:

* HTTP Server
  * [LNURL Pay support](https://github.com/fiatjaf/lnurl-rfc/blob/master/lnurl-pay.md)
    * [Internet Identifier metadata support](https://github.com/fiatjaf/lnurl-rfc/blob/luds/16.md)
    * [Commenting support](https://github.com/fiatjaf/lnurl-rfc/blob/luds/12.md) (Optional)
* Lightning Network node
  * Used to create BOLT11 invoices for LNURL Pay flow
* Domain

## Internet Identifier

The Lightning Address is nothing more than another [Internet Identifier](https://datatracker.ietf.org/doc/html/rfc5322#section-3.4.1), it should look identical to an email address. For more details on how to set up the Internet Identifier metadata check [here](https://github.com/fiatjaf/lnurl-rfc/blob/luds/16.md).

## Comments

In order to accept messages/comments alongside payments to your Lightning Address, you will have to support the optional `comment` feature outlined [here](https://github.com/fiatjaf/lnurl-rfc/blob/luds/12.md).

