---
title: Managing Groups
description: Learn how to manage groups and how they are used on Prodigy.
---

Groups allow you to more easily report, assign classes, and add training plans to users. It also allows you to more easily sort your user list which can be helpful for larger departments.  

---
## Groups
Groups serve 4 main functions in Prodigy, a user can be in multiple groups but does not need to be in any groups. Every group belongs to one department.
### Training Plans and Groups
Organizational training plans are applied to users based on groups. When a custom training plan is built, it will be assigned to a group. When a user is added to a group with a training plan assigned to it, the user will immediately be able to access that plan from their training plans tab. 
### User Tab Filtering
The user table can be filtered based on groups, this allows you to more easily manage large groups of users.
### Class Assignments
When assigning classes, you can filter your list by groups. This will allow you to easily assign a class to an entire group. You may want to assign a class to all Paramedics or all FTOs, this becomes much easier with groups. 
### Pulse Requirements
In an organization with [Pulse](/docs/pulse), a requirement can apply to one or more groups. It then covers whoever is in those groups on the day, so adding someone to a group puts them under its requirements. See [Create a Requirement](/docs/pulse/requirements).
## Where Groups Are Managed
Groups can be managed in two places. Both work on the same groups.

- **The Groups tab under Users.** It lists a department's groups with their member counts, and it is the only place a group can be renamed. See [The Groups Tab](#the-groups-tab).
- **The group panel on the Department tab.** The sections from [Creating a Group](#creating-a-group) onward describe that panel and the Groups panel on a user's record.

## The Groups Tab
Click **Users** in the sidebar, then the **Groups** tab. In the organization view, choose a department in the **Department** picker to list its groups.

- **Create a group.** Type a name in **Group name** and click **New group**.
- **Rename a group.** Click the group's name to open its page, edit the name under **Details** and click **Rename**. A name can be up to 50 characters.
- **Change who is in a group.** On the group's page, move people between **Department members** and **Group members**, then click **Save members**. Only active members of the department can be added.
- **Delete a group.** On the group's page, click **Delete** under **Details** and confirm.

With Pulse, a group's page also has a **Membership rule** that suggests members from the certifications people hold. See [Groups and Suggested Members](/docs/pulse/groups).
## Creating a Group
{%figure src="/images/create-group.png" alt="Group panel on the Department tab with the plus sign button" /%}
Groups are created from the department tab, by hitting the plus sign in the group panel. The only information you need to enter to add a group is a name, then hit Add Group.
{%figure src="/images/group-name.png" alt="Group name field with the Add Group button" /%}
### Editing Groups
A group cannot be renamed from the Department tab. Rename it from [the Groups tab](#the-groups-tab) under Users.
### Deleting Groups
Hitting the pencil edit icon on a group brings up a modal that allows you to delete a group. 

{% callout type="warning" title="Groups a Pulse requirement uses" %}
The Department tab will not delete a group that a Pulse requirement applies to, and it names the requirements. Delete the group from [the Groups tab](#the-groups-tab) instead. A requirement that applied only to that group then applies to everyone in its scope, and the confirmation says so before you delete.
{% /callout %}
## Adding Users to Groups
You can add users to groups from either the groups menu on the department tab or from the user tab.
### From the Department Tab
{%figure src="/images/add-user-group-dept.png" alt="Edit group modal for adding users by name or email" /%}
Click on the pencil icon next to a group and you will be presented with a modal that allows you to enter users names or emails and add them to a group. This is a good option if you are adding multiple people to a group. 
### From the User Tab
{%figure src="/images/add-group-user.png" alt="Groups panel on a user record with Add To Group button" /%}
Click on an individual user from the Users tab and you will see a Groups panel. Click Add To Group to add the user to a group.
## Remove a User from a Group
You can remove a user from a group from the same two spots.
### From the Department Tab
Click the X next to a users name in the group list, this is a better option when removing multiple users.
### From the User Tab
From the individual user record, click the Remove button next to the group name.