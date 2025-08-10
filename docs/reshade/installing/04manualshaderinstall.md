---
title: "Manually Installing Shaders"
sidebar_label: "Manually Installing Shaders"
description: "Not every shader repository is avalible through the ReShade Setup Tool - This guide will walk users through the manual installation process of shader repositories/archives."
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

Not all shader repositories are avalible to be downloaded or installed through the ReShade Setup Tool - as so, users will sometimes have to manually install these repositories/archives through manual means.

To follow along with this guide, ReShade **must** already be installed and working in your game. If ReShade is not active or installed to your game, you can follow our [guide for installing ReShade with the ReShade Setup Tool](./setuptool).

:::warning
If the shaders you are attempting to install were not obtained from GitHub (instead downloaded through Patreon, Discord, or via Direct Download), you can skip the GitHub download steps below and instead use the shader files provided to you directly (usually in a ZIP or folder format).
:::

---

## Downloading the Shader Repository(s)

Most ReShade shader repositores are located on GitHub. So, you'll need to navigate to their repository - then click on the green "Code" button near the top right of the GitHub page.

   ![GitHubRepoCodeButtonHighlight](https://assets.martysmods.com/reshade/installing/shaderinstall/GitHubRepoCodeButtonHighlight.webp)

Once the download dropdown appears, click "Download ZIP".

   ![GitHubDownloadZIPButtonHighlight](https://assets.martysmods.com/reshade/installing/shaderinstall/GitHubDownloadZIPButtonHighlight.webp)

---

## Installing the Shader Repository(s)

Once your shader ZIP file has finished downloading, navigate to your game folder, find the `ReShade-Shaders` directory, and extract the contents of your ZIP file to this folder.

:::warning
If you're prompted by Windows about file conflicts, click **“Replace the files in the destination.”**
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

Depending on either the age or the setup of your ReShade install, sometimes new shaders & textures will not be recognized. To fix this, simply correct the Effect and Texture Search Paths in ReShade's `Settings` tab.

| Setting                 | Correct Path                    |
| ----------------------- | ------------------------------- |
| Effect Search Path      | `.\ReShade-Shaders\Shaders\**`  |
| Texture Search Path     | `.\ReShade-Shaders\Textures\**` |