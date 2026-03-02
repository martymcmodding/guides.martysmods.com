---
title: Parallax Depth of Field
sidebar_title: "Parallax Depth of Field (Addon)"
description: "Parallax-based depth of field that calculates blur through camera rotation and positioning."
slug: /shaders/immerseultimate/paralaxdof
sidebar_position: 5
hide_title: True
---

# Parallax Depth of Field

iMMERSE Ultimate: Parallax Depth of Field produces depth-of-field blur by computing parallax information through camera rotation and positional shifts across multiple frames. This method yields physically accurate focal plane separation and bokeh characteristics.

:::warning
Parallax DoF requires the IGCS Camera Tool to function. The IGCS Camera Tool must be purchased through [Otis Inf's Patreon](https://www.patreon.com/cw/Otis_Inf) and activated for the Parallax DoF GUI to appear in ReShade.

Configure all required shaders before beginning a render, as ReShade will reload if new shaders are enabled during the rendering process.
:::

---

## Activate the GUI

When IGCS's Camera Mode is enabled along with the Parallax DoF shader, the GUI controls will open in a window detached from the main ReShade interface.

![ParllaxDoFGUI](https://assets.martysmods.com/shaders/parallaxdof/ParallaxDoFGUI.webp)

Clicking **Start Session** opens the session control panel and displays a transparently shifted overlay used to calculate the focal plane position.

![ParallaxDoFControls](https://assets.martysmods.com/shaders/parallaxdof/ParallaxDoFControls.webp)

---

## Configuration

### Set a Focal Point
1. Set the blur radius to a high value to improve visibility of the focal point
2. Adjust the focal point position until the subject is as sharp as possible. Use Insight's magnifying glass tool if finer adjustment is required
3. Click **Start Render**

### Configure Frame Delay and Interval
The initial render often produces a blurry or unstable result when the frame delay and interval parameters are not properly calibrated for the current scene.

1. Increase the **Frame Delay** by one frame and observe whether the image stabilizes
2. If the image remains unstable, increase the **Interval** by one unit and repeat the frame delay adjustment
3. Continue iterating until a frame delay and interval combination yields a stable output
4. Allow the render to complete once stabilization is achieved

---

