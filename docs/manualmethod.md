---
title: Manual Method
--- 

You'll need a Linux system with `qemu` (3.1 or later), `python3`, `pip` and the KVM modules enabled. A Mac is **not** required. Some examples for different distributions:

```
sudo apt-get install qemu-system qemu-utils python3 python3-pip  # for Ubuntu, Debian, Mint, and PopOS.
sudo pacman -Syu qemu-desktop python python-pip python-wheel --needed # for Arch and Manjaro.
sudo xbps-install -Su qemu python3 python3-pip  # for Void Linux.
sudo zypper in qemu-tools qemu-kvm qemu-x86 qemu-audio-pa python3-pip  # for openSUSE Tumbleweed
sudo dnf install qemu qemu-img python3 python3-pip libvirt-client # for Fedora
sudo eopkg install qemu python3 python3-pip # for Solus OS
sudo emerge -a qemu python dev-python/pip # for Gentoo
sudo dnf install qemu qemu-img python3 python3-pip libvirt-utils -y # for Mageia
To use in NIXOS add qemu, pyton3, and python3-pip to your packages list.
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
If you want to bring your own bootable file, whether you already have a file or you have a custom version, drag it into the OneClick-macOS-Simple-KVM folder. Then, Check if it is named BaseSystem if it's not rename it to BaseSystem.

If the file is now named BaseSystem.dmg, you must run this command to convert it to BaseSystem.img
```
qemu-img convert BaseSystem.dmg -O raw BaseSystem.img
```
If it is already named BaseSystem.img, you are good to go

## Step 2
Create an empty hard disk using `qemu-img`, changing the name and size to preference:
```
qemu-img create -f qcow2 macOS.qcow2 64G
```

if you change the drive name, change the line below according to the new name in `basic.sh`:
```
    -drive id=SystemDisk,if=none,file="$VMDIR/macOS.qcow2" \
```

## Step 2a (Virtual Machine Manager)
1. If instead of QEMU, you'd like to import the setup into Virt-Manager for further configuration, just run 
```
sudo ./make.sh --add
```
2. After running the above command, add `macOS.qcow2` as storage in the properties of the newly added entry for VM.

## Step 2b (Headless Systems)
If you're running on a headless system (such as on Cloud providers), set the HEADLESS environment variable to 1:
```
HEADLESS=1 ./basic.sh
```

## [Now head over to installing macOS for instructions on correctly installing macOS](/docs/installing-macos/)
