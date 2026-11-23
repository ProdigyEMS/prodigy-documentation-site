---
title: Certifications
description: Learn how to management certifications in your Prodigy account. 
---

The certifications section allows you to add certifications for individuals and report on certification status.  
{%videoplayer mediaId="ZmRZWMnV" /%}
---

## Report on Certifications
{%figure src="/images/cert-filter-export.png" alt="Certifications list with filter options and export button" /%}
Clicking on the Certifications tab will bring up a list of all certifications for all users in your account. You can filter this list from the top to look at certifications for an individual user, based on status, expiration date, or a specific certification. If you are looking for more detailed reporting, that can be found on the reports page.
{% callout title="Negative Reporting" %}
As a training officer, you may want to see all users who don't have a particular certification at all. You may request all users upload a copy of their CPR card and you will need to see who is outstanding. This can be done on Reporting->User Certifications->Status->No Certification.
{% /callout %}
### Verification
{%figure src="/images/verified.png" alt="Verified checkbox column in the certifications list" /%}
The Verification option is a tool designed to help you with reporting. After a user uploads a certification, you can confirm the information and image are correct and select verified. This will let you know when reviewing certifications in the future that you have already confirmed the certification is valid. If a user makes any changes, the certification will no longer be listed as valid. 
### National Registry Verification
An NREMT certification can also be checked with the National Registry of Emergency Medical Technicians. Prodigy looks up the certification number and compares the Registry's expiration date with the one on file. When they match, the certification is marked verified. When they differ, the result shows both dates so the record can be corrected.

- **A provider** can check their own certification. After adding an NREMT certification, Prodigy offers to verify it. Later, the certification's row on its page under Certifications has a **Verify with National Registry** button.
- **A training officer or Admin** in an organization with Pulse can check members' certifications from **Pulse > National Registry**: a department training officer for their own department, an organization training officer or Admin for the whole organization. The page also shows which certifications the Registry has confirmed and which were only ticked as verified by hand.

This checks National Registry certifications only. A state license, a CPR card and every other certification type still rely on the Verified tick above. See [National Registry Verification](/docs/pulse/national-registry) for what is sent to the Registry and what each result means.
### Export
Clicking the export button will download a spreadsheet of the current view.
### Review Images
{%figure src="/images/view-cert.png" alt="Image icon for viewing an uploaded certification image" /%}
Users or a training officer can upload images to a certification record. You can view this image by clicking the image icon next to the verified column.
## Certifications and Pulse
In an organization with [Pulse](/docs/pulse), a certification requirement reads what is typed on the certification: its type, level, state, expiration date and, for a driver's license, its status. It does not read the uploaded image. A certification with no expiration date counts as current, so enter the date for anything that expires. See [Requirement Kinds](/docs/pulse/requirement-kinds).
## Adding an Editing Certifications
A training officer or a user can add an individual certification to an account.
### Adding a Certification
{%figure src="/images/add-cert.png" alt="Add Certification form with type, number, and date fields" /%}
1. **Select the user** you are adding the certification to.
2. **Select the certification type** — the remaining fields will update based on your selection. The two most common types are NREMT and State EMS Certification.
3. **State and City** are required for NREMT and State EMS Certification. We are required to report these to CAPCE and also use the state to build more accurate training plans.
4. **Certification Number** — enter the full number, including any leading letters. For example, a Paramedic NREMT certification begins with the letter M. This is used to help link records on the NREMT site.
5. **Issued Date** — the date the most current certification was received.
6. **Expiration Date** — the listed expiration date on the certification. Prodigy counts classes on a training plan between the issued date and the expiration date, which allows users to start classes at any point in their recertification cycle.
7. **Image** — uploading a copy of the certification is optional.

For the Driver's License type, the form has three more fields: **License class**, **Endorsements** and **License status** (Active, Suspended or Revoked). None of the three is required. In an organization with Pulse, a license marked Suspended or Revoked counts as expired whatever its expiration date.
{% callout type="warning" title="Wrong Initial Date" %}
It is common for users to see old classes on their training plan even after updating their expiration date. This is almost always due to an incorrect Issued Date. This date should be set to when they received their most current card, for NREMT certified providers, this can be found on the NREMT website. Many users just use their last expiration date, which works as long as you haven’t started any training before that date.
{% /callout %}
### Edit a Certification
{%figure src="/images/edit-cert.png" alt="Pencil icon opening the Edit Certification form" /%}
Clicking the pencil icon next to a certification will allow you to edit that certification. All of the same setting you have on the Add Certification option will be available. 
{% callout title="Edit Vs Add New" %}
We recommend editing only to correct mistakes in old certification. If you are looking to change expiration dates after a certification has been renewed, you should add a new certification. Prodigy keeps historical records of certifications, these records can be searched by a training officer and are presented to the user. 
{% /callout %}
### Confirm Issue Date
A National Registry check can find that a certification was renewed and move its expiration date forward. Prodigy then estimates the new issued date, and the certification shows a **Confirm Issue Date** button until the provider confirms the estimate or enters the date from the new card. Training plans count classes from the issued date, so check it against the card. See [When Prodigy updates the date for you](/docs/pulse/national-registry#when-prodigy-updates-the-date-for-you).
### Deleting a Certification
Clicking on the pencil edit icon will give you the option to delete a certification.  