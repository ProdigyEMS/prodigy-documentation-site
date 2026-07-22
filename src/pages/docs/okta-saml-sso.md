---
title: Okta SAML SSO Setup
description: Connect Okta as a SAML identity provider so your team can sign in to Prodigy with their Okta account.
---

{% callout type="note" title="New feature" %}
Okta SAML SSO is new. If anything on this page doesn't match what you see, or you've got feedback, let us know at [support@prodigyems.com](mailto:support@prodigyems.com), we'd love to hear from you.
{% /callout %}

## What this does

Connecting Okta as a SAML identity provider lets your team sign in to Prodigy with the Okta account they already use everywhere else, no separate Prodigy password to remember. The first time someone signs in this way, their Prodigy account is created automatically with the right name and department, so you don't need to create accounts by hand first.

{% callout type="note" title="SAML, specifically" %}
This guide covers connecting Okta via SAML. A lighter-weight Okta sign-in option (OAuth/OIDC) is coming soon as a separate guide, the two aren't the same setup.
{% /callout %}

## Before you start

You'll need:

- An Okta account with rights to create app integrations
- A Prodigy **organization admin** account
- About 15 minutes

## Step 1: Start the wizard in Prodigy

In Prodigy, go to your organization's **Settings → Integrations → SAML Authentication** and choose **Okta** when it asks which identity provider you're connecting. This screen shows you three values you'll need in a few minutes:

- **ACS URL**
- **SP Entity ID**
- **SP Metadata URL**

Keep this tab open, you'll come back to it.

## Step 2: Create the app integration in Okta

1. In the Okta Admin Console, go to **Applications → Applications**.
2. Click **Create App Integration**.
3. Choose **SAML 2.0** as the sign-in method and click **Next**.
4. On the **General Settings** tab, give the integration a name, "Prodigy" works fine, and click **Next**.
5. On the **Configure SAML** tab, enter:
   - **Single sign-on URL**: the **ACS URL** from Prodigy's wizard (Step 1)
   - **Audience URI (SP Entity ID)**: the **SP Entity ID** from Prodigy's wizard

## Step 3: Map the attributes

Still on the **Configure SAML** tab, scroll to **Attribute Statements** and add these three mappings:

| Name (in Okta) | Value (Okta profile) |
| --- | --- |
| `mail` | `user.email` |
| `givenName` | `user.firstName` |
| `sn` | `user.lastName` |

All three are required. Prodigy uses them to create and correctly name an account the first time someone signs in.

{% callout type="note" title="About the Name ID" %}
By default, Okta's **Name ID format** is left unspecified, which typically resolves to the person's email. That works well for most organizations. If you're planning to load your roster into Prodigy ahead of time so training is already assigned before anyone's first sign-in, consider setting **Name ID format** to **Persistent** instead of relying on email, so a later email change doesn't disconnect someone from their pre-loaded account.
{% /callout %}

Click **Next**, answer the "Are you a customer or partner" question (either is fine), and click **Finish**.

## Step 4: Assign the app to your team

New Okta app integrations aren't visible to anyone until you assign them.

1. On the app's **Assignments** tab, click **Assign → Assign to People** or **Assign to Groups**.
2. Choose who should get access and confirm.

## Step 5: Finish the wizard in Prodigy

Back in the Prodigy tab from Step 1, you'll need the app's IdP metadata. In Okta, open the app's **Sign On** tab and look for the SAML setup instructions or Identity Provider metadata link, either download the metadata and upload it into Prodigy's wizard, or copy the individual **Entity ID**, **SSO URL**, and **Certificate** values by hand.

Then choose which department new sign-ins should land in by default, save, and you're done.

## How your team signs in

This is what's called an "IdP-initiated" sign-in, meaning your team starts from Okta, not from Prodigy's own login page. Once the app is assigned, anyone with access can open their Okta dashboard and click the Prodigy tile to be signed in automatically. There isn't a "Sign in with Okta" button on Prodigy's login page yet, so it's worth pointing your team to their Okta dashboard so they know where to start.

## Need help?

If anything on your screen doesn't match what's described here, or a sign-in isn't working, reach out to [support@prodigyems.com](mailto:support@prodigyems.com) with a screenshot of where you're stuck and we'll help sort it out.
