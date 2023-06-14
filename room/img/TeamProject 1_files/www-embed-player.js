(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function n(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ia(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||la});
var oa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa;
if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var qa;a:{var ra={a:!0},sa={};try{sa.__proto__=ra;qa=sa.a;break a}catch(a){}qa=!1}pa=qa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ta=pa;
function v(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(ta)ta(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.xa=b.prototype}
function va(){this.v=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.Ca=this.j=null}
function wa(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
va.prototype.ga=function(a){this.i=a};
function za(a,b){a.j={exception:b,qd:!0};a.h=a.s||a.m}
va.prototype.return=function(a){this.j={return:a};this.h=this.m};
va.prototype.yield=function(a,b){this.h=b;return{value:a}};
va.prototype.A=function(a){this.h=a};
function Aa(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function Ba(a,b){a.h=b;a.s=0}
function Ca(a){a.s=0;var b=a.j.exception;a.j=null;return b}
function Da(a){a.Ca=[a.j];a.s=0;a.m=0}
function Ea(a){var b=a.Ca.splice(0)[0];(b=a.j=a.j||b)?b.qd?a.h=a.s||a.m:void 0!=b.A&&a.m<b.A?(a.h=b.A,a.j=null):a.h=a.m:a.h=0}
function Fa(a){this.h=new va;this.i=a}
function Ga(a,b){wa(a.h);var c=a.h.l;if(c)return Ha(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ia(a)}
function Ha(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.v=!1,e;var f=e.value}catch(g){return a.h.l=null,za(a.h,g),Ia(a)}a.h.l=null;d.call(a.h,f);return Ia(a)}
function Ia(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.v=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.v=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.qd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ja(a){this.next=function(b){wa(a.h);a.h.l?b=Ha(a,a.h.l.next,b,a.h.ga):(a.h.ga(b),b=Ia(a));return b};
this.throw=function(b){wa(a.h);a.h.l?b=Ha(a,a.h.l["throw"],b,a.h.ga):(za(a.h,b),b=Ia(a));return b};
this.return=function(b){return Ga(a,b)};
this[Symbol.iterator]=function(){return this}}
function La(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return La(new Ja(new Fa(a)))}
function Ma(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect.setPrototypeOf",function(a){return a?a:ta?function(b,c){try{return ta(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.v=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(p){l||(l=!0,m.call(h,p))}}
var h=this,l=!1;return{resolve:g(this.V),reject:g(this.m)}};
b.prototype.V=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.aa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.T(g):this.s(g)}};
b.prototype.T=function(g){var h=void 0;try{h=g.then}catch(l){this.m(l);return}"function"==typeof h?this.da(h,g):this.s(g)};
b.prototype.m=function(g){this.ga(2,g)};
b.prototype.s=function(g){this.ga(1,g)};
b.prototype.ga=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Z();this.Ca()};
b.prototype.Z=function(){var g=this;e(function(){if(g.K()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.K=function(){if(this.v)return!1;var g=ea.CustomEvent,h=ea.Event,l=ea.dispatchEvent;if("undefined"===typeof l)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return l(g)};
b.prototype.Ca=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.aa=function(g){var h=this.l();g.Zb(h.resolve,h.reject)};
b.prototype.da=function(g,h){var l=this.l();try{g.call(h,l.resolve,l.reject)}catch(m){l.reject(m)}};
b.prototype.then=function(g,h){function l(y,u){return"function"==typeof y?function(z){try{m(y(z))}catch(D){p(D)}}:u}
var m,p,r=new b(function(y,u){m=y;p=u});
this.Zb(l(g,m),l(h,p));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Zb=function(g,h){function l(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(l):this.i.push(l);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var m=t(g),p=m.next();!p.done;p=m.next())d(p.value).Zb(h,l)})};
b.all=function(g){var h=t(g),l=h.next();return l.done?d([]):new b(function(m,p){function r(z){return function(D){y[z]=D;u--;0==u&&m(y)}}
var y=[],u=0;do y.push(void 0),u++,d(l.value).Zb(r(y.length-1),p),l=h.next();while(!l.done)})};
return b});
n("WeakMap",function(a){function b(l){this.h=(h+=Math.random()+1).toString();if(l){l=t(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(l){var m=typeof l;return"object"===m&&null!==l||"function"===m}
function e(l){if(!ka(l,g)){var m=new c;ba(l,g,{value:m})}}
function f(l){var m=Object[l];m&&(Object[l]=function(p){if(p instanceof c)return p;Object.isExtensible(p)&&e(p);return m(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),p=new a([[l,2],[m,3]]);if(2!=p.get(l)||3!=p.get(m))return!1;p.delete(l);p.set(m,4);return!p.has(l)&&4==p.get(m)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,m){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!ka(l,g))throw Error("WeakMap key fail: "+l);l[g][this.h]=m;return this};
b.prototype.get=function(l){return d(l)&&ka(l,g)?l[g][this.h]:void 0};
b.prototype.has=function(l){return d(l)&&ka(l,g)&&ka(l[g],this.h)};
b.prototype.delete=function(l){return d(l)&&ka(l,g)&&ka(l[g],this.h)?delete l[g][this.h]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var m=h.h;return fa(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:l(m)};m=null}return{done:!0,value:void 0}})}
function d(h,l){var m=l&&typeof l;"object"==m||"function"==m?f.has(l)?m=f.get(l):(m=""+ ++g,f.set(l,m)):m="p_"+l;var p=h.data_[m];if(p&&ka(h.data_,m))for(h=0;h<p.length;h++){var r=p[h];if(l!==l&&r.key!==r.key||l===r.key)return{id:m,list:p,index:h,entry:r}}return{id:m,list:p,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=t(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),l=new a(t([[h,"s"]]));if("s"!=l.get(h)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),p=m.next();if(p.done||p.value[0]!=h||"s"!=p.value[1])return!1;p=m.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!m.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=l:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:l},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var m=this.entries(),p;!(p=m.next()).done;)p=p.value,h.call(l,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Na(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Na(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Na(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Oa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return Oa(this,function(b,c){return[b,c]})}});
n("Array.prototype.keys",function(a){return a?a:function(){return Oa(this,function(b){return b})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Array.prototype.values",function(a){return a?a:function(){return Oa(this,function(b,c){return c})}});
n("Object.setPrototypeOf",function(a){return a||ta});
n("Set",function(a){function b(c){this.h=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Na(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||ea});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
var Pa=Pa||{},x=this||self;function A(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||x;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Qa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ra(a){var b=Qa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ta(a){return Object.prototype.hasOwnProperty.call(a,Ua)&&a[Ua]||(a[Ua]=++Va)}
var Ua="closure_uid_"+(1E9*Math.random()>>>0),Va=0;function Wa(a,b,c){return a.call.apply(a.bind,arguments)}
function Xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ya(a,b,c){Ya=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa:Xa;return Ya.apply(null,arguments)}
function Za(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.xa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function db(){}
function eb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var fb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},gb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},hb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
gb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function jb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function kb(a,b){b=fb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function lb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ra(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function mb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function qb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;function xb(){if(void 0===wb){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){x.console&&x.console.error(c.message)}wb=a}else wb=a}return wb}
;function yb(a,b){this.j=a===zb&&b||""}
yb.prototype.i=!0;yb.prototype.h=function(){return this.j};
function Ab(a){return new yb(zb,a)}
var zb={};Ab("");var Bb={};function Cb(a,b){this.j=b===Bb?a:"";this.i=!0}
Cb.prototype.toString=function(){return this.j.toString()};
Cb.prototype.h=function(){return this.j.toString()};function Db(a,b){this.j=b===Eb?a:""}
Db.prototype.toString=function(){return this.j+""};
Db.prototype.i=!0;Db.prototype.h=function(){return this.j.toString()};
function Fb(a){if(a instanceof Db&&a.constructor===Db)return a.j;Qa(a);return"type_error:TrustedResourceUrl"}
var Eb={};function Gb(a){var b=xb();a=b?b.createScriptURL(a):a;return new Db(a,Eb)}
;var Hb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ib(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())}
function Jb(a,b){return a<b?-1:a>b?1:0}
;function Kb(a,b){this.j=b===Lb?a:""}
Kb.prototype.toString=function(){return this.j.toString()};
Kb.prototype.i=!0;Kb.prototype.h=function(){return this.j.toString()};
function Mb(a){if(a instanceof Kb&&a.constructor===Kb)return a.j;Qa(a);return"type_error:SafeUrl"}
var Nb;try{new URL("s://g"),Nb=!0}catch(a){Nb=!1}var Ob=Nb;function Rb(a){if(a instanceof Kb)return a;a="object"==typeof a&&a.i?a.h():String(a);a:{var b=a;if(Ob){try{var c=new URL(b)}catch(d){b="https:";break a}b=c.protocol}else b:{c=document.createElement("a");try{c.href=b}catch(d){b=void 0;break b}b=c.protocol;b=":"===b||""===b?"https:":b}}"javascript:"!==b||(a="about:invalid#zClosurez");return new Kb(a,Lb)}
var Lb={},Sb=new Kb("about:invalid#zClosurez",Lb);var Tb,Ub=B("CLOSURE_FLAGS"),Vb=Ub&&Ub[610401301];Tb=null!=Vb?Vb:!1;function Wb(){var a=x.navigator;return a&&(a=a.userAgent)?a:""}
var Xb,Yb=x.navigator;Xb=Yb?Yb.userAgentData||null:null;function Zb(a){return Tb?Xb?Xb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function C(a){return-1!=Wb().indexOf(a)}
;function $b(){return Tb?!!Xb&&0<Xb.brands.length:!1}
function ac(){return $b()?!1:C("Opera")}
function bc(){return $b()?!1:C("Trident")||C("MSIE")}
function cc(){return $b()?!1:C("Edge")}
function dc(){return $b()?Zb("Microsoft Edge"):C("Edg/")}
function ec(){return C("Firefox")||C("FxiOS")}
function fc(){return C("Safari")&&!(hc()||($b()?0:C("Coast"))||ac()||cc()||dc()||($b()?Zb("Opera"):C("OPR"))||ec()||C("Silk")||C("Android"))}
function hc(){return $b()?Zb("Chromium"):(C("Chrome")||C("CriOS"))&&!cc()||C("Silk")}
function ic(){return C("Android")&&!(hc()||ec()||ac()||C("Silk"))}
function jc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function kc(a){var b=Wb();if("Internet Explorer"===a){if(bc())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=jc(c);
switch(a){case "Opera":if(ac())return b(["Version","Opera"]);if($b()?Zb("Opera"):C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(cc())return b(["Edge"]);if(dc())return b(["Edg"]);break;case "Chromium":if(hc())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&ec()||"Safari"===a&&fc()||"Android Browser"===a&&ic()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function lc(a){if($b()&&"Silk"!==a){var b=Xb.brands.find(function(c){return c.brand===a});
if(!b||!b.version)return NaN;b=b.version.split(".")}else{b=kc(a);if(""===b)return NaN;b=b.split(".")}return 0===b.length?NaN:Number(b[0])}
;var mc={};function oc(a){this.j=mc===mc?a:"";this.i=!0}
oc.prototype.h=function(){return this.j.toString()};
oc.prototype.toString=function(){return this.j.toString()};function pc(a,b){b=b instanceof Kb?b:Rb(b);a.href=Mb(b)}
function qc(a,b){a.rel="stylesheet";Ib("stylesheet","stylesheet")?(a.href=Fb(b).toString(),(b=rc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)):a.href=b instanceof Db?Fb(b).toString():b instanceof Kb?Mb(b):Mb(Rb(b))}
function sc(){return rc("script[nonce]")}
var tc=/^[\w+/_-]+[=]{0,2}$/;function rc(a,b){b=(b||x).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&tc.test(a)?a:"":""}
;function uc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wc(a){return a?decodeURI(a):a}
function xc(a,b){return b.match(vc)[a]||null}
function yc(a){return wc(xc(3,a))}
function zc(a){var b=a.match(vc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Ac(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function Bc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Bc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Cc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)Bc(a[b],a[b+1],c);return c.join("&")}
function Dc(a){var b=[],c;for(c in a)Bc(c,a[c],b);return b.join("&")}
function Ec(a,b){var c=2==arguments.length?Cc(arguments[1],0):Cc(arguments,1);return Ac(a,c)}
function Fc(a,b){b=Dc(b);return Ac(a,b)}
function Gc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return Ac(a,b+c)}
function Hc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Ic=/#|$/,Jc=/[?&]($|#)/;function Kc(a,b){for(var c=a.search(Ic),d=0,e,f=[];0<=(e=Hc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Jc,"$1")}
;function Lc(a){x.setTimeout(function(){throw a;},0)}
;function Mc(){return Tb?!!Xb&&!!Xb.platform:!1}
function Nc(){return Mc()?"Android"===Xb.platform:C("Android")}
function Oc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Pc(){return Oc()||C("iPad")||C("iPod")}
function Vc(){return Mc()?"macOS"===Xb.platform:C("Macintosh")}
function Wc(){return Mc()?"Windows"===Xb.platform:C("Windows")}
function Xc(){return Mc()?"Chrome OS"===Xb.platform:C("CrOS")}
function Yc(){var a=Wb(),b="";Wc()?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Pc()?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):Vc()?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):Ib(Wb(),"KaiOS")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):Nc()?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):Xc()&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1]);a=0;b=Hb(String(b||"")).split(".");for(var c=
Hb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Jb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Jb(0==f[2].length,0==g[2].length)||Jb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function Zc(a){Zc[" "](a);return a}
Zc[" "]=function(){};var $c=ac(),ad=bc(),bd=C("Edge"),cd=C("Gecko")&&!(Ib(Wb(),"WebKit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),dd=Ib(Wb(),"WebKit")&&!C("Edge");dd&&C("Mobile");Vc();Wc();(Mc()?"Linux"===Xb.platform:C("Linux"))||Xc();var ed=x.navigator||null;ed&&(ed.appVersion||"").indexOf("X11");var fd=Nc();Oc();C("iPad");C("iPod");Pc();Ib(Wb(),"KaiOS");function gd(){var a=x.document;return a?a.documentMode:void 0}
var hd;a:{var id="",jd=function(){var a=Wb();if(cd)return/rv:([^\);]+)(\)|;)/.exec(a);if(bd)return/Edge\/([\d\.]+)/.exec(a);if(ad)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(dd)return/WebKit\/(\S+)/.exec(a);if($c)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
jd&&(id=jd?jd[1]:"");if(ad){var kd=gd();if(null!=kd&&kd>parseFloat(id)){hd=String(kd);break a}}hd=id}var ld=hd,md;if(x.document&&ad){var nd=gd();md=nd?nd:parseInt(ld,10)||void 0}else md=void 0;var od=md;ec();var pd=Oc()||C("iPod"),qd=C("iPad");ic();hc();var rd=fc()&&!Pc();var sd={},td=null;
function ud(a,b){Ra(a);void 0===b&&(b=0);if(!td){td={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));sd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===td[h]&&(td[h]=g)}}}b=sd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],m=a[f+1];h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+l+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var vd="undefined"!==typeof Uint8Array,wd=!ad&&"function"===typeof btoa;var xd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function yd(a,b){if(xd)return a[xd]|=b;if(void 0!==a.Ga)return a.Ga|=b;Object.defineProperties(a,{Ga:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function zd(a,b){xd?a[xd]&&(a[xd]&=~b):void 0!==a.Ga&&(a.Ga&=~b)}
function F(a){var b;xd?b=a[xd]:b=a.Ga;return null==b?0:b}
function Ad(a,b){xd?a[xd]=b:void 0!==a.Ga?a.Ga=b:Object.defineProperties(a,{Ga:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Bd(a,b){Object.isFrozen(a)&&(a=Array.prototype.slice.call(a));Ad(a,b);return a}
function Cd(a){yd(a,1);return a}
function Dd(a,b){Ad(b,(a|0)&-51)}
function Ed(a,b){Ad(b,(a|18)&-41)}
;var Fd={};function Gd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Hd,Id=Object.freeze(Ad([],23));function Jd(a){if(F(a.W)&2)throw Error();}
;function Nd(a){if(null!=a&&"number"!==typeof a)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof a+": "+a);return a}
function Od(a){return a.displayName||a.name||"unknown type name"}
function Pd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Od(b)+" but got "+(a&&Od(a.constructor)));return a}
function Qd(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Jc===Fd)return a;if(d){var e=d=F(a);0===e&&(e|=c&16);e|=c&2;e!==d&&Ad(a,e);return new b(a)}}
;function Rd(a){var b=a.h+a.cb;return a.Pa||(a.Pa=a.W[b]={})}
function Sd(a,b,c){return-1===b?null:b>=a.h?a.Pa?a.Pa[b]:void 0:c&&a.Pa&&(c=a.Pa[b],null!=c)?c:a.W[b+a.cb]}
function G(a,b,c,d){Jd(a);return Td(a,b,c,d)}
function Td(a,b,c,d){a.i&&(a.i=void 0);if(b>=a.h||d)return Rd(a)[b]=c,a;a.W[b+a.cb]=c;(c=a.Pa)&&b in c&&delete c[b];return a}
function Ud(a){return void 0!==Vd(a,Wd,11,!1)}
function Xd(a,b,c,d,e){var f=Sd(a,b,d);Array.isArray(f)||(f=Id);var g=F(f);g&1||Cd(f);if(e)g&2||yd(f,18),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&zd(f,16):(f=Cd(Array.prototype.slice.call(f)),Td(a,b,f,d))}return f}
function Yd(a,b,c,d){Jd(a);(c=Zd(a,c))&&c!==b&&null!=d&&Td(a,c,void 0,!1);return Td(a,b,d)}
function Zd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Sd(a,e)&&(0!==c&&Td(a,c,void 0,!1),c=e)}return c}
function Vd(a,b,c,d){var e=Sd(a,c,d);b=Qd(e,b,F(a.W));b!==e&&null!=b&&Td(a,c,b,d);return b}
function $d(a,b,c,d){d=void 0===d?!1:d;b=Vd(a,b,c,d);if(null==b)return b;if(!(F(a.W)&2)){var e=ae(b);e!==b&&(b=e,Td(a,c,b,d))}return b}
function be(a,b,c,d,e){var f=!!(e&2),g=Xd(a,c,1,void 0,f);if(g===Id||!(F(g)&4)){var h=g;g=!!(e&2);var l=!!(F(h)&2);f=h;!g&&l&&(h=Array.prototype.slice.call(h));e|=l?2:0;for(var m=0,p=0;m<h.length;m++){var r=Qd(h[m],b,e);void 0!==r&&(l=l||!!(2&F(r.W)),h[p++]=r)}p<m&&(h.length=p);b=h;e=!l;h=F(b);l=h|5;e=e?l|8:l&-9;h!=e&&(b=Bd(b,e));h=b;f!==h&&Td(a,c,h);(g||1===d)&&Object.freeze(h);return h}if(3===d)return g;f||(f=Object.isFrozen(g),1===d?f||Object.freeze(g):(d=F(g),b=d&-19,f&&(g=Array.prototype.slice.call(g),
d=0,Td(a,c,g)),d!==b&&Ad(g,b)));return g}
function H(a,b,c,d){Jd(a);null!=d?Pd(d,b):d=void 0;return Td(a,c,d)}
function ce(a,b,c,d,e){Jd(a);null!=e?Pd(e,b):e=void 0;Yd(a,c,d,e)}
function de(a,b,c,d){Jd(a);if(null!=d){for(var e=!!d.length,f=0;f<d.length;f++){var g=d[f];Pd(g,b);e=e&&!(F(g.W)&2)}b=F(d);f=b|1;f=(e?f|8:f&-9)|4;f!=b&&(d=Bd(d,f))}null==d&&(d=Id);return Td(a,c,d)}
function ee(a,b,c,d){var e=F(a.W);if(e&2)throw Error();a=be(a,c,b,2,e);c=null!=d?Pd(d,c):new c;a.push(c);F(c.W)&2&&zd(a,8)}
function fe(a,b,c){Qa(c);G(a,b,c)}
function ge(){var a=new he;return G(a,1,1)}
function ie(a,b){return null==a?b:a}
function je(a,b){return ie(Sd(a,b),"")}
;var ke;function le(a,b){return me(b)}
function me(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&vd&&null!=a&&a instanceof Uint8Array){if(wd){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=ud(a);return a}}return a}
;function ne(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&F(a)&1?void 0:f&&F(a)&2?a:oe(a,b,c,void 0!==d,e,f);else if(Gd(a)){var g={},h;for(h in a)g[h]=ne(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function oe(a,b,c,d,e,f){var g=F(a);d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=ne(a[h],b,c,d,e,f);c&&c(g,a);return a}
function pe(a){return a.Jc===Fd?a.toJSON():me(a)}
;function qe(a,b,c){c=void 0===c?Ed:c;if(null!=a){if(vd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=F(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Ad(a,d|18),a;a=oe(a,qe,d&4?Ed:c,!0,!1,!0);b=F(a);b&4&&b&2&&Object.freeze(a);return a}a.Jc===Fd&&(F(a.W)&2||(a=re(a,!0),yd(a.W,18)));return a}}
function re(a,b){var c=a.W,d=[];yd(d,16);var e=a.constructor.h;e&&d.push(e);e=a.Pa;if(e){d.length=c.length;var f={};d[d.length-1]=f}b=b||F(a.W)&2?Ed:Dd;f=a.constructor;F(d);ke=d;d=new f(d);ke=void 0;a.pd&&(d.pd=a.pd.slice());f=!!(F(c)&16);for(var g=e?c.length-1:c.length,h=0;h<g;h++)G(d,h-a.cb,qe(c[h],f,b),!1);if(e)for(var l in e)a=e[l],c=+l,Number.isNaN(c),G(d,c,qe(a,f,b),!0);return d}
function ae(a){if(!(F(a.W)&2))return a;var b=re(a,!1);b.i=a;return b}
;function I(a,b,c){null==a&&(a=ke);ke=void 0;var d=this.constructor.h;if(null==a){a=d?[d]:[];var e=!0;Ad(a,48)}else{if(!Array.isArray(a))throw Error();if(d&&d!==a[0])throw Error();var f=yd(a,0)|32;e=0!==(16&f);Ad(a,f)}this.cb=d?0:-1;this.W=a;a:{f=this.W.length;d=f-1;if(f&&(f=this.W[d],Gd(f))){this.Pa=f;this.h=d-this.cb;break a}void 0!==b&&-1<b?(this.h=Math.max(b,d+1-this.cb),this.Pa=void 0):this.h=Number.MAX_VALUE}if(c){b=e&&!0;e=this.h;var g;for(d=0;d<c.length;d++)if(f=c[d],f<e){f+=this.cb;var h=
a[f];h?se(h,b):a[f]=Id}else g||(g=Rd(this)),(h=g[f])?se(h,b):g[f]=Id}F(this.W)}
k=I.prototype;k.toJSON=function(){var a=this.W,b;Hd?b=a:b=oe(a,pe,void 0,void 0,!1,!1);return b};
k.serialize=function(){Hd=!0;try{return JSON.stringify(this.toJSON(),le)}finally{Hd=!1}};
k.clone=function(){return re(this,!1)};
function se(a,b){if(Array.isArray(a)){var c=F(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&Ad(a,c|d)}}
k.Jc=Fd;k.toString=function(){return this.W.toString()};function te(a){this.cd=a}
;function ue(a,b,c){this.i=a;this.l=b;this.h=c||[];this.sb=new Map}
k=ue.prototype;k.Ud=function(a){var b=Ma.apply(1,arguments),c=this.yc(b);c?c.push(new te(a)):this.Dd(a,b)};
k.Dd=function(a){var b=this.hd(Ma.apply(1,arguments));this.sb.set(b,[new te(a)])};
k.yc=function(){var a=this.hd(Ma.apply(0,arguments));return this.sb.has(a)?this.sb.get(a):void 0};
k.le=function(){var a=this.yc(Ma.apply(0,arguments));return a&&a.length?a[0]:void 0};
k.clear=function(){this.sb.clear()};
k.hd=function(){var a=Ma.apply(0,arguments);return a?a.join(","):"key"};function ve(a,b){ue.call(this,a,3,b)}
v(ve,ue);ve.prototype.j=function(a){var b=Ma.apply(1,arguments),c=0,d=this.le(b);d&&(c=d.cd);this.Dd(c+a,b)};function we(a,b){ue.call(this,a,2,b)}
v(we,ue);we.prototype.record=function(a){this.Ud(a,Ma.apply(1,arguments))};function xe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function ye(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ra(d)?ye.apply(null,d):xe(d)}}
;function J(){this.Ca=this.Ca;this.ga=this.ga}
J.prototype.Ca=!1;J.prototype.h=function(){return this.Ca};
J.prototype.dispose=function(){this.Ca||(this.Ca=!0,this.M())};
function ze(a,b){Ae(a,Za(xe,b))}
function Ae(a,b){a.Ca?b():(a.ga||(a.ga=[]),a.ga.push(b))}
J.prototype.M=function(){if(this.ga)for(;this.ga.length;)this.ga.shift()()};function Be(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Be.prototype.stopPropagation=function(){this.j=!0};
Be.prototype.preventDefault=function(){this.defaultPrevented=!0};function Ce(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=De(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ee[c])c=Ee[c];else{c=String(c);if(!Ee[c]){var f=/function\s+([^\(]+)/m.exec(c);Ee[c]=f?f[1]:"[Anonymous]"}c=Ee[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function De(a,b){b||(b={});b[Fe(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Fe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=De(a,b));return c}
function Fe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ee={};var Ge=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
x.addEventListener("test",c,b);x.removeEventListener("test",c,b)}catch(d){}return a}();function He(a,b){Be.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(He,Be);var Ie={2:"touch",3:"pen",4:"mouse"};
He.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(cd){a:{try{Zc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ie[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&He.xa.preventDefault.call(this)};
He.prototype.stopPropagation=function(){He.xa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
He.prototype.preventDefault=function(){He.xa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Je="closure_listenable_"+(1E6*Math.random()|0);var Ke=0;function Le(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ec=e;this.key=++Ke;this.Ob=this.Yb=!1}
function Me(a){a.Ob=!0;a.listener=null;a.proxy=null;a.src=null;a.ec=null}
;function Ne(a){this.src=a;this.listeners={};this.h=0}
Ne.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Oe(a,b,d,e);-1<g?(b=a[g],c||(b.Yb=!1)):(b=new Le(b,this.src,f,!!d,e),b.Yb=c,a.push(b));return b};
Ne.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Oe(e,b,c,d);return-1<b?(Me(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Pe(a,b){var c=b.type;c in a.listeners&&kb(a.listeners[c],b)&&(Me(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Oe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ob&&f.listener==b&&f.capture==!!c&&f.ec==d)return e}return-1}
;var Qe="closure_lm_"+(1E6*Math.random()|0),Re={},Se=0;function Te(a,b,c,d,e){if(d&&d.once)Ue(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Te(a,b[f],c,d,e);else c=Ve(c),a&&a[Je]?a.listen(b,c,Sa(d)?!!d.capture:!!d,e):We(a,b,c,!1,d,e)}
function We(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Sa(e)?!!e.capture:!!e,h=Xe(a);h||(a[Qe]=h=new Ne(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ye();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ge||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ze(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Se++}}
function Ye(){function a(c){return b.call(a.src,a.listener,c)}
var b=$e;return a}
function Ue(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ue(a,b[f],c,d,e);else c=Ve(c),a&&a[Je]?a.l.add(String(b),c,!0,Sa(d)?!!d.capture:!!d,e):We(a,b,c,!0,d,e)}
function af(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)af(a,b[f],c,d,e);else(d=Sa(d)?!!d.capture:!!d,c=Ve(c),a&&a[Je])?a.l.remove(String(b),c,d,e):a&&(a=Xe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Oe(b,c,d,e)),(c=-1<a?b[a]:null)&&bf(c))}
function bf(a){if("number"!==typeof a&&a&&!a.Ob){var b=a.src;if(b&&b[Je])Pe(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ze(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Se--;(c=Xe(b))?(Pe(c,a),0==c.h&&(c.src=null,b[Qe]=null)):Me(a)}}}
function Ze(a){return a in Re?Re[a]:Re[a]="on"+a}
function $e(a,b){if(a.Ob)a=!0;else{b=new He(b,this);var c=a.listener,d=a.ec||a.src;a.Yb&&bf(a);a=c.call(d,b)}return a}
function Xe(a){a=a[Qe];return a instanceof Ne?a:null}
var hf="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ve(a){if("function"===typeof a)return a;a[hf]||(a[hf]=function(b){return a.handleEvent(b)});
return a[hf]}
;function jf(){J.call(this);this.l=new Ne(this);this.Qd=this;this.Da=null}
$a(jf,J);jf.prototype[Je]=!0;k=jf.prototype;k.addEventListener=function(a,b,c,d){Te(this,a,b,c,d)};
k.removeEventListener=function(a,b,c,d){af(this,a,b,c,d)};
function kf(a,b){var c=a.Da;if(c){var d=[];for(var e=1;c;c=c.Da)d.push(c),++e}a=a.Qd;c=b.type||b;"string"===typeof b?b=new Be(b,a):b instanceof Be?b.target=b.target||a:(e=b,b=new Be(c,a),vb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=lf(g,c,!0,b)&&e}b.j||(g=b.h=a,e=lf(g,c,!0,b)&&e,b.j||(e=lf(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=lf(g,c,!1,b)&&e}
k.M=function(){jf.xa.M.call(this);this.removeAllListeners();this.Da=null};
k.listen=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
k.removeAllListeners=function(a){if(this.l){var b=this.l;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Me(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function lf(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ob&&g.capture==c){var h=g.listener,l=g.ec||g.src;g.Yb&&Pe(a.l,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function mf(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
mf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function nf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function of(a,b){return a+Math.random()*(b-a)}
;function pf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
k=pf.prototype;k.clone=function(){return new pf(this.x,this.y)};
k.equals=function(a){return a instanceof pf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
k.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function qf(a,b){this.width=a;this.height=b}
k=qf.prototype;k.clone=function(){return new qf(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
k.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function rf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function sf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function tf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var uf;function vf(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=sf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ya(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!bc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bd;c.bd=null;e()}};
return function(e){d.next={bd:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function wf(){this.i=this.h=null}
wf.prototype.add=function(a,b){var c=xf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
wf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var xf=new mf(function(){return new yf},function(a){return a.reset()});
function yf(){this.next=this.scope=this.fn=null}
yf.prototype.set=function(a,b){this.fn=a;this.scope=b;this.next=null};
yf.prototype.reset=function(){this.next=this.scope=this.fn=null};var zf,Af=!1,Bf=new wf;function Cf(a,b){zf||Df();Af||(zf(),Af=!0);Bf.add(a,b)}
function Df(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);zf=function(){a.then(Ef)}}else zf=function(){var b=Ef;
"function"!==typeof x.setImmediate||x.Window&&x.Window.prototype&&!cc()&&x.Window.prototype.setImmediate==x.setImmediate?(uf||(uf=vf()),uf(b)):x.setImmediate(b)}}
function Ef(){for(var a;a=Bf.remove();){try{a.fn.call(a.scope)}catch(b){Lc(b)}nf(xf,a)}Af=!1}
;function Ff(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=db)try{var b=this;a.call(void 0,function(c){Gf(b,2,c)},function(c){Gf(b,3,c)})}catch(c){Gf(this,3,c)}}
function Hf(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Hf.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var If=new mf(function(){return new Hf},function(a){a.reset()});
function Jf(a,b,c){var d=If.get();d.i=a;d.h=b;d.context=c;return d}
function Kf(a){if(a instanceof Ff)return a;var b=new Ff(db);Gf(b,2,a);return b}
function Lf(a){return new Ff(function(b,c){c(a)})}
function Mf(a,b,c){Nf(a,b,c,null)||Cf(Za(b,a))}
function Of(a){return new Ff(function(b){var c=a.length,d=[];if(c)for(var e=function(h,l,m){c--;d[h]=l?{fulfilled:!0,value:m}:{fulfilled:!1,reason:m};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Mf(g,Za(e,f,!0),Za(e,f,!1));
else b(d)})}
Ff.prototype.then=function(a,b,c){return Pf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ff.prototype.$goog_Thenable=!0;k=Ff.prototype;k.pc=function(a,b){return Pf(this,null,a,b)};
k.catch=Ff.prototype.pc;k.cancel=function(a){if(0==this.h){var b=new Qf(a);Cf(function(){Rf(this,b)},this)}};
function Rf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Rf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Sf(c),Tf(c,e,3,b)))}a.j=null}else Gf(a,3,b)}
function Uf(a,b){a.i||2!=a.h&&3!=a.h||Vf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Pf(a,b,c,d){var e=Jf(null,null,null);e.child=new Ff(function(f,g){e.i=b?function(h){try{var l=b.call(d,h);f(l)}catch(m){g(m)}}:f;
e.h=c?function(h){try{var l=c.call(d,h);void 0===l&&h instanceof Qf?g(h):f(l)}catch(m){g(m)}}:g});
e.child.j=a;Uf(a,e);return e.child}
k.Ze=function(a){this.h=0;Gf(this,2,a)};
k.af=function(a){this.h=0;Gf(this,3,a)};
function Gf(a,b,c){0==a.h&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.h=1,Nf(c,a.Ze,a.af,a)||(a.v=c,a.h=b,a.j=null,Vf(a),3!=b||c instanceof Qf||Wf(a,c)))}
function Nf(a,b,c,d){if(a instanceof Ff)return Uf(a,Jf(b||db,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Sa(a))try{var f=a.then;if("function"===typeof f)return Xf(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function Xf(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Vf(a){a.s||(a.s=!0,Cf(a.ee,a))}
function Sf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
k.ee=function(){for(var a;a=Sf(this);)Tf(this,a,this.h,this.v);this.s=!1};
function Tf(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,Yf(b,c,d);else try{b.j?b.i.call(b.context):Yf(b,c,d)}catch(e){Zf.call(null,e)}nf(If,b)}
function Yf(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Wf(a,b){a.m=!0;Cf(function(){a.m&&Zf.call(null,b)})}
var Zf=Lc;function Qf(a){bb.call(this,a)}
$a(Qf,bb);Qf.prototype.name="cancel";function $f(a,b){jf.call(this);this.j=a||1;this.i=b||x;this.m=Ya(this.Ye,this);this.s=Date.now()}
$a($f,jf);k=$f.prototype;k.enabled=!1;k.Ba=null;k.setInterval=function(a){this.j=a;this.Ba&&this.enabled?(this.stop(),this.start()):this.Ba&&this.stop()};
k.Ye=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.j?this.Ba=this.i.setTimeout(this.m,this.j-a):(this.Ba&&(this.i.clearTimeout(this.Ba),this.Ba=null),kf(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
k.start=function(){this.enabled=!0;this.Ba||(this.Ba=this.i.setTimeout(this.m,this.j),this.s=Date.now())};
k.stop=function(){this.enabled=!1;this.Ba&&(this.i.clearTimeout(this.Ba),this.Ba=null)};
k.M=function(){$f.xa.M.call(this);this.stop();delete this.i};
function ag(a,b,c){if("function"===typeof a)c&&(a=Ya(a,c));else if(a&&"function"==typeof a.handleEvent)a=Ya(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:x.setTimeout(a,b||0)}
;function bg(a){J.call(this);this.K=a;this.j=new Map;this.v=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.i=new $f(this.flushInterval);this.i.listen("tick",this.pb,!1,this);ze(this,this.i);this.s=!1}
v(bg,J);k=bg.prototype;k.sendIsolatedPayload=function(a){this.s=a;this.m=1};
function cg(a){a.i.enabled||a.i.start();a.l++;a.l>=a.m&&a.pb()}
k.pb=function(){var a=this.j.values();a=[].concat(ia(a)).filter(function(b){return b.sb.size});
a.length&&this.K.flush(a,this.s);dg(a);this.l=0;this.i.enabled&&this.i.stop()};
k.Wc=function(a){var b=Ma.apply(1,arguments);this.j.has(a)||this.j.set(a,new ve(a,b))};
k.Xc=function(a){var b=Ma.apply(1,arguments);this.j.has(a)||this.j.set(a,new we(a,b))};
function eg(a,b){return a.v.has(b)?void 0:a.j.get(b)}
k.qc=function(a){this.Pd.apply(this,[a,1].concat(ia(Ma.apply(1,arguments))))};
k.Pd=function(a,b){var c=Ma.apply(2,arguments),d=eg(this,a);d&&d instanceof ve&&(d.j(b,c),cg(this))};
k.record=function(a,b){var c=Ma.apply(2,arguments),d=eg(this,a);d&&d instanceof we&&(d.record(b,c),cg(this))};
function dg(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function fg(a){this.h=a;this.h.Wc("/client_streamz/bg/fiec",{Lb:3,Kb:"rk"},{Lb:2,Kb:"ec"})}
function gg(a,b,c){a.h.qc("/client_streamz/bg/fiec",b,c)}
function hg(a){this.h=a;this.h.Xc("/client_streamz/bg/fil",{Lb:3,Kb:"rk"})}
hg.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function ig(a){this.h=a;this.h.Wc("/client_streamz/bg/fsc",{Lb:3,Kb:"rk"})}
function jg(a){this.h=a;this.h.Xc("/client_streamz/bg/fsl",{Lb:3,Kb:"rk"})}
jg.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var kg={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function lg(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=mg(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=ng(a,h),d+=ng(a,h+4),e+=ng(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return kg.toString(e)}
function mg(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function ng(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function og(a){I.call(this,a)}
v(og,I);var pg=[1,2,3];function qg(a){I.call(this,a)}
v(qg,I);var rg=[1,2,3];function sg(a){I.call(this,a,-1,tg)}
v(sg,I);var tg=[1];function ug(a){I.call(this,a,-1,vg)}
v(ug,I);var vg=[3,6,4];function wg(a){I.call(this,a,-1,xg)}
v(wg,I);var xg=[1];function yg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function zg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=m=0}
function b(r){for(var y=g,u=0;64>u;u+=4)y[u/4]=r[u]<<24|r[u+1]<<16|r[u+2]<<8|r[u+3];for(u=16;80>u;u++)r=y[u-3]^y[u-8]^y[u-14]^y[u-16],y[u]=(r<<1|r>>>31)&4294967295;r=e[0];var z=e[1],D=e[2],E=e[3],N=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var P=E^z&(D^E);var S=1518500249}else P=z^D^E,S=1859775393;else 60>u?(P=z&D|E&(z|D),S=2400959708):(P=z^D^E,S=3395469782);P=((r<<5|r>>>27)&4294967295)+P+N+S+y[u]&4294967295;N=E;E=D;D=(z<<30|z>>>2)&4294967295;z=r;r=P}e[0]=e[0]+r&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+D&4294967295;e[3]=e[3]+E&4294967295;e[4]=e[4]+N&4294967295}
function c(r,y){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var u=[],z=0,D=r.length;z<D;++z)u.push(r.charCodeAt(z));r=u}y||(y=r.length);u=0;if(0==m)for(;u+64<y;)b(r.slice(u,u+64)),u+=64,p+=64;for(;u<y;)if(f[m++]=r[u++],p++,64==m)for(m=0,b(f);u+64<y;)b(r.slice(u,u+64)),u+=64,p+=64}
function d(){var r=[],y=8*p;56>m?c(h,56-m):c(h,64-(m-56));for(var u=63;56<=u;u--)f[u]=y&255,y>>>=8;b(f);for(u=y=0;5>u;u++)for(var z=24;0<=z;z-=8)r[y++]=e[u]>>z&255;return r}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,p;a();return{reset:a,update:c,digest:d,ae:function(){for(var r=d(),y="",u=0;u<r.length;u++)y+="0123456789ABCDEF".charAt(Math.floor(r[u]/16))+"0123456789ABCDEF".charAt(r[u]%16);return y}}}
;function Ag(a,b,c){var d=String(x.location.href);return d&&a&&b?[b,Bg(yg(d),a,c||null)].join(" "):null}
function Bg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],gb(d,function(h){e.push(h)}),Cg(e.join(" "));
var f=[],g=[];gb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];gb(d,function(h){e.push(h)});
a=Cg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Cg(a){var b=zg();b.update(a);return b.ae().toLowerCase()}
;var Dg={};function Eg(a){this.h=a||{cookie:""}}
k=Eg.prototype;k.isEnabled=function(){if(!x.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ic:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
k.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Nf;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ic}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
k.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Hb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ic:0,path:b,domain:c});return d};
k.Bc=function(){return Fg(this).keys};
k.isEmpty=function(){return!this.h.cookie};
k.clear=function(){for(var a=Fg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Fg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Hb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Gg=new Eg("undefined"==typeof document?null:document);function Hg(a){return!!Dg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Ig(a){a=void 0===a?!1:a;var b=x.__SAPISID||x.__APISID||x.__3PSAPISID||x.__OVERRIDE_SID;Hg(a)&&(b=b||x.__1PSAPISID);if(b)return!0;var c=new Eg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Hg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Jg(a,b,c,d){(a=x[a])||(a=(new Eg(document)).get(b));return a?Ag(a,c,d):null}
function Kg(a,b){b=void 0===b?!1:b;var c=yg(String(x.location.href)),d=[];if(Ig(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?x.__SAPISID:x.__APISID;e||(e=new Eg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Ag(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Hg(b)&&((b=Jg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Jg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Lg(a){I.call(this,a,-1,Mg)}
v(Lg,I);var Mg=[2];function Ng(a){this.h=this.i=this.j=a}
Ng.prototype.reset=function(){this.h=this.i=this.j};
Ng.prototype.getValue=function(){return this.i};function Og(){}
Og.prototype.serialize=function(a){var b=[];Pg(this,a,b);return b.join("")};
function Pg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Pg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Qg(d,c),c.push(":"),Pg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Qg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Rg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Sg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Qg(a,b){b.push('"',a.replace(Sg,function(c){var d=Rg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Rg[c]=d);return d}),'"')}
;function Tg(){}
Tg.prototype.h=null;Tg.prototype.getOptions=function(){var a;(a=this.h)||(a={},Ug(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Vg;function Wg(){}
$a(Wg,Tg);function Xg(a){return(a=Ug(a))?new ActiveXObject(a):new XMLHttpRequest}
function Ug(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Vg=new Wg;function Yg(a){jf.call(this);this.headers=new Map;this.V=a||null;this.i=!1;this.T=this.G=null;this.m=this.da="";this.j=this.aa=this.v=this.Z=!1;this.s=0;this.K=null;this.ya="";this.ka=this.la=!1}
$a(Yg,jf);var Zg=/^https?$/i,$g=["POST","PUT"],ah=[];function bh(a,b,c,d,e,f,g){var h=new Yg;ah.push(h);b&&h.listen("complete",b);h.l.add("ready",h.Zd,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.la=g);h.send(a,c,d,e)}
k=Yg.prototype;k.Zd=function(){this.dispose();kb(ah,this)};
k.send=function(a,b,c,d){if(this.G)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.m="";this.Z=!1;this.i=!0;this.G=this.V?Xg(this.V):Xg(Vg);this.T=this.V?this.V.getOptions():Vg.getOptions();this.G.onreadystatechange=Ya(this.ud,this);try{this.getStatus(),this.aa=!0,this.G.open(b,String(a),!0),this.aa=!1}catch(g){this.getStatus();ch(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=t(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=x.FormData&&a instanceof x.FormData;!(0<=fb($g,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=t(c);for(d=b.next();!d.done;d=b.next())c=t(d.value),d=c.next().value,c=c.next().value,this.G.setRequestHeader(d,c);this.ya&&(this.G.responseType=this.ya);"withCredentials"in this.G&&this.G.withCredentials!==this.la&&(this.G.withCredentials=this.la);try{dh(this),0<this.s&&(this.ka=eh(this.G),this.getStatus(),this.ka?(this.G.timeout=this.s,this.G.ontimeout=Ya(this.Id,
this)):this.K=ag(this.Id,this.s,this)),this.getStatus(),this.v=!0,this.G.send(a),this.v=!1}catch(g){this.getStatus(),ch(this,g)}};
function eh(a){return ad&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
k.Id=function(){"undefined"!=typeof Pa&&this.G&&(this.m="Timed out after "+this.s+"ms, aborting",this.getStatus(),kf(this,"timeout"),this.abort(8))};
function ch(a,b){a.i=!1;a.G&&(a.j=!0,a.G.abort(),a.j=!1);a.m=b;fh(a);gh(a)}
function fh(a){a.Z||(a.Z=!0,kf(a,"complete"),kf(a,"error"))}
k.abort=function(){this.G&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.G.abort(),this.j=!1,kf(this,"complete"),kf(this,"abort"),gh(this))};
k.M=function(){this.G&&(this.i&&(this.i=!1,this.j=!0,this.G.abort(),this.j=!1),gh(this,!0));Yg.xa.M.call(this)};
k.ud=function(){this.h()||(this.aa||this.v||this.j?hh(this):this.Be())};
k.Be=function(){hh(this)};
function hh(a){if(a.i&&"undefined"!=typeof Pa)if(a.T[1]&&4==ih(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==ih(a))ag(a.ud,0,a);else if(kf(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(jh(a))kf(a,"complete"),kf(a,"success");else{try{var b=2<ih(a)?a.G.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";fh(a)}}finally{gh(a)}}}
function gh(a,b){if(a.G){dh(a);var c=a.G,d=a.T[0]?function(){}:null;
a.G=null;a.T=null;b||kf(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function dh(a){a.G&&a.ka&&(a.G.ontimeout=null);a.K&&(x.clearTimeout(a.K),a.K=null)}
k.isActive=function(){return!!this.G};
k.isComplete=function(){return 4==ih(this)};
function jh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=xc(1,String(a.da)),!a&&x.self&&x.self.location&&(a=x.self.location.protocol.slice(0,-1)),b=!Zg.test(a?a.toLowerCase():"");c=b}return c}
function ih(a){return a.G?a.G.readyState:0}
k.getStatus=function(){try{return 2<ih(this)?this.G.status:-1}catch(a){return-1}};
k.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function kh(a){I.call(this,a)}
v(kh,I);function lh(a){I.call(this,a,-1,ph)}
v(lh,I);var ph=[1];function Wd(a){I.call(this,a)}
v(Wd,I);var qh=["platform","platformVersion","architecture","model","uaFullVersion"];new lh;function he(a){I.call(this,a)}
v(he,I);function rh(a){I.call(this,a,33,sh)}
v(rh,I);var sh=[3,20,27];function th(a){I.call(this,a,19,uh)}
v(th,I);var uh=[3,5];function vh(a){I.call(this,a,6,wh)}
v(vh,I);var wh=[5];function xh(a){I.call(this,a)}
v(xh,I);var yh;yh=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=$d;this.defaultValue=void 0}(175237375,{Ff:0},xh);function zh(a,b,c,d,e,f,g,h,l,m,p){jf.call(this);var r=this;this.componentId="";this.j=[];this.Ub="";this.Vb=this.ya=-1;this.Gb=!1;this.V=this.m=null;this.K=this.T=0;this.Sd=1;this.timeoutMillis=0;this.la=!1;jf.call(this);this.logSource=a;this.Tb=b||function(){};
this.s=new Ah(a,f);this.Rd=d;this.network=p;this.bufferSize=1E3;this.Td=Za(of,0,1);this.aa=e||null;this.sessionIndex=c||null;this.da=g||!1;this.pageId=l||null;this.logger=null;this.withCredentials=!h;this.qb=f||!1;!this.qb&&(65<=lc("Chromium")||45<=lc("Firefox")||12<=lc("Safari")||Pc()&&Yc());a=ge();Bh(this.s,a);this.v=new Ng(1E4);this.i=new $f(this.v.getValue());ze(this,this.i);m=Ch(this,m);Te(this.i,"tick",m,!1,this);this.Z=new $f(6E5);ze(this,this.Z);Te(this.Z,"tick",m,!1,this);this.da||this.Z.start();
this.qb||(Te(document,"visibilitychange",function(){"hidden"===document.visibilityState&&r.ka()}),Te(document,"pagehide",this.ka,!1,this))}
v(zh,jf);function Ch(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
zh.prototype.M=function(){this.ka();jf.prototype.M.call(this)};
function Dh(a){a.aa||(a.aa=.01>a.Td()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.aa}
function Eh(a,b){a.v=new Ng(1>b?1:b);a.i.setInterval(a.v.getValue())}
zh.prototype.log=function(a){a=a.clone();var b=this.Sd++;G(a,21,b);this.componentId&&G(a,26,this.componentId);if(!Sd(a,1)){b=a;var c=Date.now().toString();G(b,1,c)}null==Sd(a,15)&&G(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),H(a,Lg,16,b));for(;this.j.length>=this.bufferSize;)this.j.shift(),++this.T;this.j.push(a);kf(this,new Fh(a));this.da||this.i.enabled||this.i.start()};
zh.prototype.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.la)Gh(this.s,3),Hh(this);else{var d=Date.now();if(this.Vb>d&&this.ya<d)b&&b("throttled");else{Gh(this.s,1);var e=Ih(this.s,this.j,this.T,this.K);d={};var f=this.Tb();f&&(d.Authorization=f);var g=Dh(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=Gc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=Gc(g,"pageId",this.pageId));if(f&&this.Ub===f)b&&b("stale-auth-token");
else{this.j=[];this.i.enabled&&this.i.stop();this.T=0;var h=e.serialize(),l;this.V&&this.V.isSupported(h.length)&&(l=this.V.compress(h));var m={url:g,body:h,Xd:1,Nc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},p=function(u){c.v.reset();c.i.setInterval(c.v.getValue());if(u){var z=null;try{var D=JSON.parse(u.replace(")]}'\n",""));z=new vh(D)}catch(E){}z&&(u=Number(ie(Sd(z,1),"-1")),0<u&&(c.ya=Date.now(),c.Vb=c.ya+u),z=yh.ctor?yh.i(z,yh.ctor,yh.h,!0):yh.isRepeated?
yh.i(z,yh.h,!0):yh.i(z,yh.h,yh.defaultValue,!0))&&(z=ie(Sd(z,1),-1),-1!=z&&(c.Gb||Eh(c,z)))}a&&a();c.K=0},r=function(u,z){var D=F(e.W),E=!!(D&2);
D=be(e,rh,3,E?1:2,D);if(!(E||F(D)&8)){for(E=0;E<D.length;E++){var N=D[E],P=ae(N);N!==P&&(D[E]=P)}yd(D,8)}E=c.v;E.h=Math.min(3E5,2*E.h);E.i=Math.min(3E5,E.h+Math.round(.2*(Math.random()-.5)*E.h));c.i.setInterval(c.v.getValue());401===u&&f&&(c.Ub=f);void 0===z&&(z=500<=u&&600>u||401===u||0===u);z&&(c.j=D.concat(c.j),c.da||c.i.enabled||c.i.start());b&&b("net-send-failed",u);++c.K},y=function(){c.network?c.network.send(m,p,r):c.Rd(m,p,r)};
l?l.then(function(u){m.Nc["Content-Encoding"]="gzip";m.Nc["Content-Type"]="application/binary";m.body=u;m.Xd=2;y()},function(){y()}):y()}}}};
zh.prototype.ka=function(){Jh(this.s,!0);this.flush();Jh(this.s,!1)};
function Hh(a){Kh(a,function(b,c){b=Gc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.la&&!d&&(a.la=!1);return d})}
function Kh(a,b){if(0!==a.j.length){var c=Kc(Dh(a),"format");c=Ec(c,"auth",a.Tb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=Ih(a.s,e,a.T,a.K);if(!b(c,f)){++a.K;break}a.T=0;a.K=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
function Fh(){Be.call(this,"event-logged",void 0)}
v(Fh,Be);function Ah(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new th;G(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));Bh(this,new he)}
function Bh(a,b){H(a.h,he,1,b);Sd(b,1)||G(b,1,1);a.i||(b=Lh(a),Sd(b,5)||G(b,5,a.locale));a.uach&&(b=Lh(a),$d(b,lh,9)||H(b,lh,9,a.uach))}
function Gh(a,b){Ud($d(a.h,he,1))&&(a=Mh(a),G(a,1,b))}
function Jh(a,b){Ud($d(a.h,he,1))&&(a=Mh(a),G(a,2,b))}
function Nh(a,b){var c=void 0===c?qh:c;b(window,c).then(function(d){a.uach=d;d=Lh(a);H(d,lh,9,a.uach);return!0}).catch(function(){return!1})}
function Lh(a){a=$d(a.h,he,1);var b=$d(a,Wd,11);b||(b=new Wd,H(a,Wd,11,b));return b}
function Mh(a){a=Lh(a);var b=$d(a,kh,10);b||(b=new kh,G(b,2,!1),H(a,kh,10,b));return b}
function Ih(a,b,c,d){c=void 0===c?0:c;d=void 0===d?0:d;if(Ud($d(a.h,he,1))){var e=Mh(a);fe(e,3,d)}a=a.h.clone();d=Date.now().toString();a=G(a,4,d);b=de(a,rh,3,b);c&&G(b,14,c);return b}
;function Oh(a,b,c){bh(a.url,function(d){d=d.target;if(jh(d)){try{var e=d.G?d.G.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Nc,a.timeoutMillis,a.withCredentials)}
;function Ph(a,b){J.call(this);this.s=a;this.Da=b;this.l="https://play.google.com/log?format=json&hasfast=true";this.m=!1;this.aa=Oh;this.i=""}
$a(Ph,J);function Qh(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;J.call(this);f?a=f:(a=new Ph(a,"0"),a.i=b,ze(this,a),""!=c&&(a.l=c),d&&(a.m=!0),e&&(a.j=e),b=new zh(a.s,a.V?a.V:Kg,a.Da,a.aa,a.l,a.m,!1,a.ya,void 0,void 0,a.da?a.da:void 0),ze(a,b),a.K&&Bh(b.s,a.K),a.j&&(c=a.j,d=Lh(b.s),G(d,7,c)),a.Z&&(b.V=a.Z),a.i&&(b.componentId=a.i),a.v&&((c=a.v)?(b.m||(b.m=new Lg),c=c.serialize(),G(b.m,4,c)):b.m&&G(b.m,4,void 0,!1)),a.ka&&(d=a.ka,b.m||(b.m=new Lg),
c=b.m,null==d?d=Id:(e=F(d),1!==(e&1)&&(Object.isFrozen(d)&&(d=Array.prototype.slice.call(d)),Ad(d,e|1))),G(c,2,d)),a.T&&(c=a.T,b.Gb=!0,Eh(b,c)),a.la&&Nh(b.s,a.la),a=b);this.i=a}
v(Qh,J);
Qh.prototype.flush=function(a){var b=a||[];if(b.length){a=new wg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new ug;var h=G(g,1,f.i);var l=f;g=[];for(var m=0;m<l.h.length;m++)g.push(l.h[m].Kb);if(null==g)g=G(h,3,Id);else{l=F(g);if(!(l&4)){if(l&2||Object.isFrozen(g))g=Array.prototype.slice.call(g);for(m=0;m<g.length;m++)g[m]=g[m];Ad(g,l|5)}g=G(h,3,g)}h=[];l=[];m=t(f.sb.keys());for(var p=m.next();!p.done;p=m.next())l.push(p.value.split(","));for(m=0;m<l.length;m++){p=l[m];var r=f.l;for(var y=f.yc(p)||
[],u=[],z=0;z<y.length;z++){var D=y[z];D=D&&D.cd;var E=new qg;switch(r){case 3:Yd(E,1,rg,Number(D));break;case 2:Yd(E,2,rg,Nd(Number(D)))}u.push(E)}r=u;for(y=0;y<r.length;y++){u=r[y];z=new sg;u=H(z,qg,2,u);z=p;D=[];E=f;for(var N=[],P=0;P<E.h.length;P++)N.push(E.h[P].Lb);E=N;for(N=0;N<E.length;N++){var S=E[N],da=z[N];P=new og;switch(S){case 3:Yd(P,1,pg,String(da));break;case 2:S=P;da=Number(da);Qa(da);Yd(S,2,pg,da);break;case 1:Yd(P,3,pg,"true"==da)}D.push(P)}de(u,og,1,D);h.push(u)}}de(g,sg,4,h);c.push(g);
e.clear()}de(a,ug,1,c);b=this.i;a instanceof rh?b.log(a):(c=new rh,a=a.serialize(),a=G(c,8,a),b.log(a));this.i.flush()}};function Rh(a){this.v=Sh();this.m=new Qh(1828);this.h=new bg(this.m);this.s=new hg(this.h);this.j=new ig(this.h);this.l=new jg(this.h);this.i=new fg(this.h);this.Ia=lg(a)}
function Sh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Th(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Uh(a){function b(z,D){Promise.resolve().then(function(){var E;null!=(E=c.na)&&E.s.record(Sh()-E.v,E.Ia);g.resolve({Vd:z,Ue:D})})}
var c=this;this.i=!1;var d=a.program;var e=a.ne;if(a.Ee){var f;this.na=null!=(f=a.na)?f:new Rh(e)}var g=new Th;this.j=g.promise;if(x[e])if(x[e].a){var h;null!=(h=this.na)&&gg(h.i,h.Ia,3)}else{var l;null!=(l=this.na)&&gg(l.i,l.Ia,2);var m;null!=(m=this.na)&&m.h.pb()}else{var p;null!=(p=this.na)&&gg(p.i,p.Ia,1);var r;null!=(r=this.na)&&r.h.pb()}try{this.l=t((0,x[e].a)(d,b,!0)).next().value,this.Te=g.promise.then(function(){})}catch(z){var y;
null!=(y=this.na)&&gg(y.i,y.Ia,4);var u;null!=(u=this.na)&&u.h.pb();throw z;}}
Uh.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=Sh(),d;null!=(d=this.na)&&d.j.h.qc("/client_streamz/bg/fsc",d.Ia);return this.j.then(function(e){var f=e.Vd;return new Promise(function(g){f(function(h){var l;null!=(l=b.na)&&l.l.record(Sh()-c,l.Ia);g(h)},[a.dd,
a.Ve])})})};
Uh.prototype.Fd=function(a){if(this.i)throw Error("Already disposed");var b=Sh(),c;null!=(c=this.na)&&c.j.h.qc("/client_streamz/bg/fsc",c.Ia);a=this.l([a.dd,a.Ve]);var d;null!=(d=this.na)&&d.l.record(Sh()-b,d.Ia);return a};
Uh.prototype.dispose=function(){var a;null!=(a=this.na)&&a.h.pb();this.i=!0;this.j.then(function(b){(b=b.Ue)&&b()})};
Uh.prototype.h=function(){return this.i};var Vh=window;Ab("csi.gstatic.com");Ab("googleads.g.doubleclick.net");Ab("partner.googleadservices.com");Ab("pubads.g.doubleclick.net");Ab("securepubads.g.doubleclick.net");Ab("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Wh;try{new URL("s://g"),Wh=!0}catch(a){Wh=!1}var Xh=Wh;function Yh(a){if(a instanceof Kb)a=Mb(a);else{b:if(Xh){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;var Zh={};function $h(){}
function ai(a){this.h=a}
v(ai,$h);ai.prototype.toString=function(){return this.h};function bi(a){var b="true".toString(),c=[new ai(ci[0].toLowerCase(),Zh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof ai)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function di(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function ei(a,b){a.src=Fb(b);di(a)}
;function fi(a){this.te=a}
function gi(a){return new fi(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var hi=[gi("data"),gi("http"),gi("https"),gi("mailto"),gi("ftp"),new fi(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function ii(a){var b=ji;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ki(){var a=[];ii(function(b){a.push(b)});
return a}
var ji={cf:"allow-forms",df:"allow-modals",ef:"allow-orientation-lock",ff:"allow-pointer-lock",gf:"allow-popups",hf:"allow-popups-to-escape-sandbox",jf:"allow-presentation",kf:"allow-same-origin",lf:"allow-scripts",mf:"allow-top-navigation",nf:"allow-top-navigation-by-user-activation"},li=eb(function(){return ki()});
function mi(){var a=ni(),b={};gb(li(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ni(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function oi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var pi=(new Date).getTime();var qi="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ia(qi),["client_dev_set_cookie"]);"undefined"!==typeof TextDecoder&&new TextDecoder;var ri="undefined"!==typeof TextEncoder?new TextEncoder:null,si=ri?function(a){return ri.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ti(a){jf.call(this);var b=this;this.v=this.j=0;this.Aa=null!=a?a:{ma:function(e,f){return setTimeout(e,f)},
Fa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return w(function(e){return e.yield(ui(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.v||vi(this)}
v(ti,jf);function wi(){var a=xi;ti.h||(ti.h=new ti(a));return ti.h}
ti.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.Aa.Fa(this.v);delete ti.h};
ti.prototype.sa=function(){return this.i};
function vi(a){a.v=a.Aa.ma(function(){var b;return w(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.A(3):c.yield(ui(a),3):c.yield(ui(a),3);vi(a);c.h=0})},3E4)}
function ui(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Aa.ma(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Da(h);a.s=void 0;a.j&&(a.Aa.Fa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?kf(a,"networkstatus-online"):kf(a,"networkstatus-offline"));c(g);Ea(h);break;case 2:Ca(h),g=!1,h.A(3)}})})}
;function yi(){this.data_=[];this.h=-1}
yi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
yi.prototype.get=function(a){return!!this.data_[a]};
function zi(a){-1===a.h&&(a.h=ib(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ai(a,b){this.h=a[x.Symbol.iterator]();this.i=b}
Ai.prototype[Symbol.iterator]=function(){return this};
Ai.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Bi(a,b){return new Ai(a,b)}
;function Ci(){this.blockSize=-1}
;function Di(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
$a(Di,Ci);Di.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Ei(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],l=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+l&4294967295}
Di.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Ei(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Ei(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Ei(this,e);f=0;break}}this.i=f;this.l+=b}};
Di.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Ei(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Fi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Gi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Hi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Fi(a).match(/\S+/g)||[],b=0<=fb(a,b));return b}
function Ii(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Hi(a,"inverted-hdpi")&&Gi(a,Array.prototype.filter.call(a.classList?a.classList:Fi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Ji(){}
Ji.prototype.next=function(){return Ki};
var Ki={done:!0,value:void 0};function Li(a){return{value:a,done:!1}}
Ji.prototype.Ea=function(){return this};function Mi(a){if(a instanceof Ni||a instanceof Oi||a instanceof Pi)return a;if("function"==typeof a.next)return new Ni(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ni(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ea)return new Ni(function(){return a.Ea()});
throw Error("Not an iterator or iterable.");}
function Ni(a){this.i=a}
Ni.prototype.Ea=function(){return new Oi(this.i())};
Ni.prototype[Symbol.iterator]=function(){return new Pi(this.i())};
Ni.prototype.h=function(){return new Pi(this.i())};
function Oi(a){this.i=a}
v(Oi,Ji);Oi.prototype.next=function(){return this.i.next()};
Oi.prototype[Symbol.iterator]=function(){return new Pi(this.i)};
Oi.prototype.h=function(){return new Pi(this.i)};
function Pi(a){Ni.call(this,function(){return a});
this.j=a}
v(Pi,Ni);Pi.prototype.next=function(){return this.j.next()};function Qi(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Qi)for(c=a.Bc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
k=Qi.prototype;k.Bc=function(){Ri(this);return this.h.concat()};
k.has=function(a){return Si(this.i,a)};
k.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Ti;Ri(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Ti(a,b){return a===b}
k.isEmpty=function(){return 0==this.size};
k.clear=function(){this.i={};this.j=this.size=this.h.length=0};
k.remove=function(a){return this.delete(a)};
k.delete=function(a){return Si(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&Ri(this),!0):!1};
function Ri(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Si(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Si(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
k.get=function(a,b){return Si(this.i,a)?this.i[a]:b};
k.set=function(a,b){Si(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
k.forEach=function(a,b){for(var c=this.Bc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new Qi(this)};
k.keys=function(){return Mi(this.Ea(!0)).h()};
k.values=function(){return Mi(this.Ea(!1)).h()};
k.entries=function(){var a=this;return Bi(this.keys(),function(b){return[b,a.get(b)]})};
k.Ea=function(a){Ri(this);var b=0,c=this.j,d=this,e=new Ji;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Ki;var f=d.h[b++];return Li(a?f:d.i[f])};
return e};
function Si(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Ui(a){J.call(this);this.s=1;this.l=[];this.m=0;this.i=[];this.j={};this.v=!!a}
$a(Ui,J);k=Ui.prototype;k.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.s;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.s=e+3;d.push(e);return e};
function Vi(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Fb(b)}}
k.Fb=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&kb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
k.bb=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];Wi(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Fb(c)}}return 0!=e}return!1};
function Wi(a,b,c){Cf(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Fb,this),delete this.j[a])}else this.i.length=0,this.j={}};
k.M=function(){Ui.xa.M.call(this);this.clear();this.l.length=0};function Xi(a){this.h=a}
Xi.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new Og).serialize(b))};
Xi.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Xi.prototype.remove=function(a){this.h.remove(a)};function Yi(a){this.h=a}
$a(Yi,Xi);function Zi(a){this.data=a}
function $i(a){return void 0===a||a instanceof Zi?a:new Zi(a)}
Yi.prototype.set=function(a,b){Yi.xa.set.call(this,a,$i(b))};
Yi.prototype.i=function(a){a=Yi.xa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Yi.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function aj(a){this.h=a}
$a(aj,Yi);aj.prototype.set=function(a,b,c){if(b=$i(b)){if(c){if(c<Date.now()){aj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}aj.xa.set.call(this,a,b)};
aj.prototype.i=function(a){var b=aj.xa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())aj.prototype.remove.call(this,a);else return b}};function bj(){}
;function cj(){}
$a(cj,bj);cj.prototype[Symbol.iterator]=function(){return Mi(this.Ea(!0)).h()};
cj.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function dj(a){this.h=a}
$a(dj,cj);k=dj.prototype;k.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.h.removeItem(a)};
k.Ea=function(a){var b=0,c=this.h,d=new Ji;d.next=function(){if(b>=c.length)return Ki;var e=c.key(b++);if(a)return Li(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Li(e)};
return d};
k.clear=function(){this.h.clear()};
k.key=function(a){return this.h.key(a)};function ej(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
$a(ej,dj);function fj(a,b){this.i=a;this.h=null;var c;if(c=ad)c=!(9<=Number(od));if(c){gj||(gj=new Qi);this.h=gj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),gj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
$a(fj,cj);var hj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},gj=null;function ij(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return hj[b]})}
k=fj.prototype;k.isAvailable=function(){return!!this.h};
k.set=function(a,b){this.h.setAttribute(ij(a),b);jj(this)};
k.get=function(a){a=this.h.getAttribute(ij(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.h.removeAttribute(ij(a));jj(this)};
k.Ea=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ji;d.next=function(){if(b>=c.length)return Ki;var e=c[b++];if(a)return Li(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Li(e)};
return d};
k.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);jj(this)};
function jj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function kj(a,b){this.i=a;this.h=b+"::"}
$a(kj,cj);kj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
kj.prototype.get=function(a){return this.i.get(this.h+a)};
kj.prototype.remove=function(a){this.i.remove(this.h+a)};
kj.prototype.Ea=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ji;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Li(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var K={},lj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;K.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
K.Qc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var mj={rb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},nj={rb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){return[].concat.apply([],a)}};
K.Se=function(){lj?(K.ob=Uint8Array,K.Ja=Uint16Array,K.Od=Int32Array,K.assign(K,mj)):(K.ob=Array,K.Ja=Array,K.Od=Array,K.assign(K,nj))};
K.Se();var oj=!0;try{new Uint8Array(1)}catch(a){oj=!1}
function pj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new K.ob(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var qj={};qj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var rj={},sj,tj=[],uj=0;256>uj;uj++){sj=uj;for(var vj=0;8>vj;vj++)sj=sj&1?3988292384^sj>>>1:sj>>>1;tj[uj]=sj}rj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^tj[(a^b[d])&255];return a^-1};var wj={};wj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function xj(a){for(var b=a.length;0<=--b;)a[b]=0}
var yj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],zj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Aj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Bj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Cj=Array(576);xj(Cj);var Dj=Array(60);xj(Dj);var Ej=Array(512);xj(Ej);var Fj=Array(256);xj(Fj);var Gj=Array(29);xj(Gj);var Hj=Array(30);xj(Hj);function Ij(a,b,c,d,e){this.Gd=a;this.he=b;this.ge=c;this.be=d;this.ye=e;this.ld=a&&a.length}
var Jj,Kj,Lj;function Mj(a,b){this.ed=a;this.yb=0;this.Wa=b}
function Nj(a,b){a.S[a.pending++]=b&255;a.S[a.pending++]=b>>>8&255}
function Oj(a,b,c){a.ba>16-c?(a.ja|=b<<a.ba&65535,Nj(a,a.ja),a.ja=b>>16-a.ba,a.ba+=c-16):(a.ja|=b<<a.ba&65535,a.ba+=c)}
function Pj(a,b,c){Oj(a,c[2*b],c[2*b+1])}
function Qj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Rj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Qj(d[e]++,e))}
function Sj(a){var b;for(b=0;286>b;b++)a.oa[2*b]=0;for(b=0;30>b;b++)a.eb[2*b]=0;for(b=0;19>b;b++)a.ea[2*b]=0;a.oa[512]=1;a.Qa=a.Bb=0;a.va=a.matches=0}
function Tj(a){8<a.ba?Nj(a,a.ja):0<a.ba&&(a.S[a.pending++]=a.ja);a.ja=0;a.ba=0}
function Uj(a,b,c){Tj(a);Nj(a,c);Nj(a,~c);K.rb(a.S,a.window,b,c,a.pending);a.pending+=c}
function Vj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Wj(a,b,c){for(var d=a.U[c],e=c<<1;e<=a.Na;){e<a.Na&&Vj(b,a.U[e+1],a.U[e],a.depth)&&e++;if(Vj(b,d,a.U[e],a.depth))break;a.U[c]=a.U[e];c=e;e<<=1}a.U[c]=d}
function Xj(a,b,c){var d=0;if(0!==a.va){do{var e=a.S[a.Ib+2*d]<<8|a.S[a.Ib+2*d+1];var f=a.S[a.Gc+d];d++;if(0===e)Pj(a,f,b);else{var g=Fj[f];Pj(a,g+256+1,b);var h=yj[g];0!==h&&(f-=Gj[g],Oj(a,f,h));e--;g=256>e?Ej[e]:Ej[256+(e>>>7)];Pj(a,g,c);h=zj[g];0!==h&&(e-=Hj[g],Oj(a,e,h))}}while(d<a.va)}Pj(a,256,b)}
function Yj(a,b){var c=b.ed,d=b.Wa.Gd,e=b.Wa.ld,f=b.Wa.be,g,h=-1;a.Na=0;a.vb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.U[++a.Na]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Na;){var l=a.U[++a.Na]=2>h?++h:0;c[2*l]=1;a.depth[l]=0;a.Qa--;e&&(a.Bb-=d[2*l+1])}b.yb=h;for(g=a.Na>>1;1<=g;g--)Wj(a,c,g);l=f;do g=a.U[1],a.U[1]=a.U[a.Na--],Wj(a,c,1),d=a.U[1],a.U[--a.vb]=g,a.U[--a.vb]=d,c[2*l]=c[2*g]+c[2*d],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=l,a.U[1]=l++,Wj(a,c,1);while(2<=a.Na);a.U[--a.vb]=
a.U[1];g=b.ed;l=b.yb;d=b.Wa.Gd;e=b.Wa.ld;f=b.Wa.he;var m=b.Wa.ge,p=b.Wa.ye,r,y=0;for(r=0;15>=r;r++)a.Ka[r]=0;g[2*a.U[a.vb]+1]=0;for(b=a.vb+1;573>b;b++){var u=a.U[b];r=g[2*g[2*u+1]+1]+1;r>p&&(r=p,y++);g[2*u+1]=r;if(!(u>l)){a.Ka[r]++;var z=0;u>=m&&(z=f[u-m]);var D=g[2*u];a.Qa+=D*(r+z);e&&(a.Bb+=D*(d[2*u+1]+z))}}if(0!==y){do{for(r=p-1;0===a.Ka[r];)r--;a.Ka[r]--;a.Ka[r+1]+=2;a.Ka[p]--;y-=2}while(0<y);for(r=p;0!==r;r--)for(u=a.Ka[r];0!==u;)d=a.U[--b],d>l||(g[2*d+1]!==r&&(a.Qa+=(r-g[2*d+1])*g[2*d],g[2*
d+1]=r),u--)}Rj(c,h,a.Ka)}
function Zj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];++g<h&&m===f||(g<l?a.ea[2*m]+=g:0!==m?(m!==e&&a.ea[2*m]++,a.ea[32]++):10>=g?a.ea[34]++:a.ea[36]++,g=0,e=m,0===f?(h=138,l=3):m===f?(h=6,l=3):(h=7,l=4))}}
function ak(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];if(!(++g<h&&m===f)){if(g<l){do Pj(a,m,a.ea);while(0!==--g)}else 0!==m?(m!==e&&(Pj(a,m,a.ea),g--),Pj(a,16,a.ea),Oj(a,g-3,2)):10>=g?(Pj(a,17,a.ea),Oj(a,g-3,3)):(Pj(a,18,a.ea),Oj(a,g-11,7));g=0;e=m;0===f?(h=138,l=3):m===f?(h=6,l=3):(h=7,l=4)}}}
function bk(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.oa[2*c])return 0;if(0!==a.oa[18]||0!==a.oa[20]||0!==a.oa[26])return 1;for(c=32;256>c;c++)if(0!==a.oa[2*c])return 1;return 0}
var ck=!1;function dk(a,b,c){a.S[a.Ib+2*a.va]=b>>>8&255;a.S[a.Ib+2*a.va+1]=b&255;a.S[a.Gc+a.va]=c&255;a.va++;0===b?a.oa[2*c]++:(a.matches++,b--,a.oa[2*(Fj[c]+256+1)]++,a.eb[2*(256>b?Ej[b]:Ej[256+(b>>>7)])]++);return a.va===a.Mb-1}
;function ek(a,b){a.msg=wj[b];return b}
function fk(a){for(var b=a.length;0<=--b;)a[b]=0}
function gk(a){var b=a.state,c=b.pending;c>a.I&&(c=a.I);0!==c&&(K.rb(a.output,b.S,b.Nb,c,a.zb),a.zb+=c,b.Nb+=c,a.Rc+=c,a.I-=c,b.pending-=c,0===b.pending&&(b.Nb=0))}
function hk(a,b){var c=0<=a.ra?a.ra:-1,d=a.o-a.ra,e=0;if(0<a.level){2===a.F.wc&&(a.F.wc=bk(a));Yj(a,a.hc);Yj(a,a.cc);Zj(a,a.oa,a.hc.yb);Zj(a,a.eb,a.cc.yb);Yj(a,a.Yc);for(e=18;3<=e&&0===a.ea[2*Bj[e]+1];e--);a.Qa+=3*(e+1)+14;var f=a.Qa+3+7>>>3;var g=a.Bb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Oj(a,b?1:0,3),Uj(a,c,d);else if(4===a.strategy||g===f)Oj(a,2+(b?1:0),3),Xj(a,Cj,Dj);else{Oj(a,4+(b?1:0),3);c=a.hc.yb+1;d=a.cc.yb+1;e+=1;Oj(a,c-257,5);Oj(a,d-1,5);Oj(a,e-4,4);for(f=0;f<e;f++)Oj(a,a.ea[2*
Bj[f]+1],3);ak(a,a.oa,c-1);ak(a,a.eb,d-1);Xj(a,a.oa,a.eb)}Sj(a);b&&Tj(a);a.ra=a.o;gk(a.F)}
function M(a,b){a.S[a.pending++]=b}
function ik(a,b){a.S[a.pending++]=b>>>8&255;a.S[a.pending++]=b&255}
function jk(a,b){var c=a.rd,d=a.o,e=a.ta,f=a.td,g=a.o>a.ha-262?a.o-(a.ha-262):0,h=a.window,l=a.Xa,m=a.Ha,p=a.o+258,r=h[d+e-1],y=h[d+e];a.ta>=a.kd&&(c>>=2);f>a.u&&(f=a.u);do{var u=b;if(h[u+e]===y&&h[u+e-1]===r&&h[u]===h[d]&&h[++u]===h[d+1]){d+=2;for(u++;h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&d<p;);u=258-(p-d);d=p-258;if(u>e){a.xb=b;e=u;if(u>=f)break;r=h[d+e-1];y=h[d+e]}}}while((b=m[b&l])>g&&0!==--c);return e<=
a.u?e:a.u}
function kk(a){var b=a.ha,c;do{var d=a.Md-a.u-a.o;if(a.o>=b+(b-262)){K.rb(a.window,a.window,b,b,0);a.xb-=b;a.o-=b;a.ra-=b;var e=c=a.fc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.F.ia)break;e=a.F;c=a.window;f=a.o+a.u;var g=e.ia;g>d&&(g=d);0===g?c=0:(e.ia-=g,K.rb(c,e.input,e.hb,g,f),1===e.state.wrap?e.D=qj(e.D,c,g,f):2===e.state.wrap&&(e.D=rj(e.D,c,g,f)),e.hb+=g,e.lb+=g,c=g);a.u+=c;if(3<=a.u+a.qa)for(d=a.o-a.qa,a.H=a.window[d],
a.H=(a.H<<a.Ma^a.window[d+1])&a.La;a.qa&&!(a.H=(a.H<<a.Ma^a.window[d+3-1])&a.La,a.Ha[d&a.Xa]=a.head[a.H],a.head[a.H]=d,d++,a.qa--,3>a.u+a.qa););}while(262>a.u&&0!==a.F.ia)}
function lk(a,b){for(var c;;){if(262>a.u){kk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.H=(a.H<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ha[a.o&a.Xa]=a.head[a.H],a.head[a.H]=a.o);0!==c&&a.o-c<=a.ha-262&&(a.J=jk(a,c));if(3<=a.J)if(c=dk(a,a.o-a.xb,a.J-3),a.u-=a.J,a.J<=a.Hc&&3<=a.u){a.J--;do a.o++,a.H=(a.H<<a.Ma^a.window[a.o+3-1])&a.La,a.Ha[a.o&a.Xa]=a.head[a.H],a.head[a.H]=a.o;while(0!==--a.J);a.o++}else a.o+=a.J,a.J=0,a.H=a.window[a.o],a.H=(a.H<<a.Ma^a.window[a.o+1])&a.La;else c=dk(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(hk(a,!1),0===a.F.I))return 1}a.qa=2>a.o?a.o:2;return 4===b?(hk(a,!0),0===a.F.I?3:4):a.va&&(hk(a,!1),0===a.F.I)?1:2}
function mk(a,b){for(var c,d;;){if(262>a.u){kk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.H=(a.H<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ha[a.o&a.Xa]=a.head[a.H],a.head[a.H]=a.o);a.ta=a.J;a.wd=a.xb;a.J=2;0!==c&&a.ta<a.Hc&&a.o-c<=a.ha-262&&(a.J=jk(a,c),5>=a.J&&(1===a.strategy||3===a.J&&4096<a.o-a.xb)&&(a.J=2));if(3<=a.ta&&a.J<=a.ta){d=a.o+a.u-3;c=dk(a,a.o-1-a.wd,a.ta-3);a.u-=a.ta-1;a.ta-=2;do++a.o<=d&&(a.H=(a.H<<a.Ma^a.window[a.o+3-1])&a.La,a.Ha[a.o&a.Xa]=a.head[a.H],a.head[a.H]=a.o);
while(0!==--a.ta);a.fb=0;a.J=2;a.o++;if(c&&(hk(a,!1),0===a.F.I))return 1}else if(a.fb){if((c=dk(a,0,a.window[a.o-1]))&&hk(a,!1),a.o++,a.u--,0===a.F.I)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(dk(a,0,a.window[a.o-1]),a.fb=0);a.qa=2>a.o?a.o:2;return 4===b?(hk(a,!0),0===a.F.I?3:4):a.va&&(hk(a,!1),0===a.F.I)?1:2}
function nk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){kk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.J=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.J=258-(e-d);a.J>a.u&&(a.J=a.u)}3<=a.J?(c=dk(a,1,a.J-3),a.u-=a.J,a.o+=a.J,a.J=0):(c=dk(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(hk(a,!1),0===a.F.I))return 1}a.qa=0;return 4===b?(hk(a,!0),0===a.F.I?3:4):
a.va&&(hk(a,!1),0===a.F.I)?1:2}
function ok(a,b){for(var c;;){if(0===a.u&&(kk(a),0===a.u)){if(0===b)return 1;break}a.J=0;c=dk(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(hk(a,!1),0===a.F.I))return 1}a.qa=0;return 4===b?(hk(a,!0),0===a.F.I?3:4):a.va&&(hk(a,!1),0===a.F.I)?1:2}
function pk(a,b,c,d,e){this.oe=a;this.xe=b;this.Ae=c;this.we=d;this.ke=e}
var qk;qk=[new pk(0,0,0,0,function(a,b){var c=65535;for(c>a.wa-5&&(c=a.wa-5);;){if(1>=a.u){kk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ra+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,hk(a,!1),0===a.F.I)return 1;if(a.o-a.ra>=a.ha-262&&(hk(a,!1),0===a.F.I))return 1}a.qa=0;if(4===b)return hk(a,!0),0===a.F.I?3:4;a.o>a.ra&&hk(a,!1);return 1}),
new pk(4,4,8,4,lk),new pk(4,5,16,8,lk),new pk(4,6,32,32,lk),new pk(4,4,16,16,mk),new pk(8,16,32,32,mk),new pk(8,16,128,128,mk),new pk(8,32,128,256,mk),new pk(32,128,258,1024,mk),new pk(32,258,258,4096,mk)];
function rk(){this.F=null;this.status=0;this.S=null;this.wrap=this.pending=this.Nb=this.wa=0;this.B=null;this.za=0;this.method=8;this.wb=-1;this.Xa=this.Tc=this.ha=0;this.window=null;this.Md=0;this.head=this.Ha=null;this.td=this.kd=this.strategy=this.level=this.Hc=this.rd=this.ta=this.u=this.xb=this.o=this.fb=this.wd=this.J=this.ra=this.Ma=this.La=this.Cc=this.fc=this.H=0;this.oa=new K.Ja(1146);this.eb=new K.Ja(122);this.ea=new K.Ja(78);fk(this.oa);fk(this.eb);fk(this.ea);this.Yc=this.cc=this.hc=
null;this.Ka=new K.Ja(16);this.U=new K.Ja(573);fk(this.U);this.vb=this.Na=0;this.depth=new K.Ja(573);fk(this.depth);this.ba=this.ja=this.qa=this.matches=this.Bb=this.Qa=this.Ib=this.va=this.Mb=this.Gc=0}
function sk(a,b){if(!a||!a.state||5<b||0>b)return a?ek(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ia||666===c.status&&4!==b)return ek(a,0===a.I?-5:-2);c.F=a;var d=c.wb;c.wb=b;if(42===c.status)if(2===c.wrap)a.D=0,M(c,31),M(c,139),M(c,8),c.B?(M(c,(c.B.text?1:0)+(c.B.Ua?2:0)+(c.B.Ta?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),M(c,c.B.time&255),M(c,c.B.time>>8&255),M(c,c.B.time>>16&255),M(c,c.B.time>>24&255),M(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),M(c,c.B.os&255),c.B.Ta&&c.B.Ta.length&&
(M(c,c.B.Ta.length&255),M(c,c.B.Ta.length>>8&255)),c.B.Ua&&(a.D=rj(a.D,c.S,c.pending,0)),c.za=0,c.status=69):(M(c,0),M(c,0),M(c,0),M(c,0),M(c,0),M(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),M(c,3),c.status=113);else{var e=8+(c.Tc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;ik(c,e+(31-e%31));0!==c.o&&(ik(c,a.D>>>16),ik(c,a.D&65535));a.D=1}if(69===c.status)if(c.B.Ta){for(e=c.pending;c.za<(c.B.Ta.length&65535)&&(c.pending!==c.wa||(c.B.Ua&&
c.pending>e&&(a.D=rj(a.D,c.S,c.pending-e,e)),gk(a),e=c.pending,c.pending!==c.wa));)M(c,c.B.Ta[c.za]&255),c.za++;c.B.Ua&&c.pending>e&&(a.D=rj(a.D,c.S,c.pending-e,e));c.za===c.B.Ta.length&&(c.za=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.wa&&(c.B.Ua&&c.pending>e&&(a.D=rj(a.D,c.S,c.pending-e,e)),gk(a),e=c.pending,c.pending===c.wa)){var f=1;break}f=c.za<c.B.name.length?c.B.name.charCodeAt(c.za++)&255:0;M(c,f)}while(0!==f);c.B.Ua&&c.pending>e&&(a.D=rj(a.D,
c.S,c.pending-e,e));0===f&&(c.za=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.wa&&(c.B.Ua&&c.pending>e&&(a.D=rj(a.D,c.S,c.pending-e,e)),gk(a),e=c.pending,c.pending===c.wa)){f=1;break}f=c.za<c.B.comment.length?c.B.comment.charCodeAt(c.za++)&255:0;M(c,f)}while(0!==f);c.B.Ua&&c.pending>e&&(a.D=rj(a.D,c.S,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ua?(c.pending+2>c.wa&&gk(a),c.pending+2<=c.wa&&(M(c,a.D&255),M(c,a.D>>
8&255),a.D=0,c.status=113)):c.status=113);if(0!==c.pending){if(gk(a),0===a.I)return c.wb=-1,0}else if(0===a.ia&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return ek(a,-5);if(666===c.status&&0!==a.ia)return ek(a,-5);if(0!==a.ia||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?ok(c,b):3===c.strategy?nk(c,b):qk[c.level].ke(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.I&&(c.wb=-1),0;if(2===d&&(1===b?(Oj(c,2,3),Pj(c,256,Cj),16===c.ba?(Nj(c,c.ja),c.ja=0,c.ba=0):8<=c.ba&&(c.S[c.pending++]=
c.ja&255,c.ja>>=8,c.ba-=8)):5!==b&&(Oj(c,0,3),Uj(c,0,0),3===b&&(fk(c.head),0===c.u&&(c.o=0,c.ra=0,c.qa=0))),gk(a),0===a.I))return c.wb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(M(c,a.D&255),M(c,a.D>>8&255),M(c,a.D>>16&255),M(c,a.D>>24&255),M(c,a.lb&255),M(c,a.lb>>8&255),M(c,a.lb>>16&255),M(c,a.lb>>24&255)):(ik(c,a.D>>>16),ik(c,a.D&65535));gk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var tk={};tk=function(){this.input=null;this.lb=this.ia=this.hb=0;this.output=null;this.Rc=this.I=this.zb=0;this.msg="";this.state=null;this.wc=2;this.D=0};var uk=Object.prototype.toString;
function vk(a){if(!(this instanceof vk))return new vk(a);a=this.options=K.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.F=new tk;this.F.I=0;var b=this.F;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=ek(b,-2);else{8===e&&(e=9);var l=new rk;b.state=l;l.F=b;l.wrap=h;l.B=null;l.Tc=e;l.ha=1<<l.Tc;l.Xa=l.ha-1;l.Cc=f+7;l.fc=1<<l.Cc;l.La=l.fc-1;l.Ma=~~((l.Cc+3-1)/3);l.window=new K.ob(2*l.ha);l.head=new K.Ja(l.fc);l.Ha=new K.Ja(l.ha);l.Mb=1<<f+6;l.wa=4*l.Mb;l.S=new K.ob(l.wa);l.Ib=1*l.Mb;l.Gc=3*l.Mb;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.lb=b.Rc=0;b.wc=2;c=b.state;c.pending=0;c.Nb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.D=2===c.wrap?
0:1;c.wb=0;if(!ck){d=Array(16);for(f=g=0;28>f;f++)for(Gj[f]=g,e=0;e<1<<yj[f];e++)Fj[g++]=f;Fj[g-1]=f;for(f=g=0;16>f;f++)for(Hj[f]=g,e=0;e<1<<zj[f];e++)Ej[g++]=f;for(g>>=7;30>f;f++)for(Hj[f]=g<<7,e=0;e<1<<zj[f]-7;e++)Ej[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Cj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Cj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Cj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Cj[2*e+1]=8,e++,d[8]++;Rj(Cj,287,d);for(e=0;30>e;e++)Dj[2*e+1]=5,Dj[2*e]=Qj(e,5);Jj=new Ij(Cj,yj,257,286,15);Kj=new Ij(Dj,
zj,0,30,15);Lj=new Ij([],Aj,0,19,7);ck=!0}c.hc=new Mj(c.oa,Jj);c.cc=new Mj(c.eb,Kj);c.Yc=new Mj(c.ea,Lj);c.ja=0;c.ba=0;Sj(c);c=0}else c=ek(b,-2);0===c&&(b=b.state,b.Md=2*b.ha,fk(b.head),b.Hc=qk[b.level].xe,b.kd=qk[b.level].oe,b.td=qk[b.level].Ae,b.rd=qk[b.level].we,b.o=0,b.ra=0,b.u=0,b.qa=0,b.J=b.ta=2,b.fb=0,b.H=0);b=c}}else b=-2;if(0!==b)throw Error(wj[b]);a.header&&(b=this.F)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.dictionary){var m;"string"===typeof a.dictionary?m=pj(a.dictionary):
"[object ArrayBuffer]"===uk.call(a.dictionary)?m=new Uint8Array(a.dictionary):m=a.dictionary;a=this.F;f=m;g=f.length;if(a&&a.state)if(m=a.state,b=m.wrap,2===b||1===b&&42!==m.status||m.u)b=-2;else{1===b&&(a.D=qj(a.D,f,g,0));m.wrap=0;g>=m.ha&&(0===b&&(fk(m.head),m.o=0,m.ra=0,m.qa=0),c=new K.ob(m.ha),K.rb(c,f,g-m.ha,m.ha,0),f=c,g=m.ha);c=a.ia;d=a.hb;e=a.input;a.ia=g;a.hb=0;a.input=f;for(kk(m);3<=m.u;){f=m.o;g=m.u-2;do m.H=(m.H<<m.Ma^m.window[f+3-1])&m.La,m.Ha[f&m.Xa]=m.head[m.H],m.head[m.H]=f,f++;while(--g);
m.o=f;m.u=2;kk(m)}m.o+=m.u;m.ra=m.o;m.qa=m.u;m.u=0;m.J=m.ta=2;m.fb=0;a.hb=d;a.input=e;a.ia=c;m.wrap=b;b=0}else b=-2;if(0!==b)throw Error(wj[b]);this.yf=!0}}
vk.prototype.push=function(a,b){var c=this.F,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=pj(a):"[object ArrayBuffer]"===uk.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.ia=c.input.length;do{0===c.I&&(c.output=new K.ob(d),c.zb=0,c.I=d);a=sk(c,e);if(1!==a&&0!==a)return wk(this,a),this.ended=!0,!1;if(0===c.I||0===c.ia&&(4===e||2===e))if("string"===this.options.to){var f=K.Qc(c.output,c.zb);b=f;f=f.length;if(65537>f&&(b.subarray&&oj||!b.subarray))b=
String.fromCharCode.apply(null,K.Qc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=K.Qc(c.output,c.zb),this.chunks.push(b)}while((0<c.ia||0===c.I)&&1!==a);if(4===e)return(c=this.F)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=ek(c,-2):(c.state=null,a=113===d?ek(c,-3):0)):a=-2,wk(this,a),this.ended=!0,0===a;2===e&&(wk(this,0),c.I=0);return!0};
function wk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):K.gd(a.chunks));a.chunks=[];a.err=b;a.msg=a.F.msg}
function xk(a){var b=b||{};b.gzip=!0;b=new vk(b);b.push(a,!0);if(b.err)throw b.msg||wj[b.err];return b.result}
;function yk(a){return Gb(null===a?"null":void 0===a?"undefined":a)}
;function zk(a){this.name=a}
;var Ak=new zk("rawColdConfigGroup");var Bk=new zk("rawHotConfigGroup");var Ck=new zk("commandExecutorCommand");function Dk(a){I.call(this,a)}
v(Dk,I);function Ek(a){I.call(this,a)}
v(Ek,I);function Fk(a){I.call(this,a,-1,Gk)}
v(Fk,I);var Gk=[2];function Hk(a){I.call(this,a,-1,Ik)}
v(Hk,I);Hk.prototype.getPlayerType=function(){return ie(Sd(this,36),0)};
Hk.prototype.setHomeGroupInfo=function(a){return H(this,Fk,81,a)};
Hk.prototype.clearLocationPlayabilityToken=function(){return G(this,89,void 0,!1)};
var Ik=[9,66,24,32,86,100,101];function Jk(a){I.call(this,a)}
v(Jk,I);Jk.prototype.getKey=function(){return je(this,1)};
Jk.prototype.getValue=function(){return je(this,2===Zd(this,Kk)?2:-1)};
var Kk=[2,3,4,5,6];function Lk(a){I.call(this,a,-1,Mk)}
v(Lk,I);var Mk=[15,26,28];function Nk(a){I.call(this,a,-1,Ok)}
v(Nk,I);var Ok=[5];function Pk(a){I.call(this,a)}
v(Pk,I);function fl(a){I.call(this,a,-1,gl)}
v(fl,I);fl.prototype.setSafetyMode=function(a){return G(this,5,a)};
var gl=[12];function hl(a){I.call(this,a,-1,il)}
v(hl,I);var il=[12];var jl=new zk("continuationCommand");var kl=new zk("signalAction");var ll=new zk("webCommandMetadata");var ml=new zk("signalServiceEndpoint");var nl={sf:"EMBEDDED_PLAYER_MODE_UNKNOWN",pf:"EMBEDDED_PLAYER_MODE_DEFAULT",rf:"EMBEDDED_PLAYER_MODE_PFP",qf:"EMBEDDED_PLAYER_MODE_PFL"};var ol=new zk("feedbackEndpoint");var pl={xf:"WEB_DISPLAY_MODE_UNKNOWN",tf:"WEB_DISPLAY_MODE_BROWSER",vf:"WEB_DISPLAY_MODE_MINIMAL_UI",wf:"WEB_DISPLAY_MODE_STANDALONE",uf:"WEB_DISPLAY_MODE_FULLSCREEN"};function ql(a){I.call(this,a)}
v(ql,I);ql.prototype.getKey=function(){return je(this,1)};
ql.prototype.getValue=function(){return je(this,2)};function rl(a){I.call(this,a,-1,sl)}
v(rl,I);var sl=[4,5];function tl(a){I.call(this,a)}
v(tl,I);tl.prototype.getLineNumber=function(){return ie(Sd(this,2),0)};
tl.prototype.getColumnNumber=function(){return ie(Sd(this,3),0)};function ul(a){I.call(this,a)}
v(ul,I);var vl=[2,3,4,5];function wl(a){I.call(this,a)}
v(wl,I);wl.prototype.getMessage=function(){return je(this,1)};
wl.prototype.getLevel=function(){return ie(Sd(this,2),0)};function xl(a){I.call(this,a)}
v(xl,I);function yl(a){I.call(this,a)}
v(yl,I);function zl(a){I.call(this,a,-1,Al)}
v(zl,I);var Al=[10,17];function Bl(a){I.call(this,a)}
v(Bl,I);function Cl(a){I.call(this,a)}
v(Cl,I);function Dl(a){I.call(this,a)}
v(Dl,I);function El(a){I.call(this,a)}
v(El,I);function Fl(a){I.call(this,a)}
v(Fl,I);function Gl(a){var b=new Fl;return G(b,1,a)}
Fl.prototype.getId=function(){return je(this,2)};
function Hl(a,b){return G(a,2,b)}
;function Il(a){I.call(this,a)}
v(Il,I);function Jl(a){I.call(this,a,-1,Kl)}
v(Jl,I);Jl.prototype.getPlayerType=function(){return ie(Sd(this,7),0)};
Jl.prototype.setVideoId=function(a){return G(this,19,a)};
function Ll(a,b){ee(a,68,Fl,b)}
var Kl=[112,83,68];function Ml(a){I.call(this,a)}
v(Ml,I);function Nl(a){I.call(this,a)}
v(Nl,I);function Ol(a){I.call(this,a)}
v(Ol,I);function Pl(a){I.call(this,a,475)}
v(Pl,I);
var Ql=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474];function Rl(a){I.call(this,a)}
v(Rl,I);function Sl(a){I.call(this,a)}
v(Sl,I);Sl.prototype.setVideoId=function(a){return Yd(this,1,Tl,a)};
Sl.prototype.getPlaylistId=function(){var a=2===Zd(this,Tl)?2:-1;return Sd(this,a)};
var Tl=[1,2];function Ul(a){I.call(this,a,-1,Vl)}
v(Ul,I);var Vl=[3];var Wl=new zk("webPlayerShareEntityServiceEndpoint");var Xl=new zk("playlistEditEndpoint");var Yl=new zk("modifyChannelNotificationPreferenceEndpoint");var Zl=new zk("unsubscribeEndpoint");var $l=new zk("subscribeEndpoint");function am(){var a=bm;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a)}
function cm(a){A("yt.ads.biscotti.lastId_",a)}
;function dm(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var em=x.window,fm,gm,hm=(null==em?void 0:null==(fm=em.yt)?void 0:fm.config_)||(null==em?void 0:null==(gm=em.ytcfg)?void 0:gm.data_)||{};A("yt.config_",hm);function im(){dm(hm,arguments)}
function O(a,b){return a in hm?hm[a]:b}
function jm(){var a=hm.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var km=[];function lm(a){km.forEach(function(b){return b(a)})}
function mm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){nm(b)}}:a}
function nm(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),im("ERRORS",b));lm(a)}
function om(a,b,c,d,e){var f=B("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=O("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),im("ERRORS",f))}
;var pm=/^[\w.]*$/,qm={q:!0,search_query:!0};function rm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=sm(f[0]||""),h=sm(f[1]||"");g in c?Array.isArray(c[g])?lb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var l=r,m=f[0],p=String(rm);l.args=[{key:m,value:f[1],query:a,method:tm==p?"unchanged":p}];qm.hasOwnProperty(m)||om(l)}}return c}
var tm=String(rm);function um(a){var b=[];mb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];gb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function wm(a){"?"==a.charAt(0)&&(a=a.substr(1));return rm(a,"&")}
function xm(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),wm(1<a.length?a[1]:a[0])):{}}
function ym(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=wm(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Fc(a,e)+d}
function zm(a){if(!b)var b=window.location.href;var c=xc(1,a),d=yc(a);c&&d?(a=a.match(vc),b=b.match(vc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?yc(b)==d&&(Number(xc(4,b))||null)==(Number(xc(4,a))||null):!0;return a}
function sm(a){return a&&a.match(pm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Am(a){var b=Bm;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=pi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Vh:g;try{var h=g.history.length}catch(ma){h=0}e.u_his=h;var l;e.u_h=null==(l=Vh.screen)?void 0:l.height;var m;e.u_w=null==(m=Vh.screen)?void 0:m.width;var p;e.u_ah=null==(p=Vh.screen)?void 0:p.availHeight;var r;e.u_aw=
null==(r=Vh.screen)?void 0:r.availWidth;var y;e.u_cd=null==(y=Vh.screen)?void 0:y.colorDepth}catch(ma){}h=b.h;try{var u=h.screenX;var z=h.screenY}catch(ma){}try{var D=h.outerWidth;var E=h.outerHeight}catch(ma){}try{var N=h.innerWidth;var P=h.innerHeight}catch(ma){}try{var S=h.screenLeft;var da=h.screenTop}catch(ma){}try{N=h.innerWidth,P=h.innerHeight}catch(ma){}try{var Z=h.screen.availWidth;var na=h.screen.availTop}catch(ma){}u=[S,da,u,z,Z,na,D,E,N,P];try{var Ka=(b.h.top||window).document,xa="CSS1Compat"==
Ka.compatMode?Ka.documentElement:Ka.body;var ya=(new qf(xa.clientWidth,xa.clientHeight)).round()}catch(ma){ya=new qf(-12245933,-12245933)}Ka=ya;ya={};var ua=void 0===ua?x:ua;xa=new yi;"SVGElement"in ua&&"createElementNS"in ua.document&&xa.set(0);z=mi();z["allow-top-navigation-by-user-activation"]&&xa.set(1);z["allow-popups-to-escape-sandbox"]&&xa.set(2);ua.crypto&&ua.crypto.subtle&&xa.set(3);"TextDecoder"in ua&&"TextEncoder"in ua&&xa.set(4);ua=zi(xa);ya.bc=ua;ya.bih=Ka.height;ya.biw=Ka.width;ya.brdim=
u.join();b=b.i;b=(ya.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ya.wgl=!!Vh.WebGLRenderingContext,ya);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Bm=new function(){var a=window.document;this.h=window;this.i=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return um(Am(a))});Date.now();navigator.userAgent.indexOf(" (CrKey ");function R(a){a=Cm(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Dm(a,b){a=Cm(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Em(){return O("EXPERIMENTS_TOKEN","")}
function Cm(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
function Fm(){for(var a=[],b=O("EXPERIMENTS_FORCED_FLAGS",{}),c=t(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=O("EXPERIMENT_FLAGS",{});var e=t(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Gm="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function Hm(){if(!Gm)return null;var a=Gm();return"open"in a?a:null}
function Im(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Jm(a,b){"function"===typeof a&&(a=mm(a));return window.setTimeout(a,b)}
;var Km={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Lm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(qi)),Mm=!1;
function Nm(a,b){b=void 0===b?{}:b;var c=zm(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in Km){var f=O(Km[e]);"X-Goog-Visitor-Id"!==e||f||(f=O("VISITOR_DATA"));!f||!c&&yc(a)||d&&void 0!==b[e]||!(R("move_vss_away_from_login_info_cookie")||"X-Goog-AuthUser"!==e&&"X-Goog-PageId"!==e)||(b[e]=f)}R("move_vss_away_from_login_info_cookie")&&c&&O("SESSION_INDEX")&&(b["X-Yt-Auth-Test"]="test");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!yc(a))b["X-YouTube-Utc-Offset"]=
String(-(new Date).getTimezoneOffset());if(c||!yc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&yc(a)||(b["X-YouTube-Ad-Signals"]=um(Am()));return b}
function Om(a){var b=window.location.search,c=yc(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&zm(a)&&(c=document.location.hostname);var d=wc(xc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=wm(b),f={};gb(Lm,function(g){e[g]&&(f[g]=e[g])});
return ym(a,f||{},!1)}
function Pm(a,b){var c=b.format||"JSON";a=Qm(a,b);var d=Rm(a,b),e=!1,f=Sm(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);var m=Im(l),p=null,r=400<=l.status&&500>l.status,y=500<=l.status&&600>l.status;if(m||r||y)p=Tm(a,c,l,b.convertToSafeHtml);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(p&&p.return_code,10);break a;case "RAW":m=!0;break a}m=!!p}p=p||{};r=b.context||x;m?b.onSuccess&&b.onSuccess.call(r,l,p):b.onError&&b.onError.call(r,l,p);b.onFinish&&b.onFinish.call(r,
l,p)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Jm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||x,f))},d)}return f}
function Qm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ym(a,b||{},!0);return a}
function Rm(a,b){var c=O("XSRF_FIELD_NAME"),d=O("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=O("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||yc(a)&&!b.withCredentials&&yc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=wm(e),vb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Dc(e));if(!(a=e)&&(a=f)){a:{for(var l in f){f=!1;break a}f=!0}a=!f}!Mm&&a&&"POST"!=b.method&&(Mm=!0,nm(Error("AJAX request with postData should use POST")));return e}
function Tm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,om(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Um(a):null)e={},gb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Vm(g)})}d&&Wm(e);
return e}
function Wm(a){if(Sa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=xb();d=e?e.createHTML(d):d;a[c]=new oc(d)}else Wm(a[b])}}
function Um(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Vm(a){var b="";gb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Xm(a,b){b.method="POST";b.postParams||(b.postParams={});return Pm(a,b)}
function Sm(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&mm(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Hm();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=Om(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Nm(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var Ym=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
jc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
jc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
jc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var $m={Va:[],Sa:[{callback:Zm,weight:500}]};function Zm(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function an(){this.Sa=[];this.Va=[]}
var bn;function cn(){if(!bn){var a=bn=new an;a.Va.length=0;a.Sa.length=0;$m.Va&&a.Va.push.apply(a.Va,$m.Va);$m.Sa&&a.Sa.push.apply(a.Sa,$m.Sa)}return bn}
;var dn=new Ui;function en(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=fn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=fn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=fn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function fn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function gn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=hn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=en(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?hn(e+".ve",f,g,h):0;d+=g;d+=hn(e,a[e],b,c);if(500<d)break}}else c[b]=jn(a),d+=c[b].length;else c[b]=jn(a),d+=c[b].length;return d}
function hn(a,b,c,d){c+="."+a;a=jn(b);d[c]=a;return c.length+a.length}
function jn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function kn(){this.We=!0}
function ln(){kn.h||(kn.h=new kn);return kn.h}
function mn(a,b){a={};var c=Kg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(O("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in hm||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in hm&&(a["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return a}
;var nn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function on(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function pn(){if(!x.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return x.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":x.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":x.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":x.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function qn(a,b,c,d,e){Gg.set(""+a,b,{ic:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function rn(a,b,c){Gg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function sn(){if(!Gg.isEnabled())return!1;if(!Gg.isEmpty())return!0;Gg.set("TESTCOOKIESENABLED","1",{ic:60});if("1"!==Gg.get("TESTCOOKIESENABLED"))return!1;Gg.remove("TESTCOOKIESENABLED");return!0}
;var tn=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",tn);function un(){this.h=O("ALT_PREF_COOKIE_NAME","PREF");this.i=O("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Gg.get(""+this.h,void 0);a&&this.parse(a)}
var vn;function wn(){vn||(vn=new un);return vn}
k=un.prototype;k.get=function(a,b){xn(a);yn(a);a=void 0!==tn[a]?tn[a].toString():null;return null!=a?a:b?b:""};
k.set=function(a,b){xn(a);yn(a);if(null==b)throw Error("ExpectedNotNull");tn[a]=b.toString()};
function zn(a){return!!((An("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
k.remove=function(a){xn(a);yn(a);delete tn[a]};
k.clear=function(){for(var a in tn)delete tn[a]};
function yn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function xn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function An(a){a=void 0!==tn[a]?tn[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
k.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(tn[d]=c.toString())}};var Bn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Cn={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Dn={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},En={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Fn(){var a=x.navigator;return a?a.connection:void 0}
function Gn(){var a=Fn();if(a){var b=Bn[a.type||"unknown"]||"CONN_UNKNOWN";a=Bn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Hn(){var a=Fn();if(null!=a&&a.effectiveType)return En.hasOwnProperty(a.effectiveType)?En[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function In(a){var b=Ma.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(In,Error);function Jn(){try{return Kn(),!0}catch(a){return!1}}
function Kn(a){if(void 0!==O("DATASYNC_ID"))return O("DATASYNC_ID");throw new In("Datasync ID not set",void 0===a?"unknown":a);}
;function Ln(){}
function Mn(a,b){return Nn(a,0,b)}
Ln.prototype.ma=function(a,b){return Nn(a,1,b)};
function On(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Pn(){Ln.apply(this,arguments)}
v(Pn,Ln);function Qn(){Pn.h||(Pn.h=new Pn);return Pn.h}
function Nn(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Jm(a,c||0)}
Pn.prototype.Fa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Pn.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Pn.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
var xi=Qn();function Rn(a){var b=new ej;(b=b.isAvailable()?a?new kj(b,a):b:null)||(a=new fj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new aj(a):null;this.i=document.domain||window.location.hostname}
Rn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new Og).serialize(b))}catch(f){return}else e=escape(b);qn(a,e,c,this.i)};
Rn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Gg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Rn.prototype.remove=function(a){this.h&&this.h.remove(a);rn(a,"/",this.i)};var Sn=function(){var a;return function(){a||(a=new Rn("ytidb"));return a}}();
function Tn(){var a;return null==(a=Sn())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Un=[],Vn,Wn=!1;function Xn(){var a={};for(Vn=new Yn(void 0===a.handleError?Zn:a.handleError,void 0===a.logEvent?$n:a.logEvent);0<Un.length;)switch(a=Un.shift(),a.type){case "ERROR":Vn.handleError(a.payload);break;case "EVENT":Vn.logEvent(a.eventType,a.payload)}}
function ao(a){Wn||(Vn?Vn.handleError(a):(Un.push({type:"ERROR",payload:a}),10<Un.length&&Un.shift()))}
function bo(a,b){Wn||(Vn?Vn.logEvent(a,b):(Un.push({type:"EVENT",eventType:a,payload:b}),10<Un.length&&Un.shift()))}
;function co(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function eo(a){return a.substr(0,a.indexOf(":"))||a}
;var fo=pd||qd;function go(a){var b=Wb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var ho={},io=(ho.AUTH_INVALID="No user identifier specified.",ho.EXPLICIT_ABORT="Transaction was explicitly aborted.",ho.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ho.MISSING_INDEX="Index not created.",ho.MISSING_OBJECT_STORES="Object stores not created.",ho.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",ho.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",ho.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
ho.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ho.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ho.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",ho.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",ho),jo={},ko=(jo.AUTH_INVALID="ERROR",jo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",jo.EXPLICIT_ABORT="IGNORED",jo.IDB_NOT_SUPPORTED="ERROR",jo.MISSING_INDEX=
"WARNING",jo.MISSING_OBJECT_STORES="ERROR",jo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",jo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",jo.QUOTA_EXCEEDED="WARNING",jo.QUOTA_MAYBE_EXCEEDED="WARNING",jo.UNKNOWN_ABORT="WARNING",jo.INCOMPATIBLE_DB_VERSION="WARNING",jo),lo={},mo=(lo.AUTH_INVALID=!1,lo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,lo.EXPLICIT_ABORT=!1,lo.IDB_NOT_SUPPORTED=!1,lo.MISSING_INDEX=!1,lo.MISSING_OBJECT_STORES=!1,lo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,lo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,lo.QUOTA_EXCEEDED=!1,lo.QUOTA_MAYBE_EXCEEDED=!0,lo.UNKNOWN_ABORT=!0,lo.INCOMPATIBLE_DB_VERSION=!1,lo);function no(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?io[a]:c;d=void 0===d?ko[a]:d;e=void 0===e?mo[a]:e;In.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,no.prototype)}
v(no,In);function oo(a,b){no.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},io.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,oo.prototype)}
v(oo,no);function po(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,po.prototype)}
v(po,Error);var qo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function ro(a,b,c,d){b=eo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof no)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new no("QUOTA_EXCEEDED",a);if(rd&&"UnknownError"===e.name)return new no("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof po)return new no("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&qo.some(function(f){return e.message.includes(f)}))return new no("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new no("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",vd:e.name})];e.level="WARNING";return e}
function so(a,b,c){var d=Tn();return new no("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function to(a){if(!a)throw Error();throw a;}
function uo(a){return a}
function vo(a){this.h=a}
function wo(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
wo.all=function(a){return new wo(new vo(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={mb:0};f.mb<a.length;f={mb:f.mb},++f.mb)wo.resolve(a[f.mb]).then(function(g){return function(h){d[g.mb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
wo.resolve=function(a){return new wo(new vo(function(b,c){a instanceof wo?a.then(b,c):b(a)}))};
wo.reject=function(a){return new wo(new vo(function(b,c){c(a)}))};
wo.prototype.then=function(a,b){var c=this,d=null!=a?a:uo,e=null!=b?b:to;return new wo(new vo(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){xo(c,c,d,f,g)}),c.i.push(function(){yo(c,c,e,f,g)})):"FULFILLED"===c.state.status?xo(c,c,d,f,g):"REJECTED"===c.state.status&&yo(c,c,e,f,g)}))};
wo.prototype.catch=function(a){return this.then(void 0,a)};
function xo(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof wo?zo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function yo(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof wo?zo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function zo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof wo?zo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ao(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Bo(a){return new Promise(function(b,c){Ao(a,b,c)})}
function Co(a){return new wo(new vo(function(b,c){Ao(a,b,c)}))}
;function Do(a,b){return new wo(new vo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Eo=window,T=Eo.ytcsi&&Eo.ytcsi.now?Eo.ytcsi.now:Eo.performance&&Eo.performance.timing&&Eo.performance.now&&Eo.performance.timing.navigationStart?function(){return Eo.performance.timing.navigationStart+Eo.performance.now()}:function(){return(new Date).getTime()};function Fo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
k=Fo.prototype;k.add=function(a,b,c){return Go(this,[a],{mode:"readwrite",fa:!0},function(d){return d.objectStore(a).add(b,c)})};
k.clear=function(a){return Go(this,[a],{mode:"readwrite",fa:!0},function(b){return b.objectStore(a).clear()})};
k.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
k.count=function(a,b){return Go(this,[a],{mode:"readonly",fa:!0},function(c){return c.objectStore(a).count(b)})};
function Ho(a,b,c){a=a.h.createObjectStore(b,c);return new Io(a)}
k.delete=function(a,b){return Go(this,[a],{mode:"readwrite",fa:!0},function(c){return c.objectStore(a).delete(b)})};
k.get=function(a,b){return Go(this,[a],{mode:"readonly",fa:!0},function(c){return c.objectStore(a).get(b)})};
function Jo(a,b,c){return Go(a,[b],{mode:"readwrite",fa:!0},function(d){d=d.objectStore(b);return Co(d.h.put(c,void 0))})}
k.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Go(a,b,c,d){var e,f,g,h,l,m,p,r,y,u,z,D;return w(function(E){switch(E.h){case 1:var N={mode:"readonly",fa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?N.mode=c:Object.assign(N,c);e=N;a.transactionCount++;f=e.fa?3:1;g=0;case 2:if(h){E.A(3);break}g++;l=Math.round(T());Aa(E,4);m=a.h.transaction(b,e.mode);N=E.yield;var P=new Ko(m);P=Lo(P,d);return N.call(E,P,6);case 6:return p=E.i,r=Math.round(T()),Mo(a,l,r,g,void 0,b.join(),e),E.return(p);case 4:y=Ca(E);u=Math.round(T());z=ro(y,
a.h.name,b.join(),a.h.version);if((D=z instanceof no&&!z.h)||g>=f)Mo(a,l,u,g,z,b.join(),e),h=z;E.A(2);break;case 3:return E.return(Promise.reject(h))}})}
function Mo(a,b,c,d,e,f,g){b=c-b;e?(e instanceof no&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&bo("QUOTA_EXCEEDED",{dbName:eo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof no&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),bo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),No(a,!1,d,f,b,g.tag),ao(e)):No(a,!0,d,f,b,g.tag)}
function No(a,b,c,d,e,f){bo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
k.getName=function(){return this.h.name};
function Io(a){this.h=a}
k=Io.prototype;k.add=function(a,b){return Co(this.h.add(a,b))};
k.autoIncrement=function(){return this.h.autoIncrement};
k.clear=function(){return Co(this.h.clear()).then(function(){})};
function Oo(a,b,c){a.h.createIndex(b,c,{unique:!1})}
k.count=function(a){return Co(this.h.count(a))};
function Po(a,b){return Qo(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
k.delete=function(a){return a instanceof IDBKeyRange?Po(this,a):Co(this.h.delete(a))};
k.get=function(a){return Co(this.h.get(a))};
k.index=function(a){try{return new Ro(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new po(a,this.h.name);throw b;}};
k.getName=function(){return this.h.name};
k.keyPath=function(){return this.h.keyPath};
function Qo(a,b,c){a=a.h.openCursor(b.query,b.direction);return So(a).then(function(d){return Do(d,c)})}
function Ko(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=no;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(null===l)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Lo(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
Ko.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new no("EXPLICIT_ABORT");};
Ko.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Io(a),this.i.set(a,b));return b};
function Ro(a){this.h=a}
k=Ro.prototype;k.count=function(a){return Co(this.h.count(a))};
k.delete=function(a){return To(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
k.get=function(a){return Co(this.h.get(a))};
k.getKey=function(a){return Co(this.h.getKey(a))};
k.keyPath=function(){return this.h.keyPath};
k.unique=function(){return this.h.unique};
function To(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return So(a).then(function(d){return Do(d,c)})}
function Uo(a,b){this.request=a;this.cursor=b}
function So(a){return Co(a).then(function(b){return b?new Uo(a,b):null})}
k=Uo.prototype;k.advance=function(a){this.cursor.advance(a);return So(this.request)};
k.continue=function(a){this.cursor.continue(a);return So(this.request)};
k.delete=function(){return Co(this.cursor.delete()).then(function(){})};
k.getKey=function(){return this.cursor.key};
k.getValue=function(){return this.cursor.value};
k.update=function(a){return Co(this.cursor.update(a))};function Vo(a,b,c){return new Promise(function(d,e){function f(){y||(y=new Fo(g.result,{closed:r}));return y}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Wd,l=c.blocking,m=c.Xe,p=c.upgrade,r=c.closed,y;g.addEventListener("upgradeneeded",function(u){try{if(null===u.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");u.dataLoss&&"none"!==u.dataLoss&&bo("IDB_DATA_CORRUPTED",{reason:u.dataLossMessage||"unknown reason",dbName:eo(a)});var z=f(),D=new Ko(g.transaction);
p&&p(z,function(E){return u.oldVersion<E&&u.newVersion>=E},D);
D.done.catch(function(E){e(E)})}catch(E){e(E)}});
g.addEventListener("success",function(){var u=g.result;l&&u.addEventListener("versionchange",function(){l(f())});
u.addEventListener("close",function(){bo("IDB_UNEXPECTEDLY_CLOSED",{dbName:eo(a),dbVersion:u.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Wo(a,b,c){c=void 0===c?{}:c;return Vo(a,b,c)}
function Xo(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.h)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Wd)&&c.addEventListener("blocked",function(){e()}),g.yield(Bo(c),4);
if(2!=g.h)return Ba(g,0);f=Ca(g);throw ro(f,a,"",-1);})}
;function Yo(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
Yo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Wo(a,b,c)};
Yo.prototype.delete=function(a){a=void 0===a?{}:a;return Xo(this.name,a)};
function Zo(a,b){return new no("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function $o(a,b){if(!b)throw so("openWithToken",eo(a.name));return a.open()}
Yo.prototype.open=function(){function a(){var f,g,h,l,m,p,r,y,u,z;return w(function(D){switch(D.h){case 1:return g=null!=(f=Error().stack)?f:"",Aa(D,2),D.yield(c.i(c.name,c.options.version,e),4);case 4:h=D.i;for(var E=c.options,N=[],P=t(Object.keys(E.Ab)),S=P.next();!S.done;S=P.next()){S=S.value;var da=E.Ab[S],Z=void 0===da.Fe?Number.MAX_VALUE:da.Fe;!(h.h.version>=da.Hb)||h.h.version>=Z||h.h.objectStoreNames.contains(S)||N.push(S)}l=N;if(0===l.length){D.A(5);break}m=Object.keys(c.options.Ab);p=h.objectStoreNames();
if(c.m<Dm("ytidb_reopen_db_retries",0))return c.m++,h.close(),ao(new no("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:p})),D.return(a());if(!(c.l<Dm("ytidb_remake_db_retries",1))){D.A(6);break}c.l++;return D.yield(c.delete(),7);case 7:return ao(new no("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:p})),D.return(a());case 6:throw new oo(p,m);case 5:return D.return(h);case 2:r=Ca(D);if(r instanceof DOMException?
"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){D.A(8);break}return D.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:y=D.i;u=y.h.version;if(void 0!==c.options.version&&u>c.options.version+1)throw y.close(),c.j=!1,Zo(c,u);return D.return(y);case 8:throw b(),r instanceof Error&&!R("ytidb_async_stack_killswitch")&&
(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),ro(r,c.name,"",null!=(z=c.options.version)?z:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Zo(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Xe:b,upgrade:this.options.upgrade};return this.h=d=a()};var ap=new Yo("YtIdbMeta",{Ab:{databases:{Hb:1}},upgrade:function(a,b){b(1)&&Ho(a,"databases",{keyPath:"actualName"})}});
function bp(a,b){var c;return w(function(d){if(1==d.h)return d.yield($o(ap,b),2);c=d.i;return d.return(Go(c,["databases"],{fa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Co(f.h.put(a,void 0)).then(function(){})})}))})}
function cp(a,b){var c;return w(function(d){if(1==d.h)return a?d.yield($o(ap,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function dp(a,b){var c,d;return w(function(e){return 1==e.h?(c=[],e.yield($o(ap,b),2)):3!=e.h?(d=e.i,e.yield(Go(d,["databases"],{fa:!0,mode:"readonly"},function(f){c.length=0;return Qo(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function ep(a){return dp(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function fp(a,b,c){return dp(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function gp(a){var b,c;return w(function(d){if(1==d.h)return b=Kn("YtIdbMeta hasAnyMeta other"),d.yield(dp(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var hp,ip=new function(){}(new function(){});
function jp(){var a,b,c,d;return w(function(e){switch(e.h){case 1:a=Tn();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=fo)f=/WebKit\/([0-9]+)/.exec(Wb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Wb()),f=!(f&&602<=parseInt(f[1],10)));if(f||bd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(bp(d,ip),4);case 4:return e.yield(cp("yt-idb-test-do-not-use",ip),5);case 5:return e.return(!0);case 2:return Ca(e),e.return(!1)}})}
function kp(){if(void 0!==hp)return hp;Wn=!0;return hp=jp().then(function(a){Wn=!1;var b;if(null!=(b=Sn())&&b.h){var c;b={hasSucceededOnce:(null==(c=Tn())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Sn())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function lp(){return B("ytglobal.idbToken_")||void 0}
function mp(){var a=lp();return a?Promise.resolve(a):kp().then(function(b){(b=b?ip:void 0)&&A("ytglobal.idbToken_",b);return b})}
;var np=0;function op(a,b){np||(np=xi.ma(function(){var c,d,e,f,g;return w(function(h){switch(h.h){case 1:return h.yield(mp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(fp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(Xo(f.actualName),7);case 7:return h.yield(cp(f.actualName,c),6);case 6:Ba(h,4);break;case 3:g=Ca(h),ao(g),d=!1;case 4:xi.Fa(np),np=0,d&&op(a,b),h.h=0}})}))}
function pp(){var a;return w(function(b){return 1==b.h?b.yield(mp(),2):(a=b.i)?b.return(gp(a)):b.return(!1)})}
new Th;function qp(a){if(!Jn())throw a=new no("AUTH_INVALID",{dbName:a}),ao(a),a;var b=Kn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function rp(a,b,c,d){var e,f,g,h,l,m;return w(function(p){switch(p.h){case 1:return f=null!=(e=Error().stack)?e:"",p.yield(mp(),2);case 2:g=p.i;if(!g)throw h=so("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),ao(h),h;co(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:qp(a);Aa(p,3);return p.yield(bp(l,g),5);case 5:return p.yield(Wo(l.actualName,b,d),6);case 6:return p.return(p.i);case 3:return m=Ca(p),Aa(p,7),p.yield(cp(l.actualName,
g),9);case 9:Ba(p,8);break;case 7:Ca(p);case 8:throw m;}})}
function sp(a,b,c){c=void 0===c?{}:c;return rp(a,b,!1,c)}
function tp(a,b,c){c=void 0===c?{}:c;return rp(a,b,!0,c)}
function up(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.h)return e.yield(mp(),2);if(3!=e.h){c=e.i;if(!c)return e.return();co(a);d=qp(a);return e.yield(Xo(d.actualName,b),3)}return e.yield(cp(d.actualName,c),0)})}
function vp(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.h?e.yield(Xo(d.actualName,b),2):e.yield(cp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function wp(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.h)return d.yield(mp(),2);if(3!=d.h){b=d.i;if(!b)return d.return();co("LogsDatabaseV2");return d.yield(ep(b),3)}c=d.i;return d.yield(vp(c,a,b),0)})}
function xp(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.h)return d.yield(mp(),2);if(3!=d.h){c=d.i;if(!c)return d.return();co(a);return d.yield(Xo(a,b),3)}return d.yield(cp(a,c),0)})}
;function yp(a,b){Yo.call(this,a,b);this.options=b;co(a)}
v(yp,Yo);function zp(a,b){var c;return function(){c||(c=new yp(a,b));return c}}
yp.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.oc?tp:sp)(a,b,Object.assign({},c))};
yp.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.oc?xp:up)(this.name,a)};
function Ap(a,b){return zp(a,b)}
;var Bp={},Cp=Ap("ytGcfConfig",{Ab:(Bp.coldConfigStore={Hb:1},Bp.hotConfigStore={Hb:1},Bp),oc:!1,upgrade:function(a,b){b(1)&&(Oo(Ho(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Oo(Ho(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Dp(a){return $o(Cp(),a)}
function Ep(a,b,c){var d,e,f;return w(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:T()},g.yield(Dp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Jo(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Fp(a,b,c,d){var e,f,g;return w(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:T()},h.yield(Dp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Jo(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Gp(a){var b,c;return w(function(d){return 1==d.h?d.yield(Dp(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Go(b,["coldConfigStore"],{mode:"readwrite",fa:!0},function(e){return To(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Hp(a){var b,c;return w(function(d){return 1==d.h?d.yield(Dp(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Go(b,["hotConfigStore"],{mode:"readwrite",fa:!0},function(e){return To(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Ip(){this.h=0}
function Jp(a,b,c){var d,e,f;return w(function(g){if(1==g.h){if(!R("update_log_event_config"))return g.A(0);c&&(a.i=c,A("yt.gcf.config.hotConfigGroup",a.i));a.hotHashData=b;A("yt.gcf.config.hotHashData",a.hotHashData);return(d=lp())?c?g.A(4):g.yield(Hp(d),5):g.A(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return g.yield(Ep(c,b,d),0)})}
function Kp(a,b,c){var d,e,f,g;return w(function(h){if(1==h.h){if(!R("update_log_event_config"))return h.A(0);a.coldHashData=b;A("yt.gcf.config.coldHashData",a.coldHashData);return(d=lp())?c?h.A(4):h.yield(Gp(d),5):h.A(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(Fp(c,b,g,d),0)})}
;function Lp(){return"INNERTUBE_API_KEY"in hm&&"INNERTUBE_API_VERSION"in hm}
function Mp(){return{innertubeApiKey:O("INNERTUBE_API_KEY"),innertubeApiVersion:O("INNERTUBE_API_VERSION"),Dc:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),md:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),pe:O("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION"),od:O("INNERTUBE_CONTEXT_HL"),nd:O("INNERTUBE_CONTEXT_GL"),qe:O("INNERTUBE_HOST_OVERRIDE")||"",se:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),re:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Np(a){var b={client:{hl:a.od,gl:a.nd,clientName:a.md,clientVersion:a.innertubeContextClientVersion,configInfo:a.Dc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=x.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Em();""!==c&&(b.client.experimentsToken=c);c=Fm();0<c.length&&(b.request={internalExperimentFlags:c});Op(a,void 0,b);Pp(void 0,b);Qp(void 0,b);Rp(a,void 0,b);Sp(void 0,b);R("start_sending_config_hash")&&Tp(void 0,b);O("DELEGATED_SESSION_ID")&&
!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=t(Object.entries(wm(O("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=t(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Up(a){var b=new hl,c=new Hk;G(c,1,a.od);G(c,2,a.nd);G(c,16,a.pe);G(c,17,a.innertubeContextClientVersion);if(a.Dc){var d=a.Dc,e=new Dk;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);H(c,Dk,62,e)}(d=x.devicePixelRatio)&&1!=d&&G(c,65,Nd(d));d=Em();""!==d&&G(c,54,d);d=Fm();if(0<d.length){e=new Lk;for(var f=0;f<d.length;f++){var g=new Jk;G(g,1,d[f].key);Yd(g,2,Kk,d[f].value);ee(e,15,
Jk,g)}H(b,Lk,5,e)}Op(a,c);Pp(b);Qp(c);Rp(a,c);Sp(c);R("start_sending_config_hash")&&Tp(c);O("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(a=new fl,G(a,3,O("DELEGATED_SESSION_ID")));a=t(Object.entries(wm(O("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=t(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);H(b,Hk,1,c);return b}
function Op(a,b,c){a=a.md;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=$d(b,Ek,96)||new Ek;var d=pn();d=Object.keys(pl).indexOf(d);d=-1===d?null:d;null!==d&&G(c,3,d);H(b,Ek,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=pn())}
function Pp(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=$d(a,Nk,7)||new Nk,G(b,4,c),H(a,Nk,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Qp(a,b){var c;if(R("web_log_memory_total_kbytes")&&(null==(c=x.navigator)?0:c.deviceMemory)){var d;c=null==(d=x.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Rp(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=$d(b,Dk,62))?d:new Dk;G(c,6,a.appInstallData);H(b,Dk,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Sp(a,b){var c=Gn();c&&(a?G(a,61,Cn[c]):b&&(b.client.connectionType=c));R("web_log_effective_connection_type")&&(c=Hn())&&(a?G(a,94,Dn[c]):b&&(b.client.effectiveConnectionType=c))}
function Vp(a,b,c){c=void 0===c?{}:c;var d={};O("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":O("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||O("AUTHORIZATION");b||(a?b="Bearer "+B("gapi.auth.getToken")().zf:(a=mn(ln()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function Tp(a,b){Ip.h||(Ip.h=new Ip);var c=Ip.h;var d=T()-c.h;if(0!==c.h&&d<Dm("send_config_hash_timer"))c=void 0;else{d=B("yt.gcf.config.coldConfigData");var e=B("yt.gcf.config.hotHashData"),f=B("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=T());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=$d(a,Dk,62))?g:new Dk;G(b,1,c);G(b,3,d);G(b,5,e);H(a,Dk,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},
b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;function Wp(a,b){this.version=a;this.args=b}
Wp.prototype.serialize=function(){return{version:this.version,args:this.args}};function Xp(){this.topic="aft-recorded"}
Xp.prototype.toString=function(){return this.topic};var Yp=B("ytPubsub2Pubsub2Instance")||new Ui;Ui.prototype.subscribe=Ui.prototype.subscribe;Ui.prototype.unsubscribeByKey=Ui.prototype.Fb;Ui.prototype.publish=Ui.prototype.bb;Ui.prototype.clear=Ui.prototype.clear;A("ytPubsub2Pubsub2Instance",Yp);A("ytPubsub2Pubsub2SubscribedKeys",B("ytPubsub2Pubsub2SubscribedKeys")||{});A("ytPubsub2Pubsub2TopicToKeys",B("ytPubsub2Pubsub2TopicToKeys")||{});A("ytPubsub2Pubsub2IsAsync",B("ytPubsub2Pubsub2IsAsync")||{});A("ytPubsub2Pubsub2SkipSubKey",null);
function Zp(a,b){var c=B("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;function $p(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Zp("meta_logging_csi_event",{timerName:a,Tf:b})}
;var aq=Dm("max_body_size_to_compress",5E5),bq=Dm("min_body_size_to_compress",500),cq=!0,dq=0,eq=0,fq=Dm("compression_performance_threshold",250),gq=Dm("slow_compressions_before_abandon_count",10);
function hq(a,b,c,d){var e=T(),f={startTime:e,ticks:{},infos:{}};if(cq)try{var g=iq(b);if(null==g||!(g>aq||g<bq)){var h=xk(si(b)),l=T();f.ticks.gelc=l;eq++;R("disable_compression_due_to_performance_degredation")&&l-e>=fq&&(dq++,R("abandon_compression_after_N_slow_zips")?eq===Dm("compression_disable_point")&&dq>gq&&(cq=!1):cq=!1);jq(f);c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=h;c.postParams=void 0}d(a,c)}catch(m){om(m),d(a,c)}else d(a,c)}
function kq(a){var b=void 0===b?!1:b;var c=T(),d={startTime:c,ticks:{},infos:{}};if(cq){if(!a.body)return a;try{var e="string"===typeof a.body?a.body:JSON.stringify(a.body),f=iq(e);if(null!=f&&(f>aq||f<bq))return a;var g=xk(si(e)),h=T();d.ticks.gelc=h;if(b){eq++;if(R("disable_compression_due_to_performance_degredation")&&h-c>=fq)if(dq++,R("abandon_compression_after_N_slow_zips")){b=dq/eq;var l=gq/Dm("compression_disable_point");0<eq&&0===eq%Dm("compression_disable_point")&&b>=l&&(cq=!1)}else cq=!1;
jq(d)}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=g;return a}catch(m){return om(m),a}}else return a}
function iq(a){try{return(new Blob(a.split(""))).size}catch(b){return om(b),null}}
function jq(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||$p("gel_compression",a,{sampleRate:.1})}
;function lq(a){a=Object.assign({},a);delete a.Authorization;var b=Kg();if(b){var c=new Di;c.update(O("INNERTUBE_API_KEY"));c.update(b);a.hash=ud(c.digest(),3)}return a}
;var mq;function nq(){mq||(mq=new Rn("yt.innertube"));return mq}
function oq(a,b,c,d){if(d)return null;d=nq().get("nextId",!0)||1;var e=nq().get("requests",!0)||{};e[d]={method:a,request:b,authState:lq(c),requestTime:Math.round(T())};nq().set("nextId",d+1,86400,!0);nq().set("requests",e,86400,!0);return d}
function pq(a){var b=nq().get("requests",!0)||{};delete b[a];nq().set("requests",b,86400,!0)}
function qq(a){var b=nq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=lq(Vp(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),rq(a,d.method,e,{}));delete b[c]}}nq().set("requests",b,86400,!0)}}
;function sq(a){this.Xb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ub=function(){};
this.now=Date.now;this.Jb=!1;var b;this.Hd=null!=(b=a.Hd)?b:100;var c;this.Bd=null!=(c=a.Bd)?c:1;var d;this.zd=null!=(d=a.zd)?d:2592E6;var e;this.xd=null!=(e=a.xd)?e:12E4;var f;this.Ad=null!=(f=a.Ad)?f:5E3;var g;this.P=null!=(g=a.P)?g:void 0;this.dc=!!a.dc;var h;this.ac=null!=(h=a.ac)?h:.1;var l;this.kc=null!=(l=a.kc)?l:10;a.handleError&&(this.handleError=a.handleError);a.ub&&(this.ub=a.ub);a.Jb&&(this.Jb=a.Jb);a.Xb&&(this.Xb=a.Xb);this.R=a.R;this.Aa=a.Aa;this.Y=a.Y;this.X=a.X;this.Ra=a.Ra;this.Lc=
a.Lc;this.Kc=a.Kc;tq(this)&&(!this.R||this.R("networkless_logging"))&&uq(this)}
function uq(a){tq(a)&&!a.Jb&&(a.h=!0,a.dc&&Math.random()<=a.ac&&a.Y.Yd(a.P),vq(a),a.X.sa()&&a.Pb(),a.X.listen(a.Lc,a.Pb.bind(a)),a.X.listen(a.Kc,a.Zc.bind(a)))}
k=sq.prototype;k.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(tq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Y.set(d,this.P).then(function(e){d.id=e;c.X.sa()&&wq(c,d)}).catch(function(e){wq(c,d);
xq(c,e)})}else this.Ra(a,b)};
k.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(tq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.R&&this.R("nwl_skip_retry")&&(e.skipRetry=c);if(this.X.sa()||this.R&&this.R("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(l){if(1==l.h)return l.yield(d.Y.set(e,d.P).catch(function(m){xq(d,m)}),2);
f(g,h);l.h=0})}}this.Ra(a,b,e.skipRetry)}else this.Y.set(e,this.P).catch(function(g){d.Ra(a,b,e.skipRetry);
xq(d,g)})}else this.Ra(a,b,this.R&&this.R("nwl_skip_retry")&&c)};
k.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(tq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.Y.tb(d.id,c.P):e=!0;c.X.gb&&c.R&&c.R("vss_network_hint")&&c.X.gb(!0);f(g,h)};
this.Ra(d.url,d.options);this.Y.set(d,this.P).then(function(g){d.id=g;e&&c.Y.tb(d.id,c.P)}).catch(function(g){xq(c,g)})}else this.Ra(a,b)};
k.Pb=function(){var a=this;if(!tq(this))throw so("throttleSend");this.i||(this.i=this.Aa.ma(function(){var b;return w(function(c){if(1==c.h)return c.yield(a.Y.jd("NEW",a.P),2);if(3!=c.h)return b=c.i,b?c.yield(wq(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Pb());c.h=0})},this.Hd))};
k.Zc=function(){this.Aa.Fa(this.i);this.i=0};
function wq(a,b){var c,d;return w(function(e){switch(e.h){case 1:if(!tq(a))throw c=so("immediateSend"),c;if(void 0===b.id){e.A(2);break}return e.yield(a.Y.ue(b.id,a.P),3);case 3:(d=e.i)||a.ub(Error("The request cannot be found in the database."));case 2:if(yq(a,b,a.zd)){e.A(4);break}a.ub(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.A(5);break}return e.yield(a.Y.tb(b.id,a.P),5);case 5:return e.return();case 4:b.skipRetry||(b=zq(a,b));if(!b){e.A(0);break}if(!b.skipRetry||
void 0===b.id){e.A(8);break}return e.yield(a.Y.tb(b.id,a.P),8);case 8:a.Ra(b.url,b.options,!!b.skipRetry),e.h=0}})}
function zq(a,b){if(!tq(a))throw so("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,m;return w(function(p){switch(p.h){case 1:g=Aq(f);(h=Bq(f))&&a.R&&a.R("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.R&&a.R("nwl_consider_error_code")&&g||a.R&&!a.R("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.kc)){p.A(2);break}if(!a.X.nc){p.A(3);break}return p.yield(a.X.nc(),3);case 3:if(a.X.sa()){p.A(2);break}c(e,f);if(!a.R||!a.R("nwl_consider_error_code")||void 0===(null==(l=b)?void 0:l.id)){p.A(6);
break}return p.yield(a.Y.Oc(b.id,a.P,!1),6);case 6:return p.return();case 2:if(a.R&&a.R("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.kc)return p.return();a.potentialEsfErrorCounter++;if(void 0===(null==(m=b)?void 0:m.id)){p.A(8);break}return b.sendCount<a.Bd?p.yield(a.Y.Oc(b.id,a.P,!0,h?!1:void 0),12):p.yield(a.Y.tb(b.id,a.P),8);case 12:a.Aa.ma(function(){a.X.sa()&&a.Pb()},a.Ad);
case 8:c(e,f),p.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.A(2):h.yield(a.Y.tb(b.id,a.P),2);a.X.gb&&a.R&&a.R("vss_network_hint")&&a.X.gb(!0);d(e,f);h.h=0})};
return b}
function yq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function vq(a){if(!tq(a))throw so("retryQueuedRequests");a.Y.jd("QUEUED",a.P).then(function(b){b&&!yq(a,b,a.xd)?a.Aa.ma(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.A(2):c.yield(a.Y.Oc(b.id,a.P),2);vq(a);c.h=0})}):a.X.sa()&&a.Pb()})}
function xq(a,b){a.Nd&&!a.X.sa()?a.Nd(b):a.handleError(b)}
function tq(a){return!!a.P||a.Xb}
function Aq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Bq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Cq;
function Dq(){if(Cq)return Cq();var a={};Cq=Ap("LogsDatabaseV2",{Ab:(a.LogsRequestsStore={Hb:2},a),oc:!1,upgrade:function(b,c,d){c(2)&&Ho(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Oo(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Cq()}
;function Eq(a){return $o(Dq(),a)}
function Fq(a,b){var c,d,e,f;return w(function(g){if(1==g.h)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Eq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:O("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Jo(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=T();Gq(c);return g.return(f)})}
function Hq(a,b){var c,d,e,f,g,h,l;return w(function(m){if(1==m.h)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(Eq(b),2);if(3!=m.h)return d=m.i,e=O("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,T()],h=IDBKeyRange.bound(f,g),l=void 0,m.yield(Go(d,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(p){return To(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(l=r.getValue(),"NEW"===
a&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=T();Gq(c);return m.return(l)})}
function Iq(a,b){var c;return w(function(d){if(1==d.h)return d.yield(Eq(b),2);c=d.i;return d.return(Go(c,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Co(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Jq(a,b,c,d){c=void 0===c?!0:c;var e;return w(function(f){if(1==f.h)return f.yield(Eq(b),2);e=f.i;return f.return(Go(e,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),void 0!==d&&(l.options.compress=d),Co(h.h.put(l,void 0)).then(function(){return l})):wo.resolve(void 0)})}))})}
function Kq(a,b){var c;return w(function(d){if(1==d.h)return d.yield(Eq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Lq(a){var b,c;return w(function(d){if(1==d.h)return d.yield(Eq(a),2);b=d.i;c=T()-2592E6;return d.yield(Go(b,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(e){return Qo(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Tq(){w(function(a){return a.yield(wp(),0)})}
function Gq(a){R("nwl_csi_killswitch")||$p("networkless_performance",a,{sampleRate:1})}
;var Xq={},pr=Ap("ServiceWorkerLogsDatabase",{Ab:(Xq.SWHealthLog={Hb:1},Xq),oc:!0,upgrade:function(a,b){b(1)&&Oo(Ho(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function qr(a){return $o(pr(),a)}
function rr(a){var b,c;w(function(d){if(1==d.h)return d.yield(qr(a),2);b=d.i;c=T()-2592E6;return d.yield(Go(b,["SWHealthLog"],{mode:"readwrite",fa:!0},function(e){return Qo(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function sr(a){var b;return w(function(c){if(1==c.h)return c.yield(qr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var tr={},ur=0;function vr(a){var b=new Image,c=""+ur++;tr[c]=b;b.onload=b.onerror=function(){delete tr[c]};
b.src=a}
;function wr(){this.h=new Map;this.i=!1}
function xr(){if(!wr.h){var a=B("yt.networkRequestMonitor.instance")||new wr;A("yt.networkRequestMonitor.instance",a);wr.h=a}return wr.h}
wr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
wr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
wr.prototype.removeParams=function(a){return a.split("?")[0]};
wr.prototype.removeParams=wr.prototype.removeParams;wr.prototype.isEndpointCFR=wr.prototype.isEndpointCFR;wr.prototype.requestComplete=wr.prototype.requestComplete;wr.getInstance=xr;var yr;function zr(){yr||(yr=new Rn("yt.offline"));return yr}
function Ar(a){if(R("offline_error_handling")){var b=zr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);zr().set("errors",b,2592E3,!0)}}
;function Br(){jf.call(this);var a=this;this.j=!1;this.i=wi();this.i.listen("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=zr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new In(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;nm(d)}zr().set("errors",{},2592E3,!0)}}})}
v(Br,jf);function Cr(){if(!Br.h){var a=B("yt.networkStatusManager.instance")||new Br;A("yt.networkStatusManager.instance",a);Br.h=a}return Br.h}
k=Br.prototype;k.sa=function(){return this.i.sa()};
k.gb=function(a){this.i.i=a};
k.me=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
k.ce=function(){this.j=!0};
k.listen=function(a,b){return this.i.listen(a,b)};
k.nc=function(a){a=ui(this.i,a);a.then(function(b){R("use_cfr_monitor")&&xr().requestComplete("generate_204",b)});
return a};
Br.prototype.sendNetworkCheckRequest=Br.prototype.nc;Br.prototype.listen=Br.prototype.listen;Br.prototype.enableErrorFlushing=Br.prototype.ce;Br.prototype.getWindowStatus=Br.prototype.me;Br.prototype.networkStatusHint=Br.prototype.gb;Br.prototype.isNetworkAvailable=Br.prototype.sa;Br.getInstance=Cr;function Dr(a){a=void 0===a?{}:a;jf.call(this);var b=this;this.i=this.s=0;this.j=Cr();var c=B("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.mc?(this.mc=a.mc,c("networkstatus-online",function(){Er(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Er(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){kf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){kf(b,"publicytnetworkstatus-offline")})))}
v(Dr,jf);Dr.prototype.sa=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Dr.prototype.gb=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Dr.prototype.nc=function(a){var b=this,c;return w(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&xr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.sa())})):c?d.return(c(a)):d.return(!0)})};
function Er(a,b){a.mc?a.i?(xi.Fa(a.s),a.s=xi.ma(function(){a.m!==b&&(kf(a,b),a.m=b,a.i=T())},a.mc-(T()-a.i))):(kf(a,b),a.m=b,a.i=T()):kf(a,b)}
;var Fr;function Gr(){var a=sq.call;Fr||(Fr=new Dr({If:!0,Df:!0}));a.call(sq,this,{Y:{Yd:Lq,tb:Kq,jd:Hq,ue:Iq,Oc:Jq,set:Fq},X:Fr,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;om(new In(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else nm(b)},
ub:om,Ra:Hr,now:T,Nd:Ar,Aa:Qn(),Lc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",dc:!0,ac:.1,kc:Dm("potential_esf_error_limit",10),R:R,Jb:!(Jn()&&Ir())});this.j=new Th;R("networkless_immediately_drop_all_requests")&&Tq();xp("LogsDatabaseV2")}
v(Gr,sq);function Jr(){var a=B("yt.networklessRequestController.instance");a||(a=new Gr,A("yt.networklessRequestController.instance",a),R("networkless_logging")&&mp().then(function(b){a.P=b;uq(a);a.j.resolve();a.dc&&Math.random()<=a.ac&&a.P&&rr(a.P);R("networkless_immediately_drop_sw_health_store")&&Kr(a)}));
return a}
Gr.prototype.writeThenSend=function(a,b){b||(b={});Jn()||(this.h=!1);sq.prototype.writeThenSend.call(this,a,b)};
Gr.prototype.sendThenWrite=function(a,b,c){b||(b={});Jn()||(this.h=!1);sq.prototype.sendThenWrite.call(this,a,b,c)};
Gr.prototype.sendAndWrite=function(a,b){b||(b={});Jn()||(this.h=!1);sq.prototype.sendAndWrite.call(this,a,b)};
Gr.prototype.awaitInitialization=function(){return this.j.promise};
function Kr(a){var b;w(function(c){if(!a.P)throw b=so("clearSWHealthLogsDb"),b;return c.return(sr(a.P).catch(function(d){a.handleError(d)}))})}
function Hr(a,b,c){b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&Lr(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(T())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Sm(a,void 0,"POST",e);else if(O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Sm(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=
new cb({url:a});if(g.j&&g.i||g.l){var h=wc(xc(5,a)),l;if(!(l=!h||!h.endsWith("/aclk"))){var m=a.search(Ic),p=Hc(a,0,"ri",m);if(0>p)var r=null;else{var y=a.indexOf("&",p);if(0>y||y>m)y=m;r=decodeURIComponent(a.slice(p+3,-1!==y?y:0).replace(/\+/g," "))}l="1"!==r}var u=!l;break b}}catch(D){}u=!1}if(u){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(D){}z=!1}c=z?!0:!1}else c=!1;c||vr(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&
(b.postBody=JSON.stringify(b.postBody)),hq(a,b.postBody,b,Pm)):hq(a,JSON.stringify(b.postParams),b,Xm):Pm(a,b)}
function Lr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){xr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){xr().requestComplete(a,!0);d(e,f)}}
function Ir(){return"www.youtube-nocookie.com"!==yc(document.location.toString())}
;var Mr=!1,Nr=x.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Mr};A("ytNetworklessLoggingInitializationOptions",Nr);function Or(){var a;w(function(b){if(1==b.h)return b.yield(mp(),2);a=b.i;if(!a||!Jn()&&!R("nwl_init_require_datasync_id_killswitch")||!Ir())return b.A(0);Mr=!0;Nr.isNwlInitialized=Mr;return b.yield(Jr().awaitInitialization(),0)})}
;function Pr(a){var b=this;this.config_=null;a?this.config_=a:Lp()&&(this.config_=Mp());Mn(function(){qq(b)},5E3)}
Pr.prototype.isReady=function(){!this.config_&&Lp()&&(this.config_=Mp());return!!this.config_};
function rq(a,b,c,d){function e(z){z=void 0===z?!1:z;var D;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(D=oq(b,c,m,l)),D)){var E=g.onSuccess,N=g.onFetchSuccess;g.onSuccess=function(S,da){pq(D);E(S,da)};
c.onFetchSuccess=function(S,da){pq(D);N(S,da)}}try{if(z&&d.retry&&!d.sd.bypassNetworkless)g.method="POST",d.sd.writeThenSend?Jr().writeThenSend(u,g):Jr().sendAndWrite(u,g);
else if(d.compress)if(g.postBody){var P=g.postBody;"string"!==typeof P&&(P=JSON.stringify(g.postBody));hq(u,P,g,Pm)}else hq(u,JSON.stringify(g.postParams),g,Xm);else R("web_all_payloads_via_jspb")?Pm(u,g):Xm(u,g)}catch(S){if("InvalidAccessError"==S.name)D&&(pq(D),D=0),om(Error("An extension is blocking network request."));else throw S;}D&&Mn(function(){qq(a)},5E3)}
!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&om(new In("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new In("innertube xhrclient not ready",b,c,d);nm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,D){if(d.onSuccess)d.onSuccess(D)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,D){if(d.onError)d.onError(D)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.qe)&&(h=f);var l=a.config_.se||!1,m=Vp(l,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var p="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},y=a.config_.re&&f;y=y&&f.startsWith("Bearer");y||(r.key=a.config_.innertubeApiKey);var u=ym(""+h+p,r||{},!0);(B("ytNetworklessLoggingInitializationOptions")?
Nr.isNwlInitialized:Mr)?kp().then(function(z){e(z)}):e(!1)}
;var Qr=0,Rr=dd?"webkit":cd?"moz":ad?"ms":$c?"o":"";A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Qr});var Sr={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Tr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Sr||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Ur(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Tr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Tr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Tr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ob=x.ytEventsEventsListeners||{};A("ytEventsEventsListeners",ob);var Vr=x.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",Vr);
function Wr(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return nb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Sa(e[4])&&Sa(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Xr=eb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Yr(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Wr(a,b,c,d);if(e)return e;e=++Vr.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Tr(h);if(!tf(h.relatedTarget,function(l){return l==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Tr(h);
h.currentTarget=a;return c.call(a,h)};
g=mm(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Xr()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ob[e]=[a,b,c,g,d];return e}
function Zr(a){a&&("string"==typeof a&&(a=[a]),gb(a,function(b){if(b in ob){var c=ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Xr()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[b]}}))}
;function $r(a){this.K=a;this.i=null;this.m=0;this.v=null;this.s=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.V=Yr(window,"mousemove",Ya(this.Z,this));a=Ya(this.T,this);"function"===typeof a&&(a=mm(a));this.aa=window.setInterval(a,25)}
$a($r,J);$r.prototype.Z=function(a){void 0===a.h&&Ur(a);var b=a.h;void 0===a.i&&Ur(a);this.i=new pf(b,a.i)};
$r.prototype.T=function(){if(this.i){var a=T();if(0!=this.m){var b=this.v,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.K();this.s=d}this.m=a;this.v=this.i;this.l=(this.l+1)%4}};
$r.prototype.M=function(){window.clearInterval(this.aa);Zr(this.V)};var as=new Set([174,173,175]),bs={};
function cs(a){var b=void 0===a?{}:a;a=void 0===b.Ce?!1:b.Ce;b=void 0===b.de?!0:b.de;if(null==B("_lact",window)){var c=parseInt(O("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&ds();Yr(document,"keydown",ds);Yr(document,"keyup",ds);Yr(document,"mousedown",ds);Yr(document,"mouseup",ds);a?Yr(window,"touchmove",function(){es("touchmove",200)},{passive:!0}):(Yr(window,"resize",function(){es("resize",200)}),b&&Yr(window,"scroll",function(){es("scroll",
200)}));
new $r(function(){es("mouse",100)});
Yr(document,"touchstart",ds,{passive:!0});Yr(document,"touchend",ds,{passive:!0})}}
function es(a,b){bs[a]||(bs[a]=!0,xi.ma(function(){ds();bs[a]=!1},b))}
function ds(a){var b;if(null!=(b=B("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!as.has(null==a?void 0:a.keyCode))null==B("_lact",window)&&cs(),a=Date.now(),A("_lact",a,window),-1==B("_fact",window)&&A("_fact",a,window),(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function gs(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var hs=x.ytPubsubPubsubInstance||new Ui,is=x.ytPubsubPubsubSubscribedKeys||{},js=x.ytPubsubPubsubTopicToKeys||{},ks=x.ytPubsubPubsubIsSynchronous||{};function ls(a,b){var c=ms();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){is[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{ks[a]?f():Jm(f,0)}catch(g){nm(g)}},void 0);
is[d]=!0;js[a]||(js[a]=[]);js[a].push(d);return d}return 0}
function ns(a){var b=ms();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),gb(a,function(c){b.unsubscribeByKey(c);delete is[c]}))}
function ps(a,b){var c=ms();c&&c.publish.apply(c,arguments)}
function qs(a){var b=ms();if(b)if(b.clear(a),a)rs(a);else for(var c in js)rs(c)}
function ms(){return x.ytPubsubPubsubInstance}
function rs(a){js[a]&&(a=js[a],gb(a,function(b){is[b]&&delete is[b]}),a.length=0)}
Ui.prototype.subscribe=Ui.prototype.subscribe;Ui.prototype.unsubscribeByKey=Ui.prototype.Fb;Ui.prototype.publish=Ui.prototype.bb;Ui.prototype.clear=Ui.prototype.clear;A("ytPubsubPubsubInstance",hs);A("ytPubsubPubsubTopicToKeys",js);A("ytPubsubPubsubIsSynchronous",ks);A("ytPubsubPubsubSubscribedKeys",is);var ss=Symbol("injectionDeps");function ts(a){this.name=a}
ts.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function us(a){this.key=a}
function vs(){this.h=new Map;this.i=new Map}
vs.prototype.resolve=function(a){return a instanceof us?ws(this,a.key,[],!0):ws(this,a,[])};
function ws(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Kd)var e=d.Kd;else if(d.bf)e=d[ss]?xs(a,d[ss],c):[],e=d.bf.apply(d,ia(e));else if(d.Jd){e=d.Jd;var f=e[ss]?xs(a,e[ss],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Rf||a.i.set(b,e);return e}
function xs(a,b,c){return b?b.map(function(d){return d instanceof us?ws(a,d.key,c,!0):ws(a,d,c)}):[]}
;var ys;function zs(){ys||(ys=new vs);return ys}
;function As(){this.store={};this.h={}}
As.prototype.storePayload=function(a,b){a=Bs(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
As.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Cs(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ia(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ia(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ia(this.smartExtractMatchingEntries(a))));return c};
As.prototype.extractMatchingEntries=function(a){a=Cs(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ia(this.store[a[c]])),delete this.store[a[c]]);return b};
As.prototype.getSequenceCount=function(a){a=Cs(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Cs(a,b){var c=Bs(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Bs(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Ds(b.auth,g[0])){var h=b.isJspb;Ds(void 0===h?"undefined":h?"true":"false",g[1])&&Ds(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Ds(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Ds(a,b){return void 0===a||"undefined"===a?!0:a===b}
As.prototype.getSequenceCount=As.prototype.getSequenceCount;As.prototype.extractMatchingEntries=As.prototype.extractMatchingEntries;As.prototype.smartExtractMatchingEntries=As.prototype.smartExtractMatchingEntries;As.prototype.storePayload=As.prototype.storePayload;function Bs(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function Es(a,b){if(a)return a[b.name]}
;var Fs=Dm("initial_gel_batch_timeout",2E3),Gs=Dm("gel_queue_timeout_max_ms",6E4),Hs=Math.pow(2,16)-1,Is=void 0;function Js(){this.j=this.h=this.i=0}
var Ks=new Js,Ls=new Js,Ms,Ns=!0,Os=x.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",Os);var Ps=x.ytLoggingTransportTokensToJspbCttTargetIds_||{};A("ytLoggingTransportTokensToJspbCttTargetIds_",Ps);var Qs={};function Rs(){var a=B("yt.logging.ims");a||(a=new As,A("yt.logging.ims",a));return a}
function Ss(a,b){if("log_event"===a.endpoint){Ts(a);var c=Us(a);Qs[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Rs().storePayload(d,a.payload);Vs(b,c,!1,d)}}
function Ws(a,b){if("log_event"===a.endpoint){Ts(void 0,a);var c=Us(a,!0);Qs[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Rs().storePayload(d,a.payload.toJSON());Vs(b,c,!0,d)}}
function Vs(a,b,c,d){c=void 0===c?!1:c;a&&(Is=new a);a=Dm("tvhtml5_logging_max_batch_ads_fork")||Dm("web_logging_max_batch")||100;var e=T(),f=c?Ls.j:Ks.j,g=0;d&&(g=Rs().getSequenceCount(d));g>=a?Ms||(Ms=Xs(function(){Ys({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,c);Ms=void 0},0)):10<=e-f&&(Zs(c),c?Ls.j=e:Ks.j=e)}
function $s(a,b){if("log_event"===a.endpoint){Ts(a);var c=Us(a),d=new Map;d.set(c,[a.payload]);b&&(Is=new b);return new Ff(function(e,f){Is&&Is.isReady()?at(d,Is,e,f,{bypassNetworkless:!0},!0):e()})}}
function bt(a,b){if("log_event"===a.endpoint){Ts(void 0,a);var c=Us(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Is=new b);return new Ff(function(e){Is&&Is.isReady()?ct(d,Is,e,{bypassNetworkless:!0},!0):e()})}}
function Us(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Sl;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Yd(d,2,Tl,c.playlistId);Ps[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Os[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Ys(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Ff(function(d,e){c?(dt(Ls.i),dt(Ls.h),Ls.h=0):(dt(Ks.i),dt(Ks.h),Ks.h=0);if(Is&&Is.isReady()){var f=a,g=c,h=Is;f=void 0===f?{}:f;g=void 0===g?!1:g;var l=new Map,m=new Map;if(void 0!==b)g?(e=Rs().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),l.set(b,e),ct(l,h,d,f)):(l=Rs().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),m.set(b,l),at(m,h,d,e,f));else if(g){e=t(Object.keys(Qs));for(g=e.next();!g.done;g=e.next())m=g.value,g=Rs().extractMatchingEntries({isJspb:!0,
cttAuthInfo:m}),0<g.length&&l.set(m,g),delete Qs[m];ct(l,h,d,f)}else{l=t(Object.keys(Qs));for(g=l.next();!g.done;g=l.next()){g=g.value;var p=Rs().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<p.length&&m.set(g,p);delete Qs[g]}at(m,h,d,e,f)}}else Zs(c),d()})}
function Zs(a){a=void 0===a?!1:a;if(R("web_gel_timeout_cap")&&(!a&&!Ks.h||a&&!Ls.h)){var b=Xs(function(){Ys({writeThenSend:!0},void 0,a)},Gs);
a?Ls.h=b:Ks.h=b}dt(a?Ls.i:Ks.i);b=O("LOGGING_BATCH_TIMEOUT",Dm("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Ns&&(b=Fs);b=Xs(function(){Ys({writeThenSend:!0},void 0,a)},b);
a?Ls.i=b:Ks.i=b}
function at(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(T()),h=a.size,l={};a=t(a);for(var m=a.next();!m.done;l={Qb:l.Qb,Ya:l.Ya,Db:l.Db,Sb:l.Sb,Rb:l.Rb},m=a.next()){var p=t(m.value);m=p.next().value;p=p.next().value;l.Ya=tb({context:Np(b.config_||Mp())});if(!Ra(p)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}l.Ya.events=p;(p=Os[m])&&et(l.Ya,m,p);delete Os[m];l.Db="visitorOnlyApprovedKey"===m;ft(l.Ya,g,l.Db);gt(e);l.Sb=function(r){R("update_log_event_config")&&xi.ma(function(){return w(function(y){return y.yield(ht(r),
0)})});
h--;h||c()};
l.Qb=0;l.Rb=function(r){return function(){r.Qb++;if(e.bypassNetworkless&&1===r.Qb)try{rq(b,"log_event",r.Ya,jt({writeThenSend:!0},r.Db,r.Sb,r.Rb,f)),Ns=!1}catch(y){nm(y),d()}h--;h||c()}}(l);
try{rq(b,"log_event",l.Ya,jt(e,l.Db,l.Sb,l.Rb,f)),Ns=!1}catch(r){nm(r),d()}}}
function ct(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(T()),g=a.size,h=new Map([].concat(ia(a)));h=t(h);for(var l=h.next();!l.done;l=h.next()){var m=t(l.value).next().value,p=a.get(m);l=new Ul;var r=Up(b.config_||Mp());H(l,hl,1,r);p=p?kt(p):[];p=t(p);for(r=p.next();!r.done;r=p.next())ee(l,3,Pl,r.value);(p=Ps[m])&&lt(l,m,p);delete Ps[m];m="visitorOnlyApprovedKey"===m;mt(l,f,m);gt(d);p={startTime:T(),ticks:{},infos:{}};l=l.serialize();p.ticks.geljspc=T();R("log_jspb_serialize_latency")&&$p("gel_jspb_serialize",
p,{sampleRate:.1});m=jt(d,m,function(y){R("update_log_event_config")&&xi.ma(function(){return w(function(u){return u.yield(ht(y),0)})});
g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=l;rq(b,"log_event","",m);Ns=!1}}
function gt(a){R("always_send_and_write")&&(a.writeThenSend=!1)}
function jt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,sd:a,dangerousLogToVisitorSession:b,Af:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};nt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function ft(a,b,c){nt()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=O("EVENT_ID"))&&(c=ot(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function mt(a,b,c){nt()||G(a,2,b);if(!c&&(b=O("EVENT_ID"))){c=ot();var d=new Rl;G(d,1,b);G(d,2,c);H(a,Rl,5,d)}}
function ot(){var a=O("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Hs/2));a++;a>Hs&&(a=1);im("BATCH_CLIENT_COUNTER",a);return a}
function et(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function lt(a,b,c){var d=1===Zd(c,Tl)?1:-1;if(Sd(c,d))d=1;else if(c.getPlaylistId())d=2;else return;H(a,Sl,4,c);a=$d(a,hl,1)||new hl;c=$d(a,fl,3)||new fl;var e=new Pk;G(e,2,b);G(e,1,d);ee(c,12,Pk,e);H(a,fl,3,c)}
function kt(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Pl(a[c]))}catch(d){nm(new In("Transport failed to deserialize "+String(a[c])))}return b}
function Ts(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}A("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function nt(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Xs(a,b){return R("transport_use_scheduler")?Mn(a,b):Jm(a,b)}
function dt(a){R("transport_use_scheduler")?xi.Fa(a):window.clearTimeout(a)}
function ht(a){var b,c,d,e,f,g,h,l,m,p;return w(function(r){return 1==r.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=Es(d,Bk),g=null==(f=d)?void 0:f.hotHashData,h=Es(d,Ak),m=null==(l=d)?void 0:l.coldHashData,(p=zs().resolve(new us(Ip)))?g?e?r.yield(Jp(p,g,e),2):r.yield(Jp(p,g),2):r.A(2):r.return()):m?h?r.yield(Kp(p,m,h),0):r.yield(Kp(p,m),0):r.A(0)})}
;var pt=x.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",pt);function qt(a){Ys(void 0,void 0,void 0===a?!1:a)}
function rt(a){pt[a]=a in pt?pt[a]+1:0;return pt[a]}
;var st=[];
function $n(a,b,c){c=void 0===c?{}:c;var d=Pr;O("ytLoggingEventsDefaultDisabled",!1)&&Pr===Pr&&(d=null);if(R("web_all_payloads_via_jspb"))c.timestamp||(c.timestamp=T()),st.push({payloadName:a,payload:b,options:c});else{c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;R("enable_unknown_lact_fix_on_html5")&&cs();a=gs();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};R("log_sequence_info_on_gel_web")&&c.sequenceGroup&&(a=e.context,
b=c.sequenceGroup,b={index:rt(b),groupKey:b},a.sequence=b,c.endOfSequence&&delete pt[c.sequenceGroup]);(c.sendIsolatedPayload?$s:Ss)({endpoint:"log_event",payload:e,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}}
;var tt=x.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",tt);function ut(a,b){b=void 0===b?{}:b;var c=!1;O("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:Pr;b=void 0===b?{}:b;var d=Math.round(b.timestamp||T());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=gs();d=new Ol;G(d,1,b.timestamp||!isFinite(e)?-1:e);if(R("log_sequence_info_on_gel_web")&&b.sequenceGroup){e=b.sequenceGroup;var f=rt(e),g=new Nl;G(g,2,f);G(g,1,e);H(d,Nl,3,g);b.endOfSequence&&delete tt[b.sequenceGroup]}H(a,Ol,33,d);(b.sendIsolatedPayload?bt:Ws)({endpoint:"log_event",payload:a,cttAuthInfo:b.cttAuthInfo,
dangerousLogToVisitorSession:b.dangerousLogToVisitorSession},c)}
;var vt=new Set,wt=0,xt=0,zt=0,At=[],Bt=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Zn(a){Ct(a)}
function Dt(a){Ct(a,"WARNING")}
function Ct(a,b,c,d,e,f,g){f=void 0===f?{}:f;f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION");var h=f,l=void 0===b?"ERROR":b,m=void 0===g?!1:g;l=void 0===l?"ERROR":l;m=void 0===m?!1:m;if(a){a.hasOwnProperty("level")&&a.level&&(l=a.level);if(R("console_log_js_exceptions")){var p=[];p.push("Name: "+a.name);p.push("Message: "+a.message);a.hasOwnProperty("params")&&p.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&p.push("Error args: "+
JSON.stringify(a.args));p.push("File name: "+a.fileName);p.push("Stacktrace: "+a.stack);var r=p.join("\n");window.console.log(r,a)}if(!(5<=wt)){var y=At,u=Ce(a),z=u.message||"Unknown Error",D=u.name||"UnknownError",E=u.stack||a.i||"Not available";if(E.startsWith(D+": "+z)){var N=E.split("\n");N.shift();E=N.join("\n")}var P=u.lineNumber||"Not available",S=u.fileName||"Not available",da=E,Z=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var na=0;na<a.args.length&&!(Z=gn(a.args[na],"params."+
na,h,Z),500<=Z);na++);else if(a.hasOwnProperty("params")&&a.params){var Ka=a.params;if("object"===typeof a.params)for(var xa in Ka){if(Ka[xa]){var ya="params."+xa,ua=jn(Ka[xa]);h[ya]=ua;Z+=ya.length+ua.length;if(500<Z)break}}else h.params=jn(Ka)}if(y.length)for(var ma=0;ma<y.length&&!(Z=gn(y[ma],"params.context."+ma,h,Z),500<=Z);ma++);navigator.vendor&&!h.hasOwnProperty("vendor")&&(h["device.vendor"]=navigator.vendor);var L={message:z,name:D,lineNumber:P,fileName:S,stack:da,params:h,sampleWeight:1},
cf=Number(a.columnNumber);isNaN(cf)||(L.lineNumber=L.lineNumber+":"+cf);if("IGNORED"===a.level)var Qc=0;else a:{for(var df=cn(),ja=t(df.Va),ef=ja.next();!ef.done;ef=ja.next()){var mh=ef.value;if(L.message&&L.message.match(mh.Jf)){Qc=mh.weight;break a}}for(var Mq=t(df.Sa),Qk=Mq.next();!Qk.done;Qk=Mq.next()){var Nq=Qk.value;if(Nq.callback(L)){Qc=Nq.weight;break a}}Qc=1}L.sampleWeight=Qc;for(var Oq=t(Ym),Rk=Oq.next();!Rk.done;Rk=Oq.next()){var Sk=Rk.value;if(Sk.jc[L.name])for(var Pq=t(Sk.jc[L.name]),
Tk=Pq.next();!Tk.done;Tk=Pq.next()){var Qq=Tk.value,nh=L.message.match(Qq.regexp);if(nh){L.params["params.error.original"]=nh[0];for(var Uk=Qq.groups,Rq={},Kd=0;Kd<Uk.length;Kd++)Rq[Uk[Kd]]=nh[Kd+1],L.params["params.error."+Uk[Kd]]=nh[Kd+1];L.message=Sk.Ic(Rq);break}}}L.params||(L.params={});var Sq=cn();L.params["params.errorServiceSignature"]="msg="+Sq.Va.length+"&cb="+Sq.Sa.length;L.params["params.serviceWorker"]="false";x.document&&x.document.querySelectorAll&&(L.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));
Ab("sample").constructor!==yb&&(L.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(L);if(0!==L.sampleWeight&&!vt.has(L.message)){if(m&&R("web_enable_error_204"))Et(void 0===l?"ERROR":l,L);else{var Rc=l;Rc=void 0===Rc?"ERROR":Rc;if("ERROR"===Rc){dn.bb("handleError",L);if(R("record_app_crashed_web")&&0===zt&&1===L.sampleWeight)if(zt++,R("errors_via_jspb")){var nx=new Bl;var Uq=G(nx,1,1);if(!R("report_client_error_with_app_crash_ks")){var ox=new zl,px=new yl,
qx=new xl,rx=new wl;var sx=G(rx,1,L.message);var tx=H(qx,wl,3,sx);var ux=H(px,xl,5,tx);var vx=H(ox,yl,9,ux);H(Uq,zl,4,vx)}var Vq=new Pl;ce(Vq,Bl,20,Ql,Uq);ut(Vq)}else{var Wq={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};R("report_client_error_with_app_crash_ks")||(Wq.systemHealth={crashData:{clientError:{logMessage:{message:L.message}}}});$n("appCrashed",Wq)}xt++}else"WARNING"===Rc&&dn.bb("handleWarning",L);if(R("kevlar_gel_error_routing"))a:{var ff=Rc;if(R("errors_via_jspb")){if(Ft())var Yq=void 0;else{var Ld=
new tl;G(Ld,1,L.stack);L.fileName&&G(Ld,4,L.fileName);var Pb=L.lineNumber&&L.lineNumber.split?L.lineNumber.split(":"):[];0!==Pb.length&&(1!==Pb.length||isNaN(Number(Pb[0]))?2!==Pb.length||isNaN(Number(Pb[0]))||isNaN(Number(Pb[1]))||(fe(Ld,2,Number(Pb[0])),fe(Ld,3,Number(Pb[1]))):fe(Ld,2,Number(Pb[0])));var Sc=new wl;G(Sc,1,L.message);G(Sc,3,L.name);fe(Sc,6,L.sampleWeight);"ERROR"===ff?G(Sc,2,2):"WARNING"===ff?G(Sc,2,1):G(Sc,2,0);var Vk=new ul;G(Vk,1,!0);ce(Vk,tl,3,vl,Ld);var nc=new rl;G(nc,3,window.location.href);
for(var Zq=O("FEXP_EXPERIMENTS",[]),Wk=0;Wk<Zq.length;Wk++){var wx=Zq[Wk];Jd(nc);Xd(nc,5,2,!1,!1).push(wx)}var Xk=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!jm()&&Xk)for(var $q=t(Object.keys(Xk)),Tc=$q.next();!Tc.done;Tc=$q.next()){var ar=Tc.value,Yk=new ql;G(Yk,1,ar);G(Yk,2,String(Xk[ar]));ee(nc,4,ql,Yk)}var Zk=L.params;if(Zk){var br=t(Object.keys(Zk));for(Tc=br.next();!Tc.done;Tc=br.next()){var cr=Tc.value,$k=new ql;G($k,1,"client."+cr);G($k,2,String(Zk[cr]));ee(nc,4,ql,$k)}}var dr=O("SERVER_NAME"),
er=O("SERVER_VERSION");if(dr&&er){var al=new ql;G(al,1,"server.name");G(al,2,dr);ee(nc,4,ql,al);var bl=new ql;G(bl,1,"server.version");G(bl,2,er);ee(nc,4,ql,bl)}var oh=new xl;H(oh,rl,1,nc);H(oh,ul,2,Vk);H(oh,wl,3,Sc);Yq=oh}var fr=Yq;if(!fr)break a;var gr=new Pl;ce(gr,xl,163,Ql,fr);ut(gr)}else{if(Ft())var hr=void 0;else{var gf={stackTrace:L.stack};L.fileName&&(gf.filename=L.fileName);var Qb=L.lineNumber&&L.lineNumber.split?L.lineNumber.split(":"):[];0!==Qb.length&&(1!==Qb.length||isNaN(Number(Qb[0]))?
2!==Qb.length||isNaN(Number(Qb[0]))||isNaN(Number(Qb[1]))||(gf.lineNumber=Number(Qb[0]),gf.columnNumber=Number(Qb[1])):gf.lineNumber=Number(Qb[0]));var cl={level:"ERROR_LEVEL_UNKNOWN",message:L.message,errorClassName:L.name,sampleWeight:L.sampleWeight};"ERROR"===ff?cl.level="ERROR_LEVEL_ERROR":"WARNING"===ff&&(cl.level="ERROR_LEVEL_WARNNING");var xx={isObfuscated:!0,browserStackInfo:gf},Md={pageUrl:window.location.href,kvPairs:[]};O("FEXP_EXPERIMENTS")&&(Md.experimentIds=O("FEXP_EXPERIMENTS"));var dl=
O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!jm()&&dl)for(var ir=t(Object.keys(dl)),Uc=ir.next();!Uc.done;Uc=ir.next()){var jr=Uc.value;Md.kvPairs.push({key:jr,value:String(dl[jr])})}var el=L.params;if(el){var kr=t(Object.keys(el));for(Uc=kr.next();!Uc.done;Uc=kr.next()){var lr=Uc.value;Md.kvPairs.push({key:"client."+lr,value:String(el[lr])})}}var mr=O("SERVER_NAME"),nr=O("SERVER_VERSION");mr&&nr&&(Md.kvPairs.push({key:"server.name",value:mr}),Md.kvPairs.push({key:"server.version",value:nr}));
hr={errorMetadata:Md,stackTrace:xx,logMessage:cl}}var or=hr;if(!or)break a;$n("clientError",or)}if("ERROR"===ff||R("errors_flush_gel_always_killswitch"))b:{if(R("web_fp_via_jspb")&&(qt(!0),!R("web_fp_via_jspb_and_json")))break b;qt()}}R("suppress_error_204_logging")||Et(Rc,L)}try{vt.add(L.message)}catch(gz){}wt++}}}}
function Ft(){for(var a=t(Bt),b=a.next();!b.done;b=a.next())if(go(b.value.toLowerCase()))return!0;return!1}
function Et(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:O("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=t(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=t(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=O("SERVER_NAME");b=O("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Pm(O("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Gt(){this.register=new Map}
function Ht(a){a=t(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Mf("ABORTED")}
Gt.prototype.clear=function(){Ht(this);this.register.clear()};
var It=new Gt;var Jt=Date.now().toString();
function Kt(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Jt)for(a=1,b=0;b<Jt.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Jt.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Lt=x.ytLoggingDocDocumentNonce_;Lt||(Lt=Kt(),A("ytLoggingDocDocumentNonce_",Lt));var Mt=Lt;function Nt(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Ot(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
A("yt_logging_screen.getRootVeType",function(a){return O(Ot(void 0===a?0:a))});
function Pt(){var a=O("csn-to-ctt-auth-info");a||(a={},im("csn-to-ctt-auth-info",a));return a}
function Qt(a){a=O(Nt(void 0===a?0:a));if(!a&&!O("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
A("yt_logging_screen.getCurrentCsn",Qt);function Rt(a,b,c){var d=Pt();(c=Qt(c))&&delete d[c];b&&(d[a]=b)}
A("yt_logging_screen.getCttAuthInfo",function(a){return Pt()[a]});
A("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==O(Nt(c))||b!==O(Ot(c)))if(Rt(a,d,c),im(Nt(c),a),im(Ot(c),b),b=function(){setTimeout(function(){if(a)if(R("web_time_via_jspb")){var e=new Dl;G(e,1,Mt);G(e,2,a);var f=new Pl;ce(f,Dl,111,Ql,e);ut(f)}else $n("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Mt,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var St=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",St);function Tt(a){dm(St,arguments)}
;function Ut(){var a=sb(Vt),b;return(new Ff(function(c,d){a.onSuccess=function(e){Im(e)?c(new Wt(e)):d(new Xt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Xt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Xt("Request timed out","net.timeout",e))};
b=Pm("//googleads.g.doubleclick.net/pagead/id",a)})).pc(function(c){c instanceof Qf&&b.abort();
return Lf(c)})}
function Xt(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Xt,bb);function Wt(a){this.xhr=a}
;function Yt(){this.h=0;this.i=null}
Yt.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:Zt(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:$t(a):this};
Yt.prototype.getValue=function(){return this.i};
Yt.prototype.isRejected=function(){return 2==this.h};
Yt.prototype.$goog_Thenable=!0;function $t(a){var b=new Yt;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function Zt(a){var b=new Yt;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function au(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:zm(a)?"same-origin":"cors",credentials:zm(a)?"same-origin":"include"};b={};for(var d=t(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function bu(){return Ig()||(pd||qd)&&go("applewebkit")&&!go("version")&&(!go("safari")||go("gsa/"))||fd&&go("version/")?!0:O("EOM_VISITOR_DATA")?!1:!0}
;function cu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in nl)if(nl[d]==c.embeddedPlayerMode){b=nl[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function du(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof eu;this.isTimeout=a instanceof Xt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Qf}
v(du,bb);du.prototype.name="BiscottiError";function eu(){bb.call(this,"Biscotti ID is missing from server")}
v(eu,bb);eu.prototype.name="BiscottiMissingError";var Vt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},fu=null;function gu(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!bu())return Error("User has not consented - not fetching biscotti id.");var a=O("PLAYER_VARS",{});if("1"==qb(a))return Error("Biscotti ID is not available in private embed mode");if(cu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function bm(){var a=gu();if(void 0!==a)return Lf(a);fu||(fu=Ut().then(hu).pc(function(b){return iu(2,b)}));
return fu}
function hu(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new eu;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new eu;a=a.id;cm(a);fu=Zt(a);ju(18E5,2);return a}
function iu(a,b){b=new du(b);cm("");fu=$t(b);0<a&&ju(12E4,a-1);throw b;}
function ju(a,b){Jm(function(){Ut().then(hu,function(c){return iu(b,c)}).pc(db)},a)}
function ku(){try{var a=B("yt.ads.biscotti.getId_");return a?a():bm()}catch(b){return Lf(b)}}
;function lu(a){if("1"!=qb(O("PLAYER_VARS",{}))){a&&am();try{ku().then(function(){},function(){}),Jm(lu,18E5)}catch(b){nm(b)}}}
;function mu(){var a=wn(),b=zn(119),c=1<window.devicePixelRatio;if(document.body&&Hi(document.body,"exp-invert-logo"))if(c&&!Hi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Hi(d,"inverted-hdpi")){var e=Fi(d);Gi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Hi(document.body,"inverted-hdpi")&&Ii();if(b!=c){b="f"+(Math.floor(119/31)+1);d=An(b)||0;d=c?d|67108864:d&-67108865;0===d?delete tn[b]:(c=d.toString(16),tn[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in tn)tn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(tn[f])));var f=d.join("&");qn(b,f,63072E3,a.i,c)}}
;var nu=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function ou(){var a=void 0===a?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;wc(xc(5,a));try{var b=xm(a).theme;return nu.get(b)||null}catch(c){}return null}
;function pu(){this.h={};if(this.i=sn()){var a=Gg.get("CONSISTENCY",void 0);a&&qu(this,{encryptedTokenJarContents:a})}}
pu.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Oa.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=t(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];qu(this,a)}};
function qu(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&qn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var ru=window.location.hostname.split(".").slice(-2).join(".");function su(){var a=O("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===O("INNERTUBE_CLIENT_NAME")&&(this.h=tu(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var uu;function vu(){uu=B("yt.clientLocationService.instance");uu||(uu=new su,A("yt.clientLocationService.instance",uu));return uu}
k=su.prototype;k.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
k.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===O("INNERTUBE_CLIENT_NAME")?(this.h=tu(this))&&this.h.set("yt-location-playability-token",a,15552E3):qn("YT_CL",JSON.stringify({loctok:a}),15552E3,ru,!0))};
function tu(a){return void 0===a.h?new Rn("yt-client-location"):a.h}
k.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=tu(this))&&this.h.remove("yt-location-playability-token"):rn("YT_CL")};
k.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===O("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
k.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function wu(a,b){if(!a)return!1;var c,d=null==(c=Es(a,ml))?void 0:c.signal;if(d&&b.kb)return!!b.kb[d];var e;if((c=null==(e=Es(a,jl))?void 0:e.request)&&b.vc)return!!b.vc[c];for(var f in a)if(b.uc[f])return!0;return!1}
function xu(a,b){var c,d=null==(c=Es(a,ml))?void 0:c.signal;if(d&&b.kb&&(c=b.kb[d]))return c();var e;if((c=null==(e=Es(a,jl))?void 0:e.request)&&b.vc&&(e=b.vc[c]))return e();for(var f in a)if(b.uc[f]&&(a=b.uc[f]))return a()}
;function yu(a){return function(){return new a}}
;var zu={},Au=(zu.WEB_UNPLUGGED="^unplugged/",zu.WEB_UNPLUGGED_ONBOARDING="^unplugged/",zu.WEB_UNPLUGGED_OPS="^unplugged/",zu.WEB_UNPLUGGED_PUBLIC="^unplugged/",zu.WEB_CREATOR="^creator/",zu.WEB_KIDS="^kids/",zu.WEB_EXPERIMENTS="^experiments/",zu.WEB_MUSIC="^music/",zu.WEB_REMIX="^music/",zu.WEB_MUSIC_EMBEDDED_PLAYER="^music/",zu.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",zu);
function Bu(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Au[b];if(c){var d=new RegExp(c),e=t(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Au).forEach(function(g){var h=t(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=t(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Cu(){}
Cu.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?nn:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=O("INNERTUBE_CONTEXT");if(g){g=tb(g);R("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=O("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var l=void 0===l?!1:l;wn();var m="USER_INTERFACE_THEME_LIGHT";zn(165)?m="USER_INTERFACE_THEME_DARK":zn(174)?m="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");l=l?m:ou()||m;h.userInterfaceTheme=l;if(!f){if(l=Gn())h.connectionType=
l;R("web_log_effective_connection_type")&&(l=Hn())&&(g.client.effectiveConnectionType=l)}var p;if(R("web_log_memory_total_kbytes")&&(null==(p=x.navigator)?0:p.deviceMemory)){var r;p=null==(r=x.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*p}r=xm(x.location.href);!R("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:x.location.href},R("kevlar_woffle")&&on.h&&
(r=on.h,h.mainAppWebInfo.pwaInstallabilityStatus=!r.h&&r.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=pn(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!R("web_lr_app_quality_killswitch")&&(r=O("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=O("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:r}));
if(!R("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var y=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(na){}y=void 0}y&&(h.timeZone=y)}(y=Em())?h.experimentsToken=y:delete h.experimentsToken;y=Fm();pu.h||(pu.h=new pu);h=pu.h.h;r=[];p=0;for(var u in h)r[p++]=h[u];g.request=Object.assign({},g.request,{internalExperimentFlags:y,consistencyTokenJars:r});!R("web_prequest_context_killswitch")&&(u=O("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
u);y=wn();u=zn(58);y=y.get("gsml","");g.user=Object.assign({},g.user);u&&(g.user.enableSafetyMode=u);y&&(g.user.lockedSafetyMode=!0);R("warm_op_csn_cleanup")?e&&(f=Qt())&&(g.clientScreenNonce=f):!f&&(f=Qt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;vu().setLocationOnInnerTubeContext(g);try{var z=Am(),D=z.bid;delete z.bid;g.adSignalsInfo={params:[],bid:D};var E=t(Object.entries(z));for(var N=E.next();!N.done;N=E.next()){var P=
t(N.value),S=P.next().value,da=P.next().value;z=S;D=da;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:z,value:""+D})}}catch(na){Ct(na)}E=g}else Ct(Error("Error: No InnerTubeContext shell provided in ytconfig.")),E={};E={context:E};if(N=this.h(a)){this.i(E,N,b);var Z;b="/youtubei/v1/"+Bu(this.j());(N=null==(Z=Es(a.commandMetadata,ll))?void 0:Z.apiUrl)&&(b=N);Z=b;(b=O("INNERTUBE_HOST_OVERRIDE"))&&(Z=String(b)+String(zc(Z)));b={};b.key=O("INNERTUBE_API_KEY");R("json_condensed_response")&&(b.prettyPrint=
"false");Z=ym(Z,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:Z,ib:au(Z),Oa:E,config:a};a.config.Wb?a.config.Wb.identity=c:a.config.Wb={identity:c};return a}Ct(new In("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(Cu.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Du(){}
v(Du,Cu);Du.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",ib:au("/getDatasyncIdsEndpoint","GET"),Oa:{}}};
Du.prototype.j=function(){return[]};
Du.prototype.h=function(){};
Du.prototype.i=function(){};var Eu={},Fu=(Eu.GET_DATASYNC_IDS=yu(Du),Eu);function Gu(a){var b=Ma.apply(1,arguments);if(!Hu(a)||b.some(function(d){return!Hu(d)}))throw Error("Only objects may be merged.");
b=t(b);for(var c=b.next();!c.done;c=b.next())Iu(a,c.value);return a}
function Iu(a,b){for(var c in b)if(Hu(b[c])){if(c in a&&!Hu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Iu(a[c],b[c])}else if(Ju(b[c])){if(c in a&&!Ju(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ku(a[c],b[c])}else a[c]=b[c];return a}
function Ku(a,b){b=t(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Hu(c)?a.push(Iu({},c)):Ju(c)?a.push(Ku([],c)):a.push(c);return a}
function Hu(a){return"object"===typeof a&&!Array.isArray(a)}
function Ju(a){return"object"===typeof a&&Array.isArray(a)}
;function Lu(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},A("ytcsi."+(a||"")+"data_",b));return b}
function Mu(){var a=Lu();a.info||(a.info={});return a.info}
function Nu(a){a=Lu(a);a.metadata||(a.metadata={});return a.metadata}
function Ou(a){a=Lu(a);a.tick||(a.tick={});return a.tick}
function Pu(a){a=Lu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Qu(a){a=Pu(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Ru(a){var b=Lu(a).nonce;b||(b=Kt(),Lu(a).nonce=b);return b}
;function Su(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a),A("ytcsi.reference",{}));return a}
function Tu(a){a=a||"";var b=B("ytcsi.reference");b||(Su(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Su(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var U={},Uu=(U.auto_search="LATENCY_ACTION_AUTO_SEARCH",U.ad_to_ad="LATENCY_ACTION_AD_TO_AD",U.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",U["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",U.app_startup="LATENCY_ACTION_APP_STARTUP",U["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",U["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",U["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",U["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
U["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",U["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",U["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",U["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",U["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",U["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",U["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",U["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
U["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",U["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",U.browse="LATENCY_ACTION_BROWSE",U.cast_splash="LATENCY_ACTION_CAST_SPLASH",U.channels="LATENCY_ACTION_CHANNELS",U.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",U["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",U["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",U["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
U["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",U["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",U["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",U["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",U["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",U["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",U["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",U["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",U["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",U["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",U.chips="LATENCY_ACTION_CHIPS",U["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",U["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",U["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",U.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",U.embed="LATENCY_ACTION_EMBED",
U.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",U.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",U.explore="LATENCY_ACTION_EXPLORE",U.home="LATENCY_ACTION_HOME",U.library="LATENCY_ACTION_LIBRARY",U.live="LATENCY_ACTION_LIVE",U.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",U.onboarding="LATENCY_ACTION_ONBOARDING",U.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",U["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",U["owner.analytics"]=
"LATENCY_ACTION_CREATOR_CMS_ANALYTICS",U["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",U["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",U["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",U["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",U["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",U["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",U["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",U["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
U["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",U["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",U["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",U["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",U["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",U["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",U["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",U["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",U.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
U.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",U.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",U.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",U["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",U["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",U.prebuffer="LATENCY_ACTION_PREBUFFER",U.prefetch="LATENCY_ACTION_PREFETCH",U.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",U.profile_switcher="LATENCY_ACTION_LOGIN",U.reel_watch="LATENCY_ACTION_REEL_WATCH",
U.results="LATENCY_ACTION_RESULTS",U["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",U.search_ui="LATENCY_ACTION_SEARCH_UI",U.search_suggest="LATENCY_ACTION_SUGGEST",U.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",U.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",U.seek="LATENCY_ACTION_PLAYER_SEEK",U.settings="LATENCY_ACTION_SETTINGS",U.store="LATENCY_ACTION_STORE",U.tenx="LATENCY_ACTION_TENX",U.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",U.watch="LATENCY_ACTION_WATCH",U.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",U["watch,watch7"]="LATENCY_ACTION_WATCH",U["watch,watch7_html5"]="LATENCY_ACTION_WATCH",U["watch,watch7ad"]="LATENCY_ACTION_WATCH",U["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",U.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",U.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",U["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",U["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",U["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",U["video.copyright"]=
"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",U["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",U["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",U["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",U["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",U["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",U["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",U["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",U["video.rights_management"]=
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",U["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",U.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",U.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",U.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",U.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",U.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",U),V={},Vu=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",V.ad_cpn="adClientPlaybackNonce",
V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",V.GetLibrary_rid="requestIds",
V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",V.pnt="performanceNavigationTiming",
V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm="shellStartupDurationMs",V.br_trs=
"tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",
V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),Wu="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Xu={},Yu=(Xu.ccs="CANARY_STATE_",
Xu.mver="MEASUREMENT_VERSION_",Xu.pis="PLAYER_INITIALIZED_STATE_",Xu.yt_pt="LATENCY_PLAYER_",Xu.pa="LATENCY_ACTION_",Xu.ctop="TOP_ENTITY_TYPE_",Xu.yt_vst="VIDEO_STREAM_TYPE_",Xu),Zu="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function $u(a){return Uu[a]||"LATENCY_ACTION_UNKNOWN"}
function av(a,b,c){c=Pu(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Vu){c=Vu[a];0<=fb(Wu,c)&&(b=!!b);a in Yu&&"string"===typeof b&&(b=Yu[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Gu({},d)}0<=fb(Zu,a)||Dt(new In("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_MINI_APP_PLAY:249,LATENCY_ACTION_DMA_CONSENT_FLOW:247,LATENCY_ACTION_GEL_FETCH:248,LATENCY_ACTION_GEL_JSPB_SERIALIZE:243,
LATENCY_ACTION_GEL_COMPRESSION:215,LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE:204,LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC:203,LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,
LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,
LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN:244,
LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,
LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,
LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CONNECT_TO_SESSION:190,LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_MOBILE_LIVE_NAV_MDE:231,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_SHORTS_LOAD_PROJECT:234,LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING:229,
LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD:240,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT:239,
LATENCY_ACTION_CREATION_MODES_MODE_SWITCH:236,LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT:235,LATENCY_ACTION_SWITCH_CAMERA:246,LATENCY_ACTION_OPEN_CAMERA:245,LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME:242,LATENCY_ACTION_MEDIA_ENGINE_EXPORT:241,LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA:233,LATENCY_ACTION_PRODUCER_EXPORT_PROJECT:193,LATENCY_ACTION_PRODUCER_EDITOR:192,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL:238,
LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL:237,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,
LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT:219,LATENCY_ACTION_CREATOR_VIDEO_POLICY:217,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,
LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT:218,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_CLAIMS:216,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,
LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CMS_VIDEOS:202,LATENCY_ACTION_CREATOR_CMS_REPORTS:201,LATENCY_ACTION_CREATOR_CMS_RELEASES:226,LATENCY_ACTION_CREATOR_CMS_POLICIES:225,LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC:224,LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING:200,LATENCY_ACTION_CREATOR_CMS_LICENSES:223,LATENCY_ACTION_CREATOR_CMS_ISSUES:191,LATENCY_ACTION_CREATOR_CMS_DASHBOARD:199,
LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY:198,LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS:197,LATENCY_ACTION_CREATOR_CMS_CHANNELS:196,LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS:222,LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS:214,LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES:209,LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY:208,LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP:207,LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA:205,LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES:212,LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES:206,
LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS:221,LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS:210,LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION:213,LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS:211,LATENCY_ACTION_CREATOR_CMS_ASSETS:195,LATENCY_ACTION_CREATOR_CMS_ART_TRACKS:220,LATENCY_ACTION_CREATOR_CMS_ANALYTICS:194,LATENCY_ACTION_CREATOR_CMS_ALLOWLIST:227,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,
LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,
LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS:228,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,
LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_INLINE_TO_WATCH:232,LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH:230,
LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,LATENCY_ACTION_INFRASTRUCTURE:188,LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";
W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";
W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_MINI_APP_PLAY]="LATENCY_ACTION_MINI_APP_PLAY";W[W.LATENCY_ACTION_DMA_CONSENT_FLOW]="LATENCY_ACTION_DMA_CONSENT_FLOW";W[W.LATENCY_ACTION_GEL_FETCH]="LATENCY_ACTION_GEL_FETCH";W[W.LATENCY_ACTION_GEL_JSPB_SERIALIZE]="LATENCY_ACTION_GEL_JSPB_SERIALIZE";W[W.LATENCY_ACTION_GEL_COMPRESSION]="LATENCY_ACTION_GEL_COMPRESSION";W[W.LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE]="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE";
W[W.LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC]="LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC";W[W.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";W[W.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";W[W.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";W[W.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";
W[W.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";W[W.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";
W[W.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";W[W.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";W[W.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";W[W.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";
W[W.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";
W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";W[W.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";
W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN";
W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";
W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";
W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";
W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";
W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_CONNECT_TO_SESSION]="LATENCY_ACTION_MDX_CONNECT_TO_SESSION";
W[W.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_MOBILE_LIVE_NAV_MDE]="LATENCY_ACTION_MOBILE_LIVE_NAV_MDE";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_SHORTS_LOAD_PROJECT]="LATENCY_ACTION_SHORTS_LOAD_PROJECT";
W[W.LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING]="LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING";W[W.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";
W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";W[W.LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD]="LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";
W[W.LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT]="LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT";W[W.LATENCY_ACTION_CREATION_MODES_MODE_SWITCH]="LATENCY_ACTION_CREATION_MODES_MODE_SWITCH";W[W.LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT]="LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT";W[W.LATENCY_ACTION_SWITCH_CAMERA]="LATENCY_ACTION_SWITCH_CAMERA";W[W.LATENCY_ACTION_OPEN_CAMERA]="LATENCY_ACTION_OPEN_CAMERA";W[W.LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME]="LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME";
W[W.LATENCY_ACTION_MEDIA_ENGINE_EXPORT]="LATENCY_ACTION_MEDIA_ENGINE_EXPORT";W[W.LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA]="LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA";W[W.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT]="LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";W[W.LATENCY_ACTION_PRODUCER_EDITOR]="LATENCY_ACTION_PRODUCER_EDITOR";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
W[W.LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";
W[W.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";
W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";
W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT";W[W.LATENCY_ACTION_CREATOR_VIDEO_POLICY]="LATENCY_ACTION_CREATOR_VIDEO_POLICY";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";
W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
W[W.LATENCY_ACTION_CREATOR_VIDEO_CLAIMS]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS";W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";W[W.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
W[W.LATENCY_ACTION_CREATOR_CMS_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_REPORTS]="LATENCY_ACTION_CREATOR_CMS_REPORTS";W[W.LATENCY_ACTION_CREATOR_CMS_RELEASES]="LATENCY_ACTION_CREATOR_CMS_RELEASES";W[W.LATENCY_ACTION_CREATOR_CMS_POLICIES]="LATENCY_ACTION_CREATOR_CMS_POLICIES";W[W.LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC";W[W.LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING";
W[W.LATENCY_ACTION_CREATOR_CMS_LICENSES]="LATENCY_ACTION_CREATOR_CMS_LICENSES";W[W.LATENCY_ACTION_CREATOR_CMS_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ISSUES";W[W.LATENCY_ACTION_CREATOR_CMS_DASHBOARD]="LATENCY_ACTION_CREATOR_CMS_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY";W[W.LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_CHANNELS]="LATENCY_ACTION_CREATOR_CMS_CHANNELS";
W[W.LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP";
W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION";
W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSETS]="LATENCY_ACTION_CREATOR_CMS_ASSETS";W[W.LATENCY_ACTION_CREATOR_CMS_ART_TRACKS]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS";W[W.LATENCY_ACTION_CREATOR_CMS_ANALYTICS]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_CMS_ALLOWLIST]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST";W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";W[W.LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS]="LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";
W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";
W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";
W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";
W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_INLINE_TO_WATCH]="LATENCY_ACTION_INLINE_TO_WATCH";W[W.LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH]="LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH";W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";
W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";W[W.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";W[W.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";
W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var bv={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};bv[bv.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";bv[bv.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";bv[bv.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var cv={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};cv[cv.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
cv[cv.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";cv[cv.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";cv[cv.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";cv[cv.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";cv[cv.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";cv[cv.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";cv[cv.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var dv={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};dv[dv.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";dv[dv.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";dv[dv.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";dv[dv.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var ev={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
ev[ev.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";ev[ev.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var fv={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};fv[fv.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";fv[fv.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";fv[fv.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
fv[fv.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";fv[fv.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";fv[fv.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var gv={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};gv[gv.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";gv[gv.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";gv[gv.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";gv[gv.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var hv={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};hv[hv.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";hv[hv.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";hv[hv.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var iv={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};iv[iv.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
iv[iv.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";iv[iv.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var jv="actionVisualElement spinnerInfo cacheAttempts resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo inlineToWatchInfo mediaEngineMetadata miniAppInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo transcodingContext creationModesContext cameraMetadata producerMediaAssetMetadata".split(" ");function kv(a,b){Wp.call(this,1,arguments);this.timer=b}
v(kv,Wp);var lv=new Xp;var mv=x.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",mv);function nv(){this.h=0}
function ov(){nv.h||(nv.h=new nv);return nv.h}
nv.prototype.tick=function(a,b,c,d){pv(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},R("web_csi_via_jspb")?(d=new Ml,G(d,1,a),G(d,2,b),a=new Pl,ce(a,Ml,5,Ql,d),ut(a,c)):$n("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
nv.prototype.info=function(a,b,c){var d=Object.keys(a).join("");pv(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,$n("latencyActionInfo",a,{cttAuthInfo:c}))};
nv.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));pv(this,"info_"+d+"_"+b)||(G(a,2,b),b={cttAuthInfo:c},c=new Pl,ce(c,Jl,7,Ql,a),ut(c,b))};
nv.prototype.span=function(a,b,c){var d=Object.keys(a).join("");pv(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,$n("latencyActionSpan",a,{cttAuthInfo:c}))};
function pv(a,b){mv[b]=mv[b]||{count:0};var c=mv[b];c.count++;c.time=T();a.h||(a.h=Mn(function(){var d=T(),e;for(e in mv)mv[e]&&6E4<d-mv[e].time&&delete mv[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new In("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Dt(c)),!0):!1}
;var qv=window;function rv(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function sv(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==tv?void 0:null==(a=tv.getEntriesByType)?void 0:null==(b=a.call(tv,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=uv(e.requestStart),e.responseEnd=uv(e.responseEnd),e.redirectStart=uv(e.redirectStart),e.redirectEnd=uv(e.redirectEnd),e.domainLookupEnd=uv(e.domainLookupEnd),e.connectStart=uv(e.connectStart),e.connectEnd=
uv(e.connectEnd),e.responseStart=uv(e.responseStart),e.secureConnectionStart=uv(e.secureConnectionStart),e.domainLookupStart=uv(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=tv.timing}else a=tv.timing;return a}
function uv(a){return Math.round(vv()+a)}
function vv(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&tv.timeOrigin?Math.floor(tv.timeOrigin):tv.timing.navigationStart}
var tv=qv.performance||qv.mozPerformance||qv.msPerformance||qv.webkitPerformance||new rv;var wv=!1,xv={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Ya(tv.clearResourceTimings||tv.webkitClearResourceTimings||tv.mozClearResourceTimings||tv.msClearResourceTimings||tv.oClearResourceTimings||db,tv);function yv(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;Nu(c).loadType=e}(a=av(a,b,c))&&zv(a,c,d)}}
function zv(a,b,c){if(!R("web_csi_via_jspb")||(void 0===c?0:c))c=Tu(b||""),Gu(c.info,a),a.loadType&&(c=a.loadType,Nu(b).loadType=c),Gu(Qu(b),a),c=Ru(b),b=Lu(b).cttAuthInfo,ov().info(a,c,b);else{c=new Jl;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":G(c,1,W[a[e]]);break;case "clientActionNonce":G(c,2,a[e]);break;case "clientScreenNonce":G(c,4,a[e]);break;case "loadType":G(c,3,a[e]);break;case "isPrewarmedLaunch":G(c,92,a[e]);break;case "isFirstInstall":G(c,
55,a[e]);break;case "networkType":G(c,5,bv[a[e]]);break;case "connectionType":G(c,26,X[a[e]]);break;case "detailedConnectionType":G(c,27,Y[a[e]]);break;case "isVisible":G(c,6,a[e]);break;case "playerType":G(c,7,cv[a[e]]);break;case "clientPlaybackNonce":G(c,8,a[e]);break;case "adClientPlaybackNonce":G(c,28,a[e]);break;case "previousCpn":G(c,77,a[e]);break;case "targetCpn":G(c,76,a[e]);break;case "isMonetized":G(c,9,a[e]);break;case "isPrerollAllowed":G(c,16,a[e]);break;case "isPrerollShown":G(c,17,
a[e]);break;case "adType":G(c,12,a[e]);break;case "adTypesAllowed":G(c,36,a[e]);break;case "adNetworks":G(c,37,a[e]);break;case "previousAction":G(c,13,W[a[e]]);break;case "isRedSubscriber":G(c,14,a[e]);break;case "serverTimeMs":fe(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":G(c,20,a[e]);break;case "targetVideoId":G(c,78,a[e]);break;case "adBreakType":G(c,21,dv[a[e]]);break;case "isNavigation":G(c,25,a[e]);break;case "viewportHeight":fe(c,29,a[e]);break;case "viewportWidth":fe(c,
30,a[e]);break;case "screenHeight":fe(c,84,a[e]);break;case "screenWidth":fe(c,85,a[e]);break;case "browseId":G(c,31,a[e]);break;case "isCacheHit":G(c,32,a[e]);break;case "httpProtocol":G(c,33,a[e]);break;case "transportProtocol":G(c,34,a[e]);break;case "searchQuery":G(c,41,a[e]);break;case "isContinuation":G(c,42,a[e]);break;case "availableProcessors":fe(c,43,a[e]);break;case "sdk":G(c,44,a[e]);break;case "isLocalStream":G(c,45,a[e]);break;case "navigationRequestedSameUrl":G(c,64,a[e]);break;case "shellStartupDurationMs":fe(c,
70,a[e]);break;case "appInstallDataAgeMs":fe(c,73,a[e]);break;case "latencyActionError":G(c,71,ev[a[e]]);break;case "actionStep":fe(c,79,a[e]);break;case "jsHeapSizeLimit":G(c,80,a[e]);break;case "totalJsHeapSize":G(c,81,a[e]);break;case "usedJsHeapSize":G(c,82,a[e]);break;case "sourceVideoDurationMs":G(c,90,a[e]);break;case "videoOutputFrames":G(c,93,a[e]);break;case "isResume":G(c,104,a[e]);break;case "debugTicksExcluded":G(c,105,a[e]);break;case "abandonedPing":G(c,113,a[e]);break;case "adPrebufferedTimeSecs":fe(c,
39,a[e]);break;case "isLivestream":G(c,47,a[e]);break;case "liveStreamMode":G(c,91,fv[a[e]]);break;case "adCpn2":G(c,48,a[e]);break;case "adDaiDriftMillis":G(c,49,a[e]);break;case "videoStreamType":G(c,53,gv[a[e]]);break;case "playbackRequiresTap":G(c,56,a[e]);break;case "performanceNavigationTiming":G(c,67,a[e]);break;case "transactionType":G(c,74,hv[a[e]]);break;case "playerRotationType":G(c,101,iv[a[e]]);break;case "allowedPreroll":G(c,10,a[e]);break;case "shownPreroll":G(c,11,a[e]);break;case "getHomeRequestId":G(c,
57,a[e]);break;case "getSearchRequestId":G(c,60,a[e]);break;case "getPlayerRequestId":G(c,61,a[e]);break;case "getWatchNextRequestId":G(c,62,a[e]);break;case "getBrowseRequestId":G(c,63,a[e]);break;case "getLibraryRequestId":G(c,66,a[e]);break;case "isTransformerEnabledForFeature":G(c,106,a[e]);break;case "sourceVideoFrameCount":G(c,109,a[e]);break;default:jv.includes(f)&&nm(new In("Codegen laipb translator asked to translate message field",""+f))}}catch(g){nm(Error("Codegen laipb translator failed to set "+
f))}}Av(c,b)}}
function Av(a,b){var c=je(a,3);c&&(Nu(b).loadType=c);Tu(b||"").jspbInfo.push(a);c=Ru(b);b=Lu(b).cttAuthInfo;ov().jspbInfo(a,c,b)}
function Bv(a,b,c){if(!b&&"_"!==a[0]){var d=a;tv.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),tv.mark(d))}d=Tu(c||"");d.tick[a]=b||T();if(d.callback&&d.callback[a]){d=t(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=Pu(c);d.gelTicks&&(d.gelTicks[a]=!0);e=Ou(c);d=b||T();R("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=Ru(c);var f=Lu(c).cttAuthInfo;"_start"===a?(a=ov(),pv(a,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},R("web_csi_via_jspb")?(a=new El,
G(a,1,e),e=new Pl,ce(e,El,6,Ql,a),ut(e,b)):$n("latencyActionBaselined",{clientActionNonce:e},b))):ov().tick(a,e,b,f);Cv(c);return d}
function Dv(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Rr+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Ev(a){var b=sv(),c=vv(),d=O("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!R("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Bv("srt",b.responseStart),1!==a.prerender&&Bv("_start",c,void 0));a=Fv();0<a&&Bv("fpt",a);a=sv();a.isPerformanceNavigationTiming&&zv({performanceNavigationTiming:!0});Bv("nreqs",a.requestStart,void 0);Bv("nress",a.responseStart,void 0);Bv("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Bv("nrs",a.redirectStart,void 0),Bv("nre",a.redirectEnd,void 0));
0<a.domainLookupEnd-a.domainLookupStart&&(Bv("ndnss",a.domainLookupStart,void 0),Bv("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Bv("ntcps",a.connectStart,void 0),Bv("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=vv()&&0<a.connectEnd-a.secureConnectionStart&&(Bv("nstcps",a.secureConnectionStart,void 0),Bv("ntcpe",a.connectEnd,void 0));tv&&"getEntriesByType"in tv&&Gv()}
function Hv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);sc()&&a.setAttribute("nonce",sc());return c?(a=tv.getEntriesByName(c))&&a[0]&&(a=a[0],c=vv(),Bv("rsf_"+b,c+Math.round(a.fetchStart)),Bv("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Iv(){var a=[];if(document.querySelector&&tv&&tv.getEntriesByName)for(var b in xv)if(xv.hasOwnProperty(b)){var c=xv[b];Hv(b,c)&&a.push(c)}return a}
function Gv(){var a=window.location.protocol,b=tv.getEntriesByType("resource");b=hb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Bv("wffs",uv(b.startTime)),Bv("wffe",uv(b.responseEnd)))}
function Jv(a){var b=Kv("aft",a);if(b)return b;b=O((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Kv(b[d],a);if(e)return e}return NaN}
function Kv(a,b){if(a=Ou(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Cv(a){var b=Kv("_start",a),c=Jv(a);b&&c&&!wv&&(Zp(lv,new kv(Math.round(c-b),a)),wv=!0)}
function Lv(a,b){for(var c=t(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Lv(a[d],b[d]))return!1;return!0}
function Fv(){if(tv.getEntriesByType){var a=tv.getEntriesByType("paint");if(a=jb(a,function(b){return"first-paint"===b.name}))return uv(a.startTime)}a=tv.timing;
return a.ze?Math.max(0,a.ze):0}
;function Mv(a,b){mm(function(){Tu("").info.actionType=a;b&&im("TIMING_AFT_KEYS",b);im("TIMING_ACTION",a);if(R("web_csi_via_jspb")){var c=O("TIMING_INFO",{}),d=new Jl;c=t(Object.entries(c));for(var e=c.next();!e.done;e=c.next()){var f=t(e.value);e=f.next().value;f=f.next().value;switch(e){case "GetBrowse_rid":Ll(d,Hl(Gl(e),String(f)));break;case "GetGuide_rid":Ll(d,Hl(Gl(e),String(f)));break;case "GetHome_rid":Ll(d,Hl(Gl(e),String(f)));break;case "GetPlayer_rid":Ll(d,Hl(Gl(e),String(f)));break;case "GetSearch_rid":Ll(d,
Hl(Gl(e),String(f)));break;case "GetSettings_rid":Ll(d,Hl(Gl(e),String(f)));break;case "GetTrending_rid":Ll(d,Hl(Gl(e),String(f)));break;case "GetWatchNext_rid":Ll(d,Hl(Gl(e),String(f)));break;case "yt_red":G(d,14,!!f);break;case "yt_ad":G(d,9,!!f)}}Av(d);d=new Jl;d=G(d,25,!0);d=G(d,1,W[$u(O("TIMING_ACTION"))]);(c=O("PREVIOUS_ACTION"))&&G(d,13,W[$u(c)]);(c=O("CLIENT_PROTOCOL"))&&G(d,33,c);(c=O("CLIENT_TRANSPORT"))&&G(d,34,c);(c=Qt())&&"UNDEFINED_CSN"!==c&&G(d,4,c);c=Dv();1!==c&&-1!==c||G(d,6,!0);
c=Mu();Nu();G(d,3,"cold");Ev(c);c=Iv();if(0<c.length)for(c=t(c),e=c.next();!e.done;e=c.next())e=e.value,f=new Il,G(f,1,e),ee(d,83,Il,f);Av(d)}else{d=O("TIMING_INFO",{});for(c in d)d.hasOwnProperty(c)&&yv(c,d[c]);d={isNavigation:!0,actionType:$u(O("TIMING_ACTION"))};if(c=O("PREVIOUS_ACTION"))d.previousAction=$u(c);if(c=O("CLIENT_PROTOCOL"))d.httpProtocol=c;if(c=O("CLIENT_TRANSPORT"))d.transportProtocol=c;(c=Qt())&&"UNDEFINED_CSN"!==c&&(d.clientScreenNonce=c);c=Dv();if(1===c||-1===c)d.isVisible=!0;
Nu();Mu();d.loadType="cold";Ev(Mu());c=Iv();if(0<c.length)for(d.resourceInfo=[],c=t(c),e=c.next();!e.done;e=c.next())d.resourceInfo.push({resourceCache:e.value});zv(d)}d=Mu();c=Qu();if("cold"===Nu().loadType&&("cold"===d.yt_lt||"cold"===c.loadType)){e=Ou();f=Pu();f=f.gelTicks?f.gelTicks:f.gelTicks={};for(var g in e)if(!(g in f))if("number"===typeof e[g])Bv(g,Kv(g));else if(R("log_repeated_ytcsi_ticks"))for(var h=t(e[g]),l=h.next();!l.done;l=h.next())l=l.value,Bv(g.slice(1),l);g={};e=!1;f=t(Object.keys(d));
for(h=f.next();!h.done;h=f.next())h=h.value,(h=av(h,d[h]))&&!Lv(Qu(),h)&&(Gu(c,h),Gu(g,h),e=!0);e&&zv(g)}A("ytglobal.timingready_",!0);g=O("TIMING_ACTION");B("ytglobal.timingready_")&&g&&Nv()&&Jv()&&Cv()})()}
function Ov(a,b,c,d){mm(yv)(a,b,c,d)}
function Pv(a,b,c){return mm(Bv)(a,b,c)}
function Nv(){return mm(function(){return"_start"in Ou()})()}
function Qv(){mm(function(){var a=Ru();requestAnimationFrame(function(){setTimeout(function(){a===Ru()&&Pv("ol",void 0,void 0)},0)})})()}
var Rv=window;Rv.ytcsi&&(Rv.ytcsi.info=Ov,Rv.ytcsi.tick=Pv);var Sv="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),Tv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Uv(a,b,c,d){this.j=a;this.X=b;this.m=c;this.l=d;this.i=void 0;this.h=new Map;a.kb||(a.kb={});a.kb=Object.assign({},Fu,a.kb)}
function Vv(a,b,c,d){if(void 0!==Uv.h){if(d=Uv.h,a=[a!==d.j,b!==d.X,c!==d.m,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new In("InnerTubeTransportService is already initialized",a);
}else Uv.h=new Uv(a,b,c,d)}
function Wv(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?nn:c;var d=xu(b,a.j);if(!d)return Lf(new In("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?new Ff(function(f){var g,h,l;return w(function(m){if(1==m.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.m.We){var p=e.config,r;p=null==p?void 0:null==(r=p.Wb)?void 0:r.sessionIndex;r=mn(0,{sessionIndex:p});l=Object.assign({},Xv(h),r);return m.A(2)}return m.yield(Yv(e.config,
h),3)}2!=m.h&&(l=m.i);f(Zv(a,e,l));m.h=0})}):Lf(new In("Error: Failed to build request for command.",b))}
function $v(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Of)?0:d.Sf)&&a.l){d=t(Sv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.l[e]&&a.l[e].handleResponse(b,c)}}
function Zv(a,b,c){var d,e,f,g,h,l,m,p,r,y,u,z,D,E,N,P,S,da,Z,na,Ka,xa,ya,ua,ma,L,cf,Qc,df;return w(function(ja){switch(ja.h){case 1:ja.A(2);break;case 3:if((d=ja.i)&&!d.isExpired())return ja.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Oa)?0:f.context)){ja.A(4);break}g=b.Oa.context;if(!R("web_async_context_processor")){h=t([]);for(l=h.next();!l.done;l=h.next())m=l.value,m.Lf(g);ja.A(4);break}return ja.yield([].reduce(function(ef,mh){return ef.then(function(){return mh.Kf(g)})},
Promise.resolve()),4);
case 4:if(null==(p=a.i)||!p.Pf(b.input,b.Oa)){ja.A(7);break}return ja.yield(a.i.Hf(b.input,b.Oa),8);case 8:return r=ja.i,R("kevlar_process_local_innertube_responses_killswitch")||$v(a,r,b),ja.return(r);case 7:return(z=null==(u=b.config)?void 0:u.Ia)&&a.h.has(z)&&R("web_memoize_inflight_requests")?y=a.h.get(z):(D=JSON.stringify(b.Oa),P=null!=(N=null==(E=b.ib)?void 0:E.headers)?N:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},P,c)}),S=Object.assign({},b.ib),"POST"===b.ib.method&&(S=Object.assign({},
S,{body:D})),(null==(da=b.config)?0:da.Ge)&&Pv(b.config.Ge),Z=function(){return a.X.fetch(b.input,S,b.config)},y=Z(),z&&a.h.set(z,y)),ja.yield(y,9);
case 9:if((na=ja.i)&&"error"in na&&(null==(Ka=na)?0:null==(xa=Ka.error)?0:xa.details))for(ya=na.error.details,ua=t(ya),ma=ua.next();!ma.done;ma=ua.next())L=ma.value,(cf=L["@type"])&&-1<Tv.indexOf(cf)&&(delete L["@type"],na=L);z&&a.h.has(z)&&a.h.delete(z);(null==(Qc=b.config)?0:Qc.He)&&Pv(b.config.He);if(na||null==(df=a.i)||!df.Bf(b.input,b.Oa)){ja.A(10);break}return ja.yield(a.i.Gf(b.input,b.Oa),11);case 11:na=ja.i;case 10:return $v(a,na,b),ja.return(na||void 0)}})}
function Yv(a,b){var c,d,e,f;return w(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Wb)?void 0:d.sessionIndex;var h=g.yield;var l=Kf(mn(0,{sessionIndex:e}));return h.call(g,l,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Xv(b),f)))})}
function Xv(a){var b={"Content-Type":"application/json"};O("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=O("EOM_VISITOR_DATA"):O("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=O("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=O("LOGGED_IN",!1);"cors"!==a&&((a=O("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=O("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=O("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=O("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var aw=new ts("INNERTUBE_TRANSPORT_TOKEN");var bw=["share/get_web_player_share_panel"],cw=["feedback"],dw=["notification/modify_channel_preference"],ew=["browse/edit_playlist"],fw=["subscription/subscribe"],gw=["subscription/unsubscribe"];function hw(){}
v(hw,Cu);hw.prototype.j=function(){return fw};
hw.prototype.h=function(a){return Es(a,$l)||void 0};
hw.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(hw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function iw(){}
v(iw,Cu);iw.prototype.j=function(){return gw};
iw.prototype.h=function(a){return Es(a,Zl)||void 0};
iw.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(iw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function jw(){}
v(jw,Cu);jw.prototype.j=function(){return cw};
jw.prototype.h=function(a){return Es(a,ol)||void 0};
jw.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(jw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function kw(){}
v(kw,Cu);kw.prototype.j=function(){return dw};
kw.prototype.h=function(a){return Es(a,Yl)||void 0};
kw.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function lw(){}
v(lw,Cu);lw.prototype.j=function(){return ew};
lw.prototype.h=function(a){return Es(a,Xl)||void 0};
lw.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function mw(){}
v(mw,Cu);mw.prototype.j=function(){return bw};
mw.prototype.h=function(a){return Es(a,Wl)};
mw.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var nw=new ts("NETWORK_SLI_TOKEN");function ow(a){this.h=a}
ow.prototype.fetch=function(a,b){var c=this,d,e,f;return w(function(g){c.h&&(d=wc(xc(5,Kc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;R("wug_networking_gzip_request")&&(e=kq(b));f=new window.Request(a,e);return R("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){Dt(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){Dt(h)}))})};
ow.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Ef(),b=b.then(function(c){Dt(new In("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
ow[ss]=[new us(nw)];var pw=new ts("NETWORK_MANAGER_TOKEN");var qw;function rw(){var a=sw,b=tw,c=uw;this.l=vw;this.navigate=a;this.i=b;this.j=c;this.h=new Set}
function ww(a,b,c){if(xw(b))yw(a,b,c);else{var d=a.l(b,c);if(null==c?0:c.sc)d.sc=c.sc;0===d.type?a.navigate?zw(d.command)?Aw(a,d.command)||(b=a.navigate(d)||[],Of(b).then(function(){a.h.delete(d.command)})):Ct(Error("Error: Command handler page requests need to specify a url.")):Ct(Error("Error: Command handler navigate function was called but not set.")):1===d.type?a.i?Aw(a,d.command)||(b=a.i(d),Of(b).then(function(){a.h.delete(d.command)})):Ct(Error("Error: Command handler handle service request function was called but not set.")):
2===d.type&&(a.j?a.j(d):Ct(Error("Error: Command handler send action was called but not set.")))}}
function Aw(a,b){if(a.h.has(b))return!0;a.h.add(b);return!1}
function xw(a){var b=!!Es(a,Ck),c;a="CLIENT_SIGNAL"===(null==(c=Es(a,ml))?void 0:c.signal);return b||a}
function yw(a,b,c){var d=Es(b,Ck);if(d)var e=(null==d?void 0:d.commands)||[];else{var f;if("CLIENT_SIGNAL"===(null==(f=Es(b,ml))?void 0:f.signal)){var g;e=(null==(g=Es(b,ml))?void 0:g.actions)||[]}}if(e)for(b=t(e),e=b.next();!e.done;e=b.next()){e=e.value;try{ww(a,e,c)}catch(h){h instanceof Error&&Ct(h)}}else Ct(Error("Could not handle the meta command."))}
function zw(a){var b;return!(null==(b=Es(null==a?void 0:a.commandMetadata,ll))||!b.url)}
;function Bw(){var a,b,c;return w(function(d){if(1==d.h)return a=zs().resolve(aw),a?d.yield(Wv(a),2):(Dt(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Dt(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Cf;return d.return(c)}Dt(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Cw=x.caches,Dw;function Ew(a){var b=a.indexOf(":");return-1===b?{vd:a}:{vd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Fw(){return w(function(a){if(void 0!==Dw)return a.return(Dw);Dw=new Promise(function(b){var c;return w(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(Cw.open("test-only"),4);case 4:return d.yield(Cw.delete("test-only"),5);case 5:Ba(d,3);break;case 2:if(c=Ca(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Dw)})}
function Gw(a){var b,c,d,e,f,g,h;w(function(l){if(1==l.h)return l.yield(Fw(),2);if(3!=l.h){if(!l.i)return l.return(!1);b=[];return l.yield(Cw.keys(),3)}c=l.i;d=t(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Ew(f),h=g.datasyncId,!h||a.includes(h)||b.push(Cw.delete(f));return l.return(Promise.all(b).then(function(m){return m.some(function(p){return p})}))})}
function Hw(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.h)return h.yield(Fw(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=Kn("cache contains other");return h.yield(Cw.keys(),3)}b=h.i;c=t(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Ew(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Iw(){try{return!!self.localStorage}catch(a){return!1}}
;function Jw(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Kw(a){if(Iw()){var b=Object.keys(window.localStorage);b=t(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Jw(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Lw(){if(!Iw())return!1;var a=Kn(),b=Object.keys(window.localStorage);b=t(b);for(var c=b.next();!c.done;c=b.next())if(c=Jw(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Mw(){Bw().then(function(a){a&&(op(a),Gw(a),Kw(a))})}
function Nw(){var a=new Dr;xi.ma(function(){var b,c,d,e;return w(function(f){switch(f.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){f.A(2);break}b=Kn("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];op(g);Gw(g);Kw(g);return f.return()}c=Lw();return f.yield(Hw(),3);case 3:return d=f.i,f.yield(pp(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.sa()?Mw():a.l.add("publicytnetworkstatus-online",Mw,!0,void 0,void 0),f.h=0}})})}
;var ci=ha(["data-"]);function Ow(a){a&&(a.dataset?a.dataset[Pw("loaded")]="true":bi(a))}
function Qw(a,b){return a?a.dataset?a.dataset[Pw(b)]:a.getAttribute("data-"+b):null}
var Rw={};function Pw(a){return Rw[a]||(Rw[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Sw=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Tw=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Uw(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Sw,""),c=c.replace(Tw,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Vw(a,b,c)}
function Vw(a,b,c){c=void 0===c?null:c;var d=Ww(a),e=document.getElementById(d),f=e&&Qw(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=ls(d,b),b=""+Ta(b),Xw[b]=f),g||(e=Yw(a,d,function(){if(!Qw(e,"loaded")){Ow(e);ps(d);var h=Za(qs,d);Jm(h,0)}},c)))}
function Yw(a,b,c,d){d=void 0===d?null:d;var e=sf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);ei(e,yk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Zw(a){a=Ww(a);var b=document.getElementById(a);b&&(qs(a),b.parentNode.removeChild(b))}
function $w(a,b){a&&b&&(a=""+Ta(b),(a=Xw[a])&&ns(a))}
function Ww(a){var b=document.createElement("a");pc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+uc(a)}
var Xw={};var ax=[],bx=!1;function cx(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&bu()){var a=O("PLAYER_VARS",{});if("1"!=qb(a)&&!cu(a)){var b=function(){bx=!0;"google_ad_status"in window?im("DCLKSTAT",1):im("DCLKSTAT",2)};
try{Uw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}ax.push(xi.ma(function(){if(!(bx||"google_ad_status"in window)){try{$w("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}bx=!0;im("DCLKSTAT",3)}},5E3))}}}
function dx(){var a=Number(O("DCLKSTAT",0));return isNaN(a)?0:a}
;var ex=window,fx,gx=R("web_enable_lifecycle_monitoring")&&(null==(fx=ex.performance)?void 0:fx.measure);function hx(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Qn():d;this.j=c;this.scheduler=d;this.i=new Th;this.h=a;for(a={Za:0};a.Za<this.h.length;a={Eb:a.Eb,Za:a.Za},a.Za++)a.Eb=this.h[a.Za],c=function(e){return function(){e.Eb.Fc();b.h[e.Za].lc=!0;b.h.every(function(f){return!0===f.lc})&&b.i.resolve()}}(a),d=this.getPriority(a.Eb),d=Nn(c,d),this.h[a.Za]=Object.assign({},a.Eb,{Fc:c,
jobId:d})}
function ix(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=t(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.lc||(a.scheduler.Fa(c.jobId),Nn(c.Fc,10))}
hx.prototype.cancel=function(){for(var a=t(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.lc||this.scheduler.Fa(b.jobId),b.lc=!0;this.i.resolve()};
hx.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function jx(a){this.state=a;this.plugins=[];this.s=void 0;this.v={};gx&&window.performance.mark(this.state+"-start")}
k=jx.prototype;k.install=function(a){this.plugins.push(a);return this};
k.uninstall=function(){var a=this;Ma.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
k.transition=function(a,b){var c=this;kx(this);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(ix(this.j),this.j=void 0);lx(this,a,b);this.state=a;gx&&window.performance.mark(this.state+"-start");d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(mx(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function mx(a,b){var c=b.filter(function(e){return 10===yx(a,e)}),d=b.filter(function(e){return 10!==yx(a,e)});
return a.v.Qf?function(){var e=Ma.apply(0,arguments);return w(function(f){if(1==f.h)return f.yield(a.Ie.apply(a,[c].concat(ia(e))),2);a.Ed.apply(a,[d].concat(ia(e)));f.h=0})}:function(){var e=Ma.apply(0,arguments);
a.Je.apply(a,[c].concat(ia(e)));a.Ed.apply(a,[d].concat(ia(e)))}}
k.Je=function(a){var b=Ma.apply(1,arguments);Qn();for(var c={},d=t(a),e=d.next();!e.done;c={nb:c.nb},e=d.next())c.nb=e.value,On(function(f){return function(){zx(f.nb.name);f.nb.callback.apply(f.nb,ia(b));Ax(f.nb.name)}}(c))};
k.Ie=function(a){var b=Ma.apply(1,arguments),c,d,e,f;return w(function(g){1==g.h&&(Qn(),c={},d=t(a),e=d.next());if(3!=g.h){if(e.done)return g.A(0);c.ab=e.value;c.Cb=void 0;f=function(h){return function(){zx(h.ab.name);var l=h.ab.callback.apply(h.ab,ia(b));"function"===typeof(null==l?void 0:l.then)?h.Cb=l.then(function(){Ax(h.ab.name)}):Ax(h.ab.name)}}(c);
On(f);return c.Cb?g.yield(c.Cb,3):g.A(3)}c={ab:c.ab,Cb:c.Cb};e=d.next();return g.A(2)})};
k.Ed=function(a){var b=Ma.apply(1,arguments),c=this,d=a.map(function(e){return{Fc:function(){zx(e.name);e.callback.apply(e,ia(b));Ax(e.name)},
priority:yx(c,e)}});
d.length&&(this.j=new hx(d))};
function yx(a,b){var c,d;return null!=(d=null!=(c=a.s)?c:b.priority)?d:0}
function kx(a){if(gx){var b=a.state+"-start",c=a.state+"-end";window.performance.mark(c);window.performance.measure(a.state,b,c)}}
function zx(a){gx&&a&&window.performance.mark(a+"-start")}
function Ax(a){if(gx&&a){var b=a+"-start",c=a+"-end";window.performance.mark(c);window.performance.measure(a,b,c)}}
function lx(a,b,c){gx&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(jx.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Bx(a){jx.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.ga},{from:"document_active",to:"document_disposed",action:this.l},{from:"document_disposed_preventable",to:"document_disposed",action:this.l},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(Bx,jx);Bx.prototype.ga=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Bx.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Bx.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Bx.prototype.i=function(){this.h=new Map};function Cx(a){jx.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.l},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.l},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.l},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(Cx,jx);Cx.prototype.i=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Cx.prototype.h=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Cx.prototype.l=function(a,b){a(null==b?void 0:b.event)};
Cx.prototype.m=function(a,b){a(null==b?void 0:b.event)};function Dx(){this.j=new Bx;this.l=new Cx}
Dx.prototype.install=function(){var a=Ma.apply(0,arguments),b=this;a.forEach(function(c){b.j.install(c)});
a.forEach(function(c){b.l.install(c)})};function Ex(){Dx.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));a={};this.install((a.flush_logs={callback:this.i},a))}
v(Ex,Dx);Ex.prototype.i=function(){if(R("web_fp_via_jspb")){var a=new Cl,b=Qt();b&&G(a,1,b);b=new Pl;ce(b,Cl,380,Ql,a);ut(b);R("web_fp_via_jspb_and_json")&&$n("finalPayload",{csn:Qt()})}else $n("finalPayload",{csn:Qt()})};
Ex.prototype.h=function(){Ht(It)};function Fx(){}
function Gx(){var a=B("ytglobal.storage_");a||(a=new Fx,A("ytglobal.storage_",a));return a}
Fx.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Hx()):d.return()})};
function Hx(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
A("ytglobal.storageClass_",Fx);function Yn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=Dm("ytidb_transaction_ended_event_rate_limit_session",.2)}
Yn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ix(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=Dm("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Ix(a,b){Gx().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Jx(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Jx(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Jx(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Kx(a){this.args=void 0===a?null:a;this.returnValue=[]}
;var Lx=new Map;function Mx(a,b){if(!a)return null;a=Object.keys(a);a=t(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.toLowerCase();if(-1<d.indexOf(b,d.length-b.length))return c}return null}
;function Nx(a,b,c){var d;d||(d={bubbles:!0,cancelable:!1,composed:!0});null!==c&&void 0!==c&&(d.detail=c);b=new CustomEvent(b,d);a.dispatchEvent(b)}
;function Ox(a,b){b=new Kx(b);Nx(a,"yt-action",b);return b.returnValue}
function Px(a,b,c,d){b&&b.length&&b.forEach(function(e){var f=Mx(e,"action")||Mx(e,"command")||Mx(e,"endpoint");if(f){var g="yt"+f;var h=Lx.get(g);h?g=h:(f="yt-"+f.replace(/([A-Z])/g,"-$1").toLowerCase(),Lx.set(g,f),g=f);Es(e,kl)&&(g+="-"+Es(e,kl).signal.toLowerCase().replace(/_/g,"-"))}else g=null;g&&(R("handle_service_request_actions")&&e.commandMetadata&&e.commandMetadata.webCommandMetadata&&e.commandMetadata.webCommandMetadata.sendPost?c&&R("use_source_element_if_present_for_actions")?Qx(c,[e]):
Qx(a,[e]):Ox(a,[e,c,d]))})}
function Qx(a,b){var c=[a];b&&c.push.apply(c,b);b=Ox(a,c);return 0<b.length&&(b=b[0],Nx(a,"yt-service-request-sent",b),b&&b.ajaxPromise)?(b.ajaxPromise.then(function(d){Nx(a,"yt-service-request-completed",d)},function(d){Nx(a,"yt-service-request-error",{error:d,
params:c})},a),b.ajaxPromise):Kf()}
;function vw(a,b,c){b=void 0===b?{}:b;var d,e=null==(d=Es(a.commandMetadata,ll))?void 0:d.url;d=b.form||{};!c||d.element||d.skipDefaultElement||(b.form=b.form||{},b.form.element=c);if(e&&"/service_ajax"!==e)return{type:0,command:a,form:b.form};if(R("kevlar_service_command_check")){if(c=zs().resolve(aw),wu(a,c.j))return Object.assign({},{type:1,command:a},b)}else{var f;if(null==(f=Es(a.commandMetadata,ll))?0:f.apiUrl)return Object.assign({},{type:1,command:a},b)}return{type:2,command:a,form:b.form}}
function tw(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);if(b)return[Qx(b,[a.command,c,a.sc])]}return[]}
function uw(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);b&&Px(b,[a.command],b,c)}}
;function Rx(a,b,c){J.call(this);var d=this;c=c||O("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.targetOrigin="*";this.l=c;this.sessionId=null;this.channel="widget";this.K=!!a;this.v=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.K&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.targetOrigin=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.s||0<=fb(d.s,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.s=this.i=this.m=null;window.addEventListener("message",this.v)}
v(Rx,J);Rx.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){om(d)}}};
Rx.prototype.M=function(){window.removeEventListener("message",this.v);J.prototype.M.call(this)};function Sx(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Rx(!!O("WIDGET_ID_ENFORCE")),b=this.De.bind(this);a.m=b;a.s=null;this.h.channel="widget";if(a=O("WIDGET_ID"))this.h.sessionId=a}
k=Sx.prototype;k.De=function(a,b,c){"addEventListener"===a&&b?this.Ec(b[0],c):this.Uc(a,b,c)};
k.Uc=function(){};
k.xc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
k.Ec=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.xc(a,b)),this.j[a]=!0)};
k.addEventListener=function(){};
k.je=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ac());this.sendMessage("onReady");gb(this.i,this.Cd,this);this.i=[]};
k.Ac=function(){return null};
function Tx(a,b){a.sendMessage("infoDelivery",b)}
k.Cd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
k.sendMessage=function(a,b){this.Cd({event:a,info:void 0===b?null:b})};
k.dispose=function(){this.h=null};var Ux={},Vx=(Ux["api.invalidparam"]=2,Ux.auth=150,Ux["drm.auth"]=150,Ux["heartbeat.net"]=150,Ux["heartbeat.servererror"]=150,Ux["heartbeat.stop"]=150,Ux["html5.unsupportedads"]=5,Ux["fmt.noneavailable"]=5,Ux["fmt.decode"]=5,Ux["fmt.unplayable"]=5,Ux["html5.missingapi"]=5,Ux["html5.unsupportedlive"]=5,Ux["drm.unavailable"]=5,Ux["mrm.blocked"]=151,Ux);var Wx=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Xx(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Yx(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=t(Wx);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Zx(a,b,c,d){if(Sa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function $x(a){Sx.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Pe.bind(this));this.addEventListener("onVolumeChange",this.Qe.bind(this));this.addEventListener("onApiChange",this.Ke.bind(this));this.addEventListener("onPlaybackQualityChange",this.Me.bind(this));this.addEventListener("onPlaybackRateChange",this.Ne.bind(this));this.addEventListener("onStateChange",this.Oe.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Re.bind(this))}
v($x,Sx);k=$x.prototype;
k.Uc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Xx(a)){var d=b;if(Sa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Yx(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Yx(e);break;case "loadPlaylist":case "cuePlaylist":e=Zx(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Xx(a)&&Tx(this,this.Ac())}};
k.Ec=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Sx.prototype.Ec.call(this,a,b)};
k.xc=function(a,b){var c=this,d=Sx.prototype.xc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
k.onReady=function(){var a=this.je.bind(this);this.h.i=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?Vx[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
k.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
k.Ac=function(){if(!this.api)return null;var a=this.api.getApiInterface();kb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
k.Oe=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Tx(this,a)};
k.Me=function(a){Tx(this,{playbackQuality:a})};
k.Ne=function(a){Tx(this,{playbackRate:a})};
k.Ke=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.api.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.Qe=function(){Tx(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
k.Pe=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Tx(this,a)};
k.Re=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Tx(this,a)};
k.dispose=function(){Sx.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function ay(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.yd,this)}
v(ay,J);k=ay.prototype;k.start=function(){this.started||this.h()||(this.started=!0,this.connection.jb("RECEIVING"))};
k.jb=function(a,b){this.started&&!this.h()&&this.connection.jb(a,b)};
k.yd=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=by(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=cy(a,c))&&this.jb(a,c))}}};
k.addListener=function(a){if(!(a in this.i)){var b=this.Le.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
k.Le=function(a,b){this.started&&!this.h()&&this.connection.jb(a,this.zc(a,b))};
k.zc=function(a,b){if(null!=b)return{value:b}};
k.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
k.M=function(){var a=this.connection;a.h()||Vi(a.i,"command",this.yd,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.M.call(this)};function dy(a,b){ay.call(this,b);this.api=a;this.start()}
v(dy,ay);dy.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
dy.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function by(a,b){switch(a){case "loadVideoById":return a=Yx(b),[a];case "cueVideoById":return a=Yx(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Zx(b),[a];case "cuePlaylist":return a=Zx(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function cy(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
dy.prototype.zc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ay.prototype.zc.call(this,a,b)};
dy.prototype.M=function(){ay.prototype.M.call(this);delete this.api};function ey(a){a=void 0===a?!1:a;J.call(this);this.i=new Ui(a);ze(this,this.i)}
$a(ey,J);ey.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
ey.prototype.m=function(a,b){this.h()||this.i.bb.apply(this.i,arguments)};function fy(a,b,c){ey.call(this);this.l=a;this.j=b;this.id=c}
v(fy,ey);fy.prototype.jb=function(a,b){this.h()||this.l.jb(this.j,this.id,a,b)};
fy.prototype.M=function(){this.j=this.l=null;ey.prototype.M.call(this)};function gy(a,b,c){J.call(this);this.i=a;this.origin=c;this.j=Yr(window,"message",this.l.bind(this));this.connection=new fy(this,a,b);ze(this,this.connection)}
v(gy,J);gy.prototype.jb=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
gy.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
gy.prototype.M=function(){Zr(this.j);this.i=null;J.prototype.M.call(this)};function hy(){this.state=1;this.h=null}
k=hy.prototype;k.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=xb();d=f?f.createScript(d):d;d=new Cb(d,Bb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,Ab("From proto message. b/166824318"),e=Gb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());iy(this,d,e,a.program,b,c)}else Dt(Error("Cannot initialize botguard without program"))};
function iy(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Uw(c,function(){window[g]?jy(a,d,g,e):(a.state=3,Zw(c),Dt(new In("Unable to load Botguard","from "+c)))},f)):b?(f=sf("SCRIPT"),b instanceof Cb?(b instanceof Cb&&b.constructor===Cb?b=b.j:(Qa(b),b="type_error:SafeScript"),f.textContent=b,di(f)):f.textContent=b,f.nonce=sc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?jy(a,d,g,e):(a.state=4,Dt(new In("Unable to load Botguard from JS")))):Dt(new In("Unable to load VM; no url or JS provided"))}
function jy(a,b,c,d){a.state=5;try{var e=new Uh({program:b,ne:c,Ee:R("att_web_record_metrics")});e.Te.then(function(){a.state=6;d&&d(b)});
a.Pc(e)}catch(f){a.state=7,f instanceof Error&&Dt(f)}}
k.invoke=function(a){a=void 0===a?{}:a;return this.Sc()?this.Ld({dd:a}):null};
k.dispose=function(){this.Vc()};
k.Vc=function(){this.Pc(null);this.state=8};
k.Sc=function(){return!!this.h};
k.Ld=function(a){return this.h.Fd(a)};
k.Pc=function(a){xe(this.h);this.h=a};function ky(){var a=B("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function ly(){hy.apply(this,arguments)}
v(ly,hy);ly.prototype.Vc=function(){this.state=8};
ly.prototype.Pc=function(a){var b;null==(b=ky())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Fd.bind(a)},A("yt.abuse.playerAttLoader",b),A("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(A("yt.abuse.playerAttLoader",null),A("yt.abuse.playerAttLoaderRun",null))};
ly.prototype.Sc=function(){return!!ky()};
ly.prototype.Ld=function(a){return ky().bgvmc(a)};var my=new ly;function ny(){return my.Sc()}
function oy(a){a=void 0===a?{}:a;return my.invoke(a)}
;function py(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||sb(b);this.assets=a.assets||{};this.attrs=a.attrs||sb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
py.prototype.clone=function(){var a=new py,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Qa(c)?a[b]=sb(c):a[b]=c}return a};var qy=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function ry(a){a=a||"";if(window.spf){var b=a.match(qy);spf.style.load(a,b?b[1]:"",void 0)}else sy(a)}
function sy(a){var b=ty(a),c=document.getElementById(b),d=c&&Qw(c,"loaded");d||c&&!d||(c=uy(a,b,function(){if(!Qw(c,"loaded")){Ow(c);ps(b);var e=Za(qs,b);Jm(e,0)}}))}
function uy(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=yk(a);qc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function ty(a){var b=sf("A");pc(b,new Kb(a,Lb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+uc(a)}
;function vy(){J.call(this);this.i=[]}
v(vy,J);vy.prototype.M=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.M.call(this)};function wy(){vy.apply(this,arguments)}
v(wy,vy);function xy(a,b,c,d,e){J.call(this);var f=this;this.v=b;this.webPlayerContextConfig=d;this.Tb=e;this.ya=!1;this.api={};this.ka=this.s=null;this.V=new Ui;this.i={};this.aa=this.Da=this.elementId=this.qb=this.config=null;this.Z=!1;this.l=this.K=null;this.la={};this.Ub=["onReady"];this.lastError=null;this.Gb=NaN;this.T={};this.Vb=new wy(this);this.da=0;this.j=this.m=a;ze(this,this.V);yy(this);zy(this);ze(this,this.Vb);c?this.da=Jm(function(){f.loadNewVideoConfig(c)},0):d&&(Ay(this),By(this))}
v(xy,J);k=xy.prototype;k.getId=function(){return this.v};
k.loadNewVideoConfig=function(a){if(!this.h()){this.da&&(window.clearTimeout(this.da),this.da=0);var b=a||{};b instanceof py||(b=new py(b));this.config=b;this.setConfig(a);By(this);this.isReady()&&Cy(this)}};
function Ay(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
k.setConfig=function(a){this.qb=a;this.config=Dy(a);Ay(this);if(!this.Da){var b;this.Da=Ey(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=oi(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=oi(Number(a)||a))};
function Cy(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Fy(a){var b=!0,c=Gy(a);c&&a.config&&(a=Hy(a),b=Qw(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function By(a){if(!a.h()&&!a.Z){var b=Fy(a);if(b&&"html5"===(Gy(a)?"html5":null))a.aa="html5",a.isReady()||Iy(a);else if(Jy(a),a.aa="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Iy(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.K=function(){c=!0;var d=Ky(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Dy(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Tb);Iy(a)};
a.Z=!0;b?a.K():(Uw(Hy(a),a.K),(b=Ly(a))&&ry(b),My(a)&&!c&&A("yt.player.Application.create",null))}}}
function Gy(a){var b=rf(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Iy(a){if(!a.h()){var b=Gy(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Z=!1;if(!Ky(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Ny(a)}else a.Gb=Jm(function(){Iy(a)},50)}}
function Ny(a){yy(a);a.ya=!0;var b=Gy(a);if(b){a.s=Oy(a,b,"addEventListener");a.ka=Oy(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Oy(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.s&&a.s(g,a.i[g]);Cy(a);a.Da&&a.Da(a.api);a.V.bb("onReady",a.api)}
function Oy(a,b,c){var d=b[c];return function(){var e=Ma.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Dt(f))}}}
function yy(a){a.ya=!1;if(a.ka)for(var b in a.i)a.i.hasOwnProperty(b)&&a.ka(b,a.i[b]);for(var c in a.T)a.T.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.T={};a.s=null;a.ka=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.qb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
k.isReady=function(){return this.ya};
function zy(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){ps("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){ps("WATCH_LATER_VIDEO_REMOVED",b)})}
k.addEventListener=function(a,b){var c=this,d=Ey(this,b);d&&(0<=fb(this.Ub,a)||this.i[a]||(b=Py(this,a),this.s&&this.s(a,b)),this.V.subscribe(a,d),"onReady"===a&&this.isReady()&&Jm(function(){d(c.api)},0))};
k.removeEventListener=function(a,b){this.h()||(b=Ey(this,b))&&Vi(this.V,a,b)};
function Ey(a,b){var c=b;if("string"===typeof b){if(a.la[b])return a.la[b];c=function(){var d=Ma.apply(0,arguments),e=B(b);if(e)try{e.apply(x,d)}catch(f){Ct(f)}};
a.la[b]=c}return c?c:null}
function Py(a,b){var c="ytPlayer"+b+a.v;a.i[b]=c;x[c]=function(d){var e=Jm(function(){if(!a.h()){try{a.V.bb(b,null!=d?d:void 0)}catch(h){Dt(new In("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.T,g=String(e);g in f&&delete f[g]}},0);
pb(a.T,String(e))};
return c}
k.getPlayerType=function(){return this.aa||(Gy(this)?"html5":null)};
k.getLastError=function(){return this.lastError};
function Jy(a){a.cancel();yy(a);a.aa=null;a.config&&(a.config.loaded=!1);var b=Gy(a);b&&(Fy(a)||!My(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.K&&$w(Hy(this),this.K);window.clearTimeout(this.Gb);this.Z=!1};
k.M=function(){Jy(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Ct(b)}this.la=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(x[this.i[a]]=null);this.qb=this.config=this.api=null;delete this.m;delete this.j;J.prototype.M.call(this)};
function My(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Hy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Ly(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Ky(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===rm(c||"","&")[b]}
function Dy(a){for(var b={},c=t(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?sb(e):e}return b}
;var Qy={},Ry="player_uid_"+(1E9*Math.random()>>>0);function Sy(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?rf(c):c;var e=Ry+"_"+Ta(c),f=Qy[e];if(f&&d)return Ty(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new xy(c,e,a,b,void 0);Qy[e]=f;ps("player-added",f.api);Ae(f,function(){delete Qy[f.getId()]});
return f.api}
function Ty(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Uy=null,Vy=null,Wy=null;function Xy(){Yy()}
function Zy(){Yy()}
function Yy(){var a=Uy.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function sw(a){var b,c;if(a=null==(b=a.command)?void 0:null==(c=b.urlEndpoint)?void 0:c.url)b=window,c=Yh(a),void 0!==c&&b.open(c,void 0,void 0);return[]}
function $y(){Uy&&Uy.sendAbandonmentPing&&Uy.sendAbandonmentPing();O("PL_ATT")&&my.dispose();for(var a=xi,b=0,c=ax.length;b<c;b++)a.Fa(ax[b]);ax.length=0;Zw("//static.doubleclick.net/instream/ad_status.js");bx=!1;im("DCLKSTAT",0);ye(Wy,Vy);Uy&&(Uy.removeEventListener("onVideoDataChange",Xy),Uy.destroy())}
;function az(a,b,c){a="ST-"+uc(a).toString(36);b=b?Dc(b):"";c=c||5;bu()&&qn(a,b,c)}
;function bz(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=O("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=yc(window.location.href);g&&f.push(g);g=yc(d);if(0<=fb(f,g)||!g&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(f=document.createElement("a"),pc(f,d),d=f.href),d&&(d=zc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Qt()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
az(d,b,h)}else az(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=Fc(a,l)+m;var r=void 0===r?hi:r;a:{r=void 0===r?hi:r;for(l=0;l<r.length;++l)if(m=r[l],m instanceof fi&&m.te(a)){r=new Kb(a,Lb);break a}r=void 0}r=Yh(r||Sb);void 0!==r&&(c.href=r)}return!0}
;A("yt.setConfig",im);A("yt.config.set",im);A("yt.setMsg",Tt);A("yt.msgs.set",Tt);A("yt.logging.errors.log",Ct);
A("writeEmbed",function(){var a=O("PLAYER_CONFIG");if(!a){var b=O("PLAYER_VARS");b&&(a={args:b})}lu(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=O("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Mv("embed",["ol"]);c=O("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=xm(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Mv("watch",["pbs","pbu","pbp"]);Uy=Sy(a,c);R("embeds_enable_server_driven_watch_again_on_youtube")&&!rw.h&&(rw.h=new rw);Uy.addEventListener("onVideoDataChange",Xy);Uy.addEventListener("onReady",Zy);R("embeds_enable_server_driven_watch_again_on_youtube")&&Uy.addEventListener("innertubeCommand",function(f){ww(rw.h,f)});
a=O("POST_MESSAGE_ID","player");O("ENABLE_JS_API")?Wy=new $x(Uy):O("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Vy=new gy(window.parent,a,b),Wy=new dy(Uy,Vy.connection));cx();R("ytidb_create_logger_embed_killswitch")||Xn();a={};Ex.h||(Ex.h=new Ex);Ex.h.install((a.flush_logs={callback:function(){Ys()}},a));
Or();R("ytidb_clear_embedded_player")&&xi.ma(function(){var f,g;if(!qw){var h=zs(),l={Mc:pw,Jd:ow};h.h.set(l.Mc,l);l={uc:{feedbackEndpoint:yu(jw),modifyChannelNotificationPreferenceEndpoint:yu(kw),playlistEditEndpoint:yu(lw),subscribeEndpoint:yu(hw),unsubscribeEndpoint:yu(iw),webPlayerShareEntityServiceEndpoint:yu(mw)}};var m=vu(),p={};m&&(p.client_location=m);void 0===f&&(f=ln());void 0===g&&(g=h.resolve(pw));Vv(l,g,f,p);f={Mc:aw,Kd:Uv.h};h.h.set(f.Mc,f);qw=h.resolve(aw)}Nw()})});
var cz=mm(function(){Qv();mu()}),dz=mm(function(a){a.persisted||(Qv(),mu())}),ez=mm(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?$y():a.persisted||$y()}),fz=mm($y);
window.addEventListener?(window.addEventListener("load",cz),window.addEventListener("pageshow",dz),window.addEventListener("pagehide",ez)):window.attachEvent&&(window.attachEvent("onload",cz),window.attachEvent("onunload",fz));A("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||ny);A("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||oy);A("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||dx);
A("yt.player.exports.navigate",B("yt.player.exports.navigate")||bz);A("yt.util.activity.init",B("yt.util.activity.init")||cs);A("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||gs);A("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||ds);}).call(this);
