---
title: Certificate Layouts
description: Learn how to create and manage custom certificate layouts for your organization using the Certificate Layout editor.
---
{% callout type="warning" title="Beta Feature" %}
Certificate Layouts is currently in beta and requires some level of technical knowledge to use. This beta was designed to help us understand which layout features and settings are most valuable to our customers. If you'd like help creating a custom certificate layout, reach out to support@prodigyems.com.
{% /callout %}

Certificate Layouts let organization admins design custom certificate templates that control how completion certificates look for your clinicians. You can adjust the positioning of elements like logos, student names, course details, and signatures using a JSON-based layout editor with a live preview.

{% callout title="Organization Feature" %}
Certificate Layouts are currently available at the organization level only. If you don't see the Manage Layouts option, contact support@prodigyems.com to request access.
{% /callout %}

## Accessing Certificate Layouts

To get to the Certificate Layouts page, navigate to the **Certificates** page under the **Classes** menu in your organization view. From there, click the **Manage Layouts** button in the top right corner of the page.

{%figure src="/images/custom-certificate-1.png" alt="Organization Certificates page with arrows pointing to Certificates in the left navigation and the Manage Layouts button" /%}

This will bring you to the **Certificate Layouts** page where you can see any existing layouts or create a new one.

{%figure src="/images/custom-certificate-2.png" alt="Certificate Layouts page showing an empty state with the Create New Layout button highlighted" /%}

## Creating a New Layout

Click **Create New Layout** to open the layout editor. The editor is split into two main areas: the configuration panel on the left and the live preview on the right.

{%figure src="/images/custom-certificate-3.png" alt="Create Layout page showing the blank layout editor with fields for Layout Name, Description, Background Image, and Layout JSON" /%}

### Layout Name and Description

Give your layout a name so you can identify it later. The **Description** field is optional but helpful if you're managing multiple layouts, for example noting which departments or certificate types a layout is intended for.

### Background Image

You can upload a custom background image for your certificate. This is the full-page design that sits behind all of the certificate content like text and signatures. The image should be a .jpeg or .png file under 10 MiB. For a full size printed certificate, upload a 300 DPI image at 3300×2550 pixels (11×8.5 inches). If you don't upload a background image, the system default will be used.

### Fill Form Using Existing Layout

Rather than building a layout from scratch, you can use the **Fill form using existing layout** dropdown to copy one of the starter layouts as a starting point. Two starter layouts are available: **Prodigy Certificate 2026 1.0** and **Prodigy Certificate 2025**. Selecting one of these will populate the JSON editor with that layout's configuration, which you can then customize to fit your needs.

### Preview with Certificate Template

The **Preview with Certificate Template** dropdown lets you select one of your existing certificate templates to see how real certificate data will look on your layout. This is useful for checking that element positioning, font sizes, and spacing all work well with actual course names, student names, and other details.

## Working with the Layout JSON

The Layout JSON editor is where you control the positioning and appearance of every element on your certificate. When you start from a starter layout, the JSON will already be populated with a complete set of sections.

{%figure src="/images/custom-certificate-4.png" alt="Layout JSON editor with the Jump to section dropdown open showing available sections" /%}

The JSON is organized into sections, each representing a distinct area of the certificate. The available sections include **logo**, **studentName**, **studentCredentials**, **classInfo**, **classDetails**, **firstSignature**, **secondSignature**, and **notes**. Each section defines where that element appears on the certificate and how its content is styled.

Every section has positioning properties that control its placement on the page. The **top** and **left** values set where the section starts (as a percentage of the page), while **w** and **h** control the width and height. The **placeV** and **placeH** properties determine how content is aligned within that section. Inside each section, the **content** array defines the actual elements, whether that's text, images, or label-value blocks. Text elements include properties for font size, line height, font weight, color, and borders.

Values wrapped in triple curly braces like `{{{studentNameValue}}}` or `{{{classLongName}}}` are template variables that get replaced with actual data when a certificate is generated. You don't need to change these variable names, but you can adjust the styling and positioning of the sections that contain them.

{% callout title="Using Jump to Section" %}
For longer JSON configurations, use the **Jump to section...** dropdown above the editor to quickly navigate to a specific section rather than scrolling through the entire document.
{% /callout %}

### Previewing Your Changes

As you make changes to the JSON, click the **Refresh** button above the preview panel to see your updates reflected on the certificate. The preview will show colored overlay boxes on each section so you can see exactly where your sections are positioned on the page. You can toggle the overlay color using the **Preview sections color** option next to the Refresh button.

{%figure src="/images/custom-certificate-5.png" alt="Create Layout page showing a completed layout with the JSON editor on the left and a live certificate preview on the right with colored section overlays" /%}

## Saving Your Layout

When you're happy with your layout, click **Save as Draft** in the top right corner to save your work.

{% callout type="warning" title="Publishing Your Layout" %}
Certificate Layouts is currently in beta. Saving a layout as a draft does not make it available for use on certificates. To have your layout published and applied to certificates, reach out to support@prodigyems.com.
{% /callout %}