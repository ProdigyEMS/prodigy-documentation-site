---
title: Compliance Dashboard Demo Guide
description: Internal walkthrough of every feature of the organization Compliance Dashboard (PRD-1642), using the seeded demo environment.
---

Welcome! This guide walks you through every feature of the new organization Compliance Dashboard (PRD-1642) using a live demo environment loaded with realistic, fully anonymized data.

---

## 1. Getting in

**Demo link:** https://16-macbook-pro-2023.tail2cdf35.ts.net

| Persona | Email | Password | Use it to see |
|---|---|---|---|
| **Org Admin** ("Mary Johnson") | `proems-admin@e2e.prodigyems.com` | `test-trainingofficer-user-password` | Everything, including OIG exclusion screening |
| **Provider** ("James Smith") | `proems-user-1@e2e.prodigyems.com` | `test-trainingofficer-user-password` | The provider self-view ("My compliance") |

Good to know before you start:

- The demo runs on a dev machine. It only works while that machine is awake; if it stops responding, ping Ethan.
- First page load compiles on the fly and can take a few seconds. Subsequent pages are fast.
- All names are pseudonyms and every record is seeded demo data. Click anything, change anything: nothing real is touched, and the data can be reset at any time.
- Some profile images/logos may not load in this environment; that is a demo artifact, not part of the feature.

## 2. Getting to the good stuff (important!)

The demo org, **Pro EMS**, has 742 providers of rich seeded data, but you have to be in the **organization view** to see all of it:

1. After logging in, click the switcher at the **top left** of the header.
2. Under **Select Organization**, choose **Pro EMS**.

You'll land on **Organization Home**:

{% figure src="/images/compliance-demo/org-home.jpg" alt="Organization Home" /%}

Three compliance touchpoints live here:

1. **Needs attention panel** (bottom right): the org's top compliance gaps with a "View compliance dashboard" button.
2. **Quick actions**: including "New requirement: define a compliance rule."
3. **Compliance in the left nav**, with a live badge counting open remediation tasks plus pending screening matches: your "how much needs review" glance from anywhere in the app.

One more navigation note: the header has an **"Organization view / View as Training Officer" toggle**. The admin-only Screening tab only appears in the organization (Admin) view. If you can't find Screening, check that toggle.

Click **Compliance** in the sidebar. The dashboard nav has two groups:

- **Monitor:** Overview, Roster, Matrix, National Registry, Screening (admins only)
- **Configure:** Requirements, Programs, Notifications

Everything below follows that order.

---

## 3. Overview tab

Your daily landing page.

{% figure src="/images/compliance-demo/overview.jpg" alt="Compliance Overview" /%}

- **Setup checklist**: a 5-step "get your compliance program set up" tracker (create a requirement, organize groups, add dates of birth, verify NREMT registrations, run an exclusion screening). Each incomplete step deep-links to the right screen.
- **KPI summary cards**: expired certifications, expiring soon (disjoint 30/60/90-day windows), missing required certs, trainings overdue, programs overdue, and assignments overdue. **Every card is drillable**: click "Expired certifications" and you land on the Roster pre-filtered to exactly those providers, with a dismissible filter chip.
- **Uncovered providers card**: a data-quality check counting active members matched by zero active requirements, so nobody silently falls outside your program.
- **Compliance trend sparkline**: a monthly point-in-time history (snapshots are captured on the 1st of each month), so you can answer "were we compliant on date X?" and watch the trend.
- **What needs your attention (action queue)**: per-requirement gap rollups grouped by severity, computed from the same data as the roster so counts always agree. Items can carry a default owner (note the "Default: Mark Lewis" and "Default: Mary Johnson" chips), and screening alerts route straight to the Screening tab. Issues assigned to you appear under "Assigned to you."

Try it: click the red "Expired certifications" card, note the Roster filter chip it sets, then dismiss the chip.

---

## 4. Roster tab

One row per provider with a worst-status rollup plus per-item detail. Built to be inspection-ready: find a provider, see every requirement's status and dates, and open the certificate or evidence inline.

{% figure src="/images/compliance-demo/roster.jpg" alt="Compliance Roster" /%}

- **One status vocabulary everywhere**: compliant, due soon, overdue, missing, pending review, excluded (plus a "snoozed" decoration). The same colors and words appear on every screen.
- **Search and filters**: status, item type, requirement, department, verification state. Filters are URL-linkable, so you can bookmark or share a filtered view.
- **Explainability**: every non-compliant row shows exactly why (which cert, which date, which requirement, or which screening record) and drills through to the provider's profile in one click.
- **Snooze**: push an item out of the attention counts until a date, with a note. Snoozed items stay visible in the roster, just decorated, so nothing is hidden.
- **Attest (trainings only)**: record that a custom training was satisfied, with who/when/note and an **optional evidence file upload** (e.g. a sign-in sheet photo). Attest is offered only on training rows, never on certification rows.
- **Assign an issue**: hand any gap to a teammate as a tracked task right from the roster row.
- **Bulk reminders**: select providers and use "Send reminder" to email each one a pre-formatted list of their specific gaps with a deep link. Same-day duplicates are automatically suppressed.
- **Driver's license attributes**: DL-type certifications carry class, endorsements, and status. A suspended or revoked license shows **overdue regardless of its expiration date**.
- **CSV export** of the current view.

Try it: search a provider, open the "why" on a red row, snooze one expired item, then attest an overdue training with a photo attached.

---

## 5. Matrix tab

The provider × requirement grid: the whole org on one screen.

{% figure src="/images/compliance-demo/matrix.jpg" alt="Compliance Matrix" /%}

- Cells show ✓ (compliant), ⚠ with days (due soon), red dots with dates (overdue), "missing", or a dash (requirement doesn't target that provider). Screening state appears too.
- **Per-column compliance %** and gap counts for each requirement.
- **Only-issues by default**: fully compliant providers are hidden until you flip the "Only providers with issues" toggle, keeping the grid focused.
- **Click a gap cell** and you land on that provider+requirement's issue page (created on the fly if it doesn't exist) with its history and comment thread.
- **Click a compliant cell** and a details modal opens in place showing the satisfying evidence; if a document is on file it's embedded right there with an "Open full" option.
- **Assign training from a gap column**: one click pre-fills the existing Assignments flow with the affected providers and the requirement's linked class, including "assign to all N overdue."
- **Bulk reminders from a column**, same as the roster.
- **Saved views**: filter to a set of requirements and save the view for next time.
- **Full-grid CSV export**.

Try it: toggle "only issues" off to see the green sea, filter to two requirements, save the view, then click one red cell into its issue page and leave a comment.

---

## 6. National Registry tab (NREMT verification)

Live verification of NREMT registrations against the National Registry.

{% figure src="/images/compliance-demo/national-registry.jpg" alt="National Registry" /%}

- **Per-certification verify**: confirms the provider's registration and records provenance. The Verification column distinguishes **Verified (NREMT)**, **Manually verified**, and **Unverified**, with last-verified dates.
- **Date of birth capture**: verification requires a DOB (see the "On file" / "Missing" column). The dashboard flags providers missing one, and DOB can be captured on the profile, by an admin, or via bulk CSV upload. Privacy note: the DOB returned by NREMT is never stored; only what your org captures is kept.
- **Automatic nightly re-verification**: a bounded daily queue re-checks registrations, prioritizing the soonest-expiring and recently renewed, so verifications stay fresh without manual work.
- **Provider-side flow**: when a provider adds a National Registry cert themselves, they're offered a verify step immediately (and can skip it; it will surface in your queue instead).

Try it: hit **Verify** on an unverified row and watch the provenance change.

---

## 7. Screening tab (OIG exclusion screening, admin-only)

The compliance heavyweight: automatic monthly screening of your active roster against the OIG LEIE exclusion list.

{% figure src="/images/compliance-demo/screening.jpg" alt="OIG LEIE Screening" /%}

- **Dataset freshness** is shown up front: the OIG dataset version, when it was ingested, the last screening run (742 members screened), and the next scheduled run (monthly, per OIG guidance).
- **Match queue**: potential matches (name, with DOB/NPI corroboration when available) land as "pending review." The demo org has dispositions in every state: 1 pending, 2 cleared, 1 confirmed.
- **Adjudication**: hit **Review** on the pending match (Dorothy Reyes), review the matched OIG record, and either **clear** or **confirm** the exclusion. A note is required either way; the dialog will not let you adjudicate silently.
- **Cleared never re-flags**: once you clear a false positive, subsequent monthly runs will not nag you about the same record again.
- **Immutable evidence log + export**: every screening event and adjudication is recorded and exportable, your audit-ready proof that screening happened.
- **Run screening now** re-screens the whole roster on demand.
- **Strictly org-admin-only**: Training Officers see screening counts but never the named queue or the clear/confirm actions.

Try it: adjust the status filter to see the cleared and confirmed matches, then Review the pending one and adjudicate it with a note.

---

## 8. Requirements tab (Configure)

Where you define what "compliant" means for your organization.

{% figure src="/images/compliance-demo/requirements.jpg" alt="Requirements" /%}

- **Three requirement types** (see the Type column):
  - **Certification**: a cert type (optionally with a minimum level), e.g. "State EMS Certification current" with a "warn 60d before expiry" rule. A provider without an active, unexpired cert of that type counts as **missing**: negative reporting means you see who lacks something, not just what exists.
  - **Training**: a named recurring training on a cadence in months (e.g. "Annual Compliance & Safety Training, every 12 months"), satisfied by a linked class completion, an outside completion, or a TO attestation. Next due = last satisfied + cadence.
  - **Program**: a class-series rule (e.g. "Program: M&M Rounds") whose health also feeds the Programs overdue KPI.
- **Creation wizard with impact preview**: before you save, you see exactly how many providers the rule will touch and how they'd score, so no surprise red walls.
- **Scoping and targeting**: org-wide or per-department (Scope column); target everyone, specific groups (the "ALS Clinicians" and "EMTs" chips), or individual providers, with per-person overrides on top.
- **Owners**: give a requirement a default owner (Owner column) and new gaps auto-create tasks assigned to them.
- **Onboarding grace period**: optionally give new members N days before a never-satisfied training counts against them (it shows as "due soon" with a due date instead of "missing").
- **Live compliance % per requirement** with gap counts, and an Active toggle to retire a rule without deleting it.

Try it: click "New requirement," build a certification rule through the wizard, and watch the impact preview before saving.

---

## 9. Programs tab (Configure)

Recurring training programs (class series) managed as first-class compliance objects.

{% figure src="/images/compliance-demo/programs.jpg" alt="Programs" /%}

Define a program (e.g. monthly M&M Rounds), set its cadence and grace window, and attach the classes that count as its sessions. Providers attend; completing a session on Prodigy counts automatically, and the matrix shows each provider's attended/owed. The demo org ships with **HALO** (6-month cadence, 2 classes) and **M&M Rounds** (2-month cadence, 12 classes). Visible to Training Officers as well as admins.

---

## 10. Groups (its own page under Users)

Groups drive targeting, so requirements can say "ALS Clinicians only." Open **Users** in the left nav and hit the **Groups** button in the header (the "Manage groups" shortcut in the Overview setup checklist lands there too).

{% figure src="/images/compliance-demo/groups.jpg" alt="Groups" /%}

- **Groups page**: create groups per department (the demo has Bike Team EMT, EMTs, Paramedics, Tac Medics); each group name links to its own page where you rename, delete, and manage members with an inline dual-list selector.
- **Rule-suggested membership**: define a rule (e.g. based on certifications held) and the system suggests members automatically, recomputing nightly and whenever certs change. You **approve** suggestions into real memberships or **dismiss** them permanently. Suggestions are additive-only: the system never removes anyone on its own.

Try it: open the EMTs group, review its members, then create a rule and approve one of its suggestions.

---

## 11. Notifications tab (Configure)

How compliance reaches people who never open the dashboard. Note the Scope selector: settings apply separately to the organization rollup and to each department.

{% figure src="/images/compliance-demo/notifications.jpg" alt="Notifications" /%}

- **Weekly compliance digest**: per-department or org-level subscription (default off) that emails training officers one aggregated Monday email (expiring and expired certifications, overdue trainings, pending screening matches) instead of per-certification notices. At most one send per week per subscription.
- **One-click digest actions**: digest emails carry secure single-use links so a TO can mark-lapsed, snooze a week, or jump to renew **without logging in**. Links expire after 14 days and can never fire twice. State-specific reminder ladders (New York's 10 NYCRR 800.9 requirement is pre-seeded) drive the reminder copy.
- **Monthly compliance report**: sent on the 1st of each month with key counts and per-requirement compliance percentages, a CSV, and a dashboard deep link.
- **Bulk gap reminders** (reachable from Roster and Matrix): pick providers, send each a personalized list of their gaps, with a send history and same-day duplicate suppression.

Try it: hit "Set up" on the weekly digest, add a recipient, and save.

---

## 12. Tasks and issues (the remediation loop)

Gaps aren't just displayed, they're workable:

- Every (provider, requirement) gap can become an **issue task**: system-created (screening matches create them automatically), admin-created from any gap, or auto-materialized nightly for requirements with a **default owner**.
- Tasks carry a title, note, owner (TO+), due date, and a link back to the thing they're about, plus a **comment thread**.
- "My tasks" vs "all tasks" views; the nav badge counts open tasks.
- **Issues auto-complete when the underlying gap resolves**: fix the cert, and the task closes itself.

Try it: assign an issue from a roster row, comment on it, then look for it in the Overview action queue.

---

## 13. Provider self-view ("My compliance")

Log out and back in as **James Smith** (`proems-user-1@e2e.prodigyems.com`), or just look at any provider's own dashboard:

{% figure src="/images/compliance-demo/self-view.jpg" alt="My compliance self-view" /%}

- Providers get a **My compliance widget** on their personal dashboard and a profile tab listing only the items that apply to them, in the same status language the admin sees (Missing, Compliant, with satisfied dates and next-due dates).
- Each item has **fix-it actions**: update certifications, view assignments, or verify with National Registry (which prompts for a date of birth if none is on file).
- Providers never see anyone else's data and have no access to the admin dashboard.

---

## 14. For the integrations-minded

- **Public API**: partner integrations can pull per-user compliance rollups and an org summary via the public API (`GET /api/v1/users/compliance` and `GET /api/v1/compliance/summary`) using an organization access token. Interactive docs are auto-generated.
- **Per-organization entitlement**: the entire dashboard is a per-org feature. Orgs without it see a "contact us to enable" panel instead, and every API endpoint enforces the same gate server-side.

---

## 15. Who sees what (cheat sheet)

| Capability | Provider (GU) | Training Officer | Org Admin |
|---|---|---|---|
| My compliance self-view | ✓ | ✓ | ✓ |
| Dashboard (Overview/Roster/Matrix/National Registry) | ✗ | ✓ (their scope) | ✓ |
| Requirements, Programs, Groups, Notifications | ✗ | ✓ | ✓ |
| Attest, snooze, reminders, tasks | ✗ | ✓ | ✓ |
| OIG Screening queue + adjudication | ✗ | ✗ (counts only) | ✓ |

Department-scoped TOs get the same dashboard filtered to their department; screening exists only at the org level.

---

## 16. Suggested 10-minute demo script

1. Log in as Mary Johnson, switch to the **Pro EMS organization**, note the Home "Needs attention" panel and the Compliance nav badge.
2. Overview: walk the KPI cards, drill "Expired" into the Roster, dismiss the chip.
3. Roster: open a red row's explanation, snooze one item, attest a training with an evidence photo.
4. Matrix: column percentages, click a gap cell into its issue, comment, assign training to a column.
5. National Registry: verify one provider.
6. Screening: adjudicate the pending LEIE match with a note, show the evidence export.
7. Requirements: create a rule through the wizard and show the impact preview.
8. Notifications: show the weekly digest and monthly report subscriptions.
9. Switch to James Smith and show "My compliance" with its fix-it links.

Questions, breakage, or "can it do X?": ping Ethan.
