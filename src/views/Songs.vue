<template>
  <div class="container songs">
    <router-view/>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  name: "Songs",
})
export default class Songs extends Vue {

}
</script>
<style lang="scss">
  .songs {
    padding-top: 20px;
  }
</style>
