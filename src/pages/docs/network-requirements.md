---
title: Network Requirements for IT
description: What your IT department needs to know to make Prodigy work on department, station, and municipal networks.
---

This page is written for the IT staff who manage a department, station, or municipal network. It covers what Prodigy needs from the network, the filtering features that most often break it, and how to verify everything works.

If you're a user who landed here, it's worth running the quick checks in [Try This First](/docs/try-this-first) before escalating — many problems that look like the network are cleared by a hard refresh or a different browser.

---

## The Basics

Prodigy is a web application delivered entirely over **HTTPS on port 443**. There is nothing to install, no inbound connections to allow, and no unusual ports or protocols. If a machine can browse the web over HTTPS, it can use Prodigy — unless a filtering layer is interfering.

## Allow Our Domains

The complete list of domains Prodigy uses — including our video streaming and payment providers — is maintained on the [URL Allow List](/docs/allow_list) page. Allow those domains in your web filter and firewall.

Two categories deserve special attention:

- **Video delivery** (`*.jwplayer.com`, `*.jwpcdn.com`, and related domains) carry your class video. Web filters that block "streaming media" as a category will break class videos while leaving the rest of Prodigy working, which is confusing for users.
- **Payments** (`js.stripe.com`): required on pages where individuals purchase access.

## SSL/TLS Inspection

{% callout type="warning" title="The most common cause of hard-to-diagnose issues" %}
If your firewall or secure web gateway performs SSL/TLS inspection (decrypting and re-encrypting HTTPS traffic), add the domains from our allow list to its **decryption bypass** list. TLS inspection frequently breaks video playback and payment processing even when the domains themselves are allowed, and the failures it causes look random from the user's seat.
{% /callout %}

Symptoms that point at TLS inspection: Prodigy works on a phone hotspot but not the station network, videos fail to start while pages load fine, or the browser reports certificate errors on Prodigy pages.

## Bandwidth

Class video streams at standard HD web-video rates. As a rule of thumb, plan for a few Mbps per concurrent viewer — a station where six people watch a class at once needs meaningfully more headroom than one where people train individually. If videos play but constantly rebuffer at busy times, bandwidth contention is the likely cause rather than filtering.

## How to Verify

From a machine on the network in question:

1. Open [status.prodigyems.com](https://status.prodigyems.com) to confirm there is no active incident.
2. Log in to Prodigy and click through a few pages.
3. Play a class video for at least a minute.

If something fails, our [Network Troubleshooting Guide](/docs/network-troubleshooting) explains how to capture a **NetLog** — a connection-level trace from the browser that shows exactly which requests your network is blocking or resetting. Send it to [Support@prodigyems.com](mailto:Support@prodigyems.com) and we'll pinpoint the block together.
