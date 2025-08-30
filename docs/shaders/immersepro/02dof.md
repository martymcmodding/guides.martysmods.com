---
title: Depth of Field
sidebar_label: "Depth of Field"
description: "Designed to emulate how physical cameras work in the real world."
image: "https://assets.martysmods.com/headers/dofheader.webp"
slug: /shaders/immersepro/depthoffield
sidebar_position: 2
hide_title: true
---

<!----------------------- IMPORTS ---------------------------->

import ImageComparisonSlider from '@site/src/components/ImageComparisonSlider';

<!----------------------------------------------------------->

![dofheader](https://assets.martysmods.com/headers/dofheader.webp)

iMMERSE Pro: Depth of Field is a physically accurate depth of field shader that emulates real-world camera behavior. It provides comprehensive control over focus parameters, aperture settings, and bokeh characteristics, allowing you to create cinematic depth effects that closely match professional photography results.

---

## Focus Configuration:

### Focus Mode
Controls how the shader determines the focal plane:

- **Manual Focus**: Provides complete control over the focus plane depth, ideal for precise control in static scenes or cinematic shots.
- **Autofocus**: Automatically focuses on the closest object within the defined focus area, suitable for dynamic gameplay scenarios.
- **Autofocus (Point and Click with MMB)**: Combines automatic detection with manual point selection using the middle mouse button for quick focus adjustments.

### Focus Helper
Enables the focus debug visualization mode, displaying several on-screen elements to assist with parameter configuration:

- **Dark Square**: Defines the autofocus detection area
- **Green Layer**: Represents the background (out of focus)
- **White Layer**: Shows the focal plane (in focus)
- **Pink Layer**: Indicates the foreground (out of focus)

### Manual Focal Plane Depth
Specifies the distance to the focal plane when using manual focus mode. A value of 0 represents the camera position, while 1 represents infinity. (Only works with "Manual Focus" mode)

### Autofocus Center
Defines the X and Y coordinates of the autofocus detection center. Negative values move the focus area left or up from the screen center, allowing you to focus on subjects that aren't centered in the frame. (Only works with "Autofocus" mode)

### Autofocus Detection Range
Controls the size of the area around the autofocus center that the shader analyzes for focus detection. Larger values provide broader focus detection, while smaller values enable precise targeting of specific subjects. (Only works with "Autofocus" mode)

### Autofocus Adjustment Speed
Determines how quickly the virtual lens responds to focus changes. Higher values provide faster focus transitions, recommended for fast-paced gameplay to minimize visual distractions during action sequences. (Only works with "Autofocus" mode)

## Lens Parameters:

### Focal Length
Controls the virtual camera's focal length, ranging from 0 to 350mm. As with real cameras, higher focal lengths produce shallower depth of field and more pronounced blur effects, while lower values create deeper focus ranges.

 <ImageComparisonSlider 
  beforeImage="https://assets.martysmods.com/shaders/dof/focallength50.webp" 
  afterImage="https://assets.martysmods.com/shaders/dof/focallength200.webp"
  beforeLabel="50"
  afterLabel="200"
 />

### Aperture F-Stops
Sets the virtual camera's aperture size, ranging from f/0.95 to f/8.0. The aperture directly influences both the bokeh shape characteristics and the overall blur radius, with lower f-numbers producing larger aperture openings and more dramatic depth of field effects.

 <ImageComparisonSlider 
  beforeImage="https://assets.martysmods.com/shaders/dof/focallength50.webp" 
  afterImage="https://assets.martysmods.com/shaders/dof/fstop2.webp"
  beforeLabel="2.8"
  afterLabel="2.0"
 />

### Foreground/Background Blur Multiplier
Provides non-physically correct blur multipliers for foreground and background elements. This allows you to selectively enhance or reduce blur in specific areas, useful for masking unwanted foreground elements or emphasizing background blur.

### Aperture Blade Count
Controls the number of blades in the virtual aperture diaphragm, ranging from 3 to 9 blades. Lower blade counts produce polygonal bokeh shapes (e.g., 6 blades create hexagonal bokeh), while higher counts create more circular bokeh patterns.

 <ImageComparisonSlider 
  beforeImage="https://assets.martysmods.com/shaders/dof/blade3.3.webp" 
  afterImage="https://assets.martysmods.com/shaders/dof/blade6.3.webp"
  beforeLabel="3"
  afterLabel="6"
 />

### Aperture Roundness
Adjusts the shape of the aperture opening from polygonal to circular. A value of 0.0 produces sharp polygonal bokeh, while 1.0 creates smooth circular bokeh discs.

### Bokeh Rotation
Controls the rotation angle of polygonal bokeh shapes. This parameter only affects polygon rotation, as scaling is applied after rotation calculations.

## Advanced Bokeh Effects:

### Tangential Bokeh Scale
Scales the bokeh shape tangentially, allowing simulation of optical aberrations like astigmatism and Petzval field curvature effects. Values range from -3.0 to 3.0.

### Sagittal Bokeh Scale
Controls sagittal bokeh scaling, enabling additional optical aberration simulation. This parameter works in conjunction with tangential scaling to create complex bokeh characteristics.

### Anamorphic Bokeh Ratio
Simulates anamorphic lens characteristics by horizontally compressing bokeh shapes. Values range from 1.0 to 3.0, with higher values producing more pronounced anamorphic effects.

### Spherical Aberration
Introduces spherical aberration effects to simulate real-world lens imperfections. This parameter can be configured for single lens or doublet configurations, adding realistic optical character to the bokeh.

## Blur Parameters:

### Bokeh Quality
Controls the number of sample rings used for bokeh rendering, ranging from 3 to 25. Higher values produce smoother, more defined bokeh discs but increase performance cost. The shader may occasionally sample beyond this limit to prevent undersampling artifacts.

 <ImageComparisonSlider 
  beforeImage="https://assets.martysmods.com/shaders/dof/quality3.webp" 
  afterImage="https://assets.martysmods.com/shaders/dof/quality10.webp"
  beforeLabel="3"
  afterLabel="10"
 />

### Bokeh Highlight Intensity
Determines the prominence of bokeh highlight discs. Higher values create more visible and pronounced bokeh effects, while lower values produce subtle background blur.

### Bokeh Highlight Gamma
Controls the gamma correction applied to bokeh highlights, affecting their brightness and contrast characteristics. Values range from 0.0 to 2.0.

### Bokeh Color Intensity
Adjusts the color saturation of bokeh discs. Higher values produce more vibrant but potentially oversaturated bokeh, while lower values maintain natural color reproduction.

### Bokeh Smoothness
Controls the smoothing applied to out-of-focus areas to soften bokeh discs and close sample gaps. This parameter is relative to bokeh disc size and provides selective blur enhancement.

### Undersampling Protection
Enables protection against undersampling artifacts that can occur in complex scenes. This feature helps maintain bokeh quality but may impact performance.

### Bokeh Sprites
Enables procedural bokeh sprite generation to replace traditional bokeh discs. This feature can improve performance while maintaining visual quality.

### Sprite Bokeh Percentage
Controls the balance between traditional bokeh discs and procedural sprites. Higher values produce more sprites at the cost of performance, while lower values maintain traditional bokeh rendering.

## Preprocessor Definitions:

### DOF_FULL_RESOLUTION
Enables full-screen resolution rendering for the depth of field effect. When disabled (default), the shader renders at half resolution for improved performance.

### DOF_ADVANCED_BOKEH_EFFECTS
Enables advanced bokeh features including tangential/sagittal scaling, anamorphic effects, and spherical aberration simulation. These features provide enhanced creative control at a performance cost.

## Debug:

### Bokeh Shape Helper
Provides visualization tools for fine-tuning bokeh appearance:

- **OFF**: Standard rendering mode
- **Point Grid w/ Scene**: Displays a reference grid overlaid on the scene for bokeh shape analysis
- **Point Grid**: Shows only the reference grid for isolated bokeh shape evaluation