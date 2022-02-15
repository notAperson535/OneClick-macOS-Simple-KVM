---
title: Manual Method
permalink: /manual/
--- 

## Getting Started
You'll need a Linux system with `qemu` (3.1 or later), `python3`, `pip` and the KVM modules enabled. A Mac is **not** required. Some examples for different distributions:

```
sudo apt-get install qemu-system qemu-utils python3 python-pip  # for Ubuntu, Debian, Mint, and PopOS.
sudo pacman -S qemu python python3-pip python-wheel  # for Arch and Manjaro.
sudo xbps-install -Su qemu python3 python3-pip  # for Void Linux.
sudo zypper in qemu-tools qemu-kvm qemu-x86 qemu-audio-pa python3-pip  # for openSUSE Tumbleweed
sudo dnf install qemu qemu-img python3 python3-pip # for Fedora
sudo eopkg install qemu # for Solus OS
sudo emerge -a qemu python dev-python/pip # for Gentoo
To use in NIXOS add qemu, pyton3, and pip in your packages list.
```

If you are installing on Solus OS, extracting qemu may take a while, so be patient.

## Step 1
Run `fetch-macOS-v2.py` to download installation media for macOS (internet required).
```
./fetch-macOS-v2.py
```
If the resulting file is named BaseSystem.dmg then run 
```
qemu-img convert BaseSystem.dmg -O raw BaseSystem.img
```
If it is named RecoveryImage.dmg run
```
qemu-img convert RecoveryImage.dmg -O raw BaseSystem.img
```

## Bringing Your Own macOS bootable file
If you want to bring your own bootable file, whether it be for an older version of macOS or you already have a file, drag it into the OneClick-macOS-Simple-KVM folder. Then, Check if it is named BaseSystem if it's not rename it to BaseSystem. Most likely it would be named named RecoveryImage.
If the file is now named BaseSystem.dmg, you must run this command to convert it to BaseSystem.img
```
qemu-img convert BaseSystem.dmg -O raw BaseSystem.img
```
If it is named BaseSystem.img, you are good to go

Hint (If you want to use an older version of macOS, OpenCore can go back to macOS 10.4)

## Step 2
Create an empty hard disk using `qemu-img`, changing the name and size to preference:
```
qemu-img create -f qcow2 macOS.qcow2 64G
```

if you change the drive name, change the line below according to the new name in `basic.sh`:
```
    -drive id=SystemDisk,if=none,file="$VMDIR/macOS.qcow2" \
```
> Note: If you're running on a headless system (such as on Cloud providers), you will need `-nographic` and `-vnc :0 -k en-us` to the end of basic.sh for VNC support.

Then run `basic.sh` to start the machine and install macOS. Remember to partition in Disk Utility first! (macOS extended journaled) Once macOS is succesfully installed, you can instead run `./basic-no-installer.sh` to boot up the VM without the macOS Installer attached. This will prevent OpenCore from default booting the installer.

If the mouse is not aligned properly, edit the basic.sh file and change `-usb -device usb-kbd -device usb-mouse \` to `-usb -device usb-kbd -device usb-tablet \`

If you get an error that says access denied, run `sudo ./basic.sh` which will give it admin privelages.

## Step 2a (Virtual Machine Manager)
1. If instead of QEMU, you'd like to import the setup into Virt-Manager for further configuration, just run `sudo ./make.sh --add`.
2. After running the above command, add `macOS.qcow2` as storage in the properties of the newly added entry for VM.

## Step 2b (Headless Systems)
If you're running on a headless system (such as on Cloud providers), set the HEADLESS environment variable to 1:
```
HEADLESS=1 ./basic.sh
```

## You're done!

If the mouse is not aligned properly, edit the basic.sh file and change `-usb -device usb-kbd -device usb-tablet \` to `-usb -device usb-kbd -device usb-mouse \` or the other way around. Don't worry, if the macOS setup screen is laggy and slow, it is not how fast the VM will be. I don't know why it's so laggy, but once it is finished, the VM should be much faster.

If you get an error that says access denied, run `sudo ./basic.sh` which will give it admin privelages. If you get an error that looks like: 
```
Requested operation is not valid: Setting different SELinux label on /opt/dir/OneClick-macOS-Simple-KVM/firmware/OVMF_VARS-1024x768.fd which is already in use
```
edit `/etc/libvirt/qemu.conf` and change/add this line `remember_owner=0`

To fine-tune the system and improve performance, look in the `docs` folder for more information on [adding memory](https://notaperson535.github.io/OneClick-macOS-Simple-KVM/performance), setting up [bridged networking](https://notaperson535.github.io/OneClick-macOS-Simple-KVM/networking), adding [passthrough hardware (for GPUs)](https://notaperson535.github.io/OneClick-macOS-Simple-KVM/passthrough), tweaking [screen resolution](https://notaperson535.github.io/OneClick-macOS-Simple-KVM/resolution), and enabling sound features.
