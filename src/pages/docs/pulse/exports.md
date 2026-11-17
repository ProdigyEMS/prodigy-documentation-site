---
title: Exports and Audit Ready Export
description: The four files Pulse can export, and how the Audit Ready Export reports each provider's standing as of a date.
---

Pulse exports four CSV files. Three are a copy of what is on screen. The fourth, the Audit Ready Export, reports each provider's standing on each requirement as of the end of a period you choose, with the evidence behind it. {% .lead %}

| Export | From | Contains |
| --- | --- | --- |
| Spreadsheet of this view | Roster > **Export** | Every Roster row matching your filters |
| Export matrix CSV | Matrix > **Export** | The Matrix grid |
| Audit Ready Export | Roster, Matrix or a program page | One row per provider and requirement, as of a date |
| Screening evidence | Screening > **Export** | Every active member with their screening result: one row for each match, or one `no_match` row. Organization Admins only. See [OIG Exclusion Screening](/docs/pulse/screening#export-the-evidence). |

---

## Audit Ready Export

Training Officers and Admins can run it. It covers the scope of the view you are in: the whole organization, or your department.

1. On the Roster or the Matrix, open **Export** and choose **Audit Ready Export**. To limit it to one program, use the **Audit Ready Export** button on that [program's page](/docs/pulse/programs).
2. Set **Period from** and **To**. They start as January 1 of this year and today.
3. Leave **Include people no longer active** on to include the people who left during the period.
4. Check the preview, then click **Download CSV**.

{% figure src="/images/pulse/audit-ready-export.png" alt="The Audit Ready Export dialog with the period dates, the people no longer active option and a preview of the first rows" /%}

### How dates are applied

- Each current provider is judged as of the **To** date, using only records dated on or before it.
- A **To** date in the future is treated as today.
- A person who left during the period is frozen at their last day. A person who left before the period, or who came under a requirement after it, is left out.

### Columns

Last name, First name, Email, Department, Joined, Requirement, Type, Status, Status as of, Due or expires, Last satisfied, Evidence, Signed off by, Signed off on, Verification, Verified on, No longer active, Last day, Left scope.

Rows are sorted by last name, first name, then requirement. The file is named `audit-ready-export` with the program, when there is one, and the dates.

### What it leaves out

- Exclusion screening. Use the screening evidence export.
- Assignments.
- Providers that no requirement applies to.
- Evidence files themselves. The **Evidence** column says what is on record. To show an inspector a certificate, preview it from the Roster or the Matrix.

It cannot be narrowed to a single requirement, other than through a program.

## Show a document during an inspection

On the Roster, click a row's status, or choose **Preview certificate** in its menu. On the Matrix, click a Compliant cell. The preview shows the provider, requirement, status, expiration, verification and the stored image or PDF, with **Open full size**. It has no download button.

## Roster spreadsheet

**Spreadsheet of this view** exports every row that matches the Roster's current filters and sort, across all pages. The Type and Status columns hold codes, such as `training` for a Class and `overdue`, in place of the labels on screen.
