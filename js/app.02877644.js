(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="static/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Main")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[0!==t.state_no?n("div",{staticClass:"row"},[n("img",{staticClass:"m-2",staticStyle:{width:"50px"},attrs:{src:"/static/logo_mvas.png"}}),n("img",{staticClass:"m-2",staticStyle:{width:"50px"},attrs:{src:"/static/logo_geoskan.png"}})]):t._e(),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md my-5"},[null===t.state_no?n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-body text-center"},[t._v(" Загрузка ")])]):0===t.state_no?n("div",{staticClass:"panel panel-default"},[t._m(0)]):1===t.state_no?n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-body text-center"},[n("h4",[t._v("Ввод параметров изделия")]),t.options&&t.form?n("div",{staticClass:"text-left"},[1===t.step?n("div",[n("div",{staticClass:"form-group"},[n("label",[t._v(t._s(t.options.product_type.field_full_name))]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.form.product_type,expression:"form.product_type"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"product_type",e.target.multiple?n:n[0])}}},t._l(t.options.product_type.options,(function(e,r){return n("option",{key:r,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)]),n("div",{staticClass:"form-group"},[n("label",[t._v(t._s(t.options.production_stage.field_full_name))]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.form.production_stage,expression:"form.production_stage"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"production_stage",e.target.multiple?n:n[0])}}},t._l(t.options.production_stage.options,(function(e,r){return n("option",{key:r,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)]),t._l(t.options.additional_info,(function(e,r){return n("div",{key:r,staticClass:"form-group"},[n("label",[t._v(" "+t._s(t.options.additional_info[r].field_full_name)+" ")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.form.additional_info[r],expression:"form.additional_info[key]"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form.additional_info,r,e.target.multiple?n:n[0])}}},t._l(t.options.additional_info[r].options,(function(e,r){return n("option",{key:r,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])}))],2):t._e(),2===t.step?n("div",{staticClass:"container my-2 text-center"},[n("div",{staticClass:"row"},t._l(t.modules,(function(e,r){return n("div",{key:r,staticClass:"col-md-2"},[n("div",{staticClass:"p-2 my-2",class:{active:e.select},staticStyle:{cursor:"pointer"},on:{click:function(e){return t.set(r)}}},[n("img",{staticClass:"img-thumbnail",staticStyle:{width:"105px"},attrs:{src:"/static/images/"+e.module_image}}),n("div",{staticClass:"mt-2 label-card"},[t._v(" "+t._s(e.module_name)+" ")])])])})),0)]):t._e()]):t._e(),n("br"),n("br"),2===t.step?n("button",{staticClass:"btn btn-info mr-2",on:{click:t.send}},[t._v(" Отправить ")]):t._e(),1===t.step?n("button",{staticClass:"btn btn-info mr-2",on:{click:t.next}},[t._v(" Продолжить ")]):t._e(),2===t.step?n("button",{staticClass:"btn btn-secondary mr-2",on:{click:t.prev}},[t._v(" Назад ")]):t._e(),n("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.cancel(0)}}},[t._v(" Отмена ")])])]):2===t.state_no?n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-body text-center"},[n("h4",[t._v("Идет запись сборки")]),n("div",{staticClass:"text-info display-3"},[t._v(t._s(t.sec))]),n("div",[n("button",{staticClass:"btn btn-danger mt-2",on:{click:function(e){return t.cancel(3)}}},[t._v(" Завершить сборку ")])])])]):3===t.state_no?n("div",{staticClass:"panel panel-default"},[t._m(1)]):t._e()])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-body text-center"},[n("div",{staticClass:"text-center"},[n("h3",[t._v(" Система контроля качества производства на базе платформы Feecc ")])]),n("hr"),n("div",[n("img",{staticClass:"mx-5",staticStyle:{width:"130px"},attrs:{src:"/static/logo_mvas.png"}}),n("img",{staticClass:"mx-5",staticStyle:{width:"150px"},attrs:{src:"/static/logo_robonomics.png"}}),n("img",{staticClass:"mx-5",staticStyle:{width:"180px"},attrs:{src:"/static/logo_geoskan.png"}})]),n("div",{staticClass:"mt-3"},[t._v(" Приложите пропуск к сканеру чтобы начать сборку изделия. ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-body text-center"},[n("h4",[t._v("Идет обработка записей и печать паспорта")])])}],c=n("5530"),u=n("1da1"),l=(n("159b"),n("96cf"),n("5a0c")),p=n.n(l),d=n("d772"),f=n.n(d),m=n("bc3a"),v=n.n(m),_="",g="1000",h=v.a.create({baseURL:_}),b={state:function(){return Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.get("/api/state");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},options:function(){return Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.get("/api/form-options");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},modules:function(){return Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.get("/static/additional_modules.json");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},send:function(t){return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.post("/api/form-handler",t);case 2:case"end":return e.stop()}}),e)})))()},update:function(t){return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.post("/api/state-update",t);case 2:case"end":return e.stop()}}),e)})))()}};p.a.extend(f.a);var y={data:function(){return{state_no:null,options:null,form:null,step:1,sec:"00:00:00",interval:null,modules:{}}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:setInterval((function(){t.getState()}),g),t.getState(),t.getFormFields();case 3:case"end":return e.stop()}}),e)})))()},watch:{state_no:function(t){var e=this;if(1===t)for(var n in this.step=1,this.modules)this.modules[n].select=!1;else if(2===t){clearInterval(this.interval),this.sec="00:00:00";var r=p()();this.interval=setInterval((function(){var t=p()();e.sec=p.a.duration(t.diff(r)).format("HH:mm:ss")}),1e3)}else 3===t&&clearInterval(this.interval)}},methods:{getFormFields:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.options();case 2:for(r in t.options=e.sent,n={product_type:t.options.product_type.options[0],production_stage:t.options.production_stage.options[0],additional_info:{}},t.options.additional_info)n.additional_info[r]=t.options.additional_info[r].options[0];return e.next=7,b.modules();case 7:a=e.sent,o={},a.forEach((function(t,e){o[e]=Object(c["a"])(Object(c["a"])({},t),{},{select:!1})})),t.modules=o,t.form=n;case 12:case"end":return e.stop()}}),e)})))()},getState:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.state();case 3:n=e.sent,t.state_no=n.state_no,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},send:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r in n=[],t.modules)a=t.modules[r],a.select&&n.push(a.module_name);for(s in o={},t.form.additional_info)o[t.options.additional_info[s].field_full_name]=t.form.additional_info[s];return n.length>0&&(o["Дополнительные модули"]=n),i={session_start_time:p()().format("DD-MM-YYYY HH:mm:ss"),product_type:t.form.product_type,production_stage:t.form.production_stage,additional_info:o},e.next=8,b.send(i);case 8:case"end":return e.stop()}}),e)})))()},cancel:function(t){return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.update({change_state_to:t,priority:1});case 2:case"end":return e.stop()}}),e)})))()},set:function(t){this.modules[t].select=!this.modules[t].select},next:function(){this.step=2},prev:function(){this.step=1}}},w=y,x=(n("ea59"),n("2877")),C=Object(x["a"])(w,s,i,!1,null,"1e8c1228",null),k=C.exports,O={name:"App",components:{Main:k}},j=O,R=(n("034f"),Object(x["a"])(j,a,o,!1,null,null,null)),S=R.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(S)}}).$mount("#app")},"85ec":function(t,e,n){},a9a9:function(t,e,n){},ea59:function(t,e,n){"use strict";n("a9a9")}});
//# sourceMappingURL=app.02877644.js.map