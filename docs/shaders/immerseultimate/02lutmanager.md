---
title: LUT Manager (Addon)
sidebar_title: "LUT Manager (Addon)"
description: "Addon and Shader combo designed to organize and display your LUTs with ease."
slug: /shaders/immerseultimate/lutmanager
sidebar_position: 2
hide_title: True
---

# LUT Manager

iMMERSE Ultimate: LUT Manager combines a Look-Up-Table addon and shader in ReShade to manage LUT textures on the fly. It allows users to easily switch between different LUTs and mark commonly used LUTs all without having to create or utilize a shader for each individual LUT image.

:::warning
LUT Manager requires the Addon Support build of ReShade in order to function properly.
:::

---

## Downloading and Installing LUTs

LUTs are a format of predefined color grades. In ReShade, they're often in the format of your standard PNG file. You can browse common LUT repositories [such as MLUT](https://github.com/TheGordinho/MLUT) in order to view, find, and download LUTs at your pleasure to be used in LUT Manager.

Once you have the LUTs that you desire, create a folder in the root of your game folder named "LUTs" in the game directory and place the LUT textures that you've acquired inside. If you are struggling to find the location of your root game folder, please see our guide on [how to locate your game's executable](../../additionalguides/findexecutable) for assistance!

## Using LUT Manager

Go to the "Add-Ons" tab within ReShade and you will see MartysMods LUT Manager. Once there, you'll see the names of all the LUTs you have installed and you can click the files to open the LUT list. After that, select a LUT from the list and the colors will change in real-time.

![Pic of the LUT manager Window](https://assets.martysmods.com/shaders/lutmanager/lutmanager_window.webp)

You can also right-click any of the LUTs you like the most and add them to a favorites list for easy-finding later.

![LUT Manager Favorites Window](https://assets.martysmods.com/shaders/lutmanager/lutmanager_fav.webp)

## Shader Arguments

- **Enhanced LUT Quality:** Upsamples the LUTs in order to provide a higher quality color grading application to the current screen.
- **Show all LUTs in its current atlas side-by-side:** Provides a grid view of all the LUTs that are provided in the currently enabled atlas
 ![LUTATLAS](https://assets.martysmods.com/shaders/lutmanager/lutmanager_atlas.webp)