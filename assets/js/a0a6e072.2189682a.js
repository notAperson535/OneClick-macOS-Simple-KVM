"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[125],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),p=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(a,".").concat(h)]||d[h]||l[h]||i;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:r,s[1]=u;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return l}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],u={title:"Passing through your iPhone to macOS (works with Xcode)"},a="If you are trying to pass through any other usb device, [use this guide instead](/docs/guide-usb-passthrough)",p={unversionedId:"guide-phone-passthrough",id:"guide-phone-passthrough",title:"Passing through your iPhone to macOS (works with Xcode)",description:"Plug your iphone into the usb port, then run lsusb",source:"@site/docs/guide-phone-passthrough.md",sourceDirName:".",slug:"/guide-phone-passthrough",permalink:"/docs/guide-phone-passthrough",draft:!1,editUrl:"https://github.com/notAperson535/OneClick-macOS-Simple-KVM/tree/docs/docs/guide-phone-passthrough.md",tags:[],version:"current",frontMatter:{title:"Passing through your iPhone to macOS (works with Xcode)"},sidebar:"docs",previous:{title:"Passing through a USB device (Works with iPhone)",permalink:"/docs/guide-usb-passthrough"}},c={},l=[{value:"Pairing the iOS device to Xcode",id:"pairing-the-ios-device-to-xcode",level:2}],d={toc:l};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"if-you-are-trying-to-pass-through-any-other-usb-device-use-this-guide-instead"},"If you are trying to pass through any other usb device, ",(0,i.kt)("a",{parentName:"h1",href:"/docs/guide-usb-passthrough"},"use this guide instead")),(0,i.kt)("p",null,"Plug your iphone into the usb port, then run ",(0,i.kt)("inlineCode",{parentName:"p"},"lsusb")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ lsusb\nBus 001 Device 004: ID 05ac:12a8 Apple, Inc. iPhone 5/5C/5S/6/SE\n")),(0,i.kt)("p",null,"There are a couple of values that are important here. ",(0,i.kt)("inlineCode",{parentName:"p"},"05ac")," is the vendor id, while ",(0,i.kt)("inlineCode",{parentName:"p"},"12a8")," is the product ID. You will need both for later."),(0,i.kt)("p",null,"Since qemu runs as a regular user, it cannot connect to hot-plug USB devices unless you change permssions on the host. Being in the group plugdev might be sufficient for standard USD block devices. For others, such as an iphone, you need to manually change the ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/bus/usb/xxx/yyy")," to group users or create ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/udev/rules.d/97-iphone.rules"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.linuxquestions.org/questions/blog/kingbeowulf-74138/qemu-usb-passthrough-with-specifics-for-iphone-37830/"},"https://www.linuxquestions.org/questions/blog/kingbeowulf-74138/qemu-usb-passthrough-with-specifics-for-iphone-37830/")),(0,i.kt)("p",null,"To create 97-iphone-rules, first run this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo nano /etc/udev/rules.d/97-iphone.rules\n")),(0,i.kt)("p",null,"Now add this to the new file in nano"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'SUBSYSTEMS=="usb", ATTRS{idVendor}=="05ac", ATTRS{idProduct}=="*",GROUP="users", MODE="0660"\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"05ac")," is the vendor ID from earlier. This specific vendor ID is used on nearly all iPhones."),(0,i.kt)("p",null,"Next, comment out all the lines in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/udev/rules.d/39-usbmuxd.rules"),". If the file is empty, that is fine."),(0,i.kt)("p",null,"For some people disabling gvfs-gphoto2 also helps this work."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo chmod 0000 /usr/lib/systemd/user/gvfs-gphoto2-volume-monitor.service\nsudo kill $(ps -A | grep gvfs.*gphoto.* | awk '{print $1}')\n")),(0,i.kt)("p",null,"Next, reload the udev rules"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo udevadm control -R\n")),(0,i.kt)("p",null,"Then add these lines to ",(0,i.kt)("inlineCode",{parentName:"p"},"basic.sh")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-usb \\\n-device usb-ehci,id=ehci \\\n-device usb-host,bus=ehci.0,vendorid=0x05ac,productid=0x12a8,guest-reset=false,id=iphone \\\n")),(0,i.kt)("p",null,"This is another instance where you need to input the vendor and product ids. In this case they are ",(0,i.kt)("inlineCode",{parentName:"p"},"05ac")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"12a8")," respectively."),(0,i.kt)("p",null,'When you connect your phone and unlock it you will see a "Trust this computer" message. You must trust the computer to be able to access specific iPhone features and have it appear in Xcode.'),(0,i.kt)("h2",{id:"pairing-the-ios-device-to-xcode"},"Pairing the iOS device to Xcode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open Xcode and go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Window  Devices and Simulators"),"."),(0,i.kt)("li",{parentName:"ul"},"Select your device and then select the Connect via network checkbox to pair your device:")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/10087985/xcode-doesnt-see-my-ios-device-but-itunes-does"},"https://stackoverflow.com/questions/10087985/xcode-doesnt-see-my-ios-device-but-itunes-does")))}h.isMDXComponent=!0}}]);