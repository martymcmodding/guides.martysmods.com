---
title: "Load Order"
sidebar_label: "Load Order"
description: "Understanding ReShade's Load Order"
slug: /reshade/loadorder
sidebar_position: 5
hide_title: true
---

# Load Order

When you download a new ReShade preset or make your own, sometimes things don't look like you'd expect. That might be because of your shader load order.

Like in many mod managers and creative software, ReShade uses something known as a load order. This is effectively a system to control what effect is rendered first and what comes after it. The order in which shaders are processed can dramatically impact the final visual output, making load order one of the most important aspects of creating a polished ReShade preset.

---

## What is Load Order?

If you're familiar with modding games, or even using layers in something like Photoshop, then you already know about load orders. ReShade deals with shaders in a similar way.

When you first look at the list of shaders in the ReShade menu, they're arranged more or less alphabetically. If you load someone else's preset, you'll notice the position of the shaders changes and the ones enabled move to the top.

Each shader's position in relation to the others being used will influence what your preset looks like. Shaders load sequentially, which means any shader that loads later in the list works like adding a transformation layer on top of the ones that loaded earlier, building effects one on top of another. Sometimes, if your shaders are in the wrong order, you can get unintended side effects.

## Managing Load Order in ReShade

To change a shader's position in the load order, you can drag and drop shaders in the shader list within ReShade's Home tab. Simply click and hold on a shader name, then drag it to the desired position. The shader will be processed in its new position the next time ReShade renders a frame.

![ReShade Shader Reordering](https://assets.martysmods.com/reshade/loadorder/ShaderReordering.webp)

---

## Example 1: MXAO & PTVL Fog

Take a look at this scene. To add object shadowing and make everything look less flat, you might enable MXAO, an ambient occlusion shader. You might also want to add volumetric fog to improve the overall atmosphere.

![BeforeMXAO&PTVL](https://assets.martysmods.com/reshade/loadorder/LoadOrderBeforeMXAOPTVL.webp)

But you've hit a problem. You can see a strange effect where it looks like the shadows are bleeding through the fog. It looks wrong somehow.

![MXAO Bleeding Through Fog](https://assets.martysmods.com/reshade/loadorder/LoadOrderAfterMXAOPTVL.webp)

There's a simple reason though, and it's easy to fix.

Looking at your shader list, you can see PTVL, the volumetric fog shader, placed above MXAO. This means the fog is applied first, and MXAO has been, in effect, layered over the top of it afterwards. The shadows that should be hidden by fog instead look like they're poking awkwardly through it.

![MXAO Bleeding Through Fog GUI](https://assets.martysmods.com/reshade/loadorder/LoadOrderAfterMXAOPTVLGUI.webp)

You can fix this just by dragging and dropping MXAO so it's earlier in the list than volumetric fog. In other words, by changing their load order.

![Correct Load Order GUI](https://assets.martysmods.com/reshade/loadorder/LoadOrderAFterPTVLMXAOGUI.webp)

See the difference that made? Now MXAO is being applied first, the fog comes second, layering on top of it, and the shadows that should be shrouded by fog are correctly pushed back.

![Correct Load Order](https://assets.martysmods.com/reshade/loadorder/LoadORderAFterPTVLMXAO.webp)

---

## General Rules for Shader Categories

Being in charge of your load order gives you ultimate control over the quality of the final output. ReShade gives you a lot of creative freedom, but it helps to begin with a structure and some basic rules for a strong foundation.

We can split different types of shaders into categories, or tiers, starting with those that generally fit best at the top of your shader list, gradually moving down to the bottom. There are examples where this can depend on context, and we've tried to cover that where applicable.

It's important to note here that each shader you enable introduces an element of data loss, which accumulates leading to reduced image quality. So try using as few shaders as possible to create the look you want. Each shader should have a distinct role, so rather than using three shaders to change contrast for example, just choose one. Even better if you can use a single shader that controls several elements of post-processing at once, like ReGrade. This also makes it easier to troubleshoot with fewer shaders. If something looks bad, you know how to fix it.

The categories that follow are organised both with what makes sense in terms of ReShade's rendering pipeline, and how traditional photography works.

## Tier 1: Data Processing

These are any shaders that generate or pass information to other effects, like Launchpad or optical flow shaders. Because they need clean input they should go at the top of your load order, before anything else. And they definitely have to go before the shaders that utilise them, which for Launchpad are RTGI, MXAO, and ReLight.

## Tier 2: Depth-Based World Effects

Next come shaders that use the depth buffer, like MXAO, RTGI, volumetric fog, and ReLight. As well as being depth-based effects, we can think of them as world effects, because they influence what the scene looks like to begin with, where light and shadow fall, for example.

As well as keeping them near the top of your shader list, the order of the effects within this category also matters.

For example, like we saw earlier, MXAO should sit above volumetric fog, as should shaders like RTGI and ReLight. And for RTGI, which is split into two separate shaders, the diffuse shader should come before the specular shader so reflections are handled correctly.

## Tier 3: Camera Effects

Like we saw with bloom earlier, there are some effects that simulate what a camera lens would create. In addition to bloom, these might be shaders like chromatic aberration and vignettes.

Depth of field blur is also a lens effect in traditional cameras, so we would expect it to happen here before we do any colour grading. However, shaders don't always behave exactly as you'd see in traditional photography, and sometimes you might notice objects have strange outlines poking through the blur. If that happens, experiment with moving depth of field lower down and see what works best for you.

Last in this section is film grain. As well as adding creative flair, grain can be helpful to mask poor texture detail. In photography, grain happens when light hits the film or sensor, which is why it makes sense to place it above the adjustments we'll make with post-processing like colour grading.

Bloom and depth of field blur happen earlier, as light travels through the lens, so film grain should go after them. And always remember to keep grain below depth of field so the grain isn't blurred away.

## Tier 4: Colour Grading

This is probably the category of shaders people spend the most time working with. Shaders, like LUTs, qUINT Lightroom, and iMMERSE ReGrade, that let you alter colours, levels, vibrance, exposure, and contrast.

Adding them after our camera effects means your colour grading will apply to whatever they introduced, changing the colour and contrast of bloom, and so on.

And then within this category, if you're using multiple grading effects, you can play around with their order to get the look you want.

## Tier 5: Anti-Aliasing and Sharpening

As we saw in our earlier example, it's important to make sure anti-aliasing and sharpening shaders are in the correct order in relation to each other. It's also useful to know where they should go in the larger load order. Placing them after your colour grading helps ensure any changes to the edges created by grading are caught, so consider placing them here.

## Tier 6: Final Image Adjustments

All the changes we've made to our scene with depth, lens, and colour grading effects can sometimes introduce what's called colour banding. This is most noticeable in areas of flat colour where there's a gradient, like the sky, and can be a particular problem if you use a vignette. You can use Debanding shaders to try and blend those hard gradient splits together. So, if there are specific shaders that introduce banding, you can try placing Debanding below them.

If the banding is caused by the game itself, you can place this further up your load order to get a clean base on which to add your own effects.

Film grain can also help hide banding, as well as add creative flair. It's also good at masking poor texture detail. This should always go below Debanding, otherwise the grain will be destroyed.

If you're not using Debanding you have more flexibility, and may want to place film grain before your colour grading, since technically in photography grain happens when light hits the film, before you apply any post-processing. Either way, you will always want to keep film grain below depth of field, so the grain isn't blurred away.

## Tier 7: Composition Helpers

Our final tier includes all the shaders you can use to help compose your screenshots, like Sceneweaver. Placing them at the very bottom of our shader list means the other effects won't interfere with any guides that they layer over the top. These shaders are usually designed to automatically toggle off in a screenshot, but be sure to double check.