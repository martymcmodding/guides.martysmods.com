---
title: ReLight
sidebar_title: "ReLight"
description: "A path-traced point light shader that allows you to place a point of light arbitrarily within the screenspace."
image: "https://www.martysmods.com/media/ReLight.webp"
slug: /shaders/immerseultimate/relight
sidebar_position: 4
hide_title: True
---

![ReGradePlusHeader](./images/ReLightHeader.webp)

ReLight is a point-lighting solution for ReShade. Similar to studio lights in photography, ReLight allows you to change the lighting, and adjust for more granular changes in the mood and details of the scenes. While you can use ReLight for any sort of scene, use-cases prove that close-ups or photos of humanoid models are the best cases for using ReLight. However, you're allowed to see as you fit.

:::warning
Launchpad is REQUIRED to be at the top of the shader load order in order for ReLight to function properly.
![shaderloadorder](./images/relightloadorder.webp)
:::

---

## ReLight's Debug

In order to better visualize what ReLight is providing to the scene, it is best to use ReLight's debug functions. You can find these debug functions at the bottom of the shader arguments.

![Debug menu preview](./images/relight-debug-menu.png)

* **Debug Outputs:** Shows the different debug modes that ReLight provides. These are: "None," "Validation Layer (all)," "Lighting," "SSS Skin Mask," and " SSS Translucency." Each of which is self explanitory.

* **Light Overlay:** Controls when the ReLight spheres appear on screen. The options to the user are: "Disabled," "Show while GUI is open," "Show while GUI is open and on screenshots," and "Show always." Each of which is self explanitory.

* **Light Overlay Opacity:** Controls the opacity of the ReLight spheres on screen. The value can be controlled from `0.100` to `1.000`. `1.00` being as opaque as possible, while `0.100` being as transparent/translucent as possible.

![Debug output preview](./images/relight-debug.png)

## General Shader Arguments

Similar to RTGI, in the "Global" section of ReLight, you can tweak how much light from the original scene is kept and the overall parameters for the lighting and shadows.

The options for you to configure are:

* **Ambient Intensity:** How much of the original scene lighting is kept. `1` being all of the ambient light from the scene, `0` being no ambient light from the scene.

![Ambient Light Argument 1-0](./images/ambient-light-slider.png)

* **Shadow Tracing:** This argument will control if and how the lights placed in ReLight will end up casting shadows. The options to choose from are "Off," "Visability Test," and "Recursive Path Tracing."

![Ambient Light Argument 1-0](./images/relight-shadow-tracing-type.png)

* **Shadow Trace Quality:** Shadow Trace Quality will define the quality of the shadows that are being traced. The higher the quality, the more samples per ray are being accounted for, and therefore the sharper the shadows end up being.

![Shadow Trace Quality Low - Maximum](./images/relight-shadow-quality.png)

* **Object Thickness:** Will define how thick or thin the objects are within the scene. Thicker objects will cast darker and more prominent shadows, while thinner ones will often cast lighter and less prominent shadows.

![Z-Thickness 0-2](./images/relight-z-thickness.png)

## Light Sources and Parameters

Each light source will have its category identified as "Light #." The number of light sources can be changed by going to the bottom of the shader's parameter list and selecting the `AMOUNT_OF_LIGHTS` preprocessor definition. By default, it comes with 2 lights and at most can go up to 4.

* **Active:** If the light source is active or not.

* **Type:** This will control what type of light that you are using for the specific light source you're configuring. You can choose between Point or Infinite.

* **Temp / Tint:** This argument allows the user to set the tint and tint control of the particular light source.

* **Intensity:** How bright and large the light source is within the screen space.

* **Shadow Penumbra:** Penumbra is the effect of the shadow when its leaking outside from being partially hit by light. Changing the argument for "Shadow Penumbra" will allow you to adjust how soft the shading cast from your ReLight probes will be in the final image.

* **Infinite Light: Azimuth/Elevation:** This will end up controling how the Infinite Light mode will end up casting light into the scene based on Azimuth and Elevation

* **Point Light: Position:** This argument will control where the light source is positioned within the screen space. First is horizontal (X), second is vertical (Y), and the third is the depth (Z).

## Humans and Sub-Surface Scattering

Sub-Surface Scattering (SSS) is the term for the light which bounces from inside the skin or from inside translucent surfaces. It is very common with humans and other organic matter, such as plants.

The shader also has a quite good simulation for that effect, despite not knowing what is organic and what isn't.

Below are the parameters related to that:

* **Enable Sub-Surface Scattering:** Enables the SSS function in the shader. Not all scenes require it, so having a toggle is very helpful and saves on performance.

* **Subsurface Scattering Quality:** Changes the quality of the effect. Higher quality will have better light traversal on those areas, however, with a bigger performance hit.

* **SSS Translucency Radius:** Defines how deep or thick the "translucent" surfaces are. With higher values bringing more brigther and colorful light inside those areas.

* **SSS Saturation:** How saturated the colors in those areas are.

* **SSS Diffusion Radius:** How farther the sub-surface lighting will bleed onto the nearby surfaces.

* **SSS Skin Hue:** In the color wheel, defines what color / hue should be used to detect what is a fitting area for the Subsurface Scattering to consider as a skin.

* **SSS Skin Hue Tolerance:** Defines how strict the color has to be to be considered as a skin part. The higher the value, the closer to that absolute color.