(function(){"use strict";var e={6594:function(e,t,o){var n=o(8935),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("NavBar"),null!=e.message?o("div",[o("b",[o("hr"),o("hr"),e._v(e._s(e.message)),o("hr"),o("hr")])]):e._e(),o("router-view"),o("small",[o("i",[e._v('0.0.1 - tabindex="-1" & type search & navigation | '),o("a",{attrs:{href:"https://github.com/scenaristeur/agent",target:"_blank"}},[e._v("contribute")]),e._v(" | "),o("a",{attrs:{href:"https://github.com/scenaristeur/agent/wiki",target:"_blank"}},[e._v("help")]),e._v(" | "),o("a",{attrs:{href:"https://youtu.be/YT61BcjGfwc",target:"_blank"}},[e._v("How To use 3dmindmap Video Demo")]),e._v(" | "),o("router-link",{attrs:{to:"/test"}},[e._v("Test")])],1)])],1)},s=[],i={name:"App",components:{NavBar:()=>o.e(236).then(o.bind(o,7236))},data(){return{message:null}},created(){if(this.$coreInit({name:"SuperCore"}),this.$route.query.source){let e=this.$route.query.source;console.log("source",e),this.$loadBrainFromSolid(e)}else this.$route.query.cid?this.loadBrainFromIpfs():(this.$checkSolidSession(),this.$store.dispatch("core/getNodes"))},methods:{loadBrainFromIpfs(){this.$route.query.cid&&(null!=this.ipfsNode?(this.$loadBrainFromIpfs(this.$route.query.cid),this.message=null):this.message="connecting to ipfs, could take 30s, please be patient (todo : fusion avec le graph existant)")}},watch:{ipfsNode(){this.loadBrainFromIpfs()}},computed:{ipfsNode(){return this.$store.state.core.ipfsNode}}},a=i,l=o(1001),c=(0,l.Z)(a,r,s,!1,null,null,null),d=c.exports,u=o(563);(0,u.z)("/agent/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("This app has been updated, please, close and reopen.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var p=o(2809),h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("CommandInput",{attrs:{fluid:"sm"}}),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("VisualisationView")],1),o("b-col",{attrs:{md:"6"}},[o("SideView")],1)],1),o("FabMenu"),o("ExternalSource")],1)},f=[],g={name:"HomeView",components:{VisualisationView:()=>o.e(26).then(o.bind(o,1026)),CommandInput:()=>o.e(230).then(o.bind(o,8230)),FabMenu:()=>o.e(118).then(o.bind(o,7405)),ExternalSource:()=>o.e(34).then(o.bind(o,3034)),SideView:()=>o.e(1).then(o.bind(o,5001))}},m=g,y=(0,l.Z)(m,h,f,!1,null,null,null),v=y.exports;n["default"].use(p.Z);const w=[{path:"/",name:"home",component:v}],b=new p.Z({mode:"history",base:"/agent/",routes:w});var k=b,x=o(5297),N=o(3628),$=o.n(N),j=o(5359);const O={install(e,t={}){let o=t.store;e.prototype.$coreInit=async function(e={}){let t=new j.QY(e);o.commit("core/setCore",t)},e.prototype.$spinnerAdd=function(e){o.commit("core/spinnerAdd",e)},e.prototype.$spinnerRemove=function(e){o.commit("core/spinnerRemove",e)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(O);var S=O,_=(o(6699),o(225)),P=o(3971),I=o(9953),B=o(3226);const A={install(e,t={}){let o=t.store,n=r();function r(){return{w:window.innerWidth>768?window.innerWidth/2:window.innerWidth,h:window.innerWidth>768?.9*window.innerHeight:.8*window.innerHeight}}function s(e){return null!=o.state.core.search&&o.state.core.search.text.length>0&&e.name.includes(o.state.core.search.text)}function i(e){console.log(e)}function a(e){let t,o,n=null,r=null,s=new B.YBo({color:e.color||Math.round(Math.random()*Math.pow(2,24)),transparent:!0,opacity:.75}),i=null;switch(e.shape){case"box":r=new B.DvJ(20,20,20);break;case"cylinder":r=new B.fHI(10,10,20);break;case"cone":r=new B.b_z(10,20);break;case"dodecahedron":r=new B.Kgo(10);break;case"sphere":r=new B.xo$(10);break;case"torus":r=new B.XvJ(10,2);break;case"torusKnot":r=new B.FE5(10,2);break;case"base64":t=new Image,t.src=e.base64,o=new B.xEZ,o.image=t,t.onload=function(){o.needsUpdate=!0},s=new B.xeV({map:o}),i=new B.jyi(s),i.scale.set(2,2);break;default:}if(null!=i)n=i;else if(null==r){const t=document.createElement("div");t.textContent=e.name,t.style.color=e.color||"#ffffff",t.className="node-label",n=new P.j(t)}else n=new B.Kj0(r,s);return n}async function l(t){e.prototype.$nodeFocus(t)}window.addEventListener("resize",(function(){null!=o.state.core.graph&&(n=r(),o.state.core.graph.width(n.w),o.state.core.graph.height(n.h))})),e.prototype.$zoomToFit=function(){o.state.core.graph.zoomToFit(10,10,(e=>{null==o.state.core.search||o.state.core.search.text.length>0&&e.name.includes(o.state.core.search.text)}))},e.prototype.$graphInit=async function(t){let r={nodes:[],links:[]},c=o.state.core.highlightNodes,d=o.state.core.highlightLinks,u=o.state.core.hoverNode,p=(0,_.Z)({extraRenderers:[new P.M]})(t.domElement).graphData(r);p.width(n.w).height(n.h).nodeLabel("name").nodeAutoColorBy("type").nodeColor((e=>s(e)?"yellow":c.has(e)?e===u?"rgb(255,0,0,1)":"rgba(255,160,0,0.8)":e.color)).onNodeClick((e=>l(e))).onLinkClick((e=>i(e))).nodeThreeObjectExtend((e=>void 0==e.shape||null==e.shape)).nodeThreeObject((e=>a(e))).linkCurvature("curvature").linkCurveRotation("rotation").linkThreeObjectExtend(!0).linkThreeObject((e=>{if(void 0!=e.label){const t=new I.Z(`${e.label}`);return t.color="lightgrey",t.textHeight=1.5,t}})).linkDirectionalArrowLength(3.5).linkDirectionalArrowRelPos(1).linkPositionUpdate(((e,{start:t,end:o})=>{if(void 0!=e){const n=Object.assign(...["x","y","z"].map((e=>({[e]:t[e]+(o[e]-t[e])/4}))));Object.assign(e.position,n)}})).linkWidth((e=>d.has(e)?4:1)).linkDirectionalParticles((e=>d.has(e)?4:0)).linkDirectionalParticleWidth(4).onNodeHover((t=>{!t&&!c.size||t&&u===t||(c.clear(),d.clear(),t&&c.add(t),u=t||null,e.prototype.$updateHighlight())})).onLinkHover((t=>{c.clear(),d.clear(),t&&(d.add(t),c.add(t.source),c.add(t.target)),e.prototype.$updateHighlight()})),o.commit("core/setGraph",p)},e.prototype.$nodeFocus=function(e){const t=50;let n={x:t,y:t,z:t};if(0!=e.x&&0!=e.y&&0!=e.z){const o=1+t/Math.hypot(e.x,e.y,e.z);n={x:e.x*o,y:e.y*o,z:e.z*o}}o.state.core.graph.cameraPosition(n,e,3e3);let r=o.state.core.nodes.find((t=>t.id==e.id));o.commit("core/setCurrentNode",r)},e.prototype.$updateHighlight=function(){let e=o.state.core.graph;e.nodeColor(e.nodeColor()).linkWidth(e.linkWidth()).linkDirectionalParticles(e.linkDirectionalParticles())}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(A);var C=A,T=o(1519);const E={install(e,t={}){function o(e,t,o){if(void 0==e.reverse&&(e.reverse={}),void 0==e.reverse[t])e.reverse[t]={id:o.id,name:o.name};else switch(typeof e.reverse[t]){case"string":console.log("TODO string",e.reverse[t]);break;default:if(Array.isArray(e.reverse[t]))e.reverse[t].push({id:o.id,name:o.name});else{let n=e.reverse[t];e.reverse[t]=[],e.reverse[t].push(n),e.reverse[t].push({id:o.id,name:o.name})}}return console.log(e),e}function n(e,t,o){console.log(typeof e[t],e[t],o);let n=o.name,r=o.id;if(void 0==e[t])e[t]={id:r,name:n};else switch(typeof e[t]){case"string":console.log("TODO string",e[t]),e[t]=[e[t]],e[t].push({id:r,name:n});break;default:if(Array.isArray(e[t]))e[t].push({id:r,name:n});else{let o=e[t];e[t]=[],e[t].push(o),e[t].push({id:r,name:n})}}return console.log(e),e}!t||console.log(t),e.prototype.$newNode=async function(t={}){if(void 0!=t.name&&t.name.startsWith("http")){console.log("search",t);let o=await e.prototype.$loadNeurone(t.name);return console.log("neurone",o),o}{let e={name:"http://xmlns.com/foaf/0.1/name",knows:"http://xmlns.com/foaf/0.1/knows","@base":"http://local/","@vocab":"https://scenaristeur.github.io/agent/",id:"@id",type:"@type",reverse:"@reverse",homepage:{"@id":"http://xmlns.com/foaf/0.1/homepage","@type":"@id"}},o={"@context":Object.assign(e,t["@context"]),id:t["@id"]||t.id||(0,T.Z)(),name:t.name&&t.name["@value"]||t.name||"",type:t.type||"neurone",homepage:"https://scenaristeur.github.io/agent/"};return void 0!=t.base64&&(o.shape="base64",o.base64=t.base64,o.type=t.type),void 0!=t.neurones&&(o.neurones=t.neurones),o}},e.prototype.$addProp=function(e){let t=e.node,o=e.propertie,n=e.value,r=t[o];return console.log(typeof r,r),void 0==r?t[o]=n:Array.isArray(r)?t[o].push(n):t[o]=[r,n],t},e.prototype.$addLink=function(e){console.log(e);let t=e.subject,r=e.predicate,s=e.object;return t=n(t,r,s),s=o(s,r,t),[t,s]}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(E);var F=E,D=o(8198),L=o(6732),H=o(5641),V=o(1071),Z=o(2413),R=o(3754);const z="solid_session_restore_url",W={install(e,t={}){let o=t.store;e.prototype.$checkSolidSession=async function(){localStorage.setItem(z,window.location.toString()),R.onSessionRestore((e=>{history.replaceState(null,"",e)})),await R.handleIncomingRedirect({restorePreviousSession:!0}).then((e=>{if(1==e.isLoggedIn){console.log(`Logged in with WebID [${e.webId}]`),o.commit("solid/setSession",e);let t=R.getDefaultSession();this.$getPodInfosFromSession(t),localStorage.setItem(z,"")}}))},e.prototype.$login=async function(e){console.log("login",e),R.getDefaultSession().info.isLoggedIn||await R.login({oidcIssuer:e,redirectUrl:window.location.href,clientName:"Verse"})},e.prototype.$logout=async function(){let e=R.getDefaultSession();await e.logout(),o.commit("solid/setSession",null),o.commit("solid/setPod",null)},e.prototype.$getPodInfosFromSession=async function(t){let n={};n.logged=t.info.isLoggedIn,n.logged?(n.webId=t.info.webId,n=await this.$getPodInfos(n),void 0==n.neuroneStore&&(n.neuroneStore=n.storage+"public/neurones/"),void 0==n.workspaces&&(n.workspaces=[]),o.commit("solid/setPod",n),null!=n.storage&&(n.brains=n.storage+"brains.json",e.prototype.$checkBrains())):o.commit("solid/setPod",null)},e.prototype.$getPodInfos=async function(e){try{const t=await(0,D.OE)(e.webId,{fetch:R.fetch});let o=await(0,L.YY)(t,e.webId);e.name=await(0,H.oX)(o,V.xY.name),e.friends=await(0,H.MQ)(o,V.xY.knows).map((e=>({webId:e}))),e.storage=await(0,H.Gr)(o,Z.WS.storage),e.photo=await(0,H.Gr)(o,V.Fv.hasPhoto),void 0==e.neuroneStore&&(e.neuroneStore=e.storage+"public/neurones/"),e.workspaces=[];let n=e.storage+"settings/publicTypeIndex.ttl";const r=await(0,D.OE)(n,{fetch:R.fetch});let s=await(0,L.oY)(r);for await(const i of s){let t=await(0,H.MQ)(i,"http://www.w3.org/ns/solid/terms#forClass");if(t.includes("https://scenaristeur.github.io/verse#Workspace")){console.log(i);let t={};t.name=await(0,H.oX)(i,V.AS.name),t.url=await(0,H.Gr)(i,Z.UG.instance),e.workspaces.push(t)}}}catch(t){console.log("erreur",t,e)}return console.log(e),await e}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(W);var M=W,G=o(2510),Y=o(3505);const J={install(e,t={}){let o=t.store;async function n(t){const n=t.map((async function(t){if(t.endsWith("/"))return void e.prototype.$loadBrainFromSolid(t);e.prototype.$spinnerAdd({id:"loading "+t});const n=await(0,G.hn)(t,{fetch:R.fetch});return new Promise((function(r,s){const i=new FileReader;i.onload=async()=>{try{let n=JSON.parse(i.result);await o.dispatch("core/saveNode",n),e.prototype.$spinnerRemove({id:"loading "+t}),r(n)}catch(n){s(n)}},i.onerror=e=>{s(e)},i.readAsText(n)}))}));await Promise.all(n),o.dispatch("core/getNodes")}function r(e){var t=e.lastIndexOf("/"),o=e.substring(t+1);return 0==o.length?r(e.slice(0,-1)):o}e.prototype.$saveBrainToSolid=async function(){if(console.log(o.state.core.nodes),null==o.state.solid.pod)alert("Please Login to your pod before trying to save this brain");else{let t=o.state.solid.pod.storage+"brains/";console.log(t);let n=prompt("Please confirm the path where to store the nodes",t);if(console.log(n),null!=n){n=n.endsWith("/")?n:n+="/",o.state.core.nodes.forEach((t=>{e.prototype.$spinnerAdd({id:"saving "+t.id})}));for await(const i of o.state.core.nodes){console.log(i.id,i),i["@context"]["@base"]=n;const t=await(0,G._u)(n+r(i.id),new Blob([JSON.stringify(i)],{type:"application/ld+json"}),{contentType:"application/ld+json",fetch:R.fetch});console.log(`File saved at ${(0,Y.LH)(t)}`),e.prototype.$spinnerRemove({id:"saving "+i.id})}e.prototype.$spinnerAdd({id:"saving "+o.state.solid.pod.brains});const t=await(0,G.hn)(o.state.solid.pod.brains,{fetch:R.fetch}),s=new FileReader;s.onload=async()=>{try{let i=JSON.parse(s.result),a=Date.now(),l={id:n,name:r(n),updated:a,checksum:1e3*Math.random()};var t=i.brains.findIndex((e=>e.id==l.id));-1===t?(l.created=a,i.brains.push(l)):Object.assign(i.brains[t],l),await(0,G._u)(o.state.solid.pod.brains,new Blob([JSON.stringify(i)],{type:"application/ld+json"}),{contentType:"application/ld+json",fetch:R.fetch}),e.prototype.$checkBrains(),e.prototype.$spinnerRemove({id:"saving "+o.state.solid.pod.brains})}catch(i){console.log(i)}},s.onerror=e=>{console.log(e)},s.readAsText(t)}else alert("saving to Solid Pod aborted")}},e.prototype.$loadBrainsFromWikidata=async function(e){console.log(e),e.forEach((async function(e){console.log(e);let t={id:e.url,name:e.item.aliases&&e.item.aliases[0]||e.item.label||e.text,color:"lightblue",url:e.url,source:"https://wikidata.org"};await o.dispatch("core/saveNode",t)})),await o.dispatch("core/getNodes")},e.prototype.$brainsFromPod=async function(t){let o=t.storage+"public/brains/";e.prototype.$spinnerAdd({id:"loading "+o});let n=null;try{n=await(0,D.OE)(o,{fetch:R.fetch});let e=await(0,D.kQ)(n,{fetch:R.fetch});return console.log(e),e}catch(r){console.log(r)}e.prototype.$spinnerRemove({id:"loading "+o})},e.prototype.$loadBrainFromSolid=async function(t){if(void 0==t){let e=null!=o.state.solid.pod?o.state.solid.pod.storage+"brains/":"https://solid.provider/brains_folder or example...";console.log(e),t=prompt("Load brain from ",e)}if(null!=t){console.log("load brain from",t),e.prototype.$spinnerAdd({id:"loading "+t});let o=null;try{o=await(0,D.OE)(t,{fetch:R.fetch});let e=await(0,D.kQ)(o,{fetch:R.fetch});console.log(e),await n(e)}catch(r){alert(r)}e.prototype.$spinnerRemove({id:"loading "+t})}},e.prototype.$checkBrains=async function(){e.prototype.$spinnerAdd({id:"checkBrains"});try{const e=await(0,G.hn)(o.state.solid.pod.brains,{fetch:R.fetch});console.log(e)}catch(t){let e={"@context":{name:"http://xmlns.com/foaf/0.1/name",knows:"http://xmlns.com/foaf/0.1/knows","@base":"http://local/","@vocab":"https://scenaristeur.github.io/agent/",id:"@id",type:"@type",reverse:"@reverse",homepage:{"@id":"http://xmlns.com/foaf/0.1/homepage","@type":"@id"}},id:(0,T.Z)(),name:"Brain Index",type:"brainIndex",brains:[],homepage:"https://scenaristeur.github.io/agent"};await(0,G._u)(o.state.solid.pod.brains,new Blob([JSON.stringify(e)],{type:"application/ld+json"}),{contentType:"application/ld+json",fetch:R.fetch})}try{const t=await(0,G.hn)(o.state.solid.pod.brains,{fetch:R.fetch}),n=new FileReader;n.onload=async()=>{try{let e=JSON.parse(n.result);o.commit("core/setBrains",e)}catch(e){console.log(e)}},n.onerror=e=>{console.log(e)},n.readAsText(t)}catch(t){console.log(t)}finally{e.prototype.$spinnerRemove({id:"checkBrains"})}},e.prototype.$loadNeurone=async function(t){e.prototype.$spinnerAdd({id:"loading "+t});const o=await(0,G.hn)(t,{fetch:R.fetch});return new Promise((function(n,r){const s=new FileReader;s.onload=async()=>{try{let o=JSON.parse(s.result);e.prototype.$spinnerRemove({id:"loading "+t}),n(o)}catch(o){r(o)}},s.onerror=e=>{r(e)},s.readAsText(o)}))}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(J);var q=J;const U={install(e,t={}){let o=t.store;console.log(o),e.prototype.$search=async function(e){console.log("searching ",e.text,o.state.core.nodes);let t=o.state.core.nodes,n=t.filter((t=>void 0!=t.name&&t.name.includes(e.text)));if(1==e.searchById){let o=t.filter((t=>t.id.includes(e.text)));n=n.concat(o)}return n}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(U);var Q=U,X=o(400),K=o.n(X),ee=o(8262),te=o(3266);o(44);n["default"].use($()),n["default"].use(S,{store:x.Z}),n["default"].use(C,{store:x.Z}),n["default"].use(F,{store:x.Z}),n["default"].use(M,{store:x.Z}),n["default"].use(q,{store:x.Z}),n["default"].use(Q,{store:x.Z}),n["default"].use(K(),{iconType:"MaterialDesign"}),n["default"].use(ee.XG7),n["default"].use(te.X),n["default"].config.productionTip=!1,new n["default"]({router:k,store:x.Z,render:e=>e(d)}).$mount("#app")},5359:function(e,t,o){o.d(t,{mY:function(){return a},QY:function(){return i}});var n=o(1519),r={"@context":{as:"https://www.w3.org/ns/activitystreams#",ve:"https://scenaristeur.github.io/verse#",id:"@id",type:"@type",name:"ve:name",age:"ve:age",url:"ve:url",privacy:"ve:privacy",properties:"ve:properties",links:"ve:links",synapses:"ve:synapses",created:"ve:created",updated:"ve:updated",synchronized:"ve:synchronized",previous:"ve:previous",next:"ve:next"},id:null,name:"",age:0,url:"",privacy:"private",type:null,properties:[],links:[],synapses:[],created:null,updated:null,synchronized:null,previous:null,next:null};class s{constructor(e={}){Object.assign(this,r),this.id=(0,n.Z)(),this.type="base",this.created=Date.now(),Object.assign(this,e)}debug(){console.log(this)}}class i extends s{constructor(e={}){super(e),void 0==e.type&&(this.type="core")}}class a extends s{constructor(e={}){super(e),void 0==e["type"]&&(this["type"]="command"),this.init(e.inputValue)}init(e){if(this.isValidUrl(e))this.type="url",this.value=e,this.isFile=this.isFile(e);else{let t=e.charAt(0),o="";switch(t){case"/":this.type="commande",this.value=e,this.inputNew="";break;case".":o=this.commandHistory[this.commandHistory.length-1],this.inputNew=o.s+" "+o.p+" "+o.o;break;case";":o=this.commandHistory[this.commandHistory.length-1],this.inputNew=o.s+" "+o.p+" ";break;case",":o=this.commandHistory[this.commandHistory.length-1],this.inputNew=o.s+" ";break;default:this.traiteTriplet(e)}}return this}traiteTriplet(e){var t={},o="";let n=e.slice(-1),r=e.slice(0,-1).split(" "),s=!0,i="",a=[];switch(r.forEach((function(e){e=e.trim(),e.startsWith('"')?(i="debut",a.push(e.substr(1))):e.endsWith('"')?(i="fin",a.push(a.pop()+" "+e.slice(0,-1))):"debut"==i?a.push(a.pop()+" "+e):a.push(e)})),a.length>0&&(r=a),n){case".":o="";break;case";":o=r[0].indexOf(" ")>-1?'"'+r[0]+'" ':r[0]+" ";break;case",":o=r[0].indexOf(" ")>-1?'"'+r[0]+'" ':r[0]+" ",r[1].indexOf(" ")>-1?o+='"'+r[1]+'" ':o+=r[1]+" ";break;case"-":o=r[2].indexOf(" ")>-1?'"'+r[2]+'" ':r[2]+" ";break;default:console.log("message to chat "+e),o="",s=!1}if(s){t.type="triplet";var l={};l.subject=r[0],l.predicate=r[1],l.object=r[2],t.value=l,t.inputNew=o}else t.type="message",t.value=e,t.inputNew=o;Object.assign(this,t)}isValidUrl(e){try{return new URL(e),!0}catch(t){return!1}}isFile(e){return e.split("/").pop().indexOf(".")>-1}}},5297:function(e,t,o){o.d(t,{Z:function(){return S}});var n=o(8935),r=o(4665);o(6699);const s="nodedb",i=1;let a;var l={async getDb(){return new Promise(((e,t)=>{if(a)return e(a);console.log("OPENING DB",a);let o=window.indexedDB.open(s,i);o.onerror=e=>{console.log("Error opening db",e),t("Error")},o.onsuccess=t=>{a=t.target.result,e(a)},o.onupgradeneeded=e=>{console.log("onupgradeneeded");let t=e.target.result;t.createObjectStore("nodes",{keyPath:"id"})}}))},async deleteNode(e){let t=await this.getDb();return new Promise((o=>{let n=t.transaction(["nodes"],"readwrite");n.oncomplete=()=>{o()};let r=n.objectStore("nodes");r.delete(e.id)}))},async clearStore(){console.log("clear store");try{let n=await this.getDb();var e=n.transaction(["nodes"],"readwrite"),t=e.objectStore("nodes"),o=t.clear();o.onsuccess=function(e){console.log(e)}}catch(n){alert(n)}await this.getNodes()},async getNodes(){let e=await this.getDb();return new Promise((t=>{let o=e.transaction(["nodes"],"readonly");o.oncomplete=()=>{t(r)};let n=o.objectStore("nodes"),r=[];n.openCursor().onsuccess=e=>{let t=e.target.result;t&&(r.push(t.value),t.continue())}}))},async saveNode(e){let t=await this.getDb();return new Promise((o=>{let n=t.transaction(["nodes"],"readwrite");n.oncomplete=()=>{o()};let r=n.objectStore("nodes");r.put(e)}))}},c=o(1519);const d="https://scenaristeur.github.io/agent/",u=()=>({core:void 0,currentNode:void 0,brain:void 0,brains:void 0,showBrainLoader:!1,graph:void 0,db:void 0,commandHistory:[],command:null,nodes:[],links:[],jsonldProps:["@context","id","reverse","type"],graphProps:["__ob__","__threeObj","index","vx","vy","vz","x","y","z"],spinner:[],ipfsNode:null,ipfs_cids:[],graph_cid:null,highlightNodes:new Set,highlightLinks:new Set,hoverNode:null,search:null,galaxy:null}),p={setGalaxy(e,t){e.galaxy=t},setIpfsNode(e,t){e.ipfsNode=t},setGraphCid(e,t){e.graph_cid=t},resetIpfsCid(e){e.ipfs_cids=[]},addIpfsCid(e,t){e.ipfs_cids.push(t)},setCore(e,t){e.c=t},setCurrentNode(e,t){e.currentNode=t},setBrain(e,t){console.log(t),e.brain=t},setBrains(e,t){e.brains=t,e.showBrainLoader=!0},setShowBrainLoader(e,t){e.showBrainLoader=t},setGraph(e,t){e.graph=t},setDb(e,t){e.db=t},setCommand(e,t){e.command=t},pushHistory(e,t){e.commandHistory.push(t)},setLinks(e,t){e.links=t},spinnerAdd(e,t){e.spinner.push(t)},spinnerRemove(e,t){e.spinner=e.spinner.filter((e=>e.id!=t.id))},resetSpinner(e){e.spinner=[]},setSearch(e,t){e.search=t,n["default"].prototype.$updateHighlight(),n["default"].prototype.$zoomToFit()},setHighlightNodes(e,t){e.highlightNodes.clear(),e.highlightLinks.clear(),t.forEach((t=>{console.log(t),e.highlightNodes.add(t)})),n["default"].prototype.$updateHighlight()}},h={async pushCommandHistory(e,t){if(e.commit("setCommand",t),e.commit("pushHistory",t),"triplet"==t.type){let o=e.state.nodes.find((e=>e.name==t.value.subject));if(void 0==o&&(o=await n["default"].prototype.$newNode({name:t.value.subject})),t.value.predicate.startsWith(".")){let r=t.value.predicate.slice(1),s=await n["default"].prototype.$addProp({node:o,propertie:r,value:t.value.object});await e.dispatch("saveNode",s),await e.dispatch("getNodes")}else{let r=e.state.nodes.find((e=>e.id==t.value.object||e.name==t.value.object));void 0==r&&(r=await n["default"].prototype.$newNode({name:t.value.object}));let s=await n["default"].prototype.$addLink({subject:o,predicate:t.value.predicate,object:r});s.forEach((async function(t){await e.dispatch("saveNode",t)})),await e.dispatch("getNodes")}}},async newNode(e){let t=await n["default"].prototype.$newNode();e.commit("setCurrentNode",t)},async saveNode(e,t){void 0==t["@context"]&&(t["@context"]={}),void 0==t["@context"]["@vocab"]&&(t["@context"]["@vocab"]=d);try{await l.saveNode(t)}catch(o){alert(o)}},async removeNode(e,t){if(console.log("removing",t),console.log("todo remove backlinks/reverse"),t.reverse){console.log(t.reverse);for(const[e,o]of Object.entries(t.reverse)){let n=Array.isArray(o)?o:[o];console.log(n),console.log("must remove",t.id,"in",n,e),console.log("get each node from id ")}}try{await l.deleteNode(t),e.state.links=e.state.links.filter((e=>e.source!=t.id&&e.target!=t.id)),e.state.nodes=e.state.nodes.filter((e=>e.id!=t.id)),await e.dispatch("getNodes")}catch(o){alert(o)}},async removeAllNodes(e){try{e.state.links=[],e.state.nodes.forEach((async function(e){await l.deleteNode(e)})),e.state.nodes=[],await e.dispatch("getNodes")}catch(t){alert(t)}},async getNodes(e){let t=await l.getNodes(),o=[];console.log("nodes in db",t);let n=null;t.forEach((t=>{void 0==t.type&&(t.type="neurone"),void 0==t["@context"]&&(t["@context"]={}),void 0==t["@context"]["@vocab"]&&(t["@context"]["@vocab"]=d);var r=e.state.nodes.findIndex((e=>e.id==t.id));-1===r?e.state.nodes.push(t):Object.assign(e.state.nodes[r],t);for(let[n,s]of Object.entries(t))if(!e.state.jsonldProps.includes(n)&&!e.state.graphProps.includes(n)){let e=Math.random()*Math.PI;if(Array.isArray(s))for(let r of s)o.push({source:t.id,target:r.id,label:n,curvature:.3,rotation:e});else"object"==typeof s&&void 0!=s.id&&o.push({source:t.id,target:s.id,label:n,curvature:.3,rotation:e})}n=t}));let r=o.filter((t=>e.state.nodes.findIndex((e=>e.id==t.target))>-1)),s=o.filter((t=>-1===e.state.nodes.findIndex((e=>e.id==t.target))));console.log("validlinks, otherlinks",r,s),e.commit("setLinks",r),console.log("last",n)},async saveBrain(e){let{nodes:t,links:o}=e.state.graph.graphData();console.log(t,o);let n=[];for(let s of t)console.log(s),delete s.__ob__,delete s.__threeObj,void 0==s.id&&(s.id=(0,c.Z)()),void 0==s.created&&(s.created=Date.now()),s.updated=Date.now(),n.push(s.id),console.log(s),await l.saveNode(s);let r={id:(0,c.Z)(),nodes:n,type:"brain",color:"#fffff"};await l.saveNode(r)},switchTo(e,t){let o=e.state.nodes.find((e=>e.id==t));e.commit("setCurrentNode",o)}};var f={namespaced:!0,state:u,actions:h,mutations:p};const g=()=>({session:null,pod:null}),m={setSession(e,t){console.log("session",t),e.session=t},setPod(e,t){console.log("pod",t),e.pod=t}},y={};var v={namespaced:!0,state:g,actions:y,mutations:m};const w=()=>({showTerminal:!1}),b={toggleTerminal(e){e.showTerminal=!e.showTerminal}},k={};var x={namespaced:!0,state:w,actions:k,mutations:b};const N=()=>({rootNode:"test-brains",gunBrains:[]}),$={setGunBrains(e,t){e.gunBrains=t},async addGunBrains(e,t){console.log(t);const o=await e.gunBrains.findIndex((e=>e.key==t.key));if(console.log(o),-1===o){let o=Object.assign({},t.node);o.key=t.key,await e.gunBrains.push(o)}},setRootNode(e,t){e.rootNode=t}},j={};var O={namespaced:!0,state:N,actions:j,mutations:$};n["default"].use(r.ZP);var S=new r.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{core:f,solid:v,terminal:x,gun:O}})}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,s){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],s=e[d][2];for(var a=!0,l=0;l<n.length;l++)(!1&s||i>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(a=!1,s<i&&(i=s));if(a){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,r,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var s=Object.create(null);o.r(s);var i={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){i[e]=function(){return n[e]}}));return i["default"]=function(){return n},o.d(s,i),s}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{1:"605bab36",26:"d40334d3",34:"f29bbf12",100:"f1fb09c0",118:"c23d282c",206:"6f32ae91",214:"02dfcd0c",230:"fdc2044a",236:"6d4dcf0f",267:"a9e164ed",444:"93b855f6",486:"53930c1a",578:"a8a0cda3",601:"955f0abd",793:"08f06a6a",915:"7ae161c8",995:"c4b220f3"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{26:"9af57d6c",206:"2bf21112",236:"3dd4c5f9",444:"cc4d8120",578:"aa5514ea",995:"728fbe8d"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="agent:";o.l=function(n,r,s,i){if(e[n])e[n].push(r);else{var a,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+s){a=u;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+s),a.src=n),e[n]=[r];var p=function(t,o){a.onerror=a.onload=null,clearTimeout(h);var r=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(o)})),t)return t(o)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/agent/"}(),function(){var e=function(e,t,o,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(s){if(r.onerror=r.onload=null,"load"===s.type)o();else{var i=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=a,r.parentNode.removeChild(r),n(l)}};return r.onerror=r.onload=s,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],s=r.getAttribute("data-href");if(s===e||s===t)return r}},n=function(n){return new Promise((function(r,s){var i=o.miniCssF(n),a=o.p+i;if(t(i,a))return r();e(n,a,r,s)}))},r={143:0};o.f.miniCss=function(e,t){var o={26:1,206:1,236:1,444:1,578:1,995:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=s);var i=o.p+o.u(t),a=new Error,l=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",a.name="ChunkLoadError",a.type=s,a.request=i,r[1](a)}};o.l(i,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,i=n[0],a=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)var d=l(o)}for(t&&t(n);c<i.length;c++)s=i[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},n=self["webpackChunkagent"]=self["webpackChunkagent"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6594)}));n=o.O(n)})();
//# sourceMappingURL=app.4df8418a.js.map