"use strict";(self["webpackChunkagent"]=self["webpackChunkagent"]||[]).push([[264],{6134:function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[null!=e.tempNode?o("b-container",[e._v(" Node edition "),o("b-row",[o("b-col",{attrs:{cols:"10"}},[o("b-form-input",{attrs:{placeholder:"name",autofocus:""},model:{value:e.tempNode.name,callback:function(t){e.$set(e.tempNode,"name",t)},expression:"tempNode.name"}})],1),o("b-col",{attrs:{cols:"2"}},[o("b-form-input",{attrs:{type:"color",size:"sm"},model:{value:e.tempNode.color,callback:function(t){e.$set(e.tempNode,"color",t)},expression:"tempNode.color"}})],1)],1),o("NodeLinks",{model:{value:e.tempNode.links,callback:function(t){e.$set(e.tempNode,"links",t)},expression:"tempNode.links"}}),o("NodeProperties",{model:{value:e.tempNode.properties,callback:function(t){e.$set(e.tempNode,"properties",t)},expression:"tempNode.properties"}}),o("b-button",{on:{click:function(t){e.tempNode=null}}},[e._v("Cancel")]),o("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Save")]),o("hr"),e._v(" "+e._s(e.tempNode)+" ")],1):e._e()],1)},r=[],s=(o(1539),o(8783),o(3948),{name:"NodeEdition",components:{NodeLinks:function(){return o.e(583).then(o.bind(o,5583))},NodeProperties:function(){return o.e(580).then(o.bind(o,5580))}},data:function(){return{tempNode:null}},created:function(){},methods:{save:function(){console.log(this.tempNode),this.$store.commit("core/addNode",this.tempNode),this.$store.commit("core/setCurrentNode",null)}},watch:{currentNode:function(){this.tempNode=this.currentNode;var e=null!=this.tempNode?this.tempNode.properties:[],t=null!=this.tempNode?this.tempNode.links:[];this.$store.commit("core/setNodeProperties",e),this.$store.commit("core/setNodeLinks",t)}},computed:{currentNode:function(){return this.$store.state.core.currentNode},graph:function(){return this.$store.state.core.graph}}}),i=s,c=o(1001),l=(0,c.Z)(i,n,r,!1,null,"781b16bb",null),d=l.exports}}]);
//# sourceMappingURL=264-legacy.4d72ade1.js.map