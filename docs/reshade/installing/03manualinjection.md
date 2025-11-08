---
title: "Manually Injecting ReShade"
sidebar_label: "Manually Injecting ReShade"
description: "When all else fails, force it."
slug: /reshade/installing/reshademanualinjection
sidebar_position: 3
hide_title: true
---

# Manually Injecting ReShade

Certain games do not support automatic ReShade injection during runtime. This is especially common for UWP (Microsoft Store) games, which often disallow automatic injection. Thankfully, Crosire has developed a tool for manual DLL injection into games. This guide will walk you through each step of the manual injection process, so you can get ReShade working in any supported game.

---

## Determine Game Architecture and Rendering API

Before manually installing ReShade, you need to identify two key details about your game: its bit architecture (32-bit or 64-bit) and the Rendering API it uses (such as DirectX 9, DirectX 10, DirectX 11, DirectX 12, or OpenGL). This information is essential for selecting the correct ReShade binary and renaming it properly so your game can load it.

You can usually find your game's architecture and Rendering API on the [PCGamingWiki website](https://www.pcgamingwiki.com/wiki/Home).

## Download the ReShade Injector

Choose the injector based on your game's architecture:

* [64-bit Injector](https://reshade.me/downloads/inject64.exe)
* [32-bit Injector](https://reshade.me/downloads/inject32.exe)

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

## Place the DLL in Your Game Directory

Now that you have the right ReShade binary, go ahead and move this into your game's directory. This is the same folder where your game's executable file is located. 

If you are unsure where this is, you can usually find it by right-clicking your game in your game launcher (such as Steam or GOG Galaxy), selecting "Manage" or "Browse local files," and looking for the folder that contains the executable. Alternatively, you can follow [our guide for finding your game's executable](../../additionalguides/findexecutable)

## Install Shader Repositories and Add-ons

After injecting ReShade, you'll need to add shader repositories for it to have any visual effect in your games. Without shaders, ReShade will not change your game's appearance. To go through this process, you can take a look at our guide for [manually installing shaders](./reshademanualshaderinstall). This guide will walk you through downloading shader repositories, extracting them, and placing them in the correct folder so ReShade can detect and use them.

If you want to add additional functionality to ReShade, you can install Add-ons here as well. For step-by-step instructions, see our guide for [manually installing Add-ons](./reshademanualaddoninstall).

## Manually Inject ReShade

The last step for using the ReShade injector is quite simple, but you may need to follow closely. Make sure to close your game, and then navigate to your game's directory. Then, open a command prompt terminal by typing `CMD` into your File Explorer's address bar.

![CMD Address Bar](https://assets.martysmods.com/reshade/installing/injectioninstall/GameDirectoryCMDAddressBar.webp)

Once CMD has opened, make sure to type: `inject[32/64].exe "name_of_the_process.exe"` and hit Enter. Replace `[32/64]` with the appropriate architecture and `name_of_the_process.exe` with your game's actual executable name.

![Injection Parameters](https://assets.martysmods.com/reshade/installing/injectioninstall/InjectionParametersInject32.webp)

After running the injection command, launch your game. You should see the "ReShade is now installed successfully" banner at the top of your screen when the injection is successful.