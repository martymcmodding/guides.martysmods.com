---
title: "Long Exposure"
sidebar_label: "Long Exposure"
description: "Temporal frame accumulation for long-exposure motion blur in ReShade."
slug: /shaders/meteor/longexposure
sidebar_position: 3
hide_title: true
---

# Long Exposure

METEOR: Long Exposure simulates the effect of leaving a camera's shutter open for an extended period. In real photography, a long exposure allows light to accumulate on the sensor over time. Moving objects leave trails, lights streak across the frame, and static elements remain sharp. This shader replicates that by blending frames together over a set duration, producing smooth motion trails, light streaks, and the characteristic smearing of objects in motion.

---

## Parameters

### Capture Mode

Determines how the exposure is triggered.

- **Click to start capture:** Pressing the **Capture** button begins a single timed exposure. Accumulation runs for the duration set by **Exposure Time**, then stops automatically.
- **Capture while holding button:** Accumulation continues only while the **Capture** button is held down. Release it to stop.

### Exposure Time

Sets the duration of the exposure in seconds. Longer values accumulate more frames, producing longer motion trails and more pronounced light streaks. Shorter values capture only brief movement, useful for subtle blur rather than full trail effects.

Range: `0.05` to `50.0` seconds

### Highlight Intensity

Controls how bright pixels are treated during accumulation. The shader applies inverse tonemapping before blending frames, and this control sets the log2 whitepoint for that operation. At low values, highlights clip quickly and bright objects leave shorter, dimmer trails. Higher values raise the ceiling, allowing bright pixels like specular reflections, light sources, and emissive surfaces to continue accumulating strongly across frames, producing vivid, high-intensity streaks.

Range: `0.0` to `12.0`

### Fake Frame Generation

When enabled, the shader synthesizes additional intermediate frames to fill temporal gaps between real rendered frames. This produces smoother, more continuous trails when your frame rate is low. Without it, fast-moving objects may leave broken or stuttered streaks rather than a clean continuous trail.

:::warning
Fake Frame Generation requires **iMMERSE: Launchpad** to be installed and active. The option has no effect without it.
:::

### Display Progress Animation

When enabled, an on-screen indicator shows how far through the current exposure the accumulation has progressed. Useful for knowing when a timed capture is complete without watching the image for changes. Enabled by default.

### Capture

Starts the exposure. In **Click to start capture** mode, pressing this begins accumulation for the set Exposure Time. In **Capture while holding button** mode, accumulation runs while this is held.

### Reset

Clears the current accumulated buffer and resets the exposure. Use this to discard an in-progress or completed capture and start fresh.
