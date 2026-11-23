---
title: Roster
description: Use the Pulse Roster to filter providers by status, send reminders, sign off, snooze and export.
---

**Pulse > Roster** has one row for each provider and each item that applies to them. It is where the daily work happens: find the rows that need attention, open the certificate or evidence without downloading it, remind people, and export. {% .lead %}

---

## Read the table

{% figure src="/images/pulse/roster.png" alt="The Roster with status chips above a table of provider, requirement, status, last satisfied and due or expires" /%}

| Column | Shows |
| --- | --- |
| Provider | The provider's name. Hover for their email. |
| Requirement | The item's name, with its kind, how a certification was verified, and the owner underneath. Screening rows read **OIG exclusion list** and are shown to organization Admins only. |
| Status | The [status](/docs/pulse/statuses). Click it to preview the certificate when one is stored. |
| Last satisfied | The date it was last met |
| Due / Expires | The due or expiration date, in red when overdue. Hover for the number of days overdue. |

Above the table, a chip for each status shows its row count. Click a chip to filter to that status, and click it again to clear it.

The table shows 10 rows a page and sorts by **Provider**, **Status** (most severe first), **Due / Expires** or **Last satisfied**. There is no department column. Use the **Department** filter instead.

## Find rows

- **Search providers** matches part of a name.
- **Status**, **Type** and **Requirement** each take several values. **Type** lists Certification, Class, Continuous series, Administrative, Skill, Screening and Assignment. The Screening type and the Excluded status are offered to organization Admins only.
- **Department** is available in the organization view.
- **Issues only** hides Compliant rows. Picking a status turns it off, and turning it on clears the status filter.
- **Include people no longer active** adds gray rows for people who left. See [Employment Dates and People Who Left](/docs/pulse/employment-dates).

When you arrive from an Overview card, the card's filters appear as removable chips, such as **Due within 90 days** or **Not snoozed**. Otherwise the Roster restores the filters you last used in that browser tab.

## Open a provider's gap

Click the provider's name or the requirement's name to open the [gap page](/docs/pulse/gaps) for that provider and requirement. It explains the status and holds every action for that one item.

## Row actions

The menu at the end of a row offers only what applies to that row.

{% figure src="/images/pulse/roster-row-actions.png" alt="The row actions menu open on a Roster row" /%}

| Action | Offered when |
| --- | --- |
| Sign off (Administrative, Skill) or Attest (Class) | The item accepts a sign-off and you are allowed to give one. See [Sign off](/docs/pulse/gaps#sign-off). |
| Verify | An NREMT certification is on file and has not been verified by the National Registry |
| Snooze | The item can be snoozed and is not snoozed already. See [Snooze](/docs/pulse/gaps#snooze). |
| Preview certificate | A certificate image or PDF is stored |
| View evidence | The sign-off that met the item has a file attached |
| View | Always. Opens the certification, or the provider's profile. |

Rows for people no longer active offer **View** only.

## Send reminders

A reminder is an email to a provider listing their own open items.

1. Tick the checkbox on a row for each provider you want to remind. Any one of their rows will do.
2. Click **Send reminder**.
3. Confirm in the **Send gap reminders** dialog.

{% figure src="/images/pulse/roster-reminder.png" alt="The Send gap reminders dialog confirming the number of providers selected" /%}

A line above the table then reports how many were sent and how many were skipped, and why.

- Each provider receives only their own items that are Missing, Overdue or Due soon. Snoozed items and screening are never included.
- Each item names who signs it off and whom to ask.
- A provider your organization already reminded today (Eastern time) is skipped. So is a provider with nothing open.
- One send covers up to 500 providers.
- The subject reads "Action needed: N requirements need your attention".

There are no scheduled reminders. Every reminder is sent by a person.

## Export

The **Export** menu has two choices.

- **Spreadsheet of this view** downloads a CSV of every row that matches your current filters, not only the page on screen. Its columns are Last Name, First Name, Email, Department, Item, Type, Status, Due/Expiration Date, Verified, Source Detail, Last Day and Left Scope. The Type and Status columns hold codes such as `training` and `overdue`.
- **Audit Ready Export** opens the dialog described in [Exports](/docs/pulse/exports).

## What the Roster does not do

- No saved views. Saved views are on the [Matrix](/docs/pulse/matrix).
- No bulk sign-off, bulk snooze or bulk assign. To assign a class to everyone with a gap, use the column menu on the Matrix.
- No way to remove a snooze from the row. Open the gap page.
