(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],p=0,u=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(u.length)u.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",{staticClass:"my_container",attrs:{app:""}},[n("div",{staticClass:"overlay_btn_panel"},[n("v-container",{staticClass:"fill-height pa-1"},[n("v-row",{staticClass:"ma-1 fill-height",attrs:{justify:"space-between",align:"center"}},[n("v-btn",{staticClass:"my_btn",attrs:{fab:"","x-small":"",color:"#e7e7e790"},on:{click:t.swipeLeft}},[n("v-icon",[t._v("mdi-chevron-left")])],1),n("v-btn",{staticClass:"my_btn",attrs:{fab:"","x-small":"",color:"#e7e7e790"},on:{click:t.swipeRight}},[n("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)],1),n("v-responsive",{attrs:{"aspect-ratio":943/1860,"max-height":"1000"}},[n("flipbook",{ref:"flipbook",staticClass:"flipbook",attrs:{pages:["image/Cover.png","image/Back.png"]}})],1)],1)],1)},a=[],i=n("8330"),s={name:"App",components:{Flipbook:i["a"]},data:function(){return{}},methods:{swipeLeft:function(){var t=this.$refs.flipbook;t.flipLeft()},swipeRight:function(){var t=this.$refs.flipbook;t.flipRight()}},mounted:function(){var t=this.$refs.flipbook;console.log(t),t.flipRight}},c=s,l=(n("034f"),n("2877")),f=n("6544"),p=n.n(f),u=n("7496"),v=n("8336"),b=n("a523"),h=n("132d"),d=n("f6c4"),g=n("6b53"),m=n("0fd9"),y=Object(l["a"])(c,o,a,!1,null,null,null),w=y.exports;p()(y,{VApp:u["a"],VBtn:v["a"],VContainer:b["a"],VIcon:h["a"],VMain:d["a"],VResponsive:g["a"],VRow:m["a"]});var _=n("f309");r["a"].use(_["a"]);var k=new _["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:k,render:function(t){return t(w)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.858bd86d.js.map