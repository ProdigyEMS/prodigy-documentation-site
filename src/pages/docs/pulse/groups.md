---
title: Groups and Suggested Members
description: Manage groups from the Groups tab under Users, and let a certification rule suggest who belongs in each group.
---

Groups are how a requirement follows a role. A requirement aimed at the Paramedics group applies to whoever is in that group today. Groups are managed on a **Groups** tab under **Users**, and with Pulse a group can carry a rule that suggests members from the certifications people hold. {% .lead %}

Every group belongs to one department. There are no organization-wide groups. Training Officers and Admins can manage the groups of the departments they manage.

The Groups tab is available to every organization. Membership rules and suggestions need Pulse.

---

## Open the Groups tab

Click **Users** in the sidebar, then the **Groups** tab. In the organization view, choose a department in the **Department** picker to list its groups.

{% figure src="/images/pulse/groups-list.png" alt="The Groups tab under Users, listing each group with its department and member count" /%}

A red number next to a group's name is its count of suggested members waiting for a decision.

## Create a group

1. In the organization view, pick the department.
2. Type a name in **Group name**.
3. Click **New group**.

## Change a group

Click the group's name to open its page.

- **Rename.** Edit the name under **Details** and click **Rename**. A name can be up to 50 characters.
- **Members.** Under **Members**, move people between **Department members** and **Group members**, then click **Save members**. Only active members of the department can be added.

## Delete a group

On the group's page, click **Delete** under **Details** and confirm.

{% callout type="warning" title="Deleting a group can widen a requirement" %}
If a requirement applies only to the group you delete, it then applies to everyone in its scope. With automatic assignments on, those people are assigned its class. The dialog warns you. Change the requirement's **Who** step first if that is not what you want.
{% /callout %}

The older groups panel on the Department page refuses to delete a group that a requirement uses and names the requirements. Delete such a group from the Groups tab, after reading the warning.

## Suggest members with a rule

A membership rule names a certification type, a level, or both. Pulse then suggests the active department members who hold a current certification that matches and who are not in the group yet.

1. Open the group's page and find **Membership rule**.
2. Choose a **Certification type**, a **Level**, or both.
3. Click **Save rule**.

{% figure src="/images/pulse/group-rule.png" alt="A group's Membership rule section with the certification type picker, Save rule and the Suggested members list" /%}

Suggested people appear under **Suggested members**.

- **Approve** adds the person to the group, recorded under your name. **Approve all** adds everyone listed.
- **Dismiss** removes the suggestion. That person is not suggested again for this rule. Replacing the rule makes dismissed people eligible again.

Suggestions are recalculated when you save a rule, when anyone's certifications change, every night at 3:00 a.m. Eastern, and when you click **Recompute**. A suggestion disappears by itself when it stops applying, for example when the certification lapses.

## What rules do not do

- A rule never adds anyone by itself. Every member is approved by a person.
- A rule never removes anyone, and never suggests a removal. When someone's certification lapses, they stay in the group until you remove them.
- A rule matches on certification type and level only.
- A group has one rule at a time.
