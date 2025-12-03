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

## Step 3 (installing QEMU and more)

First, install the `cpu-checker` package:
```
sudo apt install cpu-checker
```

Now run this commands to make sure virtualization works:
```
kvm-ok
```
This should output `Y`. If it does not, check your BIOS configuration to make sure nested virtualization is on (search up online based on which CPU you have).

Next, for Intel CPUs run:
```
cat /sys/module/kvm_intel/parameters/nested
```

Or for AMD CPUs run:
```
cat /sys/module/kvm_amd/parameters/nested
```

If that command returns `Y` or `1` (depending on CPU type), then you are good to go. If it returns something like `N`, then go to the bottom of the page for troubleshooting.

Now make sure you are still in the OneClick-macOS-Simple-KVM directory. The path should look something like this:
```
/mnt/c/users/WINDOWS_USER_NAME/Documents/OneClick-macOS-Simple-KVM
```

After that, download VNC Viewer [here](https://www.realvnc.com/en/connect/download/viewer/).

Next, run the setup script:
```
./setup.sh
```

Once you see a QEMU window pop up, press ctrl+c in the terminal and then run `sudo HEADLESS=1 ./basic.sh` in the terminal. This will start the VM in "headless" mode, which puts the output of the display onto a local port. Open VNC Viewer, and go to `localhost:5900` to connect to the VM using VNC.

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

For those with AMD EPYC/Ryzen processor or later, Nested Virtualization (required for KVM) [is not supported on Windows 10](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/enable-nested-virtualization#amd-epyc--ryzen-processor-or-later). You will have to upgrade to Windows 11.
