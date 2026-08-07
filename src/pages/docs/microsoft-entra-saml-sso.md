---
title: Microsoft Entra ID SAML SSO Setup
description: Connect Microsoft Entra ID as a SAML identity provider so your team can sign in to Prodigy with their Microsoft account.
---

{% callout type="note" title="New feature" %}
Microsoft Entra ID SAML SSO is new. If anything on this page doesn't match what you see, or you've got feedback, let us know at [support@prodigyems.com](mailto:support@prodigyems.com), we'd love to hear from you.
{% /callout %}

## What this does

Connecting Microsoft Entra ID (formerly Azure AD) as a SAML identity provider lets your team sign in to Prodigy with the Microsoft account they already use for email and everything else, no separate Prodigy password to remember. The first time someone signs in this way, their Prodigy account is created automatically with the right name and department, so you don't need to create accounts by hand first.

{% callout type="note" title="SAML, specifically" %}
This guide covers connecting Microsoft Entra ID via SAML. A lighter-weight Microsoft sign-in option (OAuth/OIDC) is coming soon as a separate guide, the two aren't the same setup.
{% /callout %}

## Before you start

You'll need:

- A Microsoft Entra admin account (Cloud Application Administrator, Application Administrator, or owner of the app)
- A Prodigy **organization admin** account
- About 15 minutes

{% callout type="warning" title="Check your Prodigy role first" %}
**Organization admin** is a specific role in Prodigy, not a general description of seniority. The next role down, **Training Officer**, can do most day-to-day administration but **cannot** complete this setup.

**How to check:** look for **Settings** in the menu of your organization account. If it isn't there, you don't have the organization admin role.

**How to get it:** email [support@prodigyems.com](mailto:support@prodigyems.com) and ask to be made an organization admin. A Training Officer can't grant this role, not even to themselves, so it does have to come from us.

It's worth confirming before you begin. Setup runs several steps, and the permission is only checked when you save at the end.
{% /callout %}

## Step 1: Start the wizard in Prodigy

In Prodigy, go to your organization's **Settings → Integrations → SAML Authentication** and choose **Microsoft Entra ID** when it asks which identity provider you're connecting. This screen shows you three values you'll need in a few minutes:

- **ACS URL**
- **SP Entity ID**
- **SP Metadata URL**

Keep this tab open, you'll come back to it.

## Step 2: Create the enterprise application in Entra

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com).
2. Go to **Identity → Applications → Enterprise applications → New application**.
3. Click **Create your own application**, give it a name ("Prodigy" works fine), and choose **Integrate any other application you don't find in the gallery (Non-gallery)**. Click **Create**.
   - Download the [Prodigy app icon](https://frontend.prodigyems.com/images/prodigyems/prodigy-app-icon-512.png) for the app's branding. Entra's **Properties** screen requires an exact 215 × 215 pixel PNG with a solid background and a file size under 100 KB, so resize the source icon to those requirements before uploading it.
4. Open the new application and, in the **Manage** section, select **Single sign-on**.
5. Choose **SAML**.
6. In the **Basic SAML Configuration** section, click **Edit** and enter:
   - **Identifier (Entity ID)**: the **SP Entity ID** from Prodigy's wizard (Step 1)
   - **Reply URL (Assertion Consumer Service URL)**: the **ACS URL** from Prodigy's wizard
7. Click **Save**.

## Step 3: Check the attributes

Entra's default claims already line up with what Prodigy needs, you generally don't need to change anything in the **Attributes & Claims** section. It's worth double-checking the following are present:

| Claim | Read as |
| --- | --- |
| `.../ws/2005/05/identity/claims/emailaddress` | Email |
| `.../ws/2005/05/identity/claims/givenname` | First name |
| `.../ws/2005/05/identity/claims/surname` | Last name |

{% callout type="note" title="About the Name ID" %}
By default, Entra sends the person's User Principal Name (UPN) as the Name ID, which is fine, Prodigy matches on the email claim rather than the Name ID for Entra specifically. If you're planning to load your roster into Prodigy ahead of time so training is already assigned before anyone's first sign-in, mention this to your Prodigy contact so the matching can be set up to use a stable identifier.
{% /callout %}

## Step 4: Assign the app to your team

New enterprise applications aren't visible to anyone until you assign them.

1. In the app's **Manage** section, select **Users and groups**.
2. Click **Add user/group** and choose who should get access.

## Step 5: Finish the wizard in Prodigy

Back in the Prodigy tab from Step 1, scroll to the **SAML Certificates** section and download the **Federation Metadata XML** file, then upload it into Prodigy's wizard. Or, if you'd rather enter things by hand, copy the **Login URL**, **Microsoft Entra Identifier**, and the certificate shown on the same page.

Then choose which department new sign-ins should land in by default and save. One more step confirms it's actually working.

## Step 6: Confirm it's working

Saving doesn't prove the connection works, so Prodigy checks for you. The moment you save, a panel appears reading **Waiting for the first sign-in… this page updates automatically.**

Leave that tab open and do a real sign-in:

1. Open [myapps.microsoft.com](https://myapps.microsoft.com), or the app launcher grid in Outlook or any other Microsoft 365 app.
2. Click the Prodigy tile you created in Step 2.
3. You should land in Prodigy, already signed in.

Back on the settings tab, the panel turns green and names who signed in:

**It works! someone@yourdomain.com signed in via SAML Authentication a few seconds ago.**

That's your confirmation the connection is live. It's also the only real test available: an IdP-initiated setup has no meaningful "test connection" button, because a valid sign-in has to start at Entra and come back to us.

{% callout type="note" title="Only new sign-ins count" %}
The check only counts sign-ins that happen after you save, so re-saving can't confirm itself against an older sign-in. If you change the configuration later, sign in again to re-confirm.
{% /callout %}

If nothing arrives after about 30 seconds, the wizard adds a hint:

**No sign-in received yet. Double-check the IdP Entity ID matches exactly, and that your users are assigned to the Prodigy app in your identity provider.**

Those two causes account for most first attempts that don't work. A mistyped Entity ID is the more common one, and it fails quietly: the assertion never gets matched to your organization at all, so nothing appears anywhere.

## How your team signs in

This is what's called an "IdP-initiated" sign-in, meaning your team starts from Microsoft, not from Prodigy's own login page. Once the app is assigned, anyone with access can go to [myapps.microsoft.com](https://myapps.microsoft.com) (or the app launcher grid in Outlook or any other Microsoft 365 app) and click the Prodigy tile to be signed in automatically. There isn't a "Sign in with Microsoft" button on Prodigy's login page yet, so it's worth pointing your team to the app launcher so they know where to start.

## Keeping an eye on sign-ins

The **Recent sign-in activity** card on the same settings page lists every SSO sign-in attempt, including the failures, with the reason each one was rejected. A person's first successful sign-in is marked **First sign-in — account created**, so you can watch accounts being provisioned as your team comes online.

If someone tells you they can't sign in, start here. It will usually tell you what went wrong without needing to open a ticket.

## Need help?

If anything on your screen doesn't match what's described here, or a sign-in isn't working, reach out to [support@prodigyems.com](mailto:support@prodigyems.com) with a screenshot of where you're stuck and we'll help sort it out.
