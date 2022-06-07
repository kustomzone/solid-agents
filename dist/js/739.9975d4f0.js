"use strict";(self["webpackChunkagent"]=self["webpackChunkagent"]||[]).push([[739],{2739:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return 1==t.showBrainLoader?i("b-container",[i("b-button",{on:{click:t.loadBrainFromSolid}},[t._v("Choose path for loading a brain")]),i("b-button",{on:{click:t.hide}},[t._v("Hide BrainLoader")]),void 0!=t.brains?i("b-list-group",{staticClass:"scroll"},t._l(t.items,(function(e){return i("b-list-group-item",{key:e.id,staticClass:"item list-group-item d-flex justify-content-between p-1",attrs:{button:""},on:{click:function(i){return t.loadBrain(e)}}},[i("p",{staticClass:"p-0 m-0 flex-grow-1"},[i("b",[t._v(t._s(e.name))])]),i("small",{staticClass:"mr-2"},[i("i",[t._v("created: "+t._s(new Date(e.created).toLocaleString())+" "),i("br"),t._v(" updated: "+t._s(new Date(e.updated).toLocaleString()))])]),i("b-button",{attrs:{size:"sm mr-2",variant:"outline-success"},on:{click:function(i){return i.stopPropagation(),t.open(e.id)}}},[i("b-icon-eye")],1),i("b-button",{attrs:{size:"sm mr-2",variant:"outline-success"},on:{click:function(i){return i.stopPropagation(),t.share(e.id)}}},[i("b-icon-share")],1)],1)})),1):t._e()],1):t._e()},a=[],n=i(1845),r=i(476),s={name:"BrainLoader",mixins:[n.Z],data(){return{items:[]}},methods:{loadBrain(t){r.log("loading",t),this.$loadBrainFromSolid(t.id),this.hide()},loadBrainFromSolid(){this.$loadBrainFromSolid(),this.hide()},hide(){this.$store.commit("core/setShowBrainLoader",!1)},share(t){let e="https://scenaristeur.github.io/agent?source="+t,i=this;navigator.clipboard.writeText(e).then((function(){i.makeToast("The url is in your clipboard ;-)",e+".               Use Ctrl+V to share it","success")}),(function(){i.makeToast("Houston, we've got a problem with the clipboard ;-(",e,"warning")}))},open(t){window.open(t,"_blank").focus()}},watch:{brains(){this.items=this.brains.brains.sort(((t,e)=>e.updated-t.updated))}},computed:{brains(){return this.$store.state.core.brains},showBrainLoader(){return this.$store.state.core.showBrainLoader}}},l=s,c=i(1001),u=(0,c.Z)(l,o,a,!1,null,null,null),d=u.exports},1845:function(t,e){e["Z"]={methods:{makeToast(t,e,i=null){this.$bvToast.toast(e,{title:t,variant:i,solid:!0})}}}}}]);
//# sourceMappingURL=739.9975d4f0.js.map