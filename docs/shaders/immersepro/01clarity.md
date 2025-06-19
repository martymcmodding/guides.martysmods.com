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

iMMERSE Pro: Clarity is a real-time image-enhancement shader inspired by Photoshop’s Clarity tool. It boosts midtone contrast and local detail in flat or hazy scenes and is ideal for landscapes, architecture, or any low-contrast content. By tweaking Effect Radius, Texture Intensity, and Local Contrast, you can sharpen shadows, refine contours, and elevate texture depth without introducing halos or artifacts.

---

## Blending

### Effect Radius  
Determines how far around each pixel Clarity samples when applying sharpening and contrast. Larger values bring out broader features and make details more pronounced but risk faint halos if overused. Smaller values keep the effect tight and subtle.

### Texture Intensity  
Controls the amount of sharpening and detail enhancement. Higher values emphasize textures and fine elements, while lower values maintain a softer look. Start low and gradually increase until you achieve a natural, crisp result.

<ImageComparisonSlider  
  beforeImage="https://assets.martysmods.com/shaders/clarity/ClarityOriginal2.webp"  
  afterImage="https://assets.martysmods.com/shaders/clarity/ClarityTextureSharpen2.webp"  
  beforeLabel="0.000 Texture Sharpen"  
  afterLabel="1.000 Texture Sharpen"  
/>

### Local Contrast Intensity  
Adjusts contrast between neighboring pixels to reveal subtle textures and depth. Increasing this value enhances perceived sharpness and counteracts flat lighting, but excessive use can look artificial.

<ImageComparisonSlider  
  beforeImage="https://assets.martysmods.com/shaders/clarity/ClarityOriginal2.webp"  
  afterImage="https://assets.martysmods.com/shaders/clarity/ClarityLocalContrast2.webp"  
  beforeLabel="0.000 Local Contrast"  
  afterLabel="1.000 Local Contrast"  
/>
