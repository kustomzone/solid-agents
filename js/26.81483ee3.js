"use strict";(self["webpackChunkagent"]=self["webpackChunkagent"]||[]).push([[26],{1026:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"graph",attrs:{id:"graph",width:"100px"}},[t._v("Loading graph...")])},r=[],n=s(476),i={name:"VisualisationView",mounted(){this.$graphInit({domElement:this.$refs.graph})},methods:{update(){if(void 0!=this.graph){let t=this.nodes.map((t=>({...t}))),e=this.links.map((t=>({...t})));this.graph.graphData({nodes:t,links:e}),n.log(this.graph.graphData())}}},watch:{nodes(){this.update()},links(){this.update()},graph(){this.update()}},computed:{nodes(){return this.$store.state.core.nodes},links(){return this.$store.state.core.links},graph(){return this.$store.state.core.graph}}},h=i,p=s(1001),o=(0,p.Z)(h,a,r,!1,null,null,null),u=o.exports}}]);
//# sourceMappingURL=26.81483ee3.js.map