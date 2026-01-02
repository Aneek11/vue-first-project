(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function vc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ht={},vr=[],Nn=()=>{},bd=()=>!1,Oo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Sc=n=>n.startsWith("onUpdate:"),Bt=Object.assign,Mc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},sm=Object.prototype.hasOwnProperty,at=(n,e)=>sm.call(n,e),Ye=Array.isArray,Sr=n=>Bo(n)==="[object Map]",yd=n=>Bo(n)==="[object Set]",qe=n=>typeof n=="function",At=n=>typeof n=="string",Pi=n=>typeof n=="symbol",_t=n=>n!==null&&typeof n=="object",Td=n=>(_t(n)||qe(n))&&qe(n.then)&&qe(n.catch),Ad=Object.prototype.toString,Bo=n=>Ad.call(n),om=n=>Bo(n).slice(8,-1),wd=n=>Bo(n)==="[object Object]",Ec=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ss=vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},am=/-\w/g,wi=Vo(n=>n.replace(am,e=>e.slice(1).toUpperCase())),lm=/\B([A-Z])/g,er=Vo(n=>n.replace(lm,"-$1").toLowerCase()),Rd=Vo(n=>n.charAt(0).toUpperCase()+n.slice(1)),la=Vo(n=>n?`on${Rd(n)}`:""),Ai=(n,e)=>!Object.is(n,e),ca=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Cd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},cm=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let mu;const zo=()=>mu||(mu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ho(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=At(i)?hm(i):Ho(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(At(n)||_t(n))return n}const um=/;(?![^(]*\))/g,fm=/:([^]+)/,dm=/\/\*[^]*?\*\//g;function hm(n){const e={};return n.replace(dm,"").split(um).forEach(t=>{if(t){const i=t.split(fm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function bc(n){let e="";if(At(n))e=n;else if(Ye(n))for(let t=0;t<n.length;t++){const i=bc(n[t]);i&&(e+=i+" ")}else if(_t(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const pm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mm=vc(pm);function Pd(n){return!!n||n===""}const Dd=n=>!!(n&&n.__v_isRef===!0),bo=n=>At(n)?n:n==null?"":Ye(n)||_t(n)&&(n.toString===Ad||!qe(n.toString))?Dd(n)?bo(n.value):JSON.stringify(n,Ld,2):String(n),Ld=(n,e)=>Dd(e)?Ld(n,e.value):Sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[ua(i,s)+" =>"]=r,t),{})}:yd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ua(t))}:Pi(e)?ua(e):_t(e)&&!Ye(e)&&!wd(e)?String(e):e,ua=(n,e="")=>{var t;return Pi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let $t;class Id{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=$t;try{return $t=this,e()}finally{$t=t}}}on(){++this._on===1&&(this.prevScope=$t,$t=this)}off(){this._on>0&&--this._on===0&&($t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function gm(n){return new Id(n)}function _m(){return $t}let gt;const fa=new WeakSet;class Ud{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fa.has(this)&&(fa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gu(this),Od(this);const e=gt,t=Sn;gt=this,Sn=!0;try{return this.fn()}finally{Bd(this),gt=e,Sn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ac(e);this.deps=this.depsTail=void 0,gu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rl(this)&&this.run()}get dirty(){return rl(this)}}let Nd=0,os,as;function Fd(n,e=!1){if(n.flags|=8,e){n.next=as,as=n;return}n.next=os,os=n}function yc(){Nd++}function Tc(){if(--Nd>0)return;if(as){let e=as;for(as=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;os;){let e=os;for(os=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Od(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ac(i),xm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function rl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Vd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Vd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ps)||(n.globalVersion=ps,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!rl(n))))return;n.flags|=2;const e=n.dep,t=gt,i=Sn;gt=n,Sn=!0;try{Od(n);const r=n.fn(n._value);(e.version===0||Ai(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{gt=t,Sn=i,Bd(n),n.flags&=-3}}function Ac(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ac(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function xm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Sn=!0;const zd=[];function ai(){zd.push(Sn),Sn=!1}function li(){const n=zd.pop();Sn=n===void 0?!0:n}function gu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=gt;gt=void 0;try{e()}finally{gt=t}}}let ps=0;class vm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!gt||!Sn||gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==gt)t=this.activeLink=new vm(gt,this),gt.deps?(t.prevDep=gt.depsTail,gt.depsTail.nextDep=t,gt.depsTail=t):gt.deps=gt.depsTail=t,Hd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=gt.depsTail,t.nextDep=void 0,gt.depsTail.nextDep=t,gt.depsTail=t,gt.deps===t&&(gt.deps=i)}return t}trigger(e){this.version++,ps++,this.notify(e)}notify(e){yc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Tc()}}}function Hd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Hd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const sl=new WeakMap,Ki=Symbol(""),ol=Symbol(""),ms=Symbol("");function Ut(n,e,t){if(Sn&&gt){let i=sl.get(n);i||sl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new wc),r.map=i,r.key=t),r.track()}}function Qn(n,e,t,i,r,s){const o=sl.get(n);if(!o){ps++;return}const a=l=>{l&&l.trigger()};if(yc(),e==="clear")o.forEach(a);else{const l=Ye(n),c=l&&Ec(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===ms||!Pi(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(ms)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ki)),Sr(n)&&a(o.get(ol)));break;case"delete":l||(a(o.get(Ki)),Sr(n)&&a(o.get(ol)));break;case"set":Sr(n)&&a(o.get(Ki));break}}Tc()}function nr(n){const e=ot(n);return e===n?e:(Ut(e,"iterate",ms),Mn(n)?e:e.map(ci))}function Rc(n){return Ut(n=ot(n),"iterate",ms),n}function Si(n,e){return Ri(n)?Mr(n)?gs(ci(e)):gs(e):ci(e)}const Sm={__proto__:null,[Symbol.iterator](){return da(this,Symbol.iterator,n=>Si(this,n))},concat(...n){return nr(this).concat(...n.map(e=>Ye(e)?nr(e):e))},entries(){return da(this,"entries",n=>(n[1]=Si(this,n[1]),n))},every(n,e){return Wn(this,"every",n,e,void 0,arguments)},filter(n,e){return Wn(this,"filter",n,e,t=>t.map(i=>Si(this,i)),arguments)},find(n,e){return Wn(this,"find",n,e,t=>Si(this,t),arguments)},findIndex(n,e){return Wn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Wn(this,"findLast",n,e,t=>Si(this,t),arguments)},findLastIndex(n,e){return Wn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Wn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ha(this,"includes",n)},indexOf(...n){return ha(this,"indexOf",n)},join(n){return nr(this).join(n)},lastIndexOf(...n){return ha(this,"lastIndexOf",n)},map(n,e){return Wn(this,"map",n,e,void 0,arguments)},pop(){return Wr(this,"pop")},push(...n){return Wr(this,"push",n)},reduce(n,...e){return _u(this,"reduce",n,e)},reduceRight(n,...e){return _u(this,"reduceRight",n,e)},shift(){return Wr(this,"shift")},some(n,e){return Wn(this,"some",n,e,void 0,arguments)},splice(...n){return Wr(this,"splice",n)},toReversed(){return nr(this).toReversed()},toSorted(n){return nr(this).toSorted(n)},toSpliced(...n){return nr(this).toSpliced(...n)},unshift(...n){return Wr(this,"unshift",n)},values(){return da(this,"values",n=>Si(this,n))}};function da(n,e,t){const i=Rc(n),r=i[e]();return i!==n&&!Mn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Mm=Array.prototype;function Wn(n,e,t,i,r,s){const o=Rc(n),a=o!==n&&!Mn(n),l=o[e];if(l!==Mm[e]){const f=l.apply(n,s);return a?ci(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,Si(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function _u(n,e,t,i){const r=Rc(n);let s=t;return r!==n&&(Mn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Si(n,a),l,n)}),r[e](s,...i)}function ha(n,e,t){const i=ot(n);Ut(i,"iterate",ms);const r=i[e](...t);return(r===-1||r===!1)&&Dc(t[0])?(t[0]=ot(t[0]),i[e](...t)):r}function Wr(n,e,t=[]){ai(),yc();const i=ot(n)[e].apply(n,t);return Tc(),li(),i}const Em=vc("__proto__,__v_isRef,__isVue"),Gd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Pi));function bm(n){Pi(n)||(n=String(n));const e=ot(this);return Ut(e,"has",n),e.hasOwnProperty(n)}class kd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Im:Yd:s?qd:Xd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ye(e);if(!r){let l;if(o&&(l=Sm[t]))return l;if(t==="hasOwnProperty")return bm}const a=Reflect.get(e,t,Ot(e)?e:i);if((Pi(t)?Gd.has(t):Em(t))||(r||Ut(e,"get",t),s))return a;if(Ot(a)){const l=o&&Ec(t)?a:a.value;return r&&_t(l)?ll(l):l}return _t(a)?r?ll(a):Go(a):a}}class Wd extends kd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ye(e)&&Ec(t);if(!this._isShallow){const c=Ri(s);if(!Mn(i)&&!Ri(i)&&(s=ot(s),i=ot(i)),!o&&Ot(s)&&!Ot(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:at(e,t),l=Reflect.set(e,t,i,Ot(e)?e:r);return e===ot(r)&&(a?Ai(i,s)&&Qn(e,"set",t,i):Qn(e,"add",t,i)),l}deleteProperty(e,t){const i=at(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Qn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Pi(t)||!Gd.has(t))&&Ut(e,"has",t),i}ownKeys(e){return Ut(e,"iterate",Ye(e)?"length":Ki),Reflect.ownKeys(e)}}class ym extends kd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Tm=new Wd,Am=new ym,wm=new Wd(!0);const al=n=>n,Fs=n=>Reflect.getPrototypeOf(n);function Rm(n,e,t){return function(...i){const r=this.__v_raw,s=ot(r),o=Sr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?al:e?gs:ci;return!e&&Ut(s,"iterate",l?ol:Ki),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Os(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Cm(n,e){const t={get(r){const s=this.__v_raw,o=ot(s),a=ot(r);n||(Ai(r,a)&&Ut(o,"get",r),Ut(o,"get",a));const{has:l}=Fs(o),c=e?al:n?gs:ci;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ut(ot(r),"iterate",Ki),r.size},has(r){const s=this.__v_raw,o=ot(s),a=ot(r);return n||(Ai(r,a)&&Ut(o,"has",r),Ut(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ot(a),c=e?al:n?gs:ci;return!n&&Ut(l,"iterate",Ki),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Bt(t,n?{add:Os("add"),set:Os("set"),delete:Os("delete"),clear:Os("clear")}:{add(r){!e&&!Mn(r)&&!Ri(r)&&(r=ot(r));const s=ot(this);return Fs(s).has.call(s,r)||(s.add(r),Qn(s,"add",r,r)),this},set(r,s){!e&&!Mn(s)&&!Ri(s)&&(s=ot(s));const o=ot(this),{has:a,get:l}=Fs(o);let c=a.call(o,r);c||(r=ot(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ai(s,u)&&Qn(o,"set",r,s):Qn(o,"add",r,s),this},delete(r){const s=ot(this),{has:o,get:a}=Fs(s);let l=o.call(s,r);l||(r=ot(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Qn(s,"delete",r,void 0),c},clear(){const r=ot(this),s=r.size!==0,o=r.clear();return s&&Qn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Rm(r,n,e)}),t}function Cc(n,e){const t=Cm(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(at(t,r)&&r in i?t:i,r,s)}const Pm={get:Cc(!1,!1)},Dm={get:Cc(!1,!0)},Lm={get:Cc(!0,!1)};const Xd=new WeakMap,qd=new WeakMap,Yd=new WeakMap,Im=new WeakMap;function Um(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nm(n){return n.__v_skip||!Object.isExtensible(n)?0:Um(om(n))}function Go(n){return Ri(n)?n:Pc(n,!1,Tm,Pm,Xd)}function jd(n){return Pc(n,!1,wm,Dm,qd)}function ll(n){return Pc(n,!0,Am,Lm,Yd)}function Pc(n,e,t,i,r){if(!_t(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Nm(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Mr(n){return Ri(n)?Mr(n.__v_raw):!!(n&&n.__v_isReactive)}function Ri(n){return!!(n&&n.__v_isReadonly)}function Mn(n){return!!(n&&n.__v_isShallow)}function Dc(n){return n?!!n.__v_raw:!1}function ot(n){const e=n&&n.__v_raw;return e?ot(e):n}function $d(n){return!at(n,"__v_skip")&&Object.isExtensible(n)&&Cd(n,"__v_skip",!0),n}const ci=n=>_t(n)?Go(n):n,gs=n=>_t(n)?ll(n):n;function Ot(n){return n?n.__v_isRef===!0:!1}function Jn(n){return Kd(n,!1)}function Fm(n){return Kd(n,!0)}function Kd(n,e){return Ot(n)?n:new Om(n,e)}class Om{constructor(e,t){this.dep=new wc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ot(e),this._value=t?e:ci(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Mn(e)||Ri(e);e=i?e:ot(e),Ai(e,t)&&(this._rawValue=e,this._value=i?e:ci(e),this.dep.trigger())}}function Er(n){return Ot(n)?n.value:n}const Bm={get:(n,e,t)=>e==="__v_raw"?n:Er(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ot(r)&&!Ot(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Zd(n){return Mr(n)?n:new Proxy(n,Bm)}class Vm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new wc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ps-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return Fd(this,!0),!0}get value(){const e=this.dep.track();return Vd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function zm(n,e,t=!1){let i,r;return qe(n)?i=n:(i=n.get,r=n.set),new Vm(i,r,t)}const Bs={},yo=new WeakMap;let Hi;function Hm(n,e=!1,t=Hi){if(t){let i=yo.get(t);i||yo.set(t,i=[]),i.push(n)}}function Gm(n,e,t=ht){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=y=>r?y:Mn(y)||r===!1||r===0?ei(y,1):ei(y);let u,f,d,p,g=!1,x=!1;if(Ot(n)?(f=()=>n.value,g=Mn(n)):Mr(n)?(f=()=>c(n),g=!0):Ye(n)?(x=!0,g=n.some(y=>Mr(y)||Mn(y)),f=()=>n.map(y=>{if(Ot(y))return y.value;if(Mr(y))return c(y);if(qe(y))return l?l(y,2):y()})):qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){ai();try{d()}finally{li()}}const y=Hi;Hi=u;try{return l?l(n,3,[p]):n(p)}finally{Hi=y}}:f=Nn,e&&r){const y=f,R=r===!0?1/0:r;f=()=>ei(y(),R)}const m=_m(),h=()=>{u.stop(),m&&m.active&&Mc(m.effects,u)};if(s&&e){const y=e;e=(...R)=>{y(...R),h()}}let v=x?new Array(n.length).fill(Bs):Bs;const b=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const R=u.run();if(r||g||(x?R.some((D,P)=>Ai(D,v[P])):Ai(R,v))){d&&d();const D=Hi;Hi=u;try{const P=[R,v===Bs?void 0:x&&v[0]===Bs?[]:v,p];v=R,l?l(e,3,P):e(...P)}finally{Hi=D}}}else u.run()};return a&&a(b),u=new Ud(f),u.scheduler=o?()=>o(b,!1):b,p=y=>Hm(y,!1,u),d=u.onStop=()=>{const y=yo.get(u);if(y){if(l)l(y,4);else for(const R of y)R();yo.delete(u)}},e?i?b(!0):v=u.run():o?o(b.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ei(n,e=1/0,t){if(e<=0||!_t(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ot(n))ei(n.value,e,t);else if(Ye(n))for(let i=0;i<n.length;i++)ei(n[i],e,t);else if(yd(n)||Sr(n))n.forEach(i=>{ei(i,e,t)});else if(wd(n)){for(const i in n)ei(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ei(n[i],e,t)}return n}function Ts(n,e,t,i){try{return i?n(...i):n()}catch(r){ko(r,e,t)}}function Bn(n,e,t,i){if(qe(n)){const r=Ts(n,e,t,i);return r&&Td(r)&&r.catch(s=>{ko(s,e,t)}),r}if(Ye(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Bn(n[s],e,t,i));return r}}function ko(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ht;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){ai(),Ts(s,null,10,[n,l,c]),li();return}}km(n,t,r,i,o)}function km(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const kt=[];let Cn=-1;const br=[];let Mi=null,_r=0;const Jd=Promise.resolve();let To=null;function Qd(n){const e=To||Jd;return n?e.then(this?n.bind(this):n):e}function Wm(n){let e=Cn+1,t=kt.length;for(;e<t;){const i=e+t>>>1,r=kt[i],s=_s(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Lc(n){if(!(n.flags&1)){const e=_s(n),t=kt[kt.length-1];!t||!(n.flags&2)&&e>=_s(t)?kt.push(n):kt.splice(Wm(e),0,n),n.flags|=1,eh()}}function eh(){To||(To=Jd.then(nh))}function Xm(n){Ye(n)?br.push(...n):Mi&&n.id===-1?Mi.splice(_r+1,0,n):n.flags&1||(br.push(n),n.flags|=1),eh()}function xu(n,e,t=Cn+1){for(;t<kt.length;t++){const i=kt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;kt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function th(n){if(br.length){const e=[...new Set(br)].sort((t,i)=>_s(t)-_s(i));if(br.length=0,Mi){Mi.push(...e);return}for(Mi=e,_r=0;_r<Mi.length;_r++){const t=Mi[_r];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Mi=null,_r=0}}const _s=n=>n.id==null?n.flags&2?-1:1/0:n.id;function nh(n){try{for(Cn=0;Cn<kt.length;Cn++){const e=kt[Cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ts(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Cn<kt.length;Cn++){const e=kt[Cn];e&&(e.flags&=-2)}Cn=-1,kt.length=0,th(),To=null,(kt.length||br.length)&&nh()}}let fn=null,ih=null;function Ao(n){const e=fn;return fn=n,ih=n&&n.type.__scopeId||null,e}function qm(n,e=fn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Co(-1);const s=Ao(e);let o;try{o=n(...r)}finally{Ao(s),i._d&&Co(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function vu(n,e){if(fn===null)return n;const t=Yo(fn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ht]=e[r];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&ei(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ii(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ai(),Bn(l,t,8,[n.el,a,n,e]),li())}}function co(n,e){if(Wt){let t=Wt.provides;const i=Wt.parent&&Wt.parent.provides;i===t&&(t=Wt.provides=Object.create(i)),t[n]=e}}function ii(n,e,t=!1){const i=Xg();if(i||yr){let r=yr?yr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const Ym=Symbol.for("v-scx"),jm=()=>ii(Ym);function ls(n,e,t){return rh(n,e,t)}function rh(n,e,t=ht){const{immediate:i,deep:r,flush:s,once:o}=t,a=Bt({},t),l=e&&i||!e&&s!=="post";let c;if(vs){if(s==="sync"){const p=jm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Nn,p.resume=Nn,p.pause=Nn,p}}const u=Wt;a.call=(p,g,x)=>Bn(p,u,g,x);let f=!1;s==="post"?a.scheduler=p=>{rn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():Lc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Gm(n,e,a);return vs&&(c?c.push(d):l&&d()),d}function $m(n,e,t){const i=this.proxy,r=At(n)?n.includes(".")?sh(i,n):()=>i[n]:n.bind(i,i);let s;qe(e)?s=e:(s=e.handler,t=e);const o=As(this),a=rh(r,s.bind(i),t);return o(),a}function sh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Km=Symbol("_vte"),Zm=n=>n.__isTeleport,Jm=Symbol("_leaveCb");function Ic(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ic(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function oh(n,e){return qe(n)?Bt({name:n.name},e,{setup:n}):n}function ah(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const wo=new WeakMap;function cs(n,e,t,i,r=!1){if(Ye(n)){n.forEach((g,x)=>cs(g,e&&(Ye(e)?e[x]:e),t,i,r));return}if(us(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&cs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Yo(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ht?a.refs={}:a.refs,f=a.setupState,d=ot(f),p=f===ht?bd:g=>at(d,g);if(c!=null&&c!==l){if(Su(e),At(c))u[c]=null,p(c)&&(f[c]=null);else if(Ot(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(qe(l))Ts(l,a,12,[o,u]);else{const g=At(l),x=Ot(l);if(g||x){const m=()=>{if(n.f){const h=g?p(l)?f[l]:u[l]:l.value;if(r)Ye(h)&&Mc(h,s);else if(Ye(h))h.includes(s)||h.push(s);else if(g)u[l]=[s],p(l)&&(f[l]=u[l]);else{const v=[s];l.value=v,n.k&&(u[n.k]=v)}}else g?(u[l]=o,p(l)&&(f[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const h=()=>{m(),wo.delete(n)};h.id=-1,wo.set(n,h),rn(h,t)}else Su(n),m()}}}function Su(n){const e=wo.get(n);e&&(e.flags|=8,wo.delete(n))}zo().requestIdleCallback;zo().cancelIdleCallback;const us=n=>!!n.type.__asyncLoader,lh=n=>n.type.__isKeepAlive;function Qm(n,e){ch(n,"a",e)}function eg(n,e){ch(n,"da",e)}function ch(n,e,t=Wt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Wo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)lh(r.parent.vnode)&&tg(i,e,t,r),r=r.parent}}function tg(n,e,t,i){const r=Wo(e,n,i,!0);Nc(()=>{Mc(i[e],r)},t)}function Wo(n,e,t=Wt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ai();const a=As(t),l=Bn(e,t,n,o);return a(),li(),l});return i?r.unshift(s):r.push(s),s}}const di=n=>(e,t=Wt)=>{(!vs||n==="sp")&&Wo(n,(...i)=>e(...i),t)},ng=di("bm"),Uc=di("m"),ig=di("bu"),rg=di("u"),sg=di("bum"),Nc=di("um"),og=di("sp"),ag=di("rtg"),lg=di("rtc");function cg(n,e=Wt){Wo("ec",n,e)}const ug=Symbol.for("v-ndc"),cl=n=>n?wh(n)?Yo(n):cl(n.parent):null,fs=Bt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>cl(n.parent),$root:n=>cl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>fh(n),$forceUpdate:n=>n.f||(n.f=()=>{Lc(n.update)}),$nextTick:n=>n.n||(n.n=Qd.bind(n.proxy)),$watch:n=>$m.bind(n)}),pa=(n,e)=>n!==ht&&!n.__isScriptSetup&&at(n,e),fg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(pa(i,e))return o[e]=1,i[e];if(r!==ht&&at(r,e))return o[e]=2,r[e];if(at(s,e))return o[e]=3,s[e];if(t!==ht&&at(t,e))return o[e]=4,t[e];ul&&(o[e]=0)}}const c=fs[e];let u,f;if(c)return e==="$attrs"&&Ut(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ht&&at(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,at(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return pa(r,e)?(r[e]=t,!0):i!==ht&&at(i,e)?(i[e]=t,!0):at(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==ht&&a[0]!=="$"&&at(n,a)||pa(e,a)||at(s,a)||at(i,a)||at(fs,a)||at(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:at(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Mu(n){return Ye(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ul=!0;function dg(n){const e=fh(n),t=n.proxy,i=n.ctx;ul=!1,e.beforeCreate&&Eu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:x,deactivated:m,beforeDestroy:h,beforeUnmount:v,destroyed:b,unmounted:y,render:R,renderTracked:D,renderTriggered:P,errorCaptured:V,serverPrefetch:M,expose:T,inheritAttrs:U,components:q,directives:z,filters:ee}=e;if(c&&hg(c,i,null),o)for(const B in o){const Z=o[B];qe(Z)&&(i[B]=Z.bind(t))}if(r){const B=r.call(t,t);_t(B)&&(n.data=Go(B))}if(ul=!0,s)for(const B in s){const Z=s[B],xe=qe(Z)?Z.bind(t,t):qe(Z.get)?Z.get.bind(t,t):Nn,ge=!qe(Z)&&qe(Z.set)?Z.set.bind(t):Nn,me=_n({get:xe,set:ge});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>me.value,set:Ue=>me.value=Ue})}if(a)for(const B in a)uh(a[B],i,t,B);if(l){const B=qe(l)?l.call(t):l;Reflect.ownKeys(B).forEach(Z=>{co(Z,B[Z])})}u&&Eu(u,n,"c");function W(B,Z){Ye(Z)?Z.forEach(xe=>B(xe.bind(t))):Z&&B(Z.bind(t))}if(W(ng,f),W(Uc,d),W(ig,p),W(rg,g),W(Qm,x),W(eg,m),W(cg,V),W(lg,D),W(ag,P),W(sg,v),W(Nc,y),W(og,M),Ye(T))if(T.length){const B=n.exposed||(n.exposed={});T.forEach(Z=>{Object.defineProperty(B,Z,{get:()=>t[Z],set:xe=>t[Z]=xe,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Nn&&(n.render=R),U!=null&&(n.inheritAttrs=U),q&&(n.components=q),z&&(n.directives=z),M&&ah(n)}function hg(n,e,t=Nn){Ye(n)&&(n=fl(n));for(const i in n){const r=n[i];let s;_t(r)?"default"in r?s=ii(r.from||i,r.default,!0):s=ii(r.from||i):s=ii(r),Ot(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Eu(n,e,t){Bn(Ye(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function uh(n,e,t,i){let r=i.includes(".")?sh(t,i):()=>t[i];if(At(n)){const s=e[n];qe(s)&&ls(r,s)}else if(qe(n))ls(r,n.bind(t));else if(_t(n))if(Ye(n))n.forEach(s=>uh(s,e,t,i));else{const s=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(s)&&ls(r,s,n)}}function fh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ro(l,c,o,!0)),Ro(l,e,o)),_t(e)&&s.set(e,l),l}function Ro(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ro(n,s,t,!0),r&&r.forEach(o=>Ro(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=pg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const pg={data:bu,props:yu,emits:yu,methods:ns,computed:ns,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:ns,directives:ns,watch:gg,provide:bu,inject:mg};function bu(n,e){return e?n?function(){return Bt(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function mg(n,e){return ns(fl(n),fl(e))}function fl(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function zt(n,e){return n?[...new Set([].concat(n,e))]:e}function ns(n,e){return n?Bt(Object.create(null),n,e):e}function yu(n,e){return n?Ye(n)&&Ye(e)?[...new Set([...n,...e])]:Bt(Object.create(null),Mu(n),Mu(e??{})):e}function gg(n,e){if(!n)return e;if(!e)return n;const t=Bt(Object.create(null),n);for(const i in e)t[i]=zt(n[i],e[i]);return t}function dh(){return{app:null,config:{isNativeTag:bd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _g=0;function xg(n,e){return function(i,r=null){qe(i)||(i=Bt({},i)),r!=null&&!_t(r)&&(r=null);const s=dh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:_g++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Zg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||dn(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Yo(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Bn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=yr;yr=c;try{return u()}finally{yr=f}}};return c}}let yr=null;const vg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${wi(e)}Modifiers`]||n[`${er(e)}Modifiers`];function Sg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ht;let r=t;const s=e.startsWith("update:"),o=s&&vg(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>At(u)?u.trim():u)),o.number&&(r=t.map(cm)));let a,l=i[a=la(e)]||i[a=la(wi(e))];!l&&s&&(l=i[a=la(er(e))]),l&&Bn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Bn(c,n,6,r)}}const Mg=new WeakMap;function hh(n,e,t=!1){const i=t?Mg:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=hh(c,e,!0);u&&(a=!0,Bt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(_t(n)&&i.set(n,null),null):(Ye(s)?s.forEach(l=>o[l]=null):Bt(o,s),_t(n)&&i.set(n,o),o)}function Xo(n,e){return!n||!Oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(n,e[0].toLowerCase()+e.slice(1))||at(n,er(e))||at(n,e))}function Tu(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:x}=n,m=Ao(n);let h,v;try{if(t.shapeFlag&4){const y=r||i,R=y;h=Dn(c.call(R,y,u,f,p,d,g)),v=a}else{const y=e;h=Dn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),v=e.props?a:Eg(a)}}catch(y){ds.length=0,ko(y,n,1),h=dn(wr)}let b=h;if(v&&x!==!1){const y=Object.keys(v),{shapeFlag:R}=b;y.length&&R&7&&(s&&y.some(Sc)&&(v=bg(v,s)),b=Rr(b,v,!1,!0))}return t.dirs&&(b=Rr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Ic(b,t.transition),h=b,Ao(m),h}const Eg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Oo(t))&&((e||(e={}))[t]=n[t]);return e},bg=(n,e)=>{const t={};for(const i in n)(!Sc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function yg(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Au(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Xo(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Au(i,o,c):!0:!!o;return!1}function Au(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Xo(t,s))return!0}return!1}function Tg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const ph={},mh=()=>Object.create(ph),gh=n=>Object.getPrototypeOf(n)===ph;function Ag(n,e,t,i=!1){const r={},s=mh();n.propsDefaults=Object.create(null),_h(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:jd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function wg(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=ot(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Xo(n.emitsOptions,d))continue;const p=e[d];if(l)if(at(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const g=wi(d);r[g]=dl(l,a,g,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{_h(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!at(e,f)&&((u=er(f))===f||!at(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=dl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!at(e,f))&&(delete s[f],c=!0)}c&&Qn(n.attrs,"set","")}function _h(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ss(l))continue;const c=e[l];let u;r&&at(r,u=wi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Xo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ot(t),c=a||ht;for(let u=0;u<s.length;u++){const f=s[u];t[f]=dl(r,l,f,c[f],n,!at(c,f))}}return o}function dl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=As(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===er(t))&&(i=!0))}return i}const Rg=new WeakMap;function xh(n,e,t=!1){const i=t?Rg:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=f=>{l=!0;const[d,p]=xh(f,e,!0);Bt(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return _t(n)&&i.set(n,vr),vr;if(Ye(s))for(let u=0;u<s.length;u++){const f=wi(s[u]);wu(f)&&(o[f]=ht)}else if(s)for(const u in s){const f=wi(u);if(wu(f)){const d=s[u],p=o[f]=Ye(d)||qe(d)?{type:d}:Bt({},d),g=p.type;let x=!1,m=!0;if(Ye(g))for(let h=0;h<g.length;++h){const v=g[h],b=qe(v)&&v.name;if(b==="Boolean"){x=!0;break}else b==="String"&&(m=!1)}else x=qe(g)&&g.name==="Boolean";p[0]=x,p[1]=m,(x||at(p,"default"))&&a.push(f)}}const c=[o,a];return _t(n)&&i.set(n,c),c}function wu(n){return n[0]!=="$"&&!ss(n)}const Fc=n=>n==="_"||n==="_ctx"||n==="$stable",Oc=n=>Ye(n)?n.map(Dn):[Dn(n)],Cg=(n,e,t)=>{if(e._n)return e;const i=qm((...r)=>Oc(e(...r)),t);return i._c=!1,i},vh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Fc(r))continue;const s=n[r];if(qe(s))e[r]=Cg(r,s,i);else if(s!=null){const o=Oc(s);e[r]=()=>o}}},Sh=(n,e)=>{const t=Oc(e);n.slots.default=()=>t},Mh=(n,e,t)=>{for(const i in e)(t||!Fc(i))&&(n[i]=e[i])},Pg=(n,e,t)=>{const i=n.slots=mh();if(n.vnode.shapeFlag&32){const r=e._;r?(Mh(i,e,t),t&&Cd(i,"_",r,!0)):vh(e,i)}else e&&Sh(n,e)},Dg=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ht;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Mh(r,e,t):(s=!e.$stable,vh(e,r)),o=e}else e&&(Sh(n,e),o={default:1});if(s)for(const a in r)!Fc(a)&&o[a]==null&&delete r[a]},rn=Fg;function Lg(n){return Ig(n)}function Ig(n,e){const t=zo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Nn,insertStaticContent:g}=n,x=(w,C,N,$=null,Y=null,Q=null,A=void 0,fe=null,le=!!C.dynamicChildren)=>{if(w===C)return;w&&!Xr(w,C)&&($=I(w),Ue(w,Y,Q,!0),w=null),C.patchFlag===-2&&(le=!1,C.dynamicChildren=null);const{type:se,ref:ce,shapeFlag:S}=C;switch(se){case qo:m(w,C,N,$);break;case wr:h(w,C,N,$);break;case uo:w==null&&v(C,N,$,A);break;case Pn:q(w,C,N,$,Y,Q,A,fe,le);break;default:S&1?R(w,C,N,$,Y,Q,A,fe,le):S&6?z(w,C,N,$,Y,Q,A,fe,le):(S&64||S&128)&&se.process(w,C,N,$,Y,Q,A,fe,le,oe)}ce!=null&&Y?cs(ce,w&&w.ref,Q,C||w,!C):ce==null&&w&&w.ref!=null&&cs(w.ref,null,Q,w,!0)},m=(w,C,N,$)=>{if(w==null)i(C.el=a(C.children),N,$);else{const Y=C.el=w.el;C.children!==w.children&&c(Y,C.children)}},h=(w,C,N,$)=>{w==null?i(C.el=l(C.children||""),N,$):C.el=w.el},v=(w,C,N,$)=>{[w.el,w.anchor]=g(w.children,C,N,$,w.el,w.anchor)},b=({el:w,anchor:C},N,$)=>{let Y;for(;w&&w!==C;)Y=d(w),i(w,N,$),w=Y;i(C,N,$)},y=({el:w,anchor:C})=>{let N;for(;w&&w!==C;)N=d(w),r(w),w=N;r(C)},R=(w,C,N,$,Y,Q,A,fe,le)=>{if(C.type==="svg"?A="svg":C.type==="math"&&(A="mathml"),w==null)D(C,N,$,Y,Q,A,fe,le);else{const se=w.el&&w.el._isVueCE?w.el:null;try{se&&se._beginPatch(),M(w,C,Y,Q,A,fe,le)}finally{se&&se._endPatch()}}},D=(w,C,N,$,Y,Q,A,fe)=>{let le,se;const{props:ce,shapeFlag:S,transition:_,dirs:L}=w;if(le=w.el=o(w.type,Q,ce&&ce.is,ce),S&8?u(le,w.children):S&16&&V(w.children,le,null,$,Y,ma(w,Q),A,fe),L&&Ii(w,null,$,"created"),P(le,w,w.scopeId,A,$),ce){for(const te in ce)te!=="value"&&!ss(te)&&s(le,te,null,ce[te],Q,$);"value"in ce&&s(le,"value",null,ce.value,Q),(se=ce.onVnodeBeforeMount)&&An(se,$,w)}L&&Ii(w,null,$,"beforeMount");const k=Ug(Y,_);k&&_.beforeEnter(le),i(le,C,N),((se=ce&&ce.onVnodeMounted)||k||L)&&rn(()=>{se&&An(se,$,w),k&&_.enter(le),L&&Ii(w,null,$,"mounted")},Y)},P=(w,C,N,$,Y)=>{if(N&&p(w,N),$)for(let Q=0;Q<$.length;Q++)p(w,$[Q]);if(Y){let Q=Y.subTree;if(C===Q||Th(Q.type)&&(Q.ssContent===C||Q.ssFallback===C)){const A=Y.vnode;P(w,A,A.scopeId,A.slotScopeIds,Y.parent)}}},V=(w,C,N,$,Y,Q,A,fe,le=0)=>{for(let se=le;se<w.length;se++){const ce=w[se]=fe?Ei(w[se]):Dn(w[se]);x(null,ce,C,N,$,Y,Q,A,fe)}},M=(w,C,N,$,Y,Q,A)=>{const fe=C.el=w.el;let{patchFlag:le,dynamicChildren:se,dirs:ce}=C;le|=w.patchFlag&16;const S=w.props||ht,_=C.props||ht;let L;if(N&&Ui(N,!1),(L=_.onVnodeBeforeUpdate)&&An(L,N,C,w),ce&&Ii(C,w,N,"beforeUpdate"),N&&Ui(N,!0),(S.innerHTML&&_.innerHTML==null||S.textContent&&_.textContent==null)&&u(fe,""),se?T(w.dynamicChildren,se,fe,N,$,ma(C,Y),Q):A||Z(w,C,fe,null,N,$,ma(C,Y),Q,!1),le>0){if(le&16)U(fe,S,_,N,Y);else if(le&2&&S.class!==_.class&&s(fe,"class",null,_.class,Y),le&4&&s(fe,"style",S.style,_.style,Y),le&8){const k=C.dynamicProps;for(let te=0;te<k.length;te++){const G=k[te],Te=S[G],he=_[G];(he!==Te||G==="value")&&s(fe,G,Te,he,Y,N)}}le&1&&w.children!==C.children&&u(fe,C.children)}else!A&&se==null&&U(fe,S,_,N,Y);((L=_.onVnodeUpdated)||ce)&&rn(()=>{L&&An(L,N,C,w),ce&&Ii(C,w,N,"updated")},$)},T=(w,C,N,$,Y,Q,A)=>{for(let fe=0;fe<C.length;fe++){const le=w[fe],se=C[fe],ce=le.el&&(le.type===Pn||!Xr(le,se)||le.shapeFlag&198)?f(le.el):N;x(le,se,ce,null,$,Y,Q,A,!0)}},U=(w,C,N,$,Y)=>{if(C!==N){if(C!==ht)for(const Q in C)!ss(Q)&&!(Q in N)&&s(w,Q,C[Q],null,Y,$);for(const Q in N){if(ss(Q))continue;const A=N[Q],fe=C[Q];A!==fe&&Q!=="value"&&s(w,Q,fe,A,Y,$)}"value"in N&&s(w,"value",C.value,N.value,Y)}},q=(w,C,N,$,Y,Q,A,fe,le)=>{const se=C.el=w?w.el:a(""),ce=C.anchor=w?w.anchor:a("");let{patchFlag:S,dynamicChildren:_,slotScopeIds:L}=C;L&&(fe=fe?fe.concat(L):L),w==null?(i(se,N,$),i(ce,N,$),V(C.children||[],N,ce,Y,Q,A,fe,le)):S>0&&S&64&&_&&w.dynamicChildren&&w.dynamicChildren.length===_.length?(T(w.dynamicChildren,_,N,Y,Q,A,fe),(C.key!=null||Y&&C===Y.subTree)&&Eh(w,C,!0)):Z(w,C,N,ce,Y,Q,A,fe,le)},z=(w,C,N,$,Y,Q,A,fe,le)=>{C.slotScopeIds=fe,w==null?C.shapeFlag&512?Y.ctx.activate(C,N,$,A,le):ee(C,N,$,Y,Q,A,le):ne(w,C,le)},ee=(w,C,N,$,Y,Q,A)=>{const fe=w.component=Wg(w,$,Y);if(lh(w)&&(fe.ctx.renderer=oe),qg(fe,!1,A),fe.asyncDep){if(Y&&Y.registerDep(fe,W,A),!w.el){const le=fe.subTree=dn(wr);h(null,le,C,N),w.placeholder=le.el}}else W(fe,w,C,N,Y,Q,A)},ne=(w,C,N)=>{const $=C.component=w.component;if(yg(w,C,N))if($.asyncDep&&!$.asyncResolved){B($,C,N);return}else $.next=C,$.update();else C.el=w.el,$.vnode=C},W=(w,C,N,$,Y,Q,A)=>{const fe=()=>{if(w.isMounted){let{next:S,bu:_,u:L,parent:k,vnode:te}=w;{const Fe=bh(w);if(Fe){S&&(S.el=te.el,B(w,S,A)),Fe.asyncDep.then(()=>{w.isUnmounted||fe()});return}}let G=S,Te;Ui(w,!1),S?(S.el=te.el,B(w,S,A)):S=te,_&&ca(_),(Te=S.props&&S.props.onVnodeBeforeUpdate)&&An(Te,k,S,te),Ui(w,!0);const he=Tu(w),Re=w.subTree;w.subTree=he,x(Re,he,f(Re.el),I(Re),w,Y,Q),S.el=he.el,G===null&&Tg(w,he.el),L&&rn(L,Y),(Te=S.props&&S.props.onVnodeUpdated)&&rn(()=>An(Te,k,S,te),Y)}else{let S;const{el:_,props:L}=C,{bm:k,m:te,parent:G,root:Te,type:he}=w,Re=us(C);Ui(w,!1),k&&ca(k),!Re&&(S=L&&L.onVnodeBeforeMount)&&An(S,G,C),Ui(w,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(he);const Fe=w.subTree=Tu(w);x(null,Fe,N,$,w,Y,Q),C.el=Fe.el}if(te&&rn(te,Y),!Re&&(S=L&&L.onVnodeMounted)){const Fe=C;rn(()=>An(S,G,Fe),Y)}(C.shapeFlag&256||G&&us(G.vnode)&&G.vnode.shapeFlag&256)&&w.a&&rn(w.a,Y),w.isMounted=!0,C=N=$=null}};w.scope.on();const le=w.effect=new Ud(fe);w.scope.off();const se=w.update=le.run.bind(le),ce=w.job=le.runIfDirty.bind(le);ce.i=w,ce.id=w.uid,le.scheduler=()=>Lc(ce),Ui(w,!0),se()},B=(w,C,N)=>{C.component=w;const $=w.vnode.props;w.vnode=C,w.next=null,wg(w,C.props,$,N),Dg(w,C.children,N),ai(),xu(w),li()},Z=(w,C,N,$,Y,Q,A,fe,le=!1)=>{const se=w&&w.children,ce=w?w.shapeFlag:0,S=C.children,{patchFlag:_,shapeFlag:L}=C;if(_>0){if(_&128){ge(se,S,N,$,Y,Q,A,fe,le);return}else if(_&256){xe(se,S,N,$,Y,Q,A,fe,le);return}}L&8?(ce&16&&re(se,Y,Q),S!==se&&u(N,S)):ce&16?L&16?ge(se,S,N,$,Y,Q,A,fe,le):re(se,Y,Q,!0):(ce&8&&u(N,""),L&16&&V(S,N,$,Y,Q,A,fe,le))},xe=(w,C,N,$,Y,Q,A,fe,le)=>{w=w||vr,C=C||vr;const se=w.length,ce=C.length,S=Math.min(se,ce);let _;for(_=0;_<S;_++){const L=C[_]=le?Ei(C[_]):Dn(C[_]);x(w[_],L,N,null,Y,Q,A,fe,le)}se>ce?re(w,Y,Q,!0,!1,S):V(C,N,$,Y,Q,A,fe,le,S)},ge=(w,C,N,$,Y,Q,A,fe,le)=>{let se=0;const ce=C.length;let S=w.length-1,_=ce-1;for(;se<=S&&se<=_;){const L=w[se],k=C[se]=le?Ei(C[se]):Dn(C[se]);if(Xr(L,k))x(L,k,N,null,Y,Q,A,fe,le);else break;se++}for(;se<=S&&se<=_;){const L=w[S],k=C[_]=le?Ei(C[_]):Dn(C[_]);if(Xr(L,k))x(L,k,N,null,Y,Q,A,fe,le);else break;S--,_--}if(se>S){if(se<=_){const L=_+1,k=L<ce?C[L].el:$;for(;se<=_;)x(null,C[se]=le?Ei(C[se]):Dn(C[se]),N,k,Y,Q,A,fe,le),se++}}else if(se>_)for(;se<=S;)Ue(w[se],Y,Q,!0),se++;else{const L=se,k=se,te=new Map;for(se=k;se<=_;se++){const Ee=C[se]=le?Ei(C[se]):Dn(C[se]);Ee.key!=null&&te.set(Ee.key,se)}let G,Te=0;const he=_-k+1;let Re=!1,Fe=0;const de=new Array(he);for(se=0;se<he;se++)de[se]=0;for(se=L;se<=S;se++){const Ee=w[se];if(Te>=he){Ue(Ee,Y,Q,!0);continue}let Ce;if(Ee.key!=null)Ce=te.get(Ee.key);else for(G=k;G<=_;G++)if(de[G-k]===0&&Xr(Ee,C[G])){Ce=G;break}Ce===void 0?Ue(Ee,Y,Q,!0):(de[Ce-k]=se+1,Ce>=Fe?Fe=Ce:Re=!0,x(Ee,C[Ce],N,null,Y,Q,A,fe,le),Te++)}const Se=Re?Ng(de):vr;for(G=Se.length-1,se=he-1;se>=0;se--){const Ee=k+se,Ce=C[Ee],ve=C[Ee+1],We=Ee+1<ce?ve.el||yh(ve):$;de[se]===0?x(null,Ce,N,We,Y,Q,A,fe,le):Re&&(G<0||se!==Se[G]?me(Ce,N,We,2):G--)}}},me=(w,C,N,$,Y=null)=>{const{el:Q,type:A,transition:fe,children:le,shapeFlag:se}=w;if(se&6){me(w.component.subTree,C,N,$);return}if(se&128){w.suspense.move(C,N,$);return}if(se&64){A.move(w,C,N,oe);return}if(A===Pn){i(Q,C,N);for(let S=0;S<le.length;S++)me(le[S],C,N,$);i(w.anchor,C,N);return}if(A===uo){b(w,C,N);return}if($!==2&&se&1&&fe)if($===0)fe.beforeEnter(Q),i(Q,C,N),rn(()=>fe.enter(Q),Y);else{const{leave:S,delayLeave:_,afterLeave:L}=fe,k=()=>{w.ctx.isUnmounted?r(Q):i(Q,C,N)},te=()=>{Q._isLeaving&&Q[Jm](!0),S(Q,()=>{k(),L&&L()})};_?_(Q,k,te):te()}else i(Q,C,N)},Ue=(w,C,N,$=!1,Y=!1)=>{const{type:Q,props:A,ref:fe,children:le,dynamicChildren:se,shapeFlag:ce,patchFlag:S,dirs:_,cacheIndex:L}=w;if(S===-2&&(Y=!1),fe!=null&&(ai(),cs(fe,null,N,w,!0),li()),L!=null&&(C.renderCache[L]=void 0),ce&256){C.ctx.deactivate(w);return}const k=ce&1&&_,te=!us(w);let G;if(te&&(G=A&&A.onVnodeBeforeUnmount)&&An(G,C,w),ce&6)Ze(w.component,N,$);else{if(ce&128){w.suspense.unmount(N,$);return}k&&Ii(w,null,C,"beforeUnmount"),ce&64?w.type.remove(w,C,N,oe,$):se&&!se.hasOnce&&(Q!==Pn||S>0&&S&64)?re(se,C,N,!1,!0):(Q===Pn&&S&384||!Y&&ce&16)&&re(le,C,N),$&&ze(w)}(te&&(G=A&&A.onVnodeUnmounted)||k)&&rn(()=>{G&&An(G,C,w),k&&Ii(w,null,C,"unmounted")},N)},ze=w=>{const{type:C,el:N,anchor:$,transition:Y}=w;if(C===Pn){Je(N,$);return}if(C===uo){y(w);return}const Q=()=>{r(N),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(w.shapeFlag&1&&Y&&!Y.persisted){const{leave:A,delayLeave:fe}=Y,le=()=>A(N,Q);fe?fe(w.el,Q,le):le()}else Q()},Je=(w,C)=>{let N;for(;w!==C;)N=d(w),r(w),w=N;r(C)},Ze=(w,C,N)=>{const{bum:$,scope:Y,job:Q,subTree:A,um:fe,m:le,a:se}=w;Ru(le),Ru(se),$&&ca($),Y.stop(),Q&&(Q.flags|=8,Ue(A,w,C,N)),fe&&rn(fe,C),rn(()=>{w.isUnmounted=!0},C)},re=(w,C,N,$=!1,Y=!1,Q=0)=>{for(let A=Q;A<w.length;A++)Ue(w[A],C,N,$,Y)},I=w=>{if(w.shapeFlag&6)return I(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=d(w.anchor||w.el),N=C&&C[Km];return N?d(N):C};let ie=!1;const ae=(w,C,N)=>{let $;w==null?C._vnode&&(Ue(C._vnode,null,null,!0),$=C._vnode.component):x(C._vnode||null,w,C,null,null,null,N),C._vnode=w,ie||(ie=!0,xu($),th(),ie=!1)},oe={p:x,um:Ue,m:me,r:ze,mt:ee,mc:V,pc:Z,pbc:T,n:I,o:n};return{render:ae,hydrate:void 0,createApp:xg(ae)}}function ma({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ui({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ug(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Eh(n,e,t=!1){const i=n.children,r=e.children;if(Ye(i)&&Ye(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ei(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Eh(o,a)),a.type===qo&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(n.type===Pn?1:0)),a.type===wr&&!a.el&&(a.el=o.el)}}function Ng(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function bh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bh(e)}function Ru(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function yh(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?yh(e.subTree):null}const Th=n=>n.__isSuspense;function Fg(n,e){e&&e.pendingBranch?Ye(n)?e.effects.push(...n):e.effects.push(n):Xm(n)}const Pn=Symbol.for("v-fgt"),qo=Symbol.for("v-txt"),wr=Symbol.for("v-cmt"),uo=Symbol.for("v-stc"),ds=[];let an=null;function Bc(n=!1){ds.push(an=n?null:[])}function Og(){ds.pop(),an=ds[ds.length-1]||null}let xs=1;function Co(n,e=!1){xs+=n,n<0&&an&&e&&(an.hasOnce=!0)}function Bg(n){return n.dynamicChildren=xs>0?an||vr:null,Og(),xs>0&&an&&an.push(n),n}function Vc(n,e,t,i,r,s){return Bg(Ne(n,e,t,i,r,s,!0))}function Po(n){return n?n.__v_isVNode===!0:!1}function Xr(n,e){return n.type===e.type&&n.key===e.key}const Ah=({key:n})=>n??null,fo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||Ot(n)||qe(n)?{i:fn,r:n,k:e,f:!!t}:n:null);function Ne(n,e=null,t=null,i=0,r=null,s=n===Pn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ah(e),ref:e&&fo(e),scopeId:ih,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:fn};return a?(zc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),xs>0&&!o&&an&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&an.push(l),l}const dn=Vg;function Vg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===ug)&&(n=wr),Po(n)){const a=Rr(n,e,!0);return t&&zc(a,t),xs>0&&!s&&an&&(a.shapeFlag&6?an[an.indexOf(n)]=a:an.push(a)),a.patchFlag=-2,a}if(Kg(n)&&(n=n.__vccOpts),e){e=zg(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=bc(a)),_t(l)&&(Dc(l)&&!Ye(l)&&(l=Bt({},l)),e.style=Ho(l))}const o=At(n)?1:Th(n)?128:Zm(n)?64:_t(n)?4:qe(n)?2:0;return Ne(n,e,t,i,r,o,s,!0)}function zg(n){return n?Dc(n)||gh(n)?Bt({},n):n:null}function Rr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Hg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ah(c),ref:e&&e.ref?t&&s?Ye(s)?s.concat(fo(e)):[s,fo(e)]:fo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Pn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Rr(n.ssContent),ssFallback:n.ssFallback&&Rr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ic(u,l.clone(u)),u}function Gi(n=" ",e=0){return dn(qo,null,n,e)}function ga(n,e){const t=dn(uo,null,n);return t.staticCount=e,t}function Dn(n){return n==null||typeof n=="boolean"?dn(wr):Ye(n)?dn(Pn,null,n.slice()):Po(n)?Ei(n):dn(qo,null,String(n))}function Ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Rr(n)}function zc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ye(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),zc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!gh(e)?e._ctx=fn:r===3&&fn&&(fn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:fn},t=32):(e=String(e),i&64?(t=16,e=[Gi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Hg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=bc([e.class,i.class]));else if(r==="style")e.style=Ho([e.style,i.style]);else if(Oo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ye(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function An(n,e,t,i=null){Bn(n,e,7,[t,i])}const Gg=dh();let kg=0;function Wg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Gg,s={uid:kg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Id(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xh(i,r),emitsOptions:hh(i,r),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Sg.bind(null,s),n.ce&&n.ce(s),s}let Wt=null;const Xg=()=>Wt||fn;let Do,hl;{const n=zo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Do=e("__VUE_INSTANCE_SETTERS__",t=>Wt=t),hl=e("__VUE_SSR_SETTERS__",t=>vs=t)}const As=n=>{const e=Wt;return Do(n),n.scope.on(),()=>{n.scope.off(),Do(e)}},Cu=()=>{Wt&&Wt.scope.off(),Do(null)};function wh(n){return n.vnode.shapeFlag&4}let vs=!1;function qg(n,e=!1,t=!1){e&&hl(e);const{props:i,children:r}=n.vnode,s=wh(n);Ag(n,i,s,e),Pg(n,r,t||e);const o=s?Yg(n,e):void 0;return e&&hl(!1),o}function Yg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,fg);const{setup:i}=t;if(i){ai();const r=n.setupContext=i.length>1?$g(n):null,s=As(n),o=Ts(i,n,0,[n.props,r]),a=Td(o);if(li(),s(),(a||n.sp)&&!us(n)&&ah(n),a){if(o.then(Cu,Cu),e)return o.then(l=>{Pu(n,l)}).catch(l=>{ko(l,n,0)});n.asyncDep=o}else Pu(n,o)}else Rh(n)}function Pu(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:_t(e)&&(n.setupState=Zd(e)),Rh(n)}function Rh(n,e,t){const i=n.type;n.render||(n.render=i.render||Nn);{const r=As(n);ai();try{dg(n)}finally{li(),r()}}}const jg={get(n,e){return Ut(n,"get",""),n[e]}};function $g(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,jg),slots:n.slots,emit:n.emit,expose:e}}function Yo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Zd($d(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in fs)return fs[t](n)},has(e,t){return t in e||t in fs}})):n.proxy}function Kg(n){return qe(n)&&"__vccOpts"in n}const _n=(n,e)=>zm(n,e,vs);function Ch(n,e,t){try{Co(-1);const i=arguments.length;return i===2?_t(e)&&!Ye(e)?Po(e)?dn(n,null,[e]):dn(n,e):dn(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Po(t)&&(t=[t]),dn(n,e,t))}finally{Co(1)}}const Zg="3.5.26";let pl;const Du=typeof window<"u"&&window.trustedTypes;if(Du)try{pl=Du.createPolicy("vue",{createHTML:n=>n})}catch{}const Ph=pl?n=>pl.createHTML(n):n=>n,Jg="http://www.w3.org/2000/svg",Qg="http://www.w3.org/1998/Math/MathML",Zn=typeof document<"u"?document:null,Lu=Zn&&Zn.createElement("template"),e_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Zn.createElementNS(Jg,n):e==="mathml"?Zn.createElementNS(Qg,n):t?Zn.createElement(n,{is:t}):Zn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Zn.createTextNode(n),createComment:n=>Zn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Zn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Lu.innerHTML=Ph(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Lu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},t_=Symbol("_vtc");function n_(n,e,t){const i=n[t_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Lo=Symbol("_vod"),Dh=Symbol("_vsh"),Iu={name:"show",beforeMount(n,{value:e},{transition:t}){n[Lo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):qr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),qr(n,!0),i.enter(n)):i.leave(n,()=>{qr(n,!1)}):qr(n,e))},beforeUnmount(n,{value:e}){qr(n,e)}};function qr(n,e){n.style.display=e?n[Lo]:"none",n[Dh]=!e}const i_=Symbol(""),r_=/(?:^|;)\s*display\s*:/;function s_(n,e,t){const i=n.style,r=At(t);let s=!1;if(t&&!r){if(e)if(At(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ho(i,a,"")}else for(const o in e)t[o]==null&&ho(i,o,"");for(const o in t)o==="display"&&(s=!0),ho(i,o,t[o])}else if(r){if(e!==t){const o=i[i_];o&&(t+=";"+o),i.cssText=t,s=r_.test(t)}}else e&&n.removeAttribute("style");Lo in n&&(n[Lo]=s?i.display:"",n[Dh]&&(i.display="none"))}const Uu=/\s*!important$/;function ho(n,e,t){if(Ye(t))t.forEach(i=>ho(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=o_(n,e);Uu.test(t)?n.setProperty(er(i),t.replace(Uu,""),"important"):n[i]=t}}const Nu=["Webkit","Moz","ms"],_a={};function o_(n,e){const t=_a[e];if(t)return t;let i=wi(e);if(i!=="filter"&&i in n)return _a[e]=i;i=Rd(i);for(let r=0;r<Nu.length;r++){const s=Nu[r]+i;if(s in n)return _a[e]=s}return e}const Fu="http://www.w3.org/1999/xlink";function Ou(n,e,t,i,r,s=mm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Fu,e.slice(6,e.length)):n.setAttributeNS(Fu,e,t):t==null||s&&!Pd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Pi(t)?String(t):t)}function Bu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ph(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Pd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function a_(n,e,t,i){n.addEventListener(e,t,i)}function l_(n,e,t,i){n.removeEventListener(e,t,i)}const Vu=Symbol("_vei");function c_(n,e,t,i,r=null){const s=n[Vu]||(n[Vu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=u_(e);if(i){const c=s[e]=h_(i,r);a_(n,a,c,l)}else o&&(l_(n,a,o,l),s[e]=void 0)}}const zu=/(?:Once|Passive|Capture)$/;function u_(n){let e;if(zu.test(n)){e={};let i;for(;i=n.match(zu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):er(n.slice(2)),e]}let xa=0;const f_=Promise.resolve(),d_=()=>xa||(f_.then(()=>xa=0),xa=Date.now());function h_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Bn(p_(i,t.value),e,5,[i])};return t.value=n,t.attached=d_(),t}function p_(n,e){if(Ye(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Hu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,m_=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?n_(n,i,o):e==="style"?s_(n,t,i):Oo(e)?Sc(e)||c_(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):g_(n,e,i,o))?(Bu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ou(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!At(i))?Bu(n,wi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ou(n,e,i,o))};function g_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Hu(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Hu(e)&&At(t)?!1:e in n}const __=Bt({patchProp:m_},e_);let Gu;function x_(){return Gu||(Gu=Lg(__))}const v_=((...n)=>{const e=x_().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=M_(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,S_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function S_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function M_(n){return At(n)?document.querySelector(n):n}const E_=Symbol();var ku;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(ku||(ku={}));function b_(){const n=gm(!0),e=n.run(()=>Jn({}));let t=[],i=[];const r=$d({install(s){r._a=s,s.provide(E_,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const Hc="182",y_=0,Wu=1,T_=2,po=1,A_=2,is=3,Ci=0,Kt=1,ti=2,ri=0,Tr=1,ml=2,Xu=3,qu=4,w_=5,Wi=100,R_=101,C_=102,P_=103,D_=104,L_=200,I_=201,U_=202,N_=203,gl=204,_l=205,F_=206,O_=207,B_=208,V_=209,z_=210,H_=211,G_=212,k_=213,W_=214,xl=0,vl=1,Sl=2,Cr=3,Ml=4,El=5,bl=6,yl=7,Lh=0,X_=1,q_=2,Fn=0,Ih=1,Uh=2,Nh=3,Fh=4,Oh=5,Bh=6,Vh=7,zh=300,Ji=301,Pr=302,Tl=303,Al=304,jo=306,wl=1e3,ni=1001,Rl=1002,Pt=1003,Y_=1004,Vs=1005,Ft=1006,va=1007,qi=1008,on=1009,Hh=1010,Gh=1011,Ss=1012,Gc=1013,Vn=1014,In=1015,ui=1016,kc=1017,Wc=1018,Ms=1020,kh=35902,Wh=35899,Xh=1021,qh=1022,vn=1023,fi=1026,Yi=1027,Yh=1028,Xc=1029,Dr=1030,qc=1031,Yc=1033,mo=33776,go=33777,_o=33778,xo=33779,Cl=35840,Pl=35841,Dl=35842,Ll=35843,Il=36196,Ul=37492,Nl=37496,Fl=37488,Ol=37489,Bl=37490,Vl=37491,zl=37808,Hl=37809,Gl=37810,kl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,jl=37816,$l=37817,Kl=37818,Zl=37819,Jl=37820,Ql=37821,ec=36492,tc=36494,nc=36495,ic=36283,rc=36284,sc=36285,oc=36286,j_=3200,jh=0,$_=1,yi="",un="srgb",Lr="srgb-linear",Io="linear",ut="srgb",ir=7680,Yu=519,K_=512,Z_=513,J_=514,jc=515,Q_=516,e0=517,$c=518,t0=519,ju=35044,$u="300 es",Un=2e3,Uo=2001;function $h(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function No(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function n0(){const n=No("canvas");return n.style.display="block",n}const Ku={};function Zu(...n){const e="THREE."+n.shift();console.log(e,...n)}function ke(...n){const e="THREE."+n.shift();console.warn(e,...n)}function it(...n){const e="THREE."+n.shift();console.error(e,...n)}function Es(...n){const e=n.join(" ");e in Ku||(Ku[e]=!0,ke(...n))}function i0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sa=Math.PI/180,ac=180/Math.PI;function ws(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function r0(n,e){return(n%e+e)%e}function Ma(n,e,t){return(1-t)*n+t*e}function Yr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f!==x||l!==d||c!==p||u!==g){let m=l*d+c*p+u*g+f*x;m<0&&(d=-d,p=-p,g=-g,x=-x,m=-m);let h=1-a;if(m<.9995){const v=Math.acos(m),b=Math.sin(v);h=Math.sin(h*v)/b,a=Math.sin(a*v)/b,l=l*h+d*a,c=c*h+p*a,u=u*h+g*a,f=f*h+x*a}else{l=l*h+d*a,c=c*h+p*a,u=u*h+g*a,f=f*h+x*a;const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*d,e[t+1]=l*g+u*d+c*f-a*p,e[t+2]=c*g+u*p+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new X,Ju=new Rs;class je{constructor(e,t,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],x=r[0],m=r[3],h=r[6],v=r[1],b=r[4],y=r[7],R=r[2],D=r[5],P=r[8];return s[0]=o*x+a*v+l*R,s[3]=o*m+a*b+l*D,s[6]=o*h+a*y+l*P,s[1]=c*x+u*v+f*R,s[4]=c*m+u*b+f*D,s[7]=c*h+u*y+f*P,s[2]=d*x+p*v+g*R,s[5]=d*m+p*b+g*D,s[8]=d*h+p*y+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new je,Qu=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ef=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s0(){const n={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=Ar(r.r),r.g=Ar(r.g),r.b=Ar(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yi?Io:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Lr]:{primaries:e,whitePoint:i,transfer:Io,toXYZ:Qu,fromXYZ:ef,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Qu,fromXYZ:ef,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}const tt=s0();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rr;class o0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rr===void 0&&(rr=No("canvas")),rr.width=e.width,rr.height=e.height;const r=rr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=No("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=si(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let a0=0;class Kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ya(r[o].image)):s.push(ya(r[o]))}else s=ya(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ya(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?o0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let l0=0;const Ta=new X;class Xt extends Or{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=ni,r=ni,s=Ft,o=qi,a=vn,l=on,c=Xt.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=ws(),this.name="",this.source=new Kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ta).x}get height(){return this.source.getSize(Ta).y}get depth(){return this.source.getSize(Ta).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wl:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wl:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=zh;Xt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(p+1)/2,R=(h+1)/2,D=(u+d)/4,P=(f+x)/4,V=(g+m)/4;return b>y&&b>R?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=D/i,s=P/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=D/r,s=V/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=P/s,r=V/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c0 extends Or{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Xt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Kc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends c0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kh extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u0 extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zs.copy(i.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Hs.subVectors(this.max,jr),sr.subVectors(e.a,jr),or.subVectors(e.b,jr),ar.subVectors(e.c,jr),hi.subVectors(or,sr),pi.subVectors(ar,or),Ni.subVectors(sr,ar);let t=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-Ni.z,Ni.y,hi.z,0,-hi.x,pi.z,0,-pi.x,Ni.z,0,-Ni.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-Ni.y,Ni.x,0];return!Aa(t,sr,or,ar,Hs)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,sr,or,ar,Hs))?!1:(Gs.crossVectors(hi,pi),t=[Gs.x,Gs.y,Gs.z],Aa(t,sr,or,ar,Hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xn=[new X,new X,new X,new X,new X,new X,new X,new X],pn=new X,zs=new Cs,sr=new X,or=new X,ar=new X,hi=new X,pi=new X,Ni=new X,jr=new X,Hs=new X,Gs=new X,Fi=new X;function Aa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fi.fromArray(n,s);const a=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),u=i.dot(Fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const f0=new Cs,$r=new X,wa=new X;class $o{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):f0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);const t=$r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector($r,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(wa)),this.expandByPoint($r.copy(e.center).sub(wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const qn=new X,Ra=new X,ks=new X,mi=new X,Ca=new X,Ws=new X,Pa=new X;class Zh{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ra.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Ra);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ks),a=mi.dot(this.direction),l=-mi.dot(ks),c=mi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ra).addScaledVector(ks,d),p}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,s){Ca.subVectors(t,e),Ws.subVectors(i,e),Pa.crossVectors(Ca,Ws);let o=this.direction.dot(Pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(Ws.crossVectors(mi,Ws));if(l<0)return null;const c=a*this.direction.dot(Ca.cross(mi));if(c<0||l+c>o)return null;const u=-a*mi.dot(Pa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,r,s,o,a,l,c,u,f,d,p,g,x,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,p,g,x,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,p,g,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/lr.setFromMatrixColumn(e,0).length(),s=1/lr.setFromMatrixColumn(e,1).length(),o=1/lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,x=c*f;t[0]=d+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,x=c*f;t[0]=d-x*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,x=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+x,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d0,e,h0)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),gi.crossVectors(i,tn),gi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),gi.crossVectors(i,tn)),gi.normalize(),Xs.crossVectors(tn,gi),r[0]=gi.x,r[4]=Xs.x,r[8]=tn.x,r[1]=gi.y,r[5]=Xs.y,r[9]=tn.y,r[2]=gi.z,r[6]=Xs.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],h=i[14],v=i[3],b=i[7],y=i[11],R=i[15],D=r[0],P=r[4],V=r[8],M=r[12],T=r[1],U=r[5],q=r[9],z=r[13],ee=r[2],ne=r[6],W=r[10],B=r[14],Z=r[3],xe=r[7],ge=r[11],me=r[15];return s[0]=o*D+a*T+l*ee+c*Z,s[4]=o*P+a*U+l*ne+c*xe,s[8]=o*V+a*q+l*W+c*ge,s[12]=o*M+a*z+l*B+c*me,s[1]=u*D+f*T+d*ee+p*Z,s[5]=u*P+f*U+d*ne+p*xe,s[9]=u*V+f*q+d*W+p*ge,s[13]=u*M+f*z+d*B+p*me,s[2]=g*D+x*T+m*ee+h*Z,s[6]=g*P+x*U+m*ne+h*xe,s[10]=g*V+x*q+m*W+h*ge,s[14]=g*M+x*z+m*B+h*me,s[3]=v*D+b*T+y*ee+R*Z,s[7]=v*P+b*U+y*ne+R*xe,s[11]=v*V+b*q+y*W+R*ge,s[15]=v*M+b*z+y*B+R*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],h=e[15],v=l*p-c*d,b=a*p-c*f,y=a*d-l*f,R=o*p-c*u,D=o*d-l*u,P=o*f-a*u;return t*(x*v-m*b+h*y)-i*(g*v-m*R+h*D)+r*(g*b-x*R+h*P)-s*(g*y-x*D+m*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],v=f*m*c-x*d*c+x*l*p-a*m*p-f*l*h+a*d*h,b=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,y=u*x*c-g*f*c+g*a*p-o*x*p-u*a*h+o*f*h,R=g*f*l-u*x*l-g*a*d+o*x*d+u*a*m-o*f*m,D=t*v+i*b+r*y+s*R;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=v*P,e[1]=(x*d*s-f*m*s-x*r*p+i*m*p+f*r*h-i*d*h)*P,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*h+i*l*h)*P,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*P,e[4]=b*P,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*h+t*d*h)*P,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*h-t*l*h)*P,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*P,e[8]=y*P,e[9]=(g*f*s-u*x*s-g*i*p+t*x*p+u*i*h-t*f*h)*P,e[10]=(o*x*s-g*a*s+g*i*c-t*x*c-o*i*h+t*a*h)*P,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*P,e[12]=R*P,e[13]=(u*x*r-g*f*r+g*i*d-t*x*d-u*i*m+t*f*m)*P,e[14]=(g*a*r-o*x*r-g*i*l+t*x*l+o*i*m-t*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,x=o*u,m=o*f,h=a*f,v=l*c,b=l*u,y=l*f,R=i.x,D=i.y,P=i.z;return r[0]=(1-(x+h))*R,r[1]=(p+y)*R,r[2]=(g-b)*R,r[3]=0,r[4]=(p-y)*D,r[5]=(1-(d+h))*D,r[6]=(m+v)*D,r[7]=0,r[8]=(g+b)*P,r[9]=(m-v)*P,r[10]=(1-(d+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=lr.set(r[0],r[1],r[2]).length();const o=lr.set(r[4],r[5],r[6]).length(),a=lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),mn.copy(this);const c=1/s,u=1/o,f=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,t.setFromRotationMatrix(mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Un,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===Un)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Uo)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Un,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===Un)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===Uo)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const lr=new X,mn=new xt,d0=new X(0,0,0),h0=new X(1,1,1),gi=new X,Xs=new X,tn=new X,tf=new xt,nf=new Rs;class zn{constructor(e=0,t=0,i=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nf.setFromEuler(this),this.setFromQuaternion(nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p0=0;const rf=new X,cr=new Rs,Yn=new xt,qs=new X,Kr=new X,m0=new X,g0=new Rs,sf=new X(1,0,0),of=new X(0,1,0),af=new X(0,0,1),lf={type:"added"},_0={type:"removed"},ur={type:"childadded",child:null},Da={type:"childremoved",child:null};class Dt extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new X,t=new zn,i=new Rs,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new je}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(sf,e)}rotateY(e){return this.rotateOnAxis(of,e)}rotateZ(e){return this.rotateOnAxis(af,e)}translateOnAxis(e,t){return rf.copy(e).applyQuaternion(this.quaternion),this.position.add(rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sf,e)}translateY(e){return this.translateOnAxis(of,e)}translateZ(e){return this.translateOnAxis(af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qs.copy(e):qs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Kr,qs,this.up):Yn.lookAt(qs,Kr,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),cr.setFromRotationMatrix(Yn),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lf),ur.child=e,this.dispatchEvent(ur),ur.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_0),Da.child=e,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lf),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,m0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new X(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new X,jn=new X,La=new X,$n=new X,fr=new X,dr=new X,cf=new X,Ia=new X,Ua=new X,Na=new X,Fa=new Et,Oa=new Et,Ba=new Et;class xn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gn.subVectors(e,t),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gn.subVectors(r,t),jn.subVectors(i,t),La.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(jn),l=gn.dot(La),c=jn.dot(jn),u=jn.dot(La),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Fa.setScalar(0),Oa.setScalar(0),Ba.setScalar(0),Fa.fromBufferAttribute(e,t),Oa.fromBufferAttribute(e,i),Ba.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Fa,s.x),o.addScaledVector(Oa,s.y),o.addScaledVector(Ba,s.z),o}static isFrontFacing(e,t,i,r){return gn.subVectors(i,t),jn.subVectors(e,t),gn.cross(jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),gn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;fr.subVectors(r,i),dr.subVectors(s,i),Ia.subVectors(e,i);const l=fr.dot(Ia),c=dr.dot(Ia);if(l<=0&&c<=0)return t.copy(i);Ua.subVectors(e,r);const u=fr.dot(Ua),f=dr.dot(Ua);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(fr,o);Na.subVectors(e,s);const p=fr.dot(Na),g=dr.dot(Na);if(g>=0&&p<=g)return t.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(dr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return cf.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(cf,a);const h=1/(m+x+d);return o=x*h,a=d*h,t.copy(i).addScaledVector(fr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function Va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=r0(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Va(o,s,e+1/3),this.g=Va(o,s,e),this.b=Va(o,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=un){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=Qh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return tt.workingToColorSpace(It.copy(this),e),Math.round(Qe(It.r*255,0,255))*65536+Math.round(Qe(It.g*255,0,255))*256+Math.round(Qe(It.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(It.copy(this),t);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=un){tt.workingToColorSpace(It.copy(this),e);const t=It.r,i=It.g,r=It.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Ys);const i=Ma(_i.h,Ys.h,t),r=Ma(_i.s,Ys.s,t),s=Ma(_i.l,Ys.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new et;et.NAMES=Qh;let x0=0;class Br extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Tr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=_l,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gl&&(i.blendSrc=this.blendSrc),this.blendDst!==_l&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ep extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new X,js=new rt;let v0=0;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ju,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)js.fromBufferAttribute(this,t),js.applyMatrix3(e),this.setXY(t,js.x,js.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ju&&(e.usage=this.usage),e}}class tp extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class np extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class oi extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let S0=0;const cn=new xt,za=new Dt,hr=new X,nn=new Cs,Zr=new Cs,Ct=new X;class bn extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($h(e)?np:tp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(nn.min,Zr.min),nn.expandByPoint(Ct),Ct.addVectors(nn.max,Zr.max),nn.expandByPoint(Ct)):(nn.expandByPoint(Zr.min),nn.expandByPoint(Zr.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ct.fromBufferAttribute(a,c),l&&(hr.fromBufferAttribute(e,c),Ct.add(hr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let V=0;V<i.count;V++)a[V]=new X,l[V]=new X;const c=new X,u=new X,f=new X,d=new rt,p=new rt,g=new rt,x=new X,m=new X;function h(V,M,T){c.fromBufferAttribute(i,V),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),d.fromBufferAttribute(s,V),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,T),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),a[V].add(x),a[M].add(x),a[T].add(x),l[V].add(m),l[M].add(m),l[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let V=0,M=v.length;V<M;++V){const T=v[V],U=T.start,q=T.count;for(let z=U,ee=U+q;z<ee;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new X,y=new X,R=new X,D=new X;function P(V){R.fromBufferAttribute(r,V),D.copy(R);const M=a[V];b.copy(M),b.sub(R.multiplyScalar(R.dot(M))).normalize(),y.crossVectors(D,M);const U=y.dot(l[V])<0?-1:1;o.setXYZW(V,b.x,b.y,b.z,U)}for(let V=0,M=v.length;V<M;++V){const T=v[V],U=T.start,q=T.count;for(let z=U,ee=U+q;z<ee;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new hn(d,u,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uf=new xt,Oi=new Zh,$s=new $o,ff=new X,Ks=new X,Zs=new X,Js=new X,Ha=new X,Qs=new X,df=new X,eo=new X;class Hn extends Dt{constructor(e=new bn,t=new ep){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ha.fromBufferAttribute(f,e),o?Qs.addScaledVector(Ha,u):Qs.addScaledVector(Ha.sub(t),u))}t.add(Qs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(s),Oi.copy(e.ray).recast(e.near),!($s.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere($s,ff)===null||Oi.origin.distanceToSquared(ff)>(e.far-e.near)**2))&&(uf.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(uf),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,R=b;y<R;y+=3){const D=a.getX(y),P=a.getX(y+1),V=a.getX(y+2);r=to(this,h,e,i,c,u,f,D,P,V),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const v=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);r=to(this,o,e,i,c,u,f,v,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,R=b;y<R;y+=3){const D=y,P=y+1,V=y+2;r=to(this,h,e,i,c,u,f,D,P,V),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const v=m,b=m+1,y=m+2;r=to(this,o,e,i,c,u,f,v,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function M0(n,e,t,i,r,s,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ci,a),l===null)return null;eo.copy(a),eo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:n}}function to(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ks),n.getVertexPosition(l,Zs),n.getVertexPosition(c,Js);const u=M0(n,e,t,i,Ks,Zs,Js,df);if(u){const f=new X;xn.getBarycoord(df,Ks,Zs,Js,f),r&&(u.uv=xn.getInterpolatedAttribute(r,a,l,c,f,new rt)),s&&(u.uv1=xn.getInterpolatedAttribute(s,a,l,c,f,new rt)),o&&(u.normal=xn.getInterpolatedAttribute(o,a,l,c,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new X,materialIndex:0};xn.getNormal(Ks,Zs,Js,d.normal),u.face=d,u.barycoord=f}return u}class Vr extends bn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(f,2));function g(x,m,h,v,b,y,R,D,P,V,M){const T=y/P,U=R/V,q=y/2,z=R/2,ee=D/2,ne=P+1,W=V+1;let B=0,Z=0;const xe=new X;for(let ge=0;ge<W;ge++){const me=ge*U-z;for(let Ue=0;Ue<ne;Ue++){const ze=Ue*T-q;xe[x]=ze*v,xe[m]=me*b,xe[h]=ee,c.push(xe.x,xe.y,xe.z),xe[x]=0,xe[m]=0,xe[h]=D>0?1:-1,u.push(xe.x,xe.y,xe.z),f.push(Ue/P),f.push(1-ge/V),B+=1}}for(let ge=0;ge<V;ge++)for(let me=0;me<P;me++){const Ue=d+me+ne*ge,ze=d+me+ne*(ge+1),Je=d+(me+1)+ne*(ge+1),Ze=d+(me+1)+ne*ge;l.push(Ue,ze,Ze),l.push(ze,Je,Ze),Z+=6}a.addGroup(p,Z,M),p+=Z,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=Ir(n[t]);for(const r in i)e[r]=i[r]}return e}function E0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ip(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const b0={clone:Ir,merge:Ht};var y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y0,this.fragmentShader=T0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=E0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rp extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new X,hf=new rt,pf=new rt;class sn extends rp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ac*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ac*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,hf,pf),t.subVectors(pf,hf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pr=-90,mr=1;class A0 extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(pr,mr,e,t);r.layers=this.layers,this.add(r);const s=new sn(pr,mr,e,t);s.layers=this.layers,this.add(s);const o=new sn(pr,mr,e,t);o.layers=this.layers,this.add(o);const a=new sn(pr,mr,e,t);a.layers=this.layers,this.add(a);const l=new sn(pr,mr,e,t);l.layers=this.layers,this.add(l);const c=new sn(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sp extends Xt{constructor(e=[],t=Ji,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class op extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vr(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:ri});s.uniforms.tEquirect.value=t;const o=new Hn(r,s),a=t.minFilter;return t.minFilter===qi&&(t.minFilter=Ft),new A0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class no extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w0={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new no,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new no,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new no,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new no;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Zc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=i}clone(){return new Zc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mf extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class R0 extends Xt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Pt,u=Pt,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ka=new X,C0=new X,P0=new je;class ki{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ka.subVectors(i,t).cross(C0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ka),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||P0.getNormalMatrix(e),r=this.coplanarPoint(ka).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new $o,D0=new rt(.5,.5),io=new X;class Jc{constructor(e=new ki,t=new ki,i=new ki,r=new ki,s=new ki,o=new ki){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],g=s[8],x=s[9],m=s[10],h=s[11],v=s[12],b=s[13],y=s[14],R=s[15];if(r[0].setComponents(c-o,p-u,h-g,R-v).normalize(),r[1].setComponents(c+o,p+u,h+g,R+v).normalize(),r[2].setComponents(c+a,p+f,h+x,R+b).normalize(),r[3].setComponents(c-a,p-f,h-x,R-b).normalize(),i)r[4].setComponents(l,d,m,y).normalize(),r[5].setComponents(c-l,p-d,h-m,R-y).normalize();else if(r[4].setComponents(c-l,p-d,h-m,R-y).normalize(),t===Un)r[5].setComponents(c+l,p+d,h+m,R+y).normalize();else if(t===Uo)r[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);const t=D0.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(io.x=r.normal.x>0?e.max.x:e.min.x,io.y=r.normal.y>0?e.max.y:e.min.y,io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ap extends Br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gf=new xt,lc=new Zh,ro=new $o,so=new X;class L0 extends Dt{constructor(e=new bn,t=new ap){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(r),ro.radius+=s,e.ray.intersectsSphere(ro)===!1)return;gf.copy(r).invert(),lc.copy(e.ray).applyMatrix4(gf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,x=p;g<x;g++){const m=c.getX(g);so.fromBufferAttribute(f,m),_f(so,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,x=p;g<x;g++)so.fromBufferAttribute(f,g),_f(so,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _f(n,e,t,i,r,s,o){const a=lc.distanceSqToPoint(n);if(a<t){const l=new X;lc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class bs extends Xt{constructor(e,t,i=Vn,r,s,o,a=Pt,l=Pt,c,u=fi,f=1){if(u!==fi&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class I0 extends bs{constructor(e,t=Vn,i=Ji,r,s,o=Pt,a=Pt,l,c=fi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lp extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ko extends bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,p=[],g=[],x=[],m=[];for(let h=0;h<u;h++){const v=h*d-o;for(let b=0;b<c;b++){const y=b*f-s;g.push(y,-v,0),x.push(0,0,1),m.push(b/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const b=v+c*h,y=v+c*(h+1),R=v+1+c*(h+1),D=v+1+c*h;p.push(b,y,D),p.push(y,R,D)}this.setIndex(p),this.setAttribute("position",new oi(g,3)),this.setAttribute("normal",new oi(x,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}class U0 extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class N0 extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class F0 extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O0 extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class B0 extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Wa=new xt,xf=new X,vf=new X;class V0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(xf),vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vf),t.updateMatrixWorld(),Wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qc extends rp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class z0 extends V0{constructor(){super(new Qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H0 extends B0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new z0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class G0 extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Sf(n,e,t,i){const r=k0(i);switch(t){case Xh:return n*e;case Yh:return n*e/r.components*r.byteLength;case Xc:return n*e/r.components*r.byteLength;case Dr:return n*e*2/r.components*r.byteLength;case qc:return n*e*2/r.components*r.byteLength;case qh:return n*e*3/r.components*r.byteLength;case vn:return n*e*4/r.components*r.byteLength;case Yc:return n*e*4/r.components*r.byteLength;case mo:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _o:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:case Ll:return Math.max(n,16)*Math.max(e,8)/4;case Cl:case Dl:return Math.max(n,8)*Math.max(e,8)/2;case Il:case Ul:case Fl:case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nl:case Bl:case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ec:case tc:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ic:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sc:case oc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function k0(n){switch(n){case on:case Hh:return{byteLength:1,components:1};case Ss:case Gh:case ui:return{byteLength:2,components:1};case kc:case Wc:return{byteLength:2,components:4};case Vn:case Gc:case In:return{byteLength:4,components:1};case kh:case Wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);function cp(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function W0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var X0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ix=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,px=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ix=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ox=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ev=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ov=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,av=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_v=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Av=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ov=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ES=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:X0,alphahash_pars_fragment:q0,alphamap_fragment:Y0,alphamap_pars_fragment:j0,alphatest_fragment:$0,alphatest_pars_fragment:K0,aomap_fragment:Z0,aomap_pars_fragment:J0,batching_pars_vertex:Q0,batching_vertex:ex,begin_vertex:tx,beginnormal_vertex:nx,bsdfs:ix,iridescence_fragment:rx,bumpmap_pars_fragment:sx,clipping_planes_fragment:ox,clipping_planes_pars_fragment:ax,clipping_planes_pars_vertex:lx,clipping_planes_vertex:cx,color_fragment:ux,color_pars_fragment:fx,color_pars_vertex:dx,color_vertex:hx,common:px,cube_uv_reflection_fragment:mx,defaultnormal_vertex:gx,displacementmap_pars_vertex:_x,displacementmap_vertex:xx,emissivemap_fragment:vx,emissivemap_pars_fragment:Sx,colorspace_fragment:Mx,colorspace_pars_fragment:Ex,envmap_fragment:bx,envmap_common_pars_fragment:yx,envmap_pars_fragment:Tx,envmap_pars_vertex:Ax,envmap_physical_pars_fragment:Ox,envmap_vertex:wx,fog_vertex:Rx,fog_pars_vertex:Cx,fog_fragment:Px,fog_pars_fragment:Dx,gradientmap_pars_fragment:Lx,lightmap_pars_fragment:Ix,lights_lambert_fragment:Ux,lights_lambert_pars_fragment:Nx,lights_pars_begin:Fx,lights_toon_fragment:Bx,lights_toon_pars_fragment:Vx,lights_phong_fragment:zx,lights_phong_pars_fragment:Hx,lights_physical_fragment:Gx,lights_physical_pars_fragment:kx,lights_fragment_begin:Wx,lights_fragment_maps:Xx,lights_fragment_end:qx,logdepthbuf_fragment:Yx,logdepthbuf_pars_fragment:jx,logdepthbuf_pars_vertex:$x,logdepthbuf_vertex:Kx,map_fragment:Zx,map_pars_fragment:Jx,map_particle_fragment:Qx,map_particle_pars_fragment:ev,metalnessmap_fragment:tv,metalnessmap_pars_fragment:nv,morphinstance_vertex:iv,morphcolor_vertex:rv,morphnormal_vertex:sv,morphtarget_pars_vertex:ov,morphtarget_vertex:av,normal_fragment_begin:lv,normal_fragment_maps:cv,normal_pars_fragment:uv,normal_pars_vertex:fv,normal_vertex:dv,normalmap_pars_fragment:hv,clearcoat_normal_fragment_begin:pv,clearcoat_normal_fragment_maps:mv,clearcoat_pars_fragment:gv,iridescence_pars_fragment:_v,opaque_fragment:xv,packing:vv,premultiplied_alpha_fragment:Sv,project_vertex:Mv,dithering_fragment:Ev,dithering_pars_fragment:bv,roughnessmap_fragment:yv,roughnessmap_pars_fragment:Tv,shadowmap_pars_fragment:Av,shadowmap_pars_vertex:wv,shadowmap_vertex:Rv,shadowmask_pars_fragment:Cv,skinbase_vertex:Pv,skinning_pars_vertex:Dv,skinning_vertex:Lv,skinnormal_vertex:Iv,specularmap_fragment:Uv,specularmap_pars_fragment:Nv,tonemapping_fragment:Fv,tonemapping_pars_fragment:Ov,transmission_fragment:Bv,transmission_pars_fragment:Vv,uv_pars_fragment:zv,uv_pars_vertex:Hv,uv_vertex:Gv,worldpos_vertex:kv,background_vert:Wv,background_frag:Xv,backgroundCube_vert:qv,backgroundCube_frag:Yv,cube_vert:jv,cube_frag:$v,depth_vert:Kv,depth_frag:Zv,distance_vert:Jv,distance_frag:Qv,equirect_vert:eS,equirect_frag:tS,linedashed_vert:nS,linedashed_frag:iS,meshbasic_vert:rS,meshbasic_frag:sS,meshlambert_vert:oS,meshlambert_frag:aS,meshmatcap_vert:lS,meshmatcap_frag:cS,meshnormal_vert:uS,meshnormal_frag:fS,meshphong_vert:dS,meshphong_frag:hS,meshphysical_vert:pS,meshphysical_frag:mS,meshtoon_vert:gS,meshtoon_frag:_S,points_vert:xS,points_frag:vS,shadow_vert:SS,shadow_frag:MS,sprite_vert:ES,sprite_frag:bS},ye={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Ln={basic:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Ht([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Ht([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Ht([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Ht([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Ht([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Ht([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Ht([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Ht([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Ht([ye.common,ye.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Ht([ye.lights,ye.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Ln.physical={uniforms:Ht([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const oo={r:0,b:0,g:0},Vi=new zn,yS=new xt;function TS(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1;const R=g(b);R===null?h(a,l):R&&R.isColor&&(h(R,1),y=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,y){const R=g(y);R&&(R.isCubeTexture||R.mapping===jo)?(u===void 0&&(u=new Hn(new Vr(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Ir(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Vi.copy(y.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yS.makeRotationFromEuler(Vi)),u.material.toneMapped=tt.getTransfer(R.colorSpace)!==ut,(f!==R||d!==R.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=R,d=R.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Hn(new Ko(2,2),new Gn({name:"BackgroundMaterial",uniforms:Ir(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=tt.getTransfer(R.colorSpace)!==ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||d!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=R,d=R.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,y){b.getRGB(oo,ip(n)),i.buffers.color.setClear(oo.r,oo.g,oo.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(a,l)},render:x,addToRenderList:m,dispose:v}}function AS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(T,U,q,z,ee){let ne=!1;const W=f(z,q,U);s!==W&&(s=W,c(s.object)),ne=p(T,z,q,ee),ne&&g(T,z,q,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,y(T,U,q,z),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function f(T,U,q){const z=q.wireframe===!0;let ee=i[T.id];ee===void 0&&(ee={},i[T.id]=ee);let ne=ee[U.id];ne===void 0&&(ne={},ee[U.id]=ne);let W=ne[z];return W===void 0&&(W=d(l()),ne[z]=W),W}function d(T){const U=[],q=[],z=[];for(let ee=0;ee<t;ee++)U[ee]=0,q[ee]=0,z[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:z,object:T,attributes:{},index:null}}function p(T,U,q,z){const ee=s.attributes,ne=U.attributes;let W=0;const B=q.getAttributes();for(const Z in B)if(B[Z].location>=0){const ge=ee[Z];let me=ne[Z];if(me===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(me=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(me=T.instanceColor)),ge===void 0||ge.attribute!==me||me&&ge.data!==me.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function g(T,U,q,z){const ee={},ne=U.attributes;let W=0;const B=q.getAttributes();for(const Z in B)if(B[Z].location>=0){let ge=ne[Z];ge===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(ge=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(ge=T.instanceColor));const me={};me.attribute=ge,ge&&ge.data&&(me.data=ge.data),ee[Z]=me,W++}s.attributes=ee,s.attributesNum=W,s.index=z}function x(){const T=s.newAttributes;for(let U=0,q=T.length;U<q;U++)T[U]=0}function m(T){h(T,0)}function h(T,U){const q=s.newAttributes,z=s.enabledAttributes,ee=s.attributeDivisors;q[T]=1,z[T]===0&&(n.enableVertexAttribArray(T),z[T]=1),ee[T]!==U&&(n.vertexAttribDivisor(T,U),ee[T]=U)}function v(){const T=s.newAttributes,U=s.enabledAttributes;for(let q=0,z=U.length;q<z;q++)U[q]!==T[q]&&(n.disableVertexAttribArray(q),U[q]=0)}function b(T,U,q,z,ee,ne,W){W===!0?n.vertexAttribIPointer(T,U,q,ee,ne):n.vertexAttribPointer(T,U,q,z,ee,ne)}function y(T,U,q,z){x();const ee=z.attributes,ne=q.getAttributes(),W=U.defaultAttributeValues;for(const B in ne){const Z=ne[B];if(Z.location>=0){let xe=ee[B];if(xe===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(xe=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(xe=T.instanceColor)),xe!==void 0){const ge=xe.normalized,me=xe.itemSize,Ue=e.get(xe);if(Ue===void 0)continue;const ze=Ue.buffer,Je=Ue.type,Ze=Ue.bytesPerElement,re=Je===n.INT||Je===n.UNSIGNED_INT||xe.gpuType===Gc;if(xe.isInterleavedBufferAttribute){const I=xe.data,ie=I.stride,ae=xe.offset;if(I.isInstancedInterleavedBuffer){for(let oe=0;oe<Z.locationSize;oe++)h(Z.location+oe,I.meshPerAttribute);T.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let oe=0;oe<Z.locationSize;oe++)m(Z.location+oe);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let oe=0;oe<Z.locationSize;oe++)b(Z.location+oe,me/Z.locationSize,Je,ge,ie*Ze,(ae+me/Z.locationSize*oe)*Ze,re)}else{if(xe.isInstancedBufferAttribute){for(let I=0;I<Z.locationSize;I++)h(Z.location+I,xe.meshPerAttribute);T.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let I=0;I<Z.locationSize;I++)m(Z.location+I);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let I=0;I<Z.locationSize;I++)b(Z.location+I,me/Z.locationSize,Je,ge,me*Ze,me/Z.locationSize*I*Ze,re)}}else if(W!==void 0){const ge=W[B];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(Z.location,ge);break;case 3:n.vertexAttrib3fv(Z.location,ge);break;case 4:n.vertexAttrib4fv(Z.location,ge);break;default:n.vertexAttrib1fv(Z.location,ge)}}}}v()}function R(){V();for(const T in i){const U=i[T];for(const q in U){const z=U[q];for(const ee in z)u(z[ee].object),delete z[ee];delete U[q]}delete i[T]}}function D(T){if(i[T.id]===void 0)return;const U=i[T.id];for(const q in U){const z=U[q];for(const ee in z)u(z[ee].object),delete z[ee];delete U[q]}delete i[T.id]}function P(T){for(const U in i){const q=i[U];if(q[T.id]===void 0)continue;const z=q[T.id];for(const ee in z)u(z[ee].object),delete z[ee];delete q[T.id]}}function V(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:V,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function wS(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function RS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==vn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const V=P===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==on&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==In&&!V)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:R,samples:D}}function CS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ki,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,b=v*4;let y=h.clippingState||null;l.value=y,y=u(g,d,b,p);for(let R=0;R!==b;++R)y[R]=t[R];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const h=p+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,y=p;b!==x;++b,y+=4)o.copy(f[b]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function PS(n){let e=new WeakMap;function t(o,a){return a===Tl?o.mapping=Ji:a===Al&&(o.mapping=Pr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Tl||a===Al)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new op(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ti=4,Mf=[.125,.215,.35,.446,.526,.582],Xi=20,DS=256,Jr=new Qc,Ef=new et;let Xa=null,qa=0,Ya=0,ja=!1;const LS=new X;class bf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=LS}=s;Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=ja,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:ui,format:vn,colorSpace:Lr,depthBuffer:!1},r=yf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IS(s)),this._blurMaterial=NS(s,e,t),this._ggxMaterial=US(s,e,t)}return r}_compileMaterial(e){const t=new Hn(new bn,e);this._renderer.compile(t,Jr)}_sceneToCubeUV(e,t,i,r,s){const l=new sn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Ef),f.toneMapping=Fn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hn(new Vr,new ep({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let h=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,h=!0):(m.color.copy(Ef),h=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const R=this._cubeSize;gr(r,y*R,b>2?R:0,R,R),f.setRenderTarget(r),h&&f.render(x,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ji||e.mapping===Pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Jr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,p=f*d,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Ti?i-g+Ti:0),h=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,gr(s,m,h,3*x,2*x),r.setRenderTarget(s),r.render(a,Jr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,gr(e,m,h,3*x,2*x),r.setRenderTarget(e),r.render(a,Jr)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xi-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Xi;m>Xi&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const h=[];let v=0;for(let P=0;P<Xi;++P){const V=P/x,M=Math.exp(-V*V/2);h.push(M),P===0?v+=M:P<m&&(v+=2*M)}for(let P=0;P<h.length;P++)h[P]=h[P]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const y=this._sizeLods[r],R=3*y*(r>b-Ti?r-b+Ti:0),D=4*(this._cubeSize-y);gr(t,R,D,3*y,2*y),l.setRenderTarget(t),l.render(f,Jr)}}function IS(n){const e=[],t=[],i=[];let r=n;const s=n-Ti+1+Mf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Ti?l=Mf[o-n+Ti-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,m=2,h=1,v=new Float32Array(x*g*p),b=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let D=0;D<p;D++){const P=D%3*2/3-1,V=D>2?0:-1,M=[P,V,0,P+2/3,V,0,P+2/3,V+1,0,P,V,0,P+2/3,V+1,0,P,V+1,0];v.set(M,x*g*D),b.set(d,m*g*D);const T=[D,D,D,D,D,D];y.set(T,h*g*D)}const R=new bn;R.setAttribute("position",new hn(v,x)),R.setAttribute("uv",new hn(b,m)),R.setAttribute("faceIndex",new hn(y,h)),i.push(new Hn(R,null)),r>Ti&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function yf(n,e,t){const i=new On(n,e,t);return i.texture.mapping=jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function US(n,e,t){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function NS(n,e,t){const i=new Float32Array(Xi),r=new X(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Tf(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Af(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Zo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Tl||l===Al,u=l===Ji||l===Pr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new bf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new bf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function OS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Es("WebGLRenderer: "+i+" extension not supported."),r}}}function BS(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let b=0,y=v.length;b<y;b+=3){const R=v[b+0],D=v[b+1],P=v[b+2];d.push(R,D,D,P,P,R)}}else if(g!==void 0){const v=g.array;x=g.version;for(let b=0,y=v.length/3-1;b<y;b+=3){const R=b+0,D=b+1,P=b+2;d.push(R,D,D,P,P,R)}}else return;const m=new($h(d)?np:tp)(d,1);m.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function VS(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*o,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function f(d,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,g);let h=0;for(let v=0;v<g;v++)h+=p[v]*x[v];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function zS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function HS(n,e,t){const i=new WeakMap,r=new Et;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let T=function(){V.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,D=1;R>e.maxTextureSize&&(D=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*D*4*f),V=new Kh(P,R,D,f);V.type=In,V.needsUpdate=!0;const M=y*4;for(let U=0;U<f;U++){const q=h[U],z=v[U],ee=b[U],ne=R*D*4*U;for(let W=0;W<q.count;W++){const B=W*M;g===!0&&(r.fromBufferAttribute(q,W),P[ne+B+0]=r.x,P[ne+B+1]=r.y,P[ne+B+2]=r.z,P[ne+B+3]=0),x===!0&&(r.fromBufferAttribute(z,W),P[ne+B+4]=r.x,P[ne+B+5]=r.y,P[ne+B+6]=r.z,P[ne+B+7]=0),m===!0&&(r.fromBufferAttribute(ee,W),P[ne+B+8]=r.x,P[ne+B+9]=r.y,P[ne+B+10]=r.z,P[ne+B+11]=ee.itemSize===4?r.w:1)}}d={count:f,texture:V,size:new rt(R,D)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function GS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const kS={[Ih]:"LINEAR_TONE_MAPPING",[Uh]:"REINHARD_TONE_MAPPING",[Nh]:"CINEON_TONE_MAPPING",[Fh]:"ACES_FILMIC_TONE_MAPPING",[Bh]:"AGX_TONE_MAPPING",[Vh]:"NEUTRAL_TONE_MAPPING",[Oh]:"CUSTOM_TONE_MAPPING"};function WS(n,e,t,i,r){const s=new On(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new On(e,t,{type:ui,depthBuffer:!1,stencilBuffer:!1}),a=new bn;a.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new oi([0,2,0,0,2,0],2));const l=new U0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Hn(a,l),u=new Qc(-1,1,1,-1,0,1);let f=null,d=null,p=!1,g,x=null,m=[],h=!1;this.setSize=function(v,b){s.setSize(v,b),o.setSize(v,b);for(let y=0;y<m.length;y++){const R=m[y];R.setSize&&R.setSize(v,b)}},this.setEffects=function(v){m=v,h=m.length>0&&m[0].isRenderPass===!0;const b=s.width,y=s.height;for(let R=0;R<m.length;R++){const D=m[R];D.setSize&&D.setSize(b,y)}},this.begin=function(v,b){if(p||v.toneMapping===Fn&&m.length===0)return!1;if(x=b,b!==null){const y=b.width,R=b.height;(s.width!==y||s.height!==R)&&this.setSize(y,R)}return h===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=Fn,!0},this.hasRenderPass=function(){return h},this.end=function(v,b){v.toneMapping=g,p=!0;let y=s,R=o;for(let D=0;D<m.length;D++){const P=m[D];if(P.enabled!==!1&&(P.render(v,R,y,b),P.needsSwap!==!1)){const V=y;y=R,R=V}}if(f!==v.outputColorSpace||d!==v.toneMapping){f=v.outputColorSpace,d=v.toneMapping,l.defines={},tt.getTransfer(f)===ut&&(l.defines.SRGB_TRANSFER="");const D=kS[d];D&&(l.defines[D]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(x),v.render(c,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const up=new Xt,cc=new bs(1,1),fp=new Kh,dp=new u0,hp=new sp,wf=[],Rf=[],Cf=new Float32Array(16),Pf=new Float32Array(9),Df=new Float32Array(4);function zr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wf[r];if(s===void 0&&(s=new Float32Array(r),wf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Jo(n,e){let t=Rf[e];t===void 0&&(t=new Int32Array(e),Rf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function XS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function YS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function jS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function $S(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Df.set(i),n.uniformMatrix2fv(this.addr,!1,Df),Rt(t,i)}}function KS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Pf.set(i),n.uniformMatrix3fv(this.addr,!1,Pf),Rt(t,i)}}function ZS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Cf.set(i),n.uniformMatrix4fv(this.addr,!1,Cf),Rt(t,i)}}function JS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function QS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function eM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function tM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function nM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function oM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(cc.compareFunction=t.isReversedDepthBuffer()?$c:jc,s=cc):s=up,t.setTexture2D(e||s,r)}function aM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dp,r)}function lM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||hp,r)}function cM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||fp,r)}function uM(n){switch(n){case 5126:return XS;case 35664:return qS;case 35665:return YS;case 35666:return jS;case 35674:return $S;case 35675:return KS;case 35676:return ZS;case 5124:case 35670:return JS;case 35667:case 35671:return QS;case 35668:case 35672:return eM;case 35669:case 35673:return tM;case 5125:return nM;case 36294:return iM;case 36295:return rM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return cM}}function fM(n,e){n.uniform1fv(this.addr,e)}function dM(n,e){const t=zr(e,this.size,2);n.uniform2fv(this.addr,t)}function hM(n,e){const t=zr(e,this.size,3);n.uniform3fv(this.addr,t)}function pM(n,e){const t=zr(e,this.size,4);n.uniform4fv(this.addr,t)}function mM(n,e){const t=zr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gM(n,e){const t=zr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _M(n,e){const t=zr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xM(n,e){n.uniform1iv(this.addr,e)}function vM(n,e){n.uniform2iv(this.addr,e)}function SM(n,e){n.uniform3iv(this.addr,e)}function MM(n,e){n.uniform4iv(this.addr,e)}function EM(n,e){n.uniform1uiv(this.addr,e)}function bM(n,e){n.uniform2uiv(this.addr,e)}function yM(n,e){n.uniform3uiv(this.addr,e)}function TM(n,e){n.uniform4uiv(this.addr,e)}function AM(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=cc:o=up;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function wM(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||dp,s[o])}function RM(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||hp,s[o])}function CM(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||fp,s[o])}function PM(n){switch(n){case 5126:return fM;case 35664:return dM;case 35665:return hM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return _M;case 5124:case 35670:return xM;case 35667:case 35671:return vM;case 35668:case 35672:return SM;case 35669:case 35673:return MM;case 5125:return EM;case 36294:return bM;case 36295:return yM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return CM}}class DM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uM(t.type)}}class LM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PM(t.type)}}class IM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function Lf(n,e){n.seq.push(e),n.map[e.id]=e}function UM(n,e,t){const i=n.name,r=i.length;for($a.lastIndex=0;;){const s=$a.exec(i),o=$a.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Lf(t,c===void 0?new DM(a,n,e):new LM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new IM(a),Lf(t,f)),t=f}}}class vo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);UM(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function If(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const NM=37297;let FM=0;function OM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Uf=new je;function BM(n){tt._getMatrix(Uf,tt.workingColorSpace,n);const e=`mat3( ${Uf.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case Io:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Nf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+OM(n.getShaderSource(e),a)}else return s}function VM(n,e){const t=BM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zM={[Ih]:"Linear",[Uh]:"Reinhard",[Nh]:"Cineon",[Fh]:"ACESFilmic",[Bh]:"AgX",[Vh]:"Neutral",[Oh]:"Custom"};function HM(n,e){const t=zM[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ao=new X;function GM(){tt.getLuminanceCoefficients(ao);const n=ao.x.toFixed(4),e=ao.y.toFixed(4),t=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function WM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function rs(n){return n!==""}function Ff(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Of(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qM=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(n){return n.replace(qM,jM)}const YM=new Map;function jM(n,e){let t=$e[e];if(t===void 0){const i=YM.get(e);if(i!==void 0)t=$e[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uc(t)}const $M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(n){return n.replace($M,KM)}function KM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZM={[po]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function JM(n){return ZM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const QM={[Ji]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[jo]:"ENVMAP_TYPE_CUBE_UV"};function eE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":QM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const tE={[Pr]:"ENVMAP_MODE_REFRACTION"};function nE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":tE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iE={[Lh]:"ENVMAP_BLENDING_MULTIPLY",[X_]:"ENVMAP_BLENDING_MIX",[q_]:"ENVMAP_BLENDING_ADD"};function rE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":iE[n.combine]||"ENVMAP_BLENDING_NONE"}function sE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function oE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=JM(t),c=eE(t),u=nE(t),f=rE(t),d=sE(t),p=kM(t),g=WM(s),x=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rs).join(`
`),h.length>0&&(h+=`
`)):(m=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),h=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Fn?HM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,VM("linearToOutputTexel",t.outputColorSpace),GM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),o=uc(o),o=Ff(o,t),o=Of(o,t),a=uc(a),a=Ff(a,t),a=Of(a,t),o=Bf(o),a=Bf(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=v+m+o,y=v+h+a,R=If(r,r.VERTEX_SHADER,b),D=If(r,r.FRAGMENT_SHADER,y);r.attachShader(x,R),r.attachShader(x,D),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(U){if(n.debug.checkShaderErrors){const q=r.getProgramInfoLog(x)||"",z=r.getShaderInfoLog(R)||"",ee=r.getShaderInfoLog(D)||"",ne=q.trim(),W=z.trim(),B=ee.trim();let Z=!0,xe=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,R,D);else{const ge=Nf(r,R,"vertex"),me=Nf(r,D,"fragment");it("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+ne+`
`+ge+`
`+me)}else ne!==""?ke("WebGLProgram: Program Info Log:",ne):(W===""||B==="")&&(xe=!1);xe&&(U.diagnostics={runnable:Z,programLog:ne,vertexShader:{log:W,prefix:m},fragmentShader:{log:B,prefix:h}})}r.deleteShader(R),r.deleteShader(D),V=new vo(r,x),M=XM(r,x)}let V;this.getUniforms=function(){return V===void 0&&P(this),V};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(x,NM)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=D,this}let aE=0;class lE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cE(e),t.set(e,i)),i}}class cE{constructor(e){this.id=aE++,this.code=e,this.usedTimes=0}}function uE(n,e,t,i,r,s,o){const a=new Jh,l=new lE,c=new Set,u=[],f=new Map,d=r.logarithmicDepthBuffer;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,T,U,q,z){const ee=q.fog,ne=z.geometry,W=M.isMeshStandardMaterial?q.environment:null,B=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),Z=B&&B.mapping===jo?B.image.height:null,xe=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&ke("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ge=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,me=ge!==void 0?ge.length:0;let Ue=0;ne.morphAttributes.position!==void 0&&(Ue=1),ne.morphAttributes.normal!==void 0&&(Ue=2),ne.morphAttributes.color!==void 0&&(Ue=3);let ze,Je,Ze,re;if(xe){const lt=Ln[xe];ze=lt.vertexShader,Je=lt.fragmentShader}else ze=M.vertexShader,Je=M.fragmentShader,l.update(M),Ze=l.getVertexShaderID(M),re=l.getFragmentShaderID(M);const I=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),ae=z.isInstancedMesh===!0,oe=z.isBatchedMesh===!0,De=!!M.map,w=!!M.matcap,C=!!B,N=!!M.aoMap,$=!!M.lightMap,Y=!!M.bumpMap,Q=!!M.normalMap,A=!!M.displacementMap,fe=!!M.emissiveMap,le=!!M.metalnessMap,se=!!M.roughnessMap,ce=M.anisotropy>0,S=M.clearcoat>0,_=M.dispersion>0,L=M.iridescence>0,k=M.sheen>0,te=M.transmission>0,G=ce&&!!M.anisotropyMap,Te=S&&!!M.clearcoatMap,he=S&&!!M.clearcoatNormalMap,Re=S&&!!M.clearcoatRoughnessMap,Fe=L&&!!M.iridescenceMap,de=L&&!!M.iridescenceThicknessMap,Se=k&&!!M.sheenColorMap,Ee=k&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,ve=!!M.specularColorMap,We=!!M.specularIntensityMap,F=te&&!!M.transmissionMap,we=te&&!!M.thicknessMap,_e=!!M.gradientMap,Pe=!!M.alphaMap,pe=M.alphaTest>0,ue=!!M.alphaHash,Me=!!M.extensions;let Ge=Fn;M.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const pt={shaderID:xe,shaderType:M.type,shaderName:M.name,vertexShader:ze,fragmentShader:Je,defines:M.defines,customVertexShaderID:Ze,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:oe,batchingColor:oe&&z._colorsTexture!==null,instancing:ae,instancingColor:ae&&z.instanceColor!==null,instancingMorph:ae&&z.morphTexture!==null,outputColorSpace:I===null?n.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Lr,alphaToCoverage:!!M.alphaToCoverage,map:De,matcap:w,envMap:C,envMapMode:C&&B.mapping,envMapCubeUVHeight:Z,aoMap:N,lightMap:$,bumpMap:Y,normalMap:Q,displacementMap:A,emissiveMap:fe,normalMapObjectSpace:Q&&M.normalMapType===$_,normalMapTangentSpace:Q&&M.normalMapType===jh,metalnessMap:le,roughnessMap:se,anisotropy:ce,anisotropyMap:G,clearcoat:S,clearcoatMap:Te,clearcoatNormalMap:he,clearcoatRoughnessMap:Re,dispersion:_,iridescence:L,iridescenceMap:Fe,iridescenceThicknessMap:de,sheen:k,sheenColorMap:Se,sheenRoughnessMap:Ee,specularMap:Ce,specularColorMap:ve,specularIntensityMap:We,transmission:te,transmissionMap:F,thicknessMap:we,gradientMap:_e,opaque:M.transparent===!1&&M.blending===Tr&&M.alphaToCoverage===!1,alphaMap:Pe,alphaTest:pe,alphaHash:ue,combine:M.combine,mapUv:De&&x(M.map.channel),aoMapUv:N&&x(M.aoMap.channel),lightMapUv:$&&x(M.lightMap.channel),bumpMapUv:Y&&x(M.bumpMap.channel),normalMapUv:Q&&x(M.normalMap.channel),displacementMapUv:A&&x(M.displacementMap.channel),emissiveMapUv:fe&&x(M.emissiveMap.channel),metalnessMapUv:le&&x(M.metalnessMap.channel),roughnessMapUv:se&&x(M.roughnessMap.channel),anisotropyMapUv:G&&x(M.anisotropyMap.channel),clearcoatMapUv:Te&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(M.sheenRoughnessMap.channel),specularMapUv:Ce&&x(M.specularMap.channel),specularColorMapUv:ve&&x(M.specularColorMap.channel),specularIntensityMapUv:We&&x(M.specularIntensityMap.channel),transmissionMapUv:F&&x(M.transmissionMap.channel),thicknessMapUv:we&&x(M.thicknessMap.channel),alphaMapUv:Pe&&x(M.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Q||ce),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ne.attributes.uv&&(De||Pe),fog:!!ee,useFog:M.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ie,skinning:z.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ue,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:De&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===ut,decodeVideoTextureEmissive:fe&&M.emissiveMap.isVideoTexture===!0&&tt.getTransfer(M.emissiveMap.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ti,flipSided:M.side===Kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Me&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&M.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function h(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)T.push(U),T.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(v(T,M),b(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function v(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function b(M,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const T=g[M.type];let U;if(T){const q=Ln[T];U=b0.clone(q.uniforms)}else U=M.uniforms;return U}function R(M,T){let U=f.get(T);return U!==void 0?++U.usedTimes:(U=new oE(n,T,M,s),u.push(U),f.set(T,U)),U}function D(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),f.delete(M.cacheKey),M.destroy()}}function P(M){l.remove(M)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:R,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:V}}function fE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function dE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,g,x,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function a(f,d,p,g,x,m){const h=o(f,d,p,g,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,g,x,m){const h=o(f,d,p,g,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||dE),i.length>1&&i.sort(d||zf),r.length>1&&r.sort(d||zf)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function hE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Hf,n.set(i,[o])):r>=s.length?(o=new Hf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function pE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new et};break;case"SpotLight":t={position:new X,direction:new X,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function mE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let gE=0;function _E(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function xE(n){const e=new pE,t=mE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new xt,o=new xt;function a(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,v=0,b=0,y=0,R=0,D=0,P=0;c.sort(_E);for(let M=0,T=c.length;M<T;M++){const U=c[M],q=U.color,z=U.intensity,ee=U.distance;let ne=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Dr?ne=U.shadow.map.texture:ne=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=q.r*z,f+=q.g*z,d+=q.b*z;else if(U.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],z);P++}else if(U.isDirectionalLight){const W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const B=U.shadow,Z=t.get(U);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=ne,i.directionalShadowMatrix[p]=U.shadow.matrix,v++}i.directional[p]=W,p++}else if(U.isSpotLight){const W=e.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(q).multiplyScalar(z),W.distance=ee,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[x]=W;const B=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,B.updateMatrices(U),U.castShadow&&D++),i.spotLightMatrix[x]=B.matrix,U.castShadow){const Z=t.get(U);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=ne,y++}x++}else if(U.isRectAreaLight){const W=e.get(U);W.color.copy(q).multiplyScalar(z),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=W,m++}else if(U.isPointLight){const W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){const B=U.shadow,Z=t.get(U);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=U.shadow.matrix,b++}i.point[g]=W,g++}else if(U.isHemisphereLight){const W=e.get(U);W.skyColor.copy(U.color).multiplyScalar(z),W.groundColor.copy(U.groundColor).multiplyScalar(z),i.hemi[h]=W,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const V=i.hash;(V.directionalLength!==p||V.pointLength!==g||V.spotLength!==x||V.rectAreaLength!==m||V.hemiLength!==h||V.numDirectionalShadows!==v||V.numPointShadows!==b||V.numSpotShadows!==y||V.numSpotMaps!==R||V.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+R-D,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=P,V.directionalLength=p,V.pointLength=g,V.spotLength=x,V.rectAreaLength=m,V.hemiLength=h,V.numDirectionalShadows=v,V.numPointShadows=b,V.numSpotShadows=y,V.numSpotMaps=R,V.numLightProbes=P,i.version=gE++)}function l(c,u){let f=0,d=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const b=c[h];if(b.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(b.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Gf(n){const e=new xE(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function vE(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Gf(n),e.set(r,[a])):s>=o.length?(a=new Gf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const SE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ME=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,EE=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],bE=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],kf=new xt,Qr=new X,Ka=new X;function yE(n,e,t){let i=new Jc;const r=new rt,s=new rt,o=new Et,a=new F0,l=new O0,c={},u=t.maxTextureSize,f={[Ci]:Kt,[Kt]:Ci,[ti]:ti},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:SE,fragmentShader:ME}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new bn;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Hn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let h=this.type;this.render=function(D,P,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;D.type===A_&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),D.type=po);const M=n.getRenderTarget(),T=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),q=n.state;q.setBlending(ri),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const z=h!==this.type;z&&P.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(ne=>ne.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,ne=D.length;ee<ne;ee++){const W=D[ee],B=W.shadow;if(B===void 0){ke("WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Z=B.getFrameExtents();if(r.multiply(Z),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,B.mapSize.y=s.y)),B.map===null||z===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===is){if(W.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new On(r.x,r.y,{format:Dr,type:ui,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),B.map.texture.name=W.name+".shadowMap",B.map.depthTexture=new bs(r.x,r.y,In),B.map.depthTexture.name=W.name+".shadowMapDepth",B.map.depthTexture.format=fi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Pt,B.map.depthTexture.magFilter=Pt}else{W.isPointLight?(B.map=new op(r.x),B.map.depthTexture=new I0(r.x,Vn)):(B.map=new On(r.x,r.y),B.map.depthTexture=new bs(r.x,r.y,Vn)),B.map.depthTexture.name=W.name+".shadowMap",B.map.depthTexture.format=fi;const ge=n.state.buffers.depth.getReversed();this.type===po?(B.map.depthTexture.compareFunction=ge?$c:jc,B.map.depthTexture.minFilter=Ft,B.map.depthTexture.magFilter=Ft):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Pt,B.map.depthTexture.magFilter=Pt)}B.camera.updateProjectionMatrix()}const xe=B.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<xe;ge++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(B.map),n.clear());const me=B.getViewport(ge);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),q.viewport(o)}if(W.isPointLight){const me=B.camera,Ue=B.matrix,ze=W.distance||me.far;ze!==me.far&&(me.far=ze,me.updateProjectionMatrix()),Qr.setFromMatrixPosition(W.matrixWorld),me.position.copy(Qr),Ka.copy(me.position),Ka.add(EE[ge]),me.up.copy(bE[ge]),me.lookAt(Ka),me.updateMatrixWorld(),Ue.makeTranslation(-Qr.x,-Qr.y,-Qr.z),kf.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),B._frustum.setFromProjectionMatrix(kf,me.coordinateSystem,me.reversedDepth)}else B.updateMatrices(W);i=B.getFrustum(),y(P,V,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===is&&v(B,V),B.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,T,U)};function v(D,P){const V=e.update(x);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new On(r.x,r.y,{format:Dr,type:ui})),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(P,null,V,d,x,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(P,null,V,p,x,null)}function b(D,P,V,M){let T=null;const U=V.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)T=U;else if(T=V.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const q=T.uuid,z=P.uuid;let ee=c[q];ee===void 0&&(ee={},c[q]=ee);let ne=ee[z];ne===void 0&&(ne=T.clone(),ee[z]=ne,P.addEventListener("dispose",R)),T=ne}if(T.visible=P.visible,T.wireframe=P.wireframe,M===is?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:f[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,V.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=n.properties.get(T);q.light=V}return T}function y(D,P,V,M,T){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&T===is)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,D.matrixWorld);const z=e.update(D),ee=D.material;if(Array.isArray(ee)){const ne=z.groups;for(let W=0,B=ne.length;W<B;W++){const Z=ne[W],xe=ee[Z.materialIndex];if(xe&&xe.visible){const ge=b(D,xe,M,T);D.onBeforeShadow(n,D,P,V,z,ge,Z),n.renderBufferDirect(V,null,z,ge,D,Z),D.onAfterShadow(n,D,P,V,z,ge,Z)}}}else if(ee.visible){const ne=b(D,ee,M,T);D.onBeforeShadow(n,D,P,V,z,ne,null),n.renderBufferDirect(V,null,z,ne,D,null),D.onAfterShadow(n,D,P,V,z,ne,null)}}const q=D.children;for(let z=0,ee=q.length;z<ee;z++)y(q[z],P,V,M,T)}function R(D){D.target.removeEventListener("dispose",R);for(const V in c){const M=c[V],T=D.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const TE={[xl]:vl,[Sl]:bl,[Ml]:yl,[Cr]:El,[vl]:xl,[bl]:Sl,[yl]:Ml,[El]:Cr};function AE(n,e){function t(){let F=!1;const we=new Et;let _e=null;const Pe=new Et(0,0,0,0);return{setMask:function(pe){_e!==pe&&!F&&(n.colorMask(pe,pe,pe,pe),_e=pe)},setLocked:function(pe){F=pe},setClear:function(pe,ue,Me,Ge,pt){pt===!0&&(pe*=Ge,ue*=Ge,Me*=Ge),we.set(pe,ue,Me,Ge),Pe.equals(we)===!1&&(n.clearColor(pe,ue,Me,Ge),Pe.copy(we))},reset:function(){F=!1,_e=null,Pe.set(-1,0,0,0)}}}function i(){let F=!1,we=!1,_e=null,Pe=null,pe=null;return{setReversed:function(ue){if(we!==ue){const Me=e.get("EXT_clip_control");ue?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),we=ue;const Ge=pe;pe=null,this.setClear(Ge)}},getReversed:function(){return we},setTest:function(ue){ue?I(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(ue){_e!==ue&&!F&&(n.depthMask(ue),_e=ue)},setFunc:function(ue){if(we&&(ue=TE[ue]),Pe!==ue){switch(ue){case xl:n.depthFunc(n.NEVER);break;case vl:n.depthFunc(n.ALWAYS);break;case Sl:n.depthFunc(n.LESS);break;case Cr:n.depthFunc(n.LEQUAL);break;case Ml:n.depthFunc(n.EQUAL);break;case El:n.depthFunc(n.GEQUAL);break;case bl:n.depthFunc(n.GREATER);break;case yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=ue}},setLocked:function(ue){F=ue},setClear:function(ue){pe!==ue&&(we&&(ue=1-ue),n.clearDepth(ue),pe=ue)},reset:function(){F=!1,_e=null,Pe=null,pe=null,we=!1}}}function r(){let F=!1,we=null,_e=null,Pe=null,pe=null,ue=null,Me=null,Ge=null,pt=null;return{setTest:function(lt){F||(lt?I(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(lt){we!==lt&&!F&&(n.stencilMask(lt),we=lt)},setFunc:function(lt,Tn,kn){(_e!==lt||Pe!==Tn||pe!==kn)&&(n.stencilFunc(lt,Tn,kn),_e=lt,Pe=Tn,pe=kn)},setOp:function(lt,Tn,kn){(ue!==lt||Me!==Tn||Ge!==kn)&&(n.stencilOp(lt,Tn,kn),ue=lt,Me=Tn,Ge=kn)},setLocked:function(lt){F=lt},setClear:function(lt){pt!==lt&&(n.clearStencil(lt),pt=lt)},reset:function(){F=!1,we=null,_e=null,Pe=null,pe=null,ue=null,Me=null,Ge=null,pt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,h=null,v=null,b=null,y=null,R=null,D=null,P=new et(0,0,0),V=0,M=!1,T=null,U=null,q=null,z=null,ee=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,B=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=B>=1):Z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=B>=2);let xe=null,ge={};const me=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),ze=new Et().fromArray(me),Je=new Et().fromArray(Ue);function Ze(F,we,_e,Pe){const pe=new Uint8Array(4),ue=n.createTexture();n.bindTexture(F,ue),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<_e;Me++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(we+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return ue}const re={};re[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),I(n.DEPTH_TEST),o.setFunc(Cr),Y(!1),Q(Wu),I(n.CULL_FACE),N(ri);function I(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ie(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function ae(F,we){return f[F]!==we?(n.bindFramebuffer(F,we),f[F]=we,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=we),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=we),!0):!1}function oe(F,we){let _e=p,Pe=!1;if(F){_e=d.get(we),_e===void 0&&(_e=[],d.set(we,_e));const pe=F.textures;if(_e.length!==pe.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Me=pe.length;ue<Me;ue++)_e[ue]=n.COLOR_ATTACHMENT0+ue;_e.length=pe.length,Pe=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(_e)}function De(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const w={[Wi]:n.FUNC_ADD,[R_]:n.FUNC_SUBTRACT,[C_]:n.FUNC_REVERSE_SUBTRACT};w[P_]=n.MIN,w[D_]=n.MAX;const C={[L_]:n.ZERO,[I_]:n.ONE,[U_]:n.SRC_COLOR,[gl]:n.SRC_ALPHA,[z_]:n.SRC_ALPHA_SATURATE,[B_]:n.DST_COLOR,[F_]:n.DST_ALPHA,[N_]:n.ONE_MINUS_SRC_COLOR,[_l]:n.ONE_MINUS_SRC_ALPHA,[V_]:n.ONE_MINUS_DST_COLOR,[O_]:n.ONE_MINUS_DST_ALPHA,[H_]:n.CONSTANT_COLOR,[G_]:n.ONE_MINUS_CONSTANT_COLOR,[k_]:n.CONSTANT_ALPHA,[W_]:n.ONE_MINUS_CONSTANT_ALPHA};function N(F,we,_e,Pe,pe,ue,Me,Ge,pt,lt){if(F===ri){x===!0&&(ie(n.BLEND),x=!1);return}if(x===!1&&(I(n.BLEND),x=!0),F!==w_){if(F!==m||lt!==M){if((h!==Wi||y!==Wi)&&(n.blendEquation(n.FUNC_ADD),h=Wi,y=Wi),lt)switch(F){case Tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ml:n.blendFunc(n.ONE,n.ONE);break;case Xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:it("WebGLState: Invalid blending: ",F);break}else switch(F){case Tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ml:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xu:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qu:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",F);break}v=null,b=null,R=null,D=null,P.set(0,0,0),V=0,m=F,M=lt}return}pe=pe||we,ue=ue||_e,Me=Me||Pe,(we!==h||pe!==y)&&(n.blendEquationSeparate(w[we],w[pe]),h=we,y=pe),(_e!==v||Pe!==b||ue!==R||Me!==D)&&(n.blendFuncSeparate(C[_e],C[Pe],C[ue],C[Me]),v=_e,b=Pe,R=ue,D=Me),(Ge.equals(P)===!1||pt!==V)&&(n.blendColor(Ge.r,Ge.g,Ge.b,pt),P.copy(Ge),V=pt),m=F,M=!1}function $(F,we){F.side===ti?ie(n.CULL_FACE):I(n.CULL_FACE);let _e=F.side===Kt;we&&(_e=!_e),Y(_e),F.blending===Tr&&F.transparent===!1?N(ri):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Pe=F.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?I(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(F){T!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),T=F)}function Q(F){F!==y_?(I(n.CULL_FACE),F!==U&&(F===Wu?n.cullFace(n.BACK):F===T_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),U=F}function A(F){F!==q&&(W&&n.lineWidth(F),q=F)}function fe(F,we,_e){F?(I(n.POLYGON_OFFSET_FILL),(z!==we||ee!==_e)&&(n.polygonOffset(we,_e),z=we,ee=_e)):ie(n.POLYGON_OFFSET_FILL)}function le(F){F?I(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function se(F){F===void 0&&(F=n.TEXTURE0+ne-1),xe!==F&&(n.activeTexture(F),xe=F)}function ce(F,we,_e){_e===void 0&&(xe===null?_e=n.TEXTURE0+ne-1:_e=xe);let Pe=ge[_e];Pe===void 0&&(Pe={type:void 0,texture:void 0},ge[_e]=Pe),(Pe.type!==F||Pe.texture!==we)&&(xe!==_e&&(n.activeTexture(_e),xe=_e),n.bindTexture(F,we||re[F]),Pe.type=F,Pe.texture=we)}function S(){const F=ge[xe];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function k(){try{n.texSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function te(){try{n.texSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function he(){try{n.texStorage2D(...arguments)}catch(F){it("WebGLState:",F)}}function Re(){try{n.texStorage3D(...arguments)}catch(F){it("WebGLState:",F)}}function Fe(){try{n.texImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function de(){try{n.texImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function Se(F){ze.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ze.copy(F))}function Ee(F){Je.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Je.copy(F))}function Ce(F,we){let _e=c.get(we);_e===void 0&&(_e=new WeakMap,c.set(we,_e));let Pe=_e.get(F);Pe===void 0&&(Pe=n.getUniformBlockIndex(we,F.name),_e.set(F,Pe))}function ve(F,we){const Pe=c.get(we).get(F);l.get(we)!==Pe&&(n.uniformBlockBinding(we,Pe,F.__bindingPointIndex),l.set(we,Pe))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},xe=null,ge={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,h=null,v=null,b=null,y=null,R=null,D=null,P=new et(0,0,0),V=0,M=!1,T=null,U=null,q=null,z=null,ee=null,ze.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:I,disable:ie,bindFramebuffer:ae,drawBuffers:oe,useProgram:De,setBlending:N,setMaterial:$,setFlipSided:Y,setCullFace:Q,setLineWidth:A,setPolygonOffset:fe,setScissorTest:le,activeTexture:se,bindTexture:ce,unbindTexture:S,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:Fe,texImage3D:de,updateUBOMapping:Ce,uniformBlockBinding:ve,texStorage2D:he,texStorage3D:Re,texSubImage2D:k,texSubImage3D:te,compressedTexSubImage2D:G,compressedTexSubImage3D:Te,scissor:Se,viewport:Ee,reset:We}}function wE(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return p?new OffscreenCanvas(S,_):No("canvas")}function x(S,_,L){let k=1;const te=ce(S);if((te.width>L||te.height>L)&&(k=L/Math.max(te.width,te.height)),k<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const G=Math.floor(k*te.width),Te=Math.floor(k*te.height);f===void 0&&(f=g(G,Te));const he=_?g(G,Te):f;return he.width=G,he.height=Te,he.getContext("2d").drawImage(S,0,0,G,Te),ke("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+G+"x"+Te+")."),he}else return"data"in S&&ke("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),S;return S}function m(S){return S.generateMipmaps}function h(S){n.generateMipmap(S)}function v(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(S,_,L,k,te=!1){if(S!==null){if(n[S]!==void 0)return n[S];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let G=_;if(_===n.RED&&(L===n.FLOAT&&(G=n.R32F),L===n.HALF_FLOAT&&(G=n.R16F),L===n.UNSIGNED_BYTE&&(G=n.R8)),_===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.R8UI),L===n.UNSIGNED_SHORT&&(G=n.R16UI),L===n.UNSIGNED_INT&&(G=n.R32UI),L===n.BYTE&&(G=n.R8I),L===n.SHORT&&(G=n.R16I),L===n.INT&&(G=n.R32I)),_===n.RG&&(L===n.FLOAT&&(G=n.RG32F),L===n.HALF_FLOAT&&(G=n.RG16F),L===n.UNSIGNED_BYTE&&(G=n.RG8)),_===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RG8UI),L===n.UNSIGNED_SHORT&&(G=n.RG16UI),L===n.UNSIGNED_INT&&(G=n.RG32UI),L===n.BYTE&&(G=n.RG8I),L===n.SHORT&&(G=n.RG16I),L===n.INT&&(G=n.RG32I)),_===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RGB8UI),L===n.UNSIGNED_SHORT&&(G=n.RGB16UI),L===n.UNSIGNED_INT&&(G=n.RGB32UI),L===n.BYTE&&(G=n.RGB8I),L===n.SHORT&&(G=n.RGB16I),L===n.INT&&(G=n.RGB32I)),_===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),L===n.UNSIGNED_INT&&(G=n.RGBA32UI),L===n.BYTE&&(G=n.RGBA8I),L===n.SHORT&&(G=n.RGBA16I),L===n.INT&&(G=n.RGBA32I)),_===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),_===n.RGBA){const Te=te?Io:tt.getTransfer(k);L===n.FLOAT&&(G=n.RGBA32F),L===n.HALF_FLOAT&&(G=n.RGBA16F),L===n.UNSIGNED_BYTE&&(G=Te===ut?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function y(S,_){let L;return S?_===null||_===Vn||_===Ms?L=n.DEPTH24_STENCIL8:_===In?L=n.DEPTH32F_STENCIL8:_===Ss&&(L=n.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vn||_===Ms?L=n.DEPTH_COMPONENT24:_===In?L=n.DEPTH_COMPONENT32F:_===Ss&&(L=n.DEPTH_COMPONENT16),L}function R(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Pt&&S.minFilter!==Ft?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function D(S){const _=S.target;_.removeEventListener("dispose",D),V(_),_.isVideoTexture&&u.delete(_)}function P(S){const _=S.target;_.removeEventListener("dispose",P),T(_)}function V(S){const _=i.get(S);if(_.__webglInit===void 0)return;const L=S.source,k=d.get(L);if(k){const te=k[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&M(S),Object.keys(k).length===0&&d.delete(L)}i.remove(S)}function M(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const L=S.source,k=d.get(L);delete k[_.__cacheKey],o.memory.textures--}function T(S){const _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let te=0;te<_.__webglFramebuffer[k].length;te++)n.deleteFramebuffer(_.__webglFramebuffer[k][te]);else n.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)n.deleteFramebuffer(_.__webglFramebuffer[k]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=S.textures;for(let k=0,te=L.length;k<te;k++){const G=i.get(L[k]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(L[k])}i.remove(S)}let U=0;function q(){U=0}function z(){const S=U;return S>=r.maxTextures&&ke("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),U+=1,S}function ee(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function ne(S,_){const L=i.get(S);if(S.isVideoTexture&&le(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&L.__version!==S.version){const k=S.image;if(k===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{re(L,S,_);return}}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+_)}function W(S,_){const L=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){re(L,S,_);return}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+_)}function B(S,_){const L=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){re(L,S,_);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+_)}function Z(S,_){const L=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&L.__version!==S.version){I(L,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+_)}const xe={[wl]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[Rl]:n.MIRRORED_REPEAT},ge={[Pt]:n.NEAREST,[Y_]:n.NEAREST_MIPMAP_NEAREST,[Vs]:n.NEAREST_MIPMAP_LINEAR,[Ft]:n.LINEAR,[va]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},me={[K_]:n.NEVER,[t0]:n.ALWAYS,[Z_]:n.LESS,[jc]:n.LEQUAL,[J_]:n.EQUAL,[$c]:n.GEQUAL,[Q_]:n.GREATER,[e0]:n.NOTEQUAL};function Ue(S,_){if(_.type===In&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ft||_.magFilter===va||_.magFilter===Vs||_.magFilter===qi||_.minFilter===Ft||_.minFilter===va||_.minFilter===Vs||_.minFilter===qi)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,xe[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,xe[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,xe[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ge[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ge[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Pt||_.minFilter!==Vs&&_.minFilter!==qi||_.type===In&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ze(S,_){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",D));const k=_.source;let te=d.get(k);te===void 0&&(te={},d.set(k,te));const G=ee(_);if(G!==S.__cacheKey){te[G]===void 0&&(te[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),te[G].usedTimes++;const Te=te[S.__cacheKey];Te!==void 0&&(te[S.__cacheKey].usedTimes--,Te.usedTimes===0&&M(_)),S.__cacheKey=G,S.__webglTexture=te[G].texture}return L}function Je(S,_,L){return Math.floor(Math.floor(S/L)/_)}function Ze(S,_,L,k){const G=S.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,L,k,_.data);else{G.sort((de,Se)=>de.start-Se.start);let Te=0;for(let de=1;de<G.length;de++){const Se=G[Te],Ee=G[de],Ce=Se.start+Se.count,ve=Je(Ee.start,_.width,4),We=Je(Se.start,_.width,4);Ee.start<=Ce+1&&ve===We&&Je(Ee.start+Ee.count-1,_.width,4)===ve?Se.count=Math.max(Se.count,Ee.start+Ee.count-Se.start):(++Te,G[Te]=Ee)}G.length=Te+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let de=0,Se=G.length;de<Se;de++){const Ee=G[de],Ce=Math.floor(Ee.start/4),ve=Math.ceil(Ee.count/4),We=Ce%_.width,F=Math.floor(Ce/_.width),we=ve,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,We,F,we,_e,L,k,_.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function re(S,_,L){let k=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=n.TEXTURE_3D);const te=ze(S,_),G=_.source;t.bindTexture(k,S.__webglTexture,n.TEXTURE0+L);const Te=i.get(G);if(G.version!==Te.__version||te===!0){t.activeTexture(n.TEXTURE0+L);const he=tt.getPrimaries(tt.workingColorSpace),Re=_.colorSpace===yi?null:tt.getPrimaries(_.colorSpace),Fe=_.colorSpace===yi||he===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let de=x(_.image,!1,r.maxTextureSize);de=se(_,de);const Se=s.convert(_.format,_.colorSpace),Ee=s.convert(_.type);let Ce=b(_.internalFormat,Se,Ee,_.colorSpace,_.isVideoTexture);Ue(k,_);let ve;const We=_.mipmaps,F=_.isVideoTexture!==!0,we=Te.__version===void 0||te===!0,_e=G.dataReady,Pe=R(_,de);if(_.isDepthTexture)Ce=y(_.format===Yi,_.type),we&&(F?t.texStorage2D(n.TEXTURE_2D,1,Ce,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ce,de.width,de.height,0,Se,Ee,null));else if(_.isDataTexture)if(We.length>0){F&&we&&t.texStorage2D(n.TEXTURE_2D,Pe,Ce,We[0].width,We[0].height);for(let pe=0,ue=We.length;pe<ue;pe++)ve=We[pe],F?_e&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,Se,Ee,ve.data):t.texImage2D(n.TEXTURE_2D,pe,Ce,ve.width,ve.height,0,Se,Ee,ve.data);_.generateMipmaps=!1}else F?(we&&t.texStorage2D(n.TEXTURE_2D,Pe,Ce,de.width,de.height),_e&&Ze(_,de,Se,Ee)):t.texImage2D(n.TEXTURE_2D,0,Ce,de.width,de.height,0,Se,Ee,de.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){F&&we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Ce,We[0].width,We[0].height,de.depth);for(let pe=0,ue=We.length;pe<ue;pe++)if(ve=We[pe],_.format!==vn)if(Se!==null)if(F){if(_e)if(_.layerUpdates.size>0){const Me=Sf(ve.width,ve.height,_.format,_.type);for(const Ge of _.layerUpdates){const pt=ve.data.subarray(Ge*Me/ve.data.BYTES_PER_ELEMENT,(Ge+1)*Me/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,Ge,ve.width,ve.height,1,Se,pt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ve.width,ve.height,de.depth,Se,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,Ce,ve.width,ve.height,de.depth,0,ve.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ve.width,ve.height,de.depth,Se,Ee,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,Ce,ve.width,ve.height,de.depth,0,Se,Ee,ve.data)}else{F&&we&&t.texStorage2D(n.TEXTURE_2D,Pe,Ce,We[0].width,We[0].height);for(let pe=0,ue=We.length;pe<ue;pe++)ve=We[pe],_.format!==vn?Se!==null?F?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,Se,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,Ce,ve.width,ve.height,0,ve.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?_e&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,Se,Ee,ve.data):t.texImage2D(n.TEXTURE_2D,pe,Ce,ve.width,ve.height,0,Se,Ee,ve.data)}else if(_.isDataArrayTexture)if(F){if(we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Ce,de.width,de.height,de.depth),_e)if(_.layerUpdates.size>0){const pe=Sf(de.width,de.height,_.format,_.type);for(const ue of _.layerUpdates){const Me=de.data.subarray(ue*pe/de.data.BYTES_PER_ELEMENT,(ue+1)*pe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,de.width,de.height,1,Se,Ee,Me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Se,Ee,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,de.width,de.height,de.depth,0,Se,Ee,de.data);else if(_.isData3DTexture)F?(we&&t.texStorage3D(n.TEXTURE_3D,Pe,Ce,de.width,de.height,de.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Se,Ee,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,de.width,de.height,de.depth,0,Se,Ee,de.data);else if(_.isFramebufferTexture){if(we)if(F)t.texStorage2D(n.TEXTURE_2D,Pe,Ce,de.width,de.height);else{let pe=de.width,ue=de.height;for(let Me=0;Me<Pe;Me++)t.texImage2D(n.TEXTURE_2D,Me,Ce,pe,ue,0,Se,Ee,null),pe>>=1,ue>>=1}}else if(We.length>0){if(F&&we){const pe=ce(We[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Ce,pe.width,pe.height)}for(let pe=0,ue=We.length;pe<ue;pe++)ve=We[pe],F?_e&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Se,Ee,ve):t.texImage2D(n.TEXTURE_2D,pe,Ce,Se,Ee,ve);_.generateMipmaps=!1}else if(F){if(we){const pe=ce(de);t.texStorage2D(n.TEXTURE_2D,Pe,Ce,pe.width,pe.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ee,de)}else t.texImage2D(n.TEXTURE_2D,0,Ce,Se,Ee,de);m(_)&&h(k),Te.__version=G.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function I(S,_,L){if(_.image.length!==6)return;const k=ze(S,_),te=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);const G=i.get(te);if(te.version!==G.__version||k===!0){t.activeTexture(n.TEXTURE0+L);const Te=tt.getPrimaries(tt.workingColorSpace),he=_.colorSpace===yi?null:tt.getPrimaries(_.colorSpace),Re=_.colorSpace===yi||Te===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Fe=_.isCompressedTexture||_.image[0].isCompressedTexture,de=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let ue=0;ue<6;ue++)!Fe&&!de?Se[ue]=x(_.image[ue],!0,r.maxCubemapSize):Se[ue]=de?_.image[ue].image:_.image[ue],Se[ue]=se(_,Se[ue]);const Ee=Se[0],Ce=s.convert(_.format,_.colorSpace),ve=s.convert(_.type),We=b(_.internalFormat,Ce,ve,_.colorSpace),F=_.isVideoTexture!==!0,we=G.__version===void 0||k===!0,_e=te.dataReady;let Pe=R(_,Ee);Ue(n.TEXTURE_CUBE_MAP,_);let pe;if(Fe){F&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,We,Ee.width,Ee.height);for(let ue=0;ue<6;ue++){pe=Se[ue].mipmaps;for(let Me=0;Me<pe.length;Me++){const Ge=pe[Me];_.format!==vn?Ce!==null?F?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me,0,0,Ge.width,Ge.height,Ce,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me,We,Ge.width,Ge.height,0,Ge.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me,0,0,Ge.width,Ge.height,Ce,ve,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me,We,Ge.width,Ge.height,0,Ce,ve,Ge.data)}}}else{if(pe=_.mipmaps,F&&we){pe.length>0&&Pe++;const ue=ce(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,We,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(de){F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Se[ue].width,Se[ue].height,Ce,ve,Se[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,We,Se[ue].width,Se[ue].height,0,Ce,ve,Se[ue].data);for(let Me=0;Me<pe.length;Me++){const pt=pe[Me].image[ue].image;F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me+1,0,0,pt.width,pt.height,Ce,ve,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me+1,We,pt.width,pt.height,0,Ce,ve,pt.data)}}else{F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ce,ve,Se[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,We,Ce,ve,Se[ue]);for(let Me=0;Me<pe.length;Me++){const Ge=pe[Me];F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me+1,0,0,Ce,ve,Ge.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me+1,We,Ce,ve,Ge.image[ue])}}}m(_)&&h(n.TEXTURE_CUBE_MAP),G.__version=te.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ie(S,_,L,k,te,G){const Te=s.convert(L.format,L.colorSpace),he=s.convert(L.type),Re=b(L.internalFormat,Te,he,L.colorSpace),Fe=i.get(_),de=i.get(L);if(de.__renderTarget=_,!Fe.__hasExternalTextures){const Se=Math.max(1,_.width>>G),Ee=Math.max(1,_.height>>G);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,G,Re,Se,Ee,_.depth,0,Te,he,null):t.texImage2D(te,G,Re,Se,Ee,0,Te,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),fe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,te,de.__webglTexture,0,A(_)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,te,de.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(S,_,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const k=_.depthTexture,te=k&&k.isDepthTexture?k.type:null,G=y(_.stencilBuffer,te),Te=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(_),G,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(_),G,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,G,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,S)}else{const k=_.textures;for(let te=0;te<k.length;te++){const G=k[te],Te=s.convert(G.format,G.colorSpace),he=s.convert(G.type),Re=b(G.internalFormat,Te,he,G.colorSpace);fe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(_),Re,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(_),Re,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Re,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(S,_,L){const k=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(_.depthTexture);if(te.__renderTarget=_,(!te.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if(te.__webglInit===void 0&&(te.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,_.depthTexture);const Fe=s.convert(_.depthTexture.format),de=s.convert(_.depthTexture.type);let Se;_.depthTexture.format===fi?Se=n.DEPTH_COMPONENT24:_.depthTexture.format===Yi&&(Se=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Se,_.width,_.height,0,Fe,de,null)}}else ne(_.depthTexture,0);const G=te.__webglTexture,Te=A(_),he=k?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,Re=_.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===fi)fe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,he,G,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Re,he,G,0);else if(_.depthTexture.format===Yi)fe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,he,G,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Re,he,G,0);else throw new Error("Unknown depthTexture format")}function De(S){const _=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const k=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",te)};k.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=k}if(S.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let k=0;k<6;k++)oe(_.__webglFramebuffer[k],S,k);else{const k=S.texture.mipmaps;k&&k.length>0?oe(_.__webglFramebuffer[0],S,0):oe(_.__webglFramebuffer,S,0)}else if(L){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=n.createRenderbuffer(),ae(_.__webglDepthbuffer[k],S,!1);else{const te=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,G)}}else{const k=S.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ae(_.__webglDepthbuffer,S,!1);else{const te=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(S,_,L){const k=i.get(S);_!==void 0&&ie(k.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&De(S)}function C(S){const _=S.texture,L=i.get(S),k=i.get(_);S.addEventListener("dispose",P);const te=S.textures,G=S.isWebGLCubeRenderTarget===!0,Te=te.length>1;if(Te||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=_.version,o.memory.textures++),G){L.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[he]=[];for(let Re=0;Re<_.mipmaps.length;Re++)L.__webglFramebuffer[he][Re]=n.createFramebuffer()}else L.__webglFramebuffer[he]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)L.__webglFramebuffer[he]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(Te)for(let he=0,Re=te.length;he<Re;he++){const Fe=i.get(te[he]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&fe(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){const Re=te[he];L.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[he]);const Fe=s.convert(Re.format,Re.colorSpace),de=s.convert(Re.type),Se=b(Re.internalFormat,Fe,de,Re.colorSpace,S.isXRRenderTarget===!0),Ee=A(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Se,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,L.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)ie(L.__webglFramebuffer[he][Re],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re);else ie(L.__webglFramebuffer[he],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let he=0,Re=te.length;he<Re;he++){const Fe=te[he],de=i.get(Fe);let Se=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Se=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,de.__webglTexture),Ue(Se,Fe),ie(L.__webglFramebuffer,S,Fe,n.COLOR_ATTACHMENT0+he,Se,0),m(Fe)&&h(Se)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(he=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,k.__webglTexture),Ue(he,_),_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)ie(L.__webglFramebuffer[Re],S,_,n.COLOR_ATTACHMENT0,he,Re);else ie(L.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,he,0);m(_)&&h(he),t.unbindTexture()}S.depthBuffer&&De(S)}function N(S){const _=S.textures;for(let L=0,k=_.length;L<k;L++){const te=_[L];if(m(te)){const G=v(S),Te=i.get(te).__webglTexture;t.bindTexture(G,Te),h(G),t.unbindTexture()}}}const $=[],Y=[];function Q(S){if(S.samples>0){if(fe(S)===!1){const _=S.textures,L=S.width,k=S.height;let te=n.COLOR_BUFFER_BIT;const G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(S),he=_.length>1;if(he)for(let Fe=0;Fe<_.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Re=S.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Fe=0;Fe<_.length;Fe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Fe]);const de=i.get(_[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,L,k,0,0,L,k,te,n.NEAREST),l===!0&&($.length=0,Y.length=0,$.push(n.COLOR_ATTACHMENT0+Fe),S.depthBuffer&&S.resolveDepthBuffer===!1&&($.push(G),Y.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Fe=0;Fe<_.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Fe]);const de=i.get(_[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function A(S){return Math.min(r.maxSamples,S.samples)}function fe(S){const _=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function le(S){const _=o.render.frame;u.get(S)!==_&&(u.set(S,_),S.update())}function se(S,_){const L=S.colorSpace,k=S.format,te=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==Lr&&L!==yi&&(tt.getTransfer(L)===ut?(k!==vn||te!==on)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",L)),_}function ce(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=q,this.setTexture2D=ne,this.setTexture2DArray=W,this.setTexture3D=B,this.setTextureCube=Z,this.rebindTextures=w,this.setupRenderTarget=C,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function RE(n,e){function t(i,r=yi){let s;const o=tt.getTransfer(r);if(i===on)return n.UNSIGNED_BYTE;if(i===kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hh)return n.BYTE;if(i===Gh)return n.SHORT;if(i===Ss)return n.UNSIGNED_SHORT;if(i===Gc)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===ui)return n.HALF_FLOAT;if(i===Xh)return n.ALPHA;if(i===qh)return n.RGB;if(i===vn)return n.RGBA;if(i===fi)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===Yh)return n.RED;if(i===Xc)return n.RED_INTEGER;if(i===Dr)return n.RG;if(i===qc)return n.RG_INTEGER;if(i===Yc)return n.RGBA_INTEGER;if(i===mo||i===go||i===_o||i===xo)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===Pl||i===Dl||i===Ll)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===Vl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Il||i===Ul)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fl)return s.COMPRESSED_R11_EAC;if(i===Ol)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Bl)return s.COMPRESSED_RG11_EAC;if(i===Vl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zl||i===Hl||i===Gl||i===kl||i===Wl||i===Xl||i===ql||i===Yl||i===jl||i===$l||i===Kl||i===Zl||i===Jl||i===Ql)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$l)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ql)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ec||i===tc||i===nc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ec)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ic||i===rc||i===sc||i===oc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ic)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const CE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new lp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gn({vertexShader:CE,fragmentShader:PE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Hn(new Ko(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LE extends Or{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new DE,h={},v=t.getContextAttributes();let b=null,y=null;const R=[],D=[],P=new rt;let V=null;const M=new sn;M.viewport=new Et;const T=new sn;T.viewport=new Et;const U=[M,T],q=new G0;let z=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let I=R[re];return I===void 0&&(I=new Ga,R[re]=I),I.getTargetRaySpace()},this.getControllerGrip=function(re){let I=R[re];return I===void 0&&(I=new Ga,R[re]=I),I.getGripSpace()},this.getHand=function(re){let I=R[re];return I===void 0&&(I=new Ga,R[re]=I),I.getHandSpace()};function ne(re){const I=D.indexOf(re.inputSource);if(I===-1)return;const ie=R[I];ie!==void 0&&(ie.update(re.inputSource,re.frame,c||o),ie.dispatchEvent({type:re.type,data:re.inputSource}))}function W(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",B);for(let re=0;re<R.length;re++){const I=D[re];I!==null&&(D[re]=null,R[re].disconnect(I))}z=null,ee=null,m.reset();for(const re in h)delete h[re];e.setRenderTarget(b),p=null,d=null,f=null,r=null,y=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(V),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",W),r.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ae=null,oe=null;v.depth&&(oe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?Yi:fi,ae=v.stencil?Ms:Vn);const De={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new On(d.textureWidth,d.textureHeight,{format:vn,type:on,depthTexture:new bs(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new On(p.framebufferWidth,p.framebufferHeight,{format:vn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(re){for(let I=0;I<re.removed.length;I++){const ie=re.removed[I],ae=D.indexOf(ie);ae>=0&&(D[ae]=null,R[ae].disconnect(ie))}for(let I=0;I<re.added.length;I++){const ie=re.added[I];let ae=D.indexOf(ie);if(ae===-1){for(let De=0;De<R.length;De++)if(De>=D.length){D.push(ie),ae=De;break}else if(D[De]===null){D[De]=ie,ae=De;break}if(ae===-1)break}const oe=R[ae];oe&&oe.connect(ie)}}const Z=new X,xe=new X;function ge(re,I,ie){Z.setFromMatrixPosition(I.matrixWorld),xe.setFromMatrixPosition(ie.matrixWorld);const ae=Z.distanceTo(xe),oe=I.projectionMatrix.elements,De=ie.projectionMatrix.elements,w=oe[14]/(oe[10]-1),C=oe[14]/(oe[10]+1),N=(oe[9]+1)/oe[5],$=(oe[9]-1)/oe[5],Y=(oe[8]-1)/oe[0],Q=(De[8]+1)/De[0],A=w*Y,fe=w*Q,le=ae/(-Y+Q),se=le*-Y;if(I.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(se),re.translateZ(le),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),oe[10]===-1)re.projectionMatrix.copy(I.projectionMatrix),re.projectionMatrixInverse.copy(I.projectionMatrixInverse);else{const ce=w+le,S=C+le,_=A-se,L=fe+(ae-se),k=N*C/S*ce,te=$*C/S*ce;re.projectionMatrix.makePerspective(_,L,k,te,ce,S),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function me(re,I){I===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(I.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let I=re.near,ie=re.far;m.texture!==null&&(m.depthNear>0&&(I=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),q.near=T.near=M.near=I,q.far=T.far=M.far=ie,(z!==q.near||ee!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),z=q.near,ee=q.far),q.layers.mask=re.layers.mask|6,M.layers.mask=q.layers.mask&3,T.layers.mask=q.layers.mask&5;const ae=re.parent,oe=q.cameras;me(q,ae);for(let De=0;De<oe.length;De++)me(oe[De],ae);oe.length===2?ge(q,M,T):q.projectionMatrix.copy(M.projectionMatrix),Ue(re,q,ae)};function Ue(re,I,ie){ie===null?re.matrix.copy(I.matrixWorld):(re.matrix.copy(ie.matrixWorld),re.matrix.invert(),re.matrix.multiply(I.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(I.projectionMatrix),re.projectionMatrixInverse.copy(I.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ac*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(re){return h[re]};let ze=null;function Je(re,I){if(u=I.getViewerPose(c||o),g=I,u!==null){const ie=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ae=!1;ie.length!==q.cameras.length&&(q.cameras.length=0,ae=!0);for(let C=0;C<ie.length;C++){const N=ie[C];let $=null;if(p!==null)$=p.getViewport(N);else{const Q=f.getViewSubImage(d,N);$=Q.viewport,C===0&&(e.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(y))}let Y=U[C];Y===void 0&&(Y=new sn,Y.layers.enable(C),Y.viewport=new Et,U[C]=Y),Y.matrix.fromArray(N.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(N.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set($.x,$.y,$.width,$.height),C===0&&(q.matrix.copy(Y.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ae===!0&&q.cameras.push(Y)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const C=f.getDepthInformation(ie[0]);C&&C.isValid&&C.texture&&m.init(C,r.renderState)}if(oe&&oe.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<ie.length;C++){const N=ie[C].camera;if(N){let $=h[N];$||($=new lp,h[N]=$);const Y=f.getCameraImage(N);$.sourceTexture=Y}}}}for(let ie=0;ie<R.length;ie++){const ae=D[ie],oe=R[ie];ae!==null&&oe!==void 0&&oe.update(ae,I,c||o)}ze&&ze(re,I),I.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:I}),g=null}const Ze=new cp;Ze.setAnimationLoop(Je),this.setAnimationLoop=function(re){ze=re},this.dispose=function(){}}}const zi=new zn,IE=new xt;function UE(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,ip(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,b,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,b):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Kt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Kt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),b=v.envMap,y=v.envMapRotation;b&&(m.envMap.value=b,zi.copy(y),zi.x*=-1,zi.y*=-1,zi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(IE.makeRotationFromEuler(zi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=b*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Kt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function NE(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const y=b.program;i.uniformBlockBinding(v,y)}function c(v,b){let y=r[v.id];y===void 0&&(g(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",m));const R=b.program;i.updateUBOMapping(v,R);const D=e.render.frame;s[v.id]!==D&&(d(v),s[v.id]=D)}function u(v){const b=f();v.__bindingPointIndex=b;const y=n.createBuffer(),R=v.__size,D=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const b=r[v.id],y=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,P=y.length;D<P;D++){const V=Array.isArray(y[D])?y[D]:[y[D]];for(let M=0,T=V.length;M<T;M++){const U=V[M];if(p(U,D,M,R)===!0){const q=U.__offset,z=Array.isArray(U.value)?U.value:[U.value];let ee=0;for(let ne=0;ne<z.length;ne++){const W=z[ne],B=x(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,q+ee,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,ee),ee+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,b,y,R){const D=v.value,P=b+"_"+y;if(R[P]===void 0)return typeof D=="number"||typeof D=="boolean"?R[P]=D:R[P]=D.clone(),!0;{const V=R[P];if(typeof D=="number"||typeof D=="boolean"){if(V!==D)return R[P]=D,!0}else if(V.equals(D)===!1)return V.copy(D),!0}return!1}function g(v){const b=v.uniforms;let y=0;const R=16;for(let P=0,V=b.length;P<V;P++){const M=Array.isArray(b[P])?b[P]:[b[P]];for(let T=0,U=M.length;T<U;T++){const q=M[T],z=Array.isArray(q.value)?q.value:[q.value];for(let ee=0,ne=z.length;ee<ne;ee++){const W=z[ee],B=x(W),Z=y%R,xe=Z%B.boundary,ge=Z+xe;y+=xe,ge!==0&&R-ge<B.storage&&(y+=R-ge),q.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=y,y+=B.storage}}}const D=y%R;return D>0&&(y+=R-D),v.__size=y,v.__cache={},this}function x(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const FE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function OE(){return wn===null&&(wn=new R0(FE,16,16,Dr,ui),wn.name="DFG_LUT",wn.minFilter=Ft,wn.magFilter=Ft,wn.wrapS=ni,wn.wrapT=ni,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class Wf{constructor(e={}){const{canvas:t=n0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=on}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=p,m=new Set([Yc,qc,Xc]),h=new Set([on,Vn,Ss,Ms,kc,Wc]),v=new Uint32Array(4),b=new Int32Array(4);let y=null,R=null;const D=[],P=[];let V=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let T=!1;this._outputColorSpace=un;let U=0,q=0,z=null,ee=-1,ne=null;const W=new Et,B=new Et;let Z=null;const xe=new et(0);let ge=0,me=t.width,Ue=t.height,ze=1,Je=null,Ze=null;const re=new Et(0,0,me,Ue),I=new Et(0,0,me,Ue);let ie=!1;const ae=new Jc;let oe=!1,De=!1;const w=new xt,C=new X,N=new Et,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function Q(){return z===null?ze:1}let A=i;function fe(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hc}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",lt,!1),A===null){const O="webgl2";if(A=fe(O,E),A===null)throw fe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw it("WebGLRenderer: "+E.message),E}let le,se,ce,S,_,L,k,te,G,Te,he,Re,Fe,de,Se,Ee,Ce,ve,We,F,we,_e,Pe,pe;function ue(){le=new OS(A),le.init(),_e=new RE(A,le),se=new RS(A,le,e,_e),ce=new AE(A,le),se.reversedDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),S=new zS(A),_=new fE,L=new wE(A,le,ce,_,se,_e,S),k=new PS(M),te=new FS(M),G=new W0(A),Pe=new AS(A,G),Te=new BS(A,G,S,Pe),he=new GS(A,Te,G,S),We=new HS(A,se,L),Ee=new CS(_),Re=new uE(M,k,te,le,se,Pe,Ee),Fe=new UE(M,_),de=new hE,Se=new vE(le),ve=new TS(M,k,te,ce,he,g,l),Ce=new yE(M,he,se),pe=new NE(A,S,se,ce),F=new wS(A,le,S),we=new VS(A,le,S),S.programs=Re.programs,M.capabilities=se,M.extensions=le,M.properties=_,M.renderLists=de,M.shadowMap=Ce,M.state=ce,M.info=S}ue(),x!==on&&(V=new WS(x,t.width,t.height,r,s));const Me=new LE(M,A);this.xr=Me,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(E){E!==void 0&&(ze=E,this.setSize(me,Ue,!1))},this.getSize=function(E){return E.set(me,Ue)},this.setSize=function(E,O,J=!0){if(Me.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}me=E,Ue=O,t.width=Math.floor(E*ze),t.height=Math.floor(O*ze),J===!0&&(t.style.width=E+"px",t.style.height=O+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(me*ze,Ue*ze).floor()},this.setDrawingBufferSize=function(E,O,J){me=E,Ue=O,ze=J,t.width=Math.floor(E*J),t.height=Math.floor(O*J),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(x===on){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(W)},this.getViewport=function(E){return E.copy(re)},this.setViewport=function(E,O,J,j){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,O,J,j),ce.viewport(W.copy(re).multiplyScalar(ze).round())},this.getScissor=function(E){return E.copy(I)},this.setScissor=function(E,O,J,j){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,O,J,j),ce.scissor(B.copy(I).multiplyScalar(ze).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(E){ce.setScissorTest(ie=E)},this.setOpaqueSort=function(E){Je=E},this.setTransparentSort=function(E){Ze=E},this.getClearColor=function(E){return E.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,J=!0){let j=0;if(E){let H=!1;if(z!==null){const be=z.texture.format;H=m.has(be)}if(H){const be=z.texture.type,Le=h.has(be),Ae=ve.getClearColor(),Ie=ve.getClearAlpha(),Oe=Ae.r,He=Ae.g,Be=Ae.b;Le?(v[0]=Oe,v[1]=He,v[2]=Be,v[3]=Ie,A.clearBufferuiv(A.COLOR,0,v)):(b[0]=Oe,b[1]=He,b[2]=Be,b[3]=Ie,A.clearBufferiv(A.COLOR,0,b))}else j|=A.COLOR_BUFFER_BIT}O&&(j|=A.DEPTH_BUFFER_BIT),J&&(j|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),ve.dispose(),de.dispose(),Se.dispose(),_.dispose(),k.dispose(),te.dispose(),he.dispose(),Pe.dispose(),pe.dispose(),Re.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",lu),Me.removeEventListener("sessionend",cu),Di.stop()};function Ge(E){E.preventDefault(),Zu("WebGLRenderer: Context Lost."),T=!0}function pt(){Zu("WebGLRenderer: Context Restored."),T=!1;const E=S.autoReset,O=Ce.enabled,J=Ce.autoUpdate,j=Ce.needsUpdate,H=Ce.type;ue(),S.autoReset=E,Ce.enabled=O,Ce.autoUpdate=J,Ce.needsUpdate=j,Ce.type=H}function lt(E){it("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Tn(E){const O=E.target;O.removeEventListener("dispose",Tn),kn(O)}function kn(E){Zp(E),_.remove(E)}function Zp(E){const O=_.get(E).programs;O!==void 0&&(O.forEach(function(J){Re.releaseProgram(J)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,J,j,H,be){O===null&&(O=$);const Le=H.isMesh&&H.matrixWorld.determinant()<0,Ae=Qp(E,O,J,j,H);ce.setMaterial(j,Le);let Ie=J.index,Oe=1;if(j.wireframe===!0){if(Ie=Te.getWireframeAttribute(J),Ie===void 0)return;Oe=2}const He=J.drawRange,Be=J.attributes.position;let Ke=He.start*Oe,ft=(He.start+He.count)*Oe;be!==null&&(Ke=Math.max(Ke,be.start*Oe),ft=Math.min(ft,(be.start+be.count)*Oe)),Ie!==null?(Ke=Math.max(Ke,0),ft=Math.min(ft,Ie.count)):Be!=null&&(Ke=Math.max(Ke,0),ft=Math.min(ft,Be.count));const vt=ft-Ke;if(vt<0||vt===1/0)return;Pe.setup(H,j,Ae,J,Ie);let St,dt=F;if(Ie!==null&&(St=G.get(Ie),dt=we,dt.setIndex(St)),H.isMesh)j.wireframe===!0?(ce.setLineWidth(j.wireframeLinewidth*Q()),dt.setMode(A.LINES)):dt.setMode(A.TRIANGLES);else if(H.isLine){let Ve=j.linewidth;Ve===void 0&&(Ve=1),ce.setLineWidth(Ve*Q()),H.isLineSegments?dt.setMode(A.LINES):H.isLineLoop?dt.setMode(A.LINE_LOOP):dt.setMode(A.LINE_STRIP)}else H.isPoints?dt.setMode(A.POINTS):H.isSprite&&dt.setMode(A.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Es("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))dt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ve=H._multiDrawStarts,ct=H._multiDrawCounts,nt=H._multiDrawCount,Qt=Ie?G.get(Ie).bytesPerElement:1,tr=_.get(j).currentProgram.getUniforms();for(let en=0;en<nt;en++)tr.setValue(A,"_gl_DrawID",en),dt.render(Ve[en]/Qt,ct[en])}else if(H.isInstancedMesh)dt.renderInstances(Ke,vt,H.count);else if(J.isInstancedBufferGeometry){const Ve=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ct=Math.min(J.instanceCount,Ve);dt.renderInstances(Ke,vt,ct)}else dt.render(Ke,vt)};function au(E,O,J){E.transparent===!0&&E.side===ti&&E.forceSinglePass===!1?(E.side=Kt,E.needsUpdate=!0,Ns(E,O,J),E.side=Ci,E.needsUpdate=!0,Ns(E,O,J),E.side=ti):Ns(E,O,J)}this.compile=function(E,O,J=null){J===null&&(J=E),R=Se.get(J),R.init(O),P.push(R),J.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),E!==J&&E.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),R.setupLights();const j=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const be=H.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){const Ae=be[Le];au(Ae,J,H),j.add(Ae)}else au(be,J,H),j.add(be)}),R=P.pop(),j},this.compileAsync=function(E,O,J=null){const j=this.compile(E,O,J);return new Promise(H=>{function be(){if(j.forEach(function(Le){_.get(Le).currentProgram.isReady()&&j.delete(Le)}),j.size===0){H(E);return}setTimeout(be,10)}le.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let sa=null;function Jp(E){sa&&sa(E)}function lu(){Di.stop()}function cu(){Di.start()}const Di=new cp;Di.setAnimationLoop(Jp),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(E){sa=E,Me.setAnimationLoop(E),E===null?Di.stop():Di.start()},Me.addEventListener("sessionstart",lu),Me.addEventListener("sessionend",cu),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const J=Me.enabled===!0&&Me.isPresenting===!0,j=V!==null&&(z===null||J)&&V.begin(M,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(O),O=Me.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,O,z),R=Se.get(E,P.length),R.init(O),P.push(R),w.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ae.setFromProjectionMatrix(w,Un,O.reversedDepth),De=this.localClippingEnabled,oe=Ee.init(this.clippingPlanes,De),y=de.get(E,D.length),y.init(),D.push(y),Me.enabled===!0&&Me.isPresenting===!0){const Le=M.xr.getDepthSensingMesh();Le!==null&&oa(Le,O,-1/0,M.sortObjects)}oa(E,O,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(Je,Ze),Y=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Y&&ve.addToRenderList(y,E),this.info.render.frame++,oe===!0&&Ee.beginShadows();const H=R.state.shadowsArray;if(Ce.render(H,E,O),oe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&V.hasRenderPass())===!1){const Le=y.opaque,Ae=y.transmissive;if(R.setupLights(),O.isArrayCamera){const Ie=O.cameras;if(Ae.length>0)for(let Oe=0,He=Ie.length;Oe<He;Oe++){const Be=Ie[Oe];fu(Le,Ae,E,Be)}Y&&ve.render(E);for(let Oe=0,He=Ie.length;Oe<He;Oe++){const Be=Ie[Oe];uu(y,E,Be,Be.viewport)}}else Ae.length>0&&fu(Le,Ae,E,O),Y&&ve.render(E),uu(y,E,O)}z!==null&&q===0&&(L.updateMultisampleRenderTarget(z),L.updateRenderTargetMipmap(z)),j&&V.end(M),E.isScene===!0&&E.onAfterRender(M,E,O),Pe.resetDefaultState(),ee=-1,ne=null,P.pop(),P.length>0?(R=P[P.length-1],oe===!0&&Ee.setGlobalState(M.clippingPlanes,R.state.camera)):R=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function oa(E,O,J,j){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)R.pushLight(E),E.castShadow&&R.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ae.intersectsSprite(E)){j&&N.setFromMatrixPosition(E.matrixWorld).applyMatrix4(w);const Le=he.update(E),Ae=E.material;Ae.visible&&y.push(E,Le,Ae,J,N.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ae.intersectsObject(E))){const Le=he.update(E),Ae=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),N.copy(E.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),N.copy(Le.boundingSphere.center)),N.applyMatrix4(E.matrixWorld).applyMatrix4(w)),Array.isArray(Ae)){const Ie=Le.groups;for(let Oe=0,He=Ie.length;Oe<He;Oe++){const Be=Ie[Oe],Ke=Ae[Be.materialIndex];Ke&&Ke.visible&&y.push(E,Le,Ke,J,N.z,Be)}}else Ae.visible&&y.push(E,Le,Ae,J,N.z,null)}}const be=E.children;for(let Le=0,Ae=be.length;Le<Ae;Le++)oa(be[Le],O,J,j)}function uu(E,O,J,j){const{opaque:H,transmissive:be,transparent:Le}=E;R.setupLightsView(J),oe===!0&&Ee.setGlobalState(M.clippingPlanes,J),j&&ce.viewport(W.copy(j)),H.length>0&&Us(H,O,J),be.length>0&&Us(be,O,J),Le.length>0&&Us(Le,O,J),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function fu(E,O,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[j.id]===void 0){const Ke=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[j.id]=new On(1,1,{generateMipmaps:!0,type:Ke?ui:on,minFilter:qi,samples:se.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const be=R.state.transmissionRenderTarget[j.id],Le=j.viewport||W;be.setSize(Le.z*M.transmissionResolutionScale,Le.w*M.transmissionResolutionScale);const Ae=M.getRenderTarget(),Ie=M.getActiveCubeFace(),Oe=M.getActiveMipmapLevel();M.setRenderTarget(be),M.getClearColor(xe),ge=M.getClearAlpha(),ge<1&&M.setClearColor(16777215,.5),M.clear(),Y&&ve.render(J);const He=M.toneMapping;M.toneMapping=Fn;const Be=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),R.setupLightsView(j),oe===!0&&Ee.setGlobalState(M.clippingPlanes,j),Us(E,J,j),L.updateMultisampleRenderTarget(be),L.updateRenderTargetMipmap(be),le.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let ft=0,vt=O.length;ft<vt;ft++){const St=O[ft],{object:dt,geometry:Ve,material:ct,group:nt}=St;if(ct.side===ti&&dt.layers.test(j.layers)){const Qt=ct.side;ct.side=Kt,ct.needsUpdate=!0,du(dt,J,j,Ve,ct,nt),ct.side=Qt,ct.needsUpdate=!0,Ke=!0}}Ke===!0&&(L.updateMultisampleRenderTarget(be),L.updateRenderTargetMipmap(be))}M.setRenderTarget(Ae,Ie,Oe),M.setClearColor(xe,ge),Be!==void 0&&(j.viewport=Be),M.toneMapping=He}function Us(E,O,J){const j=O.isScene===!0?O.overrideMaterial:null;for(let H=0,be=E.length;H<be;H++){const Le=E[H],{object:Ae,geometry:Ie,group:Oe}=Le;let He=Le.material;He.allowOverride===!0&&j!==null&&(He=j),Ae.layers.test(J.layers)&&du(Ae,O,J,Ie,He,Oe)}}function du(E,O,J,j,H,be){E.onBeforeRender(M,O,J,j,H,be),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(M,O,J,j,E,be),H.transparent===!0&&H.side===ti&&H.forceSinglePass===!1?(H.side=Kt,H.needsUpdate=!0,M.renderBufferDirect(J,O,j,H,E,be),H.side=Ci,H.needsUpdate=!0,M.renderBufferDirect(J,O,j,H,E,be),H.side=ti):M.renderBufferDirect(J,O,j,H,E,be),E.onAfterRender(M,O,J,j,H,be)}function Ns(E,O,J){O.isScene!==!0&&(O=$);const j=_.get(E),H=R.state.lights,be=R.state.shadowsArray,Le=H.state.version,Ae=Re.getParameters(E,H.state,be,O,J),Ie=Re.getProgramCacheKey(Ae);let Oe=j.programs;j.environment=E.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(E.isMeshStandardMaterial?te:k).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Oe===void 0&&(E.addEventListener("dispose",Tn),Oe=new Map,j.programs=Oe);let He=Oe.get(Ie);if(He!==void 0){if(j.currentProgram===He&&j.lightsStateVersion===Le)return pu(E,Ae),He}else Ae.uniforms=Re.getUniforms(E),E.onBeforeCompile(Ae,M),He=Re.acquireProgram(Ae,Ie),Oe.set(Ie,He),j.uniforms=Ae.uniforms;const Be=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=Ee.uniform),pu(E,Ae),j.needsLights=tm(E),j.lightsStateVersion=Le,j.needsLights&&(Be.ambientLightColor.value=H.state.ambient,Be.lightProbe.value=H.state.probe,Be.directionalLights.value=H.state.directional,Be.directionalLightShadows.value=H.state.directionalShadow,Be.spotLights.value=H.state.spot,Be.spotLightShadows.value=H.state.spotShadow,Be.rectAreaLights.value=H.state.rectArea,Be.ltc_1.value=H.state.rectAreaLTC1,Be.ltc_2.value=H.state.rectAreaLTC2,Be.pointLights.value=H.state.point,Be.pointLightShadows.value=H.state.pointShadow,Be.hemisphereLights.value=H.state.hemi,Be.directionalShadowMap.value=H.state.directionalShadowMap,Be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Be.spotShadowMap.value=H.state.spotShadowMap,Be.spotLightMatrix.value=H.state.spotLightMatrix,Be.spotLightMap.value=H.state.spotLightMap,Be.pointShadowMap.value=H.state.pointShadowMap,Be.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=He,j.uniformsList=null,He}function hu(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=vo.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function pu(E,O){const J=_.get(E);J.outputColorSpace=O.outputColorSpace,J.batching=O.batching,J.batchingColor=O.batchingColor,J.instancing=O.instancing,J.instancingColor=O.instancingColor,J.instancingMorph=O.instancingMorph,J.skinning=O.skinning,J.morphTargets=O.morphTargets,J.morphNormals=O.morphNormals,J.morphColors=O.morphColors,J.morphTargetsCount=O.morphTargetsCount,J.numClippingPlanes=O.numClippingPlanes,J.numIntersection=O.numClipIntersection,J.vertexAlphas=O.vertexAlphas,J.vertexTangents=O.vertexTangents,J.toneMapping=O.toneMapping}function Qp(E,O,J,j,H){O.isScene!==!0&&(O=$),L.resetTextureUnits();const be=O.fog,Le=j.isMeshStandardMaterial?O.environment:null,Ae=z===null?M.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Lr,Ie=(j.isMeshStandardMaterial?te:k).get(j.envMap||Le),Oe=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,He=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Be=!!J.morphAttributes.position,Ke=!!J.morphAttributes.normal,ft=!!J.morphAttributes.color;let vt=Fn;j.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(vt=M.toneMapping);const St=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,dt=St!==void 0?St.length:0,Ve=_.get(j),ct=R.state.lights;if(oe===!0&&(De===!0||E!==ne)){const Vt=E===ne&&j.id===ee;Ee.setState(j,E,Vt)}let nt=!1;j.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ct.state.version||Ve.outputColorSpace!==Ae||H.isBatchedMesh&&Ve.batching===!1||!H.isBatchedMesh&&Ve.batching===!0||H.isBatchedMesh&&Ve.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ve.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ve.instancing===!1||!H.isInstancedMesh&&Ve.instancing===!0||H.isSkinnedMesh&&Ve.skinning===!1||!H.isSkinnedMesh&&Ve.skinning===!0||H.isInstancedMesh&&Ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ve.instancingMorph===!1&&H.morphTexture!==null||Ve.envMap!==Ie||j.fog===!0&&Ve.fog!==be||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ee.numPlanes||Ve.numIntersection!==Ee.numIntersection)||Ve.vertexAlphas!==Oe||Ve.vertexTangents!==He||Ve.morphTargets!==Be||Ve.morphNormals!==Ke||Ve.morphColors!==ft||Ve.toneMapping!==vt||Ve.morphTargetsCount!==dt)&&(nt=!0):(nt=!0,Ve.__version=j.version);let Qt=Ve.currentProgram;nt===!0&&(Qt=Ns(j,O,H));let tr=!1,en=!1,kr=!1;const mt=Qt.getUniforms(),qt=Ve.uniforms;if(ce.useProgram(Qt.program)&&(tr=!0,en=!0,kr=!0),j.id!==ee&&(ee=j.id,en=!0),tr||ne!==E){ce.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),mt.setValue(A,"projectionMatrix",E.projectionMatrix),mt.setValue(A,"viewMatrix",E.matrixWorldInverse);const Yt=mt.map.cameraPosition;Yt!==void 0&&Yt.setValue(A,C.setFromMatrixPosition(E.matrixWorld)),se.logarithmicDepthBuffer&&mt.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&mt.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),ne!==E&&(ne=E,en=!0,kr=!0)}if(Ve.needsLights&&(ct.state.directionalShadowMap.length>0&&mt.setValue(A,"directionalShadowMap",ct.state.directionalShadowMap,L),ct.state.spotShadowMap.length>0&&mt.setValue(A,"spotShadowMap",ct.state.spotShadowMap,L),ct.state.pointShadowMap.length>0&&mt.setValue(A,"pointShadowMap",ct.state.pointShadowMap,L)),H.isSkinnedMesh){mt.setOptional(A,H,"bindMatrix"),mt.setOptional(A,H,"bindMatrixInverse");const Vt=H.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),mt.setValue(A,"boneTexture",Vt.boneTexture,L))}H.isBatchedMesh&&(mt.setOptional(A,H,"batchingTexture"),mt.setValue(A,"batchingTexture",H._matricesTexture,L),mt.setOptional(A,H,"batchingIdTexture"),mt.setValue(A,"batchingIdTexture",H._indirectTexture,L),mt.setOptional(A,H,"batchingColorTexture"),H._colorsTexture!==null&&mt.setValue(A,"batchingColorTexture",H._colorsTexture,L));const ln=J.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&We.update(H,J,Qt),(en||Ve.receiveShadow!==H.receiveShadow)&&(Ve.receiveShadow=H.receiveShadow,mt.setValue(A,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(qt.envMap.value=Ie,qt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(qt.envMapIntensity.value=O.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=OE()),en&&(mt.setValue(A,"toneMappingExposure",M.toneMappingExposure),Ve.needsLights&&em(qt,kr),be&&j.fog===!0&&Fe.refreshFogUniforms(qt,be),Fe.refreshMaterialUniforms(qt,j,ze,Ue,R.state.transmissionRenderTarget[E.id]),vo.upload(A,hu(Ve),qt,L)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(vo.upload(A,hu(Ve),qt,L),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&mt.setValue(A,"center",H.center),mt.setValue(A,"modelViewMatrix",H.modelViewMatrix),mt.setValue(A,"normalMatrix",H.normalMatrix),mt.setValue(A,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Vt=j.uniformsGroups;for(let Yt=0,aa=Vt.length;Yt<aa;Yt++){const Li=Vt[Yt];pe.update(Li,Qt),pe.bind(Li,Qt)}}return Qt}function em(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function tm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,O,J){const j=_.get(E);j.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),_.get(E.texture).__webglTexture=O,_.get(E.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:J,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const J=_.get(E);J.__webglFramebuffer=O,J.__useDefaultFramebuffer=O===void 0};const nm=A.createFramebuffer();this.setRenderTarget=function(E,O=0,J=0){z=E,U=O,q=J;let j=null,H=!1,be=!1;if(E){const Ae=_.get(E);if(Ae.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(A.FRAMEBUFFER,Ae.__webglFramebuffer),W.copy(E.viewport),B.copy(E.scissor),Z=E.scissorTest,ce.viewport(W),ce.scissor(B),ce.setScissorTest(Z),ee=-1;return}else if(Ae.__webglFramebuffer===void 0)L.setupRenderTarget(E);else if(Ae.__hasExternalTextures)L.rebindTextures(E,_.get(E.texture).__webglTexture,_.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const He=E.depthTexture;if(Ae.__boundDepthTexture!==He){if(He!==null&&_.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(E)}}const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);const Oe=_.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?j=Oe[O][J]:j=Oe[O],H=!0):E.samples>0&&L.useMultisampledRTT(E)===!1?j=_.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?j=Oe[J]:j=Oe,W.copy(E.viewport),B.copy(E.scissor),Z=E.scissorTest}else W.copy(re).multiplyScalar(ze).floor(),B.copy(I).multiplyScalar(ze).floor(),Z=ie;if(J!==0&&(j=nm),ce.bindFramebuffer(A.FRAMEBUFFER,j)&&ce.drawBuffers(E,j),ce.viewport(W),ce.scissor(B),ce.setScissorTest(Z),H){const Ae=_.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ae.__webglTexture,J)}else if(be){const Ae=O;for(let Ie=0;Ie<E.textures.length;Ie++){const Oe=_.get(E.textures[Ie]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ie,Oe.__webglTexture,J,Ae)}}else if(E!==null&&J!==0){const Ae=_.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ae.__webglTexture,J)}ee=-1},this.readRenderTargetPixels=function(E,O,J,j,H,be,Le,Ae=0){if(!(E&&E.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=_.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie){ce.bindFramebuffer(A.FRAMEBUFFER,Ie);try{const Oe=E.textures[Ae],He=Oe.format,Be=Oe.type;if(!se.textureFormatReadable(He)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Be)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-j&&J>=0&&J<=E.height-H&&(E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ae),A.readPixels(O,J,j,H,_e.convert(He),_e.convert(Be),be))}finally{const Oe=z!==null?_.get(z).__webglFramebuffer:null;ce.bindFramebuffer(A.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(E,O,J,j,H,be,Le,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=_.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie)if(O>=0&&O<=E.width-j&&J>=0&&J<=E.height-H){ce.bindFramebuffer(A.FRAMEBUFFER,Ie);const Oe=E.textures[Ae],He=Oe.format,Be=Oe.type;if(!se.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ke),A.bufferData(A.PIXEL_PACK_BUFFER,be.byteLength,A.STREAM_READ),E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ae),A.readPixels(O,J,j,H,_e.convert(He),_e.convert(Be),0);const ft=z!==null?_.get(z).__webglFramebuffer:null;ce.bindFramebuffer(A.FRAMEBUFFER,ft);const vt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await i0(A,vt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ke),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,be),A.deleteBuffer(Ke),A.deleteSync(vt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,J=0){const j=Math.pow(2,-J),H=Math.floor(E.image.width*j),be=Math.floor(E.image.height*j),Le=O!==null?O.x:0,Ae=O!==null?O.y:0;L.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,J,0,0,Le,Ae,H,be),ce.unbindTexture()};const im=A.createFramebuffer(),rm=A.createFramebuffer();this.copyTextureToTexture=function(E,O,J=null,j=null,H=0,be=null){be===null&&(H!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=H,H=0):be=0);let Le,Ae,Ie,Oe,He,Be,Ke,ft,vt;const St=E.isCompressedTexture?E.mipmaps[be]:E.image;if(J!==null)Le=J.max.x-J.min.x,Ae=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,Oe=J.min.x,He=J.min.y,Be=J.isBox3?J.min.z:0;else{const ln=Math.pow(2,-H);Le=Math.floor(St.width*ln),Ae=Math.floor(St.height*ln),E.isDataArrayTexture?Ie=St.depth:E.isData3DTexture?Ie=Math.floor(St.depth*ln):Ie=1,Oe=0,He=0,Be=0}j!==null?(Ke=j.x,ft=j.y,vt=j.z):(Ke=0,ft=0,vt=0);const dt=_e.convert(O.format),Ve=_e.convert(O.type);let ct;O.isData3DTexture?(L.setTexture3D(O,0),ct=A.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(L.setTexture2DArray(O,0),ct=A.TEXTURE_2D_ARRAY):(L.setTexture2D(O,0),ct=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,O.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,O.unpackAlignment);const nt=A.getParameter(A.UNPACK_ROW_LENGTH),Qt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),tr=A.getParameter(A.UNPACK_SKIP_PIXELS),en=A.getParameter(A.UNPACK_SKIP_ROWS),kr=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,St.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,St.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Oe),A.pixelStorei(A.UNPACK_SKIP_ROWS,He),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Be);const mt=E.isDataArrayTexture||E.isData3DTexture,qt=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const ln=_.get(E),Vt=_.get(O),Yt=_.get(ln.__renderTarget),aa=_.get(Vt.__renderTarget);ce.bindFramebuffer(A.READ_FRAMEBUFFER,Yt.__webglFramebuffer),ce.bindFramebuffer(A.DRAW_FRAMEBUFFER,aa.__webglFramebuffer);for(let Li=0;Li<Ie;Li++)mt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_.get(E).__webglTexture,H,Be+Li),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_.get(O).__webglTexture,be,vt+Li)),A.blitFramebuffer(Oe,He,Le,Ae,Ke,ft,Le,Ae,A.DEPTH_BUFFER_BIT,A.NEAREST);ce.bindFramebuffer(A.READ_FRAMEBUFFER,null),ce.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||_.has(E)){const ln=_.get(E),Vt=_.get(O);ce.bindFramebuffer(A.READ_FRAMEBUFFER,im),ce.bindFramebuffer(A.DRAW_FRAMEBUFFER,rm);for(let Yt=0;Yt<Ie;Yt++)mt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ln.__webglTexture,H,Be+Yt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ln.__webglTexture,H),qt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Vt.__webglTexture,be,vt+Yt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Vt.__webglTexture,be),H!==0?A.blitFramebuffer(Oe,He,Le,Ae,Ke,ft,Le,Ae,A.COLOR_BUFFER_BIT,A.NEAREST):qt?A.copyTexSubImage3D(ct,be,Ke,ft,vt+Yt,Oe,He,Le,Ae):A.copyTexSubImage2D(ct,be,Ke,ft,Oe,He,Le,Ae);ce.bindFramebuffer(A.READ_FRAMEBUFFER,null),ce.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else qt?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(ct,be,Ke,ft,vt,Le,Ae,Ie,dt,Ve,St.data):O.isCompressedArrayTexture?A.compressedTexSubImage3D(ct,be,Ke,ft,vt,Le,Ae,Ie,dt,St.data):A.texSubImage3D(ct,be,Ke,ft,vt,Le,Ae,Ie,dt,Ve,St):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,be,Ke,ft,Le,Ae,dt,Ve,St.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,be,Ke,ft,St.width,St.height,dt,St.data):A.texSubImage2D(A.TEXTURE_2D,be,Ke,ft,Le,Ae,dt,Ve,St);A.pixelStorei(A.UNPACK_ROW_LENGTH,nt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Qt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,tr),A.pixelStorei(A.UNPACK_SKIP_ROWS,en),A.pixelStorei(A.UNPACK_SKIP_IMAGES,kr),be===0&&O.generateMipmaps&&A.generateMipmap(ct),ce.unbindTexture()},this.initRenderTarget=function(E){_.get(E).__webglFramebuffer===void 0&&L.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?L.setTextureCube(E,0):E.isData3DTexture?L.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?L.setTexture2DArray(E,0):L.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){U=0,q=0,z=null,ce.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const BE={class:"relative z-10 px-4 sm:px-6 w-full max-w-xl perspective-container"},VE={class:"relative w-full transition-all duration-700 ease-out",style:{"min-height":"580px","transform-style":"preserve-3d"}},zE={class:"absolute inset-0 flex backface-hidden",style:{transform:"translateZ(1px)"}},HE={class:"group bg-slate-900/70 border border-slate-700/50 rounded-3xl shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl px-6 sm:px-8 py-7 sm:py-8 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] w-full backface-hidden h-full flex flex-col"},GE={class:"flex flex-col items-center gap-4 mt-auto"},kE={class:"inline-flex items-baseline gap-2 rounded-2xl bg-slate-900/70 px-5 py-3 border border-slate-700/70 shadow-inner"},WE={class:"text-4xl sm:text-5xl font-semibold tabular-nums"},XE={class:"group bg-slate-900/80 border border-purple-500/40 rounded-3xl shadow-[0_24px_80px_rgba(30,27,75,0.9)] backdrop-blur-xl px-6 sm:px-8 py-7 sm:py-8 w-full h-full flex flex-col backface-hidden"},qE={class:"absolute inset-0 flex backface-hidden",style:{transform:"rotateY(180deg) translateZ(1px)"}},YE={class:"group bg-slate-900/80 border border-sky-500/40 rounded-3xl shadow-[0_24px_80px_rgba(8,47,73,0.9)] backdrop-blur-xl px-6 sm:px-8 py-7 sm:py-8 w-full backface-hidden h-full flex flex-col"},jE={class:"flex flex-col items-center gap-4 mt-2"},$E={class:"w-full max-w-xs"},KE={class:"rounded-2xl bg-slate-950/80 px-4 py-3 border border-slate-700/80 shadow-inner text-right"},ZE={class:"mt-1 text-2xl sm:text-3xl font-semibold tabular-nums break-all"},JE={class:"w-full max-w-xs grid grid-cols-4 gap-2 mt-3 text-sm select-none"},QE={__name:"App",setup(n){const e=Jn(0),t=Jn(null),i=Jn(null),r=Jn(0),s=Jn(!1),o=Jn(!1);ls(r,(h,v)=>{v===1&&h===2&&(s.value=!0),v===1&&h===0&&(s.value=!1)});const a=()=>{e.value++},l=()=>{e.value=0},c=()=>{o.value||u(0)},u=h=>{h!==r.value&&(o.value=!0,r.value=h,setTimeout(()=>{o.value=!1,h===0&&(s.value=!1)},700))},f=h=>{o.value||Math.abs(h.deltaY)<4||(h.deltaY>0?r.value<2&&u(r.value+1):r.value>0&&u(r.value-1))};let d=null;const p=h=>{h.touches&&h.touches.length>0&&(d=h.touches[0].clientY)},g=h=>{if(d===null||!h.changedTouches||h.changedTouches.length===0)return;if(o.value){d=null;return}const b=h.changedTouches[0].clientY-d,y=40;b<-y?r.value<2&&u(r.value+1):b>y&&r.value>0&&u(r.value-1),d=null},x=()=>{if(t.value&&camera&&renderer){const h=t.value.clientWidth,v=t.value.clientHeight||1;camera.aspect=h/v,camera.updateProjectionMatrix(),renderer.setSize(h,v)}if(bgCamera&&bgRenderer){const h=window.innerWidth,v=window.innerHeight;bgCamera.aspect=h/v,bgCamera.updateProjectionMatrix(),bgRenderer.setSize(h,v)}};Uc(()=>{setTimeout(()=>{m()},100)});const m=()=>{if(!t.value||!i.value)return;scene=new mf,camera=new sn(35,t.value.clientWidth/t.value.clientHeight,.1,1e3),camera.position.z=3,renderer=new Wf({alpha:!0,antialias:!0}),renderer.setPixelRatio(window.devicePixelRatio),renderer.setSize(t.value.clientWidth,t.value.clientHeight),t.value.appendChild(renderer.domElement);const h=new Vr,v=new N0({color:2784155});cube=new Hn(h,v),scene.add(cube);const b=new H0(16777215,1);b.position.set(5,5,5),scene.add(b);const y=()=>{cubeAnimationId=requestAnimationFrame(y),cube.rotation.x+=.02,cube.rotation.y+=.02,renderer.render(scene,camera)};y(),bgScene=new mf,bgRenderer=new Wf({alpha:!0,antialias:!0}),bgRenderer.setPixelRatio(window.devicePixelRatio),bgRenderer.setSize(window.innerWidth,window.innerHeight),bgRenderer.setClearColor(0,1),i.value.appendChild(bgRenderer.domElement),bgCamera=new sn(60,window.innerWidth/window.innerHeight,1,1e3),bgCamera.position.z=300,bgScene.fog=new Zc(132631,200,700);const R=1500,D=new Float32Array(R*3),P=new Float32Array(R*3),V=600;for(let z=0;z<R;z++){const ee=z*3;D[ee]=(Math.random()-.5)*V*2,D[ee+1]=(Math.random()-.5)*V*1.5,D[ee+2]=(Math.random()-.5)*V*2;const ne=new et,W=.58+Math.random()*.1,B=.4+Math.random()*.4,Z=.6+Math.random()*.3;ne.setHSL(W,B,Z),P[ee]=ne.r,P[ee+1]=ne.g,P[ee+2]=ne.b}const M=new bn;M.setAttribute("position",new hn(D,3)),M.setAttribute("color",new hn(P,3));const T=createStarTexture(),U=new ap({map:T,size:8,sizeAttenuation:!0,transparent:!0,vertexColors:!0,depthWrite:!1,blending:ml});bgParticles=new L0(M,U),bgScene.add(bgParticles);const q=()=>{bgAnimationId=requestAnimationFrame(q),bgParticles.rotation.y+=8e-4,bgParticles.rotation.x+=3e-4;const z=mouse.x*30,ee=mouse.y*15;bgParticles.position.x+=(z-bgParticles.position.x)*.05,bgParticles.position.y+=(ee-bgParticles.position.y)*.05,bgRenderer.render(bgScene,bgCamera)};q(),window.addEventListener("mousemove",onMouseMove),window.addEventListener("resize",x)};return Nc(()=>{cancelAnimationFrame(cubeAnimationId),cancelAnimationFrame(bgAnimationId),window.removeEventListener("mousemove",onMouseMove),window.removeEventListener("resize",x);const h=(v,b)=>{if(v){try{const y=v.getContext(),R=y&&y.getExtension("WEBGL_lose_context");R&&R.loseContext()}catch(y){console.warn("webgl destroy error",y)}v.dispose(),b&&v.domElement&&b.contains(v.domElement)&&b.removeChild(v.domElement)}};h(renderer,t.value),h(bgRenderer,i.value)}),(h,v)=>(Bc(),Vc("div",{class:"relative min-h-[100dvh] bg-slate-950 text-slate-100 flex items-center justify-center overflow-hidden touch-none",onWheelPassive:f,onTouchstartPassive:p,onTouchendPassive:g},[Ne("div",{ref_key:"bgContainer",ref:i,class:"pointer-events-none absolute inset-0 z-0"},null,512),v[28]||(v[28]=Ne("div",{class:"pointer-events-none absolute inset-0 z-0 opacity-70","aria-hidden":"true"},[Ne("div",{class:"absolute -top-40 right-10 h-72 w-72 bg-sky-500/40 blur-3xl rounded-full"}),Ne("div",{class:"absolute bottom-[-6rem] left-[-4rem] h-80 w-80 bg-indigo-500/40 blur-3xl rounded-full"})],-1)),Ne("div",BE,[Ne("div",VE,[Ne("div",{class:"relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-out",style:Ho({transform:`rotateY(${r.value*180}deg)`})},[Ne("div",zE,[vu(Ne("div",HE,[v[20]||(v[20]=ga('<div class="flex items-center gap-2 mb-4 text-xs font-medium text-slate-400"><span class="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span><span>Vue + Three.js + Tailwind playground</span></div><div class="mb-6 text-center"><h1 class="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 bg-gradient-to-r from-sky-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent"> Hello Vue Galaxy </h1><p class="text-sm sm:text-base text-slate-300/90"> This counter is powered by Vue reactivity, wrapped in a 3D galaxy background crafted with Three.js. </p></div>',2)),Ne("div",{ref_key:"threeContainer",ref:t,class:"w-full h-48 sm:h-56 mb-6 rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-700/70 shadow-inner shrink-0"},null,512),Ne("div",GE,[Ne("div",kE,[v[18]||(v[18]=Ne("span",{class:"text-xs uppercase tracking-[0.2em] text-slate-400"}," Count ",-1)),Ne("span",WE,bo(e.value),1)]),Ne("div",{class:"flex flex-col sm:flex-row gap-3 w-full max-w-xs"},[Ne("button",{class:"flex-1 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition-colors duration-150",onClick:a}," + Increment "),Ne("button",{class:"flex-1 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-800 text-sm font-semibold text-slate-100 border border-slate-600/70 transition-colors duration-150",onClick:l}," Reset ")]),v[19]||(v[19]=Ne("p",{class:"text-xs sm:text-sm text-slate-400 mt-1 text-center"},[Gi(" Scroll "),Ne("span",{class:"font-semibold text-slate-200"},"down"),Gi(" (or swipe up) to open the calculator. ")],-1))])],512),[[Iu,!s.value]]),vu(Ne("div",XE,[v[24]||(v[24]=ga('<div class="flex items-center gap-2 mb-4 text-xs font-medium text-purple-300/80"><span class="inline-flex h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span><span>Bonus Card • Vue 3D Magic</span></div><div class="mb-4 text-center"><h2 class="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"> You Found Me! </h2><p class="text-xs sm:text-sm text-slate-300/90"> I was hiding behind the calculator all along. </p></div>',2)),Ne("div",{class:"space-y-6 text-slate-300 text-sm sm:text-base text-center w-full max-w-sm mt-auto mx-auto"},[v[21]||(v[21]=Ne("p",null,' By rotating 360 degrees, we return to the "front" face, but the content has magically changed! ',-1)),v[22]||(v[22]=Ne("div",{class:"p-6 rounded-2xl bg-slate-950/50 border border-purple-500/20 shadow-inner flex flex-col gap-2"},[Ne("div",{class:"text-slate-400 text-xs uppercase tracking-widest"},"Current Rotation"),Ne("div",{class:"text-3xl font-mono text-purple-200"},"360°")],-1)),Ne("div",{class:"pt-4"},[Ne("button",{class:"w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-lg shadow-purple-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]",onClick:c}," Reset & Spin Back ")]),v[23]||(v[23]=Ne("p",{class:"text-[11px] sm:text-xs text-slate-400 mt-2"},[Gi(" Scroll "),Ne("span",{class:"font-semibold text-slate-200"},"up"),Gi(" or swipe down to go back. ")],-1))])],512),[[Iu,s.value]])]),Ne("div",qE,[Ne("div",YE,[v[27]||(v[27]=ga('<div class="flex items-center gap-2 mb-4 text-xs font-medium text-sky-300/80"><span class="inline-flex h-2 w-2 rounded-full bg-sky-400 animate-ping"></span><span>Galaxy Calculator • Back of the card</span></div><div class="mb-4 text-center"><h2 class="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 bg-gradient-to-r from-sky-300 via-indigo-300 to-sky-300 bg-clip-text text-transparent"> Galaxy Calculator </h2><p class="text-xs sm:text-sm text-slate-300/90"> Simple calculator built with Vue refs and event handlers. </p></div>',2)),Ne("div",jE,[Ne("div",$E,[Ne("div",KE,[v[25]||(v[25]=Ne("div",{class:"text-[11px] uppercase tracking-[0.15em] text-slate-500"}," Galaxy Calc ",-1)),Ne("div",ZE,bo(h.display),1)])]),Ne("div",JE,[Ne("button",{class:"col-span-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-800 border border-slate-600/80 text-slate-100 font-semibold",onClick:v[0]||(v[0]=(...b)=>h.clearAll&&h.clearAll(...b))}," C "),Ne("button",{class:"py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-800 border border-slate-600/80 text-slate-100 font-semibold",onClick:v[1]||(v[1]=(...b)=>h.deleteLast&&h.deleteLast(...b))}," DEL "),Ne("button",{class:"py-2.5 rounded-xl bg-sky-500/90 hover:bg-sky-400 active:bg-sky-500 text-slate-950 font-semibold",onClick:v[2]||(v[2]=b=>h.appendOperator("÷"))}," ÷ "),Ne("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:v[3]||(v[3]=b=>h.appendDigit("7"))}," 7 "),Ne("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:v[4]||(v[4]=b=>h.appendDigit("8"))}," 8 "),Ne("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:v[5]||(v[5]=b=>h.appendDigit("9"))}," 9 "),Ne("button",{class:"py-2.5 rounded-xl bg-sky-500/90 hover:bg-sky-400 active:bg-sky-500 text-slate-950 font-semibold",onClick:v[6]||(v[6]=b=>h.appendOperator("×"))}," × "),Ne("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:v[7]||(v[7]=b=>h.appendDigit("4"))}," 4 "),Ne("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:v[8]||(v[8]=b=>h.appendDigit("5"))}," 5 "),Ne("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:v[9]||(v[9]=b=>h.appendDigit("6"))}," 6 "),Ne("button",{class:"py-2.5 rounded-xl bg-sky-500/90 hover:bg-sky-400 active:bg-sky-500 text-slate-950 font-semibold",onClick:v[10]||(v[10]=b=>h.appendOperator("-"))}," - "),Ne("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:v[11]||(v[11]=b=>h.appendDigit("1"))}," 1 "),Ne("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:v[12]||(v[12]=b=>h.appendDigit("2"))}," 2 "),Ne("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:v[13]||(v[13]=b=>h.appendDigit("3"))}," 3 "),Ne("button",{class:"py-2.5 rounded-xl bg-sky-500/90 hover:bg-sky-400 active:bg-sky-500 text-slate-950 font-semibold",onClick:v[14]||(v[14]=b=>h.appendOperator("+"))}," + "),Ne("button",{class:"col-span-2 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:v[15]||(v[15]=b=>h.appendDigit("0"))}," 0 "),Ne("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:v[16]||(v[16]=(...b)=>h.appendDot&&h.appendDot(...b))}," . "),Ne("button",{class:"py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-slate-950 font-semibold shadow-lg shadow-emerald-500/40",onClick:v[17]||(v[17]=(...b)=>h.calculate&&h.calculate(...b))}," = ")]),v[26]||(v[26]=Ne("p",{class:"text-[11px] sm:text-xs text-slate-400 mt-1 text-center"},[Gi(" Scroll "),Ne("span",{class:"font-semibold text-slate-200"},"down"),Gi(" (swipe up) to next card, or up (swipe down) to previous. ")],-1))])])])],4)])])],32))}};const xr=typeof document<"u";function pp(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function eb(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&pp(n.default)}const st=Object.assign;function Za(n,e){const t={};for(const i in e){const r=e[i];t[i]=En(r)?r.map(n):n(r)}return t}const hs=()=>{},En=Array.isArray;function Xf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const mp=/#/g,tb=/&/g,nb=/\//g,ib=/=/g,rb=/\?/g,gp=/\+/g,sb=/%5B/g,ob=/%5D/g,_p=/%5E/g,ab=/%60/g,xp=/%7B/g,lb=/%7C/g,vp=/%7D/g,cb=/%20/g;function eu(n){return n==null?"":encodeURI(""+n).replace(lb,"|").replace(sb,"[").replace(ob,"]")}function ub(n){return eu(n).replace(xp,"{").replace(vp,"}").replace(_p,"^")}function fc(n){return eu(n).replace(gp,"%2B").replace(cb,"+").replace(mp,"%23").replace(tb,"%26").replace(ab,"`").replace(xp,"{").replace(vp,"}").replace(_p,"^")}function fb(n){return fc(n).replace(ib,"%3D")}function db(n){return eu(n).replace(mp,"%23").replace(rb,"%3F")}function hb(n){return db(n).replace(nb,"%2F")}function ys(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const pb=/\/$/,mb=n=>n.replace(pb,"");function Ja(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=n(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=vb(i??e,t),{fullPath:i+s+o,path:i,query:r,hash:ys(o)}}function gb(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function qf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function _b(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Ur(e.matched[i],t.matched[r])&&Sp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ur(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Sp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!xb(n[t],e[t]))return!1;return!0}function xb(n,e){return En(n)?Yf(n,e):En(e)?Yf(e,n):n?.valueOf()===e?.valueOf()}function Yf(n,e){return En(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function vb(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const vi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let dc=(function(n){return n.pop="pop",n.push="push",n})({}),Qa=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function Sb(n){if(!n)if(xr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),mb(n)}const Mb=/^[^#]+#/;function Eb(n,e){return n.replace(Mb,"#")+e}function bb(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Qo=()=>({left:window.scrollX,top:window.scrollY});function yb(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=bb(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function jf(n,e){return(history.state?history.state.position-e:-1)+n}const hc=new Map;function Tb(n,e){hc.set(n,e)}function Ab(n){const e=hc.get(n);return hc.delete(n),e}function wb(n){return typeof n=="string"||n&&typeof n=="object"}function Mp(n){return typeof n=="string"||typeof n=="symbol"}let Mt=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Ep=Symbol("");Mt.MATCHER_NOT_FOUND+"",Mt.NAVIGATION_GUARD_REDIRECT+"",Mt.NAVIGATION_ABORTED+"",Mt.NAVIGATION_CANCELLED+"",Mt.NAVIGATION_DUPLICATED+"";function Nr(n,e){return st(new Error,{type:n,[Ep]:!0},e)}function Kn(n,e){return n instanceof Error&&Ep in n&&(e==null||!!(n.type&e))}const Rb=["params","query","hash"];function Cb(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of Rb)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function Pb(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(gp," "),s=r.indexOf("="),o=ys(s<0?r:r.slice(0,s)),a=s<0?null:ys(r.slice(s+1));if(o in e){let l=e[o];En(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function $f(n){let e="";for(let t in n){const i=n[t];if(t=fb(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(En(i)?i.map(r=>r&&fc(r)):[i&&fc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Db(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=En(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Lb=Symbol(""),Kf=Symbol(""),tu=Symbol(""),bp=Symbol(""),pc=Symbol("");function es(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function bi(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Nr(Mt.NAVIGATION_ABORTED,{from:t,to:e})):d instanceof Error?l(d):wb(d)?l(Nr(Mt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function el(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(pp(l)){const c=(l.__vccOpts||l)[e];c&&s.push(bi(c,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=eb(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&bi(d,t,i,o,a,r)()}))}}return s}function Ib(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Ur(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Ur(c,l))||r.push(l))}return[t,i,r]}let Ub=()=>location.protocol+"//"+location.host;function yp(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),qf(a,"")}return qf(t,n)+i+r}function Nb(n,e,t,i){let r=[],s=[],o=null;const a=({state:d})=>{const p=yp(n,location),g=t.value,x=e.value;let m=0;if(d){if(t.value=p,e.value=d,o&&o===g){o=null;return}m=x?d.position-x.position:0}else i(p);r.forEach(h=>{h(t.value,g,{delta:m,type:dc.pop,direction:m?m>0?Qa.forward:Qa.back:Qa.unknown})})};function l(){o=t.value}function c(d){r.push(d);const p=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(st({},d.state,{scroll:Qo()}),"")}}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function Zf(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Qo():null}}function Fb(n){const{history:e,location:t}=window,i={value:yp(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Ub()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](d)}}function o(l,c){s(l,st({},e.state,Zf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=st({},r.value,e.state,{forward:l,scroll:Qo()});s(u.current,u,!0),s(l,st({},Zf(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Ob(n){n=Sb(n);const e=Fb(n),t=Nb(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=st({location:"",base:n,go:i,createHref:Eb.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let ji=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var Tt=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(Tt||{});const Bb={type:ji.Static,value:""},Vb=/[a-zA-Z0-9_]/;function zb(n){if(!n)return[[]];if(n==="/")return[[Bb]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=Tt.Static,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===Tt.Static?s.push({type:ji.Static,value:c}):t===Tt.Param||t===Tt.ParamRegExp||t===Tt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:ji.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==Tt.ParamRegExp){i=t,t=Tt.EscapeNext;continue}switch(t){case Tt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),t=Tt.Param):d();break;case Tt.EscapeNext:d(),t=i;break;case Tt.Param:l==="("?t=Tt.ParamRegExp:Vb.test(l)?d():(f(),t=Tt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Tt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Tt.ParamRegExpEnd:u+=l;break;case Tt.ParamRegExpEnd:f(),t=Tt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===Tt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}const Jf="[^/]+?",Hb={sensitive:!1,strict:!1,start:!0,end:!0};var Gt=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(Gt||{});const Gb=/[.+*?^${}()[\]/\\]/g;function kb(n,e){const t=st({},Hb,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[Gt.Root];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=Gt.Segment+(t.sensitive?Gt.BonusCaseSensitive:0);if(d.type===ji.Static)f||(r+="/"),r+=d.value.replace(Gb,"\\$&"),p+=Gt.Static;else if(d.type===ji.Param){const{value:g,repeatable:x,optional:m,regexp:h}=d;s.push({name:g,repeatable:x,optional:m});const v=h||Jf;if(v!==Jf){p+=Gt.BonusCustomRegExp;try{`${v}`}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${v}): `+y.message)}}let b=x?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;f||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),r+=b,p+=Gt.Dynamic,m&&(p+=Gt.BonusOptional),x&&(p+=Gt.BonusRepeatable),v===".*"&&(p+=Gt.BonusWildcard)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=Gt.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=s[d-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===ji.Static)u+=p.value;else if(p.type===ji.Param){const{value:g,repeatable:x,optional:m}=p,h=g in c?c[g]:"";if(En(h)&&!x)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const v=En(h)?h.join("/"):h;if(!v)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=v}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Wb(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===Gt.Static+Gt.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Gt.Static+Gt.Segment?1:-1:0}function Tp(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Wb(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Qf(i))return 1;if(Qf(r))return-1}return r.length-i.length}function Qf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Xb={strict:!1,end:!0,sensitive:!1};function qb(n,e,t){const i=kb(zb(n.path),t),r=st(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Yb(n,e){const t=[],i=new Map;e=Xf(Xb,e);function r(f){return i.get(f)}function s(f,d,p){const g=!p,x=td(f);x.aliasOf=p&&p.record;const m=Xf(e,f),h=[x];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of y)h.push(td(st({},x,{components:p?p.record.components:x.components,path:R,aliasOf:p?p.record:x})))}let v,b;for(const y of h){const{path:R}=y;if(d&&R[0]!=="/"){const D=d.record.path,P=D[D.length-1]==="/"?"":"/";y.path=d.record.path+(R&&P+R)}if(v=qb(y,d,m),p?p.alias.push(v):(b=b||v,b!==v&&b.alias.push(v),g&&f.name&&!nd(v)&&o(f.name)),Ap(v)&&l(v),x.children){const D=x.children;for(let P=0;P<D.length;P++)s(D[P],v,p&&p.children[P])}p=p||v}return b?()=>{o(b)}:hs}function o(f){if(Mp(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const d=Kb(f,t);t.splice(d,0,f),f.record.name&&!nd(f)&&i.set(f.record.name,f)}function c(f,d){let p,g={},x,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Nr(Mt.MATCHER_NOT_FOUND,{location:f});m=p.record.name,g=st(ed(d.params,p.keys.filter(b=>!b.optional).concat(p.parent?p.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),f.params&&ed(f.params,p.keys.map(b=>b.name))),x=p.stringify(g)}else if(f.path!=null)x=f.path,p=t.find(b=>b.re.test(x)),p&&(g=p.parse(x),m=p.record.name);else{if(p=d.name?i.get(d.name):t.find(b=>b.re.test(d.path)),!p)throw Nr(Mt.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=p.record.name,g=st({},d.params,f.params),x=p.stringify(g)}const h=[];let v=p;for(;v;)h.unshift(v.record),v=v.parent;return{name:m,path:x,params:g,matched:h,meta:$b(h)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function ed(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function td(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:jb(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function jb(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function nd(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function $b(n){return n.reduce((e,t)=>st(e,t.meta),{})}function Kb(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Tp(n,e[s])<0?i=s:t=s+1}const r=Zb(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function Zb(n){let e=n;for(;e=e.parent;)if(Ap(e)&&Tp(n,e)===0)return e}function Ap({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function id(n){const e=ii(tu),t=ii(bp),i=_n(()=>{const l=Er(n.to);return e.resolve(l)}),r=_n(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(Ur.bind(null,u));if(d>-1)return d;const p=rd(l[c-2]);return c>1&&rd(u)===p&&f[f.length-1].path!==p?f.findIndex(Ur.bind(null,l[c-2])):d}),s=_n(()=>r.value>-1&&ny(t.params,i.value.params)),o=_n(()=>r.value>-1&&r.value===t.matched.length-1&&Sp(t.params,i.value.params));function a(l={}){if(ty(l)){const c=e[Er(n.replace)?"replace":"push"](Er(n.to)).catch(hs);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:_n(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function Jb(n){return n.length===1?n[0]:n}const Qb=oh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:id,setup(n,{slots:e}){const t=Go(id(n)),{options:i}=ii(tu),r=_n(()=>({[sd(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[sd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&Jb(e.default(t));return n.custom?s:Ch("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),ey=Qb;function ty(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function ny(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!En(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function rd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const sd=(n,e,t)=>n??e??t,iy=oh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=ii(pc),r=_n(()=>n.route||i.value),s=ii(Kf,0),o=_n(()=>{let c=Er(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=_n(()=>r.value.matched[o.value]);co(Kf,_n(()=>o.value+1)),co(Lb,a),co(pc,r);const l=Jn();return ls(()=>[l.value,a.value,n.name],([c,u,f],[d,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Ur(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,d=f&&f.components[u];if(!d)return od(t.default,{Component:d,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Ch(d,st({},g,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return od(t.default,{Component:m,route:c})||m}}});function od(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const ry=iy;function sy(n){const e=Yb(n.routes,n),t=n.parseQuery||Pb,i=n.stringifyQuery||$f,r=n.history,s=es(),o=es(),a=es(),l=Fm(vi);let c=vi;xr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Za.bind(null,I=>""+I),f=Za.bind(null,hb),d=Za.bind(null,ys);function p(I,ie){let ae,oe;return Mp(I)?(ae=e.getRecordMatcher(I),oe=ie):oe=I,e.addRoute(oe,ae)}function g(I){const ie=e.getRecordMatcher(I);ie&&e.removeRoute(ie)}function x(){return e.getRoutes().map(I=>I.record)}function m(I){return!!e.getRecordMatcher(I)}function h(I,ie){if(ie=st({},ie||l.value),typeof I=="string"){const N=Ja(t,I,ie.path),$=e.resolve({path:N.path},ie),Y=r.createHref(N.fullPath);return st(N,$,{params:d($.params),hash:ys(N.hash),redirectedFrom:void 0,href:Y})}let ae;if(I.path!=null)ae=st({},I,{path:Ja(t,I.path,ie.path).path});else{const N=st({},I.params);for(const $ in N)N[$]==null&&delete N[$];ae=st({},I,{params:f(N)}),ie.params=f(ie.params)}const oe=e.resolve(ae,ie),De=I.hash||"";oe.params=u(d(oe.params));const w=gb(i,st({},I,{hash:ub(De),path:oe.path})),C=r.createHref(w);return st({fullPath:w,hash:De,query:i===$f?Db(I.query):I.query||{}},oe,{redirectedFrom:void 0,href:C})}function v(I){return typeof I=="string"?Ja(t,I,l.value.path):st({},I)}function b(I,ie){if(c!==I)return Nr(Mt.NAVIGATION_CANCELLED,{from:ie,to:I})}function y(I){return P(I)}function R(I){return y(st(v(I),{replace:!0}))}function D(I,ie){const ae=I.matched[I.matched.length-1];if(ae&&ae.redirect){const{redirect:oe}=ae;let De=typeof oe=="function"?oe(I,ie):oe;return typeof De=="string"&&(De=De.includes("?")||De.includes("#")?De=v(De):{path:De},De.params={}),st({query:I.query,hash:I.hash,params:De.path!=null?{}:I.params},De)}}function P(I,ie){const ae=c=h(I),oe=l.value,De=I.state,w=I.force,C=I.replace===!0,N=D(ae,oe);if(N)return P(st(v(N),{state:typeof N=="object"?st({},De,N.state):De,force:w,replace:C}),ie||ae);const $=ae;$.redirectedFrom=ie;let Y;return!w&&_b(i,oe,ae)&&(Y=Nr(Mt.NAVIGATION_DUPLICATED,{to:$,from:oe}),me(oe,oe,!0,!1)),(Y?Promise.resolve(Y):T($,oe)).catch(Q=>Kn(Q)?Kn(Q,Mt.NAVIGATION_GUARD_REDIRECT)?Q:ge(Q):Z(Q,$,oe)).then(Q=>{if(Q){if(Kn(Q,Mt.NAVIGATION_GUARD_REDIRECT))return P(st({replace:C},v(Q.to),{state:typeof Q.to=="object"?st({},De,Q.to.state):De,force:w}),ie||$)}else Q=q($,oe,!0,C,De);return U($,oe,Q),Q})}function V(I,ie){const ae=b(I,ie);return ae?Promise.reject(ae):Promise.resolve()}function M(I){const ie=Je.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(I):I()}function T(I,ie){let ae;const[oe,De,w]=Ib(I,ie);ae=el(oe.reverse(),"beforeRouteLeave",I,ie);for(const N of oe)N.leaveGuards.forEach($=>{ae.push(bi($,I,ie))});const C=V.bind(null,I,ie);return ae.push(C),re(ae).then(()=>{ae=[];for(const N of s.list())ae.push(bi(N,I,ie));return ae.push(C),re(ae)}).then(()=>{ae=el(De,"beforeRouteUpdate",I,ie);for(const N of De)N.updateGuards.forEach($=>{ae.push(bi($,I,ie))});return ae.push(C),re(ae)}).then(()=>{ae=[];for(const N of w)if(N.beforeEnter)if(En(N.beforeEnter))for(const $ of N.beforeEnter)ae.push(bi($,I,ie));else ae.push(bi(N.beforeEnter,I,ie));return ae.push(C),re(ae)}).then(()=>(I.matched.forEach(N=>N.enterCallbacks={}),ae=el(w,"beforeRouteEnter",I,ie,M),ae.push(C),re(ae))).then(()=>{ae=[];for(const N of o.list())ae.push(bi(N,I,ie));return ae.push(C),re(ae)}).catch(N=>Kn(N,Mt.NAVIGATION_CANCELLED)?N:Promise.reject(N))}function U(I,ie,ae){a.list().forEach(oe=>M(()=>oe(I,ie,ae)))}function q(I,ie,ae,oe,De){const w=b(I,ie);if(w)return w;const C=ie===vi,N=xr?history.state:{};ae&&(oe||C?r.replace(I.fullPath,st({scroll:C&&N&&N.scroll},De)):r.push(I.fullPath,De)),l.value=I,me(I,ie,ae,C),ge()}let z;function ee(){z||(z=r.listen((I,ie,ae)=>{if(!Ze.listening)return;const oe=h(I),De=D(oe,Ze.currentRoute.value);if(De){P(st(De,{replace:!0,force:!0}),oe).catch(hs);return}c=oe;const w=l.value;xr&&Tb(jf(w.fullPath,ae.delta),Qo()),T(oe,w).catch(C=>Kn(C,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_CANCELLED)?C:Kn(C,Mt.NAVIGATION_GUARD_REDIRECT)?(P(st(v(C.to),{force:!0}),oe).then(N=>{Kn(N,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_DUPLICATED)&&!ae.delta&&ae.type===dc.pop&&r.go(-1,!1)}).catch(hs),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),Z(C,oe,w))).then(C=>{C=C||q(oe,w,!1),C&&(ae.delta&&!Kn(C,Mt.NAVIGATION_CANCELLED)?r.go(-ae.delta,!1):ae.type===dc.pop&&Kn(C,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),U(oe,w,C)}).catch(hs)}))}let ne=es(),W=es(),B;function Z(I,ie,ae){ge(I);const oe=W.list();return oe.length?oe.forEach(De=>De(I,ie,ae)):console.error(I),Promise.reject(I)}function xe(){return B&&l.value!==vi?Promise.resolve():new Promise((I,ie)=>{ne.add([I,ie])})}function ge(I){return B||(B=!I,ee(),ne.list().forEach(([ie,ae])=>I?ae(I):ie()),ne.reset()),I}function me(I,ie,ae,oe){const{scrollBehavior:De}=n;if(!xr||!De)return Promise.resolve();const w=!ae&&Ab(jf(I.fullPath,0))||(oe||!ae)&&history.state&&history.state.scroll||null;return Qd().then(()=>De(I,ie,w)).then(C=>C&&yb(C)).catch(C=>Z(C,I,ie))}const Ue=I=>r.go(I);let ze;const Je=new Set,Ze={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:h,options:n,push:y,replace:R,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:xe,install(I){I.component("RouterLink",ey),I.component("RouterView",ry),I.config.globalProperties.$router=Ze,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Er(l)}),xr&&!ze&&l.value===vi&&(ze=!0,y(r.location).catch(oe=>{}));const ie={};for(const oe in vi)Object.defineProperty(ie,oe,{get:()=>l.value[oe],enumerable:!0});I.provide(tu,Ze),I.provide(bp,jd(ie)),I.provide(pc,l);const ae=I.unmount;Je.add(I),I.unmount=function(){Je.delete(I),Je.size<1&&(c=vi,z&&z(),z=null,l.value=vi,ze=!1,B=!1),ae()}}};function re(I){return I.reduce((ie,ae)=>ie.then(()=>M(ae)),Promise.resolve())}return Ze}function wp(n,e){return function(){return n.apply(e,arguments)}}const{toString:oy}=Object.prototype,{getPrototypeOf:nu}=Object,{iterator:ea,toStringTag:Rp}=Symbol,ta=(n=>e=>{const t=oy.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),yn=n=>(n=n.toLowerCase(),e=>ta(e)===n),na=n=>e=>typeof e===n,{isArray:Hr}=Array,Fr=na("undefined");function Ps(n){return n!==null&&!Fr(n)&&n.constructor!==null&&!Fr(n.constructor)&&Zt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Cp=yn("ArrayBuffer");function ay(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Cp(n.buffer),e}const ly=na("string"),Zt=na("function"),Pp=na("number"),Ds=n=>n!==null&&typeof n=="object",cy=n=>n===!0||n===!1,So=n=>{if(ta(n)!=="object")return!1;const e=nu(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Rp in n)&&!(ea in n)},uy=n=>{if(!Ds(n)||Ps(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},fy=yn("Date"),dy=yn("File"),hy=yn("Blob"),py=yn("FileList"),my=n=>Ds(n)&&Zt(n.pipe),gy=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Zt(n.append)&&((e=ta(n))==="formdata"||e==="object"&&Zt(n.toString)&&n.toString()==="[object FormData]"))},_y=yn("URLSearchParams"),[xy,vy,Sy,My]=["ReadableStream","Request","Response","Headers"].map(yn),Ey=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ls(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),Hr(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{if(Ps(n))return;const s=t?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,n[a],a,n)}}function Dp(n,e){if(Ps(n))return null;e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const $i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Lp=n=>!Fr(n)&&n!==$i;function mc(){const{caseless:n,skipUndefined:e}=Lp(this)&&this||{},t={},i=(r,s)=>{const o=n&&Dp(t,s)||s;So(t[o])&&So(r)?t[o]=mc(t[o],r):So(r)?t[o]=mc({},r):Hr(r)?t[o]=r.slice():(!e||!Fr(r))&&(t[o]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Ls(arguments[r],i);return t}const by=(n,e,t,{allOwnKeys:i}={})=>(Ls(e,(r,s)=>{t&&Zt(r)?n[s]=wp(r,t):n[s]=r},{allOwnKeys:i}),n),yy=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Ty=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},Ay=(n,e,t,i)=>{let r,s,o;const a={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)o=r[s],(!i||i(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&nu(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},wy=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},Ry=n=>{if(!n)return null;if(Hr(n))return n;let e=n.length;if(!Pp(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},Cy=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&nu(Uint8Array)),Py=(n,e)=>{const i=(n&&n[ea]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(n,s[0],s[1])}},Dy=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},Ly=yn("HTMLFormElement"),Iy=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),ad=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),Uy=yn("RegExp"),Ip=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};Ls(t,(r,s)=>{let o;(o=e(r,s,n))!==!1&&(i[s]=o||r)}),Object.defineProperties(n,i)},Ny=n=>{Ip(n,(e,t)=>{if(Zt(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(Zt(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Fy=(n,e)=>{const t={},i=r=>{r.forEach(s=>{t[s]=!0})};return Hr(n)?i(n):i(String(n).split(e)),t},Oy=()=>{},By=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function Vy(n){return!!(n&&Zt(n.append)&&n[Rp]==="FormData"&&n[ea])}const zy=n=>{const e=new Array(10),t=(i,r)=>{if(Ds(i)){if(e.indexOf(i)>=0)return;if(Ps(i))return i;if(!("toJSON"in i)){e[r]=i;const s=Hr(i)?[]:{};return Ls(i,(o,a)=>{const l=t(o,r+1);!Fr(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return t(n,0)},Hy=yn("AsyncFunction"),Gy=n=>n&&(Ds(n)||Zt(n))&&Zt(n.then)&&Zt(n.catch),Up=((n,e)=>n?setImmediate:e?((t,i)=>($i.addEventListener("message",({source:r,data:s})=>{r===$i&&s===t&&i.length&&i.shift()()},!1),r=>{i.push(r),$i.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Zt($i.postMessage)),ky=typeof queueMicrotask<"u"?queueMicrotask.bind($i):typeof process<"u"&&process.nextTick||Up,Wy=n=>n!=null&&Zt(n[ea]),K={isArray:Hr,isArrayBuffer:Cp,isBuffer:Ps,isFormData:gy,isArrayBufferView:ay,isString:ly,isNumber:Pp,isBoolean:cy,isObject:Ds,isPlainObject:So,isEmptyObject:uy,isReadableStream:xy,isRequest:vy,isResponse:Sy,isHeaders:My,isUndefined:Fr,isDate:fy,isFile:dy,isBlob:hy,isRegExp:Uy,isFunction:Zt,isStream:my,isURLSearchParams:_y,isTypedArray:Cy,isFileList:py,forEach:Ls,merge:mc,extend:by,trim:Ey,stripBOM:yy,inherits:Ty,toFlatObject:Ay,kindOf:ta,kindOfTest:yn,endsWith:wy,toArray:Ry,forEachEntry:Py,matchAll:Dy,isHTMLForm:Ly,hasOwnProperty:ad,hasOwnProp:ad,reduceDescriptors:Ip,freezeMethods:Ny,toObjectSet:Fy,toCamelCase:Iy,noop:Oy,toFiniteNumber:By,findKey:Dp,global:$i,isContextDefined:Lp,isSpecCompliantForm:Vy,toJSONObject:zy,isAsyncFn:Hy,isThenable:Gy,setImmediate:Up,asap:ky,isIterable:Wy};function Xe(n,e,t,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}K.inherits(Xe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:K.toJSONObject(this.config),code:this.code,status:this.status}}});const Np=Xe.prototype,Fp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Fp[n]={value:n}});Object.defineProperties(Xe,Fp);Object.defineProperty(Np,"isAxiosError",{value:!0});Xe.from=(n,e,t,i,r,s)=>{const o=Object.create(Np);K.toFlatObject(n,o,function(u){return u!==Error.prototype},c=>c!=="isAxiosError");const a=n&&n.message?n.message:"Error",l=e==null&&n?n.code:e;return Xe.call(o,a,l,t,i,r),n&&o.cause==null&&Object.defineProperty(o,"cause",{value:n,configurable:!0}),o.name=n&&n.name||"Error",s&&Object.assign(o,s),o};const Xy=null;function gc(n){return K.isPlainObject(n)||K.isArray(n)}function Op(n){return K.endsWith(n,"[]")?n.slice(0,-2):n}function ld(n,e,t){return n?n.concat(e).map(function(r,s){return r=Op(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function qy(n){return K.isArray(n)&&!n.some(gc)}const Yy=K.toFlatObject(K,{},null,function(e){return/^is[A-Z]/.test(e)});function ia(n,e,t){if(!K.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=K.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,m){return!K.isUndefined(m[x])});const i=t.metaTokens,r=t.visitor||u,s=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&K.isSpecCompliantForm(e);if(!K.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(K.isDate(g))return g.toISOString();if(K.isBoolean(g))return g.toString();if(!l&&K.isBlob(g))throw new Xe("Blob is not supported. Use a Buffer instead.");return K.isArrayBuffer(g)||K.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,x,m){let h=g;if(g&&!m&&typeof g=="object"){if(K.endsWith(x,"{}"))x=i?x:x.slice(0,-2),g=JSON.stringify(g);else if(K.isArray(g)&&qy(g)||(K.isFileList(g)||K.endsWith(x,"[]"))&&(h=K.toArray(g)))return x=Op(x),h.forEach(function(b,y){!(K.isUndefined(b)||b===null)&&e.append(o===!0?ld([x],y,s):o===null?x:x+"[]",c(b))}),!1}return gc(g)?!0:(e.append(ld(m,x,s),c(g)),!1)}const f=[],d=Object.assign(Yy,{defaultVisitor:u,convertValue:c,isVisitable:gc});function p(g,x){if(!K.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(g),K.forEach(g,function(h,v){(!(K.isUndefined(h)||h===null)&&r.call(e,h,K.isString(v)?v.trim():v,x,d))===!0&&p(h,x?x.concat(v):[v])}),f.pop()}}if(!K.isObject(n))throw new TypeError("data must be an object");return p(n),e}function cd(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function iu(n,e){this._pairs=[],n&&ia(n,this,e)}const Bp=iu.prototype;Bp.append=function(e,t){this._pairs.push([e,t])};Bp.toString=function(e){const t=e?function(i){return e.call(this,i,cd)}:cd;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function jy(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Vp(n,e,t){if(!e)return n;const i=t&&t.encode||jy;K.isFunction(t)&&(t={serialize:t});const r=t&&t.serialize;let s;if(r?s=r(e,t):s=K.isURLSearchParams(e)?e.toString():new iu(e,t).toString(i),s){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class ud{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){K.forEach(this.handlers,function(i){i!==null&&e(i)})}}const zp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$y=typeof URLSearchParams<"u"?URLSearchParams:iu,Ky=typeof FormData<"u"?FormData:null,Zy=typeof Blob<"u"?Blob:null,Jy={isBrowser:!0,classes:{URLSearchParams:$y,FormData:Ky,Blob:Zy},protocols:["http","https","file","blob","url","data"]},ru=typeof window<"u"&&typeof document<"u",_c=typeof navigator=="object"&&navigator||void 0,Qy=ru&&(!_c||["ReactNative","NativeScript","NS"].indexOf(_c.product)<0),eT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",tT=ru&&window.location.href||"http://localhost",nT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ru,hasStandardBrowserEnv:Qy,hasStandardBrowserWebWorkerEnv:eT,navigator:_c,origin:tT},Symbol.toStringTag,{value:"Module"})),Nt={...nT,...Jy};function iT(n,e){return ia(n,new Nt.classes.URLSearchParams,{visitor:function(t,i,r,s){return Nt.isNode&&K.isBuffer(t)?(this.append(i,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function rT(n){return K.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function sT(n){const e={},t=Object.keys(n);let i;const r=t.length;let s;for(i=0;i<r;i++)s=t[i],e[s]=n[s];return e}function Hp(n){function e(t,i,r,s){let o=t[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=t.length;return o=!o&&K.isArray(r)?r.length:o,l?(K.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!K.isObject(r[o]))&&(r[o]=[]),e(t,i,r[o],s)&&K.isArray(r[o])&&(r[o]=sT(r[o])),!a)}if(K.isFormData(n)&&K.isFunction(n.entries)){const t={};return K.forEachEntry(n,(i,r)=>{e(rT(i),r,t,0)}),t}return null}function oT(n,e,t){if(K.isString(n))try{return(e||JSON.parse)(n),K.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Is={transitional:zp,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=K.isObject(e);if(s&&K.isHTMLForm(e)&&(e=new FormData(e)),K.isFormData(e))return r?JSON.stringify(Hp(e)):e;if(K.isArrayBuffer(e)||K.isBuffer(e)||K.isStream(e)||K.isFile(e)||K.isBlob(e)||K.isReadableStream(e))return e;if(K.isArrayBufferView(e))return e.buffer;if(K.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return iT(e,this.formSerializer).toString();if((a=K.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ia(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),oT(e)):e}],transformResponse:[function(e){const t=this.transitional||Is.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(K.isResponse(e)||K.isReadableStream(e))return e;if(e&&K.isString(e)&&(i&&!this.responseType||r)){const o=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?Xe.from(a,Xe.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nt.classes.FormData,Blob:Nt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};K.forEach(["delete","get","head","post","put","patch"],n=>{Is.headers[n]={}});const aT=K.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lT=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(o){r=o.indexOf(":"),t=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!t||e[t]&&aT[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},fd=Symbol("internals");function ts(n){return n&&String(n).trim().toLowerCase()}function Mo(n){return n===!1||n==null?n:K.isArray(n)?n.map(Mo):String(n)}function cT(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const uT=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function tl(n,e,t,i,r){if(K.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!K.isString(e)){if(K.isString(i))return e.indexOf(i)!==-1;if(K.isRegExp(i))return i.test(e)}}function fT(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function dT(n,e){const t=K.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let Jt=class{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function s(a,l,c){const u=ts(l);if(!u)throw new Error("header name must be a non-empty string");const f=K.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=Mo(a))}const o=(a,l)=>K.forEach(a,(c,u)=>s(c,u,l));if(K.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(K.isString(e)&&(e=e.trim())&&!uT(e))o(lT(e),t);else if(K.isObject(e)&&K.isIterable(e)){let a={},l,c;for(const u of e){if(!K.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?K.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,t)}else e!=null&&s(t,e,i);return this}get(e,t){if(e=ts(e),e){const i=K.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return cT(r);if(K.isFunction(t))return t.call(this,r,i);if(K.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ts(e),e){const i=K.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||tl(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function s(o){if(o=ts(o),o){const a=K.findKey(i,o);a&&(!t||tl(i,i[a],a,t))&&(delete i[a],r=!0)}}return K.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const s=t[i];(!e||tl(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,i={};return K.forEach(this,(r,s)=>{const o=K.findKey(i,s);if(o){t[o]=Mo(r),delete t[s];return}const a=e?fT(s):String(s).trim();a!==s&&delete t[s],t[a]=Mo(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return K.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&K.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[fd]=this[fd]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=ts(o);i[a]||(dT(r,o),i[a]=!0)}return K.isArray(e)?e.forEach(s):s(e),this}};Jt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);K.reduceDescriptors(Jt.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});K.freezeMethods(Jt);function nl(n,e){const t=this||Is,i=e||t,r=Jt.from(i.headers);let s=i.data;return K.forEach(n,function(a){s=a.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Gp(n){return!!(n&&n.__CANCEL__)}function Gr(n,e,t){Xe.call(this,n??"canceled",Xe.ERR_CANCELED,e,t),this.name="CanceledError"}K.inherits(Gr,Xe,{__CANCEL__:!0});function kp(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new Xe("Request failed with status code "+t.status,[Xe.ERR_BAD_REQUEST,Xe.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function hT(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function pT(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),t[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=t[f++],f=f%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function mT(n,e){let t=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{t=u,r=null,s&&(clearTimeout(s),s=null),n(...c)};return[(...c)=>{const u=Date.now(),f=u-t;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const Fo=(n,e,t=3)=>{let i=0;const r=pT(50,250);return mT(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};n(f)},t)},dd=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},hd=n=>(...e)=>K.asap(()=>n(...e)),gT=Nt.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Nt.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Nt.origin),Nt.navigator&&/(msie|trident)/i.test(Nt.navigator.userAgent)):()=>!0,_T=Nt.hasStandardBrowserEnv?{write(n,e,t,i,r,s,o){if(typeof document>"u")return;const a=[`${n}=${encodeURIComponent(e)}`];K.isNumber(t)&&a.push(`expires=${new Date(t).toUTCString()}`),K.isString(i)&&a.push(`path=${i}`),K.isString(r)&&a.push(`domain=${r}`),s===!0&&a.push("secure"),K.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(n){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+n+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function xT(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function vT(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function Wp(n,e,t){let i=!xT(e);return n&&(i||t==!1)?vT(n,e):e}const pd=n=>n instanceof Jt?{...n}:n;function Qi(n,e){e=e||{};const t={};function i(c,u,f,d){return K.isPlainObject(c)&&K.isPlainObject(u)?K.merge.call({caseless:d},c,u):K.isPlainObject(u)?K.merge({},u):K.isArray(u)?u.slice():u}function r(c,u,f,d){if(K.isUndefined(u)){if(!K.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!K.isUndefined(u))return i(void 0,u)}function o(c,u){if(K.isUndefined(u)){if(!K.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in n)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(pd(c),pd(u),f,!0)};return K.forEach(Object.keys({...n,...e}),function(u){const f=l[u]||r,d=f(n[u],e[u],u);K.isUndefined(d)&&f!==a||(t[u]=d)}),t}const Xp=n=>{const e=Qi({},n);let{data:t,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;if(e.headers=o=Jt.from(o),e.url=Vp(Wp(e.baseURL,e.url,e.allowAbsoluteUrls),n.params,n.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),K.isFormData(t)){if(Nt.hasStandardBrowserEnv||Nt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(K.isFunction(t.getHeaders)){const l=t.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([u,f])=>{c.includes(u.toLowerCase())&&o.set(u,f)})}}if(Nt.hasStandardBrowserEnv&&(i&&K.isFunction(i)&&(i=i(e)),i||i!==!1&&gT(e.url))){const l=r&&s&&_T.read(s);l&&o.set(r,l)}return e},ST=typeof XMLHttpRequest<"u",MT=ST&&function(n){return new Promise(function(t,i){const r=Xp(n);let s=r.data;const o=Jt.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,p,g;function x(){p&&p(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function h(){if(!m)return;const b=Jt.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),R={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:b,config:n,request:m};kp(function(P){t(P),x()},function(P){i(P),x()},R),m=null}"onloadend"in m?m.onloadend=h:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(h)},m.onabort=function(){m&&(i(new Xe("Request aborted",Xe.ECONNABORTED,n,m)),m=null)},m.onerror=function(y){const R=y&&y.message?y.message:"Network Error",D=new Xe(R,Xe.ERR_NETWORK,n,m);D.event=y||null,i(D),m=null},m.ontimeout=function(){let y=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const R=r.transitional||zp;r.timeoutErrorMessage&&(y=r.timeoutErrorMessage),i(new Xe(y,R.clarifyTimeoutError?Xe.ETIMEDOUT:Xe.ECONNABORTED,n,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&K.forEach(o.toJSON(),function(y,R){m.setRequestHeader(R,y)}),K.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([d,g]=Fo(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,p]=Fo(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=b=>{m&&(i(!b||b.type?new Gr(null,n,m):b),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const v=hT(r.url);if(v&&Nt.protocols.indexOf(v)===-1){i(new Xe("Unsupported protocol "+v+":",Xe.ERR_BAD_REQUEST,n));return}m.send(s||null)})},ET=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Xe?u:new Gr(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new Xe(`timeout ${e} of ms exceeded`,Xe.ETIMEDOUT))},e);const a=()=>{n&&(o&&clearTimeout(o),o=null,n.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),n=null)};n.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>K.asap(a),l}},bT=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,r;for(;i<t;)r=i+e,yield n.slice(i,r),i=r},yT=async function*(n,e){for await(const t of TT(n))yield*bT(t,e)},TT=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},md=(n,e,t,i)=>{const r=yT(n,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(t){let d=s+=f;t(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},gd=64*1024,{isFunction:lo}=K,AT=(({Request:n,Response:e})=>({Request:n,Response:e}))(K.global),{ReadableStream:_d,TextEncoder:xd}=K.global,vd=(n,...e)=>{try{return!!n(...e)}catch{return!1}},wT=n=>{n=K.merge.call({skipUndefined:!0},AT,n);const{fetch:e,Request:t,Response:i}=n,r=e?lo(e):typeof fetch=="function",s=lo(t),o=lo(i);if(!r)return!1;const a=r&&lo(_d),l=r&&(typeof xd=="function"?(g=>x=>g.encode(x))(new xd):async g=>new Uint8Array(await new t(g).arrayBuffer())),c=s&&a&&vd(()=>{let g=!1;const x=new t(Nt.origin,{body:new _d,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!x}),u=o&&a&&vd(()=>K.isReadableStream(new i("").body)),f={stream:u&&(g=>g.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!f[g]&&(f[g]=(x,m)=>{let h=x&&x[g];if(h)return h.call(x);throw new Xe(`Response type '${g}' is not supported`,Xe.ERR_NOT_SUPPORT,m)})});const d=async g=>{if(g==null)return 0;if(K.isBlob(g))return g.size;if(K.isSpecCompliantForm(g))return(await new t(Nt.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(K.isArrayBufferView(g)||K.isArrayBuffer(g))return g.byteLength;if(K.isURLSearchParams(g)&&(g=g+""),K.isString(g))return(await l(g)).byteLength},p=async(g,x)=>{const m=K.toFiniteNumber(g.getContentLength());return m??d(x)};return async g=>{let{url:x,method:m,data:h,signal:v,cancelToken:b,timeout:y,onDownloadProgress:R,onUploadProgress:D,responseType:P,headers:V,withCredentials:M="same-origin",fetchOptions:T}=Xp(g),U=e||fetch;P=P?(P+"").toLowerCase():"text";let q=ET([v,b&&b.toAbortSignal()],y),z=null;const ee=q&&q.unsubscribe&&(()=>{q.unsubscribe()});let ne;try{if(D&&c&&m!=="get"&&m!=="head"&&(ne=await p(V,h))!==0){let me=new t(x,{method:"POST",body:h,duplex:"half"}),Ue;if(K.isFormData(h)&&(Ue=me.headers.get("content-type"))&&V.setContentType(Ue),me.body){const[ze,Je]=dd(ne,Fo(hd(D)));h=md(me.body,gd,ze,Je)}}K.isString(M)||(M=M?"include":"omit");const W=s&&"credentials"in t.prototype,B={...T,signal:q,method:m.toUpperCase(),headers:V.normalize().toJSON(),body:h,duplex:"half",credentials:W?M:void 0};z=s&&new t(x,B);let Z=await(s?U(z,T):U(x,B));const xe=u&&(P==="stream"||P==="response");if(u&&(R||xe&&ee)){const me={};["status","statusText","headers"].forEach(Ze=>{me[Ze]=Z[Ze]});const Ue=K.toFiniteNumber(Z.headers.get("content-length")),[ze,Je]=R&&dd(Ue,Fo(hd(R),!0))||[];Z=new i(md(Z.body,gd,ze,()=>{Je&&Je(),ee&&ee()}),me)}P=P||"text";let ge=await f[K.findKey(f,P)||"text"](Z,g);return!xe&&ee&&ee(),await new Promise((me,Ue)=>{kp(me,Ue,{data:ge,headers:Jt.from(Z.headers),status:Z.status,statusText:Z.statusText,config:g,request:z})})}catch(W){throw ee&&ee(),W&&W.name==="TypeError"&&/Load failed|fetch/i.test(W.message)?Object.assign(new Xe("Network Error",Xe.ERR_NETWORK,g,z),{cause:W.cause||W}):Xe.from(W,W&&W.code,g,z)}}},RT=new Map,qp=n=>{let e=n&&n.env||{};const{fetch:t,Request:i,Response:r}=e,s=[i,r,t];let o=s.length,a=o,l,c,u=RT;for(;a--;)l=s[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:wT(e)),u=c;return c};qp();const su={http:Xy,xhr:MT,fetch:{get:qp}};K.forEach(su,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const Sd=n=>`- ${n}`,CT=n=>K.isFunction(n)||n===null||n===!1;function PT(n,e){n=K.isArray(n)?n:[n];const{length:t}=n;let i,r;const s={};for(let o=0;o<t;o++){i=n[o];let a;if(r=i,!CT(i)&&(r=su[(a=String(i)).toLowerCase()],r===void 0))throw new Xe(`Unknown adapter '${a}'`);if(r&&(K.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(Sd).join(`
`):" "+Sd(o[0]):"as no adapter specified";throw new Xe("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r}const Yp={getAdapter:PT,adapters:su};function il(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Gr(null,n)}function Md(n){return il(n),n.headers=Jt.from(n.headers),n.data=nl.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Yp.getAdapter(n.adapter||Is.adapter,n)(n).then(function(i){return il(n),i.data=nl.call(n,n.transformResponse,i),i.headers=Jt.from(i.headers),i},function(i){return Gp(i)||(il(n),i&&i.response&&(i.response.data=nl.call(n,n.transformResponse,i.response),i.response.headers=Jt.from(i.response.headers))),Promise.reject(i)})}const jp="1.13.2",ra={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{ra[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const Ed={};ra.transitional=function(e,t,i){function r(s,o){return"[Axios v"+jp+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Xe(r(o," has been removed"+(t?" in "+t:"")),Xe.ERR_DEPRECATED);return t&&!Ed[o]&&(Ed[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};ra.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function DT(n,e,t){if(typeof n!="object")throw new Xe("options must be an object",Xe.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=n[s],l=a===void 0||o(a,s,n);if(l!==!0)throw new Xe("option "+s+" must be "+l,Xe.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Xe("Unknown option "+s,Xe.ERR_BAD_OPTION)}}const Eo={assertOptions:DT,validators:ra},Rn=Eo.validators;let Zi=class{constructor(e){this.defaults=e||{},this.interceptors={request:new ud,response:new ud}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Qi(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:s}=t;i!==void 0&&Eo.assertOptions(i,{silentJSONParsing:Rn.transitional(Rn.boolean),forcedJSONParsing:Rn.transitional(Rn.boolean),clarifyTimeoutError:Rn.transitional(Rn.boolean)},!1),r!=null&&(K.isFunction(r)?t.paramsSerializer={serialize:r}:Eo.assertOptions(r,{encode:Rn.function,serialize:Rn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Eo.assertOptions(t,{baseUrl:Rn.spelling("baseURL"),withXsrfToken:Rn.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=s&&K.merge(s.common,s[t.method]);s&&K.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),t.headers=Jt.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(t)===!1||(l=l&&x.synchronous,a.unshift(x.fulfilled,x.rejected))});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let u,f=0,d;if(!l){const g=[Md.bind(this),void 0];for(g.unshift(...a),g.push(...c),d=g.length,u=Promise.resolve(t);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let p=t;for(;f<d;){const g=a[f++],x=a[f++];try{p=g(p)}catch(m){x.call(this,m);break}}try{u=Md.call(this,p)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Qi(this.defaults,e);const t=Wp(e.baseURL,e.url,e.allowAbsoluteUrls);return Vp(t,e.params,e.paramsSerializer)}};K.forEach(["delete","get","head","options"],function(e){Zi.prototype[e]=function(t,i){return this.request(Qi(i||{},{method:e,url:t,data:(i||{}).data}))}});K.forEach(["post","put","patch"],function(e){function t(i){return function(s,o,a){return this.request(Qi(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Zi.prototype[e]=t(),Zi.prototype[e+"Form"]=t(!0)});let LT=class $p{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Gr(s,o,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new $p(function(r){e=r}),cancel:e}}};function IT(n){return function(t){return n.apply(null,t)}}function UT(n){return K.isObject(n)&&n.isAxiosError===!0}const xc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(xc).forEach(([n,e])=>{xc[e]=n});function Kp(n){const e=new Zi(n),t=wp(Zi.prototype.request,e);return K.extend(t,Zi.prototype,e,{allOwnKeys:!0}),K.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return Kp(Qi(n,r))},t}const bt=Kp(Is);bt.Axios=Zi;bt.CanceledError=Gr;bt.CancelToken=LT;bt.isCancel=Gp;bt.VERSION=jp;bt.toFormData=ia;bt.AxiosError=Xe;bt.Cancel=bt.CanceledError;bt.all=function(e){return Promise.all(e)};bt.spread=IT;bt.isAxiosError=UT;bt.mergeConfig=Qi;bt.AxiosHeaders=Jt;bt.formToJSON=n=>Hp(K.isHTMLForm(n)?new FormData(n):n);bt.getAdapter=Yp.getAdapter;bt.HttpStatusCode=xc;bt.default=bt;const{Axios:qT,AxiosError:YT,CanceledError:jT,isCancel:$T,CancelToken:KT,VERSION:ZT,all:JT,Cancel:QT,isAxiosError:eA,spread:tA,toFormData:nA,AxiosHeaders:iA,HttpStatusCode:rA,formToJSON:sA,getAdapter:oA,mergeConfig:aA}=bt,NT={class:"flex justify-center items-center h-screen bg-yellow-200"},FT={class:"text-red-500 text-4xl"},OT={__name:"HomeView",setup(n){const e=Jn("");async function t(){const i=await bt.get("http://ip-api.com/json/162.120.187.77");e.value=i.data.country}return Uc(()=>{t(),console.log("HomeView mounted",e.value)}),(i,r)=>(Bc(),Vc("div",NT,[Ne("h1",FT,bo(e.value),1)]))}},BT=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},VT={},zT={class:"text-sm"};function HT(n,e){return Bc(),Vc("h1",zT,"About Page")}const GT=BT(VT,[["render",HT]]),kT=sy({history:Ob("/vue-first-project/"),routes:[{path:"/",name:"home",component:OT},{path:"/about",name:"about",component:GT}]}),ou=v_(QE);ou.use(b_());ou.use(kT);ou.mount("#app");
