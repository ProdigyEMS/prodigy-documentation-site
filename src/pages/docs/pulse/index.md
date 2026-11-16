---
title: What Is Pulse
description: Pulse tracks every provider in your organization against the certifications, classes, sign-offs and screening you require.
---

Pulse is the compliance dashboard in Prodigy. You tell it what each provider must hold or complete, and it shows who is compliant, who is coming due, who is overdue and who has nothing on file. It also screens your roster against the OIG exclusion list and checks NREMT certifications with the National Registry. {% .lead %}

{% callout title="Early access" %}
Pulse is being turned on for organizations in stages. If you do not see the Monitor and Configure menus described below, see [Getting Pulse](#getting-pulse).
{% /callout %}

---

## What Pulse tracks

A **requirement** is one thing your organization expects of a set of providers. Each requirement has a **kind**, and the kind decides what counts as done.

| Kind | Example | Met by |
| --- | --- | --- |
| Certification | AHA BLS CPR, a state EMS license | A certification on the provider's record, read by its expiration date |
| Class | Annual bloodborne pathogens training | Completing the class in Prodigy, a training officer's sign-off, or an outside completion |
| Continuous series | M&M Rounds | Attending each session held while the provider is employed |
| Administrative | An OSHA acknowledgment | A training officer's sign-off |
| Skill | High-performance CPR | A training officer's sign-off after watching the skill |

Pulse also reports two things that are not requirements you define:

- **OIG exclusion screening.** Active members are compared with the OIG List of Excluded Individuals and Entities. See [OIG Exclusion Screening](/docs/pulse/screening).
- **Assignments.** Every open class and training plan assignment appears on the Roster next to requirements. One with no due date reads Compliant.

[Requirement Kinds](/docs/pulse/requirement-kinds) explains each kind in full, and [Statuses](/docs/pulse/statuses) explains how each one is judged.

## Where to find it

Pulse is an item in the left sidebar for Training Officers and Admins. It opens two groups of pages.

| Group | Page | What you do there |
| --- | --- | --- |
| Monitor | [Overview](/docs/pulse/overview) | Read the counts and see which requirements have open gaps |
| Monitor | [Roster](/docs/pulse/roster) | Work one row per provider and requirement: filter, remind, sign off, export |
| Monitor | [Matrix](/docs/pulse/matrix) | See every provider against every requirement in one grid |
| Monitor | [National Registry](/docs/pulse/national-registry) | Verify NREMT certifications |
| Monitor | [Screening](/docs/pulse/screening) | Review OIG exclusion matches (organization Admins only) |
| Configure | [Requirements](/docs/pulse/requirements) | Create, change, pause and delete requirements |
| Configure | [Programs](/docs/pulse/programs) | Bundle requirements for an audit or accreditation |
| Configure | [Continuous series](/docs/pulse/continuous-series) | Define a series of sessions that never ends |
| Configure | [Notifications](/docs/pulse/notifications) | Turn on the weekly digest and the monthly report |

Two related pages live outside the Pulse menu: [Groups](/docs/pulse/groups) is a tab under **Users**, and API tokens are under **Settings** (see [Pulse in the Public API](/docs/pulse/api)).

The sidebar item carries a count of the open follow-ups in the view you are in, everyone's and not only yours. For organization Admins it also counts screening matches waiting for review. It reads **New** when that count is zero.

## Organization view and department view

Pulse has the same pages in both views, with a different reach.

- **Organization view** covers every department. It is the only view with Screening, and the only view where you can edit programs, set employment dates or pick a department for a new requirement.
- **Department view** (the Training Officer view) covers one department. Requirements you create there apply to that department only.

Counts everywhere cover active members only. [Who Can Do What](/docs/pulse/roles) lists what each role can see and change.

## What providers see

Providers never open the Pulse pages. Each provider sees their own items in a **My requirements** panel on their dashboard, with the name of the person to ask about each one. See [My Requirements](/docs/pulse/my-requirements).

## Getting Pulse

Pulse is part of the organization license. There is no separate purchase, and Prodigy turns it on for your organization.

Until it is on, the Pulse page shows an **Activation required** panel. Click **Contact Prodigy to activate** to open an email to [support@prodigyems.com](mailto:support@prodigyems.com). There is no setting you can switch yourself.

Once Pulse is on, start with [Set Up Pulse](/docs/pulse/setup).

## Limits to know before you rely on it

- Exclusion screening matches on first and last name only. Every match needs a person to review it, and a name spelled differently from the OIG record is not matched.
- National Registry verification covers NREMT certifications only. It does not check state licenses.
- Pulse reads the fields typed on a certification (type, level, state, expiration). It does not read the uploaded card image.
- A certification with no expiration date on file counts as compliant.
- History for the trend chart is captured once a month, so the chart needs two months before it draws a line.
