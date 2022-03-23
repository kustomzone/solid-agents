// import Vue from 'vue'
// import idb from '@/api/idb-nodes';
import * as Automerge from 'automerge'
// import { v4 as uuidv4 } from 'uuid';

const state = () => ({
  doc: null
  // core: undefined,
  // currentNode : undefined,
  // nodeLinks: [],
  // nodeProperties: [],
  // brain: undefined,
  // graph: undefined,
  // db: undefined,
  // history: [],
  // lastCommand: null,
  // nodes: [],
  // links: []
})

const mutations = {
  setDoc(state, d){
    console.log(d)
    state.doc = d
  },
  updateDoc(state, newDoc) {
    state.doc = newDoc
    //render(newDoc)
  },
  addItem(state, text) {
  let newDoc = Automerge.change(state.doc, doc => {
    if (!doc.items) doc.items = []
    doc.items.push({ text, done: false })
  })
  state.updateDoc(newDoc)
}
  // pushHistory(state, c){
  //   state.lastCommand = c
  //   state.history.push(c)
  // },
  // setCurrentNode(state, n){
  //   console.log(n)
  //   state.currentNode = n
  // },
  // setNodeLinks(state, l){
  //   console.log(l)
  //   state.nodeLinks = l
  // },
  // setNodeProperties(state, p){
  //   console.log(p)
  //   state.nodeProperties = p
  // },
  // setBrain(state, b){
  //   console.log(b)
  //   state.brain = b
  // },
  // setGraph(state, g){
  //   console.log(g)
  //   state.graph = g
  // },
  // setDb(state, db){
  //   console.log(db)
  //   state.db = db
  // },
  // addNode(state, n){
  //
  //   //let {nodes, links} = state.graph.graphData()
  //   //nodes.push(n)
  //   //state.graph.graphData({ nodes: nodes, links: links })
  // }
}

const actions = {

  async newDoc(context){
    let doc = Automerge.init()
    context.commit('setDoc', doc)
  },
  // async saveNode(context, node){
  //   console.log(node)
  //   delete node.__ob__
  //   delete node.__threeObj
  //   try{
  //     await idb.saveNode(node);
  //     //await context.dispatch('getNodes') // pose problème de rafraichissement, certainement car on a enlevé __ob & __threeObj
  //   }catch(e){
  //     alert(e)
  //   }
  // },
  // async getNodes(context) {
  //   context.state.nodes = [];
  //   let nodes = await idb.getNodes();
  //   console.log("nodes in db", nodes)
  //   nodes.forEach(n => {
  //     n.type == undefined ? n.type = "neurone" : ""
  //     context.state.nodes.push(n);
  //   });
  //
  // },
  // async saveBrain(context){
  //
  //   let {nodes, links} = context.state.graph.graphData()
  //   console.log(nodes, links)
  //   let nodes_ids = []
  //   for (let node of nodes){
  //     console.log(node)
  //     delete node.__ob__
  //     delete node.__threeObj
  //     node.id == undefined ? node.id = uuidv4() : ""
  //     node.created == undefined ? node.created = Date.now() : ""
  //     node.updated = Date.now()
  //     nodes_ids.push(node.id)
  //     console.log(node)
  //     await idb.saveNode(node);
  //   }
  //
  //   let brain = {id: uuidv4(), nodes: nodes_ids, type: 'brain', color: "#fffff"}
  //   await idb.saveNode(brain);
  // //  context.dispatch('getNodes')
  //
  // }
  // async addWorkspace(context, w) {
  //   context.state.pod.workspaces.push(w)
  //   Vue.prototype.$addWorkspaceToPod(w)
  // },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
