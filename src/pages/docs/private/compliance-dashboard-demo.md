---
title: Compliance Dashboard Demo Guide
description: Internal walkthrough of every feature of the organization Compliance Dashboard (PRD-1642), using the seeded demo environment. Illustrated with zoomed feature close-ups and animated walkthroughs.
---

Welcome! This guide walks you through every feature of the new organization Compliance Dashboard (PRD-1642) using a live demo environment loaded with realistic, fully anonymized data. Each section pairs a full-screen shot for context with **zoomed close-ups** of the specific feature and, for the key flows, a short **animated walkthrough**.

**Why this exists** (the 30-second version): before this dashboard, a training officer's compliance program was an inbox full of per-certification expiry emails plus a hand-maintained spreadsheet — and OIG exclusion screening was a monthly manual chore with no paper trail. PRD-1642 builds one place that watches everything (certifications, trainings, programs, exclusions), explains every gap, and records every decision, so the next audit or state inspection is an export rather than an archaeology dig. Each section below covers what the surface does, how it works, and which of those pains it kills.

---

## 1. Getting in

The current demo URL and seeded credentials are distributed separately so they can be rotated without committing them to this public repository. Ask the demo owner for the current access details.

| Persona | Use it to see |
|---|---|
| **Org Admin** ("Mary Johnson") | Everything, including OIG exclusion screening |
| **Provider** ("James Smith") | The provider self-view ("My compliance") |

Good to know before you start:

- The demo runs on a dev machine. It only works while that machine is awake; if it stops responding, ping Ethan.
- First page load compiles on the fly and can take a few seconds. Subsequent pages are fast.
- All names are pseudonyms and every record is seeded demo data. Click anything, change anything: nothing real is touched, and the data can be reset at any time.
- Some profile images/logos may not load in this environment; that is a demo artifact, not part of the feature.
- Screenshots were captured across demo reseeds and different admin accounts, so the header name and the exact counts in a figure may differ from what you see live (and from each other). The features are the same.

## 2. Getting to the good stuff (important!)

The demo org, **Pro EMS**, has 742 providers of rich seeded data, but you have to be in the **organization view** to see all of it:

1. After logging in, click the switcher at the **top left** of the header.
2. Under **Select Organization**, choose **Pro EMS**.

You'll land on **Organization Home**:

{% figure src="/images/compliance-demo/org-home.jpg" alt="Organization Home dashboard for Pro EMS" caption="Organization Home — the Needs attention panel (bottom right) and the Compliance item in the left nav are your entry points." /%}

Three compliance touchpoints live here:

1. **Needs attention panel** (bottom right): the org's top compliance gaps with a "View compliance dashboard" button.
2. **Quick actions**: including "New requirement: define a compliance rule."
3. **Compliance in the left nav**, with a live badge counting open remediation tasks plus pending screening matches: your "how much needs review" glance from anywhere in the app.

One more navigation note: the header has an **"Organization view / View as Training Officer" toggle**. The Screening tab only appears in the organization (Admin) view — if you can't find Screening, check that toggle. (Role-wise, training officers can view the screening queue but only admins can adjudicate; details in the Screening section.)

Click **Compliance** in the sidebar. The dashboard nav has two groups:

- **Monitor:** Overview, Roster, Matrix, National Registry, Screening (adjudication is admin-only)
- **Configure:** Requirements, Programs, Notifications

Everything below follows that order.

---

## 3. Overview tab

Your daily landing page — and the anti-inbox: instead of triaging a pile of per-certification expiry emails, you get six live numbers and one prioritized list.

{% figure src="/images/compliance-demo/overview.png" alt="Compliance Overview tab" caption="The Overview tab: setup checklist, drillable KPI cards, and the action queue." /%}

**The KPI summary cards** — expired certifications, expiring soon (disjoint 30/60/90-day windows), missing required certs, trainings overdue, programs overdue, and assignments overdue. **Every card is drillable.**

{% figure src="/images/compliance-demo/zoom-overview-kpi-cards.png" alt="Zoomed view of the KPI summary cards" caption="Close-up: each card is a live count you can click to drill into the roster." /%}

**The setup checklist** walks a new org through getting its program running; each incomplete step deep-links to the right screen.

{% figure src="/images/compliance-demo/zoom-overview-setup-checklist.png" alt="Zoomed view of the setup checklist" caption='Close-up: "Manage groups", "Add dates of birth", and "National Registry" jump straight to those tasks.' /%}

**The action queue** ("What needs your attention") rolls gaps up per requirement, **sorted by severity** (most overdue providers first), with per-row overdue / missing / due-soon counts, and can carry a **default owner** so new gaps auto-assign.

{% figure src="/images/compliance-demo/zoom-overview-action-queue-owners.png" alt="Zoomed view of the action queue with owner chips" caption='Close-up: note the "Default: Mark Lewis" and "Default: Mary Johnson" owner chips.' /%}

**Try it — the drill-through.** Click the red "Expired certifications" card and you land on the Roster pre-filtered to exactly those providers:

{% figure src="/images/compliance-demo/gif-overview-drill-through.gif" alt="Animation: clicking a KPI card drills into the filtered roster" caption="Clicking a KPI card drills straight into the matching roster filter." /%}

Other highlights on this tab: an **Uncovered providers card** (active members matched by zero requirements — nobody falls through the cracks) and the **compliance trend**. A scheduled job captures a point-in-time **snapshot** of the org's counts every month; the trend chart plots those snapshots, so "were we compliant on date X?" has a real answer instead of a shrug:

{% figure src="/images/compliance-demo/overview-compliance-trend.png" alt="Compliance trend chart at the bottom of the Overview tab" caption="The bottom of the Overview: the action queue ends with the pending screening match, and the Compliance trend plots the monthly snapshots with month-over-month deltas." /%}

---

## 4. Roster tab

One row per provider with a worst-status rollup plus per-item detail. Built to be inspection-ready: find a provider, see every requirement's status and dates, and open the certificate or evidence inline.

{% figure src="/images/compliance-demo/roster-expired-drill.png" alt="Compliance Roster tab filtered to expired certifications" caption="The Roster — searchable, filterable, exportable, one row per provider per item. Shown here already drilled into Expired certifications, exactly where the red KPI card lands you." /%}

**One status vocabulary everywhere** — compliant, due soon, overdue, missing, pending review, excluded (plus a "snoozed" decoration). Every non-compliant row shows exactly *why*.

{% figure src="/images/compliance-demo/zoom-roster-status-vocabulary.png" alt="Zoomed view of roster status badges and explainability text" caption='Close-up: the status badges and the explainability sub-text ("Confirmed LEIE exclusion match", "Last satisfied … via attestation; next due …").' /%}

**Filter and export** by status, item type, requirement, department, and verification state — filters are URL-linkable so you can bookmark or share a view.

{% figure src="/images/compliance-demo/zoom-roster-filter-toolbar.png" alt="Zoomed view of the roster filter toolbar" caption="Close-up: the filter toolbar, bulk Send reminder, and CSV Export." /%}

**Every row is workable.** The row menu offers Comment/assign, Attest, Snooze, Edit active window, View evidence, and View:

{% figure src="/images/compliance-demo/zoom-roster-row-actions.png" alt="Zoomed view of the per-row action menu" caption="Close-up: the per-row action menu." /%}

**Try it — attest with evidence.** On a training row, Attest records who/when/note and an optional evidence upload (e.g. a sign-in sheet photo):

{% figure src="/images/compliance-demo/gif-roster-attest.gif" alt="Animation: opening the attest dialog from a roster row" caption="From the row menu → Attest → record completion with optional evidence." /%}

{% figure src="/images/compliance-demo/zoom-roster-attest-dialog.png" alt="Zoomed view of the attestation dialog" caption="Close-up: the attestation dialog with its Evidence (optional) upload." /%}

Also here: **snooze** (push an item out of the attention counts until a date, with a note — it stays visible, just decorated), **bulk reminders** (email selected providers their specific gaps, same-day duplicates suppressed), and **driver's-license attributes** (a suspended/revoked license reads overdue regardless of expiration).

---

## 5. Matrix tab

The provider × requirement grid: the whole org on one screen — the hand-maintained tracking spreadsheet, replaced by the live thing it was imitating.

{% figure src="/images/compliance-demo/matrix.png" alt="Compliance Matrix grid" caption="The Matrix — every provider against every requirement, with per-column compliance % and a worst-status Rollup column on the right." /%}

The **legend** defines every cell state:

{% figure src="/images/compliance-demo/zoom-matrix-legend.png" alt="Zoomed view of the matrix cell-state legend" caption="Close-up: compliant, due soon, pending review, expired/overdue, excluded, required-none-on-file, and not-applicable." /%}

Each column shows its **compliance % and gap count**; cells show the specific state (compliant ✓, overdue with the date, missing, due-soon with days, or a dash for not-applicable); and the far-right **Rollup column** repeats the roster's worst-status-wins summary, so you can scan row health without reading every cell. Large orgs page through the grid rather than rendering all 742 rows at once:

{% figure src="/images/compliance-demo/zoom-matrix-cells.png" alt="Zoomed view of matrix cells and column percentages" caption="Close-up: column %s + gap counts, and cells showing overdue-with-date, compliant, missing, due-soon, and not-applicable." /%}

**Try it — only-issues toggle.** By default the grid hides fully compliant providers. Flip "Only providers with issues" off to reveal everyone (watch a green "Compliant" rollup appear):

{% figure src="/images/compliance-demo/gif-matrix-toggle.gif" alt="Animation: toggling only-providers-with-issues on the matrix" caption='Toggling "Only providers with issues" reveals the fully-compliant providers too.' /%}

Click a gap cell to open that provider+requirement's routed **issue page** (walked through in the Tasks and issues section below); click a compliant cell to preview the satisfying document in place. You can also assign training from a gap column, send column reminders, save filtered views, and export the full grid as CSV.

---

## 6. National Registry tab (NREMT verification)

Live verification of NREMT registrations against the National Registry — instead of an officer looking providers up on the registry site one at a time. One vocabulary note worth using in demos: an NREMT registration is a **national certification**, distinct from a state license to practice — which is why the demo org tracks "NREMT registration current" and "State EMS Certification current" as separate requirements.

{% figure src="/images/compliance-demo/national-registry.png" alt="National Registry verification tab" caption="Per-certification NREMT verification, with provenance and last-verified dates." /%}

The **Verification column** distinguishes Verified (NREMT), Manually verified, and Unverified; the **Date of birth column** flags who's missing a DOB (verification needs one):

{% figure src="/images/compliance-demo/zoom-nremt-verification-states.png" alt="Zoomed view of NREMT verification states" caption="Close-up: Verified (NREMT) vs Unverified, DOB on file, last-verified dates, and Verify buttons." /%}

**Try it — verify a provider.** Clicking Verify confirms identity against the Registry using the stored DOB — sent transiently for the lookup, never written into verification records or logs:

{% figure src="/images/compliance-demo/gif-nremt-verify.gif" alt="Animation: opening the NREMT verify dialog" caption="Hitting Verify opens a confirmation before contacting the National Registry." /%}

{% figure src="/images/compliance-demo/zoom-nremt-verify-dialog.png" alt="Zoomed view of the NREMT verify dialog" caption='Close-up: the verify dialog. Privacy note — "the stored date of birth is sent to the National Registry to confirm identity"; the DOB returned by NREMT is never stored.' /%}

Verifications also **re-check automatically each night** — a DOB-free re-verification through the Registry's public verify-credentials endpoint, prioritizing the soonest-expiring registrations under a bounded daily budget (about 100 checks a day) — so expiration dates stay in sync without manual work. Two more mechanics worth knowing:

- **Mismatches never overwrite.** If the Registry disagrees with what's on file, the verification is flagged for review and the detail says "record left unchanged" — a verification can confirm your data, but it never silently rewrites it.
- **Degraded state, not a broken tab.** If Registry credentials aren't configured for the environment, the tab reports "not configured" instead of failing verifications one by one.

---

## 7. Screening tab (OIG exclusion screening)

The compliance heavyweight: automatic monthly screening of your active roster against the OIG LEIE exclusion list. This one is a regulatory obligation, not a convenience — OIG's 2013 Special Advisory Bulletin expects providers to screen staff against the LEIE **monthly** and to keep documentation of how each potential match was resolved. The tab automates the drudgery and keeps the paper trail.

{% figure src="/images/compliance-demo/screening.png" alt="OIG LEIE screening queue" caption="The Screening queue with a pending match awaiting review." /%}

How it works under the hood:

- Every month the full LEIE **UPDATED.csv** (~83,000 rows) is auto-ingested as a new **versioned dataset**. The demo environment ships a tiny seeded dataset instead (the "4 records" in the freshness bar) so that a match actually appears.
- Matching is **name-based, so every hit is a candidate, not a determination** — the review dialog exists precisely because a human has to decide.
- Clearing a match suppresses it **permanently**: the cleared pair is remembered by a natural-key hash that survives the monthly full-replacement re-ingest, so the same false positive never nags you twice.

The **freshness bar** shows the dataset version, last run, next scheduled run, and disposition counts:

{% figure src="/images/compliance-demo/zoom-screening-freshness.png" alt="Zoomed view of the screening freshness bar" caption="Close-up: OIG dataset 2026-07 · 742 members screened · next run monthly · 1 pending / 2 cleared / 1 confirmed." /%}

**Try it — adjudicate a match.** Hit Review on the pending match to open the adjudication dialog:

{% figure src="/images/compliance-demo/gif-screening-review.gif" alt="Animation: opening the LEIE match review dialog" caption="Review opens a side-by-side comparison for adjudication." /%}

The dialog is built for a compliance-liability decision — a side-by-side **Prodigy member vs OIG record** comparison, explicit match chips, the honest caveat that final identity verification needs an SSN at the official OIG site, and a **required resolution note**. Both actions are recorded with the dataset version and your identity:

{% figure src="/images/compliance-demo/zoom-screening-review-dialog.png" alt="Zoomed view of the LEIE match review dialog" caption='Close-up: the Match review dialog — "Not a match — clear permanently" (a cleared record never re-flags) vs "Confirm exclusion".' /%}

Adjudication is **strictly org-admin-only** — training officers can view the queue and its statuses, but the clear/confirm decision is reserved for admins — and every event is written to an immutable, exportable evidence log: your audit-ready proof that screening happened and how each match was resolved.

---

## 8. Requirements tab (Configure)

Where you define what "compliant" means for your organization. Encode the policy once and the dashboard does the chasing — this is what retires the spreadsheet.

{% figure src="/images/compliance-demo/requirements.png" alt="Requirements list" caption="The requirements list — type, scope, targeting, owner, rule, and live compliance %." /%}

Requirements come in **three types** (Certification, Training, Program) and can be scoped org-wide or per-department, targeted at everyone / a group / named people, and given a default owner and live compliance %:

{% figure src="/images/compliance-demo/zoom-requirements-columns.png" alt="Zoomed view of requirement columns" caption='Close-up: type chips, targeting ("ALS Clinicians"), owner, rule ("every 12 months" / "warn 30d before expiry"), and color-coded compliance %.' /%}

**Try it — the creation wizard with impact preview.** The 3-step wizard (What → Who → Review & impact) shows you exactly who the rule will touch *before* you save:

{% figure src="/images/compliance-demo/gif-requirement-wizard.gif" alt="Animation: the new-requirement wizard through to the impact preview" caption="The wizard: pick a type, name it, choose a certification, set targeting — then preview the impact." /%}

{% figure src="/images/compliance-demo/requirement-wizard-who.png" alt="The Who step of the requirement wizard" caption='The Who step: org-wide vs single-department scope, "Everyone in scope" vs Targeted (a group or named people), a default owner for new gap issues, and a live "742 members targeted" count.' /%}

That final step is the highlight — a true dry-run (nothing is written until you hit Create) with a live breakdown, a smart warning when most targeted members start non-compliant, and a sample of who'd be affected:

{% figure src="/images/compliance-demo/zoom-requirement-impact-preview.png" alt="Zoomed view of the requirement impact preview" caption='Close-up: "742 members targeted · 186 compliant · 3 due soon · 553 overdue/missing today", the onboarding-grace suggestion, and a worst-first sample. No surprise red walls.' /%}

You can also give training requirements an **onboarding grace period** (new members show "due soon" instead of "missing" for N days), and toggle a requirement Active/inactive without deleting it. Requirements stay editable after creation — the edit form reopens the same fields, pre-filled, so a rule can evolve without being rebuilt.

---

## 9. Programs tab (Configure)

Recurring training programs (class series) managed as first-class compliance objects.

{% figure src="/images/compliance-demo/programs.jpg" alt="Programs list" caption="Programs — define a cadence + grace window, attach the classes that count as sessions." /%}

Define a program (e.g. monthly M&M Rounds), set its cadence and grace window, and attach the classes that count as its sessions. Providers attend; completing a session on Prodigy counts automatically, and the matrix shows each provider's attended/owed. The demo org ships with **HALO** (6-month cadence, 2 classes) and **M&M Rounds** (2-month cadence, 12 classes). Visible to Training Officers as well as admins.

---

## 10. Groups (a tab in the Users subnav)

Groups drive targeting, so requirements can say "ALS Clinicians only." Open **Users** in the left nav and pick the **Groups** tab (the subnav reads Organization Users | Invitations | Groups; the "Manage groups" shortcut in the Overview setup checklist lands there too).

{% figure src="/images/compliance-demo/groups.png" alt="Groups tab in the Users subnav" caption="Groups lives as a tab in the Users subnav." /%}

Each group has an inline **dual-list member editor** (move members between the department roster and the group):

{% figure src="/images/compliance-demo/zoom-groups-dual-list.png" alt="Zoomed view of the group dual-list member editor" caption="Close-up: the dual-list selector — department members on the left, group members on the right." /%}

And an optional **rule-suggested membership** — define a rule (certification type and/or level) and the system recomputes the suggestion list **nightly**, but never changes anything until you approve, and never removes anyone:

{% figure src="/images/compliance-demo/zoom-groups-membership-rule.png" alt="Zoomed view of the membership rule editor" caption='Close-up: "nothing changes until you approve them, and the rule never removes members" — additive-only by design.' /%}

Each suggestion is a two-button decision, and a **Dismiss is remembered**: a dismissed suggestion stays suppressed until the rule itself changes, so the list only ever shows decisions you haven't made yet.

{% figure src="/images/compliance-demo/group-rule-suggestions.png" alt="Suggested members with Approve and Dismiss buttons" caption="A saved rule (AHA BLS CPR) and its suggested members, each with Approve / Dismiss. Nothing joins the group until you say so." /%}

---

## 11. Notifications tab (Configure)

How compliance reaches people who never open the dashboard. Settings apply separately to the organization rollup and to each department (see the Scope selector).

{% figure src="/images/compliance-demo/notifications.png" alt="Notifications settings" caption="Notifications — the weekly digest and monthly report subscriptions." /%}

{% figure src="/images/compliance-demo/zoom-notifications-cards.png" alt="Zoomed view of the notification subscription cards" caption="Close-up: the weekly compliance digest (aggregated Monday email) and the monthly compliance report (per-requirement %, with a CSV)." /%}

- **Weekly compliance digest**: a per-department or org-level Monday email aggregating expiring/expired certs, overdue trainings, and pending screening matches — instead of per-certification notices. The expiring-soon windows are configurable (30/60/90 days), and the recipient list **re-validates at send time**: anyone who is no longer a training officer or admin in that scope is dropped automatically.
- **One-click digest actions**: digest emails carry secure signed links so a TO can mark-lapsed, snooze a week, or jump to the renewal form **without logging in**. Each link is single-use, expires after 14 days, and shows a confirmation before it acts. State-specific reminder ladders (New York's 10 NYCRR 800.9 is pre-seeded) drive the copy.
- **Monthly compliance report**: org counts and a per-requirement compliance % table, with a CSV and a dashboard deep link.
- **Idempotent sends**: every digest and report send is recorded in a send log keyed by scope and period, so a re-run — retry, redeploy, manual trigger — never double-sends the same email.
- **Bulk gap reminders** (also from Roster and Matrix): pick providers, send each a personalized list of their gaps — deduped, with providers already reminded that day skipped automatically.

---

## 12. Tasks and issues (the remediation loop)

Gaps aren't just displayed, they're workable — every action leaves the audit trail the "who knew what when" questions demand:

- Every (provider, requirement) gap can become an **issue task**: system-created, admin-created from any gap, or auto-materialized nightly for requirements with a **default owner**.
- **Screening review tasks** are auto-created for each pending LEIE match and **auto-complete the moment the match is adjudicated** — the queue can't silently rot.
- Tasks carry a title, note, owner (TO+), due date, and a link back to the thing they're about, plus a **comment thread**.
- "My tasks" vs "all tasks" views; the nav badge counts open tasks.
- **Issues auto-complete when the underlying gap resolves**: fix the cert, and the task closes itself.

Click any gap — a matrix cell, an action-queue row, a task — and you land on the routed **issue page**, the permanent home for that provider + requirement pair:

{% figure src="/images/compliance-demo/issue-details.png" alt="Issue details page for a provider and requirement" caption='The issue page: "Why this is an issue" explains the status in plain language, with Snooze / Record attestation, owner assignment, Complete / Dismiss, and the comment thread.' /%}

- **"Why this is an issue"** spells out what's behind the status and how to clear it — last satisfied, next due, current state.
- **Fix-it actions in place**: Snooze, and (for trainings) Record attestation. Certifications deliberately have **no** attest option — a certification gap is cleared by a real certification on file, never by a note.
- **Ownership and lifecycle**: assign an owner, Complete or Dismiss, and comment — all on the record.

Try it: click a gap cell in the Matrix to open its issue page, comment on it, then look for it in the Overview action queue.

---

## 13. Provider self-view ("My compliance")

Log out and back in with the separately distributed credentials for **James Smith**, or use the "View as Training Officer" toggle to see any provider's own dashboard:

{% figure src="/images/compliance-demo/self-view.jpg" alt="Provider dashboard with the My compliance widget" caption="A provider's personal dashboard, with the My compliance widget on the right." /%}

{% figure src="/images/compliance-demo/zoom-self-view-widget.png" alt="Zoomed view of the My compliance widget" caption='Close-up: the provider sees only their own items in the same status language — Missing ("No active certification on file") and Compliant ("Last satisfied … via attestation; next due …").' /%}

Each item has **fix-it actions**: update certifications, view assignments, or verify with National Registry (which prompts for a date of birth if none is on file). Providers never see anyone else's data and have no access to the admin dashboard. This is the other half of the reminder story — a provider can see and fix their own gaps without waiting for a training officer to chase them.

---

## 14. For the integrations-minded

- **Public API**: partner integrations can pull per-user compliance rollups and an org summary via the public API (`GET /api/v1/users/compliance` and `GET /api/v1/compliance/summary`) using an organization access token. Interactive docs are auto-generated.
- **Per-organization entitlement**: the entire dashboard is feature-flagged per organization. Orgs without it see a "contact us to enable" panel instead, and every API endpoint enforces the same gate server-side.
- **Clean start**: a newly-entitled org isn't dropped into blank tables — the Overview leads with the setup checklist (see the Overview section) and the tabs show empty states until real data exists.

---

## 15. Who sees what (cheat sheet)

| Capability | Provider (GU) | Training Officer | Org Admin |
|---|---|---|---|
| My compliance self-view | ✓ | ✓ | ✓ |
| Dashboard (Overview/Roster/Matrix/National Registry) | ✗ | ✓ (their scope) | ✓ |
| Requirements, Programs, Groups, Notifications | ✗ | ✓ | ✓ |
| Attest, snooze, reminders, tasks | ✗ | ✓ | ✓ |
| OIG Screening queue | ✗ | View only | ✓ |
| OIG Screening adjudication | ✗ | ✗ | ✓ |

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
