---
title: "Opening Windows File Permissions"
sidebar_label: "Opening Windows File Permissions"
description: "How to fix file permission issues that prevent ReShade from working properly"
slug: /additionalguides/winopenfileperms
sidebar_position: 5
hide_title: True
---

# Opening Windows File Permissions

Sometimes games install to folders that Windows protects from modification. This can prevent ReShade from reading or writing files it needs to work properly. This guide will walk you through giving yourself and ReShade the necessary permissions to access these protected folders.

---

## Find Your Game Directory

First, you need to locate your game folder. Follow our [guide for finding your game directory](../additionalguides/findexecutable) to locate where your game is installed.

Once you've found your game folder, navigate to the parent directory (the folder that contains your game folder). For example, if your game is in `C:\Games\MyGame`, you want to be in the `C:\Games` folder.

## Open Folder Properties

1. Right-click on your game folder and click "Properties" from the context menu

     ![PropertiesButton](https://assets.martysmods.com/additionalguides/permissions/DirectoryPropertiesButton.webp)

2. Click the "Security" tab at the top

     ![PropertiesSecurity](https://assets.martysmods.com/additionalguides/permissions/PropertiesSecurityTab.webp)

3. Click "Advanced" button in the bottom right corner

     ![PropertiesSecurityAdvanced](https://assets.martysmods.com/additionalguides/permissions/SecurityAdvancedButton.webp)

This opens the Advanced Security Settings window where we'll make all our changes.

## Disable Permission Inheritance

Windows normally inherits permissions from parent folders, which can cause problems. We need to stop this inheritance and start fresh.

1. In the Advanced Security Settings window, click "Disable inheritance" at the bottom left

     ![DisableInheritanceButton](https://assets.martysmods.com/additionalguides/permissions/DisableInheritanceButton.webp)

2. A popup will appear asking "What would you like to do with current inherited permissions?", so, click "Remove all inherited permissions from this object"

     ![InheritedPermissionsPrompt](https://assets.martysmods.com/additionalguides/permissions/RemoveIPButton.webp)

3. Click "Apply"

This removes all the old permission rules so we can set up new ones that work properly.

## Make Yourself the Owner

Now we need to make you the owner of the folder. This gives you the right to change permissions.

1. At the top of the Advanced Security Settings window, look for "Owner:" and click the blue "Change" link next to it (it usually has a shield icon)

     ![Owner](https://assets.martysmods.com/additionalguides/permissions/OwnerSettingChange.webp)

2. A "Select User or Group" window will appear

     ![SelectUserWindow](https://assets.martysmods.com/additionalguides/permissions/UserorGroupSelect.webp)

2. Click "Advanced..." at the bottom left

     ![SelectUserAdvancedButton](https://assets.martysmods.com/additionalguides/permissions/UserAdvancedButton.webp)

3. In the new window, click "Find Now" on the right side to search for all users on your computer

     ![FindNowButton](https://assets.martysmods.com/additionalguides/permissions/UserFindNowButton.webp)

4. Scroll through the list at the bottom until you find your username (it will have a single-person icon next to it)

     ![UsernameSelection](https://assets.martysmods.com/additionalguides/permissions/UserHighlight.webp)

5. Double-click your username to select it

6. Click "OK" to close the user selection window

7. Click "OK" again to close the "Select User or Group" window

You should now see your username in the Owner field.
![ShowOwnership](https://assets.martysmods.com/additionalguides/permissions/OwnerSettingShowUser.webp)

## Apply Ownership to All Subfolders

We need to make sure you own not just the main folder, but everything inside it too.

1. Check the box labeled "Replace owner on subcontainers and objects"

     ![ReplaceOwnerSubcontainer](https://assets.martysmods.com/additionalguides/permissions/ReplaceSubContainer.webp)

2. Check the box labeled "Replace all child object permission entries with inheritable permission entries from this object"

     ![ReplaceChildObject](https://assets.martysmods.com/additionalguides/permissions/ReplaceChildObject.webp)

3. Click "Apply" at the bottom right

4. If Windows asks "Do you want to replace all explicitly defined permissions on all child objects with inheritable permissions from this object?", click "Yes"

     ![ReplaceDefinedPermissions](https://assets.martysmods.com/additionalguides/permissions/ReplaceDefinedPermissions.webp)

This step may take a moment as Windows applies the changes to all files and folders.

## Give Yourself Full Control

Now we'll give yourself permission to read, write, and modify everything in the folder.

1. In the Advanced Security Settings window, click "Add" at the bottom left

     ![AddPrincipalButton](https://assets.martysmods.com/additionalguides/permissions/AddPrincipalButton.webp)

2. A "Permission Entry" window will open

3. Click the blue "Select a principal" link

     ![SelectAPrincipal](https://assets.martysmods.com/additionalguides/permissions/SelectPrincipal.webp)

4. Repeat the same process as before:

   - Click "Advanced..."

         ![SelectUserAdvancedButton](https://assets.martysmods.com/additionalguides/permissions/UserAdvancedButton.webp)

   - Click "Find Now"

         ![FindNowButton](https://assets.martysmods.com/additionalguides/permissions/UserFindNowButton.webp)

   - Find and double-click your username

         ![UsernameSelection](https://assets.martysmods.com/additionalguides/permissions/UserHighlight.webp)

5. Back in the Permission Entry window, verify:

   - Type: "Allow" and Applies to: "This folder, subfolders, and files"

         ![TypeAndAppliesTo](https://assets.martysmods.com/additionalguides/permissions/TypeandAppliesTo.webp)

6. Check the "Full Control" box (this should automatically check all the other boxes)

     ![FullControlSelect](https://assets.martysmods.com/additionalguides/permissions/FullControlSelection.webp)

7. Click "OK"

You should now see your username listed in the permissions list.

![UserListedPrinciple](https://assets.martysmods.com/additionalguides/permissions/UserListedPrincipal.webp)

## Give Applications Full Control

Finally, we need to give all applications (including ReShade) permission to access the folder.

1. Click "Add" again in the Advanced Security Settings window

     ![AddPrincipalButton](https://assets.martysmods.com/additionalguides/permissions/AddPrincipalButton.webp)

2. Click "Select a principal" in the new Permission Entry window

     ![SelectAPrincipal](https://assets.martysmods.com/additionalguides/permissions/SelectPrincipal.webp)

3. Click "Advanced..."

     ![SelectUserAdvancedButton](https://assets.martysmods.com/additionalguides/permissions/UserAdvancedButton.webp)

4. Click "Find Now"

     ![FindNowButton](https://assets.martysmods.com/additionalguides/permissions/UserFindNowButton.webp)

5. Look for "ALL APPLICATION PACKAGES" in the list (it may be near the top) and double click it.

     ![AllAppPacks](https://assets.martysmods.com/additionalguides/permissions/AllAppsGroup.webp)

6. Verify the settings are the same as before:

   - Type: "Allow" and Applies to: "This folder, subfolders, and files"

         ![TypeandAppliesforAllApps](https://assets.martysmods.com/additionalguides/permissions/TypeandAppliesforAllApps.webp)

7. Check "Full Control"

     ![FullControlforAllApps](https://assets.martysmods.com/additionalguides/permissions/FullControlAllApps.webp)

8. Click "OK"

## Apply All Changes

1. Click "Apply" in the Advanced Security Settings window
2. Click "OK" to close the window
3. Click "OK" again to close the Properties window

You're done! Your game folder now has the proper permissions set up for ReShade to work correctly. You can now launch your game and ReShade should be able to read and write files as needed.