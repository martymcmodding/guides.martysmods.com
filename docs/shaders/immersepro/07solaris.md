---
title: Solaris
sidebar_title: "Solaris"
description: "A physically based exposure and bloom solution."
image: "https://assets.martysmods.com/headers/solarisheader.webp"
slug: /shaders/immersepro/solaris
sidebar_position: 7
hide_title: true
---

<!------------------------IMPORTS ---------------------------->

import ReactPlayer from 'react-player'
import ImageComparisonSlider from '@site/src/components/ImageComparisonSlider';

<!------------------------IMPORTS ---------------------------->

![solarisheader](https://assets.martysmods.com/headers/solarisheader.webp)

iMMERSE Pro: Solaris is a physically based exposure and bloom shader that replicates real-world light behavior as it travels to a camera sensor. Built around reverse-tonemapping technology, Solaris generates bloom effects that closely match authentic photography results, providing realistic light diffusion and exposure control within your games.

---

## Core Parameters:

### Log Exposure Bias
Adjusts the reversed-tonemapped exposure using a logarithmic formula that preserves detail in extreme highlights and shadows. This parameter provides more realistic exposure control compared to linear adjustments, maintaining visual information in areas that would otherwise be clipped or lost.

<ReactPlayer
  url="https://assets.martysmods.com/shaders/solaris/LogExposureBiasControl.webm"
  playing={false}
  muted={true}
  controls={true}
  loop={true}
  width="100%"
  height="100%"
  style={{ width: "100%", margin: "0 auto" }}
/>

### Log HDR Whitepoint
Sets the highest brightness threshold that Solaris will consider for bloom generation. This parameter controls the distribution of bloom effects across the brightness range:
- **Lower Values**: Create bloom in darker areas, producing atmospheric lighting effects
- **Higher Values**: Shift bloom towards brighter areas, emphasizing highlight diffusion

<ReactPlayer
  url="https://assets.martysmods.com/shaders/solaris/LogHDRWhitepointControl.webm"
  playing={false}
  muted={true}
  controls={true}
  loop={true}
  width="100%"
  height="100%"
  style={{ width: "100%", margin: "0 auto" }}
/>

### Bloom Intensity
Controls the overall strength of the bloom effect. This parameter should be balanced to achieve natural-looking light diffusion without overwhelming the original image:
- **Lower Values**: Provide subtle bloom that enhances atmosphere
- **Higher Values**: Create dramatic bloom effects for artistic purposes

### Bloom Radius
Determines the spatial extent of the bloom effect, controlling how light spreads from bright sources:
- **Larger Radius**: Creates soft, atmospheric bloom that spreads over wider areas
- **Smaller Radius**: Produces sharp, defined bloom with more concentrated light diffusion

<ReactPlayer
  url="https://assets.martysmods.com/shaders/solaris/BloomRadiusControl.webm"
  playing={false}
  muted={true}
  controls={true}
  loop={true}
  width="100%"
  height="100%"
  style={{ width: "100%", margin: "0 auto" }}
/>

### Bloom Haziness
Controls the atmospheric quality of the bloom effect, affecting detail preservation and visual clarity:
- **Lower Values**: Maintain sharp detail within bloom areas, suitable for crisp, technical applications
- **Higher Values**: Increase atmospheric haze, creating dreamy, cinematic effects

### High Resolution Input
Enables high-resolution sampling for bloom calculations, essential for capturing fine details in small objects or intricate light sources. This feature is particularly useful when working with high-resolution textures or when precise bloom control is required.

<ImageComparisonSlider 
  beforeImage="https://assets.martysmods.com/shaders/solaris/HighResolutionInputDisabled.webp" 
  afterImage="https://assets.martysmods.com/shaders/solaris/HighResolutionInputEnabled.webp"
  beforeLabel="Disabled"
  afterLabel="Enabled"
/>

### Mask by Depth
Enables depth-based masking in Solaris, allowing the bloom effect to be influenced by the scene's depth information. This feature prevents bloom from appearing inappropriately in distant areas, creating more realistic atmospheric effects.

### Depth Mask Strength
Controls the intensity of depth-based masking, determining how strongly distance affects bloom visibility:
- **Higher Values**: Apply stronger depth masking, reducing bloom in distant areas for realistic atmospheric perspective
- **Lower Values**: Apply minimal depth masking, allowing bloom to appear more uniformly across the scene

## Preprocessor Definitions:

### `ENABLE_SOLARIS_REGRADE_PARITY`
Enables integration with the ReGrade shader, allowing ReGrade to receive HDR input from Solaris as a color buffer. This feature enables non-destructive HDR exposure, bloom, and color grading workflows by maintaining the full dynamic range throughout the processing pipeline.

### `SOLARIS_ARTISTIC_MODE`
Activates artistic blending mode presets that deviate from physically accurate bloom for creative applications:

1. **Energy Conserving**: Physically accurate bloom that maintains light energy conservation
2. **HDR Drama**: Enhanced contrast and saturation for dramatic visual impact
3. **Orton**: Soft, dreamy bloom effect inspired by traditional photography techniques
4. **Dreamy**: Ethereal, atmospheric bloom with enhanced light diffusion
5. **Depth Blend**: Bloom that interacts with scene depth for enhanced atmospheric effects
6. **Screen**: Classic screen blending for bright, vibrant bloom effects

### `SOLARIS_PERF_MODE`
Activates performance optimization mode for Solaris, reducing GPU load at the cost of some visual quality. This mode is useful for maintaining performance on lower-end systems or when working with complex scenes.