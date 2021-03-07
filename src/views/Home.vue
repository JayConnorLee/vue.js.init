<template>
  <div>
    <h1>
      Welcome To Home<br />
      {{ title }}!
    </h1>

    <input type="text" v-model="input1" />
    <button type="button" @click="getData">Get</button>
    <button type="button" @click="setData">Set</button>
    <button type="button" @click="ShowTable">Show Table</button>

    <br>
    <select class="form-contorl" v-model="region" @change="changeRegion">
      <option :key="i" :value="d.v" v-for="(d, i) in options">{{d.t}}</option>
    </select>

    <table class="table table-bordered" v-if="tableShow">
      <tr :key="i" v-for="(d, i) in options">
        <td>{{d.v}}</td>
        <td>{{d.t}}</td>
      </tr>

    </table>

  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "개발자의 품격",
      title2: "Seoul",
      input1: "acboeuoeu",
      options: [
        { v: "S", t: "SSS" },
        { v: "J", t: "JJJ" },
        { v: "B", t: "BBB" },
      ],
      region: "J",
      tableShow: false,
    };
  },
  watch: {
    input1() {
      console.log(this.input1);
    },
  },

  methods: {
    getData() {
      alert(this.input1);
    },
    setData() {
      this.input1 = 12345;
    },
    ShowTable(){
      this.data.tableShow = true
    },
    changeRegion(){
      // alert(this.region);
    },
  },

  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdated");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>
