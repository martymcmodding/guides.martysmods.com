---
title: "Load Order"
sidebar_label: "Load Order"
description: "Understanding ReShade's Load Order"
slug: /reshade/loadorder
sidebar_position: 5
hide_title: true
---

# Load Order

When you download a new ReShade preset or make your own, sometimes things don't always look like you'd expect them to. This is typically due to what is known as a load order.

Like in many mod managers and creative software, ReShade makes use of applying its effects in an ordered manner that is refered to as the shader load order. This system is what allows users to control what effect is rendered first and what comes after it.

---

## Managing Load Order in ReShade

In order to change a shader's position in the load order, you can drag and drop shaders in the shader list within ReShade's Home tab.

---

## Example 1: MXAO & PTVL Fog

Let's take a look at this scene. In order to add some object shadowing, we'll go ahead and enable MXAO, an ambient occlusion shader. But afterwards, there's also the potential to add some atmosphere to the game through the means of fog, so we'll do that through PTVL, a volumetric fog shader.

![BeforeMXAO&PTVL](https://assets.martysmods.com/reshade/loadorder/LoadOrderBeforeMXAOPTVL.webp)

But, we've hit a problem. Here, we can see a strange artifact where it looks like the object shadowing are bleeding through the fog.

![MXAO Bleeding Through Fog](https://assets.martysmods.com/reshade/loadorder/LoadOrderAfterMXAOPTVL.webp)

In order to fix this, let's take a look at the shader load order. We can see PTVL being placed above MXAO -- effectively rendering PTVL first, and then MXAO. Which makes our object shadowing that should be hidden by fog instead awkwardly poke through.

![MXAO Bleeding Through Fog GUI](https://assets.martysmods.com/reshade/loadorder/LoadOrderAfterMXAOPTVLGUI.webp)

We can fix this just by dragging and dropping MXAO so it's earlier in the shader load order than PTVL.

![Correct Load Order GUI](https://assets.martysmods.com/reshade/loadorder/LoadOrderAFterPTVLMXAOGUI.webp)

Now, we can see that MXAO is being applied first, and PTVL is rendered after. Providing us with a proper shader output.

![Correct Load Order](https://assets.martysmods.com/reshade/loadorder/LoadORderAFterPTVLMXAO.webp)

---

## General Rules for Shader Categories

Being in charge of your load order gives you ultimate control over the quality of the final output. ReShade gives you a lot of creative freedom, but it helps to begin with a structure and some basic rules for a strong foundation.

We can split different types of shaders into categories, or tiers.

It's important to note here that each shader that's enabled will introduce an element of data loss, which accumulates leading to reduced image quality. So it's always best to use as few shaders as possible to create the look you want. Meaning that each shader should have a distinct role within the shader load order. So, rather than using three shaders to change the contrast -- it's best to use just one.

## Shader Categories/Tiers

The categories that follow are organised both with what makes sense in terms of ReShade's rendering pipeline, and how traditional photography works.

### Tier 1: Data Processing

These are any shaders that generate or pass information to other effects, such as Launchpad. 

In order to get the cleanest input from the game's screen they should go at the top of your load order, before anything else, as well as before the shaders that utilise them.

### Tier 2: Depth-Based World Effects

These are shaders such as MXAO, RTGI, volumetric fog, and ReLight. 

We can think of the shaders in this category as world based depth effects -- as they influence what the scene will look like, like where shadow and light falls. 

As well as keeping them near the top of your shader list, the order of the effects within this category also matters. For example, like we saw earlier in Example 1, MXAO should sit above volumetric fog, as should shaders like RTGI and ReLight.

### Tier 3: Camera Effects

There are many effects within ReShade that attempt to simular what a camera lens does within the real world. These can be shaders that apply effects like bloom, chromatic aberration, or even a vignette.

Typically, we'd want these to be ordered within the operation that they'd happen within the real world. For instance, chromatic abberation and vignette happen within a camera at the level of the lens, so they should be first. Next, you'd have bloom, which happens at the level of the sensor.

### Tier 4: Color Grading

Likely to be the most time consuming part of ReShade are shaders like qUINT Lightroom, and iMMERSE ReGrade as they allow the user to color grade the scene using functions such as: levels, vibrance, exposure, and contrast.

In order to follow through with the filmography structure, we'll want to introduce these after our camera effects so their changes are applied to shaders such as bloom and the vignette.

### Tier 5: Anti-Aliasing and Sharpening

Shaders that control sharpening and antialiasing should be placed here, as we'll want them after the color grading operations due to the additional edges and color changes that they can create. 

The order within this tier should also be respected, as you'll always want antialiasing before sharpening -- otherwise you're bluring the edges of what you just sharpened.

### Tier 6: Composition Helpers

Our final tier includes all the shaders you can use to help compose your screenshots, like Sceneweaver. 

Placing them at the very bottom of our shader list means the other effects won't interfere with any guides that they layer over the top.