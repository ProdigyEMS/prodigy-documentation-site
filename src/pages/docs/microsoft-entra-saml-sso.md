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

Then choose which department new sign-ins should land in by default, save, and you're done.

## How your team signs in

This is what's called an "IdP-initiated" sign-in, meaning your team starts from Microsoft, not from Prodigy's own login page. Once the app is assigned, anyone with access can go to [myapps.microsoft.com](https://myapps.microsoft.com) (or the app launcher grid in Outlook or any other Microsoft 365 app) and click the Prodigy tile to be signed in automatically. There isn't a "Sign in with Microsoft" button on Prodigy's login page yet, so it's worth pointing your team to the app launcher so they know where to start.

## Need help?

If anything on your screen doesn't match what's described here, or a sign-in isn't working, reach out to [support@prodigyems.com](mailto:support@prodigyems.com) with a screenshot of where you're stuck and we'll help sort it out.
