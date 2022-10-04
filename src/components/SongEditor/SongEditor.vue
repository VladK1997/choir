<template>
<div class="song-editor">
  <h1 class="song-editor__title">Song Editor</h1>
  <form class="">
    <p class="song-editor__error" v-if="error.length">{{ error }}</p>
    <label>
      <input v-model="song.title" type="text" placeholder="Title">
    </label>
    <label class="input-file">
      <span class="input-file__title">GTP</span>
      <span class="input-file__wrap">
        <input @change="(el) => song.gtp = el.target.files[0]" type="file" placeholder="GTP">
      </span>
      <span class="input-file__name" v-if="song.gtp">
        {{ song.gtp?.name || (song.title || "File") }}.gtp
      </span>
    </label>
    <div class="dropdown" @click="(el) => el.srcElement.classList.toggle('active')">
      <div class="dropdown__header">
        PDF
      </div>
      <div class="dropdown__content">
        <div v-for="item in 5" :key="item">
          <label>
            <input type="text" :placeholder="`PDF${item} Title`" v-model="song[`pdf${item}_title`]">
          </label>
          <label :class="['input-file', song[`pdf${item}_file`] ? 'loaded' : '']">
            <span class="input-file__title">PDF{{ item }}</span>
            <span class="input-file__wrap">
            <input type="file" @change="(el) => song[`pdf${item}_file`] = el.target.files[0]">
          </span>
            <span class="input-file__name" v-if="song[`pdf${item}_file`]">
              {{ song[`pdf${item}_file`]?.name || `${song[`pdf${item}_title`] || "file"}.pdf`}}
            </span>
          </label>
          <hr v-if="item < 5">
        </div>
      </div>
    </div>
    <label>
      <textarea placeholder="Words" v-model="song.words"></textarea>
    </label>
    <Button type="button" @click="uploadSong">Save</Button>
  </form>
  <Loading :model="isLoading"/>
</div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import SongsModule from "@/store/songs";
import Button from "@/components/Button/Button.vue";
import { Watch } from "vue-property-decorator";
import {makeCopy} from "@/helpers/common";
import Loading from "@/components/Loading/Loading.vue";

@Component({
  name: "SongEditor",
  components: {Loading, Button},
})
export default class SongEditor extends Vue {
  song = {
    title: "",
    gtp: null,
    pdf1_title: "",
    pdf1_file: null,
    pdf2_title: "",
    pdf2_file: null,
    pdf3_title: "",
    pdf3_file: null,
    pdf4_title: "",
    pdf4_file: null,
    pdf5_title: "",
    pdf5_file: null,
    words: ""
  }
  error = "";
  mapSong(song: any): any {
      let mappedSong: any = {};
      mappedSong.title = song.title;
      mappedSong.words = song.words;
      mappedSong.gtp = song.gtp;
      song.pdf.forEach((item: any, index: number) => {
        const titleKey = `pdf${index+1}_title`;
        const fileKey = `pdf${index+1}_file`
        mappedSong[titleKey] = item.title;
        mappedSong[fileKey] = item.link;
      });
    return mappedSong;
  }
  uploadSong() {
    if (!this.song.title.length) {
      this.error = "Please enter the title";
      return;
    }
    SongsModule.uploadSong(this.song)
        .then((data) => {
          if (data.status === 201) {
            this.$router.push("/songs");
          }
          else {
            this.error = data.message;
          }
        })
  }
  get songs(): any {
    return SongsModule.getSongs;
  }
  get isLoading(): boolean {
    return SongsModule.isSongLoading;
  }
  @Watch("$route", { immediate: true, deep: true})
  protected onRouteChange(newValue: any) {
    if (newValue.params.id && newValue.params.id.length) {
      const index = newValue.params.id;
      Object.assign(this.song, this.mapSong(this.songs[index]));
    }
  }
 mounted(): void {
    if (!this.songs.length) {
      SongsModule.fetchSongs();
    }
 }
}
</script>
<style lang="scss" src="./styles.scss" />
