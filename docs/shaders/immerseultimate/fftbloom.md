---
title: Convolution Bloom
sidebar_title: "Convolution Bloom"
description: "FFT based bloom that can provide diffraction spikes in real-time."
image: "https://www.martysmods.com/media/Conv-Bloom.webp"
slug: /shaders/immerseultimate/convolutionbloom
sidebar_position: 1
hide_title: True
---

![FFTBloomHeader](https://assets.martysmods.com/headers/ConvolutionBloomHeader.webp)

iMMERSE Ultimate: Convolution Bloom is a high-end bloom effect based on Fast-Fourier Transform (FFT) technology that produces unique diffraction spikes in real-time.

---

## Core Parameters:

### Bloom Padding
Controls padding to prevent edge artifacts caused by FFT wrap-around effects. Higher values eliminate artifacts but reduce effective resolution.

### Log Exposure Bias
Adjusts logarithmic exposure before bloom processing. Range: -5.0 to 5.0. Negative values reduce exposure, positive values increase it.

### Log HDR Whitepoint
Sets brightness threshold for bloom generation. Range: 0.0 to 12.0. Lower values create bloom in darker areas, higher values shift bloom toward bright areas.

### Bloom Intensity
Controls overall bloom strength. Range: 0.0 to 1.0. Higher values create more pronounced bloom effects.

### Bloom Radius
Determines how far bloom spreads from bright sources. Larger radius creates diffuse bloom, smaller radius produces focused bloom with sharper spikes.

### Bloom Haziness
Controls color saturation in bloom. 1.000 preserves colors, 0.000 creates white bloom, intermediate values balance both.

## Diffraction Spikes:

### Diffraction Spike Amount
Number of spikes around bright areas. Range: 1 to 7. Higher values create more dramatic starburst effects.

### Diffraction Spike Rotation
Controls spike orientation. Range: 0.0 to 1.0 (full 360-degree rotation).

### Diffraction Spike Radius
How far spikes extend from bright areas. Higher values create longer, more dramatic spikes.

### Diffraction Spike Blurriness
Controls spike sharpness. Lower values create crisp spikes, higher values create soft, blurred spikes.

### Diffraction Spike Phase Amount
Controls spike brightness. Higher values make spikes more visible and prominent.

## Preprocessor Definitions:

### CONVOLUTION_BLOOM_MASK_PRESET
- **0: Diffraction Spikes** - Creates starburst effects with full spike control
- **1: Inverse Square Glow** - Traditional bloom similar to Solaris

### CONVOLUTION_BLOOM_QUALITY
- **0: Low** - Reduced quality, better performance
- **1: Medium** - Balanced quality and performance  
- **2: High** - Maximum quality, performance cost

## Debug Views:

- **None**: Standard bloom output
- **Bloom Only**: Shows only bloom effect for parameter adjustment
- **Mask Texture**: Displays Fourier transform mask