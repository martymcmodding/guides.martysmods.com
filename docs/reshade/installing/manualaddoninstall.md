---
title: "Manually Installing Addons"
sidebar_label: "Manually Installing Addons"
description: "Manual installation of add-ons not available through the ReShade Setup Tool."
slug: /reshade/installing/reshademanualaddoninstall
sidebar_position: 5
hide_title: true
---

# Manually Installing Add-ons

Add-ons are DLLs that use ReShade's Add-on API to extend ReShade or the game (e.g. history lists, [color grading toolsets](/shaders/immerseultimate/regradeplus)). Not all add-ons are offered in the ReShade Setup Tool and must be installed manually. This guide requires the **Add-on Support** build of ReShade already installed and working, if you need help setting that up, see [ReShade Setup Tool](/reshade/installing/setuptool). Add-on files use the extensions `.addon.32` or `.addon.64` and must sit in the correct folder with no subfolder, or ReShade will not load them.

---

## Install for DirectX and OpenGL

1. Locate the ReShade binary folder. This is usually the same folder as the game executable. Exceptions include some FiveM and Source engine setups, where the binary can live in an external folder. To find it, open the game, open ReShade's **Settings** tab, and click **Open base folder in explorer**.
   ![ReShadeSettingsBaseFolderButtonHighlight](https://assets.martysmods.com/reshade/installing/addoninstall/ReShadeSettingsBaseFolderButtonHighlight.webp)
2. Place add-on files (`.addon.32` or `.addon.64`) directly in that folder. Do not put them inside a subfolder or they will not load.
3. Restart or start the game.

---

## Install for Vulkan

Vulkan loads add-ons from the game executable folder, not the ReShade binary folder.

1. Locate the game's executable folder (often the game's root install folder; Unreal Engine games sometimes use a different layout). See [finding your game executable](/additionalguides/findexecutable) if needed.
2. Place add-on files (`.addon.32` or `.addon.64`) directly in that folder. Do not put them inside a subfolder or they will not load.
3. Restart or start the game.

---

## Add-on Search Path

Newly installed add-ons may not show up if ReShade's add-on search path was changed or does not point to the folder where the add-ons were placed. Open the **Add-ons** tab in the ReShade overlay and set **Add-on search path** at the top to the correct folder. The default is `.\`, or the base location of the ReShade binary.

![ReShadeAddonsSearchPathHighlight](https://assets.martysmods.com/reshade/installing/addoninstall/ReShadeAddonsSearchPathHighlight.webp)

| Setting               | Path |
| --------------------- | ---- |
| Default (base folder) | `.\` |