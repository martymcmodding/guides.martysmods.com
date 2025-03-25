---
title: Grand Theft Auto V
description: "Getting ReShade properly installed for Grand Theft Auto V can be challenging. A recent update from the developers introduced measures that block certain graphics injections, which has led to issues with ReShade and other similar tools not working as expected. This guide provides you with the instructions in order to install ReShade alongside ENB to the game."
---

# Grand Theft Auto V

## Use Case
Getting ReShade properly installed for Grand Theft Auto V can be challenging. A recent update from the developers introduced measures that block certain graphics injections, which has led to issues with ReShade and other similar tools not working as expected. This guide provides you with the instructions in order to install ReShade alongside ENB to the game.

---

## Just ReShade

### Install ReShade through the ReShade Installer

To install ReShade for Grand Theft Auto V, use the ReShade Installer. If you're unfamiliar with the installation process, refer to [our guide on downloading and installing ReShade](https://guides.martysmods.com/download-and-install-reshade). Make sure to select the "GTAV.exe" executable when installing ReShade. Choosing the wrong executable will result in the ReShade Installer placing the incorrect ReShade binary in your game directory.

### Change the ReShade DLL name from "dxgi.dll" to "d3d12.dll"

Navigate to your Grand Theft Auto V folder by following [our guide for locating your game's executable](https://guides.martysmods.com/docs/additional-guides/finding-your-game-executable-and-directory/). Once there, rename the file "dxgi.dll" to "d3d12.dll".

---

## ReShade with ENB

### Download ENB for Grand Theft Auto V - Ignore if you already have ENB Installed

Go to the [ENB page for Grand Theft Auto V](http://enbdev.com/download_mod_gta5.htm). Scroll to the bottom of the page and click on the latest version to view its changelog.

![ENB Version Select Highlight](./images/gtav-enb-version.webp)

Then, click the download icon at the bottom of the changelog page.

![ENB Download Button Highlight](./images/gtav-enb-download.webp)

### Install ENB for Grand Theft Auto V - Ignore if you already have ENB Installed

Open the archive you downloaded from the ENB page for Grand Theft Auto V.

![ENB Archive Image](./images/gtav-enb-archive.webp)

Next, enter the "WrapperVersion" directory.

![ENB Wrapper Version Directory](./images/gtav-wrapperversion-directory.webp)

Inside, you'll see several files:

![ENB WrapperVersion Files Image](./images/gtav-wrapperversion-files.webp)

These files are required for ENB. Copy each of them to the Grand Theft Auto V base directory. If you need help finding your Grand Theft Auto V base directory, follow [our guide for finding your game's executable and directory](https://guides.martysmods.com/docs/additional-guides/finding-your-game-executable-and-directory/).

![Move ENB files to GTAV Directory](./images/gtav-enb-gtav-move.webp)

### Make a copy of ENB's "d3d11.dll" and rename it to "d3d12.dll"

This step is necessary because the latest version of Grand Theft Auto V does not allow injection via "d3d11.dll". However, ENB doesn’t work well with "d3d12.dll", so this workaround is needed. You should end up with two files that look identical to the image below.

![Renamed ENB DLL](./images/gtav-enb-dll-rename.webp)

### Install ReShade Normally

Finally, install ReShade as you normally would. Ensure that you target the executable named "GTAV.exe"; otherwise, the ReShade Installer will not copy the correct binary file, and ReShade will not function.