---
title: Finishing Up
---

## Setting the default boot device

Once macOS is succesfully installed, you can select the macOS partition on the boot screen (OpenCore), with ctrl+enter to set it as the default boot device. That means it will boot up the VM without booting the macOS Installer. This will prevent OpenCore from default booting the installer.

## Changing VM settings

To fine-tune the system and improve performance, look in the `docs` folder for more information on [adding memory](/docs/guide-performance), setting up [bridged networking](/docs/guide-networking), adding [passthrough hardware (for GPUs and Sound Cards)](/docs/guide-passthrough), or [without a sound card](/docs/guide-audio) ,[tweaking screen resolution](/docs/guide-screen-resolution), [turning off verbose](/docs/guide-disabling-verbose) and [enabling sound features](/docs/guide-passthrough).

## Optimizing

To make the VM run smoother and faster, look here: https://github.com/sickcodes/osx-optimizer

## Troubleshooting

If the mouse is not aligned properly, edit the basic.sh file and change `-usb -device usb-kbd -device usb-tablet \` to `-usb -device usb-kbd -device usb-mouse \` or the other way around.

If you get an error that says access denied, run `sudo ./basic.sh` which will give it admin privelages.

If you get an error that looks like: 
```
Requested operation is not valid: Setting different SELinux label on /opt/dir/OneClick-macOS-Simple-KVM/firmware/OVMF_VARS-1024x768.fd which is already in use
```
edit `/etc/libvirt/qemu.conf` and change/add this line `remember_owner=0`
