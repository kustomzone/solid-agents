if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>n(e,i),u={module:{uri:i},exports:t,require:o};s[i]=Promise.all(l.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"agent"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/agent/css/179.14ec3010.css",revision:null},{url:"/agent/css/569.9af57d6c.css",revision:null},{url:"/agent/css/app.53a9e9c7.css",revision:null},{url:"/agent/css/chunk-vendors.339c5200.css",revision:null},{url:"/agent/index.html",revision:"b1f93ae628752472a33324d47ceec542"},{url:"/agent/js/135.136ea871.js",revision:null},{url:"/agent/js/179.7a75756d.js",revision:null},{url:"/agent/js/181.4d0fdfb5.js",revision:null},{url:"/agent/js/569.f3936ae4.js",revision:null},{url:"/agent/js/778.bc203d4b.js",revision:null},{url:"/agent/js/779.25318e3c.js",revision:null},{url:"/agent/js/about.3d59b4d7.js",revision:null},{url:"/agent/js/app.c045f270.js",revision:null},{url:"/agent/manifest.json",revision:"505510aa5e7715715ad0b6916dd6124c"},{url:"/agent/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
