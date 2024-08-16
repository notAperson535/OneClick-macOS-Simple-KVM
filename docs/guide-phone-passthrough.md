---
title: Passing through your iPhone to macOS (works with Xcode)
--- 

# If you are trying to pass through any other usb device, [use this guide instead](/docs/guide-usb-passthrough)

Plug your iphone into the usb port, then run `lsusb`

```
$ lsusb
Bus 001 Device 004: ID 05ac:12a8 Apple, Inc. iPhone 5/5C/5S/6/SE
```

There are a couple of values that are important here. `05ac` is the vendor id, while `12a8` is the product ID. You will need both for later.

Since qemu runs as a regular user, it cannot connect to hot-plug USB devices unless you change permssions on the host. Being in the group plugdev might be sufficient for standard USD block devices. For others, such as an iphone, you need to manually change the `/dev/bus/usb/xxx/yyy` to group users or create `/etc/udev/rules.d/97-iphone.rules`.

https://www.linuxquestions.org/questions/blog/kingbeowulf-74138/qemu-usb-passthrough-with-specifics-for-iphone-37830/

To create 97-iphone-rules, first run this command:

```
sudo nano /etc/udev/rules.d/97-iphone.rules
```

Now add this to the new file in nano

```
SUBSYSTEMS=="usb", ATTRS{idVendor}=="05ac", ATTRS{idProduct}=="*",GROUP="users", MODE="0660"
```

`05ac` is the vendor ID from earlier. This specific vendor ID is used on nearly all iPhones.

Next, comment out all the lines in `/etc/udev/rules.d/39-usbmuxd.rules`. If the file is empty, that is fine.

For some people disabling gvfs-gphoto2 also helps this work.
```
sudo chmod 0000 /usr/lib/systemd/user/gvfs-gphoto2-volume-monitor.service
sudo kill $(ps -A | grep gvfs.*gphoto.* | awk '{print $1}')
```

Next, reload the udev rules
```
sudo udevadm control -R
```

Then add these lines to `basic.sh`
```
-usb \
-device usb-ehci,id=ehci \
-device usb-host,bus=ehci.0,vendorid=0x05ac,productid=0x12a8,guest-reset=false,id=iphone \
```

This is another instance where you need to input the vendor and product ids. In this case they are `05ac` and `12a8` respectively.

When you connect your phone and unlock it you will see a "Trust this computer" message. You must trust the computer to be able to access specific iPhone features and have it appear in Xcode.

## Pairing the iOS device to Xcode
* Open Xcode and go to `Window  Devices and Simulators`.
* Select your device and then select the Connect via network checkbox to pair your device:

https://stackoverflow.com/questions/10087985/xcode-doesnt-see-my-ios-device-but-itunes-does

