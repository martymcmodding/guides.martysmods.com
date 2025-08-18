---
title: "DXVK"
sidebar_label: "DXVK"
description: "A step-by-step guide to wrapping DirectX 8/9/10 games with DXVK for Vulkan-based ReShade compute shader support."
slug: /additionalguides/apiwrappers/dxvk
sidebar_position: 1
hide_title: false
---

DXVK is an API wrapper that translates DirectX calls into Vulkan. While it’s commonly used on Linux to run Windows games, it can also help older DirectX 8/9/10 titles leverage ReShade’s compute shaders by presenting them as Vulkan applications.

---

## Download DXVK
Download the latest version of DXVK by visiting the [DXVK GitHub releases page](https://github.com/doitsujin/dxvk/releases).

![DXVK Releases](https://assets.martysmods.com/additionalguides/apiwrapper/dxvk/DXVKGitHubRelease.webp)

## Find Your Game’s DirectX Version & Architecture
Afterwards, go to [PCGamingWiki](https://pcgamingwiki.com/) and search for your game. You'll need to take note of:
   - Which DirectX version it uses (e.g., DirectX 9, DirectX 10).
   - Whether the game executable is 32‑bit or 64‑bit.

## Navigate Through the DXVK Archive
Once, you've found the architecture and version of DirectX, open the DXVK ZIP file you downloaded using [7-Zip](https://www.7-zip.org/) or [WinRAR](https://www.win-rar.com/). Inside the archive, you’ll see two folders: `x64` (for 64‑bit) and `x32` (for 32‑bit). You'll need to open the folder that matches your game’s architecture:

   ![DXVK Archive Structure](https://assets.martysmods.com/additionalguides/apiwrapper/dxvk/DXVKArch.webp)

Within the chosen architecture folder, you’ll find several `.dll` files. Each one corresponds to a DirectX version:

| **DLL Name**     | **DirectX Version**     |
| ---------------- | ----------------------- |
| `d3d8.dll`       | DirectX 8               |
| `d3d9.dll`       | DirectX 9               |
| `d3d10core.dll`  | DirectX 10              |
| `d3d11.dll`      | DirectX 11              |
| `dxgi.dll`       | DirectX 11 / DirectX 12 |

You'll need to Identify which DLL matches your game’s DirectX version, and then copy that DLL file into the same folder as the game’s main executable (e.g., alongside `GameExecutable.exe`). 

If you’re not sure where your game is installed, refer to [our guide on finding a game’s executable](../fileextensions) for more details.

## Install ReShade (using Vulkan)
Once DXVK is installed to your game, download and run the latest ReShade installer from [ReShade.me](https://reshade.me/). Then, when you are prompted to select your game's Rendering API, choose Vulkan.

## Verify Everything Is Working
Now that ReShade is installed, make sure everything is working properly by launching your game. If installed correctly, the ReShade overlay should appear (usually showing a small watermark in the corner).

If ReShade does **not** appear:
   - Double‑check that you copied the correct DXVK DLL (matching your DirectX version and system architecture).
   - Make sure you chose the Vulkan API during the ReShade installation step.
   - Confirm you placed ReShade’s `.dll` files in the same folder as the game executable.