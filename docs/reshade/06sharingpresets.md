---
title: "Creating and Sharing Presets"
sidebar_label: "Creating and Sharing Presets"
description: "How to Create and Share Presets"
slug: /reshade/creatingandsharingpresets
sidebar_position: 6
hide_title: true
---

# Creating and Sharing ReShade Presets

Creating a ReShade preset that looks great and sharing it with others can be a rewarding experience. However, there are important considerations to keep in mind when building and distributing presets, from following proper load order principles to respecting shader copyrights. This guide will walk you through the entire process.

---

## Creating a Preset with Load Order in Mind

When creating a preset, it's essential to follow the load order principles. For a complete understanding of load order and the tier system, refer to [our Load Order guide](./loadorder).

### Start with a Clean Foundation

Before diving into ReShade, it's important to have a clear understanding of what you want to achieve with your preset. Familiarize yourself with graphics techniques used in photography, film, and modern games, and identify specific visual improvements you want to add to your game.

For example, if you want to add **bloom** you might choose a shader like iMMERSE Pro: Solaris, which provides physically based exposure and bloom that replicates real-world sensor behavior like you'd see in a camera.

If you're looking to add **global illumination** you might consider iMMERSE Pro: RTGI for ray-traced global illumination, as it provides the effect of all objects within the game world bouncing light as they would in real life.

For **sharpening** you might use iMMERSE: Sharpen.

By understanding these graphics techniques and having a clear vision of what you want to achieve, you can make informed decisions about which shaders to use and how to configure them. When you need specifics about particular shaders, refer to the [iMMERSE shader documentation](../shaders/immerse/launchpad) for detailed information about each effect.

---

## Avoiding Redundant Shaders

One of the most important principles when creating a preset is to use as few shaders as possible. This concept is covered in detail in [our Load Order guide](./loadorder), which explains how each shader introduces data loss and why using multiple shaders to achieve a single effect is inefficient for both performance and the ending result of your preset.

### One Shader, One Purpose

Each shader in your preset should have a distinct role. For example, rather than using three different shaders to adjust contrast, choose one. Even better, use a single shader that controls multiple elements of post-processing at once, like ReGrade or ReGrade+, which can handle exposure, contrast, saturation, and color grading all in one.

---

## Saving Your Preset

ReShade will save changes made to your preset automatically when the "Auto Save" feature is selected at the top right of the "Home" tab.

If it's deselected, there's a handy save button to the right of the "Auto Save" feature that allows you to manually save and will remove all of the nonsense that's typically saved to an automatically saved preset file.

Even with "Auto Save" enabled, it's a good idea to click the manual save button before you share the preset to the public, as it will make things easier in the long run as well as save users from having to download bigger files.

---

## Understanding Shader Copyright

Before sharing your preset, it's crucial to understand the copyright status of the shaders you've used. Shaders are intellectual property, and their creators have the right to control how they're distributed.

### Free Shaders with Redistribution Restrictions

Many free shaders, even those available on GitHub or other open platforms, have licenses that prohibit redistribution. This means:

- You cannot include the shader files in your preset package.
- You cannot upload shader files to mod hosting sites.
- Users must download the shaders themselves from the original source.

Common examples include shaders from:
- Marty's Mods (iMMERSE, METEOR collections).
- qUINT shaders.

### Paid Shaders

Paid shaders, such as those available through Patreon or other paid platforms, have even stricter restrictions:

- **Never redistribute paid shaders** - This violates copyright and the terms of service.
- Users must purchase or subscribe to access these shaders.
- Including paid shaders in your preset package can result in:
  - Legal action from the creator.
  - Removal of your preset from hosting sites.
  - Potential bans from modding communities.

### Why This Matters

Sharing copyrighted shaders without permission:

- **Violates intellectual property rights** - Shader creators invest time and effort into their work.
- **Harms the creator** - Redistribution of paid content directly impacts their income.
- **Can get you in trouble** - Hosting sites will remove your content and may ban your account.
- **Creates legal liability** - Copyright holders can pursue legal action.

### Checking Shader Licenses

Before sharing a preset, check the license or terms of use for each shader you've included. Look for:

- License files (LICENSE, LICENSE.txt) in shader repositories.
- Terms of service on Patreon pages or paid shader sites.
- README files that may contain usage restrictions.
- Comments in shader files themselves.

If you're unsure about a shader's license, contact the creator or err on the side of caution and don't include it.

---

## Sharing Presets Without Shaders

When sharing your preset, you should **only** share the preset INI file. Never include shader files in your preset package, regardless of whether they're free or paid, as it saves you so much trouble and time going forward.

### What to Include in Your Preset Package

Your preset package should likely contain:

- **The preset INI file** - This is the only file needed.
- **A README or instructions file** (optional but recommended) - Lists required shaders and where to get them.

---

## Where to Share Presets

There are several popular platforms for sharing ReShade presets. Each has its own guidelines and requirements.

### NexusMods

[NexusMods](https://www.nexusmods.com/) is one of the largest mod hosting sites. When uploading presets:

- Upload only the preset INI file.
- Clearly list all required shaders in the description.
- Provide official download links for required shaders.
- Provide on and off images of your preset on the preset listing.

### SweetFXTheLazy

[SweetFXTheLazy](https://sfx.thelazy.net/) is a dedicated database for ReShade and SweetFX presets. When submitting:

- Upload only the preset INI file.
- Clearly list all required shaders in the description.
- Provide official download links for required shaders.
- Provide on and off images of your preset on the preset listing.

### ModDB

[ModDB](https://www.moddb.com/) hosts various types of mods and presets. When sharing:

- Upload only the preset INI file.
- Clearly list all required shaders in the description.
- Provide official download links for required shaders.
- Provide on and off images of your preset on the preset listing.