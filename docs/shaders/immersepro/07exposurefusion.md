---
title: Exposure Fusion
sidebar_title: "Exposure Fusion"
description: "Exposure Fusion improves visibility by selectively adjusting brightness across the frame."
slug: /shaders/immersepro/exposurefusion
sidebar_position: 7
hide_title: true
---

# Exposure Fusion

iMMERSE Pro: Exposure Fusion is an intelligent exposure optimization shader that improves visibility by selectively adjusting brightness across the frame. Most games rely on a single global tonemapper, which can result in crushed shadows or blown highlights. This shader adds localized exposure response, effectively lifting dark areas and taming bright ones while preserving overall contrast and image quality.

---

## Core Parameters:

### Target Brightness
Sets the mid-gray "setpoint" that the image is optimized toward. This parameter determines the ideal brightness level for the scene, with the shader automatically adjusting local areas to match this target.

- **Increase Target Brightness**: When games appear dim or murky, raising this value brings midtones and shadows up for better visibility
- **Decrease Target Brightness**: When highlights feel overexposed or scenes appear too bright, lowering this value preserves highlight headroom

### Intensity
Controls how strongly individual pixels are adjusted toward the target brightness. This parameter determines the aggressiveness of the exposure correction.

**Positive Values**: Lift dark areas and tone down bright areas, creating a more balanced exposure across the frame
**Negative Values**: Perform the opposite effect, darkening bright areas and reducing shadow detail

### Equalization Strength
Controls how much local contrast is flattened as exposure is evened out across neighboring areas. This parameter affects the balance between exposure optimization and detail preservation.

**Higher Values**: 
- Smooth patchy lighting (bright exits, sun shafts, inconsistent illumination)
- Create more uniform exposure across the scene
- May amplify existing noise and create artificial-looking surfaces

**Lower Values**:
- Preserve natural local contrast and micro-detail
- Maintain the original lighting character of the scene
- Provide more subtle exposure correction