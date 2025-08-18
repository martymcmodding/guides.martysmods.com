---
title: "ReShade Setup Tool"
sidebar_label: "ReShade Setup Tool"
description: "The ReShade Setup Tool allows users to go through a step-by-step installation procedure in order to easily download and install ReShade, known shader repositories, and external add-ons."
slug: /reshade/installing/setuptool
sidebar_position: 1
hide_title: true
keywords: 
 - ReShade Setup Tool
 - Setup Tool
tags:
 - ReShade Guide
 - Installing
---

# ReShade Setup Tool

:::warning
This guide assumes that you've already downloaded the build of ReShade that you want to use. If you haven't, read over [our guide for downloading ReShade](../downloading)
:::

The ReShade Setup Tool allows users to go through a step-by-step installation procedure in order to easily download and install ReShade, known shader repositories, and external add-ons.

---

## Selecting Your Game

Upon opening the ReShade Setup Tool, you'll need to select the game you want to install ReShade to. Given to you will be an alphabetically sorted list of known games on your system:

![GameSelect](https://assets.martysmods.com/reshade/installing/SetupToolGameSelect.webp)

If your game isn't listed here, click the "Browse..." button at the bottom right of the Window. Once File Explorer opens up, locate your game’s executable (.exe), that is typically found in the game’s main folder. If you don't know where your game's executable is located, read through [our guide on finding your game’s executable and directory](../../additionalguides/findexecutable).

## Selecting the Rendering API

In order for ReShade to inject into your game properly, it must know the game's rendering API. You'll make that selection here. If you don’t know what Rendering API your game uses, look through [PCGamingWiki's page for your game](https://pcgamingwiki.com).

![APISelect](https://assets.martysmods.com/reshade/installing/SetupToolAPISelect.webp)

## Installing Shaders

Shaders/Effects are the tools that you use inside of ReShade in order to make a change on screen. They'll be required to have ReShade actually do anything. Here, you'll select the shader repositories that you want and click "Next".

![ShaderSelect](https://assets.martysmods.com/reshade/installing/SetupToolShaderSelect.webp)

## Installing Presets

Presets apply user made configurations of shaders in order to achieve different visuals without the user having to manually adjust individual shaders that they've installed. To install a preset and all of the shaders that are required for it to function properly, click "Browse..." on the shader installation screen and select your `.ini` file.

## Installing Add-ons (Add-on Support Only)

Add-ons extend ReShade’s capabilities via the Add-on API, offering advanced or experimental features. It's always recommended to know what you're selecting before you install ANY add-ons, as there's potential for them to prevent your game from launching or messing up your ReShade install if you're not fully aware of how they work.

![AddonSelect](https://assets.martysmods.com/reshade/installing/SetupToolAddonSelect.webp)

## Finishing Up

After your ReShade installation completes, click the "Finish" button, launch your game and then look at the top for the “ReShade is now installed successfully” banner:

![ReShade In-Game Banner](https://assets.martysmods.com/reshade/installing/ReShadeInstalled.webp)