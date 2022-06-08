---
title: Disabling Verbose (To make booting faster)
---

## Warning

If you do this and then there is a problem that causes macOS to not boot, you must redownload the opencore qcow2 file from the github repository.

1. In the macOS Finder, look for **EFI** in the left bar under **Volumes**. If it isn't visible you will have to mount it:
 - Open the macOS Terminal and type `diskutil list` and look for the disk/partition location of the EFI. (There may be more than one.)
 - Type `sudo diskutil mount diskYsZ`, using the disk/partition location name where you see EFI. It should look like this:
 ![image](https://user-images.githubusercontent.com/95918679/152873359-9f3586e9-32f7-411a-8fd7-25c80a94aeec.png)
 
 - The **EFI** partition will appear in the left Finder bar under **Volumes**.
 - If you don't see anything in that volume after browsing to it, try the other ones that you found in `diskutil`.
2. In the **EFI** volume, go into the `EFI` directory and then the `OC` directory and open the `config.plist` file in the macOS text editor.

Next, find and change this line

```
<string>-v keepsyms=1 tlbto_us=0 vti=9</string>
```

to this line

```
<string>keepsyms=1 tlbto_us=0 vti=9</string>
```