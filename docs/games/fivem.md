---
title: "FiveM"
sidebar_label: "FiveM"
slug: /games/fivem
sidebar_position: 1
hide_title: True
---

<!----------------------- IMPORTS ---------------------------->

import ImageComparisonSlider from '@site/src/components/ImageComparisonSlider';
import YTConsent from '@site/src/components/YTConsent';

<!----------------------------------------------------------->

# FiveM

FiveM is a platform that lets you play on custom servers for Grand Theft Auto V (GTAV). To get ReShade working with FiveM, you need to follow specific steps. This guide will show you exactly what to do and provide all the details you need.

<YTConsent url="https://www.youtube.com/watch?v=JaT_Fjv7-2o" />

---

## Step 1: Enable Windows File Extensions

To follow this guide properly, you need to be able to see file extensions in Windows. File extensions are the parts at the end of file names that indicate the file type, like `.exe` or `.dll`. Enabling these will help you find and move the right files. Follow our [guide for enabling Windows file extensions](/additionalguides/fileextensions) to complete this step.

## Step 2: Install ReShade to GTAV

Download the latest Add-on Support Build of ReShade from the official ReShade website. Make sure to install it into your GTAV game folder and do not include any add-ons during the process. If you need assistance, refer to our [ReShade installation guide](/reshade/installing/setuptool).

## Step 3: Locate your GTAV Folder

Locate your GTAV game folder, where the main game files are stored. If you’re unsure how to find it, use our [guide for finding your game’s executable](/additionalguides/findexecutable). Confirm that these files and folder are present before continuing:

- `dxgi.dll`
- `reshade.ini`
- `reshade-shaders`

<img className="img-half" src="https://assets.martysmods.com/additionalguides/games/fivem/FiveMGTAVReShadeFiles.webp" alt="GTAV ReShade Install Files" />

## Step 4: Locate your FiveM Installation

Find the folder where FiveM is installed. Use the same method from Step 3 to locate it.

<img className="img-half" src="https://assets.martysmods.com/additionalguides/games/fivem/FiveMFileLocation.webp" alt="FiveM File Location" />

## Step 5: Navigate to FiveM’s Plugins Folder

Open your FiveM folder and navigate to “FiveM Application Data.” Inside, find and open the “plugins” folder. This is where the ReShade files will go.

<img className="img-half" src="https://assets.martysmods.com/additionalguides/games/fivem/FiveMAppdataLocation.webp" alt="FiveM appdata Location" />

<img className="img-half" src="https://assets.martysmods.com/additionalguides/games/fivem/FiveMPluginLocation.webp" alt="FiveM plugins Location" />

## Step 6: Move ReShade Files into FiveM

Go back to your GTAV folder and cut the following files and folder:

- `dxgi.dll`
- `reshade.ini`
- `reshade-shaders`

Paste them into the “plugins” folder inside your FiveM directory.

<img className="img-half" src="https://assets.martysmods.com/additionalguides/games/fivem/FiveMReShadeInstallLocation.webp" alt="FiveM ReShade Install Location" />

## Step 7: Check FiveM’s Console Log

Start FiveM and press `F8` to open the console log. You should see an error message related to ReShade that looks something like this:

![Error Screenshot](https://assets.martysmods.com/additionalguides/games/fivem/FiveMReShadeError.webp)

Copy everything starting from `[Addons]` to the end of the message and paste it into the `CitizenFX.ini` file in your FiveM folder, replacing the example ID with the one from your own log.

```
[Addons]
ReShade5=ID:XXXXXX acknowledged that ReShade 5.x has a bug that will lead to game crashes
```

Make sure the ID matches your log exactly.

## Step 8: Restart FiveM and Enable “Fix UI Lag”

After saving `CitizenFX.ini`, restart FiveM. Go to the settings menu, enable the “Fix UI Lag” option, then restart FiveM one more time.

---

## Troubleshooting

### ReShade “No Effect Files” Error

If ReShade reports “No effect files found,” your `reshade.ini` search paths are likely missing or incorrect. Go to the **Settings** tab in ReShade and set the paths as follows:

| Search Path                    | Description          |
|--------------------------------|----------------------|
| .\reshade-shaders\Shaders\\**  | Effect Search Path   |
| .\reshade-shaders\Textures\\** | Texture Search Path  |

<img className="img-half" src="https://assets.martysmods.com/additionalguides/games/fivem/FiveMSearchPath.webp" alt="Effect search path FiveM" />

### FiveM Crash Dump Screen

If FiveM presents a crash dump screen while ReShade is installed, there is very little that can be done on your end. This type of crash is handled entirely by FiveM’s own crash reporting system and is outside the scope of ReShade or any shader configuration.

<img className="img-half" src="https://assets.martysmods.com/additionalguides/games/fivem/FiveMCrashScreen.webp" alt="FiveM Crash Dump Screen" />

Resolving this is up to the FiveM development team. You can report the crash through FiveM’s official channels, but ReShade-related crashes in FiveM have historically received little attention from the team and are unlikely to be addressed.