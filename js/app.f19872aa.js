(function(){var e={1661:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1661,e.exports=t},1367:function(e,t,o){"use strict";var n=o(8935),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("NavBar"),null!=e.message?o("div",[o("b",[o("hr"),o("hr"),e._v(e._s(e.message)),o("hr"),o("hr")])]):e._e(),o("router-view"),o("small",[o("i",[e._v("0.0.1 - soukai layout | "),o("a",{attrs:{href:"https://github.com/scenaristeur/agent",target:"_blank"}},[e._v("contribute")]),e._v(" | "),o("a",{attrs:{href:"https://github.com/scenaristeur/agent/wiki",target:"_blank"}},[e._v("help")]),e._v(" | "),o("a",{attrs:{href:"https://youtu.be/YT61BcjGfwc",target:"_blank"}},[e._v("How To use 3dmindmap Video Demo")]),e._v(" | "),o("router-link",{attrs:{to:"/test"}},[e._v("Test")])],1)])],1)},r=[],i=o(476),s={name:"App",components:{NavBar:()=>o.e(194).then(o.bind(o,6194))},data(){return{message:null}},created(){if(this.$coreInit({name:"SuperCore"}),this.$route.query.source){let e=this.$route.query.source;i.log("source",e),this.$loadBrainFromSolid(e)}else this.$route.query.cid?this.loadBrainFromIpfs():(this.$checkSolidSession(),this.$store.dispatch("core/getNodes"))},methods:{loadBrainFromIpfs(){this.$route.query.cid&&(null!=this.ipfsNode?(this.$loadBrainFromIpfs(this.$route.query.cid),this.message=null):this.message="connecting to ipfs, could take 30s, please be patient (todo : fusion avec le graph existant)")}},watch:{ipfsNode(){this.loadBrainFromIpfs()}},computed:{ipfsNode(){return this.$store.state.core.ipfsNode}}},d=s,l=o(1001),c=(0,l.Z)(d,a,r,!1,null,null,null),u=c.exports,p=o(563),f=o(476);(0,p.z)("/agent/service-worker.js",{ready(){f.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){f.log("Service worker has been registered.")},cached(){f.log("Content has been cached for offline use.")},updatefound(){f.log("New content is downloading.")},updated(){f.log("New content is available; please refresh."),alert("This app has been updated, please, close and reopen.")},offline(){f.log("No internet connection found. App is running in offline mode.")},error(e){f.error("Error during service worker registration:",e)}});var h=o(2809),g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("CommandInput",{attrs:{fluid:"sm"}}),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("VisualisationView")],1),o("b-col",{attrs:{md:"6"}},[o("SideView")],1)],1),o("FabMenu"),o("ExternalSource")],1)},m=[],y={name:"HomeView",components:{VisualisationView:()=>o.e(26).then(o.bind(o,1026)),CommandInput:()=>o.e(97).then(o.bind(o,4097)),FabMenu:()=>o.e(118).then(o.bind(o,7405)),ExternalSource:()=>o.e(34).then(o.bind(o,3034)),SideView:()=>o.e(611).then(o.bind(o,611))}},w=y,v=(0,l.Z)(w,g,m,!1,null,null,null),b=v.exports;n["default"].use(h.Z);const k=[{path:"/",name:"home",component:b},{path:"/test",name:"test",component:()=>o.e(43).then(o.bind(o,9683))}],N=new h.Z({mode:"history",base:"/agent/",routes:k});var x=N,$=o(5297);let j=[{name:"gundb",onCreated:{action:"$gunListen"},installed:null,version:null,type:"gundb",state:null,active:!1},{name:"browser"},{name:"graph3d"},{name:"indexeddb"},{name:"Solid Public"},{name:"Solid Pod"},{name:"Solid Friends",active:!1},{name:"Solid Notification"},{name:"Wikidata"},{name:"realtime"},{name:"automerge"},{name:"ipfs",onCreated:{action:"$initIpfs"},active:!0},{name:"pinata"},{name:"safe"},{name:"darkweb"},{name:"excel/ods"},{name:"notion"},{name:"upload"},{name:"url_param"},{name:"Persée"},{name:"sparqlanything"},{name:"semapps"},{name:"websocket"},{name:"socket.io"},{name:"matrix-crdt"},{name:"jmv"},{name:"soukai"}];class O{constructor(){}init(){this.worlds=j}}var S=o(476);const _={install(e,t={}){let o=t.store;S.log(o);let n=new O;n.init(),S.log(n),o.commit("core/setGalaxy",n)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(_);var I=_,P=o(3628),B=o.n(P),A=o(5359);const C={install(e,t={}){let o=t.store;e.prototype.$coreInit=async function(e={}){let t=new A.QY(e);o.commit("core/setCore",t)},e.prototype.$spinnerAdd=function(e){o.commit("core/spinnerAdd",e)},e.prototype.$spinnerRemove=function(e){o.commit("core/spinnerRemove",e)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(C);var T=C,E=(o(6699),o(225)),D=o(3971),F=o(9953),V=o(3226),L=o(476);const H={install(e,t={}){let o=t.store,n=a();function a(){return{w:window.innerWidth>768?window.innerWidth/2:window.innerWidth,h:window.innerWidth>768?.9*window.innerHeight:.8*window.innerHeight}}function r(e){return null!=o.state.core.search&&o.state.core.search.text.length>0&&e.name.includes(o.state.core.search.text)}function i(e){L.log(e)}function s(e){let t,o,n=null,a=null,r=new V.YBo({color:e.color||Math.round(Math.random()*Math.pow(2,24)),transparent:!0,opacity:.75}),i=null;switch(e.shape){case"box":a=new V.DvJ(20,20,20);break;case"cylinder":a=new V.fHI(10,10,20);break;case"cone":a=new V.b_z(10,20);break;case"dodecahedron":a=new V.Kgo(10);break;case"sphere":a=new V.xo$(10);break;case"torus":a=new V.XvJ(10,2);break;case"torusKnot":a=new V.FE5(10,2);break;case"base64":t=new Image,t.src=e.base64,o=new V.xEZ,o.image=t,t.onload=function(){o.needsUpdate=!0},r=new V.xeV({map:o}),i=new V.jyi(r),i.scale.set(2,2);break;default:}if(null!=i)n=i;else if(null==a){const t=document.createElement("div");t.textContent=e.name,t.style.color=e.color||"#ffffff",t.className="node-label",n=new D.j(t)}else n=new V.Kj0(a,r);return n}async function d(e){L.log("node",e);const t=40;let n={x:t,y:t,z:t};if(0!=e.x&&0!=e.y&&0!=e.z){const o=1+t/Math.hypot(e.x,e.y,e.z);n={x:e.x*o,y:e.y*o,z:e.z*o}}o.state.core.graph.cameraPosition(n,e,3e3);let a=o.state.core.nodes.find((t=>t.id==e.id));o.commit("core/setCurrentNode",a)}window.addEventListener("resize",(function(){null!=o.state.core.graph&&(n=a(),o.state.core.graph.width(n.w),o.state.core.graph.height(n.h))})),e.prototype.$graphInit=async function(t){let a={nodes:[],links:[]},l=o.state.core.highlightNodes,c=o.state.core.highlightLinks,u=o.state.core.hoverNode,p=(0,E.Z)({extraRenderers:[new D.M]})(t.domElement).graphData(a);p.width(n.w).height(n.h).nodeLabel("name").nodeAutoColorBy("type").nodeColor((e=>r(e)?"yellow":l.has(e)?e===u?"rgb(255,0,0,1)":"rgba(255,160,0,0.8)":e.color)).onNodeClick((e=>d(e))).onLinkClick((e=>i(e))).nodeThreeObjectExtend((e=>void 0==e.shape||null==e.shape)).nodeThreeObject((e=>s(e))).linkCurvature("curvature").linkCurveRotation("rotation").linkThreeObjectExtend(!0).linkThreeObject((e=>{if(void 0!=e.label){const t=new F.Z(`${e.label}`);return t.color="lightgrey",t.textHeight=1.5,t}})).linkDirectionalArrowLength(3.5).linkDirectionalArrowRelPos(1).linkPositionUpdate(((e,{start:t,end:o})=>{if(void 0!=e){const n=Object.assign(...["x","y","z"].map((e=>({[e]:t[e]+(o[e]-t[e])/4}))));Object.assign(e.position,n)}})).linkWidth((e=>c.has(e)?4:1)).linkDirectionalParticles((e=>c.has(e)?4:0)).linkDirectionalParticleWidth(4).onNodeHover((t=>{!t&&!l.size||t&&u===t||(l.clear(),c.clear(),t&&l.add(t),u=t||null,e.prototype.$updateHighlight())})).onLinkHover((t=>{l.clear(),c.clear(),t&&(c.add(t),l.add(t.source),l.add(t.target)),e.prototype.$updateHighlight()})),o.commit("core/setGraph",p)},e.prototype.$updateHighlight=function(){let e=o.state.core.graph;e.nodeColor(e.nodeColor()).linkWidth(e.linkWidth()).linkDirectionalParticles(e.linkDirectionalParticles())}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(H);var Z=H,M=o(1519),W=o(476);const R={install(e,t={}){function o(e,t,o){if(void 0==e.reverse&&(e.reverse={}),void 0==e.reverse[t])e.reverse[t]={id:o.id,name:o.name};else switch(typeof e.reverse[t]){case"string":W.log("TODO string",e.reverse[t]);break;default:if(Array.isArray(e.reverse[t]))e.reverse[t].push({id:o.id,name:o.name});else{let n=e.reverse[t];e.reverse[t]=[],e.reverse[t].push(n),e.reverse[t].push({id:o.id,name:o.name})}}return W.log(e),e}function n(e,t,o){W.log(typeof e[t],e[t],o);let n=o.name,a=o.id;if(void 0==e[t])e[t]={id:a,name:n};else switch(typeof e[t]){case"string":W.log("TODO string",e[t]),e[t]=[e[t]],e[t].push({id:a,name:n});break;default:if(Array.isArray(e[t]))e[t].push({id:a,name:n});else{let o=e[t];e[t]=[],e[t].push(o),e[t].push({id:a,name:n})}}return W.log(e),e}!t||W.log(t),e.prototype.$newNode=async function(t={}){if(void 0!=t.name&&t.name.startsWith("http")){W.log("search",t);let o=await e.prototype.$loadNeurone(t.name);return W.log("neurone",o),o}{let e={name:"http://xmlns.com/foaf/0.1/name",knows:"http://xmlns.com/foaf/0.1/knows","@base":"http://local/","@vocab":"https://scenaristeur.github.io/agent/",id:"@id",type:"@type",reverse:"@reverse",homepage:{"@id":"http://xmlns.com/foaf/0.1/homepage","@type":"@id"}},o={"@context":Object.assign(e,t["@context"]),id:t["@id"]||t.id||(0,M.Z)(),name:t.name&&t.name["@value"]||t.name||"",type:t.type||"neurone",homepage:"https://scenaristeur.github.io/agent/"};return void 0!=t.base64&&(o.shape="base64",o.base64=t.base64,o.type=t.type),void 0!=t.neurones&&(o.neurones=t.neurones),o}},e.prototype.$addProp=function(e){let t=e.node,o=e.propertie,n=e.value,a=t[o];return W.log(typeof a,a),void 0==a?t[o]=n:Array.isArray(a)?t[o].push(n):t[o]=[a,n],t},e.prototype.$addLink=function(e){W.log(e);let t=e.subject,a=e.predicate,r=e.object;return t=n(t,a,r),r=o(r,a,t),[t,r]}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(R);var G=R,z=o(1064),J=o(6732),U=o(5641),Y=o(1071),q=o(2413),Q=o(3754),K=o(476);const X={install(e,t={}){let o=t.store;e.prototype.$checkSolidSession=async function(){await Q.handleIncomingRedirect({}).then((e=>{if(1==e.isLoggedIn){K.log(`Logged in with WebID [${e.webId}]`),o.commit("solid/setSession",e);let t=Q.getDefaultSession();this.$getPodInfosFromSession(t)}}))},e.prototype.$login=async function(e){K.log("login",e),Q.getDefaultSession().info.isLoggedIn||await Q.login({oidcIssuer:e,redirectUrl:window.location.href,clientName:"Verse"})},e.prototype.$logout=async function(){let e=Q.getDefaultSession();await e.logout(),o.commit("solid/setSession",null),o.commit("solid/setPod",null)},e.prototype.$getPodInfosFromSession=async function(t){let n={};n.logged=t.info.isLoggedIn,n.logged?(n.webId=t.info.webId,n=await this.$getPodInfos(n),void 0==n.neuroneStore&&(n.neuroneStore=n.storage+"public/neurones/"),void 0==n.workspaces&&(n.workspaces=[]),o.commit("solid/setPod",n),null!=n.storage&&(n.brains=n.storage+"brains.json",e.prototype.$checkBrains())):o.commit("solid/setPod",null)},e.prototype.$getPodInfos=async function(e){try{const t=await(0,z.OE)(e.webId,{fetch:Q.fetch});let o=await(0,J.YY)(t,e.webId);e.name=await(0,U.oX)(o,Y.xY.name),e.friends=await(0,U.MQ)(o,Y.xY.knows).map((e=>({webId:e}))),e.storage=await(0,U.Gr)(o,q.WS.storage),e.photo=await(0,U.Gr)(o,Y.Fv.hasPhoto),void 0==e.neuroneStore&&(e.neuroneStore=e.storage+"public/neurones/"),e.workspaces=[];let n=e.storage+"settings/publicTypeIndex.ttl";const a=await(0,z.OE)(n,{fetch:Q.fetch});let r=await(0,J.oY)(a);for await(const i of r){let t=await(0,U.MQ)(i,"http://www.w3.org/ns/solid/terms#forClass");if(t.includes("https://scenaristeur.github.io/verse#Workspace")){K.log(i);let t={};t.name=await(0,U.oX)(i,Y.AS.name),t.url=await(0,U.Gr)(i,q.UG.instance),e.workspaces.push(t)}}}catch(t){K.log("erreur",t,e)}return K.log(e),await e}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(X);var ee=X,te=o(2510),oe=o(3505),ne=o(476);const ae={install(e,t={}){let o=t.store;async function n(t){const n=t.map((async function(t){if(t.endsWith("/"))return void e.prototype.$loadBrainFromSolid(t);e.prototype.$spinnerAdd({id:"loading "+t});const n=await(0,te.hn)(t,{fetch:Q.fetch});return new Promise((function(a,r){const i=new FileReader;i.onload=async()=>{try{let n=JSON.parse(i.result);await o.dispatch("core/saveNode",n),e.prototype.$spinnerRemove({id:"loading "+t}),a(n)}catch(n){r(n)}},i.onerror=e=>{r(e)},i.readAsText(n)}))}));await Promise.all(n),o.dispatch("core/getNodes")}function a(e){var t=e.lastIndexOf("/"),o=e.substring(t+1);return 0==o.length?a(e.slice(0,-1)):o}e.prototype.$saveBrainToSolid=async function(){if(ne.log(o.state.core.nodes),null==o.state.solid.pod)alert("Please Login to your pod before trying to save this brain");else{let t=o.state.solid.pod.storage+"brains/";ne.log(t);let n=prompt("Please confirm the path where to store the nodes",t);if(ne.log(n),null!=n){n=n.endsWith("/")?n:n+="/",o.state.core.nodes.forEach((t=>{e.prototype.$spinnerAdd({id:"saving "+t.id})}));for await(const i of o.state.core.nodes){ne.log(i.id,i),i["@context"]["@base"]=n;const t=await(0,te._u)(n+a(i.id),new Blob([JSON.stringify(i)],{type:"application/ld+json"}),{contentType:"application/ld+json",fetch:Q.fetch});ne.log(`File saved at ${(0,oe.LH)(t)}`),e.prototype.$spinnerRemove({id:"saving "+i.id})}e.prototype.$spinnerAdd({id:"saving "+o.state.solid.pod.brains});const t=await(0,te.hn)(o.state.solid.pod.brains,{fetch:Q.fetch}),r=new FileReader;r.onload=async()=>{try{let i=JSON.parse(r.result),s=Date.now(),d={id:n,name:a(n),updated:s,checksum:1e3*Math.random()};var t=i.brains.findIndex((e=>e.id==d.id));-1===t?(d.created=s,i.brains.push(d)):Object.assign(i.brains[t],d),await(0,te._u)(o.state.solid.pod.brains,new Blob([JSON.stringify(i)],{type:"application/ld+json"}),{contentType:"application/ld+json",fetch:Q.fetch}),e.prototype.$checkBrains(),e.prototype.$spinnerRemove({id:"saving "+o.state.solid.pod.brains})}catch(i){ne.log(i)}},r.onerror=e=>{ne.log(e)},r.readAsText(t)}else alert("saving to Solid Pod aborted")}},e.prototype.$loadBrainsFromWikidata=async function(e){ne.log(e),e.forEach((async function(e){ne.log(e);let t={id:e.url,name:e.item.aliases&&e.item.aliases[0]||e.item.label||e.text,color:"lightblue",url:e.url,source:"https://wikidata.org"};await o.dispatch("core/saveNode",t)})),await o.dispatch("core/getNodes")},e.prototype.$brainsFromPod=async function(t){let o=t.storage+"public/brains/";e.prototype.$spinnerAdd({id:"loading "+o});let n=null;try{n=await(0,z.OE)(o,{fetch:Q.fetch});let e=await(0,z.kQ)(n,{fetch:Q.fetch});return ne.log(e),e}catch(a){ne.log(a)}e.prototype.$spinnerRemove({id:"loading "+o})},e.prototype.$loadBrainFromSolid=async function(t){if(void 0==t){let e=null!=o.state.solid.pod?o.state.solid.pod.storage+"brains/":"https://solid.provider/brains_folder or example...";ne.log(e),t=prompt("Load brain from ",e)}if(null!=t){ne.log("load brain from",t),e.prototype.$spinnerAdd({id:"loading "+t});let o=null;try{o=await(0,z.OE)(t,{fetch:Q.fetch});let e=await(0,z.kQ)(o,{fetch:Q.fetch});ne.log(e),await n(e)}catch(a){alert(a)}e.prototype.$spinnerRemove({id:"loading "+t})}},e.prototype.$checkBrains=async function(){e.prototype.$spinnerAdd({id:"checkBrains"});try{const e=await(0,te.hn)(o.state.solid.pod.brains,{fetch:Q.fetch});ne.log(e)}catch(t){let e={"@context":{name:"http://xmlns.com/foaf/0.1/name",knows:"http://xmlns.com/foaf/0.1/knows","@base":"http://local/","@vocab":"https://scenaristeur.github.io/agent/",id:"@id",type:"@type",reverse:"@reverse",homepage:{"@id":"http://xmlns.com/foaf/0.1/homepage","@type":"@id"}},id:(0,M.Z)(),name:"Brain Index",type:"brainIndex",brains:[],homepage:"https://scenaristeur.github.io/agent"};await(0,te._u)(o.state.solid.pod.brains,new Blob([JSON.stringify(e)],{type:"application/ld+json"}),{contentType:"application/ld+json",fetch:Q.fetch})}try{const t=await(0,te.hn)(o.state.solid.pod.brains,{fetch:Q.fetch}),n=new FileReader;n.onload=async()=>{try{let e=JSON.parse(n.result);o.commit("core/setBrains",e)}catch(e){ne.log(e)}},n.onerror=e=>{ne.log(e)},n.readAsText(t)}catch(t){ne.log(t)}finally{e.prototype.$spinnerRemove({id:"checkBrains"})}},e.prototype.$loadNeurone=async function(t){e.prototype.$spinnerAdd({id:"loading "+t});const o=await(0,te.hn)(t,{fetch:Q.fetch});return new Promise((function(n,a){const r=new FileReader;r.onload=async()=>{try{let o=JSON.parse(r.result);e.prototype.$spinnerRemove({id:"loading "+t}),n(o)}catch(o){a(o)}},r.onerror=e=>{a(e)},r.readAsText(o)}))}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(ae);var re=ae,ie=o(5612),se=o(476);const de={async install(e,t={}){let o,n,a=t.store;e.prototype.$initIpfs=async function(){o=window.IpfsCore,n=await o.create();let e=await n.id();se.log(n,e),a.commit("core/setIpfsNode",e)},e.prototype.$saveBrainToIpfs=async function(){se.log("IPFS",n,a.state.core.nodes);let e=a.state.core.nodes;const t=await n.add(JSON.stringify(e));se.log(t),a.commit("core/setGraphCid",t)},e.prototype.$loadBrainFromIpfs=async function(e){se.log(e);let t=[];for await(const a of n.cat(e))t.push(a);const o=(0,ie.zo)(t),r=JSON.parse((new TextDecoder).decode(o).toString());se.log("decoded",r);for await(const n of r)await a.dispatch("core/saveNode",n);se.log("1"),await a.dispatch("core/getNodes"),se.log("2")},e.prototype.$saveNodesToIpfs=async function(){se.log("IPFS",n,a.state.core.nodes),a.commit("core/resetIpfsCid"),a.state.core.nodes.forEach((async function(e){se.log(e);const t=await n.add(JSON.stringify(e));se.log(t,e);let o={cid:t.path,name:e.name,id:e.id};a.commit("core/addIpfsCid",o);let r=[];for await(const a of n.cat(t.path))r.push(a);const i=(0,ie.zo)(r),s=JSON.parse((new TextDecoder).decode(i).toString());se.log(s)}))}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(de);var le=de,ce=o(476);const ue={install(e,t={}){let o=t.store;ce.log(o),e.prototype.$search=async function(e){ce.log("searching ",e.text,o.state.core.nodes);let t=o.state.core.nodes,n=t.filter((t=>void 0!=t.name&&t.name.includes(e.text)));if(1==e.searchById){let o=t.filter((t=>t.id.includes(e.text)));n=n.concat(o)}return n}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(ue);var pe=ue,fe=o(476);const he={install(e,t={}){let o=t.store;fe.log(o),e.prototype.$brain_create=async function(){fe.log(o.state.core.nodes);let t,n=prompt("What is the name of this brain ?");if(fe.log(n),void 0!=n){let a={name:n,neurones:o.state.core.nodes.map((e=>({id:e.id.startsWith("http")?e.id:e["@context"]["@base"]+e.id}))),type:"brain",color:"purple"};t=await e.prototype.$newNode(a),fe.log(t),o.dispatch("core/saveNode",t)}for(const e of o.state.core.nodes){let n=t.id.startsWith("http")?t.id:e["@context"]["@base"]+t.id;void 0==e.brains&&(e.brains=[]);var a=e.brains.findIndex((e=>e.id==n));-1===a&&e.brains.push({id:n}),o.dispatch("core/saveNode",t),fe.log(e)}}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(he);var ge,me,ye,we,ve,be,ke=he,Ne=o(400),xe=o.n(Ne),$e=o(8262),je=o(3266),Oe=(o(44),o(5350)),Se=o.n(Oe),_e=o(476),Ie=!1,Pe=!1,Be=500,Ae=void 0;let Ce;var Te={printMap:function(e){for(var t=Array.from(e),o=0,n=t.length;o<n;o++)_e.log(t[o][1])},printArr:function(e){for(var t=0,o=e.length;t<o;t++)_e.log(e[t])},makeNodes:function(e){for(var t=Array.from(e),o=[],n=0,a=t.length;n<a;n++)o.push(t[n][1]);return o},makeEdges:function(e){for(var t=Array.from(e),o=[],n=0,a=t.length;n<a;n++)o.push(t[n][1]);return o}};class Ee{constructor(e){Ae=e,_e.log(Ae),Ce=this}search(e,t,o){_e.log("Starting with:",e),Ie=!!t,o&&(Be=o),_e.log(Be),be=t,we=e,ge=[],me=new Map,ye=new Map,Ae.get(e).once(Ce.node)}node(e,t){if(!e)return _e.error("no data:",t,e),void Ce.back();var o=Se().node.soul(e);o==we&&ge.push(o),ve=e,Ie&&void 0!=e[be]?me.set(o,{id:o,label:e[be]}):me.set(o,{id:o,label:t}),_e.log(this),_e.log(ve,ye),Ce.edge(ve,ye)}edge(e,t){if(Pe)_e.log("stopped");else{var o,n=Se().node.soul(e),a="none",r=Object.keys(e);for(var i of r)if(i==be&&(a=e[i]),"object"==typeof e[i]){if(null==e[i]||"_"==i)continue;if(!t.has(n+e[i]["#"])){o=e[i];break}}o?Ce.next(o,n,o["#"],a):(we==n&&ge.pop(),Ce.back())}}next(e,t,o,n){_e.log(n);var a=e,r=a["#"];if(me.set(r,{id:r,label:a["#"]}),ye.set(t+o,{source:t,target:o}),ge.push(r),ve=a,me.size>=Be)return _e.info("Reached limit"),void Ce.render();Ae.get(r).once(Ce.node)}back(){if(0!=ge.length){var e=ge.pop();Ae.get(e).once(Ce.node)}else Ce.render()}render(){let e={};e.nodes=Te.makeNodes(me),e.edges=Te.makeEdges(ye),_e.log("graph",e)}}var De=o(476);const Fe={install(e,t={}){let o=t.store;async function n(e){let t=[];var o=e._["#"];return De.log("soul",o),e.map().once((e=>{t.push(e)})),t}e.prototype.$gunSearch=async function(){De.log(Ee);let t=new Ee(e.prototype.$gun);t.search(o.state.gun.rootNode,"name")},e.prototype.$gunListen=async function(){De.log("Map",await e.prototype.$gun.get(o.state.gun.rootNode).map()),await e.prototype.$gun.get(o.state.gun.rootNode).map().on(((e,t)=>o.commit("gun/addGunBrains",{node:e,key:t})))},e.prototype.$saveBrainToGun=async function(){let t=e.prototype.$gun.get(o.state.gun.rootNode).get(o.state.core.brain.key).get("nodes");for await(const e of o.state.core.nodes)delete e["@context"],De.error("must not be used , use store.rootNode",e.id,e),t.set(e)},e.prototype.$saveNodeToGun=async function(e){De.log("Brain",o.state.core.brain,o.state.core.galaxy,o.state.core.galaxy.worlds,e)},e.prototype.$gunSet=async function(t){De.log(o.state.gun.rootNode,t),e.prototype.$gun.get(o.state.gun.rootNode).set(t)},e.prototype.$gunExplore=async function(){let t=o.state.gun.rootNode;De.log(t),De.log("build gun._.graph");let a=e.prototype.$gun.get(t);De.log("Gun Node",a);let r=await n(a);return De.log("graph",r),De.log(e.prototype.$gun),e.prototype.$gun.get(t).open((e=>{De.log("doc",e)})),r},e.prototype.$saveToGun=async function(t){De.log("brain",o.state.gun.brain);let n=o.state.gun.brain.name;De.log(t,t.value,t.triple);let a=t.triple.object;delete a.__ob__,delete a.__threeObj;let r=e.prototype.$gun.get(n).set(a),i=t.triple.subject;delete i.__ob__,delete i.__threeObj;let s=t.triple.edge.label;i[s]=r,De.log(i),e.prototype.$gun.get(n).set(i)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(Fe);var Ve=Fe,Le=o(137),He=o.n(Le);n["default"].use(I,{store:$.Z}),n["default"].use(B()),n["default"].use(T,{store:$.Z}),n["default"].use(Z,{store:$.Z}),n["default"].use(G,{store:$.Z}),n["default"].use(ee,{store:$.Z}),n["default"].use(re,{store:$.Z}),n["default"].use(le,{store:$.Z}),n["default"].use(pe,{store:$.Z}),n["default"].use(ke,{store:$.Z}),n["default"].use(xe(),{iconType:"MaterialDesign"}),n["default"].use($e.XG7),n["default"].use(je.A7),n["default"].use(Ve,{store:$.Z}),o.e(162).then(o.t.bind(o,7214,23)),n["default"].use(He(),{peers:["https://spogg.herokuapp.com/gun","https://gun-manhattan.herokuapp.com/gun"]}),n["default"].config.productionTip=!1,new n["default"]({router:x,store:$.Z,render:e=>e(u)}).$mount("#app")},5359:function(e,t,o){"use strict";o.d(t,{mY:function(){return l},QY:function(){return s}});var n=o(1519),a={"@context":{as:"https://www.w3.org/ns/activitystreams#",ve:"https://scenaristeur.github.io/verse#",id:"@id",type:"@type",name:"ve:name",age:"ve:age",url:"ve:url",privacy:"ve:privacy",properties:"ve:properties",links:"ve:links",synapses:"ve:synapses",created:"ve:created",updated:"ve:updated",synchronized:"ve:synchronized",previous:"ve:previous",next:"ve:next"},id:null,name:"",age:0,url:"",privacy:"private",type:null,properties:[],links:[],synapses:[],created:null,updated:null,synchronized:null,previous:null,next:null},r=o(476);class i{constructor(e={}){Object.assign(this,a),this.id=(0,n.Z)(),this.type="base",this.created=Date.now(),Object.assign(this,e)}debug(){r.log(this)}}class s extends i{constructor(e={}){super(e),void 0==e.type&&(this.type="core")}}var d=o(476);class l extends i{constructor(e={}){super(e),void 0==e["type"]&&(this["type"]="command"),this.init(e.inputValue)}init(e){if(this.isValidUrl(e))this.type="url",this.value=e,this.isFile=this.isFile(e);else{let t=e.charAt(0),o="";switch(t){case"/":this.type="commande",this.value=e,this.inputNew="";break;case".":o=this.commandHistory[this.commandHistory.length-1],this.inputNew=o.s+" "+o.p+" "+o.o;break;case";":o=this.commandHistory[this.commandHistory.length-1],this.inputNew=o.s+" "+o.p+" ";break;case",":o=this.commandHistory[this.commandHistory.length-1],this.inputNew=o.s+" ";break;default:this.traiteTriplet(e)}}return this}traiteTriplet(e){var t={},o="";let n=e.slice(-1),a=e.slice(0,-1).split(" "),r=!0,i="",s=[];switch(a.forEach((function(e){e=e.trim(),e.startsWith('"')?(i="debut",s.push(e.substr(1))):e.endsWith('"')?(i="fin",s.push(s.pop()+" "+e.slice(0,-1))):"debut"==i?s.push(s.pop()+" "+e):s.push(e)})),s.length>0&&(a=s),n){case".":o="";break;case";":o=a[0].indexOf(" ")>-1?'"'+a[0]+'" ':a[0]+" ";break;case",":o=a[0].indexOf(" ")>-1?'"'+a[0]+'" ':a[0]+" ",a[1].indexOf(" ")>-1?o+='"'+a[1]+'" ':o+=a[1]+" ";break;case"-":o=a[2].indexOf(" ")>-1?'"'+a[2]+'" ':a[2]+" ";break;default:d.log("message to chat "+e),o="",r=!1}if(r){t.type="triplet";var l={};l.subject=a[0],l.predicate=a[1],l.object=a[2],t.value=l,t.inputNew=o}else t.type="message",t.value=e,t.inputNew=o;Object.assign(this,t)}isValidUrl(e){try{return new URL(e),!0}catch(t){return!1}}isFile(e){return e.split("/").pop().indexOf(".")>-1}}},5297:function(e,t,o){"use strict";o.d(t,{Z:function(){return B}});var n=o(8935),a=o(4665),r=(o(6699),o(476));const i="nodedb",s=1;let d;var l={async getDb(){return new Promise(((e,t)=>{if(d)return e(d);r.log("OPENING DB",d);let o=window.indexedDB.open(i,s);o.onerror=e=>{r.log("Error opening db",e),t("Error")},o.onsuccess=t=>{d=t.target.result,e(d)},o.onupgradeneeded=e=>{r.log("onupgradeneeded");let t=e.target.result;t.createObjectStore("nodes",{keyPath:"id"})}}))},async deleteNode(e){let t=await this.getDb();return new Promise((o=>{let n=t.transaction(["nodes"],"readwrite");n.oncomplete=()=>{o()};let a=n.objectStore("nodes");a.delete(e.id)}))},async clearStore(){r.log("clear store");try{let n=await this.getDb();var e=n.transaction(["nodes"],"readwrite"),t=e.objectStore("nodes"),o=t.clear();o.onsuccess=function(e){r.log(e)}}catch(n){alert(n)}await this.getNodes()},async getNodes(){let e=await this.getDb();return new Promise((t=>{let o=e.transaction(["nodes"],"readonly");o.oncomplete=()=>{t(a)};let n=o.objectStore("nodes"),a=[];n.openCursor().onsuccess=e=>{let t=e.target.result;t&&(a.push(t.value),t.continue())}}))},async saveNode(e){let t=await this.getDb();return new Promise((o=>{let n=t.transaction(["nodes"],"readwrite");n.oncomplete=()=>{o()};let a=n.objectStore("nodes");a.put(e)}))}},c=o(1519),u=o(476);const p="https://scenaristeur.github.io/agent/",f=()=>({core:void 0,currentNode:void 0,brain:void 0,brains:void 0,showBrainLoader:!1,graph:void 0,db:void 0,commandHistory:[],command:null,nodes:[],links:[],jsonldProps:["@context","id","reverse","type"],graphProps:["__ob__","__threeObj","index","vx","vy","vz","x","y","z"],spinner:[],ipfsNode:null,ipfs_cids:[],graph_cid:null,highlightNodes:new Set,highlightLinks:new Set,hoverNode:null,search:null,galaxy:null}),h={setGalaxy(e,t){e.galaxy=t},setIpfsNode(e,t){e.ipfsNode=t},setGraphCid(e,t){e.graph_cid=t},resetIpfsCid(e){e.ipfs_cids=[]},addIpfsCid(e,t){e.ipfs_cids.push(t)},setCore(e,t){e.c=t},setCurrentNode(e,t){e.currentNode=t},setBrain(e,t){u.log(t),e.brain=t},setBrains(e,t){e.brains=t,e.showBrainLoader=!0},setShowBrainLoader(e,t){e.showBrainLoader=t},setGraph(e,t){e.graph=t},setDb(e,t){e.db=t},setCommand(e,t){e.command=t},pushHistory(e,t){e.commandHistory.push(t)},setLinks(e,t){e.links=t},spinnerAdd(e,t){e.spinner.push(t)},spinnerRemove(e,t){e.spinner=e.spinner.filter((e=>e.id!=t.id))},resetSpinner(e){e.spinner=[]},setSearch(e,t){e.search=t,n["default"].prototype.$updateHighlight()},setHighlightNodes(e,t){e.highlightNodes.clear(),e.highlightLinks.clear(),t.forEach((t=>{u.log(t),e.highlightNodes.add(t)})),n["default"].prototype.$updateHighlight()}},g={async pushCommandHistory(e,t){if(e.commit("setCommand",t),e.commit("pushHistory",t),"triplet"==t.type){let o=e.state.nodes.find((e=>e.name==t.value.subject));if(void 0==o&&(o=await n["default"].prototype.$newNode({name:t.value.subject})),t.value.predicate.startsWith(".")){let a=t.value.predicate.slice(1),r=await n["default"].prototype.$addProp({node:o,propertie:a,value:t.value.object});await e.dispatch("saveNode",r),await e.dispatch("getNodes")}else{let a=e.state.nodes.find((e=>e.id==t.value.object||e.name==t.value.object));void 0==a&&(a=await n["default"].prototype.$newNode({name:t.value.object}));let r=await n["default"].prototype.$addLink({subject:o,predicate:t.value.predicate,object:a});r.forEach((async function(t){await e.dispatch("saveNode",t)})),await e.dispatch("getNodes")}}},async newNode(e){let t=await n["default"].prototype.$newNode();e.commit("setCurrentNode",t)},async saveNode(e,t){void 0==t["@context"]&&(t["@context"]={}),void 0==t["@context"]["@vocab"]&&(t["@context"]["@vocab"]=p);try{await l.saveNode(t)}catch(o){alert(o)}},async removeNode(e,t){if(u.log("removing",t),u.log("todo remove backlinks/reverse"),t.reverse){u.log(t.reverse);for(const[e,o]of Object.entries(t.reverse)){let n=Array.isArray(o)?o:[o];u.log(n),u.log("must remove",t.id,"in",n,e),u.log("get each node from id ")}}try{await l.deleteNode(t),e.state.links=e.state.links.filter((e=>e.source!=t.id&&e.target!=t.id)),e.state.nodes=e.state.nodes.filter((e=>e.id!=t.id)),await e.dispatch("getNodes")}catch(o){alert(o)}},async removeAllNodes(e){try{e.state.links=[],e.state.nodes.forEach((async function(e){await l.deleteNode(e)})),e.state.nodes=[],await e.dispatch("getNodes")}catch(t){alert(t)}},async getNodes(e){let t=await l.getNodes(),o=[];u.log("nodes in db",t);let n=null;t.forEach((t=>{void 0==t.type&&(t.type="neurone"),void 0==t["@context"]&&(t["@context"]={}),void 0==t["@context"]["@vocab"]&&(t["@context"]["@vocab"]=p);var a=e.state.nodes.findIndex((e=>e.id==t.id));-1===a?e.state.nodes.push(t):Object.assign(e.state.nodes[a],t);for(let[n,r]of Object.entries(t))if(!e.state.jsonldProps.includes(n)&&!e.state.graphProps.includes(n)){let e=Math.random()*Math.PI;if(Array.isArray(r))for(let a of r)o.push({source:t.id,target:a.id,label:n,curvature:.3,rotation:e});else"object"==typeof r&&void 0!=r.id&&o.push({source:t.id,target:r.id,label:n,curvature:.3,rotation:e})}n=t}));let a=o.filter((t=>e.state.nodes.findIndex((e=>e.id==t.target))>-1)),r=o.filter((t=>-1===e.state.nodes.findIndex((e=>e.id==t.target))));u.log("validlinks, otherlinks",a,r),e.commit("setLinks",a),u.log("last",n)},async saveBrain(e){let{nodes:t,links:o}=e.state.graph.graphData();u.log(t,o);let n=[];for(let r of t)u.log(r),delete r.__ob__,delete r.__threeObj,void 0==r.id&&(r.id=(0,c.Z)()),void 0==r.created&&(r.created=Date.now()),r.updated=Date.now(),n.push(r.id),u.log(r),await l.saveNode(r);let a={id:(0,c.Z)(),nodes:n,type:"brain",color:"#fffff"};await l.saveNode(a)},switchTo(e,t){let o=e.state.nodes.find((e=>e.id==t));e.commit("setCurrentNode",o)}};var m={namespaced:!0,state:f,actions:g,mutations:h},y=o(476);const w=()=>({session:null,pod:null}),v={setSession(e,t){y.log("session",t),e.session=t},setPod(e,t){y.log("pod",t),e.pod=t}},b={};var k={namespaced:!0,state:w,actions:b,mutations:v};const N=()=>({showTerminal:!1}),x={toggleTerminal(e){e.showTerminal=!e.showTerminal}},$={};var j={namespaced:!0,state:N,actions:$,mutations:x},O=o(476);const S=()=>({rootNode:"test-brains",gunBrains:[]}),_={setGunBrains(e,t){e.gunBrains=t},async addGunBrains(e,t){O.log(t);const o=await e.gunBrains.findIndex((e=>e.key==t.key));if(O.log(o),-1===o){let o=Object.assign({},t.node);o.key=t.key,await e.gunBrains.push(o)}},setRootNode(e,t){e.rootNode=t}},I={};var P={namespaced:!0,state:S,actions:I,mutations:_};n["default"].use(a.ZP);var B=new a.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{core:m,solid:k,terminal:j,gun:P}})}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,r){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],r=e[c][2];for(var s=!0,d=0;d<n.length;d++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[d])}))?n.splice(d--,1):(s=!1,r<i&&(i=r));if(s){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,a,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(n,a){if(1&a&&(n=this(n)),8&a)return n;if("object"===typeof n&&n){if(4&a&&n.__esModule)return n;if(16&a&&"function"===typeof n.then)return n}var r=Object.create(null);o.r(r);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return n[e]}}));return i["default"]=function(){return n},o.d(r,i),r}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+(43===e?"test":e)+"."+{26:"81483ee3",34:"b9966dc6",43:"13203f87",57:"43d8a2f4",88:"c89e369c",97:"a435ad36",118:"6629ef40",162:"b539f018",170:"62f2c102",171:"6ccc4f0b",194:"19f30d59",214:"02dfcd0c",235:"a0b5a8ba",250:"145f525d",267:"7a064b82",325:"1e20ec4f",358:"c9b5c12c",430:"a4fa224e",444:"accd6ef8",536:"104fc45b",578:"a8a0cda3",611:"77f68a83",627:"a1f5030c",650:"cbc35fb8",756:"1ec906a7",811:"ebc2fea4"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{26:"9af57d6c",170:"728fbe8d",194:"3dd4c5f9",235:"2bf21112",578:"aa5514ea",756:"cc4d8120"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="agent:";o.l=function(n,a,r,i){if(e[n])e[n].push(a);else{var s,d;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+r){s=u;break}}s||(d=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+r),s.src=n),e[n]=[a];var p=function(t,o){s.onerror=s.onload=null,clearTimeout(f);var a=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),d&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/agent/"}(),function(){var e=function(e,t,o,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(r){if(a.onerror=a.onload=null,"load"===r.type)o();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=s,a.parentNode.removeChild(a),n(d)}};return a.onerror=a.onload=r,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var a=o[n],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){a=i[n],r=a.getAttribute("data-href");if(r===e||r===t)return a}},n=function(n){return new Promise((function(a,r){var i=o.miniCssF(n),s=o.p+i;if(t(i,s))return a();e(n,s,a,r)}))},a={143:0};o.f.miniCss=function(e,t){var o={26:1,170:1,194:1,235:1,578:1,756:1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,n){var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(o,n){a=e[t]=[o,n]}));n.push(a[2]=r);var i=o.p+o.u(t),s=new Error,d=function(n){if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,a[1](s)}};o.l(i,d,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,i=n[0],s=n[1],d=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(d)var c=d(o)}for(t&&t(n);l<i.length;l++)r=i[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},n=self["webpackChunkagent"]=self["webpackChunkagent"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(1367)}));n=o.O(n)})();
//# sourceMappingURL=app.f19872aa.js.map