---
title: SAML SSO Setup (Other Identity Providers)
description: Connect any SAML 2.0 identity provider, ADFS, PingOne, Auth0, WordPress plugins, and others, so your team can sign in to Prodigy with their existing account.
---

{% callout type="note" title="New feature" %}
Self-service SAML SSO is new. If anything on this page doesn't match what you see, or you've got feedback, let us know at [support@prodigyems.com](mailto:support@prodigyems.com), we'd love to hear from you.
{% /callout %}

## What this does

If your organization uses a SAML 2.0 identity provider other than Google Workspace, Okta, or Microsoft Entra ID, this covers everything else, ADFS, PingOne, Auth0, miniOrange for WordPress, or a custom setup. Connecting it lets your team sign in to Prodigy with the account they already use, no separate Prodigy password to remember. The first time someone signs in this way, their Prodigy account is created automatically with the right name and department, so you don't need to create accounts by hand first.

{% callout type="note" title="Using Google, Okta, or Entra?" %}
Those three have their own step-by-step guides with exact screens and field names: [Google Workspace](/docs/google-workspace-saml-sso), [Okta](/docs/okta-saml-sso), [Microsoft Entra ID](/docs/microsoft-entra-saml-sso).
{% /callout %}

## Before you start

You'll need:

- Admin access to your identity provider
- A Prodigy **organization admin** account
- About 15 minutes, this can take a little longer than the named-vendor guides since every provider's screens are laid out a little differently

## Step 1: Start the wizard in Prodigy

In Prodigy, go to your organization's **Settings → Integrations → SAML Authentication** and choose **Other SAML 2.0** when it asks which identity provider you're connecting. This screen shows you three values you'll need in a few minutes:

- **ACS URL**
- **SP Entity ID**
- **SP Metadata URL**

Keep this tab open, you'll come back to it.

## Step 2: Create the application in your identity provider

Every provider's setup screen is a little different, but they all ask for the same underlying information. Look for a section called something like "Add application," "New SAML app," or "Add relying party," and enter:

- **ACS URL** (sometimes called Assertion Consumer Service URL, Reply URL, or Recipient URL): the **ACS URL** from Prodigy's wizard
- **Entity ID** (sometimes called Audience URI, Identifier, or Relying Party Identifier): the **SP Entity ID** from Prodigy's wizard

If your provider supports importing an SP metadata file or URL instead of entering these by hand, you can point it at the **SP Metadata URL** from Prodigy's wizard.

{% callout type="note" title="Look for an \"unsolicited SSO\" or \"IdP-initiated\" switch" %}
Prodigy's SAML connection currently only supports sign-ins that start from your identity provider, not from Prodigy's own login page. If your provider has a setting called "unsolicited SSO," "IdP-initiated SSO," or similar, make sure it's turned on.
{% /callout %}

## Step 3: Map the attributes

Prodigy needs three attributes in the SAML assertion. Map them using these exact names:

| Attribute | Contents | Required |
| --- | --- | --- |
| `mail` | Email address | Yes |
| `givenName` | First name | Yes* |
| `sn` | Last name | Yes* |

\* If your provider can't split first and last name, map a single `cn` attribute with the person's full name instead, Prodigy will split it for you.

Prodigy also accepts a few common aliases automatically, so if your provider only offers generic names, `email`, `firstName`/`given_name`, and `lastName`/`surname`/`family_name` all work too.

{% callout type="note" title="About the Name ID" %}
Using the person's email address as the Name ID (the unique sign-in identifier in the assertion) works well for most setups, and is what we'd recommend if your provider asks. If you're planning to load your roster into Prodigy ahead of time so training is already assigned before anyone's first sign-in, ask your Prodigy contact about using a more stable, non-email identifier instead, so a later email change doesn't disconnect someone from their pre-loaded account.
{% /callout %}

## Step 4: Turn on access for your team

Every provider handles this differently, look for an option to assign the application to users or groups, or to publish/activate it. Until you do this, no one will be able to sign in.

## Step 5: Finish the wizard in Prodigy

Back in the Prodigy tab from Step 1, your identity provider will show you its own metadata, an Entity ID, an SSO URL, and a signing certificate, usually available as a downloadable XML file. Upload that file into Prodigy's wizard if it offers metadata import, or copy the three values in by hand.

Then choose which department new sign-ins should land in by default, save, and you're done.

## How your team signs in

This is what's called an "IdP-initiated" sign-in, meaning your team starts from your identity provider, not from Prodigy's own login page. Once it's set up, anyone with access signs in from wherever your provider normally launches applications from, an app dashboard, a bookmarked link, or similar. There isn't a "Sign in with SSO" button on Prodigy's login page yet, so it's worth pointing your team to that starting point.

## Need help?

If you get stuck on a step that doesn't quite match your provider's screens, or a sign-in isn't working, reach out to [support@prodigyems.com](mailto:support@prodigyems.com) with a screenshot of where you're stuck and we'll help sort it out.
