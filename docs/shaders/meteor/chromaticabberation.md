---
title: Chromatic Aberration
sidebar_title: "Chromatic Aberration"
description: "Physically Accurate Chromatic Aberration"
slug: /shaders/meteor/chromaticabberation
sidebar_position: 1
hide_title: True
---

# Chromatic Aberration

METEOR: Chromatic Aberration simulates the color fringing produced by real camera lenses. When light passes through glass, different wavelengths bend by slightly different amounts, with red bending least and blue bending most. Colors land at slightly different points on the sensor, producing colored fringing along high-contrast edges that is most visible toward the corners and periphery of the frame. METEOR models this based on three classes of real optical lens design.

---

## Parameters

### Lens Type

Selects the optical lens design to emulate, which determines how much chromatic separation occurs and how it is distributed across the frame.

- **Chromatic (single lens):** A bare, uncorrected lens element with no chromatic compensation. Produces the strongest color fringing, with visible red/cyan splits along edges that intensify toward the frame corners.
- **Achromatic (doublet):** A two-element cemented lens that corrects aberration for two wavelengths. Fringing is reduced and constrained, giving a more subtle, realistic look for modern camera glass.
- **Apochromatic (triplet):** A three-element design that brings three wavelengths into focus at the same plane. Produces minimal residual aberration, suitable for simulating high-end telephoto or cinema lenses.

### Curve

Controls how aberration strength falls off across the frame. At `0.0` the falloff follows a standard radial profile. Positive values concentrate the aberration toward the corners. Negative values spread it more evenly, bringing the effect closer to the center.

Range: `-1.0` to `1.0`

### Amount

Sets the overall intensity of the chromatic aberration. Positive values produce the natural red/cyan split seen in real lenses. Negative values invert the color separation so cyan leads on one side and red on the other, which can simulate certain corrective optical designs or flip the fringing direction for creative use.

Range: `-1.0` to `1.0`

### Quality Preset

Controls how many spectral samples are used to compute the dispersion. Higher settings produce smoother color gradients across the fringe, reducing banding between color channels at the cost of GPU time.

- **Low:** Fewest samples. Fastest, and acceptable for subtle amounts.
- **Medium:** Balanced quality and performance. Suitable for most use cases.
- **High:** Noticeably smoother gradients with moderate cost.
- **Very High:** High sample count for strong amounts or close inspection.
- **Ultra:** Maximum quality. Use when Amount is pushed high and banding is visible at lower presets.

### Use HDR

When enabled, the shader applies reverse tonemapping before computing aberration and re-tonemaps afterward. This prevents color channels from clipping against the SDR ceiling during dispersion, preserving accurate color separation in bright areas like specular highlights and blown-out light sources. Enabled by default.

### Use Post Filtering

Applies a smoothing pass after aberration is computed to soften color fringing artifacts or aliasing at high-contrast edges. Disabled by default. Enable it if you see jagged or noisy fringe edges at higher Quality Presets or large Amount values.
