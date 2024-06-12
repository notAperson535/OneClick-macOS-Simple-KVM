#!/bin/bash
sudo apt update && sudo apt -y upgrade
sudo apt-get -y install qemu-system qemu-utils python3 python3-pip build-essential libncurses-dev bison flex libssl-dev libelf-dev cpu-checker qemu-kvm aria2
cd ~
aria2c -x 10 https://github.com/microsoft/WSL2-Linux-Kernel/archive/linux-msft-wsl-5.15.153.1.tar.gz
tar -xf linux-msft-wsl-5.15.153.1.tar.gz
cd linux-msft-wsl-5.15.153.1/
cp Microsoft/config-wsl .config
make menuconfig
cd ~
