---
title: Installing macOS
--- 
## Loading the VM

Load up the VM with `sudo ./basic.sh` to start up the VM (for Windows, you would run `sudo HEADLESS=1 ./basic.sh`, then open [VNC Viewer](https://www.realvnc.com/connect/download/viewer/), and connect to `localhost:5900`). 

Then select the macOS Installer in OpenCore, and hit enter.

## Partitioning in Disk Utility

You now must format the disk, otherwise the macOS installer will not be able to find you drive. Once you get to the macOS setup screen, select `Disk Utility`, and then select the biggest drive, it should be around 64 gigabytes or whatever you specified when you created `macOS.qcow2` (this is only for the manual method, the one-click method does this automatically). Then select `Erase` or `Format`, depending on which you see, and make sure to format the disk as macOS Extended Journaled, NOT case-sensitive (Note for Tahoe: this needs to be APFS instead). You should also name it something like `Macintosh SSD`. Once you are done formatting, close out of Disk Utility and move on to the next step.

## Installing

Now select the "Reinstall macOS", and open it. Go through the setup screen, and once you get there select the disk you just formatted. Then continue with the setup, it may hang at "Less than a minute remaining" for a while, it's not stuck, just be patient.

![unnamed](https://github.com/notAperson535/OneClick-macOS-Simple-KVM/assets/95918679/f445f47e-ecf1-4e84-ada6-915d7951aa5a)

After it reboots, you must continually select the "macOS Installer" entry in OpenCore to continue installing macOS. It will take multiple reboots to fully install the OS.

## Setup Screen (finally)

Once you get to the setup screen, you will probably notice that it is very laggy, this is ok, as it will get much faster once you get through it. 

#### A good way to make this experience better is by disabling transparency effects
This can be done by selecting the "vision" section when you reach the accessibility setup screen. Once selected go through the different settings until reaching "Reduce Transparency", and turn it off. Reduce motion is recommended as well.

#### DO NOT LOG IN TO YOUR APPLE ID ON THE SETUP SCREEN
This will blacklist your account and you will need to contact support. Before logging into any apple account you MUST follow [this guide](/docs/guide-Apple-ID)

#### Do not turn on FileVault
This will cause issues with the Virtual Machine

##### A reboot is always reccomended after you are done installing.

## [Now head over to Finishing Up to see how to set up the VM to be faster and have more features like sound and display acceleration](/docs/finishing-up)

(Do not skip this)
