"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},967:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Manual Method"},s=void 0,u={unversionedId:"manualmethod",id:"manualmethod",title:"Manual Method",description:"You'll need a Linux system with qemu (3.1 or later), python3, pip and the KVM modules enabled. A Mac is not required. Some examples for different distributions:",source:"@site/docs/manualmethod.md",sourceDirName:".",slug:"/manualmethod",permalink:"/docs/manualmethod",draft:!1,editUrl:"https://github.com/notAperson535/OneClick-macOS-Simple-KVM/tree/docs/docs/manualmethod.md",tags:[],version:"current",frontMatter:{title:"Manual Method"},sidebar:"docs",previous:{title:"OneClick Method",permalink:"/docs/oneclickmethod"},next:{title:"Installing on Windows",permalink:"/docs/windows-install"}},p={},m=[{value:"Step 1",id:"step-1",level:2},{value:"Bringing Your Own macOS bootable file",id:"bringing-your-own-macos-bootable-file",level:2},{value:"Step 2",id:"step-2",level:2},{value:"Step 2a (Virtual Machine Manager)",id:"step-2a-virtual-machine-manager",level:2},{value:"Step 2b (Headless Systems)",id:"step-2b-headless-systems",level:2},{value:"Now head over to installing macOS for instructions on correctly installing macOS",id:"now-head-over-to-installing-macos-for-instructions-on-correctly-installing-macos",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You'll need a Linux system with ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu")," (3.1 or later), ",(0,a.kt)("inlineCode",{parentName:"p"},"python3"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," and the KVM modules enabled. A Mac is ",(0,a.kt)("strong",{parentName:"p"},"not")," required. Some examples for different distributions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install qemu-system qemu-utils python3 python3-pip  # for Ubuntu, Debian, Mint, and PopOS.\nsudo pacman -Syu qemu-desktop python python-pip python-wheel --needed # for Arch and Manjaro.\nsudo xbps-install -Su qemu python3 python3-pip  # for Void Linux.\nsudo zypper in qemu-tools qemu-kvm qemu-x86 qemu-audio-pa python3-pip  # for openSUSE Tumbleweed\nsudo dnf install qemu qemu-img python3 python3-pip # for Fedora\nsudo eopkg install qemu python3 python3-pip # for Solus OS\nsudo emerge -a qemu python dev-python/pip # for Gentoo\nTo use in NIXOS add qemu, pyton3, and python3-pip to your packages list.\n")),(0,a.kt)("p",null,"If you are installing on Solus OS, extracting qemu may take a while, so be patient."),(0,a.kt)("h2",{id:"step-1"},"Step 1"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch-macOS-v2.py")," to download installation media for macOS (internet required)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./fetch-macOS-v2.py\n")),(0,a.kt)("p",null,"If the resulting file is named BaseSystem.dmg then run "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"qemu-img convert BaseSystem.dmg -O raw BaseSystem.img\n")),(0,a.kt)("p",null,"If it is named RecoveryImage.dmg run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"qemu-img convert RecoveryImage.dmg -O raw BaseSystem.img\n")),(0,a.kt)("h2",{id:"bringing-your-own-macos-bootable-file"},"Bringing Your Own macOS bootable file"),(0,a.kt)("p",null,"If you want to bring your own bootable file, whether you already have a file or you have a custom version, drag it into the OneClick-macOS-Simple-KVM folder. Then, Check if it is named BaseSystem if it's not rename it to BaseSystem."),(0,a.kt)("p",null,"If the file is now named BaseSystem.dmg, you must run this command to convert it to BaseSystem.img"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"qemu-img convert BaseSystem.dmg -O raw BaseSystem.img\n")),(0,a.kt)("p",null,"If it is already named BaseSystem.img, you are good to go"),(0,a.kt)("h2",{id:"step-2"},"Step 2"),(0,a.kt)("p",null,"Create an empty hard disk using ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-img"),", changing the name and size to preference:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"qemu-img create -f qcow2 macOS.qcow2 64G\n")),(0,a.kt)("p",null,"if you change the drive name, change the line below according to the new name in ",(0,a.kt)("inlineCode",{parentName:"p"},"basic.sh"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    -drive id=SystemDisk,if=none,file="$VMDIR/macOS.qcow2" \\\n')),(0,a.kt)("h2",{id:"step-2a-virtual-machine-manager"},"Step 2a (Virtual Machine Manager)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If instead of QEMU, you'd like to import the setup into Virt-Manager for further configuration, just run ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo ./make.sh --add\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"After running the above command, add ",(0,a.kt)("inlineCode",{parentName:"li"},"macOS.qcow2")," as storage in the properties of the newly added entry for VM.")),(0,a.kt)("h2",{id:"step-2b-headless-systems"},"Step 2b (Headless Systems)"),(0,a.kt)("p",null,"If you're running on a headless system (such as on Cloud providers), set the HEADLESS environment variable to 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HEADLESS=1 ./basic.sh\n")),(0,a.kt)("h2",{id:"now-head-over-to-installing-macos-for-instructions-on-correctly-installing-macos"},(0,a.kt)("a",{parentName:"h2",href:"/docs/installing-macos/"},"Now head over to installing macOS for instructions on correctly installing macOS")))}d.isMDXComponent=!0}}]);