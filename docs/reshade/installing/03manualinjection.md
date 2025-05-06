---
title: "Manually Injecting ReShade"
sidebar_label: "Manually Injecting ReShade"
description: "Certain games do not support automatic ReShade injection during runtime. This is especially common for UWP (Microsoft Store) games, which often disallow automatic injection."
slug: /reshade/installing/reshademanualinjection
sidebar_position: 3
hide_title: true
keywords: 
 - Manual ReShade Injection
 - ReShade Injection
tags:
 - ReShade Guide
 - Installing
---

# Manually Injecting ReShade

Certain games do not support automatic ReShade injection during runtime. This is especially common for UWP (Microsoft Store) games, which often disallow automatic injection. Thankfully, Crosire has developed a tool for manual DLL injection into games.

:::info
When manually injecting ReShade using Crosire's Inject Tool, you have to manually install shaders as well.
:::

---

## Identify Your Game’s Architecture and Rendering API

If you already know your game's architecture and Rendering API, you're more than welcome to skip this part of the guide. However, if you are unsure, make sure to navigate to the [PCGamingWiki website](https://www.pcgamingwiki.com/wiki/Home). This website is home to many wiki pages with just about every game that exists on PC.

## Download the ReShade Injector

Choose the injector based on your game's architecture:

* [64-bit Injector](https://reshade.me/downloads/inject64.exe)
* [32-bit Injector](https://reshade.me/downloads/inject32.exe)

## Download the ReShade Setup Tool

The next step will be to download the latest ReShade installer from the [official ReShade website](https://reshade.me). The installer holds the ReShade binaries required in order to manually install ReShade.

## Download and Install 7-Zip

This guide uses 7-Zip in order to extract the ReShade binaries from the ReShade Installer. You can download and install the latest `.msi` version from [7-Zip's official website](https://www.7-zip.org/download.html). Keep in mind that WinRAR can serve as an alternative, but this guide utilizes 7-Zip for convenience.

## Extract the ReShade DLL

Once 7-Zip is installed, right-click the ReShade Installer `ReShade_Setup_x.x.x.exe`, hover over 7-Zip, and select the "Open archive" option.

![Open with 7-Zip](https://assets.martysmods.com/additionalguides/reshade/setupopenwith7zip.webp)

Upon clicking "Open archive," a new window will appear that holds the two ReShade binaries. You can extract the DLL that relates to your game's architecture by dragging the file out of the 7-Zip window to your desktop.

![Extract DLL](https://assets.martysmods.com/additionalguides/reshade/setup7zipbinaries.webp)

| ReShade Binary Architecture | DLL Name      |
|-----------------------------|---------------|
| ReShade's 64-Bit Binary     | ReShade64.dll |
| ReShade's 32-Bit Binary     | ReShade32.dll |

## Move the ReShade and Inject Binary

You will need to move the ReShade DLL and Inject EXE into the root folder of your game, the same directory where the game's executable is located. If you're unsure of your game's executable location, follow [our guide on identifying your game's executable](/additionalguides/03findgameexecutable).

![Place in Game Folder](https://assets.martysmods.com/additionalguides/reshade/extractedbinaryingamedirectoryreshade32.dll.webp)

## Manually Inject ReShade

The last step for using the ReShade injector is quite simple, but you may need to follow closely. Make sure to close your game, and then navigate to your game's directory. Then, open a command prompt terminal by typing `CMD` into your File Explorer's address bar.

![Open CMD](https://assets.martysmods.com/additionalguides/reshade/extractedbinaryingamedirectorycmdaddressbar.webp)

Once CMD has opened, make sure to type: `inject[32/64].exe "name_of_the_process.exe"` and hit Enter.

![Inject Command](https://assets.martysmods.com/additionalguides/reshade/terminalinjectionparametersinject32.exe.webp)

After you've hit Enter, you will need to launch your game. If successful, ReShade will be injected on the launch of your game!