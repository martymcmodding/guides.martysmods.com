---
title: "Depth"
sidebar_label: "Depth"
description: "The depth buffer is a crucial part of any 3D game. This guide goes over what it is, and how to configure it for ReShade."
slug: /reshade/depth
sidebar_position: 4
hide_title: true
---

<!----------------------- IMPORTS ---------------------------->

import ImageComparisonSlider from '@site/src/components/ImageComparisonSlider';
import { YTConsentDepth } from '@site/src/components/YTConsent';
import ReactPlayer from 'react-player'

<!----------------------------------------------------------->

# Depth
The depth buffer (sometimes referred to as the Z-buffer) is essential for most 3D effects. It's a single-channel image where each pixel stores its distance from the camera. Many ReShade effects such as ambient occlusion, global illumination, and depth of field need an accurate depth buffer to work correctly. So, ReShade's "Generic Depth" add-on automatically locates and exposes the game's depth buffer to the shaders available for ReShade.

---

<YTConsentDepth />

## Generic Depth Addon
Since games often use multiple depth buffers (for shadows, post-processing, etc.), finding the correct depth buffer in ReShade can be tricky. However, ReShade's included add-on "Generic Depth" comes with controls that allow us to control both automatic and manual selection of buffers for us to use.

In order to configure or view Generic Depth's current settings, you'll need to open up ReShade's "**Add-ons**" tab and find the "**Generic Depth**" add-on. Once found, you can see the checkmark next to the name of the Add-on that allows you to enable or disable it after a game's restart.

![ReShade Generic Depth](https://assets.martysmods.com/reshade/depth/DepthAddon.webp)

A little further down in Generic Depth add-on panel, you'll find the controls for automatically selecting a depth buffer based on heuristics (draw calls, aspect ratio, and buffer type). Typically these are set to be a catch-all for most games, however, you might want to configure them if you find that ReShade isn't able to automatically switch to the proper buffers (if the game changes them frequently i.e. when loading or traversing through sections of a game world that require different buffers).

Additionally, there is a toggle for "Copy depth before clear operations" which can be useful in games that frequently clear the depth buffer and resolve other issues.

![ReShade Generic Depth Settings](https://assets.martysmods.com/reshade/depth/DepthAutomaticHeuristics.webp)

Going even further down, you'll be able to see all of the buffers that ReShade is able to detect generically within your game. The automatic heuristics settings that were set above will determine which buffer is automatically selected as a depth buffer and those will be highlighted in blue.

![ReShade Generic Depth Buffers Available](https://assets.martysmods.com/reshade/depth/DepthBuffersAvaliable.webp)

<div class="depth-buffer-table">

| Address           | Resolution | Type   | Draw calls                  | Vertices           | Reversed/Multisampled          |
| ----------------- | ---------- | ------ | --------------------------- | ------------------- | ------------------------------ |
| 0x00001aa15ef7120 | 2560x1080  | DS32S8 | 215 draw calls (0 indirect) | 739482 vertices    | Reversed                       |

</div>

---

## DisplayDepth
In every install of ReShade you'll be provided with a shader named "**DisplayDepth**".

![DisplayDepth Shader in Home Tab](https://assets.martysmods.com/reshade/depth/DisplayDepthShader.webp)

When enabled, it allows you to see the current selected buffer from "Generic Depth". This is a handy tool to have in order to properly configure the settings within "Generic Depth", as without it, everyone would be blindly guessing which buffer is the one that matches their game world the best.

![Correct Depth Buffer Selected](https://assets.martysmods.com/reshade/depth/DepthCorrect.webp)

---

## Depth Orientations
Every game is wildly different from the next. Developers often have to use different strategies for how they store and maintain their buffers. This is called orientation, and it can wildly affect how depth effects perceive the game world and need to be fixed manually per game, as ReShade isn't able to automatically detect the orientation that the selected depth buffer should be in.

:::warning
When configuring depth, do not toggle on or use any of the controls provided to you in the "**DisplayDepth**" shader. Instead, use the "Edit Global Preprocessor Definitions" button in the middle of ReShade's Home tab.
<p align="center">
![Edit Global Preprocessor Definitions Location](https://assets.martysmods.com/reshade/depth/EditGlobalPreprocessorDefinitionsButton.webp)
</p>
:::

### Upside Down
The image shows an upside down depth buffer. You can solve this issue by simply inverting the `RESHADE_DEPTH_INPUT_IS_UPSIDE_DOWN` preprocessor setting within the "Global Preprocessor Definitions" under the "Home" tab of ReShade. If it is set to 1, set it to 0 and vice versa.

![Depth Buffer Upside Down](https://assets.martysmods.com/reshade/depth/DepthUpsideDown.webp)

### Reversed
The image shows a reversed depth buffer. You can solve this by inverting the `RESHADE_DEPTH_INPUT_IS_REVERSED` preprocessor setting within the "Global Preprocessor Definitions" under the "Home" tab of ReShade. If it is set to 1, set it to 0 and vice versa.

![Depth Buffer Reversed](https://assets.martysmods.com/reshade/depth/DepthReversed.webp)

---

## Common Depth Issues

### Empty Depth Buffer
When ReShade is configured to not have the proper depth buffer, the shader DisplayDepth will show a half-and-half screen depicting the buffer being empty. The issue is typically resolved by ensuring that MSAA is not enabled or by choosing the proper depth buffer in "Generic Depth's" control panel.

<div class="image-side-by-side">
<img src="https://assets.martysmods.com/reshade/depth/DepthNoData.webp" alt="Depth Buffer No Data" />
<img src="https://assets.martysmods.com/reshade/depth/DepthNoDataReversed.webp" alt="Depth Buffer No Data - Reversed" />
</div>

#### Solutions:
  - Toggle "Copy depth buffer before clear operations" and "Copy depth buffer before fullscreen draw calls".
  - Select the depth buffer with the closest resolution to your game resolution.
  - Select the depth buffer with the highest amount of draw calls and vertices.

### DLSS/FSR/XESS Checkerboarding
When a game uses DLSS/FSR/XESS, it can often result in issues where the depth buffer looks all garbled in a checkerboard manner.

![DLSS/FSR/XESS Checkerboarding](https://assets.martysmods.com/reshade/depth/DepthDLSSCheckerboarding.webp)

#### Solutions:
  - Toggle on "Copy depth buffer before clear operations" and "Copy depth buffer before fullscreen draw calls".
  - Disable DLSS/FSR/XESS

### Automatically Resizing
Some games provide a dynamic resolution feature that constantly resizes and changes the resolution of the game in order to hit an FPS target. This often can mess with the depth buffer and cause issues where depth effects will go all over the screen.

<ReactPlayer
  url="https://assets.martysmods.com/reshade/depth/AutomaticDepthResizing.webm"
  playing={true}
  muted={true}
  controls={true}
  loop={true}
  width="100%"
  height="100%"
  style={{ width: "100%", margin: "0 auto" }}
/>

#### Solutions:
  - Disable Dynamic Resolution Rendering
  - Disable DLSS/FSR/XESS

---

## Global Preprocessor Settings

#### `RESHADE_DEPTH_LINEARIZATION_FAR_PLANE`
Used to modify the far plane value of the depth buffer, affecting how depth is interpreted across the visible range. Default value is `1000`. Smaller numbers can be used to pull the far plane closer to the camera's origin and larger numbers to push the far plane further from the camera's origin.

#### `RESHADE_DEPTH_INPUT_IS_REVERSED`
Used when normals look to be oriented properly, but the depth is improper or in the opposite configuration. Can be either `1` or `0`.

#### `RESHADE_DEPTH_INPUT_IS_UPSIDE_DOWN`
Used when normals and depth appear to be turned upside down. Can be either `1` or `0`.

#### `RESHADE_DEPTH_INPUT_IS_LOGARITHMIC`
Used when the normals and depth appear with waves or "stripes." Not very common, however, the setting can be either `1` or `0`.

#### `RESHADE_DEPTH_INPUT_X_SCALE` and `RESHADE_DEPTH_INPUT_Y_SCALE`
Allows you to configure the scaling of the depth buffer along the X and Y axes. The values you input will multiply the current depth buffer dimensions.

#### `RESHADE_DEPTH_INPUT_X_OFFSET` and `RESHADE_DEPTH_INPUT_Y_OFFSET`
Allow you to offset the depth buffer in the X and Y directions.

#### `RESHADE_DEPTH_INPUT_X_PIXEL_OFFSET` and `RESHADE_DEPTH_INPUT_Y_PIXEL_OFFSET`
Similar to the previous setting, but on a per-pixel basis.