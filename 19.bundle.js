(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{90:function(t,e,n){"use strict";var r=n(3),o=n(7),a=n(2),i=n.n(a);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */l=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new E(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=f(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d={};function h(){}function p(){}function v(){}var m={};u(m,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(S([])));b&&b!==e&&n.call(b,o)&&(m=b);var g=v.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,l){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==c(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,l)}),(function(t){r("throw",t,i,l)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,l)}))}l(u.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=v,u(g,"constructor",v),u(v,"constructor",p),p.displayName=u(v,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(k.prototype),u(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new k(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),u(g,i,"Generator"),u(g,o,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function u(t,e,n,r,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))}}var f={render:function(){return s(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <header id="header" class="fixed-top ">\n      <admin-bar></admin-bar>\n    </header>\n    \n    <div class="container shadow bg-light p-3 my-5 rounded-4">\n        <h3 class="text-center mt-3 mb-5">DATA DOKTER</h3> \n        <div class="row justify-content-center" id="tes">\n\n        </div>\n        \n        <div class="d-flex justify-content-center">\n          <button id="submit" type="submit" class="btn btn-primary mt-3 px-5 fw-bold">Update</button>\n        </div>\n    </div>\n\n    <footer>\n      <footer-bar></footer-bar>\n    </footer>\n      ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return s(l().mark((function t(){var e,n,a,c,u,s,f,d;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.a.parseActiveUrlWithoutCombiner(),t.next=3,r.a.get("https://respon-backend.vercel.app/dokter/listInti?id=".concat(e.detail));case 3:n=t.sent,a="",n.data.forEach((function(t){a+='\n                  <div class="col-sm-6">\n                      <form>\n                          <div class="mb-3 row px-4">\n                              <label for="linkMaps" class="col-sm-5 col-form-label">Id</label>\n                              <div class="col-sm-7">\n                                <input type="text" class="form-control" id="Id" value = "'.concat(t.id,'" disabled>\n                              </div>\n                          </div>\n\n                          <div class="mb-3 row px-4">\n                              <label for="namaDokter" class="col-sm-5 col-form-label">Nama Dokter</label>\n                              <div class="col-sm-7">\n                                <input type="text" class="form-control" id="namaDokter" value="').concat(t.namaDokter,'" required>\n                              </div>\n                          </div>\n\n                          <div class="mb-3 row px-4">\n                              <label for="alamatDokter" class="col-sm-5 col-form-label">Poli Praktek</label>\n                              <div class="col-sm-7">\n                                <input type="text" class="form-control" id="Poli" value="').concat(t.poli,'">\n                              </div>\n                          </div>\n\n                          <div class="mb-3 row px-4">\n                              <label for="NoTelepon" class="col-sm-5 col-form-label">Jadwal Praktek</label>\n                              <div class="col-sm-7">\n                                <input type="text" class="form-control" id="jadwalPraktek" value="').concat(t.jadwalPraktek,'">\n                              </div>\n                          </div>\n\n                          <div class="mb-3 row px-4">\n                            <label class="col-sm-5 col-form-label">Jam Praktek</label>\n                            <div class="col-sm-7">\n                              <select class="form-select" aria-label="Pilih Jam Praktek" id="jamPraktek">\n                                <option selected>').concat(t.jamPraktek,'</option>\n                                <option value="08:00 - 11:30">08:00 - 11:30</option>\n                                <option value="13:00 - 16:30">13:00 - 16:30</option>\n                              </select>\n                            </div>\n                        </div>\n                      </form>\n                  </div>\n      '),document.querySelector("#tes").innerHTML=a})),c=document.querySelector("#namaDokter"),u=document.querySelector("#Poli"),s=document.querySelector("#jadwalPraktek"),f=document.querySelector("#jamPraktek"),d=document.querySelector("#Id"),document.querySelector("#submit").addEventListener("click",(function(t){t.preventDefault(),""===c.value?alert("Inputan tidak boleh ada yang kosong"):i.a.fire({title:"Do you want to save the changes?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Save",denyButtonText:"Dont save"}).then((function(t){t.isConfirmed?(i.a.fire("Saved!","","success"),r.a.put("https://respon-backend.vercel.app/dokter/update?namaDokter=".concat(c.value,"&poli=").concat(u.value,"&jamPraktek=").concat(f.value,"&jadwalPraktek=").concat(s.value,"&id=").concat(d.value)).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),console.log(c.value,u.value,s.value,f.value,d.value),setTimeout((function(){document.location.reload()}),3e3)):t.isDenied&&i.a.fire("Changes are not saved","","info")}))}));case 13:case"end":return t.stop()}}),t)})))()}};e.a=f},91:function(t,e,n){"use strict";var r=n(3),o=n(7),a=n(2),i=n.n(a);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */l=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new E(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=f(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d={};function h(){}function p(){}function v(){}var m={};u(m,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(S([])));b&&b!==e&&n.call(b,o)&&(m=b);var g=v.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,l){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==c(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,l)}),(function(t){r("throw",t,i,l)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,l)}))}l(u.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=v,u(g,"constructor",v),u(v,"constructor",p),p.displayName=u(v,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(k.prototype),u(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new k(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),u(g,i,"Generator"),u(g,o,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function u(t,e,n,r,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))}}var f={render:function(){return s(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <header id="header" class="fixed-top ">\n      <admin-bar></admin-bar>\n    </header>\n\n    <div class="container shadow bg-light p-3 my-5 rounded-4">\n        <h3 class="text-center mt-3 mb-5">ISI DATA DOKTER</h3> \n        <div class="row justify-content-center">\n            <div class="col-sm-6">\n                <form>\n                    <div id="puskesmasId">\n                      \n                    </div>\n\n                    <div class="mb-3 row px-4">\n                        <label class="col-sm-5 col-form-label">Nama Dokter</label>\n                        <div class="col-sm-7">\n                          <input type="text" class="form-control" id="namaDokter" placeholder="Masukkan Nama Dokter" required>\n                        </div>\n                    </div>\n\n                    <div class="mb-3 row px-4">\n                        <label class="col-sm-5 col-form-label">Poli Praktek</label>\n                        <div class="col-sm-7">\n                          <select class="form-select" aria-label="Pilih Poli Praktek" id="Poli">\n                            <option></option>\n                            <option value="Poli Umum">Poli Umum</option>\n                            <option value="Poli Gigi dan Mulut">Poli Gigi dan Mulut</option>\n                            <option value="Poli KIA (Kesehatan Ibu & Anak)">Poli KIA (Kesehatan Ibu & Anak)</option>\n                            <option value="Poli Gizi">Poli Gizi</option>\n                          </select>\n                        </div>\n                    </div>\n\n                    <div class="mb-3 row px-4">\n                        <label class="col-sm-5 col-form-label">Jadwal Praktek</label>\n                        <div class="col-sm-7">\n                          <input type="text" class="form-control" id="jadwalPraktek" placeholder="Masukkan Jadwal Praktek" required>\n                        </div>\n                    </div>\n\n                    <div class="mb-3 row px-4">\n                        <label class="col-sm-5 col-form-label">Jam Praktek</label>\n                        <div class="col-sm-7">\n                          <select class="form-select" aria-label="Pilih Jam Praktek" id="jamPraktek">\n                            <option></option>\n                            <option value="08:00 - 11:30">08:00 - 11:30</option>\n                            <option value="13:00 - 16:30">13:00 - 16:30</option>\n                          </select>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        \n        <div class="d-flex justify-content-center">\n            <button id="submit" type="submit" class="btn btn-primary mt-3 px-5 fw-bold">Daftar</button>\n        </div>\n    </div>\n\n    <footer>\n      <footer-bar></footer-bar>\n    </footer>\n      ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return s(l().mark((function t(){var e,n,a,c,u,s,f,d;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.a.parseActiveUrlWithoutCombiner(),t.next=3,r.a.get("https://respon-backend.vercel.app/puskesmas/listInti?idName=".concat(e.id));case 3:n=t.sent,a="",console.log(a),n.data.forEach((function(t){a+='\n                    <div class="mb-3 row px-4">\n                      <label class="col-sm-5 col-form-label">Puskesmas Id</label>\n                      <div class="col-sm-7">\n                        <input type="text" class="form-control" id="idPuskesmas" value="'.concat(t.idName,'" disabled>\n                      </div>\n                    </div>\n      '),document.querySelector("#puskesmasId").innerHTML=a})),c=document.querySelector("#namaDokter"),u=document.querySelector("#Poli"),s=document.querySelector("#jadwalPraktek"),f=document.querySelector("#jamPraktek"),d=document.querySelector("#idPuskesmas"),document.querySelector("#submit").addEventListener("click",(function(t){t.preventDefault(),""===c.value||""===u.value||""===s.value||""===f.value||""===d.value?i.a.fire({icon:"error",title:"Ada Form Yang Belum Terisi",showConfirmButton:!1,timer:1500}):(r.a.post("https://respon-backend.vercel.app/dokter/add?namaDokter=".concat(c.value,"&poli=").concat(u.value,"&jamPraktek=").concat(f.value,"&jadwalPraktek=").concat(s.value,"&puskesmasId=").concat(d.value)).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),console.log(d.value,f.value),i.a.fire({icon:"success",title:"Berhasil Tambah Data",showConfirmButton:!1,timer:1500}))})),document.querySelector("#daftar");case 15:case"end":return t.stop()}}),t)})))()}};e.a=f},92:function(t,e,n){"use strict";var r=n(3),o=n(7),a=n(2),i=n.n(a);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */l=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new E(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=f(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d={};function h(){}function p(){}function v(){}var m={};u(m,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(S([])));b&&b!==e&&n.call(b,o)&&(m=b);var g=v.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,l){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==c(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,l)}),(function(t){r("throw",t,i,l)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,l)}))}l(u.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=v,u(g,"constructor",v),u(v,"constructor",p),p.displayName=u(v,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(k.prototype),u(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new k(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),u(g,i,"Generator"),u(g,o,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function u(t,e,n,r,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))}}var f={render:function(){return s(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <div class="container shadow bg-light p-3 my-5 rounded-4">\n        <h3 class="text-center mt-3 mb-5">DATA DOKTER</h3> \n        <div class="row justify-content-center" id="tes">\n\n        </div>\n        \n        <div class="d-flex justify-content-center">\n          <button id="submit" type="submit" class="btn btn-danger mt-3 px-5 fw-bold">Delete</button>\n        </div>\n    </div>\n      ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return s(l().mark((function t(){var e,n,a,c,u;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.a.parseActiveUrlWithoutCombiner(),t.next=3,r.a.get("https://respon-backend.vercel.app/dokter/listInti?id=".concat(e.detail));case 3:n=t.sent,a="",n.data.forEach((function(t){a+='\n      <div class="col-sm-6">\n      <form>\n          <div class="mb-3 row px-4">\n              <label class="col-sm-5 col-form-label">ID Puskesmas</label>\n              <div class="col-sm-7">\n                <input type="text" class="form-control" id="idPuskesmas" value="'.concat(t.puskesmasId,'" disabled>\n              </div>\n          </div>\n\n          <div class="mb-3 row px-4">\n              <label class="col-sm-5 col-form-label">Id</label>\n              <div class="col-sm-7">\n                <input type="text" class="form-control" id="Id" value = "').concat(t.id,'" disabled>\n              </div>\n          </div>\n\n          <div class="mb-3 row px-4">\n              <label class="col-sm-5 col-form-label">Nama Dokter</label>\n              <div class="col-sm-7">\n                <input type="text" class="form-control" id="namaDokter" value="').concat(t.namaDokter,'" required>\n              </div>\n          </div>\n\n          <div class="mb-3 row px-4">\n              <label class="col-sm-5 col-form-label">Poli Praktek</label>\n              <div class="col-sm-7">\n                <input type="text" class="form-control" id="Poli" value="').concat(t.poli,'">\n              </div>\n          </div>\n\n          <div class="mb-3 row px-4">\n              <label class="col-sm-5 col-form-label">Jadwal Praktek</label>\n              <div class="col-sm-7">\n                <input type="text" class="form-control" id="jadwalPraktek" value="').concat(t.jadwalPraktek,'">\n              </div>\n          </div>\n\n          <div class="mb-3 row px-4">\n            <label class="col-sm-5 col-form-label">Jam Praktek</label>\n            <div class="col-sm-7">\n              <select class="form-select" aria-label="Pilih Jam Praktek" id="jamPraktek">\n                <option selected>').concat(t.jamPraktek,"</option>\n              </select>\n            </div>\n        </div>\n      </form>\n  </div>\n      "),document.querySelector("#tes").innerHTML=a})),c=document.querySelector("#idPuskesmas"),u=document.querySelector("#Id"),document.querySelector("#submit").addEventListener("click",(function(t){t.preventDefault(),""===namaDokter.value?alert("Inputan tidak boleh ada yang kosong"):i.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&(r.a.delete("https://respon-backend.vercel.app/dokter/delete?id=".concat(Id.value)).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),i.a.fire({icon:"success",title:"Data Berhasil Di Delete ",showConfirmButton:!1,timer:1500}),console.log(u.value,c.value),setTimeout((function(){document.location.href="/#/admin-detail-puskesmas/".concat(c.value)}),3e3))}))}));case 10:case"end":return t.stop()}}),t)})))()}};e.a=f}}]);