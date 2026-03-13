---
title: Downloading ReShade
sidebar_label: "Downloading ReShade"
description: "The definitive guide for downloading ReShade."
slug: /reshade/downloading
sidebar_position: 1
hide_title: true
---

<!----------------------- IMPORTS ---------------------------->

import ImageComparisonSlider from '@site/src/components/ImageComparisonSlider';
import { YTConsentInstallingReShade } from '@site/src/components/YTConsent';
import ReactPlayer from 'react-player'

<!----------------------------------------------------------->

# Downloading ReShade

ReShade is an open-source, generic post-processing injector for games and video software. It hooks into the rendering pipeline to apply custom shaders and effects (e.g. ambient occlusion, depth of field, color grading, antialiasing) without modifying game files. ReShade supports Direct3D 9/10/11/12, OpenGL, and Vulkan. Effects are written in ReShade FX (HLSL-based) and work across supported APIs. To limit abuse in online play, the project distributes two builds; both are available at [ReShade's webpage](https://reshade.me/#download).

---

<YTConsentInstallingReShade />

## Standard ReShade Build (Download ReShade X.X.X)

The Standard build has no add-on support and restricts depth-buffer access when internet connectivity is detected. It is the recommended build for online or multiplayer games and for titles with anti-cheat that disallows injectors or add-ons. Use this build unless you specifically need add-ons.

---

## Full Add-On Support ReShade Build (Download ReShade X.X.X with full add-on support)

The Full Add-On Support build allows external add-ons (DLLs that extend ReShade or the host application) and full depth-buffer access at all times. It is intended for single-player or add-on use. Most anti-cheat systems disallow this build; do not use it in online or multiplayer games.

![WebsiteDownload](https://assets.martysmods.com/reshade/download/WebsiteDownload.webp)