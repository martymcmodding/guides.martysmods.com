---
title: "dgVoodoo2"
sidebar_label: "dgVoodoo2"
description: "Using dgVoodoo2 to translate games to DirectX 11/12 for ReShade"
slug: /additionalguides/apiwrappers/dgvoodoo2
sidebar_position: 2
hide_title: false
---

dgVoodoo2 is a rendering API wrapper used to translate games that use older DirectX rendering APIs to newer DirectX Rendering APIs. This is highly useful for adapting older DirectX 8, 9, and 10 games so that they can benefit from ReShade's compute shaders.

---

## Download dgVoodoo2
Download the latest version of dgVoodoo2 by visiting [the developer's website](https://dege.freeweb.hu/dgVoodoo2/dgVoodoo2/#latest-stable-version) and downloading the "Latest stable version" of dgVoodoo2.

![dgVodooo2 Releases](https://assets.martysmods.com/additionalguides/apiwrapper/dgvoodoo2/dgVoodoo2Releases.webp)

## Find Your Game’s DirectX Version & Architecture
Afterwards, go to [PCGamingWiki](https://pcgamingwiki.com/) and search for your game. You'll need to take note of:
   - Which DirectX version it uses (e.g., DirectX 9, DirectX 10).
   - Whether the game executable is 32‑bit or 64‑bit.

---

## Install dgVoodoo2
Once you've found the architecture and version of DirectX, open the dgVoodoo2 ZIP file you downloaded using [7-Zip](https://www.7-zip.org/) or [WinRAR](https://www.win-rar.com/). Inside the archive, you'll see several files and folders. For the time being, take note of the `dgVoodooCpl.exe` and `dgVoodoo.conf` files in the root of the archive, as you'll need to copy these to your game's directory later.

Then, navigate into the `MS` folder.

![dgVoodoo2 Archive](https://assets.martysmods.com/additionalguides/apiwrapper/dgvoodoo2/dgVoodoo2Archive.webp)

Within `MS`, you'll find several subfolders; however, the only two that matter to you are `x64` (64‑bit) and `x86` (32‑bit). You'll want to open the folder that matches your game's architecture.

![dgVoodoo2 Arch](https://assets.martysmods.com/additionalguides/apiwrapper/dgvoodoo2/dgVoodoo2Arch.webp)

Once you're inside the right architecture folder, locate the DLL that matches your game’s DirectX version:

| **DLL Name**    | **DirectX Version**  |
| --------------- | -------------------- |
| `d3dim.dll`     | DirectX 6            |
| `ddraw.dll`     | DirectX 7            |
| `d3dim700.dll`  | DirectX 7            |
| `d3d8.dll`      | DirectX 8            |
| `d3d9.dll`      | DirectX 9            |


Copy the appropriate DLL, as well as the `dgVoodooCpl.exe` and `dgVoodoo.conf` files into the same directory as your game’s main executable. If you’re not sure where your game is installed, refer to [our guide on finding a game’s executable](../findexecutable) for more details.

![dgVoodoo2 Install Finish Result](https://assets.martysmods.com/additionalguides/apiwrapper/dgvoodoo2/dgVooodo2Install.webp)

---

## Configure dgVoodoo2

Navigate to your game's directory and double-click `dgVoodooCpl.exe`. This is the control panel application that allows you to configure dgVoodoo2's settings. You'll see dgVoodoo2's configuration interface with several tabs.

![dgVoodoo2 Control Panel](https://assets.martysmods.com/additionalguides/apiwrapper/dgvoodoo2/dgVoodoo2CPGeneral.webp)

Click on the `General` tab at the top of the window. Here, you'll find the "Output API" dropdown menu. This setting determines which DirectX version dgVoodoo2 will translate your game's API calls to.

For ReShade compatibility, you'll want to select either:

- **Direct3D 11 (feature level 11.0)** - Recommended for most systems
- **Direct3D 12 (feature level 12.0)** - May offer better performance on newer systems

![dgVoodoo2 Output API Setting](https://assets.martysmods.com/additionalguides/apiwrapper/dgvoodoo2/dgVoodoo2OutputAPI.webp)

Once you've selected your desired Output API, click the `Apply` button at the bottom of the window.

---

## Install ReShade

Now that dgVoodoo2 is installed and configured to translate your game's DirectX calls to DirectX 11 or 12, you can install ReShade. Since dgVoodoo2 is translating your game to a newer DirectX version, you'll need to install ReShade for **DirectX 10/11/12**, not the original DirectX version your game uses.

Download and run the latest ReShade installer from [ReShade.me](https://reshade.me/). When prompted to select your game's Rendering API, choose **DirectX 10/11/12**. This is important because dgVoodoo2 is presenting your game as a DirectX 11 or 12 application to ReShade, even though the game originally uses an older DirectX version.

If you need detailed step-by-step instructions for installing ReShade, refer to [our ReShade installation guide](../../reshade/installing/setuptool).

After installation is complete, launch your game to verify that both dgVoodoo2 and ReShade are working correctly. You should see the ReShade overlay appear when you press the default key (usually the Home key), confirming that everything has been set up successfully.