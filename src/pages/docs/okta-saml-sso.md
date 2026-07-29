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
   - **Name ID format**: **EmailAddress**
   - **Application username**: **Email**

## Step 3: Map the attributes

Still on the **Configure SAML** tab, scroll to **Attribute Statements** and add these three mappings:

| Name (in Okta) | Value (Okta profile) |
| --- | --- |
| `mail` | `user.email` |
| `givenName` | `user.firstName` |
| `sn` | `user.lastName` |

All three are required. Prodigy uses them to create and correctly name an account the first time someone signs in.

{% callout type="note" title="About the Name ID" %}
Use **EmailAddress** with the person's email as shown above. This matches the setup in Prodigy's in-app wizard and lets Okta launch Prodigy from the assigned app tile without any additional Name ID configuration.
{% /callout %}

Click **Next**, answer the "Are you a customer or partner" question (either is fine), and click **Finish**.

## Step 4: Assign the app to your team

New Okta app integrations aren't visible to anyone until you assign them.

1. On the app's **Assignments** tab, click **Assign → Assign to People** or **Assign to Groups**.
2. Choose who should get access and confirm.

## Step 5: Finish the wizard in Prodigy

Back in the Prodigy tab from Step 1, you'll need the app's IdP metadata. In Okta, open the app's **Sign On** tab and look for the SAML setup instructions or Identity Provider metadata link, either download the metadata and upload it into Prodigy's wizard, or copy the individual **Entity ID**, **SSO URL**, and **Certificate** values by hand.

Then choose which department new sign-ins should land in by default and save. One more step confirms it's actually working.

## Step 6: Confirm it's working

Saving doesn't prove the connection works, so Prodigy checks for you. The moment you save, a panel appears reading **Waiting for the first sign-in… this page updates automatically.**

Leave that tab open and do a real sign-in:

1. Open your Okta End-User Dashboard.
2. Click the Prodigy tile you created in Step 2.
3. You should land in Prodigy, already signed in.

Back on the settings tab, the panel turns green and names who signed in:

**It works! someone@yourdomain.com signed in via SAML Authentication a few seconds ago.**

That's your confirmation the connection is live. It's also the only real test available: an IdP-initiated setup has no meaningful "test connection" button, because a valid sign-in has to start at Okta and come back to us.

{% callout type="note" title="Only new sign-ins count" %}
The check only counts sign-ins that happen after you save, so re-saving can't confirm itself against an older sign-in. If you change the configuration later, sign in again to re-confirm.
{% /callout %}

If nothing arrives after about 30 seconds, the wizard adds a hint:

**No sign-in received yet. Double-check the IdP Entity ID matches exactly, and that your users are assigned to the Prodigy app in your identity provider.**

Those two causes account for most first attempts that don't work. A mistyped Entity ID is the more common one, and it fails quietly: the assertion never gets matched to your organization at all, so nothing appears anywhere.

## How your team signs in

This is what's called an "IdP-initiated" sign-in, meaning your team starts from Okta, not from Prodigy's own login page. Once the app is assigned, anyone with access can open their Okta dashboard and click the Prodigy tile to be signed in automatically. There isn't a "Sign in with Okta" button on Prodigy's login page yet, so it's worth pointing your team to their Okta dashboard so they know where to start.

## Keeping an eye on sign-ins

The **Recent sign-in activity** card on the same settings page lists every SSO sign-in attempt, including the failures, with the reason each one was rejected. A person's first successful sign-in is marked **First sign-in — account created**, so you can watch accounts being provisioned as your team comes online.

If someone tells you they can't sign in, start here. It will usually tell you what went wrong without needing to open a ticket.

## Need help?

If anything on your screen doesn't match what's described here, or a sign-in isn't working, reach out to [support@prodigyems.com](mailto:support@prodigyems.com) with a screenshot of where you're stuck and we'll help sort it out.
