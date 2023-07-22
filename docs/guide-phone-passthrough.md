---
title: Passing through your iPhone to macOS (works with Xcode)
--- 

# If you are trying to pass through any other usb device, [use this guide instead](/docs/guide-usb-passthrough)

Original: https://github.com/arindas/mac-on-linux-with-qemu/issues/25#issue-989202268

References: https://stackoverflow.com/questions/67279997/connect-iphone-via-usb-to-sosumi-qemu [sickcodes/Docker-OSX#133](https://github.com/sickcodes/Docker-OSX/issues/133)

Plug your iphone into the usb port, then run `lsusb`

```
$ lsusb
Bus 001 Device 004: ID 05ac:12a8 Apple, Inc. iPhone 5/5C/5S/6/SE
```

Since qemu runs as a regular user, it cannot connect to hot-plug USB devices unless you change permssions on the host. Being in the group plugdev might be sufficient for standard USD block devices. For others, such as an iphone, you need to manually change the /dev/bus/usb/xxx/yyy to group users or create /etc/udev/rules.d/97-iphone.rules.

https://www.linuxquestions.org/questions/blog/kingbeowulf-74138/qemu-usb-passthrough-with-specifics-for-iphone-37830/

To add the 97-iphone-rules, first run this command:

```
sudo nano /etc/udev/rules.d/97-iphone.rules
```

Now add this to the new file in nano

```
SUBSYSTEMS=="usb", ATTRS{idVendor}=="05ac", ATTRS{idProduct}=="*",GROUP="users", MODE="0660"
```

The 0x05ac vendor ID in this case is for an Apple iPhone 5C. For iphones specifically, it can help to disable usbmuxd with an empty /etc/udev/rules.d/39-usbmuxd.rules. Now, run this command as root

```
sudo udevadm control -R
```

Then edit your `basic.sh` file and add these lines

```
-usb \
-device usb-ehci,id=ehci \
-device usb-host,bus=ehci.0,vendorid=0x05ac,guest-reset=false,id=iphone \
```

Now when you connect your phone you will see a "Trust this computer message. It should quickly disappear and re-appear.
The first message is for the Linux host, the second is for the macOS guest. If you clicked the wrong message or things are
not working just reconnect the phone.

## Pairing the iOS device to Xcode
* Open Xcode and go to `Window  Devices and Simulators`.
* Select your device and then select the Connect via network checkbox to pair your device:

https://stackoverflow.com/questions/10087985/xcode-doesnt-see-my-ios-device-but-itunes-does

## Do I need to be a Apple Developer Member to deploy apps on my iphone ?
https://developer.apple.com/forums/thread/81424

## Finished

when you launch macOS and run `lsusb` you should get this:

```
tom@toms-iMac ~ % lsusb
Bus 004 Device 002: ID 0627:0001 0627 QEMU USB Mouse  Serial: 89126-0000:00:04.0-3
Bus 004 Device 003: ID 0627:0001 0627 QEMU USB Keyboard  Serial: 68284-0000:00:04.0-2
Bus 004 Device 001: ID 05ac:12a8 Apple Inc. iPhone  Serial: 650d4ab950e8ece4cd07b637044440618c9080b4
Bus 000 Device 001: ID 1d6b:IPCI Linux Foundation USB 2.0 Bus 
Bus 000 Device 001: ID 1d6b:IPCI
IPCI
IPCI
IPCI Linux Foundation USB 2.0 Bus
```

