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

### Configure Frame Delay and Interval
---

