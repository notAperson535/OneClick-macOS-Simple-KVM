---
title: Migrating (Coming from other Repositories)
--- 

If you are coming from another repository, and want to come here, here is what you need to do

### Coming from macOS-Simple-KVM

If you are coming from macOS-Simple-KVM, maybe to upgrade to Big Sur or Monterey, it will be very easy. All you have to do is place the BaseSystem file and the file that has macOS installed into the OneClick-macOS-Simple-KVM folder. Then rename the file that has macOS installed (usually MyDisk.qcow2) to macOS.qcow2. Then run `./basic.sh` and enjoy.

You are technically done now, but you can follow the macOS parts of [this guide](https://dortania.github.io/OpenCore-Install-Guide/clover-conversion/) to completely rid clover of your system

### Coming from OSX-KVM

If you want to come from OSX-KVM, maybe for stability, There is one extra step. First, place the BaseSystem file and the file that has macOS installed into the OneClick-macOS-Simple-KVM folder. Then, rename the file that has macOS installed (usually mac_hdd_ng.img) to macOS.img. Then run this command.
```
qemu-img convert -f qcow2 -O qcow2 macOS.img macOS.qcow2
```
Once that has completed, delete the macOS.img file. Then run `./basic.sh` and enjoy.

## You're Done!

To fine-tune the system and improve performance, look in the `docs` folder for more information on [adding memory](/docs/guide-performance), setting up [bridged networking](/docs/guide-networking), adding [passthrough hardware (for GPUs)](/docs/guide-passthrough), tweaking [screen resolution](/docs/guide-screen-resolution), and [enabling sound features](/docs/guide-passthrough).
