(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-527793cf"],{"183a":function(t,e,a){},"70c7":function(t,e,a){},8469:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"create-translation mb10",attrs:{id:"create-translation"}},[a("span",{staticClass:"mr10"},[t._v("Выберите язык:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected_lang,expression:"selected_lang"}],attrs:{id:"select-translation-lang"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected_lang=e.target.multiple?a:a[0]},t.enableBtn]}},t._l(t.languages,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.attributes.name))])})),0),a("button",{staticClass:"btnBlack",attrs:{id:"create-translation-btn",disabled:""},on:{click:t.postTxt}},[t._v("Создать перевод")])]),a("textarea",{attrs:{id:"origin-text"}}),a("textarea",{attrs:{id:"text-area"}})])},i=[],l=a("5530"),r=a("8ab6"),o=a("bc3a"),s=a.n(o),c=a("2f62"),u=a("cf0b"),d={name:"BookTranslating",data:function(){return{id:this.$route.params.id,source_link:"",file:{},languages:[],selected_lang:""}},computed:Object(l["a"])({},Object(c["c"])(["loggedIn"])),created:function(){var t=this;s()(u["b"]+"/project-api/library/origin/read/?origin="+this.id).then((function(t){var e=t.data.data.source_link.file;s()(u["a"]+e).then((function(t){document.getElementById("origin-text").value=t.data}))})),this.loggedIn&&s()(u["b"]+"/project-api/library/origin/?origin="+this.id).then((function(e){s()(u["b"]+"/project-api/library/language/list").then((function(a){for(var n=0,i=[],l=0;l<a.data.data.length;l++)a.data.data[l].id!=e.data.data.origin.origin_language.id&&(i[n]=a.data.data[l],n++);t.languages=i}))}))},mounted:function(){this.loggedIn&&(document.getElementById("create-translation").style.display="flex")},methods:{enableBtn:function(){document.getElementById("create-translation-btn").disabled=!1},getUserSettings:function(){this.$store.dispatch("GET_USER_SETTINGS")},postTxt:function(){var t=document.getElementById("text-area").value;if(console.log("text: ",document.getElementById("text-area").value),""!==t){var e=new Blob([t],{type:"text/plain"});this.file=e;var a=document.getElementById("select-translation-lang").selectedIndex,n=document.getElementById("select-translation-lang").options[a].value;this.$store.dispatch("TRANSLATION_ADD",{origin:this.id,language:n,file:this.file}),this.$router.push("/book/"+this.id)}else alert("Сначала напишите что-нибудь!")}},components:{ButtonBlack:r["a"]}},g=d,f=(a("e401"),a("2877")),p=Object(f["a"])(g,n,i,!1,null,"5bf1c206",null);e["default"]=p.exports},"8ab6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",[t._v(" "+t._s(t.value)+" ")])},i=[],l={name:"ButtonBlack",props:{value:String}},r=l,o=(a("da07"),a("2877")),s=Object(o["a"])(r,n,i,!1,null,"feaeb9f6",null);e["a"]=s.exports},da07:function(t,e,a){"use strict";var n=a("183a"),i=a.n(n);i.a},e401:function(t,e,a){"use strict";var n=a("70c7"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-527793cf.42ed3111.js.map