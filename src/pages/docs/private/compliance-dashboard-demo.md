---
title: Compliance Dashboard Demo Guide
description: Internal walkthrough of every feature of the organization Compliance Dashboard (PRD-1642), using the seeded demo environment. Illustrated with zoomed feature close-ups and animated walkthroughs.
---

Welcome! This guide walks you through every feature of the new organization Compliance Dashboard (PRD-1642) using a live demo environment loaded with realistic, fully anonymized data. Each section pairs a full-screen shot for context with **zoomed close-ups** of the specific feature and, for the key flows, a short **animated walkthrough**.

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

One more navigation note: the header has an **"Organization view / View as Training Officer" toggle**. The admin-only Screening tab only appears in the organization (Admin) view. If you can't find Screening, check that toggle.

Click **Compliance** in the sidebar. The dashboard nav has two groups:

- **Monitor:** Overview, Roster, Matrix, National Registry, Screening (admins only)
- **Configure:** Requirements, Programs, Notifications

Everything below follows that order.

---

## 3. Overview tab

Your daily landing page.

{% figure src="/images/compliance-demo/overview.jpg" alt="Compliance Overview tab" caption="The Overview tab: setup checklist, drillable KPI cards, and the action queue." /%}

**The KPI summary cards** — expired certifications, expiring soon (disjoint 30/60/90-day windows), missing required certs, trainings overdue, programs overdue, and assignments overdue. **Every card is drillable.**

{% figure src="/images/compliance-demo/zoom-overview-kpi-cards.png" alt="Zoomed view of the KPI summary cards" caption="Close-up: each card is a live count you can click to drill into the roster." /%}

**The setup checklist** walks a new org through getting its program running; each incomplete step deep-links to the right screen.

{% figure src="/images/compliance-demo/zoom-overview-setup-checklist.png" alt="Zoomed view of the setup checklist" caption='Close-up: "Manage groups", "Add dates of birth", and "National Registry" jump straight to those tasks.' /%}

**The action queue** ("What needs your attention") rolls gaps up per requirement, and can carry a **default owner** so new gaps auto-assign.

{% figure src="/images/compliance-demo/zoom-overview-action-queue-owners.png" alt="Zoomed view of the action queue with owner chips" caption='Close-up: note the "Default: Mark Lewis" and "Default: Mary Johnson" owner chips.' /%}

**Try it — the drill-through.** Click the red "Expired certifications" card and you land on the Roster pre-filtered to exactly those providers:

{% figure src="/images/compliance-demo/gif-overview-drill-through.gif" alt="Animation: clicking a KPI card drills into the filtered roster" caption="Clicking a KPI card drills straight into the matching roster filter." /%}

Other highlights on this tab: an **Uncovered providers card** (active members matched by zero requirements — nobody falls through the cracks) and a **compliance trend sparkline** (monthly point-in-time history, so you can answer "were we compliant on date X?").

---

## 4. Roster tab

One row per provider with a worst-status rollup plus per-item detail. Built to be inspection-ready: find a provider, see every requirement's status and dates, and open the certificate or evidence inline.

{% figure src="/images/compliance-demo/roster.jpg" alt="Compliance Roster tab" caption="The Roster — searchable, filterable, exportable, one row per provider per item." /%}

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

The provider × requirement grid: the whole org on one screen.

{% figure src="/images/compliance-demo/matrix.jpg" alt="Compliance Matrix grid" caption="The Matrix — every provider against every requirement, with per-column compliance %." /%}

The **legend** defines every cell state:

{% figure src="/images/compliance-demo/zoom-matrix-legend.png" alt="Zoomed view of the matrix cell-state legend" caption="Close-up: compliant, due soon, pending review, expired/overdue, excluded, required-none-on-file, and not-applicable." /%}

Each column shows its **compliance % and gap count**; cells show the specific state (compliant ✓, overdue with the date, missing, due-soon with days, or a dash for not-applicable):

{% figure src="/images/compliance-demo/zoom-matrix-cells.png" alt="Zoomed view of matrix cells and column percentages" caption="Close-up: column %s + gap counts, and cells showing overdue-with-date, compliant, missing, due-soon, and not-applicable." /%}

**Try it — only-issues toggle.** By default the grid hides fully compliant providers. Flip "Only providers with issues" off to reveal everyone (watch a green "Compliant" rollup appear):

{% figure src="/images/compliance-demo/gif-matrix-toggle.gif" alt="Animation: toggling only-providers-with-issues on the matrix" caption='Toggling "Only providers with issues" reveals the fully-compliant providers too.' /%}

Click a gap cell to open that provider+requirement's **issue page** (with history and a comment thread); click a compliant cell to preview the satisfying document in place. You can also assign training from a gap column, send column reminders, save filtered views, and export the full grid as CSV.

---

## 6. National Registry tab (NREMT verification)

Live verification of NREMT registrations against the National Registry.

{% figure src="/images/compliance-demo/national-registry.jpg" alt="National Registry verification tab" caption="Per-certification NREMT verification, with provenance and last-verified dates." /%}

The **Verification column** distinguishes Verified (NREMT), Manually verified, and Unverified; the **Date of birth column** flags who's missing a DOB (verification needs one):

{% figure src="/images/compliance-demo/zoom-nremt-verification-states.png" alt="Zoomed view of NREMT verification states" caption="Close-up: Verified (NREMT) vs Unverified, DOB on file, last-verified dates, and Verify buttons." /%}

**Try it — verify a provider.** Clicking Verify confirms identity against the Registry using the stored DOB:

{% figure src="/images/compliance-demo/gif-nremt-verify.gif" alt="Animation: opening the NREMT verify dialog" caption="Hitting Verify opens a confirmation before contacting the National Registry." /%}

{% figure src="/images/compliance-demo/zoom-nremt-verify-dialog.png" alt="Zoomed view of the NREMT verify dialog" caption='Close-up: the verify dialog. Privacy note — "the stored date of birth is sent to the National Registry to confirm identity"; the DOB returned by NREMT is never stored.' /%}

Verifications also **re-check automatically each night** (a bounded daily queue, prioritizing soonest-expiring and recently renewed), so expiration dates stay in sync without manual work.

---

## 7. Screening tab (OIG exclusion screening, admin-only)

The compliance heavyweight: automatic monthly screening of your active roster against the OIG LEIE exclusion list.

{% figure src="/images/compliance-demo/screening.jpg" alt="OIG LEIE screening queue" caption="The Screening queue with a pending match awaiting review." /%}

The **freshness bar** shows the dataset version, last run, next scheduled run, and disposition counts:

{% figure src="/images/compliance-demo/zoom-screening-freshness.png" alt="Zoomed view of the screening freshness bar" caption="Close-up: OIG dataset 2026-07 · 742 members screened · next run monthly · 1 pending / 2 cleared / 1 confirmed." /%}

**Try it — adjudicate a match.** Hit Review on the pending match to open the adjudication dialog:

{% figure src="/images/compliance-demo/gif-screening-review.gif" alt="Animation: opening the LEIE match review dialog" caption="Review opens a side-by-side comparison for adjudication." /%}

The dialog is built for a compliance-liability decision — a side-by-side **Prodigy member vs OIG record** comparison, explicit match chips, the honest caveat that final identity verification needs an SSN at the official OIG site, and a **required resolution note**. Both actions are recorded with the dataset version and your identity:

{% figure src="/images/compliance-demo/zoom-screening-review-dialog.png" alt="Zoomed view of the LEIE match review dialog" caption='Close-up: the Match review dialog — "Not a match — clear permanently" (a cleared record never re-flags) vs "Confirm exclusion".' /%}

Screening is **strictly org-admin-only** (Training Officers see the counts but never the named queue), and every event is written to an immutable, exportable evidence log — your audit-ready proof that screening happened.

---

## 8. Requirements tab (Configure)

Where you define what "compliant" means for your organization.

{% figure src="/images/compliance-demo/requirements.jpg" alt="Requirements list" caption="The requirements list — type, scope, targeting, owner, rule, and live compliance %." /%}

Requirements come in **three types** (Certification, Training, Program) and can be scoped org-wide or per-department, targeted at everyone / a group / named people, and given a default owner and live compliance %:

{% figure src="/images/compliance-demo/zoom-requirements-columns.png" alt="Zoomed view of requirement columns" caption='Close-up: type chips, targeting ("ALS Clinicians"), owner, rule ("every 12 months" / "warn 30d before expiry"), and color-coded compliance %.' /%}

**Try it — the creation wizard with impact preview.** The 3-step wizard (What → Who → Review & impact) shows you exactly who the rule will touch *before* you save:

{% figure src="/images/compliance-demo/gif-requirement-wizard.gif" alt="Animation: the new-requirement wizard through to the impact preview" caption="The wizard: pick a type, name it, choose a certification, set targeting — then preview the impact." /%}

That final step is the highlight — a live breakdown, a smart warning when most targeted members start non-compliant, and a sample of who'd be affected:

{% figure src="/images/compliance-demo/zoom-requirement-impact-preview.png" alt="Zoomed view of the requirement impact preview" caption='Close-up: "742 members targeted · 186 compliant · 3 due soon · 553 overdue/missing today", the onboarding-grace suggestion, and a worst-first sample. No surprise red walls.' /%}

You can also give training requirements an **onboarding grace period** (new members show "due soon" instead of "missing" for N days), and toggle a requirement Active/inactive without deleting it.

---

## 9. Programs tab (Configure)

Recurring training programs (class series) managed as first-class compliance objects.

{% figure src="/images/compliance-demo/programs.jpg" alt="Programs list" caption="Programs — define a cadence + grace window, attach the classes that count as sessions." /%}

Define a program (e.g. monthly M&M Rounds), set its cadence and grace window, and attach the classes that count as its sessions. Providers attend; completing a session on Prodigy counts automatically, and the matrix shows each provider's attended/owed. The demo org ships with **HALO** (6-month cadence, 2 classes) and **M&M Rounds** (2-month cadence, 12 classes). Visible to Training Officers as well as admins.

---

## 10. Groups (a tab in the Users subnav)

Groups drive targeting, so requirements can say "ALS Clinicians only." Open **Users** in the left nav and pick the **Groups** tab (the subnav reads Organization Users | Invitations | Groups; the "Manage groups" shortcut in the Overview setup checklist lands there too).

{% figure src="/images/compliance-demo/groups.jpg" alt="Groups tab in the Users subnav" caption="Groups lives as a tab in the Users subnav." /%}

Each group has an inline **dual-list member editor** (move members between the department roster and the group):

{% figure src="/images/compliance-demo/zoom-groups-dual-list.png" alt="Zoomed view of the group dual-list member editor" caption="Close-up: the dual-list selector — department members on the left, group members on the right." /%}

And an optional **rule-suggested membership** — define a rule and the system suggests members, but never changes anything until you approve, and never removes anyone:

{% figure src="/images/compliance-demo/zoom-groups-membership-rule.png" alt="Zoomed view of the membership rule editor" caption='Close-up: "nothing changes until you approve them, and the rule never removes members" — additive-only by design.' /%}

---

## 11. Notifications tab (Configure)

How compliance reaches people who never open the dashboard. Settings apply separately to the organization rollup and to each department (see the Scope selector).

{% figure src="/images/compliance-demo/notifications.jpg" alt="Notifications settings" caption="Notifications — the weekly digest and monthly report subscriptions." /%}

{% figure src="/images/compliance-demo/zoom-notifications-cards.png" alt="Zoomed view of the notification subscription cards" caption="Close-up: the weekly compliance digest (aggregated Monday email) and the monthly compliance report (per-requirement %, with a CSV)." /%}

- **Weekly compliance digest**: a per-department or org-level Monday email aggregating expiring/expired certs, overdue trainings, and pending screening matches — instead of per-certification notices.
- **One-click digest actions**: digest emails carry secure single-use links so a TO can mark-lapsed, snooze a week, or jump to renew **without logging in** (14-day expiry, single-use). State-specific reminder ladders (New York's 10 NYCRR 800.9 is pre-seeded) drive the copy.
- **Monthly compliance report**: org counts and per-requirement compliance %, with a CSV and a dashboard deep link.
- **Bulk gap reminders** (also from Roster and Matrix): pick providers, send each a personalized list of their gaps.

---

## 12. Tasks and issues (the remediation loop)

Gaps aren't just displayed, they're workable:

- Every (provider, requirement) gap can become an **issue task**: system-created (screening matches create them automatically), admin-created from any gap, or auto-materialized nightly for requirements with a **default owner**.
- Tasks carry a title, note, owner (TO+), due date, and a link back to the thing they're about, plus a **comment thread**.
- "My tasks" vs "all tasks" views; the nav badge counts open tasks.
- **Issues auto-complete when the underlying gap resolves**: fix the cert, and the task closes itself.

Try it: click a gap cell in the Matrix to open its issue page, comment on it, then look for it in the Overview action queue.

---

## 13. Provider self-view ("My compliance")

Log out and back in with the separately distributed credentials for **James Smith**, or use the "View as Training Officer" toggle to see any provider's own dashboard:

{% figure src="/images/compliance-demo/self-view.jpg" alt="Provider dashboard with the My compliance widget" caption="A provider's personal dashboard, with the My compliance widget on the right." /%}

{% figure src="/images/compliance-demo/zoom-self-view-widget.png" alt="Zoomed view of the My compliance widget" caption='Close-up: the provider sees only their own items in the same status language — Missing ("No active certification on file") and Compliant ("Last satisfied … via attestation; next due …").' /%}

Each item has **fix-it actions**: update certifications, view assignments, or verify with National Registry (which prompts for a date of birth if none is on file). Providers never see anyone else's data and have no access to the admin dashboard.

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
