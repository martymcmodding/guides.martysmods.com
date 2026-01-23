---
title: Long Exposure
sidebar_title: "Long Exposure"
description: "Temporal Frame Accumulation for Motion Blur Effects"
slug: /shaders/meteor/longexposure
sidebar_position: 4
hide_title: True
---

# Long Exposure

METEOR: Long Exposure simulates camera long exposure photography by blending multiple frames over time. It creates smooth motion trails, light streaks, and motion blur effects for dynamic scenes.

---

## Parameters

### Capture Mode

Select how the long exposure is triggered:

- **Click to start capture:** Begin accumulation for the set exposure time
- **Capture while holding button:** Continue accumulation while button is held

### Exposure Time

Set the duration (in seconds) for frame accumulation. Higher values create longer trails and more pronounced motion blur.

### Highlight Intensity

Controls how much bright pixels can build up during exposure. Higher values allow stronger motion trails and light streaks.

### Fake Frame Generation

Generates additional frames to fill gaps between real frames for smoother trails.

### Display Progress Animation

Toggles the on-screen progress animation showing current exposure progress.

### Capture

Press to start capturing a long exposure (when in "Click to start capture" mode).

### Reset

Press to clear the current accumulation and reset the exposure.