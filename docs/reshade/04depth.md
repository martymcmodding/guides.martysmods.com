---
title: "Depth"
sidebar_label: "Depth"
description: "The depth buffer is a crucial part of any 3D game. This guide goes over what it is, and how to configure it for ReShade."
slug: /reshade/depth
sidebar_position: 4
hide_title: true
keywords: 
 - Depth
 - Configuring Depth
tags:
 - ReShade Guide
 - Depth
---

# Depth

The depth buffer (sometimes refered to as the Z-buffer) is essential for most 3D effects. It’s a single-channel image where each pixel stores its distance from the camera. Many ReShade filters—like ambient occlusion, global illumination, and depth of field need an accurate depth buffer to work correctly. So, ReShade’s "Generic Depth" add-on automatically locates and exposes the game’s depth buffer to the shaders avalible for ReShade.

---

## Viewing ReShade's Depth Buffer:

To see ReShade's depth buffer, enable the shader "DisplayDepth". This shader is included with all ReShade installations through the ReShade Installer. If you do not have it, you can manually install it from [Crosire's ReShade-Shaders repository](https://github.com/crosire/reshade-shaders/tree/slim/Shaders). 

The image below shows what the output should look like. The depth buffer is on the right side, and the normal buffer (generated from depth) is on the left side.

![Depth Buffer Correct](https://assets.martysmods.com/additionalguides/reshade/correct.webp)

## Finding the Right Depth Buffer:

Since games often use multiple depth buffers (for shadows, post-processing, etc.), finding the correct depth buffer in ReShade can be tricky. However, ReShade's included add-on "Generic Depth" will attempt to automatically find the correct buffer for you. If this doesn't occur and ReShade cannot find the right buffer: 

Open up ReShade's "Add-ons" tab and focus on the "Generic Depth" add-on.

![ReShade Generic Depth](https://assets.martysmods.com/additionalguides/reshade/genericdepth.webp)

Here, you will find settings for automatic depth buffer selection and the depth buffers that are available to you.

![ReShade Generic Depth Settings](https://assets.martysmods.com/additionalguides/reshade/genericdepthsettings.webp)

With the shader "DisplayDepth" enabled, click through each depth buffer in your Add-ons tab and find the one that most closely resembles what is in your game.

The depth buffer you are looking for is likely to be the same resolution as your game and typically has the highest draw calls or vertices. If the buffer looks incorrect (e.g., it's completely black, white, or flat), try another option. In some games, the depth buffer might not be accessible due to the way the game engine handles rendering, in which case, you may need to adjust settings or use other troubleshooting methods.

## Common Depth Buffer Issues:

:::warning
When configuring depth, do not toggle on or use any of the controls provided to you in the `displaydepth.fx` shader. Instead, use the "Edit Global Preprocessor Definitions" button in the middle of ReShade's Home tab.
<p align="center">
![Edit Global Preprocessor Defintions Location](https://assets.martysmods.com/additionalguides/reshade/EditGlobalPreprocessorDefinitionsButton.webp)
</p>
:::

### Upside Down Depth Buffer
The image shows an upside down depth buffer. You can solve this issue by simply inverting the `RESHADE_DEPTH_INPUT_IS_UPSIDE_DOWN` preprocessor setting within the "Global Preprocessor Definitions" under the "Home" tab of ReShade. If it is set to 1, set it to 0 and vice versa.

![Depth Buffer Upside Down](https://assets.martysmods.com/additionalguides/reshade/upsidedown.webp)

### Reversed Depth Buffer
The image shows a reversed depth buffer. You can solve this by inverting the `RESHADE_DEPTH_INPUT_IS_REVERSED` preprocessor setting within the "Global Preprocessor Definitions" under the "Home" tab of ReShade. If it is set to 1, set it to 0 and vice versa.

![Depth Buffer Reversed](https://assets.martysmods.com/additionalguides/reshade/reversed.webp)

### Empty Depth Buffer
The images show a depth buffer that is empty. This could be the result of choosing the wrong depth buffer, or a setting in-game that is blocking ReShade from accessing it. The issue is typically resolved by ensuring that MSAA is not enabled or by choosing the proper depth buffer.

![Depth Buffer No Data](https://assets.martysmods.com/additionalguides/reshade/depthbuffernodataexample.webp)

![Depth Buffer No Data - Reversed](https://assets.martysmods.com/additionalguides/reshade/depthbuffernodatareversedexample.webp)

#### Basic troubleshooting steps to find a depth buffer with data:
  - Toggle on and off "Copy depth buffer before clear operations" and "Copy depth buffer before fullscreen draw calls".
  - Select the depth buffer with the closest resolution to your game resolution.
  - Select the depth buffer with the highest amount of draw calls and vertices.

## Global Preprocessor Settings

### RESHADE_DEPTH_INPUT_IS_REVERSED
This preprocessor setting is crucial when the normals appear correctly, but the depth image itself is missing or incorrect. The setting can be either `1` or `0`. If the depth isn't displaying as expected, toggling this value often resolves the issue. Essentially, this setting flips the depth direction, correcting the depth buffer's interpretation in some games.

### RESHADE_DEPTH_INPUT_IS_UPSIDE_DOWN
If the depth image, as displayed by the DisplayDepth shader, is upside down, this setting is the fix. Like the previous setting, the value can only be `1` or `0`. Flipping the value corrects the orientation of the depth buffer. This is often required in games that render the depth buffer differently from what ReShade expects.

### RESHADE_DEPTH_INPUT_IS_LOGARITHMIC
This setting addresses issues where the depth buffer appears with numerous waves or "stripes." While not common, some games use a logarithmic depth buffer, and this setting compensates for that. The value is binary (`1` or `0`). You may need to experiment with this setting if you encounter these artifacts in the depth view.

### RESHADE_DEPTH_INPUT_X_SCALE and RESHADE_DEPTH_INPUT_Y_SCALE
These settings allow you to adjust the scaling of the depth buffer along the X and Y axes. The values you input will multiply the current depth buffer dimensions. Use the DisplayDepth shader to test and fine-tune these values before setting them globally. This is particularly useful in games where the depth buffer might be compressed or stretched.

### RESHADE_DEPTH_LINEARIZATION_FAR_PLANE
This setting modifies the far plane of the depth buffer's linearization process, affecting how depth is interpreted across the visible range. If the depth gradient (black to white, close to far) isn't spanning correctly, shaders relying on depth may not function as expected. Adjusting this value can help in fine-tuning the depth range, but finding the right balance may require some trial and error.

### RESHADE_DEPTH_INPUT_X_OFFSET and RESHADE_DEPTH_INPUT_Y_OFFSET
These settings allow you to offset the depth buffer in the X and Y directions, effectively moving it left/right and up/down, respectively. This is useful when the depth buffer is misaligned with the game’s visual output. Adjustments here can correct such alignment issues by nudging the depth buffer into place.

### RESHADE_DEPTH_INPUT_X_PIXEL_OFFSET and RESHADE_DEPTH_INPUT_Y_PIXEL_OFFSET
Similar to the previous offset settings, these allow for pixel-level adjustments, giving you finer control over the depth buffer’s positioning. This is particularly useful when small misalignments occur that require more precise tuning than what the regular X and Y offset settings provide. Adjusting these values moves the depth buffer incrementally, perfect for aligning it with high precision.