---
title: "Opening Windows File Permissions"
sidebar_label: "Opening Windows File Permissions"
description: "How to fix file permission issues that prevent ReShade from working properly"
slug: /additionalguides/winopenfileperms
sidebar_position: 5
hide_title: True
---

# Opening Windows File Permissions

Sometimes games install to folders that Windows protects from modification. This can prevent ReShade from reading or writing files it needs to work correctly. This document describes how to configure file system permissions to allow ReShade to access the required folders and files.

---

## Find the Game Directory

First, locate the game folder. Follow the [guide for finding your game directory](/additionalguides/findexecutable) to determine where the game is installed.

After locating the game folder, navigate to the parent directory (the folder that contains the game folder). For example, if the game is in `C:\Games\MyGame`, navigate to the `C:\Games` folder.

---

## Open Folder Properties

1. Right-click the game folder and click "Properties" in the context menu

     ![PropertiesButton](https://assets.martysmods.com/additionalguides/permissions/DirectoryPropertiesButton.webp)

2. Click the "Security" tab at the top

     ![PropertiesSecurity](https://assets.martysmods.com/additionalguides/permissions/PropertiesSecurityTab.webp)

3. Click the "Advanced" button in the bottom right corner

     ![PropertiesSecurityAdvanced](https://assets.martysmods.com/additionalguides/permissions/SecurityAdvancedButton2.webp)

The Advanced Security Settings window opens. All subsequent permission changes are performed in this window.

---

## Disable Permission Inheritance

Windows normally inherits permissions from parent folders, which can sometimes cause issues in protected locations. Disable inheritance to define explicit permissions for the game folder.

1. In the Advanced Security Settings window, click "Disable inheritance" at the bottom left

     ![DisableInheritanceButton](https://assets.martysmods.com/additionalguides/permissions/DisableInheritanceButton2.webp)

2. In the prompt that appears with the question "What would you like to do with current inherited permissions?", click "Remove all inherited permissions from this object"

     ![InheritedPermissionsPrompt](https://assets.martysmods.com/additionalguides/permissions/RemoveIPButton.webp)

3. Click "Apply"

This removes existing inherited permission entries so that explicit permissions can be configured for the folder.

---

## Set Folder Ownership

Set the current user account as the owner of the folder to enable permission management.

1. At the top of the Advanced Security Settings window, locate "Owner:" and click the blue "Change" link next to it (this entry usually has a shield icon)

     ![Owner](https://assets.martysmods.com/additionalguides/permissions/OwnerSettingChange2.webp)

2. A "Select User or Group" window will appear

     ![SelectUserWindow](https://assets.martysmods.com/additionalguides/permissions/UserorGroupSelect.webp)

3. Click "Advanced..." at the bottom left

     ![SelectUserAdvancedButton](https://assets.martysmods.com/additionalguides/permissions/UserAdvancedButton.webp)

4. In the new window, click "Find Now" on the right side to search for all users on your computer

     ![FindNowButton](https://assets.martysmods.com/additionalguides/permissions/UserFindNowButton.webp)

5. Scroll through the list at the bottom until the current user name is found (it has a single-person icon next to it)

     ![UsernameSelection](https://assets.martysmods.com/additionalguides/permissions/UserHighlight.webp)

6. Double-click the user name to select it

7. Click "OK" to close the user selection window

8. Click "OK" again to close the "Select User or Group" window

The Owner field now shows the selected user account.
![ShowOwnership](https://assets.martysmods.com/additionalguides/permissions/OwnerSettingShowUser2.webp)

---

## Apply Ownership to Subfolders and Files

Apply the new ownership to the folder and all contained subfolders and files.

1. Check the box labeled "Replace owner on subcontainers and objects"

     ![ReplaceOwnerSubcontainer](https://assets.martysmods.com/additionalguides/permissions/ReplaceSubContainer2.webp)

2. Check the box labeled "Replace all child object permission entries with inheritable permission entries from this object"

     ![ReplaceChildObject](https://assets.martysmods.com/additionalguides/permissions/ReplaceChildObject2.webp)

3. Click "Apply" at the bottom right

4. If Windows displays the prompt "Do you want to replace all explicitly defined permissions on all child objects with inheritable permissions from this object?", click "Yes"

     ![ReplaceDefinedPermissions](https://assets.martysmods.com/additionalguides/permissions/ReplaceDefinedPermissions.webp)

Windows may take some time to apply ownership changes to all files and folders.

---

## Grant Full Control to the User

Grant the current user account permission to read, write, and modify all items in the folder.

1. In the Advanced Security Settings window, click "Add" at the bottom left

     ![AddPrincipalButton](https://assets.martysmods.com/additionalguides/permissions/AddPrincipalButton2.webp)

2. A "Permission Entry" window will open

3. Click the blue "Select a principal" link

     ![SelectAPrincipal](https://assets.martysmods.com/additionalguides/permissions/SelectPrincipal.webp)

4. Repeat the same user selection process:

   - Click "Advanced..."

         ![SelectUserAdvancedButton](https://assets.martysmods.com/additionalguides/permissions/UserAdvancedButton.webp)

   - Click "Find Now"

         ![FindNowButton](https://assets.martysmods.com/additionalguides/permissions/UserFindNowButton.webp)

   - Locate and double-click the current user name

         ![UsernameSelection](https://assets.martysmods.com/additionalguides/permissions/UserHighlight.webp)

5. Back in the Permission Entry window, verify the following:

   - Type: "Allow"
   - Applies to: "This folder, subfolders, and files"

         ![TypeAndAppliesTo](https://assets.martysmods.com/additionalguides/permissions/TypeandAppliesTo2.webp)

6. Check the "Full Control" box (this automatically selects all other permissions)

     ![FullControlSelect](https://assets.martysmods.com/additionalguides/permissions/FullControlSelection2.webp)

7. Click "OK"

The current user account now appears in the permissions list with Full Control.

![UserListedPrinciple](https://assets.martysmods.com/additionalguides/permissions/UserListedPrincipal2.webp)

---

## Grant Full Control to Applications

Grant the `ALL APPLICATION PACKAGES` group access so that applications, including ReShade, can read and write to the folder.

1. Click "Add" again in the Advanced Security Settings window

     ![AddPrincipalButton](https://assets.martysmods.com/additionalguides/permissions/AddPrincipalButton2.webp)

2. Click "Select a principal" in the new Permission Entry window

     ![SelectAPrincipal](https://assets.martysmods.com/additionalguides/permissions/SelectPrincipal.webp)

3. Click "Advanced..."

     ![SelectUserAdvancedButton](https://assets.martysmods.com/additionalguides/permissions/UserAdvancedButton.webp)

4. Click "Find Now"

     ![FindNowButton](https://assets.martysmods.com/additionalguides/permissions/UserFindNowButton.webp)

5. Locate "ALL APPLICATION PACKAGES" in the list (this entry may be near the top) and double-click it.

     ![AllAppPacks](https://assets.martysmods.com/additionalguides/permissions/AllAppsGroup.webp)

6. Verify the following settings:

   - Type: "Allow"
   - Applies to: "This folder, subfolders, and files"

         ![TypeandAppliesforAllApps](https://assets.martysmods.com/additionalguides/permissions/TypeandAppliesforAllApps.webp)

7. Check "Full Control"

     ![FullControlforAllApps](https://assets.martysmods.com/additionalguides/permissions/FullControlAllApps.webp)

8. Click "OK"

---

## Apply All Changes

1. Click "Apply" in the Advanced Security Settings window
2. Click "OK" to close the window
3. Click "OK" again to close the Properties window

The game folder is now configured with explicit permissions that allow ReShade and other applications to read and write the required files.