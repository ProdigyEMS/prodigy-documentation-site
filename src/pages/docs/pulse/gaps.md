---
title: Work a Gap
description: Open one provider's standing on one requirement, see why, and fix it by signing off, verifying, snoozing or assigning a follow-up.
---

The gap page shows one provider's standing on one requirement: the status, the reason in words, the actions that can fix it, and a place to assign a follow-up and leave comments. {% .lead %}

---

## Open a gap

- On the **Roster**, click the provider's name or the requirement's name.
- On the **Matrix**, click any cell that is not Compliant.
- On a requirement's page, click a person in its table.

The back link returns you where you came from, with the same filters, page and sort.

Screening rows, assignment rows and rows for people no longer active have no gap page.

{% figure src="/images/pulse/gap-page.png" alt="A gap page with the provider and requirement in the title, the reason, the fix buttons, the follow-up picker and the comments" /%}

## Why it has this status

Under the title, Pulse states the reason in up to three sentences: where the provider stands, what is on record, and the rule. For example: "Expired 12 days ago, on October 30, 2026." or "Never signed off. Due every 12 months."

Two reasons are worth knowing:

- "The license is suspended, which counts as expired whatever its date."
- "The certificate on file has no expiration date." This item counts as Compliant.

## Fix it

Only the buttons that apply to the item are shown.

| Button | What it does |
| --- | --- |
| Sign off / Record attestation | Records that the provider met the requirement. See below. |
| Verify with National Registry | Checks an NREMT certification. See [National Registry Verification](/docs/pulse/national-registry). |
| Add certification | Opens the add certification form, for a missing certification |
| View certification | Opens the certification on file |
| View evidence | Opens the file attached to the sign-off |
| Snooze / Edit snooze | Sets the item aside until a date. See below. |

## Sign off

A sign-off is a training officer's record that the provider met the requirement on a date. It is the only way to meet an Administrative or Skill requirement, and one of the ways to meet a Class requirement that allows it.

1. Click **Sign off** (Administrative, Skill) or **Record attestation** (Class).
2. Enter the date. It cannot be in the future.
3. Optionally add a **Note** and attach a file: a copy of the record, the skill sheet, or other evidence. JPEG, PNG and PDF are accepted.
4. Click **Sign off**, or **Record attestation** for a Class.

{% figure src="/images/pulse/sign-off-dialog.png" alt="The Sign off dialog with the date, note and optional attachment" /%}

The sign-off is saved under your name on the provider's record.

**Who can sign off.** You need a Training Officer or Admin role at the organization level. If the requirement says **Only specific people**, you must be one of them. A role on a department alone is not enough, in either view.

{% callout title="A sign-off cannot be removed in the app" %}
There is no button to delete a sign-off. Check the date and the provider before you save.
{% /callout %}

## Snooze

Snoozing sets an item aside until a date. Use it when the gap is known and being handled, such as a renewal already submitted.

1. Click **Snooze**.
2. Choose **Snooze until**. The earliest date is tomorrow.
3. Optionally give a **Reason**.
4. Click **Snooze**.

{% figure src="/images/pulse/snooze-dialog.png" alt="The Snooze dialog with the snooze until date and reason" /%}

While snoozed, the item:

- keeps its status, with **Snoozed** in front of it, and stays on the Roster;
- leaves the Overview cards, the attention list, the weekly digest and reminder emails;
- gets no automatic assignment.

The snooze ends by itself after its date. To change or end it sooner, click **Edit snooze**, then **Save** or **Remove snooze**.

| Can be snoozed | Cannot be snoozed |
| --- | --- |
| A certification that is on file | A missing certification (add the certification instead) |
| Class, Administrative and Skill items | Continuous series, assignments, screening matches |

Snoozing, like signing off, needs a Training Officer or Admin role at the organization level.

## Assign a follow-up

A follow-up puts a gap on one person's list.

- Under **Follow-up**, choose a Training Officer or Admin in **Assigned to**. Choose **Nobody** to leave it unassigned.
- The person sees it under **Waiting on you** on their Overview, and it counts in the number on the Pulse sidebar item.

Pulse never opens a follow-up by itself. One is created the first time someone is assigned or a comment is posted, and there is at most one open follow-up for a provider and requirement.

**A follow-up closes itself.** There is no Complete button. Each night at 3:30 a.m. Eastern, Pulse closes every follow-up whose item is no longer Overdue or Missing. A snoozed gap keeps its follow-up open.

A follow-up has no due date, and assigning one sends no email.

## Comments

Any Training Officer or Admin who can open the gap can read and add comments, up to 2,000 characters each. Each comment shows its author and date. You can delete your own.

## Other follow-ups

Screening matches create their own follow-up for organization Admins. It opens from **Waiting on you** as a separate page with **Owner**, **Due**, **Complete** and **Dismiss**.
