---
title: "dgVoodoo2"
sidebar_label: "dgVoodoo2"
description: "dgVoodoo2 is a rendering API wrapper used to translate games that use older DirectX rendering APIs to newer DirectX Rendering APIs. This is highly useful for adapting older DirectX 8, 9, and 10 games so that they can benifit from ReShade's compute shaders."
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
Download the latest version of dgVoodoo2 from [the developer's website](https://dege.freeweb.hu/dgVoodoo2/dgVoodoo2/#latest-stable-version).

![dgVodooo2 Releases](./images/dgvoodooreleases.webp)

## Find Rendering API and Architecture
Refer to [PCGamingWiki](https://pcgamingwiki.com/) to determine your game's rendering API and architecture.

## Navigate to Game Directory
Refer to [our guide on locating your game's directory](./additionalguides/findexecutable).

## Open dgVoodoo2 Archive
Open your downloaded copy of the dgVoodoo2 Archive using the latest version of [7zip](https://www.7-zip.org/).

Inside, you'll find several directories along with three additional files. Navigate into the  the `MS` folder.

![dgVoodoo2 Archive](./images/dgvoodooarchive.webp)

After you're in the `MS` folder, you'll find several folders relating to the architecture type of the game's executable. The only two that you'd ever need to go into are `x64`(64 Bit) and `x86` (32 Bit).

## Transfer the Proper DLL

Inside there is likely to be several files, but you only need `D3D9.dll` (DirectX 9) or `D3D8.dll` (DirectX 8). Once you've spotted the right DLL for your rendering API drop it in the same location as the game's executable.