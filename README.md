# macOS-Simple-KVM
Documentation to set up a simple macOS VM in QEMU, accelerated by KVM.

By: notAperson

Original maker is [@FoxletFox](https://twitter.com/foxletfox), and the help of many others. You can donate to him [on Coinbase](https://commerce.coinbase.com/checkout/96dc5777-0abf-437d-a9b5-a78ae2c4c227) or [Paypal!](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=QFXXKKAB2B9MA&item_name=macOS-Simple-KVM).

I did not make the download script, Kholia did.

New to macOS and KVM? Check [the FAQs.](docs/FAQs.md)

## Migrating (Coming from other repositories)

If you are coming from another repository, and want to come here, here is what you need to do

### Coming from macOS-Simple-KVM

If you are coming from macOS-Simple-KVM, maybe to upgrade to Big Sur or Monterey, it will be very easy. All you have to do is place the BaseSystem file and the file that has macOS installed into the OneClick-macOS-Simple-KVM folder. Then rename the file that has macOS installed (usually MyDisk.qcow2) to macOS.qcow2. Then run `basic.sh` or `basic-no-installer.sh` and enjoy.

### Coming from OSX-KVM

If you want to come from OSX-KVM, maybe for stability, it will be a little harder and take a little longer. First, place the BaseSystem file and the file that has macOS installed into the OneClick-macOS-Simple-KVM folder. Then, rename the file that has macOS installed (usually mac_hdd_ng.img) to macOS.img. Then run this command.
```
qemu-img convert -f qcow2 -O qcow2 macOS.img macOS.qcow2
```
Once that has completed, delete the macOS.img file. Then run `basic.sh` or `basic-no-installer.sh` and enjoy.

## IMPORTANT
You must download or clone this GitHub repository before you begin
Do not use forks of `notAperson535/OneClick-macOS-Simple-KVM` as I update this repository a lot, and forks are usually behind.
This is NOT the install guide for Windows, that is located [here](windows-install.md)
Don't use the Just-OpenCore branch of this, it is not updated ever.

If you do not see files in this guide, or if you want to update your version, which I recommend doing at least one a month, run this command
```
git pull --rebase
```

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

## Manual method

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
Run `fetch-macOS.py` to download installation media for macOS (internet required).
```
./fetch-macOS-v2.py
```
Then run
```
qemu-img convert BaseSystem.dmg -O raw BaseSystem.img
```
If BaseSystem.dmg is not found, check to make sure macOS downloaded correctly

## Bringing Your Own macOS bootable file
If you want to bring your own bootable file, whether it be for an older version of macOS or you already have a file, drag it into the OneClick-macOS-Simple-KVM folder. Then, Check if it is named BaseSystem if it's not rename it to BaseSystem. Most likely it would be named named RecoveryImage.
If the file is now named BaseSystem.dmg, you must run this command to convert it to BaseSystem.img
```
qemu-img convert BaseSystem.dmg -O raw BaseSystem.img
```
If it is named BaseSystem.img, you are good to go

Hint (If you want to use an older version of macOS, OpenCore can go back to macOS 10.4), but for macOS versions less than 10.11 (El Capitan), you must use legacy.sh.

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
If you're using a cloud-based/headless system, you can use `headless.sh` to set up a quick VNC instance. VNC will start on port `5900` by default.
```
./headless.sh
```

## You're done!

If the mouse is not aligned properly, edit the basic.sh file and change `-usb -device usb-kbd -device usb-tablet \` to `-usb -device usb-kbd -device usb-mouse \` or the other way around. Don't worry, if the macOS setup screen is laggy and slow, it is not how fast the VM will be. I don't know why it's so laggy, but once it is finished, the VM should be much faster.

If you get an error that says access denied, run `sudo ./basic.sh` which will give it admin privelages. If you get an error that looks like: 
```
Requested operation is not valid: Setting different SELinux label on /opt/dir/OneClick-macOS-Simple-KVM/firmware/OVMF_VARS-1024x768.fd which is already in use
```
edit `/etc/libvirt/qemu.conf` and change/add this line `remember_owner=0`

To fine-tune the system and improve performance, look in the `docs` folder for more information on [adding memory](docs/guide-performance.md), setting up [bridged networking](docs/guide-networking.md), adding [passthrough hardware (for GPUs)](docs/guide-passthrough.md), tweaking [screen resolution](docs/guide-screen-resolution.md), and enabling sound features.
