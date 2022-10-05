(function(){"use strict";var t={7265:function(t,e,o){var n,s,r=o(6369),i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{id:"app"}},[e("Header"),e("router-view")],1)},l=[],a=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("router-link",{staticClass:"header__logo",attrs:{to:"/"}},[e("img",{attrs:{src:t.logo,alt:"logo"}})])],1)},c=[],u=o(2482),d=o(1013),p=o.p+"img/rednote 1.e0665263.svg";let f=(n=(0,d.ZP)({name:"Header"}),n(s=class extends r.ZP{constructor(...t){super(...t),(0,u.Z)(this,"logo",p)}})||s);var g=f,v=o(1001),h=(0,v.Z)(g,a,c,!1,null,null,null),_=h.exports,m=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};let y=class extends r.ZP{mounted(){console.log("/choir/")}};y=m([(0,d.ZP)({name:"App",components:{Header:_}})],y);var b=y,P=b,w=(0,v.Z)(P,i,l,!1,null,null,null),O=w.exports,Z=o(2631),C=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"home"},[e("div",{staticClass:"container"},[e("Grid")],1)])},S=[],x=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._m(0),e("h3",[t._v("Installed CLI Plugins")]),t._m(1),e("h3",[t._v("Essential Links")]),t._m(2),e("h3",[t._v("Ecosystem")]),t._m(3)])},k=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),e("br"),t._v(" check out the "),e("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[t._v("typescript")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),e("li",[e("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",[e("li",[e("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),e("li",[e("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),e("li",[e("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],j=r.ZP.extend({name:"HelloWorld",props:{msg:String}}),R=j,I=(0,v.Z)(R,x,k,!1,null,"8185a43a",null),L=I.exports,M=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"grid"},[t._l(t.songs,(function(o){return e("SongCard",{attrs:{item:o},on:{openModal:t.openModal}})})),e("ItemsModal",{attrs:{items:t.modalItems,model:t.isItemsModalOpened,title:"Choose Items"},on:{"update:model":function(e){t.isItemsModalOpened=e}}}),e("WordsModal",{attrs:{model:t.isWordsModalOpened,title:"Words",words:t.currentWords},on:{"update:model":function(e){t.isWordsModalOpened=e}}}),e("Loading",{attrs:{model:t.isLoading}})],2)},T=[],$=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"song-card"},[e("p",{staticClass:"song-card__title"},[t._v(t._s(t.item.title))]),e("div",{staticClass:"song-card__items"},[t.item.gtp?e("BntTab",{staticClass:"song-card__item",attrs:{link:t.item.gtp}},[t._v(" GTP ")]):t._e(),t.item.pdf.length?e("BntTab",{staticClass:"song-card__item",attrs:{type:"button"},nativeOn:{click:function(e){return t.openModal("pdf",t.item.pdf)}}},[t._v(" PDF ")]):t._e(),t.item.words?e("BntTab",{staticClass:"song-card__item",attrs:{type:"button"},nativeOn:{click:function(e){return t.openModal("words",t.item.words)}}},[t._v(" LYRICS ")]):t._e()],1)])},B=[],D=o(4815),E=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",["link"===t.type?e("a",{staticClass:"btn-tab",attrs:{href:t.link}},[t._t("default")],2):e("button",{staticClass:"btn-tab"},[t._t("default")],2)])},N=[],H=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};let W=class extends r.ZP{constructor(...t){super(...t),(0,u.Z)(this,"type",void 0),(0,u.Z)(this,"link",void 0)}};H([(0,D.fI)({type:String,default:"link"})],W.prototype,"type",void 0),H([(0,D.fI)(String)],W.prototype,"link",void 0),W=H([(0,d.ZP)({name:"BtnTab"})],W);var A=W,F=A,G=(0,v.Z)(F,E,N,!1,null,null,null),U=G.exports,z=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};let Y=class extends r.ZP{constructor(...t){super(...t),(0,u.Z)(this,"item",void 0)}openModal(t,e){this.$emit("openModal",t,e)}};z([(0,D.fI)(Object)],Y.prototype,"item",void 0),Y=z([(0,d.ZP)({name:"GridItem",components:{BntTab:U}})],Y);var q=Y,V=q,J=(0,v.Z)(V,$,B,!1,null,null,null),K=J.exports,Q=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpened,expression:"isOpened"}],staticClass:"modal modal-items"},[e("div",{staticClass:"modal__back",on:{click:t.close}}),e("div",{staticClass:"modal__content"},[e("div",{staticClass:"modal__header"},[t._v(" "+t._s(t.title)+" ")]),e("div",{staticClass:"modal__body"},[e("div",{staticClass:"modal-items__items"},t._l(t.items,(function(o){return e("BntTab",{key:o.title,staticClass:"modal-items__item",attrs:{link:o.link}},[t._v(" "+t._s(o.title)+" ")])})),1)]),e("div",{staticClass:"modal__footer"},[e("Button",{on:{click:t.close}},[t._v("Close")])],1)])])},X=[],tt=function(){var t=this,e=t._self._c;t._self._setupProxy;return"button"===t.type?e("button",{class:["button",t.uiType?`button--${t.uiType}`:""],on:{click:function(e){return t.$emit("click")}}},[e("span",{staticClass:"button__content"},[t._t("default")],2)]):"router-link"===t.type?e("router-link",{class:["button",t.uiType?`button--${t.uiType}`:""],attrs:{to:t.to}},[e("span",{staticClass:"button__content"},[t._t("default")],2)]):t._e()},et=[],ot=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};let nt=class extends r.ZP{constructor(...t){super(...t),(0,u.Z)(this,"type",void 0),(0,u.Z)(this,"to",void 0),(0,u.Z)(this,"uiType",void 0)}};ot([(0,D.fI)({type:String,default:"button"})],nt.prototype,"type",void 0),ot([(0,D.fI)({type:String,default:"/"})],nt.prototype,"to",void 0),ot([(0,D.fI)({type:String,default:null})],nt.prototype,"uiType",void 0),nt=ot([(0,d.ZP)({name:"Button"})],nt);var st=nt,rt=st,it=(0,v.Z)(rt,tt,et,!1,null,null,null),lt=it.exports,at=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};let ct=class extends r.ZP{constructor(...t){super(...t),(0,u.Z)(this,"title",void 0),(0,u.Z)(this,"items",void 0),(0,u.Z)(this,"isOpened",void 0)}close(){console.log("close"),this.isOpened=!1}};at([(0,D.fI)(String)],ct.prototype,"title",void 0),at([(0,D.fI)(Array)],ct.prototype,"items",void 0),at([(0,D.vZ)("model")],ct.prototype,"isOpened",void 0),ct=at([(0,d.ZP)({name:"ItemsModal",components:{BntTab:U,Button:lt}})],ct);var ut=ct,dt=ut,pt=(0,v.Z)(dt,Q,X,!1,null,null,null),ft=pt.exports,gt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isModalOpened,expression:"isModalOpened"}],staticClass:"modal words-modal"},[e("div",{staticClass:"modal__back",on:{click:t.close}}),e("div",{staticClass:"modal__content"},[e("div",{staticClass:"modal__header"},[t._v(" "+t._s(t.title)+" ")]),e("div",{staticClass:"modal__body"},[e("pre",[t._v(t._s(t.words))])]),e("div",{staticClass:"modal__footer"},[e("Button",{on:{click:t.close}},[t._v("Close")])],1)])])},vt=[],ht=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};let _t=class extends r.ZP{constructor(...t){super(...t),(0,u.Z)(this,"title",void 0),(0,u.Z)(this,"words",void 0),(0,u.Z)(this,"isModalOpened",void 0)}close(){this.isModalOpened=!1}};ht([(0,D.fI)(String)],_t.prototype,"title",void 0),ht([(0,D.fI)(String)],_t.prototype,"words",void 0),ht([(0,D.vZ)("model")],_t.prototype,"isModalOpened",void 0),_t=ht([(0,d.ZP)({name:"WordsModal",components:{Button:lt}})],_t);var mt=_t,yt=mt,bt=(0,v.Z)(yt,gt,vt,!1,null,null,null),Pt=bt.exports,wt=o(3365),Ot=o(3822);r.ZP.use(Ot.ZP);var Zt=new Ot.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),Ct=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};wt.vc.rawError=!0;let St=class extends wt.g4{constructor(...t){super(...t),(0,u.Z)(this,"songs",[]),(0,u.Z)(this,"isSongLoadingStore",!1)}async fetchSongs(){const{context:t}=this;t.commit("setIsSongLoading",!0),fetch("https://choir-rednote.herokuapp.com/songs").then((t=>t.json())).then((e=>{t.commit("setIsSongLoading",!1),t.commit("setSongs",e)}))}async updateSong(t){const{context:e}=this;e.commit("setIsSongLoading",!0);const o=new FormData;return Object.keys(t).forEach((e=>{o.append(e,t[e]||"")})),fetch("https://choir-rednote.herokuapp.com/songs",{method:"PUT",body:o,cache:"no-cache",headers:{"Access-Control-Allow-Origin":"*"}}).then((t=>t)).finally((()=>{e.commit("setIsSongLoading",!1)}))}async deleteSong(t){const{context:e}=this;return await fetch(`https://choir-rednote.herokuapp.com/songs?id=${t}`,{method:"DELETE",cache:"no-cache",headers:{"Access-Control-Allow-Origin":"*"}}).then((t=>t)).finally((()=>{e.commit("setIsSongLoading",!1)}))}async uploadSong(t){const{context:e}=this;e.commit("setIsSongLoading",!0);const o=new FormData;return Object.keys(t).forEach((e=>{o.append(e,t[e]||"")})),await fetch("https://choir-rednote.herokuapp.com/songs",{method:"POST",body:o,cache:"no-cache",headers:{"Access-Control-Allow-Origin":"*"}}).then((t=>t)).finally((()=>{e.commit("setIsSongLoading",!1)}))}setSongs(t){this.songs=t}setIsSongLoading(t){this.isSongLoadingStore=t}get getSongs(){return this.songs}get isSongLoading(){return this.isSongLoadingStore}};Ct([wt.aU],St.prototype,"fetchSongs",null),Ct([wt.aU],St.prototype,"updateSong",null),Ct([wt.aU],St.prototype,"deleteSong",null),Ct([wt.aU],St.prototype,"uploadSong",null),Ct([wt.mm],St.prototype,"setSongs",null),Ct([wt.mm],St.prototype,"setIsSongLoading",null),St=Ct([(0,wt.Yl)({namespaced:!0,name:"SongsModule",dynamic:!0,store:Zt})],St);var xt=(0,wt.rT)(St),kt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.model,expression:"model"}],staticClass:"loading"},[t._m(0)])},jt=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"loading__el"},[e("div",{staticClass:"lds-ring"},[e("div"),e("div"),e("div"),e("div")])])}],Rt=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};let It=class extends r.ZP{constructor(...t){super(...t),(0,u.Z)(this,"model",void 0)}};Rt([(0,D.fI)(Boolean)],It.prototype,"model",void 0),It=Rt([(0,d.ZP)({name:"Button"})],It);var Lt=It,Mt=Lt,Tt=(0,v.Z)(Mt,kt,jt,!1,null,null,null),$t=Tt.exports,Bt=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};let Dt=class extends r.ZP{constructor(...t){super(...t),(0,u.Z)(this,"modalItems",[]),(0,u.Z)(this,"currentWords",""),(0,u.Z)(this,"isItemsModalOpened",!1),(0,u.Z)(this,"isWordsModalOpened",!1)}openModal(t,e){switch(console.log(t,e),t){case"words":this.currentWords=e,this.isWordsModalOpened=!0;break;default:this.modalItems=e,this.isItemsModalOpened=!0;break}}get songs(){return xt.getSongs}get isLoading(){return xt.isSongLoading}mounted(){xt.fetchSongs()}};Dt=Bt([(0,d.ZP)({name:"Grid",components:{Loading:$t,WordsModal:Pt,ItemsModal:ft,SongCard:K}})],Dt);var Et=Dt,Nt=Et,Ht=(0,v.Z)(Nt,M,T,!1,null,null,null),Wt=Ht.exports,At=r.ZP.extend({name:"HomeView",components:{Grid:Wt,HelloWorld:L}}),Ft=At,Gt=(0,v.Z)(Ft,C,S,!1,null,null,null),Ut=Gt.exports,zt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container songs"},[e("router-view"),e("Loading",{attrs:{model:t.isLoading}})],1)},Yt=[],qt=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};let Vt=class extends r.ZP{get isLoading(){return xt.isSongLoading}};Vt=qt([(0,d.ZP)({name:"Songs",components:{Loading:$t}})],Vt);var Jt=Vt,Kt=Jt,Qt=(0,v.Z)(Kt,zt,Yt,!1,null,null,null),Xt=Qt.exports,te=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"songs-list"},[e("Button",{attrs:{type:"router-link",to:"/"}},[t._v(" Home ")]),e("div",{staticClass:"songs-list__topbar"},[e("Button",{attrs:{type:"router-link",to:"songs/editor"}},[t._v(" Add New ")])],1),e("div",{staticClass:"songs-list__items"},t._l(t.songs,(function(o,n){return e("router-link",{key:o.title,staticClass:"songs-list__item",attrs:{to:`songs/editor/${n}`}},[t._v(" "+t._s(o.title)+" ")])})),1)],1)},ee=[],oe=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};let ne=class extends r.ZP{get songs(){return xt.getSongs}mounted(){xt.fetchSongs()}};ne=oe([(0,d.ZP)({name:"SongsList",components:{Button:lt}})],ne);var se=ne,re=se,ie=(0,v.Z)(re,te,ee,!1,null,null,null),le=ie.exports,ae=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"song-editor"},[e("div",{staticClass:"song-editor__topbar"},[e("h1",{staticClass:"song-editor__title"},[t._v("Song Editor")]),t.isNew?t._e():e("Button",{attrs:{"ui-type":"danger",type:"button"},on:{click:t.deleteSong}},[e("Icon",{attrs:{icon:"trash"}})],1)],1),e("div",{},[t.error.length?e("p",{staticClass:"song-editor__error"},[t._v(t._s(t.error))]):t._e(),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.song.title,expression:"song.title"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:t.song.title},on:{input:function(e){e.target.composing||t.$set(t.song,"title",e.target.value)}}})]),e("label",{staticClass:"input-file"},[e("span",{staticClass:"input-file__title"},[t._v("GTP")]),e("span",{staticClass:"input-file__wrap"},[e("input",{attrs:{type:"file",placeholder:"GTP"},on:{change:e=>t.song.gtp=e.target.files[0]}})]),t.song.gtp?e("span",{staticClass:"input-file__name"},[t._v(" "+t._s(t.song.gtp?.name||t.song.title||"File")+".gtp ")]):t._e()]),e("div",{staticClass:"dropdown",on:{click:t=>t.srcElement.classList.toggle("active")}},[e("div",{staticClass:"dropdown__header"},[t._v(" PDF ")]),e("div",{staticClass:"dropdown__content"},t._l(5,(function(o){return e("div",{key:o},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.song[`pdf${o}_title`],expression:"song[`pdf${item}_title`]"}],attrs:{type:"text",placeholder:`PDF${o} Title`},domProps:{value:t.song[`pdf${o}_title`]},on:{input:function(e){e.target.composing||t.$set(t.song,`pdf${o}_title`,e.target.value)}}})]),e("label",{class:["input-file",t.song[`pdf${o}_file`]?"loaded":""]},[e("span",{staticClass:"input-file__title"},[t._v("PDF"+t._s(o))]),e("span",{staticClass:"input-file__wrap"},[e("input",{attrs:{type:"file"},on:{change:e=>t.song[`pdf${o}_file`]=e.target.files[0]}})]),t.song[`pdf${o}_file`]?e("span",{staticClass:"input-file__name"},[t._v(" "+t._s(t.song[`pdf${o}_file`]?.name||`${t.song[`pdf${o}_title`]||"file"}.pdf`)+" ")]):t._e()]),o<5?e("hr"):t._e()])})),0)]),e("label",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.song.words,expression:"song.words"}],attrs:{placeholder:"Words"},domProps:{value:t.song.words},on:{input:function(e){e.target.composing||t.$set(t.song,"words",e.target.value)}}})]),e("Button",{attrs:{type:"button"},on:{click:t.save}},[t._v("Save")])],1)])},ce=[],ue=(o(7658),function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"icon"},["trash"===t.icon?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"}})]):t._e()])}),de=[],pe=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};let fe=class extends r.ZP{constructor(...t){super(...t),(0,u.Z)(this,"icon",void 0)}};pe([(0,D.fI)(String)],fe.prototype,"icon",void 0),fe=pe([(0,d.ZP)({name:"Button"})],fe);var ge=fe,ve=ge,he=(0,v.Z)(ve,ue,de,!1,null,null,null),_e=he.exports,me=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};let ye=class extends r.ZP{constructor(...t){super(...t),(0,u.Z)(this,"isNew",!0),(0,u.Z)(this,"song",{title:"",gtp:null,pdf1_title:"",pdf1_file:null,pdf2_title:"",pdf2_file:null,pdf3_title:"",pdf3_file:null,pdf4_title:"",pdf4_file:null,pdf5_title:"",pdf5_file:null,words:"",id:""}),(0,u.Z)(this,"error","")}mapSong(t){let e={};return e.title=t.title,e.words=t.words,e.gtp=t.gtp,e.id=t.id,t.pdf.forEach(((t,o)=>{const n=`pdf${o+1}_title`,s=`pdf${o+1}_file`;e[n]=t.title,e[s]=t.link})),e}async deleteSong(){const t=await xt.deleteSong(this.song.id);t.status>199&&t.status<300&&this.$router.push("/songs")}async save(){let t={status:403,message:"Error Happened"};this.song.title.length?(t=this.isNew?await this.uploadSong():await this.updateSong(),t.status>199&&t.status<300?this.$router.push("/songs"):this.error=t.message):this.error="Please enter the title"}async uploadSong(){return await xt.uploadSong(this.song)}async updateSong(){return await xt.updateSong(this.song)}get songs(){return xt.getSongs}onRouteChange(t){if(t.params.id&&t.params.id.length){const e=t.params.id;this.song=this.mapSong(this.songs[e]),this.isNew=!1}}mounted(){this.songs.length||xt.fetchSongs()}};me([(0,D.RL)("$route",{immediate:!0,deep:!0})],ye.prototype,"onRouteChange",null),ye=me([(0,d.ZP)({name:"SongEditor",components:{Icon:_e,Button:lt}})],ye);var be=ye,Pe=be,we=(0,v.Z)(Pe,ae,ce,!1,null,null,null),Oe=we.exports;r.ZP.use(Z.ZP);const Ze=[{path:"",name:"home",component:Ut},{path:"/songs",name:"",component:Xt,children:[{path:"",name:"songsList",component:le},{path:"editor/:id?",name:"SongEditor",component:Oe}]},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,2323))}],Ce=new Z.ZP({mode:"hash",base:"/choir",routes:Ze});var Se=Ce;r.ZP.config.productionTip=!1,new r.ZP({router:Se,store:Zt,render:t=>t(O)}).$mount("#app")}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,r){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],s=t[u][1],r=t[u][2];for(var l=!0,a=0;a<n.length;a++)(!1&r||i>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[a])}))?n.splice(a--,1):(l=!1,r<i&&(i=r));if(l){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,s,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.5763ecbe.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="choir:";o.l=function(n,s,r,i){if(t[n])t[n].push(s);else{var l,a;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+r){l=d;break}}l||(a=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",e+r),l.src=n),t[n]=[s];var p=function(e,o){l.onerror=l.onload=null,clearTimeout(f);var s=t[n];if(delete t[n],l.parentNode&&l.parentNode.removeChild(l),s&&s.forEach((function(t){return t(o)})),e)return e(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),a&&document.head.appendChild(l)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/choir/"}(),function(){var t={143:0};o.f.j=function(e,n){var s=o.o(t,e)?t[e]:void 0;if(0!==s)if(s)n.push(s[2]);else{var r=new Promise((function(o,n){s=t[e]=[o,n]}));n.push(s[2]=r);var i=o.p+o.u(e),l=new Error,a=function(n){if(o.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,s[1](l)}};o.l(i,a,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,r,i=n[0],l=n[1],a=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(a)var u=a(o)}for(e&&e(n);c<i.length;c++)r=i[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},n=self["webpackChunkchoir"]=self["webpackChunkchoir"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(7265)}));n=o.O(n)})();
//# sourceMappingURL=app.5d5c2d85.js.map