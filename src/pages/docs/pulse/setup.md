---
title: Set Up Pulse
description: The order to set Pulse up in, from the first requirement to the first weekly digest.
---

A new organization starts with nothing tracked. This page gives an order that works, and explains the setup checklist that sits at the top of the Overview page. {% .lead %}

---

## The setup checklist

**Get Pulse set up** appears above the counts on **Pulse > Overview**. Each step checks your live data, so a step is done when the data says so, not when you tick it.

{% figure src="/images/pulse/setup-checklist.png" alt="The Get Pulse set up checklist on the Overview page with its progress line" /%}

| Step | Done when | Its button opens |
| --- | --- | --- |
| Create your first requirement | At least one active requirement exists | The new requirement steps |
| Organize providers into groups | No provider is outside every group | **Users > Groups** |
| Add provider dates of birth | No provider who holds an NREMT certification is missing a date of birth | The user import |
| Verify NREMT registrations | No NREMT certification is unverified. Shown only if your organization holds NREMT certifications. | **National Registry** |
| Run an exclusion screening | Any screening has covered your organization: the monthly one, one run when a member was added, or one started from the Screening page | **Screening** |

Finished steps fold away, and the checklist collapses to **Setup complete** when every step is done. You can dismiss it sooner. The dismissal is remembered in that browser only, and **Show setup checklist** brings it back.

{% callout title="Screening needs an organization Admin" %}
The exclusion screening step is listed for everyone, but only an organization Admin in the organization view can open Screening and run it.
{% /callout %}

## A setup order that works

### 1. Put providers in groups

Requirements can apply to everyone, to groups, or to named people. Groups such as Paramedics or Field Training Officers let one requirement follow a role as people join and leave it. Create them under **Users > Groups**. See [Groups and Suggested Members](/docs/pulse/groups).

### 2. Start with certifications

Certification requirements read records you already hold, so they show results immediately and ask nothing new of providers. On an empty **Requirements** page, the chips **NREMT**, **State EMS Certification**, **AHA BLS CPR** and **Driver's License** each open the new requirement steps with that certification filled in.

See [Create and Change Requirements](/docs/pulse/requirements).

### 3. Add classes, sign-offs and series

Add the classes people must complete, the records a training officer signs off, and any continuous series. Each of these names an **owner**: the person providers are told to ask, and who gets the Monday email about its gaps.

Class and series requirements can create assignments for you. Read [how automatic assignments behave](/docs/pulse/requirements#automatic-assignments) before you turn a large one on, because providers are emailed when an assignment is created.

### 4. Set employment dates

A continuous series only counts sessions held between a provider's start date and termination date. Without a start date, every past session counts as owed. Set the dates before you create a series requirement. See [Employment Dates and People Who Left](/docs/pulse/employment-dates).

### 5. Verify NREMT certifications

Open **Pulse > National Registry** and verify the certifications listed as Unverified. Verification looks up the certification number, so most checks need nothing else. A date of birth is used only when that lookup is unavailable. See [National Registry Verification](/docs/pulse/national-registry).

### 6. Run the first exclusion screening

An organization Admin opens **Pulse > Screening** and clicks **Run screening now**. Review each match that comes back. The checklist step may already show as done, because the monthly screening and the screening of a newly added member count as well. See [OIG Exclusion Screening](/docs/pulse/screening).

### 7. Turn on the weekly digest

The digest and the monthly report are off until someone turns them on. Open **Pulse > Notifications**, switch on the weekly digest and add its recipients. See [Digest, Report and Reminders](/docs/pulse/notifications).

## After setup

- The **Overview** trend chart draws its first line after two monthly captures, taken on the 1st of each month.
- New members are picked up automatically by any requirement that applies to everyone, and are screened against the exclusion list when they are added.
- Group suggestions, automatic assignments and National Registry re-checks run overnight, so changes made today can show results tomorrow morning.
