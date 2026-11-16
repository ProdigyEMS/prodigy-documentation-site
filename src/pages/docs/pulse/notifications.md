---
title: Digest, Report and Reminders
description: Turn on the weekly Pulse digest and the monthly report, and see every email Pulse can send and when.
---

The weekly digest and the monthly report are off for a new organization, and are set under **Pulse > Notifications**. The other Pulse emails follow from what you set up, as the table below shows. {% .lead %}

---

## Every email Pulse sends

| Email | Goes to | When | Set up |
| --- | --- | --- | --- |
| Weekly Pulse digest | Training Officers and Admins you add | Mondays at 7:00 a.m. Eastern | **Pulse > Notifications** |
| Owner's Monday email | The owner of a requirement with open gaps | Mondays at 7:00 a.m. Eastern | Automatic, from naming an owner |
| Monthly Pulse report | Training Officers and Admins you add | The 1st of the month at 8:00 a.m. Eastern | **Pulse > Notifications** |
| Reminder | Providers you select | When you send it | The [Roster](/docs/pulse/roster#send-reminders) or the Matrix |
| Assigned class | A provider given an assignment by a requirement | When the assignment is created | [Automatic assignments](/docs/pulse/requirements#automatic-assignments) |
| Certification renewed | A provider whose NREMT expiration Prodigy updated | When it happens | Automatic |

The schedules are fixed. Pulse sends no email about exclusion screening to providers.

## Turn on the weekly digest

1. Open **Pulse > Notifications**.
2. In the organization view, pick the scope: **Whole organization** or one department. Each has its own settings.
3. On the **Weekly Pulse digest** card, click **Set up**.
4. Tick **Send the weekly digest**.
5. Under **Include certifications expiring within**, choose 30, 60 or 90 days, or several.
6. Add recipients.
7. Click **Save**.

Only Training Officers and Admins in that scope can be recipients. Someone who loses that role stops receiving it. A digest that is on with no recipients is not sent.

### What the digest contains

- Certifications that expired recently, and suspended or revoked licenses
- Certifications expiring inside the windows you chose
- Missing required certifications
- Classes that are overdue or due soon
- Sign-offs needed or coming due
- The number of exclusion matches waiting for review, for recipients who are organization Admins

Snoozed items are left out. If there is nothing to report, no digest is sent that week.

### Act from the email

The most urgent certification items in the digest carry links.

| Link | What it does |
| --- | --- |
| Mark lapsed | Archives a certification that is expired, suspended or revoked |
| Snooze one week | Snoozes the item for 7 days |
| Renew | Opens the certification's edit form |

A link opens a confirmation page first, and nothing changes until you confirm. Links work for 14 days. **Mark lapsed** and **Snooze one week** work once. A link acts as the person the email was sent to, so do not forward a digest.

## The owner's Monday email

Each person gets at most one Pulse email per organization on a Monday.

- An owner who is also a digest recipient finds the requirements they own inside their digest.
- An owner who is not a digest recipient gets a shorter email listing the requirements they own that have open gaps, worst first. It is sent only when there is a gap.

There is nothing to switch on. Naming an owner on a requirement is what causes it.

## Turn on the monthly report

On the **Monthly Pulse report** card, click **Set up**, switch it on, add recipients and save. The scope and recipient rules are the same as for the digest.

The report contains the Overview counts and each requirement's compliance percentage, with a link to Pulse. It has no attachment. It is sent every month, including months when everything is compliant.

## Reminders

A reminder is sent by a person, from the Roster or from a Matrix column. Each provider receives only their own open items, at most once a day. See [Send reminders](/docs/pulse/roster#send-reminders).

## Organization notification rules are separate

**Settings > Notifications** in the organization view holds rules for membership activity: a member added, and a member removed or deactivated. Those rules are managed by organization Admins and do not control any Pulse email.

## Limits

- Recipients of the digest and the report must be Training Officers or Admins. Providers cannot be added.
- The digest has three expiring windows: 30, 60 and 90 days.
- The day and time of each email cannot be changed.
- Reminders cannot be scheduled.
