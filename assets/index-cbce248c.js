(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function au(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jl={exports:{}},nr={},Xl={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=Symbol.for("react.element"),cu=Symbol.for("react.portal"),uu=Symbol.for("react.fragment"),du=Symbol.for("react.strict_mode"),pu=Symbol.for("react.profiler"),mu=Symbol.for("react.provider"),hu=Symbol.for("react.context"),fu=Symbol.for("react.forward_ref"),gu=Symbol.for("react.suspense"),vu=Symbol.for("react.memo"),xu=Symbol.for("react.lazy"),Bo=Symbol.iterator;function yu(e){return e===null||typeof e!="object"?null:(e=Bo&&e[Bo]||e["@@iterator"],typeof e=="function"?e:null)}var Yl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gl=Object.assign,Kl={};function ln(e,t,n){this.props=e,this.context=t,this.refs=Kl,this.updater=n||Yl}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zl(){}Zl.prototype=ln.prototype;function Hs(e,t,n){this.props=e,this.context=t,this.refs=Kl,this.updater=n||Yl}var Vs=Hs.prototype=new Zl;Vs.constructor=Hs;Gl(Vs,ln.prototype);Vs.isPureReactComponent=!0;var _o=Array.isArray,ql=Object.prototype.hasOwnProperty,$s={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function ta(e,t,n){var r,s={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)ql.call(t,r)&&!ea.hasOwnProperty(r)&&(s[r]=t[r]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var a=Array(c),d=0;d<c;d++)a[d]=arguments[d+2];s.children=a}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)s[r]===void 0&&(s[r]=c[r]);return{$$typeof:Gn,type:e,key:o,ref:l,props:s,_owner:$s.current}}function ju(e,t){return{$$typeof:Gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ws(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function ku(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Uo=/\/+/g;function kr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ku(""+e.key):t.toString(36)}function ji(e,t,n,r,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Gn:case cu:l=!0}}if(l)return l=e,s=s(l),e=r===""?"."+kr(l,0):r,_o(s)?(n="",e!=null&&(n=e.replace(Uo,"$&/")+"/"),ji(s,t,n,"",function(d){return d})):s!=null&&(Ws(s)&&(s=ju(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Uo,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=r===""?".":r+":",_o(e))for(var c=0;c<e.length;c++){o=e[c];var a=r+kr(o,c);l+=ji(o,t,n,a,s)}else if(a=yu(e),typeof a=="function")for(e=a.call(e),c=0;!(o=e.next()).done;)o=o.value,a=r+kr(o,c++),l+=ji(o,t,n,a,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ii(e,t,n){if(e==null)return e;var r=[],s=0;return ji(e,r,"","",function(o){return t.call(n,o,s++)}),r}function Nu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},ki={transition:null},wu={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:ki,ReactCurrentOwner:$s};function na(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:ii,forEach:function(e,t,n){ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ii(e,function(){t++}),t},toArray:function(e){return ii(e,function(t){return t})||[]},only:function(e){if(!Ws(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=ln;L.Fragment=uu;L.Profiler=pu;L.PureComponent=Hs;L.StrictMode=du;L.Suspense=gu;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wu;L.act=na;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gl({},e.props),s=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=$s.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in t)ql.call(t,a)&&!ea.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&c!==void 0?c[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){c=Array(a);for(var d=0;d<a;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:Gn,type:e.type,key:s,ref:o,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:hu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mu,_context:e},e.Consumer=e};L.createElement=ta;L.createFactory=function(e){var t=ta.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:fu,render:e}};L.isValidElement=Ws;L.lazy=function(e){return{$$typeof:xu,_payload:{_status:-1,_result:e},_init:Nu}};L.memo=function(e,t){return{$$typeof:vu,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=ki.transition;ki.transition={};try{e()}finally{ki.transition=t}};L.unstable_act=na;L.useCallback=function(e,t){return ue.current.useCallback(e,t)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,t){return ue.current.useEffect(e,t)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ue.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";Xl.exports=L;var S=Xl.exports;const Su=au(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu=S,bu=Symbol.for("react.element"),Eu=Symbol.for("react.fragment"),Tu=Object.prototype.hasOwnProperty,Du=Cu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pu={key:!0,ref:!0,__self:!0,__source:!0};function ia(e,t,n){var r,s={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Tu.call(t,r)&&!Pu.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:bu,type:e,key:o,ref:l,props:s,_owner:Du.current}}nr.Fragment=Eu;nr.jsx=ia;nr.jsxs=ia;Jl.exports=nr;var i=Jl.exports,Jr={},ra={exports:{}},Ne={},sa={exports:{}},oa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,P){var F=b.length;b.push(P);e:for(;0<F;){var Q=F-1>>>1,Z=b[Q];if(0<s(Z,P))b[Q]=P,b[F]=Z,F=Q;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var P=b[0],F=b.pop();if(F!==P){b[0]=F;e:for(var Q=0,Z=b.length,ti=Z>>>1;Q<ti;){var xt=2*(Q+1)-1,jr=b[xt],yt=xt+1,ni=b[yt];if(0>s(jr,F))yt<Z&&0>s(ni,jr)?(b[Q]=ni,b[yt]=F,Q=yt):(b[Q]=jr,b[xt]=F,Q=xt);else if(yt<Z&&0>s(ni,F))b[Q]=ni,b[yt]=F,Q=yt;else break e}}return P}function s(b,P){var F=b.sortIndex-P.sortIndex;return F!==0?F:b.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var a=[],d=[],h=1,v=null,f=3,k=!1,x=!1,N=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(b){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=b)r(d),P.sortIndex=P.expirationTime,t(a,P);else break;P=n(d)}}function g(b){if(N=!1,p(b),!x)if(n(a)!==null)x=!0,xr(w);else{var P=n(d);P!==null&&yr(g,P.startTime-b)}}function w(b,P){x=!1,N&&(N=!1,m(y),y=-1),k=!0;var F=f;try{for(p(P),v=n(a);v!==null&&(!(v.expirationTime>P)||b&&!ve());){var Q=v.callback;if(typeof Q=="function"){v.callback=null,f=v.priorityLevel;var Z=Q(v.expirationTime<=P);P=e.unstable_now(),typeof Z=="function"?v.callback=Z:v===n(a)&&r(a),p(P)}else r(a);v=n(a)}if(v!==null)var ti=!0;else{var xt=n(d);xt!==null&&yr(g,xt.startTime-P),ti=!1}return ti}finally{v=null,f=F,k=!1}}var E=!1,T=null,y=-1,z=5,R=-1;function ve(){return!(e.unstable_now()-R<z)}function un(){if(T!==null){var b=e.unstable_now();R=b;var P=!0;try{P=T(!0,b)}finally{P?dn():(E=!1,T=null)}}else E=!1}var dn;if(typeof u=="function")dn=function(){u(un)};else if(typeof MessageChannel<"u"){var Mo=new MessageChannel,lu=Mo.port2;Mo.port1.onmessage=un,dn=function(){lu.postMessage(null)}}else dn=function(){I(un,0)};function xr(b){T=b,E||(E=!0,dn())}function yr(b,P){y=I(function(){b(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,xr(w))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(b){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var F=f;f=P;try{return b()}finally{f=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,P){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var F=f;f=b;try{return P()}finally{f=F}},e.unstable_scheduleCallback=function(b,P,F){var Q=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Q+F:Q):F=Q,b){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=F+Z,b={id:h++,callback:P,priorityLevel:b,startTime:F,expirationTime:Z,sortIndex:-1},F>Q?(b.sortIndex=F,t(d,b),n(a)===null&&b===n(d)&&(N?(m(y),y=-1):N=!0,yr(g,F-Q))):(b.sortIndex=Z,t(a,b),x||k||(x=!0,xr(w))),b},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(b){var P=f;return function(){var F=f;f=P;try{return b.apply(this,arguments)}finally{f=F}}}})(oa);sa.exports=oa;var Fu=sa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru=S,ke=Fu;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var la=new Set,Ln={};function Rt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)la.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xr=Object.prototype.hasOwnProperty,Lu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oo={},Ho={};function Iu(e){return Xr.call(Ho,e)?!0:Xr.call(Oo,e)?!1:Lu.test(e)?Ho[e]=!0:(Oo[e]=!0,!1)}function Au(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zu(e,t,n,r){if(t===null||typeof t>"u"||Au(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,s,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qs=/[\-:]([a-z])/g;function Js(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qs,Js);ie[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qs,Js);ie[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qs,Js);ie[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xs(e,t,n,r){var s=ie.hasOwnProperty(t)?ie[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zu(t,n,s,r)&&(n=null),r||s===null?Iu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ke=Ru.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ri=Symbol.for("react.element"),At=Symbol.for("react.portal"),zt=Symbol.for("react.fragment"),Ys=Symbol.for("react.strict_mode"),Yr=Symbol.for("react.profiler"),aa=Symbol.for("react.provider"),ca=Symbol.for("react.context"),Gs=Symbol.for("react.forward_ref"),Gr=Symbol.for("react.suspense"),Kr=Symbol.for("react.suspense_list"),Ks=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ua=Symbol.for("react.offscreen"),Vo=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Vo&&e[Vo]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,Nr;function jn(e){if(Nr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nr=t&&t[1]||""}return`
`+Nr+e}var wr=!1;function Sr(e,t){if(!e||wr)return"";wr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=r.stack.split(`
`),l=s.length-1,c=o.length-1;1<=l&&0<=c&&s[l]!==o[c];)c--;for(;1<=l&&0<=c;l--,c--)if(s[l]!==o[c]){if(l!==1||c!==1)do if(l--,c--,0>c||s[l]!==o[c]){var a=`
`+s[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=c);break}}}finally{wr=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function Mu(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=Sr(e.type,!1),e;case 11:return e=Sr(e.type.render,!1),e;case 1:return e=Sr(e.type,!0),e;default:return""}}function Zr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zt:return"Fragment";case At:return"Portal";case Yr:return"Profiler";case Ys:return"StrictMode";case Gr:return"Suspense";case Kr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ca:return(e.displayName||"Context")+".Consumer";case aa:return(e._context.displayName||"Context")+".Provider";case Gs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ks:return t=e.displayName||null,t!==null?t:Zr(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Zr(e(t))}catch{}}return null}function Bu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zr(t);case 8:return t===Ys?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function da(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _u(e){var t=da(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function si(e){e._valueTracker||(e._valueTracker=_u(e))}function pa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=da(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qr(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $o(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ma(e,t){t=t.checked,t!=null&&Xs(e,"checked",t,!1)}function es(e,t){ma(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ts(e,t.type,n):t.hasOwnProperty("defaultValue")&&ts(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ts(e,t,n){(t!=="number"||Ri(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Jt(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(kn(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function ha(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Jo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function is(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,ga=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uu=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Uu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function va(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function xa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=va(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Ou=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rs(e,t){if(t){if(Ou[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ss(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var os=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ls=null,Xt=null,Yt=null;function Xo(e){if(e=qn(e)){if(typeof ls!="function")throw Error(j(280));var t=e.stateNode;t&&(t=lr(t),ls(e.stateNode,e.type,t))}}function ya(e){Xt?Yt?Yt.push(e):Yt=[e]:Xt=e}function ja(){if(Xt){var e=Xt,t=Yt;if(Yt=Xt=null,Xo(e),t)for(e=0;e<t.length;e++)Xo(t[e])}}function ka(e,t){return e(t)}function Na(){}var Cr=!1;function wa(e,t,n){if(Cr)return e(t,n);Cr=!0;try{return ka(e,t,n)}finally{Cr=!1,(Xt!==null||Yt!==null)&&(Na(),ja())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var r=lr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var as=!1;if(Je)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){as=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{as=!1}function Hu(e,t,n,r,s,o,l,c,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var Cn=!1,Li=null,Ii=!1,cs=null,Vu={onError:function(e){Cn=!0,Li=e}};function $u(e,t,n,r,s,o,l,c,a){Cn=!1,Li=null,Hu.apply(Vu,arguments)}function Wu(e,t,n,r,s,o,l,c,a){if($u.apply(this,arguments),Cn){if(Cn){var d=Li;Cn=!1,Li=null}else throw Error(j(198));Ii||(Ii=!0,cs=d)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yo(e){if(Lt(e)!==e)throw Error(j(188))}function Qu(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Yo(s),e;if(o===r)return Yo(s),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=o;else{for(var l=!1,c=s.child;c;){if(c===n){l=!0,n=s,r=o;break}if(c===r){l=!0,r=s,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,r=s;break}if(c===r){l=!0,r=o,n=s;break}c=c.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Ca(e){return e=Qu(e),e!==null?ba(e):null}function ba(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ba(e);if(t!==null)return t;e=e.sibling}return null}var Ea=ke.unstable_scheduleCallback,Go=ke.unstable_cancelCallback,Ju=ke.unstable_shouldYield,Xu=ke.unstable_requestPaint,J=ke.unstable_now,Yu=ke.unstable_getCurrentPriorityLevel,qs=ke.unstable_ImmediatePriority,Ta=ke.unstable_UserBlockingPriority,Ai=ke.unstable_NormalPriority,Gu=ke.unstable_LowPriority,Da=ke.unstable_IdlePriority,ir=null,Ue=null;function Ku(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(ir,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:ed,Zu=Math.log,qu=Math.LN2;function ed(e){return e>>>=0,e===0?32:31-(Zu(e)/qu|0)|0}var li=64,ai=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~s;c!==0?r=Nn(c):(o&=l,o!==0&&(r=Nn(o)))}else l=n&~s,l!==0?r=Nn(l):o!==0&&(r=Nn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),s=1<<n,r|=e[n],t&=~s;return r}function td(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ie(o),c=1<<l,a=s[l];a===-1?(!(c&n)||c&r)&&(s[l]=td(c,t)):a<=t&&(e.expiredLanes|=c),o&=~c}}function us(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pa(){var e=li;return li<<=1,!(li&4194240)&&(li=64),e}function br(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function id(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Ie(n),o=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~o}}function eo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var M=0;function Fa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ra,to,La,Ia,Aa,ds=!1,ci=[],st=null,ot=null,lt=null,zn=new Map,Mn=new Map,tt=[],rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ko(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":lt=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(t.pointerId)}}function hn(e,t,n,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},t!==null&&(t=qn(t),t!==null&&to(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function sd(e,t,n,r,s){switch(t){case"focusin":return st=hn(st,e,t,n,r,s),!0;case"dragenter":return ot=hn(ot,e,t,n,r,s),!0;case"mouseover":return lt=hn(lt,e,t,n,r,s),!0;case"pointerover":var o=s.pointerId;return zn.set(o,hn(zn.get(o)||null,e,t,n,r,s)),!0;case"gotpointercapture":return o=s.pointerId,Mn.set(o,hn(Mn.get(o)||null,e,t,n,r,s)),!0}return!1}function za(e){var t=Nt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=Sa(n),t!==null){e.blockedOn=t,Aa(e.priority,function(){La(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ni(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ps(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);os=r,n.target.dispatchEvent(r),os=null}else return t=qn(n),t!==null&&to(t),e.blockedOn=n,!1;t.shift()}return!0}function Zo(e,t,n){Ni(e)&&n.delete(t)}function od(){ds=!1,st!==null&&Ni(st)&&(st=null),ot!==null&&Ni(ot)&&(ot=null),lt!==null&&Ni(lt)&&(lt=null),zn.forEach(Zo),Mn.forEach(Zo)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,ds||(ds=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,od)))}function Bn(e){function t(s){return fn(s,e)}if(0<ci.length){fn(ci[0],e);for(var n=1;n<ci.length;n++){var r=ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&fn(st,e),ot!==null&&fn(ot,e),lt!==null&&fn(lt,e),zn.forEach(t),Mn.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)za(n),n.blockedOn===null&&tt.shift()}var Gt=Ke.ReactCurrentBatchConfig,Mi=!0;function ld(e,t,n,r){var s=M,o=Gt.transition;Gt.transition=null;try{M=1,no(e,t,n,r)}finally{M=s,Gt.transition=o}}function ad(e,t,n,r){var s=M,o=Gt.transition;Gt.transition=null;try{M=4,no(e,t,n,r)}finally{M=s,Gt.transition=o}}function no(e,t,n,r){if(Mi){var s=ps(e,t,n,r);if(s===null)zr(e,t,r,Bi,n),Ko(e,r);else if(sd(s,e,t,n,r))r.stopPropagation();else if(Ko(e,r),t&4&&-1<rd.indexOf(e)){for(;s!==null;){var o=qn(s);if(o!==null&&Ra(o),o=ps(e,t,n,r),o===null&&zr(e,t,r,Bi,n),o===s)break;s=o}s!==null&&r.stopPropagation()}else zr(e,t,r,null,n)}}var Bi=null;function ps(e,t,n,r){if(Bi=null,e=Zs(r),e=Nt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bi=e,null}function Ma(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yu()){case qs:return 1;case Ta:return 4;case Ai:case Gu:return 16;case Da:return 536870912;default:return 16}default:return 16}}var it=null,io=null,wi=null;function Ba(){if(wi)return wi;var e,t=io,n=t.length,r,s="value"in it?it.value:it.textContent,o=s.length;for(e=0;e<n&&t[e]===s[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===s[o-r];r++);return wi=s.slice(e,1<r?1-r:void 0)}function Si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function qo(){return!1}function we(e){function t(n,r,s,o,l){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ui:qo,this.isPropagationStopped=qo,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ro=we(an),Zn=$({},an,{view:0,detail:0}),cd=we(Zn),Er,Tr,gn,rr=$({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(Er=e.screenX-gn.screenX,Tr=e.screenY-gn.screenY):Tr=Er=0,gn=e),Er)},movementY:function(e){return"movementY"in e?e.movementY:Tr}}),el=we(rr),ud=$({},rr,{dataTransfer:0}),dd=we(ud),pd=$({},Zn,{relatedTarget:0}),Dr=we(pd),md=$({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=we(md),fd=$({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gd=we(fd),vd=$({},an,{data:0}),tl=we(vd),xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jd[e])?!!t[e]:!1}function so(){return kd}var Nd=$({},Zn,{key:function(e){if(e.key){var t=xd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wd=we(Nd),Sd=$({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nl=we(Sd),Cd=$({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),bd=we(Cd),Ed=$({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Td=we(Ed),Dd=$({},rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=we(Dd),Fd=[9,13,27,32],oo=Je&&"CompositionEvent"in window,bn=null;Je&&"documentMode"in document&&(bn=document.documentMode);var Rd=Je&&"TextEvent"in window&&!bn,_a=Je&&(!oo||bn&&8<bn&&11>=bn),il=String.fromCharCode(32),rl=!1;function Ua(e,t){switch(e){case"keyup":return Fd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mt=!1;function Ld(e,t){switch(e){case"compositionend":return Oa(t);case"keypress":return t.which!==32?null:(rl=!0,il);case"textInput":return e=t.data,e===il&&rl?null:e;default:return null}}function Id(e,t){if(Mt)return e==="compositionend"||!oo&&Ua(e,t)?(e=Ba(),wi=io=it=null,Mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _a&&t.locale!=="ko"?null:t.data;default:return null}}var Ad={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ad[e.type]:t==="textarea"}function Ha(e,t,n,r){ya(r),t=_i(t,"onChange"),0<t.length&&(n=new ro("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var En=null,_n=null;function zd(e){qa(e,0)}function sr(e){var t=Ut(e);if(pa(t))return e}function Md(e,t){if(e==="change")return t}var Va=!1;if(Je){var Pr;if(Je){var Fr="oninput"in document;if(!Fr){var ol=document.createElement("div");ol.setAttribute("oninput","return;"),Fr=typeof ol.oninput=="function"}Pr=Fr}else Pr=!1;Va=Pr&&(!document.documentMode||9<document.documentMode)}function ll(){En&&(En.detachEvent("onpropertychange",$a),_n=En=null)}function $a(e){if(e.propertyName==="value"&&sr(_n)){var t=[];Ha(t,_n,e,Zs(e)),wa(zd,t)}}function Bd(e,t,n){e==="focusin"?(ll(),En=t,_n=n,En.attachEvent("onpropertychange",$a)):e==="focusout"&&ll()}function _d(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sr(_n)}function Ud(e,t){if(e==="click")return sr(t)}function Od(e,t){if(e==="input"||e==="change")return sr(t)}function Hd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:Hd;function Un(e,t){if(ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Xr.call(t,s)||!ze(e[s],t[s]))return!1}return!0}function al(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cl(e,t){var n=al(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=al(n)}}function Wa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qa(){for(var e=window,t=Ri();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ri(e.document)}return t}function lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vd(e){var t=Qa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wa(n.ownerDocument.documentElement,n)){if(r!==null&&lo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=cl(n,o);var l=cl(n,r);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $d=Je&&"documentMode"in document&&11>=document.documentMode,Bt=null,ms=null,Tn=null,hs=!1;function ul(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hs||Bt==null||Bt!==Ri(r)||(r=Bt,"selectionStart"in r&&lo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&Un(Tn,r)||(Tn=r,r=_i(ms,"onSelect"),0<r.length&&(t=new ro("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bt)))}function di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _t={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},Rr={},Ja={};Je&&(Ja=document.createElement("div").style,"AnimationEvent"in window||(delete _t.animationend.animation,delete _t.animationiteration.animation,delete _t.animationstart.animation),"TransitionEvent"in window||delete _t.transitionend.transition);function or(e){if(Rr[e])return Rr[e];if(!_t[e])return e;var t=_t[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ja)return Rr[e]=t[n];return e}var Xa=or("animationend"),Ya=or("animationiteration"),Ga=or("animationstart"),Ka=or("transitionend"),Za=new Map,dl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){Za.set(e,t),Rt(t,[e])}for(var Lr=0;Lr<dl.length;Lr++){var Ir=dl[Lr],Wd=Ir.toLowerCase(),Qd=Ir[0].toUpperCase()+Ir.slice(1);ft(Wd,"on"+Qd)}ft(Xa,"onAnimationEnd");ft(Ya,"onAnimationIteration");ft(Ga,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(Ka,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jd=new Set("cancel close invalid load scroll toggle".split(" ").concat(wn));function pl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wu(r,t,void 0,e),e.currentTarget=null}function qa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],a=c.instance,d=c.currentTarget;if(c=c.listener,a!==o&&s.isPropagationStopped())break e;pl(s,c,d),o=a}else for(l=0;l<r.length;l++){if(c=r[l],a=c.instance,d=c.currentTarget,c=c.listener,a!==o&&s.isPropagationStopped())break e;pl(s,c,d),o=a}}}if(Ii)throw e=cs,Ii=!1,cs=null,e}function _(e,t){var n=t[ys];n===void 0&&(n=t[ys]=new Set);var r=e+"__bubble";n.has(r)||(ec(t,e,2,!1),n.add(r))}function Ar(e,t,n){var r=0;t&&(r|=4),ec(n,e,r,t)}var pi="_reactListening"+Math.random().toString(36).slice(2);function On(e){if(!e[pi]){e[pi]=!0,la.forEach(function(n){n!=="selectionchange"&&(Jd.has(n)||Ar(n,!1,e),Ar(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pi]||(t[pi]=!0,Ar("selectionchange",!1,t))}}function ec(e,t,n,r){switch(Ma(t)){case 1:var s=ld;break;case 4:s=ad;break;default:s=no}n=s.bind(null,t,n,e),s=void 0,!as||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function zr(e,t,n,r,s){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;l=l.return}for(;c!==null;){if(l=Nt(c),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}c=c.parentNode}}r=r.return}wa(function(){var d=o,h=Zs(n),v=[];e:{var f=Za.get(e);if(f!==void 0){var k=ro,x=e;switch(e){case"keypress":if(Si(n)===0)break e;case"keydown":case"keyup":k=wd;break;case"focusin":x="focus",k=Dr;break;case"focusout":x="blur",k=Dr;break;case"beforeblur":case"afterblur":k=Dr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=el;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=bd;break;case Xa:case Ya:case Ga:k=hd;break;case Ka:k=Td;break;case"scroll":k=cd;break;case"wheel":k=Pd;break;case"copy":case"cut":case"paste":k=gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=nl}var N=(t&4)!==0,I=!N&&e==="scroll",m=N?f!==null?f+"Capture":null:f;N=[];for(var u=d,p;u!==null;){p=u;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,m!==null&&(g=An(u,m),g!=null&&N.push(Hn(u,g,p)))),I)break;u=u.return}0<N.length&&(f=new k(f,x,null,n,h),v.push({event:f,listeners:N}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",f&&n!==os&&(x=n.relatedTarget||n.fromElement)&&(Nt(x)||x[Xe]))break e;if((k||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=d,x=x?Nt(x):null,x!==null&&(I=Lt(x),x!==I||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=d),k!==x)){if(N=el,g="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(N=nl,g="onPointerLeave",m="onPointerEnter",u="pointer"),I=k==null?f:Ut(k),p=x==null?f:Ut(x),f=new N(g,u+"leave",k,n,h),f.target=I,f.relatedTarget=p,g=null,Nt(h)===d&&(N=new N(m,u+"enter",x,n,h),N.target=p,N.relatedTarget=I,g=N),I=g,k&&x)t:{for(N=k,m=x,u=0,p=N;p;p=It(p))u++;for(p=0,g=m;g;g=It(g))p++;for(;0<u-p;)N=It(N),u--;for(;0<p-u;)m=It(m),p--;for(;u--;){if(N===m||m!==null&&N===m.alternate)break t;N=It(N),m=It(m)}N=null}else N=null;k!==null&&ml(v,f,k,N,!1),x!==null&&I!==null&&ml(v,I,x,N,!0)}}e:{if(f=d?Ut(d):window,k=f.nodeName&&f.nodeName.toLowerCase(),k==="select"||k==="input"&&f.type==="file")var w=Md;else if(sl(f))if(Va)w=Od;else{w=_d;var E=Bd}else(k=f.nodeName)&&k.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=Ud);if(w&&(w=w(e,d))){Ha(v,w,n,h);break e}E&&E(e,f,d),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&ts(f,"number",f.value)}switch(E=d?Ut(d):window,e){case"focusin":(sl(E)||E.contentEditable==="true")&&(Bt=E,ms=d,Tn=null);break;case"focusout":Tn=ms=Bt=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,ul(v,n,h);break;case"selectionchange":if($d)break;case"keydown":case"keyup":ul(v,n,h)}var T;if(oo)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Mt?Ua(e,n)&&(y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(_a&&n.locale!=="ko"&&(Mt||y!=="onCompositionStart"?y==="onCompositionEnd"&&Mt&&(T=Ba()):(it=h,io="value"in it?it.value:it.textContent,Mt=!0)),E=_i(d,y),0<E.length&&(y=new tl(y,e,null,n,h),v.push({event:y,listeners:E}),T?y.data=T:(T=Oa(n),T!==null&&(y.data=T)))),(T=Rd?Ld(e,n):Id(e,n))&&(d=_i(d,"onBeforeInput"),0<d.length&&(h=new tl("onBeforeInput","beforeinput",null,n,h),v.push({event:h,listeners:d}),h.data=T))}qa(v,t)})}function Hn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _i(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=An(e,n),o!=null&&r.unshift(Hn(e,o,s)),o=An(e,t),o!=null&&r.push(Hn(e,o,s))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ml(e,t,n,r,s){for(var o=t._reactName,l=[];n!==null&&n!==r;){var c=n,a=c.alternate,d=c.stateNode;if(a!==null&&a===r)break;c.tag===5&&d!==null&&(c=d,s?(a=An(n,o),a!=null&&l.unshift(Hn(n,a,c))):s||(a=An(n,o),a!=null&&l.push(Hn(n,a,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Xd=/\r\n?/g,Yd=/\u0000|\uFFFD/g;function hl(e){return(typeof e=="string"?e:""+e).replace(Xd,`
`).replace(Yd,"")}function mi(e,t,n){if(t=hl(t),hl(e)!==t&&n)throw Error(j(425))}function Ui(){}var fs=null,gs=null;function vs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xs=typeof setTimeout=="function"?setTimeout:void 0,Gd=typeof clearTimeout=="function"?clearTimeout:void 0,fl=typeof Promise=="function"?Promise:void 0,Kd=typeof queueMicrotask=="function"?queueMicrotask:typeof fl<"u"?function(e){return fl.resolve(null).then(e).catch(Zd)}:xs;function Zd(e){setTimeout(function(){throw e})}function Mr(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Bn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Bn(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),_e="__reactFiber$"+cn,Vn="__reactProps$"+cn,Xe="__reactContainer$"+cn,ys="__reactEvents$"+cn,qd="__reactListeners$"+cn,ep="__reactHandles$"+cn;function Nt(e){var t=e[_e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[_e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gl(e);e!==null;){if(n=e[_e])return n;e=gl(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[_e]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function lr(e){return e[Vn]||null}var js=[],Ot=-1;function gt(e){return{current:e}}function U(e){0>Ot||(e.current=js[Ot],js[Ot]=null,Ot--)}function B(e,t){Ot++,js[Ot]=e.current,e.current=t}var ht={},le=gt(ht),he=gt(!1),Et=ht;function en(e,t){var n=e.type.contextTypes;if(!n)return ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function fe(e){return e=e.childContextTypes,e!=null}function Oi(){U(he),U(le)}function vl(e,t,n){if(le.current!==ht)throw Error(j(168));B(le,t),B(he,n)}function tc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(j(108,Bu(e)||"Unknown",s));return $({},n,r)}function Hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ht,Et=le.current,B(le,e),B(he,he.current),!0}function xl(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=tc(e,t,Et),r.__reactInternalMemoizedMergedChildContext=e,U(he),U(le),B(le,e)):U(he),B(he,n)}var Ve=null,ar=!1,Br=!1;function nc(e){Ve===null?Ve=[e]:Ve.push(e)}function tp(e){ar=!0,nc(e)}function vt(){if(!Br&&Ve!==null){Br=!0;var e=0,t=M;try{var n=Ve;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,ar=!1}catch(s){throw Ve!==null&&(Ve=Ve.slice(e+1)),Ea(qs,vt),s}finally{M=t,Br=!1}}return null}var Ht=[],Vt=0,Vi=null,$i=0,Se=[],Ce=0,Tt=null,$e=1,We="";function jt(e,t){Ht[Vt++]=$i,Ht[Vt++]=Vi,Vi=e,$i=t}function ic(e,t,n){Se[Ce++]=$e,Se[Ce++]=We,Se[Ce++]=Tt,Tt=e;var r=$e;e=We;var s=32-Ie(r)-1;r&=~(1<<s),n+=1;var o=32-Ie(t)+s;if(30<o){var l=s-s%5;o=(r&(1<<l)-1).toString(32),r>>=l,s-=l,$e=1<<32-Ie(t)+s|n<<s|r,We=o+e}else $e=1<<o|n<<s|r,We=e}function ao(e){e.return!==null&&(jt(e,1),ic(e,1,0))}function co(e){for(;e===Vi;)Vi=Ht[--Vt],Ht[Vt]=null,$i=Ht[--Vt],Ht[Vt]=null;for(;e===Tt;)Tt=Se[--Ce],Se[Ce]=null,We=Se[--Ce],Se[Ce]=null,$e=Se[--Ce],Se[Ce]=null}var je=null,ye=null,O=!1,Le=null;function rc(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,ye=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:$e,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,ye=null,!0):!1;default:return!1}}function ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ns(e){if(O){var t=ye;if(t){var n=t;if(!yl(e,t)){if(ks(e))throw Error(j(418));t=at(n.nextSibling);var r=je;t&&yl(e,t)?rc(r,n):(e.flags=e.flags&-4097|2,O=!1,je=e)}}else{if(ks(e))throw Error(j(418));e.flags=e.flags&-4097|2,O=!1,je=e}}}function jl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function hi(e){if(e!==je)return!1;if(!O)return jl(e),O=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vs(e.type,e.memoizedProps)),t&&(t=ye)){if(ks(e))throw sc(),Error(j(418));for(;t;)rc(e,t),t=at(t.nextSibling)}if(jl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=je?at(e.stateNode.nextSibling):null;return!0}function sc(){for(var e=ye;e;)e=at(e.nextSibling)}function tn(){ye=je=null,O=!1}function uo(e){Le===null?Le=[e]:Le.push(e)}var np=Ke.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var s=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var c=s.refs;l===null?delete c[o]:c[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function fi(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kl(e){var t=e._init;return t(e._payload)}function oc(e){function t(m,u){if(e){var p=m.deletions;p===null?(m.deletions=[u],m.flags|=16):p.push(u)}}function n(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function r(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function s(m,u){return m=pt(m,u),m.index=0,m.sibling=null,m}function o(m,u,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<u?(m.flags|=2,u):p):(m.flags|=2,u)):(m.flags|=1048576,u)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,u,p,g){return u===null||u.tag!==6?(u=Wr(p,m.mode,g),u.return=m,u):(u=s(u,p),u.return=m,u)}function a(m,u,p,g){var w=p.type;return w===zt?h(m,u,p.props.children,g,p.key):u!==null&&(u.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===qe&&kl(w)===u.type)?(g=s(u,p.props),g.ref=vn(m,u,p),g.return=m,g):(g=Fi(p.type,p.key,p.props,null,m.mode,g),g.ref=vn(m,u,p),g.return=m,g)}function d(m,u,p,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Qr(p,m.mode,g),u.return=m,u):(u=s(u,p.children||[]),u.return=m,u)}function h(m,u,p,g,w){return u===null||u.tag!==7?(u=bt(p,m.mode,g,w),u.return=m,u):(u=s(u,p),u.return=m,u)}function v(m,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Wr(""+u,m.mode,p),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ri:return p=Fi(u.type,u.key,u.props,null,m.mode,p),p.ref=vn(m,null,u),p.return=m,p;case At:return u=Qr(u,m.mode,p),u.return=m,u;case qe:var g=u._init;return v(m,g(u._payload),p)}if(kn(u)||pn(u))return u=bt(u,m.mode,p,null),u.return=m,u;fi(m,u)}return null}function f(m,u,p,g){var w=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return w!==null?null:c(m,u,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ri:return p.key===w?a(m,u,p,g):null;case At:return p.key===w?d(m,u,p,g):null;case qe:return w=p._init,f(m,u,w(p._payload),g)}if(kn(p)||pn(p))return w!==null?null:h(m,u,p,g,null);fi(m,p)}return null}function k(m,u,p,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return m=m.get(p)||null,c(u,m,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ri:return m=m.get(g.key===null?p:g.key)||null,a(u,m,g,w);case At:return m=m.get(g.key===null?p:g.key)||null,d(u,m,g,w);case qe:var E=g._init;return k(m,u,p,E(g._payload),w)}if(kn(g)||pn(g))return m=m.get(p)||null,h(u,m,g,w,null);fi(u,g)}return null}function x(m,u,p,g){for(var w=null,E=null,T=u,y=u=0,z=null;T!==null&&y<p.length;y++){T.index>y?(z=T,T=null):z=T.sibling;var R=f(m,T,p[y],g);if(R===null){T===null&&(T=z);break}e&&T&&R.alternate===null&&t(m,T),u=o(R,u,y),E===null?w=R:E.sibling=R,E=R,T=z}if(y===p.length)return n(m,T),O&&jt(m,y),w;if(T===null){for(;y<p.length;y++)T=v(m,p[y],g),T!==null&&(u=o(T,u,y),E===null?w=T:E.sibling=T,E=T);return O&&jt(m,y),w}for(T=r(m,T);y<p.length;y++)z=k(T,m,y,p[y],g),z!==null&&(e&&z.alternate!==null&&T.delete(z.key===null?y:z.key),u=o(z,u,y),E===null?w=z:E.sibling=z,E=z);return e&&T.forEach(function(ve){return t(m,ve)}),O&&jt(m,y),w}function N(m,u,p,g){var w=pn(p);if(typeof w!="function")throw Error(j(150));if(p=w.call(p),p==null)throw Error(j(151));for(var E=w=null,T=u,y=u=0,z=null,R=p.next();T!==null&&!R.done;y++,R=p.next()){T.index>y?(z=T,T=null):z=T.sibling;var ve=f(m,T,R.value,g);if(ve===null){T===null&&(T=z);break}e&&T&&ve.alternate===null&&t(m,T),u=o(ve,u,y),E===null?w=ve:E.sibling=ve,E=ve,T=z}if(R.done)return n(m,T),O&&jt(m,y),w;if(T===null){for(;!R.done;y++,R=p.next())R=v(m,R.value,g),R!==null&&(u=o(R,u,y),E===null?w=R:E.sibling=R,E=R);return O&&jt(m,y),w}for(T=r(m,T);!R.done;y++,R=p.next())R=k(T,m,y,R.value,g),R!==null&&(e&&R.alternate!==null&&T.delete(R.key===null?y:R.key),u=o(R,u,y),E===null?w=R:E.sibling=R,E=R);return e&&T.forEach(function(un){return t(m,un)}),O&&jt(m,y),w}function I(m,u,p,g){if(typeof p=="object"&&p!==null&&p.type===zt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ri:e:{for(var w=p.key,E=u;E!==null;){if(E.key===w){if(w=p.type,w===zt){if(E.tag===7){n(m,E.sibling),u=s(E,p.props.children),u.return=m,m=u;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===qe&&kl(w)===E.type){n(m,E.sibling),u=s(E,p.props),u.ref=vn(m,E,p),u.return=m,m=u;break e}n(m,E);break}else t(m,E);E=E.sibling}p.type===zt?(u=bt(p.props.children,m.mode,g,p.key),u.return=m,m=u):(g=Fi(p.type,p.key,p.props,null,m.mode,g),g.ref=vn(m,u,p),g.return=m,m=g)}return l(m);case At:e:{for(E=p.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(m,u.sibling),u=s(u,p.children||[]),u.return=m,m=u;break e}else{n(m,u);break}else t(m,u);u=u.sibling}u=Qr(p,m.mode,g),u.return=m,m=u}return l(m);case qe:return E=p._init,I(m,u,E(p._payload),g)}if(kn(p))return x(m,u,p,g);if(pn(p))return N(m,u,p,g);fi(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(m,u.sibling),u=s(u,p),u.return=m,m=u):(n(m,u),u=Wr(p,m.mode,g),u.return=m,m=u),l(m)):n(m,u)}return I}var nn=oc(!0),lc=oc(!1),Wi=gt(null),Qi=null,$t=null,po=null;function mo(){po=$t=Qi=null}function ho(e){var t=Wi.current;U(Wi),e._currentValue=t}function ws(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kt(e,t){Qi=e,po=$t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:t,next:null},$t===null){if(Qi===null)throw Error(j(308));$t=e,Qi.dependencies={lanes:0,firstContext:e}}else $t=$t.next=e;return t}var wt=null;function fo(e){wt===null?wt=[e]:wt.push(e)}function ac(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,fo(t)):(n.next=s.next,s.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Ye(e,n)}return s=r.interleaved,s===null?(t.next=t,fo(r)):(t.next=s.next,s.next=t),r.interleaved=t,Ye(e,n)}function Ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eo(e,n)}}function Nl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?s=o=t:o=o.next=t}else s=o=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ji(e,t,n,r){var s=e.updateQueue;et=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var a=c,d=a.next;a.next=null,l===null?o=d:l.next=d,l=a;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==l&&(c===null?h.firstBaseUpdate=d:c.next=d,h.lastBaseUpdate=a))}if(o!==null){var v=s.baseState;l=0,h=d=a=null,c=o;do{var f=c.lane,k=c.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:k,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var x=e,N=c;switch(f=t,k=n,N.tag){case 1:if(x=N.payload,typeof x=="function"){v=x.call(k,v,f);break e}v=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=N.payload,f=typeof x=="function"?x.call(k,v,f):x,f==null)break e;v=$({},v,f);break e;case 2:et=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[c]:f.push(c))}else k={eventTime:k,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(d=h=k,a=v):h=h.next=k,l|=f;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;f=c,c=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(1);if(h===null&&(a=v),s.baseState=a,s.firstBaseUpdate=d,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);Pt|=l,e.lanes=l,e.memoizedState=v}}function wl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var ei={},Oe=gt(ei),$n=gt(ei),Wn=gt(ei);function St(e){if(e===ei)throw Error(j(174));return e}function vo(e,t){switch(B(Wn,t),B($n,e),B(Oe,ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:is(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=is(t,e)}U(Oe),B(Oe,t)}function rn(){U(Oe),U($n),U(Wn)}function uc(e){St(Wn.current);var t=St(Oe.current),n=is(t,e.type);t!==n&&(B($n,e),B(Oe,n))}function xo(e){$n.current===e&&(U(Oe),U($n))}var H=gt(0);function Xi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _r=[];function yo(){for(var e=0;e<_r.length;e++)_r[e]._workInProgressVersionPrimary=null;_r.length=0}var bi=Ke.ReactCurrentDispatcher,Ur=Ke.ReactCurrentBatchConfig,Dt=0,V=null,Y=null,q=null,Yi=!1,Dn=!1,Qn=0,ip=0;function re(){throw Error(j(321))}function jo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ze(e[n],t[n]))return!1;return!0}function ko(e,t,n,r,s,o){if(Dt=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bi.current=e===null||e.memoizedState===null?lp:ap,e=n(r,s),Dn){o=0;do{if(Dn=!1,Qn=0,25<=o)throw Error(j(301));o+=1,q=Y=null,t.updateQueue=null,bi.current=cp,e=n(r,s)}while(Dn)}if(bi.current=Gi,t=Y!==null&&Y.next!==null,Dt=0,q=Y=V=null,Yi=!1,t)throw Error(j(300));return e}function No(){var e=Qn!==0;return Qn=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=e:q=q.next=e,q}function De(){if(Y===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=q===null?V.memoizedState:q.next;if(t!==null)q=t,Y=e;else{if(e===null)throw Error(j(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},q===null?V.memoizedState=q=e:q=q.next=e}return q}function Jn(e,t){return typeof t=="function"?t(e):t}function Or(e){var t=De(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Y,s=r.baseQueue,o=n.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}r.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,r=r.baseState;var c=l=null,a=null,d=o;do{var h=d.lane;if((Dt&h)===h)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var v={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(c=a=v,l=r):a=a.next=v,V.lanes|=h,Pt|=h}d=d.next}while(d!==null&&d!==o);a===null?l=r:a.next=c,ze(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do o=s.lane,V.lanes|=o,Pt|=o,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hr(e){var t=De(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,o=t.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do o=e(o,l.action),l=l.next;while(l!==s);ze(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function dc(){}function pc(e,t){var n=V,r=De(),s=t(),o=!ze(r.memoizedState,s);if(o&&(r.memoizedState=s,me=!0),r=r.queue,wo(fc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,Xn(9,hc.bind(null,n,r,s,t),void 0,null),ee===null)throw Error(j(349));Dt&30||mc(n,t,s)}return s}function mc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hc(e,t,n,r){t.value=n,t.getSnapshot=r,gc(t)&&vc(e)}function fc(e,t,n){return n(function(){gc(t)&&vc(e)})}function gc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ze(e,n)}catch{return!0}}function vc(e){var t=Ye(e,1);t!==null&&Ae(t,e,1,-1)}function Sl(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=op.bind(null,V,e),[t.memoizedState,e]}function Xn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xc(){return De().memoizedState}function Ei(e,t,n,r){var s=Be();V.flags|=e,s.memoizedState=Xn(1|t,n,void 0,r===void 0?null:r)}function cr(e,t,n,r){var s=De();r=r===void 0?null:r;var o=void 0;if(Y!==null){var l=Y.memoizedState;if(o=l.destroy,r!==null&&jo(r,l.deps)){s.memoizedState=Xn(t,n,o,r);return}}V.flags|=e,s.memoizedState=Xn(1|t,n,o,r)}function Cl(e,t){return Ei(8390656,8,e,t)}function wo(e,t){return cr(2048,8,e,t)}function yc(e,t){return cr(4,2,e,t)}function jc(e,t){return cr(4,4,e,t)}function kc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nc(e,t,n){return n=n!=null?n.concat([e]):null,cr(4,4,kc.bind(null,t,e),n)}function So(){}function wc(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sc(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cc(e,t,n){return Dt&21?(ze(n,t)||(n=Pa(),V.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function rp(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Ur.transition;Ur.transition={};try{e(!1),t()}finally{M=n,Ur.transition=r}}function bc(){return De().memoizedState}function sp(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ec(e))Tc(t,n);else if(n=ac(e,t,n,r),n!==null){var s=ce();Ae(n,e,r,s),Dc(n,t,r)}}function op(e,t,n){var r=dt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ec(e))Tc(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,c=o(l,n);if(s.hasEagerState=!0,s.eagerState=c,ze(c,l)){var a=t.interleaved;a===null?(s.next=s,fo(t)):(s.next=a.next,a.next=s),t.interleaved=s;return}}catch{}finally{}n=ac(e,t,s,r),n!==null&&(s=ce(),Ae(n,e,r,s),Dc(n,t,r))}}function Ec(e){var t=e.alternate;return e===V||t!==null&&t===V}function Tc(e,t){Dn=Yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eo(e,n)}}var Gi={readContext:Te,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},lp={readContext:Te,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:Cl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ei(4194308,4,kc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ei(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ei(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sp.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:Sl,useDebugValue:So,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=Sl(!1),t=e[0];return e=rp.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,s=Be();if(O){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ee===null)throw Error(j(349));Dt&30||mc(r,t,n)}s.memoizedState=n;var o={value:n,getSnapshot:t};return s.queue=o,Cl(fc.bind(null,r,o,e),[e]),r.flags|=2048,Xn(9,hc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Be(),t=ee.identifierPrefix;if(O){var n=We,r=$e;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ip++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ap={readContext:Te,useCallback:wc,useContext:Te,useEffect:wo,useImperativeHandle:Nc,useInsertionEffect:yc,useLayoutEffect:jc,useMemo:Sc,useReducer:Or,useRef:xc,useState:function(){return Or(Jn)},useDebugValue:So,useDeferredValue:function(e){var t=De();return Cc(t,Y.memoizedState,e)},useTransition:function(){var e=Or(Jn)[0],t=De().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:pc,useId:bc,unstable_isNewReconciler:!1},cp={readContext:Te,useCallback:wc,useContext:Te,useEffect:wo,useImperativeHandle:Nc,useInsertionEffect:yc,useLayoutEffect:jc,useMemo:Sc,useReducer:Hr,useRef:xc,useState:function(){return Hr(Jn)},useDebugValue:So,useDeferredValue:function(e){var t=De();return Y===null?t.memoizedState=e:Cc(t,Y.memoizedState,e)},useTransition:function(){var e=Hr(Jn)[0],t=De().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:pc,useId:bc,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ur={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),s=dt(e),o=Qe(r,s);o.payload=t,n!=null&&(o.callback=n),t=ct(e,o,s),t!==null&&(Ae(t,e,s,r),Ci(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),s=dt(e),o=Qe(r,s);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ct(e,o,s),t!==null&&(Ae(t,e,s,r),Ci(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=dt(e),s=Qe(n,r);s.tag=2,t!=null&&(s.callback=t),t=ct(e,s,r),t!==null&&(Ae(t,e,r,n),Ci(t,e,r))}};function bl(e,t,n,r,s,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(s,o):!0}function Pc(e,t,n){var r=!1,s=ht,o=t.contextType;return typeof o=="object"&&o!==null?o=Te(o):(s=fe(t)?Et:le.current,r=t.contextTypes,o=(r=r!=null)?en(e,s):ht),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ur,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function El(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ur.enqueueReplaceState(t,t.state,null)}function Cs(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},go(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=Te(o):(o=fe(t)?Et:le.current,s.context=en(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ss(e,t,o,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ur.enqueueReplaceState(s,s.state,null),Ji(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function sn(e,t){try{var n="",r=t;do n+=Mu(r),r=r.return;while(r);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function Vr(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var up=typeof WeakMap=="function"?WeakMap:Map;function Fc(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zi||(Zi=!0,zs=r),bs(e,t)},n}function Rc(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){bs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bs(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Tl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new up;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Sp.bind(null,e,t,n),t.then(e,e))}function Dl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pl(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var dp=Ke.ReactCurrentOwner,me=!1;function ae(e,t,n,r){t.child=e===null?lc(t,null,n,r):nn(t,e.child,n,r)}function Fl(e,t,n,r,s){n=n.render;var o=t.ref;return Kt(t,s),r=ko(e,t,n,r,o,s),n=No(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ge(e,t,s)):(O&&n&&ao(t),t.flags|=1,ae(e,t,r,s),t.child)}function Rl(e,t,n,r,s){if(e===null){var o=n.type;return typeof o=="function"&&!Ro(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Lc(e,t,o,r,s)):(e=Fi(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(l,r)&&e.ref===t.ref)return Ge(e,t,s)}return t.flags|=1,e=pt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,r,s){if(e!==null){var o=e.memoizedProps;if(Un(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&s)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Ge(e,t,s)}return Es(e,t,n,r,s)}function Ic(e,t,n){var r=t.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Qt,xe),xe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Qt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(Qt,xe),xe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(Qt,xe),xe|=r;return ae(e,t,s,n),t.child}function Ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Es(e,t,n,r,s){var o=fe(n)?Et:le.current;return o=en(t,o),Kt(t,s),n=ko(e,t,n,r,o,s),r=No(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ge(e,t,s)):(O&&r&&ao(t),t.flags|=1,ae(e,t,n,s),t.child)}function Ll(e,t,n,r,s){if(fe(n)){var o=!0;Hi(t)}else o=!1;if(Kt(t,s),t.stateNode===null)Ti(e,t),Pc(t,n,r),Cs(t,n,r,s),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var a=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Te(d):(d=fe(n)?Et:le.current,d=en(t,d));var h=n.getDerivedStateFromProps,v=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||a!==d)&&El(t,l,r,d),et=!1;var f=t.memoizedState;l.state=f,Ji(t,r,l,s),a=t.memoizedState,c!==r||f!==a||he.current||et?(typeof h=="function"&&(Ss(t,n,h,r),a=t.memoizedState),(c=et||bl(t,n,c,r,f,a,d))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=d,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,cc(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:Fe(t.type,c),l.props=d,v=t.pendingProps,f=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Te(a):(a=fe(n)?Et:le.current,a=en(t,a));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==v||f!==a)&&El(t,l,r,a),et=!1,f=t.memoizedState,l.state=f,Ji(t,r,l,s);var x=t.memoizedState;c!==v||f!==x||he.current||et?(typeof k=="function"&&(Ss(t,n,k,r),x=t.memoizedState),(d=et||bl(t,n,d,r,f,x,a)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=a,r=d):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ts(e,t,n,r,o,s)}function Ts(e,t,n,r,s,o){Ac(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return s&&xl(t,n,!1),Ge(e,t,o);r=t.stateNode,dp.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=nn(t,e.child,null,o),t.child=nn(t,null,c,o)):ae(e,t,c,o),t.memoizedState=r.state,s&&xl(t,n,!0),t.child}function zc(e){var t=e.stateNode;t.pendingContext?vl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vl(e,t.context,!1),vo(e,t.containerInfo)}function Il(e,t,n,r,s){return tn(),uo(s),t.flags|=256,ae(e,t,n,r),t.child}var Ds={dehydrated:null,treeContext:null,retryLane:0};function Ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mc(e,t,n){var r=t.pendingProps,s=H.current,o=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(s&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),B(H,s&1),e===null)return Ns(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=mr(l,r,0,null),e=bt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ps(n),t.memoizedState=Ds,e):Co(t,l));if(s=e.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return pp(e,t,l,r,c,s,n);if(o){o=r.fallback,l=t.mode,s=e.child,c=s.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=pt(s,a),r.subtreeFlags=s.subtreeFlags&14680064),c!==null?o=pt(c,o):(o=bt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ps(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ds,r}return o=e.child,e=o.sibling,r=pt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Co(e,t){return t=mr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gi(e,t,n,r){return r!==null&&uo(r),nn(t,e.child,null,n),e=Co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pp(e,t,n,r,s,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Vr(Error(j(422))),gi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,s=t.mode,r=mr({mode:"visible",children:r.children},s,0,null),o=bt(o,s,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&nn(t,e.child,null,l),t.child.memoizedState=Ps(l),t.memoizedState=Ds,o);if(!(t.mode&1))return gi(e,t,l,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var c=r.dgst;return r=c,o=Error(j(419)),r=Vr(o,r,void 0),gi(e,t,l,r)}if(c=(l&e.childLanes)!==0,me||c){if(r=ee,r!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|l)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Ye(e,s),Ae(r,e,s,-1))}return Fo(),r=Vr(Error(j(421))),gi(e,t,l,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Cp.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,ye=at(s.nextSibling),je=t,O=!0,Le=null,e!==null&&(Se[Ce++]=$e,Se[Ce++]=We,Se[Ce++]=Tt,$e=e.id,We=e.overflow,Tt=t),t=Co(t,r.children),t.flags|=4096,t)}function Al(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ws(e.return,t,n)}function $r(e,t,n,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=s)}function Bc(e,t,n){var r=t.pendingProps,s=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Al(e,n,t);else if(e.tag===19)Al(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(H,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Xi(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),$r(t,!1,s,n,o);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Xi(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}$r(t,!0,n,null,o);break;case"together":$r(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ti(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mp(e,t,n){switch(t.tag){case 3:zc(t),tn();break;case 5:uc(t);break;case 1:fe(t.type)&&Hi(t);break;case 4:vo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;B(Wi,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Mc(e,t,n):(B(H,H.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);B(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),B(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Ic(e,t,n)}return Ge(e,t,n)}var _c,Fs,Uc,Oc;_c=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fs=function(){};Uc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,St(Oe.current);var o=null;switch(n){case"input":s=qr(e,s),r=qr(e,r),o=[];break;case"select":s=$({},s,{value:void 0}),r=$({},r,{value:void 0}),o=[];break;case"textarea":s=ns(e,s),r=ns(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ui)}rs(n,r);var l;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var c=s[d];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ln.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var a=r[d];if(c=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&a!==c&&(a!=null||c!=null))if(d==="style")if(c){for(l in c)!c.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&c[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,c=c?c.__html:void 0,a!=null&&c!==a&&(o=o||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&_("scroll",e),o||c===a||(o=[])):(o=o||[]).push(d,a))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Oc=function(e,t,n,r){n!==r&&(t.flags|=4)};function xn(e,t){if(!O)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hp(e,t,n){var r=t.pendingProps;switch(co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return fe(t.type)&&Oi(),se(t),null;case 3:return r=t.stateNode,rn(),U(he),U(le),yo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(_s(Le),Le=null))),Fs(e,t),se(t),null;case 5:xo(t);var s=St(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Uc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return se(t),null}if(e=St(Oe.current),hi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[_e]=t,r[Vn]=o,e=(t.mode&1)!==0,n){case"dialog":_("cancel",r),_("close",r);break;case"iframe":case"object":case"embed":_("load",r);break;case"video":case"audio":for(s=0;s<wn.length;s++)_(wn[s],r);break;case"source":_("error",r);break;case"img":case"image":case"link":_("error",r),_("load",r);break;case"details":_("toggle",r);break;case"input":$o(r,o),_("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},_("invalid",r);break;case"textarea":Qo(r,o),_("invalid",r)}rs(n,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="children"?typeof c=="string"?r.textContent!==c&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,c,e),s=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,c,e),s=["children",""+c]):Ln.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&_("scroll",r)}switch(n){case"input":si(r),Wo(r,o,!0);break;case"textarea":si(r),Jo(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ui)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[_e]=t,e[Vn]=r,_c(e,t,!1,!1),t.stateNode=e;e:{switch(l=ss(n,r),n){case"dialog":_("cancel",e),_("close",e),s=r;break;case"iframe":case"object":case"embed":_("load",e),s=r;break;case"video":case"audio":for(s=0;s<wn.length;s++)_(wn[s],e);s=r;break;case"source":_("error",e),s=r;break;case"img":case"image":case"link":_("error",e),_("load",e),s=r;break;case"details":_("toggle",e),s=r;break;case"input":$o(e,r),s=qr(e,r),_("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=$({},r,{value:void 0}),_("invalid",e);break;case"textarea":Qo(e,r),s=ns(e,r),_("invalid",e);break;default:s=r}rs(n,s),c=s;for(o in c)if(c.hasOwnProperty(o)){var a=c[o];o==="style"?xa(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ga(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&In(e,a):typeof a=="number"&&In(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ln.hasOwnProperty(o)?a!=null&&o==="onScroll"&&_("scroll",e):a!=null&&Xs(e,o,a,l))}switch(n){case"input":si(e),Wo(e,r,!1);break;case"textarea":si(e),Jo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Jt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ui)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Oc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=St(Wn.current),St(Oe.current),hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[_e]=t,(o=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_e]=t,t.stateNode=r}return se(t),null;case 13:if(U(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&ye!==null&&t.mode&1&&!(t.flags&128))sc(),tn(),t.flags|=98560,o=!1;else if(o=hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[_e]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Le!==null&&(_s(Le),Le=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?G===0&&(G=3):Fo())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return rn(),Fs(e,t),e===null&&On(t.stateNode.containerInfo),se(t),null;case 10:return ho(t.type._context),se(t),null;case 17:return fe(t.type)&&Oi(),se(t),null;case 19:if(U(H),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)xn(o,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Xi(e),l!==null){for(t.flags|=128,xn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>on&&(t.flags|=128,r=!0,xn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Xi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!O)return se(t),null}else 2*J()-o.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,r=!0,xn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=H.current,B(H,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Po(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function fp(e,t){switch(co(t),t.tag){case 1:return fe(t.type)&&Oi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),U(he),U(le),yo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xo(t),null;case 13:if(U(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(H),null;case 4:return rn(),null;case 10:return ho(t.type._context),null;case 22:case 23:return Po(),null;case 24:return null;default:return null}}var vi=!1,oe=!1,gp=typeof WeakSet=="function"?WeakSet:Set,C=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Rs(e,t,n){try{n()}catch(r){W(e,t,r)}}var zl=!1;function vp(e,t){if(fs=Mi,e=Qa(),lo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,c=-1,a=-1,d=0,h=0,v=e,f=null;t:for(;;){for(var k;v!==n||s!==0&&v.nodeType!==3||(c=l+s),v!==o||r!==0&&v.nodeType!==3||(a=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(k=v.firstChild)!==null;)f=v,v=k;for(;;){if(v===e)break t;if(f===n&&++d===s&&(c=l),f===o&&++h===r&&(a=l),(k=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=k}n=c===-1||a===-1?null:{start:c,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(gs={focusedElem:e,selectionRange:n},Mi=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var N=x.memoizedProps,I=x.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?N:Fe(t.type,N),I);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(g){W(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return x=zl,zl=!1,x}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&Rs(t,n,o)}s=s.next}while(s!==r)}}function dr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ls(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hc(e){var t=e.alternate;t!==null&&(e.alternate=null,Hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_e],delete t[Vn],delete t[ys],delete t[qd],delete t[ep])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vc(e){return e.tag===5||e.tag===3||e.tag===4}function Ml(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ui));else if(r!==4&&(e=e.child,e!==null))for(Is(e,t,n),e=e.sibling;e!==null;)Is(e,t,n),e=e.sibling}function As(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(As(e,t,n),e=e.sibling;e!==null;)As(e,t,n),e=e.sibling}var te=null,Re=!1;function Ze(e,t,n){for(n=n.child;n!==null;)$c(e,t,n),n=n.sibling}function $c(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(ir,n)}catch{}switch(n.tag){case 5:oe||Wt(n,t);case 6:var r=te,s=Re;te=null,Ze(e,t,n),te=r,Re=s,te!==null&&(Re?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Re?(e=te,n=n.stateNode,e.nodeType===8?Mr(e.parentNode,n):e.nodeType===1&&Mr(e,n),Bn(e)):Mr(te,n.stateNode));break;case 4:r=te,s=Re,te=n.stateNode.containerInfo,Re=!0,Ze(e,t,n),te=r,Re=s;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Rs(n,t,l),s=s.next}while(s!==r)}Ze(e,t,n);break;case 1:if(!oe&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){W(n,t,c)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,Ze(e,t,n),oe=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Bl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gp),t.forEach(function(r){var s=bp.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var o=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:te=c.stateNode,Re=!1;break e;case 3:te=c.stateNode.containerInfo,Re=!0;break e;case 4:te=c.stateNode.containerInfo,Re=!0;break e}c=c.return}if(te===null)throw Error(j(160));$c(o,l,s),te=null,Re=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(d){W(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wc(t,e),t=t.sibling}function Wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Me(e),r&4){try{Pn(3,e,e.return),dr(3,e)}catch(N){W(e,e.return,N)}try{Pn(5,e,e.return)}catch(N){W(e,e.return,N)}}break;case 1:Pe(t,e),Me(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(Pe(t,e),Me(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var s=e.stateNode;try{In(s,"")}catch(N){W(e,e.return,N)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,c=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&ma(s,o),ss(c,l);var d=ss(c,o);for(l=0;l<a.length;l+=2){var h=a[l],v=a[l+1];h==="style"?xa(s,v):h==="dangerouslySetInnerHTML"?ga(s,v):h==="children"?In(s,v):Xs(s,h,v,d)}switch(c){case"input":es(s,o);break;case"textarea":ha(s,o);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Jt(s,!!o.multiple,k,!1):f!==!!o.multiple&&(o.defaultValue!=null?Jt(s,!!o.multiple,o.defaultValue,!0):Jt(s,!!o.multiple,o.multiple?[]:"",!1))}s[Vn]=o}catch(N){W(e,e.return,N)}}break;case 6:if(Pe(t,e),Me(e),r&4){if(e.stateNode===null)throw Error(j(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(N){W(e,e.return,N)}}break;case 3:if(Pe(t,e),Me(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(N){W(e,e.return,N)}break;case 4:Pe(t,e),Me(e);break;case 13:Pe(t,e),Me(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(To=J())),r&4&&Bl(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||h,Pe(t,e),oe=d):Pe(t,e),Me(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(v=C=h;C!==null;){switch(f=C,k=f.child,f.tag){case 0:case 11:case 14:case 15:Pn(4,f,f.return);break;case 1:Wt(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(N){W(r,n,N)}}break;case 5:Wt(f,f.return);break;case 22:if(f.memoizedState!==null){Ul(v);continue}}k!==null?(k.return=f,C=k):Ul(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{s=v.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=v.stateNode,a=v.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,c.style.display=va("display",l))}catch(N){W(e,e.return,N)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(N){W(e,e.return,N)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Pe(t,e),Me(e),r&4&&Bl(e);break;case 21:break;default:Pe(t,e),Me(e)}}function Me(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vc(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(In(s,""),r.flags&=-33);var o=Ml(e);As(e,o,s);break;case 3:case 4:var l=r.stateNode.containerInfo,c=Ml(e);Is(e,c,l);break;default:throw Error(j(161))}}catch(a){W(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xp(e,t,n){C=e,Qc(e)}function Qc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var s=C,o=s.child;if(s.tag===22&&r){var l=s.memoizedState!==null||vi;if(!l){var c=s.alternate,a=c!==null&&c.memoizedState!==null||oe;c=vi;var d=oe;if(vi=l,(oe=a)&&!d)for(C=s;C!==null;)l=C,a=l.child,l.tag===22&&l.memoizedState!==null?Ol(s):a!==null?(a.return=l,C=a):Ol(s);for(;o!==null;)C=o,Qc(o),o=o.sibling;C=s,vi=c,oe=d}_l(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,C=o):_l(e)}}function _l(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||dr(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wl(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wl(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&Bn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}oe||t.flags&512&&Ls(t)}catch(f){W(t,t.return,f)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Ul(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Ol(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dr(4,t)}catch(a){W(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(a){W(t,s,a)}}var o=t.return;try{Ls(t)}catch(a){W(t,o,a)}break;case 5:var l=t.return;try{Ls(t)}catch(a){W(t,l,a)}}}catch(a){W(t,t.return,a)}if(t===e){C=null;break}var c=t.sibling;if(c!==null){c.return=t.return,C=c;break}C=t.return}}var yp=Math.ceil,Ki=Ke.ReactCurrentDispatcher,bo=Ke.ReactCurrentOwner,Ee=Ke.ReactCurrentBatchConfig,A=0,ee=null,X=null,ne=0,xe=0,Qt=gt(0),G=0,Yn=null,Pt=0,pr=0,Eo=0,Fn=null,pe=null,To=0,on=1/0,He=null,Zi=!1,zs=null,ut=null,xi=!1,rt=null,qi=0,Rn=0,Ms=null,Di=-1,Pi=0;function ce(){return A&6?J():Di!==-1?Di:Di=J()}function dt(e){return e.mode&1?A&2&&ne!==0?ne&-ne:np.transition!==null?(Pi===0&&(Pi=Pa()),Pi):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ma(e.type)),e):1}function Ae(e,t,n,r){if(50<Rn)throw Rn=0,Ms=null,Error(j(185));Kn(e,n,r),(!(A&2)||e!==ee)&&(e===ee&&(!(A&2)&&(pr|=n),G===4&&nt(e,ne)),ge(e,r),n===1&&A===0&&!(t.mode&1)&&(on=J()+500,ar&&vt()))}function ge(e,t){var n=e.callbackNode;nd(e,t);var r=zi(e,e===ee?ne:0);if(r===0)n!==null&&Go(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Go(n),t===1)e.tag===0?tp(Hl.bind(null,e)):nc(Hl.bind(null,e)),Kd(function(){!(A&6)&&vt()}),n=null;else{switch(Fa(r)){case 1:n=qs;break;case 4:n=Ta;break;case 16:n=Ai;break;case 536870912:n=Da;break;default:n=Ai}n=eu(n,Jc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jc(e,t){if(Di=-1,Pi=0,A&6)throw Error(j(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=zi(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=er(e,r);else{t=r;var s=A;A|=2;var o=Yc();(ee!==e||ne!==t)&&(He=null,on=J()+500,Ct(e,t));do try{Np();break}catch(c){Xc(e,c)}while(1);mo(),Ki.current=o,A=s,X!==null?t=0:(ee=null,ne=0,t=G)}if(t!==0){if(t===2&&(s=us(e),s!==0&&(r=s,t=Bs(e,s))),t===1)throw n=Yn,Ct(e,0),nt(e,r),ge(e,J()),n;if(t===6)nt(e,r);else{if(s=e.current.alternate,!(r&30)&&!jp(s)&&(t=er(e,r),t===2&&(o=us(e),o!==0&&(r=o,t=Bs(e,o))),t===1))throw n=Yn,Ct(e,0),nt(e,r),ge(e,J()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:kt(e,pe,He);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=To+500-J(),10<t)){if(zi(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=xs(kt.bind(null,e,pe,He),t);break}kt(e,pe,He);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var l=31-Ie(r);o=1<<l,l=t[l],l>s&&(s=l),r&=~o}if(r=s,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yp(r/1960))-r,10<r){e.timeoutHandle=xs(kt.bind(null,e,pe,He),r);break}kt(e,pe,He);break;case 5:kt(e,pe,He);break;default:throw Error(j(329))}}}return ge(e,J()),e.callbackNode===n?Jc.bind(null,e):null}function Bs(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=er(e,t),e!==2&&(t=pe,pe=n,t!==null&&_s(t)),e}function _s(e){pe===null?pe=e:pe.push.apply(pe,e)}function jp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],o=s.getSnapshot;s=s.value;try{if(!ze(o(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Eo,t&=~pr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function Hl(e){if(A&6)throw Error(j(327));Zt();var t=zi(e,0);if(!(t&1))return ge(e,J()),null;var n=er(e,t);if(e.tag!==0&&n===2){var r=us(e);r!==0&&(t=r,n=Bs(e,r))}if(n===1)throw n=Yn,Ct(e,0),nt(e,t),ge(e,J()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,pe,He),ge(e,J()),null}function Do(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(on=J()+500,ar&&vt())}}function Ft(e){rt!==null&&rt.tag===0&&!(A&6)&&Zt();var t=A;A|=1;var n=Ee.transition,r=M;try{if(Ee.transition=null,M=1,e)return e()}finally{M=r,Ee.transition=n,A=t,!(A&6)&&vt()}}function Po(){xe=Qt.current,U(Qt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gd(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oi();break;case 3:rn(),U(he),U(le),yo();break;case 5:xo(r);break;case 4:rn();break;case 13:U(H);break;case 19:U(H);break;case 10:ho(r.type._context);break;case 22:case 23:Po()}n=n.return}if(ee=e,X=e=pt(e.current,null),ne=xe=t,G=0,Yn=null,Eo=pr=Pt=0,pe=Fn=null,wt!==null){for(t=0;t<wt.length;t++)if(n=wt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=s,r.next=l}n.pending=r}wt=null}return e}function Xc(e,t){do{var n=X;try{if(mo(),bi.current=Gi,Yi){for(var r=V.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Yi=!1}if(Dt=0,q=Y=V=null,Dn=!1,Qn=0,bo.current=null,n===null||n.return===null){G=1,Yn=t,X=null;break}e:{var o=e,l=n.return,c=n,a=t;if(t=ne,c.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,h=c,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=Dl(l);if(k!==null){k.flags&=-257,Pl(k,l,c,o,t),k.mode&1&&Tl(o,d,t),t=k,a=d;var x=t.updateQueue;if(x===null){var N=new Set;N.add(a),t.updateQueue=N}else x.add(a);break e}else{if(!(t&1)){Tl(o,d,t),Fo();break e}a=Error(j(426))}}else if(O&&c.mode&1){var I=Dl(l);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Pl(I,l,c,o,t),uo(sn(a,c));break e}}o=a=sn(a,c),G!==4&&(G=2),Fn===null?Fn=[o]:Fn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Fc(o,a,t);Nl(o,m);break e;case 1:c=a;var u=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Rc(o,c,t);Nl(o,g);break e}}o=o.return}while(o!==null)}Kc(n)}catch(w){t=w,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function Yc(){var e=Ki.current;return Ki.current=Gi,e===null?Gi:e}function Fo(){(G===0||G===3||G===2)&&(G=4),ee===null||!(Pt&268435455)&&!(pr&268435455)||nt(ee,ne)}function er(e,t){var n=A;A|=2;var r=Yc();(ee!==e||ne!==t)&&(He=null,Ct(e,t));do try{kp();break}catch(s){Xc(e,s)}while(1);if(mo(),A=n,Ki.current=r,X!==null)throw Error(j(261));return ee=null,ne=0,G}function kp(){for(;X!==null;)Gc(X)}function Np(){for(;X!==null&&!Ju();)Gc(X)}function Gc(e){var t=qc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Kc(e):X=t,bo.current=null}function Kc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,X=null;return}}else if(n=hp(n,t,xe),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);G===0&&(G=5)}function kt(e,t,n){var r=M,s=Ee.transition;try{Ee.transition=null,M=1,wp(e,t,n,r)}finally{Ee.transition=s,M=r}return null}function wp(e,t,n,r){do Zt();while(rt!==null);if(A&6)throw Error(j(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(id(e,o),e===ee&&(X=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xi||(xi=!0,eu(Ai,function(){return Zt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ee.transition,Ee.transition=null;var l=M;M=1;var c=A;A|=4,bo.current=null,vp(e,n),Wc(n,e),Vd(gs),Mi=!!fs,gs=fs=null,e.current=n,xp(n),Xu(),A=c,M=l,Ee.transition=o}else e.current=n;if(xi&&(xi=!1,rt=e,qi=s),o=e.pendingLanes,o===0&&(ut=null),Ku(n.stateNode),ge(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Zi)throw Zi=!1,e=zs,zs=null,e;return qi&1&&e.tag!==0&&Zt(),o=e.pendingLanes,o&1?e===Ms?Rn++:(Rn=0,Ms=e):Rn=0,vt(),null}function Zt(){if(rt!==null){var e=Fa(qi),t=Ee.transition,n=M;try{if(Ee.transition=null,M=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,qi=0,A&6)throw Error(j(331));var s=A;for(A|=4,C=e.current;C!==null;){var o=C,l=o.child;if(C.flags&16){var c=o.deletions;if(c!==null){for(var a=0;a<c.length;a++){var d=c[a];for(C=d;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:Pn(8,h,o)}var v=h.child;if(v!==null)v.return=h,C=v;else for(;C!==null;){h=C;var f=h.sibling,k=h.return;if(Hc(h),h===d){C=null;break}if(f!==null){f.return=k,C=f;break}C=k}}}var x=o.alternate;if(x!==null){var N=x.child;if(N!==null){x.child=null;do{var I=N.sibling;N.sibling=null,N=I}while(N!==null)}}C=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,C=l;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pn(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,C=m;break e}C=o.return}}var u=e.current;for(C=u;C!==null;){l=C;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,C=p;else e:for(l=u;C!==null;){if(c=C,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:dr(9,c)}}catch(w){W(c,c.return,w)}if(c===l){C=null;break e}var g=c.sibling;if(g!==null){g.return=c.return,C=g;break e}C=c.return}}if(A=s,vt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(ir,e)}catch{}r=!0}return r}finally{M=n,Ee.transition=t}}return!1}function Vl(e,t,n){t=sn(n,t),t=Fc(e,t,1),e=ct(e,t,1),t=ce(),e!==null&&(Kn(e,1,t),ge(e,t))}function W(e,t,n){if(e.tag===3)Vl(e,e,n);else for(;t!==null;){if(t.tag===3){Vl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=sn(n,e),e=Rc(t,e,1),t=ct(t,e,1),e=ce(),t!==null&&(Kn(t,1,e),ge(t,e));break}}t=t.return}}function Sp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(G===4||G===3&&(ne&130023424)===ne&&500>J()-To?Ct(e,0):Eo|=n),ge(e,t)}function Zc(e,t){t===0&&(e.mode&1?(t=ai,ai<<=1,!(ai&130023424)&&(ai=4194304)):t=1);var n=ce();e=Ye(e,t),e!==null&&(Kn(e,t,n),ge(e,n))}function Cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zc(e,n)}function bp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Zc(e,n)}var qc;qc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,mp(e,t,n);me=!!(e.flags&131072)}else me=!1,O&&t.flags&1048576&&ic(t,$i,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ti(e,t),e=t.pendingProps;var s=en(t,le.current);Kt(t,n),s=ko(null,t,r,e,s,n);var o=No();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(o=!0,Hi(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,go(t),s.updater=ur,t.stateNode=s,s._reactInternals=t,Cs(t,r,e,n),t=Ts(null,t,r,!0,o,n)):(t.tag=0,O&&o&&ao(t),ae(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ti(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Tp(r),e=Fe(r,e),s){case 0:t=Es(null,t,r,e,n);break e;case 1:t=Ll(null,t,r,e,n);break e;case 11:t=Fl(null,t,r,e,n);break e;case 14:t=Rl(null,t,r,Fe(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Fe(r,s),Es(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Fe(r,s),Ll(e,t,r,s,n);case 3:e:{if(zc(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,s=o.element,cc(e,t),Ji(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=sn(Error(j(423)),t),t=Il(e,t,r,n,s);break e}else if(r!==s){s=sn(Error(j(424)),t),t=Il(e,t,r,n,s);break e}else for(ye=at(t.stateNode.containerInfo.firstChild),je=t,O=!0,Le=null,n=lc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),r===s){t=Ge(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return uc(t),e===null&&Ns(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,l=s.children,vs(r,s)?l=null:o!==null&&vs(r,o)&&(t.flags|=32),Ac(e,t),ae(e,t,l,n),t.child;case 6:return e===null&&Ns(t),null;case 13:return Mc(e,t,n);case 4:return vo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Fe(r,s),Fl(e,t,r,s,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,o=t.memoizedProps,l=s.value,B(Wi,r._currentValue),r._currentValue=l,o!==null)if(ze(o.value,l)){if(o.children===s.children&&!he.current){t=Ge(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){l=o.child;for(var a=c.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Qe(-1,n&-n),a.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?a.next=a:(a.next=h.next,h.next=a),d.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ws(o.return,n,t),c.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(j(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),ws(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ae(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Kt(t,n),s=Te(s),r=r(s),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,s=Fe(r,t.pendingProps),s=Fe(r.type,s),Rl(e,t,r,s,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Fe(r,s),Ti(e,t),t.tag=1,fe(r)?(e=!0,Hi(t)):e=!1,Kt(t,n),Pc(t,r,s),Cs(t,r,s,n),Ts(null,t,r,!0,e,n);case 19:return Bc(e,t,n);case 22:return Ic(e,t,n)}throw Error(j(156,t.tag))};function eu(e,t){return Ea(e,t)}function Ep(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new Ep(e,t,n,r)}function Ro(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tp(e){if(typeof e=="function")return Ro(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gs)return 11;if(e===Ks)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fi(e,t,n,r,s,o){var l=2;if(r=e,typeof e=="function")Ro(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case zt:return bt(n.children,s,o,t);case Ys:l=8,s|=8;break;case Yr:return e=be(12,n,t,s|2),e.elementType=Yr,e.lanes=o,e;case Gr:return e=be(13,n,t,s),e.elementType=Gr,e.lanes=o,e;case Kr:return e=be(19,n,t,s),e.elementType=Kr,e.lanes=o,e;case ua:return mr(n,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case aa:l=10;break e;case ca:l=9;break e;case Gs:l=11;break e;case Ks:l=14;break e;case qe:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=be(l,n,t,s),t.elementType=e,t.type=r,t.lanes=o,t}function bt(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function mr(e,t,n,r){return e=be(22,e,r,t),e.elementType=ua,e.lanes=n,e.stateNode={isHidden:!1},e}function Wr(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function Qr(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dp(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=br(0),this.expirationTimes=br(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=br(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Lo(e,t,n,r,s,o,l,c,a){return e=new Dp(e,t,n,c,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},go(o),e}function Pp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tu(e){if(!e)return ht;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(fe(n))return tc(e,n,t)}return t}function nu(e,t,n,r,s,o,l,c,a){return e=Lo(n,r,!0,e,s,o,l,c,a),e.context=tu(null),n=e.current,r=ce(),s=dt(n),o=Qe(r,s),o.callback=t??null,ct(n,o,s),e.current.lanes=s,Kn(e,s,r),ge(e,r),e}function hr(e,t,n,r){var s=t.current,o=ce(),l=dt(s);return n=tu(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ct(s,t,l),e!==null&&(Ae(e,s,l,o),Ci(e,s,l)),l}function tr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $l(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Io(e,t){$l(e,t),(e=e.alternate)&&$l(e,t)}function Fp(){return null}var iu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ao(e){this._internalRoot=e}fr.prototype.render=Ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));hr(e,t,null,null)};fr.prototype.unmount=Ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){hr(null,e,null,null)}),t[Xe]=null}};function fr(e){this._internalRoot=e}fr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ia();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&za(e)}};function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wl(){}function Rp(e,t,n,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var d=tr(l);o.call(d)}}var l=nu(t,r,e,0,null,!1,!1,"",Wl);return e._reactRootContainer=l,e[Xe]=l.current,On(e.nodeType===8?e.parentNode:e),Ft(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var c=r;r=function(){var d=tr(a);c.call(d)}}var a=Lo(e,0,!1,null,null,!1,!1,"",Wl);return e._reactRootContainer=a,e[Xe]=a.current,On(e.nodeType===8?e.parentNode:e),Ft(function(){hr(t,a,n,r)}),a}function vr(e,t,n,r,s){var o=n._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var c=s;s=function(){var a=tr(l);c.call(a)}}hr(t,l,e,s)}else l=Rp(n,t,e,s,r);return tr(l)}Ra=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(eo(t,n|1),ge(t,J()),!(A&6)&&(on=J()+500,vt()))}break;case 13:Ft(function(){var r=Ye(e,1);if(r!==null){var s=ce();Ae(r,e,1,s)}}),Io(e,1)}};to=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ce();Ae(t,e,134217728,n)}Io(e,134217728)}};La=function(e){if(e.tag===13){var t=dt(e),n=Ye(e,t);if(n!==null){var r=ce();Ae(n,e,t,r)}Io(e,t)}};Ia=function(){return M};Aa=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};ls=function(e,t,n){switch(t){case"input":if(es(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=lr(r);if(!s)throw Error(j(90));pa(r),es(r,s)}}}break;case"textarea":ha(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};ka=Do;Na=Ft;var Lp={usingClientEntryPoint:!1,Events:[qn,Ut,lr,ya,ja,Do]},yn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ip={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ca(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Fp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yi.isDisabled&&yi.supportsFiber)try{ir=yi.inject(Ip),Ue=yi}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lp;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zo(t))throw Error(j(200));return Pp(e,t,null,n)};Ne.createRoot=function(e,t){if(!zo(e))throw Error(j(299));var n=!1,r="",s=iu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Lo(e,1,!1,null,null,n,!1,r,s),e[Xe]=t.current,On(e.nodeType===8?e.parentNode:e),new Ao(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Ca(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Ft(e)};Ne.hydrate=function(e,t,n){if(!gr(t))throw Error(j(200));return vr(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!zo(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,o="",l=iu;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=nu(t,null,e,1,n??null,s,!1,o,l),e[Xe]=t.current,On(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new fr(t)};Ne.render=function(e,t,n){if(!gr(t))throw Error(j(200));return vr(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!gr(e))throw Error(j(40));return e._reactRootContainer?(Ft(function(){vr(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};Ne.unstable_batchedUpdates=Do;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gr(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return vr(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function ru(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ru)}catch(e){console.error(e)}}ru(),ra.exports=Ne;var Ap=ra.exports,Ql=Ap;Jr.createRoot=Ql.createRoot,Jr.hydrateRoot=Ql.hydrateRoot;var zp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Mp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bp=(e,t)=>{const n=S.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:l,children:c,...a},d)=>S.createElement("svg",{ref:d,...zp,width:s,height:s,stroke:r,strokeWidth:l?Number(o)*24/Number(s):o,className:`lucide lucide-${Mp(e)}`,...a},[...t.map(([h,v])=>S.createElement(h,v)),...(Array.isArray(c)?c:[c])||[]]));return n.displayName=`${e}`,n};var K=Bp;const _p=K("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Up=K("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),Op=K("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Hp=K("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),Vp=K("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),$p=K("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),su=K("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),Wp=K("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),Qp=K("Layers",[["polygon",{points:"12 2 2 7 12 12 22 7 12 2",key:"1b0ttc"}],["polyline",{points:"2 17 12 22 22 17",key:"imjtdl"}],["polyline",{points:"2 12 12 17 22 12",key:"5dexcv"}]]),Us=K("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),Jp=K("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]),Xp=K("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]),Yp=K("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),Os=K("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),ou=K("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),Gp=K("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Kp=K("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]),Zp=K("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),qp=K("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function em(){const[e,t]=S.useState("home"),n=[{id:"home",label:"Home",icon:Wp},{id:"js-fundamentals",label:"JS Fundamentals",icon:$p},{id:"js-basics",label:"JavaScript Basics",icon:Up},{id:"react-core",label:"React Core",icon:qp},{id:"components",label:"Components",icon:Qp},{id:"hooks",label:"Hooks",icon:Gp},{id:"data-handling",label:"Data Handling",icon:Op},{id:"events-interactions",label:"Events & Interactions",icon:Zp},{id:"styling-design",label:"Styling & Design",icon:Xp},{id:"navigation-routing",label:"Navigation & Routing",icon:Jp},{id:"html-css",label:"HTML & CSS",icon:su},{id:"figma-mapping",label:"Figma Mapping",icon:Yp}];return i.jsxs("div",{className:"app",children:[i.jsx("header",{className:"header",children:i.jsxs("div",{className:"container",children:[i.jsxs("h1",{className:"logo",children:[i.jsx(_p,{className:"logo-icon"}),"React JS Cheatsheet"]}),i.jsx("p",{className:"subtitle",children:"For UX Designers with Figma Analogies"})]})}),i.jsx("nav",{className:"sidebar",children:i.jsx("div",{className:"nav-items",children:n.map(r=>{const s=r.icon;return i.jsxs("button",{className:`nav-item ${e===r.id?"active":""}`,onClick:()=>t(r.id),children:[i.jsx(s,{className:"nav-icon"}),i.jsx("span",{children:r.label})]},r.id)})})}),i.jsx("main",{className:"main-content",children:i.jsxs("div",{className:"container",children:[e==="home"&&i.jsx(tm,{}),e==="js-fundamentals"&&i.jsx(nm,{}),e==="js-basics"&&i.jsx(im,{}),e==="react-core"&&i.jsx(rm,{}),e==="components"&&i.jsx(sm,{}),e==="hooks"&&i.jsx(om,{}),e==="data-handling"&&i.jsx(lm,{}),e==="events-interactions"&&i.jsx(am,{}),e==="styling-design"&&i.jsx(cm,{}),e==="navigation-routing"&&i.jsx(um,{}),e==="html-css"&&i.jsx(dm,{}),e==="figma-mapping"&&i.jsx(pm,{})]})})]})}function tm(){return i.jsxs("div",{className:"section",children:[i.jsx("h1",{children:"Welcome to React JS Cheatsheet"}),i.jsx("p",{className:"lead",children:"A comprehensive guide to JavaScript and React concepts, explained through the lens of Figma and design thinking."}),i.jsxs("div",{className:"getting-started",children:[i.jsx("h2",{children:"🎯 How to Use This Cheatsheet"}),i.jsxs("div",{className:"steps",children:[i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-number",children:"1"}),i.jsxs("div",{className:"step-content",children:[i.jsx("h4",{children:"Start with JavaScript Basics"}),i.jsx("p",{children:"Understand variables, objects, and functions through Figma analogies"})]})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-number",children:"2"}),i.jsxs("div",{className:"step-content",children:[i.jsx("h4",{children:"Learn React Core Concepts"}),i.jsx("p",{children:"Discover how React components work like Figma components"})]})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-number",children:"3"}),i.jsxs("div",{className:"step-content",children:[i.jsx("h4",{children:"Master Hooks and State"}),i.jsx("p",{children:"Learn to make your UI interactive like Figma prototypes"})]})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-number",children:"4"}),i.jsxs("div",{className:"step-content",children:[i.jsx("h4",{children:"Build Real Projects"}),i.jsx("p",{children:"Apply your knowledge to create interactive prototypes"})]})]})]})]})]})}function nm(){S.useState(0);const[e,t]=S.useState({name:"John",age:25}),[n,r]=S.useState(""),[s,o]=S.useState(["red","blue","green"]),[l,c]=S.useState("Sarah"),[a,d]=S.useState("Sarah"),[h,v]=S.useState({name:"Sarah",age:28}),[f,k]=S.useState({name:"Sarah",age:28}),[x,N]=S.useState(["red","blue","green"]),[I,m]=S.useState(["red","blue","green"]),[u,p]=S.useState({name:"Alex",age:25,skills:["JavaScript","CSS"]}),[g,w]=S.useState({name:"John",age:30,role:"Developer"}),[E,T]=S.useState("");return i.jsxs("div",{className:"section",children:[i.jsx("h1",{children:"JavaScript Fundamentals"}),i.jsx("p",{children:"Core JavaScript concepts with interactive examples"}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Variables"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Variables are like text styles in Figma - they store values that you can reuse throughout your design."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`let variableName = value;
const constantName = value;
var oldWay = value;`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Variable declaration and assignment
let userName = "Sarah";           // let = can be changed
const userAge = 28;              // const = cannot be changed
var oldWay = "avoid this";       // var = old way (avoid)

// Using variables in JSX
function UserProfile() {
  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <p>Age: {userAge}</p>
      <p>Old way: {oldWay}</p>
    </div>
  );
}

// Reassigning let variables
userName = "Sarah Johnson";      // ✅ This works
// userAge = 29;                 // ❌ This would cause an error

// Using variables in React state
function DynamicUserProfile() {
  const [name, setName] = useState("Sarah");
  const [age, setAge] = useState(28);
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <button onClick={() => setName("Jane")}>Change Name</button>
      <button onClick={() => setAge(prev => prev + 1)}>Increment Age</button>
    </div>
  );
}`,explanation:"Variables store data that can be used and modified throughout your code."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Variable Examples:"}),i.jsxs("div",{className:"result",children:["userName: ",i.jsx("span",{className:"code-output",children:"Sarah"}),i.jsx("br",{}),"userAge: ",i.jsx("span",{className:"code-output",children:"28"}),i.jsx("br",{}),"oldWay: ",i.jsx("span",{className:"code-output",children:"avoid this"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Change Variable:"}),i.jsx("input",{value:n,onChange:y=>r(y.target.value),placeholder:"Enter a new message"}),i.jsxs("div",{className:"result",children:["Message: ",n||"No message set"]})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Objects"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Objects are like component properties in Figma - they group related data together."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`const objectName = {
  key1: value1,
  key2: value2
};

objectName.key1;           // Access property
objectName["key2"];        // Bracket notation`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Creating an object
const user = {
  name: "Sarah",
  age: 28,
  role: "UX Designer",
  isActive: true
};

// Using objects in JSX
function UserCard() {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Role: {user.role}</p>
      <p>Status: {user.isActive ? "Active" : "Inactive"}</p>
    </div>
  );
}

// Accessing object properties
console.log(user.name);          // "Sarah"
console.log(user["age"]);        // 28

// Adding new properties
user.skills = ["Figma", "React"];

// Object destructuring in JSX
function UserInfo({ user }) {
  const { name, age, role } = user;
  
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

// Using objects with React state
function DynamicUserCard() {
  const [user, setUser] = useState({
    name: "Sarah",
    age: 28,
    role: "UX Designer"
  });
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser(prev => ({...prev, age: prev.age + 1}))}>
        Increment Age
      </button>
    </div>
  );
}`,explanation:"Objects group related data together using key-value pairs."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Demo:"}),i.jsx("div",{className:"output-content",children:i.jsx("div",{className:"demo-controls",children:i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"User Object:"}),i.jsxs("div",{className:"object-display",children:[i.jsxs("span",{children:["Name: ",e.name]}),i.jsxs("span",{children:["Age: ",e.age]})]}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>t(y=>({...y,age:y.age+1})),children:"Increment Age"}),i.jsx("button",{onClick:()=>t(y=>({...y,name:"Jane"})),children:"Change Name"})]})]})})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Functions"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Functions are like reusable actions in Figma - they perform specific tasks when called."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`function functionName(parameter) {
  return value;
}

const arrowFunction = (param) => value;

functionName(argument);     // Call function`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Function declaration
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Function expression
const calculateArea = function(width, height) {
  return width * height;
};

// Arrow function
const double = (num) => num * 2;

// Using functions in JSX
function GreetingCard() {
  const userName = "Sarah";
  
  return (
    <div>
      <h1>{greetUser(userName)}</h1>
      <p>Area of 5x3: {calculateArea(5, 3)}</p>
      <p>Double of 4: {double(4)}</p>
    </div>
  );
}

// Event handler functions in JSX
function InteractiveCard() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  
  const handleNameChange = (name) => {
    console.log("Name changed to:", name);
  };
  
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleNameChange("Jane")}>Change Name</button>
    </div>
  );
}

// Functions with React state
function DynamicGreeting() {
  const [name, setName] = useState("Sarah");
  const [count, setCount] = useState(0);
  
  const incrementCount = () => {
    setCount(prev => prev + 1);
  };
  
  return (
    <div>
      <h1>{greetUser(name)}</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={() => setName("Jane")}>Change Name</button>
    </div>
  );
}`,explanation:"Functions are reusable blocks of code that perform specific tasks."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Demo:"}),i.jsx("div",{className:"output-content",children:i.jsx("div",{className:"demo-controls",children:i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Function Examples:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{type:"text",placeholder:"Enter name",id:"greetInput",defaultValue:"Sarah"}),i.jsx("button",{onClick:()=>{const y=document.getElementById("greetInput").value;alert(`Hello, ${y}!`)},children:"Greet"})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{type:"number",placeholder:"Width",id:"areaWidth",defaultValue:"5"}),i.jsx("input",{type:"number",placeholder:"Height",id:"areaHeight",defaultValue:"3"}),i.jsx("button",{onClick:()=>{const y=document.getElementById("areaWidth").value,z=document.getElementById("areaHeight").value;alert(`Area: ${y*z}`)},children:"Calculate Area"})]})]})})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Methods"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Methods are like built-in actions in Figma - they're functions that belong to objects."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`string.method();           // String methods
array.method();             // Array methods
object.method();            // Object methods

const obj = {
  methodName() {
    return value;
  }
};`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// String methods
const message = "Hello World";
console.log(message.toUpperCase());    // "HELLO WORLD"
console.log(message.toLowerCase());    // "hello world"
console.log(message.length);           // 11

// Using string methods in JSX
function StringDisplay() {
  const text = "Hello World";
  
  return (
    <div>
      <p>Original: {text}</p>
      <p>Uppercase: {text.toUpperCase()}</p>
      <p>Lowercase: {text.toLowerCase()}</p>
      <p>Length: {text.length}</p>
    </div>
  );
}

// Array methods
const colors = ["red", "blue", "green"];
colors.push("yellow");                 // Add to end
colors.pop();                          // Remove from end
colors.unshift("purple");              // Add to beginning

// Using array methods in JSX
function ColorList() {
  const [colorList, setColorList] = useState(["red", "blue", "green"]);
  
  const addColor = (color) => {
    setColorList(prev => [...prev, color]);
  };
  
  const removeLast = () => {
    setColorList(prev => prev.slice(0, -1));
  };
  
  return (
    <div>
      <p>Colors: {colorList.join(', ')}</p>
      <button onClick={() => addColor('yellow')}>Add Yellow</button>
      <button onClick={removeLast}>Remove Last</button>
    </div>
  );
}

// Object methods
const user = {
  name: "Sarah",
  greet() {
    return "Hello, " + this.name;
  }
};

// Using object methods in JSX
function UserGreeting() {
  return (
    <div>
      <h1>{user.greet()}</h1>
      <p>User name: {user.name}</p>
    </div>
  );
}

// React component methods
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(prev => prev + 1);
  };
  
  const reset = () => {
    setCount(0);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`,explanation:"Methods are functions that belong to objects and can access the object's data."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Array Methods:"}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>o(y=>[...y,"yellow"]),children:"Push Yellow"}),i.jsx("button",{onClick:()=>o(y=>y.slice(0,-1)),children:"Pop Last"}),i.jsx("button",{onClick:()=>o(y=>["purple",...y]),children:"Unshift Purple"})]}),i.jsxs("div",{className:"result",children:["Colors: [",s.join(", "),"]"]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"String Methods:"}),i.jsx("input",{type:"text",placeholder:"Enter text",id:"stringInput",defaultValue:"Hello World"}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>{const y=document.getElementById("stringInput").value;alert(y.toUpperCase())},children:"To Uppercase"}),i.jsx("button",{onClick:()=>{const y=document.getElementById("stringInput").value;alert(`Length: ${y.length}`)},children:"Get Length"})]})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Classes"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Classes are like component templates in Figma - they define the structure for creating multiple instances."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`class ClassName {
  constructor(parameter) {
    this.property = parameter;
  }
  
  methodName() {
    return value;
  }
}

const instance = new ClassName(value);`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Class definition
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.isActive = true;
  }

  greet() {
    return "Hello, I'm " + this.name;
  }

  changeRole(newRole) {
    this.role = newRole;
  }
}

// Creating instances
const user1 = new User("Sarah", "Designer");
const user2 = new User("John", "Developer");

console.log(user1.greet());           // "Hello, I'm Sarah"
user1.changeRole("Senior Designer");`,explanation:"Classes are templates for creating objects with shared properties and methods."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Demo:"}),i.jsx("div",{className:"output-content",children:i.jsx("div",{className:"demo-controls",children:i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Class Instance:"}),i.jsxs("div",{className:"result",children:["Name: ",i.jsx("span",{className:"code-output",children:"Sarah"}),i.jsx("br",{}),"Role: ",i.jsx("span",{className:"code-output",children:"Designer"}),i.jsx("br",{}),"Greeting: ",i.jsx("span",{className:"code-output",children:"Hello, I'm Sarah"})]})]})})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Constructors & Properties"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Constructors are like component creation in Figma - they set up the initial properties when you create a new instance."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`class ClassName {
  constructor(parameter) {
    this.property = parameter;    // Instance property
  }
}

// Property access
instance.property;               // Direct access
instance["property"];           // Bracket notation

// Property assignment
instance.property = newValue;   // Change property value`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Constructor function
class User {
  constructor(name, age, role) {
    this.name = name;           // Instance property
    this.age = age;             // Instance property
    this.role = role;           // Instance property
    this.createdAt = new Date(); // Auto-generated property
  }

  // Method to access properties
  getInfo() {
    return \`\${this.name} is a \${this.age}-year-old \${this.role}\`;
  }

  // Method to modify properties
  updateRole(newRole) {
    this.role = newRole;
  }

  // Method to add new properties
  addSkill(skill) {
    if (!this.skills) {
      this.skills = [];
    }
    this.skills.push(skill);
  }
}

// Creating instances with constructor
const user1 = new User("Sarah", 28, "Designer");
const user2 = new User("John", 32, "Developer");

// Accessing properties
console.log(user1.name);        // "Sarah"
console.log(user1["age"]);      // 28
console.log(user1.getInfo());   // "Sarah is a 28-year-old Designer"

// Modifying properties
user1.updateRole("Senior Designer");
user1.addSkill("React");

// Property enumeration
for (let prop in user1) {
  console.log(\`\${prop}: \${user1[prop]}\`);
}

// Using constructors in React
function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Role: {user.role}</p>
      {user.skills && (
        <p>Skills: {user.skills.join(", ")}</p>
      )}
    </div>
  );
}`,explanation:"Constructors initialize object properties when creating new instances, while properties store data within objects."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"User Instance Properties:"}),i.jsxs("div",{className:"result",children:["Name: ",i.jsx("span",{className:"code-output",children:g.name}),i.jsx("br",{}),"Age: ",i.jsx("span",{className:"code-output",children:g.age}),i.jsx("br",{}),"Role: ",i.jsx("span",{className:"code-output",children:g.role}),i.jsx("br",{}),g.skills&&i.jsxs(i.Fragment,{children:["Skills: ",i.jsx("span",{className:"code-output",children:g.skills.join(", ")}),i.jsx("br",{})]})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Modify Properties:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{value:g.name,onChange:y=>w(z=>({...z,name:y.target.value})),placeholder:"Name"}),i.jsx("input",{type:"number",value:g.age,onChange:y=>w(z=>({...z,age:parseInt(y.target.value)||0})),placeholder:"Age"}),i.jsxs("select",{value:g.role,onChange:y=>w(z=>({...z,role:y.target.value})),children:[i.jsx("option",{value:"Developer",children:"Developer"}),i.jsx("option",{value:"Designer",children:"Designer"}),i.jsx("option",{value:"Manager",children:"Manager"}),i.jsx("option",{value:"Tester",children:"Tester"})]})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Add Skills:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{value:E,onChange:y=>T(y.target.value),placeholder:"Enter a skill"}),i.jsx("button",{onClick:()=>{E.trim()&&(w(y=>({...y,skills:[...y.skills||[],E.trim()]})),T(""))},children:"Add Skill"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Property Info:"}),i.jsxs("div",{className:"result",children:[g.name," is a ",g.age,"-year-old ",g.role,g.skills&&g.skills.length>0&&i.jsxs(i.Fragment,{children:[" with skills in ",g.skills.join(", ")]})]})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Events"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Events are like interactions in Figma prototypes - they respond to user actions."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`element.addEventListener('event', handler);

// In React JSX:
<button onClick={handleClick}>
  Click me
</button>

const handleClick = (event) => {
  // Handle event
};`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Event handling
function handleClick() {
  console.log("Button clicked!");
}

function handleInput(event) {
  console.log("Input value:", event.target.value);
}

// In HTML/JSX:
// <button onClick={handleClick}>Click me</button>
// <input onChange={handleInput} />

// Common events:
// - click: Mouse click
// - change: Input value changes
// - submit: Form submission
// - keydown: Key pressed
// - mouseover: Mouse hovers over element`,explanation:"Events allow your code to respond to user interactions and system changes."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Event Examples:"}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>alert("Button clicked!"),children:"Click Event"}),i.jsx("button",{onMouseOver:()=>alert("Mouse over!"),children:"Mouse Over"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Input Event:"}),i.jsx("input",{type:"text",placeholder:"Type something...",onChange:y=>r(y.target.value)}),i.jsxs("div",{className:"result",children:["You typed: ",n]})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Parameters & Arguments"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Parameters are like input fields in Figma components - they define what data the function needs."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`function functionName(parameter1, parameter2) {
  // Function body
}

functionName(argument1, argument2);  // Call with arguments

function greet(name = "User") {     // Default parameter
  return "Hello, " + name;
}`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Parameters (in function definition)
function calculateTotal(price, tax, discount) {
  const subtotal = price * (1 - discount);
  return subtotal * (1 + tax);
}

// Arguments (when calling the function)
const total1 = calculateTotal(100, 0.1, 0.2);  // price=100, tax=0.1, discount=0.2
const total2 = calculateTotal(50, 0.05, 0.1);  // price=50, tax=0.05, discount=0.1

// Default parameters
function greet(name = "User") {
  return "Hello, " + name;
}

console.log(greet());        // "Hello, User"
console.log(greet("Sarah")); // "Hello, Sarah"`,explanation:"Parameters define what data a function expects, arguments are the actual values passed when calling the function."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Demo:"}),i.jsx("div",{className:"output-content",children:i.jsx("div",{className:"demo-controls",children:i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Calculate Total:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{type:"number",placeholder:"Price",id:"priceInput",defaultValue:"100"}),i.jsx("input",{type:"number",placeholder:"Tax %",id:"taxInput",defaultValue:"10"}),i.jsx("input",{type:"number",placeholder:"Discount %",id:"discountInput",defaultValue:"20"}),i.jsx("button",{onClick:()=>{const y=parseFloat(document.getElementById("priceInput").value),z=parseFloat(document.getElementById("taxInput").value)/100,R=parseFloat(document.getElementById("discountInput").value)/100,ve=y*(1-R)*(1+z);alert(`Total: $${ve.toFixed(2)}`)},children:"Calculate"})]})]})})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Primitive vs Reference Data Types"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Primitives are like individual text elements in Figma, while references are like components - changing a component affects all instances."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Primitive types (copied by value)
let primitive = "value";
let copy = primitive;        // Independent copy

// Reference types (copied by reference)
let reference = { key: "value" };
let refCopy = reference;     // Same reference

// Creating true copies
let deepCopy = { ...reference };     // Spread operator
let arrayCopy = [...array];          // Array spread`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// PRIMITIVE TYPES (copied by value)
let name = "Sarah";
let age = 28;
let isActive = true;

// When you assign primitives, you copy the value
let nameCopy = name;  // Creates a copy
nameCopy = "Jane";    // Only changes the copy
console.log(name);    // Still "Sarah"
console.log(nameCopy); // "Jane"

// REFERENCE TYPES (copied by reference)
let user = { name: "Sarah", age: 28 };
let colors = ["red", "blue", "green"];

// When you assign references, you copy the reference
let userCopy = user;      // Copies the reference (same object)
userCopy.name = "Jane";   // Changes the original object
console.log(user.name);   // "Jane" (original changed!)
console.log(userCopy.name); // "Jane"

// To create a true copy of objects/arrays:
let userDeepCopy = { ...user };           // Spread operator
let colorsDeepCopy = [...colors];         // Spread operator
let userDeepCopy2 = Object.assign({}, user); // Object.assign`,explanation:"Primitive types are copied by value, while reference types are copied by reference. This affects how data is shared and modified."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Primitive Types (Copied by Value):"}),i.jsxs("div",{className:"result",children:[i.jsxs("div",{children:["Original name: ",i.jsx("span",{className:"code-output",children:l})]}),i.jsxs("div",{children:["Copy name: ",i.jsx("span",{className:"code-output",children:a})]})]}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>{d("Jane")},children:'Change Copy to "Jane"'}),i.jsx("button",{onClick:()=>{c("Sarah"),d("Sarah")},children:"Reset Both"})]}),i.jsx("div",{className:"result",style:{fontSize:"12px",color:"#94a3b8"},children:"Notice: Changing the copy doesn't affect the original"})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Reference Types (Copied by Reference):"}),i.jsxs("div",{className:"result",children:[i.jsxs("div",{children:["Original user: ",i.jsx("span",{className:"code-output",children:h.name})]}),i.jsxs("div",{children:["Copy user: ",i.jsx("span",{className:"code-output",children:f.name})]})]}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>{k(y=>({...y,name:"Jane"}))},children:'Change Copy to "Jane"'}),i.jsx("button",{onClick:()=>{v({name:"Sarah",age:28}),k({name:"Sarah",age:28})},children:"Reset Both"})]}),i.jsx("div",{className:"result",style:{fontSize:"12px",color:"#ef4444"},children:"Notice: Changing the copy affects the original!"})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Creating True Copies:"}),i.jsxs("div",{className:"result",children:[i.jsxs("div",{children:["Original array: [",x.join(", "),"]"]}),i.jsxs("div",{children:["Spread copy: [",I.join(", "),"]"]})]}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>{m(y=>[...y,"yellow"])},children:'Add "yellow" to spread copy'}),i.jsx("button",{onClick:()=>{N(["red","blue","green"]),m(["red","blue","green"])},children:"Reset Arrays"})]}),i.jsx("div",{className:"result",style:{fontSize:"12px",color:"#10b981"},children:"Notice: Spread operator creates independent copies"})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"React State Implications:"}),i.jsxs("div",{className:"result",children:[i.jsxs("div",{children:["User state: ",u.name," (age: ",u.age,")"]}),i.jsxs("div",{children:["Skills: [",u.skills.join(", "),"]"]})]}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>{u.age=u.age+1,p(u)},children:"Wrong: Direct Mutation"}),i.jsx("button",{onClick:()=>{p(y=>({...y,age:y.age+1}))},children:"Correct: New Object"}),i.jsx("button",{onClick:()=>{p(y=>({...y,skills:[...y.skills,"React"]}))},children:"Add Skill"})]}),i.jsx("div",{className:"result",style:{fontSize:"12px",color:"#f59e0b"},children:`Try the "Wrong" button - notice React doesn't update! Then try "Correct" buttons.`})]})]})})]})]})]})]})}function im(){const[e,t]=S.useState(0),[n,r]=S.useState("Designer"),[s,o]=S.useState(!0);S.useState(["red","blue","green"]);const[l,c]=S.useState({name:"Sarah",role:"UX Designer"}),[a,d]=S.useState({showMessage:!1,showCount:!1,hasError:!1,count:5});return i.jsxs("div",{className:"section",children:[i.jsx("h1",{children:"JavaScript Basics"}),i.jsx("p",{children:"Core JavaScript concepts explained with Figma analogies"}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Variables & State"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Variables are like text styles or color styles in Figma - they store reusable values."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// React state
const [state, setState] = useState(initialValue);

// Examples:
const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState('');
const [isVisible, setIsVisible] = useState(true);

// Objects and arrays
const user = { name: 'Sarah', role: 'Designer' };
const colors = ['red', 'blue', 'green'];`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// React state (like dynamic properties in Figma)
const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState('Designer');
const [isVisible, setIsVisible] = useState(true);

// Objects (like component properties in Figma)
const user = { name: 'Sarah', role: 'UX Designer' };

// Arrays (like color palettes in Figma)
const colors = ['red', 'blue', 'green'];`,explanation:"State variables can change over time, just like how you can update text or colors in Figma."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsxs("label",{children:["Counter: ",e]}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>t(e-1),children:i.jsx(Us,{size:16})}),i.jsx("button",{onClick:()=>t(e+1),children:i.jsx(Os,{size:16})}),i.jsx("button",{onClick:()=>t(0),children:i.jsx(ou,{size:16})})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"User Name:"}),i.jsx("input",{value:n,onChange:h=>r(h.target.value),placeholder:"Enter name"})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Visibility:"}),i.jsxs("button",{onClick:()=>o(!s),children:[s?i.jsx(Vp,{size:16}):i.jsx(Hp,{size:16}),s?" Hide":" Show"]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"User Object:"}),i.jsxs("div",{className:"object-display",children:[i.jsxs("span",{children:["Name: ",l.name]}),i.jsxs("span",{children:["Role: ",l.role]})]})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Arrow Functions"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Arrow functions are like quick actions in Figma - shorter, more concise ways to perform tasks."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Traditional function
function functionName(parameters) {
  return value;
}

// Long arrow function (explicit return)
const functionName = (parameters) => {
  return value;
};

// Short arrow function (implicit return)
const functionName = (parameters) => value;

// Single parameter (parentheses optional)
const functionName = parameter => value;

// No parameters
const functionName = () => value;

// Examples:
function calculateArea(width, height) {
  return width * height;
}

const calculateArea = (width, height) => {
  return width * height;
};

const calculateArea = (width, height) => width * height;`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Traditional function (like a full plugin in Figma)
function calculateArea(width, height) {
  return width * height;
}

// Arrow function (like a quick action in Figma)
const calculateArea = (width, height) => {
  return width * height;
};

// Shorter arrow function (implicit return)
const calculateArea = (width, height) => width * height;

// Single parameter (parentheses optional)
const double = x => x * 2;

// No parameters
const getRandomNumber = () => Math.random();

// Usage examples
console.log(calculateArea(10, 5));  // 50
console.log(double(8));            // 16
console.log(getRandomNumber());    // 0.123...`,explanation:"Arrow functions provide a shorter, more modern syntax for writing functions in JavaScript."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Calculate Area:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{type:"number",placeholder:"Width",id:"width",defaultValue:"10"}),i.jsx("input",{type:"number",placeholder:"Height",id:"height",defaultValue:"5"}),i.jsx("button",{onClick:()=>{const h=document.getElementById("width").value,v=document.getElementById("height").value;alert("Area: "+h*v)},children:"Calculate"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Double Number:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{type:"number",placeholder:"Number",id:"doubleInput",defaultValue:"8"}),i.jsx("button",{onClick:()=>{const h=document.getElementById("doubleInput").value;alert(`Double: ${h*2}`)},children:"Double"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Random Number:"}),i.jsx("button",{onClick:()=>alert(`Random: ${Math.random().toFixed(3)}`),children:"Generate"})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Ternary Operator"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Ternary operators are like conditional visibility in Figma - show one thing if true, another if false."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Ternary operator
condition ? valueIfTrue : valueIfFalse

// Examples:
const message = isLoggedIn ? 'Welcome back!' : 'Please log in';
const status = user.isActive ? 'Online' : 'Offline';
const buttonText = isLoading ? 'Loading...' : 'Submit';

// In JSX:
{isVisible ? <Component /> : null}
{user ? <UserProfile /> : <LoginForm />}`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Ternary operator: condition ? valueIfTrue : valueIfFalse
const userRole = "Designer";
const message = userRole === "Designer" ? "Show design tools" : "Show general tools";

// Multiple conditions
const status = user.isActive 
  ? "Online" 
  : user.lastSeen 
    ? "Last seen recently" 
    : "Offline";

// In JSX (React)
const buttonText = isLoading ? "Loading..." : "Submit";
const buttonColor = isError ? "red" : "blue";

// Usage examples
console.log(message);  // "Show design tools"
console.log(status);   // "Online" or "Last seen recently" or "Offline"`,explanation:"Ternary operators provide a concise way to write conditional logic in a single line."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"User Role:"}),i.jsxs("select",{id:"userRole",defaultValue:"Designer",onChange:h=>{const f=h.target.value==="Designer"?"Show design tools":"Show general tools";document.getElementById("roleMessage").textContent=f},children:[i.jsx("option",{value:"Designer",children:"Designer"}),i.jsx("option",{value:"Developer",children:"Developer"}),i.jsx("option",{value:"Manager",children:"Manager"})]}),i.jsxs("div",{className:"result",children:["Message: ",i.jsx("span",{id:"roleMessage",children:"Show design tools"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Loading State:"}),i.jsx("div",{className:"button-group",children:i.jsx("button",{onClick:()=>{const h=document.getElementById("loadingBtn");h.textContent=h.textContent==="Submit"?"Loading...":"Submit",h.style.backgroundColor=h.textContent==="Loading..."?"#f59e0b":"#3b82f6"},id:"loadingBtn",style:{backgroundColor:"#3b82f6"},children:"Submit"})})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Theme Toggle:"}),i.jsx("button",{onClick:()=>{const h=document.getElementById("themeDisplay");h.textContent=h.textContent==="Light"?"Dark":"Light",h.style.color=h.textContent==="Dark"?"#fbbf24":"#1f2937"},children:"Toggle Theme"}),i.jsxs("div",{className:"result",children:["Current: ",i.jsx("span",{id:"themeDisplay",style:{color:"#1f2937"},children:"Light"})]})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Destructuring"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Destructuring is like extracting specific properties from a component in Figma - you pull out just what you need."]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Object destructuring (like extracting component properties)
const user = {
  name: "Sarah",
  role: "UX Designer",
  skills: ["Figma", "React"],
  isActive: true
};

// Extract specific properties
const { name, role } = user;
console.log(name);  // "Sarah"
console.log(role);  // "UX Designer"

// Rename variables
const { name: userName, role: userRole } = user;

// Default values
const { theme = "light", language = "en" } = user;

// Array destructuring
const colors = ["red", "blue", "green"];
const [firstColor, secondColor] = colors;
console.log(firstColor);   // "red"
console.log(secondColor);  // "blue"

// Skip elements
const [primary, , tertiary] = colors;
console.log(primary);   // "red"
console.log(tertiary);  // "green"`,explanation:"Destructuring allows you to extract values from objects and arrays into separate variables."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Output:"}),i.jsxs("div",{className:"output-content",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"name:"})," ",i.jsx("span",{className:"code-output",children:"Sarah"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"role:"})," ",i.jsx("span",{className:"code-output",children:"UX Designer"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"firstColor:"})," ",i.jsx("span",{className:"code-output",children:"red"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"tertiary:"})," ",i.jsx("span",{className:"code-output",children:"green"})]})]})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Template Literals"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Template literals are like smart text in Figma - they combine static text with dynamic values."]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Template literals (like smart text in Figma)
const userName = "Sarah";
const taskCount = 5;

// Old way (concatenation)
const message1 = "Hello " + userName + ", you have " + taskCount + " tasks";

// Template literal (modern way)
const message2 = \`Hello \${userName}, you have \${taskCount} tasks\`;

// Multi-line strings
const emailTemplate = \`
  Dear \${userName},
  
  You have \${taskCount} pending tasks.
  Please complete them by the end of the week.
  
  Best regards,
  The Team
\`;

// Expressions in template literals
const status = \`User is \${userName ? 'logged in' : 'logged out'}\`;

console.log(message2);  // "Hello Sarah, you have 5 tasks"`,explanation:"Template literals provide a cleaner way to create strings with embedded expressions."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Output:"}),i.jsxs("div",{className:"output-content",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"message2:"})," ",i.jsx("span",{className:"code-output",children:"Hello Sarah, you have 5 tasks"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"status:"})," ",i.jsx("span",{className:"code-output",children:"User is logged in"})]})]})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Array Methods"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Array methods are like layer operations in Figma - you can filter, transform, and organize your data."]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Array methods (like layer operations in Figma)
const tasks = [
  { id: 1, title: "Design homepage", completed: false, priority: "high" },
  { id: 2, title: "Create wireframes", completed: true, priority: "medium" },
  { id: 3, title: "Build prototype", completed: false, priority: "high" }
];

// map() - transform each item (like duplicating and modifying layers)
const taskTitles = tasks.map(task => task.title);
console.log(taskTitles); // ["Design homepage", "Create wireframes", "Build prototype"]

// filter() - show only items that match criteria (like hiding layers)
const highPriorityTasks = tasks.filter(task => task.priority === "high");
const incompleteTasks = tasks.filter(task => !task.completed);

// find() - find first matching item (like selecting a specific layer)
const firstHighPriority = tasks.find(task => task.priority === "high");

// reduce() - combine all items into one value (like grouping layers)
const totalTasks = tasks.reduce((count, task) => count + 1, 0);
const completedCount = tasks.reduce((count, task) => 
  task.completed ? count + 1 : count, 0
);`,explanation:"Array methods provide powerful ways to manipulate and transform data collections."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Output:"}),i.jsxs("div",{className:"output-content",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"taskTitles:"})," ",i.jsx("span",{className:"code-output",children:'["Design homepage", "Create wireframes", "Build prototype"]'})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"highPriorityTasks:"})," ",i.jsx("span",{className:"code-output",children:"2 items"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"totalTasks:"})," ",i.jsx("span",{className:"code-output",children:"3"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"completedCount:"})," ",i.jsx("span",{className:"code-output",children:"1"})]})]})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Logical AND (&&) Operator"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Logical AND is like conditional visibility in Figma - only show an element when a condition is true."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Logical AND operator
{condition && <Component />}

// Examples:
{isLoggedIn && <UserProfile />}
{hasError && <ErrorMessage />}
{isLoading && <Spinner />}
{user && <WelcomeMessage user={user} />}

// Multiple conditions
{isLoggedIn && isAdmin && <AdminPanel />}
{hasData && !isLoading && <DataDisplay />}

// With expressions
{count > 0 && <span>Items: {count}</span>}
{name && <h1>Hello, {name}!</h1>}`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Logical AND examples
function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div>
      {/* Show notification count only if there are notifications */}
      {notifications.length > 0 && (
        <span className="badge">{notifications.length}</span>
      )}
      
      {/* Show notification panel only if toggle is on */}
      {showNotifications && (
        <div className="notification-panel">
          {notifications.map(notification => (
            <div key={notification.id}>{notification.message}</div>
          ))}
        </div>
      )}
      
      {/* Show empty state only if no notifications */}
      {notifications.length === 0 && (
        <p>No notifications</p>
      )}
    </div>
  );
}

// Common patterns
function UserInterface({ user, isLoading, error }) {
  return (
    <div>
      {/* Loading state */}
      {isLoading && <Spinner />}
      
      {/* Error state */}
      {error && <ErrorMessage message={error} />}
      
      {/* User content only when not loading and no error */}
      {!isLoading && !error && user && (
        <UserDashboard user={user} />
      )}
    </div>
  );
}`,explanation:"The logical AND operator (&&) is perfect for conditional rendering - it only renders the right side when the left side is truthy."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Logical AND Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Toggle Conditions:"}),i.jsxs("div",{className:"button-group",children:[i.jsxs("button",{onClick:()=>d(h=>({...h,showMessage:!h.showMessage})),children:[a.showMessage?"Hide":"Show"," Message"]}),i.jsxs("button",{onClick:()=>d(h=>({...h,showCount:!h.showCount})),children:[a.showCount?"Hide":"Show"," Count"]}),i.jsxs("button",{onClick:()=>d(h=>({...h,hasError:!h.hasError})),children:[a.hasError?"Clear":"Show"," Error"]})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Conditional Elements:"}),i.jsxs("div",{className:"result",children:[a.showMessage&&i.jsx("div",{style:{color:"#10b981",marginBottom:"8px"},children:"✅ This message only shows when condition is true"}),a.showCount&&i.jsxs("div",{style:{color:"#3b82f6",marginBottom:"8px"},children:["📊 Count: ",a.count]}),a.hasError&&i.jsx("div",{style:{color:"#ef4444",marginBottom:"8px"},children:"❌ Error: Something went wrong!"}),!a.showMessage&&!a.showCount&&!a.hasError&&i.jsx("div",{style:{color:"#94a3b8"},children:"No conditions are true - nothing to show"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Multiple Conditions:"}),i.jsx("div",{className:"result",children:a.showMessage&&a.showCount&&i.jsx("div",{style:{color:"#8b5cf6"},children:"🎉 Both conditions are true!"})})]})]})})]})]})]})]})}function rm(){return i.jsxs("div",{className:"section",children:[i.jsx("h1",{children:"React Core Concepts"}),i.jsx("p",{children:"Understanding React fundamentals through design thinking"}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"What is React?"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," React is like Figma's component system on steroids - it's a library for building reusable UI components."]}),i.jsx("p",{children:"React is a JavaScript library for building user interfaces. It's like having a super-powered component system where you can create interactive, dynamic interfaces that respond to user actions and data changes."})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"JSX - JavaScript XML"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," JSX is like writing design specs in Figma - it combines structure (HTML) with logic (JavaScript)."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// JSX combines HTML with JavaScript
const element = (
  <div className="container">
    <h1>Hello, {userName}!</h1>
    <p>Count: {count}</p>
    <button onClick={handleClick}>
      Click me
    </button>
  </div>
);

// JSX Rules:
// 1. Use className instead of class
// 2. Use camelCase for attributes
// 3. Use {} for JavaScript expressions
// 4. Must return single parent element`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// JSX combines HTML-like syntax with JavaScript
const userName = "Sarah";
const taskCount = 5;

const element = (
  <div className="card">
    <h2>Welcome, {userName}!</h2>
    <p>You have {taskCount} tasks remaining</p>
    <button onClick={handleClick}>
      Complete Task
    </button>
  </div>
);

// JSX Rules:
// 1. Must return a single parent element
// 2. Use className instead of class
// 3. Use camelCase for attributes
// 4. Use {} for JavaScript expressions`,explanation:"JSX allows you to write HTML-like code inside JavaScript, making it easier to create and manage UI components."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive JSX Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"User Name:"}),i.jsx("input",{type:"text",placeholder:"Enter name",id:"jsxUserName",defaultValue:"Sarah",onChange:e=>{const t=e.target.value;document.getElementById("jsxNameDisplay").textContent=t||"User"}})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Task Count:"}),i.jsx("input",{type:"number",placeholder:"Number of tasks",id:"jsxTaskCount",defaultValue:"5",onChange:e=>{const t=e.target.value;document.getElementById("jsxTaskDisplay").textContent=t||"0"}})]}),i.jsx("div",{className:"jsx-preview",children:i.jsxs("div",{className:"card",children:[i.jsxs("h2",{children:["Welcome, ",i.jsx("span",{id:"jsxNameDisplay",children:"Sarah"}),"!"]}),i.jsxs("p",{children:["You have ",i.jsx("span",{id:"jsxTaskDisplay",children:"5"})," tasks remaining"]}),i.jsx("button",{onClick:()=>alert("Task completed!"),children:"Complete Task"})]})})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Component Types"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Different component types are like different types of Figma components - some are simple, others are complex."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Function Component (Modern)
function ComponentName({ prop1, prop2 }) {
  return <div>Content</div>;
}

// Arrow Function Component
const ComponentName = ({ prop1, prop2 }) => {
  return <div>Content</div>;
};

// Class Component (Legacy)
class ComponentName extends React.Component {
  render() {
    return <div>Content</div>;
  }
}

// Pure Component
const PureComponent = React.memo(({ prop1 }) => {
  return <div>Content</div>;
});`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// 1. Function Components (Modern, recommended)
function WelcomeCard({ name, role }) {
  return (
    <div className="welcome-card">
      <h2>Welcome, {name}!</h2>
      <p>Role: {role}</p>
    </div>
  );
}

// 2. Arrow Function Components
const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

// 3. Class Components (Legacy, avoid for new code)
class OldComponent extends React.Component {
  render() {
    return <div>Old way of writing components</div>;
  }
}

// 4. Pure Components (Performance optimized)
const PureButton = React.memo(({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
));`,explanation:"Function components are the modern way to write React components. They're simpler and work better with hooks."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Component Types:"}),i.jsxs("div",{className:"output-content",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Function:"})," ",i.jsx("span",{className:"code-output",children:"Modern, hooks-friendly"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Arrow Function:"})," ",i.jsx("span",{className:"code-output",children:"Concise syntax"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Class:"})," ",i.jsx("span",{className:"code-output",children:"Legacy, avoid"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Pure:"})," ",i.jsx("span",{className:"code-output",children:"Performance optimized"})]})]})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Fragments & Multiple Elements"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Fragments are like grouping elements in Figma without adding an extra container - you can return multiple items without a wrapper."]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Without Fragment (adds extra div)
function ListItems() {
  return (
    <div>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </div>
  );
}

// With Fragment (no extra element)
function ListItems() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </>
  );
}

// With React.Fragment (explicit)
function ListItems() {
  return (
    <React.Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </React.Fragment>
  );
}

// Array of elements (with keys)
function ListItems() {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return items.map((item, index) => (
    <li key={index}>{item}</li>
  ));
}`,explanation:"Fragments allow you to return multiple elements without adding an extra DOM node, keeping your HTML clean."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Fragment Types:"}),i.jsxs("div",{className:"output-content",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Empty Tags:"})," ",i.jsx("span",{className:"code-output",children:"<> </>"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"React.Fragment:"})," ",i.jsx("span",{className:"code-output",children:"Explicit syntax"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Arrays:"})," ",i.jsx("span",{className:"code-output",children:"With keys"})]})]})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Conditional Rendering"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Conditional rendering is like using visibility settings in Figma - show different content based on conditions."]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// 1. If/else with ternary operator
function Greeting({ isLoggedIn, username }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back, {username}!</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}

// 2. Logical AND operator (&&)
function Notification({ message, show }) {
  return (
    <div>
      {show && <div className="notification">{message}</div>}
    </div>
  );
}

// 3. Multiple conditions
function UserStatus({ user }) {
  if (!user) return <div>Loading...</div>;
  if (user.error) return <div>Error: {user.error}</div>;
  if (user.isAdmin) return <AdminPanel />;
  return <UserPanel />;
}

// 4. Switch-like pattern
function getStatusColor(status) {
  switch (status) {
    case 'success': return 'green';
    case 'error': return 'red';
    case 'warning': return 'orange';
    default: return 'gray';
  }
}`,explanation:"Conditional rendering allows you to show different UI based on conditions, just like how you control visibility in Figma."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Conditional Patterns:"}),i.jsxs("div",{className:"output-content",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Ternary:"})," ",i.jsx("span",{className:"code-output",children:"condition ? A : B"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Logical AND:"})," ",i.jsx("span",{className:"code-output",children:"condition && element"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Early Return:"})," ",i.jsx("span",{className:"code-output",children:"if (condition) return"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Switch:"})," ",i.jsx("span",{className:"code-output",children:"Multiple conditions"})]})]})]})]})]})]})}function sm(){const[e,t]=S.useState("Click me"),[n,r]=S.useState("primary"),[s,o]=S.useState("medium"),[l,c]=S.useState(!1),[a,d]=S.useState({name:"John Doe",email:"john@example.com",id:1}),[h,v]=S.useState("My Container"),[f,k]=S.useState("This is some content"),[x,N]=S.useState(null),[I,m]=S.useState(!1),[u,p]=S.useState({name:"",email:""});return i.jsxs("div",{className:"section",children:[i.jsx("h1",{children:"React Components"}),i.jsx("p",{children:"Building reusable UI pieces like Figma components"}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Props Deep Dive"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Props are like component properties in Figma - they allow you to customize instances with different values."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Component with props
function ComponentName({ prop1, prop2, children }) {
  return <div>{prop1} {prop2} {children}</div>;
}

// Using the component
<ComponentName prop1="value1" prop2="value2">
  Child content
</ComponentName>

// Default props
ComponentName.defaultProps = {
  prop1: 'default value'
};

// Props validation
ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number
};`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// 1. Basic props
function Button({ text, variant, size, disabled }) {
  return (
    <button 
      className={\`btn btn-\${variant} btn-\${size} \${disabled ? 'disabled' : ''}\`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

// 2. Default props
Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false
};

// 3. Props validation (with PropTypes)
import PropTypes from 'prop-types';

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

// 4. Destructuring props
function UserCard({ user, onEdit, onDelete, ...otherProps }) {
  return (
    <div className="user-card" {...otherProps}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user.id)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
}

// 5. Children prop (for composition)
function Container({ children, title, className }) {
  return (
    <div className={\`container \${className || ''}\`}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}`,explanation:"Props are the primary way to pass data and functions to components, making them reusable and customizable."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Props Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Button Props:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{value:e,onChange:g=>t(g.target.value),placeholder:"Button text"}),i.jsxs("select",{value:n,onChange:g=>r(g.target.value),children:[i.jsx("option",{value:"primary",children:"Primary"}),i.jsx("option",{value:"secondary",children:"Secondary"}),i.jsx("option",{value:"danger",children:"Danger"})]}),i.jsxs("select",{value:s,onChange:g=>o(g.target.value),children:[i.jsx("option",{value:"small",children:"Small"}),i.jsx("option",{value:"medium",children:"Medium"}),i.jsx("option",{value:"large",children:"Large"})]}),i.jsx("button",{onClick:()=>c(!l),children:l?"Enable":"Disable"})]}),i.jsx("div",{className:"result",children:i.jsx("button",{className:`btn btn-${n} btn-${s} ${l?"disabled":""}`,disabled:l,onClick:()=>alert("Button clicked!"),style:{backgroundColor:n==="primary"?"#3b82f6":n==="secondary"?"#6b7280":"#ef4444",padding:s==="small"?"4px 8px":s==="medium"?"8px 16px":"12px 24px",opacity:l?.6:1,cursor:l?"not-allowed":"pointer"},children:e})})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"User Card Props:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{value:a.name,onChange:g=>d(w=>({...w,name:g.target.value})),placeholder:"User name"}),i.jsx("input",{value:a.email,onChange:g=>d(w=>({...w,email:g.target.value})),placeholder:"User email"})]}),i.jsx("div",{className:"result",children:i.jsxs("div",{className:"user-card",style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[i.jsx("h3",{style:{margin:"0 0 8px 0"},children:a.name}),i.jsx("p",{style:{margin:"0 0 12px 0",color:"#6b7280"},children:a.email}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>alert("Edit user: "+a.id),style:{marginRight:"8px"},children:"Edit"}),i.jsx("button",{onClick:()=>alert("Delete user: "+a.id),style:{backgroundColor:"#ef4444"},children:"Delete"})]})]})})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Container with Children:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{value:h,onChange:g=>v(g.target.value),placeholder:"Container title"}),i.jsx("input",{value:f,onChange:g=>k(g.target.value),placeholder:"Container content"})]}),i.jsx("div",{className:"result",children:i.jsxs("div",{className:"container",style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[h&&i.jsx("h2",{style:{margin:"0 0 12px 0"},children:h}),i.jsx("div",{children:f})]})})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Component Composition Patterns"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Component composition is like building complex designs in Figma by combining and nesting simple components."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Children composition
function Container({ children, title }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

// Render props
function DataProvider({ children }) {
  const [data, setData] = useState(null);
  return children({ data, setData });
}

// Higher-order component
function withFeature(Component) {
  return function EnhancedComponent(props) {
    return <Component {...props} feature={true} />;
  };
}

// Compound components
function Form({ children }) {
  return <form>{children}</form>;
}
Form.Input = ({ label, ...props }) => (
  <div><label>{label}</label><input {...props} /></div>
);`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// 1. Children composition
function Layout({ header, sidebar, main, footer }) {
  return (
    <div className="layout">
      <header>{header}</header>
      <div className="content">
        <aside>{sidebar}</aside>
        <main>{main}</main>
      </div>
      <footer>{footer}</footer>
    </div>
  );
}

// 2. Render props pattern
function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return children({ data, loading });
}

// 3. Higher-order components (HOC)
function withLoading(Component) {
  return function WrappedComponent({ loading, ...props }) {
    if (loading) return <div>Loading...</div>;
    return <Component {...props} />;
  };
}

// 4. Compound components
function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
}

Form.Input = function FormInput({ label, ...props }) {
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};

Form.Button = function FormButton({ children, ...props }) {
  return <button {...props}>{children}</button>;
};`,explanation:"Component composition patterns help you build flexible, reusable component systems."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Composition Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Layout Composition:"}),i.jsx("div",{className:"result",children:i.jsxs("div",{className:"layout",style:{border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[i.jsx("header",{style:{backgroundColor:"#f3f4f6",padding:"12px",borderBottom:"1px solid #e5e7eb"},children:i.jsx("h3",{style:{margin:0},children:"Header Content"})}),i.jsxs("div",{style:{display:"flex"},children:[i.jsxs("aside",{style:{backgroundColor:"#f9fafb",padding:"12px",width:"200px",borderRight:"1px solid #e5e7eb"},children:[i.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Sidebar"}),i.jsxs("ul",{style:{margin:0,paddingLeft:"16px"},children:[i.jsx("li",{children:"Menu Item 1"}),i.jsx("li",{children:"Menu Item 2"}),i.jsx("li",{children:"Menu Item 3"})]})]}),i.jsxs("main",{style:{padding:"16px",flex:1},children:[i.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Main Content"}),i.jsx("p",{children:"This is the main content area with flexible layout composition."})]})]}),i.jsx("footer",{style:{backgroundColor:"#f3f4f6",padding:"12px",borderTop:"1px solid #e5e7eb",textAlign:"center"},children:"Footer Content"})]})})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Data Fetcher (Render Props):"}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>{m(!0),setTimeout(()=>{N({message:"Data loaded successfully!",timestamp:new Date().toLocaleTimeString()}),m(!1)},1500)},children:"Simulate Data Fetch"}),i.jsx("button",{onClick:()=>{N(null),m(!1)},children:"Clear Data"})]}),i.jsx("div",{className:"result",children:I?i.jsx("div",{style:{color:"#f59e0b"},children:"🔄 Loading data..."}):x?i.jsxs("div",{style:{color:"#10b981"},children:["✅ ",x.message,i.jsx("br",{}),i.jsxs("small",{children:["Time: ",x.timestamp]})]}):i.jsx("div",{style:{color:"#6b7280"},children:"No data loaded"})})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Compound Form Components:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{value:u.name,onChange:g=>p(w=>({...w,name:g.target.value})),placeholder:"Name"}),i.jsx("input",{value:u.email,onChange:g=>p(w=>({...w,email:g.target.value})),placeholder:"Email"})]}),i.jsx("div",{className:"result",children:i.jsxs("form",{onSubmit:g=>{g.preventDefault(),alert("Form submitted: "+JSON.stringify(u))},style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[i.jsxs("div",{style:{marginBottom:"12px"},children:[i.jsx("label",{style:{display:"block",marginBottom:"4px"},children:"Name:"}),i.jsx("input",{value:u.name,onChange:g=>p(w=>({...w,name:g.target.value})),style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #d1d5db"}})]}),i.jsxs("div",{style:{marginBottom:"12px"},children:[i.jsx("label",{style:{display:"block",marginBottom:"4px"},children:"Email:"}),i.jsx("input",{value:u.email,onChange:g=>p(w=>({...w,email:g.target.value})),style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #d1d5db"}})]}),i.jsx("button",{type:"submit",style:{backgroundColor:"#3b82f6",color:"white",padding:"8px 16px",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Submit Form"})]})})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Component Best Practices"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Component best practices are like design system guidelines in Figma - they ensure consistency and maintainability."]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// 1. Single responsibility
// ❌ Bad: Component doing too much
function UserDashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <UserList />
      <UserForm />
      <UserStats />
      <UserSettings />
    </div>
  );
}

// ✅ Good: Focused components
function UserDashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <UserManagement />
      <UserAnalytics />
    </div>
  );
}

// 2. Props interface design
// ❌ Bad: Too many props
function Button({ text, color, size, disabled, loading, icon, ...rest }) {
  // Too many options
}

// ✅ Good: Logical prop groups
function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  loading = false,
  ...props 
}) {
  // Clean, focused interface
}

// 3. Consistent naming
// ✅ Good: Clear, descriptive names
function UserProfileCard() { }
function UserProfileForm() { }
function UserProfileList() { }

// 4. Error boundaries
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}`,explanation:"Following best practices ensures your components are maintainable, reusable, and performant."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Best Practices:"}),i.jsxs("div",{className:"output-content",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Single Responsibility:"})," ",i.jsx("span",{className:"code-output",children:"One job per component"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Clean Props:"})," ",i.jsx("span",{className:"code-output",children:"Logical interfaces"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Consistent Naming:"})," ",i.jsx("span",{className:"code-output",children:"Clear conventions"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Error Handling:"})," ",i.jsx("span",{className:"code-output",children:"Error boundaries"})]})]})]})]})]})]})}function om(){const[e,t]=S.useState(0),[n,r]=S.useState({name:"",email:""}),[s,o]=S.useState(""),[l,c]=S.useState([]),[a,d]=S.useState("React Cheatsheet"),[h,v]=S.useState(0),[f,k]=S.useState({width:window.innerWidth,height:window.innerHeight});return S.useEffect(()=>{document.title=a},[a]),S.useEffect(()=>{const x=()=>{k({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),i.jsxs("div",{className:"section",children:[i.jsx("h1",{children:"React Hooks"}),i.jsx("p",{children:"Managing state and side effects in components"}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"useState Hook Deep Dive"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," useState is like having interactive properties in Figma - values that can change and update the UI."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`const [state, setState] = useState(initialValue);

// Examples:
const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [user, setUser] = useState({ name: '', email: '' });
const [todos, setTodos] = useState([]);`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// 1. Basic useState
const [count, setCount] = useState(0);

// 2. Multiple state variables
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [isSubscribed, setIsSubscribed] = useState(false);

// 3. Object state
const [user, setUser] = useState({
  name: '',
  email: '',
  preferences: {}
});

// 4. Array state
const [todos, setTodos] = useState([]);

// 5. Functional initial state (lazy initialization)
const [expensiveValue, setExpensiveValue] = useState(() => {
  return computeExpensiveValue();
});

// 6. State updates
// Direct update
setCount(count + 1);

// Functional update (safer for multiple updates)
setCount(prevCount => prevCount + 1);

// Object update (preserve other properties)
setUser(prevUser => ({
  ...prevUser,
  name: 'New Name'
}));

// Array update
setTodos(prevTodos => [...prevTodos, newTodo]);

// 7. State update patterns
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue(''); // Clear input
    }
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add todo..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li 
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}`,explanation:"useState is the most fundamental hook for managing component state. It returns the current state and a function to update it."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive useState Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsxs("label",{children:["Counter: ",e]}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>t(e-1),children:i.jsx(Us,{size:16})}),i.jsx("button",{onClick:()=>t(e+1),children:i.jsx(Os,{size:16})}),i.jsx("button",{onClick:()=>t(0),children:i.jsx(ou,{size:16})})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"User Form:"}),i.jsx("input",{value:n.name,onChange:x=>r(N=>({...N,name:x.target.value})),placeholder:"Name"}),i.jsx("input",{value:n.email,onChange:x=>r(N=>({...N,email:x.target.value})),placeholder:"Email"}),i.jsxs("div",{className:"result",children:["Name: ",n.name||"Not set"," | Email: ",n.email||"Not set"]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Todo List:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{value:s,onChange:x=>o(x.target.value),placeholder:"Add todo"}),i.jsx("button",{onClick:()=>{s.trim()&&(c(x=>[...x,{id:Date.now(),text:s,completed:!1}]),o(""))},children:"Add"})]}),i.jsx("ul",{className:"todo-list",children:l.map(x=>i.jsx("li",{onClick:()=>c(N=>N.map(I=>I.id===x.id?{...I,completed:!I.completed}:I)),style:{textDecoration:x.completed?"line-through":"none",cursor:"pointer"},children:x.text},x.id))})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"useEffect Hook Deep Dive"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," useEffect is like auto-layout or smart animate in Figma - it runs code when something changes."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`useEffect(() => {
  // Effect code
}, [dependencies]);

// Examples:
useEffect(() => {}, []);           // Run once
useEffect(() => {}, [dep]);        // Run when dep changes
useEffect(() => {
  return () => cleanup();          // Cleanup function
}, []);`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// 1. Basic useEffect (runs after every render)
useEffect(() => {
  console.log('Component rendered');
});

// 2. Empty dependency array (runs only once)
useEffect(() => {
  console.log('Component mounted');
  // Cleanup function
  return () => {
    console.log('Component will unmount');
  };
}, []);

// 3. With dependencies (runs when dependencies change)
useEffect(() => {
  fetchUserData(userId);
}, [userId]);

// 4. Cleanup function
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer tick');
  }, 1000);

  return () => {
    clearInterval(timer); // Cleanup
  };
}, []);

// 5. Multiple effects
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Effect for user data
  useEffect(() => {
    setLoading(true);
    fetchUser(userId)
      .then(data => setUser(data))
      .finally(() => setLoading(false));
  }, [userId]);

  // Effect for user posts
  useEffect(() => {
    if (user) {
      fetchUserPosts(user.id)
        .then(data => setPosts(data));
    }
  }, [user]);

  // Effect for document title
  useEffect(() => {
    if (user) {
      document.title = \`Profile - \${user.name}\`;
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <h2>Posts ({posts.length})</h2>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}`,explanation:"useEffect handles side effects in functional components, such as data fetching, subscriptions, or DOM manipulation."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive useEffect Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Document Title Effect:"}),i.jsx("input",{value:a,onChange:x=>d(x.target.value),placeholder:"Enter page title"}),i.jsxs("div",{className:"result",children:["Current title: ",document.title]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Counter with Effect:"}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>v(h-1),children:i.jsx(Us,{size:16})}),i.jsx("span",{style:{padding:"8px 16px",background:"rgba(255,255,255,0.1)",borderRadius:"4px"},children:h}),i.jsx("button",{onClick:()=>v(h+1),children:i.jsx(Os,{size:16})})]}),i.jsxs("div",{className:"result",children:["Effect runs when count changes: ",h%2===0?"Even":"Odd"]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Window Size Effect:"}),i.jsxs("div",{className:"result",children:["Window size: ",f.width," x ",f.height]})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Additional Hooks"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Additional hooks are like specialized tools in Figma - each serves a specific purpose."]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// 1. useRef - Access DOM elements
function TextInputWithFocusButton() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </>
  );
}

// 2. useMemo - Memoize expensive calculations
function ExpensiveComponent({ items }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  return <div>Total: {expensiveValue}</div>;
}

// 3. useCallback - Memoize functions
function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty dependency array = function never changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
}

// 4. useReducer - Complex state logic
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id 
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'ADD_TODO', text: 'New Todo' })}>
        Add Todo
      </button>
      {todos.map(todo => (
        <div key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}>
            Toggle
          </button>
          <button onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}`,explanation:"Additional hooks provide specialized functionality for different use cases in React applications."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Additional Hooks:"}),i.jsxs("div",{className:"output-content",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"useRef:"})," ",i.jsx("span",{className:"code-output",children:"DOM access"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"useMemo:"})," ",i.jsx("span",{className:"code-output",children:"Memoize values"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"useCallback:"})," ",i.jsx("span",{className:"code-output",children:"Memoize functions"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"useReducer:"})," ",i.jsx("span",{className:"code-output",children:"Complex state"})]})]})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Custom Hooks"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Custom hooks are like creating your own plugins in Figma - reusable logic that can be shared between components."]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// 1. Basic custom hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// 2. Data fetching hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// 3. Local storage hook
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }, [key, value]);

  return [value, setValue];
}

// 4. Window size hook
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// Using custom hooks
function App() {
  const { count, increment, decrement, reset } = useCounter(10);
  const { data, loading, error } = useFetch('/api/users');
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>Custom Hooks Demo</h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <p>Window: {width} x {height}</p>
        <p>Theme: {theme}</p>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}`,explanation:"Custom hooks let you extract and reuse stateful logic between components, making your code more modular and reusable."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Custom Hook Benefits:"}),i.jsxs("div",{className:"output-content",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Reusability:"})," ",i.jsx("span",{className:"code-output",children:"Share logic"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Cleaner Components:"})," ",i.jsx("span",{className:"code-output",children:"Less complexity"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Testing:"})," ",i.jsx("span",{className:"code-output",children:"Easier to test"})]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Composition:"})," ",i.jsx("span",{className:"code-output",children:"Combine hooks"})]})]})]})]})]})]})}function lm(){const[e,t]=S.useState([{id:1,title:"Design homepage",completed:!1,category:"design"},{id:2,title:"Create wireframes",completed:!0,category:"design"},{id:3,title:"Build prototype",completed:!1,category:"development"},{id:4,title:"Write tests",completed:!1,category:"testing"},{id:5,title:"Deploy app",completed:!1,category:"deployment"}]),[n,r]=S.useState("all"),[s,o]=S.useState(""),[l,c]=S.useState({name:"Sarah",isAdmin:!1,loading:!1,error:null}),[a,d]=S.useState({name:"",email:""}),[h,v]=S.useState(!1),[f,k]=S.useState(!1),[x,N]=S.useState(!1),[I,m]=S.useState(0);return i.jsxs("div",{className:"section",children:[i.jsx("h1",{children:"Data Handling"}),i.jsx("p",{children:"Working with dynamic data and lists"}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Mapping Arrays"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," map() is like duplicating components in Figma - you create multiple instances from a list."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`array.map(item => (
  <Component key={item.id}>
    {item.property}
  </Component>
));

// Examples:
items.map(item => <li key={item.id}>{item.name}</li>);
users.map(user => <UserCard key={user.id} user={user} />);`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Mapping over arrays (like duplicating components in Figma)
const tasks = [
  { id: 1, title: "Design homepage", completed: false },
  { id: 2, title: "Create wireframes", completed: true },
  { id: 3, title: "Build prototype", completed: false }
];

function TaskList() {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          {task.title}
        </li>
      ))}
    </ul>
  );
}`,explanation:"map() transforms each item in an array into a React element, creating a list of components from your data."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Array Mapping:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Task List (Mapped from Array):"}),i.jsx("ul",{className:"todo-list",children:e.map(u=>i.jsxs("li",{onClick:()=>t(p=>p.map(g=>g.id===u.id?{...g,completed:!g.completed}:g)),style:{textDecoration:u.completed?"line-through":"none",cursor:"pointer",opacity:u.completed?.6:1},children:[u.title," ",u.completed&&"✓"]},u.id))})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Add New Task:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{value:s,onChange:u=>o(u.target.value),placeholder:"Enter task title"}),i.jsx("button",{onClick:()=>{s.trim()&&(t(u=>[...u,{id:Date.now(),title:s,completed:!1,category:"general"}]),o(""))},children:"Add Task"})]})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Filtering Data"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," filter() is like using the layers panel to show/hide elements based on criteria."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`array.filter(item => condition);

// Examples:
items.filter(item => item.completed);
users.filter(user => user.isActive);
tasks.filter(task => task.category === 'design');

// Combined with map:
array.filter(item => condition).map(item => <Component />);`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Filtering data (like showing/hiding layers in Figma)
const allTasks = [
  { id: 1, title: "Design", category: "design" },
  { id: 2, title: "Code", category: "development" },
  { id: 3, title: "Test", category: "testing" }
];

function TaskFilter({ category }) {
  // Filter tasks by category
  const filteredTasks = allTasks.filter(task => 
    task.category === category
  );
  
  return (
    <div>
      <h3>{category} Tasks:</h3>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}`,explanation:"filter() creates a new array with only the elements that pass a test, perfect for creating filtered views of your data."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Data Filtering:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Filter by Category:"}),i.jsxs("select",{value:n,onChange:u=>r(u.target.value),children:[i.jsx("option",{value:"all",children:"All Tasks"}),i.jsx("option",{value:"design",children:"Design"}),i.jsx("option",{value:"development",children:"Development"}),i.jsx("option",{value:"testing",children:"Testing"}),i.jsx("option",{value:"deployment",children:"Deployment"}),i.jsx("option",{value:"general",children:"General"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Filtered Tasks:"}),i.jsx("ul",{className:"todo-list",children:e.filter(u=>n==="all"||u.category===n).map(u=>i.jsxs("li",{style:{opacity:u.completed?.6:1},children:[u.title," (",u.category,") ",u.completed&&"✓"]},u.id))}),i.jsxs("div",{className:"result",children:["Showing ",e.filter(u=>n==="all"||u.category===n).length," of ",e.length," tasks"]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Filter by Status:"}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>r("completed"),children:"Show Completed"}),i.jsx("button",{onClick:()=>r("pending"),children:"Show Pending"}),i.jsx("button",{onClick:()=>r("all"),children:"Show All"})]}),i.jsxs("div",{className:"result",children:[n==="completed"&&e.filter(u=>u.completed).length+" completed tasks",n==="pending"&&e.filter(u=>!u.completed).length+" pending tasks",n==="all"&&e.length+" total tasks"]})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Conditional Rendering"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Conditional rendering is like using visibility settings in Figma - showing/hiding elements based on conditions."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}

// Examples:
{isLoading && <Spinner />}
{user ? <UserProfile /> : <LoginForm />}
{items.length > 0 ? <ItemList /> : <EmptyState />}`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Conditional rendering (like visibility settings in Figma)
function UserDashboard({ user, isAdmin }) {
  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}!</h1>
      
      {/* Show different content based on user role */}
      {isAdmin ? (
        <AdminPanel />
      ) : (
        <UserPanel />
      )}
      
      {/* Show loading state */}
      {user.loading && <Spinner />}
      
      {/* Show error if exists */}
      {user.error && (
        <div className="error">
          Error: {user.error}
        </div>
      )}
    </div>
  );
}`,explanation:"Conditional rendering allows you to show different UI based on conditions, just like how you control visibility in Figma."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Conditional Rendering:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"User Role Toggle:"}),i.jsx("div",{className:"button-group",children:i.jsx("button",{onClick:()=>c(u=>({...u,isAdmin:!u.isAdmin})),style:{backgroundColor:l.isAdmin?"#10b981":"#6b7280"},children:l.isAdmin?"Admin Mode":"User Mode"})})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Dashboard Preview:"}),i.jsx("div",{className:"jsx-preview",children:i.jsxs("div",{className:"card",children:[i.jsxs("h2",{children:["Welcome, ",l.name,"!"]}),l.isAdmin?i.jsxs("div",{style:{background:"#fef3c7",padding:"12px",borderRadius:"4px",border:"1px solid #f59e0b"},children:[i.jsx("strong",{children:"Admin Panel:"})," You have full access to all features"]}):i.jsxs("div",{style:{background:"#dbeafe",padding:"12px",borderRadius:"4px",border:"1px solid #3b82f6"},children:[i.jsx("strong",{children:"User Panel:"})," Limited access to basic features"]}),l.loading&&i.jsx("div",{style:{background:"#f3f4f6",padding:"12px",borderRadius:"4px",textAlign:"center"},children:"⏳ Loading..."}),l.error&&i.jsxs("div",{style:{background:"#fee2e2",padding:"12px",borderRadius:"4px",border:"1px solid #ef4444",color:"#dc2626"},children:["Error: ",l.error]})]})})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Simulate States:"}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>c(u=>({...u,loading:!u.loading})),children:l.loading?"Stop Loading":"Start Loading"}),i.jsx("button",{onClick:()=>c(u=>({...u,error:u.error?null:"Something went wrong!"})),children:l.error?"Clear Error":"Show Error"})]})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Key-Value Pairs & Object Manipulation"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Key-value pairs are like component properties in Figma - each property has a name (key) and a value that can be changed."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`const object = {
  key: value,
  property: data
};

object.key;              // Access
object["key"];           // Bracket notation
object.newKey = value;   // Add property
const { key } = object;  // Destructuring`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Key-value pairs in objects (like Figma component properties)
const user = {
  name: "Sarah",           // key: "name", value: "Sarah"
  age: 28,                 // key: "age", value: 28
  isAdmin: false,          // key: "isAdmin", value: false
  preferences: {           // nested object
    theme: "dark",
    language: "en"
  }
};

// Accessing values
console.log(user.name);           // "Sarah"
console.log(user["age"]);         // 28 (bracket notation)
console.log(user.preferences.theme); // "dark"

// Updating values
user.age = 29;                    // Direct assignment
user["isAdmin"] = true;           // Bracket notation
user.preferences.theme = "light"; // Nested update

// Adding new key-value pairs
user.email = "sarah@example.com";
user["lastLogin"] = new Date();

// Destructuring (extracting values)
const { name, age, isAdmin } = user;
const { preferences: { theme } } = user; // Nested destructuring

// Object spread (creating copies)
const updatedUser = { ...user, age: 30 };
const userWithNewProps = { ...user, department: "Design" };`,explanation:"Objects are collections of key-value pairs, where each key is a string and each value can be any data type. This is fundamental for managing state and data in React."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Object Manipulation:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"User Object:"}),i.jsx("div",{className:"result",children:i.jsx("pre",{style:{fontSize:"12px",textAlign:"left"},children:JSON.stringify(l,null,2)})})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Update User Properties:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{placeholder:"New name",onKeyPress:u=>{u.key==="Enter"&&u.target.value.trim()&&(c(p=>({...p,name:u.target.value})),u.target.value="")}}),i.jsx("button",{onClick:()=>c(u=>({...u,isAdmin:!u.isAdmin})),children:"Toggle Admin"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Add New Properties:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{placeholder:"Property name",id:"propName"}),i.jsx("input",{placeholder:"Property value",id:"propValue"}),i.jsx("button",{onClick:()=>{const u=document.getElementById("propName").value,p=document.getElementById("propValue").value;u&&p&&(c(g=>({...g,[u]:p})),document.getElementById("propName").value="",document.getElementById("propValue").value="")},children:"Add Property"})]})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Button State Control"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Button states are like component variants in Figma - different visual states (normal, hover, disabled) for the same component."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`<button 
  disabled={isDisabled}
  onClick={handleClick}
  style={{ opacity: isDisabled ? 0.6 : 1 }}
>
  {isLoading ? 'Loading...' : 'Click me'}
</button>

// State variables:
const [isDisabled, setIsDisabled] = useState(false);
const [isLoading, setIsLoading] = useState(false);`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Button state control (like Figma component variants)
function SmartButton({ 
  children, 
  onClick, 
  disabled = false, 
  loading = false,
  variant = 'primary' 
}) {
  // Determine button state
  const isDisabled = disabled || loading;
  
  // Dynamic styling based on state
  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.6 : 1,
    backgroundColor: variant === 'primary' ? '#3b82f6' : '#6b7280',
    color: 'white'
  };

  return (
    <button 
      style={buttonStyle}
      onClick={onClick}
      disabled={isDisabled}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}

// Usage examples
function FormWithButtons() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  const isFormValid = formData.name && formData.email;

  return (
    <div>
      <input 
        value={formData.name}
        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
        placeholder="Name"
      />
      <input 
        value={formData.email}
        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
        placeholder="Email"
      />
      
      <SmartButton 
        onClick={handleSubmit}
        disabled={!isFormValid}
        loading={isSubmitting}
      >
        Submit Form
      </SmartButton>
    </div>
  );
}`,explanation:"Button state control involves managing different states (enabled, disabled, loading) and providing visual feedback to users based on the current state."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Button States:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Form Validation Demo:"}),i.jsxs("div",{className:"input-group",children:[i.jsx("input",{placeholder:"Name",value:a.name,onChange:u=>d(p=>({...p,name:u.target.value}))}),i.jsx("input",{placeholder:"Email",value:a.email,onChange:u=>d(p=>({...p,email:u.target.value}))})]}),i.jsx("div",{className:"button-group",children:i.jsx("button",{onClick:()=>{v(!0),setTimeout(()=>v(!1),2e3)},disabled:!a.name||!a.email||h,style:{backgroundColor:!a.name||!a.email?"#6b7280":"#3b82f6",opacity:!a.name||!a.email||h?.6:1,cursor:!a.name||!a.email||h?"not-allowed":"pointer"},children:h?"Submitting...":"Submit Form"})}),i.jsxs("div",{className:"result",children:["Form valid: ",a.name&&a.email?"✅":"❌"]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Button State Toggle:"}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>k(!f),style:{backgroundColor:f?"#ef4444":"#10b981"},children:f?"Enable Button":"Disable Button"}),i.jsx("button",{onClick:()=>N(!x),style:{backgroundColor:x?"#f59e0b":"#8b5cf6"},children:x?"Stop Loading":"Start Loading"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Controlled Button:"}),i.jsx("div",{className:"button-group",children:i.jsx("button",{onClick:()=>m(u=>u+1),disabled:f||x,style:{backgroundColor:f?"#6b7280":"#3b82f6",opacity:f||x?.6:1,cursor:f||x?"not-allowed":"pointer"},children:x?"Loading...":"Click me! ("+I+")"})}),i.jsxs("div",{className:"result",children:["Button state: ",f?"Disabled":x?"Loading":"Enabled"]})]})]})})]})]})]})]})}function am(){const[e,t]=S.useState(0),[n,r]=S.useState({x:0,y:0}),[s,o]=S.useState({name:"",email:"",message:""}),[l,c]=S.useState("No events yet");return i.jsxs("div",{className:"section",children:[i.jsx("h1",{children:"Events & Interactions"}),i.jsx("p",{children:"Making your UI interactive like Figma prototypes"}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Event Handlers"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Event handlers are like interactions in Figma - they respond to user actions."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Event handler function
const handleEvent = (event) => {
  // Handle the event
};

// In JSX
<button onClick={handleEvent}>Click me</button>
<input onChange={handleEvent} />
<form onSubmit={handleEvent}>

// Inline handler
<button onClick={() => console.log('clicked')}>
  Click me
</button>

// Common events:
// onClick, onChange, onSubmit, onKeyDown, onMouseEnter, onMouseLeave`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Event handlers (like Figma interactions)
function InteractiveButton() {
  const handleClick = () => {
    console.log("Button clicked!");
    alert("Hello from React!");
  };

  const handleMouseEnter = () => {
    console.log("Mouse entered button");
  };

  return (
    <button 
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => console.log("Mouse left button")}
    >
      Click me!
    </button>
  );
}

// Common events: onClick, onChange, onSubmit, onKeyDown, etc.`,explanation:"Event handlers are functions that run when users interact with your UI, just like interactions in Figma prototypes."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Event Examples:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Click Events:"}),i.jsxs("div",{className:"button-group",children:[i.jsxs("button",{onClick:()=>{t(a=>a+1),c("Button clicked!")},children:["Click Counter: ",e]}),i.jsx("button",{onMouseEnter:()=>c("Mouse entered button"),onMouseLeave:()=>c("Mouse left button"),children:"Hover Me"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Mouse Position Tracker:"}),i.jsxs("div",{style:{width:"200px",height:"100px",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onMouseMove:a=>{const d=a.target.getBoundingClientRect();r({x:Math.round(a.clientX-d.left),y:Math.round(a.clientY-d.top)})},children:["Move mouse here",i.jsxs("div",{style:{position:"absolute",top:"4px",left:"4px",fontSize:"12px",color:"#94a3b8"},children:["X: ",n.x,", Y: ",n.y]})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Last Event:"}),i.jsx("div",{className:"result",children:l})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Form Handling"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Form handling is like creating input fields in Figma - you collect and process user input."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Form state
const [formData, setFormData] = useState({
  name: '',
  email: ''
});

// Handle input changes
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  // Process form data
};

// In JSX
<form onSubmit={handleSubmit}>
  <input
    name="name"
    value={formData.name}
    onChange={handleChange}
  />
</form>`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Form handling (like input fields in Figma)
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Send data to server
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
      />
      <button type="submit">Send Message</button>
    </form>
  );
}`,explanation:"Form handling allows you to collect and process user input, similar to how you create input fields in Figma prototypes."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Interactive Form Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Contact Form:"}),i.jsxs("form",{onSubmit:a=>{a.preventDefault(),alert(`Form submitted!
Name: ${s.name}
Email: ${s.email}
Message: ${s.message}`),o({name:"",email:"",message:""})},children:[i.jsx("input",{type:"text",name:"name",value:s.name,onChange:a=>o(d=>({...d,name:a.target.value})),placeholder:"Your name",style:{marginBottom:"8px"}}),i.jsx("input",{type:"email",name:"email",value:s.email,onChange:a=>o(d=>({...d,email:a.target.value})),placeholder:"Your email",style:{marginBottom:"8px"}}),i.jsx("textarea",{name:"message",value:s.message,onChange:a=>o(d=>({...d,message:a.target.value})),placeholder:"Your message",style:{marginBottom:"8px",minHeight:"60px"}}),i.jsx("button",{type:"submit",style:{width:"100%"},children:"Send Message"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Form Data Preview:"}),i.jsxs("div",{className:"result",children:[i.jsxs("div",{children:["Name: ",s.name||"Not entered"]}),i.jsxs("div",{children:["Email: ",s.email||"Not entered"]}),i.jsxs("div",{children:["Message: ",s.message||"Not entered"]})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Form Validation:"}),i.jsxs("div",{className:"result",children:[!s.name&&i.jsx("div",{style:{color:"#ef4444"},children:"❌ Name is required"}),!s.email&&i.jsx("div",{style:{color:"#ef4444"},children:"❌ Email is required"}),!s.message&&i.jsx("div",{style:{color:"#ef4444"},children:"❌ Message is required"}),s.name&&s.email&&s.message&&i.jsx("div",{style:{color:"#10b981"},children:"✅ Form is complete"})]})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"State Updates"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," State updates are like changing properties in Figma - they trigger visual updates."]}),i.jsx(D,{code:`// State updates (like changing properties in Figma)
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue(''); // Clear input
    }
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map(todo => (
          <li 
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}`,explanation:"State updates trigger re-renders, just like how changing properties in Figma updates the visual appearance."})]})]})}function cm(){S.useState("light");const[e,t]=S.useState("primary"),[n,r]=S.useState("default"),[s,o]=S.useState("desktop");return i.jsxs("div",{className:"section",children:[i.jsx("h1",{children:"Styling & Design"}),i.jsx("p",{children:"CSS, styling approaches, and design system implementation"}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"CSS-in-JS (Styled Components)"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Styled Components are like Figma components with built-in styles - they combine design and functionality."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Install: npm install styled-components
import styled from 'styled-components';

// Create styled component
const StyledButton = styled.button\`
  background: \${props => props.variant === 'primary' ? '#6366f1' : '#f59e0b'};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
\`;

// Use in component
<StyledButton variant="primary">Click me</StyledButton>`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Styled Components (like Figma components with styles)
import styled from 'styled-components';

// Styled button component
const StyledButton = styled.button\`
  background: \${props => props.variant === 'primary' ? '#6366f1' : '#f59e0b'};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
\`;

// Styled card component
const StyledCard = styled.div\`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  
  \${props => props.variant === 'elevated' && \`
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  \`}
\`;

function StyledComponentsDemo() {
  return (
    <div>
      <StyledButton variant="primary">Primary Button</StyledButton>
      <StyledButton variant="secondary">Secondary Button</StyledButton>
      <StyledCard variant="elevated">
        <h3>Styled Card</h3>
        <p>This card has built-in styles!</p>
      </StyledCard>
    </div>
  );
}`,explanation:"Styled Components combine CSS and React components, making them reusable and maintainable like Figma components."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Styled Components Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Button Variant:"}),i.jsxs("select",{value:e,onChange:l=>t(l.target.value),children:[i.jsx("option",{value:"primary",children:"Primary"}),i.jsx("option",{value:"secondary",children:"Secondary"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Card Style:"}),i.jsxs("select",{value:n,onChange:l=>r(l.target.value),children:[i.jsx("option",{value:"default",children:"Default"}),i.jsx("option",{value:"elevated",children:"Elevated"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsxs("div",{style:{background:e==="primary"?"#6366f1":"#f59e0b",color:"white",padding:"12px 24px",border:"none",borderRadius:"8px",cursor:"pointer",marginBottom:"16px"},children:[e==="primary"?"Primary":"Secondary"," Button"]}),i.jsxs("div",{style:{background:"white",borderRadius:"12px",padding:"24px",boxShadow:n==="elevated"?"0 10px 25px rgba(0, 0, 0, 0.15)":"0 4px 6px rgba(0, 0, 0, 0.1)",border:"1px solid #e5e7eb"},children:[i.jsx("h3",{children:"Styled Card"}),i.jsx("p",{children:"This card has built-in styles!"})]})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"CSS Modules & Scoped Styling"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," CSS Modules are like component-specific styles in Figma - they don't affect other components."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Button.module.css
.button {
  background: #6366f1;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
}

.button:hover {
  opacity: 0.9;
}

// Button.jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click me</button>;
}`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// CSS Modules (scoped styling)
// Button.module.css
.button {
  background: #6366f1;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s;
}

.button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.button.secondary {
  background: #f59e0b;
}

// Button.jsx
import styles from './Button.module.css';

function Button({ variant = 'primary', children }) {
  return (
    <button className={\`\${styles.button} \${variant === 'secondary' ? styles.secondary : ''}\`}>
      {children}
    </button>
  );
}

// Usage
<Button>Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>`,explanation:"CSS Modules provide scoped styling that only applies to specific components, preventing style conflicts."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"CSS Modules Demo:"}),i.jsx("div",{className:"output-content",children:i.jsx("div",{className:"demo-controls",children:i.jsxs("div",{className:"demo-item",children:[i.jsx("p",{children:i.jsx("strong",{children:"Benefits:"})}),i.jsxs("ul",{children:[i.jsx("li",{children:"✅ Scoped styles (no conflicts)"}),i.jsx("li",{children:"✅ Component-specific styling"}),i.jsx("li",{children:"✅ Better organization"}),i.jsx("li",{children:"✅ Type safety with TypeScript"})]})]})})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Utility-First CSS (Tailwind)"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Tailwind CSS is like using Figma's design tokens and constraints - you build designs with predefined utilities."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Install: npm install -D tailwindcss
// Configure in tailwind.config.js

// Utility classes
<div className="bg-blue-500 text-white px-6 py-3 rounded-lg">
  Button
</div>

// Responsive design
<div className="w-full md:w-1/2 lg:w-1/3">
  Responsive card
</div>

// Hover states
<button className="bg-blue-500 hover:bg-blue-600">
  Hover me
</button>`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Tailwind CSS (utility-first approach)
function TailwindDemo() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Card with Tailwind utilities */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Tailwind Card
        </h2>
        <p className="text-gray-600 mb-4">
          Built entirely with utility classes
        </p>
        
        {/* Button group */}
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
            Primary
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors">
            Secondary
          </button>
        </div>
      </div>
      
      {/* Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded">Card 1</div>
        <div className="bg-gray-100 p-4 rounded">Card 2</div>
        <div className="bg-gray-100 p-4 rounded">Card 3</div>
      </div>
    </div>
  );
}`,explanation:"Tailwind CSS provides utility classes that you combine to build designs, similar to how you use design tokens in Figma."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Tailwind Utilities Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Responsive Size:"}),i.jsxs("select",{value:s,onChange:l=>o(l.target.value),children:[i.jsx("option",{value:"mobile",children:"Mobile"}),i.jsx("option",{value:"tablet",children:"Tablet"}),i.jsx("option",{value:"desktop",children:"Desktop"})]})]}),i.jsx("div",{className:"demo-item",children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:s==="mobile"?"1fr":s==="tablet"?"1fr 1fr":"1fr 1fr 1fr",gap:"16px",marginTop:"16px"},children:[i.jsx("div",{style:{background:"#f3f4f6",padding:"16px",borderRadius:"4px"},children:"Card 1"}),i.jsx("div",{style:{background:"#f3f4f6",padding:"16px",borderRadius:"4px"},children:"Card 2"}),i.jsx("div",{style:{background:"#f3f4f6",padding:"16px",borderRadius:"4px"},children:"Card 3"})]})})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Responsive Design Patterns"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Responsive design is like creating different frame sizes in Figma - you design for multiple screen sizes."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// CSS Media Queries
@media (max-width: 768px) {
  .container {
    padding: 16px;
  }
}

// Tailwind Responsive Classes
<div className="w-full md:w-1/2 lg:w-1/3">
  Responsive element
</div>

// CSS Grid Responsive
.grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Responsive Design Patterns
function ResponsiveLayout() {
  return (
    <div className="responsive-container">
      {/* Mobile-first approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card">
          <h3>Card 1</h3>
          <p>This adapts to screen size</p>
        </div>
        <div className="card">
          <h3>Card 2</h3>
          <p>Mobile: 1 column</p>
        </div>
        <div className="card">
          <h3>Card 3</h3>
          <p>Tablet: 2 columns</p>
        </div>
      </div>
      
      {/* Responsive typography */}
      <div className="text-sm md:text-base lg:text-lg">
        Responsive text size
      </div>
      
      {/* Responsive spacing */}
      <div className="p-4 md:p-6 lg:p-8">
        Responsive padding
      </div>
    </div>
  );
}

// CSS for responsive design
.responsive-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}

@media (min-width: 768px) {
  .responsive-container {
    padding: 24px;
  }
}

@media (min-width: 1024px) {
  .responsive-container {
    padding: 32px;
  }
}`,explanation:"Responsive design ensures your UI works well on all screen sizes, from mobile to desktop."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Responsive Design Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("p",{children:i.jsx("strong",{children:"Responsive Breakpoints:"})}),i.jsxs("ul",{children:[i.jsx("li",{children:"📱 Mobile: < 768px (1 column)"}),i.jsx("li",{children:"📱 Tablet: 768px - 1024px (2 columns)"}),i.jsx("li",{children:"🖥️ Desktop: > 1024px (3 columns)"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("p",{children:i.jsx("strong",{children:"Design Principles:"})}),i.jsxs("ul",{children:[i.jsx("li",{children:"✅ Mobile-first approach"}),i.jsx("li",{children:"✅ Flexible layouts"}),i.jsx("li",{children:"✅ Scalable typography"}),i.jsx("li",{children:"✅ Touch-friendly interactions"})]})]})]})})]})]})]})]})}function um(){const[e,t]=S.useState("/"),[n,r]=S.useState(["/"]),[s,o]=S.useState({}),l=a=>{t(a),r(d=>[...d,a])},c=(a,d)=>{t(a),o(d),r(h=>[...h,a+"?"+new URLSearchParams(d)])};return i.jsxs("div",{className:"section",children:[i.jsx("h1",{children:"Navigation & Routing"}),i.jsx("p",{children:"Page navigation, routing, and URL management"}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"React Router Basics"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," React Router is like creating multiple pages in Figma - you can navigate between different views."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Install: npm install react-router-dom
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Router setup
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>

// Navigation
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// React Router Setup
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Main App with Router
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/products" className="nav-link">Products</Link>
        </nav>
        
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

// Navigation component with useNavigate
function Navigation() {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };
  
  return (
    <div className="nav-buttons">
      <button onClick={() => handleNavigation('/')}>Home</button>
      <button onClick={() => handleNavigation('/about')}>About</button>
      <button onClick={() => handleNavigation('/contact')}>Contact</button>
    </div>
  );
}`,explanation:"React Router enables navigation between different pages/views in your React application."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Router Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Current Route:"}),i.jsx("div",{className:"result",children:e})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Navigation:"}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>l("/"),children:"Home"}),i.jsx("button",{onClick:()=>l("/about"),children:"About"}),i.jsx("button",{onClick:()=>l("/contact"),children:"Contact"}),i.jsx("button",{onClick:()=>l("/products"),children:"Products"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Route History:"}),i.jsx("div",{className:"result",style:{fontSize:"12px",maxHeight:"100px",overflowY:"auto"},children:n.slice(-5).join(" → ")})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Dynamic Routes & Parameters"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Dynamic routes are like Figma components with variants - the same component can display different content based on parameters."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Dynamic route with parameter
<Route path="/products/:id" element={<ProductDetail />} />

// Access parameter in component
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  return <div>Product ID: {id}</div>;
}

// Query parameters
<Link to="/search?query=react&category=books">
  Search
</Link>

// Access query params
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  return <div>Searching for: {query}</div>;
}`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Dynamic Routes with Parameters
import { useParams, useSearchParams } from 'react-router-dom';

// Route with dynamic parameter
<Route path="/products/:id" element={<ProductDetail />} />

// Component using parameters
function ProductDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  
  return (
    <div className="product-detail">
      <h2>Product ID: {id}</h2>
      {category && <p>Category: {category}</p>}
      <p>This is a dynamic route that shows different content based on the URL parameter.</p>
    </div>
  );
}

// Navigation with parameters
function ProductNavigation() {
  const navigate = useNavigate();
  
  const goToProduct = (id, category) => {
    navigate(\`/products/\${id}?category=\${category}\`);
  };
  
  return (
    <div className="product-links">
      <button onClick={() => goToProduct('1', 'electronics')}>
        Product 1 (Electronics)
      </button>
      <button onClick={() => goToProduct('2', 'books')}>
        Product 2 (Books)
      </button>
      <button onClick={() => goToProduct('3', 'clothing')}>
        Product 3 (Clothing)
      </button>
    </div>
  );
}`,explanation:"Dynamic routes allow you to create flexible URLs that can display different content based on parameters."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Dynamic Routes Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Navigate with Parameters:"}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>c("/products/1",{category:"electronics"}),children:"Product 1 (Electronics)"}),i.jsx("button",{onClick:()=>c("/products/2",{category:"books"}),children:"Product 2 (Books)"}),i.jsx("button",{onClick:()=>c("/products/3",{category:"clothing"}),children:"Product 3 (Clothing)"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("label",{children:"Current Parameters:"}),i.jsx("div",{className:"result",children:Object.keys(s).length>0?Object.entries(s).map(([a,d])=>a+": "+d).join(", "):"No parameters"})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Protected Routes & Authentication"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Protected routes are like Figma files with different permission levels - some content is only visible to certain users."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Protected Route Component
function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Usage in Routes
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute isAuthenticated={isLoggedIn}>
      <Dashboard />
    </ProtectedRoute>
  } 
/>

// Authentication check
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Protected Routes Implementation
import { Navigate, useLocation } from 'react-router-dom';

// Protected Route Component
function ProtectedRoute({ children, isAuthenticated }) {
  const location = useLocation();
  
  if (!isAuthenticated) {
    // Redirect to login with return URL
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
}

// Authentication Hook
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  
  const login = (credentials) => {
    // Simulate login
    if (credentials.username && credentials.password) {
      setIsAuthenticated(true);
      setUser({ username: credentials.username });
      localStorage.setItem('token', 'fake-token');
    }
  };
  
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
  };
  
  return { isAuthenticated, user, login, logout };
}

// App with Protected Routes
function App() {
  const { isAuthenticated } = useAuth();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}`,explanation:"Protected routes ensure that certain pages are only accessible to authenticated users."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Protected Routes Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("p",{children:i.jsx("strong",{children:"Route Protection Levels:"})}),i.jsxs("ul",{children:[i.jsx("li",{children:"🏠 Home: Public (no auth required)"}),i.jsx("li",{children:"🔐 Dashboard: Protected (auth required)"}),i.jsx("li",{children:"👤 Profile: Protected (auth required)"}),i.jsx("li",{children:"📧 Contact: Public (no auth required)"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("p",{children:i.jsx("strong",{children:"Authentication Flow:"})}),i.jsxs("ol",{children:[i.jsx("li",{children:"User tries to access protected route"}),i.jsx("li",{children:"Check if user is authenticated"}),i.jsx("li",{children:"If not, redirect to login"}),i.jsx("li",{children:"After login, redirect back to original route"})]})]})]})})]})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Navigation Patterns"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Navigation patterns are like the navigation structure in Figma - you need clear ways to move between different sections."]}),i.jsxs("div",{className:"syntax-example",children:[i.jsx("h4",{children:"Basic Syntax:"}),i.jsx("pre",{className:"syntax-code",children:`// Breadcrumb Navigation
function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => (
        <span key={name}>
          / <Link to={\`/\${pathnames.slice(0, index + 1).join('/')}\`}>
            {name}
          </Link>
        </span>
      ))}
    </nav>
  );
}

// Tab Navigation
function TabNavigation({ tabs, activeTab, onTabChange }) {
  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={\`tab \${activeTab === tab.id ? 'active' : ''}\`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}`})]}),i.jsxs("div",{className:"interactive-example",children:[i.jsx("div",{className:"code-panel",children:i.jsx(D,{code:`// Common Navigation Patterns

// 1. Breadcrumb Navigation
function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => (
        <span key={name}>
          / <Link to={\`/\${pathnames.slice(0, index + 1).join('/')}\`}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Link>
        </span>
      ))}
    </nav>
  );
}

// 2. Tab Navigation
function TabNavigation({ tabs, activeTab, onTabChange }) {
  return (
    <div className="tab-navigation">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={\`tab \${activeTab === tab.id ? 'active' : ''}\`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

// 3. Sidebar Navigation
function SidebarNavigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: '🏠' },
    { path: '/projects', label: 'Projects', icon: '📁' },
    { path: '/tasks', label: 'Tasks', icon: '✅' },
    { path: '/settings', label: 'Settings', icon: '⚙️' }
  ];
  
  return (
    <nav className="sidebar">
      {navItems.map(item => (
        <Link
          key={item.path}
          to={item.path}
          className={\`nav-item \${location.pathname === item.path ? 'active' : ''}\`}
        >
          <span className="icon">{item.icon}</span>
          <span className="label">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

// 4. Mobile Navigation
function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mobile-nav">
      <button 
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}`,explanation:"Different navigation patterns provide clear ways for users to move through your application."})}),i.jsxs("div",{className:"output-panel",children:[i.jsx("h4",{children:"Navigation Patterns Demo:"}),i.jsx("div",{className:"output-content",children:i.jsxs("div",{className:"demo-controls",children:[i.jsxs("div",{className:"demo-item",children:[i.jsx("p",{children:i.jsx("strong",{children:"Common Patterns:"})}),i.jsxs("ul",{children:[i.jsx("li",{children:"🍞 Breadcrumbs: Show current location"}),i.jsx("li",{children:"📑 Tabs: Switch between related content"}),i.jsx("li",{children:"📱 Sidebar: Persistent navigation"}),i.jsx("li",{children:"☰ Mobile Menu: Collapsible navigation"})]})]}),i.jsxs("div",{className:"demo-item",children:[i.jsx("p",{children:i.jsx("strong",{children:"Best Practices:"})}),i.jsxs("ul",{children:[i.jsx("li",{children:"✅ Clear visual hierarchy"}),i.jsx("li",{children:"✅ Consistent navigation"}),i.jsx("li",{children:"✅ Accessible navigation"}),i.jsx("li",{children:"✅ Mobile-friendly design"})]})]})]})})]})]})]})]})}function dm(){const[e,t]=S.useState("html"),[n,r]=S.useState(""),s=[{category:"Document Structure",elements:[{tag:"<!DOCTYPE html>",description:"Document type declaration",example:"<!DOCTYPE html>"},{tag:"<html>",description:"Root element",example:'<html lang="en">'},{tag:"<head>",description:"Document metadata",example:"<head><title>Page Title</title></head>"},{tag:"<title>",description:"Page title",example:"<title>My Website</title>"},{tag:"<body>",description:"Document body",example:"<body>Content here</body>"},{tag:"<meta>",description:"Metadata",example:'<meta charset="UTF-8">'},{tag:"<link>",description:"External resource link",example:'<link rel="stylesheet" href="style.css">'},{tag:"<script>",description:"JavaScript code",example:'<script src="script.js"><\/script>'}]},{category:"Text Elements",elements:[{tag:"<h1> to <h6>",description:"Headings",example:"<h1>Main Heading</h1>"},{tag:"<p>",description:"Paragraph",example:"<p>This is a paragraph.</p>"},{tag:"<span>",description:"Inline text",example:"<span>Inline text</span>"},{tag:"<div>",description:"Block container",example:"<div>Block content</div>"},{tag:"<br>",description:"Line break",example:"Text<br>New line"},{tag:"<hr>",description:"Horizontal rule",example:"<hr>"},{tag:"<strong>",description:"Bold text",example:"<strong>Bold text</strong>"},{tag:"<em>",description:"Italic text",example:"<em>Italic text</em>"},{tag:"<mark>",description:"Highlighted text",example:"<mark>Highlighted</mark>"},{tag:"<small>",description:"Small text",example:"<small>Small text</small>"},{tag:"<sub>",description:"Subscript",example:"H<sub>2</sub>O"},{tag:"<sup>",description:"Superscript",example:"x<sup>2</sup>"}]},{category:"Lists",elements:[{tag:"<ul>",description:"Unordered list",example:"<ul><li>Item 1</li></ul>"},{tag:"<ol>",description:"Ordered list",example:"<ol><li>Item 1</li></ol>"},{tag:"<li>",description:"List item",example:"<li>List item</li>"},{tag:"<dl>",description:"Description list",example:"<dl><dt>Term</dt><dd>Definition</dd></dl>"},{tag:"<dt>",description:"Description term",example:"<dt>Term</dt>"},{tag:"<dd>",description:"Description details",example:"<dd>Definition</dd>"}]},{category:"Links & Media",elements:[{tag:"<a>",description:"Hyperlink",example:'<a href="https://example.com">Link</a>'},{tag:"<img>",description:"Image",example:'<img src="image.jpg" alt="Description">'},{tag:"<video>",description:"Video",example:'<video src="video.mp4" controls></video>'},{tag:"<audio>",description:"Audio",example:'<audio src="audio.mp3" controls></audio>'},{tag:"<iframe>",description:"Inline frame",example:'<iframe src="https://example.com"></iframe>'}]},{category:"Forms",elements:[{tag:"<form>",description:"Form container",example:'<form action="/submit" method="post">'},{tag:"<input>",description:"Input field",example:'<input type="text" name="username">'},{tag:"<label>",description:"Form label",example:'<label for="username">Username:</label>'},{tag:"<textarea>",description:"Multi-line input",example:'<textarea name="message"></textarea>'},{tag:"<select>",description:"Dropdown",example:"<select><option>Option 1</option></select>"},{tag:"<option>",description:"Dropdown option",example:'<option value="1">Option 1</option>'},{tag:"<button>",description:"Button",example:'<button type="submit">Submit</button>'},{tag:"<fieldset>",description:"Form group",example:"<fieldset><legend>Group</legend></fieldset>"},{tag:"<legend>",description:"Fieldset title",example:"<legend>Form Group</legend>"}]},{category:"Tables",elements:[{tag:"<table>",description:"Table container",example:"<table></table>"},{tag:"<thead>",description:"Table header",example:"<thead><tr><th>Header</th></tr></thead>"},{tag:"<tbody>",description:"Table body",example:"<tbody><tr><td>Data</td></tr></tbody>"},{tag:"<tfoot>",description:"Table footer",example:"<tfoot><tr><td>Footer</td></tr></tfoot>"},{tag:"<tr>",description:"Table row",example:"<tr><td>Cell</td></tr>"},{tag:"<th>",description:"Header cell",example:"<th>Header Cell</th>"},{tag:"<td>",description:"Data cell",example:"<td>Data Cell</td>"},{tag:"<caption>",description:"Table caption",example:"<caption>Table Title</caption>"}]},{category:"Semantic Elements",elements:[{tag:"<header>",description:"Page header",example:"<header>Header content</header>"},{tag:"<nav>",description:"Navigation",example:"<nav>Navigation links</nav>"},{tag:"<main>",description:"Main content",example:"<main>Main content</main>"},{tag:"<section>",description:"Content section",example:"<section>Section content</section>"},{tag:"<article>",description:"Article content",example:"<article>Article content</article>"},{tag:"<aside>",description:"Sidebar content",example:"<aside>Sidebar content</aside>"},{tag:"<footer>",description:"Page footer",example:"<footer>Footer content</footer>"},{tag:"<figure>",description:"Figure container",example:'<figure><img src="image.jpg"><figcaption>Caption</figcaption></figure>'},{tag:"<figcaption>",description:"Figure caption",example:"<figcaption>Image description</figcaption>"}]}],o=[{category:"Layout & Display",properties:[{property:"display",values:"block, inline, inline-block, flex, grid, none, table, table-cell, table-row, contents, flow-root, list-item, run-in, ruby, ruby-base, ruby-text, ruby-base-container, ruby-text-container",description:"Element display type"},{property:"position",values:"static, relative, absolute, fixed, sticky",description:"Positioning method"},{property:"top",values:"auto, 0, 10px, 50%, 100%, inherit, initial, unset",description:"Top position offset"},{property:"right",values:"auto, 0, 10px, 50%, 100%, inherit, initial, unset",description:"Right position offset"},{property:"bottom",values:"auto, 0, 10px, 50%, 100%, inherit, initial, unset",description:"Bottom position offset"},{property:"left",values:"auto, 0, 10px, 50%, 100%, inherit, initial, unset",description:"Left position offset"},{property:"float",values:"left, right, none, inline-start, inline-end",description:"Element floating"},{property:"clear",values:"left, right, both, none, inline-start, inline-end",description:"Clear floating elements"},{property:"z-index",values:"auto, 0, 1, 999, -1, inherit, initial, unset",description:"Stacking order"},{property:"overflow",values:"visible, hidden, scroll, auto, clip, overlay",description:"Content overflow handling"},{property:"overflow-x",values:"visible, hidden, scroll, auto, clip",description:"Horizontal overflow"},{property:"overflow-y",values:"visible, hidden, scroll, auto, clip",description:"Vertical overflow"},{property:"visibility",values:"visible, hidden, collapse",description:"Element visibility"},{property:"clip",values:"auto, rect(0, 0, 0, 0), inherit, initial, unset",description:"Element clipping (deprecated)"},{property:"clip-path",values:"none, url(), inset(), circle(), ellipse(), polygon(), path()",description:"Element clipping path"},{property:"contain",values:"none, strict, content, size, layout, style, paint",description:"Containment"}]},{category:"Box Model",properties:[{property:"width",values:"auto, 100px, 50%, 100vw, max-content, min-content, fit-content, inherit, initial, unset",description:"Element width"},{property:"height",values:"auto, 100px, 50%, 100vh, max-content, min-content, fit-content, inherit, initial, unset",description:"Element height"},{property:"min-width",values:"auto, 100px, 50%, 100vw, max-content, min-content, fit-content, inherit, initial, unset",description:"Minimum width"},{property:"max-width",values:"none, 100px, 50%, 100vw, max-content, min-content, fit-content, inherit, initial, unset",description:"Maximum width"},{property:"min-height",values:"auto, 100px, 50%, 100vh, max-content, min-content, fit-content, inherit, initial, unset",description:"Minimum height"},{property:"max-height",values:"none, 100px, 50%, 100vh, max-content, min-content, fit-content, inherit, initial, unset",description:"Maximum height"},{property:"margin",values:"0, 10px, 1em, auto, inherit, initial, unset",description:"Margin shorthand"},{property:"margin-top",values:"0, 10px, 1em, auto, inherit, initial, unset",description:"Top margin"},{property:"margin-right",values:"0, 10px, 1em, auto, inherit, initial, unset",description:"Right margin"},{property:"margin-bottom",values:"0, 10px, 1em, auto, inherit, initial, unset",description:"Bottom margin"},{property:"margin-left",values:"0, 10px, 1em, auto, inherit, initial, unset",description:"Left margin"},{property:"padding",values:"0, 10px, 1em, inherit, initial, unset",description:"Padding shorthand"},{property:"padding-top",values:"0, 10px, 1em, inherit, initial, unset",description:"Top padding"},{property:"padding-right",values:"0, 10px, 1em, inherit, initial, unset",description:"Right padding"},{property:"padding-bottom",values:"0, 10px, 1em, inherit, initial, unset",description:"Bottom padding"},{property:"padding-left",values:"0, 10px, 1em, inherit, initial, unset",description:"Left padding"},{property:"border",values:"1px solid black, none, inherit, initial, unset",description:"Border shorthand"},{property:"border-width",values:"thin, medium, thick, 1px, inherit, initial, unset",description:"Border width"},{property:"border-style",values:"none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset, inherit, initial, unset",description:"Border style"},{property:"border-color",values:"black, #000, rgb(0,0,0), currentColor, transparent, inherit, initial, unset",description:"Border color"},{property:"border-top",values:"1px solid black, inherit, initial, unset",description:"Top border shorthand"},{property:"border-right",values:"1px solid black, inherit, initial, unset",description:"Right border shorthand"},{property:"border-bottom",values:"1px solid black, inherit, initial, unset",description:"Bottom border shorthand"},{property:"border-left",values:"1px solid black, inherit, initial, unset",description:"Left border shorthand"},{property:"border-radius",values:"0, 5px, 50%, inherit, initial, unset",description:"Border radius"},{property:"border-top-left-radius",values:"0, 5px, 50%, inherit, initial, unset",description:"Top-left border radius"},{property:"border-top-right-radius",values:"0, 5px, 50%, inherit, initial, unset",description:"Top-right border radius"},{property:"border-bottom-right-radius",values:"0, 5px, 50%, inherit, initial, unset",description:"Bottom-right border radius"},{property:"border-bottom-left-radius",values:"0, 5px, 50%, inherit, initial, unset",description:"Bottom-left border radius"},{property:"box-sizing",values:"content-box, border-box, inherit, initial, unset",description:"Box model calculation"},{property:"box-shadow",values:"none, 2px 2px 5px rgba(0,0,0,0.3), inset 2px 2px 5px rgba(0,0,0,0.3), inherit, initial, unset",description:"Box shadow"},{property:"outline",values:"none, 1px solid black, inherit, initial, unset",description:"Outline shorthand"},{property:"outline-width",values:"thin, medium, thick, 1px, inherit, initial, unset",description:"Outline width"},{property:"outline-style",values:"none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset, inherit, initial, unset",description:"Outline style"},{property:"outline-color",values:"black, #000, rgb(0,0,0), invert, inherit, initial, unset",description:"Outline color"},{property:"outline-offset",values:"0, 5px, inherit, initial, unset",description:"Outline offset"}]},{category:"Flexbox",properties:[{property:"display: flex",values:"flex, inline-flex",description:"Flex container"},{property:"flex-direction",values:"row, row-reverse, column, column-reverse, inherit, initial, unset",description:"Flex direction"},{property:"flex-wrap",values:"nowrap, wrap, wrap-reverse, inherit, initial, unset",description:"Flex wrapping"},{property:"flex-flow",values:"row nowrap, column wrap, inherit, initial, unset",description:"Flex direction and wrap shorthand"},{property:"justify-content",values:"flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right, inherit, initial, unset",description:"Main axis alignment"},{property:"align-items",values:"stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end, self-start, self-end, inherit, initial, unset",description:"Cross axis alignment"},{property:"align-content",values:"flex-start, flex-end, center, space-between, space-around, space-evenly, stretch, start, end, baseline, first baseline, last baseline, inherit, initial, unset",description:"Multi-line alignment"},{property:"align-self",values:"auto, flex-start, flex-end, center, baseline, stretch, inherit, initial, unset",description:"Individual item alignment"},{property:"flex-grow",values:"0, 1, 2, inherit, initial, unset",description:"Growth factor"},{property:"flex-shrink",values:"0, 1, 2, inherit, initial, unset",description:"Shrink factor"},{property:"flex-basis",values:"auto, 0, 100px, 50%, content, inherit, initial, unset",description:"Initial size"},{property:"flex",values:"0 1 auto, 1, 1 0 100px, none, inherit, initial, unset",description:"Flex shorthand"},{property:"order",values:"0, 1, -1, inherit, initial, unset",description:"Flex item order"}]},{category:"Grid",properties:[{property:"display: grid",values:"grid, inline-grid, subgrid",description:"Grid container"},{property:"grid-template-columns",values:"none, 1fr, 100px, repeat(3, 1fr), minmax(100px, 1fr), inherit, initial, unset",description:"Column definitions"},{property:"grid-template-rows",values:"none, 1fr, 100px, repeat(3, 1fr), minmax(100px, 1fr), inherit, initial, unset",description:"Row definitions"},{property:"grid-template-areas",values:'none, "header header" "sidebar main", inherit, initial, unset',description:"Area definitions"},{property:"grid-template",values:'none, "header header" 100px / 1fr 1fr, inherit, initial, unset',description:"Grid template shorthand"},{property:"grid-column-gap",values:"0, 10px, 1em, inherit, initial, unset",description:"Column gaps (deprecated)"},{property:"grid-row-gap",values:"0, 10px, 1em, inherit, initial, unset",description:"Row gaps (deprecated)"},{property:"grid-gap",values:"0, 10px, 10px 20px, inherit, initial, unset",description:"Grid gaps shorthand (deprecated)"},{property:"gap",values:"0, 10px, 10px 20px, inherit, initial, unset",description:"Grid and flexbox gaps"},{property:"row-gap",values:"0, 10px, 1em, inherit, initial, unset",description:"Row gaps"},{property:"column-gap",values:"0, 10px, 1em, inherit, initial, unset",description:"Column gaps"},{property:"grid-column",values:"auto, 1, 1 / 3, span 2, inherit, initial, unset",description:"Column placement"},{property:"grid-row",values:"auto, 1, 1 / 3, span 2, inherit, initial, unset",description:"Row placement"},{property:"grid-column-start",values:"auto, 1, span 2, inherit, initial, unset",description:"Column start position"},{property:"grid-column-end",values:"auto, 1, span 2, inherit, initial, unset",description:"Column end position"},{property:"grid-row-start",values:"auto, 1, span 2, inherit, initial, unset",description:"Row start position"},{property:"grid-row-end",values:"auto, 1, span 2, inherit, initial, unset",description:"Row end position"},{property:"grid-area",values:"auto, 1, header, inherit, initial, unset",description:"Grid area shorthand"},{property:"justify-items",values:"start, end, center, stretch, inherit, initial, unset",description:"Item alignment on inline axis"},{property:"align-items",values:"start, end, center, stretch, inherit, initial, unset",description:"Item alignment on block axis"},{property:"justify-self",values:"auto, start, end, center, stretch, inherit, initial, unset",description:"Individual item alignment on inline axis"},{property:"align-self",values:"auto, start, end, center, stretch, inherit, initial, unset",description:"Individual item alignment on block axis"},{property:"justify-content",values:"start, end, center, stretch, space-around, space-between, space-evenly, inherit, initial, unset",description:"Content alignment on inline axis"},{property:"align-content",values:"start, end, center, stretch, space-around, space-between, space-evenly, inherit, initial, unset",description:"Content alignment on block axis"},{property:"grid-auto-columns",values:"auto, 100px, 1fr, minmax(100px, 1fr), inherit, initial, unset",description:"Auto-generated column size"},{property:"grid-auto-rows",values:"auto, 100px, 1fr, minmax(100px, 1fr), inherit, initial, unset",description:"Auto-generated row size"},{property:"grid-auto-flow",values:"row, column, row dense, column dense, inherit, initial, unset",description:"Auto-placement algorithm"}]},{category:"Typography",properties:[{property:"font-family",values:'Arial, "Times New Roman", sans-serif, etc.',description:"Font family"},{property:"font-size",values:"16px, 1em, 1.2rem, 120%, etc.",description:"Font size"},{property:"font-weight",values:"normal, bold, 100-900, etc.",description:"Font weight"},{property:"font-style",values:"normal, italic, oblique",description:"Font style"},{property:"line-height",values:"normal, 1.5, 24px, etc.",description:"Line height"},{property:"text-align",values:"left, center, right, justify",description:"Text alignment"},{property:"text-decoration",values:"none, underline, overline, line-through",description:"Text decoration"},{property:"text-transform",values:"none, uppercase, lowercase, capitalize",description:"Text transformation"},{property:"letter-spacing",values:"normal, 1px, 0.1em, etc.",description:"Letter spacing"},{property:"word-spacing",values:"normal, 2px, 0.2em, etc.",description:"Word spacing"},{property:"white-space",values:"normal, nowrap, pre, pre-wrap",description:"White space handling"},{property:"text-overflow",values:"clip, ellipsis",description:"Text overflow"}]},{category:"Colors & Backgrounds",properties:[{property:"color",values:"black, #000, rgb(0,0,0), rgba(0,0,0,0.5), etc.",description:"Text color"},{property:"background-color",values:"white, #fff, rgb(255,255,255), etc.",description:"Background color"},{property:"background-image",values:'url("image.jpg"), linear-gradient(), etc.',description:"Background image"},{property:"background-repeat",values:"repeat, no-repeat, repeat-x, repeat-y",description:"Background repeat"},{property:"background-position",values:"center, top left, 50% 50%, etc.",description:"Background position"},{property:"background-size",values:"auto, cover, contain, 100px 200px",description:"Background size"},{property:"background-attachment",values:"scroll, fixed, local",description:"Background attachment"},{property:"background",values:"shorthand for all background properties",description:"Background shorthand"},{property:"opacity",values:"0, 0.5, 1, etc.",description:"Element opacity"}]},{category:"Transforms & Animations",properties:[{property:"transform",values:"translate(), rotate(), scale(), skew(), etc.",description:"Element transformation"},{property:"transform-origin",values:"center, top left, 50% 50%, etc.",description:"Transform origin"},{property:"transition",values:"all 0.3s ease, width 0.5s linear, etc.",description:"Transition shorthand"},{property:"transition-property",values:"all, width, height, color, etc.",description:"Transition properties"},{property:"transition-duration",values:"0s, 0.3s, 1s, etc.",description:"Transition duration"},{property:"transition-timing-function",values:"ease, linear, ease-in, ease-out, ease-in-out",description:"Transition timing"},{property:"animation",values:"slideIn 1s ease-in-out, etc.",description:"Animation shorthand"},{property:"animation-name",values:"slideIn, fadeOut, bounce, etc.",description:"Animation name"},{property:"animation-duration",values:"0s, 1s, 2.5s, etc.",description:"Animation duration"},{property:"animation-timing-function",values:"ease, linear, ease-in, ease-out, ease-in-out",description:"Animation timing"},{property:"animation-delay",values:"0s, 1s, -1s, etc.",description:"Animation delay"},{property:"animation-iteration-count",values:"1, infinite, 3, etc.",description:"Animation iterations"},{property:"animation-direction",values:"normal, reverse, alternate, alternate-reverse",description:"Animation direction"},{property:"animation-fill-mode",values:"none, forwards, backwards, both",description:"Animation fill mode"}]},{category:"Responsive Design",properties:[{property:"@media",values:"@media (max-width: 768px) { }",description:"Media queries"},{property:"min-width",values:"320px, 768px, 1024px, etc.",description:"Minimum width"},{property:"max-width",values:"767px, 1023px, 1200px, etc.",description:"Maximum width"},{property:"orientation",values:"portrait, landscape",description:"Device orientation"},{property:"aspect-ratio",values:"16/9, 4/3, 1/1, etc.",description:"Aspect ratio"},{property:"viewport",values:"width=device-width, initial-scale=1.0",description:"Viewport meta tag"}]},{category:"Pseudo-classes & Pseudo-elements",properties:[{property:":hover",values:"element:hover { }",description:"Mouse hover state"},{property:":active",values:"element:active { }",description:"Active state"},{property:":focus",values:"element:focus { }",description:"Focus state"},{property:":focus-within",values:"element:focus-within { }",description:"Focus within element"},{property:":focus-visible",values:"element:focus-visible { }",description:"Focus visible state"},{property:":visited",values:"a:visited { }",description:"Visited link state"},{property:":link",values:"a:link { }",description:"Unvisited link state"},{property:":target",values:"element:target { }",description:"Target element"},{property:":first-child",values:"element:first-child { }",description:"First child element"},{property:":last-child",values:"element:last-child { }",description:"Last child element"},{property:":only-child",values:"element:only-child { }",description:"Only child element"},{property:":first-of-type",values:"element:first-of-type { }",description:"First of type element"},{property:":last-of-type",values:"element:last-of-type { }",description:"Last of type element"},{property:":only-of-type",values:"element:only-of-type { }",description:"Only of type element"},{property:":nth-child()",values:"element:nth-child(2n) { }",description:"Nth child element"},{property:":nth-last-child()",values:"element:nth-last-child(2n) { }",description:"Nth last child element"},{property:":nth-of-type()",values:"element:nth-of-type(2n) { }",description:"Nth of type element"},{property:":nth-last-of-type()",values:"element:nth-last-of-type(2n) { }",description:"Nth last of type element"},{property:":empty",values:"element:empty { }",description:"Empty element"},{property:":root",values:":root { }",description:"Root element"},{property:":not()",values:"element:not(.class) { }",description:"Not selector"},{property:":is()",values:":is(h1, h2, h3) { }",description:"Is selector"},{property:":where()",values:":where(h1, h2, h3) { }",description:"Where selector"},{property:":has()",values:"element:has(child) { }",description:"Has selector"},{property:"::before",values:'element::before { content: ""; }',description:"Before pseudo-element"},{property:"::after",values:'element::after { content: ""; }',description:"After pseudo-element"},{property:"::first-line",values:"p::first-line { }",description:"First line of text"},{property:"::first-letter",values:"p::first-letter { }",description:"First letter of text"},{property:"::selection",values:"::selection { }",description:"Selected text"},{property:"::placeholder",values:"input::placeholder { }",description:"Input placeholder"},{property:"::marker",values:"li::marker { }",description:"List marker"},{property:"::backdrop",values:"::backdrop { }",description:"Backdrop element"}]},{category:"Backgrounds & Borders",properties:[{property:"background",values:"red, url(image.jpg), linear-gradient(), inherit, initial, unset",description:"Background shorthand"},{property:"background-color",values:"transparent, red, #ff0000, rgb(255,0,0), rgba(255,0,0,0.5), inherit, initial, unset",description:"Background color"},{property:"background-image",values:"none, url(image.jpg), linear-gradient(), radial-gradient(), conic-gradient(), inherit, initial, unset",description:"Background image"},{property:"background-repeat",values:"repeat, no-repeat, repeat-x, repeat-y, space, round, inherit, initial, unset",description:"Background repeat"},{property:"background-attachment",values:"scroll, fixed, local, inherit, initial, unset",description:"Background attachment"},{property:"background-position",values:"center, top left, 50% 50%, inherit, initial, unset",description:"Background position"},{property:"background-size",values:"auto, cover, contain, 100px 200px, 50% 100%, inherit, initial, unset",description:"Background size"},{property:"background-clip",values:"border-box, padding-box, content-box, text, inherit, initial, unset",description:"Background clip"},{property:"background-origin",values:"border-box, padding-box, content-box, inherit, initial, unset",description:"Background origin"},{property:"border-image",values:"none, url(image.jpg) 30 stretch, inherit, initial, unset",description:"Border image"},{property:"border-image-source",values:"none, url(image.jpg), inherit, initial, unset",description:"Border image source"},{property:"border-image-slice",values:"100%, 30, 30 30 30, inherit, initial, unset",description:"Border image slice"},{property:"border-image-width",values:"1, 30px, 30%, inherit, initial, unset",description:"Border image width"},{property:"border-image-outset",values:"0, 30px, inherit, initial, unset",description:"Border image outset"},{property:"border-image-repeat",values:"stretch, repeat, round, space, inherit, initial, unset",description:"Border image repeat"}]},{category:"Text & Fonts",properties:[{property:"font",values:"italic bold 12px/1.5 Arial, inherit, initial, unset",description:"Font shorthand"},{property:"font-family",values:'Arial, "Times New Roman", serif, sans-serif, monospace, inherit, initial, unset',description:"Font family"},{property:"font-size",values:"16px, 1em, 1.2rem, 120%, inherit, initial, unset",description:"Font size"},{property:"font-weight",values:"normal, bold, 100-900, inherit, initial, unset",description:"Font weight"},{property:"font-style",values:"normal, italic, oblique, inherit, initial, unset",description:"Font style"},{property:"font-variant",values:"normal, small-caps, inherit, initial, unset",description:"Font variant"},{property:"font-stretch",values:"normal, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded, inherit, initial, unset",description:"Font stretch"},{property:"font-size-adjust",values:"none, 0.5, inherit, initial, unset",description:"Font size adjust"},{property:"font-synthesis",values:"none, weight, style, weight style, inherit, initial, unset",description:"Font synthesis"},{property:"text-align",values:"left, right, center, justify, start, end, inherit, initial, unset",description:"Text alignment"},{property:"text-align-last",values:"auto, left, right, center, justify, start, end, inherit, initial, unset",description:"Last line alignment"},{property:"text-decoration",values:"none, underline, overline, line-through, inherit, initial, unset",description:"Text decoration shorthand"},{property:"text-decoration-line",values:"none, underline, overline, line-through, blink, inherit, initial, unset",description:"Text decoration line"},{property:"text-decoration-style",values:"solid, double, dotted, dashed, wavy, inherit, initial, unset",description:"Text decoration style"},{property:"text-decoration-color",values:"currentColor, red, #ff0000, inherit, initial, unset",description:"Text decoration color"},{property:"text-decoration-thickness",values:"auto, 1px, 0.1em, inherit, initial, unset",description:"Text decoration thickness"},{property:"text-underline-offset",values:"auto, 1px, inherit, initial, unset",description:"Text underline offset"},{property:"text-underline-position",values:"auto, under, left, right, inherit, initial, unset",description:"Text underline position"},{property:"text-transform",values:"none, uppercase, lowercase, capitalize, full-width, full-size-kana, inherit, initial, unset",description:"Text transformation"},{property:"text-indent",values:"0, 20px, 2em, inherit, initial, unset",description:"Text indent"},{property:"text-overflow",values:"clip, ellipsis, inherit, initial, unset",description:"Text overflow"},{property:"white-space",values:"normal, nowrap, pre, pre-wrap, pre-line, break-spaces, inherit, initial, unset",description:"White space handling"},{property:"word-spacing",values:"normal, 2px, 0.2em, inherit, initial, unset",description:"Word spacing"},{property:"letter-spacing",values:"normal, 1px, 0.1em, inherit, initial, unset",description:"Letter spacing"},{property:"line-height",values:"normal, 1.5, 24px, inherit, initial, unset",description:"Line height"},{property:"vertical-align",values:"baseline, sub, super, top, text-top, middle, bottom, text-bottom, inherit, initial, unset",description:"Vertical alignment"},{property:"word-break",values:"normal, break-all, keep-all, break-word, inherit, initial, unset",description:"Word break"},{property:"word-wrap",values:"normal, break-word, inherit, initial, unset",description:"Word wrap (deprecated)"},{property:"overflow-wrap",values:"normal, break-word, anywhere, inherit, initial, unset",description:"Overflow wrap"},{property:"hyphens",values:"none, manual, auto, inherit, initial, unset",description:"Hyphenation"},{property:"tab-size",values:"4, 8, inherit, initial, unset",description:"Tab size"},{property:"text-orientation",values:"mixed, upright, sideways, inherit, initial, unset",description:"Text orientation"},{property:"writing-mode",values:"horizontal-tb, vertical-rl, vertical-lr, sideways-rl, sideways-lr, inherit, initial, unset",description:"Writing mode"},{property:"direction",values:"ltr, rtl, inherit, initial, unset",description:"Text direction"},{property:"unicode-bidi",values:"normal, embed, isolate, bidi-override, isolate-override, plaintext, inherit, initial, unset",description:"Unicode bidirectional"}]},{category:"Transforms & 3D",properties:[{property:"transform",values:"none, translate(10px), rotate(45deg), scale(2), skew(10deg), inherit, initial, unset",description:"Element transformation"},{property:"transform-origin",values:"center, top left, 50% 50%, inherit, initial, unset",description:"Transform origin"},{property:"transform-style",values:"flat, preserve-3d, inherit, initial, unset",description:"Transform style"},{property:"perspective",values:"none, 1000px, inherit, initial, unset",description:"Perspective"},{property:"perspective-origin",values:"center, top left, 50% 50%, inherit, initial, unset",description:"Perspective origin"},{property:"backface-visibility",values:"visible, hidden, inherit, initial, unset",description:"Backface visibility"},{property:"translate",values:"none, 10px, 10px 20px, inherit, initial, unset",description:"Translate shorthand"},{property:"rotate",values:"none, 45deg, inherit, initial, unset",description:"Rotate shorthand"},{property:"scale",values:"none, 2, 2 3, inherit, initial, unset",description:"Scale shorthand"},{property:"skew",values:"none, 10deg, 10deg 20deg, inherit, initial, unset",description:"Skew shorthand"}]},{category:"Transitions & Animations",properties:[{property:"transition",values:"all 0.3s ease, width 0.5s linear, inherit, initial, unset",description:"Transition shorthand"},{property:"transition-property",values:"all, width, height, color, inherit, initial, unset",description:"Transition properties"},{property:"transition-duration",values:"0s, 0.3s, 1s, inherit, initial, unset",description:"Transition duration"},{property:"transition-timing-function",values:"ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(), inherit, initial, unset",description:"Transition timing"},{property:"transition-delay",values:"0s, 1s, inherit, initial, unset",description:"Transition delay"},{property:"animation",values:"slideIn 1s ease-in-out, inherit, initial, unset",description:"Animation shorthand"},{property:"animation-name",values:"none, slideIn, fadeOut, inherit, initial, unset",description:"Animation name"},{property:"animation-duration",values:"0s, 1s, 2.5s, inherit, initial, unset",description:"Animation duration"},{property:"animation-timing-function",values:"ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(), inherit, initial, unset",description:"Animation timing"},{property:"animation-delay",values:"0s, 1s, -1s, inherit, initial, unset",description:"Animation delay"},{property:"animation-iteration-count",values:"1, infinite, 3, inherit, initial, unset",description:"Animation iterations"},{property:"animation-direction",values:"normal, reverse, alternate, alternate-reverse, inherit, initial, unset",description:"Animation direction"},{property:"animation-fill-mode",values:"none, forwards, backwards, both, inherit, initial, unset",description:"Animation fill mode"},{property:"animation-play-state",values:"running, paused, inherit, initial, unset",description:"Animation play state"},{property:"@keyframes",values:"@keyframes slideIn { from { } to { } }",description:"Keyframe animation definition"}]},{category:"Tables",properties:[{property:"table-layout",values:"auto, fixed, inherit, initial, unset",description:"Table layout algorithm"},{property:"border-collapse",values:"separate, collapse, inherit, initial, unset",description:"Border collapse"},{property:"border-spacing",values:"0, 10px, 10px 20px, inherit, initial, unset",description:"Border spacing"},{property:"caption-side",values:"top, bottom, inherit, initial, unset",description:"Caption side"},{property:"empty-cells",values:"show, hide, inherit, initial, unset",description:"Empty cells"}]},{category:"Lists",properties:[{property:"list-style",values:"disc outside none, inherit, initial, unset",description:"List style shorthand"},{property:"list-style-type",values:"disc, circle, square, decimal, lower-alpha, upper-alpha, inherit, initial, unset",description:"List style type"},{property:"list-style-position",values:"outside, inside, inherit, initial, unset",description:"List style position"},{property:"list-style-image",values:"none, url(image.jpg), inherit, initial, unset",description:"List style image"}]},{category:"Counters",properties:[{property:"counter-reset",values:"none, counter 0, inherit, initial, unset",description:"Counter reset"},{property:"counter-increment",values:"none, counter 1, inherit, initial, unset",description:"Counter increment"},{property:"content",values:'normal, "text", url(), counter(), attr(), inherit, initial, unset',description:"Content"}]},{category:"Generated Content",properties:[{property:"quotes",values:'auto, "«" "»" "‹" "›", inherit, initial, unset',description:"Quotes"},{property:"resize",values:"none, both, horizontal, vertical, inherit, initial, unset",description:"Resize"},{property:"cursor",values:"auto, pointer, default, text, move, inherit, initial, unset",description:"Cursor"},{property:"caret-color",values:"auto, red, #ff0000, inherit, initial, unset",description:"Caret color"},{property:"user-select",values:"auto, none, text, all, contain, inherit, initial, unset",description:"User select"},{property:"appearance",values:"auto, none, inherit, initial, unset",description:"Appearance"},{property:"accent-color",values:"auto, red, #ff0000, inherit, initial, unset",description:"Accent color"}]}],l=s.map(a=>({...a,elements:a.elements.filter(d=>d.tag.toLowerCase().includes(n.toLowerCase())||d.description.toLowerCase().includes(n.toLowerCase()))})).filter(a=>a.elements.length>0),c=o.map(a=>({...a,properties:a.properties.filter(d=>d.property.toLowerCase().includes(n.toLowerCase())||d.description.toLowerCase().includes(n.toLowerCase()))})).filter(a=>a.properties.length>0);return i.jsxs("div",{className:"section",children:[i.jsx("h1",{children:"HTML & CSS Cheatsheet"}),i.jsx("p",{children:"Complete reference for HTML elements and CSS properties"}),i.jsx("div",{className:"search-container",children:i.jsx("input",{type:"text",placeholder:"Search HTML elements or CSS properties...",value:n,onChange:a=>r(a.target.value),className:"search-input"})}),i.jsxs("div",{className:"tab-navigation",children:[i.jsxs("button",{className:`tab ${e==="html"?"active":""}`,onClick:()=>t("html"),children:[i.jsx(su,{className:"tab-icon"}),"HTML Elements"]}),i.jsxs("button",{className:`tab ${e==="css"?"active":""}`,onClick:()=>t("css"),children:[i.jsx(Kp,{className:"tab-icon"}),"CSS Properties"]})]}),e==="html"&&i.jsxs("div",{className:"cheatsheet-content",children:[i.jsxs("div",{className:"cheatsheet-intro",children:[i.jsx("h2",{children:"HTML Elements Reference"}),i.jsx("p",{children:"Complete list of HTML elements organized by category. Click on any element to see its usage."})]}),l.map((a,d)=>i.jsxs("div",{className:"cheatsheet-category",children:[i.jsx("h3",{className:"category-title",children:a.category}),i.jsx("div",{className:"elements-grid",children:a.elements.map((h,v)=>i.jsxs("div",{className:"element-card",children:[i.jsxs("div",{className:"element-header",children:[i.jsx("code",{className:"element-tag",children:h.tag}),i.jsx("span",{className:"element-description",children:h.description})]}),i.jsxs("div",{className:"element-example",children:[i.jsx("strong",{children:"Example:"}),i.jsx("code",{className:"example-code",children:h.example})]})]},v))})]},d))]}),e==="css"&&i.jsxs("div",{className:"cheatsheet-content",children:[i.jsxs("div",{className:"cheatsheet-intro",children:[i.jsx("h2",{children:"CSS Properties Reference"}),i.jsx("p",{children:"Complete list of CSS properties organized by category. Common values and usage examples included."})]}),c.map((a,d)=>i.jsxs("div",{className:"cheatsheet-category",children:[i.jsx("h3",{className:"category-title",children:a.category}),i.jsx("div",{className:"properties-grid",children:a.properties.map((h,v)=>i.jsxs("div",{className:"property-card",children:[i.jsxs("div",{className:"property-header",children:[i.jsx("code",{className:"property-name",children:h.property}),i.jsx("span",{className:"property-description",children:h.description})]}),i.jsxs("div",{className:"property-values",children:[i.jsx("strong",{children:"Values:"}),i.jsx("code",{className:"values-code",children:h.values})]})]},v))})]},d))]}),i.jsxs("div",{className:"quick-reference",children:[i.jsx("h2",{children:"Quick Reference"}),i.jsxs("div",{className:"reference-grid",children:[i.jsxs("div",{className:"reference-card",children:[i.jsx("h3",{children:"HTML Structure"}),i.jsx("pre",{className:"reference-code",children:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- Content here -->
</body>
</html>`})]}),i.jsxs("div",{className:"reference-card",children:[i.jsx("h3",{children:"CSS Box Model"}),i.jsx("pre",{className:"reference-code",children:`/* Box Model Properties */
.element {
  width: 200px;        /* Content width */
  height: 100px;       /* Content height */
  padding: 20px;       /* Inner spacing */
  border: 2px solid;   /* Border */
  margin: 10px;        /* Outer spacing */
  box-sizing: border-box; /* Include border in width */
}`})]}),i.jsxs("div",{className:"reference-card",children:[i.jsx("h3",{children:"Flexbox Layout"}),i.jsx("pre",{className:"reference-code",children:`/* Flexbox Container */
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

/* Flexbox Items */
.item {
  flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}`})]}),i.jsxs("div",{className:"reference-card",children:[i.jsx("h3",{children:"CSS Grid Layout"}),i.jsx("pre",{className:"reference-code",children:`/* Grid Container */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  grid-template-areas: 
    "header header"
    "sidebar main";
}

/* Grid Items */
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}`})]})]})]})]})}function pm(){return i.jsxs("div",{className:"section",children:[i.jsx("h1",{children:"Figma to React Mapping"}),i.jsx("p",{children:"How design concepts translate to code"}),i.jsxs("div",{className:"mapping-grid",children:[i.jsxs("div",{className:"mapping-card",children:[i.jsx("h3",{children:"Figma Frame → React Component"}),i.jsx("p",{children:"A frame in Figma becomes a component in React"}),i.jsx(D,{code:`// Figma Frame → React Component
function Card() {
  return (
    <div className="card">
      <h3>Card Title</h3>
      <p>Card content</p>
    </div>
  );
}`})]}),i.jsxs("div",{className:"mapping-card",children:[i.jsx("h3",{children:"Figma Component → Reusable React Component"}),i.jsx("p",{children:"Figma components become reusable React components with props"}),i.jsx(D,{code:`// Figma Component → React Component with Props
function Button({ text, variant }) {
  return (
    <button className={\`btn btn-\${variant}\`}>
      {text}
    </button>
  );
}`})]}),i.jsxs("div",{className:"mapping-card",children:[i.jsx("h3",{children:"Figma Auto Layout → CSS Flexbox/Grid"}),i.jsx("p",{children:"Auto layout properties translate to CSS layout"}),i.jsx(D,{code:`// Figma Auto Layout → CSS
.card-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}`})]}),i.jsxs("div",{className:"mapping-card",children:[i.jsx("h3",{children:"Figma Constraints → CSS Positioning"}),i.jsx("p",{children:"Constraints become responsive CSS rules"}),i.jsx(D,{code:`// Figma Constraints → CSS
.responsive-element {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}`})]}),i.jsxs("div",{className:"mapping-card",children:[i.jsx("h3",{children:"Figma Interactions → React Event Handlers"}),i.jsx("p",{children:"Figma interactions become JavaScript event handlers"}),i.jsx(D,{code:`// Figma Interaction → React Event Handler
function InteractiveButton() {
  const handleClick = () => {
    // Handle click like Figma interaction
    console.log("Button clicked!");
  };

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}`})]}),i.jsxs("div",{className:"mapping-card",children:[i.jsx("h3",{children:"Figma Variants → React Conditional Rendering"}),i.jsx("p",{children:"Component variants become conditional rendering"}),i.jsx(D,{code:`// Figma Variants → React Conditional Rendering
function Button({ variant, disabled }) {
  return (
    <button 
      className={\`btn btn-\${variant} \${disabled ? 'disabled' : ''}\`}
      disabled={disabled}
    >
      Button Text
    </button>
  );
}`})]})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("h2",{children:"Design System Translation"}),i.jsxs("div",{className:"figma-analogy",children:[i.jsx("strong",{children:"Figma Analogy:"})," Your Figma design system can be directly translated to React components and CSS variables."]}),i.jsx(D,{code:`// Figma Design System → React/CSS
:root {
  /* Colors from Figma */
  --primary: #6366f1;
  --secondary: #f59e0b;
  --success: #10b981;
  --error: #ef4444;
  
  /* Typography from Figma */
  --font-family: 'Inter', sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  
  /* Spacing from Figma */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-4: 1rem;
  --spacing-8: 2rem;
}

// Using design system in components
function DesignSystemButton({ variant, size }) {
  return (
    <button className={\`btn btn-\${variant} btn-\${size}\`}>
      Button
    </button>
  );
}`,explanation:"Your Figma design system can be directly translated to CSS variables and React components, ensuring consistency between design and code."})]})]})}function D({code:e,explanation:t}){return i.jsxs("div",{className:"code-example",children:[i.jsx("pre",{children:i.jsx("code",{children:e})}),i.jsxs("div",{className:"explanation",children:[i.jsx("strong",{children:"💡 Explanation:"})," ",t]})]})}Jr.createRoot(document.getElementById("root")).render(i.jsx(Su.StrictMode,{children:i.jsx(em,{})}));
