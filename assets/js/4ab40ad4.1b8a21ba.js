"use strict";(self.webpackChunkblood_magic_docs=self.webpackChunkblood_magic_docs||[]).push([[221],{3905:(e,t,o)=>{o.d(t,{Zo:()=>A,kt:()=>b});var i=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,r=function(e,t){if(null==e)return{};var o,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},A=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,A=s(e,["components","mdxType","originalType","parentName"]),u=l(o),d=r,b=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return o?i.createElement(b,n(n({ref:t},A),{},{components:o})):i.createElement(b,n({ref:t},A))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,n=new Array(a);n[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,n[1]=s;for(var l=2;l<a;l++)n[l]=o[l];return i.createElement.apply(null,n)}return i.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2805:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=o(7462),r=(o(7294),o(3905));const a={title:"Blocks"},n=void 0,s={unversionedId:"misc/block",id:"misc/block",title:"Blocks",description:"Bloodstone Bricks",source:"@site/docs/14-misc/03-block.md",sourceDirName:"14-misc",slug:"/misc/block",permalink:"/BloodMagic-Docs/misc/block",draft:!1,editUrl:"https://github.com/luiq54/BloodMagic-Docs/edit/master/docs/14-misc/03-block.md",tags:[],version:"current",lastUpdatedBy:"luiq54",lastUpdatedAt:1672753356,formattedLastUpdatedAt:"Jan 3, 2023",sidebarPosition:3,frontMatter:{title:"Blocks"},sidebar:"tutorialSidebar",previous:{title:"Basic Ore Processing",permalink:"/BloodMagic-Docs/misc/ore-processing"},next:{title:"Bucket of life",permalink:"/BloodMagic-Docs/misc/bucket-life"}},c={},l=[{value:"Bloodstone Bricks",id:"bloodstone-bricks",level:2},{value:"Teleposers",id:"teleposers",level:2}],A={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"bloodstone-bricks"},"Bloodstone Bricks"),(0,r.kt)("p",null,"Bloodstone Bricks are a decorative block, and used as the capstones for the Tier-4 ",(0,r.kt)("a",{parentName:"p",href:"#the-blood-altar"},"Blood Altar"),"."),(0,r.kt)("p",null,"They require Weak Blood Shards, which can be made by putting a ",(0,r.kt)("a",{parentName:"p",href:"#saturated-tau"},"Saturated Tau")," into an ",(0,r.kt)("a",{parentName:"p",href:"#alchemical-reaction-chamber"},"Alchemical Reaction Chamber")," with a Sanguine Reverter in it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:o(3070).Z,width:"360",height:"440"})),(0,r.kt)("h2",{id:"teleposers"},"Teleposers"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Teleposers")," allow for a form of Redstone Controlled teleportation. Simply craft a Teleposition Focus (below), bind it to your target teleposer, place it in another teleposer, and apply a redstone signal to the teleposer with a focus in it. Anything - blocks, items, entities, players - in a defined area above the two teleposers will be swapped."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:o(3496).Z,width:"314",height:"215"})),(0,r.kt)("p",null,"Nothing comes for free, however; transporting blocks or entities via the teleposer will cost 1 LP each for every two blocks traversed, to a maximum of 1,000 LP per block/entity, or 10,000 LP total."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:o(7251).Z,width:"316",height:"219"})),(0,r.kt)("p",null,"The basic _Teleposition Focus _will swap anything in a 1x1x1 block area above the two teleposers."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:o(8095).Z,width:"317",height:"214"})),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Enhanced Teleposition Focus")," will swap anything in a 3x3x3 block area centred directly above the two teleposers."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:o(4566).Z,width:"302",height:"188"})),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Reinforced Teleposition Focus")," will swap anything in a 5x5x5 block area centred directly above the two teleposers."),(0,r.kt)("p",null,"Teleposers can be linked one-way (such that a redstone signal to the exiting Teleposer does nothing), two-way (such that each Teleposer has a Focus in it linking to the other teleposer, making you teleport back and forth at a redstone signal from either end), or they can even be chained - A to B to C and back to A. From base-traversing elevator systems to complex underground labyrinths, go nuts!"))}u.isMDXComponent=!0},3070:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/1-db457e98163a311193c77b8efdb9468a.png"},3496:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/2-3ab0c0db3da3a8f8c368fc6a33eb8cb1.png"},7251:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/3-59b4565fde27dd71d5707b1e030de3b9.png"},8095:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/4-08753b94979beb4e21ed7407a8af87dd.png"},4566:(e,t,o)=>{o.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);