---
title: Sceneweaver
sidebar_title: "Sceneweaver"
description: "Advanced Screenshot Composition and Hotsampling Tools"
slug: /shaders/meteor/sceneweaver
sidebar_position: 6
hide_title: True
---

# SceneWeaver

METEOR: SceneWeaver is a suite of composition and framing tools built for game photographers, particularly those who use hotsampling. Hotsampling is the practice of temporarily resizing the game window to a much higher resolution than your monitor to capture a high-resolution screenshot. Tools like SRWE make this possible, but at extreme resolutions the game window spills far beyond your screen edges, making it impossible to see and frame your shot. SceneWeaver solves this by rescaling the viewport to fit your screen during the capture process, adding cinematic letterbox bars for aspect ratio control, and providing a composition canvas with overlay guides.

SceneWeaver is split into three separate techniques, each enabling a distinct part of the workflow:

- **METEOR: SceneWeaver (Hotsampling):** Rescales the viewport to fit your screen. Place near the bottom of your shader stack, but above Canvas.
- **METEOR: SceneWeaver (Letterbox):** Adds cinematic black bars at your chosen aspect ratio. Place anywhere above Canvas.
- **METEOR: SceneWeaver (Canvas):** Replaces the black bars with a toned canvas and adds composition overlays. Place at the very bottom of your shader stack.

The Hotsampling and Canvas techniques are automatically disabled when a screenshot is taken, so the final image captures only the game content and letterbox bars. You can leave them enabled permanently.

---

## Hotsampling

### Your Screen Width

Sets the width of your physical monitor in pixels. When the Hotsampling technique is active, SceneWeaver uses this value to rescale the game's viewport so it fits your screen regardless of the hotsampling resolution, keeping the image visible and frameable at any resolution multiplier.

Range: `480` to `8192` px

---

## Letterbox

### Preset

Selects a predefined aspect ratio for the letterbox bars. Choose a ratio that matches your intended final crop, or set to **Custom** and define your own with the **Custom Ratio** slider.

- **Custom:** Use the Custom Ratio slider to define your own ratio.
- **1:1:** Square format.
- **5:4:** Slightly tall widescreen, common in older monitors and medium format photography.
- **4:3:** Classic television and early photography ratio.
- **3:2:** Standard 35mm film frame ratio, used by most DSLRs.
- **16:10:** Widescreen computer monitor ratio.
- **Golden Ratio:** 1.618:1, based on the mathematical golden ratio.
- **16:9:** Standard HD widescreen, the most common display aspect ratio.
- **1.85:1:** Common theatrical cinema ratio.
- **2:1:** Ultrawide cinema format.
- **2.35:1:** Anamorphic CinemaScope format.

### Custom Ratio

Sets a custom width-to-height aspect ratio when **Preset** is set to **Custom**. Adjust the two values to define the horizontal and vertical proportions independently.

Range: `1` to `20` per axis

---

## Canvas

### Zoom Out

Shrinks the game image within the canvas to create a margin around it. Pulling back from the full-frame view can help you spot tangents, edge crops, and balance problems that are easy to miss when filling the screen.

Range: `0` to `100%`

### Rotation

Rotates the canvas view by 90 degrees in either direction. When hotsampling in portrait orientation, where the game window is taller than it is wide, the image appears sideways on your monitor. This control rotates the canvas preview so you can frame the shot without turning your head.

- **-1:** Rotate 90 degrees counterclockwise.
- **0:** No rotation.
- **1:** Rotate 90 degrees clockwise.

### Canvas Brightness

Sets the brightness of the canvas background outside the letterboxed image. The default of `40%` is a mid-grey, neutral enough that it does not skew your perception of the image's exposure, making judgments easier than against a pure black or white background.

Range: `0` to `100%`

### Grid

Overlays a composition guide on the canvas. Grids do not appear in the final screenshot and are only visible through the Canvas technique.

- **None:** No overlay.
- **Crosshair (2x2):** Simple center crosshair.
- **Rule of Thirds (3x3):** Divides the frame into thirds horizontally and vertically, with intersections at the classical points of interest.
- **Phi Grid:** A proportional grid based on the golden ratio, similar to Rule of Thirds but with narrower divisions.
- **Armature:** A geometric overlay derived from the frame's diagonals and proportional divisions, useful for dynamic compositional alignment.
- **Golden Spiral (Top Left / Top Right / Bottom Left / Bottom Right):** Fibonacci spiral anchored in the chosen corner. Place your subject at the spiral's center point.
- **Golden Spiral Alt variants:** Mirrored versions of the four spiral positions for additional compositional flexibility.

### Grid Opacity

Controls the transparency of the composition grid overlay. Lower values keep the grid subtle; higher values make it more prominent against busy backgrounds.

Range: `0` to `100%`

### Grid Thickness

Sets the line weight of the grid overlay in pixels.

Range: `1` to `4` px
