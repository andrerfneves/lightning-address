![](https://i.imgur.com/uwHlWPC.png)

# `lightningaddr` Requirements

Requirements for using the [Lightning Address](https://lightningaddress.com) protocol.


## Sending app

For the app sending payments to user@example.org, the following requirements apply:
* App needs LNURL-Pay support
* Verify the lightningaddress domain using HTTPS

## Receiving domain

Considering you own the `example.org` domain, you need to set up these DNS records:

* A example.org -> `5.2.67.89`

### To use with `c-lightning` and `Sparko`:

* TXT `_kind`.example.org -> sparko
* TXT `_host`.example.org -> http(s)://`your-ip-or-whatever.com`/rpc
* TXT `_key`.example.org -> `key_with_permission_to_method_invoicewithdescriptionhash`

### To use with LND:

* TXT `_kind`.example.org -> lnd
* TXT `_host`.example.org -> http(s)://`your-ip-or-whatever.com`
* TXT `_macaroon`.example.org -> `macaroon_as_base64`

### Optional extras:

If you want to specify a description for the Lightning Address payment screen:

* TXT `_description`.example.org -> free text

If you want to specify an image for the Lightning Address payment screen:

* TXT `_image`.example.org -> https://url.to/image

If you want to receive comments through the Lightning Address:

* TXT `_webhook`.example.org -> https://url.to/receive/webhook

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

* TXT `_cert`.example.org -> -----BEGIN CERTIFICATE----- MIQT...TQIM -----END CERTIFICATE-----

If you want to reuse the domain root to redirect to elsewhere (maybe to the www subdomain?):

TXT `_redirect`.example.org -> https://www.example.org/
