(self["webpackChunkagent"]=self["webpackChunkagent"]||[]).push([[703],{6703:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{id:"navbar",toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("SpinnerComp"),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{on:{click:e.showBrainLoader}},[e._v("brains")]),n("b-nav-item",{on:{click:e.saveBrain}},[e._v("save")]),n("ShareBrain",{staticStyle:{float:"left"}})],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{text:"graph",right:""}},[n("b-dropdown-item",{on:{click:e.clear}},[e._v("clear")]),n("b-dropdown-item",{attrs:{disabled:""}},[e._v("Reset camera")]),n("b-dropdown-item",{attrs:{disabled:""},on:{click:function(t){e.show_node_name=!e.show_node_name}}},[e._v("show node name "+e._s(e.show_node_name))]),n("b-dropdown-item",{attrs:{disabled:""},on:{click:function(t){e.show_link_label=!e.show_link_label}}},[e._v("show link label "+e._s(e.show_link_label))])],1),n("SolidLogin")],1)],1),n("b-modal",{attrs:{id:"modal-save",title:"Save Brain",size:"lg"}},[n("b-button",{on:{click:e.saveBrainToSolid}},[e._v("to Solid Pod")]),n("b-button",{attrs:{disabled:null==e.ipfsNode},on:{click:e.saveNodesToIpfs}},[e._v("to IPFS")]),n("b-button",{attrs:{disabled:""},on:{click:e.saveBrainToFile}},[e._v("to File")]),n("b-button",{attrs:{disabled:""},on:{click:e.saveBrainToGun}},[e._v("to GunDb")]),n("b-button",{attrs:{disabled:""},on:{click:e.saveBrainToMatrixCrdt}},[e._v("to Matrix-Crdt")]),e._v(" ipfs_cids: "),e.ipfs_cids.length>0?n("div",[n("b-button",{on:{click:e.save_cids}},[e._v("Save Cids")])],1):e._e(),n("ul",e._l(e.ipfs_cids,(function(t){return n("li",{key:t.cid},[n("a",{attrs:{href:"https://ipfs.io/ipfs/"+t.cid,target:"_blank"}},[e._v(e._s(t.name))])])})),0),e._v(" "+e._s(e.ipfs_cids)+" "),n("hr"),e._v(" ipfsNode : "+e._s(e.ipfsNode)+" ")],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[null!=e.ipfsNode?n("b-button",{attrs:{size:"sm",variant:"outline-"+e.variant},on:{click:function(t){return t.stopPropagation(),e.share()}}},[n("b-icon-share",{attrs:{variant:e.variant},on:{click:function(t){return t.stopPropagation(),e.share()}}})],1):n("b-button",{attrs:{variant:"light",disable:"",size:"sm"}},[e._v("Connecting to ipfs..")]),n("b-modal",{attrs:{id:"share-modal"+e.it.url,title:"Share",size:"lg"}},[null==e.graph_cid?n("div",[e._v(" Saving on ipfs .... Pending ")]):n("div",[n("a",{attrs:{href:"https://ipfs.io/ipfs/"+e.graph_cid.path,target:"_blank"}},[e._v(e._s(e.graph_cid.path))]),n("b-input",{attrs:{placeholder:"Name"},model:{value:e.pinning_name,callback:function(t){e.pinning_name=t},expression:"pinning_name"}}),n("b-button",{on:{click:e.pinIt}},[e._v("Pin it")]),n("div",{attrs:{id:"pinConfig"}},[n("h3",[e._v("Pinata Pinning service Pinata")]),n("a",{attrs:{href:"https://app.pinata.cloud/keys",target:"_blank"}},[e._v("Get your keys")]),n("b-input",{attrs:{placeholder:"endpoint"},model:{value:e.pinning_service.endpoint,callback:function(t){e.$set(e.pinning_service,"endpoint",t)},expression:"pinning_service.endpoint"}}),n("b-input",{attrs:{placeholder:"api_key"},model:{value:e.pinning_service.api_key,callback:function(t){e.$set(e.pinning_service,"api_key",t)},expression:"pinning_service.api_key"}}),n("b-input",{attrs:{placeholder:"secret_api_key"},model:{value:e.pinning_service.secret_api_key,callback:function(t){e.$set(e.pinning_service,"secret_api_key",t)},expression:"pinning_service.secret_api_key"}}),n("b-input",{attrs:{placeholder:"or token (todo)"},model:{value:e.pinning_service.token,callback:function(t){e.$set(e.pinning_service,"token",t)},expression:"pinning_service.token"}}),n("i",[n("small",[n("a",{attrs:{href:"https://docs.ipfs.io/how-to/work-with-pinning-services/#use-an-existing-pinning-service"}},[e._v("What is a pinning service")])])]),n("b-button",{on:{click:e.connectPinningService}},[e._v("Connect Pinning Service")])],1),n("hr"),e._l(e.networks,(function(t){return n("ShareNetwork",{key:t.network,style:{backgroundColor:t.color},attrs:{network:t.network,url:e.sharing.url,title:e.sharing.title,description:e.sharing.description,quote:e.sharing.quote,hashtags:e.sharing.hashtags,twitterUser:e.sharing.twitterUser}},[n("b-button",{staticClass:"p-2",style:{backgroundColor:t.color}},[n("i",{class:t.icon}),n("span",[e._v(e._s(t.name))])])],1)}))],2),n("br"),n("b-button",{attrs:{variant:"warning"}},[e._v(" Save to file (todo)")])],1)],1)},a=[],s=(n(1703),n(6166)),c=n.n(s),u={name:"ShareBrain",props:{default:{url:"https://scenaristeur.github.io/agent",name:"InterPlanetaryGraphSystem"},variant:{type:String,default:"warning"}},data(){return{it:{},sharing:{url:"https://scenaristeur.github.io/agent",title:"InterPlanetary Graph System.",description:"Check out this Agent graph. made with https://scenaristeur.github.io/agent",quote:"Best way to easily share your thought",hashtags:"InterPlanetaryGraphSystem,agent,ipgs,decentralized,Solid,nodejs,vuejs",twitterUser:"dfaveris"},networks:[{network:"sms",name:"SMS",icon:"far fah fa-lg fa-comment-dots",color:"#333333"},{network:"email",name:"Email",icon:"far fah fa-lg fa-envelope",color:"#333333"},{network:"whatsapp",name:"Whatsapp",icon:"fab fah fa-lg fa-whatsapp",color:"#25d366"},{network:"telegram",name:"Telegram",icon:"fab fah fa-lg fa-telegram-plane",color:"#0088cc"},{network:"tumblr",name:"Tumblr",icon:"fab fah fa-lg fa-tumblr",color:"#35465c"},{network:"twitter",name:"Twitter",icon:"fab fah fa-lg fa-twitter",color:"#1da1f2"},{network:"reddit",name:"Reddit",icon:"fab fah fa-lg fa-reddit-alien",color:"#ff4500"},{network:"skype",name:"Skype",icon:"fab fah fa-lg fa-skype",color:"#00aff0"},{network:"evernote",name:"Evernote",icon:"fab fah fa-lg fa-evernote",color:"#2dbe60"},{network:"facebook",name:"Facebook",icon:"fab fah fa-lg fa-facebook-f",color:"#1877f2"},{network:"flipboard",name:"Flipboard",icon:"fab fah fa-lg fa-flipboard",color:"#e12828"},{network:"hackernews",name:"HackerNews",icon:"fab fah fa-lg fa-hacker-news",color:"#ff4000"},{network:"instapaper",name:"Instapaper",icon:"fas fah fa-lg fa-italic",color:"#428bca"},{network:"line",name:"Line",icon:"fab fah fa-lg fa-line",color:"#00c300"},{network:"linkedin",name:"LinkedIn",icon:"fab fah fa-lg fa-linkedin",color:"#007bb5"},{network:"odnoklassniki",name:"Odnoklassniki",icon:"fab fah fa-lg fa-odnoklassniki",color:"#ed812b"},{network:"pinterest",name:"Pinterest",icon:"fab fah fa-lg fa-pinterest",color:"#bd081c"},{network:"pocket",name:"Pocket",icon:"fab fah fa-lg fa-get-pocket",color:"#ef4056"},{network:"quora",name:"Quora",icon:"fab fah fa-lg fa-quora",color:"#a82400"},{network:"stumbleupon",name:"StumbleUpon",icon:"fab fah fa-lg fa-stumbleupon",color:"#eb4924"},{network:"viber",name:"Viber",icon:"fab fah fa-lg fa-viber",color:"#59267c"},{network:"vk",name:"Vk",icon:"fab fah fa-lg fa-vk",color:"#4a76a8"},{network:"weibo",name:"Weibo",icon:"fab fah fa-lg fa-weibo",color:"#e9152d"},{network:"wordpress",name:"Wordpress",icon:"fab fah fa-lg fa-wordpress",color:"#21759b"},{network:"xing",name:"Xing",icon:"fab fah fa-lg fa-xing",color:"#026466"},{network:"yammer",name:"Yammer",icon:"fab fah fa-lg fa-yammer",color:"#0072c6"},{network:"baidu",name:"Baidu",icon:"fas fah fa-lg fa-paw",color:"#2529d8"},{network:"buffer",name:"Buffer",icon:"fab fah fa-lg fa-buffer",color:"#323b43"}],pinning_service:{endpoint:"https://api.pinata.cloud",api_key:"",secret_api_key:""},pinning_name:""}},created(){},methods:{async connectPinningService(){console.log(this.pinning_service),this.pinstatus=await this.testAuthentication(this.pinning_service.api_key,this.pinning_service.secret_api_key),console.log(this.pinstatus)},async pinJSONToIPFS(e,t,n){const r="https://api.pinata.cloud/pinning/pinJSONToIPFS";return c().post(r,n,{headers:{pinata_api_key:e,pinata_secret_api_key:t}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},async pinIt1(){console.log("pin system");let e={pinataOptions:{}};e.pinataOptions.name=this.pinning_name||Date.now();let t=await this.pinByHash(this.pinning_service.api_key,this.pinning_service.secret_api_key,this.graph_cid.path,e);console.log("result",t)},async pinIt(){let e={pinataMetadata:{name:"ItemStatus",keyvalues:{ItemID:"Item001",CheckpointID:"Checkpoint002",Source:"CompanyA",WeightInKilos:5.25}},pinataContent:this.nodes};e.pinataMetadata.name=this.pinning_name||Date.now();let t=await this.pinJSONToIPFS(this.pinning_service.api_key,this.pinning_service.secret_api_key,e);console.log(t)},async pinByHash(e,t,n,r){const i=this.pinning_service.endpoint+"/pinning/pinByHash";let o=this;const a={hashToPin:n,pinataOptions:{}};return console.log(a),r&&(r.pinataOptions&&(a.pinataOptions=r.pinataOptions),r.pinataMetadata&&(a.pinataMetadata=r.pinataMetadata)),new Promise(((n,r)=>{c().post(i,a,{withCredentials:!0,headers:{pinata_api_key:e,pinata_secret_api_key:t}}).then((function(e){200!==e.status&&r(new Error(`unknown server response while adding to pin queue: ${e}`)),n(e.data)})).catch((function(e){const t=o.handleError(e);r(t)}))}))},testAuthentication(e,t){let n=this;const r=this.pinning_service.endpoint+"/data/testAuthentication";return new Promise(((i,o)=>{c().get(r,{withCredentials:!0,headers:{pinata_api_key:e,pinata_secret_api_key:t}}).then((function(e){200!==e.status&&o(new Error(`unknown server response while authenticating: ${e}`)),i({authenticated:!0})})).catch((function(e){const t=n.handleError(e);o(t)}))}))},handleError(e){return e&&e.response&&e.response&&e.response.data&&e.response.data.error?e.response.data.error:e.data&&e.data.error?e.data.error:e.response&&e.response.error?e.response.error:e},async share(){this.$store.commit("core/setGraphCid",null),await this.$saveBrainToIpfs(),this.$bvModal.show("share-modal"+this.it.url)}},watch:{graph_cid(){null!=this.graph_cid&&(this.sharing.url="https://scenaristeur.github.io/agent?cid="+this.graph_cid.path,this.sharing.description="video demo youtube : https://youtu.be/YT61BcjGfwc\n",this.sharing.description+="\n\nFrançais:\nVous pouvez visualiser mon Inter Planetary Graph à cette adresse",this.sharing.description+=" (soyez patient, la connexion à ipfs peut prendre quelques dizaines de secondes) :\n",this.sharing.description+="https://scenaristeur.github.io/agent?cid="+this.graph_cid.path,this.sharing.description+="\nles données sont stockées sur Ipfs :\n https://ipfs.io/ipfs/"+this.graph_cid.path,this.sharing.description+="\nContact, infos and recevoir les mises à jour : scenaristeur@gmail.com",this.sharing.description+="\n\nEnglish:\nCheck out this Inter Planetary Graph  (could take 30s , be patient):\nhttps://scenaristeur.github.io/agent?cid="+this.graph_cid.path,this.sharing.description+="\n data on Ipfs :\n https://ipfs.io/ipfs/"+this.graph_cid.path,this.sharing.description+="\nContact, infos and receive updates : scenaristeur@gmail.com",this.sharing.description+='\n\n<iframe width="560" height="315" src="https://www.youtube.com/embed/YT61BcjGfwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')}},computed:{graph_cid(){return this.$store.state.core.graph_cid},ipfsNode(){return this.$store.state.core.ipfsNode},nodes(){return this.$store.state.core.nodes}}},f=u,l=n(1001),p=(0,l.Z)(f,o,a,!1,null,null,null),d=p.exports,h={name:"NavBar",components:{SolidLogin:()=>n.e(444).then(n.bind(n,8444)),SpinnerComp:()=>n.e(214).then(n.bind(n,1214)),ShareBrain:d},data(){return{show_node_name:!0,show_link_label:!0}},methods:{save_cids(){console.log(this.ipfs_cids),this.download(JSON.stringify(this.ipfs_cids),"ipfs_cids_"+Date.now()+".json","application/json")},download(e,t,n){var r=document.createElement("a"),i=new Blob([e],{type:n});r.href=URL.createObjectURL(i),r.download=t,r.click()},saveNodesToIpfs(){console.log("save"),this.$saveNodesToIpfs()},saveBrainToGun(){console.log("save")},saveBrainToMatrixCrdt(){console.log("save")},saveBrain(){this.$bvModal.show("modal-save")},saveBrainToSolid(){this.$saveBrainToSolid()},showBrainLoader(){this.$store.commit("core/setShowBrainLoader",!0)},saveBrainToFile(){console.log(this.ipfs_cids)},clear(){confirm("Are you sure you want to remove all nodes?")&&(this.$store.dispatch("core/removeAllNodes"),this.$store.commit("core/setCurrentNode",null))}},computed:{ipfsNode(){return this.$store.state.core.ipfsNode},ipfs_cids(){return this.$store.state.core.ipfs_cids}}},m=h,g=(0,l.Z)(m,r,i,!1,null,null,null),v=g.exports},6166:function(e,t,n){e.exports=n(9142)},4355:function(e,t,n){"use strict";n(2801);var r=n(2175),i=n(2317),o=n(3347),a=n(8470),s=n(4107),c=n(6280),u=n(8573),f=n(9214),l=n(7431),p=n(3967),d=n(4108);e.exports=function(e){return new Promise((function(t,n){var h,m=e.data,g=e.headers,v=e.responseType;function b(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}r.isFormData(m)&&r.isStandardBrowserEnv()&&delete g["Content-Type"];var w=new XMLHttpRequest;if(e.auth){var _=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.Authorization="Basic "+btoa(_+":"+y)}var k=s(e.baseURL,e.url);function E(){if(w){var r="getAllResponseHeaders"in w?c(w.getAllResponseHeaders()):null,o=v&&"text"!==v&&"json"!==v?w.response:w.responseText,a={data:o,status:w.status,statusText:w.statusText,headers:r,config:e,request:w};i((function(e){t(e),b()}),(function(e){n(e),b()}),a),w=null}}if(w.open(e.method.toUpperCase(),a(k,e.params,e.paramsSerializer),!0),w.timeout=e.timeout,"onloadend"in w?w.onloadend=E:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(E)},w.onabort=function(){w&&(n(new l("Request aborted",l.ECONNABORTED,e,w)),w=null)},w.onerror=function(){n(new l("Network Error",l.ERR_NETWORK,e,w,w)),w=null},w.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||f;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new l(t,r.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,e,w)),w=null},r.isStandardBrowserEnv()){var S=(e.withCredentials||u(k))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;S&&(g[e.xsrfHeaderName]=S)}"setRequestHeader"in w&&r.forEach(g,(function(e,t){"undefined"===typeof m&&"content-type"===t.toLowerCase()?delete g[t]:w.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(w.withCredentials=!!e.withCredentials),v&&"json"!==v&&(w.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&w.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(h=function(e){w&&(n(!e||e&&e.type?new p:e),w.abort(),w=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h))),m||(m=null);var O=d(k);O&&-1===["http","https","file"].indexOf(O)?n(new l("Unsupported protocol "+O+":",l.ERR_BAD_REQUEST,e)):w.send(m)}))}},9142:function(e,t,n){"use strict";var r=n(2175),i=n(2978),o=n(4980),a=n(740),s=n(1378);function c(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n.create=function(t){return c(a(e,t))},n}var u=c(s);u.Axios=o,u.CanceledError=n(3967),u.CancelToken=n(1414),u.isCancel=n(4434),u.VERSION=n(3394).version,u.toFormData=n(8226),u.AxiosError=n(7431),u.Cancel=u.CanceledError,u.all=function(e){return Promise.all(e)},u.spread=n(8758),u.isAxiosError=n(9096),e.exports=u,e.exports["default"]=u},1414:function(e,t,n){"use strict";n(1703);var r=n(3967);function i(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},i.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},i.source=function(){var e,t=new i((function(t){e=t}));return{token:t,cancel:e}},e.exports=i},3967:function(e,t,n){"use strict";var r=n(7431),i=n(2175);function o(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}i.inherits(o,r,{__CANCEL__:!0}),e.exports=o},4434:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},4980:function(e,t,n){"use strict";var r=n(2175),i=n(8470),o=n(5393),a=n(5216),s=n(740),c=n(4107),u=n(4542),f=u.validators;function l(e){this.defaults=e,this.interceptors={request:new o,response:new o}}l.prototype.request=function(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=s(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&u.assertOptions(n,{silentJSONParsing:f.transitional(f.boolean),forcedJSONParsing:f.transitional(f.boolean),clarifyTimeoutError:f.transitional(f.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!i){var l=[a,void 0];Array.prototype.unshift.apply(l,r),l=l.concat(c),o=Promise.resolve(t);while(l.length)o=o.then(l.shift(),l.shift());return o}var p=t;while(r.length){var d=r.shift(),h=r.shift();try{p=d(p)}catch(m){h(m);break}}try{o=a(p)}catch(m){return Promise.reject(m)}while(c.length)o=o.then(c.shift(),c.shift());return o},l.prototype.getUri=function(e){e=s(this.defaults,e);var t=c(e.baseURL,e.url);return i(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(s(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}l.prototype[e]=t(),l.prototype[e+"Form"]=t(!0)})),e.exports=l},7431:function(e,t,n){"use strict";n(1703);var r=n(2175);function i(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}r.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var o=i.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){a[e]={value:e}})),Object.defineProperties(i,a),Object.defineProperty(o,"isAxiosError",{value:!0}),i.from=function(e,t,n,a,s,c){var u=Object.create(o);return r.toFlatObject(e,u,(function(e){return e!==Error.prototype})),i.call(u,e.message,t,n,a,s),u.name=e.name,c&&Object.assign(u,c),u},e.exports=i},5393:function(e,t,n){"use strict";var r=n(2175);function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},4107:function(e,t,n){"use strict";var r=n(8612),i=n(1549);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},5216:function(e,t,n){"use strict";var r=n(2175),i=n(1618),o=n(4434),a=n(1378),s=n(3967);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){c(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||a.adapter;return t(e).then((function(t){return c(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(c(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},740:function(e,t,n){"use strict";var r=n(2175);e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function o(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function a(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function c(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var u={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,i=t(e);r.isUndefined(i)&&t!==c||(n[e]=i)})),n}},2317:function(e,t,n){"use strict";var r=n(7431);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}},1618:function(e,t,n){"use strict";var r=n(2175),i=n(1378);e.exports=function(e,t,n){var o=this||i;return r.forEach(n,(function(n){e=n.call(o,e,t)})),e}},1378:function(e,t,n){"use strict";var r=n(2175),i=n(5916),o=n(7431),a=n(9214),s=n(8226),c={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function f(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=n(4355)),e}function l(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(e)}var p={transitional:a,adapter:f(),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,o=r.isObject(e),a=t&&t["Content-Type"];if((n=r.isFileList(e))||o&&"multipart/form-data"===a){var c=this.env&&this.env.FormData;return s(n?{"files[]":e}:e,c&&new c)}return o||"application/json"===a?(u(t,"application/json"),l(e)):e}],transformResponse:[function(e){var t=this.transitional||p.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(a){if("SyntaxError"===s.name)throw o.from(s,o.ERR_BAD_RESPONSE,this,null,this.response);throw s}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(9519)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){p.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){p.headers[e]=r.merge(c)})),e.exports=p},9214:function(e){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},3394:function(e){e.exports={version:"0.27.2"}},2978:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},8470:function(e,t,n){"use strict";var r=n(2175);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(i(t)+"="+i(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},1549:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},3347:function(e,t,n){"use strict";var r=n(2175);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},8612:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},9096:function(e,t,n){"use strict";var r=n(2175);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},8573:function(e,t,n){"use strict";var r=n(2175);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},5916:function(e,t,n){"use strict";var r=n(2175);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},9519:function(e){e.exports=null},6280:function(e,t,n){"use strict";var r=n(2175),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(a[t]&&i.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},4108:function(e){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},8758:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},8226:function(e,t,n){"use strict";n(1703);var r=n(2175);function i(e,t){t=t||new FormData;var n=[];function i(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function o(e,a){if(r.isPlainObject(e)||r.isArray(e)){if(-1!==n.indexOf(e))throw Error("Circular reference detected in "+a);n.push(e),r.forEach(e,(function(e,n){if(!r.isUndefined(e)){var s,c=a?a+"."+n:n;if(e&&!a&&"object"===typeof e)if(r.endsWith(n,"{}"))e=JSON.stringify(e);else if(r.endsWith(n,"[]")&&(s=r.toArray(e)))return void s.forEach((function(e){!r.isUndefined(e)&&t.append(c,i(e))}));o(e,c)}})),n.pop()}else t.append(a,i(e))}return o(e),t}e.exports=i},4542:function(e,t,n){"use strict";var r=n(3394).version,i=n(7431),o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var a={};function s(e,t,n){if("object"!==typeof e)throw new i("options must be an object",i.ERR_BAD_OPTION_VALUE);var r=Object.keys(e),o=r.length;while(o-- >0){var a=r[o],s=t[a];if(s){var c=e[a],u=void 0===c||s(c,a,e);if(!0!==u)throw new i("option "+a+" must be "+u,i.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new i("Unknown option "+a,i.ERR_BAD_OPTION)}}o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,s){if(!1===e)throw new i(o(r," has been removed"+(t?" in "+t:"")),i.ERR_DEPRECATED);return t&&!a[r]&&(a[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}},e.exports={assertOptions:s,validators:o}},2175:function(e,t,n){"use strict";n(8675),n(3462);var r=n(2978),i=Object.prototype.toString,o=function(e){return function(t){var n=i.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function a(e){return e=e.toLowerCase(),function(t){return o(t)===e}}function s(e){return Array.isArray(e)}function c(e){return"undefined"===typeof e}function u(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}var f=a("ArrayBuffer");function l(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t}function p(e){return"string"===typeof e}function d(e){return"number"===typeof e}function h(e){return null!==e&&"object"===typeof e}function m(e){if("object"!==o(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var g=a("Date"),v=a("File"),b=a("Blob"),w=a("FileList");function _(e){return"[object Function]"===i.call(e)}function y(e){return h(e)&&_(e.pipe)}function k(e){var t="[object FormData]";return e&&("function"===typeof FormData&&e instanceof FormData||i.call(e)===t||_(e.toString)&&e.toString()===t)}var E=a("URLSearchParams");function S(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function O(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function x(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function R(){var e={};function t(t,n){m(e[n])&&m(t)?e[n]=R(e[n],t):m(t)?e[n]=R({},t):s(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)x(arguments[n],t);return e}function C(e,t,n){return x(t,(function(t,i){e[i]=n&&"function"===typeof t?r(t,n):t})),e}function T(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}function N(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}function A(e,t,n){var r,i,o,a={};t=t||{};do{r=Object.getOwnPropertyNames(e),i=r.length;while(i-- >0)o=r[i],a[o]||(t[o]=e[o],a[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t}function B(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n}function P(e){if(!e)return null;var t=e.length;if(c(t))return null;var n=new Array(t);while(t-- >0)n[t]=e[t];return n}var j=function(e){return function(t){return e&&t instanceof e}}("undefined"!==typeof Uint8Array&&Object.getPrototypeOf(Uint8Array));e.exports={isArray:s,isArrayBuffer:f,isBuffer:u,isFormData:k,isArrayBufferView:l,isString:p,isNumber:d,isObject:h,isPlainObject:m,isUndefined:c,isDate:g,isFile:v,isBlob:b,isFunction:_,isStream:y,isURLSearchParams:E,isStandardBrowserEnv:O,forEach:x,merge:R,extend:C,trim:S,stripBOM:T,inherits:N,toFlatObject:A,kindOf:o,kindOfTest:a,endsWith:B,toArray:P,isTypedArray:j,isFileList:w}}}]);
//# sourceMappingURL=703.871644ce.js.map