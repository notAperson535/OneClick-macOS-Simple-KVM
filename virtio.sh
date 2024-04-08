#!/usr/bin/env bash

OSK="ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc"
VMDIR=$PWD
OVMF=$VMDIR/firmware
#export QEMU_AUDIO_DRV=pa
#QEMU_AUDIO_DRV=pa

args=(
    -nodefaults \
    -enable-kvm \
    -m 4G \
    -machine q35,accel=kvm \
    -smp 4,cores=2 \
    -cpu Penryn,vendor=GenuineIntel,kvm=on,+sse3,+sse4.2,+aes,+xsave,+avx,+xsaveopt,+xsavec,+xgetbv1,+avx2,+bmi2,+smep,+bmi1,+fma,+movbe,+invtsc \
    -device isa-applesmc,osk="$OSK" \
    -smbios type=2 \
    -drive if=pflash,format=raw,readonly,file="$OVMF/OVMF_CODE.fd" \
    -drive if=pflash,format=raw,file="$OVMF/OVMF_VARS.fd" \
    -vga std \
    -device ich9-intel-hda -device hda-output \
    -usb -device usb-kbd -device usb-mouse \
    -netdev user,id=net0 \
    -device vmxnet3,netdev=net0,id=net0,mac=52:54:00:09:49:17 \
    -drive id=OpenCore,if=virtio,format=qcow2,file="$VMDIR/OpenCore.qcow2" \
    -drive id=InstallMedia,if=virtio,format=raw,file="$VMDIR/BaseSystem.img" \
    -drive id=MyDisk,if=virtio,format=qcow2,file="$VMDIR/macOS.qcow2" \
)

qemu-system-x86_64 "${args[@]}"
