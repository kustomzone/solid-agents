"use strict";(self["webpackChunkagent"]=self["webpackChunkagent"]||[]).push([[583],{5583:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" Links "+e._s(e.nodeLinks)+" "),a("hr"),a("b-form-select",{attrs:{"value-field":"id","text-field":"name",options:e.graphData.nodes},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "+e._s(e.graphData.nodes)+" ")],1)},n=[],r={name:"NodeLinks",data(){return{selected:null}},watch:{selected(){console.log("selected",this.selected)},graphData(){console.log("GRAPHDATA",this.graphData)}},computed:{nodeLinks(){return this.$store.state.core.nodeLinks},graphData(){return this.$store.state.core.graph.graphData()}}},l=r,o=a(1001),c=(0,o.Z)(l,s,n,!1,null,"7e16dde8",null),d=c.exports}}]);
//# sourceMappingURL=583.b9232bb6.js.map