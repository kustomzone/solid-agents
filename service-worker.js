if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const a=s=>n(s,i),t={module:{uri:i},exports:u,require:a};e[i]=Promise.all(l.map((s=>t[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-2d118ab0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"agent"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/agent/css/170.728fbe8d.css",revision:null},{url:"/agent/css/194.3dd4c5f9.css",revision:null},{url:"/agent/css/235.2bf21112.css",revision:null},{url:"/agent/css/26.9af57d6c.css",revision:null},{url:"/agent/css/578.aa5514ea.css",revision:null},{url:"/agent/css/756.cc4d8120.css",revision:null},{url:"/agent/css/app.53a9e9c7.css",revision:null},{url:"/agent/css/chunk-vendors.6516fab7.css",revision:null},{url:"/agent/index.html",revision:"580a6722d85e207806a6a83e5b093f5b"},{url:"/agent/js/118.6629ef40.js",revision:null},{url:"/agent/js/162.b539f018.js",revision:null},{url:"/agent/js/170.62f2c102.js",revision:null},{url:"/agent/js/171.6ccc4f0b.js",revision:null},{url:"/agent/js/194.19f30d59.js",revision:null},{url:"/agent/js/214.02dfcd0c.js",revision:null},{url:"/agent/js/235.a0b5a8ba.js",revision:null},{url:"/agent/js/250.145f525d.js",revision:null},{url:"/agent/js/26.81483ee3.js",revision:null},{url:"/agent/js/267.7a064b82.js",revision:null},{url:"/agent/js/325.1e20ec4f.js",revision:null},{url:"/agent/js/34.b9966dc6.js",revision:null},{url:"/agent/js/358.c9b5c12c.js",revision:null},{url:"/agent/js/430.a4fa224e.js",revision:null},{url:"/agent/js/444.accd6ef8.js",revision:null},{url:"/agent/js/536.104fc45b.js",revision:null},{url:"/agent/js/57.43d8a2f4.js",revision:null},{url:"/agent/js/578.a8a0cda3.js",revision:null},{url:"/agent/js/611.77f68a83.js",revision:null},{url:"/agent/js/627.a1f5030c.js",revision:null},{url:"/agent/js/650.cbc35fb8.js",revision:null},{url:"/agent/js/756.1ec906a7.js",revision:null},{url:"/agent/js/811.ebc2fea4.js",revision:null},{url:"/agent/js/88.c89e369c.js",revision:null},{url:"/agent/js/97.a435ad36.js",revision:null},{url:"/agent/js/app.f19872aa.js",revision:null},{url:"/agent/js/test.13203f87.js",revision:null},{url:"/agent/manifest.json",revision:"b7c324c9d792aac96df56e51ee506dbf"},{url:"/agent/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map