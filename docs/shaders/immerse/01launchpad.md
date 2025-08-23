---
title: Launchpad
sidebar_label: "Launchpad"
description: "Processes depth and motion vectors for shaders like RTGI, MXAO, and ReLight."
image: "https://assets.martysmods.com/headers/launchpadheader.webp"
slug: /shaders/immerse/launchpad
sidebar_position: 1
hide_title: true
---

<!----------------------- IMPORTS ---------------------------->

import ImageComparisonSlider from '@site/src/components/ImageComparisonSlider';
import YTConsentRhT4MFRQ5jo from '@site/src/components/YTConsent';
import ReactPlayer from 'react-player'

<!----------------------------------------------------------->

![LaunchpadHeader](https://assets.martysmods.com/headers/launchpadheader.webp)

iMMERSE: Launchpad is Marty's helper shader designed to import high-quality normals and motion vectors (through Optical Flow) into shaders like MXAO, RTGI, and ReLight.

:::warning
Launchpad is REQUIRED to be at the top of the shader load order in order to function properly.
![LaunchpadLoadOrder](https://assets.martysmods.com/shaders/launchpad/launchpadloadorder3.webp)
:::

---

## Video Breakdown:
<YTConsentRhT4MFRQ5jo />

## Motion Estimation / Optical Flow
Optical Flow computes per-pixel motion vectors between consecutive frames using depth, normal, and color data in order to temporally reproject, accumulate, and denoise/filter shaders like RTGI and MXAO.

### Flow Quality
Controls the quality settings of the generated Optical Flow. Higher quality settings yield more precise motion vectors, at the cost of a slight performance drop.

### Flow Optimizer
Launchpad uses a novel, stochastic gradient descent-based algorithm for calculating optical flow. The optimizer you choose determines how that descent behaves:
- **Sophia**: Common optimizer in AI-based language models. It converges more slowly but delivers higher quality results that are more ideal for complex motion.
- **Newton**: Fast and efficient when flow is smooth and predictable. However, it can fail around fine or irregular details, such as thin geometry.

## Normal Maps
Due to the way ReShade handles normal maps, we can only access the normals that the game actually sends to the GPU. These "raw" normals are often very polygonal or blocky and can look jarring when used with shaders like RTGI and ReLight.

To address this, Launchpad's normal processing generates Smoothed and Textured Normals to first soften the blocky input normals and then reintroduce high-frequency detail in order to create more accurate lighting relief and a more detailed appearance.

### Smoothed Normals
 <ImageComparisonSlider 
  beforeImage="https://assets.martysmods.com/shaders/launchpad/LaunchpadOriginalNormals3.webp" 
  afterImage="https://assets.martysmods.com/shaders/launchpad/LaunchpadSmoothedNormals3.webp"
  beforeLabel="Original"
  afterLabel="Smoothed"
 />

### Textured Normals
 <ImageComparisonSlider 
  beforeImage="https://assets.martysmods.com/shaders/launchpad/LaunchpadSmoothedNormals3.webp"
  afterImage="https://assets.martysmods.com/shaders/launchpad/LaunchpadTexturedNormals3.webp"
  beforeLabel="Smoothed"
  afterLabel="Textured"
 />

### Textured Normals Sample Radius
The Textured Normals Sample Radius setting controls how far around each pixel Launchpad samples to capture high-frequency detail from your game's textures. Because texture quality and art style vary between titles, this radius isn't fixed in the shader and requires the user to configure. Lower values will preserve sharp detail, while higher values can smooth noise but soften fine features.

<ReactPlayer
  url="https://assets.martysmods.com/shaders/launchpad/LaunchpadTexturedNormalsRadius.webm"
  playing={false}
  muted={true}
  controls={true}
  loop={true}
  width="100%"
  height="100%"
  style={{ width: "100%", margin: "0 auto" }}
/>

### Textured Normals Intensity
The Textured Normals Intensity setting controls how strongly the sampled texture details are applied to the smoothed normals. Lower values give a subtle bump effect, while higher values emphasize fine surface detail.

<ReactPlayer
  url="https://assets.martysmods.com/shaders/launchpad/LaunchpadTexturedNormalsIntensitiy%20-%20CUT%20ENCODED.webm"
  playing={false}
  muted={true}
  controls={true}
  loop={true}
  width="100%"
  height="100%"
  style={{ width: "100%", margin: "0 auto" }}
/>

### Textured Normals Quality
Controls the detail level of textured normals from 1 (low) to 3 (high). Level 3 delivers the best visuals but may impact performance, so lower it if you need extra speed.

## Debugging:

### LAUNCHPAD_DEBUG_OUTPUT
`LAUNCHPAD_DEBUG_OUTPUT` is a preprocessor definition for Launchpad that provides you with 5 different debug views to see what Launchpad is providing to other shaders. When set to `1`, you will be given a new option in your settings called "Debug Output Modes".

![LaunchpadDebugPreprocessor](https://assets.martysmods.com/shaders/launchpad/launchpaddebugpreprocessor.webp)

### Debug Output Modes
Provides you with five different visual outputs in order to show you what information Launchpad is passing to other shaders.
- **All**: Displays a 2x2 grid showing normals, optical flow, depth, and the original image.
- **Optical Flow**: Visualizes the motion data captured by Launchpad for use by other shaders.
- **Optical Flow Vectors**: Shows the directional flow of motion in greater detail.
- **Normals**: Displays the enhanced normals provided by Launchpad.
- **Depth**: Shows the depth map calculated by Launchpad.