---
title: LUT Manager (Addon)
sidebar_title: "LUT Manager (Addon)"
description: "Addon and Shader combo designed to organize and display your LUTs with ease."
slug: /shaders/immerseultimate/lutmanager
sidebar_position: 2
hide_title: True
---

# LUT Manager

iMMERSE Ultimate: LUT Manager combines a Look-Up-Table addon and shader in ReShade to manage LUT textures dynamically. It allows users to easily switch between different LUTs and mark commonly used LUTs without creating individual shaders for each LUT image.

:::warning
LUT Manager requires the Addon Support build of ReShade to function properly.
:::

---

## Setup:

### Downloading LUTs
LUTs are predefined color grading files, typically in PNG format. You can browse common LUT repositories such as [MLUT](https://github.com/TheGordinho/MLUT) to find and download LUTs for use with LUT Manager.

### Installing LUTs
1. Create a folder named "LUTs" in your game's root directory
2. Place downloaded LUT textures inside this folder
3. For help locating your game folder, see our guide on [how to locate your game's executable](../../additionalguides/findexecutable)

## Usage:

### Accessing LUT Manager
1. Go to the "Add-Ons" tab within ReShade
2. Locate "MartysMods LUT Manager"
3. Click on the addon to open the LUT list
4. Select a LUT to apply color changes in real-time

![LUT Manager Window](https://assets.martysmods.com/shaders/lutmanager/lutmanager_window.webp)

### Favorites System
Right-click any LUT to add it to your favorites list for quick access later.

![LUT Manager Favorites Window](https://assets.martysmods.com/shaders/lutmanager/lutmanager_fav.webp)

## Shader Parameters:

### Enhanced LUT Quality
Upsamples LUTs to provide higher quality color grading. This feature is particularly effective for LUTs with resolutions below 32x32x32, dramatically improving precision through high-quality upsampling.

### Show LUT Atlas Preview
Displays a grid view of all LUTs in the currently enabled atlas for easy comparison and selection.

![LUT Atlas](https://assets.martysmods.com/shaders/lutmanager/lutmanager_atlas.webp)

### Blend Intensity (Chroma)
Controls the strength of color grading applied to chroma (color) components. Range: 0.0 to 1.0. Higher values apply stronger color effects.

### Blend Intensity (Luma)
Controls the strength of color grading applied to luma (brightness) components. Range: 0.0 to 1.0. Higher values apply stronger brightness effects.