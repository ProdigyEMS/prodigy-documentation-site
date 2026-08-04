---
title: Managing Users
description: Learn how to manage users in your Prodigy account.
---

The Users section of your training officer account gives you access to everything you need to manage your department's staff, from inviting new users and importing them in bulk to viewing individual training records and managing group assignments.

To get started, click **Users** in the left sidebar of your training officer account.

{%videoplayer mediaId="w2iDRVRe" /%}

---

## Department Users

{%figure src="/images/user-management-1.png" alt="My Users page showing department users list with filters" /%}

The **Department Users** tab shows a table of all users currently in your department. Each row displays the user's name, employee ID, phone, email, role, and status. You can sort the table by clicking on any column header.

Use the filters at the top of the table to narrow down your view. You can filter by **Status** (Active or Inactive), **User Role** (General User, Training Officer, or Admin), and **Groups**. Click the refresh button to reset your filters. To download the current filtered view as a CSV, click the **Export** button in the top right corner of the table.

Click on any user's name to open their individual user record.

## Adding Users

There are several ways to add users to your department. If you have questions about the best option for your organization, we are happy to help get you started.

{% callout title="Want this fully automated?" %}
If your organization uses an HR system, [SFTP User Sync](/docs/sftp-user-sync) can create, update, and deactivate users automatically from a scheduled CSV export, no manual uploads needed.
{% /callout %}

### Invite Users

{%figure src="/images/user-management-2.png" alt="Invite Users modal with email and role fields" /%}

Click the **Invite Users** button in the top right of the My Users page. Enter the email address in the **To** field. You can add multiple emails at once by pasting a list, and each one will appear as a separate email in the field.

Select a **User Role** from the dropdown (General User, Training Officer, or Admin) and click **Send Invite**. Each user will receive an email asking them to join your department. If they don't already have a Prodigy account, they will be prompted to create one. If they already have an account, even with a different email address, they can connect it to your department.

{% callout title="Copy Invitation Link" %}
The Invite Users modal also includes a Copy Invitation Link option. This generates a link that anyone can use to register and join your department. The link can be used multiple times and doesn't expire for a year. We recommend using direct invitations whenever possible for better control over who joins your department.
{% /callout %}

### Invitations Tab

{%figure src="/images/user-management-3.png" alt="Invitations tab showing pending invites with status and resend option" /%}

After sending invitations, switch to the **Invitations** tab to track their status. Each invitation shows the email, invite date, department, role, and current status. Pending invitations will show a **Pending** status along with a **Resend Invite** link if you need to send the email again.

Once a user accepts their invitation, they will be moved to the Department Users tab and the invitation will be removed from this list. If you need to cancel an invitation, select the checkbox next to it and click **Remove Selected**.

You can search invitations by email and filter by status using the controls at the top of the table.

### Upload Users CSV

{%figure src="/images/user-management-4.png" alt="Import Users page with CSV upload area and sample download link" /%}

For adding multiple users at once, click the **Upload Users CSV** button from the My Users page. If you need help with the file format, click **Download a sample CSV** to get a template that already contains every column below.

{%figure src="/images/user-management-5.png" alt="Sample CSV format showing required columns" /%}

Drag and drop your file or click to upload. The file must be a `.csv` under 25 MiB.

{% callout title="One format, two importers" %}
The bulk uploader and [SFTP User Sync](/docs/sftp-user-sync) read the same columns, so a file built for one works in the other. Only the required set differs: the SFTP sync always needs `department` and `employee_id`, while a department-level upload already knows which department you're importing into.
{% /callout %}

Every column the file can contain, including optional employment dates and existing certifications, is listed under [The bulk upload CSV format](#the-bulk-upload-csv-format) below.

#### Review and Confirm

{%figure src="/images/user-management-6.png" alt="Review and Confirm screen showing imported user details with department and role dropdowns" /%}

After uploading, you will see a **Review and Confirm** screen showing each user that will be imported, including any employee ID, EMS ID, hire and termination dates, and certifications the file supplied. The Department and Role columns are dropdowns, so you can update them here before importing. You can also remove any users you don't want to import by clicking the trash icon.

If your file contains terminated rows, a separate **Users to deactivate** list appears with the confirmation checkbox described under [Deactivating users](#deactivating-users).

When everything looks correct, click **Import Users** to complete the process. If you need to make changes to your CSV, click **Back to Import Users** to start over.

#### Import Summary

{%figure src="/images/user-management-7.png" alt="Import Summary showing Created, Updated, Invited, and Skipped tabs" /%}

After the import completes, you will see an **Import Summary** grouping every row by what actually happened to it:

| Tab | What it means |
| --- | --- |
| **Created** | These people had no Prodigy account. A new account was created and added to the selected department, and each one is emailed a sign-in link to set up their account. |
| **Updated** | These people were already members of the selected department, and their details were updated from the file. |
| **Invited** | These people already had a Prodigy account but weren't in the selected department, so they were sent an invitation instead. They'll also see the invite on their dashboard the next time they sign in. |
| **Skipped** | These people were neither added nor invited because their account is disabled in the system. |
| **Deactivated** | Terminated rows that matched an existing account. Their membership in the selected department was deactivated. |
| **Skipped (deactivation)** | Terminated rows that matched no Prodigy account, so there was nothing to deactivate. |

You can search by email within each tab to find specific users.

If your file included certification or EMS ID columns, two more panels appear below the tabs.

**Certifications** breaks down what happened to each certification block, and lists a reason for every one that wasn't applied:

| Result | What it means |
| --- | --- |
| Created | The certification was added to the user's record. |
| Updated | An existing certification of that type was updated. |
| Pending consent | The user was invited rather than added. Their certifications are held and applied only once they accept the invitation. |
| Skipped | The certification failed validation — the detail line names the row and the reason. |
| Not authorized | You don't share an active administrative role with that user, so you can't manage their certifications. |

**EMS IDs** does the same for the `ems_id` column, reporting how many were set, held pending consent, left unchanged, or rejected as invalid. **Conflicts** lists anyone who already had a different EMS ID, showing both the value that was kept and the one your file proposed — an existing EMS ID is never overwritten.

Click **Got It** when you are done reviewing.

{% callout type="note" title="Invited users' data waits for consent" %}
Certifications and EMS IDs from your file are applied immediately for people you add or already manage. For people who were *invited*, that data is staged against the invitation and only written once they accept — they own their Prodigy account, so they consent before another department's upload touches their records.
{% /callout %}

{% callout type="warning" title="Existing Email Addresses" %}
If an email address is already in use on Prodigy, even if not in your department, the system will not create a new account. Instead, that user will receive an invitation to join your department.
{% /callout %}

<!--
  DEEP-LINKED FROM THE APP. The import wizard's "View the full column
  reference" link targets #the-bulk-upload-csv-format, stored as
  LINKS.DOCS_BULK_UPLOAD_CSV_FORMAT in the prodigy repo
  (frontend/src/shared/links.ts). Rewording this heading changes the slug and
  silently lands those users at the top of the page — nothing errors. Update
  the constant in the same change if you rename it.
-->

## The bulk upload CSV format

This is the full column reference for both the [Upload Users CSV](#upload-users-csv) importer and [SFTP User Sync](/docs/sftp-user-sync). Column names and values are matched case-insensitively and surrounding whitespace is ignored, so `Email` and `email` work equally well, as do `Active` and `Training Officer`. Files exported from Excel using **CSV UTF-8** work as-is.

### Required columns

| Column | Contents |
| --- | --- |
| `firstname` | First name |
| `lastname` | Last name |
| `email` | A valid email address |
| `role` | `general user`, `training officer`, or `admin` |
| `department` | Organization-level uploads only. Must match the name of a department in your organization. A department-level upload doesn't use this column — everyone goes into the department you're uploading from. |

### Optional columns

| Column | Contents |
| --- | --- |
| `employee_id` | Your organization's own identifier for the person. |
| `ems_id` | The user's 12-digit EMS ID (dashes are fine). Only filled in when the user doesn't already have one; an existing EMS ID is never overwritten. |
| `status` | `active` or `terminated`. Defaults to `active` when the column is missing or blank. See [Deactivating users](#deactivating-users). |
| `hire_date` | Hire date in `YYYY-MM-DD` format, stored on the user's department record. A blank value never erases a date that's already set. |
| `termination_date` | Termination date in `YYYY-MM-DD` format, stored the same way. |

### Certification columns

You can seed each provider's existing certifications in the same upload, which saves a lot of manual entry when onboarding a large roster and starts everyone on the right training plan. Add up to five certifications per person using numbered column groups:

```text
cert1_type, cert1_state, cert1_city, cert1_level, cert1_number, cert1_issued, cert1_expiration
cert2_type, cert2_state, cert2_city, ...
```

| Field | Contents |
| --- | --- |
| `certN_type` | The certification type — see below |
| `certN_level` | `EMR`, `EMT`, `AEMT`, or `Paramedic` |
| `certN_state` | Two-letter state code |
| `certN_city` | City |
| `certN_number` | The certification number, including any leading letters |
| `certN_issued` | Issue date in `YYYY-MM-DD` format |
| `certN_expiration` | Expiration date in `YYYY-MM-DD` format |

**Certification types** use the same names shown on the Certifications tab — `NREMT`, `State EMS Certification`, `AHA BLS CPR`, `AHA ACLS (ALS only)`, `AHA PALS`, `PHTLS`, `AMLS`, `CCEMT-P`, `FP-C`, `CCP-C`, `TP-C`, `EVOC`, and the rest of the list. `State EMS` is also accepted as a shorthand for `State EMS Certification`.

**Certification levels** are limited to exactly four values:

| Level | Meaning |
| --- | --- |
| `EMR` | Emergency Medical Responder |
| `EMT` | Emergency Medical Technician |
| `AEMT` | Advanced EMT |
| `Paramedic` | Paramedic |

{% callout type="note" title="There is no Intermediate level" %}
Use `AEMT` for advanced EMT — `Intermediate` is not a recognized value. Critical care is a certification **type** (`CCEMT-P`), not a level, so a critical care paramedic is type `CCEMT-P` with level `Paramedic`.
{% /callout %}

Which fields are required depends on the type:

| Type | What it needs |
| --- | --- |
| `NREMT` | Level, state, city, number, issued, and expiration. The number must be letters followed by seven digits, for example `M1234567`. |
| `State EMS Certification` | Level, state, city, number, issued, and expiration. |
| `CCEMT-P` | Level. |
| Everything else | Just the type. Fill in whichever other fields apply — a CPR card may only need issue and expiration dates — and leave the rest blank. |

If a certification fails any of these rules, only that certification is skipped, with the reason shown in the Import Summary. The person still imports normally.

### Deactivating users

A row with `status` set to `terminated` deactivates that person's membership in the department instead of adding or updating them, exactly like toggling a user to Inactive on their profile. Their training records are kept, and a later `active` row for the same person reactivates them.

Because this is the one destructive thing an upload can do, the Review and Confirm screen lists everyone who will be deactivated and asks you to tick a confirmation checkbox before the import will run. Terminated rows that match no existing Prodigy account are skipped — there's nothing to deactivate.

## Individual User Records

Click on any user's name from the Department Users tab to open their individual record. The user record has three tabs: **User Profile**, **Training Plans**, and **Transcripts**.

### User Profile

{%figure src="/images/user-management-8.png" alt="User Profile showing contact info, department role, groups, status, and password reset" /%}

The User Profile shows the user's basic information on the left side, including their name, email, phone number, employee ID, and EMS ID. Phone number and EMS ID are set by the user on their own account and cannot be edited by training officers. Employee ID can be edited by clicking the pencil icon next to it.

On the right side, you will find several management sections:

**Department Role** allows you to change the user's role within your department using the dropdown. The available roles are General User, Training Officer, and Admin.

**Groups** shows which groups the user belongs to. Groups are created by your department and can be used to organize users for reporting and assignments. Click **Add To Group** to add them to a new group, or click **Remove** next to any group to take them out.

**Member Status** controls whether the user is Active or Inactive in your department. Toggling a user to Inactive removes their access to Prodigy and removes them from billing. This is designed for temporary leave situations like military deployment or extended time off, since you can toggle them back to Active at any time to restore access.

**Remove Member** removes the user from your department entirely. This does not delete their Prodigy account. The user retains access to their personal records on Prodigy but will no longer be able to access department-specific data, training, or resources. They will need to purchase a bundle to continue using the system individually.

{% callout title="Accidental Removal" %}
If you accidentally remove a user, simply invite them back to the department and no records will be lost.
{% /callout %}

**Password** allows you to send a password reset email to the user by clicking **Send Password Reset**.

### Training Plans

{%figure src="/images/user-management-9.png" alt="Training Plans tab showing plan progress with requirement categories" /%}

The **Training Plans** tab shows the user's progress on any assigned training plans. If the user has multiple training plans, use the **Select Training Plan** dropdown in the top right to switch between them.

Each training plan displays the plan name, certification period, and overall progress as both hours completed and a percentage. Below that, the **All Requirements** section breaks down progress by requirement category, showing hours completed toward each requirement group. Click on a category to expand it and see the individual classes counted toward that requirement.

### Transcripts

{%figure src="/images/user-management-10.png" alt="Transcripts tab showing completed classes with filters and certificate downloads" /%}

The **Transcripts** tab shows a complete record of the user's class completions. Each row displays the class name, creation date, take type, duration, registration date, completion date, and CAPCE number if applicable.

Use the filters at the top to narrow the list by **Take Type** (Distributive, Live, or both) and **Credit Type**. You can also search by class name. Click **Export** to download the filtered transcript as a CSV.

The **Certificate** column provides a PDF download icon for each completed class, allowing you to download individual certificates for your records.

{% callout type="warning" title="Deleting Transcript Records" %}
The trash icon next to each transcript row will delete that completion record from the user's transcript. Use this carefully. If a record is deleted by mistake, contact Prodigy support and we can restore it.
{% /callout %}