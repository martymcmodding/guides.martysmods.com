---
title: ReLight
sidebar_title: "ReLight"
description: "A path-traced point light shader that allows you to place a point of light arbitrarily within the screenspace."
image: "https://www.martysmods.com/media/ReLight.webp"
slug: /shaders/immerseultimate/relight
sidebar_position: 4
hide_title: True
---

![ReLightHeader](https://assets.martysmods.com/headers/ReLightHeader.webp)

iMMERSE Ultimate: ReLight is a point-lighting solution for ReShade. Similar to studio lights in photography, ReLight allows you to change the lighting and adjust for more granular changes in the mood and details of the scenes. While you can use ReLight for any sort of scene, use-cases prove that close-ups or photos of humanoid models are the best cases for using ReLight. However, you're allowed to see as you fit.

:::warning
Launchpad is REQUIRED to be at the top of the shader load order in order for ReLight to function properly.
![shaderloadorder](https://assets.martysmods.com/shaders/relight/relightloadorder.webp)
:::

---

## Preprocessor Definitions

### **AMOUNT_OF_LIGHTS**
Controls the number of available light sources (2-4). Default: 2 lights

## Core Parameters:

### **Ambient Intensity**
Controls how much original scene lighting is preserved.
  - `1.0`: Keeps all ambient light from the scene
  - `0.0`: Removes all ambient light from the scene

### **Shadow Tracing**
Controls shadow casting behavior
  - **Off**: No shadows cast by ReLight sources
  - **Visibility Test**: Basic shadow casting with performance optimization
  - **Recursive Path Tracing**: Advanced shadow casting with realistic light bounces

### **Shadow Trace Quality**
Defines shadow sharpness and quality
  - **Low**: Basic shadow quality, fastest performance
  - **Medium**: Balanced quality and performance
  - **High**: Sharp shadows with moderate performance impact
  - **Ultra**: Very sharp shadows with higher performance cost
  - **Maximum**: Highest quality shadows, maximum performance impact

### **Object Thickness**
Controls how thick objects appear for shadow calculations
  - Higher values create darker, more prominent shadows
  - Lower values create lighter, less prominent shadows

## Light Sources:

### **Active**
Enables/disables the light source

### **Type**
Light source type selection
  - **Sphere**: Point light with defined position in 3D space
  - **Infinite**: Directional light from a specific angle

### **Temp / Tint**
Color temperature and tint control for the light that adjusts the color characteristics of the emitted light

### **Intensity**
Controls brightness and light strength where higher values will result in brighter or more intense lighting

### **Shadow Penumbra**
Controls shadow softness and edge blurring
  - Higher values create softer, more diffused shadows
  - Lower values create sharper, more defined shadows

### Light Positioning

**Sphere Light (Point Light)**
- **Position X Y Z**: 3D coordinates for light placement
  - X: Horizontal position (left/right)
  - Y: Vertical position (up/down)
  - Z: Depth position (front/back)

**Infinite Light (Directional)**
- **Azimuth**: Horizontal angle of light direction (0.0 to 1.0)
- **Elevation**: Vertical angle of light direction (0.0 to 1.0)

## Sub-Surface Scattering (SSS):

### **Enable Sub-Surface Scattering**
Toggles the SSS effect on/off

### **Subsurface Scattering Quality** 
Controls the quality of the SSS simulation
  - **Very Low**: Basic simulation, fastest performance
  - **Low**: Improved quality with minimal performance impact
  - **Medium**: Balanced quality and performance
  - **High**: Best quality with higher performance cost

### **SSS Translucency Radius** 
Controls how deep light penetrates into surfaces
  - Higher values create brighter, more colorful subsurface lighting
  - Lower values create subtle, less pronounced effects

### **SSS Saturation**
Controls color intensity in subsurface areas
  - Higher values create more vibrant subsurface colors
  - Lower values create more muted, natural effects

### **SSS Diffusion Radius**
Controls how far subsurface lighting spreads
  - Higher values create wider, more diffused subsurface effects
  - Lower values create more localized, focused effects

### **SSS Skin Hue**
Defines the target color for skin detection thats used to identify areas where SSS should be applied

### **SSS Skin Hue Tolerance**
Controls how strict the skin color matching is
  - Higher values require closer color matches
  - Lower values allow more variation in detected skin tones

## Debug

![Debug menu preview](https://assets.martysmods.com/shaders/relight/relight-debug-menu.webp)

### Debug Outputs
Various visualization modes to help understand ReLight's effects:
- **None**: Standard rendering without debug information
- **Validation Layer (all)**: Shows all debug information simultaneously
- **Lighting**: Displays lighting calculations and light distribution
- **SSS Skin Mask**: Shows which areas are detected as skin for SSS
- **SSS Translucency**: Visualizes subsurface scattering effects

### Light Overlay
Controls when and how light source indicators appear on screen:
- **Disabled**: No light indicators shown
- **Show while GUI is open**: Indicators only visible when ReShade menu is open
- **Show while GUI is open and on screenshots**: Indicators visible in menu and screenshots
- **Show always**: Indicators always visible

### Light Overlay Opacity
Controls the transparency of light source indicators:
- `1.0`: Fully opaque indicators
- `0.1`: Very transparent indicators