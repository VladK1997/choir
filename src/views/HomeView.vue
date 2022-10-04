<template>
  <div class="home">
    <div class="container">
      <Grid />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Grid from "@/components/Grid/Grid.vue"; // @ is an alias to /src

export default Vue.extend({
  name: 'HomeView',
  components: {
    Grid,
    HelloWorld,
  },
});
</script>
<style lang="scss">
.home{
  padding: 32px;
}
</style>
