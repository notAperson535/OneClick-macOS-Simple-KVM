---
title: Installing macOS
permalink: /installing-macos/
--- 
## Loading the VM

Load up the VM with `sudo ./basic.sh` to start up the VM. Then select the macOS Installer, and hit enter.

## Partitioning in Disk Utility

One you get to the macOS setup screen, select "Disk Utility", and then select the biggest drive, it should be around 64 gigabytes or a little higher. Then select format, and make sure to format it as macOS Extended Journaled. You should also name it something like "Macintosh SSD" Without this the install will not complete. Once you are done formatting, close out of Disk Utility and move on to the next step.

## Installing

Now select the "Reinstall macOS", and open it. Go through the setup screen, and once you get there select the disk you just formatted. Then continue with the setup, it may hang at "Less than a minute remaining" for a while, it's not stuck, just be patient.

## Setup Screen (finally)

Once you get to the setup screen, you will probably notice that it is very laggy, this is ok, as it will get much faster once you get through it. A reboot is always reccomended after you are done installing.

[Now head over to Finishing Up to see how to set up the VM to be faster and have more features like sound and display acceleration](https://notaperson535.github.io/OneClick-macOS-Simple-KVM/finishing-up)

## Setting the default boot device

Once macOS is succesfully installed, you can select the macOS partition with ctrl+enter to set it as the default boot and automatically boot up the VM without the macOS Installer attached. This will prevent OpenCore from default booting the installer.
