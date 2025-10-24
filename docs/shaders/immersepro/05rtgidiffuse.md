---
title: RTGI (Diffuse)
sidebar_label: "RTGI (Diffuse)"
description: "State of the art ray traced global illumination for ReShade."
image: "https://assets.martysmods.com/headers/rtgiheader.webp"
slug: /shaders/immersepro/rtgidiffuse
sidebar_position: 5
hide_title: true
---

<!------------------------IMPORTS ---------------------------->

import ReactPlayer from 'react-player'

<!------------------------IMPORTS ---------------------------->

![rtgiheader](https://assets.martysmods.com/headers/rtgiheader.webp)

iMMERSE Pro: RTGI is a state-of-the-art ray traced global illumination shader that brings realistic lighting to your games. By utilizing ray tracing techniques, RTGI is able to physically simulate how light interacts with objects in the environment, through diffuse global illumination and ambient occlusion.

:::warning
Launchpad is REQUIRED to be at the top of the shader load order for RTGI to function properly.
![shaderloadorder](https://assets.martysmods.com/shaders/rtgi/RTGIDiffuseLoadOrder3.webp)
:::

---

## Configuration:

### Thickness
The first step in configuring RTGI is setting the **Object Thickness** parameter. 

![shaderloadorder](https://assets.martysmods.com/shaders/rtgi/RTGIDiffuseObjectThicknessHighlight.webp)

RTGI can only directly observe surfaces currently facing the camera, so it must estimate how far objects extend on their occluded sides. 

Typically, the default value of `0.250` should get you far enough in most cases, however, the optimal **Object Thickness** value varies significantly between games due to differences in object geometry, world scale, and depth buffer characteristics. Games with thin objects (like foliage) typically require lower values, while games with thick, solid objects may benefit from higher values.

With the "**Diffuse RTGI**" debug view enabled, adjust the **Object Thickness** parameter while carefully observing changes in shadows and ambient occlusion.

Be cautious of overshooting the optimal value:
- **Too High**: Causes over-occlusion, haloing artifacts, and unrealistic shadowing
- **Too Low**: Results in insufficient occlusion, leaving areas without proper depth definition

<ReactPlayer
  url="https://assets.martysmods.com/shaders/rtgi/RTGIDiffuseObjectThickness2.webm"
  playing={false}
  muted={true}
  controls={true}
  loop={true}
  width="100%"
  height="100%"
  style={{ width: "100%", margin: "0 auto" }}
/>

### Intensity
Once your **Object Thickness** is dialed in, the next step is setting the **Ambient Occlusion** and **Bounce Lighting** intensities.

In order to see the light being blended into your scene, it's best to disable the "**Diffuse RTGI**" debug view and set "**Ambient Light**" to `1.00`.

- **Bounce Lighting Intensity**: controls the strength of indirect lighting produced by RTGI, simulating how light bounces off surfaces in the environment.
- **Ambient Occlusion Intensity**: controls the stregth of ambient occlusion produced by RTGI, providing you with shadowing between nearby surfaces.

These intensity values are largely based on personal preference and artistic intent, but a fundamental rule is that no propagated lighting should exceed the brightness of the original light source.

<ReactPlayer  
  url="https://assets.martysmods.com/shaders/rtgi/RTGIDiffuseIntensity2.webm"  
  playing={false}  
  muted={true}  
  controls={true}  
  loop={true}  
  width="100%"  
  height="100%"  
  style={{ width: "100%", margin: "0 auto" }}  
/>

### Smoothed and Textured Normals
The **Smoothed Normals** and **Textured Normals** options, available through the [iMMERSE Launchpad shader](../immerse/01launchpad.md), help correct common visual issues that arise when using ReShade's generic depth buffer. These features address overly polygonal or blocky geometry by providing smoother surfaces with enhanced detail and depth.

#### Smoothed Normals
**Smoothed Normals** reduce the appearance of sharp, low-poly edges by averaging surface normals across adjacent geometry. This results in softer transitions and more natural lighting behavior, particularly beneficial for games with geometric limitations or stylized art directions.

![Smoothed Normal Comparison](https://assets.martysmods.com/shaders/rtgi/RTGINormalsComparisonSmoothed.webp)

#### Textured Normals
**Textured Normals** add fine surface detail by using the game's texture information to generate additional geometric relief for RTGI calculations. This creates the illusion of more complex surfaces, improving light interaction and visual depth without requiring access to the game's original normal maps.

![Textured Normal Comparison](https://assets.martysmods.com/shaders/rtgi/RTGINormalsComparisonTextured.webp)

### Fadeout
The **Fadeout** controls allow you to set the maximum distance that RTGI will cast its ambient occlusion and bounce lighting. This is useful to avoid interference with distant fog or to gain back a small amount of performance.

<ReactPlayer  
  url="https://assets.martysmods.com/shaders/rtgi/RTGIDiffuseFadeout2.webm"  
  playing={false}  
  muted={true}  
  controls={true}  
  loop={true}  
  width="100%"  
  height="100%"  
  style={{ width: "100%", margin: "0 auto" }}  
/>

### DLSS/FSR/TAAU Compatibility
`_MARTYSMODS_TAAU_SCALE` is a global preprocessor definition that must be manually configured to address depth buffer jitter introduced by upscaling technologies. This preprocessor is essential when using DLSS, FSR, or TAAU to ensure proper depth buffer alignment and prevent visual artifacts.

:::important
The beginning underscore in `_MARTYSMODS_TAAU_SCALE` is mandatory. Without it, TAAU scaling compatibility will not function properly.
:::

![TAAUSCALEPreprocessor](https://assets.martysmods.com/shaders/rtgi/taauscalepreprocessor2.webp)

| Scaling Mode      | DLSS                     | FSR                     |
| ----------------- | ------------------------ | ----------------------- |
| AA / Native       | `1.000`                  | `1.000`                 |
| Quality           | `DLSS_QUALITY`           | `FSR_QUALITY`           |
| Balanced          | `DLSS_BALANCED`          | `FSR_BALANCED`          |
| Performance       | `DLSS_PERFORMANCE`       | `FSR_PERFORMANCE`       |
| Ultra Performance | `DLSS_ULTRA_PERFORMANCE` | `FSR_ULTRA_PERFORMANCE` |

### Debug View Modes
RTGI provides several debug visualization modes to assist with parameter tuning and understanding the shader's behavior:

- **Disabled**: Standard RTGI output with all effects applied
   ![Disabled](https://assets.martysmods.com/shaders/rtgi/RTGIDiffuseDebugOff.webp)
- **Diffuse RTGI**: Shows only the diffuse lighting calculations, useful for `Obeject Thickness` adjustments.
   ![DiffuseDebug](https://assets.martysmods.com/shaders/rtgi/RTGIDiffuseDebug.webp)
- **Validation Layer**: Comprehensive debug output showing Depth, Diffuse, Normal Vectors, Optical Flow, and Albedo data
   ![ValidationLayer](https://assets.martysmods.com/shaders/rtgi/RTGIDiffuseValidationLayer.webp)