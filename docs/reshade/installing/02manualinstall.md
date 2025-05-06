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

Sometimes, the ReShade Setup Tool doesn’t provide everything you need or may not work with certain games. This guide will show you how to manually install ReShade, giving you full control over the process.

---

## Identify Your Game’s Architecture and Rendering API
First, you need to know if your game is 32-bit or 64-bit and which Rendering API it uses. If you already know this information, skip ahead. If not, visit [PCGamingWiki](https://www.pcgamingwiki.com/wiki/Home) to find the details. This site provides valuable information about many games, including their architecture and Rendering API, such as DirectX versions or OpenGL. Understanding your game’s architecture (32-bit or 64-bit) and Rendering API (DirectX 9, 10, 11, 12, or OpenGL) is important to ensure ReShade functions correctly.

## Download the ReShade Setup Tool
Go to the [official ReShade website](https://reshade.me) and download the latest ReShade installer. While we won’t be using the Setup Tool to install ReShade directly, we need it to extract the necessary files.

## Download and Install 7-Zip
To extract the ReShade installer, download 7-Zip from [7-Zip's official website](https://www.7-zip.org/download.html) and install it. 7-Zip is a free tool that handles many file types, making it ideal for this task.

![7-Zip download page](https://assets.martysmods.com/additionalguides/reshade/7zipdownloadpage.webp)

Once 7-Zip is installed, you can use it to open the ReShade installer and access the files.

## Extract the ReShade DLL
Locate the ReShade installer file `ReShade_Setup_x.x.x.exe`. Right-click on it, hover over 7-Zip, and choose “Open archive.” This will open a new window showing the installer’s contents.

![Open with 7-Zip](https://assets.martysmods.com/additionalguides/reshade/setupopenwith7zip.webp)

Inside, you’ll find two DLL files. These are the main binaries needed for manual installation. Drag the DLL that matches your game’s architecture (32-bit or 64-bit) to your desktop.

![Extract DLL](https://assets.martysmods.com/additionalguides/reshade/setup7zipbinaries.webp)

| Game Architecture       | DLL Name      |
|-------------------------|---------------|
| 32-bit                  | ReShade32.dll |
| 64-bit                  | ReShade64.dll |

## Rename the DLL File

Right-click the `ReShadeXX.dll` file you extracted and select “Rename.” Change the name to match the file name used by your game’s Rendering API. This step is essential for ReShade to be recognized by the game.

| Rendering API           | DLL Name      |
|-------------------------|---------------|
| DirectX 10/11/12        | dxgi.dll      |
| DirectX 12              | d3d12.dll     |
| DirectX 11              | d3d11.dll     |
| DirectX 10              | d3d10.dll     |
| DirectX 9               | d3d9.dll      |
| OpenGL                  | opengl32.dll  |

If you’re not sure which API your game uses, check the game’s settings or look up online guides for confirmation. This renaming step ensures the game loads ReShade during startup.

## Move the DLL File to Your Game’s Folder
Now, move the renamed DLL file to your game’s main directory. This is the folder where the game’s executable file (.exe) is located. To find this folder, right-click your game’s shortcut and select “Open file location,” or follow [our guide on finding your game’s executable](/additionalguides/03findgameexecutable).

![Place in Game Folder](https://assets.martysmods.com/additionalguides/reshade/extractedbinaryingamedirectory.webp)

Ensure the renamed DLL is in the same folder as the game’s executable. This placement is crucial for ReShade to inject properly when the game starts.

## Final Checks and Launch
Double-check that the DLL is named correctly and in the right folder. Once everything is in place, start your game. You should see a ReShade overlay appear when the game launches, confirming that the installation was successful. If the overlay shows up, press the default key (usually `Home`) to open the ReShade menu. From there, you can start customizing shaders and settings to create your desired visual effects. Spend some time exploring the shader options and adjusting them to see how they change the look of your game. ReShade allows you to enhance your game’s graphics, making them more vibrant, realistic, or uniquely styled.