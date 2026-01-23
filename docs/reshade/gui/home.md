---
title: "Home"
sidebar_label: "Home"
description: "ReShade's Home Tab"
slug: /reshade/gui/home
sidebar_position: 1
hide_title: true
---

# Home

The Home tab is the hub of ReShade’s interface, where you enable, disable, and tweak the shaders you’ve installed.

---

## Preset Selection

At the top of the Home tab is the Preset Selection Bar. Use this to load, save, create, and rename your presets. Presets store your shader configurations in an INI file—for example, the default file is `ReShadePreset.ini`. Click the dropdown to pick a preset, hit the save icon to overwrite it, or click the plus icon to make a new one.

![PresetSelection](https://assets.martysmods.com/reshade/gui/GUIPresetSelector.webp)

## Shader Search and Sorting

Just below the preset bar, the Shader Search field lets you quickly filter your shaders by name. To the right, sorting buttons help you bring all of the active shaders to the top of the Shader List.

![ShaderSearch](https://assets.martysmods.com/reshade/gui/GUIShaderSearch.webp)

## Shader List

The Shader List shows every shader that ReShade detects. An empty square next to a shader means it’s disabled; a checkmark means it’s active. Click the box to toggle a shader on or off.

![ShaderList](https://assets.martysmods.com/reshade/gui/GUIShaderList.webp)

## Global Preprocessor Definitions

Below the shader list is the “Edit Preprocessor Definitions” button. Click it to open a panel where you can adjust global defines and settings that affect how shaders compile and run. You can use this to enable advanced features or resolve compatibility issues.

![GPDButton](https://assets.martysmods.com/reshade/gui/GUIGlobalPreprocessorDefinitions.webp)

![GPDEdit](https://assets.martysmods.com/reshade/gui/GUIGlobalPreprocessorDefinitionsEditPanel.webp)

## Shader Parameters

The Shader Parameters panel appears below the preprocessor definitions. When you enable a shader, its adjustable parameters will show up here. You can adjust these controls to tune each effect in real time and see their changes immediately in your game.

![ShaderParameters](https://assets.martysmods.com/reshade/gui/GUIShaderParameters.webp)

## Reload and Performance Mode

When you add or remove effects, click the Reload button to recompile shaders and apply your changes. Reloading can also fix compile errors and restore shader functionality.

To the right of Reload is the Performance Mode toggle. Turning on Performance Mode skips compiling shaders that are disabled and applies compiler optimizations. This can yield a small performance boost, though some shaders may not work correctly when enabled.

![ReloadButton](https://assets.martysmods.com/reshade/gui/GUIReloadButton.webp)