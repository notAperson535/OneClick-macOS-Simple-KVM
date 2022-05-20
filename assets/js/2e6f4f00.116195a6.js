"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[824],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(h,i(i({ref:t},p),{},{components:r})):o.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3814:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"Start Here!"},c="Start Here!",l={unversionedId:"start-here",id:"start-here",title:"Start Here!",description:"Documentation to set up a simple macOS VM in QEMU, accelerated by KVM.",source:"@site/docs/start-here.md",sourceDirName:".",slug:"/start-here",permalink:"/docs/start-here",draft:!1,editUrl:"https://github.com/notAperson535/OneClick-macOS-Simple-KVM/tree/docs/docs/docs/start-here.md",tags:[],version:"current",frontMatter:{title:"Start Here!"},sidebar:"docs",next:{title:"FAQs",permalink:"/docs/FAQs"}},p={},u=[{value:"IMPORTANT",id:"important",level:2},{value:"4/27/2022 - This repository used to be attached to macOS-Simple-KVM as a fork, but do to a number of reasons I have decided to detach it. If this causes any problems, specifically in the git CLI, then feel free to post and issue and I will respond as soon as I can.",id:"4272022---this-repository-used-to-be-attached-to-macos-simple-kvm-as-a-fork-but-do-to-a-number-of-reasons-i-have-decided-to-detach-it-if-this-causes-any-problems-specifically-in-the-git-cli-then-feel-free-to-post-and-issue-and-i-will-respond-as-soon-as-i-can",level:4},{value:"Using This Repository",id:"using-this-repository",level:2},{value:"Migrating (Coming from other repositories)",id:"migrating-coming-from-other-repositories",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"start-here"},"Start Here!"),(0,a.kt)("p",null,"Documentation to set up a simple macOS VM in QEMU, accelerated by KVM."),(0,a.kt)("p",null,"By: notAperson"),(0,a.kt)("p",null,"The original maker is ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/foxletfox"},"@FoxletFox"),", many others helped too. You can donate to him ",(0,a.kt)("a",{parentName:"p",href:"https://commerce.coinbase.com/checkout/96dc5777-0abf-437d-a9b5-a78ae2c4c227"},"on Coinbase")," or ",(0,a.kt)("a",{parentName:"p",href:"https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=QFXXKKAB2B9MA&item_name=macOS-Simple-KVM"},"Paypal!"),"."),(0,a.kt)("p",null,"I did not make the download script, Kholia did."),(0,a.kt)("p",null,"New to macOS and KVM? Check ",(0,a.kt)("a",{parentName:"p",href:"/docs/FAQs"},"the FAQs.")),(0,a.kt)("h2",{id:"important"},"IMPORTANT"),(0,a.kt)("h4",{id:"4272022---this-repository-used-to-be-attached-to-macos-simple-kvm-as-a-fork-but-do-to-a-number-of-reasons-i-have-decided-to-detach-it-if-this-causes-any-problems-specifically-in-the-git-cli-then-feel-free-to-post-and-issue-and-i-will-respond-as-soon-as-i-can"},"4/27/2022 - This repository used to be attached to ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/foxlet/macOS-Simple-KVM"},"macOS-Simple-KVM")," as a fork, but do to a number of reasons I have decided to detach it. If this causes any problems, specifically in the git CLI, then feel free to post and issue and I will respond as soon as I can."),(0,a.kt)("p",null,"You must download or clone this GitHub repository before you begin\nDo not use forks of ",(0,a.kt)("inlineCode",{parentName:"p"},"notAperson535/OneClick-macOS-Simple-KVM")," as I update this repository a lot, and forks are usually behind."),(0,a.kt)("p",null,"If you do not see files in this guide, or if you want to update your version, which I recommend doing at least one a month, run this command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git pull --rebase\n")),(0,a.kt)("p",null,"If that throws an error, try this command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git pull origin master\n")),(0,a.kt)("h2",{id:"using-this-repository"},"Using This Repository"),(0,a.kt)("p",null,"You have three options for using this repository, the ",(0,a.kt)("a",{parentName:"p",href:"/docs/manualmethod/"},"manual method"),", the ",(0,a.kt)("a",{parentName:"p",href:"/docs/oneclickmethod/"},"OneClick method"),", or ",(0,a.kt)("a",{parentName:"p",href:"/docs/windows-install/"},"installing on Windows"),"."),(0,a.kt)("h2",{id:"migrating-coming-from-other-repositories"},"Migrating (Coming from other repositories)"),(0,a.kt)("p",null,"If you want to come from other repositories, ",(0,a.kt)("a",{parentName:"p",href:"/docs/migrating"},"the guide is here")))}m.isMDXComponent=!0}}]);