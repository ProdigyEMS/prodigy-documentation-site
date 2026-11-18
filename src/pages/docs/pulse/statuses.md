---
title: Statuses
description: What Compliant, Due soon, Overdue, Missing, Pending review and Excluded mean in Pulse, for each kind of item.
---

Every row in Pulse carries one status. The same six statuses are used on the Overview, the Roster, the Matrix, in emails and in the public API. {% .lead %}

---

## The six statuses

Listed from most to least severe. A provider's overall status is the most severe status among their items.

| Status | Meaning |
| --- | --- |
| Excluded | A confirmed match on the OIG exclusion list |
| Overdue | The due date has passed, or the certification has expired |
| Missing | Nothing on file that could meet the requirement |
| Pending review | An exclusion match that an Admin has not reviewed yet |
| Due soon | Due inside the warning window |
| Compliant | Met, and not yet inside the warning window |

## Labels you will also see

| Label | What it is |
| --- | --- |
| Expired | An Overdue certification |
| Suspended, Revoked | A license whose status is suspended or revoked. It counts as Overdue whatever its expiration date. |
| Snoozed | A marker added in front of the status. The status underneath does not change. See [Snooze](/docs/pulse/gaps#snooze). |
| Doesn't apply | A Matrix cell for a requirement that does not apply to that provider. There is no such row on the Roster. |

## By kind of item

### Certification

| The record shows | Status |
| --- | --- |
| No matching certification | Missing |
| License status suspended or revoked | Overdue |
| Marked as never expiring | Compliant |
| No expiration date | Compliant |
| Expiration date before today | Overdue |
| Expiration inside the warning window | Due soon |
| Expiration later than that | Compliant |

An expired certification is Overdue, not Missing. Missing means no active certification of that type at all. A certification that expires today is Due soon until the day ends.

### Class, Administrative and Skill

| The provider | Status |
| --- | --- |
| Has never met it, inside the grace period for new members | Due soon |
| Has never met it otherwise | Missing |
| Has met a requirement that is needed once | Compliant |
| Is past the next due date | Overdue |
| Is inside the warning window | Due soon |
| Is earlier than the warning window | Compliant |

### Continuous series

| The provider | Status |
| --- | --- |
| Has attended every session owed, or owes none | Compliant |
| Has an unattended session inside its days to complete | Due soon |
| Has an unattended session past its days to complete | Overdue |

### Assignment

Class and training plan assignments appear on the Roster as their own rows.

| The assignment | Status |
| --- | --- |
| Completed | Compliant |
| Due date has passed | Overdue |
| Due within 30 days | Due soon |
| Due later, or no due date | Compliant |

An assignment that a requirement created is not listed a second time. The requirement's row covers it.

### Exclusion screening

| The match | Status |
| --- | --- |
| Confirmed by an Admin | Excluded |
| Not reviewed yet | Pending review |
| Cleared by an Admin | No row |

Screening rows are shown to organization Admins only.

## The warning window

Due soon follows each requirement's own **Warn before due** setting, which starts at 30 days. Assignments use a fixed 30 days. For this reason the Overview card **Expiring within 90 days** counts by days, not by the Due soon status.

## What does not change a status

- **Snoozing** an item takes it out of the Overview cards, the attention list, the weekly digest and reminders. It stays on the Roster and in the status chip counts there, and its status stays.
- **No expiration date on file** counts as Compliant. The gap page says so in words.
- **People who left** keep the status they had on their last day, shown in gray, and are counted nowhere. See [Employment Dates and People Who Left](/docs/pulse/employment-dates).
