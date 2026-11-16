---
title: Continuous Series
description: Track attendance at sessions that keep coming, such as M&M Rounds, session by session.
---

A continuous series is a set of classes where each one is a session of the same recurring meeting, such as M&M Rounds. Pulse counts sessions, not dates: each provider owes the sessions held while they were employed, and the Matrix shows attended of owed, for example 9/12. {% .lead %}

---

## How a series is judged

A session is a class in the series. Its date is the date of the class's earliest scheduled session, or the day the class was created when nothing is scheduled.

- A provider **owes** a session when it was held on or after their start date and on or before their termination date. See [Employment Dates](/docs/pulse/employment-dates).
- A provider has **attended** a session when they complete that class in Prodigy, at any time.
- Each series has a number of **days to complete**. An owed session that is not yet attended is Due soon while those days run, and Overdue after.

| The provider | Status |
| --- | --- |
| Has attended every session owed, or owes none | Compliant |
| Has an unattended session still inside its days to complete | Due soon |
| Has an unattended session past its days to complete | Overdue |

Completing a session late still counts. The session stops being overdue when the provider completes it.

{% callout type="warning" title="Set start dates first" %}
A provider with no start date has no lower limit, so Pulse counts every past session of the series as owed. Set employment dates before you create a series requirement.
{% /callout %}

## Create a series

1. Open **Pulse > Continuous series** and click **New series**.
2. Enter a name. It must be unique in your organization.
3. In the organization view, choose a **Department**, or leave it **Organization-wide**.
4. Set **Days to complete**. It starts at 90.
5. Click **Create series**.

## Add sessions

1. On the series row, open **Actions** and choose **Manage**. A panel opens below the list.
2. Under **Member classes**, click **Add class** and pick the class for that session.
3. Repeat for each session as it is scheduled.

Only your organization's own classes can join a series, and a class can belong to one series only. Removing a class from the series, or deleting the series, leaves the class in your catalog.

## Require it

A series does nothing until a requirement uses it. Create a requirement of kind **Continuous series**, pick the series, and choose who it applies to. See [Create and Change Requirements](/docs/pulse/requirements).

With **Create assignments automatically** on, Pulse assigns each new session to everyone employed on the day it is held, due within the series' days to complete. Only sessions held on or after the day the setting was turned on are assigned.

## Department view

The department view lists organization-wide series as well as its own, and can change only its own.

## Limits

- A series requirement has no sign-off. Attendance is the only way to meet a session.
- A series requirement cannot be snoozed.
- The class builder has no field for choosing a series. Add each session from the **Manage** panel.
- Deleting a series is not blocked when a requirement uses it. Delete the requirement first.
- Remove a series' classes before you delete it. A class that was in a deleted series cannot join another series.
