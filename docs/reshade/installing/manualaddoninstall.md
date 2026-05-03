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

---

## Troubleshooting

### Game Crashing After Installing Add-ons

If your game starts crashing after installing one or more add-ons, the most likely cause is an incompatible or misbehaving add-on conflicting with the game or with another add-on already loaded by ReShade. This is more common than it might seem, as add-ons hook into the rendering pipeline at a low level and a poorly written or outdated add-on can destabilize the entire process.

The most reliable way to identify the culprit is to remove add-ons one at a time and test the game after each removal until the crash stops occurring. To do this, navigate to the folder where your add-ons are installed and move them out one by one, restarting the game each time. Once the crash no longer occurs, the last add-on you removed is the one causing the problem.

A few additional things worth checking:

- **Outdated add-ons**: Add-ons built against an older version of the ReShade Add-on API may not be compatible with the version of ReShade you have installed. Check whether an updated version of the add-on is available.
- **Conflicting add-ons**: Some add-ons perform similar hooks or modify the same parts of the rendering pipeline. Having two add-ons that do the same thing installed at the same time can cause crashes even if each one works fine on its own.
- **Antivirus or anticheat interference**: Some antivirus software or anticheat systems flag add-on DLLs and forcibly terminate the process. If the game crashes immediately on launch with no clear cause, check whether your antivirus has quarantined any files from the add-on folder.