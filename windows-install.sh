#!/bin/bash

# Updates and dependencies
sudo apt -q update && sudo apt -q -y upgrade
sudo apt -qq -y install build-essential libncurses-dev bison flex libssl-dev libelf-dev cpu-checker aria2 bc qemu-syste>

cd ~

# Download latest kernel version
latest=$(curl -s "https://api.github.com/repos/microsoft/WSL2-Linux-Kernel/releases" | jq -r '.[0].name')
echo "Latest version is $latest"
aria2c -x 10 --allow-overwrite=true --download-result=hide --summary-interval=0 https://github.com/microsoft/WSL2-Linux>

# Extract and start build process
pv WSL2-Linux-Kernel-$latest.tar.gz | tar -xz
cd WSL2-Linux-Kernel-$latest/
cp Microsoft/config-wsl .config
make menuconfig

cd ~
