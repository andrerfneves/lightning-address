*[Upstream document](https://lightningaddr.fiatjaf.com/)*

![](https://i.imgur.com/uwHlWPC.png)

# `lightningaddr` Bridge Server

Simple plug-n-play server for supporting [Lightning Address](https://lightningaddress.com) protocol.

> At the end of this flow you will be able to receive payments at `any_name@example.org`.

## General

A server that allows you to receive payments at `yourname@yourexample.org` noncustodially. The Bridge Server serves the necessary JSON and then uses RPC calls to connect to your node and fetch invoices on demand.

**You don't have to do anything besides buying a domain and setting up some DNS records. HTTPS will be provided automatically for you.**

## Supported Lightning Backends

At the moment `lightningaddr` supports the following Lightning Network backends:

* [Sparko](https://github.com/fiatjaf/sparko)
* [LND](https://github.com/lightningnetwork/lnd)

## Setup Guide

See [Domain requirements](./REQUIREMENTS.md#Domain) for domain (DNS) setup.

Setup instructions for the Bridge server WIP.
