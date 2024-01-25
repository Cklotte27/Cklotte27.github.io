(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yc(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const pt={},or=[],de=()=>{},wg=()=>!1,Hi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ec=e=>e.startsWith("onUpdate:"),Ft=Object.assign,vc=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Tg=Object.prototype.hasOwnProperty,nt=(e,t)=>Tg.call(e,t),H=Array.isArray,ar=e=>Gi(e)==="[object Map]",cf=e=>Gi(e)==="[object Set]",Q=e=>typeof e=="function",bt=e=>typeof e=="string",Sr=e=>typeof e=="symbol",Et=e=>e!==null&&typeof e=="object",lf=e=>(Et(e)||Q(e))&&Q(e.then)&&Q(e.catch),uf=Object.prototype.toString,Gi=e=>uf.call(e),Ig=e=>Gi(e).slice(8,-1),hf=e=>Gi(e)==="[object Object]",wc=e=>bt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ai=yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ag=/-(\w)/g,ke=Wi(e=>e.replace(Ag,(t,n)=>n?n.toUpperCase():"")),Rg=/\B([A-Z])/g,br=Wi(e=>e.replace(Rg,"-$1").toLowerCase()),Qi=Wi(e=>e.charAt(0).toUpperCase()+e.slice(1)),jo=Wi(e=>e?`on${Qi(e)}`:""),dn=(e,t)=>!Object.is(e,t),ci=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},yi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Aa=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Wl;const ff=()=>Wl||(Wl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tc(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=bt(r)?Cg(r):Tc(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(bt(e)||Et(e))return e}const Sg=/;(?![^(]*\))/g,bg=/:([^]+)/,Pg=/\/\*[^]*?\*\//g;function Cg(e){const t={};return e.replace(Pg,"").split(Sg).forEach(n=>{if(n){const r=n.split(bg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ic(e){let t="";if(bt(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=Ic(e[n]);r&&(t+=r+" ")}else if(Et(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Vg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dg=yc(Vg);function df(e){return!!e||e===""}const Wr=e=>bt(e)?e:e==null?"":H(e)||Et(e)&&(e.toString===uf||!Q(e.toString))?JSON.stringify(e,pf,2):String(e),pf=(e,t)=>t&&t.__v_isRef?pf(e,t.value):ar(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[qo(r,i)+" =>"]=s,n),{})}:cf(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>qo(n))}:Sr(t)?qo(t):Et(t)&&!H(t)&&!hf(t)?String(t):t,qo=(e,t="")=>{var n;return Sr(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ge;class xg{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ge,!t&&ge&&(this.index=(ge.scopes||(ge.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ge;try{return ge=this,t()}finally{ge=n}}}on(){ge=this}off(){ge=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ng(e,t=ge){t&&t.active&&t.effects.push(e)}function Og(){return ge}let Nn;class Ac{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ng(this,s)}get dirty(){if(this._dirtyLevel===1){zn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Mg(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Kn()}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=an,n=Nn;try{return an=!0,Nn=this,this._runnings++,Ql(this),this.fn()}finally{Yl(this),this._runnings--,Nn=n,an=t}}stop(){var t;this.active&&(Ql(this),Yl(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function Mg(e){return e.value}function Ql(e){e._trackId++,e._depsLength=0}function Yl(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)mf(e.deps[t],e);e.deps.length=e._depsLength}}function mf(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let an=!0,Ra=0;const gf=[];function zn(){gf.push(an),an=!1}function Kn(){const e=gf.pop();an=e===void 0?!0:e}function Rc(){Ra++}function Sc(){for(Ra--;!Ra&&Sa.length;)Sa.shift()()}function _f(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&mf(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Sa=[];function yf(e,t,n){Rc();for(const r of e.keys())if(r._dirtyLevel<t&&e.get(r)===r._trackId){const s=r._dirtyLevel;r._dirtyLevel=t,s===0&&(r._shouldSchedule=!0,r.trigger())}Ef(e),Sc()}function Ef(e){for(const t of e.keys())t.scheduler&&t._shouldSchedule&&(!t._runnings||t.allowRecurse)&&e.get(t)===t._trackId&&(t._shouldSchedule=!1,Sa.push(t.scheduler))}const vf=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},ba=new WeakMap,On=Symbol(""),Pa=Symbol("");function ne(e,t,n){if(an&&Nn){let r=ba.get(e);r||ba.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=vf(()=>r.delete(n))),_f(Nn,s)}}function qe(e,t,n,r,s,i){const o=ba.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&H(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Sr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":H(e)?wc(n)&&a.push(o.get("length")):(a.push(o.get(On)),ar(e)&&a.push(o.get(Pa)));break;case"delete":H(e)||(a.push(o.get(On)),ar(e)&&a.push(o.get(Pa)));break;case"set":ar(e)&&a.push(o.get(On));break}Rc();for(const c of a)c&&yf(c,2);Sc()}const kg=yc("__proto__,__v_isRef,__isVue"),wf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Sr)),Xl=Lg();function Lg(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=it(this);for(let i=0,o=this.length;i<o;i++)ne(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(it)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){zn(),Rc();const r=it(this)[t].apply(this,n);return Sc(),Kn(),r}}),e}function Fg(e){const t=it(this);return ne(t,"has",e),t.hasOwnProperty(e)}class Tf{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Xg:Sf:i?Rf:Af).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=H(t);if(!s){if(o&&nt(Xl,n))return Reflect.get(Xl,n,r);if(n==="hasOwnProperty")return Fg}const a=Reflect.get(t,n,r);return(Sr(n)?wf.has(n):kg(n))||(s||ne(t,"get",n),i)?a:re(a)?o&&wc(n)?a:a.value:Et(a)?s?Pf(a):Ps(a):a}}class If extends Tf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._shallow){const c=dr(i);if(!Ei(r)&&!dr(r)&&(i=it(i),r=it(r)),!H(t)&&re(i)&&!re(r))return c?!1:(i.value=r,!0)}const o=H(t)&&wc(n)?Number(n)<t.length:nt(t,n),a=Reflect.set(t,n,r,s);return t===it(s)&&(o?dn(r,i)&&qe(t,"set",n,r):qe(t,"add",n,r)),a}deleteProperty(t,n){const r=nt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&qe(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Sr(n)||!wf.has(n))&&ne(t,"has",n),r}ownKeys(t){return ne(t,"iterate",H(t)?"length":On),Reflect.ownKeys(t)}}class Bg extends Tf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ug=new If,$g=new Bg,jg=new If(!0),bc=e=>e,Yi=e=>Reflect.getPrototypeOf(e);function Hs(e,t,n=!1,r=!1){e=e.__v_raw;const s=it(e),i=it(t);n||(dn(t,i)&&ne(s,"get",t),ne(s,"get",i));const{has:o}=Yi(s),a=r?bc:n?Vc:as;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function Gs(e,t=!1){const n=this.__v_raw,r=it(n),s=it(e);return t||(dn(e,s)&&ne(r,"has",e),ne(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Ws(e,t=!1){return e=e.__v_raw,!t&&ne(it(e),"iterate",On),Reflect.get(e,"size",e)}function Jl(e){e=it(e);const t=it(this);return Yi(t).has.call(t,e)||(t.add(e),qe(t,"add",e,e)),this}function Zl(e,t){t=it(t);const n=it(this),{has:r,get:s}=Yi(n);let i=r.call(n,e);i||(e=it(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?dn(t,o)&&qe(n,"set",e,t):qe(n,"add",e,t),this}function tu(e){const t=it(this),{has:n,get:r}=Yi(t);let s=n.call(t,e);s||(e=it(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&qe(t,"delete",e,void 0),i}function eu(){const e=it(this),t=e.size!==0,n=e.clear();return t&&qe(e,"clear",void 0,void 0),n}function Qs(e,t){return function(r,s){const i=this,o=i.__v_raw,a=it(o),c=t?bc:e?Vc:as;return!e&&ne(a,"iterate",On),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ys(e,t,n){return function(...r){const s=this.__v_raw,i=it(s),o=ar(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?bc:t?Vc:as;return!t&&ne(i,"iterate",c?Pa:On),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function qg(){const e={get(i){return Hs(this,i)},get size(){return Ws(this)},has:Gs,add:Jl,set:Zl,delete:tu,clear:eu,forEach:Qs(!1,!1)},t={get(i){return Hs(this,i,!1,!0)},get size(){return Ws(this)},has:Gs,add:Jl,set:Zl,delete:tu,clear:eu,forEach:Qs(!1,!0)},n={get(i){return Hs(this,i,!0)},get size(){return Ws(this,!0)},has(i){return Gs.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Qs(!0,!1)},r={get(i){return Hs(this,i,!0,!0)},get size(){return Ws(this,!0)},has(i){return Gs.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Qs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ys(i,!1,!1),n[i]=Ys(i,!0,!1),t[i]=Ys(i,!1,!0),r[i]=Ys(i,!0,!0)}),[e,n,t,r]}const[zg,Kg,Hg,Gg]=qg();function Pc(e,t){const n=t?e?Gg:Hg:e?Kg:zg;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(nt(n,s)&&s in r?n:r,s,i)}const Wg={get:Pc(!1,!1)},Qg={get:Pc(!1,!0)},Yg={get:Pc(!0,!1)},Af=new WeakMap,Rf=new WeakMap,Sf=new WeakMap,Xg=new WeakMap;function Jg(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zg(e){return e.__v_skip||!Object.isExtensible(e)?0:Jg(Ig(e))}function Ps(e){return dr(e)?e:Cc(e,!1,Ug,Wg,Af)}function bf(e){return Cc(e,!1,jg,Qg,Rf)}function Pf(e){return Cc(e,!0,$g,Yg,Sf)}function Cc(e,t,n,r,s){if(!Et(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Zg(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function cr(e){return dr(e)?cr(e.__v_raw):!!(e&&e.__v_isReactive)}function dr(e){return!!(e&&e.__v_isReadonly)}function Ei(e){return!!(e&&e.__v_isShallow)}function Cf(e){return cr(e)||dr(e)}function it(e){const t=e&&e.__v_raw;return t?it(t):e}function Vf(e){return yi(e,"__v_skip",!0),e}const as=e=>Et(e)?Ps(e):e,Vc=e=>Et(e)?Pf(e):e;class Df{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ac(()=>t(this._value),()=>li(this,1),()=>this.dep&&Ef(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=it(this);return(!t._cacheable||t.effect.dirty)&&dn(t._value,t._value=t.effect.run())&&li(t,2),xf(t),t.effect._dirtyLevel>=1&&li(t,1),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function t_(e,t,n=!1){let r,s;const i=Q(e);return i?(r=e,s=de):(r=e.get,s=e.set),new Df(r,s,i||!s,n)}function xf(e){an&&Nn&&(e=it(e),_f(Nn,e.dep||(e.dep=vf(()=>e.dep=void 0,e instanceof Df?e:void 0))))}function li(e,t=2,n){e=it(e);const r=e.dep;r&&yf(r,t)}function re(e){return!!(e&&e.__v_isRef===!0)}function e_(e){return Nf(e,!1)}function n_(e){return Nf(e,!0)}function Nf(e,t){return re(e)?e:new r_(e,t)}class r_{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:it(t),this._value=n?t:as(t)}get value(){return xf(this),this._value}set value(t){const n=this.__v_isShallow||Ei(t)||dr(t);t=n?t:it(t),dn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:as(t),li(this,2))}}function Mn(e){return re(e)?e.value:e}const s_={get:(e,t,n)=>Mn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return re(s)&&!re(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Of(e){return cr(e)?e:new Proxy(e,s_)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cn(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){Xi(i,t,n)}return s}function ve(e,t,n,r){if(Q(e)){const i=cn(e,t,n,r);return i&&lf(i)&&i.catch(o=>{Xi(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(ve(e[i],t,n,r));return s}function Xi(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){cn(c,null,10,[e,o,a]);return}}i_(e,n,s,r)}function i_(e,t,n,r=!0){console.error(e)}let cs=!1,Ca=!1;const qt=[];let Pe=0;const lr=[];let en=null,Rn=0;const Mf=Promise.resolve();let Dc=null;function kf(e){const t=Dc||Mf;return e?t.then(this?e.bind(this):e):t}function o_(e){let t=Pe+1,n=qt.length;for(;t<n;){const r=t+n>>>1,s=qt[r],i=ls(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function xc(e){(!qt.length||!qt.includes(e,cs&&e.allowRecurse?Pe+1:Pe))&&(e.id==null?qt.push(e):qt.splice(o_(e.id),0,e),Lf())}function Lf(){!cs&&!Ca&&(Ca=!0,Dc=Mf.then(Bf))}function a_(e){const t=qt.indexOf(e);t>Pe&&qt.splice(t,1)}function c_(e){H(e)?lr.push(...e):(!en||!en.includes(e,e.allowRecurse?Rn+1:Rn))&&lr.push(e),Lf()}function nu(e,t,n=cs?Pe+1:0){for(;n<qt.length;n++){const r=qt[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;qt.splice(n,1),n--,r()}}}function Ff(e){if(lr.length){const t=[...new Set(lr)].sort((n,r)=>ls(n)-ls(r));if(lr.length=0,en){en.push(...t);return}for(en=t,Rn=0;Rn<en.length;Rn++)en[Rn]();en=null,Rn=0}}const ls=e=>e.id==null?1/0:e.id,l_=(e,t)=>{const n=ls(e)-ls(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Bf(e){Ca=!1,cs=!0,qt.sort(l_);try{for(Pe=0;Pe<qt.length;Pe++){const t=qt[Pe];t&&t.active!==!1&&cn(t,null,14)}}finally{Pe=0,qt.length=0,Ff(),cs=!1,Dc=null,(qt.length||lr.length)&&Bf()}}function u_(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||pt;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||pt;d&&(s=n.map(m=>bt(m)?m.trim():m)),h&&(s=n.map(Aa))}let a,c=r[a=jo(t)]||r[a=jo(ke(t))];!c&&i&&(c=r[a=jo(br(t))]),c&&ve(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ve(l,e,6,s)}}function Uf(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!Q(e)){const c=l=>{const u=Uf(l,t,!0);u&&(a=!0,Ft(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(Et(e)&&r.set(e,null),null):(H(i)?i.forEach(c=>o[c]=null):Ft(o,i),Et(e)&&r.set(e,o),o)}function Ji(e,t){return!e||!Hi(t)?!1:(t=t.slice(2).replace(/Once$/,""),nt(e,t[0].toLowerCase()+t.slice(1))||nt(e,br(t))||nt(e,t))}let te=null,Zi=null;function vi(e){const t=te;return te=e,Zi=e&&e.type.__scopeId||null,t}function to(e){Zi=e}function eo(){Zi=null}function Nc(e,t=te,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&du(-1);const i=vi(t);let o;try{o=e(...s)}finally{vi(i),r._d&&du(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function zo(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:A,inheritAttrs:R}=e;let T,C;const k=vi(e);try{if(n.shapeFlag&4){const J=s||r,dt=J;T=be(u.call(dt,J,h,i,m,d,A)),C=c}else{const J=t;T=be(J.length>1?J(i,{attrs:c,slots:a,emit:l}):J(i,null)),C=t.props?c:h_(c)}}catch(J){Yr.length=0,Xi(J,e,1),T=Qt(us)}let B=T;if(C&&R!==!1){const J=Object.keys(C),{shapeFlag:dt}=B;J.length&&dt&7&&(o&&J.some(Ec)&&(C=f_(C,o)),B=pr(B,C))}return n.dirs&&(B=pr(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),T=B,vi(k),T}const h_=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hi(n))&&((t||(t={}))[n]=e[n]);return t},f_=(e,t)=>{const n={};for(const r in e)(!Ec(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function d_(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ru(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Ji(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ru(r,o,l):!0:!!o;return!1}function ru(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Ji(n,i))return!0}return!1}function p_({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const $f="components";function jf(e,t){return g_($f,e,!0,t)||e}const m_=Symbol.for("v-ndc");function g_(e,t,n=!0,r=!1){const s=te||zt;if(s){const i=s.type;if(e===$f){const a=uy(i,!1);if(a&&(a===t||a===ke(t)||a===Qi(ke(t))))return i}const o=su(s[e]||i[e],t)||su(s.appContext[e],t);return!o&&r?i:o}}function su(e,t){return e&&(e[t]||e[ke(t)]||e[Qi(ke(t))])}const __=e=>e.__isSuspense;function y_(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):c_(e)}const E_=Symbol.for("v-scx"),v_=()=>ze(E_),Xs={};function ui(e,t,n){return qf(e,t,n)}function qf(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=pt){if(t&&i){const q=t;t=(...Tt)=>{q(...Tt),dt()}}const c=zt,l=q=>r===!0?q:bn(q,r===!1?1:void 0);let u,h=!1,d=!1;if(re(e)?(u=()=>e.value,h=Ei(e)):cr(e)?(u=()=>l(e),h=!0):H(e)?(d=!0,h=e.some(q=>cr(q)||Ei(q)),u=()=>e.map(q=>{if(re(q))return q.value;if(cr(q))return l(q);if(Q(q))return cn(q,c,2)})):Q(e)?t?u=()=>cn(e,c,2):u=()=>(m&&m(),ve(e,c,3,[A])):u=de,t&&r){const q=u;u=()=>bn(q())}let m,A=q=>{m=B.onStop=()=>{cn(q,c,4),m=B.onStop=void 0}},R;if(io)if(A=de,t?n&&ve(t,c,3,[u(),d?[]:void 0,A]):u(),s==="sync"){const q=v_();R=q.__watcherHandles||(q.__watcherHandles=[])}else return de;let T=d?new Array(e.length).fill(Xs):Xs;const C=()=>{if(!(!B.active||!B.dirty))if(t){const q=B.run();(r||h||(d?q.some((Tt,se)=>dn(Tt,T[se])):dn(q,T)))&&(m&&m(),ve(t,c,3,[q,T===Xs?void 0:d&&T[0]===Xs?[]:T,A]),T=q)}else B.run()};C.allowRecurse=!!t;let k;s==="sync"?k=C:s==="post"?k=()=>Jt(C,c&&c.suspense):(C.pre=!0,c&&(C.id=c.uid),k=()=>xc(C));const B=new Ac(u,de,k),J=Og(),dt=()=>{B.stop(),J&&vc(J.effects,B)};return t?n?C():T=B.run():s==="post"?Jt(B.run.bind(B),c&&c.suspense):B.run(),R&&R.push(dt),dt}function w_(e,t,n){const r=this.proxy,s=bt(e)?e.includes(".")?zf(r,e):()=>r[e]:e.bind(r,r);let i;Q(t)?i=t:(i=t.handler,n=t);const o=Cs(this),a=qf(s,i.bind(r),n);return o(),a}function zf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function bn(e,t,n=0,r){if(!Et(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),re(e))bn(e.value,t,n,r);else if(H(e))for(let s=0;s<e.length;s++)bn(e[s],t,n,r);else if(cf(e)||ar(e))e.forEach(s=>{bn(s,t,n,r)});else if(hf(e))for(const s in e)bn(e[s],t,n,r);return e}function Ko(e,t){if(te===null)return e;const n=oo(te)||te.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=pt]=t[s];i&&(Q(i)&&(i={mounted:i,updated:i}),i.deep&&bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Tn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(zn(),ve(c,n,8,[e.el,a,e,t]),Kn())}}/*! #__NO_SIDE_EFFECTS__ */function Kf(e,t){return Q(e)?Ft({name:e.name},t,{setup:e}):e}const hi=e=>!!e.type.__asyncLoader,Hf=e=>e.type.__isKeepAlive;function T_(e,t){Gf(e,"a",t)}function I_(e,t){Gf(e,"da",t)}function Gf(e,t,n=zt){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(no(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Hf(s.parent.vnode)&&A_(r,t,n,s),s=s.parent}}function A_(e,t,n,r){const s=no(t,e,r,!0);Wf(()=>{vc(r[t],s)},n)}function no(e,t,n=zt,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;zn();const a=Cs(n),c=ve(t,n,e,o);return a(),Kn(),c});return r?s.unshift(i):s.push(i),i}}const Qe=e=>(t,n=zt)=>(!io||e==="sp")&&no(e,(...r)=>t(...r),n),R_=Qe("bm"),S_=Qe("m"),b_=Qe("bu"),P_=Qe("u"),C_=Qe("bum"),Wf=Qe("um"),V_=Qe("sp"),D_=Qe("rtg"),x_=Qe("rtc");function N_(e,t=zt){no("ec",e,t)}function wi(e,t,n,r){let s;const i=n&&n[r];if(H(e)||bt(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(Et(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Va=e=>e?id(e)?oo(e)||e.proxy:Va(e.parent):null,Qr=Ft(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Va(e.parent),$root:e=>Va(e.root),$emit:e=>e.emit,$options:e=>Oc(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,xc(e.update)}),$nextTick:e=>e.n||(e.n=kf.bind(e.proxy)),$watch:e=>w_.bind(e)}),Ho=(e,t)=>e!==pt&&!e.__isScriptSetup&&nt(e,t),O_={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ho(r,t))return o[t]=1,r[t];if(s!==pt&&nt(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&nt(l,t))return o[t]=3,i[t];if(n!==pt&&nt(n,t))return o[t]=4,n[t];Da&&(o[t]=0)}}const u=Qr[t];let h,d;if(u)return t==="$attrs"&&ne(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==pt&&nt(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,nt(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ho(s,t)?(s[t]=n,!0):r!==pt&&nt(r,t)?(r[t]=n,!0):nt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==pt&&nt(e,o)||Ho(t,o)||(a=i[0])&&nt(a,o)||nt(r,o)||nt(Qr,o)||nt(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:nt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function iu(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Da=!0;function M_(e){const t=Oc(e),n=e.proxy,r=e.ctx;Da=!1,t.beforeCreate&&ou(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:A,activated:R,deactivated:T,beforeDestroy:C,beforeUnmount:k,destroyed:B,unmounted:J,render:dt,renderTracked:q,renderTriggered:Tt,errorCaptured:se,serverPrefetch:Ye,expose:ie,inheritAttrs:Xe,components:wn,directives:Ie,filters:Or}=t;if(l&&k_(l,r,null),o)for(const ut in o){const ot=o[ut];Q(ot)&&(r[ut]=ot.bind(n))}if(s){const ut=s.call(n,n);Et(ut)&&(e.data=Ps(ut))}if(Da=!0,i)for(const ut in i){const ot=i[ut],Ue=Q(ot)?ot.bind(n,n):Q(ot.get)?ot.get.bind(n,n):de,Je=!Q(ot)&&Q(ot.set)?ot.set.bind(n):de,Ae=_e({get:Ue,set:Je});Object.defineProperty(r,ut,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Xt=>Ae.value=Xt})}if(a)for(const ut in a)Qf(a[ut],r,n,ut);if(c){const ut=Q(c)?c.call(n):c;Reflect.ownKeys(ut).forEach(ot=>{fi(ot,ut[ot])})}u&&ou(u,e,"c");function Pt(ut,ot){H(ot)?ot.forEach(Ue=>ut(Ue.bind(n))):ot&&ut(ot.bind(n))}if(Pt(R_,h),Pt(S_,d),Pt(b_,m),Pt(P_,A),Pt(T_,R),Pt(I_,T),Pt(N_,se),Pt(x_,q),Pt(D_,Tt),Pt(C_,k),Pt(Wf,J),Pt(V_,Ye),H(ie))if(ie.length){const ut=e.exposed||(e.exposed={});ie.forEach(ot=>{Object.defineProperty(ut,ot,{get:()=>n[ot],set:Ue=>n[ot]=Ue})})}else e.exposed||(e.exposed={});dt&&e.render===de&&(e.render=dt),Xe!=null&&(e.inheritAttrs=Xe),wn&&(e.components=wn),Ie&&(e.directives=Ie)}function k_(e,t,n=de){H(e)&&(e=xa(e));for(const r in e){const s=e[r];let i;Et(s)?"default"in s?i=ze(s.from||r,s.default,!0):i=ze(s.from||r):i=ze(s),re(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ou(e,t,n){ve(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Qf(e,t,n,r){const s=r.includes(".")?zf(n,r):()=>n[r];if(bt(e)){const i=t[e];Q(i)&&ui(s,i)}else if(Q(e))ui(s,e.bind(n));else if(Et(e))if(H(e))e.forEach(i=>Qf(i,t,n,r));else{const i=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(i)&&ui(s,i,e)}}function Oc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Ti(c,l,o,!0)),Ti(c,t,o)),Et(t)&&i.set(t,c),c}function Ti(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Ti(e,i,n,!0),s&&s.forEach(o=>Ti(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=L_[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const L_={data:au,props:cu,emits:cu,methods:jr,computed:jr,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:jr,directives:jr,watch:B_,provide:au,inject:F_};function au(e,t){return t?e?function(){return Ft(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function F_(e,t){return jr(xa(e),xa(t))}function xa(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Wt(e,t){return e?[...new Set([].concat(e,t))]:t}function jr(e,t){return e?Ft(Object.create(null),e,t):t}function cu(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:Ft(Object.create(null),iu(e),iu(t??{})):t}function B_(e,t){if(!e)return t;if(!t)return e;const n=Ft(Object.create(null),e);for(const r in t)n[r]=Wt(e[r],t[r]);return n}function Yf(){return{app:null,config:{isNativeTag:wg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let U_=0;function $_(e,t){return function(r,s=null){Q(r)||(r=Ft({},r)),s!=null&&!Et(s)&&(s=null);const i=Yf(),o=new WeakSet;let a=!1;const c=i.app={_uid:U_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:fy,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Qt(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&t?t(d,l):e(d,l,h),a=!0,c._container=l,l.__vue_app__=c,oo(d.component)||d.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Ii=c;try{return l()}finally{Ii=null}}};return c}}let Ii=null;function fi(e,t){if(zt){let n=zt.provides;const r=zt.parent&&zt.parent.provides;r===n&&(n=zt.provides=Object.create(r)),n[e]=t}}function ze(e,t,n=!1){const r=zt||te;if(r||Ii){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ii._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Q(t)?t.call(r&&r.proxy):t}}function j_(e,t,n,r=!1){const s={},i={};yi(i,so,1),e.propsDefaults=Object.create(null),Xf(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:bf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function q_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=it(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ji(e.emitsOptions,d))continue;const m=t[d];if(c)if(nt(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const A=ke(d);s[A]=Na(c,a,A,m,e,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{Xf(e,t,s,i)&&(l=!0);let u;for(const h in a)(!t||!nt(t,h)&&((u=br(h))===h||!nt(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Na(c,a,h,void 0,e,!0)):delete s[h]);if(i!==a)for(const h in i)(!t||!nt(t,h))&&(delete i[h],l=!0)}l&&qe(e,"set","$attrs")}function Xf(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(ai(c))continue;const l=t[c];let u;s&&nt(s,u=ke(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ji(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=it(n),l=a||pt;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Na(s,c,h,l[h],e,!nt(l,h))}}return o}function Na(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=nt(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Q(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Cs(s);r=l[n]=c.call(null,t),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===br(n))&&(r=!0))}return r}function Jf(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!Q(e)){const u=h=>{c=!0;const[d,m]=Jf(h,t,!0);Ft(o,d),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return Et(e)&&r.set(e,or),or;if(H(i))for(let u=0;u<i.length;u++){const h=ke(i[u]);lu(h)&&(o[h]=pt)}else if(i)for(const u in i){const h=ke(u);if(lu(h)){const d=i[u],m=o[h]=H(d)||Q(d)?{type:d}:Ft({},d);if(m){const A=fu(Boolean,m.type),R=fu(String,m.type);m[0]=A>-1,m[1]=R<0||A<R,(A>-1||nt(m,"default"))&&a.push(h)}}}const l=[o,a];return Et(e)&&r.set(e,l),l}function lu(e){return e[0]!=="$"}function uu(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function hu(e,t){return uu(e)===uu(t)}function fu(e,t){return H(t)?t.findIndex(n=>hu(n,e)):Q(t)&&hu(t,e)?0:-1}const Zf=e=>e[0]==="_"||e==="$stable",Mc=e=>H(e)?e.map(be):[be(e)],z_=(e,t,n)=>{if(t._n)return t;const r=Nc((...s)=>Mc(t(...s)),n);return r._c=!1,r},td=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Zf(s))continue;const i=e[s];if(Q(i))t[s]=z_(s,i,r);else if(i!=null){const o=Mc(i);t[s]=()=>o}}},ed=(e,t)=>{const n=Mc(t);e.slots.default=()=>n},K_=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=it(t),yi(t,"_",n)):td(t,e.slots={})}else e.slots={},t&&ed(e,t);yi(e.slots,so,1)},H_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=pt;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(Ft(s,t),!n&&a===1&&delete s._):(i=!t.$stable,td(t,s)),o=t}else t&&(ed(e,t),o={default:1});if(i)for(const a in s)!Zf(a)&&o[a]==null&&delete s[a]};function Oa(e,t,n,r,s=!1){if(H(e)){e.forEach((d,m)=>Oa(d,t&&(H(t)?t[m]:t),n,r,s));return}if(hi(r)&&!s)return;const i=r.shapeFlag&4?oo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===pt?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(bt(l)?(u[l]=null,nt(h,l)&&(h[l]=null)):re(l)&&(l.value=null)),Q(c))cn(c,a,12,[o,u]);else{const d=bt(c),m=re(c),A=e.f;if(d||m){const R=()=>{if(A){const T=d?nt(h,c)?h[c]:u[c]:c.value;s?H(T)&&vc(T,i):H(T)?T.includes(i)||T.push(i):d?(u[c]=[i],nt(h,c)&&(h[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else d?(u[c]=o,nt(h,c)&&(h[c]=o)):m&&(c.value=o,e.k&&(u[e.k]=o))};s||A?R():(R.id=-1,Jt(R,n))}}}const Jt=y_;function G_(e){return W_(e)}function W_(e,t){const n=ff();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=de,insertStaticContent:A}=e,R=(f,p,g,E=null,_=null,b=null,N=void 0,S=null,P=!!p.dynamicChildren)=>{if(f===p)return;f&&!kr(f,p)&&(E=y(f),Xt(f,_,b,!0),f=null),p.patchFlag===-2&&(P=!1,p.dynamicChildren=null);const{type:I,ref:M,shapeFlag:j}=p;switch(I){case ro:T(f,p,g,E);break;case us:C(f,p,g,E);break;case Wo:f==null&&k(p,g,E,N);break;case Zt:wn(f,p,g,E,_,b,N,S,P);break;default:j&1?dt(f,p,g,E,_,b,N,S,P):j&6?Ie(f,p,g,E,_,b,N,S,P):(j&64||j&128)&&I.process(f,p,g,E,_,b,N,S,P,L)}M!=null&&_&&Oa(M,f&&f.ref,b,p||f,!p)},T=(f,p,g,E)=>{if(f==null)r(p.el=a(p.children),g,E);else{const _=p.el=f.el;p.children!==f.children&&l(_,p.children)}},C=(f,p,g,E)=>{f==null?r(p.el=c(p.children||""),g,E):p.el=f.el},k=(f,p,g,E)=>{[f.el,f.anchor]=A(f.children,p,g,E,f.el,f.anchor)},B=({el:f,anchor:p},g,E)=>{let _;for(;f&&f!==p;)_=d(f),r(f,g,E),f=_;r(p,g,E)},J=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),s(f),f=g;s(p)},dt=(f,p,g,E,_,b,N,S,P)=>{p.type==="svg"?N="svg":p.type==="math"&&(N="mathml"),f==null?q(p,g,E,_,b,N,S,P):Ye(f,p,_,b,N,S,P)},q=(f,p,g,E,_,b,N,S)=>{let P,I;const{props:M,shapeFlag:j,transition:U,dirs:G}=f;if(P=f.el=o(f.type,b,M&&M.is,M),j&8?u(P,f.children):j&16&&se(f.children,P,null,E,_,Go(f,b),N,S),G&&Tn(f,null,E,"created"),Tt(P,f,f.scopeId,N,E),M){for(const ht in M)ht!=="value"&&!ai(ht)&&i(P,ht,null,M[ht],b,f.children,E,_,Bt);"value"in M&&i(P,"value",null,M.value,b),(I=M.onVnodeBeforeMount)&&Se(I,E,f)}G&&Tn(f,null,E,"beforeMount");const Z=Q_(_,U);Z&&U.beforeEnter(P),r(P,p,g),((I=M&&M.onVnodeMounted)||Z||G)&&Jt(()=>{I&&Se(I,E,f),Z&&U.enter(P),G&&Tn(f,null,E,"mounted")},_)},Tt=(f,p,g,E,_)=>{if(g&&m(f,g),E)for(let b=0;b<E.length;b++)m(f,E[b]);if(_){let b=_.subTree;if(p===b){const N=_.vnode;Tt(f,N,N.scopeId,N.slotScopeIds,_.parent)}}},se=(f,p,g,E,_,b,N,S,P=0)=>{for(let I=P;I<f.length;I++){const M=f[I]=S?nn(f[I]):be(f[I]);R(null,M,p,g,E,_,b,N,S)}},Ye=(f,p,g,E,_,b,N)=>{const S=p.el=f.el;let{patchFlag:P,dynamicChildren:I,dirs:M}=p;P|=f.patchFlag&16;const j=f.props||pt,U=p.props||pt;let G;if(g&&In(g,!1),(G=U.onVnodeBeforeUpdate)&&Se(G,g,p,f),M&&Tn(p,f,g,"beforeUpdate"),g&&In(g,!0),I?ie(f.dynamicChildren,I,S,g,E,Go(p,_),b):N||ot(f,p,S,null,g,E,Go(p,_),b,!1),P>0){if(P&16)Xe(S,p,j,U,g,E,_);else if(P&2&&j.class!==U.class&&i(S,"class",null,U.class,_),P&4&&i(S,"style",j.style,U.style,_),P&8){const Z=p.dynamicProps;for(let ht=0;ht<Z.length;ht++){const _t=Z[ht],Ct=j[_t],me=U[_t];(me!==Ct||_t==="value")&&i(S,_t,Ct,me,_,f.children,g,E,Bt)}}P&1&&f.children!==p.children&&u(S,p.children)}else!N&&I==null&&Xe(S,p,j,U,g,E,_);((G=U.onVnodeUpdated)||M)&&Jt(()=>{G&&Se(G,g,p,f),M&&Tn(p,f,g,"updated")},E)},ie=(f,p,g,E,_,b,N)=>{for(let S=0;S<p.length;S++){const P=f[S],I=p[S],M=P.el&&(P.type===Zt||!kr(P,I)||P.shapeFlag&70)?h(P.el):g;R(P,I,M,null,E,_,b,N,!0)}},Xe=(f,p,g,E,_,b,N)=>{if(g!==E){if(g!==pt)for(const S in g)!ai(S)&&!(S in E)&&i(f,S,g[S],null,N,p.children,_,b,Bt);for(const S in E){if(ai(S))continue;const P=E[S],I=g[S];P!==I&&S!=="value"&&i(f,S,I,P,N,p.children,_,b,Bt)}"value"in E&&i(f,"value",g.value,E.value,N)}},wn=(f,p,g,E,_,b,N,S,P)=>{const I=p.el=f?f.el:a(""),M=p.anchor=f?f.anchor:a("");let{patchFlag:j,dynamicChildren:U,slotScopeIds:G}=p;G&&(S=S?S.concat(G):G),f==null?(r(I,g,E),r(M,g,E),se(p.children||[],g,M,_,b,N,S,P)):j>0&&j&64&&U&&f.dynamicChildren?(ie(f.dynamicChildren,U,g,_,b,N,S),(p.key!=null||_&&p===_.subTree)&&nd(f,p,!0)):ot(f,p,g,M,_,b,N,S,P)},Ie=(f,p,g,E,_,b,N,S,P)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?_.ctx.activate(p,g,E,N,P):Or(p,g,E,_,b,N,P):Qn(f,p,P)},Or=(f,p,g,E,_,b,N)=>{const S=f.component=iy(f,E,_);if(Hf(f)&&(S.ctx.renderer=L),oy(S),S.asyncDep){if(_&&_.registerDep(S,Pt),!f.el){const P=S.subTree=Qt(us);C(null,P,p,g)}}else Pt(S,f,p,g,_,b,N)},Qn=(f,p,g)=>{const E=p.component=f.component;if(d_(f,p,g))if(E.asyncDep&&!E.asyncResolved){ut(E,p,g);return}else E.next=p,a_(E.update),E.effect.dirty=!0,E.update();else p.el=f.el,E.vnode=p},Pt=(f,p,g,E,_,b,N)=>{const S=()=>{if(f.isMounted){let{next:M,bu:j,u:U,parent:G,vnode:Z}=f;{const Jn=rd(f);if(Jn){M&&(M.el=Z.el,ut(f,M,N)),Jn.asyncDep.then(()=>{f.isUnmounted||S()});return}}let ht=M,_t;In(f,!1),M?(M.el=Z.el,ut(f,M,N)):M=Z,j&&ci(j),(_t=M.props&&M.props.onVnodeBeforeUpdate)&&Se(_t,G,M,Z),In(f,!0);const Ct=zo(f),me=f.subTree;f.subTree=Ct,R(me,Ct,h(me.el),y(me),f,_,b),M.el=Ct.el,ht===null&&p_(f,Ct.el),U&&Jt(U,_),(_t=M.props&&M.props.onVnodeUpdated)&&Jt(()=>Se(_t,G,M,Z),_)}else{let M;const{el:j,props:U}=p,{bm:G,m:Z,parent:ht}=f,_t=hi(p);if(In(f,!1),G&&ci(G),!_t&&(M=U&&U.onVnodeBeforeMount)&&Se(M,ht,p),In(f,!0),j&&gt){const Ct=()=>{f.subTree=zo(f),gt(j,f.subTree,f,_,null)};_t?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ct()):Ct()}else{const Ct=f.subTree=zo(f);R(null,Ct,g,E,f,_,b),p.el=Ct.el}if(Z&&Jt(Z,_),!_t&&(M=U&&U.onVnodeMounted)){const Ct=p;Jt(()=>Se(M,ht,Ct),_)}(p.shapeFlag&256||ht&&hi(ht.vnode)&&ht.vnode.shapeFlag&256)&&f.a&&Jt(f.a,_),f.isMounted=!0,p=g=E=null}},P=f.effect=new Ac(S,de,()=>xc(I),f.scope),I=f.update=()=>{P.dirty&&P.run()};I.id=f.uid,In(f,!0),I()},ut=(f,p,g)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,q_(f,p.props,E,g),H_(f,p.children,g),zn(),nu(f),Kn()},ot=(f,p,g,E,_,b,N,S,P=!1)=>{const I=f&&f.children,M=f?f.shapeFlag:0,j=p.children,{patchFlag:U,shapeFlag:G}=p;if(U>0){if(U&128){Je(I,j,g,E,_,b,N,S,P);return}else if(U&256){Ue(I,j,g,E,_,b,N,S,P);return}}G&8?(M&16&&Bt(I,_,b),j!==I&&u(g,j)):M&16?G&16?Je(I,j,g,E,_,b,N,S,P):Bt(I,_,b,!0):(M&8&&u(g,""),G&16&&se(j,g,E,_,b,N,S,P))},Ue=(f,p,g,E,_,b,N,S,P)=>{f=f||or,p=p||or;const I=f.length,M=p.length,j=Math.min(I,M);let U;for(U=0;U<j;U++){const G=p[U]=P?nn(p[U]):be(p[U]);R(f[U],G,g,null,_,b,N,S,P)}I>M?Bt(f,_,b,!0,!1,j):se(p,g,E,_,b,N,S,P,j)},Je=(f,p,g,E,_,b,N,S,P)=>{let I=0;const M=p.length;let j=f.length-1,U=M-1;for(;I<=j&&I<=U;){const G=f[I],Z=p[I]=P?nn(p[I]):be(p[I]);if(kr(G,Z))R(G,Z,g,null,_,b,N,S,P);else break;I++}for(;I<=j&&I<=U;){const G=f[j],Z=p[U]=P?nn(p[U]):be(p[U]);if(kr(G,Z))R(G,Z,g,null,_,b,N,S,P);else break;j--,U--}if(I>j){if(I<=U){const G=U+1,Z=G<M?p[G].el:E;for(;I<=U;)R(null,p[I]=P?nn(p[I]):be(p[I]),g,Z,_,b,N,S,P),I++}}else if(I>U)for(;I<=j;)Xt(f[I],_,b,!0),I++;else{const G=I,Z=I,ht=new Map;for(I=Z;I<=U;I++){const oe=p[I]=P?nn(p[I]):be(p[I]);oe.key!=null&&ht.set(oe.key,I)}let _t,Ct=0;const me=U-Z+1;let Jn=!1,Kl=0;const Mr=new Array(me);for(I=0;I<me;I++)Mr[I]=0;for(I=G;I<=j;I++){const oe=f[I];if(Ct>=me){Xt(oe,_,b,!0);continue}let Re;if(oe.key!=null)Re=ht.get(oe.key);else for(_t=Z;_t<=U;_t++)if(Mr[_t-Z]===0&&kr(oe,p[_t])){Re=_t;break}Re===void 0?Xt(oe,_,b,!0):(Mr[Re-Z]=I+1,Re>=Kl?Kl=Re:Jn=!0,R(oe,p[Re],g,null,_,b,N,S,P),Ct++)}const Hl=Jn?Y_(Mr):or;for(_t=Hl.length-1,I=me-1;I>=0;I--){const oe=Z+I,Re=p[oe],Gl=oe+1<M?p[oe+1].el:E;Mr[I]===0?R(null,Re,g,Gl,_,b,N,S,P):Jn&&(_t<0||I!==Hl[_t]?Ae(Re,g,Gl,2):_t--)}}},Ae=(f,p,g,E,_=null)=>{const{el:b,type:N,transition:S,children:P,shapeFlag:I}=f;if(I&6){Ae(f.component.subTree,p,g,E);return}if(I&128){f.suspense.move(p,g,E);return}if(I&64){N.move(f,p,g,L);return}if(N===Zt){r(b,p,g);for(let j=0;j<P.length;j++)Ae(P[j],p,g,E);r(f.anchor,p,g);return}if(N===Wo){B(f,p,g);return}if(E!==2&&I&1&&S)if(E===0)S.beforeEnter(b),r(b,p,g),Jt(()=>S.enter(b),_);else{const{leave:j,delayLeave:U,afterLeave:G}=S,Z=()=>r(b,p,g),ht=()=>{j(b,()=>{Z(),G&&G()})};U?U(b,Z,ht):ht()}else r(b,p,g)},Xt=(f,p,g,E=!1,_=!1)=>{const{type:b,props:N,ref:S,children:P,dynamicChildren:I,shapeFlag:M,patchFlag:j,dirs:U}=f;if(S!=null&&Oa(S,null,g,f,!0),M&256){p.ctx.deactivate(f);return}const G=M&1&&U,Z=!hi(f);let ht;if(Z&&(ht=N&&N.onVnodeBeforeUnmount)&&Se(ht,p,f),M&6)Ks(f.component,g,E);else{if(M&128){f.suspense.unmount(g,E);return}G&&Tn(f,null,p,"beforeUnmount"),M&64?f.type.remove(f,p,g,_,L,E):I&&(b!==Zt||j>0&&j&64)?Bt(I,p,g,!1,!0):(b===Zt&&j&384||!_&&M&16)&&Bt(P,p,g),E&&Yn(f)}(Z&&(ht=N&&N.onVnodeUnmounted)||G)&&Jt(()=>{ht&&Se(ht,p,f),G&&Tn(f,null,p,"unmounted")},g)},Yn=f=>{const{type:p,el:g,anchor:E,transition:_}=f;if(p===Zt){Xn(g,E);return}if(p===Wo){J(f);return}const b=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:N,delayLeave:S}=_,P=()=>N(g,b);S?S(f.el,b,P):P()}else b()},Xn=(f,p)=>{let g;for(;f!==p;)g=d(f),s(f),f=g;s(p)},Ks=(f,p,g)=>{const{bum:E,scope:_,update:b,subTree:N,um:S}=f;E&&ci(E),_.stop(),b&&(b.active=!1,Xt(N,f,p,g)),S&&Jt(S,p),Jt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Bt=(f,p,g,E=!1,_=!1,b=0)=>{for(let N=b;N<f.length;N++)Xt(f[N],p,g,E,_)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let O=!1;const x=(f,p,g)=>{f==null?p._vnode&&Xt(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,g),O||(O=!0,nu(),Ff(),O=!1),p._vnode=f},L={p:R,um:Xt,m:Ae,r:Yn,mt:Or,mc:se,pc:ot,pbc:ie,n:y,o:e};let at,gt;return t&&([at,gt]=t(L)),{render:x,hydrate:at,createApp:$_(x,at)}}function Go({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function In({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Q_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function nd(e,t,n=!1){const r=e.children,s=t.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=nn(s[i]),a.el=o.el),n||nd(o,a)),a.type===ro&&(a.el=o.el)}}function Y_(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function rd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:rd(t)}const X_=e=>e.__isTeleport,Zt=Symbol.for("v-fgt"),ro=Symbol.for("v-txt"),us=Symbol.for("v-cmt"),Wo=Symbol.for("v-stc"),Yr=[];let ye=null;function le(e=!1){Yr.push(ye=e?null:[])}function J_(){Yr.pop(),ye=Yr[Yr.length-1]||null}let hs=1;function du(e){hs+=e}function Z_(e){return e.dynamicChildren=hs>0?ye||or:null,J_(),hs>0&&ye&&ye.push(e),e}function ue(e,t,n,r,s,i){return Z_(X(e,t,n,r,s,i,!0))}function Ma(e){return e?e.__v_isVNode===!0:!1}function kr(e,t){return e.type===t.type&&e.key===t.key}const so="__vInternal",sd=({key:e})=>e??null,di=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?bt(e)||re(e)||Q(e)?{i:te,r:e,k:t,f:!!n}:e:null);function X(e,t=null,n=null,r=0,s=null,i=e===Zt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&sd(t),ref:t&&di(t),scopeId:Zi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:te};return a?(kc(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=bt(n)?8:16),hs>0&&!o&&ye&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ye.push(c),c}const Qt=ty;function ty(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===m_)&&(e=us),Ma(e)){const a=pr(e,t,!0);return n&&kc(a,n),hs>0&&!i&&ye&&(a.shapeFlag&6?ye[ye.indexOf(e)]=a:ye.push(a)),a.patchFlag|=-2,a}if(hy(e)&&(e=e.__vccOpts),t){t=ey(t);let{class:a,style:c}=t;a&&!bt(a)&&(t.class=Ic(a)),Et(c)&&(Cf(c)&&!H(c)&&(c=Ft({},c)),t.style=Tc(c))}const o=bt(e)?1:__(e)?128:X_(e)?64:Et(e)?4:Q(e)?2:0;return X(e,t,n,r,s,o,i,!0)}function ey(e){return e?Cf(e)||so in e?Ft({},e):e:null}function pr(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?ny(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&sd(a),ref:t&&t.ref?n&&s?H(s)?s.concat(di(t)):[s,di(t)]:di(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Zt?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pr(e.ssContent),ssFallback:e.ssFallback&&pr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Xr(e=" ",t=0){return Qt(ro,null,e,t)}function be(e){return e==null||typeof e=="boolean"?Qt(us):H(e)?Qt(Zt,null,e.slice()):typeof e=="object"?nn(e):Qt(ro,null,String(e))}function nn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:pr(e)}function kc(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),kc(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(so in t)?t._ctx=te:s===3&&te&&(te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:te},n=32):(t=String(t),r&64?(n=16,t=[Xr(t)]):n=8);e.children=t,e.shapeFlag|=n}function ny(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ic([t.class,r.class]));else if(s==="style")t.style=Tc([t.style,r.style]);else if(Hi(s)){const i=t[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Se(e,t,n,r=null){ve(e,t,7,[n,r])}const ry=Yf();let sy=0;function iy(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||ry,i={uid:sy++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jf(r,s),emitsOptions:Uf(r,s),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:r.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=u_.bind(null,i),e.ce&&e.ce(i),i}let zt=null,Ai,ka;{const e=ff(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ai=t("__VUE_INSTANCE_SETTERS__",n=>zt=n),ka=t("__VUE_SSR_SETTERS__",n=>io=n)}const Cs=e=>{const t=zt;return Ai(e),e.scope.on(),()=>{e.scope.off(),Ai(t)}},pu=()=>{zt&&zt.scope.off(),Ai(null)};function id(e){return e.vnode.shapeFlag&4}let io=!1;function oy(e,t=!1){t&&ka(t);const{props:n,children:r}=e.vnode,s=id(e);j_(e,n,s,t),K_(e,r);const i=s?ay(e,t):void 0;return t&&ka(!1),i}function ay(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Vf(new Proxy(e.ctx,O_));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?ly(e):null,i=Cs(e);zn();const o=cn(r,e,0,[e.props,s]);if(Kn(),i(),lf(o)){if(o.then(pu,pu),t)return o.then(a=>{mu(e,a,t)}).catch(a=>{Xi(a,e,0)});e.asyncDep=o}else mu(e,o,t)}else od(e,t)}function mu(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Et(t)&&(e.setupState=Of(t)),od(e,n)}let gu;function od(e,t,n){const r=e.type;if(!e.render){if(!t&&gu&&!r.render){const s=r.template||Oc(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ft(Ft({isCustomElement:i,delimiters:a},o),c);r.render=gu(s,l)}}e.render=r.render||de}{const s=Cs(e);zn();try{M_(e)}finally{Kn(),s()}}}function cy(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ne(e,"get","$attrs"),t[n]}}))}function ly(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return cy(e)},slots:e.slots,emit:e.emit,expose:t}}function oo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Of(Vf(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qr)return Qr[n](e)},has(t,n){return n in t||n in Qr}}))}function uy(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function hy(e){return Q(e)&&"__vccOpts"in e}const _e=(e,t)=>t_(e,t,io);function ad(e,t,n){const r=arguments.length;return r===2?Et(t)&&!H(t)?Ma(t)?Qt(e,null,[t]):Qt(e,t):Qt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ma(n)&&(n=[n]),Qt(e,t,n))}const fy="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const dy="http://www.w3.org/2000/svg",py="http://www.w3.org/1998/Math/MathML",rn=typeof document<"u"?document:null,_u=rn&&rn.createElement("template"),my={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?rn.createElementNS(dy,e):t==="mathml"?rn.createElementNS(py,e):rn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>rn.createTextNode(e),createComment:e=>rn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{_u.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=_u.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},gy=Symbol("_vtc");function _y(e,t,n){const r=e[gy];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Lc=Symbol("_vod"),yu={beforeMount(e,{value:t},{transition:n}){e[Lc]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Lr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Lr(e,!0),r.enter(e)):r.leave(e,()=>{Lr(e,!1)}):Lr(e,t))},beforeUnmount(e,{value:t}){Lr(e,t)}};function Lr(e,t){e.style.display=t?e[Lc]:"none"}const yy=Symbol("");function Ey(e,t,n){const r=e.style,s=r.display,i=bt(n);if(n&&!i){if(t&&!bt(t))for(const o in t)n[o]==null&&La(r,o,"");for(const o in n)La(r,o,n[o])}else if(i){if(t!==n){const o=r[yy];o&&(n+=";"+o),r.cssText=n}}else t&&e.removeAttribute("style");Lc in e&&(r.display=s)}const Eu=/\s*!important$/;function La(e,t,n){if(H(n))n.forEach(r=>La(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=vy(e,t);Eu.test(n)?e.setProperty(br(r),n.replace(Eu,""),"important"):e[r]=n}}const vu=["Webkit","Moz","ms"],Qo={};function vy(e,t){const n=Qo[t];if(n)return n;let r=ke(t);if(r!=="filter"&&r in e)return Qo[t]=r;r=Qi(r);for(let s=0;s<vu.length;s++){const i=vu[s]+r;if(i in e)return Qo[t]=i}return t}const wu="http://www.w3.org/1999/xlink";function wy(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(wu,t.slice(6,t.length)):e.setAttributeNS(wu,t,n);else{const i=Dg(t);n==null||i&&!df(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ty(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=df(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function tr(e,t,n,r){e.addEventListener(t,n,r)}function Iy(e,t,n,r){e.removeEventListener(t,n,r)}const Tu=Symbol("_vei");function Ay(e,t,n,r,s=null){const i=e[Tu]||(e[Tu]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=Ry(t);if(r){const l=i[t]=Py(r,s);tr(e,a,l,c)}else o&&(Iy(e,a,o,c),i[t]=void 0)}}const Iu=/(?:Once|Passive|Capture)$/;function Ry(e){let t;if(Iu.test(e)){t={};let r;for(;r=e.match(Iu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):br(e.slice(2)),t]}let Yo=0;const Sy=Promise.resolve(),by=()=>Yo||(Sy.then(()=>Yo=0),Yo=Date.now());function Py(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ve(Cy(r,n.value),t,5,[r])};return n.value=e,n.attached=by(),n}function Cy(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Au=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Vy=(e,t,n,r,s,i,o,a,c)=>{const l=s==="svg";t==="class"?_y(e,r,l):t==="style"?Ey(e,n,r):Hi(t)?Ec(t)||Ay(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Dy(e,t,r,l))?Ty(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),wy(e,t,r,l))};function Dy(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Au(t)&&Q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Au(t)&&bt(n)?!1:t in e}const Ru=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>ci(t,n):t};function xy(e){e.target.composing=!0}function Su(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Xo=Symbol("_assign"),Ny={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Xo]=Ru(s);const i=r||s.props&&s.props.type==="number";tr(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Aa(a)),e[Xo](a)}),n&&tr(e,"change",()=>{e.value=e.value.trim()}),t||(tr(e,"compositionstart",xy),tr(e,"compositionend",Su),tr(e,"change",Su))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e[Xo]=Ru(i),e.composing)return;const o=s||e.type==="number"?Aa(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===a)||(e.value=a))}},Oy=Ft({patchProp:Vy},my);let bu;function My(){return bu||(bu=G_(Oy))}const ky=(...e)=>{const t=My().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Fy(r);if(!s)return;const i=t._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Ly(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Ly(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Fy(e){return bt(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const er=typeof window<"u";function By(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ct=Object.assign;function Jo(e,t){const n={};for(const r in t){const s=t[r];n[r]=we(s)?s.map(e):e(s)}return n}const Jr=()=>{},we=Array.isArray,Uy=/\/$/,$y=e=>e.replace(Uy,"");function Zo(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Ky(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function jy(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Pu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function qy(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&mr(t.matched[r],n.matched[s])&&cd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function mr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function cd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!zy(e[n],t[n]))return!1;return!0}function zy(e,t){return we(e)?Cu(e,t):we(t)?Cu(t,e):e===t}function Cu(e,t){return we(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ky(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var fs;(function(e){e.pop="pop",e.push="push"})(fs||(fs={}));var Zr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Zr||(Zr={}));function Hy(e){if(!e)if(er){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),$y(e)}const Gy=/^[^#]+#/;function Wy(e,t){return e.replace(Gy,"#")+t}function Qy(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ao=()=>({left:window.pageXOffset,top:window.pageYOffset});function Yy(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Qy(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Vu(e,t){return(history.state?history.state.position-t:-1)+e}const Fa=new Map;function Xy(e,t){Fa.set(e,t)}function Jy(e){const t=Fa.get(e);return Fa.delete(e),t}let Zy=()=>location.protocol+"//"+location.host;function ld(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Pu(c,"")}return Pu(n,e)+r+s}function tE(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=ld(e,location),A=n.value,R=t.value;let T=0;if(d){if(n.value=m,t.value=d,o&&o===A){o=null;return}T=R?d.position-R.position:0}else r(m);s.forEach(C=>{C(n.value,A,{delta:T,type:fs.pop,direction:T?T>0?Zr.forward:Zr.back:Zr.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const A=s.indexOf(d);A>-1&&s.splice(A,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(ct({},d.state,{scroll:ao()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Du(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ao():null}}function eE(e){const{history:t,location:n}=window,r={value:ld(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=e.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:Zy()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=ct({},t.state,Du(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ct({},s.value,t.state,{forward:c,scroll:ao()});i(u.current,u,!0);const h=ct({},Du(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function nE(e){e=Hy(e);const t=eE(e),n=tE(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ct({location:"",base:e,go:r,createHref:Wy.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function rE(e){return typeof e=="string"||e&&typeof e=="object"}function ud(e){return typeof e=="string"||typeof e=="symbol"}const tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hd=Symbol("");var xu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(xu||(xu={}));function gr(e,t){return ct(new Error,{type:e,[hd]:!0},t)}function $e(e,t){return e instanceof Error&&hd in e&&(t==null||!!(e.type&t))}const Nu="[^/]+?",sE={sensitive:!1,strict:!1,start:!0,end:!0},iE=/[.+*?^${}()[\]/\\]/g;function oE(e,t){const n=ct({},sE,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(iE,"\\$&"),m+=40;else if(d.type===1){const{value:A,repeatable:R,optional:T,regexp:C}=d;i.push({name:A,repeatable:R,optional:T});const k=C||Nu;if(k!==Nu){m+=10;try{new RegExp(`(${k})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${A}" (${k}): `+J.message)}}let B=R?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(B=T&&l.length<2?`(?:/${B})`:"/"+B),T&&(B+="?"),s+=B,m+=20,T&&(m+=-8),R&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",A=i[d-1];h[A.name]=m&&A.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:A,repeatable:R,optional:T}=m,C=A in l?l[A]:"";if(we(C)&&!R)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const k=we(C)?C.join("/"):C;if(!k)if(T)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${A}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function aE(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function cE(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=aE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ou(r))return 1;if(Ou(s))return-1}return s.length-r.length}function Ou(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const lE={type:0,value:""},uE=/[a-zA-Z0-9_]/;function hE(e){if(!e)return[[]];if(e==="/")return[[lE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:uE.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function fE(e,t,n){const r=oE(hE(e.path),n),s=ct(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function dE(e,t){const n=[],r=new Map;t=Lu({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,h,d){const m=!d,A=pE(u);A.aliasOf=d&&d.record;const R=Lu(t,u),T=[A];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const J of B)T.push(ct({},A,{components:d?d.record.components:A.components,path:J,aliasOf:d?d.record:A}))}let C,k;for(const B of T){const{path:J}=B;if(h&&J[0]!=="/"){const dt=h.record.path,q=dt[dt.length-1]==="/"?"":"/";B.path=h.record.path+(J&&q+J)}if(C=fE(B,h,R),d?d.alias.push(C):(k=k||C,k!==C&&k.alias.push(C),m&&u.name&&!ku(C)&&o(u.name)),A.children){const dt=A.children;for(let q=0;q<dt.length;q++)i(dt[q],C,d&&d.children[q])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return k?()=>{o(k)}:Jr}function o(u){if(ud(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&cE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!fd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!ku(u)&&r.set(u.record.name,u)}function l(u,h){let d,m={},A,R;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw gr(1,{location:u});R=d.record.name,m=ct(Mu(h.params,d.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Mu(u.params,d.keys.map(k=>k.name))),A=d.stringify(m)}else if("path"in u)A=u.path,d=n.find(k=>k.re.test(A)),d&&(m=d.parse(A),R=d.record.name);else{if(d=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!d)throw gr(1,{location:u,currentLocation:h});R=d.record.name,m=ct({},h.params,u.params),A=d.stringify(m)}const T=[];let C=d;for(;C;)T.unshift(C.record),C=C.parent;return{name:R,path:A,params:m,matched:T,meta:gE(T)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Mu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function pE(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:mE(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function mE(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ku(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function gE(e){return e.reduce((t,n)=>ct(t,n.meta),{})}function Lu(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function fd(e,t){return t.children.some(n=>n===e||fd(e,n))}const dd=/#/g,_E=/&/g,yE=/\//g,EE=/=/g,vE=/\?/g,pd=/\+/g,wE=/%5B/g,TE=/%5D/g,md=/%5E/g,IE=/%60/g,gd=/%7B/g,AE=/%7C/g,_d=/%7D/g,RE=/%20/g;function Fc(e){return encodeURI(""+e).replace(AE,"|").replace(wE,"[").replace(TE,"]")}function SE(e){return Fc(e).replace(gd,"{").replace(_d,"}").replace(md,"^")}function Ba(e){return Fc(e).replace(pd,"%2B").replace(RE,"+").replace(dd,"%23").replace(_E,"%26").replace(IE,"`").replace(gd,"{").replace(_d,"}").replace(md,"^")}function bE(e){return Ba(e).replace(EE,"%3D")}function PE(e){return Fc(e).replace(dd,"%23").replace(vE,"%3F")}function CE(e){return e==null?"":PE(e).replace(yE,"%2F")}function Ri(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function VE(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(pd," "),o=i.indexOf("="),a=Ri(o<0?i:i.slice(0,o)),c=o<0?null:Ri(i.slice(o+1));if(a in t){let l=t[a];we(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Fu(e){let t="";for(let n in e){const r=e[n];if(n=bE(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(we(r)?r.map(i=>i&&Ba(i)):[r&&Ba(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function DE(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=we(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const xE=Symbol(""),Bu=Symbol(""),Bc=Symbol(""),yd=Symbol(""),Ua=Symbol("");function Fr(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function sn(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(gr(4,{from:n,to:t})):h instanceof Error?a(h):rE(h)?a(gr(2,{from:t,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function ta(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(NE(a)){const l=(a.__vccOpts||a)[t];l&&s.push(sn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=By(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[t];return d&&sn(d,n,r,i,o)()}))}}return s}function NE(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Uu(e){const t=ze(Bc),n=ze(yd),r=_e(()=>t.resolve(Mn(e.to))),s=_e(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(mr.bind(null,u));if(d>-1)return d;const m=$u(c[l-2]);return l>1&&$u(u)===m&&h[h.length-1].path!==m?h.findIndex(mr.bind(null,c[l-2])):d}),i=_e(()=>s.value>-1&&LE(n.params,r.value.params)),o=_e(()=>s.value>-1&&s.value===n.matched.length-1&&cd(n.params,r.value.params));function a(c={}){return kE(c)?t[Mn(e.replace)?"replace":"push"](Mn(e.to)).catch(Jr):Promise.resolve()}return{route:r,href:_e(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const OE=Kf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uu,setup(e,{slots:t}){const n=Ps(Uu(e)),{options:r}=ze(Bc),s=_e(()=>({[ju(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ju(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:ad("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ME=OE;function kE(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function LE(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!we(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function $u(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ju=(e,t,n)=>e??t??n,FE=Kf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ze(Ua),s=_e(()=>e.route||r.value),i=ze(Bu,0),o=_e(()=>{let l=Mn(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=_e(()=>s.value.matched[o.value]);fi(Bu,_e(()=>o.value+1)),fi(xE,a),fi(Ua,s);const c=e_();return ui(()=>[c.value,a.value,e.name],([l,u,h],[d,m,A])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!mr(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,h=a.value,d=h&&h.components[u];if(!d)return qu(n.default,{Component:d,route:l});const m=h.props[u],A=m?m===!0?l.params:typeof m=="function"?m(l):m:null,T=ad(d,ct({},A,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return qu(n.default,{Component:T,route:l})||T}}});function qu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ed=FE;function BE(e){const t=dE(e.routes,e),n=e.parseQuery||VE,r=e.stringifyQuery||Fu,s=e.history,i=Fr(),o=Fr(),a=Fr(),c=n_(tn);let l=tn;er&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Jo.bind(null,y=>""+y),h=Jo.bind(null,CE),d=Jo.bind(null,Ri);function m(y,O){let x,L;return ud(y)?(x=t.getRecordMatcher(y),L=O):L=y,t.addRoute(L,x)}function A(y){const O=t.getRecordMatcher(y);O&&t.removeRoute(O)}function R(){return t.getRoutes().map(y=>y.record)}function T(y){return!!t.getRecordMatcher(y)}function C(y,O){if(O=ct({},O||c.value),typeof y=="string"){const p=Zo(n,y,O.path),g=t.resolve({path:p.path},O),E=s.createHref(p.fullPath);return ct(p,g,{params:d(g.params),hash:Ri(p.hash),redirectedFrom:void 0,href:E})}let x;if("path"in y)x=ct({},y,{path:Zo(n,y.path,O.path).path});else{const p=ct({},y.params);for(const g in p)p[g]==null&&delete p[g];x=ct({},y,{params:h(p)}),O.params=h(O.params)}const L=t.resolve(x,O),at=y.hash||"";L.params=u(d(L.params));const gt=jy(r,ct({},y,{hash:SE(at),path:L.path})),f=s.createHref(gt);return ct({fullPath:gt,hash:at,query:r===Fu?DE(y.query):y.query||{}},L,{redirectedFrom:void 0,href:f})}function k(y){return typeof y=="string"?Zo(n,y,c.value.path):ct({},y)}function B(y,O){if(l!==y)return gr(8,{from:O,to:y})}function J(y){return Tt(y)}function dt(y){return J(ct(k(y),{replace:!0}))}function q(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:x}=O;let L=typeof x=="function"?x(y):x;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=k(L):{path:L},L.params={}),ct({query:y.query,hash:y.hash,params:"path"in L?{}:y.params},L)}}function Tt(y,O){const x=l=C(y),L=c.value,at=y.state,gt=y.force,f=y.replace===!0,p=q(x);if(p)return Tt(ct(k(p),{state:typeof p=="object"?ct({},at,p.state):at,force:gt,replace:f}),O||x);const g=x;g.redirectedFrom=O;let E;return!gt&&qy(r,L,x)&&(E=gr(16,{to:g,from:L}),Ae(L,L,!0,!1)),(E?Promise.resolve(E):ie(g,L)).catch(_=>$e(_)?$e(_,2)?_:Je(_):ot(_,g,L)).then(_=>{if(_){if($e(_,2))return Tt(ct({replace:f},k(_.to),{state:typeof _.to=="object"?ct({},at,_.to.state):at,force:gt}),O||g)}else _=wn(g,L,!0,f,at);return Xe(g,L,_),_})}function se(y,O){const x=B(y,O);return x?Promise.reject(x):Promise.resolve()}function Ye(y){const O=Xn.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(y):y()}function ie(y,O){let x;const[L,at,gt]=UE(y,O);x=ta(L.reverse(),"beforeRouteLeave",y,O);for(const p of L)p.leaveGuards.forEach(g=>{x.push(sn(g,y,O))});const f=se.bind(null,y,O);return x.push(f),Bt(x).then(()=>{x=[];for(const p of i.list())x.push(sn(p,y,O));return x.push(f),Bt(x)}).then(()=>{x=ta(at,"beforeRouteUpdate",y,O);for(const p of at)p.updateGuards.forEach(g=>{x.push(sn(g,y,O))});return x.push(f),Bt(x)}).then(()=>{x=[];for(const p of gt)if(p.beforeEnter)if(we(p.beforeEnter))for(const g of p.beforeEnter)x.push(sn(g,y,O));else x.push(sn(p.beforeEnter,y,O));return x.push(f),Bt(x)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),x=ta(gt,"beforeRouteEnter",y,O),x.push(f),Bt(x))).then(()=>{x=[];for(const p of o.list())x.push(sn(p,y,O));return x.push(f),Bt(x)}).catch(p=>$e(p,8)?p:Promise.reject(p))}function Xe(y,O,x){a.list().forEach(L=>Ye(()=>L(y,O,x)))}function wn(y,O,x,L,at){const gt=B(y,O);if(gt)return gt;const f=O===tn,p=er?history.state:{};x&&(L||f?s.replace(y.fullPath,ct({scroll:f&&p&&p.scroll},at)):s.push(y.fullPath,at)),c.value=y,Ae(y,O,x,f),Je()}let Ie;function Or(){Ie||(Ie=s.listen((y,O,x)=>{if(!Ks.listening)return;const L=C(y),at=q(L);if(at){Tt(ct(at,{replace:!0}),L).catch(Jr);return}l=L;const gt=c.value;er&&Xy(Vu(gt.fullPath,x.delta),ao()),ie(L,gt).catch(f=>$e(f,12)?f:$e(f,2)?(Tt(f.to,L).then(p=>{$e(p,20)&&!x.delta&&x.type===fs.pop&&s.go(-1,!1)}).catch(Jr),Promise.reject()):(x.delta&&s.go(-x.delta,!1),ot(f,L,gt))).then(f=>{f=f||wn(L,gt,!1),f&&(x.delta&&!$e(f,8)?s.go(-x.delta,!1):x.type===fs.pop&&$e(f,20)&&s.go(-1,!1)),Xe(L,gt,f)}).catch(Jr)}))}let Qn=Fr(),Pt=Fr(),ut;function ot(y,O,x){Je(y);const L=Pt.list();return L.length?L.forEach(at=>at(y,O,x)):console.error(y),Promise.reject(y)}function Ue(){return ut&&c.value!==tn?Promise.resolve():new Promise((y,O)=>{Qn.add([y,O])})}function Je(y){return ut||(ut=!y,Or(),Qn.list().forEach(([O,x])=>y?x(y):O()),Qn.reset()),y}function Ae(y,O,x,L){const{scrollBehavior:at}=e;if(!er||!at)return Promise.resolve();const gt=!x&&Jy(Vu(y.fullPath,0))||(L||!x)&&history.state&&history.state.scroll||null;return kf().then(()=>at(y,O,gt)).then(f=>f&&Yy(f)).catch(f=>ot(f,y,O))}const Xt=y=>s.go(y);let Yn;const Xn=new Set,Ks={currentRoute:c,listening:!0,addRoute:m,removeRoute:A,hasRoute:T,getRoutes:R,resolve:C,options:e,push:J,replace:dt,go:Xt,back:()=>Xt(-1),forward:()=>Xt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Pt.add,isReady:Ue,install(y){const O=this;y.component("RouterLink",ME),y.component("RouterView",Ed),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Mn(c)}),er&&!Yn&&c.value===tn&&(Yn=!0,J(s.location).catch(at=>{}));const x={};for(const at in tn)Object.defineProperty(x,at,{get:()=>c.value[at],enumerable:!0});y.provide(Bc,O),y.provide(yd,bf(x)),y.provide(Ua,c);const L=y.unmount;Xn.add(y),y.unmount=function(){Xn.delete(y),Xn.size<1&&(l=tn,Ie&&Ie(),Ie=null,c.value=tn,Yn=!1,ut=!1),L()}}};function Bt(y){return y.reduce((O,x)=>O.then(()=>Ye(x)),Promise.resolve())}return Ks}function UE(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>mr(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>mr(l,c))||s.push(c))}return[n,r,s]}const co=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},$E=e=>(to("data-v-a8a00dc8"),e=e(),eo(),e),jE=$E(()=>X("header",null,[X("div",{class:"wrapper"},[X("nav")])],-1)),qE={__name:"App",setup(e){return(t,n)=>(le(),ue(Zt,null,[jE,Qt(Mn(Ed))],64))}},zE=co(qE,[["__scopeId","data-v-a8a00dc8"]]),KE="modulepreload",HE=function(e){return"/"+e},zu={},GE=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=HE(o),o in zu)return;zu[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":KE,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},WE={name:"ToggleButton",props:{member:Object},data(){return{}},methods:{toggleCheckbox(e){e.attendance=!e.attendance}},mounted(){}},QE=e=>(to("data-v-6785bba9"),e=e(),eo(),e),YE={class:"panel-body"},XE={class:"switch"},JE=["checked"],ZE=QE(()=>X("div",{class:"slider round"},null,-1));function tv(e,t,n,r,s,i){return le(),ue("div",YE,[X("label",XE,[X("input",{type:"checkbox",onClick:t[0]||(t[0]=o=>i.toggleCheckbox(n.member)),checked:n.member.attendance===!0},null,8,JE),ZE])])}const vd=co(WE,[["render",tv],["__scopeId","data-v-6785bba9"]]),qr=Ps({members:[]});var Ku={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},ev=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Td={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[h],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(wd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ev(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new nv;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const A=l<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class nv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rv=function(e){const t=wd(e);return Td.encodeByteArray(t,!0)},Si=function(e){return rv(e).replace(/\./g,"")},sv=function(e){try{return Td.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=()=>iv().__FIREBASE_DEFAULTS__,av=()=>{if(typeof process>"u"||typeof Ku>"u")return;const e=Ku.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},cv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&sv(e[1]);return t&&JSON.parse(t)},Uc=()=>{try{return ov()||av()||cv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},lv=e=>{var t,n;return(n=(t=Uc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},uv=e=>{const t=lv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Id=()=>{var e;return(e=Uc())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Si(JSON.stringify(n)),Si(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dv(){var e;const t=(e=Uc())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pv(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function mv(){return!dv()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $c(){try{return typeof indexedDB=="object"}catch{return!1}}function Ad(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function gv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="FirebaseError";class yn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=_v,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?yv(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yn(s,a,r)}}function yv(e,t){return e.replace(Ev,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Ev=/\{\$([^}]+)}/g;function Pi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Hu(i)&&Hu(o)){if(!Pi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Hu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=1e3,wv=2,Tv=4*60*60*1e3,Iv=.5;function Gu(e,t=vv,n=wv){const r=t*Math.pow(n,e),s=Math.round(Iv*r*(Math.random()-.5)*2);return Math.min(Tv,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return e&&e._delegate?e._delegate:e}class He{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new hv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sv(t))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=An){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=An){return this.instances.has(t)}getOptions(t=An){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=An){return this.component?this.component.multipleInstances?t:An:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rv(e){return e===An?void 0:e}function Sv(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Av(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(rt||(rt={}));const Pv={debug:rt.DEBUG,verbose:rt.VERBOSE,info:rt.INFO,warn:rt.WARN,error:rt.ERROR,silent:rt.SILENT},Cv=rt.INFO,Vv={[rt.DEBUG]:"log",[rt.VERBOSE]:"log",[rt.INFO]:"info",[rt.WARN]:"warn",[rt.ERROR]:"error"},Dv=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Vv[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class jc{constructor(t){this.name=t,this._logLevel=Cv,this._logHandler=Dv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in rt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Pv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,rt.DEBUG,...t),this._logHandler(this,rt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,rt.VERBOSE,...t),this._logHandler(this,rt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,rt.INFO,...t),this._logHandler(this,rt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,rt.WARN,...t),this._logHandler(this,rt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,rt.ERROR,...t),this._logHandler(this,rt.ERROR,...t)}}const xv=(e,t)=>t.some(n=>e instanceof n);let Wu,Qu;function Nv(){return Wu||(Wu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ov(){return Qu||(Qu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rd=new WeakMap,$a=new WeakMap,Sd=new WeakMap,ea=new WeakMap,qc=new WeakMap;function Mv(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(ln(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Rd.set(n,e)}).catch(()=>{}),qc.set(t,e),t}function kv(e){if($a.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});$a.set(e,t)}let ja={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $a.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Sd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Lv(e){ja=e(ja)}function Fv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(na(this),t,...n);return Sd.set(r,t.sort?t.sort():[t]),ln(r)}:Ov().includes(e)?function(...t){return e.apply(na(this),t),ln(Rd.get(this))}:function(...t){return ln(e.apply(na(this),t))}}function Bv(e){return typeof e=="function"?Fv(e):(e instanceof IDBTransaction&&kv(e),xv(e,Nv())?new Proxy(e,ja):e)}function ln(e){if(e instanceof IDBRequest)return Mv(e);if(ea.has(e))return ea.get(e);const t=Bv(e);return t!==e&&(ea.set(e,t),qc.set(t,e)),t}const na=e=>qc.get(e);function Uv(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=ln(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ln(o.result),c.oldVersion,c.newVersion,ln(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const $v=["get","getKey","getAll","getAllKeys","count"],jv=["put","add","delete","clear"],ra=new Map;function Yu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ra.get(t))return ra.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=jv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$v.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ra.set(t,i),i}Lv(e=>({...e,get:(t,n,r)=>Yu(t,n)||e.get(t,n,r),has:(t,n)=>!!Yu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qa="@firebase/app",Xu="0.9.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new jc("@firebase/app"),Kv="@firebase/app-compat",Hv="@firebase/analytics-compat",Gv="@firebase/analytics",Wv="@firebase/app-check-compat",Qv="@firebase/app-check",Yv="@firebase/auth",Xv="@firebase/auth-compat",Jv="@firebase/database",Zv="@firebase/database-compat",tw="@firebase/functions",ew="@firebase/functions-compat",nw="@firebase/installations",rw="@firebase/installations-compat",sw="@firebase/messaging",iw="@firebase/messaging-compat",ow="@firebase/performance",aw="@firebase/performance-compat",cw="@firebase/remote-config",lw="@firebase/remote-config-compat",uw="@firebase/storage",hw="@firebase/storage-compat",fw="@firebase/firestore",dw="@firebase/firestore-compat",pw="firebase",mw="10.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="[DEFAULT]",gw={[qa]:"fire-core",[Kv]:"fire-core-compat",[Gv]:"fire-analytics",[Hv]:"fire-analytics-compat",[Qv]:"fire-app-check",[Wv]:"fire-app-check-compat",[Yv]:"fire-auth",[Xv]:"fire-auth-compat",[Jv]:"fire-rtdb",[Zv]:"fire-rtdb-compat",[tw]:"fire-fn",[ew]:"fire-fn-compat",[nw]:"fire-iid",[rw]:"fire-iid-compat",[sw]:"fire-fcm",[iw]:"fire-fcm-compat",[ow]:"fire-perf",[aw]:"fire-perf-compat",[cw]:"fire-rc",[lw]:"fire-rc-compat",[uw]:"fire-gcs",[hw]:"fire-gcs-compat",[fw]:"fire-fst",[dw]:"fire-fst-compat","fire-js":"fire-js",[pw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Map,Ka=new Map;function _w(e,t){try{e.container.addComponent(t)}catch(n){Fn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pn(e){const t=e.name;if(Ka.has(t))return Fn.debug(`There were multiple attempts to register component ${t}.`),!1;Ka.set(t,e);for(const n of Ci.values())_w(n,e);return!0}function Vs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},un=new lo("app","Firebase",yw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=mw;function bd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:za,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw un.create("bad-app-name",{appName:String(s)});if(n||(n=Id()),!n)throw un.create("no-options");const i=Ci.get(s);if(i){if(Pi(n,i.options)&&Pi(r,i.config))return i;throw un.create("duplicate-app",{appName:s})}const o=new bv(s);for(const c of Ka.values())o.addComponent(c);const a=new Ew(n,r,o);return Ci.set(s,a),a}function Pd(e=za){const t=Ci.get(e);if(!t&&e===za&&Id())return bd();if(!t)throw un.create("no-app",{appName:e});return t}function xe(e,t,n){var r;let s=(r=gw[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Fn.warn(a.join(" "));return}pn(new He(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="firebase-heartbeat-database",Tw=1,ds="firebase-heartbeat-store";let sa=null;function Cd(){return sa||(sa=Uv(ww,Tw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ds)}catch(n){console.warn(n)}}}}).catch(e=>{throw un.create("idb-open",{originalErrorMessage:e.message})})),sa}async function Iw(e){try{return await(await Cd()).transaction(ds).objectStore(ds).get(Vd(e))}catch(t){if(t instanceof yn)Fn.warn(t.message);else{const n=un.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Fn.warn(n.message)}}}async function Ju(e,t){try{const r=(await Cd()).transaction(ds,"readwrite");await r.objectStore(ds).put(t,Vd(e)),await r.done}catch(n){if(n instanceof yn)Fn.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function Vd(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=1024,Rw=30*24*60*60*1e3;class Sw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zu();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Rw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zu(),{heartbeatsToSend:r,unsentEntries:s}=bw(this._heartbeatsCache.heartbeats),i=Si(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zu(){return new Date().toISOString().substring(0,10)}function bw(e,t=Aw){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),th(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),th(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $c()?Ad().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Iw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ju(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ju(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function th(e){return Si(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(e){pn(new He("platform-logger",t=>new qv(t),"PRIVATE")),pn(new He("heartbeat",t=>new Sw(t),"PRIVATE")),xe(qa,Xu,e),xe(qa,Xu,"esm2017"),xe("fire-js","")}Cw("");var Vw="firebase",Dw="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe(Vw,Dw,"app");const xw=(e,t)=>t.some(n=>e instanceof n);let eh,nh;function Nw(){return eh||(eh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ow(){return nh||(nh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dd=new WeakMap,Ha=new WeakMap,xd=new WeakMap,ia=new WeakMap,zc=new WeakMap;function Mw(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(hn(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Dd.set(n,e)}).catch(()=>{}),zc.set(t,e),t}function kw(e){if(Ha.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ha.set(e,t)}let Ga={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ha.get(e);if(t==="objectStoreNames")return e.objectStoreNames||xd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Lw(e){Ga=e(Ga)}function Fw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(oa(this),t,...n);return xd.set(r,t.sort?t.sort():[t]),hn(r)}:Ow().includes(e)?function(...t){return e.apply(oa(this),t),hn(Dd.get(this))}:function(...t){return hn(e.apply(oa(this),t))}}function Bw(e){return typeof e=="function"?Fw(e):(e instanceof IDBTransaction&&kw(e),xw(e,Nw())?new Proxy(e,Ga):e)}function hn(e){if(e instanceof IDBRequest)return Mw(e);if(ia.has(e))return ia.get(e);const t=Bw(e);return t!==e&&(ia.set(e,t),zc.set(t,e)),t}const oa=e=>zc.get(e);function Uw(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=hn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(hn(o.result),c.oldVersion,c.newVersion,hn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const $w=["get","getKey","getAll","getAllKeys","count"],jw=["put","add","delete","clear"],aa=new Map;function rh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(aa.get(t))return aa.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=jw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$w.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return aa.set(t,i),i}Lw(e=>({...e,get:(t,n,r)=>rh(t,n)||e.get(t,n,r),has:(t,n)=>!!rh(t,n)||e.has(t,n)}));const Nd="@firebase/installations",Kc="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=1e4,Md=`w:${Kc}`,kd="FIS_v2",qw="https://firebaseinstallations.googleapis.com/v1",zw=60*60*1e3,Kw="installations",Hw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Bn=new lo(Kw,Hw,Gw);function Ld(e){return e instanceof yn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd({projectId:e}){return`${qw}/projects/${e}/installations`}function Bd(e){return{token:e.token,requestStatus:2,expiresIn:Qw(e.expiresIn),creationTime:Date.now()}}async function Ud(e,t){const r=(await t.json()).error;return Bn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $d({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ww(e,{refreshToken:t}){const n=$d(e);return n.append("Authorization",Yw(t)),n}async function jd(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Qw(e){return Number(e.replace("s","000"))}function Yw(e){return`${kd} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Fd(e),s=$d(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:kd,appId:e.appId,sdkVersion:Md},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await jd(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Bd(l.authToken)}}else throw await Ud("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=/^[cdef][\w-]{21}$/,Wa="";function tT(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=eT(e);return Zw.test(n)?n:Wa}catch{return Wa}}function eT(e){return Jw(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new Map;function Kd(e,t){const n=uo(e);Hd(n,t),nT(n,t)}function Hd(e,t){const n=zd.get(e);if(n)for(const r of n)r(t)}function nT(e,t){const n=rT();n&&n.postMessage({key:e,fid:t}),sT()}let Pn=null;function rT(){return!Pn&&"BroadcastChannel"in self&&(Pn=new BroadcastChannel("[Firebase] FID Change"),Pn.onmessage=e=>{Hd(e.data.key,e.data.fid)}),Pn}function sT(){zd.size===0&&Pn&&(Pn.close(),Pn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="firebase-installations-database",oT=1,Un="firebase-installations-store";let ca=null;function Hc(){return ca||(ca=Uw(iT,oT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Un)}}})),ca}async function Vi(e,t){const n=uo(e),s=(await Hc()).transaction(Un,"readwrite"),i=s.objectStore(Un),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&Kd(e,t.fid),t}async function Gd(e){const t=uo(e),r=(await Hc()).transaction(Un,"readwrite");await r.objectStore(Un).delete(t),await r.done}async function ho(e,t){const n=uo(e),s=(await Hc()).transaction(Un,"readwrite"),i=s.objectStore(Un),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Kd(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gc(e){let t;const n=await ho(e.appConfig,r=>{const s=aT(r),i=cT(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Wa?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function aT(e){const t=e||{fid:tT(),registrationStatus:0};return Wd(t)}function cT(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Bn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=lT(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:uT(e)}:{installationEntry:t}}async function lT(e,t){try{const n=await Xw(e,t);return Vi(e.appConfig,n)}catch(n){throw Ld(n)&&n.customData.serverCode===409?await Gd(e.appConfig):await Vi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function uT(e){let t=await sh(e.appConfig);for(;t.registrationStatus===1;)await qd(100),t=await sh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Gc(e);return r||n}return t}function sh(e){return ho(e,t=>{if(!t)throw Bn.create("installation-not-found");return Wd(t)})}function Wd(e){return hT(e)?{fid:e.fid,registrationStatus:0}:e}function hT(e){return e.registrationStatus===1&&e.registrationTime+Od<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fT({appConfig:e,heartbeatServiceProvider:t},n){const r=dT(e,n),s=Ww(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Md,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await jd(()=>fetch(r,a));if(c.ok){const l=await c.json();return Bd(l)}else throw await Ud("Generate Auth Token",c)}function dT(e,{fid:t}){return`${Fd(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wc(e,t=!1){let n;const r=await ho(e.appConfig,i=>{if(!Qd(i))throw Bn.create("not-registered");const o=i.authToken;if(!t&&gT(o))return i;if(o.requestStatus===1)return n=pT(e,t),i;{if(!navigator.onLine)throw Bn.create("app-offline");const a=yT(i);return n=mT(e,a),a}});return n?await n:r.authToken}async function pT(e,t){let n=await ih(e.appConfig);for(;n.authToken.requestStatus===1;)await qd(100),n=await ih(e.appConfig);const r=n.authToken;return r.requestStatus===0?Wc(e,t):r}function ih(e){return ho(e,t=>{if(!Qd(t))throw Bn.create("not-registered");const n=t.authToken;return ET(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function mT(e,t){try{const n=await fT(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Vi(e.appConfig,r),n}catch(n){if(Ld(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Gd(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Vi(e.appConfig,r)}throw n}}function Qd(e){return e!==void 0&&e.registrationStatus===2}function gT(e){return e.requestStatus===2&&!_T(e)}function _T(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+zw}function yT(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ET(e){return e.requestStatus===1&&e.requestTime+Od<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vT(e){const t=e,{installationEntry:n,registrationPromise:r}=await Gc(t);return r?r.catch(console.error):Wc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(e,t=!1){const n=e;return await TT(n),(await Wc(n,t)).token}async function TT(e){const{registrationPromise:t}=await Gc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(e){if(!e||!e.options)throw la("App Configuration");if(!e.name)throw la("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw la(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function la(e){return Bn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="installations",AT="installations-internal",RT=e=>{const t=e.getProvider("app").getImmediate(),n=IT(t),r=Vs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ST=e=>{const t=e.getProvider("app").getImmediate(),n=Vs(t,Yd).getImmediate();return{getId:()=>vT(n),getToken:s=>wT(n,s)}};function bT(){pn(new He(Yd,RT,"PUBLIC")),pn(new He(AT,ST,"PRIVATE"))}bT();xe(Nd,Kc);xe(Nd,Kc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di="analytics",PT="firebase_id",CT="origin",VT=60*1e3,DT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new jc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ae=new lo("analytics","Analytics",xT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(e){if(!e.startsWith(Qc)){const t=ae.create("invalid-gtag-resource",{gtagURL:e});return ee.warn(t.message),""}return e}function Xd(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function OT(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function MT(e,t){const n=OT("firebase-js-sdk-policy",{createScriptURL:NT}),r=document.createElement("script"),s=`${Qc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function kT(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function LT(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Xd(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){ee.error(a)}e("config",s,i)}async function FT(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Xd(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ee.error(i)}}function BT(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await FT(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await LT(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ee.error(a)}}return s}function UT(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=BT(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function $T(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Qc)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=30,qT=1e3;class zT{constructor(t={},n=qT){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Jd=new zT;function KT(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function HT(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:KT(r)},i=DT.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw ae.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function GT(e,t=Jd,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw ae.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ae.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new YT;return setTimeout(async()=>{a.abort()},n!==void 0?n:VT),Zd({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Zd(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Jd){var i;const{appId:o,measurementId:a}=e;try{await WT(r,t)}catch(c){if(a)return ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await HT(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!QT(l)){if(s.deleteThrottleMetadata(o),a)return ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Gu(n,s.intervalMillis,jT):Gu(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),ee.debug(`Calling attemptFetch again in ${u} millis`),Zd(e,h,r,s)}}function WT(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(ae.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function QT(e){if(!(e instanceof yn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class YT{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function XT(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT(){if($c())try{await Ad()}catch(e){return ee.warn(ae.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ee.warn(ae.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ZT(e,t,n,r,s,i,o){var a;const c=GT(e);c.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&ee.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>ee.error(m)),t.push(c);const l=JT().then(m=>{if(m)return r.getId()}),[u,h]=await Promise.all([c,l]);$T(i)||MT(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[CT]="firebase",d.update=!0,h!=null&&(d[PT]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t){this.app=t}_delete(){return delete ts[this.app.options.appId],Promise.resolve()}}let ts={},oh=[];const ah={};let ua="dataLayer",eI="gtag",ch,tp,lh=!1;function nI(){const e=[];if(pv()&&e.push("This is a browser extension environment."),gv()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=ae.create("invalid-analytics-context",{errorInfo:t});ee.warn(n.message)}}function rI(e,t,n){nI();const r=e.options.appId;if(!r)throw ae.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ae.create("no-api-key");if(ts[r]!=null)throw ae.create("already-exists",{id:r});if(!lh){kT(ua);const{wrappedGtag:i,gtagCore:o}=UT(ts,oh,ah,ua,eI);tp=i,ch=o,lh=!0}return ts[r]=ZT(e,oh,ah,t,ch,ua,n),new tI(e)}function sI(e=Pd()){e=Ln(e);const t=Vs(e,Di);return t.isInitialized()?t.getImmediate():iI(e)}function iI(e,t={}){const n=Vs(e,Di);if(n.isInitialized()){const s=n.getImmediate();if(Pi(t,n.getOptions()))return s;throw ae.create("already-initialized")}return n.initialize({options:t})}function oI(e,t,n,r){e=Ln(e),XT(tp,ts[e.app.options.appId],t,n,r).catch(s=>ee.error(s))}const uh="@firebase/analytics",hh="0.10.0";function aI(){pn(new He(Di,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return rI(r,s,n)},"PUBLIC")),pn(new He("analytics-internal",e,"PRIVATE")),xe(uh,hh),xe(uh,hh,"esm2017");function e(t){try{const n=t.getProvider(Di).getImmediate();return{logEvent:(r,s,i)=>oI(n,r,s,i)}}catch(n){throw ae.create("interop-component-reg-failed",{reason:n})}}}aI();var cI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Yc=Yc||{},K=cI||self;function fo(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ds(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function lI(e){return Object.prototype.hasOwnProperty.call(e,ha)&&e[ha]||(e[ha]=++uI)}var ha="closure_uid_"+(1e9*Math.random()>>>0),uI=0;function hI(e,t,n){return e.call.apply(e.bind,arguments)}function fI(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Kt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Kt=hI:Kt=fI,Kt.apply(null,arguments)}function Js(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function xt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function En(){this.s=this.s,this.o=this.o}var dI=0;En.prototype.s=!1;En.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),dI!=0)&&lI(this)};En.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ep=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Xc(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function fh(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(fo(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function Ht(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ht.prototype.h=function(){this.defaultPrevented=!0};var pI=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};K.addEventListener("test",n,t),K.removeEventListener("test",n,t)}catch{}return e}();function ps(e){return/^[\s\xa0]*$/.test(e)}function po(){var e=K.navigator;return e&&(e=e.userAgent)?e:""}function Ce(e){return po().indexOf(e)!=-1}function Jc(e){return Jc[" "](e),e}Jc[" "]=function(){};function mI(e,t){var n=aA;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var gI=Ce("Opera"),_r=Ce("Trident")||Ce("MSIE"),np=Ce("Edge"),Qa=np||_r,rp=Ce("Gecko")&&!(po().toLowerCase().indexOf("webkit")!=-1&&!Ce("Edge"))&&!(Ce("Trident")||Ce("MSIE"))&&!Ce("Edge"),_I=po().toLowerCase().indexOf("webkit")!=-1&&!Ce("Edge");function sp(){var e=K.document;return e?e.documentMode:void 0}var Ya;t:{var fa="",da=function(){var e=po();if(rp)return/rv:([^\);]+)(\)|;)/.exec(e);if(np)return/Edge\/([\d\.]+)/.exec(e);if(_r)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(_I)return/WebKit\/(\S+)/.exec(e);if(gI)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(da&&(fa=da?da[1]:""),_r){var pa=sp();if(pa!=null&&pa>parseFloat(fa)){Ya=String(pa);break t}}Ya=fa}var Xa;if(K.document&&_r){var dh=sp();Xa=dh||parseInt(Ya,10)||void 0}else Xa=void 0;var yI=Xa;function ms(e,t){if(Ht.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(rp){t:{try{Jc(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:EI[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ms.$.h.call(this)}}xt(ms,Ht);var EI={2:"touch",3:"pen",4:"mouse"};ms.prototype.h=function(){ms.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var xs="closure_listenable_"+(1e6*Math.random()|0),vI=0;function wI(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++vI,this.fa=this.ia=!1}function mo(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Zc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function TI(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ip(e){const t={};for(const n in e)t[n]=e[n];return t}const ph="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function op(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<ph.length;i++)n=ph[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function go(e){this.src=e,this.g={},this.h=0}go.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Za(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new wI(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Ja(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=ep(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(mo(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Za(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var tl="closure_lm_"+(1e6*Math.random()|0),ma={};function ap(e,t,n,r,s){if(r&&r.once)return lp(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ap(e,t[i],n,r,s);return null}return n=rl(n),e&&e[xs]?e.O(t,n,Ds(r)?!!r.capture:!!r,s):cp(e,t,n,!1,r,s)}function cp(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Ds(s)?!!s.capture:!!s,a=nl(e);if(a||(e[tl]=a=new go(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=II(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)pI||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(hp(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function II(){function e(n){return t.call(e.src,e.listener,n)}const t=AI;return e}function lp(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)lp(e,t[i],n,r,s);return null}return n=rl(n),e&&e[xs]?e.P(t,n,Ds(r)?!!r.capture:!!r,s):cp(e,t,n,!0,r,s)}function up(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)up(e,t[i],n,r,s);else r=Ds(r)?!!r.capture:!!r,n=rl(n),e&&e[xs]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Za(i,n,r,s),-1<n&&(mo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=nl(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Za(t,n,r,s)),(n=-1<e?t[e]:null)&&el(n))}function el(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[xs])Ja(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(hp(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=nl(t))?(Ja(n,e),n.h==0&&(n.src=null,t[tl]=null)):mo(e)}}}function hp(e){return e in ma?ma[e]:ma[e]="on"+e}function AI(e,t){if(e.fa)e=!0;else{t=new ms(t,this);var n=e.listener,r=e.la||e.src;e.ia&&el(e),e=n.call(r,t)}return e}function nl(e){return e=e[tl],e instanceof go?e:null}var ga="__closure_events_fn_"+(1e9*Math.random()>>>0);function rl(e){return typeof e=="function"?e:(e[ga]||(e[ga]=function(t){return e.handleEvent(t)}),e[ga])}function Dt(){En.call(this),this.i=new go(this),this.S=this,this.J=null}xt(Dt,En);Dt.prototype[xs]=!0;Dt.prototype.removeEventListener=function(e,t,n,r){up(this,e,t,n,r)};function kt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ht(t,e);else if(t instanceof Ht)t.target=t.target||e;else{var s=t;t=new Ht(r,e),op(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Zs(o,r,!0,t)&&s}if(o=t.g=e,s=Zs(o,r,!0,t)&&s,s=Zs(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Zs(o,r,!1,t)&&s}Dt.prototype.N=function(){if(Dt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)mo(n[r]);delete e.g[t],e.h--}}this.J=null};Dt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Dt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Zs(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ja(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var sl=K.JSON.stringify;class RI{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function SI(){var e=il;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class bI{constructor(){this.h=this.g=null}add(t,n){const r=fp.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var fp=new RI(()=>new PI,e=>e.reset());class PI{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function CI(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function VI(e){K.setTimeout(()=>{throw e},0)}let gs,_s=!1,il=new bI,dp=()=>{const e=K.Promise.resolve(void 0);gs=()=>{e.then(DI)}};var DI=()=>{for(var e;e=SI();){try{e.h.call(e.g)}catch(n){VI(n)}var t=fp;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}_s=!1};function _o(e,t){Dt.call(this),this.h=e||1,this.g=t||K,this.j=Kt(this.qb,this),this.l=Date.now()}xt(_o,Dt);D=_o.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),kt(this,"tick"),this.ga&&(ol(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ol(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}D.N=function(){_o.$.N.call(this),ol(this),delete this.g};function al(e,t,n){if(typeof e=="function")n&&(e=Kt(e,n));else if(e&&typeof e.handleEvent=="function")e=Kt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:K.setTimeout(e,t||0)}function pp(e){e.g=al(()=>{e.g=null,e.i&&(e.i=!1,pp(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class xI extends En{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:pp(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(e){En.call(this),this.h=e,this.g={}}xt(ys,En);var mh=[];function mp(e,t,n,r){Array.isArray(n)||(n&&(mh[0]=n.toString()),n=mh);for(var s=0;s<n.length;s++){var i=ap(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function gp(e){Zc(e.g,function(t,n){this.g.hasOwnProperty(n)&&el(t)},e),e.g={}}ys.prototype.N=function(){ys.$.N.call(this),gp(this)};ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yo(){this.g=!0}yo.prototype.Ea=function(){this.g=!1};function NI(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function OI(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function ir(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+kI(e,n)+(r?" "+r:"")})}function MI(e,t){e.info(function(){return"TIMEOUT: "+t})}yo.prototype.info=function(){};function kI(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return sl(n)}catch{return t}}var Hn={},gh=null;function Eo(){return gh=gh||new Dt}Hn.Ta="serverreachability";function _p(e){Ht.call(this,Hn.Ta,e)}xt(_p,Ht);function Es(e){const t=Eo();kt(t,new _p(t))}Hn.STAT_EVENT="statevent";function yp(e,t){Ht.call(this,Hn.STAT_EVENT,e),this.stat=t}xt(yp,Ht);function Yt(e){const t=Eo();kt(t,new yp(t,e))}Hn.Ua="timingevent";function Ep(e,t){Ht.call(this,Hn.Ua,e),this.size=t}xt(Ep,Ht);function Ns(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){e()},t)}var vo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},vp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function cl(){}cl.prototype.h=null;function _h(e){return e.h||(e.h=e.i())}function wp(){}var Os={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ll(){Ht.call(this,"d")}xt(ll,Ht);function ul(){Ht.call(this,"c")}xt(ul,Ht);var tc;function wo(){}xt(wo,cl);wo.prototype.g=function(){return new XMLHttpRequest};wo.prototype.i=function(){return{}};tc=new wo;function Ms(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new ys(this),this.P=LI,e=Qa?125:void 0,this.V=new _o(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Tp}function Tp(){this.i=null,this.g="",this.h=!1}var LI=45e3,Ip={},ec={};D=Ms.prototype;D.setTimeout=function(e){this.P=e};function nc(e,t,n){e.L=1,e.A=Io(Ge(t)),e.u=n,e.S=!0,Ap(e,null)}function Ap(e,t){e.G=Date.now(),ks(e),e.B=Ge(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),xp(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Tp,e.g=Zp(e.l,n?t:null,!e.u),0<e.O&&(e.M=new xI(Kt(e.Pa,e,e.g),e.O)),mp(e.U,e.g,"readystatechange",e.nb),t=e.I?ip(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Es(),NI(e.j,e.v,e.B,e.m,e.W,e.u)}D.nb=function(e){e=e.target;const t=this.M;t&&Ve(e)==3?t.l():this.Pa(e)};D.Pa=function(e){try{if(e==this.g)t:{const u=Ve(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Qa||this.g&&(this.h.h||this.g.ja()||wh(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Es(3):Es(2)),To(this);var n=this.g.da();this.ca=n;e:if(Rp(this)){var r=wh(this.g);e="";var s=r.length,i=Ve(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),es(this);var o="";break e}this.h.i=new K.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,OI(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ps(a)){var l=a;break e}}l=null}if(n=l)ir(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rc(this,n);else{this.i=!1,this.s=3,Yt(12),Cn(this),es(this);break t}}this.S?(Sp(this,u,o),Qa&&this.i&&u==3&&(mp(this.U,this.V,"tick",this.mb),this.V.start())):(ir(this.j,this.m,o,null),rc(this,o)),u==4&&Cn(this),this.i&&!this.J&&(u==4?Qp(this.l,this):(this.i=!1,ks(this)))}else sA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Yt(12)):(this.s=0,Yt(13)),Cn(this),es(this)}}}catch{}finally{}};function Rp(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Sp(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=FI(e,n),s==ec){t==4&&(e.s=4,Yt(14),r=!1),ir(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Ip){e.s=4,Yt(15),ir(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ir(e.j,e.m,s,null),rc(e,s);Rp(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Yt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),gl(t),t.M=!0,Yt(11))):(ir(e.j,e.m,n,"[Invalid Chunked Response]"),Cn(e),es(e))}D.mb=function(){if(this.g){var e=Ve(this.g),t=this.g.ja();this.o<t.length&&(To(this),Sp(this,e,t),this.i&&e!=4&&ks(this))}};function FI(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?ec:(n=Number(t.substring(n,r)),isNaN(n)?Ip:(r+=1,r+n>t.length?ec:(t=t.slice(r,r+n),e.o=r+n,t)))}D.cancel=function(){this.J=!0,Cn(this)};function ks(e){e.Y=Date.now()+e.P,bp(e,e.P)}function bp(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Ns(Kt(e.lb,e),t)}function To(e){e.C&&(K.clearTimeout(e.C),e.C=null)}D.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(MI(this.j,this.B),this.L!=2&&(Es(),Yt(17)),Cn(this),this.s=2,es(this)):bp(this,this.Y-e)};function es(e){e.l.H==0||e.J||Qp(e.l,e)}function Cn(e){To(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,ol(e.V),gp(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function rc(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||sc(n.i,e))){if(!e.K&&sc(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Oi(n),bo(n);else break t;ml(n),Yt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ns(Kt(n.ib,n),6e3));if(1>=Mp(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Vn(n,11)}else if((e.K||n.g==e)&&Oi(n),!ps(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const A=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var i=r.i;i.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(hl(i,i.h),i.h=null))}if(r.F){const R=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,mt(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Jp(r,r.J?r.pa:null,r.Y),o.K){kp(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(To(a),ks(a)),r.g=o}else Gp(r);0<n.j.length&&Po(n)}else l[0]!="stop"&&l[0]!="close"||Vn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Vn(n,7):pl(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Es(4)}catch{}}function BI(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(fo(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function UI(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(fo(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Pp(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(fo(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=UI(e),r=BI(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Cp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $I(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function kn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof kn){this.h=e.h,xi(this,e.j),this.s=e.s,this.g=e.g,Ni(this,e.m),this.l=e.l;var t=e.i,n=new vs;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),yh(this,n),this.o=e.o}else e&&(t=String(e).match(Cp))?(this.h=!1,xi(this,t[1]||"",!0),this.s=zr(t[2]||""),this.g=zr(t[3]||"",!0),Ni(this,t[4]),this.l=zr(t[5]||"",!0),yh(this,t[6]||"",!0),this.o=zr(t[7]||"")):(this.h=!1,this.i=new vs(null,this.h))}kn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Kr(t,Eh,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Kr(t,Eh,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Kr(n,n.charAt(0)=="/"?zI:qI,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Kr(n,HI)),e.join("")};function Ge(e){return new kn(e)}function xi(e,t,n){e.j=n?zr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ni(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function yh(e,t,n){t instanceof vs?(e.i=t,GI(e.i,e.h)):(n||(t=Kr(t,KI)),e.i=new vs(t,e.h))}function mt(e,t,n){e.i.set(t,n)}function Io(e){return mt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function zr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Kr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,jI),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function jI(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Eh=/[#\/\?@]/g,qI=/[#\?:]/g,zI=/[#\?]/g,KI=/[#\?@]/g,HI=/#/g;function vs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function vn(e){e.g||(e.g=new Map,e.h=0,e.i&&$I(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}D=vs.prototype;D.add=function(e,t){vn(this),this.i=null,e=Pr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Vp(e,t){vn(e),t=Pr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Dp(e,t){return vn(e),t=Pr(e,t),e.g.has(t)}D.forEach=function(e,t){vn(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};D.ta=function(){vn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};D.Z=function(e){vn(this);let t=[];if(typeof e=="string")Dp(this,e)&&(t=t.concat(this.g.get(Pr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};D.set=function(e,t){return vn(this),this.i=null,e=Pr(this,e),Dp(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};D.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function xp(e,t,n){Vp(e,t),0<n.length&&(e.i=null,e.g.set(Pr(e,t),Xc(n)),e.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function Pr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function GI(e,t){t&&!e.j&&(vn(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Vp(this,r),xp(this,s,n))},e)),e.j=t}var WI=class{constructor(e,t){this.g=e,this.map=t}};function Np(e){this.l=e||QI,K.PerformanceNavigationTiming?(e=K.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QI=10;function Op(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Mp(e){return e.h?1:e.g?e.g.size:0}function sc(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function hl(e,t){e.g?e.g.add(t):e.h=t}function kp(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Np.prototype.cancel=function(){if(this.i=Lp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Lp(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Xc(e.i)}var YI=class{stringify(e){return K.JSON.stringify(e,void 0)}parse(e){return K.JSON.parse(e,void 0)}};function XI(){this.g=new YI}function JI(e,t,n){const r=n||"";try{Pp(e,function(s,i){let o=s;Ds(s)&&(o=sl(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function ZI(e,t){const n=new yo;if(K.Image){const r=new Image;r.onload=Js(ti,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Js(ti,n,r,"TestLoadImage: error",!1,t),r.onabort=Js(ti,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Js(ti,n,r,"TestLoadImage: timeout",!1,t),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function ti(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Ao(e){this.l=e.ec||null,this.j=e.ob||!1}xt(Ao,cl);Ao.prototype.g=function(){return new Ro(this.l,this.j)};Ao.prototype.i=function(e){return function(){return e}}({});function Ro(e,t){Dt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=fl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xt(Ro,Dt);var fl=0;D=Ro.prototype;D.open=function(e,t){if(this.readyState!=fl)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ws(this)};D.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||K).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=fl};D.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fp(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Fp(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}D.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ls(this):ws(this),this.readyState==3&&Fp(this)}};D.Za=function(e){this.g&&(this.response=this.responseText=e,Ls(this))};D.Ya=function(e){this.g&&(this.response=e,Ls(this))};D.ka=function(){this.g&&Ls(this)};function Ls(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ws(e)}D.setRequestHeader=function(e,t){this.v.append(e,t)};D.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ws(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var tA=K.JSON.parse;function wt(e){Dt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Bp,this.L=this.M=!1}xt(wt,Dt);var Bp="",eA=/^https?$/i,nA=["POST","PUT"];D=wt.prototype;D.Oa=function(e){this.M=e};D.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():tc.g(),this.C=this.u?_h(this.u):_h(tc),this.g.onreadystatechange=Kt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){vh(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=K.FormData&&e instanceof K.FormData,!(0<=ep(nA,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{jp(this),0<this.B&&((this.L=rA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Kt(this.ua,this)):this.A=al(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){vh(this,i)}};function rA(e){return _r&&typeof e.timeout=="number"&&e.ontimeout!==void 0}D.ua=function(){typeof Yc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))};function vh(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Up(e),So(e)}function Up(e){e.F||(e.F=!0,kt(e,"complete"),kt(e,"error"))}D.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,kt(this,"complete"),kt(this,"abort"),So(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),So(this,!0)),wt.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?$p(this):this.kb())};D.kb=function(){$p(this)};function $p(e){if(e.h&&typeof Yc<"u"&&(!e.C[1]||Ve(e)!=4||e.da()!=2)){if(e.v&&Ve(e)==4)al(e.La,0,e);else if(kt(e,"readystatechange"),Ve(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Cp)[1]||null;!s&&K.self&&K.self.location&&(s=K.self.location.protocol.slice(0,-1)),r=!eA.test(s?s.toLowerCase():"")}n=r}if(n)kt(e,"complete"),kt(e,"success");else{e.m=6;try{var i=2<Ve(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Up(e)}}finally{So(e)}}}}function So(e,t){if(e.g){jp(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||kt(e,"ready");try{n.onreadystatechange=r}catch{}}}function jp(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(K.clearTimeout(e.A),e.A=null)}D.isActive=function(){return!!this.g};function Ve(e){return e.g?e.g.readyState:0}D.da=function(){try{return 2<Ve(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),tA(t)}};function wh(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Bp:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function sA(e){const t={};e=(e.g&&2<=Ve(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(ps(e[r]))continue;var n=CI(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}TI(t,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qp(e){let t="";return Zc(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function dl(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=qp(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):mt(e,t,n))}function Br(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zp(e){this.Ga=0,this.j=[],this.l=new yo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Br("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Br("baseRetryDelayMs",5e3,e),this.hb=Br("retryDelaySeedMs",1e4,e),this.eb=Br("forwardChannelMaxRetries",2,e),this.xa=Br("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Np(e&&e.concurrentRequestLimit),this.Ja=new XI,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=zp.prototype;D.ra=8;D.H=1;function pl(e){if(Kp(e),e.H==3){var t=e.W++,n=Ge(e.I);if(mt(n,"SID",e.K),mt(n,"RID",t),mt(n,"TYPE","terminate"),Fs(e,n),t=new Ms(e,e.l,t),t.L=2,t.A=Io(Ge(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&K.Image&&(new Image().src=t.A,n=!0),n||(t.g=Zp(t.l,null),t.g.ha(t.A)),t.G=Date.now(),ks(t)}Xp(e)}function bo(e){e.g&&(gl(e),e.g.cancel(),e.g=null)}function Kp(e){bo(e),e.u&&(K.clearTimeout(e.u),e.u=null),Oi(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&K.clearTimeout(e.m),e.m=null)}function Po(e){if(!Op(e.i)&&!e.m){e.m=!0;var t=e.Na;gs||dp(),_s||(gs(),_s=!0),il.add(t,e),e.C=0}}function iA(e,t){return Mp(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ns(Kt(e.Na,e,t),Yp(e,e.C)),e.C++,!0)}D.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Ms(this,this.l,e);let i=this.s;if(this.U&&(i?(i=ip(i),op(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Hp(this,s,t),n=Ge(this.I),mt(n,"RID",e),mt(n,"CVER",22),this.F&&mt(n,"X-HTTP-Session-Id",this.F),Fs(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(qp(i)))+"&"+t:this.o&&dl(n,this.o,i)),hl(this.i,s),this.bb&&mt(n,"TYPE","init"),this.P?(mt(n,"$req",t),mt(n,"SID","null"),s.aa=!0,nc(s,n,null)):nc(s,n,t),this.H=2}}else this.H==3&&(e?Th(this,e):this.j.length==0||Op(this.i)||Th(this))};function Th(e,t){var n;t?n=t.m:n=e.W++;const r=Ge(e.I);mt(r,"SID",e.K),mt(r,"RID",n),mt(r,"AID",e.V),Fs(e,r),e.o&&e.s&&dl(r,e.o,e.s),n=new Ms(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Hp(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),hl(e.i,n),nc(n,r,t)}function Fs(e,t){e.na&&Zc(e.na,function(n,r){mt(t,r,n)}),e.h&&Pp({},function(n,r){mt(t,r,n)})}function Hp(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Kt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{JI(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Gp(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;gs||dp(),_s||(gs(),_s=!0),il.add(t,e),e.A=0}}function ml(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ns(Kt(e.Ma,e),Yp(e,e.A)),e.A++,!0)}D.Ma=function(){if(this.u=null,Wp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ns(Kt(this.jb,this),e)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Yt(10),bo(this),Wp(this))};function gl(e){e.B!=null&&(K.clearTimeout(e.B),e.B=null)}function Wp(e){e.g=new Ms(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ge(e.wa);mt(t,"RID","rpc"),mt(t,"SID",e.K),mt(t,"AID",e.V),mt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&mt(t,"TO",e.qa),mt(t,"TYPE","xmlhttp"),Fs(e,t),e.o&&e.s&&dl(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Io(Ge(t)),n.u=null,n.S=!0,Ap(n,e)}D.ib=function(){this.v!=null&&(this.v=null,bo(this),ml(this),Yt(19))};function Oi(e){e.v!=null&&(K.clearTimeout(e.v),e.v=null)}function Qp(e,t){var n=null;if(e.g==t){Oi(e),gl(e),e.g=null;var r=2}else if(sc(e.i,t))n=t.F,kp(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=Eo(),kt(r,new Ep(r,n)),Po(e)}else Gp(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&iA(e,t)||r==2&&ml(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Vn(e,5);break;case 4:Vn(e,10);break;case 3:Vn(e,6);break;default:Vn(e,2)}}}function Yp(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Vn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Kt(e.pb,e);n||(n=new kn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||xi(n,"https"),Io(n)),ZI(n.toString(),r)}else Yt(2);e.H=0,e.h&&e.h.za(t),Xp(e),Kp(e)}D.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Yt(2)):(this.l.info("Failed to ping google.com"),Yt(1))};function Xp(e){if(e.H=0,e.ma=[],e.h){const t=Lp(e.i);(t.length!=0||e.j.length!=0)&&(fh(e.ma,t),fh(e.ma,e.j),e.i.i.length=0,Xc(e.j),e.j.length=0),e.h.ya()}}function Jp(e,t,n){var r=n instanceof kn?Ge(n):new kn(n);if(r.g!="")t&&(r.g=t+"."+r.g),Ni(r,r.m);else{var s=K.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new kn(null);r&&xi(i,r),t&&(i.g=t),s&&Ni(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&mt(r,n,t),mt(r,"VER",e.ra),Fs(e,r),r}function Zp(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new wt(new Ao({ob:n})):new wt(e.va),t.Oa(e.J),t}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function tm(){}D=tm.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function Mi(){if(_r&&!(10<=Number(yI)))throw Error("Environmental error: no available transport.")}Mi.prototype.g=function(e,t){return new ce(e,t)};function ce(e,t){Dt.call(this),this.g=new zp(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ps(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ps(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Cr(this)}xt(ce,Dt);ce.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Yt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Jp(e,null,e.Y),Po(e)};ce.prototype.close=function(){pl(this.g)};ce.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=sl(e),e=n);t.j.push(new WI(t.fb++,e)),t.H==3&&Po(t)};ce.prototype.N=function(){this.g.h=null,delete this.j,pl(this.g),delete this.g,ce.$.N.call(this)};function em(e){ll.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}xt(em,ll);function nm(){ul.call(this),this.status=1}xt(nm,ul);function Cr(e){this.g=e}xt(Cr,tm);Cr.prototype.Ba=function(){kt(this.g,"a")};Cr.prototype.Aa=function(e){kt(this.g,new em(e))};Cr.prototype.za=function(e){kt(this.g,new nm)};Cr.prototype.ya=function(){kt(this.g,"b")};function oA(){this.blockSize=-1}function Te(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}xt(Te,oA);Te.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _a(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}Te.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)_a(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){_a(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){_a(this,r),s=0;break}}this.h=s,this.i+=t};Te.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function lt(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var aA={};function _l(e){return-128<=e&&128>e?mI(e,function(t){return new lt([t|0],0>t?-1:0)}):new lt([e|0],0>e?-1:0)}function De(e){if(isNaN(e)||!isFinite(e))return ur;if(0>e)return Ot(De(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ic;return new lt(t,0)}function rm(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ot(rm(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=De(Math.pow(t,8)),r=ur,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=De(Math.pow(t,i)),r=r.R(i).add(De(o))):(r=r.R(n),r=r.add(De(o)))}return r}var ic=4294967296,ur=_l(0),oc=_l(1),Ih=_l(16777216);D=lt.prototype;D.ea=function(){if(he(this))return-Ot(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ic+r)*t,t*=ic}return e};D.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(je(this))return"0";if(he(this))return"-"+Ot(this).toString(e);for(var t=De(Math.pow(e,6)),n=this,r="";;){var s=Li(n,t).g;n=ki(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,je(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};D.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function je(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function he(e){return e.h==-1}D.X=function(e){return e=ki(this,e),he(e)?-1:je(e)?0:1};function Ot(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new lt(n,~e.h).add(oc)}D.abs=function(){return he(this)?Ot(this):this};D.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new lt(n,n[n.length-1]&-2147483648?-1:0)};function ki(e,t){return e.add(Ot(t))}D.R=function(e){if(je(this)||je(e))return ur;if(he(this))return he(e)?Ot(this).R(Ot(e)):Ot(Ot(this).R(e));if(he(e))return Ot(this.R(Ot(e)));if(0>this.X(Ih)&&0>e.X(Ih))return De(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,ei(n,2*r+2*s),n[2*r+2*s+1]+=i*c,ei(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,ei(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,ei(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new lt(n,0)};function ei(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ur(e,t){this.g=e,this.h=t}function Li(e,t){if(je(t))throw Error("division by zero");if(je(e))return new Ur(ur,ur);if(he(e))return t=Li(Ot(e),t),new Ur(Ot(t.g),Ot(t.h));if(he(t))return t=Li(e,Ot(t)),new Ur(Ot(t.g),t.h);if(30<e.g.length){if(he(e)||he(t))throw Error("slowDivide_ only works with positive integers.");for(var n=oc,r=t;0>=r.X(e);)n=Ah(n),r=Ah(r);var s=Zn(n,1),i=Zn(r,1);for(r=Zn(r,2),n=Zn(n,2);!je(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Zn(r,1),n=Zn(n,1)}return t=ki(e,s.R(t)),new Ur(s,t)}for(s=ur;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=De(n),o=i.R(t);he(o)||0<o.X(e);)n-=r,i=De(n),o=i.R(t);je(i)&&(i=oc),s=s.add(i),e=ki(e,o)}return new Ur(s,e)}D.gb=function(e){return Li(this,e).h};D.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new lt(n,this.h&e.h)};D.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new lt(n,this.h|e.h)};D.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new lt(n,this.h^e.h)};function Ah(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new lt(n,e.h)}function Zn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new lt(s,e.h)}Mi.prototype.createWebChannel=Mi.prototype.g;ce.prototype.send=ce.prototype.u;ce.prototype.open=ce.prototype.m;ce.prototype.close=ce.prototype.close;vo.NO_ERROR=0;vo.TIMEOUT=8;vo.HTTP_ERROR=6;vp.COMPLETE="complete";wp.EventType=Os;Os.OPEN="a";Os.CLOSE="b";Os.ERROR="c";Os.MESSAGE="d";Dt.prototype.listen=Dt.prototype.O;wt.prototype.listenOnce=wt.prototype.P;wt.prototype.getLastError=wt.prototype.Sa;wt.prototype.getLastErrorCode=wt.prototype.Ia;wt.prototype.getStatus=wt.prototype.da;wt.prototype.getResponseJson=wt.prototype.Wa;wt.prototype.getResponseText=wt.prototype.ja;wt.prototype.send=wt.prototype.ha;wt.prototype.setWithCredentials=wt.prototype.Oa;Te.prototype.digest=Te.prototype.l;Te.prototype.reset=Te.prototype.reset;Te.prototype.update=Te.prototype.j;lt.prototype.add=lt.prototype.add;lt.prototype.multiply=lt.prototype.R;lt.prototype.modulo=lt.prototype.gb;lt.prototype.compare=lt.prototype.X;lt.prototype.toNumber=lt.prototype.ea;lt.prototype.toString=lt.prototype.toString;lt.prototype.getBits=lt.prototype.D;lt.fromNumber=De;lt.fromString=rm;var cA=function(){return new Mi},lA=function(){return Eo()},ya=vo,uA=vp,hA=Hn,Rh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ni=wp,fA=wt,dA=Te,hr=lt;const Sh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr="10.7.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new jc("@firebase/firestore");function $r(){return $n.logLevel}function V(e,...t){if($n.logLevel<=rt.DEBUG){const n=t.map(yl);$n.debug(`Firestore (${Vr}): ${e}`,...n)}}function Le(e,...t){if($n.logLevel<=rt.ERROR){const n=t.map(yl);$n.error(`Firestore (${Vr}): ${e}`,...n)}}function yr(e,...t){if($n.logLevel<=rt.WARN){const n=t.map(yl);$n.warn(`Firestore (${Vr}): ${e}`,...n)}}function yl(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e="Unexpected state"){const t=`FIRESTORE (${Vr}) INTERNAL ASSERTION FAILED: `+e;throw Le(t),new Error(t)}function ft(e,t){e||z()}function Y(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends yn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class mA{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gA{constructor(t){this.t=t,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Ke;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ke,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ke)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ft(typeof r.accessToken=="string"),new sm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ft(t===null||typeof t=="string"),new $t(t)}}class _A{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yA{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new _A(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EA{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vA{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ft(typeof n.token=="string"),this.R=n.token,new EA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=wA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function st(e,t){return e<t?-1:e>t?1:0}function Er(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new F(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new F(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return St.fromMillis(Date.now())}static fromDate(t){return St.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new St(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?st(this.nanoseconds,t.nanoseconds):st(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.timestamp=t}static fromTimestamp(t){return new W(t)}static min(){return new W(new St(0,0))}static max(){return new W(new St(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t,n,r){n===void 0?n=0:n>t.length&&z(),r===void 0?r=t.length-n:r>t.length-n&&z(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ts.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ts?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class yt extends Ts{construct(t,n,r){return new yt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new F(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new yt(n)}static emptyPath(){return new yt([])}}const TA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends Ts{construct(t,n,r){return new Mt(t,n,r)}static isValidIdentifier(t){return TA.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Mt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new F(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new F(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Mt(n)}static emptyPath(){return new Mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.path=t}static fromPath(t){return new $(yt.fromString(t))}static fromName(t){return new $(yt.fromString(t).popFirst(5))}static empty(){return new $(yt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&yt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return yt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new $(new yt(t.slice()))}}function IA(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new St(n+1,0):new St(n,r));return new mn(s,$.empty(),t)}function AA(e){return new mn(e.readTime,e.key,-1)}class mn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new mn(W.min(),$.empty(),-1)}static max(){return new mn(W.max(),$.empty(),-1)}}function RA(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=$.comparator(e.documentKey,t.documentKey),n!==0?n:st(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(e){if(e.code!==w.FAILED_PRECONDITION||e.message!==SA)throw e;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new v((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):v.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):v.reject(n)}static resolve(t){return new v((n,r)=>{n(t)})}static reject(t){return new v((n,r)=>{r(t)})}static waitFor(t){return new v((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(t){let n=v.resolve(!1);for(const r of t)n=n.next(s=>s?v.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new v((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new v((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new Ke,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ns(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=vl(r.target.error);this.V.reject(new ns(t,s))}}static open(t,n,r,s){try{return new El(n,t.transaction(s,r))}catch(i){throw new ns(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(V("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new CA(n)}}class Dn{constructor(t,n,r){this.name=t,this.version=n,this.p=r,Dn.S(bi())===12.2&&Le("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return V("SimpleDb","Removing database:",t),Sn(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!$c())return!1;if(Dn.C())return!0;const t=bi(),n=Dn.S(t),r=0<n&&n<10,s=Dn.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new ns(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new F(w.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new F(w.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ns(t,o))},s.onupgradeneeded=i=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=El.open(this.db,t,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),v.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class PA{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Sn(this.k.delete())}}class ns extends F{constructor(t,n){super(w.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Us(e){return e.name==="IndexedDbTransactionError"}class CA{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(V("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Sn(r)}add(t){return V("SimpleDb","ADD",this.store.name,t,t),Sn(this.store.add(t))}get(t){return Sn(this.store.get(t)).next(n=>(n===void 0&&(n=null),V("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return V("SimpleDb","DELETE",this.store.name,t),Sn(this.store.delete(t))}count(){return V("SimpleDb","COUNT",this.store.name),Sn(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new v((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new v((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){V("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new v((r,s)=>{n.onerror=i=>{const o=vl(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new v((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new PA(a),l=n(a.primaryKey,a.value,c);if(l instanceof v){const u=l.catch(h=>(c.done(),v.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>v.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Sn(e){return new v((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=vl(r.target.error);n(s)}})}let bh=!1;function vl(e){const t=Dn.S(bi());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new F("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return bh||(bh=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}wl._e=-1;function Co(e){return e==null}function Fi(e){return e===0&&1/e==-1/0}function VA(e){return typeof e=="number"&&Number.isInteger(e)&&!Fi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Dr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function om(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,n){this.comparator=t,this.root=n||Nt.EMPTY}insert(t,n){return new vt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ri(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ri(this.root,t,this.comparator,!1)}getReverseIterator(){return new ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ri(this.root,t,this.comparator,!0)}}class ri{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Nt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Nt.RED,this.left=s??Nt.EMPTY,this.right=i??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Nt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const t=this.left.check();if(t!==this.right.check())throw z();return t+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Nt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ch(this.data.getIterator())}getIteratorFrom(t){return new Ch(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Lt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Lt(this.comparator);return n.data=t,n}}class Ch{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.fields=t,t.sort(Mt.comparator)}static empty(){return new Ee([])}unionWith(t){let n=new Lt(Mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ee(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Er(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new am("Invalid base64 string: "+i):i}}(t);return new Gt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Gt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return st(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const DA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gn(e){if(ft(!!e),typeof e=="string"){let t=0;const n=DA.exec(e);if(ft(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:At(e.seconds),nanos:At(e.nanos)}}function At(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function jn(e){return typeof e=="string"?Gt.fromBase64String(e):Gt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Il(e){const t=e.mapValue.fields.__previous_value__;return Tl(t)?Il(t):t}function Is(e){const t=gn(e.mapValue.fields.__local_write_time__.timestampValue);return new St(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(t,n,r,s,i,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class As{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new As("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof As&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Tl(e)?4:NA(e)?9007199254740991:10:z()}function Fe(e,t){if(e===t)return!0;const n=qn(e);if(n!==qn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Is(e).isEqual(Is(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=gn(s.timestampValue),a=gn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return jn(s.bytesValue).isEqual(jn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return At(s.geoPointValue.latitude)===At(i.geoPointValue.latitude)&&At(s.geoPointValue.longitude)===At(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return At(s.integerValue)===At(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=At(s.doubleValue),a=At(i.doubleValue);return o===a?Fi(o)===Fi(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Er(e.arrayValue.values||[],t.arrayValue.values||[],Fe);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Ph(o)!==Ph(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Fe(o[c],a[c])))return!1;return!0}(e,t);default:return z()}}function Rs(e,t){return(e.values||[]).find(n=>Fe(n,t))!==void 0}function vr(e,t){if(e===t)return 0;const n=qn(e),r=qn(t);if(n!==r)return st(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return st(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=At(i.integerValue||i.doubleValue),c=At(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Vh(e.timestampValue,t.timestampValue);case 4:return Vh(Is(e),Is(t));case 5:return st(e.stringValue,t.stringValue);case 6:return function(i,o){const a=jn(i),c=jn(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=st(a[l],c[l]);if(u!==0)return u}return st(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=st(At(i.latitude),At(o.latitude));return a!==0?a:st(At(i.longitude),At(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=vr(a[l],c[l]);if(u)return u}return st(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===si.mapValue&&o===si.mapValue)return 0;if(i===si.mapValue)return 1;if(o===si.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=st(c[h],u[h]);if(d!==0)return d;const m=vr(a[c[h]],l[u[h]]);if(m!==0)return m}return st(c.length,u.length)}(e.mapValue,t.mapValue);default:throw z()}}function Vh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return st(e,t);const n=gn(e),r=gn(t),s=st(n.seconds,r.seconds);return s!==0?s:st(n.nanos,r.nanos)}function wr(e){return ac(e)}function ac(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=gn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return jn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return $.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ac(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ac(n.fields[o])}`;return s+"}"}(e.mapValue):z()}function cc(e){return!!e&&"integerValue"in e}function Al(e){return!!e&&"arrayValue"in e}function Dh(e){return!!e&&"nullValue"in e}function xh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function pi(e){return!!e&&"mapValue"in e}function rs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Dr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=rs(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function NA(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.value=t}static empty(){return new fe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!pi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=rs(n)}setAll(t){let n=Mt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=rs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());pi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Fe(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];pi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Dr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new fe(rs(this.value))}}function cm(e){const t=[];return Dr(e.fields,(n,r)=>{const s=new Mt([n]);if(pi(r)){const i=cm(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new Ee(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new jt(t,0,W.min(),W.min(),W.min(),fe.empty(),0)}static newFoundDocument(t,n,r,s){return new jt(t,1,n,W.min(),r,s,0)}static newNoDocument(t,n){return new jt(t,2,n,W.min(),W.min(),fe.empty(),0)}static newUnknownDocument(t,n){return new jt(t,3,n,W.min(),W.min(),fe.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=fe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,n){this.position=t,this.inclusive=n}}function Nh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=vr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Oh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Fe(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,n="asc"){this.field=t,this.dir=n}}function OA(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{}class Rt extends lm{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new kA(t,n,r):n==="array-contains"?new BA(t,r):n==="in"?new UA(t,r):n==="not-in"?new $A(t,r):n==="array-contains-any"?new jA(t,r):new Rt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new LA(t,r):new FA(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vr(n,this.value)):n!==null&&qn(this.value)===qn(n)&&this.matchesComparison(vr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends lm{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Be(t,n)}matches(t){return um(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function um(e){return e.op==="and"}function hm(e){return MA(e)&&um(e)}function MA(e){for(const t of e.filters)if(t instanceof Be)return!1;return!0}function lc(e){if(e instanceof Rt)return e.field.canonicalString()+e.op.toString()+wr(e.value);if(hm(e))return e.filters.map(t=>lc(t)).join(",");{const t=e.filters.map(n=>lc(n)).join(",");return`${e.op}(${t})`}}function fm(e,t){return e instanceof Rt?function(r,s){return s instanceof Rt&&r.op===s.op&&r.field.isEqual(s.field)&&Fe(r.value,s.value)}(e,t):e instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&fm(o,s.filters[a]),!0):!1}(e,t):void z()}function dm(e){return e instanceof Rt?function(n){return`${n.field.canonicalString()} ${n.op} ${wr(n.value)}`}(e):e instanceof Be?function(n){return n.op.toString()+" {"+n.getFilters().map(dm).join(" ,")+"}"}(e):"Filter"}class kA extends Rt{constructor(t,n,r){super(t,n,r),this.key=$.fromName(r.referenceValue)}matches(t){const n=$.comparator(t.key,this.key);return this.matchesComparison(n)}}class LA extends Rt{constructor(t,n){super(t,"in",n),this.keys=pm("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class FA extends Rt{constructor(t,n){super(t,"not-in",n),this.keys=pm("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function pm(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class BA extends Rt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Al(n)&&Rs(n.arrayValue,this.value)}}class UA extends Rt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Rs(this.value.arrayValue,n)}}class $A extends Rt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Rs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Rs(this.value.arrayValue,n)}}class jA extends Rt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Al(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Rs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Mh(e,t=null,n=[],r=[],s=null,i=null,o=null){return new qA(e,t,n,r,s,i,o)}function Rl(e){const t=Y(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>lc(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Co(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>wr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>wr(r)).join(",")),t.ce=n}return t.ce}function Sl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!OA(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!fm(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Oh(e.startAt,t.startAt)&&Oh(e.endAt,t.endAt)}function uc(e){return $.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function zA(e,t,n,r,s,i,o,a){return new Vo(e,t,n,r,s,i,o,a)}function mm(e){return new Vo(e)}function kh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function KA(e){return e.collectionGroup!==null}function ss(e){const t=Y(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Lt(Mt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new Ui(i,r))}),n.has(Mt.keyField().canonicalString())||t.le.push(new Ui(Mt.keyField(),r))}return t.le}function Ne(e){const t=Y(e);return t.he||(t.he=HA(t,ss(e))),t.he}function HA(e,t){if(e.limitType==="F")return Mh(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ui(s.field,i)});const n=e.endAt?new Bi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Bi(e.startAt.position,e.startAt.inclusive):null;return Mh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function hc(e,t,n){return new Vo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Do(e,t){return Sl(Ne(e),Ne(t))&&e.limitType===t.limitType}function gm(e){return`${Rl(Ne(e))}|lt:${e.limitType}`}function nr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>dm(s)).join(", ")}]`),Co(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>wr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>wr(s)).join(",")),`Target(${r})`}(Ne(e))}; limitType=${e.limitType})`}function xo(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of ss(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Nh(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ss(r),s)||r.endAt&&!function(o,a,c){const l=Nh(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ss(r),s))}(e,t)}function GA(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function _m(e){return(t,n)=>{let r=!1;for(const s of ss(e)){const i=WA(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function WA(e,t,n){const r=e.field.isKeyField()?$.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?vr(c,l):z()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Dr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return om(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new vt($.comparator);function We(){return QA}const ym=new vt($.comparator);function Hr(...e){let t=ym;for(const n of e)t=t.insert(n.key,n);return t}function Em(e){let t=ym;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function xn(){return is()}function vm(){return is()}function is(){return new xr(e=>e.toString(),(e,t)=>e.isEqual(t))}const YA=new vt($.comparator),XA=new Lt($.comparator);function tt(...e){let t=XA;for(const n of e)t=t.add(n);return t}const JA=new Lt(st);function ZA(){return JA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fi(t)?"-0":t}}function Tm(e){return{integerValue:""+e}}function t0(e,t){return VA(t)?Tm(t):wm(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this._=void 0}}function e0(e,t,n){return e instanceof $i?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Tl(i)&&(i=Il(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Ss?Am(e,t):e instanceof bs?Rm(e,t):function(s,i){const o=Im(s,i),a=Lh(o)+Lh(s.Ie);return cc(o)&&cc(s.Ie)?Tm(a):wm(s.serializer,a)}(e,t)}function n0(e,t,n){return e instanceof Ss?Am(e,t):e instanceof bs?Rm(e,t):n}function Im(e,t){return e instanceof ji?function(r){return cc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class $i extends No{}class Ss extends No{constructor(t){super(),this.elements=t}}function Am(e,t){const n=Sm(t);for(const r of e.elements)n.some(s=>Fe(s,r))||n.push(r);return{arrayValue:{values:n}}}class bs extends No{constructor(t){super(),this.elements=t}}function Rm(e,t){let n=Sm(t);for(const r of e.elements)n=n.filter(s=>!Fe(s,r));return{arrayValue:{values:n}}}class ji extends No{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Lh(e){return At(e.integerValue||e.doubleValue)}function Sm(e){return Al(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function r0(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Ss&&s instanceof Ss||r instanceof bs&&s instanceof bs?Er(r.elements,s.elements,Fe):r instanceof ji&&s instanceof ji?Fe(r.Ie,s.Ie):r instanceof $i&&s instanceof $i}(e.transform,t.transform)}class s0{constructor(t,n){this.version=t,this.transformResults=n}}class Oe{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Oe}static exists(t){return new Oe(void 0,t)}static updateTime(t){return new Oe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function mi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Oo{}function bm(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new bl(e.key,Oe.none()):new $s(e.key,e.data,Oe.none());{const n=e.data,r=fe.empty();let s=new Lt(Mt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Gn(e.key,r,new Ee(s.toArray()),Oe.none())}}function i0(e,t,n){e instanceof $s?function(s,i,o){const a=s.value.clone(),c=Bh(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Gn?function(s,i,o){if(!mi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Bh(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Pm(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function os(e,t,n,r){return e instanceof $s?function(i,o,a,c){if(!mi(i.precondition,o))return a;const l=i.value.clone(),u=Uh(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Gn?function(i,o,a,c){if(!mi(i.precondition,o))return a;const l=Uh(i.fieldTransforms,c,o),u=o.data;return u.setAll(Pm(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return mi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function o0(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Im(r.transform,s||null);i!=null&&(n===null&&(n=fe.empty()),n.set(r.field,i))}return n||null}function Fh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Er(r,s,(i,o)=>r0(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class $s extends Oo{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gn extends Oo{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pm(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Bh(e,t,n){const r=new Map;ft(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,n0(o,a,n[s]))}return r}function Uh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,e0(i,o,t))}return r}class bl extends Oo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class a0 extends Oo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&i0(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=os(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=os(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=vm();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=bm(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),tt())}isEqual(t){return this.batchId===t.batchId&&Er(this.mutations,t.mutations,(n,r)=>Fh(n,r))&&Er(this.baseMutations,t.baseMutations,(n,r)=>Fh(n,r))}}class Pl{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){ft(t.mutations.length===r.length);let s=function(){return YA}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Pl(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It,et;function h0(e){switch(e){default:return z();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Cm(e){if(e===void 0)return Le("GRPC error has no .code"),w.UNKNOWN;switch(e){case It.OK:return w.OK;case It.CANCELLED:return w.CANCELLED;case It.UNKNOWN:return w.UNKNOWN;case It.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case It.INTERNAL:return w.INTERNAL;case It.UNAVAILABLE:return w.UNAVAILABLE;case It.UNAUTHENTICATED:return w.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case It.NOT_FOUND:return w.NOT_FOUND;case It.ALREADY_EXISTS:return w.ALREADY_EXISTS;case It.PERMISSION_DENIED:return w.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case It.ABORTED:return w.ABORTED;case It.OUT_OF_RANGE:return w.OUT_OF_RANGE;case It.UNIMPLEMENTED:return w.UNIMPLEMENTED;case It.DATA_LOSS:return w.DATA_LOSS;default:return z()}}(et=It||(It={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=new hr([4294967295,4294967295],0);function $h(e){const t=f0().encode(e),n=new dA;return n.update(t),new Uint8Array(n.digest())}function jh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new hr([n,r],0),new hr([s,i],0)]}class Cl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Gr(`Invalid padding: ${n}`);if(r<0)throw new Gr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Gr(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Gr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=hr.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(hr.fromNumber(r)));return s.compare(d0)===1&&(s=new hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=$h(t),[r,s]=jh(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Cl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=$h(t),[r,s]=jh(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Gr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,js.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Mo(W.min(),s,new vt(st),We(),tt())}}class js{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new js(r,n,tt(),tt(),tt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class Vm{constructor(t,n){this.targetId=t,this.fe=n}}class Dm{constructor(t,n,r=Gt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class qh{constructor(){this.ge=0,this.pe=Kh(),this.ye=Gt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=tt(),n=tt(),r=tt();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:z()}}),new js(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Kh()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,ft(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class p0{constructor(t){this.Le=t,this.ke=new Map,this.qe=We(),this.Qe=zh(),this.Ke=new vt(st)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:z()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(uc(i))if(r===0){const o=new $(i.path);this.We(n,o,jt.newNoDocument(o,W.min()))}else ft(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),c=a?this.et(a,t,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=jn(r).toUint8Array()}catch(c){if(c instanceof am)return yr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Cl(o,s,i)}catch(c){return yr(c instanceof Gr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&uc(a.target)){const c=new $(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,jt.newNoDocument(c,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=tt();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Mo(t,n,this.Ke,this.qe,r);return this.qe=We(),this.Qe=zh(),this.Ke=new vt(st),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new qh,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new Lt(st),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||V("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new qh),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function zh(){return new vt($.comparator)}function Kh(){return new vt($.comparator)}const m0={asc:"ASCENDING",desc:"DESCENDING"},g0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_0={and:"AND",or:"OR"};class y0{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function fc(e,t){return e.useProto3Json||Co(t)?t:{value:t}}function qi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xm(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function E0(e,t){return qi(e,t.toTimestamp())}function Me(e){return ft(!!e),W.fromTimestamp(function(n){const r=gn(n);return new St(r.seconds,r.nanos)}(e))}function Vl(e,t){return dc(e,t).canonicalString()}function dc(e,t){const n=function(s){return new yt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Nm(e){const t=yt.fromString(e);return ft(Fm(t)),t}function pc(e,t){return Vl(e.databaseId,t.path)}function Ea(e,t){const n=Nm(t);if(n.get(1)!==e.databaseId.projectId)throw new F(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new F(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new $(Mm(n))}function Om(e,t){return Vl(e.databaseId,t)}function v0(e){const t=Nm(e);return t.length===4?yt.emptyPath():Mm(t)}function mc(e){return new yt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Mm(e){return ft(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Hh(e,t,n){return{name:pc(e,t),fields:n.value.mapValue.fields}}function w0(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ft(u===void 0||typeof u=="string"),Gt.fromBase64String(u||"")):(ft(u===void 0||u instanceof Uint8Array),Gt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?w.UNKNOWN:Cm(l.code);return new F(u,l.message||"")}(o);n=new Dm(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ea(e,r.document.name),i=Me(r.document.updateTime),o=r.document.createTime?Me(r.document.createTime):W.min(),a=new fe({mapValue:{fields:r.document.fields}}),c=jt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new gi(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ea(e,r.document),i=r.readTime?Me(r.readTime):W.min(),o=jt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new gi([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ea(e,r.document),i=r.removedTargetIds||[];n=new gi([],i,s,null)}else{if(!("filter"in t))return z();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new u0(s,i),a=r.targetId;n=new Vm(a,o)}}return n}function T0(e,t){let n;if(t instanceof $s)n={update:Hh(e,t.key,t.value)};else if(t instanceof bl)n={delete:pc(e,t.key)};else if(t instanceof Gn)n={update:Hh(e,t.key,t.data),updateMask:D0(t.fieldMask)};else{if(!(t instanceof a0))return z();n={verify:pc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof $i)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ss)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof bs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ji)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw z()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:E0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(e,t.precondition)),n}function I0(e,t){return e&&e.length>0?(ft(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?Me(s.updateTime):Me(i);return o.isEqual(W.min())&&(o=Me(i)),new s0(o,s.transformResults||[])}(n,t))):[]}function A0(e,t){return{documents:[Om(e,t.path)]}}function R0(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Om(e,s);const i=function(l){if(l.length!==0)return Lm(Be.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:rr(d.field),direction:P0(d.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=fc(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{ut:n,parent:s}}function S0(e){let t=v0(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ft(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=km(h);return d instanceof Be&&hm(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(A){return new Ui(sr(A.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Co(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,m=h.values||[];return new Bi(m,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,m=h.values||[];return new Bi(m,d)}(n.endAt)),zA(t,s,o,i,a,"F",c,l)}function b0(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function km(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=sr(n.unaryFilter.field);return Rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=sr(n.unaryFilter.field);return Rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=sr(n.unaryFilter.field);return Rt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=sr(n.unaryFilter.field);return Rt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(e):e.fieldFilter!==void 0?function(n){return Rt.create(sr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Be.create(n.compositeFilter.filters.map(r=>km(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(n.compositeFilter.op))}(e):z()}function P0(e){return m0[e]}function C0(e){return g0[e]}function V0(e){return _0[e]}function rr(e){return{fieldPath:e.canonicalString()}}function sr(e){return Mt.fromServerFormat(e.fieldPath)}function Lm(e){return e instanceof Rt?function(n){if(n.op==="=="){if(xh(n.value))return{unaryFilter:{field:rr(n.field),op:"IS_NAN"}};if(Dh(n.value))return{unaryFilter:{field:rr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xh(n.value))return{unaryFilter:{field:rr(n.field),op:"IS_NOT_NAN"}};if(Dh(n.value))return{unaryFilter:{field:rr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rr(n.field),op:C0(n.op),value:n.value}}}(e):e instanceof Be?function(n){const r=n.getFilters().map(s=>Lm(s));return r.length===1?r[0]:{compositeFilter:{op:V0(n.op),filters:r}}}(e):z()}function D0(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Fm(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,n,r,s,i=W.min(),o=W.min(),a=Gt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new on(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(t){this.ct=t}}function N0(e){const t=S0({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?hc(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this._n=new M0}addToCollectionParentIndex(t,n){return this._n.add(n),v.resolve()}getCollectionParents(t,n){return v.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return v.resolve()}deleteFieldIndex(t,n){return v.resolve()}deleteAllFieldIndexes(t){return v.resolve()}createTargetIndexes(t,n){return v.resolve()}getDocumentsMatchingTarget(t,n){return v.resolve(null)}getIndexType(t,n){return v.resolve(0)}getFieldIndexes(t,n){return v.resolve([])}getNextCollectionGroupToUpdate(t){return v.resolve(null)}getMinOffset(t,n){return v.resolve(mn.min())}getMinOffsetFromCollectionGroup(t,n){return v.resolve(mn.min())}updateCollectionGroup(t,n,r){return v.resolve()}updateIndexEntries(t,n){return v.resolve()}}class M0{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Lt(yt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Lt(yt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Tr(0)}static Bn(){return new Tr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(){this.changes=new xr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,jt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&os(r.mutation,s,Ee.empty(),St.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,tt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=tt()){const s=xn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Hr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=xn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,tt()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=We();const o=is(),a=function(){return is()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Gn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),os(u.mutation,l,u.mutation.getFieldMask(),St.now())):o.set(l.key,Ee.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new L0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=is();let s=new vt((o,a)=>o-a),i=tt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Ee.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||tt()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=vm();u.forEach(d=>{if(!i.has(d)){const m=bm(n.get(d),r.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):KA(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):v.resolve(xn());let a=-1,c=i;return o.next(l=>v.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?v.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,tt())).next(u=>({batchId:a,changes:Em(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new $(n)).next(r=>{let s=Hr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=Hr();return this.indexManager.getCollectionParents(t,i).next(a=>v.forEach(a,c=>{const l=function(h,d){return new Vo(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,jt.newInvalidDocument(u)))});let a=Hr();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&os(u.mutation,l,Ee.empty(),St.now()),xo(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return v.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Me(s.createTime)}}(n)),v.resolve()}getNamedQuery(t,n){return v.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:N0(s.bundledQuery),readTime:Me(s.readTime)}}(n)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.overlays=new vt($.comparator),this.hr=new Map}getOverlay(t,n){return v.resolve(this.overlays.get(n))}getOverlays(t,n){const r=xn();return v.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),v.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),v.resolve()}getOverlaysForCollection(t,n,r){const s=xn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return v.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new vt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=xn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=xn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return v.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new l0(n,r));let i=this.hr.get(n);i===void 0&&(i=tt(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.Pr=new Lt(Vt.Ir),this.Tr=new Lt(Vt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new Vt(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new Vt(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new $(new yt([])),r=new Vt(n,t),s=new Vt(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new $(new yt([])),r=new Vt(n,t),s=new Vt(n,t+1);let i=tt();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Vt(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Vt{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return $.comparator(t.key,n.key)||st(t.pr,n.pr)}static Er(t,n){return st(t.pr,n.pr)||$.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Lt(Vt.Ir)}checkEmpty(t){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new c0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Vt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(t,n){return v.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Vt(n,0),s=new Vt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Lt(st);return n.forEach(s=>{const i=new Vt(s,0),o=new Vt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),v.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const o=new Vt(new $(i),0);let a=new Lt(st);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),v.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){ft(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return v.forEach(n.mutations,s=>{const i=new Vt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new Vt(n,0),s=this.wr.firstAfterOrEqual(r);return v.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,v.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(t){this.vr=t,this.docs=function(){return new vt($.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(t,n){let r=We();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():jt.newInvalidDocument(s))}),v.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=We();const o=n.path,a=new $(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||RA(AA(u),r)<=0||(s.has(u.key)||xo(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return v.resolve(i)}getAllFromCollectionGroup(t,n,r,s){z()}Fr(t,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new q0(this)}getSize(t){return v.resolve(this.size)}}class q0 extends k0{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),v.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(t){this.persistence=t,this.Mr=new xr(n=>Rl(n),Sl),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Dl,this.targetCount=0,this.Br=Tr.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),v.resolve()}getLastRemoteSnapshotVersion(t){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return v.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),v.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new Tr(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,v.resolve()}updateTargetData(t,n){return this.qn(n),v.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),v.waitFor(i).next(()=>s)}getTargetCount(t){return v.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return v.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),v.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),v.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),v.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return v.resolve(r)}containsKey(t,n){return v.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(t,n){this.Lr={},this.overlays={},this.kr=new wl(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new z0(this),this.indexManager=new O0,this.remoteDocumentCache=function(s){return new j0(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new x0(n),this.$r=new B0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new U0,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new $0(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){V("MemoryPersistence","Starting transaction:",t);const s=new H0(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return v.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class H0 extends bA{constructor(t){super(),this.currentSequenceNumber=t}}class xl{constructor(t){this.persistence=t,this.zr=new Dl,this.jr=null}static Hr(t){return new xl(t)}get Jr(){if(this.jr)return this.jr;throw z()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),v.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),v.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),v.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Jr,r=>{const s=$.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,W.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return v.or([()=>v.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=tt(),s=tt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Nl(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return mv()?8:Dn.v(bi())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new G0;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?($r()<=rt.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",nr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),v.resolve()):($r()<=rt.DEBUG&&V("QueryEngine","Query:",nr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?($r()<=rt.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",nr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ne(n))):v.resolve())}ji(t,n){if(kh(n))return v.resolve(null);let r=Ne(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=hc(n,null,"F"),r=Ne(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=tt(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(t,hc(n,null,"F")):this.es(t,l,n,c)}))})))}Hi(t,n,r,s){return kh(n)||s.isEqual(W.min())?v.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?v.resolve(null):($r()<=rt.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),nr(n)),this.es(t,o,n,IA(s,-1)).next(a=>a))})}Zi(t,n){let r=new Lt(_m(t));return n.forEach((s,i)=>{xo(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return $r()<=rt.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",nr(n)),this.zi.getDocumentsMatchingQuery(t,n,mn.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new vt(st),this.rs=new xr(i=>Rl(i),Sl),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new F0(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function Y0(e,t,n,r){return new Q0(e,t,n,r)}async function Bm(e,t){const n=Y(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=tt();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function X0(e,t){const n=Y(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let m=v.resolve();return d.forEach(A=>{m=m.next(()=>u.getEntry(c,A)).next(R=>{const T=l.docVersions.get(A);ft(T!==null),R.version.compareTo(T)<0&&(h.applyToRemoteDocument(R,l),R.isValidDocument()&&(R.setReadTime(l.commitVersion),u.addEntry(R)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=tt();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Um(e){const t=Y(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function J0(e,t){const n=Y(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(Gt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(R,T,C){return R.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,m,u)&&a.push(n.Qr.updateTargetData(i,m))});let c=We(),l=tt();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Z0(i,o,t.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(W.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return v.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function Z0(e,t,n){let r=tt(),s=tt();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=We();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function tR(e,t){const n=Y(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function eR(e,t){const n=Y(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,v.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new on(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function gc(e,t,n){const r=Y(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Us(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Gh(e,t,n){const r=Y(e);let s=W.min(),i=tt();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=Y(c),d=h.rs.get(u);return d!==void 0?v.resolve(h.ns.get(d)):h.Qr.getTargetData(l,u)}(r,o,Ne(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:W.min(),n?i:tt())).next(a=>(nR(r,GA(t),a),{documents:a,hs:i})))}function nR(e,t,n){let r=e.ss.get(t)||W.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class Wh{constructor(){this.activeTargetIds=ZA()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rR{constructor(){this.no=new Wh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Wh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii=null;function va(){return ii===null?ii=function(){return 268435456+Math.round(2147483648*Math.random())}():ii++,"0x"+ii.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection";class aR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=va(),c=this.bo(n,r.toUriEncodedString());V("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(V("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw yr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=iR[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=va();return new Promise((o,a)=>{const c=new fA;c.setWithCredentials(!0),c.listenOnce(uA.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ya.NO_ERROR:const u=c.getResponseJson();V(Ut,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case ya.TIMEOUT:V(Ut,`RPC '${t}' ${i} timed out`),a(new F(w.DEADLINE_EXCEEDED,"Request time out"));break;case ya.HTTP_ERROR:const h=c.getStatus();if(V(Ut,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const A=function(T){const C=T.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(C)>=0?C:w.UNKNOWN}(m.status);a(new F(A,m.message))}else a(new F(w.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new F(w.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{V(Ut,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(s);V(Ut,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(t,n,r){const s=va(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=cA(),a=lA(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");V(Ut,`Creating RPC '${t}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,m=!1;const A=new oR({lo:T=>{m?V(Ut,`Not sending because RPC '${t}' stream ${s} is closed:`,T):(d||(V(Ut,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),V(Ut,`RPC '${t}' stream ${s} sending:`,T),h.send(T))},ho:()=>h.close()}),R=(T,C,k)=>{T.listen(C,B=>{try{k(B)}catch(J){setTimeout(()=>{throw J},0)}})};return R(h,ni.EventType.OPEN,()=>{m||V(Ut,`RPC '${t}' stream ${s} transport opened.`)}),R(h,ni.EventType.CLOSE,()=>{m||(m=!0,V(Ut,`RPC '${t}' stream ${s} transport closed`),A.Vo())}),R(h,ni.EventType.ERROR,T=>{m||(m=!0,yr(Ut,`RPC '${t}' stream ${s} transport errored:`,T),A.Vo(new F(w.UNAVAILABLE,"The operation could not be completed")))}),R(h,ni.EventType.MESSAGE,T=>{var C;if(!m){const k=T.data[0];ft(!!k);const B=k,J=B.error||((C=B[0])===null||C===void 0?void 0:C.error);if(J){V(Ut,`RPC '${t}' stream ${s} received error:`,J);const dt=J.status;let q=function(Ye){const ie=It[Ye];if(ie!==void 0)return Cm(ie)}(dt),Tt=J.message;q===void 0&&(q=w.INTERNAL,Tt="Unknown error status: "+dt+" with message "+J.message),m=!0,A.Vo(new F(q,Tt)),h.close()}else V(Ut,`RPC '${t}' stream ${s} received:`,k),A.mo(k)}}),R(a,hA.STAT_EVENT,T=>{T.stat===Rh.PROXY?V(Ut,`RPC '${t}' stream ${s} detected buffering proxy`):T.stat===Rh.NOPROXY&&V(Ut,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.Ro()},0),A}}function wa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(e){return new y0(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(t,n,r,s,i,o,a,c){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new $m(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(Le(n.toString()),Le("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new F(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cR extends jm{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=w0(this.serializer,t),r=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?Me(o.readTime):W.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=mc(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=uc(c)?{documents:A0(i,c)}:{query:R0(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xm(i,o.resumeToken);const l=fc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=qi(i,o.snapshotVersion.toTimestamp());const l=fc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=b0(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=mc(this.serializer),n.removeTarget=t,this.t_(n)}}class lR extends jm{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(ft(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=I0(t.writeResults,t.commitTime),r=Me(t.commitTime);return this.listener.T_(r,n)}return ft(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=mc(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>T0(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new F(w.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,dc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(w.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,dc(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(w.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class hR{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Le(n),this.g_=!1):V("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Wn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Y(c);l.v_.add(4),await qs(l),l.x_.set("Unknown"),l.v_.delete(4),await Lo(l)}(this))})}),this.x_=new hR(r,s)}}async function Lo(e){if(Wn(e))for(const t of e.F_)await t(!0)}async function qs(e){for(const t of e.F_)await t(!1)}function qm(e,t){const n=Y(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),kl(n)?Ml(n):Nr(n).Jo()&&Ol(n,t))}function zm(e,t){const n=Y(e),r=Nr(n);n.C_.delete(t),r.Jo()&&Km(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Wn(n)&&n.x_.set("Unknown"))}function Ol(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(W.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Nr(e).c_(t)}function Km(e,t){e.O_.Oe(t),Nr(e).l_(t)}function Ml(e){e.O_=new p0({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Nr(e).start(),e.x_.p_()}function kl(e){return Wn(e)&&!Nr(e).Ho()&&e.C_.size>0}function Wn(e){return Y(e).v_.size===0}function Hm(e){e.O_=void 0}async function dR(e){e.C_.forEach((t,n)=>{Ol(e,t)})}async function pR(e,t){Hm(e),kl(e)?(e.x_.S_(t),Ml(e)):e.x_.set("Unknown")}async function mR(e,t,n){if(e.x_.set("Online"),t instanceof Dm&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await zi(e,r)}else if(t instanceof gi?e.O_.$e(t):t instanceof Vm?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(W.min()))try{const r=await Um(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(Gt.EMPTY_BYTE_STRING,u.snapshotVersion)),Km(i,c);const h=new on(u.target,c,l,u.sequenceNumber);Ol(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await zi(e,r)}}async function zi(e,t,n){if(!Us(t))throw t;e.v_.add(1),await qs(e),e.x_.set("Offline"),n||(n=()=>Um(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Lo(e)})}function Gm(e,t){return t().catch(n=>zi(e,n,t))}async function Fo(e){const t=Y(e),n=_n(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;gR(t);)try{const s=await tR(t.localStore,r);if(s===null){t.D_.length===0&&n.Xo();break}r=s.batchId,_R(t,s)}catch(s){await zi(t,s)}Wm(t)&&Qm(t)}function gR(e){return Wn(e)&&e.D_.length<10}function _R(e,t){e.D_.push(t);const n=_n(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function Wm(e){return Wn(e)&&!_n(e).Ho()&&e.D_.length>0}function Qm(e){_n(e).start()}async function yR(e){_n(e).d_()}async function ER(e){const t=_n(e);for(const n of e.D_)t.I_(n.mutations)}async function vR(e,t,n){const r=e.D_.shift(),s=Pl.from(r,t,n);await Gm(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Fo(e)}async function wR(e,t){t&&_n(e).P_&&await async function(r,s){if(function(o){return h0(o)&&o!==w.ABORTED}(s.code)){const i=r.D_.shift();_n(r).Zo(),await Gm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Fo(r)}}(e,t),Wm(e)&&Qm(e)}async function Yh(e,t){const n=Y(e);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Wn(n);n.v_.add(3),await qs(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Lo(n)}async function TR(e,t){const n=Y(e);t?(n.v_.delete(2),await Lo(n)):t||(n.v_.add(2),await qs(n),n.x_.set("Unknown"))}function Nr(e){return e.N_||(e.N_=function(n,r,s){const i=Y(n);return i.R_(),new cR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:dR.bind(null,e),To:pR.bind(null,e),u_:mR.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),kl(e)?Ml(e):e.x_.set("Unknown")):(await e.N_.stop(),Hm(e))})),e.N_}function _n(e){return e.B_||(e.B_=function(n,r,s){const i=Y(n);return i.R_(),new lR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:yR.bind(null,e),To:wR.bind(null,e),E_:ER.bind(null,e),T_:vR.bind(null,e)}),e.F_.push(async t=>{t?(e.B_.Zo(),await Fo(e)):(await e.B_.stop(),e.D_.length>0&&(V("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ke,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Ll(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fl(e,t){if(Le("AsyncQueue",`${t}: ${e}`),Us(e))return new F(w.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t){this.comparator=t?(n,r)=>t(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Hr(),this.sortedSet=new vt(this.comparator)}static emptySet(t){return new fr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof fr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new fr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.L_=new vt($.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):z():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Ir{constructor(t,n,r,s,i,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ir(t,n,fr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Do(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.q_=void 0,this.Q_=[]}}class AR{constructor(){this.queries=new xr(t=>gm(t),Do),this.onlineState="Unknown",this.K_=new Set}}async function RR(e,t){const n=Y(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new IR),s)try{i.q_=await n.onListen(r)}catch(o){const a=Fl(o,`Initialization of query '${nr(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.Q_.push(t),t.U_(n.onlineState),i.q_&&t.W_(i.q_)&&Bl(n)}async function SR(e,t){const n=Y(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function bR(e,t){const n=Y(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&Bl(n)}function PR(e,t,n){const r=Y(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function Bl(e){e.K_.forEach(t=>{t.next()})}class CR{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ir(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=Ir.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(t){this.key=t}}class Xm{constructor(t){this.key=t}}class VR{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=tt(),this.mutatedKeys=tt(),this.ua=_m(t),this.ca=new fr(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new Xh,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const d=s.get(u),m=xo(this.query,h)?h:null,A=!!d&&this.mutatedKeys.has(d.key),R=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;d&&m?d.data.isEqual(m.data)?A!==R&&(r.track({type:3,doc:m}),T=!0):this.Ia(d,m)||(r.track({type:2,doc:m}),T=!0,(c&&this.ua(m,c)>0||l&&this.ua(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),T=!0):d&&!m&&(r.track({type:1,doc:d}),T=!0,(c||l)&&(a=!0)),T&&(m?(o=o.add(m),i=R?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((u,h)=>function(m,A){const R=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return R(m)-R(A)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=n&&!s?this.Ea():[],c=this.aa.size===0&&this.current&&!s?1:0,l=c!==this._a;return this._a=c,o.length!==0||l?{snapshot:new Ir(this.query,t.ca,i,o,t.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Xh,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=tt(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new Xm(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new Ym(r))}),n}Ra(t){this.oa=t.hs,this.aa=tt();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return Ir.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class DR{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class xR{constructor(t){this.key=t,this.ma=!1}}class NR{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new xr(a=>gm(a),Do),this.pa=new Map,this.ya=new Set,this.wa=new vt($.comparator),this.Sa=new Map,this.ba=new Dl,this.Da={},this.Ca=new Map,this.va=Tr.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function OR(e,t){const n=zR(e);let r,s;const i=n.ga.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await eR(n.localStore,Ne(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await MR(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&qm(n.remoteStore,o)}return s}async function MR(e,t,n,r,s){e.Ma=(h,d,m)=>async function(R,T,C,k){let B=T.view.ha(C);B.Xi&&(B=await Gh(R.localStore,T.query,!1).then(({documents:Tt})=>T.view.ha(Tt,B)));const J=k&&k.targetChanges.get(T.targetId),dt=k&&k.targetMismatches.get(T.targetId)!=null,q=T.view.applyChanges(B,R.isPrimaryClient,J,dt);return Zh(R,T.targetId,q.da),q.snapshot}(e,h,d,m);const i=await Gh(e.localStore,t,!0),o=new VR(t,i.hs),a=o.ha(i.documents),c=js.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),l=o.applyChanges(a,e.isPrimaryClient,c);Zh(e,n,l.da);const u=new DR(t,n,o);return e.ga.set(t,u),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),l.snapshot}async function kR(e,t){const n=Y(e),r=n.ga.get(t),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Do(i,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await gc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),zm(n.remoteStore,r.targetId),_c(n,r.targetId)}).catch(Bs)):(_c(n,r.targetId),await gc(n.localStore,r.targetId,!0))}async function LR(e,t,n){const r=KR(e);try{const s=await function(o,a){const c=Y(o),l=St.now(),u=a.reduce((m,A)=>m.add(A.key),tt());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let A=We(),R=tt();return c.os.getEntries(m,u).next(T=>{A=T,A.forEach((C,k)=>{k.isValidDocument()||(R=R.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,A)).next(T=>{h=T;const C=[];for(const k of a){const B=o0(k,h.get(k.key).overlayedDocument);B!=null&&C.push(new Gn(k.key,B,cm(B.value.mapValue),Oe.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,C,a)}).next(T=>{d=T;const C=T.applyToLocalDocumentSet(h,R);return c.documentOverlayCache.saveOverlays(m,T.batchId,C)})}).then(()=>({batchId:d.batchId,changes:Em(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new vt(st)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await zs(r,s.changes),await Fo(r.remoteStore)}catch(s){const i=Fl(s,"Failed to persist write");n.reject(i)}}async function Jm(e,t){const n=Y(e);try{const r=await J0(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(ft(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?ft(o.ma):s.removedDocuments.size>0&&(ft(o.ma),o.ma=!1))}),await zs(n,r,t)}catch(r){await Bs(r)}}function Jh(e,t,n){const r=Y(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Y(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.Q_)d.U_(a)&&(l=!0)}),l&&Bl(c)}(r.eventManager,t),s.length&&r.fa.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function FR(e,t,n){const r=Y(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Sa.get(t),i=s&&s.key;if(i){let o=new vt($.comparator);o=o.insert(i,jt.newNoDocument(i,W.min()));const a=tt().add(i),c=new Mo(W.min(),new Map,new vt(st),o,a);await Jm(r,c),r.wa=r.wa.remove(i),r.Sa.delete(t),Ul(r)}else await gc(r.localStore,t,!1).then(()=>_c(r,t,n)).catch(Bs)}async function BR(e,t){const n=Y(e),r=t.batch.batchId;try{const s=await X0(n.localStore,t);tg(n,r,null),Zm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zs(n,s)}catch(s){await Bs(s)}}async function UR(e,t,n){const r=Y(e);try{const s=await function(o,a){const c=Y(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ft(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);tg(r,t,n),Zm(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await zs(r,s)}catch(s){await Bs(s)}}function Zm(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function tg(e,t,n){const r=Y(e);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Da[r.currentUser.toKey()]=s}}function _c(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||eg(e,r)})}function eg(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(zm(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),Ul(e))}function Zh(e,t,n){for(const r of n)r instanceof Ym?(e.ba.addReference(r.key,t),$R(e,r)):r instanceof Xm?(V("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||eg(e,r.key)):z()}function $R(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(V("SyncEngine","New document in limbo: "+n),e.ya.add(r),Ul(e))}function Ul(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new $(yt.fromString(t)),r=e.va.next();e.Sa.set(r,new xR(n)),e.wa=e.wa.insert(n,r),qm(e.remoteStore,new on(Ne(mm(n.path)),r,"TargetPurposeLimboResolution",wl._e))}}async function zs(e,t,n){const r=Y(e),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Nl.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.u_(s),await async function(c,l){const u=Y(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>v.forEach(l,d=>v.forEach(d.qi,m=>u.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>v.forEach(d.Qi,m=>u.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Us(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const m=u.ns.get(d),A=m.snapshotVersion,R=m.withLastLimboFreeSnapshotVersion(A);u.ns=u.ns.insert(d,R)}}}(r.localStore,i))}async function jR(e,t){const n=Y(e);if(!n.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const r=await Bm(n.localStore,t);n.currentUser=t,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new F(w.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await zs(n,r.us)}}function qR(e,t){const n=Y(e),r=n.Sa.get(t);if(r&&r.ma)return tt().add(r.key);{let s=tt();const i=n.pa.get(t);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function zR(e){const t=Y(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Jm.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=qR.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=FR.bind(null,t),t.fa.u_=bR.bind(null,t.eventManager),t.fa.xa=PR.bind(null,t.eventManager),t}function KR(e){const t=Y(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=BR.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=UR.bind(null,t),t}class tf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ko(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Y0(this.persistence,new W0,t.initialUser,this.serializer)}createPersistence(t){return new K0(xl.Hr,this.serializer)}createSharedClientState(t){return new rR}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class HR{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jR.bind(null,this.syncEngine),await TR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new AR}()}createDatastore(t){const n=ko(t.databaseInfo.databaseId),r=function(i){return new aR(i)}(t.databaseInfo);return function(i,o,a,c){return new uR(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new fR(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Jh(this.syncEngine,n,0),function(){return Qh.D()?new Qh:new sR}())}createSyncEngine(t,n){return function(s,i,o,a,c,l,u){const h=new NR(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=Y(r);V("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await qs(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Le("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=$t.UNAUTHENTICATED,this.clientId=im.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ke;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Fl(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ta(e,t){e.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bm(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ef(e,t){e.asyncQueue.verifyOperationInProgress();const n=await YR(e);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Yh(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Yh(t.remoteStore,s)),e._onlineComponents=t}function QR(e){return e.name==="FirebaseError"?e.code===w.FAILED_PRECONDITION||e.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function YR(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ta(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!QR(n))throw n;yr("Error using user provided cache. Falling back to memory cache: "+n),await Ta(e,new tf)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Ta(e,new tf);return e._offlineComponents}async function ng(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await ef(e,e._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await ef(e,new HR))),e._onlineComponents}function XR(e){return ng(e).then(t=>t.syncEngine)}async function JR(e){const t=await ng(e),n=t.eventManager;return n.onListen=OR.bind(null,t.syncEngine),n.onUnlisten=kR.bind(null,t.syncEngine),n}function ZR(e,t,n={}){const r=new Ke;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new GR({next:d=>{o.enqueueAndForget(()=>SR(i,h)),d.fromCache&&c.source==="server"?l.reject(new F(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new CR(a,u,{includeMetadataChanges:!0,Z_:!0});return RR(i,h)}(await JR(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(e,t,n){if(!n)throw new F(w.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function tS(e,t,n,r){if(t===!0&&r===!0)throw new F(w.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function rf(e){if(!$.isDocumentKey(e))throw new F(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function sf(e){if($.isDocumentKey(e))throw new F(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function $l(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":z()}function Ar(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new F(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$l(e);throw new F(w.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new F(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new F(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tS("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rg((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Bo{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new of({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new F(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new of(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pA;switch(r.type){case"firstParty":return new yA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=nf.get(n);r&&(V("ComponentProvider","Removing Datastore"),nf.delete(n),r.terminate())}(this),Promise.resolve()}}function eS(e,t,n,r={}){var s;const i=(e=Ar(e,Bo))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=$t.MOCK_USER;else{a=fv(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new F(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new $t(l)}e._authCredentials=new mA(new sm(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Uo(this.firestore,t,this._query)}}class pe{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pe(this.firestore,t,this._key)}}class fn extends Uo{constructor(t,n,r){super(t,n,mm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pe(this.firestore,null,new $(t))}withConverter(t){return new fn(this.firestore,t,this._path)}}function nS(e,t,...n){if(e=Ln(e),sg("collection","path",t),e instanceof Bo){const r=yt.fromString(t,...n);return sf(r),new fn(e,null,r)}{if(!(e instanceof pe||e instanceof fn))throw new F(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(yt.fromString(t,...n));return sf(r),new fn(e.firestore,null,r)}}function af(e,t,...n){if(e=Ln(e),arguments.length===1&&(t=im.newId()),sg("doc","path",t),e instanceof Bo){const r=yt.fromString(t,...n);return rf(r),new pe(e,null,new $(r))}{if(!(e instanceof pe||e instanceof fn))throw new F(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(yt.fromString(t,...n));return rf(r),new pe(e.firestore,e instanceof fn?e.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new $m(this,"async_queue_retry"),this._u=()=>{const n=wa();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=wa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=wa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new Ke;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Us(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Le("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const s=Ll.createAndSchedule(this,t,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&z()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}class $o extends Bo{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new rS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||og(this),this._firestoreClient.terminate()}}function sS(e,t){const n=typeof e=="object"?e:Pd(),r=typeof e=="string"?e:t||"(default)",s=Vs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=uv("firestore");i&&eS(s,...i)}return s}function ig(e){return e._firestoreClient||og(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function og(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,l,u){return new xA(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,rg(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new WR(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rr(Gt.fromBase64String(t))}catch(n){throw new F(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Rr(Gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new F(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new F(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new F(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return st(this._lat,t._lat)||st(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=/^__.*__$/;class oS{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Gn(t,this.data,this.fieldMask,n,this.fieldTransforms):new $s(t,this.data,n,this.fieldTransforms)}}function cg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class zl{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new zl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Au({path:r,Vu:!1});return s.mu(t),s}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Ki(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(cg(this.du)&&iS.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class aS{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||ko(t)}Su(t,n,r,s=!1){return new zl({du:t,methodName:n,wu:r,path:Mt.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cS(e){const t=e._freezeSettings(),n=ko(e._databaseId);return new aS(e._databaseId,!!t.ignoreUndefinedProperties,n)}function lS(e,t,n,r,s,i={}){const o=e.Su(i.merge||i.mergeFields?2:0,t,n,s);fg("Data must be an object, but it was:",o,r);const a=ug(r,o);let c,l;if(i.merge)c=new Ee(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=uS(t,h,n);if(!o.contains(d))throw new F(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);fS(u,d)||u.push(d)}c=new Ee(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new oS(new fe(a),c,l)}function lg(e,t){if(hg(e=Ln(e)))return fg("Unsupported field value:",t,e),ug(e,t);if(e instanceof ag)return function(r,s){if(!cg(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=lg(a,s.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Ln(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return t0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=St.fromDate(r);return{timestampValue:qi(s.serializer,i)}}if(r instanceof St){const i=new St(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qi(s.serializer,i)}}if(r instanceof ql)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rr)return{bytesValue:xm(s.serializer,r._byteString)};if(r instanceof pe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vl(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${$l(r)}`)}(e,t)}function ug(e,t){const n={};return om(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Dr(e,(r,s)=>{const i=lg(s,t.Ru(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function hg(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof St||e instanceof ql||e instanceof Rr||e instanceof pe||e instanceof ag)}function fg(e,t,n){if(!hg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=$l(n);throw r==="an object"?t.pu(e+" a custom object"):t.pu(e+" "+r)}}function uS(e,t,n){if((t=Ln(t))instanceof jl)return t._internalPath;if(typeof t=="string")return dg(e,t);throw Ki("Field path arguments must be of type string or ",e,!1,void 0,n)}const hS=new RegExp("[~\\*/\\[\\]]");function dg(e,t,n){if(t.search(hS)>=0)throw Ki(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new jl(...t.split("."))._internalPath}catch{throw Ki(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ki(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new F(w.INVALID_ARGUMENT,a+e+c)}function fS(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new dS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(mg("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dS extends pg{data(){return super.data()}}function mg(e,t){return typeof t=="string"?dg(e,t):t instanceof jl?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new F(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mS{convertValue(t,n="none"){switch(qn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return At(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(jn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw z()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Dr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new ql(At(t.latitude),At(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Il(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Is(t));default:return null}}convertTimestamp(t){const n=gn(t);return new St(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=yt.fromString(t);ft(Fm(r));const s=new As(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(n)||Le(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _S extends pg{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new _i(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(mg("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class _i extends _S{data(t={}){return super.data(t)}}class yS{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new oi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new _i(this._firestore,this._userDataWriter,r.key,r,new oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new _i(s._firestore,s._userDataWriter,a.doc.key,a.doc,new oi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new _i(s._firestore,s._userDataWriter,a.doc.key,a.doc,new oi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:ES(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ES(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}class vS extends mS{constructor(t){super(),this.firestore=t}convertBytes(t){return new Rr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new pe(this.firestore,null,n)}}function wS(e){e=Ar(e,Uo);const t=Ar(e.firestore,$o),n=ig(t),r=new vS(t);return pS(e._query),ZR(n,e._query).then(s=>new yS(t,r,e,s))}function TS(e,t,n){e=Ar(e,pe);const r=Ar(e.firestore,$o),s=gS(e.converter,t,n);return gg(r,[lS(cS(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,Oe.none())])}function IS(e){return gg(Ar(e.firestore,$o),[new bl(e._key,Oe.none())])}function gg(e,t){return function(r,s){const i=new Ke;return r.asyncQueue.enqueueAndForget(async()=>LR(await XR(r),s,i)),i.promise}(ig(e),t)}(function(t,n=!0){(function(s){Vr=s})(vw),pn(new He("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new $o(new gA(r.getProvider("auth-internal")),new vA(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new F(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new As(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),xe(Sh,"4.4.1",t),xe(Sh,"4.4.1","esm2017")})();const AS={apiKey:"AIzaSyA9FHvgcEnj6gOFr3XN9k2afUAJkYkpt4Q",authDomain:"sarangem-4a293.firebaseapp.com",projectId:"sarangem-4a293",storageBucket:"sarangem-4a293.appspot.com",messagingSenderId:"505129822335",appId:"1:505129822335:web:f01ec4e7e445c7d3b4374a",measurementId:"G-EFKE2348KH"},_g=bd(AS),Ia=sS(_g);sI(_g);const yg=e=>(to("data-v-8b944a9c"),e=e(),eo(),e),RS={class:"mainWrapper"},SS={class:"toggles_wrapper"},bS=yg(()=>X("div",{class:"title"}," MOKJANG GROUP GENERATOR ",-1)),PS={class:"generateButtonWrapper"},CS={class:"leaders_wrapper"},VS=yg(()=>X("div",{class:"title"}," LEADERS ",-1)),DS={class:"leader_wrapper"},xS={class:"leadername"},NS={class:"edit_wrapper"},OS={class:"addNewMemberButtonWrapper"},MS={class:"addMemberInput"},kS={class:"buttonWrapper"},LS={class:"member_wrapper"},FS={class:"name"},BS=["onClick"],US={class:"confirmBox"},$S={class:"modalWrapper"},jS={class:"coloredText"},qS={class:"buttonWrapper"},zS={components:{ToggleButton:vd},data(){return{showAddMember:!1,newMember:"",leaders:[{name:"👑 Gloria 👑",attendance:!0},{name:"🏎️ Mingu 🏎️",attendance:!0}],teamGloria:[],teamMingu:[],showModal:!1,selectedMember:""}},computed:{members:function(){return qr.members}},methods:{async getMembers(){const e=nS(Ia,"generator"),n=(await wS(e)).docs.map(r=>r.data());return qr.members=n,n},toggleCheckbox(e){e.attendance=!e.attendance},async addNewMember(e){e&&!this.members.find(t=>t.name===e)?(this.members.push({name:e,attendance:!0}),await TS(af(Ia,"generator",e),{name:e,attendance:!0})):console.log("duplicate"),this.newMember="",this.showAddMember=!this.showAddMember},toggleAddNewMember(){this.showAddMember=!this.showAddMember},async removeMember(e){this.closeModal(),qr.members=this.members.filter(t=>t.name!==e),await IS(af(Ia,"generator",e))},removeLeader(e){qr.leaders=this.leaders.filter(t=>t.name!==e.name)},confirmRemove(e){this.selectedMember=e.name,this.openModal()},openModal(){this.showModal=!0},closeModal(){this.showModal=!1}},mounted(){},created(){this.getMembers()}},KS=Object.assign(zS,{__name:"MemberPage",setup(e){return(t,n)=>{const r=jf("RouterLink");return le(),ue("div",RS,[X("div",SS,[bS,X("div",PS,[Qt(r,{to:"/result",class:"resultPageLink"},{default:Nc(()=>[Xr(" Next ")]),_:1})]),X("div",CS,[VS,(le(!0),ue(Zt,null,wi(t.leaders,s=>(le(),ue("div",DS,[X("div",xS,Wr(s.name),1)]))),256))]),X("div",NS,[X("div",null,[X("div",OS,[X("button",{onClick:n[0]||(n[0]=s=>t.toggleAddNewMember()),class:"addNewMemberButton"},"Add New Member ")]),Ko(X("div",MS,[Ko(X("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=s=>t.newMember=s),placeholder:"Type a name to add!",required:"",ref:"nameInput",class:"inputBox"},null,512),[[Ny,t.newMember]]),X("div",kS,[X("button",{onClick:n[2]||(n[2]=s=>t.addNewMember(t.newMember)),class:"button"},"ADD ")])],512),[[yu,t.showAddMember]])])]),X("div",LS,[(le(!0),ue(Zt,null,wi(t.members,s=>(le(),ue("div",{class:"member",key:s.name},[X("div",FS,Wr(s.name[0].toUpperCase()+s.name.slice(1)),1),Qt(vd,{member:s},null,8,["member"]),X("button",{class:"removeMemberButton",onClick:i=>t.confirmRemove(s)},"X",8,BS)]))),128))]),Ko(X("div",US,[X("div",$S,[X("div",null,[Xr(" Are you sure you wish to delete "),X("span",jS,Wr(t.selectedMember),1),Xr(" from the list? ")]),X("div",qS,[X("button",{class:"yesButton",onClick:n[3]||(n[3]=s=>t.removeMember(t.selectedMember))},"Yes"),X("button",{class:"cancelButton",onClick:n[4]||(n[4]=(...s)=>t.closeModal&&t.closeModal(...s))},"Cancel")])])],512),[[yu,t.showModal]])])])}}}),HS=co(KS,[["__scopeId","data-v-8b944a9c"]]),Eg=e=>(to("data-v-a1c2db92"),e=e(),eo(),e),GS={class:"mainWrapper"},WS={class:"generateButtonWrapper"},QS={class:"resultWrapper"},YS={class:"teamWrapper"},XS=Eg(()=>X("h1",{class:"title"},"Team Gloria",-1)),JS={class:"members"},ZS={class:"teamWrapper minguTeamWrapper"},tb=Eg(()=>X("h1",{class:"title"},"Team Mingu",-1)),eb={class:"members"},nb={components:{},data(){return{teamGloria:[],teamMingu:[]}},methods:{shuffle(e){const t=e.map(n=>n);for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t},generateTeam(){this.teamGloria=[],this.teamMingu=[];const e=qr.members.filter(n=>n.attendance===!0);this.shuffle(e).forEach((n,r)=>{r%2===0?this.teamGloria.push(n):this.teamMingu.push(n)})}}},rb=Object.assign(nb,{__name:"ResultPage",setup(e){return(t,n)=>{const r=jf("RouterLink");return le(),ue("div",GS,[Qt(r,{to:"/",class:"backButton"},{default:Nc(()=>[Xr("BACK")]),_:1}),X("div",WS,[X("button",{onClick:n[0]||(n[0]=s=>t.generateTeam()),class:"generateButton"},"GENERATE")]),X("div",QS,[X("div",YS,[XS,X("div",JS,[(le(!0),ue(Zt,null,wi(t.teamGloria,s=>(le(),ue("div",{class:"memberResult",key:s.name},Wr(s.name[0].toUpperCase()+s.name.slice(1)),1))),128))])]),X("div",ZS,[tb,X("div",eb,[(le(!0),ue(Zt,null,wi(t.teamMingu,s=>(le(),ue("div",{class:"memberResult",key:s.name},Wr(s.name[0].toUpperCase()+s.name.slice(1)),1))),128))])])])])}}}),sb=co(rb,[["__scopeId","data-v-a1c2db92"]]),ib=BE({history:nE("/"),routes:[{path:"/",name:"home",component:HS},{path:"/result",name:"result",component:sb},{path:"/about",name:"about",component:()=>GE(()=>import("./AboutView-F5nbybU_.js"),__vite__mapDeps([0,1]))}]}),vg=ky(zE);vg.use(ib);vg.mount("#app");export{co as _,X as a,ue as c,le as o};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AboutView-F5nbybU_.js","assets/AboutView-ug8e6cRs.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
