(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{10:function(t,s,a){},33:function(t,s){t.exports={functional:!0,render(t,s){const{_c:a,_v:n,data:e,children:i=[]}=s,{class:r,staticClass:l,style:c,staticStyle:o,attrs:d={},...v}=e;return a("svg",{class:[r,l],style:[c,o],attrs:Object.assign({width:"11",height:"11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d),...v},i.concat([a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.743 4.793L5.5.55l-.707.707L9.036 5.5 4.793 9.743l.707.707 4.243-4.243.707-.707-.707-.707z",fill:"#5384EC"}})]))}}},34:function(t,s,a){"use strict";var n=a(10);a.n(n).a},70:function(t,s,a){"use strict";a.r(s);var n=a(33),e={name:"Home",components:{IconArrow:a.n(n).a},computed:{data:function(){return this.$frontmatter},colors:function(){return["#F3DB60","#D87058","#65D093","#6E91EA"]}}},i=(a(34),a(0)),r=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main"},[a("section",{staticClass:"hero"},[a("h1",{staticClass:"slogan"},[t._v("\n      "+t._s(t.data.slogan)+"\n    ")]),t._v(" "),a("p",{staticClass:"text"},[t._v("\n      "+t._s(t.data.text)+"\n    ")])]),t._v(" "),a("div",{staticClass:"products"},t._l(t.data.products,(function(s,n){return a("div",{key:n,staticClass:"card"},[a("h2",{staticClass:"title",style:{color:t.colors[n],borderColor:t.colors[n]}},[t._v(t._s(s.title))]),t._v(" "),a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:t.$withBase(s.img),alt:s.name}})]),t._v(" "),a("div",{staticClass:"footer"},[a("div",{staticClass:"left"},[a("h3",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),a("p",{staticClass:"desc"},[t._v(t._s(s.desc))])]),t._v(" "),a("div",{staticClass:"right"},[s.href?a("a",{staticClass:"link",attrs:{href:s.href,target:"_blank"}},[t._v("查看 "),a("IconArrow")],1):s.qr?a("span",{staticClass:"link",attrs:{target:"_blank"}},[t._v("\n            查看 "),a("IconArrow"),t._v(" "),a("img",{staticClass:"hidden-img",attrs:{src:t.$withBase(s.qr),alt:s.name}})],1):t._e()])])])})),0)])}),[],!1,null,"7414fdd3",null);s.default=r.exports}}]);