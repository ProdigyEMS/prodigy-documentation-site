---
title: Google Workspace SAML SSO Setup
description: Connect Google Workspace as a SAML identity provider so your team can sign in to Prodigy with the Google account they already use.
---

{% callout type="note" title="New feature" %}
Google Workspace SAML SSO is new. If anything on this page doesn't match what you see, or you've got feedback, let us know at [support@prodigyems.com](mailto:support@prodigyems.com), we'd love to hear from you.
{% /callout %}

## What this does

Connecting Google Workspace as a SAML identity provider lets your team sign in to Prodigy with the Google account they already use for email and everything else, no separate Prodigy password to remember. The first time someone signs in this way, their Prodigy account is created automatically with the right name and department, so you don't need to create accounts by hand first.

{% callout type="note" title="SAML, specifically" %}
This guide covers connecting Google Workspace via SAML. A lighter-weight Google sign-in option (OAuth/OIDC, similar to a "Sign in with Google" button) is coming soon as a separate guide, the two aren't the same setup.
{% /callout %}

## Before you start

You'll need:

- A Google Workspace **admin** account with rights to add apps (Admin console access)
- A Prodigy **organization admin** account
- About 15 minutes

## Step 1: Start the wizard in Prodigy

In Prodigy, go to your organization's **Settings → Integrations → SAML Authentication** and choose **Google Workspace** when it asks which identity provider you're connecting. This screen shows you three values you'll need in a few minutes:

- **ACS URL**
- **SP Entity ID**
- **SP Metadata URL**

Keep this tab open, you'll come back to it.

## Step 2: Create the custom SAML app in Google

1. Sign in to [admin.google.com](https://admin.google.com) with your admin account.
2. Go to **Apps → Web and mobile apps**.
3. Click **Add app → Add custom SAML app**.
4. Give the app a name, "Prodigy" works fine, and click **Continue**.
5. Google now shows you *its own* sign-in details: an SSO URL, an Entity ID, and a certificate. You don't need to do anything with these by hand, just click **Download Metadata** to save them as a file, then click **Continue**. Prodigy's wizard can read that file directly instead of you copying each value one at a time.
6. On the next screen, paste the **ACS URL** and **SP Entity ID** from Prodigy's wizard (Step 1) into the matching **ACS URL** and **Entity ID** fields. Click **Continue**.

## Step 3: Map the attributes

By default, Google Workspace sends nothing to a custom SAML app until you explicitly map it. On the **Attribute mapping** screen, click **Add mapping** for each of these:

| Google Directory attribute | App attribute |
| --- | --- |
| Basic Information > Primary email | `mail` |
| Basic Information > First name | `givenName` |
| Basic Information > Last name | `sn` |

All three are required. Prodigy uses them to create and correctly name an account the first time someone signs in.

{% callout type="note" title="About the Name ID" %}
By default, Google uses the person's primary email as their unique sign-in identifier ("Name ID"). That works well for most organizations. If you're planning to load your roster into Prodigy ahead of time so training is already assigned before anyone's first sign-in, ask your Prodigy contact about mapping Name ID to a stable identifier instead of email, so a later email change doesn't disconnect someone from their pre-loaded account. See Google's [custom SAML app documentation](https://knowledge.workspace.google.com/admin/apps/set-up-your-own-custom-saml-app) for how to map Name ID to a custom attribute.
{% /callout %}

Click **Finish**.

## Step 4: Turn on the app for your team

New apps aren't visible to anyone in your organization until you turn them on.

1. On the app's overview page, click **User access**.
2. Choose who should get access, usually **ON for everyone**, unless you'd rather roll it out to a smaller group first.
3. Click **Save**.

{% callout type="note" title="This can take a few hours" %}
Google says access changes can take up to 24 hours to apply, though it's often much faster. If someone tries to sign in right away and it doesn't work, give it a little time before troubleshooting further.
{% /callout %}

## Step 5: Finish the wizard in Prodigy

Back in the Prodigy tab from Step 1, either upload the metadata file you downloaded in Step 2, or paste in by hand:

- The **Entity ID** Google showed you
- The **SSO URL** Google showed you
- The **Certificate** Google showed you

Then choose which department new sign-ins should land in by default and save. One more step confirms it's actually working.

## Step 6: Confirm it's working

Saving doesn't prove the connection works, so Prodigy checks for you. The moment you save, a panel appears reading **Waiting for the first sign-in… this page updates automatically.**

Leave that tab open and do a real sign-in:

1. Open the Google Apps grid, the dot icon next to your profile photo in Gmail or any other Google Workspace app.
2. Click the Prodigy tile you created in Step 2.
3. You should land in Prodigy, already signed in.

Back on the settings tab, the panel turns green and names who signed in:

**It works! someone@yourdomain.com signed in via SAML Authentication a few seconds ago.**

That's your confirmation the connection is live. It's also the only real test available: an IdP-initiated setup has no meaningful "test connection" button, because a valid sign-in has to start at Google and come back to us.

{% callout type="note" title="Only new sign-ins count" %}
The check only counts sign-ins that happen after you save, so re-saving can't confirm itself against an older sign-in. If you change the configuration later, sign in again to re-confirm.
{% /callout %}

If nothing arrives after about 30 seconds, the wizard adds a hint:

**No sign-in received yet. Double-check the IdP Entity ID matches exactly, and that your users are assigned to the Prodigy app in your identity provider.**

Those two causes account for most first attempts that don't work. A mistyped Entity ID is the more common one, and it fails quietly: the assertion never gets matched to your organization at all, so nothing appears anywhere.

## How your team signs in

This is what's called an "IdP-initiated" sign-in, meaning your team starts from Google, not from Prodigy's own login page. Once it's turned on, anyone with access can open the Google Apps grid (the dot icon next to their profile photo in Gmail or any other Google Workspace app) and click the Prodigy tile to be signed in automatically. There isn't a "Sign in with Google" button on Prodigy's login page yet, so it's worth pointing your team to that app grid, or bookmarking it, so they know where to start.

## Keeping an eye on sign-ins

The **Recent sign-in activity** card on the same settings page lists every SSO sign-in attempt, including the failures, with the reason each one was rejected. A person's first successful sign-in is marked **First sign-in — account created**, so you can watch accounts being provisioned as your team comes online.

If someone tells you they can't sign in, start here. It will usually tell you what went wrong without needing to open a ticket.

## Need help?

If anything on your screen doesn't match what's described here, or a sign-in isn't working, reach out to [support@prodigyems.com](mailto:support@prodigyems.com) with a screenshot of where you're stuck and we'll help sort it out.
