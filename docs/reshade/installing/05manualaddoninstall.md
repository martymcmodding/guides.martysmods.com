---
title: "Manually Installing Addons"
sidebar_label: "Manually Installing Addons"
description: "Not all addons are available through the ReShade Setup Tool - This guide will walk users through the process of manually installing addons so ReShade can use them."
slug: /reshade/installing/reshademanualaddoninstall
sidebar_position: 5
hide_title: true
keywords: 
 - Manual ReShade Addon Install
 - ReShade Addon Install
tags:
 - ReShade Guide
 - Installing
---

# Manually Installing Add-ons

Not all add-ons are avaliable for install through the ReShade Setup Tool - as so, users will have to manually install add-ons in order for them to load with ReShade when the game is launched.

To follow along with this guide, the **Add-on Support** build of ReShade **must** already be installed and working in your game. If ReShade is not active or installed to your game, you can follow our [guide for installing ReShade with the ReShade Setup Tool](./setuptool).

:::warning
The **Add-on Support** build of ReShade is require to load all external ReShade add-ons. Without it, they will refuse to load.
:::

---

## Housekeeping

Add-ons are programs built to make use of ReShade's "Add-on API". These can do several things to your game and ReShade install: from providing you a history list (like in Photoshop) to providing you with complete [color grading toolsets](../../../shaders/immerseultimate/regradeplus).

When using **DirectX or OpenGL**, add-on files need to be in the same location as the ReShade Binary (dxgi.dll d3d11.dll d3d9.dll or opengl32.dll)

When using **Vulkan**, add-on files need to be in the same location as the game's launched executable (GameName.exe).

---

## Installing for DirectX and OpenGL

1. Locate the ReShade binary location. Typically this is in the same location as the game's executable, however there are cases where the ReShade binary exists in an external folder (FiveM/Source Games). If you cannot find the location of your ReShade binary you can:
     1. Open your game.
     2. Navigate to ReShade's "Settings" tab.
     3. Click "Open base folder in explorer"
         ![ReShadeSettingsBaseFolderButtonHighlight](https://assets.martysmods.com/reshade/installing/addoninstall/ReShadeSettingsBaseFolderButtonHighlight.webp)
2. Loosely place your add-on files (denoted with extenions addon.32 or addon.64) into the folder where your ReShade binary exists. Make sure to not leave your add-ons in a folder, otherwise they will not load.
3. Restart/Start your game.

## Installing for Vulkan

1. Locate your game's executable location. Typically this is in the root folder of your game's installation, however, there are cases where the game's executable is outside of the root folder (All Unreal Engine Games). If you cannot find the location of your game executable, follow through our [guide on finding your game executable](../../additionalguides/findexecutable).
2. Loosely place your add-on files (denoted with extenions addon.32 or addon.64) into the folder where your game executable exists. Make sure to not leave your add-ons in a folder, otherwise they will not load.
3. Restart/Start your game.

---

## Add-on Search Path

Depending the setup of your ReShade install, sometimes newly installed add-ons will not be recognized. If you followed the steps provided above exactly this will typically be due to the changing of ReShade's default Add-on search path. In order to solve this, simply correct "Add-on search path" at the top of ReShade's `Add-ons` tab.

 ![ReShadeAddonsSearchPathHighlight](https://assets.martysmods.com/reshade/installing/addoninstall/ReShadeAddonsSearchPathHighlight.webp)

| Setting            | Path               |
| ------------------ | ------------------ |
| Default Location   | `.\`               |