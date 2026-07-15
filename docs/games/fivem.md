---
title: "FiveM"
sidebar_label: "FiveM"
description: "Get ReShade working with FiveM, including the plugins-folder move and common crash fixes."
slug: /games/fivem
sidebar_position: 1
hide_title: true
---

<!----------------------- IMPORTS ---------------------------->

import YTConsent from '@site/src/components/YTConsent';

<!----------------------------------------------------------->

# FiveM

FiveM is a platform that lets you play on custom servers for Grand Theft Auto V (GTAV). Getting ReShade working with FiveM takes a few extra steps, since ReShade has to be moved into FiveM's own plugins folder. This guide walks you through the whole process.

---

<YTConsent url="https://www.youtube.com/watch?v=JaT_Fjv7-2o" />

---

## Enable Windows File Extensions

You need to be able to see file extensions in Windows to follow this guide. Extensions are the parts at the end of file names that indicate the file type, like `.exe` or `.dll`. Follow our [guide for enabling Windows file extensions](/additionalguides/fileextensions) first.

---

## Install ReShade to GTAV

Download the latest Add-on Support build of ReShade from the official ReShade website. Install it into your GTAV game folder and do not include any add-ons during setup. If you need help, see our [ReShade installation guide](/reshade/installing/setuptool).

---

## Locate your GTAV Folder

Find your GTAV game folder, where the main game files are stored. If you're unsure how to find it, use our [guide for finding your game's executable](/additionalguides/findexecutable). Confirm these files and folder are present before continuing:

- `dxgi.dll`
- `ReShade.ini`
- `ReShade-Shaders`

<img className="img-md" src="https://assets.martysmods.com/additionalguides/games/fivem/FiveMGTAVReShadeFiles.webp" alt="GTAV ReShade Install Files" />

---

## Locate your FiveM Installation

Find the folder where FiveM is installed, using the same method as the previous step.

<img className="img-md" src="https://assets.martysmods.com/additionalguides/games/fivem/FiveMFileLocation.webp" alt="FiveM File Location" />

---

## Navigate to FiveM's Plugins Folder

Open your FiveM folder and navigate to `FiveM Application Data`. Inside, find and open the `plugins` folder. This is where the ReShade files will go.

<img className="img-md" src="https://assets.martysmods.com/additionalguides/games/fivem/FiveMAppdataLocation.webp" alt="FiveM appdata Location" />

<img className="img-md" src="https://assets.martysmods.com/additionalguides/games/fivem/FiveMPluginLocation.webp" alt="FiveM plugins Location" />

---

## Move ReShade Files into FiveM

Go back to your GTAV folder and cut the following files and folder:

- `dxgi.dll`
- `ReShade.ini`
- `ReShade-Shaders`

Paste them into the `plugins` folder inside your FiveM directory.

<img className="img-md" src="https://assets.martysmods.com/additionalguides/games/fivem/FiveMReShadeInstallLocation.webp" alt="FiveM ReShade Install Location" />

---

## Check FiveM's Console Log

Start FiveM and press `F8` to open the console log. You should see an error message related to ReShade that looks something like this:

![Error Screenshot](https://assets.martysmods.com/additionalguides/games/fivem/FiveMReShadeError.webp)

Copy everything starting from `[Addons]` to the end of the message and paste it into the `CitizenFX.ini` file in your FiveM folder, replacing the example ID with the one from your own log.

```
[Addons]
ReShade5=ID:XXXXXX acknowledged that ReShade 5.x has a bug that will lead to game crashes
```

Make sure the ID matches your log exactly.

---

## Restart FiveM and Enable Fix UI Lag

After saving `CitizenFX.ini`, restart FiveM. Go to the settings menu, enable the **Fix UI Lag** option, then restart FiveM one more time.

---

## Troubleshooting

### ReShade "No Effect Files" Error

If ReShade reports "No effect files found," your `ReShade.ini` search paths are likely missing or incorrect. Go to the **Settings** tab in ReShade and set the paths as follows:

| Setting             | Search Path                       |
| ------------------- | --------------------------------- |
| Effect Search Path  | `.\ReShade-Shaders\Shaders\**`    |
| Texture Search Path | `.\ReShade-Shaders\Textures\**`   |

<img className="img-md" src="https://assets.martysmods.com/additionalguides/games/fivem/FiveMSearchPath.webp" alt="Effect search path FiveM" />

### FiveM Crash Dump Screen

If FiveM presents a crash dump screen while ReShade is installed, there is very little that can be done on your end. This type of crash is handled entirely by FiveM's own crash reporting system and is outside the scope of ReShade or any shader configuration.

<img className="img-md" src="https://assets.martysmods.com/additionalguides/games/fivem/FiveMCrashScreen.webp" alt="FiveM Crash Dump Screen" />

Resolving this is up to the FiveM development team. You can report the crash through FiveM's official channels, but ReShade-related crashes in FiveM have historically received little attention and are unlikely to be addressed.
