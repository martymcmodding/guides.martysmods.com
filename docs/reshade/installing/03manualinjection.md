---
title: "Manually Injecting ReShade"
sidebar_label: "Manually Injecting ReShade"
description: "When all else fails, force it."
slug: /reshade/installing/reshademanualinjection
sidebar_position: 3
hide_title: true
---

# Manually Injecting ReShade
Some games block the usual graphics API hooks that ReShade uses to load at startup. When this happens, the standard installation method does not work, since ReShade’s DLL cannot attach through the normal renamed file method. This is common with UWP (Microsoft Store) games and titles that use protected launchers. 

To get around this, Crosire created a small injection tool that lets you manually load ReShade into the game while it is running. This guide covers how to inject ReShade using that tool.

## Determine Game Architecture and Rendering API
Before manually installing ReShade, identify two key details about your game: its bit architecture (32-bit or 64-bit) and the Rendering API it uses (DirectX 9, 10, 11, 12, or OpenGL).  
If you're not sure about either of these, you can usually find the information on [PCGamingWiki](https://www.pcgamingwiki.com/wiki/Home).

## Download the ReShade Injector
Choose the injector that matches your game's architecture:

* [64-bit Injector](https://reshade.me/downloads/inject64.exe)  
* [32-bit Injector](https://reshade.me/downloads/inject32.exe)  

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

## Install Shader Repositories and Add-ons
After injecting ReShade, you need shaders for it to have any visual effect. Without shaders, ReShade will not change the game’s appearance. See our guide for [manually installing shaders](./reshademanualshaderinstall) for instructions on downloading, extracting, and placing shader repositories in the correct folder.

You can also add functionality to ReShade through Add-ons. Step-by-step instructions are in our guide for [manually installing Add-ons](./reshademanualaddoninstall).

## Manually Inject ReShade
1. Close your game.  
2. Navigate to your game's folder.  
3. Open a command prompt by typing `CMD` into the File Explorer address bar.  
    ![CMD Address Bar](https://assets.martysmods.com/reshade/installing/injectioninstall/GameDirectoryCMDAddressBar.webp)
4. Type the injection command: `inject[32/64].exe "name_of_the_process.exe"`
    Replace `[32/64]` with your injector’s architecture and `"name_of_the_process.exe"` with your game's executable name. Press Enter.
    ![Injection Parameters](https://assets.martysmods.com/reshade/installing/injectioninstall/InjectionParametersInject32.webp)
5. Launch your game. If the injection succeeds, you will see the "ReShade is now installed successfully" banner at the top of your screen.    
