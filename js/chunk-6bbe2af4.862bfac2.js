(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bbe2af4"],{"20f6":function(t,a,e){},"6c61":function(t){t.exports=JSON.parse('[{"image":"/static/customers/i4pro.png","name":"I4PRO","path":"http://www.i4pro.com.br/"},{"image":"/static/customers/prudential.png","name":"Prudential","path":"https://www.prudentialdobrasil.com.br/"},{"image":"/static/customers/fator-seguradora.png","name":"Fator Seguradora","path":"https://www.fatorseguradora.com.br/"},{"image":"/static/customers/fairfax.png","name":"Fairfax Brasil","path":"http://www.fairfax.com.br/"},{"image":"/static/customers/stitdata.png","name":"ST IT Data","path":"http://stitconsulting.com.br/"},{"image":"/static/customers/4-insights.png","name":"4Insights","path":"http://www.4insights.net/"},{"image":"/static/customers/kroton.png","name":"Kroton","path":"http://www.kroton.com.br/"},{"image":"/static/customers/sbt.png","name":"SBT","path":"https://www.sbt.com.br/"},{"image":"/static/customers/carrefour.png","name":"Carrefour","path":"https://www.carrefour.com.br/"},{"image":"/static/customers/pao-de-acucar.png","name":"Pão de Açucar","path":"https://www.paodeacucar.com/"},{"image":"/static/customers/metro-sp.png","name":"Metrô","path":"http://www.metro.sp.gov.br/"},{"image":"/static/customers/emtu-sp.png","name":"EMTU","path":"http://www.emtu.sp.gov.br/"},{"image":"/static/customers/danone.png","name":"Danone","path":"http://www.danonebaby.com.br/"},{"image":"/static/customers/hospital-sirio-libanes.png","name":"Hospital Sírio Libanês","path":"https://www.hospitalsiriolibanes.org.br/"}]')},"872c":function(t,a,e){"use strict";var r={computed:{isMobile:function(){return this.$vuetify.breakpoint.xs}}};a["a"]=r},a523:function(t,a,e){"use strict";e("4de4"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85"),e("498a"),e("a15b");var r=e("2b0e");function s(t){return r["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var r=e.props,s=e.data,n=e.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var i=s.attrs;if(i){s.attrs={};var o=Object.keys(i).filter((function(t){if("slot"===t)return!1;var a=i[t];return t.startsWith("data-")?(s.attrs[t]=a,!1):a||"string"===typeof a}));o.length&&(s.staticClass+=" ".concat(o.join(" ")))}return r.id&&(s.domProps=s.domProps||{},s.domProps.id=r.id),a(r.tag,s,n)}})}var n=e("d9f7");a["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,r=a.props,s=a.data,i=a.children,o=s.attrs;return o&&(s.attrs={},e=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(s.attrs[t]=a,!1):a||"string"===typeof a}))),r.id&&(s.domProps=s.domProps||{},s.domProps.id=r.id),t(r.tag,Object(n["a"])(s,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),i)}})},be07:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"padding-section customers",attrs:{id:"customers"}},[e("span",{staticClass:"shape"}),e("v-container",[e("appTitle",{attrs:{title:"Clientes",subtitle:"Principais clientes atendidos"}}),e("v-row",{staticClass:"mt-10"},[e("v-col",[e("carousel",{attrs:{autoplay:!0,perPage:t.isMobile?2:4,paginationActiveColor:"#008ce3",paginationPadding:0}},t._l(t.items,(function(t,a){return e("slide",{key:a},[e("a",{attrs:{href:t.path,target:"_blank",title:t.name}},[e("img",{attrs:{src:t.image,alt:t.name}})])])})),1)],1)],1)],1)],1)},s=[],n=(e("d3b7"),e("3ca3"),e("ddb0"),e("6c61")),i=e("872c"),o=e("0a63"),c={mixins:[i["a"]],components:{appTitle:function(){return e.e("chunk-2d0b15b5").then(e.bind(null,"2001"))},Carousel:o["Carousel"],Slide:o["Slide"]},data:function(){return{items:n}}},p=c,u=e("2877"),m=e("6544"),d=e.n(m),l=e("62ad"),g=e("a523"),f=e("0fd9"),h=Object(u["a"])(p,r,s,!1,null,null,null);a["default"]=h.exports;d()(h,{VCol:l["a"],VContainer:g["a"],VRow:f["a"]})}}]);
//# sourceMappingURL=chunk-6bbe2af4.862bfac2.js.map