---
title: ReGrade
sidebar_label: "ReGrade"
description: "A powerful real-time color grading suite within ReShade"
image: "https://assets.martysmods.com/headers/regradeheader.webp"
slug: /shaders/immersepro/regrade
sidebar_position: 4
hide_title: true
---

![regradeheader](https://assets.martysmods.com/headers/regradeheader.webp)

iMMERSE Pro: ReGrade is a comprehensive color correction suite designed to match the capabilities of professional color grading software. It eliminates the need to switch between external color correction tools and your game, providing real-time, non-destructive color grading directly within ReShade.

While there are no universally "correct" values for color grading, users familiar with photography, color theory, and related disciplines will achieve the best results. However, even those without prior experience can produce excellent results through real-time visual feedback and instant parameter updates.

---

## Color Operations and Workflow:

ReGrade operates as a modular color grading platform with nine available slots in the "Color Operations" section. These slots function like building blocks, where the first slot represents the bottom layer and the last slot represents the top layer. You can apply any of the following operations in any order to achieve your desired color grading result:

### Levels
Adjusts the black and white points of the image, effectively controlling the contrast and brightness range. This operation allows precise control over the tonal distribution and dynamic range of your image.

### Adjustments
Provides general color and overall image modifications, useful for broad adjustments across the entire image. This includes basic controls for contrast, exposure, gamma, saturation, and vibrance.

### Lift Gamma Gain
Allows you to adjust the "Lift" (shadows), "Gamma" (midtones), and "Gain" (highlights) levels of the image independently. This operation offers detailed control over different brightness ranges, with support for both ACES and DaVinci Resolve calculation methods.

### Calibration
Enables modification of default values for color hues and layers, ensuring accurate color representation. This includes color temperature adjustments, Lab color space offsets, and RGB primary color modifications.

### Color Remapping
Enables direct changes to specific colors within the image, often used for creative color effects and selective color correction. This operation provides control over individual color ranges including red, orange, yellow, green, aqua, blue, and magenta.

### Tone Curves
Adjusts the tones of the exposed (bright) and unexposed (dark) parts of the image, providing precise control over the tonal range. This includes controls for shadows, darks, lights, highlights, and specialized dark wash effects.

### Split Toning
Allows you to change the colors of tones in the exposed (highlights) and unexposed (shadows) parts of the image separately. This operation provides creative control over color temperature in different tonal ranges.

### Color Balance
Adjusts the colors in the shadows, midtones, and highlights of the image independently, providing detailed color correction beyond basic exposure adjustments. This enables precise color grading for different brightness ranges.

### Special Transforms
Offers artistic modifications to the scene's brightness and light levels, allowing for creative and unconventional effects. This includes bleach bypass effects and specialized gamma controls for luminance and chroma.

## Core Operations:

### Levels Control
- **Bypass Levels**: Disables the levels operation for that specific slot.
- **Black Level In**: Controls where the input black levels begin, affecting the darkest areas of the image.
- **White Level In**: Controls where the input white levels begin, affecting the brightest areas of the image.
- **Black Level Out**: Controls where the output black levels end, determining the final black point.
- **White Level Out**: Controls where the output white levels end, determining the final white point.

### Basic Adjustments
- **Bypass Adjustments**: Disables the adjustments operation for that specific slot.
- **Contrast**: Modifies the entire image's contrast, affecting the difference between light and dark areas.
- **Exposure**: Controls the overall image brightness, simulating how much light the virtual lens absorbs.
- **Gamma**: Adjusts the brightness of the image's midtones without affecting the extreme highlights and shadows.
- **Filmic Gamma**: Specifically controls the brightness of dark areas, useful for cinematic looks.
- **Saturation**: Controls the intensity of colors throughout the image.
- **Vibrance**: Selectively increases the saturation of less saturated colors while preserving already vibrant colors.

### Lift Gamma Gain
- **Bypass Lift Gamma Gain**: Disables the lift gamma gain operation for that specific slot.
- **Lift Gamma Gain Mode**: Selects between two calculation standards:
  - **American Society of Cinematographers (ACES)**: Industry-standard color management system
  - **DaVinci Resolve**: Professional color grading software standard
- **Lift**: Controls the black levels of the image. Non-grey values will also affect color temperature.
- **Gamma**: Controls the midtones of the image. Non-grey values will change the overall color temperature.
- **Gain**: Controls the white levels of the image. Non-grey values will affect the color of bright areas.

### Color Calibration
- **Bypass Calibration**: Disables the calibration operation for that specific slot.
- **Color Temperature**: Adjusts the white balance/temperature of the entire image, ranging from 1700K to 40000K.
- **Lab A Offset**: Controls the magenta/green balance of image colors using the Lab color space.
- **Lab B Offset**: Controls the orange/blue balance of image colors using the Lab color space.
- **RGB Primary Mode**: Selects the color adjustment behavior:
  - **ReGrade Legacy**: Mimics the behavior of previous ReGrade versions
  - **Barycentric**: Uses barycentric coordinates for precise color balance control
  - **Hue Based**: Adjusts colors based on their hue for intuitive color modifications
- **RGB Primary Hue**: Controls the hue offset for each color channel (red, green, and blue).
- **RGB Primary Saturation**: Controls the saturation value for each color channel.

## Advanced Color Operations:

### Color Remapping
Color remapping provides control over individual color ranges by adjusting Hue, Saturation, and Value for each of the seven primary colors (red, orange, yellow, green, aqua, blue, and magenta). This enables precise color correction and creative color effects.

### Tone Curve Control
- **Shadows**: Adjusts the brightness of the darkest areas of the image.
- **Darks**: Controls the brightness of dark midtones.
- **Lights**: Adjusts the brightness of light midtones.
- **Highlights**: Controls the brightness of the brightest areas.
- **Dark Wash Range**: Determines how much of the dark areas will be affected by the wash effect.
- **Dark Wash Intensity**: Controls the strength of the dark wash/bleach effect.

### Split Toning
- **Split Mode**: Selects which parts of the image curve will be adjusted:
  - **Shadows/Highlights**: Separates adjustments for dark and bright areas
  - **Greys/Saturated Colors**: Separates adjustments for neutral and colorful areas
- **Tint A**: Controls the tint/grey value for the first parameter.
- **Tint B**: Controls the tint/grey value for the second parameter.
- **Balance**: Determines which side will be more intense, with lower values prioritizing the first parameter.
- **Blend Mode**: Selects how adjustments are mixed into the image:
  - **Soft Light**: Subtle blending that preserves image detail
  - **Overlay**: Stronger blending for more dramatic effects

### Color Balance
Color balance operations modify the color brightness and saturation of the image's lighting, separated into Dark, Midtones, and Highlights. Each range can be adjusted independently for precise color grading control.

### Special Effects
- **Bleach Bypass (Gamma Corrected)**: Controls the bleaching effect while maintaining proper gamma correction.
- **Gamma on Luma | Chroma**: Provides separate gamma control for luminance and chroma components.

## Vignette and Utility:

### Mechanical Vignette
- **Radius**: Controls the size of the vignette effect on the image.
- **Blurriness**: Determines how out-of-focus the outer edges of the vignette appear.
- **Shape**: Controls the vignette shape, with 0 being circular and higher values creating more anamorphic-looking shapes.

### Sensor Vignette
- **Scale**: Controls how much of the sensor vignette effect is visible on the image.

### Vignette Blending
- **Standard**: Places the vignette over the image using traditional blending.
- **HDR Simulation**: Focuses on brightness and color levels, blending with those to preserve tones.
- **HDR Simulation (Protect Tones)**: Enhanced HDR simulation with additional tone protection.