---
title: SMAA
sidebar_label: "Anti Aliasing (SMAA)"
description: "ReShade’s fastest SMAA shader available."
image: "https://assets.martysmods.com/headers/smaaheader.webp"
slug: /shaders/immerse/smaa
sidebar_position: 4
hide_title: true
---

![SMAAHeader](https://assets.martysmods.com/headers/smaaheader.webp)

iMMERSE: SMAA is Marty’s take on the widely used Subpixel Morphological Anti-Aliasing (SMAA) technique. It’s a fast and efficient way to smooth out jagged edges in games, offering better results and performance than many alternatives like FXAA.

---

## Configuring Anti Aliasing (SMAA)
The first step to configuring Anti Aliasing (SMAA) would be to simply enable the shader in ReShade's home tab.

![SMAA Home Tab Enabled](https://assets.martysmods.com/shaders/smaa/smaahometabenabled.webp)

By default the shader is already configured to get rid of most stair stepping (aliasing) on edges. If you find aliasing to still be within the image, you can try lowering the parameter `Edge Detection Threshold` and increasing the parameters `Max Search Steps` and `Max Search Steps Diagonal`.

![SMAA Settings Change](https://assets.martysmods.com/shaders/smaa/configuresettingsguide.webp)

## Arguments:

### Edge Detection Type
Specifies the method used for detecting edges in SMAA. The available options include:
 * **Luminance Edge Detection:** Detects edges based on brightness differences.
 * **Color Edge Detection (Max):** Detects edges by identifying the maximum color difference.
 * **Color Edge Detection (Weighted):** Detects edges using a weighted color difference approach.
 * **Depth Edge Detection:** Detects edges based on depth information, useful for distinguishing objects in 3D space.

### Edge Detection Threshold
Determines the sensitivity of edge detection based on the chosen edge detection type. Lower values detect more edges, while higher values detect fewer, focusing on more prominent edges.

### Depth Edge Detection Threshold
Adjusts the sensitivity of depth-based edge detection. This parameter is only effective if "Predicated Thresholding" is enabled, allowing SMAA to better handle complex 3D scenes.

### Max Search Steps
Controls the number of steps SMAA takes to effectively smooth edges in the scene. Higher values increase the range of edge smoothing but may slightly impact performance.

### Max Search Steps Diagonal
Sets the number of steps SMAA uses specifically for detecting and smoothing diagonal edges, which are often more challenging to anti-alias.

### Corner Rounding
Adjusts the amount of anti-aliasing applied to corners in the scene. This parameter helps in smoothing sharp corners, which can otherwise appear jagged.

## Preprocessor Definitions:

### SMAA_USE_EXTENDED_EDGE_DETECTION
Configures SMAA to detect higher-magnitude edges better.
![SMAAPreprocessorDefinitions](https://assets.martysmods.com/shaders/smaa/smaapreprodef.webp)

## Debugging:

### Debug Output
To better understand how SMAA is working, you can use its several debug functions. These debug options are available at the bottom of the shader arguments and provide you with:

 * View Edges: Used to provide a better view of what each of the arguments are doing. Can help for fine-tuning settings.
 ![ViewEdgesDebug](https://assets.martysmods.com/shaders/smaa/smaaviewedges.webp)
 * View Weights: Used to provide a better view of how the arguments are effecting SMAA's weight variables. Helps for fine-tuning further