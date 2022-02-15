---
title: One-Click Method
permalink: /oneclick/
---

## OneClick Method
- `setup.sh` is for Debian based Linux Repositories like Ubuntu
- `setupArch.sh` is for Arch based Linux Repositories like Manjaro.
- `setupFedora.sh` is for Fedora based Linux Repositories.
- `setupSUSE.sh` is for openSUSE Tumbleweed

Run `./setup.sh` or the correct one depending on your Linux OS to make the VM. Monterey may not work, as it is very picky about hardware.
Once the VM boots up, just hit enter even if it's a black screen or a cut off image (do this every boot) Then format the biggest drive as macOS Extended Journaled (should be a little bigger than 64GB, then go to reinstall macOS and install it to the newly formatted drive.

Once installed, run `./basic.sh` to boot up the VM again. Don't worry, if the macOS setup screen is laggy and slow, it is not how fast the VM will be. I don't know why it's so laggy, but once it is finished, the VM should be much faster. Once macOS is succesfully installed, you can instead run `./basic-no-installer.sh` to boot up the VM without the macOS Installer attached. This will prevent OpenCore from default booting the installer. Do not run the setup file twice if the install was succesful, as it will redownload the image and that is not needed.

## You're done!

If the mouse is not aligned properly, edit the basic.sh file and change `-usb -device usb-kbd -device usb-tablet \` to `-usb -device usb-kbd -device usb-mouse \` or the other way around.

If you get an error that says access denied, run `sudo ./basic.sh` which will give it admin privelages. If you get an error that looks like: 
```
Requested operation is not valid: Setting different SELinux label on /opt/dir/OneClick-macOS-Simple-KVM/firmware/OVMF_VARS-1024x768.fd which is already in use
```
edit `/etc/libvirt/qemu.conf` and change/add this line `remember_owner=0`

To fine-tune the system and improve performance, look in the `docs` folder for more information on [adding memory](docs/guide-performance.md), setting up [bridged networking](docs/guide-networking.md), adding [passthrough hardware (for GPUs)](docs/guide-passthrough.md), tweaking [screen resolution](docs/guide-screen-resolution.md), and enabling sound features.
