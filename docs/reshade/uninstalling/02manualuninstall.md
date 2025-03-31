---
title: Manually Uninstalling ReShade
sidebar_label: "Manually Uninstalling ReShade"
description: "Sometimes the ReShade Setup Tool isn't able to fully uninstall ReShade for whatever reason. This guide will walk you through the steps to fully uninstall manually ReShade."
slug: /reshade/uninstalling/manualuninstall
sidebar_position: 2
hide_title: true
keywords: 
 - Manually Uninstalling ReShade
tags:
 - ReShade Guide
 - Uninstalling
---

# Manually Uninstalling ReShade

## Use Case
Sometimes the ReShade Setup Tool isn't able to fully uninstall ReShade for whatever reason. This guide will walk you through the steps to fully uninstall manually ReShade.

---

## Navigate to your Application Folder
Navigate your game or application's root folder where the primary executable is. To find this you can follow [our guide on finding your game or application's executable](/additionalguides/03findgameexecutable).

## Delete The Following Files (If Applicable)
:::important
if you are not able to find `.dll`, `.ini`, or `.log` files, make sure that you have [Windows File Extenions enabled](/additionalguides/01enablefileextensions).
:::

| File Name       | Description                               |
| --------------- | ----------------------------------------- |
| dxgi.dll        | DirectX 10, 11, and 12 ReShade Binary     |
| d3d9.dll        | DirectX 9 ReShade Binary                  |
| d3d10.dll       | DirectX 10 ReShade Binary                 |
| d3d11.dll       | DirectX 11 ReShade Binary                 |
| d3d12.dll       | DirectX 12 ReShade Binary                 |
| ReShade-Shaders | ReShade's Shader and Texture Folder       |
| ReShade.ini     | ReShade's Configuration File              |
| ReShade.log     | ReShade's Log File                        |