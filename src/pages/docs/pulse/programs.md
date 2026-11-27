---
title: Programs
description: Bundle requirements into a program to get one export and one Matrix view for an audit or accreditation.
---

A program is a named bundle of requirements, such as CAAS accreditation or OSHA respiratory protection. It exists for reporting: one Audit Ready Export and one Matrix view for the whole bundle. {% .lead %}

A program does not change who must meet a requirement, who owns it or who signs it off. A requirement can belong to several programs.

Programs are created and changed in the organization view. The department view shows programs that contain requirements it can see, and cannot change them.

---

## Create a program

1. Open **Pulse > Programs** and click **New program**.
2. Enter a **Name**. It must be unique among your programs.
3. Optionally add a **Description** and choose who it is **Run by**. That person must be a Training Officer or Admin at the organization level.
4. Click **Create program**.

{% figure src="/images/pulse/programs-list.png" alt="The Programs page with one row per program showing requirements, providers, fully compliant and with a gap" /%}

You can also create a program on the Program step while creating a requirement.

## Add requirements to a program

1. Click the program's name to open its page.
2. Click **Add requirements**, tick the requirements, and confirm.

To take one out, use **Remove** on its row. The requirement itself, its owner and the people it applies to stay the same.

{% figure src="/images/pulse/program-page.png" alt="A program's page with its counts, the Matrix view and Audit Ready Export buttons, and its requirements table" /%}

## Read a program

The program page counts current providers only.

| Tile | Counts |
| --- | --- |
| Providers | People that any of the program's requirements apply to |
| Fully compliant | People who are Compliant or Due soon on every one of them |
| With a gap | Everyone else |
| Requirements | Requirements in the program |

## Use a program

- **Matrix view** opens the [Matrix](/docs/pulse/matrix) showing only this program's requirements.
- **Audit Ready Export** downloads the [export](/docs/pulse/exports) for this program's requirements only.
- A program's name appears as a chip on each of its requirements in the Requirements list.

## Change the owner on every requirement

On the program page, **Change owner on all** writes one owner to every requirement in the program. You pick the new owner, review the list, and confirm. Certification requirements are skipped, because a certification requirement does not need an owner.

## Delete a program

Open the program's menu and choose **Delete program**. Its requirements stay exactly as they are. Only the grouping and its reports go.
