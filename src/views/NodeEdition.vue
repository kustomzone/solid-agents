<template>
  <div>
    <b-container v-if="tempNode != null">
      <div>
        <b-button-toolbar key-nav aria-label="Toolbar with button groups">
          <b-button-group class="mx-1">
            <b-button v-b-toggle.collapse-1 variant="primary"
              ><b-icon-pen></b-icon-pen
              ><!-- {{tempNode.name || tempNode.id}}--></b-button
            >
            <b-button @click.stop="copy" size="sm mr-2" variant="outline-success"
              ><b-icon-clipboard-plus></b-icon-clipboard-plus
            ></b-button>
          </b-button-group>
          <b-button-group class="mx-1">
            <b-form-input type="color" v-model="tempNode.color" size="sm"></b-form-input>
            <b-form-select
              v-model="tempNode.shape"
              :options="options"
              size="sm"
            ></b-form-select>

            <!--
            <b-button>Edit</b-button>
            <b-button>Undo</b-button>
            <b-button>Redo</b-button> -->
          </b-button-group>
          <b-button @click="remove" variant="danger"
            ><b-icon-trash></b-icon-trash>
            <!--{{tempNode.name || tempNode.id}}--></b-button
          >

          <!-- <b-button-group class="mx-1">
          <b-button>&rsaquo;</b-button>
          <b-button>&raquo;</b-button>
        </b-button-group> -->
        </b-button-toolbar>
      </div>

      <!-- <b-row>
    <b-col >
    <b-button v-b-toggle.collapse-1 variant="primary">Edit {{tempNode.name || tempNode.id}}</b-button>
    <b-button @click.stop="copy"  size="sm mr-2" variant="outline-success"><b-icon-clipboard-plus></b-icon-clipboard-plus></b-button>
  </b-col>

  <b-col >
  <b-button @click="remove" variant="danger">Remove {{tempNode.name || tempNode.id}}</b-button>
</b-col>
</b-row> -->

      <b-collapse id="collapse-1" visible class="mt-2">
        <!-- <b-row>

  <b-col md="10">
  <b-row>
  <b-col cols="10"> -->
        <b-form-input v-model="tempNode.name" placeholder="name"></b-form-input>
        <!-- </b-col>
  <b-col cols="6" md="2">

  <b-form-input type="color" v-model="tempNode.color" size="sm"></b-form-input>
</b-col>
</b-row>
<b-row>
<b-col cols="10"> -->
        <b-form-input v-model="tempNode.type" placeholder="type"></b-form-input>
        <!-- </b-col>
<b-col cols="6" md="2"> -->

        <!-- </b-col>
</b-row> -->

        <div v-if="tempNode.type == 'brain'">
          <h3>External Brain !</h3>
          This node is an external brain !
          <br />
          <b-button @click="openExternal" variant="info">{{ tempNode.name }}</b-button>
        </div>

        <div v-for="p in Object.keys(currentNode)" :key="p">
          <div
            v-if="!jsonldProps.includes(p) && !graphProps.includes(p) && p != 'reverse'"
          >
            <PropertieView :p="p" :v="currentNode[p]" />
          </div>
        </div>
        <!-- </b-col>

<b-col> -->

        <div v-if="currentNode.reverse != undefined">
          <b-button size="sm" v-b-toggle.collapse-backlinks variant="light"
            >Backlinks</b-button
          >
          <b-collapse id="collapse-backlinks" class="mt-2">
            <div v-for="(p, j) in Object.keys(currentNode.reverse)" :key="j">
              <PropertieView :p="p" :v="currentNode.reverse[p]" />
            </div>
          </b-collapse>
        </div>
        <!-- </b-col>
</b-row> -->

        <b-button @click="cancel">Cancel</b-button>
        <b-button @click="save" variant="success">Save</b-button>
        <hr />
      </b-collapse>
    </b-container>
  </div>
</template>

<script>
import ToastMixin from "@/mixins/ToastMixin";

export default {
  name: "NodeEdition",
  mixins: [ToastMixin],
  components: {
    PropertieView: () => import("@/views/PropertieView"),
  },
  data() {
    return {
      tempNode: null,
      graphProps: ["__threeObj", "__obj__", "index", "x", "y", "z", "vx", "vy", "vz"],
      jsonldProps: ["@context", "id"],
      //selected_shape: null,
      options: [
        { value: undefined, text: "shape" },
        { value: "sphere", text: "sphere" },
        { value: "box", text: "box" },
        { value: "cone", text: "cone" },
        { value: "cylinder", text: "cylinder" },
        { value: "dodecahedron", text: "dodecahedron" },
        { value: "torus", text: "torus" },
        { value: "torusKnot", text: "torus Knot" },
      ],
    };
  },

  methods: {
    async save() {
      console.log(this.tempNode);
      await this.$store.dispatch("core/saveNode", this.tempNode);
      await this.$store.dispatch("core/getNodes"); // pose problème de rafraichissement, certainement car on a enlevé __ob & __threeObj
      this.$store.commit("core/setCurrentNode", null);
    },
    cancel() {
      this.$store.commit("core/setCurrentNode", null);
    },
    async remove() {
      if (confirm("Are you sure you want to remove this node?")) {
        // Save it!
        console.log("ok to remove.", this.tempNode);
        await this.$store.dispatch("core/removeNode", this.tempNode);
        this.$store.commit("core/setCurrentNode", null);
      }
    },
    copy() {
      console.log(this.tempNode);
      let id = this.tempNode.id.startsWith("http")
        ? this.tempNode.id
        : this.tempNode["@context"]["@base"] + this.tempNode.id;
      console.log("id", id);
      let copyText = id; //window.location.href
      let app = this;
      //  !copyText.endsWith(".ttl") ?
      //copyText = copyText+this.file.url //: ""
      //  console.log(copyText)
      navigator.clipboard.writeText(copyText).then(
        function () {
          /* clipboard successfully set */
          //  console.log("clipok", copyText)
          app.makeToast(
            "The id is in your clipboard ;-)",
            copyText + ". Use Ctrl+V to use it",
            "success"
          );
        },
        function () {
          /* clipboard write failed */
          //  console.log("clipERROR", copyText)
          app.makeToast(
            "Houston, we've got a problem with the clipboard ;-(",
            copyText,
            "warning"
          );
        }
      );
    },
    openExternal() {
      console.log(this.tempNode);
      this.$loadBrainFromSolid(this.tempNode.id)
  
    },
  },
  watch: {
    currentNode() {
      this.tempNode = this.currentNode;
    },
    files() {
      this.processFiles();
    },
    // tempNode(){
    //   if (this.tempNode.shape == undefined || this.tempNode.shape == null ){
    //     delete this.tempNode.shape
    //   }
    //
    // }
  },
  computed: {
    currentNode() {
      return this.$store.state.core.currentNode;
    },
    graph() {
      return this.$store.state.core.graph;
    },
  },
};
</script>

<style scoped></style>
