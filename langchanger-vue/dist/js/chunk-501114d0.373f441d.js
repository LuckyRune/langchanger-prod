(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-501114d0"],{"2abb":function(t,e,a){"use strict";var o=a("a598"),n=a.n(o);n.a},"36ad":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("h3",[t._t("header")],2),a("p",[t._t("header-desc")],2)])},n=[],r={name:"PageHeader"},i=r,s=(a("2abb"),a("2877")),c=Object(s["a"])(i,o,n,!1,null,"8a86c984",null);e["a"]=c.exports},"55a5":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PageHeader",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Библиотека")]},proxy:!0},{key:"header-desc",fn:function(){return[t._v("На данной странице отображены книги, отсортированные по актуальности.")]},proxy:!0}])}),a("section",{staticClass:"book-list"},[t._m(0),a("section",{staticClass:"origin-table"},[a("OriginTable")],1)])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[a("div",[a("h4",[t._v("Сортировка")]),a("span",[a("input",{attrs:{type:"radio",id:"book-featured",name:"book-sort",checked:""}}),a("label",{attrs:{for:"book-featured"}},[t._v("По актуальности")])]),a("span",[a("input",{attrs:{type:"radio",id:"book-popular",name:"book-sort"}}),a("label",{attrs:{for:"book-popular"}},[t._v("По популярности")])])]),a("div",[a("h4",[t._v("Формат")]),a("span",[a("input",{attrs:{type:"checkbox",id:"book-book",name:"book-type"}}),a("label",{attrs:{for:"book-book"}},[t._v("Книга")])]),a("span",[a("input",{attrs:{type:"checkbox",id:"book-guide",name:"book-type"}}),a("label",{attrs:{for:"book-guide"}},[t._v("Руководство")])])]),a("div",[a("h4",[t._v("Жанры")]),a("span",[a("input",{attrs:{type:"checkbox",id:"book-romance",name:"book-genre"}}),a("label",{attrs:{for:"book-romance"}},[t._v("Роман")])]),a("span",[a("input",{attrs:{type:"checkbox",id:"book-drama",name:"book-genre"}}),a("label",{attrs:{for:"book-drama"}},[t._v("Драма")])]),a("span",[a("input",{attrs:{type:"checkbox",id:"book-comedy",name:"book-genre"}}),a("label",{attrs:{for:"book-comedy"}},[t._v("Комедия")])]),a("span",[a("input",{attrs:{type:"checkbox",id:"book-tragic",name:"book-genre"}}),a("label",{attrs:{for:"book-tragic"}},[t._v("Трагедия")])]),a("span",[a("input",{attrs:{type:"checkbox",id:"book-fantastic",name:"book-genre"}}),a("label",{attrs:{for:"book-fantastic"}},[t._v("Фантастика")])]),a("span",[a("input",{attrs:{type:"checkbox",id:"book-military",name:"book-genre"}}),a("label",{attrs:{for:"book-military"}},[t._v("Военное")])]),a("span",[a("input",{attrs:{type:"checkbox",id:"book-fantasy",name:"book-genre"}}),a("label",{attrs:{for:"book-fantasy"}},[t._v("Фэнтэзи")])])]),a("div",[a("h4",[t._v("Возрастной рейтинг")]),a("span",[a("input",{attrs:{type:"checkbox",id:"book-0",name:"book-agelimit"}}),a("label",{attrs:{for:"book-0"}},[t._v("0+")])]),a("span",[a("input",{attrs:{type:"checkbox",id:"book-6",name:"book-agelimit"}}),a("label",{attrs:{for:"book-6"}},[t._v("6+")])]),a("span",[a("input",{attrs:{type:"checkbox",id:"book-12",name:"book-agelimit"}}),a("label",{attrs:{for:"book-12"}},[t._v("12+")])]),a("span",[a("input",{attrs:{type:"checkbox",id:"book-16",name:"book-agelimit"}}),a("label",{attrs:{for:"book-16"}},[t._v("16+")])]),a("span",[a("input",{attrs:{type:"checkbox",id:"book-18",name:"book-agelimit"}}),a("label",{attrs:{for:"book-18"}},[t._v("18+")])])])])}],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},i=[],s={name:"Pagination"},c=s,b=a("2877"),l=Object(b["a"])(c,r,i,!1,null,"8368364a",null),u=l.exports,p=a("36ad"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"asd"},[a("div",{staticClass:"origin-table"},t._l(t.paginatedOrigins,(function(t){return a("OriginLink",{key:t.id,attrs:{origins_data:t}})})),1),a("div",{staticClass:"pagination"},t._l(t.pages,(function(e){return a("div",{key:e,staticClass:"page",class:{"active-page":e===t.pageNumber},on:{click:function(a){return t.pageClick(e)}}},[t._v(t._s(e))])})),0)])},k=[],f=(a("fb6a"),a("5530")),g=a("d04f"),v=a("2f62"),m={name:"OriginTable",data:function(){return{originsPerPage:15,pageNumber:1}},components:{OriginLink:g["a"]},methods:Object(f["a"])({},Object(v["b"])(["GET_ORIGINS"]),{pageClick:function(t){this.pageNumber=t}}),computed:Object(f["a"])({},Object(v["c"])(["ORIGINS"]),{pages:function(){return Math.ceil(this.ORIGINS.length/10)},paginatedOrigins:function(){var t=(this.pageNumber-1)*this.originsPerPage,e=t+this.originsPerPage;return this.ORIGINS.slice(t,e)}}),mounted:function(){this.GET_ORIGINS()}},h=m,_=(a("5c5d"),Object(b["a"])(h,d,k,!1,null,"6198fd0a",null)),y=_.exports,x={name:"Library",created:function(){document.title="Библиотека - Langchanger"},components:{Pagination:u,PageHeader:p["a"],OriginTable:y}},O=x,P=(a("5d0f"),Object(b["a"])(O,o,n,!1,null,"64ac0194",null));e["default"]=P.exports},"5c5d":function(t,e,a){"use strict";var o=a("7017"),n=a.n(o);n.a},"5d0f":function(t,e,a){"use strict";var o=a("de80"),n=a.n(o);n.a},7017:function(t,e,a){},a598:function(t,e,a){},de80:function(t,e,a){},fb6a:function(t,e,a){"use strict";var o=a("23e7"),n=a("861d"),r=a("e8b5"),i=a("23cb"),s=a("50c4"),c=a("fc6a"),b=a("8418"),l=a("b622"),u=a("1dde"),p=a("ae40"),d=u("slice"),k=p("slice",{ACCESSORS:!0,0:0,1:2}),f=l("species"),g=[].slice,v=Math.max;o({target:"Array",proto:!0,forced:!d||!k},{slice:function(t,e){var a,o,l,u=c(this),p=s(u.length),d=i(t,p),k=i(void 0===e?p:e,p);if(r(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?n(a)&&(a=a[f],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return g.call(u,d,k);for(o=new(void 0===a?Array:a)(v(k-d,0)),l=0;d<k;d++,l++)d in u&&b(o,l,u[d]);return o.length=l,o}})}}]);
//# sourceMappingURL=chunk-501114d0.373f441d.js.map