---
title: "DXVK"
sidebar_label: "DXVK"
description: "Using DXVK to translate games to Vulkan for ReShade"
slug: /additionalguides/apiwrappers/dxvk
sidebar_position: 1
hide_title: true
---

<!----------------------- IMPORTS ---------------------------->

import ImageComparisonSlider from '@site/src/components/ImageComparisonSlider';
import { YTConsentDXVK } from '@site/src/components/YTConsent';
import ReactPlayer from 'react-player'

<!----------------------------------------------------------->

# DXVK
DXVK is an API wrapper that translates DirectX calls into Vulkan. While it's commonly used on Linux to run Windows games, it can also help older DirectX 8/9/10 titles leverage ReShade's compute shaders by presenting them as Vulkan applications.

---

<YTConsentDXVK />

---

## Downloading DXVK
Download the latest version of DXVK by visiting the [DXVK GitHub releases page](https://github.com/doitsujin/dxvk/releases).

![DXVK Releases](https://assets.martysmods.com/additionalguides/apiwrapper/dxvk/DXVKGitHubRelease.webp)

### Finding Your Game's DirectX Version & Architecture
Afterwards, go to [PCGamingWiki](https://pcgamingwiki.com/) and search for your game. You'll need to take note of:
   - Which DirectX version it uses (e.g., DirectX 9, DirectX 10).
   - Whether the game executable is 32‑bit or 64‑bit.

---

## Instaling DXVK
Once you've found the architecture and version of DirectX, open the DXVK ZIP file you downloaded using [7-Zip](https://www.7-zip.org/) or [WinRAR](https://www.win-rar.com/). Inside the archive, you'll see two folders: `x64` (for 64‑bit) and `x32` (for 32‑bit). You'll need to open the folder that matches your game's architecture:

![DXVK Archive Structure](https://assets.martysmods.com/additionalguides/apiwrapper/dxvk/DXVKArch.webp)

Within the chosen architecture folder, you'll find several `.dll` files. Each one corresponds to a DirectX version:

| **DLL Name**     | **DirectX Version**     |
| ---------------- | ----------------------- |
| `d3d8.dll`       | DirectX 8               |
| `d3d9.dll`       | DirectX 9               |
| `d3d10core.dll`  | DirectX 10              |
| `d3d11.dll`      | DirectX 11              |
| `dxgi.dll`       | DirectX 11 / DirectX 12 |

Copy the appropriate DLL into the same directory as your game's main executable. If you're not sure where your game is installed, refer to [our guide on finding a game's executable](../03findgameexecutable) for more details.

---

## Installing ReShade

Now that DXVK is installed to your game, you can install ReShade. Since DXVK is translating your game to Vulkan, you'll need to install ReShade for **Vulkan**, not the original DirectX version your game uses.

Download and run the latest ReShade installer from [ReShade.me](https://reshade.me/). When prompted to select your game's Rendering API, choose **Vulkan**. This is important because DXVK is presenting your game as a Vulkan application to ReShade, even though the game originally uses an older DirectX version.

If you need detailed step-by-step instructions for installing ReShade, refer to [our ReShade installation guide](../../reshade/installing/01reshadesetuptool).

After installation is complete, launch your game to verify that both DXVK and ReShade are working correctly. You should see the ReShade overlay appear when you press the default key (usually the Home key), confirming that everything has been set up successfully.