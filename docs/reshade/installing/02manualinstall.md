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

---

## Determine Game Architecture and Rendering API

Before manually installing ReShade, you need to identify two key details about your game: its bit architecture (32-bit or 64-bit) and the Rendering API it uses (such as DirectX 9, DirectX 10, DirectX 11, DirectX 12, or OpenGL). This information is essential for selecting the correct ReShade binary and renaming it properly so your game can load it.

You can usually find your game's architecture and Rendering API on the [PCGamingWiki website](https://www.pcgamingwiki.com/wiki/Home).

## Download the ReShade Setup Tool

Now that you have the bit arcitechture and Rendering API, you'll need to grab the latest ReShade Setup Tool to continue. This can be found at the bottom of the [ReShade website](https://reshade.me/#download).

## Extract the ReShade Binary

After downloading the latest ReShade Setup Tool, you need to extract the ReShade binary files from the installer. The ReShade Setup Tool is distributed as an executable file, but you can open it with an archive manager like 7-Zip or WinRAR to access its contents. This guide will use 7-Zip for clarity.

Right-click the ReShade Setup Tool file and choose "Open archive" with 7-Zip. A new window will open, showing the files inside the installer.

![Open with 7-Zip](https://assets.martysmods.com/reshade/installing/Manual7ZipOpen.webp)

Inside the archive, you will find two DLL files. These are the ReShade binaries, and you need to choose the one that matches your game's architecture:

| ReShade Binary Architecture | DLL Name      |
| --------------------------- | ------------- |
| 64-bit                      | ReShade64.dll |
| 32-bit                      | ReShade32.dll |

To extract the correct DLL, simply drag it from the 7-Zip window to your desktop or another folder. Make sure you select the DLL that matches whether your game is 32-bit or 64-bit. If you are unsure about your game's architecture, you can usually find this information on PCGamingWiki or by checking the properties of your game's executable file.

## Rename the DLL File

After extracting the correct ReShade binary, you need to rename the DLL file so that your game recognizes and loads it. The name you choose depends on the rendering API your game uses. Use the table below to determine the correct name for your DLL file:

| Rendering API      | DLL Name       |
| ------------------ | -------------- |
| DirectX 9          | `d3d9.dll`     |
| DirectX 10         | `d3d10.dll`    |
| DirectX 11         | `d3d11.dll`    |
| DirectX 12         | `d3d12.dll`    |
| OpenGL             | `opengl32.dll` |

## Place the DLL in Your Game Directory

After renaming the DLL file according to your game's rendering API, move the DLL into your game's main directory. This is the same folder where your game's executable file is located. 

If you are unsure where this is, you can usually find it by right-clicking your game in your game launcher (such as Steam or GOG Galaxy), selecting "Manage" or "Browse local files," and looking for the folder that contains the executable. Alternatively, you can follow [our guide for finding your game's executable](../../additionalguides/findexecutable)

![Place in Game Folder](https://assets.martysmods.com/reshade/installing/ManualReShadeDLLGameFolder.webp)

## Install Shader Repositories and Add-ons

After installing ReShade, you'll need to add shader repositories for it to have any visual effect in your games. Without shaders, ReShade will not change your game's appearance. To go through this process, you can take a look at our guide for [manually instaling shaders](../manualshaderinstall). This guide will walk you through downloading shader repositories, extracting them, and placing them in the correct folder so ReShade can detect and use them.

If you want to additional functionality to ReShade, you can install Add-ons here as well. For step-by-step instructions, see our guide for [manually installing Add-ons](../manualaddoninstall).