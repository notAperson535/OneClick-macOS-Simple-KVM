---
title: OneClick-macOS-Simple-KVM
--- 

# OneClick-macOS-Simple-KVM
Documentation to set up a simple macOS VM in QEMU, accelerated by KVM.

By: notAperson

Original maker is [@FoxletFox](https://twitter.com/foxletfox), and the help of many others. You can donate to him [on Coinbase](https://commerce.coinbase.com/checkout/96dc5777-0abf-437d-a9b5-a78ae2c4c227) or [Paypal!](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=QFXXKKAB2B9MA&item_name=macOS-Simple-KVM).

I did not make the download script, Kholia did.

New to macOS and KVM? Check [the FAQs.](docs/FAQs.md)

## IMPORTANT
You must download or clone this GitHub repository before you begin
Do not use forks of `notAperson535/OneClick-macOS-Simple-KVM` as I update this repository a lot, and forks are usually behind.
This is NOT the install guide for Windows, that is located [here](windows-install.md)
Don't use the Just-OpenCore branch of this, it is not updated ever.

If you do not see files in this guide, or if you want to update your version, which I recommend doing at least one a month, run this command
```
git pull --rebase
```

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
