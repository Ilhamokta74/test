(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{86:function(t,e,n){"use strict";var r=n(3),o=n(7);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new P(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return N()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d={};function h(){}function p(){}function v(){}var m={};u(m,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(S([])));b&&b!==e&&n.call(b,o)&&(m=b);var g=v.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var r;this._invoke=function(o,i){function c(){return new e((function(r,c){!function r(o,i,c,s){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==a(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}(o,i,r,c)}))}return r=r?r.then(c,c):c()}}function k(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=v,u(g,"constructor",v),u(v,"constructor",p),p.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new x(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),u(g,s,"Generator"),u(g,o,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function c(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){c(a,r,o,i,s,"next",t)}function s(t){c(a,r,o,i,s,"throw",t)}i(void 0)}))}}var u={render:function(){return s(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <header id="header" class="fixed-top ">\n      <admin-bar></admin-bar>\n    </header>\n\n    <div class="content" id="main-content">\n      <section id="detail" class="detail">\n        <div class="container" id="Puskesmas-detail">\n    \n        </div>\n      </section>\n    </div>\n\n    <div class="container mt-5">\n      <div class="d-flex justify-content-end pe-3" id="Button-New">\n    </div>\n    \n    <table class="table table-light table-bordered table-hover">\n      <thead class="table-warning">\n        <tr>\n          <th scope="col" class="text-center py-3">No. Urut</th>\n          <th scope="col" class="text-center">Nama Dokter</th>\n          <th scope="col" class="text-center">Poli</th>\n          <th scope="col" class="text-center">Jadwal Praktek</th>\n          <th scope="col" class="text-center">Jam Praktek</th>\n          <th scope="col" class="text-center">Action</th>\n        </tr>\n      </thead>\n      <tbody id="tes">\n      \n      </tbody>\n    </table>\n    </div>\n\n    <footer>\n      <footer-bar></footer-bar>\n    </footer>\n    ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return s(i().mark((function t(){var e,n,a,c,s,u,l;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.a.parseActiveUrlWithoutCombiner(),t.next=3,r.a.get("https://respon-backend.vercel.app/puskesmas/listInti?idName=".concat(e.id));case 3:return n=t.sent,t.next=6,r.a.get("https://respon-backend.vercel.app/dokter/list?puskesmasId=".concat(e.id));case 6:a=t.sent,c="",s="",u="",l=1,n.data.forEach((function(t){c+='\n                <div class="p-1 mb-4 bg-light rounded-3">\n                  <div class="container-fluid py-5">\n                    <h1 class="display-5 fw-bold text-center">'.concat(l++,'</h1>\n                  </div>\n                </div>\n\n                <div class="row content">\n                  <div class="col-lg-6">\n                    <h2>Informasi Puskesmas</h2>\n                    <div class="row my-4 ps-5">\n                      <table class="table-borderless">\n                        <tbody>\n                          <tr>\n                            <td style="width:30%"><strong>Nama Puskesmas</strong></td>\n                            <td>').concat(t.namaPuskesmas,"</td>\n                          </tr>\n                          <tr>\n                            <td><strong>Alamat</strong></td>\n                            <td>").concat(t.alamatPuskesmas,"</td>\n                          </tr>\n                          <tr>\n                            <td><strong>No. Telepon</strong></td>\n                            <td>").concat(t.noTelepon,'</td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n            \n                  <div class="col-lg-6 pt-4 pt-lg-0">\n                    <iframe src="').concat(t.maps,'" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>\n                  </div>\n                </div>\n      ')})),a.data.forEach((function(t){s+='\n                  <tbody>\n                    <tr>\n                      <td class="text-center">'.concat(t.id,'</td>\n                      <td class="text-center">').concat(t.namaDokter,'</td>                     \n                      <td class="text-center">').concat(t.poli,'</td>\n                      <td class="text-center">').concat(t.jadwalPraktek,'</td>\n                      <td class="text-center">').concat(t.jamPraktek,'</td>\n                      <td class="d-flex justify-content-center">\n                          <a href="#/admin-detail-puskesmas/').concat(t.puskesmasId,"/edit/").concat(t.id,'"><button type="button" class="btn btn-success me-3">Edit</button></a>\n                          <a href="#/admin-detail-puskesmas/').concat(t.puskesmasId,"/delete/").concat(t.id,'"><button type="button" id="delete" class="btn btn-danger" value="').concat(t.id,'">Hapus</button></a>\n                      </td>\n                    </tr>\n                  </tbody>\n      ')})),n.data.forEach((function(t){u+='\n                  <a href="#/admin-daftar-dokter/'.concat(t.idName,'/daftar"><button type="button" class="btn btn-success mb-3">New +</button></a>\n      ')})),document.querySelector("#Puskesmas-detail").innerHTML=c,document.querySelector("#tes").innerHTML=s,document.querySelector("#Button-New").innerHTML=u,document.querySelector("#id"),document.querySelector("#delete");case 19:case"end":return t.stop()}}),t)})))()}};e.a=u},89:function(t,e,n){"use strict";var r=n(3),o=n(7),a=n(2),i=n.n(a);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */s=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new P(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return N()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d={};function h(){}function p(){}function v(){}var m={};u(m,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(S([])));b&&b!==e&&n.call(b,o)&&(m=b);var g=v.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,s){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==c(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(u.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function k(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=v,u(g,"constructor",v),u(v,"constructor",p),p.displayName=u(v,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new x(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),u(g,i,"Generator"),u(g,o,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function u(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))}}var f={render:function(){return l(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <header id="header" class="fixed-top ">\n      <admin-bar></admin-bar>\n    </header>\n\n    <div class="container shadow bg-light p-3 my-5 rounded-4">\n        <h3 class="text-center mt-3 mb-5">HAPUS DATA PUSKESMAS</h3> \n        <div class="row justify-content-center" id="tes">\n\n        </div>\n        \n        <div class="d-flex justify-content-center">\n          <button id="submit" type="submit" class="btn btn-danger mt-3 px-5 fw-bold">Hapus</button>\n        </div>\n    </div>\n\n    <footer>\n      <footer-bar></footer-bar>\n    </footer>\n      ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return l(s().mark((function t(){var e,n,a,c,u;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.a.parseActiveUrlWithoutCombiner(),t.next=3,r.a.get("https://respon-backend.vercel.app/puskesmas/listPuskesmas?idName=".concat(e.id));case 3:n=t.sent,a="",n.data.forEach((function(t){a+='\n                    <div class="col-sm-6">\n                      <form>\n                          <div class="mb-3 row px-4">\n                              <label for="namaPuskesmas" class="col-sm-5 col-form-label">ID Puskesmas</label>\n                              <div class="col-sm-7">\n                                <input type="text" class="form-control" id="idName" value="'.concat(t.idName,'" disabled>\n                              </div>\n                          </div>\n\n                          <div class="mb-3 row px-4">\n                              <label for="namaPuskesmas" class="col-sm-5 col-form-label">Nama Puskesmas</label>\n                              <div class="col-sm-7">\n                                <input type="text" class="form-control" id="namaPuskesmas" value="').concat(t.namaPuskesmas,'" required>\n                              </div>\n                          </div>\n\n                          <div class="mb-3 row px-4">\n                              <label for="alamatPuskesmas" class="col-sm-5 col-form-label">Alamat</label>\n                              <div class="col-sm-7">\n                              <textarea class="form-control" rows="4" id="alamatPuskesmas" required>').concat(t.alamatPuskesmas,'</textarea>\n                              </div>\n                          </div>\n\n                          <div class="mb-3 row px-4">\n                              <label for="NoTelepon" class="col-sm-5 col-form-label">No. Telepon</label>\n                              <div class="col-sm-7">\n                                <input type="text" class="form-control" id="NoTelepon" value="').concat(t.noTelepon,'" required>\n                              </div>\n                          </div>\n                      </form>\n                  </div>\n\n                  <div class="col-sm-6">\n                      <form>\n                          <div class="mb-3 row px-4">\n                              <label for="linkMaps" class="col-sm-5 col-form-label">Maps</label>\n                              <div class="col-sm-7">\n                                <textarea class="form-control" id="linkMaps" rows="10" required>').concat(t.maps,"</textarea>\n                              </div>\n                          </div>\n                      </form>\n                  </div>\n      "),document.querySelector("#tes").innerHTML=a})),c=document.querySelector("#idName"),u=document.querySelector("#idName"),document.querySelector("#submit").addEventListener("click",(function(t){t.preventDefault(),""===c.value?alert("Inputan tidak boleh ada yang kosong"):i.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&(r.a.delete("https://respon-backend.vercel.app/dokter/deleteAll?puskesmasId=".concat(u.value)).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),setTimeout((function(){r.a.delete("https://respon-backend.vercel.app/puskesmas/delete?idName=".concat(c.value)).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}),1e3),i.a.fire({icon:"success",title:"Deleted Success",showConfirmButton:!1,timer:1500}),setTimeout((function(){document.location.href="/#/admin-data-puskesmas"}),2e3))}))}));case 10:case"end":return t.stop()}}),t)})))()}};e.a=f}}]);