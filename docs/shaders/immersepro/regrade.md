---
title: ReGrade
sidebar_label: "ReGrade"
description: "A powerful real-time color grading suite within ReShade"
image: "https://assets.martysmods.com/headers/regradeheader.webp"
slug: /shaders/immersepro/regrade
sidebar_position: 4
hide_title: true
---

![regradeheader](https://assets.martysmods.com/headers/regradeheader.webp)

iMMERSE Pro: ReGrade is a modular color grading shader built around a slot-based pipeline. Rather than applying a fixed set of adjustments in a fixed order, ReGrade lets you choose which color operations run and in what sequence, giving you full control over how corrections are stacked and interact with each other.

---

## Preprocessor Definitions

### ENABLE_SOLARIS_REGRADE_PARITY

Default: `0`. Accepts `0` or `1`.

When enabled, ReGrade receives the HDR output from [Solaris](../immersepro/solaris.md) as its color input instead of the standard tonemapped frame. This allows ReGrade's color grading to work on the full HDR range that Solaris produces, so exposure, bloom, and color corrections all interact correctly without clipping or flattening each other. If you are using both Solaris and ReGrade together, enabling this is recommended.

---

## Order of Color Operations

ReGrade provides nine slots, each of which can be assigned any one of the available color operations. Operations are applied from Slot 1 through Slot 9 in order, meaning Slot 1 is processed first and Slot 9 last. The output of each slot feeds into the next, so the order you choose matters. For example, applying Levels before Tone Curve produces a different result than applying Tone Curve first.

All slots default to **None**, meaning no operation is applied. Assign an operation by selecting it from the dropdown in each slot. Each operation has its own set of parameters in the sections below.

:::note
You can assign the same operation to more than one slot, but all instances of that operation share the same parameters. Assigning the same operation twice does not give you two independent sets of controls for it.
:::

Each operation also has a **Bypass** toggle at the top of its parameter section. Enabling Bypass temporarily disables that operation while keeping its settings intact, which is useful for comparing your grade with and without a specific step.

---

## Levels

Levels remaps the tonal range of the image by defining where black and white begin and end. The Input controls clip the source image, and the Output controls define the destination range.

All values use a 0-255 scale.

- **Black Level In**: Sets the point in the source image that will be treated as pure black. Any values below this are clipped to black. Raising this above `0` increases contrast by treating dark-but-not-black areas as black, similar to pulling in the left end of a histogram.
- **White Level In**: Sets the point in the source image that will be treated as pure white. Lowering this below `255` clips bright areas, increasing contrast by treating bright-but-not-white areas as white.
- **Black Level Out**: Sets what value the remapped black point outputs to. Raising this above `0` lifts the blacks, creating a faded or milky look by preventing the darkest areas from reaching pure black.
- **White Level Out**: Sets what value the remapped white point outputs to. Lowering this below `255` caps the brightness of the image, preventing it from reaching pure white.

---

## Adjustments

A set of broad, global image corrections. These are the most straightforward controls in ReGrade and a good starting point for any grade.

- **Contrast**: Expands or compresses the difference between light and dark areas. Positive values increase contrast, pulling darks darker and lights lighter. Negative values reduce contrast, flattening the image toward grey.
- **Exposure**: Brightens or darkens the entire image uniformly. Positive values raise exposure, negative values lower it. Range: `-4.0` to `4.0`.
- **Gamma**: Adjusts the midtone brightness without affecting the absolute black or white points. Positive values lift the midtones, negative values lower them.
- **Filmic Gamma**: Similar to Gamma but applies more of its effect to darker areas and less to brighter areas, which mimics the response curve of film. Useful for adding a subtle cinematic quality to shadows.
- **Saturation**: Uniformly adjusts the intensity of all colors. Positive values increase saturation, negative values reduce it toward greyscale.
- **Vibrance**: Selectively boosts the saturation of less-saturated colors while leaving already-saturated colors mostly unchanged. Less aggressive than Saturation for adding color richness without oversaturating vivid areas.

---

## Lift Gamma Gain

A color grading standard used widely in film and broadcast post-production. Lift, Gamma, and Gain each affect a different tonal range and can apply both luminance and color shifts using color pickers. All three pickers default to middle grey (`0.5, 0.5, 0.5`), which produces no effect. Moving a picker away from grey tints that tonal range toward the chosen color.

### Lift Gamma Gain Mode

Selects the formula used for the LGG calculations.

- **American Society of Cinematographers**: Uses the ASC CDL standard, a widely adopted format in film and broadcast color pipelines.
- **DaVinci Resolve**: Uses the LGG implementation from DaVinci Resolve. Useful if you are trying to match a grade from that software.

### Lift

Affects the shadows and darker areas of the image. Pulling the picker toward a color tints the shadows with that color. Moving it toward black darkens the shadows, moving it toward white lifts them.

### Gamma

Affects the midtones. Tinting toward a color shifts the overall color temperature of the mid-range without strongly affecting the extremes.

### Gain

Affects the highlights and brighter areas. Tinting toward a color shifts the color of bright areas. Pulling toward white boosts brightness in highlights, pulling toward black reduces them.

---

## Calibration

Calibration provides white balance and primary color adjustments for correcting color casts or shifting the overall color response of the image.

### Color Temperature

Range: `1700K` to `40000K`. Default: `6500K`.

Adjusts the white balance of the image. Lower values shift the image toward warm orange tones, simulating a tungsten or candlelight color temperature. Higher values shift it toward cooler blue tones, simulating overcast daylight or shade. `6500K` is approximately standard daylight and produces no visible shift at default.

### Lab A Offset (Green - Magenta)

Range: `-1.0` to `1.0`. Default: `0.0`.

Shifts the image along the green-to-magenta axis in the Lab color space. Negative values push toward green, positive values push toward magenta.

### Lab B Offset (Blue - Orange)

Range: `-1.0` to `1.0`. Default: `0.0`.

Shifts the image along the blue-to-orange axis in the Lab color space. Negative values push toward blue, positive values push toward orange.

### R|G|B Primary Mode

Selects how the RGB primary adjustments below are calculated.

- **ReGrade Legacy**: Uses the original ReGrade method for primary adjustments.
- **Barycentric**: Adjusts primaries using barycentric interpolation for smoother transitions between colors.
- **Hue Based**: Adjusts primaries by targeting specific hue ranges, which makes the effect more intuitive for hue-driven corrections.

### R|G|B Primary Hue

Range: `-1.0` to `1.0` per channel.

Shifts the hue of each color primary (Red, Green, Blue) independently. Useful for correcting a specific primary that looks off without affecting the others.

### R|G|B Primary Saturation

Range: `-1.0` to `1.0` per channel.

Adjusts the saturation of each color primary independently. Reducing the saturation of a specific channel desaturates only that primary without globally reducing all colors.

---

## Color Remapping

Color Remapping provides Hue, Saturation, and Value control over seven individual color ranges: Red, Orange, Yellow, Green, Aqua, Blue, and Magenta. Each range is an independent float3 where the three values represent Hue offset, Saturation offset, and Value (brightness) offset respectively. All default to `0.0`, meaning no change.

This is useful for targeted corrections such as shifting foliage to a more natural green, pulling back an oversaturated sky, or neutralizing a color cast in a specific part of the spectrum without affecting other colors.

---

## Tone Curve

A simplified tone curve with four tonal range sliders and a dark wash effect. All sliders range from `-1.0` to `1.0` with a default of `0.0`.

- **Shadows**: Adjusts the brightness of the darkest areas of the image.
- **Darks**: Adjusts dark midtones, slightly above the shadow floor.
- **Lights**: Adjusts light midtones, slightly below the highlights.
- **Highlights**: Adjusts the brightness of the brightest areas of the image.
- **Dark Wash Range**: Controls how far up from pure black the dark wash effect extends. Higher values push the wash further into the tonal range, affecting more of the dark areas.
- **Dark Wash Intensity**: Controls the strength of the dark wash. The dark wash lifts the shadow floor, preventing blacks from reaching pure black and creating a matte, faded look similar to crushed or lifted blacks in a cinematic grade. At `0.0` there is no effect.

---

## Split Toning

Split Toning applies a color tint independently to two different tonal zones, allowing you to push different parts of the image toward different hues for stylistic effect, such as warm highlights and cool shadows.

### Split Mode

- **Shadows / Highlights**: Splits the toning between the dark and bright areas of the image.
- **Greys / Saturated Colors**: Splits the toning between neutral, desaturated areas and already-colorful areas.

### Tint A

A color picker that sets the tint applied to the first zone defined by the active Split Mode. Defaults to neutral grey, which produces no effect.

### Tint B

A color picker that sets the tint applied to the second zone. Defaults to neutral grey.

### Balance

Range: `-1.0` to `1.0`. Default: `0.0`.

Shifts the influence between the two tints. Negative values give more weight to Tint A, positive values give more weight to Tint B. At `0.0`, both zones are balanced equally.

### Blend Mode

Controls how the tint is composited into the image.

- **Soft Light**: A gentler blend that preserves more of the original image detail and produces subtler toning.
- **Overlay**: A stronger blend that makes the tinting more pronounced, particularly in high-contrast areas.

---

## Color Balance

Color Balance adjusts the Hue and Saturation of the image independently for three tonal ranges: Shadows, Midtones, and Highlights. Each range is a two-value control where the first value is the Hue offset and the second is the Saturation offset. All default to `0.0`.

- **Hue / Saturation: Shadows**: Adjusts hue and saturation in the darker areas of the image.
- **Hue / Saturation: Midtones**: Adjusts hue and saturation in the mid-brightness areas of the image.
- **Hue / Saturation: Highlights**: Adjusts hue and saturation in the brighter areas of the image.

---

## Special Transforms

### Bleach Bypass (Gamma Corrected)

Range: `0.0` to `1.0`. Default: `0.0`.

Simulates the bleach bypass film development technique, where skipping the bleach step during processing retains the silver layer alongside the color dye. The result is reduced saturation, increased contrast, and a gritty, high-contrast look that is common in action and thriller film grades. Higher values apply a stronger bypass effect.

### Gamma on Luma | Chroma

Range: `-1.0` to `1.0` per component. Default: `0.0, 0.0`.

Applies independent gamma adjustments to the luminance and chroma channels separately. The first value adjusts gamma on luminance only, brightening or darkening the image without shifting its colors. The second value adjusts gamma on chroma only, making colors more vivid or more muted without changing overall brightness. This is useful when you want to affect one channel without the cross-contamination that standard gamma adjustment introduces.

---

## Vignette

Vignette darkens the edges and corners of the image. ReGrade provides two physically modeled vignette types that can be used independently or together.

### Enable Vignette Effect

Toggles the vignette on or off. Disabled by default.

### Mechanical Vignette

Simulates the light blockage caused by the barrel of a camera lens at the edges of the frame. This produces a more abrupt, circular darkening at the corners.

- **Radius**: Controls how far the vignette extends toward the center. Higher values bring the dark edges closer in.
- **Blurryness**: Controls the softness of the vignette edge. Lower values produce a hard, sharp edge. Higher values produce a gradual, soft falloff.
- **Shape**: Adjusts the aspect ratio of the vignette shape. `0.0` produces a circular shape. Positive values stretch it horizontally for an anamorphic look. Negative values stretch it vertically.

### Sensor Vignette

Simulates the natural light falloff that occurs when light strikes a camera sensor at oblique angles toward the edges of the frame. This produces a softer, more gradual darkening than the mechanical vignette.

- **Scale**: Controls how strongly the sensor vignette is applied. Higher values increase the falloff.

### Vignette Blending Mode

Controls how the vignette is composited onto the image.

- **Standard**: Applies the vignette as a standard darkening blend over the image.
- **HDR Simulation**: Blends the vignette in a way that accounts for brightness and color levels, which better preserves tone in bright areas.
- **HDR Simulation (Protect Tones)**: An enhanced version of HDR simulation that adds additional protection to prevent the vignette from washing out specific tone values.

---

## Utility

### Dithering

Adds a subtle noise pattern to the image to break up banding artifacts that can appear in smooth gradients, particularly at lower output bit depths. Higher bit depth settings apply a finer dither that is less visible but still effective.

- **Off**: No dithering applied.
- **6 Bit**: Dithering for a 6-bit output target.
- **8 Bit**: Dithering for a standard 8-bit display. A good default for most setups.
- **10 Bit**: Dithering for a 10-bit display.
- **12 Bit**: Dithering for a 12-bit display.

### Display Colormap

Toggles an on-screen colormap reference overlay. Useful for evaluating the color distribution and grading response of the current operation stack.
