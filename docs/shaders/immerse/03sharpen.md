---
title: Sharpen
sidebar_label: "Sharpen"
description: "'It sharpens.'"
image: "https://assets.martysmods.com/headers/sharpenheader.webp"
slug: /shaders/immerse/sharpen
sidebar_position: 3
hide_title: true
---

<!------------------------IMPORTS ---------------------------->

import ImageComparisonSlider from '@site/src/components/ImageComparisonSlider';

<!----------------------------------------------------------->

![SharpenHeader](https://assets.martysmods.com/headers/sharpenheader.webp)

iMMERSE: Sharpen is a simple but effective sharpening shader that enhances image details using contrast-based sharpening. While it doesn't include safeguards against over-sharpening or ringing, it works great when used subtly. Its straightforward design makes it a solid choice for adding clarity to your visuals without unnecessary complexity.

---

## Arguments:

### Sharpen Intensity
Adjusts the sharpness applied to the screen. Start with a value of `0.000` and slowly increase it until you achieve a clear enhancement in in-game details without causing over-sharpening.

 <ImageComparisonSlider 
  beforeImage="https://assets.martysmods.com/shaders/sharpen/sharpenoriginal.webp" 
  afterImage="https://assets.martysmods.com/shaders/sharpen/sharpen.webp"
  beforeLabel="0.000 Sharpness"
  afterLabel="1.000 Sharpness"
 />

### Sharpen Preset
The Sharpen Preset determines how the shader samples the screen to enhance sharpness. Each pattern offers unique results, balancing visual quality and performance.

- **Simple**: Samples in a plus (+) style pattern. This pattern is straightforward and efficient, providing a balanced sharpening effect suitable for most use cases. It works by sampling the center pixel and its direct neighbors horizontally and vertically.
- **Advanced**: Samples in a box pattern. This method performs additional sampling in diagonal directions, resulting in a more refined sharpening effect. It's ideal for users seeking enhanced clarity, especially for detailed or high-resolution content.