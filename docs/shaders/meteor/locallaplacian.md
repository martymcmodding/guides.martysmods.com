---
title: "Local Laplacian"
sidebar_label: "Local Laplacian"
description: "Advanced local contrast enhancement for ReShade."
slug: /shaders/meteor/locallaplacian
sidebar_position: 2
hide_title: true
---

# Local Laplacian

METEOR: Local Laplacian applies the Local Laplacian filtering algorithm for spatially-aware contrast enhancement. Unlike a simple curves adjustment or unsharp mask, which raise contrast globally or only at a single scale, Local Laplacian works across multiple scales of detail simultaneously, boosting texture and edge clarity without introducing the halo artifacts that plague simpler sharpening approaches. The technique underlies the Clarity, Texture, and Dehaze sliders in Adobe Lightroom, and is normally far too expensive for real-time use. This implementation is optimized to be the fastest known version of the algorithm.

:::warning
Local Laplacian is significantly more expensive than most ReShade shaders. The performance cost is inherent to the algorithm. Expect a meaningful framerate impact, especially at high resolutions.
:::

---

## Parameters

### Local Contrast Strength

Controls the strength and direction of the local contrast adjustment. Positive values increase micro-contrast, making edges and textures more defined and punchy, similar to pushing Clarity in a photo editor. Negative values do the opposite: fine detail is softened and local contrast is reduced, producing a smoother, more diffused look. At `0.0` (the default) the shader has no effect.

Range: `-1.0` to `1.0`

### Pyramid Upscaling

Selects the interpolation method used when reconstructing the image from the Laplacian pyramid. The algorithm decomposes the image into multiple resolution layers, processes each one, and then rebuilds the result. This setting controls the quality of that rebuild step.

- **Bilinear:** Faster reconstruction with slightly lower precision. The default. Suitable for most use cases.
- **Bicubic:** Smoother reconstruction that better preserves fine edges during the upscaling steps. Increases cost modestly; worth enabling when artifacts or softness are visible at high Strength values.
