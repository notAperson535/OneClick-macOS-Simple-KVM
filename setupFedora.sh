#!/bin/bash

sudo dnf install qemu qemu-img python3 python3-pip

qemu-img create -f qcow2 macOS.qcow2 64G

./fetch-macOS-v2.py

qemu-img convert BaseSystem.dmg -O raw BaseSystem.img

sudo ./basic.sh
