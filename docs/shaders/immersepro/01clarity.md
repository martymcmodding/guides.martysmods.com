---
title: Clarity
sidebar_label: "Clarity"
description: "Enhances texture and image details, by adjusting local contrast. simular to Photoshop's Clarity."
image: "https://assets.martysmods.com/headers/clarityheader.webp"
slug: /shaders/immersepro/clarity
sidebar_position: 1
hide_title: true
keywords: 
 - Clarity
tags:
 - Shader Guide
 - iMMERSE Pro
---

<!------------------------IMPORTS ---------------------------->

import ImageComparisonSlider from '@site/src/components/ImageComparisonSlider';

<!------------------------------------------------------------>

![ClarityHeader](https://assets.martysmods.com/headers/clarityheader.webp)

iMMERSE Pro: Clarity is based on Photoshop’s Clarity tool. It helps bring out detail and depth in flat or hazy scenes—great for landscapes, architecture, or low-contrast games. Use it to sharpen shadows, define mid-tones, and make visuals stand out without over-sharpening or adding artifacts.

---

## Blending Arguments:

### Texture Intensity  
Controls how much sharpening and detail enhancement is applied. Higher values make textures and fine details more prominent, but too much can create a harsh appearance. Start with a low setting and increase gradually to find the right balance for your scene.

<ImageComparisonSlider  
  beforeImage="https://assets.martysmods.com/shaders/clarity/ClarityOriginal-1.webp"  
  afterImage="https://assets.martysmods.com/shaders/clarity/ClarityTextureIntensity1.000-1.webp"  
  beforeLabel="0.000 Texture Sharpen"  
  afterLabel="1.000 Texture Sharpen"  
/>

### Local Contrast Intensity  
Adjusts the contrast between neighboring pixels, which helps reveal textures and subtle details. Higher settings enhance perceived sharpness and reduce flat lighting, but too much may look unnatural. It's best to start low and adjust upwards until it suits your scene.

<ImageComparisonSlider  
  beforeImage="https://assets.martysmods.com/shaders/clarity/ClarityOriginal-1.webp"  
  afterImage="https://assets.martysmods.com/shaders/clarity/ClarityLocalContrast1.000-1.webp"  
  beforeLabel="0.000 Local Contrast"  
  afterLabel="1.000 Local Contrast"  
/>

### Effect Radius  
Defines how far Clarity looks around each pixel to apply sharpening and contrast enhancements. Larger values affect a wider area and make details stand out more—but may introduce faint halos if set too high. Smaller values keep the enhancement localized and subtle.