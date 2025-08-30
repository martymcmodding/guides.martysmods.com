---
title: Insight
sidebar_label: "Insight"
description: "Displays a histogram, chroma/luma clipping map, and magnification tool within ReShade."
slug: /shaders/immersepro/insight
sidebar_position: 3
hide_title: true
---

# Insight

iMMERSE Pro: Insight is a real-time, non-destructive image analysis shader that provides an interactive suite of diagnostic tools for visual analysis and optimization. It includes pixel-level RGB inspectors, magnification tools, comprehensive histograms, waveform displays, and color-clipping overlays to help you visualize, diagnose, and fine-tune your game's visual output.

---

:::info
Insight is strictly an analytical tool designed for development and debugging. Leaving it enabled during regular gameplay can significantly impact performance. It's recommended to disable this shader when not actively analyzing visuals to maintain optimal frame rates.
:::

## Color Analysis:

Most games utilize 8-bit SDR color encoding, limiting each red, green, blue, and alpha channel to values between 0 and 255. When shaders push values beyond this range, clipping occurs, destroying detail in highlights or shadows while producing harsh and unrealistic visuals.

Insight's analytical tools enable you to identify these issues through clipping overlays and examine the complete color distribution via histograms, making it easy to detect and correct clipping artifacts.

![Color Parameters](https://assets.martysmods.com/shaders/insight/InsightColorGUI.webp)

### Color Clipping Overlay
- **Disabled**: Disables the color clipping overlay for normal gameplay.
- **Black/White Clipping**: Highlights clipping in the darkest and brightest regions of the image. Black-level clipping appears as white overlays, while white-level clipping appears as black overlays, providing clear visual indicators of dynamic range issues.

   ![B/W Clipping](https://assets.martysmods.com/shaders/insight/InsightBWClip2.webp)

- **RGB Clipping**: Highlights clipping specifically in the red, green, and blue color channels, allowing you to identify which color components are exceeding the available range.

   ![RGB Clipping](https://assets.martysmods.com/shaders/insight/InsightColorClip2.webp)

### Histogram Mode
- **Disabled**: Hides all histogram and waveform overlays to minimize visual clutter.
- **Luminance Histogram**: Displays the brightness distribution across the entire image, helping you fine-tune exposure and contrast settings for optimal visual balance.
   
   ![LUMA HISTOGRAM](https://assets.martysmods.com/shaders/insight/InsightLumaHistogram.webp)

- **RGB Histogram**: Shows the distribution of red, green, and blue channels independently, making it easy to identify color imbalances and ensure proper color reproduction.

   ![RGB HISTOGRAM](https://assets.martysmods.com/shaders/insight/InsightRGBHistogram.webp)

- **Luminance Waveform**: Plots image brightness along the horizontal axis, which is particularly useful for ensuring consistent exposure across the frame and identifying areas of over or under-exposure.

   ![LUMA WAVEFORM](https://assets.martysmods.com/shaders/insight/InsightLumaWaveform.webp)

- **RGB Waveform**: Breaks down the waveform into individual red, green, and blue components, allowing you to balance each channel's brightness and identify color-specific exposure issues.

   ![RGB WAVEFORM](https://assets.martysmods.com/shaders/insight/InsightRGBWaveform.webp)

- **RGB Waveform Parade**: Displays the red, green, and blue waveforms side by side for direct comparison, enabling precise color correction and ensuring proper color balance across all channels.
   
   ![RGB PARADE WAVEFORM](https://assets.martysmods.com/shaders/insight/InsightParadeWaveform.webp)

### Compact Mode
Enables a condensed display format for histograms and waveforms, reducing screen space usage while maintaining full functionality. This mode is particularly useful when working with limited screen real estate.

## Inspector Tools:

Insight's Inspectors provide precise, in-game access to pixel-level data, enabling you to examine individual pixels or small regions within ReShade. This functionality makes it easy to capture exact RGB component values, examine fine textures and edges at high magnification, and reveal frequency details to diagnose color shifts, texture artifacts, or noise patterns.

![insightparameters](https://assets.martysmods.com/shaders/insight/InsightInspectorGUI.webp)

### Inspector Types
- **RGB**: Reports the exact red, green, and blue channel values at a selected pixel, offering precise color analysis for color-critical applications.

   ![RGB INSPECTOR](https://assets.martysmods.com/shaders/insight/InsightRGBInspector.webp)

- **Magnifying Glass**: Provides a zoomed-in view of the chosen pixel and its surrounding area for close examination of textures, edges, and fine detail structures.

   ![MAGNIFYING INSPECTOR](https://assets.martysmods.com/shaders/insight/InsightMagnifyingInspector.webp)

- **FFT**: Performs a Fast Fourier Transform on the selected region to expose its frequency components, aiding in noise analysis, texture evaluation, and artifact identification.

   ![FFT INSPECTOR](https://assets.martysmods.com/shaders/insight/InsightFFTInspector.webp)

### Inspector Configuration

#### Inspector Size
Controls the dimensions of the active inspector window, allowing you to adjust the display area based on your analysis needs and screen space availability.

#### Use Point and Click (MMB)
Anchors the selected inspector at the position clicked with the middle mouse button, providing precise control over inspector placement for targeted analysis.

#### Magnifier Uses Bicubic Interpolation
Enables bicubic filtering in the Magnifier inspector for smoother, higher-quality zoomed views. This feature reduces pixelation artifacts and provides more accurate representation of fine details.

#### Inspector Magnification
Controls the zoom level of the inspector's magnified content, ranging from 4x to 32x magnification. Higher magnification levels reveal more detail but may impact performance.

## Global Settings:

### Hide Overlays When ReShade Menu is Closed
Automatically hides all Insight overlays when the ReShade menu is not active, ensuring a clean visual experience during normal gameplay while maintaining easy access to analysis tools when needed.