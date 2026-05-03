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

iMMERSE Ultimate: Convolution Bloom is a bloom shader that uses Fast Fourier Transform (FFT) convolution to produce physically based bloom shapes. Unlike standard bloom shaders that apply a simple radial blur around bright areas, Convolution Bloom uses a procedural mask that defines the shape of the bloom kernel itself. This allows it to produce effects like diffraction spikes, the characteristic starburst pattern seen on bright light sources in real camera photography caused by light bending around the aperture blades.

---

## Preprocessor Definitions

These must be configured before loading the shader, as they determine which parameters and features are available.

### CONVOLUTION_BLOOM_QUALITY

Range: `0` to `2`. Default: `1`.

Controls the resolution of the internal FFT kernel. Higher values produce sharper, more defined bloom shapes at the cost of performance.

- **0**: Low quality. Fastest. Bloom shapes may appear softer or less defined.
- **1**: Medium quality. A good balance for real-time use.
- **2**: High quality. Sharpest results. Best suited for screenshots.

### CONVOLUTION_BLOOM_MASK_PRESET

Range: `0` to `1`. Default: `0`.

Selects which bloom shape preset is used. Each preset has its own set of parameters that appear in the shader UI once the preset is selected. Changing this value requires a shader reload.

- **0: Diffraction Spikes**: Produces a starburst pattern with spike arms radiating from bright light sources. Highly configurable.
- **1: Inverse Square Glow**: Produces a soft, radially symmetric glow that falls off naturally with distance from the light source.

---

## Global Parameters

These parameters are always visible regardless of which preset is active.

### Bloom Padding

Range: `0.0` to `0.5`. Default: `0.25`.

Because Convolution Bloom uses FFT, the image is treated as a repeating tile during processing. If a bloom effect extends past the edge of the screen, it can wrap around and appear on the opposite side. Bloom Padding adds a black border around the image buffer to provide space for the bloom to spread into without crossing the boundary. Higher values reduce wrap-around artifacts but also lower the effective resolution of the bloom calculation. The default of `0.25` is a reasonable balance for most scenes. If you notice bright edges appearing on the opposite side of the screen from a light source, raising this value will address it.

### Log Exposure Bias

Range: `-5.0` to `5.0`. Default: `0.0`.

Adjusts the brightness of the scene as seen by the bloom algorithm before bloom is calculated. This does not affect the base image, only the input to the bloom pass. Raising it makes more of the scene bright enough to produce bloom, which can increase the overall bloom coverage. Lowering it reduces how much of the scene contributes to bloom, focusing the effect on only the very brightest areas. At `0.0`, no exposure adjustment is applied.

### Log HDR Whitepoint

Range: `0.0` to `12.0`. Default: `7.0`.

Sets the brightness level in HDR space at which values are considered fully white for the purpose of bloom generation. Lower values allow moderately bright areas to contribute more strongly to the bloom. Higher values push the threshold toward only the most intense highlights, producing a tighter, more selective bloom that appears primarily around the brightest light sources. Adjusting this alongside **Log Exposure Bias** gives you fine control over which parts of the scene produce bloom and how strongly.

### Bloom Intensity

Range: `0.0` to `1.0`. Default: `0.3`.

Controls the overall strength of the bloom contribution blended back into the scene. At `0.0`, bloom has no visible effect. At `1.0`, the bloom is at maximum strength. The default of `0.3` is intentionally conservative to avoid overexposing the image.

---

## Diffraction Spikes

These parameters are only visible when `CONVOLUTION_BLOOM_MASK_PRESET` is set to `0`.

Diffraction spikes are the starburst rays that appear around bright point light sources in real photography. They are caused by light diffracting around the straight edges of a camera's aperture blades. The number of spikes, their length, sharpness, and color separation are all controllable here.

### Diffraction Spike Amount

Range: `1` to `7`. Default: `3`.

Controls the number of spike arms radiating outward from each bright source. In real optics, each pair of parallel aperture blades produces one pair of spikes, so a 6-blade aperture produces 6 spikes. Higher values produce a denser starburst. Lower values produce fewer, more isolated spikes.

### Diffraction Spike Rotation

Range: `0.0` to `1.0`. Default: `0.5`.

Rotates the entire spike pattern around the light source. `0.0` and `1.0` represent the same orientation after a full rotation. Use this to align the spikes to a preferred angle relative to the scene.

### Diffraction Spike Radius

Range: `0.0` to `1.0`. Default: `0.0`.

Controls how far the spikes extend outward from the light source. At `0.0`, spikes are short and tight to the source. Higher values produce longer spikes that reach further across the screen.

### Diffraction Spike Blurryness

Range: `0.0` to `1.0`. Default: `0.0`.

Controls the softness of the spike edges. At `0.0`, spikes have sharp, well-defined edges. Higher values soften and blur the edges, giving spikes a more diffuse, hazy appearance.

### Diffraction Spike Spread

Range: `0.0` to `1.0`. Default: `0.0`.

Controls the angular width of each spike. At `0.0`, spikes are narrow lines. Higher values make each spike wider and fan-like, spreading the bloom energy across a broader angle around each arm.

### Diffraction Spike Ratio

Range: `-1.0` to `1.0`. Default: `0.0`.

Adjusts the aspect ratio of the spike shape, stretching or compressing the spike pattern along one axis. Negative and positive values stretch in opposite directions. At `0.0`, the spike pattern is symmetrical.

### Diffraction Spike Ringing

Range: `0.0` to `1.0`. Default: `0.75`.

Controls the intensity of the concentric bright and dark bands that appear along the length of each spike, similar to what is seen in real diffraction spike photography. Higher values make these bands more pronounced, giving spikes a banded or ringed appearance. Lower values produce smoother, more uniform spikes without visible banding.

### Diffraction Spike Spectral Shift

Range: `0.0` to `1.0`. Default: `0.1`.

Controls chromatic dispersion along the spikes. Real diffraction separates light into its component wavelengths, creating a subtle rainbow gradient along each spike arm. Higher values make this color separation more visible. Lower values produce spikes that are closer to a neutral white. A small amount of spectral shift adds considerable realism to the effect.

---

## Inverse Square Glow

These parameters are only visible when `CONVOLUTION_BLOOM_MASK_PRESET` is set to `1`.

The Inverse Square Glow preset produces a soft, symmetric glow around bright light sources using a falloff that matches how light naturally diminishes with distance in the real world. It produces a simpler, more traditional bloom shape compared to the Diffraction Spikes preset.

### Glow Radius

Range: `0.0` to `1.0`. Default: `1.0`.

Controls how far the glow spreads outward from the light source. Higher values produce a wide, expansive glow that covers more of the surrounding area. Lower values keep the glow tight and close to the source.

### Glare Intensity

Range: `0.0` to `1.0`. Default: `0.0`.

Adds a sharper, more focused glare component on top of the base glow. At `0.0`, only the soft glow is visible. Raising this adds a brighter, more concentrated core to the bloom around each light source.

---

## Debug

### Debug View

Default: **None**.

- **None**: Standard output with bloom composited into the scene normally.
- **Bloom Only**: Displays only the raw bloom layer without the base scene, making it easier to judge the shape, intensity, and spread of the bloom in isolation. Useful when tuning any of the bloom parameters.
- **Mask Texture**: Displays the FFT convolution mask directly. This shows the procedural shape that is being convolved with the scene to produce the bloom effect. Useful for understanding how the current preset and its parameters are shaping the bloom kernel.