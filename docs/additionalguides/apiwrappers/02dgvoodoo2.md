---
title: "dgVoodoo2"
sidebar_label: "dgVoodoo2"
description: "A concise guide to using dgVoodoo2 to wrap legacy DirectX games for ReShade compute shader compatibility."
slug: /additionalguides/apiwrappers/dgvoodoo2
sidebar_position: 2
hide_title: false
keywords: 
 - Rendering API
 - dgVoodoo2
tags:
 - Additional Guide
 - Rendering API
---

dgVoodoo2 is a rendering API wrapper used to translate games that use older DirectX rendering APIs to newer DirectX Rendering APIs. This is highly useful for adapting older DirectX 8, 9, and 10 games so that they can benifit from ReShade's compute shaders.

---

## Download dgVoodoo2
Download the latest version of dgVoodoo2 by visiting [the developer's website](https://dege.freeweb.hu/dgVoodoo2/dgVoodoo2/#latest-stable-version) and downloading the "Latest stable version" of dgVoodoo2.

![dgVodooo2 Releases](https://assets.martysmods.com/additionalguides/apiwrapper/dgvoodoo2/dgVoodoo2Releases.webp)

## Find Your Game’s DirectX Version & Architecture
Afterwards, go to [PCGamingWiki](https://pcgamingwiki.com/) and search for your game. You'll need to take note of:
   - Which DirectX version it uses (e.g., DirectX 9, DirectX 10).
   - Whether the game executable is 32‑bit or 64‑bit.

## Navigate Through the dgVoodoo2 Archive
Once you've found the architecture and and version of DirectX, open the dgVoodo2 ZIP file you downloaded using [7-Zip](https://www.7-zip.org/) or [WinRAR](https://www.win-rar.com/). Inside the archive, you’ll see several files and folders. Navigate into the `MS` folder.

![dgVoodoo2 Archive](https://assets.martysmods.com/additionalguides/apiwrapper/dgvoodoo2/dgVoodoo2Archive.webp)

Within `MS`, you'll find several subfolders, however, the only two that matter to you are `x64` (64‑bit) and `x86` (32‑bit). You'll want to open the folder that matches your game’s architecture.

Once you're inside the right architecture folder, locate the DLL that matches your game’s DirectX version:

| **DLL Name**    | **DirectX Version**  |
| --------------- | -------------------- |
| `d3dim.dll`     | DirectX 6            |
| `ddraw.dll`     | DirectX 7            |
| `d3dim700.dll`  | DirectX 7            |
| `d3d8.dll`      | DirectX 8            |
| `d3d9.dll`      | DirectX 9            |


Copy the appropriate DLL into the same directory as your game’s main executable (e.g., placing `D3D9.dll` alongside `GameExecutable.exe`).

If you’re not sure where your game is installed, refer to [our guide on finding a game’s executable](../findexecutable) for more details.

---

# REST WIP