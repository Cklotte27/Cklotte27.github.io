(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ic(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const pt={},lr=[],Ve=()=>{},Tg=()=>!1,to=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ac=e=>e.startsWith("onUpdate:"),Lt=Object.assign,Rc=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ig=Object.prototype.hasOwnProperty,et=(e,t)=>Ig.call(e,t),K=Array.isArray,ur=e=>Ls(e)==="[object Map]",eo=e=>Ls(e)==="[object Set]",Jl=e=>Ls(e)==="[object Date]",Y=e=>typeof e=="function",bt=e=>typeof e=="string",_r=e=>typeof e=="symbol",dt=e=>e!==null&&typeof e=="object",df=e=>(dt(e)||Y(e))&&Y(e.then)&&Y(e.catch),pf=Object.prototype.toString,Ls=e=>pf.call(e),Ag=e=>Ls(e).slice(8,-1),mf=e=>Ls(e)==="[object Object]",bc=e=>bt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,gi=Ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),no=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Rg=/-(\w)/g,Oe=no(e=>e.replace(Rg,(t,n)=>n?n.toUpperCase():"")),bg=/\B([A-Z])/g,xr=no(e=>e.replace(bg,"-$1").toLowerCase()),ro=no(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yo=no(e=>e?`on${ro(e)}`:""),Bn=(e,t)=>!Object.is(e,t),_i=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},bi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Sa=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Zl;const Da=()=>Zl||(Zl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Un(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=bt(r)?Dg(r):Un(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(bt(e)||dt(e))return e}const Cg=/;(?![^(]*\))/g,Pg=/:([^]+)/,Sg=/\/\*[^]*?\*\//g;function Dg(e){const t={};return e.replace(Sg,"").split(Cg).forEach(n=>{if(n){const r=n.split(Pg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Cc(e){let t="";if(bt(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=Cc(e[n]);r&&(t+=r+" ")}else if(dt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Vg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xg=Ic(Vg);function gf(e){return!!e||e===""}function kg(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=so(e[r],t[r]);return n}function so(e,t){if(e===t)return!0;let n=Jl(e),r=Jl(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_r(e),r=_r(t),n||r)return e===t;if(n=K(e),r=K(t),n||r)return n&&r?kg(e,t):!1;if(n=dt(e),r=dt(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!so(e[o],t[o]))return!1}}return String(e)===String(t)}function _f(e,t){return e.findIndex(n=>so(n,t))}const ns=e=>bt(e)?e:e==null?"":K(e)||dt(e)&&(e.toString===pf||!Y(e.toString))?JSON.stringify(e,yf,2):String(e),yf=(e,t)=>t&&t.__v_isRef?yf(e,t.value):ur(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:eo(t)?{[`Set(${t.size})`]:[...t.values()]}:dt(t)&&!K(t)&&!mf(t)?String(t):t;let pe;class Mg{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=pe,!t&&pe&&(this.index=(pe.scopes||(pe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=pe;try{return pe=this,t()}finally{pe=n}}}on(){pe=this}off(){pe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ng(e,t=pe){t&&t.active&&t.effects.push(e)}function Og(){return pe}const Pc=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ef=e=>(e.w&dn)>0,vf=e=>(e.n&dn)>0,Lg=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=dn},Fg=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Ef(s)&&!vf(s)?s.delete(e):t[n++]=s,s.w&=~dn,s.n&=~dn}t.length=n}},Va=new WeakMap;let Yr=0,dn=1;const xa=30;let me;const Nn=Symbol(""),ka=Symbol("");class Sc{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ng(this,r)}run(){if(!this.active)return this.fn();let t=me,n=an;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=me,me=this,an=!0,dn=1<<++Yr,Yr<=xa?Lg(this):tu(this),this.fn()}finally{Yr<=xa&&Fg(this),dn=1<<--Yr,me=this.parent,an=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){me===this?this.deferStop=!0:this.active&&(tu(this),this.onStop&&this.onStop(),this.active=!1)}}function tu(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let an=!0;const wf=[];function kr(){wf.push(an),an=!1}function Mr(){const e=wf.pop();an=e===void 0?!0:e}function ee(e,t,n){if(an&&me){let r=Va.get(e);r||Va.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Pc()),Tf(s)}}function Tf(e,t){let n=!1;Yr<=xa?vf(e)||(e.n|=dn,n=!Ef(e)):n=!e.has(me),n&&(e.add(me),me.deps.push(e))}function ze(e,t,n,r,s,i){const o=Va.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&K(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!_r(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":K(e)?bc(n)&&a.push(o.get("length")):(a.push(o.get(Nn)),ur(e)&&a.push(o.get(ka)));break;case"delete":K(e)||(a.push(o.get(Nn)),ur(e)&&a.push(o.get(ka)));break;case"set":ur(e)&&a.push(o.get(Nn));break}if(a.length===1)a[0]&&Ma(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ma(Pc(c))}}function Ma(e,t){const n=K(e)?e:[...e];for(const r of n)r.computed&&eu(r);for(const r of n)r.computed||eu(r)}function eu(e,t){(e!==me||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Bg=Ic("__proto__,__v_isRef,__isVue"),If=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_r)),nu=Ug();function Ug(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=st(this);for(let i=0,o=this.length;i<o;i++)ee(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(st)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){kr();const r=st(this)[t].apply(this,n);return Mr(),r}}),e}function $g(e){const t=st(this);return ee(t,"has",e),t.hasOwnProperty(e)}class Af{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?t_:Pf:i?Cf:bf).get(t))return t;const o=K(t);if(!s){if(o&&et(nu,n))return Reflect.get(nu,n,r);if(n==="hasOwnProperty")return $g}const a=Reflect.get(t,n,r);return(_r(n)?If.has(n):Bg(n))||(s||ee(t,"get",n),i)?a:Kt(a)?o&&bc(n)?a:a.value:dt(a)?s?Df(a):Fs(a):a}}class Rf extends Af{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(yr(i)&&Kt(i)&&!Kt(r))return!1;if(!this._shallow&&(!Ci(r)&&!yr(r)&&(i=st(i),r=st(r)),!K(t)&&Kt(i)&&!Kt(r)))return i.value=r,!0;const o=K(t)&&bc(n)?Number(n)<t.length:et(t,n),a=Reflect.set(t,n,r,s);return t===st(s)&&(o?Bn(r,i)&&ze(t,"set",n,r):ze(t,"add",n,r)),a}deleteProperty(t,n){const r=et(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&ze(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!_r(n)||!If.has(n))&&ee(t,"has",n),r}ownKeys(t){return ee(t,"iterate",K(t)?"length":Nn),Reflect.ownKeys(t)}}class jg extends Af{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const qg=new Rf,Kg=new jg,zg=new Rf(!0),Dc=e=>e,io=e=>Reflect.getPrototypeOf(e);function ei(e,t,n=!1,r=!1){e=e.__v_raw;const s=st(e),i=st(t);n||(Bn(t,i)&&ee(s,"get",t),ee(s,"get",i));const{has:o}=io(s),a=r?Dc:n?kc:ms;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function ni(e,t=!1){const n=this.__v_raw,r=st(n),s=st(e);return t||(Bn(e,s)&&ee(r,"has",e),ee(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function ri(e,t=!1){return e=e.__v_raw,!t&&ee(st(e),"iterate",Nn),Reflect.get(e,"size",e)}function ru(e){e=st(e);const t=st(this);return io(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function su(e,t){t=st(t);const n=st(this),{has:r,get:s}=io(n);let i=r.call(n,e);i||(e=st(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?Bn(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function iu(e){const t=st(this),{has:n,get:r}=io(t);let s=n.call(t,e);s||(e=st(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&ze(t,"delete",e,void 0),i}function ou(){const e=st(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function si(e,t){return function(r,s){const i=this,o=i.__v_raw,a=st(o),c=t?Dc:e?kc:ms;return!e&&ee(a,"iterate",Nn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function ii(e,t,n){return function(...r){const s=this.__v_raw,i=st(s),o=ur(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?Dc:t?kc:ms;return!t&&ee(i,"iterate",c?ka:Nn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function en(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Hg(){const e={get(i){return ei(this,i)},get size(){return ri(this)},has:ni,add:ru,set:su,delete:iu,clear:ou,forEach:si(!1,!1)},t={get(i){return ei(this,i,!1,!0)},get size(){return ri(this)},has:ni,add:ru,set:su,delete:iu,clear:ou,forEach:si(!1,!0)},n={get(i){return ei(this,i,!0)},get size(){return ri(this,!0)},has(i){return ni.call(this,i,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:si(!0,!1)},r={get(i){return ei(this,i,!0,!0)},get size(){return ri(this,!0)},has(i){return ni.call(this,i,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:si(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ii(i,!1,!1),n[i]=ii(i,!0,!1),t[i]=ii(i,!1,!0),r[i]=ii(i,!0,!0)}),[e,n,t,r]}const[Wg,Gg,Qg,Yg]=Hg();function Vc(e,t){const n=t?e?Yg:Qg:e?Gg:Wg;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(et(n,s)&&s in r?n:r,s,i)}const Xg={get:Vc(!1,!1)},Jg={get:Vc(!1,!0)},Zg={get:Vc(!0,!1)},bf=new WeakMap,Cf=new WeakMap,Pf=new WeakMap,t_=new WeakMap;function e_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function n_(e){return e.__v_skip||!Object.isExtensible(e)?0:e_(Ag(e))}function Fs(e){return yr(e)?e:xc(e,!1,qg,Xg,bf)}function Sf(e){return xc(e,!1,zg,Jg,Cf)}function Df(e){return xc(e,!0,Kg,Zg,Pf)}function xc(e,t,n,r,s){if(!dt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=n_(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function hr(e){return yr(e)?hr(e.__v_raw):!!(e&&e.__v_isReactive)}function yr(e){return!!(e&&e.__v_isReadonly)}function Ci(e){return!!(e&&e.__v_isShallow)}function Vf(e){return hr(e)||yr(e)}function st(e){const t=e&&e.__v_raw;return t?st(t):e}function xf(e){return bi(e,"__v_skip",!0),e}const ms=e=>dt(e)?Fs(e):e,kc=e=>dt(e)?Df(e):e;function kf(e){an&&me&&(e=st(e),Tf(e.dep||(e.dep=Pc())))}function Mf(e,t){e=st(e);const n=e.dep;n&&Ma(n)}function Kt(e){return!!(e&&e.__v_isRef===!0)}function r_(e){return Nf(e,!1)}function s_(e){return Nf(e,!0)}function Nf(e,t){return Kt(e)?e:new i_(e,t)}class i_{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:st(t),this._value=n?t:ms(t)}get value(){return kf(this),this._value}set value(t){const n=this.__v_isShallow||Ci(t)||yr(t);t=n?t:st(t),Bn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ms(t),Mf(this))}}function On(e){return Kt(e)?e.value:e}const o_={get:(e,t,n)=>On(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Kt(s)&&!Kt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Of(e){return hr(e)?e:new Proxy(e,o_)}class a_{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Sc(t,()=>{this._dirty||(this._dirty=!0,Mf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=st(this);return kf(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function c_(e,t,n=!1){let r,s;const i=Y(e);return i?(r=e,s=Ve):(r=e.get,s=e.set),new a_(r,s,i||!s,n)}function cn(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){oo(i,t,n)}return s}function Ee(e,t,n,r){if(Y(e)){const i=cn(e,t,n,r);return i&&df(i)&&i.catch(o=>{oo(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Ee(e[i],t,n,r));return s}function oo(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){cn(c,null,10,[e,o,a]);return}}l_(e,n,s,r)}function l_(e,t,n,r=!0){console.error(e)}let gs=!1,Na=!1;const qt=[];let Ce=0;const fr=[];let je=null,Rn=0;const Lf=Promise.resolve();let Mc=null;function Ff(e){const t=Mc||Lf;return e?t.then(this?e.bind(this):e):t}function u_(e){let t=Ce+1,n=qt.length;for(;t<n;){const r=t+n>>>1,s=qt[r],i=_s(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function Nc(e){(!qt.length||!qt.includes(e,gs&&e.allowRecurse?Ce+1:Ce))&&(e.id==null?qt.push(e):qt.splice(u_(e.id),0,e),Bf())}function Bf(){!gs&&!Na&&(Na=!0,Mc=Lf.then($f))}function h_(e){const t=qt.indexOf(e);t>Ce&&qt.splice(t,1)}function f_(e){K(e)?fr.push(...e):(!je||!je.includes(e,e.allowRecurse?Rn+1:Rn))&&fr.push(e),Bf()}function au(e,t=gs?Ce+1:0){for(;t<qt.length;t++){const n=qt[t];n&&n.pre&&(qt.splice(t,1),t--,n())}}function Uf(e){if(fr.length){const t=[...new Set(fr)];if(fr.length=0,je){je.push(...t);return}for(je=t,je.sort((n,r)=>_s(n)-_s(r)),Rn=0;Rn<je.length;Rn++)je[Rn]();je=null,Rn=0}}const _s=e=>e.id==null?1/0:e.id,d_=(e,t)=>{const n=_s(e)-_s(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function $f(e){Na=!1,gs=!0,qt.sort(d_);try{for(Ce=0;Ce<qt.length;Ce++){const t=qt[Ce];t&&t.active!==!1&&cn(t,null,14)}}finally{Ce=0,qt.length=0,Uf(),gs=!1,Mc=null,(qt.length||fr.length)&&$f()}}function p_(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||pt;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||pt;f&&(s=n.map(m=>bt(m)?m.trim():m)),h&&(s=n.map(Sa))}let a,c=r[a=Yo(t)]||r[a=Yo(Oe(t))];!c&&i&&(c=r[a=Yo(xr(t))]),c&&Ee(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ee(l,e,6,s)}}function jf(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!Y(e)){const c=l=>{const u=jf(l,t,!0);u&&(a=!0,Lt(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(dt(e)&&r.set(e,null),null):(K(i)?i.forEach(c=>o[c]=null):Lt(o,i),dt(e)&&r.set(e,o),o)}function ao(e,t){return!e||!to(t)?!1:(t=t.slice(2).replace(/Once$/,""),et(e,t[0].toLowerCase()+t.slice(1))||et(e,xr(t))||et(e,t))}let ue=null,co=null;function Pi(e){const t=ue;return ue=e,co=e&&e.type.__scopeId||null,t}function lo(e){co=e}function uo(){co=null}function Oc(e,t=ue,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&yu(-1);const i=Pi(t);let o;try{o=e(...s)}finally{Pi(i),r._d&&yu(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Xo(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:m,ctx:A,inheritAttrs:R}=e;let b,x;const M=Pi(e);try{if(n.shapeFlag&4){const L=s||r,_t=L;b=be(u.call(_t,L,h,i,m,f,A)),x=c}else{const L=t;b=be(L.length>1?L(i,{attrs:c,slots:a,emit:l}):L(i,null)),x=t.props?c:m_(c)}}catch(L){ss.length=0,oo(L,e,1),b=Qt(ys)}let H=b;if(x&&R!==!1){const L=Object.keys(x),{shapeFlag:_t}=H;L.length&&_t&7&&(o&&L.some(Ac)&&(x=g_(x,o)),H=Er(H,x))}return n.dirs&&(H=Er(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),b=H,Pi(M),b}const m_=e=>{let t;for(const n in e)(n==="class"||n==="style"||to(n))&&((t||(t={}))[n]=e[n]);return t},g_=(e,t)=>{const n={};for(const r in e)(!Ac(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function __(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?cu(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!ao(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?cu(r,o,l):!0:!!o;return!1}function cu(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!ao(n,i))return!0}return!1}function y_({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const qf="components";function Kf(e,t){return v_(qf,e,!0,t)||e}const E_=Symbol.for("v-ndc");function v_(e,t,n=!0,r=!1){const s=ue||kt;if(s){const i=s.type;if(e===qf){const a=fy(i,!1);if(a&&(a===t||a===Oe(t)||a===ro(Oe(t))))return i}const o=lu(s[e]||i[e],t)||lu(s.appContext[e],t);return!o&&r?i:o}}function lu(e,t){return e&&(e[t]||e[Oe(t)]||e[ro(Oe(t))])}const w_=e=>e.__isSuspense;function T_(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):f_(e)}const oi={};function yi(e,t,n){return zf(e,t,n)}function zf(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=pt){var a;const c=Og()===((a=kt)==null?void 0:a.scope)?kt:null;let l,u=!1,h=!1;if(Kt(e)?(l=()=>e.value,u=Ci(e)):hr(e)?(l=()=>e,r=!0):K(e)?(h=!0,u=e.some(L=>hr(L)||Ci(L)),l=()=>e.map(L=>{if(Kt(L))return L.value;if(hr(L))return Sn(L);if(Y(L))return cn(L,c,2)})):Y(e)?t?l=()=>cn(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Ee(e,c,3,[m])}:l=Ve,t&&r){const L=l;l=()=>Sn(L())}let f,m=L=>{f=M.onStop=()=>{cn(L,c,4),f=M.onStop=void 0}},A;if(vs)if(m=Ve,t?n&&Ee(t,c,3,[l(),h?[]:void 0,m]):l(),s==="sync"){const L=my();A=L.__watcherHandles||(L.__watcherHandles=[])}else return Ve;let R=h?new Array(e.length).fill(oi):oi;const b=()=>{if(M.active)if(t){const L=M.run();(r||u||(h?L.some((_t,yt)=>Bn(_t,R[yt])):Bn(L,R)))&&(f&&f(),Ee(t,c,3,[L,R===oi?void 0:h&&R[0]===oi?[]:R,m]),R=L)}else M.run()};b.allowRecurse=!!t;let x;s==="sync"?x=b:s==="post"?x=()=>Jt(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),x=()=>Nc(b));const M=new Sc(l,x);t?n?b():R=M.run():s==="post"?Jt(M.run.bind(M),c&&c.suspense):M.run();const H=()=>{M.stop(),c&&c.scope&&Rc(c.scope.effects,M)};return A&&A.push(H),H}function I_(e,t,n){const r=this.proxy,s=bt(e)?e.includes(".")?Hf(r,e):()=>r[e]:e.bind(r,r);let i;Y(t)?i=t:(i=t.handler,n=t);const o=kt;vr(this);const a=zf(s,i.bind(r),n);return o?vr(o):Ln(),a}function Hf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Sn(e,t){if(!dt(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Kt(e))Sn(e.value,t);else if(K(e))for(let n=0;n<e.length;n++)Sn(e[n],t);else if(eo(e)||ur(e))e.forEach(n=>{Sn(n,t)});else if(mf(e))for(const n in e)Sn(e[n],t);return e}function er(e,t){const n=ue;if(n===null)return e;const r=mo(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=pt]=t[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Sn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Tn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(kr(),Ee(c,n,8,[e.el,a,e,t]),Mr())}}/*! #__NO_SIDE_EFFECTS__ */function Wf(e,t){return Y(e)?Lt({name:e.name},t,{setup:e}):e}const Ei=e=>!!e.type.__asyncLoader,Gf=e=>e.type.__isKeepAlive;function A_(e,t){Qf(e,"a",t)}function R_(e,t){Qf(e,"da",t)}function Qf(e,t,n=kt){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ho(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Gf(s.parent.vnode)&&b_(r,t,n,s),s=s.parent}}function b_(e,t,n,r){const s=ho(t,e,r,!0);Yf(()=>{Rc(r[t],s)},n)}function ho(e,t,n=kt,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;kr(),vr(n);const a=Ee(t,n,e,o);return Ln(),Mr(),a});return r?s.unshift(i):s.push(i),i}}const Xe=e=>(t,n=kt)=>(!vs||e==="sp")&&ho(e,(...r)=>t(...r),n),C_=Xe("bm"),P_=Xe("m"),S_=Xe("bu"),D_=Xe("u"),V_=Xe("bum"),Yf=Xe("um"),x_=Xe("sp"),k_=Xe("rtg"),M_=Xe("rtc");function N_(e,t=kt){ho("ec",e,t)}function Si(e,t,n,r){let s;const i=n&&n[r];if(K(e)||bt(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(dt(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Oa=e=>e?od(e)?mo(e)||e.proxy:Oa(e.parent):null,rs=Lt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Oa(e.parent),$root:e=>Oa(e.root),$emit:e=>e.emit,$options:e=>Lc(e),$forceUpdate:e=>e.f||(e.f=()=>Nc(e.update)),$nextTick:e=>e.n||(e.n=Ff.bind(e.proxy)),$watch:e=>I_.bind(e)}),Jo=(e,t)=>e!==pt&&!e.__isScriptSetup&&et(e,t),O_={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Jo(r,t))return o[t]=1,r[t];if(s!==pt&&et(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&et(l,t))return o[t]=3,i[t];if(n!==pt&&et(n,t))return o[t]=4,n[t];La&&(o[t]=0)}}const u=rs[t];let h,f;if(u)return t==="$attrs"&&ee(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==pt&&et(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,et(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Jo(s,t)?(s[t]=n,!0):r!==pt&&et(r,t)?(r[t]=n,!0):et(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==pt&&et(e,o)||Jo(t,o)||(a=i[0])&&et(a,o)||et(r,o)||et(rs,o)||et(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:et(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function uu(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let La=!0;function L_(e){const t=Lc(e),n=e.proxy,r=e.ctx;La=!1,t.beforeCreate&&hu(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:A,activated:R,deactivated:b,beforeDestroy:x,beforeUnmount:M,destroyed:H,unmounted:L,render:_t,renderTracked:yt,renderTriggered:Ft,errorCaptured:fe,serverPrefetch:Je,expose:ne,inheritAttrs:Ze,components:wn,directives:Te,filters:jr}=t;if(l&&F_(l,r,null),o)for(const ut in o){const it=o[ut];Y(it)&&(r[ut]=it.bind(n))}if(s){const ut=s.call(n,n);dt(ut)&&(e.data=Fs(ut))}if(La=!0,i)for(const ut in i){const it=i[ut],Ue=Y(it)?it.bind(n,n):Y(it.get)?it.get.bind(n,n):Ve,tn=!Y(it)&&Y(it.set)?it.set.bind(n):Ve,Ie=ge({get:Ue,set:tn});Object.defineProperty(r,ut,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:Xt=>Ie.value=Xt})}if(a)for(const ut in a)Xf(a[ut],r,n,ut);if(c){const ut=Y(c)?c.call(n):c;Reflect.ownKeys(ut).forEach(it=>{vi(it,ut[it])})}u&&hu(u,e,"c");function Ct(ut,it){K(it)?it.forEach(Ue=>ut(Ue.bind(n))):it&&ut(it.bind(n))}if(Ct(C_,h),Ct(P_,f),Ct(S_,m),Ct(D_,A),Ct(A_,R),Ct(R_,b),Ct(N_,fe),Ct(M_,yt),Ct(k_,Ft),Ct(V_,M),Ct(Yf,L),Ct(x_,Je),K(ne))if(ne.length){const ut=e.exposed||(e.exposed={});ne.forEach(it=>{Object.defineProperty(ut,it,{get:()=>n[it],set:Ue=>n[it]=Ue})})}else e.exposed||(e.exposed={});_t&&e.render===Ve&&(e.render=_t),Ze!=null&&(e.inheritAttrs=Ze),wn&&(e.components=wn),Te&&(e.directives=Te)}function F_(e,t,n=Ve){K(e)&&(e=Fa(e));for(const r in e){const s=e[r];let i;dt(s)?"default"in s?i=He(s.from||r,s.default,!0):i=He(s.from||r):i=He(s),Kt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function hu(e,t,n){Ee(K(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Xf(e,t,n,r){const s=r.includes(".")?Hf(n,r):()=>n[r];if(bt(e)){const i=t[e];Y(i)&&yi(s,i)}else if(Y(e))yi(s,e.bind(n));else if(dt(e))if(K(e))e.forEach(i=>Xf(i,t,n,r));else{const i=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(i)&&yi(s,i,e)}}function Lc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Di(c,l,o,!0)),Di(c,t,o)),dt(t)&&i.set(t,c),c}function Di(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Di(e,i,n,!0),s&&s.forEach(o=>Di(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=B_[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const B_={data:fu,props:du,emits:du,methods:Xr,computed:Xr,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:Xr,directives:Xr,watch:$_,provide:fu,inject:U_};function fu(e,t){return t?e?function(){return Lt(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function U_(e,t){return Xr(Fa(e),Fa(t))}function Fa(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Gt(e,t){return e?[...new Set([].concat(e,t))]:t}function Xr(e,t){return e?Lt(Object.create(null),e,t):t}function du(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:Lt(Object.create(null),uu(e),uu(t??{})):t}function $_(e,t){if(!e)return t;if(!t)return e;const n=Lt(Object.create(null),e);for(const r in t)n[r]=Gt(e[r],t[r]);return n}function Jf(){return{app:null,config:{isNativeTag:Tg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let j_=0;function q_(e,t){return function(r,s=null){Y(r)||(r=Lt({},r)),s!=null&&!dt(s)&&(s=null);const i=Jf(),o=new WeakSet;let a=!1;const c=i.app={_uid:j_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:gy,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Qt(r,s);return f.appContext=i,u&&t?t(f,l):e(f,l,h),a=!0,c._container=l,l.__vue_app__=c,mo(f.component)||f.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Vi=c;try{return l()}finally{Vi=null}}};return c}}let Vi=null;function vi(e,t){if(kt){let n=kt.provides;const r=kt.parent&&kt.parent.provides;r===n&&(n=kt.provides=Object.create(r)),n[e]=t}}function He(e,t,n=!1){const r=kt||ue;if(r||Vi){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Vi._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Y(t)?t.call(r&&r.proxy):t}}function K_(e,t,n,r=!1){const s={},i={};bi(i,po,1),e.propsDefaults=Object.create(null),Zf(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Sf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function z_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=st(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ao(e.emitsOptions,f))continue;const m=t[f];if(c)if(et(i,f))m!==i[f]&&(i[f]=m,l=!0);else{const A=Oe(f);s[A]=Ba(c,a,A,m,e,!1)}else m!==i[f]&&(i[f]=m,l=!0)}}}else{Zf(e,t,s,i)&&(l=!0);let u;for(const h in a)(!t||!et(t,h)&&((u=xr(h))===h||!et(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ba(c,a,h,void 0,e,!0)):delete s[h]);if(i!==a)for(const h in i)(!t||!et(t,h))&&(delete i[h],l=!0)}l&&ze(e,"set","$attrs")}function Zf(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(gi(c))continue;const l=t[c];let u;s&&et(s,u=Oe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ao(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=st(n),l=a||pt;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ba(s,c,h,l[h],e,!et(l,h))}}return o}function Ba(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=et(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Y(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(vr(s),r=l[n]=c.call(null,t),Ln())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===xr(n))&&(r=!0))}return r}function td(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!Y(e)){const u=h=>{c=!0;const[f,m]=td(h,t,!0);Lt(o,f),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return dt(e)&&r.set(e,lr),lr;if(K(i))for(let u=0;u<i.length;u++){const h=Oe(i[u]);pu(h)&&(o[h]=pt)}else if(i)for(const u in i){const h=Oe(u);if(pu(h)){const f=i[u],m=o[h]=K(f)||Y(f)?{type:f}:Lt({},f);if(m){const A=_u(Boolean,m.type),R=_u(String,m.type);m[0]=A>-1,m[1]=R<0||A<R,(A>-1||et(m,"default"))&&a.push(h)}}}const l=[o,a];return dt(e)&&r.set(e,l),l}function pu(e){return e[0]!=="$"}function mu(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function gu(e,t){return mu(e)===mu(t)}function _u(e,t){return K(t)?t.findIndex(n=>gu(n,e)):Y(t)&&gu(t,e)?0:-1}const ed=e=>e[0]==="_"||e==="$stable",Fc=e=>K(e)?e.map(be):[be(e)],H_=(e,t,n)=>{if(t._n)return t;const r=Oc((...s)=>Fc(t(...s)),n);return r._c=!1,r},nd=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ed(s))continue;const i=e[s];if(Y(i))t[s]=H_(s,i,r);else if(i!=null){const o=Fc(i);t[s]=()=>o}}},rd=(e,t)=>{const n=Fc(t);e.slots.default=()=>n},W_=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=st(t),bi(t,"_",n)):nd(t,e.slots={})}else e.slots={},t&&rd(e,t);bi(e.slots,po,1)},G_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=pt;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(Lt(s,t),!n&&a===1&&delete s._):(i=!t.$stable,nd(t,s)),o=t}else t&&(rd(e,t),o={default:1});if(i)for(const a in s)!ed(a)&&o[a]==null&&delete s[a]};function Ua(e,t,n,r,s=!1){if(K(e)){e.forEach((f,m)=>Ua(f,t&&(K(t)?t[m]:t),n,r,s));return}if(Ei(r)&&!s)return;const i=r.shapeFlag&4?mo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===pt?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(bt(l)?(u[l]=null,et(h,l)&&(h[l]=null)):Kt(l)&&(l.value=null)),Y(c))cn(c,a,12,[o,u]);else{const f=bt(c),m=Kt(c);if(f||m){const A=()=>{if(e.f){const R=f?et(h,c)?h[c]:u[c]:c.value;s?K(R)&&Rc(R,i):K(R)?R.includes(i)||R.push(i):f?(u[c]=[i],et(h,c)&&(h[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else f?(u[c]=o,et(h,c)&&(h[c]=o)):m&&(c.value=o,e.k&&(u[e.k]=o))};o?(A.id=-1,Jt(A,n)):A()}}}const Jt=T_;function Q_(e){return Y_(e)}function Y_(e,t){const n=Da();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=Ve,insertStaticContent:A}=e,R=(d,p,g,_=null,v=null,T=null,k=!1,C=null,P=!!p.dynamicChildren)=>{if(d===p)return;d&&!Kr(d,p)&&(_=y(d),Xt(d,v,T,!0),d=null),p.patchFlag===-2&&(P=!1,p.dynamicChildren=null);const{type:I,ref:U,shapeFlag:O}=p;switch(I){case fo:b(d,p,g,_);break;case ys:x(d,p,g,_);break;case Zo:d==null&&M(p,g,_,k);break;case Zt:wn(d,p,g,_,v,T,k,C,P);break;default:O&1?_t(d,p,g,_,v,T,k,C,P):O&6?Te(d,p,g,_,v,T,k,C,P):(O&64||O&128)&&I.process(d,p,g,_,v,T,k,C,P,S)}U!=null&&v&&Ua(U,d&&d.ref,T,p||d,!p)},b=(d,p,g,_)=>{if(d==null)r(p.el=a(p.children),g,_);else{const v=p.el=d.el;p.children!==d.children&&l(v,p.children)}},x=(d,p,g,_)=>{d==null?r(p.el=c(p.children||""),g,_):p.el=d.el},M=(d,p,g,_)=>{[d.el,d.anchor]=A(d.children,p,g,_,d.el,d.anchor)},H=({el:d,anchor:p},g,_)=>{let v;for(;d&&d!==p;)v=f(d),r(d,g,_),d=v;r(p,g,_)},L=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),s(d),d=g;s(p)},_t=(d,p,g,_,v,T,k,C,P)=>{k=k||p.type==="svg",d==null?yt(p,g,_,v,T,k,C,P):Je(d,p,v,T,k,C,P)},yt=(d,p,g,_,v,T,k,C)=>{let P,I;const{type:U,props:O,shapeFlag:$,transition:Q,dirs:J}=d;if(P=d.el=o(d.type,T,O&&O.is,O),$&8?u(P,d.children):$&16&&fe(d.children,P,null,_,v,T&&U!=="foreignObject",k,C),J&&Tn(d,null,_,"created"),Ft(P,d,d.scopeId,k,_),O){for(const lt in O)lt!=="value"&&!gi(lt)&&i(P,lt,null,O[lt],T,d.children,_,v,Bt);"value"in O&&i(P,"value",null,O.value),(I=O.onVnodeBeforeMount)&&Re(I,_,d)}J&&Tn(d,null,_,"beforeMount");const ht=X_(v,Q);ht&&Q.beforeEnter(P),r(P,p,g),((I=O&&O.onVnodeMounted)||ht||J)&&Jt(()=>{I&&Re(I,_,d),ht&&Q.enter(P),J&&Tn(d,null,_,"mounted")},v)},Ft=(d,p,g,_,v)=>{if(g&&m(d,g),_)for(let T=0;T<_.length;T++)m(d,_[T]);if(v){let T=v.subTree;if(p===T){const k=v.vnode;Ft(d,k,k.scopeId,k.slotScopeIds,v.parent)}}},fe=(d,p,g,_,v,T,k,C,P=0)=>{for(let I=P;I<d.length;I++){const U=d[I]=C?rn(d[I]):be(d[I]);R(null,U,p,g,_,v,T,k,C)}},Je=(d,p,g,_,v,T,k)=>{const C=p.el=d.el;let{patchFlag:P,dynamicChildren:I,dirs:U}=p;P|=d.patchFlag&16;const O=d.props||pt,$=p.props||pt;let Q;g&&In(g,!1),(Q=$.onVnodeBeforeUpdate)&&Re(Q,g,p,d),U&&Tn(p,d,g,"beforeUpdate"),g&&In(g,!0);const J=v&&p.type!=="foreignObject";if(I?ne(d.dynamicChildren,I,C,g,_,J,T):k||it(d,p,C,null,g,_,J,T,!1),P>0){if(P&16)Ze(C,p,O,$,g,_,v);else if(P&2&&O.class!==$.class&&i(C,"class",null,$.class,v),P&4&&i(C,"style",O.style,$.style,v),P&8){const ht=p.dynamicProps;for(let lt=0;lt<ht.length;lt++){const wt=ht[lt],de=O[wt],tr=$[wt];(tr!==de||wt==="value")&&i(C,wt,de,tr,v,d.children,g,_,Bt)}}P&1&&d.children!==p.children&&u(C,p.children)}else!k&&I==null&&Ze(C,p,O,$,g,_,v);((Q=$.onVnodeUpdated)||U)&&Jt(()=>{Q&&Re(Q,g,p,d),U&&Tn(p,d,g,"updated")},_)},ne=(d,p,g,_,v,T,k)=>{for(let C=0;C<p.length;C++){const P=d[C],I=p[C],U=P.el&&(P.type===Zt||!Kr(P,I)||P.shapeFlag&70)?h(P.el):g;R(P,I,U,null,_,v,T,k,!0)}},Ze=(d,p,g,_,v,T,k)=>{if(g!==_){if(g!==pt)for(const C in g)!gi(C)&&!(C in _)&&i(d,C,g[C],null,k,p.children,v,T,Bt);for(const C in _){if(gi(C))continue;const P=_[C],I=g[C];P!==I&&C!=="value"&&i(d,C,I,P,k,p.children,v,T,Bt)}"value"in _&&i(d,"value",g.value,_.value)}},wn=(d,p,g,_,v,T,k,C,P)=>{const I=p.el=d?d.el:a(""),U=p.anchor=d?d.anchor:a("");let{patchFlag:O,dynamicChildren:$,slotScopeIds:Q}=p;Q&&(C=C?C.concat(Q):Q),d==null?(r(I,g,_),r(U,g,_),fe(p.children,g,U,v,T,k,C,P)):O>0&&O&64&&$&&d.dynamicChildren?(ne(d.dynamicChildren,$,g,v,T,k,C),(p.key!=null||v&&p===v.subTree)&&sd(d,p,!0)):it(d,p,g,U,v,T,k,C,P)},Te=(d,p,g,_,v,T,k,C,P)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?v.ctx.activate(p,g,_,k,P):jr(p,g,_,v,T,k,P):Xn(d,p,P)},jr=(d,p,g,_,v,T,k)=>{const C=d.component=ay(d,_,v);if(Gf(d)&&(C.ctx.renderer=S),cy(C),C.asyncDep){if(v&&v.registerDep(C,Ct),!d.el){const P=C.subTree=Qt(ys);x(null,P,p,g)}return}Ct(C,d,p,g,v,T,k)},Xn=(d,p,g)=>{const _=p.component=d.component;if(__(d,p,g))if(_.asyncDep&&!_.asyncResolved){ut(_,p,g);return}else _.next=p,h_(_.update),_.update();else p.el=d.el,_.vnode=p},Ct=(d,p,g,_,v,T,k)=>{const C=()=>{if(d.isMounted){let{next:U,bu:O,u:$,parent:Q,vnode:J}=d,ht=U,lt;In(d,!1),U?(U.el=J.el,ut(d,U,k)):U=J,O&&_i(O),(lt=U.props&&U.props.onVnodeBeforeUpdate)&&Re(lt,Q,U,J),In(d,!0);const wt=Xo(d),de=d.subTree;d.subTree=wt,R(de,wt,h(de.el),y(de),d,v,T),U.el=wt.el,ht===null&&y_(d,wt.el),$&&Jt($,v),(lt=U.props&&U.props.onVnodeUpdated)&&Jt(()=>Re(lt,Q,U,J),v)}else{let U;const{el:O,props:$}=p,{bm:Q,m:J,parent:ht}=d,lt=Ei(p);if(In(d,!1),Q&&_i(Q),!lt&&(U=$&&$.onVnodeBeforeMount)&&Re(U,ht,p),In(d,!0),O&&ot){const wt=()=>{d.subTree=Xo(d),ot(O,d.subTree,d,v,null)};lt?p.type.__asyncLoader().then(()=>!d.isUnmounted&&wt()):wt()}else{const wt=d.subTree=Xo(d);R(null,wt,g,_,d,v,T),p.el=wt.el}if(J&&Jt(J,v),!lt&&(U=$&&$.onVnodeMounted)){const wt=p;Jt(()=>Re(U,ht,wt),v)}(p.shapeFlag&256||ht&&Ei(ht.vnode)&&ht.vnode.shapeFlag&256)&&d.a&&Jt(d.a,v),d.isMounted=!0,p=g=_=null}},P=d.effect=new Sc(C,()=>Nc(I),d.scope),I=d.update=()=>P.run();I.id=d.uid,In(d,!0),I()},ut=(d,p,g)=>{p.component=d;const _=d.vnode.props;d.vnode=p,d.next=null,z_(d,p.props,_,g),G_(d,p.children,g),kr(),au(),Mr()},it=(d,p,g,_,v,T,k,C,P=!1)=>{const I=d&&d.children,U=d?d.shapeFlag:0,O=p.children,{patchFlag:$,shapeFlag:Q}=p;if($>0){if($&128){tn(I,O,g,_,v,T,k,C,P);return}else if($&256){Ue(I,O,g,_,v,T,k,C,P);return}}Q&8?(U&16&&Bt(I,v,T),O!==I&&u(g,O)):U&16?Q&16?tn(I,O,g,_,v,T,k,C,P):Bt(I,v,T,!0):(U&8&&u(g,""),Q&16&&fe(O,g,_,v,T,k,C,P))},Ue=(d,p,g,_,v,T,k,C,P)=>{d=d||lr,p=p||lr;const I=d.length,U=p.length,O=Math.min(I,U);let $;for($=0;$<O;$++){const Q=p[$]=P?rn(p[$]):be(p[$]);R(d[$],Q,g,null,v,T,k,C,P)}I>U?Bt(d,v,T,!0,!1,O):fe(p,g,_,v,T,k,C,P,O)},tn=(d,p,g,_,v,T,k,C,P)=>{let I=0;const U=p.length;let O=d.length-1,$=U-1;for(;I<=O&&I<=$;){const Q=d[I],J=p[I]=P?rn(p[I]):be(p[I]);if(Kr(Q,J))R(Q,J,g,null,v,T,k,C,P);else break;I++}for(;I<=O&&I<=$;){const Q=d[O],J=p[$]=P?rn(p[$]):be(p[$]);if(Kr(Q,J))R(Q,J,g,null,v,T,k,C,P);else break;O--,$--}if(I>O){if(I<=$){const Q=$+1,J=Q<U?p[Q].el:_;for(;I<=$;)R(null,p[I]=P?rn(p[I]):be(p[I]),g,J,v,T,k,C,P),I++}}else if(I>$)for(;I<=O;)Xt(d[I],v,T,!0),I++;else{const Q=I,J=I,ht=new Map;for(I=J;I<=$;I++){const re=p[I]=P?rn(p[I]):be(p[I]);re.key!=null&&ht.set(re.key,I)}let lt,wt=0;const de=$-J+1;let tr=!1,Ql=0;const qr=new Array(de);for(I=0;I<de;I++)qr[I]=0;for(I=Q;I<=O;I++){const re=d[I];if(wt>=de){Xt(re,v,T,!0);continue}let Ae;if(re.key!=null)Ae=ht.get(re.key);else for(lt=J;lt<=$;lt++)if(qr[lt-J]===0&&Kr(re,p[lt])){Ae=lt;break}Ae===void 0?Xt(re,v,T,!0):(qr[Ae-J]=I+1,Ae>=Ql?Ql=Ae:tr=!0,R(re,p[Ae],g,null,v,T,k,C,P),wt++)}const Yl=tr?J_(qr):lr;for(lt=Yl.length-1,I=de-1;I>=0;I--){const re=J+I,Ae=p[re],Xl=re+1<U?p[re+1].el:_;qr[I]===0?R(null,Ae,g,Xl,v,T,k,C,P):tr&&(lt<0||I!==Yl[lt]?Ie(Ae,g,Xl,2):lt--)}}},Ie=(d,p,g,_,v=null)=>{const{el:T,type:k,transition:C,children:P,shapeFlag:I}=d;if(I&6){Ie(d.component.subTree,p,g,_);return}if(I&128){d.suspense.move(p,g,_);return}if(I&64){k.move(d,p,g,S);return}if(k===Zt){r(T,p,g);for(let O=0;O<P.length;O++)Ie(P[O],p,g,_);r(d.anchor,p,g);return}if(k===Zo){H(d,p,g);return}if(_!==2&&I&1&&C)if(_===0)C.beforeEnter(T),r(T,p,g),Jt(()=>C.enter(T),v);else{const{leave:O,delayLeave:$,afterLeave:Q}=C,J=()=>r(T,p,g),ht=()=>{O(T,()=>{J(),Q&&Q()})};$?$(T,J,ht):ht()}else r(T,p,g)},Xt=(d,p,g,_=!1,v=!1)=>{const{type:T,props:k,ref:C,children:P,dynamicChildren:I,shapeFlag:U,patchFlag:O,dirs:$}=d;if(C!=null&&Ua(C,null,g,d,!0),U&256){p.ctx.deactivate(d);return}const Q=U&1&&$,J=!Ei(d);let ht;if(J&&(ht=k&&k.onVnodeBeforeUnmount)&&Re(ht,p,d),U&6)ti(d.component,g,_);else{if(U&128){d.suspense.unmount(g,_);return}Q&&Tn(d,null,p,"beforeUnmount"),U&64?d.type.remove(d,p,g,v,S,_):I&&(T!==Zt||O>0&&O&64)?Bt(I,p,g,!1,!0):(T===Zt&&O&384||!v&&U&16)&&Bt(P,p,g),_&&Jn(d)}(J&&(ht=k&&k.onVnodeUnmounted)||Q)&&Jt(()=>{ht&&Re(ht,p,d),Q&&Tn(d,null,p,"unmounted")},g)},Jn=d=>{const{type:p,el:g,anchor:_,transition:v}=d;if(p===Zt){Zn(g,_);return}if(p===Zo){L(d);return}const T=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:k,delayLeave:C}=v,P=()=>k(g,T);C?C(d.el,T,P):P()}else T()},Zn=(d,p)=>{let g;for(;d!==p;)g=f(d),s(d),d=g;s(p)},ti=(d,p,g)=>{const{bum:_,scope:v,update:T,subTree:k,um:C}=d;_&&_i(_),v.stop(),T&&(T.active=!1,Xt(k,d,p,g)),C&&Jt(C,p),Jt(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Bt=(d,p,g,_=!1,v=!1,T=0)=>{for(let k=T;k<d.length;k++)Xt(d[k],p,g,_,v)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),N=(d,p,g)=>{d==null?p._vnode&&Xt(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,g),au(),Uf(),p._vnode=d},S={p:R,um:Xt,m:Ie,r:Jn,mt:jr,mc:fe,pc:it,pbc:ne,n:y,o:e};let B,ot;return t&&([B,ot]=t(S)),{render:N,hydrate:B,createApp:q_(N,B)}}function In({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function X_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function sd(e,t,n=!1){const r=e.children,s=t.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=rn(s[i]),a.el=o.el),n||sd(o,a)),a.type===fo&&(a.el=o.el)}}function J_(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Z_=e=>e.__isTeleport,Zt=Symbol.for("v-fgt"),fo=Symbol.for("v-txt"),ys=Symbol.for("v-cmt"),Zo=Symbol.for("v-stc"),ss=[];let _e=null;function oe(e=!1){ss.push(_e=e?null:[])}function ty(){ss.pop(),_e=ss[ss.length-1]||null}let Es=1;function yu(e){Es+=e}function ey(e){return e.dynamicChildren=Es>0?_e||lr:null,ty(),Es>0&&_e&&_e.push(e),e}function ae(e,t,n,r,s,i){return ey(j(e,t,n,r,s,i,!0))}function $a(e){return e?e.__v_isVNode===!0:!1}function Kr(e,t){return e.type===t.type&&e.key===t.key}const po="__vInternal",id=({key:e})=>e??null,wi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?bt(e)||Kt(e)||Y(e)?{i:ue,r:e,k:t,f:!!n}:e:null);function j(e,t=null,n=null,r=0,s=null,i=e===Zt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&id(t),ref:t&&wi(t),scopeId:co,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ue};return a?(Bc(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=bt(n)?8:16),Es>0&&!o&&_e&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_e.push(c),c}const Qt=ny;function ny(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===E_)&&(e=ys),$a(e)){const a=Er(e,t,!0);return n&&Bc(a,n),Es>0&&!i&&_e&&(a.shapeFlag&6?_e[_e.indexOf(e)]=a:_e.push(a)),a.patchFlag|=-2,a}if(dy(e)&&(e=e.__vccOpts),t){t=ry(t);let{class:a,style:c}=t;a&&!bt(a)&&(t.class=Cc(a)),dt(c)&&(Vf(c)&&!K(c)&&(c=Lt({},c)),t.style=Un(c))}const o=bt(e)?1:w_(e)?128:Z_(e)?64:dt(e)?4:Y(e)?2:0;return j(e,t,n,r,s,o,i,!0)}function ry(e){return e?Vf(e)||po in e?Lt({},e):e:null}function Er(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?sy(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&id(a),ref:t&&t.ref?n&&s?K(s)?s.concat(wi(t)):[s,wi(t)]:wi(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Zt?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Er(e.ssContent),ssFallback:e.ssFallback&&Er(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function is(e=" ",t=0){return Qt(fo,null,e,t)}function be(e){return e==null||typeof e=="boolean"?Qt(ys):K(e)?Qt(Zt,null,e.slice()):typeof e=="object"?rn(e):Qt(fo,null,String(e))}function rn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Er(e)}function Bc(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Bc(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(po in t)?t._ctx=ue:s===3&&ue&&(ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:ue},n=32):(t=String(t),r&64?(n=16,t=[is(t)]):n=8);e.children=t,e.shapeFlag|=n}function sy(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Cc([t.class,r.class]));else if(s==="style")t.style=Un([t.style,r.style]);else if(to(s)){const i=t[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Re(e,t,n,r=null){Ee(e,t,7,[n,r])}const iy=Jf();let oy=0;function ay(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||iy,i={uid:oy++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:td(r,s),emitsOptions:jf(r,s),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:r.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=p_.bind(null,i),e.ce&&e.ce(i),i}let kt=null,Uc,nr,Eu="__VUE_INSTANCE_SETTERS__";(nr=Da()[Eu])||(nr=Da()[Eu]=[]),nr.push(e=>kt=e),Uc=e=>{nr.length>1?nr.forEach(t=>t(e)):nr[0](e)};const vr=e=>{Uc(e),e.scope.on()},Ln=()=>{kt&&kt.scope.off(),Uc(null)};function od(e){return e.vnode.shapeFlag&4}let vs=!1;function cy(e,t=!1){vs=t;const{props:n,children:r}=e.vnode,s=od(e);K_(e,n,s,t),W_(e,r);const i=s?ly(e,t):void 0;return vs=!1,i}function ly(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=xf(new Proxy(e.ctx,O_));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?hy(e):null;vr(e),kr();const i=cn(r,e,0,[e.props,s]);if(Mr(),Ln(),df(i)){if(i.then(Ln,Ln),t)return i.then(o=>{vu(e,o,t)}).catch(o=>{oo(o,e,0)});e.asyncDep=i}else vu(e,i,t)}else ad(e,t)}function vu(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:dt(t)&&(e.setupState=Of(t)),ad(e,n)}let wu;function ad(e,t,n){const r=e.type;if(!e.render){if(!t&&wu&&!r.render){const s=r.template||Lc(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Lt(Lt({isCustomElement:i,delimiters:a},o),c);r.render=wu(s,l)}}e.render=r.render||Ve}{vr(e),kr();try{L_(e)}finally{Mr(),Ln()}}}function uy(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ee(e,"get","$attrs"),t[n]}}))}function hy(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return uy(e)},slots:e.slots,emit:e.emit,expose:t}}function mo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Of(xf(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in rs)return rs[n](e)},has(t,n){return n in t||n in rs}}))}function fy(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function dy(e){return Y(e)&&"__vccOpts"in e}const ge=(e,t)=>c_(e,t,vs);function cd(e,t,n){const r=arguments.length;return r===2?dt(t)&&!K(t)?$a(t)?Qt(e,null,[t]):Qt(e,t):Qt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$a(n)&&(n=[n]),Qt(e,t,n))}const py=Symbol.for("v-scx"),my=()=>He(py),gy="3.3.10",_y="http://www.w3.org/2000/svg",bn=typeof document<"u"?document:null,Tu=bn&&bn.createElement("template"),yy={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?bn.createElementNS(_y,e):bn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>bn.createTextNode(e),createComment:e=>bn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Tu.innerHTML=r?`<svg>${e}</svg>`:e;const a=Tu.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ey=Symbol("_vtc");function vy(e,t,n){const r=e[Ey];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const $c=Symbol("_vod"),ta={beforeMount(e,{value:t},{transition:n}){e[$c]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):zr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),zr(e,!0),r.enter(e)):r.leave(e,()=>{zr(e,!1)}):zr(e,t))},beforeUnmount(e,{value:t}){zr(e,t)}};function zr(e,t){e.style.display=t?e[$c]:"none"}function wy(e,t,n){const r=e.style,s=bt(n);if(n&&!s){if(t&&!bt(t))for(const i in t)n[i]==null&&ja(r,i,"");for(const i in n)ja(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),$c in e&&(r.display=i)}}const Iu=/\s*!important$/;function ja(e,t,n){if(K(n))n.forEach(r=>ja(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ty(e,t);Iu.test(n)?e.setProperty(xr(r),n.replace(Iu,""),"important"):e[r]=n}}const Au=["Webkit","Moz","ms"],ea={};function Ty(e,t){const n=ea[t];if(n)return n;let r=Oe(t);if(r!=="filter"&&r in e)return ea[t]=r;r=ro(r);for(let s=0;s<Au.length;s++){const i=Au[s]+r;if(i in e)return ea[t]=i}return t}const Ru="http://www.w3.org/1999/xlink";function Iy(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ru,t.slice(6,t.length)):e.setAttributeNS(Ru,t,n);else{const i=xg(t);n==null||i&&!gf(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ay(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=gf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Cn(e,t,n,r){e.addEventListener(t,n,r)}function Ry(e,t,n,r){e.removeEventListener(t,n,r)}const bu=Symbol("_vei");function by(e,t,n,r,s=null){const i=e[bu]||(e[bu]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=Cy(t);if(r){const l=i[t]=Dy(r,s);Cn(e,a,l,c)}else o&&(Ry(e,a,o,c),i[t]=void 0)}}const Cu=/(?:Once|Passive|Capture)$/;function Cy(e){let t;if(Cu.test(e)){t={};let r;for(;r=e.match(Cu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):xr(e.slice(2)),t]}let na=0;const Py=Promise.resolve(),Sy=()=>na||(Py.then(()=>na=0),na=Date.now());function Dy(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(Vy(r,n.value),t,5,[r])};return n.value=e,n.attached=Sy(),n}function Vy(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Pu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,xy=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?vy(e,r,s):t==="style"?wy(e,n,r):to(t)?Ac(t)||by(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ky(e,t,r,s))?Ay(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Iy(e,t,r,s))};function ky(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Pu(t)&&Y(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;return!(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")}return Pu(t)&&bt(n)?!1:t in e}const xi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return K(t)?n=>_i(t,n):t};function My(e){e.target.composing=!0}function Su(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const dr=Symbol("_assign"),Du={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[dr]=xi(s);const i=r||s.props&&s.props.type==="number";Cn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Sa(a)),e[dr](a)}),n&&Cn(e,"change",()=>{e.value=e.value.trim()}),t||(Cn(e,"compositionstart",My),Cn(e,"compositionend",Su),Cn(e,"change",Su))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e[dr]=xi(i),e.composing)return;const o=s||e.type==="number"?Sa(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===a)||(e.value=a))}},Ny={deep:!0,created(e,t,n){e[dr]=xi(n),Cn(e,"change",()=>{const r=e._modelValue,s=Oy(e),i=e.checked,o=e[dr];if(K(r)){const a=_f(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(eo(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(ld(e,i))})},mounted:Vu,beforeUpdate(e,t,n){e[dr]=xi(n),Vu(e,t,n)}};function Vu(e,{value:t,oldValue:n},r){e._modelValue=t,K(t)?e.checked=_f(t,r.props.value)>-1:eo(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=so(t,ld(e,!0)))}function Oy(e){return"_value"in e?e._value:e.value}function ld(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Ly=Lt({patchProp:xy},yy);let xu;function Fy(){return xu||(xu=Q_(Ly))}const By=(...e)=>{const t=Fy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Uy(r);if(!s)return;const i=t._component;!Y(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Uy(e){return bt(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const sr=typeof window<"u";function $y(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const at=Object.assign;function ra(e,t){const n={};for(const r in t){const s=t[r];n[r]=ve(s)?s.map(e):e(s)}return n}const os=()=>{},ve=Array.isArray,jy=/\/$/,qy=e=>e.replace(jy,"");function sa(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Wy(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Ky(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ku(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function zy(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&wr(t.matched[r],n.matched[s])&&ud(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function wr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ud(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Hy(e[n],t[n]))return!1;return!0}function Hy(e,t){return ve(e)?Mu(e,t):ve(t)?Mu(t,e):e===t}function Mu(e,t){return ve(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Wy(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ws;(function(e){e.pop="pop",e.push="push"})(ws||(ws={}));var as;(function(e){e.back="back",e.forward="forward",e.unknown=""})(as||(as={}));function Gy(e){if(!e)if(sr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),qy(e)}const Qy=/^[^#]+#/;function Yy(e,t){return e.replace(Qy,"#")+t}function Xy(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const go=()=>({left:window.pageXOffset,top:window.pageYOffset});function Jy(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Xy(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Nu(e,t){return(history.state?history.state.position-t:-1)+e}const qa=new Map;function Zy(e,t){qa.set(e,t)}function tE(e){const t=qa.get(e);return qa.delete(e),t}let eE=()=>location.protocol+"//"+location.host;function hd(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ku(c,"")}return ku(n,e)+r+s}function nE(e,t,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const m=hd(e,location),A=n.value,R=t.value;let b=0;if(f){if(n.value=m,t.value=f,o&&o===A){o=null;return}b=R?f.position-R.position:0}else r(m);s.forEach(x=>{x(n.value,A,{delta:b,type:ws.pop,direction:b?b>0?as.forward:as.back:as.unknown})})};function c(){o=n.value}function l(f){s.push(f);const m=()=>{const A=s.indexOf(f);A>-1&&s.splice(A,1)};return i.push(m),m}function u(){const{history:f}=window;f.state&&f.replaceState(at({},f.state,{scroll:go()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Ou(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?go():null}}function rE(e){const{history:t,location:n}=window,r={value:hd(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=e.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:eE()+e+c;try{t[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](f)}}function o(c,l){const u=at({},t.state,Ou(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=at({},s.value,t.state,{forward:c,scroll:go()});i(u.current,u,!0);const h=at({},Ou(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function sE(e){e=Gy(e);const t=rE(e),n=nE(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=at({location:"",base:e,go:r,createHref:Yy.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function iE(e){return typeof e=="string"||e&&typeof e=="object"}function fd(e){return typeof e=="string"||typeof e=="symbol"}const nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dd=Symbol("");var Lu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Lu||(Lu={}));function Tr(e,t){return at(new Error,{type:e,[dd]:!0},t)}function $e(e,t){return e instanceof Error&&dd in e&&(t==null||!!(e.type&t))}const Fu="[^/]+?",oE={sensitive:!1,strict:!1,start:!0,end:!0},aE=/[.+*?^${}()[\]/\\]/g;function cE(e,t){const n=at({},oE,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let m=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(aE,"\\$&"),m+=40;else if(f.type===1){const{value:A,repeatable:R,optional:b,regexp:x}=f;i.push({name:A,repeatable:R,optional:b});const M=x||Fu;if(M!==Fu){m+=10;try{new RegExp(`(${M})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${A}" (${M}): `+L.message)}}let H=R?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(H=b&&l.length<2?`(?:/${H})`:"/"+H),b&&(H+="?"),s+=H,m+=20,b&&(m+=-8),R&&(m+=-20),M===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",A=i[f-1];h[A.name]=m&&A.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const f of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:A,repeatable:R,optional:b}=m,x=A in l?l[A]:"";if(ve(x)&&!R)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const M=ve(x)?x.join("/"):x;if(!M)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${A}"`);u+=M}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function lE(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function uE(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=lE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Bu(r))return 1;if(Bu(s))return-1}return s.length-r.length}function Bu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const hE={type:0,value:""},fE=/[a-zA-Z0-9_]/;function dE(e){if(!e)return[[]];if(e==="/")return[[hE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:fE.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function pE(e,t,n){const r=cE(dE(e.path),n),s=at(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function mE(e,t){const n=[],r=new Map;t=ju({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,h,f){const m=!f,A=gE(u);A.aliasOf=f&&f.record;const R=ju(t,u),b=[A];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of H)b.push(at({},A,{components:f?f.record.components:A.components,path:L,aliasOf:f?f.record:A}))}let x,M;for(const H of b){const{path:L}=H;if(h&&L[0]!=="/"){const _t=h.record.path,yt=_t[_t.length-1]==="/"?"":"/";H.path=h.record.path+(L&&yt+L)}if(x=pE(H,h,R),f?f.alias.push(x):(M=M||x,M!==x&&M.alias.push(x),m&&u.name&&!$u(x)&&o(u.name)),A.children){const _t=A.children;for(let yt=0;yt<_t.length;yt++)i(_t[yt],x,f&&f.children[yt])}f=f||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return M?()=>{o(M)}:os}function o(u){if(fd(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&uE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!pd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!$u(u)&&r.set(u.record.name,u)}function l(u,h){let f,m={},A,R;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Tr(1,{location:u});R=f.record.name,m=at(Uu(h.params,f.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Uu(u.params,f.keys.map(M=>M.name))),A=f.stringify(m)}else if("path"in u)A=u.path,f=n.find(M=>M.re.test(A)),f&&(m=f.parse(A),R=f.record.name);else{if(f=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!f)throw Tr(1,{location:u,currentLocation:h});R=f.record.name,m=at({},h.params,u.params),A=f.stringify(m)}const b=[];let x=f;for(;x;)b.unshift(x.record),x=x.parent;return{name:R,path:A,params:m,matched:b,meta:yE(b)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Uu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function gE(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:_E(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function _E(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function $u(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function yE(e){return e.reduce((t,n)=>at(t,n.meta),{})}function ju(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function pd(e,t){return t.children.some(n=>n===e||pd(e,n))}const md=/#/g,EE=/&/g,vE=/\//g,wE=/=/g,TE=/\?/g,gd=/\+/g,IE=/%5B/g,AE=/%5D/g,_d=/%5E/g,RE=/%60/g,yd=/%7B/g,bE=/%7C/g,Ed=/%7D/g,CE=/%20/g;function jc(e){return encodeURI(""+e).replace(bE,"|").replace(IE,"[").replace(AE,"]")}function PE(e){return jc(e).replace(yd,"{").replace(Ed,"}").replace(_d,"^")}function Ka(e){return jc(e).replace(gd,"%2B").replace(CE,"+").replace(md,"%23").replace(EE,"%26").replace(RE,"`").replace(yd,"{").replace(Ed,"}").replace(_d,"^")}function SE(e){return Ka(e).replace(wE,"%3D")}function DE(e){return jc(e).replace(md,"%23").replace(TE,"%3F")}function VE(e){return e==null?"":DE(e).replace(vE,"%2F")}function ki(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function xE(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(gd," "),o=i.indexOf("="),a=ki(o<0?i:i.slice(0,o)),c=o<0?null:ki(i.slice(o+1));if(a in t){let l=t[a];ve(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function qu(e){let t="";for(let n in e){const r=e[n];if(n=SE(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ve(r)?r.map(i=>i&&Ka(i)):[r&&Ka(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function kE(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ve(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const ME=Symbol(""),Ku=Symbol(""),qc=Symbol(""),vd=Symbol(""),za=Symbol("");function Hr(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function sn(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Tr(4,{from:n,to:t})):h instanceof Error?a(h):iE(h)?a(Tr(2,{from:t,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function ia(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(NE(a)){const l=(a.__vccOpts||a)[t];l&&s.push(sn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=$y(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[t];return f&&sn(f,n,r,i,o)()}))}}return s}function NE(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function zu(e){const t=He(qc),n=He(vd),r=ge(()=>t.resolve(On(e.to))),s=ge(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(wr.bind(null,u));if(f>-1)return f;const m=Hu(c[l-2]);return l>1&&Hu(u)===m&&h[h.length-1].path!==m?h.findIndex(wr.bind(null,c[l-2])):f}),i=ge(()=>s.value>-1&&BE(n.params,r.value.params)),o=ge(()=>s.value>-1&&s.value===n.matched.length-1&&ud(n.params,r.value.params));function a(c={}){return FE(c)?t[On(e.replace)?"replace":"push"](On(e.to)).catch(os):Promise.resolve()}return{route:r,href:ge(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const OE=Wf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zu,setup(e,{slots:t}){const n=Fs(zu(e)),{options:r}=He(qc),s=ge(()=>({[Wu(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Wu(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:cd("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),LE=OE;function FE(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function BE(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ve(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Hu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Wu=(e,t,n)=>e??t??n,UE=Wf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=He(za),s=ge(()=>e.route||r.value),i=He(Ku,0),o=ge(()=>{let l=On(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ge(()=>s.value.matched[o.value]);vi(Ku,ge(()=>o.value+1)),vi(ME,a),vi(za,s);const c=r_();return yi(()=>[c.value,a.value,e.name],([l,u,h],[f,m,A])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!wr(u,m)||!f)&&(u.enterCallbacks[h]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,h=a.value,f=h&&h.components[u];if(!f)return Gu(n.default,{Component:f,route:l});const m=h.props[u],A=m?m===!0?l.params:typeof m=="function"?m(l):m:null,b=cd(f,at({},A,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Gu(n.default,{Component:b,route:l})||b}}});function Gu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const wd=UE;function $E(e){const t=mE(e.routes,e),n=e.parseQuery||xE,r=e.stringifyQuery||qu,s=e.history,i=Hr(),o=Hr(),a=Hr(),c=s_(nn);let l=nn;sr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ra.bind(null,y=>""+y),h=ra.bind(null,VE),f=ra.bind(null,ki);function m(y,N){let S,B;return fd(y)?(S=t.getRecordMatcher(y),B=N):B=y,t.addRoute(B,S)}function A(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function R(){return t.getRoutes().map(y=>y.record)}function b(y){return!!t.getRecordMatcher(y)}function x(y,N){if(N=at({},N||c.value),typeof y=="string"){const g=sa(n,y,N.path),_=t.resolve({path:g.path},N),v=s.createHref(g.fullPath);return at(g,_,{params:f(_.params),hash:ki(g.hash),redirectedFrom:void 0,href:v})}let S;if("path"in y)S=at({},y,{path:sa(n,y.path,N.path).path});else{const g=at({},y.params);for(const _ in g)g[_]==null&&delete g[_];S=at({},y,{params:h(g)}),N.params=h(N.params)}const B=t.resolve(S,N),ot=y.hash||"";B.params=u(f(B.params));const d=Ky(r,at({},y,{hash:PE(ot),path:B.path})),p=s.createHref(d);return at({fullPath:d,hash:ot,query:r===qu?kE(y.query):y.query||{}},B,{redirectedFrom:void 0,href:p})}function M(y){return typeof y=="string"?sa(n,y,c.value.path):at({},y)}function H(y,N){if(l!==y)return Tr(8,{from:N,to:y})}function L(y){return Ft(y)}function _t(y){return L(at(M(y),{replace:!0}))}function yt(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:S}=N;let B=typeof S=="function"?S(y):S;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=M(B):{path:B},B.params={}),at({query:y.query,hash:y.hash,params:"path"in B?{}:y.params},B)}}function Ft(y,N){const S=l=x(y),B=c.value,ot=y.state,d=y.force,p=y.replace===!0,g=yt(S);if(g)return Ft(at(M(g),{state:typeof g=="object"?at({},ot,g.state):ot,force:d,replace:p}),N||S);const _=S;_.redirectedFrom=N;let v;return!d&&zy(r,B,S)&&(v=Tr(16,{to:_,from:B}),Ie(B,B,!0,!1)),(v?Promise.resolve(v):ne(_,B)).catch(T=>$e(T)?$e(T,2)?T:tn(T):it(T,_,B)).then(T=>{if(T){if($e(T,2))return Ft(at({replace:p},M(T.to),{state:typeof T.to=="object"?at({},ot,T.to.state):ot,force:d}),N||_)}else T=wn(_,B,!0,p,ot);return Ze(_,B,T),T})}function fe(y,N){const S=H(y,N);return S?Promise.reject(S):Promise.resolve()}function Je(y){const N=Zn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function ne(y,N){let S;const[B,ot,d]=jE(y,N);S=ia(B.reverse(),"beforeRouteLeave",y,N);for(const g of B)g.leaveGuards.forEach(_=>{S.push(sn(_,y,N))});const p=fe.bind(null,y,N);return S.push(p),Bt(S).then(()=>{S=[];for(const g of i.list())S.push(sn(g,y,N));return S.push(p),Bt(S)}).then(()=>{S=ia(ot,"beforeRouteUpdate",y,N);for(const g of ot)g.updateGuards.forEach(_=>{S.push(sn(_,y,N))});return S.push(p),Bt(S)}).then(()=>{S=[];for(const g of d)if(g.beforeEnter)if(ve(g.beforeEnter))for(const _ of g.beforeEnter)S.push(sn(_,y,N));else S.push(sn(g.beforeEnter,y,N));return S.push(p),Bt(S)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),S=ia(d,"beforeRouteEnter",y,N),S.push(p),Bt(S))).then(()=>{S=[];for(const g of o.list())S.push(sn(g,y,N));return S.push(p),Bt(S)}).catch(g=>$e(g,8)?g:Promise.reject(g))}function Ze(y,N,S){a.list().forEach(B=>Je(()=>B(y,N,S)))}function wn(y,N,S,B,ot){const d=H(y,N);if(d)return d;const p=N===nn,g=sr?history.state:{};S&&(B||p?s.replace(y.fullPath,at({scroll:p&&g&&g.scroll},ot)):s.push(y.fullPath,ot)),c.value=y,Ie(y,N,S,p),tn()}let Te;function jr(){Te||(Te=s.listen((y,N,S)=>{if(!ti.listening)return;const B=x(y),ot=yt(B);if(ot){Ft(at(ot,{replace:!0}),B).catch(os);return}l=B;const d=c.value;sr&&Zy(Nu(d.fullPath,S.delta),go()),ne(B,d).catch(p=>$e(p,12)?p:$e(p,2)?(Ft(p.to,B).then(g=>{$e(g,20)&&!S.delta&&S.type===ws.pop&&s.go(-1,!1)}).catch(os),Promise.reject()):(S.delta&&s.go(-S.delta,!1),it(p,B,d))).then(p=>{p=p||wn(B,d,!1),p&&(S.delta&&!$e(p,8)?s.go(-S.delta,!1):S.type===ws.pop&&$e(p,20)&&s.go(-1,!1)),Ze(B,d,p)}).catch(os)}))}let Xn=Hr(),Ct=Hr(),ut;function it(y,N,S){tn(y);const B=Ct.list();return B.length?B.forEach(ot=>ot(y,N,S)):console.error(y),Promise.reject(y)}function Ue(){return ut&&c.value!==nn?Promise.resolve():new Promise((y,N)=>{Xn.add([y,N])})}function tn(y){return ut||(ut=!y,jr(),Xn.list().forEach(([N,S])=>y?S(y):N()),Xn.reset()),y}function Ie(y,N,S,B){const{scrollBehavior:ot}=e;if(!sr||!ot)return Promise.resolve();const d=!S&&tE(Nu(y.fullPath,0))||(B||!S)&&history.state&&history.state.scroll||null;return Ff().then(()=>ot(y,N,d)).then(p=>p&&Jy(p)).catch(p=>it(p,y,N))}const Xt=y=>s.go(y);let Jn;const Zn=new Set,ti={currentRoute:c,listening:!0,addRoute:m,removeRoute:A,hasRoute:b,getRoutes:R,resolve:x,options:e,push:L,replace:_t,go:Xt,back:()=>Xt(-1),forward:()=>Xt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ct.add,isReady:Ue,install(y){const N=this;y.component("RouterLink",LE),y.component("RouterView",wd),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>On(c)}),sr&&!Jn&&c.value===nn&&(Jn=!0,L(s.location).catch(ot=>{}));const S={};for(const ot in nn)Object.defineProperty(S,ot,{get:()=>c.value[ot],enumerable:!0});y.provide(qc,N),y.provide(vd,Sf(S)),y.provide(za,c);const B=y.unmount;Zn.add(y),y.unmount=function(){Zn.delete(y),Zn.size<1&&(l=nn,Te&&Te(),Te=null,c.value=nn,Jn=!1,ut=!1),B()}}};function Bt(y){return y.reduce((N,S)=>N.then(()=>Je(S)),Promise.resolve())}return ti}function jE(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>wr(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>wr(l,c))||s.push(c))}return[n,r,s]}const _o=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},qE=e=>(lo("data-v-a8a00dc8"),e=e(),uo(),e),KE=qE(()=>j("header",null,[j("div",{class:"wrapper"},[j("nav")])],-1)),zE={__name:"App",setup(e){return(t,n)=>(oe(),ae(Zt,null,[KE,Qt(On(wd))],64))}},HE=_o(zE,[["__scopeId","data-v-a8a00dc8"]]),WE="modulepreload",GE=function(e){return"/"+e},Qu={},QE=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=GE(o),o in Qu)return;Qu[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const f=i[h];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":WE,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},YE={name:"ToggleButton",props:{member:Object},data(){return{}},methods:{toggleCheckbox(e){e.attendance=!e.attendance}},mounted(){}},XE=e=>(lo("data-v-6785bba9"),e=e(),uo(),e),JE={class:"panel-body"},ZE={class:"switch"},tv=["checked"],ev=XE(()=>j("div",{class:"slider round"},null,-1));function nv(e,t,n,r,s,i){return oe(),ae("div",JE,[j("label",ZE,[j("input",{type:"checkbox",onClick:t[0]||(t[0]=o=>i.toggleCheckbox(n.member)),checked:n.member.attendance===!0},null,8,tv),ev])])}const Td=_o(YE,[["render",nv],["__scopeId","data-v-6785bba9"]]),qe=Fs({members:[],showCollege:!0});var Yu={};/**
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
 */const Id=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},rv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ad={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),r.push(n[u],n[h],n[f],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Id(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):rv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new sv;const f=i<<2|a>>4;if(r.push(f),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const A=l<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class sv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iv=function(e){const t=Id(e);return Ad.encodeByteArray(t,!0)},Mi=function(e){return iv(e).replace(/\./g,"")},ov=function(e){try{return Ad.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function av(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cv=()=>av().__FIREBASE_DEFAULTS__,lv=()=>{if(typeof process>"u"||typeof Yu>"u")return;const e=Yu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},uv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ov(e[1]);return t&&JSON.parse(t)},Kc=()=>{try{return cv()||lv()||uv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},hv=e=>{var t,n;return(n=(t=Kc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},fv=e=>{const t=hv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Rd=()=>{var e;return(e=Kc())===null||e===void 0?void 0:e.config};/**
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
 */class dv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function pv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Mi(JSON.stringify(n)),Mi(JSON.stringify(o)),a].join(".")}/**
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
 */function Ni(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mv(){var e;const t=(e=Kc())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gv(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function _v(){return!mv()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zc(){try{return typeof indexedDB=="object"}catch{return!1}}function bd(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function yv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ev="FirebaseError";class yn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ev,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?vv(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yn(s,a,r)}}function vv(e,t){return e.replace(wv,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const wv=/\{\$([^}]+)}/g;function Oi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Xu(i)&&Xu(o)){if(!Oi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xu(e){return e!==null&&typeof e=="object"}/**
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
 */const Tv=1e3,Iv=2,Av=4*60*60*1e3,Rv=.5;function Ju(e,t=Tv,n=Iv){const r=t*Math.pow(n,e),s=Math.round(Rv*r*(Math.random()-.5)*2);return Math.min(Av,r+s)}/**
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
 */function $n(e){return e&&e._delegate?e._delegate:e}class Ge{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class bv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new dv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Pv(t))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=An){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=An){return this.instances.has(t)}getOptions(t=An){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=An){return this.component?this.component.multipleInstances?t:An:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cv(e){return e===An?void 0:e}function Pv(e){return e.instantiationMode==="EAGER"}/**
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
 */class Sv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new bv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var nt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(nt||(nt={}));const Dv={debug:nt.DEBUG,verbose:nt.VERBOSE,info:nt.INFO,warn:nt.WARN,error:nt.ERROR,silent:nt.SILENT},Vv=nt.INFO,xv={[nt.DEBUG]:"log",[nt.VERBOSE]:"log",[nt.INFO]:"info",[nt.WARN]:"warn",[nt.ERROR]:"error"},kv=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=xv[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Hc{constructor(t){this.name=t,this._logLevel=Vv,this._logHandler=kv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in nt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Dv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,nt.DEBUG,...t),this._logHandler(this,nt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,nt.VERBOSE,...t),this._logHandler(this,nt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,nt.INFO,...t),this._logHandler(this,nt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,nt.WARN,...t),this._logHandler(this,nt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,nt.ERROR,...t),this._logHandler(this,nt.ERROR,...t)}}const Mv=(e,t)=>t.some(n=>e instanceof n);let Zu,th;function Nv(){return Zu||(Zu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ov(){return th||(th=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cd=new WeakMap,Ha=new WeakMap,Pd=new WeakMap,oa=new WeakMap,Wc=new WeakMap;function Lv(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(ln(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Cd.set(n,e)}).catch(()=>{}),Wc.set(t,e),t}function Fv(e){if(Ha.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ha.set(e,t)}let Wa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ha.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Pd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Bv(e){Wa=e(Wa)}function Uv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(aa(this),t,...n);return Pd.set(r,t.sort?t.sort():[t]),ln(r)}:Ov().includes(e)?function(...t){return e.apply(aa(this),t),ln(Cd.get(this))}:function(...t){return ln(e.apply(aa(this),t))}}function $v(e){return typeof e=="function"?Uv(e):(e instanceof IDBTransaction&&Fv(e),Mv(e,Nv())?new Proxy(e,Wa):e)}function ln(e){if(e instanceof IDBRequest)return Lv(e);if(oa.has(e))return oa.get(e);const t=$v(e);return t!==e&&(oa.set(e,t),Wc.set(t,e)),t}const aa=e=>Wc.get(e);function jv(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=ln(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ln(o.result),c.oldVersion,c.newVersion,ln(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const qv=["get","getKey","getAll","getAllKeys","count"],Kv=["put","add","delete","clear"],ca=new Map;function eh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ca.get(t))return ca.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Kv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ca.set(t,i),i}Bv(e=>({...e,get:(t,n,r)=>eh(t,n)||e.get(t,n,r),has:(t,n)=>!!eh(t,n)||e.has(t,n)}));/**
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
 */class zv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ga="@firebase/app",nh="0.9.26";/**
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
 */const jn=new Hc("@firebase/app"),Wv="@firebase/app-compat",Gv="@firebase/analytics-compat",Qv="@firebase/analytics",Yv="@firebase/app-check-compat",Xv="@firebase/app-check",Jv="@firebase/auth",Zv="@firebase/auth-compat",tw="@firebase/database",ew="@firebase/database-compat",nw="@firebase/functions",rw="@firebase/functions-compat",sw="@firebase/installations",iw="@firebase/installations-compat",ow="@firebase/messaging",aw="@firebase/messaging-compat",cw="@firebase/performance",lw="@firebase/performance-compat",uw="@firebase/remote-config",hw="@firebase/remote-config-compat",fw="@firebase/storage",dw="@firebase/storage-compat",pw="@firebase/firestore",mw="@firebase/firestore-compat",gw="firebase",_w="10.7.2";/**
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
 */const Qa="[DEFAULT]",yw={[Ga]:"fire-core",[Wv]:"fire-core-compat",[Qv]:"fire-analytics",[Gv]:"fire-analytics-compat",[Xv]:"fire-app-check",[Yv]:"fire-app-check-compat",[Jv]:"fire-auth",[Zv]:"fire-auth-compat",[tw]:"fire-rtdb",[ew]:"fire-rtdb-compat",[nw]:"fire-fn",[rw]:"fire-fn-compat",[sw]:"fire-iid",[iw]:"fire-iid-compat",[ow]:"fire-fcm",[aw]:"fire-fcm-compat",[cw]:"fire-perf",[lw]:"fire-perf-compat",[uw]:"fire-rc",[hw]:"fire-rc-compat",[fw]:"fire-gcs",[dw]:"fire-gcs-compat",[pw]:"fire-fst",[mw]:"fire-fst-compat","fire-js":"fire-js",[gw]:"fire-js-all"};/**
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
 */const Li=new Map,Ya=new Map;function Ew(e,t){try{e.container.addComponent(t)}catch(n){jn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pn(e){const t=e.name;if(Ya.has(t))return jn.debug(`There were multiple attempts to register component ${t}.`),!1;Ya.set(t,e);for(const n of Li.values())Ew(n,e);return!0}function Bs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const vw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},un=new yo("app","Firebase",vw);/**
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
 */class ww{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
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
 */const Tw=_w;function Sd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Qa,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw un.create("bad-app-name",{appName:String(s)});if(n||(n=Rd()),!n)throw un.create("no-options");const i=Li.get(s);if(i){if(Oi(n,i.options)&&Oi(r,i.config))return i;throw un.create("duplicate-app",{appName:s})}const o=new Sv(s);for(const c of Ya.values())o.addComponent(c);const a=new ww(n,r,o);return Li.set(s,a),a}function Dd(e=Qa){const t=Li.get(e);if(!t&&e===Qa&&Rd())return Sd();if(!t)throw un.create("no-app",{appName:e});return t}function xe(e,t,n){var r;let s=(r=yw[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jn.warn(a.join(" "));return}pn(new Ge(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Iw="firebase-heartbeat-database",Aw=1,Ts="firebase-heartbeat-store";let la=null;function Vd(){return la||(la=jv(Iw,Aw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ts)}catch(n){console.warn(n)}}}}).catch(e=>{throw un.create("idb-open",{originalErrorMessage:e.message})})),la}async function Rw(e){try{return await(await Vd()).transaction(Ts).objectStore(Ts).get(xd(e))}catch(t){if(t instanceof yn)jn.warn(t.message);else{const n=un.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});jn.warn(n.message)}}}async function rh(e,t){try{const r=(await Vd()).transaction(Ts,"readwrite");await r.objectStore(Ts).put(t,xd(e)),await r.done}catch(n){if(n instanceof yn)jn.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(r.message)}}}function xd(e){return`${e.name}!${e.options.appId}`}/**
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
 */const bw=1024,Cw=30*24*60*60*1e3;class Pw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sh();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Cw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sh(),{heartbeatsToSend:r,unsentEntries:s}=Sw(this._heartbeatsCache.heartbeats),i=Mi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sh(){return new Date().toISOString().substring(0,10)}function Sw(e,t=bw){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ih(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ih(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zc()?bd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ih(e){return Mi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Vw(e){pn(new Ge("platform-logger",t=>new zv(t),"PRIVATE")),pn(new Ge("heartbeat",t=>new Pw(t),"PRIVATE")),xe(Ga,nh,e),xe(Ga,nh,"esm2017"),xe("fire-js","")}Vw("");var xw="firebase",kw="10.7.2";/**
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
 */xe(xw,kw,"app");const Mw=(e,t)=>t.some(n=>e instanceof n);let oh,ah;function Nw(){return oh||(oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ow(){return ah||(ah=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kd=new WeakMap,Xa=new WeakMap,Md=new WeakMap,ua=new WeakMap,Gc=new WeakMap;function Lw(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(hn(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&kd.set(n,e)}).catch(()=>{}),Gc.set(t,e),t}function Fw(e){if(Xa.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Xa.set(e,t)}let Ja={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Md.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Bw(e){Ja=e(Ja)}function Uw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ha(this),t,...n);return Md.set(r,t.sort?t.sort():[t]),hn(r)}:Ow().includes(e)?function(...t){return e.apply(ha(this),t),hn(kd.get(this))}:function(...t){return hn(e.apply(ha(this),t))}}function $w(e){return typeof e=="function"?Uw(e):(e instanceof IDBTransaction&&Fw(e),Mw(e,Nw())?new Proxy(e,Ja):e)}function hn(e){if(e instanceof IDBRequest)return Lw(e);if(ua.has(e))return ua.get(e);const t=$w(e);return t!==e&&(ua.set(e,t),Gc.set(t,e)),t}const ha=e=>Gc.get(e);function jw(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=hn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(hn(o.result),c.oldVersion,c.newVersion,hn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const qw=["get","getKey","getAll","getAllKeys","count"],Kw=["put","add","delete","clear"],fa=new Map;function ch(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fa.get(t))return fa.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Kw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return fa.set(t,i),i}Bw(e=>({...e,get:(t,n,r)=>ch(t,n)||e.get(t,n,r),has:(t,n)=>!!ch(t,n)||e.has(t,n)}));const Nd="@firebase/installations",Qc="0.6.4";/**
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
 */const Od=1e4,Ld=`w:${Qc}`,Fd="FIS_v2",zw="https://firebaseinstallations.googleapis.com/v1",Hw=60*60*1e3,Ww="installations",Gw="Installations";/**
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
 */const Qw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qn=new yo(Ww,Gw,Qw);function Bd(e){return e instanceof yn&&e.code.includes("request-failed")}/**
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
 */function Ud({projectId:e}){return`${zw}/projects/${e}/installations`}function $d(e){return{token:e.token,requestStatus:2,expiresIn:Xw(e.expiresIn),creationTime:Date.now()}}async function jd(e,t){const r=(await t.json()).error;return qn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function qd({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Yw(e,{refreshToken:t}){const n=qd(e);return n.append("Authorization",Jw(t)),n}async function Kd(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Xw(e){return Number(e.replace("s","000"))}function Jw(e){return`${Fd} ${e}`}/**
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
 */async function Zw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ud(e),s=qd(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Fd,appId:e.appId,sdkVersion:Ld},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Kd(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:$d(l.authToken)}}else throw await jd("Create Installation",c)}/**
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
 */function zd(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function tT(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const eT=/^[cdef][\w-]{21}$/,Za="";function nT(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=rT(e);return eT.test(n)?n:Za}catch{return Za}}function rT(e){return tT(e).substr(0,22)}/**
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
 */function Eo(e){return`${e.appName}!${e.appId}`}/**
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
 */const Hd=new Map;function Wd(e,t){const n=Eo(e);Gd(n,t),sT(n,t)}function Gd(e,t){const n=Hd.get(e);if(n)for(const r of n)r(t)}function sT(e,t){const n=iT();n&&n.postMessage({key:e,fid:t}),oT()}let Dn=null;function iT(){return!Dn&&"BroadcastChannel"in self&&(Dn=new BroadcastChannel("[Firebase] FID Change"),Dn.onmessage=e=>{Gd(e.data.key,e.data.fid)}),Dn}function oT(){Hd.size===0&&Dn&&(Dn.close(),Dn=null)}/**
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
 */const aT="firebase-installations-database",cT=1,Kn="firebase-installations-store";let da=null;function Yc(){return da||(da=jw(aT,cT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Kn)}}})),da}async function Fi(e,t){const n=Eo(e),s=(await Yc()).transaction(Kn,"readwrite"),i=s.objectStore(Kn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&Wd(e,t.fid),t}async function Qd(e){const t=Eo(e),r=(await Yc()).transaction(Kn,"readwrite");await r.objectStore(Kn).delete(t),await r.done}async function vo(e,t){const n=Eo(e),s=(await Yc()).transaction(Kn,"readwrite"),i=s.objectStore(Kn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Wd(e,a.fid),a}/**
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
 */async function Xc(e){let t;const n=await vo(e.appConfig,r=>{const s=lT(r),i=uT(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Za?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function lT(e){const t=e||{fid:nT(),registrationStatus:0};return Yd(t)}function uT(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(qn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=hT(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:fT(e)}:{installationEntry:t}}async function hT(e,t){try{const n=await Zw(e,t);return Fi(e.appConfig,n)}catch(n){throw Bd(n)&&n.customData.serverCode===409?await Qd(e.appConfig):await Fi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function fT(e){let t=await lh(e.appConfig);for(;t.registrationStatus===1;)await zd(100),t=await lh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Xc(e);return r||n}return t}function lh(e){return vo(e,t=>{if(!t)throw qn.create("installation-not-found");return Yd(t)})}function Yd(e){return dT(e)?{fid:e.fid,registrationStatus:0}:e}function dT(e){return e.registrationStatus===1&&e.registrationTime+Od<Date.now()}/**
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
 */async function pT({appConfig:e,heartbeatServiceProvider:t},n){const r=mT(e,n),s=Yw(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Ld,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Kd(()=>fetch(r,a));if(c.ok){const l=await c.json();return $d(l)}else throw await jd("Generate Auth Token",c)}function mT(e,{fid:t}){return`${Ud(e)}/${t}/authTokens:generate`}/**
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
 */async function Jc(e,t=!1){let n;const r=await vo(e.appConfig,i=>{if(!Xd(i))throw qn.create("not-registered");const o=i.authToken;if(!t&&yT(o))return i;if(o.requestStatus===1)return n=gT(e,t),i;{if(!navigator.onLine)throw qn.create("app-offline");const a=vT(i);return n=_T(e,a),a}});return n?await n:r.authToken}async function gT(e,t){let n=await uh(e.appConfig);for(;n.authToken.requestStatus===1;)await zd(100),n=await uh(e.appConfig);const r=n.authToken;return r.requestStatus===0?Jc(e,t):r}function uh(e){return vo(e,t=>{if(!Xd(t))throw qn.create("not-registered");const n=t.authToken;return wT(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function _T(e,t){try{const n=await pT(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Fi(e.appConfig,r),n}catch(n){if(Bd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Qd(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Fi(e.appConfig,r)}throw n}}function Xd(e){return e!==void 0&&e.registrationStatus===2}function yT(e){return e.requestStatus===2&&!ET(e)}function ET(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Hw}function vT(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function wT(e){return e.requestStatus===1&&e.requestTime+Od<Date.now()}/**
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
 */async function TT(e){const t=e,{installationEntry:n,registrationPromise:r}=await Xc(t);return r?r.catch(console.error):Jc(t).catch(console.error),n.fid}/**
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
 */async function IT(e,t=!1){const n=e;return await AT(n),(await Jc(n,t)).token}async function AT(e){const{registrationPromise:t}=await Xc(e);t&&await t}/**
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
 */function RT(e){if(!e||!e.options)throw pa("App Configuration");if(!e.name)throw pa("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw pa(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function pa(e){return qn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Jd="installations",bT="installations-internal",CT=e=>{const t=e.getProvider("app").getImmediate(),n=RT(t),r=Bs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},PT=e=>{const t=e.getProvider("app").getImmediate(),n=Bs(t,Jd).getImmediate();return{getId:()=>TT(n),getToken:s=>IT(n,s)}};function ST(){pn(new Ge(Jd,CT,"PUBLIC")),pn(new Ge(bT,PT,"PRIVATE"))}ST();xe(Nd,Qc);xe(Nd,Qc,"esm2017");/**
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
 */const Bi="analytics",DT="firebase_id",VT="origin",xT=60*1e3,kT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zc="https://www.googletagmanager.com/gtag/js";/**
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
 */const te=new Hc("@firebase/analytics");/**
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
 */const MT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},se=new yo("analytics","Analytics",MT);/**
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
 */function NT(e){if(!e.startsWith(Zc)){const t=se.create("invalid-gtag-resource",{gtagURL:e});return te.warn(t.message),""}return e}function Zd(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function OT(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function LT(e,t){const n=OT("firebase-js-sdk-policy",{createScriptURL:NT}),r=document.createElement("script"),s=`${Zc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function FT(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function BT(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Zd(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){te.error(a)}e("config",s,i)}async function UT(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Zd(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){te.error(i)}}function $T(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await UT(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await BT(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){te.error(a)}}return s}function jT(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=$T(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function qT(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Zc)&&n.src.includes(e))return n;return null}/**
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
 */const KT=30,zT=1e3;class HT{constructor(t={},n=zT){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const tp=new HT;function WT(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function GT(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:WT(r)},i=kT.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw se.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function QT(e,t=tp,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw se.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw se.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new JT;return setTimeout(async()=>{a.abort()},n!==void 0?n:xT),ep({appId:r,apiKey:s,measurementId:i},o,a,t)}async function ep(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=tp){var i;const{appId:o,measurementId:a}=e;try{await YT(r,t)}catch(c){if(a)return te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await GT(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!XT(l)){if(s.deleteThrottleMetadata(o),a)return te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ju(n,s.intervalMillis,KT):Ju(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),te.debug(`Calling attemptFetch again in ${u} millis`),ep(e,h,r,s)}}function YT(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(se.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function XT(e){if(!(e instanceof yn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class JT{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function ZT(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
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
 */async function tI(){if(zc())try{await bd()}catch(e){return te.warn(se.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return te.warn(se.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function eI(e,t,n,r,s,i,o){var a;const c=QT(e);c.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&te.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>te.error(m)),t.push(c);const l=tI().then(m=>{if(m)return r.getId()}),[u,h]=await Promise.all([c,l]);qT(i)||LT(i,u.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[VT]="firebase",f.update=!0,h!=null&&(f[DT]=h),s("config",u.measurementId,f),u.measurementId}/**
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
 */class nI{constructor(t){this.app=t}_delete(){return delete cs[this.app.options.appId],Promise.resolve()}}let cs={},hh=[];const fh={};let ma="dataLayer",rI="gtag",dh,np,ph=!1;function sI(){const e=[];if(gv()&&e.push("This is a browser extension environment."),yv()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=se.create("invalid-analytics-context",{errorInfo:t});te.warn(n.message)}}function iI(e,t,n){sI();const r=e.options.appId;if(!r)throw se.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw se.create("no-api-key");if(cs[r]!=null)throw se.create("already-exists",{id:r});if(!ph){FT(ma);const{wrappedGtag:i,gtagCore:o}=jT(cs,hh,fh,ma,rI);np=i,dh=o,ph=!0}return cs[r]=eI(e,hh,fh,t,dh,ma,n),new nI(e)}function oI(e=Dd()){e=$n(e);const t=Bs(e,Bi);return t.isInitialized()?t.getImmediate():aI(e)}function aI(e,t={}){const n=Bs(e,Bi);if(n.isInitialized()){const s=n.getImmediate();if(Oi(t,n.getOptions()))return s;throw se.create("already-initialized")}return n.initialize({options:t})}function cI(e,t,n,r){e=$n(e),ZT(np,cs[e.app.options.appId],t,n,r).catch(s=>te.error(s))}const mh="@firebase/analytics",gh="0.10.0";function lI(){pn(new Ge(Bi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return iI(r,s,n)},"PUBLIC")),pn(new Ge("analytics-internal",e,"PRIVATE")),xe(mh,gh),xe(mh,gh,"esm2017");function e(t){try{const n=t.getProvider(Bi).getImmediate();return{logEvent:(r,s,i)=>cI(n,r,s,i)}}catch(n){throw se.create("interop-component-reg-failed",{reason:n})}}}lI();var uI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,tl=tl||{},W=uI||self;function wo(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Us(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function hI(e){return Object.prototype.hasOwnProperty.call(e,ga)&&e[ga]||(e[ga]=++fI)}var ga="closure_uid_"+(1e9*Math.random()>>>0),fI=0;function dI(e,t,n){return e.call.apply(e.bind,arguments)}function pI(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function zt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?zt=dI:zt=pI,zt.apply(null,arguments)}function ai(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Dt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function En(){this.s=this.s,this.o=this.o}var mI=0;En.prototype.s=!1;En.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),mI!=0)&&hI(this)};En.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rp=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function el(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function _h(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(wo(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function Ht(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ht.prototype.h=function(){this.defaultPrevented=!0};var gI=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};W.addEventListener("test",n,t),W.removeEventListener("test",n,t)}catch{}return e}();function Is(e){return/^[\s\xa0]*$/.test(e)}function To(){var e=W.navigator;return e&&(e=e.userAgent)?e:""}function Pe(e){return To().indexOf(e)!=-1}function nl(e){return nl[" "](e),e}nl[" "]=function(){};function _I(e,t){var n=lA;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var yI=Pe("Opera"),Ir=Pe("Trident")||Pe("MSIE"),sp=Pe("Edge"),tc=sp||Ir,ip=Pe("Gecko")&&!(To().toLowerCase().indexOf("webkit")!=-1&&!Pe("Edge"))&&!(Pe("Trident")||Pe("MSIE"))&&!Pe("Edge"),EI=To().toLowerCase().indexOf("webkit")!=-1&&!Pe("Edge");function op(){var e=W.document;return e?e.documentMode:void 0}var ec;t:{var _a="",ya=function(){var e=To();if(ip)return/rv:([^\);]+)(\)|;)/.exec(e);if(sp)return/Edge\/([\d\.]+)/.exec(e);if(Ir)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(EI)return/WebKit\/(\S+)/.exec(e);if(yI)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ya&&(_a=ya?ya[1]:""),Ir){var Ea=op();if(Ea!=null&&Ea>parseFloat(_a)){ec=String(Ea);break t}}ec=_a}var nc;if(W.document&&Ir){var yh=op();nc=yh||parseInt(ec,10)||void 0}else nc=void 0;var vI=nc;function As(e,t){if(Ht.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ip){t:{try{nl(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:wI[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&As.$.h.call(this)}}Dt(As,Ht);var wI={2:"touch",3:"pen",4:"mouse"};As.prototype.h=function(){As.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var $s="closure_listenable_"+(1e6*Math.random()|0),TI=0;function II(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++TI,this.fa=this.ia=!1}function Io(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function rl(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function AI(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ap(e){const t={};for(const n in e)t[n]=e[n];return t}const Eh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cp(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Eh.length;i++)n=Eh[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ao(e){this.src=e,this.g={},this.h=0}Ao.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=sc(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new II(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function rc(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=rp(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Io(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function sc(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var sl="closure_lm_"+(1e6*Math.random()|0),va={};function lp(e,t,n,r,s){if(r&&r.once)return hp(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)lp(e,t[i],n,r,s);return null}return n=al(n),e&&e[$s]?e.O(t,n,Us(r)?!!r.capture:!!r,s):up(e,t,n,!1,r,s)}function up(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Us(s)?!!s.capture:!!s,a=ol(e);if(a||(e[sl]=a=new Ao(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=RI(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)gI||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(dp(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function RI(){function e(n){return t.call(e.src,e.listener,n)}const t=bI;return e}function hp(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)hp(e,t[i],n,r,s);return null}return n=al(n),e&&e[$s]?e.P(t,n,Us(r)?!!r.capture:!!r,s):up(e,t,n,!0,r,s)}function fp(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)fp(e,t[i],n,r,s);else r=Us(r)?!!r.capture:!!r,n=al(n),e&&e[$s]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=sc(i,n,r,s),-1<n&&(Io(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=ol(e))&&(t=e.g[t.toString()],e=-1,t&&(e=sc(t,n,r,s)),(n=-1<e?t[e]:null)&&il(n))}function il(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[$s])rc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(dp(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ol(t))?(rc(n,e),n.h==0&&(n.src=null,t[sl]=null)):Io(e)}}}function dp(e){return e in va?va[e]:va[e]="on"+e}function bI(e,t){if(e.fa)e=!0;else{t=new As(t,this);var n=e.listener,r=e.la||e.src;e.ia&&il(e),e=n.call(r,t)}return e}function ol(e){return e=e[sl],e instanceof Ao?e:null}var wa="__closure_events_fn_"+(1e9*Math.random()>>>0);function al(e){return typeof e=="function"?e:(e[wa]||(e[wa]=function(t){return e.handleEvent(t)}),e[wa])}function St(){En.call(this),this.i=new Ao(this),this.S=this,this.J=null}Dt(St,En);St.prototype[$s]=!0;St.prototype.removeEventListener=function(e,t,n,r){fp(this,e,t,n,r)};function Nt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ht(t,e);else if(t instanceof Ht)t.target=t.target||e;else{var s=t;t=new Ht(r,e),cp(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=ci(o,r,!0,t)&&s}if(o=t.g=e,s=ci(o,r,!0,t)&&s,s=ci(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=ci(o,r,!1,t)&&s}St.prototype.N=function(){if(St.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Io(n[r]);delete e.g[t],e.h--}}this.J=null};St.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};St.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ci(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&rc(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var cl=W.JSON.stringify;class CI{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function PI(){var e=ll;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class SI{constructor(){this.h=this.g=null}add(t,n){const r=pp.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var pp=new CI(()=>new DI,e=>e.reset());class DI{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function VI(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function xI(e){W.setTimeout(()=>{throw e},0)}let Rs,bs=!1,ll=new SI,mp=()=>{const e=W.Promise.resolve(void 0);Rs=()=>{e.then(kI)}};var kI=()=>{for(var e;e=PI();){try{e.h.call(e.g)}catch(n){xI(n)}var t=pp;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}bs=!1};function Ro(e,t){St.call(this),this.h=e||1,this.g=t||W,this.j=zt(this.qb,this),this.l=Date.now()}Dt(Ro,St);V=Ro.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Nt(this,"tick"),this.ga&&(ul(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ul(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}V.N=function(){Ro.$.N.call(this),ul(this),delete this.g};function hl(e,t,n){if(typeof e=="function")n&&(e=zt(e,n));else if(e&&typeof e.handleEvent=="function")e=zt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:W.setTimeout(e,t||0)}function gp(e){e.g=hl(()=>{e.g=null,e.i&&(e.i=!1,gp(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class MI extends En{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:gp(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(e){En.call(this),this.h=e,this.g={}}Dt(Cs,En);var vh=[];function _p(e,t,n,r){Array.isArray(n)||(n&&(vh[0]=n.toString()),n=vh);for(var s=0;s<n.length;s++){var i=lp(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function yp(e){rl(e.g,function(t,n){this.g.hasOwnProperty(n)&&il(t)},e),e.g={}}Cs.prototype.N=function(){Cs.$.N.call(this),yp(this)};Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bo(){this.g=!0}bo.prototype.Ea=function(){this.g=!1};function NI(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function OI(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function cr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+FI(e,n)+(r?" "+r:"")})}function LI(e,t){e.info(function(){return"TIMEOUT: "+t})}bo.prototype.info=function(){};function FI(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return cl(n)}catch{return t}}var Gn={},wh=null;function Co(){return wh=wh||new St}Gn.Ta="serverreachability";function Ep(e){Ht.call(this,Gn.Ta,e)}Dt(Ep,Ht);function Ps(e){const t=Co();Nt(t,new Ep(t))}Gn.STAT_EVENT="statevent";function vp(e,t){Ht.call(this,Gn.STAT_EVENT,e),this.stat=t}Dt(vp,Ht);function Yt(e){const t=Co();Nt(t,new vp(t,e))}Gn.Ua="timingevent";function wp(e,t){Ht.call(this,Gn.Ua,e),this.size=t}Dt(wp,Ht);function js(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){e()},t)}var Po={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Tp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fl(){}fl.prototype.h=null;function Th(e){return e.h||(e.h=e.i())}function Ip(){}var qs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dl(){Ht.call(this,"d")}Dt(dl,Ht);function pl(){Ht.call(this,"c")}Dt(pl,Ht);var ic;function So(){}Dt(So,fl);So.prototype.g=function(){return new XMLHttpRequest};So.prototype.i=function(){return{}};ic=new So;function Ks(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Cs(this),this.P=BI,e=tc?125:void 0,this.V=new Ro(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ap}function Ap(){this.i=null,this.g="",this.h=!1}var BI=45e3,Rp={},oc={};V=Ks.prototype;V.setTimeout=function(e){this.P=e};function ac(e,t,n){e.L=1,e.A=Vo(Qe(t)),e.u=n,e.S=!0,bp(e,null)}function bp(e,t){e.G=Date.now(),zs(e),e.B=Qe(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Mp(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Ap,e.g=em(e.l,n?t:null,!e.u),0<e.O&&(e.M=new MI(zt(e.Pa,e,e.g),e.O)),_p(e.U,e.g,"readystatechange",e.nb),t=e.I?ap(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Ps(),NI(e.j,e.v,e.B,e.m,e.W,e.u)}V.nb=function(e){e=e.target;const t=this.M;t&&Se(e)==3?t.l():this.Pa(e)};V.Pa=function(e){try{if(e==this.g)t:{const u=Se(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||tc||this.g&&(this.h.h||this.g.ja()||bh(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Ps(3):Ps(2)),Do(this);var n=this.g.da();this.ca=n;e:if(Cp(this)){var r=bh(this.g);e="";var s=r.length,i=Se(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),ls(this);var o="";break e}this.h.i=new W.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,OI(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Is(a)){var l=a;break e}}l=null}if(n=l)cr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cc(this,n);else{this.i=!1,this.s=3,Yt(12),Vn(this),ls(this);break t}}this.S?(Pp(this,u,o),tc&&this.i&&u==3&&(_p(this.U,this.V,"tick",this.mb),this.V.start())):(cr(this.j,this.m,o,null),cc(this,o)),u==4&&Vn(this),this.i&&!this.J&&(u==4?Xp(this.l,this):(this.i=!1,zs(this)))}else oA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Yt(12)):(this.s=0,Yt(13)),Vn(this),ls(this)}}}catch{}finally{}};function Cp(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Pp(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=UI(e,n),s==oc){t==4&&(e.s=4,Yt(14),r=!1),cr(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Rp){e.s=4,Yt(15),cr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else cr(e.j,e.m,s,null),cc(e,s);Cp(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Yt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),vl(t),t.M=!0,Yt(11))):(cr(e.j,e.m,n,"[Invalid Chunked Response]"),Vn(e),ls(e))}V.mb=function(){if(this.g){var e=Se(this.g),t=this.g.ja();this.o<t.length&&(Do(this),Pp(this,e,t),this.i&&e!=4&&zs(this))}};function UI(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?oc:(n=Number(t.substring(n,r)),isNaN(n)?Rp:(r+=1,r+n>t.length?oc:(t=t.slice(r,r+n),e.o=r+n,t)))}V.cancel=function(){this.J=!0,Vn(this)};function zs(e){e.Y=Date.now()+e.P,Sp(e,e.P)}function Sp(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=js(zt(e.lb,e),t)}function Do(e){e.C&&(W.clearTimeout(e.C),e.C=null)}V.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(LI(this.j,this.B),this.L!=2&&(Ps(),Yt(17)),Vn(this),this.s=2,ls(this)):Sp(this,this.Y-e)};function ls(e){e.l.H==0||e.J||Xp(e.l,e)}function Vn(e){Do(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,ul(e.V),yp(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function cc(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||lc(n.i,e))){if(!e.K&&lc(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)ji(n),No(n);else break t;El(n),Yt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=js(zt(n.ib,n),6e3));if(1>=Lp(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else xn(n,11)}else if((e.K||n.g==e)&&ji(n),!Is(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const A=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var i=r.i;i.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ml(i,i.h),i.h=null))}if(r.F){const R=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,mt(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=tm(r,r.J?r.pa:null,r.Y),o.K){Fp(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Do(a),zs(a)),r.g=o}else Qp(r);0<n.j.length&&Oo(n)}else l[0]!="stop"&&l[0]!="close"||xn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?xn(n,7):yl(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ps(4)}catch{}}function $I(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(wo(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function jI(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(wo(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Dp(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(wo(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=jI(e),r=$I(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Vp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qI(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Fn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Fn){this.h=e.h,Ui(this,e.j),this.s=e.s,this.g=e.g,$i(this,e.m),this.l=e.l;var t=e.i,n=new Ss;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ih(this,n),this.o=e.o}else e&&(t=String(e).match(Vp))?(this.h=!1,Ui(this,t[1]||"",!0),this.s=Jr(t[2]||""),this.g=Jr(t[3]||"",!0),$i(this,t[4]),this.l=Jr(t[5]||"",!0),Ih(this,t[6]||"",!0),this.o=Jr(t[7]||"")):(this.h=!1,this.i=new Ss(null,this.h))}Fn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Zr(t,Ah,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Zr(t,Ah,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Zr(n,n.charAt(0)=="/"?HI:zI,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Zr(n,GI)),e.join("")};function Qe(e){return new Fn(e)}function Ui(e,t,n){e.j=n?Jr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function $i(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ih(e,t,n){t instanceof Ss?(e.i=t,QI(e.i,e.h)):(n||(t=Zr(t,WI)),e.i=new Ss(t,e.h))}function mt(e,t,n){e.i.set(t,n)}function Vo(e){return mt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Jr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Zr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,KI),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function KI(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ah=/[#\/\?@]/g,zI=/[#\?:]/g,HI=/[#\?]/g,WI=/[#\?@]/g,GI=/#/g;function Ss(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function vn(e){e.g||(e.g=new Map,e.h=0,e.i&&qI(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}V=Ss.prototype;V.add=function(e,t){vn(this),this.i=null,e=Nr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function xp(e,t){vn(e),t=Nr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function kp(e,t){return vn(e),t=Nr(e,t),e.g.has(t)}V.forEach=function(e,t){vn(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};V.ta=function(){vn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};V.Z=function(e){vn(this);let t=[];if(typeof e=="string")kp(this,e)&&(t=t.concat(this.g.get(Nr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};V.set=function(e,t){return vn(this),this.i=null,e=Nr(this,e),kp(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};V.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Mp(e,t,n){xp(e,t),0<n.length&&(e.i=null,e.g.set(Nr(e,t),el(n)),e.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function Nr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function QI(e,t){t&&!e.j&&(vn(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(xp(this,r),Mp(this,s,n))},e)),e.j=t}var YI=class{constructor(e,t){this.g=e,this.map=t}};function Np(e){this.l=e||XI,W.PerformanceNavigationTiming?(e=W.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var XI=10;function Op(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Lp(e){return e.h?1:e.g?e.g.size:0}function lc(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ml(e,t){e.g?e.g.add(t):e.h=t}function Fp(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Np.prototype.cancel=function(){if(this.i=Bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Bp(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return el(e.i)}var JI=class{stringify(e){return W.JSON.stringify(e,void 0)}parse(e){return W.JSON.parse(e,void 0)}};function ZI(){this.g=new JI}function tA(e,t,n){const r=n||"";try{Dp(e,function(s,i){let o=s;Us(s)&&(o=cl(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function eA(e,t){const n=new bo;if(W.Image){const r=new Image;r.onload=ai(li,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ai(li,n,r,"TestLoadImage: error",!1,t),r.onabort=ai(li,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ai(li,n,r,"TestLoadImage: timeout",!1,t),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function li(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function xo(e){this.l=e.ec||null,this.j=e.ob||!1}Dt(xo,fl);xo.prototype.g=function(){return new ko(this.l,this.j)};xo.prototype.i=function(e){return function(){return e}}({});function ko(e,t){St.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=gl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Dt(ko,St);var gl=0;V=ko.prototype;V.open=function(e,t){if(this.readyState!=gl)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ds(this)};V.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||W).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hs(this)),this.readyState=gl};V.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Up(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Up(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}V.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Hs(this):Ds(this),this.readyState==3&&Up(this)}};V.Za=function(e){this.g&&(this.response=this.responseText=e,Hs(this))};V.Ya=function(e){this.g&&(this.response=e,Hs(this))};V.ka=function(){this.g&&Hs(this)};function Hs(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ds(e)}V.setRequestHeader=function(e,t){this.v.append(e,t)};V.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ds(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var nA=W.JSON.parse;function vt(e){St.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=$p,this.L=this.M=!1}Dt(vt,St);var $p="",rA=/^https?$/i,sA=["POST","PUT"];V=vt.prototype;V.Oa=function(e){this.M=e};V.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ic.g(),this.C=this.u?Th(this.u):Th(ic),this.g.onreadystatechange=zt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Rh(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=W.FormData&&e instanceof W.FormData,!(0<=rp(sA,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Kp(this),0<this.B&&((this.L=iA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=zt(this.ua,this)):this.A=hl(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Rh(this,i)}};function iA(e){return Ir&&typeof e.timeout=="number"&&e.ontimeout!==void 0}V.ua=function(){typeof tl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Nt(this,"timeout"),this.abort(8))};function Rh(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,jp(e),Mo(e)}function jp(e){e.F||(e.F=!0,Nt(e,"complete"),Nt(e,"error"))}V.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Nt(this,"complete"),Nt(this,"abort"),Mo(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mo(this,!0)),vt.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?qp(this):this.kb())};V.kb=function(){qp(this)};function qp(e){if(e.h&&typeof tl<"u"&&(!e.C[1]||Se(e)!=4||e.da()!=2)){if(e.v&&Se(e)==4)hl(e.La,0,e);else if(Nt(e,"readystatechange"),Se(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Vp)[1]||null;!s&&W.self&&W.self.location&&(s=W.self.location.protocol.slice(0,-1)),r=!rA.test(s?s.toLowerCase():"")}n=r}if(n)Nt(e,"complete"),Nt(e,"success");else{e.m=6;try{var i=2<Se(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",jp(e)}}finally{Mo(e)}}}}function Mo(e,t){if(e.g){Kp(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Nt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Kp(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(W.clearTimeout(e.A),e.A=null)}V.isActive=function(){return!!this.g};function Se(e){return e.g?e.g.readyState:0}V.da=function(){try{return 2<Se(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),nA(t)}};function bh(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case $p:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function oA(e){const t={};e=(e.g&&2<=Se(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Is(e[r]))continue;var n=VI(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}AI(t,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zp(e){let t="";return rl(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function _l(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=zp(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):mt(e,t,n))}function Wr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Hp(e){this.Ga=0,this.j=[],this.l=new bo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Wr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Wr("baseRetryDelayMs",5e3,e),this.hb=Wr("retryDelaySeedMs",1e4,e),this.eb=Wr("forwardChannelMaxRetries",2,e),this.xa=Wr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Np(e&&e.concurrentRequestLimit),this.Ja=new ZI,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=Hp.prototype;V.ra=8;V.H=1;function yl(e){if(Wp(e),e.H==3){var t=e.W++,n=Qe(e.I);if(mt(n,"SID",e.K),mt(n,"RID",t),mt(n,"TYPE","terminate"),Ws(e,n),t=new Ks(e,e.l,t),t.L=2,t.A=Vo(Qe(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&W.Image&&(new Image().src=t.A,n=!0),n||(t.g=em(t.l,null),t.g.ha(t.A)),t.G=Date.now(),zs(t)}Zp(e)}function No(e){e.g&&(vl(e),e.g.cancel(),e.g=null)}function Wp(e){No(e),e.u&&(W.clearTimeout(e.u),e.u=null),ji(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&W.clearTimeout(e.m),e.m=null)}function Oo(e){if(!Op(e.i)&&!e.m){e.m=!0;var t=e.Na;Rs||mp(),bs||(Rs(),bs=!0),ll.add(t,e),e.C=0}}function aA(e,t){return Lp(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=js(zt(e.Na,e,t),Jp(e,e.C)),e.C++,!0)}V.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Ks(this,this.l,e);let i=this.s;if(this.U&&(i?(i=ap(i),cp(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Gp(this,s,t),n=Qe(this.I),mt(n,"RID",e),mt(n,"CVER",22),this.F&&mt(n,"X-HTTP-Session-Id",this.F),Ws(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(zp(i)))+"&"+t:this.o&&_l(n,this.o,i)),ml(this.i,s),this.bb&&mt(n,"TYPE","init"),this.P?(mt(n,"$req",t),mt(n,"SID","null"),s.aa=!0,ac(s,n,null)):ac(s,n,t),this.H=2}}else this.H==3&&(e?Ch(this,e):this.j.length==0||Op(this.i)||Ch(this))};function Ch(e,t){var n;t?n=t.m:n=e.W++;const r=Qe(e.I);mt(r,"SID",e.K),mt(r,"RID",n),mt(r,"AID",e.V),Ws(e,r),e.o&&e.s&&_l(r,e.o,e.s),n=new Ks(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Gp(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ml(e.i,n),ac(n,r,t)}function Ws(e,t){e.na&&rl(e.na,function(n,r){mt(t,r,n)}),e.h&&Dp({},function(n,r){mt(t,r,n)})}function Gp(e,t,n){n=Math.min(e.j.length,n);var r=e.h?zt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{tA(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Qp(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Rs||mp(),bs||(Rs(),bs=!0),ll.add(t,e),e.A=0}}function El(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=js(zt(e.Ma,e),Jp(e,e.A)),e.A++,!0)}V.Ma=function(){if(this.u=null,Yp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=js(zt(this.jb,this),e)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Yt(10),No(this),Yp(this))};function vl(e){e.B!=null&&(W.clearTimeout(e.B),e.B=null)}function Yp(e){e.g=new Ks(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Qe(e.wa);mt(t,"RID","rpc"),mt(t,"SID",e.K),mt(t,"AID",e.V),mt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&mt(t,"TO",e.qa),mt(t,"TYPE","xmlhttp"),Ws(e,t),e.o&&e.s&&_l(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Vo(Qe(t)),n.u=null,n.S=!0,bp(n,e)}V.ib=function(){this.v!=null&&(this.v=null,No(this),El(this),Yt(19))};function ji(e){e.v!=null&&(W.clearTimeout(e.v),e.v=null)}function Xp(e,t){var n=null;if(e.g==t){ji(e),vl(e),e.g=null;var r=2}else if(lc(e.i,t))n=t.F,Fp(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=Co(),Nt(r,new wp(r,n)),Oo(e)}else Qp(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&aA(e,t)||r==2&&El(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:xn(e,5);break;case 4:xn(e,10);break;case 3:xn(e,6);break;default:xn(e,2)}}}function Jp(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function xn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=zt(e.pb,e);n||(n=new Fn("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Ui(n,"https"),Vo(n)),eA(n.toString(),r)}else Yt(2);e.H=0,e.h&&e.h.za(t),Zp(e),Wp(e)}V.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Yt(2)):(this.l.info("Failed to ping google.com"),Yt(1))};function Zp(e){if(e.H=0,e.ma=[],e.h){const t=Bp(e.i);(t.length!=0||e.j.length!=0)&&(_h(e.ma,t),_h(e.ma,e.j),e.i.i.length=0,el(e.j),e.j.length=0),e.h.ya()}}function tm(e,t,n){var r=n instanceof Fn?Qe(n):new Fn(n);if(r.g!="")t&&(r.g=t+"."+r.g),$i(r,r.m);else{var s=W.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Fn(null);r&&Ui(i,r),t&&(i.g=t),s&&$i(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&mt(r,n,t),mt(r,"VER",e.ra),Ws(e,r),r}function em(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new vt(new xo({ob:n})):new vt(e.va),t.Oa(e.J),t}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function nm(){}V=nm.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function qi(){if(Ir&&!(10<=Number(vI)))throw Error("Environmental error: no available transport.")}qi.prototype.g=function(e,t){return new ie(e,t)};function ie(e,t){St.call(this),this.g=new Hp(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Is(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Is(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Or(this)}Dt(ie,St);ie.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Yt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=tm(e,null,e.Y),Oo(e)};ie.prototype.close=function(){yl(this.g)};ie.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=cl(e),e=n);t.j.push(new YI(t.fb++,e)),t.H==3&&Oo(t)};ie.prototype.N=function(){this.g.h=null,delete this.j,yl(this.g),delete this.g,ie.$.N.call(this)};function rm(e){dl.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Dt(rm,dl);function sm(){pl.call(this),this.status=1}Dt(sm,pl);function Or(e){this.g=e}Dt(Or,nm);Or.prototype.Ba=function(){Nt(this.g,"a")};Or.prototype.Aa=function(e){Nt(this.g,new rm(e))};Or.prototype.za=function(e){Nt(this.g,new sm)};Or.prototype.ya=function(){Nt(this.g,"b")};function cA(){this.blockSize=-1}function we(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Dt(we,cA);we.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ta(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}we.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Ta(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Ta(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Ta(this,r),s=0;break}}this.h=s,this.i+=t};we.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ct(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var lA={};function wl(e){return-128<=e&&128>e?_I(e,function(t){return new ct([t|0],0>t?-1:0)}):new ct([e|0],0>e?-1:0)}function De(e){if(isNaN(e)||!isFinite(e))return pr;if(0>e)return xt(De(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=uc;return new ct(t,0)}function im(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return xt(im(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=De(Math.pow(t,8)),r=pr,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=De(Math.pow(t,i)),r=r.R(i).add(De(o))):(r=r.R(n),r=r.add(De(o)))}return r}var uc=4294967296,pr=wl(0),hc=wl(1),Ph=wl(16777216);V=ct.prototype;V.ea=function(){if(ce(this))return-xt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:uc+r)*t,t*=uc}return e};V.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ke(this))return"0";if(ce(this))return"-"+xt(this).toString(e);for(var t=De(Math.pow(e,6)),n=this,r="";;){var s=zi(n,t).g;n=Ki(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Ke(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Ke(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ce(e){return e.h==-1}V.X=function(e){return e=Ki(this,e),ce(e)?-1:Ke(e)?0:1};function xt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ct(n,~e.h).add(hc)}V.abs=function(){return ce(this)?xt(this):this};V.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ct(n,n[n.length-1]&-2147483648?-1:0)};function Ki(e,t){return e.add(xt(t))}V.R=function(e){if(Ke(this)||Ke(e))return pr;if(ce(this))return ce(e)?xt(this).R(xt(e)):xt(xt(this).R(e));if(ce(e))return xt(this.R(xt(e)));if(0>this.X(Ph)&&0>e.X(Ph))return De(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,ui(n,2*r+2*s),n[2*r+2*s+1]+=i*c,ui(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,ui(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,ui(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ct(n,0)};function ui(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Gr(e,t){this.g=e,this.h=t}function zi(e,t){if(Ke(t))throw Error("division by zero");if(Ke(e))return new Gr(pr,pr);if(ce(e))return t=zi(xt(e),t),new Gr(xt(t.g),xt(t.h));if(ce(t))return t=zi(e,xt(t)),new Gr(xt(t.g),t.h);if(30<e.g.length){if(ce(e)||ce(t))throw Error("slowDivide_ only works with positive integers.");for(var n=hc,r=t;0>=r.X(e);)n=Sh(n),r=Sh(r);var s=rr(n,1),i=rr(r,1);for(r=rr(r,2),n=rr(n,2);!Ke(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=rr(r,1),n=rr(n,1)}return t=Ki(e,s.R(t)),new Gr(s,t)}for(s=pr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=De(n),o=i.R(t);ce(o)||0<o.X(e);)n-=r,i=De(n),o=i.R(t);Ke(i)&&(i=hc),s=s.add(i),e=Ki(e,o)}return new Gr(s,e)}V.gb=function(e){return zi(this,e).h};V.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ct(n,this.h&e.h)};V.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ct(n,this.h|e.h)};V.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ct(n,this.h^e.h)};function Sh(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ct(n,e.h)}function rr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new ct(s,e.h)}qi.prototype.createWebChannel=qi.prototype.g;ie.prototype.send=ie.prototype.u;ie.prototype.open=ie.prototype.m;ie.prototype.close=ie.prototype.close;Po.NO_ERROR=0;Po.TIMEOUT=8;Po.HTTP_ERROR=6;Tp.COMPLETE="complete";Ip.EventType=qs;qs.OPEN="a";qs.CLOSE="b";qs.ERROR="c";qs.MESSAGE="d";St.prototype.listen=St.prototype.O;vt.prototype.listenOnce=vt.prototype.P;vt.prototype.getLastError=vt.prototype.Sa;vt.prototype.getLastErrorCode=vt.prototype.Ia;vt.prototype.getStatus=vt.prototype.da;vt.prototype.getResponseJson=vt.prototype.Wa;vt.prototype.getResponseText=vt.prototype.ja;vt.prototype.send=vt.prototype.ha;vt.prototype.setWithCredentials=vt.prototype.Oa;we.prototype.digest=we.prototype.l;we.prototype.reset=we.prototype.reset;we.prototype.update=we.prototype.j;ct.prototype.add=ct.prototype.add;ct.prototype.multiply=ct.prototype.R;ct.prototype.modulo=ct.prototype.gb;ct.prototype.compare=ct.prototype.X;ct.prototype.toNumber=ct.prototype.ea;ct.prototype.toString=ct.prototype.toString;ct.prototype.getBits=ct.prototype.D;ct.fromNumber=De;ct.fromString=im;var uA=function(){return new qi},hA=function(){return Co()},Ia=Po,fA=Tp,dA=Gn,Dh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},hi=Ip,pA=vt,mA=we,mr=ct;const Vh="@firebase/firestore";/**
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
 */let Lr="10.7.2";/**
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
 */const zn=new Hc("@firebase/firestore");function Qr(){return zn.logLevel}function D(e,...t){if(zn.logLevel<=nt.DEBUG){const n=t.map(Tl);zn.debug(`Firestore (${Lr}): ${e}`,...n)}}function Le(e,...t){if(zn.logLevel<=nt.ERROR){const n=t.map(Tl);zn.error(`Firestore (${Lr}): ${e}`,...n)}}function Ar(e,...t){if(zn.logLevel<=nt.WARN){const n=t.map(Tl);zn.warn(`Firestore (${Lr}): ${e}`,...n)}}function Tl(e){if(typeof e=="string")return e;try{/**
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
 */function z(e="Unexpected state"){const t=`FIRESTORE (${Lr}) INTERNAL ASSERTION FAILED: `+e;throw Le(t),new Error(t)}function ft(e,t){e||z()}function X(e,t){return e}/**
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
 */class We{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class om{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class gA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class _A{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yA{constructor(t){this.t=t,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new We;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new We,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new We)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ft(typeof r.accessToken=="string"),new om(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ft(t===null||typeof t=="string"),new $t(t)}}class EA{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vA{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new EA(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wA{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TA{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ft(typeof n.token=="string"),this.R=n.token,new wA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function IA(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class am{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=IA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function rt(e,t){return e<t?-1:e>t?1:0}function Rr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */class Rt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new F(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new F(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Rt.fromMillis(Date.now())}static fromDate(t){return Rt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rt(this.nanoseconds,t.nanoseconds):rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(t){this.timestamp=t}static fromTimestamp(t){return new G(t)}static min(){return new G(new Rt(0,0))}static max(){return new G(new Rt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vs{constructor(t,n,r){n===void 0?n=0:n>t.length&&z(),r===void 0?r=t.length-n:r>t.length-n&&z(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Vs.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Vs?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class gt extends Vs{construct(t,n,r){return new gt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new F(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new gt(n)}static emptyPath(){return new gt([])}}const AA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends Vs{construct(t,n,r){return new Mt(t,n,r)}static isValidIdentifier(t){return AA.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Mt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new F(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new F(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Mt(n)}static emptyPath(){return new Mt([])}}/**
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
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(gt.fromString(t))}static fromName(t){return new q(gt.fromString(t).popFirst(5))}static empty(){return new q(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&gt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return gt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new gt(t.slice()))}}function RA(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new Rt(n+1,0):new Rt(n,r));return new mn(s,q.empty(),t)}function bA(e){return new mn(e.readTime,e.key,-1)}class mn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new mn(G.min(),q.empty(),-1)}static max(){return new mn(G.max(),q.empty(),-1)}}function CA(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=q.comparator(e.documentKey,t.documentKey),n!==0?n:rt(e.largestBatchId,t.largestBatchId))}/**
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
 */const PA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Gs(e){if(e.code!==w.FAILED_PRECONDITION||e.message!==PA)throw e;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class E{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new E((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):E.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):E.reject(n)}static resolve(t){return new E((n,r)=>{n(t)})}static reject(t){return new E((n,r)=>{r(t)})}static waitFor(t){return new E((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(t){let n=E.resolve(!1);for(const r of t)n=n.next(s=>s?E.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new E((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new E((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class Il{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new We,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new us(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Al(r.target.error);this.V.reject(new us(t,s))}}static open(t,n,r,s){try{return new Il(n,t.transaction(s,r))}catch(i){throw new us(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(D("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new VA(n)}}class kn{constructor(t,n,r){this.name=t,this.version=n,this.p=r,kn.S(Ni())===12.2&&Le("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return D("SimpleDb","Removing database:",t),Pn(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!zc())return!1;if(kn.C())return!0;const t=Ni(),n=kn.S(t),r=0<n&&n<10,s=kn.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(D("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new us(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new F(w.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new F(w.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new us(t,o))},s.onupgradeneeded=i=>{D("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{D("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Il.open(this.db,t,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),E.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(D("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class DA{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Pn(this.k.delete())}}class us extends F{constructor(t,n){super(w.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Qs(e){return e.name==="IndexedDbTransactionError"}class VA{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(D("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(D("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Pn(r)}add(t){return D("SimpleDb","ADD",this.store.name,t,t),Pn(this.store.add(t))}get(t){return Pn(this.store.get(t)).next(n=>(n===void 0&&(n=null),D("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return D("SimpleDb","DELETE",this.store.name,t),Pn(this.store.delete(t))}count(){return D("SimpleDb","COUNT",this.store.name),Pn(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new E((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new E((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){D("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new E((r,s)=>{n.onerror=i=>{const o=Al(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new E((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new DA(a),l=n(a.primaryKey,a.value,c);if(l instanceof E){const u=l.catch(h=>(c.done(),E.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>E.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Pn(e){return new E((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=Al(r.target.error);n(s)}})}let xh=!1;function Al(e){const t=kn.S(Ni());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new F("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return xh||(xh=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
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
 */class Rl{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Rl._e=-1;function Lo(e){return e==null}function Hi(e){return e===0&&1/e==-1/0}function xA(e){return typeof e=="number"&&Number.isInteger(e)&&!Hi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function kh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Fr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function cm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Et{constructor(t,n){this.comparator=t,this.root=n||Vt.EMPTY}insert(t,n){return new Et(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(t){return new Et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fi(this.root,t,this.comparator,!1)}getReverseIterator(){return new fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fi(this.root,t,this.comparator,!0)}}class fi{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Vt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Vt.RED,this.left=s??Vt.EMPTY,this.right=i??Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Vt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const t=this.left.check();if(t!==this.right.check())throw z();return t+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1;Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Vt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ot{constructor(t){this.comparator=t,this.data=new Et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mh(this.data.getIterator())}getIteratorFrom(t){return new Mh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Ot)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ot(this.comparator);return n.data=t,n}}class Mh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ye{constructor(t){this.fields=t,t.sort(Mt.comparator)}static empty(){return new ye([])}unionWith(t){let n=new Ot(Mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ye(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Rr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Wt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lm("Invalid base64 string: "+i):i}}(t);return new Wt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Wt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const kA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gn(e){if(ft(!!e),typeof e=="string"){let t=0;const n=kA.exec(e);if(ft(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:It(e.seconds),nanos:It(e.nanos)}}function It(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Hn(e){return typeof e=="string"?Wt.fromBase64String(e):Wt.fromUint8Array(e)}/**
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
 */function bl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cl(e){const t=e.mapValue.fields.__previous_value__;return bl(t)?Cl(t):t}function xs(e){const t=gn(e.mapValue.fields.__local_write_time__.timestampValue);return new Rt(t.seconds,t.nanos)}/**
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
 */class MA{constructor(t,n,r,s,i,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ks{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ks("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ks&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const di={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?bl(e)?4:NA(e)?9007199254740991:10:z()}function Fe(e,t){if(e===t)return!0;const n=Wn(e);if(n!==Wn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return xs(e).isEqual(xs(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=gn(s.timestampValue),a=gn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Hn(s.bytesValue).isEqual(Hn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return It(s.geoPointValue.latitude)===It(i.geoPointValue.latitude)&&It(s.geoPointValue.longitude)===It(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return It(s.integerValue)===It(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=It(s.doubleValue),a=It(i.doubleValue);return o===a?Hi(o)===Hi(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Rr(e.arrayValue.values||[],t.arrayValue.values||[],Fe);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(kh(o)!==kh(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Fe(o[c],a[c])))return!1;return!0}(e,t);default:return z()}}function Ms(e,t){return(e.values||[]).find(n=>Fe(n,t))!==void 0}function br(e,t){if(e===t)return 0;const n=Wn(e),r=Wn(t);if(n!==r)return rt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return rt(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=It(i.integerValue||i.doubleValue),c=It(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Nh(e.timestampValue,t.timestampValue);case 4:return Nh(xs(e),xs(t));case 5:return rt(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Hn(i),c=Hn(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=rt(a[l],c[l]);if(u!==0)return u}return rt(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=rt(It(i.latitude),It(o.latitude));return a!==0?a:rt(It(i.longitude),It(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=br(a[l],c[l]);if(u)return u}return rt(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===di.mapValue&&o===di.mapValue)return 0;if(i===di.mapValue)return 1;if(o===di.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=rt(c[h],u[h]);if(f!==0)return f;const m=br(a[c[h]],l[u[h]]);if(m!==0)return m}return rt(c.length,u.length)}(e.mapValue,t.mapValue);default:throw z()}}function Nh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return rt(e,t);const n=gn(e),r=gn(t),s=rt(n.seconds,r.seconds);return s!==0?s:rt(n.nanos,r.nanos)}function Cr(e){return fc(e)}function fc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=gn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Hn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return q.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=fc(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${fc(n.fields[o])}`;return s+"}"}(e.mapValue):z()}function dc(e){return!!e&&"integerValue"in e}function Pl(e){return!!e&&"arrayValue"in e}function Oh(e){return!!e&&"nullValue"in e}function Lh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ti(e){return!!e&&"mapValue"in e}function hs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Fr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=hs(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=hs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function NA(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class le{constructor(t){this.value=t}static empty(){return new le({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ti(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=hs(n)}setAll(t){let n=Mt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=hs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Ti(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Fe(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Ti(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Fr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new le(hs(this.value))}}function um(e){const t=[];return Fr(e.fields,(n,r)=>{const s=new Mt([n]);if(Ti(r)){const i=um(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new ye(t)}/**
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
 */class jt{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new jt(t,0,G.min(),G.min(),G.min(),le.empty(),0)}static newFoundDocument(t,n,r,s){return new jt(t,1,n,G.min(),r,s,0)}static newNoDocument(t,n){return new jt(t,2,n,G.min(),G.min(),le.empty(),0)}static newUnknownDocument(t,n){return new jt(t,3,n,G.min(),G.min(),le.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=le.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wi{constructor(t,n){this.position=t,this.inclusive=n}}function Fh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=br(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Fe(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Gi{constructor(t,n="asc"){this.field=t,this.dir=n}}function OA(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class hm{}class At extends hm{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new FA(t,n,r):n==="array-contains"?new $A(t,r):n==="in"?new jA(t,r):n==="not-in"?new qA(t,r):n==="array-contains-any"?new KA(t,r):new At(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new BA(t,r):new UA(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(br(n,this.value)):n!==null&&Wn(this.value)===Wn(n)&&this.matchesComparison(br(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends hm{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Be(t,n)}matches(t){return fm(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function fm(e){return e.op==="and"}function dm(e){return LA(e)&&fm(e)}function LA(e){for(const t of e.filters)if(t instanceof Be)return!1;return!0}function pc(e){if(e instanceof At)return e.field.canonicalString()+e.op.toString()+Cr(e.value);if(dm(e))return e.filters.map(t=>pc(t)).join(",");{const t=e.filters.map(n=>pc(n)).join(",");return`${e.op}(${t})`}}function pm(e,t){return e instanceof At?function(r,s){return s instanceof At&&r.op===s.op&&r.field.isEqual(s.field)&&Fe(r.value,s.value)}(e,t):e instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&pm(o,s.filters[a]),!0):!1}(e,t):void z()}function mm(e){return e instanceof At?function(n){return`${n.field.canonicalString()} ${n.op} ${Cr(n.value)}`}(e):e instanceof Be?function(n){return n.op.toString()+" {"+n.getFilters().map(mm).join(" ,")+"}"}(e):"Filter"}class FA extends At{constructor(t,n,r){super(t,n,r),this.key=q.fromName(r.referenceValue)}matches(t){const n=q.comparator(t.key,this.key);return this.matchesComparison(n)}}class BA extends At{constructor(t,n){super(t,"in",n),this.keys=gm("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class UA extends At{constructor(t,n){super(t,"not-in",n),this.keys=gm("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function gm(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class $A extends At{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Pl(n)&&Ms(n.arrayValue,this.value)}}class jA extends At{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ms(this.value.arrayValue,n)}}class qA extends At{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ms(this.value.arrayValue,n)}}class KA extends At{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Pl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ms(this.value.arrayValue,r))}}/**
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
 */class zA{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Uh(e,t=null,n=[],r=[],s=null,i=null,o=null){return new zA(e,t,n,r,s,i,o)}function Sl(e){const t=X(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>pc(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Lo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Cr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Cr(r)).join(",")),t.ce=n}return t.ce}function Dl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!OA(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!pm(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Bh(e.startAt,t.startAt)&&Bh(e.endAt,t.endAt)}function mc(e){return q.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Fo{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function HA(e,t,n,r,s,i,o,a){return new Fo(e,t,n,r,s,i,o,a)}function _m(e){return new Fo(e)}function $h(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function WA(e){return e.collectionGroup!==null}function fs(e){const t=X(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ot(Mt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new Gi(i,r))}),n.has(Mt.keyField().canonicalString())||t.le.push(new Gi(Mt.keyField(),r))}return t.le}function ke(e){const t=X(e);return t.he||(t.he=GA(t,fs(e))),t.he}function GA(e,t){if(e.limitType==="F")return Uh(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Gi(s.field,i)});const n=e.endAt?new Wi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Wi(e.startAt.position,e.startAt.inclusive):null;return Uh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function gc(e,t,n){return new Fo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Bo(e,t){return Dl(ke(e),ke(t))&&e.limitType===t.limitType}function ym(e){return`${Sl(ke(e))}|lt:${e.limitType}`}function ir(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>mm(s)).join(", ")}]`),Lo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Cr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Cr(s)).join(",")),`Target(${r})`}(ke(e))}; limitType=${e.limitType})`}function Uo(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of fs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Fh(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,fs(r),s)||r.endAt&&!function(o,a,c){const l=Fh(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,fs(r),s))}(e,t)}function QA(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Em(e){return(t,n)=>{let r=!1;for(const s of fs(e)){const i=YA(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function YA(e,t,n){const r=e.field.isKeyField()?q.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?br(c,l):z()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */class Br{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Fr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return cm(this.inner)}size(){return this.innerSize}}/**
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
 */const XA=new Et(q.comparator);function Ye(){return XA}const vm=new Et(q.comparator);function ts(...e){let t=vm;for(const n of e)t=t.insert(n.key,n);return t}function wm(e){let t=vm;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Mn(){return ds()}function Tm(){return ds()}function ds(){return new Br(e=>e.toString(),(e,t)=>e.isEqual(t))}const JA=new Et(q.comparator),ZA=new Ot(q.comparator);function Z(...e){let t=ZA;for(const n of e)t=t.add(n);return t}const t0=new Ot(rt);function e0(){return t0}/**
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
 */function Im(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hi(t)?"-0":t}}function Am(e){return{integerValue:""+e}}function n0(e,t){return xA(t)?Am(t):Im(e,t)}/**
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
 */class $o{constructor(){this._=void 0}}function r0(e,t,n){return e instanceof Qi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&bl(i)&&(i=Cl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Ns?bm(e,t):e instanceof Os?Cm(e,t):function(s,i){const o=Rm(s,i),a=jh(o)+jh(s.Ie);return dc(o)&&dc(s.Ie)?Am(a):Im(s.serializer,a)}(e,t)}function s0(e,t,n){return e instanceof Ns?bm(e,t):e instanceof Os?Cm(e,t):n}function Rm(e,t){return e instanceof Yi?function(r){return dc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Qi extends $o{}class Ns extends $o{constructor(t){super(),this.elements=t}}function bm(e,t){const n=Pm(t);for(const r of e.elements)n.some(s=>Fe(s,r))||n.push(r);return{arrayValue:{values:n}}}class Os extends $o{constructor(t){super(),this.elements=t}}function Cm(e,t){let n=Pm(t);for(const r of e.elements)n=n.filter(s=>!Fe(s,r));return{arrayValue:{values:n}}}class Yi extends $o{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function jh(e){return It(e.integerValue||e.doubleValue)}function Pm(e){return Pl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function i0(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Ns&&s instanceof Ns||r instanceof Os&&s instanceof Os?Rr(r.elements,s.elements,Fe):r instanceof Yi&&s instanceof Yi?Fe(r.Ie,s.Ie):r instanceof Qi&&s instanceof Qi}(e.transform,t.transform)}class o0{constructor(t,n){this.version=t,this.transformResults=n}}class Me{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Me}static exists(t){return new Me(void 0,t)}static updateTime(t){return new Me(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ii(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class jo{}function Sm(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Vl(e.key,Me.none()):new Ys(e.key,e.data,Me.none());{const n=e.data,r=le.empty();let s=new Ot(Mt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Qn(e.key,r,new ye(s.toArray()),Me.none())}}function a0(e,t,n){e instanceof Ys?function(s,i,o){const a=s.value.clone(),c=Kh(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Qn?function(s,i,o){if(!Ii(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Kh(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Dm(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function ps(e,t,n,r){return e instanceof Ys?function(i,o,a,c){if(!Ii(i.precondition,o))return a;const l=i.value.clone(),u=zh(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Qn?function(i,o,a,c){if(!Ii(i.precondition,o))return a;const l=zh(i.fieldTransforms,c,o),u=o.data;return u.setAll(Dm(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return Ii(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function c0(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Rm(r.transform,s||null);i!=null&&(n===null&&(n=le.empty()),n.set(r.field,i))}return n||null}function qh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Rr(r,s,(i,o)=>i0(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ys extends jo{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qn extends jo{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dm(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Kh(e,t,n){const r=new Map;ft(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,s0(o,a,n[s]))}return r}function zh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,r0(i,o,t))}return r}class Vl extends jo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class l0 extends jo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class u0{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&a0(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ps(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ps(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Tm();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Sm(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Z())}isEqual(t){return this.batchId===t.batchId&&Rr(this.mutations,t.mutations,(n,r)=>qh(n,r))&&Rr(this.baseMutations,t.baseMutations,(n,r)=>qh(n,r))}}class xl{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){ft(t.mutations.length===r.length);let s=function(){return JA}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new xl(t,n,r,s)}}/**
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
 */class h0{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class f0{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Tt,tt;function d0(e){switch(e){default:return z();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Vm(e){if(e===void 0)return Le("GRPC error has no .code"),w.UNKNOWN;switch(e){case Tt.OK:return w.OK;case Tt.CANCELLED:return w.CANCELLED;case Tt.UNKNOWN:return w.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return w.INTERNAL;case Tt.UNAVAILABLE:return w.UNAVAILABLE;case Tt.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Tt.NOT_FOUND:return w.NOT_FOUND;case Tt.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Tt.ABORTED:return w.ABORTED;case Tt.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Tt.DATA_LOSS:return w.DATA_LOSS;default:return z()}}(tt=Tt||(Tt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function p0(){return new TextEncoder}/**
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
 */const m0=new mr([4294967295,4294967295],0);function Hh(e){const t=p0().encode(e),n=new mA;return n.update(t),new Uint8Array(n.digest())}function Wh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new mr([n,r],0),new mr([s,i],0)]}class kl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new es(`Invalid padding: ${n}`);if(r<0)throw new es(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new es(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new es(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=mr.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(mr.fromNumber(r)));return s.compare(m0)===1&&(s=new mr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Hh(t),[r,s]=Wh(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new kl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Hh(t),[r,s]=Wh(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class es extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qo{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Xs.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new qo(G.min(),s,new Et(rt),Ye(),Z())}}class Xs{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Xs(r,n,Z(),Z(),Z())}}/**
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
 */class Ai{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class xm{constructor(t,n){this.targetId=t,this.fe=n}}class km{constructor(t,n,r=Wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Gh{constructor(){this.ge=0,this.pe=Yh(),this.ye=Wt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=Z(),n=Z(),r=Z();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:z()}}),new Xs(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Yh()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,ft(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class g0{constructor(t){this.Le=t,this.ke=new Map,this.qe=Ye(),this.Qe=Qh(),this.Ke=new Et(rt)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:z()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(mc(i))if(r===0){const o=new q(i.path);this.We(n,o,jt.newNoDocument(o,G.min()))}else ft(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),c=a?this.et(a,t,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Hn(r).toUint8Array()}catch(c){if(c instanceof lm)return Ar("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new kl(o,s,i)}catch(c){return Ar(c instanceof es?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&mc(a.target)){const c=new q(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,jt.newNoDocument(c,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=Z();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new qo(t,n,this.Ke,this.qe,r);return this.qe=Ye(),this.Qe=Qh(),this.Ke=new Et(rt),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Gh,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new Ot(rt),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||D("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Gh),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Qh(){return new Et(q.comparator)}function Yh(){return new Et(q.comparator)}const _0={asc:"ASCENDING",desc:"DESCENDING"},y0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},E0={and:"AND",or:"OR"};class v0{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function _c(e,t){return e.useProto3Json||Lo(t)?t:{value:t}}function Xi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Mm(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function w0(e,t){return Xi(e,t.toTimestamp())}function Ne(e){return ft(!!e),G.fromTimestamp(function(n){const r=gn(n);return new Rt(r.seconds,r.nanos)}(e))}function Ml(e,t){return yc(e,t).canonicalString()}function yc(e,t){const n=function(s){return new gt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Nm(e){const t=gt.fromString(e);return ft(Um(t)),t}function Ec(e,t){return Ml(e.databaseId,t.path)}function Aa(e,t){const n=Nm(t);if(n.get(1)!==e.databaseId.projectId)throw new F(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new F(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new q(Lm(n))}function Om(e,t){return Ml(e.databaseId,t)}function T0(e){const t=Nm(e);return t.length===4?gt.emptyPath():Lm(t)}function vc(e){return new gt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Lm(e){return ft(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Xh(e,t,n){return{name:Ec(e,t),fields:n.value.mapValue.fields}}function I0(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ft(u===void 0||typeof u=="string"),Wt.fromBase64String(u||"")):(ft(u===void 0||u instanceof Uint8Array),Wt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?w.UNKNOWN:Vm(l.code);return new F(u,l.message||"")}(o);n=new km(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Aa(e,r.document.name),i=Ne(r.document.updateTime),o=r.document.createTime?Ne(r.document.createTime):G.min(),a=new le({mapValue:{fields:r.document.fields}}),c=jt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ai(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Aa(e,r.document),i=r.readTime?Ne(r.readTime):G.min(),o=jt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ai([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Aa(e,r.document),i=r.removedTargetIds||[];n=new Ai([],i,s,null)}else{if(!("filter"in t))return z();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new f0(s,i),a=r.targetId;n=new xm(a,o)}}return n}function A0(e,t){let n;if(t instanceof Ys)n={update:Xh(e,t.key,t.value)};else if(t instanceof Vl)n={delete:Ec(e,t.key)};else if(t instanceof Qn)n={update:Xh(e,t.key,t.data),updateMask:k0(t.fieldMask)};else{if(!(t instanceof l0))return z();n={verify:Ec(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Qi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ns)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Os)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Yi)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw z()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:w0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(e,t.precondition)),n}function R0(e,t){return e&&e.length>0?(ft(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?Ne(s.updateTime):Ne(i);return o.isEqual(G.min())&&(o=Ne(i)),new o0(o,s.transformResults||[])}(n,t))):[]}function b0(e,t){return{documents:[Om(e,t.path)]}}function C0(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Om(e,s);const i=function(l){if(l.length!==0)return Bm(Be.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:or(f.field),direction:D0(f.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=_c(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{ut:n,parent:s}}function P0(e){let t=T0(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ft(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=Fm(h);return f instanceof Be&&dm(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(A){return new Gi(ar(A.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Lo(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new Wi(m,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,m=h.values||[];return new Wi(m,f)}(n.endAt)),HA(t,s,o,i,a,"F",c,l)}function S0(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Fm(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ar(n.unaryFilter.field);return At.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ar(n.unaryFilter.field);return At.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ar(n.unaryFilter.field);return At.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ar(n.unaryFilter.field);return At.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(e):e.fieldFilter!==void 0?function(n){return At.create(ar(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Be.create(n.compositeFilter.filters.map(r=>Fm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(n.compositeFilter.op))}(e):z()}function D0(e){return _0[e]}function V0(e){return y0[e]}function x0(e){return E0[e]}function or(e){return{fieldPath:e.canonicalString()}}function ar(e){return Mt.fromServerFormat(e.fieldPath)}function Bm(e){return e instanceof At?function(n){if(n.op==="=="){if(Lh(n.value))return{unaryFilter:{field:or(n.field),op:"IS_NAN"}};if(Oh(n.value))return{unaryFilter:{field:or(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Lh(n.value))return{unaryFilter:{field:or(n.field),op:"IS_NOT_NAN"}};if(Oh(n.value))return{unaryFilter:{field:or(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:or(n.field),op:V0(n.op),value:n.value}}}(e):e instanceof Be?function(n){const r=n.getFilters().map(s=>Bm(s));return r.length===1?r[0]:{compositeFilter:{op:x0(n.op),filters:r}}}(e):z()}function k0(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Um(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class on{constructor(t,n,r,s,i=G.min(),o=G.min(),a=Wt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new on(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class M0{constructor(t){this.ct=t}}function N0(e){const t=P0({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?gc(t,t.limit,"L"):t}/**
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
 */class O0{constructor(){this._n=new L0}addToCollectionParentIndex(t,n){return this._n.add(n),E.resolve()}getCollectionParents(t,n){return E.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return E.resolve()}deleteFieldIndex(t,n){return E.resolve()}deleteAllFieldIndexes(t){return E.resolve()}createTargetIndexes(t,n){return E.resolve()}getDocumentsMatchingTarget(t,n){return E.resolve(null)}getIndexType(t,n){return E.resolve(0)}getFieldIndexes(t,n){return E.resolve([])}getNextCollectionGroupToUpdate(t){return E.resolve(null)}getMinOffset(t,n){return E.resolve(mn.min())}getMinOffsetFromCollectionGroup(t,n){return E.resolve(mn.min())}updateCollectionGroup(t,n,r){return E.resolve()}updateIndexEntries(t,n){return E.resolve()}}class L0{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Ot(gt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ot(gt.comparator)).toArray()}}/**
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
 */class Pr{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Pr(0)}static Bn(){return new Pr(-1)}}/**
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
 */class F0{constructor(){this.changes=new Br(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,jt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class B0{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class U0{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&ps(r.mutation,s,ye.empty(),Rt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Z()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Z()){const s=Mn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=ts();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Mn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Z()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Ye();const o=ds(),a=function(){return ds()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Qn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ps(u.mutation,l,u.mutation.getFieldMask(),Rt.now())):o.set(l.key,ye.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new B0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=ds();let s=new Et((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||ye.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||Z()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Tm();u.forEach(f=>{if(!i.has(f)){const m=Sm(n.get(f),r.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):WA(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):E.resolve(Mn());let a=-1,c=i;return o.next(l=>E.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?E.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,Z())).next(u=>({batchId:a,changes:wm(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new q(n)).next(r=>{let s=ts();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=ts();return this.indexManager.getCollectionParents(t,i).next(a=>E.forEach(a,c=>{const l=function(h,f){return new Fo(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,jt.newInvalidDocument(u)))});let a=ts();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&ps(u.mutation,l,ye.empty(),Rt.now()),Uo(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class $0{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return E.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ne(s.createTime)}}(n)),E.resolve()}getNamedQuery(t,n){return E.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:N0(s.bundledQuery),readTime:Ne(s.readTime)}}(n)),E.resolve()}}/**
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
 */class j0{constructor(){this.overlays=new Et(q.comparator),this.hr=new Map}getOverlay(t,n){return E.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Mn();return E.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),E.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),E.resolve()}getOverlaysForCollection(t,n,r){const s=Mn(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return E.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Et((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Mn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Mn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return E.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new h0(n,r));let i=this.hr.get(n);i===void 0&&(i=Z(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class Nl{constructor(){this.Pr=new Ot(Pt.Ir),this.Tr=new Ot(Pt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new Pt(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new Pt(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new q(new gt([])),r=new Pt(n,t),s=new Pt(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new q(new gt([])),r=new Pt(n,t),s=new Pt(n,t+1);let i=Z();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Pt(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Pt{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return q.comparator(t.key,n.key)||rt(t.pr,n.pr)}static Er(t,n){return rt(t.pr,n.pr)||q.comparator(t.key,n.key)}}/**
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
 */class q0{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ot(Pt.Ir)}checkEmpty(t){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new u0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Pt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(t,n){return E.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Pt(n,0),s=new Pt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Ot(rt);return n.forEach(s=>{const i=new Pt(s,0),o=new Pt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),E.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new Pt(new q(i),0);let a=new Ot(rt);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),E.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){ft(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return E.forEach(n.mutations,s=>{const i=new Pt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new Pt(n,0),s=this.wr.firstAfterOrEqual(r);return E.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,E.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class K0{constructor(t){this.vr=t,this.docs=function(){return new Et(q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(t,n){let r=Ye();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():jt.newInvalidDocument(s))}),E.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Ye();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||CA(bA(u),r)<=0||(s.has(u.key)||Uo(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(t,n,r,s){z()}Fr(t,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new z0(this)}getSize(t){return E.resolve(this.size)}}class z0 extends F0{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),E.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class H0{constructor(t){this.persistence=t,this.Mr=new Br(n=>Sl(n),Dl),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Nl,this.targetCount=0,this.Br=Pr.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),E.resolve()}getLastRemoteSnapshotVersion(t){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return E.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),E.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new Pr(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,E.resolve()}updateTargetData(t,n){return this.qn(n),E.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),E.waitFor(i).next(()=>s)}getTargetCount(t){return E.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return E.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),E.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),E.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return E.resolve(r)}containsKey(t,n){return E.resolve(this.Nr.containsKey(n))}}/**
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
 */class W0{constructor(t,n){this.Lr={},this.overlays={},this.kr=new Rl(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new H0(this),this.indexManager=new O0,this.remoteDocumentCache=function(s){return new K0(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new M0(n),this.$r=new $0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new j0,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new q0(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){D("MemoryPersistence","Starting transaction:",t);const s=new G0(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return E.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class G0 extends SA{constructor(t){super(),this.currentSequenceNumber=t}}class Ol{constructor(t){this.persistence=t,this.zr=new Nl,this.jr=null}static Hr(t){return new Ol(t)}get Jr(){if(this.jr)return this.jr;throw z()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),E.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),E.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),E.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Jr,r=>{const s=q.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,G.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return E.or([()=>E.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class Ll{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=Z(),s=Z();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ll(t,n.fromCache,r,s)}}/**
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
 */class Q0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Y0{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return _v()?8:kn.v(Ni())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Q0;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(Qr()<=nt.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",ir(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),E.resolve()):(Qr()<=nt.DEBUG&&D("QueryEngine","Query:",ir(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Qr()<=nt.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",ir(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ke(n))):E.resolve())}ji(t,n){if($h(n))return E.resolve(null);let r=ke(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=gc(n,null,"F"),r=ke(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=Z(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(t,gc(n,null,"F")):this.es(t,l,n,c)}))})))}Hi(t,n,r,s){return $h(n)||s.isEqual(G.min())?E.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?E.resolve(null):(Qr()<=nt.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ir(n)),this.es(t,o,n,RA(s,-1)).next(a=>a))})}Zi(t,n){let r=new Ot(Em(t));return n.forEach((s,i)=>{Uo(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return Qr()<=nt.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",ir(n)),this.zi.getDocumentsMatchingQuery(t,n,mn.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class X0{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new Et(rt),this.rs=new Br(i=>Sl(i),Dl),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new U0(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function J0(e,t,n,r){return new X0(e,t,n,r)}async function $m(e,t){const n=X(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Z();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function Z0(e,t){const n=X(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let m=E.resolve();return f.forEach(A=>{m=m.next(()=>u.getEntry(c,A)).next(R=>{const b=l.docVersions.get(A);ft(b!==null),R.version.compareTo(b)<0&&(h.applyToRemoteDocument(R,l),R.isValidDocument()&&(R.setReadTime(l.commitVersion),u.addEntry(R)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Z();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function jm(e){const t=X(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function tR(e,t){const n=X(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(Wt.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(R,b,x){return R.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(f,m,u)&&a.push(n.Qr.updateTargetData(i,m))});let c=Ye(),l=Z();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(eR(i,o,t.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(G.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function eR(e,t,n){let r=Z(),s=Z();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Ye();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function nR(e,t){const n=X(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function rR(e,t){const n=X(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,E.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new on(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function wc(e,t,n){const r=X(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Qs(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Jh(e,t,n){const r=X(e);let s=G.min(),i=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=X(c),f=h.rs.get(u);return f!==void 0?E.resolve(h.ns.get(f)):h.Qr.getTargetData(l,u)}(r,o,ke(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:G.min(),n?i:Z())).next(a=>(sR(r,QA(t),a),{documents:a,hs:i})))}function sR(e,t,n){let r=e.ss.get(t)||G.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class Zh{constructor(){this.activeTargetIds=e0()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class iR{constructor(){this.no=new Zh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Zh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class oR{io(t){}shutdown(){}}/**
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
 */class tf{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pi=null;function Ra(){return pi===null?pi=function(){return 268435456+Math.round(2147483648*Math.random())}():pi++,"0x"+pi.toString(16)}/**
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
 */const aR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cR{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const Ut="WebChannelConnection";class lR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Ra(),c=this.bo(n,r.toUriEncodedString());D("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(D("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ar("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Lr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=aR[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=Ra();return new Promise((o,a)=>{const c=new pA;c.setWithCredentials(!0),c.listenOnce(fA.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ia.NO_ERROR:const u=c.getResponseJson();D(Ut,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ia.TIMEOUT:D(Ut,`RPC '${t}' ${i} timed out`),a(new F(w.DEADLINE_EXCEEDED,"Request time out"));break;case Ia.HTTP_ERROR:const h=c.getStatus();if(D(Ut,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const A=function(b){const x=b.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(x)>=0?x:w.UNKNOWN}(m.status);a(new F(A,m.message))}else a(new F(w.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new F(w.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{D(Ut,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(s);D(Ut,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(t,n,r){const s=Ra(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=uA(),a=hA(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");D(Ut,`Creating RPC '${t}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,m=!1;const A=new cR({lo:b=>{m?D(Ut,`Not sending because RPC '${t}' stream ${s} is closed:`,b):(f||(D(Ut,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),D(Ut,`RPC '${t}' stream ${s} sending:`,b),h.send(b))},ho:()=>h.close()}),R=(b,x,M)=>{b.listen(x,H=>{try{M(H)}catch(L){setTimeout(()=>{throw L},0)}})};return R(h,hi.EventType.OPEN,()=>{m||D(Ut,`RPC '${t}' stream ${s} transport opened.`)}),R(h,hi.EventType.CLOSE,()=>{m||(m=!0,D(Ut,`RPC '${t}' stream ${s} transport closed`),A.Vo())}),R(h,hi.EventType.ERROR,b=>{m||(m=!0,Ar(Ut,`RPC '${t}' stream ${s} transport errored:`,b),A.Vo(new F(w.UNAVAILABLE,"The operation could not be completed")))}),R(h,hi.EventType.MESSAGE,b=>{var x;if(!m){const M=b.data[0];ft(!!M);const H=M,L=H.error||((x=H[0])===null||x===void 0?void 0:x.error);if(L){D(Ut,`RPC '${t}' stream ${s} received error:`,L);const _t=L.status;let yt=function(Je){const ne=Tt[Je];if(ne!==void 0)return Vm(ne)}(_t),Ft=L.message;yt===void 0&&(yt=w.INTERNAL,Ft="Unknown error status: "+_t+" with message "+L.message),m=!0,A.Vo(new F(yt,Ft)),h.close()}else D(Ut,`RPC '${t}' stream ${s} received:`,M),A.mo(M)}}),R(a,dA.STAT_EVENT,b=>{b.stat===Dh.PROXY?D(Ut,`RPC '${t}' stream ${s} detected buffering proxy`):b.stat===Dh.NOPROXY&&D(Ut,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.Ro()},0),A}}function ba(){return typeof document<"u"?document:null}/**
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
 */function Ko(e){return new v0(e,!0)}/**
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
 */class qm{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Km{constructor(t,n,r,s,i,o,a,c){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new qm(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(Le(n.toString()),Le("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new F(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uR extends Km{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=I0(this.serializer,t),r=function(i){if(!("targetChange"in i))return G.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?Ne(o.readTime):G.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=vc(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=mc(c)?{documents:b0(i,c)}:{query:C0(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Mm(i,o.resumeToken);const l=_c(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=Xi(i,o.snapshotVersion.toTimestamp());const l=_c(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=S0(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=vc(this.serializer),n.removeTarget=t,this.t_(n)}}class hR extends Km{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(ft(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=R0(t.writeResults,t.commitTime),r=Ne(t.commitTime);return this.listener.T_(r,n)}return ft(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=vc(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>A0(this.serializer,r))};this.t_(n)}}/**
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
 */class fR extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new F(w.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,yc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(w.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,yc(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(w.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class dR{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Le(n),this.g_=!1):D("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class pR{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Yn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=X(c);l.v_.add(4),await Js(l),l.x_.set("Unknown"),l.v_.delete(4),await zo(l)}(this))})}),this.x_=new dR(r,s)}}async function zo(e){if(Yn(e))for(const t of e.F_)await t(!0)}async function Js(e){for(const t of e.F_)await t(!1)}function zm(e,t){const n=X(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),Ul(n)?Bl(n):Ur(n).Jo()&&Fl(n,t))}function Hm(e,t){const n=X(e),r=Ur(n);n.C_.delete(t),r.Jo()&&Wm(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Yn(n)&&n.x_.set("Unknown"))}function Fl(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(G.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ur(e).c_(t)}function Wm(e,t){e.O_.Oe(t),Ur(e).l_(t)}function Bl(e){e.O_=new g0({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Ur(e).start(),e.x_.p_()}function Ul(e){return Yn(e)&&!Ur(e).Ho()&&e.C_.size>0}function Yn(e){return X(e).v_.size===0}function Gm(e){e.O_=void 0}async function mR(e){e.C_.forEach((t,n)=>{Fl(e,t)})}async function gR(e,t){Gm(e),Ul(e)?(e.x_.S_(t),Bl(e)):e.x_.set("Unknown")}async function _R(e,t,n){if(e.x_.set("Online"),t instanceof km&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ji(e,r)}else if(t instanceof Ai?e.O_.$e(t):t instanceof xm?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(G.min()))try{const r=await jm(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(Wt.EMPTY_BYTE_STRING,u.snapshotVersion)),Wm(i,c);const h=new on(u.target,c,l,u.sequenceNumber);Fl(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Ji(e,r)}}async function Ji(e,t,n){if(!Qs(t))throw t;e.v_.add(1),await Js(e),e.x_.set("Offline"),n||(n=()=>jm(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await zo(e)})}function Qm(e,t){return t().catch(n=>Ji(e,n,t))}async function Ho(e){const t=X(e),n=_n(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;yR(t);)try{const s=await nR(t.localStore,r);if(s===null){t.D_.length===0&&n.Xo();break}r=s.batchId,ER(t,s)}catch(s){await Ji(t,s)}Ym(t)&&Xm(t)}function yR(e){return Yn(e)&&e.D_.length<10}function ER(e,t){e.D_.push(t);const n=_n(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function Ym(e){return Yn(e)&&!_n(e).Ho()&&e.D_.length>0}function Xm(e){_n(e).start()}async function vR(e){_n(e).d_()}async function wR(e){const t=_n(e);for(const n of e.D_)t.I_(n.mutations)}async function TR(e,t,n){const r=e.D_.shift(),s=xl.from(r,t,n);await Qm(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Ho(e)}async function IR(e,t){t&&_n(e).P_&&await async function(r,s){if(function(o){return d0(o)&&o!==w.ABORTED}(s.code)){const i=r.D_.shift();_n(r).Zo(),await Qm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ho(r)}}(e,t),Ym(e)&&Xm(e)}async function ef(e,t){const n=X(e);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Yn(n);n.v_.add(3),await Js(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await zo(n)}async function AR(e,t){const n=X(e);t?(n.v_.delete(2),await zo(n)):t||(n.v_.add(2),await Js(n),n.x_.set("Unknown"))}function Ur(e){return e.N_||(e.N_=function(n,r,s){const i=X(n);return i.R_(),new uR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:mR.bind(null,e),To:gR.bind(null,e),u_:_R.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),Ul(e)?Bl(e):e.x_.set("Unknown")):(await e.N_.stop(),Gm(e))})),e.N_}function _n(e){return e.B_||(e.B_=function(n,r,s){const i=X(n);return i.R_(),new hR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:vR.bind(null,e),To:IR.bind(null,e),E_:wR.bind(null,e),T_:TR.bind(null,e)}),e.F_.push(async t=>{t?(e.B_.Zo(),await Ho(e)):(await e.B_.stop(),e.D_.length>0&&(D("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.B_}/**
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
 */class $l{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new We,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new $l(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jl(e,t){if(Le("AsyncQueue",`${t}: ${e}`),Qs(e))return new F(w.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class gr{constructor(t){this.comparator=t?(n,r)=>t(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=ts(),this.sortedSet=new Et(this.comparator)}static emptySet(t){return new gr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof gr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new gr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class nf{constructor(){this.L_=new Et(q.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):z():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Sr{constructor(t,n,r,s,i,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Sr(t,n,gr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Bo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class RR{constructor(){this.q_=void 0,this.Q_=[]}}class bR{constructor(){this.queries=new Br(t=>ym(t),Bo),this.onlineState="Unknown",this.K_=new Set}}async function CR(e,t){const n=X(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new RR),s)try{i.q_=await n.onListen(r)}catch(o){const a=jl(o,`Initialization of query '${ir(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.Q_.push(t),t.U_(n.onlineState),i.q_&&t.W_(i.q_)&&ql(n)}async function PR(e,t){const n=X(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function SR(e,t){const n=X(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&ql(n)}function DR(e,t,n){const r=X(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function ql(e){e.K_.forEach(t=>{t.next()})}class VR{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Sr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=Sr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
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
 */class Jm{constructor(t){this.key=t}}class Zm{constructor(t){this.key=t}}class xR{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Z(),this.mutatedKeys=Z(),this.ua=Em(t),this.ca=new gr(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new nf,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const f=s.get(u),m=Uo(this.query,h)?h:null,A=!!f&&this.mutatedKeys.has(f.key),R=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;f&&m?f.data.isEqual(m.data)?A!==R&&(r.track({type:3,doc:m}),b=!0):this.Ia(f,m)||(r.track({type:2,doc:m}),b=!0,(c&&this.ua(m,c)>0||l&&this.ua(m,l)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),b=!0):f&&!m&&(r.track({type:1,doc:f}),b=!0,(c||l)&&(a=!0)),b&&(m?(o=o.add(m),i=R?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((u,h)=>function(m,A){const R=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return R(m)-R(A)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=n&&!s?this.Ea():[],c=this.aa.size===0&&this.current&&!s?1:0,l=c!==this._a;return this._a=c,o.length!==0||l?{snapshot:new Sr(this.query,t.ca,i,o,t.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new nf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=Z(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new Zm(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new Jm(r))}),n}Ra(t){this.oa=t.hs,this.aa=Z();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return Sr.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class kR{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class MR{constructor(t){this.key=t,this.ma=!1}}class NR{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Br(a=>ym(a),Bo),this.pa=new Map,this.ya=new Set,this.wa=new Et(q.comparator),this.Sa=new Map,this.ba=new Nl,this.Da={},this.Ca=new Map,this.va=Pr.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function OR(e,t){const n=HR(e);let r,s;const i=n.ga.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await rR(n.localStore,ke(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await LR(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&zm(n.remoteStore,o)}return s}async function LR(e,t,n,r,s){e.Ma=(h,f,m)=>async function(R,b,x,M){let H=b.view.ha(x);H.Xi&&(H=await Jh(R.localStore,b.query,!1).then(({documents:Ft})=>b.view.ha(Ft,H)));const L=M&&M.targetChanges.get(b.targetId),_t=M&&M.targetMismatches.get(b.targetId)!=null,yt=b.view.applyChanges(H,R.isPrimaryClient,L,_t);return sf(R,b.targetId,yt.da),yt.snapshot}(e,h,f,m);const i=await Jh(e.localStore,t,!0),o=new xR(t,i.hs),a=o.ha(i.documents),c=Xs.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),l=o.applyChanges(a,e.isPrimaryClient,c);sf(e,n,l.da);const u=new kR(t,n,o);return e.ga.set(t,u),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),l.snapshot}async function FR(e,t){const n=X(e),r=n.ga.get(t),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Bo(i,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Hm(n.remoteStore,r.targetId),Tc(n,r.targetId)}).catch(Gs)):(Tc(n,r.targetId),await wc(n.localStore,r.targetId,!0))}async function BR(e,t,n){const r=WR(e);try{const s=await function(o,a){const c=X(o),l=Rt.now(),u=a.reduce((m,A)=>m.add(A.key),Z());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let A=Ye(),R=Z();return c.os.getEntries(m,u).next(b=>{A=b,A.forEach((x,M)=>{M.isValidDocument()||(R=R.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,A)).next(b=>{h=b;const x=[];for(const M of a){const H=c0(M,h.get(M.key).overlayedDocument);H!=null&&x.push(new Qn(M.key,H,um(H.value.mapValue),Me.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,x,a)}).next(b=>{f=b;const x=b.applyToLocalDocumentSet(h,R);return c.documentOverlayCache.saveOverlays(m,b.batchId,x)})}).then(()=>({batchId:f.batchId,changes:wm(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new Et(rt)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await Zs(r,s.changes),await Ho(r.remoteStore)}catch(s){const i=jl(s,"Failed to persist write");n.reject(i)}}async function tg(e,t){const n=X(e);try{const r=await tR(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(ft(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?ft(o.ma):s.removedDocuments.size>0&&(ft(o.ma),o.ma=!1))}),await Zs(n,r,t)}catch(r){await Gs(r)}}function rf(e,t,n){const r=X(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=X(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.Q_)f.U_(a)&&(l=!0)}),l&&ql(c)}(r.eventManager,t),s.length&&r.fa.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function UR(e,t,n){const r=X(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Sa.get(t),i=s&&s.key;if(i){let o=new Et(q.comparator);o=o.insert(i,jt.newNoDocument(i,G.min()));const a=Z().add(i),c=new qo(G.min(),new Map,new Et(rt),o,a);await tg(r,c),r.wa=r.wa.remove(i),r.Sa.delete(t),Kl(r)}else await wc(r.localStore,t,!1).then(()=>Tc(r,t,n)).catch(Gs)}async function $R(e,t){const n=X(e),r=t.batch.batchId;try{const s=await Z0(n.localStore,t);ng(n,r,null),eg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zs(n,s)}catch(s){await Gs(s)}}async function jR(e,t,n){const r=X(e);try{const s=await function(o,a){const c=X(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ft(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);ng(r,t,n),eg(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Zs(r,s)}catch(s){await Gs(s)}}function eg(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function ng(e,t,n){const r=X(e);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Da[r.currentUser.toKey()]=s}}function Tc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||rg(e,r)})}function rg(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(Hm(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),Kl(e))}function sf(e,t,n){for(const r of n)r instanceof Jm?(e.ba.addReference(r.key,t),qR(e,r)):r instanceof Zm?(D("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||rg(e,r.key)):z()}function qR(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(D("SyncEngine","New document in limbo: "+n),e.ya.add(r),Kl(e))}function Kl(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new q(gt.fromString(t)),r=e.va.next();e.Sa.set(r,new MR(n)),e.wa=e.wa.insert(n,r),zm(e.remoteStore,new on(ke(_m(n.path)),r,"TargetPurposeLimboResolution",Rl._e))}}async function Zs(e,t,n){const r=X(e),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Ll.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.u_(s),await async function(c,l){const u=X(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>E.forEach(l,f=>E.forEach(f.qi,m=>u.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>E.forEach(f.Qi,m=>u.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!Qs(h))throw h;D("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=u.ns.get(f),A=m.snapshotVersion,R=m.withLastLimboFreeSnapshotVersion(A);u.ns=u.ns.insert(f,R)}}}(r.localStore,i))}async function KR(e,t){const n=X(e);if(!n.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const r=await $m(n.localStore,t);n.currentUser=t,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new F(w.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Zs(n,r.us)}}function zR(e,t){const n=X(e),r=n.Sa.get(t);if(r&&r.ma)return Z().add(r.key);{let s=Z();const i=n.pa.get(t);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function HR(e){const t=X(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=tg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=zR.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=UR.bind(null,t),t.fa.u_=SR.bind(null,t.eventManager),t.fa.xa=DR.bind(null,t.eventManager),t}function WR(e){const t=X(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$R.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=jR.bind(null,t),t}class of{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ko(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return J0(this.persistence,new Y0,t.initialUser,this.serializer)}createPersistence(t){return new W0(Ol.Hr,this.serializer)}createSharedClientState(t){return new iR}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class GR{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KR.bind(null,this.syncEngine),await AR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new bR}()}createDatastore(t){const n=Ko(t.databaseInfo.databaseId),r=function(i){return new lR(i)}(t.databaseInfo);return function(i,o,a,c){return new fR(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new pR(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>rf(this.syncEngine,n,0),function(){return tf.D()?new tf:new oR}())}createSyncEngine(t,n){return function(s,i,o,a,c,l,u){const h=new NR(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=X(r);D("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Js(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class QR{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Le("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class YR{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=$t.UNAUTHENTICATED,this.clientId=am.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{D("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(D("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new We;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=jl(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ca(e,t){e.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await $m(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function af(e,t){e.asyncQueue.verifyOperationInProgress();const n=await JR(e);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>ef(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>ef(t.remoteStore,s)),e._onlineComponents=t}function XR(e){return e.name==="FirebaseError"?e.code===w.FAILED_PRECONDITION||e.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function JR(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ca(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!XR(n))throw n;Ar("Error using user provided cache. Falling back to memory cache: "+n),await Ca(e,new of)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Ca(e,new of);return e._offlineComponents}async function sg(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await af(e,e._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await af(e,new GR))),e._onlineComponents}function ZR(e){return sg(e).then(t=>t.syncEngine)}async function tb(e){const t=await sg(e),n=t.eventManager;return n.onListen=OR.bind(null,t.syncEngine),n.onUnlisten=FR.bind(null,t.syncEngine),n}function eb(e,t,n={}){const r=new We;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new QR({next:f=>{o.enqueueAndForget(()=>PR(i,h)),f.fromCache&&c.source==="server"?l.reject(new F(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new VR(a,u,{includeMetadataChanges:!0,Z_:!0});return CR(i,h)}(await tb(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function ig(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const cf=new Map;/**
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
 */function og(e,t,n){if(!n)throw new F(w.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function nb(e,t,n,r){if(t===!0&&r===!0)throw new F(w.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function lf(e){if(!q.isDocumentKey(e))throw new F(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function uf(e){if(q.isDocumentKey(e))throw new F(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function zl(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":z()}function Dr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new F(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zl(e);throw new F(w.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class hf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new F(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new F(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}nb("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ig((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Wo{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new F(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hf(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gA;switch(r.type){case"firstParty":return new vA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=cf.get(n);r&&(D("ComponentProvider","Removing Datastore"),cf.delete(n),r.terminate())}(this),Promise.resolve()}}function rb(e,t,n,r={}){var s;const i=(e=Dr(e,Wo))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ar("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=$t.MOCK_USER;else{a=pv(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new F(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new $t(l)}e._authCredentials=new _A(new om(a,c))}}/**
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
 */class Go{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Go(this.firestore,t,this._query)}}class he{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new he(this.firestore,t,this._key)}}class fn extends Go{constructor(t,n,r){super(t,n,_m(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new he(this.firestore,null,new q(t))}withConverter(t){return new fn(this.firestore,t,this._path)}}function sb(e,t,...n){if(e=$n(e),og("collection","path",t),e instanceof Wo){const r=gt.fromString(t,...n);return uf(r),new fn(e,null,r)}{if(!(e instanceof he||e instanceof fn))throw new F(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(gt.fromString(t,...n));return uf(r),new fn(e.firestore,null,r)}}function ff(e,t,...n){if(e=$n(e),arguments.length===1&&(t=am.newId()),og("doc","path",t),e instanceof Wo){const r=gt.fromString(t,...n);return lf(r),new he(e,null,new q(r))}{if(!(e instanceof he||e instanceof fn))throw new F(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(gt.fromString(t,...n));return lf(r),new he(e.firestore,e instanceof fn?e.converter:null,new q(r))}}/**
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
 */class ib{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new qm(this,"async_queue_retry"),this._u=()=>{const n=ba();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=ba();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=ba();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new We;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Qs(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Le("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const s=$l.createAndSchedule(this,t,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&z()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}class Qo extends Wo{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new ib}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cg(this),this._firestoreClient.terminate()}}function ob(e,t){const n=typeof e=="object"?e:Dd(),r=typeof e=="string"?e:t||"(default)",s=Bs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=fv("firestore");i&&rb(s,...i)}return s}function ag(e){return e._firestoreClient||cg(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function cg(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,l,u){return new MA(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ig(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new YR(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Vr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vr(Wt.fromBase64String(t))}catch(n){throw new F(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Vr(Wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Hl{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new F(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class lg{constructor(t){this._methodName=t}}/**
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
 */class Wl{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new F(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new F(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rt(this._lat,t._lat)||rt(this._long,t._long)}}/**
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
 */const ab=/^__.*__$/;class cb{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Qn(t,this.data,this.fieldMask,n,this.fieldTransforms):new Ys(t,this.data,n,this.fieldTransforms)}}function ug(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Gl{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new Gl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Au({path:r,Vu:!1});return s.mu(t),s}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Zi(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(ug(this.du)&&ab.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class lb{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ko(t)}Su(t,n,r,s=!1){return new Gl({du:t,methodName:n,wu:r,path:Mt.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ub(e){const t=e._freezeSettings(),n=Ko(e._databaseId);return new lb(e._databaseId,!!t.ignoreUndefinedProperties,n)}function hb(e,t,n,r,s,i={}){const o=e.Su(i.merge||i.mergeFields?2:0,t,n,s);pg("Data must be an object, but it was:",o,r);const a=fg(r,o);let c,l;if(i.merge)c=new ye(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=fb(t,h,n);if(!o.contains(f))throw new F(w.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);pb(u,f)||u.push(f)}c=new ye(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new cb(new le(a),c,l)}function hg(e,t){if(dg(e=$n(e)))return pg("Unsupported field value:",t,e),fg(e,t);if(e instanceof lg)return function(r,s){if(!ug(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=hg(a,s.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=$n(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return n0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Rt.fromDate(r);return{timestampValue:Xi(s.serializer,i)}}if(r instanceof Rt){const i=new Rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xi(s.serializer,i)}}if(r instanceof Wl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vr)return{bytesValue:Mm(s.serializer,r._byteString)};if(r instanceof he){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ml(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${zl(r)}`)}(e,t)}function fg(e,t){const n={};return cm(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Fr(e,(r,s)=>{const i=hg(s,t.Ru(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function dg(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Rt||e instanceof Wl||e instanceof Vr||e instanceof he||e instanceof lg)}function pg(e,t,n){if(!dg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=zl(n);throw r==="an object"?t.pu(e+" a custom object"):t.pu(e+" "+r)}}function fb(e,t,n){if((t=$n(t))instanceof Hl)return t._internalPath;if(typeof t=="string")return mg(e,t);throw Zi("Field path arguments must be of type string or ",e,!1,void 0,n)}const db=new RegExp("[~\\*/\\[\\]]");function mg(e,t,n){if(t.search(db)>=0)throw Zi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Hl(...t.split("."))._internalPath}catch{throw Zi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Zi(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new F(w.INVALID_ARGUMENT,a+e+c)}function pb(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class gg{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new mb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(_g("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mb extends gg{data(){return super.data()}}function _g(e,t){return typeof t=="string"?mg(e,t):t instanceof Hl?t._internalPath:t._delegate._internalPath}/**
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
 */function gb(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new F(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _b{convertValue(t,n="none"){switch(Wn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return It(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Hn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw z()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Fr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Wl(It(t.latitude),It(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Cl(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xs(t));default:return null}}convertTimestamp(t){const n=gn(t);return new Rt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=gt.fromString(t);ft(Um(r));const s=new ks(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||Le(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function yb(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class mi{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Eb extends gg{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(_g("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ri extends Eb{data(t={}){return super.data(t)}}class vb{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new mi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Ri(this._firestore,this._userDataWriter,r.key,r,new mi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Ri(s._firestore,s._userDataWriter,a.doc.key,a.doc,new mi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Ri(s._firestore,s._userDataWriter,a.doc.key,a.doc,new mi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:wb(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wb(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}class Tb extends _b{constructor(t){super(),this.firestore=t}convertBytes(t){return new Vr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new he(this.firestore,null,n)}}function Ib(e){e=Dr(e,Go);const t=Dr(e.firestore,Qo),n=ag(t),r=new Tb(t);return gb(e._query),eb(n,e._query).then(s=>new vb(t,r,e,s))}function Ab(e,t,n){e=Dr(e,he);const r=Dr(e.firestore,Qo),s=yb(e.converter,t,n);return yg(r,[hb(ub(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,Me.none())])}function Rb(e){return yg(Dr(e.firestore,Qo),[new Vl(e._key,Me.none())])}function yg(e,t){return function(r,s){const i=new We;return r.asyncQueue.enqueueAndForget(async()=>BR(await ZR(r),s,i)),i.promise}(ag(e),t)}(function(t,n=!0){(function(s){Lr=s})(Tw),pn(new Ge("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Qo(new yA(r.getProvider("auth-internal")),new TA(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new F(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ks(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),xe(Vh,"4.4.1",t),xe(Vh,"4.4.1","esm2017")})();const bb={apiKey:"AIzaSyA9FHvgcEnj6gOFr3XN9k2afUAJkYkpt4Q",authDomain:"sarangem-4a293.firebaseapp.com",projectId:"sarangem-4a293",storageBucket:"sarangem-4a293.appspot.com",messagingSenderId:"505129822335",appId:"1:505129822335:web:f01ec4e7e445c7d3b4374a",measurementId:"G-EFKE2348KH"},Eg=Sd(bb),Pa=ob(Eg);oI(Eg);const $r=e=>(lo("data-v-e41e0790"),e=e(),uo(),e),Cb={class:"mainWrapper"},Pb={class:"toggles_wrapper"},Sb=$r(()=>j("div",{class:"title"}," MOKJANG GROUP GENERATOR ",-1)),Db={class:"generateButtonWrapper"},Vb={class:"leaders_wrapper"},xb=$r(()=>j("div",{class:"title"}," LEADERS ",-1)),kb={class:"leader_wrapper"},Mb={class:"edit_wrapper"},Nb={class:"addNewMemberButtonWrapper"},Ob={class:"addMemberInput"},Lb=$r(()=>j("label",{for:"newMemberCollege"},"College Student?",-1)),Fb={class:"buttonWrapper"},Bb={class:"collegeToggleWrapper"},Ub={class:"panel-body"},$b=$r(()=>j("span",{class:"label"},"COLLEGE",-1)),jb={class:"switch"},qb=["checked"],Kb=$r(()=>j("div",{class:"slider round"},null,-1)),zb={class:"member_wrapper"},Hb=$r(()=>j("div",{class:"heading"},[j("div",{class:"headingName"},"Name"),j("div",{class:"headingAttend"},"Attend")],-1)),Wb=["onClick"],Gb={class:"confirmBox"},Qb={class:"modalWrapper"},Yb={class:"coloredText"},Xb={class:"buttonWrapper"},Jb={components:{ToggleButton:Td},data(){return{showAddMember:!1,newMember:"",newMemberEmoji:"",newMemberCollege:!1,leaders:[{name:"🫶 Gloria 🫶",attendance:!0,color:"#FFADFF"},{name:"🏎️ Mingu 🏎️",attendance:!0,color:"#B4EDD2"}],teamGloria:[],teamMingu:[],showModal:!1,selectedMember:""}},computed:{members:function(){return qe.members},showCollege:function(){return qe.showCollege}},methods:{async getMembers(){const e=sb(Pa,"generator"),n=(await Ib(e)).docs.map(r=>r.data());return qe.members=n,n},async addNewMember(e,t,n){e&&!this.members.find(r=>r.name===e)?(this.members.push({name:e,attendance:!0,emoji:t,college:n}),await Ab(ff(Pa,"generator",e),{name:e,attendance:!n,emoji:t,college:n})):console.log("duplicate"),this.newMember="",this.newMemberEmoji="",this.newMemberCollege=!1,this.showAddMember=!this.showAddMember},toggleAddNewMember(){this.showAddMember=!this.showAddMember},async removeMember(e){this.closeModal(),qe.members=this.members.filter(t=>t.name!==e),await Rb(ff(Pa,"generator",e))},removeLeader(e){qe.leaders=this.leaders.filter(t=>t.name!==e.name)},confirmRemove(e){this.selectedMember=e.name,this.openModal()},openModal(){this.showModal=!0},closeModal(){this.showModal=!1},getColor(e){var t="#000";return["#000","#F02D3A","#8A81D9","#8023D1","#0A81FF","#FFADFF"].includes(e)&&(t="#fff"),{"background-color":e,color:t}},toggleCollege(){qe.showCollege=!qe.showCollege},getShow(e){return e.college?!!this.showCollege:!0}},mounted(){},created(){this.getMembers()}},Zb=Object.assign(Jb,{__name:"MemberPage",setup(e){return(t,n)=>{const r=Kf("RouterLink");return oe(),ae("div",Cb,[j("div",Pb,[Sb,j("div",Db,[Qt(r,{to:"/result",class:"resultPageLink"},{default:Oc(()=>[is(" Next ")]),_:1})]),j("div",Vb,[xb,(oe(!0),ae(Zt,null,Si(t.leaders,s=>(oe(),ae("div",kb,[j("div",{class:"leadername",style:Un(t.getColor(s.color))},ns(s.name),5)]))),256))]),j("div",Mb,[j("div",null,[j("div",Nb,[j("button",{onClick:n[0]||(n[0]=s=>t.toggleAddNewMember()),class:"addNewMemberButton"},"Add New Member ")]),er(j("div",Ob,[er(j("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=s=>t.newMember=s),placeholder:"Type a name to add!",required:"",ref:"nameInput",class:"inputBox"},null,512),[[Du,t.newMember]]),er(j("input",{type:"text","onUpdate:modelValue":n[2]||(n[2]=s=>t.newMemberEmoji=s),placeholder:"Type a emoji to add!",ref:"emojiInput",class:"inputBox"},null,512),[[Du,t.newMemberEmoji]]),Lb,er(j("input",{type:"checkbox","onUpdate:modelValue":n[3]||(n[3]=s=>t.newMemberCollege=s),id:"newMemberCollege",ref:"collegeInput",class:"checkBox"},null,512),[[Ny,t.newMemberCollege]]),j("div",Fb,[j("button",{onClick:n[4]||(n[4]=s=>t.addNewMember(t.newMember,t.newMemberEmoji,t.newMemberCollege)),class:"button"},"ADD ")])],512),[[ta,t.showAddMember]])])]),j("div",Bb,[j("div",Ub,[$b,j("label",jb,[j("input",{type:"checkbox",onClick:n[5]||(n[5]=(...s)=>t.toggleCollege&&t.toggleCollege(...s)),checked:t.showCollege===!0},null,8,qb),Kb])])]),j("div",zb,[Hb,(oe(!0),ae(Zt,null,Si(t.members,s=>er((oe(),ae("div",{class:"member",key:s.name},[j("div",{class:"name",style:Un(t.getColor(s.color))},ns(s.emoji+" "+s.name[0].toUpperCase()+s.name.slice(1)),5),Qt(Td,{member:s},null,8,["member"]),j("button",{class:"removeMemberButton",onClick:i=>t.confirmRemove(s)},"X",8,Wb)])),[[ta,t.getShow(s)]])),128))]),er(j("div",Gb,[j("div",Qb,[j("div",null,[is(" Are you sure you wish to delete "),j("span",Yb,ns(t.selectedMember),1),is(" from the list? ")]),j("div",Xb,[j("button",{class:"yesButton",onClick:n[6]||(n[6]=s=>t.removeMember(t.selectedMember))},"Yes"),j("button",{class:"cancelButton",onClick:n[7]||(n[7]=(...s)=>t.closeModal&&t.closeModal(...s))},"Cancel")])])],512),[[ta,t.showModal]])])])}}}),tC=_o(Zb,[["__scopeId","data-v-e41e0790"]]),vg=e=>(lo("data-v-c8a5d20c"),e=e(),uo(),e),eC={class:"mainWrapper"},nC={class:"generateButtonWrapper"},rC={class:"resultWrapper"},sC={class:"teamWrapper"},iC=vg(()=>j("h1",{class:"title"},"🫶 Gloria 🫶",-1)),oC={class:"members"},aC={class:"teamWrapper minguTeamWrapper"},cC=vg(()=>j("h1",{class:"title"},"🏎️ Mingu 🏎️",-1)),lC={class:"members"},uC={components:{},data(){return{teamGloria:[],teamMingu:[]}},methods:{shuffle(e){const t=e.map(n=>n);for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t},generateTeam(){this.teamGloria=[],this.teamMingu=[];var e=qe.members.filter(n=>n.attendance===!0);qe.showCollege||(e=e.filter(n=>n.college===!1)),this.shuffle(e).forEach((n,r)=>{r%2===0?this.teamGloria.push(n):this.teamMingu.push(n)})},getColor(e){var t="#000";return["#000","#F02D3A","#8A81D9","#8023D1","#0A81FF","#FFADFF"].includes(e)&&(t="#fff"),{"background-color":e,color:t}}}},hC=Object.assign(uC,{__name:"ResultPage",setup(e){return(t,n)=>{const r=Kf("RouterLink");return oe(),ae("div",eC,[Qt(r,{to:"/",class:"backButton"},{default:Oc(()=>[is("BACK")]),_:1}),j("div",nC,[j("button",{onClick:n[0]||(n[0]=s=>t.generateTeam()),class:"generateButton"},"GENERATE")]),j("div",rC,[j("div",sC,[iC,j("div",oC,[(oe(!0),ae(Zt,null,Si(t.teamGloria,s=>(oe(),ae("div",{class:"memberResult",style:Un(t.getColor(s.color)),key:s.name},ns(s.emoji+" "+s.name[0].toUpperCase()+s.name.slice(1)),5))),128))])]),j("div",aC,[cC,j("div",lC,[(oe(!0),ae(Zt,null,Si(t.teamMingu,s=>(oe(),ae("div",{class:"memberResult",style:Un(t.getColor(s.color)),key:s.name},ns(s.emoji+" "+s.name[0].toUpperCase()+s.name.slice(1)),5))),128))])])])])}}}),fC=_o(hC,[["__scopeId","data-v-c8a5d20c"]]),dC=$E({history:sE("/"),routes:[{path:"/",name:"home",component:tC},{path:"/result",name:"result",component:fC},{path:"/about",name:"about",component:()=>QE(()=>import("./AboutView-3aOJ8CsD.js"),__vite__mapDeps([0,1]))}]}),wg=By(HE);wg.use(dC);wg.mount("#app");export{_o as _,j as a,ae as c,oe as o};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AboutView-3aOJ8CsD.js","assets/AboutView-ug8e6cRs.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}