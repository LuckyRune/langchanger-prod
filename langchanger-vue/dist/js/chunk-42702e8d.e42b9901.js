(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42702e8d"],{"04dd":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("section",{attrs:{id:"content"}},[a("div",{attrs:{id:"wrapper"}},[a("section",{attrs:{id:"main"}},[t._t("default")],2),a("Footer")],1)])],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div"),n("nav",[n("Finder"),t._m(0),n("MainMenu")],1),n("div",[n("router-link",{attrs:{to:"/login"}},[n("ButtonWhite",{staticClass:"sign-in",attrs:{value:"Войти"}})],1),n("img",{attrs:{src:a("c626")}})],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"/"}},[n("img",{attrs:{src:a("a5f7")}})])}],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"text",placeholder:"Поиск..."}}),n("button",[n("img",{attrs:{src:a("98fb")}})])])}],l={name:"Finder"},u=l,v=(a("aa47"),a("2877")),d=Object(v["a"])(u,c,o,!1,null,"13b5dabe",null),f=d.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"/library"}},[t._v("Библиотека")])]),a("li",[a("a",{attrs:{href:"/users"}},[t._v("Пользователи")])]),a("li",[a("a",{attrs:{href:"/about"}},[t._v("О сайте")])])])}],_={name:"MainMenu"},p=_,b=(a("d6e1"),Object(v["a"])(p,m,h,!1,null,"f51d71da",null)),g=b.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",[t._v(" "+t._s(t.value)+" ")])},E=[],x={name:"ButtonWhite",props:{value:String}},w=x,k=(a("9cd4"),Object(v["a"])(w,C,E,!1,null,"4812cf26",null)),$=k.exports,O={name:"Header",components:{Finder:f,MainMenu:g,ButtonWhite:$}},M=O,j=(a("8dcf"),Object(v["a"])(M,r,i,!1,null,"9d510e68",null)),q=j.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("span",[t._v("© Copyright 2020")])])}],z={name:"Footer"},F=z,L=(a("8d83"),Object(v["a"])(F,y,P,!1,null,"93fce448",null)),D=L.exports,B={name:"DefaultLayout",components:{Header:q,Footer:D}},H=B,S=(a("c695"),Object(v["a"])(H,n,s,!1,null,"3a27149e",null));e["a"]=S.exports},1511:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("DefaultLayout",[a("h3",{staticClass:"mb20"},[t._v("Имя пользователя")]),a("div",{staticClass:"user-info mb20"},[a("PlaceholderEqual",{staticClass:"mr20",attrs:{value:"usericon"}}),a("div",[a("p",{staticClass:"mb10"},[a("span",{staticClass:"accent"},[t._v("Рейтинг: ")]),a("span",{attrs:{id:"user-rating"}},[t._v("356")])]),a("button",{staticClass:"mb10",on:{click:function(e){t.showModal=!0}}},[a("h5",{staticClass:"link"},[a("span",{staticClass:"mr5"},[t._v("Достижения")]),a("span",[t._v("("),a("span",{attrs:{id:"user-achievements"}},[t._v("7")]),t._v(")")])])]),a("div",{staticClass:"user-achievements mb10"},[a("PlaceholderEqual",{attrs:{size:"50",value:"achievement"}}),a("PlaceholderEqual",{attrs:{size:"50",value:"achievement"}}),a("PlaceholderEqual",{attrs:{size:"50",value:"achievement"}}),a("PlaceholderEqual",{attrs:{size:"50",value:"achievement"}})],1),a("a",{attrs:{href:"/user-onhold"}},[a("h5",{staticClass:"link"},[a("span",{staticClass:"mr5"},[t._v("Отложенное")]),a("span",[t._v("("),a("span",{attrs:{id:"user-on-hold"}},[t._v("4")]),t._v(")")])])])])],1),a("div",{staticClass:"user-desc mb40"},[a("h5",{staticClass:"mb5"},[t._v("Описание")]),a("p",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, vel! Dignissimos, perferendis. Quo sit fugit a quasi. Fugiat, minima nihil.")])]),a("div",[a("h5",{staticClass:"mb10"},[t._v("Переводы")]),a("table",[a("tr",[a("th",[t._v("Название")]),a("th",[t._v("Рейтинг")]),a("th",[t._v("Язык перевода")]),a("th",[t._v("Последнее изменение")]),a("th",[t._v("Изменения")])]),a("tr",[a("td",[a("a",{attrs:{href:"/book-page"}},[t._v("Война и мир")])]),a("td",[t._v("382")]),a("td",[a("a",{attrs:{href:"/translation"}},[t._v("Английский")])]),a("td",[t._v("20.12.20")]),a("td",[t._v("356")])]),a("tr",[a("td",[a("a",{attrs:{href:"/book-page"}},[t._v("Мёртвые души")])]),a("td",[t._v("382")]),a("td",[a("a",{attrs:{href:"/translation"}},[t._v("Английский")])]),a("td",[t._v("20.12.20")]),a("td",[t._v("356")])])])]),a("Modal",{attrs:{show:t.showModal},on:{close:function(e){t.showModal=!1}}},[a("header",{staticClass:"mb20"},[a("h3",{staticClass:"mb5"},[t._v("Достижения")]),a("p",[t._v("На данной странице отображены достижения пользователя.")])]),a("section",[a("div",[a("h3",[t._v("Название")]),a("div",[a("PlaceholderEqual",{staticClass:"mr5",attrs:{size:"150",value:"achievement"}}),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem laudantium et cum? Obcaecati perferendis rerum culpa incidunt unde magnam.")])],1)])])])],1)},s=[],r=a("04dd"),i=a("b0d9"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.show?n("div",{staticClass:"modal-wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[n("div",{staticClass:"modal"},[n("img",{attrs:{src:a("bb7c")},on:{click:function(e){return t.$emit("close")}}}),n("section",[t._t("default")],2)])]):t._e()])},o=[],l={name:"Achievements",props:{show:Boolean}},u=l,v=(a("4167"),a("2877")),d=Object(v["a"])(u,c,o,!1,null,"c1faf1d0",null),f=d.exports,m={name:"User",created:function(){document.title="Имя пользователя - Langchanger"},components:{DefaultLayout:r["a"],PlaceholderEqual:i["a"],Modal:f},data:function(){return{showModal:!1}}},h=m,_=(a("2501"),Object(v["a"])(h,n,s,!1,null,"4d153dd8",null));e["default"]=_.exports},1756:function(t,e,a){"use strict";var n=a("6bc7"),s=a.n(n);s.a},"17f4":function(t,e,a){},"1e1c":function(t,e,a){t.exports=a.p+"img/achievement.ca84c6e5.svg"},2491:function(t,e,a){},2501:function(t,e,a){"use strict";var n=a("e372"),s=a.n(n);s.a},3993:function(t,e,a){},4167:function(t,e,a){"use strict";var n=a("17f4"),s=a.n(n);s.a},4555:function(t,e,a){var n={"./achievement.svg":"1e1c","./back.svg":"7e60","./book.svg":"b23d","./close.svg":"bb7c","./finder.svg":"98fb","./logo.svg":"a5f7","./sign-in.svg":"c626","./usericon.svg":"fd9c"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="4555"},"64a4":function(t,e,a){},"6bc7":function(t,e,a){},"7e60":function(t,e,a){t.exports=a.p+"img/back.5525382b.svg"},"8d83":function(t,e,a){"use strict";var n=a("9d29"),s=a.n(n);s.a},"8dcf":function(t,e,a){"use strict";var n=a("64a4"),s=a.n(n);s.a},"98fb":function(t,e,a){t.exports=a.p+"img/finder.d1fb2b62.svg"},"9cd4":function(t,e,a){"use strict";var n=a("ef2b"),s=a.n(n);s.a},"9d29":function(t,e,a){},a5f7:function(t,e,a){t.exports=a.p+"img/logo.5872e56a.svg"},aa47:function(t,e,a){"use strict";var n=a("2491"),s=a.n(n);s.a},b0d9:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"svg-placeholder",style:{width:t.size+"px",height:t.size+"px"}},[n("img",{attrs:{src:a("4555")("./"+t.value+".svg")}})])},s=[],r={name:"PlaceholderEqual",props:{size:String,value:String}},i=r,c=(a("1756"),a("2877")),o=Object(c["a"])(i,n,s,!1,null,"67e6be6e",null);e["a"]=o.exports},b23d:function(t,e,a){t.exports=a.p+"img/book.71b900b1.svg"},bb7c:function(t,e,a){t.exports=a.p+"img/close.78a8d1bb.svg"},c626:function(t,e,a){t.exports=a.p+"img/sign-in.a4a08999.svg"},c695:function(t,e,a){"use strict";var n=a("3993"),s=a.n(n);s.a},cf20:function(t,e,a){},d6e1:function(t,e,a){"use strict";var n=a("cf20"),s=a.n(n);s.a},e372:function(t,e,a){},ef2b:function(t,e,a){},fd9c:function(t,e,a){t.exports=a.p+"img/usericon.b4a45e51.svg"}}]);
//# sourceMappingURL=chunk-42702e8d.e42b9901.js.map