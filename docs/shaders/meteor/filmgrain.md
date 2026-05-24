---
title: Film Grain
sidebar_title: "Film Grain"
description: "Physically Accurate Film Grain"
slug: /shaders/meteor/filmgrain
sidebar_position: 2
hide_title: True
---

# Film Grain

METEOR: Film Grain simulates the texture of analog photographic film and digital camera sensor noise. Analog film grain comes from silver halide crystals suspended in the film emulsion, forming irregular, organic clumps whose size and visibility depend on exposure and film stock. Digital sensor noise is a different phenomenon: fixed-pattern and shot noise from the camera's photosite array, shaped by the Bayer color filter pattern that sits over the sensor. METEOR models both separately, with parameters specific to each type.

---

## Global

### Film Mode

Sets whether the grain is rendered as grayscale or in color.

- **Monochrome:** Grain is luminance-only. All channels receive the same noise. Matches classic black-and-white film stocks and the look of a desaturated digital camera.
- **Color:** Each color channel receives independent noise, producing the colored speckle characteristic of color film and digital sensors at high ISO.

### Grain Type

Selects the underlying noise model.

- **Analog Film Grain:** Organic, spatially correlated grain that clusters and shifts with the local luminance of the image, becoming coarser and more visible in shadows and midtones. Uses the Analog Film Grain parameters below.
- **Digital Sensor Noise:** Structured per-pixel noise modeled after camera sensor behavior, with independent per-channel variation shaped by the sensor's Bayer filter layout. Uses the ISO Noise parameters below.

### Intensity

Controls the overall strength of the grain. At `0.0` the effect is invisible; at `1.0` the grain is at full strength. The default of `0.85` is intentionally high. Dial this back first if the effect reads as too aggressive.

Range: `0.0` to `1.0`

### Animate Grain

When enabled, the grain pattern changes every frame, simulating the temporal flicker of film running through a projector or a live sensor feed. When disabled, the grain pattern is static, which is useful for screenshots or when you want a fixed texture without movement. Disabled by default.

---

## Parameters for ISO Noise

These parameters only apply when **Grain Type** is set to **Digital Sensor Noise**.

### Noise Saturation

Controls how strongly the digital noise is colored. At `1.0` each color channel varies independently, producing vivid chroma noise as seen on real high-ISO camera footage. Reducing this value desaturates the noise toward luminance-only, blending the look between digital sensor noise and a more neutral grain.

Range: `0.0` to `1.0`

### Bayer Matrix RGB Weighting

When enabled, the noise distribution is weighted to match how real camera sensors allocate photosites. Physical sensors dedicate twice as many pixels to green as to red or blue. A 2x2 Bayer pattern has two green sites, one red, and one blue, meaning green captures more light and has proportionally lower noise while red and blue channels are noisier. The practical result is that grain adopts a slight pink-magenta tint in dark areas, matching what you see in real camera footage at high ISO. Enable this for a more authentic sensor look; disable it for equal noise across all channels.

---

## Parameters for Analog Film Grain

These parameters only apply when **Grain Type** is set to **Analog Film Grain**.

### Grain Size

Sets the spatial scale of the grain clumps. Lower values produce fine-grained texture resembling a high-speed fine-grain stock. Higher values produce the coarser, chunkier grain of pushed or large-format film.

Range: `0.0` to `1.0`

### Analog Film Gamma

Adjusts the gamma response of the film curve used to modulate grain density. Positive values increase grain in the midtones and highlights. Negative values pull grain intensity toward the shadows, simulating underexposed or shadow-heavy film. At `0.0` the curve is neutral.

Range: `-1.0` to `1.0`

### Analog Film Shadow Emphasis

Boosts grain density in the shadow regions of the image. On real film, underexposed areas have more visible grain because fewer silver crystals were activated, leaving more unexposed clumps in the emulsion. Increasing this value recreates that behavior, making shadows noticeably grainier than midtones and highlights.

Range: `0.0` to `1.0`
