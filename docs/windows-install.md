---
title: Installing on Windows
--- 

## Prerequisites:
- Windows 10 or Higher
- Virtualization capabilities
- 8GB of RAM or more

## Step 1 (Installing WSL2)
Install WSL2. If you have WSL2 already, you can skip this step.
Open Powershell as an administrator and run this command
```
wsl --install
```
Once it finishes installing, restart your computer.
After rebooting, you'll need to check if this command automatically installed Ubuntu.
Run `wsl -l -v`. If that outputs something related to Ubuntu, you are good to go. If not, install Ubuntu with this command:
```
wsl --install Ubuntu
```

Once that is done, pick a username and password inside the WSL terminal that pops up. It does not have to be the same as the system.

## Step 2 (Getting the files)
Open a new Ubuntu terminal window, and run this command, replacing the WINDOWS_USER_NAME with your Windows username, not the Linux one.
```
cd /mnt/c/users/WINDOWS_USER_NAME/Documents
```
Now clone the repository
```
git clone https://github.com/notAperson535/OneClick-macOS-Simple-KVM.git
```
Now cd into the newly created folder
```
cd OneClick-macOS-Simple-KVM
```

## Step 3 (installing qemu and virtualization capabilities)
Run the included windows installer
```
./windows-install.sh
```
Once you get to the menu (looks like this)
![image](https://user-images.githubusercontent.com/95918679/152704969-29fccfab-de68-4977-b2c7-4fb5b4b5c3cb.png)
Go to Virtualization and make sure your system processor type is selected, mine is Intel
![image](https://user-images.githubusercontent.com/95918679/152704984-213b067b-1a8e-45cf-ad23-330391c31583.png)
Then keep clicking exit, and save the configuration

Now run these commands to make sure virtualization works
```
kvm-ok
cat /sys/module/kvm_intel/parameters/nested
```
If the first command returns `KVM acceleration can be used` and the second command returns `Y`, then you are good to go. If the first command returns `Y` but the second command return something like `no`, then go to the bottom of the page for troubleshooting.

Now make sure you are still in the OneClick-macOS-Simple-KVM directory, the path should look something like this:
```
/mnt/c/users/WINDOWS_USER_NAME/Documents/OneClick-macOS-Simple-KVM
```

Before running `setup.sh` and installing macOS, you will need to follow a few steps first to get the best performance out of the VM. First, download VNC Viewer [here](https://www.realvnc.com/en/connect/download/viewer/).

Next run `./setup.sh`.

Once you see a QEMU window pop up, press ctrl+c in the termina; and run `sudo HEADLESS=1 ./basic.sh`. This will start the VM in "headless" mode, which puts the output of the display onto a local port. Open VNC Viewer, and go to `localhost:5900` to connect to the VM using VNC.

Whenever you want to load up the machine again, run `sudo HEADLESS=1 ./basic.sh`, NOT `./setup.sh` or `./basic.sh`.

## You're done!

Don't close the terminal when the QEMU window is open, as it will shut down the VM and may cause data loss.

## [Now head over to installing macOS for instructions on correctly installing macOS](https://notaperson535.github.io/OneClick-macOS-Simple-KVM/docs/installing-macos/)

## Troubleshooting

### cat /sys/module/kvm_intel/parameters/nested returns `N`, but KVM-OK Returns `KVM acceleration can be used`

Edit these commands in .wslconfig, which is located in your Windows user directory, replacing the WINDOWS_USER_NAME with the your Windows username, not the Linux one.
```
nestedVirtualization=true
kernel=C:\\Users\\WINDOWS_USER_NAME\\bzImage
debugConsole=true
pageReporting=true
kernelCommandLine=intel_iommu=on iommu=pt kvm.ignore_msrs=1 kvm-intel.nested=1 kvm-intel.ept=1 kvm-intel.emulate_invalid_guest_state=0 kvm-intel.enable_shadow_vmcs=1 kvm-intel.enable_apicv=1
```

### Getting `Your CPU does not support KVM extensions` on AMD processors

For those with AMD EPYC/Ryzen processor or later, Nested Virtualization (required for KVM) [is not supported on Windows 10](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/enable-nested-virtualization#amd-epyc--ryzen-processor-or-later). So you have to upgrade to Windows 11.
