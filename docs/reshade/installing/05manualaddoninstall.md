---
title: "Manually Installing Addons"
sidebar_label: "Manually Installing Addons"
description: "Not all addons are available through the ReShade Setup Tool. This guide will walk you through the process of manually installing addons so ReShade can use them."
slug: /reshade/installing/reshademanualaddoninstall
sidebar_position: 5
hide_title: true
keywords: 
 - Manual ReShade Addon Install
 - ReShade Addon Install
tags:
 - ReShade Guide
 - Installing
---

# Manually Installing Add-ons

## Use Case
Not all add-ons are available through the ReShade Setup Tool. This guide will walk you through the process of manually installing add-ons so ReShade can use them.

:::info
This guide assumes that the Add-on Support Build of ReShade is already installed and functioning in your game.
:::

---

## Downloading the Add-on

This guide will walk you through the process of manually installing add-ons so ReShade can use them.

First, navigate to the add-on's GitHub repository. Then, find the "Releases" section, typically located on the right-hand side of the repository's page. Click on the "Releases" button to view and download the latest version of the add-on.

If the add-on you are installing does not have a "Releases" section, check the repository's main page or readme file for download instructions.

## Installing the Add-on

Once you've downloaded the add-on, extract the contents directly into your game’s root directory (the same location as your game's main executable file).

:::important
Keep in mind that it's important not to create a separate folder for the add-on files. The add-on files need to be in the root directory themselves, alongside your game’s main executable.
:::

If you need help finding the root directory, use our [guide on identifying your game's executable](/additionalguides/03findgameexecutable).

## Final Checks and Troubleshooting

After installing, run your game to check if the add-on loads correctly. If it doesn't:

- Double-check that the add-on files are not inside a subfolder.
- Verify the add-on is compatible with your installed ReShade version.

Ensure all files are correctly placed and restart the game to apply changes.