*[Upstream document](https://lightningaddr.fiatjaf.com/)*

![](https://i.imgur.com/uwHlWPC.png)

# `lightningaddr` Bridge Server

Simple plug-n-play server for supporting [Lightning Address](https://lightningaddress.com) protocol.

> At the end of this flow you will be able to receive payments at `any_name@domain.com`.

## General

A server that allows you to receive payments at `yourname@yourdomain.com` noncustodially. The Bridge Server serves the necessary JSON and then uses RPC calls to connect to your node and fetch invoices on demand.

**You don't have to do anything besides buying a domain and setting up some DNS records. HTTPS will be provided automatically for you.**

## Supported Lightning Backends

At the moment `lightningaddr` supports the following Lightning Network backends:

* [Sparko](https://github.com/fiatjaf/sparko)
* [LND](https://github.com/lightningnetwork/lnd)

## Setup Guide

Considering you own the `domain.com` domain, you need to set up these DNS records:

* A domain.com -> `5.2.67.89`

### To use with `c-lightning` and `Sparko`:

* TXT `_kind`.domain.com -> sparko
* TXT `_host`.domain.com -> http(s)://`your-ip-or-whatever.com`/rpc
* TXT `_key`.domain.com -> `key_with_permission_to_method_invoicewithdescriptionhash`

### To use with LND:

* TXT `_kind`.domain.com -> lnd
* TXT `_host`.domain.com -> http(s)://`your-ip-or-whatever.com`
* TXT `_macaroon`.domain.com -> `macaroon_as_base64` (use an invoice macaroon, this is publicly visible!)

### Optional extras:

If you want to specify a description for the Lightning Address payment screen:

* TXT `_description`.domain.com -> free text

If you want to specify an image for the Lightning Address payment screen:

* TXT `_image`.domain.com -> https://url.to/image

If you want to receive comments through the Lightning Address:

* TXT `_webhook`.domain.com -> https://url.to/receive/webhook

The webhook will contain a JSON object like the one below:

```json
{
  "comment": "...",
  "pr": "lnbc....",
  "amount:": 12345
}
```

> NOTE: Amount is in millisatoshis. The webhook is dispatched when an invoice is generated, not when it is paid, since we don't know when (or if) it was paid.

If you use a self-signed certificate and want that to be checked:

* TXT `_cert`.domain.com -> -----BEGIN CERTIFICATE----- MIQT...TQIM -----END CERTIFICATE-----

If you want to reuse the domain root to redirect to elsewhere (maybe to the www subdomain?):

TXT `_redirect`.domain.com -> https://www.domain.com/

# Now you can receive payments at `any_name@domain.com`.
