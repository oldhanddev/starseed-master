(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-04623056":"8f42718d","chunk-2570f1d2":"5f1a679e","chunk-0859ae52":"b02b56f9","chunk-11dcb67d":"22349a16","chunk-45ebae0f":"c4638c6b","chunk-7d2ea17e":"55b804f0"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-04623056":1,"chunk-0859ae52":1,"chunk-11dcb67d":1,"chunk-45ebae0f":1,"chunk-7d2ea17e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-04623056":"0dbdd6dd","chunk-2570f1d2":"31d6cfe0","chunk-0859ae52":"a83b02e7","chunk-11dcb67d":"a830c532","chunk-45ebae0f":"a830c532","chunk-7d2ea17e":"a830c532"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"24c9":function(e,t,n){e.exports=n.p+"img/document.9b78c22f.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Headerr"),n("router-view")],1)},o=[],c=(n("bc3a"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"fw"},[e._m(0),e._m(1),r("div",{staticClass:"sideBar"},[r("ul",[r("li",{class:{active:"/"==e.$route.path}},[r("router-link",{attrs:{to:{path:"/"}}},[r("img",{attrs:{src:n("750c")}}),r("span",[e._v("Home")])])],1),r("li",{class:{active:"/farms"==e.$route.path}},[r("router-link",{attrs:{to:{path:"/farms"}}},[r("img",{attrs:{src:n("6a7e")}}),r("span",[e._v("Farm")])])],1),r("li",{class:{active:"/pool"==e.$route.path}},[r("router-link",{attrs:{to:{path:"/pool"}}},[r("img",{attrs:{src:n("7445")}}),r("span",[e._v("Pools")])])],1),r("li",{class:{active:"/bridge"==e.$route.path}},[r("router-link",{attrs:{to:{path:"/bridge"}}},[r("img",{attrs:{src:n("7445")}}),r("span",[e._v("Bridge")])])],1),e._m(2),e._m(3)])]),r("div",{staticClass:"connect"},[r("button",{on:{click:e.MetaMask}},[r("i",{staticClass:"fas fa-network-wired"}),e._v("Connect")])]),e._m(4),e._m(5)])}),i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"scene"}},[r("div",{staticClass:"fw m1",attrs:{"data-depth":"0.2"}},[r("img",{attrs:{src:n("d2c9")}})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"topBar"},[r("i",{staticClass:"fas fa-layer-minus toggle"}),r("img",{staticClass:"logo",attrs:{src:n("7eba")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("a",{attrs:{href:"http://docs.starseed.exchange",target:"_new"}},[r("img",{attrs:{src:n("24c9")}}),r("span",[e._v("Docs")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("img",{attrs:{src:n("ffce")}}),r("span",[e._v("Audits")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ele"},[n("div",{staticClass:"token"},[n("span",[e._v(" $ 20.00")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"information"},[n("p",[n("i",{staticClass:"far fa-dot-circle"}),e._v("50% of the Deposit Fee will be used to buyback STAR and Burn the Tokens"),n("br"),n("i",{staticClass:"far fa-dot-circle"}),e._v("Burn Time: Everyday 14:00 UTC"),n("br"),n("i",{staticClass:"far fa-dot-circle"}),e._v("50% of the Deposit Fee will be sent to treasury wallet for Future Development (example, for Jungle pools)"),n("br"),n("i",{staticClass:"far fa-dot-circle"}),e._v("Farms and Pools are live")])])}],s=n("1da1"),u=(n("96cf"),n("5a89")),l=n("a5ab"),d=n.n(l),f={data:function(){return{camera:!1,scene:!1,renderer:!1,stars:[],account:!1}},components:{},watch:{"$route.params":{handler:function(e,t){console.log(this.$route.path)},immediate:!0}},created:function(){this.webGL()},methods:{webGL:function(){var e=this,t=function(){e.camera=new u["c"](45,window.innerWidth/window.innerHeight,1,1e3),e.camera.position.z=5,e.scene=new u["d"],e.renderer=new u["f"]({alpha:!0}),e.renderer.setSize(window.innerWidth,window.innerHeight),document.body.prepend(e.renderer.domElement)},n=function(){for(var t=-1e3;t<1e3;t+=20){var n=new u["e"](.5,32,32),r=new u["b"]({color:16777215}),a=new u["a"](n,r);a.position.x=1e3*Math.random()-500,a.position.y=1e3*Math.random()-500,a.position.z=t,a.scale.x=a.scale.y=2,e.scene.add(a),e.stars.push(a)}},r=function(){for(var t=0;t<e.stars.length;t++){var n=e.stars[t];n.position.z+=t/10,n.position.z>1e3&&(n.position.z-=2e3)}},a=function t(){requestAnimationFrame(t),e.renderer.render(e.scene,e.camera),r();var n=document.getElementById("scene");new d.a(n)};t(),n(),a()},MetaMask:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ethereum.request({method:"eth_requestAccounts"});case 2:t=e.sent,document.getElementById("account").innerHTML=t[0];case 4:case"end":return e.stop()}}),e)})))()}}},p=f,h=(n("8baf"),n("2877")),m=Object(h["a"])(p,c,i,!1,null,null,null),v=m.exports,b={name:"Home",components:{Headerr:v},data:function(){return{}},watch:{$route:function(e,t){}},methods:{init:function(){}},mounted:function(){},created:function(){}},g=b,w=Object(h["a"])(g,a,o,!1,null,null,null),k=w.exports,_=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(_["a"]);var y=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-2570f1d2"),n.e("chunk-0859ae52")]).then(n.bind(null,"bb51"))}},{path:"/farms",name:"EventDetail",component:function(){return Promise.all([n.e("chunk-2570f1d2"),n.e("chunk-7d2ea17e")]).then(n.bind(null,"9b76"))}},{path:"/pool",name:"EventDetail",component:function(){return Promise.all([n.e("chunk-2570f1d2"),n.e("chunk-11dcb67d")]).then(n.bind(null,"7eb0"))}},{path:"/bridge",name:"EventDetail",component:function(){return Promise.all([n.e("chunk-2570f1d2"),n.e("chunk-45ebae0f")]).then(n.bind(null,"3961"))}},{path:"*",name:"404",component:function(){return n.e("chunk-04623056").then(n.bind(null,"8cdb"))}}],C=new _["a"]({mode:"history",routes:y}),E=C,x=n("2f62"),$=n("bd8c"),P=n.n($);n("f843");r["a"].config.productionTip=!1,r["a"].use(x["a"]);var O=new x["a"].Store({state:{file_url:"https://firebasestorage.googleapis.com/v0/b/howmanydaystill.appspot.com/o/"}});new r["a"]({router:E,store:O,render:function(e){return e(k)}}).$mount("#app"),r["a"].use(P.a)},6860:function(e,t,n){},"6a7e":function(e,t,n){e.exports=n.p+"img/harvest.d6117dcd.png"},7445:function(e,t,n){e.exports=n.p+"img/bottle.91e5f236.png"},"750c":function(e,t,n){e.exports=n.p+"img/house.7af20470.svg"},"7eba":function(e,t,n){e.exports=n.p+"img/logo-3.6779fb1c.png"},"8baf":function(e,t,n){"use strict";n("6860")},d2c9:function(e,t,n){e.exports=n.p+"img/earth.2e15e9cd.png"},f843:function(e,t,n){},ffce:function(e,t,n){e.exports=n.p+"img/audit.9514807c.png"}});
//# sourceMappingURL=app.e4af67f9.js.map