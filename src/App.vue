<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<style>
</style>
<script>
import Header from "@/components/Header/Header.vue";
import Component from "vue-class-component";
import Vue from 'vue';
@Component({
  name: "App",
  components: {Header},
})
export default class App extends Vue {
}
</script>
