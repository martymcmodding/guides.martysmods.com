---
title: Insight
sidebar_label: "Insight"
description: "Displays a histogram, chroma/luma clipping map, and magnification tool within ReShade."
slug: /shaders/immersepro/insight
sidebar_position: 3
hide_title: true
---

# Insight
iMMERSE Pro: Insight is a real-time, non-destructive image analysis shader that gives you an interactive suite of diagnostic tools, such as pixel-level RGB inspectors, a magnifying glass zoom, histograms, waveforms, and color-clipping overlays in order to help you visualize, diagnose, and fine-tune your game's visual output.

---

:::info
Insight is strictly an analytical tool. Leaving it enabled can noticeably impact performance and is best to disable it during regular gameplay to maintain smoother frame rates.
:::  

## Color
Most games use 8-bit SDR color, limiting each red, green, blue, and alpha channel to values between 0 and 255. When shaders push values beyond this range, clipping occurs and destroys detail in highlights or shadows alongside producing harsh and unrealistic visuals.

Insight's analytical tools let you spot these issues with a clipping overlay and examine the full color distribution via a histogram, making it easy to identify and correct clipping artifacts.

![Color Parameters](https://assets.martysmods.com/shaders/insight/InsightColorGUI.webp)

### Color Clipping Overlay
- **Disabled**: Disables the color clipping overlay.

- **Black/White Clipping**: Highlights clipping in the darkest and brightest regions. Black-level clipping appears white; white-level clipping appears black.

   ![B/W Clipping](https://assets.martysmods.com/shaders/insight/InsightBWClip2.webp)

- **RGB Clipping**: Highlights clipping in the red, green, and blue channels.

   ![RGB Clipping](https://assets.martysmods.com/shaders/insight/InsightColorClip2.webp)

### Histogram Mode
- **Disabled**: Hides all histogram and waveform overlays.

- **Luminance Histogram**: Displays the brightness distribution of the image, helping you fine-tune exposure and contrast.  
   
   ![LUMA HISTOGRAM](https://assets.martysmods.com/shaders/insight/InsightLumaHistogram.webp)

- **RGB Histogram**: Shows the distribution of red, green, and blue channels, making it easy to spot color imbalances.  

   ![RGB HISTOGRAM](https://assets.martysmods.com/shaders/insight/InsightRGBHistogram.webp)

- **Luminance Waveform**: Plots image brightness along the horizontal axis, which is useful for ensuring consistent exposure across the frame.  

   ![LUMA WAVEFORM](https://assets.martysmods.com/shaders/insight/InsightLumaWaveform.webp)

- **RGB Waveform**: Breaks down the waveform into red, green, and blue components, allowing you to balance each channel's brightness.  

   ![RGB WAVEFORM](https://assets.martysmods.com/shaders/insight/InsightRGBWaveform.webp)

- **RGB Waveform Parade**: Displays the red, green, and blue waveforms side by side for direct comparison and precise color correction.  
   
   ![RGB PARADE WAVEFORM](https://assets.martysmods.com/shaders/insight/InsightParadeWaveform.webp)


## Inspector Parameters
Insight's Inspectors provide you with precise, in-game access to pixel-level data, letting you inspect individual pixels or small regions within ReShade. This makes it easy to capture exact RGB components, examine fine textures and edges up close, and reveal frequency details in order to diagnose color shifts, texture artifacts, or noise.

![insightparameters](https://assets.martysmods.com/shaders/insight/InsightInspectorGUI.webp)

### Inspector Types
- **RGB**: Reports the red, green, and blue channel values at a selected pixel, offering precise color analysis.

   ![RGB INSPECTOR](https://assets.martysmods.com/shaders/insight/InsightRGBInspector.webp)

- **Magnifying Glass**: Offers a zoomed-in view of the chosen pixel and its surroundings for close examination of textures and edges.

   ![MAGNIFYING INSPECTOR](https://assets.martysmods.com/shaders/insight/InsightMagnifyingInspector.webp)

- **FFT**: Performs a Fast Fourier Transform on the selected region to expose its frequency components, aiding in noise and texture analysis.

   ![FFT INSPECTOR](https://assets.martysmods.com/shaders/insight/InsightFFTInspector.webp)

### Inspector Size
Adjusts the dimensions of the active inspector window.

### Use Point and Click (MMB)
Anchors the selected inspector at the position clicked with the middle mouse button.

### Magnifier Uses Bicubic Interpolation
Enables bicubic filtering in the Magnifier inspector for smoother, higher-quality zoomed views.

### Inspector Magnification
Controls the zoom level of the inspector's magnified content.