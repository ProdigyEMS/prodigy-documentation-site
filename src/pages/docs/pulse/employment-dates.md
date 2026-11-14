---
title: Employment Dates and People Who Left
description: Set a provider's start and termination dates for Pulse, and see how people who left are shown and counted.
---

Pulse counts current providers. A person who has left is removed from every count, reminder and email, and their rows are kept as a frozen record of where they stood on their last day. {% .lead %}

---

## Set employment dates

Employment dates are a start date and a termination date kept for Pulse. They are set in the organization view, by a Training Officer or Admin at the organization level.

1. Open **Users** and click the provider.
2. Find **Employment dates** and click **Edit dates**.
3. Enter a **Start date**, a **Termination date**, or both. Leave a date blank to keep that side open.
4. Click **Save dates**.

{% figure src="/images/pulse/employment-dates.png" alt="The Employment dates section on a provider's profile with the start date and termination date" /%}

The section says whether the dates came from imported hire and termination dates or were set by hand.

### What the dates change

- **Continuous series.** A provider owes only the sessions held between their start date and termination date. With no start date, every past session counts as owed. See [Continuous Series](/docs/pulse/continuous-series).
- **Leaving.** A provider whose termination date is before today is no longer active in Pulse.

The start date is not used for the grace period on new requirements. That counts from the day the person was last added to your organization. See [Requirement Kinds](/docs/pulse/requirement-kinds).

## Who counts as no longer active

| Situation | Their last day |
| --- | --- |
| Termination date before today | The termination date |
| Removed from the organization | The last day they were a member, recorded by a nightly check just after midnight Eastern |
| Moved out of the people one requirement applies to | The day they left it. Only that requirement's row is frozen. |

## How they are shown

They are hidden unless you turn on **Include people no longer active** on the Roster or the Matrix. Their rows are gray, with a line under the name such as "No longer active", the date and the reason.

{% figure src="/images/pulse/roster-no-longer-active.png" alt="The Roster with Include people no longer active on, showing gray rows with the last day under each name" /%}

- The status reads as it stood on the last day.
- The row can be viewed and nothing else. It cannot be reminded, signed off or snoozed.
- A count line states how many people shown are no longer active and how many are current.

## How they are counted

People no longer active are left out of the Overview cards, the status chips, the attention list, reminders, the weekly digest, the monthly report and exclusion screening.

A terminated provider gets no new automatic assignments. Assignments a requirement created for them, and that they have not started, are withdrawn. Work they started or completed is kept.

The [Audit Ready Export](/docs/pulse/exports) includes the people who left during its period, each frozen at their last day, unless you turn that option off.

## Limits

- Pulse has start and termination dates only. There is no leave of absence.
- When a person leaves and later returns, the same rows reopen. The earlier absence is not kept as history.
- A person removed before Pulse was turned on for your organization has no frozen record.
