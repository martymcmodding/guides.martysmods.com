---
title: ReGrade
sidebar_label: "ReGrade"
description: "A powerful real-time color grading suite within ReShade"
image: "https://www.martysmods.com/media/ReGrade.webp"
slug: /shaders/immersepro/regrade
sidebar_position: 4
hide_title: true
keywords: 
 - ReGrade
tags:
 - Shader Guide
 - iMMERSE Pro
---

![regradeheader](./images/regradeheader.webp)

iMMERSE Pro: ReGrade is a color-correction suite designed to be on par with standard professional tools, effectively removing the step of toggling between a color-correction software and the game to finish editing, making it all real-time and hassle-free.

While there is no correct values and usage of this shader, people familiarized with Photography, color theory and related areas will make the best usage. However, even people with no experience can get great results by looking at the changes made being shown instantly.

---

## Color Operations and Slots:

At first, you should notice lots of drop-down boxes in the section "Color Operations." This tells the shader what color operation is applied at each step. Think of it like building blocks, with the first being the bottom layer and the last being the top layer. You have 9 slots available, and the following options can be applied in any order as the user desires or needs:

### Levels
Adjusts the black and white points of the image, effectively controlling the contrast and brightness range.

### Adjustments
Provides general color and overall image changes, useful for broad adjustments.

### Lift Gamma Gain
Allows you to tweak the "Lift" (shadows), "Gamma" (midtones), and "Gain" (highlights) levels of the image, offering detailed control over different brightness ranges.

### Calibration
Allows you to modify the default values for color hues and layers, ensuring accurate color representation.

### Color Remapping
Enables direct changes to the colors of the image, often used for creative color effects.

### Tone Curves
Adjusts the tones of the exposed (bright) and unexposed (dark) parts of the image, providing precise control over the tonal range.

### Split Toning
Allows you to change the colors of the tones in the exposed (highlights) and unexposed (shadows) parts of the image separately.

### Color Balance
Adjusts the colors in the shadows, midtones, and highlights of the image, providing detailed color correction beyond just exposure adjustments.

### Special Transforms
Offers more "artistic" changes to the scene's brightness and light levels, allowing for creative and unconventional effects.

## Levels:

### Bypass Levels
Effectively disables the changes made in that layer.

### Black Level In
Changes where the black levels start.

### White Level In
Changes where the white levels start.

### Black Level Out
Changes where the black levels end.

### White Level Out
Changes where the white levels end.

## Adjustments:

### Bypass Adjustments
Disables the changes made in that layer.

### Contrast
Changes the entire image's contrast.

### Exposure
Changes the entire image exposure. Exposure is how much light the lens is absorbing, with higher values making the image brighter and lower values making the image darker.

### Gamma
Changes the brightness of the image.

### Filmic Gamma
Changes the brightness of the dark points of the image.

### Saturation
Changes how much the colors are saturated in the image.

### Vibrance
Changes how vibrant and colorful the colors are in the image.

## Lift, Gamma and Gain:

### Bypass Lift Gamma Gain
Disables the changes made in that layer.

### Lift Gamma Gain Mode
Changes the way the calculations for Lift, Gamma, and Gain work, with 2 standards available: 
* **American Society of Cinematographers (ACES)**
* **DaVinci Resolve**

### Lift
Changes the black levels of the image. If set to non-grey values, it will also change the color.

### Gamma
Changes the midtones of the image. If set to non-grey values, it will change the overall temperature of the image.

### Gain
Changes the white levels of the image. If set to non-grey values, it will change the color of the bright parts of the image.

## Calibration:

### Bypass Calibration
Disables the changes made in that layer.

### Color Temperature
Changes the white balance/temperature of the entire image.

### Lab A Offset
Changes the magenta/green balance of the image colors.

### Lab B Offset
Changes the orange/blue balance of the image colors.

### R G B Primary Mode
Changes how the color changing behavior works, with 3 methods available:
* **ReGrade Legacy:** Mimics the old ReGrade shader version.
* **Barycentric:** Uses a method based on barycentric coordinates to adjust the color balance, providing unique and precise control over color blending.
* **Hue Based:** Adjusts colors based on their hue, allowing for intuitive and natural color changes
* **R G B Primary Hue:** Changes the hue offset of each color channel (red, green, and blue).
* **R G B Primary Saturation:** Changes the hue saturation value of each color channel (red, green, and blue).

## Color Remapping:

Color remapping allows the user to change the color values of each of the colors in the image, giving more control over the overall color scheme.

The parameters dictate changes to each of the colors (red, orange, yellow, green, aqua, blue, and magenta), separating it by Hue (first value), Saturation (second value), and Color Value (third value).

## Tone Curve:

### Shadows
Changes the image's shadow brightness.

### Darks
Changes the image's dark points brightness.

### Lights
Changes the image's bright points brightness.

### Highlights
Changes the image's highlight points brightness.

### Dark Wash Range
Changes how much the dark points wash/bleach the colors.

### Dark Wash Intensity
Changes how intense the bleaching of the colors is.

## Split Toning:

### Split Mode
Changes which parts of the image's curve will be adjusted, allowing you to pick between shadows/highlights and grey/saturated colors.

### Tint A
Changes the tint/grey value of the first parameter.

### Tint B
Changes the tint/grey value of the second parameter.

### Balance
Changes which side will be more intense/prevalent. A lower value prioritizes the first value, while a higher value prioritizes the second value.

### Blend Mode
Changes how these adjustments are mixed into the image, with options being "Soft Light" and "Overlay."

## Color Balance:

Color balance changes the color brightness and saturation of the image's lighting. They are split into Dark, Highlights, and Midtones.

## Special Transforms:

### Bleach Bypass (Gamma Corrected)
Controls the bleaching effect while taking gamma into consideration.

### Gamma on Luma - Chroma
Controls the gamma level on the colors and luminosity.

## Vignette and Utility:

### Mechanical Vignette: Radius
Changes the vignette radius on the image.

### Mechanical Vignette: Blurriness
Changes how out-of-focus the outer part of the vignette is on the image.

### Mechanical Vignette: Shape
Changes the shape of the vignette, with 0 being circular and higher values creating more anamorphic-looking shapes.

### Sensor Vignette: Scale
Changes how much of the vignette is visible on the image.

### Vignette Blending Mode
Changes how the vignette will be blended on the image. 
* **HDR simulation:** Focuses on the brightness and color levels, blending with those to preserve tones. 
* **Standard:** Places the vignette over the image.