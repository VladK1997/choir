<template>
  <header class="header">
    <img :src="logo" alt="logo">
  </header>
</template>
<script>
import Component from "vue-class-component";
import Vue from 'vue';
import logo from "@/assets/rednote 1.svg";

@Component({
  name: "Header",
})
export default class Header extends Vue {
  logo = logo;
}
</script>
<style src="./styles.scss" lang="scss" />
