---
title: ReGrade + (Addon)
sidebar_title: "ReGrade + (Addon)"
description: "Provides a real-time heuristic of the image and color grading GUI native to ReShade."
image: "https://www.martysmods.com/media/ReGradePlus.webp"
slug: /shaders/immerseultimate/regradeplus
sidebar_position: 3
hide_title: True
---

![ReGradePlusHeader](https://assets.martysmods.com/headers/ReGradePlusHeader.webp)

iMMERSE Ultimate: ReGrade + is a commercial-level color-correction suite for ReShade, inspired by industry-standard tools. It eliminates the need to leave the game for detailed adjustments, allowing real-time color correction with an intuitive UI. This makes it a seamless experience for users, especially those knowledgeable in Color Theory, Photography, and Image Post-Processing.

:::warning
ReGrade + requires the Addon Support build of ReShade to function properly, otherwise the screen will be black when the shader is enabled.
:::

---

## Setup and Configuration:

### Enabling ReGrade +
Before adjusting parameters, move the "ReGrade +" tab to a separate window in the ReShade/Game UI. This controls the entire shader and lets you tweak other effects while viewing the results in real-time. Enabling the shader alone won't activate it. If any component is not running, the Addon/Shader Window will indicate it:

![ReGradePlus ReShade Window Alerts - All OFF](https://assets.martysmods.com/shaders/regradeplus/regradeplus_shaders_disabled.webp)

## Analysis Tools:

### Scopes
The "Scopes" section provides graphical representations of various color statistics and balances. By default, it shows the "Histogram RGB," which displays exposure and color values of the current scene.

**Available Scope Types:**

- **Histogram Y**: Displays luminance levels, showing brightness distribution across the scene

    ![Histogram Y](https://assets.martysmods.com/shaders/regradeplus/regradeplus_histogram_y.webp)

- **Histogram RGB**: Shows color levels separated into Red, Green, and Blue channels

    ![Histogram RGB](https://assets.martysmods.com/shaders/regradeplus/regradeplus_histogram_rgb.webp)

- **Waveform Y**: Visualizes luminance in waveform format for detailed brightness analysis

    ![Waveform Y](https://assets.martysmods.com/shaders/regradeplus/regradeplus_waveform_y.webp)

- **Waveform RGB**: Displays RGB channels independently in waveform format

    ![Waveform RGB](https://assets.martysmods.com/shaders/regradeplus/regradeplus_waveform_rgb.webp)

- **Waveform RGB Parade**: Separates color channels in parade format for individual analysis

    ![Waveform RGB Parade](https://assets.martysmods.com/shaders/regradeplus/regradeplus_waveform_rgb_parade.webp)

- **Vectorscope**: Shows chroma distribution for color saturation and hue analysis

    ![Vectorscope](https://assets.martysmods.com/shaders/regradeplus/regradeplus_histogram_vectorscope.webp)

- **Vectorscope 2x Zoom**: Zoomed-in view for finer chroma data analysis

    ![Vectorscope 2x Zoom](https://assets.martysmods.com/shaders/regradeplus/regradeplus_histogram_vectorscope2x.webp)

## Color Adjustment Tools:

### Tweaks
The "Tweaks" section offers quick adjustments for basic image properties without deep formatting changes.

![ReGradePlus Tweaks Section](https://assets.martysmods.com/shaders/regradeplus/regradeplus_tweaks.webp)

**White Balance:**
- **Temperature**: Adjusts color temperature (warm/cool tones)
- **Tint**: Controls color tint adjustments

**Exposure:**
- **Exposure**: Controls overall image brightness
- **Contrast**: Adjusts image contrast levels
- **Gamma**: Modifies overall brightness
- **Filmic Gamma**: Adjusts brightness in dark and mid-tone areas
- **Saturation**: Controls color intensity
- **Vibrance**: Enhances color vibrancy

**High Dynamic Range:**
- **Shadows**: Adjusts grey area brightness
- **Darks**: Controls darkest area brightness
- **Lights**: Sets brightest area brightness
- **Highlights**: Adjusts highest light point brightness

### Tone Curves
Interactive widget for creating custom tonemaps. You can adjust brightness and darkness for each color or luminance level using curve manipulation.

**Default Mode**: RGB mode affects all three primary colors simultaneously
**Per-Channel Mode**: Click colored squares to edit individual color channels

![ReGradePlus Tone Curve Points Example](https://assets.martysmods.com/shaders/regradeplus/regradeplus_tonecurve.webp)

**Controls:**
1. Click on a point in the graph to select it
2. Drag to adjust the curve
3. Click elsewhere to create new control points

### Color Correction

**Split Toning:**
Three color wheels for Shadows, Midtones, and Highlights

![ReGradePlus Split Toning Wheel Example](https://assets.martysmods.com/shaders/regradeplus/regradeplus_colorcorrection.webp)

**Controls:**
1. Click and drag the center point
2. Use gauges for fine-tuning

**Color Wheel:**
Adjusts Red, Orange, Yellow, Green, Aqua, Purple, and Magenta:
- **Hue vs Luma**: Changes color values based on brightness
- **Hue vs Saturation**: Changes color values based on saturation

![ReGradePlus Color Wheel Example](https://assets.martysmods.com/shaders/regradeplus/regradeplus_huevsluma.webp)

**Controls:**
1. Click and drag colors to adjust values
2. Hold Shift for linear movement (prevents accidental hue changes)
3. Right-click to reset individual color values