---
title: "Manually Installing Shaders"
sidebar_label: "Manually Installing Shaders"
description: "Sometimes the shader repository that you want to use isn't avaliable with the ReShade Setup Tool, this guide will walk you through the process of installing shaders manually!"
slug: /reshade/installing/reshademanualshaderinstall
sidebar_position: 4
hide_title: true
keywords: 
 - Manual ReShade Shader Install
 - ReShade Shader Install
tags:
 - ReShade Guide
 - Installing
---

import ReactPlayer from 'react-player'

# Manually Installing Shaders

:::info
This guide assumes that you already have ReShade installed and working in your game.

This guide uses the iMMERSE repository on GitHub as an example, but you can follow the same general steps for any shader repository, regardless of where it’s hosted.

Not all shader repositories are structured or hosted the same way.
:::

:::warning
If the shaders you are attempting to install were not obtained from GitHub (instead downloaded through Patreon, Discord, or via Direct Download), you can skip the GitHub download steps below and instead use the shader files provided to you directly (usually in a ZIP or folder format).
:::

## Downloading the Shader Repository(s)

First, go to the respository of the shaders that you want to download. Then, click the "Code" button near the top-right of the GitHub page.

![Code Button](https://assets.martysmods.com/additionalguides/reshade/githubshaderrepocodebuttonhighlight.webp)

Now, in the dropdown that appears, click "Download ZIP" to download the repository.

![Download Zip Button](https://assets.martysmods.com/additionalguides/reshade/githubdownloadzipbuttonhighlight.webp)

## Installing the Shader Repository(s)

Once your shader ZIP file has finished downloading, open it and extract the contents into your game’s `ReShade-Shaders` directory. If you're prompted by Windows about file conflicts, just choose **“Replace the files in the destination.”**

<ReactPlayer
  url="https://assets.martysmods.com/additionalguides/reshade/candpasteshadersandtexturesfolder.webm"
  playing={true}
  muted={true}
  controls={false}
  loop={true}
  width="100%"
  height="100%"
  style={{ width: "100%", margin: "0 auto" }}
/>

## Setting the Effect and Texture Search Paths

If ReShade isn't detecting your shaders, it’s likely due to incorrect folder paths. Open the **Settings** tab in ReShade and check the following:

| Setting                 | Correct Path                    |
| ----------------------- | ------------------------------- |
| Effect Search Path      | `.\ReShade-Shaders\Shaders\**`  |
| Texture Search Path     | `.\ReShade-Shaders\Textures\**` |

Make sure both paths point to the exact folders you extracted earlier. The `**` wildcard ensures that ReShade looks through all subfolders, so copying these paths exactly will avoid most issues.