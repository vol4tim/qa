(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="static/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Main")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[0!==t.state_no?r("div",{staticClass:"row"},[r("img",{staticClass:"m-2",staticStyle:{width:"50px"},attrs:{src:n("e2dd")}}),r("img",{staticClass:"m-2",staticStyle:{width:"50px"},attrs:{src:n("71da")}})]):t._e(),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md"},[null===t.state_no?r("div",{staticClass:"panel panel-default"},[r("div",{staticClass:"panel-body text-center"},[t._v(" Загрузка ")])]):0===t.state_no?r("div",{staticClass:"panel panel-default mt-5"},[t._m(0)]):1===t.state_no?r("div",{staticClass:"panel panel-default"},[r("div",{staticClass:"panel-body text-center"},[r("h4",[t._v("Ввод параметров изделия")]),t.options&&t.form?r("div",{staticClass:"text-left"},[r("div",{staticClass:"form-group"},[r("label",[t._v(t._s(t.options.product_type.field_full_name))]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.product_type,expression:"form.product_type"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"product_type",e.target.multiple?n:n[0])}}},t._l(t.options.product_type.options,(function(e,n){return r("option",{key:n,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)]),r("div",{staticClass:"form-group"},[r("label",[t._v(t._s(t.options.production_stage.field_full_name))]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.production_stage,expression:"form.production_stage"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"production_stage",e.target.multiple?n:n[0])}}},t._l(t.options.production_stage.options,(function(e,n){return r("option",{key:n,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)]),t._l(t.options.additional_info,(function(e,n){return r("div",{key:n,staticClass:"form-group"},[r("label",[t._v(" "+t._s(t.options.additional_info[n].field_full_name)+" ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.additional_info[n],expression:"form.additional_info[key]"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form.additional_info,n,e.target.multiple?r:r[0])}}},t._l(t.options.additional_info[n].options,(function(e,n){return r("option",{key:n,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])}))],2):t._e(),r("br"),r("br"),r("button",{staticClass:"btn btn-info",on:{click:t.send}},[t._v("отправить")])])]):2===t.state_no?r("div",{staticClass:"panel panel-default"},[r("div",{staticClass:"panel-body text-center"},[r("h4",[t._v("Идет запись сборки")]),r("div",{staticClass:"text-info display-3"},[t._v(t._s(t.sec))]),r("div",[t._v("Для завершения сборки нужно приложить пропуск")])])]):3===t.state_no?r("div",{staticClass:"panel panel-default"},[t._m(1)]):t._e()])])])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"panel-body text-center"},[r("div",{staticClass:"text-center"},[r("h3",[t._v(" Система контроля качества производства на базе платформы Feecc ")])]),r("hr"),r("div",[r("img",{staticClass:"mx-5",staticStyle:{width:"130px"},attrs:{src:n("e2dd")}}),r("img",{staticClass:"mx-5",staticStyle:{width:"150px"},attrs:{src:n("71da")}}),r("img",{staticClass:"mx-5",staticStyle:{width:"180px"},attrs:{src:n("9158")}})]),r("div",{staticClass:"mt-3"},[t._v(" Приложите пропуск к сканеру чтобы начать сборку изделия. ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-body text-center"},[n("h4",[t._v("Идет обработка записей и печать паспорта")])])}],c=n("1da1"),l=(n("96cf"),n("5a0c")),u=n.n(l),p=n("d772"),d=n.n(p),f=n("bc3a"),v=n.n(f),m="",_="1000",g=v.a.create({baseURL:m}),h={state:function(){return Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.get("/api/state");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},options:function(){return Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.get("/api/form-options");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},send:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.post("/api/form-handler",t);case 2:case"end":return e.stop()}}),e)})))()}};u.a.extend(d.a);var b={data:function(){return{state_no:null,options:null,form:null,sec:"00:00:00",interval:null}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:setInterval((function(){t.getState()}),_),t.getState(),t.getFormFields();case 3:case"end":return e.stop()}}),e)})))()},watch:{state_no:function(t){var e=this;if(2===t){clearInterval(this.interval),this.sec="00:00:00";var n=u()();this.interval=setInterval((function(){var t=u()();e.sec=u.a.duration(t.diff(n)).format("HH:mm:ss")}),1e3)}else 3===t&&clearInterval(this.interval)}},methods:{getFormFields:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.options();case 2:for(r in t.options=e.sent,n={product_type:t.options.product_type.options[0],production_stage:t.options.production_stage.options[0],additional_info:{}},t.options.additional_info)n.additional_info[r]=t.options.additional_info[r].options[0];t.form=n;case 6:case"end":return e.stop()}}),e)})))()},getState:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.state();case 3:n=e.sent,t.state_no=n.state_no,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},send:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r in n={},t.form.additional_info)n[r]=t.form.additional_info[r];return a={session_start_time:u()().format("DD-MM-YYYY HH:mm:ss"),product_type:t.form.product_type,production_stage:t.form.production_stage,additional_info:n},e.next=5,h.send(a);case 5:case"end":return e.stop()}}),e)})))()}}},y=b,x=n("2877"),w=Object(x["a"])(y,i,s,!1,null,null,null),C=w.exports,O={name:"App",components:{Main:C}},j=O,k=(n("034f"),Object(x["a"])(j,a,o,!1,null,null,null)),R=k.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(R)}}).$mount("#app")},"71da":function(t,e,n){t.exports=n.p+"img/strelka.074f4171.png"},"85ec":function(t,e,n){},9158:function(t,e,n){t.exports=n.p+"img/robonomics.1510ad9a.png"},e2dd:function(t,e,n){t.exports=n.p+"img/mvas.777d78ab.png"}});
//# sourceMappingURL=app.1a70c1b4.js.map