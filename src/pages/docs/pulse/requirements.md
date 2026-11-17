---
title: Create and Change Requirements
description: Create a Pulse requirement step by step, then edit, pause or delete it, and understand what automatic assignments do.
---

A requirement says what is expected, of whom, who owns it and when it is due. You create one through a short series of steps that ends with a review of exactly what will happen when you save. {% .lead %}

Training Officers and Admins can create and change requirements. In a department view you can change only requirements that belong to that department. Organization-wide requirements are listed there for reference and are changed from the organization view.

---

## Create a requirement

Open **Pulse > Requirements** and click **New requirement**.

{% figure src="/images/pulse/requirements-list.png" alt="The Requirements page listing each requirement with who it applies to, its owner, its rule, its compliance percentage and its gaps" /%}

There are seven steps in the organization view: **Kind**, **Details**, **Who**, **Program**, **Owner**, **Timing** and **Review**. The department view has six, because it has no Program step. Nothing is created until you confirm on the last step, and a later step opens only when the ones before it are complete.

### 1. Kind

Pick one of the five kinds. The kind cannot be changed later. See [Requirement Kinds](/docs/pulse/requirement-kinds).

### 2. Details

The fields depend on the kind. Every kind has a **Name** of up to 200 characters. Providers see this name in their own list and in assignments, so use the words they already use.

{% figure src="/images/pulse/wizard-details.png" alt="The Details step for a Class requirement, with the class, how often, and how it gets marked done" /%}

For a Class, **Next** stays disabled until something can mark it done: a linked class, a sign-off, or an outside completion.

### 3. Who

Choose who it applies to.

- **Everyone in** the organization or department. New hires are included automatically.
- **Only certain groups or people.** Search for groups or people, or paste email addresses separated by commas, spaces or new lines. Someone included by any row is in, and someone in two rows counts once.

In the organization view, a **Department** picker on this step sets the requirement's scope: **Whole organization** or one department. The scope cannot be changed after the requirement is created.

{% figure src="/images/pulse/wizard-who.png" alt="The Who step with groups and people listed in the Included table and the live provider count below" /%}

A count under the step shows how many providers the requirement would apply to and how many would need it today.

{% callout type="warning" title="Deleting a group can widen a requirement" %}
A requirement that lists only groups applies to everyone in its scope if all of those groups are later deleted from **Users > Groups**. The delete dialog warns you. See [Groups and Suggested Members](/docs/pulse/groups#delete-a-group).
{% /callout %}

### 4. Program

Optional, and in the organization view only. Tick any program this requirement should be reported under, or create one. A program changes reporting only. It never changes who must meet the requirement. See [Programs](/docs/pulse/programs).

### 5. Owner

**Who owns it** names one Training Officer or Admin who follows up on this requirement's gaps. The owner is shown on the Roster and to providers as the person to ask, and receives the Monday email about its gaps. An owner is required for every kind except Certification.

For Class, Administrative and Skill requirements you also choose **Who can sign it off**:

- **Any training officer or admin** is the default.
- **Only specific people** limits sign-off to the people you add. Use it when one person is accountable, such as a fit-test administrator.

{% figure src="/images/pulse/wizard-owner.png" alt="The Owner step with the owner picker and the two sign-off choices" /%}

Signing off needs a Training Officer or Admin role at the organization level, under either choice. A person whose role is on a department only can be an owner, but cannot sign off and cannot be listed under **Only specific people**.

### 6. Timing

- **When it starts** is always today for a new requirement. Anyone who has not met it is due now, except new members inside a grace period.
- **Warn before due (days)** sets when a provider turns Due soon. It applies to Certification requirements and to repeating Class, Administrative and Skill requirements.
- **Grace for new members (days)** is optional, for Class, Administrative and Skill. See [what the grace period counts from](/docs/pulse/requirement-kinds#timing-rules-shared-by-class-administrative-and-skill).
- **Create assignments automatically** appears for Class and Continuous series, and is on for a new requirement.

### 7. Review

The review states what happens when you create it: how many providers need it today, how many start Compliant, how many assignments open, how many providers are emailed, and what the owner will see.

{% figure src="/images/pulse/wizard-review.png" alt="The Review step listing how many providers need the requirement today, the assignments that will open and the emails that will be sent" /%}

The button reads **Create requirement**, or **Create and assign N providers** when it will create assignments. Everything except the kind, the series and the department scope can be changed later.

## Automatic assignments

With **Create assignments automatically** on, Pulse assigns the linked class, or each session of the series, to the providers who owe it. It is available for a Class requirement that has a linked class, and for a Continuous series requirement.

| When | What Pulse does |
| --- | --- |
| A provider is Missing or Overdue | Creates an assignment due today |
| A provider turns Due soon | Creates an assignment due on the requirement's due date |
| The provider already has an open assignment for that class | Links the existing assignment instead of creating a second one. No email is sent. |
| The provider no longer owes it (left the group, met it another way, setting turned off) | Withdraws the assignment if it is untouched. Keeps it as an ordinary assignment if the provider has started or completed it. |
| The provider completes it | The completion stays as history. The next cycle gets a new assignment when it comes due. |
| The item is snoozed | No assignment is created |

Assignments are created when you save the requirement, and again each morning at 6:00 a.m. Eastern as warning windows open and new members arrive.

**Email.** Each provider who gets a newly created assignment receives the standard "You have been assigned a new class" email, once. Linking and withdrawing send nothing.

**Series.** A series requirement assigns only sessions held on or after the day the setting was turned on, so turning it on never creates a backlog of past sessions.

**Manual assignments.** When you assign a class by hand and a requirement already covers some of the people you picked, Prodigy tells you how many are covered and asks whether to include them or leave them out.

Automatic assignments never assign a training plan, and a Certification requirement never assigns anything.

## Open a requirement

Click a requirement's name to open its page. It shows the rule, who it applies to, the owner, its programs, a count for each status, and a table of the people it applies to. From the table you can send reminders and open any provider's gap, as on the [Roster](/docs/pulse/roster).

{% figure src="/images/pulse/requirement-page.png" alt="A requirement's page with its rule, status counts and the table of people it applies to" /%}

## Edit a requirement

Use **Edit** on the requirement's page or in its row menu. Editing opens on the Details step and ends on **Review changes**, which lists each setting before and after, how many providers change status, and what happens to assignments.

- The kind, the series and the department scope are locked.
- Sign-offs, completions and history are kept and recalculated under the new settings.
- Nothing is saved until you confirm. The button reads **Save changes**, **Save and assign N providers**, or **Save and withdraw N assignments**.
- People who have left the organization are dropped from the listed people when you save. If they are the only people listed, they are kept, so that the requirement does not widen to everyone.

## Pause a requirement

In the row menu on the Requirements page, choose **Deactivate**. The row shows **Inactive**. A deactivated requirement is left out of every status, count and email. Its assignments are frozen: none are created and none are withdrawn. The open assignments it created stay with providers, and while it is deactivated they show on the Roster as ordinary assignments and count as such. Choose **Activate** to bring it back.

## Delete a requirement

Choose **Delete** in the row menu or on the requirement's page. The dialog states what will happen before you confirm.

{% figure src="/images/pulse/requirement-delete.png" alt="The delete dialog for a requirement, saying what leaves the dashboard and what is kept" /%}

- Open assignments the requirement created, and that nobody has started, are withdrawn. No email is sent.
- Assignments that are in progress or completed are kept.
- Assignments made by hand that were linked to the requirement are unlinked and kept.
- Sign-offs and completions stay on each provider's record.

A deleted requirement leaves the Roster, the Matrix and the Audit Ready Export, and cannot be restored from the app. Trend points captured before the delete keep it.
