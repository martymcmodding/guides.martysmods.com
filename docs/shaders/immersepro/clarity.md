---
title: Clarity
sidebar_label: "Clarity"
description: "Enhances texture and image details by adjusting local contrast, similar to Photoshop's Clarity."
image: "https://assets.martysmods.com/headers/clarityheader.webp"
slug: /shaders/immersepro/clarity
sidebar_position: 1
hide_title: true
---

<!------------------------IMPORTS ---------------------------->

import ImageComparisonSlider from '@site/src/components/ImageComparisonSlider';

<!------------------------------------------------------------>

![ClarityHeader](https://assets.martysmods.com/headers/clarityheader.webp)

iMMERSE Pro: Clarity is a real-time image enhancement shader inspired by Adobe Photoshop's Clarity tool. It enhances midtone contrast and local detail in scenes with low contrast or flat lighting, making it particularly effective for landscape photography, architectural visualization, and any content requiring enhanced texture definition. The shader sharpens shadows, refines contours, and increases texture depth while maintaining artifact-free results through careful parameter control.

---

## Blending Parameters:

### Effect Radius
Controls the spatial extent of Clarity's sampling radius when applying sharpening and contrast enhancement. Larger values capture broader features and produce more pronounced detail enhancement, though excessive values may introduce subtle haloing artifacts. Smaller values maintain tight, localized effects for subtle enhancement.

### Texture Intensity
Determines the strength of sharpening and detail enhancement applied by the shader. Higher values emphasize surface textures and fine geometric elements, while lower values preserve the original soft aesthetic. For optimal results, begin with low values and gradually increase until achieving natural, crisp enhancement without over-processing artifacts.

<ImageComparisonSlider  
  beforeImage="https://assets.martysmods.com/shaders/clarity/ClarityOriginal2.webp"  
  afterImage="https://assets.martysmods.com/shaders/clarity/ClarityTextureSharpen2.webp"  
  beforeLabel="0.000 Texture Sharpen"  
  afterLabel="1.000 Texture Sharpen"  
/>

### Local Contrast Intensity
Adjusts the contrast relationship between adjacent pixels to reveal subtle surface textures and depth information. Increasing this parameter enhances perceived sharpness and counteracts flat lighting conditions, though excessive values can produce artificial-looking results that deviate from natural appearance.

<ImageComparisonSlider  
  beforeImage="https://assets.martysmods.com/shaders/clarity/ClarityOriginal2.webp"  
  afterImage="https://assets.martysmods.com/shaders/clarity/ClarityLocalContrast2.webp"  
  beforeLabel="0.000 Local Contrast"  
  afterLabel="1.000 Local Contrast"  
/>
