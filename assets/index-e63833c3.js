(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function ou(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jo={exports:{}},ns={},Xo={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),au=Symbol.for("react.portal"),cu=Symbol.for("react.fragment"),uu=Symbol.for("react.strict_mode"),du=Symbol.for("react.profiler"),pu=Symbol.for("react.provider"),mu=Symbol.for("react.context"),hu=Symbol.for("react.forward_ref"),fu=Symbol.for("react.suspense"),gu=Symbol.for("react.memo"),vu=Symbol.for("react.lazy"),Ml=Symbol.iterator;function xu(e){return e===null||typeof e!="object"?null:(e=Ml&&e[Ml]||e["@@iterator"],typeof e=="function"?e:null)}var Yo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ko=Object.assign,Go={};function on(e,t,n){this.props=e,this.context=t,this.refs=Go,this.updater=n||Yo}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zo(){}Zo.prototype=on.prototype;function Hi(e,t,n){this.props=e,this.context=t,this.refs=Go,this.updater=n||Yo}var Vi=Hi.prototype=new Zo;Vi.constructor=Hi;Ko(Vi,on.prototype);Vi.isPureReactComponent=!0;var _l=Array.isArray,qo=Object.prototype.hasOwnProperty,$i={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function ta(e,t,n){var s,i={},l=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)qo.call(t,s)&&!ea.hasOwnProperty(s)&&(i[s]=t[s]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var a=Array(c),d=0;d<c;d++)a[d]=arguments[d+2];i.children=a}if(e&&e.defaultProps)for(s in c=e.defaultProps,c)i[s]===void 0&&(i[s]=c[s]);return{$$typeof:Kn,type:e,key:l,ref:o,props:i,_owner:$i.current}}function yu(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function ju(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ul=/\/+/g;function Ns(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ju(""+e.key):t.toString(36)}function jr(e,t,n,s,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Kn:case au:o=!0}}if(o)return o=e,i=i(o),e=s===""?"."+Ns(o,0):s,_l(i)?(n="",e!=null&&(n=e.replace(Ul,"$&/")+"/"),jr(i,t,n,"",function(d){return d})):i!=null&&(Wi(i)&&(i=yu(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ul,"$&/")+"/")+e)),t.push(i)),1;if(o=0,s=s===""?".":s+":",_l(e))for(var c=0;c<e.length;c++){l=e[c];var a=s+Ns(l,c);o+=jr(l,t,n,a,i)}else if(a=xu(e),typeof a=="function")for(e=a.call(e),c=0;!(l=e.next()).done;)l=l.value,a=s+Ns(l,c++),o+=jr(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function rr(e,t,n){if(e==null)return e;var s=[],i=0;return jr(e,s,"","",function(l){return t.call(n,l,i++)}),s}function Nu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Nr={transition:null},ku={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Nr,ReactCurrentOwner:$i};function na(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Wi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=on;L.Fragment=cu;L.Profiler=du;L.PureComponent=Hi;L.StrictMode=uu;L.Suspense=fu;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ku;L.act=na;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Ko({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=$i.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in t)qo.call(t,a)&&!ea.hasOwnProperty(a)&&(s[a]=t[a]===void 0&&c!==void 0?c[a]:t[a])}var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){c=Array(a);for(var d=0;d<a;d++)c[d]=arguments[d+2];s.children=c}return{$$typeof:Kn,type:e.type,key:i,ref:l,props:s,_owner:o}};L.createContext=function(e){return e={$$typeof:mu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pu,_context:e},e.Consumer=e};L.createElement=ta;L.createFactory=function(e){var t=ta.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:hu,render:e}};L.isValidElement=Wi;L.lazy=function(e){return{$$typeof:vu,_payload:{_status:-1,_result:e},_init:Nu}};L.memo=function(e,t){return{$$typeof:gu,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Nr.transition;Nr.transition={};try{e()}finally{Nr.transition=t}};L.unstable_act=na;L.useCallback=function(e,t){return ue.current.useCallback(e,t)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,t){return ue.current.useEffect(e,t)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ue.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";Xo.exports=L;var w=Xo.exports;const Su=ou(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu=w,wu=Symbol.for("react.element"),Eu=Symbol.for("react.fragment"),Pu=Object.prototype.hasOwnProperty,Du=Cu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ru={key:!0,ref:!0,__self:!0,__source:!0};function ra(e,t,n){var s,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)Pu.call(t,s)&&!Ru.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:wu,type:e,key:l,ref:o,props:i,_owner:Du.current}}ns.Fragment=Eu;ns.jsx=ra;ns.jsxs=ra;Jo.exports=ns;var r=Jo.exports,Js={},sa={exports:{}},ke={},ia={exports:{}},la={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,b){var T=E.length;E.push(b);e:for(;0<T;){var Q=T-1>>>1,G=E[Q];if(0<i(G,b))E[Q]=b,E[T]=G,T=Q;else break e}}function n(E){return E.length===0?null:E[0]}function s(E){if(E.length===0)return null;var b=E[0],T=E.pop();if(T!==b){E[0]=T;e:for(var Q=0,G=E.length,tr=G>>>1;Q<tr;){var xt=2*(Q+1)-1,js=E[xt],yt=xt+1,nr=E[yt];if(0>i(js,T))yt<G&&0>i(nr,js)?(E[Q]=nr,E[yt]=T,Q=yt):(E[Q]=js,E[xt]=T,Q=xt);else if(yt<G&&0>i(nr,T))E[Q]=nr,E[yt]=T,Q=yt;else break e}}return b}function i(E,b){var T=E.sortIndex-b.sortIndex;return T!==0?T:E.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var a=[],d=[],h=1,v=null,f=3,N=!1,x=!1,k=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var b=n(d);b!==null;){if(b.callback===null)s(d);else if(b.startTime<=E)s(d),b.sortIndex=b.expirationTime,t(a,b);else break;b=n(d)}}function g(E){if(k=!1,p(E),!x)if(n(a)!==null)x=!0,xs(S);else{var b=n(d);b!==null&&ys(g,b.startTime-E)}}function S(E,b){x=!1,k&&(k=!1,m(y),y=-1),N=!0;var T=f;try{for(p(b),v=n(a);v!==null&&(!(v.expirationTime>b)||E&&!ve());){var Q=v.callback;if(typeof Q=="function"){v.callback=null,f=v.priorityLevel;var G=Q(v.expirationTime<=b);b=e.unstable_now(),typeof G=="function"?v.callback=G:v===n(a)&&s(a),p(b)}else s(a);v=n(a)}if(v!==null)var tr=!0;else{var xt=n(d);xt!==null&&ys(g,xt.startTime-b),tr=!1}return tr}finally{v=null,f=T,N=!1}}var P=!1,D=null,y=-1,z=5,F=-1;function ve(){return!(e.unstable_now()-F<z)}function un(){if(D!==null){var E=e.unstable_now();F=E;var b=!0;try{b=D(!0,E)}finally{b?dn():(P=!1,D=null)}}else P=!1}var dn;if(typeof u=="function")dn=function(){u(un)};else if(typeof MessageChannel<"u"){var zl=new MessageChannel,lu=zl.port2;zl.port1.onmessage=un,dn=function(){lu.postMessage(null)}}else dn=function(){I(un,0)};function xs(E){D=E,P||(P=!0,dn())}function ys(E,b){y=I(function(){E(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||N||(x=!0,xs(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(E){switch(f){case 1:case 2:case 3:var b=3;break;default:b=f}var T=f;f=b;try{return E()}finally{f=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,b){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var T=f;f=E;try{return b()}finally{f=T}},e.unstable_scheduleCallback=function(E,b,T){var Q=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Q+T:Q):T=Q,E){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=T+G,E={id:h++,callback:b,priorityLevel:E,startTime:T,expirationTime:G,sortIndex:-1},T>Q?(E.sortIndex=T,t(d,E),n(a)===null&&E===n(d)&&(k?(m(y),y=-1):k=!0,ys(g,T-Q))):(E.sortIndex=G,t(a,E),x||N||(x=!0,xs(S))),E},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(E){var b=f;return function(){var T=f;f=b;try{return E.apply(this,arguments)}finally{f=T}}}})(la);ia.exports=la;var bu=ia.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu=w,Ne=bu;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oa=new Set,Ln={};function Ft(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)oa.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xs=Object.prototype.hasOwnProperty,Fu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bl={},Ol={};function Lu(e){return Xs.call(Ol,e)?!0:Xs.call(Bl,e)?!1:Fu.test(e)?Ol[e]=!0:(Bl[e]=!0,!1)}function Iu(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Au(e,t,n,s){if(t===null||typeof t>"u"||Iu(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,s,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qi=/[\-:]([a-z])/g;function Ji(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qi,Ji);ne[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qi,Ji);ne[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qi,Ji);ne[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xi(e,t,n,s){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Au(t,n,i,s)&&(n=null),s||i===null?Lu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,s=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var Ge=Tu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sr=Symbol.for("react.element"),At=Symbol.for("react.portal"),zt=Symbol.for("react.fragment"),Yi=Symbol.for("react.strict_mode"),Ys=Symbol.for("react.profiler"),aa=Symbol.for("react.provider"),ca=Symbol.for("react.context"),Ki=Symbol.for("react.forward_ref"),Ks=Symbol.for("react.suspense"),Gs=Symbol.for("react.suspense_list"),Gi=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ua=Symbol.for("react.offscreen"),Hl=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Hl&&e[Hl]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,ks;function jn(e){if(ks===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ks=t&&t[1]||""}return`
`+ks+e}var Ss=!1;function Cs(e,t){if(!e||Ss)return"";Ss=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var s=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){s=d}e.call(t.prototype)}else{try{throw Error()}catch(d){s=d}e()}}catch(d){if(d&&s&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=s.stack.split(`
`),o=i.length-1,c=l.length-1;1<=o&&0<=c&&i[o]!==l[c];)c--;for(;1<=o&&0<=c;o--,c--)if(i[o]!==l[c]){if(o!==1||c!==1)do if(o--,c--,0>c||i[o]!==l[c]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=c);break}}}finally{Ss=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function zu(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=Cs(e.type,!1),e;case 11:return e=Cs(e.type.render,!1),e;case 1:return e=Cs(e.type,!0),e;default:return""}}function Zs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zt:return"Fragment";case At:return"Portal";case Ys:return"Profiler";case Yi:return"StrictMode";case Ks:return"Suspense";case Gs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ca:return(e.displayName||"Context")+".Consumer";case aa:return(e._context.displayName||"Context")+".Provider";case Ki:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gi:return t=e.displayName||null,t!==null?t:Zs(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Zs(e(t))}catch{}}return null}function Mu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zs(t);case 8:return t===Yi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function da(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _u(e){var t=da(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){s=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){e._valueTracker||(e._valueTracker=_u(e))}function pa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=da(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qs(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vl(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ma(e,t){t=t.checked,t!=null&&Xi(e,"checked",t,!1)}function ei(e,t){ma(e,t);var n=mt(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ti(e,t.type,n):t.hasOwnProperty("defaultValue")&&ti(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $l(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ti(e,t,n){(t!=="number"||Fr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nn=Array.isArray;function Jt(e,t,n,s){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&s&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ni(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Nn(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function ha(e,t){var n=mt(t.value),s=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function Ql(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,ga=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uu=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Uu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function va(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function xa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,i=va(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,i):e[n]=i}}var Bu=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function si(e,t){if(t){if(Bu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var li=null;function Zi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oi=null,Xt=null,Yt=null;function Jl(e){if(e=qn(e)){if(typeof oi!="function")throw Error(j(280));var t=e.stateNode;t&&(t=os(t),oi(e.stateNode,e.type,t))}}function ya(e){Xt?Yt?Yt.push(e):Yt=[e]:Xt=e}function ja(){if(Xt){var e=Xt,t=Yt;if(Yt=Xt=null,Jl(e),t)for(e=0;e<t.length;e++)Jl(t[e])}}function Na(e,t){return e(t)}function ka(){}var ws=!1;function Sa(e,t,n){if(ws)return e(t,n);ws=!0;try{return Na(e,t,n)}finally{ws=!1,(Xt!==null||Yt!==null)&&(ka(),ja())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var s=os(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var ai=!1;if(Je)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){ai=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{ai=!1}function Ou(e,t,n,s,i,l,o,c,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var wn=!1,Lr=null,Ir=!1,ci=null,Hu={onError:function(e){wn=!0,Lr=e}};function Vu(e,t,n,s,i,l,o,c,a){wn=!1,Lr=null,Ou.apply(Hu,arguments)}function $u(e,t,n,s,i,l,o,c,a){if(Vu.apply(this,arguments),wn){if(wn){var d=Lr;wn=!1,Lr=null}else throw Error(j(198));Ir||(Ir=!0,ci=d)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ca(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xl(e){if(Lt(e)!==e)throw Error(j(188))}function Wu(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,s=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(s=i.return,s!==null){n=s;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Xl(i),e;if(l===s)return Xl(i),t;l=l.sibling}throw Error(j(188))}if(n.return!==s.return)n=i,s=l;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,s=l;break}if(c===s){o=!0,s=i,n=l;break}c=c.sibling}if(!o){for(c=l.child;c;){if(c===n){o=!0,n=l,s=i;break}if(c===s){o=!0,s=l,n=i;break}c=c.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==s)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function wa(e){return e=Wu(e),e!==null?Ea(e):null}function Ea(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ea(e);if(t!==null)return t;e=e.sibling}return null}var Pa=Ne.unstable_scheduleCallback,Yl=Ne.unstable_cancelCallback,Qu=Ne.unstable_shouldYield,Ju=Ne.unstable_requestPaint,J=Ne.unstable_now,Xu=Ne.unstable_getCurrentPriorityLevel,qi=Ne.unstable_ImmediatePriority,Da=Ne.unstable_UserBlockingPriority,Ar=Ne.unstable_NormalPriority,Yu=Ne.unstable_LowPriority,Ra=Ne.unstable_IdlePriority,rs=null,Be=null;function Ku(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(rs,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:qu,Gu=Math.log,Zu=Math.LN2;function qu(e){return e>>>=0,e===0?32:31-(Gu(e)/Zu|0)|0}var or=64,ar=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var c=o&~i;c!==0?s=kn(c):(l&=o,l!==0&&(s=kn(l)))}else o=n&~i,o!==0?s=kn(o):l!==0&&(s=kn(l));if(s===0)return 0;if(t!==0&&t!==s&&!(t&i)&&(i=s&-s,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(s&4&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-Ie(t),i=1<<n,s|=e[n],t&=~i;return s}function ed(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function td(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ie(l),c=1<<o,a=i[o];a===-1?(!(c&n)||c&s)&&(i[o]=ed(c,t)):a<=t&&(e.expiredLanes|=c),l&=~c}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ba(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Es(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function nd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ie(n),l=1<<i;t[i]=0,s[i]=-1,e[i]=-1,n&=~l}}function el(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-Ie(n),i=1<<s;i&t|e[s]&t&&(e[s]|=t),n&=~i}}var M=0;function Ta(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fa,tl,La,Ia,Aa,di=!1,cr=[],it=null,lt=null,ot=null,zn=new Map,Mn=new Map,tt=[],rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kl(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(t.pointerId)}}function hn(e,t,n,s,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:l,targetContainers:[i]},t!==null&&(t=qn(t),t!==null&&tl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sd(e,t,n,s,i){switch(t){case"focusin":return it=hn(it,e,t,n,s,i),!0;case"dragenter":return lt=hn(lt,e,t,n,s,i),!0;case"mouseover":return ot=hn(ot,e,t,n,s,i),!0;case"pointerover":var l=i.pointerId;return zn.set(l,hn(zn.get(l)||null,e,t,n,s,i)),!0;case"gotpointercapture":return l=i.pointerId,Mn.set(l,hn(Mn.get(l)||null,e,t,n,s,i)),!0}return!1}function za(e){var t=kt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ca(n),t!==null){e.blockedOn=t,Aa(e.priority,function(){La(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);li=s,n.target.dispatchEvent(s),li=null}else return t=qn(n),t!==null&&tl(t),e.blockedOn=n,!1;t.shift()}return!0}function Gl(e,t,n){kr(e)&&n.delete(t)}function id(){di=!1,it!==null&&kr(it)&&(it=null),lt!==null&&kr(lt)&&(lt=null),ot!==null&&kr(ot)&&(ot=null),zn.forEach(Gl),Mn.forEach(Gl)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,di||(di=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,id)))}function _n(e){function t(i){return fn(i,e)}if(0<cr.length){fn(cr[0],e);for(var n=1;n<cr.length;n++){var s=cr[n];s.blockedOn===e&&(s.blockedOn=null)}}for(it!==null&&fn(it,e),lt!==null&&fn(lt,e),ot!==null&&fn(ot,e),zn.forEach(t),Mn.forEach(t),n=0;n<tt.length;n++)s=tt[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)za(n),n.blockedOn===null&&tt.shift()}var Kt=Ge.ReactCurrentBatchConfig,Mr=!0;function ld(e,t,n,s){var i=M,l=Kt.transition;Kt.transition=null;try{M=1,nl(e,t,n,s)}finally{M=i,Kt.transition=l}}function od(e,t,n,s){var i=M,l=Kt.transition;Kt.transition=null;try{M=4,nl(e,t,n,s)}finally{M=i,Kt.transition=l}}function nl(e,t,n,s){if(Mr){var i=pi(e,t,n,s);if(i===null)zs(e,t,s,_r,n),Kl(e,s);else if(sd(i,e,t,n,s))s.stopPropagation();else if(Kl(e,s),t&4&&-1<rd.indexOf(e)){for(;i!==null;){var l=qn(i);if(l!==null&&Fa(l),l=pi(e,t,n,s),l===null&&zs(e,t,s,_r,n),l===i)break;i=l}i!==null&&s.stopPropagation()}else zs(e,t,s,null,n)}}var _r=null;function pi(e,t,n,s){if(_r=null,e=Zi(s),e=kt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ca(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return _r=e,null}function Ma(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xu()){case qi:return 1;case Da:return 4;case Ar:case Yu:return 16;case Ra:return 536870912;default:return 16}default:return 16}}var rt=null,rl=null,Sr=null;function _a(){if(Sr)return Sr;var e,t=rl,n=t.length,s,i="value"in rt?rt.value:rt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(s=1;s<=o&&t[n-s]===i[l-s];s++);return Sr=i.slice(e,1<s?1-s:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Zl(){return!1}function Se(e){function t(n,s,i,l,o){this._reactName=n,this._targetInst=i,this.type=s,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ur:Zl,this.isPropagationStopped=Zl,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Se(an),Zn=$({},an,{view:0,detail:0}),ad=Se(Zn),Ps,Ds,gn,ss=$({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(Ps=e.screenX-gn.screenX,Ds=e.screenY-gn.screenY):Ds=Ps=0,gn=e),Ps)},movementY:function(e){return"movementY"in e?e.movementY:Ds}}),ql=Se(ss),cd=$({},ss,{dataTransfer:0}),ud=Se(cd),dd=$({},Zn,{relatedTarget:0}),Rs=Se(dd),pd=$({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),md=Se(pd),hd=$({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fd=Se(hd),gd=$({},an,{data:0}),eo=Se(gd),vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yd[e])?!!t[e]:!1}function il(){return jd}var Nd=$({},Zn,{key:function(e){if(e.key){var t=vd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=Se(Nd),Sd=$({},ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),to=Se(Sd),Cd=$({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),wd=Se(Cd),Ed=$({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=Se(Ed),Dd=$({},ss,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rd=Se(Dd),bd=[9,13,27,32],ll=Je&&"CompositionEvent"in window,En=null;Je&&"documentMode"in document&&(En=document.documentMode);var Td=Je&&"TextEvent"in window&&!En,Ua=Je&&(!ll||En&&8<En&&11>=En),no=String.fromCharCode(32),ro=!1;function Ba(e,t){switch(e){case"keyup":return bd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mt=!1;function Fd(e,t){switch(e){case"compositionend":return Oa(t);case"keypress":return t.which!==32?null:(ro=!0,no);case"textInput":return e=t.data,e===no&&ro?null:e;default:return null}}function Ld(e,t){if(Mt)return e==="compositionend"||!ll&&Ba(e,t)?(e=_a(),Sr=rl=rt=null,Mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ua&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function so(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function Ha(e,t,n,s){ya(s),t=Ur(t,"onChange"),0<t.length&&(n=new sl("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Pn=null,Un=null;function Ad(e){qa(e,0)}function is(e){var t=Bt(e);if(pa(t))return e}function zd(e,t){if(e==="change")return t}var Va=!1;if(Je){var bs;if(Je){var Ts="oninput"in document;if(!Ts){var io=document.createElement("div");io.setAttribute("oninput","return;"),Ts=typeof io.oninput=="function"}bs=Ts}else bs=!1;Va=bs&&(!document.documentMode||9<document.documentMode)}function lo(){Pn&&(Pn.detachEvent("onpropertychange",$a),Un=Pn=null)}function $a(e){if(e.propertyName==="value"&&is(Un)){var t=[];Ha(t,Un,e,Zi(e)),Sa(Ad,t)}}function Md(e,t,n){e==="focusin"?(lo(),Pn=t,Un=n,Pn.attachEvent("onpropertychange",$a)):e==="focusout"&&lo()}function _d(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return is(Un)}function Ud(e,t){if(e==="click")return is(t)}function Bd(e,t){if(e==="input"||e==="change")return is(t)}function Od(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:Od;function Bn(e,t){if(ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var i=n[s];if(!Xs.call(t,i)||!ze(e[i],t[i]))return!1}return!0}function oo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ao(e,t){var n=oo(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oo(n)}}function Wa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qa(){for(var e=window,t=Fr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hd(e){var t=Qa(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wa(n.ownerDocument.documentElement,n)){if(s!==null&&ol(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(s.start,i);s=s.end===void 0?l:Math.min(s.end,i),!e.extend&&l>s&&(i=s,s=l,l=i),i=ao(n,l);var o=ao(n,s);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vd=Je&&"documentMode"in document&&11>=document.documentMode,_t=null,mi=null,Dn=null,hi=!1;function co(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hi||_t==null||_t!==Fr(s)||(s=_t,"selectionStart"in s&&ol(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Dn&&Bn(Dn,s)||(Dn=s,s=Ur(mi,"onSelect"),0<s.length&&(t=new sl("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=_t)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ut={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Fs={},Ja={};Je&&(Ja=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function ls(e){if(Fs[e])return Fs[e];if(!Ut[e])return e;var t=Ut[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ja)return Fs[e]=t[n];return e}var Xa=ls("animationend"),Ya=ls("animationiteration"),Ka=ls("animationstart"),Ga=ls("transitionend"),Za=new Map,uo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){Za.set(e,t),Ft(t,[e])}for(var Ls=0;Ls<uo.length;Ls++){var Is=uo[Ls],$d=Is.toLowerCase(),Wd=Is[0].toUpperCase()+Is.slice(1);ft($d,"on"+Wd)}ft(Xa,"onAnimationEnd");ft(Ya,"onAnimationIteration");ft(Ka,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(Ga,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function po(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,$u(s,t,void 0,e),e.currentTarget=null}function qa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],i=s.event;s=s.listeners;e:{var l=void 0;if(t)for(var o=s.length-1;0<=o;o--){var c=s[o],a=c.instance,d=c.currentTarget;if(c=c.listener,a!==l&&i.isPropagationStopped())break e;po(i,c,d),l=a}else for(o=0;o<s.length;o++){if(c=s[o],a=c.instance,d=c.currentTarget,c=c.listener,a!==l&&i.isPropagationStopped())break e;po(i,c,d),l=a}}}if(Ir)throw e=ci,Ir=!1,ci=null,e}function U(e,t){var n=t[yi];n===void 0&&(n=t[yi]=new Set);var s=e+"__bubble";n.has(s)||(ec(t,e,2,!1),n.add(s))}function As(e,t,n){var s=0;t&&(s|=4),ec(n,e,s,t)}var pr="_reactListening"+Math.random().toString(36).slice(2);function On(e){if(!e[pr]){e[pr]=!0,oa.forEach(function(n){n!=="selectionchange"&&(Qd.has(n)||As(n,!1,e),As(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pr]||(t[pr]=!0,As("selectionchange",!1,t))}}function ec(e,t,n,s){switch(Ma(t)){case 1:var i=ld;break;case 4:i=od;break;default:i=nl}n=i.bind(null,t,n,e),i=void 0,!ai||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function zs(e,t,n,s,i){var l=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var c=s.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(o===4)for(o=s.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;c!==null;){if(o=kt(c),o===null)return;if(a=o.tag,a===5||a===6){s=l=o;continue e}c=c.parentNode}}s=s.return}Sa(function(){var d=l,h=Zi(n),v=[];e:{var f=Za.get(e);if(f!==void 0){var N=sl,x=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":N=kd;break;case"focusin":x="focus",N=Rs;break;case"focusout":x="blur",N=Rs;break;case"beforeblur":case"afterblur":N=Rs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=wd;break;case Xa:case Ya:case Ka:N=md;break;case Ga:N=Pd;break;case"scroll":N=ad;break;case"wheel":N=Rd;break;case"copy":case"cut":case"paste":N=fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=to}var k=(t&4)!==0,I=!k&&e==="scroll",m=k?f!==null?f+"Capture":null:f;k=[];for(var u=d,p;u!==null;){p=u;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,m!==null&&(g=An(u,m),g!=null&&k.push(Hn(u,g,p)))),I)break;u=u.return}0<k.length&&(f=new N(f,x,null,n,h),v.push({event:f,listeners:k}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",f&&n!==li&&(x=n.relatedTarget||n.fromElement)&&(kt(x)||x[Xe]))break e;if((N||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,N?(x=n.relatedTarget||n.toElement,N=d,x=x?kt(x):null,x!==null&&(I=Lt(x),x!==I||x.tag!==5&&x.tag!==6)&&(x=null)):(N=null,x=d),N!==x)){if(k=ql,g="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=to,g="onPointerLeave",m="onPointerEnter",u="pointer"),I=N==null?f:Bt(N),p=x==null?f:Bt(x),f=new k(g,u+"leave",N,n,h),f.target=I,f.relatedTarget=p,g=null,kt(h)===d&&(k=new k(m,u+"enter",x,n,h),k.target=p,k.relatedTarget=I,g=k),I=g,N&&x)t:{for(k=N,m=x,u=0,p=k;p;p=It(p))u++;for(p=0,g=m;g;g=It(g))p++;for(;0<u-p;)k=It(k),u--;for(;0<p-u;)m=It(m),p--;for(;u--;){if(k===m||m!==null&&k===m.alternate)break t;k=It(k),m=It(m)}k=null}else k=null;N!==null&&mo(v,f,N,k,!1),x!==null&&I!==null&&mo(v,I,x,k,!0)}}e:{if(f=d?Bt(d):window,N=f.nodeName&&f.nodeName.toLowerCase(),N==="select"||N==="input"&&f.type==="file")var S=zd;else if(so(f))if(Va)S=Bd;else{S=_d;var P=Md}else(N=f.nodeName)&&N.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Ud);if(S&&(S=S(e,d))){Ha(v,S,n,h);break e}P&&P(e,f,d),e==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&ti(f,"number",f.value)}switch(P=d?Bt(d):window,e){case"focusin":(so(P)||P.contentEditable==="true")&&(_t=P,mi=d,Dn=null);break;case"focusout":Dn=mi=_t=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,co(v,n,h);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":co(v,n,h)}var D;if(ll)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Mt?Ba(e,n)&&(y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Ua&&n.locale!=="ko"&&(Mt||y!=="onCompositionStart"?y==="onCompositionEnd"&&Mt&&(D=_a()):(rt=h,rl="value"in rt?rt.value:rt.textContent,Mt=!0)),P=Ur(d,y),0<P.length&&(y=new eo(y,e,null,n,h),v.push({event:y,listeners:P}),D?y.data=D:(D=Oa(n),D!==null&&(y.data=D)))),(D=Td?Fd(e,n):Ld(e,n))&&(d=Ur(d,"onBeforeInput"),0<d.length&&(h=new eo("onBeforeInput","beforeinput",null,n,h),v.push({event:h,listeners:d}),h.data=D))}qa(v,t)})}function Hn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",s=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=An(e,n),l!=null&&s.unshift(Hn(e,l,i)),l=An(e,t),l!=null&&s.push(Hn(e,l,i))),e=e.return}return s}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mo(e,t,n,s,i){for(var l=t._reactName,o=[];n!==null&&n!==s;){var c=n,a=c.alternate,d=c.stateNode;if(a!==null&&a===s)break;c.tag===5&&d!==null&&(c=d,i?(a=An(n,l),a!=null&&o.unshift(Hn(n,a,c))):i||(a=An(n,l),a!=null&&o.push(Hn(n,a,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Jd=/\r\n?/g,Xd=/\u0000|\uFFFD/g;function ho(e){return(typeof e=="string"?e:""+e).replace(Jd,`
`).replace(Xd,"")}function mr(e,t,n){if(t=ho(t),ho(e)!==t&&n)throw Error(j(425))}function Br(){}var fi=null,gi=null;function vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xi=typeof setTimeout=="function"?setTimeout:void 0,Yd=typeof clearTimeout=="function"?clearTimeout:void 0,fo=typeof Promise=="function"?Promise:void 0,Kd=typeof queueMicrotask=="function"?queueMicrotask:typeof fo<"u"?function(e){return fo.resolve(null).then(e).catch(Gd)}:xi;function Gd(e){setTimeout(function(){throw e})}function Ms(e,t){var n=t,s=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(s===0){e.removeChild(i),_n(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=i}while(n);_n(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function go(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+cn,Vn="__reactProps$"+cn,Xe="__reactContainer$"+cn,yi="__reactEvents$"+cn,Zd="__reactListeners$"+cn,qd="__reactHandles$"+cn;function kt(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=go(e);e!==null;){if(n=e[Ue])return n;e=go(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Ue]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function os(e){return e[Vn]||null}var ji=[],Ot=-1;function gt(e){return{current:e}}function B(e){0>Ot||(e.current=ji[Ot],ji[Ot]=null,Ot--)}function _(e,t){Ot++,ji[Ot]=e.current,e.current=t}var ht={},oe=gt(ht),he=gt(!1),Pt=ht;function en(e,t){var n=e.type.contextTypes;if(!n)return ht;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function fe(e){return e=e.childContextTypes,e!=null}function Or(){B(he),B(oe)}function vo(e,t,n){if(oe.current!==ht)throw Error(j(168));_(oe,t),_(he,n)}function tc(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error(j(108,Mu(e)||"Unknown",i));return $({},n,s)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ht,Pt=oe.current,_(oe,e),_(he,he.current),!0}function xo(e,t,n){var s=e.stateNode;if(!s)throw Error(j(169));n?(e=tc(e,t,Pt),s.__reactInternalMemoizedMergedChildContext=e,B(he),B(oe),_(oe,e)):B(he),_(he,n)}var Ve=null,as=!1,_s=!1;function nc(e){Ve===null?Ve=[e]:Ve.push(e)}function ep(e){as=!0,nc(e)}function vt(){if(!_s&&Ve!==null){_s=!0;var e=0,t=M;try{var n=Ve;for(M=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}Ve=null,as=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),Pa(qi,vt),i}finally{M=t,_s=!1}}return null}var Ht=[],Vt=0,Vr=null,$r=0,Ce=[],we=0,Dt=null,$e=1,We="";function jt(e,t){Ht[Vt++]=$r,Ht[Vt++]=Vr,Vr=e,$r=t}function rc(e,t,n){Ce[we++]=$e,Ce[we++]=We,Ce[we++]=Dt,Dt=e;var s=$e;e=We;var i=32-Ie(s)-1;s&=~(1<<i),n+=1;var l=32-Ie(t)+i;if(30<l){var o=i-i%5;l=(s&(1<<o)-1).toString(32),s>>=o,i-=o,$e=1<<32-Ie(t)+i|n<<i|s,We=l+e}else $e=1<<l|n<<i|s,We=e}function al(e){e.return!==null&&(jt(e,1),rc(e,1,0))}function cl(e){for(;e===Vr;)Vr=Ht[--Vt],Ht[Vt]=null,$r=Ht[--Vt],Ht[Vt]=null;for(;e===Dt;)Dt=Ce[--we],Ce[we]=null,We=Ce[--we],Ce[we]=null,$e=Ce[--we],Ce[we]=null}var je=null,ye=null,O=!1,Le=null;function sc(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,ye=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dt!==null?{id:$e,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,ye=null,!0):!1;default:return!1}}function Ni(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ki(e){if(O){var t=ye;if(t){var n=t;if(!yo(e,t)){if(Ni(e))throw Error(j(418));t=at(n.nextSibling);var s=je;t&&yo(e,t)?sc(s,n):(e.flags=e.flags&-4097|2,O=!1,je=e)}}else{if(Ni(e))throw Error(j(418));e.flags=e.flags&-4097|2,O=!1,je=e}}}function jo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function hr(e){if(e!==je)return!1;if(!O)return jo(e),O=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vi(e.type,e.memoizedProps)),t&&(t=ye)){if(Ni(e))throw ic(),Error(j(418));for(;t;)sc(e,t),t=at(t.nextSibling)}if(jo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=je?at(e.stateNode.nextSibling):null;return!0}function ic(){for(var e=ye;e;)e=at(e.nextSibling)}function tn(){ye=je=null,O=!1}function ul(e){Le===null?Le=[e]:Le.push(e)}var tp=Ge.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var s=n.stateNode}if(!s)throw Error(j(147,e));var i=s,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var c=i.refs;o===null?delete c[l]:c[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function fr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function No(e){var t=e._init;return t(e._payload)}function lc(e){function t(m,u){if(e){var p=m.deletions;p===null?(m.deletions=[u],m.flags|=16):p.push(u)}}function n(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function s(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function i(m,u){return m=pt(m,u),m.index=0,m.sibling=null,m}function l(m,u,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<u?(m.flags|=2,u):p):(m.flags|=2,u)):(m.flags|=1048576,u)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,u,p,g){return u===null||u.tag!==6?(u=Ws(p,m.mode,g),u.return=m,u):(u=i(u,p),u.return=m,u)}function a(m,u,p,g){var S=p.type;return S===zt?h(m,u,p.props.children,g,p.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&No(S)===u.type)?(g=i(u,p.props),g.ref=vn(m,u,p),g.return=m,g):(g=Tr(p.type,p.key,p.props,null,m.mode,g),g.ref=vn(m,u,p),g.return=m,g)}function d(m,u,p,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Qs(p,m.mode,g),u.return=m,u):(u=i(u,p.children||[]),u.return=m,u)}function h(m,u,p,g,S){return u===null||u.tag!==7?(u=Et(p,m.mode,g,S),u.return=m,u):(u=i(u,p),u.return=m,u)}function v(m,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ws(""+u,m.mode,p),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case sr:return p=Tr(u.type,u.key,u.props,null,m.mode,p),p.ref=vn(m,null,u),p.return=m,p;case At:return u=Qs(u,m.mode,p),u.return=m,u;case qe:var g=u._init;return v(m,g(u._payload),p)}if(Nn(u)||pn(u))return u=Et(u,m.mode,p,null),u.return=m,u;fr(m,u)}return null}function f(m,u,p,g){var S=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:c(m,u,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case sr:return p.key===S?a(m,u,p,g):null;case At:return p.key===S?d(m,u,p,g):null;case qe:return S=p._init,f(m,u,S(p._payload),g)}if(Nn(p)||pn(p))return S!==null?null:h(m,u,p,g,null);fr(m,p)}return null}function N(m,u,p,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return m=m.get(p)||null,c(u,m,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case sr:return m=m.get(g.key===null?p:g.key)||null,a(u,m,g,S);case At:return m=m.get(g.key===null?p:g.key)||null,d(u,m,g,S);case qe:var P=g._init;return N(m,u,p,P(g._payload),S)}if(Nn(g)||pn(g))return m=m.get(p)||null,h(u,m,g,S,null);fr(u,g)}return null}function x(m,u,p,g){for(var S=null,P=null,D=u,y=u=0,z=null;D!==null&&y<p.length;y++){D.index>y?(z=D,D=null):z=D.sibling;var F=f(m,D,p[y],g);if(F===null){D===null&&(D=z);break}e&&D&&F.alternate===null&&t(m,D),u=l(F,u,y),P===null?S=F:P.sibling=F,P=F,D=z}if(y===p.length)return n(m,D),O&&jt(m,y),S;if(D===null){for(;y<p.length;y++)D=v(m,p[y],g),D!==null&&(u=l(D,u,y),P===null?S=D:P.sibling=D,P=D);return O&&jt(m,y),S}for(D=s(m,D);y<p.length;y++)z=N(D,m,y,p[y],g),z!==null&&(e&&z.alternate!==null&&D.delete(z.key===null?y:z.key),u=l(z,u,y),P===null?S=z:P.sibling=z,P=z);return e&&D.forEach(function(ve){return t(m,ve)}),O&&jt(m,y),S}function k(m,u,p,g){var S=pn(p);if(typeof S!="function")throw Error(j(150));if(p=S.call(p),p==null)throw Error(j(151));for(var P=S=null,D=u,y=u=0,z=null,F=p.next();D!==null&&!F.done;y++,F=p.next()){D.index>y?(z=D,D=null):z=D.sibling;var ve=f(m,D,F.value,g);if(ve===null){D===null&&(D=z);break}e&&D&&ve.alternate===null&&t(m,D),u=l(ve,u,y),P===null?S=ve:P.sibling=ve,P=ve,D=z}if(F.done)return n(m,D),O&&jt(m,y),S;if(D===null){for(;!F.done;y++,F=p.next())F=v(m,F.value,g),F!==null&&(u=l(F,u,y),P===null?S=F:P.sibling=F,P=F);return O&&jt(m,y),S}for(D=s(m,D);!F.done;y++,F=p.next())F=N(D,m,y,F.value,g),F!==null&&(e&&F.alternate!==null&&D.delete(F.key===null?y:F.key),u=l(F,u,y),P===null?S=F:P.sibling=F,P=F);return e&&D.forEach(function(un){return t(m,un)}),O&&jt(m,y),S}function I(m,u,p,g){if(typeof p=="object"&&p!==null&&p.type===zt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case sr:e:{for(var S=p.key,P=u;P!==null;){if(P.key===S){if(S=p.type,S===zt){if(P.tag===7){n(m,P.sibling),u=i(P,p.props.children),u.return=m,m=u;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&No(S)===P.type){n(m,P.sibling),u=i(P,p.props),u.ref=vn(m,P,p),u.return=m,m=u;break e}n(m,P);break}else t(m,P);P=P.sibling}p.type===zt?(u=Et(p.props.children,m.mode,g,p.key),u.return=m,m=u):(g=Tr(p.type,p.key,p.props,null,m.mode,g),g.ref=vn(m,u,p),g.return=m,m=g)}return o(m);case At:e:{for(P=p.key;u!==null;){if(u.key===P)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(m,u.sibling),u=i(u,p.children||[]),u.return=m,m=u;break e}else{n(m,u);break}else t(m,u);u=u.sibling}u=Qs(p,m.mode,g),u.return=m,m=u}return o(m);case qe:return P=p._init,I(m,u,P(p._payload),g)}if(Nn(p))return x(m,u,p,g);if(pn(p))return k(m,u,p,g);fr(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(m,u.sibling),u=i(u,p),u.return=m,m=u):(n(m,u),u=Ws(p,m.mode,g),u.return=m,m=u),o(m)):n(m,u)}return I}var nn=lc(!0),oc=lc(!1),Wr=gt(null),Qr=null,$t=null,dl=null;function pl(){dl=$t=Qr=null}function ml(e){var t=Wr.current;B(Wr),e._currentValue=t}function Si(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Gt(e,t){Qr=e,dl=$t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(dl!==e)if(e={context:e,memoizedValue:t,next:null},$t===null){if(Qr===null)throw Error(j(308));$t=e,Qr.dependencies={lanes:0,firstContext:e}}else $t=$t.next=e;return t}var St=null;function hl(e){St===null?St=[e]:St.push(e)}function ac(e,t,n,s){var i=t.interleaved;return i===null?(n.next=n,hl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ye(e,s)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,A&2){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,Ye(e,n)}return i=s.interleaved,i===null?(t.next=t,hl(s)):(t.next=i.next,i.next=t),s.interleaved=t,Ye(e,n)}function wr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,el(e,n)}}function ko(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jr(e,t,n,s){var i=e.updateQueue;et=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var a=c,d=a.next;a.next=null,o===null?l=d:o.next=d,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==o&&(c===null?h.firstBaseUpdate=d:c.next=d,h.lastBaseUpdate=a))}if(l!==null){var v=i.baseState;o=0,h=d=a=null,c=l;do{var f=c.lane,N=c.eventTime;if((s&f)===f){h!==null&&(h=h.next={eventTime:N,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var x=e,k=c;switch(f=t,N=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){v=x.call(N,v,f);break e}v=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,f=typeof x=="function"?x.call(N,v,f):x,f==null)break e;v=$({},v,f);break e;case 2:et=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[c]:f.push(c))}else N={eventTime:N,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(d=h=N,a=v):h=h.next=N,o|=f;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;f=c,c=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(h===null&&(a=v),i.baseState=a,i.firstBaseUpdate=d,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);bt|=o,e.lanes=o,e.memoizedState=v}}function So(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],i=s.callback;if(i!==null){if(s.callback=null,s=n,typeof i!="function")throw Error(j(191,i));i.call(s)}}}var er={},Oe=gt(er),$n=gt(er),Wn=gt(er);function Ct(e){if(e===er)throw Error(j(174));return e}function gl(e,t){switch(_(Wn,t),_($n,e),_(Oe,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ri(t,e)}B(Oe),_(Oe,t)}function rn(){B(Oe),B($n),B(Wn)}function uc(e){Ct(Wn.current);var t=Ct(Oe.current),n=ri(t,e.type);t!==n&&(_($n,e),_(Oe,n))}function vl(e){$n.current===e&&(B(Oe),B($n))}var H=gt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Us=[];function xl(){for(var e=0;e<Us.length;e++)Us[e]._workInProgressVersionPrimary=null;Us.length=0}var Er=Ge.ReactCurrentDispatcher,Bs=Ge.ReactCurrentBatchConfig,Rt=0,V=null,Y=null,Z=null,Yr=!1,Rn=!1,Qn=0,np=0;function se(){throw Error(j(321))}function yl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ze(e[n],t[n]))return!1;return!0}function jl(e,t,n,s,i,l){if(Rt=l,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?lp:op,e=n(s,i),Rn){l=0;do{if(Rn=!1,Qn=0,25<=l)throw Error(j(301));l+=1,Z=Y=null,t.updateQueue=null,Er.current=ap,e=n(s,i)}while(Rn)}if(Er.current=Kr,t=Y!==null&&Y.next!==null,Rt=0,Z=Y=V=null,Yr=!1,t)throw Error(j(300));return e}function Nl(){var e=Qn!==0;return Qn=0,e}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?V.memoizedState=Z=e:Z=Z.next=e,Z}function Re(){if(Y===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=Z===null?V.memoizedState:Z.next;if(t!==null)Z=t,Y=e;else{if(e===null)throw Error(j(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?V.memoizedState=Z=e:Z=Z.next=e}return Z}function Jn(e,t){return typeof t=="function"?t(e):t}function Os(e){var t=Re(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var s=Y,i=s.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}s.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,s=s.baseState;var c=o=null,a=null,d=l;do{var h=d.lane;if((Rt&h)===h)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),s=d.hasEagerState?d.eagerState:e(s,d.action);else{var v={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(c=a=v,o=s):a=a.next=v,V.lanes|=h,bt|=h}d=d.next}while(d!==null&&d!==l);a===null?o=s:a.next=c,ze(s,t.memoizedState)||(me=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=a,n.lastRenderedState=s}if(e=n.interleaved,e!==null){i=e;do l=i.lane,V.lanes|=l,bt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hs(e){var t=Re(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var s=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);ze(l,t.memoizedState)||(me=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,s]}function dc(){}function pc(e,t){var n=V,s=Re(),i=t(),l=!ze(s.memoizedState,i);if(l&&(s.memoizedState=i,me=!0),s=s.queue,kl(fc.bind(null,n,s,e),[e]),s.getSnapshot!==t||l||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Xn(9,hc.bind(null,n,s,i,t),void 0,null),q===null)throw Error(j(349));Rt&30||mc(n,t,i)}return i}function mc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hc(e,t,n,s){t.value=n,t.getSnapshot=s,gc(t)&&vc(e)}function fc(e,t,n){return n(function(){gc(t)&&vc(e)})}function gc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ze(e,n)}catch{return!0}}function vc(e){var t=Ye(e,1);t!==null&&Ae(t,e,1,-1)}function Co(e){var t=_e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=ip.bind(null,V,e),[t.memoizedState,e]}function Xn(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function xc(){return Re().memoizedState}function Pr(e,t,n,s){var i=_e();V.flags|=e,i.memoizedState=Xn(1|t,n,void 0,s===void 0?null:s)}function cs(e,t,n,s){var i=Re();s=s===void 0?null:s;var l=void 0;if(Y!==null){var o=Y.memoizedState;if(l=o.destroy,s!==null&&yl(s,o.deps)){i.memoizedState=Xn(t,n,l,s);return}}V.flags|=e,i.memoizedState=Xn(1|t,n,l,s)}function wo(e,t){return Pr(8390656,8,e,t)}function kl(e,t){return cs(2048,8,e,t)}function yc(e,t){return cs(4,2,e,t)}function jc(e,t){return cs(4,4,e,t)}function Nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kc(e,t,n){return n=n!=null?n.concat([e]):null,cs(4,4,Nc.bind(null,t,e),n)}function Sl(){}function Sc(e,t){var n=Re();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&yl(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Cc(e,t){var n=Re();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&yl(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function wc(e,t,n){return Rt&21?(ze(n,t)||(n=ba(),V.lanes|=n,bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function rp(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var s=Bs.transition;Bs.transition={};try{e(!1),t()}finally{M=n,Bs.transition=s}}function Ec(){return Re().memoizedState}function sp(e,t,n){var s=dt(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Pc(e))Dc(t,n);else if(n=ac(e,t,n,s),n!==null){var i=ce();Ae(n,e,s,i),Rc(n,t,s)}}function ip(e,t,n){var s=dt(e),i={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pc(e))Dc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,c=l(o,n);if(i.hasEagerState=!0,i.eagerState=c,ze(c,o)){var a=t.interleaved;a===null?(i.next=i,hl(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=ac(e,t,i,s),n!==null&&(i=ce(),Ae(n,e,s,i),Rc(n,t,s))}}function Pc(e){var t=e.alternate;return e===V||t!==null&&t===V}function Dc(e,t){Rn=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rc(e,t,n){if(n&4194240){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,el(e,n)}}var Kr={readContext:De,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},lp={readContext:De,useCallback:function(e,t){return _e().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:wo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pr(4194308,4,Nc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pr(4,2,e,t)},useMemo:function(e,t){var n=_e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=_e();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=sp.bind(null,V,e),[s.memoizedState,e]},useRef:function(e){var t=_e();return e={current:e},t.memoizedState=e},useState:Co,useDebugValue:Sl,useDeferredValue:function(e){return _e().memoizedState=e},useTransition:function(){var e=Co(!1),t=e[0];return e=rp.bind(null,e[1]),_e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=V,i=_e();if(O){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),q===null)throw Error(j(349));Rt&30||mc(s,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,wo(fc.bind(null,s,l,e),[e]),s.flags|=2048,Xn(9,hc.bind(null,s,l,n,t),void 0,null),n},useId:function(){var e=_e(),t=q.identifierPrefix;if(O){var n=We,s=$e;n=(s&~(1<<32-Ie(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=np++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},op={readContext:De,useCallback:Sc,useContext:De,useEffect:kl,useImperativeHandle:kc,useInsertionEffect:yc,useLayoutEffect:jc,useMemo:Cc,useReducer:Os,useRef:xc,useState:function(){return Os(Jn)},useDebugValue:Sl,useDeferredValue:function(e){var t=Re();return wc(t,Y.memoizedState,e)},useTransition:function(){var e=Os(Jn)[0],t=Re().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:pc,useId:Ec,unstable_isNewReconciler:!1},ap={readContext:De,useCallback:Sc,useContext:De,useEffect:kl,useImperativeHandle:kc,useInsertionEffect:yc,useLayoutEffect:jc,useMemo:Cc,useReducer:Hs,useRef:xc,useState:function(){return Hs(Jn)},useDebugValue:Sl,useDeferredValue:function(e){var t=Re();return Y===null?t.memoizedState=e:wc(t,Y.memoizedState,e)},useTransition:function(){var e=Hs(Jn)[0],t=Re().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:pc,useId:Ec,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ci(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var us={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=ce(),i=dt(e),l=Qe(s,i);l.payload=t,n!=null&&(l.callback=n),t=ct(e,l,i),t!==null&&(Ae(t,e,i,s),wr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=ce(),i=dt(e),l=Qe(s,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ct(e,l,i),t!==null&&(Ae(t,e,i,s),wr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),s=dt(e),i=Qe(n,s);i.tag=2,t!=null&&(i.callback=t),t=ct(e,i,s),t!==null&&(Ae(t,e,s,n),wr(t,e,s))}};function Eo(e,t,n,s,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,l,o):t.prototype&&t.prototype.isPureReactComponent?!Bn(n,s)||!Bn(i,l):!0}function bc(e,t,n){var s=!1,i=ht,l=t.contextType;return typeof l=="object"&&l!==null?l=De(l):(i=fe(t)?Pt:oe.current,s=t.contextTypes,l=(s=s!=null)?en(e,i):ht),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=us,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Po(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&us.enqueueReplaceState(t,t.state,null)}function wi(e,t,n,s){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},fl(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=De(l):(l=fe(t)?Pt:oe.current,i.context=en(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ci(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&us.enqueueReplaceState(i,i.state,null),Jr(e,n,i,s),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sn(e,t){try{var n="",s=t;do n+=zu(s),s=s.return;while(s);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Vs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ei(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cp=typeof WeakMap=="function"?WeakMap:Map;function Tc(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){Zr||(Zr=!0,zi=s),Ei(e,t)},n}function Fc(e,t,n){n=Qe(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;n.payload=function(){return s(i)},n.callback=function(){Ei(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ei(e,t),typeof s!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Do(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new cp;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(n)||(i.add(n),e=Sp.bind(null,e,t,n),t.then(e,e))}function Ro(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bo(e,t,n,s,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var up=Ge.ReactCurrentOwner,me=!1;function ae(e,t,n,s){t.child=e===null?oc(t,null,n,s):nn(t,e.child,n,s)}function To(e,t,n,s,i){n=n.render;var l=t.ref;return Gt(t,i),s=jl(e,t,n,s,l,i),n=Nl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ke(e,t,i)):(O&&n&&al(t),t.flags|=1,ae(e,t,s,i),t.child)}function Fo(e,t,n,s,i){if(e===null){var l=n.type;return typeof l=="function"&&!Tl(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Lc(e,t,l,s,i)):(e=Tr(n.type,null,s,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Bn,n(o,s)&&e.ref===t.ref)return Ke(e,t,i)}return t.flags|=1,e=pt(l,s),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,s,i){if(e!==null){var l=e.memoizedProps;if(Bn(l,s)&&e.ref===t.ref)if(me=!1,t.pendingProps=s=l,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Ke(e,t,i)}return Pi(e,t,n,s,i)}function Ic(e,t,n){var s=t.pendingProps,i=s.children,l=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(Qt,xe),xe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(Qt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=l!==null?l.baseLanes:n,_(Qt,xe),xe|=s}else l!==null?(s=l.baseLanes|n,t.memoizedState=null):s=n,_(Qt,xe),xe|=s;return ae(e,t,i,n),t.child}function Ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pi(e,t,n,s,i){var l=fe(n)?Pt:oe.current;return l=en(t,l),Gt(t,i),n=jl(e,t,n,s,l,i),s=Nl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ke(e,t,i)):(O&&s&&al(t),t.flags|=1,ae(e,t,n,i),t.child)}function Lo(e,t,n,s,i){if(fe(n)){var l=!0;Hr(t)}else l=!1;if(Gt(t,i),t.stateNode===null)Dr(e,t),bc(t,n,s),wi(t,n,s,i),s=!0;else if(e===null){var o=t.stateNode,c=t.memoizedProps;o.props=c;var a=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=De(d):(d=fe(n)?Pt:oe.current,d=en(t,d));var h=n.getDerivedStateFromProps,v=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==s||a!==d)&&Po(t,o,s,d),et=!1;var f=t.memoizedState;o.state=f,Jr(t,s,o,i),a=t.memoizedState,c!==s||f!==a||he.current||et?(typeof h=="function"&&(Ci(t,n,h,s),a=t.memoizedState),(c=et||Eo(t,n,c,s,f,a,d))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=a),o.props=s,o.state=a,o.context=d,s=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,cc(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:Te(t.type,c),o.props=d,v=t.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=De(a):(a=fe(n)?Pt:oe.current,a=en(t,a));var N=n.getDerivedStateFromProps;(h=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==v||f!==a)&&Po(t,o,s,a),et=!1,f=t.memoizedState,o.state=f,Jr(t,s,o,i);var x=t.memoizedState;c!==v||f!==x||he.current||et?(typeof N=="function"&&(Ci(t,n,N,s),x=t.memoizedState),(d=et||Eo(t,n,d,s,f,x,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,x,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,x,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=x),o.props=s,o.state=x,o.context=a,s=d):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),s=!1)}return Di(e,t,n,s,l,i)}function Di(e,t,n,s,i,l){Ac(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return i&&xo(t,n,!1),Ke(e,t,l);s=t.stateNode,up.current=t;var c=o&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=nn(t,e.child,null,l),t.child=nn(t,null,c,l)):ae(e,t,c,l),t.memoizedState=s.state,i&&xo(t,n,!0),t.child}function zc(e){var t=e.stateNode;t.pendingContext?vo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vo(e,t.context,!1),gl(e,t.containerInfo)}function Io(e,t,n,s,i){return tn(),ul(i),t.flags|=256,ae(e,t,n,s),t.child}var Ri={dehydrated:null,treeContext:null,retryLane:0};function bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mc(e,t,n){var s=t.pendingProps,i=H.current,l=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_(H,i&1),e===null)return ki(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,l?(s=t.mode,l=t.child,o={mode:"hidden",children:o},!(s&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=ms(o,s,0,null),e=Et(e,s,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=bi(n),t.memoizedState=Ri,e):Cl(t,o));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return dp(e,t,o,s,c,i,n);if(l){l=s.fallback,o=t.mode,i=e.child,c=i.sibling;var a={mode:"hidden",children:s.children};return!(o&1)&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=a,t.deletions=null):(s=pt(i,a),s.subtreeFlags=i.subtreeFlags&14680064),c!==null?l=pt(c,l):(l=Et(l,o,n,null),l.flags|=2),l.return=t,s.return=t,s.sibling=l,t.child=s,s=l,l=t.child,o=e.child.memoizedState,o=o===null?bi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Ri,s}return l=e.child,e=l.sibling,s=pt(l,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function Cl(e,t){return t=ms({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,s){return s!==null&&ul(s),nn(t,e.child,null,n),e=Cl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dp(e,t,n,s,i,l,o){if(n)return t.flags&256?(t.flags&=-257,s=Vs(Error(j(422))),gr(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=s.fallback,i=t.mode,s=ms({mode:"visible",children:s.children},i,0,null),l=Et(l,i,o,null),l.flags|=2,s.return=t,l.return=t,s.sibling=l,t.child=s,t.mode&1&&nn(t,e.child,null,o),t.child.memoizedState=bi(o),t.memoizedState=Ri,l);if(!(t.mode&1))return gr(e,t,o,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var c=s.dgst;return s=c,l=Error(j(419)),s=Vs(l,s,void 0),gr(e,t,o,s)}if(c=(o&e.childLanes)!==0,me||c){if(s=q,s!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(s.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ye(e,i),Ae(s,e,i,-1))}return bl(),s=Vs(Error(j(421))),gr(e,t,o,s)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Cp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ye=at(i.nextSibling),je=t,O=!0,Le=null,e!==null&&(Ce[we++]=$e,Ce[we++]=We,Ce[we++]=Dt,$e=e.id,We=e.overflow,Dt=t),t=Cl(t,s.children),t.flags|=4096,t)}function Ao(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Si(e.return,t,n)}function $s(e,t,n,s,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=s,l.tail=n,l.tailMode=i)}function _c(e,t,n){var s=t.pendingProps,i=s.revealOrder,l=s.tail;if(ae(e,t,s.children,n),s=H.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ao(e,n,t);else if(e.tag===19)Ao(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(_(H,s),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$s(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$s(t,!0,n,null,l);break;case"together":$s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pp(e,t,n){switch(t.tag){case 3:zc(t),tn();break;case 5:uc(t);break;case 1:fe(t.type)&&Hr(t);break;case 4:gl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;_(Wr,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(_(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Mc(e,t,n):(_(H,H.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);_(H,H.current&1);break;case 19:if(s=(n&t.childLanes)!==0,e.flags&128){if(s)return _c(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_(H,H.current),s)break;return null;case 22:case 23:return t.lanes=0,Ic(e,t,n)}return Ke(e,t,n)}var Uc,Ti,Bc,Oc;Uc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ti=function(){};Bc=function(e,t,n,s){var i=e.memoizedProps;if(i!==s){e=t.stateNode,Ct(Oe.current);var l=null;switch(n){case"input":i=qs(e,i),s=qs(e,s),l=[];break;case"select":i=$({},i,{value:void 0}),s=$({},s,{value:void 0}),l=[];break;case"textarea":i=ni(e,i),s=ni(e,s),l=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Br)}si(n,s);var o;n=null;for(d in i)if(!s.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var c=i[d];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ln.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in s){var a=s[d];if(c=i!=null?i[d]:void 0,s.hasOwnProperty(d)&&a!==c&&(a!=null||c!=null))if(d==="style")if(c){for(o in c)!c.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&c[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,c=c?c.__html:void 0,a!=null&&c!==a&&(l=l||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&U("scroll",e),l||c===a||(l=[])):(l=l||[]).push(d,a))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Oc=function(e,t,n,s){n!==s&&(t.flags|=4)};function xn(e,t){if(!O)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function mp(e,t,n){var s=t.pendingProps;switch(cl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return fe(t.type)&&Or(),ie(t),null;case 3:return s=t.stateNode,rn(),B(he),B(oe),xl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Ui(Le),Le=null))),Ti(e,t),ie(t),null;case 5:vl(t);var i=Ct(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Bc(e,t,n,s,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(j(166));return ie(t),null}if(e=Ct(Oe.current),hr(t)){s=t.stateNode,n=t.type;var l=t.memoizedProps;switch(s[Ue]=t,s[Vn]=l,e=(t.mode&1)!==0,n){case"dialog":U("cancel",s),U("close",s);break;case"iframe":case"object":case"embed":U("load",s);break;case"video":case"audio":for(i=0;i<Sn.length;i++)U(Sn[i],s);break;case"source":U("error",s);break;case"img":case"image":case"link":U("error",s),U("load",s);break;case"details":U("toggle",s);break;case"input":Vl(s,l),U("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!l.multiple},U("invalid",s);break;case"textarea":Wl(s,l),U("invalid",s)}si(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="children"?typeof c=="string"?s.textContent!==c&&(l.suppressHydrationWarning!==!0&&mr(s.textContent,c,e),i=["children",c]):typeof c=="number"&&s.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&mr(s.textContent,c,e),i=["children",""+c]):Ln.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&U("scroll",s)}switch(n){case"input":ir(s),$l(s,l,!0);break;case"textarea":ir(s),Ql(s);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(s.onclick=Br)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(n,{is:s.is}):(e=o.createElement(n),n==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,n),e[Ue]=t,e[Vn]=s,Uc(e,t,!1,!1),t.stateNode=e;e:{switch(o=ii(n,s),n){case"dialog":U("cancel",e),U("close",e),i=s;break;case"iframe":case"object":case"embed":U("load",e),i=s;break;case"video":case"audio":for(i=0;i<Sn.length;i++)U(Sn[i],e);i=s;break;case"source":U("error",e),i=s;break;case"img":case"image":case"link":U("error",e),U("load",e),i=s;break;case"details":U("toggle",e),i=s;break;case"input":Vl(e,s),i=qs(e,s),U("invalid",e);break;case"option":i=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},i=$({},s,{value:void 0}),U("invalid",e);break;case"textarea":Wl(e,s),i=ni(e,s),U("invalid",e);break;default:i=s}si(n,i),c=i;for(l in c)if(c.hasOwnProperty(l)){var a=c[l];l==="style"?xa(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ga(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&In(e,a):typeof a=="number"&&In(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ln.hasOwnProperty(l)?a!=null&&l==="onScroll"&&U("scroll",e):a!=null&&Xi(e,l,a,o))}switch(n){case"input":ir(e),$l(e,s,!1);break;case"textarea":ir(e),Ql(e);break;case"option":s.value!=null&&e.setAttribute("value",""+mt(s.value));break;case"select":e.multiple=!!s.multiple,l=s.value,l!=null?Jt(e,!!s.multiple,l,!1):s.defaultValue!=null&&Jt(e,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Br)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Oc(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(j(166));if(n=Ct(Wn.current),Ct(Oe.current),hr(t)){if(s=t.stateNode,n=t.memoizedProps,s[Ue]=t,(l=s.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:mr(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mr(s.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[Ue]=t,t.stateNode=s}return ie(t),null;case 13:if(B(H),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&ye!==null&&t.mode&1&&!(t.flags&128))ic(),tn(),t.flags|=98560,l=!1;else if(l=hr(t),s!==null&&s.dehydrated!==null){if(e===null){if(!l)throw Error(j(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(j(317));l[Ue]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),l=!1}else Le!==null&&(Ui(Le),Le=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?K===0&&(K=3):bl())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return rn(),Ti(e,t),e===null&&On(t.stateNode.containerInfo),ie(t),null;case 10:return ml(t.type._context),ie(t),null;case 17:return fe(t.type)&&Or(),ie(t),null;case 19:if(B(H),l=t.memoizedState,l===null)return ie(t),null;if(s=(t.flags&128)!==0,o=l.rendering,o===null)if(s)xn(l,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xr(e),o!==null){for(t.flags|=128,xn(l,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)l=n,e=s,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _(H,H.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>ln&&(t.flags|=128,s=!0,xn(l,!1),t.lanes=4194304)}else{if(!s)if(e=Xr(o),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!O)return ie(t),null}else 2*J()-l.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,s=!0,xn(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=H.current,_(H,s?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Rl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?xe&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function hp(e,t){switch(cl(t),t.tag){case 1:return fe(t.type)&&Or(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),B(he),B(oe),xl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vl(t),null;case 13:if(B(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(H),null;case 4:return rn(),null;case 10:return ml(t.type._context),null;case 22:case 23:return Rl(),null;case 24:return null;default:return null}}var vr=!1,le=!1,fp=typeof WeakSet=="function"?WeakSet:Set,C=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){W(e,t,s)}else n.current=null}function Fi(e,t,n){try{n()}catch(s){W(e,t,s)}}var zo=!1;function gp(e,t){if(fi=Mr,e=Qa(),ol(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var i=s.anchorOffset,l=s.focusNode;s=s.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,c=-1,a=-1,d=0,h=0,v=e,f=null;t:for(;;){for(var N;v!==n||i!==0&&v.nodeType!==3||(c=o+i),v!==l||s!==0&&v.nodeType!==3||(a=o+s),v.nodeType===3&&(o+=v.nodeValue.length),(N=v.firstChild)!==null;)f=v,v=N;for(;;){if(v===e)break t;if(f===n&&++d===i&&(c=o),f===l&&++h===s&&(a=o),(N=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=N}n=c===-1||a===-1?null:{start:c,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(gi={focusedElem:e,selectionRange:n},Mr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,I=x.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?k:Te(t.type,k),I);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(g){W(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return x=zo,zo=!1,x}function bn(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Fi(t,n,l)}i=i.next}while(i!==s)}}function ds(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function Li(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hc(e){var t=e.alternate;t!==null&&(e.alternate=null,Hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Vn],delete t[yi],delete t[Zd],delete t[qd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vc(e){return e.tag===5||e.tag===3||e.tag===4}function Mo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ii(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Br));else if(s!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}function Ai(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ai(e,t,n),e=e.sibling;e!==null;)Ai(e,t,n),e=e.sibling}var ee=null,Fe=!1;function Ze(e,t,n){for(n=n.child;n!==null;)$c(e,t,n),n=n.sibling}function $c(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(rs,n)}catch{}switch(n.tag){case 5:le||Wt(n,t);case 6:var s=ee,i=Fe;ee=null,Ze(e,t,n),ee=s,Fe=i,ee!==null&&(Fe?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Fe?(e=ee,n=n.stateNode,e.nodeType===8?Ms(e.parentNode,n):e.nodeType===1&&Ms(e,n),_n(e)):Ms(ee,n.stateNode));break;case 4:s=ee,i=Fe,ee=n.stateNode.containerInfo,Fe=!0,Ze(e,t,n),ee=s,Fe=i;break;case 0:case 11:case 14:case 15:if(!le&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Fi(n,t,o),i=i.next}while(i!==s)}Ze(e,t,n);break;case 1:if(!le&&(Wt(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(c){W(n,t,c)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(le=(s=le)||n.memoizedState!==null,Ze(e,t,n),le=s):Ze(e,t,n);break;default:Ze(e,t,n)}}function _o(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fp),t.forEach(function(s){var i=wp.bind(null,e,s);n.has(s)||(n.add(s),s.then(i,i))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var i=n[s];try{var l=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 5:ee=c.stateNode,Fe=!1;break e;case 3:ee=c.stateNode.containerInfo,Fe=!0;break e;case 4:ee=c.stateNode.containerInfo,Fe=!0;break e}c=c.return}if(ee===null)throw Error(j(160));$c(l,o,i),ee=null,Fe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(d){W(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wc(t,e),t=t.sibling}function Wc(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),Me(e),s&4){try{bn(3,e,e.return),ds(3,e)}catch(k){W(e,e.return,k)}try{bn(5,e,e.return)}catch(k){W(e,e.return,k)}}break;case 1:be(t,e),Me(e),s&512&&n!==null&&Wt(n,n.return);break;case 5:if(be(t,e),Me(e),s&512&&n!==null&&Wt(n,n.return),e.flags&32){var i=e.stateNode;try{In(i,"")}catch(k){W(e,e.return,k)}}if(s&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,c=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&ma(i,l),ii(c,o);var d=ii(c,l);for(o=0;o<a.length;o+=2){var h=a[o],v=a[o+1];h==="style"?xa(i,v):h==="dangerouslySetInnerHTML"?ga(i,v):h==="children"?In(i,v):Xi(i,h,v,d)}switch(c){case"input":ei(i,l);break;case"textarea":ha(i,l);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var N=l.value;N!=null?Jt(i,!!l.multiple,N,!1):f!==!!l.multiple&&(l.defaultValue!=null?Jt(i,!!l.multiple,l.defaultValue,!0):Jt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Vn]=l}catch(k){W(e,e.return,k)}}break;case 6:if(be(t,e),Me(e),s&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(k){W(e,e.return,k)}}break;case 3:if(be(t,e),Me(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{_n(t.containerInfo)}catch(k){W(e,e.return,k)}break;case 4:be(t,e),Me(e);break;case 13:be(t,e),Me(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Pl=J())),s&4&&_o(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||h,be(t,e),le=d):be(t,e),Me(e),s&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(v=C=h;C!==null;){switch(f=C,N=f.child,f.tag){case 0:case 11:case 14:case 15:bn(4,f,f.return);break;case 1:Wt(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){s=f,n=f.return;try{t=s,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){W(s,n,k)}}break;case 5:Wt(f,f.return);break;case 22:if(f.memoizedState!==null){Bo(v);continue}}N!==null?(N.return=f,C=N):Bo(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{i=v.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=v.stateNode,a=v.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,c.style.display=va("display",o))}catch(k){W(e,e.return,k)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(k){W(e,e.return,k)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:be(t,e),Me(e),s&4&&_o(e);break;case 21:break;default:be(t,e),Me(e)}}function Me(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vc(n)){var s=n;break e}n=n.return}throw Error(j(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(In(i,""),s.flags&=-33);var l=Mo(e);Ai(e,l,i);break;case 3:case 4:var o=s.stateNode.containerInfo,c=Mo(e);Ii(e,c,o);break;default:throw Error(j(161))}}catch(a){W(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vp(e,t,n){C=e,Qc(e)}function Qc(e,t,n){for(var s=(e.mode&1)!==0;C!==null;){var i=C,l=i.child;if(i.tag===22&&s){var o=i.memoizedState!==null||vr;if(!o){var c=i.alternate,a=c!==null&&c.memoizedState!==null||le;c=vr;var d=le;if(vr=o,(le=a)&&!d)for(C=i;C!==null;)o=C,a=o.child,o.tag===22&&o.memoizedState!==null?Oo(i):a!==null?(a.return=o,C=a):Oo(i);for(;l!==null;)C=l,Qc(l),l=l.sibling;C=i,vr=c,le=d}Uo(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,C=l):Uo(e)}}function Uo(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||ds(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!le)if(n===null)s.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);s.componentDidUpdate(i,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&So(t,l,s);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}So(t,o,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&_n(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}le||t.flags&512&&Li(t)}catch(f){W(t,t.return,f)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Bo(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Oo(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ds(4,t)}catch(a){W(t,n,a)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(a){W(t,i,a)}}var l=t.return;try{Li(t)}catch(a){W(t,l,a)}break;case 5:var o=t.return;try{Li(t)}catch(a){W(t,o,a)}}}catch(a){W(t,t.return,a)}if(t===e){C=null;break}var c=t.sibling;if(c!==null){c.return=t.return,C=c;break}C=t.return}}var xp=Math.ceil,Gr=Ge.ReactCurrentDispatcher,wl=Ge.ReactCurrentOwner,Pe=Ge.ReactCurrentBatchConfig,A=0,q=null,X=null,te=0,xe=0,Qt=gt(0),K=0,Yn=null,bt=0,ps=0,El=0,Tn=null,pe=null,Pl=0,ln=1/0,He=null,Zr=!1,zi=null,ut=null,xr=!1,st=null,qr=0,Fn=0,Mi=null,Rr=-1,br=0;function ce(){return A&6?J():Rr!==-1?Rr:Rr=J()}function dt(e){return e.mode&1?A&2&&te!==0?te&-te:tp.transition!==null?(br===0&&(br=ba()),br):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ma(e.type)),e):1}function Ae(e,t,n,s){if(50<Fn)throw Fn=0,Mi=null,Error(j(185));Gn(e,n,s),(!(A&2)||e!==q)&&(e===q&&(!(A&2)&&(ps|=n),K===4&&nt(e,te)),ge(e,s),n===1&&A===0&&!(t.mode&1)&&(ln=J()+500,as&&vt()))}function ge(e,t){var n=e.callbackNode;td(e,t);var s=zr(e,e===q?te:0);if(s===0)n!==null&&Yl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&Yl(n),t===1)e.tag===0?ep(Ho.bind(null,e)):nc(Ho.bind(null,e)),Kd(function(){!(A&6)&&vt()}),n=null;else{switch(Ta(s)){case 1:n=qi;break;case 4:n=Da;break;case 16:n=Ar;break;case 536870912:n=Ra;break;default:n=Ar}n=eu(n,Jc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jc(e,t){if(Rr=-1,br=0,A&6)throw Error(j(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var s=zr(e,e===q?te:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=es(e,s);else{t=s;var i=A;A|=2;var l=Yc();(q!==e||te!==t)&&(He=null,ln=J()+500,wt(e,t));do try{Np();break}catch(c){Xc(e,c)}while(1);pl(),Gr.current=l,A=i,X!==null?t=0:(q=null,te=0,t=K)}if(t!==0){if(t===2&&(i=ui(e),i!==0&&(s=i,t=_i(e,i))),t===1)throw n=Yn,wt(e,0),nt(e,s),ge(e,J()),n;if(t===6)nt(e,s);else{if(i=e.current.alternate,!(s&30)&&!yp(i)&&(t=es(e,s),t===2&&(l=ui(e),l!==0&&(s=l,t=_i(e,l))),t===1))throw n=Yn,wt(e,0),nt(e,s),ge(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=s,t){case 0:case 1:throw Error(j(345));case 2:Nt(e,pe,He);break;case 3:if(nt(e,s),(s&130023424)===s&&(t=Pl+500-J(),10<t)){if(zr(e,0)!==0)break;if(i=e.suspendedLanes,(i&s)!==s){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xi(Nt.bind(null,e,pe,He),t);break}Nt(e,pe,He);break;case 4:if(nt(e,s),(s&4194240)===s)break;for(t=e.eventTimes,i=-1;0<s;){var o=31-Ie(s);l=1<<o,o=t[o],o>i&&(i=o),s&=~l}if(s=i,s=J()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*xp(s/1960))-s,10<s){e.timeoutHandle=xi(Nt.bind(null,e,pe,He),s);break}Nt(e,pe,He);break;case 5:Nt(e,pe,He);break;default:throw Error(j(329))}}}return ge(e,J()),e.callbackNode===n?Jc.bind(null,e):null}function _i(e,t){var n=Tn;return e.current.memoizedState.isDehydrated&&(wt(e,t).flags|=256),e=es(e,t),e!==2&&(t=pe,pe=n,t!==null&&Ui(t)),e}function Ui(e){pe===null?pe=e:pe.push.apply(pe,e)}function yp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var i=n[s],l=i.getSnapshot;i=i.value;try{if(!ze(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~El,t&=~ps,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),s=1<<n;e[n]=-1,t&=~s}}function Ho(e){if(A&6)throw Error(j(327));Zt();var t=zr(e,0);if(!(t&1))return ge(e,J()),null;var n=es(e,t);if(e.tag!==0&&n===2){var s=ui(e);s!==0&&(t=s,n=_i(e,s))}if(n===1)throw n=Yn,wt(e,0),nt(e,t),ge(e,J()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,pe,He),ge(e,J()),null}function Dl(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(ln=J()+500,as&&vt())}}function Tt(e){st!==null&&st.tag===0&&!(A&6)&&Zt();var t=A;A|=1;var n=Pe.transition,s=M;try{if(Pe.transition=null,M=1,e)return e()}finally{M=s,Pe.transition=n,A=t,!(A&6)&&vt()}}function Rl(){xe=Qt.current,B(Qt)}function wt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yd(n)),X!==null)for(n=X.return;n!==null;){var s=n;switch(cl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Or();break;case 3:rn(),B(he),B(oe),xl();break;case 5:vl(s);break;case 4:rn();break;case 13:B(H);break;case 19:B(H);break;case 10:ml(s.type._context);break;case 22:case 23:Rl()}n=n.return}if(q=e,X=e=pt(e.current,null),te=xe=t,K=0,Yn=null,El=ps=bt=0,pe=Tn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],s=n.interleaved,s!==null){n.interleaved=null;var i=s.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,s.next=o}n.pending=s}St=null}return e}function Xc(e,t){do{var n=X;try{if(pl(),Er.current=Kr,Yr){for(var s=V.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}Yr=!1}if(Rt=0,Z=Y=V=null,Rn=!1,Qn=0,wl.current=null,n===null||n.return===null){K=1,Yn=t,X=null;break}e:{var l=e,o=n.return,c=n,a=t;if(t=te,c.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,h=c,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var N=Ro(o);if(N!==null){N.flags&=-257,bo(N,o,c,l,t),N.mode&1&&Do(l,d,t),t=N,a=d;var x=t.updateQueue;if(x===null){var k=new Set;k.add(a),t.updateQueue=k}else x.add(a);break e}else{if(!(t&1)){Do(l,d,t),bl();break e}a=Error(j(426))}}else if(O&&c.mode&1){var I=Ro(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),bo(I,o,c,l,t),ul(sn(a,c));break e}}l=a=sn(a,c),K!==4&&(K=2),Tn===null?Tn=[l]:Tn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var m=Tc(l,a,t);ko(l,m);break e;case 1:c=a;var u=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var g=Fc(l,c,t);ko(l,g);break e}}l=l.return}while(l!==null)}Gc(n)}catch(S){t=S,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function Yc(){var e=Gr.current;return Gr.current=Kr,e===null?Kr:e}function bl(){(K===0||K===3||K===2)&&(K=4),q===null||!(bt&268435455)&&!(ps&268435455)||nt(q,te)}function es(e,t){var n=A;A|=2;var s=Yc();(q!==e||te!==t)&&(He=null,wt(e,t));do try{jp();break}catch(i){Xc(e,i)}while(1);if(pl(),A=n,Gr.current=s,X!==null)throw Error(j(261));return q=null,te=0,K}function jp(){for(;X!==null;)Kc(X)}function Np(){for(;X!==null&&!Qu();)Kc(X)}function Kc(e){var t=qc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Gc(e):X=t,wl.current=null}function Gc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,X=null;return}}else if(n=mp(n,t,xe),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);K===0&&(K=5)}function Nt(e,t,n){var s=M,i=Pe.transition;try{Pe.transition=null,M=1,kp(e,t,n,s)}finally{Pe.transition=i,M=s}return null}function kp(e,t,n,s){do Zt();while(st!==null);if(A&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(nd(e,l),e===q&&(X=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xr||(xr=!0,eu(Ar,function(){return Zt(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Pe.transition,Pe.transition=null;var o=M;M=1;var c=A;A|=4,wl.current=null,gp(e,n),Wc(n,e),Hd(gi),Mr=!!fi,gi=fi=null,e.current=n,vp(n),Ju(),A=c,M=o,Pe.transition=l}else e.current=n;if(xr&&(xr=!1,st=e,qr=i),l=e.pendingLanes,l===0&&(ut=null),Ku(n.stateNode),ge(e,J()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],s(i.value,{componentStack:i.stack,digest:i.digest});if(Zr)throw Zr=!1,e=zi,zi=null,e;return qr&1&&e.tag!==0&&Zt(),l=e.pendingLanes,l&1?e===Mi?Fn++:(Fn=0,Mi=e):Fn=0,vt(),null}function Zt(){if(st!==null){var e=Ta(qr),t=Pe.transition,n=M;try{if(Pe.transition=null,M=16>e?16:e,st===null)var s=!1;else{if(e=st,st=null,qr=0,A&6)throw Error(j(331));var i=A;for(A|=4,C=e.current;C!==null;){var l=C,o=l.child;if(C.flags&16){var c=l.deletions;if(c!==null){for(var a=0;a<c.length;a++){var d=c[a];for(C=d;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:bn(8,h,l)}var v=h.child;if(v!==null)v.return=h,C=v;else for(;C!==null;){h=C;var f=h.sibling,N=h.return;if(Hc(h),h===d){C=null;break}if(f!==null){f.return=N,C=f;break}C=N}}}var x=l.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var I=k.sibling;k.sibling=null,k=I}while(k!==null)}}C=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,C=o;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:bn(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,C=m;break e}C=l.return}}var u=e.current;for(C=u;C!==null;){o=C;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,C=p;else e:for(o=u;C!==null;){if(c=C,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:ds(9,c)}}catch(S){W(c,c.return,S)}if(c===o){C=null;break e}var g=c.sibling;if(g!==null){g.return=c.return,C=g;break e}C=c.return}}if(A=i,vt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(rs,e)}catch{}s=!0}return s}finally{M=n,Pe.transition=t}}return!1}function Vo(e,t,n){t=sn(n,t),t=Tc(e,t,1),e=ct(e,t,1),t=ce(),e!==null&&(Gn(e,1,t),ge(e,t))}function W(e,t,n){if(e.tag===3)Vo(e,e,n);else for(;t!==null;){if(t.tag===3){Vo(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ut===null||!ut.has(s))){e=sn(n,e),e=Fc(t,e,1),t=ct(t,e,1),e=ce(),t!==null&&(Gn(t,1,e),ge(t,e));break}}t=t.return}}function Sp(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(K===4||K===3&&(te&130023424)===te&&500>J()-Pl?wt(e,0):El|=n),ge(e,t)}function Zc(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=ce();e=Ye(e,t),e!==null&&(Gn(e,t,n),ge(e,n))}function Cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zc(e,n)}function wp(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(j(314))}s!==null&&s.delete(t),Zc(e,n)}var qc;qc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,pp(e,t,n);me=!!(e.flags&131072)}else me=!1,O&&t.flags&1048576&&rc(t,$r,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Dr(e,t),e=t.pendingProps;var i=en(t,oe.current);Gt(t,n),i=jl(null,t,s,e,i,n);var l=Nl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(s)?(l=!0,Hr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fl(t),i.updater=us,t.stateNode=i,i._reactInternals=t,wi(t,s,e,n),t=Di(null,t,s,!0,l,n)):(t.tag=0,O&&l&&al(t),ae(null,t,i,n),t=t.child),t;case 16:s=t.elementType;e:{switch(Dr(e,t),e=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=Pp(s),e=Te(s,e),i){case 0:t=Pi(null,t,s,e,n);break e;case 1:t=Lo(null,t,s,e,n);break e;case 11:t=To(null,t,s,e,n);break e;case 14:t=Fo(null,t,s,Te(s.type,e),n);break e}throw Error(j(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Te(s,i),Pi(e,t,s,i,n);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Te(s,i),Lo(e,t,s,i,n);case 3:e:{if(zc(t),e===null)throw Error(j(387));s=t.pendingProps,l=t.memoizedState,i=l.element,cc(e,t),Jr(t,s,null,n);var o=t.memoizedState;if(s=o.element,l.isDehydrated)if(l={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=sn(Error(j(423)),t),t=Io(e,t,s,n,i);break e}else if(s!==i){i=sn(Error(j(424)),t),t=Io(e,t,s,n,i);break e}else for(ye=at(t.stateNode.containerInfo.firstChild),je=t,O=!0,Le=null,n=oc(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),s===i){t=Ke(e,t,n);break e}ae(e,t,s,n)}t=t.child}return t;case 5:return uc(t),e===null&&ki(t),s=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,vi(s,i)?o=null:l!==null&&vi(s,l)&&(t.flags|=32),Ac(e,t),ae(e,t,o,n),t.child;case 6:return e===null&&ki(t),null;case 13:return Mc(e,t,n);case 4:return gl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=nn(t,null,s,n):ae(e,t,s,n),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Te(s,i),To(e,t,s,i,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,_(Wr,s._currentValue),s._currentValue=o,l!==null)if(ze(l.value,o)){if(l.children===i.children&&!he.current){t=Ke(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){o=l.child;for(var a=c.firstContext;a!==null;){if(a.context===s){if(l.tag===1){a=Qe(-1,n&-n),a.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?a.next=a:(a.next=h.next,h.next=a),d.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Si(l.return,n,t),c.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(j(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Si(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,Gt(t,n),i=De(i),s=s(i),t.flags|=1,ae(e,t,s,n),t.child;case 14:return s=t.type,i=Te(s,t.pendingProps),i=Te(s.type,i),Fo(e,t,s,i,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Te(s,i),Dr(e,t),t.tag=1,fe(s)?(e=!0,Hr(t)):e=!1,Gt(t,n),bc(t,s,i),wi(t,s,i,n),Di(null,t,s,!0,e,n);case 19:return _c(e,t,n);case 22:return Ic(e,t,n)}throw Error(j(156,t.tag))};function eu(e,t){return Pa(e,t)}function Ep(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,s){return new Ep(e,t,n,s)}function Tl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pp(e){if(typeof e=="function")return Tl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ki)return 11;if(e===Gi)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tr(e,t,n,s,i,l){var o=2;if(s=e,typeof e=="function")Tl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case zt:return Et(n.children,i,l,t);case Yi:o=8,i|=8;break;case Ys:return e=Ee(12,n,t,i|2),e.elementType=Ys,e.lanes=l,e;case Ks:return e=Ee(13,n,t,i),e.elementType=Ks,e.lanes=l,e;case Gs:return e=Ee(19,n,t,i),e.elementType=Gs,e.lanes=l,e;case ua:return ms(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case aa:o=10;break e;case ca:o=9;break e;case Ki:o=11;break e;case Gi:o=14;break e;case qe:o=16,s=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,i),t.elementType=e,t.type=s,t.lanes=l,t}function Et(e,t,n,s){return e=Ee(7,e,s,t),e.lanes=n,e}function ms(e,t,n,s){return e=Ee(22,e,s,t),e.elementType=ua,e.lanes=n,e.stateNode={isHidden:!1},e}function Ws(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Qs(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dp(e,t,n,s,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Es(0),this.expirationTimes=Es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Es(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fl(e,t,n,s,i,l,o,c,a){return e=new Dp(e,t,n,c,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ee(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fl(l),e}function Rp(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function tu(e){if(!e)return ht;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(fe(n))return tc(e,n,t)}return t}function nu(e,t,n,s,i,l,o,c,a){return e=Fl(n,s,!0,e,i,l,o,c,a),e.context=tu(null),n=e.current,s=ce(),i=dt(n),l=Qe(s,i),l.callback=t??null,ct(n,l,i),e.current.lanes=i,Gn(e,i,s),ge(e,s),e}function hs(e,t,n,s){var i=t.current,l=ce(),o=dt(i);return n=tu(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(l,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=ct(i,t,o),e!==null&&(Ae(e,i,o,l),wr(e,i,o)),o}function ts(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $o(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ll(e,t){$o(e,t),(e=e.alternate)&&$o(e,t)}function bp(){return null}var ru=typeof reportError=="function"?reportError:function(e){console.error(e)};function Il(e){this._internalRoot=e}fs.prototype.render=Il.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));hs(e,t,null,null)};fs.prototype.unmount=Il.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tt(function(){hs(null,e,null,null)}),t[Xe]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ia();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&za(e)}};function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wo(){}function Tp(e,t,n,s,i){if(i){if(typeof s=="function"){var l=s;s=function(){var d=ts(o);l.call(d)}}var o=nu(t,s,e,0,null,!1,!1,"",Wo);return e._reactRootContainer=o,e[Xe]=o.current,On(e.nodeType===8?e.parentNode:e),Tt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof s=="function"){var c=s;s=function(){var d=ts(a);c.call(d)}}var a=Fl(e,0,!1,null,null,!1,!1,"",Wo);return e._reactRootContainer=a,e[Xe]=a.current,On(e.nodeType===8?e.parentNode:e),Tt(function(){hs(t,a,n,s)}),a}function vs(e,t,n,s,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var c=i;i=function(){var a=ts(o);c.call(a)}}hs(t,o,e,i)}else o=Tp(n,t,e,i,s);return ts(o)}Fa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(el(t,n|1),ge(t,J()),!(A&6)&&(ln=J()+500,vt()))}break;case 13:Tt(function(){var s=Ye(e,1);if(s!==null){var i=ce();Ae(s,e,1,i)}}),Ll(e,1)}};tl=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ce();Ae(t,e,134217728,n)}Ll(e,134217728)}};La=function(e){if(e.tag===13){var t=dt(e),n=Ye(e,t);if(n!==null){var s=ce();Ae(n,e,t,s)}Ll(e,t)}};Ia=function(){return M};Aa=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};oi=function(e,t,n){switch(t){case"input":if(ei(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var i=os(s);if(!i)throw Error(j(90));pa(s),ei(s,i)}}}break;case"textarea":ha(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};Na=Dl;ka=Tt;var Fp={usingClientEntryPoint:!1,Events:[qn,Bt,os,ya,ja,Dl]},yn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lp={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wa(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{rs=yr.inject(Lp),Be=yr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fp;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Al(t))throw Error(j(200));return Rp(e,t,null,n)};ke.createRoot=function(e,t){if(!Al(e))throw Error(j(299));var n=!1,s="",i=ru;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fl(e,1,!1,null,null,n,!1,s,i),e[Xe]=t.current,On(e.nodeType===8?e.parentNode:e),new Il(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=wa(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Tt(e)};ke.hydrate=function(e,t,n){if(!gs(t))throw Error(j(200));return vs(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Al(e))throw Error(j(405));var s=n!=null&&n.hydratedSources||null,i=!1,l="",o=ru;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=nu(t,null,e,1,n??null,i,!1,l,o),e[Xe]=t.current,On(e),s)for(e=0;e<s.length;e++)n=s[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new fs(t)};ke.render=function(e,t,n){if(!gs(t))throw Error(j(200));return vs(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!gs(e))throw Error(j(40));return e._reactRootContainer?(Tt(function(){vs(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};ke.unstable_batchedUpdates=Dl;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!gs(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return vs(e,t,n,!1,s)};ke.version="18.3.1-next-f1338f8080-20240426";function su(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(su)}catch(e){console.error(e)}}su(),sa.exports=ke;var Ip=sa.exports,Qo=Ip;Js.createRoot=Qo.createRoot,Js.hydrateRoot=Qo.hydrateRoot;var Ap={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const zp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mp=(e,t)=>{const n=w.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:o,children:c,...a},d)=>w.createElement("svg",{ref:d,...Ap,width:i,height:i,stroke:s,strokeWidth:o?Number(l)*24/Number(i):l,className:`lucide lucide-${zp(e)}`,...a},[...t.map(([h,v])=>w.createElement(h,v)),...(Array.isArray(c)?c:[c])||[]]));return n.displayName=`${e}`,n};var re=Mp;const _p=re("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Up=re("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),Bp=re("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Op=re("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),Hp=re("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Vp=re("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),$p=re("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),Wp=re("Layers",[["polygon",{points:"12 2 2 7 12 12 22 7 12 2",key:"1b0ttc"}],["polyline",{points:"2 17 12 22 22 17",key:"imjtdl"}],["polyline",{points:"2 12 12 17 22 12",key:"5dexcv"}]]),Bi=re("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),Qp=re("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]),Jp=re("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]),Xp=re("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),Oi=re("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),iu=re("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),Yp=re("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Kp=re("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),Gp=re("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Zp(){const[e,t]=w.useState("home"),n=[{id:"home",label:"Home",icon:$p},{id:"js-fundamentals",label:"JS Fundamentals",icon:Vp},{id:"js-basics",label:"JavaScript Basics",icon:Up},{id:"react-core",label:"React Core",icon:Gp},{id:"components",label:"Components",icon:Wp},{id:"hooks",label:"Hooks",icon:Yp},{id:"data-handling",label:"Data Handling",icon:Bp},{id:"events-interactions",label:"Events & Interactions",icon:Kp},{id:"styling-design",label:"Styling & Design",icon:Jp},{id:"navigation-routing",label:"Navigation & Routing",icon:Qp},{id:"figma-mapping",label:"Figma Mapping",icon:Xp}];return r.jsxs("div",{className:"app",children:[r.jsx("header",{className:"header",children:r.jsxs("div",{className:"container",children:[r.jsxs("h1",{className:"logo",children:[r.jsx(_p,{className:"logo-icon"}),"React JS Cheatsheet"]}),r.jsx("p",{className:"subtitle",children:"For UX Designers with Figma Analogies"})]})}),r.jsx("nav",{className:"sidebar",children:r.jsx("div",{className:"nav-items",children:n.map(s=>{const i=s.icon;return r.jsxs("button",{className:`nav-item ${e===s.id?"active":""}`,onClick:()=>t(s.id),children:[r.jsx(i,{className:"nav-icon"}),r.jsx("span",{children:s.label})]},s.id)})})}),r.jsx("main",{className:"main-content",children:r.jsxs("div",{className:"container",children:[e==="home"&&r.jsx(qp,{}),e==="js-fundamentals"&&r.jsx(em,{}),e==="js-basics"&&r.jsx(tm,{}),e==="react-core"&&r.jsx(nm,{}),e==="components"&&r.jsx(rm,{}),e==="hooks"&&r.jsx(sm,{}),e==="data-handling"&&r.jsx(im,{}),e==="events-interactions"&&r.jsx(lm,{}),e==="styling-design"&&r.jsx(om,{}),e==="navigation-routing"&&r.jsx(am,{}),e==="figma-mapping"&&r.jsx(cm,{})]})})]})}function qp(){return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Welcome to React JS Cheatsheet"}),r.jsx("p",{className:"lead",children:"A comprehensive guide to JavaScript and React concepts, explained through the lens of Figma and design thinking."}),r.jsxs("div",{className:"getting-started",children:[r.jsx("h2",{children:"🎯 How to Use This Cheatsheet"}),r.jsxs("div",{className:"steps",children:[r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"step-number",children:"1"}),r.jsxs("div",{className:"step-content",children:[r.jsx("h4",{children:"Start with JavaScript Basics"}),r.jsx("p",{children:"Understand variables, objects, and functions through Figma analogies"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"step-number",children:"2"}),r.jsxs("div",{className:"step-content",children:[r.jsx("h4",{children:"Learn React Core Concepts"}),r.jsx("p",{children:"Discover how React components work like Figma components"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"step-number",children:"3"}),r.jsxs("div",{className:"step-content",children:[r.jsx("h4",{children:"Master Hooks and State"}),r.jsx("p",{children:"Learn to make your UI interactive like Figma prototypes"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"step-number",children:"4"}),r.jsxs("div",{className:"step-content",children:[r.jsx("h4",{children:"Build Real Projects"}),r.jsx("p",{children:"Apply your knowledge to create interactive prototypes"})]})]})]})]})]})}function em(){w.useState(0);const[e,t]=w.useState({name:"John",age:25}),[n,s]=w.useState(""),[i,l]=w.useState(["red","blue","green"]),[o,c]=w.useState("Sarah"),[a,d]=w.useState("Sarah"),[h,v]=w.useState({name:"Sarah",age:28}),[f,N]=w.useState({name:"Sarah",age:28}),[x,k]=w.useState(["red","blue","green"]),[I,m]=w.useState(["red","blue","green"]),[u,p]=w.useState({name:"Alex",age:25,skills:["JavaScript","CSS"]}),[g,S]=w.useState({name:"John",age:30,role:"Developer"}),[P,D]=w.useState("");return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"JavaScript Fundamentals"}),r.jsx("p",{children:"Core JavaScript concepts with interactive examples"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Variables"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Variables are like text styles in Figma - they store values that you can reuse throughout your design."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`let variableName = value;
const constantName = value;
var oldWay = value;`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Variable declaration and assignment
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
}`,explanation:"Variables store data that can be used and modified throughout your code."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Variable Examples:"}),r.jsxs("div",{className:"result",children:["userName: ",r.jsx("span",{className:"code-output",children:"Sarah"}),r.jsx("br",{}),"userAge: ",r.jsx("span",{className:"code-output",children:"28"}),r.jsx("br",{}),"oldWay: ",r.jsx("span",{className:"code-output",children:"avoid this"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Change Variable:"}),r.jsx("input",{value:n,onChange:y=>s(y.target.value),placeholder:"Enter a new message"}),r.jsxs("div",{className:"result",children:["Message: ",n||"No message set"]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Objects"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Objects are like component properties in Figma - they group related data together."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`const objectName = {
  key1: value1,
  key2: value2
};

objectName.key1;           // Access property
objectName["key2"];        // Bracket notation`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Creating an object
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
}`,explanation:"Objects group related data together using key-value pairs."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsx("div",{className:"demo-controls",children:r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Object:"}),r.jsxs("div",{className:"object-display",children:[r.jsxs("span",{children:["Name: ",e.name]}),r.jsxs("span",{children:["Age: ",e.age]})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>t(y=>({...y,age:y.age+1})),children:"Increment Age"}),r.jsx("button",{onClick:()=>t(y=>({...y,name:"Jane"})),children:"Change Name"})]})]})})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Functions"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Functions are like reusable actions in Figma - they perform specific tasks when called."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`function functionName(parameter) {
  return value;
}

const arrowFunction = (param) => value;

functionName(argument);     // Call function`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Function declaration
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
}`,explanation:"Functions are reusable blocks of code that perform specific tasks."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsx("div",{className:"demo-controls",children:r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Function Examples:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",placeholder:"Enter name",id:"greetInput",defaultValue:"Sarah"}),r.jsx("button",{onClick:()=>{const y=document.getElementById("greetInput").value;alert(`Hello, ${y}!`)},children:"Greet"})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",placeholder:"Width",id:"areaWidth",defaultValue:"5"}),r.jsx("input",{type:"number",placeholder:"Height",id:"areaHeight",defaultValue:"3"}),r.jsx("button",{onClick:()=>{const y=document.getElementById("areaWidth").value,z=document.getElementById("areaHeight").value;alert(`Area: ${y*z}`)},children:"Calculate Area"})]})]})})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Methods"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Methods are like built-in actions in Figma - they're functions that belong to objects."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`string.method();           // String methods
array.method();             // Array methods
object.method();            // Object methods

const obj = {
  methodName() {
    return value;
  }
};`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// String methods
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
}`,explanation:"Methods are functions that belong to objects and can access the object's data."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Array Methods:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>l(y=>[...y,"yellow"]),children:"Push Yellow"}),r.jsx("button",{onClick:()=>l(y=>y.slice(0,-1)),children:"Pop Last"}),r.jsx("button",{onClick:()=>l(y=>["purple",...y]),children:"Unshift Purple"})]}),r.jsxs("div",{className:"result",children:["Colors: [",i.join(", "),"]"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"String Methods:"}),r.jsx("input",{type:"text",placeholder:"Enter text",id:"stringInput",defaultValue:"Hello World"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{const y=document.getElementById("stringInput").value;alert(y.toUpperCase())},children:"To Uppercase"}),r.jsx("button",{onClick:()=>{const y=document.getElementById("stringInput").value;alert(`Length: ${y.length}`)},children:"Get Length"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Classes"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Classes are like component templates in Figma - they define the structure for creating multiple instances."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`class ClassName {
  constructor(parameter) {
    this.property = parameter;
  }
  
  methodName() {
    return value;
  }
}

const instance = new ClassName(value);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Class definition
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
user1.changeRole("Senior Designer");`,explanation:"Classes are templates for creating objects with shared properties and methods."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsx("div",{className:"demo-controls",children:r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Class Instance:"}),r.jsxs("div",{className:"result",children:["Name: ",r.jsx("span",{className:"code-output",children:"Sarah"}),r.jsx("br",{}),"Role: ",r.jsx("span",{className:"code-output",children:"Designer"}),r.jsx("br",{}),"Greeting: ",r.jsx("span",{className:"code-output",children:"Hello, I'm Sarah"})]})]})})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Constructors & Properties"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Constructors are like component creation in Figma - they set up the initial properties when you create a new instance."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`class ClassName {
  constructor(parameter) {
    this.property = parameter;    // Instance property
  }
}

// Property access
instance.property;               // Direct access
instance["property"];           // Bracket notation

// Property assignment
instance.property = newValue;   // Change property value`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Constructor function
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
}`,explanation:"Constructors initialize object properties when creating new instances, while properties store data within objects."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Instance Properties:"}),r.jsxs("div",{className:"result",children:["Name: ",r.jsx("span",{className:"code-output",children:g.name}),r.jsx("br",{}),"Age: ",r.jsx("span",{className:"code-output",children:g.age}),r.jsx("br",{}),"Role: ",r.jsx("span",{className:"code-output",children:g.role}),r.jsx("br",{}),g.skills&&r.jsxs(r.Fragment,{children:["Skills: ",r.jsx("span",{className:"code-output",children:g.skills.join(", ")}),r.jsx("br",{})]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Modify Properties:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:g.name,onChange:y=>S(z=>({...z,name:y.target.value})),placeholder:"Name"}),r.jsx("input",{type:"number",value:g.age,onChange:y=>S(z=>({...z,age:parseInt(y.target.value)||0})),placeholder:"Age"}),r.jsxs("select",{value:g.role,onChange:y=>S(z=>({...z,role:y.target.value})),children:[r.jsx("option",{value:"Developer",children:"Developer"}),r.jsx("option",{value:"Designer",children:"Designer"}),r.jsx("option",{value:"Manager",children:"Manager"}),r.jsx("option",{value:"Tester",children:"Tester"})]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Add Skills:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:P,onChange:y=>D(y.target.value),placeholder:"Enter a skill"}),r.jsx("button",{onClick:()=>{P.trim()&&(S(y=>({...y,skills:[...y.skills||[],P.trim()]})),D(""))},children:"Add Skill"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Property Info:"}),r.jsxs("div",{className:"result",children:[g.name," is a ",g.age,"-year-old ",g.role,g.skills&&g.skills.length>0&&r.jsxs(r.Fragment,{children:[" with skills in ",g.skills.join(", ")]})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Events"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Events are like interactions in Figma prototypes - they respond to user actions."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`element.addEventListener('event', handler);

// In React JSX:
<button onClick={handleClick}>
  Click me
</button>

const handleClick = (event) => {
  // Handle event
};`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Event handling
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
// - mouseover: Mouse hovers over element`,explanation:"Events allow your code to respond to user interactions and system changes."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Event Examples:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>alert("Button clicked!"),children:"Click Event"}),r.jsx("button",{onMouseOver:()=>alert("Mouse over!"),children:"Mouse Over"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Input Event:"}),r.jsx("input",{type:"text",placeholder:"Type something...",onChange:y=>s(y.target.value)}),r.jsxs("div",{className:"result",children:["You typed: ",n]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Parameters & Arguments"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Parameters are like input fields in Figma components - they define what data the function needs."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`function functionName(parameter1, parameter2) {
  // Function body
}

functionName(argument1, argument2);  // Call with arguments

function greet(name = "User") {     // Default parameter
  return "Hello, " + name;
}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Parameters (in function definition)
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
console.log(greet("Sarah")); // "Hello, Sarah"`,explanation:"Parameters define what data a function expects, arguments are the actual values passed when calling the function."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsx("div",{className:"demo-controls",children:r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Calculate Total:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",placeholder:"Price",id:"priceInput",defaultValue:"100"}),r.jsx("input",{type:"number",placeholder:"Tax %",id:"taxInput",defaultValue:"10"}),r.jsx("input",{type:"number",placeholder:"Discount %",id:"discountInput",defaultValue:"20"}),r.jsx("button",{onClick:()=>{const y=parseFloat(document.getElementById("priceInput").value),z=parseFloat(document.getElementById("taxInput").value)/100,F=parseFloat(document.getElementById("discountInput").value)/100,ve=y*(1-F)*(1+z);alert(`Total: $${ve.toFixed(2)}`)},children:"Calculate"})]})]})})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Primitive vs Reference Data Types"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Primitives are like individual text elements in Figma, while references are like components - changing a component affects all instances."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Primitive types (copied by value)
let primitive = "value";
let copy = primitive;        // Independent copy

// Reference types (copied by reference)
let reference = { key: "value" };
let refCopy = reference;     // Same reference

// Creating true copies
let deepCopy = { ...reference };     // Spread operator
let arrayCopy = [...array];          // Array spread`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// PRIMITIVE TYPES (copied by value)
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
let userDeepCopy2 = Object.assign({}, user); // Object.assign`,explanation:"Primitive types are copied by value, while reference types are copied by reference. This affects how data is shared and modified."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Primitive Types (Copied by Value):"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["Original name: ",r.jsx("span",{className:"code-output",children:o})]}),r.jsxs("div",{children:["Copy name: ",r.jsx("span",{className:"code-output",children:a})]})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{d("Jane")},children:'Change Copy to "Jane"'}),r.jsx("button",{onClick:()=>{c("Sarah"),d("Sarah")},children:"Reset Both"})]}),r.jsx("div",{className:"result",style:{fontSize:"12px",color:"#94a3b8"},children:"Notice: Changing the copy doesn't affect the original"})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Reference Types (Copied by Reference):"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["Original user: ",r.jsx("span",{className:"code-output",children:h.name})]}),r.jsxs("div",{children:["Copy user: ",r.jsx("span",{className:"code-output",children:f.name})]})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{N(y=>({...y,name:"Jane"}))},children:'Change Copy to "Jane"'}),r.jsx("button",{onClick:()=>{v({name:"Sarah",age:28}),N({name:"Sarah",age:28})},children:"Reset Both"})]}),r.jsx("div",{className:"result",style:{fontSize:"12px",color:"#ef4444"},children:"Notice: Changing the copy affects the original!"})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Creating True Copies:"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["Original array: [",x.join(", "),"]"]}),r.jsxs("div",{children:["Spread copy: [",I.join(", "),"]"]})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{m(y=>[...y,"yellow"])},children:'Add "yellow" to spread copy'}),r.jsx("button",{onClick:()=>{k(["red","blue","green"]),m(["red","blue","green"])},children:"Reset Arrays"})]}),r.jsx("div",{className:"result",style:{fontSize:"12px",color:"#10b981"},children:"Notice: Spread operator creates independent copies"})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"React State Implications:"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["User state: ",u.name," (age: ",u.age,")"]}),r.jsxs("div",{children:["Skills: [",u.skills.join(", "),"]"]})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{u.age=u.age+1,p(u)},children:"Wrong: Direct Mutation"}),r.jsx("button",{onClick:()=>{p(y=>({...y,age:y.age+1}))},children:"Correct: New Object"}),r.jsx("button",{onClick:()=>{p(y=>({...y,skills:[...y.skills,"React"]}))},children:"Add Skill"})]}),r.jsx("div",{className:"result",style:{fontSize:"12px",color:"#f59e0b"},children:`Try the "Wrong" button - notice React doesn't update! Then try "Correct" buttons.`})]})]})})]})]})]})]})}function tm(){const[e,t]=w.useState(0),[n,s]=w.useState("Designer"),[i,l]=w.useState(!0);w.useState(["red","blue","green"]);const[o,c]=w.useState({name:"Sarah",role:"UX Designer"}),[a,d]=w.useState({showMessage:!1,showCount:!1,hasError:!1,count:5});return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"JavaScript Basics"}),r.jsx("p",{children:"Core JavaScript concepts explained with Figma analogies"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Variables & State"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Variables are like text styles or color styles in Figma - they store reusable values."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// React state
const [state, setState] = useState(initialValue);

// Examples:
const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState('');
const [isVisible, setIsVisible] = useState(true);

// Objects and arrays
const user = { name: 'Sarah', role: 'Designer' };
const colors = ['red', 'blue', 'green'];`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// React state (like dynamic properties in Figma)
const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState('Designer');
const [isVisible, setIsVisible] = useState(true);

// Objects (like component properties in Figma)
const user = { name: 'Sarah', role: 'UX Designer' };

// Arrays (like color palettes in Figma)
const colors = ['red', 'blue', 'green'];`,explanation:"State variables can change over time, just like how you can update text or colors in Figma."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsxs("label",{children:["Counter: ",e]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>t(e-1),children:r.jsx(Bi,{size:16})}),r.jsx("button",{onClick:()=>t(e+1),children:r.jsx(Oi,{size:16})}),r.jsx("button",{onClick:()=>t(0),children:r.jsx(iu,{size:16})})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Name:"}),r.jsx("input",{value:n,onChange:h=>s(h.target.value),placeholder:"Enter name"})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Visibility:"}),r.jsxs("button",{onClick:()=>l(!i),children:[i?r.jsx(Hp,{size:16}):r.jsx(Op,{size:16}),i?" Hide":" Show"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Object:"}),r.jsxs("div",{className:"object-display",children:[r.jsxs("span",{children:["Name: ",o.name]}),r.jsxs("span",{children:["Role: ",o.role]})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Arrow Functions"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Arrow functions are like quick actions in Figma - shorter, more concise ways to perform tasks."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Traditional function
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

const calculateArea = (width, height) => width * height;`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Traditional function (like a full plugin in Figma)
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
console.log(getRandomNumber());    // 0.123...`,explanation:"Arrow functions provide a shorter, more modern syntax for writing functions in JavaScript."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Calculate Area:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",placeholder:"Width",id:"width",defaultValue:"10"}),r.jsx("input",{type:"number",placeholder:"Height",id:"height",defaultValue:"5"}),r.jsx("button",{onClick:()=>{const h=document.getElementById("width").value,v=document.getElementById("height").value;alert("Area: "+h*v)},children:"Calculate"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Double Number:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",placeholder:"Number",id:"doubleInput",defaultValue:"8"}),r.jsx("button",{onClick:()=>{const h=document.getElementById("doubleInput").value;alert(`Double: ${h*2}`)},children:"Double"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Random Number:"}),r.jsx("button",{onClick:()=>alert(`Random: ${Math.random().toFixed(3)}`),children:"Generate"})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Ternary Operator"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Ternary operators are like conditional visibility in Figma - show one thing if true, another if false."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Ternary operator
condition ? valueIfTrue : valueIfFalse

// Examples:
const message = isLoggedIn ? 'Welcome back!' : 'Please log in';
const status = user.isActive ? 'Online' : 'Offline';
const buttonText = isLoading ? 'Loading...' : 'Submit';

// In JSX:
{isVisible ? <Component /> : null}
{user ? <UserProfile /> : <LoginForm />}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Ternary operator: condition ? valueIfTrue : valueIfFalse
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
console.log(status);   // "Online" or "Last seen recently" or "Offline"`,explanation:"Ternary operators provide a concise way to write conditional logic in a single line."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Role:"}),r.jsxs("select",{id:"userRole",defaultValue:"Designer",onChange:h=>{const f=h.target.value==="Designer"?"Show design tools":"Show general tools";document.getElementById("roleMessage").textContent=f},children:[r.jsx("option",{value:"Designer",children:"Designer"}),r.jsx("option",{value:"Developer",children:"Developer"}),r.jsx("option",{value:"Manager",children:"Manager"})]}),r.jsxs("div",{className:"result",children:["Message: ",r.jsx("span",{id:"roleMessage",children:"Show design tools"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Loading State:"}),r.jsx("div",{className:"button-group",children:r.jsx("button",{onClick:()=>{const h=document.getElementById("loadingBtn");h.textContent=h.textContent==="Submit"?"Loading...":"Submit",h.style.backgroundColor=h.textContent==="Loading..."?"#f59e0b":"#3b82f6"},id:"loadingBtn",style:{backgroundColor:"#3b82f6"},children:"Submit"})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Theme Toggle:"}),r.jsx("button",{onClick:()=>{const h=document.getElementById("themeDisplay");h.textContent=h.textContent==="Light"?"Dark":"Light",h.style.color=h.textContent==="Dark"?"#fbbf24":"#1f2937"},children:"Toggle Theme"}),r.jsxs("div",{className:"result",children:["Current: ",r.jsx("span",{id:"themeDisplay",style:{color:"#1f2937"},children:"Light"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Destructuring"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Destructuring is like extracting specific properties from a component in Figma - you pull out just what you need."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Object destructuring (like extracting component properties)
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
console.log(tertiary);  // "green"`,explanation:"Destructuring allows you to extract values from objects and arrays into separate variables."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Output:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"name:"})," ",r.jsx("span",{className:"code-output",children:"Sarah"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"role:"})," ",r.jsx("span",{className:"code-output",children:"UX Designer"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"firstColor:"})," ",r.jsx("span",{className:"code-output",children:"red"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"tertiary:"})," ",r.jsx("span",{className:"code-output",children:"green"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Template Literals"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Template literals are like smart text in Figma - they combine static text with dynamic values."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Template literals (like smart text in Figma)
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

console.log(message2);  // "Hello Sarah, you have 5 tasks"`,explanation:"Template literals provide a cleaner way to create strings with embedded expressions."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Output:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"message2:"})," ",r.jsx("span",{className:"code-output",children:"Hello Sarah, you have 5 tasks"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"status:"})," ",r.jsx("span",{className:"code-output",children:"User is logged in"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Array Methods"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Array methods are like layer operations in Figma - you can filter, transform, and organize your data."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Array methods (like layer operations in Figma)
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
);`,explanation:"Array methods provide powerful ways to manipulate and transform data collections."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Output:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"taskTitles:"})," ",r.jsx("span",{className:"code-output",children:'["Design homepage", "Create wireframes", "Build prototype"]'})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"highPriorityTasks:"})," ",r.jsx("span",{className:"code-output",children:"2 items"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"totalTasks:"})," ",r.jsx("span",{className:"code-output",children:"3"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"completedCount:"})," ",r.jsx("span",{className:"code-output",children:"1"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Logical AND (&&) Operator"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Logical AND is like conditional visibility in Figma - only show an element when a condition is true."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Logical AND operator
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
{name && <h1>Hello, {name}!</h1>}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Logical AND examples
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
}`,explanation:"The logical AND operator (&&) is perfect for conditional rendering - it only renders the right side when the left side is truthy."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Logical AND Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Toggle Conditions:"}),r.jsxs("div",{className:"button-group",children:[r.jsxs("button",{onClick:()=>d(h=>({...h,showMessage:!h.showMessage})),children:[a.showMessage?"Hide":"Show"," Message"]}),r.jsxs("button",{onClick:()=>d(h=>({...h,showCount:!h.showCount})),children:[a.showCount?"Hide":"Show"," Count"]}),r.jsxs("button",{onClick:()=>d(h=>({...h,hasError:!h.hasError})),children:[a.hasError?"Clear":"Show"," Error"]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Conditional Elements:"}),r.jsxs("div",{className:"result",children:[a.showMessage&&r.jsx("div",{style:{color:"#10b981",marginBottom:"8px"},children:"✅ This message only shows when condition is true"}),a.showCount&&r.jsxs("div",{style:{color:"#3b82f6",marginBottom:"8px"},children:["📊 Count: ",a.count]}),a.hasError&&r.jsx("div",{style:{color:"#ef4444",marginBottom:"8px"},children:"❌ Error: Something went wrong!"}),!a.showMessage&&!a.showCount&&!a.hasError&&r.jsx("div",{style:{color:"#94a3b8"},children:"No conditions are true - nothing to show"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Multiple Conditions:"}),r.jsx("div",{className:"result",children:a.showMessage&&a.showCount&&r.jsx("div",{style:{color:"#8b5cf6"},children:"🎉 Both conditions are true!"})})]})]})})]})]})]})]})}function nm(){return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"React Core Concepts"}),r.jsx("p",{children:"Understanding React fundamentals through design thinking"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"What is React?"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," React is like Figma's component system on steroids - it's a library for building reusable UI components."]}),r.jsx("p",{children:"React is a JavaScript library for building user interfaces. It's like having a super-powered component system where you can create interactive, dynamic interfaces that respond to user actions and data changes."})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"JSX - JavaScript XML"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," JSX is like writing design specs in Figma - it combines structure (HTML) with logic (JavaScript)."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// JSX combines HTML with JavaScript
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
// 4. Must return single parent element`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// JSX combines HTML-like syntax with JavaScript
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
// 4. Use {} for JavaScript expressions`,explanation:"JSX allows you to write HTML-like code inside JavaScript, making it easier to create and manage UI components."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive JSX Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Name:"}),r.jsx("input",{type:"text",placeholder:"Enter name",id:"jsxUserName",defaultValue:"Sarah",onChange:e=>{const t=e.target.value;document.getElementById("jsxNameDisplay").textContent=t||"User"}})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Task Count:"}),r.jsx("input",{type:"number",placeholder:"Number of tasks",id:"jsxTaskCount",defaultValue:"5",onChange:e=>{const t=e.target.value;document.getElementById("jsxTaskDisplay").textContent=t||"0"}})]}),r.jsx("div",{className:"jsx-preview",children:r.jsxs("div",{className:"card",children:[r.jsxs("h2",{children:["Welcome, ",r.jsx("span",{id:"jsxNameDisplay",children:"Sarah"}),"!"]}),r.jsxs("p",{children:["You have ",r.jsx("span",{id:"jsxTaskDisplay",children:"5"})," tasks remaining"]}),r.jsx("button",{onClick:()=>alert("Task completed!"),children:"Complete Task"})]})})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Component Types"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Different component types are like different types of Figma components - some are simple, others are complex."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Function Component (Modern)
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
});`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// 1. Function Components (Modern, recommended)
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
));`,explanation:"Function components are the modern way to write React components. They're simpler and work better with hooks."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Component Types:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Function:"})," ",r.jsx("span",{className:"code-output",children:"Modern, hooks-friendly"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Arrow Function:"})," ",r.jsx("span",{className:"code-output",children:"Concise syntax"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Class:"})," ",r.jsx("span",{className:"code-output",children:"Legacy, avoid"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Pure:"})," ",r.jsx("span",{className:"code-output",children:"Performance optimized"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Fragments & Multiple Elements"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Fragments are like grouping elements in Figma without adding an extra container - you can return multiple items without a wrapper."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Without Fragment (adds extra div)
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
}`,explanation:"Fragments allow you to return multiple elements without adding an extra DOM node, keeping your HTML clean."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Fragment Types:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Empty Tags:"})," ",r.jsx("span",{className:"code-output",children:"<> </>"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"React.Fragment:"})," ",r.jsx("span",{className:"code-output",children:"Explicit syntax"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Arrays:"})," ",r.jsx("span",{className:"code-output",children:"With keys"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Conditional Rendering"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Conditional rendering is like using visibility settings in Figma - show different content based on conditions."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// 1. If/else with ternary operator
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
}`,explanation:"Conditional rendering allows you to show different UI based on conditions, just like how you control visibility in Figma."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Conditional Patterns:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Ternary:"})," ",r.jsx("span",{className:"code-output",children:"condition ? A : B"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Logical AND:"})," ",r.jsx("span",{className:"code-output",children:"condition && element"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Early Return:"})," ",r.jsx("span",{className:"code-output",children:"if (condition) return"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Switch:"})," ",r.jsx("span",{className:"code-output",children:"Multiple conditions"})]})]})]})]})]})]})}function rm(){const[e,t]=w.useState("Click me"),[n,s]=w.useState("primary"),[i,l]=w.useState("medium"),[o,c]=w.useState(!1),[a,d]=w.useState({name:"John Doe",email:"john@example.com",id:1}),[h,v]=w.useState("My Container"),[f,N]=w.useState("This is some content"),[x,k]=w.useState(null),[I,m]=w.useState(!1),[u,p]=w.useState({name:"",email:""});return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"React Components"}),r.jsx("p",{children:"Building reusable UI pieces like Figma components"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Props Deep Dive"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Props are like component properties in Figma - they allow you to customize instances with different values."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Component with props
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
};`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// 1. Basic props
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
}`,explanation:"Props are the primary way to pass data and functions to components, making them reusable and customizable."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Props Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Button Props:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:e,onChange:g=>t(g.target.value),placeholder:"Button text"}),r.jsxs("select",{value:n,onChange:g=>s(g.target.value),children:[r.jsx("option",{value:"primary",children:"Primary"}),r.jsx("option",{value:"secondary",children:"Secondary"}),r.jsx("option",{value:"danger",children:"Danger"})]}),r.jsxs("select",{value:i,onChange:g=>l(g.target.value),children:[r.jsx("option",{value:"small",children:"Small"}),r.jsx("option",{value:"medium",children:"Medium"}),r.jsx("option",{value:"large",children:"Large"})]}),r.jsx("button",{onClick:()=>c(!o),children:o?"Enable":"Disable"})]}),r.jsx("div",{className:"result",children:r.jsx("button",{className:`btn btn-${n} btn-${i} ${o?"disabled":""}`,disabled:o,onClick:()=>alert("Button clicked!"),style:{backgroundColor:n==="primary"?"#3b82f6":n==="secondary"?"#6b7280":"#ef4444",padding:i==="small"?"4px 8px":i==="medium"?"8px 16px":"12px 24px",opacity:o?.6:1,cursor:o?"not-allowed":"pointer"},children:e})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Card Props:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:a.name,onChange:g=>d(S=>({...S,name:g.target.value})),placeholder:"User name"}),r.jsx("input",{value:a.email,onChange:g=>d(S=>({...S,email:g.target.value})),placeholder:"User email"})]}),r.jsx("div",{className:"result",children:r.jsxs("div",{className:"user-card",style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[r.jsx("h3",{style:{margin:"0 0 8px 0"},children:a.name}),r.jsx("p",{style:{margin:"0 0 12px 0",color:"#6b7280"},children:a.email}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>alert("Edit user: "+a.id),style:{marginRight:"8px"},children:"Edit"}),r.jsx("button",{onClick:()=>alert("Delete user: "+a.id),style:{backgroundColor:"#ef4444"},children:"Delete"})]})]})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Container with Children:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:h,onChange:g=>v(g.target.value),placeholder:"Container title"}),r.jsx("input",{value:f,onChange:g=>N(g.target.value),placeholder:"Container content"})]}),r.jsx("div",{className:"result",children:r.jsxs("div",{className:"container",style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[h&&r.jsx("h2",{style:{margin:"0 0 12px 0"},children:h}),r.jsx("div",{children:f})]})})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Component Composition Patterns"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Component composition is like building complex designs in Figma by combining and nesting simple components."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Children composition
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
);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// 1. Children composition
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
};`,explanation:"Component composition patterns help you build flexible, reusable component systems."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Composition Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Layout Composition:"}),r.jsx("div",{className:"result",children:r.jsxs("div",{className:"layout",style:{border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[r.jsx("header",{style:{backgroundColor:"#f3f4f6",padding:"12px",borderBottom:"1px solid #e5e7eb"},children:r.jsx("h3",{style:{margin:0},children:"Header Content"})}),r.jsxs("div",{style:{display:"flex"},children:[r.jsxs("aside",{style:{backgroundColor:"#f9fafb",padding:"12px",width:"200px",borderRight:"1px solid #e5e7eb"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Sidebar"}),r.jsxs("ul",{style:{margin:0,paddingLeft:"16px"},children:[r.jsx("li",{children:"Menu Item 1"}),r.jsx("li",{children:"Menu Item 2"}),r.jsx("li",{children:"Menu Item 3"})]})]}),r.jsxs("main",{style:{padding:"16px",flex:1},children:[r.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Main Content"}),r.jsx("p",{children:"This is the main content area with flexible layout composition."})]})]}),r.jsx("footer",{style:{backgroundColor:"#f3f4f6",padding:"12px",borderTop:"1px solid #e5e7eb",textAlign:"center"},children:"Footer Content"})]})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Data Fetcher (Render Props):"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{m(!0),setTimeout(()=>{k({message:"Data loaded successfully!",timestamp:new Date().toLocaleTimeString()}),m(!1)},1500)},children:"Simulate Data Fetch"}),r.jsx("button",{onClick:()=>{k(null),m(!1)},children:"Clear Data"})]}),r.jsx("div",{className:"result",children:I?r.jsx("div",{style:{color:"#f59e0b"},children:"🔄 Loading data..."}):x?r.jsxs("div",{style:{color:"#10b981"},children:["✅ ",x.message,r.jsx("br",{}),r.jsxs("small",{children:["Time: ",x.timestamp]})]}):r.jsx("div",{style:{color:"#6b7280"},children:"No data loaded"})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Compound Form Components:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:u.name,onChange:g=>p(S=>({...S,name:g.target.value})),placeholder:"Name"}),r.jsx("input",{value:u.email,onChange:g=>p(S=>({...S,email:g.target.value})),placeholder:"Email"})]}),r.jsx("div",{className:"result",children:r.jsxs("form",{onSubmit:g=>{g.preventDefault(),alert("Form submitted: "+JSON.stringify(u))},style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[r.jsxs("div",{style:{marginBottom:"12px"},children:[r.jsx("label",{style:{display:"block",marginBottom:"4px"},children:"Name:"}),r.jsx("input",{value:u.name,onChange:g=>p(S=>({...S,name:g.target.value})),style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #d1d5db"}})]}),r.jsxs("div",{style:{marginBottom:"12px"},children:[r.jsx("label",{style:{display:"block",marginBottom:"4px"},children:"Email:"}),r.jsx("input",{value:u.email,onChange:g=>p(S=>({...S,email:g.target.value})),style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #d1d5db"}})]}),r.jsx("button",{type:"submit",style:{backgroundColor:"#3b82f6",color:"white",padding:"8px 16px",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Submit Form"})]})})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Component Best Practices"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Component best practices are like design system guidelines in Figma - they ensure consistency and maintainability."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// 1. Single responsibility
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
}`,explanation:"Following best practices ensures your components are maintainable, reusable, and performant."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Best Practices:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Single Responsibility:"})," ",r.jsx("span",{className:"code-output",children:"One job per component"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Clean Props:"})," ",r.jsx("span",{className:"code-output",children:"Logical interfaces"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Consistent Naming:"})," ",r.jsx("span",{className:"code-output",children:"Clear conventions"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Error Handling:"})," ",r.jsx("span",{className:"code-output",children:"Error boundaries"})]})]})]})]})]})]})}function sm(){const[e,t]=w.useState(0),[n,s]=w.useState({name:"",email:""}),[i,l]=w.useState(""),[o,c]=w.useState([]),[a,d]=w.useState("React Cheatsheet"),[h,v]=w.useState(0),[f,N]=w.useState({width:window.innerWidth,height:window.innerHeight});return w.useEffect(()=>{document.title=a},[a]),w.useEffect(()=>{const x=()=>{N({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"React Hooks"}),r.jsx("p",{children:"Managing state and side effects in components"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"useState Hook Deep Dive"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," useState is like having interactive properties in Figma - values that can change and update the UI."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`const [state, setState] = useState(initialValue);

// Examples:
const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [user, setUser] = useState({ name: '', email: '' });
const [todos, setTodos] = useState([]);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// 1. Basic useState
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
}`,explanation:"useState is the most fundamental hook for managing component state. It returns the current state and a function to update it."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive useState Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsxs("label",{children:["Counter: ",e]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>t(e-1),children:r.jsx(Bi,{size:16})}),r.jsx("button",{onClick:()=>t(e+1),children:r.jsx(Oi,{size:16})}),r.jsx("button",{onClick:()=>t(0),children:r.jsx(iu,{size:16})})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Form:"}),r.jsx("input",{value:n.name,onChange:x=>s(k=>({...k,name:x.target.value})),placeholder:"Name"}),r.jsx("input",{value:n.email,onChange:x=>s(k=>({...k,email:x.target.value})),placeholder:"Email"}),r.jsxs("div",{className:"result",children:["Name: ",n.name||"Not set"," | Email: ",n.email||"Not set"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Todo List:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:i,onChange:x=>l(x.target.value),placeholder:"Add todo"}),r.jsx("button",{onClick:()=>{i.trim()&&(c(x=>[...x,{id:Date.now(),text:i,completed:!1}]),l(""))},children:"Add"})]}),r.jsx("ul",{className:"todo-list",children:o.map(x=>r.jsx("li",{onClick:()=>c(k=>k.map(I=>I.id===x.id?{...I,completed:!I.completed}:I)),style:{textDecoration:x.completed?"line-through":"none",cursor:"pointer"},children:x.text},x.id))})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"useEffect Hook Deep Dive"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," useEffect is like auto-layout or smart animate in Figma - it runs code when something changes."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`useEffect(() => {
  // Effect code
}, [dependencies]);

// Examples:
useEffect(() => {}, []);           // Run once
useEffect(() => {}, [dep]);        // Run when dep changes
useEffect(() => {
  return () => cleanup();          // Cleanup function
}, []);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// 1. Basic useEffect (runs after every render)
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
}`,explanation:"useEffect handles side effects in functional components, such as data fetching, subscriptions, or DOM manipulation."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive useEffect Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Document Title Effect:"}),r.jsx("input",{value:a,onChange:x=>d(x.target.value),placeholder:"Enter page title"}),r.jsxs("div",{className:"result",children:["Current title: ",document.title]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Counter with Effect:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>v(h-1),children:r.jsx(Bi,{size:16})}),r.jsx("span",{style:{padding:"8px 16px",background:"rgba(255,255,255,0.1)",borderRadius:"4px"},children:h}),r.jsx("button",{onClick:()=>v(h+1),children:r.jsx(Oi,{size:16})})]}),r.jsxs("div",{className:"result",children:["Effect runs when count changes: ",h%2===0?"Even":"Odd"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Window Size Effect:"}),r.jsxs("div",{className:"result",children:["Window size: ",f.width," x ",f.height]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Additional Hooks"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Additional hooks are like specialized tools in Figma - each serves a specific purpose."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// 1. useRef - Access DOM elements
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
}`,explanation:"Additional hooks provide specialized functionality for different use cases in React applications."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Additional Hooks:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"useRef:"})," ",r.jsx("span",{className:"code-output",children:"DOM access"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"useMemo:"})," ",r.jsx("span",{className:"code-output",children:"Memoize values"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"useCallback:"})," ",r.jsx("span",{className:"code-output",children:"Memoize functions"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"useReducer:"})," ",r.jsx("span",{className:"code-output",children:"Complex state"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Custom Hooks"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Custom hooks are like creating your own plugins in Figma - reusable logic that can be shared between components."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// 1. Basic custom hook
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
}`,explanation:"Custom hooks let you extract and reuse stateful logic between components, making your code more modular and reusable."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Custom Hook Benefits:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Reusability:"})," ",r.jsx("span",{className:"code-output",children:"Share logic"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Cleaner Components:"})," ",r.jsx("span",{className:"code-output",children:"Less complexity"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Testing:"})," ",r.jsx("span",{className:"code-output",children:"Easier to test"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Composition:"})," ",r.jsx("span",{className:"code-output",children:"Combine hooks"})]})]})]})]})]})]})}function im(){const[e,t]=w.useState([{id:1,title:"Design homepage",completed:!1,category:"design"},{id:2,title:"Create wireframes",completed:!0,category:"design"},{id:3,title:"Build prototype",completed:!1,category:"development"},{id:4,title:"Write tests",completed:!1,category:"testing"},{id:5,title:"Deploy app",completed:!1,category:"deployment"}]),[n,s]=w.useState("all"),[i,l]=w.useState(""),[o,c]=w.useState({name:"Sarah",isAdmin:!1,loading:!1,error:null}),[a,d]=w.useState({name:"",email:""}),[h,v]=w.useState(!1),[f,N]=w.useState(!1),[x,k]=w.useState(!1),[I,m]=w.useState(0);return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Data Handling"}),r.jsx("p",{children:"Working with dynamic data and lists"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Mapping Arrays"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," map() is like duplicating components in Figma - you create multiple instances from a list."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`array.map(item => (
  <Component key={item.id}>
    {item.property}
  </Component>
));

// Examples:
items.map(item => <li key={item.id}>{item.name}</li>);
users.map(user => <UserCard key={user.id} user={user} />);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Mapping over arrays (like duplicating components in Figma)
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
}`,explanation:"map() transforms each item in an array into a React element, creating a list of components from your data."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Array Mapping:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Task List (Mapped from Array):"}),r.jsx("ul",{className:"todo-list",children:e.map(u=>r.jsxs("li",{onClick:()=>t(p=>p.map(g=>g.id===u.id?{...g,completed:!g.completed}:g)),style:{textDecoration:u.completed?"line-through":"none",cursor:"pointer",opacity:u.completed?.6:1},children:[u.title," ",u.completed&&"✓"]},u.id))})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Add New Task:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:i,onChange:u=>l(u.target.value),placeholder:"Enter task title"}),r.jsx("button",{onClick:()=>{i.trim()&&(t(u=>[...u,{id:Date.now(),title:i,completed:!1,category:"general"}]),l(""))},children:"Add Task"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Filtering Data"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," filter() is like using the layers panel to show/hide elements based on criteria."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`array.filter(item => condition);

// Examples:
items.filter(item => item.completed);
users.filter(user => user.isActive);
tasks.filter(task => task.category === 'design');

// Combined with map:
array.filter(item => condition).map(item => <Component />);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Filtering data (like showing/hiding layers in Figma)
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
}`,explanation:"filter() creates a new array with only the elements that pass a test, perfect for creating filtered views of your data."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Data Filtering:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Filter by Category:"}),r.jsxs("select",{value:n,onChange:u=>s(u.target.value),children:[r.jsx("option",{value:"all",children:"All Tasks"}),r.jsx("option",{value:"design",children:"Design"}),r.jsx("option",{value:"development",children:"Development"}),r.jsx("option",{value:"testing",children:"Testing"}),r.jsx("option",{value:"deployment",children:"Deployment"}),r.jsx("option",{value:"general",children:"General"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Filtered Tasks:"}),r.jsx("ul",{className:"todo-list",children:e.filter(u=>n==="all"||u.category===n).map(u=>r.jsxs("li",{style:{opacity:u.completed?.6:1},children:[u.title," (",u.category,") ",u.completed&&"✓"]},u.id))}),r.jsxs("div",{className:"result",children:["Showing ",e.filter(u=>n==="all"||u.category===n).length," of ",e.length," tasks"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Filter by Status:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>s("completed"),children:"Show Completed"}),r.jsx("button",{onClick:()=>s("pending"),children:"Show Pending"}),r.jsx("button",{onClick:()=>s("all"),children:"Show All"})]}),r.jsxs("div",{className:"result",children:[n==="completed"&&e.filter(u=>u.completed).length+" completed tasks",n==="pending"&&e.filter(u=>!u.completed).length+" pending tasks",n==="all"&&e.length+" total tasks"]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Conditional Rendering"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Conditional rendering is like using visibility settings in Figma - showing/hiding elements based on conditions."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}

// Examples:
{isLoading && <Spinner />}
{user ? <UserProfile /> : <LoginForm />}
{items.length > 0 ? <ItemList /> : <EmptyState />}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Conditional rendering (like visibility settings in Figma)
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
}`,explanation:"Conditional rendering allows you to show different UI based on conditions, just like how you control visibility in Figma."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Conditional Rendering:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Role Toggle:"}),r.jsx("div",{className:"button-group",children:r.jsx("button",{onClick:()=>c(u=>({...u,isAdmin:!u.isAdmin})),style:{backgroundColor:o.isAdmin?"#10b981":"#6b7280"},children:o.isAdmin?"Admin Mode":"User Mode"})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Dashboard Preview:"}),r.jsx("div",{className:"jsx-preview",children:r.jsxs("div",{className:"card",children:[r.jsxs("h2",{children:["Welcome, ",o.name,"!"]}),o.isAdmin?r.jsxs("div",{style:{background:"#fef3c7",padding:"12px",borderRadius:"4px",border:"1px solid #f59e0b"},children:[r.jsx("strong",{children:"Admin Panel:"})," You have full access to all features"]}):r.jsxs("div",{style:{background:"#dbeafe",padding:"12px",borderRadius:"4px",border:"1px solid #3b82f6"},children:[r.jsx("strong",{children:"User Panel:"})," Limited access to basic features"]}),o.loading&&r.jsx("div",{style:{background:"#f3f4f6",padding:"12px",borderRadius:"4px",textAlign:"center"},children:"⏳ Loading..."}),o.error&&r.jsxs("div",{style:{background:"#fee2e2",padding:"12px",borderRadius:"4px",border:"1px solid #ef4444",color:"#dc2626"},children:["Error: ",o.error]})]})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Simulate States:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>c(u=>({...u,loading:!u.loading})),children:o.loading?"Stop Loading":"Start Loading"}),r.jsx("button",{onClick:()=>c(u=>({...u,error:u.error?null:"Something went wrong!"})),children:o.error?"Clear Error":"Show Error"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Key-Value Pairs & Object Manipulation"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Key-value pairs are like component properties in Figma - each property has a name (key) and a value that can be changed."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`const object = {
  key: value,
  property: data
};

object.key;              // Access
object["key"];           // Bracket notation
object.newKey = value;   // Add property
const { key } = object;  // Destructuring`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Key-value pairs in objects (like Figma component properties)
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
const userWithNewProps = { ...user, department: "Design" };`,explanation:"Objects are collections of key-value pairs, where each key is a string and each value can be any data type. This is fundamental for managing state and data in React."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Object Manipulation:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Object:"}),r.jsx("div",{className:"result",children:r.jsx("pre",{style:{fontSize:"12px",textAlign:"left"},children:JSON.stringify(o,null,2)})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Update User Properties:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{placeholder:"New name",onKeyPress:u=>{u.key==="Enter"&&u.target.value.trim()&&(c(p=>({...p,name:u.target.value})),u.target.value="")}}),r.jsx("button",{onClick:()=>c(u=>({...u,isAdmin:!u.isAdmin})),children:"Toggle Admin"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Add New Properties:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{placeholder:"Property name",id:"propName"}),r.jsx("input",{placeholder:"Property value",id:"propValue"}),r.jsx("button",{onClick:()=>{const u=document.getElementById("propName").value,p=document.getElementById("propValue").value;u&&p&&(c(g=>({...g,[u]:p})),document.getElementById("propName").value="",document.getElementById("propValue").value="")},children:"Add Property"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Button State Control"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Button states are like component variants in Figma - different visual states (normal, hover, disabled) for the same component."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`<button 
  disabled={isDisabled}
  onClick={handleClick}
  style={{ opacity: isDisabled ? 0.6 : 1 }}
>
  {isLoading ? 'Loading...' : 'Click me'}
</button>

// State variables:
const [isDisabled, setIsDisabled] = useState(false);
const [isLoading, setIsLoading] = useState(false);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Button state control (like Figma component variants)
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
}`,explanation:"Button state control involves managing different states (enabled, disabled, loading) and providing visual feedback to users based on the current state."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Button States:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Form Validation Demo:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{placeholder:"Name",value:a.name,onChange:u=>d(p=>({...p,name:u.target.value}))}),r.jsx("input",{placeholder:"Email",value:a.email,onChange:u=>d(p=>({...p,email:u.target.value}))})]}),r.jsx("div",{className:"button-group",children:r.jsx("button",{onClick:()=>{v(!0),setTimeout(()=>v(!1),2e3)},disabled:!a.name||!a.email||h,style:{backgroundColor:!a.name||!a.email?"#6b7280":"#3b82f6",opacity:!a.name||!a.email||h?.6:1,cursor:!a.name||!a.email||h?"not-allowed":"pointer"},children:h?"Submitting...":"Submit Form"})}),r.jsxs("div",{className:"result",children:["Form valid: ",a.name&&a.email?"✅":"❌"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Button State Toggle:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>N(!f),style:{backgroundColor:f?"#ef4444":"#10b981"},children:f?"Enable Button":"Disable Button"}),r.jsx("button",{onClick:()=>k(!x),style:{backgroundColor:x?"#f59e0b":"#8b5cf6"},children:x?"Stop Loading":"Start Loading"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Controlled Button:"}),r.jsx("div",{className:"button-group",children:r.jsx("button",{onClick:()=>m(u=>u+1),disabled:f||x,style:{backgroundColor:f?"#6b7280":"#3b82f6",opacity:f||x?.6:1,cursor:f||x?"not-allowed":"pointer"},children:x?"Loading...":"Click me! ("+I+")"})}),r.jsxs("div",{className:"result",children:["Button state: ",f?"Disabled":x?"Loading":"Enabled"]})]})]})})]})]})]})]})}function lm(){const[e,t]=w.useState(0),[n,s]=w.useState({x:0,y:0}),[i,l]=w.useState({name:"",email:"",message:""}),[o,c]=w.useState("No events yet");return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Events & Interactions"}),r.jsx("p",{children:"Making your UI interactive like Figma prototypes"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Event Handlers"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Event handlers are like interactions in Figma - they respond to user actions."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Event handler function
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
// onClick, onChange, onSubmit, onKeyDown, onMouseEnter, onMouseLeave`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Event handlers (like Figma interactions)
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

// Common events: onClick, onChange, onSubmit, onKeyDown, etc.`,explanation:"Event handlers are functions that run when users interact with your UI, just like interactions in Figma prototypes."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Event Examples:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Click Events:"}),r.jsxs("div",{className:"button-group",children:[r.jsxs("button",{onClick:()=>{t(a=>a+1),c("Button clicked!")},children:["Click Counter: ",e]}),r.jsx("button",{onMouseEnter:()=>c("Mouse entered button"),onMouseLeave:()=>c("Mouse left button"),children:"Hover Me"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Mouse Position Tracker:"}),r.jsxs("div",{style:{width:"200px",height:"100px",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onMouseMove:a=>{const d=a.target.getBoundingClientRect();s({x:Math.round(a.clientX-d.left),y:Math.round(a.clientY-d.top)})},children:["Move mouse here",r.jsxs("div",{style:{position:"absolute",top:"4px",left:"4px",fontSize:"12px",color:"#94a3b8"},children:["X: ",n.x,", Y: ",n.y]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Last Event:"}),r.jsx("div",{className:"result",children:o})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Form Handling"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Form handling is like creating input fields in Figma - you collect and process user input."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Form state
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
</form>`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Form handling (like input fields in Figma)
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
}`,explanation:"Form handling allows you to collect and process user input, similar to how you create input fields in Figma prototypes."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Form Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Contact Form:"}),r.jsxs("form",{onSubmit:a=>{a.preventDefault(),alert(`Form submitted!
Name: ${i.name}
Email: ${i.email}
Message: ${i.message}`),l({name:"",email:"",message:""})},children:[r.jsx("input",{type:"text",name:"name",value:i.name,onChange:a=>l(d=>({...d,name:a.target.value})),placeholder:"Your name",style:{marginBottom:"8px"}}),r.jsx("input",{type:"email",name:"email",value:i.email,onChange:a=>l(d=>({...d,email:a.target.value})),placeholder:"Your email",style:{marginBottom:"8px"}}),r.jsx("textarea",{name:"message",value:i.message,onChange:a=>l(d=>({...d,message:a.target.value})),placeholder:"Your message",style:{marginBottom:"8px",minHeight:"60px"}}),r.jsx("button",{type:"submit",style:{width:"100%"},children:"Send Message"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Form Data Preview:"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["Name: ",i.name||"Not entered"]}),r.jsxs("div",{children:["Email: ",i.email||"Not entered"]}),r.jsxs("div",{children:["Message: ",i.message||"Not entered"]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Form Validation:"}),r.jsxs("div",{className:"result",children:[!i.name&&r.jsx("div",{style:{color:"#ef4444"},children:"❌ Name is required"}),!i.email&&r.jsx("div",{style:{color:"#ef4444"},children:"❌ Email is required"}),!i.message&&r.jsx("div",{style:{color:"#ef4444"},children:"❌ Message is required"}),i.name&&i.email&&i.message&&r.jsx("div",{style:{color:"#10b981"},children:"✅ Form is complete"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"State Updates"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," State updates are like changing properties in Figma - they trigger visual updates."]}),r.jsx(R,{code:`// State updates (like changing properties in Figma)
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
}`,explanation:"State updates trigger re-renders, just like how changing properties in Figma updates the visual appearance."})]})]})}function om(){w.useState("light");const[e,t]=w.useState("primary"),[n,s]=w.useState("default"),[i,l]=w.useState("desktop");return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Styling & Design"}),r.jsx("p",{children:"CSS, styling approaches, and design system implementation"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"CSS-in-JS (Styled Components)"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Styled Components are like Figma components with built-in styles - they combine design and functionality."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Install: npm install styled-components
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
<StyledButton variant="primary">Click me</StyledButton>`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Styled Components (like Figma components with styles)
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
}`,explanation:"Styled Components combine CSS and React components, making them reusable and maintainable like Figma components."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Styled Components Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Button Variant:"}),r.jsxs("select",{value:e,onChange:o=>t(o.target.value),children:[r.jsx("option",{value:"primary",children:"Primary"}),r.jsx("option",{value:"secondary",children:"Secondary"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Card Style:"}),r.jsxs("select",{value:n,onChange:o=>s(o.target.value),children:[r.jsx("option",{value:"default",children:"Default"}),r.jsx("option",{value:"elevated",children:"Elevated"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsxs("div",{style:{background:e==="primary"?"#6366f1":"#f59e0b",color:"white",padding:"12px 24px",border:"none",borderRadius:"8px",cursor:"pointer",marginBottom:"16px"},children:[e==="primary"?"Primary":"Secondary"," Button"]}),r.jsxs("div",{style:{background:"white",borderRadius:"12px",padding:"24px",boxShadow:n==="elevated"?"0 10px 25px rgba(0, 0, 0, 0.15)":"0 4px 6px rgba(0, 0, 0, 0.1)",border:"1px solid #e5e7eb"},children:[r.jsx("h3",{children:"Styled Card"}),r.jsx("p",{children:"This card has built-in styles!"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"CSS Modules & Scoped Styling"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," CSS Modules are like component-specific styles in Figma - they don't affect other components."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Button.module.css
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
}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// CSS Modules (scoped styling)
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
<Button variant="secondary">Secondary Button</Button>`,explanation:"CSS Modules provide scoped styling that only applies to specific components, preventing style conflicts."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"CSS Modules Demo:"}),r.jsx("div",{className:"output-content",children:r.jsx("div",{className:"demo-controls",children:r.jsxs("div",{className:"demo-item",children:[r.jsx("p",{children:r.jsx("strong",{children:"Benefits:"})}),r.jsxs("ul",{children:[r.jsx("li",{children:"✅ Scoped styles (no conflicts)"}),r.jsx("li",{children:"✅ Component-specific styling"}),r.jsx("li",{children:"✅ Better organization"}),r.jsx("li",{children:"✅ Type safety with TypeScript"})]})]})})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Utility-First CSS (Tailwind)"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Tailwind CSS is like using Figma's design tokens and constraints - you build designs with predefined utilities."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Install: npm install -D tailwindcss
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
</button>`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Tailwind CSS (utility-first approach)
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
}`,explanation:"Tailwind CSS provides utility classes that you combine to build designs, similar to how you use design tokens in Figma."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Tailwind Utilities Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Responsive Size:"}),r.jsxs("select",{value:i,onChange:o=>l(o.target.value),children:[r.jsx("option",{value:"mobile",children:"Mobile"}),r.jsx("option",{value:"tablet",children:"Tablet"}),r.jsx("option",{value:"desktop",children:"Desktop"})]})]}),r.jsx("div",{className:"demo-item",children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:i==="mobile"?"1fr":i==="tablet"?"1fr 1fr":"1fr 1fr 1fr",gap:"16px",marginTop:"16px"},children:[r.jsx("div",{style:{background:"#f3f4f6",padding:"16px",borderRadius:"4px"},children:"Card 1"}),r.jsx("div",{style:{background:"#f3f4f6",padding:"16px",borderRadius:"4px"},children:"Card 2"}),r.jsx("div",{style:{background:"#f3f4f6",padding:"16px",borderRadius:"4px"},children:"Card 3"})]})})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Responsive Design Patterns"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Responsive design is like creating different frame sizes in Figma - you design for multiple screen sizes."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// CSS Media Queries
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
}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Responsive Design Patterns
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
}`,explanation:"Responsive design ensures your UI works well on all screen sizes, from mobile to desktop."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Responsive Design Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("p",{children:r.jsx("strong",{children:"Responsive Breakpoints:"})}),r.jsxs("ul",{children:[r.jsx("li",{children:"📱 Mobile: < 768px (1 column)"}),r.jsx("li",{children:"📱 Tablet: 768px - 1024px (2 columns)"}),r.jsx("li",{children:"🖥️ Desktop: > 1024px (3 columns)"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("p",{children:r.jsx("strong",{children:"Design Principles:"})}),r.jsxs("ul",{children:[r.jsx("li",{children:"✅ Mobile-first approach"}),r.jsx("li",{children:"✅ Flexible layouts"}),r.jsx("li",{children:"✅ Scalable typography"}),r.jsx("li",{children:"✅ Touch-friendly interactions"})]})]})]})})]})]})]})]})}function am(){const[e,t]=w.useState("/"),[n,s]=w.useState(["/"]),[i,l]=w.useState({}),o=a=>{t(a),s(d=>[...d,a])},c=(a,d)=>{t(a),l(d),s(h=>[...h,a+"?"+new URLSearchParams(d)])};return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Navigation & Routing"}),r.jsx("p",{children:"Page navigation, routing, and URL management"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"React Router Basics"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," React Router is like creating multiple pages in Figma - you can navigate between different views."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Install: npm install react-router-dom
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
<Link to="/contact">Contact</Link>`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// React Router Setup
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
}`,explanation:"React Router enables navigation between different pages/views in your React application."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Router Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Current Route:"}),r.jsx("div",{className:"result",children:e})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Navigation:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>o("/"),children:"Home"}),r.jsx("button",{onClick:()=>o("/about"),children:"About"}),r.jsx("button",{onClick:()=>o("/contact"),children:"Contact"}),r.jsx("button",{onClick:()=>o("/products"),children:"Products"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Route History:"}),r.jsx("div",{className:"result",style:{fontSize:"12px",maxHeight:"100px",overflowY:"auto"},children:n.slice(-5).join(" → ")})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Dynamic Routes & Parameters"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Dynamic routes are like Figma components with variants - the same component can display different content based on parameters."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Dynamic route with parameter
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
}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Dynamic Routes with Parameters
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
}`,explanation:"Dynamic routes allow you to create flexible URLs that can display different content based on parameters."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Dynamic Routes Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Navigate with Parameters:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>c("/products/1",{category:"electronics"}),children:"Product 1 (Electronics)"}),r.jsx("button",{onClick:()=>c("/products/2",{category:"books"}),children:"Product 2 (Books)"}),r.jsx("button",{onClick:()=>c("/products/3",{category:"clothing"}),children:"Product 3 (Clothing)"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Current Parameters:"}),r.jsx("div",{className:"result",children:Object.keys(i).length>0?Object.entries(i).map(([a,d])=>a+": "+d).join(", "):"No parameters"})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Protected Routes & Authentication"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Protected routes are like Figma files with different permission levels - some content is only visible to certain users."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Protected Route Component
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
};`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Protected Routes Implementation
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
}`,explanation:"Protected routes ensure that certain pages are only accessible to authenticated users."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Protected Routes Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("p",{children:r.jsx("strong",{children:"Route Protection Levels:"})}),r.jsxs("ul",{children:[r.jsx("li",{children:"🏠 Home: Public (no auth required)"}),r.jsx("li",{children:"🔐 Dashboard: Protected (auth required)"}),r.jsx("li",{children:"👤 Profile: Protected (auth required)"}),r.jsx("li",{children:"📧 Contact: Public (no auth required)"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("p",{children:r.jsx("strong",{children:"Authentication Flow:"})}),r.jsxs("ol",{children:[r.jsx("li",{children:"User tries to access protected route"}),r.jsx("li",{children:"Check if user is authenticated"}),r.jsx("li",{children:"If not, redirect to login"}),r.jsx("li",{children:"After login, redirect back to original route"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Navigation Patterns"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Navigation patterns are like the navigation structure in Figma - you need clear ways to move between different sections."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Breadcrumb Navigation
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
}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(R,{code:`// Common Navigation Patterns

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
}`,explanation:"Different navigation patterns provide clear ways for users to move through your application."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Navigation Patterns Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("p",{children:r.jsx("strong",{children:"Common Patterns:"})}),r.jsxs("ul",{children:[r.jsx("li",{children:"🍞 Breadcrumbs: Show current location"}),r.jsx("li",{children:"📑 Tabs: Switch between related content"}),r.jsx("li",{children:"📱 Sidebar: Persistent navigation"}),r.jsx("li",{children:"☰ Mobile Menu: Collapsible navigation"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("p",{children:r.jsx("strong",{children:"Best Practices:"})}),r.jsxs("ul",{children:[r.jsx("li",{children:"✅ Clear visual hierarchy"}),r.jsx("li",{children:"✅ Consistent navigation"}),r.jsx("li",{children:"✅ Accessible navigation"}),r.jsx("li",{children:"✅ Mobile-friendly design"})]})]})]})})]})]})]})]})}function cm(){return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Figma to React Mapping"}),r.jsx("p",{children:"How design concepts translate to code"}),r.jsxs("div",{className:"mapping-grid",children:[r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Frame → React Component"}),r.jsx("p",{children:"A frame in Figma becomes a component in React"}),r.jsx(R,{code:`// Figma Frame → React Component
function Card() {
  return (
    <div className="card">
      <h3>Card Title</h3>
      <p>Card content</p>
    </div>
  );
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Component → Reusable React Component"}),r.jsx("p",{children:"Figma components become reusable React components with props"}),r.jsx(R,{code:`// Figma Component → React Component with Props
function Button({ text, variant }) {
  return (
    <button className={\`btn btn-\${variant}\`}>
      {text}
    </button>
  );
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Auto Layout → CSS Flexbox/Grid"}),r.jsx("p",{children:"Auto layout properties translate to CSS layout"}),r.jsx(R,{code:`// Figma Auto Layout → CSS
.card-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Constraints → CSS Positioning"}),r.jsx("p",{children:"Constraints become responsive CSS rules"}),r.jsx(R,{code:`// Figma Constraints → CSS
.responsive-element {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Interactions → React Event Handlers"}),r.jsx("p",{children:"Figma interactions become JavaScript event handlers"}),r.jsx(R,{code:`// Figma Interaction → React Event Handler
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
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Variants → React Conditional Rendering"}),r.jsx("p",{children:"Component variants become conditional rendering"}),r.jsx(R,{code:`// Figma Variants → React Conditional Rendering
function Button({ variant, disabled }) {
  return (
    <button 
      className={\`btn btn-\${variant} \${disabled ? 'disabled' : ''}\`}
      disabled={disabled}
    >
      Button Text
    </button>
  );
}`})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Design System Translation"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Your Figma design system can be directly translated to React components and CSS variables."]}),r.jsx(R,{code:`// Figma Design System → React/CSS
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
}`,explanation:"Your Figma design system can be directly translated to CSS variables and React components, ensuring consistency between design and code."})]})]})}function R({code:e,explanation:t}){return r.jsxs("div",{className:"code-example",children:[r.jsx("pre",{children:r.jsx("code",{children:e})}),r.jsxs("div",{className:"explanation",children:[r.jsx("strong",{children:"💡 Explanation:"})," ",t]})]})}Js.createRoot(document.getElementById("root")).render(r.jsx(Su.StrictMode,{children:r.jsx(Zp,{})}));
