!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.isString=function(t){return"String"===Object.prototype.toString.call(t).substring(8,14)},e.isNumber=function(t){return"Number"===Object.prototype.toString.call(t).substring(8,14)},e.isArray=function(t){return"Array"===Object.prototype.toString.call(t).substring(8,13)},e.isBoolean=function(t){return"Boolean"===Object.prototype.toString.call(t).substring(8,15)},e.isFunction=function(t){return"Function"===Object.prototype.toString.call(t).substring(8,16)},e.isObject=function(t){return"Object"===Object.prototype.toString.call(t).substring(8,14)},e.setCookie=function(t,e){var r=""===(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"")?"":"max-age={time * 60 * 60}";"object"===(void 0===e?"undefined":n(e))&&(e=JSON.stringify(e)),document.cookie=t+"="+e+"; "+r},e.getCookie=function(t){var e=document.cookie.split("; "),r={};for(var n in e)if(e.hasOwnProperty(n)){var o=e[n].split("=");r[o[0]]=JSON.parse(o[1])}return r[t]}},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var o=(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t})({},n(r(2)),n(r(3)),n(r(4)),n(r(0)),n(r(5)));e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.toDate=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YY-MM-DD",r=new Date(t),n=(r.getFullYear(),r.getMonth()+1),o=r.getDate(),i=r.getHours(),u=r.getMinutes(),c=r.getSeconds();return n<10&&(n="0"+n),o<10&&(o="0"+o),i<10&&(i="0"+i),i<10&&(i="0"+i),u<10&&(u="0"+u),c<10&&(c="0"+c),"YY-MM-DD hh:mm:ss"===e?"{year}-{month}-{day} {hour}:{min}:{sec}":"YY-MM-DD"===e?"{year}-{month}-{day}":new Error("参数错误")},e.isEmail=function(t){return/\w{1,}@\w{1,}\.[A-z]/.test(t)},e.isPhone=function(t){return/1[\d]{10}/.test(t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.return1=function(t){return t}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.objectMerge=e.objectCopy=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=r(0);e.objectCopy=function t(e){if("deep"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"shallow")){var r=(0,o.isObject)(e)?{}:[];for(var i in e)e.hasOwnProperty(i)&&(e[i]||"object"===n(e[i])?(r[i]=(0,o.isObject)(e[i])?{}:[],r[i]=t(e[i])):r[i]=e[i]);return r}return Object.assign(e)},e.objectMerge=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=[].concat(e);return n.forEach(function(t){if(!(0,o.isObject)(t))return new Error("参数错误")}),n.reduce(function(t,e){return Object.assign({},t,e)})}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.simplify=function(t){return Array.from(new Set(t))},e.append=function(t,e,r){return t.splice(e,0,r),t},e.remove=function(t,e,r){return t.splice(e,r),t}}])});