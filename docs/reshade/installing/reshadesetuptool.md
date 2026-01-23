---
title: "ReShade Setup Tool"
sidebar_label: "ReShade Setup Tool"
description: "The ReShade Setup Tool allows users to go through a step-by-step installation procedure in order to easily download and install ReShade, known shader repositories, and external add-ons."
slug: /reshade/installing/setuptool
sidebar_position: 1
hide_title: true
---

<!----------------------- IMPORTS ---------------------------->

import ImageComparisonSlider from '@site/src/components/ImageComparisonSlider';
import { YTConsentInstallingReShade } from '@site/src/components/YTConsent';
import ReactPlayer from 'react-player'

<!----------------------------------------------------------->

# ReShade Setup Tool

The ReShade Setup Tool is a handy application that guides you step-by-step through everything: downloading and installing the latest version of ReShade, picking shader repositories, and adding any Add-ons you might want.

---

<YTConsentInstallingReShade />

## Selecting Your Game

Upon opening the ReShade Setup Tool, you'll be greeted with a selection of known applications detected on your machine that you can install ReShade to.

If your game isn't listed here in the known applications list, you can click the "Browse..." button at the bottom right of the setup tool. If you don't know where your game is located, read through [our guide on finding your game’s executable and directory](../../additionalguides/findexecutable).

![GameSelect](https://assets.martysmods.com/reshade/installing/SetupToolGameSelect.webp)

## Selecting the Rendering API

For ReShade to function correctly, it needs to know which rendering API your game uses to communicate with your graphics card. Selecting the correct API ensures that ReShade can properly inject its effects into your game.

If you're unsure which rendering API your game uses, you can usually find this information in the game's graphics settings, official documentation, or by checking the [PCGamingWiki page for your game](https://pcgamingwiki.com). Some games may even allow you to choose between multiple APIs.

Once you have identified the correct rendering API, select it in the ReShade Setup Tool to proceed with the installation.

![APISelect](https://assets.martysmods.com/reshade/installing/SetupToolAPISelect.webp)

## Installing Shaders & Presets

Shaders are responsible for the visual enhancements you experience with ReShade. Without shaders, ReShade will not alter your game's appearance. During this step, you will be presented with a list of available shader repositories. Select the repositories you wish to install. If you are unsure about the contents of a repository, you can click its name to visit the corresponding GitHub page for more details.

If you have downloaded a preset and want to install it, you can add it at this stage. Use the "Browse..." button at the bottom of the page to locate and select your preset file. The ReShade Setup Tool will then automatically detect which shaders are required for your preset and ensure they are installed. This makes it easy to get started with your preferred visual style without manually searching for each shader.

![ShaderSelect](https://assets.martysmods.com/reshade/installing/SetupToolShaderSelect.webp)

## Installing Add-ons (Add-on Support Only)

If you are using the Add-on Support build of ReShade, the installer will present you with a list of available Add-ons. Add-ons can significantly expand or alter the functionality of ReShade, offering new features and customization options for your games. These are powerful tools that may work across a wide variety of games.

Before installing any Add-ons, make sure you understand what each one does. Some add-ons may cause compatibility issues, prevent your game from launching, or interfere with your ReShade installation if not used correctly. Always review the description and documentation for each Add-on, and only install those you trust and need.

![AddonSelect](https://assets.martysmods.com/reshade/installing/SetupToolAddonSelect.webp)

---

## Finishing Up

After completing all the steps in the ReShade Setup Tool, launch your game. You should see a banner at the top of your screen confirming that ReShade has been successfully installed. This banner will also display the default key to open the ReShade overlay, which is typically the "Home" key on your keyboard.

If you do not see the banner, double-check that you selected the correct game executable and rendering API during installation. You can always rerun the setup tool if you need to make changes.

Once the banner appears, press the indicated key to open the ReShade interface in-game. From there, you can enable or disable shaders, adjust settings, and load any presets you have installed.

![ReShade In-Game Banner](https://assets.martysmods.com/reshade/installing/ReShadeInstalled.webp)