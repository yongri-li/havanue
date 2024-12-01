/*!
 * enquire.min.js
 */
/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
!function(e,t,n){var i=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=n(i):"function"==typeof define&&define.amd?define(function(){return t[e]=n(i)}):t[e]=n(i)}("enquire",this,function(e){"use strict";function t(e,t){var n,i=0,o=e.length;for(i;o>i&&(n=t(e[i],i),n!==!1);i++);}function n(e){return"[object Array]"===Object.prototype.toString.apply(e)}function i(e){return"function"==typeof e}function o(e){this.options=e,!e.deferSetup&&this.setup()}function r(t,n){this.query=t,this.isUnconditional=n,this.handlers=[],this.mql=e(t);var i=this;this.listener=function(e){i.mql=e,i.assess()},this.mql.addListener(this.listener)}function s(){if(!e)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!e("only all").matches}return o.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},r.prototype={addHandler:function(e){var t=new o(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var n=this.handlers;t(n,function(t,i){return t.equals(e)?(t.destroy(),!n.splice(i,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(e){e.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";t(this.handlers,function(t){t[e]()})}},s.prototype={register:function(e,o,s){var a=this.queries,l=s&&this.browserIsIncapable;return a[e]||(a[e]=new r(e,l)),i(o)&&(o={match:o}),n(o)||(o=[o]),t(o,function(t){i(t)&&(t={match:t}),a[e].addHandler(t)}),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},new s}),/*!
 * jquery.min.js
 */
/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=!!e&&"length"in e&&e.length,n=re.type(e);return"function"!==n&&!re.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function i(e,t,n){if(re.isFunction(t))return re.grep(e,function(e,i){return!!t.call(e,i,e)!==n});if(t.nodeType)return re.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(ve.test(t))return re.filter(t,e,n);t=re.filter(t,e)}return re.grep(e,function(e){return K.call(t,e)>-1!==n})}function o(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function r(e){var t={};return re.each(e.match(xe)||[],function(e,n){t[n]=!0}),t}function s(){G.removeEventListener("DOMContentLoaded",s),e.removeEventListener("load",s),re.ready()}function a(){this.expando=re.expando+a.uid++}function l(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(Ae,"-$&").toLowerCase(),n=e.getAttribute(i),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Ee.test(n)?re.parseJSON(n):n)}catch(e){}$e.set(e,t,n)}else n=void 0;return n}function u(e,t,n,i){var o,r=1,s=20,a=i?function(){return i.cur()}:function(){return re.css(e,t,"")},l=a(),u=n&&n[3]||(re.cssNumber[t]?"":"px"),c=(re.cssNumber[t]||"px"!==u&&+l)&&Ne.exec(re.css(e,t));if(c&&c[3]!==u){u=u||c[3],n=n||[],c=+l||1;do r=r||".5",c/=r,re.style(e,t,c+u);while(r!==(r=a()/l)&&1!==r&&--s)}return n&&(c=+c||+l||0,o=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=c,i.end=o)),o}function c(e,t){var n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&re.nodeName(e,t)?re.merge([e],n):n}function d(e,t){for(var n=0,i=e.length;i>n;n++)Se.set(e[n],"globalEval",!t||Se.get(t[n],"globalEval"))}function p(e,t,n,i,o){for(var r,s,a,l,u,p,f=t.createDocumentFragment(),h=[],v=0,g=e.length;g>v;v++)if(r=e[v],r||0===r)if("object"===re.type(r))re.merge(h,r.nodeType?[r]:r);else if(_e.test(r)){for(s=s||f.appendChild(t.createElement("div")),a=(qe.exec(r)||["",""])[1].toLowerCase(),l=Le[a]||Le._default,s.innerHTML=l[1]+re.htmlPrefilter(r)+l[2],p=l[0];p--;)s=s.lastChild;re.merge(h,s.childNodes),s=f.firstChild,s.textContent=""}else h.push(t.createTextNode(r));for(f.textContent="",v=0;r=h[v++];)if(i&&re.inArray(r,i)>-1)o&&o.push(r);else if(u=re.contains(r.ownerDocument,r),s=c(f.appendChild(r),"script"),u&&d(s),n)for(p=0;r=s[p++];)Pe.test(r.type||"")&&n.push(r);return f}function f(){return!0}function h(){return!1}function v(){try{return G.activeElement}catch(e){}}function g(e,t,n,i,o,r){var s,a;if("object"==typeof t){"string"!=typeof n&&(i=i||n,n=void 0);for(a in t)g(e,a,n,i,t[a],r);return e}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),o===!1)o=h;else if(!o)return e;return 1===r&&(s=o,o=function(e){return re().off(e),s.apply(this,arguments)},o.guid=s.guid||(s.guid=re.guid++)),e.each(function(){re.event.add(this,t,o,i,n)})}function m(e,t){return re.nodeName(e,"table")&&re.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function y(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function w(e){var t=Be.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){var n,i,o,r,s,a,l,u;if(1===t.nodeType){if(Se.hasData(e)&&(r=Se.access(e),s=Se.set(t,r),u=r.events)){delete s.handle,s.events={};for(o in u)for(n=0,i=u[o].length;i>n;n++)re.event.add(t,o,u[o][n])}$e.hasData(e)&&(a=$e.access(e),l=re.extend({},a),$e.set(t,l))}}function x(e,t){var n=t.nodeName.toLowerCase();"input"===n&&He.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function k(e,t,n,i){t=J.apply([],t);var o,r,s,a,l,u,d=0,f=e.length,h=f-1,v=t[0],g=re.isFunction(v);if(g||f>1&&"string"==typeof v&&!ie.checkClone&&We.test(v))return e.each(function(o){var r=e.eq(o);g&&(t[0]=v.call(this,o,r.html())),k(r,t,n,i)});if(f&&(o=p(t,e[0].ownerDocument,!1,e,i),r=o.firstChild,1===o.childNodes.length&&(o=r),r||i)){for(s=re.map(c(o,"script"),y),a=s.length;f>d;d++)l=o,d!==h&&(l=re.clone(l,!0,!0),a&&re.merge(s,c(l,"script"))),n.call(e[d],l,d);if(a)for(u=s[s.length-1].ownerDocument,re.map(s,w),d=0;a>d;d++)l=s[d],Pe.test(l.type||"")&&!Se.access(l,"globalEval")&&re.contains(u,l)&&(l.src?re._evalUrl&&re._evalUrl(l.src):re.globalEval(l.textContent.replace(Ue,"")))}return e}function T(e,t,n){for(var i,o=t?re.filter(t,e):e,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||re.cleanData(c(i)),i.parentNode&&(n&&re.contains(i.ownerDocument,i)&&d(c(i,"script")),i.parentNode.removeChild(i));return e}function C(e,t){var n=re(t.createElement(e)).appendTo(t.body),i=re.css(n[0],"display");return n.detach(),i}function S(e){var t=G,n=Ye[e];return n||(n=C(e,t),"none"!==n&&n||(Xe=(Xe||re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Xe[0].contentDocument,t.write(),t.close(),n=C(e,t),Xe.detach()),Ye[e]=n),n}function $(e,t,n){var i,o,r,s,a=e.style;return n=n||Qe(e),s=n?n.getPropertyValue(t)||n[t]:void 0,""!==s&&void 0!==s||re.contains(e.ownerDocument,e)||(s=re.style(e,t)),n&&!ie.pixelMarginRight()&&Ge.test(s)&&Ve.test(t)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r),void 0!==s?s+"":s}function E(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function A(e){if(e in it)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=nt.length;n--;)if(e=nt[n]+t,e in it)return e}function j(e,t,n){var i=Ne.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function N(e,t,n,i,o){for(var r=n===(i?"border":"content")?4:"width"===t?1:0,s=0;4>r;r+=2)"margin"===n&&(s+=re.css(e,n+De[r],!0,o)),i?("content"===n&&(s-=re.css(e,"padding"+De[r],!0,o)),"margin"!==n&&(s-=re.css(e,"border"+De[r]+"Width",!0,o))):(s+=re.css(e,"padding"+De[r],!0,o),"padding"!==n&&(s+=re.css(e,"border"+De[r]+"Width",!0,o)));return s}function D(t,n,i){var o=!0,r="width"===n?t.offsetWidth:t.offsetHeight,s=Qe(t),a="border-box"===re.css(t,"boxSizing",!1,s);if(G.msFullscreenElement&&e.top!==e&&t.getClientRects().length&&(r=Math.round(100*t.getBoundingClientRect()[n])),0>=r||null==r){if(r=$(t,n,s),(0>r||null==r)&&(r=t.style[n]),Ge.test(r))return r;o=a&&(ie.boxSizingReliable()||r===t.style[n]),r=parseFloat(r)||0}return r+N(t,n,i||(a?"border":"content"),o,s)+"px"}function O(e,t){for(var n,i,o,r=[],s=0,a=e.length;a>s;s++)i=e[s],i.style&&(r[s]=Se.get(i,"olddisplay"),n=i.style.display,t?(r[s]||"none"!==n||(i.style.display=""),""===i.style.display&&Oe(i)&&(r[s]=Se.access(i,"olddisplay",S(i.nodeName)))):(o=Oe(i),"none"===n&&o||Se.set(i,"olddisplay",o?n:re.css(i,"display"))));for(s=0;a>s;s++)i=e[s],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?r[s]||"":"none"));return e}function H(e,t,n,i,o){return new H.prototype.init(e,t,n,i,o)}function q(){return e.setTimeout(function(){ot=void 0}),ot=re.now()}function P(e,t){var n,i=0,o={height:e};for(t=t?1:0;4>i;i+=2-t)n=De[i],o["margin"+n]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function L(e,t,n){for(var i,o=(I.tweeners[t]||[]).concat(I.tweeners["*"]),r=0,s=o.length;s>r;r++)if(i=o[r].call(n,t,e))return i}function _(e,t,n){var i,o,r,s,a,l,u,c,d=this,p={},f=e.style,h=e.nodeType&&Oe(e),v=Se.get(e,"fxshow");n.queue||(a=re._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,d.always(function(){d.always(function(){a.unqueued--,re.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],u=re.css(e,"display"),c="none"===u?Se.get(e,"olddisplay")||S(e.nodeName):u,"inline"===c&&"none"===re.css(e,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",d.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}));for(i in t)if(o=t[i],st.exec(o)){if(delete t[i],r=r||"toggle"===o,o===(h?"hide":"show")){if("show"!==o||!v||void 0===v[i])continue;h=!0}p[i]=v&&v[i]||re.style(e,i)}else u=void 0;if(re.isEmptyObject(p))"inline"===("none"===u?S(e.nodeName):u)&&(f.display=u);else{v?"hidden"in v&&(h=v.hidden):v=Se.access(e,"fxshow",{}),r&&(v.hidden=!h),h?re(e).show():d.done(function(){re(e).hide()}),d.done(function(){var t;Se.remove(e,"fxshow");for(t in p)re.style(e,t,p[t])});for(i in p)s=L(h?v[i]:0,i,d),i in v||(v[i]=s.start,h&&(s.end=s.start,s.start="width"===i||"height"===i?1:0))}}function z(e,t){var n,i,o,r,s;for(n in e)if(i=re.camelCase(n),o=t[i],r=e[n],re.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),s=re.cssHooks[i],s&&"expand"in s){r=s.expand(r),delete e[i];for(n in r)n in e||(e[n]=r[n],t[n]=o)}else t[i]=o}function I(e,t,n){var i,o,r=0,s=I.prefilters.length,a=re.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var t=ot||q(),n=Math.max(0,u.startTime+u.duration-t),i=n/u.duration||0,r=1-i,s=0,l=u.tweens.length;l>s;s++)u.tweens[s].run(r);return a.notifyWith(e,[u,r,n]),1>r&&l?n:(a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:re.extend({},t),opts:re.extend(!0,{specialEasing:{},easing:re.easing._default},n),originalProperties:t,originalOptions:n,startTime:ot||q(),duration:n.duration,tweens:[],createTween:function(t,n){var i=re.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(i),i},stop:function(t){var n=0,i=t?u.tweens.length:0;if(o)return this;for(o=!0;i>n;n++)u.tweens[n].run(1);return t?(a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u,t])):a.rejectWith(e,[u,t]),this}}),c=u.props;for(z(c,u.opts.specialEasing);s>r;r++)if(i=I.prefilters[r].call(u,e,c,u.opts))return re.isFunction(i.stop)&&(re._queueHooks(u.elem,u.opts.queue).stop=re.proxy(i.stop,i)),i;return re.map(c,L,u),re.isFunction(u.opts.start)&&u.opts.start.call(e,u),re.fx.timer(re.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function F(e){return e.getAttribute&&e.getAttribute("class")||""}function M(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,o=0,r=t.toLowerCase().match(xe)||[];if(re.isFunction(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function R(e,t,n,i){function o(a){var l;return r[a]=!0,re.each(e[a]||[],function(e,a){var u=a(t,n,i);return"string"!=typeof u||s||r[u]?s?!(l=u):void 0:(t.dataTypes.unshift(u),o(u),!1)}),l}var r={},s=e===$t;return o(t.dataTypes[0])||!r["*"]&&o("*")}function W(e,t){var n,i,o=re.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n]);return i&&re.extend(!0,e,i),e}function B(e,t,n){for(var i,o,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o;break}s||(s=o)}r=r||s}return r?(r!==l[0]&&l.unshift(r),n[r]):void 0}function U(e,t,n,i){var o,r,s,a,l,u={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)u[s.toLowerCase()]=e.converters[s];for(r=c.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=c.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(s=u[l+" "+r]||u["* "+r],!s)for(o in u)if(a=o.split(" "),a[1]===r&&(s=u[l+" "+a[0]]||u["* "+a[0]])){s===!0?s=u[o]:u[o]!==!0&&(r=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}function X(e,t,n,i){var o;if(re.isArray(t))re.each(t,function(t,o){n||Nt.test(e)?i(e,o):X(e+"["+("object"==typeof o&&null!=o?t:"")+"]",o,n,i)});else if(n||"object"!==re.type(t))i(e,t);else for(o in t)X(e+"["+o+"]",t[o],n,i)}function Y(e){return re.isWindow(e)?e:9===e.nodeType&&e.defaultView}var V=[],G=e.document,Q=V.slice,J=V.concat,Z=V.push,K=V.indexOf,ee={},te=ee.toString,ne=ee.hasOwnProperty,ie={},oe="2.2.3",re=function(e,t){return new re.fn.init(e,t)},se=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ae=/^-ms-/,le=/-([\da-z])/gi,ue=function(e,t){return t.toUpperCase()};re.fn=re.prototype={jquery:oe,constructor:re,selector:"",length:0,toArray:function(){return Q.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:Q.call(this)},pushStack:function(e){var t=re.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return re.each(this,e)},map:function(e){return this.pushStack(re.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Q.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:Z,sort:V.sort,splice:V.splice},re.extend=re.fn.extend=function(){var e,t,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||re.isFunction(s)||(s={}),a===l&&(s=this,a--);l>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],i=e[t],s!==i&&(u&&i&&(re.isPlainObject(i)||(o=re.isArray(i)))?(o?(o=!1,r=n&&re.isArray(n)?n:[]):r=n&&re.isPlainObject(n)?n:{},s[t]=re.extend(u,r,i)):void 0!==i&&(s[t]=i));return s},re.extend({expando:"jQuery"+(oe+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===re.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=e&&e.toString();return!re.isArray(e)&&t-parseFloat(t)+1>=0},isPlainObject:function(e){var t;if("object"!==re.type(e)||e.nodeType||re.isWindow(e))return!1;if(e.constructor&&!ne.call(e,"constructor")&&!ne.call(e.constructor.prototype||{},"isPrototypeOf"))return!1;for(t in e);return void 0===t||ne.call(e,t)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ee[te.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=re.trim(e),e&&(1===e.indexOf("use strict")?(t=G.createElement("script"),t.text=e,G.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(ae,"ms-").replace(le,ue)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var i,o=0;if(n(e))for(i=e.length;i>o&&t.call(e[o],o,e[o])!==!1;o++);else for(o in e)if(t.call(e[o],o,e[o])===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(se,"")},makeArray:function(e,t){var i=t||[];return null!=e&&(n(Object(e))?re.merge(i,"string"==typeof e?[e]:e):Z.call(i,e)),i},inArray:function(e,t,n){return null==t?-1:K.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,o=e.length;n>i;i++)e[o++]=t[i];return e.length=o,e},grep:function(e,t,n){for(var i,o=[],r=0,s=e.length,a=!n;s>r;r++)i=!t(e[r],r),i!==a&&o.push(e[r]);return o},map:function(e,t,i){var o,r,s=0,a=[];if(n(e))for(o=e.length;o>s;s++)r=t(e[s],s,i),null!=r&&a.push(r);else for(s in e)r=t(e[s],s,i),null!=r&&a.push(r);return J.apply([],a)},guid:1,proxy:function(e,t){var n,i,o;return"string"==typeof t&&(n=e[t],t=e,e=n),re.isFunction(e)?(i=Q.call(arguments,2),o=function(){return e.apply(t||this,i.concat(Q.call(arguments)))},o.guid=e.guid=e.guid||re.guid++,o):void 0},now:Date.now,support:ie}),"function"==typeof Symbol&&(re.fn[Symbol.iterator]=V[Symbol.iterator]),re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ee["[object "+t+"]"]=t.toLowerCase()});var ce=function(e){function t(e,t,n,i){var o,r,s,a,l,u,d,f,h=t&&t.ownerDocument,v=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==v&&9!==v&&11!==v)return n;if(!i&&((t?t.ownerDocument||t:F)!==O&&D(t),t=t||O,q)){if(11!==v&&(u=me.exec(e)))if(o=u[1]){if(9===v){if(!(s=t.getElementById(o)))return n;if(s.id===o)return n.push(s),n}else if(h&&(s=h.getElementById(o))&&z(t,s)&&s.id===o)return n.push(s),n}else{if(u[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((o=u[3])&&x.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(o)),n}if(x.qsa&&!U[e+" "]&&(!P||!P.test(e))){if(1!==v)h=t,f=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(we,"\\$&"):t.setAttribute("id",a=I),d=S(e),r=d.length,l=pe.test(a)?"#"+a:"[id='"+a+"']";r--;)d[r]=l+" "+p(d[r]);f=d.join(","),h=ye.test(e)&&c(t.parentNode)||t}if(f)try{return Z.apply(n,h.querySelectorAll(f)),n}catch(e){}finally{a===I&&t.removeAttribute("id")}}}return E(e.replace(ae,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>k.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[I]=!0,e}function o(e){var t=O.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function r(e,t){for(var n=e.split("|"),i=n.length;i--;)k.attrHandle[n[i]]=t}function s(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||Y)-(~e.sourceIndex||Y);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function u(e){return i(function(t){return t=+t,i(function(n,i){for(var o,r=e([],n.length,t),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function p(e){for(var t=0,n=e.length,i="";n>t;t++)i+=e[t].value;return i}function f(e,t,n){var i=t.dir,o=n&&"parentNode"===i,r=R++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var a,l,u,c=[M,r];if(s){for(;t=t[i];)if((1===t.nodeType||o)&&e(t,n,s))return!0}else for(;t=t[i];)if(1===t.nodeType||o){if(u=t[I]||(t[I]={}),l=u[t.uniqueID]||(u[t.uniqueID]={}),(a=l[i])&&a[0]===M&&a[1]===r)return c[2]=a[2];if(l[i]=c,c[2]=e(t,n,s))return!0}}}function h(e){return e.length>1?function(t,n,i){for(var o=e.length;o--;)if(!e[o](t,n,i))return!1;return!0}:e[0]}function v(e,n,i){for(var o=0,r=n.length;r>o;o++)t(e,n[o],i);return i}function g(e,t,n,i,o){for(var r,s=[],a=0,l=e.length,u=null!=t;l>a;a++)(r=e[a])&&(n&&!n(r,i,o)||(s.push(r),u&&t.push(a)));return s}function m(e,t,n,o,r,s){return o&&!o[I]&&(o=m(o)),r&&!r[I]&&(r=m(r,s)),i(function(i,s,a,l){var u,c,d,p=[],f=[],h=s.length,m=i||v(t||"*",a.nodeType?[a]:a,[]),y=!e||!i&&t?m:g(m,p,e,a,l),w=n?r||(i?e:h||o)?[]:s:y;if(n&&n(y,w,a,l),o)for(u=g(w,f),o(u,[],a,l),c=u.length;c--;)(d=u[c])&&(w[f[c]]=!(y[f[c]]=d));if(i){if(r||e){if(r){for(u=[],c=w.length;c--;)(d=w[c])&&u.push(y[c]=d);r(null,w=[],u,l)}for(c=w.length;c--;)(d=w[c])&&(u=r?ee(i,d):p[c])>-1&&(i[u]=!(s[u]=d))}}else w=g(w===s?w.splice(h,w.length):w),r?r(null,s,w,l):Z.apply(s,w)})}function y(e){for(var t,n,i,o=e.length,r=k.relative[e[0].type],s=r||k.relative[" "],a=r?1:0,l=f(function(e){return e===t},s,!0),u=f(function(e){return ee(t,e)>-1},s,!0),c=[function(e,n,i){var o=!r&&(i||n!==A)||((t=n).nodeType?l(e,n,i):u(e,n,i));return t=null,o}];o>a;a++)if(n=k.relative[e[a].type])c=[f(h(c),n)];else{if(n=k.filter[e[a].type].apply(null,e[a].matches),n[I]){for(i=++a;o>i&&!k.relative[e[i].type];i++);return m(a>1&&h(c),a>1&&p(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ae,"$1"),n,i>a&&y(e.slice(a,i)),o>i&&y(e=e.slice(i)),o>i&&p(e))}c.push(n)}return h(c)}function w(e,n){var o=n.length>0,r=e.length>0,s=function(i,s,a,l,u){var c,d,p,f=0,h="0",v=i&&[],m=[],y=A,w=i||r&&k.find.TAG("*",u),b=M+=null==y?1:Math.random()||.1,x=w.length;for(u&&(A=s===O||s||u);h!==x&&null!=(c=w[h]);h++){if(r&&c){for(d=0,s||c.ownerDocument===O||(D(c),a=!q);p=e[d++];)if(p(c,s||O,a)){l.push(c);break}u&&(M=b)}o&&((c=!p&&c)&&f--,i&&v.push(c))}if(f+=h,o&&h!==f){for(d=0;p=n[d++];)p(v,m,s,a);if(i){if(f>0)for(;h--;)v[h]||m[h]||(m[h]=Q.call(l));m=g(m)}Z.apply(l,m),u&&!i&&m.length>0&&f+n.length>1&&t.uniqueSort(l)}return u&&(M=b,A=y),v};return o?i(s):s}var b,x,k,T,C,S,$,E,A,j,N,D,O,H,q,P,L,_,z,I="sizzle"+1*new Date,F=e.document,M=0,R=0,W=n(),B=n(),U=n(),X=function(e,t){return e===t&&(N=!0),0},Y=1<<31,V={}.hasOwnProperty,G=[],Q=G.pop,J=G.push,Z=G.push,K=G.slice,ee=function(e,t){for(var n=0,i=e.length;i>n;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",re=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ae=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=new RegExp("^"+ne+"*,"+ne+"*"),ue=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),de=new RegExp(re),pe=new RegExp("^"+ie+"$"),fe={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,we=/'|\\/g,be=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),xe=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},ke=function(){D()};try{Z.apply(G=K.call(F.childNodes),F.childNodes),G[F.childNodes.length].nodeType}catch(e){Z={apply:G.length?function(e,t){J.apply(e,K.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}x=t.support={},C=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},D=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:F;return i!==O&&9===i.nodeType&&i.documentElement?(O=i,H=O.documentElement,q=!C(O),(n=O.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",ke,!1):n.attachEvent&&n.attachEvent("onunload",ke)),x.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=o(function(e){return e.appendChild(O.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=ge.test(O.getElementsByClassName),x.getById=o(function(e){return H.appendChild(e).id=I,!O.getElementsByName||!O.getElementsByName(I).length}),x.getById?(k.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&q){var n=t.getElementById(e);return n?[n]:[]}},k.filter.ID=function(e){var t=e.replace(be,xe);return function(e){return e.getAttribute("id")===t}}):(delete k.find.ID,k.filter.ID=function(e){var t=e.replace(be,xe);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),k.find.TAG=x.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):x.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,r=t.getElementsByTagName(e);if("*"===e){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},k.find.CLASS=x.getElementsByClassName&&function(e,t){return"undefined"!=typeof t.getElementsByClassName&&q?t.getElementsByClassName(e):void 0},L=[],P=[],(x.qsa=ge.test(O.querySelectorAll))&&(o(function(e){H.appendChild(e).innerHTML="<a id='"+I+"'></a><select id='"+I+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+I+"-]").length||P.push("~="),e.querySelectorAll(":checked").length||P.push(":checked"),e.querySelectorAll("a#"+I+"+*").length||P.push(".#.+[+~]")}),o(function(e){var t=O.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(x.matchesSelector=ge.test(_=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&o(function(e){x.disconnectedMatch=_.call(e,"div"),_.call(e,"[s!='']:x"),L.push("!=",re)}),P=P.length&&new RegExp(P.join("|")),L=L.length&&new RegExp(L.join("|")),t=ge.test(H.compareDocumentPosition),z=t||ge.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},X=t?function(e,t){if(e===t)return N=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!x.sortDetached&&t.compareDocumentPosition(e)===n?e===O||e.ownerDocument===F&&z(F,e)?-1:t===O||t.ownerDocument===F&&z(F,t)?1:j?ee(j,e)-ee(j,t):0:4&n?-1:1)}:function(e,t){if(e===t)return N=!0,0;var n,i=0,o=e.parentNode,r=t.parentNode,a=[e],l=[t];if(!o||!r)return e===O?-1:t===O?1:o?-1:r?1:j?ee(j,e)-ee(j,t):0;if(o===r)return s(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;a[i]===l[i];)i++;return i?s(a[i],l[i]):a[i]===F?-1:l[i]===F?1:0},O):O},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==O&&D(e),n=n.replace(ce,"='$1']"),x.matchesSelector&&q&&!U[n+" "]&&(!L||!L.test(n))&&(!P||!P.test(n)))try{var i=_.call(e,n);if(i||x.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,O,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==O&&D(e),z(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==O&&D(e);var n=k.attrHandle[t.toLowerCase()],i=n&&V.call(k.attrHandle,t.toLowerCase())?n(e,t,!q):void 0;return void 0!==i?i:x.attributes||!q?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,o=0;if(N=!x.detectDuplicates,j=!x.sortStable&&e.slice(0),e.sort(X),N){for(;t=e[o++];)t===e[o]&&(i=n.push(o));for(;i--;)e.splice(n[i],1)}return j=null,e},T=t.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=T(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i++];)n+=T(t);return n},k=t.selectors={cacheLength:50,createPseudo:i,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(be,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=S(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,xe).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=W[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&W(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(o){var r=t.attr(o,e);return null==r?"!="===n:!n||(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&r.indexOf(i)>-1:"$="===n?i&&r.slice(-i.length)===i:"~="===n?(" "+r.replace(se," ")+" ").indexOf(i)>-1:"|="===n&&(r===i||r.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,o){var r="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===o?function(e){return!!e.parentNode}:function(t,n,l){var u,c,d,p,f,h,v=r!==s?"nextSibling":"previousSibling",g=t.parentNode,m=a&&t.nodeName.toLowerCase(),y=!l&&!a,w=!1;if(g){if(r){for(;v;){for(p=t;p=p[v];)if(a?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;h=v="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?g.firstChild:g.lastChild],s&&y){for(p=g,d=p[I]||(p[I]={}),c=d[p.uniqueID]||(d[p.uniqueID]={}),u=c[e]||[],f=u[0]===M&&u[1],w=f&&u[2],p=f&&g.childNodes[f];p=++f&&p&&p[v]||(w=f=0)||h.pop();)if(1===p.nodeType&&++w&&p===t){c[e]=[M,f,w];break}}else if(y&&(p=t,d=p[I]||(p[I]={}),c=d[p.uniqueID]||(d[p.uniqueID]={}),u=c[e]||[],f=u[0]===M&&u[1],w=f),w===!1)for(;(p=++f&&p&&p[v]||(w=f=0)||h.pop())&&((a?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++w||(y&&(d=p[I]||(p[I]={}),c=d[p.uniqueID]||(d[p.uniqueID]={}),c[e]=[M,w]),p!==t)););return w-=o,w===i||w%i===0&&w/i>=0}}},PSEUDO:function(e,n){var o,r=k.pseudos[e]||k.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return r[I]?r(n):r.length>1?(o=[e,e,"",n],k.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,o=r(e,n),s=o.length;s--;)i=ee(e,o[s]),e[i]=!(t[i]=o[s])}):function(e){return r(e,0,o)}):r}},pseudos:{not:i(function(e){var t=[],n=[],o=$(e.replace(ae,"$1"));return o[I]?i(function(e,t,n,i){for(var r,s=o(e,null,i,[]),a=e.length;a--;)(r=s[a])&&(e[a]=!(t[a]=r))}):function(e,i,r){return t[0]=e,o(t,null,r,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(be,xe),function(t){return(t.textContent||t.innerText||T(t)).indexOf(e)>-1}}),lang:i(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(be,xe).toLowerCase(),function(t){var n;do if(n=q?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===O.activeElement&&(!O.hasFocus||O.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!k.pseudos.empty(e)},header:function(e){return ve.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){
return[0>n?n+t:n]}),even:u(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var i=0>n?n+t:n;--i>=0;)e.push(i);return e}),gt:u(function(e,t,n){for(var i=0>n?n+t:n;++i<t;)e.push(i);return e})}},k.pseudos.nth=k.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})k.pseudos[b]=a(b);for(b in{submit:!0,reset:!0})k.pseudos[b]=l(b);return d.prototype=k.filters=k.pseudos,k.setFilters=new d,S=t.tokenize=function(e,n){var i,o,r,s,a,l,u,c=B[e+" "];if(c)return n?0:c.slice(0);for(a=e,l=[],u=k.preFilter;a;){i&&!(o=le.exec(a))||(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),i=!1,(o=ue.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(ae," ")}),a=a.slice(i.length));for(s in k.filter)!(o=fe[s].exec(a))||u[s]&&!(o=u[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),a=a.slice(i.length));if(!i)break}return n?a.length:a?t.error(e):B(e,l).slice(0)},$=t.compile=function(e,t){var n,i=[],o=[],r=U[e+" "];if(!r){for(t||(t=S(e)),n=t.length;n--;)r=y(t[n]),r[I]?i.push(r):o.push(r);r=U(e,w(o,i)),r.selector=e}return r},E=t.select=function(e,t,n,i){var o,r,s,a,l,u="function"==typeof e&&e,d=!i&&S(e=u.selector||e);if(n=n||[],1===d.length){if(r=d[0]=d[0].slice(0),r.length>2&&"ID"===(s=r[0]).type&&x.getById&&9===t.nodeType&&q&&k.relative[r[1].type]){if(t=(k.find.ID(s.matches[0].replace(be,xe),t)||[])[0],!t)return n;u&&(t=t.parentNode),e=e.slice(r.shift().value.length)}for(o=fe.needsContext.test(e)?0:r.length;o--&&(s=r[o],!k.relative[a=s.type]);)if((l=k.find[a])&&(i=l(s.matches[0].replace(be,xe),ye.test(r[0].type)&&c(t.parentNode)||t))){if(r.splice(o,1),e=i.length&&p(r),!e)return Z.apply(n,i),n;break}}return(u||$(e,d))(i,t,!q,n,!t||ye.test(e)&&c(t.parentNode)||t),n},x.sortStable=I.split("").sort(X).join("")===I,x.detectDuplicates=!!N,D(),x.sortDetached=o(function(e){return 1&e.compareDocumentPosition(O.createElement("div"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||r("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),x.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||r("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||r(te,function(e,t,n){var i;return n?void 0:e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(e);re.find=ce,re.expr=ce.selectors,re.expr[":"]=re.expr.pseudos,re.uniqueSort=re.unique=ce.uniqueSort,re.text=ce.getText,re.isXMLDoc=ce.isXML,re.contains=ce.contains;var de=function(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&re(e).is(n))break;i.push(e)}return i},pe=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},fe=re.expr.match.needsContext,he=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,ve=/^.[^:#\[\.,]*$/;re.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?re.find.matchesSelector(i,e)?[i]:[]:re.find.matches(e,re.grep(t,function(e){return 1===e.nodeType}))},re.fn.extend({find:function(e){var t,n=this.length,i=[],o=this;if("string"!=typeof e)return this.pushStack(re(e).filter(function(){for(t=0;n>t;t++)if(re.contains(o[t],this))return!0}));for(t=0;n>t;t++)re.find(e,o[t],i);return i=this.pushStack(n>1?re.unique(i):i),i.selector=this.selector?this.selector+" "+e:e,i},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&fe.test(e)?re(e):e||[],!1).length}});var ge,me=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ye=re.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||ge,"string"==typeof e){if(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:me.exec(e),!i||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof re?t[0]:t,re.merge(this,re.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:G,!0)),he.test(i[1])&&re.isPlainObject(t))for(i in t)re.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return o=G.getElementById(i[2]),o&&o.parentNode&&(this.length=1,this[0]=o),this.context=G,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):re.isFunction(e)?void 0!==n.ready?n.ready(e):e(re):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),re.makeArray(e,this))};ye.prototype=re.fn,ge=re(G);var we=/^(?:parents|prev(?:Until|All))/,be={children:!0,contents:!0,next:!0,prev:!0};re.fn.extend({has:function(e){var t=re(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(re.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,i=0,o=this.length,r=[],s=fe.test(e)||"string"!=typeof e?re(e,t||this.context):0;o>i;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&re.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(r.length>1?re.uniqueSort(r):r)},index:function(e){return e?"string"==typeof e?K.call(re(e),this[0]):K.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(re.uniqueSort(re.merge(this.get(),re(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),re.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return de(e,"parentNode")},parentsUntil:function(e,t,n){return de(e,"parentNode",n)},next:function(e){return o(e,"nextSibling")},prev:function(e){return o(e,"previousSibling")},nextAll:function(e){return de(e,"nextSibling")},prevAll:function(e){return de(e,"previousSibling")},nextUntil:function(e,t,n){return de(e,"nextSibling",n)},prevUntil:function(e,t,n){return de(e,"previousSibling",n)},siblings:function(e){return pe((e.parentNode||{}).firstChild,e)},children:function(e){return pe(e.firstChild)},contents:function(e){return e.contentDocument||re.merge([],e.childNodes)}},function(e,t){re.fn[e]=function(n,i){var o=re.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=re.filter(i,o)),this.length>1&&(be[e]||re.uniqueSort(o),we.test(e)&&o.reverse()),this.pushStack(o)}});var xe=/\S+/g;re.Callbacks=function(e){e="string"==typeof e?r(e):re.extend({},e);var t,n,i,o,s=[],a=[],l=-1,u=function(){for(o=e.once,i=t=!0;a.length;l=-1)for(n=a.shift();++l<s.length;)s[l].apply(n[0],n[1])===!1&&e.stopOnFalse&&(l=s.length,n=!1);e.memory||(n=!1),t=!1,o&&(s=n?[]:"")},c={add:function(){return s&&(n&&!t&&(l=s.length-1,a.push(n)),function t(n){re.each(n,function(n,i){re.isFunction(i)?e.unique&&c.has(i)||s.push(i):i&&i.length&&"string"!==re.type(i)&&t(i)})}(arguments),n&&!t&&u()),this},remove:function(){return re.each(arguments,function(e,t){for(var n;(n=re.inArray(t,s,n))>-1;)s.splice(n,1),l>=n&&l--}),this},has:function(e){return e?re.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return o=a=[],s=n="",this},disabled:function(){return!s},lock:function(){return o=a=[],n||(s=n=""),this},locked:function(){return!!o},fireWith:function(e,n){return o||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},re.extend({Deferred:function(e){var t=[["resolve","done",re.Callbacks("once memory"),"resolved"],["reject","fail",re.Callbacks("once memory"),"rejected"],["notify","progress",re.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var e=arguments;return re.Deferred(function(n){re.each(t,function(t,r){var s=re.isFunction(e[t])&&e[t];o[r[1]](function(){var e=s&&s.apply(this,arguments);e&&re.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this===i?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?re.extend(e,i):i}},o={};return i.pipe=i.then,re.each(t,function(e,r){var s=r[2],a=r[3];i[r[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),o[r[0]]=function(){return o[r[0]+"With"](this===o?i:this,arguments),this},o[r[0]+"With"]=s.fireWith}),i.promise(o),e&&e.call(o,o),o},when:function(e){var t,n,i,o=0,r=Q.call(arguments),s=r.length,a=1!==s||e&&re.isFunction(e.promise)?s:0,l=1===a?e:re.Deferred(),u=function(e,n,i){return function(o){n[e]=this,i[e]=arguments.length>1?Q.call(arguments):o,i===t?l.notifyWith(n,i):--a||l.resolveWith(n,i)}};if(s>1)for(t=new Array(s),n=new Array(s),i=new Array(s);s>o;o++)r[o]&&re.isFunction(r[o].promise)?r[o].promise().progress(u(o,n,t)).done(u(o,i,r)).fail(l.reject):--a;return a||l.resolveWith(i,r),l.promise()}});var ke;re.fn.ready=function(e){return re.ready.promise().done(e),this},re.extend({isReady:!1,readyWait:1,holdReady:function(e){e?re.readyWait++:re.ready(!0)},ready:function(e){(e===!0?--re.readyWait:re.isReady)||(re.isReady=!0,e!==!0&&--re.readyWait>0||(ke.resolveWith(G,[re]),re.fn.triggerHandler&&(re(G).triggerHandler("ready"),re(G).off("ready"))))}}),re.ready.promise=function(t){return ke||(ke=re.Deferred(),"complete"===G.readyState||"loading"!==G.readyState&&!G.documentElement.doScroll?e.setTimeout(re.ready):(G.addEventListener("DOMContentLoaded",s),e.addEventListener("load",s))),ke.promise(t)},re.ready.promise();var Te=function(e,t,n,i,o,r,s){var a=0,l=e.length,u=null==n;if("object"===re.type(n)){o=!0;for(a in n)Te(e,t,a,n[a],!0,r,s)}else if(void 0!==i&&(o=!0,re.isFunction(i)||(s=!0),u&&(s?(t.call(e,i),t=null):(u=t,t=function(e,t,n){return u.call(re(e),n)})),t))for(;l>a;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return o?e:u?t.call(e):l?t(e[0],n):r},Ce=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};a.uid=1,a.prototype={register:function(e,t){var n=t||{};return e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,writable:!0,configurable:!0}),e[this.expando]},cache:function(e){if(!Ce(e))return{};var t=e[this.expando];return t||(t={},Ce(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,o=this.cache(e);if("string"==typeof t)o[t]=n;else for(i in t)o[i]=t[i];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][t]},access:function(e,t,n){var i;return void 0===t||t&&"string"==typeof t&&void 0===n?(i=this.get(e,t),void 0!==i?i:this.get(e,re.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i,o,r=e[this.expando];if(void 0!==r){if(void 0===t)this.register(e);else{re.isArray(t)?i=t.concat(t.map(re.camelCase)):(o=re.camelCase(t),t in r?i=[t,o]:(i=o,i=i in r?[i]:i.match(xe)||[])),n=i.length;for(;n--;)delete r[i[n]]}(void 0===t||re.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!re.isEmptyObject(t)}};var Se=new a,$e=new a,Ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ae=/[A-Z]/g;re.extend({hasData:function(e){return $e.hasData(e)||Se.hasData(e)},data:function(e,t,n){return $e.access(e,t,n)},removeData:function(e,t){$e.remove(e,t)},_data:function(e,t,n){return Se.access(e,t,n)},_removeData:function(e,t){Se.remove(e,t)}}),re.fn.extend({data:function(e,t){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===e){if(this.length&&(o=$e.get(r),1===r.nodeType&&!Se.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=re.camelCase(i.slice(5)),l(r,i,o[i])));Se.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof e?this.each(function(){$e.set(this,e)}):Te(this,function(t){var n,i;if(r&&void 0===t){if(n=$e.get(r,e)||$e.get(r,e.replace(Ae,"-$&").toLowerCase()),void 0!==n)return n;if(i=re.camelCase(e),n=$e.get(r,i),void 0!==n)return n;if(n=l(r,i,void 0),void 0!==n)return n}else i=re.camelCase(e),this.each(function(){var n=$e.get(this,i);$e.set(this,i,t),e.indexOf("-")>-1&&void 0!==n&&$e.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){$e.remove(this,e)})}}),re.extend({queue:function(e,t,n){var i;return e?(t=(t||"fx")+"queue",i=Se.get(e,t),n&&(!i||re.isArray(n)?i=Se.access(e,t,re.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=re.queue(e,t),i=n.length,o=n.shift(),r=re._queueHooks(e,t),s=function(){re.dequeue(e,t)};"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,s,r)),!i&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Se.get(e,n)||Se.access(e,n,{empty:re.Callbacks("once memory").add(function(){Se.remove(e,[t+"queue",n])})})}}),re.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?re.queue(this[0],e):void 0===t?this:this.each(function(){var n=re.queue(this,e,t);re._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&re.dequeue(this,e)})},dequeue:function(e){return this.each(function(){re.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,o=re.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=Se.get(r[s],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(t)}});var je=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ne=new RegExp("^(?:([+-])=|)("+je+")([a-z%]*)$","i"),De=["Top","Right","Bottom","Left"],Oe=function(e,t){return e=t||e,"none"===re.css(e,"display")||!re.contains(e.ownerDocument,e)},He=/^(?:checkbox|radio)$/i,qe=/<([\w:-]+)/,Pe=/^$|\/(?:java|ecma)script/i,Le={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Le.optgroup=Le.option,Le.tbody=Le.tfoot=Le.colgroup=Le.caption=Le.thead,Le.th=Le.td;var _e=/<|&#?\w+;/;!function(){var e=G.createDocumentFragment(),t=e.appendChild(G.createElement("div")),n=G.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),ie.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",ie.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var ze=/^key/,Ie=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Fe=/^([^.]*)(?:\.(.+)|)/;re.event={global:{},add:function(e,t,n,i,o){var r,s,a,l,u,c,d,p,f,h,v,g=Se.get(e);if(g)for(n.handler&&(r=n,n=r.handler,o=r.selector),n.guid||(n.guid=re.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(t){return"undefined"!=typeof re&&re.event.triggered!==t.type?re.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(xe)||[""],u=t.length;u--;)a=Fe.exec(t[u])||[],f=v=a[1],h=(a[2]||"").split(".").sort(),f&&(d=re.event.special[f]||{},f=(o?d.delegateType:d.bindType)||f,d=re.event.special[f]||{},c=re.extend({type:f,origType:v,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&re.expr.match.needsContext.test(o),namespace:h.join(".")},r),(p=l[f])||(p=l[f]=[],p.delegateCount=0,d.setup&&d.setup.call(e,i,h,s)!==!1||e.addEventListener&&e.addEventListener(f,s)),d.add&&(d.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),o?p.splice(p.delegateCount++,0,c):p.push(c),re.event.global[f]=!0)},remove:function(e,t,n,i,o){var r,s,a,l,u,c,d,p,f,h,v,g=Se.hasData(e)&&Se.get(e);if(g&&(l=g.events)){for(t=(t||"").match(xe)||[""],u=t.length;u--;)if(a=Fe.exec(t[u])||[],f=v=a[1],h=(a[2]||"").split(".").sort(),f){for(d=re.event.special[f]||{},f=(i?d.delegateType:d.bindType)||f,p=l[f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=p.length;r--;)c=p[r],!o&&v!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(p.splice(r,1),c.selector&&p.delegateCount--,d.remove&&d.remove.call(e,c));s&&!p.length&&(d.teardown&&d.teardown.call(e,h,g.handle)!==!1||re.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)re.event.remove(e,f+t[u],n,i,!0);re.isEmptyObject(l)&&Se.remove(e,"handle events")}},dispatch:function(e){e=re.event.fix(e);var t,n,i,o,r,s=[],a=Q.call(arguments),l=(Se.get(this,"events")||{})[e.type]||[],u=re.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,e)!==!1){for(s=re.event.handlers.call(this,e,l),t=0;(o=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(r.namespace)||(e.handleObj=r,e.data=r.data,i=((re.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,a),void 0!==i&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,o,r,s=[],a=t.delegateCount,l=e.target;if(a&&l.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(i=[],n=0;a>n;n++)r=t[n],o=r.selector+" ",void 0===i[o]&&(i[o]=r.needsContext?re(o,this).index(l)>-1:re.find(o,this,null,[l]).length),i[o]&&i.push(r);i.length&&s.push({elem:l,handlers:i})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,o,r=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||G,i=n.documentElement,o=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),e.which||void 0===r||(e.which=1&r?1:2&r?3:4&r?2:0),e}},fix:function(e){if(e[re.expando])return e;var t,n,i,o=e.type,r=e,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=Ie.test(o)?this.mouseHooks:ze.test(o)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,e=new re.Event(r),t=i.length;t--;)n=i[t],e[n]=r[n];return e.target||(e.target=G),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==v()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===v()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&re.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return re.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},re.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},re.Event=function(e,t){return this instanceof re.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?f:h):this.type=e,t&&re.extend(this,t),this.timeStamp=e&&e.timeStamp||re.now(),void(this[re.expando]=!0)):new re.Event(e,t)},re.Event.prototype={constructor:re.Event,isDefaultPrevented:h,isPropagationStopped:h,isImmediatePropagationStopped:h,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=f,e&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=f,e&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=f,e&&e.stopImmediatePropagation(),this.stopPropagation()}},re.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){re.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,o=e.relatedTarget,r=e.handleObj;return o&&(o===i||re.contains(i,o))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),re.fn.extend({on:function(e,t,n,i){return g(this,e,t,n,i)},one:function(e,t,n,i){return g(this,e,t,n,i,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,re(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,t,e[o]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=h),this.each(function(){re.event.remove(this,e,n,t)})}});var Me=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Re=/<script|<style|<link/i,We=/checked\s*(?:[^=]|=\s*.checked.)/i,Be=/^true\/(.*)/,Ue=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;re.extend({htmlPrefilter:function(e){return e.replace(Me,"<$1></$2>")},clone:function(e,t,n){var i,o,r,s,a=e.cloneNode(!0),l=re.contains(e.ownerDocument,e);if(!(ie.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||re.isXMLDoc(e)))for(s=c(a),r=c(e),i=0,o=r.length;o>i;i++)x(r[i],s[i]);if(t)if(n)for(r=r||c(e),s=s||c(a),i=0,o=r.length;o>i;i++)b(r[i],s[i]);else b(e,a);return s=c(a,"script"),s.length>0&&d(s,!l&&c(e,"script")),a},cleanData:function(e){for(var t,n,i,o=re.event.special,r=0;void 0!==(n=e[r]);r++)if(Ce(n)){if(t=n[Se.expando]){if(t.events)for(i in t.events)o[i]?re.event.remove(n,i):re.removeEvent(n,i,t.handle);n[Se.expando]=void 0}n[$e.expando]&&(n[$e.expando]=void 0)}}}),re.fn.extend({domManip:k,detach:function(e){return T(this,e,!0)},remove:function(e){return T(this,e)},text:function(e){return Te(this,function(e){return void 0===e?re.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return k(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=m(this,e);t.appendChild(e)}})},prepend:function(){return k(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=m(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return k(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return k(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(re.cleanData(c(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return re.clone(this,e,t)})},html:function(e){return Te(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Re.test(e)&&!Le[(qe.exec(e)||["",""])[1].toLowerCase()]){e=re.htmlPrefilter(e);try{for(;i>n;n++)t=this[n]||{},1===t.nodeType&&(re.cleanData(c(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return k(this,arguments,function(t){var n=this.parentNode;re.inArray(this,e)<0&&(re.cleanData(c(this)),n&&n.replaceChild(t,this))},e)}}),re.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){re.fn[e]=function(e){for(var n,i=[],o=re(e),r=o.length-1,s=0;r>=s;s++)n=s===r?this:this.clone(!0),re(o[s])[t](n),Z.apply(i,n.get());return this.pushStack(i)}});var Xe,Ye={HTML:"block",BODY:"block"},Ve=/^margin/,Ge=new RegExp("^("+je+")(?!px)[a-z%]+$","i"),Qe=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Je=function(e,t,n,i){var o,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];o=n.apply(e,i||[]);for(r in t)e.style[r]=s[r];return o},Ze=G.documentElement;!function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",Ze.appendChild(s);var t=e.getComputedStyle(a);n="1%"!==t.top,r="2px"===t.marginLeft,i="4px"===t.width,a.style.marginRight="50%",o="4px"===t.marginRight,Ze.removeChild(s)}var n,i,o,r,s=G.createElement("div"),a=G.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",ie.clearCloneStyle="content-box"===a.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(a),re.extend(ie,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==i&&t(),i},pixelMarginRight:function(){return null==i&&t(),o},reliableMarginLeft:function(){return null==i&&t(),r},reliableMarginRight:function(){var t,n=a.appendChild(G.createElement("div"));return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",Ze.appendChild(s),t=!parseFloat(e.getComputedStyle(n).marginRight),Ze.removeChild(s),a.removeChild(n),t}}))}();var Ke=/^(none|table(?!-c[ea]).+)/,et={position:"absolute",visibility:"hidden",display:"block"},tt={letterSpacing:"0",fontWeight:"400"},nt=["Webkit","O","Moz","ms"],it=G.createElement("div").style;re.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=$(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,s,a=re.camelCase(t),l=e.style;return t=re.cssProps[a]||(re.cssProps[a]=A(a)||a),s=re.cssHooks[t]||re.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:l[t]:(r=typeof n,"string"===r&&(o=Ne.exec(n))&&o[1]&&(n=u(e,t,o),r="number"),void(null!=n&&n===n&&("number"===r&&(n+=o&&o[3]||(re.cssNumber[a]?"":"px")),ie.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l[t]=n))))}},css:function(e,t,n,i){var o,r,s,a=re.camelCase(t);return t=re.cssProps[a]||(re.cssProps[a]=A(a)||a),s=re.cssHooks[t]||re.cssHooks[a],s&&"get"in s&&(o=s.get(e,!0,n)),void 0===o&&(o=$(e,t,i)),"normal"===o&&t in tt&&(o=tt[t]),""===n||n?(r=parseFloat(o),n===!0||isFinite(r)?r||0:o):o}}),re.each(["height","width"],function(e,t){re.cssHooks[t]={get:function(e,n,i){return n?Ke.test(re.css(e,"display"))&&0===e.offsetWidth?Je(e,et,function(){return D(e,t,i)}):D(e,t,i):void 0},set:function(e,n,i){var o,r=i&&Qe(e),s=i&&N(e,t,i,"border-box"===re.css(e,"boxSizing",!1,r),r);return s&&(o=Ne.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=re.css(e,t)),j(e,n,s)}}}),re.cssHooks.marginLeft=E(ie.reliableMarginLeft,function(e,t){return t?(parseFloat($(e,"marginLeft"))||e.getBoundingClientRect().left-Je(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px":void 0}),re.cssHooks.marginRight=E(ie.reliableMarginRight,function(e,t){return t?Je(e,{display:"inline-block"},$,[e,"marginRight"]):void 0}),re.each({margin:"",padding:"",border:"Width"},function(e,t){re.cssHooks[e+t]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];4>i;i++)o[e+De[i]+t]=r[i]||r[i-2]||r[0];return o}},Ve.test(e)||(re.cssHooks[e+t].set=j)}),re.fn.extend({css:function(e,t){return Te(this,function(e,t,n){var i,o,r={},s=0;if(re.isArray(t)){for(i=Qe(e),o=t.length;o>s;s++)r[t[s]]=re.css(e,t[s],!1,i);return r}return void 0!==n?re.style(e,t,n):re.css(e,t)},e,t,arguments.length>1)},show:function(){return O(this,!0)},hide:function(){return O(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Oe(this)?re(this).show():re(this).hide()})}}),re.Tween=H,H.prototype={constructor:H,init:function(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||re.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(re.cssNumber[n]?"":"px")},cur:function(){var e=H.propHooks[this.prop];return e&&e.get?e.get(this):H.propHooks._default.get(this)},run:function(e){var t,n=H.propHooks[this.prop];return this.options.duration?this.pos=t=re.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):H.propHooks._default.set(this),this}},H.prototype.init.prototype=H.prototype,H.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=re.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){re.fx.step[e.prop]?re.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[re.cssProps[e.prop]]&&!re.cssHooks[e.prop]?e.elem[e.prop]=e.now:re.style(e.elem,e.prop,e.now+e.unit)}}},H.propHooks.scrollTop=H.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},re.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},re.fx=H.prototype.init,re.fx.step={};var ot,rt,st=/^(?:toggle|show|hide)$/,at=/queueHooks$/;re.Animation=re.extend(I,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return u(n.elem,e,Ne.exec(t),n),n}]},tweener:function(e,t){re.isFunction(e)?(t=e,e=["*"]):e=e.match(xe);for(var n,i=0,o=e.length;o>i;i++)n=e[i],I.tweeners[n]=I.tweeners[n]||[],I.tweeners[n].unshift(t)},prefilters:[_],prefilter:function(e,t){t?I.prefilters.unshift(e):I.prefilters.push(e)}}),re.speed=function(e,t,n){var i=e&&"object"==typeof e?re.extend({},e):{complete:n||!n&&t||re.isFunction(e)&&e,duration:e,easing:n&&t||t&&!re.isFunction(t)&&t};return i.duration=re.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in re.fx.speeds?re.fx.speeds[i.duration]:re.fx.speeds._default,null!=i.queue&&i.queue!==!0||(i.queue="fx"),i.old=i.complete,i.complete=function(){re.isFunction(i.old)&&i.old.call(this),i.queue&&re.dequeue(this,i.queue)},i},re.fn.extend({fadeTo:function(e,t,n,i){return this.filter(Oe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var o=re.isEmptyObject(e),r=re.speed(t,n,i),s=function(){var t=I(this,re.extend({},e),r);(o||Se.get(this,"finish"))&&t.stop(!0)};return s.finish=s,o||r.queue===!1?this.each(s):this.queue(r.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",r=re.timers,s=Se.get(this);if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&at.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=e&&r[o].queue!==e||(r[o].anim.stop(n),t=!1,r.splice(o,1));!t&&n||re.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Se.get(this),i=n[e+"queue"],o=n[e+"queueHooks"],r=re.timers,s=i?i.length:0;for(n.finish=!0,re.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1));for(t=0;s>t;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),re.each(["toggle","show","hide"],function(e,t){var n=re.fn[t];re.fn[t]=function(e,i,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(P(t,!0),e,i,o)}}),re.each({slideDown:P("show"),slideUp:P("hide"),slideToggle:P("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){re.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),re.timers=[],re.fx.tick=function(){var e,t=0,n=re.timers;for(ot=re.now();t<n.length;t++)e=n[t],
e()||n[t]!==e||n.splice(t--,1);n.length||re.fx.stop(),ot=void 0},re.fx.timer=function(e){re.timers.push(e),e()?re.fx.start():re.timers.pop()},re.fx.interval=13,re.fx.start=function(){rt||(rt=e.setInterval(re.fx.tick,re.fx.interval))},re.fx.stop=function(){e.clearInterval(rt),rt=null},re.fx.speeds={slow:600,fast:200,_default:400},re.fn.delay=function(t,n){return t=re.fx?re.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,i){var o=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(o)}})},function(){var e=G.createElement("input"),t=G.createElement("select"),n=t.appendChild(G.createElement("option"));e.type="checkbox",ie.checkOn=""!==e.value,ie.optSelected=n.selected,t.disabled=!0,ie.optDisabled=!n.disabled,e=G.createElement("input"),e.value="t",e.type="radio",ie.radioValue="t"===e.value}();var lt,ut=re.expr.attrHandle;re.fn.extend({attr:function(e,t){return Te(this,re.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){re.removeAttr(this,e)})}}),re.extend({attr:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return"undefined"==typeof e.getAttribute?re.prop(e,t,n):(1===r&&re.isXMLDoc(e)||(t=t.toLowerCase(),o=re.attrHooks[t]||(re.expr.match.bool.test(t)?lt:void 0)),void 0!==n?null===n?void re.removeAttr(e,t):o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(i=o.get(e,t))?i:(i=re.find.attr(e,t),null==i?void 0:i))},attrHooks:{type:{set:function(e,t){if(!ie.radioValue&&"radio"===t&&re.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i,o=0,r=t&&t.match(xe);if(r&&1===e.nodeType)for(;n=r[o++];)i=re.propFix[n]||n,re.expr.match.bool.test(n)&&(e[i]=!1),e.removeAttribute(n)}}),lt={set:function(e,t,n){return t===!1?re.removeAttr(e,n):e.setAttribute(n,n),n}},re.each(re.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ut[t]||re.find.attr;ut[t]=function(e,t,i){var o,r;return i||(r=ut[t],ut[t]=o,o=null!=n(e,t,i)?t.toLowerCase():null,ut[t]=r),o}});var ct=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;re.fn.extend({prop:function(e,t){return Te(this,re.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[re.propFix[e]||e]})}}),re.extend({prop:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&re.isXMLDoc(e)||(t=re.propFix[t]||t,o=re.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=re.find.attr(e,"tabindex");return t?parseInt(t,10):ct.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),ie.optSelected||(re.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),re.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){re.propFix[this.toLowerCase()]=this});var pt=/[\t\r\n\f]/g;re.fn.extend({addClass:function(e){var t,n,i,o,r,s,a,l=0;if(re.isFunction(e))return this.each(function(t){re(this).addClass(e.call(this,t,F(this)))});if("string"==typeof e&&e)for(t=e.match(xe)||[];n=this[l++];)if(o=F(n),i=1===n.nodeType&&(" "+o+" ").replace(pt," ")){for(s=0;r=t[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");a=re.trim(i),o!==a&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,i,o,r,s,a,l=0;if(re.isFunction(e))return this.each(function(t){re(this).removeClass(e.call(this,t,F(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(xe)||[];n=this[l++];)if(o=F(n),i=1===n.nodeType&&(" "+o+" ").replace(pt," ")){for(s=0;r=t[s++];)for(;i.indexOf(" "+r+" ")>-1;)i=i.replace(" "+r+" "," ");a=re.trim(i),o!==a&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):re.isFunction(e)?this.each(function(n){re(this).toggleClass(e.call(this,n,F(this),t),t)}):this.each(function(){var t,i,o,r;if("string"===n)for(i=0,o=re(this),r=e.match(xe)||[];t=r[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||(t=F(this),t&&Se.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Se.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+F(n)+" ").replace(pt," ").indexOf(t)>-1)return!0;return!1}});var ft=/\r/g,ht=/[\x20\t\r\n\f]+/g;re.fn.extend({val:function(e){var t,n,i,o=this[0];return arguments.length?(i=re.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,re(this).val()):e,null==o?o="":"number"==typeof o?o+="":re.isArray(o)&&(o=re.map(o,function(e){return null==e?"":e+""})),t=re.valHooks[this.type]||re.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))})):o?(t=re.valHooks[o.type]||re.valHooks[o.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(ft,""):null==n?"":n)):void 0}}),re.extend({valHooks:{option:{get:function(e){var t=re.find.attr(e,"value");return null!=t?t:re.trim(re.text(e)).replace(ht," ")}},select:{get:function(e){for(var t,n,i=e.options,o=e.selectedIndex,r="select-one"===e.type||0>o,s=r?null:[],a=r?o+1:i.length,l=0>o?a:r?o:0;a>l;l++)if(n=i[l],(n.selected||l===o)&&(ie.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!re.nodeName(n.parentNode,"optgroup"))){if(t=re(n).val(),r)return t;s.push(t)}return s},set:function(e,t){for(var n,i,o=e.options,r=re.makeArray(t),s=o.length;s--;)i=o[s],(i.selected=re.inArray(re.valHooks.option.get(i),r)>-1)&&(n=!0);return n||(e.selectedIndex=-1),r}}}}),re.each(["radio","checkbox"],function(){re.valHooks[this]={set:function(e,t){return re.isArray(t)?e.checked=re.inArray(re(e).val(),t)>-1:void 0}},ie.checkOn||(re.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var vt=/^(?:focusinfocus|focusoutblur)$/;re.extend(re.event,{trigger:function(t,n,i,o){var r,s,a,l,u,c,d,p=[i||G],f=ne.call(t,"type")?t.type:t,h=ne.call(t,"namespace")?t.namespace.split("."):[];if(s=a=i=i||G,3!==i.nodeType&&8!==i.nodeType&&!vt.test(f+re.event.triggered)&&(f.indexOf(".")>-1&&(h=f.split("."),f=h.shift(),h.sort()),u=f.indexOf(":")<0&&"on"+f,t=t[re.expando]?t:new re.Event(f,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:re.makeArray(n,[t]),d=re.event.special[f]||{},o||!d.trigger||d.trigger.apply(i,n)!==!1)){if(!o&&!d.noBubble&&!re.isWindow(i)){for(l=d.delegateType||f,vt.test(l+f)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s;a===(i.ownerDocument||G)&&p.push(a.defaultView||a.parentWindow||e)}for(r=0;(s=p[r++])&&!t.isPropagationStopped();)t.type=r>1?l:d.bindType||f,c=(Se.get(s,"events")||{})[t.type]&&Se.get(s,"handle"),c&&c.apply(s,n),c=u&&s[u],c&&c.apply&&Ce(s)&&(t.result=c.apply(s,n),t.result===!1&&t.preventDefault());return t.type=f,o||t.isDefaultPrevented()||d._default&&d._default.apply(p.pop(),n)!==!1||!Ce(i)||u&&re.isFunction(i[f])&&!re.isWindow(i)&&(a=i[u],a&&(i[u]=null),re.event.triggered=f,i[f](),re.event.triggered=void 0,a&&(i[u]=a)),t.result}},simulate:function(e,t,n){var i=re.extend(new re.Event,n,{type:e,isSimulated:!0});re.event.trigger(i,null,t),i.isDefaultPrevented()&&n.preventDefault()}}),re.fn.extend({trigger:function(e,t){return this.each(function(){re.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?re.event.trigger(e,t,n,!0):void 0}}),re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){re.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),re.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ie.focusin="onfocusin"in e,ie.focusin||re.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){re.event.simulate(t,e.target,re.event.fix(e))};re.event.special[t]={setup:function(){var i=this.ownerDocument||this,o=Se.access(i,t);o||i.addEventListener(e,n,!0),Se.access(i,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=Se.access(i,t)-1;o?Se.access(i,t,o):(i.removeEventListener(e,n,!0),Se.remove(i,t))}}});var gt=e.location,mt=re.now(),yt=/\?/;re.parseJSON=function(e){return JSON.parse(e+"")},re.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||re.error("Invalid XML: "+t),n};var wt=/#.*$/,bt=/([?&])_=[^&]*/,xt=/^(.*?):[ \t]*([^\r\n]*)$/gm,kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Tt=/^(?:GET|HEAD)$/,Ct=/^\/\//,St={},$t={},Et="*/".concat("*"),At=G.createElement("a");At.href=gt.href,re.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:gt.href,type:"GET",isLocal:kt.test(gt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Et,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":re.parseJSON,"text xml":re.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?W(W(e,re.ajaxSettings),t):W(re.ajaxSettings,e)},ajaxPrefilter:M(St),ajaxTransport:M($t),ajax:function(t,n){function i(t,n,i,a){var u,d,y,w,x,T=n;2!==b&&(b=2,l&&e.clearTimeout(l),o=void 0,s=a||"",k.readyState=t>0?4:0,u=t>=200&&300>t||304===t,i&&(w=B(p,k,i)),w=U(p,w,k,u),u?(p.ifModified&&(x=k.getResponseHeader("Last-Modified"),x&&(re.lastModified[r]=x),x=k.getResponseHeader("etag"),x&&(re.etag[r]=x)),204===t||"HEAD"===p.type?T="nocontent":304===t?T="notmodified":(T=w.state,d=w.data,y=w.error,u=!y)):(y=T,!t&&T||(T="error",0>t&&(t=0))),k.status=t,k.statusText=(n||T)+"",u?v.resolveWith(f,[d,T,k]):v.rejectWith(f,[k,T,y]),k.statusCode(m),m=void 0,c&&h.trigger(u?"ajaxSuccess":"ajaxError",[k,p,u?d:y]),g.fireWith(f,[k,T]),c&&(h.trigger("ajaxComplete",[k,p]),--re.active||re.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var o,r,s,a,l,u,c,d,p=re.ajaxSetup({},n),f=p.context||p,h=p.context&&(f.nodeType||f.jquery)?re(f):re.event,v=re.Deferred(),g=re.Callbacks("once memory"),m=p.statusCode||{},y={},w={},b=0,x="canceled",k={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!a)for(a={};t=xt.exec(s);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=w[n]=w[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else k.always(e[k.status]);return this},abort:function(e){var t=e||x;return o&&o.abort(t),i(0,t),this}};if(v.promise(k).complete=g.add,k.success=k.done,k.error=k.fail,p.url=((t||p.url||gt.href)+"").replace(wt,"").replace(Ct,gt.protocol+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=re.trim(p.dataType||"*").toLowerCase().match(xe)||[""],null==p.crossDomain){u=G.createElement("a");try{u.href=p.url,u.href=u.href,p.crossDomain=At.protocol+"//"+At.host!=u.protocol+"//"+u.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=re.param(p.data,p.traditional)),R(St,p,n,k),2===b)return k;c=re.event&&p.global,c&&0===re.active++&&re.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Tt.test(p.type),r=p.url,p.hasContent||(p.data&&(r=p.url+=(yt.test(r)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=bt.test(r)?r.replace(bt,"$1_="+mt++):r+(yt.test(r)?"&":"?")+"_="+mt++)),p.ifModified&&(re.lastModified[r]&&k.setRequestHeader("If-Modified-Since",re.lastModified[r]),re.etag[r]&&k.setRequestHeader("If-None-Match",re.etag[r])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&k.setRequestHeader("Content-Type",p.contentType),k.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Et+"; q=0.01":""):p.accepts["*"]);for(d in p.headers)k.setRequestHeader(d,p.headers[d]);if(p.beforeSend&&(p.beforeSend.call(f,k,p)===!1||2===b))return k.abort();x="abort";for(d in{success:1,error:1,complete:1})k[d](p[d]);if(o=R($t,p,n,k)){if(k.readyState=1,c&&h.trigger("ajaxSend",[k,p]),2===b)return k;p.async&&p.timeout>0&&(l=e.setTimeout(function(){k.abort("timeout")},p.timeout));try{b=1,o.send(y,i)}catch(e){if(!(2>b))throw e;i(-1,e)}}else i(-1,"No Transport");return k},getJSON:function(e,t,n){return re.get(e,t,n,"json")},getScript:function(e,t){return re.get(e,void 0,t,"script")}}),re.each(["get","post"],function(e,t){re[t]=function(e,n,i,o){return re.isFunction(n)&&(o=o||i,i=n,n=void 0),re.ajax(re.extend({url:e,type:t,dataType:o,data:n,success:i},re.isPlainObject(e)&&e))}}),re._evalUrl=function(e){return re.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},re.fn.extend({wrapAll:function(e){var t;return re.isFunction(e)?this.each(function(t){re(this).wrapAll(e.call(this,t))}):(this[0]&&(t=re(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return re.isFunction(e)?this.each(function(t){re(this).wrapInner(e.call(this,t))}):this.each(function(){var t=re(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=re.isFunction(e);return this.each(function(n){re(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){re.nodeName(this,"body")||re(this).replaceWith(this.childNodes)}).end()}}),re.expr.filters.hidden=function(e){return!re.expr.filters.visible(e)},re.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0};var jt=/%20/g,Nt=/\[\]$/,Dt=/\r?\n/g,Ot=/^(?:submit|button|image|reset|file)$/i,Ht=/^(?:input|select|textarea|keygen)/i;re.param=function(e,t){var n,i=[],o=function(e,t){t=re.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=re.ajaxSettings&&re.ajaxSettings.traditional),re.isArray(e)||e.jquery&&!re.isPlainObject(e))re.each(e,function(){o(this.name,this.value)});else for(n in e)X(n,e[n],t,o);return i.join("&").replace(jt,"+")},re.fn.extend({serialize:function(){return re.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=re.prop(this,"elements");return e?re.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!re(this).is(":disabled")&&Ht.test(this.nodeName)&&!Ot.test(e)&&(this.checked||!He.test(e))}).map(function(e,t){var n=re(this).val();return null==n?null:re.isArray(n)?re.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}}),re.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var qt={0:200,1223:204},Pt=re.ajaxSettings.xhr();ie.cors=!!Pt&&"withCredentials"in Pt,ie.ajax=Pt=!!Pt,re.ajaxTransport(function(t){var n,i;return ie.cors||Pt&&!t.crossDomain?{send:function(o,r){var s,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest");for(s in o)a.setRequestHeader(s,o[s]);n=function(e){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(qt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),i=a.onerror=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){n&&i()})},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}:void 0}),re.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return re.globalEval(e),e}}}),re.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),re.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=re("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),G.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Lt=[],_t=/(=)\?(?=&|$)|\?\?/;re.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Lt.pop()||re.expando+"_"+mt++;return this[e]=!0,e}}),re.ajaxPrefilter("json jsonp",function(t,n,i){var o,r,s,a=t.jsonp!==!1&&(_t.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&_t.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(o=t.jsonpCallback=re.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(_t,"$1"+o):t.jsonp!==!1&&(t.url+=(yt.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return s||re.error(o+" was not called"),s[0]},t.dataTypes[0]="json",r=e[o],e[o]=function(){s=arguments},i.always(function(){void 0===r?re(e).removeProp(o):e[o]=r,t[o]&&(t.jsonpCallback=n.jsonpCallback,Lt.push(o)),s&&re.isFunction(r)&&r(s[0]),s=r=void 0}),"script"):void 0}),re.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||G;var i=he.exec(e),o=!n&&[];return i?[t.createElement(i[1])]:(i=p([e],t,o),o&&o.length&&re(o).remove(),re.merge([],i.childNodes))};var zt=re.fn.load;re.fn.load=function(e,t,n){if("string"!=typeof e&&zt)return zt.apply(this,arguments);var i,o,r,s=this,a=e.indexOf(" ");return a>-1&&(i=re.trim(e.slice(a)),e=e.slice(0,a)),re.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),s.length>0&&re.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){r=arguments,s.html(i?re("<div>").append(re.parseHTML(e)).find(i):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,r||[e.responseText,t,e])})}),this},re.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){re.fn[t]=function(e){return this.on(t,e)}}),re.expr.filters.animated=function(e){return re.grep(re.timers,function(t){return e===t.elem}).length},re.offset={setOffset:function(e,t,n){var i,o,r,s,a,l,u,c=re.css(e,"position"),d=re(e),p={};"static"===c&&(e.style.position="relative"),a=d.offset(),r=re.css(e,"top"),l=re.css(e,"left"),u=("absolute"===c||"fixed"===c)&&(r+l).indexOf("auto")>-1,u?(i=d.position(),s=i.top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),re.isFunction(t)&&(t=t.call(e,n,re.extend({},a))),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+o),"using"in t?t.using.call(e,p):d.css(p)}},re.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){re.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},r=i&&i.ownerDocument;return r?(t=r.documentElement,re.contains(t,i)?(o=i.getBoundingClientRect(),n=Y(r),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o):void 0},position:function(){if(this[0]){var e,t,n=this[0],i={top:0,left:0};return"fixed"===re.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),re.nodeName(e[0],"html")||(i=e.offset()),i.top+=re.css(e[0],"borderTopWidth",!0),i.left+=re.css(e[0],"borderLeftWidth",!0)),{top:t.top-i.top-re.css(n,"marginTop",!0),left:t.left-i.left-re.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===re.css(e,"position");)e=e.offsetParent;return e||Ze})}}),re.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;re.fn[e]=function(i){return Te(this,function(e,i,o){var r=Y(e);return void 0===o?r?r[t]:e[i]:void(r?r.scrollTo(n?r.pageXOffset:o,n?o:r.pageYOffset):e[i]=o)},e,i,arguments.length)}}),re.each(["top","left"],function(e,t){re.cssHooks[t]=E(ie.pixelPosition,function(e,n){return n?(n=$(e,t),Ge.test(n)?re(e).position()[t]+"px":n):void 0})}),re.each({Height:"height",Width:"width"},function(e,t){re.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){re.fn[i]=function(i,o){var r=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||o===!0?"margin":"border");return Te(this,function(t,n,i){var o;return re.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?re.css(t,n,s):re.style(t,n,i,s)},t,r?i:void 0,r,null)}})}),re.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},size:function(){return this.length}}),re.fn.andSelf=re.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return re});var It=e.jQuery,Ft=e.$;return re.noConflict=function(t){return e.$===re&&(e.$=Ft),t&&e.jQuery===re&&(e.jQuery=It),re},t||(e.jQuery=e.$=re),re}),/*!
 * jquery.zoom.min.js
 */
/*!
  Zoom 1.7.15
  license: MIT
  http://www.jacklmoore.com/zoom
*/
function(e){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};e.zoom=function(t,n,i,o){var r,s,a,l,u,c,d,p=e(t),f=p.css("position"),h=e(n);return p.css("position",/(absolute|fixed)/.test(f)?f:"relative"),p.css("overflow","hidden"),i.style.width=i.style.height="",e(i).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:i.width*o,height:i.height*o,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){s=p.outerWidth(),r=p.outerHeight(),n===p[0]?(l=s,a=r):(l=h.outerWidth(),a=h.outerHeight()),u=(i.width-s)/l,c=(i.height-r)/a,d=h.offset()},move:function(e){var t=e.pageX-d.left,n=e.pageY-d.top;n=Math.max(Math.min(n,a),0),t=Math.max(Math.min(t,l),0),i.style.left=t*-u+"px",i.style.top=n*-c+"px"}}},e.fn.zoom=function(n){return this.each(function(){var i,o=e.extend({},t,n||{}),r=o.target||this,s=this,a=e(s),l=e(r),u=document.createElement("img"),c=e(u),d="mousemove.zoom",p=!1,f=!1;(o.url||(i=a.find("img"),i[0]&&(o.url=i.data("src")||i.attr("src")),o.url))&&(!function(){var e=l.css("position"),t=l.css("overflow");a.one("zoom.destroy",function(){a.off(".zoom"),l.css("position",e),l.css("overflow",t),c.remove()})}(),u.onload=function(){function t(t){i.init(),i.move(t),c.stop().fadeTo(e.support.opacity?o.duration:0,1,!!e.isFunction(o.onZoomIn)&&o.onZoomIn.call(u))}function n(){c.stop().fadeTo(o.duration,0,!!e.isFunction(o.onZoomOut)&&o.onZoomOut.call(u))}var i=e.zoom(r,s,u,o.magnify);"grab"===o.on?a.on("mousedown.zoom",function(o){1===o.which&&(e(document).one("mouseup.zoom",function(){n(),e(document).off(d,i.move)}),t(o),e(document).on(d,i.move),o.preventDefault())}):"click"===o.on?a.on("click.zoom",function(o){return p?void 0:(p=!0,t(o),e(document).on(d,i.move),e(document).one("click.zoom",function(){n(),p=!1,e(document).off(d,i.move)}),!1)}):"toggle"===o.on?a.on("click.zoom",function(e){p?n():t(e),p=!p}):"mouseover"===o.on&&(i.init(),a.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(d,i.move)),o.touch&&a.on("touchstart.zoom",function(e){e.preventDefault(),f?(f=!1,n()):(f=!0,t(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(e){e.preventDefault(),i.move(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])}).on("touchend.zoom",function(e){e.preventDefault(),f&&(f=!1,n())}),e.isFunction(o.callback)&&o.callback.call(u)},u.src=o.url)})},e.fn.zoom.defaults=t}(window.jQuery),function(){function e(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}function t(e,t,n){for(var i=-1,o=e.length;++i<o;){var r=e[i],s=t(r);if(null!=s&&(a===le?s===s:n(s,a)))var a=s,l=r}return l}function n(e,t,n){var i;return n(e,function(e,n,o){return t(e,n,o)?(i=e,!1):void 0}),i}function i(e,t,n,i,o){return o(e,function(e,o,r){n=i?(i=!1,e):t(n,e,o,r)}),n}function o(e,t){return T(t,function(t){return e[t]})}function r(e){return e&&e.Object===Object?e:null}function s(e){return fe[e]}function a(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function l(e,t){return e="number"==typeof e||pe.test(e)?+e:-1,e>-1&&0==e%1&&(null==t?9007199254740991:t)>e}function u(e){if(Z(e)&&!Re(e)){if(e instanceof c)return e;if(Ce.call(e,"__wrapped__")){var t=new c(e.__wrapped__,e.__chain__);return t.__actions__=A(e.__actions__),t}}return new c(e)}function c(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t}function d(e,t,n,i){var o;return(o=e===le)||(o=Te[n],o=(e===o||e!==e&&o!==o)&&!Ce.call(i,n)),o?t:e}function p(e){return J(e)?Ne(e):{}}function f(e,t,n){if("function"!=typeof e)throw new TypeError("Expected a function");return setTimeout(function(){e.apply(le,n)},t)}function h(e,t){var n=!0;return Pe(e,function(e,i,o){return n=!!t(e,i,o)}),n}function v(e,t){var n=[];return Pe(e,function(e,i,o){t(e,i,o)&&n.push(e)}),n}function g(t,n,i,o){o||(o=[]);for(var r=-1,s=t.length;++r<s;){var a=t[r];n>0&&Z(a)&&V(a)&&(i||Re(a)||Y(a))?n>1?g(a,n-1,i,o):e(o,a):i||(o[o.length]=a)}return o}function m(e,t){return e&&Le(e,t,ie)}function y(e,t){return v(t,function(t){return G(e[t])})}function w(e,t,n,i,o){return e===t||(null==e||null==t||!J(e)&&!Z(t)?e!==e&&t!==t:b(e,t,w,n,i,o))}function b(e,t,n,i,o,r){var s=Re(e),l=Re(t),u="[object Array]",c="[object Array]";s||(u=$e.call(e),"[object Arguments]"==u&&(u="[object Object]")),l||(c=$e.call(t),"[object Arguments]"==c&&(c="[object Object]"));var d="[object Object]"==u&&!a(e),l="[object Object]"==c&&!a(t);return!(c=u==c)||s||d?2&o||(u=d&&Ce.call(e,"__wrapped__"),l=l&&Ce.call(t,"__wrapped__"),!u&&!l)?!!c&&(r||(r=[]),(u=M(r,function(t){return t[0]===e}))&&u[1]?u[1]==t:(r.push([e,t]),t=(s?P:_)(e,t,n,i,o,r),r.pop(),t)):n(u?e.value():e,l?t.value():t,i,o,r):L(e,t,u)}function x(e){var t=typeof e;return"function"==t?e:null==e?se:("object"==t?C:$)(e)}function k(e){e=null==e?e:Object(e);var t,n=[];for(t in e)n.push(t);return n}function T(e,t){var n=-1,i=V(e)?Array(e.length):[];return Pe(e,function(e,o,r){i[++n]=t(e,o,r)}),i}function C(e){var t=ie(e);return function(n){var i=t.length;if(null==n)return!i;for(n=Object(n);i--;){var o=t[i];if(!(o in n&&w(e[o],n[o],le,3)))return!1}return!0}}function S(e,t){return e=Object(e),W(t,function(t,n){return n in e&&(t[n]=e[n]),t},{})}function $(e){return function(t){return null==t?le:t[e]}}function E(e,t,n){var i=-1,o=e.length;for(0>t&&(t=-t>o?0:o+t),n=n>o?o:n,0>n&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n}function A(e){return E(e,0,e.length)}function j(e,t){var n;return Pe(e,function(e,i,o){return n=t(e,i,o),!n}),!!n}function N(t,n){return W(n,function(t,n){return n.func.apply(n.thisArg,e([t],n.args))},t)}function D(e,t,n,i){n||(n={});for(var o=-1,r=t.length;++o<r;){var s=t[o],a=i?i(n[s],e[s],s,n,e):e[s],l=n,u=l[s];Ce.call(l,s)&&(u===a||u!==u&&a!==a)&&(a!==le||s in l)||(l[s]=a)}return n}function O(e){return U(function(t,n){var i=-1,o=n.length,r=o>1?n[o-1]:le,r="function"==typeof r?(o--,r):le;for(t=Object(t);++i<o;){var s=n[i];s&&e(t,s,i,r)}return t})}function H(e){return function(){var t=arguments,n=p(e.prototype),t=e.apply(n,t);return J(t)?t:n}}function q(e,t,n){function i(){for(var r=-1,s=arguments.length,a=-1,l=n.length,u=Array(l+s),c=this&&this!==xe&&this instanceof i?o:e;++a<l;)u[a]=n[a];for(;s--;)u[a++]=arguments[++r];return c.apply(t,u)}if("function"!=typeof e)throw new TypeError("Expected a function");var o=H(e);return i}function P(e,t,n,i,o,r){var s=-1,a=1&o,l=e.length,u=t.length;if(l!=u&&!(2&o&&u>l))return!1;for(u=!0;++s<l;){var c=e[s],d=t[s];if(void 0!==le){u=!1;break}if(a){if(!j(t,function(e){return c===e||n(c,e,i,o,r)})){u=!1;break}}else if(c!==d&&!n(c,d,i,o,r)){u=!1;break}}return u}function L(e,t,n){switch(n){case"[object Boolean]":case"[object Date]":return+e==+t;case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object Number]":return e!=+e?t!=+t:e==+t;case"[object RegExp]":case"[object String]":return e==t+""}return!1}function _(e,t,n,i,o,r){var s=2&o,a=ie(e),l=a.length,u=ie(t).length;if(l!=u&&!s)return!1;for(var c=l;c--;){var d=a[c];if(!(s?d in t:Ce.call(t,d)))return!1}for(u=!0;++c<l;){var d=a[c],p=e[d],f=t[d];if(void 0!==le||p!==f&&!n(p,f,i,o,r)){u=!1;break}s||(s="constructor"==d)}return u&&!s&&(n=e.constructor,i=t.constructor,n!=i&&"constructor"in e&&"constructor"in t&&!("function"==typeof n&&n instanceof n&&"function"==typeof i&&i instanceof i)&&(u=!1)),u}function z(e){var t=e?e.length:le;if(Q(t)&&(Re(e)||ee(e)||Y(e))){e=String;for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);t=i}else t=null;return t}function I(e){var t=e&&e.constructor,t=G(t)&&t.prototype||Te;return e===t}function F(e){return e?e[0]:le}function M(e,t){return n(e,x(t),Pe)}function R(e,t){return Pe(e,"function"==typeof t?t:se)}function W(e,t,n){return i(e,x(t),n,3>arguments.length,Pe)}function B(e,t){var n;if("function"!=typeof t)throw new TypeError("Expected a function");return e=We(e),function(){return 0<--e&&(n=t.apply(this,arguments)),1>=e&&(t=le),n}}function U(e){var t;if("function"!=typeof e)throw new TypeError("Expected a function");return t=qe(t===le?e.length-1:We(t),0),function(){for(var n=arguments,i=-1,o=qe(n.length-t,0),r=Array(o);++i<o;)r[i]=n[t+i];for(o=Array(t+1),i=-1;++i<t;)o[i]=n[i];return o[t]=r,e.apply(this,o)}}function X(e,t){return e>t}function Y(e){return Z(e)&&V(e)&&Ce.call(e,"callee")&&(!De.call(e,"callee")||"[object Arguments]"==$e.call(e))}function V(e){return null!=e&&!("function"==typeof e&&G(e))&&Q(_e(e))}function G(e){return e=J(e)?$e.call(e):"","[object Function]"==e||"[object GeneratorFunction]"==e}function Q(e){return"number"==typeof e&&e>-1&&0==e%1&&9007199254740991>=e}function J(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Z(e){return!!e&&"object"==typeof e}function K(e){return"number"==typeof e||Z(e)&&"[object Number]"==$e.call(e)}function ee(e){return"string"==typeof e||!Re(e)&&Z(e)&&"[object String]"==$e.call(e)}function te(e,t){return t>e}function ne(e){return"string"==typeof e?e:null==e?"":e+""}function ie(e){var t=I(e);if(!t&&!V(e))return He(Object(e));var n,i=z(e),o=!!i,i=i||[],r=i.length;for(n in e)!Ce.call(e,n)||o&&("length"==n||l(n,r))||t&&"constructor"==n||i.push(n);return i}function oe(e){for(var t=-1,n=I(e),i=k(e),o=i.length,r=z(e),s=!!r,r=r||[],a=r.length;++t<o;){var u=i[t];s&&("length"==u||l(u,a))||"constructor"==u&&(n||!Ce.call(e,u))||r.push(u)}return r}function re(e){return e?o(e,ie(e)):[]}function se(e){return e}function ae(t,n,i){var o=ie(n),r=y(n,o);null!=i||J(n)&&(r.length||!o.length)||(i=n,n=t,t=this,r=y(n,ie(n)));var s=!(J(i)&&"chain"in i)||i.chain,a=G(t);return Pe(r,function(i){var o=n[i];t[i]=o,a&&(t.prototype[i]=function(){var n=this.__chain__;if(s||n){var i=t(this.__wrapped__);return(i.__actions__=A(this.__actions__)).push({func:o,args:arguments,thisArg:t}),i.__chain__=n,i}return o.apply(t,e([this.value()],arguments))})}),t}var le,ue=1/0,ce=/[&<>"'`]/g,de=RegExp(ce.source),pe=/^(?:0|[1-9]\d*)$/,fe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},he={function:!0,object:!0},ve=he[typeof exports]&&exports&&!exports.nodeType?exports:le,ge=he[typeof module]&&module&&!module.nodeType?module:le,me=ge&&ge.exports===ve?ve:le,ye=r(he[typeof self]&&self),we=r(he[typeof window]&&window),be=r(he[typeof this]&&this),xe=r(ve&&ge&&"object"==typeof global&&global)||we!==(be&&be.window)&&we||ye||be||Function("return this")(),ke=Array.prototype,Te=Object.prototype,Ce=Te.hasOwnProperty,Se=0,$e=Te.toString,Ee=xe._,Ae=xe.Reflect,je=Ae?Ae.f:le,Ne=Object.create,De=Te.propertyIsEnumerable,Oe=xe.isFinite,He=Object.keys,qe=Math.max,Pe=function(e,t){return function(n,i){if(null==n)return n;if(!V(n))return e(n,i);for(var o=n.length,r=t?o:-1,s=Object(n);(t?r--:++r<o)&&!1!==i(s[r],r,s););return n}}(m),Le=function(e){return function(t,n,i){var o=-1,r=Object(t);i=i(t);for(var s=i.length;s--;){var a=i[e?s:++o];if(!1===n(r[a],a,r))break}return t}}();je&&!De.call({valueOf:1},"valueOf")&&(k=function(e){e=je(e);for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n});var _e=$("length"),ze=U(function(t,n){return Re(t)||(t=null==t?[]:[Object(t)]),g(n,1),e(A(t),re)}),Ie=U(function(e,t,n){return q(e,t,n)}),Fe=U(function(e,t){return f(e,1,t)}),Me=U(function(e,t,n){return f(e,Be(t)||0,n)}),Re=Array.isArray,We=Number,Be=Number,Ue=O(function(e,t){D(t,ie(t),e)}),Xe=O(function(e,t){D(t,oe(t),e)}),Ye=O(function(e,t,n,i){D(t,oe(t),e,i)}),Ve=U(function(e){return e.push(le,d),Ye.apply(le,e)}),Ge=U(function(e,t){return null==e?{}:S(e,g(t,1))}),Qe=x;c.prototype=p(u.prototype),c.prototype.constructor=c,u.assignIn=Xe,u.before=B,u.bind=Ie,u.chain=function(e){return e=u(e),e.__chain__=!0,e},u.compact=function(e){return v(e,Boolean)},u.concat=ze,u.create=function(e,t){var n=p(e);return t?Ue(n,t):n},u.defaults=Ve,u.defer=Fe,u.delay=Me,u.filter=function(e,t){return v(e,x(t))},u.flatten=function(e){return e&&e.length?g(e,1):[]},u.flattenDeep=function(e){return e&&e.length?g(e,ue):[]},u.iteratee=Qe,u.keys=ie,u.map=function(e,t){return T(e,x(t))},u.matches=function(e){return C(Ue({},e))},u.mixin=ae,u.negate=function(e){if("function"!=typeof e)throw new TypeError("Expected a function");return function(){return!e.apply(this,arguments)}},u.once=function(e){return B(2,e)},u.pick=Ge,u.slice=function(e,t,n){var i=e?e.length:0;return n=n===le?i:+n,i?E(e,null==t?0:+t,n):[]},u.sortBy=function(e,t){var n=0;return t=x(t),T(T(e,function(e,i,o){return{c:e,b:n++,a:t(e,i,o)}}).sort(function(e,t){var n;e:{n=e.a;var i=t.a;if(n!==i){var o=null===n,r=n===le,s=n===n,a=null===i,l=i===le,u=i===i;if(n>i&&!a||!s||o&&!l&&u||r&&u){n=1;break e}if(i>n&&!o||!u||a&&!r&&s||l&&s){n=-1;break e}}n=0}return n||e.b-t.b}),$("c"))},u.tap=function(e,t){return t(e),e},u.thru=function(e,t){return t(e)},u.toArray=function(e){return V(e)?e.length?A(e):[]:re(e)},u.values=re,u.extend=Xe,ae(u,u),u.clone=function(e){return J(e)?Re(e)?A(e):D(e,ie(e)):e},u.escape=function(e){return(e=ne(e))&&de.test(e)?e.replace(ce,s):e},u.every=function(e,t,n){return t=n?le:t,h(e,x(t))},u.find=M,u.forEach=R,u.has=function(e,t){return null!=e&&Ce.call(e,t)},u.head=F,u.identity=se,u.indexOf=function(e,t,n){var i=e?e.length:0;n="number"==typeof n?0>n?qe(i+n,0):n:0,n=(n||0)-1;for(var o=t===t;++n<i;){var r=e[n];if(o?r===t:r!==r)return n}return-1},u.isArguments=Y,u.isArray=Re,u.isBoolean=function(e){return!0===e||!1===e||Z(e)&&"[object Boolean]"==$e.call(e)},u.isDate=function(e){return Z(e)&&"[object Date]"==$e.call(e)},u.isEmpty=function(e){if(V(e)&&(Re(e)||ee(e)||G(e.splice)||Y(e)))return!e.length;for(var t in e)if(Ce.call(e,t))return!1;return!0},u.isEqual=function(e,t){return w(e,t)},u.isFinite=function(e){return"number"==typeof e&&Oe(e)},u.isFunction=G,u.isNaN=function(e){return K(e)&&e!=+e},u.isNull=function(e){return null===e},u.isNumber=K,u.isObject=J,u.isRegExp=function(e){return J(e)&&"[object RegExp]"==$e.call(e)},u.isString=ee,u.isUndefined=function(e){return e===le},u.last=function(e){var t=e?e.length:0;return t?e[t-1]:le},u.max=function(e){return e&&e.length?t(e,se,X):le},u.min=function(e){return e&&e.length?t(e,se,te):le},u.noConflict=function(){return xe._===this&&(xe._=Ee),this},u.noop=function(){},u.reduce=W,u.result=function(e,t,n){return t=null==e?le:e[t],t===le&&(t=n),G(t)?t.call(e):t},u.size=function(e){return null==e?0:(e=V(e)?e:ie(e),e.length)},u.some=function(e,t,n){return t=n?le:t,j(e,x(t))},u.uniqueId=function(e){var t=++Se;return ne(e)+t},u.each=R,u.first=F,ae(u,function(){var e={};return m(u,function(t,n){Ce.call(u.prototype,n)||(e[n]=t)}),e}(),{chain:!1}),u.VERSION="4.5.1",Pe("pop join replace reverse split push shift sort splice unshift".split(" "),function(e){var t=(/^(?:replace|split)$/.test(e)?String.prototype:ke)[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(e);u.prototype[e]=function(){var e=arguments;return i&&!this.__chain__?t.apply(this.value(),e):this[n](function(n){return t.apply(n,e)})}}),u.prototype.toJSON=u.prototype.valueOf=u.prototype.value=function(){return N(this.__wrapped__,this.__actions__)},(we||ye||{})._=u,"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return u}):ve&&ge?(me&&((ge.exports=u)._=u),ve._=u):xe._=u}.call(this),/*!
 * mobile-sniff.min.js
 */
!function(){window.mobileCheck=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}}(),/*!
 * modernizr.min.js
 */
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-flexbox-svg-setclasses !*/
!function(e,t,n){function i(e,t){return typeof e===t}function o(){var e,t,n,o,r,s,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],t=w[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=i(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)s=e[r],a=s.split("."),1===a.length?x[a[0]]=o:(!x[a[0]]||x[a[0]]instanceof Boolean||(x[a[0]]=new Boolean(x[a[0]])),x[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function r(e){var t=k.className,n=x._config.classPrefix||"";if(T&&(t=t.baseVal),x._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}x._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?k.className.baseVal=t:k.className=t)}function s(e,t){return!!~(""+e).indexOf(t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var o;for(var r in e)if(e[r]in t)return n===!1?e[r]:(o=t[e[r]],i(o,"function")?u(o,n||t):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=t.body;return e||(e=a(T?"svg":"body"),e.fake=!0),e}function f(e,n,i,o){var r,s,l,u,c="modernizr",d=a("div"),f=p();if(parseInt(i,10))for(;i--;)l=a("div"),l.id=o?o[i]:c+(i+1),d.appendChild(l);return r=a("style"),r.type="text/css",r.id="s"+c,(f.fake?f:d).appendChild(r),f.appendChild(d),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(t.createTextNode(e)),d.id=c,f.fake&&(f.style.background="",f.style.overflow="hidden",u=k.style.overflow,k.style.overflow="hidden",k.appendChild(f)),s=n(d,e),f.fake?(f.parentNode.removeChild(f),k.style.overflow=u,k.offsetHeight):d.parentNode.removeChild(d),!!s}function h(t,i){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(t[o]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];o--;)r.push("("+d(t[o])+":"+i+")");return r=r.join(" or "),f("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function v(e,t,o,r){function u(){d&&(delete A.style,delete A.modElem)}if(r=!i(r,"undefined")&&r,!i(o,"undefined")){var c=h(e,o);if(!i(c,"undefined"))return c}for(var d,p,f,v,g,m=["modernizr","tspan","samp"];!A.style&&m.length;)d=!0,A.modElem=a(m.shift()),A.style=A.modElem.style;for(f=e.length,p=0;f>p;p++)if(v=e[p],g=A.style[v],s(v,"-")&&(v=l(v)),A.style[v]!==n){if(r||i(o,"undefined"))return u(),"pfx"!=t||v;try{A.style[v]=o}catch(e){}if(A.style[v]!=g)return u(),"pfx"!=t||v}return u(),!1}function g(e,t,n,o,r){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(s+" ")+s).split(" ");return i(t,"string")||i(t,"undefined")?v(a,t,o,r):(a=(e+" "+$.join(s+" ")+s).split(" "),c(a,t,n))}function m(e,t,i){return g(e,n,n,t,i)}var y=[],w=[],b={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},x=function(){};x.prototype=b,x=new x,x.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var k=t.documentElement,T="svg"===k.nodeName.toLowerCase(),C="Moz O ms Webkit",S=b._config.usePrefixes?C.split(" "):[];b._cssomPrefixes=S;var $=b._config.usePrefixes?C.toLowerCase().split(" "):[];b._domPrefixes=$;var E={elem:a("modernizr")};x._q.push(function(){delete E.elem});var A={style:E.elem.style};x._q.unshift(function(){delete A.style}),b.testAllProps=g,b.testAllProps=m,x.addTest("flexbox",m("flexBasis","1px",!0)),x.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&m("transform","scale(1)",!0)}),o(),r(y),delete b.addTest,delete b.addAsyncTest;for(var j=0;j<x._q.length;j++)x._q[j]();e.Modernizr=x}(window,document),/*!
 * prepare-transition.min.js
 */
/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
!function(e){e.fn.prepareTransition=function(){return this.each(function(){var t=e(this);t.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",function(){t.removeClass("is-transitioning")});var n=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"],i=0;e.each(n,function(e,n){i||(i=parseFloat(t.css(n)))}),0!=i&&(t.addClass("is-transitioning"),t[0].offsetWidth)})}}(jQuery),/*!
 * slick-slim.min.js
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var t=window.Slick||{};t=function(){function t(t,i){var o,r=this;r.defaults={accessibility:!0,appendArrows:e(t),appendDots:e(t),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous slide" tabindex="0" role="button">Previous slide</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next slide" tabindex="0" role="button">Next slide</button>',autoplay:!1,autoplaySpeed:3e3,cssEase:"ease",customPaging:function(t,n){return e('<button type="button" data-role="none" role="button" tabindex="0" />').text("Slide "+(n+1))},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,initialSlide:0,lazyLoad:!0,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,waitForAnimate:!0,zIndex:1e3},r.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(r,r.initials),r.activeBreakpoint=null,r.animType=null,r.animProp=null,r.breakpoints=[],r.breakpointSettings=[],r.cssTransitions=!1,r.focussed=!1,r.interrupted=!1,r.hidden="hidden",r.paused=!0,r.positionProp=null,r.respondTo=null,r.rowCount=1,r.shouldClick=!0,r.$slider=e(t),r.$slidesCache=null,r.transformType=null,r.transitionType=null,r.visibilityChange="visibilitychange",r.windowWidth=0,r.windowTimer=null,o=e(t).data("slick")||{},r.options=e.extend({},r.defaults,i,o),r.currentSlide=r.options.initialSlide,r.originalSettings=r.options,"undefined"!=typeof document.mozHidden?(r.hidden="mozHidden",r.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(r.hidden="webkitHidden",r.visibilityChange="webkitvisibilitychange"),r.autoPlay=e.proxy(r.autoPlay,r),r.autoPlayClear=e.proxy(r.autoPlayClear,r),r.autoPlayIterator=e.proxy(r.autoPlayIterator,r),r.changeSlide=e.proxy(r.changeSlide,r),r.clickHandler=e.proxy(r.clickHandler,r),r.selectHandler=e.proxy(r.selectHandler,r),r.setPosition=e.proxy(r.setPosition,r),r.swipeHandler=e.proxy(r.swipeHandler,r),r.dragHandler=e.proxy(r.dragHandler,r),r.keyHandler=e.proxy(r.keyHandler,r),r.instanceUid=n++,r.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,r.init(!0)}var n=0;return t}(),t.prototype.activateADA=function(){var e=this;e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),e.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.animateSlide=function(t,n){var i={},o=this;o.options.rtl===!0&&(t=-t),o.transformsEnabled===!1?o.$slideTrack.animate({left:t},o.options.speed,o.options.easing,n):o.cssTransitions===!1?(o.options.rtl===!0&&(o.currentLeft=-o.currentLeft),e({animStart:o.currentLeft}).animate({animStart:t},{duration:o.options.speed,easing:o.options.easing,step:function(e){e=Math.ceil(e),i[o.animType]="translate("+e+"px, 0px)",o.$slideTrack.css(i)},complete:function(){n&&n.call()}})):(o.applyTransition(),t=Math.ceil(t),i[o.animType]="translate3d("+t+"px, 0px, 0px)",o.$slideTrack.css(i),n&&setTimeout(function(){o.disableTransition(),n.call()},o.options.speed))},t.prototype.getNavTarget=function(){var t=this,n=t.options.asNavFor;return n&&null!==n&&(n=e(n).not(t.$slider)),n},t.prototype.asNavFor=function(t){var n=this,i=n.getNavTarget();null!==i&&"object"==typeof i&&i.each(function(){var n=e(this).slick("getSlick");n.unslicked||n.slideHandler(t,!0)})},t.prototype.applyTransition=function(e){var t=this,n={};t.options.fade===!1?n[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:n[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,t.options.fade===!1?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},t.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||e.slideHandler(t)},t.prototype.buildArrows=function(){var t=this;t.options.arrows===!0&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),t.options.infinite!==!0&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,n,i=this;if(i.options.dots===!0&&i.slideCount>i.options.slidesToShow){for(i.$slider.addClass("slick-dotted"),n=e("<ul />").addClass(i.options.dotsClass),t=0;t<=i.getDotCount();t+=1)n.append(e("<li />").append(i.options.customPaging.call(this,i,t)));i.$dots=n.appendTo(i.options.appendDots),i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,n){e(n).attr("data-slick-index",t).data("originalStyling",e(n).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),t.options.swipeToSlide===!0&&(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.options.draggable===!0&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,n,i,o,r,s,a=this;if(i=document.createDocumentFragment(),r=a.$slider.children(),a.options.rows>1){for(s=a.options.slidesPerRow*a.options.rows,o=Math.ceil(r.length/s),e=0;e<o;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var u=document.createElement("div");for(n=0;n<a.options.slidesPerRow;n++){var c=e*s+(t*a.options.slidesPerRow+n);r.get(c)&&u.appendChild(r.get(c))}l.appendChild(u)}i.appendChild(l)}a.$slider.empty().append(i),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.changeSlide=function(t,n){var i,o,r,s=this,a=e(t.currentTarget);switch(a.is("a")&&t.preventDefault(),a.is("li")||(a=a.closest("li")),r=s.slideCount%s.options.slidesToScroll!==0,i=r?0:(s.slideCount-s.currentSlide)%s.options.slidesToScroll,t.data.message){case"previous":o=0===i?s.options.slidesToScroll:s.options.slidesToShow-i,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide-o,!1,n);break;case"next":o=0===i?s.options.slidesToScroll:i,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide+o,!1,n);break;case"index":var l=0===t.data.index?0:t.data.index||a.index()*s.options.slidesToScroll;s.slideHandler(s.checkNavigable(l),!1,n),a.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,n,i=this;if(t=i.getNavigableIndexes(),n=0,e>t[t.length-1])e=t[t.length-1];else for(var o in t){if(e<t[o]){e=n;break}n=t[o]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&e("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",e.proxy(t.interrupt,t,!0)).off("mouseleave.slick",e.proxy(t.interrupt,t,!1)),t.$slider.off("focus.slick blur.slick"),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide)),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),t.options.accessibility===!0&&t.$list.off("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).off("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>1&&(e=t.$slides.children().children(),e.removeAttr("style"),t.$slider.empty().append(e))},t.prototype.clickHandler=function(e){var t=this;t.shouldClick===!1&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var n=this;n.autoPlayClear(),n.touchObject={},n.cleanUpEvents(),e(".slick-cloned",n.$slider).detach(),n.$dots&&n.$dots.remove(),n.$prevArrow&&n.$prevArrow.length&&(n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.prevArrow)&&n.$prevArrow.remove()),n.$nextArrow&&n.$nextArrow.length&&(n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.nextArrow)&&n.$nextArrow.remove()),n.$slides&&(n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){e(this).attr("style",e(this).data("originalStyling"))}),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.detach(),n.$list.detach(),n.$slider.append(n.$slides)),n.cleanUpRows(),n.$slider.removeClass("slick-slider"),n.$slider.removeClass("slick-initialized"),n.$slider.removeClass("slick-dotted"),n.unslicked=!0,t||n.$slider.trigger("destroy",[n])},t.prototype.disableTransition=function(e){var t=this,n={};n[t.transitionType]="",t.options.fade===!1?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},t.prototype.fadeSlide=function(e,t){var n=this;n.cssTransitions===!1?(n.$slides.eq(e).css({zIndex:n.options.zIndex}),n.$slides.eq(e).animate({opacity:1},n.options.speed,n.options.easing,t)):(n.applyTransition(e),n.$slides.eq(e).css({opacity:1,zIndex:n.options.zIndex}),t&&setTimeout(function(){n.disableTransition(e),t.call()},n.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;t.cssTransitions===!1?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(n){n.stopImmediatePropagation();var i=e(this);setTimeout(function(){t.options.pauseOnFocus&&(t.focussed=i.is(":focus"),t.autoPlay())},0)})},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){var e=this;return e.currentSlide},t.prototype.getDotCount=function(){for(var e=this,t=0,n=0,i=0;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return i-1},t.prototype.getLeft=function(e){var t,n,i=this,o=0;return i.slideOffset=0,n=i.$slides.first().outerHeight(!0),i.slideCount>i.options.slidesToShow&&(i.slideOffset=i.slideWidth*i.options.slidesToShow*-1,o=n*i.options.slidesToShow*-1),i.slideCount%i.options.slidesToScroll!==0&&e+i.options.slidesToScroll>i.slideCount&&i.slideCount>i.options.slidesToShow&&(e>i.slideCount?(i.slideOffset=(i.options.slidesToShow-(e-i.slideCount))*i.slideWidth*-1,o=(i.options.slidesToShow-(e-i.slideCount))*n*-1):(i.slideOffset=i.slideCount%i.options.slidesToScroll*i.slideWidth*-1,o=i.slideCount%i.options.slidesToScroll*n*-1)),i.slideCount<=i.options.slidesToShow&&(i.slideOffset=0,o=0),t=e*i.slideWidth*-1+i.slideOffset},t.prototype.getOption=t.prototype.slickGetOption=function(e){var t=this;return t.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,n=0,i=0,o=[];for(n=t.options.slidesToScroll*-1,i=t.options.slidesToScroll*-1,e=2*t.slideCount;n<e;)o.push(n),n=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return o},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,n,i,o=this;return i=0,o.options.swipeToSlide===!0?(o.$slideTrack.find(".slick-slide").each(function(t,r){if(r.offsetLeft-i+e(r).outerWidth()/2>o.swipeLeft*-1)return n=r,!1}),t=Math.abs(e(n).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){var n=this;n.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var n=this;e(n.$slider).hasClass("slick-initialized")||(e(n.$slider).addClass("slick-initialized"),n.buildRows(),n.buildOut(),n.setProps(),n.startLoad(),n.loadSlider(),n.initializeEvents(),n.updateDots(),n.focusHandler()),t&&n.$slider.trigger("init",[n]),n.options.accessibility===!0&&n.initADA(),n.options.autoplay&&(n.paused=!1,n.autoPlay())},t.prototype.initADA=function(){var t,n,i,o=this;o.$slides.not(o.$slideTrack.find(".slick-cloned")).each(function(r){e(this).attr("role","option");var s=Math.floor(r/o.options.slidesToShow);o.options.dots===!0&&(n=""+o.instanceUid+s,i=n,t===n&&(n=""+n+r),e(this).attr("id","slickSlide"+n).attr("role","tabpanel").attr("aria-labelledby","slickDot"+i),t=""+o.instanceUid+s)}),null!==o.$dots&&o.$dots.attr("role","tablist").find("li").each(function(t){e(this).attr({role:"tab","aria-selected":"false","aria-controls":"slickSlide"+o.instanceUid+t,id:"slickDot"+o.instanceUid+t})}).first().attr("aria-selected","true"),o.activateADA()},t.prototype.initArrowEvents=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide))},t.prototype.updateADA=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").attr("aria-selected","false"),e.$dots.find(".slick-active").attr("aria-selected","true")),e.activateADA()},t.prototype.initArrowEvents=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide))},t.prototype.initDotEvents=function(){var t=this;t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),t.options.dots===!0&&t.options.pauseOnDotsHover===!0&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.interrupt,t,!0)).on("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.interrupt,t,!1)))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),t.options.accessibility===!0&&t.$list.on("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).on("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.initUI=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},t.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&t.options.accessibility===!0?t.changeSlide({data:{message:t.options.rtl===!0?"next":"previous"}}):39===e.keyCode&&t.options.accessibility===!0&&t.changeSlide({data:{message:t.options.rtl===!0?"previous":"next"}}))},t.prototype.lazyLoad=function(){function t(t){e("img[data-lazy]",t).each(function(){var t=e(this),n=e(this).attr("data-lazy"),i=document.createElement("img");i.onload=function(){t.animate({opacity:0},100,function(){t.attr("src",n).animate({opacity:1},200,function(){t.removeAttr("data-lazy").removeClass("slick-loading")}),s.$slider.trigger("lazyLoaded",[s,t,n])})},i.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,t,n])},i.src=n})}var n,i,o,r,s=this;o=s.options.slidesToShow,r=Math.ceil(o+s.options.slidesToShow),s.options.fade===!0&&(o>0&&o--,r<=s.slideCount&&r++),n=s.$slider.find(".slick-slide").slice(o,r),t(n),s.slideCount<=s.options.slidesToShow?(i=s.$slider.find(".slick-slide"),t(i)):s.currentSlide>=s.slideCount-s.options.slidesToShow?(i=s.$slider.find(".slick-cloned").slice(0,s.options.slidesToShow),t(i)):0===s.currentSlide&&(i=s.$slider.find(".slick-cloned").slice(s.options.slidesToShow*-1),t(i))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI()},t.prototype.next=t.prototype.slickNext=function(){var e=this;e.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){var e=this;e.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){var e=this;e.autoPlayClear(),e.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},t.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),t.options.accessibility===!0&&t.updateADA())},t.prototype.prev=t.prototype.slickPrev=function(){var e=this;e.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.refresh=function(t){var n,i,o=this;i=o.slideCount-o.options.slidesToShow,o.slideCount<=o.options.slidesToShow&&(o.currentSlide=0),n=o.currentSlide,o.destroy(!0),e.extend(o,o.initials,{currentSlide:n}),o.init(),t||o.changeSlide({data:{message:"index",index:n}},!1)},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.setProps(),t.setupInfinite(),t.buildArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=e(window).width(),t.unslicked||t.setPosition()},50))},t.prototype.setCSS=function(e){var t,n,i=this,o={};i.options.rtl===!0&&(e=-e),t="left"==i.positionProp?Math.ceil(e)+"px":"0px",n="top"==i.positionProp?Math.ceil(e)+"px":"0px",o[i.positionProp]=e,i.transformsEnabled===!1?i.$slideTrack.css(o):(o={},i.cssTransitions===!1?(o[i.animType]="translate("+t+", "+n+")",i.$slideTrack.css(o)):(o[i.animType]="translate3d("+t+", "+n+", 0px)",i.$slideTrack.css(o)))},t.prototype.setDimensions=function(){var e=this;e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,n=this;n.$slides.each(function(i,o){t=n.slideWidth*i*-1,n.options.rtl===!0?e(o).css({position:"relative",right:t,top:0,zIndex:n.options.zIndex-2,opacity:0}):e(o).css({position:"relative",left:t,top:0,zIndex:n.options.zIndex-2,opacity:0})}),n.$slides.eq(n.currentSlide).css({zIndex:n.options.zIndex-1,opacity:1})},t.prototype.setOption=t.prototype.slickSetOption=function(){var t,n,i,o=this,r=!1;"object"===e.type(arguments[0])?(t=arguments[0],r=arguments[1],i="multiple"):"string"===e.type(arguments[0])&&(t=arguments[0],n=arguments[1],r=arguments[2],"undefined"!=typeof arguments[1]&&(i="single")),"single"===i?o.options[t]=n:"multiple"===i&&e.each(t,function(e,t){o.options[e]=t}),r&&(o.unload(),o.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.options.fade===!1?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp="left",e.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||e.options.useCSS===!0&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&e.animType!==!1&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&e.animType!==!1},t.prototype.setSlideClasses=function(e){var t,n,i,o=this;t=o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),o.$slides.eq(e).addClass("slick-current"),e>=0&&e<=o.slideCount-o.options.slidesToShow?o.$slides.slice(e,e+o.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=o.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(i=o.slideCount%o.options.slidesToShow,n=o.options.slidesToShow+e,o.options.slidesToShow==o.options.slidesToScroll&&o.slideCount-e<o.options.slidesToShow?t.slice(n-(o.options.slidesToShow-i),n+i).addClass("slick-active").attr("aria-hidden","false"):t.slice(n,n+o.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),o.options.lazyLoad===!0&&o.lazyLoad()},t.prototype.setupInfinite=function(){var t,n,i,o=this;if(o.options.fade===!1&&(n=null,o.slideCount>o.options.slidesToShow)){for(i=o.options.slidesToShow,t=o.slideCount;t>o.slideCount-i;t-=1)n=t-1,e(o.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n-o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");for(t=0;t<i;t+=1)n=t,e(o.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n+o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");o.$slideTrack.find(".slick-cloned").find("[id]").each(function(){e(this).attr("id","")})}},t.prototype.interrupt=function(e){var t=this;e||t.autoPlay(),t.interrupted=e},t.prototype.selectHandler=function(t){var n=this,i=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),o=parseInt(i.attr("data-slick-index"));return o||(o=0),n.slideCount<=n.options.slidesToShow?(n.setSlideClasses(o),void n.asNavFor(o)):void n.slideHandler(o)},t.prototype.slideHandler=function(e,t,n){var i,o,r,s,a,l=null,u=this;if(t=t||!1,(u.animating!==!0||u.options.waitForAnimate!==!0)&&!(u.options.fade===!0&&u.currentSlide===e||u.slideCount<=u.options.slidesToShow))return t===!1&&u.asNavFor(e),i=e,l=u.getLeft(i),s=u.getLeft(u.currentSlide),u.currentLeft=null===u.swipeLeft?s:u.swipeLeft,u.options.autoplay&&clearInterval(u.autoPlayTimer),o=i<0?u.slideCount%u.options.slidesToScroll!==0?u.slideCount-u.slideCount%u.options.slidesToScroll:u.slideCount+i:i>=u.slideCount?u.slideCount%u.options.slidesToScroll!==0?0:i-u.slideCount:i,u.animating=!0,u.$slider.trigger("beforeChange",[u,u.currentSlide,o]),r=u.currentSlide,u.currentSlide=o,u.setSlideClasses(u.currentSlide),u.options.asNavFor&&(a=u.getNavTarget(),a=a.slick("getSlick"),a.slideCount<=a.options.slidesToShow&&a.setSlideClasses(u.currentSlide)),u.updateDots(),u.options.fade===!0?void(n!==!0?(u.fadeSlideOut(r),u.fadeSlide(o,function(){u.postSlide(o)})):u.postSlide(o)):void(n!==!0?u.animateSlide(l,function(){u.postSlide(o)}):u.postSlide(o))},t.prototype.startLoad=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,n,i,o=this;return e=o.touchObject.startX-o.touchObject.curX,t=o.touchObject.startY-o.touchObject.curY,n=Math.atan2(t,e),i=Math.round(180*n/Math.PI),i<0&&(i=360-Math.abs(i)),i<=45&&i>=0?o.options.rtl===!1?"left":"right":i<=360&&i>=315?o.options.rtl===!1?"left":"right":i>=135&&i<=225?o.options.rtl===!1?"right":"left":"vertical"},t.prototype.swipeEnd=function(e){var t,n,i=this;if(i.dragging=!1,i.interrupted=!1,i.shouldClick=!(i.touchObject.swipeLength>10),void 0===i.touchObject.curX)return!1;if(i.touchObject.edgeHit===!0&&i.$slider.trigger("edge",[i,i.swipeDirection()]),i.touchObject.swipeLength>=i.touchObject.minSwipe){switch(n=i.swipeDirection()){case"left":case"down":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount(),i.currentDirection=0;break;case"right":case"up":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount(),i.currentDirection=1}"vertical"!=n&&(i.slideHandler(t),i.touchObject={},i.$slider.trigger("swipe",[i,n]))}else i.touchObject.startX!==i.touchObject.curX&&(i.slideHandler(i.currentSlide),i.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(t.options.swipe===!1||"ontouchend"in document&&t.options.swipe===!1||t.options.draggable===!1&&e.type.indexOf("mouse")!==-1))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,n,i,o,r,s=this;return r=void 0!==e.originalEvent?e.originalEvent.touches:null,!(!s.dragging||r&&1!==r.length)&&(t=s.getLeft(s.currentSlide),s.touchObject.curX=void 0!==r?r[0].pageX:e.clientX,s.touchObject.curY=void 0!==r?r[0].pageY:e.clientY,s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curX-s.touchObject.startX,2))),n=s.swipeDirection(),"vertical"!==n?(void 0!==e.originalEvent&&s.touchObject.swipeLength>4&&e.preventDefault(),o=(s.options.rtl===!1?1:-1)*(s.touchObject.curX>s.touchObject.startX?1:-1),s.options.verticalSwiping===!0&&(o=s.touchObject.curY>s.touchObject.startY?1:-1),i=s.touchObject.swipeLength,s.touchObject.edgeHit=!1,s.swipeLeft=t+i*o,s.options.fade!==!0&&s.options.touchMove!==!1&&(s.animating===!0?(s.swipeLeft=null,!1):void s.setCSS(s.swipeLeft))):void 0)},t.prototype.swipeStart=function(e){var t,n=this;return n.interrupted=!0,1!==n.touchObject.fingerCount||n.slideCount<=n.options.slidesToShow?(n.touchObject={},!1):(void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=void 0!==t?t.pageX:e.clientX,n.touchObject.startY=n.touchObject.curY=void 0!==t?t.pageY:e.clientY,void(n.dragging=!0))},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active"),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active"))},t.prototype.visibility=function(){var e=this;e.options.autoplay&&(document[e.hidden]?e.interrupted=!0:e.interrupted=!1)},e.fn.slick=function(){var e,n,i=this,o=arguments[0],r=Array.prototype.slice.call(arguments,1),s=i.length;for(e=0;e<s;e++)if("object"==typeof o||"undefined"==typeof o?i[e].slick=new t(i[e],o):n=i[e].slick[o].apply(i[e].slick,r),"undefined"!=typeof n)return n;return i}}),/*!
* jquery.ba-throttle-debounce.min.js
*/
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
function(e,t){var n,i=e.jQuery||e.Cowboy||(e.Cowboy={});i.throttle=n=function(e,n,o,r){function s(){function i(){l=+new Date,o.apply(u,d)}function s(){a=t}var u=this,c=+new Date-l,d=arguments;r&&!a&&i(),a&&clearTimeout(a),r===t&&c>e?i():n!==!0&&(a=setTimeout(r?s:i,r===t?e-c:e))}var a,l=0;return"boolean"!=typeof n&&(r=o,o=n,n=t),i.guid&&(s.guid=o.guid=o.guid||i.guid++),s},i.debounce=function(e,i,o){return o===t?n(e,i,!1):n(e,o,i!==!1)}}(this);
/*!
 * imagesLoaded PACKAGED v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return-1==n.indexOf(t)&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return-1!=n&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=0,o=i[n];t=t||[];for(var r=this._onceEvents&&this._onceEvents[e];o;){var s=r&&r[o];s&&(this.off(e,o),delete r[o]),o.apply(this,t),n+=s?0:1,o=i[n]}return this}},t.allOff=t.removeAllListeners=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){var t=[];if(Array.isArray(e))t=e;else if("number"==typeof e.length)for(var i=0;i<e.length;i++)t.push(e[i]);else t.push(e);return t}function o(e,t,r){return this instanceof o?("string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=n(e),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(e,t,r)}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
/*! lozad.js - v1.0.6 - 2017-10-09
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2017 Apoorv Saxena; Licensed MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";function t(t){t.setAttribute("data-loaded",!0)}var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},r={rootMargin:"0px",threshold:0,load:function(t){t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&(t.srcset=t.getAttribute("data-srcset")),t.getAttribute("data-backgroundImage")&&(t.style.backgroundImage="url("+t.getAttribute("data-backgroundImage")+")")}},o=function(t){return"true"===t.getAttribute("data-loaded")},n=function(e){return function(r,o){r.forEach(function(r){r.intersectionRatio>0&&(o.unobserve(r.target),e(r.target),t(r.target))})}};return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".lozad",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=e({},r,i),d=u.rootMargin,c=u.threshold,s=u.load,g=void 0;return window.IntersectionObserver&&(g=new IntersectionObserver(n(s),{rootMargin:d,threshold:c})),{observe:function(){for(var e=document.querySelectorAll(a),r=0;r<e.length;r++)o(e[r])||(g?g.observe(e[r]):(s(e[r]),t(e[r])))}}}});

/*! jQuery Validation Plugin - v1.16.0 - 12/2/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return!c.settings.submitHandler||(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&null!=j.form){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]);var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)a[b]&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);if("function"==typeof f.normalizer){if(i=f.normalizer.call(b,i),"string"!=typeof i)throw new TypeError("The normalizer should return a string value.");delete f.normalizer}for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j instanceof TypeError&&(j.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
/*!
 * jQuery Form Plugin
 * version: 4.2.2
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(r),r}:e(jQuery)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).closest("form").ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=r.form;if(i.clk=r,"image"===r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n=/\r?\n/g,i={};i.fileapi=void 0!==e('<input type="file">').get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t,r,n,s){function u(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function c(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){a("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function i(){function t(){try{var e=n(v).readyState;a("state = "+e),e&&"uninitialized"===e.toLowerCase()&&setTimeout(t,50)}catch(e){a("Server abort: ",e," (",e.name,")"),s(L),j&&clearTimeout(j),j=void 0}}var r=p.attr2("target"),i=p.attr2("action"),o=p.attr("enctype")||p.attr("encoding")||"multipart/form-data";w.setAttribute("target",m),l&&!/post/i.test(l)||w.setAttribute("method","POST"),i!==f.url&&w.setAttribute("action",f.url),f.skipEncodingOverride||l&&!/post/i.test(l)||p.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(j=setTimeout(function(){T=!0,s(A)},f.timeout));var u=[];try{if(f.extraData)for(var c in f.extraData)f.extraData.hasOwnProperty(c)&&(e.isPlainObject(f.extraData[c])&&f.extraData[c].hasOwnProperty("name")&&f.extraData[c].hasOwnProperty("value")?u.push(e('<input type="hidden" name="'+f.extraData[c].name+'">',k).val(f.extraData[c].value).appendTo(w)[0]):u.push(e('<input type="hidden" name="'+c+'">',k).val(f.extraData[c]).appendTo(w)[0]));f.iframeTarget||h.appendTo(D),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(e){document.createElement("form").submit.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",o),r?w.setAttribute("target",r):p.removeAttr("target"),e(u).remove()}}function s(t){if(!x.aborted&&!X){if((O=n(v))||(a("cannot access response document"),t=L),t===A&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t===L&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(O&&O.location.href!==f.iframeSrc||T){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"===f.dataType||O.XMLDocument||e.isXMLDoc(O);if(a("isXml="+o),!o&&window.opera&&(null===O.body||!O.body.innerHTML)&&--C)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=O.body?O.body:O.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=O.XMLDocument?O.XMLDocument:O,o&&(f.dataType="xml"),x.getResponseHeader=function(e){return{"content-type":f.dataType}[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(f.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||f.textarea){var p=O.getElementsByTagName("textarea")[0];if(p)x.responseText=p.value,x.status=Number(p.getAttribute("status"))||x.status,x.statusText=p.getAttribute("statusText")||x.statusText;else if(l){var m=O.getElementsByTagName("pre")[0],g=O.getElementsByTagName("body")[0];m?x.responseText=m.textContent?m.textContent:m.innerText:g&&(x.responseText=g.textContent?g.textContent:g.innerText)}}else"xml"===c&&!x.responseXML&&x.responseText&&(x.responseXML=q(x.responseText));try{M=N(x,c,f)}catch(e){i="parsererror",x.error=r=e||i}}catch(e){a("error caught: ",e),i="error",x.error=r=e||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(f.success&&f.success.call(f.context,M,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,f])):i&&(void 0===r&&(r=x.statusText),f.error&&f.error.call(f.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,f,r])),d&&e.event.trigger("ajaxComplete",[x,f]),d&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,x,i),X=!0,f.timeout&&clearTimeout(j),setTimeout(function(){f.iframeTarget?h.attr("src",f.iframeSrc):h.remove(),x.responseXML=null},100)}}}var u,c,f,d,m,h,v,x,y,b,T,j,w=p[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(c=0;c<g.length;c++)u=e(g[c]),o?u.prop("disabled",!1):u.removeAttr("disabled");(f=e.extend(!0,{},e.ajaxSettings,t)).context=f.context||f,m="jqFormIO"+(new Date).getTime();var k=w.ownerDocument,D=p.closest("body");if(f.iframeTarget?(b=(h=e(f.iframeTarget,k)).attr2("name"))?m=b:h.attr2("name",m):(h=e('<iframe name="'+m+'" src="'+f.iframeSrc+'" />',k)).css({position:"absolute",top:"-1000px",left:"-1000px"}),v=h[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(e){}h.attr("src",f.iframeSrc),x.error=r,f.error&&f.error.call(f.context,x,r,t),d&&e.event.trigger("ajaxError",[x,f,r]),f.complete&&f.complete.call(f.context,x,r)}},(d=f.global)&&0==e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,f]),f.beforeSend&&!1===f.beforeSend.call(f.context,x,f))return f.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;(y=w.clk)&&(b=y.name)&&!y.disabled&&(f.extraData=f.extraData||{},f.extraData[b]=y.value,"image"===y.type&&(f.extraData[b+".x"]=w.clk_x,f.extraData[b+".y"]=w.clk_y));var A=1,L=2,F=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&F&&(f.extraData=f.extraData||{},f.extraData[E]=F),f.forceSync?i():setTimeout(i,10);var M,O,X,C=50,q=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},_=e.parseJSON||function(e){return window.eval("("+e+")")},N=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i=("xml"===r||!r)&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&(("json"===r||!r)&&n.indexOf("json")>=0?o=_(o):("script"===r||!r)&&n.indexOf("javascript")>=0&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var l,f,d,p=this;"function"==typeof t?t={success:t}:"string"==typeof t||!1===t&&arguments.length>0?(t={url:t,data:r,dataType:n},"function"==typeof s&&(t.success=s)):void 0===t&&(t={}),l=t.method||t.type||this.attr2("method"),(d=(d="string"==typeof(f=t.url||this.attr2("action"))?e.trim(f):"")||window.location.href||"")&&(d=(d.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:d,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var h=t.traditional;void 0===h&&(h=e.ajaxSettings.traditional);var v,g=[],x=this.formToArray(t.semantic,g,t.filtering);if(t.data){var y=e.isFunction(t.data)?t.data(x):t.data;t.extraData=y,v=e.param(y,h)}if(t.beforeSubmit&&!1===t.beforeSubmit(x,this,t))return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[x,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var b=e.param(x,h);v&&(b=b?b+"&"+v:v),"GET"===t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+b,t.data=null):t.data=b;var T=[];if(t.resetForm&&T.push(function(){p.resetForm()}),t.clearForm&&T.push(function(){p.clearForm(t.includeHidden)}),!t.dataType&&t.target){var j=t.success||function(){};T.push(function(r,a,n){var i=arguments,o=t.replaceTarget?"replaceWith":"html";e(t.target)[o](r).each(function(){j.apply(this,i)})})}else t.success&&(e.isArray(t.success)?e.merge(T,t.success):T.push(t.success));if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=T.length;i<o;i++)T[i].apply(n,[e,r,a||p,p])},t.error){var w=t.error;t.error=function(e,r,a){var n=t.context||this;w.apply(n,[e,r,a,p])}}if(t.complete){var S=t.complete;t.complete=function(e,r){var a=t.context||this;S.apply(a,[e,r,p])}}var k=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}).length>0,D="multipart/form-data",A=p.attr("enctype")===D||p.attr("encoding")===D,L=i.fileapi&&i.formdata;a("fileAPI :"+L);var F,E=(k||A)&&!L;!1!==t.iframe&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){F=c(x)}):F=c(x):F=(k||A)&&L?function(r){for(var a=new FormData,n=0;n<r.length;n++)a.append(r[n].name,r[n].value);if(t.extraData){var i=u(t.extraData);for(n=0;n<i.length;n++)i[n]&&a.append(i[n][0],i[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(o.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),o.data=null;var s=o.beforeSend;return o.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=a,s&&s.call(this,e,r)},e.ajax(o)}(x):e.ajax(t),p.removeData("jqxhr").data("jqxhr",F);for(var M=0;M<g.length;M++)g[M]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n,i,o,s){if(("string"==typeof n||!1===n&&arguments.length>0)&&(n={url:n,data:i,dataType:o},"function"==typeof s&&(n.success=s)),n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var u={s:this.selector,c:this.context};return!e.isReady&&u.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(u.s,u.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().on("submit.form-plugin",n,t).on("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r,a){var n=[];if(0===this.length)return n;var o,s=this[0],u=this.attr("id"),c=t||void 0===s.elements?s.getElementsByTagName("*"):s.elements;if(c&&(c=e.makeArray(c)),u&&(t||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=e(':input[form="'+u+'"]').get()).length&&(c=(c||[]).concat(o)),!c||!c.length)return n;e.isFunction(a)&&(c=e.map(c,a));var l,f,d,p,m,h,v;for(l=0,h=c.length;l<h;l++)if(m=c[l],(d=m.name)&&!m.disabled)if(t&&s.clk&&"image"===m.type)s.clk===m&&(n.push({name:d,value:e(m).val(),type:m.type}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}));else if((p=e.fieldValue(m,!0))&&p.constructor===Array)for(r&&r.push(m),f=0,v=p.length;f<v;f++)n.push({name:d,value:p[f]});else if(i.fileapi&&"file"===m.type){r&&r.push(m);var g=m.files;if(g.length)for(f=0;f<g.length;f++)n.push({name:d,value:g[f],type:m.type});else n.push({name:d,value:"",type:m.type})}else null!==p&&void 0!==p&&(r&&r.push(m),n.push({name:d,value:p,type:m.type,required:m.required}));if(!t&&s.clk){var x=e(s.clk),y=x[0];(d=y.name)&&!y.disabled&&"image"===y.type&&(n.push({name:d,value:x.val()}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor===Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor===Array&&!o.length||(o.constructor===Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"===i||"button"===i||("checkbox"===i||"radio"===i)&&!t.checked||("submit"===i||"image"===i)&&t.form&&t.form.clk!==t||"select"===o&&-1===t.selectedIndex))return null;if("select"===o){var s=t.selectedIndex;if(s<0)return null;for(var u=[],c=t.options,l="select-one"===i,f=l?s+1:c.length,d=l?s:0;d<f;d++){var p=c[d];if(p.selected&&!p.disabled){var m=p.value;if(m||(m=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),l)return m;u.push(m)}}return u}return e(t).val().replace(n,"\r\n")},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"===n?this.value="":"checkbox"===a||"radio"===a?this.checked=!1:"select"===n?this.selectedIndex=-1:"file"===a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){var t=e(this),r=this.tagName.toLowerCase();switch(r){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===r?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var n=e(t.attr("for")),i=t.find("input,select,textarea");return n[0]&&i.unshift(n[0]),i.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"===r||"radio"===r)this.checked=t;else if("option"===this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"===a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
//# sourceMappingURL=jquery.form.min.js.map
/* eslint-disable */
/* MediaMatch v.2.0.2 - Testing css media queries in Javascript. Authors & copyright (c) 2013: WebLinc, David Knight. */

window.matchMedia||(window.matchMedia=function(c){var a=c.document,w=a.documentElement,l=[],t=0,x="",h={},G=/\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,H=/^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,y=0,A=function(b){var z=-1!==b.indexOf(",")&&b.split(",")||[b],e=z.length-1,j=e,g=null,d=null,c="",a=0,l=!1,m="",f="",g=null,d=0,f=null,k="",p="",q="",n="",r="",k=!1;if(""===
b)return!0;do{g=z[j-e];l=!1;if(d=g.match(G))c=d[0],a=d.index;if(!d||-1===g.substring(0,a).indexOf("(")&&(a||!d[3]&&c!==d.input))k=!1;else{f=g;l="not"===d[1];a||(m=d[2],f=g.substring(c.length));k=m===x||"all"===m||""===m;g=-1!==f.indexOf(" and ")&&f.split(" and ")||[f];d=g.length-1;if(k&&0<=d&&""!==f){do{f=g[d].match(H);if(!f||!h[f[3]]){k=!1;break}k=f[2];n=p=f[5];q=f[7];r=h[f[3]];q&&(n="px"===q?Number(p):"em"===q||"rem"===q?16*p:f[8]?(p/f[8]).toFixed(2):"dppx"===q?96*p:"dpcm"===q?0.3937*p:Number(p));
k="min-"===k&&n?r>=n:"max-"===k&&n?r<=n:n?r===n:!!r;if(!k)break}while(d--)}if(k)break}}while(e--);return l?!k:k},B=function(){var b=c.innerWidth||w.clientWidth,a=c.innerHeight||w.clientHeight,e=c.screen.width,j=c.screen.height,g=c.screen.colorDepth,d=c.devicePixelRatio;h.width=b;h.height=a;h["aspect-ratio"]=(b/a).toFixed(2);h["device-width"]=e;h["device-height"]=j;h["device-aspect-ratio"]=(e/j).toFixed(2);h.color=g;h["color-index"]=Math.pow(2,g);h.orientation=a>=b?"portrait":"landscape";h.resolution=
d&&96*d||c.screen.deviceXDPI||96;h["device-pixel-ratio"]=d||1},C=function(){clearTimeout(y);y=setTimeout(function(){var b=null,a=t-1,e=a,j=!1;if(0<=a){B();do if(b=l[e-a])if((j=A(b.mql.media))&&!b.mql.matches||!j&&b.mql.matches)if(b.mql.matches=j,b.listeners)for(var j=0,g=b.listeners.length;j<g;j++)b.listeners[j]&&b.listeners[j].call(c,b.mql);while(a--)}},10)},D=a.getElementsByTagName("head")[0],a=a.createElement("style"),E=null,u="screen print speech projection handheld tv braille embossed tty".split(" "),
m=0,I=u.length,s="#mediamatchjs { position: relative; z-index: 0; }",v="",F=c.addEventListener||(v="on")&&c.attachEvent;a.type="text/css";a.id="mediamatchjs";D.appendChild(a);for(E=c.getComputedStyle&&c.getComputedStyle(a)||a.currentStyle;m<I;m++)s+="@media "+u[m]+" { #mediamatchjs { position: relative; z-index: "+m+" } }";a.styleSheet?a.styleSheet.cssText=s:a.textContent=s;x=u[1*E.zIndex||0];D.removeChild(a);B();F(v+"resize",C);F(v+"orientationchange",C);return function(a){var c=t,e={matches:!1,
media:a,addListener:function(a){l[c].listeners||(l[c].listeners=[]);a&&l[c].listeners.push(a)},removeListener:function(a){var b=l[c],d=0,e=0;if(b)for(e=b.listeners.length;d<e;d++)b.listeners[d]===a&&b.listeners.splice(d,1)}};if(""===a)return e.matches=!0,e;e.matches=A(a);t=l.push({mql:e,listeners:null});return e}}(window));

!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function t(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(e){}}function r(n,o){var i=u.raw?n:t(n);return e.isFunction(o)?o(i):i}var c=/\+/g,u=e.cookie=function(t,c,s){if(arguments.length>1&&!e.isFunction(c)){if("number"==typeof(s=e.extend({},u.defaults,s)).expires){var d=s.expires,f=s.expires=new Date;f.setMilliseconds(f.getMilliseconds()+864e5*d)}return document.cookie=[n(t),"=",i(c),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var a=t?void 0:{},p=document.cookie?document.cookie.split("; "):[],l=0,m=p.length;l<m;l++){var x=p[l].split("="),g=o(x.shift()),j=x.join("=");if(t===g){a=r(j,c);break}t||void 0===(j=r(j))||(a[g]=j)}return a};u.defaults={},e.removeCookie=function(n,o){return e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n)}});
function floatToString(t,e){var o=t.toFixed(e).toString();return o.match(/^\.\d+/)?"0"+o:o}"undefined"==typeof window.Shopify&&(window.Shopify={}),Shopify.each=function(t,e){for(var o=0;o<t.length;o++)e(t[o],o)},Shopify.map=function(t,e){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],i));return o},Shopify.arrayIncludes=function(t,e){for(var o=0;o<t.length;o++)if(t[o]==e)return!0;return!1},Shopify.uniq=function(t){for(var e=[],o=0;o<t.length;o++)Shopify.arrayIncludes(e,t[o])||e.push(t[o]);return e},Shopify.isDefined=function(t){return void 0!==t},Shopify.getClass=function(t){return Object.prototype.toString.call(t).slice(8,-1)},Shopify.extend=function(t,e){function o(){}o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t,t.baseConstructor=e,t.superClass=e.prototype},Shopify.locationSearch=function(){return window.location.search},Shopify.locationHash=function(){return window.location.hash},Shopify.replaceState=function(t){window.history.replaceState({},document.title,t)},Shopify.urlParam=function(t){var e=RegExp("[?&]"+t+"=([^&#]*)").exec(Shopify.locationSearch());return e&&decodeURIComponent(e[1].replace(/\+/g," "))},Shopify.newState=function(t,e){return(Shopify.urlParam(t)?Shopify.locationSearch().replace(RegExp("("+t+"=)[^&#]+"),"$1"+e):""===Shopify.locationSearch()?"?"+t+"="+e:Shopify.locationSearch()+"&"+t+"="+e)+Shopify.locationHash()},Shopify.setParam=function(t,e){Shopify.replaceState(Shopify.newState(t,e))},Shopify.Product=function(t){Shopify.isDefined(t)&&this.update(t)},Shopify.Product.prototype.update=function(t){for(property in t)this[property]=t[property]},Shopify.Product.prototype.optionNames=function(){return"Array"==Shopify.getClass(this.options)?this.options:[]},Shopify.Product.prototype.optionValues=function(t){if(!Shopify.isDefined(this.variants))return null;var e=Shopify.map(this.variants,function(e){var o="option"+(t+1);return e[o]==undefined?null:e[o]});return null==e[0]?null:Shopify.uniq(e)},Shopify.Product.prototype.getVariant=function(t){var e=null;return t.length!=this.options.length?e:(Shopify.each(this.variants,function(o){for(var i=!0,r=0;r<t.length;r++){o["option"+(r+1)]!=t[r]&&(i=!1)}if(1==i)return void(e=o)}),e)},Shopify.Product.prototype.getVariantById=function(t){for(var e=0;e<this.variants.length;e++){var o=this.variants[e];if(t==o.id)return o}return null},Shopify.money_format="${{amount}}",Shopify.formatMoney=function(t,e){function o(t,e){return void 0===t?e:t}function i(t,e,i,r){if(e=o(e,2),i=o(i,","),r=o(r,"."),isNaN(t)||null==t)return 0;t=(t/100).toFixed(e);var n=t.split(".");return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+i)+(n[1]?r+n[1]:"")}"string"==typeof t&&(t=t.replace(".",""));var r="",n=/\{\{\s*(\w+)\s*\}\}/,a=e||this.money_format;switch(a.match(n)[1]){case"amount":r=i(t,2);break;case"amount_no_decimals":r=i(t,0);break;case"amount_with_comma_separator":r=i(t,2,".",",");break;case"amount_with_space_separator":r=i(t,2," ",",");break;case"amount_with_period_and_space_separator":r=i(t,2," ",".");break;case"amount_no_decimals_with_comma_separator":r=i(t,0,".",",");break;case"amount_no_decimals_with_space_separator":r=i(t,0," ");break;case"amount_with_apostrophe_separator":r=i(t,2,"'",".")}return a.replace(n,r)},Shopify.OptionSelectors=function(t,e){return this.selectorDivClass="selector-wrapper",this.selectorClass="single-option-selector",this.variantIdFieldIdSuffix="-variant-id",this.variantIdField=null,this.historyState=null,this.selectors=[],this.domIdPrefix=t,this.product=new Shopify.Product(e.product),this.onVariantSelected=Shopify.isDefined(e.onVariantSelected)?e.onVariantSelected:function(){},this.replaceSelector(t),this.initDropdown(),e.enableHistoryState&&(this.historyState=new Shopify.OptionSelectors.HistoryState(this)),!0},Shopify.OptionSelectors.prototype.initDropdown=function(){var t={initialLoad:!0};if(!this.selectVariantFromDropdown(t)){var e=this;setTimeout(function(){e.selectVariantFromParams(t)||e.fireOnChangeForFirstDropdown.call(e,t)})}},Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown=function(t){this.selectors[0].element.onchange(t)},Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown=function(t){this.selectVariantFromParams(t)||this.selectVariantFromDropdown(t)},Shopify.OptionSelectors.prototype.replaceSelector=function(t){var e=document.getElementById(t),o=e.parentNode;Shopify.each(this.buildSelectors(),function(t){o.insertBefore(t,e)}),e.style.display="none",this.variantIdField=e},Shopify.OptionSelectors.prototype.selectVariantFromDropdown=function(t){var e=document.getElementById(this.domIdPrefix).querySelector("[selected]");if(e||(e=document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')),!e)return!1;var o=e.value;return this.selectVariant(o,t)},Shopify.OptionSelectors.prototype.selectVariantFromParams=function(t){var e=Shopify.urlParam("variant");return this.selectVariant(e,t)},Shopify.OptionSelectors.prototype.selectVariant=function(t,e){var o=this.product.getVariantById(t);if(null==o)return!1;for(var i=0;i<this.selectors.length;i++){var r=this.selectors[i].element,n=r.getAttribute("data-option"),a=o[n];null!=a&&this.optionExistInSelect(r,a)&&(r.value=a)}return"undefined"!=typeof jQuery?jQuery(this.selectors[0].element).trigger("change",e):this.selectors[0].element.onchange(e),!0},Shopify.OptionSelectors.prototype.optionExistInSelect=function(t,e){for(var o=0;o<t.options.length;o++)if(t.options[o].value==e)return!0},Shopify.OptionSelectors.prototype.insertSelectors=function(t,e){Shopify.isDefined(e)&&this.setMessageElement(e),this.domIdPrefix="product-"+this.product.id+"-variant-selector";var o=document.getElementById(t);Shopify.each(this.buildSelectors(),function(t){o.appendChild(t)})},Shopify.OptionSelectors.prototype.buildSelectors=function(){for(var t=0;t<this.product.optionNames().length;t++){var e=new Shopify.SingleOptionSelector(this,t,this.product.optionNames()[t],this.product.optionValues(t));e.element.disabled=!1,this.selectors.push(e)}var o=this.selectorDivClass,i=this.product.optionNames();return Shopify.map(this.selectors,function(t){var e=document.createElement("div");if(e.setAttribute("class",o),i.length>1){var r=document.createElement("label");r.htmlFor=t.element.id,r.innerHTML=t.name,e.appendChild(r)}return e.appendChild(t.element),e})},Shopify.OptionSelectors.prototype.selectedValues=function(){for(var t=[],e=0;e<this.selectors.length;e++){var o=this.selectors[e].element.value;t.push(o)}return t},Shopify.OptionSelectors.prototype.updateSelectors=function(t,e){var o=this.selectedValues(),i=this.product.getVariant(o);i?(this.variantIdField.disabled=!1,this.variantIdField.value=i.id):this.variantIdField.disabled=!0,this.onVariantSelected(i,this,e),null!=this.historyState&&this.historyState.onVariantChange(i,this,e)},Shopify.OptionSelectorsFromDOM=function(t,e){var o=e.optionNames||[],i=e.priceFieldExists||!0,r=e.delimiter||"/",n=this.createProductFromSelector(t,o,i,r);e.product=n,Shopify.OptionSelectorsFromDOM.baseConstructor.call(this,t,e)},Shopify.extend(Shopify.OptionSelectorsFromDOM,Shopify.OptionSelectors),Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector=function(t,e,o,i){if(!Shopify.isDefined(o))var o=!0;if(!Shopify.isDefined(i))var i="/";var r=document.getElementById(t),n=r.childNodes,a=(r.parentNode,e.length),s=[];Shopify.each(n,function(t){if(1==t.nodeType&&"option"==t.tagName.toLowerCase()){var r=t.innerHTML.split(new RegExp("\\s*\\"+i+"\\s*"));0==e.length&&(a=r.length-(o?1:0));var n=r.slice(0,a),p=o?r[a]:"",l=(t.getAttribute("value"),{available:!t.disabled,id:parseFloat(t.value),price:p,option1:n[0],option2:n[1],option3:n[2]});s.push(l)}});var p={variants:s};if(0==e.length){p.options=[];for(var l=0;l<a;l++)p.options[l]="option "+(l+1)}else p.options=e;return p},Shopify.SingleOptionSelector=function(t,e,o,i){this.multiSelector=t,this.values=i,this.index=e,this.name=o,this.element=document.createElement("select");for(var r=0;r<i.length;r++){var n=document.createElement("option");n.value=i[r],n.innerHTML=i[r],this.element.appendChild(n)}return this.element.setAttribute("class",this.multiSelector.selectorClass),this.element.setAttribute("data-option","option"+(e+1)),this.element.id=t.domIdPrefix+"-option-"+e,this.element.onchange=function(o,i){i=i||{},t.updateSelectors(e,i)},!0},Shopify.Image={preload:function(t,e){for(var o=0;o<t.length;o++){var i=t[o];this.loadImage(this.getSizedImageUrl(i,e))}},loadImage:function(t){(new Image).src=t},switchImage:function(t,e,o){if(t&&e){var i=this.imageSize(e.src),r=this.getSizedImageUrl(t.src,i);o?o(r,t,e):e.src=r}},imageSize:function(t){var e=t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);return null!==e?e[1]:null},getSizedImageUrl:function(t,e){if(null==e)return t;if("master"==e)return this.removeProtocol(t);var o=t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null!=o){var i=t.split(o[0]),r=o[0];return this.removeProtocol(i[0]+"_"+e+r)}return null},removeProtocol:function(t){return t.replace(/http(s)?:/,"")}},Shopify.OptionSelectors.HistoryState=function(t){this.browserSupports()&&this.register(t)},Shopify.OptionSelectors.HistoryState.prototype.register=function(t){window.addEventListener("popstate",function(){t.selectVariantFromParamsOrDropdown({popStateCall:!0})})},Shopify.OptionSelectors.HistoryState.prototype.onVariantChange=function(t,e,o){this.browserSupports()&&(!t||o.initialLoad||o.popStateCall||Shopify.setParam("variant",t.id))},Shopify.OptionSelectors.HistoryState.prototype.browserSupports=function(){return window.history&&window.history.replaceState};
function floatToString(t,r){var e=t.toFixed(r).toString();return e.match(/^\.\d+/)?"0"+e:e}function attributeToString(t){return"string"!=typeof t&&"undefined"===(t+="")&&(t=""),jQuery.trim(t)}"undefined"==typeof window.Shopify&&(window.Shopify={}),Shopify.money_format="${{amount}}",Shopify.onError=function(t,r){var e=eval("("+t.responseText+")");e.message?alert(e.message+"("+e.status+"): "+e.description):alert("Error : "+Shopify.fullMessagesFromErrors(e).join("; ")+".")},Shopify.fullMessagesFromErrors=function(t){var r=[];return jQuery.each(t,function(t,e){jQuery.each(e,function(e,a){r.push(t+" "+a)})}),r},Shopify.onCartUpdate=function(t){alert("There are now "+t.item_count+" items in the cart.")},Shopify.onCartShippingRatesUpdate=function(t,r){var e="";r.zip&&(e+=r.zip+", "),r.province&&(e+=r.province+", "),e+=r.country,alert("There are "+t.length+" shipping rates available for "+e+", starting at "+Shopify.formatMoney(t[0].price)+".")},Shopify.onItemAdded=function(t){alert(t.title+" was added to your shopping cart.")},Shopify.onProduct=function(t){alert("Received everything we ever wanted to know about "+t.title)},Shopify.formatMoney=function(t,r){function e(t,r){return void 0===t?r:t}function a(t,r,a,o){if(r=e(r,2),a=e(a,","),o=e(o,"."),isNaN(t)||null==t)return 0;t=(t/100).toFixed(r);var n=t.split(".");return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+a)+(n[1]?o+n[1]:"")}"string"==typeof t&&(t=t.replace(".",""));var o="",n=/\{\{\s*(\w+)\s*\}\}/,i=r||this.money_format;switch(i.match(n)[1]){case"amount":o=a(t,2);break;case"amount_no_decimals":o=a(t,0);break;case"amount_with_comma_separator":o=a(t,2,".",",");break;case"amount_with_space_separator":o=a(t,2," ",",");break;case"amount_with_period_and_space_separator":o=a(t,2," ",".");break;case"amount_no_decimals_with_comma_separator":o=a(t,0,".",",");break;case"amount_no_decimals_with_space_separator":o=a(t,0,".","");break;case"amount_with_space_separator":o=a(t,2,",","");break;case"amount_with_apostrophe_separator":o=a(t,2,"'",".")}return i.replace(n,o)},Shopify.resizeImage=function(t,r){try{if("original"==r)return t;var e=t.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);return e[1]+"_"+r+"."+e[2]}catch(r){return t}},Shopify.addItem=function(t,r,e){var r=r||1,a={type:"POST",url:"/cart/add.js",data:"quantity="+r+"&id="+t,dataType:"json",success:function(t){"function"==typeof e?e(t):Shopify.onItemAdded(t)},error:function(t,r){Shopify.onError(t,r)}};jQuery.ajax(a)},Shopify.addItemFromForm=function(t,r){var e={type:"POST",url:"/cart/add.js",data:jQuery("#"+t).serialize(),dataType:"json",success:function(t){"function"==typeof r?r(t):Shopify.onItemAdded(t)},error:function(t,r){Shopify.onError(t,r)}};jQuery.ajax(e)},Shopify.getCart=function(t){jQuery.getJSON("/cart.js",function(r){"function"==typeof t?t(r):Shopify.onCartUpdate(r)})},Shopify.pollForCartShippingRatesForDestination=function(t,r,e){e=e||Shopify.onError;var a=function(){jQuery.ajax("/cart/async_shipping_rates",{dataType:"json",success:function(e,o,n){200===n.status?"function"==typeof r?r(e.shipping_rates,t):Shopify.onCartShippingRatesUpdate(e.shipping_rates,t):setTimeout(a,500)},error:e})};return a},Shopify.getCartShippingRatesForDestination=function(t,r,e){e=e||Shopify.onError;var a={type:"POST",url:"/cart/prepare_shipping_rates",data:Shopify.param({shipping_address:t}),success:Shopify.pollForCartShippingRatesForDestination(t,r,e),error:e};jQuery.ajax(a)},Shopify.getProduct=function(t,r){jQuery.getJSON("/products/"+t+".js",function(t){"function"==typeof r?r(t):Shopify.onProduct(t)})},Shopify.changeItem=function(t,r,e){var a={type:"POST",url:"/cart/change.js",data:"quantity="+r+"&id="+t,dataType:"json",success:function(t){"function"==typeof e?e(t):Shopify.onCartUpdate(t)},error:function(t,r){Shopify.onError(t,r)}};jQuery.ajax(a)},Shopify.removeItem=function(t,r){var e={type:"POST",url:"/cart/change.js",data:"quantity=0&id="+t,dataType:"json",success:function(t){"function"==typeof r?r(t):Shopify.onCartUpdate(t)},error:function(t,r){Shopify.onError(t,r)}};jQuery.ajax(e)},Shopify.clear=function(t){var r={type:"POST",url:"/cart/clear.js",data:"",dataType:"json",success:function(r){"function"==typeof t?t(r):Shopify.onCartUpdate(r)},error:function(t,r){Shopify.onError(t,r)}};jQuery.ajax(r)},Shopify.updateCartFromForm=function(t,r){var e={type:"POST",url:"/cart/update.js",data:jQuery("#"+t).serialize(),dataType:"json",success:function(t){"function"==typeof r?r(t):Shopify.onCartUpdate(t)},error:function(t,r){Shopify.onError(t,r)}};jQuery.ajax(e)},Shopify.updateCartAttributes=function(t,r){var e="";jQuery.isArray(t)?jQuery.each(t,function(t,r){var a=attributeToString(r.key);""!==a&&(e+="attributes["+a+"]="+attributeToString(r.value)+"&")}):"object"==typeof t&&null!==t&&jQuery.each(t,function(t,r){e+="attributes["+attributeToString(t)+"]="+attributeToString(r)+"&"});var a={type:"POST",url:"/cart/update.js",data:e,dataType:"json",success:function(t){"function"==typeof r?r(t):Shopify.onCartUpdate(t)},error:function(t,r){Shopify.onError(t,r)}};jQuery.ajax(a)},Shopify.updateCartNote=function(t,r){var e={type:"POST",url:"/cart/update.js",data:"note="+attributeToString(t),dataType:"json",success:function(t){"function"==typeof r?r(t):Shopify.onCartUpdate(t)},error:function(t,r){Shopify.onError(t,r)}};jQuery.ajax(e)},jQuery.fn.jquery>="1.4"?Shopify.param=jQuery.param:(Shopify.param=function(t){var r=[],e=function(t,e){e=jQuery.isFunction(e)?e():e,r[r.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)};if(jQuery.isArray(t)||t.jquery)jQuery.each(t,function(){e(this.name,this.value)});else for(var a in t)Shopify.buildParams(a,t[a],e);return r.join("&").replace(/%20/g,"+")},Shopify.buildParams=function(t,r,e){jQuery.isArray(r)&&r.length?jQuery.each(r,function(r,a){rbracket.test(t)?e(t,a):Shopify.buildParams(t+"["+("object"==typeof a||jQuery.isArray(a)?r:"")+"]",a,e)}):null!=r&&"object"==typeof r?Shopify.isEmptyObject(r)?e(t,""):jQuery.each(r,function(r,a){Shopify.buildParams(t+"["+r+"]",a,e)}):e(t,r)},Shopify.isEmptyObject=function(t){for(var r in t)return!1;return!0});
/*
 * Currency tools
 *
 * Copyright (c) 2015 Caroline Schnapp (mllegeorgesand@gmail.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if (typeof CdzCurrency === "undefined") {
    var CdzCurrency = {}
}
CdzCurrency.rates = Currency.rates;
CdzCurrency.cookie = {
    configuration: {
        expires: 365,
        path: "/",
        domain: window.location.hostname
    },
    name: "currency",
  	cookieFunc : $.cookie,
    write: function(a) {
        try {
            this.cookieFunc(this.name, a, this.configuration);
        } catch (err) {
        }
    },
    read: function() {
        try {
            return this.cookieFunc(this.name);    
        } catch (err) {
        }
    },
    destroy: function() {
        this.cookieFunc(this.name, null, this.configuration)
    }
};

CdzCurrency.moneyFormats = {
    USD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} USD"
    },
    EUR: {
        money_format: "&euro;{{amount}}",
        money_with_currency_format: "&euro;{{amount}} EUR"
    },
    GBP: {
        money_format: "&pound;{{amount}}",
        money_with_currency_format: "&pound;{{amount}} GBP"
    },
    CAD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} CAD"
    },
    ALL: {
        money_format: "Lek {{amount}}",
        money_with_currency_format: "Lek {{amount}} ALL"
    },
    DZD: {
        money_format: "DA {{amount}}",
        money_with_currency_format: "DA {{amount}} DZD"
    },
    AOA: {
        money_format: "Kz{{amount}}",
        money_with_currency_format: "Kz{{amount}} AOA"
    },
    ARS: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} ARS"
    },
    AMD: {
        money_format: "{{amount}} AMD",
        money_with_currency_format: "{{amount}} AMD"
    },
    AWG: {
        money_format: "Afl{{amount}}",
        money_with_currency_format: "Afl{{amount}} AWG"
    },
    AUD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} AUD"
    },
    BBD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} Bds"
    },
    AZN: {
        money_format: "m.{{amount}}",
        money_with_currency_format: "m.{{amount}} AZN"
    },
    BDT: {
        money_format: "Tk {{amount}}",
        money_with_currency_format: "Tk {{amount}} BDT"
    },
    BSD: {
        money_format: "BS${{amount}}",
        money_with_currency_format: "BS${{amount}} BSD"
    },
    BHD: {
        money_format: "{{amount}}0 BD",
        money_with_currency_format: "{{amount}}0 BHD"
    },
    BYR: {
        money_format: "Br {{amount}}",
        money_with_currency_format: "Br {{amount}} BYR"
    },
    BZD: {
        money_format: "BZ${{amount}}",
        money_with_currency_format: "BZ${{amount}} BZD"
    },
    BTN: {
        money_format: "Nu {{amount}}",
        money_with_currency_format: "Nu {{amount}} BTN"
    },
    BAM: {
        money_format: "KM {{amount_with_comma_separator}}",
        money_with_currency_format: "KM {{amount_with_comma_separator}} BAM"
    },
    BRL: {
        money_format: "R$ {{amount_with_comma_separator}}",
        money_with_currency_format: "R$ {{amount_with_comma_separator}} BRL"
    },
    BOB: {
        money_format: "Bs{{amount_with_comma_separator}}",
        money_with_currency_format: "Bs{{amount_with_comma_separator}} BOB"
    },
    BWP: {
        money_format: "P{{amount}}",
        money_with_currency_format: "P{{amount}} BWP"
    },
    BND: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} BND"
    },
    BGN: {
        money_format: "{{amount}} лв",
        money_with_currency_format: "{{amount}} лв BGN"
    },
    MMK: {
        money_format: "K{{amount}}",
        money_with_currency_format: "K{{amount}} MMK"
    },
    KHR: {
        money_format: "KHR{{amount}}",
        money_with_currency_format: "KHR{{amount}}"
    },
    KYD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} KYD"
    },
    XAF: {
        money_format: "FCFA{{amount}}",
        money_with_currency_format: "FCFA{{amount}} XAF"
    },
    CLP: {
        money_format: "${{amount_no_decimals}}",
        money_with_currency_format: "${{amount_no_decimals}} CLP"
    },
    CNY: {
        money_format: "&#165;{{amount}}",
        money_with_currency_format: "&#165;{{amount}} CNY"
    },
    COP: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} COP"
    },
    CRC: {
        money_format: "&#8353; {{amount_with_comma_separator}}",
        money_with_currency_format: "&#8353; {{amount_with_comma_separator}} CRC"
    },
    HRK: {
        money_format: "{{amount_with_comma_separator}} kn",
        money_with_currency_format: "{{amount_with_comma_separator}} kn HRK"
    },
    CZK: {
        money_format: "{{amount_with_comma_separator}} K&#269;",
        money_with_currency_format: "{{amount_with_comma_separator}} K&#269;"
    },
    DKK: {
        money_format: "{{amount_with_comma_separator}}",
        money_with_currency_format: "kr.{{amount_with_comma_separator}}"
    },
    DOP: {
        money_format: "RD$ {{amount}}",
        money_with_currency_format: "RD$ {{amount}}"
    },
    XCD: {
        money_format: "${{amount}}",
        money_with_currency_format: "EC${{amount}}"
    },
    EGP: {
        money_format: "LE {{amount}}",
        money_with_currency_format: "LE {{amount}} EGP"
    },
    ETB: {
        money_format: "Br{{amount}}",
        money_with_currency_format: "Br{{amount}} ETB"
    },
    XPF: {
        money_format: "{{amount_no_decimals_with_comma_separator}} XPF",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} XPF"
    },
    FJD: {
        money_format: "${{amount}}",
        money_with_currency_format: "FJ${{amount}}"
    },
    GMD: {
        money_format: "D {{amount}}",
        money_with_currency_format: "D {{amount}} GMD"
    },
    GHS: {
        money_format: "GH&#8373;{{amount}}",
        money_with_currency_format: "GH&#8373;{{amount}}"
    },
    GTQ: {
        money_format: "Q{{amount}}",
        money_with_currency_format: "{{amount}} GTQ"
    },
    GYD: {
        money_format: "G${{amount}}",
        money_with_currency_format: "${{amount}} GYD"
    },
    GEL: {
        money_format: "{{amount}} GEL",
        money_with_currency_format: "{{amount}} GEL"
    },
    HNL: {
        money_format: "L {{amount}}",
        money_with_currency_format: "L {{amount}} HNL"
    },
    HKD: {
        money_format: "${{amount}}",
        money_with_currency_format: "HK${{amount}}"
    },
    HUF: {
        money_format: "{{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} Ft"
    },
    ISK: {
        money_format: "{{amount_no_decimals}} kr",
        money_with_currency_format: "{{amount_no_decimals}} kr ISK"
    },
    INR: {
        money_format: "Rs. {{amount}}",
        money_with_currency_format: "Rs. {{amount}}"
    },
    IDR: {
        money_format: "{{amount_with_comma_separator}}",
        money_with_currency_format: "Rp {{amount_with_comma_separator}}"
    },
    ILS: {
        money_format: "{{amount}} NIS",
        money_with_currency_format: "{{amount}} NIS"
    },
    JMD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} JMD"
    },
    JPY: {
        money_format: "&#165;{{amount_no_decimals}}",
        money_with_currency_format: "&#165;{{amount_no_decimals}} JPY"
    },
    JEP: {
        money_format: "&pound;{{amount}}",
        money_with_currency_format: "&pound;{{amount}} JEP"
    },
    JOD: {
        money_format: "{{amount}}0 JD",
        money_with_currency_format: "{{amount}}0 JOD"
    },
    KZT: {
        money_format: "{{amount}} KZT",
        money_with_currency_format: "{{amount}} KZT"
    },
    KES: {
        money_format: "KSh{{amount}}",
        money_with_currency_format: "KSh{{amount}}"
    },
    KWD: {
        money_format: "{{amount}}0 KD",
        money_with_currency_format: "{{amount}}0 KWD"
    },
    KGS: {
        money_format: "лв{{amount}}",
        money_with_currency_format: "лв{{amount}}"
    },
    LVL: {
        money_format: "Ls {{amount}}",
        money_with_currency_format: "Ls {{amount}} LVL"
    },
    LBP: {
        money_format: "L&pound;{{amount}}",
        money_with_currency_format: "L&pound;{{amount}} LBP"
    },
    LTL: {
        money_format: "{{amount}} Lt",
        money_with_currency_format: "{{amount}} Lt"
    },
    MGA: {
        money_format: "Ar {{amount}}",
        money_with_currency_format: "Ar {{amount}} MGA"
    },
    MKD: {
        money_format: "ден {{amount}}",
        money_with_currency_format: "ден {{amount}} MKD"
    },
    MOP: {
        money_format: "MOP${{amount}}",
        money_with_currency_format: "MOP${{amount}}"
    },
    MVR: {
        money_format: "Rf{{amount}}",
        money_with_currency_format: "Rf{{amount}} MRf"
    },
    MXN: {
        money_format: "$ {{amount}}",
        money_with_currency_format: "$ {{amount}} MXN"
    },
    MYR: {
        money_format: "RM{{amount}} MYR",
        money_with_currency_format: "RM{{amount}} MYR"
    },
    MUR: {
        money_format: "Rs {{amount}}",
        money_with_currency_format: "Rs {{amount}} MUR"
    },
    MDL: {
        money_format: "{{amount}} MDL",
        money_with_currency_format: "{{amount}} MDL"
    },
    MAD: {
        money_format: "{{amount}} dh",
        money_with_currency_format: "Dh {{amount}} MAD"
    },
    MNT: {
        money_format: "{{amount_no_decimals}} &#8366",
        money_with_currency_format: "{{amount_no_decimals}} MNT"
    },
    MZN: {
        money_format: "{{amount}} Mt",
        money_with_currency_format: "Mt {{amount}} MZN"
    },
    NAD: {
        money_format: "N${{amount}}",
        money_with_currency_format: "N${{amount}} NAD"
    },
    NPR: {
        money_format: "Rs{{amount}}",
        money_with_currency_format: "Rs{{amount}} NPR"
    },
    ANG: {
        money_format: "&fnof;{{amount}}",
        money_with_currency_format: "{{amount}} NA&fnof;"
    },
    NZD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} NZD"
    },
    NIO: {
        money_format: "C${{amount}}",
        money_with_currency_format: "C${{amount}} NIO"
    },
    NGN: {
        money_format: "&#8358;{{amount}}",
        money_with_currency_format: "&#8358;{{amount}} NGN"
    },
    NOK: {
        money_format: "kr {{amount_with_comma_separator}}",
        money_with_currency_format: "kr {{amount_with_comma_separator}} NOK"
    },
    OMR: {
        money_format: "{{amount_with_comma_separator}} OMR",
        money_with_currency_format: "{{amount_with_comma_separator}} OMR"
    },
    PKR: {
        money_format: "Rs.{{amount}}",
        money_with_currency_format: "Rs.{{amount}} PKR"
    },
    PGK: {
        money_format: "K {{amount}}",
        money_with_currency_format: "K {{amount}} PGK"
    },
    PYG: {
        money_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "Gs. {{amount_no_decimals_with_comma_separator}} PYG"
    },
    PEN: {
        money_format: "S/. {{amount}}",
        money_with_currency_format: "S/. {{amount}} PEN"
    },
    PHP: {
        money_format: "&#8369;{{amount}}",
        money_with_currency_format: "&#8369;{{amount}} PHP"
    },
    PLN: {
        money_format: "{{amount_with_comma_separator}} zl",
        money_with_currency_format: "{{amount_with_comma_separator}} zl PLN"
    },
    QAR: {
        money_format: "QAR {{amount_with_comma_separator}}",
        money_with_currency_format: "QAR {{amount_with_comma_separator}}"
    },
    RON: {
        money_format: "{{amount_with_comma_separator}} lei",
        money_with_currency_format: "{{amount_with_comma_separator}} lei RON"
    },
    RUB: {
        money_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
        money_with_currency_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"
    },
    RWF: {
        money_format: "{{amount_no_decimals}} RF",
        money_with_currency_format: "{{amount_no_decimals}} RWF"
    },
    WST: {
        money_format: "WS$ {{amount}}",
        money_with_currency_format: "WS$ {{amount}} WST"
    },
    SAR: {
        money_format: "{{amount}} SR",
        money_with_currency_format: "{{amount}} SAR"
    },
    STD: {
        money_format: "Db {{amount}}",
        money_with_currency_format: "Db {{amount}} STD"
    },
    RSD: {
        money_format: "{{amount}} RSD",
        money_with_currency_format: "{{amount}} RSD"
    },
    SCR: {
        money_format: "Rs {{amount}}",
        money_with_currency_format: "Rs {{amount}} SCR"
    },
    SGD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} SGD"
    },
    SYP: {
        money_format: "S&pound;{{amount}}",
        money_with_currency_format: "S&pound;{{amount}} SYP"
    },
    ZAR: {
        money_format: "R {{amount}}",
        money_with_currency_format: "R {{amount}} ZAR"
    },
    KRW: {
        money_format: "&#8361;{{amount_no_decimals}}",
        money_with_currency_format: "&#8361;{{amount_no_decimals}} KRW"
    },
    LKR: {
        money_format: "Rs {{amount}}",
        money_with_currency_format: "Rs {{amount}} LKR"
    },
    SEK: {
        money_format: "{{amount_no_decimals}} kr",
        money_with_currency_format: "{{amount_no_decimals}} kr SEK"
    },
    CHF: {
        money_format: "SFr. {{amount}}",
        money_with_currency_format: "SFr. {{amount}} CHF"
    },
    TWD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} TWD"
    },
    THB: {
        money_format: "{{amount}} &#xe3f;",
        money_with_currency_format: "{{amount}} &#xe3f; THB"
    },
    TZS: {
        money_format: "{{amount}} TZS",
        money_with_currency_format: "{{amount}} TZS"
    },
    TTD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} TTD"
    },
    TND: {
        money_format: "{{amount}}",
        money_with_currency_format: "{{amount}} DT"
    },
    TRY: {
        money_format: "{{amount}}TL",
        money_with_currency_format: "{{amount}}TL"
    },
    UGX: {
        money_format: "Ush {{amount_no_decimals}}",
        money_with_currency_format: "Ush {{amount_no_decimals}} UGX"
    },
    UAH: {
        money_format: "₴{{amount}}",
        money_with_currency_format: "₴{{amount}} UAH"
    },
    AED: {
        money_format: "Dhs. {{amount}}",
        money_with_currency_format: "Dhs. {{amount}} AED"
    },
    UYU: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} UYU"
    },
    VUV: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}}VT"
    },
    VEF: {
        money_format: "Bs. {{amount_with_comma_separator}}",
        money_with_currency_format: "Bs. {{amount_with_comma_separator}} VEF"
    },
    VND: {
        money_format: "{{amount_no_decimals_with_comma_separator}}&#8363;",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} VND"
    },
    XBT: {
        money_format: "{{amount_no_decimals}} BTC",
        money_with_currency_format: "{{amount_no_decimals}} BTC"
    },
    XOF: {
        money_format: "CFA{{amount}}",
        money_with_currency_format: "CFA{{amount}} XOF"
    },
    ZMW: {
        money_format: "K{{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "ZMW{{amount_no_decimals_with_comma_separator}}"
    }
};
CdzCurrency.formatMoney = function(b, g) {
    if (typeof Shopify.formatMoney === "function") {
        return Shopify.formatMoney(b, g)
    }
    if (typeof b == "string") {
        b = b.replace(".", "")
    }
    var f = "";
    var e = /\{\{\s*(\w+)\s*\}\}/;
    var a = g || "${{amount}}";

    function c(h, i) {
        return (typeof h == "undefined" ? i : h)
    }

    function d(m, k, l, j) {
        k = c(k, 2);
        l = c(l, ",");
        j = c(j, ".");
        if (isNaN(m) || m == null) {
            return 0
        }
        m = (m / 100).toFixed(k);
        var n = m.split("."),
            i = n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + l),
            h = n[1] ? (j + n[1]) : "";
        return i + h
    }
    switch (a.match(e)[1]) {
        case "amount":
            f = d(b, 2);
            break;
        case "amount_no_decimals":
            f = d(b, 0);
            break;
        case "amount_with_comma_separator":
            f = d(b, 2, ".", ",");
            break;
        case "amount_no_decimals_with_comma_separator":
            f = d(b, 0, ".", ",");
            break
    }
    return a.replace(e, f)
};
CdzCurrency.currentCurrency = "";
CdzCurrency.format = "money_with_currency_format";
CdzCurrency.convertAll = function(c, b, a, d) {
    jQuery(a || "span.price, s.price").each(function() {
        if (jQuery(this).attr("data-currency") === b) {
            return
        }
        if (jQuery(this).attr("data-currency-" + b)) {
            jQuery(this).html(jQuery(this).attr("data-currency-" + b))
        } else {
            var e = 0;
            var f = CdzCurrency.moneyFormats[c][d || CdzCurrency.format] || "{{amount}}";
            var g = CdzCurrency.moneyFormats[b][d || CdzCurrency.format] || "{{amount}}";
            if (f.indexOf("amount_no_decimals") !== -1) {
                e = CdzCurrency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ""), 10) * 100, c, b)
            } else {
                if (c === "JOD" || c == "KWD" || c == "BHD") {
                    e = CdzCurrency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ""), 10) / 10, c, b)
                } else {
                    e = CdzCurrency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ""), 10), c, b)
                }
            }
            var h = CdzCurrency.formatMoney(e, g);
            jQuery(this).html(h);
            jQuery(this).attr("data-currency-" + b, h)
        }
        jQuery(this).attr("data-currency", b)
    });
    this.currentCurrency = b;
    this.cookie.write(b)
};
CdzCurrency.convert = function(amount, from, to) {
    return (amount * this.rates[from]) / this.rates[to];
}

CdzCurrency.format = currencyFormat;

//var shopCurrency = '{{ shop.currency }}';

/* Sometimes merchants change their shop currency, let's tell our JavaScript file */
CdzCurrency.moneyFormats[shopCurrency].money_with_currency_format = moneyWithCurrencyFormat;
CdzCurrency.moneyFormats[shopCurrency].money_format = moneyFormat;
  
/* Default currency */
//var defaultCurrency = '{{ settings.default_currency | default: shop.currency }}';
  
/* Cookie currency */
var cookieCurrency;
try {cookieCurrency = CdzCurrency.cookie.read();} catch (err) {} // ignore errors reading cookies

/* Fix for customer account pages */
jQuery('span.money span.money').each(function() {
  jQuery(this).parents('span.money').removeClass('money');
});

/* Saving the current price */
jQuery('span.price').each(function() {
  jQuery(this).attr('data-currency-' + shopCurrency, jQuery(this).html());
});

// If there's no cookie.
if (cookieCurrency == null || cookieCurrency == undefined || cookieCurrency == 'undefined') {
  if (shopCurrency !== defaultCurrency) {
    CdzCurrency.convertAll(shopCurrency, defaultCurrency);
  }
  else {
    CdzCurrency.currentCurrency = defaultCurrency;
    try {CdzCurrency.cookie.write(defaultCurrency);} catch (err) {} // ignore errors reading cookies
  }
}
// If the cookie value does not correspond to any value in the currency dropdown.
else if (jQuery('.currency-picker').length && jQuery('.currency-picker option[value=' + cookieCurrency + ']').length === 0) {
  CdzCurrency.currentCurrency = shopCurrency;
  try {CdzCurrency.cookie.write(shopCurrency);} catch (err) {} // ignore errors reading cookies
}
else if (cookieCurrency === shopCurrency) {
  CdzCurrency.currentCurrency = shopCurrency;
}
else {
  CdzCurrency.convertAll(shopCurrency, cookieCurrency);
}
jQuery('.store-currency .cdz-trigger span:not(.icon-cdz)').html(CdzCurrency.currentCurrency);
//jQuery('.currency-picker option[value=' + CdzCurrency.currentCurrency + ']').attr('selected','selected');
jQuery(document).on('click', '.store-currency ul li a', function(e) {
  e.preventDefault();
  var newCurrency = jQuery(this).attr('data-code');
  CdzCurrency.convertAll(CdzCurrency.currentCurrency, newCurrency);
  jQuery('.store-currency .cdz-trigger span:not(.icon-cdz)').html(CdzCurrency.currentCurrency);
  $(this).parents('.cdz-dropdown').find('.cdz-trigger').trigger('click');
  //$('.store-currency ul li').show();
  //$(this).parent('li').hide();
});

var original_selectCallback = window.selectCallback;
var selectCallback = function(variant, selector) {
  original_selectCallback(variant, selector);
  CdzCurrency.convertAll(shopCurrency, jQuery('.store-currency ul li a.active').attr('data-code'));
  jQuery('.selected-currency').text(CdzCurrency.currentCurrency);
};

$('body').on('ajaxCart.afterCartLoad', function(cart) {
  CdzCurrency.convertAll(shopCurrency, jQuery('[name=currencies]').val());
  jQuery('.selected-currency').text(CdzCurrency.currentCurrency);  
});

jQuery('.selected-currency').text(CdzCurrency.currentCurrency);
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=f7f2053d4c68d767f42baad792ad7deb)
 * Config saved to config.json and https://gist.github.com/f7f2053d4c68d767f42baad792ad7deb
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.alert");n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.3.7",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var a=t("#"===s?[]:s);e&&e.preventDefault(),a.length||(a=n.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof e&&e;n||o.data("bs.button",n=new i(this,s)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.3.7",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data();e+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(t.proxy(function(){o[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i).prop(i,!0)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i).prop(i,!1))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target).closest(".btn");e.call(o,"toggle"),t(i.target).is('input[type="radio"], input[type="checkbox"]')||(i.preventDefault(),o.is("input,button")?o.trigger("focus"):o.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.carousel"),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),a="string"==typeof e?e:s.slide;n||o.data("bs.carousel",n=new i(this,s)),"number"==typeof e?n.to(e):a?n[a]():s.interval&&n.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.7",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),o="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(o&&!this.options.wrap)return e;var n="prev"==t?-1:1,s=(i+n)%this.$items.length;return this.$items.eq(s)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,o){var n=this.$element.find(".item.active"),s=o||this.getItemForDirection(e,n),a=this.interval,r="next"==e?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var h=s[0],d=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=t(this.$indicators.children()[this.getItemIndex(s)]);p&&p.addClass("active")}var c=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,n.addClass(r),s.addClass(r),n.one("bsTransitionEnd",function(){s.removeClass([e,r].join(" ")).addClass("active"),n.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(c)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(c)),a&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this};var n=function(i){var o,n=t(this),s=t(n.attr("data-target")||(o=n.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var a=t.extend({},s.data(),n.data()),r=n.attr("data-slide-to");r&&(a.interval=!1),e.call(s,a),r&&s.data("bs.carousel").to(r),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function i(i){i&&3===i.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=e(o),s={relatedTarget:this};n.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(n[0],i.target)||(n.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.7",a.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=e(n),a=s.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var o=t(this);if(i.preventDefault(),i.stopPropagation(),!o.is(".disabled, :disabled")){var n=e(o),a=n.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&n.find(s).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",l=n.find(".dropdown-menu"+r);if(l.length){var h=l.index(i.target);38==i.which&&h>0&&h--,40==i.which&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](o):a.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.7",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(r);h&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var d=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(h){var f=r,u=this.getPosition(this.$viewport);r="bottom"==r&&d.bottom+c>u.bottom?"top":"top"==r&&d.top-c<u.top?"bottom":"right"==r&&d.right+p>u.width?"left":"left"==r&&d.left-p<u.left?"right":r,s.removeClass(f).addClass(r)}var g=this.getCalculatedOffset(r,d,p,c);this.applyPlacement(g,r);var v=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(i.TRANSITION_DURATION):v()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top+=a,e.left+=r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=s&&(e.top=e.top+s-h);var d=this.getViewportAdjustedDelta(i,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var p=/top|bottom/.test(i),c=p?2*d.left-n+l:2*d.top-s+h,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element&&n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=window.SVGElement&&i instanceof window.SVGElement,a=o?{top:0,left:0}:s?null:e.offset(),r={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,r,l,a)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.7",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var a=o.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof e&&e;n||o.data("bs.affix",n=new i(this,s)),"string"==typeof e&&n[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.7",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>n?"top":!1;if("bottom"==this.affixed)return null!=i?n+this.unpin<=s.top?!1:"bottom":t-o>=n+a?!1:"bottom";var r=null==this.affixed,l=r?n:s.top,h=r?a:e;return null!=i&&i>=n?"top":null!=o&&l+h>=t-o?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,n=o.top,s=o.bottom,a=Math.max(t(document).height(),t(document.body).height());"object"!=typeof o&&(s=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));var r=this.getState(a,e,n,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),h=t.Event(l+".bs.affix");if(this.$element.trigger(h),h.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-s})}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.7",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,
this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(i,o){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var o=t(this),n=o.data("bs.scrollspy"),s="object"==typeof i&&i;n||o.data("bs.scrollspy",n=new e(this,s)),"string"==typeof i&&n[i]()})}e.VERSION="3.3.7",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",o=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",o=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),n=e.data("target")||e.attr("href"),s=/^#./.test(n)&&t(n);return s&&s.length&&s.is(":visible")&&[[s[i]().top+o,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(void 0===n[t+1]||e<n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var o=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);
/*!
 * Vue.js v2.4.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Vue=e()}(this,function(){"use strict";function t(t){return void 0===t||null===t}function e(t){return void 0!==t&&null!==t}function n(t){return!0===t}function r(t){return!1===t}function i(t){return"string"==typeof t||"number"==typeof t||"boolean"==typeof t}function o(t){return null!==t&&"object"==typeof t}function a(t){return"[object Object]"===pi.call(t)}function s(t){return"[object RegExp]"===pi.call(t)}function c(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function u(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function l(t){var e=parseFloat(t);return isNaN(e)?t:e}function f(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}function p(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}function d(t,e){return hi.call(t,e)}function v(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}function h(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function m(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function y(t,e){for(var n in e)t[n]=e[n];return t}function g(t){for(var e={},n=0;n<t.length;n++)t[n]&&y(e,t[n]);return e}function _(t,e,n){}function b(t,e){if(t===e)return!0;var n=o(t),r=o(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),a=Array.isArray(e);if(i&&a)return t.length===e.length&&t.every(function(t,n){return b(t,e[n])});if(i||a)return!1;var s=Object.keys(t),c=Object.keys(e);return s.length===c.length&&s.every(function(n){return b(t[n],e[n])})}catch(t){return!1}}function $(t,e){for(var n=0;n<t.length;n++)if(b(t[n],e))return n;return-1}function C(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function w(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function x(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function A(t){if(!Ti.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}function k(t,e,n){if(ki.errorHandler)ki.errorHandler.call(null,t,e,n);else{if(!ji||"undefined"==typeof console)throw t;console.error(t)}}function O(t){return"function"==typeof t&&/native code/.test(t.toString())}function T(t){Gi.target&&Zi.push(Gi.target),Gi.target=t}function S(){Gi.target=Zi.pop()}function E(t,e,n){t.__proto__=e}function j(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];x(t,o,e[o])}}function L(t,e){if(o(t)){var n;return d(t,"__ob__")&&t.__ob__ instanceof eo?n=t.__ob__:to.shouldConvert&&!zi()&&(Array.isArray(t)||a(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new eo(t)),e&&n&&n.vmCount++,n}}function N(t,e,n,r,i){var o=new Gi,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!i&&L(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return Gi.target&&(o.depend(),u&&u.dep.depend(),Array.isArray(e)&&D(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!i&&L(e),o.notify())}})}}function I(t,e,n){if(Array.isArray(t)&&c(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(d(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(N(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function M(t,e){if(Array.isArray(t)&&c(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||d(t,e)&&(delete t[e],n&&n.dep.notify())}}function D(t){for(var e=void 0,n=0,r=t.length;n<r;n++)(e=t[n])&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&D(e)}function P(t,e){if(!e)return t;for(var n,r,i,o=Object.keys(e),s=0;s<o.length;s++)r=t[n=o[s]],i=e[n],d(t,n)?a(r)&&a(i)&&P(r,i):I(t,n,i);return t}function F(t,e,n){return n?t||e?function(){var r="function"==typeof e?e.call(n):e,i="function"==typeof t?t.call(n):void 0;return r?P(r,i):i}:void 0:e?t?function(){return P("function"==typeof e?e.call(this):e,"function"==typeof t?t.call(this):t)}:e:t}function R(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function H(t,e){var n=Object.create(t||null);return e?y(n,e):n}function B(t){var e=t.props;if(e){var n,r,i={};if(Array.isArray(e))for(n=e.length;n--;)"string"==typeof(r=e[n])&&(i[yi(r)]={type:null});else if(a(e))for(var o in e)r=e[o],i[yi(o)]=a(r)?r:{type:r};t.props=i}}function U(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function V(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}function z(t,e,n){function r(r){var i=no[r]||ro;c[r]=i(t[r],e[r],n,r)}"function"==typeof e&&(e=e.options),B(e),U(e),V(e);var i=e.extends;if(i&&(t=z(t,i,n)),e.mixins)for(var o=0,a=e.mixins.length;o<a;o++)t=z(t,e.mixins[o],n);var s,c={};for(s in t)r(s);for(s in e)d(t,s)||r(s);return c}function K(t,e,n,r){if("string"==typeof n){var i=t[e];if(d(i,n))return i[n];var o=yi(n);if(d(i,o))return i[o];var a=gi(o);if(d(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function J(t,e,n,r){var i=e[t],o=!d(n,t),a=n[t];if(G(Boolean,i.type)&&(o&&!d(i,"default")?a=!1:G(String,i.type)||""!==a&&a!==bi(t)||(a=!0)),void 0===a){a=q(r,i,t);var s=to.shouldConvert;to.shouldConvert=!0,L(a),to.shouldConvert=s}return a}function q(t,e,n){if(d(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"==typeof r&&"Function"!==W(e.type)?r.call(t):r}}function W(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function G(t,e){if(!Array.isArray(e))return W(e)===W(t);for(var n=0,r=e.length;n<r;n++)if(W(e[n])===W(t))return!0;return!1}function Z(t){return new io(void 0,void 0,void 0,String(t))}function Y(t){var e=new io(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Q(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Y(t[r]);return n}function X(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,t)}return e.fns=t,e}function tt(e,n,r,i,o){var a,s,c,u;for(a in e)s=e[a],c=n[a],u=co(a),t(s)||(t(c)?(t(s.fns)&&(s=e[a]=X(s)),r(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,e[a]=c));for(a in n)t(e[a])&&i((u=co(a)).name,n[a],u.capture)}function et(r,i,o){function a(){o.apply(this,arguments),p(s.fns,a)}var s,c=r[i];t(c)?s=X([a]):e(c.fns)&&n(c.merged)?(s=c).fns.push(a):s=X([c,a]),s.merged=!0,r[i]=s}function nt(n,r,i){var o=r.options.props;if(!t(o)){var a={},s=n.attrs,c=n.props;if(e(s)||e(c))for(var u in o){var l=bi(u);rt(a,c,u,l,!0)||rt(a,s,u,l,!1)}return a}}function rt(t,n,r,i,o){if(e(n)){if(d(n,r))return t[r]=n[r],o||delete n[r],!0;if(d(n,i))return t[r]=n[i],o||delete n[i],!0}return!1}function it(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ot(t){return i(t)?[Z(t)]:Array.isArray(t)?st(t):void 0}function at(t){return e(t)&&e(t.text)&&r(t.isComment)}function st(r,o){var a,s,c,u=[];for(a=0;a<r.length;a++)t(s=r[a])||"boolean"==typeof s||(c=u[u.length-1],Array.isArray(s)?u.push.apply(u,st(s,(o||"")+"_"+a)):i(s)?at(c)?c.text+=String(s):""!==s&&u.push(Z(s)):at(s)&&at(c)?u[u.length-1]=Z(c.text+s.text):(n(r._isVList)&&e(s.tag)&&t(s.key)&&e(o)&&(s.key="__vlist"+o+"_"+a+"__"),u.push(s)));return u}function ct(t,e){return t.__esModule&&t.default&&(t=t.default),o(t)?e.extend(t):t}function ut(t,e,n,r,i){var o=so();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function lt(r,i,a){if(n(r.error)&&e(r.errorComp))return r.errorComp;if(e(r.resolved))return r.resolved;if(n(r.loading)&&e(r.loadingComp))return r.loadingComp;if(!e(r.contexts)){var s=r.contexts=[a],c=!0,u=function(){for(var t=0,e=s.length;t<e;t++)s[t].$forceUpdate()},l=C(function(t){r.resolved=ct(t,i),c||u()}),f=C(function(t){e(r.errorComp)&&(r.error=!0,u())}),p=r(l,f);return o(p)&&("function"==typeof p.then?t(r.resolved)&&p.then(l,f):e(p.component)&&"function"==typeof p.component.then&&(p.component.then(l,f),e(p.error)&&(r.errorComp=ct(p.error,i)),e(p.loading)&&(r.loadingComp=ct(p.loading,i),0===p.delay?r.loading=!0:setTimeout(function(){t(r.resolved)&&t(r.error)&&(r.loading=!0,u())},p.delay||200)),e(p.timeout)&&setTimeout(function(){t(r.resolved)&&f(null)},p.timeout))),c=!1,r.loading?r.loadingComp:r.resolved}r.contexts.push(a)}function ft(t){if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];if(e(r)&&e(r.componentOptions))return r}}function pt(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ht(t,e)}function dt(t,e,n){n?ao.$once(t,e):ao.$on(t,e)}function vt(t,e){ao.$off(t,e)}function ht(t,e,n){ao=t,tt(e,n||{},dt,vt,t)}function mt(t,e){var n={};if(!t)return n;for(var r=[],i=0,o=t.length;i<o;i++){var a=t[i];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(yt)||(n.default=r),n}function yt(t){return t.isComment||" "===t.text}function gt(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?gt(t[n],e):e[t[n].key]=t[n].fn;return e}function _t(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function bt(t,e,n){t.$el=e,t.$options.render||(t.$options.render=so),At(t,"beforeMount");var r;return r=function(){t._update(t._render(),n)},t._watcher=new go(t,r,_),n=!1,null==t.$vnode&&(t._isMounted=!0,At(t,"mounted")),t}function $t(t,e,n,r,i){var o=!!(i||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==Oi);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){to.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=J(u,t.$options.props,e,t)}to.shouldConvert=!0,t.$options.propsData=e}if(n){var l=t.$options._parentListeners;t.$options._parentListeners=n,ht(t,n,l)}o&&(t.$slots=mt(i,r.context),t.$forceUpdate())}function Ct(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function wt(t,e){if(e){if(t._directInactive=!1,Ct(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)wt(t.$children[n]);At(t,"activated")}}function xt(t,e){if(!(e&&(t._directInactive=!0,Ct(t))||t._inactive)){t._inactive=!0;for(var n=0;n<t.$children.length;n++)xt(t.$children[n]);At(t,"deactivated")}}function At(t,e){var n=t.$options[e];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(t)}catch(n){k(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}function kt(){mo=lo.length=fo.length=0,po={},vo=ho=!1}function Ot(){ho=!0;var t,e;for(lo.sort(function(t,e){return t.id-e.id}),mo=0;mo<lo.length;mo++)e=(t=lo[mo]).id,po[e]=null,t.run();var n=fo.slice(),r=lo.slice();kt(),Et(n),Tt(r),Ki&&ki.devtools&&Ki.emit("flush")}function Tt(t){for(var e=t.length;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&At(r,"updated")}}function St(t){t._inactive=!1,fo.push(t)}function Et(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,wt(t[e],!0)}function jt(t){var e=t.id;if(null==po[e]){if(po[e]=!0,ho){for(var n=lo.length-1;n>mo&&lo[n].id>t.id;)n--;lo.splice(n+1,0,t)}else lo.push(t);vo||(vo=!0,qi(Ot))}}function Lt(t){_o.clear(),Nt(t,_o)}function Nt(t,e){var n,r,i=Array.isArray(t);if((i||o(t))&&Object.isExtensible(t)){if(t.__ob__){var a=t.__ob__.dep.id;if(e.has(a))return;e.add(a)}if(i)for(n=t.length;n--;)Nt(t[n],e);else for(n=(r=Object.keys(t)).length;n--;)Nt(t[r[n]],e)}}function It(t,e,n){bo.get=function(){return this[e][n]},bo.set=function(t){this[e][n]=t},Object.defineProperty(t,n,bo)}function Mt(t){t._watchers=[];var e=t.$options;e.props&&Dt(t,e.props),e.methods&&Ut(t,e.methods),e.data?Pt(t):L(t._data={},!0),e.computed&&Rt(t,e.computed),e.watch&&e.watch!==Ri&&Vt(t,e.watch)}function Dt(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;to.shouldConvert=o;for(var a in e)!function(o){i.push(o);var a=J(o,e,n,t);N(r,o,a),o in t||It(t,"_props",o)}(a);to.shouldConvert=!0}function Pt(t){var e=t.$options.data;a(e=t._data="function"==typeof e?Ft(e,t):e||{})||(e={});for(var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);i--;){var o=n[i];r&&d(r,o)||w(o)||It(t,"_data",o)}L(e,!0)}function Ft(t,e){try{return t.call(e)}catch(t){return k(t,e,"data()"),{}}}function Rt(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var i=e[r],o="function"==typeof i?i:i.get;n[r]=new go(t,o||_,_,$o),r in t||Ht(t,r,i)}}function Ht(t,e,n){"function"==typeof n?(bo.get=Bt(e),bo.set=_):(bo.get=n.get?!1!==n.cache?Bt(e):n.get:_,bo.set=n.set?n.set:_),Object.defineProperty(t,e,bo)}function Bt(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Gi.target&&e.depend(),e.value}}function Ut(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?_:h(e[n],t)}function Vt(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)zt(t,n,r[i]);else zt(t,n,r)}}function zt(t,e,n,r){return a(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function Kt(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}function Jt(t){var e=qt(t.$options.inject,t);e&&(to.shouldConvert=!1,Object.keys(e).forEach(function(n){N(t,n,e[n])}),to.shouldConvert=!0)}function qt(t,e){if(t){for(var n=Object.create(null),r=Ji?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++)for(var o=r[i],a=t[o],s=e;s;){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}return n}}function Wt(t,n,r,i,o){var a={},s=t.options.props;if(e(s))for(var c in s)a[c]=J(c,s,n||{});else e(r.attrs)&&Gt(a,r.attrs),e(r.props)&&Gt(a,r.props);var u=Object.create(i),l=t.options.render.call(null,function(t,e,n,r){return ee(u,t,e,n,r,!0)},{data:r,props:a,children:o,parent:i,listeners:r.on||{},injections:qt(t.options.inject,i),slots:function(){return mt(o,i)}});return l instanceof io&&(l.functionalContext=i,l.functionalOptions=t.options,r.slot&&((l.data||(l.data={})).slot=r.slot)),l}function Gt(t,e){for(var n in e)t[yi(n)]=e[n]}function Zt(r,i,a,s,c){if(!t(r)){var u=a.$options._base;if(o(r)&&(r=u.extend(r)),"function"==typeof r){var l;if(t(r.cid)&&(l=r,void 0===(r=lt(l,u,a))))return ut(l,i,a,s,c);i=i||{},me(r),e(i.model)&&te(r.options,i);var f=nt(i,r,c);if(n(r.options.functional))return Wt(r,f,i,a,s);var p=i.on;if(i.on=i.nativeOn,n(r.options.abstract)){var d=i.slot;i={},d&&(i.slot=d)}Qt(i);var v=r.options.name||c;return new io("vue-component-"+r.cid+(v?"-"+v:""),i,void 0,void 0,void 0,a,{Ctor:r,propsData:f,listeners:p,tag:c,children:s},l)}}}function Yt(t,n,r,i){var o=t.componentOptions,a={_isComponent:!0,parent:n,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:r||null,_refElm:i||null},s=t.data.inlineTemplate;return e(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function Qt(t){t.hook||(t.hook={});for(var e=0;e<wo.length;e++){var n=wo[e],r=t.hook[n],i=Co[n];t.hook[n]=r?Xt(i,r):i}}function Xt(t,e){return function(n,r,i,o){t(n,r,i,o),e(n,r,i,o)}}function te(t,n){var r=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(n.props||(n.props={}))[r]=n.model.value;var o=n.on||(n.on={});e(o[i])?o[i]=[n.model.callback].concat(o[i]):o[i]=n.model.callback}function ee(t,e,r,o,a,s){return(Array.isArray(r)||i(r))&&(a=o,o=r,r=void 0),n(s)&&(a=Ao),ne(t,e,r,o,a)}function ne(t,n,r,i,o){if(e(r)&&e(r.__ob__))return so();if(e(r)&&e(r.is)&&(n=r.is),!n)return so();Array.isArray(i)&&"function"==typeof i[0]&&((r=r||{}).scopedSlots={default:i[0]},i.length=0),o===Ao?i=ot(i):o===xo&&(i=it(i));var a,s;if("string"==typeof n){var c;s=ki.getTagNamespace(n),a=ki.isReservedTag(n)?new io(ki.parsePlatformTagName(n),r,i,void 0,void 0,t):e(c=K(t.$options,"components",n))?Zt(c,r,t,i,n):new io(n,r,i,void 0,void 0,t)}else a=Zt(n,r,t,i);return e(a)?(s&&re(a,s),a):so()}function re(n,r){if(n.ns=r,"foreignObject"!==n.tag&&e(n.children))for(var i=0,o=n.children.length;i<o;i++){var a=n.children[i];e(a.tag)&&t(a.ns)&&re(a,r)}}function ie(t,n){var r,i,a,s,c;if(Array.isArray(t)||"string"==typeof t)for(r=new Array(t.length),i=0,a=t.length;i<a;i++)r[i]=n(t[i],i);else if("number"==typeof t)for(r=new Array(t),i=0;i<t;i++)r[i]=n(i+1,i);else if(o(t))for(s=Object.keys(t),r=new Array(s.length),i=0,a=s.length;i<a;i++)c=s[i],r[i]=n(t[c],c,i);return e(r)&&(r._isVList=!0),r}function oe(t,e,n,r){var i=this.$scopedSlots[t];if(i)return n=n||{},r&&(n=y(y({},r),n)),i(n)||e;var o=this.$slots[t];return o||e}function ae(t){return K(this.$options,"filters",t,!0)||Ci}function se(t,e,n){var r=ki.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function ce(t,e,n,r,i){if(n)if(o(n)){Array.isArray(n)&&(n=g(n));var a;for(var s in n)!function(o){if("class"===o||"style"===o||vi(o))a=t;else{var s=t.attrs&&t.attrs.type;a=r||ki.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}o in a||(a[o]=n[o],i&&((t.on||(t.on={}))["update:"+o]=function(t){n[o]=t}))}(s)}else;return t}function ue(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Q(n):Y(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),fe(n,"__static__"+t,!1),n)}function le(t,e,n){return fe(t,"__once__"+e+(n?"_"+n:""),!0),t}function fe(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&pe(t[r],e+"_"+r,n);else pe(t,e,n)}function pe(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function de(t,e){if(e)if(a(e)){var n=t.on=t.on?y({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(o,i):o}}else;return t}function ve(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=mt(t.$options._renderChildren,n),t.$scopedSlots=Oi,t._c=function(e,n,r,i){return ee(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return ee(t,e,n,r,i,!0)};var r=e&&e.data;N(t,"$attrs",r&&r.attrs,null,!0),N(t,"$listeners",t.$options._parentListeners,null,!0)}function he(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function me(t){var e=t.options;if(t.super){var n=me(t.super);if(n!==t.superOptions){t.superOptions=n;var r=ye(t);r&&y(t.extendOptions,r),(e=t.options=z(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function ye(t){var e,n=t.options,r=t.extendOptions,i=t.sealedOptions;for(var o in n)n[o]!==i[o]&&(e||(e={}),e[o]=ge(n[o],r[o],i[o]));return e}function ge(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var i=0;i<t.length;i++)(e.indexOf(t[i])>=0||n.indexOf(t[i])<0)&&r.push(t[i]);return r}return t}function _e(t){this._init(t)}function be(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=m(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}function $e(t){t.mixin=function(t){return this.options=z(this.options,t),this}}function Ce(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=z(n.options,t),a.super=n,a.options.props&&we(a),a.options.computed&&xe(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,xi.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=y({},a.options),i[r]=a,a}}function we(t){var e=t.options.props;for(var n in e)It(t.prototype,"_props",n)}function xe(t){var e=t.options.computed;for(var n in e)Ht(t.prototype,n,e[n])}function Ae(t){xi.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&a(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function ke(t){return t&&(t.Ctor.options.name||t.tag)}function Oe(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:!!s(t)&&t.test(e)}function Te(t,e,n){for(var r in t){var i=t[r];if(i){var o=ke(i.componentOptions);o&&!n(o)&&(i!==e&&Se(i),t[r]=null)}}}function Se(t){t&&t.componentInstance.$destroy()}function Ee(t){for(var n=t.data,r=t,i=t;e(i.componentInstance);)(i=i.componentInstance._vnode).data&&(n=je(i.data,n));for(;e(r=r.parent);)r.data&&(n=je(n,r.data));return Le(n.staticClass,n.class)}function je(t,n){return{staticClass:Ne(t.staticClass,n.staticClass),class:e(t.class)?[t.class,n.class]:n.class}}function Le(t,n){return e(t)||e(n)?Ne(t,Ie(n)):""}function Ne(t,e){return t?e?t+" "+e:t:e||""}function Ie(t){return Array.isArray(t)?Me(t):o(t)?De(t):"string"==typeof t?t:""}function Me(t){for(var n,r="",i=0,o=t.length;i<o;i++)e(n=Ie(t[i]))&&""!==n&&(r&&(r+=" "),r+=n);return r}function De(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function Pe(t){return Go(t)?"svg":"math"===t?"math":void 0}function Fe(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Re(t,e){var n=t.data.ref;if(n){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?p(o[n],i):o[n]===i&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}function He(r,i){return r.key===i.key&&(r.tag===i.tag&&r.isComment===i.isComment&&e(r.data)===e(i.data)&&Be(r,i)||n(r.isAsyncPlaceholder)&&r.asyncFactory===i.asyncFactory&&t(i.asyncFactory.error))}function Be(t,n){if("input"!==t.tag)return!0;var r;return(e(r=t.data)&&e(r=r.attrs)&&r.type)===(e(r=n.data)&&e(r=r.attrs)&&r.type)}function Ue(t,n,r){var i,o,a={};for(i=n;i<=r;++i)e(o=t[i].key)&&(a[o]=i);return a}function Ve(t,e){(t.data.directives||e.data.directives)&&ze(t,e)}function ze(t,e){var n,r,i,o=t===ta,a=e===ta,s=Ke(t.data.directives,t.context),c=Ke(e.data.directives,e.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,qe(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(qe(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)qe(u[n],"inserted",e,t)};o?et(e.data.hook||(e.data.hook={}),"insert",f):f()}if(l.length&&et(e.data.hook||(e.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)qe(l[n],"componentUpdated",e,t)}),!o)for(n in s)c[n]||qe(s[n],"unbind",t,t,a)}function Ke(t,e){var n=Object.create(null);if(!t)return n;var r,i;for(r=0;r<t.length;r++)(i=t[r]).modifiers||(i.modifiers=ra),n[Je(i)]=i,i.def=K(e.$options,"directives",i.name,!0);return n}function Je(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function qe(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(r){k(r,n.context,"directive "+t.name+" "+e+" hook")}}function We(n,r){var i=r.componentOptions;if(!(e(i)&&!1===i.Ctor.options.inheritAttrs||t(n.data.attrs)&&t(r.data.attrs))){var o,a,s=r.elm,c=n.data.attrs||{},u=r.data.attrs||{};e(u.__ob__)&&(u=r.data.attrs=y({},u));for(o in u)a=u[o],c[o]!==a&&Ge(s,o,a);Ii&&u.value!==c.value&&Ge(s,"value",u.value);for(o in c)t(u[o])&&(zo(o)?s.removeAttributeNS(Vo,Ko(o)):Bo(o)||s.removeAttribute(o))}}function Ge(t,e,n){Uo(e)?Jo(n)?t.removeAttribute(e):t.setAttribute(e,e):Bo(e)?t.setAttribute(e,Jo(n)||"false"===n?"false":"true"):zo(e)?Jo(n)?t.removeAttributeNS(Vo,Ko(e)):t.setAttributeNS(Vo,e,n):Jo(n)?t.removeAttribute(e):t.setAttribute(e,n)}function Ze(n,r){var i=r.elm,o=r.data,a=n.data;if(!(t(o.staticClass)&&t(o.class)&&(t(a)||t(a.staticClass)&&t(a.class)))){var s=Ee(r),c=i._transitionClasses;e(c)&&(s=Ne(s,Ie(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}function Ye(t){function e(){(a||(a=[])).push(t.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,p=0,d=0,v=0;for(i=0;i<t.length;i++)if(r=n,n=t.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===t.charCodeAt(i+1)||124===t.charCodeAt(i-1)||f||p||d){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:d++;break;case 41:d--;break;case 91:p++;break;case 93:p--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&" "===(m=t.charAt(h));h--);m&&sa.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=t.slice(0,i).trim()):e();if(void 0===o?o=t.slice(0,i).trim():0!==v&&e(),a)for(i=0;i<a.length;i++)o=Qe(o,a[i]);return o}function Qe(t,e){var n=e.indexOf("(");return n<0?'_f("'+e+'")('+t+")":'_f("'+e.slice(0,n)+'")('+t+","+e.slice(n+1)}function Xe(t){console.error("[Vue compiler]: "+t)}function tn(t,e){return t?t.map(function(t){return t[e]}).filter(function(t){return t}):[]}function en(t,e,n){(t.props||(t.props=[])).push({name:e,value:n})}function nn(t,e,n){(t.attrs||(t.attrs=[])).push({name:e,value:n})}function rn(t,e,n,r,i,o){(t.directives||(t.directives=[])).push({name:e,rawName:n,value:r,arg:i,modifiers:o})}function on(t,e,n,r,i,o){r&&r.capture&&(delete r.capture,e="!"+e),r&&r.once&&(delete r.once,e="~"+e),r&&r.passive&&(delete r.passive,e="&"+e);var a;r&&r.native?(delete r.native,a=t.nativeEvents||(t.nativeEvents={})):a=t.events||(t.events={});var s={value:n,modifiers:r},c=a[e];Array.isArray(c)?i?c.unshift(s):c.push(s):a[e]=c?i?[s,c]:[c,s]:s}function an(t,e,n){var r=sn(t,":"+e)||sn(t,"v-bind:"+e);if(null!=r)return Ye(r);if(!1!==n){var i=sn(t,e);if(null!=i)return JSON.stringify(i)}}function sn(t,e){var n;if(null!=(n=t.attrsMap[e]))for(var r=t.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===e){r.splice(i,1);break}return n}function cn(t,e,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=un(e,o);t.model={value:"("+e+")",expression:'"'+e+'"',callback:"function ($$v) {"+a+"}"}}function un(t,e){var n=ln(t);return null===n.idx?t+"="+e:"$set("+n.exp+", "+n.idx+", "+e+")"}function ln(t){if(Eo=t,So=Eo.length,Lo=No=Io=0,t.indexOf("[")<0||t.lastIndexOf("]")<So-1)return{exp:t,idx:null};for(;!pn();)dn(jo=fn())?hn(jo):91===jo&&vn(jo);return{exp:t.substring(0,No),idx:t.substring(No+1,Io)}}function fn(){return Eo.charCodeAt(++Lo)}function pn(){return Lo>=So}function dn(t){return 34===t||39===t}function vn(t){var e=1;for(No=Lo;!pn();)if(t=fn(),dn(t))hn(t);else if(91===t&&e++,93===t&&e--,0===e){Io=Lo;break}}function hn(t){for(var e=t;!pn()&&(t=fn())!==e;);}function mn(t,e,n){var r=n&&n.number,i=an(t,"value")||"null",o=an(t,"true-value")||"true",a=an(t,"false-value")||"false";en(t,"checked","Array.isArray("+e+")?_i("+e+","+i+")>-1"+("true"===o?":("+e+")":":_q("+e+","+o+")")),on(t,ua,"var $$a="+e+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+e+"=$$a.concat($$v))}else{$$i>-1&&("+e+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+un(e,"$$c")+"}",null,!0)}function yn(t,e,n){var r=n&&n.number,i=an(t,"value")||"null";en(t,"checked","_q("+e+","+(i=r?"_n("+i+")":i)+")"),on(t,ua,un(e,i),null,!0)}function gn(t,e,n){var r="var $$selectedVal = "+('Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"})")+";";on(t,"change",r=r+" "+un(e,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),null,!0)}function _n(t,e,n){var r=t.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?ca:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=un(e,l);c&&(f="if($event.target.composing)return;"+f),en(t,"value","("+e+")"),on(t,u,f,null,!0),(s||a)&&on(t,"blur","$forceUpdate()")}function bn(t){var n;e(t[ca])&&(t[n=Ni?"change":"input"]=[].concat(t[ca],t[n]||[]),delete t[ca]),e(t[ua])&&(t[n=Fi?"click":"change"]=[].concat(t[ua],t[n]||[]),delete t[ua])}function $n(t,e,n,r,i){if(n){var o=e,a=Do;e=function(n){null!==(1===arguments.length?o(n):o.apply(null,arguments))&&Cn(t,e,r,a)}}Do.addEventListener(t,e,Hi?{capture:r,passive:i}:r)}function Cn(t,e,n,r){(r||Do).removeEventListener(t,e,n)}function wn(e,n){if(!t(e.data.on)||!t(n.data.on)){var r=n.data.on||{},i=e.data.on||{};Do=n.elm,bn(r),tt(r,i,$n,Cn,n.context)}}function xn(n,r){if(!t(n.data.domProps)||!t(r.data.domProps)){var i,o,a=r.elm,s=n.data.domProps||{},c=r.data.domProps||{};e(c.__ob__)&&(c=r.data.domProps=y({},c));for(i in s)t(c[i])&&(a[i]="");for(i in c)if(o=c[i],"textContent"!==i&&"innerHTML"!==i||(r.children&&(r.children.length=0),o!==s[i]))if("value"===i){a._value=o;var u=t(o)?"":String(o);An(a,r,u)&&(a.value=u)}else a[i]=o}}function An(t,e,n){return!t.composing&&("option"===e.tag||kn(t,n)||On(t,n))}function kn(t,e){var n=!0;try{n=document.activeElement!==t}catch(t){}return n&&t.value!==e}function On(t,n){var r=t.value,i=t._vModifiers;return e(i)&&i.number?l(r)!==l(n):e(i)&&i.trim?r.trim()!==n.trim():r!==n}function Tn(t){var e=Sn(t.style);return t.staticStyle?y(t.staticStyle,e):e}function Sn(t){return Array.isArray(t)?g(t):"string"==typeof t?pa(t):t}function En(t,e){var n,r={};if(e)for(var i=t;i.componentInstance;)(i=i.componentInstance._vnode).data&&(n=Tn(i.data))&&y(r,n);(n=Tn(t.data))&&y(r,n);for(var o=t;o=o.parent;)o.data&&(n=Tn(o.data))&&y(r,n);return r}function jn(n,r){var i=r.data,o=n.data;if(!(t(i.staticStyle)&&t(i.style)&&t(o.staticStyle)&&t(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,p=Sn(r.data.style)||{};r.data.normalizedStyle=e(p.__ob__)?y({},p):p;var d=En(r,!0);for(s in f)t(d[s])&&ha(c,s,"");for(s in d)(a=d[s])!==f[s]&&ha(c,s,null==a?"":a)}}function Ln(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Nn(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function In(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&y(e,_a(t.name||"v")),y(e,t),e}return"string"==typeof t?_a(t):void 0}}function Mn(t){Oa(function(){Oa(t)})}function Dn(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Ln(t,e))}function Pn(t,e){t._transitionClasses&&p(t._transitionClasses,e),Nn(t,e)}function Fn(t,e,n){var r=Rn(t,e),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===$a?xa:ka,c=0,u=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),t.addEventListener(s,l)}function Rn(t,e){var n,r=window.getComputedStyle(t),i=r[wa+"Delay"].split(", "),o=r[wa+"Duration"].split(", "),a=Hn(i,o),s=r[Aa+"Delay"].split(", "),c=r[Aa+"Duration"].split(", "),u=Hn(s,c),l=0,f=0;return e===$a?a>0&&(n=$a,l=a,f=o.length):e===Ca?u>0&&(n=Ca,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?$a:Ca:null)?n===$a?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===$a&&Ta.test(r[wa+"Property"])}}function Hn(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,n){return Bn(e)+Bn(t[n])}))}function Bn(t){return 1e3*Number(t.slice(0,-1))}function Un(n,r){var i=n.elm;e(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var a=In(n.data.transition);if(!t(a)&&!e(i._enterCb)&&1===i.nodeType){for(var s=a.css,c=a.type,u=a.enterClass,f=a.enterToClass,p=a.enterActiveClass,d=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,b=a.beforeAppear,$=a.appear,w=a.afterAppear,x=a.appearCancelled,A=a.duration,k=uo,O=uo.$vnode;O&&O.parent;)k=(O=O.parent).context;var T=!k._isMounted||!n.isRootInsert;if(!T||$||""===$){var S=T&&d?d:u,E=T&&h?h:p,j=T&&v?v:f,L=T?b||m:m,N=T&&"function"==typeof $?$:y,I=T?w||g:g,M=T?x||_:_,D=l(o(A)?A.enter:A),P=!1!==s&&!Ii,F=Kn(N),R=i._enterCb=C(function(){P&&(Pn(i,j),Pn(i,E)),R.cancelled?(P&&Pn(i,S),M&&M(i)):I&&I(i),i._enterCb=null});n.data.show||et(n.data.hook||(n.data.hook={}),"insert",function(){var t=i.parentNode,e=t&&t._pending&&t._pending[n.key];e&&e.tag===n.tag&&e.elm._leaveCb&&e.elm._leaveCb(),N&&N(i,R)}),L&&L(i),P&&(Dn(i,S),Dn(i,E),Mn(function(){Dn(i,j),Pn(i,S),R.cancelled||F||(zn(D)?setTimeout(R,D):Fn(i,c,R))})),n.data.show&&(r&&r(),N&&N(i,R)),P||F||R()}}}function Vn(n,r){function i(){x.cancelled||(n.data.show||((a.parentNode._pending||(a.parentNode._pending={}))[n.key]=n),v&&v(a),b&&(Dn(a,f),Dn(a,d),Mn(function(){Dn(a,p),Pn(a,f),x.cancelled||$||(zn(w)?setTimeout(x,w):Fn(a,u,x))})),h&&h(a,x),b||$||x())}var a=n.elm;e(a._enterCb)&&(a._enterCb.cancelled=!0,a._enterCb());var s=In(n.data.transition);if(t(s))return r();if(!e(a._leaveCb)&&1===a.nodeType){var c=s.css,u=s.type,f=s.leaveClass,p=s.leaveToClass,d=s.leaveActiveClass,v=s.beforeLeave,h=s.leave,m=s.afterLeave,y=s.leaveCancelled,g=s.delayLeave,_=s.duration,b=!1!==c&&!Ii,$=Kn(h),w=l(o(_)?_.leave:_),x=a._leaveCb=C(function(){a.parentNode&&a.parentNode._pending&&(a.parentNode._pending[n.key]=null),b&&(Pn(a,p),Pn(a,d)),x.cancelled?(b&&Pn(a,f),y&&y(a)):(r(),m&&m(a)),a._leaveCb=null});g?g(i):i()}}function zn(t){return"number"==typeof t&&!isNaN(t)}function Kn(n){if(t(n))return!1;var r=n.fns;return e(r)?Kn(Array.isArray(r)?r[0]:r):(n._length||n.length)>1}function Jn(t,e){!0!==e.data.show&&Un(e)}function qn(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=t.options.length;s<c;s++)if(a=t.options[s],i)o=$(r,Wn(a))>-1,a.selected!==o&&(a.selected=o);else if(b(Wn(a),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));i||(t.selectedIndex=-1)}}function Wn(t){return"_value"in t?t._value:t.value}function Gn(t){t.target.composing=!0}function Zn(t){t.target.composing&&(t.target.composing=!1,Yn(t.target,"input"))}function Yn(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Qn(t){return!t.componentInstance||t.data&&t.data.transition?t:Qn(t.componentInstance._vnode)}function Xn(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Xn(ft(e.children)):t}function tr(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[yi(o)]=i[o];return e}function er(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function nr(t){for(;t=t.parent;)if(t.data.transition)return!0}function rr(t,e){return e.key===t.key&&e.tag===t.tag}function ir(t){return t.isComment&&t.asyncFactory}function or(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function ar(t){t.data.newPos=t.elm.getBoundingClientRect()}function sr(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function cr(t,e){var n=e?Ha(e):Fa;if(n.test(t)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(t);){(i=r.index)>a&&o.push(JSON.stringify(t.slice(a,i)));var s=Ye(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<t.length&&o.push(JSON.stringify(t.slice(a))),o.join("+")}}function ur(t,e){var n=e?$s:bs;return t.replace(n,function(t){return _s[t]})}function lr(t,e){function n(e){l+=e,t=t.substring(e)}function r(t,n,r){var i,s;if(null==n&&(n=l),null==r&&(r=l),t&&(s=t.toLowerCase()),t)for(i=a.length-1;i>=0&&a[i].lowerCasedTag!==s;i--);else i=0;if(i>=0){for(var c=a.length-1;c>=i;c--)e.end&&e.end(a[c].tag,n,r);a.length=i,o=i&&a[i-1].tag}else"br"===s?e.start&&e.start(t,[],!0,n,r):"p"===s&&(e.start&&e.start(t,[],!1,n,r),e.end&&e.end(t,n,r))}for(var i,o,a=[],s=e.expectHTML,c=e.isUnaryTag||$i,u=e.canBeLeftOpenTag||$i,l=0;t;){if(i=t,o&&ys(o)){var f=0,p=o.toLowerCase(),d=gs[p]||(gs[p]=new RegExp("([\\s\\S]*?)(</"+p+"[^>]*>)","i")),v=t.replace(d,function(t,n,r){return f=r.length,ys(p)||"noscript"===p||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),ws(p,n)&&(n=n.slice(1)),e.chars&&e.chars(n),""});l+=t.length-v.length,t=v,r(p,l-f,l)}else{var h=t.indexOf("<");if(0===h){if(is.test(t)){var m=t.indexOf("--\x3e");if(m>=0){e.shouldKeepComment&&e.comment(t.substring(4,m)),n(m+3);continue}}if(os.test(t)){var y=t.indexOf("]>");if(y>=0){n(y+2);continue}}var g=t.match(rs);if(g){n(g[0].length);continue}var _=t.match(ns);if(_){var b=l;n(_[0].length),r(_[1],b,l);continue}var $=function(){var e=t.match(ts);if(e){var r={tagName:e[1],attrs:[],start:l};n(e[0].length);for(var i,o;!(i=t.match(es))&&(o=t.match(Ya));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=l,r}}();if($){!function(t){var n=t.tagName,i=t.unarySlash;s&&("p"===o&&Ka(n)&&r(o),u(n)&&o===n&&r(n));for(var l=c(n)||!!i,f=t.attrs.length,p=new Array(f),d=0;d<f;d++){var v=t.attrs[d];as&&-1===v[0].indexOf('""')&&(""===v[3]&&delete v[3],""===v[4]&&delete v[4],""===v[5]&&delete v[5]);var h=v[3]||v[4]||v[5]||"";p[d]={name:v[1],value:ur(h,e.shouldDecodeNewlines)}}l||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:p}),o=n),e.start&&e.start(n,p,l,t.start,t.end)}($),ws(o,t)&&n(1);continue}}var C=void 0,w=void 0,x=void 0;if(h>=0){for(w=t.slice(h);!(ns.test(w)||ts.test(w)||is.test(w)||os.test(w)||(x=w.indexOf("<",1))<0);)h+=x,w=t.slice(h);C=t.substring(0,h),n(h)}h<0&&(C=t,t=""),e.chars&&C&&e.chars(C)}if(t===i){e.chars&&e.chars(t);break}}r()}function fr(t,e){function n(t){t.pre&&(s=!1),ps(t.tag)&&(c=!1)}ss=e.warn||Xe,ps=e.isPreTag||$i,ds=e.mustUseProp||$i,vs=e.getTagNamespace||$i,us=tn(e.modules,"transformNode"),ls=tn(e.modules,"preTransformNode"),fs=tn(e.modules,"postTransformNode"),cs=e.delimiters;var r,i,o=[],a=!1!==e.preserveWhitespace,s=!1,c=!1;return lr(t,{warn:ss,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldKeepComment:e.comments,start:function(t,a,u){function l(t){}var f=i&&i.ns||vs(t);Ni&&"svg"===f&&(a=Er(a));var p={type:1,tag:t,attrsList:a,attrsMap:Or(a),parent:i,children:[]};f&&(p.ns=f),Sr(p)&&!zi()&&(p.forbidden=!0);for(var d=0;d<ls.length;d++)ls[d](p,e);if(s||(pr(p),p.pre&&(s=!0)),ps(p.tag)&&(c=!0),s)dr(p);else{mr(p),yr(p),$r(p),vr(p),p.plain=!p.key&&!a.length,hr(p),Cr(p),wr(p);for(var v=0;v<us.length;v++)us[v](p,e);xr(p)}if(r?o.length||r.if&&(p.elseif||p.else)&&(l(),br(r,{exp:p.elseif,block:p})):(r=p,l()),i&&!p.forbidden)if(p.elseif||p.else)gr(p,i);else if(p.slotScope){i.plain=!1;var h=p.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[h]=p}else i.children.push(p),p.parent=i;u?n(p):(i=p,o.push(p));for(var m=0;m<fs.length;m++)fs[m](p,e)},end:function(){var t=o[o.length-1],e=t.children[t.children.length-1];e&&3===e.type&&" "===e.text&&!c&&t.children.pop(),o.length-=1,i=o[o.length-1],n(t)},chars:function(t){if(i&&(!Ni||"textarea"!==i.tag||i.attrsMap.placeholder!==t)){var e=i.children;if(t=c||t.trim()?Tr(i)?t:js(t):a&&e.length?" ":""){var n;!s&&" "!==t&&(n=cr(t,cs))?e.push({type:2,expression:n,text:t}):" "===t&&e.length&&" "===e[e.length-1].text||e.push({type:3,text:t})}}},comment:function(t){i.children.push({type:3,text:t,isComment:!0})}}),r}function pr(t){null!=sn(t,"v-pre")&&(t.pre=!0)}function dr(t){var e=t.attrsList.length;if(e)for(var n=t.attrs=new Array(e),r=0;r<e;r++)n[r]={name:t.attrsList[r].name,value:JSON.stringify(t.attrsList[r].value)};else t.pre||(t.plain=!0)}function vr(t){var e=an(t,"key");e&&(t.key=e)}function hr(t){var e=an(t,"ref");e&&(t.ref=e,t.refInFor=Ar(t))}function mr(t){var e;if(e=sn(t,"v-for")){var n=e.match(ks);if(!n)return;t.for=n[2].trim();var r=n[1].trim(),i=r.match(Os);i?(t.alias=i[1].trim(),t.iterator1=i[2].trim(),i[3]&&(t.iterator2=i[3].trim())):t.alias=r}}function yr(t){var e=sn(t,"v-if");if(e)t.if=e,br(t,{exp:e,block:t});else{null!=sn(t,"v-else")&&(t.else=!0);var n=sn(t,"v-else-if");n&&(t.elseif=n)}}function gr(t,e){var n=_r(e.children);n&&n.if&&br(n,{exp:t.elseif,block:t})}function _r(t){for(var e=t.length;e--;){if(1===t[e].type)return t[e];t.pop()}}function br(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function $r(t){null!=sn(t,"v-once")&&(t.once=!0)}function Cr(t){if("slot"===t.tag)t.slotName=an(t,"name");else{var e=an(t,"slot");e&&(t.slotTarget='""'===e?'"default"':e),"template"===t.tag&&(t.slotScope=sn(t,"scope"))}}function wr(t){var e;(e=an(t,"is"))&&(t.component=e),null!=sn(t,"inline-template")&&(t.inlineTemplate=!0)}function xr(t){var e,n,r,i,o,a,s,c=t.attrsList;for(e=0,n=c.length;e<n;e++)if(r=i=c[e].name,o=c[e].value,As.test(r))if(t.hasBindings=!0,(a=kr(r))&&(r=r.replace(Es,"")),Ss.test(r))r=r.replace(Ss,""),o=Ye(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=yi(r))&&(r="innerHTML")),a.camel&&(r=yi(r)),a.sync&&on(t,"update:"+yi(r),un(o,"$event"))),s||!t.component&&ds(t.tag,t.attrsMap.type,r)?en(t,r,o):nn(t,r,o);else if(xs.test(r))on(t,r=r.replace(xs,""),o,a,!1,ss);else{var u=(r=r.replace(As,"")).match(Ts),l=u&&u[1];l&&(r=r.slice(0,-(l.length+1))),rn(t,r,i,o,l,a)}else nn(t,r,JSON.stringify(o))}function Ar(t){for(var e=t;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}function kr(t){var e=t.match(Es);if(e){var n={};return e.forEach(function(t){n[t.slice(1)]=!0}),n}}function Or(t){for(var e={},n=0,r=t.length;n<r;n++)e[t[n].name]=t[n].value;return e}function Tr(t){return"script"===t.tag||"style"===t.tag}function Sr(t){return"style"===t.tag||"script"===t.tag&&(!t.attrsMap.type||"text/javascript"===t.attrsMap.type)}function Er(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];Ls.test(r.name)||(r.name=r.name.replace(Ns,""),e.push(r))}return e}function jr(t,e){t&&(hs=Is(e.staticKeys||""),ms=e.isReservedTag||$i,Lr(t),Nr(t,!1))}function Lr(t){if(t.static=Ir(t),1===t.type){if(!ms(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var e=0,n=t.children.length;e<n;e++){var r=t.children[e];Lr(r),r.static||(t.static=!1)}if(t.ifConditions)for(var i=1,o=t.ifConditions.length;i<o;i++){var a=t.ifConditions[i].block;Lr(a),a.static||(t.static=!1)}}}function Nr(t,e){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=e),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var n=0,r=t.children.length;n<r;n++)Nr(t.children[n],e||!!t.for);if(t.ifConditions)for(var i=1,o=t.ifConditions.length;i<o;i++)Nr(t.ifConditions[i].block,e)}}function Ir(t){return 2!==t.type&&(3===t.type||!(!t.pre&&(t.hasBindings||t.if||t.for||di(t.tag)||!ms(t.tag)||Mr(t)||!Object.keys(t).every(hs))))}function Mr(t){for(;t.parent;){if("template"!==(t=t.parent).tag)return!1;if(t.for)return!0}return!1}function Dr(t,e,n){var r=e?"nativeOn:{":"on:{";for(var i in t){var o=t[i];r+='"'+i+'":'+Pr(i,o)+","}return r.slice(0,-1)+"}"}function Pr(t,e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return Pr(t,e)}).join(",")+"]";var n=Ds.test(e.value),r=Ms.test(e.value);if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)Rs[s]?(o+=Rs[s],Ps[s]&&a.push(s)):a.push(s);return a.length&&(i+=Fr(a)),o&&(i+=o),"function($event){"+i+(n?e.value+"($event)":r?"("+e.value+")($event)":e.value)+"}"}return n||r?e.value:"function($event){"+e.value+"}"}function Fr(t){return"if(!('button' in $event)&&"+t.map(Rr).join("&&")+")return null;"}function Rr(t){var e=parseInt(t,10);if(e)return"$event.keyCode!=="+e;var n=Ps[t];return"_k($event.keyCode,"+JSON.stringify(t)+(n?","+JSON.stringify(n):"")+")"}function Hr(t,e){var n=new Bs(e);return{render:"with(this){return "+(t?Br(t,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function Br(t,e){if(t.staticRoot&&!t.staticProcessed)return Ur(t,e);if(t.once&&!t.onceProcessed)return Vr(t,e);if(t.for&&!t.forProcessed)return Jr(t,e);if(t.if&&!t.ifProcessed)return zr(t,e);if("template"!==t.tag||t.slotTarget){if("slot"===t.tag)return oi(t,e);var n;if(t.component)n=ai(t.component,t,e);else{var r=t.plain?void 0:qr(t,e),i=t.inlineTemplate?null:Xr(t,e,!0);n="_c('"+t.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<e.transforms.length;o++)n=e.transforms[o](t,n);return n}return Xr(t,e)||"void 0"}function Ur(t,e){return t.staticProcessed=!0,e.staticRenderFns.push("with(this){return "+Br(t,e)+"}"),"_m("+(e.staticRenderFns.length-1)+(t.staticInFor?",true":"")+")"}function Vr(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return zr(t,e);if(t.staticInFor){for(var n="",r=t.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+Br(t,e)+","+e.onceId+++(n?","+n:"")+")":Br(t,e)}return Ur(t,e)}function zr(t,e,n,r){return t.ifProcessed=!0,Kr(t.ifConditions.slice(),e,n,r)}function Kr(t,e,n,r){function i(t){return n?n(t,e):t.once?Vr(t,e):Br(t,e)}if(!t.length)return r||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+i(o.block)+":"+Kr(t,e,n,r):""+i(o.block)}function Jr(t,e,n,r){var i=t.for,o=t.alias,a=t.iterator1?","+t.iterator1:"",s=t.iterator2?","+t.iterator2:"";return t.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||Br)(t,e)+"})"}function qr(t,e){var n="{",r=Wr(t,e);r&&(n+=r+","),t.key&&(n+="key:"+t.key+","),t.ref&&(n+="ref:"+t.ref+","),t.refInFor&&(n+="refInFor:true,"),t.pre&&(n+="pre:true,"),t.component&&(n+='tag:"'+t.tag+'",');for(var i=0;i<e.dataGenFns.length;i++)n+=e.dataGenFns[i](t);if(t.attrs&&(n+="attrs:{"+si(t.attrs)+"},"),t.props&&(n+="domProps:{"+si(t.props)+"},"),t.events&&(n+=Dr(t.events,!1,e.warn)+","),t.nativeEvents&&(n+=Dr(t.nativeEvents,!0,e.warn)+","),t.slotTarget&&(n+="slot:"+t.slotTarget+","),t.scopedSlots&&(n+=Zr(t.scopedSlots,e)+","),t.model&&(n+="model:{value:"+t.model.value+",callback:"+t.model.callback+",expression:"+t.model.expression+"},"),t.inlineTemplate){var o=Gr(t,e);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",t.wrapData&&(n=t.wrapData(n)),t.wrapListeners&&(n=t.wrapListeners(n)),n}function Wr(t,e){var n=t.directives;if(n){var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=e.directives[o.name];u&&(a=!!u(t,o,e.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}return c?s.slice(0,-1)+"]":void 0}}function Gr(t,e){var n=t.children[0];if(1===n.type){var r=Hr(n,e.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(t){return"function(){"+t+"}"}).join(",")+"]}"}}function Zr(t,e){return"scopedSlots:_u(["+Object.keys(t).map(function(n){return Yr(n,t[n],e)}).join(",")+"])"}function Yr(t,e,n){return e.for&&!e.forProcessed?Qr(t,e,n):"{key:"+t+",fn:function("+String(e.attrsMap.scope)+"){return "+("template"===e.tag?Xr(e,n)||"void 0":Br(e,n))+"}}"}function Qr(t,e,n){var r=e.for,i=e.alias,o=e.iterator1?","+e.iterator1:"",a=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+r+"),function("+i+o+a+"){return "+Yr(t,e,n)+"})"}function Xr(t,e,n,r,i){var o=t.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||Br)(a,e);var s=n?ti(o,e.maybeComponent):0,c=i||ni;return"["+o.map(function(t){return c(t,e)}).join(",")+"]"+(s?","+s:"")}}function ti(t,e){for(var n=0,r=0;r<t.length;r++){var i=t[r];if(1===i.type){if(ei(i)||i.ifConditions&&i.ifConditions.some(function(t){return ei(t.block)})){n=2;break}(e(i)||i.ifConditions&&i.ifConditions.some(function(t){return e(t.block)}))&&(n=1)}}return n}function ei(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function ni(t,e){return 1===t.type?Br(t,e):3===t.type&&t.isComment?ii(t):ri(t)}function ri(t){return"_v("+(2===t.type?t.expression:ci(JSON.stringify(t.text)))+")"}function ii(t){return"_e("+JSON.stringify(t.text)+")"}function oi(t,e){var n=t.slotName||'"default"',r=Xr(t,e),i="_t("+n+(r?","+r:""),o=t.attrs&&"{"+t.attrs.map(function(t){return yi(t.name)+":"+t.value}).join(",")+"}",a=t.attrsMap["v-bind"];return!o&&!a||r||(i+=",null"),o&&(i+=","+o),a&&(i+=(o?"":",null")+","+a),i+")"}function ai(t,e,n){var r=e.inlineTemplate?null:Xr(e,n,!0);return"_c("+t+","+qr(e,n)+(r?","+r:"")+")"}function si(t){for(var e="",n=0;n<t.length;n++){var r=t[n];e+='"'+r.name+'":'+ci(r.value)+","}return e.slice(0,-1)}function ci(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function ui(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),_}}function li(t){var e=Object.create(null);return function(n,r,i){var o=(r=r||{}).delimiters?String(r.delimiters)+n:n;if(e[o])return e[o];var a=t(n,r),s={},c=[];return s.render=ui(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(t){return ui(t,c)}),e[o]=s}}function fi(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}var pi=Object.prototype.toString,di=f("slot,component",!0),vi=f("key,ref,slot,is"),hi=Object.prototype.hasOwnProperty,mi=/-(\w)/g,yi=v(function(t){return t.replace(mi,function(t,e){return e?e.toUpperCase():""})}),gi=v(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),_i=/([^-])([A-Z])/g,bi=v(function(t){return t.replace(_i,"$1-$2").replace(_i,"$1-$2").toLowerCase()}),$i=function(t,e,n){return!1},Ci=function(t){return t},wi="data-server-rendered",xi=["component","directive","filter"],Ai=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],ki={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:$i,isReservedAttr:$i,isUnknownElement:$i,getTagNamespace:_,parsePlatformTagName:Ci,mustUseProp:$i,_lifecycleHooks:Ai},Oi=Object.freeze({}),Ti=/[^\w.$]/,Si=_,Ei="__proto__"in{},ji="undefined"!=typeof window,Li=ji&&window.navigator.userAgent.toLowerCase(),Ni=Li&&/msie|trident/.test(Li),Ii=Li&&Li.indexOf("msie 9.0")>0,Mi=Li&&Li.indexOf("edge/")>0,Di=Li&&Li.indexOf("android")>0,Pi=Li&&/iphone|ipad|ipod|ios/.test(Li),Fi=Li&&/chrome\/\d+/.test(Li)&&!Mi,Ri={}.watch,Hi=!1;if(ji)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){Hi=!0}}),window.addEventListener("test-passive",null,Bi)}catch(t){}var Ui,Vi,zi=function(){return void 0===Ui&&(Ui=!ji&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),Ui},Ki=ji&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Ji="undefined"!=typeof Symbol&&O(Symbol)&&"undefined"!=typeof Reflect&&O(Reflect.ownKeys),qi=function(){function t(){r=!1;var t=n.slice(0);n.length=0;for(var e=0;e<t.length;e++)t[e]()}var e,n=[],r=!1;if("undefined"!=typeof Promise&&O(Promise)){var i=Promise.resolve(),o=function(t){console.error(t)};e=function(){i.then(t).catch(o),Pi&&setTimeout(_)}}else if("undefined"==typeof MutationObserver||!O(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())e=function(){setTimeout(t,0)};else{var a=1,s=new MutationObserver(t),c=document.createTextNode(String(a));s.observe(c,{characterData:!0}),e=function(){a=(a+1)%2,c.data=String(a)}}return function(t,i){var o;if(n.push(function(){if(t)try{t.call(i)}catch(t){k(t,i,"nextTick")}else o&&o(i)}),r||(r=!0,e()),!t&&"undefined"!=typeof Promise)return new Promise(function(t,e){o=t})}}();Vi="undefined"!=typeof Set&&O(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var Wi=0,Gi=function(){this.id=Wi++,this.subs=[]};Gi.prototype.addSub=function(t){this.subs.push(t)},Gi.prototype.removeSub=function(t){p(this.subs,t)},Gi.prototype.depend=function(){Gi.target&&Gi.target.addDep(this)},Gi.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},Gi.target=null;var Zi=[],Yi=Array.prototype,Qi=Object.create(Yi);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=Yi[t];x(Qi,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var Xi=Object.getOwnPropertyNames(Qi),to={shouldConvert:!0},eo=function(t){this.value=t,this.dep=new Gi,this.vmCount=0,x(t,"__ob__",this),Array.isArray(t)?((Ei?E:j)(t,Qi,Xi),this.observeArray(t)):this.walk(t)};eo.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)N(t,e[n],t[e[n]])},eo.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)L(t[e])};var no=ki.optionMergeStrategies;no.data=function(t,e,n){return n?F(t,e,n):e&&"function"!=typeof e?t:F.call(this,t,e)},Ai.forEach(function(t){no[t]=R}),xi.forEach(function(t){no[t+"s"]=H}),no.watch=function(t,e){if(t===Ri&&(t=void 0),e===Ri&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};y(n,t);for(var r in e){var i=n[r],o=e[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):Array.isArray(o)?o:[o]}return n},no.props=no.methods=no.inject=no.computed=function(t,e){if(!t)return e;var n=Object.create(null);return y(n,t),e&&y(n,e),n},no.provide=F;var ro=function(t,e){return void 0===e?t:e},io=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},oo={child:{}};oo.child.get=function(){return this.componentInstance},Object.defineProperties(io.prototype,oo);var ao,so=function(t){void 0===t&&(t="");var e=new io;return e.text=t,e.isComment=!0,e},co=v(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}),uo=null,lo=[],fo=[],po={},vo=!1,ho=!1,mo=0,yo=0,go=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++yo,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Vi,this.newDepIds=new Vi,this.expression="","function"==typeof e?this.getter=e:(this.getter=A(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};go.prototype.get=function(){T(this);var t,e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;k(t,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Lt(t),S(),this.cleanupDeps()}return t},go.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},go.prototype.cleanupDeps=function(){for(var t=this,e=this.deps.length;e--;){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},go.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():jt(this)},go.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||o(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){k(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},go.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},go.prototype.depend=function(){for(var t=this,e=this.deps.length;e--;)t.deps[e].depend()},go.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||p(this.vm._watchers,this);for(var e=this.deps.length;e--;)t.deps[e].removeSub(t);this.active=!1}};var _o=new Vi,bo={enumerable:!0,configurable:!0,get:_,set:_},$o={lazy:!0},Co={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed)(t.componentInstance=Yt(t,uo,n,r)).$mount(e?t.elm:void 0,e);else if(t.data.keepAlive){var i=t;Co.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions;$t(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,At(n,"mounted")),t.data.keepAlive&&(e._isMounted?St(n):wt(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?xt(e,!0):e.$destroy())}},wo=Object.keys(Co),xo=1,Ao=2,ko=0;!function(t){t.prototype._init=function(t){var e=this;e._uid=ko++,e._isVue=!0,t&&t._isComponent?he(e,t):e.$options=z(me(e.constructor),t||{},e),e._renderProxy=e,e._self=e,_t(e),pt(e),ve(e),At(e,"beforeCreate"),Jt(e),Mt(e),Kt(e),At(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}(_e),function(t){var e={};e.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=I,t.prototype.$delete=M,t.prototype.$watch=function(t,e,n){var r=this;if(a(e))return zt(r,t,e,n);(n=n||{}).user=!0;var i=new go(r,t,e,n);return n.immediate&&e.call(r,i.value),function(){i.teardown()}}}(_e),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,i=this;if(Array.isArray(t))for(var o=0,a=t.length;o<a;o++)r.$on(t[o],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){function n(){r.$off(t,n),e.apply(r,arguments)}var r=this;return n.fn=e,r.$on(t,n),r},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var i=0,o=t.length;i<o;i++)n.$off(t[i],e);return r}var a=r._events[t];if(!a)return r;if(1===arguments.length)return r._events[t]=null,r;for(var s,c=a.length;c--;)if((s=a[c])===e||s.fn===e){a.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?m(n):n;for(var r=m(arguments,1),i=0,o=n.length;i<o;i++)try{n[i].apply(e,r)}catch(n){k(n,e,'event handler for "'+t+'"')}}return e}}(_e),function(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&At(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=uo;uo=n,n._vnode=t,i?n.$el=n.__patch__(i,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),uo=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){At(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||p(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),At(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}(_e),function(t){t.prototype.$nextTick=function(t){return qi(t,this)},t.prototype._render=function(){var t=this,e=t.$options,n=e.render,r=e.staticRenderFns,i=e._parentVnode;if(t._isMounted)for(var o in t.$slots)t.$slots[o]=Q(t.$slots[o]);t.$scopedSlots=i&&i.data.scopedSlots||Oi,r&&!t._staticTrees&&(t._staticTrees=[]),t.$vnode=i;var a;try{a=n.call(t._renderProxy,t.$createElement)}catch(e){k(e,t,"render function"),a=t._vnode}return a instanceof io||(a=so()),a.parent=i,a},t.prototype._o=le,t.prototype._n=l,t.prototype._s=u,t.prototype._l=ie,t.prototype._t=oe,t.prototype._q=b,t.prototype._i=$,t.prototype._m=ue,t.prototype._f=ae,t.prototype._k=se,t.prototype._b=ce,t.prototype._v=Z,t.prototype._e=so,t.prototype._u=gt,t.prototype._g=de}(_e);var Oo=[String,RegExp,Array],To={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Oo,exclude:Oo},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)Se(t.cache[e])},watch:{include:function(t){Te(this.cache,this._vnode,function(e){return Oe(t,e)})},exclude:function(t){Te(this.cache,this._vnode,function(e){return!Oe(t,e)})}},render:function(){var t=ft(this.$slots.default),e=t&&t.componentOptions;if(e){var n=ke(e);if(n&&(this.include&&!Oe(this.include,n)||this.exclude&&Oe(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}}};!function(t){var e={};e.get=function(){return ki},Object.defineProperty(t,"config",e),t.util={warn:Si,extend:y,mergeOptions:z,defineReactive:N},t.set=I,t.delete=M,t.nextTick=qi,t.options=Object.create(null),xi.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,y(t.options.components,To),be(t),$e(t),Ce(t),Ae(t)}(_e),Object.defineProperty(_e.prototype,"$isServer",{get:zi}),Object.defineProperty(_e.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),_e.version="2.4.2";var So,Eo,jo,Lo,No,Io,Mo,Do,Po,Fo=f("style,class"),Ro=f("input,textarea,option,select"),Ho=function(t,e,n){return"value"===n&&Ro(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},Bo=f("contenteditable,draggable,spellcheck"),Uo=f("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Vo="http://www.w3.org/1999/xlink",zo=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Ko=function(t){return zo(t)?t.slice(6,t.length):""},Jo=function(t){return null==t||!1===t},qo={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Wo=f("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Go=f("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Zo=function(t){return Wo(t)||Go(t)},Yo=Object.create(null),Qo=Object.freeze({createElement:function(t,e){var n=document.createElement(t);return"select"!==t?n:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(t,e){return document.createElementNS(qo[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setAttribute:function(t,e,n){t.setAttribute(e,n)}}),Xo={create:function(t,e){Re(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Re(t,!0),Re(e))},destroy:function(t){Re(t,!0)}},ta=new io("",{},[]),ea=["create","activate","update","remove","destroy"],na={create:Ve,update:Ve,destroy:function(t){Ve(t,ta)}},ra=Object.create(null),ia=[Xo,na],oa={create:We,update:We},aa={create:Ze,update:Ze},sa=/[\w).+\-_$\]]/,ca="__r",ua="__c",la={create:wn,update:wn},fa={create:xn,update:xn},pa=v(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}),da=/^--/,va=/\s*!important$/,ha=function(t,e,n){if(da.test(e))t.style.setProperty(e,n);else if(va.test(n))t.style.setProperty(e,n.replace(va,""),"important");else{var r=ya(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},ma=["Webkit","Moz","ms"],ya=v(function(t){if(Po=Po||document.createElement("div").style,"filter"!==(t=yi(t))&&t in Po)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<ma.length;n++){var r=ma[n]+e;if(r in Po)return r}}),ga={create:jn,update:jn},_a=v(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),ba=ji&&!Ii,$a="transition",Ca="animation",wa="transition",xa="transitionend",Aa="animation",ka="animationend";ba&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(wa="WebkitTransition",xa="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Aa="WebkitAnimation",ka="webkitAnimationEnd"));var Oa=ji&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout,Ta=/\b(transform|all)(,|$)/,Sa=function(r){function o(t){return new io(E.tagName(t).toLowerCase(),{},[],void 0,t)}function a(t,e){function n(){0==--n.listeners&&s(t)}return n.listeners=e,n}function s(t){var n=E.parentNode(t);e(n)&&E.removeChild(n,t)}function c(t,r,i,o,a){if(t.isRootInsert=!a,!u(t,r,i,o)){var s=t.data,c=t.children,l=t.tag;e(l)?(t.elm=t.ns?E.createElementNS(t.ns,l):E.createElement(l,t),y(t),v(t,c,r),e(s)&&m(t,r),d(i,t.elm,o)):n(t.isComment)?(t.elm=E.createComment(t.text),d(i,t.elm,o)):(t.elm=E.createTextNode(t.text),d(i,t.elm,o))}}function u(t,r,i,o){var a=t.data;if(e(a)){var s=e(t.componentInstance)&&a.keepAlive;if(e(a=a.hook)&&e(a=a.init)&&a(t,!1,i,o),e(t.componentInstance))return l(t,r),n(s)&&p(t,r,i,o),!0}}function l(t,n){e(t.data.pendingInsert)&&(n.push.apply(n,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,h(t)?(m(t,n),y(t)):(Re(t),n.push(t))}function p(t,n,r,i){for(var o,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,e(o=a.data)&&e(o=o.transition)){for(o=0;o<T.activate.length;++o)T.activate[o](ta,a);n.push(a);break}d(r,t.elm,i)}function d(t,n,r){e(t)&&(e(r)?r.parentNode===t&&E.insertBefore(t,n,r):E.appendChild(t,n))}function v(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)c(e[r],n,t.elm,null,!0);else i(t.text)&&E.appendChild(t.elm,E.createTextNode(t.text))}function h(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return e(t.tag)}function m(t,n){for(var r=0;r<T.create.length;++r)T.create[r](ta,t);e(k=t.data.hook)&&(e(k.create)&&k.create(ta,t),e(k.insert)&&n.push(t))}function y(t){for(var n,r=t;r;)e(n=r.context)&&e(n=n.$options._scopeId)&&E.setAttribute(t.elm,n,""),r=r.parent;e(n=uo)&&n!==t.context&&e(n=n.$options._scopeId)&&E.setAttribute(t.elm,n,"")}function g(t,e,n,r,i,o){for(;r<=i;++r)c(n[r],o,t,e)}function _(t){var n,r,i=t.data;if(e(i))for(e(n=i.hook)&&e(n=n.destroy)&&n(t),n=0;n<T.destroy.length;++n)T.destroy[n](t);if(e(n=t.children))for(r=0;r<t.children.length;++r)_(t.children[r])}function b(t,n,r,i){for(;r<=i;++r){var o=n[r];e(o)&&(e(o.tag)?($(o),_(o)):s(o.elm))}}function $(t,n){if(e(n)||e(t.data)){var r,i=T.remove.length+1;for(e(n)?n.listeners+=i:n=a(t.elm,i),e(r=t.componentInstance)&&e(r=r._vnode)&&e(r.data)&&$(r,n),r=0;r<T.remove.length;++r)T.remove[r](t,n);e(r=t.data.hook)&&e(r=r.remove)?r(t,n):n()}else s(t.elm)}function C(n,r,i,o,a){for(var s,u,l,f=0,p=0,d=r.length-1,v=r[0],h=r[d],m=i.length-1,y=i[0],_=i[m],$=!a;f<=d&&p<=m;)t(v)?v=r[++f]:t(h)?h=r[--d]:He(v,y)?(w(v,y,o),v=r[++f],y=i[++p]):He(h,_)?(w(h,_,o),h=r[--d],_=i[--m]):He(v,_)?(w(v,_,o),$&&E.insertBefore(n,v.elm,E.nextSibling(h.elm)),v=r[++f],_=i[--m]):He(h,y)?(w(h,y,o),$&&E.insertBefore(n,h.elm,v.elm),h=r[--d],y=i[++p]):(t(s)&&(s=Ue(r,f,d)),t(u=e(y.key)?s[y.key]:null)?(c(y,o,n,v.elm),y=i[++p]):He(l=r[u],y)?(w(l,y,o),r[u]=void 0,$&&E.insertBefore(n,l.elm,v.elm),y=i[++p]):(c(y,o,n,v.elm),y=i[++p]));f>d?g(n,t(i[m+1])?null:i[m+1].elm,i,p,m,o):p>m&&b(n,r,f,d)}function w(r,i,o,a){if(r!==i){var s=i.elm=r.elm;if(n(r.isAsyncPlaceholder))e(i.asyncFactory.resolved)?A(r.elm,i,o):i.isAsyncPlaceholder=!0;else if(n(i.isStatic)&&n(r.isStatic)&&i.key===r.key&&(n(i.isCloned)||n(i.isOnce)))i.componentInstance=r.componentInstance;else{var c,u=i.data;e(u)&&e(c=u.hook)&&e(c=c.prepatch)&&c(r,i);var l=r.children,f=i.children;if(e(u)&&h(i)){for(c=0;c<T.update.length;++c)T.update[c](r,i);e(c=u.hook)&&e(c=c.update)&&c(r,i)}t(i.text)?e(l)&&e(f)?l!==f&&C(s,l,f,o,a):e(f)?(e(r.text)&&E.setTextContent(s,""),g(s,null,f,0,f.length-1,o)):e(l)?b(s,l,0,l.length-1):e(r.text)&&E.setTextContent(s,""):r.text!==i.text&&E.setTextContent(s,i.text),e(u)&&e(c=u.hook)&&e(c=c.postpatch)&&c(r,i)}}}function x(t,r,i){if(n(i)&&e(t.parent))t.parent.data.pendingInsert=r;else for(var o=0;o<r.length;++o)r[o].data.hook.insert(r[o])}function A(t,r,i){if(n(r.isComment)&&e(r.asyncFactory))return r.elm=t,r.isAsyncPlaceholder=!0,!0;r.elm=t;var o=r.tag,a=r.data,s=r.children;if(e(a)&&(e(k=a.hook)&&e(k=k.init)&&k(r,!0),e(k=r.componentInstance)))return l(r,i),!0;if(e(o)){if(e(s))if(t.hasChildNodes()){for(var c=!0,u=t.firstChild,f=0;f<s.length;f++){if(!u||!A(u,s[f],i)){c=!1;break}u=u.nextSibling}if(!c||u)return!1}else v(r,s,i);if(e(a))for(var p in a)if(!j(p)){m(r,i);break}}else t.data!==r.text&&(t.data=r.text);return!0}var k,O,T={},S=r.modules,E=r.nodeOps;for(k=0;k<ea.length;++k)for(T[ea[k]]=[],O=0;O<S.length;++O)e(S[O][ea[k]])&&T[ea[k]].push(S[O][ea[k]]);var j=f("attrs,style,class,staticClass,staticStyle,key");return function(r,i,a,s,u,l){if(!t(i)){var f=!1,p=[];if(t(r))f=!0,c(i,p,u,l);else{var d=e(r.nodeType);if(!d&&He(r,i))w(r,i,p,s);else{if(d){if(1===r.nodeType&&r.hasAttribute(wi)&&(r.removeAttribute(wi),a=!0),n(a)&&A(r,i,p))return x(i,p,!0),r;r=o(r)}var v=r.elm,m=E.parentNode(v);if(c(i,p,v._leaveCb?null:m,E.nextSibling(v)),e(i.parent)){for(var y=i.parent;y;)y.elm=i.elm,y=y.parent;if(h(i))for(var g=0;g<T.create.length;++g)T.create[g](ta,i.parent)}e(m)?b(m,[r],0,0):e(r.tag)&&_(r)}}return x(i,p,f),i.elm}e(r)&&_(r)}}({nodeOps:Qo,modules:[oa,aa,la,fa,ga,ji?{create:Jn,activate:Jn,remove:function(t,e){!0!==t.data.show?Vn(t,e):e()}}:{}].concat(ia)}),Ea=f("text,number,password,search,email,tel,url");Ii&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Yn(t,"input")});var ja={model:{inserted:function(t,e,n){if("select"===n.tag){var r=function(){qn(t,e,n.context)};r(),(Ni||Mi)&&setTimeout(r,0),t._vOptions=[].map.call(t.options,Wn)}else("textarea"===n.tag||Ea(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("change",Zn),Di||(t.addEventListener("compositionstart",Gn),t.addEventListener("compositionend",Zn)),Ii&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){qn(t,e,n.context);var r=t._vOptions;(t._vOptions=[].map.call(t.options,Wn)).some(function(t,e){return!b(t,r[e])})&&Yn(t,"change")}}},show:{bind:function(t,e,n){var r=e.value,i=(n=Qn(n)).data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,Un(n,function(){t.style.display=o})):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value;r!==e.oldValue&&((n=Qn(n)).data&&n.data.transition?(n.data.show=!0,r?Un(n,function(){t.style.display=t.__vOriginalDisplay}):Vn(n,function(){t.style.display="none"})):t.style.display=r?t.__vOriginalDisplay:"none")},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}}},La={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},Na={name:"transition",props:La,abstract:!0,render:function(t){var e=this,n=this.$options._renderChildren;if(n&&(n=n.filter(function(t){return t.tag||ir(t)})).length){var r=this.mode,o=n[0];if(nr(this.$vnode))return o;var a=Xn(o);if(!a)return o;if(this._leaving)return er(t,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=tr(this),u=this._vnode,l=Xn(u);if(a.data.directives&&a.data.directives.some(function(t){return"show"===t.name})&&(a.data.show=!0),l&&l.data&&!rr(a,l)&&!ir(l)){var f=l&&(l.data.transition=y({},c));if("out-in"===r)return this._leaving=!0,et(f,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),er(t,o);if("in-out"===r){if(ir(a))return u;var p,d=function(){p()};et(c,"afterEnter",d),et(c,"enterCancelled",d),et(f,"delayLeave",function(t){p=t})}}return o}}},Ia=y({tag:String,moveClass:String},La);delete Ia.mode;var Ma={Transition:Na,TransitionGroup:{props:Ia,render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=tr(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";if(t.length&&this.hasMove(t[0].elm,e)){t.forEach(or),t.forEach(ar),t.forEach(sr);document.body.offsetHeight;t.forEach(function(t){if(t.data.moved){var n=t.elm,r=n.style;Dn(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(xa,n._moveCb=function t(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(xa,t),n._moveCb=null,Pn(n,e))})}})}},methods:{hasMove:function(t,e){if(!ba)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(t){Nn(n,t)}),Ln(n,e),n.style.display="none",this.$el.appendChild(n);var r=Rn(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};_e.config.mustUseProp=Ho,_e.config.isReservedTag=Zo,_e.config.isReservedAttr=Fo,_e.config.getTagNamespace=Pe,_e.config.isUnknownElement=function(t){if(!ji)return!0;if(Zo(t))return!1;if(t=t.toLowerCase(),null!=Yo[t])return Yo[t];var e=document.createElement(t);return t.indexOf("-")>-1?Yo[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Yo[t]=/HTMLUnknownElement/.test(e.toString())},y(_e.options.directives,ja),y(_e.options.components,Ma),_e.prototype.__patch__=ji?Sa:_,_e.prototype.$mount=function(t,e){return t=t&&ji?Fe(t):void 0,bt(this,t,e)},setTimeout(function(){ki.devtools&&Ki&&Ki.emit("init",_e)},0);var Da,Pa=!!ji&&function(t,e){var n=document.createElement("div");return n.innerHTML='<div a="'+t+'"/>',n.innerHTML.indexOf(e)>0}("\n","&#10;"),Fa=/\{\{((?:.|\n)+?)\}\}/g,Ra=/[-.*+?^${}()|[\]\/\\]/g,Ha=v(function(t){var e=t[0].replace(Ra,"\\$&"),n=t[1].replace(Ra,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")}),Ba=[{staticKeys:["staticClass"],transformNode:function(t,e){e.warn;var n=sn(t,"class");n&&(t.staticClass=JSON.stringify(n));var r=an(t,"class",!1);r&&(t.classBinding=r)},genData:function(t){var e="";return t.staticClass&&(e+="staticClass:"+t.staticClass+","),t.classBinding&&(e+="class:"+t.classBinding+","),e}},{staticKeys:["staticStyle"],transformNode:function(t,e){e.warn;var n=sn(t,"style");n&&(t.staticStyle=JSON.stringify(pa(n)));var r=an(t,"style",!1);r&&(t.styleBinding=r)},genData:function(t){var e="";return t.staticStyle&&(e+="staticStyle:"+t.staticStyle+","),t.styleBinding&&(e+="style:("+t.styleBinding+"),"),e}}],Ua={model:function(t,e,n){Mo=n;var r=e.value,i=e.modifiers,o=t.tag,a=t.attrsMap.type;if(t.component)return cn(t,r,i),!1;if("select"===o)gn(t,r,i);else if("input"===o&&"checkbox"===a)mn(t,r,i);else if("input"===o&&"radio"===a)yn(t,r,i);else if("input"===o||"textarea"===o)_n(t,r,i);else if(!ki.isReservedTag(o))return cn(t,r,i),!1;return!0},text:function(t,e){e.value&&en(t,"textContent","_s("+e.value+")")},html:function(t,e){e.value&&en(t,"innerHTML","_s("+e.value+")")}},Va=f("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),za=f("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Ka=f("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Ja={expectHTML:!0,modules:Ba,directives:Ua,isPreTag:function(t){return"pre"===t},isUnaryTag:Va,mustUseProp:Ho,canBeLeftOpenTag:za,isReservedTag:Zo,getTagNamespace:Pe,staticKeys:function(t){return t.reduce(function(t,e){return t.concat(e.staticKeys||[])},[]).join(",")}(Ba)},qa={decode:function(t){return Da=Da||document.createElement("div"),Da.innerHTML=t,Da.textContent}},Wa=/([^\s"'<>/=]+)/,Ga=/(?:=)/,Za=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],Ya=new RegExp("^\\s*"+Wa.source+"(?:\\s*("+Ga.source+")\\s*(?:"+Za.join("|")+"))?"),Qa="[a-zA-Z_][\\w\\-\\.]*",Xa="((?:"+Qa+"\\:)?"+Qa+")",ts=new RegExp("^<"+Xa),es=/^\s*(\/?)>/,ns=new RegExp("^<\\/"+Xa+"[^>]*>"),rs=/^<!DOCTYPE [^>]+>/i,is=/^<!--/,os=/^<!\[/,as=!1;"x".replace(/x(.)?/g,function(t,e){as=""===e});var ss,cs,us,ls,fs,ps,ds,vs,hs,ms,ys=f("script,style,textarea",!0),gs={},_s={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n"},bs=/&(?:lt|gt|quot|amp);/g,$s=/&(?:lt|gt|quot|amp|#10);/g,Cs=f("pre,textarea",!0),ws=function(t,e){return t&&Cs(t)&&"\n"===e[0]},xs=/^@|^v-on:/,As=/^v-|^@|^:/,ks=/(.*?)\s+(?:in|of)\s+(.*)/,Os=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,Ts=/:(.*)$/,Ss=/^:|^v-bind:/,Es=/\.[^.]+/g,js=v(qa.decode),Ls=/^xmlns:NS\d+/,Ns=/^NS\d+:/,Is=v(function(t){return f("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(t?","+t:""))}),Ms=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,Ds=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Ps={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Fs=function(t){return"if("+t+")return null;"},Rs={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Fs("$event.target !== $event.currentTarget"),ctrl:Fs("!$event.ctrlKey"),shift:Fs("!$event.shiftKey"),alt:Fs("!$event.altKey"),meta:Fs("!$event.metaKey"),left:Fs("'button' in $event && $event.button !== 0"),middle:Fs("'button' in $event && $event.button !== 1"),right:Fs("'button' in $event && $event.button !== 2")},Hs={on:function(t,e){t.wrapListeners=function(t){return"_g("+t+","+e.value+")"}},bind:function(t,e){t.wrapData=function(n){return"_b("+n+",'"+t.tag+"',"+e.value+","+(e.modifiers&&e.modifiers.prop?"true":"false")+(e.modifiers&&e.modifiers.sync?",true":"")+")"}},cloak:_},Bs=function(t){this.options=t,this.warn=t.warn||Xe,this.transforms=tn(t.modules,"transformCode"),this.dataGenFns=tn(t.modules,"genData"),this.directives=y(y({},Hs),t.directives);var e=t.isReservedTag||$i;this.maybeComponent=function(t){return!e(t.tag)},this.onceId=0,this.staticRenderFns=[]},Us=function(t){return function(e){function n(n,r){var i=Object.create(e),o=[],a=[];if(i.warn=function(t,e){(e?a:o).push(t)},r){r.modules&&(i.modules=(e.modules||[]).concat(r.modules)),r.directives&&(i.directives=y(Object.create(e.directives),r.directives));for(var s in r)"modules"!==s&&"directives"!==s&&(i[s]=r[s])}var c=t(n,i);return c.errors=o,c.tips=a,c}return{compile:n,compileToFunctions:li(n)}}}(function(t,e){var n=fr(t.trim(),e);jr(n,e);var r=Hr(n,e);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}})(Ja).compileToFunctions,Vs=v(function(t){var e=Fe(t);return e&&e.innerHTML}),zs=_e.prototype.$mount;return _e.prototype.$mount=function(t,e){if((t=t&&Fe(t))===document.body||t===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Vs(r));else{if(!r.nodeType)return this;r=r.innerHTML}else t&&(r=fi(t));if(r){var i=Us(r,{shouldDecodeNewlines:Pa,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return zs.call(this,t,e)},_e.compile=Us,_e});
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&b<h+e?d=a:"right"===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),d===-1},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&a.namespace.indexOf("owl")!==-1?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&e*-1||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},
a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
/*
 * Author - Harshen Pandey
 * Version - 1.0.9
 * Release - 18th March 2017
 * Copyright (c) 2017 - 2020 Harshen Pandey
*/

!function(a){function b(b,m){var n=a.extend({},a.fn.countdowntimer.defaults,m),b=b;b.addClass("style");var o="",r="",s="",t="";if(o=n.size,r=n.borderColor,s=n.fontColor,t=n.backgroundColor,void 0!=m.regexpMatchFormat&&void 0!=m.regexpReplaceWith&&void 0==m.timeSeparator&&(window["regexpMatchFormat_"+b.attr("id")]=m.regexpMatchFormat,window["regexpReplaceWith_"+b.attr("id")]=m.regexpReplaceWith),void 0!=m.beforeExpiryTime){var w=n.beforeExpiryTime.split(":");"00"!=w[0]&&(window["beforeExpiryDays_"+b.attr("id")]=w[0]),"00"!=w[1]&&(window["beforeExpiryHours_"+b.attr("id")]=w[1]),"00"!=w[2]&&(window["beforeExpiryMinutes_"+b.attr("id")]=w[2]),"00"!=w[3]&&(window["beforeExpirySeconds_"+b.attr("id")]=w[3])}if(void 0!=m.borderColor||void 0!=m.fontColor||void 0!=m.backgroundColor){var x={background:t,color:s,"border-color":r};b.css(x)}else b.addClass("colorDefinition");if(void 0!=m.size)switch(o){case"xl":b.addClass("size_xl");break;case"lg":b.addClass("size_lg");break;case"md":b.addClass("size_md");break;case"sm":b.addClass("size_sm");break;case"xs":b.addClass("size_xs")}else"sm"==o&&b.addClass("size_sm");if(void 0!=m.startDate||void 0!=m.dateAndTime||void 0!=m.currentTime||void 0==m.hours&&void 0==m.minutes&&void 0==m.seconds)if(void 0!=m.startDate&&void 0!=m.dateAndTime&&void 0==m.currentTime){startDate="",endDate="",timer_startDate="",window["startDate"+b.attr("id")]=new Date(n.startDate),window["endDate"+b.attr("id")]=new Date(n.dateAndTime);var y="withStart";j(b,n,y),window["timer_startDate"+b.attr("id")]=setInterval(function(){j(b,n,y)},1e3*n.tickInterval)}else if(void 0==m.startDate&&void 0!=m.dateAndTime&&void 0==m.currentTime){startTime="",dateTime="",timer_givenDate="";var z=n.startDate.getHours()<10?"0"+n.startDate.getHours():n.startDate.getHours(),A=n.startDate.getMinutes()<10?"0"+n.startDate.getMinutes():n.startDate.getMinutes(),B=n.startDate.getSeconds()<10?"0"+n.startDate.getSeconds():n.startDate.getSeconds(),C=n.startDate.getMonth()+1<10?"0"+(n.startDate.getMonth()+1):n.startDate.getMonth()+1,D=n.startDate.getDate()<10?"0"+n.startDate.getDate():n.startDate.getDate(),E=n.startDate.getFullYear();window["startTime"+b.attr("id")]=new Date(E+"/"+C+"/"+D+" "+z+":"+A+":"+B),window["dateTime"+b.attr("id")]=new Date(n.dateAndTime);var y="withnoStart";j(b,n,y),window["timer_givenDate"+b.attr("id")]=setInterval(function(){j(b,n,y)},1e3*n.tickInterval)}else void 0!=m.currentTime?(currentTime="",timer_currentDate="",window["currentTime"+b.attr("id")]=n.currentTime,k(b,n),window["timer_currentDate"+b.attr("id")]=setInterval(function(){k(b,n)},1e3*n.tickInterval)):(countSeconds="",timer_secondsTimer="",window["countSeconds"+b.attr("id")]=n.seconds,window["timer_secondsTimer"+b.attr("id")]=setInterval(function(){l(b)},1e3));else void 0!=m.hours&&void 0==m.minutes&&void 0==m.seconds?(hours_H="",minutes_H="",seconds_H="",timer_H="",window["hours_H"+b.attr("id")]=n.hours,window["minutes_H"+b.attr("id")]=n.minutes,window["seconds_H"+b.attr("id")]=n.seconds,void 0!=m.pauseButton&&p(b,"H",n,c),void 0!=m.stopButton&&q(b,"H",n,c),c(b,n),window["timer_H"+b.attr("id")]=setInterval(function(){c(b,n)},1e3*n.tickInterval)):void 0==m.hours&&void 0!=m.minutes&&void 0==m.seconds?(hours_M="",minutes_M="",seconds_M="",timer_M="",window["hours_M"+b.attr("id")]=n.hours,window["minutes_M"+b.attr("id")]=n.minutes,window["seconds_M"+b.attr("id")]=n.seconds,void 0!=m.pauseButton&&p(b,"M",n,d),void 0!=m.stopButton&&q(b,"M",n,d),d(b,n),window["timer_M"+b.attr("id")]=setInterval(function(){d(b,n)},1e3*n.tickInterval)):void 0==m.hours&&void 0==m.minutes&&void 0!=m.seconds?(hours_S="",minutes_S="",seconds_S="",timer_S="",window["hours_S"+b.attr("id")]=n.hours,window["minutes_S"+b.attr("id")]=n.minutes,window["seconds_S"+b.attr("id")]=n.seconds,void 0!=m.pauseButton&&p(b,"S",n,e),void 0!=m.stopButton&&q(b,"S",n,e),e(b,n),window["timer_S"+b.attr("id")]=setInterval(function(){e(b,n)},1e3*n.tickInterval)):void 0!=m.hours&&void 0!=m.minutes&&void 0==m.seconds?(hours_HM="",minutes_HM="",seconds_HM="",timer_HM="",window["hours_HM"+b.attr("id")]=n.hours,window["minutes_HM"+b.attr("id")]=n.minutes,window["seconds_HM"+b.attr("id")]=n.seconds,void 0!=m.pauseButton&&p(b,"HM",n,f),void 0!=m.stopButton&&q(b,"HM",n,f),f(b,n),window["timer_HM"+b.attr("id")]=setInterval(function(){f(b,n)},1e3*n.tickInterval)):void 0==m.hours&&void 0!=m.minutes&&void 0!=m.seconds?(hours_MS="",minutes_MS="",seconds_MS="",timer_MS="",window["hours_MS"+b.attr("id")]=n.hours,window["minutes_MS"+b.attr("id")]=n.minutes,window["seconds_MS"+b.attr("id")]=n.seconds,void 0!=m.pauseButton&&p(b,"MS",n,g),void 0!=m.stopButton&&q(b,"MS",n,g),g(b,n),window["timer_MS"+b.attr("id")]=setInterval(function(){g(b,n)},1e3*n.tickInterval)):void 0!=m.hours&&void 0==m.minutes&&void 0!=m.seconds?(hours_HS="",minutes_HS="",seconds_HS="",timer_HS="",window["hours_HS"+b.attr("id")]=n.hours,window["minutes_HS"+b.attr("id")]=n.minutes,window["seconds_HS"+b.attr("id")]=n.seconds,void 0!=m.pauseButton&&p(b,"HS",n,h),void 0!=m.stopButton&&q(b,"HS",n,h),h(b,n),window["timer_HS"+b.attr("id")]=setInterval(function(){h(b,n)},1e3*n.tickInterval)):void 0!=m.hours&&void 0!=m.minutes&&void 0!=m.seconds&&(hours_HMS="",minutes_HMS="",seconds_HMS="",timer_HMS="",window["hours_HMS"+b.attr("id")]=n.hours,window["minutes_HMS"+b.attr("id")]=n.minutes,window["seconds_HMS"+b.attr("id")]=n.seconds,void 0!=m.pauseButton&&p(b,"HMS",n,i),void 0!=m.stopButton&&q(b,"HMS",n,i),i(b,n),window["timer_HMS"+b.attr("id")]=setInterval(function(){i(b,n)},1e3*n.tickInterval))}function c(a,b){var c=a.attr("id");window["minutes_H"+c]==b.minutes&&window["seconds_H"+c]==b.seconds&&window["hours_H"+c]==b.hours?(window["hours_H"+c].toString().length<2&&(window["hours_H"+c]="0"+window["hours_H"+c]),o(a,window["hours_H"+c]+b.timeSeparator+"00"+b.timeSeparator+"00"),"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_H"+c]&&n(a,b),window["seconds_H"+c]=60-b.tickInterval,window["minutes_H"+c]=59,0!=window["hours_H"+c]?window["hours_H"+c]--:(delete window["hours_H"+c],delete window["minutes_H"+c],delete window["seconds_H"+c],clearInterval(window["timer_H"+c]),m(a,b))):(window["hours_H"+c].toString().length<2&&(window["hours_H"+c]="0"+window["hours_H"+c]),window["minutes_H"+c].toString().length<2&&(window["minutes_H"+c]="0"+window["minutes_H"+c]),window["seconds_H"+c].toString().length<2&&(window["seconds_H"+c]="0"+window["seconds_H"+c]),o(a,window["hours_H"+c]+b.timeSeparator+window["minutes_H"+c]+b.timeSeparator+window["seconds_H"+c]),("undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_H"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_H"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_H"+c]||"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_H"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_H"+c]&&"undefined"==typeof window["beforeExpirySeconds_"+c]&&"00"==window["seconds_H"+c]||"undefined"==typeof window["beforeExpiryHours_"+c]&&"00"==window["hours_H"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_H"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_H"+c]||"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_H"+c]&&"undefined"==typeof window["beforeExpiryMinutes_"+c]&&"00"==window["minutes_H"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_H"+c]||"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_H"+c]&&"undefined"==typeof window["beforeExpiryMinutes_"+c]&&"00"==window["minutes_H"+c]&&"undefined"==typeof window["beforeExpirySeconds_"+c]&&"00"==window["seconds_H"+c]||"undefined"==typeof window["beforeExpiryHours_"+c]&&"00"==window["hours_H"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_H"+c]&&"undefined"==typeof window["beforeExpirySeconds_"+c]&&"00"==window["seconds_H"+c]||"undefined"==typeof window["beforeExpiryHours_"+c]&&"00"==window["hours_H"+c]&&"undefined"==typeof window["beforeExpiryMinutes_"+c]&&"00"==window["minutes_H"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_H"+c])&&n(a,b),window["seconds_H"+c]-=b.tickInterval,0!=window["minutes_H"+c]&&window["seconds_H"+c]<0&&(window["minutes_H"+c]--,window["seconds_H"+c]=60-b.tickInterval),0==window["minutes_H"+c]&&window["seconds_H"+c]<0&&0!=window["hours_H"+c]&&(window["hours_H"+c]--,window["minutes_H"+c]=59,window["seconds_H"+c]=60-b.tickInterval),0==window["minutes_H"+c]&&window["seconds_H"+c]<0&&0==window["hours_H"+c]&&(delete window["hours_H"+c],delete window["minutes_H"+c],delete window["seconds_H"+c],clearInterval(window["timer_H"+c]),m(a,b))),c=null}function d(a,b){var c=a.attr("id");window["minutes_M"+c]==b.minutes&&window["seconds_M"+c]==b.seconds?(window["minutes_M"+c].toString().length<2&&(window["minutes_M"+c]="0"+window["minutes_M"+c]),o(a,window["minutes_M"+c]+b.timeSeparator+"00"),"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_M"+c]&&n(a,b),window["seconds_M"+c]=60-b.tickInterval,0!=window["minutes_M"+c]?window["minutes_M"+c]--:(delete window["hours_M"+c],delete window["minutes_M"+c],delete window["seconds_M"+c],clearInterval(window["timer_M"+c]),m(a,b))):(window["minutes_M"+c].toString().length<2&&(window["minutes_M"+c]="0"+window["minutes_M"+c]),window["seconds_M"+c].toString().length<2&&(window["seconds_M"+c]="0"+window["seconds_M"+c]),o(a,window["minutes_M"+c]+b.timeSeparator+window["seconds_M"+c]),("undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_M"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_M"+c]||"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_M"+c]&&"undefined"==typeof window["beforeExpirySeconds_"+c]&&"00"==window["seconds_M"+c]||"undefined"==typeof window["beforeExpiryMinutes_"+c]&&"00"==window["minutes_M"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_M"+c])&&n(a,b),window["seconds_M"+c]-=b.tickInterval,0!=window["minutes_M"+c]&&window["seconds_M"+c]<0&&(window["minutes_M"+c]--,window["seconds_M"+c]=60-b.tickInterval),0==window["minutes_M"+c]&&window["seconds_M"+c]<0&&(delete window["hours_M"+c],delete window["minutes_M"+c],delete window["seconds_M"+c],clearInterval(window["timer_M"+c]),m(a,b))),c=null}function e(a,b){var c=a.attr("id");window["seconds_S"+c].toString().length<2&&(window["seconds_S"+c]="0"+window["seconds_S"+c]),o(a,window["seconds_S"+c]+" sec"),"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_S"+c]&&n(a,b),window["seconds_S"+c]-=b.tickInterval,window["seconds_S"+c]<0&&(delete window["hours_S"+c],delete window["minutes_S"+c],delete window["seconds_S"+c],clearInterval(window["timer_S"+c]),m(a,b)),c=null}function f(a,b){var c=a.attr("id");window["minutes_HM"+c]==b.minutes&&window["hours_HM"+c]==b.hours?(window["hours_HM"+c].toString().length<2&&(window["hours_HM"+c]="0"+window["hours_HM"+c]),window["minutes_HM"+c].toString().length<2&&(window["minutes_HM"+c]="0"+window["minutes_HM"+c]),o(a,window["hours_HM"+c]+b.timeSeparator+window["minutes_HM"+c]+b.timeSeparator+"00"),"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HM"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_HM"+c]&&n(a,b),0!=window["hours_HM"+c]&&0==window["minutes_HM"+c]?(window["hours_HM"+c]--,window["minutes_HM"+c]=59,window["seconds_HM"+c]=60-b.tickInterval):0==window["hours_HM"+c]&&0!=window["minutes_HM"+c]?(window["seconds_HM"+c]=60-b.tickInterval,window["minutes_HM"+c]--):(window["seconds_HM"+c]=60-b.tickInterval,window["minutes_HM"+c]--),0==window["hours_HM"+c]&&0==window["minutes_HM"+c]&&60==window["seconds_HM"+c]&&(delete window["hours_HM"+c],delete window["minutes_HM"+c],delete window["seconds_HM"+c],clearInterval(window["timer_HM"+c]),m(a,b))):(window["hours_HM"+c].toString().length<2&&(window["hours_HM"+c]="0"+window["hours_HM"+c]),window["minutes_HM"+c].toString().length<2&&(window["minutes_HM"+c]="0"+window["minutes_HM"+c]),window["seconds_HM"+c].toString().length<2&&(window["seconds_HM"+c]="0"+window["seconds_HM"+c]),o(a,window["hours_HM"+c]+b.timeSeparator+window["minutes_HM"+c]+b.timeSeparator+window["seconds_HM"+c]),("undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HM"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_HM"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_HM"+c]||"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HM"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_HM"+c]&&"undefined"==typeof window["beforeExpirySeconds_"+c]&&"00"==window["seconds_HM"+c]||"undefined"==typeof window["beforeExpiryHours_"+c]&&"00"==window["hours_HM"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_HM"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_HM"+c]||"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HM"+c]&&"undefined"==typeof window["beforeExpiryMinutes_"+c]&&"00"==window["minutes_HM"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_HM"+c]||"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HM"+c]&&"undefined"==typeof window["beforeExpiryMinutes_"+c]&&"00"==window["minutes_HM"+c]&&"undefined"==typeof window["beforeExpirySeconds_"+c]&&"00"==window["seconds_HM"+c]||"undefined"==typeof window["beforeExpiryHours_"+c]&&"00"==window["hours_HM"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_HM"+c]&&"undefined"==typeof window["beforeExpirySeconds_"+c]&&"00"==window["seconds_HM"+c]||"undefined"==typeof window["beforeExpiryHours_"+c]&&"00"==window["hours_HM"+c]&&"undefined"==typeof window["beforeExpiryMinutes_"+c]&&"00"==window["minutes_HM"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_HM"+c])&&n(a,b),window["seconds_HM"+c]-=b.tickInterval,0!=window["minutes_HM"+c]&&window["seconds_HM"+c]<0&&(window["minutes_HM"+c]--,window["seconds_HM"+c]=60-b.tickInterval),0==window["minutes_HM"+c]&&window["seconds_HM"+c]<0&&0!=window["hours_HM"+c]&&(window["hours_HM"+c]--,window["minutes_HM"+c]=59,window["seconds_HM"+c]=60-b.tickInterval),0==window["minutes_HM"+c]&&window["seconds_HM"+c]<0&&0==window["hours_HM"+c]&&(delete window["hours_HM"+c],delete window["minutes_HM"+c],delete window["seconds_HM"+c],clearInterval(window["timer_HM"+c]),m(a,b))),c=null}function g(a,b){var c=a.attr("id");window["minutes_MS"+c]==b.minutes&&window["seconds_MS"+c]==b.seconds?(window["minutes_MS"+c].toString().length<2&&(window["minutes_MS"+c]="0"+window["minutes_MS"+c]),window["seconds_MS"+c].toString().length<2&&(window["seconds_MS"+c]="0"+window["seconds_MS"+c]),o(a,window["minutes_MS"+c]+b.timeSeparator+window["seconds_MS"+c]),"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_MS"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_MS"+c]&&n(a,b),0!=window["minutes_MS"+c]&&0==window["seconds_MS"+c]?(window["minutes_MS"+c]--,window["seconds_MS"+c]=60-b.tickInterval):0==window["minutes_MS"+c]&&0==window["seconds_MS"+c]?(delete window["hours_MS"+c],delete window["minutes_MS"+c],delete window["seconds_MS"+c],clearInterval(window["timer_MS"+c]),m(a,b)):window["seconds_MS"+c]-=b.tickInterval):(window["minutes_MS"+c].toString().length<2&&(window["minutes_MS"+c]="0"+window["minutes_MS"+c]),window["seconds_MS"+c].toString().length<2&&(window["seconds_MS"+c]="0"+window["seconds_MS"+c]),o(a,window["minutes_MS"+c]+b.timeSeparator+window["seconds_MS"+c]),("undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_MS"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_MS"+c]||"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_MS"+c]&&"undefined"==typeof window["beforeExpirySeconds_"+c]&&"00"==window["seconds_MS"+c]||"undefined"==typeof window["beforeExpiryMinutes_"+c]&&"00"==window["minutes_MS"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_MS"+c])&&n(a,b),window["seconds_MS"+c]-=b.tickInterval,0!=window["minutes_MS"+c]&&window["seconds_MS"+c]<0&&(window["minutes_MS"+c]--,window["seconds_MS"+c]=60-b.tickInterval),0==window["minutes_MS"+c]&&window["seconds_MS"+c]<0&&(delete window["hours_MS"+c],delete window["minutes_MS"+c],delete window["seconds_MS"+c],clearInterval(window["timer_MS"+c]),m(a,b))),c=null}function h(a,b){var c=a.attr("id");window["seconds_HS"+c]==b.seconds&&window["hours_HS"+c]==b.hours?(window["hours_HS"+c].toString().length<2&&(window["hours_HS"+c]="0"+window["hours_HS"+c]),window["seconds_HS"+c].toString().length<2&&(window["seconds_HS"+c]="0"+window["seconds_HS"+c]),o(a,window["hours_HS"+c]+b.timeSeparator+"00"+b.timeSeparator+window["seconds_HS"+c]),"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HS"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_HS"+c]&&n(a,b),0==window["hours_HS"+c]&&0==window["seconds_HS"+c]?(delete window["hours_HS"+c],delete window["minutes_HS"+c],delete window["seconds_HS"+c],clearInterval(window["timer_HS"+c]),m(a,b)):0!=window["hours_HS"+c]&&0==window["seconds_HS"+c]?(window["hours_HS"+c]--,window["minutes_HS"+c]=59,window["seconds_HS"+c]=60-b.tickInterval):window["seconds_HS"+c]-=b.tickInterval):(window["hours_HS"+c].toString().length<2&&(window["hours_HS"+c]="0"+window["hours_HS"+c]),window["minutes_HS"+c].toString().length<2&&(window["minutes_HS"+c]="0"+window["minutes_HS"+c]),window["seconds_HS"+c].toString().length<2&&(window["seconds_HS"+c]="0"+window["seconds_HS"+c]),o(a,window["hours_HS"+c]+b.timeSeparator+window["minutes_HS"+c]+b.timeSeparator+window["seconds_HS"+c]),("undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HS"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_HS"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_HS"+c]||"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HS"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_HS"+c]&&"undefined"==typeof window["beforeExpirySeconds_"+c]&&"00"==window["seconds_HS"+c]||"undefined"==typeof window["beforeExpiryHours_"+c]&&"00"==window["hours_HS"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_HS"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_HS"+c]||"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HS"+c]&&"undefined"==typeof window["beforeExpiryMinutes_"+c]&&"00"==window["minutes_HS"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_HS"+c]||"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HS"+c]&&"undefined"==typeof window["beforeExpiryMinutes_"+c]&&"00"==window["minutes_HS"+c]&&"undefined"==typeof window["beforeExpirySeconds_"+c]&&"00"==window["seconds_HS"+c]||"undefined"==typeof window["beforeExpiryHours_"+c]&&"00"==window["hours_HS"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_HS"+c]&&"undefined"==typeof window["beforeExpirySeconds_"+c]&&"00"==window["seconds_HS"+c]||"undefined"==typeof window["beforeExpiryHours_"+c]&&"00"==window["hours_HS"+c]&&"undefined"==typeof window["beforeExpiryMinutes_"+c]&&"00"==window["minutes_HS"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_HS"+c])&&n(a,b),window["seconds_HS"+c]-=b.tickInterval,0!=window["minutes_HS"+c]&&window["seconds_HS"+c]<0&&(window["minutes_HS"+c]--,window["seconds_HS"+c]=60-b.tickInterval),0==window["minutes_HS"+c]&&window["seconds_HS"+c]<0&&0!=window["hours_HS"+c]&&(window["hours_HS"+c]--,window["minutes_HS"+c]=59,window["seconds_HS"+c]=60-b.tickInterval),0==window["minutes_HS"+c]&&window["seconds_HS"+c]<0&&0==window["hours_HS"+c]&&(delete window["hours_HS"+c],delete window["minutes_HS"+c],delete window["seconds_HS"+c],clearInterval(window["timer_HS"+c]),m(a,b))),c=null}function i(a,b){var c=a.attr("id");window["minutes_HMS"+c]==b.minutes&&window["seconds_HMS"+c]==b.seconds&&window["hours_HMS"+c]==b.hours?(window["hours_HMS"+c].toString().length<2&&(window["hours_HMS"+c]="0"+window["hours_HMS"+c]),window["minutes_HMS"+c].toString().length<2&&(window["minutes_HMS"+c]="0"+window["minutes_HMS"+c]),window["seconds_HMS"+c].toString().length<2&&(window["seconds_HMS"+c]="0"+window["seconds_HMS"+c]),o(a,window["hours_HMS"+c]+b.timeSeparator+window["minutes_HMS"+c]+b.timeSeparator+window["seconds_HMS"+c]),"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HMS"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_HMS"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_HMS"+c]&&n(a,b),0==window["hours_HMS"+c]&&0==window["minutes_HMS"+c]&&0==window["seconds_HMS"+c]?(delete window["hours_HMS"+c],delete window["minutes_HMS"+c],delete window["seconds_HMS"+c],clearInterval(window["timer_HMS"+c]),m(a,b)):0!=window["hours_HMS"+c]&&0==window["minutes_HMS"+c]&&0==window["seconds_HMS"+c]?(window["hours_HMS"+c]--,window["minutes_HMS"+c]=59,window["seconds_HMS"+c]=60-b.tickInterval):0==window["hours_HMS"+c]&&0!=window["minutes_HMS"+c]&&0==window["seconds_HMS"+c]?(window["minutes_HMS"+c]--,window["seconds_HMS"+c]=60-b.tickInterval):0!=window["hours_HMS"+c]&&0!=window["minutes_HMS"+c]&&0==window["seconds_HMS"+c]?(window["minutes_HMS"+c]--,window["seconds_HMS"+c]=60-b.tickInterval):window["seconds_HMS"+c]-=b.tickInterval):(window["hours_HMS"+c].toString().length<2&&(window["hours_HMS"+c]="0"+window["hours_HMS"+c]),window["minutes_HMS"+c].toString().length<2&&(window["minutes_HMS"+c]="0"+window["minutes_HMS"+c]),window["seconds_HMS"+c].toString().length<2&&(window["seconds_HMS"+c]="0"+window["seconds_HMS"+c]),o(a,window["hours_HMS"+c]+b.timeSeparator+window["minutes_HMS"+c]+b.timeSeparator+window["seconds_HMS"+c]),("undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HMS"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_HMS"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_HMS"+c]||"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HMS"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_HMS"+c]&&"undefined"==typeof window["beforeExpirySeconds_"+c]&&"00"==window["seconds_HMS"+c]||"undefined"==typeof window["beforeExpiryHours_"+c]&&"00"==window["hours_HMS"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_HMS"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_HMS"+c]||"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HMS"+c]&&"undefined"==typeof window["beforeExpiryMinutes_"+c]&&"00"==window["minutes_HMS"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_HMS"+c]||"undefined"!=typeof window["beforeExpiryHours_"+c]&&window["beforeExpiryHours_"+c]==window["hours_HMS"+c]&&"undefined"==typeof window["beforeExpiryMinutes_"+c]&&"00"==window["minutes_HMS"+c]&&"undefined"==typeof window["beforeExpirySeconds_"+c]&&"00"==window["seconds_HMS"+c]||"undefined"==typeof window["beforeExpiryHours_"+c]&&"00"==window["hours_HMS"+c]&&"undefined"!=typeof window["beforeExpiryMinutes_"+c]&&window["beforeExpiryMinutes_"+c]==window["minutes_HMS"+c]&&"undefined"==typeof window["beforeExpirySeconds_"+c]&&"00"==window["seconds_HMS"+c]||"undefined"==typeof window["beforeExpiryHours_"+c]&&"00"==window["hours_HMS"+c]&&"undefined"==typeof window["beforeExpiryMinutes_"+c]&&"00"==window["minutes_HMS"+c]&&"undefined"!=typeof window["beforeExpirySeconds_"+c]&&window["beforeExpirySeconds_"+c]==window["seconds_HMS"+c])&&n(a,b),window["seconds_HMS"+c]-=b.tickInterval,0!=window["minutes_HMS"+c]&&window["seconds_HMS"+c]<0&&(window["minutes_HMS"+c]--,window["seconds_HMS"+c]=60-b.tickInterval),0==window["minutes_HMS"+c]&&window["seconds_HMS"+c]<0&&0!=window["hours_HMS"+c]&&(window["hours_HMS"+c]--,window["minutes_HMS"+c]=59,window["seconds_HMS"+c]=60-b.tickInterval),0==window["minutes_HMS"+c]&&window["seconds_HMS"+c]<0&&0==window["hours_HMS"+c]&&(delete window["hours_HMS"+c],delete window["minutes_HMS"+c],delete window["seconds_HMS"+c],clearInterval(window["timer_HMS"+c]),m(a,b))),c=null}function j(a,b,c){var d=a.attr("id"),e="withnoStart"==c?window["dateTime"+d]:window["endDate"+d],f="withnoStart"==c?window["startTime"+d]:window["startDate"+d],g=Math.floor((e-f)/864e5),h=Math.floor((e-f)%864e5/36e5),i=Math.floor((e-f)%864e5/6e4)%60,j=Math.floor((e-f)%864e5/1e3)%60%60;e-f>0?(g.toString().length<2&&(g="0"+g),h.toString().length<2&&(h="0"+h),i.toString().length<2&&(i="0"+i),j.toString().length<2&&(j="0"+j),o(a,g+b.timeSeparator+h+b.timeSeparator+i+b.timeSeparator+j),("undefined"!=typeof window["beforeExpiryDays_"+d]&&window["beforeExpiryDays_"+d]==g&&"undefined"!=typeof window["beforeExpiryHours_"+d]&&window["beforeExpiryHours_"+d]==h&&"undefined"!=typeof window["beforeExpiryMinutes_"+d]&&window["beforeExpiryMinutes_"+d]==i&&"undefined"!=typeof window["beforeExpirySeconds_"+d]&&window["beforeExpirySeconds_"+d]==j||"undefined"!=typeof window["beforeExpiryDays_"+d]&&window["beforeExpiryDays_"+d]==g&&"undefined"!=typeof window["beforeExpiryHours_"+d]&&window["beforeExpiryHours_"+d]==h&&"undefined"!=typeof window["beforeExpiryMinutes_"+d]&&window["beforeExpiryMinutes_"+d]==i&&"undefined"==typeof window["beforeExpirySeconds_"+d]&&"00"==j||"undefined"!=typeof window["beforeExpiryDays_"+d]&&window["beforeExpiryDays_"+d]==g&&"undefined"!=typeof window["beforeExpiryHours_"+d]&&window["beforeExpiryHours_"+d]==h&&"undefined"==typeof window["beforeExpiryMinutes_"+d]&&"00"==i&&"undefined"!=typeof window["beforeExpirySeconds_"+d]&&window["beforeExpirySeconds_"+d]==j||"undefined"!=typeof window["beforeExpiryDays_"+d]&&window["beforeExpiryDays_"+d]==g&&"undefined"==typeof window["beforeExpiryHours_"+d]&&"00"==h&&"undefined"!=typeof window["beforeExpiryMinutes_"+d]&&window["beforeExpiryMinutes_"+d]==i&&"undefined"!=typeof window["beforeExpirySeconds_"+d]&&window["beforeExpirySeconds_"+d]==j||"undefined"==typeof window["beforeExpiryDays_"+d]&&"00"==g&&"undefined"!=typeof window["beforeExpiryHours_"+d]&&window["beforeExpiryHours_"+d]==h&&"undefined"!=typeof window["beforeExpiryMinutes_"+d]&&window["beforeExpiryMinutes_"+d]==i&&"undefined"!=typeof window["beforeExpirySeconds_"+d]&&window["beforeExpirySeconds_"+d]==j||"undefined"!=typeof window["beforeExpiryDays_"+d]&&window["beforeExpiryDays_"+d]==g&&"undefined"!=typeof window["beforeExpiryHours_"+d]&&window["beforeExpiryHours_"+d]==h&&"undefined"==typeof window["beforeExpiryMinutes_"+d]&&"00"==i&&"undefined"==typeof window["beforeExpirySeconds_"+d]&&"00"==j||"undefined"!=typeof window["beforeExpiryDays_"+d]&&window["beforeExpiryDays_"+d]==g&&"undefined"==typeof window["beforeExpiryHours_"+d]&&"00"==h&&"undefined"==typeof window["beforeExpiryMinutes_"+d]&&"00"==i&&"undefined"!=typeof window["beforeExpirySeconds_"+d]&&window["beforeExpirySeconds_"+d]==j||"undefined"==typeof window["beforeExpiryDays_"+d]&&"00"==g&&"undefined"==typeof window["beforeExpiryHours_"+d]&&"00"==h&&"undefined"!=typeof window["beforeExpiryMinutes_"+d]&&window["beforeExpiryMinutes_"+d]==i&&"undefined"!=typeof window["beforeExpirySeconds_"+d]&&window["beforeExpirySeconds_"+d]==j||"undefined"==typeof window["beforeExpiryDays_"+d]&&"00"==g&&"undefined"!=typeof window["beforeExpiryHours_"+d]&&window["beforeExpiryHours_"+d]==h&&"undefined"!=typeof window["beforeExpiryMinutes_"+d]&&window["beforeExpiryMinutes_"+d]==i&&"undefined"==typeof window["beforeExpirySeconds_"+d]&&"00"==j||"undefined"==typeof window["beforeExpiryDays_"+d]&&"00"==g&&"undefined"!=typeof window["beforeExpiryHours_"+d]&&window["beforeExpiryHours_"+d]==h&&"undefined"==typeof window["beforeExpiryMinutes_"+d]&&"00"==i&&"undefined"!=typeof window["beforeExpirySeconds_"+d]&&window["beforeExpirySeconds_"+d]==j||"undefined"!=typeof window["beforeExpiryDays_"+d]&&window["beforeExpiryDays_"+d]==g&&"undefined"==typeof window["beforeExpiryHours_"+d]&&"00"==h&&"undefined"!=typeof window["beforeExpiryMinutes_"+d]&&window["beforeExpiryMinutes_"+d]==i&&"undefined"==typeof window["beforeExpirySeconds_"+d]&&"00"==j||"undefined"!=typeof window["beforeExpiryDays_"+d]&&window["beforeExpiryDays_"+d]==g&&"undefined"==typeof window["beforeExpiryHours_"+d]&&"00"==h&&"undefined"==typeof window["beforeExpiryMinutes_"+d]&&"00"==i&&"undefined"==typeof window["beforeExpirySeconds_"+d]&&"00"==j||"undefined"==typeof window["beforeExpiryDays_"+d]&&"00"==g&&"undefined"!=typeof window["beforeExpiryHours_"+d]&&window["beforeExpiryHours_"+d]==h&&"undefined"==typeof window["beforeExpiryMinutes_"+d]&&"00"==i&&"undefined"==typeof window["beforeExpirySeconds_"+d]&&"00"==j||"undefined"==typeof window["beforeExpiryDays_"+d]&&"00"==g&&"undefined"==typeof window["beforeExpiryHours_"+d]&&"00"==h&&"undefined"!=typeof window["beforeExpiryMinutes_"+d]&&window["beforeExpiryMinutes_"+d]==i&&"undefined"==typeof window["beforeExpirySeconds_"+d]&&"00"==j||"undefined"==typeof window["beforeExpiryDays_"+d]&&"00"==g&&"undefined"==typeof window["beforeExpiryHours_"+d]&&"00"==h&&"undefined"==typeof window["beforeExpiryMinutes_"+d]&&"00"==i&&"undefined"!=typeof window["beforeExpirySeconds_"+d]&&window["beforeExpirySeconds_"+d]==j)&&n(a,b),"withnoStart"==c?window["startTime"+d].setSeconds(window["startTime"+d].getSeconds()+b.tickInterval):window["startDate"+d].setSeconds(window["startDate"+d].getSeconds()+b.tickInterval)):(o(a,"00"+b.timeSeparator+"00"+b.timeSeparator+"00"+b.timeSeparator+"00"),"withnoStart"==c?(delete window["dateTime"+d],delete window["startTime"+d],clearInterval(window["timer_givenDate"+d])):"withStart"==c&&(delete window["startDate"+d],delete window["endDate"+d],clearInterval(window["timer_startDate"+d])),m(a,b)),d=null}function k(a,b){if(1==window["currentTime"+a.attr("id")]){
var c=new Date,d=c.getHours(),e=c.getMinutes(),f=c.getSeconds();d.toString().length<2&&(d="0"+d),e.toString().length<2&&(e="0"+e),f.toString().length<2&&(f="0"+f),o(a,d+b.timeSeparator+e+b.timeSeparator+f)}else alert("Set Current Time option.")}function l(a){var b=a.attr("id");window["countSeconds"+b].toString().length<2&&(window["countSeconds"+b]="0"+window["countSeconds"+b]),o(a,window["countSeconds"+b]+" sec"),window["countSeconds"+b]--,window["countSeconds"+b]==-1&&(delete window["countSeconds"+b],clearInterval(window["timer_secondsTimer"+b])),b=null}function m(b,c){null!=c.timeUp&&1==a.isFunction(c.timeUp)&&c.timeUp.apply(b,[]),null!=c.expiryUrl&&(window.location=c.expiryUrl)}function n(b,c){null!=c.beforeExpiryTimeFunction&&1==a.isFunction(c.beforeExpiryTimeFunction)&&c.beforeExpiryTimeFunction.apply(b,[])}function o(a,b){var c=b;if("undefined"!=typeof window["regexpMatchFormat_"+a.attr("id")]&&"undefined"!=typeof window["regexpReplaceWith_"+a.attr("id")]){var d=new RegExp(window["regexpMatchFormat_"+a.attr("id")]);c=b.replace(d,window["regexpReplaceWith_"+a.attr("id")])}a.html(c)}function p(b,c,d,e){a("#"+d.pauseButton).click(function(){"resume"!=a(this).val()?(a("#"+d.pauseButton).val("resume").text("Resume"),clearInterval(window["timer_"+c+b.attr("id")])):"resume"==a(this).val()&&(a("#"+d.pauseButton).val("pause").text("Pause"),window["timer_"+c+b.attr("id")]=setInterval(function(){e(b,d)},1e3*d.tickInterval))})}function q(b,c,d,e){a("#"+d.stopButton).click(function(){"start"!=a(this).val()?(a("#"+d.stopButton).val("start").text("Start"),clearInterval(window["timer_"+c+b.attr("id")]),window["hours_"+c+b.attr("id")]=d.hours,window["minutes_"+c+b.attr("id")]=d.minutes,window["seconds_"+c+b.attr("id")]=d.seconds,e(b,d)):"start"==a(this).val()&&(a("#"+d.stopButton).val("stop").text("Stop"),window["timer_"+c+b.attr("id")]=setInterval(function(){e(b,d)},1e3*d.tickInterval))})}a.fn.countdowntimer=function(c){return this.each(function(){b(a(this),c)})},a.fn.countdowntimer.defaults={hours:0,minutes:0,seconds:60,startDate:new Date,dateAndTime:new Date("0000/00/00 00:00:00"),currentTime:!1,size:"sm",borderColor:"#F0068E",fontColor:"#FFFFFF",backgroundColor:"#000000",timeSeparator:":",tickInterval:1,timeUp:null,expiryUrl:null,regexpMatchFormat:null,regexpReplaceWith:null,pauseButton:null,stopButton:null,beforeExpiryTime:null,beforeExpiryTimeFunction:null}}(jQuery);

/*! lightslider - v1.1.6 - 2016-10-25
* https://github.com/sachinchoolur/lightslider
* Copyright (c) 2016 Sachin N; Licensed MIT */
!function(a,b){"use strict";var c={item:3,autoWidth:!1,slideMove:1,slideMargin:10,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:400,auto:!1,pauseOnHover:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!1,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:500,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(a){},onSliderLoad:function(a){},onBeforeSlide:function(a,b){},onAfterSlide:function(a,b){},onBeforeNextSlide:function(a,b){},onBeforePrevSlide:function(a,b){}};a.fn.lightSlider=function(b){if(0===this.length)return this;if(this.length>1)return this.each(function(){a(this).lightSlider(b)}),this;var d={},e=a.extend(!0,{},c,b),f={},g=this;d.$el=this,"fade"===e.mode&&(e.vertical=!1);var h=g.children(),i=a(window).width(),j=null,k=null,l=0,m=0,n=!1,o=0,p="",q=0,r=e.vertical===!0?"height":"width",s=e.vertical===!0?"margin-bottom":"margin-right",t=0,u=0,v=0,w=0,x=null,y="ontouchstart"in document.documentElement,z={};return z.chbreakpoint=function(){if(i=a(window).width(),e.responsive.length){var b;if(e.autoWidth===!1&&(b=e.item),i<e.responsive[0].breakpoint)for(var c=0;c<e.responsive.length;c++)i<e.responsive[c].breakpoint&&(j=e.responsive[c].breakpoint,k=e.responsive[c]);if("undefined"!=typeof k&&null!==k)for(var d in k.settings)k.settings.hasOwnProperty(d)&&(("undefined"==typeof f[d]||null===f[d])&&(f[d]=e[d]),e[d]=k.settings[d]);if(!a.isEmptyObject(f)&&i>e.responsive[0].breakpoint)for(var g in f)f.hasOwnProperty(g)&&(e[g]=f[g]);e.autoWidth===!1&&t>0&&v>0&&b!==e.item&&(q=Math.round(t/((v+e.slideMargin)*e.slideMove)))}},z.calSW=function(){e.autoWidth===!1&&(v=(o-(e.item*e.slideMargin-e.slideMargin))/e.item)},z.calWidth=function(a){var b=a===!0?p.find(".lslide").length:h.length;if(e.autoWidth===!1)m=b*(v+e.slideMargin);else{m=0;for(var c=0;b>c;c++)m+=parseInt(h.eq(c).width())+e.slideMargin}return m},d={doCss:function(){var a=function(){for(var a=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],b=document.documentElement,c=0;c<a.length;c++)if(a[c]in b.style)return!0};return e.useCSS&&a()?!0:!1},keyPress:function(){e.keyPress&&a(document).on("keyup.lightslider",function(b){a(":focus").is("input, textarea")||(b.preventDefault?b.preventDefault():b.returnValue=!1,37===b.keyCode?g.goToPrevSlide():39===b.keyCode&&g.goToNextSlide())})},controls:function(){e.controls&&(g.after('<div class="lSAction"><a class="lSPrev">'+e.prevHtml+'</a><a class="lSNext">'+e.nextHtml+"</a></div>"),e.autoWidth?z.calWidth(!1)<o&&p.find(".lSAction").hide():l<=e.item&&p.find(".lSAction").hide(),p.find(".lSAction a").on("click",function(b){return b.preventDefault?b.preventDefault():b.returnValue=!1,"lSPrev"===a(this).attr("class")?g.goToPrevSlide():g.goToNextSlide(),!1}))},initialStyle:function(){var a=this;"fade"===e.mode&&(e.autoWidth=!1,e.slideEndAnimation=!1),e.auto&&(e.slideEndAnimation=!1),e.autoWidth&&(e.slideMove=1,e.item=1),e.loop&&(e.slideMove=1,e.freeMove=!1),e.onBeforeStart.call(this,g),z.chbreakpoint(),g.addClass("lightSlider").wrap('<div class="lSSlideOuter '+e.addClass+'"><div class="lSSlideWrapper"></div></div>'),p=g.parent(".lSSlideWrapper"),e.rtl===!0&&p.parent().addClass("lSrtl"),e.vertical?(p.parent().addClass("vertical"),o=e.verticalHeight,p.css("height",o+"px")):o=g.outerWidth(),h.addClass("lslide"),e.loop===!0&&"slide"===e.mode&&(z.calSW(),z.clone=function(){if(z.calWidth(!0)>o){for(var b=0,c=0,d=0;d<h.length&&(b+=parseInt(g.find(".lslide").eq(d).width())+e.slideMargin,c++,!(b>=o+e.slideMargin));d++);var f=e.autoWidth===!0?c:e.item;if(f<g.find(".clone.left").length)for(var i=0;i<g.find(".clone.left").length-f;i++)h.eq(i).remove();if(f<g.find(".clone.right").length)for(var j=h.length-1;j>h.length-1-g.find(".clone.right").length;j--)q--,h.eq(j).remove();for(var k=g.find(".clone.right").length;f>k;k++)g.find(".lslide").eq(k).clone().removeClass("lslide").addClass("clone right").appendTo(g),q++;for(var l=g.find(".lslide").length-g.find(".clone.left").length;l>g.find(".lslide").length-f;l--)g.find(".lslide").eq(l-1).clone().removeClass("lslide").addClass("clone left").prependTo(g);h=g.children()}else h.hasClass("clone")&&(g.find(".clone").remove(),a.move(g,0))},z.clone()),z.sSW=function(){l=h.length,e.rtl===!0&&e.vertical===!1&&(s="margin-left"),e.autoWidth===!1&&h.css(r,v+"px"),h.css(s,e.slideMargin+"px"),m=z.calWidth(!1),g.css(r,m+"px"),e.loop===!0&&"slide"===e.mode&&n===!1&&(q=g.find(".clone.left").length)},z.calL=function(){h=g.children(),l=h.length},this.doCss()&&p.addClass("usingCss"),z.calL(),"slide"===e.mode?(z.calSW(),z.sSW(),e.loop===!0&&(t=a.slideValue(),this.move(g,t)),e.vertical===!1&&this.setHeight(g,!1)):(this.setHeight(g,!0),g.addClass("lSFade"),this.doCss()||(h.fadeOut(0),h.eq(q).fadeIn(0))),e.loop===!0&&"slide"===e.mode?h.eq(q).addClass("active"):h.first().addClass("active")},pager:function(){var a=this;if(z.createPager=function(){w=(o-(e.thumbItem*e.thumbMargin-e.thumbMargin))/e.thumbItem;var b=p.find(".lslide"),c=p.find(".lslide").length,d=0,f="",h=0;for(d=0;c>d;d++){"slide"===e.mode&&(e.autoWidth?h+=(parseInt(b.eq(d).width())+e.slideMargin)*e.slideMove:h=d*(v+e.slideMargin)*e.slideMove);var i=b.eq(d*e.slideMove).attr("data-thumb");if(f+=e.gallery===!0?'<li style="width:100%;'+r+":"+w+"px;"+s+":"+e.thumbMargin+'px"><a href="#"><img src="'+i+'" /></a></li>':'<li><a href="#">'+(d+1)+"</a></li>","slide"===e.mode&&h>=m-o-e.slideMargin){d+=1;var j=2;e.autoWidth&&(f+='<li><a href="#">'+(d+1)+"</a></li>",j=1),j>d?(f=null,p.parent().addClass("noPager")):p.parent().removeClass("noPager");break}}var k=p.parent();k.find(".lSPager").html(f),e.gallery===!0&&(e.vertical===!0&&k.find(".lSPager").css("width",e.vThumbWidth+"px"),u=d*(e.thumbMargin+w)+.5,k.find(".lSPager").css({property:u+"px","transition-duration":e.speed+"ms"}),e.vertical===!0&&p.parent().css("padding-right",e.vThumbWidth+e.galleryMargin+"px"),k.find(".lSPager").css(r,u+"px"));var l=k.find(".lSPager").find("li");l.first().addClass("active"),l.on("click",function(){return e.loop===!0&&"slide"===e.mode?q+=l.index(this)-k.find(".lSPager").find("li.active").index():q=l.index(this),g.mode(!1),e.gallery===!0&&a.slideThumb(),!1})},e.pager){var b="lSpg";e.gallery&&(b="lSGallery"),p.after('<ul class="lSPager '+b+'"></ul>');var c=e.vertical?"margin-left":"margin-top";p.parent().find(".lSPager").css(c,e.galleryMargin+"px"),z.createPager()}setTimeout(function(){z.init()},0)},setHeight:function(a,b){var c=null,d=this;c=e.loop?a.children(".lslide ").first():a.children().first();var f=function(){var d=c.outerHeight(),e=0,f=d;b&&(d=0,e=100*f/o),a.css({height:d+"px","padding-bottom":e+"%"})};f(),c.find("img").length?c.find("img")[0].complete?(f(),x||d.auto()):c.find("img").on("load",function(){setTimeout(function(){f(),x||d.auto()},100)}):x||d.auto()},active:function(a,b){this.doCss()&&"fade"===e.mode&&p.addClass("on");var c=0;if(q*e.slideMove<l){a.removeClass("active"),this.doCss()||"fade"!==e.mode||b!==!1||a.fadeOut(e.speed),c=b===!0?q:q*e.slideMove;var d,f;b===!0&&(d=a.length,f=d-1,c+1>=d&&(c=f)),e.loop===!0&&"slide"===e.mode&&(c=b===!0?q-g.find(".clone.left").length:q*e.slideMove,b===!0&&(d=a.length,f=d-1,c+1===d?c=f:c+1>d&&(c=0))),this.doCss()||"fade"!==e.mode||b!==!1||a.eq(c).fadeIn(e.speed),a.eq(c).addClass("active")}else a.removeClass("active"),a.eq(a.length-1).addClass("active"),this.doCss()||"fade"!==e.mode||b!==!1||(a.fadeOut(e.speed),a.eq(c).fadeIn(e.speed))},move:function(a,b){e.rtl===!0&&(b=-b),this.doCss()?a.css(e.vertical===!0?{transform:"translate3d(0px, "+-b+"px, 0px)","-webkit-transform":"translate3d(0px, "+-b+"px, 0px)"}:{transform:"translate3d("+-b+"px, 0px, 0px)","-webkit-transform":"translate3d("+-b+"px, 0px, 0px)"}):e.vertical===!0?a.css("position","relative").animate({top:-b+"px"},e.speed,e.easing):a.css("position","relative").animate({left:-b+"px"},e.speed,e.easing);var c=p.parent().find(".lSPager").find("li");this.active(c,!0)},fade:function(){this.active(h,!1);var a=p.parent().find(".lSPager").find("li");this.active(a,!0)},slide:function(){var a=this;z.calSlide=function(){m>o&&(t=a.slideValue(),a.active(h,!1),t>m-o-e.slideMargin?t=m-o-e.slideMargin:0>t&&(t=0),a.move(g,t),e.loop===!0&&"slide"===e.mode&&(q>=l-g.find(".clone.left").length/e.slideMove&&a.resetSlide(g.find(".clone.left").length),0===q&&a.resetSlide(p.find(".lslide").length)))},z.calSlide()},resetSlide:function(a){var b=this;p.find(".lSAction a").addClass("disabled"),setTimeout(function(){q=a,p.css("transition-duration","0ms"),t=b.slideValue(),b.active(h,!1),d.move(g,t),setTimeout(function(){p.css("transition-duration",e.speed+"ms"),p.find(".lSAction a").removeClass("disabled")},50)},e.speed+100)},slideValue:function(){var a=0;if(e.autoWidth===!1)a=q*(v+e.slideMargin)*e.slideMove;else{a=0;for(var b=0;q>b;b++)a+=parseInt(h.eq(b).width())+e.slideMargin}return a},slideThumb:function(){var a;switch(e.currentPagerPosition){case"left":a=0;break;case"middle":a=o/2-w/2;break;case"right":a=o-w}var b=q-g.find(".clone.left").length,c=p.parent().find(".lSPager");"slide"===e.mode&&e.loop===!0&&(b>=c.children().length?b=0:0>b&&(b=c.children().length));var d=b*(w+e.thumbMargin)-a;d+o>u&&(d=u-o-e.thumbMargin),0>d&&(d=0),this.move(c,d)},auto:function(){e.auto&&(clearInterval(x),x=setInterval(function(){g.goToNextSlide()},e.pause))},pauseOnHover:function(){var b=this;e.auto&&e.pauseOnHover&&(p.on("mouseenter",function(){a(this).addClass("ls-hover"),g.pause(),e.auto=!0}),p.on("mouseleave",function(){a(this).removeClass("ls-hover"),p.find(".lightSlider").hasClass("lsGrabbing")||b.auto()}))},touchMove:function(a,b){if(p.css("transition-duration","0ms"),"slide"===e.mode){var c=a-b,d=t-c;if(d>=m-o-e.slideMargin)if(e.freeMove===!1)d=m-o-e.slideMargin;else{var f=m-o-e.slideMargin;d=f+(d-f)/5}else 0>d&&(e.freeMove===!1?d=0:d/=5);this.move(g,d)}},touchEnd:function(a){if(p.css("transition-duration",e.speed+"ms"),"slide"===e.mode){var b=!1,c=!0;t-=a,t>m-o-e.slideMargin?(t=m-o-e.slideMargin,e.autoWidth===!1&&(b=!0)):0>t&&(t=0);var d=function(a){var c=0;if(b||a&&(c=1),e.autoWidth)for(var d=0,f=0;f<h.length&&(d+=parseInt(h.eq(f).width())+e.slideMargin,q=f+c,!(d>=t));f++);else{var g=t/((v+e.slideMargin)*e.slideMove);q=parseInt(g)+c,t>=m-o-e.slideMargin&&g%1!==0&&q++}};a>=e.swipeThreshold?(d(!1),c=!1):a<=-e.swipeThreshold&&(d(!0),c=!1),g.mode(c),this.slideThumb()}else a>=e.swipeThreshold?g.goToPrevSlide():a<=-e.swipeThreshold&&g.goToNextSlide()},enableDrag:function(){var b=this;if(!y){var c=0,d=0,f=!1;p.find(".lightSlider").addClass("lsGrab"),p.on("mousedown",function(b){return o>m&&0!==m?!1:void("lSPrev"!==a(b.target).attr("class")&&"lSNext"!==a(b.target).attr("class")&&(c=e.vertical===!0?b.pageY:b.pageX,f=!0,b.preventDefault?b.preventDefault():b.returnValue=!1,p.scrollLeft+=1,p.scrollLeft-=1,p.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"),clearInterval(x)))}),a(window).on("mousemove",function(a){f&&(d=e.vertical===!0?a.pageY:a.pageX,b.touchMove(d,c))}),a(window).on("mouseup",function(g){if(f){p.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"),f=!1,d=e.vertical===!0?g.pageY:g.pageX;var h=d-c;Math.abs(h)>=e.swipeThreshold&&a(window).on("click.ls",function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopImmediatePropagation(),b.stopPropagation(),a(window).off("click.ls")}),b.touchEnd(h)}})}},enableTouch:function(){var a=this;if(y){var b={},c={};p.on("touchstart",function(a){c=a.originalEvent.targetTouches[0],b.pageX=a.originalEvent.targetTouches[0].pageX,b.pageY=a.originalEvent.targetTouches[0].pageY,clearInterval(x)}),p.on("touchmove",function(d){if(o>m&&0!==m)return!1;var f=d.originalEvent;c=f.targetTouches[0];var g=Math.abs(c.pageX-b.pageX),h=Math.abs(c.pageY-b.pageY);e.vertical===!0?(3*h>g&&d.preventDefault(),a.touchMove(c.pageY,b.pageY)):(3*g>h&&d.preventDefault(),a.touchMove(c.pageX,b.pageX))}),p.on("touchend",function(){if(o>m&&0!==m)return!1;var d;d=e.vertical===!0?c.pageY-b.pageY:c.pageX-b.pageX,a.touchEnd(d)})}},build:function(){var b=this;b.initialStyle(),this.doCss()&&(e.enableTouch===!0&&b.enableTouch(),e.enableDrag===!0&&b.enableDrag()),a(window).on("focus",function(){b.auto()}),a(window).on("blur",function(){clearInterval(x)}),b.pager(),b.pauseOnHover(),b.controls(),b.keyPress()}},d.build(),z.init=function(){z.chbreakpoint(),e.vertical===!0?(o=e.item>1?e.verticalHeight:h.outerHeight(),p.css("height",o+"px")):o=p.outerWidth(),e.loop===!0&&"slide"===e.mode&&z.clone(),z.calL(),"slide"===e.mode&&g.removeClass("lSSlide"),"slide"===e.mode&&(z.calSW(),z.sSW()),setTimeout(function(){"slide"===e.mode&&g.addClass("lSSlide")},1e3),e.pager&&z.createPager(),e.adaptiveHeight===!0&&e.vertical===!1&&g.css("height",h.eq(q).outerHeight(!0)),e.adaptiveHeight===!1&&("slide"===e.mode?e.vertical===!1?d.setHeight(g,!1):d.auto():d.setHeight(g,!0)),e.gallery===!0&&d.slideThumb(),"slide"===e.mode&&d.slide(),e.autoWidth===!1?h.length<=e.item?p.find(".lSAction").hide():p.find(".lSAction").show():z.calWidth(!1)<o&&0!==m?p.find(".lSAction").hide():p.find(".lSAction").show()},g.goToPrevSlide=function(){if(q>0)e.onBeforePrevSlide.call(this,g,q),q--,g.mode(!1),e.gallery===!0&&d.slideThumb();else if(e.loop===!0){if(e.onBeforePrevSlide.call(this,g,q),"fade"===e.mode){var a=l-1;q=parseInt(a/e.slideMove)}g.mode(!1),e.gallery===!0&&d.slideThumb()}else e.slideEndAnimation===!0&&(g.addClass("leftEnd"),setTimeout(function(){g.removeClass("leftEnd")},400))},g.goToNextSlide=function(){var a=!0;if("slide"===e.mode){var b=d.slideValue();a=b<m-o-e.slideMargin}q*e.slideMove<l-e.slideMove&&a?(e.onBeforeNextSlide.call(this,g,q),q++,g.mode(!1),e.gallery===!0&&d.slideThumb()):e.loop===!0?(e.onBeforeNextSlide.call(this,g,q),q=0,g.mode(!1),e.gallery===!0&&d.slideThumb()):e.slideEndAnimation===!0&&(g.addClass("rightEnd"),setTimeout(function(){g.removeClass("rightEnd")},400))},g.mode=function(a){e.adaptiveHeight===!0&&e.vertical===!1&&g.css("height",h.eq(q).outerHeight(!0)),n===!1&&("slide"===e.mode?d.doCss()&&(g.addClass("lSSlide"),""!==e.speed&&p.css("transition-duration",e.speed+"ms"),""!==e.cssEasing&&p.css("transition-timing-function",e.cssEasing)):d.doCss()&&(""!==e.speed&&g.css("transition-duration",e.speed+"ms"),""!==e.cssEasing&&g.css("transition-timing-function",e.cssEasing))),a||e.onBeforeSlide.call(this,g,q),"slide"===e.mode?d.slide():d.fade(),p.hasClass("ls-hover")||d.auto(),setTimeout(function(){a||e.onAfterSlide.call(this,g,q)},e.speed),n=!0},g.play=function(){g.goToNextSlide(),e.auto=!0,d.auto()},g.pause=function(){e.auto=!1,clearInterval(x)},g.refresh=function(){z.init()},g.getCurrentSlideCount=function(){var a=q;if(e.loop){var b=p.find(".lslide").length,c=g.find(".clone.left").length;a=c-1>=q?b+(q-c):q>=b+c?q-b-c:q-c}return a+1},g.getTotalSlideCount=function(){return p.find(".lslide").length},g.goToSlide=function(a){q=e.loop?a+g.find(".clone.left").length-1:a,g.mode(!1),e.gallery===!0&&d.slideThumb()},g.destroy=function(){g.lightSlider&&(g.goToPrevSlide=function(){},g.goToNextSlide=function(){},g.mode=function(){},g.play=function(){},g.pause=function(){},g.refresh=function(){},g.getCurrentSlideCount=function(){},g.getTotalSlideCount=function(){},g.goToSlide=function(){},g.lightSlider=null,z={init:function(){}},g.parent().parent().find(".lSAction, .lSPager").remove(),g.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(),g.children().removeAttr("style"),h.removeClass("lslide active"),g.find(".clone").remove(),h=null,x=null,n=!1,q=0)},g.setConfig=function(key,val){if(typeof key === 'string'){e[key]=val}else if(typeof key === 'object'){e=a.extend(e,key)}},setTimeout(function(){e.onSliderLoad.call(this,g)},10),a(window).on("resize orientationchange",function(a){setTimeout(function(){a.preventDefault?a.preventDefault():a.returnValue=!1,z.init()},200)}),this}}(jQuery);
/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){"use strict";function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return a&&a===a.window},c.type=function(a){return a?"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a:a+""},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return b===undefined||f.call(a,b)},c.each=function(a,c,d){var e=0,f=a.length,g=b(a);if(d){if(g)for(;e<f&&c.apply(a[e],d)!==!1;e++);else for(e in a)if(a.hasOwnProperty(e)&&c.apply(a[e],d)===!1)break}else if(g)for(;e<f&&c.call(a[e],e,a[e])!==!1;e++);else for(e in a)if(a.hasOwnProperty(e)&&c.call(a[e],e,a[e])===!1)break;return a},c.data=function(a,b,e){if(e===undefined){var f=a[c.expando],g=f&&d[f];if(b===undefined)return g;if(g&&b in g)return g[b]}else if(b!==undefined){var h=a[c.expando]||(a[c.expando]=++c.uuid);return d[h]=d[h]||{},d[h][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&(b?c.each(b,function(a,b){delete f[b]}):delete d[e])},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);i<j;i++)if(f=arguments[i])for(e in f)f.hasOwnProperty(e)&&(a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):d!==undefined&&(h[e]=d)));return h},c.queue=function(a,d,e){if(a){d=(d||"fx")+"queue";var f=c.data(a,d);return e?(!f||c.isArray(e)?f=c.data(a,d,function(a,c){var d=c||[];return a&&(b(Object(a))?function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];if(c!==c)for(;b[d]!==undefined;)a[e++]=b[d++];a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}(e)):f.push(e),f):f||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){var a=this[0],b=function(a){for(var b=a.offsetParent;b&&"html"!==b.nodeName.toLowerCase()&&b.style&&"static"===b.style.position;)b=b.offsetParent;return b||document}(a),d=this.offset(),e=/^(?:body|html)$/i.test(b.nodeName)?{top:0,left:0}:c(b).offset();return d.top-=parseFloat(a.style.marginTop)||0,d.left-=parseFloat(a.style.marginLeft)||0,b.style&&(e.top+=parseFloat(b.style.borderTopWidth)||0,e.left+=parseFloat(b.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){"use strict";return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return u.isWrapped(a)?a=s.call(a):u.isNode(a)&&(a=[a]),a}function g(a){var b=o.data(a,"velocity");return null===b?d:b}function h(a,b){var c=g(a);c&&c.delayTimer&&!c.delayPaused&&(c.delayRemaining=c.delay-b+c.delayBegin,c.delayPaused=!0,clearTimeout(c.delayTimer.setTimeout))}function i(a,b){var c=g(a);c&&c.delayTimer&&c.delayPaused&&(c.delayPaused=!1,c.delayTimer.setTimeout=setTimeout(c.delayTimer.next,c.delayRemaining))}function j(a){return function(b){return Math.round(b*a)*(1/a)}}function k(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;e<p;++e){var f=j(c,a,d);if(0===f)return c;c-=(i(c,a,d)-b)/f}return c}function l(){for(var b=0;b<t;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do{g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g}while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!==f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0===i?h:m(b,c,c+u)}function o(){y=!0,a===c&&d===e||l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function l(a,b){var c=a;return u.isString(a)?y.Easings[a]||(c=!1):c=u.isArray(a)&&1===a.length?j.apply(null,a):u.isArray(a)&&2===a.length?z.apply(null,a.concat([b])):!(!u.isArray(a)||4!==a.length)&&k.apply(null,a),c===!1&&(c=y.Easings[y.defaults.easing]?y.defaults.easing:x),c}function m(a){if(a){var b=y.timestamp&&a!==!0?a:r.now(),c=y.State.calls.length;c>1e4&&(y.State.calls=e(y.State.calls),c=y.State.calls.length);for(var f=0;f<c;f++)if(y.State.calls[f]){var h=y.State.calls[f],i=h[0],j=h[2],k=h[3],l=!!k,q=null,s=h[5],t=h[6];if(k||(k=y.State.calls[f][3]=b-16),s){if(s.resume!==!0)continue;k=h[3]=Math.round(b-t-16),h[5]=null}t=h[6]=b-k;for(var v=Math.min(t/j.duration,1),w=0,x=i.length;w<x;w++){var z=i[w],B=z.element;if(g(B)){var D=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var E=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];o.each(E,function(a,b){A.setPropertyValue(B,"display",b)})}A.setPropertyValue(B,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&A.setPropertyValue(B,"visibility",j.visibility);for(var F in z)if(z.hasOwnProperty(F)&&"element"!==F){var G,H=z[F],I=u.isString(H.easing)?y.Easings[H.easing]:H.easing;if(u.isString(H.pattern)){var J=1===v?function(a,b,c){var d=H.endValue[b];return c?Math.round(d):d}:function(a,b,c){var d=H.startValue[b],e=H.endValue[b]-d,f=d+e*I(v,j,e);return c?Math.round(f):f};G=H.pattern.replace(/{(\d+)(!)?}/g,J)}else if(1===v)G=H.endValue;else{var K=H.endValue-H.startValue;G=H.startValue+K*I(v,j,K)}if(!l&&G===H.currentValue)continue;if(H.currentValue=G,"tween"===F)q=G;else{var L;if(A.Hooks.registered[F]){L=A.Hooks.getRoot(F);var M=g(B).rootPropertyValueCache[L];M&&(H.rootPropertyValue=M)}var N=A.setPropertyValue(B,F,H.currentValue+(p<9&&0===parseFloat(G)?"":H.unitType),H.rootPropertyValue,H.scrollData);A.Hooks.registered[F]&&(A.Normalizations.registered[L]?g(B).rootPropertyValueCache[L]=A.Normalizations.registered[L]("extract",null,N[1]):g(B).rootPropertyValueCache[L]=N[1]),"transform"===N[0]&&(D=!0)}}j.mobileHA&&g(B).transformCache.translate3d===d&&(g(B).transformCache.translate3d="(0px, 0px, 0px)",D=!0),D&&A.flushTransformCache(B)}}j.display!==d&&"none"!==j.display&&(y.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(y.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],v,Math.max(0,k+j.duration-b),k,q),1===v&&n(f)}}y.State.isTicking&&C(m)}function n(a,b){if(!y.State.calls[a])return!1;for(var c=y.State.calls[a][0],e=y.State.calls[a][1],f=y.State.calls[a][2],h=y.State.calls[a][4],i=!1,j=0,k=c.length;j<k;j++){var l=c[j].element;b||f.loop||("none"===f.display&&A.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&A.setPropertyValue(l,"visibility",f.visibility));var m=g(l);if(f.loop!==!0&&(o.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(o.queue(l)[1]))&&m){m.isAnimating=!1,m.rootPropertyValueCache={};var n=!1;o.each(A.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=m.transformCache[b];m.transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete m.transformCache[b])}),f.mobileHA&&(n=!0,delete m.transformCache.translate3d),n&&A.flushTransformCache(l),A.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(r){setTimeout(function(){throw r},1)}h&&f.loop!==!0&&h(e),m&&f.loop===!0&&!b&&(o.each(m.tweensContainer,function(a,b){if(/^rotate/.test(a)&&(parseFloat(b.startValue)-parseFloat(b.endValue))%360==0){var c=b.startValue;b.startValue=b.endValue,b.endValue=c}/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),y(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&o.dequeue(l,f.queue)}y.State.calls[a]=!1;for(var p=0,q=y.State.calls.length;p<q;p++)if(y.State.calls[p]!==!1){i=!0;break}i===!1&&(y.State.isTicking=!1,delete y.State.calls,y.State.calls=[])}var o,p=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),q=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),r=function(){var a=b.performance||{};if("function"!=typeof a.now){var c=a.timing&&a.timing.navigationStart?a.timing.navigationStart:(new Date).getTime();a.now=function(){return(new Date).getTime()-c}}return a}(),s=function(){var a=Array.prototype.slice;try{return a.call(c.documentElement),a}catch(b){return function(b,c){var d=this.length;if("number"!=typeof b&&(b=0),"number"!=typeof c&&(c=d),this.slice)return a.call(this,b,c);var e,f=[],g=b>=0?b:Math.max(0,d+b),h=c<0?d+c:Math.min(c,d),i=h-g;if(i>0)if(f=new Array(i),this.charAt)for(e=0;e<i;e++)f[e]=this.charAt(g+e);else for(e=0;e<i;e++)f[e]=this[g+e];return f}}}(),t=function(){return Array.prototype.includes?function(a,b){return a.includes(b)}:Array.prototype.indexOf?function(a,b){return a.indexOf(b)>=0}:function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1}},u={isNumber:function(a){return"number"==typeof a},isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isWrapped:function(a){return a&&a!==b&&u.isNumber(a.length)&&!u.isString(a)&&!u.isFunction(a)&&!u.isNode(a)&&(0===a.length||u.isNode(a[0]))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}},v=!1;if(a.fn&&a.fn.jquery?(o=a,v=!0):o=b.Velocity.Utilities,p<=8&&!v)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(p<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var w=400,x="swing",y={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:o,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:w,easing:x,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(a){o.data(a,"velocity",{isSVG:u.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:0},debug:!1,timestamp:!0,pauseAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||c[2].queue===!1))return!0;c[5]={resume:!1}}}),o.each(y.State.delayedElements,function(a,c){c&&h(c,b)})},resumeAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||c[2].queue===!1))return!0;c[5]&&(c[5].resume=!0)}}),o.each(y.State.delayedElements,function(a,c){c&&i(c,b)})}};b.pageYOffset!==d?(y.State.scrollAnchor=b,y.State.scrollPropertyLeft="pageXOffset",y.State.scrollPropertyTop="pageYOffset"):(y.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,y.State.scrollPropertyLeft="scrollLeft",y.State.scrollPropertyTop="scrollTop");var z=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*.016):g=.016;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>1e-4&&Math.abs(h.v)>1e-4))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();y.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},o.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){y.Easings[b[0]]=k.apply(null,b[1])});var A=y.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<A.Lists.colors.length;a++){var b="color"===A.Lists.colors[a]?"0 0 0 1":"255 255 255 1";A.Hooks.templates[A.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(p)for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(A.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),A.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");for(var g in e)if(e.hasOwnProperty(g)){var h=c+e[g],i=g;A.Hooks.registered[h]=[c,i]}}},getRoot:function(a){var b=A.Hooks.registered[a];return b?b[0]:a},getUnit:function(a,b){var c=(a.substr(b||0,5).match(/^[a-z%]+/)||[])[0]||"";return c&&t(A.Lists.units,c)?c:""},fixColors:function(a){return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(a,b,c){return A.Lists.colorNames.hasOwnProperty(c)?(b?b:"rgba(")+A.Lists.colorNames[c]+(b?"":",1)"):b+c})},cleanRootPropertyValue:function(a,b){return A.RegEx.valueUnwrap.test(b)&&(b=b.match(A.RegEx.valueUnwrap)[1]),A.Values.isCSSNullValue(b)&&(b=A.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=A.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=A.Hooks.cleanRootPropertyValue(d,b),b.toString().match(A.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=A.Hooks.registered[a];if(d){var e,f=d[0],g=d[1];return c=A.Hooks.cleanRootPropertyValue(f,c),e=c.toString().match(A.RegEx.valueSplit),e[g]=b,e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return A.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(A.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return y.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(p<=8)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){function a(a,b,c){if("border-box"===A.getPropertyValue(b,"boxSizing").toString().toLowerCase()===(c||!1)){var d,e,f=0,g="width"===a?["Left","Right"]:["Top","Bottom"],h=["padding"+g[0],"padding"+g[1],"border"+g[0]+"Width","border"+g[1]+"Width"];for(d=0;d<h.length;d++)e=parseFloat(A.getPropertyValue(b,h[d])),isNaN(e)||(f+=e);return c?-f:f}return 0}function b(b,c){return function(d,e,f){switch(d){case"name":return b;case"extract":return parseFloat(f)+a(b,e,c);case"inject":return parseFloat(f)-a(b,e,c)+"px"}}}p&&!(p>9)||y.State.isGingerbread||(A.Lists.transformsBase=A.Lists.transformsBase.concat(A.Lists.transforms3D));for(var c=0;c<A.Lists.transformsBase.length;c++)!function(){var a=A.Lists.transformsBase[c];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[a]===d?/^scale/i.test(a)?1:0:g(c).transformCache[a].replace(/[()]/g,"");case"inject":var f=!1;switch(a.substr(0,a.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":y.State.isAndroid&&g(c).transformCache[a]===d&&e<1&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[a]="("+e+")"),g(c).transformCache[a]}}}();for(var e=0;e<A.Lists.colors.length;e++)!function(){var a=A.Lists.colors[e];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return a;case"extract":var f;if(A.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:A.RegEx.isHex.test(e)?g="rgb("+A.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(A.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!p||p>8)&&3===f.split(" ").length&&(f+=" 1"),f;case"inject":return/^rgb/.test(e)?e:(p<=8?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(p<=8?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();A.Normalizations.registered.innerWidth=b("width",!0),A.Normalizations.registered.innerHeight=b("height",!0),A.Normalizations.registered.outerWidth=b("width"),A.Normalizations.registered.outerHeight=b("height")}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||y.State.isAndroid&&!y.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(y.State.prefixMatches[a])return[y.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;c<d;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),u.isString(y.State.prefixElement.style[e]))return y.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,c,d){return b+b+c+c+d+d}),b=c.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return!a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){if(a)if(a.classList)a.classList.add(b);else if(u.isString(a.className))a.className+=(a.className.length?" ":"")+b;else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c+(c?" ":"")+b)}},removeClass:function(a,b){if(a)if(a.classList)a.classList.remove(b);else if(u.isString(a.className))a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ");else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c.replace(new RegExp("(^|s)"+b.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(a,c,e,f){function h(a,c){var e=0;if(p<=8)e=o.css(a,c);else{var i=!1;/^(width|height)$/.test(c)&&0===A.getPropertyValue(a,"display")&&(i=!0,A.setPropertyValue(a,"display",A.Values.getDisplayType(a)));var j=function(){i&&A.setPropertyValue(a,"display","none")};if(!f){if("height"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(A.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(A.getPropertyValue(a,"paddingBottom"))||0);return j(),k}if("width"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(A.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(A.getPropertyValue(a,"paddingRight"))||0);return j(),l}}var m;m=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),e=9===p&&"filter"===c?m.getPropertyValue(c):m[c],""!==e&&null!==e||(e=a.style[c]),j()}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var n=h(a,"position");("fixed"===n||"absolute"===n&&/top|left/i.test(c))&&(e=o(a).position()[c]+"px")}return e}var i;if(A.Hooks.registered[c]){var j=c,k=A.Hooks.getRoot(j);e===d&&(e=A.getPropertyValue(a,A.Names.prefixCheck(k)[0])),A.Normalizations.registered[k]&&(e=A.Normalizations.registered[k]("extract",a,e)),i=A.Hooks.extractValue(j,e)}else if(A.Normalizations.registered[c]){var l,m;l=A.Normalizations.registered[c]("name",a),"transform"!==l&&(m=h(a,A.Names.prefixCheck(l)[0]),A.Values.isCSSNullValue(m)&&A.Hooks.templates[c]&&(m=A.Hooks.templates[c][1])),i=A.Normalizations.registered[c]("extract",a,m)}if(!/^[\d-]/.test(i)){var n=g(a);if(n&&n.isSVG&&A.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(q){i=0}else i=a.getAttribute(c);else i=h(a,A.Names.prefixCheck(c)[0])}return A.Values.isCSSNullValue(i)&&(i=0),y.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(A.Normalizations.registered[c]&&"transform"===A.Normalizations.registered[c]("name",a))A.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(A.Hooks.registered[c]){var i=c,j=A.Hooks.getRoot(c);e=e||A.getPropertyValue(a,j),d=A.Hooks.injectValue(i,d,e),c=j}if(A.Normalizations.registered[c]&&(d=A.Normalizations.registered[c]("inject",a,d),c=A.Normalizations.registered[c]("name",a)),h=A.Names.prefixCheck(c)[0],p<=8)try{a.style[h]=d}catch(l){y.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else{var k=g(a);k&&k.isSVG&&A.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d}y.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){var b="",c=g(a);if((p||y.State.isAndroid&&!y.State.isChrome)&&c&&c.isSVG){var d=function(b){return parseFloat(A.getPropertyValue(a,b))},e={translate:[d("translateX"),d("translateY")],skewX:[d("skewX")],skewY:[d("skewY")],scale:1!==d("scale")?[d("scale"),d("scale")]:[d("scaleX"),d("scaleY")],rotate:[d("rotateZ"),0,0]};o.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),e[a]&&(b+=a+"("+e[a].join(" ")+") ",delete e[a])})}else{var f,h;o.each(g(a).transformCache,function(c){if(f=g(a).transformCache[c],"transformPerspective"===c)return h=f,!0;9===p&&"rotateZ"===c&&(c="rotate"),b+=c+f+" "}),h&&(b="perspective"+h+" "+b)}A.setPropertyValue(a,"transform",b)}};A.Hooks.register(),A.Normalizations.register(),y.hook=function(a,b,c){var e;return a=f(a),o.each(a,function(a,f){if(g(f)===d&&y.init(f),c===d)e===d&&(e=A.getPropertyValue(f,b));else{var h=A.setPropertyValue(f,b,c);"transform"===h[0]&&y.CSS.flushTransformCache(f),e=h}}),e};var B=function(){function a(){return k?z.promise||null:p}function e(a,e){function f(f){var k,n;if(i.begin&&0===D)try{i.begin.call(r,r)}catch(V){setTimeout(function(){throw V},1)}if("scroll"===G){var p,q,w,x=/^x$/i.test(i.axis)?"Left":"Top",B=parseFloat(i.offset)||0;i.container?u.isWrapped(i.container)||u.isNode(i.container)?(i.container=i.container[0]||i.container,p=i.container["scroll"+x],w=p+o(a).position()[x.toLowerCase()]+B):i.container=null:(p=y.State.scrollAnchor[y.State["scrollProperty"+x]],q=y.State.scrollAnchor[y.State["scrollProperty"+("Left"===x?"Top":"Left")]],w=o(a).offset()[x.toLowerCase()]+B),j={scroll:{rootPropertyValue:!1,startValue:p,currentValue:p,endValue:w,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:x,alternateValue:q}},element:a},y.debug&&console.log("tweensContainer (scroll): ",j.scroll,a)}else if("reverse"===G){if(!(k=g(a)))return;if(!k.tweensContainer)return void o.dequeue(a,i.queue);"none"===k.opts.display&&(k.opts.display="auto"),"hidden"===k.opts.visibility&&(k.opts.visibility="visible"),k.opts.loop=!1,k.opts.begin=null,k.opts.complete=null,v.easing||delete i.easing,v.duration||delete i.duration,i=o.extend({},k.opts,i),n=o.extend(!0,{},k?k.tweensContainer:null);for(var E in n)if(n.hasOwnProperty(E)&&"element"!==E){var F=n[E].startValue;n[E].startValue=n[E].currentValue=n[E].endValue,n[E].endValue=F,u.isEmptyObject(v)||(n[E].easing=i.easing),y.debug&&console.log("reverse tweensContainer ("+E+"): "+JSON.stringify(n[E]),a)}j=n}else if("start"===G){k=g(a),k&&k.tweensContainer&&k.isAnimating===!0&&(n=k.tweensContainer);var H=function(e,f){var g,l=A.Hooks.getRoot(e),m=!1,p=f[0],q=f[1],r=f[2]
;if(!(k&&k.isSVG||"tween"===l||A.Names.prefixCheck(l)[1]!==!1||A.Normalizations.registered[l]!==d))return void(y.debug&&console.log("Skipping ["+l+"] due to a lack of browser support."));(i.display!==d&&null!==i.display&&"none"!==i.display||i.visibility!==d&&"hidden"!==i.visibility)&&/opacity|filter/.test(e)&&!r&&0!==p&&(r=0),i._cacheValues&&n&&n[e]?(r===d&&(r=n[e].endValue+n[e].unitType),m=k.rootPropertyValueCache[l]):A.Hooks.registered[e]?r===d?(m=A.getPropertyValue(a,l),r=A.getPropertyValue(a,e,m)):m=A.Hooks.templates[l][1]:r===d&&(r=A.getPropertyValue(a,e));var s,t,v,w=!1,x=function(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=A.Values.getUnitType(a)),[d,c]};if(r!==p&&u.isString(r)&&u.isString(p)){g="";var z=0,B=0,C=[],D=[],E=0,F=0,G=0;for(r=A.Hooks.fixColors(r),p=A.Hooks.fixColors(p);z<r.length&&B<p.length;){var H=r[z],I=p[B];if(/[\d\.-]/.test(H)&&/[\d\.-]/.test(I)){for(var J=H,K=I,L=".",N=".";++z<r.length;){if((H=r[z])===L)L="..";else if(!/\d/.test(H))break;J+=H}for(;++B<p.length;){if((I=p[B])===N)N="..";else if(!/\d/.test(I))break;K+=I}var O=A.Hooks.getUnit(r,z),P=A.Hooks.getUnit(p,B);if(z+=O.length,B+=P.length,O===P)J===K?g+=J+O:(g+="{"+C.length+(F?"!":"")+"}"+O,C.push(parseFloat(J)),D.push(parseFloat(K)));else{var Q=parseFloat(J),R=parseFloat(K);g+=(E<5?"calc":"")+"("+(Q?"{"+C.length+(F?"!":"")+"}":"0")+O+" + "+(R?"{"+(C.length+(Q?1:0))+(F?"!":"")+"}":"0")+P+")",Q&&(C.push(Q),D.push(0)),R&&(C.push(0),D.push(R))}}else{if(H!==I){E=0;break}g+=H,z++,B++,0===E&&"c"===H||1===E&&"a"===H||2===E&&"l"===H||3===E&&"c"===H||E>=4&&"("===H?E++:(E&&E<5||E>=4&&")"===H&&--E<5)&&(E=0),0===F&&"r"===H||1===F&&"g"===H||2===F&&"b"===H||3===F&&"a"===H||F>=3&&"("===H?(3===F&&"a"===H&&(G=1),F++):G&&","===H?++G>3&&(F=G=0):(G&&F<(G?5:4)||F>=(G?4:3)&&")"===H&&--F<(G?5:4))&&(F=G=0)}}z===r.length&&B===p.length||(y.debug&&console.error('Trying to pattern match mis-matched strings ["'+p+'", "'+r+'"]'),g=d),g&&(C.length?(y.debug&&console.log('Pattern found "'+g+'" -> ',C,D,"["+r+","+p+"]"),r=C,p=D,t=v=""):g=d)}g||(s=x(e,r),r=s[0],v=s[1],s=x(e,p),p=s[0].replace(/^([+-\/*])=/,function(a,b){return w=b,""}),t=s[1],r=parseFloat(r)||0,p=parseFloat(p)||0,"%"===t&&(/^(fontSize|lineHeight)$/.test(e)?(p/=100,t="em"):/^scale/.test(e)?(p/=100,t=""):/(Red|Green|Blue)$/i.test(e)&&(p=p/100*255,t="")));if(/[\/*]/.test(w))t=v;else if(v!==t&&0!==r)if(0===p)t=v;else{h=h||function(){var d={myParent:a.parentNode||c.body,position:A.getPropertyValue(a,"position"),fontSize:A.getPropertyValue(a,"fontSize")},e=d.position===M.lastPosition&&d.myParent===M.lastParent,f=d.fontSize===M.lastFontSize;M.lastParent=d.myParent,M.lastPosition=d.position,M.lastFontSize=d.fontSize;var g={};if(f&&e)g.emToPx=M.lastEmToPx,g.percentToPxWidth=M.lastPercentToPxWidth,g.percentToPxHeight=M.lastPercentToPxHeight;else{var h=k&&k.isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");y.init(h),d.myParent.appendChild(h),o.each(["overflow","overflowX","overflowY"],function(a,b){y.CSS.setPropertyValue(h,b,"hidden")}),y.CSS.setPropertyValue(h,"position",d.position),y.CSS.setPropertyValue(h,"fontSize",d.fontSize),y.CSS.setPropertyValue(h,"boxSizing","content-box"),o.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){y.CSS.setPropertyValue(h,b,"100%")}),y.CSS.setPropertyValue(h,"paddingLeft","100em"),g.percentToPxWidth=M.lastPercentToPxWidth=(parseFloat(A.getPropertyValue(h,"width",null,!0))||1)/100,g.percentToPxHeight=M.lastPercentToPxHeight=(parseFloat(A.getPropertyValue(h,"height",null,!0))||1)/100,g.emToPx=M.lastEmToPx=(parseFloat(A.getPropertyValue(h,"paddingLeft"))||1)/100,d.myParent.removeChild(h)}return null===M.remToPx&&(M.remToPx=parseFloat(A.getPropertyValue(c.body,"fontSize"))||16),null===M.vwToPx&&(M.vwToPx=parseFloat(b.innerWidth)/100,M.vhToPx=parseFloat(b.innerHeight)/100),g.remToPx=M.remToPx,g.vwToPx=M.vwToPx,g.vhToPx=M.vhToPx,y.debug>=1&&console.log("Unit ratios: "+JSON.stringify(g),a),g}();var S=/margin|padding|left|right|width|text|word|letter/i.test(e)||/X$/.test(e)||"x"===e?"x":"y";switch(v){case"%":r*="x"===S?h.percentToPxWidth:h.percentToPxHeight;break;case"px":break;default:r*=h[v+"ToPx"]}switch(t){case"%":r*=1/("x"===S?h.percentToPxWidth:h.percentToPxHeight);break;case"px":break;default:r*=1/h[t+"ToPx"]}}switch(w){case"+":p=r+p;break;case"-":p=r-p;break;case"*":p*=r;break;case"/":p=r/p}j[e]={rootPropertyValue:m,startValue:r,currentValue:r,endValue:p,unitType:t,easing:q},g&&(j[e].pattern=g),y.debug&&console.log("tweensContainer ("+e+"): "+JSON.stringify(j[e]),a)};for(var I in s)if(s.hasOwnProperty(I)){var J=A.Names.camelCase(I),K=function(b,c){var d,f,g;return u.isFunction(b)&&(b=b.call(a,e,C)),u.isArray(b)?(d=b[0],!u.isArray(b[1])&&/^[\d-]/.test(b[1])||u.isFunction(b[1])||A.RegEx.isHex.test(b[1])?g=b[1]:u.isString(b[1])&&!A.RegEx.isHex.test(b[1])&&y.Easings[b[1]]||u.isArray(b[1])?(f=c?b[1]:l(b[1],i.duration),g=b[2]):g=b[1]||b[2]):d=b,c||(f=f||i.easing),u.isFunction(d)&&(d=d.call(a,e,C)),u.isFunction(g)&&(g=g.call(a,e,C)),[d||0,f,g]}(s[I]);if(t(A.Lists.colors,J)){var L=K[0],O=K[1],P=K[2];if(A.RegEx.isHex.test(L)){for(var Q=["Red","Green","Blue"],R=A.Values.hexToRgb(L),S=P?A.Values.hexToRgb(P):d,T=0;T<Q.length;T++){var U=[R[T]];O&&U.push(O),S!==d&&U.push(S[T]),H(J+Q[T],U)}continue}}H(J,K)}j.element=a}j.element&&(A.Values.addClass(a,"velocity-animating"),N.push(j),k=g(a),k&&(""===i.queue&&(k.tweensContainer=j,k.opts=i),k.isAnimating=!0),D===C-1?(y.State.calls.push([N,r,i,null,z.resolver,null,0]),y.State.isTicking===!1&&(y.State.isTicking=!0,m())):D++)}var h,i=o.extend({},y.defaults,v),j={};switch(g(a)===d&&y.init(a),parseFloat(i.delay)&&i.queue!==!1&&o.queue(a,i.queue,function(b){y.velocityQueueEntryFlag=!0;var c=y.State.delayedElements.count++;y.State.delayedElements[c]=a;var d=function(a){return function(){y.State.delayedElements[a]=!1,b()}}(c);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(b,parseFloat(i.delay)),next:d}}),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=w;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}if(y.mock!==!1&&(y.mock===!0?i.duration=i.delay=1:(i.duration*=parseFloat(y.mock)||1,i.delay*=parseFloat(y.mock)||1)),i.easing=l(i.easing,i.duration),i.begin&&!u.isFunction(i.begin)&&(i.begin=null),i.progress&&!u.isFunction(i.progress)&&(i.progress=null),i.complete&&!u.isFunction(i.complete)&&(i.complete=null),i.display!==d&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),"auto"===i.display&&(i.display=y.CSS.Values.getDisplayType(a))),i.visibility!==d&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&y.State.isMobile&&!y.State.isGingerbread,i.queue===!1)if(i.delay){var k=y.State.delayedElements.count++;y.State.delayedElements[k]=a;var n=function(a){return function(){y.State.delayedElements[a]=!1,f()}}(k);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(f,parseFloat(i.delay)),next:n}}else f();else o.queue(a,i.queue,function(a,b){if(b===!0)return z.promise&&z.resolver(r),!0;y.velocityQueueEntryFlag=!0,f(a)});""!==i.queue&&"fx"!==i.queue||"inprogress"===o.queue(a)[0]||o.dequeue(a)}var j,k,p,q,r,s,v,x=arguments[0]&&(arguments[0].p||o.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||u.isString(arguments[0].properties));u.isWrapped(this)?(k=!1,q=0,r=this,p=this):(k=!0,q=1,r=x?arguments[0].elements||arguments[0].e:arguments[0]);var z={promise:null,resolver:null,rejecter:null};if(k&&y.Promise&&(z.promise=new y.Promise(function(a,b){z.resolver=a,z.rejecter=b})),x?(s=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(s=arguments[q],v=arguments[q+1]),!(r=f(r)))return void(z.promise&&(s&&v&&v.promiseRejectEmpty===!1?z.resolver():z.rejecter()));var C=r.length,D=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(s)&&!o.isPlainObject(v)){var E=q+1;v={};for(var F=E;F<arguments.length;F++)u.isArray(arguments[F])||!/^(fast|normal|slow)$/i.test(arguments[F])&&!/^\d/.test(arguments[F])?u.isString(arguments[F])||u.isArray(arguments[F])?v.easing=arguments[F]:u.isFunction(arguments[F])&&(v.complete=arguments[F]):v.duration=arguments[F]}var G;switch(s){case"scroll":G="scroll";break;case"reverse":G="reverse";break;case"pause":var H=(new Date).getTime();return o.each(r,function(a,b){h(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1)||(o.each(r,function(a,d){if(d===e)return b[5]={resume:!1},c=!0,!1}),!c&&void 0)})}),a();case"resume":return o.each(r,function(a,b){i(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1)||(!b[5]||(o.each(r,function(a,d){if(d===e)return b[5].resume=!0,c=!0,!1}),!c&&void 0))})}),a();case"finish":case"finishAll":case"stop":o.each(r,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==s||v!==!0&&!u.isString(v)||(o.each(o.queue(b,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b()}),o.queue(b,u.isString(v)?v:"",[]))});var I=[];return o.each(y.State.calls,function(a,b){b&&o.each(b[1],function(c,e){var f=v===d?"":v;if(f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1))return!0;o.each(r,function(c,d){if(d===e)if((v===!0||u.isString(v))&&(o.each(o.queue(d,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b(null,!0)}),o.queue(d,u.isString(v)?v:"",[])),"stop"===s){var h=g(d);h&&h.tweensContainer&&f!==!1&&o.each(h.tweensContainer,function(a,b){b.endValue=b.currentValue}),I.push(a)}else"finish"!==s&&"finishAll"!==s||(b[2].duration=1)})})}),"stop"===s&&(o.each(I,function(a,b){n(b,!0)}),z.promise&&z.resolver(r)),a();default:if(!o.isPlainObject(s)||u.isEmptyObject(s)){if(u.isString(s)&&y.Redirects[s]){j=o.extend({},v);var J=j.duration,K=j.delay||0;return j.backwards===!0&&(r=o.extend(!0,[],r).reverse()),o.each(r,function(a,b){parseFloat(j.stagger)?j.delay=K+parseFloat(j.stagger)*a:u.isFunction(j.stagger)&&(j.delay=K+j.stagger.call(b,a,C)),j.drag&&(j.duration=parseFloat(J)||(/^(callout|transition)/.test(s)?1e3:w),j.duration=Math.max(j.duration*(j.backwards?1-a/C:(a+1)/C),.75*j.duration,200)),y.Redirects[s].call(b,b,j||{},a,C,r,z.promise?z:d)}),a()}var L="Velocity: First argument ("+s+") was not a property map, a known action, or a registered redirect. Aborting.";return z.promise?z.rejecter(new Error(L)):b.console&&console.log(L),a()}G="start"}var M={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},N=[];o.each(r,function(a,b){u.isNode(b)&&e(b,a)}),j=o.extend({},y.defaults,v),j.loop=parseInt(j.loop,10);var O=2*j.loop-1;if(j.loop)for(var P=0;P<O;P++){var Q={delay:j.delay,progress:j.progress};P===O-1&&(Q.display=j.display,Q.visibility=j.visibility,Q.complete=j.complete),B(r,"reverse",Q)}return a()};y=o.extend(B,y),y.animate=B;var C=b.requestAnimationFrame||q;if(!y.State.isMobile&&c.hidden!==d){var D=function(){c.hidden?(C=function(a){return setTimeout(function(){a(!0)},16)},m()):C=b.requestAnimationFrame||q};D(),c.addEventListener("visibilitychange",D)}return a.Velocity=y,a!==b&&(a.fn.velocity=B,a.fn.velocity.defaults=y.defaults),o.each(["Down","Up"],function(a,b){y.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.begin,k=i.complete,l={},m={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};i.display===d&&(i.display="Down"===b?"inline"===y.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){0===e&&j&&j.call(g,g);for(var c in m)if(m.hasOwnProperty(c)){l[c]=a.style[c];var d=A.getPropertyValue(a,c);m[c]="Down"===b?[d,0]:[0,d]}l.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in l)l.hasOwnProperty(b)&&(a.style[b]=l[b]);e===f-1&&(k&&k.call(g,g),h&&h.resolver(g))},y(a,m,i)}}),o.each(["In","Out"],function(a,b){y.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.complete,k={opacity:"In"===b?1:0};0!==e&&(i.begin=null),i.complete=e!==f-1?null:function(){j&&j.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),y(this,k,i)}}),y}(window.jQuery||window.Zepto||window,window,window?window.document:undefined)});
/*! Menu HTML - v1.0.0 - 2017-05-05
* https://ecommerce.codazon.com
* Javascript for building menu html.
* Copyright 2017 CodazonGroup. */

$.fn.codazonMegaMenu = function(data){
	return this.each(function(){
		var $this = $(this);
		var megaMenu = {
			options: {
				type: 'horizontal',
				fixedLeftParent: '.cdz-fix-left',
				dropdownEffect: 'normal',
				rtlClass: 'rtl-layout',
				verClass: 'cdz-vertical-menu',
				horClass: 'cdz-horizontal-menu',
				parent: '.parent',
				subMenu: '.groupmenu-drop, .cat-tree .groupmenu-nondrop',
				triggerClass: 'dropdown-toggle',
				stopClickOnPC: true,
				delay: 100,
				contPadding: false,
				responsive: {
					1024: 'mobile',
				}
			},
			init: function(data){
				var self = this;
				this.options = $.extend({},self.options,data);
				this.element = $this;
				this._create();
			},
			_create: function() {
				var self = this,
					$body = $('body'),
					conf = this.options;
				this.options.trigger = '.' + conf.triggerClass;
				if(self.element.parents(conf.fixedLeftParent).length == 0){
					self.element.parent().addClass(conf.fixedLeftParent.replace('.',''));
					var $fixedLeftParent = self.element.parent();
				}else{
					var $fixedLeftParent = self.element.parents(conf.fixedLeftParent).first();
				}
				if(conf.contPadding === false){
					conf.contPadding = parseInt($fixedLeftParent.css('padding-left'));
				}
				var $menu = self.element;
				if(conf.type == 0){
					self._dropdownWidthStyle();
				}
				if ($menu.hasClass(conf.horClass)) {
					if ($body.hasClass(conf.rtlClass) || ($menu.parents('.'+conf.rtlClass).length > 0)) {
						self._alignMenuRight(conf);
					} else {
						self._alignMenuLeft(conf);
					}
				} else {
					self._alignMenuTop();	
				}
				self._currentMode = self._getMode();
				self._rebuildHtmlStructure();
				self._setupMenu();
				self._responsive();
				if (conf.type != 1) {
					self._dropdownEffect();
				}
				self._menuTabs();
			},
			
			_menuTabs: function() {
				var self = this;
				$('.menu-tabs',$(self.element)).each(function(){
					var $tabs = $(this);
					if($tabs.parents('.tab-item').length > 0){
						var $tabParent = $tabs.parents('.tab-item').first().find('.cdz-tab-pane').find(' > .groupmenu-drop-content').first();
						if(typeof $tabs.data('attached') === 'undefined'){
							var $liParent = $tabs.parents('.item').first();
							$tabs.data('attached',true);
							$liParent.prevAll().each(function(){
								var $prev = $(this);
								$prev.appendTo($tabParent);
								$prev.children().first().unwrap();
							});
							var checkTab = false;
							$tabs.prevAll().appendTo($tabParent);
							$tabs.appendTo($tabParent);
							$liParent.nextAll().each(function(){
								var $next = $(this);
								if($next.children('.menu-tabs').length > 0){
									checkTab = true; return false;
								}
							});
							if(!checkTab){
								$liParent.nextAll().each(function(){
									var $next = $(this);
									$next.appendTo($tabParent);
									$next.children().first().unwrap();
								});
							}
							$liParent.remove();
						}
					}
				});
				
				$('.menu-tabs',$(self.element)).each(function(){
					var $tabs = $(this);
					var html = '';
					if($tabs.parents('.menu-tabs').length > 0){
						var leftClass = 'col-sm-3';
						var rightClass = 'col-sm-9';
					}else{
						var leftClass = 'col-sm-2';
						var rightClass = 'col-sm-10';
					}
					var isVerticalTab = $tabs.hasClass('cdz-vertical-tabs');
					html +=	'<div class="'+(isVerticalTab?'row':'')+' cdz-tabs">';
					html +=		'<div class="'+(isVerticalTab?leftClass:'')+' cdz-nav-tabs"></div>';
					html +=		'<div class="'+(isVerticalTab?rightClass:'')+' cdz-tab-content"></div>';
					html +=	'</div>';
					var $tabInner = $(html);
					var $accordion = $('> .groupmenu-nondrop',$tabs);
					$tabInner.appendTo($tabs);
					var tabLinks = [];
					var tabPanes = [];
					
					$('> .tab-item',$accordion).each(function(index, element) {
						var $tabItem = $(this), $tabLink = $('> .cdz-link-wrap > .cdz-tab-link',$tabItem), $tabPane = $('> .cdz-tab-pane',$tabItem);
						tabLinks.push($tabLink);
						tabPanes.push($tabPane);
					});
					
					$('> .tab-item',$accordion).each(function(){
						var $tabItem = $(this), $tabLink = $('> .cdz-link-wrap > .cdz-tab-link',$tabItem), $tabPane = $('> .cdz-tab-pane',$tabItem);
						$tabLink.on('mouseenter.cdztabs',
							function(e){
								$(tabLinks).each(function(){ $(this).removeClass('active') });
								$(tabPanes).each(function(){ $(this).removeClass('active') });
								$tabPane.addClass('active');
								$tabLink.addClass('active');
							}
						);
						$tabLink.appendTo($('> .cdz-nav-tabs',$tabInner));
						$tabPane.appendTo($('> .cdz-tab-content',$tabInner));
					});
					$('.cdz-tab-pane',$tabInner).first().addClass('active');
					$('.cdz-tab-link',$tabInner).first().addClass('active');
					$accordion.hide();
					
					function pcTabs(){
						$accordion.hide();
						$tabInner.show();
						$('> .tab-item',$accordion).each(function(id,el){
							var $tabItem = $(this);
							var $tabLink = tabLinks[id], $tabPane = tabPanes[id];
							$('.dropdown-toggle',$tabLink.parent()).remove();
							$tabLink.appendTo($('> .cdz-nav-tabs',$tabInner));
							$tabPane.appendTo($('> .cdz-tab-content',$tabInner));
							$tabPane.css('display','');
							$tabPane.removeClass('active');
							$tabLink.removeClass('active');
							$tabLink.on('mouseenter.cdztabs',
								function(e){
									$(tabLinks).each(function(){ $(this).removeClass('active') });
									$(tabPanes).each(function(){ $(this).removeClass('active') });
									$tabPane.addClass('active');
									$tabLink.addClass('active');
								}
							);
						});
						tabLinks[0].addClass('active');
						tabPanes[0].addClass('active');
					}
					function mbTabs(){
						$accordion.show();
						$tabInner.hide();
						$('> .cdz-nav-tabs > .cdz-tab-link',$tabInner).each(function(id,el){
							var $tabLink = $(this), $tabPane = tabPanes[id],
							$tabItem = $('> .tab-item:eq('+id+')',$accordion),
							$linkWrap = $('> .cdz-link-wrap',$tabItem);
							$tabLink.off('mouseenter.cdztabs');
							var $toggle = $('<span class="dropdown-toggle"></span>');
							$tabLink.appendTo($linkWrap)
							
							$toggle.appendTo($linkWrap);
							$tabPane.appendTo($tabItem);
							$tabPane.hide();
							$tabLink.removeClass('active');
							$tabPane.removeClass('active');
							$toggle.on('click',function(){
								$tabLink.toggleClass('active');
								$tabPane.slideToggle(200,function(){
									$tabPane.toggleClass('active');	
									$tabPane.height('');
								});
							});
						});
					}
					var currentMode = self._getMode();
					if (currentMode == 'mobile') {
						mbTabs();
					}
					function tabMinHeight(tabPanes){
						var maxHeight = 0;
						$(tabPanes).each(function(){
							$(this).css({minHeight:''});
							$(this).show();
						});
						$(tabPanes).each(function(id,el){
							var $childPane = $(tabPanes[id]).find('.cdz-tab-pane');
							if($childPane.length){
								tabMinHeight($childPane);
							}
							if($(tabPanes[id]).height() > maxHeight){
								maxHeight = $(tabPanes[id]).height();
							}
						});
						$(tabPanes).each(function(){
							$(this).css({minHeight:maxHeight});
							$(this).css('display','');
						});
					}
					$tabs.parents('li.level0').first().find('> .groupmenu-drop').on('animated',function(){
						tabMinHeight(tabPanes);
					});
					$tabs.parents('li.level0').hover(
						function(){
							if(self._getMode() != 'mobile'){
								switch(self.options.dropdownEffect){
									case 'slide':
									case 'fade':
										break;
									case 'normal':
										setTimeout(function(){
											tabMinHeight(tabPanes);
										},150);
										break;
									default:
										tabMinHeight(tabPanes);								
								}
							}
						},
						function(){
							$(tabPanes).each(function(){
								$(this).css({minHeight:''});
							});
						}
					);
						
					$(window).on('resize', function() {
						var mode = self._getMode();
						if (currentMode != mode) {
							currentMode = mode;
							if (mode == 'mobile') {
								mbTabs();
							} else {
								pcTabs();
							}
						}
					});
				});
			},
			_dropdownWidthStyle: function(){
				var self = this;
				var $win = $(window);
				$('body').addClass(fixedLeftClass);
				if(self.element.hasClass('dropdown-fullwidth')){
					self.options.fixedLeftParent = '.cdz-fullwidth-fix-left';
					var fixedLeftClass = self.options.fixedLeftParent.replace('.','');
					if(self.element.parents(self.options.fixedLeftParent).length == 0){
						$('body').addClass(fixedLeftClass);
					}
					var $container = self.element.parents(self.options.fixedLeftParent).first();
					$('li.item.level0',self.element).each(function(){
						
						var $li = $(this);
						var $dropdown = $('> .groupmenu-drop',$li);
						if( !$dropdown.hasClass('cat-tree') ){
							function setWidth(mode){
								if (mode == 'desktop') {
									$dropdown.width($container.outerWidth(true));
								} else {
									$dropdown.width('');
								}
							}
							var mode = self._getMode();
							setWidth(mode);
							$(window).on('resize', function() {
								mode = self._getMode();
								setWidth(mode);
							});
						}
					});
				}
			},
			_assignControls: function () {
				this.controls = {
					toggleBtn: $('[data-action="toggle-nav"]'),
					swipeArea: $('.nav-sections')
				};

				return this;
			},
			_listen: function () {
				var controls = this.controls;
				var toggle = this.toggle;
				controls.toggleBtn.unbind();
				controls.swipeArea.unbind();
				this._on(controls.toggleBtn, {'click': toggle});
				this._on(controls.swipeArea, {'swipeleft': toggle});
			},
			toggle: function () {
				if ($('html').hasClass('nav-open')) {           
					setTimeout(function () {
					   $('html').removeClass('nav-open');
						$('html').removeClass('nav-before-open');
					}, 500);
				} else {
					$('html').addClass('nav-before-open');
					setTimeout(function () {
						$('html').addClass('nav-open');
					}, 42);
				}
			},
			_currentMode: false,
			_dropdownEffect: function() {
				var self = this;
				var conf = this.options,
					effect = conf.dropdownEffect;
				switch (effect) {
					case 'translate':
					case 'slide':
					case 'fade':
					default:
						self._attachEffect(effect);
						break;
				}
			},
			_attachEffect: function(type) {
				var self = this,
					conf = this.options;
				var timeout = false;
				$('.level-top', self.element).each(function() {
					var $leveltop = $(this);
					var $drop = $leveltop.children('.groupmenu-drop');
					if (type != 'translate') {
						$drop.hide();
					}
					$drop.addClass('slidedown');
					$leveltop.on('mouseover', function() {
						$('item.level0',self.element).find(' > .groupmenu-drop').height('');
						if (timeout) clearTimeout(timeout);
						timeout = setTimeout(function() {
							if (self._currentMode == 'desktop') {
								if (type == 'slide') {
									$drop.stop().slideDown(400,'swing', function() {
										$leveltop.addClass('open');
										$drop.height('');
										$drop.trigger('animated');
									});
								} else if (type == 'fade') {
									$drop.stop().fadeIn(600,'swing',function() {
										$leveltop.addClass('open');
										$drop.trigger('animated');
									});
								} else if (type == 'normal') {
									$drop.show();
									$leveltop.addClass('open');
								}
								$leveltop.trigger('animated_in');
							}
						}, conf.delay);
					});
					$leveltop.on('mouseleave', function() {
						if (timeout) clearTimeout(timeout);
						if (self._currentMode == 'desktop') {
							if (type == 'slide') {
								$drop.stop().slideUp(200, function() {
									$leveltop.removeClass('open');
									$leveltop.trigger('animated_out');
								});
							} else if (type == 'fade') {
								$drop.stop().fadeOut(200, function() {
									$leveltop.removeClass('open');
									$leveltop.trigger('animated_out');
								});
							} else if (type == 'normal') {
								$drop.hide();
								$leveltop.removeClass('open');
								$leveltop.trigger('animated_out');
							}
						}
					});
				});
			},
			_desktopMenu: function(conf) {
				var $menu = this.element;
				var $subMenu = $(conf.subMenu, $menu);
				$subMenu.css('display', '');
				$subMenu.removeClass('open');
				$(conf.parent, $menu).removeClass('open');
				$(conf.trigger, $menu).remove();
			},
			_mobileMenu: function(conf) {
				var $menu = this.element;
				$(conf.subMenu, $menu).hide();
				$(conf.parent, $menu).each(function() {
					var $li = $(this);
					$li.children(conf.subMenu).each(function() {
						var $subMenu = $(this);
						var $toggle = $('<span class="' + conf.triggerClass + '" />');
						$toggle.insertBefore($subMenu);
						$toggle.on('click.showsubmenu', function() {
							$li.toggleClass('open');
							$subMenu.toggleClass('open');
							$subMenu.slideToggle(300);
						});
					});
				});
			},
			_getAdapt: function() {
				var responsive = this.options.responsive,
					$win = $(window),
					winWidth = $win.width(),
					minWidth = 0;
				for (adapt in responsive) {
					if ((minWidth <= winWidth) && (winWidth < adapt)) {
						return adapt;
					}
					minWidth = adapt;
				}
				return false;
			},
			_getMode: function() {
				responsive = this.options.responsive;
				$win = $(window);
				var winWidth = $win.width();
				var minWidth = 0;
				var adapt = this._getAdapt();
				if (adapt !== false) {
					return responsive[adapt];
				} else {
					return 'desktop';
				}
			},
			_setupMenu: function() {
				var mode = this._getMode();
				if (mode == 'mobile') {
					this._mobileMenu(this.options);
				} else {
					this._desktopMenu(this.options);
				}
			},
			_responsive: function() {
				var self = this;
				$(window).on('resize', function() {
					var mode = self._getMode();
					if (self._currentMode != mode) {
						self._currentMode = mode;
						self._setupMenu();
					}
				});
			},
			_rebuildHtmlStructure: function() {
				var self = this;
				$('.need-unwrap', self.element).each(function() {
					var $this = $(this);
					$this.children('.groupmenu-drop').removeClass('groupmenu-drop').addClass('groupmenu-nondrop');
					var $parent = $(this).parent();
					var $newDiv = $('<div />');
					$newDiv.appendTo($parent);
					$newDiv.attr('class', $this.attr('class'));
					$newDiv.attr('style', $this.attr('style'));
					$this.children().appendTo($newDiv);
					$this.remove();
				});
				$('.no-dropdown', self.element).each(function() {
					var $noDropdown = $(this);
					$('.need-unwrap', $noDropdown).first().unwrap();
					$('.need-unwrap', $noDropdown).removeClass('need-unwrap');
					$noDropdown.children('.groupmenu-drop').removeClass('groupmenu-drop').addClass('groupmenu-nondrop');
				});
			},
			_getEventIn: function(conf) {
				if (this.options.type == 'translate') {
					return 'mouseover mouseenter';
				} else {
					return 'animated_in';
				}
			},
			_getEventOut: function(conf) {
				if (this.options.type == 'translate') {
					return 'mouseleave';
				} else {
					return 'animated_out';
				}
			},
			_alignMenuLeft: function(conf) {
				var self = this;
				var $menuCont = self.element.parents(conf.fixedLeftParent).first();
				
				function handlerIn($li){
					var $dropdown = $li.children('.groupmenu-drop').first();
					//$dropdown.css('left',0);
					var dWidth = $dropdown.outerWidth(), dOffset = $li.offset().left,
					cWidth = $menuCont.outerWidth(), cOffset = $menuCont.offset().left,
					dRightBound = dOffset + dWidth,
					cRightBound = cOffset + cWidth,
					overFlow = dRightBound - cRightBound;
					if(overFlow > 0){
						var relativeLeft = dOffset - cOffset;
						
						var adjustment = self.element.offset().left - cOffset;
						if( adjustment > 10 ){
							adjustment = 0;
						} 
						if( (cWidth - dWidth) <= 20 && ((cWidth - dWidth) > 0) ){
							adjustment = (cWidth - dWidth)/2;
						}
						var left = -Math.min(relativeLeft,overFlow) - Math.max(0,adjustment);
						$dropdown.css({left:left,right:'auto'});
					}					
				}
				function handlerOut($li){
					//$li.children('.groupmenu-drop').css('left', '');
				}
				var $li = $(' > .groupmenu > .level-top > .groupmenu-drop', self.element).parent();
				$li.each(function(){
					var $dropdown = $li.children('.groupmenu-drop');
					var $curLi = $(this);
					handlerIn($curLi);
					$(window).on('load', function() {
						handlerIn($curLi);
					});
					var timeoute = false;
					$(window).on('resize',function(){
						$dropdown.css('left','');
						if(timeoute) clearTimeout(timeoute);
						timeoute = setTimeout(function(){
							handlerIn($curLi);
						},300);
					});
				});
				if (this.options.type == 'translate') {				
					$li.hover(function() {
						handlerIn($(this));
					}, function() {
						handlerIn($(this));
					});
				} else {
					var eventIn = this._getEventIn(),
					eventOut = this._getEventOut();
					$li.on(eventIn,function(){
						handlerIn($(this));
					}).on(eventOut, function() {
						handlerIn($(this));
					});
				}
			},
			_alignMenuRight: function(conf) {
				var self = this;
				var eventIn = this._getEventIn(),
					eventOut = this._getEventOut();
				var $menuCont = self.element.parents(conf.fixedLeftParent).first();
				function handlerIn($li){
					var $dropdown = $li.children('.groupmenu-drop').first();
					var dWidth = $dropdown.outerWidth(), lOffset = $li.offset().left, lWidth = $li.outerWidth(true),
					cWidth = $menuCont.width(), cOffset = $menuCont.offset().left,
					dLeftBound = lOffset + lWidth - dWidth,
					cLeftBound = cOffset,
					overFlow = cLeftBound - dLeftBound;
					var dLeft = -(dWidth - lWidth);
					if(overFlow > 0){
						var relativeLeft = lOffset - cOffset;
						var adjustment = 0;
						var adjustment = self.element.offset().left - cOffset;
						if( adjustment > 10 ){
							adjustment = 0;
						}
						if( (cWidth - dWidth) <= 20 && ((cWidth - dWidth) > 0) ){
							adjustment = (cWidth - dWidth)/2;
						}
						var left = -Math.min(relativeLeft,-dLeft-overFlow) + Math.max(0,adjustment);
						$dropdown.css({left:left,right:'auto'});
					}else{
						$dropdown.css({left:dLeft,right:'auto'});
					}
				}
				
				function handlerOut($li){
					//$li.children('.groupmenu-drop').css('right', '');
				}
				var $li = $(' > .groupmenu > .level-top > .groupmenu-drop', self.element).parent();
				$li.each(function(){
					var $dropdown = $li.children('.groupmenu-drop');
					var $curLi = $(this);
					handlerIn($curLi);
					$(window).on('load', function() {
						handlerIn($curLi);
					});
					var timeoute = false;
					$(window).on('resize',function(){
						$dropdown.css('left','');
						if(timeoute) clearTimeout(timeoute);
						timeoute = setTimeout(function(){
							handlerIn($curLi);
						},300);
					});
				});
				if (this.options.type == 'translate') {
					$li.hover(function() {
						handlerIn($(this));
					}, function() {
						handlerIn($(this));
					});
				} else {
					var eventIn = this._getEventIn(),
					eventOut = this._getEventOut();
					$li.on(eventIn,function(){
						handlerIn($(this));
					}).on(eventOut, function() {
						handlerIn($(this));
					});
				}
			},
			_alignMenuTop: function(conf) {
				var self = this;
				var $win = $(window);
				$(' > .groupmenu > .level-top > .groupmenu-drop', self.element).parent().hover(
				function(){
					var $li = $(this);
					var $ddMenu = $(this).children('.groupmenu-drop');
					$ddMenu.css({top:''});
					var winHeight = $win.height(),
					winTop = $(window).scrollTop();
					ddTop = $ddMenu.offset().top, ddHeight = $ddMenu.outerHeight(),
					overflow = (ddTop - winTop + ddHeight) > winHeight;
					if($li.hasClass('fixtop')){
						var newTop = parseInt($ddMenu.css('top')) - (ddTop - self.element.children('.groupmenu').offset().top);
						$ddMenu.css({top: newTop});
					}else if(overflow){
						var newTop1 = parseInt($ddMenu.css('top')) - (ddTop - winTop + ddHeight - winHeight);
						var newTop2 = parseInt($ddMenu.css('top')) - (ddTop - self.element.children('.groupmenu').offset().top);
						var newTop = Math.max(newTop1,newTop2); 
						$ddMenu.css({top: newTop});
					}
				},
				function(){});
			}
		}
		megaMenu.init(data);
	});
}

function initMenu(wrap) {
	if(theme.useMenuAjax != true) {
		$('.mobile-menu').each(function() {
			var handle = $(this).data('handle');
			$(this).html($('.menu-' + handle + ':not(.mobile-menu)').html());
		});	
	}
	$(wrap + ' .menu-' + currentLocale + '[data-megamenu]').each(function(){
		var $menu = $(this);
		var data = $menu.data('megamenu');
		if(data == undefined || data == '') {
			data = {};
		}
		var overrideData = $menu.parent().data('override-megamenu');
		if(overrideData != undefined && overrideData != '') {
			data = $.extend(data, overrideData);
		}
  	$menu.show();
		$menu.codazonMegaMenu(data);
	});
}

/* Menu using Navigation feature of Shopify */
function initNormalMenu(wrap) {
	$(wrap + ' .normal-menu [data-megamenu]').each(function(){
		var $menu = $(this);
		var data = $menu.data('megamenu');
		if(data == undefined || data == '') {
			data = {};
		}
		var overrideData = $menu.parent().data('override-megamenu');
		if(overrideData != undefined && overrideData != '') {
			data = $.extend(data, overrideData);
		}
  	$menu.show();
		$menu.codazonMegaMenu(data);
	});
}
var curWinWidth = $(window).width();
var adapt = 768;
var adaptResize = 768;
var resizing = false;
var mobileHeightHeader = 105;
var adaptMobileHeader = 991;
var defaultDataSlider = {
  "navText": [$('#prevSliderBtn').html(), $('#nextSliderBtn').html()],
  "margin": 0,
  "rtl": theme.rtl,
  "autoHeight": false,
  "loop": false,
  "lazyLoad": true
};
var dealCountdownReg = '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})';
var dealCountdownTpl = $('#countdown_html').html();

function changeAdapt(){
  resizing = true;
  setTimeout(function(){
    resizing = false;
    if( curWinWidth >= adaptResize ){
      $(window).trigger('cdz_pc');        
    } else {
      $(window).trigger('cdz_mobile');
    }
  }, 200);


  $(window).resize(function(){
    if (resizing) {
      return false;
    }
    resizing = true;
    setTimeout(function(){
      resizing = false;
      var winWidth = $(window).prop('innerWidth');
      if( (curWinWidth < adaptResize) && (winWidth >= adaptResize) ){
        $(window).trigger('cdz_pc');        
      }else if( (curWinWidth >= adaptResize) && (winWidth < adaptResize)){
        $(window).trigger('cdz_mobile');
      }
      curWinWidth = winWidth;
    },200);
  });
}

function getCookie(name) {
  try {
    return $.cookie(name);
  } catch(e) {
  }
}

function setCookie(name, value) {
  try {
    $.cookie(name, value, {path: '/'});
  } catch(e) {
  }
}

function pcConfig(){
  function hideMobileSidebar(){
    if($('body').hasClass('canvas-slid')){
      $('#cdz-mobile-nav').offcanvas('hide');
    } 
  }
  function pcTabs(){
    $('.mobile-nav-tabs').removeClass('mobile-nav-tabs'); 
  }
  function pcFooter(){
    $('.cdz-toggle-title').each(function(){
      var $title = $(this);
      if( $title.data('cdz-toggle') != ''){
        var $content = $($title.data('cdz-toggle'));
        $content.show();
        $title.unbind('click');
        $title.removeClass('active');
      }
    });
  }
  //hideMobileSidebar();
  pcTabs();
  pcFooter();
}

function mobileConfig(){
  function mobileTabs(){
    $('.mobile-nav-tab-dropdown').each(function(){
      var target = $(this).data('target');
      $(target).addClass('mobile-nav-tabs');
    }); 
  }
  function mobileFooter(){
    $('.cdz-toggle-title').each(function(){
      var $title = $(this);
      if( $title.data('cdz-toggle') != ''){
        var $content = $($title.data('cdz-toggle'));
        if(!$title.hasClass('active')) {
          $content.hide();
        }
        $title.click(function(){
          if( !$title.hasClass('active') ){
            var dataGroup = $title.data('group');
            if(dataGroup != '' && dataGroup != undefined) {
              $('.cdz-toggle-title.active[data-group="' + dataGroup +'"]').click();  
            }

          }
          $title.toggleClass('active');
          $content.slideToggle();
        });
      }
    });
  }
  mobileTabs();
  mobileFooter();
}

function loadMoreItems() {
  $(document).on('click', '.load_more_btn', function(e){
    e.preventDefault();
    var i = 0;
    var items = $($(this).attr('data-more-li'));
    var limit = parseInt($(this).attr('data-more-items'));
    var hiddenClass = $(this).attr('data-hidden-class');
    if(hiddenClass == undefined || hiddenClass == '') {
      hiddenClass = 'hide';
    }
    $.each(items, function(index, item){
      if(i < limit) {
        var item = $(item);
        if(item.hasClass('wow')) {
          item.removeClass('hide').addClass('animated');
          displayElements(item.find('.wait-animated'));
          item.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            if(item.hasClass('animated')) {
              item.removeClass('animated fadeIn');
            }
          });
        } else {
          var effect = item.attr('data-animated');
          if(effect == '' || effect == undefined){
            effect = 'fadeIn';
          }
          item.removeClass(hiddenClass);
          item.addClass('animated ' + effect);  
        }
      }
      i++;
    });

    if(i >= items.length) {
      $(this).toggle('100');
    }
  });
}

function initDropdownMenu(wrap, options){
  var defaultConfig = {
    trigger: '.cdz-trigger',
    dropdown: '.cdz-dropdown-content',
    cont: '.cdz-dropdown',
    exceptClass: null,
    hideAffterClick: false
  };
  var conf = $.extend(defaultConfig,options || { });
  if(conf.exceptClass != null){
    var selectorCont = wrap + ' ' + conf.cont + ':not(' + conf.exceptClass + ')';
  } else {
    var selectorCont = wrap + ' ' + conf.cont;
  }

  var selectorTrigger = selectorCont + ' ' + conf.trigger;

  $(selectorTrigger).each(function() {
    $(this).addClass('dd-trigger');
    $(this).parents(conf.cont).find(conf.dropdown).addClass('dd-content');
  });

  $(document).on('touchend click', selectorTrigger, function(e) {
    e.stopPropagation();
    e.preventDefault();
    var $cont = $(this).parents(conf.cont);
    var $trigger = $cont.find(conf.trigger);
    var $dropdown = $cont.find(conf.dropdown);
    if(!$cont.hasClass('dd-open')){
      if($('.dd-open').length > 0){
        var $ddopen = $('.dd-open');
        $ddopen.find('.dd-trigger').removeClass('active');
        $ddopen.find('.dd-content').slideUp();
        $ddopen.removeClass('dd-open');
      }
    }
    $cont.toggleClass('dd-open');
    $trigger.toggleClass('active');
    $dropdown.slideToggle();
  });

  $(document).on('click', 'html,body', function (e) {
    var $target = $(e.target);
    if( ($target.parents('.dd-open').first().length == 0) || conf.hideAffterClick){
      $(selectorCont + '.dd-open').each(function() {
        $(this).find(conf.dropdown).slideUp();
        $(this).find(conf.trigger).removeClass('active');
        $(this).removeClass('dd-open');
      });
    }
  });
}

function initSliderEle(ele) {
  var dataSlider = defaultDataSlider;
  if(ele.attr('data-slider-ele')) {
    var dataSliderEle = $(ele.attr('data-slider-ele')); 
    if(dataSliderEle.length > 0 && dataSliderEle.html() != '') {
      try {
        dataSlider = $.extend(dataSlider, JSON.parse(dataSliderEle.html()));
      } catch(e) {
        dataSlider = defaultDataSlider;
      }
    }
  }
  ele.owlCarousel(dataSlider);
}

var initSliderCustomStatus = false;
function initSliderCustom(wrap) {
  /*if(initSliderCustomStatus) {
    return;
  }*/
  //initSliderCustomStatus = true;
  var winWidth = $(window).width();
  if(winWidth > 1024) {
    $(wrap + ' .use-slider-custom').each(function() {
      if(!$(this).hasClass('owl-loaded')) {
        initSliderEle($(this));
      }
    });
  } else {
    $(wrap + ' .use-slider-custom').each(function() {
      if($(this).hasClass('owl-loaded')) {
        $(this).owlCarousel('destroy'); 
      }
    });
  }
  //initSliderCustomStatus = false;
}

function initSlider(wrap) {
  if($(wrap + ' .use-slider').length > 0) {
    $(wrap + ' .use-slider').each(function(){
      initSliderEle($(this));
    });
  }

  if($(wrap + ' .use-slider-custom').length > 0) {
    initSliderCustom(wrap);
    $(window).resize(function () {
      setTimeout(function() {
        initSliderCustom(wrap);
      }, 300);
    });

  }
}

function changeQty(input, isIncrease) {
  var val = parseInt(input.val()), changed = true;
  if(isNaN(val) == true) {
    val = 1;
  }
  if(val < 1) {
    val = 1;
  }

  if(isIncrease) {
    val = val + 1;
  } else {
    if(val > 1) {
      val = val - 1;
    } else {
      changed = false;
    }
  }
  input.val(val);
  return changed;
}

function initChangeQtyEvent() {
  $(document).on('click', '.change-qty:not(.not-bind)', function(e){
    e.preventDefault();
    var input = $($(this).attr('data-input'));
    changeQty(input, $(this).hasClass('increase'));
  });
}

function initSearchModal() {
  $(document).on('click', '.cdz-search-trigger', function(e){
    e.preventDefault();
    $('#searchModal').modal('show');
  });
}

/*Label form effect*/
window.fieldLabelEffect = function(){
  var list = '.form-list input[type=text].input-text,.form-list input[type=tel].input-text,.form-list input[type=email].input-text,.form-list input[type=password].input-text,.form-list textarea.input-text';
  $('.form-list select').each(function(){
    var $select = $(this);
    $select.parents('.field,.wide,.label-effect').addClass('field-select-box');
  });
  $(list).each(function(){
    var $input = $(this);
    var $parent = $input.parents('.label-effect').first();
    if($parent) {
      //$parent.addClass('active');
      var eventId = Math.round(Math.random()*100000);
      $('body').on('click.input_'+eventId,function(e){
        if( !$(e.target).is($input) ){
          if($input.val() != ''){
            $parent.addClass('active'); 
          }else{
            $parent.removeClass('active');
          }
          $('body').off('click.input_'+eventId);
        }
      });

      if($input.val() != '') {
        $parent.addClass('active');
      }

      $input.focus(function () {
        $parent.addClass('active');
      }).blur(function() {
        if($input.val() == ''){
          $parent.removeClass('active');  
        }
      });
      var checkBrowserFilled = function(){
        if($input.val() != ''){
          $parent.addClass('active');
          $input.off('change.checkbrowserfilled',checkBrowserFilled);
        }
      };
      $input.on('change.checkbrowserfilled',checkBrowserFilled);
    }
  });
  if(document.location.href.search('checkout/onepage') !== -1){
    window.scrollTo(0, 0);
  }
};

$.fn.switchSliderGrid = function(options){
  var $this = $(this);
  function mobileSlider($this){
    if(!$this.hasClass('owl-carousel')){
      $this.addClass('owl-carousel owl-theme');
      $this.owlCarousel({
        loop: false,
        margin: (options.carousel.margin)?options.carousel.margin:0,
        responsiveClass: true,
        nav: true,
        dots: false,
        responsive: options.carousel.responsive,
        autoWidth: true
      });
    }
  };
  function pcGrid($this){
    if($this.hasClass('owl-carousel')){
      $this.data('owl.carousel').destroy();
      $this.removeClass('owl-carousel owl-loaded owl-theme owl-hidden');
      $this.find('.owl-stage-outer').children().unwrap();
      $this.removeData('owl.carousel');
    }
  };
  function pcMedia(){
    if(options.media){
      var $media = $this.find('.media-slider');
      $media.addClass('owl-carousel owl-theme');
      $media.owlCarousel({
        dots: false,
        nav: true,
        responsive: options.media.responsive
      });
    } 
  };
  function mobileMedia(){
    if(options.media){
      var $media = $this.find('.media-slider');
      pcGrid($media);
    } 
  };

  var curWinWidth = $(window).width();
  if(curWinWidth < 768){
    mobileSlider($this);
    mobileMedia();
  }else{
    pcGrid($this);
    pcMedia();
  }

  $(window).bind('cdz_mobile', function() {
    mobileSlider($this);
    mobileMedia();
  });
  $(window).bind('cdz_pc', function() {
    pcGrid($this);
    pcMedia();
  });
}

function initMoreViewsSwitchImg() {
  $(document).on('click', '.switch-img', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var targetSelector = $(this).data('target');
    var target = $(targetSelector);
    if(target.length > 0) {
      target.attr('src', href);
      if(!$(this).hasClass('loaded')) {
        var imgEle = $(this);
        target.parent('.product-image').addClass('loading-image');
        target.imagesLoaded( function() {
          // images have loaded
          imgEle.addClass('loaded');
          target.parent('.product-image').removeClass('loading-image');
        });
      }/* else {
        $(targetSelector).attr('src', href);
      }*/
    }
  });
}

function initSwitchSliderGrid() {
  if($('.use-switch-slider-grid').length > 0) {
    $('.use-switch-slider-grid').each(function(){
      var dataSlider = {
        carousel: {
          margin: 20,
          responsive:{
            0:{items:   1},
            320:{items: 1},
            360:{items: 2},
            480:{items: 2},
            600:{items: 3}
          },
          rtl: theme.rtl,
          autoHeight: false,
          loop: false   
        }
      };
      if($(this).attr('data-switch-slider-ele')) {
        var dataSliderEle = $($(this).attr('data-switch-slider-ele')); 
        if(dataSliderEle.length > 0 && dataSliderEle.html() != '') {
          try {
            dataSlider = $.extend(dataSlider, JSON.parse(dataSliderEle.html()));
          } catch(e) {
            //dataSlider = defaultDataSlider;
          }
        }
      }
      $(this).switchSliderGrid(dataSlider);
    });
  }
}

function initReverseCountdown(ele, reverse, productId) {
  var cookieName = 'countdown_reverse_' + productId;
  var cookieCountdown = getCookie(cookieName), times;
  if(cookieCountdown == undefined || cookieCountdown == NaN) {
    var timesText = reverse.split(':');
    if(timesText.length == 4) {
      var days = parseInt(timesText[0]);
      var hours = parseInt(timesText[1]);
      var minutes = parseInt(timesText[2]);
      var seconds = parseInt(timesText[3]);
      if(hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && minutes && seconds >= 0 && seconds <= 59) {
        var date = new Date();
        times = date.getTime() + (days*86400 + hours*3600 + minutes*60 + seconds)*1000;
      }
    }
  } else {
    times = parseInt(cookieCountdown);
  }
  if(times != undefined) {
    var currentDate = new Date();
    var currentTime = currentDate.getTime();
    if(times <= currentTime - 30*60) {
      times = null;
      var timesText = reverse.split(':');
      if(timesText.length == 4) {
        var days = parseInt(timesText[0]);
        var hours = parseInt(timesText[1]);
        var minutes = parseInt(timesText[2]);
        var seconds = parseInt(timesText[3]);
        if(hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && minutes && seconds >= 0 && seconds <= 59) {
          times = currentTime + (days*86400 + hours*3600 + minutes*60 + seconds)*1000;
        }
      }
    }
    if(times) {
      currentDate.setTime(times);
      $(ele).countdowntimer({
        "dateAndTime": currentDate,
        "size": "lg",
        "regexpMatchFormat" : dealCountdownReg,
        "regexpReplaceWith" : dealCountdownTpl
      });
      setInterval(function(){
        times -= 1;
        setCookie(cookieName, times);
      }, 1000);
    }
  }
}

function initDealCountdown(wrap) {
  if($(wrap + ' .product-deal').length > 0) {
    $(wrap + ' .product-deal').each(function() {
      var dataDeal = $(this).data('deal');
      var pattern1 = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
      var pattern2 = /^\d{1,2}:\d{2}:\d{2}:\d{2}$/;

      if(dataDeal != undefined && dataDeal != '') {
        if(pattern1.test(dataDeal) == true) {
          $(this).countdowntimer({
            "dateAndTime": dataDeal,
            "size": "lg",
            "regexpMatchFormat" : dealCountdownReg,
            "regexpReplaceWith" : dealCountdownTpl
          });  
        } else if(pattern2.test(dataDeal)) {
          var productId = $(this).data('product-id');
          initReverseCountdown(this, dataDeal, productId);
        }
      } 
    });
  }
}

function initVertialMoreViewSlider(wrap) {
  if($(wrap + ' .more-views-slider .image-list').length > 0) {
    $(wrap + ' .more-views-slider .image-list').each(function(){
      var dataSlider = {
        "vertical" : true, 
        "item": 3, 
        "adaptiveHeight": true, 
        "vThumbWidth" : "40", 
        "verticalHeight": 180, 
        "pager": false,
        "slideMargin": 10,
        "onSliderLoad": function(el) {
          el.siblings('.lSAction').insertBefore(el.parents('.lSSlideWrapper'));
        }
      };
      if($(this).attr('data-slider-ele')) {
        var dataSliderEle = $($(this).attr('data-slider-ele')); 
        if(dataSliderEle.length > 0 && dataSliderEle.html() != '') {
          try {
            dataSlider = $.extend(dataSlider, JSON.parse(dataSliderEle.html()));
          } catch(e) {
            dataSlider = defaultDataSlider;
          }
        }
      }
      $(this).lightSlider(dataSlider);
    });

  }
}

function initInstagramSlider(wrap) {
  if($(wrap + ' .instagram-slider').length > 0) {
    $(wrap + ' .instagram-slider').each(function() {
      var token = $(this).attr('data-token');
      var instagramEle = $(this);
      if(token != undefined && token != '') {
        var numPhotos = $(this).attr('data-num-photos');
        $.ajax({
          url: 'https://api.instagram.com/v1/users/self/media/recent', // or /users/self/media/recent for Sandbox
          dataType: 'jsonp',
          type: 'GET',
          data: {access_token: token, count: numPhotos},
          success: function(data){
            var html = '<div class="image-list owl-carousel use-slider-custom" data-slider-ele="#' + instagramEle.attr('data-section-id') + '_slider_data">';
            var iconHtml = $('#icon-instagram-html').html();
            for( x in data.data ){
              html += '<div class="item">';
              html += '<div class="instagram-media">' +
              '<a href="' + data.data[x].link + '" class="image" target="_blank">' +
              '<img src="' + data.data[x].images.low_resolution.url + '" />' +
              '</a>' +
              '<div class="action"><a href="' + data.data[x].link + '" target="_blank">' + iconHtml + '<span>#View More</span></a></div>' +
              '</div>' +
              '</div>';
            }
            html += '</div>';
            instagramEle.html(html);
            var winWidth = $(window).width();
            var dataSlider = $.extend(defaultDataSlider, JSON.parse($('#' + instagramEle.attr('data-section-id') + '_slider_data').html()));;
            if(winWidth > 1024) {
              instagramEle.children('.image-list').owlCarousel(dataSlider);  
            }
          },
          error: function(data){
            console.log(data); // send the error notifications to console
          }
        });
      }
    });

  }
}

function showNav(block, direction, duration) {
  var width = $(block).outerWidth();
  //$('.wrap-all').css({'overflow-x': 'inherit'});
  var dataShow = {}
  if(direction == 'left') {
    dataShow.left = 0;
    //$('.close-btn-canvas').css({'left': 0, 'margin-left': width + 'px', 'opacity': 0, 'display': 'block', 'top': '-100px'});
  } else {
    //$('.close-btn-canvas').css({'right': 0, 'margin-right': width + 'px', 'opacity': 0, 'display': 'block', 'top': '-100px'});
    dataShow.right = 0;
  }
  $('.overlay').attr('data-block', block);

  // Hide and lock sticky menu
  var $stickyMenu = $('.sticky-menu');
  if($stickyMenu.hasClass('active')) {
    hideStickyMenu($stickyMenu);
  }

  $(block).velocity(
    dataShow,
    {
      duration: duration,
      delay: 0,
      complete: function() {
        /*$('.close-btn-canvas')
        .velocity(dataCloseBtn, { duration: duration });*/
        /*if(duration == 'left') {
          $('.close-btn-canvas').css(dataCloseBtn);  
        }*/
        $('.wrap-all').addClass('open-mobile-nav');
        $('.overlay').addClass(direction);
      }
    }
    );

  $('.overlay').velocity("fadeIn", {duration: duration, delay: 0 });
}

function hideNav(duration, block) {
  var direction = $('.overlay').hasClass('left') ? 'left' : 'right';  
  var width = $(block).outerWidth();
  var dataHide = {};//, dataCloseBtn = {opacity: 0, top: '-100px'};
  if(direction == 'left') {
    dataHide.left = '-100%';
  } else {
    dataHide.right = '-100%';
  }
  $('.wrap-all').removeClass('open-mobile-nav');
  $(block).velocity(
    dataHide, 
    { 
      duration: duration,
      delay: 300,
      complete: function() {
        $('.overlay').removeClass(direction);
        $stickyMenu = $('.sticky-menu');
        if($stickyMenu.length > 0) {
          var threshold = $stickyMenu.height();
          isShowStickyMenu($stickyMenu, $(window), threshold);  
        }
      }
    }
    );
  $('.overlay').velocity("fadeOut", {duration: duration, delay: 0 });
}  

function initNavMobile(trigger, block) {
  var duration = 300;
  var eventMobile = 'touchend click';
  var direction = $(block).parent().hasClass('direction-left') ? 'left' : 'right';  

  $(document).on(eventMobile, trigger, function(e) {
    e.preventDefault();
    e.stopPropagation();
    if(!$('.wrap-all').hasClass('open-mobile-nav')) {
      showNav(block, direction, duration);
    }
  });

}

function initHideNavMobile(duration) {
  $('.overlay, .close-btn-canvas, .close-menu-btn').on('touchstart click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if($('.wrap-all').hasClass('open-mobile-nav')) {
      hideNav(duration, $('.overlay').attr('data-block'));
    }
  });
}

function globalFlyImage($pr,options){
  var defaultConfig = {
    img: '.product-image img',
    dest: '.footer-cart .cart-icon',
    fCart: '.footer-cart'
  };
  var conf = $.extend(defaultConfig,options || { });

  var $effImg = $('<div style="display:none; position:absolute; z-index:9999999"><img style="width: 100%; height: 100%"/></div>');
  $('body').append($effImg);

  var $img = false;
  $pr.find(conf.img).each(function(){
    if( !$(this).hasClass('hidden') ){
      $img = $(this);
      return false;
    }
  });
  if(!$img) return false;
  var src = $img.attr('src');
  var width = $img.width(), height = $img.height();
  var step01Css = {
    top: $img.offset().top,
    left: $img.offset().left,
    width: width,
    height: height
  }
  $effImg.find('img').attr('src',src);
  $effImg.css(step01Css);
  $effImg.fadeIn(200);

  var $fCart = $(conf.fCart);
  var $dest = $(conf.dest);
  var itemInCart;
  if(options.itemInCart.length > 0) {
    itemInCart = options.itemInCart.first();
  } else {
    itemInCart = $fCart.find('.cart-item').first();
  }

  var imgCart = itemInCart.find('.product-image img');
  var flyImage = function(){
    var step02Css = {
      top: imgCart.offset().top,
      left: imgCart.offset().left,
      width: imgCart.width(),
      height: imgCart.height()
    }
    $effImg.velocity(step02Css, {
      duration: 500,
      complete: function() {
        itemInCart.removeClass('hide-item-image');
        $effImg.fadeOut(200,'linear',function(){
          $effImg.replaceWith('');  
        });
      }
    });
  }
  flyImage();
}

function ajaxCartEffect (btn, options){
  var defaultConfig = {
    img: '.product-image img',
    parent: '.item, .product-item',
    effImg: '#effectImg',
    dest: '.footer-cart .cart-icon',
    fCart: '.footer-cart',
    form: '#product_addtocart_form', 
  };

  var conf = $.extend(defaultConfig,options || { });
  var $this = btn;
  var $pr = $this.parents(conf.parent).first();
  if($pr.length == 0){
    return false;
  }
  globalFlyImage($pr,conf);
};

function toggleCartEditor(){
  var $fCart = $('.footer-cart');
  $(document).on('click', '.footer-cart .cart-item .product', function(e){
    e.stopPropagation();
    var $cartItem = $(this).parent('.cart-item');
    if($cartItem.hasClass('active')){
      $cartItem.removeClass('active');  
    }else{
      $fCart.find('.cart-item.active').removeClass('active');
      $cartItem.addClass('active');
    }
  });
}

function initSlideshow() {
  function setHeightForVideoSlide(event){
    var owl = $(event.target);
    $('.item-video',owl).css({height:''});
    $('.owl-video-frame iframe',owl).css({height:''});

    setTimeout(function(){
      var height = (owl.attr('data-height'))*( owl.width() )/owl.attr('data-width');
      $('.item-video',owl).css({height:height});  
      $('.owl-video-frame iframe',owl).css({height:height});
    },200); 
  }

  if($('.main-slideshow').length > 0) {
    //$('.main-slideshow').imagesLoaded(function() {
      $('.main-slideshow').each(function() {
        var owl = $(this);
        var dataSlideshow, dataDefaultSlideshow = {
          "navText": [$('#prevSliderBtn').html(), $('#nextSliderBtn').html()],
          onInitialized: function(event){
            setHeightForVideoSlide(event);
          },
          onResized: function(event){
            setHeightForVideoSlide(event);
          },
          rtl: theme.rtl
        };

        if($(this).attr('data-slideshow-ele')) {
          var dataSlideshowEle = $($(this).attr('data-slideshow-ele')); 
          if(dataSlideshowEle.length > 0 && dataSlideshowEle.html() != '') {
            try {
              dataSlideshow = $.extend(dataDefaultSlideshow, JSON.parse(dataSlideshowEle.html()));
            } catch(e) {
              dataSlideshow = dataDefaultSlideshow;
            }
          }
        }

        var parentDiv = owl.parent();           
        owl.on('initialized.owl.carousel', function(e) {                        
          if(parentDiv.hasClass('loading')) 
          {
            parentDiv.removeClass('loading');
            parentDiv.removeAttr('style');
            parentDiv.parent().removeClass('wait-loading');
            var loader = parentDiv.siblings('.slideshow-loader');
            loader.velocity("fadeOut", {
              duration: 500, 
              delay: 0,
              complete: function() {
                loader.remove();
              } 
            });
          }        
        });

        owl.owlCarousel(dataSlideshow);  
      });
    //});
  }
}

function changeGridList(format) {
  if(format == 'grid') {
    $('.collection-items').removeClass('full_width');
    $('.collection-items').addClass('no_full_width');
    $('.collection-items .row-left').removeClass('col-md-2');
    $('.collection-items .row-right').removeClass('col-md-4');
  } else {
    $('.collection-items').addClass('full_width');
    $('.collection-items').removeClass('no_full_width');
    $('.collection-items .row-left').addClass('col-md-2');
    $('.collection-items .row-right').addClass('col-md-4');
    $('.collection-items').removeClass('animated ');
  }
}

function updateGridList(){
  $(document).on('click', '#goList', function(e){
    $(this).parent().find('li').removeClass('active');
    $(this).addClass('active');
    changeGridList('list');
  });

  $(document).on('click', '#goGrid', function(e){
    $(this).parent().find('li').removeClass('active');
    $(this).addClass('active');
    changeGridList('grid');
  });
}

function initVerMenu() {
  $(document).on('click touchstart', '.ver-menu-bar', function(e) {
    e.preventDefault();
    var btn = $(this);
    if(!$(this).hasClass('working')) {
      var duration = 500;
      if(btn.attr('data-duration')) {
        duration = btn.attr('data-duration');
      }
      btn.addClass('working');
      var effect = btn.hasClass('open') ? 'slideUp' : 'slideDown';
      btn.siblings(btn.attr('data-target')).velocity(effect, { 
        duration: duration,
        complete: function() {
          if(effect == 'slideDown') {
            btn.addClass('open');
          } else {
            btn.removeClass('open');
          }
          btn.removeClass('working');
        } 
      });
    }
  });
}

function openStickyMenu($stickyMenu) {
  if(!$('.cdz-mobile-search').hasClass('keep')) {
    var winWidth = $(window).width();
    if(winWidth > adaptMobileHeader) {
      $('.headerApp').css('min-height', getHeaderHeight('pc')); 
    } else {
      $('.headerApp').css('min-height', getHeaderHeight('mobile'));
    }
  }

  $stickyMenu.addClass('active animated fadeInDown');
  if(!$('.cdz-mobile-search').hasClass('keep')) {
    $('.cdz-mobile-search').hide().addClass('keep');
  }
}

function hideStickyMenu($stickyMenu) {
  $('.headerApp').removeAttr('style');
  $stickyMenu.removeClass('active fadeInDown').addClass('fadeIn');
  $('.cdz-mobile-search').removeAttr('style').removeClass('keep');
  $stickyMenu.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    if($stickyMenu.hasClass('animated')) {
      $stickyMenu.removeClass('animated fadeIn');
    }
  });
}

function isShowStickyMenu($stickyMenu, win, threshold) {
  if($('.wrap-all').hasClass('open-mobile-nav')) {
    return;
  }
  var curWinTop = win.scrollTop();
  if(curWinTop > threshold){
    openStickyMenu($stickyMenu);
  } else {
    hideStickyMenu($stickyMenu);
  }
}

function getHeaderHeight(type) {
  if(type == 'mobile') {
    return mobileHeightHeader;
  }
  return $('#headerApp').height();
}

function initStickyMenu() {
  if($('.sticky-menu').length > 0) {
    $stickyMenu = $('.sticky-menu');
    var threshold = $stickyMenu.height();
    isShowStickyMenu($stickyMenu, $(window), threshold);
    $(window).scroll(function(){
      var $win = $(this);
      isShowStickyMenu($stickyMenu, $win, threshold);
    });

    $(document).on('click', '.icon-search-sticky', function() {
      $('.cdz-mobile-search').slideToggle(function () {
        if ($('.cdz-mobile-search').is(':visible')) {
          $('.cdz-mobile-search').css('display','inline-block');  
        }
      });
    });

    // Set min height for sticky menu
    /*var calculateMinHeight = false;
    $(window).resize(function() {
      if(calculateMinHeight) {
        clearTimeout(calculateMinHeight);
      }
      calculateMinHeight = setTimeout(function() {
        var winWidth = $(window).width();
        if(winWidth > 991) {
          $('.headerApp').css('min-height', getHeaderHeight('pc')); 
        } else {
          $('.headerApp').css('min-height', getHeaderHeight('mobile'));
        }
      }, 300);
    });*/
  }
}

function initNewsletterPopup(){
  if($('#cdz-popup-newsletter').length > 0) {
    if(getCookie('show_news_letter_popup') == undefined) {
      $('#cdz-popup-newsletter').modal('show');
      $('#cdz-popup-newsletter').on('hidden.bs.modal', function (e) {
        if($('.newsletter_popup_hide_btn').is(":checked") == true) {
          setCookie('show_news_letter_popup', 1);
        }
      });
    }
  }
}

function cdzBackTopButton(){
  var $backTop = $('#back-top');
  if($backTop.length){
    $backTop.hide();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });
    $(document).on('click touchstart', '#back-top a', function() {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  }
}

function showPassHint() {
  $(document).on('click', function(e) {

  });
}

var useTooltip = false;
function initTooltip() {
  var winWidth = $(window).width();
  if(winWidth > 1024) {
    useTooltip = true;
    $("body").tooltip({
      selector: '[data-toggle="tooltip"]'
    });
  } else {
    useTooltip = false;
    $('body').tooltip('destroy');
  }

  $(window).resize(function() {
    setTimeout(function() {
      winWidth = $(window).width();
      if(winWidth > 1024) {
        if(!useTooltip) {
          useTooltip = true;
          $("body").tooltip({
            selector: '[data-toggle="tooltip"]'
          });
        }
      } else {
        if(useTooltip) {
          useTooltip = false;
          $('body').tooltip('destroy');
        }
      }
    }, 100);
  });
}

function initResponsiveTabsEvent(){
  var me = this;
  $(document).on('click', '.nav-tab-item a', function(){
    var $navTab = $(this);
    var $dropdown = $navTab.parent().parent().parent().find('.mobile-nav-tab-dropdown');
    if($dropdown.hasClass('choose-title')) {
      $dropdown.find('.tab-title').addClass('hide');
      var tabId = '#tab-' + $navTab.attr('href').replace('#', '');
      $(tabId).removeClass('hide');
    } else {
      $dropdown.text($navTab.text());
    }
    $navTab.parents('.mobile-nav-tabs').first().removeClass('active');
  });
  $(document).on('click', '.mobile-nav-tab-dropdown', function(){
    var $navTab = $(this);
    var target = $navTab.data('target');
    var $target = $(target);
    $target.toggleClass('active');
  });
  $(document).on('click', 'body', function(e){
    if(!$(e.target).hasClass('mobile-nav-tab-dropdown')){
      $('.mobile-nav-tabs').removeClass('active');
    }
  });
}

var translate = {};
var translateData;
var menuUpdate = {};
var intevalTrans = [];
function getTranslateData(localeCode, cb) {
  try {
    if(translateData == undefined) {
      translateData = $.parseJSON($('#locale_data').text());
    }
    cb(translateData[localeCode]);
  } catch (e) {
    $('.skeleton-loading').removeClass('skeleton-loading') // send the error notifications to console
  }
}

function getTransTextByKey(key) {
  try {
    var parts = key.split('.');
    if(typeof(translate[parts[0]]) == 'object' && typeof(translate[parts[0]][parts[1]]) == 'object' && typeof(translate[parts[0]][parts[1]][parts[2]]) != undefined) {
      var html = translate[parts[0]][parts[1]][parts[2]];
      if(typeof(html) == 'object' && parts[3] != undefined) {
        html = html[parts[3]];
      }
      return html;
    }
  } catch (e) {
    return '';
  }
}

function applyTranslateAttribute(attr, wrap) {
  $(wrap + ' [data-' + attr + '-trans]').each( function() {
    var key = $(this).attr('data-' + attr + '-trans');
    if(key) {
      var html = getTransTextByKey(key);
      if(html == undefined || html == '' || html == null) {
        html = $(this).attr('data-' + attr + '-default');
      }
      if(html) {
        $(this).attr(attr, html);
      }
    }
  });
}

function applyTranslateData(wrap, localeCode, firstTrans) {
  if(enableTranslate) {
    // Translate Inner Text
    if(localeCode != defaultLocale || firstTrans == false) {
      $(wrap + ' [data-trans-key]').each(function() {
        var key = $(this).attr('data-trans-key');
        if(key) {
          var html = getTransTextByKey(key);
          if(html && $(this).attr('data-trans-val')) {
            var vals = $.parseJSON($(this).attr('data-trans-val'));
            for (var keyVal in vals) {
              html = html.replace('[[ ' + keyVal + ' ]]', vals[keyVal]);
            }
          }
          if(html) {
            $(this).html(html);
          }
        }
      });
    }

    // Translate attribute
    applyTranslateAttribute('data-label', wrap);
    applyTranslateAttribute('value', wrap);
    applyTranslateAttribute('placeholder', wrap);
    applyTranslateAttribute('title', wrap);
    applyTranslateAttribute('data-confirm-message', wrap);
    applyTranslateAttribute('data-original-title', wrap);
    $(wrap + ' .skeleton-loading').removeClass('skeleton-loading');
  }
}

function applyTranslateContent(wrap, localeCode) {
  if(enableTranslate) {
    $(wrap + ' [data-content-trans]').each(function() {
      var id = $(this).attr('data-content-trans');
      if($(id).length > 0) {
        try {
          var data = $.parseJSON($(id).html());
          if(data && data[localeCode] != undefined) {
            $(this).html(data[localeCode]);
          }
        } catch(e) {

        }
      }
      $(this).removeClass('skeleton-loading');
    });
  } 
}

function initTranslate(cb) {
  if(enableTranslate) {
    var currentLocaleCookie = getCookie('currentLocale');
    if(currentLocaleCookie != null && currentLocaleCookie != '' && currentLocaleCookie != undefined && currentLocaleCookie != 'undefined') {
      currentLocale = currentLocaleCookie;
    }
  }
  
  if(currentLocale == defaultLocale) {
    $('.skeleton-loading').removeClass('skeleton-loading');
  }
  getTranslateData(currentLocale, function(response) {
    translate = response;
    if(enableTranslate) {
      // Translate the parts are not sections, collection page, product page, login page.
      if(!$('body').hasClass('template-index') && !$('body').hasClass('template-product') && !$('body').hasClass('template-customers/login')) {
        applyTranslateData('#PageContainer', currentLocale, true);
      }
      applyTranslateData('.non-section', currentLocale, true);
      setTimeout(function(){
        $(window).trigger('loaded_translate_data');
      }, 300);
      cb();
    } else {
      setTimeout(function(){
        $(window).trigger('loaded_translate_data');
      }, 300);
    }
  });
  if(enableTranslate) {
    applyTranslateContent('.non-section', currentLocale);
  } else {
    $('.skeleton-loading').removeClass('skeleton-loading');
  }
}

// Update menu when change locale
function updateMenuByLocale(localeCode) {
  if(menuUpdate[localeCode] == undefined) {
    $('.menu-' + localeCode).each(function(){
      var $menu = $(this);
      var data = $menu.data('megamenu');
      if(data == undefined || data == '') {
        data = {};
      }
      var overrideData = $menu.data('override-megamenu');
      if(overrideData != undefined && overrideData != '') {
        data = $.extend(data, overrideData);
      }
      $menu.codazonMegaMenu(data);
    });
    menuUpdate[localeCode] = 1;
  }
}

function initPromotionBanner() {
  if($('.promotion_wrap').length > 0) {
    if(getCookie('hide_promo_banner') == undefined) {
      $('.promotion_wrap').velocity("slideDown", { delay: 0, duration: 300 });
    }
    $(document).on('click', '.promotion_wrap .promo-close', function(e) {
      e.preventDefault();
      $('.promotion_wrap').velocity("slideUp", { delay: 0, duration: 300 });
      setCookie('hide_promo_banner', 1);
    });
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
 function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var upsellInterval;
function initUpsellProducts() {
  if($('.upsell_wrap').length > 0) {
    var cookie = getCookie('hide_upsell');
    if(cookie != undefined) {
      return;
    }

    var limit = $('.upsell_wrap').data('limit'),
    minuteFrom = $('.upsell_wrap').data('minute-from'),
    minuteTo = $('.upsell_wrap').data('minute-to'),
    intervalLoop = $('.upsell_wrap').data('interval') * 1000;
    var upsell = [], i = 0, show = 0;
    for(i = 0; i < limit; i++){
      upsell.push(i);
    }
    upsell = shuffle(upsell);
    $('.upsell_wrap .upsell-item .product-image img').each(function() {
      var dataSrc = $(this).attr('data-src');
      $(this).attr('src', dataSrc);
      $(this).removeAttr('data-src');
    });
    setTimeout(function() {
      $('.upsell_wrap').show();
    }, intervalLoop);
    upsellInterval = setInterval(function() {
      if(show == limit) {
        show = 0;
      }

      $('.upsell_wrap').hide();
      $('.upsell_wrap .upsell-item').hide();
      $('.upsell_wrap ' + '[data-index="' + show +'"] .minute-number').html(getRandomInt(minuteFrom, minuteTo));
      $('.upsell_wrap ' + '[data-index="' + show +'"]').show();
      $('.upsell_wrap').fadeIn();
      show++;
    }, intervalLoop);

    // Close upsell
    $(document).on('click', '.upsell_wrap .close-btn', function(e) {
      e.preventDefault();
      clearInterval(upsellInterval);
      $('.upsell_wrap').addClass('hide');
      setCookie('hide_upsell', 1);
    });
  }
}

function showAjaxLoading() {
  $('.loading').show();
  $('.wrap-all').addClass('overlay-layer');
}

function hideAjaxLoading() {
  $('.loading').hide();
  $('.wrap-all').removeClass('overlay-layer');
}

function reInitReview() {
  if(typeof SPR != 'undefined' && typeof SPR.$ != 'undefined' && useShopifyReviewApp) {
    return SPR.registerCallbacks(), SPR.initRatingHandler(), SPR.initDomEls(), SPR.loadProducts(), SPR.loadBadges();
  }
}

var showSideBar = 1;
function toggleSidebar() {
  $('.toggle-sidebar-control').removeClass('show-sidebar').removeClass('hide-sidebar');
  $('.col-main').removeClass('hide-left');
  $('.main-sidebar').removeClass('hide-sidebar');
  if(showSideBar < 0) {
    $('.toggle-sidebar-control').addClass('show-sidebar');
    $('.col-main').addClass('hide-left');
    $('.main-sidebar').addClass('hide-sidebar');
  } else {
    $('.toggle-sidebar-control').addClass('hide-sidebar');
  }
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Layered for collection page
function initLayerderEvent() {
  var me = this;
  var selector = '.block-layered-nav a.clear-all-btn, #coll-filter-1 ul li a, #coll-filter-2 ul li a, #coll-filter-3 ul li a, #coll-filter-4 ul li a, .block-layered-nav .active_filters a, .collection-toolbar #sortBox a, #collection-filter .list--inline.pagination li a';
  if($('#sortButton').length > 0) {
    var currentSort = getParameterByName('sort_by');
    if(currentSort != '' && currentSort != null) {
      var me = this;
      $(window).on('loaded_translate_data', function() {
        var html = '<span class="brackets">' + getTransTextByKey('collections.sorting.' + currentSort.replace('-', '_')) + '</span>';
        //me.updateElementInLayer('#sortButton .name', html);
      });
    }
  }

  if($(selector).length > 0) {
    $(document).on('click', selector, function(e){
      e.preventDefault();
      var url = $(this).attr('href');
      var dataSort = $(this).attr('data-sort');
      $.ajax({
        type: 'GET',
        url: url,
        data: {},
        beforeSend: function( xhr ) {
          showAjaxLoading();
        },
        complete: function (data) {
          hideAjaxLoading();
          history.pushState({
            page: url
          }, url, url);

          $('#collection-filter').html($('#collection-filter', data.responseText).html());
          initVertialMoreViewSlider('#collection-filter');
          if($('#goList').hasClass('active')) {
            changeGridList('list');
          }
          CdzCurrency.convertAll(shopCurrency, $('.store-currency ul li a.active').attr('data-code'), '#collection-filter .price');

          $('.block-layered-nav').html($('.block-layered-nav', data.responseText).html());
          reInitReview();
          lozadObj.observe();

          var div = $('.collection-toolbar .sortBy', data.responseText);
          if(div.find('#sortButton .name').length > 0) {
            div.find('#sortButton .name').html(div.find('#sortForm li a[data-sort="' + dataSort +'"]').html());
          }

          $('.collection-toolbar .sortBy').html(div.html());
          applyTranslateData('#shopify-section-collection-template', me.currentLocale, true);

          $('.breadcrumbs').html($('.breadcrumbs', data.responseText).html());
          applyTranslateData('.breadcrumbs', me.currentLocale, true);

          $('body,html')
          .velocity('stop')
          .velocity('scroll', { duration: 750, offset: $('.collection-toolbar').offset().top });

          $('#collection-filter .wow').each(function(index, value) {
            //wow.show(value);
            $(this).removeClass('wow').addClass('animated');
            displayElements($(this).find('.wait-animated'));
          });

          $("#tags-load").hide();
        }
      });
    });
  }
}

function initCollectionTemplate() {
  var sidebarCookie = getCookie('sidebar_showLeft');
  if(sidebarCookie != undefined) {
    showSideBar = parseInt(sidebarCookie);
    toggleSidebar();
  } else if($('.col-main').hasClass('hide-left')) {
    showSideBar = -1;
  }
  $(document).on('click', '.toggle-sidebar-control', function(e) {
    e.preventDefault();
    showSideBar *= -1;
    setCookie('sidebar_showLeft', showSideBar);
    toggleSidebar();
  });

  updateGridList();
  initNavMobile('#cdz-off-canvas-btn', '.main-sidebar .navbar-canvas-inner');
  initLayerderEvent();
}

/**
 *
 *  Show/hide customer address forms
 *
 */
 function customerAddressForm() {
  var $newAddressForm = $('#AddressNewForm');

  if (!$newAddressForm.length) {
    return;
  }

  // Initialize observers on address selectors, defined in shopify_common.js
  if (Shopify) {
    // eslint-disable-next-line no-new
    new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {
      hideElement: 'AddressProvinceContainerNew'
    });
  }

  // Initialize each edit form's country/province selector
  $('.address-country-option').each(function() {
    var formId = $(this).data('form-id');
    var countrySelector = 'AddressCountry_' + formId;
    var provinceSelector = 'AddressProvince_' + formId;
    var containerSelector = 'AddressProvinceContainer_' + formId;

    // eslint-disable-next-line no-new
    new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
      hideElement: containerSelector
    });
  });

  // Toggle new/edit address forms
  $('.address-new-toggle').on('click', function() {
    $newAddressForm.toggleClass('hide');
  });

  $('.address-edit-toggle').on('click', function() {
    var formId = $(this).data('form-id');
    $('#EditAddress_' + formId).toggleClass('hide');
  });

  $(document).on('click', '.address-delete', function() {
    var $el = $(this);
    var formId = $el.data('form-id');
    var confirmMessage = $el.attr('data-confirm-message');

    // eslint-disable-next-line no-alert
    if (confirm(confirmMessage || 'Are you sure you wish to delete this address?')) {
      Shopify.postLink('/account/addresses/' + formId, {parameters: {_method: 'delete'}});
    }
  });
}

function readSubPattern(html) {
  var subPattern = new RegExp("\\[" + currentLocale + "\\](.*)\\[\\/" + currentLocale + '\\]', 'g'); 
  if(html.match(subPattern)) {
    var sub = '';
    html = html.replace(subPattern, function(subMatch, subContents, subS, subOffset) {
      sub = subContents;
      return subContents;
    });
    html = sub;
  }
  return html;
}

function readTransRegex(html, generateTag) {
  var pattern = /\[t\](.*?)\[\/t\]/g;
  html = html.replace(pattern, function(match, contents, s, offset) {
    contents = readSubPattern(html);
    if(generateTag == 1) {
      return '<span data-trans-link-list="' + match + '">' + contents + '</span>';
    } else {
      return contents;
    }
  });
  return html;
}

function transLinkList(wrap) {
  var pattern = /\[t\](.*?)\[\/t\]/g;
  $(wrap + ' .link-list li a,' + wrap + ' .footer-link li a').each(function() {
     if($(this).find("[data-trans-link-list]").length == 0 && $(this).html().match(pattern)) {
      var html = $(this).html();
      html = readTransRegex(html, 1);
      $(this).html(html);
    } else {
      $(this).find("[data-trans-link-list]").each(function() {
        if($(this).attr('data-trans-link-list').match(pattern)) {
          $(this).html(readTransRegex($(this).attr('data-trans-link-list'), 0));
        }
      });
    }
  });
}

function enableSidebarCanvas() {
  $('.nav-bar-canvas').removeClass('hide');
}

function hidePreloader() {
  $('#preloader').velocity({
      "opacity": 0
    }, 1000, 'ease', function() {
      $('#preloader').remove();
      $('.loading-site').removeClass('loading-site');
      setTimeout(function() {
        initNewsletterPopup();
      }, 300);
  });
}

var lozadObj = lozad('.lozad', {
    load: function(el) {
        el.src = el.dataset.src;
    }
});
lozadObj.observe();

hidePreloader();

function initGlobalAction() {
  enableSidebarCanvas();
  initUpsellProducts();
  window.fieldLabelEffect();
  initResponsiveTabsEvent();
  changeAdapt();
  $(window).bind('cdz_mobile',mobileConfig);
  $(window).bind('cdz_pc',pcConfig);
  initDropdownMenu('body', {trigger:'.cdz-trigger',dropdown:'.cdz-dropdown-content'});  
  loadMoreItems();
  initChangeQtyEvent();
  initSearchModal();
  
  initTooltip();
  initMoreViewsSwitchImg();
  initNavMobile('.main-navbar-btn', '#cdz-mobile-nav');
  initHideNavMobile(300);
  toggleCartEditor();
  initVerMenu();
  cdzBackTopButton();
  initStickyMenu();
  customerAddressForm();
}

$(window).load(function() {
  initPromotionBanner();
});
/*! lightgallery - v1.3.9 - 2017-03-05
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(){"use strict";function b(b,d){if(this.el=b,this.$el=a(b),this.s=a.extend({},c,d),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=a(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(a(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var c={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};b.prototype.init=function(){var b=this;b.s.preload>b.$items.length&&(b.s.preload=b.$items.length);var c=window.location.hash;c.indexOf("lg="+this.s.galleryId)>0&&(b.index=parseInt(c.split("&slide=")[1],10),a("body").addClass("lg-from-hash"),a("body").hasClass("lg-on")||(setTimeout(function(){b.build(b.index)}),a("body").addClass("lg-on"))),b.s.dynamic?(b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||0,a("body").hasClass("lg-on")||setTimeout(function(){b.build(b.index),a("body").addClass("lg-on")})):b.$items.on("click.lgcustom",function(c){try{c.preventDefault(),c.preventDefault()}catch(a){c.returnValue=!1}b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||b.$items.index(this),a("body").hasClass("lg-on")||(b.build(b.index),a("body").addClass("lg-on"))})},b.prototype.build=function(b){var c=this;c.structure(),a.each(a.fn.lightGallery.modules,function(b){c.modules[b]=new a.fn.lightGallery.modules[b](c.el)}),c.slide(b,!1,!1,!1),c.s.keyPress&&c.keyPress(),c.$items.length>1&&(c.arrow(),setTimeout(function(){c.enableDrag(),c.enableSwipe()},50),c.s.mousewheel&&c.mousewheel()),c.counter(),c.closeGallery(),c.$el.trigger("onAfterOpen.lg"),c.$outer.on("mousemove.lg click.lg touchstart.lg",function(){c.$outer.removeClass("lg-hide-items"),clearTimeout(c.hideBartimeout),c.hideBartimeout=setTimeout(function(){c.$outer.addClass("lg-hide-items")},c.s.hideBarsDelay)}),c.$outer.trigger("mousemove.lg")},b.prototype.structure=function(){var b,c="",d="",e=0,f="",g=this;for(a("body").append('<div class="lg-backdrop"></div>'),a(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),e=0;e<this.$items.length;e++)c+='<div class="lg-item"></div>';if(this.s.controls&&this.$items.length>1&&(d='<div class="lg-actions"><div class="lg-prev lg-icon">'+this.s.prevHtml+'</div><div class="lg-next lg-icon">'+this.s.nextHtml+"</div></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(f='<div class="lg-sub-html"></div>'),b='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+c+'</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>'+d+f+"</div></div>",a("body").append(b),this.$outer=a(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),g.setTop(),a(window).on("resize.lg orientationchange.lg",function(){setTimeout(function(){g.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var h=this.$outer.find(".lg-inner");h.css("transition-timing-function",this.s.cssEasing),h.css("transition-duration",this.s.speed+"ms")}setTimeout(function(){a(".lg-backdrop").addClass("in")}),setTimeout(function(){g.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=a(window).scrollTop()},b.prototype.setTop=function(){if("100%"!==this.s.height){var b=a(window).height(),c=(b-parseInt(this.s.height,10))/2,d=this.$outer.find(".lg");b>=parseInt(this.s.height,10)?d.css("top",c+"px"):d.css("top","0px")}},b.prototype.doCss=function(){var a=function(){var a=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],b=document.documentElement,c=0;for(c=0;c<a.length;c++)if(a[c]in b.style)return!0};return!!a()},b.prototype.isVideo=function(a,b){var c;if(c=this.s.dynamic?this.s.dynamicEl[b].html:this.$items.eq(b).attr("data-html"),!a&&c)return{html5:!0};var d=a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),e=a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),f=a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),g=a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return d?{youtube:d}:e?{vimeo:e}:f?{dailymotion:f}:g?{vk:g}:void 0},b.prototype.counter=function(){this.s.counter&&a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},b.prototype.addHtml=function(b){var c,d,e=null;if(this.s.dynamic?this.s.dynamicEl[b].subHtmlUrl?c=this.s.dynamicEl[b].subHtmlUrl:e=this.s.dynamicEl[b].subHtml:(d=this.$items.eq(b),d.attr("data-sub-html-url")?c=d.attr("data-sub-html-url"):(e=d.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!e&&(e=d.attr("title")||d.find("img").first().attr("alt")))),!c)if("undefined"!=typeof e&&null!==e){var f=e.substring(0,1);"."!==f&&"#"!==f||(e=this.s.subHtmlSelectorRelative&&!this.s.dynamic?d.find(e).html():a(e).html())}else e="";".lg-sub-html"===this.s.appendSubHtmlTo?c?this.$outer.find(this.s.appendSubHtmlTo).load(c):this.$outer.find(this.s.appendSubHtmlTo).html(e):c?this.$slide.eq(b).load(c):this.$slide.eq(b).append(e),"undefined"!=typeof e&&null!==e&&(""===e?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[b])},b.prototype.preload=function(a){var b=1,c=1;for(b=1;b<=this.s.preload&&!(b>=this.$items.length-a);b++)this.loadContent(a+b,!1,0);for(c=1;c<=this.s.preload&&!(a-c<0);c++)this.loadContent(a-c,!1,0)},b.prototype.loadContent=function(b,c,d){var e,f,g,h,i,j,k=this,l=!1,m=function(b){for(var c=[],d=[],e=0;e<b.length;e++){var g=b[e].split(" ");""===g[0]&&g.splice(0,1),d.push(g[0]),c.push(g[1])}for(var h=a(window).width(),i=0;i<c.length;i++)if(parseInt(c[i],10)>h){f=d[i];break}};if(k.s.dynamic){if(k.s.dynamicEl[b].poster&&(l=!0,g=k.s.dynamicEl[b].poster),j=k.s.dynamicEl[b].html,f=k.s.dynamicEl[b].src,k.s.dynamicEl[b].responsive){var n=k.s.dynamicEl[b].responsive.split(",");m(n)}h=k.s.dynamicEl[b].srcset,i=k.s.dynamicEl[b].sizes}else{if(k.$items.eq(b).attr("data-poster")&&(l=!0,g=k.$items.eq(b).attr("data-poster")),j=k.$items.eq(b).attr("data-html"),f=k.$items.eq(b).attr("href")||k.$items.eq(b).attr("data-src"),k.$items.eq(b).attr("data-responsive")){var o=k.$items.eq(b).attr("data-responsive").split(",");m(o)}h=k.$items.eq(b).attr("data-srcset"),i=k.$items.eq(b).attr("data-sizes")}var p=!1;k.s.dynamic?k.s.dynamicEl[b].iframe&&(p=!0):"true"===k.$items.eq(b).attr("data-iframe")&&(p=!0);var q=k.isVideo(f,b);if(!k.$slide.eq(b).hasClass("lg-loaded")){if(p)k.$slide.eq(b).prepend('<div class="lg-video-cont" style="max-width:'+k.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+f+'"  allowfullscreen="true"></iframe></div></div>');else if(l){var r="";r=q&&q.youtube?"lg-has-youtube":q&&q.vimeo?"lg-has-vimeo":"lg-has-html5",k.$slide.eq(b).prepend('<div class="lg-video-cont '+r+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+g+'" /></div></div>')}else q?(k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),k.$el.trigger("hasVideo.lg",[b,f,j])):k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+f+'" /></div>');if(k.$el.trigger("onAferAppendSlide.lg",[b]),e=k.$slide.eq(b).find(".lg-object"),i&&e.attr("sizes",i),h){e.attr("srcset",h);try{picturefill({elements:[e[0]]})}catch(a){console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&k.addHtml(b),k.$slide.eq(b).addClass("lg-loaded")}k.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){var c=0;d&&!a("body").hasClass("lg-from-hash")&&(c=d),setTimeout(function(){k.$slide.eq(b).addClass("lg-complete"),k.$el.trigger("onSlideItemLoad.lg",[b,d||0])},c)}),q&&q.html5&&!l&&k.$slide.eq(b).addClass("lg-complete"),c===!0&&(k.$slide.eq(b).hasClass("lg-complete")?k.preload(b):k.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){k.preload(b)}))},b.prototype.slide=function(b,c,d,e){var f=this.$outer.find(".lg-current").index(),g=this;if(!g.lGalleryOn||f!==b){var h=this.$slide.length,i=g.lGalleryOn?this.s.speed:0;if(!g.lgBusy){if(this.s.download){var j;j=g.s.dynamic?g.s.dynamicEl[b].downloadUrl!==!1&&(g.s.dynamicEl[b].downloadUrl||g.s.dynamicEl[b].src):"false"!==g.$items.eq(b).attr("data-download-url")&&(g.$items.eq(b).attr("data-download-url")||g.$items.eq(b).attr("href")||g.$items.eq(b).attr("data-src")),j?(a("#lg-download").attr("href",j),g.$outer.removeClass("lg-hide-download")):g.$outer.addClass("lg-hide-download")}if(this.$el.trigger("onBeforeSlide.lg",[f,b,c,d]),g.lgBusy=!0,clearTimeout(g.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){g.addHtml(b)},i),this.arrowDisable(b),e||(b<f?e="prev":b>f&&(e="next")),c){this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");var k,l;h>2?(k=b-1,l=b+1,0===b&&f===h-1?(l=0,k=h-1):b===h-1&&0===f&&(l=0,k=h-1)):(k=0,l=1),"prev"===e?g.$slide.eq(l).addClass("lg-next-slide"):g.$slide.eq(k).addClass("lg-prev-slide"),g.$slide.eq(b).addClass("lg-current")}else g.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),"prev"===e?(this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(f).addClass("lg-next-slide")):(this.$slide.eq(b).addClass("lg-next-slide"),this.$slide.eq(f).addClass("lg-prev-slide")),setTimeout(function(){g.$slide.removeClass("lg-current"),g.$slide.eq(b).addClass("lg-current"),g.$outer.removeClass("lg-no-trans")},50);g.lGalleryOn?(setTimeout(function(){g.loadContent(b,!0,0)},this.s.speed+50),setTimeout(function(){g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])},this.s.speed)):(g.loadContent(b,!0,g.s.backdropDuration),g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])),g.lGalleryOn=!0,this.s.counter&&a("#lg-counter-current").text(b+1)}}},b.prototype.goToNextSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(b.index+1<b.$slide.length?(b.index++,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,"next")):c?(b.index=0,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,"next")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-right-end"),setTimeout(function(){b.$outer.removeClass("lg-right-end")},400)))},b.prototype.goToPrevSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(b.index>0?(b.index--,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):c?(b.index=b.$items.length-1,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-left-end"),setTimeout(function(){b.$outer.removeClass("lg-left-end")},400)))},b.prototype.keyPress=function(){var b=this;this.$items.length>1&&a(window).on("keyup.lg",function(a){b.$items.length>1&&(37===a.keyCode&&(a.preventDefault(),b.goToPrevSlide()),39===a.keyCode&&(a.preventDefault(),b.goToNextSlide()))}),a(window).on("keydown.lg",function(a){b.s.escKey===!0&&27===a.keyCode&&(a.preventDefault(),b.$outer.hasClass("lg-thumb-open")?b.$outer.removeClass("lg-thumb-open"):b.destroy())})},b.prototype.arrow=function(){var a=this;this.$outer.find(".lg-prev").on("click.lg",function(){a.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){a.goToNextSlide()})},b.prototype.arrowDisable=function(a){!this.s.loop&&this.s.hideControlOnEnd&&(a+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),a>0?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},b.prototype.setTranslate=function(a,b,c){this.s.useLeft?a.css("left",b):a.css({transform:"translate3d("+b+"px, "+c+"px, 0px)"})},b.prototype.touchMove=function(b,c){var d=c-b;Math.abs(d)>15&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),d,0),this.setTranslate(a(".lg-prev-slide"),-this.$slide.eq(this.index).width()+d,0),this.setTranslate(a(".lg-next-slide"),this.$slide.eq(this.index).width()+d,0))},b.prototype.touchEnd=function(a){var b=this;"lg-slide"!==b.s.mode&&b.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){b.$outer.removeClass("lg-dragging"),a<0&&Math.abs(a)>b.s.swipeThreshold?b.goToNextSlide(!0):a>0&&Math.abs(a)>b.s.swipeThreshold?b.goToPrevSlide(!0):Math.abs(a)<5&&b.$el.trigger("onSlideClick.lg"),b.$slide.removeAttr("style")}),setTimeout(function(){b.$outer.hasClass("lg-dragging")||"lg-slide"===b.s.mode||b.$outer.removeClass("lg-slide")},b.s.speed+100)},b.prototype.enableSwipe=function(){var a=this,b=0,c=0,d=!1;a.s.enableSwipe&&a.isTouch&&a.doCss()&&(a.$slide.on("touchstart.lg",function(c){a.$outer.hasClass("lg-zoomed")||a.lgBusy||(c.preventDefault(),a.manageSwipeClass(),b=c.originalEvent.targetTouches[0].pageX)}),a.$slide.on("touchmove.lg",function(e){a.$outer.hasClass("lg-zoomed")||(e.preventDefault(),c=e.originalEvent.targetTouches[0].pageX,a.touchMove(b,c),d=!0)}),a.$slide.on("touchend.lg",function(){a.$outer.hasClass("lg-zoomed")||(d?(d=!1,a.touchEnd(c-b)):a.$el.trigger("onSlideClick.lg"))}))},b.prototype.enableDrag=function(){var b=this,c=0,d=0,e=!1,f=!1;b.s.enableDrag&&!b.isTouch&&b.doCss()&&(b.$slide.on("mousedown.lg",function(d){b.$outer.hasClass("lg-zoomed")||(a(d.target).hasClass("lg-object")||a(d.target).hasClass("lg-video-play"))&&(d.preventDefault(),b.lgBusy||(b.manageSwipeClass(),c=d.pageX,e=!0,b.$outer.scrollLeft+=1,b.$outer.scrollLeft-=1,b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),b.$el.trigger("onDragstart.lg")))}),a(window).on("mousemove.lg",function(a){e&&(f=!0,d=a.pageX,b.touchMove(c,d),b.$el.trigger("onDragmove.lg"))}),a(window).on("mouseup.lg",function(g){f?(f=!1,b.touchEnd(d-c),b.$el.trigger("onDragend.lg")):(a(g.target).hasClass("lg-object")||a(g.target).hasClass("lg-video-play"))&&b.$el.trigger("onSlideClick.lg"),e&&(e=!1,b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},b.prototype.manageSwipeClass=function(){var a=this.index+1,b=this.index-1;this.s.loop&&this.$slide.length>2&&(0===this.index?b=this.$slide.length-1:this.index===this.$slide.length-1&&(a=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),b>-1&&this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(a).addClass("lg-next-slide")},b.prototype.mousewheel=function(){var a=this;a.$outer.on("mousewheel.lg",function(b){b.deltaY&&(b.deltaY>0?a.goToPrevSlide():a.goToNextSlide(),b.preventDefault())})},b.prototype.closeGallery=function(){var b=this,c=!1;this.$outer.find(".lg-close").on("click.lg",function(){b.destroy()}),b.s.closable&&(b.$outer.on("mousedown.lg",function(b){c=!!(a(b.target).is(".lg-outer")||a(b.target).is(".lg-item ")||a(b.target).is(".lg-img-wrap"))}),b.$outer.on("mouseup.lg",function(d){(a(d.target).is(".lg-outer")||a(d.target).is(".lg-item ")||a(d.target).is(".lg-img-wrap")&&c)&&(b.$outer.hasClass("lg-dragging")||b.destroy())}))},b.prototype.destroy=function(b){var c=this;b||(c.$el.trigger("onBeforeClose.lg"),a(window).scrollTop(c.prevScrollTop)),b&&(c.s.dynamic||this.$items.off("click.lg click.lgcustom"),a.removeData(c.el,"lightGallery")),this.$el.off(".lg.tm"),a.each(a.fn.lightGallery.modules,function(a){c.modules[a]&&c.modules[a].destroy()}),this.lGalleryOn=!1,clearTimeout(c.hideBartimeout),this.hideBartimeout=!1,a(window).off(".lg"),a("body").removeClass("lg-on lg-from-hash"),c.$outer&&c.$outer.removeClass("lg-visible"),a(".lg-backdrop").removeClass("in"),setTimeout(function(){c.$outer&&c.$outer.remove(),a(".lg-backdrop").remove(),b||c.$el.trigger("onCloseAfter.lg")},c.s.backdropDuration+50)},a.fn.lightGallery=function(c){return this.each(function(){if(a.data(this,"lightGallery"))try{a(this).data("lightGallery").init()}catch(a){console.error("lightGallery has not initiated properly")}else a.data(this,"lightGallery",new b(this,c))})},a.fn.lightGallery.modules={}}()});
/*! lg-thumbnail - v1.0.3 - 2017-02-05
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(){"use strict";var b={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",thumbWidth:100,thumbContHeight:100,thumbMargin:5,exThumbImage:!1,showThumbByDefault:!0,toogleThumb:!0,pullCaptionUp:!0,enableThumbDrag:!0,enableThumbSwipe:!0,swipeThreshold:50,loadYoutubeThumbnail:!0,youtubeThumbSize:1,loadVimeoThumbnail:!0,vimeoThumbSize:"thumbnail_small",loadDailymotionThumbnail:!0},c=function(c){return this.core=a(c).data("lightGallery"),this.core.s=a.extend({},b,this.core.s),this.$el=a(c),this.$thumbOuter=null,this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.$items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin),this.thumbIndex=this.core.index,this.left=0,this.init(),this};c.prototype.init=function(){var a=this;this.core.s.thumbnail&&this.core.$items.length>1&&(this.core.s.showThumbByDefault&&setTimeout(function(){a.core.$outer.addClass("lg-thumb-open")},700),this.core.s.pullCaptionUp&&this.core.$outer.addClass("lg-pull-caption-up"),this.build(),this.core.s.animateThumb?(this.core.s.enableThumbDrag&&!this.core.isTouch&&this.core.doCss()&&this.enableThumbDrag(),this.core.s.enableThumbSwipe&&this.core.isTouch&&this.core.doCss()&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toogle(),this.thumbkeyPress())},c.prototype.build=function(){function b(a,b,c){var g,h=d.core.isVideo(a,c)||{},i="";h.youtube||h.vimeo||h.dailymotion?h.youtube?g=d.core.s.loadYoutubeThumbnail?"//img.youtube.com/vi/"+h.youtube[1]+"/"+d.core.s.youtubeThumbSize+".jpg":b:h.vimeo?d.core.s.loadVimeoThumbnail?(g="//i.vimeocdn.com/video/error_"+f+".jpg",i=h.vimeo[1]):g=b:h.dailymotion&&(g=d.core.s.loadDailymotionThumbnail?"//www.dailymotion.com/thumbnail/video/"+h.dailymotion[1]:b):g=b,e+='<div data-vimeo-id="'+i+'" class="lg-thumb-item" style="width:'+d.core.s.thumbWidth+"px; margin-right: "+d.core.s.thumbMargin+'px"><img src="'+g+'" /></div>',i=""}var c,d=this,e="",f="",g='<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';switch(this.core.s.vimeoThumbSize){case"thumbnail_large":f="640";break;case"thumbnail_medium":f="200x150";break;case"thumbnail_small":f="100x75"}if(d.core.$outer.addClass("lg-has-thumb"),d.core.$outer.find(".lg").append(g),d.$thumbOuter=d.core.$outer.find(".lg-thumb-outer"),d.thumbOuterWidth=d.$thumbOuter.width(),d.core.s.animateThumb&&d.core.$outer.find(".lg-thumb").css({width:d.thumbTotalWidth+"px",position:"relative"}),this.core.s.animateThumb&&d.$thumbOuter.css("height",d.core.s.thumbContHeight+"px"),d.core.s.dynamic)for(var h=0;h<d.core.s.dynamicEl.length;h++)b(d.core.s.dynamicEl[h].src,d.core.s.dynamicEl[h].thumb,h);else d.core.$items.each(function(c){d.core.s.exThumbImage?b(a(this).attr("href")||a(this).attr("data-src"),a(this).attr(d.core.s.exThumbImage),c):b(a(this).attr("href")||a(this).attr("data-src"),a(this).find("img").attr("src"),c)});d.core.$outer.find(".lg-thumb").html(e),c=d.core.$outer.find(".lg-thumb-item"),c.each(function(){var b=a(this),c=b.attr("data-vimeo-id");c&&a.getJSON("//www.vimeo.com/api/v2/video/"+c+".json?callback=?",{format:"json"},function(a){b.find("img").attr("src",a[0][d.core.s.vimeoThumbSize])})}),c.eq(d.core.index).addClass("active"),d.core.$el.on("onBeforeSlide.lg.tm",function(){c.removeClass("active"),c.eq(d.core.index).addClass("active")}),c.on("click.lg touchend.lg",function(){var b=a(this);setTimeout(function(){(d.thumbClickable&&!d.core.lgBusy||!d.core.doCss())&&(d.core.index=b.index(),d.core.slide(d.core.index,!1,!0,!1))},50)}),d.core.$el.on("onBeforeSlide.lg.tm",function(){d.animateThumb(d.core.index)}),a(window).on("resize.lg.thumb orientationchange.lg.thumb",function(){setTimeout(function(){d.animateThumb(d.core.index),d.thumbOuterWidth=d.$thumbOuter.width()},200)})},c.prototype.setTranslate=function(a){this.core.$outer.find(".lg-thumb").css({transform:"translate3d(-"+a+"px, 0px, 0px)"})},c.prototype.animateThumb=function(a){var b=this.core.$outer.find(".lg-thumb");if(this.core.s.animateThumb){var c;switch(this.core.s.currentPagerPosition){case"left":c=0;break;case"middle":c=this.thumbOuterWidth/2-this.core.s.thumbWidth/2;break;case"right":c=this.thumbOuterWidth-this.core.s.thumbWidth}this.left=(this.core.s.thumbWidth+this.core.s.thumbMargin)*a-1-c,this.left>this.thumbTotalWidth-this.thumbOuterWidth&&(this.left=this.thumbTotalWidth-this.thumbOuterWidth),this.left<0&&(this.left=0),this.core.lGalleryOn?(b.hasClass("on")||this.core.$outer.find(".lg-thumb").css("transition-duration",this.core.s.speed+"ms"),this.core.doCss()||b.animate({left:-this.left+"px"},this.core.s.speed)):this.core.doCss()||b.css("left",-this.left+"px"),this.setTranslate(this.left)}},c.prototype.enableThumbDrag=function(){var b=this,c=0,d=0,e=!1,f=!1,g=0;b.$thumbOuter.addClass("lg-grab"),b.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb",function(a){b.thumbTotalWidth>b.thumbOuterWidth&&(a.preventDefault(),c=a.pageX,e=!0,b.core.$outer.scrollLeft+=1,b.core.$outer.scrollLeft-=1,b.thumbClickable=!1,b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))}),a(window).on("mousemove.lg.thumb",function(a){e&&(g=b.left,f=!0,d=a.pageX,b.$thumbOuter.addClass("lg-dragging"),g-=d-c,g>b.thumbTotalWidth-b.thumbOuterWidth&&(g=b.thumbTotalWidth-b.thumbOuterWidth),g<0&&(g=0),b.setTranslate(g))}),a(window).on("mouseup.lg.thumb",function(){f?(f=!1,b.$thumbOuter.removeClass("lg-dragging"),b.left=g,Math.abs(d-c)<b.core.s.swipeThreshold&&(b.thumbClickable=!0)):b.thumbClickable=!0,e&&(e=!1,b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))})},c.prototype.enableThumbSwipe=function(){var a=this,b=0,c=0,d=!1,e=0;a.core.$outer.find(".lg-thumb").on("touchstart.lg",function(c){a.thumbTotalWidth>a.thumbOuterWidth&&(c.preventDefault(),b=c.originalEvent.targetTouches[0].pageX,a.thumbClickable=!1)}),a.core.$outer.find(".lg-thumb").on("touchmove.lg",function(f){a.thumbTotalWidth>a.thumbOuterWidth&&(f.preventDefault(),c=f.originalEvent.targetTouches[0].pageX,d=!0,a.$thumbOuter.addClass("lg-dragging"),e=a.left,e-=c-b,e>a.thumbTotalWidth-a.thumbOuterWidth&&(e=a.thumbTotalWidth-a.thumbOuterWidth),e<0&&(e=0),a.setTranslate(e))}),a.core.$outer.find(".lg-thumb").on("touchend.lg",function(){a.thumbTotalWidth>a.thumbOuterWidth&&d?(d=!1,a.$thumbOuter.removeClass("lg-dragging"),Math.abs(c-b)<a.core.s.swipeThreshold&&(a.thumbClickable=!0),a.left=e):a.thumbClickable=!0})},c.prototype.toogle=function(){var a=this;a.core.s.toogleThumb&&(a.core.$outer.addClass("lg-can-toggle"),a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'),a.core.$outer.find(".lg-toogle-thumb").on("click.lg",function(){a.core.$outer.toggleClass("lg-thumb-open")}))},c.prototype.thumbkeyPress=function(){var b=this;a(window).on("keydown.lg.thumb",function(a){38===a.keyCode?(a.preventDefault(),b.core.$outer.addClass("lg-thumb-open")):40===a.keyCode&&(a.preventDefault(),b.core.$outer.removeClass("lg-thumb-open"))})},c.prototype.destroy=function(){this.core.s.thumbnail&&this.core.$items.length>1&&(a(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),this.$thumbOuter.remove(),this.core.$outer.removeClass("lg-has-thumb"))},a.fn.lightGallery.modules.Thumbnail=c}()});
/*! lg-fullscreen - v1.0.0 - 2016-09-20
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2016 Sachin N; Licensed GPLv3 */
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return b()}):"object"==typeof exports?module.exports=b():b()}(this,function(){!function(a,b,c,d){"use strict";var e={fullScreen:!0},f=function(b){return this.core=a(b).data("lightGallery"),this.$el=a(b),this.core.s=a.extend({},e,this.core.s),this.init(),this};f.prototype.init=function(){var a="";if(this.core.s.fullScreen){if(!(c.fullscreenEnabled||c.webkitFullscreenEnabled||c.mozFullScreenEnabled||c.msFullscreenEnabled))return;a='<span class="lg-fullscreen lg-icon"></span>',this.core.$outer.find(".lg-toolbar").append(a),this.fullScreen()}},f.prototype.requestFullscreen=function(){var a=c.documentElement;a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen()},f.prototype.exitFullscreen=function(){c.exitFullscreen?c.exitFullscreen():c.msExitFullscreen?c.msExitFullscreen():c.mozCancelFullScreen?c.mozCancelFullScreen():c.webkitExitFullscreen&&c.webkitExitFullscreen()},f.prototype.fullScreen=function(){var b=this;a(c).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",function(){b.core.$outer.toggleClass("lg-fullscreen-on")}),this.core.$outer.find(".lg-fullscreen").on("click.lg",function(){c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement||c.msFullscreenElement?b.exitFullscreen():b.requestFullscreen()})},f.prototype.destroy=function(){this.exitFullscreen(),a(c).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")},a.fn.lightGallery.modules.fullscreen=f}(jQuery,window,document)});
$.fn.cdzZoom = function(options){
	var defaultConfig = {
		mainImg: '.rsMainSlideImage',
		magnify: '.magnify'
	};
	options = $.extend( {},defaultConfig,options);
	$(this).each(function(index, element) {
		var $this = $(this);
		var $magnify = $this.find(options.magnify);
		var $mainImg = $this.find(options.mainImg);
		var nativeWidth = 0;
		var nativeHeight = 0;
		$this.data('cdzZoom',true);
		$this.on('mousemove.cdzZoom',
			function(e){
				if(!nativeWidth && !nativeHeight){
					var imgObject = new Image();
					imgObject.src = $mainImg.attr('src');
					nativeWidth = imgObject.width;
					nativeHeight = imgObject.height;
				}else{
					var magnifyOffset = $this.offset();
					var mx = e.pageX - magnifyOffset.left;
					var my = e.pageY - magnifyOffset.top;
				}
				if(mx < $this.width() && my < $this.height() && mx > 0 && my > 0){
					$magnify.fadeIn(100);
				}
				else{
					$magnify.fadeOut(100);
				}
				if($magnify.is(':visible')){
					var rx = Math.round(mx/$mainImg.width()*nativeWidth - $magnify.width()/2)*(-1);
					var ry = Math.round(my/$mainImg.height()*nativeHeight - $magnify.height()/2)*(-1);
					var bgp = rx + "px " + ry + "px";
					var px = mx - $magnify.width()/2;
					var py = my - $magnify.height()/2;
					$magnify.css({left: px, top: py, backgroundPosition: bgp});
				}
			}
			);
		$this.on('mouseleave.cdzZoom',function(e){
			$magnify.fadeOut(100);
		}); 
	}); 
};
$.fn.moreviewSlider = function(options){
	return this.each(function(){
		var $element = $(this);
		var moreviewSlider = {
			media: '',
			options: {
				thumbs: '.viewmore-thumbs',
				mains: '.viewmore-main',
				imageItem: '.image-item',
				thumbLink: '.thumb-link',
				mainLink: '.main-link',
				defaultType: 'vertical'
			},
			init: function(){
				this.element = $element;
				this.options = $.extend({},this.options,options);
				this._create();
			},
			_create: function(){
				var self = this, config = this.options;
				this.window = $(window);
				this.media = this._getMedia();

				this.$mains = $(config.mains,self.element);
				this.$thumbs = $(config.thumbs,self.element);
				var $mainsCoverWrap = self.$mains.find('.js-cover-wrap').first(), $thumbsCoverWrap = self.$thumbs.find('.js-cover-wrap').first();
				$mainsCoverWrap.prependTo(self.$mains);
				$thumbsCoverWrap.prependTo(self.$thumbs);
				this.$mainLink = $(config.mainLink,self.$mains);
				this.$thumbLink = $(config.thumbLink,self.$thumbs);
				this._initSlider();
				this._attachEvent();
				this._updateSwatch();
			},
			_attachEvent: function(){
				var self = this, config = this.options;
				this.$thumbLink.each(function(i,el){
					var $tLink = $(this);
					$tLink.on('click',function(e){
						e.preventDefault();
						self.$thumbLink.removeClass('select');
						$tLink.addClass('select');
						self.owl = self.$mains.data('owl.carousel');
						self.owl.to(i,self.owl.options.smartSpeed,true);

						if(typeof $tLink.data('mainSrc') !== 'undefined'){
							var $mLink = $(self.$mainLink[i]);
							var mainSrc = $tLink.data('mainSrc');
							$mLink.find('img').attr('src',mainSrc);
						}
					});
				});
				this.$mainLink.each(function(i,el){
					var $mLink = $(this);
					$mLink.on('click',function(e){
						e.preventDefault();
					});
					self._zoom($mLink.parent());
				});
			},
			_getMedia: function(){
				if(this.window.prop('innerWidth') < 768){
					return 'mobile';
				}else{
					return 'desktop';
				}
			},
			_initSlider: function(){
				var self = this, config = this.options, vertical;
				self.$firstMain = self.$mains.find('.main-link img').first();
				var img = new Image();
				setTimeout(function(){
					img.src = self.$firstMain.attr('src');			
				},300);
				$(img).load(function(){
					self.$thumbs.css('display','');
					self.$mains.addClass('owl-carousel owl-theme');
					self.$mains.owlCarousel({
						items: 1,
						nav: true,
						dots: false,
						margin: 0,
						rtl: theme.rtl,
						navText: [$('#prevSliderBtn').html(), $('#nextSliderBtn').html()],
						autoHeight: true,
						responsive : {
							0: {
								dots: true,
							},
							768: {
								dots: false,
							}
						},
						onInitialized: function(){
							setTimeout(function(){
								$(config.imageItem,self.element).each(function(){
									var $imgItem = $(this);
									var $linkImg = $imgItem.find('img').first();
									$imgItem.css('display','');
									$linkImg.attr('src',$linkImg.data('src'));
								});
							},500);
						}
					});
					self.height = self.$mains.height();
					self.$firstThumb = self.$thumbs.find('.thumb-link img').first();
					self.owl = self.$mains.data('owl.carousel');
					img = new Image();
					self.offset = 0;
					self.curIndex = 0;
					self.activeOffset = 0;
					$(img).load(function(){
						self.$thumbs.css({position:''});
						self.$thumbs.lightSlider(self._getSliderSettings(config));
						self.$thumbLink.each(function(i,el){
							var $tLink = $(this);
							$tLink.data('index',i);
							$tLink.data('mainSrc',$(self.$mainLink[i]).find('img').attr('src'));
						});
						self.$mainLink.each(function(i,el){
							var $mainLink = $(this);
							$mainLink.data('index',i);
							if($mainLink.hasClass('product-image')){
								self.owl.to(i,1,true);
								$(self.$thumbLink.get(i)).addClass('select');
							}
						});
						var slTimeout = false;
						self.$mains.on('refreshed.owl.carousel',function(){
							if(slTimeout){
								clearTimeout(slTimeout);
							}
							slTimeout = setTimeout(function(){
								var curMedia = self._getMedia();
								if( (curMedia != self.media) && (config.defaultType == 'vertical')){
									self.$thumbs.destroy();
									self.$thumbs.removeClass('lSSlide');
									self.media = curMedia;
									self.$thumbs.lightSlider = $.fn.lightSlider;
									self.$thumbs.lightSlider(self._getSliderSettings(config));
								}else{
									self.$thumbs.setConfig(self._getSliderSettings());
									self.$thumbs.refresh();
								}
								if(!config.vertical){
									slTimeout = setTimeout(function(){
										self.$thumbs.css({height:''});
									},300);
								}
							},300);
						});
						self.$mains.on('changed.owl.carousel',function(e){
							var index = e.item.index;
							var $tLink = $(self.$thumbLink[index]), $mLink = $(self.$mainLink[index]);
							self.$thumbLink.removeClass('select');
							$tLink.addClass('select');
							if(typeof $tLink.data('mainSrc') !== 'undefined'){
								var mainSrc = $tLink.data('mainSrc');
								$mLink.find('img').attr('src',mainSrc);
								var $parent = $mLink.parent();
								$parent.find('.magnify').css('background',mainSrc);
								self._zoom($parent);
								self.$mainLink.removeClass('product-image');
								$mLink.addClass('product-image');
							}
							var offset = Math.floor(index/config.item);
							if(self.offset != offset){
								self.$thumbs.goToSlide(offset*config.item);
								self.offset = offset;
							}
							self.curIndex = index;
						});
						self.$mains.find('.owl-stage').lightGallery({
							selectWithin: '.image-item',
							selector: '.main-link'
						});
						$('.rsUni',self.element).click(function(){
							$('.owl-item.active .main-link',self.element).first().click();
						});
					});
					img.src = self.$firstThumb.attr('src');
				});
			},
			_getSliderSettings: function(){
				var self = this, config = this.options;
				if(config.defaultType == 'vertical'){
					config.vertical = (self.media == 'desktop');	
				}else{
					config.vertical = false;
				}

				var imgHeight = self.$firstThumb.height();
				var imgWidth = self.$firstThumb.width();
				self.height = self.$mains.height();
				self.width = self.$mains.width();
				if(config.vertical){
					config.item = Math.floor(self.height/imgHeight);
					config.slideMargin = Math.max(0,(self.height - (imgHeight+2)*config.item)/config.item);
				}else{
					imgWidth = Math.max(85,imgWidth);
					config.item = Math.floor(self.width/imgWidth);
					config.slideMargin = Math.max(0,(self.width - (imgWidth+2)*config.item)/config.item);
				}
				return {
					item: config.item,
					vertical: config.vertical,
					verticalHeight: self.height,
					pager: false,
					slideMargin: config.slideMargin,
					onAfterSlide: function($el){},
					onSliderLoad: function($el){
						if(!config.vertical){
							self.$thumbs.css({height:''});
						}
					}
				}
			},
			_zoom: function($parent){
				$parent.off('mousemove.cdzZoom');
				$parent.off('mouseleave.cdzZoom');
				$parent.data('cdzZoom','');
				$parent.cdzZoom({
					mainImg: '.main-link > img',
					magnify: '.magnify'	
				});

			},
			_updateSwatch: function(){
				var self = this;
				self.window.on('swatchUpdateImage',function(e,swatchImageUrl){
					var $mLink = $(self.$mainLink.get(self.curIndex))
					$mLink.find('img').attr('src',swatchImageUrl);
					var background = 'url('+swatchImageUrl+')';
					var $parent = $mLink.parent();
					$parent.find('.magnify').css('background',background);
					self._zoom($parent);
				});
			}
		}
		moreviewSlider.init();
	});
}
$.fn.builTabs = function(options){
	var defaultConfig = {
		tabItem: '.box-collateral',
		wrapCSS: 'product-detail-tab',
		tabTitle: 'h2',
		responsive: true
	};
	conf = $.extend(defaultConfig,options || { });
	var tabItem = conf.tabItem;
	$(this).each(function(){
		var $this = $(this);
		var tabHtml = 	'<div class="'+conf.wrapCSS+'">';
		var navTabId = 'cdz-nav-tab'+ Math.round(1000*Math.random());
		if(conf.responsive){
			tabHtml +=	'<div class="mobile-nav-tab-dropdown visible-xs" data-target="#'+navTabId+'"></div>';
		}
		tabHtml +=		'<ul class="nav nav-tabs" id="'+navTabId+'"></ul>';
		tabHtml +=		'<div class="nav-tab-content tab-content"></div>';
		tabHtml +=	'</div>';
		var $container = $(tabHtml);
		$this.find('> '+tabItem).each(function(id,el){
			var $tabItem = $(this);
			var tabID = $tabItem.attr('id');
			var tabLink = '', tabContent = '';
			if(id == 0){
				var activeClass = 'active';
				$tabItem.addClass('tab-pane fade active in');
				$('.mobile-nav-tab-dropdown',$container).html($tabItem.find(conf.tabTitle).first().text());
			}else{
				var activeClass = '';
				$tabItem.addClass('tab-pane fade');
			}
			tabLink +=	'<li class="nav-tab-item '+activeClass+'">';
			tabLink +=		'<a href="#'+tabID+'" id="link-'+tabID+'" data-toggle="tab" class="data switch"></a>';
			tabLink +=	'</li>'
			var $tabLink = $(tabLink);
			$container.find('.nav-tabs').append($tabLink);
			$tabItem.find(conf.tabTitle).first().appendTo($tabLink.find('#link-'+tabID));
			$tabItem.appendTo($container.find('.tab-content'));
		});
		$container.appendTo($this);
	});
}
function coverImage(wrap, type){
	$(wrap + ' [data-moreview]').each(function(){
		var $moreviewSlider = $(this);
		$moreviewSlider.moreviewSlider({
			defaultType: type
		});
	});
	setTimeout(function(){
		if(wrap == '.cd-quick-view') {
			$('.cd-quick-view .viewmore-main').removeClass('init-media');
		}
	}, 500);
}

var waitSPR;
function initReviewForm() {
	if(useShopifyReviewApp) {
		var url = $('.box-reviews[data-url]').data('url');
		$.ajax({
			type: 'GET',
			url: url,
			data: {view : 'review'},
			success: function(response){
				$('.box-reviews[data-url]').html(response);
				waitSPR = setInterval(function() {
					if(typeof SPR != 'undefined' && typeof SPR.$ != 'undefined') {
						clearInterval(waitSPR);	
						SPR.registerCallbacks(), SPR.initRatingHandler(), SPR.initDomEls(), SPR.loadProducts(), SPR.loadBadges();
					}
				}, 100);
			}
		});
	}
}

// For product detail page
function initDetailJs() {
	if($('#ProductJson-product-template').length > 0) {
		coverImage('.product-essential .product-view-media', theme.thumbnailSliderType);

		$(document).on('click', '.product-shop-wrap .rating-star', function(){
			$('#link-box-reviews').trigger('click');
			$('html, body').animate({
				scrollTop: $(".product-detail-tab").offset().top
			}, 500);
		});
		$(document).on('click', '.product-essential .magnify', function() {
			$('.rsUni').trigger('click');
		});
		initSizeChart();
		activeCurrentSwatch();
		initReviewForm();
	}
}

function initSizeChart() {
	$(document).on('click', '.size-chart-btn', function(e) {
		e.preventDefault();
		var value = $(this).attr('data-value');
		$('#size-chart-modal .modal-content').html('<img class="img-responsive" src="' + value + '" />');
		$('#size-chart-modal').modal('show');
	});
}

function activeCurrentSwatch() {
	$('#product-options-wrapper .single-option-selector').each(function () {
		var index = parseInt($(this).attr('data-index').replace('option', '')) - 1;
		var value = $(this).val();
		$('#product-options-wrapper .swatch[data-option-index="' + index + '"] .swatch-element[data-value="' + value + '"]').addClass('active');
	});
}
window.theme = window.theme || {};

/********* --- Header --- *********/
theme.headerApp = null; 
theme.HeaderSection = (function() {

  function HeaderSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    
    theme.headerApp = new HeaderApp({
      el: "#header_cart",
      data: dataApp
    });
    theme.headerApp.initLocale();

    theme.headerAppMobile = new HeaderApp({
      el: "#header_cart_mobile",
      data: dataApp
    });
    theme.headerAppMobile.init();

    $(window).on('loaded_translate_data', function() {
      applyTranslateData("#headerApp", currentLocale, true);
    });
    transLinkList('#footer_' + sectionId + '_section');
    $(window).on('change_cdz_locale', function() {
      transLinkList('#footer_' + sectionId + '_section');
    });
  }

  return HeaderSection;
})();
theme.HeaderSection.prototype = _.assignIn({}, theme.HeaderSection.prototype, {
  onSelect: function() {
    applyTranslateData("#headerApp", currentLocale, false);
    enableSidebarCanvas();
  },
  onUnload: function() {
    delete theme.headerApp;
    delete theme.headerAppMobile;
  }
});

/********* --- Footer --- *********/
theme.footerApp = null;  
theme.FooterSection = (function() {

  function Footer(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    theme.footerApp = new FooterApp({
      el: "#footer_" + sectionId + "_section",
      data: dataApp
    });
    theme.footerApp.init();
    $(window).on('loaded_translate_data', function() {
      applyTranslateData(".footerApp", currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
  }

  Footer.prototype = _.assignIn({}, Footer.prototype, {
    onSelect: function() {
      applyTranslateData(".footerApp", currentLocale, false);
    },
    onUnload: function() {
      delete theme.footerApp;
    }
  });

  return Footer;
})();

/********* --- Slideshow --- *********/ 
theme.slideshows = {};

theme.SlideshowSection = (function() {
  function SlideshowSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var slideshow = this.slideshow = '#Slideshow-' + sectionId;

    theme.slideshows[slideshow] = initSlideshow();
  }

  return SlideshowSection;
})();

theme.SlideshowSection.prototype = _.assignIn({}, theme.SlideshowSection.prototype, {
  onUnload: function() {
    delete theme.slideshows[this.slideshow];
  }
});

/********* --- Product Block Style 1 --- *********/
theme.productBlock1 = {};
theme.ProductBlock1Section = (function() {
  function ProductBlock1Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    initVertialMoreViewSlider('#' + $container.attr('id'));
    
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    initSlider('#' + $container.attr('id'));
    theme.productBlock1[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock1Section;
})();

theme.ProductBlock1Section.prototype = _.assignIn({}, theme.ProductBlock1Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock1[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock1[this.productBlock];
  }
});

/********* --- Product Block Style 2 --- *********/
theme.productBlock2 = {};
theme.ProductBlock2Section = (function() {
  function ProductBlock2Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;

    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock2[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock2Section;
})();

theme.ProductBlock2Section.prototype = _.assignIn({}, theme.ProductBlock2Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock2[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock2[this.productBlock];
  }
});

/********* --- Product Block Style 3 --- *********/
theme.productBlock3 = {};
theme.ProductBlock3Section = (function() {
  function ProductBlock3Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    initSlider('#' + $container.attr('id'));
    initVertialMoreViewSlider('#' + $container.attr('id'));
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock3[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock3Section;
})();

theme.ProductBlock3Section.prototype = _.assignIn({}, theme.ProductBlock3Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock3[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock3[this.productBlock];
  }
});

/********* --- Product Block Style 4 --- *********/
theme.productBlock4 = {};
theme.ProductBlock4Section = (function() {
  function ProductBlock4Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock4[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock4Section;
})();

theme.ProductBlock4Section.prototype = _.assignIn({}, theme.ProductBlock4Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock4[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock4[this.productBlock];
  }
});

/********* --- Product Block Style 5 --- *********/
theme.productBlock5 = {};
theme.ProductBlock5Section = (function() {
  function ProductBlock5Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock5[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock5Section;
})();

theme.ProductBlock5Section.prototype = _.assignIn({}, theme.ProductBlock5Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock5[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock5[this.productBlock];
  }
});

/********* --- Product Block Style 6 --- *********/
theme.productBlock6 = {};
theme.ProductBlock6Section = (function() {
  function ProductBlock6Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock6[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock6Section;
})();

theme.ProductBlock6Section.prototype = _.assignIn({}, theme.ProductBlock6Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock6[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock6[this.productBlock];
  }
});

/********* --- Product Block Style 7 --- *********/
theme.productBlock7 = {};
theme.ProductBlock7Section = (function() {
  function ProductBlock7Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock7[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock7Section;
})();

theme.ProductBlock7Section.prototype = _.assignIn({}, theme.ProductBlock7Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock7[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock7[this.productBlock];
  }
});

/********* --- Product Block Style 8 --- *********/
theme.productBlock8 = {};
theme.ProductBlock8Section = (function() {
  function ProductBlock8Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    initSlider('#' + $container.attr('id'));
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock8[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock8Section;
})();

theme.ProductBlock8Section.prototype = _.assignIn({}, theme.ProductBlock8Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock8[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock8[this.productBlock];
  }
});

/********* --- Product Block Style 9 --- *********/
theme.productBlock9 = {};
theme.ProductBlock9Section = (function() {
  function ProductBlock9Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    initSlider('#' + $container.attr('id'));
    initDealCountdown('#' + $container.attr('id'));
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock9[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock9Section;
})();

theme.ProductBlock9Section.prototype = _.assignIn({}, theme.ProductBlock9Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock9[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock9[this.productBlock];
  }
});

/********* --- Product Block Style 10 --- *********/
theme.productBlock10 = {};
theme.ProductBlock10Section = (function() {
  function ProductBlock10Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    initSlider('#' + $container.attr('id'));
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock10[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock10Section;
})();

theme.ProductBlock10Section.prototype = _.assignIn({}, theme.ProductBlock10Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock10[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock10[this.productBlock];
  }
});

/********* --- Instagram Slider --- *********/
theme.instagramSlider = {};
theme.InstagramSliderSection = (function() {
  function InstagramSliderSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#instagramSlider-' + sectionId;

    initInstagramSlider('#' + $container.attr('id'));
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.instagramSlider[block] = '#' + $container.attr('id');
  }

  return InstagramSliderSection;
})();

theme.InstagramSliderSection.prototype = _.assignIn({}, theme.InstagramSliderSection.prototype, {
  onSelect: function() {
    applyTranslateData(theme.instagramSlider[this.obj], currentLocale, false);
  },
  onUnload: function() {
    delete theme.instagramSlider[this.obj];
  }
});

/********* --- Brands Slider --- *********/
theme.brandsSlider = {};
theme.BrandsSliderSection = (function() {
  function BrandsSliderSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#brandsSlider-' + sectionId;

    initSlider('#' + $container.attr('id'));
    theme.brandsSlider[block] = '#' + $container.attr('id');
  }

  return BrandsSliderSection;
})();

theme.BrandsSliderSection.prototype = _.assignIn({}, theme.BrandsSliderSection.prototype, {
  onUnload: function() {
    delete theme.brandsSlider[this.obj];
  }
});

/********* --- Featured Blog --- *********/
theme.featuredBlog = {};
theme.FeaturedBlogSection = (function() {
  function FeaturedBlogSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#featuredBlog-' + sectionId;

    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    
    initSlider('#' + $container.attr('id'));
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.featuredBlog[block] = '#' + $container.attr('id');
  }

  return FeaturedBlogSection;
})();

theme.FeaturedBlogSection.prototype = _.assignIn({}, theme.FeaturedBlogSection.prototype, {
  onSelect: function() {
    applyTranslateData(theme.featuredBlog[this.obj], currentLocale, false);
  },
  onUnload: function() {
    delete theme.featuredBlog[this.obj];
  }
});

/********* --- Collection Template --- *********/
theme.collectionTemplate = {};
theme.CollectionTemplateSection = (function() {
  function CollectionTemplateSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#collectionTemplate-' + sectionId;
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    initCollectionTemplate();
    /*theme.collectionTemplate = new CollectionTemplateApp({
      el: '#' + $container.attr('id'),
      data: dataApp
    });*/
    //theme.collectionTemplate.init();
    initVertialMoreViewSlider('#' + $container.attr('id'));
    theme.collectionTemplate[block] = '#' + $container.attr('id');
  }

  return CollectionTemplateSection;
})();

theme.CollectionTemplateSection.prototype = _.assignIn({}, theme.CollectionTemplateSection.prototype, {
  onSelect: function() {
    lozadObj.observe();
    applyTranslateData(theme.collectionTemplate[this.obj], currentLocale, false);
    enableSidebarCanvas();
  },
  onUnload: function() {
    delete theme.collectionTemplate[this.obj];
  }
});

/********* --- Product Template --- *********/
theme.Product = (function() {
  function Product(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#ProductSection-' + sectionId;
    // init Product Template App
    var app = new ProductTemplateApp({
      el: '#product-view-info',
      data: dataApp
    });
    app.init();
    $(window).on('loaded_translate_data', function() {
      setTimeout(function() {
        applyTranslateData('#ProductSection-' + sectionId, currentLocale, true);
      }, 300);
    });
    
    initDetailJs();
    initDealCountdown('#' + $container.attr('id'));
    initSlider('.block-related');
  }

  Product.prototype = _.assignIn({}, Product.prototype, {
    onSelect: function() {
      applyTranslateData(this.obj, currentLocale, false);
    }
  });
  return Product;
})();

/********* --- Login and Reset Template --- *********/
theme.loginPage = {};
theme.LoginPageSection = (function() {
  function LoginPageSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#loginPage-' + sectionId;
    theme.loginPage = new loginPageApp({
      el: '#' + $container.attr('id'),
      data: dataApp
    });
    theme.loginPage.init();
    theme.loginPage[block] = '#' + $container.attr('id');
  }

  return LoginPageSection;
})();

theme.LoginPageSection.prototype = _.assignIn({}, theme.LoginPageSection.prototype, {
  onSelect: function() {
    applyTranslateData(theme.loginPage[this.obj], currentLocale, false);
  },
  onUnload: function() {
    delete theme.loginPage[this.obj];
  }
});

/********* --- Cart Template --- *********/
theme.Cart = (function() {
  var config = {
    cartNoCookies: 'cart--no-cookies'
  };

  function Cart(container) {
    this.$container = $(container);

    if (!this.cookiesEnabled()) {
      this.$container.addClass(config.cartNoCookies);
    }
    this.obj = '#' + this.$container.attr('id');
    theme.cartApp = new CartTemplateApp({
      el: '#' + this.$container.attr('id'),
      data: dataApp
    });
    theme.cartApp.init();
  }

  Cart.prototype = _.assignIn({}, Cart.prototype, {
    onSelect: function() {
      applyTranslateData(this.obj, currentLocale, false);
    },
    cookiesEnabled: function() {
      var cookieEnabled = navigator.cookieEnabled;

      if (!cookieEnabled){
        document.cookie = 'testcookie';
        cookieEnabled = (document.cookie.indexOf('testcookie') !== -1);
      }
      return cookieEnabled;
    }
  });

  return Cart;
})();

/********* --- Search Page --- *********/
theme.searchSection = {};
theme.SearchSection = (function() {
  function SearchSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#searchPage-' + sectionId;
    initVertialMoreViewSlider('#' + $container.attr('id'));
    theme.searchSection[block] = '#' + $container.attr('id');
  }

  return SearchSection;
})();

theme.SearchSection.prototype = _.assignIn({}, theme.SearchSection.prototype, {
  onSelect: function() {
    applyTranslateData(theme.searchSection[this.obj], currentLocale, false);
  },
  onUnload: function() {
    delete theme.searchSection[this.obj];
  }
});

/********* --- Contacts Section --- *********/
var mapApiLoadStatus = null;
var config = {
  zoom: 14
};

theme.Contacts = (function() {
  var config = {
    zoom: 14
  };
  var apiStatus = null;
  var mapsToLoad = [];
  var key = theme.mapKey ? theme.mapKey : '';
  
  function Contacts(container) {
    this.$container = $(container);
    var wrapId = '#' + this.$container.attr('id');
    this.wrapId = wrapId;
    $(window).on('loaded_translate_data', function() {
      applyTranslateData(wrapId, currentLocale, true);
    });
    if($('.cdz-google-map').length > 0) {
      if (apiStatus === 'loaded') {
        this.createMap();
      } else {
        mapsToLoad.push(this);

        if (apiStatus !== 'loading') {
          apiStatus = 'loading';
          if (typeof window.google === 'undefined') {
            $.getScript('https://maps.googleapis.com/maps/api/js?key=' + key)
            .then(function() {
              apiStatus = 'loaded';
              initAllMaps();
            });
          }
        }
      }
    }
  }

  function initAllMaps() {
    // API has loaded, load all Map instances in queue
    $.each(mapsToLoad, function(index, instance) {
      instance.createMap();
    });
  }

  function geolocate($map) {
    var deferred = $.Deferred();
    var geocoder = new google.maps.Geocoder();
    var address = $map.data('address-setting');

    geocoder.geocode({address: address}, function(results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
        deferred.reject(status);
      }

      deferred.resolve(results);
    });

    return deferred;
  }

  Contacts.prototype = _.assignIn({}, Contacts.prototype, {
    createMap: function() {
      var $map = this.$container.find('.cdz-google-map');

      return geolocate($map)
      .then(function(results) {
        var mapOptions = {
          zoom: config.zoom,
          center: results[0].geometry.location,
          disableDefaultUI: true
        };

        var map = this.map = new google.maps.Map($map[0], mapOptions);
        var center = this.center = map.getCenter();
          //eslint-disable-next-line no-unused-vars
          var marker = new google.maps.Marker({
            map: map,
            position: map.getCenter(),
            title: $map.data('address-setting')
          });

          google.maps.event.addDomListener(window, 'resize', $.debounce(250, function() {
            google.maps.event.trigger(map, 'resize');
            map.setCenter(center);
          }));
        }.bind(this))
      .fail(function() {
        var errorMessage;

        switch (status) {
          case 'ZERO_RESULTS':
          errorMessage = theme.strings.addressNoResults;
          break;
          case 'OVER_QUERY_LIMIT':
          errorMessage = theme.strings.addressQueryLimit;
          break;
          default:
          errorMessage = theme.strings.addressError;
          break;
        }

        $map
        .parent()
        .addClass('page-width map-section--load-error')
        .html('<div class="errors text-center">' + errorMessage + '</div>');
      });
    },

    onUnload: function() {
      google.maps.event.clearListeners(this.map, 'resize');
    },

    onSelect: function() {
      applyTranslateData(this.wrapId, currentLocale, false);
    }
  });

  return Contacts;
})();

/********* --- Collection List --- *********/
theme.collectionList = {};
theme.CollectionListSection = (function() {
  function CollectionListSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    this.obj = '#collection_list_' + sectionId;
    
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.collectionList[this.obj] = '#' + $container.attr('id');
  }

  return CollectionListSection;
})();

theme.CollectionListSection.prototype = _.assignIn({}, theme.CollectionListSection.prototype, {
  onSelect: function() {
    applyTranslateData(this.obj, currentLocale, false);
  },
  onUnload: function() {
    delete theme.collectionList[this.obj];
  }
});
function cdzResizeImage(e,t){try{if("original"==t)return e;var n=e.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);return n[1]+"_"+t+"."+n[2]}catch(r){return e}}
function cdzConvertCurrency(c, b, html, d) {
  var e = 0;
  var f = CdzCurrency.moneyFormats[c][d || CdzCurrency.format] || "{{amount}}";
  var g = CdzCurrency.moneyFormats[b][d || CdzCurrency.format] || "{{amount}}";
  if (f.indexOf("amount_no_decimals") !== -1) {
    e = CdzCurrency.convert(parseInt(html.replace(/[^0-9]/g, ""), 10) * 100, c, b)
  } else {
    if (c === "JOD" || c == "KWD" || c == "BHD") {
      e = CdzCurrency.convert(parseInt(html.replace(/[^0-9]/g, ""), 10) / 10, c, b)
    } else {
      e = CdzCurrency.convert(parseInt(html.replace(/[^0-9]/g, ""), 10), c, b)
    }
  }
  var h = CdzCurrency.formatMoney(e, g);
  var span = $(document.createElement("span"));
  span.addClass('cdz-money');
  span.attr('data-currency-' + b, h);
  if(b != shopCurrency) {
    span.attr('data-currency-' + shopCurrency, html);
  }
  span.attr('data-currency', b);
  span.html(h);
  var wrap = $(document.createElement("div"));
  wrap.append(span);
  return wrap.html();
}

function displayMediaImg(imgSrc, isMain) {
  var div = $('<div class="image-item"></div>');
  var a = $('<a class="main-link"></a>');

  if(isMain) {
    div.addClass('js-cover-wrap');
    a.addClass('product-image').addClass('cover-image');
  }

  a.attr('href', imgSrc);

  var img = $('<img class="img-responsive"/>');
  img.attr('src', imgSrc);
  img.attr('data-src', imgSrc);


  a.append(img);
  div.append(a);

  var divMagnify = $('<div class="magnify"></div>');
  divMagnify.attr('style', "background: url('" + imgSrc + "') no-repeat; width:225px; height:225px");
  div.append(divMagnify);


  var wrapDiv = $('<div></div>');
  wrapDiv.append(div);
  return wrapDiv.html();
}

function displayThumbImg(imgObj, isMain, size) {
  var a = $('<a class="thumb-link"></a>');

  if(isMain) {
    a.addClass('select').addClass('js-cover-wrap');
  }

  a.attr('href', imgObj.src);
  a.attr('data-image-id', imgObj.id);

  var img = $('<img class="img-responsive"/>');
  img.attr('src', cdzResizeImage(imgObj.src, size));

  a.append(img);

  var wrapDiv = $('<div></div>');
  wrapDiv.append(a);
  return wrapDiv.html();
}

function cut(n) {
  return function textCutter(i, text) {
    var short = text.substr(0, n);
    if (/^\S/.test(text.substr(n)))
      return short.replace(/\s+\S*$/, "");
    return short;
  };
}

function escapeHtml(text) {
  var regex = /(<([^>]+)>)/ig;
  return result = text.replace(regex, "");
}

Vue.component('money', {
  props: ['price'],
  template: '<span class="price" v-html="price"></span>'
});

var CdzApp = Vue.extend({
  methods: {
    checkProductInWishlist: function(handle) {
      var result = false;
      $.each(this.wishlistItems, function(index, item) {
        if(handle == item.handle) {
          result = true;
          return;
        }
      });
      return result;
    },

    initEvent: function() {
      
    },

    init: function() {
      this.initEvent();
    }
  }
});

var ProcessingApp = CdzApp.extend({
  filters: {
    // Default Translate
    dt: function (arg1, arg2) {
      if (!arg1) {
       return arg2;
     }
     return arg1.toString();
   },
    // Render variable in translate
    rvt: function(text, val) {
      if(text == undefined) {
        return '';
      }
      var tmp1 = val.split(',');
      $.each(tmp1, function(index, value) {
        var tmp2 = value.split('=');
        text = text.replace('[[ ' + tmp2[0] + ' ]]', tmp2[1]).replace(new RegExp('`', 'g'), '').replace(';comma', ',');
      });
      return text;
    },
    concact: function(str1, str2) {
      if(str1 == undefined) {
        return '';
      }
      return str1 + str2;
    },

    displayPrice: function(arg1, arg2){
      var html = '' + Shopify.formatMoney(arg1, CdzCurrency.moneyFormats[shopCurrency].money_format);
      return cdzConvertCurrency(shopCurrency, arg2, html);
    },
    displayMediaMain: function(arg1) {
      if(arg1) {
        return displayMediaImg(arg1.src, true);
      }
      return '';
    },
    displayMediaThumb : function(arg1) {
      if(arg1) {
        return displayMediaImg(arg1, false);
      }
      return '';
    }
  },
  watch: {
    'sidebar.showLeft': function (val) {
      setCookie('sidebar_showLeft', val);
    },
    'sidebar.showRight': function (val) {
      setCookie('sidebar_showRight', val);
    },
    'showFooterCart': function(val) {
      $('.block.block-cart').addClass('active');
      $('.block-cart-overlay').addClass('active');
      // if(val > 0) {
      //   $('.footer-cart .cart-content').slideDown(function() {
      //     $('.footer-cart').addClass('active');
      //   });  
      // } else {
      //   $('.footer-cart .cart-content').slideUp(function() {
      //     $('.footer-cart').removeClass('active');
      //   });
      // }
    }
  },
  methods: {
    defaultTrans: function(arg1, arg2) {
      if(arg1 == '' || arg1 == undefined) {
        return arg2;
      }
      return arg1;
    },
    lowercase: function(str) {
      return str.toLowerCase().trim();
    },
    strContainsStr: function(str1, str2) {
      return str1.indexOf(str2) > 0;
    },
    resizeImage: function(e, t) {
      return cdzResizeImage(e, t);
    },
    displayOverlay: function(){
      $('.wrap-all').addClass('overlay-layer');
    },
    hideOverlay: function(){
      $('.wrap-all').removeClass('overlay-layer');
    },
    displayLoading: function(){
      showAjaxLoading();
    },
    hideLoading: function(){
      hideAjaxLoading();
    },
    callRequest: function(url, type, data, dataType, cb) {
      $.ajax({
        type: type,
        url: url,
        data: data,
        dataType: dataType,
        success: function(response){
          cb(response);
        }
      });
    },

    requestUpdateCart: function(line, qty){
      var me = this;
      this.cartProcessing = 1;
      this.callRequest('/cart/change.js', 'POST', {line: line, quantity: qty}, 'json', function(cart) {
        me.cartProcessing = 0;
        me.cart = cart; 
      });
    },

    requestEmptyCart: function(){
      var me = this;
      this.cartProcessing = 1;
      this.callRequest('/cart/clear.js', 'POST', {}, 'json', function(cart) {
        me.cartProcessing = 0;
        me.cart = cart; 
      });
    },

    updateMessageText: function() {
      this.cartFooterMsg = this.getTextTransByKey('cart.general.items_count_label').replace('[[ count ]]', this.cart.item_count);
    },

    reInitReview: function() {
      return reInitReview();
    },

    getParameterByName: function(name, url) {
      return getParameterByName(name, url);
    },

    findVarianWhenOptionChange: function(variants, optionSelectorClass, wrap) {
      var selector = wrap + ' ' + optionSelectorClass;
      var currentSelect = {};
      var result;
      $(selector).each(function(){
        var index = $(this).attr('data-index');
        var value = $(this).val();
        currentSelect[index] = value;
      });

      $.each(variants, function (index, variant) {
        var valid = true;
        $.each(currentSelect, function (indexOption, value) {
          if(variant[indexOption] != value) {
            valid = false;
          }
        });

        if(valid == true) {
          result = variant;
          return;
        }
      });
      return result;
    },

    getTextTransByKey : function(key) {
     return getTransTextByKey(key);
   }
 }
});

var HeaderApp = ProcessingApp.extend({
  watch: {
    'cart.item_count': function (val) {
      setTimeout(function() {
        applyTranslateData('#headerApp .cart-target', this.currentLocale, false);
      }, 300);
    },
    currentLocale: function(val) {
      this.updateLocalePicker(val);
    }
  },
  methods: {
    // Locale area
    initLocale: function(){
      if(useLocaleImg != undefined) {
        this.useLocaleImg = useLocaleImg;
      }

      var currentLocaleCookie = getCookie('currentLocale');
      if(currentLocaleCookie != null && currentLocaleCookie != '' && currentLocaleCookie != undefined && currentLocaleCookie != 'undefined') {
        this.currentLocale = currentLocaleCookie;
      }
      //updateMenuByLocale(this.currentLocale);

      this.getAllMenuByLocale(this.currentLocale);
      initNormalMenu('#header_header_section');

      // Call ajax to get translate data
      var me = this;
      if($('.form-language ul li a').length > 0) {
        $('.form-language ul li a').each(function(){
          if($(this).attr('data-code') == me.currentLocale) {
            me.currentLocaleImg = $(this).attr('data-img');
            me.currentLocaleText = $(this).attr('data-text');
          }
        });
        this.updateLocalePicker(this.currentLocale);
        $(document).on('click touchend', '.form-language ul li a', function(e) {
          e.preventDefault();
          me.changeLocale($(this).data('code'), $(this).data('text'), $(this).data('img'), e);
        });
      }
    },
    updateLocalePicker: function (localeCode){
      if($('.form-language ul li a').length > 0) {
        $('.form-language ul li').show().removeClass('active');
        var currentA = $('.form-language ul li a[data-code="' + localeCode +'"]');
        currentA.parent('li').hide().addClass('active');
        $('.language-list li').show();
        $('.form-language .cdz-trigger .lang-name').html(currentA.data('text'));
        $('.form-language .cdz-trigger .lang-flag').html('<img src="' + currentA.data('img') + '"/>');
      }
    },
    changeLocale: function(code, text, img, event){
      setCookie('currentLocale', code);
      setCookie('currentLocaleText', text);
      setCookie('currentLocaleImg', img);
      var me = this;
      this.displayLoading();
      getTranslateData(code, function(response) {
        me.currentLocale = code;
        currentLocale = code;
        translate = response;
        me.currentLocaleText = text;
        me.currentLocaleImg = img;
        me.updateMessageText();
        applyTranslateData('body', me.currentLocale, false);
        applyTranslateContent('body', me.currentLocale);
        me.getAllMenuByLocale(me.currentLocale);
        me.hideLoading();
        $(event.target).parents('.cdz-dropdown').find('.cdz-trigger').trigger('click');
        $(window).trigger('change_cdz_locale');
      });
    },
    initChangeCurrencyEvent: function(){
      var me = this;
      if($('.currency-list').length > 0) {
        $('.currency-list li').removeClass('active');
        $('.currency-list li a[data-code="' + this.currentCurrency + '"]').parent('li').addClass('active');
      }
      $(document).on('click', '.store-currency ul li a', function() {
        me.currentCurrency = $(this).attr('data-code');
        if($('.currency-list').length > 0) {
          $('.currency-list li').removeClass('active');
          $('.currency-list li a[data-code="' + me.currentCurrency + '"]').parent('li').addClass('active');
        }
      });
    },

    setMinHeightHeader: function() {
      var winWidth = $(window).width(), height;
      if(winWidth > adapt) {
        height = getHeaderHeight('pc');  
      } else {
        height = getHeaderHeight('mobile'); 
      }
      $('#headerApp').css('min-height', height);
    },

    getMenuByLocale: function(localeCode, handle) {
      var me = this;
      if(theme.useMenuAjax == true) {
        var view = 'menu_' + handle + '_' + localeCode;
        this.callRequest(theme.menuUrl, 'GET', {view: view}, null, function(response) {
          if($(response).hasClass('cdz-menu')) {
            $('.menu-' + handle).html(response);
            initMenu('.menu-' + handle);
          }
        });
      } else {
        initMenu('.menu-' + handle);
      }
      /*this.callRequest(theme.menuUrl, 'GET', {view: view}, null, function(response) {
        if($(response).hasClass('cdz-menu')) {
          $('.menu-' + handle).html(response);
          initMenu('.menu-' + handle);
        }
      });*/
    },

    getAllMenuByLocale: function(localeCode) {
      var me = this;
      var previewHandle, previewLocale;
      var previewParams = this.getParameterByName('preview_menu');
      if(previewParams) {
        var tmp = previewParams.split(',');
        if(tmp.length == 2) {
          previewHandle = tmp[0];
          previewLocale = tmp[1];
        } 
      }
      
      $(Object.keys(theme.menuHandles)).each(function(index, handle) {
        if($('.menu-' + handle).length > 0) {
          if(previewHandle != undefined && previewLocale != undefined && previewHandle == handle) {
            localeCode = previewLocale + '_preview';
          }
          $('.menu-' + handle + ' .cdz-menu').hide();
          if(previewHandle != undefined) {
            var view = 'menu_' + previewHandle + '_' + localeCode;
            me.callRequest(theme.menuUrl, 'GET', {view: view}, null, function(response) {
              if($(response).hasClass('cdz-menu')) {
                if($('.menu-' + previewHandle + ' .menu-' + previewLocale).length > 0) {
                  $('.menu-' + previewHandle + ' .menu-' + previewLocale).remove();
                }
                $('.menu-' + previewHandle).append(response);
                initMenu('.menu-' + previewHandle);
              }
            });
          } else {
            me.getMenuByLocale(localeCode, handle);
          }
        }
      });
    },

    initEvent: function() {
      this.initChangeCurrencyEvent();
      //this.initLocale();
    }
  }
});

var FooterApp = ProcessingApp.extend({
  watch: {
    'cart.item_count': function (val) {
      this.updateMessageText();
      setTimeout(function() {
        applyTranslateData('.footer-cart', this.currentLocale, false);
      }, 300);
    }
  },
  methods: {
    waitGetTransData: function() {
      var me = this;
      $(window).on('loaded_translate_data', function() {
        me.updateMessageText();
      });
    },

    submitCartForm: function(form, btn, cb) {
      var me = this;
      if(form.valid()) {
        var progressWrap = btn.siblings('.progress');
        var progressBar = progressWrap.find('.progress-bar');
        if(progressWrap) {
          progressWrap.removeClass('hide');
        }
        this.cartProcessing = 1;
        form.ajaxSubmit({
          url: '/cart/add.js',
          type: 'post',
          dataType: 'json',
          error: function(xhr, textStatus, errorThrown) {
            if(progressWrap) {
              progressBar.width('0%').text('0%');
              progressWrap.addClass('hide');
            }
          },
          uploadProgress: function(event, position, total, percentComplete) {
            if(progressWrap) {
              progressBar.width(percentComplete + '%').text(percentComplete + '%');  
            }
          },
          success: function(data, textStatus, jqXHR, $form) {
            if(progressWrap) {
              progressBar.width('0%').text('0%');
              progressWrap.addClass('hide');
            }
            cb(data);
          }
        });
      }
    },

    initAddToCartEvent: function(){
      var me = this;
      $(document).on( 'click', '.button.btn-cart, .product-form__cart-submit', function(e) {
        var btn = $(this);
        if(btn.hasClass('select-option')) {
          e.preventDefault();
          me.cartProcessing = 1;
          // Load product option in popup
          var jsonStr = btn.parents('.product-item-info').find('span.product-json.hide').html();
          me.getProductInfo(btn.attr('data-url'), function(product){
            me.selectOption.product = product;
            me.selectOption.currentVariant = product.variants[0];
            me.selectOption.availableVariant = true;
            me.selectOption.qty = 1;
            btn.addClass('current-select-option');
            me.cartProcessing = 0;
            jQuery('#select-product-option').modal('show');
            //btn.removeClass('loading-icon');
          });
        } else {
          // Add product to cart
          var form = $(this).parents('form');
          me.cartProcessing = 1;
          e.preventDefault();
          if(typeof(fqb) != 'undefined') {
            fqb('track', 'AddToCart');
          }
          me.submitCartForm(form, btn, function(response) {
            me.callRequest('/cart.js', 'GET', {}, 'json', function(cart) {
              var itemInCart = me.findVariantIdInCart(response.variant_id);
              if(itemInCart.length > 0) {
                me.cartHolderImg = '';
              } else {
                me.cartHolderImg = response.variant_id;
              }
              me.cart = cart;
              var opts = {
                itemInCart: itemInCart
              };
              var flyBtn = btn;
              if(form.parents('#select-product-option').length > 0) {
                jQuery('#select-product-option').modal('hide');
                flyBtn = $('.current-select-option');
                $('.current-select-option').removeClass('current-select-option');
              }
              else if(btn.hasClass('product-form__cart-submit')) {
                opts.parent = '.product-essential, .cd-quickview-inner';
                opts.img = '.owl-item.active img, .product-option-image img';
              }
              var timeout = 300;
              if(me.showFooterCart < 0) {
                me.showFooterCart = 1;
                timeout = 600;
              }
              setTimeout(function() {
                me.cartProcessing = 0;
                ajaxCartEffect(flyBtn, opts);
              }, timeout);
            });
          });
        }
      });

      // Destroy select option data after hide modal
      $('#select-product-option').on('hidden.bs.modal', function () {
        this.selectOption = {
          product: {
            options: [],
            variants: []
          },
          currentVariant: {},
          availableVariant: true
        };
      });
    },

    initFooterCartTriggerEvent: function() {
      var obj = this;
      $(document).on('click', '.footer-cart .cart-trigger', function(e) {
        e.preventDefault();
        obj.showFooterCart *= -1;
      });
    },

    findVariantIdInCart: function(variantId) {
      return $('.footer-cart [data-variant-id=' + variantId + ']');
    },

    getProductInfo: function(href, cb) {
      this.callRequest(href, 'GET', {}, 'json', function(response) {
        cb(response.product);
      });
    },

    // Change option in select option modal
    changeOptionSelectOption: function(e) {
      var currentVariant = this.findVarianWhenOptionChange(this.selectOption.product.variants, '.single-option-selector', '#select-product-option');
      if(currentVariant == undefined) {
        //this.quickview.product.currentVariant = {};
        this.selectOption.availableVariant = false;
      } else {
        this.selectOption.availableVariant = true;
        this.selectOption.currentVariant = currentVariant;
      }
    },

    displayImageSelectOption: function() {
      var src;
      var me = this;
      if(this.selectOption.currentVariant != undefined && this.selectOption.product.images != undefined) {
        if(this.selectOption.product.images.length > 0) {
          if(this.selectOption.currentVariant.image_id != null) {
            $.each(this.selectOption.product.images, function(index, image) {
              if(me.selectOption.currentVariant.image_id == image.id) {
                src = me.resizeImage(image.src, '495x');
                return;
              }
            }); 
          } else {
            src = this.resizeImage(this.selectOption.product.image.src, '495x');
          }
        }
      }
      return src;
    },

    destroyQuickView: function() {
      this.quickview = {
        product: {
          image: {},
          images: [],
          options: [],
          variants: [],
          qty : 1
        },
        currentVariant: {},
        availableVariant: true,
        cs: {
          found_option: false,
          is_color: false,
          option_index: 0
        }
      };
    },

    initQuickViewBtnEvent: function() {
      var me = this;
      $(document).on('click', '.qs-button', function(e) {
        e.preventDefault();
        $(this).addClass('loading-icon');
        var btn = $(this);
        var image = $(this).parents('.product-item').find('.product-image img');
        me.getProductInfo($(this).attr('href'), function(product){
          me.quickview.hasReview = btn.hasClass('has-review') ? true : false;
          me.quickview.product = product;
          me.quickview.currentVariant = product.variants[0];
          me.quickview.product.qty = 1;
          me.quickview.availableVariant = true;
          image.parent().addClass('empty-box');
          var mediaHtml = '<div class="col-md-10 f-right main-img-wrap"><div class="viewmore-main product-cover init-media">';
          mediaHtml += displayMediaImg(me.quickview.product.image.src, true);
          var thumbsHtml = '<div class="col-md-2 hidden-sm-down thumbs-wrap"><div class="viewmore-thumbs" style="position: absolute; display:none;">';
          var thumbSize = '495x';
          thumbsHtml += displayThumbImg(me.quickview.product.image, true, thumbSize);
          $.each(me.quickview.product.images, function(index, value){
            mediaHtml += displayMediaImg(value.src, false);
            thumbsHtml += displayThumbImg(value, false, thumbSize);
          });
          mediaHtml += '</div><div class="rsUni"><div class="rsFullscreenIcn"></div></div></div>';
          thumbsHtml += '</div></div>';

          mediaHtml += thumbsHtml;

          $('#viewmore-slider-quickview').html(mediaHtml);
          btn.removeClass('loading-icon');
          me.animatePopupQv(image.width(), image.height(), image.offset().top - $(window).scrollTop(), image.offset().left, 420, 1000, 'open', function(){
            coverImage('.cd-quick-view', 'vertical');
            if(btn.hasClass('has-review')) {
              me.reInitReview();  
            }
          });

        });
      });

      //close the quick view panel
      $(document).on('click', '.overlay-layer, .cd-close', function(event){
        if( $(event.target).parents('.cd-close').length > 0 || $(event.target).is('body.overlay-layer')) {
          me.closeQuickView();
        }
      });

      $(document).keyup(function(event){
        //check if user has pressed 'Esc'
        if(event.which=='27'){
          me.closeQuickView();
        }
      });

      $(window).on('resize', function(){
        if($('.cd-quick-view').hasClass('is-visible')){
          window.requestAnimationFrame(me.resizeQuickView);
        }
      });
    },

    displayShortDesc: function(text) {
      if(text != undefined && text != '') {
        var div = $('<div></div>');
        text = $($.parseHTML(text)).text();
        div.text(text);
        div.text(cut(400));
        result = div.html() + '...';
        return result.replace(/&amp;/g, '&');
      }
      return '';
    },

    animatePopupQv: function(firstWidth, firstHeight, firstTop, firstLeft, finalWidth, maxQuickWidth, animationType, cb) {
      //store some image data (width, top position, ...)
      //store window data to calculate quick view panel position
      var me = this;
      var windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      finalLeft = (windowWidth - finalWidth)/2,
      finalHeight = 620,
      finalTop = (windowHeight - finalHeight)/2,
      popupWidth = ( windowWidth * .8 < maxQuickWidth ) ? windowWidth * .8 : maxQuickWidth ,
      popupViewLeft = (windowWidth - popupWidth)/2;
      if( animationType == 'open') {
        $('body').addClass('overlay-layer');
        //hide the image in the gallery
        //parentListItem.addClass('empty-box');
        //place the quick view over the image gallery and give it the dimension of the gallery image
        $('.cd-quick-view').velocity({
          "top": firstTop,
          "left": firstLeft,
          "width": firstWidth,
          "padding": 20
        }, 300, 'ease', function() {
          $('.cd-quick-view').velocity({
            //animate the quick view: animate its width and center it in the viewport
            //during this animation, only the slider image is visible
            'top': finalTop+ 'px',
            'left': finalLeft+'px',
            'width': finalWidth+'px',
            'height': finalHeight + 'px'
          }, 1000, [ 400, 20 ], function(){
            //animate the quick view: animate its width to the final value
            $('.cd-quick-view').addClass('animate-width');
            $('.cd-quick-view').velocity({
              'left': popupViewLeft+'px',
              'width': popupWidth+'px',
            }, 300, 'ease' ,function(){
              //show quick view content
              $('.cd-quick-view').addClass('add-content');
              cb();
            });
          });
          $('.cd-quick-view').addClass('is-visible');
        });
      } else {

        //close the quick view reverting the animation
        $('.cd-quick-view').removeClass('add-content');
        $('.cd-quick-view .product-view-media').css('width', '100%');
        $('.cd-quick-view').velocity({
          'top': finalTop+ 'px',
          'left': finalLeft+'px',
          'width': finalWidth+'px',
          'padding': 0
        }, 300, 'ease', function(){
          /*$('#viewmore-slider-quickview').velocity({
            'padding': 0
          }, 300, 'ease', function(){*/
            var imageWidth = $('#viewmore-slider-quickview .main-img-wrap').width();
            var imageHeight = $('#viewmore-slider-quickview .main-img-wrap').height();
            //$('#viewmore-slider-quickview').append('<img style="top:0; right:0; position: absolute;" id="close_qv_img" src="' + cdzResizeImage(me.quickview.product.featured_image, imageWidth + 'x' + imageHeight) + '"/>');
            $('#viewmore-slider-quickview').append('<img style="top:0; right:0; position: absolute; width: 100%;" id="close_qv_img" src="' + $('#viewmore-slider-quickview .cover-image img').attr('src') + '"/>');
            $('body').removeClass('overlay-layer');
            $('.cd-quick-view').removeClass('animate-width');
            var thumbWidth = $('.cd-quick-view .thumbs-wrap').width();
            $('.cd-quick-view .thumbs-wrap').velocity({'opacity': 0, 'left' : thumbWidth + 'px'}, 500, 'ease', function(){
              $('#viewmore-slider-quickview').removeData('moreview');
              $('#viewmore-slider-quickview .main-img-wrap').remove();
              $('.cd-quick-view .thumbs-wrap').remove();
              $('.cd-quick-view').velocity({
                "top": firstTop + 'px',
                "left": firstLeft + 'px',
                "width": firstWidth + 'px',
                "height": firstHeight + 'px'
              }, 500, 'ease', function(){
                $('.cd-quick-view').removeClass('is-visible');
                $('.empty-box').removeClass('empty-box');
                $('.cd-quick-view .product-view-media').removeAttr('style');
                cb();
              });
            });
          //});
        });
      }
    },

    changeOptionQv: function(e) {
      var currentVariant = this.findVarianWhenOptionChange(this.quickview.product.variants, '.single-option-selector', '.cd-quick-view');
      if(currentVariant == undefined) {
        this.quickview.availableVariant = false;
      } else {
        this.quickview.availableVariant = true;
        this.quickview.currentVariant = currentVariant;

        // Change current image
        if(this.quickview.currentVariant.image_id != null) {
          $('#viewmore-slider-quickview .viewmore-thumbs .thumb-link[data-image-id=' + this.quickview.currentVariant.image_id + ']').trigger('click');  
        }
      }
    },

    resizeQuickView: function() {
      var quickViewLeft = ($(window).width() - $('.cd-quick-view').width())/2,
      quickViewTop = ($(window).height() - $('.cd-quick-view').height())/2;
      $('.cd-quick-view').css({
        "top": quickViewTop,
        "left": quickViewLeft,
      });
    },

    closeQuickView: function() {
      var image = $('.empty-box img');
      if(image.length > 0) {
        this.animatePopupQv(image.width(), image.height(), image.offset().top - $(window).scrollTop(), image.offset().left, 420, 1000, 'close', function(){
          $('#viewmore-slider-quickview').html('');
          $('#viewmore-slider-quickview').removeAttr('style');
        });
      }
      this.destroyQuickView();
    },

    showCompareBox: function() {
      $(this.compareBoxId).modal('show');
    },

    removeItemCompare: function(index, isAddCart){
      var item = this.compareItems[index];
      if(isAddCart) {
        this.compareMsg = this.getTextTransByKey('products.product.compare_cart_msg').replace('[[ product_title ]]', item.title);
      } else {
        this.compareMsg = this.getTextTransByKey('products.product.compare_remove_msg').replace('[[ product_title ]]', item.title);  
      }

      this.compareMsgType = 'success';
      this.compareItems.splice(index, 1);
      var cookieData = $.parseJSON(getCookie(this.compareCookie));
      cookieData.splice(index, 1);
      setCookie(this.compareCookie, JSON.stringify(cookieData));
    },
    
    addProductHrefToCompareCookie: function(href) {
      var json = getCookie(this.compareCookie), data = [];
      if(json != undefined) {
        data = $.parseJSON(json);
      }
      data.push(href);
      setCookie(this.compareCookie, JSON.stringify(data));
    },
    
    prepareCompareItem: function(href, silent){
      var me = this;
      if(silent == false) {
        this.displayLoading();
      }
      $.ajax({
        type: 'GET',
        url: href,
        dataType: 'json',
        success: function(response){
          var product = response.product;
          var item = {
            availableVariant : true,
            title: product.title,
            featured_image: product.image.src,
            options: product.options,
            variants: product.variants,
            images: product.images,
            currentVariant: product.variants[0],
            vendor: product.vendor,
            href: href,
            qtyInPut: 1
          };
          me.compareItems.push(item);

          if(silent == false) {
            me.addProductHrefToCompareCookie(href.replace('/products/', ''));
            me.compareMsg = me.getTextTransByKey('products.product.compare_success_msg').replace('[[ product_title ]]', product.title);
            me.compareMsgType = 'success';
            me.hideLoading();
            me.showCompareBox();  
          }
        },
      });
    },
    
    changeOptionCompare: function(e) {
      var index = $(e.target).attr('data-item-index');
      var product = this.compareItems[index];
      var currentVariant = this.findVarianWhenOptionChange(product.variants, '.single-option-selector', '.compare-option-item-' + $(e.target).attr('data-item-index'));
      if(currentVariant == undefined) {
        product.availableVariant = false;
      } else {
        product.availableVariant = true;
        product.currentVariant = currentVariant;

        // Change current image
        $.each(product.images, function(indexImage, imgObj){
          if(imgObj.id == currentVariant.image_id) {
            product.featured_image = imgObj.src;
            return;
          }
        });
      }
      this.compareItems[index] = product;
    },

    checkItemExistInCompare: function(href) {
      var result = false;
      $.each(this.compareItems, function(index, value) {
        if(href == value.href) {
          result = true;
          return;
        }
      });
      return result;
    },
    addCartInCompare: function(formId, index) {
      this.cartProcessing = 1;
      var me = this;
      this.callRequest('/cart/add.js', 'POST', $(formId).serialize(), 'json', function(response) {
        me.callRequest('/cart.js', 'GET', {}, 'json', function(cart) {
          var itemInCart = me.findVariantIdInCart(response.variant_id);
          if(itemInCart.length > 0) {
            me.cartHolderImg = '';
          } else {
            me.cartHolderImg = response.variant_id;
          }
          me.cart = cart;
          var opts = {
            itemInCart: itemInCart
          };
          opts.parent = '#compareBox';
          opts.img = '.compare-item-' + index + ' img';
          me.showFooterCart = 1;
          setTimeout(function() {
            me.cartProcessing = 0;
            ajaxCartEffect($(formId).find('.button.btn-cart'), opts);
            me.removeItemCompare(index, true);
          }, 300);

        });
      });
    },
    
    changeOptionWishlist: function(e) {
      var index = $(e.target).attr('data-item-index');
      var product = this.wishlistItems[index];
      var currentVariant = this.findVarianWhenOptionChange(product.variants, '.single-option-selector', '.wishlist-option-item-' + $(e.target).attr('data-item-index'));
      if(currentVariant == undefined) {
        product.availableVariant = false;
      } else {
        product.availableVariant = true;
        product.currentVariant = currentVariant;

        // Change current image
        $.each(product.images, function(indexImage, imgObj){
          if(imgObj.id == currentVariant.image_id) {
            product.featured_image = imgObj.src;
            return;
          }
        });
      }
      this.wishlistItems[index] = product;
    },

    initCompareEvent: function() {
      var me = this;
      $(document).on('click', '.cdz-compare-trigger', function(e){
        e.preventDefault();
        $('#compareBox').modal('show');
      });

      $(document).on('click', '.action.link-compare', function(e) {
        e.preventDefault();
        if(me.checkItemExistInCompare($(this).attr('href'))) {
          me.compareMsg = me.getTextTransByKey('products.product.compare_exist_msg').replace('[[ product_title ]]', $(this).attr('data-product-title'));
          me.compareMsgType = 'error';
          me.showCompareBox();
        } else {
          me.prepareCompareItem($(this).attr('href'), false);  
        }
      });

      // Init compare data
      if(getCookie(this.compareCookie) != undefined) {
        var dataHrefs = $.parseJSON(getCookie(this.compareCookie));
        $.each(dataHrefs, function(index, value) {
          me.prepareCompareItem('/products/' + value, true);
        });
      }

      // Clear message after close modal
      $(this.compareBoxId).on('hidden.bs.modal', function (e) {
        me.compareMsg = '';
      });

      // Show compare modal event
      $(document).on('click', '.comparing-box-btn', function() {
        $('#compareBox').modal('show');
      });
    },

    addCartInWishlist: function(formId, index) {
      this.cartProcessing = 1;
      var me = this;
      this.callRequest('/cart/add.js', 'POST', $(formId).serialize(), 'json', function(response) {
        me.callRequest('/cart.js', 'GET', {}, 'json', function(cart) {
          var itemInCart = me.findVariantIdInCart(response.variant_id);
          if(itemInCart.length > 0) {
            me.cartHolderImg = '';
          } else {
            me.cartHolderImg = response.variant_id;
          }
          me.cart = cart;
          var opts = {
            itemInCart: itemInCart
          };
          opts.parent = '.wishlist-option-item-' + index;
          opts.img = '.product-image img';
          me.showFooterCart = 1;
          setTimeout(function() {
            me.cartProcessing = 0;
            ajaxCartEffect($(formId).find('.button.btn-cart'), opts);
            me.removeItemWishlist(index, true);
          }, 300);

        });
      });
    },

    showWishlistModal: function() {
      $(this.wishlistModalId).modal('show');
    },

    removeItemWishlist: function(index, isAddCart){
      var item = this.wishlistItems[index];
      if(isAddCart) {
        this.wishlistMsg = this.getTextTransByKey('products.product.wishlist_cart_msg').replace('[[ product_title ]]', item.title);
      } else {
        this.wishlistMsg = this.getTextTransByKey('products.product.wishlist_remove_msg').replace('[[ product_title ]]', item.title);
      }

      this.wishlistMsgType = 'success';
      this.wishlistItems.splice(index, 1);
      var cookieData = $.parseJSON(getCookie(this.wishlistCookie));
      cookieData.splice(index, 1);
      setCookie(this.wishlistCookie, JSON.stringify(cookieData));
      $('.link-wishlist[data-product-handle="' + item.handle + '"]').removeClass('wl-added');
    },

    addProductHandleToWishlistCookie: function(handle) {
      var json = getCookie(this.wishlistCookie), data = [];
      if(json != undefined) {
        data = $.parseJSON(json);
      }
      data.push(handle);
      setCookie(this.wishlistCookie, JSON.stringify(data));
    },

    prepareWishlistItem: function(handle, silent){
      var me = this;
      if(silent == false) {
        this.displayLoading();
      }
      $.ajax({
        type: 'GET',
        url: '/products/' + handle,
        dataType: 'json',
        success: function(response){
          var product = response.product;
          var item = {
            availableVariant : true,
            title: product.title,
            featured_image: product.image.src,
            options: product.options,
            variants: product.variants,
            images: product.images,
            currentVariant: product.variants[0],
            vendor: product.vendor,
            href: '/products/' + handle,
            handle: handle,
            qtyInPut: 1
          };
          me.wishlistItems.push(item);
          $('.link-wishlist[data-product-handle="' + handle + '"]').addClass('wl-added');

          if(silent == false) {
            me.addProductHandleToWishlistCookie(handle);
            me.hideLoading();
            me.wishlistMsgType = 'success';
            me.wishlistMsg = me.getTextTransByKey('products.product.wishlist_success_msg').replace('[[ product_title ]]', product.title);
            me.showWishlistModal();
          }
        },
      });
    },

    initWishlistEvent: function() {
      var me = this;

      $(document).on('click', '.link-wishlist', function(e) {
        e.preventDefault();
        if($(this).hasClass('wl-added')) {
          me.wishlistMsgType = 'warning';
          me.wishlistMsg = me.getTextTransByKey('products.product.wishlist_exist_msg').replace('[[ product_title ]]', $(this).attr('data-product-title'));
          me.showWishlistModal();
        } else {
          me.prepareWishlistItem($(this).attr('data-product-handle'), false);  
        }
      });

      // Init compare data
      if(getCookie(this.wishlistCookie) != undefined) {
        var dataHrefs = $.parseJSON(getCookie(this.wishlistCookie));
        $.each(dataHrefs, function(index, value) {
          me.prepareWishlistItem(value, true);
        });
      }

      $(document).on('click', '.toolbar-customer.my-wishlist, .wish-list-trigger', function(e) {
        e.preventDefault();
        me.showWishlistModal();
      });
      // Clear message after close modal
      $(this.wishlistModalId).on('hidden.bs.modal', function (e) {
        me.wishlistMsg = '';
      });
    },

    initEvent: function() {
      this.initFooterCartTriggerEvent();
      this.initAddToCartEvent();
      this.initQuickViewBtnEvent();
      this.initCompareEvent();
      this.initWishlistEvent();
      this.waitGetTransData();
    }
  }
});

// For product detail page
var ProductTemplateApp = ProcessingApp.extend({
  methods: {
    initColorSwatchDetailEvent: function() {
      if($('#ProductJson-product-template').length > 0) {
        var url = $('#product-detail-url').attr('data-url');
        var me = this;

        var product = JSON.parse($('#ProductJson-product-template').html());
        var me = this;
        var wrap = '#shopify-section-product-template ';
        $(wrap + ".swatch-element").click(function () {
          if(!$(this).hasClass('active'))
          {
            var temp = $(this).parent();
            temp.children('.swatch-element').each(function() {
              $(this).removeClass("active");
            });            
            $(this).addClass("active");

            // Trigger to change image and price
            var selectId = '#SingleOptionSelector-' + $(this).parent().attr('data-option-index');
            $(selectId).val($(this).attr('data-value'));
            $(selectId).trigger('change');
            
          }
        });

        $(document).on('change', wrap + '.single-option-selector-product-template', function() {
          CdzCurrency.convertAll(shopCurrency, CdzCurrency.cookie.read(), wrap + '.product-shop-stock-price span.money', CdzCurrency.format);
          var variant = me.findVarianWhenOptionChange(product.variants, '.single-option-selector', '#product-options-wrapper');
          if(variant != undefined) {
            me._updatePrice(variant);
            me._updateHistoryState(variant);
            $('#ProductSelect-product-template').val(variant.id);
            if(variant.featured_image != null) {
              $('#moreview-slider .viewmore-thumbs .thumb-link[data-image-id=' + variant.featured_image.id + ']').trigger('click');
            }
          }

          if(variant == undefined || variant.available == false) {
            $(wrap + '.product-shop-sku').hide();
            $(wrap + '.out-stock-text').show();
            $(wrap + '.in-stock-text').hide();
            $(wrap + '.product-form__cart-submit').attr('disabled', 'disabled');
            var useSkuClass = $(wrap + '.sku-rating').data('sku-class');  
            var noSkuClass = $(wrap + '.sku-rating').data('no-sku-class');
            $(wrap + '.sku-rating').removeClass(useSkuClass).removeClass(noSkuClass).addClass(noSkuClass);
            $(wrap + '.sku-wrap').hide();
            $(wrap + '.add-to-links').hide();
          } else {
            if(variant.sku != '') {
              $(wrap + '.product-shop-sku strong').html(variant.sku);
              if($(wrap + '.sku-rating').length > 0) {
                var useSkuClass = $(wrap + '.sku-rating').data('sku-class');  
                var noSkuClass = $(wrap + '.sku-rating').data('no-sku-class');
                $(wrap + '.sku-rating').removeClass(useSkuClass).removeClass(noSkuClass).addClass(useSkuClass);
              }
              $(wrap + '.product-shop-sku').show();
              $(wrap + '.sku-wrap').show();
            } else {
              $(wrap + '.sku-wrap').hide();
              $(wrap + '.product-shop-sku').hide();
              if($(wrap + '.sku-rating').length > 0) {
                var useSkuClass = $(wrap + '.sku-rating').data('sku-class');  
                var noSkuClass = $(wrap + '.sku-rating').data('no-sku-class');
                $(wrap + '.sku-rating').removeClass(useSkuClass).removeClass(noSkuClass).addClass(noSkuClass);
              }
            }
            $(wrap + '.add-to-links').show();
            $(wrap + '.out-stock-text').hide();
            $(wrap + '.in-stock-text').show();
            $(wrap + '.product-form__cart-submit').removeAttr('disabled');
          }
        });
      }
    },

    _updateFormatPrice: function(selector, currency, price) {
      $(selector).attr('data-currency', shopCurrency);
      $(selector).removeAttr('data-currency-' + currency);
      CdzCurrency.convertAll(shopCurrency, currency, selector);
    },

    _updatePrice: function(variant) {
      this.selectors = {
        comparePrice: '#ComparePrice-product-template',
        originalPrice: '#ProductPrice-product-template',
        originalPriceWrapper: '.product-price__price-product-template',
        productPrices: '.product-single__price-product-template'
      }
      // Update the product price
      $(this.selectors.originalPrice).html(theme.Currency.formatMoney(variant.price, theme.moneyFormat));
      this._updateFormatPrice(this.selectors.originalPrice, this.currentCurrency, variant.price);
      
      // Update and show the product's compare price if necessary
      if (variant.compare_at_price > variant.price) {
        $(this.selectors.comparePrice)
        .html(theme.Currency.formatMoney(variant.compare_at_price, theme.moneyFormat))
        .removeClass('hide');
        this._updateFormatPrice(this.selectors.comparePrice, this.currentCurrency, variant.compare_at_price);

        $(this.selectors.originalPriceWrapper).addClass(this.selectors.saleClasses);
      } else {
        $(this.selectors.comparePrice).addClass('hide');
        $(this.selectors.originalPriceWrapper).removeClass(this.selectors.saleClasses);
      }
    },

    /**
     * Update history state for product deeplinking
     *
     * @param  {variant} variant - Currently selected variant
     * @return {k}         [description]
     */
     _updateHistoryState: function(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
      window.history.replaceState({path: newurl}, '', newurl);
    },

    initEvent: function() {
     this.initColorSwatchDetailEvent();
   }
 }
});

var CartTemplateApp = ProcessingApp.extend({
  watch: {
    'cart.item_count': function (val) {
      if(val == 0) {
        setTimeout(function() {
          applyTranslateData('#cart-template_section', this.currentLocale, false);
        }, 300);
      }
    }
  },
  methods: {
    initUpdateQtyCartPageEvent: function() {
      if($('#shopify-section-cart-template').length > 0) {
        var me = this;
        $(document).on('click', '#shopify-section-cart-template .change-qty', function(e) {
          e.preventDefault();
          if(me.cartProcessing != 1) {
            var input = $($(this).attr('data-input'));
            var changed = changeQty(input, $(this).hasClass('increase'));
            if(changed == true) {
              me.requestUpdateCart(input.attr('data-item-id'), input.val());
            }
          }
        });
      }
    },

    initEvent: function() {
      applyTranslateData('#cart-template_section', this.currentLocale, false);
      this.initUpdateQtyCartPageEvent();
    }
  }
});

// For login and forgot password page
var loginPageApp = CdzApp.extend({
  methods: {
    detectLoginReset: function() {
      if (window.location.hash == '#recover' && window.self === window.top) { 
        this.isLoginReset = 'reset'; 
      }
    },
    initEvent: function() {
      this.detectLoginReset();
    }
  }
});

var dataApp = {
  // Translate
  translate: {},
  translateData: {},
  currentLocale: currentLocale,
  useLocaleImg: false,
  currentLocaleImg: '',
  currentLocaleText: '',

  isLoginReset: "login", // only used at login page

  showLoading: -1,

  sidebar: {
    showLeft: 1,
    showRight: 1
  },

  cart: cdzCart,
  cartProcessing: 0,
  showFooterCart: -1,
  cartFooterMsg: '',
  cartHolderImg : '',
  currentCurrency:  CdzCurrency.currentCurrency,
  
  // Quickshop
  quickview: {
    product: {
      image: {},
      images: [],
      options: [],
      variants: [],
      qty : 1
    },
    currentVariant: {},
    availableVariant: true,
    cs: {
      found_option: false,
      is_color: false,
      option_index: 0
    }
  },
  selectOption: {
    product: {
      options: [],
      variants: []
    },
    currentVariant: {},
    availableVariant: true,
    qty: 1
  },
  compareItems: [],
  compareMsg: '',
  compareMsgType: 'success',
  compareCookie: 'compareItems',
  compareBoxId : '#compareBox',
  wishlistItems: [],
  wishlistMsg: '',
  wishlistMsgType: 'success',
  wishlistCookie: 'wishlistItems',
  wishlistModalId : '#wishlistModal',
  menuUpdate : {},
  collectionToolbarSort: '',
  productTemplate: {
    currentVariant: {}
  }
};
/********* --- Product Block Style 11 --- *********/
theme.productBlock11 = {};
theme.ProductBlock11Section = (function() {
  function ProductBlock11Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    initSlider('#' + $container.attr('id'));
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock11[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock11Section;
})();

theme.ProductBlock11Section.prototype = _.assignIn({}, theme.ProductBlock11Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock1[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock11[this.productBlock];
  }
});
window.theme = window.theme || {};

/* ================ SLATE ================ */
window.theme = window.theme || {};

theme.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];
  $(document)
  .on('shopify:section:load', this._onSectionLoad.bind(this))
  .on('shopify:section:unload', this._onSectionUnload.bind(this))
  .on('shopify:section:select', this._onSelect.bind(this))
  .on('shopify:section:deselect', this._onDeselect.bind(this))
  .on('shopify:block:select', this._onBlockSelect.bind(this))
  .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (_.isUndefined(constructor)) {
      return;
    }

    var instance = _.assignIn(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = _.filter(this.instances, function(instance) {
      var isEventInstance = (instance.id === evt.detail.sectionId);

      if (isEventInstance) {
        if (_.isFunction(instance.onUnload)) {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(function(index, container) {
      this._createInstance(container, constructor);
    }.bind(this));
  }
});

/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 * Alternatives
 * - Accounting.js - http://openexchangerates.github.io/accounting.js/
 *
 */

 theme.Currency = (function() {
  var moneyFormat = '${{amount}}'; // eslint-disable-line camelcase

  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || moneyFormat);

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = precision || 2;
      thousands = thousands || ',';
      decimal = decimal || '.';

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      var centsAmount = parts[1] ? (decimal + parts[1]) : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
      case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
      case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
      case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
      case 'amount_no_decimals_with_space_separator':
      value = formatWithDelimiters(cents, 0, ' ');
      break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  }
})();

/*================ SECTIONS ================*/
window.theme = window.theme || {};

theme.Maps = (function() {
  var config = {
    zoom: 14
  };
  var apiStatus = null;
  var mapsToLoad = [];
  var key = theme.mapKey ? theme.mapKey : '';

  function Map(container) {
    this.$container = $(container);

    if (apiStatus === 'loaded') {
      this.createMap();
    } else {
      mapsToLoad.push(this);

      if (apiStatus !== 'loading') {
        apiStatus = 'loading';
        if (typeof window.google === 'undefined') {
          $.getScript('https://maps.googleapis.com/maps/api/js?key=' + key)
          .then(function() {
            apiStatus = 'loaded';
            initAllMaps();
          });
        }
      }
    }
  }

  function initAllMaps() {
    // API has loaded, load all Map instances in queue
    $.each(mapsToLoad, function(index, instance) {
      instance.createMap();
    });
  }

  function geolocate($map) {
    var deferred = $.Deferred();
    var geocoder = new google.maps.Geocoder();
    var address = $map.data('address-setting');

    geocoder.geocode({address: address}, function(results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
        deferred.reject(status);
      }

      deferred.resolve(results);
    });

    return deferred;
  }

  Map.prototype = _.assignIn({}, Map.prototype, {
    createMap: function() {
      var $map = this.$container.find('.map-section__container');

      return geolocate($map)
      .then(function(results) {
        var mapOptions = {
          zoom: config.zoom,
          center: results[0].geometry.location,
          disableDefaultUI: true
        };

        var map = this.map = new google.maps.Map($map[0], mapOptions);
        var center = this.center = map.getCenter();

          //eslint-disable-next-line no-unused-vars
          var marker = new google.maps.Marker({
            map: map,
            position: map.getCenter()
          });

          google.maps.event.addDomListener(window, 'resize', $.debounce(250, function() {
            google.maps.event.trigger(map, 'resize');
            map.setCenter(center);
          }));
        }.bind(this))
      .fail(function() {
        var errorMessage;

        switch (status) {
          case 'ZERO_RESULTS':
          errorMessage = theme.strings.addressNoResults;
          break;
          case 'OVER_QUERY_LIMIT':
          errorMessage = theme.strings.addressQueryLimit;
          break;
          default:
          errorMessage = theme.strings.addressError;
          break;
        }

        $map
        .parent()
        .addClass('page-width map-section--load-error')
        .html('<div class="errors text-center">' + errorMessage + '</div>');
      });
    },

    onUnload: function() {
      google.maps.event.clearListeners(this.map, 'resize');
    }
  });

  return Map;
})();

// Global function called by Google on auth errors.
// Show an auto error message on all map instances.
// eslint-disable-next-line camelcase, no-unused-vars
function gm_authFailure() {
  $('.map-section').addClass('map-section--load-error');
  $('.map-section__container').remove();
  $('.map-section__link').remove();
  $('.map-section__overlay').after('<div class="errors text-center">' + theme.strings.authError + '</div>');
}

/* eslint-disable no-new */
theme.Quotes = (function() {
  var config = {
    mediaQuerySmall: 'screen and (max-width: 749px)',
    mediaQueryMediumUp: 'screen and (min-width: 750px)',
    slideCount: 0
  };
  var defaults = {
    accessibility: true,
    arrows: false,
    dots: true,
    autoplay: false,
    touchThreshold: 20,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  function Quotes(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var wrapper = this.wrapper = '.quotes-wrapper';
    var slider = this.slider = '#Quotes-' + sectionId;
    var $slider = $(slider, wrapper);

    var sliderActive = false;
    var mobileOptions = $.extend({}, defaults, {
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    });

    config.slideCount = $slider.data('count');

    // Override slidesToShow/Scroll if there are not enough blocks
    if (config.slideCount < defaults.slidesToShow) {
      defaults.slidesToShow = config.slideCount;
      defaults.slidesToScroll = config.slideCount;
    }

    $slider.on('init', this.a11y.bind(this));

    enquire.register(config.mediaQuerySmall, {
      match: function() {
        initSlider($slider, mobileOptions);
      }
    });

    enquire.register(config.mediaQueryMediumUp, {
      match: function() {
        initSlider($slider, defaults);
      }
    });

    function initSlider(sliderObj, args) {
      if (sliderActive) {
        sliderObj.slick('unslick');
        sliderActive = false;
      }

      sliderObj.slick(args);
      sliderActive = true;
    }
  }

  Quotes.prototype = _.assignIn({}, Quotes.prototype, {
    onUnload: function() {
      enquire.unregister(config.mediaQuerySmall);
      enquire.unregister(config.mediaQueryMediumUp);

      $(this.slider, this.wrapper).slick('unslick');
    },

    onBlockSelect: function(evt) {
      // Ignore the cloned version
      var $slide = $('.quotes-slide--' + evt.detail.blockId + ':not(.slick-cloned)');
      var slideIndex = $slide.data('slick-index');

      // Go to selected slide, pause autoplay
      $(this.slider, this.wrapper).slick('slickGoTo', slideIndex);
    },

    a11y: function(event, obj) {
      var $list = obj.$list;
      var $wrapper = $(this.wrapper, this.$container);

      // Remove default Slick aria-live attr until slider is focused
      $list.removeAttr('aria-live');

      // When an element in the slider is focused set aria-live
      $wrapper.on('focusin', function(evt) {
        if ($wrapper.has(evt.target).length) {
          $list.attr('aria-live', 'polite');
        }
      });

      // Remove aria-live
      $wrapper.on('focusout', function(evt) {
        if ($wrapper.has(evt.target).length) {
          $list.removeAttr('aria-live');
        }
      });
    }
  });

  return Quotes;
})();

$(document).ready(function() {
  var sections = new theme.Sections();
  initTranslate(function() {
    
  });
  initGlobalAction();
  sections.register('header', theme.HeaderSection);
  sections.register('slideshow', theme.SlideshowSection);
  sections.register('collection-style1', theme.ProductBlock1Section);
  sections.register('collection-style2', theme.ProductBlock2Section);
  sections.register('collection-style3', theme.ProductBlock3Section);
  sections.register('collection-style4', theme.ProductBlock4Section);
  sections.register('collection-style5', theme.ProductBlock5Section);
  sections.register('collection-style6', theme.ProductBlock6Section);
  sections.register('collection-style7', theme.ProductBlock7Section);
  sections.register('collection-style8', theme.ProductBlock8Section);
  sections.register('collection-style9', theme.ProductBlock9Section);
  sections.register('collection-style10', theme.ProductBlock10Section);
  sections.register('collection-style11', theme.ProductBlock11Section);
  sections.register('instagram-slider', theme.InstagramSliderSection);
  sections.register('brands-slider', theme.BrandsSliderSection);
  sections.register('featured-blog', theme.FeaturedBlogSection);
  sections.register('cart-template', theme.Cart);
  sections.register('collection-template', theme.CollectionTemplateSection);
  sections.register('product', theme.Product);
  sections.register('login-page', theme.LoginPageSection);
  sections.register('search-template', theme.SearchSection);
  sections.register('map', theme.Maps);
  sections.register('quotes', theme.Quotes);
  sections.register('footer', theme.FooterSection);
  sections.register('contacts', theme.Contacts);
  sections.register('collection-list', theme.CollectionListSection);
});
