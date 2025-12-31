(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function makeMap(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const EMPTY_OBJ={},EMPTY_ARR=[],NOOP=()=>{},NO=()=>!1,isOn=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),isModelListener=n=>n.startsWith("onUpdate:"),extend$1=Object.assign,remove=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},hasOwnProperty$2=Object.prototype.hasOwnProperty,hasOwn=(n,e)=>hasOwnProperty$2.call(n,e),isArray$2=Array.isArray,isMap=n=>toTypeString(n)==="[object Map]",isSet=n=>toTypeString(n)==="[object Set]",isFunction$2=n=>typeof n=="function",isString$1=n=>typeof n=="string",isSymbol=n=>typeof n=="symbol",isObject$1=n=>n!==null&&typeof n=="object",isPromise=n=>(isObject$1(n)||isFunction$2(n))&&isFunction$2(n.then)&&isFunction$2(n.catch),objectToString=Object.prototype.toString,toTypeString=n=>objectToString.call(n),toRawType=n=>toTypeString(n).slice(8,-1),isPlainObject$1=n=>toTypeString(n)==="[object Object]",isIntegerKey=n=>isString$1(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,isReservedProp=makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cacheStringFunction=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},camelizeRE=/-\w/g,camelize=cacheStringFunction(n=>n.replace(camelizeRE,e=>e.slice(1).toUpperCase())),hyphenateRE=/\B([A-Z])/g,hyphenate=cacheStringFunction(n=>n.replace(hyphenateRE,"-$1").toLowerCase()),capitalize=cacheStringFunction(n=>n.charAt(0).toUpperCase()+n.slice(1)),toHandlerKey=cacheStringFunction(n=>n?`on${capitalize(n)}`:""),hasChanged=(n,e)=>!Object.is(n,e),invokeArrayFns=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},def=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},looseToNumber=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let _globalThis;const getGlobalThis=()=>_globalThis||(_globalThis=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function normalizeStyle(n){if(isArray$2(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=isString$1(i)?parseStringStyle(i):normalizeStyle(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(isString$1(n)||isObject$1(n))return n}const listDelimiterRE=/;(?![^(]*\))/g,propertyDelimiterRE=/:([^]+)/,styleCommentRE=/\/\*[^]*?\*\//g;function parseStringStyle(n){const e={};return n.replace(styleCommentRE,"").split(listDelimiterRE).forEach(t=>{if(t){const i=t.split(propertyDelimiterRE);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function normalizeClass(n){let e="";if(isString$1(n))e=n;else if(isArray$2(n))for(let t=0;t<n.length;t++){const i=normalizeClass(n[t]);i&&(e+=i+" ")}else if(isObject$1(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const specialBooleanAttrs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",isSpecialBooleanAttr=makeMap(specialBooleanAttrs);function includeBooleanAttr(n){return!!n||n===""}const isRef$1=n=>!!(n&&n.__v_isRef===!0),toDisplayString=n=>isString$1(n)?n:n==null?"":isArray$2(n)||isObject$1(n)&&(n.toString===objectToString||!isFunction$2(n.toString))?isRef$1(n)?toDisplayString(n.value):JSON.stringify(n,replacer,2):String(n),replacer=(n,e)=>isRef$1(e)?replacer(n,e.value):isMap(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[stringifySymbol(i,s)+" =>"]=r,t),{})}:isSet(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>stringifySymbol(t))}:isSymbol(e)?stringifySymbol(e):isObject$1(e)&&!isArray$2(e)&&!isPlainObject$1(e)?String(e):e,stringifySymbol=(n,e="")=>{var t;return isSymbol(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let activeEffectScope;class EffectScope{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=activeEffectScope,!e&&activeEffectScope&&(this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=activeEffectScope;try{return activeEffectScope=this,e()}finally{activeEffectScope=t}}}on(){++this._on===1&&(this.prevScope=activeEffectScope,activeEffectScope=this)}off(){this._on>0&&--this._on===0&&(activeEffectScope=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function effectScope(n){return new EffectScope(n)}function getCurrentScope(){return activeEffectScope}let activeSub;const pausedQueueEffects=new WeakSet;class ReactiveEffect{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,activeEffectScope&&activeEffectScope.active&&activeEffectScope.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pausedQueueEffects.has(this)&&(pausedQueueEffects.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||batch(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cleanupEffect(this),prepareDeps(this);const e=activeSub,t=shouldTrack;activeSub=this,shouldTrack=!0;try{return this.fn()}finally{cleanupDeps(this),activeSub=e,shouldTrack=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)removeSub(e);this.deps=this.depsTail=void 0,cleanupEffect(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pausedQueueEffects.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){isDirty(this)&&this.run()}get dirty(){return isDirty(this)}}let batchDepth=0,batchedSub,batchedComputed;function batch(n,e=!1){if(n.flags|=8,e){n.next=batchedComputed,batchedComputed=n;return}n.next=batchedSub,batchedSub=n}function startBatch(){batchDepth++}function endBatch(){if(--batchDepth>0)return;if(batchedComputed){let e=batchedComputed;for(batchedComputed=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;batchedSub;){let e=batchedSub;for(batchedSub=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function prepareDeps(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cleanupDeps(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),removeSub(i),removeDep(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function isDirty(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(refreshComputed(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function refreshComputed(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===globalVersion)||(n.globalVersion=globalVersion,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!isDirty(n))))return;n.flags|=2;const e=n.dep,t=activeSub,i=shouldTrack;activeSub=n,shouldTrack=!0;try{prepareDeps(n);const r=n.fn(n._value);(e.version===0||hasChanged(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{activeSub=t,shouldTrack=i,cleanupDeps(n),n.flags&=-3}}function removeSub(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)removeSub(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function removeDep(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let shouldTrack=!0;const trackStack=[];function pauseTracking(){trackStack.push(shouldTrack),shouldTrack=!1}function resetTracking(){const n=trackStack.pop();shouldTrack=n===void 0?!0:n}function cleanupEffect(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=activeSub;activeSub=void 0;try{e()}finally{activeSub=t}}}let globalVersion=0;class Link{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dep{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!activeSub||!shouldTrack||activeSub===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==activeSub)t=this.activeLink=new Link(activeSub,this),activeSub.deps?(t.prevDep=activeSub.depsTail,activeSub.depsTail.nextDep=t,activeSub.depsTail=t):activeSub.deps=activeSub.depsTail=t,addSub(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=activeSub.depsTail,t.nextDep=void 0,activeSub.depsTail.nextDep=t,activeSub.depsTail=t,activeSub.deps===t&&(activeSub.deps=i)}return t}trigger(e){this.version++,globalVersion++,this.notify(e)}notify(e){startBatch();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{endBatch()}}}function addSub(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)addSub(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const targetMap=new WeakMap,ITERATE_KEY=Symbol(""),MAP_KEY_ITERATE_KEY=Symbol(""),ARRAY_ITERATE_KEY=Symbol("");function track(n,e,t){if(shouldTrack&&activeSub){let i=targetMap.get(n);i||targetMap.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Dep),r.map=i,r.key=t),r.track()}}function trigger(n,e,t,i,r,s){const a=targetMap.get(n);if(!a){globalVersion++;return}const o=l=>{l&&l.trigger()};if(startBatch(),e==="clear")a.forEach(o);else{const l=isArray$2(n),c=l&&isIntegerKey(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===ARRAY_ITERATE_KEY||!isSymbol(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(ARRAY_ITERATE_KEY)),e){case"add":l?c&&o(a.get("length")):(o(a.get(ITERATE_KEY)),isMap(n)&&o(a.get(MAP_KEY_ITERATE_KEY)));break;case"delete":l||(o(a.get(ITERATE_KEY)),isMap(n)&&o(a.get(MAP_KEY_ITERATE_KEY)));break;case"set":isMap(n)&&o(a.get(ITERATE_KEY));break}}endBatch()}function reactiveReadArray(n){const e=toRaw(n);return e===n?e:(track(e,"iterate",ARRAY_ITERATE_KEY),isShallow(n)?e:e.map(toReactive))}function shallowReadArray(n){return track(n=toRaw(n),"iterate",ARRAY_ITERATE_KEY),n}function toWrapped(n,e){return isReadonly(n)?isReactive(n)?toReadonly(toReactive(e)):toReadonly(e):toReactive(e)}const arrayInstrumentations={__proto__:null,[Symbol.iterator](){return iterator$1(this,Symbol.iterator,n=>toWrapped(this,n))},concat(...n){return reactiveReadArray(this).concat(...n.map(e=>isArray$2(e)?reactiveReadArray(e):e))},entries(){return iterator$1(this,"entries",n=>(n[1]=toWrapped(this,n[1]),n))},every(n,e){return apply(this,"every",n,e,void 0,arguments)},filter(n,e){return apply(this,"filter",n,e,t=>t.map(i=>toWrapped(this,i)),arguments)},find(n,e){return apply(this,"find",n,e,t=>toWrapped(this,t),arguments)},findIndex(n,e){return apply(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return apply(this,"findLast",n,e,t=>toWrapped(this,t),arguments)},findLastIndex(n,e){return apply(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return apply(this,"forEach",n,e,void 0,arguments)},includes(...n){return searchProxy(this,"includes",n)},indexOf(...n){return searchProxy(this,"indexOf",n)},join(n){return reactiveReadArray(this).join(n)},lastIndexOf(...n){return searchProxy(this,"lastIndexOf",n)},map(n,e){return apply(this,"map",n,e,void 0,arguments)},pop(){return noTracking(this,"pop")},push(...n){return noTracking(this,"push",n)},reduce(n,...e){return reduce(this,"reduce",n,e)},reduceRight(n,...e){return reduce(this,"reduceRight",n,e)},shift(){return noTracking(this,"shift")},some(n,e){return apply(this,"some",n,e,void 0,arguments)},splice(...n){return noTracking(this,"splice",n)},toReversed(){return reactiveReadArray(this).toReversed()},toSorted(n){return reactiveReadArray(this).toSorted(n)},toSpliced(...n){return reactiveReadArray(this).toSpliced(...n)},unshift(...n){return noTracking(this,"unshift",n)},values(){return iterator$1(this,"values",n=>toWrapped(this,n))}};function iterator$1(n,e,t){const i=shallowReadArray(n),r=i[e]();return i!==n&&!isShallow(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const arrayProto=Array.prototype;function apply(n,e,t,i,r,s){const a=shallowReadArray(n),o=a!==n&&!isShallow(n),l=a[e];if(l!==arrayProto[e]){const f=l.apply(n,s);return o?toReactive(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,toWrapped(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function reduce(n,e,t,i){const r=shallowReadArray(n);let s=t;return r!==n&&(isShallow(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,toWrapped(n,o),l,n)}),r[e](s,...i)}function searchProxy(n,e,t){const i=toRaw(n);track(i,"iterate",ARRAY_ITERATE_KEY);const r=i[e](...t);return(r===-1||r===!1)&&isProxy(t[0])?(t[0]=toRaw(t[0]),i[e](...t)):r}function noTracking(n,e,t=[]){pauseTracking(),startBatch();const i=toRaw(n)[e].apply(n,t);return endBatch(),resetTracking(),i}const isNonTrackableKeys=makeMap("__proto__,__v_isRef,__isVue"),builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(isSymbol));function hasOwnProperty$1(n){isSymbol(n)||(n=String(n));const e=toRaw(this);return track(e,"has",n),e.hasOwnProperty(n)}class BaseReactiveHandler{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?shallowReadonlyMap:readonlyMap:s?shallowReactiveMap:reactiveMap).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=isArray$2(e);if(!r){let l;if(a&&(l=arrayInstrumentations[t]))return l;if(t==="hasOwnProperty")return hasOwnProperty$1}const o=Reflect.get(e,t,isRef(e)?e:i);if((isSymbol(t)?builtInSymbols.has(t):isNonTrackableKeys(t))||(r||track(e,"get",t),s))return o;if(isRef(o)){const l=a&&isIntegerKey(t)?o:o.value;return r&&isObject$1(l)?readonly(l):l}return isObject$1(o)?r?readonly(o):reactive(o):o}}class MutableReactiveHandler extends BaseReactiveHandler{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=isArray$2(e)&&isIntegerKey(t);if(!this._isShallow){const c=isReadonly(s);if(!isShallow(i)&&!isReadonly(i)&&(s=toRaw(s),i=toRaw(i)),!a&&isRef(s)&&!isRef(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:hasOwn(e,t),l=Reflect.set(e,t,i,isRef(e)?e:r);return e===toRaw(r)&&(o?hasChanged(i,s)&&trigger(e,"set",t,i):trigger(e,"add",t,i)),l}deleteProperty(e,t){const i=hasOwn(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&trigger(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!isSymbol(t)||!builtInSymbols.has(t))&&track(e,"has",t),i}ownKeys(e){return track(e,"iterate",isArray$2(e)?"length":ITERATE_KEY),Reflect.ownKeys(e)}}class ReadonlyReactiveHandler extends BaseReactiveHandler{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const mutableHandlers=new MutableReactiveHandler,readonlyHandlers=new ReadonlyReactiveHandler,shallowReactiveHandlers=new MutableReactiveHandler(!0),shallowReadonlyHandlers=new ReadonlyReactiveHandler(!0),toShallow=n=>n,getProto=n=>Reflect.getPrototypeOf(n);function createIterableMethod(n,e,t){return function(...i){const r=this.__v_raw,s=toRaw(r),a=isMap(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?toShallow:e?toReadonly:toReactive;return!e&&track(s,"iterate",l?MAP_KEY_ITERATE_KEY:ITERATE_KEY),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function createReadonlyMethod(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function createInstrumentations(n,e){const t={get(r){const s=this.__v_raw,a=toRaw(s),o=toRaw(r);n||(hasChanged(r,o)&&track(a,"get",r),track(a,"get",o));const{has:l}=getProto(a),c=e?toShallow:n?toReadonly:toReactive;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&track(toRaw(r),"iterate",ITERATE_KEY),r.size},has(r){const s=this.__v_raw,a=toRaw(s),o=toRaw(r);return n||(hasChanged(r,o)&&track(a,"has",r),track(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=toRaw(o),c=e?toShallow:n?toReadonly:toReactive;return!n&&track(l,"iterate",ITERATE_KEY),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return extend$1(t,n?{add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear")}:{add(r){!e&&!isShallow(r)&&!isReadonly(r)&&(r=toRaw(r));const s=toRaw(this);return getProto(s).has.call(s,r)||(s.add(r),trigger(s,"add",r,r)),this},set(r,s){!e&&!isShallow(s)&&!isReadonly(s)&&(s=toRaw(s));const a=toRaw(this),{has:o,get:l}=getProto(a);let c=o.call(a,r);c||(r=toRaw(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?hasChanged(s,u)&&trigger(a,"set",r,s):trigger(a,"add",r,s),this},delete(r){const s=toRaw(this),{has:a,get:o}=getProto(s);let l=a.call(s,r);l||(r=toRaw(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&trigger(s,"delete",r,void 0),c},clear(){const r=toRaw(this),s=r.size!==0,a=r.clear();return s&&trigger(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=createIterableMethod(r,n,e)}),t}function createInstrumentationGetter(n,e){const t=createInstrumentations(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(hasOwn(t,r)&&r in i?t:i,r,s)}const mutableCollectionHandlers={get:createInstrumentationGetter(!1,!1)},shallowCollectionHandlers={get:createInstrumentationGetter(!1,!0)},readonlyCollectionHandlers={get:createInstrumentationGetter(!0,!1)},shallowReadonlyCollectionHandlers={get:createInstrumentationGetter(!0,!0)},reactiveMap=new WeakMap,shallowReactiveMap=new WeakMap,readonlyMap=new WeakMap,shallowReadonlyMap=new WeakMap;function targetTypeMap(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function getTargetType(n){return n.__v_skip||!Object.isExtensible(n)?0:targetTypeMap(toRawType(n))}function reactive(n){return isReadonly(n)?n:createReactiveObject(n,!1,mutableHandlers,mutableCollectionHandlers,reactiveMap)}function shallowReactive(n){return createReactiveObject(n,!1,shallowReactiveHandlers,shallowCollectionHandlers,shallowReactiveMap)}function readonly(n){return createReactiveObject(n,!0,readonlyHandlers,readonlyCollectionHandlers,readonlyMap)}function shallowReadonly(n){return createReactiveObject(n,!0,shallowReadonlyHandlers,shallowReadonlyCollectionHandlers,shallowReadonlyMap)}function createReactiveObject(n,e,t,i,r){if(!isObject$1(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=getTargetType(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function isReactive(n){return isReadonly(n)?isReactive(n.__v_raw):!!(n&&n.__v_isReactive)}function isReadonly(n){return!!(n&&n.__v_isReadonly)}function isShallow(n){return!!(n&&n.__v_isShallow)}function isProxy(n){return n?!!n.__v_raw:!1}function toRaw(n){const e=n&&n.__v_raw;return e?toRaw(e):n}function markRaw(n){return!hasOwn(n,"__v_skip")&&Object.isExtensible(n)&&def(n,"__v_skip",!0),n}const toReactive=n=>isObject$1(n)?reactive(n):n,toReadonly=n=>isObject$1(n)?readonly(n):n;function isRef(n){return n?n.__v_isRef===!0:!1}function ref(n){return createRef(n,!1)}function shallowRef(n){return createRef(n,!0)}function createRef(n,e){return isRef(n)?n:new RefImpl(n,e)}class RefImpl{constructor(e,t){this.dep=new Dep,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:toRaw(e),this._value=t?e:toReactive(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||isShallow(e)||isReadonly(e);e=i?e:toRaw(e),hasChanged(e,t)&&(this._rawValue=e,this._value=i?e:toReactive(e),this.dep.trigger())}}function unref(n){return isRef(n)?n.value:n}const shallowUnwrapHandlers={get:(n,e,t)=>e==="__v_raw"?n:unref(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return isRef(r)&&!isRef(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function proxyRefs(n){return isReactive(n)?n:new Proxy(n,shallowUnwrapHandlers)}class ComputedRefImpl{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Dep(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=globalVersion-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&activeSub!==this)return batch(this,!0),!0}get value(){const e=this.dep.track();return refreshComputed(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function computed$1(n,e,t=!1){let i,r;return isFunction$2(n)?i=n:(i=n.get,r=n.set),new ComputedRefImpl(i,r,t)}const INITIAL_WATCHER_VALUE={},cleanupMap=new WeakMap;let activeWatcher;function onWatcherCleanup(n,e=!1,t=activeWatcher){if(t){let i=cleanupMap.get(t);i||cleanupMap.set(t,i=[]),i.push(n)}}function watch$1(n,e,t=EMPTY_OBJ){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=b=>r?b:isShallow(b)||r===!1||r===0?traverse(b,1):traverse(b);let u,f,d,m,x=!1,S=!1;if(isRef(n)?(f=()=>n.value,x=isShallow(n)):isReactive(n)?(f=()=>c(n),x=!0):isArray$2(n)?(S=!0,x=n.some(b=>isReactive(b)||isShallow(b)),f=()=>n.map(b=>{if(isRef(b))return b.value;if(isReactive(b))return c(b);if(isFunction$2(b))return l?l(b,2):b()})):isFunction$2(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){pauseTracking();try{d()}finally{resetTracking()}}const b=activeWatcher;activeWatcher=u;try{return l?l(n,3,[m]):n(m)}finally{activeWatcher=b}}:f=NOOP,e&&r){const b=f,P=r===!0?1/0:r;f=()=>traverse(b(),P)}const _=getCurrentScope(),g=()=>{u.stop(),_&&_.active&&remove(_.effects,u)};if(s&&e){const b=e;e=(...P)=>{b(...P),g()}}let T=S?new Array(n.length).fill(INITIAL_WATCHER_VALUE):INITIAL_WATCHER_VALUE;const A=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const P=u.run();if(r||x||(S?P.some((N,D)=>hasChanged(N,T[D])):hasChanged(P,T))){d&&d();const N=activeWatcher;activeWatcher=u;try{const D=[P,T===INITIAL_WATCHER_VALUE?void 0:S&&T[0]===INITIAL_WATCHER_VALUE?[]:T,m];T=P,l?l(e,3,D):e(...D)}finally{activeWatcher=N}}}else u.run()};return o&&o(A),u=new ReactiveEffect(f),u.scheduler=a?()=>a(A,!1):A,m=b=>onWatcherCleanup(b,!1,u),d=u.onStop=()=>{const b=cleanupMap.get(u);if(b){if(l)l(b,4);else for(const P of b)P();cleanupMap.delete(u)}},e?i?A(!0):T=u.run():a?a(A.bind(null,!0),!0):u.run(),g.pause=u.pause.bind(u),g.resume=u.resume.bind(u),g.stop=g,g}function traverse(n,e=1/0,t){if(e<=0||!isObject$1(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,isRef(n))traverse(n.value,e,t);else if(isArray$2(n))for(let i=0;i<n.length;i++)traverse(n[i],e,t);else if(isSet(n)||isMap(n))n.forEach(i=>{traverse(i,e,t)});else if(isPlainObject$1(n)){for(const i in n)traverse(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&traverse(n[i],e,t)}return n}const stack=[];let isWarning=!1;function warn$1(n,...e){if(isWarning)return;isWarning=!0,pauseTracking();const t=stack.length?stack[stack.length-1].component:null,i=t&&t.appContext.config.warnHandler,r=getComponentTrace();if(i)callWithErrorHandling(i,t,11,[n+e.map(s=>{var a,o;return(o=(a=s.toString)==null?void 0:a.call(s))!=null?o:JSON.stringify(s)}).join(""),t&&t.proxy,r.map(({vnode:s})=>`at <${formatComponentName(t,s.type)}>`).join(`
`),r]);else{const s=[`[Vue warn]: ${n}`,...e];r.length&&s.push(`
`,...formatTrace(r)),console.warn(...s)}resetTracking(),isWarning=!1}function getComponentTrace(){let n=stack[stack.length-1];if(!n)return[];const e=[];for(;n;){const t=e[0];t&&t.vnode===n?t.recurseCount++:e.push({vnode:n,recurseCount:0});const i=n.component&&n.component.parent;n=i&&i.vnode}return e}function formatTrace(n){const e=[];return n.forEach((t,i)=>{e.push(...i===0?[]:[`
`],...formatTraceEntry(t))}),e}function formatTraceEntry({vnode:n,recurseCount:e}){const t=e>0?`... (${e} recursive calls)`:"",i=n.component?n.component.parent==null:!1,r=` at <${formatComponentName(n.component,n.type,i)}`,s=">"+t;return n.props?[r,...formatProps(n.props),s]:[r+s]}function formatProps(n){const e=[],t=Object.keys(n);return t.slice(0,3).forEach(i=>{e.push(...formatProp(i,n[i]))}),t.length>3&&e.push(" ..."),e}function formatProp(n,e,t){return isString$1(e)?(e=JSON.stringify(e),t?e:[`${n}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?t?e:[`${n}=${e}`]:isRef(e)?(e=formatProp(n,toRaw(e.value),!0),t?e:[`${n}=Ref<`,e,">"]):isFunction$2(e)?[`${n}=fn${e.name?`<${e.name}>`:""}`]:(e=toRaw(e),t?e:[`${n}=`,e])}function callWithErrorHandling(n,e,t,i){try{return i?n(...i):n()}catch(r){handleError(r,e,t)}}function callWithAsyncErrorHandling(n,e,t,i){if(isFunction$2(n)){const r=callWithErrorHandling(n,e,t,i);return r&&isPromise(r)&&r.catch(s=>{handleError(s,e,t)}),r}if(isArray$2(n)){const r=[];for(let s=0;s<n.length;s++)r.push(callWithAsyncErrorHandling(n[s],e,t,i));return r}}function handleError(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||EMPTY_OBJ;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){pauseTracking(),callWithErrorHandling(s,null,10,[n,l,c]),resetTracking();return}}logError(n,t,r,i,a)}function logError(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const queue=[];let flushIndex=-1;const pendingPostFlushCbs=[];let activePostFlushCbs=null,postFlushIndex=0;const resolvedPromise=Promise.resolve();let currentFlushPromise=null;function nextTick(n){const e=currentFlushPromise||resolvedPromise;return n?e.then(this?n.bind(this):n):e}function findInsertionIndex$1(n){let e=flushIndex+1,t=queue.length;for(;e<t;){const i=e+t>>>1,r=queue[i],s=getId(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function queueJob(n){if(!(n.flags&1)){const e=getId(n),t=queue[queue.length-1];!t||!(n.flags&2)&&e>=getId(t)?queue.push(n):queue.splice(findInsertionIndex$1(e),0,n),n.flags|=1,queueFlush()}}function queueFlush(){currentFlushPromise||(currentFlushPromise=resolvedPromise.then(flushJobs))}function queuePostFlushCb(n){isArray$2(n)?pendingPostFlushCbs.push(...n):activePostFlushCbs&&n.id===-1?activePostFlushCbs.splice(postFlushIndex+1,0,n):n.flags&1||(pendingPostFlushCbs.push(n),n.flags|=1),queueFlush()}function flushPreFlushCbs(n,e,t=flushIndex+1){for(;t<queue.length;t++){const i=queue[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;queue.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function flushPostFlushCbs(n){if(pendingPostFlushCbs.length){const e=[...new Set(pendingPostFlushCbs)].sort((t,i)=>getId(t)-getId(i));if(pendingPostFlushCbs.length=0,activePostFlushCbs){activePostFlushCbs.push(...e);return}for(activePostFlushCbs=e,postFlushIndex=0;postFlushIndex<activePostFlushCbs.length;postFlushIndex++){const t=activePostFlushCbs[postFlushIndex];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}activePostFlushCbs=null,postFlushIndex=0}}const getId=n=>n.id==null?n.flags&2?-1:1/0:n.id;function flushJobs(n){try{for(flushIndex=0;flushIndex<queue.length;flushIndex++){const e=queue[flushIndex];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),callWithErrorHandling(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;flushIndex<queue.length;flushIndex++){const e=queue[flushIndex];e&&(e.flags&=-2)}flushIndex=-1,queue.length=0,flushPostFlushCbs(),currentFlushPromise=null,(queue.length||pendingPostFlushCbs.length)&&flushJobs()}}let currentRenderingInstance=null,currentScopeId=null;function setCurrentRenderingInstance(n){const e=currentRenderingInstance;return currentRenderingInstance=n,currentScopeId=n&&n.type.__scopeId||null,e}function withCtx(n,e=currentRenderingInstance,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&setBlockTracking(-1);const s=setCurrentRenderingInstance(e);let a;try{a=n(...r)}finally{setCurrentRenderingInstance(s),i._d&&setBlockTracking(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function invokeDirectiveHook(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(pauseTracking(),callWithAsyncErrorHandling(l,t,8,[n.el,o,n,e]),resetTracking())}}function provide(n,e){if(currentInstance){let t=currentInstance.provides;const i=currentInstance.parent&&currentInstance.parent.provides;i===t&&(t=currentInstance.provides=Object.create(i)),t[n]=e}}function inject(n,e,t=!1){const i=getCurrentInstance();if(i||currentApp){let r=currentApp?currentApp._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&isFunction$2(e)?e.call(i&&i.proxy):e}}const ssrContextKey=Symbol.for("v-scx"),useSSRContext=()=>inject(ssrContextKey);function watch(n,e,t){return doWatch(n,e,t)}function doWatch(n,e,t=EMPTY_OBJ){const{immediate:i,deep:r,flush:s,once:a}=t,o=extend$1({},t),l=e&&i||!e&&s!=="post";let c;if(isInSSRComponentSetup){if(s==="sync"){const m=useSSRContext();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=NOOP,m.resume=NOOP,m.pause=NOOP,m}}const u=currentInstance;o.call=(m,x,S)=>callWithAsyncErrorHandling(m,u,x,S);let f=!1;s==="post"?o.scheduler=m=>{queuePostRenderEffect(m,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,x)=>{x?m():queueJob(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=watch$1(n,e,o);return isInSSRComponentSetup&&(c?c.push(d):l&&d()),d}function instanceWatch(n,e,t){const i=this.proxy,r=isString$1(n)?n.includes(".")?createPathGetter(i,n):()=>i[n]:n.bind(i,i);let s;isFunction$2(e)?s=e:(s=e.handler,t=e);const a=setCurrentInstance(this),o=doWatch(r,s.bind(i),t);return a(),o}function createPathGetter(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const TeleportEndKey=Symbol("_vte"),isTeleport=n=>n.__isTeleport,leaveCbKey=Symbol("_leaveCb");function setTransitionHooks(n,e){n.shapeFlag&6&&n.component?(n.transition=e,setTransitionHooks(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function defineComponent(n,e){return isFunction$2(n)?extend$1({name:n.name},e,{setup:n}):n}function markAsyncBoundary(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const pendingSetRefMap=new WeakMap;function setRef(n,e,t,i,r=!1){if(isArray$2(n)){n.forEach((x,S)=>setRef(x,e&&(isArray$2(e)?e[S]:e),t,i,r));return}if(isAsyncWrapper(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&setRef(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?getComponentPublicInstance(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===EMPTY_OBJ?o.refs={}:o.refs,f=o.setupState,d=toRaw(f),m=f===EMPTY_OBJ?NO:x=>hasOwn(d,x);if(c!=null&&c!==l){if(invalidatePendingSetRef(e),isString$1(c))u[c]=null,m(c)&&(f[c]=null);else if(isRef(c)){c.value=null;const x=e;x.k&&(u[x.k]=null)}}if(isFunction$2(l))callWithErrorHandling(l,o,12,[a,u]);else{const x=isString$1(l),S=isRef(l);if(x||S){const _=()=>{if(n.f){const g=x?m(l)?f[l]:u[l]:l.value;if(r)isArray$2(g)&&remove(g,s);else if(isArray$2(g))g.includes(s)||g.push(s);else if(x)u[l]=[s],m(l)&&(f[l]=u[l]);else{const T=[s];l.value=T,n.k&&(u[n.k]=T)}}else x?(u[l]=a,m(l)&&(f[l]=a)):S&&(l.value=a,n.k&&(u[n.k]=a))};if(a){const g=()=>{_(),pendingSetRefMap.delete(n)};g.id=-1,pendingSetRefMap.set(n,g),queuePostRenderEffect(g,t)}else invalidatePendingSetRef(n),_()}}}function invalidatePendingSetRef(n){const e=pendingSetRefMap.get(n);e&&(e.flags|=8,pendingSetRefMap.delete(n))}getGlobalThis().requestIdleCallback;getGlobalThis().cancelIdleCallback;const isAsyncWrapper=n=>!!n.type.__asyncLoader,isKeepAlive=n=>n.type.__isKeepAlive;function onActivated(n,e){registerKeepAliveHook(n,"a",e)}function onDeactivated(n,e){registerKeepAliveHook(n,"da",e)}function registerKeepAliveHook(n,e,t=currentInstance){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(injectHook(e,i,t),t){let r=t.parent;for(;r&&r.parent;)isKeepAlive(r.parent.vnode)&&injectToKeepAliveRoot(i,e,t,r),r=r.parent}}function injectToKeepAliveRoot(n,e,t,i){const r=injectHook(e,n,i,!0);onUnmounted(()=>{remove(i[e],r)},t)}function injectHook(n,e,t=currentInstance,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{pauseTracking();const o=setCurrentInstance(t),l=callWithAsyncErrorHandling(e,t,n,a);return o(),resetTracking(),l});return i?r.unshift(s):r.push(s),s}}const createHook=n=>(e,t=currentInstance)=>{(!isInSSRComponentSetup||n==="sp")&&injectHook(n,(...i)=>e(...i),t)},onBeforeMount=createHook("bm"),onMounted=createHook("m"),onBeforeUpdate=createHook("bu"),onUpdated=createHook("u"),onBeforeUnmount=createHook("bum"),onUnmounted=createHook("um"),onServerPrefetch=createHook("sp"),onRenderTriggered=createHook("rtg"),onRenderTracked=createHook("rtc");function onErrorCaptured(n,e=currentInstance){injectHook("ec",n,e)}const NULL_DYNAMIC_COMPONENT=Symbol.for("v-ndc"),getPublicInstance=n=>n?isStatefulComponent(n)?getComponentPublicInstance(n):getPublicInstance(n.parent):null,publicPropertiesMap=extend$1(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>getPublicInstance(n.parent),$root:n=>getPublicInstance(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>resolveMergedOptions(n),$forceUpdate:n=>n.f||(n.f=()=>{queueJob(n.update)}),$nextTick:n=>n.n||(n.n=nextTick.bind(n.proxy)),$watch:n=>instanceWatch.bind(n)}),hasSetupBinding=(n,e)=>n!==EMPTY_OBJ&&!n.__isScriptSetup&&hasOwn(n,e),PublicInstanceProxyHandlers={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(hasSetupBinding(i,e))return a[e]=1,i[e];if(r!==EMPTY_OBJ&&hasOwn(r,e))return a[e]=2,r[e];if(hasOwn(s,e))return a[e]=3,s[e];if(t!==EMPTY_OBJ&&hasOwn(t,e))return a[e]=4,t[e];shouldCacheAccess&&(a[e]=0)}}const c=publicPropertiesMap[e];let u,f;if(c)return e==="$attrs"&&track(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==EMPTY_OBJ&&hasOwn(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,hasOwn(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return hasSetupBinding(r,e)?(r[e]=t,!0):i!==EMPTY_OBJ&&hasOwn(i,e)?(i[e]=t,!0):hasOwn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==EMPTY_OBJ&&o[0]!=="$"&&hasOwn(n,o)||hasSetupBinding(e,o)||hasOwn(s,o)||hasOwn(i,o)||hasOwn(publicPropertiesMap,o)||hasOwn(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:hasOwn(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function normalizePropsOrEmits(n){return isArray$2(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let shouldCacheAccess=!0;function applyOptions(n){const e=resolveMergedOptions(n),t=n.proxy,i=n.ctx;shouldCacheAccess=!1,e.beforeCreate&&callHook(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:x,activated:S,deactivated:_,beforeDestroy:g,beforeUnmount:T,destroyed:A,unmounted:b,render:P,renderTracked:N,renderTriggered:D,errorCaptured:z,serverPrefetch:y,expose:R,inheritAttrs:U,components:K,directives:$,filters:se}=e;if(c&&resolveInjections(c,i,null),a)for(const G in a){const J=a[G];isFunction$2(J)&&(i[G]=J.bind(t))}if(r){const G=r.call(t,t);isObject$1(G)&&(n.data=reactive(G))}if(shouldCacheAccess=!0,s)for(const G in s){const J=s[G],xe=isFunction$2(J)?J.bind(t,t):isFunction$2(J.get)?J.get.bind(t,t):NOOP,ge=!isFunction$2(J)&&isFunction$2(J.set)?J.set.bind(t):NOOP,me=computed({get:xe,set:ge});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>me.value,set:Ie=>me.value=Ie})}if(o)for(const G in o)createWatcher(o[G],i,t,G);if(l){const G=isFunction$2(l)?l.call(t):l;Reflect.ownKeys(G).forEach(J=>{provide(J,G[J])})}u&&callHook(u,n,"c");function X(G,J){isArray$2(J)?J.forEach(xe=>G(xe.bind(t))):J&&G(J.bind(t))}if(X(onBeforeMount,f),X(onMounted,d),X(onBeforeUpdate,m),X(onUpdated,x),X(onActivated,S),X(onDeactivated,_),X(onErrorCaptured,z),X(onRenderTracked,N),X(onRenderTriggered,D),X(onBeforeUnmount,T),X(onUnmounted,b),X(onServerPrefetch,y),isArray$2(R))if(R.length){const G=n.exposed||(n.exposed={});R.forEach(J=>{Object.defineProperty(G,J,{get:()=>t[J],set:xe=>t[J]=xe,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===NOOP&&(n.render=P),U!=null&&(n.inheritAttrs=U),K&&(n.components=K),$&&(n.directives=$),y&&markAsyncBoundary(n)}function resolveInjections(n,e,t=NOOP){isArray$2(n)&&(n=normalizeInject(n));for(const i in n){const r=n[i];let s;isObject$1(r)?"default"in r?s=inject(r.from||i,r.default,!0):s=inject(r.from||i):s=inject(r),isRef(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function callHook(n,e,t){callWithAsyncErrorHandling(isArray$2(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function createWatcher(n,e,t,i){let r=i.includes(".")?createPathGetter(t,i):()=>t[i];if(isString$1(n)){const s=e[n];isFunction$2(s)&&watch(r,s)}else if(isFunction$2(n))watch(r,n.bind(t));else if(isObject$1(n))if(isArray$2(n))n.forEach(s=>createWatcher(s,e,t,i));else{const s=isFunction$2(n.handler)?n.handler.bind(t):e[n.handler];isFunction$2(s)&&watch(r,s,n)}}function resolveMergedOptions(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>mergeOptions$1(l,c,a,!0)),mergeOptions$1(l,e,a)),isObject$1(e)&&s.set(e,l),l}function mergeOptions$1(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&mergeOptions$1(n,s,t,!0),r&&r.forEach(a=>mergeOptions$1(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=internalOptionMergeStrats[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const internalOptionMergeStrats={data:mergeDataFn,props:mergeEmitsOrPropsOptions,emits:mergeEmitsOrPropsOptions,methods:mergeObjectOptions,computed:mergeObjectOptions,beforeCreate:mergeAsArray,created:mergeAsArray,beforeMount:mergeAsArray,mounted:mergeAsArray,beforeUpdate:mergeAsArray,updated:mergeAsArray,beforeDestroy:mergeAsArray,beforeUnmount:mergeAsArray,destroyed:mergeAsArray,unmounted:mergeAsArray,activated:mergeAsArray,deactivated:mergeAsArray,errorCaptured:mergeAsArray,serverPrefetch:mergeAsArray,components:mergeObjectOptions,directives:mergeObjectOptions,watch:mergeWatchOptions,provide:mergeDataFn,inject:mergeInject};function mergeDataFn(n,e){return e?n?function(){return extend$1(isFunction$2(n)?n.call(this,this):n,isFunction$2(e)?e.call(this,this):e)}:e:n}function mergeInject(n,e){return mergeObjectOptions(normalizeInject(n),normalizeInject(e))}function normalizeInject(n){if(isArray$2(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function mergeAsArray(n,e){return n?[...new Set([].concat(n,e))]:e}function mergeObjectOptions(n,e){return n?extend$1(Object.create(null),n,e):e}function mergeEmitsOrPropsOptions(n,e){return n?isArray$2(n)&&isArray$2(e)?[...new Set([...n,...e])]:extend$1(Object.create(null),normalizePropsOrEmits(n),normalizePropsOrEmits(e??{})):e}function mergeWatchOptions(n,e){if(!n)return e;if(!e)return n;const t=extend$1(Object.create(null),n);for(const i in e)t[i]=mergeAsArray(n[i],e[i]);return t}function createAppContext(){return{app:null,config:{isNativeTag:NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uid$1=0;function createAppAPI(n,e){return function(i,r=null){isFunction$2(i)||(i=extend$1({},i)),r!=null&&!isObject$1(r)&&(r=null);const s=createAppContext(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:uid$1++,_component:i,_props:r,_container:null,_context:s,_instance:null,version,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&isFunction$2(u.install)?(a.add(u),u.install(c,...f)):isFunction$2(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||createVNode(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,getComponentPublicInstance(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(callWithAsyncErrorHandling(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=currentApp;currentApp=c;try{return u()}finally{currentApp=f}}};return c}}let currentApp=null;const getModelModifiers=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${camelize(e)}Modifiers`]||n[`${hyphenate(e)}Modifiers`];function emit(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||EMPTY_OBJ;let r=t;const s=e.startsWith("update:"),a=s&&getModelModifiers(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>isString$1(u)?u.trim():u)),a.number&&(r=t.map(looseToNumber)));let o,l=i[o=toHandlerKey(e)]||i[o=toHandlerKey(camelize(e))];!l&&s&&(l=i[o=toHandlerKey(hyphenate(e))]),l&&callWithAsyncErrorHandling(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,callWithAsyncErrorHandling(c,n,6,r)}}const mixinEmitsCache=new WeakMap;function normalizeEmitsOptions(n,e,t=!1){const i=t?mixinEmitsCache:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!isFunction$2(n)){const l=c=>{const u=normalizeEmitsOptions(c,e,!0);u&&(o=!0,extend$1(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(isObject$1(n)&&i.set(n,null),null):(isArray$2(s)?s.forEach(l=>a[l]=null):extend$1(a,s),isObject$1(n)&&i.set(n,a),a)}function isEmitListener(n,e){return!n||!isOn(e)?!1:(e=e.slice(2).replace(/Once$/,""),hasOwn(n,e[0].toLowerCase()+e.slice(1))||hasOwn(n,hyphenate(e))||hasOwn(n,e))}function markAttrsAccessed(){}function renderComponentRoot(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:x,inheritAttrs:S}=n,_=setCurrentRenderingInstance(n);let g,T;try{if(t.shapeFlag&4){const b=r||i,P=b;g=normalizeVNode(c.call(P,b,u,f,m,d,x)),T=o}else{const b=e;g=normalizeVNode(b.length>1?b(f,{attrs:o,slots:a,emit:l}):b(f,null)),T=e.props?o:getFunctionalFallthrough(o)}}catch(b){blockStack.length=0,handleError(b,n,1),g=createVNode(Comment)}let A=g;if(T&&S!==!1){const b=Object.keys(T),{shapeFlag:P}=A;b.length&&P&7&&(s&&b.some(isModelListener)&&(T=filterModelListeners(T,s)),A=cloneVNode(A,T,!1,!0))}return t.dirs&&(A=cloneVNode(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&setTransitionHooks(A,t.transition),g=A,setCurrentRenderingInstance(_),g}const getFunctionalFallthrough=n=>{let e;for(const t in n)(t==="class"||t==="style"||isOn(t))&&((e||(e={}))[t]=n[t]);return e},filterModelListeners=(n,e)=>{const t={};for(const i in n)(!isModelListener(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function shouldUpdateComponent(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?hasPropsChanged(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!isEmitListener(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?hasPropsChanged(i,a,c):!0:!!a;return!1}function hasPropsChanged(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!isEmitListener(t,s))return!0}return!1}function updateHOCHostEl({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const internalObjectProto={},createInternalObject=()=>Object.create(internalObjectProto),isInternalObject=n=>Object.getPrototypeOf(n)===internalObjectProto;function initProps(n,e,t,i=!1){const r={},s=createInternalObject();n.propsDefaults=Object.create(null),setFullProps(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:shallowReactive(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function updateProps(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=toRaw(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(isEmitListener(n.emitsOptions,d))continue;const m=e[d];if(l)if(hasOwn(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const x=camelize(d);r[x]=resolvePropValue(l,o,x,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{setFullProps(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!hasOwn(e,f)&&((u=hyphenate(f))===f||!hasOwn(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=resolvePropValue(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!hasOwn(e,f))&&(delete s[f],c=!0)}c&&trigger(n.attrs,"set","")}function setFullProps(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(isReservedProp(l))continue;const c=e[l];let u;r&&hasOwn(r,u=camelize(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:isEmitListener(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=toRaw(t),c=o||EMPTY_OBJ;for(let u=0;u<s.length;u++){const f=s[u];t[f]=resolvePropValue(r,l,f,c[f],n,!hasOwn(c,f))}}return a}function resolvePropValue(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=hasOwn(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&isFunction$2(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=setCurrentInstance(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===hyphenate(t))&&(i=!0))}return i}const mixinPropsCache=new WeakMap;function normalizePropsOptions(n,e,t=!1){const i=t?mixinPropsCache:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!isFunction$2(n)){const u=f=>{l=!0;const[d,m]=normalizePropsOptions(f,e,!0);extend$1(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return isObject$1(n)&&i.set(n,EMPTY_ARR),EMPTY_ARR;if(isArray$2(s))for(let u=0;u<s.length;u++){const f=camelize(s[u]);validatePropName(f)&&(a[f]=EMPTY_OBJ)}else if(s)for(const u in s){const f=camelize(u);if(validatePropName(f)){const d=s[u],m=a[f]=isArray$2(d)||isFunction$2(d)?{type:d}:extend$1({},d),x=m.type;let S=!1,_=!0;if(isArray$2(x))for(let g=0;g<x.length;++g){const T=x[g],A=isFunction$2(T)&&T.name;if(A==="Boolean"){S=!0;break}else A==="String"&&(_=!1)}else S=isFunction$2(x)&&x.name==="Boolean";m[0]=S,m[1]=_,(S||hasOwn(m,"default"))&&o.push(f)}}const c=[a,o];return isObject$1(n)&&i.set(n,c),c}function validatePropName(n){return n[0]!=="$"&&!isReservedProp(n)}const isInternalKey=n=>n==="_"||n==="_ctx"||n==="$stable",normalizeSlotValue=n=>isArray$2(n)?n.map(normalizeVNode):[normalizeVNode(n)],normalizeSlot$1=(n,e,t)=>{if(e._n)return e;const i=withCtx((...r)=>normalizeSlotValue(e(...r)),t);return i._c=!1,i},normalizeObjectSlots=(n,e,t)=>{const i=n._ctx;for(const r in n){if(isInternalKey(r))continue;const s=n[r];if(isFunction$2(s))e[r]=normalizeSlot$1(r,s,i);else if(s!=null){const a=normalizeSlotValue(s);e[r]=()=>a}}},normalizeVNodeSlots=(n,e)=>{const t=normalizeSlotValue(e);n.slots.default=()=>t},assignSlots=(n,e,t)=>{for(const i in e)(t||!isInternalKey(i))&&(n[i]=e[i])},initSlots=(n,e,t)=>{const i=n.slots=createInternalObject();if(n.vnode.shapeFlag&32){const r=e._;r?(assignSlots(i,e,t),t&&def(i,"_",r,!0)):normalizeObjectSlots(e,i)}else e&&normalizeVNodeSlots(n,e)},updateSlots=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=EMPTY_OBJ;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:assignSlots(r,e,t):(s=!e.$stable,normalizeObjectSlots(e,r)),a=e}else e&&(normalizeVNodeSlots(n,e),a={default:1});if(s)for(const o in r)!isInternalKey(o)&&a[o]==null&&delete r[o]},queuePostRenderEffect=queueEffectWithSuspense;function createRenderer(n){return baseCreateRenderer(n)}function baseCreateRenderer(n,e){const t=getGlobalThis();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=NOOP,insertStaticContent:x}=n,S=(w,L,O,Y=null,q=null,Q=null,C=void 0,fe=null,le=!!L.dynamicChildren)=>{if(w===L)return;w&&!isSameVNodeType(w,L)&&(Y=F(w),Ie(w,q,Q,!0),w=null),L.patchFlag===-2&&(le=!1,L.dynamicChildren=null);const{type:re,ref:ce,shapeFlag:E}=L;switch(re){case Text:_(w,L,O,Y);break;case Comment:g(w,L,O,Y);break;case Static:w==null&&T(L,O,Y,C);break;case Fragment:K(w,L,O,Y,q,Q,C,fe,le);break;default:E&1?P(w,L,O,Y,q,Q,C,fe,le):E&6?$(w,L,O,Y,q,Q,C,fe,le):(E&64||E&128)&&re.process(w,L,O,Y,q,Q,C,fe,le,ae)}ce!=null&&q?setRef(ce,w&&w.ref,Q,L||w,!L):ce==null&&w&&w.ref!=null&&setRef(w.ref,null,Q,w,!0)},_=(w,L,O,Y)=>{if(w==null)i(L.el=o(L.children),O,Y);else{const q=L.el=w.el;L.children!==w.children&&c(q,L.children)}},g=(w,L,O,Y)=>{w==null?i(L.el=l(L.children||""),O,Y):L.el=w.el},T=(w,L,O,Y)=>{[w.el,w.anchor]=x(w.children,L,O,Y,w.el,w.anchor)},A=({el:w,anchor:L},O,Y)=>{let q;for(;w&&w!==L;)q=d(w),i(w,O,Y),w=q;i(L,O,Y)},b=({el:w,anchor:L})=>{let O;for(;w&&w!==L;)O=d(w),r(w),w=O;r(L)},P=(w,L,O,Y,q,Q,C,fe,le)=>{if(L.type==="svg"?C="svg":L.type==="math"&&(C="mathml"),w==null)N(L,O,Y,q,Q,C,fe,le);else{const re=w.el&&w.el._isVueCE?w.el:null;try{re&&re._beginPatch(),y(w,L,q,Q,C,fe,le)}finally{re&&re._endPatch()}}},N=(w,L,O,Y,q,Q,C,fe)=>{let le,re;const{props:ce,shapeFlag:E,transition:v,dirs:I}=w;if(le=w.el=a(w.type,Q,ce&&ce.is,ce),E&8?u(le,w.children):E&16&&z(w.children,le,null,Y,q,resolveChildrenNamespace(w,Q),C,fe),I&&invokeDirectiveHook(w,null,Y,"created"),D(le,w,w.scopeId,C,Y),ce){for(const ee in ce)ee!=="value"&&!isReservedProp(ee)&&s(le,ee,null,ce[ee],Q,Y);"value"in ce&&s(le,"value",null,ce.value,Q),(re=ce.onVnodeBeforeMount)&&invokeVNodeHook(re,Y,w)}I&&invokeDirectiveHook(w,null,Y,"beforeMount");const W=needTransition(q,v);W&&v.beforeEnter(le),i(le,L,O),((re=ce&&ce.onVnodeMounted)||W||I)&&queuePostRenderEffect(()=>{re&&invokeVNodeHook(re,Y,w),W&&v.enter(le),I&&invokeDirectiveHook(w,null,Y,"mounted")},q)},D=(w,L,O,Y,q)=>{if(O&&m(w,O),Y)for(let Q=0;Q<Y.length;Q++)m(w,Y[Q]);if(q){let Q=q.subTree;if(L===Q||isSuspense(Q.type)&&(Q.ssContent===L||Q.ssFallback===L)){const C=q.vnode;D(w,C,C.scopeId,C.slotScopeIds,q.parent)}}},z=(w,L,O,Y,q,Q,C,fe,le=0)=>{for(let re=le;re<w.length;re++){const ce=w[re]=fe?cloneIfMounted(w[re]):normalizeVNode(w[re]);S(null,ce,L,O,Y,q,Q,C,fe)}},y=(w,L,O,Y,q,Q,C)=>{const fe=L.el=w.el;let{patchFlag:le,dynamicChildren:re,dirs:ce}=L;le|=w.patchFlag&16;const E=w.props||EMPTY_OBJ,v=L.props||EMPTY_OBJ;let I;if(O&&toggleRecurse(O,!1),(I=v.onVnodeBeforeUpdate)&&invokeVNodeHook(I,O,L,w),ce&&invokeDirectiveHook(L,w,O,"beforeUpdate"),O&&toggleRecurse(O,!0),(E.innerHTML&&v.innerHTML==null||E.textContent&&v.textContent==null)&&u(fe,""),re?R(w.dynamicChildren,re,fe,O,Y,resolveChildrenNamespace(L,q),Q):C||J(w,L,fe,null,O,Y,resolveChildrenNamespace(L,q),Q,!1),le>0){if(le&16)U(fe,E,v,O,q);else if(le&2&&E.class!==v.class&&s(fe,"class",null,v.class,q),le&4&&s(fe,"style",E.style,v.style,q),le&8){const W=L.dynamicProps;for(let ee=0;ee<W.length;ee++){const H=W[ee],be=E[H],he=v[H];(he!==be||H==="value")&&s(fe,H,be,he,q,O)}}le&1&&w.children!==L.children&&u(fe,L.children)}else!C&&re==null&&U(fe,E,v,O,q);((I=v.onVnodeUpdated)||ce)&&queuePostRenderEffect(()=>{I&&invokeVNodeHook(I,O,L,w),ce&&invokeDirectiveHook(L,w,O,"updated")},Y)},R=(w,L,O,Y,q,Q,C)=>{for(let fe=0;fe<L.length;fe++){const le=w[fe],re=L[fe],ce=le.el&&(le.type===Fragment||!isSameVNodeType(le,re)||le.shapeFlag&198)?f(le.el):O;S(le,re,ce,null,Y,q,Q,C,!0)}},U=(w,L,O,Y,q)=>{if(L!==O){if(L!==EMPTY_OBJ)for(const Q in L)!isReservedProp(Q)&&!(Q in O)&&s(w,Q,L[Q],null,q,Y);for(const Q in O){if(isReservedProp(Q))continue;const C=O[Q],fe=L[Q];C!==fe&&Q!=="value"&&s(w,Q,fe,C,q,Y)}"value"in O&&s(w,"value",L.value,O.value,q)}},K=(w,L,O,Y,q,Q,C,fe,le)=>{const re=L.el=w?w.el:o(""),ce=L.anchor=w?w.anchor:o("");let{patchFlag:E,dynamicChildren:v,slotScopeIds:I}=L;I&&(fe=fe?fe.concat(I):I),w==null?(i(re,O,Y),i(ce,O,Y),z(L.children||[],O,ce,q,Q,C,fe,le)):E>0&&E&64&&v&&w.dynamicChildren&&w.dynamicChildren.length===v.length?(R(w.dynamicChildren,v,O,q,Q,C,fe),(L.key!=null||q&&L===q.subTree)&&traverseStaticChildren(w,L,!0)):J(w,L,O,ce,q,Q,C,fe,le)},$=(w,L,O,Y,q,Q,C,fe,le)=>{L.slotScopeIds=fe,w==null?L.shapeFlag&512?q.ctx.activate(L,O,Y,C,le):se(L,O,Y,q,Q,C,le):ne(w,L,le)},se=(w,L,O,Y,q,Q,C)=>{const fe=w.component=createComponentInstance(w,Y,q);if(isKeepAlive(w)&&(fe.ctx.renderer=ae),setupComponent(fe,!1,C),fe.asyncDep){if(q&&q.registerDep(fe,X,C),!w.el){const le=fe.subTree=createVNode(Comment);g(null,le,L,O),w.placeholder=le.el}}else X(fe,w,L,O,q,Q,C)},ne=(w,L,O)=>{const Y=L.component=w.component;if(shouldUpdateComponent(w,L,O))if(Y.asyncDep&&!Y.asyncResolved){G(Y,L,O);return}else Y.next=L,Y.update();else L.el=w.el,Y.vnode=L},X=(w,L,O,Y,q,Q,C)=>{const fe=()=>{if(w.isMounted){let{next:E,bu:v,u:I,parent:W,vnode:ee}=w;{const Ne=locateNonHydratedAsyncRoot(w);if(Ne){E&&(E.el=ee.el,G(w,E,C)),Ne.asyncDep.then(()=>{w.isUnmounted||fe()});return}}let H=E,be;toggleRecurse(w,!1),E?(E.el=ee.el,G(w,E,C)):E=ee,v&&invokeArrayFns(v),(be=E.props&&E.props.onVnodeBeforeUpdate)&&invokeVNodeHook(be,W,E,ee),toggleRecurse(w,!0);const he=renderComponentRoot(w),Re=w.subTree;w.subTree=he,S(Re,he,f(Re.el),F(Re),w,q,Q),E.el=he.el,H===null&&updateHOCHostEl(w,he.el),I&&queuePostRenderEffect(I,q),(be=E.props&&E.props.onVnodeUpdated)&&queuePostRenderEffect(()=>invokeVNodeHook(be,W,E,ee),q)}else{let E;const{el:v,props:I}=L,{bm:W,m:ee,parent:H,root:be,type:he}=w,Re=isAsyncWrapper(L);toggleRecurse(w,!1),W&&invokeArrayFns(W),!Re&&(E=I&&I.onVnodeBeforeMount)&&invokeVNodeHook(E,H,L),toggleRecurse(w,!0);{be.ce&&be.ce._def.shadowRoot!==!1&&be.ce._injectChildStyle(he);const Ne=w.subTree=renderComponentRoot(w);S(null,Ne,O,Y,w,q,Q),L.el=Ne.el}if(ee&&queuePostRenderEffect(ee,q),!Re&&(E=I&&I.onVnodeMounted)){const Ne=L;queuePostRenderEffect(()=>invokeVNodeHook(E,H,Ne),q)}(L.shapeFlag&256||H&&isAsyncWrapper(H.vnode)&&H.vnode.shapeFlag&256)&&w.a&&queuePostRenderEffect(w.a,q),w.isMounted=!0,L=O=Y=null}};w.scope.on();const le=w.effect=new ReactiveEffect(fe);w.scope.off();const re=w.update=le.run.bind(le),ce=w.job=le.runIfDirty.bind(le);ce.i=w,ce.id=w.uid,le.scheduler=()=>queueJob(ce),toggleRecurse(w,!0),re()},G=(w,L,O)=>{L.component=w;const Y=w.vnode.props;w.vnode=L,w.next=null,updateProps(w,L.props,Y,O),updateSlots(w,L.children,O),pauseTracking(),flushPreFlushCbs(w),resetTracking()},J=(w,L,O,Y,q,Q,C,fe,le=!1)=>{const re=w&&w.children,ce=w?w.shapeFlag:0,E=L.children,{patchFlag:v,shapeFlag:I}=L;if(v>0){if(v&128){ge(re,E,O,Y,q,Q,C,fe,le);return}else if(v&256){xe(re,E,O,Y,q,Q,C,fe,le);return}}I&8?(ce&16&&ie(re,q,Q),E!==re&&u(O,E)):ce&16?I&16?ge(re,E,O,Y,q,Q,C,fe,le):ie(re,q,Q,!0):(ce&8&&u(O,""),I&16&&z(E,O,Y,q,Q,C,fe,le))},xe=(w,L,O,Y,q,Q,C,fe,le)=>{w=w||EMPTY_ARR,L=L||EMPTY_ARR;const re=w.length,ce=L.length,E=Math.min(re,ce);let v;for(v=0;v<E;v++){const I=L[v]=le?cloneIfMounted(L[v]):normalizeVNode(L[v]);S(w[v],I,O,null,q,Q,C,fe,le)}re>ce?ie(w,q,Q,!0,!1,E):z(L,O,Y,q,Q,C,fe,le,E)},ge=(w,L,O,Y,q,Q,C,fe,le)=>{let re=0;const ce=L.length;let E=w.length-1,v=ce-1;for(;re<=E&&re<=v;){const I=w[re],W=L[re]=le?cloneIfMounted(L[re]):normalizeVNode(L[re]);if(isSameVNodeType(I,W))S(I,W,O,null,q,Q,C,fe,le);else break;re++}for(;re<=E&&re<=v;){const I=w[E],W=L[v]=le?cloneIfMounted(L[v]):normalizeVNode(L[v]);if(isSameVNodeType(I,W))S(I,W,O,null,q,Q,C,fe,le);else break;E--,v--}if(re>E){if(re<=v){const I=v+1,W=I<ce?L[I].el:Y;for(;re<=v;)S(null,L[re]=le?cloneIfMounted(L[re]):normalizeVNode(L[re]),O,W,q,Q,C,fe,le),re++}}else if(re>v)for(;re<=E;)Ie(w[re],q,Q,!0),re++;else{const I=re,W=re,ee=new Map;for(re=W;re<=v;re++){const Me=L[re]=le?cloneIfMounted(L[re]):normalizeVNode(L[re]);Me.key!=null&&ee.set(Me.key,re)}let H,be=0;const he=v-W+1;let Re=!1,Ne=0;const de=new Array(he);for(re=0;re<he;re++)de[re]=0;for(re=I;re<=E;re++){const Me=w[re];if(be>=he){Ie(Me,q,Q,!0);continue}let Ce;if(Me.key!=null)Ce=ee.get(Me.key);else for(H=W;H<=v;H++)if(de[H-W]===0&&isSameVNodeType(Me,L[H])){Ce=H;break}Ce===void 0?Ie(Me,q,Q,!0):(de[Ce-W]=re+1,Ce>=Ne?Ne=Ce:Re=!0,S(Me,L[Ce],O,null,q,Q,C,fe,le),be++)}const Se=Re?getSequence(de):EMPTY_ARR;for(H=Se.length-1,re=he-1;re>=0;re--){const Me=W+re,Ce=L[Me],ve=L[Me+1],ke=Me+1<ce?ve.el||resolveAsyncComponentPlaceholder(ve):Y;de[re]===0?S(null,Ce,O,ke,q,Q,C,fe,le):Re&&(H<0||re!==Se[H]?me(Ce,O,ke,2):H--)}}},me=(w,L,O,Y,q=null)=>{const{el:Q,type:C,transition:fe,children:le,shapeFlag:re}=w;if(re&6){me(w.component.subTree,L,O,Y);return}if(re&128){w.suspense.move(L,O,Y);return}if(re&64){C.move(w,L,O,ae);return}if(C===Fragment){i(Q,L,O);for(let E=0;E<le.length;E++)me(le[E],L,O,Y);i(w.anchor,L,O);return}if(C===Static){A(w,L,O);return}if(Y!==2&&re&1&&fe)if(Y===0)fe.beforeEnter(Q),i(Q,L,O),queuePostRenderEffect(()=>fe.enter(Q),q);else{const{leave:E,delayLeave:v,afterLeave:I}=fe,W=()=>{w.ctx.isUnmounted?r(Q):i(Q,L,O)},ee=()=>{Q._isLeaving&&Q[leaveCbKey](!0),E(Q,()=>{W(),I&&I()})};v?v(Q,W,ee):ee()}else i(Q,L,O)},Ie=(w,L,O,Y=!1,q=!1)=>{const{type:Q,props:C,ref:fe,children:le,dynamicChildren:re,shapeFlag:ce,patchFlag:E,dirs:v,cacheIndex:I}=w;if(E===-2&&(q=!1),fe!=null&&(pauseTracking(),setRef(fe,null,O,w,!0),resetTracking()),I!=null&&(L.renderCache[I]=void 0),ce&256){L.ctx.deactivate(w);return}const W=ce&1&&v,ee=!isAsyncWrapper(w);let H;if(ee&&(H=C&&C.onVnodeBeforeUnmount)&&invokeVNodeHook(H,L,w),ce&6)He(w.component,O,Y);else{if(ce&128){w.suspense.unmount(O,Y);return}W&&invokeDirectiveHook(w,null,L,"beforeUnmount"),ce&64?w.type.remove(w,L,O,ae,Y):re&&!re.hasOnce&&(Q!==Fragment||E>0&&E&64)?ie(re,L,O,!1,!0):(Q===Fragment&&E&384||!q&&ce&16)&&ie(le,L,O),Y&&Be(w)}(ee&&(H=C&&C.onVnodeUnmounted)||W)&&queuePostRenderEffect(()=>{H&&invokeVNodeHook(H,L,w),W&&invokeDirectiveHook(w,null,L,"unmounted")},O)},Be=w=>{const{type:L,el:O,anchor:Y,transition:q}=w;if(L===Fragment){$e(O,Y);return}if(L===Static){b(w);return}const Q=()=>{r(O),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(w.shapeFlag&1&&q&&!q.persisted){const{leave:C,delayLeave:fe}=q,le=()=>C(O,Q);fe?fe(w.el,Q,le):le()}else Q()},$e=(w,L)=>{let O;for(;w!==L;)O=d(w),r(w),w=O;r(L)},He=(w,L,O)=>{const{bum:Y,scope:q,job:Q,subTree:C,um:fe,m:le,a:re}=w;invalidateMount(le),invalidateMount(re),Y&&invokeArrayFns(Y),q.stop(),Q&&(Q.flags|=8,Ie(C,w,L,O)),fe&&queuePostRenderEffect(fe,L),queuePostRenderEffect(()=>{w.isUnmounted=!0},L)},ie=(w,L,O,Y=!1,q=!1,Q=0)=>{for(let C=Q;C<w.length;C++)Ie(w[C],L,O,Y,q)},F=w=>{if(w.shapeFlag&6)return F(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const L=d(w.anchor||w.el),O=L&&L[TeleportEndKey];return O?d(O):L};let te=!1;const oe=(w,L,O)=>{let Y;w==null?L._vnode&&(Ie(L._vnode,null,null,!0),Y=L._vnode.component):S(L._vnode||null,w,L,null,null,null,O),L._vnode=w,te||(te=!0,flushPreFlushCbs(Y),flushPostFlushCbs(),te=!1)},ae={p:S,um:Ie,m:me,r:Be,mt:se,mc:z,pc:J,pbc:R,n:F,o:n};return{render:oe,hydrate:void 0,createApp:createAppAPI(oe)}}function resolveChildrenNamespace({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function toggleRecurse({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function needTransition(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function traverseStaticChildren(n,e,t=!1){const i=n.children,r=e.children;if(isArray$2(i)&&isArray$2(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=cloneIfMounted(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&traverseStaticChildren(a,o)),o.type===Text&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(n.type===Fragment?1:0)),o.type===Comment&&!o.el&&(o.el=a.el)}}function getSequence(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function locateNonHydratedAsyncRoot(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:locateNonHydratedAsyncRoot(e)}function invalidateMount(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function resolveAsyncComponentPlaceholder(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?resolveAsyncComponentPlaceholder(e.subTree):null}const isSuspense=n=>n.__isSuspense;function queueEffectWithSuspense(n,e){e&&e.pendingBranch?isArray$2(n)?e.effects.push(...n):e.effects.push(n):queuePostFlushCb(n)}const Fragment=Symbol.for("v-fgt"),Text=Symbol.for("v-txt"),Comment=Symbol.for("v-cmt"),Static=Symbol.for("v-stc"),blockStack=[];let currentBlock=null;function openBlock(n=!1){blockStack.push(currentBlock=n?null:[])}function closeBlock(){blockStack.pop(),currentBlock=blockStack[blockStack.length-1]||null}let isBlockTreeEnabled=1;function setBlockTracking(n,e=!1){isBlockTreeEnabled+=n,n<0&&currentBlock&&e&&(currentBlock.hasOnce=!0)}function setupBlock(n){return n.dynamicChildren=isBlockTreeEnabled>0?currentBlock||EMPTY_ARR:null,closeBlock(),isBlockTreeEnabled>0&&currentBlock&&currentBlock.push(n),n}function createElementBlock(n,e,t,i,r,s){return setupBlock(createBaseVNode(n,e,t,i,r,s,!0))}function isVNode(n){return n?n.__v_isVNode===!0:!1}function isSameVNodeType(n,e){return n.type===e.type&&n.key===e.key}const normalizeKey=({key:n})=>n??null,normalizeRef=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?isString$1(n)||isRef(n)||isFunction$2(n)?{i:currentRenderingInstance,r:n,k:e,f:!!t}:n:null);function createBaseVNode(n,e=null,t=null,i=0,r=null,s=n===Fragment?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&normalizeKey(e),ref:e&&normalizeRef(e),scopeId:currentScopeId,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:currentRenderingInstance};return o?(normalizeChildren(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=isString$1(t)?8:16),isBlockTreeEnabled>0&&!a&&currentBlock&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&currentBlock.push(l),l}const createVNode=_createVNode;function _createVNode(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===NULL_DYNAMIC_COMPONENT)&&(n=Comment),isVNode(n)){const o=cloneVNode(n,e,!0);return t&&normalizeChildren(o,t),isBlockTreeEnabled>0&&!s&&currentBlock&&(o.shapeFlag&6?currentBlock[currentBlock.indexOf(n)]=o:currentBlock.push(o)),o.patchFlag=-2,o}if(isClassComponent(n)&&(n=n.__vccOpts),e){e=guardReactiveProps(e);let{class:o,style:l}=e;o&&!isString$1(o)&&(e.class=normalizeClass(o)),isObject$1(l)&&(isProxy(l)&&!isArray$2(l)&&(l=extend$1({},l)),e.style=normalizeStyle(l))}const a=isString$1(n)?1:isSuspense(n)?128:isTeleport(n)?64:isObject$1(n)?4:isFunction$2(n)?2:0;return createBaseVNode(n,e,t,i,r,a,s,!0)}function guardReactiveProps(n){return n?isProxy(n)||isInternalObject(n)?extend$1({},n):n:null}function cloneVNode(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?mergeProps(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&normalizeKey(c),ref:e&&e.ref?t&&s?isArray$2(s)?s.concat(normalizeRef(e)):[s,normalizeRef(e)]:normalizeRef(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Fragment?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&cloneVNode(n.ssContent),ssFallback:n.ssFallback&&cloneVNode(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&setTransitionHooks(u,l.clone(u)),u}function createTextVNode(n=" ",e=0){return createVNode(Text,null,n,e)}function createStaticVNode(n,e){const t=createVNode(Static,null,n);return t.staticCount=e,t}function normalizeVNode(n){return n==null||typeof n=="boolean"?createVNode(Comment):isArray$2(n)?createVNode(Fragment,null,n.slice()):isVNode(n)?cloneIfMounted(n):createVNode(Text,null,String(n))}function cloneIfMounted(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:cloneVNode(n)}function normalizeChildren(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(isArray$2(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),normalizeChildren(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!isInternalObject(e)?e._ctx=currentRenderingInstance:r===3&&currentRenderingInstance&&(currentRenderingInstance.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else isFunction$2(e)?(e={default:e,_ctx:currentRenderingInstance},t=32):(e=String(e),i&64?(t=16,e=[createTextVNode(e)]):t=8);n.children=e,n.shapeFlag|=t}function mergeProps(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=normalizeClass([e.class,i.class]));else if(r==="style")e.style=normalizeStyle([e.style,i.style]);else if(isOn(r)){const s=e[r],a=i[r];a&&s!==a&&!(isArray$2(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function invokeVNodeHook(n,e,t,i=null){callWithAsyncErrorHandling(n,e,7,[t,i])}const emptyAppContext=createAppContext();let uid=0;function createComponentInstance(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||emptyAppContext,s={uid:uid++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new EffectScope(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:normalizePropsOptions(i,r),emitsOptions:normalizeEmitsOptions(i,r),emit:null,emitted:null,propsDefaults:EMPTY_OBJ,inheritAttrs:i.inheritAttrs,ctx:EMPTY_OBJ,data:EMPTY_OBJ,props:EMPTY_OBJ,attrs:EMPTY_OBJ,slots:EMPTY_OBJ,refs:EMPTY_OBJ,setupState:EMPTY_OBJ,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=emit.bind(null,s),n.ce&&n.ce(s),s}let currentInstance=null;const getCurrentInstance=()=>currentInstance||currentRenderingInstance;let internalSetCurrentInstance,setInSSRSetupState;{const n=getGlobalThis(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};internalSetCurrentInstance=e("__VUE_INSTANCE_SETTERS__",t=>currentInstance=t),setInSSRSetupState=e("__VUE_SSR_SETTERS__",t=>isInSSRComponentSetup=t)}const setCurrentInstance=n=>{const e=currentInstance;return internalSetCurrentInstance(n),n.scope.on(),()=>{n.scope.off(),internalSetCurrentInstance(e)}},unsetCurrentInstance=()=>{currentInstance&&currentInstance.scope.off(),internalSetCurrentInstance(null)};function isStatefulComponent(n){return n.vnode.shapeFlag&4}let isInSSRComponentSetup=!1;function setupComponent(n,e=!1,t=!1){e&&setInSSRSetupState(e);const{props:i,children:r}=n.vnode,s=isStatefulComponent(n);initProps(n,i,s,e),initSlots(n,r,t||e);const a=s?setupStatefulComponent(n,e):void 0;return e&&setInSSRSetupState(!1),a}function setupStatefulComponent(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,PublicInstanceProxyHandlers);const{setup:i}=t;if(i){pauseTracking();const r=n.setupContext=i.length>1?createSetupContext(n):null,s=setCurrentInstance(n),a=callWithErrorHandling(i,n,0,[n.props,r]),o=isPromise(a);if(resetTracking(),s(),(o||n.sp)&&!isAsyncWrapper(n)&&markAsyncBoundary(n),o){if(a.then(unsetCurrentInstance,unsetCurrentInstance),e)return a.then(l=>{handleSetupResult(n,l)}).catch(l=>{handleError(l,n,0)});n.asyncDep=a}else handleSetupResult(n,a)}else finishComponentSetup(n)}function handleSetupResult(n,e,t){isFunction$2(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:isObject$1(e)&&(n.setupState=proxyRefs(e)),finishComponentSetup(n)}function finishComponentSetup(n,e,t){const i=n.type;n.render||(n.render=i.render||NOOP);{const r=setCurrentInstance(n);pauseTracking();try{applyOptions(n)}finally{resetTracking(),r()}}}const attrsProxyHandlers={get(n,e){return track(n,"get",""),n[e]}};function createSetupContext(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,attrsProxyHandlers),slots:n.slots,emit:n.emit,expose:e}}function getComponentPublicInstance(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(proxyRefs(markRaw(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in publicPropertiesMap)return publicPropertiesMap[t](n)},has(e,t){return t in e||t in publicPropertiesMap}})):n.proxy}const classifyRE=/(?:^|[-_])\w/g,classify=n=>n.replace(classifyRE,e=>e.toUpperCase()).replace(/[-_]/g,"");function getComponentName(n,e=!0){return isFunction$2(n)?n.displayName||n.name:n.name||e&&n.__name}function formatComponentName(n,e,t=!1){let i=getComponentName(e);if(!i&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(i=r[1])}if(!i&&n){const r=s=>{for(const a in s)if(s[a]===e)return a};i=r(n.components)||n.parent&&r(n.parent.type.components)||r(n.appContext.components)}return i?classify(i):t?"App":"Anonymous"}function isClassComponent(n){return isFunction$2(n)&&"__vccOpts"in n}const computed=(n,e)=>computed$1(n,e,isInSSRComponentSetup);function h(n,e,t){try{setBlockTracking(-1);const i=arguments.length;return i===2?isObject$1(e)&&!isArray$2(e)?isVNode(e)?createVNode(n,null,[e]):createVNode(n,e):createVNode(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&isVNode(t)&&(t=[t]),createVNode(n,e,t))}finally{setBlockTracking(1)}}const version="3.5.26";let policy;const tt=typeof window<"u"&&window.trustedTypes;if(tt)try{policy=tt.createPolicy("vue",{createHTML:n=>n})}catch{}const unsafeToTrustedHTML=policy?n=>policy.createHTML(n):n=>n,svgNS="http://www.w3.org/2000/svg",mathmlNS="http://www.w3.org/1998/Math/MathML",doc=typeof document<"u"?document:null,templateContainer=doc&&doc.createElement("template"),nodeOps={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?doc.createElementNS(svgNS,n):e==="mathml"?doc.createElementNS(mathmlNS,n):t?doc.createElement(n,{is:t}):doc.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>doc.createTextNode(n),createComment:n=>doc.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>doc.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{templateContainer.innerHTML=unsafeToTrustedHTML(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=templateContainer.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},vtcKey=Symbol("_vtc");function patchClass(n,e,t){const i=n[vtcKey];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const vShowOriginalDisplay=Symbol("_vod"),vShowHidden=Symbol("_vsh"),CSS_VAR_TEXT=Symbol(""),displayRE=/(?:^|;)\s*display\s*:/;function patchStyle(n,e,t){const i=n.style,r=isString$1(t);let s=!1;if(t&&!r){if(e)if(isString$1(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&setStyle(i,o,"")}else for(const a in e)t[a]==null&&setStyle(i,a,"");for(const a in t)a==="display"&&(s=!0),setStyle(i,a,t[a])}else if(r){if(e!==t){const a=i[CSS_VAR_TEXT];a&&(t+=";"+a),i.cssText=t,s=displayRE.test(t)}}else e&&n.removeAttribute("style");vShowOriginalDisplay in n&&(n[vShowOriginalDisplay]=s?i.display:"",n[vShowHidden]&&(i.display="none"))}const importantRE=/\s*!important$/;function setStyle(n,e,t){if(isArray$2(t))t.forEach(i=>setStyle(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=autoPrefix(n,e);importantRE.test(t)?n.setProperty(hyphenate(i),t.replace(importantRE,""),"important"):n[i]=t}}const prefixes=["Webkit","Moz","ms"],prefixCache={};function autoPrefix(n,e){const t=prefixCache[e];if(t)return t;let i=camelize(e);if(i!=="filter"&&i in n)return prefixCache[e]=i;i=capitalize(i);for(let r=0;r<prefixes.length;r++){const s=prefixes[r]+i;if(s in n)return prefixCache[e]=s}return e}const xlinkNS="http://www.w3.org/1999/xlink";function patchAttr(n,e,t,i,r,s=isSpecialBooleanAttr(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(xlinkNS,e.slice(6,e.length)):n.setAttributeNS(xlinkNS,e,t):t==null||s&&!includeBooleanAttr(t)?n.removeAttribute(e):n.setAttribute(e,s?"":isSymbol(t)?String(t):t)}function patchDOMProp(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?unsafeToTrustedHTML(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=includeBooleanAttr(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function addEventListener(n,e,t,i){n.addEventListener(e,t,i)}function removeEventListener(n,e,t,i){n.removeEventListener(e,t,i)}const veiKey=Symbol("_vei");function patchEvent(n,e,t,i,r=null){const s=n[veiKey]||(n[veiKey]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=parseName(e);if(i){const c=s[e]=createInvoker(i,r);addEventListener(n,o,c,l)}else a&&(removeEventListener(n,o,a,l),s[e]=void 0)}}const optionsModifierRE=/(?:Once|Passive|Capture)$/;function parseName(n){let e;if(optionsModifierRE.test(n)){e={};let i;for(;i=n.match(optionsModifierRE);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):hyphenate(n.slice(2)),e]}let cachedNow=0;const p=Promise.resolve(),getNow=()=>cachedNow||(p.then(()=>cachedNow=0),cachedNow=Date.now());function createInvoker(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;callWithAsyncErrorHandling(patchStopImmediatePropagation(i,t.value),e,5,[i])};return t.value=n,t.attached=getNow(),t}function patchStopImmediatePropagation(n,e){if(isArray$2(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const isNativeOn=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,patchProp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?patchClass(n,i,a):e==="style"?patchStyle(n,t,i):isOn(e)?isModelListener(e)||patchEvent(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):shouldSetAsProp(n,e,i,a))?(patchDOMProp(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&patchAttr(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!isString$1(i))?patchDOMProp(n,camelize(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),patchAttr(n,e,i,a))};function shouldSetAsProp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&isNativeOn(e)&&isFunction$2(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return isNativeOn(e)&&isString$1(t)?!1:e in n}const rendererOptions=extend$1({patchProp},nodeOps);let renderer;function ensureRenderer(){return renderer||(renderer=createRenderer(rendererOptions))}const createApp=((...n)=>{const e=ensureRenderer().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=normalizeContainer(i);if(!r)return;const s=e._component;!isFunction$2(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,resolveRootNamespace(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function resolveRootNamespace(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function normalizeContainer(n){return isString$1(n)?document.querySelector(n):n}const piniaSymbol=Symbol();var MutationType;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(MutationType||(MutationType={}));function createPinia(){const n=effectScope(!0),e=n.run(()=>ref({}));let t=[],i=[];const r=markRaw({install(s){r._a=s,s.provide(piniaSymbol,r),s.config.globalProperties.$pinia=r,i.forEach(a=>t.push(a)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const REVISION="182",CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,ConstantColorFactor=211,OneMinusConstantColorFactor=212,ConstantAlphaFactor=213,OneMinusConstantAlphaFactor=214,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,AgXToneMapping=6,NeutralToneMapping=7,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,UnsignedInt5999Type=35902,UnsignedInt101111Type=35899,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,R11_EAC_Format=37488,SIGNED_R11_EAC_Format=37489,RG11_EAC_Format=37490,SIGNED_RG11_EAC_Format=37491,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RGB_BPTC_SIGNED_Format=36494,RGB_BPTC_UNSIGNED_Format=36495,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,BasicDepthPacking=3200,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",LinearTransfer="linear",SRGBTransfer="srgb",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;function arrayNeedsUint32(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function createElementNS(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function createCanvasElement(){const n=createElementNS("canvas");return n.style.display="block",n}const _cache={};function log(...n){const e="THREE."+n.shift();console.log(e,...n)}function warn(...n){const e="THREE."+n.shift();console.warn(e,...n)}function error(...n){const e="THREE."+n.shift();console.error(e,...n)}function warnOnce(...n){const e=n.join(" ");e in _cache||(_cache[e]=!0,warn(...n))}function probeAsync(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class EventDispatcher{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_lut[n&255]+_lut[n>>8&255]+_lut[n>>16&255]+_lut[n>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[t&63|128]+_lut[t>>8&255]+"-"+_lut[t>>16&255]+_lut[t>>24&255]+_lut[i&255]+_lut[i>>8&255]+_lut[i>>16&255]+_lut[i>>24&255]).toLowerCase()}function clamp(n,e,t){return Math.max(e,Math.min(t,n))}function euclideanModulo(n,e){return(n%e+e)%e}function lerp(n,e,t){return(1-t)*n+t*e}function denormalize(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function normalize(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(clamp(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Quaternion{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],m=s[a+1],x=s[a+2],S=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=S;return}if(f!==S||l!==d||c!==m||u!==x){let _=l*d+c*m+u*x+f*S;_<0&&(d=-d,m=-m,x=-x,S=-S,_=-_);let g=1-o;if(_<.9995){const T=Math.acos(_),A=Math.sin(T);g=Math.sin(g*T)/A,o=Math.sin(o*T)/A,l=l*g+d*o,c=c*g+m*o,u=u*g+x*o,f=f*g+S*o}else{l=l*g+d*o,c=c*g+m*o,u=u*g+x*o,f=f*g+S*o;const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*d,e[t+1]=l*x+u*d+c*f-o*m,e[t+2]=c*x+u*m+o*d-l*f,e[t+3]=u*x-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"YXZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"ZXY":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"ZYX":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"YZX":this._x=d*u*f+c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f-d*m*x;break;case"XZY":this._x=d*u*f-c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f+d*m*x;break;default:warn("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,i=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this.z=clamp(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this.z=clamp(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(clamp(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Matrix3{constructor(e,t,i,r,s,a,o,l,c){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],x=i[8],S=r[0],_=r[3],g=r[6],T=r[1],A=r[4],b=r[7],P=r[2],N=r[5],D=r[8];return s[0]=a*S+o*T+l*P,s[3]=a*_+o*A+l*N,s[6]=a*g+o*b+l*D,s[1]=c*S+u*T+f*P,s[4]=c*_+u*A+f*N,s[7]=c*g+u*b+f*D,s[2]=d*S+m*T+x*P,s[5]=d*_+m*A+x*N,s[8]=d*g+m*b+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,x=t*f+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=m*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_m3.makeScale(e,t)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,t){return this.premultiply(_m3.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3,LINEAR_REC709_TO_XYZ=new Matrix3().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),XYZ_TO_LINEAR_REC709=new Matrix3().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function createColorManagement(){const n={enabled:!0,workingColorSpace:LinearSRGBColorSpace,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===SRGBTransfer&&(r.r=SRGBToLinear(r.r),r.g=SRGBToLinear(r.g),r.b=SRGBToLinear(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===SRGBTransfer&&(r.r=LinearToSRGB(r.r),r.g=LinearToSRGB(r.g),r.b=LinearToSRGB(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===NoColorSpace?LinearTransfer:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return warnOnce("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return warnOnce("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[LinearSRGBColorSpace]:{primaries:e,whitePoint:i,transfer:LinearTransfer,toXYZ:LINEAR_REC709_TO_XYZ,fromXYZ:XYZ_TO_LINEAR_REC709,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:SRGBColorSpace},outputColorSpaceConfig:{drawingBufferColorSpace:SRGBColorSpace}},[SRGBColorSpace]:{primaries:e,whitePoint:i,transfer:SRGBTransfer,toXYZ:LINEAR_REC709_TO_XYZ,fromXYZ:XYZ_TO_LINEAR_REC709,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:SRGBColorSpace}}}),n}const ColorManagement=createColorManagement();function SRGBToLinear(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function LinearToSRGB(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _canvas;class ImageUtils{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const r=_canvas.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_canvas}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=SRGBToLinear(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(SRGBToLinear(t[i]/255)*255):t[i]=SRGBToLinear(t[i]);return{data:t,width:e.width,height:e.height}}else return warn("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _sourceId=0;class Source{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_sourceId++}),this.uuid=generateUUID(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(serializeImage(r[a].image)):s.push(serializeImage(r[a]))}else s=serializeImage(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function serializeImage(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ImageUtils.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(warn("Texture: Unable to serialize Texture."),{})}let _textureId=0;const _tempVec3=new Vector3;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,i=ClampToEdgeWrapping,r=ClampToEdgeWrapping,s=LinearFilter,a=LinearMipmapLinearFilter,o=RGBAFormat,l=UnsignedByteType,c=Texture.DEFAULT_ANISOTROPY,u=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_tempVec3).x}get height(){return this.source.getSize(_tempVec3).y}get depth(){return this.source.getSize(_tempVec3).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){warn(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){warn(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,t=0,i=0,r=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],x=l[9],S=l[2],_=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-S)<.01&&Math.abs(x-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+S)<.1&&Math.abs(x+_)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,b=(m+1)/2,P=(g+1)/2,N=(u+d)/4,D=(f+S)/4,z=(x+_)/4;return A>b&&A>P?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=N/i,s=D/i):b>P?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=N/r,s=z/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=D/s,r=z/s),this.set(i,r,s,t),this}let T=Math.sqrt((_-x)*(_-x)+(f-S)*(f-S)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(_-x)/T,this.y=(f-S)/T,this.z=(d-u)/T,this.w=Math.acos((c+m+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=clamp(this.x,e.x,t.x),this.y=clamp(this.y,e.y,t.y),this.z=clamp(this.z,e.z,t.z),this.w=clamp(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=clamp(this.x,e,t),this.y=clamp(this.y,e,t),this.z=clamp(this.z,e,t),this.w=clamp(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(clamp(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LinearFilter,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Texture(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:LinearFilter,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Source(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Data3DTexture extends Texture{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_vector$b.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_vector$b.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_vector$b.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_vector$b):_vector$b.fromBufferAttribute(s,a),_vector$b.applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_box$4.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_box$4.copy(i.boundingBox)),_box$4.applyMatrix4(e.matrixWorld),this.union(_box$4)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$b).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$4=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){_testAxis.fromArray(n,s);const o=r.x*Math.abs(_testAxis.x)+r.y*Math.abs(_testAxis.y)+r.z*Math.abs(_testAxis.z),l=e.dot(_testAxis),c=t.dot(_testAxis),u=i.dot(_testAxis);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const _box$3=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_box$3.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const t=_v1$6.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_v1$6,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_vector$a.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.origin).addScaledVector(this.direction,t),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const s=e.distanceTo(t)*.5,a=-this.direction.dot(_segDir),o=_diff.dot(this.direction),l=-_diff.dot(_segDir),c=_diff.lengthSq(),u=Math.abs(1-a*a);let f,d,m,x;if(u>0)if(f=a*l-o,d=a*o-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const S=1/u;f*=S,d*=S,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(_segCenter).addScaledVector(_segDir,d),m}intersectSphere(e,t){_vector$a.subVectors(e.center,this.origin);const i=_vector$a.dot(this.direction),r=_vector$a.dot(_vector$a)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,t,i,r,s){_edge1.subVectors(t,e),_edge2.subVectors(i,e),_normal$1.crossVectors(_edge1,_edge2);let a=this.direction.dot(_normal$1),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_diff.subVectors(this.origin,e);const l=o*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(l<0)return null;const c=o*this.direction.dot(_edge1.cross(_diff));if(c<0||l+c>a)return null;const u=-o*_diff.dot(_normal$1);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(e,t,i,r,s,a,o,l,c,u,f,d,m,x,S,_){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,S,_)}set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,S,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=d,g[3]=m,g[7]=x,g[11]=S,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/_v1$5.setFromMatrixColumn(e,0).length(),s=1/_v1$5.setFromMatrixColumn(e,1).length(),a=1/_v1$5.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,x=o*u,S=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=d-S*c,t[9]=-o*l,t[2]=S-d*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,x=c*u,S=c*f;t[0]=d+S*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=S+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,x=c*u,S=c*f;t[0]=d-S*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=S-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,x=o*u,S=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+S,t[1]=l*f,t[5]=S*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,S=o*c;t[0]=l*u,t[4]=S-d*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=d-S*f}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,S=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+S,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=S*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,i){const r=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(i,_z),_x.lengthSq()===0&&(Math.abs(i.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(i,_z)),_x.normalize(),_y.crossVectors(_z,_x),r[0]=_x.x,r[4]=_y.x,r[8]=_z.x,r[1]=_x.y,r[5]=_y.y,r[9]=_z.y,r[2]=_x.z,r[6]=_y.z,r[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],x=i[2],S=i[6],_=i[10],g=i[14],T=i[3],A=i[7],b=i[11],P=i[15],N=r[0],D=r[4],z=r[8],y=r[12],R=r[1],U=r[5],K=r[9],$=r[13],se=r[2],ne=r[6],X=r[10],G=r[14],J=r[3],xe=r[7],ge=r[11],me=r[15];return s[0]=a*N+o*R+l*se+c*J,s[4]=a*D+o*U+l*ne+c*xe,s[8]=a*z+o*K+l*X+c*ge,s[12]=a*y+o*$+l*G+c*me,s[1]=u*N+f*R+d*se+m*J,s[5]=u*D+f*U+d*ne+m*xe,s[9]=u*z+f*K+d*X+m*ge,s[13]=u*y+f*$+d*G+m*me,s[2]=x*N+S*R+_*se+g*J,s[6]=x*D+S*U+_*ne+g*xe,s[10]=x*z+S*K+_*X+g*ge,s[14]=x*y+S*$+_*G+g*me,s[3]=T*N+A*R+b*se+P*J,s[7]=T*D+A*U+b*ne+P*xe,s[11]=T*z+A*K+b*X+P*ge,s[15]=T*y+A*$+b*G+P*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],x=e[3],S=e[7],_=e[11],g=e[15],T=l*m-c*d,A=o*m-c*f,b=o*d-l*f,P=a*m-c*u,N=a*d-l*u,D=a*f-o*u;return t*(S*T-_*A+g*b)-i*(x*T-_*P+g*N)+r*(x*A-S*P+g*D)-s*(x*b-S*N+_*D)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],x=e[12],S=e[13],_=e[14],g=e[15],T=f*_*c-S*d*c+S*l*m-o*_*m-f*l*g+o*d*g,A=x*d*c-u*_*c-x*l*m+a*_*m+u*l*g-a*d*g,b=u*S*c-x*f*c+x*o*m-a*S*m-u*o*g+a*f*g,P=x*f*l-u*S*l-x*o*d+a*S*d+u*o*_-a*f*_,N=t*T+i*A+r*b+s*P;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return e[0]=T*D,e[1]=(S*d*s-f*_*s-S*r*m+i*_*m+f*r*g-i*d*g)*D,e[2]=(o*_*s-S*l*s+S*r*c-i*_*c-o*r*g+i*l*g)*D,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*D,e[4]=A*D,e[5]=(u*_*s-x*d*s+x*r*m-t*_*m-u*r*g+t*d*g)*D,e[6]=(x*l*s-a*_*s-x*r*c+t*_*c+a*r*g-t*l*g)*D,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*D,e[8]=b*D,e[9]=(x*f*s-u*S*s-x*i*m+t*S*m+u*i*g-t*f*g)*D,e[10]=(a*S*s-x*o*s+x*i*c-t*S*c-a*i*g+t*o*g)*D,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*D,e[12]=P*D,e[13]=(u*S*r-x*f*r+x*i*d-t*S*d-u*i*_+t*f*_)*D,e[14]=(x*o*r-a*S*r-x*i*l+t*S*l+a*i*_-t*o*_)*D,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,x=s*f,S=a*u,_=a*f,g=o*f,T=l*c,A=l*u,b=l*f,P=i.x,N=i.y,D=i.z;return r[0]=(1-(S+g))*P,r[1]=(m+b)*P,r[2]=(x-A)*P,r[3]=0,r[4]=(m-b)*N,r[5]=(1-(d+g))*N,r[6]=(_+T)*N,r[7]=0,r[8]=(x+A)*D,r[9]=(_-T)*D,r[10]=(1-(d+S))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=_v1$5.set(r[0],r[1],r[2]).length();const a=_v1$5.set(r[4],r[5],r[6]).length(),o=_v1$5.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),_m1$2.copy(this);const c=1/s,u=1/a,f=1/o;return _m1$2.elements[0]*=c,_m1$2.elements[1]*=c,_m1$2.elements[2]*=c,_m1$2.elements[4]*=u,_m1$2.elements[5]*=u,_m1$2.elements[6]*=u,_m1$2.elements[8]*=f,_m1$2.elements[9]*=f,_m1$2.elements[10]*=f,t.setFromRotationMatrix(_m1$2),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=WebGLCoordinateSystem,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),m=(i+r)/(i-r);let x,S;if(l)x=s/(a-s),S=a*s/(a-s);else if(o===WebGLCoordinateSystem)x=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===WebGPUCoordinateSystem)x=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=WebGLCoordinateSystem,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),m=-(i+r)/(i-r);let x,S;if(l)x=1/(a-s),S=a/(a-s);else if(o===WebGLCoordinateSystem)x=-2/(a-s),S=-(a+s)/(a-s);else if(o===WebGPUCoordinateSystem)x=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$2=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,t=0,i=0,r=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(clamp(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-clamp(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(clamp(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-clamp(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:warn("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _matrix$2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$2,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"},_childaddedEvent={type:"childadded",child:null},_childremovedEvent={type:"childremoved",child:null};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const e=new Vector3,t=new Euler,i=new Quaternion,r=new Vector3(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$1$1.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_target.copy(e):_target.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1$1.lookAt(_position$3,_target,this.up):_m1$1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1$1),r&&(_m1$1$1.extractRotation(r.matrixWorld),_q1.setFromRotationMatrix(_m1$1$1),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(error("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null):error("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent),_childremovedEvent.child=e,this.dispatchEvent(_childremovedEvent),_childremovedEvent.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_m1$1$1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$1$1.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$1$1),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$2=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3,_v40=new Vector4,_v41=new Vector4,_v42=new Vector4;class Triangle{constructor(e=new Vector3,t=new Vector3,i=new Vector3){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_v0$1.subVectors(e,t),r.cross(_v0$1);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_v0$1.subVectors(r,t),_v1$3.subVectors(i,t),_v2$2.subVectors(e,t);const a=_v0$1.dot(_v0$1),o=_v0$1.dot(_v1$3),l=_v0$1.dot(_v2$2),c=_v1$3.dot(_v1$3),u=_v1$3.dot(_v2$2),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_v3$2)===null?!1:_v3$2.x>=0&&_v3$2.y>=0&&_v3$2.x+_v3$2.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,_v3$2)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_v3$2.x),l.addScaledVector(a,_v3$2.y),l.addScaledVector(o,_v3$2.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return _v40.setScalar(0),_v41.setScalar(0),_v42.setScalar(0),_v40.fromBufferAttribute(e,t),_v41.fromBufferAttribute(e,i),_v42.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(_v40,s.x),a.addScaledVector(_v41,s.y),a.addScaledVector(_v42,s.z),a}static isFrontFacing(e,t,i,r){return _v0$1.subVectors(i,t),_v1$3.subVectors(e,t),_v0$1.cross(_v1$3).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Triangle.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;_vab.subVectors(r,i),_vac.subVectors(s,i),_vap.subVectors(e,i);const l=_vab.dot(_vap),c=_vac.dot(_vap);if(l<=0&&c<=0)return t.copy(i);_vbp.subVectors(e,r);const u=_vab.dot(_vbp),f=_vac.dot(_vbp);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(_vab,a);_vcp.subVectors(e,s);const m=_vab.dot(_vcp),x=_vac.dot(_vcp);if(x>=0&&m<=x)return t.copy(s);const S=m*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(_vac,o);const _=u*x-m*f;if(_<=0&&f-u>=0&&m-x>=0)return _vbc.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(_vbc,o);const g=1/(_+S+d);return a=S*g,o=d*g,t.copy(i).addScaledVector(_vab,a).addScaledVector(_vac,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Color{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ColorManagement.workingColorSpace){return this.r=e,this.g=t,this.b=i,ColorManagement.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),t=clamp(t,0,1),i=clamp(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=hue2rgb(a,s,e+1/3),this.g=hue2rgb(a,s,e),this.b=hue2rgb(a,s,e-1/3)}return ColorManagement.colorSpaceToWorking(this,r),this}setStyle(e,t=SRGBColorSpace){function i(s){s!==void 0&&parseFloat(s)<1&&warn("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:warn("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);warn("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=SRGBColorSpace){const i=_colorKeywords[e.toLowerCase()];return i!==void 0?this.setHex(i,t):warn("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.workingToColorSpace(_color.copy(this),e),Math.round(clamp(_color.r*255,0,255))*65536+Math.round(clamp(_color.g*255,0,255))*256+Math.round(clamp(_color.b*255,0,255))}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ColorManagement.workingColorSpace){ColorManagement.workingToColorSpace(_color.copy(this),t);const i=_color.r,r=_color.g,s=_color.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ColorManagement.workingColorSpace){return ColorManagement.workingToColorSpace(_color.copy(this),t),e.r=_color.r,e.g=_color.g,e.b=_color.b,e}getStyle(e=SRGBColorSpace){ColorManagement.workingToColorSpace(_color.copy(this),e);const t=_color.r,i=_color.g,r=_color.b;return e!==SRGBColorSpace?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_hslA),this.setHSL(_hslA.h+e,_hslA.s+t,_hslA.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const i=lerp(_hslA.h,_hslB.h,t),r=lerp(_hslA.s,_hslB.s,t),s=lerp(_hslA.l,_hslB.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color=new Color;Color.NAMES=_colorKeywords;let _materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color(0,0,0),this.blendAlpha=0,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){warn(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){warn(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(i.blending=this.blending),this.side!==FrontSide&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==SrcAlphaFactor&&(i.blendSrc=this.blendSrc),this.blendDst!==OneMinusSrcAlphaFactor&&(i.blendDst=this.blendDst),this.blendEquation!==AddEquation&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==LessEqualDepth&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==AlwaysStencilFunc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==KeepStencilOp&&(i.stencilFail=this.stencilFail),this.stencilZFail!==KeepStencilOp&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==KeepStencilOp&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;let _id$2=0;class BufferAttribute{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_id$2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=StaticDrawUsage,this.updateRanges=[],this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix3(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix4(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyNormalMatrix(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.transformDirection(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=denormalize(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=normalize(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),i=normalize(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),i=normalize(i,this.array),r=normalize(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),i=normalize(i,this.array),r=normalize(r,this.array),s=normalize(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),e}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _id$1=0;const _m1$3=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$2=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Matrix3().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1$3.makeRotationFromQuaternion(e),this.applyMatrix4(_m1$3),this}rotateX(e){return _m1$3.makeRotationX(e),this.applyMatrix4(_m1$3),this}rotateY(e){return _m1$3.makeRotationY(e),this.applyMatrix4(_m1$3),this}rotateZ(e){return _m1$3.makeRotationZ(e),this.applyMatrix4(_m1$3),this}translate(e,t,i){return _m1$3.makeTranslation(e,t,i),this.applyMatrix4(_m1$3),this}scale(e,t,i){return _m1$3.makeScale(e,t,i),this.applyMatrix4(_m1$3),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Float32BufferAttribute(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&warn("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){error("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_box$2.setFromBufferAttribute(s),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$2.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$2.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$2.min),this.boundingBox.expandByPoint(_box$2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&error('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){error("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const i=this.boundingSphere.center;if(_box$2.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_boxMorphTargets.setFromBufferAttribute(o),this.morphTargetsRelative?(_vector$8.addVectors(_box$2.min,_boxMorphTargets.min),_box$2.expandByPoint(_vector$8),_vector$8.addVectors(_box$2.max,_boxMorphTargets.max),_box$2.expandByPoint(_vector$8)):(_box$2.expandByPoint(_boxMorphTargets.min),_box$2.expandByPoint(_boxMorphTargets.max))}_box$2.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)_vector$8.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_vector$8));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_vector$8.fromBufferAttribute(o,c),l&&(_offset.fromBufferAttribute(e,c),_vector$8.add(_offset)),r=Math.max(r,i.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&error('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){error("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<i.count;z++)o[z]=new Vector3,l[z]=new Vector3;const c=new Vector3,u=new Vector3,f=new Vector3,d=new Vector2,m=new Vector2,x=new Vector2,S=new Vector3,_=new Vector3;function g(z,y,R){c.fromBufferAttribute(i,z),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,R),d.fromBufferAttribute(s,z),m.fromBufferAttribute(s,y),x.fromBufferAttribute(s,R),u.sub(c),f.sub(c),m.sub(d),x.sub(d);const U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(U),_.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(U),o[z].add(S),o[y].add(S),o[R].add(S),l[z].add(_),l[y].add(_),l[R].add(_))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let z=0,y=T.length;z<y;++z){const R=T[z],U=R.start,K=R.count;for(let $=U,se=U+K;$<se;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}const A=new Vector3,b=new Vector3,P=new Vector3,N=new Vector3;function D(z){P.fromBufferAttribute(r,z),N.copy(P);const y=o[z];A.copy(y),A.sub(P.multiplyScalar(P.dot(y))).normalize(),b.crossVectors(N,y);const U=b.dot(l[z])<0?-1:1;a.setXYZW(z,A.x,A.y,A.z,U)}for(let z=0,y=T.length;z<y;++z){const R=T[z],U=R.start,K=R.count;for(let $=U,se=U+K;$<se;$+=3)D(e.getX($+0)),D(e.getX($+1)),D(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new Vector3,s=new Vector3,a=new Vector3,o=new Vector3,l=new Vector3,c=new Vector3,u=new Vector3,f=new Vector3;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),S=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,_),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,_),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_vector$8.fromBufferAttribute(e,t),_vector$8.normalize(),e.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let S=0,_=l.length;S<_;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*u;for(let g=0;g<u;g++)d[x++]=c[m++]}return new BufferAttribute(d,u,f)}if(this.index===null)return warn("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new BufferGeometry,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$6=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){_morphA.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(_tempA.fromBufferAttribute(f,e),a?_morphA.addScaledVector(_tempA,u):_morphA.addScaledVector(_tempA.sub(t),u))}t.add(_morphA)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_sphere$6.copy(i.boundingSphere),_sphere$6.applyMatrix4(s),_ray$3.copy(e.ray).recast(e.near),!(_sphere$6.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$6,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(e.far-e.near)**2))&&(_inverseMatrix$3.copy(s).invert(),_ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3),!(i.boundingBox!==null&&_ray$3.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_ray$3)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){const _=d[x],g=a[_.materialIndex],T=Math.max(_.start,m.start),A=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let b=T,P=A;b<P;b+=3){const N=o.getX(b),D=o.getX(b+1),z=o.getX(b+2);r=checkGeometryIntersection(this,g,e,i,c,u,f,N,D,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let _=x,g=S;_<g;_+=3){const T=o.getX(_),A=o.getX(_+1),b=o.getX(_+2);r=checkGeometryIntersection(this,a,e,i,c,u,f,T,A,b),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){const _=d[x],g=a[_.materialIndex],T=Math.max(_.start,m.start),A=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let b=T,P=A;b<P;b+=3){const N=b,D=b+1,z=b+2;r=checkGeometryIntersection(this,g,e,i,c,u,f,N,D,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let _=x,g=S;_<g;_+=3){const T=_,A=_+1,b=_+2;r=checkGeometryIntersection(this,a,e,i,c,u,f,T,A,b),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function checkIntersection$1(n,e,t,i,r,s,a,o){let l;if(e.side===BackSide?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===FrontSide,o),l===null)return null;_intersectionPointWorld.copy(o),_intersectionPointWorld.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(_intersectionPointWorld);return c<t.near||c>t.far?null:{distance:c,point:_intersectionPointWorld.clone(),object:n}}function checkGeometryIntersection(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,_vA$1),n.getVertexPosition(l,_vB$1),n.getVertexPosition(c,_vC$1);const u=checkIntersection$1(n,e,t,i,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(u){const f=new Vector3;Triangle.getBarycoord(_intersectionPoint,_vA$1,_vB$1,_vC$1,f),r&&(u.uv=Triangle.getInterpolatedAttribute(r,o,l,c,f,new Vector2)),s&&(u.uv1=Triangle.getInterpolatedAttribute(s,o,l,c,f,new Vector2)),a&&(u.normal=Triangle.getInterpolatedAttribute(a,o,l,c,f,new Vector3),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,d.normal),u.face=d,u.barycoord=f}return u}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Float32BufferAttribute(c,3)),this.setAttribute("normal",new Float32BufferAttribute(u,3)),this.setAttribute("uv",new Float32BufferAttribute(f,2));function x(S,_,g,T,A,b,P,N,D,z,y){const R=b/D,U=P/z,K=b/2,$=P/2,se=N/2,ne=D+1,X=z+1;let G=0,J=0;const xe=new Vector3;for(let ge=0;ge<X;ge++){const me=ge*U-$;for(let Ie=0;Ie<ne;Ie++){const Be=Ie*R-K;xe[S]=Be*T,xe[_]=me*A,xe[g]=se,c.push(xe.x,xe.y,xe.z),xe[S]=0,xe[_]=0,xe[g]=N>0?1:-1,u.push(xe.x,xe.y,xe.z),f.push(Ie/D),f.push(1-ge/z),G+=1}}for(let ge=0;ge<z;ge++)for(let me=0;me<D;me++){const Ie=d+me+ne*ge,Be=d+me+ne*(ge+1),$e=d+(me+1)+ne*(ge+1),He=d+(me+1)+ne*ge;l.push(Ie,Be,He),l.push(Be,$e,He),J+=6}o.addGroup(m,J,y),m+=J,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function mergeUniforms(n){const e={};for(let t=0;t<n.length;t++){const i=cloneUniforms(n[t]);for(const r in i)e[r]=i[r]}return e}function cloneUniformsGroups(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function getUnlitUniformColorSpace(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ColorManagement.workingColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _v3$1=new Vector3,_minTarget=new Vector2,_maxTarget=new Vector2;class PerspectiveCamera extends Camera{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_v3$1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z),_v3$1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z)}getViewSize(e,t){return this.getViewBounds(e,_minTarget,_maxTarget),t.subVectors(_maxTarget,_minTarget)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new PerspectiveCamera(fov,aspect,e,t);r.layers=this.layers,this.add(r);const s=new PerspectiveCamera(fov,aspect,e,t);s.layers=this.layers,this.add(s);const a=new PerspectiveCamera(fov,aspect,e,t);a.layers=this.layers,this.add(a);const o=new PerspectiveCamera(fov,aspect,e,t);o.layers=this.layers,this.add(o);const l=new PerspectiveCamera(fov,aspect,e,t);l.layers=this.layers,this.add(l);const c=new PerspectiveCamera(fov,aspect,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===WebGLCoordinateSystem)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===WebGPUCoordinateSystem)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e=[],t=CubeReflectionMapping,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new CubeTexture(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new BoxGeometry(5,5,5),s=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:BackSide,blending:NoBlending});s.uniforms.tEquirect.value=t;const a=new Mesh(r,s),o=t.minFilter;return t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const _=t.getJointPose(S,i),g=this._getHandJoint(c,S);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Group;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Fog{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Color(e),this.near=t,this.far=i}clone(){return new Fog(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Euler,this.environmentIntensity=1,this.environmentRotation=new Euler,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class DataTexture extends Texture{constructor(e=null,t=1,i=1,r,s,a,o,l,c=NearestFilter,u=NearestFilter,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_vector1.subVectors(i,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_vector1),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_normalMatrix.getNormalMatrix(e),r=this.coplanarPoint(_vector1).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$3=new Sphere,_defaultSpriteCenter=new Vector2(.5,.5),_vector$6=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,i=new Plane,r=new Plane,s=new Plane,a=new Plane){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=WebGLCoordinateSystem,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],m=s[7],x=s[8],S=s[9],_=s[10],g=s[11],T=s[12],A=s[13],b=s[14],P=s[15];if(r[0].setComponents(c-a,m-u,g-x,P-T).normalize(),r[1].setComponents(c+a,m+u,g+x,P+T).normalize(),r[2].setComponents(c+o,m+f,g+S,P+A).normalize(),r[3].setComponents(c-o,m-f,g-S,P-A).normalize(),i)r[4].setComponents(l,d,_,b).normalize(),r[5].setComponents(c-l,m-d,g-_,P-b).normalize();else if(r[4].setComponents(c-l,m-d,g-_,P-b).normalize(),t===WebGLCoordinateSystem)r[5].setComponents(c+l,m+d,g+_,P+b).normalize();else if(t===WebGPUCoordinateSystem)r[5].setComponents(l,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_sphere$3.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$3.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_sphere$3)}intersectsSprite(e){_sphere$3.center.set(0,0,0);const t=_defaultSpriteCenter.distanceTo(e.center);return _sphere$3.radius=.7071067811865476+t,_sphere$3.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$3)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_vector$6.x=r.normal.x>0?e.max.x:e.min.x,_vector$6.y=r.normal.y>0?e.max.y:e.min.y,_vector$6.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_vector$6)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class PointsMaterial extends Material{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Color(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _inverseMatrix=new Matrix4,_ray=new Ray,_sphere=new Sphere,_position$2=new Vector3;class Points extends Object3D{constructor(e=new BufferGeometry,t=new PointsMaterial){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_sphere.copy(i.boundingSphere),_sphere.applyMatrix4(r),_sphere.radius+=s,e.ray.intersectsSphere(_sphere)===!1)return;_inverseMatrix.copy(r).invert(),_ray.copy(e.ray).applyMatrix4(_inverseMatrix);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=d,S=m;x<S;x++){const _=c.getX(x);_position$2.fromBufferAttribute(f,_),testPoint(_position$2,_,l,r,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=d,S=m;x<S;x++)_position$2.fromBufferAttribute(f,x),testPoint(_position$2,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function testPoint(n,e,t,i,r,s,a){const o=_ray.distanceSqToPoint(n);if(o<t){const l=new Vector3;_ray.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class CanvasTexture extends Texture{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class DepthTexture extends Texture{constructor(e,t,i=UnsignedIntType,r,s,a,o=NearestFilter,l=NearestFilter,c,u=DepthFormat,f=1){if(u!==DepthFormat&&u!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Source(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class CubeDepthTexture extends DepthTexture{constructor(e,t=UnsignedIntType,i=CubeReflectionMapping,r,s,a=NearestFilter,o=NearestFilter,l,c=DepthFormat){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ExternalTexture extends Texture{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],x=[],S=[],_=[];for(let g=0;g<u;g++){const T=g*d-a;for(let A=0;A<c;A++){const b=A*f-s;x.push(b,-T,0),S.push(0,0,1),_.push(A/o),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let T=0;T<o;T++){const A=T+c*g,b=T+c*(g+1),P=T+1+c*(g+1),N=T+1+c*g;m.push(A,b,N),m.push(b,P,N)}this.setIndex(m),this.setAttribute("position",new Float32BufferAttribute(x,3)),this.setAttribute("normal",new Float32BufferAttribute(S,3)),this.setAttribute("uv",new Float32BufferAttribute(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}class RawShaderMaterial extends ShaderMaterial{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class MeshStandardMaterial extends Material{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Color(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Light extends Object3D{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Color(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const _projScreenMatrix$1=new Matrix4,_lightPositionWorld$1=new Vector3,_lookTarget$1=new Vector3;class LightShadow{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vector2(512,512),this.mapType=UnsignedByteType,this.map=null,this.mapPass=null,this.matrix=new Matrix4,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Frustum,this._frameExtents=new Vector2(1,1),this._viewportCount=1,this._viewports=[new Vector4(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_lightPositionWorld$1.setFromMatrixPosition(e.matrixWorld),t.position.copy(_lightPositionWorld$1),_lookTarget$1.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_lookTarget$1),t.updateMatrixWorld(),_projScreenMatrix$1.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix$1,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_projScreenMatrix$1)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class DirectionalLightShadow extends LightShadow{constructor(){super(new OrthographicCamera(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DirectionalLight extends Light{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Object3D.DEFAULT_UP),this.updateMatrix(),this.target=new Object3D,this.shadow=new DirectionalLightShadow}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function getByteLength(n,e,t,i){const r=getTextureTypeByteLength(i);switch(t){case AlphaFormat:return n*e;case RedFormat:return n*e/r.components*r.byteLength;case RedIntegerFormat:return n*e/r.components*r.byteLength;case RGFormat:return n*e*2/r.components*r.byteLength;case RGIntegerFormat:return n*e*2/r.components*r.byteLength;case RGBFormat:return n*e*3/r.components*r.byteLength;case RGBAFormat:return n*e*4/r.components*r.byteLength;case RGBAIntegerFormat:return n*e*4/r.components*r.byteLength;case RGB_S3TC_DXT1_Format:case RGBA_S3TC_DXT1_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case RGBA_S3TC_DXT3_Format:case RGBA_S3TC_DXT5_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case RGB_PVRTC_2BPPV1_Format:case RGBA_PVRTC_2BPPV1_Format:return Math.max(n,16)*Math.max(e,8)/4;case RGB_PVRTC_4BPPV1_Format:case RGBA_PVRTC_4BPPV1_Format:return Math.max(n,8)*Math.max(e,8)/2;case RGB_ETC1_Format:case RGB_ETC2_Format:case R11_EAC_Format:case SIGNED_R11_EAC_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case RGBA_ETC2_EAC_Format:case RG11_EAC_Format:case SIGNED_RG11_EAC_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case RGBA_ASTC_4x4_Format:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case RGBA_ASTC_5x4_Format:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case RGBA_ASTC_5x5_Format:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case RGBA_ASTC_6x5_Format:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case RGBA_ASTC_6x6_Format:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case RGBA_ASTC_8x5_Format:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case RGBA_ASTC_8x6_Format:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case RGBA_ASTC_8x8_Format:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case RGBA_ASTC_10x5_Format:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case RGBA_ASTC_10x6_Format:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case RGBA_ASTC_10x8_Format:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case RGBA_ASTC_10x10_Format:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case RGBA_ASTC_12x10_Format:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case RGBA_ASTC_12x12_Format:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case RGBA_BPTC_Format:case RGB_BPTC_SIGNED_Format:case RGB_BPTC_UNSIGNED_Format:return Math.ceil(n/4)*Math.ceil(e/4)*16;case RED_RGTC1_Format:case SIGNED_RED_RGTC1_Format:return Math.ceil(n/4)*Math.ceil(e/4)*8;case RED_GREEN_RGTC2_Format:case SIGNED_RED_GREEN_RGTC2_Format:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function getTextureTypeByteLength(n){switch(n){case UnsignedByteType:case ByteType:return{byteLength:1,components:1};case UnsignedShortType:case ShortType:case HalfFloatType:return{byteLength:2,components:1};case UnsignedShort4444Type:case UnsignedShort5551Type:return{byteLength:2,components:4};case UnsignedIntType:case IntType:case FloatType:return{byteLength:4,components:1};case UnsignedInt5999Type:case UnsignedInt101111Type:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);function WebGLAnimation(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function WebGLAttributes(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<f.length;m++){const x=f[d],S=f[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++d,f[d]=S)}f.length=d+1;for(let m=0,x=f.length;m<x;m++){const S=f[m];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment=`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex=`#ifdef USE_BATCHING
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
#endif`,batching_vertex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
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
#endif`,common=`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
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
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
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
#endif`,envmap_physical_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment=`uniform sampler2D dfgLUT;
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
}`,lights_fragment_begin=`
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
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment=`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
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
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
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
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
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
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$e=`#include <common>
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
}`,fragment$e=`#if DEPTH_PACKING == 3200
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
}`,vertex$d=`#define DISTANCE
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
}`,fragment$d=`#define DISTANCE
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
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$b=`uniform float scale;
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
}`,fragment$b=`uniform vec3 diffuse;
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
}`,vertex$a=`#include <common>
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
}`,fragment$a=`uniform vec3 diffuse;
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
}`,vertex$9=`#define LAMBERT
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
}`,fragment$9=`#define LAMBERT
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
}`,vertex$8=`#define MATCAP
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
}`,fragment$8=`#define MATCAP
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
}`,vertex$7=`#define NORMAL
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
}`,fragment$7=`#define NORMAL
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
}`,vertex$6=`#define PHONG
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
}`,fragment$6=`#define PHONG
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
}`,vertex$5=`#define STANDARD
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
}`,fragment$5=`#define STANDARD
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
}`,vertex$4=`#define TOON
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
}`,fragment$4=`#define TOON
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
}`,vertex$3=`uniform float size;
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
}`,fragment$3=`uniform vec3 diffuse;
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
}`,vertex$2=`#include <common>
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
}`,fragment$2=`uniform vec3 color;
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
}`,vertex$1=`uniform float rotation;
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
}`,fragment$1=`uniform vec3 diffuse;
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
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,batching_pars_vertex,batching_vertex,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphinstance_vertex,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distance_vert:vertex$d,distance_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},envMapRotation:{value:new Matrix3},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Matrix3}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distance:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distance_vert,fragmentShader:ShaderChunk.distance_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0},_e1$1=new Euler,_m1$1=new Matrix4;function WebGLBackground(n,e,t,i,r,s,a){const o=new Color(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function x(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function S(A){let b=!1;const P=x(A);P===null?g(o,l):P&&P.isColor&&(g(P,1),b=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(A,b){const P=x(b);P&&(P.isCubeTexture||P.mapping===CubeUVReflectionMapping)?(u===void 0&&(u=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_e1$1.copy(b.backgroundRotation),_e1$1.x*=-1,_e1$1.y*=-1,_e1$1.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(_e1$1.y*=-1,_e1$1.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1$1.makeRotationFromEuler(_e1$1)),u.material.toneMapped=ColorManagement.getTransfer(P.colorSpace)!==SRGBTransfer,(f!==P||d!==P.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=P,d=P.version,m=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ColorManagement.getTransfer(P.colorSpace)!==SRGBTransfer,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=P,d=P.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function g(A,b){A.getRGB(_rgb,getUnlitUniformColorSpace(n)),i.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,b,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,b=1){o.set(A),l=b,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,g(o,l)},render:S,addToRenderList:_,dispose:T}}function WebGLBindingStates(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(R,U,K,$,se){let ne=!1;const X=f($,K,U);s!==X&&(s=X,c(s.object)),ne=m(R,$,K,se),ne&&x(R,$,K,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,b(R,U,K,$),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function f(R,U,K){const $=K.wireframe===!0;let se=i[R.id];se===void 0&&(se={},i[R.id]=se);let ne=se[U.id];ne===void 0&&(ne={},se[U.id]=ne);let X=ne[$];return X===void 0&&(X=d(l()),ne[$]=X),X}function d(R){const U=[],K=[],$=[];for(let se=0;se<t;se++)U[se]=0,K[se]=0,$[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:K,attributeDivisors:$,object:R,attributes:{},index:null}}function m(R,U,K,$){const se=s.attributes,ne=U.attributes;let X=0;const G=K.getAttributes();for(const J in G)if(G[J].location>=0){const ge=se[J];let me=ne[J];if(me===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(me=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(me=R.instanceColor)),ge===void 0||ge.attribute!==me||me&&ge.data!==me.data)return!0;X++}return s.attributesNum!==X||s.index!==$}function x(R,U,K,$){const se={},ne=U.attributes;let X=0;const G=K.getAttributes();for(const J in G)if(G[J].location>=0){let ge=ne[J];ge===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(ge=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(ge=R.instanceColor));const me={};me.attribute=ge,ge&&ge.data&&(me.data=ge.data),se[J]=me,X++}s.attributes=se,s.attributesNum=X,s.index=$}function S(){const R=s.newAttributes;for(let U=0,K=R.length;U<K;U++)R[U]=0}function _(R){g(R,0)}function g(R,U){const K=s.newAttributes,$=s.enabledAttributes,se=s.attributeDivisors;K[R]=1,$[R]===0&&(n.enableVertexAttribArray(R),$[R]=1),se[R]!==U&&(n.vertexAttribDivisor(R,U),se[R]=U)}function T(){const R=s.newAttributes,U=s.enabledAttributes;for(let K=0,$=U.length;K<$;K++)U[K]!==R[K]&&(n.disableVertexAttribArray(K),U[K]=0)}function A(R,U,K,$,se,ne,X){X===!0?n.vertexAttribIPointer(R,U,K,se,ne):n.vertexAttribPointer(R,U,K,$,se,ne)}function b(R,U,K,$){S();const se=$.attributes,ne=K.getAttributes(),X=U.defaultAttributeValues;for(const G in ne){const J=ne[G];if(J.location>=0){let xe=se[G];if(xe===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(xe=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(xe=R.instanceColor)),xe!==void 0){const ge=xe.normalized,me=xe.itemSize,Ie=e.get(xe);if(Ie===void 0)continue;const Be=Ie.buffer,$e=Ie.type,He=Ie.bytesPerElement,ie=$e===n.INT||$e===n.UNSIGNED_INT||xe.gpuType===IntType;if(xe.isInterleavedBufferAttribute){const F=xe.data,te=F.stride,oe=xe.offset;if(F.isInstancedInterleavedBuffer){for(let ae=0;ae<J.locationSize;ae++)g(J.location+ae,F.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ae=0;ae<J.locationSize;ae++)_(J.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let ae=0;ae<J.locationSize;ae++)A(J.location+ae,me/J.locationSize,$e,ge,te*He,(oe+me/J.locationSize*ae)*He,ie)}else{if(xe.isInstancedBufferAttribute){for(let F=0;F<J.locationSize;F++)g(J.location+F,xe.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let F=0;F<J.locationSize;F++)_(J.location+F);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let F=0;F<J.locationSize;F++)A(J.location+F,me/J.locationSize,$e,ge,me*He,me/J.locationSize*F*He,ie)}}else if(X!==void 0){const ge=X[G];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(J.location,ge);break;case 3:n.vertexAttrib3fv(J.location,ge);break;case 4:n.vertexAttrib4fv(J.location,ge);break;default:n.vertexAttrib1fv(J.location,ge)}}}}T()}function P(){z();for(const R in i){const U=i[R];for(const K in U){const $=U[K];for(const se in $)u($[se].object),delete $[se];delete U[K]}delete i[R]}}function N(R){if(i[R.id]===void 0)return;const U=i[R.id];for(const K in U){const $=U[K];for(const se in $)u($[se].object),delete $[se];delete U[K]}delete i[R.id]}function D(R){for(const U in i){const K=i[U];if(K[R.id]===void 0)continue;const $=K[R.id];for(const se in $)u($[se].object),delete $[se];delete K[R.id]}}function z(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfProgram:D,initAttributes:S,enableAttribute:_,disableUnusedAttributes:T}}function WebGLBufferRenderer(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=u[x];t.update(m,i,1)}function l(c,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)a(c[x],u[x],d[x]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let x=0;for(let S=0;S<f;S++)x+=u[S]*d[S];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function WebGLCapabilities(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==RGBAFormat&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const z=D===HalfFloatType&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==UnsignedByteType&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==FloatType&&!z)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(warn("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),N=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:b,maxSamples:P,samples:N}}function WebGLClipping(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Plane,o=new Matrix3,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,S=f.clipIntersection,_=f.clipShadows,g=n.get(f);if(!r||x===null||x.length===0||s&&!_)s?u(null):c();else{const T=s?0:i,A=T*4;let b=g.clippingState||null;l.value=b,b=u(x,d,A,m);for(let P=0;P!==A;++P)b[P]=t[P];g.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,x){const S=f!==null?f.length:0;let _=null;if(S!==0){if(_=l.value,x!==!0||_===null){const g=m+S*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(_===null||_.length<g)&&(_=new Float32Array(g));for(let A=0,b=m;A!==S;++A,b+=4)a.copy(f[A]).applyMatrix4(T,o),a.normal.toArray(_,b),_[b+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,_}}function WebGLCubeMaps(n){let e=new WeakMap;function t(a,o){return o===EquirectangularReflectionMapping?a.mapping=CubeReflectionMapping:o===EquirectangularRefractionMapping&&(a.mapping=CubeRefractionMapping),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===EquirectangularReflectionMapping||o===EquirectangularRefractionMapping)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new WebGLCubeRenderTarget(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,GGX_SAMPLES=256,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null,_oldActiveCubeFace=0,_oldActiveMipmapLevel=0,_oldXrEnabled=!1;const _origin=new Vector3;class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=_origin}=s;_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel),this._renderer.xr.enabled=_oldXrEnabled,e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},r=_createRenderTarget(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_createPlanes(s)),this._blurMaterial=_getBlurShader(s,e,t),this._ggxMaterial=_getGGXShader(s,e,t)}return r}_compileMaterial(e){const t=new Mesh(new BufferGeometry,e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,i,r,s){const l=new PerspectiveCamera(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(_clearColor),f.toneMapping=NoToneMapping,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mesh(new BoxGeometry,new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,_=S.material;let g=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,g=!0):(_.color.copy(_clearColor),g=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const P=this._cubeSize;_setViewport(r,b*P,A>2?P:0,P,P),f.setRenderTarget(r),g&&f.render(S,l),f.render(e,l)}f.toneMapping=m,f.autoClear=d,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;_setViewport(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,_flatCamera)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,m=f*d,{_lodMax:x}=this,S=this._sizeLods[i],_=3*S*(i>x-LOD_MIN?i-x+LOD_MIN:0),g=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-t,_setViewport(s,_,g,3*S,2*S),r.setRenderTarget(s),r.render(o,_flatCamera),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,_setViewport(e,_,g,3*S,2*S),r.setRenderTarget(e),r.render(o,_flatCamera)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&error("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*MAX_SAMPLES-1),S=s/x,_=isFinite(s)?1+Math.floor(u*S):MAX_SAMPLES;_>MAX_SAMPLES&&warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${MAX_SAMPLES}`);const g=[];let T=0;for(let D=0;D<MAX_SAMPLES;++D){const z=D/S,y=Math.exp(-z*z/2);g.push(y),D===0?T+=y:D<_&&(T+=2*y)}for(let D=0;D<g.length;D++)g[D]=g[D]/T;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=x,d.mipInt.value=A-i;const b=this._sizeLods[r],P=3*b*(r>A-LOD_MIN?r-A+LOD_MIN:0),N=4*(this._cubeSize-b);_setViewport(t,P,N,3*b,2*b),l.setRenderTarget(t),l.render(f,_flatCamera)}}function _createPlanes(n){const e=[],t=[],i=[];let r=n;const s=n-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-LOD_MIN?l=EXTRA_LOD_SIGMA[a-n+LOD_MIN-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,S=3,_=2,g=1,T=new Float32Array(S*x*m),A=new Float32Array(_*x*m),b=new Float32Array(g*x*m);for(let N=0;N<m;N++){const D=N%3*2/3-1,z=N>2?0:-1,y=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];T.set(y,S*x*N),A.set(d,_*x*N);const R=[N,N,N,N,N,N];b.set(R,g*x*N)}const P=new BufferGeometry;P.setAttribute("position",new BufferAttribute(T,S)),P.setAttribute("uv",new BufferAttribute(A,_)),P.setAttribute("faceIndex",new BufferAttribute(b,g)),i.push(new Mesh(P,null)),r>LOD_MIN&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function _createRenderTarget(n,e,t){const i=new WebGLRenderTarget(n,e,t);return i.texture.mapping=CubeUVReflectionMapping,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _setViewport(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _getGGXShader(n,e,t){return new ShaderMaterial({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getBlurShader(n,e,t){const i=new Float32Array(MAX_SAMPLES),r=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

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
	`}function WebGLCubeUVMaps(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===EquirectangularReflectionMapping||l===EquirectangularRefractionMapping,u=l===CubeReflectionMapping||l===CubeRefractionMapping;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new PMREMGenerator(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new PMREMGenerator(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function WebGLExtensions(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&warnOnce("WebGLRenderer: "+i+" extension not supported."),r}}}function WebGLGeometries(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,x=f.attributes.position;let S=0;if(m!==null){const T=m.array;S=m.version;for(let A=0,b=T.length;A<b;A+=3){const P=T[A+0],N=T[A+1],D=T[A+2];d.push(P,N,N,D,D,P)}}else if(x!==void 0){const T=x.array;S=x.version;for(let A=0,b=T.length/3-1;A<b;A+=3){const P=A+0,N=A+1,D=A+2;d.push(P,N,N,D,D,P)}}else return;const _=new(arrayNeedsUint32(d)?Uint32BufferAttribute:Uint16BufferAttribute)(d,1);_.version=S;const g=s.get(f);g&&e.remove(g),s.set(f,_)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function WebGLIndexedBufferRenderer(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*a),t.update(m,i,1)}function c(d,m,x){x!==0&&(n.drawElementsInstanced(i,m,s,d*a,x),t.update(m,i,x))}function u(d,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,x);let _=0;for(let g=0;g<x;g++)_+=m[g];t.update(_,i,1)}function f(d,m,x,S){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d.length;g++)c(d[g]/a,m[g],S[g]);else{_.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,S,0,x);let g=0;for(let T=0;T<x;T++)g+=m[T]*S[T];t.update(g,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function WebGLInfo(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:error("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function WebGLMorphtargets(n,e,t){const i=new WeakMap,r=new Vector4;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let R=function(){z.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var m=R;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;x===!0&&(b=1),S===!0&&(b=2),_===!0&&(b=3);let P=o.attributes.position.count*b,N=1;P>e.maxTextureSize&&(N=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*N*4*f),z=new DataArrayTexture(D,P,N,f);z.type=FloatType,z.needsUpdate=!0;const y=b*4;for(let U=0;U<f;U++){const K=g[U],$=T[U],se=A[U],ne=P*N*4*U;for(let X=0;X<K.count;X++){const G=X*y;x===!0&&(r.fromBufferAttribute(K,X),D[ne+G+0]=r.x,D[ne+G+1]=r.y,D[ne+G+2]=r.z,D[ne+G+3]=0),S===!0&&(r.fromBufferAttribute($,X),D[ne+G+4]=r.x,D[ne+G+5]=r.y,D[ne+G+6]=r.z,D[ne+G+7]=0),_===!0&&(r.fromBufferAttribute(se,X),D[ne+G+8]=r.x,D[ne+G+9]=r.y,D[ne+G+10]=r.z,D[ne+G+11]=se.itemSize===4?r.w:1)}}d={count:f,texture:z,size:new Vector2(P,N)},i.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let _=0;_<c.length;_++)x+=c[_];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function WebGLObjects(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const toneMappingMap={[LinearToneMapping]:"LINEAR_TONE_MAPPING",[ReinhardToneMapping]:"REINHARD_TONE_MAPPING",[CineonToneMapping]:"CINEON_TONE_MAPPING",[ACESFilmicToneMapping]:"ACES_FILMIC_TONE_MAPPING",[AgXToneMapping]:"AGX_TONE_MAPPING",[NeutralToneMapping]:"NEUTRAL_TONE_MAPPING",[CustomToneMapping]:"CUSTOM_TONE_MAPPING"};function WebGLOutput(n,e,t,i,r){const s=new WebGLRenderTarget(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new WebGLRenderTarget(e,t,{type:HalfFloatType,depthBuffer:!1,stencilBuffer:!1}),o=new BufferGeometry;o.setAttribute("position",new Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Float32BufferAttribute([0,2,0,0,2,0],2));const l=new RawShaderMaterial({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Mesh(o,l),u=new OrthographicCamera(-1,1,1,-1,0,1);let f=null,d=null,m=!1,x,S=null,_=[],g=!1;this.setSize=function(T,A){s.setSize(T,A),a.setSize(T,A);for(let b=0;b<_.length;b++){const P=_[b];P.setSize&&P.setSize(T,A)}},this.setEffects=function(T){_=T,g=_.length>0&&_[0].isRenderPass===!0;const A=s.width,b=s.height;for(let P=0;P<_.length;P++){const N=_[P];N.setSize&&N.setSize(A,b)}},this.begin=function(T,A){if(m||T.toneMapping===NoToneMapping&&_.length===0)return!1;if(S=A,A!==null){const b=A.width,P=A.height;(s.width!==b||s.height!==P)&&this.setSize(b,P)}return g===!1&&T.setRenderTarget(s),x=T.toneMapping,T.toneMapping=NoToneMapping,!0},this.hasRenderPass=function(){return g},this.end=function(T,A){T.toneMapping=x,m=!0;let b=s,P=a;for(let N=0;N<_.length;N++){const D=_[N];if(D.enabled!==!1&&(D.render(T,P,b,A),D.needsSwap!==!1)){const z=b;b=P,P=z}}if(f!==T.outputColorSpace||d!==T.toneMapping){f=T.outputColorSpace,d=T.toneMapping,l.defines={},ColorManagement.getTransfer(f)===SRGBTransfer&&(l.defines.SRGB_TRANSFER="");const N=toneMappingMap[d];N&&(l.defines[N]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,T.setRenderTarget(S),T.render(c,u),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const emptyTexture=new Texture,emptyShadowTexture=new DepthTexture(1,1),emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=arrayCacheF32[r];if(s===void 0&&(s=new Float32Array(r),arrayCacheF32[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function arraysEqual(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function copyArray(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function allocTexUnits(n,e){let t=arrayCacheI32[e];t===void 0&&(t=new Int32Array(e),arrayCacheI32[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function setValueV1f(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function setValueV2f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;n.uniform2fv(this.addr,e),copyArray(t,e)}}function setValueV3f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(arraysEqual(t,e))return;n.uniform3fv(this.addr,e),copyArray(t,e)}}function setValueV4f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;n.uniform4fv(this.addr,e),copyArray(t,e)}}function setValueM2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,i))return;mat2array.set(i),n.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(t,i)}}function setValueM3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,i))return;mat3array.set(i),n.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(t,i)}}function setValueM4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,i))return;mat4array.set(i),n.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(t,i)}}function setValueV1i(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function setValueV2i(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;n.uniform2iv(this.addr,e),copyArray(t,e)}}function setValueV3i(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;n.uniform3iv(this.addr,e),copyArray(t,e)}}function setValueV4i(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;n.uniform4iv(this.addr,e),copyArray(t,e)}}function setValueV1ui(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function setValueV2ui(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;n.uniform2uiv(this.addr,e),copyArray(t,e)}}function setValueV3ui(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;n.uniform3uiv(this.addr,e),copyArray(t,e)}}function setValueV4ui(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;n.uniform4uiv(this.addr,e),copyArray(t,e)}}function setValueT1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(emptyShadowTexture.compareFunction=t.isReversedDepthBuffer()?GreaterEqualCompare:LessEqualCompare,s=emptyShadowTexture):s=emptyTexture,t.setTexture2D(e||s,r)}function setValueT3D1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||empty3dTexture,r)}function setValueT6(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||emptyCubeTexture,r)}function setValueT2DArray1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||emptyArrayTexture,r)}function getSingularSetter(n){switch(n){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(n,e){n.uniform1fv(this.addr,e)}function setValueV2fArray(n,e){const t=flatten(e,this.size,2);n.uniform2fv(this.addr,t)}function setValueV3fArray(n,e){const t=flatten(e,this.size,3);n.uniform3fv(this.addr,t)}function setValueV4fArray(n,e){const t=flatten(e,this.size,4);n.uniform4fv(this.addr,t)}function setValueM2Array(n,e){const t=flatten(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function setValueM3Array(n,e){const t=flatten(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function setValueM4Array(n,e){const t=flatten(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function setValueV1iArray(n,e){n.uniform1iv(this.addr,e)}function setValueV2iArray(n,e){n.uniform2iv(this.addr,e)}function setValueV3iArray(n,e){n.uniform3iv(this.addr,e)}function setValueV4iArray(n,e){n.uniform4iv(this.addr,e)}function setValueV1uiArray(n,e){n.uniform1uiv(this.addr,e)}function setValueV2uiArray(n,e){n.uniform2uiv(this.addr,e)}function setValueV3uiArray(n,e){n.uniform3uiv(this.addr,e)}function setValueV4uiArray(n,e){n.uniform4uiv(this.addr,e)}function setValueT1Array(n,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(n.uniform1iv(this.addr,s),copyArray(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=emptyShadowTexture:a=emptyTexture;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function setValueT3DArray(n,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(n.uniform1iv(this.addr,s),copyArray(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||empty3dTexture,s[a])}function setValueT6Array(n,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(n.uniform1iv(this.addr,s),copyArray(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||emptyCubeTexture,s[a])}function setValueT2DArrayArray(n,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(n.uniform1iv(this.addr,s),copyArray(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||emptyArrayTexture,s[a])}function getPureArraySetter(n){switch(n){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(n,e){n.seq.push(e),n.map[e.id]=e}function parseUniform(n,e,t){const i=n.name,r=i.length;for(RePathPart.lastIndex=0;;){const s=RePathPart.exec(i),a=RePathPart.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){addUniform(t,c===void 0?new SingleUniform(o,n,e):new PureArrayUniform(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new StructuredUniform(o),addUniform(t,f)),t=f}}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);parseUniform(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function WebGLShader(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const COMPLETION_STATUS_KHR=37297;let programIdCount=0;function handleSource(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const _m0=new Matrix3;function getEncodingComponents(n){ColorManagement._getMatrix(_m0,ColorManagement.workingColorSpace,n);const e=`mat3( ${_m0.elements.map(t=>t.toFixed(4))} )`;switch(ColorManagement.getTransfer(n)){case LinearTransfer:return[e,"LinearTransferOETF"];case SRGBTransfer:return[e,"sRGBTransferOETF"];default:return warn("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function getShaderErrors(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+handleSource(n.getShaderSource(e),o)}else return s}function getTexelEncodingFunction(n,e){const t=getEncodingComponents(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const toneMappingFunctions={[LinearToneMapping]:"Linear",[ReinhardToneMapping]:"Reinhard",[CineonToneMapping]:"Cineon",[ACESFilmicToneMapping]:"ACESFilmic",[AgXToneMapping]:"AgX",[NeutralToneMapping]:"Neutral",[CustomToneMapping]:"Custom"};function getToneMappingFunction(n,e){const t=toneMappingFunctions[e];return t===void 0?(warn("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _v0=new Vector3;function getLuminanceFunction(){ColorManagement.getLuminanceCoefficients(_v0);const n=_v0.x.toFixed(4),e=_v0.y.toFixed(4),t=_v0.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function generateVertexExtensions(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(filterEmptyLine).join(`
`)}function generateDefines(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fetchAttributeLocations(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function filterEmptyLine(n){return n!==""}function replaceLightNums(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(n){return n.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map;function includeReplacer(n,e){let t=ShaderChunk[e];if(t===void 0){const i=shaderChunkMap.get(e);if(i!==void 0)t=ShaderChunk[i],warn('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return resolveIncludes(t)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(n){return n.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function generatePrecision(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const shadowMapTypeDefines={[PCFShadowMap]:"SHADOWMAP_TYPE_PCF",[VSMShadowMap]:"SHADOWMAP_TYPE_VSM"};function generateShadowMapTypeDefine(n){return shadowMapTypeDefines[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const envMapTypeDefines={[CubeReflectionMapping]:"ENVMAP_TYPE_CUBE",[CubeRefractionMapping]:"ENVMAP_TYPE_CUBE",[CubeUVReflectionMapping]:"ENVMAP_TYPE_CUBE_UV"};function generateEnvMapTypeDefine(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":envMapTypeDefines[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const envMapModeDefines={[CubeRefractionMapping]:"ENVMAP_MODE_REFRACTION"};function generateEnvMapModeDefine(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":envMapModeDefines[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const envMapBlendingDefines={[MultiplyOperation]:"ENVMAP_BLENDING_MULTIPLY",[MixOperation]:"ENVMAP_BLENDING_MIX",[AddOperation]:"ENVMAP_BLENDING_ADD"};function generateEnvMapBlendingDefine(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":envMapBlendingDefines[n.combine]||"ENVMAP_BLENDING_NONE"}function generateCubeUVSize(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function WebGLProgram(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=generateShadowMapTypeDefine(t),c=generateEnvMapTypeDefine(t),u=generateEnvMapModeDefine(t),f=generateEnvMapBlendingDefine(t),d=generateCubeUVSize(t),m=generateVertexExtensions(t),x=generateDefines(s),S=r.createProgram();let _,g,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(filterEmptyLine).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(filterEmptyLine).join(`
`),g.length>0&&(g+=`
`)):(_=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),g=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",t.outputColorSpace),getLuminanceFunction(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),a=resolveIncludes(a),a=replaceLightNums(a,t),a=replaceClippingPlaneNums(a,t),o=resolveIncludes(o),o=replaceLightNums(o,t),o=replaceClippingPlaneNums(o,t),a=unrollLoops(a),o=unrollLoops(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=T+_+a,b=T+g+o,P=WebGLShader(r,r.VERTEX_SHADER,A),N=WebGLShader(r,r.FRAGMENT_SHADER,b);r.attachShader(S,P),r.attachShader(S,N),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function D(U){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(S)||"",$=r.getShaderInfoLog(P)||"",se=r.getShaderInfoLog(N)||"",ne=K.trim(),X=$.trim(),G=se.trim();let J=!0,xe=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,P,N);else{const ge=getShaderErrors(r,P,"vertex"),me=getShaderErrors(r,N,"fragment");error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+ne+`
`+ge+`
`+me)}else ne!==""?warn("WebGLProgram: Program Info Log:",ne):(X===""||G==="")&&(xe=!1);xe&&(U.diagnostics={runnable:J,programLog:ne,vertexShader:{log:X,prefix:_},fragmentShader:{log:G,prefix:g}})}r.deleteShader(P),r.deleteShader(N),z=new WebGLUniforms(r,S),y=fetchAttributeLocations(r,S)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(S,COMPLETION_STATUS_KHR)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=N,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new WebGLShaderStage(e),t.set(e,i)),i}}class WebGLShaderStage{constructor(e){this.id=_id++,this.code=e,this.usedTimes=0}}function WebGLPrograms(n,e,t,i,r,s,a){const o=new Layers,l=new WebGLShaderCache,c=new Set,u=[],f=new Map,d=r.logarithmicDepthBuffer;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,R,U,K,$){const se=K.fog,ne=$.geometry,X=y.isMeshStandardMaterial?K.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),J=G&&G.mapping===CubeUVReflectionMapping?G.image.height:null,xe=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&warn("WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ge=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,me=ge!==void 0?ge.length:0;let Ie=0;ne.morphAttributes.position!==void 0&&(Ie=1),ne.morphAttributes.normal!==void 0&&(Ie=2),ne.morphAttributes.color!==void 0&&(Ie=3);let Be,$e,He,ie;if(xe){const Xe=ShaderLib[xe];Be=Xe.vertexShader,$e=Xe.fragmentShader}else Be=y.vertexShader,$e=y.fragmentShader,l.update(y),He=l.getVertexShaderID(y),ie=l.getFragmentShaderID(y);const F=n.getRenderTarget(),te=n.state.buffers.depth.getReversed(),oe=$.isInstancedMesh===!0,ae=$.isBatchedMesh===!0,Pe=!!y.map,w=!!y.matcap,L=!!G,O=!!y.aoMap,Y=!!y.lightMap,q=!!y.bumpMap,Q=!!y.normalMap,C=!!y.displacementMap,fe=!!y.emissiveMap,le=!!y.metalnessMap,re=!!y.roughnessMap,ce=y.anisotropy>0,E=y.clearcoat>0,v=y.dispersion>0,I=y.iridescence>0,W=y.sheen>0,ee=y.transmission>0,H=ce&&!!y.anisotropyMap,be=E&&!!y.clearcoatMap,he=E&&!!y.clearcoatNormalMap,Re=E&&!!y.clearcoatRoughnessMap,Ne=I&&!!y.iridescenceMap,de=I&&!!y.iridescenceThicknessMap,Se=W&&!!y.sheenColorMap,Me=W&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,ve=!!y.specularColorMap,ke=!!y.specularIntensityMap,B=ee&&!!y.transmissionMap,Ae=ee&&!!y.thicknessMap,_e=!!y.gradientMap,we=!!y.alphaMap,pe=y.alphaTest>0,ue=!!y.alphaHash,Ee=!!y.extensions;let Ge=NoToneMapping;y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const Ke={shaderID:xe,shaderType:y.type,shaderName:y.name,vertexShader:Be,fragmentShader:$e,defines:y.defines,customVertexShaderID:He,customFragmentShaderID:ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:ae,batchingColor:ae&&$._colorsTexture!==null,instancing:oe,instancingColor:oe&&$.instanceColor!==null,instancingMorph:oe&&$.morphTexture!==null,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:LinearSRGBColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Pe,matcap:w,envMap:L,envMapMode:L&&G.mapping,envMapCubeUVHeight:J,aoMap:O,lightMap:Y,bumpMap:q,normalMap:Q,displacementMap:C,emissiveMap:fe,normalMapObjectSpace:Q&&y.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:Q&&y.normalMapType===TangentSpaceNormalMap,metalnessMap:le,roughnessMap:re,anisotropy:ce,anisotropyMap:H,clearcoat:E,clearcoatMap:be,clearcoatNormalMap:he,clearcoatRoughnessMap:Re,dispersion:v,iridescence:I,iridescenceMap:Ne,iridescenceThicknessMap:de,sheen:W,sheenColorMap:Se,sheenRoughnessMap:Me,specularMap:Ce,specularColorMap:ve,specularIntensityMap:ke,transmission:ee,transmissionMap:B,thicknessMap:Ae,gradientMap:_e,opaque:y.transparent===!1&&y.blending===NormalBlending&&y.alphaToCoverage===!1,alphaMap:we,alphaTest:pe,alphaHash:ue,combine:y.combine,mapUv:Pe&&S(y.map.channel),aoMapUv:O&&S(y.aoMap.channel),lightMapUv:Y&&S(y.lightMap.channel),bumpMapUv:q&&S(y.bumpMap.channel),normalMapUv:Q&&S(y.normalMap.channel),displacementMapUv:C&&S(y.displacementMap.channel),emissiveMapUv:fe&&S(y.emissiveMap.channel),metalnessMapUv:le&&S(y.metalnessMap.channel),roughnessMapUv:re&&S(y.roughnessMap.channel),anisotropyMapUv:H&&S(y.anisotropyMap.channel),clearcoatMapUv:be&&S(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&S(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&S(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&S(y.iridescenceMap.channel),iridescenceThicknessMapUv:de&&S(y.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&S(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&S(y.sheenRoughnessMap.channel),specularMapUv:Ce&&S(y.specularMap.channel),specularColorMapUv:ve&&S(y.specularColorMap.channel),specularIntensityMapUv:ke&&S(y.specularIntensityMap.channel),transmissionMapUv:B&&S(y.transmissionMap.channel),thicknessMapUv:Ae&&S(y.thicknessMap.channel),alphaMapUv:we&&S(y.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Q||ce),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ne.attributes.uv&&(Pe||we),fog:!!se,useFog:y.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:$.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Pe&&y.map.isVideoTexture===!0&&ColorManagement.getTransfer(y.map.colorSpace)===SRGBTransfer,decodeVideoTextureEmissive:fe&&y.emissiveMap.isVideoTexture===!0&&ColorManagement.getTransfer(y.emissiveMap.colorSpace)===SRGBTransfer,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===DoubleSide,flipSided:y.side===BackSide,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ee&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&y.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function g(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)R.push(U),R.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(T(R,y),A(R,y),R.push(n.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function T(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function A(y,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),y.push(o.mask)}function b(y){const R=x[y.type];let U;if(R){const K=ShaderLib[R];U=UniformsUtils.clone(K.uniforms)}else U=y.uniforms;return U}function P(y,R){let U=f.get(R);return U!==void 0?++U.usedTimes:(U=new WebGLProgram(n,R,y,s),u.push(U),f.set(R,U)),U}function N(y){if(--y.usedTimes===0){const R=u.indexOf(y);u[R]=u[u.length-1],u.pop(),f.delete(y.cacheKey),y.destroy()}}function D(y){l.remove(y)}function z(){l.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:b,acquireProgram:P,releaseProgram:N,releaseShaderCache:D,programs:u,dispose:z}}function WebGLProperties(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function painterSortStable(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function reversePainterSortStable(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function WebGLRenderList(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,x,S,_){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:S,group:_},n[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.groupOrder=x,g.renderOrder=f.renderOrder,g.z=S,g.group=_),e++,g}function o(f,d,m,x,S,_){const g=a(f,d,m,x,S,_);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(f,d,m,x,S,_){const g=a(f,d,m,x,S,_);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function c(f,d){t.length>1&&t.sort(f||painterSortStable),i.length>1&&i.sort(d||reversePainterSortStable),r.length>1&&r.sort(d||reversePainterSortStable)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function WebGLRenderLists(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new WebGLRenderList,n.set(i,[a])):r>=s.length?(a=new WebGLRenderList,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function UniformsCache(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Vector3,color:new Color};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":t={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return n[e.id]=t,t}}}function ShadowUniformsCache(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WebGLLights(n){const e=new UniformsCache,t=ShadowUniformsCache(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Vector3);const r=new Vector3,s=new Matrix4,a=new Matrix4;function o(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,x=0,S=0,_=0,g=0,T=0,A=0,b=0,P=0,N=0,D=0;c.sort(shadowCastingAndTexturingLightsFirst);for(let y=0,R=c.length;y<R;y++){const U=c[y],K=U.color,$=U.intensity,se=U.distance;let ne=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===RGFormat?ne=U.shadow.map.texture:ne=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=K.r*$,f+=K.g*$,d+=K.b*$;else if(U.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],$);D++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const G=U.shadow,J=t.get(U);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=U.shadow.matrix,T++}i.directional[m]=X,m++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(K).multiplyScalar($),X.distance=se,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[S]=X;const G=U.shadow;if(U.map&&(i.spotLightMap[P]=U.map,P++,G.updateMatrices(U),U.castShadow&&N++),i.spotLightMatrix[S]=G.matrix,U.castShadow){const J=t.get(U);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.spotShadow[S]=J,i.spotShadowMap[S]=ne,b++}S++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(K).multiplyScalar($),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=X,_++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const G=U.shadow,J=t.get(U);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,i.pointShadow[x]=J,i.pointShadowMap[x]=ne,i.pointShadowMatrix[x]=U.shadow.matrix,A++}i.point[x]=X,x++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar($),X.groundColor.copy(U.groundColor).multiplyScalar($),i.hemi[g]=X,g++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,i.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):(i.rectAreaLTC1=UniformsLib.LTC_HALF_1,i.rectAreaLTC2=UniformsLib.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const z=i.hash;(z.directionalLength!==m||z.pointLength!==x||z.spotLength!==S||z.rectAreaLength!==_||z.hemiLength!==g||z.numDirectionalShadows!==T||z.numPointShadows!==A||z.numSpotShadows!==b||z.numSpotMaps!==P||z.numLightProbes!==D)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=_,i.point.length=x,i.hemi.length=g,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+P-N,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=D,z.directionalLength=m,z.pointLength=x,z.spotLength=S,z.rectAreaLength=_,z.hemiLength=g,z.numDirectionalShadows=T,z.numPointShadows=A,z.numSpotShadows=b,z.numSpotMaps=P,z.numLightProbes=D,i.version=nextVersion++)}function l(c,u){let f=0,d=0,m=0,x=0,S=0;const _=u.matrixWorldInverse;for(let g=0,T=c.length;g<T;g++){const A=c[g];if(A.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),f++}else if(A.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),m++}else if(A.isRectAreaLight){const b=i.rectArea[x];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),a.identity(),s.copy(A.matrixWorld),s.premultiply(_),a.extractRotation(s),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(A.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),d++}else if(A.isHemisphereLight){const b=i.hemi[S];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(_),S++}}}return{setup:o,setupView:l,state:i}}function WebGLRenderState(n){const e=new WebGLLights(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function WebGLRenderStates(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new WebGLRenderState(n),e.set(r,[o])):s>=a.length?(o=new WebGLRenderState(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
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
}`,_cubeDirections=[new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(0,1,0),new Vector3(0,-1,0),new Vector3(0,0,1),new Vector3(0,0,-1)],_cubeUps=[new Vector3(0,-1,0),new Vector3(0,-1,0),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,-1,0),new Vector3(0,-1,0)],_projScreenMatrix=new Matrix4,_lightPositionWorld=new Vector3,_lookTarget=new Vector3;function WebGLShadowMap(n,e,t){let i=new Frustum;const r=new Vector2,s=new Vector2,a=new Vector4,o=new MeshDepthMaterial,l=new MeshDistanceMaterial,c={},u=t.maxTextureSize,f={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},d=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new BufferGeometry;x.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Mesh(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let g=this.type;this.render=function(N,D,z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||N.length===0)return;N.type===PCFSoftShadowMap&&(warn("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),N.type=PCFShadowMap);const y=n.getRenderTarget(),R=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),K=n.state;K.setBlending(NoBlending),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const $=g!==this.type;$&&D.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(ne=>ne.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,ne=N.length;se<ne;se++){const X=N[se],G=X.shadow;if(G===void 0){warn("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const J=G.getFrameExtents();if(r.multiply(J),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,G.mapSize.y=s.y)),G.map===null||$===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===VSMShadowMap){if(X.isPointLight){warn("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new WebGLRenderTarget(r.x,r.y,{format:RGFormat,type:HalfFloatType,minFilter:LinearFilter,magFilter:LinearFilter,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new DepthTexture(r.x,r.y,FloatType),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=DepthFormat,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=NearestFilter,G.map.depthTexture.magFilter=NearestFilter}else{X.isPointLight?(G.map=new WebGLCubeRenderTarget(r.x),G.map.depthTexture=new CubeDepthTexture(r.x,UnsignedIntType)):(G.map=new WebGLRenderTarget(r.x,r.y),G.map.depthTexture=new DepthTexture(r.x,r.y,UnsignedIntType)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=DepthFormat;const ge=n.state.buffers.depth.getReversed();this.type===PCFShadowMap?(G.map.depthTexture.compareFunction=ge?GreaterEqualCompare:LessEqualCompare,G.map.depthTexture.minFilter=LinearFilter,G.map.depthTexture.magFilter=LinearFilter):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=NearestFilter,G.map.depthTexture.magFilter=NearestFilter)}G.camera.updateProjectionMatrix()}const xe=G.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<xe;ge++){if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(G.map),n.clear());const me=G.getViewport(ge);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),K.viewport(a)}if(X.isPointLight){const me=G.camera,Ie=G.matrix,Be=X.distance||me.far;Be!==me.far&&(me.far=Be,me.updateProjectionMatrix()),_lightPositionWorld.setFromMatrixPosition(X.matrixWorld),me.position.copy(_lightPositionWorld),_lookTarget.copy(me.position),_lookTarget.add(_cubeDirections[ge]),me.up.copy(_cubeUps[ge]),me.lookAt(_lookTarget),me.updateMatrixWorld(),Ie.makeTranslation(-_lightPositionWorld.x,-_lightPositionWorld.y,-_lightPositionWorld.z),_projScreenMatrix.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),G._frustum.setFromProjectionMatrix(_projScreenMatrix,me.coordinateSystem,me.reversedDepth)}else G.updateMatrices(X);i=G.getFrustum(),b(D,z,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===VSMShadowMap&&T(G,z),G.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(y,R,U)};function T(N,D){const z=e.update(S);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,m.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new WebGLRenderTarget(r.x,r.y,{format:RGFormat,type:HalfFloatType})),d.uniforms.shadow_pass.value=N.map.depthTexture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(D,null,z,d,S,null),m.uniforms.shadow_pass.value=N.mapPass.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(D,null,z,m,S,null)}function A(N,D,z,y){let R=null;const U=z.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(U!==void 0)R=U;else if(R=z.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const K=R.uuid,$=D.uuid;let se=c[K];se===void 0&&(se={},c[K]=se);let ne=se[$];ne===void 0&&(ne=R.clone(),se[$]=ne,D.addEventListener("dispose",P)),R=ne}if(R.visible=D.visible,R.wireframe=D.wireframe,y===VSMShadowMap?R.side=D.shadowSide!==null?D.shadowSide:D.side:R.side=D.shadowSide!==null?D.shadowSide:f[D.side],R.alphaMap=D.alphaMap,R.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,R.map=D.map,R.clipShadows=D.clipShadows,R.clippingPlanes=D.clippingPlanes,R.clipIntersection=D.clipIntersection,R.displacementMap=D.displacementMap,R.displacementScale=D.displacementScale,R.displacementBias=D.displacementBias,R.wireframeLinewidth=D.wireframeLinewidth,R.linewidth=D.linewidth,z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const K=n.properties.get(R);K.light=z}return R}function b(N,D,z,y,R){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===VSMShadowMap)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,N.matrixWorld);const $=e.update(N),se=N.material;if(Array.isArray(se)){const ne=$.groups;for(let X=0,G=ne.length;X<G;X++){const J=ne[X],xe=se[J.materialIndex];if(xe&&xe.visible){const ge=A(N,xe,y,R);N.onBeforeShadow(n,N,D,z,$,ge,J),n.renderBufferDirect(z,null,$,ge,N,J),N.onAfterShadow(n,N,D,z,$,ge,J)}}}else if(se.visible){const ne=A(N,se,y,R);N.onBeforeShadow(n,N,D,z,$,ne,null),n.renderBufferDirect(z,null,$,ne,N,null),N.onAfterShadow(n,N,D,z,$,ne,null)}}const K=N.children;for(let $=0,se=K.length;$<se;$++)b(K[$],D,z,y,R)}function P(N){N.target.removeEventListener("dispose",P);for(const z in c){const y=c[z],R=N.target.uuid;R in y&&(y[R].dispose(),delete y[R])}}}const reversedFuncs={[NeverDepth]:AlwaysDepth,[LessDepth]:GreaterDepth,[EqualDepth]:NotEqualDepth,[LessEqualDepth]:GreaterEqualDepth,[AlwaysDepth]:NeverDepth,[GreaterDepth]:LessDepth,[NotEqualDepth]:EqualDepth,[GreaterEqualDepth]:LessEqualDepth};function WebGLState(n,e){function t(){let B=!1;const Ae=new Vector4;let _e=null;const we=new Vector4(0,0,0,0);return{setMask:function(pe){_e!==pe&&!B&&(n.colorMask(pe,pe,pe,pe),_e=pe)},setLocked:function(pe){B=pe},setClear:function(pe,ue,Ee,Ge,Ke){Ke===!0&&(pe*=Ge,ue*=Ge,Ee*=Ge),Ae.set(pe,ue,Ee,Ge),we.equals(Ae)===!1&&(n.clearColor(pe,ue,Ee,Ge),we.copy(Ae))},reset:function(){B=!1,_e=null,we.set(-1,0,0,0)}}}function i(){let B=!1,Ae=!1,_e=null,we=null,pe=null;return{setReversed:function(ue){if(Ae!==ue){const Ee=e.get("EXT_clip_control");ue?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),Ae=ue;const Ge=pe;pe=null,this.setClear(Ge)}},getReversed:function(){return Ae},setTest:function(ue){ue?F(n.DEPTH_TEST):te(n.DEPTH_TEST)},setMask:function(ue){_e!==ue&&!B&&(n.depthMask(ue),_e=ue)},setFunc:function(ue){if(Ae&&(ue=reversedFuncs[ue]),we!==ue){switch(ue){case NeverDepth:n.depthFunc(n.NEVER);break;case AlwaysDepth:n.depthFunc(n.ALWAYS);break;case LessDepth:n.depthFunc(n.LESS);break;case LessEqualDepth:n.depthFunc(n.LEQUAL);break;case EqualDepth:n.depthFunc(n.EQUAL);break;case GreaterEqualDepth:n.depthFunc(n.GEQUAL);break;case GreaterDepth:n.depthFunc(n.GREATER);break;case NotEqualDepth:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=ue}},setLocked:function(ue){B=ue},setClear:function(ue){pe!==ue&&(Ae&&(ue=1-ue),n.clearDepth(ue),pe=ue)},reset:function(){B=!1,_e=null,we=null,pe=null,Ae=!1}}}function r(){let B=!1,Ae=null,_e=null,we=null,pe=null,ue=null,Ee=null,Ge=null,Ke=null;return{setTest:function(Xe){B||(Xe?F(n.STENCIL_TEST):te(n.STENCIL_TEST))},setMask:function(Xe){Ae!==Xe&&!B&&(n.stencilMask(Xe),Ae=Xe)},setFunc:function(Xe,ot,lt){(_e!==Xe||we!==ot||pe!==lt)&&(n.stencilFunc(Xe,ot,lt),_e=Xe,we=ot,pe=lt)},setOp:function(Xe,ot,lt){(ue!==Xe||Ee!==ot||Ge!==lt)&&(n.stencilOp(Xe,ot,lt),ue=Xe,Ee=ot,Ge=lt)},setLocked:function(Xe){B=Xe},setClear:function(Xe){Ke!==Xe&&(n.clearStencil(Xe),Ke=Xe)},reset:function(){B=!1,Ae=null,_e=null,we=null,pe=null,ue=null,Ee=null,Ge=null,Ke=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,m=[],x=null,S=!1,_=null,g=null,T=null,A=null,b=null,P=null,N=null,D=new Color(0,0,0),z=0,y=!1,R=null,U=null,K=null,$=null,se=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=G>=2);let xe=null,ge={};const me=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Be=new Vector4().fromArray(me),$e=new Vector4().fromArray(Ie);function He(B,Ae,_e,we){const pe=new Uint8Array(4),ue=n.createTexture();n.bindTexture(B,ue),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<_e;Ee++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(Ae+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return ue}const ie={};ie[n.TEXTURE_2D]=He(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=He(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=He(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=He(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),F(n.DEPTH_TEST),a.setFunc(LessEqualDepth),q(!1),Q(CullFaceBack),F(n.CULL_FACE),O(NoBlending);function F(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function te(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function oe(B,Ae){return f[B]!==Ae?(n.bindFramebuffer(B,Ae),f[B]=Ae,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ae),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ae(B,Ae){let _e=m,we=!1;if(B){_e=d.get(Ae),_e===void 0&&(_e=[],d.set(Ae,_e));const pe=B.textures;if(_e.length!==pe.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Ee=pe.length;ue<Ee;ue++)_e[ue]=n.COLOR_ATTACHMENT0+ue;_e.length=pe.length,we=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,we=!0);we&&n.drawBuffers(_e)}function Pe(B){return x!==B?(n.useProgram(B),x=B,!0):!1}const w={[AddEquation]:n.FUNC_ADD,[SubtractEquation]:n.FUNC_SUBTRACT,[ReverseSubtractEquation]:n.FUNC_REVERSE_SUBTRACT};w[MinEquation]=n.MIN,w[MaxEquation]=n.MAX;const L={[ZeroFactor]:n.ZERO,[OneFactor]:n.ONE,[SrcColorFactor]:n.SRC_COLOR,[SrcAlphaFactor]:n.SRC_ALPHA,[SrcAlphaSaturateFactor]:n.SRC_ALPHA_SATURATE,[DstColorFactor]:n.DST_COLOR,[DstAlphaFactor]:n.DST_ALPHA,[OneMinusSrcColorFactor]:n.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:n.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:n.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:n.ONE_MINUS_DST_ALPHA,[ConstantColorFactor]:n.CONSTANT_COLOR,[OneMinusConstantColorFactor]:n.ONE_MINUS_CONSTANT_COLOR,[ConstantAlphaFactor]:n.CONSTANT_ALPHA,[OneMinusConstantAlphaFactor]:n.ONE_MINUS_CONSTANT_ALPHA};function O(B,Ae,_e,we,pe,ue,Ee,Ge,Ke,Xe){if(B===NoBlending){S===!0&&(te(n.BLEND),S=!1);return}if(S===!1&&(F(n.BLEND),S=!0),B!==CustomBlending){if(B!==_||Xe!==y){if((g!==AddEquation||b!==AddEquation)&&(n.blendEquation(n.FUNC_ADD),g=AddEquation,b=AddEquation),Xe)switch(B){case NormalBlending:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:n.blendFunc(n.ONE,n.ONE);break;case SubtractiveBlending:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case MultiplyBlending:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:error("WebGLState: Invalid blending: ",B);break}else switch(B){case NormalBlending:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case SubtractiveBlending:error("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case MultiplyBlending:error("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:error("WebGLState: Invalid blending: ",B);break}T=null,A=null,P=null,N=null,D.set(0,0,0),z=0,_=B,y=Xe}return}pe=pe||Ae,ue=ue||_e,Ee=Ee||we,(Ae!==g||pe!==b)&&(n.blendEquationSeparate(w[Ae],w[pe]),g=Ae,b=pe),(_e!==T||we!==A||ue!==P||Ee!==N)&&(n.blendFuncSeparate(L[_e],L[we],L[ue],L[Ee]),T=_e,A=we,P=ue,N=Ee),(Ge.equals(D)===!1||Ke!==z)&&(n.blendColor(Ge.r,Ge.g,Ge.b,Ke),D.copy(Ge),z=Ke),_=B,y=!1}function Y(B,Ae){B.side===DoubleSide?te(n.CULL_FACE):F(n.CULL_FACE);let _e=B.side===BackSide;Ae&&(_e=!_e),q(_e),B.blending===NormalBlending&&B.transparent===!1?O(NoBlending):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const we=B.stencilWrite;o.setTest(we),we&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):te(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(B){R!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),R=B)}function Q(B){B!==CullFaceNone?(F(n.CULL_FACE),B!==U&&(B===CullFaceBack?n.cullFace(n.BACK):B===CullFaceFront?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):te(n.CULL_FACE),U=B}function C(B){B!==K&&(X&&n.lineWidth(B),K=B)}function fe(B,Ae,_e){B?(F(n.POLYGON_OFFSET_FILL),($!==Ae||se!==_e)&&(n.polygonOffset(Ae,_e),$=Ae,se=_e)):te(n.POLYGON_OFFSET_FILL)}function le(B){B?F(n.SCISSOR_TEST):te(n.SCISSOR_TEST)}function re(B){B===void 0&&(B=n.TEXTURE0+ne-1),xe!==B&&(n.activeTexture(B),xe=B)}function ce(B,Ae,_e){_e===void 0&&(xe===null?_e=n.TEXTURE0+ne-1:_e=xe);let we=ge[_e];we===void 0&&(we={type:void 0,texture:void 0},ge[_e]=we),(we.type!==B||we.texture!==Ae)&&(xe!==_e&&(n.activeTexture(_e),xe=_e),n.bindTexture(B,Ae||ie[B]),we.type=B,we.texture=Ae)}function E(){const B=ge[xe];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(B){error("WebGLState:",B)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(B){error("WebGLState:",B)}}function W(){try{n.texSubImage2D(...arguments)}catch(B){error("WebGLState:",B)}}function ee(){try{n.texSubImage3D(...arguments)}catch(B){error("WebGLState:",B)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(B){error("WebGLState:",B)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(B){error("WebGLState:",B)}}function he(){try{n.texStorage2D(...arguments)}catch(B){error("WebGLState:",B)}}function Re(){try{n.texStorage3D(...arguments)}catch(B){error("WebGLState:",B)}}function Ne(){try{n.texImage2D(...arguments)}catch(B){error("WebGLState:",B)}}function de(){try{n.texImage3D(...arguments)}catch(B){error("WebGLState:",B)}}function Se(B){Be.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Be.copy(B))}function Me(B){$e.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),$e.copy(B))}function Ce(B,Ae){let _e=c.get(Ae);_e===void 0&&(_e=new WeakMap,c.set(Ae,_e));let we=_e.get(B);we===void 0&&(we=n.getUniformBlockIndex(Ae,B.name),_e.set(B,we))}function ve(B,Ae){const we=c.get(Ae).get(B);l.get(Ae)!==we&&(n.uniformBlockBinding(Ae,we,B.__bindingPointIndex),l.set(Ae,we))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},xe=null,ge={},f={},d=new WeakMap,m=[],x=null,S=!1,_=null,g=null,T=null,A=null,b=null,P=null,N=null,D=new Color(0,0,0),z=0,y=!1,R=null,U=null,K=null,$=null,se=null,Be.set(0,0,n.canvas.width,n.canvas.height),$e.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:F,disable:te,bindFramebuffer:oe,drawBuffers:ae,useProgram:Pe,setBlending:O,setMaterial:Y,setFlipSided:q,setCullFace:Q,setLineWidth:C,setPolygonOffset:fe,setScissorTest:le,activeTexture:re,bindTexture:ce,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:I,texImage2D:Ne,texImage3D:de,updateUBOMapping:Ce,uniformBlockBinding:ve,texStorage2D:he,texStorage3D:Re,texSubImage2D:W,texSubImage3D:ee,compressedTexSubImage2D:H,compressedTexSubImage3D:be,scissor:Se,viewport:Me,reset:ke}}function WebGLTextures(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vector2,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,v){return m?new OffscreenCanvas(E,v):createElementNS("canvas")}function S(E,v,I){let W=1;const ee=ce(E);if((ee.width>I||ee.height>I)&&(W=I/Math.max(ee.width,ee.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const H=Math.floor(W*ee.width),be=Math.floor(W*ee.height);f===void 0&&(f=x(H,be));const he=v?x(H,be):f;return he.width=H,he.height=be,he.getContext("2d").drawImage(E,0,0,H,be),warn("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+H+"x"+be+")."),he}else return"data"in E&&warn("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),E;return E}function _(E){return E.generateMipmaps}function g(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(E,v,I,W,ee=!1){if(E!==null){if(n[E]!==void 0)return n[E];warn("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let H=v;if(v===n.RED&&(I===n.FLOAT&&(H=n.R32F),I===n.HALF_FLOAT&&(H=n.R16F),I===n.UNSIGNED_BYTE&&(H=n.R8)),v===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(H=n.R8UI),I===n.UNSIGNED_SHORT&&(H=n.R16UI),I===n.UNSIGNED_INT&&(H=n.R32UI),I===n.BYTE&&(H=n.R8I),I===n.SHORT&&(H=n.R16I),I===n.INT&&(H=n.R32I)),v===n.RG&&(I===n.FLOAT&&(H=n.RG32F),I===n.HALF_FLOAT&&(H=n.RG16F),I===n.UNSIGNED_BYTE&&(H=n.RG8)),v===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(H=n.RG8UI),I===n.UNSIGNED_SHORT&&(H=n.RG16UI),I===n.UNSIGNED_INT&&(H=n.RG32UI),I===n.BYTE&&(H=n.RG8I),I===n.SHORT&&(H=n.RG16I),I===n.INT&&(H=n.RG32I)),v===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(H=n.RGB8UI),I===n.UNSIGNED_SHORT&&(H=n.RGB16UI),I===n.UNSIGNED_INT&&(H=n.RGB32UI),I===n.BYTE&&(H=n.RGB8I),I===n.SHORT&&(H=n.RGB16I),I===n.INT&&(H=n.RGB32I)),v===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),I===n.UNSIGNED_INT&&(H=n.RGBA32UI),I===n.BYTE&&(H=n.RGBA8I),I===n.SHORT&&(H=n.RGBA16I),I===n.INT&&(H=n.RGBA32I)),v===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),v===n.RGBA){const be=ee?LinearTransfer:ColorManagement.getTransfer(W);I===n.FLOAT&&(H=n.RGBA32F),I===n.HALF_FLOAT&&(H=n.RGBA16F),I===n.UNSIGNED_BYTE&&(H=be===SRGBTransfer?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function b(E,v){let I;return E?v===null||v===UnsignedIntType||v===UnsignedInt248Type?I=n.DEPTH24_STENCIL8:v===FloatType?I=n.DEPTH32F_STENCIL8:v===UnsignedShortType&&(I=n.DEPTH24_STENCIL8,warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===UnsignedIntType||v===UnsignedInt248Type?I=n.DEPTH_COMPONENT24:v===FloatType?I=n.DEPTH_COMPONENT32F:v===UnsignedShortType&&(I=n.DEPTH_COMPONENT16),I}function P(E,v){return _(E)===!0||E.isFramebufferTexture&&E.minFilter!==NearestFilter&&E.minFilter!==LinearFilter?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function N(E){const v=E.target;v.removeEventListener("dispose",N),z(v),v.isVideoTexture&&u.delete(v)}function D(E){const v=E.target;v.removeEventListener("dispose",D),R(v)}function z(E){const v=i.get(E);if(v.__webglInit===void 0)return;const I=E.source,W=d.get(I);if(W){const ee=W[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(E),Object.keys(W).length===0&&d.delete(I)}i.remove(E)}function y(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const I=E.source,W=d.get(I);delete W[v.__cacheKey],a.memory.textures--}function R(E){const v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let ee=0;ee<v.__webglFramebuffer[W].length;ee++)n.deleteFramebuffer(v.__webglFramebuffer[W][ee]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=E.textures;for(let W=0,ee=I.length;W<ee;W++){const H=i.get(I[W]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(I[W])}i.remove(E)}let U=0;function K(){U=0}function $(){const E=U;return E>=r.maxTextures&&warn("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),U+=1,E}function se(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function ne(E,v){const I=i.get(E);if(E.isVideoTexture&&le(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&I.__version!==E.version){const W=E.image;if(W===null)warn("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)warn("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(I,E,v);return}}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+v)}function X(E,v){const I=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){ie(I,E,v);return}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+v)}function G(E,v){const I=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){ie(I,E,v);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+v)}function J(E,v){const I=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&I.__version!==E.version){F(I,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+v)}const xe={[RepeatWrapping]:n.REPEAT,[ClampToEdgeWrapping]:n.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:n.MIRRORED_REPEAT},ge={[NearestFilter]:n.NEAREST,[NearestMipmapNearestFilter]:n.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:n.NEAREST_MIPMAP_LINEAR,[LinearFilter]:n.LINEAR,[LinearMipmapNearestFilter]:n.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:n.LINEAR_MIPMAP_LINEAR},me={[NeverCompare]:n.NEVER,[AlwaysCompare]:n.ALWAYS,[LessCompare]:n.LESS,[LessEqualCompare]:n.LEQUAL,[EqualCompare]:n.EQUAL,[GreaterEqualCompare]:n.GEQUAL,[GreaterCompare]:n.GREATER,[NotEqualCompare]:n.NOTEQUAL};function Ie(E,v){if(v.type===FloatType&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===LinearFilter||v.magFilter===LinearMipmapNearestFilter||v.magFilter===NearestMipmapLinearFilter||v.magFilter===LinearMipmapLinearFilter||v.minFilter===LinearFilter||v.minFilter===LinearMipmapNearestFilter||v.minFilter===NearestMipmapLinearFilter||v.minFilter===LinearMipmapLinearFilter)&&warn("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,xe[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,xe[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,xe[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ge[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ge[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===NearestFilter||v.minFilter!==NearestMipmapLinearFilter&&v.minFilter!==LinearMipmapLinearFilter||v.type===FloatType&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Be(E,v){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",N));const W=v.source;let ee=d.get(W);ee===void 0&&(ee={},d.set(W,ee));const H=se(v);if(H!==E.__cacheKey){ee[H]===void 0&&(ee[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),ee[H].usedTimes++;const be=ee[E.__cacheKey];be!==void 0&&(ee[E.__cacheKey].usedTimes--,be.usedTimes===0&&y(v)),E.__cacheKey=H,E.__webglTexture=ee[H].texture}return I}function $e(E,v,I){return Math.floor(Math.floor(E/I)/v)}function He(E,v,I,W){const H=E.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,I,W,v.data);else{H.sort((de,Se)=>de.start-Se.start);let be=0;for(let de=1;de<H.length;de++){const Se=H[be],Me=H[de],Ce=Se.start+Se.count,ve=$e(Me.start,v.width,4),ke=$e(Se.start,v.width,4);Me.start<=Ce+1&&ve===ke&&$e(Me.start+Me.count-1,v.width,4)===ve?Se.count=Math.max(Se.count,Me.start+Me.count-Se.start):(++be,H[be]=Me)}H.length=be+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let de=0,Se=H.length;de<Se;de++){const Me=H[de],Ce=Math.floor(Me.start/4),ve=Math.ceil(Me.count/4),ke=Ce%v.width,B=Math.floor(Ce/v.width),Ae=ve,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,ke,B,Ae,_e,I,W,v.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function ie(E,v,I){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);const ee=Be(E,v),H=v.source;t.bindTexture(W,E.__webglTexture,n.TEXTURE0+I);const be=i.get(H);if(H.version!==be.__version||ee===!0){t.activeTexture(n.TEXTURE0+I);const he=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),Re=v.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(v.colorSpace),Ne=v.colorSpace===NoColorSpace||he===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let de=S(v.image,!1,r.maxTextureSize);de=re(v,de);const Se=s.convert(v.format,v.colorSpace),Me=s.convert(v.type);let Ce=A(v.internalFormat,Se,Me,v.colorSpace,v.isVideoTexture);Ie(W,v);let ve;const ke=v.mipmaps,B=v.isVideoTexture!==!0,Ae=be.__version===void 0||ee===!0,_e=H.dataReady,we=P(v,de);if(v.isDepthTexture)Ce=b(v.format===DepthStencilFormat,v.type),Ae&&(B?t.texStorage2D(n.TEXTURE_2D,1,Ce,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ce,de.width,de.height,0,Se,Me,null));else if(v.isDataTexture)if(ke.length>0){B&&Ae&&t.texStorage2D(n.TEXTURE_2D,we,Ce,ke[0].width,ke[0].height);for(let pe=0,ue=ke.length;pe<ue;pe++)ve=ke[pe],B?_e&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,Se,Me,ve.data):t.texImage2D(n.TEXTURE_2D,pe,Ce,ve.width,ve.height,0,Se,Me,ve.data);v.generateMipmaps=!1}else B?(Ae&&t.texStorage2D(n.TEXTURE_2D,we,Ce,de.width,de.height),_e&&He(v,de,Se,Me)):t.texImage2D(n.TEXTURE_2D,0,Ce,de.width,de.height,0,Se,Me,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){B&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ce,ke[0].width,ke[0].height,de.depth);for(let pe=0,ue=ke.length;pe<ue;pe++)if(ve=ke[pe],v.format!==RGBAFormat)if(Se!==null)if(B){if(_e)if(v.layerUpdates.size>0){const Ee=getByteLength(ve.width,ve.height,v.format,v.type);for(const Ge of v.layerUpdates){const Ke=ve.data.subarray(Ge*Ee/ve.data.BYTES_PER_ELEMENT,(Ge+1)*Ee/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,Ge,ve.width,ve.height,1,Se,Ke)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ve.width,ve.height,de.depth,Se,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,Ce,ve.width,ve.height,de.depth,0,ve.data,0,0);else warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ve.width,ve.height,de.depth,Se,Me,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,Ce,ve.width,ve.height,de.depth,0,Se,Me,ve.data)}else{B&&Ae&&t.texStorage2D(n.TEXTURE_2D,we,Ce,ke[0].width,ke[0].height);for(let pe=0,ue=ke.length;pe<ue;pe++)ve=ke[pe],v.format!==RGBAFormat?Se!==null?B?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,Se,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,Ce,ve.width,ve.height,0,ve.data):warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?_e&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,Se,Me,ve.data):t.texImage2D(n.TEXTURE_2D,pe,Ce,ve.width,ve.height,0,Se,Me,ve.data)}else if(v.isDataArrayTexture)if(B){if(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ce,de.width,de.height,de.depth),_e)if(v.layerUpdates.size>0){const pe=getByteLength(de.width,de.height,v.format,v.type);for(const ue of v.layerUpdates){const Ee=de.data.subarray(ue*pe/de.data.BYTES_PER_ELEMENT,(ue+1)*pe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,de.width,de.height,1,Se,Me,Ee)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Se,Me,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,de.width,de.height,de.depth,0,Se,Me,de.data);else if(v.isData3DTexture)B?(Ae&&t.texStorage3D(n.TEXTURE_3D,we,Ce,de.width,de.height,de.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Se,Me,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,de.width,de.height,de.depth,0,Se,Me,de.data);else if(v.isFramebufferTexture){if(Ae)if(B)t.texStorage2D(n.TEXTURE_2D,we,Ce,de.width,de.height);else{let pe=de.width,ue=de.height;for(let Ee=0;Ee<we;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,Ce,pe,ue,0,Se,Me,null),pe>>=1,ue>>=1}}else if(ke.length>0){if(B&&Ae){const pe=ce(ke[0]);t.texStorage2D(n.TEXTURE_2D,we,Ce,pe.width,pe.height)}for(let pe=0,ue=ke.length;pe<ue;pe++)ve=ke[pe],B?_e&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Se,Me,ve):t.texImage2D(n.TEXTURE_2D,pe,Ce,Se,Me,ve);v.generateMipmaps=!1}else if(B){if(Ae){const pe=ce(de);t.texStorage2D(n.TEXTURE_2D,we,Ce,pe.width,pe.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Me,de)}else t.texImage2D(n.TEXTURE_2D,0,Ce,Se,Me,de);_(v)&&g(W),be.__version=H.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function F(E,v,I){if(v.image.length!==6)return;const W=Be(E,v),ee=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+I);const H=i.get(ee);if(ee.version!==H.__version||W===!0){t.activeTexture(n.TEXTURE0+I);const be=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),he=v.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(v.colorSpace),Re=v.colorSpace===NoColorSpace||be===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ne=v.isCompressedTexture||v.image[0].isCompressedTexture,de=v.image[0]&&v.image[0].isDataTexture,Se=[];for(let ue=0;ue<6;ue++)!Ne&&!de?Se[ue]=S(v.image[ue],!0,r.maxCubemapSize):Se[ue]=de?v.image[ue].image:v.image[ue],Se[ue]=re(v,Se[ue]);const Me=Se[0],Ce=s.convert(v.format,v.colorSpace),ve=s.convert(v.type),ke=A(v.internalFormat,Ce,ve,v.colorSpace),B=v.isVideoTexture!==!0,Ae=H.__version===void 0||W===!0,_e=ee.dataReady;let we=P(v,Me);Ie(n.TEXTURE_CUBE_MAP,v);let pe;if(Ne){B&&Ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,ke,Me.width,Me.height);for(let ue=0;ue<6;ue++){pe=Se[ue].mipmaps;for(let Ee=0;Ee<pe.length;Ee++){const Ge=pe[Ee];v.format!==RGBAFormat?Ce!==null?B?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,0,0,Ge.width,Ge.height,Ce,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,ke,Ge.width,Ge.height,0,Ge.data):warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,0,0,Ge.width,Ge.height,Ce,ve,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,ke,Ge.width,Ge.height,0,Ce,ve,Ge.data)}}}else{if(pe=v.mipmaps,B&&Ae){pe.length>0&&we++;const ue=ce(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,ke,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(de){B?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Se[ue].width,Se[ue].height,Ce,ve,Se[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ke,Se[ue].width,Se[ue].height,0,Ce,ve,Se[ue].data);for(let Ee=0;Ee<pe.length;Ee++){const Ke=pe[Ee].image[ue].image;B?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,0,0,Ke.width,Ke.height,Ce,ve,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,ke,Ke.width,Ke.height,0,Ce,ve,Ke.data)}}else{B?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ce,ve,Se[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ke,Ce,ve,Se[ue]);for(let Ee=0;Ee<pe.length;Ee++){const Ge=pe[Ee];B?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,0,0,Ce,ve,Ge.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,ke,Ce,ve,Ge.image[ue])}}}_(v)&&g(n.TEXTURE_CUBE_MAP),H.__version=ee.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function te(E,v,I,W,ee,H){const be=s.convert(I.format,I.colorSpace),he=s.convert(I.type),Re=A(I.internalFormat,be,he,I.colorSpace),Ne=i.get(v),de=i.get(I);if(de.__renderTarget=v,!Ne.__hasExternalTextures){const Se=Math.max(1,v.width>>H),Me=Math.max(1,v.height>>H);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,H,Re,Se,Me,v.depth,0,be,he,null):t.texImage2D(ee,H,Re,Se,Me,0,be,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),fe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,ee,de.__webglTexture,0,C(v)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,ee,de.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(E,v,I){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){const W=v.depthTexture,ee=W&&W.isDepthTexture?W.type:null,H=b(v.stencilBuffer,ee),be=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(v),H,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(v),H,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,H,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,E)}else{const W=v.textures;for(let ee=0;ee<W.length;ee++){const H=W[ee],be=s.convert(H.format,H.colorSpace),he=s.convert(H.type),Re=A(H.internalFormat,be,he,H.colorSpace);fe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(v),Re,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(v),Re,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Re,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(E,v,I){const W=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(v.depthTexture);if(ee.__renderTarget=v,(!ee.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,v.depthTexture.addEventListener("dispose",N)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,v.depthTexture);const Ne=s.convert(v.depthTexture.format),de=s.convert(v.depthTexture.type);let Se;v.depthTexture.format===DepthFormat?Se=n.DEPTH_COMPONENT24:v.depthTexture.format===DepthStencilFormat&&(Se=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Se,v.width,v.height,0,Ne,de,null)}}else ne(v.depthTexture,0);const H=ee.__webglTexture,be=C(v),he=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,Re=v.depthTexture.format===DepthStencilFormat?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===DepthFormat)fe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,he,H,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,Re,he,H,0);else if(v.depthTexture.format===DepthStencilFormat)fe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,he,H,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,Re,he,H,0);else throw new Error("Unknown depthTexture format")}function Pe(E){const v=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const W=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",ee)};W.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=W}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(I)for(let W=0;W<6;W++)ae(v.__webglFramebuffer[W],E,W);else{const W=E.texture.mipmaps;W&&W.length>0?ae(v.__webglFramebuffer[0],E,0):ae(v.__webglFramebuffer,E,0)}else if(I){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),oe(v.__webglDepthbuffer[W],E,!1);else{const ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,H)}}else{const W=E.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),oe(v.__webglDepthbuffer,E,!1);else{const ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(E,v,I){const W=i.get(E);v!==void 0&&te(W.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Pe(E)}function L(E){const v=E.texture,I=i.get(E),W=i.get(v);E.addEventListener("dispose",D);const ee=E.textures,H=E.isWebGLCubeRenderTarget===!0,be=ee.length>1;if(be||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,a.memory.textures++),H){I.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[he]=[];for(let Re=0;Re<v.mipmaps.length;Re++)I.__webglFramebuffer[he][Re]=n.createFramebuffer()}else I.__webglFramebuffer[he]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)I.__webglFramebuffer[he]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(be)for(let he=0,Re=ee.length;he<Re;he++){const Ne=i.get(ee[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&fe(E)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let he=0;he<ee.length;he++){const Re=ee[he];I.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[he]);const Ne=s.convert(Re.format,Re.colorSpace),de=s.convert(Re.type),Se=A(Re.internalFormat,Ne,de,Re.colorSpace,E.isXRRenderTarget===!0),Me=C(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,Se,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,I.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)te(I.__webglFramebuffer[he][Re],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re);else te(I.__webglFramebuffer[he],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(v)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let he=0,Re=ee.length;he<Re;he++){const Ne=ee[he],de=i.get(Ne);let Se=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Se=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,de.__webglTexture),Ie(Se,Ne),te(I.__webglFramebuffer,E,Ne,n.COLOR_ATTACHMENT0+he,Se,0),_(Ne)&&g(Se)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(he=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,W.__webglTexture),Ie(he,v),v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)te(I.__webglFramebuffer[Re],E,v,n.COLOR_ATTACHMENT0,he,Re);else te(I.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,he,0);_(v)&&g(he),t.unbindTexture()}E.depthBuffer&&Pe(E)}function O(E){const v=E.textures;for(let I=0,W=v.length;I<W;I++){const ee=v[I];if(_(ee)){const H=T(E),be=i.get(ee).__webglTexture;t.bindTexture(H,be),g(H),t.unbindTexture()}}}const Y=[],q=[];function Q(E){if(E.samples>0){if(fe(E)===!1){const v=E.textures,I=E.width,W=E.height;let ee=n.COLOR_BUFFER_BIT;const H=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(E),he=v.length>1;if(he)for(let Ne=0;Ne<v.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Re=E.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ne=0;Ne<v.length;Ne++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ne]);const de=i.get(v[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,I,W,0,0,I,W,ee,n.NEAREST),l===!0&&(Y.length=0,q.length=0,Y.push(n.COLOR_ATTACHMENT0+Ne),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Y.push(H),q.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ne=0;Ne<v.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ne]);const de=i.get(v[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function C(E){return Math.min(r.maxSamples,E.samples)}function fe(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function le(E){const v=a.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function re(E,v){const I=E.colorSpace,W=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==LinearSRGBColorSpace&&I!==NoColorSpace&&(ColorManagement.getTransfer(I)===SRGBTransfer?(W!==RGBAFormat||ee!==UnsignedByteType)&&warn("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):error("WebGLTextures: Unsupported texture color space:",I)),v}function ce(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=K,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=J,this.rebindTextures=w,this.setupRenderTarget=L,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function WebGLUtils(n,e){function t(i,r=NoColorSpace){let s;const a=ColorManagement.getTransfer(r);if(i===UnsignedByteType)return n.UNSIGNED_BYTE;if(i===UnsignedShort4444Type)return n.UNSIGNED_SHORT_4_4_4_4;if(i===UnsignedShort5551Type)return n.UNSIGNED_SHORT_5_5_5_1;if(i===UnsignedInt5999Type)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===UnsignedInt101111Type)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ByteType)return n.BYTE;if(i===ShortType)return n.SHORT;if(i===UnsignedShortType)return n.UNSIGNED_SHORT;if(i===IntType)return n.INT;if(i===UnsignedIntType)return n.UNSIGNED_INT;if(i===FloatType)return n.FLOAT;if(i===HalfFloatType)return n.HALF_FLOAT;if(i===AlphaFormat)return n.ALPHA;if(i===RGBFormat)return n.RGB;if(i===RGBAFormat)return n.RGBA;if(i===DepthFormat)return n.DEPTH_COMPONENT;if(i===DepthStencilFormat)return n.DEPTH_STENCIL;if(i===RedFormat)return n.RED;if(i===RedIntegerFormat)return n.RED_INTEGER;if(i===RGFormat)return n.RG;if(i===RGIntegerFormat)return n.RG_INTEGER;if(i===RGBAIntegerFormat)return n.RGBA_INTEGER;if(i===RGB_S3TC_DXT1_Format||i===RGBA_S3TC_DXT1_Format||i===RGBA_S3TC_DXT3_Format||i===RGBA_S3TC_DXT5_Format)if(a===SRGBTransfer)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===RGB_S3TC_DXT1_Format)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT1_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT3_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===RGBA_S3TC_DXT5_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===RGB_S3TC_DXT1_Format)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT1_Format)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT3_Format)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===RGBA_S3TC_DXT5_Format)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===RGB_PVRTC_4BPPV1_Format||i===RGB_PVRTC_2BPPV1_Format||i===RGBA_PVRTC_4BPPV1_Format||i===RGBA_PVRTC_2BPPV1_Format)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===RGB_PVRTC_4BPPV1_Format)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===RGB_PVRTC_2BPPV1_Format)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===RGBA_PVRTC_4BPPV1_Format)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===RGBA_PVRTC_2BPPV1_Format)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===RGB_ETC1_Format||i===RGB_ETC2_Format||i===RGBA_ETC2_EAC_Format||i===R11_EAC_Format||i===SIGNED_R11_EAC_Format||i===RG11_EAC_Format||i===SIGNED_RG11_EAC_Format)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===RGB_ETC1_Format||i===RGB_ETC2_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===RGBA_ETC2_EAC_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===R11_EAC_Format)return s.COMPRESSED_R11_EAC;if(i===SIGNED_R11_EAC_Format)return s.COMPRESSED_SIGNED_R11_EAC;if(i===RG11_EAC_Format)return s.COMPRESSED_RG11_EAC;if(i===SIGNED_RG11_EAC_Format)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===RGBA_ASTC_4x4_Format||i===RGBA_ASTC_5x4_Format||i===RGBA_ASTC_5x5_Format||i===RGBA_ASTC_6x5_Format||i===RGBA_ASTC_6x6_Format||i===RGBA_ASTC_8x5_Format||i===RGBA_ASTC_8x6_Format||i===RGBA_ASTC_8x8_Format||i===RGBA_ASTC_10x5_Format||i===RGBA_ASTC_10x6_Format||i===RGBA_ASTC_10x8_Format||i===RGBA_ASTC_10x10_Format||i===RGBA_ASTC_12x10_Format||i===RGBA_ASTC_12x12_Format)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===RGBA_ASTC_4x4_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===RGBA_ASTC_5x4_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===RGBA_ASTC_5x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===RGBA_ASTC_6x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===RGBA_ASTC_6x6_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===RGBA_ASTC_8x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===RGBA_ASTC_8x6_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===RGBA_ASTC_8x8_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===RGBA_ASTC_10x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===RGBA_ASTC_10x6_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===RGBA_ASTC_10x8_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===RGBA_ASTC_10x10_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===RGBA_ASTC_12x10_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===RGBA_ASTC_12x12_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===RGBA_BPTC_Format||i===RGB_BPTC_SIGNED_Format||i===RGB_BPTC_UNSIGNED_Format)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===RGBA_BPTC_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===RGB_BPTC_SIGNED_Format)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===RGB_BPTC_UNSIGNED_Format)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===RED_RGTC1_Format||i===SIGNED_RED_RGTC1_Format||i===RED_GREEN_RGTC2_Format||i===SIGNED_RED_GREEN_RGTC2_Format)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===RED_RGTC1_Format)return s.COMPRESSED_RED_RGTC1_EXT;if(i===SIGNED_RED_RGTC1_Format)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===RED_GREEN_RGTC2_Format)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===SIGNED_RED_GREEN_RGTC2_Format)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===UnsignedInt248Type?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const _occlusion_vertex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_occlusion_fragment=`
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

}`;class WebXRDepthSensing{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ExternalTexture(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ShaderMaterial({vertexShader:_occlusion_vertex,fragmentShader:_occlusion_fragment,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mesh(new PlaneGeometry(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,x=null;const S=typeof XRWebGLBinding<"u",_=new WebXRDepthSensing,g={},T=t.getContextAttributes();let A=null,b=null;const P=[],N=[],D=new Vector2;let z=null;const y=new PerspectiveCamera;y.viewport=new Vector4;const R=new PerspectiveCamera;R.viewport=new Vector4;const U=[y,R],K=new ArrayCamera;let $=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let F=P[ie];return F===void 0&&(F=new WebXRController,P[ie]=F),F.getTargetRaySpace()},this.getControllerGrip=function(ie){let F=P[ie];return F===void 0&&(F=new WebXRController,P[ie]=F),F.getGripSpace()},this.getHand=function(ie){let F=P[ie];return F===void 0&&(F=new WebXRController,P[ie]=F),F.getHandSpace()};function ne(ie){const F=N.indexOf(ie.inputSource);if(F===-1)return;const te=P[F];te!==void 0&&(te.update(ie.inputSource,ie.frame,c||a),te.dispatchEvent({type:ie.type,data:ie.inputSource}))}function X(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",G);for(let ie=0;ie<P.length;ie++){const F=N[ie];F!==null&&(N[ie]=null,P[ie].disconnect(F))}$=null,se=null,_.reset();for(const ie in g)delete g[ie];e.setRenderTarget(A),m=null,d=null,f=null,r=null,b=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&warn("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&warn("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",X),r.addEventListener("inputsourceschange",G),T.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(D),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,oe=null,ae=null;T.depth&&(ae=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=T.stencil?DepthStencilFormat:DepthFormat,oe=T.stencil?UnsignedInt248Type:UnsignedIntType);const Pe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new WebGLRenderTarget(d.textureWidth,d.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new WebGLRenderTarget(m.framebufferWidth,m.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(ie){for(let F=0;F<ie.removed.length;F++){const te=ie.removed[F],oe=N.indexOf(te);oe>=0&&(N[oe]=null,P[oe].disconnect(te))}for(let F=0;F<ie.added.length;F++){const te=ie.added[F];let oe=N.indexOf(te);if(oe===-1){for(let Pe=0;Pe<P.length;Pe++)if(Pe>=N.length){N.push(te),oe=Pe;break}else if(N[Pe]===null){N[Pe]=te,oe=Pe;break}if(oe===-1)break}const ae=P[oe];ae&&ae.connect(te)}}const J=new Vector3,xe=new Vector3;function ge(ie,F,te){J.setFromMatrixPosition(F.matrixWorld),xe.setFromMatrixPosition(te.matrixWorld);const oe=J.distanceTo(xe),ae=F.projectionMatrix.elements,Pe=te.projectionMatrix.elements,w=ae[14]/(ae[10]-1),L=ae[14]/(ae[10]+1),O=(ae[9]+1)/ae[5],Y=(ae[9]-1)/ae[5],q=(ae[8]-1)/ae[0],Q=(Pe[8]+1)/Pe[0],C=w*q,fe=w*Q,le=oe/(-q+Q),re=le*-q;if(F.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(re),ie.translateZ(le),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ae[10]===-1)ie.projectionMatrix.copy(F.projectionMatrix),ie.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const ce=w+le,E=L+le,v=C-re,I=fe+(oe-re),W=O*L/E*ce,ee=Y*L/E*ce;ie.projectionMatrix.makePerspective(v,I,W,ee,ce,E),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function me(ie,F){F===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(F.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let F=ie.near,te=ie.far;_.texture!==null&&(_.depthNear>0&&(F=_.depthNear),_.depthFar>0&&(te=_.depthFar)),K.near=R.near=y.near=F,K.far=R.far=y.far=te,($!==K.near||se!==K.far)&&(r.updateRenderState({depthNear:K.near,depthFar:K.far}),$=K.near,se=K.far),K.layers.mask=ie.layers.mask|6,y.layers.mask=K.layers.mask&3,R.layers.mask=K.layers.mask&5;const oe=ie.parent,ae=K.cameras;me(K,oe);for(let Pe=0;Pe<ae.length;Pe++)me(ae[Pe],oe);ae.length===2?ge(K,y,R):K.projectionMatrix.copy(y.projectionMatrix),Ie(ie,K,oe)};function Ie(ie,F,te){te===null?ie.matrix.copy(F.matrixWorld):(ie.matrix.copy(te.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(F.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(F.projectionMatrix),ie.projectionMatrixInverse.copy(F.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=RAD2DEG*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(K)},this.getCameraTexture=function(ie){return g[ie]};let Be=null;function $e(ie,F){if(u=F.getViewerPose(c||a),x=F,u!==null){const te=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let oe=!1;te.length!==K.cameras.length&&(K.cameras.length=0,oe=!0);for(let L=0;L<te.length;L++){const O=te[L];let Y=null;if(m!==null)Y=m.getViewport(O);else{const Q=f.getViewSubImage(d,O);Y=Q.viewport,L===0&&(e.setRenderTargetTextures(b,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(b))}let q=U[L];q===void 0&&(q=new PerspectiveCamera,q.layers.enable(L),q.viewport=new Vector4,U[L]=q),q.matrix.fromArray(O.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(O.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(Y.x,Y.y,Y.width,Y.height),L===0&&(K.matrix.copy(q.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),oe===!0&&K.cameras.push(q)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const L=f.getDepthInformation(te[0]);L&&L.isValid&&L.texture&&_.init(L,r.renderState)}if(ae&&ae.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let L=0;L<te.length;L++){const O=te[L].camera;if(O){let Y=g[O];Y||(Y=new ExternalTexture,g[O]=Y);const q=f.getCameraImage(O);Y.sourceTexture=q}}}}for(let te=0;te<P.length;te++){const oe=N[te],ae=P[te];oe!==null&&ae!==void 0&&ae.update(oe,F,c||a)}Be&&Be(ie,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),x=null}const He=new WebGLAnimation;He.setAnimationLoop($e),this.setAnimationLoop=function(ie){Be=ie},this.dispose=function(){}}}const _e1=new Euler,_m1=new Matrix4;function WebGLMaterials(n,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function i(_,g){g.color.getRGB(_.fogColor.value,getUnlitUniformColorSpace(n)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function r(_,g,T,A,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(_,g):g.isMeshToonMaterial?(s(_,g),f(_,g)):g.isMeshPhongMaterial?(s(_,g),u(_,g)):g.isMeshStandardMaterial?(s(_,g),d(_,g),g.isMeshPhysicalMaterial&&m(_,g,b)):g.isMeshMatcapMaterial?(s(_,g),x(_,g)):g.isMeshDepthMaterial?s(_,g):g.isMeshDistanceMaterial?(s(_,g),S(_,g)):g.isMeshNormalMaterial?s(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?l(_,g,T,A):g.isSpriteMaterial?c(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===BackSide&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===BackSide&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const T=e.get(g),A=T.envMap,b=T.envMapRotation;A&&(_.envMap.value=A,_e1.copy(b),_e1.x*=-1,_e1.y*=-1,_e1.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(_e1.y*=-1,_e1.z*=-1),_.envMapRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(_e1)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function l(_,g,T,A){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*T,_.scale.value=A*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function c(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function u(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function f(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function d(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function m(_,g,T){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===BackSide&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=T.texture,_.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,g){g.matcap&&(_.matcap.value=g.matcap)}function S(_,g){const T=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(T.matrixWorld),_.nearDistance.value=T.shadow.camera.near,_.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WebGLUniformsGroups(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const b=A.program;i.uniformBlockBinding(T,b)}function c(T,A){let b=r[T.id];b===void 0&&(x(T),b=u(T),r[T.id]=b,T.addEventListener("dispose",_));const P=A.program;i.updateUBOMapping(T,P);const N=e.render.frame;s[T.id]!==N&&(d(T),s[T.id]=N)}function u(T){const A=f();T.__bindingPointIndex=A;const b=n.createBuffer(),P=T.__size,N=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,P,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,b),b}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return error("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const A=r[T.id],b=T.uniforms,P=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let N=0,D=b.length;N<D;N++){const z=Array.isArray(b[N])?b[N]:[b[N]];for(let y=0,R=z.length;y<R;y++){const U=z[y];if(m(U,N,y,P)===!0){const K=U.__offset,$=Array.isArray(U.value)?U.value:[U.value];let se=0;for(let ne=0;ne<$.length;ne++){const X=$[ne],G=S(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,K+se,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,se),se+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,A,b,P){const N=T.value,D=A+"_"+b;if(P[D]===void 0)return typeof N=="number"||typeof N=="boolean"?P[D]=N:P[D]=N.clone(),!0;{const z=P[D];if(typeof N=="number"||typeof N=="boolean"){if(z!==N)return P[D]=N,!0}else if(z.equals(N)===!1)return z.copy(N),!0}return!1}function x(T){const A=T.uniforms;let b=0;const P=16;for(let D=0,z=A.length;D<z;D++){const y=Array.isArray(A[D])?A[D]:[A[D]];for(let R=0,U=y.length;R<U;R++){const K=y[R],$=Array.isArray(K.value)?K.value:[K.value];for(let se=0,ne=$.length;se<ne;se++){const X=$[se],G=S(X),J=b%P,xe=J%G.boundary,ge=J+xe;b+=xe,ge!==0&&P-ge<G.storage&&(b+=P-ge),K.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=b,b+=G.storage}}}const N=b%P;return N>0&&(b+=P-N),T.__size=b,T.__cache={},this}function S(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?warn("WebGLRenderer: Texture samplers can not be part of an uniforms group."):warn("WebGLRenderer: Unsupported uniform value type.",T),A}function _(T){const A=T.target;A.removeEventListener("dispose",_);const b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function g(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:g}}const DATA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let lut=null;function getDFGLUT(){return lut===null&&(lut=new DataTexture(DATA,16,16,RGFormat,HalfFloatType),lut.name="DFG_LUT",lut.minFilter=LinearFilter,lut.magFilter=LinearFilter,lut.wrapS=ClampToEdgeWrapping,lut.wrapT=ClampToEdgeWrapping,lut.generateMipmaps=!1,lut.needsUpdate=!0),lut}class WebGLRenderer{constructor(e={}){const{canvas:t=createCanvasElement(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=UnsignedByteType}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const S=m,_=new Set([RGBAIntegerFormat,RGIntegerFormat,RedIntegerFormat]),g=new Set([UnsignedByteType,UnsignedIntType,UnsignedShortType,UnsignedInt248Type,UnsignedShort4444Type,UnsignedShort5551Type]),T=new Uint32Array(4),A=new Int32Array(4);let b=null,P=null;const N=[],D=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let R=!1;this._outputColorSpace=SRGBColorSpace;let U=0,K=0,$=null,se=-1,ne=null;const X=new Vector4,G=new Vector4;let J=null;const xe=new Color(0);let ge=0,me=t.width,Ie=t.height,Be=1,$e=null,He=null;const ie=new Vector4(0,0,me,Ie),F=new Vector4(0,0,me,Ie);let te=!1;const oe=new Frustum;let ae=!1,Pe=!1;const w=new Matrix4,L=new Vector3,O=new Vector4,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function Q(){return $===null?Be:1}let C=i;function fe(M,V){return t.getContext(M,V)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${REVISION}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),C===null){const V="webgl2";if(C=fe(V,M),C===null)throw fe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw error("WebGLRenderer: "+M.message),M}let le,re,ce,E,v,I,W,ee,H,be,he,Re,Ne,de,Se,Me,Ce,ve,ke,B,Ae,_e,we,pe;function ue(){le=new WebGLExtensions(C),le.init(),_e=new WebGLUtils(C,le),re=new WebGLCapabilities(C,le,e,_e),ce=new WebGLState(C,le),re.reversedDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),E=new WebGLInfo(C),v=new WebGLProperties,I=new WebGLTextures(C,le,ce,v,re,_e,E),W=new WebGLCubeMaps(y),ee=new WebGLCubeUVMaps(y),H=new WebGLAttributes(C),we=new WebGLBindingStates(C,H),be=new WebGLGeometries(C,H,E,we),he=new WebGLObjects(C,be,H,E),ke=new WebGLMorphtargets(C,re,I),Me=new WebGLClipping(v),Re=new WebGLPrograms(y,W,ee,le,re,we,Me),Ne=new WebGLMaterials(y,v),de=new WebGLRenderLists,Se=new WebGLRenderStates(le),ve=new WebGLBackground(y,W,ee,ce,he,x,l),Ce=new WebGLShadowMap(y,he,re),pe=new WebGLUniformsGroups(C,E,re,ce),B=new WebGLBufferRenderer(C,le,E),Ae=new WebGLIndexedBufferRenderer(C,le,E),E.programs=Re.programs,y.capabilities=re,y.extensions=le,y.properties=v,y.renderLists=de,y.shadowMap=Ce,y.state=ce,y.info=E}ue(),S!==UnsignedByteType&&(z=new WebGLOutput(S,t.width,t.height,r,s));const Ee=new WebXRManager(y,C);this.xr=Ee,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=le.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=le.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(M){M!==void 0&&(Be=M,this.setSize(me,Ie,!1))},this.getSize=function(M){return M.set(me,Ie)},this.setSize=function(M,V,Z=!0){if(Ee.isPresenting){warn("WebGLRenderer: Can't change size while VR device is presenting.");return}me=M,Ie=V,t.width=Math.floor(M*Be),t.height=Math.floor(V*Be),Z===!0&&(t.style.width=M+"px",t.style.height=V+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,M,V)},this.getDrawingBufferSize=function(M){return M.set(me*Be,Ie*Be).floor()},this.setDrawingBufferSize=function(M,V,Z){me=M,Ie=V,Be=Z,t.width=Math.floor(M*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,M,V)},this.setEffects=function(M){if(S===UnsignedByteType){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let V=0;V<M.length;V++)if(M[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(X)},this.getViewport=function(M){return M.copy(ie)},this.setViewport=function(M,V,Z,j){M.isVector4?ie.set(M.x,M.y,M.z,M.w):ie.set(M,V,Z,j),ce.viewport(X.copy(ie).multiplyScalar(Be).round())},this.getScissor=function(M){return M.copy(F)},this.setScissor=function(M,V,Z,j){M.isVector4?F.set(M.x,M.y,M.z,M.w):F.set(M,V,Z,j),ce.scissor(G.copy(F).multiplyScalar(Be).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(M){ce.setScissorTest(te=M)},this.setOpaqueSort=function(M){$e=M},this.setTransparentSort=function(M){He=M},this.getClearColor=function(M){return M.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(M=!0,V=!0,Z=!0){let j=0;if(M){let k=!1;if($!==null){const ye=$.texture.format;k=_.has(ye)}if(k){const ye=$.texture.type,Le=g.has(ye),Te=ve.getClearColor(),De=ve.getClearAlpha(),Fe=Te.r,Ve=Te.g,Ue=Te.b;Le?(T[0]=Fe,T[1]=Ve,T[2]=Ue,T[3]=De,C.clearBufferuiv(C.COLOR,0,T)):(A[0]=Fe,A[1]=Ve,A[2]=Ue,A[3]=De,C.clearBufferiv(C.COLOR,0,A))}else j|=C.COLOR_BUFFER_BIT}V&&(j|=C.DEPTH_BUFFER_BIT),Z&&(j|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),ve.dispose(),de.dispose(),Se.dispose(),v.dispose(),W.dispose(),ee.dispose(),he.dispose(),we.dispose(),pe.dispose(),Re.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",vt),Ee.removeEventListener("sessionend",St),ct.stop()};function Ge(M){M.preventDefault(),log("WebGLRenderer: Context Lost."),R=!0}function Ke(){log("WebGLRenderer: Context Restored."),R=!1;const M=E.autoReset,V=Ce.enabled,Z=Ce.autoUpdate,j=Ce.needsUpdate,k=Ce.type;ue(),E.autoReset=M,Ce.enabled=V,Ce.autoUpdate=Z,Ce.needsUpdate=j,Ce.type=k}function Xe(M){error("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ot(M){const V=M.target;V.removeEventListener("dispose",ot),lt(V)}function lt(M){Rt(M),v.remove(M)}function Rt(M){const V=v.get(M).programs;V!==void 0&&(V.forEach(function(Z){Re.releaseProgram(Z)}),M.isShaderMaterial&&Re.releaseShaderCache(M))}this.renderBufferDirect=function(M,V,Z,j,k,ye){V===null&&(V=Y);const Le=k.isMesh&&k.matrixWorld.determinant()<0,Te=wt(M,V,Z,j,k);ce.setMaterial(j,Le);let De=Z.index,Fe=1;if(j.wireframe===!0){if(De=be.getWireframeAttribute(Z),De===void 0)return;Fe=2}const Ve=Z.drawRange,Ue=Z.attributes.position;let ze=Ve.start*Fe,je=(Ve.start+Ve.count)*Fe;ye!==null&&(ze=Math.max(ze,ye.start*Fe),je=Math.min(je,(ye.start+ye.count)*Fe)),De!==null?(ze=Math.max(ze,0),je=Math.min(je,De.count)):Ue!=null&&(ze=Math.max(ze,0),je=Math.min(je,Ue.count));const Ze=je-ze;if(Ze<0||Ze===1/0)return;we.setup(k,j,Te,Z,De);let Qe,Ye=B;if(De!==null&&(Qe=H.get(De),Ye=Ae,Ye.setIndex(Qe)),k.isMesh)j.wireframe===!0?(ce.setLineWidth(j.wireframeLinewidth*Q()),Ye.setMode(C.LINES)):Ye.setMode(C.TRIANGLES);else if(k.isLine){let Oe=j.linewidth;Oe===void 0&&(Oe=1),ce.setLineWidth(Oe*Q()),k.isLineSegments?Ye.setMode(C.LINES):k.isLineLoop?Ye.setMode(C.LINE_LOOP):Ye.setMode(C.LINE_STRIP)}else k.isPoints?Ye.setMode(C.POINTS):k.isSprite&&Ye.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)warnOnce("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ye.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))Ye.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Oe=k._multiDrawStarts,qe=k._multiDrawCounts,We=k._multiDrawCount,rt=De?H.get(De).bytesPerElement:1,ft=v.get(j).currentProgram.getUniforms();for(let st=0;st<We;st++)ft.setValue(C,"_gl_DrawID",st),Ye.render(Oe[st]/rt,qe[st])}else if(k.isInstancedMesh)Ye.renderInstances(ze,Ze,k.count);else if(Z.isInstancedBufferGeometry){const Oe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,qe=Math.min(Z.instanceCount,Oe);Ye.renderInstances(ze,Ze,qe)}else Ye.render(ze,Ze)};function xt(M,V,Z){M.transparent===!0&&M.side===DoubleSide&&M.forceSinglePass===!1?(M.side=BackSide,M.needsUpdate=!0,pt(M,V,Z),M.side=FrontSide,M.needsUpdate=!0,pt(M,V,Z),M.side=DoubleSide):pt(M,V,Z)}this.compile=function(M,V,Z=null){Z===null&&(Z=M),P=Se.get(Z),P.init(V),D.push(P),Z.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(P.pushLight(k),k.castShadow&&P.pushShadow(k))}),M!==Z&&M.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(P.pushLight(k),k.castShadow&&P.pushShadow(k))}),P.setupLights();const j=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ye=k.material;if(ye)if(Array.isArray(ye))for(let Le=0;Le<ye.length;Le++){const Te=ye[Le];xt(Te,Z,k),j.add(Te)}else xt(ye,Z,k),j.add(ye)}),P=D.pop(),j},this.compileAsync=function(M,V,Z=null){const j=this.compile(M,V,Z);return new Promise(k=>{function ye(){if(j.forEach(function(Le){v.get(Le).currentProgram.isReady()&&j.delete(Le)}),j.size===0){k(M);return}setTimeout(ye,10)}le.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let mt=null;function Ct(M){mt&&mt(M)}function vt(){ct.stop()}function St(){ct.start()}const ct=new WebGLAnimation;ct.setAnimationLoop(Ct),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(M){mt=M,Ee.setAnimationLoop(M),M===null?ct.stop():ct.start()},Ee.addEventListener("sessionstart",vt),Ee.addEventListener("sessionend",St),this.render=function(M,V){if(V!==void 0&&V.isCamera!==!0){error("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const Z=Ee.enabled===!0&&Ee.isPresenting===!0,j=z!==null&&($===null||Z)&&z.begin(y,$);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(V),V=Ee.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,V,$),P=Se.get(M,D.length),P.init(V),D.push(P),w.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),oe.setFromProjectionMatrix(w,WebGLCoordinateSystem,V.reversedDepth),Pe=this.localClippingEnabled,ae=Me.init(this.clippingPlanes,Pe),b=de.get(M,N.length),b.init(),N.push(b),Ee.enabled===!0&&Ee.isPresenting===!0){const Le=y.xr.getDepthSensingMesh();Le!==null&&gt(Le,V,-1/0,y.sortObjects)}gt(M,V,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort($e,He),q=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,q&&ve.addToRenderList(b,M),this.info.render.frame++,ae===!0&&Me.beginShadows();const k=P.state.shadowsArray;if(Ce.render(k,M,V),ae===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&z.hasRenderPass())===!1){const Le=b.opaque,Te=b.transmissive;if(P.setupLights(),V.isArrayCamera){const De=V.cameras;if(Te.length>0)for(let Fe=0,Ve=De.length;Fe<Ve;Fe++){const Ue=De[Fe];Mt(Le,Te,M,Ue)}q&&ve.render(M);for(let Fe=0,Ve=De.length;Fe<Ve;Fe++){const Ue=De[Fe];Et(b,M,Ue,Ue.viewport)}}else Te.length>0&&Mt(Le,Te,M,V),q&&ve.render(M),Et(b,M,V)}$!==null&&K===0&&(I.updateMultisampleRenderTarget($),I.updateRenderTargetMipmap($)),j&&z.end(y),M.isScene===!0&&M.onAfterRender(y,M,V),we.resetDefaultState(),se=-1,ne=null,D.pop(),D.length>0?(P=D[D.length-1],ae===!0&&Me.setGlobalState(y.clippingPlanes,P.state.camera)):P=null,N.pop(),N.length>0?b=N[N.length-1]:b=null};function gt(M,V,Z,j){if(M.visible===!1)return;if(M.layers.test(V.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(V);else if(M.isLight)P.pushLight(M),M.castShadow&&P.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||oe.intersectsSprite(M)){j&&O.setFromMatrixPosition(M.matrixWorld).applyMatrix4(w);const Le=he.update(M),Te=M.material;Te.visible&&b.push(M,Le,Te,Z,O.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||oe.intersectsObject(M))){const Le=he.update(M),Te=M.material;if(j&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),O.copy(M.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),O.copy(Le.boundingSphere.center)),O.applyMatrix4(M.matrixWorld).applyMatrix4(w)),Array.isArray(Te)){const De=Le.groups;for(let Fe=0,Ve=De.length;Fe<Ve;Fe++){const Ue=De[Fe],ze=Te[Ue.materialIndex];ze&&ze.visible&&b.push(M,Le,ze,Z,O.z,Ue)}}else Te.visible&&b.push(M,Le,Te,Z,O.z,null)}}const ye=M.children;for(let Le=0,Te=ye.length;Le<Te;Le++)gt(ye[Le],V,Z,j)}function Et(M,V,Z,j){const{opaque:k,transmissive:ye,transparent:Le}=M;P.setupLightsView(Z),ae===!0&&Me.setGlobalState(y.clippingPlanes,Z),j&&ce.viewport(X.copy(j)),k.length>0&&ht(k,V,Z),ye.length>0&&ht(ye,V,Z),Le.length>0&&ht(Le,V,Z),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Mt(M,V,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[j.id]===void 0){const ze=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[j.id]=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:ze?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:re.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ColorManagement.workingColorSpace})}const ye=P.state.transmissionRenderTarget[j.id],Le=j.viewport||X;ye.setSize(Le.z*y.transmissionResolutionScale,Le.w*y.transmissionResolutionScale);const Te=y.getRenderTarget(),De=y.getActiveCubeFace(),Fe=y.getActiveMipmapLevel();y.setRenderTarget(ye),y.getClearColor(xe),ge=y.getClearAlpha(),ge<1&&y.setClearColor(16777215,.5),y.clear(),q&&ve.render(Z);const Ve=y.toneMapping;y.toneMapping=NoToneMapping;const Ue=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),P.setupLightsView(j),ae===!0&&Me.setGlobalState(y.clippingPlanes,j),ht(M,Z,j),I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye),le.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let je=0,Ze=V.length;je<Ze;je++){const Qe=V[je],{object:Ye,geometry:Oe,material:qe,group:We}=Qe;if(qe.side===DoubleSide&&Ye.layers.test(j.layers)){const rt=qe.side;qe.side=BackSide,qe.needsUpdate=!0,yt(Ye,Z,j,Oe,qe,We),qe.side=rt,qe.needsUpdate=!0,ze=!0}}ze===!0&&(I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye))}y.setRenderTarget(Te,De,Fe),y.setClearColor(xe,ge),Ue!==void 0&&(j.viewport=Ue),y.toneMapping=Ve}function ht(M,V,Z){const j=V.isScene===!0?V.overrideMaterial:null;for(let k=0,ye=M.length;k<ye;k++){const Le=M[k],{object:Te,geometry:De,group:Fe}=Le;let Ve=Le.material;Ve.allowOverride===!0&&j!==null&&(Ve=j),Te.layers.test(Z.layers)&&yt(Te,V,Z,De,Ve,Fe)}}function yt(M,V,Z,j,k,ye){M.onBeforeRender(y,V,Z,j,k,ye),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(y,V,Z,j,M,ye),k.transparent===!0&&k.side===DoubleSide&&k.forceSinglePass===!1?(k.side=BackSide,k.needsUpdate=!0,y.renderBufferDirect(Z,V,j,k,M,ye),k.side=FrontSide,k.needsUpdate=!0,y.renderBufferDirect(Z,V,j,k,M,ye),k.side=DoubleSide):y.renderBufferDirect(Z,V,j,k,M,ye),M.onAfterRender(y,V,Z,j,k,ye)}function pt(M,V,Z){V.isScene!==!0&&(V=Y);const j=v.get(M),k=P.state.lights,ye=P.state.shadowsArray,Le=k.state.version,Te=Re.getParameters(M,k.state,ye,V,Z),De=Re.getProgramCacheKey(Te);let Fe=j.programs;j.environment=M.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(M.isMeshStandardMaterial?ee:W).get(M.envMap||j.environment),j.envMapRotation=j.environment!==null&&M.envMap===null?V.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",ot),Fe=new Map,j.programs=Fe);let Ve=Fe.get(De);if(Ve!==void 0){if(j.currentProgram===Ve&&j.lightsStateVersion===Le)return Tt(M,Te),Ve}else Te.uniforms=Re.getUniforms(M),M.onBeforeCompile(Te,y),Ve=Re.acquireProgram(Te,De),Fe.set(De,Ve),j.uniforms=Te.uniforms;const Ue=j.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=Me.uniform),Tt(M,Te),j.needsLights=Lt(M),j.lightsStateVersion=Le,j.needsLights&&(Ue.ambientLightColor.value=k.state.ambient,Ue.lightProbe.value=k.state.probe,Ue.directionalLights.value=k.state.directional,Ue.directionalLightShadows.value=k.state.directionalShadow,Ue.spotLights.value=k.state.spot,Ue.spotLightShadows.value=k.state.spotShadow,Ue.rectAreaLights.value=k.state.rectArea,Ue.ltc_1.value=k.state.rectAreaLTC1,Ue.ltc_2.value=k.state.rectAreaLTC2,Ue.pointLights.value=k.state.point,Ue.pointLightShadows.value=k.state.pointShadow,Ue.hemisphereLights.value=k.state.hemi,Ue.directionalShadowMap.value=k.state.directionalShadowMap,Ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ue.spotShadowMap.value=k.state.spotShadowMap,Ue.spotLightMatrix.value=k.state.spotLightMatrix,Ue.spotLightMap.value=k.state.spotLightMap,Ue.pointShadowMap.value=k.state.pointShadowMap,Ue.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Ve,j.uniformsList=null,Ve}function bt(M){if(M.uniformsList===null){const V=M.currentProgram.getUniforms();M.uniformsList=WebGLUniforms.seqWithValue(V.seq,M.uniforms)}return M.uniformsList}function Tt(M,V){const Z=v.get(M);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function wt(M,V,Z,j,k){V.isScene!==!0&&(V=Y),I.resetTextureUnits();const ye=V.fog,Le=j.isMeshStandardMaterial?V.environment:null,Te=$===null?y.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:LinearSRGBColorSpace,De=(j.isMeshStandardMaterial?ee:W).get(j.envMap||Le),Fe=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ue=!!Z.morphAttributes.position,ze=!!Z.morphAttributes.normal,je=!!Z.morphAttributes.color;let Ze=NoToneMapping;j.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ze=y.toneMapping);const Qe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ye=Qe!==void 0?Qe.length:0,Oe=v.get(j),qe=P.state.lights;if(ae===!0&&(Pe===!0||M!==ne)){const et=M===ne&&j.id===se;Me.setState(j,M,et)}let We=!1;j.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==qe.state.version||Oe.outputColorSpace!==Te||k.isBatchedMesh&&Oe.batching===!1||!k.isBatchedMesh&&Oe.batching===!0||k.isBatchedMesh&&Oe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Oe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Oe.instancing===!1||!k.isInstancedMesh&&Oe.instancing===!0||k.isSkinnedMesh&&Oe.skinning===!1||!k.isSkinnedMesh&&Oe.skinning===!0||k.isInstancedMesh&&Oe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Oe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Oe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Oe.instancingMorph===!1&&k.morphTexture!==null||Oe.envMap!==De||j.fog===!0&&Oe.fog!==ye||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Me.numPlanes||Oe.numIntersection!==Me.numIntersection)||Oe.vertexAlphas!==Fe||Oe.vertexTangents!==Ve||Oe.morphTargets!==Ue||Oe.morphNormals!==ze||Oe.morphColors!==je||Oe.toneMapping!==Ze||Oe.morphTargetsCount!==Ye)&&(We=!0):(We=!0,Oe.__version=j.version);let rt=Oe.currentProgram;We===!0&&(rt=pt(j,V,k));let ft=!1,st=!1,dt=!1;const Je=rt.getUniforms(),nt=Oe.uniforms;if(ce.useProgram(rt.program)&&(ft=!0,st=!0,dt=!0),j.id!==se&&(se=j.id,st=!0),ft||ne!==M){ce.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Je.setValue(C,"projectionMatrix",M.projectionMatrix),Je.setValue(C,"viewMatrix",M.matrixWorldInverse);const it=Je.map.cameraPosition;it!==void 0&&it.setValue(C,L.setFromMatrixPosition(M.matrixWorld)),re.logarithmicDepthBuffer&&Je.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Je.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),ne!==M&&(ne=M,st=!0,dt=!0)}if(Oe.needsLights&&(qe.state.directionalShadowMap.length>0&&Je.setValue(C,"directionalShadowMap",qe.state.directionalShadowMap,I),qe.state.spotShadowMap.length>0&&Je.setValue(C,"spotShadowMap",qe.state.spotShadowMap,I),qe.state.pointShadowMap.length>0&&Je.setValue(C,"pointShadowMap",qe.state.pointShadowMap,I)),k.isSkinnedMesh){Je.setOptional(C,k,"bindMatrix"),Je.setOptional(C,k,"bindMatrixInverse");const et=k.skeleton;et&&(et.boneTexture===null&&et.computeBoneTexture(),Je.setValue(C,"boneTexture",et.boneTexture,I))}k.isBatchedMesh&&(Je.setOptional(C,k,"batchingTexture"),Je.setValue(C,"batchingTexture",k._matricesTexture,I),Je.setOptional(C,k,"batchingIdTexture"),Je.setValue(C,"batchingIdTexture",k._indirectTexture,I),Je.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&Je.setValue(C,"batchingColorTexture",k._colorsTexture,I));const at=Z.morphAttributes;if((at.position!==void 0||at.normal!==void 0||at.color!==void 0)&&ke.update(k,Z,rt),(st||Oe.receiveShadow!==k.receiveShadow)&&(Oe.receiveShadow=k.receiveShadow,Je.setValue(C,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(nt.envMap.value=De,nt.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(nt.envMapIntensity.value=V.environmentIntensity),nt.dfgLUT!==void 0&&(nt.dfgLUT.value=getDFGLUT()),st&&(Je.setValue(C,"toneMappingExposure",y.toneMappingExposure),Oe.needsLights&&Pt(nt,dt),ye&&j.fog===!0&&Ne.refreshFogUniforms(nt,ye),Ne.refreshMaterialUniforms(nt,j,Be,Ie,P.state.transmissionRenderTarget[M.id]),WebGLUniforms.upload(C,bt(Oe),nt,I)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(C,bt(Oe),nt,I),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Je.setValue(C,"center",k.center),Je.setValue(C,"modelViewMatrix",k.modelViewMatrix),Je.setValue(C,"normalMatrix",k.normalMatrix),Je.setValue(C,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const et=j.uniformsGroups;for(let it=0,_t=et.length;it<_t;it++){const ut=et[it];pe.update(ut,rt),pe.bind(ut,rt)}}return rt}function Pt(M,V){M.ambientLightColor.needsUpdate=V,M.lightProbe.needsUpdate=V,M.directionalLights.needsUpdate=V,M.directionalLightShadows.needsUpdate=V,M.pointLights.needsUpdate=V,M.pointLightShadows.needsUpdate=V,M.spotLights.needsUpdate=V,M.spotLightShadows.needsUpdate=V,M.rectAreaLights.needsUpdate=V,M.hemisphereLights.needsUpdate=V}function Lt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(M,V,Z){const j=v.get(M);j.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),v.get(M.texture).__webglTexture=V,v.get(M.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Z,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,V){const Z=v.get(M);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0};const Dt=C.createFramebuffer();this.setRenderTarget=function(M,V=0,Z=0){$=M,U=V,K=Z;let j=null,k=!1,ye=!1;if(M){const Te=v.get(M);if(Te.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(C.FRAMEBUFFER,Te.__webglFramebuffer),X.copy(M.viewport),G.copy(M.scissor),J=M.scissorTest,ce.viewport(X),ce.scissor(G),ce.setScissorTest(J),se=-1;return}else if(Te.__webglFramebuffer===void 0)I.setupRenderTarget(M);else if(Te.__hasExternalTextures)I.rebindTextures(M,v.get(M.texture).__webglTexture,v.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ve=M.depthTexture;if(Te.__boundDepthTexture!==Ve){if(Ve!==null&&v.has(Ve)&&(M.width!==Ve.image.width||M.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(M)}}const De=M.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ye=!0);const Fe=v.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[V])?j=Fe[V][Z]:j=Fe[V],k=!0):M.samples>0&&I.useMultisampledRTT(M)===!1?j=v.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?j=Fe[Z]:j=Fe,X.copy(M.viewport),G.copy(M.scissor),J=M.scissorTest}else X.copy(ie).multiplyScalar(Be).floor(),G.copy(F).multiplyScalar(Be).floor(),J=te;if(Z!==0&&(j=Dt),ce.bindFramebuffer(C.FRAMEBUFFER,j)&&ce.drawBuffers(M,j),ce.viewport(X),ce.scissor(G),ce.setScissorTest(J),k){const Te=v.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+V,Te.__webglTexture,Z)}else if(ye){const Te=V;for(let De=0;De<M.textures.length;De++){const Fe=v.get(M.textures[De]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+De,Fe.__webglTexture,Z,Te)}}else if(M!==null&&Z!==0){const Te=v.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Te.__webglTexture,Z)}se=-1},this.readRenderTargetPixels=function(M,V,Z,j,k,ye,Le,Te=0){if(!(M&&M.isWebGLRenderTarget)){error("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De){ce.bindFramebuffer(C.FRAMEBUFFER,De);try{const Fe=M.textures[Te],Ve=Fe.format,Ue=Fe.type;if(!re.textureFormatReadable(Ve)){error("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Ue)){error("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=M.width-j&&Z>=0&&Z<=M.height-k&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Te),C.readPixels(V,Z,j,k,_e.convert(Ve),_e.convert(Ue),ye))}finally{const Fe=$!==null?v.get($).__webglFramebuffer:null;ce.bindFramebuffer(C.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(M,V,Z,j,k,ye,Le,Te=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De)if(V>=0&&V<=M.width-j&&Z>=0&&Z<=M.height-k){ce.bindFramebuffer(C.FRAMEBUFFER,De);const Fe=M.textures[Te],Ve=Fe.format,Ue=Fe.type;if(!re.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ze),C.bufferData(C.PIXEL_PACK_BUFFER,ye.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Te),C.readPixels(V,Z,j,k,_e.convert(Ve),_e.convert(Ue),0);const je=$!==null?v.get($).__webglFramebuffer:null;ce.bindFramebuffer(C.FRAMEBUFFER,je);const Ze=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await probeAsync(C,Ze,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ze),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ye),C.deleteBuffer(ze),C.deleteSync(Ze),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,V=null,Z=0){const j=Math.pow(2,-Z),k=Math.floor(M.image.width*j),ye=Math.floor(M.image.height*j),Le=V!==null?V.x:0,Te=V!==null?V.y:0;I.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,Z,0,0,Le,Te,k,ye),ce.unbindTexture()};const It=C.createFramebuffer(),Nt=C.createFramebuffer();this.copyTextureToTexture=function(M,V,Z=null,j=null,k=0,ye=null){ye===null&&(k!==0?(warnOnce("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=k,k=0):ye=0);let Le,Te,De,Fe,Ve,Ue,ze,je,Ze;const Qe=M.isCompressedTexture?M.mipmaps[ye]:M.image;if(Z!==null)Le=Z.max.x-Z.min.x,Te=Z.max.y-Z.min.y,De=Z.isBox3?Z.max.z-Z.min.z:1,Fe=Z.min.x,Ve=Z.min.y,Ue=Z.isBox3?Z.min.z:0;else{const at=Math.pow(2,-k);Le=Math.floor(Qe.width*at),Te=Math.floor(Qe.height*at),M.isDataArrayTexture?De=Qe.depth:M.isData3DTexture?De=Math.floor(Qe.depth*at):De=1,Fe=0,Ve=0,Ue=0}j!==null?(ze=j.x,je=j.y,Ze=j.z):(ze=0,je=0,Ze=0);const Ye=_e.convert(V.format),Oe=_e.convert(V.type);let qe;V.isData3DTexture?(I.setTexture3D(V,0),qe=C.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(I.setTexture2DArray(V,0),qe=C.TEXTURE_2D_ARRAY):(I.setTexture2D(V,0),qe=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,V.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,V.unpackAlignment);const We=C.getParameter(C.UNPACK_ROW_LENGTH),rt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ft=C.getParameter(C.UNPACK_SKIP_PIXELS),st=C.getParameter(C.UNPACK_SKIP_ROWS),dt=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Qe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Qe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ve),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ue);const Je=M.isDataArrayTexture||M.isData3DTexture,nt=V.isDataArrayTexture||V.isData3DTexture;if(M.isDepthTexture){const at=v.get(M),et=v.get(V),it=v.get(at.__renderTarget),_t=v.get(et.__renderTarget);ce.bindFramebuffer(C.READ_FRAMEBUFFER,it.__webglFramebuffer),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ut=0;ut<De;ut++)Je&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,v.get(M).__webglTexture,k,Ue+ut),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,v.get(V).__webglTexture,ye,Ze+ut)),C.blitFramebuffer(Fe,Ve,Le,Te,ze,je,Le,Te,C.DEPTH_BUFFER_BIT,C.NEAREST);ce.bindFramebuffer(C.READ_FRAMEBUFFER,null),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||v.has(M)){const at=v.get(M),et=v.get(V);ce.bindFramebuffer(C.READ_FRAMEBUFFER,It),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,Nt);for(let it=0;it<De;it++)Je?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,at.__webglTexture,k,Ue+it):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,at.__webglTexture,k),nt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,et.__webglTexture,ye,Ze+it):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,et.__webglTexture,ye),k!==0?C.blitFramebuffer(Fe,Ve,Le,Te,ze,je,Le,Te,C.COLOR_BUFFER_BIT,C.NEAREST):nt?C.copyTexSubImage3D(qe,ye,ze,je,Ze+it,Fe,Ve,Le,Te):C.copyTexSubImage2D(qe,ye,ze,je,Fe,Ve,Le,Te);ce.bindFramebuffer(C.READ_FRAMEBUFFER,null),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else nt?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(qe,ye,ze,je,Ze,Le,Te,De,Ye,Oe,Qe.data):V.isCompressedArrayTexture?C.compressedTexSubImage3D(qe,ye,ze,je,Ze,Le,Te,De,Ye,Qe.data):C.texSubImage3D(qe,ye,ze,je,Ze,Le,Te,De,Ye,Oe,Qe):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ye,ze,je,Le,Te,Ye,Oe,Qe.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ye,ze,je,Qe.width,Qe.height,Ye,Qe.data):C.texSubImage2D(C.TEXTURE_2D,ye,ze,je,Le,Te,Ye,Oe,Qe);C.pixelStorei(C.UNPACK_ROW_LENGTH,We),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,rt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,st),C.pixelStorei(C.UNPACK_SKIP_IMAGES,dt),ye===0&&V.generateMipmaps&&C.generateMipmap(qe),ce.unbindTexture()},this.initRenderTarget=function(M){v.get(M).__webglFramebuffer===void 0&&I.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?I.setTextureCube(M,0):M.isData3DTexture?I.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?I.setTexture2DArray(M,0):I.setTexture2D(M,0),ce.unbindTexture()},this.resetState=function(){U=0,K=0,$=null,ce.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ColorManagement._getDrawingBufferColorSpace(e),t.unpackColorSpace=ColorManagement._getUnpackColorSpace()}}const _hoisted_1$2={class:"relative min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center overflow-hidden"},_hoisted_2$1={class:"relative z-10 px-4 sm:px-6 w-full max-w-xl"},_hoisted_3={class:"relative w-full",style:{perspective:"1400px","min-height":"580px"}},_hoisted_4={class:"absolute inset-0 flex",style:{backfaceVisibility:"hidden"}},_hoisted_5={class:"group bg-slate-900/70 border border-slate-700/50 rounded-3xl shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl px-6 sm:px-8 py-7 sm:py-8 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] w-full"},_hoisted_6={class:"flex flex-col items-center gap-4"},_hoisted_7={class:"inline-flex items-baseline gap-2 rounded-2xl bg-slate-900/70 px-5 py-3 border border-slate-700/70 shadow-inner"},_hoisted_8={class:"text-4xl sm:text-5xl font-semibold tabular-nums"},_hoisted_9={class:"absolute inset-0 flex",style:{transform:"rotateY(180deg)",backfaceVisibility:"hidden"}},_hoisted_10={class:"group bg-slate-900/80 border border-sky-500/40 rounded-3xl shadow-[0_24px_80px_rgba(8,47,73,0.9)] backdrop-blur-xl px-6 sm:px-8 py-7 sm:py-8 w-full"},_hoisted_11={class:"flex flex-col items-center gap-4 mt-2"},_hoisted_12={class:"w-full max-w-xs"},_hoisted_13={class:"rounded-2xl bg-slate-950/80 px-4 py-3 border border-slate-700/80 shadow-inner text-right"},_hoisted_14={class:"mt-1 text-2xl sm:text-3xl font-semibold tabular-nums break-all"},_hoisted_15={class:"w-full max-w-xs grid grid-cols-4 gap-2 mt-3 text-sm select-none"},_sfc_main$2={__name:"App",setup(__props){const count=ref(0),threeContainer=ref(null),bgContainer=ref(null),flipAngle=ref(0),increment=()=>{count.value++},reset=()=>{count.value=0},display=ref("0"),clearAll=()=>{display.value="0"},appendDigit=n=>{display.value==="0"||display.value==="Error"?display.value=n:display.value+=n},appendDot=()=>{const n=display.value.split(/[\+\-\×\÷]/);n[n.length-1].includes(".")||(display.value+=".")},appendOperator=n=>{if(display.value==="Error")return;const e=display.value[display.value.length-1];"+-×÷".includes(e)?display.value=display.value.slice(0,-1)+n:display.value+=n},deleteLast=()=>{if(display.value==="Error"){display.value="0";return}display.value.length<=1?display.value="0":display.value=display.value.slice(0,-1)},calculate=()=>{try{const expr=display.value.replace(/×/g,"*").replace(/÷/g,"/"),result=eval(expr);typeof result=="number"&&Number.isFinite(result)?display.value=String(parseFloat(result.toFixed(6))):display.value="Error"}catch{display.value="Error"}};let scene,camera,renderer,cube,cubeAnimationId,bgScene,bgCamera,bgRenderer,bgParticles,bgAnimationId;const mouse={x:0,y:0},createStarTexture=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),i=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.2,"rgba(255,255,255,1)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,64,64);const r=new CanvasTexture(e);return r.needsUpdate=!0,r},onMouseMove=n=>{mouse.x=n.clientX/window.innerWidth*2-1,mouse.y=-(n.clientY/window.innerHeight)*2+1},onWheel=n=>{n.deltaY>0&&flipAngle.value===0?flipAngle.value=180:n.deltaY<0&&flipAngle.value===180&&(flipAngle.value=0)},onResize=()=>{if(threeContainer.value&&camera&&renderer){const n=threeContainer.value.clientWidth,e=threeContainer.value.clientHeight||1;camera.aspect=n/e,camera.updateProjectionMatrix(),renderer.setSize(n,e)}if(bgCamera&&bgRenderer){const n=window.innerWidth,e=window.innerHeight;bgCamera.aspect=n/e,bgCamera.updateProjectionMatrix(),bgRenderer.setSize(n,e)}};return onMounted(()=>{if(!threeContainer.value||!bgContainer.value){console.error("threeContainer/bgContainer null hai");return}scene=new Scene,camera=new PerspectiveCamera(35,threeContainer.value.clientWidth/threeContainer.value.clientHeight,.1,1e3),camera.position.z=3,renderer=new WebGLRenderer({alpha:!0,antialias:!0}),renderer.setPixelRatio(window.devicePixelRatio),renderer.setSize(threeContainer.value.clientWidth,threeContainer.value.clientHeight),threeContainer.value.appendChild(renderer.domElement);const n=new BoxGeometry,e=new MeshStandardMaterial({color:2784155});cube=new Mesh(n,e),scene.add(cube);const t=new DirectionalLight(16777215,1);t.position.set(5,5,5),scene.add(t);const i=()=>{cubeAnimationId=requestAnimationFrame(i),cube.rotation.x+=.02,cube.rotation.y+=.02,renderer.render(scene,camera)};i(),bgScene=new Scene,bgRenderer=new WebGLRenderer({alpha:!0,antialias:!0}),bgRenderer.setPixelRatio(window.devicePixelRatio),bgRenderer.setSize(window.innerWidth,window.innerHeight),bgRenderer.setClearColor(0,1),bgContainer.value.appendChild(bgRenderer.domElement),bgCamera=new PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,1e3),bgCamera.position.z=300,bgScene.fog=new Fog(132631,200,700);const r=1500,s=new Float32Array(r*3),a=new Float32Array(r*3),o=600;for(let d=0;d<r;d++){const m=d*3;s[m]=(Math.random()-.5)*o*2,s[m+1]=(Math.random()-.5)*o*1.5,s[m+2]=(Math.random()-.5)*o*2;const x=new Color,S=.58+Math.random()*.1,_=.4+Math.random()*.4,g=.6+Math.random()*.3;x.setHSL(S,_,g),a[m]=x.r,a[m+1]=x.g,a[m+2]=x.b}const l=new BufferGeometry;l.setAttribute("position",new BufferAttribute(s,3)),l.setAttribute("color",new BufferAttribute(a,3));const c=createStarTexture(),u=new PointsMaterial({map:c,size:8,sizeAttenuation:!0,transparent:!0,vertexColors:!0,depthWrite:!1,blending:AdditiveBlending});bgParticles=new Points(l,u),bgScene.add(bgParticles);const f=()=>{bgAnimationId=requestAnimationFrame(f),bgParticles.rotation.y+=8e-4,bgParticles.rotation.x+=3e-4;const d=mouse.x*30,m=mouse.y*15;bgParticles.position.x+=(d-bgParticles.position.x)*.05,bgParticles.position.y+=(m-bgParticles.position.y)*.05,bgRenderer.render(bgScene,bgCamera)};f(),window.addEventListener("mousemove",onMouseMove),window.addEventListener("resize",onResize),window.addEventListener("wheel",onWheel,{passive:!0})}),onUnmounted(()=>{cancelAnimationFrame(cubeAnimationId),cancelAnimationFrame(bgAnimationId),window.removeEventListener("mousemove",onMouseMove),window.removeEventListener("resize",onResize),window.removeEventListener("wheel",onWheel);const n=(e,t)=>{if(e){try{const i=e.getContext(),r=i&&i.getExtension("WEBGL_lose_context");r&&r.loseContext()}catch(i){console.warn("webgl destroy error",i)}e.dispose(),t&&e.domElement&&t.contains(e.domElement)&&t.removeChild(e.domElement)}};n(renderer,threeContainer.value),n(bgRenderer,bgContainer.value)}),(n,e)=>(openBlock(),createElementBlock("div",_hoisted_1$2,[createBaseVNode("div",{ref_key:"bgContainer",ref:bgContainer,class:"pointer-events-none absolute inset-0 z-0"},null,512),e[20]||(e[20]=createBaseVNode("div",{class:"pointer-events-none absolute inset-0 z-0 opacity-70","aria-hidden":"true"},[createBaseVNode("div",{class:"absolute -top-40 right-10 h-72 w-72 bg-sky-500/40 blur-3xl rounded-full"}),createBaseVNode("div",{class:"absolute bottom-[-6rem] left-[-4rem] h-80 w-80 bg-indigo-500/40 blur-3xl rounded-full"})],-1)),createBaseVNode("div",_hoisted_2$1,[createBaseVNode("div",_hoisted_3,[createBaseVNode("div",{class:"relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-out",style:normalizeStyle({transform:`rotateY(${flipAngle.value}deg)`})},[createBaseVNode("div",_hoisted_4,[createBaseVNode("div",_hoisted_5,[e[16]||(e[16]=createStaticVNode('<div class="flex items-center gap-2 mb-4 text-xs font-medium text-slate-400"><span class="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span><span>Vue + Three.js + Tailwind playground</span></div><div class="mb-6 text-center"><h1 class="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 bg-gradient-to-r from-sky-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent"> Hello Vue Galaxy </h1><p class="text-sm sm:text-base text-slate-300/90"> This counter is powered by Vue reactivity, wrapped in a 3D galaxy background crafted with Three.js. </p></div>',2)),createBaseVNode("div",{ref_key:"threeContainer",ref:threeContainer,class:"w-full h-48 sm:h-56 mb-6 rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-700/70 shadow-inner"},null,512),createBaseVNode("div",_hoisted_6,[createBaseVNode("div",_hoisted_7,[e[14]||(e[14]=createBaseVNode("span",{class:"text-xs uppercase tracking-[0.2em] text-slate-400"}," Count ",-1)),createBaseVNode("span",_hoisted_8,toDisplayString(count.value),1)]),createBaseVNode("div",{class:"flex flex-col sm:flex-row gap-3 w-full max-w-xs"},[createBaseVNode("button",{class:"flex-1 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition-colors duration-150",onClick:increment}," + Increment "),createBaseVNode("button",{class:"flex-1 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-800 text-sm font-semibold text-slate-100 border border-slate-600/70 transition-colors duration-150",onClick:reset}," Reset ")]),e[15]||(e[15]=createBaseVNode("p",{class:"text-xs sm:text-sm text-slate-400 mt-1 text-center"},[createTextVNode(" Scroll "),createBaseVNode("span",{class:"font-semibold text-slate-200"},"down"),createTextVNode(" to open the calculator on the back. ")],-1))])])]),createBaseVNode("div",_hoisted_9,[createBaseVNode("div",_hoisted_10,[e[19]||(e[19]=createStaticVNode('<div class="flex items-center gap-2 mb-4 text-xs font-medium text-sky-300/80"><span class="inline-flex h-2 w-2 rounded-full bg-sky-400 animate-ping"></span><span>Galaxy Calculator • Back of the card</span></div><div class="mb-4 text-center"><h2 class="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 bg-gradient-to-r from-sky-300 via-indigo-300 to-sky-300 bg-clip-text text-transparent"> Galaxy Calculator </h2><p class="text-xs sm:text-sm text-slate-300/90"> calculator built with Vue refs and event handlers. </p></div>',2)),createBaseVNode("div",_hoisted_11,[createBaseVNode("div",_hoisted_12,[createBaseVNode("div",_hoisted_13,[e[17]||(e[17]=createBaseVNode("div",{class:"text-[11px] uppercase tracking-[0.15em] text-slate-500"}," Galaxy Calc ",-1)),createBaseVNode("div",_hoisted_14,toDisplayString(display.value),1)])]),createBaseVNode("div",_hoisted_15,[createBaseVNode("button",{class:"col-span-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-800 border border-slate-600/80 text-slate-100 font-semibold",onClick:clearAll}," C "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-800 border border-slate-600/80 text-slate-100 font-semibold",onClick:deleteLast}," DEL "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-sky-500/90 hover:bg-sky-400 active:bg-sky-500 text-slate-950 font-semibold",onClick:e[0]||(e[0]=t=>appendOperator("÷"))}," ÷ "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:e[1]||(e[1]=t=>appendDigit("7"))}," 7 "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:e[2]||(e[2]=t=>appendDigit("8"))}," 8 "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:e[3]||(e[3]=t=>appendDigit("9"))}," 9 "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-sky-500/90 hover:bg-sky-400 active:bg-sky-500 text-slate-950 font-semibold",onClick:e[4]||(e[4]=t=>appendOperator("×"))}," × "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:e[5]||(e[5]=t=>appendDigit("4"))}," 4 "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:e[6]||(e[6]=t=>appendDigit("5"))}," 5 "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:e[7]||(e[7]=t=>appendDigit("6"))}," 6 "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-sky-500/90 hover:bg-sky-400 active:bg-sky-500 text-slate-950 font-semibold",onClick:e[8]||(e[8]=t=>appendOperator("-"))}," - "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:e[9]||(e[9]=t=>appendDigit("1"))}," 1 "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:e[10]||(e[10]=t=>appendDigit("2"))}," 2 "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:e[11]||(e[11]=t=>appendDigit("3"))}," 3 "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-sky-500/90 hover:bg-sky-400 active:bg-sky-500 text-slate-950 font-semibold",onClick:e[12]||(e[12]=t=>appendOperator("+"))}," + "),createBaseVNode("button",{class:"col-span-2 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:e[13]||(e[13]=t=>appendDigit("0"))}," 0 "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:bg-slate-800 text-slate-100 font-semibold",onClick:appendDot}," . "),createBaseVNode("button",{class:"py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-slate-950 font-semibold shadow-lg shadow-emerald-500/40",onClick:calculate}," = ")]),e[18]||(e[18]=createBaseVNode("p",{class:"text-[11px] sm:text-xs text-slate-400 mt-1 text-center"},[createTextVNode(" Scroll "),createBaseVNode("span",{class:"font-semibold text-slate-200"},"up"),createTextVNode(" to go back to the counter card. ")],-1))])])])],4)])])]))}};const isBrowser=typeof document<"u";function isRouteComponent(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function isESModule(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&isRouteComponent(n.default)}const assign=Object.assign;function applyToParams(n,e){const t={};for(const i in e){const r=e[i];t[i]=isArray$1(r)?r.map(n):n(r)}return t}const noop$1=()=>{},isArray$1=Array.isArray;function mergeOptions(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const HASH_RE=/#/g,AMPERSAND_RE=/&/g,SLASH_RE=/\//g,EQUAL_RE=/=/g,IM_RE=/\?/g,PLUS_RE=/\+/g,ENC_BRACKET_OPEN_RE=/%5B/g,ENC_BRACKET_CLOSE_RE=/%5D/g,ENC_CARET_RE=/%5E/g,ENC_BACKTICK_RE=/%60/g,ENC_CURLY_OPEN_RE=/%7B/g,ENC_PIPE_RE=/%7C/g,ENC_CURLY_CLOSE_RE=/%7D/g,ENC_SPACE_RE=/%20/g;function commonEncode(n){return n==null?"":encodeURI(""+n).replace(ENC_PIPE_RE,"|").replace(ENC_BRACKET_OPEN_RE,"[").replace(ENC_BRACKET_CLOSE_RE,"]")}function encodeHash(n){return commonEncode(n).replace(ENC_CURLY_OPEN_RE,"{").replace(ENC_CURLY_CLOSE_RE,"}").replace(ENC_CARET_RE,"^")}function encodeQueryValue(n){return commonEncode(n).replace(PLUS_RE,"%2B").replace(ENC_SPACE_RE,"+").replace(HASH_RE,"%23").replace(AMPERSAND_RE,"%26").replace(ENC_BACKTICK_RE,"`").replace(ENC_CURLY_OPEN_RE,"{").replace(ENC_CURLY_CLOSE_RE,"}").replace(ENC_CARET_RE,"^")}function encodeQueryKey(n){return encodeQueryValue(n).replace(EQUAL_RE,"%3D")}function encodePath(n){return commonEncode(n).replace(HASH_RE,"%23").replace(IM_RE,"%3F")}function encodeParam(n){return encodePath(n).replace(SLASH_RE,"%2F")}function decode(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const TRAILING_SLASH_RE=/\/$/,removeTrailingSlash=n=>n.replace(TRAILING_SLASH_RE,"");function parseURL(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=n(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=resolveRelativePath(i??e,t),{fullPath:i+s+a,path:i,query:r,hash:decode(a)}}function stringifyURL(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function stripBase(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function isSameRouteLocation(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&isSameRouteRecord(e.matched[i],t.matched[r])&&isSameRouteLocationParams(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function isSameRouteRecord(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function isSameRouteLocationParams(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!isSameRouteLocationParamsValue(n[t],e[t]))return!1;return!0}function isSameRouteLocationParamsValue(n,e){return isArray$1(n)?isEquivalentArray(n,e):isArray$1(e)?isEquivalentArray(e,n):n?.valueOf()===e?.valueOf()}function isEquivalentArray(n,e){return isArray$1(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function resolveRelativePath(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const START_LOCATION_NORMALIZED={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let NavigationType=(function(n){return n.pop="pop",n.push="push",n})({}),NavigationDirection=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function normalizeBase(n){if(!n)if(isBrowser){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),removeTrailingSlash(n)}const BEFORE_HASH_RE=/^[^#]+#/;function createHref(n,e){return n.replace(BEFORE_HASH_RE,"#")+e}function getElementPosition(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const computeScrollPosition=()=>({left:window.scrollX,top:window.scrollY});function scrollToPosition(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=getElementPosition(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function getScrollKey(n,e){return(history.state?history.state.position-e:-1)+n}const scrollPositions=new Map;function saveScrollPosition(n,e){scrollPositions.set(n,e)}function getSavedScrollPosition(n){const e=scrollPositions.get(n);return scrollPositions.delete(n),e}function isRouteLocation(n){return typeof n=="string"||n&&typeof n=="object"}function isRouteName(n){return typeof n=="string"||typeof n=="symbol"}let ErrorTypes=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const NavigationFailureSymbol=Symbol("");ErrorTypes.MATCHER_NOT_FOUND+"",ErrorTypes.NAVIGATION_GUARD_REDIRECT+"",ErrorTypes.NAVIGATION_ABORTED+"",ErrorTypes.NAVIGATION_CANCELLED+"",ErrorTypes.NAVIGATION_DUPLICATED+"";function createRouterError(n,e){return assign(new Error,{type:n,[NavigationFailureSymbol]:!0},e)}function isNavigationFailure(n,e){return n instanceof Error&&NavigationFailureSymbol in n&&(e==null||!!(n.type&e))}const propertiesToLog=["params","query","hash"];function stringifyRoute(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of propertiesToLog)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function parseQuery(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(PLUS_RE," "),s=r.indexOf("="),a=decode(s<0?r:r.slice(0,s)),o=s<0?null:decode(r.slice(s+1));if(a in e){let l=e[a];isArray$1(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function stringifyQuery(n){let e="";for(let t in n){const i=n[t];if(t=encodeQueryKey(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(isArray$1(i)?i.map(r=>r&&encodeQueryValue(r)):[i&&encodeQueryValue(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function normalizeQuery(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=isArray$1(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const matchedRouteKey=Symbol(""),viewDepthKey=Symbol(""),routerKey=Symbol(""),routeLocationKey=Symbol(""),routerViewLocationKey=Symbol("");function useCallbacks(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function guardToPromiseFn(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l(createRouterError(ErrorTypes.NAVIGATION_ABORTED,{from:t,to:e})):d instanceof Error?l(d):isRouteLocation(d)?l(createRouterError(ErrorTypes.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(a&&i.enterCallbacks[r]===a&&typeof d=="function"&&a.push(d),o())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function extractComponentsGuards(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(isRouteComponent(l)){const c=(l.__vccOpts||l)[e];c&&s.push(guardToPromiseFn(c,t,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=isESModule(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const d=(f.__vccOpts||f)[e];return d&&guardToPromiseFn(d,t,i,a,o,r)()}))}}return s}function extractChangingRecords(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>isSameRouteRecord(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>isSameRouteRecord(c,l))||r.push(l))}return[t,i,r]}let createBaseLocation=()=>location.protocol+"//"+location.host;function createCurrentLocation(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),stripBase(o,"")}return stripBase(t,n)+i+r}function useHistoryListeners(n,e,t,i){let r=[],s=[],a=null;const o=({state:d})=>{const m=createCurrentLocation(n,location),x=t.value,S=e.value;let _=0;if(d){if(t.value=m,e.value=d,a&&a===x){a=null;return}_=S?d.position-S.position:0}else i(m);r.forEach(g=>{g(t.value,x,{delta:_,type:NavigationType.pop,direction:_?_>0?NavigationDirection.forward:NavigationDirection.back:NavigationDirection.unknown})})};function l(){a=t.value}function c(d){r.push(d);const m=()=>{const x=r.indexOf(d);x>-1&&r.splice(x,1)};return s.push(m),m}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(assign({},d.state,{scroll:computeScrollPosition()}),"")}}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function buildState(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?computeScrollPosition():null}}function useHistoryStateNavigation(n){const{history:e,location:t}=window,i={value:createCurrentLocation(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:createBaseLocation()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](d)}}function a(l,c){s(l,assign({},e.state,buildState(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function o(l,c){const u=assign({},r.value,e.state,{forward:l,scroll:computeScrollPosition()});s(u.current,u,!0),s(l,assign({},buildState(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function createWebHistory(n){n=normalizeBase(n);const e=useHistoryStateNavigation(n),t=useHistoryListeners(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=assign({location:"",base:n,go:i,createHref:createHref.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let TokenType=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var TokenizerState=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(TokenizerState||{});const ROOT_TOKEN={type:TokenType.Static,value:""},VALID_PARAM_RE=/[a-zA-Z0-9_]/;function tokenizePath(n){if(!n)return[[]];if(n==="/")return[[ROOT_TOKEN]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=TokenizerState.Static,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===TokenizerState.Static?s.push({type:TokenType.Static,value:c}):t===TokenizerState.Param||t===TokenizerState.ParamRegExp||t===TokenizerState.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:TokenType.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==TokenizerState.ParamRegExp){i=t,t=TokenizerState.EscapeNext;continue}switch(t){case TokenizerState.Static:l==="/"?(c&&f(),a()):l===":"?(f(),t=TokenizerState.Param):d();break;case TokenizerState.EscapeNext:d(),t=i;break;case TokenizerState.Param:l==="("?t=TokenizerState.ParamRegExp:VALID_PARAM_RE.test(l)?d():(f(),t=TokenizerState.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case TokenizerState.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=TokenizerState.ParamRegExpEnd:u+=l;break;case TokenizerState.ParamRegExpEnd:f(),t=TokenizerState.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===TokenizerState.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}const BASE_PARAM_PATTERN="[^/]+?",BASE_PATH_PARSER_OPTIONS={sensitive:!1,strict:!1,start:!0,end:!0};var PathScore=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(PathScore||{});const REGEX_CHARS_RE=/[.+*?^${}()[\]/\\]/g;function tokensToParser(n,e){const t=assign({},BASE_PATH_PARSER_OPTIONS,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[PathScore.Root];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let m=PathScore.Segment+(t.sensitive?PathScore.BonusCaseSensitive:0);if(d.type===TokenType.Static)f||(r+="/"),r+=d.value.replace(REGEX_CHARS_RE,"\\$&"),m+=PathScore.Static;else if(d.type===TokenType.Param){const{value:x,repeatable:S,optional:_,regexp:g}=d;s.push({name:x,repeatable:S,optional:_});const T=g||BASE_PARAM_PATTERN;if(T!==BASE_PARAM_PATTERN){m+=PathScore.BonusCustomRegExp;try{`${T}`}catch(b){throw new Error(`Invalid custom RegExp for param "${x}" (${T}): `+b.message)}}let A=S?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;f||(A=_&&c.length<2?`(?:/${A})`:"/"+A),_&&(A+="?"),r+=A,m+=PathScore.Dynamic,_&&(m+=PathScore.BonusOptional),S&&(m+=PathScore.BonusRepeatable),T===".*"&&(m+=PathScore.BonusWildcard)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=PathScore.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",x=s[d-1];f[x.name]=m&&x.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===TokenType.Static)u+=m.value;else if(m.type===TokenType.Param){const{value:x,repeatable:S,optional:_}=m,g=x in c?c[x]:"";if(isArray$1(g)&&!S)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const T=isArray$1(g)?g.join("/"):g;if(!T)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${x}"`);u+=T}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function compareScoreArray(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===PathScore.Static+PathScore.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===PathScore.Static+PathScore.Segment?1:-1:0}function comparePathParserScore(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=compareScoreArray(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(isLastScoreNegative(i))return 1;if(isLastScoreNegative(r))return-1}return r.length-i.length}function isLastScoreNegative(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const PATH_PARSER_OPTIONS_DEFAULTS={strict:!1,end:!0,sensitive:!1};function createRouteRecordMatcher(n,e,t){const i=tokensToParser(tokenizePath(n.path),t),r=assign(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function createRouterMatcher(n,e){const t=[],i=new Map;e=mergeOptions(PATH_PARSER_OPTIONS_DEFAULTS,e);function r(f){return i.get(f)}function s(f,d,m){const x=!m,S=normalizeRouteRecord(f);S.aliasOf=m&&m.record;const _=mergeOptions(e,f),g=[S];if("alias"in f){const b=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of b)g.push(normalizeRouteRecord(assign({},S,{components:m?m.record.components:S.components,path:P,aliasOf:m?m.record:S})))}let T,A;for(const b of g){const{path:P}=b;if(d&&P[0]!=="/"){const N=d.record.path,D=N[N.length-1]==="/"?"":"/";b.path=d.record.path+(P&&D+P)}if(T=createRouteRecordMatcher(b,d,_),m?m.alias.push(T):(A=A||T,A!==T&&A.alias.push(T),x&&f.name&&!isAliasRecord(T)&&a(f.name)),isMatchable(T)&&l(T),S.children){const N=S.children;for(let D=0;D<N.length;D++)s(N[D],T,m&&m.children[D])}m=m||T}return A?()=>{a(A)}:noop$1}function a(f){if(isRouteName(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const d=findInsertionIndex(f,t);t.splice(d,0,f),f.record.name&&!isAliasRecord(f)&&i.set(f.record.name,f)}function c(f,d){let m,x={},S,_;if("name"in f&&f.name){if(m=i.get(f.name),!m)throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND,{location:f});_=m.record.name,x=assign(pickParams(d.params,m.keys.filter(A=>!A.optional).concat(m.parent?m.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),f.params&&pickParams(f.params,m.keys.map(A=>A.name))),S=m.stringify(x)}else if(f.path!=null)S=f.path,m=t.find(A=>A.re.test(S)),m&&(x=m.parse(S),_=m.record.name);else{if(m=d.name?i.get(d.name):t.find(A=>A.re.test(d.path)),!m)throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND,{location:f,currentLocation:d});_=m.record.name,x=assign({},d.params,f.params),S=m.stringify(x)}const g=[];let T=m;for(;T;)g.unshift(T.record),T=T.parent;return{name:_,path:S,params:x,matched:g,meta:mergeMetaFields(g)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function pickParams(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function normalizeRouteRecord(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:normalizeRecordProps(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function normalizeRecordProps(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function isAliasRecord(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function mergeMetaFields(n){return n.reduce((e,t)=>assign(e,t.meta),{})}function findInsertionIndex(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;comparePathParserScore(n,e[s])<0?i=s:t=s+1}const r=getInsertionAncestor(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function getInsertionAncestor(n){let e=n;for(;e=e.parent;)if(isMatchable(e)&&comparePathParserScore(n,e)===0)return e}function isMatchable({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function useLink(n){const e=inject(routerKey),t=inject(routeLocationKey),i=computed(()=>{const l=unref(n.to);return e.resolve(l)}),r=computed(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(isSameRouteRecord.bind(null,u));if(d>-1)return d;const m=getOriginalPath(l[c-2]);return c>1&&getOriginalPath(u)===m&&f[f.length-1].path!==m?f.findIndex(isSameRouteRecord.bind(null,l[c-2])):d}),s=computed(()=>r.value>-1&&includesParams(t.params,i.value.params)),a=computed(()=>r.value>-1&&r.value===t.matched.length-1&&isSameRouteLocationParams(t.params,i.value.params));function o(l={}){if(guardEvent(l)){const c=e[unref(n.replace)?"replace":"push"](unref(n.to)).catch(noop$1);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:computed(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function preferSingleVNode(n){return n.length===1?n[0]:n}const RouterLinkImpl=defineComponent({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink,setup(n,{slots:e}){const t=reactive(useLink(n)),{options:i}=inject(routerKey),r=computed(()=>({[getLinkClass(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[getLinkClass(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&preferSingleVNode(e.default(t));return n.custom?s:h("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),RouterLink=RouterLinkImpl;function guardEvent(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function includesParams(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!isArray$1(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function getOriginalPath(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const getLinkClass=(n,e,t)=>n??e??t,RouterViewImpl=defineComponent({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=inject(routerViewLocationKey),r=computed(()=>n.route||i.value),s=inject(viewDepthKey,0),a=computed(()=>{let c=unref(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=computed(()=>r.value.matched[a.value]);provide(viewDepthKey,computed(()=>a.value+1)),provide(matchedRouteKey,o),provide(routerViewLocationKey,r);const l=ref();return watch(()=>[l.value,o.value,n.name],([c,u,f],[d,m,x])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!isSameRouteRecord(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,d=f&&f.components[u];if(!d)return normalizeSlot(t.default,{Component:d,route:c});const m=f.props[u],x=m?m===!0?c.params:typeof m=="function"?m(c):m:null,_=h(d,assign({},x,e,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return normalizeSlot(t.default,{Component:_,route:c})||_}}});function normalizeSlot(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const RouterView=RouterViewImpl;function createRouter(n){const e=createRouterMatcher(n.routes,n),t=n.parseQuery||parseQuery,i=n.stringifyQuery||stringifyQuery,r=n.history,s=useCallbacks(),a=useCallbacks(),o=useCallbacks(),l=shallowRef(START_LOCATION_NORMALIZED);let c=START_LOCATION_NORMALIZED;isBrowser&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=applyToParams.bind(null,F=>""+F),f=applyToParams.bind(null,encodeParam),d=applyToParams.bind(null,decode);function m(F,te){let oe,ae;return isRouteName(F)?(oe=e.getRecordMatcher(F),ae=te):ae=F,e.addRoute(ae,oe)}function x(F){const te=e.getRecordMatcher(F);te&&e.removeRoute(te)}function S(){return e.getRoutes().map(F=>F.record)}function _(F){return!!e.getRecordMatcher(F)}function g(F,te){if(te=assign({},te||l.value),typeof F=="string"){const O=parseURL(t,F,te.path),Y=e.resolve({path:O.path},te),q=r.createHref(O.fullPath);return assign(O,Y,{params:d(Y.params),hash:decode(O.hash),redirectedFrom:void 0,href:q})}let oe;if(F.path!=null)oe=assign({},F,{path:parseURL(t,F.path,te.path).path});else{const O=assign({},F.params);for(const Y in O)O[Y]==null&&delete O[Y];oe=assign({},F,{params:f(O)}),te.params=f(te.params)}const ae=e.resolve(oe,te),Pe=F.hash||"";ae.params=u(d(ae.params));const w=stringifyURL(i,assign({},F,{hash:encodeHash(Pe),path:ae.path})),L=r.createHref(w);return assign({fullPath:w,hash:Pe,query:i===stringifyQuery?normalizeQuery(F.query):F.query||{}},ae,{redirectedFrom:void 0,href:L})}function T(F){return typeof F=="string"?parseURL(t,F,l.value.path):assign({},F)}function A(F,te){if(c!==F)return createRouterError(ErrorTypes.NAVIGATION_CANCELLED,{from:te,to:F})}function b(F){return D(F)}function P(F){return b(assign(T(F),{replace:!0}))}function N(F,te){const oe=F.matched[F.matched.length-1];if(oe&&oe.redirect){const{redirect:ae}=oe;let Pe=typeof ae=="function"?ae(F,te):ae;return typeof Pe=="string"&&(Pe=Pe.includes("?")||Pe.includes("#")?Pe=T(Pe):{path:Pe},Pe.params={}),assign({query:F.query,hash:F.hash,params:Pe.path!=null?{}:F.params},Pe)}}function D(F,te){const oe=c=g(F),ae=l.value,Pe=F.state,w=F.force,L=F.replace===!0,O=N(oe,ae);if(O)return D(assign(T(O),{state:typeof O=="object"?assign({},Pe,O.state):Pe,force:w,replace:L}),te||oe);const Y=oe;Y.redirectedFrom=te;let q;return!w&&isSameRouteLocation(i,ae,oe)&&(q=createRouterError(ErrorTypes.NAVIGATION_DUPLICATED,{to:Y,from:ae}),me(ae,ae,!0,!1)),(q?Promise.resolve(q):R(Y,ae)).catch(Q=>isNavigationFailure(Q)?isNavigationFailure(Q,ErrorTypes.NAVIGATION_GUARD_REDIRECT)?Q:ge(Q):J(Q,Y,ae)).then(Q=>{if(Q){if(isNavigationFailure(Q,ErrorTypes.NAVIGATION_GUARD_REDIRECT))return D(assign({replace:L},T(Q.to),{state:typeof Q.to=="object"?assign({},Pe,Q.to.state):Pe,force:w}),te||Y)}else Q=K(Y,ae,!0,L,Pe);return U(Y,ae,Q),Q})}function z(F,te){const oe=A(F,te);return oe?Promise.reject(oe):Promise.resolve()}function y(F){const te=$e.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(F):F()}function R(F,te){let oe;const[ae,Pe,w]=extractChangingRecords(F,te);oe=extractComponentsGuards(ae.reverse(),"beforeRouteLeave",F,te);for(const O of ae)O.leaveGuards.forEach(Y=>{oe.push(guardToPromiseFn(Y,F,te))});const L=z.bind(null,F,te);return oe.push(L),ie(oe).then(()=>{oe=[];for(const O of s.list())oe.push(guardToPromiseFn(O,F,te));return oe.push(L),ie(oe)}).then(()=>{oe=extractComponentsGuards(Pe,"beforeRouteUpdate",F,te);for(const O of Pe)O.updateGuards.forEach(Y=>{oe.push(guardToPromiseFn(Y,F,te))});return oe.push(L),ie(oe)}).then(()=>{oe=[];for(const O of w)if(O.beforeEnter)if(isArray$1(O.beforeEnter))for(const Y of O.beforeEnter)oe.push(guardToPromiseFn(Y,F,te));else oe.push(guardToPromiseFn(O.beforeEnter,F,te));return oe.push(L),ie(oe)}).then(()=>(F.matched.forEach(O=>O.enterCallbacks={}),oe=extractComponentsGuards(w,"beforeRouteEnter",F,te,y),oe.push(L),ie(oe))).then(()=>{oe=[];for(const O of a.list())oe.push(guardToPromiseFn(O,F,te));return oe.push(L),ie(oe)}).catch(O=>isNavigationFailure(O,ErrorTypes.NAVIGATION_CANCELLED)?O:Promise.reject(O))}function U(F,te,oe){o.list().forEach(ae=>y(()=>ae(F,te,oe)))}function K(F,te,oe,ae,Pe){const w=A(F,te);if(w)return w;const L=te===START_LOCATION_NORMALIZED,O=isBrowser?history.state:{};oe&&(ae||L?r.replace(F.fullPath,assign({scroll:L&&O&&O.scroll},Pe)):r.push(F.fullPath,Pe)),l.value=F,me(F,te,oe,L),ge()}let $;function se(){$||($=r.listen((F,te,oe)=>{if(!He.listening)return;const ae=g(F),Pe=N(ae,He.currentRoute.value);if(Pe){D(assign(Pe,{replace:!0,force:!0}),ae).catch(noop$1);return}c=ae;const w=l.value;isBrowser&&saveScrollPosition(getScrollKey(w.fullPath,oe.delta),computeScrollPosition()),R(ae,w).catch(L=>isNavigationFailure(L,ErrorTypes.NAVIGATION_ABORTED|ErrorTypes.NAVIGATION_CANCELLED)?L:isNavigationFailure(L,ErrorTypes.NAVIGATION_GUARD_REDIRECT)?(D(assign(T(L.to),{force:!0}),ae).then(O=>{isNavigationFailure(O,ErrorTypes.NAVIGATION_ABORTED|ErrorTypes.NAVIGATION_DUPLICATED)&&!oe.delta&&oe.type===NavigationType.pop&&r.go(-1,!1)}).catch(noop$1),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),J(L,ae,w))).then(L=>{L=L||K(ae,w,!1),L&&(oe.delta&&!isNavigationFailure(L,ErrorTypes.NAVIGATION_CANCELLED)?r.go(-oe.delta,!1):oe.type===NavigationType.pop&&isNavigationFailure(L,ErrorTypes.NAVIGATION_ABORTED|ErrorTypes.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),U(ae,w,L)}).catch(noop$1)}))}let ne=useCallbacks(),X=useCallbacks(),G;function J(F,te,oe){ge(F);const ae=X.list();return ae.length?ae.forEach(Pe=>Pe(F,te,oe)):console.error(F),Promise.reject(F)}function xe(){return G&&l.value!==START_LOCATION_NORMALIZED?Promise.resolve():new Promise((F,te)=>{ne.add([F,te])})}function ge(F){return G||(G=!F,se(),ne.list().forEach(([te,oe])=>F?oe(F):te()),ne.reset()),F}function me(F,te,oe,ae){const{scrollBehavior:Pe}=n;if(!isBrowser||!Pe)return Promise.resolve();const w=!oe&&getSavedScrollPosition(getScrollKey(F.fullPath,0))||(ae||!oe)&&history.state&&history.state.scroll||null;return nextTick().then(()=>Pe(F,te,w)).then(L=>L&&scrollToPosition(L)).catch(L=>J(L,F,te))}const Ie=F=>r.go(F);let Be;const $e=new Set,He={currentRoute:l,listening:!0,addRoute:m,removeRoute:x,clearRoutes:e.clearRoutes,hasRoute:_,getRoutes:S,resolve:g,options:n,push:b,replace:P,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:X.add,isReady:xe,install(F){F.component("RouterLink",RouterLink),F.component("RouterView",RouterView),F.config.globalProperties.$router=He,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>unref(l)}),isBrowser&&!Be&&l.value===START_LOCATION_NORMALIZED&&(Be=!0,b(r.location).catch(ae=>{}));const te={};for(const ae in START_LOCATION_NORMALIZED)Object.defineProperty(te,ae,{get:()=>l.value[ae],enumerable:!0});F.provide(routerKey,He),F.provide(routeLocationKey,shallowReactive(te)),F.provide(routerViewLocationKey,l);const oe=F.unmount;$e.add(F),F.unmount=function(){$e.delete(F),$e.size<1&&(c=START_LOCATION_NORMALIZED,$&&$(),$=null,l.value=START_LOCATION_NORMALIZED,Be=!1,G=!1),oe()}}};function ie(F){return F.reduce((te,oe)=>te.then(()=>y(oe)),Promise.resolve())}return He}function bind(n,e){return function(){return n.apply(e,arguments)}}const{toString}=Object.prototype,{getPrototypeOf}=Object,{iterator,toStringTag}=Symbol,kindOf=(n=>e=>{const t=toString.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),kindOfTest=n=>(n=n.toLowerCase(),e=>kindOf(e)===n),typeOfTest=n=>e=>typeof e===n,{isArray}=Array,isUndefined=typeOfTest("undefined");function isBuffer(n){return n!==null&&!isUndefined(n)&&n.constructor!==null&&!isUndefined(n.constructor)&&isFunction$1(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const isArrayBuffer=kindOfTest("ArrayBuffer");function isArrayBufferView(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&isArrayBuffer(n.buffer),e}const isString=typeOfTest("string"),isFunction$1=typeOfTest("function"),isNumber=typeOfTest("number"),isObject=n=>n!==null&&typeof n=="object",isBoolean=n=>n===!0||n===!1,isPlainObject=n=>{if(kindOf(n)!=="object")return!1;const e=getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(toStringTag in n)&&!(iterator in n)},isEmptyObject=n=>{if(!isObject(n)||isBuffer(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},isDate=kindOfTest("Date"),isFile=kindOfTest("File"),isBlob=kindOfTest("Blob"),isFileList=kindOfTest("FileList"),isStream=n=>isObject(n)&&isFunction$1(n.pipe),isFormData=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||isFunction$1(n.append)&&((e=kindOf(n))==="formdata"||e==="object"&&isFunction$1(n.toString)&&n.toString()==="[object FormData]"))},isURLSearchParams=kindOfTest("URLSearchParams"),[isReadableStream,isRequest,isResponse,isHeaders]=["ReadableStream","Request","Response","Headers"].map(kindOfTest),trim=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function forEach(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),isArray(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{if(isBuffer(n))return;const s=t?Object.getOwnPropertyNames(n):Object.keys(n),a=s.length;let o;for(i=0;i<a;i++)o=s[i],e.call(null,n[o],o,n)}}function findKey(n,e){if(isBuffer(n))return null;e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const _global=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,isContextDefined=n=>!isUndefined(n)&&n!==_global;function merge(){const{caseless:n,skipUndefined:e}=isContextDefined(this)&&this||{},t={},i=(r,s)=>{const a=n&&findKey(t,s)||s;isPlainObject(t[a])&&isPlainObject(r)?t[a]=merge(t[a],r):isPlainObject(r)?t[a]=merge({},r):isArray(r)?t[a]=r.slice():(!e||!isUndefined(r))&&(t[a]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&forEach(arguments[r],i);return t}const extend=(n,e,t,{allOwnKeys:i}={})=>(forEach(e,(r,s)=>{t&&isFunction$1(r)?n[s]=bind(r,t):n[s]=r},{allOwnKeys:i}),n),stripBOM=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),inherits=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},toFlatObject=(n,e,t,i)=>{let r,s,a;const o={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)a=r[s],(!i||i(a,n,e))&&!o[a]&&(e[a]=n[a],o[a]=!0);n=t!==!1&&getPrototypeOf(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},endsWith=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},toArray=n=>{if(!n)return null;if(isArray(n))return n;let e=n.length;if(!isNumber(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},isTypedArray=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&getPrototypeOf(Uint8Array)),forEachEntry=(n,e)=>{const i=(n&&n[iterator]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(n,s[0],s[1])}},matchAll=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},isHTMLForm=kindOfTest("HTMLFormElement"),toCamelCase=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),hasOwnProperty=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),isRegExp=kindOfTest("RegExp"),reduceDescriptors=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};forEach(t,(r,s)=>{let a;(a=e(r,s,n))!==!1&&(i[s]=a||r)}),Object.defineProperties(n,i)},freezeMethods=n=>{reduceDescriptors(n,(e,t)=>{if(isFunction$1(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(isFunction$1(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},toObjectSet=(n,e)=>{const t={},i=r=>{r.forEach(s=>{t[s]=!0})};return isArray(n)?i(n):i(String(n).split(e)),t},noop=()=>{},toFiniteNumber=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function isSpecCompliantForm(n){return!!(n&&isFunction$1(n.append)&&n[toStringTag]==="FormData"&&n[iterator])}const toJSONObject=n=>{const e=new Array(10),t=(i,r)=>{if(isObject(i)){if(e.indexOf(i)>=0)return;if(isBuffer(i))return i;if(!("toJSON"in i)){e[r]=i;const s=isArray(i)?[]:{};return forEach(i,(a,o)=>{const l=t(a,r+1);!isUndefined(l)&&(s[o]=l)}),e[r]=void 0,s}}return i};return t(n,0)},isAsyncFn=kindOfTest("AsyncFunction"),isThenable=n=>n&&(isObject(n)||isFunction$1(n))&&isFunction$1(n.then)&&isFunction$1(n.catch),_setImmediate=((n,e)=>n?setImmediate:e?((t,i)=>(_global.addEventListener("message",({source:r,data:s})=>{r===_global&&s===t&&i.length&&i.shift()()},!1),r=>{i.push(r),_global.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",isFunction$1(_global.postMessage)),asap=typeof queueMicrotask<"u"?queueMicrotask.bind(_global):typeof process<"u"&&process.nextTick||_setImmediate,isIterable=n=>n!=null&&isFunction$1(n[iterator]),utils$1={isArray,isArrayBuffer,isBuffer,isFormData,isArrayBufferView,isString,isNumber,isBoolean,isObject,isPlainObject,isEmptyObject,isReadableStream,isRequest,isResponse,isHeaders,isUndefined,isDate,isFile,isBlob,isRegExp,isFunction:isFunction$1,isStream,isURLSearchParams,isTypedArray,isFileList,forEach,merge,extend,trim,stripBOM,inherits,toFlatObject,kindOf,kindOfTest,endsWith,toArray,forEachEntry,matchAll,isHTMLForm,hasOwnProperty,hasOwnProp:hasOwnProperty,reduceDescriptors,freezeMethods,toObjectSet,toCamelCase,noop,toFiniteNumber,findKey,global:_global,isContextDefined,isSpecCompliantForm,toJSONObject,isAsyncFn,isThenable,setImmediate:_setImmediate,asap,isIterable};function AxiosError$1(n,e,t,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}utils$1.inherits(AxiosError$1,Error,{toJSON:function n(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:utils$1.toJSONObject(this.config),code:this.code,status:this.status}}});const prototype$1=AxiosError$1.prototype,descriptors={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{descriptors[n]={value:n}});Object.defineProperties(AxiosError$1,descriptors);Object.defineProperty(prototype$1,"isAxiosError",{value:!0});AxiosError$1.from=(n,e,t,i,r,s)=>{const a=Object.create(prototype$1);utils$1.toFlatObject(n,a,function(u){return u!==Error.prototype},c=>c!=="isAxiosError");const o=n&&n.message?n.message:"Error",l=e==null&&n?n.code:e;return AxiosError$1.call(a,o,l,t,i,r),n&&a.cause==null&&Object.defineProperty(a,"cause",{value:n,configurable:!0}),a.name=n&&n.name||"Error",s&&Object.assign(a,s),a};const httpAdapter=null;function isVisitable(n){return utils$1.isPlainObject(n)||utils$1.isArray(n)}function removeBrackets(n){return utils$1.endsWith(n,"[]")?n.slice(0,-2):n}function renderKey(n,e,t){return n?n.concat(e).map(function(r,s){return r=removeBrackets(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function isFlatArray(n){return utils$1.isArray(n)&&!n.some(isVisitable)}const predicates=utils$1.toFlatObject(utils$1,{},null,function n(e){return/^is[A-Z]/.test(e)});function toFormData$1(n,e,t){if(!utils$1.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=utils$1.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,_){return!utils$1.isUndefined(_[S])});const i=t.metaTokens,r=t.visitor||u,s=t.dots,a=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&utils$1.isSpecCompliantForm(e);if(!utils$1.isFunction(r))throw new TypeError("visitor must be a function");function c(x){if(x===null)return"";if(utils$1.isDate(x))return x.toISOString();if(utils$1.isBoolean(x))return x.toString();if(!l&&utils$1.isBlob(x))throw new AxiosError$1("Blob is not supported. Use a Buffer instead.");return utils$1.isArrayBuffer(x)||utils$1.isTypedArray(x)?l&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function u(x,S,_){let g=x;if(x&&!_&&typeof x=="object"){if(utils$1.endsWith(S,"{}"))S=i?S:S.slice(0,-2),x=JSON.stringify(x);else if(utils$1.isArray(x)&&isFlatArray(x)||(utils$1.isFileList(x)||utils$1.endsWith(S,"[]"))&&(g=utils$1.toArray(x)))return S=removeBrackets(S),g.forEach(function(A,b){!(utils$1.isUndefined(A)||A===null)&&e.append(a===!0?renderKey([S],b,s):a===null?S:S+"[]",c(A))}),!1}return isVisitable(x)?!0:(e.append(renderKey(_,S,s),c(x)),!1)}const f=[],d=Object.assign(predicates,{defaultVisitor:u,convertValue:c,isVisitable});function m(x,S){if(!utils$1.isUndefined(x)){if(f.indexOf(x)!==-1)throw Error("Circular reference detected in "+S.join("."));f.push(x),utils$1.forEach(x,function(g,T){(!(utils$1.isUndefined(g)||g===null)&&r.call(e,g,utils$1.isString(T)?T.trim():T,S,d))===!0&&m(g,S?S.concat(T):[T])}),f.pop()}}if(!utils$1.isObject(n))throw new TypeError("data must be an object");return m(n),e}function encode$1(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function AxiosURLSearchParams(n,e){this._pairs=[],n&&toFormData$1(n,this,e)}const prototype=AxiosURLSearchParams.prototype;prototype.append=function n(e,t){this._pairs.push([e,t])};prototype.toString=function n(e){const t=e?function(i){return e.call(this,i,encode$1)}:encode$1;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function encode(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function buildURL(n,e,t){if(!e)return n;const i=t&&t.encode||encode;utils$1.isFunction(t)&&(t={serialize:t});const r=t&&t.serialize;let s;if(r?s=r(e,t):s=utils$1.isURLSearchParams(e)?e.toString():new AxiosURLSearchParams(e,t).toString(i),s){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class InterceptorManager{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){utils$1.forEach(this.handlers,function(i){i!==null&&e(i)})}}const transitionalDefaults={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},URLSearchParams$1=typeof URLSearchParams<"u"?URLSearchParams:AxiosURLSearchParams,FormData$1=typeof FormData<"u"?FormData:null,Blob$1=typeof Blob<"u"?Blob:null,platform$1={isBrowser:!0,classes:{URLSearchParams:URLSearchParams$1,FormData:FormData$1,Blob:Blob$1},protocols:["http","https","file","blob","url","data"]},hasBrowserEnv=typeof window<"u"&&typeof document<"u",_navigator=typeof navigator=="object"&&navigator||void 0,hasStandardBrowserEnv=hasBrowserEnv&&(!_navigator||["ReactNative","NativeScript","NS"].indexOf(_navigator.product)<0),hasStandardBrowserWebWorkerEnv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",origin=hasBrowserEnv&&window.location.href||"http://localhost",utils=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv,hasStandardBrowserEnv,hasStandardBrowserWebWorkerEnv,navigator:_navigator,origin},Symbol.toStringTag,{value:"Module"})),platform={...utils,...platform$1};function toURLEncodedForm(n,e){return toFormData$1(n,new platform.classes.URLSearchParams,{visitor:function(t,i,r,s){return platform.isNode&&utils$1.isBuffer(t)?(this.append(i,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function parsePropPath(n){return utils$1.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function arrayToObject(n){const e={},t=Object.keys(n);let i;const r=t.length;let s;for(i=0;i<r;i++)s=t[i],e[s]=n[s];return e}function formDataToJSON(n){function e(t,i,r,s){let a=t[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),l=s>=t.length;return a=!a&&utils$1.isArray(r)?r.length:a,l?(utils$1.hasOwnProp(r,a)?r[a]=[r[a],i]:r[a]=i,!o):((!r[a]||!utils$1.isObject(r[a]))&&(r[a]=[]),e(t,i,r[a],s)&&utils$1.isArray(r[a])&&(r[a]=arrayToObject(r[a])),!o)}if(utils$1.isFormData(n)&&utils$1.isFunction(n.entries)){const t={};return utils$1.forEachEntry(n,(i,r)=>{e(parsePropPath(i),r,t,0)}),t}return null}function stringifySafely(n,e,t){if(utils$1.isString(n))try{return(e||JSON.parse)(n),utils$1.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const defaults={transitional:transitionalDefaults,adapter:["xhr","http","fetch"],transformRequest:[function n(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=utils$1.isObject(e);if(s&&utils$1.isHTMLForm(e)&&(e=new FormData(e)),utils$1.isFormData(e))return r?JSON.stringify(formDataToJSON(e)):e;if(utils$1.isArrayBuffer(e)||utils$1.isBuffer(e)||utils$1.isStream(e)||utils$1.isFile(e)||utils$1.isBlob(e)||utils$1.isReadableStream(e))return e;if(utils$1.isArrayBufferView(e))return e.buffer;if(utils$1.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return toURLEncodedForm(e,this.formSerializer).toString();if((o=utils$1.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return toFormData$1(o?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),stringifySafely(e)):e}],transformResponse:[function n(e){const t=this.transitional||defaults.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(utils$1.isResponse(e)||utils$1.isReadableStream(e))return e;if(e&&utils$1.isString(e)&&(i&&!this.responseType||r)){const a=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(o){if(a)throw o.name==="SyntaxError"?AxiosError$1.from(o,AxiosError$1.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:platform.classes.FormData,Blob:platform.classes.Blob},validateStatus:function n(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};utils$1.forEach(["delete","get","head","post","put","patch"],n=>{defaults.headers[n]={}});const ignoreDuplicateOf=utils$1.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),parseHeaders=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(a){r=a.indexOf(":"),t=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim(),!(!t||e[t]&&ignoreDuplicateOf[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},$internals=Symbol("internals");function normalizeHeader(n){return n&&String(n).trim().toLowerCase()}function normalizeValue(n){return n===!1||n==null?n:utils$1.isArray(n)?n.map(normalizeValue):String(n)}function parseTokens(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const isValidHeaderName=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function matchHeaderValue(n,e,t,i,r){if(utils$1.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!utils$1.isString(e)){if(utils$1.isString(i))return e.indexOf(i)!==-1;if(utils$1.isRegExp(i))return i.test(e)}}function formatHeader(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function buildAccessors(n,e){const t=utils$1.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}let AxiosHeaders$1=class{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function s(o,l,c){const u=normalizeHeader(l);if(!u)throw new Error("header name must be a non-empty string");const f=utils$1.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=normalizeValue(o))}const a=(o,l)=>utils$1.forEach(o,(c,u)=>s(c,u,l));if(utils$1.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(utils$1.isString(e)&&(e=e.trim())&&!isValidHeaderName(e))a(parseHeaders(e),t);else if(utils$1.isObject(e)&&utils$1.isIterable(e)){let o={},l,c;for(const u of e){if(!utils$1.isArray(u))throw TypeError("Object iterator must return a key-value pair");o[c=u[0]]=(l=o[c])?utils$1.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}a(o,t)}else e!=null&&s(t,e,i);return this}get(e,t){if(e=normalizeHeader(e),e){const i=utils$1.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return parseTokens(r);if(utils$1.isFunction(t))return t.call(this,r,i);if(utils$1.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=normalizeHeader(e),e){const i=utils$1.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||matchHeaderValue(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function s(a){if(a=normalizeHeader(a),a){const o=utils$1.findKey(i,a);o&&(!t||matchHeaderValue(i,i[o],o,t))&&(delete i[o],r=!0)}}return utils$1.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const s=t[i];(!e||matchHeaderValue(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,i={};return utils$1.forEach(this,(r,s)=>{const a=utils$1.findKey(i,s);if(a){t[a]=normalizeValue(r),delete t[s];return}const o=e?formatHeader(s):String(s).trim();o!==s&&delete t[s],t[o]=normalizeValue(r),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return utils$1.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&utils$1.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[$internals]=this[$internals]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=normalizeHeader(a);i[o]||(buildAccessors(r,a),i[o]=!0)}return utils$1.isArray(e)?e.forEach(s):s(e),this}};AxiosHeaders$1.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);utils$1.reduceDescriptors(AxiosHeaders$1.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});utils$1.freezeMethods(AxiosHeaders$1);function transformData(n,e){const t=this||defaults,i=e||t,r=AxiosHeaders$1.from(i.headers);let s=i.data;return utils$1.forEach(n,function(o){s=o.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function isCancel$1(n){return!!(n&&n.__CANCEL__)}function CanceledError$1(n,e,t){AxiosError$1.call(this,n??"canceled",AxiosError$1.ERR_CANCELED,e,t),this.name="CanceledError"}utils$1.inherits(CanceledError$1,AxiosError$1,{__CANCEL__:!0});function settle(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new AxiosError$1("Request failed with status code "+t.status,[AxiosError$1.ERR_BAD_REQUEST,AxiosError$1.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function parseProtocol(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function speedometer(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];a||(a=c),t[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=t[f++],f=f%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),c-a<e)return;const m=u&&c-u;return m?Math.round(d*1e3/m):void 0}}function throttle(n,e){let t=0,i=1e3/e,r,s;const a=(c,u=Date.now())=>{t=u,r=null,s&&(clearTimeout(s),s=null),n(...c)};return[(...c)=>{const u=Date.now(),f=u-t;f>=i?a(c,u):(r=c,s||(s=setTimeout(()=>{s=null,a(r)},i-f)))},()=>r&&a(r)]}const progressEventReducer=(n,e,t=3)=>{let i=0;const r=speedometer(50,250);return throttle(s=>{const a=s.loaded,o=s.lengthComputable?s.total:void 0,l=a-i,c=r(l),u=a<=o;i=a;const f={loaded:a,total:o,progress:o?a/o:void 0,bytes:l,rate:c||void 0,estimated:c&&o&&u?(o-a)/c:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};n(f)},t)},progressEventDecorator=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},asyncDecorator=n=>(...e)=>utils$1.asap(()=>n(...e)),isURLSameOrigin=platform.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,platform.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(platform.origin),platform.navigator&&/(msie|trident)/i.test(platform.navigator.userAgent)):()=>!0,cookies=platform.hasStandardBrowserEnv?{write(n,e,t,i,r,s,a){if(typeof document>"u")return;const o=[`${n}=${encodeURIComponent(e)}`];utils$1.isNumber(t)&&o.push(`expires=${new Date(t).toUTCString()}`),utils$1.isString(i)&&o.push(`path=${i}`),utils$1.isString(r)&&o.push(`domain=${r}`),s===!0&&o.push("secure"),utils$1.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(n){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+n+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function isAbsoluteURL(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function combineURLs(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function buildFullPath(n,e,t){let i=!isAbsoluteURL(e);return n&&(i||t==!1)?combineURLs(n,e):e}const headersToObject=n=>n instanceof AxiosHeaders$1?{...n}:n;function mergeConfig$1(n,e){e=e||{};const t={};function i(c,u,f,d){return utils$1.isPlainObject(c)&&utils$1.isPlainObject(u)?utils$1.merge.call({caseless:d},c,u):utils$1.isPlainObject(u)?utils$1.merge({},u):utils$1.isArray(u)?u.slice():u}function r(c,u,f,d){if(utils$1.isUndefined(u)){if(!utils$1.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!utils$1.isUndefined(u))return i(void 0,u)}function a(c,u){if(utils$1.isUndefined(u)){if(!utils$1.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function o(c,u,f){if(f in e)return i(c,u);if(f in n)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(c,u,f)=>r(headersToObject(c),headersToObject(u),f,!0)};return utils$1.forEach(Object.keys({...n,...e}),function(u){const f=l[u]||r,d=f(n[u],e[u],u);utils$1.isUndefined(d)&&f!==o||(t[u]=d)}),t}const resolveConfig=n=>{const e=mergeConfig$1({},n);let{data:t,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:a,auth:o}=e;if(e.headers=a=AxiosHeaders$1.from(a),e.url=buildURL(buildFullPath(e.baseURL,e.url,e.allowAbsoluteUrls),n.params,n.paramsSerializer),o&&a.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):""))),utils$1.isFormData(t)){if(platform.hasStandardBrowserEnv||platform.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(utils$1.isFunction(t.getHeaders)){const l=t.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([u,f])=>{c.includes(u.toLowerCase())&&a.set(u,f)})}}if(platform.hasStandardBrowserEnv&&(i&&utils$1.isFunction(i)&&(i=i(e)),i||i!==!1&&isURLSameOrigin(e.url))){const l=r&&s&&cookies.read(s);l&&a.set(r,l)}return e},isXHRAdapterSupported=typeof XMLHttpRequest<"u",xhrAdapter=isXHRAdapterSupported&&function(n){return new Promise(function(t,i){const r=resolveConfig(n);let s=r.data;const a=AxiosHeaders$1.from(r.headers).normalize();let{responseType:o,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,m,x;function S(){m&&m(),x&&x(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let _=new XMLHttpRequest;_.open(r.method.toUpperCase(),r.url,!0),_.timeout=r.timeout;function g(){if(!_)return;const A=AxiosHeaders$1.from("getAllResponseHeaders"in _&&_.getAllResponseHeaders()),P={data:!o||o==="text"||o==="json"?_.responseText:_.response,status:_.status,statusText:_.statusText,headers:A,config:n,request:_};settle(function(D){t(D),S()},function(D){i(D),S()},P),_=null}"onloadend"in _?_.onloadend=g:_.onreadystatechange=function(){!_||_.readyState!==4||_.status===0&&!(_.responseURL&&_.responseURL.indexOf("file:")===0)||setTimeout(g)},_.onabort=function(){_&&(i(new AxiosError$1("Request aborted",AxiosError$1.ECONNABORTED,n,_)),_=null)},_.onerror=function(b){const P=b&&b.message?b.message:"Network Error",N=new AxiosError$1(P,AxiosError$1.ERR_NETWORK,n,_);N.event=b||null,i(N),_=null},_.ontimeout=function(){let b=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const P=r.transitional||transitionalDefaults;r.timeoutErrorMessage&&(b=r.timeoutErrorMessage),i(new AxiosError$1(b,P.clarifyTimeoutError?AxiosError$1.ETIMEDOUT:AxiosError$1.ECONNABORTED,n,_)),_=null},s===void 0&&a.setContentType(null),"setRequestHeader"in _&&utils$1.forEach(a.toJSON(),function(b,P){_.setRequestHeader(P,b)}),utils$1.isUndefined(r.withCredentials)||(_.withCredentials=!!r.withCredentials),o&&o!=="json"&&(_.responseType=r.responseType),c&&([d,x]=progressEventReducer(c,!0),_.addEventListener("progress",d)),l&&_.upload&&([f,m]=progressEventReducer(l),_.upload.addEventListener("progress",f),_.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(u=A=>{_&&(i(!A||A.type?new CanceledError$1(null,n,_):A),_.abort(),_=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const T=parseProtocol(r.url);if(T&&platform.protocols.indexOf(T)===-1){i(new AxiosError$1("Unsupported protocol "+T+":",AxiosError$1.ERR_BAD_REQUEST,n));return}_.send(s||null)})},composeSignals=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let i=new AbortController,r;const s=function(c){if(!r){r=!0,o();const u=c instanceof Error?c:this.reason;i.abort(u instanceof AxiosError$1?u:new CanceledError$1(u instanceof Error?u.message:u))}};let a=e&&setTimeout(()=>{a=null,s(new AxiosError$1(`timeout ${e} of ms exceeded`,AxiosError$1.ETIMEDOUT))},e);const o=()=>{n&&(a&&clearTimeout(a),a=null,n.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),n=null)};n.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>utils$1.asap(o),l}},streamChunk=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,r;for(;i<t;)r=i+e,yield n.slice(i,r),i=r},readBytes=async function*(n,e){for await(const t of readStream(n))yield*streamChunk(t,e)},readStream=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},trackStream=(n,e,t,i)=>{const r=readBytes(n,e);let s=0,a,o=l=>{a||(a=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){o(),l.close();return}let f=u.byteLength;if(t){let d=s+=f;t(d)}l.enqueue(new Uint8Array(u))}catch(c){throw o(c),c}},cancel(l){return o(l),r.return()}},{highWaterMark:2})},DEFAULT_CHUNK_SIZE=64*1024,{isFunction}=utils$1,globalFetchAPI=(({Request:n,Response:e})=>({Request:n,Response:e}))(utils$1.global),{ReadableStream:ReadableStream$1,TextEncoder}=utils$1.global,test=(n,...e)=>{try{return!!n(...e)}catch{return!1}},factory=n=>{n=utils$1.merge.call({skipUndefined:!0},globalFetchAPI,n);const{fetch:e,Request:t,Response:i}=n,r=e?isFunction(e):typeof fetch=="function",s=isFunction(t),a=isFunction(i);if(!r)return!1;const o=r&&isFunction(ReadableStream$1),l=r&&(typeof TextEncoder=="function"?(x=>S=>x.encode(S))(new TextEncoder):async x=>new Uint8Array(await new t(x).arrayBuffer())),c=s&&o&&test(()=>{let x=!1;const S=new t(platform.origin,{body:new ReadableStream$1,method:"POST",get duplex(){return x=!0,"half"}}).headers.has("Content-Type");return x&&!S}),u=a&&o&&test(()=>utils$1.isReadableStream(new i("").body)),f={stream:u&&(x=>x.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(x=>{!f[x]&&(f[x]=(S,_)=>{let g=S&&S[x];if(g)return g.call(S);throw new AxiosError$1(`Response type '${x}' is not supported`,AxiosError$1.ERR_NOT_SUPPORT,_)})});const d=async x=>{if(x==null)return 0;if(utils$1.isBlob(x))return x.size;if(utils$1.isSpecCompliantForm(x))return(await new t(platform.origin,{method:"POST",body:x}).arrayBuffer()).byteLength;if(utils$1.isArrayBufferView(x)||utils$1.isArrayBuffer(x))return x.byteLength;if(utils$1.isURLSearchParams(x)&&(x=x+""),utils$1.isString(x))return(await l(x)).byteLength},m=async(x,S)=>{const _=utils$1.toFiniteNumber(x.getContentLength());return _??d(S)};return async x=>{let{url:S,method:_,data:g,signal:T,cancelToken:A,timeout:b,onDownloadProgress:P,onUploadProgress:N,responseType:D,headers:z,withCredentials:y="same-origin",fetchOptions:R}=resolveConfig(x),U=e||fetch;D=D?(D+"").toLowerCase():"text";let K=composeSignals([T,A&&A.toAbortSignal()],b),$=null;const se=K&&K.unsubscribe&&(()=>{K.unsubscribe()});let ne;try{if(N&&c&&_!=="get"&&_!=="head"&&(ne=await m(z,g))!==0){let me=new t(S,{method:"POST",body:g,duplex:"half"}),Ie;if(utils$1.isFormData(g)&&(Ie=me.headers.get("content-type"))&&z.setContentType(Ie),me.body){const[Be,$e]=progressEventDecorator(ne,progressEventReducer(asyncDecorator(N)));g=trackStream(me.body,DEFAULT_CHUNK_SIZE,Be,$e)}}utils$1.isString(y)||(y=y?"include":"omit");const X=s&&"credentials"in t.prototype,G={...R,signal:K,method:_.toUpperCase(),headers:z.normalize().toJSON(),body:g,duplex:"half",credentials:X?y:void 0};$=s&&new t(S,G);let J=await(s?U($,R):U(S,G));const xe=u&&(D==="stream"||D==="response");if(u&&(P||xe&&se)){const me={};["status","statusText","headers"].forEach(He=>{me[He]=J[He]});const Ie=utils$1.toFiniteNumber(J.headers.get("content-length")),[Be,$e]=P&&progressEventDecorator(Ie,progressEventReducer(asyncDecorator(P),!0))||[];J=new i(trackStream(J.body,DEFAULT_CHUNK_SIZE,Be,()=>{$e&&$e(),se&&se()}),me)}D=D||"text";let ge=await f[utils$1.findKey(f,D)||"text"](J,x);return!xe&&se&&se(),await new Promise((me,Ie)=>{settle(me,Ie,{data:ge,headers:AxiosHeaders$1.from(J.headers),status:J.status,statusText:J.statusText,config:x,request:$})})}catch(X){throw se&&se(),X&&X.name==="TypeError"&&/Load failed|fetch/i.test(X.message)?Object.assign(new AxiosError$1("Network Error",AxiosError$1.ERR_NETWORK,x,$),{cause:X.cause||X}):AxiosError$1.from(X,X&&X.code,x,$)}}},seedCache=new Map,getFetch=n=>{let e=n&&n.env||{};const{fetch:t,Request:i,Response:r}=e,s=[i,r,t];let a=s.length,o=a,l,c,u=seedCache;for(;o--;)l=s[o],c=u.get(l),c===void 0&&u.set(l,c=o?new Map:factory(e)),u=c;return c};getFetch();const knownAdapters={http:httpAdapter,xhr:xhrAdapter,fetch:{get:getFetch}};utils$1.forEach(knownAdapters,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const renderReason=n=>`- ${n}`,isResolvedHandle=n=>utils$1.isFunction(n)||n===null||n===!1;function getAdapter$1(n,e){n=utils$1.isArray(n)?n:[n];const{length:t}=n;let i,r;const s={};for(let a=0;a<t;a++){i=n[a];let o;if(r=i,!isResolvedHandle(i)&&(r=knownAdapters[(o=String(i)).toLowerCase()],r===void 0))throw new AxiosError$1(`Unknown adapter '${o}'`);if(r&&(utils$1.isFunction(r)||(r=r.get(e))))break;s[o||"#"+a]=r}if(!r){const a=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?a.length>1?`since :
`+a.map(renderReason).join(`
`):" "+renderReason(a[0]):"as no adapter specified";throw new AxiosError$1("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r}const adapters={getAdapter:getAdapter$1,adapters:knownAdapters};function throwIfCancellationRequested(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new CanceledError$1(null,n)}function dispatchRequest(n){return throwIfCancellationRequested(n),n.headers=AxiosHeaders$1.from(n.headers),n.data=transformData.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),adapters.getAdapter(n.adapter||defaults.adapter,n)(n).then(function(i){return throwIfCancellationRequested(n),i.data=transformData.call(n,n.transformResponse,i),i.headers=AxiosHeaders$1.from(i.headers),i},function(i){return isCancel$1(i)||(throwIfCancellationRequested(n),i&&i.response&&(i.response.data=transformData.call(n,n.transformResponse,i.response),i.response.headers=AxiosHeaders$1.from(i.response.headers))),Promise.reject(i)})}const VERSION$1="1.13.2",validators$1={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{validators$1[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const deprecatedWarnings={};validators$1.transitional=function n(e,t,i){function r(s,a){return"[Axios v"+VERSION$1+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,o)=>{if(e===!1)throw new AxiosError$1(r(a," has been removed"+(t?" in "+t:"")),AxiosError$1.ERR_DEPRECATED);return t&&!deprecatedWarnings[a]&&(deprecatedWarnings[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,o):!0}};validators$1.spelling=function n(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function assertOptions(n,e,t){if(typeof n!="object")throw new AxiosError$1("options must be an object",AxiosError$1.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],a=e[s];if(a){const o=n[s],l=o===void 0||a(o,s,n);if(l!==!0)throw new AxiosError$1("option "+s+" must be "+l,AxiosError$1.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new AxiosError$1("Unknown option "+s,AxiosError$1.ERR_BAD_OPTION)}}const validator={assertOptions,validators:validators$1},validators=validator.validators;let Axios$1=class{constructor(e){this.defaults=e||{},this.interceptors={request:new InterceptorManager,response:new InterceptorManager}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=mergeConfig$1(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:s}=t;i!==void 0&&validator.assertOptions(i,{silentJSONParsing:validators.transitional(validators.boolean),forcedJSONParsing:validators.transitional(validators.boolean),clarifyTimeoutError:validators.transitional(validators.boolean)},!1),r!=null&&(utils$1.isFunction(r)?t.paramsSerializer={serialize:r}:validator.assertOptions(r,{encode:validators.function,serialize:validators.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),validator.assertOptions(t,{baseUrl:validators.spelling("baseURL"),withXsrfToken:validators.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=s&&utils$1.merge(s.common,s[t.method]);s&&utils$1.forEach(["delete","get","head","post","put","patch","common"],x=>{delete s[x]}),t.headers=AxiosHeaders$1.concat(a,s);const o=[];let l=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(t)===!1||(l=l&&S.synchronous,o.unshift(S.fulfilled,S.rejected))});const c=[];this.interceptors.response.forEach(function(S){c.push(S.fulfilled,S.rejected)});let u,f=0,d;if(!l){const x=[dispatchRequest.bind(this),void 0];for(x.unshift(...o),x.push(...c),d=x.length,u=Promise.resolve(t);f<d;)u=u.then(x[f++],x[f++]);return u}d=o.length;let m=t;for(;f<d;){const x=o[f++],S=o[f++];try{m=x(m)}catch(_){S.call(this,_);break}}try{u=dispatchRequest.call(this,m)}catch(x){return Promise.reject(x)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=mergeConfig$1(this.defaults,e);const t=buildFullPath(e.baseURL,e.url,e.allowAbsoluteUrls);return buildURL(t,e.params,e.paramsSerializer)}};utils$1.forEach(["delete","get","head","options"],function n(e){Axios$1.prototype[e]=function(t,i){return this.request(mergeConfig$1(i||{},{method:e,url:t,data:(i||{}).data}))}});utils$1.forEach(["post","put","patch"],function n(e){function t(i){return function(s,a,o){return this.request(mergeConfig$1(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}Axios$1.prototype[e]=t(),Axios$1.prototype[e+"Form"]=t(!0)});let CancelToken$1=class At{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{i.subscribe(o),s=o}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,o){i.reason||(i.reason=new CanceledError$1(s,a,o),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new At(function(r){e=r}),cancel:e}}};function spread$1(n){return function(t){return n.apply(null,t)}}function isAxiosError$1(n){return utils$1.isObject(n)&&n.isAxiosError===!0}const HttpStatusCode$1={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(HttpStatusCode$1).forEach(([n,e])=>{HttpStatusCode$1[e]=n});function createInstance(n){const e=new Axios$1(n),t=bind(Axios$1.prototype.request,e);return utils$1.extend(t,Axios$1.prototype,e,{allOwnKeys:!0}),utils$1.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return createInstance(mergeConfig$1(n,r))},t}const axios=createInstance(defaults);axios.Axios=Axios$1;axios.CanceledError=CanceledError$1;axios.CancelToken=CancelToken$1;axios.isCancel=isCancel$1;axios.VERSION=VERSION$1;axios.toFormData=toFormData$1;axios.AxiosError=AxiosError$1;axios.Cancel=axios.CanceledError;axios.all=function n(e){return Promise.all(e)};axios.spread=spread$1;axios.isAxiosError=isAxiosError$1;axios.mergeConfig=mergeConfig$1;axios.AxiosHeaders=AxiosHeaders$1;axios.formToJSON=n=>formDataToJSON(utils$1.isHTMLForm(n)?new FormData(n):n);axios.getAdapter=adapters.getAdapter;axios.HttpStatusCode=HttpStatusCode$1;axios.default=axios;const{Axios,AxiosError,CanceledError,isCancel,CancelToken,VERSION,all,Cancel,isAxiosError,spread,toFormData,AxiosHeaders,HttpStatusCode,formToJSON,getAdapter,mergeConfig}=axios,_hoisted_1$1={class:"flex justify-center items-center h-screen bg-yellow-200"},_hoisted_2={class:"text-red-500 text-4xl"},_sfc_main$1={__name:"HomeView",setup(n){const e=ref("");async function t(){const i=await axios.get("http://ip-api.com/json/162.120.187.77");e.value=i.data.country}return onMounted(()=>{t(),console.log("HomeView mounted",e.value)}),(i,r)=>(openBlock(),createElementBlock("div",_hoisted_1$1,[createBaseVNode("h1",_hoisted_2,toDisplayString(e.value),1)]))}},_export_sfc=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},_sfc_main={},_hoisted_1={class:"text-sm"};function _sfc_render(n,e){return openBlock(),createElementBlock("h1",_hoisted_1,"About Page")}const About=_export_sfc(_sfc_main,[["render",_sfc_render]]),router=createRouter({history:createWebHistory("/vue-first-project/"),routes:[{path:"/",name:"home",component:_sfc_main$1},{path:"/about",name:"about",component:About}]}),app=createApp(_sfc_main$2);app.use(createPinia());app.use(router);app.mount("#app");
