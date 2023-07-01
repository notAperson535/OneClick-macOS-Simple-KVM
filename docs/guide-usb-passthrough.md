
---
title: Passing through a USB device (Works with iPhone)
--- 

If you are on Windows using the WSL method make sure to pass through the usb device to wsl first by following [this guide](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

First run the `lsusb` command to see the current devices attached to your linux host

Here we'll use a phone attached to the host:

```
human123@Laptop:~/MacOS/OneClick-macOS-Simple-KVM$ lsusb
...
Bus 002 Device 003: ID 18d1:4e11 Google Inc. Nexus One
```
(Note the Bus and device numbers).

Now, add this line to the `args` section of `basic.sh`, replacing the `hostbus` and `hostaddr` with the values you got earlier
```-usb -device usb-host,hostbus=2,hostaddr=3 \```

Thats it! You should be good to go.

# If this guide did not work for an iPhone, [try this one instead](/docs/guide-phone-passthrough)