"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[131],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4941:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],l={title:"Installing macOS",permalink:"/installing-macos/"},s=void 0,c={unversionedId:"installing-macos",id:"installing-macos",title:"Installing macOS",description:"Loading the VM",source:"@site/docs/installing-macos.md",sourceDirName:".",slug:"/installing-macos",permalink:"/docs/installing-macos",draft:!1,editUrl:"https://github.com/notAperson535/OneClick-macOS-Simple-KVM/tree/docs/docs/docs/installing-macos.md",tags:[],version:"current",frontMatter:{title:"Installing macOS",permalink:"/installing-macos/"},sidebar:"docs",previous:{title:"Installing the VM",permalink:"/docs/category/installing-the-vm"},next:{title:"Finishing Up",permalink:"/docs/finishing-up"}},u={},p=[{value:"Loading the VM",id:"loading-the-vm",level:2},{value:"Partitioning in Disk Utility",id:"partitioning-in-disk-utility",level:2},{value:"Installing",id:"installing",level:2},{value:"Setup Screen (finally)",id:"setup-screen-finally",level:2},{value:"Now head over to Finishing Up to see how to set up the VM to be faster and have more features like sound and display acceleration",id:"now-head-over-to-finishing-up-to-see-how-to-set-up-the-vm-to-be-faster-and-have-more-features-like-sound-and-display-acceleration",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"loading-the-vm"},"Loading the VM"),(0,r.kt)("p",null,"Load up the VM with ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo ./basic.sh")," to start up the VM. for Windows, you would run ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo HEADLESS=1 ./basic.sh"),", then open ",(0,r.kt)("a",{parentName:"p",href:"https://www.realvnc.com/connect/download/viewer/"},"VNC Viewer"),", and connect to ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:5900"),". "),(0,r.kt)("p",null,"Then select the macOS Installer in OpenCore, and hit enter."),(0,r.kt)("h2",{id:"partitioning-in-disk-utility"},"Partitioning in Disk Utility"),(0,r.kt)("p",null,"You now must format the disk, otherwise the macOS installer will not be able to find you drive. Once you get to the macOS setup screen, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Disk Utility"),", and then select the biggest drive, it should be around 64 gigabytes or whatever you specified when you created ",(0,r.kt)("inlineCode",{parentName:"p"},"macOS.qcow2")," (this is only for the manual method, the one-click method does this automatically). Then select ",(0,r.kt)("inlineCode",{parentName:"p"},"Erase")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Format"),", depending on which you see, and make sure to format the disk as macOS Extended Journaled (NOT case-sensitive). You should also name it something like ",(0,r.kt)("inlineCode",{parentName:"p"},"Macintosh SSD"),". Once you are done formatting, close out of Disk Utility and move on to the next step."),(0,r.kt)("h2",{id:"installing"},"Installing"),(0,r.kt)("p",null,'Now select the "Reinstall macOS", and open it. Go through the setup screen, and once you get there select the disk you just formatted. Then continue with the setup, it may hang at "Less than a minute remaining" for a while, it\'s not stuck, just be patient.'),(0,r.kt)("h2",{id:"setup-screen-finally"},"Setup Screen (finally)"),(0,r.kt)("p",null,"Once you get to the setup screen, you will probably notice that it is very laggy, this is ok, as it will get much faster once you get through it. A reboot is always reccomended after you are done installing."),(0,r.kt)("h2",{id:"now-head-over-to-finishing-up-to-see-how-to-set-up-the-vm-to-be-faster-and-have-more-features-like-sound-and-display-acceleration"},(0,r.kt)("a",{parentName:"h2",href:"/docs/finishing-up"},"Now head over to Finishing Up to see how to set up the VM to be faster and have more features like sound and display acceleration")),(0,r.kt)("p",null,"(Don't skip this)"))}h.isMDXComponent=!0}}]);