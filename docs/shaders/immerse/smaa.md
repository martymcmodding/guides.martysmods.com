---
title: SMAA
sidebar_label: "Anti Aliasing (SMAA)"
description: "ReShade's fastest SMAA shader available."
image: "https://assets.martysmods.com/headers/smaaheader.webp"
slug: /shaders/immerse/smaa
sidebar_position: 4
hide_title: true
---

![SMAAHeader](https://assets.martysmods.com/headers/smaaheader.webp)

iMMERSE: SMAA is Marty's implementation of Subpixel Morphological Anti-Aliasing (SMAA), a widely adopted technique for edge smoothing in real-time graphics. This shader provides efficient anti-aliasing with superior quality and performance compared to alternatives like FXAA.

---

## Configuration
The first step in configuring SMAA is to enable the shader in ReShade's home tab.

![SMAA Home Tab Enabled](https://assets.martysmods.com/shaders/smaa/smaahometabenabled.webp)

By default, the shader is configured to eliminate most stair-stepping artifacts (aliasing) on edges. If aliasing persists, you can adjust the `Edge Detection Threshold` parameter and increase the `Max Search Steps` and `Max Search Steps Diagonal` values.

![SMAA Settings Change](https://assets.martysmods.com/shaders/smaa/configuresettingsguide.webp)

## Parameters:

### Edge Detection Type
Specifies the algorithm used for edge detection in SMAA. The available options include:

- **Luminance Edge Detection**: Detects edges based on brightness differences between adjacent pixels.
- **Color Edge Detection (Max)**: Identifies edges by calculating the maximum color difference across color channels.
- **Color Edge Detection (Weighted)**: Uses a weighted color difference calculation for more accurate edge detection.
- **Depth Edge Detection**: Leverages depth buffer information to detect edges, particularly effective for distinguishing objects in 3D space.

### Edge Detection Threshold
Controls the sensitivity of edge detection based on the selected edge detection algorithm. Lower values detect more subtle edges, while higher values focus on more prominent edges, reducing false positives.

### Depth Edge Detection Threshold
Adjusts the sensitivity of depth-based edge detection. This parameter is only effective when "Predicated Thresholding" is enabled, allowing SMAA to better handle complex 3D scenes with varying depth relationships.

### Max Search Steps
Determines the number of sampling steps SMAA performs to effectively smooth detected edges. Higher values increase the range of edge smoothing but may impact performance. This parameter directly affects the quality of anti-aliasing along horizontal and vertical edges.

### Max Search Steps Diagonal
Controls the number of sampling steps specifically for diagonal edge detection and smoothing. Diagonal edges are typically more challenging to anti-alias effectively, requiring additional sampling steps for optimal results.

### Corner Rounding
Adjusts the intensity of anti-aliasing applied to corner regions in the scene. This parameter helps smooth sharp corners that would otherwise appear jagged, improving overall visual quality.

## Preprocessor Definitions:

### SMAA_USE_EXTENDED_EDGE_DETECTION
Enables enhanced edge detection capabilities for higher-magnitude edges, improving SMAA's ability to handle complex edge scenarios.

![SMAAPreprocessorDefinitions](https://assets.martysmods.com/shaders/smaa/smaapreprodef.webp)

## Debug:

### Debug Output
SMAA provides several debug visualization modes to assist with parameter tuning and understanding the shader's behavior. These debug options are available at the bottom of the shader parameters and include:

- **View Edges**: Displays the detected edges in real-time, allowing you to visualize how each parameter affects edge detection. This mode is useful for fine-tuning edge detection sensitivity.
![ViewEdgesDebug](https://assets.martysmods.com/shaders/smaa/smaaviewedges.webp)

- **View Weights**: Shows SMAA's internal weight calculations, providing insight into how the shader processes detected edges. This mode helps with further parameter optimization.