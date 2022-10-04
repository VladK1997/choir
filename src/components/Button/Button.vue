<template>
  <button class="button" @click="$emit('click')">
    <span class="button__content"><slot /></span>
  </button>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  name: "Button",
})
export default class Button extends Vue {

}
</script>
<style lang="scss" src="./button.scss" />
