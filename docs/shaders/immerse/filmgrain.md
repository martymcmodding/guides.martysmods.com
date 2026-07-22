---
title: "Film Grain"
sidebar_label: "Film Grain"
description: "Physically accurate film grain and digital sensor noise for ReShade."
slug: /shaders/immerse/filmgrain
sidebar_position: 6
hide_title: true
---

# Film Grain

iMMERSE: Film Grain simulates the texture of analog photographic film and digital camera sensor noise. Analog film grain comes from silver halide crystals suspended in the film emulsion, forming irregular, organic clumps whose size and visibility depend on exposure and film stock. Digital sensor noise is a different phenomenon: fixed-pattern and shot noise from the camera's photosite array, shaped by the Bayer color filter pattern that sits over the sensor. The shader models both separately, with parameters specific to each type.

---

## Global

### Type

Selects the underlying noise model.

- **Analog Film Grain:** Organic, spatially correlated grain that simulates silver halide crystals suspended in a film emulsion. Uses the *Parameters for Analog Film Grain* below.
- **Digital ISO Noise:** Structured per-pixel noise modeled after digital camera sensor behavior, with independent per-channel variation shaped by the sensor's Bayer filter layout. Uses the *Parameters for ISO Noise* below.

### Film Mode

Sets whether the grain is rendered as grayscale or in color.

- **Monochrome:** Grain is luminance-only. All channels receive the same noise. Matches classic black-and-white film stocks and the look of a desaturated digital camera.
- **Color:** Each color channel receives independent noise, producing the colored speckle characteristic of color film and digital sensors at high ISO.

### Animation Speed

Modulates the grain at a fixed framerate to reduce excessive flicker. This can affect brightness slightly, depending on your display's response rate.

- **Static:** The grain pattern is fixed and does not change between frames. Useful for screenshots or a stable texture without movement.
- **10 / 25 / 30 / 60 FPS:** Refreshes the grain at the selected rate, decoupling its flicker from your actual framerate.
- **Native:** Refreshes the grain every rendered frame, matching your in-game framerate.

---

## Parameters for Analog Film Grain

These parameters only apply when **Type** is set to **Analog Film Grain**.

### Intensity

Controls the strength of the grain. Analog film grain simulates a specific number of grains per pixel: lower values simulate *more* grains, which average out to a smoother, more uniform result, while higher values simulate fewer, more prominent grains.

Range: `0.0` to `1.0`. Default: `0.3`.

### Dispersion

Controls how evenly grain particles are distributed. At `0.0`, every pixel simulates the same number of grain particles, yielding uniform noise intensity. Higher values make the dye-cloud sizes uneven, producing a spikier, less uniform noise profile.

Range: `0.0` to `1.0`. Default: `0.5`.

### Halide Crystal Size

Analog photo paper contains randomly distributed silver halide crystals whose dye clouds can overlap pixel boundaries when scanned digitally. This control applies a slight diffusion to reproduce that effect — larger crystals diffuse more, producing coarser grain.

Range: `0.0` to `1.0`. Default: `0.3`.

### Film Shoulder

Part of a simple filmic tone curve baked into the grain process. Higher values brighten the image by lifting the highlight "shoulder" of the curve; negative values darken it. At `0.0` the curve is neutral.

Range: `-1.0` to `1.0`. Default: `0.0`.

### Film Toe

The companion to Film Shoulder in the filmic tone curve. Controls the brightness of the dark regions — the "toe" of the curve. Higher values lift the shadows, lower values deepen them. At `0.0` the curve is neutral.

Range: `-1.0` to `1.0`. Default: `0.0`.

---

## Parameters for ISO Noise

These parameters only apply when **Type** is set to **Digital ISO Noise**.

### Intensity

Controls the overall strength of the digital sensor noise. At `0.0` the effect is invisible; at `1.0` it is at full strength. The default of `0.85` is intentionally high. Dial this back first if the effect reads as too aggressive.

Range: `0.0` to `1.0`. Default: `0.85`.

### Noise Saturation

Controls how strongly the digital noise is colored. At `1.0` each color channel varies independently, producing vivid chroma noise as seen on real high-ISO camera footage. Reducing this value desaturates the noise toward luminance-only, blending the look toward a more neutral grain.

Range: `0.0` to `1.0`. Default: `1.0`.

### Bayer Matrix RGB Weighting

Weights the noise distribution to match how real camera sensors allocate photosites. Physical sensors dedicate twice as much subpixel area to green as to red or blue, which reduces green's noise by a factor of √2 and causes the grain to adopt a slight pink hue in dark areas. Enable this for a more authentic sensor look; disable it for equal noise across all channels. This feature is inactive when **Film Mode** is set to **Monochrome**.
