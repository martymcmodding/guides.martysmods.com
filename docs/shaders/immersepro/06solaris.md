---
title: Solaris
sidebar_title: "Solaris"
description: "A physically based exposure and bloom solution."
image: "https://assets.martysmods.com/headers/solarisheader.webp"
slug: /shaders/immersepro/solaris
sidebar_position: 6
hide_title: true
keywords: 
 - Solaris
tags:
 - Shader Guide
 - iMMERSE Pro
---

<!------------------------IMPORTS ---------------------------->

import ReactPlayer from 'react-player'
import ImageComparisonSlider from '@site/src/components/ImageComparisonSlider';

<!------------------------IMPORTS ---------------------------->

![solarisheader](https://assets.martysmods.com/headers/solarisheader.webp)

iMMERSE Pro: Solaris is a physically based exposure and bloom shader that replicates the light that travels to the camera sensor. Solaris was built to generate a bloom that is comparable to real-world photography within your games through reverse-tonemapping.

---

## Basic Arguments:

### Log Exposure Bias
Adjusts the reversed-tonemaped exposure using a logarithmic based forumla. This allows for details to remain in extreme white/black points & and more realistic exposure control.

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
Sets the highest whitepoint Solaris will consider for bloom. Lower values cause more bloom in darker areas, while higher values shift bloom towards brighter areas.

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
Adjusts the overall strength of the bloom effect. Higher values result in a more pronounced bloom, while lower values produce a subtler effect.

### Bloom Radius
Sets the width of the bloom effect. A larger radius spreads the bloom over a wider area, creating a softer bloom. While a smaller radius spreads the bloom over a more defined area, creating a sharper bloom.

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

### Bloom Hazyness
Controls the amount of haze in the bloom effect. Lower values maintain more detail where the bloom appears, while higher values increase haze and reduce clarity.

### High Resolution Input
Enables high-resolution sampling. This is useful for capturing detailed or small objects that need to glow.

 <ImageComparisonSlider 
  beforeImage="https://assets.martysmods.com/shaders/solaris/HighResolutionInputDisabled.webp" 
  afterImage="https://assets.martysmods.com/shaders/solaris/HighResolutionInputEnabled.webp"
  beforeLabel="Disabled"
  afterLabel="Enabled"
 />

### Mask by Depth
Enables depth-based masking in Solaris, allowing the bloom effect to be influenced by the scene's depth information.

### Depth Mask Strength
Adjusts the intensity of depth masking. Higher values apply more depth masking, reducing bloom in distant areas. Lower values apply less depth masking, allowing more bloom throughout the scene.

## Preprocessor Definitions:

### `ENABLE_SOLARIS_REGRADE_PARITY`
When enabled and ReGrade is active, 

### `SOLARIS_ARTISTIC_MODE`
Allows for different blending mode presets that defer from the standard physically accurate bloom.

1. Energy Conserving (physically accurate)
2. HDR Drama
3. Orton
4. Dreamy
5. Depth Blend
6. Screen

### SOLARIS_PERF_MODE
Activates a performance optimized mode for Solaris, reducing GPU load.