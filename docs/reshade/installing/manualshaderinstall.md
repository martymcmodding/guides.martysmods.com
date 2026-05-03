---
title: "Manually Installing Shaders"
sidebar_label: "Manually Installing Shaders"
description: "Manual installation of shader repositories and archives not available in the ReShade Setup Tool."
slug: /reshade/installing/reshademanualshaderinstall
sidebar_position: 4
hide_title: true
---

<!----------------------- IMPORTS ---------------------------->

import ImageComparisonSlider from '@site/src/components/ImageComparisonSlider';
import YTConsent from '@site/src/components/YTConsent';
import ReactPlayer from 'react-player'

<!----------------------------------------------------------->

# Manually Installing Shaders

Many shader repositories are not listed in the ReShade Setup Tool and must be installed manually. Download the repository or archive and extract its contents into the game's `ReShade-Shaders` folder. ReShade must already be installed and working. See [ReShade Setup Tool](/reshade/installing/setuptool) if not. Paths in this guide are relative to the game executable's directory (where ReShade is installed).

:::warning
Shaders from Patreon, Discord, or direct download (ZIP or folder) skip the GitHub download steps. Use the provided files and extract or copy them into `ReShade-Shaders` as below.
:::

---

<YTConsent url="https://www.youtube.com/watch?v=vIc020i-6aM&t=84s" />

---

## Downloading the Shader Repository(s)

Most ReShade shader repositories are hosted on GitHub. Open the repository page, click the green **Code** button (top right), then **Download ZIP** in the dropdown.

![GitHubRepoCodeButtonHighlight](https://assets.martysmods.com/reshade/installing/shaderinstall/GitHubRepoCodeButtonHighlight.webp)

![GitHubDownloadZIPButtonHighlight](https://assets.martysmods.com/reshade/installing/shaderinstall/GitHubDownloadZIPButtonHighlight.webp)

---

## Installing the Shader Repository(s)

The `ReShade-Shaders` folder is in the same directory as the game executable (the ReShade install location). Extract the contents of the shader ZIP into `ReShade-Shaders` and preserve the folder structure. Repository archives usually contain `Shaders` and optionally `Textures`. You'll want to merge these with the existing `ReShade-Shaders\Shaders` and `ReShade-Shaders\Textures` folders.

:::warning
On file conflicts, choose **“Replace the files in the destination.”**
:::

<ReactPlayer
  url="https://assets.martysmods.com/reshade/installing/shaderinstall/ExtractShadersArchiveVideo.webm"
  playing={true}
  muted={true}
  controls={false}
  loop={true}
  width="100%"
  height="100%"
  style={{ width: "100%", margin: "0 auto" }}
/>

---

## Setting the Effect and Texture Search Paths

New shaders or textures may not appear if ReShade's search paths are wrong or were changed. Open the ReShade overlay, go to the **Settings** tab, and set the paths below. These are relative to the game executable directory. Then clicking **Reload** at the bottom of ReShade's **Home** tab.

| Setting                 | Correct Path                    |
| ----------------------- | ------------------------------- |
| Effect Search Path      | `.\ReShade-Shaders\Shaders\**`  |
| Texture Search Path     | `.\ReShade-Shaders\Textures\**` |