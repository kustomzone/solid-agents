if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>n(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(r.map((e=>u[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"agent"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/agent/css/425.9af57d6c.css",revision:null},{url:"/agent/css/app.53a9e9c7.css",revision:null},{url:"/agent/css/chunk-vendors.339c5200.css",revision:null},{url:"/agent/index.html",revision:"ef776194625359d9d93e2a2f20eea8fb"},{url:"/agent/js/425.b34aa688.js",revision:null},{url:"/agent/js/8.3bd573d9.js",revision:null},{url:"/agent/js/836.48dfeb2e.js",revision:null},{url:"/agent/js/915.273e4c25.js",revision:null},{url:"/agent/js/about.3d59b4d7.js",revision:null},{url:"/agent/js/app.8a05138a.js",revision:null},{url:"/agent/js/chunk-vendors.98e71b93.js",revision:null},{url:"/agent/manifest.json",revision:"505510aa5e7715715ad0b6916dd6124c"},{url:"/agent/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
