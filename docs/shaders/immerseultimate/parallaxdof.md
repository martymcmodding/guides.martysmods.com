---
title: Parallax Depth of Field
sidebar_title: "Parallax Depth of Field (Addon)"
description: "Parallax-based depth of field that calculates blur through camera rotation and positioning."
slug: /shaders/immerseultimate/parallaxdof
sidebar_position: 5
hide_title: True
---

<!----------------------- IMPORTS ---------------------------->

import ImageComparisonSlider from '@site/src/components/ImageComparisonSlider';
import ReactPlayer from 'react-player'

<!----------------------------------------------------------->

# Parallax Depth of Field

iMMERSE Ultimate: Parallax Depth of Field produces depth-of-field blur by computing parallax information through camera rotation and positional shifts across multiple frames. This method yields physically accurate focal plane separation and bokeh characteristics.

:::warning
Parallax DoF requires the IGCS Camera Tool to function. The IGCS Camera Tool must be purchased through [Otis Inf's Patreon](https://www.patreon.com/cw/Otis_Inf) and activated for the Parallax DoF GUI to appear in ReShade.

Configure all shaders you want to use in a shot before beginning a render with Parallax DoF, as ReShade will reload if new shaders are enabled during the rendering process.
:::

---

## Activating the GUI

When IGCS's Camera Mode is enabled along with the Parallax DoF shader, the GUI controls will open in a window detached from the main ReShade interface.

![ParllaxDoFGUI](https://assets.martysmods.com/shaders/parallaxdof/ParallaxDoFGUI2.webp)

Clicking **Start Session** opens the session control panel and displays a transparently shifted overlay used to calculate the focal plane position.

![ParallaxDoFControls](https://assets.martysmods.com/shaders/parallaxdof/ParallaxDoFControls2.webp)

---

## Setting a Focal Point

Since Parallax DoF differs in its technique from the standard depth-based blur, each shot needs to have its focal point configured. We'll want to make sure that the game world is paused through IGCS, and we can start to configure the focal point by adjusting the **Blur Radius** to a large enough degree to see a substantial offset in the background.

<ReactPlayer
  url="https://assets.martysmods.com/shaders/parallaxdof/ParallaxDoFBlurRadius.webm"
  playing={false}
  muted={true}
  controls={true}
  loop={true}
  width="100%"
  height="100%"
  style={{ width: "100%", margin: "10px auto 0px auto",}}
/>

Then, by using our **Rangefinder Focus Delta**, we can tune in our focal point while making sure to check that the target that we want to be completely in focus is as clear as it can be (you can use iMMERSE Pro: Insight's magnifying glass to do so).

<ReactPlayer
  url="https://assets.martysmods.com/shaders/parallaxdof/ParallaxDoFRangefinderFocusDelta.webm"
  playing={false}
  muted={true}
  controls={true}
  loop={true}
  width="100%"
  height="100%"
  style={{ width: "100%", margin: "10px auto 0px auto",}}
/>

---

## Accumulation Interval & Delay

The addon needs to synchronize camera positions and the corresponding rendered frames, as the game plans several frames ahead of what is currently displayed. This delay between when the camera position is set and when a GPU frame is actually being rendered from this position needs to be compensated for to properly blend images.

If this is mismatched, assumed camera positions per frame will not line up with the game's actual state. This results in the frames not properly stacking and everything being blurry. It is highly recommended to disable V-Sync as this makes the synchronization extremely irregular.

The process to find the correct value can be summarized as such:

- Start with Accumulation Delay and Interval at 1 frame, then click "RENDER". If the image is completely blurry irrespective of what you focused on, abort. Then bump the Accumulation Delay by one and repeat until you find a stable or mostly stable image. There will only be ONE value that is correct.

- If the game properly renders, you are all set.

- Should the render be imperfect with some ghost images, it means that the game's rendering is not always ahead by a constant delay. This can be compensated for by not firing a new camera position every single frame. For that, increase the Accumulation Interval by 1 frame. This will now move to a new camera position every second frame, giving the rendering process one frame of sync error tolerance. Now try again to find an Accumulation Delay that produces a clean image. If that still yields no perfect results, keep increasing the Interval by 1 frame and then search for a good delay value. Eventually this process will yield a stable combination, it just depends on the game.

<ReactPlayer
  url="https://assets.martysmods.com/shaders/parallaxdof/ParallaxDoFAccumulationControls.webm"
  playing={false}
  muted={true}
  controls={true}
  loop={true}
  width="100%"
  height="100%"
  style={{ width: "100%", margin: "10px auto 0px auto",}}
/>

- Note that for an Interval of 1 frame, there is only one Delay value that is in sync. For an Interval of 2 frames, there are 2 Delays that are in sync and so on. So if for Interval of 1 frame a Delay of 4 frames worked, then for an Interval of 3 frames, Delay frames 4, 5 and 6 will work with Delay set to 4 frames, being blended as early, and Delay set to 6 frames, meaning being blended as late as possible.

---

## Lens Effects

### Chromatic Aberration

Chromatic aberration occurs when a lens focuses different wavelengths of light at different points, producing color fringing and dispersion. The addon includes a physically based simulation that models real lens designs.

Select a **Lens System** to define the type of aberration and blur character, then use the strength control to set the intensity. Each system corresponds to a different lens element configuration and level of correction:

- **Chromat (Single)** - Single-element behavior. Strongest color fringing and dispersion; most pronounced at high strengths. Use for vintage or deliberately uncorrected looks.

 <ImageComparisonSlider 
  beforeImage="https://assets.martysmods.com/shaders/parallaxdof/ParallaxDoFChromaticAberrationNone.webp" 
  afterImage="https://assets.martysmods.com/shaders/parallaxdof/ParallaxDoFChromaticAberrationChromat.webp"
  beforeLabel="None"
  afterLabel="Chromat"
 />

- **Achromat (Double)** - Two-element achromatic correction. Reduces secondary spectrum; fringing is milder and more controlled than a single element. A practical default for a subtle lens character.

 <ImageComparisonSlider 
  beforeImage="https://assets.martysmods.com/shaders/parallaxdof/ParallaxDoFChromaticAberrationNone.webp" 
  afterImage="https://assets.martysmods.com/shaders/parallaxdof/ParallaxDoFChromaticAberrationAchromat.webp"
  beforeLabel="None"
  afterLabel="Achromat"
 />

- **Apochromat (Triplet)** - Three-element apochromatic correction. Minimal chromatic aberration and color fringing; the most neutral, modern-lens option. Use when you want a hint of lens character without obvious color separation.

 <ImageComparisonSlider 
  beforeImage="https://assets.martysmods.com/shaders/parallaxdof/ParallaxDoFChromaticAberrationNone.webp" 
  afterImage="https://assets.martysmods.com/shaders/parallaxdof/ParallaxDoFChromaticAberrationApochromat.webp"
  beforeLabel="None"
  afterLabel="Apochromat"
 />

Each option also affects out-of-focus blur to match the chosen lens type. Choose the lens system first, then adjust the strength parameter to taste.