---
title: RTGI
sidebar_label: "RTGI"
description: "State of the art ray traced global illumination for ReShade."
image: "https://assets.martysmods.com/headers/rtgiheader.webp"
slug: /shaders/immersepro/rtgi
sidebar_position: 5
hide_title: true
keywords: 
 - RTGI
tags:
 - Shader Guide
 - iMMERSE Pro
---

<!------------------------IMPORTS ---------------------------->

import ReactPlayer from 'react-player'

<!----------------------------------------------------------->

![rtgiheader](https://assets.martysmods.com/headers/rtgiheader.webp)

iMMERSE Pro: RTGI is a shader that brings realistic lighting to your games. By using ray tracing, RTGI is able to physically simulate how light interacts with objects in order to enhance details and provide more accurate screen spaced bounce lighting through the means of global illumination and ambient occlusion.

:::warning
Launchpad is REQUIRED to be at the top of the shader load order in order for RTGI to function properly.
![shaderloadorder](https://assets.martysmods.com/shaders/rtgi/rtgiloadorder.webp)
:::

---

## Configuring RTGI

### Setting up Z-Thickness  
The first step in configuring RTGI is setting a parameter called Z-Thickness. By default, this value is set to 0.250; however, depending on the game and the relative thickness of objects within its world, this setting might be too high or too low.

A straightforward way to adjust Z-Thickness is to use RTGI’s "Lighting Only" debug view. This view provides an unfiltered look at the lighting, shadows, and ambient occlusion applied to the game world.

With the "Lighting Only" debug view enabled, adjust the Z-Thickness parameter by dragging it up and down, and carefully observe the changes in shadows and ambient occlusion. Keep in mind that it’s easy to overshoot the optimal value. A setting that is too high can cause over-occlusion or haloing, while one that is too low may leave some areas insufficiently occluded.

<ReactPlayer
  url="https://assets.martysmods.com/shaders/rtgi/RTGIZThickness.webm"
  playing={false}
  muted={true}
  controls={true}
  loop={true}
  width="100%"
  height="100%"
  style={{ width: "100%", margin: "0 auto" }}
/>

### Setting Up Intensities

Once your Z-Thickness is dialed in, the next step is configuring the Ambient Occlusion and Bounce Lighting intensities. For best results, disable the "Lighting Only" debug view and set "Ambient Light" to `1.00`. This ensures you’re seeing how RTGI blends with the full scene.

These intensity values are largely based on personal preference. The goal is to enhance realism by blending them naturally into the scene—without looking too flat or overly exaggerated.

#### Bounce Lighting Intensity

Bounce Lighting Intensity controls the strength of the indirect lighting produced by RTGI. This simulates how light bounces off surfaces in the environment. Aim to balance this setting so the lighting looks natural—avoiding areas that feel blown out or unnaturally dim.

<ReactPlayer  
  url="https://assets.martysmods.com/shaders/rtgi/RTGIbounceintensity.webm"  
  playing={false}  
  muted={true}  
  controls={true}  
  loop={true}  
  width="100%"  
  height="100%"  
  style={{ width: "100%", margin: "0 auto" }}  
/>

#### Ambient Occlusion Intensity

Ambient Occlusion Intensity affects the shadowing between nearby surfaces. If your scene looks too dark or harsh, try lowering this setting. If the scene appears too flat or lacks depth, increase the intensity slightly to bring back subtle contact shadows. The goal is to achieve a good balance between soft shadowing and clear visual detail without overpowering the base lighting.

### Enabling Smoothed and Textured Normals

The Smoothed Normals and Textured Normals options are available through the [iMMERSE Launchpad shader](../immerse/01launchpad.md). These options help correct common visual issues that arise when using ReShade's generic depth buffer, such as overly polygonal or blocky geometry, and instead provide smoother surfaces with added detail and depth.

#### Smoothed Normals

Smoothed Normals reduce the appearance of sharp, low-poly edges by averaging the surface normals across adjacent geometry. This results in softer transitions and more natural lighting behavior.

![Smoothed Normal Comparison](https://assets.martysmods.com/shaders/rtgi/RTGINormalsComparisonSmoothed.webp)

#### Textured Normals

Textured Normals add fine surface detail by using the game’s textures to generate extra geometric relief for RTGI. This gives the illusion of more complex surfaces, improving light interaction and visual depth without having to reverse engineer the game to port its texture's normals into RTGI.

![Textured Normal Comparison](https://assets.martysmods.com/shaders/rtgi/RTGINormalsComparisonTextured.webp)

### Configuring RTGI's Fadeout

The Fadeout setting controls how far RTGI's ambient occlusion and bounce lighting can extend into the scene. It's especially useful for minimizing visual artifacts like fog bleeding or unwanted lighting interactions in the distance. By adjusting the Fadeout setting, you can strike a balance where most of your scene benefits from RTGI lighting, without causing unrealistic lighting to appear through fog or atmospheric effects.

<ReactPlayer  
  url="https://assets.martysmods.com/shaders/rtgi/RTGIFadeout.webm"  
  playing={false}  
  muted={true}  
  controls={true}  
  loop={true}  
  width="100%"  
  height="100%"  
  style={{ width: "100%", margin: "0 auto" }}  
/>

### Setting up DLSS/FSR/TAAU Compatability 
`_MARTYSMODS_TAAU_SCALE` is a global preprocessor definition that needs to be added manually. This preprocessor is best used when depth buffer jitter is applied from game scaling techniques such as DLSS, FSR, or TAAU. To make the preprocessor easier, Marty has defined specific modes for users:

![TAAUSCALEPreprocessor](https://assets.martysmods.com/shaders/rtgi/taauscalepreprocessor.webp)
 
| Scaling Mode Mode | DLSS                     | FSR                     |
| ----------------- | ------------------------ | ----------------------- |
| Native            | `1`                      | `1`                     |
| Quality           | `DLSS_QUALITY`           | `FSR_QUALITY`           |
| Balanced          | `DLSS_BALANCED`          | `FSR_BALANCED`          |
| Performance       | `DLSS_PERFORMANCE`       | `FSR_PERFORMANCE`       |
| Ultra Performance | `DLSS_ULTRA_PERFORMANCE` | `FSR_ULTRA_PERFORMANCE` |

## Debug Arguments:

### Enable Debug View
Provides the user with two debug views.
* Disabled: Standard RTGI output.
* Diffuse RTGI: Shows just the Diffuse Lighting debug.
* Specular RTGI: Shows just the Specular Lighting debug.
* Validation Layer: Debug providing visual output of Depth, Diffuse, Normal Vectors, Optical Flow, and Albedo.

