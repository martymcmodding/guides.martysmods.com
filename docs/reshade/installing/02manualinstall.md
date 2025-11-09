---
title: "Manually Installing ReShade"
sidebar_label: "Manually Installing ReShade"
description: "The classic manual install for ReShade."
slug: /reshade/installing/reshademanualinstall
sidebar_position: 2
hide_title: true
---

# Manually Installing ReShade
Some games and applications are not compatible with the ReShade Setup Tool, or the tool may not work as expected in certain situations. In these cases, you will need to manually install ReShade using the classic method. This guide will walk you through each step of the manual installation process, so you can get ReShade working in any supported game.

## Determine Game Architecture and Rendering API
Before manually installing ReShade, identify two key details about your game: its bit architecture (32-bit or 64-bit) and the Rendering API it uses (DirectX 9, 10, 11, 12, or OpenGL).  
If you're not sure about either of these, you can usually find the information on [PCGamingWiki](https://www.pcgamingwiki.com/wiki/Home).

## Download the ReShade Setup Tool
Download the latest ReShade Setup Tool from the [ReShade website](https://reshade.me/#download).

## Extract the ReShade Binary
The ReShade Setup Tool is distributed as an executable, but its contents can be extracted using an archive manager such as 7-Zip or WinRAR. This guide uses [7-Zip](https://www.7-zip.org/download.html).

1. Right-click the ReShade Setup Tool executable and select **Open archive** with 7-Zip.  
2. A window will open showing the files inside the installer.  

![Open with 7-Zip](https://assets.martysmods.com/reshade/installing/Manual7ZipOpen.webp)

Inside, you will find two DLL files. Choose the one that matches your game's architecture:

| ReShade Binary Architecture | DLL Name      |
| --------------------------- | ------------- |
| 64-bit                      | ReShade64.dll |
| 32-bit                      | ReShade32.dll |

Drag the correct DLL to your game's folder. This is the same folder that contains the game's executable.  
If you are unsure where that is, right-click your game in your launcher (Steam, GOG Galaxy, etc.), select **Manage** or **Browse local files**, and look for the folder containing the executable. Alternatively, see our guide for [finding your game's executable](../../additionalguides/findexecutable).

## Rename the DLL File
After placing the ReShade binary in your game folder, rename it according to the Rendering API your game uses:

| Rendering API      | DLL Name       |
| ------------------ | -------------- |
| DirectX 9          | `d3d9.dll`     |
| DirectX 10         | `d3d10.dll`    |
| DirectX 11         | `d3d11.dll`    |
| DirectX 12         | `d3d12.dll`    |
| OpenGL             | `opengl32.dll` |

## Install Shader Repositories and Add-ons
ReShade requires shaders to have any visual effect. Without them, your game will appear unchanged.

To install shaders manually, see our guide for [manually installing shaders](../manualshaderinstall). This will walk you through downloading, extracting, and placing shader repositories so ReShade can detect and use them.

You can also add extra functionality through Add-ons. Step-by-step instructions are available in our guide for [manually installing Add-ons](../manualaddoninstall).