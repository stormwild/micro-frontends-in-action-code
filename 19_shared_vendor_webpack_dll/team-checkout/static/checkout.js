!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/static/",n(n.s=7)}([function(e,t,n){e.exports=n(2)(0)},function(e,t,n){e.exports=n(2)(4)},function(e,t){e.exports=react_7dc6e2f1ba75d4c4cd72},function(e,t,n){var r=n(4),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var c={insert:"head",singleton:!1},i=(r(o,c),o.locals?o.locals:{});e.exports=i},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},c=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function u(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],a=t.base?c[0]+t.base:c[0],f=n[a]||0,s="".concat(a," ").concat(f);n[a]=f+1;var l=u(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:s,updater:v(p,t),references:1}),r.push(s)}return r}function f(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=c(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var c=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(c,i[t]):e.appendChild(c)}}function d(e,t,n){var r=n.css,o=n.media,c=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),c&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,y=0;function v(e,t){var n,r,o;if(t.singleton){var c=y++;n=b||(b=f(t)),r=p.bind(null,n,c,!1),o=p.bind(null,n,c,!0)}else n=f(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=u(n[r]);i[o].references--}for(var c=a(e,t),f=0;f<n.length;f++){var s=u(n[f]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=c}}}},function(e,t,n){(t=n(6)(!1)).push([e.i,"checkout-buy button {\n  width: 100%;\n  padding: 0.5em;\n  font-size: 1.5em;\n  border: none;\n  color: white;\n  border-radius: 0.25em;\n  background: rgb(75, 158, 204);\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: transform 0.1s ease-in-out;\n}\n\ncheckout-buy button:hover {\n  background: rgb(75, 158, 204, 0.8);\n}\n\ncheckout-buy button:active {\n  background: gray;\n  transform: scale(0.98);\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(a," */")),c=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(c).concat([o]).join("\n")}var i,u,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(o[i]=!0)}for(var u=0;u<e.length;u++){var a=[].concat(e[u]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(1),i=n.n(c),u={porsche:66,fendt:54,eicher:58},a=function(e){var t=e.sku,n=u[t];return o.a.createElement("button",{type:"button",onClick:function(){return alert("Thank you ❤️")}},"buy for ",n," $")};n(3);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){var t="function"==typeof Map?new Map:void 0;return(d=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return b(e,arguments,h(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),v(r,e)})(e)}function b(e,t,n){return(b=y()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&v(o,n.prototype),o}).apply(null,arguments)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(f,e);var t,n,r,c,u=(t=f,function(){var e,n=h(t);if(y()){var r=h(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return p(this,e)});function f(){return s(this,f),u.apply(this,arguments)}return n=f,c=[{key:"observedAttributes",get:function(){return["sku"]}}],(r=[{key:"connectedCallback",value:function(){this.setAttribute("data-version","Checkout (React v".concat(o.a.version,")")),this.render()}},{key:"attributeChangedCallback",value:function(){this.render()}},{key:"render",value:function(){var e=this.getAttribute("sku");i.a.render(o.a.createElement(a,{sku:e}),this)}},{key:"disconnectedCallback",value:function(){i.a.unmountComponentAtNode(this.el)}}])&&l(n.prototype,r),c&&l(n,c),f}(d(HTMLElement));window.customElements.define("checkout-buy",m),console.log("Team Checkout - React v".concat(o.a.version))}]);