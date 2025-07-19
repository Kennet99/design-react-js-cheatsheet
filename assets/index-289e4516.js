(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function dc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qo={exports:{}},nl={},Xo={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=Symbol.for("react.element"),pc=Symbol.for("react.portal"),mc=Symbol.for("react.fragment"),hc=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),gc=Symbol.for("react.provider"),vc=Symbol.for("react.context"),xc=Symbol.for("react.forward_ref"),yc=Symbol.for("react.suspense"),jc=Symbol.for("react.memo"),kc=Symbol.for("react.lazy"),Ai=Symbol.iterator;function Nc(e){return e===null||typeof e!="object"?null:(e=Ai&&e[Ai]||e["@@iterator"],typeof e=="function"?e:null)}var Ko={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yo=Object.assign,Go={};function on(e,t,n){this.props=e,this.context=t,this.refs=Go,this.updater=n||Ko}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zo(){}Zo.prototype=on.prototype;function Hs(e,t,n){this.props=e,this.context=t,this.refs=Go,this.updater=n||Ko}var Vs=Hs.prototype=new Zo;Vs.constructor=Hs;Yo(Vs,on.prototype);Vs.isPureReactComponent=!0;var Ui=Array.isArray,qo=Object.prototype.hasOwnProperty,$s={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function ta(e,t,n){var l,s={},i=null,o=null;if(t!=null)for(l in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)qo.call(t,l)&&!ea.hasOwnProperty(l)&&(s[l]=t[l]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var a=Array(u),d=0;d<u;d++)a[d]=arguments[d+2];s.children=a}if(e&&e.defaultProps)for(l in u=e.defaultProps,u)s[l]===void 0&&(s[l]=u[l]);return{$$typeof:Yn,type:e,key:i,ref:o,props:s,_owner:$s.current}}function Sc(e,t){return{$$typeof:Yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ws(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yn}function Cc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oi=/\/+/g;function kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cc(""+e.key):t.toString(36)}function jr(e,t,n,l,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Yn:case pc:o=!0}}if(o)return o=e,s=s(o),e=l===""?"."+kl(o,0):l,Ui(s)?(n="",e!=null&&(n=e.replace(Oi,"$&/")+"/"),jr(s,t,n,"",function(d){return d})):s!=null&&(Ws(s)&&(s=Sc(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Oi,"$&/")+"/")+e)),t.push(s)),1;if(o=0,l=l===""?".":l+":",Ui(e))for(var u=0;u<e.length;u++){i=e[u];var a=l+kl(i,u);o+=jr(i,t,n,a,s)}else if(a=Nc(e),typeof a=="function")for(e=a.call(e),u=0;!(i=e.next()).done;)i=i.value,a=l+kl(i,u++),o+=jr(i,t,n,a,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function rr(e,t,n){if(e==null)return e;var l=[],s=0;return jr(e,l,"","",function(i){return t.call(n,i,s++)}),l}function wc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},kr={transition:null},Ec={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:kr,ReactCurrentOwner:$s};function na(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Ws(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=on;I.Fragment=mc;I.Profiler=fc;I.PureComponent=Hs;I.StrictMode=hc;I.Suspense=yc;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ec;I.act=na;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=Yo({},e.props),s=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=$s.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)qo.call(t,a)&&!ea.hasOwnProperty(a)&&(l[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){u=Array(a);for(var d=0;d<a;d++)u[d]=arguments[d+2];l.children=u}return{$$typeof:Yn,type:e.type,key:s,ref:i,props:l,_owner:o}};I.createContext=function(e){return e={$$typeof:vc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gc,_context:e},e.Consumer=e};I.createElement=ta;I.createFactory=function(e){var t=ta.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:xc,render:e}};I.isValidElement=Ws;I.lazy=function(e){return{$$typeof:kc,_payload:{_status:-1,_result:e},_init:wc}};I.memo=function(e,t){return{$$typeof:jc,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=kr.transition;kr.transition={};try{e()}finally{kr.transition=t}};I.unstable_act=na;I.useCallback=function(e,t){return ue.current.useCallback(e,t)};I.useContext=function(e){return ue.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};I.useEffect=function(e,t){return ue.current.useEffect(e,t)};I.useId=function(){return ue.current.useId()};I.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ue.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};I.useRef=function(e){return ue.current.useRef(e)};I.useState=function(e){return ue.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ue.current.useTransition()};I.version="18.3.1";Xo.exports=I;var F=Xo.exports;const Dc=dc(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=F,Tc=Symbol.for("react.element"),Pc=Symbol.for("react.fragment"),Lc=Object.prototype.hasOwnProperty,Rc=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ic={key:!0,ref:!0,__self:!0,__source:!0};function ra(e,t,n){var l,s={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(l in t)Lc.call(t,l)&&!Ic.hasOwnProperty(l)&&(s[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps,t)s[l]===void 0&&(s[l]=t[l]);return{$$typeof:Tc,type:e,key:i,ref:o,props:s,_owner:Rc.current}}nl.Fragment=Pc;nl.jsx=ra;nl.jsxs=ra;Qo.exports=nl;var r=Qo.exports,Ql={},la={exports:{}},Ne={},sa={exports:{}},ia={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(w,P){var L=w.length;w.push(P);e:for(;0<L;){var J=L-1>>>1,G=w[J];if(0<s(G,P))w[J]=P,w[L]=G,L=J;else break e}}function n(w){return w.length===0?null:w[0]}function l(w){if(w.length===0)return null;var P=w[0],L=w.pop();if(L!==P){w[0]=L;e:for(var J=0,G=w.length,tr=G>>>1;J<tr;){var xt=2*(J+1)-1,jl=w[xt],yt=xt+1,nr=w[yt];if(0>s(jl,L))yt<G&&0>s(nr,jl)?(w[J]=nr,w[yt]=L,J=yt):(w[J]=jl,w[xt]=L,J=xt);else if(yt<G&&0>s(nr,L))w[J]=nr,w[yt]=L,J=yt;else break e}}return P}function s(w,P){var L=w.sortIndex-P.sortIndex;return L!==0?L:w.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],d=[],h=1,v=null,f=3,k=!1,x=!1,N=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(w){for(var P=n(d);P!==null;){if(P.callback===null)l(d);else if(P.startTime<=w)l(d),P.sortIndex=P.expirationTime,t(a,P);else break;P=n(d)}}function g(w){if(N=!1,p(w),!x)if(n(a)!==null)x=!0,xl(S);else{var P=n(d);P!==null&&yl(g,P.startTime-w)}}function S(w,P){x=!1,N&&(N=!1,m(y),y=-1),k=!0;var L=f;try{for(p(P),v=n(a);v!==null&&(!(v.expirationTime>P)||w&&!ve());){var J=v.callback;if(typeof J=="function"){v.callback=null,f=v.priorityLevel;var G=J(v.expirationTime<=P);P=e.unstable_now(),typeof G=="function"?v.callback=G:v===n(a)&&l(a),p(P)}else l(a);v=n(a)}if(v!==null)var tr=!0;else{var xt=n(d);xt!==null&&yl(g,xt.startTime-P),tr=!1}return tr}finally{v=null,f=L,k=!1}}var E=!1,D=null,y=-1,M=5,R=-1;function ve(){return!(e.unstable_now()-R<M)}function cn(){if(D!==null){var w=e.unstable_now();R=w;var P=!0;try{P=D(!0,w)}finally{P?dn():(E=!1,D=null)}}else E=!1}var dn;if(typeof c=="function")dn=function(){c(cn)};else if(typeof MessageChannel<"u"){var Mi=new MessageChannel,cc=Mi.port2;Mi.port1.onmessage=cn,dn=function(){cc.postMessage(null)}}else dn=function(){_(cn,0)};function xl(w){D=w,E||(E=!0,dn())}function yl(w,P){y=_(function(){w(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(w){w.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,xl(S))},e.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<w?Math.floor(1e3/w):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(w){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var L=f;f=P;try{return w()}finally{f=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(w,P){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var L=f;f=w;try{return P()}finally{f=L}},e.unstable_scheduleCallback=function(w,P,L){var J=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,w){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=L+G,w={id:h++,callback:P,priorityLevel:w,startTime:L,expirationTime:G,sortIndex:-1},L>J?(w.sortIndex=L,t(d,w),n(a)===null&&w===n(d)&&(N?(m(y),y=-1):N=!0,yl(g,L-J))):(w.sortIndex=G,t(a,w),x||k||(x=!0,xl(S))),w},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(w){var P=f;return function(){var L=f;f=P;try{return w.apply(this,arguments)}finally{f=L}}}})(ia);sa.exports=ia;var _c=sa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=F,ke=_c;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oa=new Set,In={};function Rt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(In[e]=t,e=0;e<t.length;e++)oa.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Mc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bi={},bi={};function Ac(e){return Xl.call(bi,e)?!0:Xl.call(Bi,e)?!1:Mc.test(e)?bi[e]=!0:(Bi[e]=!0,!1)}function Uc(e,t,n,l){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Oc(e,t,n,l){if(t===null||typeof t>"u"||Uc(e,t,n,l))return!0;if(l)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,l,s,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Js=/[\-:]([a-z])/g;function Qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Js,Qs);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Js,Qs);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Js,Qs);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xs(e,t,n,l){var s=ne.hasOwnProperty(t)?ne[t]:null;(s!==null?s.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Oc(t,n,s,l)&&(n=null),l||s===null?Ac(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,l=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,l?e.setAttributeNS(l,t,n):e.setAttribute(t,n))))}var Ge=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),zt=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),Ks=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),aa=Symbol.for("react.provider"),ua=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),Gs=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ca=Symbol.for("react.offscreen"),Hi=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Hi&&e[Hi]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,Nl;function jn(e){if(Nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var Sl=!1;function Cl(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var l=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){l=d}e.call(t.prototype)}else{try{throw Error()}catch(d){l=d}e()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=l.stack.split(`
`),o=s.length-1,u=i.length-1;1<=o&&0<=u&&s[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(s[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||s[o]!==i[u]){var a=`
`+s[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function Bc(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case zt:return"Portal";case Kl:return"Profiler";case Ks:return"StrictMode";case Yl:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ua:return(e.displayName||"Context")+".Consumer";case aa:return(e._context.displayName||"Context")+".Provider";case Ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gs:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function bc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function da(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hc(e){var t=da(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){l=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sr(e){e._valueTracker||(e._valueTracker=Hc(e))}function pa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=da(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vi(e,t){var n=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:l,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ma(e,t){t=t.checked,t!=null&&Xs(e,"checked",t,!1)}function es(e,t){ma(e,t);var n=mt(t.value),l=t.type;if(n!=null)l==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ts(e,t.type,n):t.hasOwnProperty("defaultValue")&&ts(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $i(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ts(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Qt(e,t,n,l){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&l&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(kn(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function ha(e,t){var n=mt(t.value),l=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),l!=null&&(e.defaultValue=""+l)}function Ji(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,ga=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,l,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,l,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vc=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Vc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function va(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function xa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var l=n.indexOf("--")===0,s=va(n,t[n],l);n==="float"&&(n="cssFloat"),l?e.setProperty(n,s):e[n]=s}}var $c=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ls(e,t){if(t){if($c[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ss(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var is=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var os=null,Xt=null,Kt=null;function Qi(e){if(e=qn(e)){if(typeof os!="function")throw Error(j(280));var t=e.stateNode;t&&(t=ol(t),os(e.stateNode,e.type,t))}}function ya(e){Xt?Kt?Kt.push(e):Kt=[e]:Xt=e}function ja(){if(Xt){var e=Xt,t=Kt;if(Kt=Xt=null,Qi(e),t)for(e=0;e<t.length;e++)Qi(t[e])}}function ka(e,t){return e(t)}function Na(){}var wl=!1;function Sa(e,t,n){if(wl)return e(t,n);wl=!0;try{return ka(e,t,n)}finally{wl=!1,(Xt!==null||Kt!==null)&&(Na(),ja())}}function zn(e,t){var n=e.stateNode;if(n===null)return null;var l=ol(n);if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var as=!1;if(Qe)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){as=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{as=!1}function Wc(e,t,n,l,s,i,o,u,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var wn=!1,Ir=null,_r=!1,us=null,Jc={onError:function(e){wn=!0,Ir=e}};function Qc(e,t,n,l,s,i,o,u,a){wn=!1,Ir=null,Wc.apply(Jc,arguments)}function Xc(e,t,n,l,s,i,o,u,a){if(Qc.apply(this,arguments),wn){if(wn){var d=Ir;wn=!1,Ir=null}else throw Error(j(198));_r||(_r=!0,us=d)}}function It(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ca(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xi(e){if(It(e)!==e)throw Error(j(188))}function Kc(e){var t=e.alternate;if(!t){if(t=It(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,l=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(l=s.return,l!==null){n=l;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Xi(s),e;if(i===l)return Xi(s),t;i=i.sibling}throw Error(j(188))}if(n.return!==l.return)n=s,l=i;else{for(var o=!1,u=s.child;u;){if(u===n){o=!0,n=s,l=i;break}if(u===l){o=!0,l=s,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,l=s;break}if(u===l){o=!0,l=i,n=s;break}u=u.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==l)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function wa(e){return e=Kc(e),e!==null?Ea(e):null}function Ea(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ea(e);if(t!==null)return t;e=e.sibling}return null}var Da=ke.unstable_scheduleCallback,Ki=ke.unstable_cancelCallback,Yc=ke.unstable_shouldYield,Gc=ke.unstable_requestPaint,Q=ke.unstable_now,Zc=ke.unstable_getCurrentPriorityLevel,qs=ke.unstable_ImmediatePriority,Fa=ke.unstable_UserBlockingPriority,zr=ke.unstable_NormalPriority,qc=ke.unstable_LowPriority,Ta=ke.unstable_IdlePriority,rl=null,Be=null;function ed(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:rd,td=Math.log,nd=Math.LN2;function rd(e){return e>>>=0,e===0?32:31-(td(e)/nd|0)|0}var or=64,ar=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mr(e,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,s=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~s;u!==0?l=Nn(u):(i&=o,i!==0&&(l=Nn(i)))}else o=n&~s,o!==0?l=Nn(o):i!==0&&(l=Nn(i));if(l===0)return 0;if(t!==0&&t!==l&&!(t&s)&&(s=l&-l,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(l&4&&(l|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)n=31-_e(t),s=1<<n,l|=e[n],t&=~s;return l}function ld(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sd(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-_e(i),u=1<<o,a=s[o];a===-1?(!(u&n)||u&l)&&(s[o]=ld(u,t)):a<=t&&(e.expiredLanes|=u),i&=~u}}function cs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pa(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_e(t),e[t]=n}function id(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-_e(n),i=1<<s;t[s]=0,l[s]=-1,e[s]=-1,n&=~i}}function ei(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-_e(n),s=1<<l;s&t|e[l]&t&&(e[l]|=t),n&=~s}}var A=0;function La(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ra,ti,Ia,_a,za,ds=!1,ur=[],st=null,it=null,ot=null,Mn=new Map,An=new Map,tt=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yi(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(t.pointerId)}}function hn(e,t,n,l,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[s]},t!==null&&(t=qn(t),t!==null&&ti(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function ad(e,t,n,l,s){switch(t){case"focusin":return st=hn(st,e,t,n,l,s),!0;case"dragenter":return it=hn(it,e,t,n,l,s),!0;case"mouseover":return ot=hn(ot,e,t,n,l,s),!0;case"pointerover":var i=s.pointerId;return Mn.set(i,hn(Mn.get(i)||null,e,t,n,l,s)),!0;case"gotpointercapture":return i=s.pointerId,An.set(i,hn(An.get(i)||null,e,t,n,l,s)),!0}return!1}function Ma(e){var t=Nt(e.target);if(t!==null){var n=It(t);if(n!==null){if(t=n.tag,t===13){if(t=Ca(n),t!==null){e.blockedOn=t,za(e.priority,function(){Ia(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ps(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);is=l,n.target.dispatchEvent(l),is=null}else return t=qn(n),t!==null&&ti(t),e.blockedOn=n,!1;t.shift()}return!0}function Gi(e,t,n){Nr(e)&&n.delete(t)}function ud(){ds=!1,st!==null&&Nr(st)&&(st=null),it!==null&&Nr(it)&&(it=null),ot!==null&&Nr(ot)&&(ot=null),Mn.forEach(Gi),An.forEach(Gi)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,ds||(ds=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,ud)))}function Un(e){function t(s){return fn(s,e)}if(0<ur.length){fn(ur[0],e);for(var n=1;n<ur.length;n++){var l=ur[n];l.blockedOn===e&&(l.blockedOn=null)}}for(st!==null&&fn(st,e),it!==null&&fn(it,e),ot!==null&&fn(ot,e),Mn.forEach(t),An.forEach(t),n=0;n<tt.length;n++)l=tt[n],l.blockedOn===e&&(l.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)Ma(n),n.blockedOn===null&&tt.shift()}var Yt=Ge.ReactCurrentBatchConfig,Ar=!0;function cd(e,t,n,l){var s=A,i=Yt.transition;Yt.transition=null;try{A=1,ni(e,t,n,l)}finally{A=s,Yt.transition=i}}function dd(e,t,n,l){var s=A,i=Yt.transition;Yt.transition=null;try{A=4,ni(e,t,n,l)}finally{A=s,Yt.transition=i}}function ni(e,t,n,l){if(Ar){var s=ps(e,t,n,l);if(s===null)Ml(e,t,l,Ur,n),Yi(e,l);else if(ad(s,e,t,n,l))l.stopPropagation();else if(Yi(e,l),t&4&&-1<od.indexOf(e)){for(;s!==null;){var i=qn(s);if(i!==null&&Ra(i),i=ps(e,t,n,l),i===null&&Ml(e,t,l,Ur,n),i===s)break;s=i}s!==null&&l.stopPropagation()}else Ml(e,t,l,null,n)}}var Ur=null;function ps(e,t,n,l){if(Ur=null,e=Zs(l),e=Nt(e),e!==null)if(t=It(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ca(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ur=e,null}function Aa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zc()){case qs:return 1;case Fa:return 4;case zr:case qc:return 16;case Ta:return 536870912;default:return 16}default:return 16}}var rt=null,ri=null,Sr=null;function Ua(){if(Sr)return Sr;var e,t=ri,n=t.length,l,s="value"in rt?rt.value:rt.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(l=1;l<=o&&t[n-l]===s[i-l];l++);return Sr=s.slice(e,1<l?1-l:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function Zi(){return!1}function Se(e){function t(n,l,s,i,o){this._reactName=n,this._targetInst=s,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cr:Zi,this.isPropagationStopped=Zi,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=Se(an),Zn=$({},an,{view:0,detail:0}),pd=Se(Zn),Dl,Fl,gn,ll=$({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:si,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(Dl=e.screenX-gn.screenX,Fl=e.screenY-gn.screenY):Fl=Dl=0,gn=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Fl}}),qi=Se(ll),md=$({},ll,{dataTransfer:0}),hd=Se(md),fd=$({},Zn,{relatedTarget:0}),Tl=Se(fd),gd=$({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),vd=Se(gd),xd=$({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yd=Se(xd),jd=$({},an,{data:0}),eo=Se(jd),kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sd[e])?!!t[e]:!1}function si(){return Cd}var wd=$({},Zn,{key:function(e){if(e.key){var t=kd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:si,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ed=Se(wd),Dd=$({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),to=Se(Dd),Fd=$({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:si}),Td=Se(Fd),Pd=$({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ld=Se(Pd),Rd=$({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=Se(Rd),_d=[9,13,27,32],ii=Qe&&"CompositionEvent"in window,En=null;Qe&&"documentMode"in document&&(En=document.documentMode);var zd=Qe&&"TextEvent"in window&&!En,Oa=Qe&&(!ii||En&&8<En&&11>=En),no=String.fromCharCode(32),ro=!1;function Ba(e,t){switch(e){case"keyup":return _d.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ba(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function Md(e,t){switch(e){case"compositionend":return ba(t);case"keypress":return t.which!==32?null:(ro=!0,no);case"textInput":return e=t.data,e===no&&ro?null:e;default:return null}}function Ad(e,t){if(At)return e==="compositionend"||!ii&&Ba(e,t)?(e=Ua(),Sr=ri=rt=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Oa&&t.locale!=="ko"?null:t.data;default:return null}}var Ud={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ud[e.type]:t==="textarea"}function Ha(e,t,n,l){ya(l),t=Or(t,"onChange"),0<t.length&&(n=new li("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Dn=null,On=null;function Od(e){qa(e,0)}function sl(e){var t=Bt(e);if(pa(t))return e}function Bd(e,t){if(e==="change")return t}var Va=!1;if(Qe){var Pl;if(Qe){var Ll="oninput"in document;if(!Ll){var so=document.createElement("div");so.setAttribute("oninput","return;"),Ll=typeof so.oninput=="function"}Pl=Ll}else Pl=!1;Va=Pl&&(!document.documentMode||9<document.documentMode)}function io(){Dn&&(Dn.detachEvent("onpropertychange",$a),On=Dn=null)}function $a(e){if(e.propertyName==="value"&&sl(On)){var t=[];Ha(t,On,e,Zs(e)),Sa(Od,t)}}function bd(e,t,n){e==="focusin"?(io(),Dn=t,On=n,Dn.attachEvent("onpropertychange",$a)):e==="focusout"&&io()}function Hd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(On)}function Vd(e,t){if(e==="click")return sl(t)}function $d(e,t){if(e==="input"||e==="change")return sl(t)}function Wd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:Wd;function Bn(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var s=n[l];if(!Xl.call(t,s)||!Me(e[s],t[s]))return!1}return!0}function oo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ao(e,t){var n=oo(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oo(n)}}function Wa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ja(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jd(e){var t=Ja(),n=e.focusedElem,l=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wa(n.ownerDocument.documentElement,n)){if(l!==null&&oi(n)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(l.start,s);l=l.end===void 0?i:Math.min(l.end,s),!e.extend&&i>l&&(s=l,l=i,i=s),s=ao(n,i);var o=ao(n,l);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>l?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qd=Qe&&"documentMode"in document&&11>=document.documentMode,Ut=null,ms=null,Fn=null,hs=!1;function uo(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hs||Ut==null||Ut!==Rr(l)||(l=Ut,"selectionStart"in l&&oi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Fn&&Bn(Fn,l)||(Fn=l,l=Or(ms,"onSelect"),0<l.length&&(t=new li("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ut)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ot={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Rl={},Qa={};Qe&&(Qa=document.createElement("div").style,"AnimationEvent"in window||(delete Ot.animationend.animation,delete Ot.animationiteration.animation,delete Ot.animationstart.animation),"TransitionEvent"in window||delete Ot.transitionend.transition);function il(e){if(Rl[e])return Rl[e];if(!Ot[e])return e;var t=Ot[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qa)return Rl[e]=t[n];return e}var Xa=il("animationend"),Ka=il("animationiteration"),Ya=il("animationstart"),Ga=il("transitionend"),Za=new Map,co="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){Za.set(e,t),Rt(t,[e])}for(var Il=0;Il<co.length;Il++){var _l=co[Il],Xd=_l.toLowerCase(),Kd=_l[0].toUpperCase()+_l.slice(1);ft(Xd,"on"+Kd)}ft(Xa,"onAnimationEnd");ft(Ka,"onAnimationIteration");ft(Ya,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(Ga,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function po(e,t,n){var l=e.type||"unknown-event";e.currentTarget=n,Xc(l,t,void 0,e),e.currentTarget=null}function qa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],s=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var o=l.length-1;0<=o;o--){var u=l[o],a=u.instance,d=u.currentTarget;if(u=u.listener,a!==i&&s.isPropagationStopped())break e;po(s,u,d),i=a}else for(o=0;o<l.length;o++){if(u=l[o],a=u.instance,d=u.currentTarget,u=u.listener,a!==i&&s.isPropagationStopped())break e;po(s,u,d),i=a}}}if(_r)throw e=us,_r=!1,us=null,e}function O(e,t){var n=t[ys];n===void 0&&(n=t[ys]=new Set);var l=e+"__bubble";n.has(l)||(eu(t,e,2,!1),n.add(l))}function zl(e,t,n){var l=0;t&&(l|=4),eu(n,e,l,t)}var pr="_reactListening"+Math.random().toString(36).slice(2);function bn(e){if(!e[pr]){e[pr]=!0,oa.forEach(function(n){n!=="selectionchange"&&(Yd.has(n)||zl(n,!1,e),zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pr]||(t[pr]=!0,zl("selectionchange",!1,t))}}function eu(e,t,n,l){switch(Aa(t)){case 1:var s=cd;break;case 4:s=dd;break;default:s=ni}n=s.bind(null,t,n,e),s=void 0,!as||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ml(e,t,n,l,s){var i=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var u=l.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(o===4)for(o=l.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;o=o.return}for(;u!==null;){if(o=Nt(u),o===null)return;if(a=o.tag,a===5||a===6){l=i=o;continue e}u=u.parentNode}}l=l.return}Sa(function(){var d=i,h=Zs(n),v=[];e:{var f=Za.get(e);if(f!==void 0){var k=li,x=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":k=Ed;break;case"focusin":x="focus",k=Tl;break;case"focusout":x="blur",k=Tl;break;case"beforeblur":case"afterblur":k=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=qi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=hd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Td;break;case Xa:case Ka:case Ya:k=vd;break;case Ga:k=Ld;break;case"scroll":k=pd;break;case"wheel":k=Id;break;case"copy":case"cut":case"paste":k=yd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=to}var N=(t&4)!==0,_=!N&&e==="scroll",m=N?f!==null?f+"Capture":null:f;N=[];for(var c=d,p;c!==null;){p=c;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,m!==null&&(g=zn(c,m),g!=null&&N.push(Hn(c,g,p)))),_)break;c=c.return}0<N.length&&(f=new k(f,x,null,n,h),v.push({event:f,listeners:N}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",f&&n!==is&&(x=n.relatedTarget||n.fromElement)&&(Nt(x)||x[Xe]))break e;if((k||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=d,x=x?Nt(x):null,x!==null&&(_=It(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=d),k!==x)){if(N=qi,g="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(N=to,g="onPointerLeave",m="onPointerEnter",c="pointer"),_=k==null?f:Bt(k),p=x==null?f:Bt(x),f=new N(g,c+"leave",k,n,h),f.target=_,f.relatedTarget=p,g=null,Nt(h)===d&&(N=new N(m,c+"enter",x,n,h),N.target=p,N.relatedTarget=_,g=N),_=g,k&&x)t:{for(N=k,m=x,c=0,p=N;p;p=_t(p))c++;for(p=0,g=m;g;g=_t(g))p++;for(;0<c-p;)N=_t(N),c--;for(;0<p-c;)m=_t(m),p--;for(;c--;){if(N===m||m!==null&&N===m.alternate)break t;N=_t(N),m=_t(m)}N=null}else N=null;k!==null&&mo(v,f,k,N,!1),x!==null&&_!==null&&mo(v,_,x,N,!0)}}e:{if(f=d?Bt(d):window,k=f.nodeName&&f.nodeName.toLowerCase(),k==="select"||k==="input"&&f.type==="file")var S=Bd;else if(lo(f))if(Va)S=$d;else{S=Hd;var E=bd}else(k=f.nodeName)&&k.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Vd);if(S&&(S=S(e,d))){Ha(v,S,n,h);break e}E&&E(e,f,d),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&ts(f,"number",f.value)}switch(E=d?Bt(d):window,e){case"focusin":(lo(E)||E.contentEditable==="true")&&(Ut=E,ms=d,Fn=null);break;case"focusout":Fn=ms=Ut=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,uo(v,n,h);break;case"selectionchange":if(Qd)break;case"keydown":case"keyup":uo(v,n,h)}var D;if(ii)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else At?Ba(e,n)&&(y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Oa&&n.locale!=="ko"&&(At||y!=="onCompositionStart"?y==="onCompositionEnd"&&At&&(D=Ua()):(rt=h,ri="value"in rt?rt.value:rt.textContent,At=!0)),E=Or(d,y),0<E.length&&(y=new eo(y,e,null,n,h),v.push({event:y,listeners:E}),D?y.data=D:(D=ba(n),D!==null&&(y.data=D)))),(D=zd?Md(e,n):Ad(e,n))&&(d=Or(d,"onBeforeInput"),0<d.length&&(h=new eo("onBeforeInput","beforeinput",null,n,h),v.push({event:h,listeners:d}),h.data=D))}qa(v,t)})}function Hn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Or(e,t){for(var n=t+"Capture",l=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=zn(e,n),i!=null&&l.unshift(Hn(e,i,s)),i=zn(e,t),i!=null&&l.push(Hn(e,i,s))),e=e.return}return l}function _t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mo(e,t,n,l,s){for(var i=t._reactName,o=[];n!==null&&n!==l;){var u=n,a=u.alternate,d=u.stateNode;if(a!==null&&a===l)break;u.tag===5&&d!==null&&(u=d,s?(a=zn(n,i),a!=null&&o.unshift(Hn(n,a,u))):s||(a=zn(n,i),a!=null&&o.push(Hn(n,a,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Gd=/\r\n?/g,Zd=/\u0000|\uFFFD/g;function ho(e){return(typeof e=="string"?e:""+e).replace(Gd,`
`).replace(Zd,"")}function mr(e,t,n){if(t=ho(t),ho(e)!==t&&n)throw Error(j(425))}function Br(){}var fs=null,gs=null;function vs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xs=typeof setTimeout=="function"?setTimeout:void 0,qd=typeof clearTimeout=="function"?clearTimeout:void 0,fo=typeof Promise=="function"?Promise:void 0,ep=typeof queueMicrotask=="function"?queueMicrotask:typeof fo<"u"?function(e){return fo.resolve(null).then(e).catch(tp)}:xs;function tp(e){setTimeout(function(){throw e})}function Al(e,t){var n=t,l=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(l===0){e.removeChild(s),Un(t);return}l--}else n!=="$"&&n!=="$?"&&n!=="$!"||l++;n=s}while(n);Un(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function go(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),Oe="__reactFiber$"+un,Vn="__reactProps$"+un,Xe="__reactContainer$"+un,ys="__reactEvents$"+un,np="__reactListeners$"+un,rp="__reactHandles$"+un;function Nt(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Oe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=go(e);e!==null;){if(n=e[Oe])return n;e=go(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Oe]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function ol(e){return e[Vn]||null}var js=[],bt=-1;function gt(e){return{current:e}}function B(e){0>bt||(e.current=js[bt],js[bt]=null,bt--)}function U(e,t){bt++,js[bt]=e.current,e.current=t}var ht={},ie=gt(ht),he=gt(!1),Dt=ht;function en(e,t){var n=e.type.contextTypes;if(!n)return ht;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function fe(e){return e=e.childContextTypes,e!=null}function br(){B(he),B(ie)}function vo(e,t,n){if(ie.current!==ht)throw Error(j(168));U(ie,t),U(he,n)}function tu(e,t,n){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return n;l=l.getChildContext();for(var s in l)if(!(s in t))throw Error(j(108,bc(e)||"Unknown",s));return $({},n,l)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ht,Dt=ie.current,U(ie,e),U(he,he.current),!0}function xo(e,t,n){var l=e.stateNode;if(!l)throw Error(j(169));n?(e=tu(e,t,Dt),l.__reactInternalMemoizedMergedChildContext=e,B(he),B(ie),U(ie,e)):B(he),U(he,n)}var Ve=null,al=!1,Ul=!1;function nu(e){Ve===null?Ve=[e]:Ve.push(e)}function lp(e){al=!0,nu(e)}function vt(){if(!Ul&&Ve!==null){Ul=!0;var e=0,t=A;try{var n=Ve;for(A=1;e<n.length;e++){var l=n[e];do l=l(!0);while(l!==null)}Ve=null,al=!1}catch(s){throw Ve!==null&&(Ve=Ve.slice(e+1)),Da(qs,vt),s}finally{A=t,Ul=!1}}return null}var Ht=[],Vt=0,Vr=null,$r=0,Ce=[],we=0,Ft=null,$e=1,We="";function jt(e,t){Ht[Vt++]=$r,Ht[Vt++]=Vr,Vr=e,$r=t}function ru(e,t,n){Ce[we++]=$e,Ce[we++]=We,Ce[we++]=Ft,Ft=e;var l=$e;e=We;var s=32-_e(l)-1;l&=~(1<<s),n+=1;var i=32-_e(t)+s;if(30<i){var o=s-s%5;i=(l&(1<<o)-1).toString(32),l>>=o,s-=o,$e=1<<32-_e(t)+s|n<<s|l,We=i+e}else $e=1<<i|n<<s|l,We=e}function ai(e){e.return!==null&&(jt(e,1),ru(e,1,0))}function ui(e){for(;e===Vr;)Vr=Ht[--Vt],Ht[Vt]=null,$r=Ht[--Vt],Ht[Vt]=null;for(;e===Ft;)Ft=Ce[--we],Ce[we]=null,We=Ce[--we],Ce[we]=null,$e=Ce[--we],Ce[we]=null}var je=null,ye=null,b=!1,Ie=null;function lu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,ye=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:$e,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,ye=null,!0):!1;default:return!1}}function ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ns(e){if(b){var t=ye;if(t){var n=t;if(!yo(e,t)){if(ks(e))throw Error(j(418));t=at(n.nextSibling);var l=je;t&&yo(e,t)?lu(l,n):(e.flags=e.flags&-4097|2,b=!1,je=e)}}else{if(ks(e))throw Error(j(418));e.flags=e.flags&-4097|2,b=!1,je=e}}}function jo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function hr(e){if(e!==je)return!1;if(!b)return jo(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vs(e.type,e.memoizedProps)),t&&(t=ye)){if(ks(e))throw su(),Error(j(418));for(;t;)lu(e,t),t=at(t.nextSibling)}if(jo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=je?at(e.stateNode.nextSibling):null;return!0}function su(){for(var e=ye;e;)e=at(e.nextSibling)}function tn(){ye=je=null,b=!1}function ci(e){Ie===null?Ie=[e]:Ie.push(e)}var sp=Ge.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var l=n.stateNode}if(!l)throw Error(j(147,e));var s=l,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=s.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function fr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ko(e){var t=e._init;return t(e._payload)}function iu(e){function t(m,c){if(e){var p=m.deletions;p===null?(m.deletions=[c],m.flags|=16):p.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function l(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function s(m,c){return m=pt(m,c),m.index=0,m.sibling=null,m}function i(m,c,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<c?(m.flags|=2,c):p):(m.flags|=2,c)):(m.flags|=1048576,c)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,c,p,g){return c===null||c.tag!==6?(c=Wl(p,m.mode,g),c.return=m,c):(c=s(c,p),c.return=m,c)}function a(m,c,p,g){var S=p.type;return S===Mt?h(m,c,p.props.children,g,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&ko(S)===c.type)?(g=s(c,p.props),g.ref=vn(m,c,p),g.return=m,g):(g=Lr(p.type,p.key,p.props,null,m.mode,g),g.ref=vn(m,c,p),g.return=m,g)}function d(m,c,p,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Jl(p,m.mode,g),c.return=m,c):(c=s(c,p.children||[]),c.return=m,c)}function h(m,c,p,g,S){return c===null||c.tag!==7?(c=Et(p,m.mode,g,S),c.return=m,c):(c=s(c,p),c.return=m,c)}function v(m,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Wl(""+c,m.mode,p),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lr:return p=Lr(c.type,c.key,c.props,null,m.mode,p),p.ref=vn(m,null,c),p.return=m,p;case zt:return c=Jl(c,m.mode,p),c.return=m,c;case qe:var g=c._init;return v(m,g(c._payload),p)}if(kn(c)||pn(c))return c=Et(c,m.mode,p,null),c.return=m,c;fr(m,c)}return null}function f(m,c,p,g){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:u(m,c,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:return p.key===S?a(m,c,p,g):null;case zt:return p.key===S?d(m,c,p,g):null;case qe:return S=p._init,f(m,c,S(p._payload),g)}if(kn(p)||pn(p))return S!==null?null:h(m,c,p,g,null);fr(m,p)}return null}function k(m,c,p,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return m=m.get(p)||null,u(c,m,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case lr:return m=m.get(g.key===null?p:g.key)||null,a(c,m,g,S);case zt:return m=m.get(g.key===null?p:g.key)||null,d(c,m,g,S);case qe:var E=g._init;return k(m,c,p,E(g._payload),S)}if(kn(g)||pn(g))return m=m.get(p)||null,h(c,m,g,S,null);fr(c,g)}return null}function x(m,c,p,g){for(var S=null,E=null,D=c,y=c=0,M=null;D!==null&&y<p.length;y++){D.index>y?(M=D,D=null):M=D.sibling;var R=f(m,D,p[y],g);if(R===null){D===null&&(D=M);break}e&&D&&R.alternate===null&&t(m,D),c=i(R,c,y),E===null?S=R:E.sibling=R,E=R,D=M}if(y===p.length)return n(m,D),b&&jt(m,y),S;if(D===null){for(;y<p.length;y++)D=v(m,p[y],g),D!==null&&(c=i(D,c,y),E===null?S=D:E.sibling=D,E=D);return b&&jt(m,y),S}for(D=l(m,D);y<p.length;y++)M=k(D,m,y,p[y],g),M!==null&&(e&&M.alternate!==null&&D.delete(M.key===null?y:M.key),c=i(M,c,y),E===null?S=M:E.sibling=M,E=M);return e&&D.forEach(function(ve){return t(m,ve)}),b&&jt(m,y),S}function N(m,c,p,g){var S=pn(p);if(typeof S!="function")throw Error(j(150));if(p=S.call(p),p==null)throw Error(j(151));for(var E=S=null,D=c,y=c=0,M=null,R=p.next();D!==null&&!R.done;y++,R=p.next()){D.index>y?(M=D,D=null):M=D.sibling;var ve=f(m,D,R.value,g);if(ve===null){D===null&&(D=M);break}e&&D&&ve.alternate===null&&t(m,D),c=i(ve,c,y),E===null?S=ve:E.sibling=ve,E=ve,D=M}if(R.done)return n(m,D),b&&jt(m,y),S;if(D===null){for(;!R.done;y++,R=p.next())R=v(m,R.value,g),R!==null&&(c=i(R,c,y),E===null?S=R:E.sibling=R,E=R);return b&&jt(m,y),S}for(D=l(m,D);!R.done;y++,R=p.next())R=k(D,m,y,R.value,g),R!==null&&(e&&R.alternate!==null&&D.delete(R.key===null?y:R.key),c=i(R,c,y),E===null?S=R:E.sibling=R,E=R);return e&&D.forEach(function(cn){return t(m,cn)}),b&&jt(m,y),S}function _(m,c,p,g){if(typeof p=="object"&&p!==null&&p.type===Mt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:e:{for(var S=p.key,E=c;E!==null;){if(E.key===S){if(S=p.type,S===Mt){if(E.tag===7){n(m,E.sibling),c=s(E,p.props.children),c.return=m,m=c;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&ko(S)===E.type){n(m,E.sibling),c=s(E,p.props),c.ref=vn(m,E,p),c.return=m,m=c;break e}n(m,E);break}else t(m,E);E=E.sibling}p.type===Mt?(c=Et(p.props.children,m.mode,g,p.key),c.return=m,m=c):(g=Lr(p.type,p.key,p.props,null,m.mode,g),g.ref=vn(m,c,p),g.return=m,m=g)}return o(m);case zt:e:{for(E=p.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(m,c.sibling),c=s(c,p.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=Jl(p,m.mode,g),c.return=m,m=c}return o(m);case qe:return E=p._init,_(m,c,E(p._payload),g)}if(kn(p))return x(m,c,p,g);if(pn(p))return N(m,c,p,g);fr(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(m,c.sibling),c=s(c,p),c.return=m,m=c):(n(m,c),c=Wl(p,m.mode,g),c.return=m,m=c),o(m)):n(m,c)}return _}var nn=iu(!0),ou=iu(!1),Wr=gt(null),Jr=null,$t=null,di=null;function pi(){di=$t=Jr=null}function mi(e){var t=Wr.current;B(Wr),e._currentValue=t}function Ss(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Gt(e,t){Jr=e,di=$t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(di!==e)if(e={context:e,memoizedValue:t,next:null},$t===null){if(Jr===null)throw Error(j(308));$t=e,Jr.dependencies={lanes:0,firstContext:e}}else $t=$t.next=e;return t}var St=null;function hi(e){St===null?St=[e]:St.push(e)}function au(e,t,n,l){var s=t.interleaved;return s===null?(n.next=n,hi(t)):(n.next=s.next,s.next=n),t.interleaved=n,Ke(e,l)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,z&2){var s=l.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),l.pending=t,Ke(e,n)}return s=l.interleaved,s===null?(t.next=t,hi(l)):(t.next=s.next,s.next=t),l.interleaved=t,Ke(e,n)}function wr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ei(e,n)}}function No(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:l.shared,effects:l.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,l){var s=e.updateQueue;et=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var a=u,d=a.next;a.next=null,o===null?i=d:o.next=d,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==o&&(u===null?h.firstBaseUpdate=d:u.next=d,h.lastBaseUpdate=a))}if(i!==null){var v=s.baseState;o=0,h=d=a=null,u=i;do{var f=u.lane,k=u.eventTime;if((l&f)===f){h!==null&&(h=h.next={eventTime:k,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,N=u;switch(f=t,k=n,N.tag){case 1:if(x=N.payload,typeof x=="function"){v=x.call(k,v,f);break e}v=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=N.payload,f=typeof x=="function"?x.call(k,v,f):x,f==null)break e;v=$({},v,f);break e;case 2:et=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[u]:f.push(u))}else k={eventTime:k,lane:f,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(d=h=k,a=v):h=h.next=k,o|=f;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;f=u,u=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(1);if(h===null&&(a=v),s.baseState=a,s.firstBaseUpdate=d,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=v}}function So(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],s=l.callback;if(s!==null){if(l.callback=null,l=n,typeof s!="function")throw Error(j(191,s));s.call(l)}}}var er={},be=gt(er),$n=gt(er),Wn=gt(er);function Ct(e){if(e===er)throw Error(j(174));return e}function gi(e,t){switch(U(Wn,t),U($n,e),U(be,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rs(t,e)}B(be),U(be,t)}function rn(){B(be),B($n),B(Wn)}function cu(e){Ct(Wn.current);var t=Ct(be.current),n=rs(t,e.type);t!==n&&(U($n,e),U(be,n))}function vi(e){$n.current===e&&(B(be),B($n))}var H=gt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ol=[];function xi(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var Er=Ge.ReactCurrentDispatcher,Bl=Ge.ReactCurrentBatchConfig,Tt=0,V=null,K=null,Z=null,Kr=!1,Tn=!1,Jn=0,ip=0;function re(){throw Error(j(321))}function yi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function ji(e,t,n,l,s,i){if(Tt=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?cp:dp,e=n(l,s),Tn){i=0;do{if(Tn=!1,Jn=0,25<=i)throw Error(j(301));i+=1,Z=K=null,t.updateQueue=null,Er.current=pp,e=n(l,s)}while(Tn)}if(Er.current=Yr,t=K!==null&&K.next!==null,Tt=0,Z=K=V=null,Kr=!1,t)throw Error(j(300));return e}function ki(){var e=Jn!==0;return Jn=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?V.memoizedState=Z=e:Z=Z.next=e,Z}function Te(){if(K===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?V.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(j(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?V.memoizedState=Z=e:Z=Z.next=e}return Z}function Qn(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=Te(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var l=K,s=l.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}l.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,l=l.baseState;var u=o=null,a=null,d=i;do{var h=d.lane;if((Tt&h)===h)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:e(l,d.action);else{var v={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(u=a=v,o=l):a=a.next=v,V.lanes|=h,Pt|=h}d=d.next}while(d!==null&&d!==i);a===null?o=l:a.next=u,Me(l,t.memoizedState)||(me=!0),t.memoizedState=l,t.baseState=o,t.baseQueue=a,n.lastRenderedState=l}if(e=n.interleaved,e!==null){s=e;do i=s.lane,V.lanes|=i,Pt|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=Te(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var l=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=e(i,o.action),o=o.next;while(o!==s);Me(i,t.memoizedState)||(me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function du(){}function pu(e,t){var n=V,l=Te(),s=t(),i=!Me(l.memoizedState,s);if(i&&(l.memoizedState=s,me=!0),l=l.queue,Ni(fu.bind(null,n,l,e),[e]),l.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Xn(9,hu.bind(null,n,l,s,t),void 0,null),q===null)throw Error(j(349));Tt&30||mu(n,t,s)}return s}function mu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hu(e,t,n,l){t.value=n,t.getSnapshot=l,gu(t)&&vu(e)}function fu(e,t,n){return n(function(){gu(t)&&vu(e)})}function gu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function vu(e){var t=Ke(e,1);t!==null&&ze(t,e,1,-1)}function Co(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=up.bind(null,V,e),[t.memoizedState,e]}function Xn(e,t,n,l){return e={tag:e,create:t,destroy:n,deps:l,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e)),e}function xu(){return Te().memoizedState}function Dr(e,t,n,l){var s=Ue();V.flags|=e,s.memoizedState=Xn(1|t,n,void 0,l===void 0?null:l)}function ul(e,t,n,l){var s=Te();l=l===void 0?null:l;var i=void 0;if(K!==null){var o=K.memoizedState;if(i=o.destroy,l!==null&&yi(l,o.deps)){s.memoizedState=Xn(t,n,i,l);return}}V.flags|=e,s.memoizedState=Xn(1|t,n,i,l)}function wo(e,t){return Dr(8390656,8,e,t)}function Ni(e,t){return ul(2048,8,e,t)}function yu(e,t){return ul(4,2,e,t)}function ju(e,t){return ul(4,4,e,t)}function ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nu(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,ku.bind(null,t,e),n)}function Si(){}function Su(e,t){var n=Te();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&yi(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Cu(e,t){var n=Te();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&yi(t,l[1])?l[0]:(e=e(),n.memoizedState=[e,t],e)}function wu(e,t,n){return Tt&21?(Me(n,t)||(n=Pa(),V.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function op(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var l=Bl.transition;Bl.transition={};try{e(!1),t()}finally{A=n,Bl.transition=l}}function Eu(){return Te().memoizedState}function ap(e,t,n){var l=dt(e);if(n={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null},Du(e))Fu(t,n);else if(n=au(e,t,n,l),n!==null){var s=ae();ze(n,e,l,s),Tu(n,t,l)}}function up(e,t,n){var l=dt(e),s={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null};if(Du(e))Fu(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(s.hasEagerState=!0,s.eagerState=u,Me(u,o)){var a=t.interleaved;a===null?(s.next=s,hi(t)):(s.next=a.next,a.next=s),t.interleaved=s;return}}catch{}finally{}n=au(e,t,s,l),n!==null&&(s=ae(),ze(n,e,l,s),Tu(n,t,l))}}function Du(e){var t=e.alternate;return e===V||t!==null&&t===V}function Fu(e,t){Tn=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tu(e,t,n){if(n&4194240){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ei(e,n)}}var Yr={readContext:Fe,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},cp={readContext:Fe,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:wo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Dr(4194308,4,ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dr(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var l=Ue();return t=n!==void 0?n(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=ap.bind(null,V,e),[l.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Co,useDebugValue:Si,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Co(!1),t=e[0];return e=op.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var l=V,s=Ue();if(b){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),q===null)throw Error(j(349));Tt&30||mu(l,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,wo(fu.bind(null,l,i,e),[e]),l.flags|=2048,Xn(9,hu.bind(null,l,i,n,t),void 0,null),n},useId:function(){var e=Ue(),t=q.identifierPrefix;if(b){var n=We,l=$e;n=(l&~(1<<32-_e(l)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ip++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dp={readContext:Fe,useCallback:Su,useContext:Fe,useEffect:Ni,useImperativeHandle:Nu,useInsertionEffect:yu,useLayoutEffect:ju,useMemo:Cu,useReducer:bl,useRef:xu,useState:function(){return bl(Qn)},useDebugValue:Si,useDeferredValue:function(e){var t=Te();return wu(t,K.memoizedState,e)},useTransition:function(){var e=bl(Qn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:pu,useId:Eu,unstable_isNewReconciler:!1},pp={readContext:Fe,useCallback:Su,useContext:Fe,useEffect:Ni,useImperativeHandle:Nu,useInsertionEffect:yu,useLayoutEffect:ju,useMemo:Cu,useReducer:Hl,useRef:xu,useState:function(){return Hl(Qn)},useDebugValue:Si,useDeferredValue:function(e){var t=Te();return K===null?t.memoizedState=e:wu(t,K.memoizedState,e)},useTransition:function(){var e=Hl(Qn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:pu,useId:Eu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Cs(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var l=ae(),s=dt(e),i=Je(l,s);i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,s),t!==null&&(ze(t,e,s,l),wr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=ae(),s=dt(e),i=Je(l,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,s),t!==null&&(ze(t,e,s,l),wr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),l=dt(e),s=Je(n,l);s.tag=2,t!=null&&(s.callback=t),t=ut(e,s,l),t!==null&&(ze(t,e,l,n),wr(t,e,l))}};function Eo(e,t,n,l,s,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):t.prototype&&t.prototype.isPureReactComponent?!Bn(n,l)||!Bn(s,i):!0}function Pu(e,t,n){var l=!1,s=ht,i=t.contextType;return typeof i=="object"&&i!==null?i=Fe(i):(s=fe(t)?Dt:ie.current,l=t.contextTypes,i=(l=l!=null)?en(e,s):ht),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function Do(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function ws(e,t,n,l){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},fi(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=Fe(i):(i=fe(t)?Dt:ie.current,s.context=en(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Cs(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&cl.enqueueReplaceState(s,s.state,null),Qr(e,n,s,l),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function ln(e,t){try{var n="",l=t;do n+=Bc(l),l=l.return;while(l);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function Vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Es(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mp=typeof WeakMap=="function"?WeakMap:Map;function Lu(e,t,n){n=Je(-1,n),n.tag=3,n.payload={element:null};var l=t.value;return n.callback=function(){Zr||(Zr=!0,Ms=l),Es(e,t)},n}function Ru(e,t,n){n=Je(-1,n),n.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var s=t.value;n.payload=function(){return l(s)},n.callback=function(){Es(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Es(e,t),typeof l!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Fo(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new mp;var s=new Set;l.set(t,s)}else s=l.get(t),s===void 0&&(s=new Set,l.set(t,s));s.has(n)||(s.add(n),e=Dp.bind(null,e,t,n),t.then(e,e))}function To(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Po(e,t,n,l,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Je(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var hp=Ge.ReactCurrentOwner,me=!1;function oe(e,t,n,l){t.child=e===null?ou(t,null,n,l):nn(t,e.child,n,l)}function Lo(e,t,n,l,s){n=n.render;var i=t.ref;return Gt(t,s),l=ji(e,t,n,l,i,s),n=ki(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ye(e,t,s)):(b&&n&&ai(t),t.flags|=1,oe(e,t,l,s),t.child)}function Ro(e,t,n,l,s){if(e===null){var i=n.type;return typeof i=="function"&&!Li(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Iu(e,t,i,l,s)):(e=Lr(n.type,null,l,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Bn,n(o,l)&&e.ref===t.ref)return Ye(e,t,s)}return t.flags|=1,e=pt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Iu(e,t,n,l,s){if(e!==null){var i=e.memoizedProps;if(Bn(i,l)&&e.ref===t.ref)if(me=!1,t.pendingProps=l=i,(e.lanes&s)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Ye(e,t,s)}return Ds(e,t,n,l,s)}function _u(e,t,n){var l=t.pendingProps,s=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Jt,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Jt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=i!==null?i.baseLanes:n,U(Jt,xe),xe|=l}else i!==null?(l=i.baseLanes|n,t.memoizedState=null):l=n,U(Jt,xe),xe|=l;return oe(e,t,s,n),t.child}function zu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ds(e,t,n,l,s){var i=fe(n)?Dt:ie.current;return i=en(t,i),Gt(t,s),n=ji(e,t,n,l,i,s),l=ki(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ye(e,t,s)):(b&&l&&ai(t),t.flags|=1,oe(e,t,n,s),t.child)}function Io(e,t,n,l,s){if(fe(n)){var i=!0;Hr(t)}else i=!1;if(Gt(t,s),t.stateNode===null)Fr(e,t),Pu(t,n,l),ws(t,n,l,s),l=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var a=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Fe(d):(d=fe(n)?Dt:ie.current,d=en(t,d));var h=n.getDerivedStateFromProps,v=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==l||a!==d)&&Do(t,o,l,d),et=!1;var f=t.memoizedState;o.state=f,Qr(t,l,o,s),a=t.memoizedState,u!==l||f!==a||he.current||et?(typeof h=="function"&&(Cs(t,n,h,l),a=t.memoizedState),(u=et||Eo(t,n,u,l,f,a,d))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=a),o.props=l,o.state=a,o.context=d,l=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{o=t.stateNode,uu(e,t),u=t.memoizedProps,d=t.type===t.elementType?u:Le(t.type,u),o.props=d,v=t.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Fe(a):(a=fe(n)?Dt:ie.current,a=en(t,a));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==v||f!==a)&&Do(t,o,l,a),et=!1,f=t.memoizedState,o.state=f,Qr(t,l,o,s);var x=t.memoizedState;u!==v||f!==x||he.current||et?(typeof k=="function"&&(Cs(t,n,k,l),x=t.memoizedState),(d=et||Eo(t,n,d,l,f,x,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,x,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,x,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=x),o.props=l,o.state=x,o.context=a,l=d):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),l=!1)}return Fs(e,t,n,l,i,s)}function Fs(e,t,n,l,s,i){zu(e,t);var o=(t.flags&128)!==0;if(!l&&!o)return s&&xo(t,n,!1),Ye(e,t,i);l=t.stateNode,hp.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&o?(t.child=nn(t,e.child,null,i),t.child=nn(t,null,u,i)):oe(e,t,u,i),t.memoizedState=l.state,s&&xo(t,n,!0),t.child}function Mu(e){var t=e.stateNode;t.pendingContext?vo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vo(e,t.context,!1),gi(e,t.containerInfo)}function _o(e,t,n,l,s){return tn(),ci(s),t.flags|=256,oe(e,t,n,l),t.child}var Ts={dehydrated:null,treeContext:null,retryLane:0};function Ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function Au(e,t,n){var l=t.pendingProps,s=H.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(s&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),U(H,s&1),e===null)return Ns(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=l.children,e=l.fallback,i?(l=t.mode,i=t.child,o={mode:"hidden",children:o},!(l&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ml(o,l,0,null),e=Et(e,l,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ps(n),t.memoizedState=Ts,e):Ci(t,o));if(s=e.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return fp(e,t,o,l,u,s,n);if(i){i=l.fallback,o=t.mode,s=e.child,u=s.sibling;var a={mode:"hidden",children:l.children};return!(o&1)&&t.child!==s?(l=t.child,l.childLanes=0,l.pendingProps=a,t.deletions=null):(l=pt(s,a),l.subtreeFlags=s.subtreeFlags&14680064),u!==null?i=pt(u,i):(i=Et(i,o,n,null),i.flags|=2),i.return=t,l.return=t,l.sibling=i,t.child=l,l=i,i=t.child,o=e.child.memoizedState,o=o===null?Ps(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ts,l}return i=e.child,e=i.sibling,l=pt(i,{mode:"visible",children:l.children}),!(t.mode&1)&&(l.lanes=n),l.return=t,l.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=l,t.memoizedState=null,l}function Ci(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,l){return l!==null&&ci(l),nn(t,e.child,null,n),e=Ci(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fp(e,t,n,l,s,i,o){if(n)return t.flags&256?(t.flags&=-257,l=Vl(Error(j(422))),gr(e,t,o,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=l.fallback,s=t.mode,l=ml({mode:"visible",children:l.children},s,0,null),i=Et(i,s,o,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,t.mode&1&&nn(t,e.child,null,o),t.child.memoizedState=Ps(o),t.memoizedState=Ts,i);if(!(t.mode&1))return gr(e,t,o,null);if(s.data==="$!"){if(l=s.nextSibling&&s.nextSibling.dataset,l)var u=l.dgst;return l=u,i=Error(j(419)),l=Vl(i,l,void 0),gr(e,t,o,l)}if(u=(o&e.childLanes)!==0,me||u){if(l=q,l!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(l.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Ke(e,s),ze(l,e,s,-1))}return Pi(),l=Vl(Error(j(421))),gr(e,t,o,l)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Fp.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,ye=at(s.nextSibling),je=t,b=!0,Ie=null,e!==null&&(Ce[we++]=$e,Ce[we++]=We,Ce[we++]=Ft,$e=e.id,We=e.overflow,Ft=t),t=Ci(t,l.children),t.flags|=4096,t)}function zo(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ss(e.return,t,n)}function $l(e,t,n,l,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=n,i.tailMode=s)}function Uu(e,t,n){var l=t.pendingProps,s=l.revealOrder,i=l.tail;if(oe(e,t,l.children,n),l=H.current,l&2)l=l&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zo(e,n,t);else if(e.tag===19)zo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(U(H,l),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),$l(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Xr(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}$l(t,!0,n,null,i);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gp(e,t,n){switch(t.tag){case 3:Mu(t),tn();break;case 5:cu(t);break;case 1:fe(t.type)&&Hr(t);break;case 4:gi(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,s=t.memoizedProps.value;U(Wr,l._currentValue),l._currentValue=s;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(U(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Au(e,t,n):(U(H,H.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);U(H,H.current&1);break;case 19:if(l=(n&t.childLanes)!==0,e.flags&128){if(l)return Uu(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),U(H,H.current),l)break;return null;case 22:case 23:return t.lanes=0,_u(e,t,n)}return Ye(e,t,n)}var Ou,Ls,Bu,bu;Ou=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ls=function(){};Bu=function(e,t,n,l){var s=e.memoizedProps;if(s!==l){e=t.stateNode,Ct(be.current);var i=null;switch(n){case"input":s=ql(e,s),l=ql(e,l),i=[];break;case"select":s=$({},s,{value:void 0}),l=$({},l,{value:void 0}),i=[];break;case"textarea":s=ns(e,s),l=ns(e,l),i=[];break;default:typeof s.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Br)}ls(n,l);var o;n=null;for(d in s)if(!l.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var u=s[d];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(In.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in l){var a=l[d];if(u=s!=null?s[d]:void 0,l.hasOwnProperty(d)&&a!==u&&(a!=null||u!=null))if(d==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(In.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&O("scroll",e),i||u===a||(i=[])):(i=i||[]).push(d,a))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};bu=function(e,t,n,l){n!==l&&(t.flags|=4)};function xn(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,l|=s.subtreeFlags&14680064,l|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function vp(e,t,n){var l=t.pendingProps;switch(ui(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return fe(t.type)&&br(),le(t),null;case 3:return l=t.stateNode,rn(),B(he),B(ie),xi(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(Os(Ie),Ie=null))),Ls(e,t),le(t),null;case 5:vi(t);var s=Ct(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Bu(e,t,n,l,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(j(166));return le(t),null}if(e=Ct(be.current),hr(t)){l=t.stateNode,n=t.type;var i=t.memoizedProps;switch(l[Oe]=t,l[Vn]=i,e=(t.mode&1)!==0,n){case"dialog":O("cancel",l),O("close",l);break;case"iframe":case"object":case"embed":O("load",l);break;case"video":case"audio":for(s=0;s<Sn.length;s++)O(Sn[s],l);break;case"source":O("error",l);break;case"img":case"image":case"link":O("error",l),O("load",l);break;case"details":O("toggle",l);break;case"input":Vi(l,i),O("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!i.multiple},O("invalid",l);break;case"textarea":Wi(l,i),O("invalid",l)}ls(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?l.textContent!==u&&(i.suppressHydrationWarning!==!0&&mr(l.textContent,u,e),s=["children",u]):typeof u=="number"&&l.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&mr(l.textContent,u,e),s=["children",""+u]):In.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&O("scroll",l)}switch(n){case"input":sr(l),$i(l,i,!0);break;case"textarea":sr(l),Ji(l);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(l.onclick=Br)}l=s,t.updateQueue=l,l!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=o.createElement(n,{is:l.is}):(e=o.createElement(n),n==="select"&&(o=e,l.multiple?o.multiple=!0:l.size&&(o.size=l.size))):e=o.createElementNS(e,n),e[Oe]=t,e[Vn]=l,Ou(e,t,!1,!1),t.stateNode=e;e:{switch(o=ss(n,l),n){case"dialog":O("cancel",e),O("close",e),s=l;break;case"iframe":case"object":case"embed":O("load",e),s=l;break;case"video":case"audio":for(s=0;s<Sn.length;s++)O(Sn[s],e);s=l;break;case"source":O("error",e),s=l;break;case"img":case"image":case"link":O("error",e),O("load",e),s=l;break;case"details":O("toggle",e),s=l;break;case"input":Vi(e,l),s=ql(e,l),O("invalid",e);break;case"option":s=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},s=$({},l,{value:void 0}),O("invalid",e);break;case"textarea":Wi(e,l),s=ns(e,l),O("invalid",e);break;default:s=l}ls(n,s),u=s;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?xa(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ga(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&_n(e,a):typeof a=="number"&&_n(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(In.hasOwnProperty(i)?a!=null&&i==="onScroll"&&O("scroll",e):a!=null&&Xs(e,i,a,o))}switch(n){case"input":sr(e),$i(e,l,!1);break;case"textarea":sr(e),Ji(e);break;case"option":l.value!=null&&e.setAttribute("value",""+mt(l.value));break;case"select":e.multiple=!!l.multiple,i=l.value,i!=null?Qt(e,!!l.multiple,i,!1):l.defaultValue!=null&&Qt(e,!!l.multiple,l.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Br)}switch(n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)bu(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(j(166));if(n=Ct(Wn.current),Ct(be.current),hr(t)){if(l=t.stateNode,n=t.memoizedProps,l[Oe]=t,(i=l.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:mr(l.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mr(l.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else l=(n.nodeType===9?n:n.ownerDocument).createTextNode(l),l[Oe]=t,t.stateNode=l}return le(t),null;case 13:if(B(H),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&ye!==null&&t.mode&1&&!(t.flags&128))su(),tn(),t.flags|=98560,i=!1;else if(i=hr(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[Oe]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else Ie!==null&&(Os(Ie),Ie=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?Y===0&&(Y=3):Pi())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return rn(),Ls(e,t),e===null&&bn(t.stateNode.containerInfo),le(t),null;case 10:return mi(t.type._context),le(t),null;case 17:return fe(t.type)&&br(),le(t),null;case 19:if(B(H),i=t.memoizedState,i===null)return le(t),null;if(l=(t.flags&128)!==0,o=i.rendering,o===null)if(l)xn(i,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xr(e),o!==null){for(t.flags|=128,xn(i,!1),l=o.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=n,n=t.child;n!==null;)i=n,e=l,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(H,H.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>sn&&(t.flags|=128,l=!0,xn(i,!1),t.lanes=4194304)}else{if(!l)if(e=Xr(o),e!==null){if(t.flags|=128,l=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!b)return le(t),null}else 2*Q()-i.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,l=!0,xn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=H.current,U(H,l?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Ti(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&t.mode&1?xe&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function xp(e,t){switch(ui(t),t.tag){case 1:return fe(t.type)&&br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),B(he),B(ie),xi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vi(t),null;case 13:if(B(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(H),null;case 4:return rn(),null;case 10:return mi(t.type._context),null;case 22:case 23:return Ti(),null;case 24:return null;default:return null}}var vr=!1,se=!1,yp=typeof WeakSet=="function"?WeakSet:Set,C=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(l){W(e,t,l)}else n.current=null}function Rs(e,t,n){try{n()}catch(l){W(e,t,l)}}var Mo=!1;function jp(e,t){if(fs=Ar,e=Ja(),oi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var s=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,a=-1,d=0,h=0,v=e,f=null;t:for(;;){for(var k;v!==n||s!==0&&v.nodeType!==3||(u=o+s),v!==i||l!==0&&v.nodeType!==3||(a=o+l),v.nodeType===3&&(o+=v.nodeValue.length),(k=v.firstChild)!==null;)f=v,v=k;for(;;){if(v===e)break t;if(f===n&&++d===s&&(u=o),f===i&&++h===l&&(a=o),(k=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=k}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(gs={focusedElem:e,selectionRange:n},Ar=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var N=x.memoizedProps,_=x.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?N:Le(t.type,N),_);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(g){W(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return x=Mo,Mo=!1,x}function Pn(e,t,n){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var s=l=l.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Rs(t,n,i)}s=s.next}while(s!==l)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var l=n.create;n.destroy=l()}n=n.next}while(n!==t)}}function Is(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hu(e){var t=e.alternate;t!==null&&(e.alternate=null,Hu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Oe],delete t[Vn],delete t[ys],delete t[np],delete t[rp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vu(e){return e.tag===5||e.tag===3||e.tag===4}function Ao(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _s(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Br));else if(l!==4&&(e=e.child,e!==null))for(_s(e,t,n),e=e.sibling;e!==null;)_s(e,t,n),e=e.sibling}function zs(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(zs(e,t,n),e=e.sibling;e!==null;)zs(e,t,n),e=e.sibling}var ee=null,Re=!1;function Ze(e,t,n){for(n=n.child;n!==null;)$u(e,t,n),n=n.sibling}function $u(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:se||Wt(n,t);case 6:var l=ee,s=Re;ee=null,Ze(e,t,n),ee=l,Re=s,ee!==null&&(Re?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Re?(e=ee,n=n.stateNode,e.nodeType===8?Al(e.parentNode,n):e.nodeType===1&&Al(e,n),Un(e)):Al(ee,n.stateNode));break;case 4:l=ee,s=Re,ee=n.stateNode.containerInfo,Re=!0,Ze(e,t,n),ee=l,Re=s;break;case 0:case 11:case 14:case 15:if(!se&&(l=n.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){s=l=l.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Rs(n,t,o),s=s.next}while(s!==l)}Ze(e,t,n);break;case 1:if(!se&&(Wt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=n.memoizedProps,l.state=n.memoizedState,l.componentWillUnmount()}catch(u){W(n,t,u)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(se=(l=se)||n.memoizedState!==null,Ze(e,t,n),se=l):Ze(e,t,n);break;default:Ze(e,t,n)}}function Uo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yp),t.forEach(function(l){var s=Tp.bind(null,e,l);n.has(l)||(n.add(l),l.then(s,s))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var s=n[l];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:ee=u.stateNode,Re=!1;break e;case 3:ee=u.stateNode.containerInfo,Re=!0;break e;case 4:ee=u.stateNode.containerInfo,Re=!0;break e}u=u.return}if(ee===null)throw Error(j(160));$u(i,o,s),ee=null,Re=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(d){W(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wu(t,e),t=t.sibling}function Wu(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Ae(e),l&4){try{Pn(3,e,e.return),dl(3,e)}catch(N){W(e,e.return,N)}try{Pn(5,e,e.return)}catch(N){W(e,e.return,N)}}break;case 1:Pe(t,e),Ae(e),l&512&&n!==null&&Wt(n,n.return);break;case 5:if(Pe(t,e),Ae(e),l&512&&n!==null&&Wt(n,n.return),e.flags&32){var s=e.stateNode;try{_n(s,"")}catch(N){W(e,e.return,N)}}if(l&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&ma(s,i),ss(u,o);var d=ss(u,i);for(o=0;o<a.length;o+=2){var h=a[o],v=a[o+1];h==="style"?xa(s,v):h==="dangerouslySetInnerHTML"?ga(s,v):h==="children"?_n(s,v):Xs(s,h,v,d)}switch(u){case"input":es(s,i);break;case"textarea":ha(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Qt(s,!!i.multiple,k,!1):f!==!!i.multiple&&(i.defaultValue!=null?Qt(s,!!i.multiple,i.defaultValue,!0):Qt(s,!!i.multiple,i.multiple?[]:"",!1))}s[Vn]=i}catch(N){W(e,e.return,N)}}break;case 6:if(Pe(t,e),Ae(e),l&4){if(e.stateNode===null)throw Error(j(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(N){W(e,e.return,N)}}break;case 3:if(Pe(t,e),Ae(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Un(t.containerInfo)}catch(N){W(e,e.return,N)}break;case 4:Pe(t,e),Ae(e);break;case 13:Pe(t,e),Ae(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Di=Q())),l&4&&Uo(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(se=(d=se)||h,Pe(t,e),se=d):Pe(t,e),Ae(e),l&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(v=C=h;C!==null;){switch(f=C,k=f.child,f.tag){case 0:case 11:case 14:case 15:Pn(4,f,f.return);break;case 1:Wt(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){l=f,n=f.return;try{t=l,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(N){W(l,n,N)}}break;case 5:Wt(f,f.return);break;case 22:if(f.memoizedState!==null){Bo(v);continue}}k!==null?(k.return=f,C=k):Bo(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{s=v.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=v.stateNode,a=v.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=va("display",o))}catch(N){W(e,e.return,N)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(N){W(e,e.return,N)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Pe(t,e),Ae(e),l&4&&Uo(e);break;case 21:break;default:Pe(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vu(n)){var l=n;break e}n=n.return}throw Error(j(160))}switch(l.tag){case 5:var s=l.stateNode;l.flags&32&&(_n(s,""),l.flags&=-33);var i=Ao(e);zs(e,i,s);break;case 3:case 4:var o=l.stateNode.containerInfo,u=Ao(e);_s(e,u,o);break;default:throw Error(j(161))}}catch(a){W(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kp(e,t,n){C=e,Ju(e)}function Ju(e,t,n){for(var l=(e.mode&1)!==0;C!==null;){var s=C,i=s.child;if(s.tag===22&&l){var o=s.memoizedState!==null||vr;if(!o){var u=s.alternate,a=u!==null&&u.memoizedState!==null||se;u=vr;var d=se;if(vr=o,(se=a)&&!d)for(C=s;C!==null;)o=C,a=o.child,o.tag===22&&o.memoizedState!==null?bo(s):a!==null?(a.return=o,C=a):bo(s);for(;i!==null;)C=i,Ju(i),i=i.sibling;C=s,vr=u,se=d}Oo(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,C=i):Oo(e)}}function Oo(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||dl(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!se)if(n===null)l.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);l.componentDidUpdate(s,n.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&So(t,i,l);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}So(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&Un(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}se||t.flags&512&&Is(t)}catch(f){W(t,t.return,f)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Bo(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function bo(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(a){W(t,n,a)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var s=t.return;try{l.componentDidMount()}catch(a){W(t,s,a)}}var i=t.return;try{Is(t)}catch(a){W(t,i,a)}break;case 5:var o=t.return;try{Is(t)}catch(a){W(t,o,a)}}}catch(a){W(t,t.return,a)}if(t===e){C=null;break}var u=t.sibling;if(u!==null){u.return=t.return,C=u;break}C=t.return}}var Np=Math.ceil,Gr=Ge.ReactCurrentDispatcher,wi=Ge.ReactCurrentOwner,De=Ge.ReactCurrentBatchConfig,z=0,q=null,X=null,te=0,xe=0,Jt=gt(0),Y=0,Kn=null,Pt=0,pl=0,Ei=0,Ln=null,pe=null,Di=0,sn=1/0,He=null,Zr=!1,Ms=null,ct=null,xr=!1,lt=null,qr=0,Rn=0,As=null,Tr=-1,Pr=0;function ae(){return z&6?Q():Tr!==-1?Tr:Tr=Q()}function dt(e){return e.mode&1?z&2&&te!==0?te&-te:sp.transition!==null?(Pr===0&&(Pr=Pa()),Pr):(e=A,e!==0||(e=window.event,e=e===void 0?16:Aa(e.type)),e):1}function ze(e,t,n,l){if(50<Rn)throw Rn=0,As=null,Error(j(185));Gn(e,n,l),(!(z&2)||e!==q)&&(e===q&&(!(z&2)&&(pl|=n),Y===4&&nt(e,te)),ge(e,l),n===1&&z===0&&!(t.mode&1)&&(sn=Q()+500,al&&vt()))}function ge(e,t){var n=e.callbackNode;sd(e,t);var l=Mr(e,e===q?te:0);if(l===0)n!==null&&Ki(n),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(n!=null&&Ki(n),t===1)e.tag===0?lp(Ho.bind(null,e)):nu(Ho.bind(null,e)),ep(function(){!(z&6)&&vt()}),n=null;else{switch(La(l)){case 1:n=qs;break;case 4:n=Fa;break;case 16:n=zr;break;case 536870912:n=Ta;break;default:n=zr}n=ec(n,Qu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qu(e,t){if(Tr=-1,Pr=0,z&6)throw Error(j(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var l=Mr(e,e===q?te:0);if(l===0)return null;if(l&30||l&e.expiredLanes||t)t=el(e,l);else{t=l;var s=z;z|=2;var i=Ku();(q!==e||te!==t)&&(He=null,sn=Q()+500,wt(e,t));do try{wp();break}catch(u){Xu(e,u)}while(1);pi(),Gr.current=i,z=s,X!==null?t=0:(q=null,te=0,t=Y)}if(t!==0){if(t===2&&(s=cs(e),s!==0&&(l=s,t=Us(e,s))),t===1)throw n=Kn,wt(e,0),nt(e,l),ge(e,Q()),n;if(t===6)nt(e,l);else{if(s=e.current.alternate,!(l&30)&&!Sp(s)&&(t=el(e,l),t===2&&(i=cs(e),i!==0&&(l=i,t=Us(e,i))),t===1))throw n=Kn,wt(e,0),nt(e,l),ge(e,Q()),n;switch(e.finishedWork=s,e.finishedLanes=l,t){case 0:case 1:throw Error(j(345));case 2:kt(e,pe,He);break;case 3:if(nt(e,l),(l&130023424)===l&&(t=Di+500-Q(),10<t)){if(Mr(e,0)!==0)break;if(s=e.suspendedLanes,(s&l)!==l){ae(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=xs(kt.bind(null,e,pe,He),t);break}kt(e,pe,He);break;case 4:if(nt(e,l),(l&4194240)===l)break;for(t=e.eventTimes,s=-1;0<l;){var o=31-_e(l);i=1<<o,o=t[o],o>s&&(s=o),l&=~i}if(l=s,l=Q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Np(l/1960))-l,10<l){e.timeoutHandle=xs(kt.bind(null,e,pe,He),l);break}kt(e,pe,He);break;case 5:kt(e,pe,He);break;default:throw Error(j(329))}}}return ge(e,Q()),e.callbackNode===n?Qu.bind(null,e):null}function Us(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(wt(e,t).flags|=256),e=el(e,t),e!==2&&(t=pe,pe=n,t!==null&&Os(t)),e}function Os(e){pe===null?pe=e:pe.push.apply(pe,e)}function Sp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var l=0;l<n.length;l++){var s=n[l],i=s.getSnapshot;s=s.value;try{if(!Me(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Ei,t&=~pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_e(t),l=1<<n;e[n]=-1,t&=~l}}function Ho(e){if(z&6)throw Error(j(327));Zt();var t=Mr(e,0);if(!(t&1))return ge(e,Q()),null;var n=el(e,t);if(e.tag!==0&&n===2){var l=cs(e);l!==0&&(t=l,n=Us(e,l))}if(n===1)throw n=Kn,wt(e,0),nt(e,t),ge(e,Q()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,pe,He),ge(e,Q()),null}function Fi(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(sn=Q()+500,al&&vt())}}function Lt(e){lt!==null&&lt.tag===0&&!(z&6)&&Zt();var t=z;z|=1;var n=De.transition,l=A;try{if(De.transition=null,A=1,e)return e()}finally{A=l,De.transition=n,z=t,!(z&6)&&vt()}}function Ti(){xe=Jt.current,B(Jt)}function wt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qd(n)),X!==null)for(n=X.return;n!==null;){var l=n;switch(ui(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&br();break;case 3:rn(),B(he),B(ie),xi();break;case 5:vi(l);break;case 4:rn();break;case 13:B(H);break;case 19:B(H);break;case 10:mi(l.type._context);break;case 22:case 23:Ti()}n=n.return}if(q=e,X=e=pt(e.current,null),te=xe=t,Y=0,Kn=null,Ei=pl=Pt=0,pe=Ln=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],l=n.interleaved,l!==null){n.interleaved=null;var s=l.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,l.next=o}n.pending=l}St=null}return e}function Xu(e,t){do{var n=X;try{if(pi(),Er.current=Yr,Kr){for(var l=V.memoizedState;l!==null;){var s=l.queue;s!==null&&(s.pending=null),l=l.next}Kr=!1}if(Tt=0,Z=K=V=null,Tn=!1,Jn=0,wi.current=null,n===null||n.return===null){Y=1,Kn=t,X=null;break}e:{var i=e,o=n.return,u=n,a=t;if(t=te,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,h=u,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=To(o);if(k!==null){k.flags&=-257,Po(k,o,u,i,t),k.mode&1&&Fo(i,d,t),t=k,a=d;var x=t.updateQueue;if(x===null){var N=new Set;N.add(a),t.updateQueue=N}else x.add(a);break e}else{if(!(t&1)){Fo(i,d,t),Pi();break e}a=Error(j(426))}}else if(b&&u.mode&1){var _=To(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Po(_,o,u,i,t),ci(ln(a,u));break e}}i=a=ln(a,u),Y!==4&&(Y=2),Ln===null?Ln=[i]:Ln.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Lu(i,a,t);No(i,m);break e;case 1:u=a;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ct===null||!ct.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Ru(i,u,t);No(i,g);break e}}i=i.return}while(i!==null)}Gu(n)}catch(S){t=S,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function Ku(){var e=Gr.current;return Gr.current=Yr,e===null?Yr:e}function Pi(){(Y===0||Y===3||Y===2)&&(Y=4),q===null||!(Pt&268435455)&&!(pl&268435455)||nt(q,te)}function el(e,t){var n=z;z|=2;var l=Ku();(q!==e||te!==t)&&(He=null,wt(e,t));do try{Cp();break}catch(s){Xu(e,s)}while(1);if(pi(),z=n,Gr.current=l,X!==null)throw Error(j(261));return q=null,te=0,Y}function Cp(){for(;X!==null;)Yu(X)}function wp(){for(;X!==null&&!Yc();)Yu(X)}function Yu(e){var t=qu(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Gu(e):X=t,wi.current=null}function Gu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,X=null;return}}else if(n=vp(n,t,xe),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Y===0&&(Y=5)}function kt(e,t,n){var l=A,s=De.transition;try{De.transition=null,A=1,Ep(e,t,n,l)}finally{De.transition=s,A=l}return null}function Ep(e,t,n,l){do Zt();while(lt!==null);if(z&6)throw Error(j(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(id(e,i),e===q&&(X=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xr||(xr=!0,ec(zr,function(){return Zt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=De.transition,De.transition=null;var o=A;A=1;var u=z;z|=4,wi.current=null,jp(e,n),Wu(n,e),Jd(gs),Ar=!!fs,gs=fs=null,e.current=n,kp(n),Gc(),z=u,A=o,De.transition=i}else e.current=n;if(xr&&(xr=!1,lt=e,qr=s),i=e.pendingLanes,i===0&&(ct=null),ed(n.stateNode),ge(e,Q()),t!==null)for(l=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],l(s.value,{componentStack:s.stack,digest:s.digest});if(Zr)throw Zr=!1,e=Ms,Ms=null,e;return qr&1&&e.tag!==0&&Zt(),i=e.pendingLanes,i&1?e===As?Rn++:(Rn=0,As=e):Rn=0,vt(),null}function Zt(){if(lt!==null){var e=La(qr),t=De.transition,n=A;try{if(De.transition=null,A=16>e?16:e,lt===null)var l=!1;else{if(e=lt,lt=null,qr=0,z&6)throw Error(j(331));var s=z;for(z|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var u=i.deletions;if(u!==null){for(var a=0;a<u.length;a++){var d=u[a];for(C=d;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:Pn(8,h,i)}var v=h.child;if(v!==null)v.return=h,C=v;else for(;C!==null;){h=C;var f=h.sibling,k=h.return;if(Hu(h),h===d){C=null;break}if(f!==null){f.return=k,C=f;break}C=k}}}var x=i.alternate;if(x!==null){var N=x.child;if(N!==null){x.child=null;do{var _=N.sibling;N.sibling=null,N=_}while(N!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pn(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,C=m;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){o=C;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,C=p;else e:for(o=c;C!==null;){if(u=C,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:dl(9,u)}}catch(S){W(u,u.return,S)}if(u===o){C=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,C=g;break e}C=u.return}}if(z=s,vt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(rl,e)}catch{}l=!0}return l}finally{A=n,De.transition=t}}return!1}function Vo(e,t,n){t=ln(n,t),t=Lu(e,t,1),e=ut(e,t,1),t=ae(),e!==null&&(Gn(e,1,t),ge(e,t))}function W(e,t,n){if(e.tag===3)Vo(e,e,n);else for(;t!==null;){if(t.tag===3){Vo(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ct===null||!ct.has(l))){e=ln(n,e),e=Ru(t,e,1),t=ut(t,e,1),e=ae(),t!==null&&(Gn(t,1,e),ge(t,e));break}}t=t.return}}function Dp(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(Y===4||Y===3&&(te&130023424)===te&&500>Q()-Di?wt(e,0):Ei|=n),ge(e,t)}function Zu(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=ae();e=Ke(e,t),e!==null&&(Gn(e,t,n),ge(e,n))}function Fp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zu(e,n)}function Tp(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(j(314))}l!==null&&l.delete(t),Zu(e,n)}var qu;qu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,gp(e,t,n);me=!!(e.flags&131072)}else me=!1,b&&t.flags&1048576&&ru(t,$r,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;Fr(e,t),e=t.pendingProps;var s=en(t,ie.current);Gt(t,n),s=ji(null,t,l,e,s,n);var i=ki();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(l)?(i=!0,Hr(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,fi(t),s.updater=cl,t.stateNode=s,s._reactInternals=t,ws(t,l,e,n),t=Fs(null,t,l,!0,i,n)):(t.tag=0,b&&i&&ai(t),oe(null,t,s,n),t=t.child),t;case 16:l=t.elementType;e:{switch(Fr(e,t),e=t.pendingProps,s=l._init,l=s(l._payload),t.type=l,s=t.tag=Lp(l),e=Le(l,e),s){case 0:t=Ds(null,t,l,e,n);break e;case 1:t=Io(null,t,l,e,n);break e;case 11:t=Lo(null,t,l,e,n);break e;case 14:t=Ro(null,t,l,Le(l.type,e),n);break e}throw Error(j(306,l,""))}return t;case 0:return l=t.type,s=t.pendingProps,s=t.elementType===l?s:Le(l,s),Ds(e,t,l,s,n);case 1:return l=t.type,s=t.pendingProps,s=t.elementType===l?s:Le(l,s),Io(e,t,l,s,n);case 3:e:{if(Mu(t),e===null)throw Error(j(387));l=t.pendingProps,i=t.memoizedState,s=i.element,uu(e,t),Qr(t,l,null,n);var o=t.memoizedState;if(l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=ln(Error(j(423)),t),t=_o(e,t,l,n,s);break e}else if(l!==s){s=ln(Error(j(424)),t),t=_o(e,t,l,n,s);break e}else for(ye=at(t.stateNode.containerInfo.firstChild),je=t,b=!0,Ie=null,n=ou(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),l===s){t=Ye(e,t,n);break e}oe(e,t,l,n)}t=t.child}return t;case 5:return cu(t),e===null&&Ns(t),l=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,o=s.children,vs(l,s)?o=null:i!==null&&vs(l,i)&&(t.flags|=32),zu(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&Ns(t),null;case 13:return Au(e,t,n);case 4:return gi(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=nn(t,null,l,n):oe(e,t,l,n),t.child;case 11:return l=t.type,s=t.pendingProps,s=t.elementType===l?s:Le(l,s),Lo(e,t,l,s,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(l=t.type._context,s=t.pendingProps,i=t.memoizedProps,o=s.value,U(Wr,l._currentValue),l._currentValue=o,i!==null)if(Me(i.value,o)){if(i.children===s.children&&!he.current){t=Ye(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var a=u.firstContext;a!==null;){if(a.context===l){if(i.tag===1){a=Je(-1,n&-n),a.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?a.next=a:(a.next=h.next,h.next=a),d.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ss(i.return,n,t),u.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ss(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,l=t.pendingProps.children,Gt(t,n),s=Fe(s),l=l(s),t.flags|=1,oe(e,t,l,n),t.child;case 14:return l=t.type,s=Le(l,t.pendingProps),s=Le(l.type,s),Ro(e,t,l,s,n);case 15:return Iu(e,t,t.type,t.pendingProps,n);case 17:return l=t.type,s=t.pendingProps,s=t.elementType===l?s:Le(l,s),Fr(e,t),t.tag=1,fe(l)?(e=!0,Hr(t)):e=!1,Gt(t,n),Pu(t,l,s),ws(t,l,s,n),Fs(null,t,l,!0,e,n);case 19:return Uu(e,t,n);case 22:return _u(e,t,n)}throw Error(j(156,t.tag))};function ec(e,t){return Da(e,t)}function Pp(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,l){return new Pp(e,t,n,l)}function Li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lp(e){if(typeof e=="function")return Li(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===Gs)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,l,s,i){var o=2;if(l=e,typeof e=="function")Li(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Mt:return Et(n.children,s,i,t);case Ks:o=8,s|=8;break;case Kl:return e=Ee(12,n,t,s|2),e.elementType=Kl,e.lanes=i,e;case Yl:return e=Ee(13,n,t,s),e.elementType=Yl,e.lanes=i,e;case Gl:return e=Ee(19,n,t,s),e.elementType=Gl,e.lanes=i,e;case ca:return ml(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case aa:o=10;break e;case ua:o=9;break e;case Ys:o=11;break e;case Gs:o=14;break e;case qe:o=16,l=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,s),t.elementType=e,t.type=l,t.lanes=i,t}function Et(e,t,n,l){return e=Ee(7,e,l,t),e.lanes=n,e}function ml(e,t,n,l){return e=Ee(22,e,l,t),e.elementType=ca,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rp(e,t,n,l,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=l,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ri(e,t,n,l,s,i,o,u,a){return e=new Rp(e,t,n,u,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:l,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fi(i),e}function Ip(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zt,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}function tc(e){if(!e)return ht;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(fe(n))return tu(e,n,t)}return t}function nc(e,t,n,l,s,i,o,u,a){return e=Ri(n,l,!0,e,s,i,o,u,a),e.context=tc(null),n=e.current,l=ae(),s=dt(n),i=Je(l,s),i.callback=t??null,ut(n,i,s),e.current.lanes=s,Gn(e,s,l),ge(e,l),e}function hl(e,t,n,l){var s=t.current,i=ae(),o=dt(s);return n=tc(n),t.context===null?t.context=n:t.pendingContext=n,t=Je(i,o),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=ut(s,t,o),e!==null&&(ze(e,s,o,i),wr(e,s,o)),o}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $o(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ii(e,t){$o(e,t),(e=e.alternate)&&$o(e,t)}function _p(){return null}var rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function _i(e){this._internalRoot=e}fl.prototype.render=_i.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));hl(e,t,null,null)};fl.prototype.unmount=_i.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){hl(null,e,null,null)}),t[Xe]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=_a();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&Ma(e)}};function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wo(){}function zp(e,t,n,l,s){if(s){if(typeof l=="function"){var i=l;l=function(){var d=tl(o);i.call(d)}}var o=nc(t,l,e,0,null,!1,!1,"",Wo);return e._reactRootContainer=o,e[Xe]=o.current,bn(e.nodeType===8?e.parentNode:e),Lt(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof l=="function"){var u=l;l=function(){var d=tl(a);u.call(d)}}var a=Ri(e,0,!1,null,null,!1,!1,"",Wo);return e._reactRootContainer=a,e[Xe]=a.current,bn(e.nodeType===8?e.parentNode:e),Lt(function(){hl(t,a,n,l)}),a}function vl(e,t,n,l,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var u=s;s=function(){var a=tl(o);u.call(a)}}hl(t,o,e,s)}else o=zp(n,t,e,s,l);return tl(o)}Ra=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(ei(t,n|1),ge(t,Q()),!(z&6)&&(sn=Q()+500,vt()))}break;case 13:Lt(function(){var l=Ke(e,1);if(l!==null){var s=ae();ze(l,e,1,s)}}),Ii(e,1)}};ti=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=ae();ze(t,e,134217728,n)}Ii(e,134217728)}};Ia=function(e){if(e.tag===13){var t=dt(e),n=Ke(e,t);if(n!==null){var l=ae();ze(n,e,t,l)}Ii(e,t)}};_a=function(){return A};za=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};os=function(e,t,n){switch(t){case"input":if(es(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var s=ol(l);if(!s)throw Error(j(90));pa(l),es(l,s)}}}break;case"textarea":ha(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};ka=Fi;Na=Lt;var Mp={usingClientEntryPoint:!1,Events:[qn,Bt,ol,ya,ja,Fi]},yn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ap={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wa(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||_p,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{rl=yr.inject(Ap),Be=yr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zi(t))throw Error(j(200));return Ip(e,t,null,n)};Ne.createRoot=function(e,t){if(!zi(e))throw Error(j(299));var n=!1,l="",s=rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ri(e,1,!1,null,null,n,!1,l,s),e[Xe]=t.current,bn(e.nodeType===8?e.parentNode:e),new _i(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=wa(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Lt(e)};Ne.hydrate=function(e,t,n){if(!gl(t))throw Error(j(200));return vl(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!zi(e))throw Error(j(405));var l=n!=null&&n.hydratedSources||null,s=!1,i="",o=rc;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=nc(t,null,e,1,n??null,s,!1,i,o),e[Xe]=t.current,bn(e),l)for(e=0;e<l.length;e++)n=l[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new fl(t)};Ne.render=function(e,t,n){if(!gl(t))throw Error(j(200));return vl(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!gl(e))throw Error(j(40));return e._reactRootContainer?(Lt(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};Ne.unstable_batchedUpdates=Fi;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,l){if(!gl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return vl(e,t,n,!1,l)};Ne.version="18.3.1-next-f1338f8080-20240426";function lc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc)}catch(e){console.error(e)}}lc(),la.exports=Ne;var Up=la.exports,Jo=Up;Ql.createRoot=Jo.createRoot,Ql.hydrateRoot=Jo.hydrateRoot;var Op={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Bp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bp=(e,t)=>{const n=F.forwardRef(({color:l="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,children:u,...a},d)=>F.createElement("svg",{ref:d,...Op,width:s,height:s,stroke:l,strokeWidth:o?Number(i)*24/Number(s):i,className:`lucide lucide-${Bp(e)}`,...a},[...t.map(([h,v])=>F.createElement(h,v)),...(Array.isArray(u)?u:[u])||[]]));return n.displayName=`${e}`,n};var de=bp;const Hp=de("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),sc=de("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),Vp=de("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),$p=de("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),Wp=de("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Jp=de("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),Qp=de("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),ic=de("Layers",[["polygon",{points:"12 2 2 7 12 12 22 7 12 2",key:"1b0ttc"}],["polyline",{points:"2 17 12 22 22 17",key:"imjtdl"}],["polyline",{points:"2 12 12 17 22 12",key:"5dexcv"}]]),Bs=de("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),Xp=de("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),bs=de("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),oc=de("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),ac=de("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Kp=de("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),uc=de("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Yp(){const[e,t]=F.useState("home"),n=[{id:"home",label:"Home",icon:Qp},{id:"js-fundamentals",label:"JS Fundamentals",icon:Jp},{id:"js-basics",label:"JavaScript Basics",icon:sc},{id:"react-core",label:"React Core",icon:uc},{id:"components",label:"Components",icon:ic},{id:"hooks",label:"Hooks",icon:ac},{id:"data-handling",label:"Data Handling",icon:Vp},{id:"events-interactions",label:"Events & Interactions",icon:Kp},{id:"figma-mapping",label:"Figma Mapping",icon:Xp}];return r.jsxs("div",{className:"app",children:[r.jsx("header",{className:"header",children:r.jsxs("div",{className:"container",children:[r.jsxs("h1",{className:"logo",children:[r.jsx(Hp,{className:"logo-icon"}),"React JS Cheatsheet"]}),r.jsx("p",{className:"subtitle",children:"For UX Designers with Figma Analogies"})]})}),r.jsx("nav",{className:"sidebar",children:r.jsx("div",{className:"nav-items",children:n.map(l=>{const s=l.icon;return r.jsxs("button",{className:`nav-item ${e===l.id?"active":""}`,onClick:()=>t(l.id),children:[r.jsx(s,{className:"nav-icon"}),r.jsx("span",{children:l.label})]},l.id)})})}),r.jsx("main",{className:"main-content",children:r.jsxs("div",{className:"container",children:[e==="home"&&r.jsx(Gp,{}),e==="js-fundamentals"&&r.jsx(Zp,{}),e==="js-basics"&&r.jsx(qp,{}),e==="react-core"&&r.jsx(em,{}),e==="components"&&r.jsx(tm,{}),e==="hooks"&&r.jsx(nm,{}),e==="data-handling"&&r.jsx(rm,{}),e==="events-interactions"&&r.jsx(lm,{}),e==="figma-mapping"&&r.jsx(sm,{})]})})]})}function Gp(){return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Welcome to React JS Cheatsheet"}),r.jsx("p",{className:"lead",children:"A comprehensive guide to JavaScript and React concepts, explained through the lens of Figma and design thinking."}),r.jsxs("div",{className:"feature-grid",children:[r.jsxs("div",{className:"feature-card",children:[r.jsx(sc,{className:"feature-icon"}),r.jsx("h3",{children:"JavaScript Basics"}),r.jsx("p",{children:"Learn core JavaScript concepts with design analogies"})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx(uc,{className:"feature-icon"}),r.jsx("h3",{children:"React Core"}),r.jsx("p",{children:"Understand React fundamentals and component architecture"})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx(ic,{className:"feature-icon"}),r.jsx("h3",{children:"Components"}),r.jsx("p",{children:"Master component composition and props"})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx(ac,{className:"feature-icon"}),r.jsx("h3",{children:"Hooks"}),r.jsx("p",{children:"Learn state management and side effects"})]})]}),r.jsxs("div",{className:"getting-started",children:[r.jsx("h2",{children:"🎯 How to Use This Cheatsheet"}),r.jsxs("div",{className:"steps",children:[r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"step-number",children:"1"}),r.jsxs("div",{className:"step-content",children:[r.jsx("h4",{children:"Start with JavaScript Basics"}),r.jsx("p",{children:"Understand variables, objects, and functions through Figma analogies"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"step-number",children:"2"}),r.jsxs("div",{className:"step-content",children:[r.jsx("h4",{children:"Learn React Core Concepts"}),r.jsx("p",{children:"Discover how React components work like Figma components"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"step-number",children:"3"}),r.jsxs("div",{className:"step-content",children:[r.jsx("h4",{children:"Master Hooks and State"}),r.jsx("p",{children:"Learn to make your UI interactive like Figma prototypes"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx("div",{className:"step-number",children:"4"}),r.jsxs("div",{className:"step-content",children:[r.jsx("h4",{children:"Build Real Projects"}),r.jsx("p",{children:"Apply your knowledge to create interactive prototypes"})]})]})]})]})]})}function Zp(){F.useState(0);const[e,t]=F.useState({name:"John",age:25}),[n,l]=F.useState(""),[s,i]=F.useState(["red","blue","green"]),[o,u]=F.useState("Sarah"),[a,d]=F.useState("Sarah"),[h,v]=F.useState({name:"Sarah",age:28}),[f,k]=F.useState({name:"Sarah",age:28}),[x,N]=F.useState(["red","blue","green"]),[_,m]=F.useState(["red","blue","green"]),[c,p]=F.useState({name:"Alex",age:25,skills:["JavaScript","CSS"]}),[g,S]=F.useState({name:"John",age:30,role:"Developer"}),[E,D]=F.useState("");return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"JavaScript Fundamentals"}),r.jsx("p",{children:"Core JavaScript concepts with interactive examples"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Variables"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Variables are like text styles in Figma - they store values that you can reuse throughout your design."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`let variableName = value;
const constantName = value;
var oldWay = value;`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Variable declaration and assignment
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
}`,explanation:"Variables store data that can be used and modified throughout your code."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Variable Examples:"}),r.jsxs("div",{className:"result",children:["userName: ",r.jsx("span",{className:"code-output",children:"Sarah"}),r.jsx("br",{}),"userAge: ",r.jsx("span",{className:"code-output",children:"28"}),r.jsx("br",{}),"oldWay: ",r.jsx("span",{className:"code-output",children:"avoid this"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Change Variable:"}),r.jsx("input",{value:n,onChange:y=>l(y.target.value),placeholder:"Enter a new message"}),r.jsxs("div",{className:"result",children:["Message: ",n||"No message set"]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Objects"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Objects are like component properties in Figma - they group related data together."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`const objectName = {
  key1: value1,
  key2: value2
};

objectName.key1;           // Access property
objectName["key2"];        // Bracket notation`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Creating an object
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

functionName(argument);     // Call function`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Function declaration
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
};`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// String methods
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
}`,explanation:"Methods are functions that belong to objects and can access the object's data."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Array Methods:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>i(y=>[...y,"yellow"]),children:"Push Yellow"}),r.jsx("button",{onClick:()=>i(y=>y.slice(0,-1)),children:"Pop Last"}),r.jsx("button",{onClick:()=>i(y=>["purple",...y]),children:"Unshift Purple"})]}),r.jsxs("div",{className:"result",children:["Colors: [",s.join(", "),"]"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"String Methods:"}),r.jsx("input",{type:"text",placeholder:"Enter text",id:"stringInput",defaultValue:"Hello World"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{const y=document.getElementById("stringInput").value;alert(y.toUpperCase())},children:"To Uppercase"}),r.jsx("button",{onClick:()=>{const y=document.getElementById("stringInput").value;alert(`Length: ${y.length}`)},children:"Get Length"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Classes"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Classes are like component templates in Figma - they define the structure for creating multiple instances."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`class ClassName {
  constructor(parameter) {
    this.property = parameter;
  }
  
  methodName() {
    return value;
  }
}

const instance = new ClassName(value);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Class definition
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
instance.property = newValue;   // Change property value`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Constructor function
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
}`,explanation:"Constructors initialize object properties when creating new instances, while properties store data within objects."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Instance Properties:"}),r.jsxs("div",{className:"result",children:["Name: ",r.jsx("span",{className:"code-output",children:g.name}),r.jsx("br",{}),"Age: ",r.jsx("span",{className:"code-output",children:g.age}),r.jsx("br",{}),"Role: ",r.jsx("span",{className:"code-output",children:g.role}),r.jsx("br",{}),g.skills&&r.jsxs(r.Fragment,{children:["Skills: ",r.jsx("span",{className:"code-output",children:g.skills.join(", ")}),r.jsx("br",{})]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Modify Properties:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:g.name,onChange:y=>S(M=>({...M,name:y.target.value})),placeholder:"Name"}),r.jsx("input",{type:"number",value:g.age,onChange:y=>S(M=>({...M,age:parseInt(y.target.value)||0})),placeholder:"Age"}),r.jsxs("select",{value:g.role,onChange:y=>S(M=>({...M,role:y.target.value})),children:[r.jsx("option",{value:"Developer",children:"Developer"}),r.jsx("option",{value:"Designer",children:"Designer"}),r.jsx("option",{value:"Manager",children:"Manager"}),r.jsx("option",{value:"Tester",children:"Tester"})]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Add Skills:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:E,onChange:y=>D(y.target.value),placeholder:"Enter a skill"}),r.jsx("button",{onClick:()=>{E.trim()&&(S(y=>({...y,skills:[...y.skills||[],E.trim()]})),D(""))},children:"Add Skill"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Property Info:"}),r.jsxs("div",{className:"result",children:[g.name," is a ",g.age,"-year-old ",g.role,g.skills&&g.skills.length>0&&r.jsxs(r.Fragment,{children:[" with skills in ",g.skills.join(", ")]})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Events"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Events are like interactions in Figma prototypes - they respond to user actions."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`element.addEventListener('event', handler);

// In React JSX:
<button onClick={handleClick}>
  Click me
</button>

const handleClick = (event) => {
  // Handle event
};`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Event handling
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
// - mouseover: Mouse hovers over element`,explanation:"Events allow your code to respond to user interactions and system changes."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Event Examples:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>alert("Button clicked!"),children:"Click Event"}),r.jsx("button",{onMouseOver:()=>alert("Mouse over!"),children:"Mouse Over"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Input Event:"}),r.jsx("input",{type:"text",placeholder:"Type something...",onChange:y=>l(y.target.value)}),r.jsxs("div",{className:"result",children:["You typed: ",n]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Parameters & Arguments"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Parameters are like input fields in Figma components - they define what data the function needs."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`function functionName(parameter1, parameter2) {
  // Function body
}

functionName(argument1, argument2);  // Call with arguments

function greet(name = "User") {     // Default parameter
  return "Hello, " + name;
}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Parameters (in function definition)
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
let arrayCopy = [...array];          // Array spread`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// PRIMITIVE TYPES (copied by value)
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
let userDeepCopy2 = Object.assign({}, user); // Object.assign`,explanation:"Primitive types are copied by value, while reference types are copied by reference. This affects how data is shared and modified."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Primitive Types (Copied by Value):"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["Original name: ",r.jsx("span",{className:"code-output",children:o})]}),r.jsxs("div",{children:["Copy name: ",r.jsx("span",{className:"code-output",children:a})]})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{d("Jane")},children:'Change Copy to "Jane"'}),r.jsx("button",{onClick:()=>{u("Sarah"),d("Sarah")},children:"Reset Both"})]}),r.jsx("div",{className:"result",style:{fontSize:"12px",color:"#94a3b8"},children:"Notice: Changing the copy doesn't affect the original"})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Reference Types (Copied by Reference):"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["Original user: ",r.jsx("span",{className:"code-output",children:h.name})]}),r.jsxs("div",{children:["Copy user: ",r.jsx("span",{className:"code-output",children:f.name})]})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{k(y=>({...y,name:"Jane"}))},children:'Change Copy to "Jane"'}),r.jsx("button",{onClick:()=>{v({name:"Sarah",age:28}),k({name:"Sarah",age:28})},children:"Reset Both"})]}),r.jsx("div",{className:"result",style:{fontSize:"12px",color:"#ef4444"},children:"Notice: Changing the copy affects the original!"})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Creating True Copies:"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["Original array: [",x.join(", "),"]"]}),r.jsxs("div",{children:["Spread copy: [",_.join(", "),"]"]})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{m(y=>[...y,"yellow"])},children:'Add "yellow" to spread copy'}),r.jsx("button",{onClick:()=>{N(["red","blue","green"]),m(["red","blue","green"])},children:"Reset Arrays"})]}),r.jsx("div",{className:"result",style:{fontSize:"12px",color:"#10b981"},children:"Notice: Spread operator creates independent copies"})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"React State Implications:"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["User state: ",c.name," (age: ",c.age,")"]}),r.jsxs("div",{children:["Skills: [",c.skills.join(", "),"]"]})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{c.age=c.age+1,p(c)},children:"Wrong: Direct Mutation"}),r.jsx("button",{onClick:()=>{p(y=>({...y,age:y.age+1}))},children:"Correct: New Object"}),r.jsx("button",{onClick:()=>{p(y=>({...y,skills:[...y.skills,"React"]}))},children:"Add Skill"})]}),r.jsx("div",{className:"result",style:{fontSize:"12px",color:"#f59e0b"},children:`Try the "Wrong" button - notice React doesn't update! Then try "Correct" buttons.`})]})]})})]})]})]})]})}function qp(){const[e,t]=F.useState(0),[n,l]=F.useState("Designer"),[s,i]=F.useState(!0);F.useState(["red","blue","green"]);const[o,u]=F.useState({name:"Sarah",role:"UX Designer"}),[a,d]=F.useState({showMessage:!1,showCount:!1,hasError:!1,count:5});return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"JavaScript Basics"}),r.jsx("p",{children:"Core JavaScript concepts explained with Figma analogies"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Variables & State"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Variables are like text styles or color styles in Figma - they store reusable values."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// React state
const [state, setState] = useState(initialValue);

// Examples:
const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState('');
const [isVisible, setIsVisible] = useState(true);

// Objects and arrays
const user = { name: 'Sarah', role: 'Designer' };
const colors = ['red', 'blue', 'green'];`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// React state (like dynamic properties in Figma)
const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState('Designer');
const [isVisible, setIsVisible] = useState(true);

// Objects (like component properties in Figma)
const user = { name: 'Sarah', role: 'UX Designer' };

// Arrays (like color palettes in Figma)
const colors = ['red', 'blue', 'green'];`,explanation:"State variables can change over time, just like how you can update text or colors in Figma."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsxs("label",{children:["Counter: ",e]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>t(e-1),children:r.jsx(Bs,{size:16})}),r.jsx("button",{onClick:()=>t(e+1),children:r.jsx(bs,{size:16})}),r.jsx("button",{onClick:()=>t(0),children:r.jsx(oc,{size:16})})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Name:"}),r.jsx("input",{value:n,onChange:h=>l(h.target.value),placeholder:"Enter name"})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Visibility:"}),r.jsxs("button",{onClick:()=>i(!s),children:[s?r.jsx(Wp,{size:16}):r.jsx($p,{size:16}),s?" Hide":" Show"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Object:"}),r.jsxs("div",{className:"object-display",children:[r.jsxs("span",{children:["Name: ",o.name]}),r.jsxs("span",{children:["Role: ",o.role]})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Arrow Functions"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Arrow functions are like quick actions in Figma - shorter, more concise ways to perform tasks."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Traditional function
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

const calculateArea = (width, height) => width * height;`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Traditional function (like a full plugin in Figma)
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
{user ? <UserProfile /> : <LoginForm />}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Ternary operator: condition ? valueIfTrue : valueIfFalse
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
console.log(status);   // "Online" or "Last seen recently" or "Offline"`,explanation:"Ternary operators provide a concise way to write conditional logic in a single line."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Role:"}),r.jsxs("select",{id:"userRole",defaultValue:"Designer",onChange:h=>{const f=h.target.value==="Designer"?"Show design tools":"Show general tools";document.getElementById("roleMessage").textContent=f},children:[r.jsx("option",{value:"Designer",children:"Designer"}),r.jsx("option",{value:"Developer",children:"Developer"}),r.jsx("option",{value:"Manager",children:"Manager"})]}),r.jsxs("div",{className:"result",children:["Message: ",r.jsx("span",{id:"roleMessage",children:"Show design tools"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Loading State:"}),r.jsx("div",{className:"button-group",children:r.jsx("button",{onClick:()=>{const h=document.getElementById("loadingBtn");h.textContent=h.textContent==="Submit"?"Loading...":"Submit",h.style.backgroundColor=h.textContent==="Loading..."?"#f59e0b":"#3b82f6"},id:"loadingBtn",style:{backgroundColor:"#3b82f6"},children:"Submit"})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Theme Toggle:"}),r.jsx("button",{onClick:()=>{const h=document.getElementById("themeDisplay");h.textContent=h.textContent==="Light"?"Dark":"Light",h.style.color=h.textContent==="Dark"?"#fbbf24":"#1f2937"},children:"Toggle Theme"}),r.jsxs("div",{className:"result",children:["Current: ",r.jsx("span",{id:"themeDisplay",style:{color:"#1f2937"},children:"Light"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Destructuring"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Destructuring is like extracting specific properties from a component in Figma - you pull out just what you need."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Object destructuring (like extracting component properties)
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
console.log(tertiary);  // "green"`,explanation:"Destructuring allows you to extract values from objects and arrays into separate variables."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Output:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"name:"})," ",r.jsx("span",{className:"code-output",children:"Sarah"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"role:"})," ",r.jsx("span",{className:"code-output",children:"UX Designer"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"firstColor:"})," ",r.jsx("span",{className:"code-output",children:"red"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"tertiary:"})," ",r.jsx("span",{className:"code-output",children:"green"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Template Literals"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Template literals are like smart text in Figma - they combine static text with dynamic values."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Template literals (like smart text in Figma)
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

console.log(message2);  // "Hello Sarah, you have 5 tasks"`,explanation:"Template literals provide a cleaner way to create strings with embedded expressions."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Output:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"message2:"})," ",r.jsx("span",{className:"code-output",children:"Hello Sarah, you have 5 tasks"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"status:"})," ",r.jsx("span",{className:"code-output",children:"User is logged in"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Array Methods"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Array methods are like layer operations in Figma - you can filter, transform, and organize your data."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Array methods (like layer operations in Figma)
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
{name && <h1>Hello, {name}!</h1>}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Logical AND examples
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
}`,explanation:"The logical AND operator (&&) is perfect for conditional rendering - it only renders the right side when the left side is truthy."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Logical AND Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Toggle Conditions:"}),r.jsxs("div",{className:"button-group",children:[r.jsxs("button",{onClick:()=>d(h=>({...h,showMessage:!h.showMessage})),children:[a.showMessage?"Hide":"Show"," Message"]}),r.jsxs("button",{onClick:()=>d(h=>({...h,showCount:!h.showCount})),children:[a.showCount?"Hide":"Show"," Count"]}),r.jsxs("button",{onClick:()=>d(h=>({...h,hasError:!h.hasError})),children:[a.hasError?"Clear":"Show"," Error"]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Conditional Elements:"}),r.jsxs("div",{className:"result",children:[a.showMessage&&r.jsx("div",{style:{color:"#10b981",marginBottom:"8px"},children:"✅ This message only shows when condition is true"}),a.showCount&&r.jsxs("div",{style:{color:"#3b82f6",marginBottom:"8px"},children:["📊 Count: ",a.count]}),a.hasError&&r.jsx("div",{style:{color:"#ef4444",marginBottom:"8px"},children:"❌ Error: Something went wrong!"}),!a.showMessage&&!a.showCount&&!a.hasError&&r.jsx("div",{style:{color:"#94a3b8"},children:"No conditions are true - nothing to show"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Multiple Conditions:"}),r.jsx("div",{className:"result",children:a.showMessage&&a.showCount&&r.jsx("div",{style:{color:"#8b5cf6"},children:"🎉 Both conditions are true!"})})]})]})})]})]})]})]})}function em(){return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"React Core Concepts"}),r.jsx("p",{children:"Understanding React fundamentals through design thinking"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"What is React?"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," React is like Figma's component system on steroids - it's a library for building reusable UI components."]}),r.jsx("p",{children:"React is a JavaScript library for building user interfaces. It's like having a super-powered component system where you can create interactive, dynamic interfaces that respond to user actions and data changes."})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"JSX - JavaScript XML"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," JSX is like writing design specs in Figma - it combines structure (HTML) with logic (JavaScript)."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// JSX combines HTML with JavaScript
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
// 4. Must return single parent element`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// JSX combines HTML-like syntax with JavaScript
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
});`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// 1. Function Components (Modern, recommended)
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
));`,explanation:"Function components are the modern way to write React components. They're simpler and work better with hooks."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Component Types:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Function:"})," ",r.jsx("span",{className:"code-output",children:"Modern, hooks-friendly"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Arrow Function:"})," ",r.jsx("span",{className:"code-output",children:"Concise syntax"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Class:"})," ",r.jsx("span",{className:"code-output",children:"Legacy, avoid"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Pure:"})," ",r.jsx("span",{className:"code-output",children:"Performance optimized"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Fragments & Multiple Elements"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Fragments are like grouping elements in Figma without adding an extra container - you can return multiple items without a wrapper."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Without Fragment (adds extra div)
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
}`,explanation:"Fragments allow you to return multiple elements without adding an extra DOM node, keeping your HTML clean."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Fragment Types:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Empty Tags:"})," ",r.jsx("span",{className:"code-output",children:"<> </>"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"React.Fragment:"})," ",r.jsx("span",{className:"code-output",children:"Explicit syntax"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Arrays:"})," ",r.jsx("span",{className:"code-output",children:"With keys"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Conditional Rendering"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Conditional rendering is like using visibility settings in Figma - show different content based on conditions."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// 1. If/else with ternary operator
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
}`,explanation:"Conditional rendering allows you to show different UI based on conditions, just like how you control visibility in Figma."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Conditional Patterns:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Ternary:"})," ",r.jsx("span",{className:"code-output",children:"condition ? A : B"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Logical AND:"})," ",r.jsx("span",{className:"code-output",children:"condition && element"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Early Return:"})," ",r.jsx("span",{className:"code-output",children:"if (condition) return"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Switch:"})," ",r.jsx("span",{className:"code-output",children:"Multiple conditions"})]})]})]})]})]})]})}function tm(){const[e,t]=F.useState("Click me"),[n,l]=F.useState("primary"),[s,i]=F.useState("medium"),[o,u]=F.useState(!1),[a,d]=F.useState({name:"John Doe",email:"john@example.com",id:1}),[h,v]=F.useState("My Container"),[f,k]=F.useState("This is some content"),[x,N]=F.useState(null),[_,m]=F.useState(!1),[c,p]=F.useState({name:"",email:""});return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"React Components"}),r.jsx("p",{children:"Building reusable UI pieces like Figma components"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Props Deep Dive"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Props are like component properties in Figma - they allow you to customize instances with different values."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Component with props
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
};`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// 1. Basic props
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
}`,explanation:"Props are the primary way to pass data and functions to components, making them reusable and customizable."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Props Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Button Props:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:e,onChange:g=>t(g.target.value),placeholder:"Button text"}),r.jsxs("select",{value:n,onChange:g=>l(g.target.value),children:[r.jsx("option",{value:"primary",children:"Primary"}),r.jsx("option",{value:"secondary",children:"Secondary"}),r.jsx("option",{value:"danger",children:"Danger"})]}),r.jsxs("select",{value:s,onChange:g=>i(g.target.value),children:[r.jsx("option",{value:"small",children:"Small"}),r.jsx("option",{value:"medium",children:"Medium"}),r.jsx("option",{value:"large",children:"Large"})]}),r.jsx("button",{onClick:()=>u(!o),children:o?"Enable":"Disable"})]}),r.jsx("div",{className:"result",children:r.jsx("button",{className:`btn btn-${n} btn-${s} ${o?"disabled":""}`,disabled:o,onClick:()=>alert("Button clicked!"),style:{backgroundColor:n==="primary"?"#3b82f6":n==="secondary"?"#6b7280":"#ef4444",padding:s==="small"?"4px 8px":s==="medium"?"8px 16px":"12px 24px",opacity:o?.6:1,cursor:o?"not-allowed":"pointer"},children:e})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Card Props:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:a.name,onChange:g=>d(S=>({...S,name:g.target.value})),placeholder:"User name"}),r.jsx("input",{value:a.email,onChange:g=>d(S=>({...S,email:g.target.value})),placeholder:"User email"})]}),r.jsx("div",{className:"result",children:r.jsxs("div",{className:"user-card",style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[r.jsx("h3",{style:{margin:"0 0 8px 0"},children:a.name}),r.jsx("p",{style:{margin:"0 0 12px 0",color:"#6b7280"},children:a.email}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>alert("Edit user: "+a.id),style:{marginRight:"8px"},children:"Edit"}),r.jsx("button",{onClick:()=>alert("Delete user: "+a.id),style:{backgroundColor:"#ef4444"},children:"Delete"})]})]})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Container with Children:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:h,onChange:g=>v(g.target.value),placeholder:"Container title"}),r.jsx("input",{value:f,onChange:g=>k(g.target.value),placeholder:"Container content"})]}),r.jsx("div",{className:"result",children:r.jsxs("div",{className:"container",style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[h&&r.jsx("h2",{style:{margin:"0 0 12px 0"},children:h}),r.jsx("div",{children:f})]})})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Component Composition Patterns"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Component composition is like building complex designs in Figma by combining and nesting simple components."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Children composition
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
);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// 1. Children composition
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
};`,explanation:"Component composition patterns help you build flexible, reusable component systems."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Composition Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Layout Composition:"}),r.jsx("div",{className:"result",children:r.jsxs("div",{className:"layout",style:{border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[r.jsx("header",{style:{backgroundColor:"#f3f4f6",padding:"12px",borderBottom:"1px solid #e5e7eb"},children:r.jsx("h3",{style:{margin:0},children:"Header Content"})}),r.jsxs("div",{style:{display:"flex"},children:[r.jsxs("aside",{style:{backgroundColor:"#f9fafb",padding:"12px",width:"200px",borderRight:"1px solid #e5e7eb"},children:[r.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Sidebar"}),r.jsxs("ul",{style:{margin:0,paddingLeft:"16px"},children:[r.jsx("li",{children:"Menu Item 1"}),r.jsx("li",{children:"Menu Item 2"}),r.jsx("li",{children:"Menu Item 3"})]})]}),r.jsxs("main",{style:{padding:"16px",flex:1},children:[r.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Main Content"}),r.jsx("p",{children:"This is the main content area with flexible layout composition."})]})]}),r.jsx("footer",{style:{backgroundColor:"#f3f4f6",padding:"12px",borderTop:"1px solid #e5e7eb",textAlign:"center"},children:"Footer Content"})]})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Data Fetcher (Render Props):"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>{m(!0),setTimeout(()=>{N({message:"Data loaded successfully!",timestamp:new Date().toLocaleTimeString()}),m(!1)},1500)},children:"Simulate Data Fetch"}),r.jsx("button",{onClick:()=>{N(null),m(!1)},children:"Clear Data"})]}),r.jsx("div",{className:"result",children:_?r.jsx("div",{style:{color:"#f59e0b"},children:"🔄 Loading data..."}):x?r.jsxs("div",{style:{color:"#10b981"},children:["✅ ",x.message,r.jsx("br",{}),r.jsxs("small",{children:["Time: ",x.timestamp]})]}):r.jsx("div",{style:{color:"#6b7280"},children:"No data loaded"})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Compound Form Components:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:c.name,onChange:g=>p(S=>({...S,name:g.target.value})),placeholder:"Name"}),r.jsx("input",{value:c.email,onChange:g=>p(S=>({...S,email:g.target.value})),placeholder:"Email"})]}),r.jsx("div",{className:"result",children:r.jsxs("form",{onSubmit:g=>{g.preventDefault(),alert("Form submitted: "+JSON.stringify(c))},style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[r.jsxs("div",{style:{marginBottom:"12px"},children:[r.jsx("label",{style:{display:"block",marginBottom:"4px"},children:"Name:"}),r.jsx("input",{value:c.name,onChange:g=>p(S=>({...S,name:g.target.value})),style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #d1d5db"}})]}),r.jsxs("div",{style:{marginBottom:"12px"},children:[r.jsx("label",{style:{display:"block",marginBottom:"4px"},children:"Email:"}),r.jsx("input",{value:c.email,onChange:g=>p(S=>({...S,email:g.target.value})),style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #d1d5db"}})]}),r.jsx("button",{type:"submit",style:{backgroundColor:"#3b82f6",color:"white",padding:"8px 16px",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Submit Form"})]})})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Component Best Practices"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Component best practices are like design system guidelines in Figma - they ensure consistency and maintainability."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// 1. Single responsibility
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
}`,explanation:"Following best practices ensures your components are maintainable, reusable, and performant."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Best Practices:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Single Responsibility:"})," ",r.jsx("span",{className:"code-output",children:"One job per component"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Clean Props:"})," ",r.jsx("span",{className:"code-output",children:"Logical interfaces"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Consistent Naming:"})," ",r.jsx("span",{className:"code-output",children:"Clear conventions"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Error Handling:"})," ",r.jsx("span",{className:"code-output",children:"Error boundaries"})]})]})]})]})]})]})}function nm(){const[e,t]=F.useState(0),[n,l]=F.useState({name:"",email:""}),[s,i]=F.useState(""),[o,u]=F.useState([]),[a,d]=F.useState("React Cheatsheet"),[h,v]=F.useState(0),[f,k]=F.useState({width:window.innerWidth,height:window.innerHeight});return F.useEffect(()=>{document.title=a},[a]),F.useEffect(()=>{const x=()=>{k({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"React Hooks"}),r.jsx("p",{children:"Managing state and side effects in components"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"useState Hook Deep Dive"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," useState is like having interactive properties in Figma - values that can change and update the UI."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`const [state, setState] = useState(initialValue);

// Examples:
const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [user, setUser] = useState({ name: '', email: '' });
const [todos, setTodos] = useState([]);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// 1. Basic useState
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
}`,explanation:"useState is the most fundamental hook for managing component state. It returns the current state and a function to update it."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive useState Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsxs("label",{children:["Counter: ",e]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>t(e-1),children:r.jsx(Bs,{size:16})}),r.jsx("button",{onClick:()=>t(e+1),children:r.jsx(bs,{size:16})}),r.jsx("button",{onClick:()=>t(0),children:r.jsx(oc,{size:16})})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Form:"}),r.jsx("input",{value:n.name,onChange:x=>l(N=>({...N,name:x.target.value})),placeholder:"Name"}),r.jsx("input",{value:n.email,onChange:x=>l(N=>({...N,email:x.target.value})),placeholder:"Email"}),r.jsxs("div",{className:"result",children:["Name: ",n.name||"Not set"," | Email: ",n.email||"Not set"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Todo List:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:s,onChange:x=>i(x.target.value),placeholder:"Add todo"}),r.jsx("button",{onClick:()=>{s.trim()&&(u(x=>[...x,{id:Date.now(),text:s,completed:!1}]),i(""))},children:"Add"})]}),r.jsx("ul",{className:"todo-list",children:o.map(x=>r.jsx("li",{onClick:()=>u(N=>N.map(_=>_.id===x.id?{..._,completed:!_.completed}:_)),style:{textDecoration:x.completed?"line-through":"none",cursor:"pointer"},children:x.text},x.id))})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"useEffect Hook Deep Dive"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," useEffect is like auto-layout or smart animate in Figma - it runs code when something changes."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`useEffect(() => {
  // Effect code
}, [dependencies]);

// Examples:
useEffect(() => {}, []);           // Run once
useEffect(() => {}, [dep]);        // Run when dep changes
useEffect(() => {
  return () => cleanup();          // Cleanup function
}, []);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// 1. Basic useEffect (runs after every render)
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
}`,explanation:"useEffect handles side effects in functional components, such as data fetching, subscriptions, or DOM manipulation."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive useEffect Demo:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Document Title Effect:"}),r.jsx("input",{value:a,onChange:x=>d(x.target.value),placeholder:"Enter page title"}),r.jsxs("div",{className:"result",children:["Current title: ",document.title]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Counter with Effect:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>v(h-1),children:r.jsx(Bs,{size:16})}),r.jsx("span",{style:{padding:"8px 16px",background:"rgba(255,255,255,0.1)",borderRadius:"4px"},children:h}),r.jsx("button",{onClick:()=>v(h+1),children:r.jsx(bs,{size:16})})]}),r.jsxs("div",{className:"result",children:["Effect runs when count changes: ",h%2===0?"Even":"Odd"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Window Size Effect:"}),r.jsxs("div",{className:"result",children:["Window size: ",f.width," x ",f.height]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Additional Hooks"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Additional hooks are like specialized tools in Figma - each serves a specific purpose."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// 1. useRef - Access DOM elements
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
}`,explanation:"Additional hooks provide specialized functionality for different use cases in React applications."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Additional Hooks:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"useRef:"})," ",r.jsx("span",{className:"code-output",children:"DOM access"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"useMemo:"})," ",r.jsx("span",{className:"code-output",children:"Memoize values"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"useCallback:"})," ",r.jsx("span",{className:"code-output",children:"Memoize functions"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"useReducer:"})," ",r.jsx("span",{className:"code-output",children:"Complex state"})]})]})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Custom Hooks"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Custom hooks are like creating your own plugins in Figma - reusable logic that can be shared between components."]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// 1. Basic custom hook
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
}`,explanation:"Custom hooks let you extract and reuse stateful logic between components, making your code more modular and reusable."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Custom Hook Benefits:"}),r.jsxs("div",{className:"output-content",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Reusability:"})," ",r.jsx("span",{className:"code-output",children:"Share logic"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Cleaner Components:"})," ",r.jsx("span",{className:"code-output",children:"Less complexity"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Testing:"})," ",r.jsx("span",{className:"code-output",children:"Easier to test"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Composition:"})," ",r.jsx("span",{className:"code-output",children:"Combine hooks"})]})]})]})]})]})]})}function rm(){const[e,t]=F.useState([{id:1,title:"Design homepage",completed:!1,category:"design"},{id:2,title:"Create wireframes",completed:!0,category:"design"},{id:3,title:"Build prototype",completed:!1,category:"development"},{id:4,title:"Write tests",completed:!1,category:"testing"},{id:5,title:"Deploy app",completed:!1,category:"deployment"}]),[n,l]=F.useState("all"),[s,i]=F.useState(""),[o,u]=F.useState({name:"Sarah",isAdmin:!1,loading:!1,error:null}),[a,d]=F.useState({name:"",email:""}),[h,v]=F.useState(!1),[f,k]=F.useState(!1),[x,N]=F.useState(!1),[_,m]=F.useState(0);return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Data Handling"}),r.jsx("p",{children:"Working with dynamic data and lists"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Mapping Arrays"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," map() is like duplicating components in Figma - you create multiple instances from a list."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`array.map(item => (
  <Component key={item.id}>
    {item.property}
  </Component>
));

// Examples:
items.map(item => <li key={item.id}>{item.name}</li>);
users.map(user => <UserCard key={user.id} user={user} />);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Mapping over arrays (like duplicating components in Figma)
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
}`,explanation:"map() transforms each item in an array into a React element, creating a list of components from your data."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Array Mapping:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Task List (Mapped from Array):"}),r.jsx("ul",{className:"todo-list",children:e.map(c=>r.jsxs("li",{onClick:()=>t(p=>p.map(g=>g.id===c.id?{...g,completed:!g.completed}:g)),style:{textDecoration:c.completed?"line-through":"none",cursor:"pointer",opacity:c.completed?.6:1},children:[c.title," ",c.completed&&"✓"]},c.id))})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Add New Task:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{value:s,onChange:c=>i(c.target.value),placeholder:"Enter task title"}),r.jsx("button",{onClick:()=>{s.trim()&&(t(c=>[...c,{id:Date.now(),title:s,completed:!1,category:"general"}]),i(""))},children:"Add Task"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Filtering Data"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," filter() is like using the layers panel to show/hide elements based on criteria."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`array.filter(item => condition);

// Examples:
items.filter(item => item.completed);
users.filter(user => user.isActive);
tasks.filter(task => task.category === 'design');

// Combined with map:
array.filter(item => condition).map(item => <Component />);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Filtering data (like showing/hiding layers in Figma)
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
}`,explanation:"filter() creates a new array with only the elements that pass a test, perfect for creating filtered views of your data."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Data Filtering:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Filter by Category:"}),r.jsxs("select",{value:n,onChange:c=>l(c.target.value),children:[r.jsx("option",{value:"all",children:"All Tasks"}),r.jsx("option",{value:"design",children:"Design"}),r.jsx("option",{value:"development",children:"Development"}),r.jsx("option",{value:"testing",children:"Testing"}),r.jsx("option",{value:"deployment",children:"Deployment"}),r.jsx("option",{value:"general",children:"General"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Filtered Tasks:"}),r.jsx("ul",{className:"todo-list",children:e.filter(c=>n==="all"||c.category===n).map(c=>r.jsxs("li",{style:{opacity:c.completed?.6:1},children:[c.title," (",c.category,") ",c.completed&&"✓"]},c.id))}),r.jsxs("div",{className:"result",children:["Showing ",e.filter(c=>n==="all"||c.category===n).length," of ",e.length," tasks"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Filter by Status:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>l("completed"),children:"Show Completed"}),r.jsx("button",{onClick:()=>l("pending"),children:"Show Pending"}),r.jsx("button",{onClick:()=>l("all"),children:"Show All"})]}),r.jsxs("div",{className:"result",children:[n==="completed"&&e.filter(c=>c.completed).length+" completed tasks",n==="pending"&&e.filter(c=>!c.completed).length+" pending tasks",n==="all"&&e.length+" total tasks"]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Conditional Rendering"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Conditional rendering is like using visibility settings in Figma - showing/hiding elements based on conditions."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}

// Examples:
{isLoading && <Spinner />}
{user ? <UserProfile /> : <LoginForm />}
{items.length > 0 ? <ItemList /> : <EmptyState />}`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Conditional rendering (like visibility settings in Figma)
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
}`,explanation:"Conditional rendering allows you to show different UI based on conditions, just like how you control visibility in Figma."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Conditional Rendering:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Role Toggle:"}),r.jsx("div",{className:"button-group",children:r.jsx("button",{onClick:()=>u(c=>({...c,isAdmin:!c.isAdmin})),style:{backgroundColor:o.isAdmin?"#10b981":"#6b7280"},children:o.isAdmin?"Admin Mode":"User Mode"})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Dashboard Preview:"}),r.jsx("div",{className:"jsx-preview",children:r.jsxs("div",{className:"card",children:[r.jsxs("h2",{children:["Welcome, ",o.name,"!"]}),o.isAdmin?r.jsxs("div",{style:{background:"#fef3c7",padding:"12px",borderRadius:"4px",border:"1px solid #f59e0b"},children:[r.jsx("strong",{children:"Admin Panel:"})," You have full access to all features"]}):r.jsxs("div",{style:{background:"#dbeafe",padding:"12px",borderRadius:"4px",border:"1px solid #3b82f6"},children:[r.jsx("strong",{children:"User Panel:"})," Limited access to basic features"]}),o.loading&&r.jsx("div",{style:{background:"#f3f4f6",padding:"12px",borderRadius:"4px",textAlign:"center"},children:"⏳ Loading..."}),o.error&&r.jsxs("div",{style:{background:"#fee2e2",padding:"12px",borderRadius:"4px",border:"1px solid #ef4444",color:"#dc2626"},children:["Error: ",o.error]})]})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Simulate States:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>u(c=>({...c,loading:!c.loading})),children:o.loading?"Stop Loading":"Start Loading"}),r.jsx("button",{onClick:()=>u(c=>({...c,error:c.error?null:"Something went wrong!"})),children:o.error?"Clear Error":"Show Error"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Key-Value Pairs & Object Manipulation"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Key-value pairs are like component properties in Figma - each property has a name (key) and a value that can be changed."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`const object = {
  key: value,
  property: data
};

object.key;              // Access
object["key"];           // Bracket notation
object.newKey = value;   // Add property
const { key } = object;  // Destructuring`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Key-value pairs in objects (like Figma component properties)
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
const userWithNewProps = { ...user, department: "Design" };`,explanation:"Objects are collections of key-value pairs, where each key is a string and each value can be any data type. This is fundamental for managing state and data in React."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Object Manipulation:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"User Object:"}),r.jsx("div",{className:"result",children:r.jsx("pre",{style:{fontSize:"12px",textAlign:"left"},children:JSON.stringify(o,null,2)})})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Update User Properties:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{placeholder:"New name",onKeyPress:c=>{c.key==="Enter"&&c.target.value.trim()&&(u(p=>({...p,name:c.target.value})),c.target.value="")}}),r.jsx("button",{onClick:()=>u(c=>({...c,isAdmin:!c.isAdmin})),children:"Toggle Admin"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Add New Properties:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{placeholder:"Property name",id:"propName"}),r.jsx("input",{placeholder:"Property value",id:"propValue"}),r.jsx("button",{onClick:()=>{const c=document.getElementById("propName").value,p=document.getElementById("propValue").value;c&&p&&(u(g=>({...g,[c]:p})),document.getElementById("propName").value="",document.getElementById("propValue").value="")},children:"Add Property"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Button State Control"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Button states are like component variants in Figma - different visual states (normal, hover, disabled) for the same component."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`<button 
  disabled={isDisabled}
  onClick={handleClick}
  style={{ opacity: isDisabled ? 0.6 : 1 }}
>
  {isLoading ? 'Loading...' : 'Click me'}
</button>

// State variables:
const [isDisabled, setIsDisabled] = useState(false);
const [isLoading, setIsLoading] = useState(false);`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Button state control (like Figma component variants)
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
}`,explanation:"Button state control involves managing different states (enabled, disabled, loading) and providing visual feedback to users based on the current state."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Button States:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Form Validation Demo:"}),r.jsxs("div",{className:"input-group",children:[r.jsx("input",{placeholder:"Name",value:a.name,onChange:c=>d(p=>({...p,name:c.target.value}))}),r.jsx("input",{placeholder:"Email",value:a.email,onChange:c=>d(p=>({...p,email:c.target.value}))})]}),r.jsx("div",{className:"button-group",children:r.jsx("button",{onClick:()=>{v(!0),setTimeout(()=>v(!1),2e3)},disabled:!a.name||!a.email||h,style:{backgroundColor:!a.name||!a.email?"#6b7280":"#3b82f6",opacity:!a.name||!a.email||h?.6:1,cursor:!a.name||!a.email||h?"not-allowed":"pointer"},children:h?"Submitting...":"Submit Form"})}),r.jsxs("div",{className:"result",children:["Form valid: ",a.name&&a.email?"✅":"❌"]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Button State Toggle:"}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{onClick:()=>k(!f),style:{backgroundColor:f?"#ef4444":"#10b981"},children:f?"Enable Button":"Disable Button"}),r.jsx("button",{onClick:()=>N(!x),style:{backgroundColor:x?"#f59e0b":"#8b5cf6"},children:x?"Stop Loading":"Start Loading"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Controlled Button:"}),r.jsx("div",{className:"button-group",children:r.jsx("button",{onClick:()=>m(c=>c+1),disabled:f||x,style:{backgroundColor:f?"#6b7280":"#3b82f6",opacity:f||x?.6:1,cursor:f||x?"not-allowed":"pointer"},children:x?"Loading...":"Click me! ("+_+")"})}),r.jsxs("div",{className:"result",children:["Button state: ",f?"Disabled":x?"Loading":"Enabled"]})]})]})})]})]})]})]})}function lm(){const[e,t]=F.useState(0),[n,l]=F.useState({x:0,y:0}),[s,i]=F.useState({name:"",email:"",message:""}),[o,u]=F.useState("No events yet");return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Events & Interactions"}),r.jsx("p",{children:"Making your UI interactive like Figma prototypes"}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Event Handlers"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Event handlers are like interactions in Figma - they respond to user actions."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Event handler function
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
// onClick, onChange, onSubmit, onKeyDown, onMouseEnter, onMouseLeave`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Event handlers (like Figma interactions)
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

// Common events: onClick, onChange, onSubmit, onKeyDown, etc.`,explanation:"Event handlers are functions that run when users interact with your UI, just like interactions in Figma prototypes."})}),r.jsxs("div",{className:"output-panel",children:[r.jsx("h4",{children:"Interactive Event Examples:"}),r.jsx("div",{className:"output-content",children:r.jsxs("div",{className:"demo-controls",children:[r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Click Events:"}),r.jsxs("div",{className:"button-group",children:[r.jsxs("button",{onClick:()=>{t(a=>a+1),u("Button clicked!")},children:["Click Counter: ",e]}),r.jsx("button",{onMouseEnter:()=>u("Mouse entered button"),onMouseLeave:()=>u("Mouse left button"),children:"Hover Me"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Mouse Position Tracker:"}),r.jsxs("div",{style:{width:"200px",height:"100px",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onMouseMove:a=>{const d=a.target.getBoundingClientRect();l({x:Math.round(a.clientX-d.left),y:Math.round(a.clientY-d.top)})},children:["Move mouse here",r.jsxs("div",{style:{position:"absolute",top:"4px",left:"4px",fontSize:"12px",color:"#94a3b8"},children:["X: ",n.x,", Y: ",n.y]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Last Event:"}),r.jsx("div",{className:"result",children:o})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Form Handling"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Form handling is like creating input fields in Figma - you collect and process user input."]}),r.jsxs("div",{className:"syntax-example",children:[r.jsx("h4",{children:"Basic Syntax:"}),r.jsx("pre",{className:"syntax-code",children:`// Form state
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
</form>`})]}),r.jsxs("div",{className:"interactive-example",children:[r.jsx("div",{className:"code-panel",children:r.jsx(T,{code:`// Form handling (like input fields in Figma)
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
Message: ${s.message}`),i({name:"",email:"",message:""})},children:[r.jsx("input",{type:"text",name:"name",value:s.name,onChange:a=>i(d=>({...d,name:a.target.value})),placeholder:"Your name",style:{marginBottom:"8px"}}),r.jsx("input",{type:"email",name:"email",value:s.email,onChange:a=>i(d=>({...d,email:a.target.value})),placeholder:"Your email",style:{marginBottom:"8px"}}),r.jsx("textarea",{name:"message",value:s.message,onChange:a=>i(d=>({...d,message:a.target.value})),placeholder:"Your message",style:{marginBottom:"8px",minHeight:"60px"}}),r.jsx("button",{type:"submit",style:{width:"100%"},children:"Send Message"})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Form Data Preview:"}),r.jsxs("div",{className:"result",children:[r.jsxs("div",{children:["Name: ",s.name||"Not entered"]}),r.jsxs("div",{children:["Email: ",s.email||"Not entered"]}),r.jsxs("div",{children:["Message: ",s.message||"Not entered"]})]})]}),r.jsxs("div",{className:"demo-item",children:[r.jsx("label",{children:"Form Validation:"}),r.jsxs("div",{className:"result",children:[!s.name&&r.jsx("div",{style:{color:"#ef4444"},children:"❌ Name is required"}),!s.email&&r.jsx("div",{style:{color:"#ef4444"},children:"❌ Email is required"}),!s.message&&r.jsx("div",{style:{color:"#ef4444"},children:"❌ Message is required"}),s.name&&s.email&&s.message&&r.jsx("div",{style:{color:"#10b981"},children:"✅ Form is complete"})]})]})]})})]})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"State Updates"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," State updates are like changing properties in Figma - they trigger visual updates."]}),r.jsx(T,{code:`// State updates (like changing properties in Figma)
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
}`,explanation:"State updates trigger re-renders, just like how changing properties in Figma updates the visual appearance."})]})]})}function sm(){return r.jsxs("div",{className:"section",children:[r.jsx("h1",{children:"Figma to React Mapping"}),r.jsx("p",{children:"How design concepts translate to code"}),r.jsxs("div",{className:"mapping-grid",children:[r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Frame → React Component"}),r.jsx("p",{children:"A frame in Figma becomes a component in React"}),r.jsx(T,{code:`// Figma Frame → React Component
function Card() {
  return (
    <div className="card">
      <h3>Card Title</h3>
      <p>Card content</p>
    </div>
  );
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Component → Reusable React Component"}),r.jsx("p",{children:"Figma components become reusable React components with props"}),r.jsx(T,{code:`// Figma Component → React Component with Props
function Button({ text, variant }) {
  return (
    <button className={\`btn btn-\${variant}\`}>
      {text}
    </button>
  );
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Auto Layout → CSS Flexbox/Grid"}),r.jsx("p",{children:"Auto layout properties translate to CSS layout"}),r.jsx(T,{code:`// Figma Auto Layout → CSS
.card-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Constraints → CSS Positioning"}),r.jsx("p",{children:"Constraints become responsive CSS rules"}),r.jsx(T,{code:`// Figma Constraints → CSS
.responsive-element {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Interactions → React Event Handlers"}),r.jsx("p",{children:"Figma interactions become JavaScript event handlers"}),r.jsx(T,{code:`// Figma Interaction → React Event Handler
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
}`})]}),r.jsxs("div",{className:"mapping-card",children:[r.jsx("h3",{children:"Figma Variants → React Conditional Rendering"}),r.jsx("p",{children:"Component variants become conditional rendering"}),r.jsx(T,{code:`// Figma Variants → React Conditional Rendering
function Button({ variant, disabled }) {
  return (
    <button 
      className={\`btn btn-\${variant} \${disabled ? 'disabled' : ''}\`}
      disabled={disabled}
    >
      Button Text
    </button>
  );
}`})]})]}),r.jsxs("div",{className:"concept-card",children:[r.jsx("h2",{children:"Design System Translation"}),r.jsxs("div",{className:"figma-analogy",children:[r.jsx("strong",{children:"Figma Analogy:"})," Your Figma design system can be directly translated to React components and CSS variables."]}),r.jsx(T,{code:`// Figma Design System → React/CSS
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
}`,explanation:"Your Figma design system can be directly translated to CSS variables and React components, ensuring consistency between design and code."})]})]})}function T({code:e,explanation:t}){return r.jsxs("div",{className:"code-example",children:[r.jsx("pre",{children:r.jsx("code",{children:e})}),r.jsxs("div",{className:"explanation",children:[r.jsx("strong",{children:"💡 Explanation:"})," ",t]})]})}Ql.createRoot(document.getElementById("root")).render(r.jsx(Dc.StrictMode,{children:r.jsx(Yp,{})}));
