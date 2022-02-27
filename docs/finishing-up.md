---
title: Finishing Up
permalink: /finishing-up/
---

## Changing VM settings

To fine-tune the system and improve performance, look in the `docs` folder for more information on [adding memory](https://notaperson535.github.io/OneClick-macOS-Simple-KVM/docs/performance), setting up [bridged networking](https://notaperson535.github.io/OneClick-macOS-Simple-KVM/docs/networking), adding [passthrough hardware (for GPUs)](https://notaperson535.github.io/OneClick-macOS-Simple-KVM/docs/passthrough), tweaking [screen resolution](https://notaperson535.github.io/OneClick-macOS-Simple-KVM/docs/resolution), and [enabling sound features](https://notaperson535.github.io/OneClick-macOS-Simple-KVM/docs/passthrough).

## Troubleshooting

If the mouse is not aligned properly, edit the basic.sh file and change `-usb -device usb-kbd -device usb-tablet \` to `-usb -device usb-kbd -device usb-mouse \` or the other way around.

If you get an error that says access denied, run `sudo ./basic.sh` which will give it admin privelages.

If you get an error that looks like: 
```
Requested operation is not valid: Setting different SELinux label on /opt/dir/OneClick-macOS-Simple-KVM/firmware/OVMF_VARS-1024x768.fd which is already in use
```
edit `/etc/libvirt/qemu.conf` and change/add this line `remember_owner=0`
