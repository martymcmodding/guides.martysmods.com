---
title: Exposure Fusion
sidebar_title: "Exposure Fusion"
description: "WRITE SOMETHIN GHERE BOZO"
slug: /shaders/immersepro/exposurefusion
sidebar_position: 7
hide_title: true
keywords: 
 - Exposure Fusion
tags:
 - Shader Guide
 - iMMERSE Pro
---

# Exposure Fusion

Exposure Fusion improves visibility by selectively adjusting brightness across the frame. Most games rely on a single global tonemapper, which can leave shadows crushed or highlights blown. This shader adds a localized response, effectively lifting dark areas and taming bright ones without wrecking overall contrast.

---

## Target Brightness

Sets the mid-gray “setpoint” the image is steered toward. Defaults should work relatively well for most games. However, if a game looks dim or murky, raise Target Brightness to bring midtones and shadows up. If highlights feel hot or the scene already looks bright, lower it to preserve headroom.

## Intensity

Controls how strongly pixels are nudged toward the target. Higher Intensity opens shadows faster but risks clipping highlights and bright areas if the target brightness is too high.

## Equalization Strength

Controls how flat local contrast becomes as exposure is evened out across neighborhoods. Higher values smooth patchy lighting (bright exits, sun shafts) but can amplify existing noise in the game and make surfaces look plasticky. Lower values preserve natural local contrast and micro-detail.