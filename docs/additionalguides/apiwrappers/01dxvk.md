---
title: "DXVK"
sidebar_label: "DXVK"
description: "DXVK is a rendering API wrapper used to translate games that use the DirectX rendering API to Vulkan. DXVK is highly useful for adapting older DirectX 8, 9, and 10 games so that they can benifit from ReShade's compute shaders."
slug: /additionalguides/apiwrappers/dxvk
sidebar_position: 1
hide_title: false
keywords: 
 - Rendering API
 - DXVK
tags:
 - Additional Guide
 - Rendering API
---

## Use Case
DXVK is a rendering API wrapper used to translate games that use the DirectX rendering API to Vulkan. This is primarily used in the Linux community to run Windows games on Linux, however, DXVK is highly useful for adapting older DirectX 8, 9, and 10 games so that they can benifit from ReShade's compute shaders.

---

## Download DXVK
Download the latest DXVK version from [their GitHub releases](https://github.com/doitsujin/dxvk/releases).
![DXVK Releases](./images/dxvkreleases.webp)

## Navigate to Game Directory
Refer to [our guide on locating your game's directory](../03findgameexecutable).

## Find Game Archtexture and Rendering API
Refer to [PCGamingWiki](https://pcgamingwiki.com/) to determine your game's rendering API and architecture.

## Open DXVK Archive
Open the downloaded DXVK Archive using [7zip](https://www.7-zip.org/).

Inside, you'll find `x64` and `x32` directories. Navigate to the appropriate folder based on your game's architecture.

![DXVK Archive Arch](./images/dxvkarchivearch.webp)

## Find Proper DLL
Inside the chosen architecture directory, you'll find files corresponding to different rendering APIs:

| File Name     | DirectX Version   |
|---------------|-------------------|
| dxgi.dll      | DirectX 11 and 12 |
| d3d11.dll     | DirectX 11        |
| d3d10core.dll | DirectX 10        |
| d3d9.dll      | DirectX 9         |
| d3d8.dll      | DirectX 8         |

## Transfer DXVK DLL
Place the chosen DLL in the same location as the game's executable.

## Reinstall ReShade and with Vulkan
Install ReShade for your game using the Vulkan API and test it. If ReShade doesn't display after installation, you might have selected the wrong application or used the incorrect architecture/DLL.