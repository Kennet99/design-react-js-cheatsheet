(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function au(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jo={exports:{}},ni={},Xo={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),cu=Symbol.for("react.portal"),uu=Symbol.for("react.fragment"),du=Symbol.for("react.strict_mode"),pu=Symbol.for("react.profiler"),mu=Symbol.for("react.provider"),hu=Symbol.for("react.context"),fu=Symbol.for("react.forward_ref"),gu=Symbol.for("react.suspense"),vu=Symbol.for("react.memo"),xu=Symbol.for("react.lazy"),zl=Symbol.iterator;function yu(e){return e===null||typeof e!="object"?null:(e=zl&&e[zl]||e["@@iterator"],typeof e=="function"?e:null)}var Yo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ko=Object.assign,Go={};function on(e,t,n){this.props=e,this.context=t,this.refs=Go,this.updater=n||Yo}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zo(){}Zo.prototype=on.prototype;function Hs(e,t,n){this.props=e,this.context=t,this.refs=Go,this.updater=n||Yo}var Vs=Hs.prototype=new Zo;Vs.constructor=Hs;Ko(Vs,on.prototype);Vs.isPureReactComponent=!0;var _l=Array.isArray,qo=Object.prototype.hasOwnProperty,$s={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function ta(e,t,n){var i,s={},l=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)qo.call(t,i)&&!ea.hasOwnProperty(i)&&(s[i]=t[i]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var a=Array(c),d=0;d<c;d++)a[d]=arguments[d+2];s.children=a}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)s[i]===void 0&&(s[i]=c[i]);return{$$typeof:Kn,type:e,key:l,ref:o,props:s,_owner:$s.current}}function ju(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ws(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function Nu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bl=/\/+/g;function Ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nu(""+e.key):t.toString(36)}function jr(e,t,n,i,s){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Kn:case cu:o=!0}}if(o)return o=e,s=s(o),e=i===""?"."+Ni(o,0):i,_l(s)?(n="",e!=null&&(n=e.replace(Bl,"$&/")+"/"),jr(s,t,n,"",function(d){return d})):s!=null&&(Ws(s)&&(s=ju(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Bl,"$&/")+"/")+e)),t.push(s)),1;if(o=0,i=i===""?".":i+":",_l(e))for(var c=0;c<e.length;c++){l=e[c];var a=i+Ni(l,c);o+=jr(l,t,n,a,s)}else if(a=yu(e),typeof a=="function")for(e=a.call(e),c=0;!(l=e.next()).done;)l=l.value,a=i+Ni(l,c++),o+=jr(l,t,n,a,s);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function rr(e,t,n){if(e==null)return e;var i=[],s=0;return jr(e,i,"","",function(l){return t.call(n,l,s++)}),i}function ku(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Nr={transition:null},Su={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Nr,ReactCurrentOwner:$s};function na(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Ws(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=on;L.Fragment=uu;L.Profiler=pu;L.PureComponent=Hs;L.StrictMode=du;L.Suspense=gu;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Su;L.act=na;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Ko({},e.props),s=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=$s.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in t)qo.call(t,a)&&!ea.hasOwnProperty(a)&&(i[a]=t[a]===void 0&&c!==void 0?c[a]:t[a])}var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){c=Array(a);for(var d=0;d<a;d++)c[d]=arguments[d+2];i.children=c}return{$$typeof:Kn,type:e.type,key:s,ref:l,props:i,_owner:o}};L.createContext=function(e){return e={$$typeof:hu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mu,_context:e},e.Consumer=e};L.createElement=ta;L.createFactory=function(e){var t=ta.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:fu,render:e}};L.isValidElement=Ws;L.lazy=function(e){return{$$typeof:xu,_payload:{_status:-1,_result:e},_init:ku}};L.memo=function(e,t){return{$$typeof:vu,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Nr.transition;Nr.transition={};try{e()}finally{Nr.transition=t}};L.unstable_act=na;L.useCallback=function(e,t){return ue.current.useCallback(e,t)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,t){return ue.current.useEffect(e,t)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ue.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";Xo.exports=L;var C=Xo.exports;const Cu=au(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu=C,Eu=Symbol.for("react.element"),bu=Symbol.for("react.fragment"),Tu=Object.prototype.hasOwnProperty,Du=wu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pu={key:!0,ref:!0,__self:!0,__source:!0};function ra(e,t,n){var i,s={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)Tu.call(t,i)&&!Pu.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)s[i]===void 0&&(s[i]=t[i]);return{$$typeof:Eu,type:e,key:l,ref:o,props:s,_owner:Du.current}}ni.Fragment=bu;ni.jsx=ra;ni.jsxs=ra;Jo.exports=ni;var r=Jo.exports,Ji={},ia={exports:{}},ke={},sa={exports:{}},la={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,P){var F=E.length;E.push(P);e:for(;0<F;){var Q=F-1>>>1,Z=E[Q];if(0<s(Z,P))E[Q]=P,E[F]=Z,F=Q;else break e}}function n(E){return E.length===0?null:E[0]}function i(E){if(E.length===0)return null;var P=E[0],F=E.pop();if(F!==P){E[0]=F;e:for(var Q=0,Z=E.length,tr=Z>>>1;Q<tr;){var xt=2*(Q+1)-1,ji=E[xt],yt=xt+1,nr=E[yt];if(0>s(ji,F))yt<Z&&0>s(nr,ji)?(E[Q]=nr,E[yt]=F,Q=yt):(E[Q]=ji,E[xt]=F,Q=xt);else if(yt<Z&&0>s(nr,F))E[Q]=nr,E[yt]=F,Q=yt;else break e}}return P}function s(E,P){var F=E.sortIndex-P.sortIndex;return F!==0?F:E.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var a=[],d=[],h=1,v=null,f=3,N=!1,x=!1,k=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var P=n(d);P!==null;){if(P.callback===null)i(d);else if(P.startTime<=E)i(d),P.sortIndex=P.expirationTime,t(a,P);else break;P=n(d)}}function g(E){if(k=!1,p(E),!x)if(n(a)!==null)x=!0,xi(S);else{var P=n(d);P!==null&&yi(g,P.startTime-E)}}function S(E,P){x=!1,k&&(k=!1,m(y),y=-1),N=!0;var F=f;try{for(p(P),v=n(a);v!==null&&(!(v.expirationTime>P)||E&&!ve());){var Q=v.callback;if(typeof Q=="function"){v.callback=null,f=v.priorityLevel;var Z=Q(v.expirationTime<=P);P=e.unstable_now(),typeof Z=="function"?v.callback=Z:v===n(a)&&i(a),p(P)}else i(a);v=n(a)}if(v!==null)var tr=!0;else{var xt=n(d);xt!==null&&yi(g,xt.startTime-P),tr=!1}return tr}finally{v=null,f=F,N=!1}}var b=!1,T=null,y=-1,M=5,R=-1;function ve(){return!(e.unstable_now()-R<M)}function un(){if(T!==null){var E=e.unstable_now();R=E;var P=!0;try{P=T(!0,E)}finally{P?dn():(b=!1,T=null)}}else b=!1}var dn;if(typeof u=="function")dn=function(){u(un)};else if(typeof MessageChannel<"u"){var Ml=new MessageChannel,ou=Ml.port2;Ml.port1.onmessage=un,dn=function(){ou.postMessage(null)}}else dn=function(){I(un,0)};function xi(E){T=E,b||(b=!0,dn())}function yi(E,P){y=I(function(){E(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||N||(x=!0,xi(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(E){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var F=f;f=P;try{return E()}finally{f=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var F=f;f=E;try{return P()}finally{f=F}},e.unstable_scheduleCallback=function(E,P,F){var Q=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Q+F:Q):F=Q,E){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=F+Z,E={id:h++,callback:P,priorityLevel:E,startTime:F,expirationTime:Z,sortIndex:-1},F>Q?(E.sortIndex=F,t(d,E),n(a)===null&&E===n(d)&&(k?(m(y),y=-1):k=!0,yi(g,F-Q))):(E.sortIndex=Z,t(a,E),x||N||(x=!0,xi(S))),E},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(E){var P=f;return function(){var F=f;f=P;try{return E.apply(this,arguments)}finally{f=F}}}})(la);sa.exports=la;var Fu=sa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru=C,Ne=Fu;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oa=new Set,Ln={};function Rt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)oa.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xi=Object.prototype.hasOwnProperty,Lu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ul={},Ol={};function Iu(e){return Xi.call(Ol,e)?!0:Xi.call(Ul,e)?!1:Lu.test(e)?Ol[e]=!0:(Ul[e]=!0,!1)}function Au(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mu(e,t,n,i){if(t===null||typeof t>"u"||Au(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,i,s,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qs=/[\-:]([a-z])/g;function Js(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qs,Js);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qs,Js);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qs,Js);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xs(e,t,n,i){var s=re.hasOwnProperty(t)?re[t]:null;(s!==null?s.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mu(t,n,s,i)&&(n=null),i||s===null?Iu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,i=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Ge=Ru.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ir=Symbol.for("react.element"),At=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),Ys=Symbol.for("react.strict_mode"),Yi=Symbol.for("react.profiler"),aa=Symbol.for("react.provider"),ca=Symbol.for("react.context"),Ks=Symbol.for("react.forward_ref"),Ki=Symbol.for("react.suspense"),Gi=Symbol.for("react.suspense_list"),Gs=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ua=Symbol.for("react.offscreen"),Hl=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Hl&&e[Hl]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,ki;function jn(e){if(ki===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ki=t&&t[1]||""}return`
`+ki+e}var Si=!1;function Ci(e,t){if(!e||Si)return"";Si=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),l=i.stack.split(`
`),o=s.length-1,c=l.length-1;1<=o&&0<=c&&s[o]!==l[c];)c--;for(;1<=o&&0<=c;o--,c--)if(s[o]!==l[c]){if(o!==1||c!==1)do if(o--,c--,0>c||s[o]!==l[c]){var a=`
`+s[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=c);break}}}finally{Si=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function zu(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=Ci(e.type,!1),e;case 11:return e=Ci(e.type.render,!1),e;case 1:return e=Ci(e.type,!0),e;default:return""}}function Zi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case At:return"Portal";case Yi:return"Profiler";case Ys:return"StrictMode";case Ki:return"Suspense";case Gi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ca:return(e.displayName||"Context")+".Consumer";case aa:return(e._context.displayName||"Context")+".Provider";case Ks:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gs:return t=e.displayName||null,t!==null?t:Zi(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Zi(e(t))}catch{}}return null}function _u(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zi(t);case 8:return t===Ys?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function da(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bu(e){var t=da(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){i=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sr(e){e._valueTracker||(e._valueTracker=Bu(e))}function pa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=da(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qi(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vl(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ma(e,t){t=t.checked,t!=null&&Xs(e,"checked",t,!1)}function es(e,t){ma(e,t);var n=mt(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ts(e,t.type,n):t.hasOwnProperty("defaultValue")&&ts(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $l(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ts(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nn=Array.isArray;function Jt(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Nn(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function ha(e,t){var n=mt(t.value),i=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Ql(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,ga=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uu=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Uu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function va(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function xa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=va(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,s):e[n]=s}}var Ou=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function is(e,t){if(t){if(Ou[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ss(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ls=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var os=null,Xt=null,Yt=null;function Jl(e){if(e=qn(e)){if(typeof os!="function")throw Error(j(280));var t=e.stateNode;t&&(t=oi(t),os(e.stateNode,e.type,t))}}function ya(e){Xt?Yt?Yt.push(e):Yt=[e]:Xt=e}function ja(){if(Xt){var e=Xt,t=Yt;if(Yt=Xt=null,Jl(e),t)for(e=0;e<t.length;e++)Jl(t[e])}}function Na(e,t){return e(t)}function ka(){}var wi=!1;function Sa(e,t,n){if(wi)return e(t,n);wi=!0;try{return Na(e,t,n)}finally{wi=!1,(Xt!==null||Yt!==null)&&(ka(),ja())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var i=oi(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var as=!1;if(Je)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){as=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{as=!1}function Hu(e,t,n,i,s,l,o,c,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var wn=!1,Lr=null,Ir=!1,cs=null,Vu={onError:function(e){wn=!0,Lr=e}};function $u(e,t,n,i,s,l,o,c,a){wn=!1,Lr=null,Hu.apply(Vu,arguments)}function Wu(e,t,n,i,s,l,o,c,a){if($u.apply(this,arguments),wn){if(wn){var d=Lr;wn=!1,Lr=null}else throw Error(j(198));Ir||(Ir=!0,cs=d)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ca(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xl(e){if(Lt(e)!==e)throw Error(j(188))}function Qu(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var l=s.alternate;if(l===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===n)return Xl(s),e;if(l===i)return Xl(s),t;l=l.sibling}throw Error(j(188))}if(n.return!==i.return)n=s,i=l;else{for(var o=!1,c=s.child;c;){if(c===n){o=!0,n=s,i=l;break}if(c===i){o=!0,i=s,n=l;break}c=c.sibling}if(!o){for(c=l.child;c;){if(c===n){o=!0,n=l,i=s;break}if(c===i){o=!0,i=l,n=s;break}c=c.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function wa(e){return e=Qu(e),e!==null?Ea(e):null}function Ea(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ea(e);if(t!==null)return t;e=e.sibling}return null}var ba=Ne.unstable_scheduleCallback,Yl=Ne.unstable_cancelCallback,Ju=Ne.unstable_shouldYield,Xu=Ne.unstable_requestPaint,J=Ne.unstable_now,Yu=Ne.unstable_getCurrentPriorityLevel,qs=Ne.unstable_ImmediatePriority,Ta=Ne.unstable_UserBlockingPriority,Ar=Ne.unstable_NormalPriority,Ku=Ne.unstable_LowPriority,Da=Ne.unstable_IdlePriority,ri=null,Ue=null;function Gu(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(ri,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:ed,Zu=Math.log,qu=Math.LN2;function ed(e){return e>>>=0,e===0?32:31-(Zu(e)/qu|0)|0}var or=64,ar=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mr(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,s=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var c=o&~s;c!==0?i=kn(c):(l&=o,l!==0&&(i=kn(l)))}else o=n&~s,o!==0?i=kn(o):l!==0&&(i=kn(l));if(i===0)return 0;if(t!==0&&t!==i&&!(t&s)&&(s=i&-i,l=t&-t,s>=l||s===16&&(l&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-Ie(t),s=1<<n,i|=e[n],t&=~s;return i}function td(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nd(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ie(l),c=1<<o,a=s[o];a===-1?(!(c&n)||c&i)&&(s[o]=td(c,t)):a<=t&&(e.expiredLanes|=c),l&=~c}}function us(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pa(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Ei(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function rd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Ie(n),l=1<<s;t[s]=0,i[s]=-1,e[s]=-1,n&=~l}}function el(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ie(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}var z=0;function Fa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ra,tl,La,Ia,Aa,ds=!1,cr=[],st=null,lt=null,ot=null,Mn=new Map,zn=new Map,tt=[],id="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kl(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zn.delete(t.pointerId)}}function hn(e,t,n,i,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:l,targetContainers:[s]},t!==null&&(t=qn(t),t!==null&&tl(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function sd(e,t,n,i,s){switch(t){case"focusin":return st=hn(st,e,t,n,i,s),!0;case"dragenter":return lt=hn(lt,e,t,n,i,s),!0;case"mouseover":return ot=hn(ot,e,t,n,i,s),!0;case"pointerover":var l=s.pointerId;return Mn.set(l,hn(Mn.get(l)||null,e,t,n,i,s)),!0;case"gotpointercapture":return l=s.pointerId,zn.set(l,hn(zn.get(l)||null,e,t,n,i,s)),!0}return!1}function Ma(e){var t=kt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ca(n),t!==null){e.blockedOn=t,Aa(e.priority,function(){La(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ps(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);ls=i,n.target.dispatchEvent(i),ls=null}else return t=qn(n),t!==null&&tl(t),e.blockedOn=n,!1;t.shift()}return!0}function Gl(e,t,n){kr(e)&&n.delete(t)}function ld(){ds=!1,st!==null&&kr(st)&&(st=null),lt!==null&&kr(lt)&&(lt=null),ot!==null&&kr(ot)&&(ot=null),Mn.forEach(Gl),zn.forEach(Gl)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,ds||(ds=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,ld)))}function _n(e){function t(s){return fn(s,e)}if(0<cr.length){fn(cr[0],e);for(var n=1;n<cr.length;n++){var i=cr[n];i.blockedOn===e&&(i.blockedOn=null)}}for(st!==null&&fn(st,e),lt!==null&&fn(lt,e),ot!==null&&fn(ot,e),Mn.forEach(t),zn.forEach(t),n=0;n<tt.length;n++)i=tt[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)Ma(n),n.blockedOn===null&&tt.shift()}var Kt=Ge.ReactCurrentBatchConfig,zr=!0;function od(e,t,n,i){var s=z,l=Kt.transition;Kt.transition=null;try{z=1,nl(e,t,n,i)}finally{z=s,Kt.transition=l}}function ad(e,t,n,i){var s=z,l=Kt.transition;Kt.transition=null;try{z=4,nl(e,t,n,i)}finally{z=s,Kt.transition=l}}function nl(e,t,n,i){if(zr){var s=ps(e,t,n,i);if(s===null)Mi(e,t,i,_r,n),Kl(e,i);else if(sd(s,e,t,n,i))i.stopPropagation();else if(Kl(e,i),t&4&&-1<id.indexOf(e)){for(;s!==null;){var l=qn(s);if(l!==null&&Ra(l),l=ps(e,t,n,i),l===null&&Mi(e,t,i,_r,n),l===s)break;s=l}s!==null&&i.stopPropagation()}else Mi(e,t,i,null,n)}}var _r=null;function ps(e,t,n,i){if(_r=null,e=Zs(i),e=kt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ca(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return _r=e,null}function za(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yu()){case qs:return 1;case Ta:return 4;case Ar:case Ku:return 16;case Da:return 536870912;default:return 16}default:return 16}}var rt=null,rl=null,Sr=null;function _a(){if(Sr)return Sr;var e,t=rl,n=t.length,i,s="value"in rt?rt.value:rt.textContent,l=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(i=1;i<=o&&t[n-i]===s[l-i];i++);return Sr=s.slice(e,1<i?1-i:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Zl(){return!1}function Se(e){function t(n,i,s,l,o){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ur:Zl,this.isPropagationStopped=Zl,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Se(an),Zn=$({},an,{view:0,detail:0}),cd=Se(Zn),bi,Ti,gn,ii=$({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(bi=e.screenX-gn.screenX,Ti=e.screenY-gn.screenY):Ti=bi=0,gn=e),bi)},movementY:function(e){return"movementY"in e?e.movementY:Ti}}),ql=Se(ii),ud=$({},ii,{dataTransfer:0}),dd=Se(ud),pd=$({},Zn,{relatedTarget:0}),Di=Se(pd),md=$({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=Se(md),fd=$({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gd=Se(fd),vd=$({},an,{data:0}),eo=Se(vd),xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jd[e])?!!t[e]:!1}function sl(){return Nd}var kd=$({},Zn,{key:function(e){if(e.key){var t=xd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sl,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sd=Se(kd),Cd=$({},ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),to=Se(Cd),wd=$({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sl}),Ed=Se(wd),bd=$({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Td=Se(bd),Dd=$({},ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=Se(Dd),Fd=[9,13,27,32],ll=Je&&"CompositionEvent"in window,En=null;Je&&"documentMode"in document&&(En=document.documentMode);var Rd=Je&&"TextEvent"in window&&!En,Ba=Je&&(!ll||En&&8<En&&11>=En),no=String.fromCharCode(32),ro=!1;function Ua(e,t){switch(e){case"keyup":return Fd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zt=!1;function Ld(e,t){switch(e){case"compositionend":return Oa(t);case"keypress":return t.which!==32?null:(ro=!0,no);case"textInput":return e=t.data,e===no&&ro?null:e;default:return null}}function Id(e,t){if(zt)return e==="compositionend"||!ll&&Ua(e,t)?(e=_a(),Sr=rl=rt=null,zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ba&&t.locale!=="ko"?null:t.data;default:return null}}var Ad={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ad[e.type]:t==="textarea"}function Ha(e,t,n,i){ya(i),t=Br(t,"onChange"),0<t.length&&(n=new il("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var bn=null,Bn=null;function Md(e){qa(e,0)}function si(e){var t=Ut(e);if(pa(t))return e}function zd(e,t){if(e==="change")return t}var Va=!1;if(Je){var Pi;if(Je){var Fi="oninput"in document;if(!Fi){var so=document.createElement("div");so.setAttribute("oninput","return;"),Fi=typeof so.oninput=="function"}Pi=Fi}else Pi=!1;Va=Pi&&(!document.documentMode||9<document.documentMode)}function lo(){bn&&(bn.detachEvent("onpropertychange",$a),Bn=bn=null)}function $a(e){if(e.propertyName==="value"&&si(Bn)){var t=[];Ha(t,Bn,e,Zs(e)),Sa(Md,t)}}function _d(e,t,n){e==="focusin"?(lo(),bn=t,Bn=n,bn.attachEvent("onpropertychange",$a)):e==="focusout"&&lo()}function Bd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return si(Bn)}function Ud(e,t){if(e==="click")return si(t)}function Od(e,t){if(e==="input"||e==="change")return si(t)}function Hd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:Hd;function Un(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Xi.call(t,s)||!Me(e[s],t[s]))return!1}return!0}function oo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ao(e,t){var n=oo(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oo(n)}}function Wa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qa(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vd(e){var t=Qa(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wa(n.ownerDocument.documentElement,n)){if(i!==null&&ol(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,l=Math.min(i.start,s);i=i.end===void 0?l:Math.min(i.end,s),!e.extend&&l>i&&(s=i,i=l,l=s),s=ao(n,l);var o=ao(n,i);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),l>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $d=Je&&"documentMode"in document&&11>=document.documentMode,_t=null,ms=null,Tn=null,hs=!1;function co(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hs||_t==null||_t!==Rr(i)||(i=_t,"selectionStart"in i&&ol(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Tn&&Un(Tn,i)||(Tn=i,i=Br(ms,"onSelect"),0<i.length&&(t=new il("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=_t)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bt={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Ri={},Ja={};Je&&(Ja=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function li(e){if(Ri[e])return Ri[e];if(!Bt[e])return e;var t=Bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ja)return Ri[e]=t[n];return e}var Xa=li("animationend"),Ya=li("animationiteration"),Ka=li("animationstart"),Ga=li("transitionend"),Za=new Map,uo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){Za.set(e,t),Rt(t,[e])}for(var Li=0;Li<uo.length;Li++){var Ii=uo[Li],Wd=Ii.toLowerCase(),Qd=Ii[0].toUpperCase()+Ii.slice(1);ft(Wd,"on"+Qd)}ft(Xa,"onAnimationEnd");ft(Ya,"onAnimationIteration");ft(Ka,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(Ga,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function po(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Wu(i,t,void 0,e),e.currentTarget=null}function qa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var o=i.length-1;0<=o;o--){var c=i[o],a=c.instance,d=c.currentTarget;if(c=c.listener,a!==l&&s.isPropagationStopped())break e;po(s,c,d),l=a}else for(o=0;o<i.length;o++){if(c=i[o],a=c.instance,d=c.currentTarget,c=c.listener,a!==l&&s.isPropagationStopped())break e;po(s,c,d),l=a}}}if(Ir)throw e=cs,Ir=!1,cs=null,e}function B(e,t){var n=t[ys];n===void 0&&(n=t[ys]=new Set);var i=e+"__bubble";n.has(i)||(ec(t,e,2,!1),n.add(i))}function Ai(e,t,n){var i=0;t&&(i|=4),ec(n,e,i,t)}var pr="_reactListening"+Math.random().toString(36).slice(2);function On(e){if(!e[pr]){e[pr]=!0,oa.forEach(function(n){n!=="selectionchange"&&(Jd.has(n)||Ai(n,!1,e),Ai(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pr]||(t[pr]=!0,Ai("selectionchange",!1,t))}}function ec(e,t,n,i){switch(za(t)){case 1:var s=od;break;case 4:s=ad;break;default:s=nl}n=s.bind(null,t,n,e),s=void 0,!as||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Mi(e,t,n,i,s){var l=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var c=i.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(o===4)for(o=i.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;o=o.return}for(;c!==null;){if(o=kt(c),o===null)return;if(a=o.tag,a===5||a===6){i=l=o;continue e}c=c.parentNode}}i=i.return}Sa(function(){var d=l,h=Zs(n),v=[];e:{var f=Za.get(e);if(f!==void 0){var N=il,x=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":N=Sd;break;case"focusin":x="focus",N=Di;break;case"focusout":x="blur",N=Di;break;case"beforeblur":case"afterblur":N=Di;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Ed;break;case Xa:case Ya:case Ka:N=hd;break;case Ga:N=Td;break;case"scroll":N=cd;break;case"wheel":N=Pd;break;case"copy":case"cut":case"paste":N=gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=to}var k=(t&4)!==0,I=!k&&e==="scroll",m=k?f!==null?f+"Capture":null:f;k=[];for(var u=d,p;u!==null;){p=u;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,m!==null&&(g=An(u,m),g!=null&&k.push(Hn(u,g,p)))),I)break;u=u.return}0<k.length&&(f=new N(f,x,null,n,h),v.push({event:f,listeners:k}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",f&&n!==ls&&(x=n.relatedTarget||n.fromElement)&&(kt(x)||x[Xe]))break e;if((N||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,N?(x=n.relatedTarget||n.toElement,N=d,x=x?kt(x):null,x!==null&&(I=Lt(x),x!==I||x.tag!==5&&x.tag!==6)&&(x=null)):(N=null,x=d),N!==x)){if(k=ql,g="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=to,g="onPointerLeave",m="onPointerEnter",u="pointer"),I=N==null?f:Ut(N),p=x==null?f:Ut(x),f=new k(g,u+"leave",N,n,h),f.target=I,f.relatedTarget=p,g=null,kt(h)===d&&(k=new k(m,u+"enter",x,n,h),k.target=p,k.relatedTarget=I,g=k),I=g,N&&x)t:{for(k=N,m=x,u=0,p=k;p;p=It(p))u++;for(p=0,g=m;g;g=It(g))p++;for(;0<u-p;)k=It(k),u--;for(;0<p-u;)m=It(m),p--;for(;u--;){if(k===m||m!==null&&k===m.alternate)break t;k=It(k),m=It(m)}k=null}else k=null;N!==null&&mo(v,f,N,k,!1),x!==null&&I!==null&&mo(v,I,x,k,!0)}}e:{if(f=d?Ut(d):window,N=f.nodeName&&f.nodeName.toLowerCase(),N==="select"||N==="input"&&f.type==="file")var S=zd;else if(io(f))if(Va)S=Od;else{S=Bd;var b=_d}else(N=f.nodeName)&&N.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Ud);if(S&&(S=S(e,d))){Ha(v,S,n,h);break e}b&&b(e,f,d),e==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&ts(f,"number",f.value)}switch(b=d?Ut(d):window,e){case"focusin":(io(b)||b.contentEditable==="true")&&(_t=b,ms=d,Tn=null);break;case"focusout":Tn=ms=_t=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,co(v,n,h);break;case"selectionchange":if($d)break;case"keydown":case"keyup":co(v,n,h)}var T;if(ll)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else zt?Ua(e,n)&&(y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Ba&&n.locale!=="ko"&&(zt||y!=="onCompositionStart"?y==="onCompositionEnd"&&zt&&(T=_a()):(rt=h,rl="value"in rt?rt.value:rt.textContent,zt=!0)),b=Br(d,y),0<b.length&&(y=new eo(y,e,null,n,h),v.push({event:y,listeners:b}),T?y.data=T:(T=Oa(n),T!==null&&(y.data=T)))),(T=Rd?Ld(e,n):Id(e,n))&&(d=Br(d,"onBeforeInput"),0<d.length&&(h=new eo("onBeforeInput","beforeinput",null,n,h),v.push({event:h,listeners:d}),h.data=T))}qa(v,t)})}function Hn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=An(e,n),l!=null&&i.unshift(Hn(e,l,s)),l=An(e,t),l!=null&&i.push(Hn(e,l,s))),e=e.return}return i}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mo(e,t,n,i,s){for(var l=t._reactName,o=[];n!==null&&n!==i;){var c=n,a=c.alternate,d=c.stateNode;if(a!==null&&a===i)break;c.tag===5&&d!==null&&(c=d,s?(a=An(n,l),a!=null&&o.unshift(Hn(n,a,c))):s||(a=An(n,l),a!=null&&o.push(Hn(n,a,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xd=/\r\n?/g,Yd=/\u0000|\uFFFD/g;function ho(e){return(typeof e=="string"?e:""+e).replace(Xd,`
`).replace(Yd,"")}function mr(e,t,n){if(t=ho(t),ho(e)!==t&&n)throw Error(j(425))}function Ur(){}var fs=null,gs=null;function vs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xs=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,fo=typeof Promise=="function"?Promise:void 0,Gd=typeof queueMicrotask=="function"?queueMicrotask:typeof fo<"u"?function(e){return fo.resolve(null).then(e).catch(Zd)}:xs;function Zd(e){setTimeout(function(){throw e})}function zi(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){e.removeChild(s),_n(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);_n(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function go(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),Be="__reactFiber$"+cn,Vn="__reactProps$"+cn,Xe="__reactContainer$"+cn,ys="__reactEvents$"+cn,qd="__reactListeners$"+cn,ep="__reactHandles$"+cn;function kt(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=go(e);e!==null;){if(n=e[Be])return n;e=go(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Be]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function oi(e){return e[Vn]||null}var js=[],Ot=-1;function gt(e){return{current:e}}function U(e){0>Ot||(e.current=js[Ot],js[Ot]=null,Ot--)}function _(e,t){Ot++,js[Ot]=e.current,e.current=t}var ht={},oe=gt(ht),he=gt(!1),bt=ht;function en(e,t){var n=e.type.contextTypes;if(!n)return ht;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in n)s[l]=t[l];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function fe(e){return e=e.childContextTypes,e!=null}function Or(){U(he),U(oe)}function vo(e,t,n){if(oe.current!==ht)throw Error(j(168));_(oe,t),_(he,n)}function tc(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in t))throw Error(j(108,_u(e)||"Unknown",s));return $({},n,i)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ht,bt=oe.current,_(oe,e),_(he,he.current),!0}function xo(e,t,n){var i=e.stateNode;if(!i)throw Error(j(169));n?(e=tc(e,t,bt),i.__reactInternalMemoizedMergedChildContext=e,U(he),U(oe),_(oe,e)):U(he),_(he,n)}var Ve=null,ai=!1,_i=!1;function nc(e){Ve===null?Ve=[e]:Ve.push(e)}function tp(e){ai=!0,nc(e)}function vt(){if(!_i&&Ve!==null){_i=!0;var e=0,t=z;try{var n=Ve;for(z=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Ve=null,ai=!1}catch(s){throw Ve!==null&&(Ve=Ve.slice(e+1)),ba(qs,vt),s}finally{z=t,_i=!1}}return null}var Ht=[],Vt=0,Vr=null,$r=0,Ce=[],we=0,Tt=null,$e=1,We="";function jt(e,t){Ht[Vt++]=$r,Ht[Vt++]=Vr,Vr=e,$r=t}function rc(e,t,n){Ce[we++]=$e,Ce[we++]=We,Ce[we++]=Tt,Tt=e;var i=$e;e=We;var s=32-Ie(i)-1;i&=~(1<<s),n+=1;var l=32-Ie(t)+s;if(30<l){var o=s-s%5;l=(i&(1<<o)-1).toString(32),i>>=o,s-=o,$e=1<<32-Ie(t)+s|n<<s|i,We=l+e}else $e=1<<l|n<<s|i,We=e}function al(e){e.return!==null&&(jt(e,1),rc(e,1,0))}function cl(e){for(;e===Vr;)Vr=Ht[--Vt],Ht[Vt]=null,$r=Ht[--Vt],Ht[Vt]=null;for(;e===Tt;)Tt=Ce[--we],Ce[we]=null,We=Ce[--we],Ce[we]=null,$e=Ce[--we],Ce[we]=null}var je=null,ye=null,O=!1,Le=null;function ic(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,ye=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:$e,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,ye=null,!0):!1;default:return!1}}function Ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ks(e){if(O){var t=ye;if(t){var n=t;if(!yo(e,t)){if(Ns(e))throw Error(j(418));t=at(n.nextSibling);var i=je;t&&yo(e,t)?ic(i,n):(e.flags=e.flags&-4097|2,O=!1,je=e)}}else{if(Ns(e))throw Error(j(418));e.flags=e.flags&-4097|2,O=!1,je=e}}}function jo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function hr(e){if(e!==je)return!1;if(!O)return jo(e),O=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vs(e.type,e.memoizedProps)),t&&(t=ye)){if(Ns(e))throw sc(),Error(j(418));for(;t;)ic(e,t),t=at(t.nextSibling)}if(jo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=je?at(e.stateNode.nextSibling):null;return!0}function sc(){for(var e=ye;e;)e=at(e.nextSibling)}function tn(){ye=je=null,O=!1}function ul(e){Le===null?Le=[e]:Le.push(e)}var np=Ge.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var i=n.stateNode}if(!i)throw Error(j(147,e));var s=i,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var c=s.refs;o===null?delete c[l]:c[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function fr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function No(e){var t=e._init;return t(e._payload)}function lc(e){function t(m,u){if(e){var p=m.deletions;p===null?(m.deletions=[u],m.flags|=16):p.push(u)}}function n(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function i(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function s(m,u){return m=pt(m,u),m.index=0,m.sibling=null,m}function l(m,u,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<u?(m.flags|=2,u):p):(m.flags|=2,u)):(m.flags|=1048576,u)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,u,p,g){return u===null||u.tag!==6?(u=Wi(p,m.mode,g),u.return=m,u):(u=s(u,p),u.return=m,u)}function a(m,u,p,g){var S=p.type;return S===Mt?h(m,u,p.props.children,g,p.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&No(S)===u.type)?(g=s(u,p.props),g.ref=vn(m,u,p),g.return=m,g):(g=Fr(p.type,p.key,p.props,null,m.mode,g),g.ref=vn(m,u,p),g.return=m,g)}function d(m,u,p,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Qi(p,m.mode,g),u.return=m,u):(u=s(u,p.children||[]),u.return=m,u)}function h(m,u,p,g,S){return u===null||u.tag!==7?(u=Et(p,m.mode,g,S),u.return=m,u):(u=s(u,p),u.return=m,u)}function v(m,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Wi(""+u,m.mode,p),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ir:return p=Fr(u.type,u.key,u.props,null,m.mode,p),p.ref=vn(m,null,u),p.return=m,p;case At:return u=Qi(u,m.mode,p),u.return=m,u;case qe:var g=u._init;return v(m,g(u._payload),p)}if(Nn(u)||pn(u))return u=Et(u,m.mode,p,null),u.return=m,u;fr(m,u)}return null}function f(m,u,p,g){var S=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:c(m,u,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ir:return p.key===S?a(m,u,p,g):null;case At:return p.key===S?d(m,u,p,g):null;case qe:return S=p._init,f(m,u,S(p._payload),g)}if(Nn(p)||pn(p))return S!==null?null:h(m,u,p,g,null);fr(m,p)}return null}function N(m,u,p,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return m=m.get(p)||null,c(u,m,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ir:return m=m.get(g.key===null?p:g.key)||null,a(u,m,g,S);case At:return m=m.get(g.key===null?p:g.key)||null,d(u,m,g,S);case qe:var b=g._init;return N(m,u,p,b(g._payload),S)}if(Nn(g)||pn(g))return m=m.get(p)||null,h(u,m,g,S,null);fr(u,g)}return null}function x(m,u,p,g){for(var S=null,b=null,T=u,y=u=0,M=null;T!==null&&y<p.length;y++){T.index>y?(M=T,T=null):M=T.sibling;var R=f(m,T,p[y],g);if(R===null){T===null&&(T=M);break}e&&T&&R.alternate===null&&t(m,T),u=l(R,u,y),b===null?S=R:b.sibling=R,b=R,T=M}if(y===p.length)return n(m,T),O&&jt(m,y),S;if(T===null){for(;y<p.length;y++)T=v(m,p[y],g),T!==null&&(u=l(T,u,y),b===null?S=T:b.sibling=T,b=T);return O&&jt(m,y),S}for(T=i(m,T);y<p.length;y++)M=N(T,m,y,p[y],g),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?y:M.key),u=l(M,u,y),b===null?S=M:b.sibling=M,b=M);return e&&T.forEach(function(ve){return t(m,ve)}),O&&jt(m,y),S}function k(m,u,p,g){var S=pn(p);if(typeof S!="function")throw Error(j(150));if(p=S.call(p),p==null)throw Error(j(151));for(var b=S=null,T=u,y=u=0,M=null,R=p.next();T!==null&&!R.done;y++,R=p.next()){T.index>y?(M=T,T=null):M=T.sibling;var ve=f(m,T,R.value,g);if(ve===null){T===null&&(T=M);break}e&&T&&ve.alternate===null&&t(m,T),u=l(ve,u,y),b===null?S=ve:b.sibling=ve,b=ve,T=M}if(R.done)return n(m,T),O&&jt(m,y),S;if(T===null){for(;!R.done;y++,R=p.next())R=v(m,R.value,g),R!==null&&(u=l(R,u,y),b===null?S=R:b.sibling=R,b=R);return O&&jt(m,y),S}for(T=i(m,T);!R.done;y++,R=p.next())R=N(T,m,y,R.value,g),R!==null&&(e&&R.alternate!==null&&T.delete(R.key===null?y:R.key),u=l(R,u,y),b===null?S=R:b.sibling=R,b=R);return e&&T.forEach(function(un){return t(m,un)}),O&&jt(m,y),S}function I(m,u,p,g){if(typeof p=="object"&&p!==null&&p.type===Mt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ir:e:{for(var S=p.key,b=u;b!==null;){if(b.key===S){if(S=p.type,S===Mt){if(b.tag===7){n(m,b.sibling),u=s(b,p.props.children),u.return=m,m=u;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&No(S)===b.type){n(m,b.sibling),u=s(b,p.props),u.ref=vn(m,b,p),u.return=m,m=u;break e}n(m,b);break}else t(m,b);b=b.sibling}p.type===Mt?(u=Et(p.props.children,m.mode,g,p.key),u.return=m,m=u):(g=Fr(p.type,p.key,p.props,null,m.mode,g),g.ref=vn(m,u,p),g.return=m,m=g)}return o(m);case At:e:{for(b=p.key;u!==null;){if(u.key===b)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(m,u.sibling),u=s(u,p.children||[]),u.return=m,m=u;break e}else{n(m,u);break}else t(m,u);u=u.sibling}u=Qi(p,m.mode,g),u.return=m,m=u}return o(m);case qe:return b=p._init,I(m,u,b(p._payload),g)}if(Nn(p))return x(m,u,p,g);if(pn(p))return k(m,u,p,g);fr(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(m,u.sibling),u=s(u,p),u.return=m,m=u):(n(m,u),u=Wi(p,m.mode,g),u.return=m,m=u),o(m)):n(m,u)}return I}var nn=lc(!0),oc=lc(!1),Wr=gt(null),Qr=null,$t=null,dl=null;function pl(){dl=$t=Qr=null}function ml(e){var t=Wr.current;U(Wr),e._currentValue=t}function Ss(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Gt(e,t){Qr=e,dl=$t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(dl!==e)if(e={context:e,memoizedValue:t,next:null},$t===null){if(Qr===null)throw Error(j(308));$t=e,Qr.dependencies={lanes:0,firstContext:e}}else $t=$t.next=e;return t}var St=null;function hl(e){St===null?St=[e]:St.push(e)}function ac(e,t,n,i){var s=t.interleaved;return s===null?(n.next=n,hl(t)):(n.next=s.next,s.next=n),t.interleaved=n,Ye(e,i)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,A&2){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,Ye(e,n)}return s=i.interleaved,s===null?(t.next=t,hl(i)):(t.next=s.next,s.next=t),i.interleaved=t,Ye(e,n)}function wr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,el(e,n)}}function ko(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?s=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?s=l=t:l=l.next=t}else s=l=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jr(e,t,n,i){var s=e.updateQueue;et=!1;var l=s.firstBaseUpdate,o=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var a=c,d=a.next;a.next=null,o===null?l=d:o.next=d,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==o&&(c===null?h.firstBaseUpdate=d:c.next=d,h.lastBaseUpdate=a))}if(l!==null){var v=s.baseState;o=0,h=d=a=null,c=l;do{var f=c.lane,N=c.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:N,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var x=e,k=c;switch(f=t,N=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){v=x.call(N,v,f);break e}v=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,f=typeof x=="function"?x.call(N,v,f):x,f==null)break e;v=$({},v,f);break e;case 2:et=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[c]:f.push(c))}else N={eventTime:N,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(d=h=N,a=v):h=h.next=N,o|=f;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;f=c,c=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(1);if(h===null&&(a=v),s.baseState=a,s.firstBaseUpdate=d,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else l===null&&(s.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=v}}function So(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(j(191,s));s.call(i)}}}var er={},Oe=gt(er),$n=gt(er),Wn=gt(er);function Ct(e){if(e===er)throw Error(j(174));return e}function gl(e,t){switch(_(Wn,t),_($n,e),_(Oe,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rs(t,e)}U(Oe),_(Oe,t)}function rn(){U(Oe),U($n),U(Wn)}function uc(e){Ct(Wn.current);var t=Ct(Oe.current),n=rs(t,e.type);t!==n&&(_($n,e),_(Oe,n))}function vl(e){$n.current===e&&(U(Oe),U($n))}var H=gt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bi=[];function xl(){for(var e=0;e<Bi.length;e++)Bi[e]._workInProgressVersionPrimary=null;Bi.length=0}var Er=Ge.ReactCurrentDispatcher,Ui=Ge.ReactCurrentBatchConfig,Dt=0,V=null,Y=null,q=null,Yr=!1,Dn=!1,Qn=0,rp=0;function ie(){throw Error(j(321))}function yl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function jl(e,t,n,i,s,l){if(Dt=l,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?op:ap,e=n(i,s),Dn){l=0;do{if(Dn=!1,Qn=0,25<=l)throw Error(j(301));l+=1,q=Y=null,t.updateQueue=null,Er.current=cp,e=n(i,s)}while(Dn)}if(Er.current=Kr,t=Y!==null&&Y.next!==null,Dt=0,q=Y=V=null,Yr=!1,t)throw Error(j(300));return e}function Nl(){var e=Qn!==0;return Qn=0,e}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=e:q=q.next=e,q}function De(){if(Y===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=q===null?V.memoizedState:q.next;if(t!==null)q=t,Y=e;else{if(e===null)throw Error(j(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},q===null?V.memoizedState=q=e:q=q.next=e}return q}function Jn(e,t){return typeof t=="function"?t(e):t}function Oi(e){var t=De(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=Y,s=i.baseQueue,l=n.pending;if(l!==null){if(s!==null){var o=s.next;s.next=l.next,l.next=o}i.baseQueue=s=l,n.pending=null}if(s!==null){l=s.next,i=i.baseState;var c=o=null,a=null,d=l;do{var h=d.lane;if((Dt&h)===h)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var v={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(c=a=v,o=i):a=a.next=v,V.lanes|=h,Pt|=h}d=d.next}while(d!==null&&d!==l);a===null?o=i:a.next=c,Me(i,t.memoizedState)||(me=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=a,n.lastRenderedState=i}if(e=n.interleaved,e!==null){s=e;do l=s.lane,V.lanes|=l,Pt|=l,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hi(e){var t=De(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,l=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do l=e(l,o.action),o=o.next;while(o!==s);Me(l,t.memoizedState)||(me=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,i]}function dc(){}function pc(e,t){var n=V,i=De(),s=t(),l=!Me(i.memoizedState,s);if(l&&(i.memoizedState=s,me=!0),i=i.queue,kl(fc.bind(null,n,i,e),[e]),i.getSnapshot!==t||l||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,Xn(9,hc.bind(null,n,i,s,t),void 0,null),ee===null)throw Error(j(349));Dt&30||mc(n,t,s)}return s}function mc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hc(e,t,n,i){t.value=n,t.getSnapshot=i,gc(t)&&vc(e)}function fc(e,t,n){return n(function(){gc(t)&&vc(e)})}function gc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function vc(e){var t=Ye(e,1);t!==null&&Ae(t,e,1,-1)}function Co(e){var t=_e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=lp.bind(null,V,e),[t.memoizedState,e]}function Xn(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function xc(){return De().memoizedState}function br(e,t,n,i){var s=_e();V.flags|=e,s.memoizedState=Xn(1|t,n,void 0,i===void 0?null:i)}function ci(e,t,n,i){var s=De();i=i===void 0?null:i;var l=void 0;if(Y!==null){var o=Y.memoizedState;if(l=o.destroy,i!==null&&yl(i,o.deps)){s.memoizedState=Xn(t,n,l,i);return}}V.flags|=e,s.memoizedState=Xn(1|t,n,l,i)}function wo(e,t){return br(8390656,8,e,t)}function kl(e,t){return ci(2048,8,e,t)}function yc(e,t){return ci(4,2,e,t)}function jc(e,t){return ci(4,4,e,t)}function Nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kc(e,t,n){return n=n!=null?n.concat([e]):null,ci(4,4,Nc.bind(null,t,e),n)}function Sl(){}function Sc(e,t){var n=De();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&yl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Cc(e,t){var n=De();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&yl(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function wc(e,t,n){return Dt&21?(Me(n,t)||(n=Pa(),V.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function ip(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var i=Ui.transition;Ui.transition={};try{e(!1),t()}finally{z=n,Ui.transition=i}}function Ec(){return De().memoizedState}function sp(e,t,n){var i=dt(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},bc(e))Tc(t,n);else if(n=ac(e,t,n,i),n!==null){var s=ce();Ae(n,e,i,s),Dc(n,t,i)}}function lp(e,t,n){var i=dt(e),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(bc(e))Tc(t,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,c=l(o,n);if(s.hasEagerState=!0,s.eagerState=c,Me(c,o)){var a=t.interleaved;a===null?(s.next=s,hl(t)):(s.next=a.next,a.next=s),t.interleaved=s;return}}catch{}finally{}n=ac(e,t,s,i),n!==null&&(s=ce(),Ae(n,e,i,s),Dc(n,t,i))}}function bc(e){var t=e.alternate;return e===V||t!==null&&t===V}function Tc(e,t){Dn=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dc(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,el(e,n)}}var Kr={readContext:Te,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},op={readContext:Te,useCallback:function(e,t){return _e().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:wo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,br(4194308,4,Nc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return br(4194308,4,e,t)},useInsertionEffect:function(e,t){return br(4,2,e,t)},useMemo:function(e,t){var n=_e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=_e();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=sp.bind(null,V,e),[i.memoizedState,e]},useRef:function(e){var t=_e();return e={current:e},t.memoizedState=e},useState:Co,useDebugValue:Sl,useDeferredValue:function(e){return _e().memoizedState=e},useTransition:function(){var e=Co(!1),t=e[0];return e=ip.bind(null,e[1]),_e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=V,s=_e();if(O){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ee===null)throw Error(j(349));Dt&30||mc(i,t,n)}s.memoizedState=n;var l={value:n,getSnapshot:t};return s.queue=l,wo(fc.bind(null,i,l,e),[e]),i.flags|=2048,Xn(9,hc.bind(null,i,l,n,t),void 0,null),n},useId:function(){var e=_e(),t=ee.identifierPrefix;if(O){var n=We,i=$e;n=(i&~(1<<32-Ie(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ap={readContext:Te,useCallback:Sc,useContext:Te,useEffect:kl,useImperativeHandle:kc,useInsertionEffect:yc,useLayoutEffect:jc,useMemo:Cc,useReducer:Oi,useRef:xc,useState:function(){return Oi(Jn)},useDebugValue:Sl,useDeferredValue:function(e){var t=De();return wc(t,Y.memoizedState,e)},useTransition:function(){var e=Oi(Jn)[0],t=De().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:pc,useId:Ec,unstable_isNewReconciler:!1},cp={readContext:Te,useCallback:Sc,useContext:Te,useEffect:kl,useImperativeHandle:kc,useInsertionEffect:yc,useLayoutEffect:jc,useMemo:Cc,useReducer:Hi,useRef:xc,useState:function(){return Hi(Jn)},useDebugValue:Sl,useDeferredValue:function(e){var t=De();return Y===null?t.memoizedState=e:wc(t,Y.memoizedState,e)},useTransition:function(){var e=Hi(Jn)[0],t=De().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:pc,useId:Ec,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Cs(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ce(),s=dt(e),l=Qe(i,s);l.payload=t,n!=null&&(l.callback=n),t=ct(e,l,s),t!==null&&(Ae(t,e,s,i),wr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ce(),s=dt(e),l=Qe(i,s);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ct(e,l,s),t!==null&&(Ae(t,e,s,i),wr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),i=dt(e),s=Qe(n,i);s.tag=2,t!=null&&(s.callback=t),t=ct(e,s,i),t!==null&&(Ae(t,e,i,n),wr(t,e,i))}};function Eo(e,t,n,i,s,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,o):t.prototype&&t.prototype.isPureReactComponent?!Un(n,i)||!Un(s,l):!0}function Pc(e,t,n){var i=!1,s=ht,l=t.contextType;return typeof l=="object"&&l!==null?l=Te(l):(s=fe(t)?bt:oe.current,i=t.contextTypes,l=(i=i!=null)?en(e,s):ht),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),t}function bo(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function ws(e,t,n,i){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},fl(e);var l=t.contextType;typeof l=="object"&&l!==null?s.context=Te(l):(l=fe(t)?bt:oe.current,s.context=en(e,l)),s.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Cs(e,t,l,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ui.enqueueReplaceState(s,s.state,null),Jr(e,n,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function sn(e,t){try{var n="",i=t;do n+=zu(i),i=i.return;while(i);var s=n}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:s,digest:null}}function Vi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Es(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var up=typeof WeakMap=="function"?WeakMap:Map;function Fc(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Zr||(Zr=!0,Ms=i),Es(e,t)},n}function Rc(e,t,n){n=Qe(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=t.value;n.payload=function(){return i(s)},n.callback=function(){Es(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Es(e,t),typeof i!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function To(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new up;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(s.add(n),e=Cp.bind(null,e,t,n),t.then(e,e))}function Do(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Po(e,t,n,i,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var dp=Ge.ReactCurrentOwner,me=!1;function ae(e,t,n,i){t.child=e===null?oc(t,null,n,i):nn(t,e.child,n,i)}function Fo(e,t,n,i,s){n=n.render;var l=t.ref;return Gt(t,s),i=jl(e,t,n,i,l,s),n=Nl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ke(e,t,s)):(O&&n&&al(t),t.flags|=1,ae(e,t,i,s),t.child)}function Ro(e,t,n,i,s){if(e===null){var l=n.type;return typeof l=="function"&&!Fl(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Lc(e,t,l,i,s)):(e=Fr(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&s)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(o,i)&&e.ref===t.ref)return Ke(e,t,s)}return t.flags|=1,e=pt(l,i),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,i,s){if(e!==null){var l=e.memoizedProps;if(Un(l,i)&&e.ref===t.ref)if(me=!1,t.pendingProps=i=l,(e.lanes&s)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Ke(e,t,s)}return bs(e,t,n,i,s)}function Ic(e,t,n){var i=t.pendingProps,s=i.children,l=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(Qt,xe),xe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(Qt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=l!==null?l.baseLanes:n,_(Qt,xe),xe|=i}else l!==null?(i=l.baseLanes|n,t.memoizedState=null):i=n,_(Qt,xe),xe|=i;return ae(e,t,s,n),t.child}function Ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bs(e,t,n,i,s){var l=fe(n)?bt:oe.current;return l=en(t,l),Gt(t,s),n=jl(e,t,n,i,l,s),i=Nl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ke(e,t,s)):(O&&i&&al(t),t.flags|=1,ae(e,t,n,s),t.child)}function Lo(e,t,n,i,s){if(fe(n)){var l=!0;Hr(t)}else l=!1;if(Gt(t,s),t.stateNode===null)Tr(e,t),Pc(t,n,i),ws(t,n,i,s),i=!0;else if(e===null){var o=t.stateNode,c=t.memoizedProps;o.props=c;var a=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Te(d):(d=fe(n)?bt:oe.current,d=en(t,d));var h=n.getDerivedStateFromProps,v=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==i||a!==d)&&bo(t,o,i,d),et=!1;var f=t.memoizedState;o.state=f,Jr(t,i,o,s),a=t.memoizedState,c!==i||f!==a||he.current||et?(typeof h=="function"&&(Cs(t,n,h,i),a=t.memoizedState),(c=et||Eo(t,n,c,i,f,a,d))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=a),o.props=i,o.state=a,o.context=d,i=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,cc(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:Fe(t.type,c),o.props=d,v=t.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Te(a):(a=fe(n)?bt:oe.current,a=en(t,a));var N=n.getDerivedStateFromProps;(h=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==v||f!==a)&&bo(t,o,i,a),et=!1,f=t.memoizedState,o.state=f,Jr(t,i,o,s);var x=t.memoizedState;c!==v||f!==x||he.current||et?(typeof N=="function"&&(Cs(t,n,N,i),x=t.memoizedState),(d=et||Eo(t,n,d,i,f,x,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=x),o.props=i,o.state=x,o.context=a,i=d):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return Ts(e,t,n,i,l,s)}function Ts(e,t,n,i,s,l){Ac(e,t);var o=(t.flags&128)!==0;if(!i&&!o)return s&&xo(t,n,!1),Ke(e,t,l);i=t.stateNode,dp.current=t;var c=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&o?(t.child=nn(t,e.child,null,l),t.child=nn(t,null,c,l)):ae(e,t,c,l),t.memoizedState=i.state,s&&xo(t,n,!0),t.child}function Mc(e){var t=e.stateNode;t.pendingContext?vo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vo(e,t.context,!1),gl(e,t.containerInfo)}function Io(e,t,n,i,s){return tn(),ul(s),t.flags|=256,ae(e,t,n,i),t.child}var Ds={dehydrated:null,treeContext:null,retryLane:0};function Ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function zc(e,t,n){var i=t.pendingProps,s=H.current,l=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(s&2)!==0),c?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),_(H,s&1),e===null)return ks(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,l?(i=t.mode,l=t.child,o={mode:"hidden",children:o},!(i&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=mi(o,i,0,null),e=Et(e,i,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ps(n),t.memoizedState=Ds,e):Cl(t,o));if(s=e.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return pp(e,t,o,i,c,s,n);if(l){l=i.fallback,o=t.mode,s=e.child,c=s.sibling;var a={mode:"hidden",children:i.children};return!(o&1)&&t.child!==s?(i=t.child,i.childLanes=0,i.pendingProps=a,t.deletions=null):(i=pt(s,a),i.subtreeFlags=s.subtreeFlags&14680064),c!==null?l=pt(c,l):(l=Et(l,o,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,o=e.child.memoizedState,o=o===null?Ps(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Ds,i}return l=e.child,e=l.sibling,i=pt(l,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Cl(e,t){return t=mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,i){return i!==null&&ul(i),nn(t,e.child,null,n),e=Cl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pp(e,t,n,i,s,l,o){if(n)return t.flags&256?(t.flags&=-257,i=Vi(Error(j(422))),gr(e,t,o,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=i.fallback,s=t.mode,i=mi({mode:"visible",children:i.children},s,0,null),l=Et(l,s,o,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,t.mode&1&&nn(t,e.child,null,o),t.child.memoizedState=Ps(o),t.memoizedState=Ds,l);if(!(t.mode&1))return gr(e,t,o,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var c=i.dgst;return i=c,l=Error(j(419)),i=Vi(l,i,void 0),gr(e,t,o,i)}if(c=(o&e.childLanes)!==0,me||c){if(i=ee,i!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|o)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,Ye(e,s),Ae(i,e,s,-1))}return Pl(),i=Vi(Error(j(421))),gr(e,t,o,i)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=wp.bind(null,e),s._reactRetry=t,null):(e=l.treeContext,ye=at(s.nextSibling),je=t,O=!0,Le=null,e!==null&&(Ce[we++]=$e,Ce[we++]=We,Ce[we++]=Tt,$e=e.id,We=e.overflow,Tt=t),t=Cl(t,i.children),t.flags|=4096,t)}function Ao(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ss(e.return,t,n)}function $i(e,t,n,i,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=i,l.tail=n,l.tailMode=s)}function _c(e,t,n){var i=t.pendingProps,s=i.revealOrder,l=i.tail;if(ae(e,t,i.children,n),i=H.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ao(e,n,t);else if(e.tag===19)Ao(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(_(H,i),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),$i(t,!1,s,n,l);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Xr(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}$i(t,!0,n,null,l);break;case"together":$i(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mp(e,t,n){switch(t.tag){case 3:Mc(t),tn();break;case 5:uc(t);break;case 1:fe(t.type)&&Hr(t);break;case 4:gl(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,s=t.memoizedProps.value;_(Wr,i._currentValue),i._currentValue=s;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(_(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?zc(e,t,n):(_(H,H.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);_(H,H.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return _c(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_(H,H.current),i)break;return null;case 22:case 23:return t.lanes=0,Ic(e,t,n)}return Ke(e,t,n)}var Bc,Fs,Uc,Oc;Bc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fs=function(){};Uc=function(e,t,n,i){var s=e.memoizedProps;if(s!==i){e=t.stateNode,Ct(Oe.current);var l=null;switch(n){case"input":s=qi(e,s),i=qi(e,i),l=[];break;case"select":s=$({},s,{value:void 0}),i=$({},i,{value:void 0}),l=[];break;case"textarea":s=ns(e,s),i=ns(e,i),l=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ur)}is(n,i);var o;n=null;for(d in s)if(!i.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var c=s[d];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ln.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in i){var a=i[d];if(c=s!=null?s[d]:void 0,i.hasOwnProperty(d)&&a!==c&&(a!=null||c!=null))if(d==="style")if(c){for(o in c)!c.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&c[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,c=c?c.__html:void 0,a!=null&&c!==a&&(l=l||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&B("scroll",e),l||c===a||(l=[])):(l=l||[]).push(d,a))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Oc=function(e,t,n,i){n!==i&&(t.flags|=4)};function xn(e,t){if(!O)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function hp(e,t,n){var i=t.pendingProps;switch(cl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return fe(t.type)&&Or(),se(t),null;case 3:return i=t.stateNode,rn(),U(he),U(oe),xl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Bs(Le),Le=null))),Fs(e,t),se(t),null;case 5:vl(t);var s=Ct(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Uc(e,t,n,i,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(j(166));return se(t),null}if(e=Ct(Oe.current),hr(t)){i=t.stateNode,n=t.type;var l=t.memoizedProps;switch(i[Be]=t,i[Vn]=l,e=(t.mode&1)!==0,n){case"dialog":B("cancel",i),B("close",i);break;case"iframe":case"object":case"embed":B("load",i);break;case"video":case"audio":for(s=0;s<Sn.length;s++)B(Sn[s],i);break;case"source":B("error",i);break;case"img":case"image":case"link":B("error",i),B("load",i);break;case"details":B("toggle",i);break;case"input":Vl(i,l),B("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!l.multiple},B("invalid",i);break;case"textarea":Wl(i,l),B("invalid",i)}is(n,l),s=null;for(var o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="children"?typeof c=="string"?i.textContent!==c&&(l.suppressHydrationWarning!==!0&&mr(i.textContent,c,e),s=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&mr(i.textContent,c,e),s=["children",""+c]):Ln.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&B("scroll",i)}switch(n){case"input":sr(i),$l(i,l,!0);break;case"textarea":sr(i),Ql(i);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(i.onclick=Ur)}i=s,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(n,{is:i.is}):(e=o.createElement(n),n==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,n),e[Be]=t,e[Vn]=i,Bc(e,t,!1,!1),t.stateNode=e;e:{switch(o=ss(n,i),n){case"dialog":B("cancel",e),B("close",e),s=i;break;case"iframe":case"object":case"embed":B("load",e),s=i;break;case"video":case"audio":for(s=0;s<Sn.length;s++)B(Sn[s],e);s=i;break;case"source":B("error",e),s=i;break;case"img":case"image":case"link":B("error",e),B("load",e),s=i;break;case"details":B("toggle",e),s=i;break;case"input":Vl(e,i),s=qi(e,i),B("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=$({},i,{value:void 0}),B("invalid",e);break;case"textarea":Wl(e,i),s=ns(e,i),B("invalid",e);break;default:s=i}is(n,s),c=s;for(l in c)if(c.hasOwnProperty(l)){var a=c[l];l==="style"?xa(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ga(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&In(e,a):typeof a=="number"&&In(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ln.hasOwnProperty(l)?a!=null&&l==="onScroll"&&B("scroll",e):a!=null&&Xs(e,l,a,o))}switch(n){case"input":sr(e),$l(e,i,!1);break;case"textarea":sr(e),Ql(e);break;case"option":i.value!=null&&e.setAttribute("value",""+mt(i.value));break;case"select":e.multiple=!!i.multiple,l=i.value,l!=null?Jt(e,!!i.multiple,l,!1):i.defaultValue!=null&&Jt(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Oc(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(n=Ct(Wn.current),Ct(Oe.current),hr(t)){if(i=t.stateNode,n=t.memoizedProps,i[Be]=t,(l=i.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:mr(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mr(i.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Be]=t,t.stateNode=i}return se(t),null;case 13:if(U(H),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&ye!==null&&t.mode&1&&!(t.flags&128))sc(),tn(),t.flags|=98560,l=!1;else if(l=hr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(j(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(j(317));l[Be]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),l=!1}else Le!==null&&(Bs(Le),Le=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?K===0&&(K=3):Pl())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return rn(),Fs(e,t),e===null&&On(t.stateNode.containerInfo),se(t),null;case 10:return ml(t.type._context),se(t),null;case 17:return fe(t.type)&&Or(),se(t),null;case 19:if(U(H),l=t.memoizedState,l===null)return se(t),null;if(i=(t.flags&128)!==0,o=l.rendering,o===null)if(i)xn(l,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xr(e),o!==null){for(t.flags|=128,xn(l,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)l=n,e=i,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _(H,H.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>ln&&(t.flags|=128,i=!0,xn(l,!1),t.lanes=4194304)}else{if(!i)if(e=Xr(o),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!O)return se(t),null}else 2*J()-l.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,i=!0,xn(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=H.current,_(H,i?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Dl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?xe&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function fp(e,t){switch(cl(t),t.tag){case 1:return fe(t.type)&&Or(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),U(he),U(oe),xl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vl(t),null;case 13:if(U(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(H),null;case 4:return rn(),null;case 10:return ml(t.type._context),null;case 22:case 23:return Dl(),null;case 24:return null;default:return null}}var vr=!1,le=!1,gp=typeof WeakSet=="function"?WeakSet:Set,w=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){W(e,t,i)}else n.current=null}function Rs(e,t,n){try{n()}catch(i){W(e,t,i)}}var Mo=!1;function vp(e,t){if(fs=zr,e=Qa(),ol(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,c=-1,a=-1,d=0,h=0,v=e,f=null;t:for(;;){for(var N;v!==n||s!==0&&v.nodeType!==3||(c=o+s),v!==l||i!==0&&v.nodeType!==3||(a=o+i),v.nodeType===3&&(o+=v.nodeValue.length),(N=v.firstChild)!==null;)f=v,v=N;for(;;){if(v===e)break t;if(f===n&&++d===s&&(c=o),f===l&&++h===i&&(a=o),(N=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=N}n=c===-1||a===-1?null:{start:c,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(gs={focusedElem:e,selectionRange:n},zr=!1,w=t;w!==null;)if(t=w,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,w=e;else for(;w!==null;){t=w;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,I=x.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?k:Fe(t.type,k),I);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(g){W(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,w=e;break}w=t.return}return x=Mo,Mo=!1,x}function Pn(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&Rs(t,n,l)}s=s.next}while(s!==i)}}function di(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Ls(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hc(e){var t=e.alternate;t!==null&&(e.alternate=null,Hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[Vn],delete t[ys],delete t[qd],delete t[ep])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vc(e){return e.tag===5||e.tag===3||e.tag===4}function zo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Is(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(i!==4&&(e=e.child,e!==null))for(Is(e,t,n),e=e.sibling;e!==null;)Is(e,t,n),e=e.sibling}function As(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(As(e,t,n),e=e.sibling;e!==null;)As(e,t,n),e=e.sibling}var te=null,Re=!1;function Ze(e,t,n){for(n=n.child;n!==null;)$c(e,t,n),n=n.sibling}function $c(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(ri,n)}catch{}switch(n.tag){case 5:le||Wt(n,t);case 6:var i=te,s=Re;te=null,Ze(e,t,n),te=i,Re=s,te!==null&&(Re?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Re?(e=te,n=n.stateNode,e.nodeType===8?zi(e.parentNode,n):e.nodeType===1&&zi(e,n),_n(e)):zi(te,n.stateNode));break;case 4:i=te,s=Re,te=n.stateNode.containerInfo,Re=!0,Ze(e,t,n),te=i,Re=s;break;case 0:case 11:case 14:case 15:if(!le&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var l=s,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Rs(n,t,o),s=s.next}while(s!==i)}Ze(e,t,n);break;case 1:if(!le&&(Wt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(c){W(n,t,c)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(le=(i=le)||n.memoizedState!==null,Ze(e,t,n),le=i):Ze(e,t,n);break;default:Ze(e,t,n)}}function _o(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gp),t.forEach(function(i){var s=Ep.bind(null,e,i);n.has(i)||(n.add(i),i.then(s,s))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var l=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 5:te=c.stateNode,Re=!1;break e;case 3:te=c.stateNode.containerInfo,Re=!0;break e;case 4:te=c.stateNode.containerInfo,Re=!0;break e}c=c.return}if(te===null)throw Error(j(160));$c(l,o,s),te=null,Re=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(d){W(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wc(t,e),t=t.sibling}function Wc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),ze(e),i&4){try{Pn(3,e,e.return),di(3,e)}catch(k){W(e,e.return,k)}try{Pn(5,e,e.return)}catch(k){W(e,e.return,k)}}break;case 1:Pe(t,e),ze(e),i&512&&n!==null&&Wt(n,n.return);break;case 5:if(Pe(t,e),ze(e),i&512&&n!==null&&Wt(n,n.return),e.flags&32){var s=e.stateNode;try{In(s,"")}catch(k){W(e,e.return,k)}}if(i&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,c=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&ma(s,l),ss(c,o);var d=ss(c,l);for(o=0;o<a.length;o+=2){var h=a[o],v=a[o+1];h==="style"?xa(s,v):h==="dangerouslySetInnerHTML"?ga(s,v):h==="children"?In(s,v):Xs(s,h,v,d)}switch(c){case"input":es(s,l);break;case"textarea":ha(s,l);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var N=l.value;N!=null?Jt(s,!!l.multiple,N,!1):f!==!!l.multiple&&(l.defaultValue!=null?Jt(s,!!l.multiple,l.defaultValue,!0):Jt(s,!!l.multiple,l.multiple?[]:"",!1))}s[Vn]=l}catch(k){W(e,e.return,k)}}break;case 6:if(Pe(t,e),ze(e),i&4){if(e.stateNode===null)throw Error(j(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(k){W(e,e.return,k)}}break;case 3:if(Pe(t,e),ze(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_n(t.containerInfo)}catch(k){W(e,e.return,k)}break;case 4:Pe(t,e),ze(e);break;case 13:Pe(t,e),ze(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(bl=J())),i&4&&_o(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||h,Pe(t,e),le=d):Pe(t,e),ze(e),i&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(w=e,h=e.child;h!==null;){for(v=w=h;w!==null;){switch(f=w,N=f.child,f.tag){case 0:case 11:case 14:case 15:Pn(4,f,f.return);break;case 1:Wt(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{t=i,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){W(i,n,k)}}break;case 5:Wt(f,f.return);break;case 22:if(f.memoizedState!==null){Uo(v);continue}}N!==null?(N.return=f,w=N):Uo(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{s=v.stateNode,d?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=v.stateNode,a=v.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,c.style.display=va("display",o))}catch(k){W(e,e.return,k)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(k){W(e,e.return,k)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Pe(t,e),ze(e),i&4&&_o(e);break;case 21:break;default:Pe(t,e),ze(e)}}function ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vc(n)){var i=n;break e}n=n.return}throw Error(j(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(In(s,""),i.flags&=-33);var l=zo(e);As(e,l,s);break;case 3:case 4:var o=i.stateNode.containerInfo,c=zo(e);Is(e,c,o);break;default:throw Error(j(161))}}catch(a){W(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xp(e,t,n){w=e,Qc(e)}function Qc(e,t,n){for(var i=(e.mode&1)!==0;w!==null;){var s=w,l=s.child;if(s.tag===22&&i){var o=s.memoizedState!==null||vr;if(!o){var c=s.alternate,a=c!==null&&c.memoizedState!==null||le;c=vr;var d=le;if(vr=o,(le=a)&&!d)for(w=s;w!==null;)o=w,a=o.child,o.tag===22&&o.memoizedState!==null?Oo(s):a!==null?(a.return=o,w=a):Oo(s);for(;l!==null;)w=l,Qc(l),l=l.sibling;w=s,vr=c,le=d}Bo(e)}else s.subtreeFlags&8772&&l!==null?(l.return=s,w=l):Bo(e)}}function Bo(e){for(;w!==null;){var t=w;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||di(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!le)if(n===null)i.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&So(t,l,i);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}So(t,o,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&_n(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}le||t.flags&512&&Ls(t)}catch(f){W(t,t.return,f)}}if(t===e){w=null;break}if(n=t.sibling,n!==null){n.return=t.return,w=n;break}w=t.return}}function Uo(e){for(;w!==null;){var t=w;if(t===e){w=null;break}var n=t.sibling;if(n!==null){n.return=t.return,w=n;break}w=t.return}}function Oo(e){for(;w!==null;){var t=w;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{di(4,t)}catch(a){W(t,n,a)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var s=t.return;try{i.componentDidMount()}catch(a){W(t,s,a)}}var l=t.return;try{Ls(t)}catch(a){W(t,l,a)}break;case 5:var o=t.return;try{Ls(t)}catch(a){W(t,o,a)}}}catch(a){W(t,t.return,a)}if(t===e){w=null;break}var c=t.sibling;if(c!==null){c.return=t.return,w=c;break}w=t.return}}var yp=Math.ceil,Gr=Ge.ReactCurrentDispatcher,wl=Ge.ReactCurrentOwner,be=Ge.ReactCurrentBatchConfig,A=0,ee=null,X=null,ne=0,xe=0,Qt=gt(0),K=0,Yn=null,Pt=0,pi=0,El=0,Fn=null,pe=null,bl=0,ln=1/0,He=null,Zr=!1,Ms=null,ut=null,xr=!1,it=null,qr=0,Rn=0,zs=null,Dr=-1,Pr=0;function ce(){return A&6?J():Dr!==-1?Dr:Dr=J()}function dt(e){return e.mode&1?A&2&&ne!==0?ne&-ne:np.transition!==null?(Pr===0&&(Pr=Pa()),Pr):(e=z,e!==0||(e=window.event,e=e===void 0?16:za(e.type)),e):1}function Ae(e,t,n,i){if(50<Rn)throw Rn=0,zs=null,Error(j(185));Gn(e,n,i),(!(A&2)||e!==ee)&&(e===ee&&(!(A&2)&&(pi|=n),K===4&&nt(e,ne)),ge(e,i),n===1&&A===0&&!(t.mode&1)&&(ln=J()+500,ai&&vt()))}function ge(e,t){var n=e.callbackNode;nd(e,t);var i=Mr(e,e===ee?ne:0);if(i===0)n!==null&&Yl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Yl(n),t===1)e.tag===0?tp(Ho.bind(null,e)):nc(Ho.bind(null,e)),Gd(function(){!(A&6)&&vt()}),n=null;else{switch(Fa(i)){case 1:n=qs;break;case 4:n=Ta;break;case 16:n=Ar;break;case 536870912:n=Da;break;default:n=Ar}n=eu(n,Jc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jc(e,t){if(Dr=-1,Pr=0,A&6)throw Error(j(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var i=Mr(e,e===ee?ne:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=ei(e,i);else{t=i;var s=A;A|=2;var l=Yc();(ee!==e||ne!==t)&&(He=null,ln=J()+500,wt(e,t));do try{kp();break}catch(c){Xc(e,c)}while(1);pl(),Gr.current=l,A=s,X!==null?t=0:(ee=null,ne=0,t=K)}if(t!==0){if(t===2&&(s=us(e),s!==0&&(i=s,t=_s(e,s))),t===1)throw n=Yn,wt(e,0),nt(e,i),ge(e,J()),n;if(t===6)nt(e,i);else{if(s=e.current.alternate,!(i&30)&&!jp(s)&&(t=ei(e,i),t===2&&(l=us(e),l!==0&&(i=l,t=_s(e,l))),t===1))throw n=Yn,wt(e,0),nt(e,i),ge(e,J()),n;switch(e.finishedWork=s,e.finishedLanes=i,t){case 0:case 1:throw Error(j(345));case 2:Nt(e,pe,He);break;case 3:if(nt(e,i),(i&130023424)===i&&(t=bl+500-J(),10<t)){if(Mr(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){ce(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=xs(Nt.bind(null,e,pe,He),t);break}Nt(e,pe,He);break;case 4:if(nt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,s=-1;0<i;){var o=31-Ie(i);l=1<<o,o=t[o],o>s&&(s=o),i&=~l}if(i=s,i=J()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yp(i/1960))-i,10<i){e.timeoutHandle=xs(Nt.bind(null,e,pe,He),i);break}Nt(e,pe,He);break;case 5:Nt(e,pe,He);break;default:throw Error(j(329))}}}return ge(e,J()),e.callbackNode===n?Jc.bind(null,e):null}function _s(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(wt(e,t).flags|=256),e=ei(e,t),e!==2&&(t=pe,pe=n,t!==null&&Bs(t)),e}function Bs(e){pe===null?pe=e:pe.push.apply(pe,e)}function jp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],l=s.getSnapshot;s=s.value;try{if(!Me(l(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~El,t&=~pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),i=1<<n;e[n]=-1,t&=~i}}function Ho(e){if(A&6)throw Error(j(327));Zt();var t=Mr(e,0);if(!(t&1))return ge(e,J()),null;var n=ei(e,t);if(e.tag!==0&&n===2){var i=us(e);i!==0&&(t=i,n=_s(e,i))}if(n===1)throw n=Yn,wt(e,0),nt(e,t),ge(e,J()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,pe,He),ge(e,J()),null}function Tl(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(ln=J()+500,ai&&vt())}}function Ft(e){it!==null&&it.tag===0&&!(A&6)&&Zt();var t=A;A|=1;var n=be.transition,i=z;try{if(be.transition=null,z=1,e)return e()}finally{z=i,be.transition=n,A=t,!(A&6)&&vt()}}function Dl(){xe=Qt.current,U(Qt)}function wt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kd(n)),X!==null)for(n=X.return;n!==null;){var i=n;switch(cl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Or();break;case 3:rn(),U(he),U(oe),xl();break;case 5:vl(i);break;case 4:rn();break;case 13:U(H);break;case 19:U(H);break;case 10:ml(i.type._context);break;case 22:case 23:Dl()}n=n.return}if(ee=e,X=e=pt(e.current,null),ne=xe=t,K=0,Yn=null,El=pi=Pt=0,pe=Fn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,l=n.pending;if(l!==null){var o=l.next;l.next=s,i.next=o}n.pending=i}St=null}return e}function Xc(e,t){do{var n=X;try{if(pl(),Er.current=Kr,Yr){for(var i=V.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Yr=!1}if(Dt=0,q=Y=V=null,Dn=!1,Qn=0,wl.current=null,n===null||n.return===null){K=1,Yn=t,X=null;break}e:{var l=e,o=n.return,c=n,a=t;if(t=ne,c.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,h=c,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var N=Do(o);if(N!==null){N.flags&=-257,Po(N,o,c,l,t),N.mode&1&&To(l,d,t),t=N,a=d;var x=t.updateQueue;if(x===null){var k=new Set;k.add(a),t.updateQueue=k}else x.add(a);break e}else{if(!(t&1)){To(l,d,t),Pl();break e}a=Error(j(426))}}else if(O&&c.mode&1){var I=Do(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Po(I,o,c,l,t),ul(sn(a,c));break e}}l=a=sn(a,c),K!==4&&(K=2),Fn===null?Fn=[l]:Fn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var m=Fc(l,a,t);ko(l,m);break e;case 1:c=a;var u=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var g=Rc(l,c,t);ko(l,g);break e}}l=l.return}while(l!==null)}Gc(n)}catch(S){t=S,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function Yc(){var e=Gr.current;return Gr.current=Kr,e===null?Kr:e}function Pl(){(K===0||K===3||K===2)&&(K=4),ee===null||!(Pt&268435455)&&!(pi&268435455)||nt(ee,ne)}function ei(e,t){var n=A;A|=2;var i=Yc();(ee!==e||ne!==t)&&(He=null,wt(e,t));do try{Np();break}catch(s){Xc(e,s)}while(1);if(pl(),A=n,Gr.current=i,X!==null)throw Error(j(261));return ee=null,ne=0,K}function Np(){for(;X!==null;)Kc(X)}function kp(){for(;X!==null&&!Ju();)Kc(X)}function Kc(e){var t=qc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Gc(e):X=t,wl.current=null}function Gc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,X=null;return}}else if(n=hp(n,t,xe),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);K===0&&(K=5)}function Nt(e,t,n){var i=z,s=be.transition;try{be.transition=null,z=1,Sp(e,t,n,i)}finally{be.transition=s,z=i}return null}function Sp(e,t,n,i){do Zt();while(it!==null);if(A&6)throw Error(j(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(rd(e,l),e===ee&&(X=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xr||(xr=!0,eu(Ar,function(){return Zt(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=be.transition,be.transition=null;var o=z;z=1;var c=A;A|=4,wl.current=null,vp(e,n),Wc(n,e),Vd(gs),zr=!!fs,gs=fs=null,e.current=n,xp(n),Xu(),A=c,z=o,be.transition=l}else e.current=n;if(xr&&(xr=!1,it=e,qr=s),l=e.pendingLanes,l===0&&(ut=null),Gu(n.stateNode),ge(e,J()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(Zr)throw Zr=!1,e=Ms,Ms=null,e;return qr&1&&e.tag!==0&&Zt(),l=e.pendingLanes,l&1?e===zs?Rn++:(Rn=0,zs=e):Rn=0,vt(),null}function Zt(){if(it!==null){var e=Fa(qr),t=be.transition,n=z;try{if(be.transition=null,z=16>e?16:e,it===null)var i=!1;else{if(e=it,it=null,qr=0,A&6)throw Error(j(331));var s=A;for(A|=4,w=e.current;w!==null;){var l=w,o=l.child;if(w.flags&16){var c=l.deletions;if(c!==null){for(var a=0;a<c.length;a++){var d=c[a];for(w=d;w!==null;){var h=w;switch(h.tag){case 0:case 11:case 15:Pn(8,h,l)}var v=h.child;if(v!==null)v.return=h,w=v;else for(;w!==null;){h=w;var f=h.sibling,N=h.return;if(Hc(h),h===d){w=null;break}if(f!==null){f.return=N,w=f;break}w=N}}}var x=l.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var I=k.sibling;k.sibling=null,k=I}while(k!==null)}}w=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,w=o;else e:for(;w!==null;){if(l=w,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Pn(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,w=m;break e}w=l.return}}var u=e.current;for(w=u;w!==null;){o=w;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,w=p;else e:for(o=u;w!==null;){if(c=w,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:di(9,c)}}catch(S){W(c,c.return,S)}if(c===o){w=null;break e}var g=c.sibling;if(g!==null){g.return=c.return,w=g;break e}w=c.return}}if(A=s,vt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(ri,e)}catch{}i=!0}return i}finally{z=n,be.transition=t}}return!1}function Vo(e,t,n){t=sn(n,t),t=Fc(e,t,1),e=ct(e,t,1),t=ce(),e!==null&&(Gn(e,1,t),ge(e,t))}function W(e,t,n){if(e.tag===3)Vo(e,e,n);else for(;t!==null;){if(t.tag===3){Vo(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ut===null||!ut.has(i))){e=sn(n,e),e=Rc(t,e,1),t=ct(t,e,1),e=ce(),t!==null&&(Gn(t,1,e),ge(t,e));break}}t=t.return}}function Cp(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(K===4||K===3&&(ne&130023424)===ne&&500>J()-bl?wt(e,0):El|=n),ge(e,t)}function Zc(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=ce();e=Ye(e,t),e!==null&&(Gn(e,t,n),ge(e,n))}function wp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zc(e,n)}function Ep(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(j(314))}i!==null&&i.delete(t),Zc(e,n)}var qc;qc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,mp(e,t,n);me=!!(e.flags&131072)}else me=!1,O&&t.flags&1048576&&rc(t,$r,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Tr(e,t),e=t.pendingProps;var s=en(t,oe.current);Gt(t,n),s=jl(null,t,i,e,s,n);var l=Nl();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(i)?(l=!0,Hr(t)):l=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,fl(t),s.updater=ui,t.stateNode=s,s._reactInternals=t,ws(t,i,e,n),t=Ts(null,t,i,!0,l,n)):(t.tag=0,O&&l&&al(t),ae(null,t,s,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Tr(e,t),e=t.pendingProps,s=i._init,i=s(i._payload),t.type=i,s=t.tag=Tp(i),e=Fe(i,e),s){case 0:t=bs(null,t,i,e,n);break e;case 1:t=Lo(null,t,i,e,n);break e;case 11:t=Fo(null,t,i,e,n);break e;case 14:t=Ro(null,t,i,Fe(i.type,e),n);break e}throw Error(j(306,i,""))}return t;case 0:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Fe(i,s),bs(e,t,i,s,n);case 1:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Fe(i,s),Lo(e,t,i,s,n);case 3:e:{if(Mc(t),e===null)throw Error(j(387));i=t.pendingProps,l=t.memoizedState,s=l.element,cc(e,t),Jr(t,i,null,n);var o=t.memoizedState;if(i=o.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){s=sn(Error(j(423)),t),t=Io(e,t,i,n,s);break e}else if(i!==s){s=sn(Error(j(424)),t),t=Io(e,t,i,n,s);break e}else for(ye=at(t.stateNode.containerInfo.firstChild),je=t,O=!0,Le=null,n=oc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),i===s){t=Ke(e,t,n);break e}ae(e,t,i,n)}t=t.child}return t;case 5:return uc(t),e===null&&ks(t),i=t.type,s=t.pendingProps,l=e!==null?e.memoizedProps:null,o=s.children,vs(i,s)?o=null:l!==null&&vs(i,l)&&(t.flags|=32),Ac(e,t),ae(e,t,o,n),t.child;case 6:return e===null&&ks(t),null;case 13:return zc(e,t,n);case 4:return gl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=nn(t,null,i,n):ae(e,t,i,n),t.child;case 11:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Fe(i,s),Fo(e,t,i,s,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,s=t.pendingProps,l=t.memoizedProps,o=s.value,_(Wr,i._currentValue),i._currentValue=o,l!==null)if(Me(l.value,o)){if(l.children===s.children&&!he.current){t=Ke(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){o=l.child;for(var a=c.firstContext;a!==null;){if(a.context===i){if(l.tag===1){a=Qe(-1,n&-n),a.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?a.next=a:(a.next=h.next,h.next=a),d.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ss(l.return,n,t),c.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(j(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ss(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ae(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,i=t.pendingProps.children,Gt(t,n),s=Te(s),i=i(s),t.flags|=1,ae(e,t,i,n),t.child;case 14:return i=t.type,s=Fe(i,t.pendingProps),s=Fe(i.type,s),Ro(e,t,i,s,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Fe(i,s),Tr(e,t),t.tag=1,fe(i)?(e=!0,Hr(t)):e=!1,Gt(t,n),Pc(t,i,s),ws(t,i,s,n),Ts(null,t,i,!0,e,n);case 19:return _c(e,t,n);case 22:return Ic(e,t,n)}throw Error(j(156,t.tag))};function eu(e,t){return ba(e,t)}function bp(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,i){return new bp(e,t,n,i)}function Fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tp(e){if(typeof e=="function")return Fl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ks)return 11;if(e===Gs)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fr(e,t,n,i,s,l){var o=2;if(i=e,typeof e=="function")Fl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Mt:return Et(n.children,s,l,t);case Ys:o=8,s|=8;break;case Yi:return e=Ee(12,n,t,s|2),e.elementType=Yi,e.lanes=l,e;case Ki:return e=Ee(13,n,t,s),e.elementType=Ki,e.lanes=l,e;case Gi:return e=Ee(19,n,t,s),e.elementType=Gi,e.lanes=l,e;case ua:return mi(n,s,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case aa:o=10;break e;case ca:o=9;break e;case Ks:o=11;break e;case Gs:o=14;break e;case qe:o=16,i=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,s),t.elementType=e,t.type=i,t.lanes=l,t}function Et(e,t,n,i){return e=Ee(7,e,i,t),e.lanes=n,e}function mi(e,t,n,i){return e=Ee(22,e,i,t),e.elementType=ua,e.lanes=n,e.stateNode={isHidden:!1},e}function Wi(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Qi(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dp(e,t,n,i,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ei(0),this.expirationTimes=Ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Rl(e,t,n,i,s,l,o,c,a){return e=new Dp(e,t,n,c,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ee(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fl(l),e}function Pp(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function tu(e){if(!e)return ht;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(fe(n))return tc(e,n,t)}return t}function nu(e,t,n,i,s,l,o,c,a){return e=Rl(n,i,!0,e,s,l,o,c,a),e.context=tu(null),n=e.current,i=ce(),s=dt(n),l=Qe(i,s),l.callback=t??null,ct(n,l,s),e.current.lanes=s,Gn(e,s,i),ge(e,i),e}function hi(e,t,n,i){var s=t.current,l=ce(),o=dt(s);return n=tu(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(l,o),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=ct(s,t,o),e!==null&&(Ae(e,s,o,l),wr(e,s,o)),o}function ti(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $o(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ll(e,t){$o(e,t),(e=e.alternate)&&$o(e,t)}function Fp(){return null}var ru=typeof reportError=="function"?reportError:function(e){console.error(e)};function Il(e){this._internalRoot=e}fi.prototype.render=Il.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));hi(e,t,null,null)};fi.prototype.unmount=Il.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){hi(null,e,null,null)}),t[Xe]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ia();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&Ma(e)}};function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wo(){}function Rp(e,t,n,i,s){if(s){if(typeof i=="function"){var l=i;i=function(){var d=ti(o);l.call(d)}}var o=nu(t,i,e,0,null,!1,!1,"",Wo);return e._reactRootContainer=o,e[Xe]=o.current,On(e.nodeType===8?e.parentNode:e),Ft(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var c=i;i=function(){var d=ti(a);c.call(d)}}var a=Rl(e,0,!1,null,null,!1,!1,"",Wo);return e._reactRootContainer=a,e[Xe]=a.current,On(e.nodeType===8?e.parentNode:e),Ft(function(){hi(t,a,n,i)}),a}function vi(e,t,n,i,s){var l=n._reactRootContainer;if(l){var o=l;if(typeof s=="function"){var c=s;s=function(){var a=ti(o);c.call(a)}}hi(t,o,e,s)}else o=Rp(n,t,e,s,i);return ti(o)}Ra=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(el(t,n|1),ge(t,J()),!(A&6)&&(ln=J()+500,vt()))}break;case 13:Ft(function(){var i=Ye(e,1);if(i!==null){var s=ce();Ae(i,e,1,s)}}),Ll(e,1)}};tl=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ce();Ae(t,e,134217728,n)}Ll(e,134217728)}};La=function(e){if(e.tag===13){var t=dt(e),n=Ye(e,t);if(n!==null){var i=ce();Ae(n,e,t,i)}Ll(e,t)}};Ia=function(){return z};Aa=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};os=function(e,t,n){switch(t){case"input":if(es(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=oi(i);if(!s)throw Error(j(90));pa(i),es(i,s)}}}break;case"textarea":ha(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};Na=Tl;ka=Ft;var Lp={usingClientEntryPoint:!1,Events:[qn,Ut,oi,ya,ja,Tl]},yn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ip={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wa(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Fp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{ri=yr.inject(Ip),Ue=yr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lp;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Al(t))throw Error(j(200));return Pp(e,t,null,n)};ke.createRoot=function(e,t){if(!Al(e))throw Error(j(299));var n=!1,i="",s=ru;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Rl(e,1,!1,null,null,n,!1,i,s),e[Xe]=t.current,On(e.nodeType===8?e.parentNode:e),new Il(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=wa(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Ft(e)};ke.hydrate=function(e,t,n){if(!gi(t))throw Error(j(200));return vi(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Al(e))throw Error(j(405));var i=n!=null&&n.hydratedSources||null,s=!1,l="",o=ru;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=nu(t,null,e,1,n??null,s,!1,l,o),e[Xe]=t.current,On(e),i)for(e=0;e<i.length;e++)n=i[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new fi(t)};ke.render=function(e,t,n){if(!gi(t))throw Error(j(200));return vi(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!gi(e))throw Error(j(40));return e._reactRootContainer?(Ft(function(){vi(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};ke.unstable_batchedUpdates=Tl;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!gi(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return vi(e,t,n,!1,i)};ke.version="18.3.1-next-f1338f8080-20240426";function iu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iu)}catch(e){console.error(e)}}iu(),ia.exports=ke;var Ap=ia.exports,Qo=Ap;Ji.createRoot=Qo.createRoot,Ji.hydrateRoot=Qo.hydrateRoot;var Mp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const zp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_p=(e,t)=>{const n=C.forwardRef(({color:i="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:o,children:c,...a},d)=>C.createElement("svg",{ref:d,...Mp,width:s,height:s,stroke:i,strokeWidth:o?Number(l)*24/Number(s):l,className:`lucide lucide-${zp(e)}`,...a},[...t.map(([h,v])=>C.createElement(h,v)),...(Array.isArray(c)?c:[c])||[]]));return n.displayName=`${e}`,n};var G=_p;const Bp=G("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Up=G("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),Op=G("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Hp=G("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),Vp=G("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),$p=G("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),su=G("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),Wp=G("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),Qp=G("Layers",[["polygon",{points:"12 2 2 7 12 12 22 7 12 2",key:"1b0ttc"}],["polyline",{points:"2 17 12 22 22 17",key:"imjtdl"}],["polyline",{points:"2 12 12 17 22 12",key:"5dexcv"}]]),Us=G("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),Jp=G("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]),Xp=G("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]),Yp=G("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),Os=G("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),lu=G("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),Kp=G("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Gp=G("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]),Zp=G("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),qp=G("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function em(){const[e,t]=C.useState("home"),n=[{id:"home",label:"Home",icon:Wp},{id:"js-fundamentals",label:"JS Fundamentals",icon:$p},{id:"js-basics",label:"JavaScript Basics",icon:Up},{id:"react-core",label:"React Core",icon:qp},{id:"components",label:"Components",icon:Qp},{id:"hooks",label:"Hooks",icon:Kp},{id:"data-handling",label:"Data Handling",icon:Op},{id:"events-interactions",label:"Events & Interactions",icon:Zp},{id:"styling-design",label:"Styling & Design",icon:Xp},{id:"navigation-routing",label:"Navigation & Routing",icon:Jp},{id:"html-css",label:"HTML & CSS",icon:su},{id:"figma-mapping",label:"Figma Mapping",icon:Yp}];return r.jsxs("div",{className:"app",children:[r.jsx("header",{className:"header",children:r.jsxs("div",{className:"container",children:[r.jsxs("h1",{className:"logo",children:[r.jsx(Bp,{className:"logo-icon"}),"React JS Cheatsheet"]}),r.jsx("p",{className:"subtitle",children:"For UX Designers with Figma Analogies"})]})}),r.jsx("nav",{className:"sidebar",children:r.jsx("div",{className:"nav-items",children:n.map(i=>{const s=i.icon;return r.jsxs("button",{className:`nav-item ${e===i.id?"active":""}`,onClick:()=>t(i.id),children:[r.jsx(s,{className:"nav-icon"}),r.jsx("span",{children:i.label})]},i.id)})})}),r.jsx("main",{className:"main-content",children:r.jsxs("div",{className:"container",children:[e==="home"&&r.jsx(tm,{}),e==="js-fundamentals"&&r.jsx(nm,{}),e==="js-basics"&&r.jsx(rm,{}),e==="react-core"&&r.jsx(im,{}),e==="components"&&r.jsx(sm,{}),e==="hooks"&&r.jsx(lm,{}),e==="data-handling"&&r.jsx(om,{}),e==="events-interactions"&&r.jsx(am,{}),e==="styling-design"&&r.jsx(cm,{}),e==="navigation-routing"&&r.jsx(um,{}),e==="html-css"&&r.jsx(dm,{}),e==="figma-mapping"&&r.jsx(pm,{})]})})]})}function tm(){return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Welcome to React JS Cheatsheet"}),r.jsx("p",{className:"lead",children:"A comprehensive guide to JavaScript and React concepts, explained through the lens of Figma and design thinking."}),r.jsxs("div",{className:"getting-started",children:[r.jsx("h2",{children:"🎯 How to Use This Cheatsheet"}),r.jsxs("div",{className:"steps",children:[r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"step-number",children:"1"}),r.jsxs("div",{className:"step-content",children:[r.jsx("h4",{children:"Start with JavaScript Basics"}),r.jsx("p",{children:"Understand variables, objects, and functions through Figma analogies"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"step-number",children:"2"}),r.jsxs("div",{className:"step-content",children:[r.jsx("h4",{children:"Learn React Core Concepts"}),r.jsx("p",{children:"Discover how React components work like Figma components"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"step-number",children:"3"}),r.jsxs("div",{className:"step-content",children:[r.jsx("h4",{children:"Master Hooks and State"}),r.jsx("p",{children:"Learn to make your UI interactive like Figma prototypes"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"step-number",children:"4"}),r.jsxs("div",{className:"step-content",children:[r.jsx("h4",{children:"Build Real Projects"}),r.jsx("p",{children:"Apply your knowledge to create interactive prototypes"})]})]})]})]})]})}function nm(){C.useState(0);const[e,t]=C.useState({name:"John",age:25}),[n,i]=C.useState(""),[s,l]=C.useState(["red","blue","green"]),[o,c]=C.useState("Sarah"),[a,d]=C.useState("Sarah"),[h,v]=C.useState({name:"Sarah",age:28}),[f,N]=C.useState({name:"Sarah",age:28}),[x,k]=C.useState(["red","blue","green"]),[I,m]=C.useState(["red","blue","green"]),[u,p]=C.useState({name:"Alex",age:25,skills:["JavaScript","CSS"]}),[g,S]=C.useState({name:"John",age:30,role:"Developer"}),[b,T]=C.useState("");return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"JavaScript Fundamentals"}),r.jsx("p",{children:"Core JavaScript concepts with interactive examples"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Variables"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Variables are like text styles in Figma - they store values that you can reuse throughout your design."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`let variableName = value;
const constantName = value;
var oldWay = value;`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Variable declaration and assignment
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
}`,explanation:"Variables store data that can be used and modified throughout your code."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Variable Examples:"}),r.jsxs("div",{className:"result",children:["userName: ",r.jsx("span",{className:"code-output",children:"Sarah"}),r.jsx("br",{}),"userAge: ",r.jsx("span",{className:"code-output",children:"28"}),r.jsx("br",{}),"oldWay: ",r.jsx("span",{className:"code-output",children:"avoid this"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Change Variable:"}),r.jsx("input",{value:n,onChange:y=>i(y.target.value),placeholder:"Enter a new message"}),r.jsxs("div",{className:"result",children:["Message: ",n||"No message set"]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Objects"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Objects are like component properties in Figma - they group related data together."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`const objectName = {
  key1: value1,
  key2: value2
};

objectName.key1;           // Access property
objectName["key2"];        // Bracket notation`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Creating an object
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

functionName(argument);     // Call function`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Function declaration
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
}`,explanation:"Functions are reusable blocks of code that perform specific tasks."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsx("div",{className:"demo-controls",children:r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Function Examples:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"text",placeholder:"Enter name",id:"greetInput",defaultValue:"Sarah"}),r.jsx("button",{onClick:()=>{const y=document.getElementById("greetInput").value;alert(`Hello, ${y}!`)},children:"Greet"})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",placeholder:"Width",id:"areaWidth",defaultValue:"5"}),r.jsx("input",{type:"number",placeholder:"Height",id:"areaHeight",defaultValue:"3"}),r.jsx("button",{onClick:()=>{const y=document.getElementById("areaWidth").value,M=document.getElementById("areaHeight").value;alert(`Area: ${y*M}`)},children:"Calculate Area"})]})]})})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Methods"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Methods are like built-in actions in Figma - they're functions that belong to objects."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`string.method();           // String methods
array.method();             // Array methods
object.method();            // Object methods

const obj = {
  methodName() {
    return value;
  }
};`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// String methods
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
}`,explanation:"Methods are functions that belong to objects and can access the object's data."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Array Methods:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>l(y=>[...y,"yellow"]),children:"Push Yellow"}),r.jsx("button",{onClick:()=>l(y=>y.slice(0,-1)),children:"Pop Last"}),r.jsx("button",{onClick:()=>l(y=>["purple",...y]),children:"Unshift Purple"})]}),r.jsxs("div",{className:"result",children:["Colors: [",s.join(", "),"]"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"String Methods:"}),r.jsx("input",{type:"text",placeholder:"Enter text",id:"stringInput",defaultValue:"Hello World"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{const y=document.getElementById("stringInput").value;alert(y.toUpperCase())},children:"To Uppercase"}),r.jsx("button",{onClick:()=>{const y=document.getElementById("stringInput").value;alert(`Length: ${y.length}`)},children:"Get Length"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Classes"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Classes are like component templates in Figma - they define the structure for creating multiple instances."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`class ClassName {
  constructor(parameter) {
    this.property = parameter;
  }
  
  methodName() {
    return value;
  }
}

const instance = new ClassName(value);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Class definition
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
instance.property = newValue;   // Change property value`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Constructor function
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
}`,explanation:"Constructors initialize object properties when creating new instances, while properties store data within objects."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Instance Properties:"}),r.jsxs("div",{className:"result",children:["Name: ",r.jsx("span",{className:"code-output",children:g.name}),r.jsx("br",{}),"Age: ",r.jsx("span",{className:"code-output",children:g.age}),r.jsx("br",{}),"Role: ",r.jsx("span",{className:"code-output",children:g.role}),r.jsx("br",{}),g.skills&&r.jsxs(r.Fragment,{children:["Skills: ",r.jsx("span",{className:"code-output",children:g.skills.join(", ")}),r.jsx("br",{})]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Modify Properties:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:g.name,onChange:y=>S(M=>({...M,name:y.target.value})),placeholder:"Name"}),r.jsx("input",{type:"number",value:g.age,onChange:y=>S(M=>({...M,age:parseInt(y.target.value)||0})),placeholder:"Age"}),r.jsxs("select",{value:g.role,onChange:y=>S(M=>({...M,role:y.target.value})),children:[r.jsx("option",{value:"Developer",children:"Developer"}),r.jsx("option",{value:"Designer",children:"Designer"}),r.jsx("option",{value:"Manager",children:"Manager"}),r.jsx("option",{value:"Tester",children:"Tester"})]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Add Skills:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:b,onChange:y=>T(y.target.value),placeholder:"Enter a skill"}),r.jsx("button",{onClick:()=>{b.trim()&&(S(y=>({...y,skills:[...y.skills||[],b.trim()]})),T(""))},children:"Add Skill"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Property Info:"}),r.jsxs("div",{className:"result",children:[g.name," is a ",g.age,"-year-old ",g.role,g.skills&&g.skills.length>0&&r.jsxs(r.Fragment,{children:[" with skills in ",g.skills.join(", ")]})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Events"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Events are like interactions in Figma prototypes - they respond to user actions."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`element.addEventListener('event', handler);

// In React JSX:
<button onClick={handleClick}>
  Click me
</button>

const handleClick = (event) => {
  // Handle event
};`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Event handling
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
// - mouseover: Mouse hovers over element`,explanation:"Events allow your code to respond to user interactions and system changes."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Event Examples:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>alert("Button clicked!"),children:"Click Event"}),r.jsx("button",{onMouseOver:()=>alert("Mouse over!"),children:"Mouse Over"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Input Event:"}),r.jsx("input",{type:"text",placeholder:"Type something...",onChange:y=>i(y.target.value)}),r.jsxs("div",{className:"result",children:["You typed: ",n]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Parameters & Arguments"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Parameters are like input fields in Figma components - they define what data the function needs."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`function functionName(parameter1, parameter2) {
  // Function body
}

functionName(argument1, argument2);  // Call with arguments

function greet(name = "User") {     // Default parameter
  return "Hello, " + name;
}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Parameters (in function definition)
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
console.log(greet("Sarah")); // "Hello, Sarah"`,explanation:"Parameters define what data a function expects, arguments are the actual values passed when calling the function."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsx("div",{className:"demo-controls",children:r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Calculate Total:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{type:"number",placeholder:"Price",id:"priceInput",defaultValue:"100"}),r.jsx("input",{type:"number",placeholder:"Tax %",id:"taxInput",defaultValue:"10"}),r.jsx("input",{type:"number",placeholder:"Discount %",id:"discountInput",defaultValue:"20"}),r.jsx("button",{onClick:()=>{const y=parseFloat(document.getElementById("priceInput").value),M=parseFloat(document.getElementById("taxInput").value)/100,R=parseFloat(document.getElementById("discountInput").value)/100,ve=y*(1-R)*(1+M);alert(`Total: $${ve.toFixed(2)}`)},children:"Calculate"})]})]})})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Primitive vs Reference Data Types"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Primitives are like individual text elements in Figma, while references are like components - changing a component affects all instances."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Primitive types (copied by value)
let primitive = "value";
let copy = primitive;        // Independent copy

// Reference types (copied by reference)
let reference = { key: "value" };
let refCopy = reference;     // Same reference

// Creating true copies
let deepCopy = { ...reference };     // Spread operator
let arrayCopy = [...array];          // Array spread`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// PRIMITIVE TYPES (copied by value)
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
let userDeepCopy2 = Object.assign({}, user); // Object.assign`,explanation:"Primitive types are copied by value, while reference types are copied by reference. This affects how data is shared and modified."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Primitive Types (Copied by Value):"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["Original name: ",r.jsx("span",{className:"code-output",children:o})]}),r.jsxs("div",{children:["Copy name: ",r.jsx("span",{className:"code-output",children:a})]})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{d("Jane")},children:'Change Copy to "Jane"'}),r.jsx("button",{onClick:()=>{c("Sarah"),d("Sarah")},children:"Reset Both"})]}),r.jsx("div",{className:"result",style:{fontSize:"12px",color:"#94a3b8"},children:"Notice: Changing the copy doesn't affect the original"})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Reference Types (Copied by Reference):"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["Original user: ",r.jsx("span",{className:"code-output",children:h.name})]}),r.jsxs("div",{children:["Copy user: ",r.jsx("span",{className:"code-output",children:f.name})]})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{N(y=>({...y,name:"Jane"}))},children:'Change Copy to "Jane"'}),r.jsx("button",{onClick:()=>{v({name:"Sarah",age:28}),N({name:"Sarah",age:28})},children:"Reset Both"})]}),r.jsx("div",{className:"result",style:{fontSize:"12px",color:"#ef4444"},children:"Notice: Changing the copy affects the original!"})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Creating True Copies:"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["Original array: [",x.join(", "),"]"]}),r.jsxs("div",{children:["Spread copy: [",I.join(", "),"]"]})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{m(y=>[...y,"yellow"])},children:'Add "yellow" to spread copy'}),r.jsx("button",{onClick:()=>{k(["red","blue","green"]),m(["red","blue","green"])},children:"Reset Arrays"})]}),r.jsx("div",{className:"result",style:{fontSize:"12px",color:"#10b981"},children:"Notice: Spread operator creates independent copies"})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"React State Implications:"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["User state: ",u.name," (age: ",u.age,")"]}),r.jsxs("div",{children:["Skills: [",u.skills.join(", "),"]"]})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{u.age=u.age+1,p(u)},children:"Wrong: Direct Mutation"}),r.jsx("button",{onClick:()=>{p(y=>({...y,age:y.age+1}))},children:"Correct: New Object"}),r.jsx("button",{onClick:()=>{p(y=>({...y,skills:[...y.skills,"React"]}))},children:"Add Skill"})]}),r.jsx("div",{className:"result",style:{fontSize:"12px",color:"#f59e0b"},children:`Try the "Wrong" button - notice React doesn't update! Then try "Correct" buttons.`})]})]})})]})]})]})]})}function rm(){const[e,t]=C.useState(0),[n,i]=C.useState("Designer"),[s,l]=C.useState(!0);C.useState(["red","blue","green"]);const[o,c]=C.useState({name:"Sarah",role:"UX Designer"}),[a,d]=C.useState({showMessage:!1,showCount:!1,hasError:!1,count:5});return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"JavaScript Basics"}),r.jsx("p",{children:"Core JavaScript concepts explained with Figma analogies"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Variables & State"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Variables are like text styles or color styles in Figma - they store reusable values."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// React state
const [state, setState] = useState(initialValue);

// Examples:
const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState('');
const [isVisible, setIsVisible] = useState(true);

// Objects and arrays
const user = { name: 'Sarah', role: 'Designer' };
const colors = ['red', 'blue', 'green'];`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// React state (like dynamic properties in Figma)
const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState('Designer');
const [isVisible, setIsVisible] = useState(true);

// Objects (like component properties in Figma)
const user = { name: 'Sarah', role: 'UX Designer' };

// Arrays (like color palettes in Figma)
const colors = ['red', 'blue', 'green'];`,explanation:"State variables can change over time, just like how you can update text or colors in Figma."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsxs("label",{children:["Counter: ",e]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>t(e-1),children:r.jsx(Us,{size:16})}),r.jsx("button",{onClick:()=>t(e+1),children:r.jsx(Os,{size:16})}),r.jsx("button",{onClick:()=>t(0),children:r.jsx(lu,{size:16})})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Name:"}),r.jsx("input",{value:n,onChange:h=>i(h.target.value),placeholder:"Enter name"})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Visibility:"}),r.jsxs("button",{onClick:()=>l(!s),children:[s?r.jsx(Vp,{size:16}):r.jsx(Hp,{size:16}),s?" Hide":" Show"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Object:"}),r.jsxs("div",{className:"object-display",children:[r.jsxs("span",{children:["Name: ",o.name]}),r.jsxs("span",{children:["Role: ",o.role]})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Arrow Functions"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Arrow functions are like quick actions in Figma - shorter, more concise ways to perform tasks."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Traditional function
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

const calculateArea = (width, height) => width * height;`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Traditional function (like a full plugin in Figma)
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
{user ? <UserProfile /> : <LoginForm />}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Ternary operator: condition ? valueIfTrue : valueIfFalse
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
console.log(status);   // "Online" or "Last seen recently" or "Offline"`,explanation:"Ternary operators provide a concise way to write conditional logic in a single line."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Role:"}),r.jsxs("select",{id:"userRole",defaultValue:"Designer",onChange:h=>{const f=h.target.value==="Designer"?"Show design tools":"Show general tools";document.getElementById("roleMessage").textContent=f},children:[r.jsx("option",{value:"Designer",children:"Designer"}),r.jsx("option",{value:"Developer",children:"Developer"}),r.jsx("option",{value:"Manager",children:"Manager"})]}),r.jsxs("div",{className:"result",children:["Message: ",r.jsx("span",{id:"roleMessage",children:"Show design tools"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Loading State:"}),r.jsx("div",{className:"button-group",children:r.jsx("button",{onClick:()=>{const h=document.getElementById("loadingBtn");h.textContent=h.textContent==="Submit"?"Loading...":"Submit",h.style.backgroundColor=h.textContent==="Loading..."?"#f59e0b":"#3b82f6"},id:"loadingBtn",style:{backgroundColor:"#3b82f6"},children:"Submit"})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Theme Toggle:"}),r.jsx("button",{onClick:()=>{const h=document.getElementById("themeDisplay");h.textContent=h.textContent==="Light"?"Dark":"Light",h.style.color=h.textContent==="Dark"?"#fbbf24":"#1f2937"},children:"Toggle Theme"}),r.jsxs("div",{className:"result",children:["Current: ",r.jsx("span",{id:"themeDisplay",style:{color:"#1f2937"},children:"Light"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Destructuring"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Destructuring is like extracting specific properties from a component in Figma - you pull out just what you need."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Object destructuring (like extracting component properties)
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
console.log(tertiary);  // "green"`,explanation:"Destructuring allows you to extract values from objects and arrays into separate variables."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Output:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"name:"})," ",r.jsx("span",{className:"code-output",children:"Sarah"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"role:"})," ",r.jsx("span",{className:"code-output",children:"UX Designer"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"firstColor:"})," ",r.jsx("span",{className:"code-output",children:"red"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"tertiary:"})," ",r.jsx("span",{className:"code-output",children:"green"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Template Literals"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Template literals are like smart text in Figma - they combine static text with dynamic values."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Template literals (like smart text in Figma)
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

console.log(message2);  // "Hello Sarah, you have 5 tasks"`,explanation:"Template literals provide a cleaner way to create strings with embedded expressions."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Output:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"message2:"})," ",r.jsx("span",{className:"code-output",children:"Hello Sarah, you have 5 tasks"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"status:"})," ",r.jsx("span",{className:"code-output",children:"User is logged in"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Array Methods"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Array methods are like layer operations in Figma - you can filter, transform, and organize your data."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Array methods (like layer operations in Figma)
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
{name && <h1>Hello, {name}!</h1>}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Logical AND examples
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
}`,explanation:"The logical AND operator (&&) is perfect for conditional rendering - it only renders the right side when the left side is truthy."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Logical AND Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Toggle Conditions:"}),r.jsxs("div",{className:"button-group",children:[r.jsxs("button",{onClick:()=>d(h=>({...h,showMessage:!h.showMessage})),children:[a.showMessage?"Hide":"Show"," Message"]}),r.jsxs("button",{onClick:()=>d(h=>({...h,showCount:!h.showCount})),children:[a.showCount?"Hide":"Show"," Count"]}),r.jsxs("button",{onClick:()=>d(h=>({...h,hasError:!h.hasError})),children:[a.hasError?"Clear":"Show"," Error"]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Conditional Elements:"}),r.jsxs("div",{className:"result",children:[a.showMessage&&r.jsx("div",{style:{color:"#10b981",marginBottom:"8px"},children:"✅ This message only shows when condition is true"}),a.showCount&&r.jsxs("div",{style:{color:"#3b82f6",marginBottom:"8px"},children:["📊 Count: ",a.count]}),a.hasError&&r.jsx("div",{style:{color:"#ef4444",marginBottom:"8px"},children:"❌ Error: Something went wrong!"}),!a.showMessage&&!a.showCount&&!a.hasError&&r.jsx("div",{style:{color:"#94a3b8"},children:"No conditions are true - nothing to show"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Multiple Conditions:"}),r.jsx("div",{className:"result",children:a.showMessage&&a.showCount&&r.jsx("div",{style:{color:"#8b5cf6"},children:"🎉 Both conditions are true!"})})]})]})})]})]})]})]})}function im(){return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"React Core Concepts"}),r.jsx("p",{children:"Understanding React fundamentals through design thinking"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"What is React?"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," React is like Figma's component system on steroids - it's a library for building reusable UI components."]}),r.jsx("p",{children:"React is a JavaScript library for building user interfaces. It's like having a super-powered component system where you can create interactive, dynamic interfaces that respond to user actions and data changes."})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"JSX - JavaScript XML"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," JSX is like writing design specs in Figma - it combines structure (HTML) with logic (JavaScript)."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// JSX combines HTML with JavaScript
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
// 4. Must return single parent element`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// JSX combines HTML-like syntax with JavaScript
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
});`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// 1. Function Components (Modern, recommended)
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
));`,explanation:"Function components are the modern way to write React components. They're simpler and work better with hooks."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Component Types:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Function:"})," ",r.jsx("span",{className:"code-output",children:"Modern, hooks-friendly"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Arrow Function:"})," ",r.jsx("span",{className:"code-output",children:"Concise syntax"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Class:"})," ",r.jsx("span",{className:"code-output",children:"Legacy, avoid"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Pure:"})," ",r.jsx("span",{className:"code-output",children:"Performance optimized"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Fragments & Multiple Elements"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Fragments are like grouping elements in Figma without adding an extra container - you can return multiple items without a wrapper."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Without Fragment (adds extra div)
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
}`,explanation:"Fragments allow you to return multiple elements without adding an extra DOM node, keeping your HTML clean."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Fragment Types:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Empty Tags:"})," ",r.jsx("span",{className:"code-output",children:"<> </>"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"React.Fragment:"})," ",r.jsx("span",{className:"code-output",children:"Explicit syntax"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Arrays:"})," ",r.jsx("span",{className:"code-output",children:"With keys"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Conditional Rendering"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Conditional rendering is like using visibility settings in Figma - show different content based on conditions."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// 1. If/else with ternary operator
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
}`,explanation:"Conditional rendering allows you to show different UI based on conditions, just like how you control visibility in Figma."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Conditional Patterns:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Ternary:"})," ",r.jsx("span",{className:"code-output",children:"condition ? A : B"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Logical AND:"})," ",r.jsx("span",{className:"code-output",children:"condition && element"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Early Return:"})," ",r.jsx("span",{className:"code-output",children:"if (condition) return"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Switch:"})," ",r.jsx("span",{className:"code-output",children:"Multiple conditions"})]})]})]})]})]})]})}function sm(){const[e,t]=C.useState("Click me"),[n,i]=C.useState("primary"),[s,l]=C.useState("medium"),[o,c]=C.useState(!1),[a,d]=C.useState({name:"John Doe",email:"john@example.com",id:1}),[h,v]=C.useState("My Container"),[f,N]=C.useState("This is some content"),[x,k]=C.useState(null),[I,m]=C.useState(!1),[u,p]=C.useState({name:"",email:""});return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"React Components"}),r.jsx("p",{children:"Building reusable UI pieces like Figma components"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Props Deep Dive"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Props are like component properties in Figma - they allow you to customize instances with different values."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Component with props
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
};`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// 1. Basic props
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
}`,explanation:"Props are the primary way to pass data and functions to components, making them reusable and customizable."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Props Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Button Props:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:e,onChange:g=>t(g.target.value),placeholder:"Button text"}),r.jsxs("select",{value:n,onChange:g=>i(g.target.value),children:[r.jsx("option",{value:"primary",children:"Primary"}),r.jsx("option",{value:"secondary",children:"Secondary"}),r.jsx("option",{value:"danger",children:"Danger"})]}),r.jsxs("select",{value:s,onChange:g=>l(g.target.value),children:[r.jsx("option",{value:"small",children:"Small"}),r.jsx("option",{value:"medium",children:"Medium"}),r.jsx("option",{value:"large",children:"Large"})]}),r.jsx("button",{onClick:()=>c(!o),children:o?"Enable":"Disable"})]}),r.jsx("div",{className:"result",children:r.jsx("button",{className:`btn btn-${n} btn-${s} ${o?"disabled":""}`,disabled:o,onClick:()=>alert("Button clicked!"),style:{backgroundColor:n==="primary"?"#3b82f6":n==="secondary"?"#6b7280":"#ef4444",padding:s==="small"?"4px 8px":s==="medium"?"8px 16px":"12px 24px",opacity:o?.6:1,cursor:o?"not-allowed":"pointer"},children:e})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Card Props:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:a.name,onChange:g=>d(S=>({...S,name:g.target.value})),placeholder:"User name"}),r.jsx("input",{value:a.email,onChange:g=>d(S=>({...S,email:g.target.value})),placeholder:"User email"})]}),r.jsx("div",{className:"result",children:r.jsxs("div",{className:"user-card",style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[r.jsx("h3",{style:{margin:"0 0 8px 0"},children:a.name}),r.jsx("p",{style:{margin:"0 0 12px 0",color:"#6b7280"},children:a.email}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>alert("Edit user: "+a.id),style:{marginRight:"8px"},children:"Edit"}),r.jsx("button",{onClick:()=>alert("Delete user: "+a.id),style:{backgroundColor:"#ef4444"},children:"Delete"})]})]})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Container with Children:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:h,onChange:g=>v(g.target.value),placeholder:"Container title"}),r.jsx("input",{value:f,onChange:g=>N(g.target.value),placeholder:"Container content"})]}),r.jsx("div",{className:"result",children:r.jsxs("div",{className:"container",style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[h&&r.jsx("h2",{style:{margin:"0 0 12px 0"},children:h}),r.jsx("div",{children:f})]})})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Component Composition Patterns"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Component composition is like building complex designs in Figma by combining and nesting simple components."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Children composition
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
);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// 1. Children composition
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
};`,explanation:"Component composition patterns help you build flexible, reusable component systems."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Composition Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Layout Composition:"}),r.jsx("div",{className:"result",children:r.jsxs("div",{className:"layout",style:{border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[r.jsx("header",{style:{backgroundColor:"#f3f4f6",padding:"12px",borderBottom:"1px solid #e5e7eb"},children:r.jsx("h3",{style:{margin:0},children:"Header Content"})}),r.jsxs("div",{style:{display:"flex"},children:[r.jsxs("aside",{style:{backgroundColor:"#f9fafb",padding:"12px",width:"200px",borderRight:"1px solid #e5e7eb"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Sidebar"}),r.jsxs("ul",{style:{margin:0,paddingLeft:"16px"},children:[r.jsx("li",{children:"Menu Item 1"}),r.jsx("li",{children:"Menu Item 2"}),r.jsx("li",{children:"Menu Item 3"})]})]}),r.jsxs("main",{style:{padding:"16px",flex:1},children:[r.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Main Content"}),r.jsx("p",{children:"This is the main content area with flexible layout composition."})]})]}),r.jsx("footer",{style:{backgroundColor:"#f3f4f6",padding:"12px",borderTop:"1px solid #e5e7eb",textAlign:"center"},children:"Footer Content"})]})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Data Fetcher (Render Props):"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{m(!0),setTimeout(()=>{k({message:"Data loaded successfully!",timestamp:new Date().toLocaleTimeString()}),m(!1)},1500)},children:"Simulate Data Fetch"}),r.jsx("button",{onClick:()=>{k(null),m(!1)},children:"Clear Data"})]}),r.jsx("div",{className:"result",children:I?r.jsx("div",{style:{color:"#f59e0b"},children:"🔄 Loading data..."}):x?r.jsxs("div",{style:{color:"#10b981"},children:["✅ ",x.message,r.jsx("br",{}),r.jsxs("small",{children:["Time: ",x.timestamp]})]}):r.jsx("div",{style:{color:"#6b7280"},children:"No data loaded"})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Compound Form Components:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:u.name,onChange:g=>p(S=>({...S,name:g.target.value})),placeholder:"Name"}),r.jsx("input",{value:u.email,onChange:g=>p(S=>({...S,email:g.target.value})),placeholder:"Email"})]}),r.jsx("div",{className:"result",children:r.jsxs("form",{onSubmit:g=>{g.preventDefault(),alert("Form submitted: "+JSON.stringify(u))},style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[r.jsxs("div",{style:{marginBottom:"12px"},children:[r.jsx("label",{style:{display:"block",marginBottom:"4px"},children:"Name:"}),r.jsx("input",{value:u.name,onChange:g=>p(S=>({...S,name:g.target.value})),style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #d1d5db"}})]}),r.jsxs("div",{style:{marginBottom:"12px"},children:[r.jsx("label",{style:{display:"block",marginBottom:"4px"},children:"Email:"}),r.jsx("input",{value:u.email,onChange:g=>p(S=>({...S,email:g.target.value})),style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #d1d5db"}})]}),r.jsx("button",{type:"submit",style:{backgroundColor:"#3b82f6",color:"white",padding:"8px 16px",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Submit Form"})]})})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Component Best Practices"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Component best practices are like design system guidelines in Figma - they ensure consistency and maintainability."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// 1. Single responsibility
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
}`,explanation:"Following best practices ensures your components are maintainable, reusable, and performant."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Best Practices:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Single Responsibility:"})," ",r.jsx("span",{className:"code-output",children:"One job per component"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Clean Props:"})," ",r.jsx("span",{className:"code-output",children:"Logical interfaces"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Consistent Naming:"})," ",r.jsx("span",{className:"code-output",children:"Clear conventions"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Error Handling:"})," ",r.jsx("span",{className:"code-output",children:"Error boundaries"})]})]})]})]})]})]})}function lm(){const[e,t]=C.useState(0),[n,i]=C.useState({name:"",email:""}),[s,l]=C.useState(""),[o,c]=C.useState([]),[a,d]=C.useState("React Cheatsheet"),[h,v]=C.useState(0),[f,N]=C.useState({width:window.innerWidth,height:window.innerHeight});return C.useEffect(()=>{document.title=a},[a]),C.useEffect(()=>{const x=()=>{N({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"React Hooks"}),r.jsx("p",{children:"Managing state and side effects in components"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"useState Hook Deep Dive"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," useState is like having interactive properties in Figma - values that can change and update the UI."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`const [state, setState] = useState(initialValue);

// Examples:
const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [user, setUser] = useState({ name: '', email: '' });
const [todos, setTodos] = useState([]);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// 1. Basic useState
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
}`,explanation:"useState is the most fundamental hook for managing component state. It returns the current state and a function to update it."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive useState Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsxs("label",{children:["Counter: ",e]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>t(e-1),children:r.jsx(Us,{size:16})}),r.jsx("button",{onClick:()=>t(e+1),children:r.jsx(Os,{size:16})}),r.jsx("button",{onClick:()=>t(0),children:r.jsx(lu,{size:16})})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Form:"}),r.jsx("input",{value:n.name,onChange:x=>i(k=>({...k,name:x.target.value})),placeholder:"Name"}),r.jsx("input",{value:n.email,onChange:x=>i(k=>({...k,email:x.target.value})),placeholder:"Email"}),r.jsxs("div",{className:"result",children:["Name: ",n.name||"Not set"," | Email: ",n.email||"Not set"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Todo List:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:s,onChange:x=>l(x.target.value),placeholder:"Add todo"}),r.jsx("button",{onClick:()=>{s.trim()&&(c(x=>[...x,{id:Date.now(),text:s,completed:!1}]),l(""))},children:"Add"})]}),r.jsx("ul",{className:"todo-list",children:o.map(x=>r.jsx("li",{onClick:()=>c(k=>k.map(I=>I.id===x.id?{...I,completed:!I.completed}:I)),style:{textDecoration:x.completed?"line-through":"none",cursor:"pointer"},children:x.text},x.id))})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"useEffect Hook Deep Dive"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," useEffect is like auto-layout or smart animate in Figma - it runs code when something changes."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`useEffect(() => {
  // Effect code
}, [dependencies]);

// Examples:
useEffect(() => {}, []);           // Run once
useEffect(() => {}, [dep]);        // Run when dep changes
useEffect(() => {
  return () => cleanup();          // Cleanup function
}, []);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// 1. Basic useEffect (runs after every render)
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
}`,explanation:"useEffect handles side effects in functional components, such as data fetching, subscriptions, or DOM manipulation."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive useEffect Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Document Title Effect:"}),r.jsx("input",{value:a,onChange:x=>d(x.target.value),placeholder:"Enter page title"}),r.jsxs("div",{className:"result",children:["Current title: ",document.title]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Counter with Effect:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>v(h-1),children:r.jsx(Us,{size:16})}),r.jsx("span",{style:{padding:"8px 16px",background:"rgba(255,255,255,0.1)",borderRadius:"4px"},children:h}),r.jsx("button",{onClick:()=>v(h+1),children:r.jsx(Os,{size:16})})]}),r.jsxs("div",{className:"result",children:["Effect runs when count changes: ",h%2===0?"Even":"Odd"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Window Size Effect:"}),r.jsxs("div",{className:"result",children:["Window size: ",f.width," x ",f.height]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Additional Hooks"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Additional hooks are like specialized tools in Figma - each serves a specific purpose."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// 1. useRef - Access DOM elements
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
}`,explanation:"Additional hooks provide specialized functionality for different use cases in React applications."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Additional Hooks:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"useRef:"})," ",r.jsx("span",{className:"code-output",children:"DOM access"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"useMemo:"})," ",r.jsx("span",{className:"code-output",children:"Memoize values"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"useCallback:"})," ",r.jsx("span",{className:"code-output",children:"Memoize functions"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"useReducer:"})," ",r.jsx("span",{className:"code-output",children:"Complex state"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Custom Hooks"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Custom hooks are like creating your own plugins in Figma - reusable logic that can be shared between components."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// 1. Basic custom hook
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
}`,explanation:"Custom hooks let you extract and reuse stateful logic between components, making your code more modular and reusable."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Custom Hook Benefits:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Reusability:"})," ",r.jsx("span",{className:"code-output",children:"Share logic"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Cleaner Components:"})," ",r.jsx("span",{className:"code-output",children:"Less complexity"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Testing:"})," ",r.jsx("span",{className:"code-output",children:"Easier to test"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Composition:"})," ",r.jsx("span",{className:"code-output",children:"Combine hooks"})]})]})]})]})]})]})}function om(){const[e,t]=C.useState([{id:1,title:"Design homepage",completed:!1,category:"design"},{id:2,title:"Create wireframes",completed:!0,category:"design"},{id:3,title:"Build prototype",completed:!1,category:"development"},{id:4,title:"Write tests",completed:!1,category:"testing"},{id:5,title:"Deploy app",completed:!1,category:"deployment"}]),[n,i]=C.useState("all"),[s,l]=C.useState(""),[o,c]=C.useState({name:"Sarah",isAdmin:!1,loading:!1,error:null}),[a,d]=C.useState({name:"",email:""}),[h,v]=C.useState(!1),[f,N]=C.useState(!1),[x,k]=C.useState(!1),[I,m]=C.useState(0);return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Data Handling"}),r.jsx("p",{children:"Working with dynamic data and lists"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Mapping Arrays"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," map() is like duplicating components in Figma - you create multiple instances from a list."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`array.map(item => (
  <Component key={item.id}>
    {item.property}
  </Component>
));

// Examples:
items.map(item => <li key={item.id}>{item.name}</li>);
users.map(user => <UserCard key={user.id} user={user} />);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Mapping over arrays (like duplicating components in Figma)
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
}`,explanation:"map() transforms each item in an array into a React element, creating a list of components from your data."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Array Mapping:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Task List (Mapped from Array):"}),r.jsx("ul",{className:"todo-list",children:e.map(u=>r.jsxs("li",{onClick:()=>t(p=>p.map(g=>g.id===u.id?{...g,completed:!g.completed}:g)),style:{textDecoration:u.completed?"line-through":"none",cursor:"pointer",opacity:u.completed?.6:1},children:[u.title," ",u.completed&&"✓"]},u.id))})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Add New Task:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:s,onChange:u=>l(u.target.value),placeholder:"Enter task title"}),r.jsx("button",{onClick:()=>{s.trim()&&(t(u=>[...u,{id:Date.now(),title:s,completed:!1,category:"general"}]),l(""))},children:"Add Task"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Filtering Data"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," filter() is like using the layers panel to show/hide elements based on criteria."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`array.filter(item => condition);

// Examples:
items.filter(item => item.completed);
users.filter(user => user.isActive);
tasks.filter(task => task.category === 'design');

// Combined with map:
array.filter(item => condition).map(item => <Component />);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Filtering data (like showing/hiding layers in Figma)
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
}`,explanation:"filter() creates a new array with only the elements that pass a test, perfect for creating filtered views of your data."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Data Filtering:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Filter by Category:"}),r.jsxs("select",{value:n,onChange:u=>i(u.target.value),children:[r.jsx("option",{value:"all",children:"All Tasks"}),r.jsx("option",{value:"design",children:"Design"}),r.jsx("option",{value:"development",children:"Development"}),r.jsx("option",{value:"testing",children:"Testing"}),r.jsx("option",{value:"deployment",children:"Deployment"}),r.jsx("option",{value:"general",children:"General"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Filtered Tasks:"}),r.jsx("ul",{className:"todo-list",children:e.filter(u=>n==="all"||u.category===n).map(u=>r.jsxs("li",{style:{opacity:u.completed?.6:1},children:[u.title," (",u.category,") ",u.completed&&"✓"]},u.id))}),r.jsxs("div",{className:"result",children:["Showing ",e.filter(u=>n==="all"||u.category===n).length," of ",e.length," tasks"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Filter by Status:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>i("completed"),children:"Show Completed"}),r.jsx("button",{onClick:()=>i("pending"),children:"Show Pending"}),r.jsx("button",{onClick:()=>i("all"),children:"Show All"})]}),r.jsxs("div",{className:"result",children:[n==="completed"&&e.filter(u=>u.completed).length+" completed tasks",n==="pending"&&e.filter(u=>!u.completed).length+" pending tasks",n==="all"&&e.length+" total tasks"]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Conditional Rendering"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Conditional rendering is like using visibility settings in Figma - showing/hiding elements based on conditions."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}

// Examples:
{isLoading && <Spinner />}
{user ? <UserProfile /> : <LoginForm />}
{items.length > 0 ? <ItemList /> : <EmptyState />}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Conditional rendering (like visibility settings in Figma)
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
const { key } = object;  // Destructuring`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Key-value pairs in objects (like Figma component properties)
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
const [isLoading, setIsLoading] = useState(false);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Button state control (like Figma component variants)
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
}`,explanation:"Button state control involves managing different states (enabled, disabled, loading) and providing visual feedback to users based on the current state."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Button States:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Form Validation Demo:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{placeholder:"Name",value:a.name,onChange:u=>d(p=>({...p,name:u.target.value}))}),r.jsx("input",{placeholder:"Email",value:a.email,onChange:u=>d(p=>({...p,email:u.target.value}))})]}),r.jsx("div",{className:"button-group",children:r.jsx("button",{onClick:()=>{v(!0),setTimeout(()=>v(!1),2e3)},disabled:!a.name||!a.email||h,style:{backgroundColor:!a.name||!a.email?"#6b7280":"#3b82f6",opacity:!a.name||!a.email||h?.6:1,cursor:!a.name||!a.email||h?"not-allowed":"pointer"},children:h?"Submitting...":"Submit Form"})}),r.jsxs("div",{className:"result",children:["Form valid: ",a.name&&a.email?"✅":"❌"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Button State Toggle:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>N(!f),style:{backgroundColor:f?"#ef4444":"#10b981"},children:f?"Enable Button":"Disable Button"}),r.jsx("button",{onClick:()=>k(!x),style:{backgroundColor:x?"#f59e0b":"#8b5cf6"},children:x?"Stop Loading":"Start Loading"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Controlled Button:"}),r.jsx("div",{className:"button-group",children:r.jsx("button",{onClick:()=>m(u=>u+1),disabled:f||x,style:{backgroundColor:f?"#6b7280":"#3b82f6",opacity:f||x?.6:1,cursor:f||x?"not-allowed":"pointer"},children:x?"Loading...":"Click me! ("+I+")"})}),r.jsxs("div",{className:"result",children:["Button state: ",f?"Disabled":x?"Loading":"Enabled"]})]})]})})]})]})]})]})}function am(){const[e,t]=C.useState(0),[n,i]=C.useState({x:0,y:0}),[s,l]=C.useState({name:"",email:"",message:""}),[o,c]=C.useState("No events yet");return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Events & Interactions"}),r.jsx("p",{children:"Making your UI interactive like Figma prototypes"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Event Handlers"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Event handlers are like interactions in Figma - they respond to user actions."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Event handler function
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
// onClick, onChange, onSubmit, onKeyDown, onMouseEnter, onMouseLeave`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Event handlers (like Figma interactions)
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

// Common events: onClick, onChange, onSubmit, onKeyDown, etc.`,explanation:"Event handlers are functions that run when users interact with your UI, just like interactions in Figma prototypes."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Event Examples:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Click Events:"}),r.jsxs("div",{className:"button-group",children:[r.jsxs("button",{onClick:()=>{t(a=>a+1),c("Button clicked!")},children:["Click Counter: ",e]}),r.jsx("button",{onMouseEnter:()=>c("Mouse entered button"),onMouseLeave:()=>c("Mouse left button"),children:"Hover Me"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Mouse Position Tracker:"}),r.jsxs("div",{style:{width:"200px",height:"100px",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onMouseMove:a=>{const d=a.target.getBoundingClientRect();i({x:Math.round(a.clientX-d.left),y:Math.round(a.clientY-d.top)})},children:["Move mouse here",r.jsxs("div",{style:{position:"absolute",top:"4px",left:"4px",fontSize:"12px",color:"#94a3b8"},children:["X: ",n.x,", Y: ",n.y]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Last Event:"}),r.jsx("div",{className:"result",children:o})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Form Handling"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Form handling is like creating input fields in Figma - you collect and process user input."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Form state
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
</form>`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Form handling (like input fields in Figma)
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
Name: ${s.name}
Email: ${s.email}
Message: ${s.message}`),l({name:"",email:"",message:""})},children:[r.jsx("input",{type:"text",name:"name",value:s.name,onChange:a=>l(d=>({...d,name:a.target.value})),placeholder:"Your name",style:{marginBottom:"8px"}}),r.jsx("input",{type:"email",name:"email",value:s.email,onChange:a=>l(d=>({...d,email:a.target.value})),placeholder:"Your email",style:{marginBottom:"8px"}}),r.jsx("textarea",{name:"message",value:s.message,onChange:a=>l(d=>({...d,message:a.target.value})),placeholder:"Your message",style:{marginBottom:"8px",minHeight:"60px"}}),r.jsx("button",{type:"submit",style:{width:"100%"},children:"Send Message"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Form Data Preview:"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["Name: ",s.name||"Not entered"]}),r.jsxs("div",{children:["Email: ",s.email||"Not entered"]}),r.jsxs("div",{children:["Message: ",s.message||"Not entered"]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Form Validation:"}),r.jsxs("div",{className:"result",children:[!s.name&&r.jsx("div",{style:{color:"#ef4444"},children:"❌ Name is required"}),!s.email&&r.jsx("div",{style:{color:"#ef4444"},children:"❌ Email is required"}),!s.message&&r.jsx("div",{style:{color:"#ef4444"},children:"❌ Message is required"}),s.name&&s.email&&s.message&&r.jsx("div",{style:{color:"#10b981"},children:"✅ Form is complete"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"State Updates"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," State updates are like changing properties in Figma - they trigger visual updates."]}),r.jsx(D,{code:`// State updates (like changing properties in Figma)
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
}`,explanation:"State updates trigger re-renders, just like how changing properties in Figma updates the visual appearance."})]})]})}function cm(){C.useState("light");const[e,t]=C.useState("primary"),[n,i]=C.useState("default"),[s,l]=C.useState("desktop");return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Styling & Design"}),r.jsx("p",{children:"CSS, styling approaches, and design system implementation"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"CSS-in-JS (Styled Components)"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Styled Components are like Figma components with built-in styles - they combine design and functionality."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Install: npm install styled-components
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
<StyledButton variant="primary">Click me</StyledButton>`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Styled Components (like Figma components with styles)
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
}`,explanation:"Styled Components combine CSS and React components, making them reusable and maintainable like Figma components."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Styled Components Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Button Variant:"}),r.jsxs("select",{value:e,onChange:o=>t(o.target.value),children:[r.jsx("option",{value:"primary",children:"Primary"}),r.jsx("option",{value:"secondary",children:"Secondary"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Card Style:"}),r.jsxs("select",{value:n,onChange:o=>i(o.target.value),children:[r.jsx("option",{value:"default",children:"Default"}),r.jsx("option",{value:"elevated",children:"Elevated"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsxs("div",{style:{background:e==="primary"?"#6366f1":"#f59e0b",color:"white",padding:"12px 24px",border:"none",borderRadius:"8px",cursor:"pointer",marginBottom:"16px"},children:[e==="primary"?"Primary":"Secondary"," Button"]}),r.jsxs("div",{style:{background:"white",borderRadius:"12px",padding:"24px",boxShadow:n==="elevated"?"0 10px 25px rgba(0, 0, 0, 0.15)":"0 4px 6px rgba(0, 0, 0, 0.1)",border:"1px solid #e5e7eb"},children:[r.jsx("h3",{children:"Styled Card"}),r.jsx("p",{children:"This card has built-in styles!"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"CSS Modules & Scoped Styling"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," CSS Modules are like component-specific styles in Figma - they don't affect other components."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Button.module.css
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
}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// CSS Modules (scoped styling)
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
</button>`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Tailwind CSS (utility-first approach)
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
}`,explanation:"Tailwind CSS provides utility classes that you combine to build designs, similar to how you use design tokens in Figma."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Tailwind Utilities Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Responsive Size:"}),r.jsxs("select",{value:s,onChange:o=>l(o.target.value),children:[r.jsx("option",{value:"mobile",children:"Mobile"}),r.jsx("option",{value:"tablet",children:"Tablet"}),r.jsx("option",{value:"desktop",children:"Desktop"})]})]}),r.jsx("div",{className:"demo-item",children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:s==="mobile"?"1fr":s==="tablet"?"1fr 1fr":"1fr 1fr 1fr",gap:"16px",marginTop:"16px"},children:[r.jsx("div",{style:{background:"#f3f4f6",padding:"16px",borderRadius:"4px"},children:"Card 1"}),r.jsx("div",{style:{background:"#f3f4f6",padding:"16px",borderRadius:"4px"},children:"Card 2"}),r.jsx("div",{style:{background:"#f3f4f6",padding:"16px",borderRadius:"4px"},children:"Card 3"})]})})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Responsive Design Patterns"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Responsive design is like creating different frame sizes in Figma - you design for multiple screen sizes."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// CSS Media Queries
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
}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Responsive Design Patterns
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
}`,explanation:"Responsive design ensures your UI works well on all screen sizes, from mobile to desktop."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Responsive Design Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("p",{children:r.jsx("strong",{children:"Responsive Breakpoints:"})}),r.jsxs("ul",{children:[r.jsx("li",{children:"📱 Mobile: < 768px (1 column)"}),r.jsx("li",{children:"📱 Tablet: 768px - 1024px (2 columns)"}),r.jsx("li",{children:"🖥️ Desktop: > 1024px (3 columns)"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("p",{children:r.jsx("strong",{children:"Design Principles:"})}),r.jsxs("ul",{children:[r.jsx("li",{children:"✅ Mobile-first approach"}),r.jsx("li",{children:"✅ Flexible layouts"}),r.jsx("li",{children:"✅ Scalable typography"}),r.jsx("li",{children:"✅ Touch-friendly interactions"})]})]})]})})]})]})]})]})}function um(){const[e,t]=C.useState("/"),[n,i]=C.useState(["/"]),[s,l]=C.useState({}),o=a=>{t(a),i(d=>[...d,a])},c=(a,d)=>{t(a),l(d),i(h=>[...h,a+"?"+new URLSearchParams(d)])};return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Navigation & Routing"}),r.jsx("p",{children:"Page navigation, routing, and URL management"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"React Router Basics"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," React Router is like creating multiple pages in Figma - you can navigate between different views."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Install: npm install react-router-dom
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
<Link to="/contact">Contact</Link>`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// React Router Setup
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
}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Dynamic Routes with Parameters
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
}`,explanation:"Dynamic routes allow you to create flexible URLs that can display different content based on parameters."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Dynamic Routes Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Navigate with Parameters:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>c("/products/1",{category:"electronics"}),children:"Product 1 (Electronics)"}),r.jsx("button",{onClick:()=>c("/products/2",{category:"books"}),children:"Product 2 (Books)"}),r.jsx("button",{onClick:()=>c("/products/3",{category:"clothing"}),children:"Product 3 (Clothing)"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Current Parameters:"}),r.jsx("div",{className:"result",children:Object.keys(s).length>0?Object.entries(s).map(([a,d])=>a+": "+d).join(", "):"No parameters"})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Protected Routes & Authentication"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Protected routes are like Figma files with different permission levels - some content is only visible to certain users."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Protected Route Component
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
};`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Protected Routes Implementation
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
}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(D,{code:`// Common Navigation Patterns

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
}`,explanation:"Different navigation patterns provide clear ways for users to move through your application."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Navigation Patterns Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("p",{children:r.jsx("strong",{children:"Common Patterns:"})}),r.jsxs("ul",{children:[r.jsx("li",{children:"🍞 Breadcrumbs: Show current location"}),r.jsx("li",{children:"📑 Tabs: Switch between related content"}),r.jsx("li",{children:"📱 Sidebar: Persistent navigation"}),r.jsx("li",{children:"☰ Mobile Menu: Collapsible navigation"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("p",{children:r.jsx("strong",{children:"Best Practices:"})}),r.jsxs("ul",{children:[r.jsx("li",{children:"✅ Clear visual hierarchy"}),r.jsx("li",{children:"✅ Consistent navigation"}),r.jsx("li",{children:"✅ Accessible navigation"}),r.jsx("li",{children:"✅ Mobile-friendly design"})]})]})]})})]})]})]})]})}function dm(){const[e,t]=C.useState("html"),[n,i]=C.useState(""),s=[{category:"Document Structure",elements:[{tag:"<!DOCTYPE html>",description:"Document type declaration",example:"<!DOCTYPE html>"},{tag:"<html>",description:"Root element",example:'<html lang="en">'},{tag:"<head>",description:"Document metadata",example:"<head><title>Page Title</title></head>"},{tag:"<title>",description:"Page title",example:"<title>My Website</title>"},{tag:"<body>",description:"Document body",example:"<body>Content here</body>"},{tag:"<meta>",description:"Metadata",example:'<meta charset="UTF-8">'},{tag:"<link>",description:"External resource link",example:'<link rel="stylesheet" href="style.css">'},{tag:"<script>",description:"JavaScript code",example:'<script src="script.js"><\/script>'}]},{category:"Text Elements",elements:[{tag:"<h1> to <h6>",description:"Headings",example:"<h1>Main Heading</h1>"},{tag:"<p>",description:"Paragraph",example:"<p>This is a paragraph.</p>"},{tag:"<span>",description:"Inline text",example:"<span>Inline text</span>"},{tag:"<div>",description:"Block container",example:"<div>Block content</div>"},{tag:"<br>",description:"Line break",example:"Text<br>New line"},{tag:"<hr>",description:"Horizontal rule",example:"<hr>"},{tag:"<strong>",description:"Bold text",example:"<strong>Bold text</strong>"},{tag:"<em>",description:"Italic text",example:"<em>Italic text</em>"},{tag:"<mark>",description:"Highlighted text",example:"<mark>Highlighted</mark>"},{tag:"<small>",description:"Small text",example:"<small>Small text</small>"},{tag:"<sub>",description:"Subscript",example:"H<sub>2</sub>O"},{tag:"<sup>",description:"Superscript",example:"x<sup>2</sup>"}]},{category:"Lists",elements:[{tag:"<ul>",description:"Unordered list",example:"<ul><li>Item 1</li></ul>"},{tag:"<ol>",description:"Ordered list",example:"<ol><li>Item 1</li></ol>"},{tag:"<li>",description:"List item",example:"<li>List item</li>"},{tag:"<dl>",description:"Description list",example:"<dl><dt>Term</dt><dd>Definition</dd></dl>"},{tag:"<dt>",description:"Description term",example:"<dt>Term</dt>"},{tag:"<dd>",description:"Description details",example:"<dd>Definition</dd>"}]},{category:"Links & Media",elements:[{tag:"<a>",description:"Hyperlink",example:'<a href="https://example.com">Link</a>'},{tag:"<img>",description:"Image",example:'<img src="image.jpg" alt="Description">'},{tag:"<video>",description:"Video",example:'<video src="video.mp4" controls></video>'},{tag:"<audio>",description:"Audio",example:'<audio src="audio.mp3" controls></audio>'},{tag:"<iframe>",description:"Inline frame",example:'<iframe src="https://example.com"></iframe>'}]},{category:"Forms",elements:[{tag:"<form>",description:"Form container",example:'<form action="/submit" method="post">'},{tag:"<input>",description:"Input field",example:'<input type="text" name="username">'},{tag:"<label>",description:"Form label",example:'<label for="username">Username:</label>'},{tag:"<textarea>",description:"Multi-line input",example:'<textarea name="message"></textarea>'},{tag:"<select>",description:"Dropdown",example:"<select><option>Option 1</option></select>"},{tag:"<option>",description:"Dropdown option",example:'<option value="1">Option 1</option>'},{tag:"<button>",description:"Button",example:'<button type="submit">Submit</button>'},{tag:"<fieldset>",description:"Form group",example:"<fieldset><legend>Group</legend></fieldset>"},{tag:"<legend>",description:"Fieldset title",example:"<legend>Form Group</legend>"}]},{category:"Tables",elements:[{tag:"<table>",description:"Table container",example:"<table></table>"},{tag:"<thead>",description:"Table header",example:"<thead><tr><th>Header</th></tr></thead>"},{tag:"<tbody>",description:"Table body",example:"<tbody><tr><td>Data</td></tr></tbody>"},{tag:"<tfoot>",description:"Table footer",example:"<tfoot><tr><td>Footer</td></tr></tfoot>"},{tag:"<tr>",description:"Table row",example:"<tr><td>Cell</td></tr>"},{tag:"<th>",description:"Header cell",example:"<th>Header Cell</th>"},{tag:"<td>",description:"Data cell",example:"<td>Data Cell</td>"},{tag:"<caption>",description:"Table caption",example:"<caption>Table Title</caption>"}]},{category:"Semantic Elements",elements:[{tag:"<header>",description:"Page header",example:"<header>Header content</header>"},{tag:"<nav>",description:"Navigation",example:"<nav>Navigation links</nav>"},{tag:"<main>",description:"Main content",example:"<main>Main content</main>"},{tag:"<section>",description:"Content section",example:"<section>Section content</section>"},{tag:"<article>",description:"Article content",example:"<article>Article content</article>"},{tag:"<aside>",description:"Sidebar content",example:"<aside>Sidebar content</aside>"},{tag:"<footer>",description:"Page footer",example:"<footer>Footer content</footer>"},{tag:"<figure>",description:"Figure container",example:'<figure><img src="image.jpg"><figcaption>Caption</figcaption></figure>'},{tag:"<figcaption>",description:"Figure caption",example:"<figcaption>Image description</figcaption>"}]}],l=[{category:"Layout & Display",properties:[{property:"display",values:"block, inline, inline-block, flex, grid, none",description:"Element display type"},{property:"position",values:"static, relative, absolute, fixed, sticky",description:"Positioning method"},{property:"top, right, bottom, left",values:"auto, 0, 10px, 50%, etc.",description:"Position offsets"},{property:"float",values:"left, right, none",description:"Element floating"},{property:"clear",values:"left, right, both, none",description:"Clear floating elements"},{property:"z-index",values:"auto, 0, 1, 999, etc.",description:"Stacking order"},{property:"overflow",values:"visible, hidden, scroll, auto",description:"Content overflow handling"},{property:"visibility",values:"visible, hidden, collapse",description:"Element visibility"}]},{category:"Box Model",properties:[{property:"width, height",values:"auto, 100px, 50%, 100vw, etc.",description:"Element dimensions"},{property:"margin",values:"0, 10px, 1em, auto, etc.",description:"Outer spacing"},{property:"padding",values:"0, 10px, 1em, etc.",description:"Inner spacing"},{property:"border",values:"1px solid black, none, etc.",description:"Border shorthand"},{property:"border-width",values:"thin, medium, thick, 1px, etc.",description:"Border thickness"},{property:"border-style",values:"solid, dashed, dotted, none, etc.",description:"Border style"},{property:"border-color",values:"black, #000, rgb(0,0,0), etc.",description:"Border color"},{property:"border-radius",values:"0, 5px, 50%, etc.",description:"Corner rounding"},{property:"box-sizing",values:"content-box, border-box",description:"Box model calculation"}]},{category:"Flexbox",properties:[{property:"flex-direction",values:"row, row-reverse, column, column-reverse",description:"Flex direction"},{property:"flex-wrap",values:"nowrap, wrap, wrap-reverse",description:"Flex wrapping"},{property:"justify-content",values:"flex-start, center, flex-end, space-between, space-around",description:"Main axis alignment"},{property:"align-items",values:"stretch, flex-start, center, flex-end, baseline",description:"Cross axis alignment"},{property:"align-content",values:"stretch, flex-start, center, flex-end, space-between",description:"Multi-line alignment"},{property:"flex-grow",values:"0, 1, 2, etc.",description:"Growth factor"},{property:"flex-shrink",values:"0, 1, 2, etc.",description:"Shrink factor"},{property:"flex-basis",values:"auto, 0, 100px, 50%, etc.",description:"Initial size"},{property:"flex",values:"0 1 auto, 1, 1 0 100px, etc.",description:"Flex shorthand"}]},{category:"Grid",properties:[{property:"grid-template-columns",values:"1fr, 100px, repeat(3, 1fr), etc.",description:"Column definitions"},{property:"grid-template-rows",values:"1fr, 100px, repeat(3, 1fr), etc.",description:"Row definitions"},{property:"grid-template-areas",values:'"header header" "sidebar main"',description:"Area definitions"},{property:"grid-column-gap",values:"0, 10px, 1em, etc.",description:"Column gaps"},{property:"grid-row-gap",values:"0, 10px, 1em, etc.",description:"Row gaps"},{property:"grid-gap",values:"10px, 10px 20px, etc.",description:"Grid gaps shorthand"},{property:"grid-column",values:"1, 1 / 3, span 2, etc.",description:"Column placement"},{property:"grid-row",values:"1, 1 / 3, span 2, etc.",description:"Row placement"},{property:"justify-items",values:"start, center, end, stretch",description:"Item alignment"},{property:"align-items",values:"start, center, end, stretch",description:"Item alignment"}]},{category:"Typography",properties:[{property:"font-family",values:'Arial, "Times New Roman", sans-serif, etc.',description:"Font family"},{property:"font-size",values:"16px, 1em, 1.2rem, 120%, etc.",description:"Font size"},{property:"font-weight",values:"normal, bold, 100-900, etc.",description:"Font weight"},{property:"font-style",values:"normal, italic, oblique",description:"Font style"},{property:"line-height",values:"normal, 1.5, 24px, etc.",description:"Line height"},{property:"text-align",values:"left, center, right, justify",description:"Text alignment"},{property:"text-decoration",values:"none, underline, overline, line-through",description:"Text decoration"},{property:"text-transform",values:"none, uppercase, lowercase, capitalize",description:"Text transformation"},{property:"letter-spacing",values:"normal, 1px, 0.1em, etc.",description:"Letter spacing"},{property:"word-spacing",values:"normal, 2px, 0.2em, etc.",description:"Word spacing"},{property:"white-space",values:"normal, nowrap, pre, pre-wrap",description:"White space handling"},{property:"text-overflow",values:"clip, ellipsis",description:"Text overflow"}]},{category:"Colors & Backgrounds",properties:[{property:"color",values:"black, #000, rgb(0,0,0), rgba(0,0,0,0.5), etc.",description:"Text color"},{property:"background-color",values:"white, #fff, rgb(255,255,255), etc.",description:"Background color"},{property:"background-image",values:'url("image.jpg"), linear-gradient(), etc.',description:"Background image"},{property:"background-repeat",values:"repeat, no-repeat, repeat-x, repeat-y",description:"Background repeat"},{property:"background-position",values:"center, top left, 50% 50%, etc.",description:"Background position"},{property:"background-size",values:"auto, cover, contain, 100px 200px",description:"Background size"},{property:"background-attachment",values:"scroll, fixed, local",description:"Background attachment"},{property:"background",values:"shorthand for all background properties",description:"Background shorthand"},{property:"opacity",values:"0, 0.5, 1, etc.",description:"Element opacity"}]},{category:"Transforms & Animations",properties:[{property:"transform",values:"translate(), rotate(), scale(), skew(), etc.",description:"Element transformation"},{property:"transform-origin",values:"center, top left, 50% 50%, etc.",description:"Transform origin"},{property:"transition",values:"all 0.3s ease, width 0.5s linear, etc.",description:"Transition shorthand"},{property:"transition-property",values:"all, width, height, color, etc.",description:"Transition properties"},{property:"transition-duration",values:"0s, 0.3s, 1s, etc.",description:"Transition duration"},{property:"transition-timing-function",values:"ease, linear, ease-in, ease-out, ease-in-out",description:"Transition timing"},{property:"animation",values:"slideIn 1s ease-in-out, etc.",description:"Animation shorthand"},{property:"animation-name",values:"slideIn, fadeOut, bounce, etc.",description:"Animation name"},{property:"animation-duration",values:"0s, 1s, 2.5s, etc.",description:"Animation duration"},{property:"animation-timing-function",values:"ease, linear, ease-in, ease-out, ease-in-out",description:"Animation timing"},{property:"animation-delay",values:"0s, 1s, -1s, etc.",description:"Animation delay"},{property:"animation-iteration-count",values:"1, infinite, 3, etc.",description:"Animation iterations"},{property:"animation-direction",values:"normal, reverse, alternate, alternate-reverse",description:"Animation direction"},{property:"animation-fill-mode",values:"none, forwards, backwards, both",description:"Animation fill mode"}]},{category:"Responsive Design",properties:[{property:"@media",values:"@media (max-width: 768px) { }",description:"Media queries"},{property:"min-width",values:"320px, 768px, 1024px, etc.",description:"Minimum width"},{property:"max-width",values:"767px, 1023px, 1200px, etc.",description:"Maximum width"},{property:"orientation",values:"portrait, landscape",description:"Device orientation"},{property:"aspect-ratio",values:"16/9, 4/3, 1/1, etc.",description:"Aspect ratio"},{property:"viewport",values:"width=device-width, initial-scale=1.0",description:"Viewport meta tag"}]},{category:"Pseudo-classes & Pseudo-elements",properties:[{property:":hover",values:"element:hover { }",description:"Mouse hover state"},{property:":active",values:"element:active { }",description:"Active state"},{property:":focus",values:"element:focus { }",description:"Focus state"},{property:":visited",values:"a:visited { }",description:"Visited link state"},{property:":first-child",values:"element:first-child { }",description:"First child element"},{property:":last-child",values:"element:last-child { }",description:"Last child element"},{property:":nth-child()",values:"element:nth-child(2n) { }",description:"Nth child element"},{property:"::before",values:'element::before { content: ""; }',description:"Before pseudo-element"},{property:"::after",values:'element::after { content: ""; }',description:"After pseudo-element"},{property:"::first-line",values:"p::first-line { }",description:"First line of text"},{property:"::first-letter",values:"p::first-letter { }",description:"First letter of text"}]}],o=s.map(a=>({...a,elements:a.elements.filter(d=>d.tag.toLowerCase().includes(n.toLowerCase())||d.description.toLowerCase().includes(n.toLowerCase()))})).filter(a=>a.elements.length>0),c=l.map(a=>({...a,properties:a.properties.filter(d=>d.property.toLowerCase().includes(n.toLowerCase())||d.description.toLowerCase().includes(n.toLowerCase()))})).filter(a=>a.properties.length>0);return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"HTML & CSS Cheatsheet"}),r.jsx("p",{children:"Complete reference for HTML elements and CSS properties"}),r.jsx("div",{className:"search-container",children:r.jsx("input",{type:"text",placeholder:"Search HTML elements or CSS properties...",value:n,onChange:a=>i(a.target.value),className:"search-input"})}),r.jsxs("div",{className:"tab-navigation",children:[r.jsxs("button",{className:`tab ${e==="html"?"active":""}`,onClick:()=>t("html"),children:[r.jsx(su,{className:"tab-icon"}),"HTML Elements"]}),r.jsxs("button",{className:`tab ${e==="css"?"active":""}`,onClick:()=>t("css"),children:[r.jsx(Gp,{className:"tab-icon"}),"CSS Properties"]})]}),e==="html"&&r.jsxs("div",{className:"cheatsheet-content",children:[r.jsxs("div",{className:"cheatsheet-intro",children:[r.jsx("h2",{children:"HTML Elements Reference"}),r.jsx("p",{children:"Complete list of HTML elements organized by category. Click on any element to see its usage."})]}),o.map((a,d)=>r.jsxs("div",{className:"cheatsheet-category",children:[r.jsx("h3",{className:"category-title",children:a.category}),r.jsx("div",{className:"elements-grid",children:a.elements.map((h,v)=>r.jsxs("div",{className:"element-card",children:[r.jsxs("div",{className:"element-header",children:[r.jsx("code",{className:"element-tag",children:h.tag}),r.jsx("span",{className:"element-description",children:h.description})]}),r.jsxs("div",{className:"element-example",children:[r.jsx("strong",{children:"Example:"}),r.jsx("code",{className:"example-code",children:h.example})]})]},v))})]},d))]}),e==="css"&&r.jsxs("div",{className:"cheatsheet-content",children:[r.jsxs("div",{className:"cheatsheet-intro",children:[r.jsx("h2",{children:"CSS Properties Reference"}),r.jsx("p",{children:"Complete list of CSS properties organized by category. Common values and usage examples included."})]}),c.map((a,d)=>r.jsxs("div",{className:"cheatsheet-category",children:[r.jsx("h3",{className:"category-title",children:a.category}),r.jsx("div",{className:"properties-grid",children:a.properties.map((h,v)=>r.jsxs("div",{className:"property-card",children:[r.jsxs("div",{className:"property-header",children:[r.jsx("code",{className:"property-name",children:h.property}),r.jsx("span",{className:"property-description",children:h.description})]}),r.jsxs("div",{className:"property-values",children:[r.jsx("strong",{children:"Values:"}),r.jsx("code",{className:"values-code",children:h.values})]})]},v))})]},d))]}),r.jsxs("div",{className:"quick-reference",children:[r.jsx("h2",{children:"Quick Reference"}),r.jsxs("div",{className:"reference-grid",children:[r.jsxs("div",{className:"reference-card",children:[r.jsx("h3",{children:"HTML Structure"}),r.jsx("pre",{className:"reference-code",children:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- Content here -->
</body>
</html>`})]}),r.jsxs("div",{className:"reference-card",children:[r.jsx("h3",{children:"CSS Box Model"}),r.jsx("pre",{className:"reference-code",children:`/* Box Model Properties */
.element {
  width: 200px;        /* Content width */
  height: 100px;       /* Content height */
  padding: 20px;       /* Inner spacing */
  border: 2px solid;   /* Border */
  margin: 10px;        /* Outer spacing */
  box-sizing: border-box; /* Include border in width */
}`})]}),r.jsxs("div",{className:"reference-card",children:[r.jsx("h3",{children:"Flexbox Layout"}),r.jsx("pre",{className:"reference-code",children:`/* Flexbox Container */
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
}`})]}),r.jsxs("div",{className:"reference-card",children:[r.jsx("h3",{children:"CSS Grid Layout"}),r.jsx("pre",{className:"reference-code",children:`/* Grid Container */
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
}`})]})]})]})]})}function pm(){return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Figma to React Mapping"}),r.jsx("p",{children:"How design concepts translate to code"}),r.jsxs("div",{className:"mapping-grid",children:[r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Frame → React Component"}),r.jsx("p",{children:"A frame in Figma becomes a component in React"}),r.jsx(D,{code:`// Figma Frame → React Component
function Card() {
  return (
    <div className="card">
      <h3>Card Title</h3>
      <p>Card content</p>
    </div>
  );
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Component → Reusable React Component"}),r.jsx("p",{children:"Figma components become reusable React components with props"}),r.jsx(D,{code:`// Figma Component → React Component with Props
function Button({ text, variant }) {
  return (
    <button className={\`btn btn-\${variant}\`}>
      {text}
    </button>
  );
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Auto Layout → CSS Flexbox/Grid"}),r.jsx("p",{children:"Auto layout properties translate to CSS layout"}),r.jsx(D,{code:`// Figma Auto Layout → CSS
.card-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Constraints → CSS Positioning"}),r.jsx("p",{children:"Constraints become responsive CSS rules"}),r.jsx(D,{code:`// Figma Constraints → CSS
.responsive-element {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Interactions → React Event Handlers"}),r.jsx("p",{children:"Figma interactions become JavaScript event handlers"}),r.jsx(D,{code:`// Figma Interaction → React Event Handler
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
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Variants → React Conditional Rendering"}),r.jsx("p",{children:"Component variants become conditional rendering"}),r.jsx(D,{code:`// Figma Variants → React Conditional Rendering
function Button({ variant, disabled }) {
  return (
    <button 
      className={\`btn btn-\${variant} \${disabled ? 'disabled' : ''}\`}
      disabled={disabled}
    >
      Button Text
    </button>
  );
}`})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Design System Translation"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Your Figma design system can be directly translated to React components and CSS variables."]}),r.jsx(D,{code:`// Figma Design System → React/CSS
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
}`,explanation:"Your Figma design system can be directly translated to CSS variables and React components, ensuring consistency between design and code."})]})]})}function D({code:e,explanation:t}){return r.jsxs("div",{className:"code-example",children:[r.jsx("pre",{children:r.jsx("code",{children:e})}),r.jsxs("div",{className:"explanation",children:[r.jsx("strong",{children:"💡 Explanation:"})," ",t]})]})}Ji.createRoot(document.getElementById("root")).render(r.jsx(Cu.StrictMode,{children:r.jsx(em,{})}));
