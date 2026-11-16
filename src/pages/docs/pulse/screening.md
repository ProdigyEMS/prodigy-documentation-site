---
title: OIG Exclusion Screening
description: How Pulse screens your roster against the OIG exclusion list, how an Admin reviews a match, and what the screening does not cover.
---

Pulse compares your active members with the List of Excluded Individuals and Entities (LEIE) published by the Office of Inspector General. A name that matches is put in front of an organization Admin, who decides whether it is the same person and records why. {% .lead %}

The Screening page is open to organization Admins only, in the organization view. Training Officers cannot open it, review a match or see the OIG record.

{% callout type="warning" title="A match is a name match" %}
Pulse matches on first and last name only. It does not compare dates of birth, NPI numbers, middle names or states. A match is a reason to check, not a finding. Identity can be confirmed only with a Social Security number at the OIG's own search, outside Prodigy.
{% /callout %}

---

## When screening runs

- **Every month.** Prodigy checks the OIG's file every day at 7:00 a.m. Eastern. When the OIG publishes a new file, every organization with Pulse is screened that day. Each monthly cycle, which opens on the 11th, also gets one screening run even if no new file was published.
- **When a member is added.** A new member is screened against the most recent file Prodigy holds.
- **On request.** An Admin clicks **Run screening now**.

Only active members who have not been terminated are screened.

## The Screening page

The panel at the top shows:

| Item | Shows |
| --- | --- |
| OIG LEIE dataset | The file in use, its record count and the date Prodigy loaded it. It reads **stale (over 45 days old)** in red if no new file has been loaded for 45 days. |
| Last screening run | When your roster was last screened, how many members, and how many new matches |
| Next scheduled | The next 11th. A file published late is screened the day it arrives. |
| Matches | Pending, cleared and confirmed counts |

The table below lists matches. It opens filtered to **Pending review**. Change the **Status** filter to see cleared and confirmed matches.

When a screening has run and nothing matched, the page reads **Nothing flagged. Your roster is clear.**

## Review a match

1. Click **Review** on a row.
2. Compare the **Prodigy member** panel with the **OIG LEIE record** panel. The member panel shows the name, email and date of birth on file. The record panel shows the excluded person's name, category, specialty, exclusion type and date, state, date of birth, NPI, and any reinstatement or waiver.
3. If you need to confirm identity, click **Open exclusions.oig.hhs.gov** and search there.
4. Type a resolution note. Both buttons stay disabled until you do.
5. Click **Not a match: clear permanently** or **Confirm exclusion**.

Every decision is recorded with the file version, your name, the date and your note.

| Decision | Effect |
| --- | --- |
| Not a match: clear permanently | The provider has no screening row. That OIG record is never flagged for that provider again, including when later monthly files arrive. |
| Confirm exclusion | The provider's status becomes **Excluded**, the most severe status in Pulse |
| No decision yet | The provider shows **Pending review** on the Roster |

A decision can be reversed. Open the match again, write a new note, and choose the other button.

## Where screening shows up

- The Pulse sidebar item and the Screening sub-item carry the count of matches waiting, for Admins.
- The Overview's attention list shows **screening matches awaiting review** to Admins.
- The weekly digest and the monthly report give the number of pending matches to recipients who are organization Admins. Other recipients get the same email without that number.
- A provider with a pending or confirmed match shows **Pending review** or **Excluded** on the Roster, in a row named **OIG exclusion list**. Only organization Admins get that row, on screen and in the Roster's exports. The OIG record and the decision stay on the Screening page. Screening does not appear on the Matrix.
- Training Officers see no match and no count of matches anywhere in Pulse.
- Providers are never told about a match by Pulse. Screening is left out of reminders and out of each provider's own list.

## Export the evidence

Click **Export** to download `compliance-screening-evidence-YYYYMMDD.csv`. It has a row for every active member: one row for each match, and one `no_match` row for a member with none. It therefore also shows who was screened and did not match.

Its columns are Last Name, First Name, Email, Dataset, Dataset Ingested, Screened At, Disposition, Excluded Name, Exclusion Type, Exclusion Date, Matched At, Resolved By, Resolved At and Resolution Note. Disposition is one of `no_match`, `pending`, `cleared` or `confirmed`. The file does not contain dates of birth.

The export ignores the table's filters.

## What screening does not cover

- **One list.** Only the OIG LEIE is screened. SAM.gov, state Medicaid exclusion lists and licensing board actions are not.
- **Names only.** A namesake is flagged. A person whose name is spelled differently in Prodigy than on the OIG record, or who is listed under a former name, is not matched.
- **People only.** Vendors, contractors and businesses are not screened.
- **Active members only.** Terminated and inactive members are not screened.
- **The file Prodigy holds.** There is no live lookup at the OIG. A new member is screened against the most recent monthly file.
- **Waivers.** A waiver on the OIG record is shown in the review and does not clear a match. A record with a past reinstatement date is skipped.
