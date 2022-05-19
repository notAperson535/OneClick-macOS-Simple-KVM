---
title: How to increase disk size
permalink: /docs/resizing/
--- 

Close the VM before starting

First, on your host machine, run this command to add more space to the disk (warning: you can not make the disk smaller, only bigger, so don't make it to big.)
In this case I am adding 100GBs of storage to my disk.

```
sudo qemu-img resize macOS.qcow2 +100G
```

Now reopen the VM, and then open the terminal in macOS, and run this command to find the main drive

```
diskutil list
```

it should look something like this

```
/dev/disk0 (internal, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *268.4 GB   disk0
   1:                        EFI ⁨EFI⁩                     209.7 MB   disk0s1
   2:                 Apple_APFS ⁨Container disk2⁩         85.7 GB    disk0s2
                    (free space)                         182.5 GB   -
```

Next, run these commands, depending on your disk type.

For APFS disks (for most people)

```
diskutil repairdisk disk0
diskutil apfs resizeContainer disk0s2 0
```

For HFS or HFS+ disks

```
diskutil repairdisk disk0
diskutil resizeVolume / R
```
