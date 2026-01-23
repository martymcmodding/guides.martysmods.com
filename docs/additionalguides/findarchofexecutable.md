---
title: "Finding the Architecture of an Executable"
sidebar_label: "Finding the Architecture of an Exectuable"
description: "When modding with graphics injections, accurately identifying the architecture type of your game's executable is crucial. Whether you're an experienced modder or new to the scene, knowing whether your game uses a 32-bit or 64-bit executable is essential for ensuring compatibility and the proper functioning of tools like ReShade and other graphics mods."
slug: /additionalguides/exearchitecture
sidebar_position: 3
hide_title: false
---

When modding with graphics injections, accurately identifying the architecture type of your game's executable is crucial. Whether you're an experienced modder or new to the scene, knowing whether your game uses a 32-bit or 64-bit executable is essential for ensuring compatibility and the proper functioning of tools like ReShade and other graphics mods.

---

## Open Your Game 
Start your game as you normally would, then press "Alt + Tab" to return to your Desktop while the game runs in the background.

## Open Task Manager
Press "Ctrl + Shift + Esc" to open Task Manager, or right-click on the taskbar and select "Task Manager" from the context menu.

## Locate the Game's Executable
In Task Manager, go to the "Processes" tab and find your game's executable. The process name should match the name of the game's application.

## Identify the Architecture
   * 32-Bit Architecture: If the game is running in 32-bit mode, the process name will have a tag that says "(32 Bits)" next to it.
     
     ![Showing Task Manager with Highlight on 32-Bit](https://assets.martysmods.com/additionalguides/gamearch/GameArch32BitHighlight.webp)

   * 64-Bit Architecture: If there is no "(32 Bits)" tag, the game is using a 64-bit architecture.
     
     ![Showing Task Manager with Highlight on No Architecture](https://assets.martysmods.com/additionalguides/gamearch/GameArch64Bit.webp)