---
title: "Manually Uninstalling ReShade"
sidebar_label: "Manually Uninstalling ReShade"
description: "Fully remove ReShade by hand when the ReShade Setup Tool can't."
slug: /reshade/uninstalling/manualuninstall
sidebar_position: 2
hide_title: true
---

# Manually Uninstalling ReShade

If the ReShade Setup Tool can't fully uninstall ReShade, you can remove it by hand. This guide walks you through deleting ReShade's files from your game folder without touching anything the game itself needs.

---

## Navigate to your Application Folder

Open your game or application's root folder, where the primary executable is. To find it, follow [our guide on finding your game's executable](/additionalguides/findexecutable).

---

## Delete the Following Files (If Applicable)

:::info
If you can't find `.dll`, `.ini`, or `.log` files, make sure you have [Windows file extensions enabled](/additionalguides/fileextensions).
:::

| File Name       | Description                           |
| --------------- | ------------------------------------- |
| dxgi.dll        | DirectX 10, 11, and 12 ReShade Binary |
| d3d9.dll        | DirectX 9 ReShade Binary              |
| d3d10.dll       | DirectX 10 ReShade Binary             |
| d3d11.dll       | DirectX 11 ReShade Binary             |
| d3d12.dll       | DirectX 12 ReShade Binary             |
| ReShade-Shaders | ReShade's Shader and Texture Folder   |
| ReShade.ini     | ReShade's Configuration File          |
| ReShade.log     | ReShade's Log File                    |
