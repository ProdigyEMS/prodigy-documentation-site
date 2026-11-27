---
title: Requirement Kinds
description: The five kinds of Pulse requirement, what each asks you to enter, and what marks each one done.
---

Every requirement has one of five kinds. The kind decides what counts as done, and it cannot be changed after the requirement is created. To use another kind, delete the requirement and create a new one. {% .lead %}

{% figure src="/images/pulse/wizard-kind.png" alt="The Kind step of the new requirement steps, showing the five kinds as cards" /%}

---

## The five kinds

| Kind | Use it for | Met by | Can assign classes |
| --- | --- | --- | --- |
| Certification | A credential that expires | A matching certification on the provider's record | No |
| Class | A Prodigy class, once or on a cycle | Class completion, a sign-off, or an outside completion | Yes, when a class is linked |
| Continuous series | Sessions that keep coming, such as M&M Rounds | Attending each session owed | Yes |
| Administrative | A record that must be on file | A training officer's sign-off | No |
| Skill | A skill shown in person | A training officer's sign-off | No |

## Certification

You choose a certification type, a level (or **Any level**), and a state for types that are issued by a state.

A provider meets it with a certification on their record that matches the type, the level if you set one, and the state if you set one. When a provider holds several, Pulse uses the best one: a certification that never expires first, then the latest expiration.

| The record shows | Status |
| --- | --- |
| No matching certification | Missing |
| A license marked suspended or revoked | Overdue, shown as Suspended or Revoked, whatever its date |
| Marked as never expiring | Compliant |
| No expiration date | Compliant |
| Expired | Overdue, shown as Expired |
| Expires inside the warning window | Due soon |
| Expires later | Compliant |

A certification requirement has no sign-off, no grace period for new members, and never creates assignments. Its owner is optional.

## Class

You give it a name, choose **Which class counts** (or no class), choose **How often**, and choose **How it gets marked done**.

**How often** is either **Once** or a number of months between completions, from 1 to 120. The cycle counts from each person's own last completion, so someone who completes it in December is next due the following December, not on a shared calendar date.

**How it gets marked done** has up to three sources. The most recent of them is the date Pulse uses.

- **Completing the class in Prodigy.** Always counts when a class is linked. It goes on the transcript with a certificate and CE hours.
- **A training officer's sign-off.** On by default. It counts toward this requirement only and adds nothing to the transcript.
- **An outside completion on the provider's transcript.** Off by default. It counts when the course name on the outside completion is the same as the requirement's name. Nobody verifies it.

Without a linked class, only a sign-off or an outside completion can mark it done, and nothing can be assigned.

## Continuous series

You choose a series that already exists on the **Continuous series** page. Each session of the series becomes due for everyone it applies to who is employed on the day it is held. Attending means completing that session's class in Prodigy.

The series itself sets how many days a provider has to complete each session. A series requirement has no warning window, no grace period and no sign-off. The series cannot be changed after the requirement is created. See [Continuous Series](/docs/pulse/continuous-series).

## Administrative and Skill

Both are met only by a training officer's sign-off. Use **Administrative** for a record that must be on file, such as an OSHA acknowledgment or a signed agreement. Use **Skill** for something a training officer watches in person, such as BVM ventilation.

You give it a name, describe **What must be on file** (Administrative) or **What they must show** (Skill), and choose **Once** or a number of months between sign-offs. Administrative starts as Once. Skill starts as every 12 months.

The sign-off records who signed and when. A copy of the record, or the skill sheet, can be attached and is optional. Who may sign is set on the Owner step. See [Work a Gap](/docs/pulse/gaps#sign-off).

## Timing rules shared by Class, Administrative and Skill

| The provider | Status |
| --- | --- |
| Has never met it, and is inside the grace period for new members | Due soon, due on the last day of the grace period |
| Has never met it otherwise | Missing |
| Has met a **Once** requirement | Compliant, with no due date |
| Is past the due date of a repeating requirement | Overdue |
| Is inside the warning window before the due date | Due soon |
| Is earlier than the warning window | Compliant |

| Setting | Range | Default |
| --- | --- | --- |
| Months between completions or sign-offs | 1 to 120 | 12 for Class and Skill |
| Warn before due (days) | 1 to 365 | 30 |
| Grace for new members (days) | 1 to 3650, or empty for none | Empty |

{% callout title="What the grace period counts from" %}
The grace period counts from the day the person was last added to your organization in Prodigy. It does not use the start date on their employment dates. Removing someone and adding them back starts the grace period again.
{% /callout %}

## What requirements do not do

- A requirement cannot exclude people. It applies to everyone in its scope, or to the groups and people you list.
- A requirement that is deactivated is left out of every status and count until it is activated again.
- Outside completions are matched by name and are not checked by anyone.
