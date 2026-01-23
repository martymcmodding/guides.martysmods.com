---
title: Chromatic Abberation
sidebar_title: "Chromatic Abberation"
description: "Physically Accurate Chromatic Abberation"
slug: /shaders/meteor/chromaticabberation
sidebar_position: 1
hide_title: True
---

# Chromatic Aberration

METEOR: Chromatic Aberration simulates color fringing and dispersion effects seen in real camera lenses. Different wavelengths of light are refracted by varying amounts, causing colored edges and subtle color shifts, especially towards the image periphery.

---

## Parameters

### Lens Type

Selects the optical design to emulate:

- **Chromatic (Single Lens):** Strong color fringing and pronounced aberration
- **Achromatic (Doublet):** Controlled effect with reduced aberration
- **Apochromatic (Triplet):** Minimal aberration across a wide range of wavelengths

### Curve

Adjusts the curvature profile of the aberration effect. Higher values increase nonlinearity, intensifying color separation towards the edges.

### Amount

Sets the overall strength of the chromatic aberration effect.

### Quality Preset

Controls the number of samples used to calculate the effect:

- **Low:** Minimal samples, best performance
- **Medium:** Balanced quality and performance
- **High:** Improved quality, moderate performance impact
- **Very High:** High quality with increased sample count
- **Ultra:** Maximum quality, highest performance cost

### Use HDR

Enables HDR-based reverse tonemapping for more accurate color reproduction in high dynamic range scenes.

### Use Post Filtering

Applies additional filtering to reduce artifacts and smooth color transitions.