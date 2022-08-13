---
title: OneClick Method
---

- `setup.sh` is for Debian based Linux Repositories like Ubuntu
- `setupArch.sh` is for Arch based Linux Repositories like Manjaro.
- `setupFedora.sh` is for Fedora based Linux Repositories.
- `setupSUSE.sh` is for openSUSE Tumbleweed

Run `./setup.sh` or the correct one depending on your Linux OS to make the VM.
Once the VM boots up, just hit enter even if it's a black screen or a cut off image (do this every boot) Then format the biggest drive as macOS Extended Journaled (should be a little bigger than 64GB, then go to reinstall macOS and install it to the newly formatted drive.

Once it boots, you can install macOS. Remember to partition in Disk Utility first! (macOS extended journaled). Once macOS is succesfully installed, you can select the macOS partition with ctrl+enter to set it as the default boot and automatically boot up the VM without the macOS Installer attached. This will prevent OpenCore from default booting the installer.

## [Now head over to installing macOS for instructions on correctly installing macOS](/docs/installing-macos/)
