---
title: Local Laplacian
sidebar_title: "Local Laplacian"
description: "Advanced Local Contrast Enhancement Algorithm"
slug: /shaders/meteor/locallaplacian
sidebar_position: 3
hide_title: True
---

# Local Laplacian

METEOR: Local Laplacian implements the Fast Local Laplacian algorithm for local contrast enhancement. This technique is used in professional photo editing tools like Adobe Lightroom's Clarity, Texture, and Dehaze features.

---

## Parameters

### Local Contrast Strength

Controls the intensity of local contrast enhancement. Higher values increase detail and texture visibility, while lower values keep the effect subtle.

### Pyramid Upscaling

Selects the interpolation method for reconstructing the Laplacian pyramid:

- **Bilinear:** Faster processing, lower quality
- **Bicubic:** Smoother results, higher quality, slightly slower