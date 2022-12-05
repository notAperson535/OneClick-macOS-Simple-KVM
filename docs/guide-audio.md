---
title: Audio passthrough (without external card)
---

Original comment here: https://github.com/notAperson535/OneClick-macOS-Simple-KVM/pull/55#issuecomment-1312499083

**If you want sound inside your macOS VM, whether with qemu or libvirt/virt-manager :**

1) Disable System Integrity Protection (SIP) : 
- On boot, select the recovery partition (arrow keys) and press enter to boot into it.
- Open the Terminal.
- Run the below command (choose either one) :
csrutil disable
or
csrutil enable --without kext
- Reboot your VM in macOS.

2) Download latest VoodooHDA kext from here : https://sourceforge.net/projects/voodoohda/

3) Open the terminal application, run :
sudo cp -R Downloads/VoodooHDA.kext /Library/Extensions (enter password when prompted).

4) Wait a few seconds, a popup should appear => "Open Security Preferences".
4a) If no popup, run : sudo kextutil -v /Library/Extensions/VoodooHDA.kext

5) If you did not click on the "Open Security Preferences", go to "Security & Privacy" section inside "System Settings application".

6) Allow "VoodooHDA" and restart.

Credits : https://github.com/MobCode100/Dastux/blob/main/VoodooHDA-QEMU-KVM.md

**If you want sound to get working DO NOT execute the VM as root or you will encounter some alsa errors and you won't hear anything !** => Do not run "sudo ./basic.sh" but simply "./basic.sh"

**Same issue with virt-manager : ensure your current user has the appropriate rights ! :**
sudo adduser $USER libvirt
sudo adduser $USER kvm
sudo adduser $USER libvirt-qemu