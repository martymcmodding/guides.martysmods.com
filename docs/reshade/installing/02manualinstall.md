---
title: "Manually Installing ReShade"
sidebar_label: "Manually Installing ReShade"
description: "Sometimes, the ReShade Setup Tool doesn’t provide everything you need or may not work with certain games. This guide will show you how to manually install ReShade."
slug: /reshade/installing/reshademanualinstall
sidebar_position: 2
hide_title: true
keywords: 
 - Manual ReShade Install
 - ReShade Install
tags:
 - ReShade Guide
 - Installing
---

# Manually Installing ReShade

Sometimes the ReShade Setup Tool doesn’t include everything you need or may not work with certain games. This guide shows how to install ReShade manually, giving you full control over the process.

:::info
When manually installing ReShade, you have to [manually install shaders](./reshademanualshaderinstall) as well.
:::

---

## Identify Your Game’s Architecture and Rendering API

If you already know your game's architecture and Rendering API, you're more than welcome to skip this part of the guide. However, if you are unsure, make sure to navigate to the [PCGamingWiki website](https://www.pcgamingwiki.com/wiki/Home). This website is home to many wiki pages with just about every game that exists on PC.

## Download the ReShade Setup Tool

The next step will be to download the latest ReShade installer from the [official ReShade website](https://reshade.me). The installer holds the ReShade binaries required in order to manually install ReShade.

## Download and Install 7-Zip

This guide uses 7-Zip in order to extract the ReShade binaries from the ReShade Installer. You can download and install the latest `.msi` version from [7-Zip's official website](https://www.7-zip.org/download.html). Keep in mind that WinRAR can serve as an alternative, but this guide utilizes 7-Zip for convenience.

## Extract the ReShade DLL

Once 7-Zip is installed, right-click the ReShade Installer `ReShade_Setup_x.x.x.exe`, hover over 7-Zip, and select the "Open archive" option.

![Open with 7-Zip](https://assets.martysmods.com/reshade/installing/Manual7ZipOpen.webp)

Upon clicking "Open archive," a new window will appear that holds the two ReShade binaries. You can extract the DLL that relates to your game's architecture by dragging the file out of the 7-Zip window to your desktop.

| ReShade Binary Architecture | DLL Name      |
|-----------------------------|---------------|
| ReShade's 64-Bit Binary     | ReShade64.dll |
| ReShade's 32-Bit Binary     | ReShade32.dll |

## Rename the DLL File

Change the DLL’s name to match your game’s rendering API so the game will load ReShade at startup:

| Rendering API     | New DLL Name  |
|-------------------|---------------|
| DirectX 9         | `d3d9.dll`    |
| DirectX 10        | `d3d10.dll`   |
| DirectX 11        | `d3d11.dll`   |
| DirectX 12        | `d3d12.dll`   |
| OpenGL            | `opengl32.dll`|

## Move the DLL to Your Game Folder

Copy the renamed DLL into the folder containing your game’s executable (`.exe`). If you need help finding this folder, follow [our guide on finding your game’s executable and directory](../../additionalguides/findexecutable).

![Place in Game Folder](https://assets.martysmods.com/reshade/installing/ManualReShadeDLLGameFolder.webp)