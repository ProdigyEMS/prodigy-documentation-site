---
title: Pulse in the Public API
description: Read a member's Pulse status and your organization's summary through the Prodigy public API with the compliance:read scope.
---

The Prodigy public API has two read-only endpoints for Pulse. One returns a member's items and overall status. The other returns your organization's counts. Use them to show status in a scheduling system, an HR system or a dashboard of your own. {% .lead %}

The full reference, generated from the API itself, is at [public-api.prodigyems.com/docs/api](https://public-api.prodigyems.com/docs/api).

---

## Before you start

You need three things.

1. **Pulse turned on** for your organization.
2. **An access token with the View compliance scope.** An organization Admin creates it under **Settings**, **API Tokens**, by clicking **Generate access token** and ticking **View compliance**. The token is shown once, so copy it then. See [Prodigy API](/docs/api).
3. **A new token if yours is older.** A token cannot be edited, and tokens created before this scope existed do not have it. Generate a new one.

{% figure src="/images/pulse/api-token-scope.png" alt="The Generate access token form with the View compliance scope ticked" /%}

`compliance:read` stands alone. It does not include any other scope, and no other scope includes it.

## Requests

Send the token in the `X-Organization-Access-Token` header. The organization is taken from the token, so no organization id is sent.

```bash
curl -H "X-Organization-Access-Token: YOUR_TOKEN" \
  "https://public-api.prodigyems.com/api/v1/users/compliance?email=avery.stone@example.com"
```

| Endpoint | Parameters | Returns |
| --- | --- | --- |
| `GET /api/v1/users/compliance` | `email` (required) | One member's items and overall status |
| `GET /api/v1/compliance/summary` | None | Organization-wide counts |

Neither endpoint is paged or filtered. There is no endpoint that lists every member's status in one call. Request each member by email.

## One member's status

`GET /api/v1/users/compliance?email=...`

The email must belong to an active member of your organization who is still an active provider in Pulse.

```json
{
  "userName": "Avery Stone",
  "rollup": "overdue",
  "items": [
    {
      "itemType": "training",
      "itemName": "Annual EMS Continuing Education",
      "requirementId": "0F3C2A10-1111-4A2B-9C3D-000000000101",
      "certificationId": null,
      "status": "overdue",
      "dueDate": "2026-10-31",
      "satisfiedOn": "2025-10-31",
      "noExpirationOnFile": false,
      "verification": { "source": "none", "verifiedAt": null },
      "snoozedUntil": null,
      "explain": "Last satisfied 2025-10-31 via class completion; next due 2026-10-31"
    },
    {
      "itemType": "certification",
      "itemName": "AHA BLS CPR",
      "requirementId": "0F3C2A10-1111-4A2B-9C3D-000000000102",
      "certificationId": "7B9E4D20-2222-4C3D-8E4F-000000000201",
      "status": "due_soon",
      "dueDate": "2026-11-30",
      "satisfiedOn": null,
      "noExpirationOnFile": false,
      "verification": { "source": "manual", "verifiedAt": null },
      "snoozedUntil": null,
      "explain": "Certification expires 2026-11-30"
    }
  ]
}
```

| Field | Meaning |
| --- | --- |
| `userName` | The member's first and last name |
| `rollup` | The most severe status among the items. `compliant` when there are no items. |
| `items[].itemType` | `certification`, `training` (a Class), `administrative`, `skill` or `screening` |
| `items[].itemName` | The requirement's name. A screening item is named `LEIE exclusion screening`. |
| `items[].requirementId` | The requirement's id. `null` on a screening item. |
| `items[].certificationId` | The id of the certification that meets it, or `null` |
| `items[].status` | See [Status values](#status-values) |
| `items[].dueDate` | The certification's expiration, or the next due date, as `YYYY-MM-DD`, or `null` |
| `items[].satisfiedOn` | The date it was last met, for training, administrative and skill items |
| `items[].noExpirationOnFile` | `true` when the certification on file has no expiration date. Such an item is `compliant`. |
| `items[].verification.source` | `nremt` (confirmed by the National Registry), `manual` (marked verified by your organization) or `none` |
| `items[].verification.verifiedAt` | When the National Registry last confirmed it, or `null` |
| `items[].snoozedUntil` | The end date of an active snooze, or `null`. A snooze does not change `status`. |
| `items[].explain` | One sentence giving the reason for the status |

Items are ordered most severe first.

A screening item appears only when the member has a match that is pending or confirmed. It carries the status and nothing about the matched record.

## Organization summary

`GET /api/v1/compliance/summary`

```json
{
  "totalProviders": 214,
  "providerRollups": {
    "compliant": 171,
    "due_soon": 22,
    "overdue": 14,
    "missing": 6,
    "pending_review": 1,
    "excluded": 0
  },
  "expiredRecent": 9,
  "expiredOlder": 2,
  "expiring30": 12,
  "expiring60": 8,
  "expiring90": 5,
  "missingRequired": 6,
  "trainingsOverdue": 7,
  "trainingsDueSoon": 19,
  "signOffsNeeded": 4,
  "signOffsDueSoon": 3,
  "screeningPending": 1,
  "unverified": 11,
  "noExpirationOnFile": 3
}
```

| Field | Meaning |
| --- | --- |
| `totalProviders` | Active members counted by Pulse |
| `providerRollups` | Each provider counted once, under their most severe status. Every status is always present. |
| `expiredRecent`, `expiredOlder` | Certifications expired in the last 180 days, and longer ago |
| `expiring30`, `expiring60`, `expiring90` | Certifications expiring in 0 to 30, 31 to 60 and 61 to 90 days. The three do not overlap. |
| `missingRequired` | Required certifications with nothing on file |
| `trainingsOverdue`, `trainingsDueSoon` | Class requirement items overdue and due soon |
| `signOffsNeeded`, `signOffsDueSoon` | Administrative and Skill items needing a sign-off now, and coming due |
| `screeningPending` | Exclusion matches waiting for review |
| `unverified` | Certifications on file for a requirement that nobody has verified |
| `noExpirationOnFile` | Certifications on file with no expiration date |

Snoozed items are left out of the counts and kept in `providerRollups`. The summary covers the whole organization and cannot be limited to a department.

## Status values

From most to least severe: `excluded`, `overdue`, `missing`, `pending_review`, `due_soon`, `compliant`. They mean the same as on screen. See [Statuses](/docs/pulse/statuses).

## Errors

Every error has the shape `{"message": "...", "meta": ...}`. `meta` is `null`, except on some 429 responses.

| Status | When |
| --- | --- |
| 400 | `email` is missing or is not an email address |
| 401 | The token header is missing, or the token is unknown, revoked or expired |
| 403 | The token does not have the `compliance:read` scope. The message says so. |
| 403 | Pulse is not turned on for the organization: "Pulse is not enabled for this organization." |
| 404 | No active member of your organization has that email: "User not found or not in organization." |
| 429 | Too many requests. Wait and try again. |

The scope is checked before the organization's access to Pulse, so a token without the scope gets the scope message either way.

## What the API does not offer

- Nothing can be written. Requirements, sign-offs, snoozes and follow-ups are managed in Prodigy.
- No requirement definitions, groups, programs or owners.
- No certificates or evidence files.
- No detail of an exclusion match, and no way to review one.
- No continuous series requirements. They are left out of `items`, `rollup` and the summary counts.
- No assignments, and no history or trend.

{% callout title="Names in the response" %}
The member response includes the member's name. A token with `compliance:read` and nothing else can therefore read the name of any member whose email the caller already knows.
{% /callout %}
