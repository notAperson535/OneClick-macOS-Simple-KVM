---
title: Guide to Performance Tuning (Adding Memory and CPU cores)
--- 
The default macOS VM configuration (`basic.sh`) assumes some sane defaults, however this may not reflect the actual peformance capabilities of the host machine.

Here are some attributes you can change to get the best performance out of your VM:

## Memory
The following line controls memory allocation. The default is 4GB of RAM.

Increase this as needed (limited to the real amount of memory in your machine).
```
-m 4G \
```

## Cores
The default configuration is 1 CPU with 2 cores, and each core containing 2 threads (4 threads in total).
```
-smp cores=2,threads=2,sockets=1 \
```
### Warning
macOS is very picky about core/thread configs. If you change the config and get stuck on the Apple logo, go back and try another config. You could also reference CPU configs of real Mac Intel processors.
