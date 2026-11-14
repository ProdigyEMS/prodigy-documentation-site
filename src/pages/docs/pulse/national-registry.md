---
title: National Registry Verification
description: Verify NREMT certifications with the National Registry from Pulse, and understand what verified means.
---

Pulse can check an NREMT certification with the National Registry of Emergency Medical Technicians and record the result. A verified certification is one whose expiration date in Prodigy matches the Registry's. {% .lead %}

Training Officers and Admins can verify from **Pulse > National Registry**. A provider can verify their own certification.

{% callout title="What this checks" %}
Verification confirms a National Registry certification. It does not check a state license to practice, and it does not check any other certification type.
{% /callout %}

---

## The National Registry page

{% figure src="/images/pulse/national-registry.png" alt="The National Registry page listing each provider's NREMT certification with its verification status and last verified date" /%}

The page lists every active NREMT certification held by an active member, with one of three statuses.

| Status | Meaning |
| --- | --- |
| Verified (NREMT) | The National Registry has confirmed this certification at least once |
| Manually verified | Someone in your organization ticked Verified on the certification |
| Unverified | Neither |

**Last verified** is the date of the latest confirmation by the Registry. Use the **Verification** filter and the search box to narrow the list.

## Verify a certification

1. Click **Verify** on the row.
2. Read the result.

{% figure src="/images/pulse/nremt-verify-dialog.png" alt="The Verification result dialog showing the registry status with the NREMT and Prodigy expiration dates" /%}

| Result | What it means | What to do |
| --- | --- | --- |
| Confirmed | The Registry's expiration date matches Prodigy's. The certification is marked verified. | Nothing |
| Dates differ | The Registry reports a different expiration date. Prodigy's record is left unchanged, except in the one case described under [When Prodigy updates the date for you](#when-prodigy-updates-the-date-for-you). | Open the certification and correct the date. A later Registry date usually means it was renewed. |
| No record | The Registry returned nothing for this certification number | Check the number on the certification |
| Could not be reached | The Registry did not answer | Try again later |
| Date of birth needed | The lookup by number was unavailable and no date of birth is on file | Add the provider's date of birth, then verify again |
| Daily limit reached | Today's limit on checks was reached | Try again tomorrow |

You can also start a verification from a Roster row, from a gap page, and from the provider's certifications list.

## What is sent to the Registry

Prodigy first looks up the certification number alone. No name and no date of birth are sent.

If that lookup is unavailable, Prodigy sends the certification number with the provider's stored date of birth. Prodigy never sends a name or a Social Security number.

From the answer, Prodigy keeps the registry status, the level and the expiration date. It discards everything else.

## Dates of birth

A date of birth is needed only for the second lookup. It can be entered in four places:

- by the provider, on their account profile;
- by a Training Officer or Admin, on the provider's profile in the department;
- in the user import, in an optional `date of birth` column in YYYY-MM-DD format. The import fills it only where none is on file;
- by the provider, when they add an NREMT certification and are offered verification.

A date of birth is visible to the provider, to Training Officers and Admins on the provider's profile, and to organization Admins when they review an exclusion match. It is never written to logs or stored with a verification result.

## Automatic re-checks

Each night at 2:00 a.m. Eastern, Prodigy re-checks NREMT certifications for organizations with Pulse, using the lookup by number only.

- Certifications that expire soonest go first. Expired certifications follow, where the provider completed a class in the last 90 days.
- A certification is re-checked at most once every 7 days. With a large roster, a given certification can wait longer than that, because the nightly run has a fixed number of checks.
- When the Registry's date differs, the nightly check records the difference and leaves your record unchanged.

## When Prodigy updates the date for you

Prodigy changes a stored expiration date in one case only: a verification that used the date of birth lookup finds a later expiration at the Registry. It then saves the new date, keeps the old one, estimates the issue date, and emails the provider "Your National Registry certification was renewed".

The provider is asked to confirm the estimated issue date, or enter the real one from their new card, with **Confirm Issue Date** on their certifications list. The Registry does not supply an issue date.

The nightly re-check never changes a date.

## Limits

- **Verified (NREMT)** means confirmed at least once. A later difference in dates does not remove the status.
- Each certification can be checked on request 3 times a day, and each person can make 10 checks a day.
- Lapsed and inactive registrations are reported as no record.
- If the page shows **National Registry verification isn't turned on**, contact Prodigy support. The list still shows the last recorded status of each certification.
