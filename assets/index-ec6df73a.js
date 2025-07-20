(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function pu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xa={exports:{}},ni={},Qa={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=Symbol.for("react.element"),mu=Symbol.for("react.portal"),hu=Symbol.for("react.fragment"),fu=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),vu=Symbol.for("react.provider"),xu=Symbol.for("react.context"),yu=Symbol.for("react.forward_ref"),ju=Symbol.for("react.suspense"),Su=Symbol.for("react.memo"),ku=Symbol.for("react.lazy"),Bo=Symbol.iterator;function Nu(e){return e===null||typeof e!="object"?null:(e=Bo&&e[Bo]||e["@@iterator"],typeof e=="function"?e:null)}var Ya={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ga=Object.assign,Ka={};function an(e,t,r){this.props=e,this.context=t,this.refs=Ka,this.updater=r||Ya}an.prototype.isReactComponent={};an.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};an.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Za(){}Za.prototype=an.prototype;function Hs(e,t,r){this.props=e,this.context=t,this.refs=Ka,this.updater=r||Ya}var Vs=Hs.prototype=new Za;Vs.constructor=Hs;Ga(Vs,an.prototype);Vs.isPureReactComponent=!0;var _o=Array.isArray,qa=Object.prototype.hasOwnProperty,$s={current:null},el={key:!0,ref:!0,__self:!0,__source:!0};function tl(e,t,r){var i,s={},o=null,a=null;if(t!=null)for(i in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)qa.call(t,i)&&!el.hasOwnProperty(i)&&(s[i]=t[i]);var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];s.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)s[i]===void 0&&(s[i]=c[i]);return{$$typeof:Gn,type:e,key:o,ref:a,props:s,_owner:$s.current}}function wu(e,t){return{$$typeof:Gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ws(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function Cu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Uo=/\/+/g;function Si(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cu(""+e.key):t.toString(36)}function jr(e,t,r,i,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Gn:case mu:a=!0}}if(a)return a=e,s=s(a),e=i===""?"."+Si(a,0):i,_o(s)?(r="",e!=null&&(r=e.replace(Uo,"$&/")+"/"),jr(s,t,r,"",function(d){return d})):s!=null&&(Ws(s)&&(s=wu(s,r+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Uo,"$&/")+"/")+e)),t.push(s)),1;if(a=0,i=i===""?".":i+":",_o(e))for(var c=0;c<e.length;c++){o=e[c];var l=i+Si(o,c);a+=jr(o,t,r,l,s)}else if(l=Nu(e),typeof l=="function")for(e=l.call(e),c=0;!(o=e.next()).done;)o=o.value,l=i+Si(o,c++),a+=jr(o,t,r,l,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function rr(e,t,r){if(e==null)return e;var i=[],s=0;return jr(e,i,"","",function(o){return t.call(r,o,s++)}),i}function bu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Sr={transition:null},Eu={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Sr,ReactCurrentOwner:$s};function nl(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:rr,forEach:function(e,t,r){rr(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Ws(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=an;R.Fragment=hu;R.Profiler=gu;R.PureComponent=Hs;R.StrictMode=fu;R.Suspense=ju;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eu;R.act=nl;R.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Ga({},e.props),s=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=$s.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)qa.call(t,l)&&!el.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}return{$$typeof:Gn,type:e.type,key:s,ref:o,props:i,_owner:a}};R.createContext=function(e){return e={$$typeof:xu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vu,_context:e},e.Consumer=e};R.createElement=tl;R.createFactory=function(e){var t=tl.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:yu,render:e}};R.isValidElement=Ws;R.lazy=function(e){return{$$typeof:ku,_payload:{_status:-1,_result:e},_init:bu}};R.memo=function(e,t){return{$$typeof:Su,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Sr.transition;Sr.transition={};try{e()}finally{Sr.transition=t}};R.unstable_act=nl;R.useCallback=function(e,t){return ue.current.useCallback(e,t)};R.useContext=function(e){return ue.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};R.useEffect=function(e,t){return ue.current.useEffect(e,t)};R.useId=function(){return ue.current.useId()};R.useImperativeHandle=function(e,t,r){return ue.current.useImperativeHandle(e,t,r)};R.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ue.current.useMemo(e,t)};R.useReducer=function(e,t,r){return ue.current.useReducer(e,t,r)};R.useRef=function(e){return ue.current.useRef(e)};R.useState=function(e){return ue.current.useState(e)};R.useSyncExternalStore=function(e,t,r){return ue.current.useSyncExternalStore(e,t,r)};R.useTransition=function(){return ue.current.useTransition()};R.version="18.3.1";Qa.exports=R;var w=Qa.exports;const Tu=pu(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu=w,Fu=Symbol.for("react.element"),Du=Symbol.for("react.fragment"),Lu=Object.prototype.hasOwnProperty,Ru=Pu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Iu={key:!0,ref:!0,__self:!0,__source:!0};function rl(e,t,r){var i,s={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(i in t)Lu.call(t,i)&&!Iu.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)s[i]===void 0&&(s[i]=t[i]);return{$$typeof:Fu,type:e,key:o,ref:a,props:s,_owner:Ru.current}}ni.Fragment=Du;ni.jsx=rl;ni.jsxs=rl;Xa.exports=ni;var n=Xa.exports,Xi={},il={exports:{}},ke={},sl={exports:{}},ol={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,F){var D=b.length;b.push(F);e:for(;0<D;){var X=D-1>>>1,Z=b[X];if(0<s(Z,F))b[X]=F,b[D]=Z,D=X;else break e}}function r(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var F=b[0],D=b.pop();if(D!==F){b[0]=D;e:for(var X=0,Z=b.length,tr=Z>>>1;X<tr;){var xt=2*(X+1)-1,ji=b[xt],yt=xt+1,nr=b[yt];if(0>s(ji,D))yt<Z&&0>s(nr,ji)?(b[X]=nr,b[yt]=D,X=yt):(b[X]=ji,b[xt]=D,X=xt);else if(yt<Z&&0>s(nr,D))b[X]=nr,b[yt]=D,X=yt;else break e}}return F}function s(b,F){var D=b.sortIndex-F.sortIndex;return D!==0?D:b.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var l=[],d=[],h=1,v=null,f=3,S=!1,x=!1,k=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(b){for(var F=r(d);F!==null;){if(F.callback===null)i(d);else if(F.startTime<=b)i(d),F.sortIndex=F.expirationTime,t(l,F);else break;F=r(d)}}function g(b){if(k=!1,p(b),!x)if(r(l)!==null)x=!0,xi(N);else{var F=r(d);F!==null&&yi(g,F.startTime-b)}}function N(b,F){x=!1,k&&(k=!1,m(y),y=-1),S=!0;var D=f;try{for(p(F),v=r(l);v!==null&&(!(v.expirationTime>F)||b&&!ve());){var X=v.callback;if(typeof X=="function"){v.callback=null,f=v.priorityLevel;var Z=X(v.expirationTime<=F);F=e.unstable_now(),typeof Z=="function"?v.callback=Z:v===r(l)&&i(l),p(F)}else i(l);v=r(l)}if(v!==null)var tr=!0;else{var xt=r(d);xt!==null&&yi(g,xt.startTime-F),tr=!1}return tr}finally{v=null,f=D,S=!1}}var E=!1,T=null,y=-1,A=5,L=-1;function ve(){return!(e.unstable_now()-L<A)}function un(){if(T!==null){var b=e.unstable_now();L=b;var F=!0;try{F=T(!0,b)}finally{F?dn():(E=!1,T=null)}}else E=!1}var dn;if(typeof u=="function")dn=function(){u(un)};else if(typeof MessageChannel<"u"){var zo=new MessageChannel,du=zo.port2;zo.port1.onmessage=un,dn=function(){du.postMessage(null)}}else dn=function(){I(un,0)};function xi(b){T=b,E||(E=!0,dn())}function yi(b,F){y=I(function(){b(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){x||S||(x=!0,xi(N))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(b){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var D=f;f=F;try{return b()}finally{f=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,F){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var D=f;f=b;try{return F()}finally{f=D}},e.unstable_scheduleCallback=function(b,F,D){var X=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?X+D:X):D=X,b){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=D+Z,b={id:h++,callback:F,priorityLevel:b,startTime:D,expirationTime:Z,sortIndex:-1},D>X?(b.sortIndex=D,t(d,b),r(l)===null&&b===r(d)&&(k?(m(y),y=-1):k=!0,yi(g,D-X))):(b.sortIndex=Z,t(l,b),x||S||(x=!0,xi(N))),b},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(b){var F=f;return function(){var D=f;f=F;try{return b.apply(this,arguments)}finally{f=D}}}})(ol);sl.exports=ol;var Mu=sl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au=w,Se=Mu;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var al=new Set,Rn={};function Lt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Rn[e]=t,e=0;e<t.length;e++)al.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qi=Object.prototype.hasOwnProperty,zu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oo={},Ho={};function Bu(e){return Qi.call(Ho,e)?!0:Qi.call(Oo,e)?!1:zu.test(e)?Ho[e]=!0:(Oo[e]=!0,!1)}function _u(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uu(e,t,r,i){if(t===null||typeof t>"u"||_u(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,r,i,s,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Js=/[\-:]([a-z])/g;function Xs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Js,Xs);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Js,Xs);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Js,Xs);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qs(e,t,r,i){var s=re.hasOwnProperty(t)?re[t]:null;(s!==null?s.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uu(t,r,s,i)&&(r=null),i||s===null?Bu(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,i=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var Ke=Au.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ir=Symbol.for("react.element"),Mt=Symbol.for("react.portal"),At=Symbol.for("react.fragment"),Ys=Symbol.for("react.strict_mode"),Yi=Symbol.for("react.profiler"),ll=Symbol.for("react.provider"),cl=Symbol.for("react.context"),Gs=Symbol.for("react.forward_ref"),Gi=Symbol.for("react.suspense"),Ki=Symbol.for("react.suspense_list"),Ks=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ul=Symbol.for("react.offscreen"),Vo=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Vo&&e[Vo]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,ki;function jn(e){if(ki===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ki=t&&t[1]||""}return`
`+ki+e}var Ni=!1;function wi(e,t){if(!e||Ni)return"";Ni=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=i.stack.split(`
`),a=s.length-1,c=o.length-1;1<=a&&0<=c&&s[a]!==o[c];)c--;for(;1<=a&&0<=c;a--,c--)if(s[a]!==o[c]){if(a!==1||c!==1)do if(a--,c--,0>c||s[a]!==o[c]){var l=`
`+s[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=c);break}}}finally{Ni=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?jn(e):""}function Ou(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=wi(e.type,!1),e;case 11:return e=wi(e.type.render,!1),e;case 1:return e=wi(e.type,!0),e;default:return""}}function Zi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case At:return"Fragment";case Mt:return"Portal";case Yi:return"Profiler";case Ys:return"StrictMode";case Gi:return"Suspense";case Ki:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cl:return(e.displayName||"Context")+".Consumer";case ll:return(e._context.displayName||"Context")+".Provider";case Gs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ks:return t=e.displayName||null,t!==null?t:Zi(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Zi(e(t))}catch{}}return null}function Hu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zi(t);case 8:return t===Ys?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vu(e){var t=dl(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){i=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sr(e){e._valueTracker||(e._valueTracker=Vu(e))}function pl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=dl(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qi(e,t){var r=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function $o(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=mt(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ml(e,t){t=t.checked,t!=null&&Qs(e,"checked",t,!1)}function es(e,t){ml(e,t);var r=mt(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ts(e,t.type,r):t.hasOwnProperty("defaultValue")&&ts(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wo(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ts(e,t,r){(t!=="number"||Lr(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Sn=Array.isArray;function Xt(e,t,r,i){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&i&&(e[r].defaultSelected=!0)}else{for(r=""+mt(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jo(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(j(92));if(Sn(r)){if(1<r.length)throw Error(j(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:mt(r)}}function hl(e,t){var r=mt(t.value),i=mt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Xo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,gl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$u=["Webkit","ms","Moz","O"];Object.keys(wn).forEach(function(e){$u.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wn[t]=wn[e]})});function vl(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||wn.hasOwnProperty(e)&&wn[e]?(""+t).trim():t+"px"}function xl(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,s=vl(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,s):e[r]=s}}var Wu=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function is(e,t){if(t){if(Wu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ss(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var os=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var as=null,Qt=null,Yt=null;function Qo(e){if(e=qn(e)){if(typeof as!="function")throw Error(j(280));var t=e.stateNode;t&&(t=ai(t),as(e.stateNode,e.type,t))}}function yl(e){Qt?Yt?Yt.push(e):Yt=[e]:Qt=e}function jl(){if(Qt){var e=Qt,t=Yt;if(Yt=Qt=null,Qo(e),t)for(e=0;e<t.length;e++)Qo(t[e])}}function Sl(e,t){return e(t)}function kl(){}var Ci=!1;function Nl(e,t,r){if(Ci)return e(t,r);Ci=!0;try{return Sl(e,t,r)}finally{Ci=!1,(Qt!==null||Yt!==null)&&(kl(),jl())}}function Mn(e,t){var r=e.stateNode;if(r===null)return null;var i=ai(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(j(231,t,typeof r));return r}var ls=!1;if(Xe)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){ls=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{ls=!1}function Ju(e,t,r,i,s,o,a,c,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(h){this.onError(h)}}var Cn=!1,Rr=null,Ir=!1,cs=null,Xu={onError:function(e){Cn=!0,Rr=e}};function Qu(e,t,r,i,s,o,a,c,l){Cn=!1,Rr=null,Ju.apply(Xu,arguments)}function Yu(e,t,r,i,s,o,a,c,l){if(Qu.apply(this,arguments),Cn){if(Cn){var d=Rr;Cn=!1,Rr=null}else throw Error(j(198));Ir||(Ir=!0,cs=d)}}function Rt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function wl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yo(e){if(Rt(e)!==e)throw Error(j(188))}function Gu(e){var t=e.alternate;if(!t){if(t=Rt(e),t===null)throw Error(j(188));return t!==e?null:e}for(var r=e,i=t;;){var s=r.return;if(s===null)break;var o=s.alternate;if(o===null){if(i=s.return,i!==null){r=i;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===r)return Yo(s),e;if(o===i)return Yo(s),t;o=o.sibling}throw Error(j(188))}if(r.return!==i.return)r=s,i=o;else{for(var a=!1,c=s.child;c;){if(c===r){a=!0,r=s,i=o;break}if(c===i){a=!0,i=s,r=o;break}c=c.sibling}if(!a){for(c=o.child;c;){if(c===r){a=!0,r=o,i=s;break}if(c===i){a=!0,i=o,r=s;break}c=c.sibling}if(!a)throw Error(j(189))}}if(r.alternate!==i)throw Error(j(190))}if(r.tag!==3)throw Error(j(188));return r.stateNode.current===r?e:t}function Cl(e){return e=Gu(e),e!==null?bl(e):null}function bl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bl(e);if(t!==null)return t;e=e.sibling}return null}var El=Se.unstable_scheduleCallback,Go=Se.unstable_cancelCallback,Ku=Se.unstable_shouldYield,Zu=Se.unstable_requestPaint,Q=Se.unstable_now,qu=Se.unstable_getCurrentPriorityLevel,qs=Se.unstable_ImmediatePriority,Tl=Se.unstable_UserBlockingPriority,Mr=Se.unstable_NormalPriority,ed=Se.unstable_LowPriority,Pl=Se.unstable_IdlePriority,ri=null,Ue=null;function td(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(ri,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:id,nd=Math.log,rd=Math.LN2;function id(e){return e>>>=0,e===0?32:31-(nd(e)/rd|0)|0}var ar=64,lr=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,s=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var c=a&~s;c!==0?i=kn(c):(o&=a,o!==0&&(i=kn(o)))}else a=r&~s,a!==0?i=kn(a):o!==0&&(i=kn(o));if(i===0)return 0;if(t!==0&&t!==i&&!(t&s)&&(s=i&-i,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Ie(t),s=1<<r,i|=e[r],t&=~s;return i}function sd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function od(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ie(o),c=1<<a,l=s[a];l===-1?(!(c&r)||c&i)&&(s[a]=sd(c,t)):l<=t&&(e.expiredLanes|=c),o&=~c}}function us(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fl(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function bi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Kn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=r}function ad(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Ie(r),o=1<<s;t[s]=0,i[s]=-1,e[s]=-1,r&=~o}}function eo(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Ie(r),s=1<<i;s&t|e[i]&t&&(e[i]|=t),r&=~s}}var z=0;function Dl(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ll,to,Rl,Il,Ml,ds=!1,cr=[],st=null,ot=null,at=null,An=new Map,zn=new Map,tt=[],ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ko(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zn.delete(t.pointerId)}}function hn(e,t,r,i,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:o,targetContainers:[s]},t!==null&&(t=qn(t),t!==null&&to(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function cd(e,t,r,i,s){switch(t){case"focusin":return st=hn(st,e,t,r,i,s),!0;case"dragenter":return ot=hn(ot,e,t,r,i,s),!0;case"mouseover":return at=hn(at,e,t,r,i,s),!0;case"pointerover":var o=s.pointerId;return An.set(o,hn(An.get(o)||null,e,t,r,i,s)),!0;case"gotpointercapture":return o=s.pointerId,zn.set(o,hn(zn.get(o)||null,e,t,r,i,s)),!0}return!1}function Al(e){var t=kt(e.target);if(t!==null){var r=Rt(t);if(r!==null){if(t=r.tag,t===13){if(t=wl(r),t!==null){e.blockedOn=t,Ml(e.priority,function(){Rl(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ps(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);os=i,r.target.dispatchEvent(i),os=null}else return t=qn(r),t!==null&&to(t),e.blockedOn=r,!1;t.shift()}return!0}function Zo(e,t,r){kr(e)&&r.delete(t)}function ud(){ds=!1,st!==null&&kr(st)&&(st=null),ot!==null&&kr(ot)&&(ot=null),at!==null&&kr(at)&&(at=null),An.forEach(Zo),zn.forEach(Zo)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,ds||(ds=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,ud)))}function Bn(e){function t(s){return fn(s,e)}if(0<cr.length){fn(cr[0],e);for(var r=1;r<cr.length;r++){var i=cr[r];i.blockedOn===e&&(i.blockedOn=null)}}for(st!==null&&fn(st,e),ot!==null&&fn(ot,e),at!==null&&fn(at,e),An.forEach(t),zn.forEach(t),r=0;r<tt.length;r++)i=tt[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<tt.length&&(r=tt[0],r.blockedOn===null);)Al(r),r.blockedOn===null&&tt.shift()}var Gt=Ke.ReactCurrentBatchConfig,zr=!0;function dd(e,t,r,i){var s=z,o=Gt.transition;Gt.transition=null;try{z=1,no(e,t,r,i)}finally{z=s,Gt.transition=o}}function pd(e,t,r,i){var s=z,o=Gt.transition;Gt.transition=null;try{z=4,no(e,t,r,i)}finally{z=s,Gt.transition=o}}function no(e,t,r,i){if(zr){var s=ps(e,t,r,i);if(s===null)Ai(e,t,i,Br,r),Ko(e,i);else if(cd(s,e,t,r,i))i.stopPropagation();else if(Ko(e,i),t&4&&-1<ld.indexOf(e)){for(;s!==null;){var o=qn(s);if(o!==null&&Ll(o),o=ps(e,t,r,i),o===null&&Ai(e,t,i,Br,r),o===s)break;s=o}s!==null&&i.stopPropagation()}else Ai(e,t,i,null,r)}}var Br=null;function ps(e,t,r,i){if(Br=null,e=Zs(i),e=kt(e),e!==null)if(t=Rt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=wl(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Br=e,null}function zl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qu()){case qs:return 1;case Tl:return 4;case Mr:case ed:return 16;case Pl:return 536870912;default:return 16}default:return 16}}var rt=null,ro=null,Nr=null;function Bl(){if(Nr)return Nr;var e,t=ro,r=t.length,i,s="value"in rt?rt.value:rt.textContent,o=s.length;for(e=0;e<r&&t[e]===s[e];e++);var a=r-e;for(i=1;i<=a&&t[r-i]===s[o-i];i++);return Nr=s.slice(e,1<i?1-i:void 0)}function wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function qo(){return!1}function Ne(e){function t(r,i,s,o,a){this._reactName=r,this._targetInst=s,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ur:qo,this.isPropagationStopped=qo,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=Ne(ln),Zn=$({},ln,{view:0,detail:0}),md=Ne(Zn),Ei,Ti,gn,ii=$({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(Ei=e.screenX-gn.screenX,Ti=e.screenY-gn.screenY):Ti=Ei=0,gn=e),Ei)},movementY:function(e){return"movementY"in e?e.movementY:Ti}}),ea=Ne(ii),hd=$({},ii,{dataTransfer:0}),fd=Ne(hd),gd=$({},Zn,{relatedTarget:0}),Pi=Ne(gd),vd=$({},ln,{animationName:0,elapsedTime:0,pseudoElement:0}),xd=Ne(vd),yd=$({},ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jd=Ne(yd),Sd=$({},ln,{data:0}),ta=Ne(Sd),kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wd[e])?!!t[e]:!1}function so(){return Cd}var bd=$({},Zn,{key:function(e){if(e.key){var t=kd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ed=Ne(bd),Td=$({},ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),na=Ne(Td),Pd=$({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),Fd=Ne(Pd),Dd=$({},ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ld=Ne(Dd),Rd=$({},ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=Ne(Rd),Md=[9,13,27,32],oo=Xe&&"CompositionEvent"in window,bn=null;Xe&&"documentMode"in document&&(bn=document.documentMode);var Ad=Xe&&"TextEvent"in window&&!bn,_l=Xe&&(!oo||bn&&8<bn&&11>=bn),ra=String.fromCharCode(32),ia=!1;function Ul(e,t){switch(e){case"keyup":return Md.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ol(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zt=!1;function zd(e,t){switch(e){case"compositionend":return Ol(t);case"keypress":return t.which!==32?null:(ia=!0,ra);case"textInput":return e=t.data,e===ra&&ia?null:e;default:return null}}function Bd(e,t){if(zt)return e==="compositionend"||!oo&&Ul(e,t)?(e=Bl(),Nr=ro=rt=null,zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _l&&t.locale!=="ko"?null:t.data;default:return null}}var _d={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_d[e.type]:t==="textarea"}function Hl(e,t,r,i){yl(i),t=_r(t,"onChange"),0<t.length&&(r=new io("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var En=null,_n=null;function Ud(e){ql(e,0)}function si(e){var t=Ut(e);if(pl(t))return e}function Od(e,t){if(e==="change")return t}var Vl=!1;if(Xe){var Fi;if(Xe){var Di="oninput"in document;if(!Di){var oa=document.createElement("div");oa.setAttribute("oninput","return;"),Di=typeof oa.oninput=="function"}Fi=Di}else Fi=!1;Vl=Fi&&(!document.documentMode||9<document.documentMode)}function aa(){En&&(En.detachEvent("onpropertychange",$l),_n=En=null)}function $l(e){if(e.propertyName==="value"&&si(_n)){var t=[];Hl(t,_n,e,Zs(e)),Nl(Ud,t)}}function Hd(e,t,r){e==="focusin"?(aa(),En=t,_n=r,En.attachEvent("onpropertychange",$l)):e==="focusout"&&aa()}function Vd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return si(_n)}function $d(e,t){if(e==="click")return si(t)}function Wd(e,t){if(e==="input"||e==="change")return si(t)}function Jd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:Jd;function Un(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var s=r[i];if(!Qi.call(t,s)||!Ae(e[s],t[s]))return!1}return!0}function la(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ca(e,t){var r=la(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=la(r)}}function Wl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jl(){for(var e=window,t=Lr();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Lr(e.document)}return t}function ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xd(e){var t=Jl(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Wl(r.ownerDocument.documentElement,r)){if(i!==null&&ao(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,o=Math.min(i.start,s);i=i.end===void 0?o:Math.min(i.end,s),!e.extend&&o>i&&(s=i,i=o,o=s),s=ca(r,o);var a=ca(r,i);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qd=Xe&&"documentMode"in document&&11>=document.documentMode,Bt=null,ms=null,Tn=null,hs=!1;function ua(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;hs||Bt==null||Bt!==Lr(i)||(i=Bt,"selectionStart"in i&&ao(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Tn&&Un(Tn,i)||(Tn=i,i=_r(ms,"onSelect"),0<i.length&&(t=new io("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Bt)))}function dr(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var _t={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Li={},Xl={};Xe&&(Xl=document.createElement("div").style,"AnimationEvent"in window||(delete _t.animationend.animation,delete _t.animationiteration.animation,delete _t.animationstart.animation),"TransitionEvent"in window||delete _t.transitionend.transition);function oi(e){if(Li[e])return Li[e];if(!_t[e])return e;var t=_t[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Xl)return Li[e]=t[r];return e}var Ql=oi("animationend"),Yl=oi("animationiteration"),Gl=oi("animationstart"),Kl=oi("transitionend"),Zl=new Map,da="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){Zl.set(e,t),Lt(t,[e])}for(var Ri=0;Ri<da.length;Ri++){var Ii=da[Ri],Yd=Ii.toLowerCase(),Gd=Ii[0].toUpperCase()+Ii.slice(1);ft(Yd,"on"+Gd)}ft(Ql,"onAnimationEnd");ft(Yl,"onAnimationIteration");ft(Gl,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(Kl,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function pa(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,Yu(i,t,void 0,e),e.currentTarget=null}function ql(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],s=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var a=i.length-1;0<=a;a--){var c=i[a],l=c.instance,d=c.currentTarget;if(c=c.listener,l!==o&&s.isPropagationStopped())break e;pa(s,c,d),o=l}else for(a=0;a<i.length;a++){if(c=i[a],l=c.instance,d=c.currentTarget,c=c.listener,l!==o&&s.isPropagationStopped())break e;pa(s,c,d),o=l}}}if(Ir)throw e=cs,Ir=!1,cs=null,e}function _(e,t){var r=t[ys];r===void 0&&(r=t[ys]=new Set);var i=e+"__bubble";r.has(i)||(ec(t,e,2,!1),r.add(i))}function Mi(e,t,r){var i=0;t&&(i|=4),ec(r,e,i,t)}var pr="_reactListening"+Math.random().toString(36).slice(2);function On(e){if(!e[pr]){e[pr]=!0,al.forEach(function(r){r!=="selectionchange"&&(Kd.has(r)||Mi(r,!1,e),Mi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pr]||(t[pr]=!0,Mi("selectionchange",!1,t))}}function ec(e,t,r,i){switch(zl(t)){case 1:var s=dd;break;case 4:s=pd;break;default:s=no}r=s.bind(null,t,r,e),s=void 0,!ls||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Ai(e,t,r,i,s){var o=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var c=i.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;a=a.return}for(;c!==null;){if(a=kt(c),a===null)return;if(l=a.tag,l===5||l===6){i=o=a;continue e}c=c.parentNode}}i=i.return}Nl(function(){var d=o,h=Zs(r),v=[];e:{var f=Zl.get(e);if(f!==void 0){var S=io,x=e;switch(e){case"keypress":if(wr(r)===0)break e;case"keydown":case"keyup":S=Ed;break;case"focusin":x="focus",S=Pi;break;case"focusout":x="blur",S=Pi;break;case"beforeblur":case"afterblur":S=Pi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Fd;break;case Ql:case Yl:case Gl:S=xd;break;case Kl:S=Ld;break;case"scroll":S=md;break;case"wheel":S=Id;break;case"copy":case"cut":case"paste":S=jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=na}var k=(t&4)!==0,I=!k&&e==="scroll",m=k?f!==null?f+"Capture":null:f;k=[];for(var u=d,p;u!==null;){p=u;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,m!==null&&(g=Mn(u,m),g!=null&&k.push(Hn(u,g,p)))),I)break;u=u.return}0<k.length&&(f=new S(f,x,null,r,h),v.push({event:f,listeners:k}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",f&&r!==os&&(x=r.relatedTarget||r.fromElement)&&(kt(x)||x[Qe]))break e;if((S||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,S?(x=r.relatedTarget||r.toElement,S=d,x=x?kt(x):null,x!==null&&(I=Rt(x),x!==I||x.tag!==5&&x.tag!==6)&&(x=null)):(S=null,x=d),S!==x)){if(k=ea,g="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=na,g="onPointerLeave",m="onPointerEnter",u="pointer"),I=S==null?f:Ut(S),p=x==null?f:Ut(x),f=new k(g,u+"leave",S,r,h),f.target=I,f.relatedTarget=p,g=null,kt(h)===d&&(k=new k(m,u+"enter",x,r,h),k.target=p,k.relatedTarget=I,g=k),I=g,S&&x)t:{for(k=S,m=x,u=0,p=k;p;p=It(p))u++;for(p=0,g=m;g;g=It(g))p++;for(;0<u-p;)k=It(k),u--;for(;0<p-u;)m=It(m),p--;for(;u--;){if(k===m||m!==null&&k===m.alternate)break t;k=It(k),m=It(m)}k=null}else k=null;S!==null&&ma(v,f,S,k,!1),x!==null&&I!==null&&ma(v,I,x,k,!0)}}e:{if(f=d?Ut(d):window,S=f.nodeName&&f.nodeName.toLowerCase(),S==="select"||S==="input"&&f.type==="file")var N=Od;else if(sa(f))if(Vl)N=Wd;else{N=Vd;var E=Hd}else(S=f.nodeName)&&S.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=$d);if(N&&(N=N(e,d))){Hl(v,N,r,h);break e}E&&E(e,f,d),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&ts(f,"number",f.value)}switch(E=d?Ut(d):window,e){case"focusin":(sa(E)||E.contentEditable==="true")&&(Bt=E,ms=d,Tn=null);break;case"focusout":Tn=ms=Bt=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,ua(v,r,h);break;case"selectionchange":if(Qd)break;case"keydown":case"keyup":ua(v,r,h)}var T;if(oo)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else zt?Ul(e,r)&&(y="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(y="onCompositionStart");y&&(_l&&r.locale!=="ko"&&(zt||y!=="onCompositionStart"?y==="onCompositionEnd"&&zt&&(T=Bl()):(rt=h,ro="value"in rt?rt.value:rt.textContent,zt=!0)),E=_r(d,y),0<E.length&&(y=new ta(y,e,null,r,h),v.push({event:y,listeners:E}),T?y.data=T:(T=Ol(r),T!==null&&(y.data=T)))),(T=Ad?zd(e,r):Bd(e,r))&&(d=_r(d,"onBeforeInput"),0<d.length&&(h=new ta("onBeforeInput","beforeinput",null,r,h),v.push({event:h,listeners:d}),h.data=T))}ql(v,t)})}function Hn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function _r(e,t){for(var r=t+"Capture",i=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Mn(e,r),o!=null&&i.unshift(Hn(e,o,s)),o=Mn(e,t),o!=null&&i.push(Hn(e,o,s))),e=e.return}return i}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ma(e,t,r,i,s){for(var o=t._reactName,a=[];r!==null&&r!==i;){var c=r,l=c.alternate,d=c.stateNode;if(l!==null&&l===i)break;c.tag===5&&d!==null&&(c=d,s?(l=Mn(r,o),l!=null&&a.unshift(Hn(r,l,c))):s||(l=Mn(r,o),l!=null&&a.push(Hn(r,l,c)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var Zd=/\r\n?/g,qd=/\u0000|\uFFFD/g;function ha(e){return(typeof e=="string"?e:""+e).replace(Zd,`
`).replace(qd,"")}function mr(e,t,r){if(t=ha(t),ha(e)!==t&&r)throw Error(j(425))}function Ur(){}var fs=null,gs=null;function vs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xs=typeof setTimeout=="function"?setTimeout:void 0,ep=typeof clearTimeout=="function"?clearTimeout:void 0,fa=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof fa<"u"?function(e){return fa.resolve(null).then(e).catch(np)}:xs;function np(e){setTimeout(function(){throw e})}function zi(e,t){var r=t,i=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(i===0){e.removeChild(s),Bn(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=s}while(r);Bn(t)}function lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ga(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),_e="__reactFiber$"+cn,Vn="__reactProps$"+cn,Qe="__reactContainer$"+cn,ys="__reactEvents$"+cn,rp="__reactListeners$"+cn,ip="__reactHandles$"+cn;function kt(e){var t=e[_e];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Qe]||r[_e]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ga(e);e!==null;){if(r=e[_e])return r;e=ga(e)}return t}e=r,r=e.parentNode}return null}function qn(e){return e=e[_e]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function ai(e){return e[Vn]||null}var js=[],Ot=-1;function gt(e){return{current:e}}function U(e){0>Ot||(e.current=js[Ot],js[Ot]=null,Ot--)}function B(e,t){Ot++,js[Ot]=e.current,e.current=t}var ht={},ae=gt(ht),he=gt(!1),Et=ht;function en(e,t){var r=e.type.contextTypes;if(!r)return ht;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in r)s[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function fe(e){return e=e.childContextTypes,e!=null}function Or(){U(he),U(ae)}function va(e,t,r){if(ae.current!==ht)throw Error(j(168));B(ae,t),B(he,r)}function tc(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var s in i)if(!(s in t))throw Error(j(108,Hu(e)||"Unknown",s));return $({},r,i)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ht,Et=ae.current,B(ae,e),B(he,he.current),!0}function xa(e,t,r){var i=e.stateNode;if(!i)throw Error(j(169));r?(e=tc(e,t,Et),i.__reactInternalMemoizedMergedChildContext=e,U(he),U(ae),B(ae,e)):U(he),B(he,r)}var Ve=null,li=!1,Bi=!1;function nc(e){Ve===null?Ve=[e]:Ve.push(e)}function sp(e){li=!0,nc(e)}function vt(){if(!Bi&&Ve!==null){Bi=!0;var e=0,t=z;try{var r=Ve;for(z=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}Ve=null,li=!1}catch(s){throw Ve!==null&&(Ve=Ve.slice(e+1)),El(qs,vt),s}finally{z=t,Bi=!1}}return null}var Ht=[],Vt=0,Vr=null,$r=0,we=[],Ce=0,Tt=null,$e=1,We="";function jt(e,t){Ht[Vt++]=$r,Ht[Vt++]=Vr,Vr=e,$r=t}function rc(e,t,r){we[Ce++]=$e,we[Ce++]=We,we[Ce++]=Tt,Tt=e;var i=$e;e=We;var s=32-Ie(i)-1;i&=~(1<<s),r+=1;var o=32-Ie(t)+s;if(30<o){var a=s-s%5;o=(i&(1<<a)-1).toString(32),i>>=a,s-=a,$e=1<<32-Ie(t)+s|r<<s|i,We=o+e}else $e=1<<o|r<<s|i,We=e}function lo(e){e.return!==null&&(jt(e,1),rc(e,1,0))}function co(e){for(;e===Vr;)Vr=Ht[--Vt],Ht[Vt]=null,$r=Ht[--Vt],Ht[Vt]=null;for(;e===Tt;)Tt=we[--Ce],we[Ce]=null,We=we[--Ce],we[Ce]=null,$e=we[--Ce],we[Ce]=null}var je=null,ye=null,O=!1,Re=null;function ic(e,t){var r=be(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ya(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,ye=lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Tt!==null?{id:$e,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=be(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,je=e,ye=null,!0):!1;default:return!1}}function Ss(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ks(e){if(O){var t=ye;if(t){var r=t;if(!ya(e,t)){if(Ss(e))throw Error(j(418));t=lt(r.nextSibling);var i=je;t&&ya(e,t)?ic(i,r):(e.flags=e.flags&-4097|2,O=!1,je=e)}}else{if(Ss(e))throw Error(j(418));e.flags=e.flags&-4097|2,O=!1,je=e}}}function ja(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function hr(e){if(e!==je)return!1;if(!O)return ja(e),O=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vs(e.type,e.memoizedProps)),t&&(t=ye)){if(Ss(e))throw sc(),Error(j(418));for(;t;)ic(e,t),t=lt(t.nextSibling)}if(ja(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ye=lt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=je?lt(e.stateNode.nextSibling):null;return!0}function sc(){for(var e=ye;e;)e=lt(e.nextSibling)}function tn(){ye=je=null,O=!1}function uo(e){Re===null?Re=[e]:Re.push(e)}var op=Ke.ReactCurrentBatchConfig;function vn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(j(309));var i=r.stateNode}if(!i)throw Error(j(147,e));var s=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var c=s.refs;a===null?delete c[o]:c[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!r._owner)throw Error(j(290,e))}return e}function fr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sa(e){var t=e._init;return t(e._payload)}function oc(e){function t(m,u){if(e){var p=m.deletions;p===null?(m.deletions=[u],m.flags|=16):p.push(u)}}function r(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function i(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function s(m,u){return m=pt(m,u),m.index=0,m.sibling=null,m}function o(m,u,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<u?(m.flags|=2,u):p):(m.flags|=2,u)):(m.flags|=1048576,u)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,u,p,g){return u===null||u.tag!==6?(u=Wi(p,m.mode,g),u.return=m,u):(u=s(u,p),u.return=m,u)}function l(m,u,p,g){var N=p.type;return N===At?h(m,u,p.props.children,g,p.key):u!==null&&(u.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qe&&Sa(N)===u.type)?(g=s(u,p.props),g.ref=vn(m,u,p),g.return=m,g):(g=Dr(p.type,p.key,p.props,null,m.mode,g),g.ref=vn(m,u,p),g.return=m,g)}function d(m,u,p,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Ji(p,m.mode,g),u.return=m,u):(u=s(u,p.children||[]),u.return=m,u)}function h(m,u,p,g,N){return u===null||u.tag!==7?(u=bt(p,m.mode,g,N),u.return=m,u):(u=s(u,p),u.return=m,u)}function v(m,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Wi(""+u,m.mode,p),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ir:return p=Dr(u.type,u.key,u.props,null,m.mode,p),p.ref=vn(m,null,u),p.return=m,p;case Mt:return u=Ji(u,m.mode,p),u.return=m,u;case qe:var g=u._init;return v(m,g(u._payload),p)}if(Sn(u)||pn(u))return u=bt(u,m.mode,p,null),u.return=m,u;fr(m,u)}return null}function f(m,u,p,g){var N=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:c(m,u,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ir:return p.key===N?l(m,u,p,g):null;case Mt:return p.key===N?d(m,u,p,g):null;case qe:return N=p._init,f(m,u,N(p._payload),g)}if(Sn(p)||pn(p))return N!==null?null:h(m,u,p,g,null);fr(m,p)}return null}function S(m,u,p,g,N){if(typeof g=="string"&&g!==""||typeof g=="number")return m=m.get(p)||null,c(u,m,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ir:return m=m.get(g.key===null?p:g.key)||null,l(u,m,g,N);case Mt:return m=m.get(g.key===null?p:g.key)||null,d(u,m,g,N);case qe:var E=g._init;return S(m,u,p,E(g._payload),N)}if(Sn(g)||pn(g))return m=m.get(p)||null,h(u,m,g,N,null);fr(u,g)}return null}function x(m,u,p,g){for(var N=null,E=null,T=u,y=u=0,A=null;T!==null&&y<p.length;y++){T.index>y?(A=T,T=null):A=T.sibling;var L=f(m,T,p[y],g);if(L===null){T===null&&(T=A);break}e&&T&&L.alternate===null&&t(m,T),u=o(L,u,y),E===null?N=L:E.sibling=L,E=L,T=A}if(y===p.length)return r(m,T),O&&jt(m,y),N;if(T===null){for(;y<p.length;y++)T=v(m,p[y],g),T!==null&&(u=o(T,u,y),E===null?N=T:E.sibling=T,E=T);return O&&jt(m,y),N}for(T=i(m,T);y<p.length;y++)A=S(T,m,y,p[y],g),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?y:A.key),u=o(A,u,y),E===null?N=A:E.sibling=A,E=A);return e&&T.forEach(function(ve){return t(m,ve)}),O&&jt(m,y),N}function k(m,u,p,g){var N=pn(p);if(typeof N!="function")throw Error(j(150));if(p=N.call(p),p==null)throw Error(j(151));for(var E=N=null,T=u,y=u=0,A=null,L=p.next();T!==null&&!L.done;y++,L=p.next()){T.index>y?(A=T,T=null):A=T.sibling;var ve=f(m,T,L.value,g);if(ve===null){T===null&&(T=A);break}e&&T&&ve.alternate===null&&t(m,T),u=o(ve,u,y),E===null?N=ve:E.sibling=ve,E=ve,T=A}if(L.done)return r(m,T),O&&jt(m,y),N;if(T===null){for(;!L.done;y++,L=p.next())L=v(m,L.value,g),L!==null&&(u=o(L,u,y),E===null?N=L:E.sibling=L,E=L);return O&&jt(m,y),N}for(T=i(m,T);!L.done;y++,L=p.next())L=S(T,m,y,L.value,g),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?y:L.key),u=o(L,u,y),E===null?N=L:E.sibling=L,E=L);return e&&T.forEach(function(un){return t(m,un)}),O&&jt(m,y),N}function I(m,u,p,g){if(typeof p=="object"&&p!==null&&p.type===At&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ir:e:{for(var N=p.key,E=u;E!==null;){if(E.key===N){if(N=p.type,N===At){if(E.tag===7){r(m,E.sibling),u=s(E,p.props.children),u.return=m,m=u;break e}}else if(E.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qe&&Sa(N)===E.type){r(m,E.sibling),u=s(E,p.props),u.ref=vn(m,E,p),u.return=m,m=u;break e}r(m,E);break}else t(m,E);E=E.sibling}p.type===At?(u=bt(p.props.children,m.mode,g,p.key),u.return=m,m=u):(g=Dr(p.type,p.key,p.props,null,m.mode,g),g.ref=vn(m,u,p),g.return=m,m=g)}return a(m);case Mt:e:{for(E=p.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){r(m,u.sibling),u=s(u,p.children||[]),u.return=m,m=u;break e}else{r(m,u);break}else t(m,u);u=u.sibling}u=Ji(p,m.mode,g),u.return=m,m=u}return a(m);case qe:return E=p._init,I(m,u,E(p._payload),g)}if(Sn(p))return x(m,u,p,g);if(pn(p))return k(m,u,p,g);fr(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(r(m,u.sibling),u=s(u,p),u.return=m,m=u):(r(m,u),u=Wi(p,m.mode,g),u.return=m,m=u),a(m)):r(m,u)}return I}var nn=oc(!0),ac=oc(!1),Wr=gt(null),Jr=null,$t=null,po=null;function mo(){po=$t=Jr=null}function ho(e){var t=Wr.current;U(Wr),e._currentValue=t}function Ns(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function Kt(e,t){Jr=e,po=$t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:t,next:null},$t===null){if(Jr===null)throw Error(j(308));$t=e,Jr.dependencies={lanes:0,firstContext:e}}else $t=$t.next=e;return t}var Nt=null;function fo(e){Nt===null?Nt=[e]:Nt.push(e)}function lc(e,t,r,i){var s=t.interleaved;return s===null?(r.next=r,fo(t)):(r.next=s.next,s.next=r),t.interleaved=r,Ye(e,i)}function Ye(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var et=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,M&2){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,Ye(e,r)}return s=i.interleaved,s===null?(t.next=t,fo(i)):(t.next=s.next,s.next=t),i.interleaved=t,Ye(e,r)}function Cr(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,eo(e,r)}}function ka(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var s=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?s=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?s=o=t:o=o.next=t}else s=o=t;r={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Xr(e,t,r,i){var s=e.updateQueue;et=!1;var o=s.firstBaseUpdate,a=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var l=c,d=l.next;l.next=null,a===null?o=d:a.next=d,a=l;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==a&&(c===null?h.firstBaseUpdate=d:c.next=d,h.lastBaseUpdate=l))}if(o!==null){var v=s.baseState;a=0,h=d=l=null,c=o;do{var f=c.lane,S=c.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:S,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var x=e,k=c;switch(f=t,S=r,k.tag){case 1:if(x=k.payload,typeof x=="function"){v=x.call(S,v,f);break e}v=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,f=typeof x=="function"?x.call(S,v,f):x,f==null)break e;v=$({},v,f);break e;case 2:et=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[c]:f.push(c))}else S={eventTime:S,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(d=h=S,l=v):h=h.next=S,a|=f;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;f=c,c=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(1);if(h===null&&(l=v),s.baseState=l,s.firstBaseUpdate=d,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);Ft|=a,e.lanes=a,e.memoizedState=v}}function Na(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],s=i.callback;if(s!==null){if(i.callback=null,i=r,typeof s!="function")throw Error(j(191,s));s.call(i)}}}var er={},Oe=gt(er),$n=gt(er),Wn=gt(er);function wt(e){if(e===er)throw Error(j(174));return e}function vo(e,t){switch(B(Wn,t),B($n,e),B(Oe,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rs(t,e)}U(Oe),B(Oe,t)}function rn(){U(Oe),U($n),U(Wn)}function uc(e){wt(Wn.current);var t=wt(Oe.current),r=rs(t,e.type);t!==r&&(B($n,e),B(Oe,r))}function xo(e){$n.current===e&&(U(Oe),U($n))}var H=gt(0);function Qr(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _i=[];function yo(){for(var e=0;e<_i.length;e++)_i[e]._workInProgressVersionPrimary=null;_i.length=0}var br=Ke.ReactCurrentDispatcher,Ui=Ke.ReactCurrentBatchConfig,Pt=0,V=null,G=null,q=null,Yr=!1,Pn=!1,Jn=0,ap=0;function ie(){throw Error(j(321))}function jo(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ae(e[r],t[r]))return!1;return!0}function So(e,t,r,i,s,o){if(Pt=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,br.current=e===null||e.memoizedState===null?dp:pp,e=r(i,s),Pn){o=0;do{if(Pn=!1,Jn=0,25<=o)throw Error(j(301));o+=1,q=G=null,t.updateQueue=null,br.current=mp,e=r(i,s)}while(Pn)}if(br.current=Gr,t=G!==null&&G.next!==null,Pt=0,q=G=V=null,Yr=!1,t)throw Error(j(300));return e}function ko(){var e=Jn!==0;return Jn=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=e:q=q.next=e,q}function Pe(){if(G===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=q===null?V.memoizedState:q.next;if(t!==null)q=t,G=e;else{if(e===null)throw Error(j(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},q===null?V.memoizedState=q=e:q=q.next=e}return q}function Xn(e,t){return typeof t=="function"?t(e):t}function Oi(e){var t=Pe(),r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=e;var i=G,s=i.baseQueue,o=r.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}i.baseQueue=s=o,r.pending=null}if(s!==null){o=s.next,i=i.baseState;var c=a=null,l=null,d=o;do{var h=d.lane;if((Pt&h)===h)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var v={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(c=l=v,a=i):l=l.next=v,V.lanes|=h,Ft|=h}d=d.next}while(d!==null&&d!==o);l===null?a=i:l.next=c,Ae(i,t.memoizedState)||(me=!0),t.memoizedState=i,t.baseState=a,t.baseQueue=l,r.lastRenderedState=i}if(e=r.interleaved,e!==null){s=e;do o=s.lane,V.lanes|=o,Ft|=o,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Hi(e){var t=Pe(),r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=e;var i=r.dispatch,s=r.pending,o=t.memoizedState;if(s!==null){r.pending=null;var a=s=s.next;do o=e(o,a.action),a=a.next;while(a!==s);Ae(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,i]}function dc(){}function pc(e,t){var r=V,i=Pe(),s=t(),o=!Ae(i.memoizedState,s);if(o&&(i.memoizedState=s,me=!0),i=i.queue,No(fc.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||q!==null&&q.memoizedState.tag&1){if(r.flags|=2048,Qn(9,hc.bind(null,r,i,s,t),void 0,null),ee===null)throw Error(j(349));Pt&30||mc(r,t,s)}return s}function mc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function hc(e,t,r,i){t.value=r,t.getSnapshot=i,gc(t)&&vc(e)}function fc(e,t,r){return r(function(){gc(t)&&vc(e)})}function gc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ae(e,r)}catch{return!0}}function vc(e){var t=Ye(e,1);t!==null&&Me(t,e,1,-1)}function wa(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t.queue=e,e=e.dispatch=up.bind(null,V,e),[t.memoizedState,e]}function Qn(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function xc(){return Pe().memoizedState}function Er(e,t,r,i){var s=Be();V.flags|=e,s.memoizedState=Qn(1|t,r,void 0,i===void 0?null:i)}function ci(e,t,r,i){var s=Pe();i=i===void 0?null:i;var o=void 0;if(G!==null){var a=G.memoizedState;if(o=a.destroy,i!==null&&jo(i,a.deps)){s.memoizedState=Qn(t,r,o,i);return}}V.flags|=e,s.memoizedState=Qn(1|t,r,o,i)}function Ca(e,t){return Er(8390656,8,e,t)}function No(e,t){return ci(2048,8,e,t)}function yc(e,t){return ci(4,2,e,t)}function jc(e,t){return ci(4,4,e,t)}function Sc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kc(e,t,r){return r=r!=null?r.concat([e]):null,ci(4,4,Sc.bind(null,t,e),r)}function wo(){}function Nc(e,t){var r=Pe();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&jo(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function wc(e,t){var r=Pe();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&jo(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Cc(e,t,r){return Pt&21?(Ae(r,t)||(r=Fl(),V.lanes|=r,Ft|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=r)}function lp(e,t){var r=z;z=r!==0&&4>r?r:4,e(!0);var i=Ui.transition;Ui.transition={};try{e(!1),t()}finally{z=r,Ui.transition=i}}function bc(){return Pe().memoizedState}function cp(e,t,r){var i=dt(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Ec(e))Tc(t,r);else if(r=lc(e,t,r,i),r!==null){var s=ce();Me(r,e,i,s),Pc(r,t,i)}}function up(e,t,r){var i=dt(e),s={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ec(e))Tc(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,c=o(a,r);if(s.hasEagerState=!0,s.eagerState=c,Ae(c,a)){var l=t.interleaved;l===null?(s.next=s,fo(t)):(s.next=l.next,l.next=s),t.interleaved=s;return}}catch{}finally{}r=lc(e,t,s,i),r!==null&&(s=ce(),Me(r,e,i,s),Pc(r,t,i))}}function Ec(e){var t=e.alternate;return e===V||t!==null&&t===V}function Tc(e,t){Pn=Yr=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Pc(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,eo(e,r)}}var Gr={readContext:Te,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},dp={readContext:Te,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:Ca,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Er(4194308,4,Sc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Er(4194308,4,e,t)},useInsertionEffect:function(e,t){return Er(4,2,e,t)},useMemo:function(e,t){var r=Be();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Be();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=cp.bind(null,V,e),[i.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:wa,useDebugValue:wo,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=wa(!1),t=e[0];return e=lp.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=V,s=Be();if(O){if(r===void 0)throw Error(j(407));r=r()}else{if(r=t(),ee===null)throw Error(j(349));Pt&30||mc(i,t,r)}s.memoizedState=r;var o={value:r,getSnapshot:t};return s.queue=o,Ca(fc.bind(null,i,o,e),[e]),i.flags|=2048,Qn(9,hc.bind(null,i,o,r,t),void 0,null),r},useId:function(){var e=Be(),t=ee.identifierPrefix;if(O){var r=We,i=$e;r=(i&~(1<<32-Ie(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=Jn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=ap++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pp={readContext:Te,useCallback:Nc,useContext:Te,useEffect:No,useImperativeHandle:kc,useInsertionEffect:yc,useLayoutEffect:jc,useMemo:wc,useReducer:Oi,useRef:xc,useState:function(){return Oi(Xn)},useDebugValue:wo,useDeferredValue:function(e){var t=Pe();return Cc(t,G.memoizedState,e)},useTransition:function(){var e=Oi(Xn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:pc,useId:bc,unstable_isNewReconciler:!1},mp={readContext:Te,useCallback:Nc,useContext:Te,useEffect:No,useImperativeHandle:kc,useInsertionEffect:yc,useLayoutEffect:jc,useMemo:wc,useReducer:Hi,useRef:xc,useState:function(){return Hi(Xn)},useDebugValue:wo,useDeferredValue:function(e){var t=Pe();return G===null?t.memoizedState=e:Cc(t,G.memoizedState,e)},useTransition:function(){var e=Hi(Xn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:pc,useId:bc,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ws(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:$({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ui={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=ce(),s=dt(e),o=Je(i,s);o.payload=t,r!=null&&(o.callback=r),t=ct(e,o,s),t!==null&&(Me(t,e,s,i),Cr(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=ce(),s=dt(e),o=Je(i,s);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=ct(e,o,s),t!==null&&(Me(t,e,s,i),Cr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ce(),i=dt(e),s=Je(r,i);s.tag=2,t!=null&&(s.callback=t),t=ct(e,s,i),t!==null&&(Me(t,e,i,r),Cr(t,e,i))}};function ba(e,t,r,i,s,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,a):t.prototype&&t.prototype.isPureReactComponent?!Un(r,i)||!Un(s,o):!0}function Fc(e,t,r){var i=!1,s=ht,o=t.contextType;return typeof o=="object"&&o!==null?o=Te(o):(s=fe(t)?Et:ae.current,i=t.contextTypes,o=(i=i!=null)?en(e,s):ht),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ea(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function Cs(e,t,r,i){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},go(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=Te(o):(o=fe(t)?Et:ae.current,s.context=en(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ws(e,t,o,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ui.enqueueReplaceState(s,s.state,null),Xr(e,r,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function sn(e,t){try{var r="",i=t;do r+=Ou(i),i=i.return;while(i);var s=r}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function Vi(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function bs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var hp=typeof WeakMap=="function"?WeakMap:Map;function Dc(e,t,r){r=Je(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){Zr||(Zr=!0,As=i),bs(e,t)},r}function Lc(e,t,r){r=Je(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=t.value;r.payload=function(){return i(s)},r.callback=function(){bs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){bs(e,t),typeof i!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Ta(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new hp;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(r)||(s.add(r),e=Tp.bind(null,e,t,r),t.then(e,e))}function Pa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fa(e,t,r,i,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Je(-1,1),t.tag=2,ct(r,t,1))),r.lanes|=1),e)}var fp=Ke.ReactCurrentOwner,me=!1;function le(e,t,r,i){t.child=e===null?ac(t,null,r,i):nn(t,e.child,r,i)}function Da(e,t,r,i,s){r=r.render;var o=t.ref;return Kt(t,s),i=So(e,t,r,i,o,s),r=ko(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ge(e,t,s)):(O&&r&&lo(t),t.flags|=1,le(e,t,i,s),t.child)}function La(e,t,r,i,s){if(e===null){var o=r.type;return typeof o=="function"&&!Lo(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Rc(e,t,o,i,s)):(e=Dr(r.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:Un,r(a,i)&&e.ref===t.ref)return Ge(e,t,s)}return t.flags|=1,e=pt(o,i),e.ref=t.ref,e.return=t,t.child=e}function Rc(e,t,r,i,s){if(e!==null){var o=e.memoizedProps;if(Un(o,i)&&e.ref===t.ref)if(me=!1,t.pendingProps=i=o,(e.lanes&s)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Ge(e,t,s)}return Es(e,t,r,i,s)}function Ic(e,t,r){var i=t.pendingProps,s=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Jt,xe),xe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Jt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:r,B(Jt,xe),xe|=i}else o!==null?(i=o.baseLanes|r,t.memoizedState=null):i=r,B(Jt,xe),xe|=i;return le(e,t,s,r),t.child}function Mc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Es(e,t,r,i,s){var o=fe(r)?Et:ae.current;return o=en(t,o),Kt(t,s),r=So(e,t,r,i,o,s),i=ko(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ge(e,t,s)):(O&&i&&lo(t),t.flags|=1,le(e,t,r,s),t.child)}function Ra(e,t,r,i,s){if(fe(r)){var o=!0;Hr(t)}else o=!1;if(Kt(t,s),t.stateNode===null)Tr(e,t),Fc(t,r,i),Cs(t,r,i,s),i=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var l=a.context,d=r.contextType;typeof d=="object"&&d!==null?d=Te(d):(d=fe(r)?Et:ae.current,d=en(t,d));var h=r.getDerivedStateFromProps,v=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==i||l!==d)&&Ea(t,a,i,d),et=!1;var f=t.memoizedState;a.state=f,Xr(t,i,a,s),l=t.memoizedState,c!==i||f!==l||he.current||et?(typeof h=="function"&&(ws(t,r,h,i),l=t.memoizedState),(c=et||ba(t,r,c,i,f,l,d))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),a.props=i,a.state=l,a.context=d,i=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,cc(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:De(t.type,c),a.props=d,v=t.pendingProps,f=a.context,l=r.contextType,typeof l=="object"&&l!==null?l=Te(l):(l=fe(r)?Et:ae.current,l=en(t,l));var S=r.getDerivedStateFromProps;(h=typeof S=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==v||f!==l)&&Ea(t,a,i,l),et=!1,f=t.memoizedState,a.state=f,Xr(t,i,a,s);var x=t.memoizedState;c!==v||f!==x||he.current||et?(typeof S=="function"&&(ws(t,r,S,i),x=t.memoizedState),(d=et||ba(t,r,d,i,f,x,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=x),a.props=i,a.state=x,a.context=l,i=d):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return Ts(e,t,r,i,o,s)}function Ts(e,t,r,i,s,o){Mc(e,t);var a=(t.flags&128)!==0;if(!i&&!a)return s&&xa(t,r,!1),Ge(e,t,o);i=t.stateNode,fp.current=t;var c=a&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&a?(t.child=nn(t,e.child,null,o),t.child=nn(t,null,c,o)):le(e,t,c,o),t.memoizedState=i.state,s&&xa(t,r,!0),t.child}function Ac(e){var t=e.stateNode;t.pendingContext?va(e,t.pendingContext,t.pendingContext!==t.context):t.context&&va(e,t.context,!1),vo(e,t.containerInfo)}function Ia(e,t,r,i,s){return tn(),uo(s),t.flags|=256,le(e,t,r,i),t.child}var Ps={dehydrated:null,treeContext:null,retryLane:0};function Fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function zc(e,t,r){var i=t.pendingProps,s=H.current,o=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(s&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),B(H,s&1),e===null)return ks(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=i.children,e=i.fallback,o?(i=t.mode,o=t.child,a={mode:"hidden",children:a},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=mi(a,i,0,null),e=bt(e,i,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fs(r),t.memoizedState=Ps,e):Co(t,a));if(s=e.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return gp(e,t,a,i,c,s,r);if(o){o=i.fallback,a=t.mode,s=e.child,c=s.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&t.child!==s?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=pt(s,l),i.subtreeFlags=s.subtreeFlags&14680064),c!==null?o=pt(c,o):(o=bt(o,a,r,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,a=e.child.memoizedState,a=a===null?Fs(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=Ps,i}return o=e.child,e=o.sibling,i=pt(o,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Co(e,t){return t=mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,r,i){return i!==null&&uo(i),nn(t,e.child,null,r),e=Co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gp(e,t,r,i,s,o,a){if(r)return t.flags&256?(t.flags&=-257,i=Vi(Error(j(422))),gr(e,t,a,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,s=t.mode,i=mi({mode:"visible",children:i.children},s,0,null),o=bt(o,s,a,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&nn(t,e.child,null,a),t.child.memoizedState=Fs(a),t.memoizedState=Ps,o);if(!(t.mode&1))return gr(e,t,a,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(j(419)),i=Vi(o,i,void 0),gr(e,t,a,i)}if(c=(a&e.childLanes)!==0,me||c){if(i=ee,i!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|a)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Ye(e,s),Me(i,e,s,-1))}return Do(),i=Vi(Error(j(421))),gr(e,t,a,i)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Pp.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,ye=lt(s.nextSibling),je=t,O=!0,Re=null,e!==null&&(we[Ce++]=$e,we[Ce++]=We,we[Ce++]=Tt,$e=e.id,We=e.overflow,Tt=t),t=Co(t,i.children),t.flags|=4096,t)}function Ma(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ns(e.return,t,r)}function $i(e,t,r,i,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=r,o.tailMode=s)}function Bc(e,t,r){var i=t.pendingProps,s=i.revealOrder,o=i.tail;if(le(e,t,i.children,r),i=H.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ma(e,r,t);else if(e.tag===19)Ma(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(B(H,i),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&Qr(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),$i(t,!1,s,r,o);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Qr(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}$i(t,!0,r,null,o);break;case"together":$i(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,r=pt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=pt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function vp(e,t,r){switch(t.tag){case 3:Ac(t),tn();break;case 5:uc(t);break;case 1:fe(t.type)&&Hr(t);break;case 4:vo(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,s=t.memoizedProps.value;B(Wr,i._currentValue),i._currentValue=s;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(B(H,H.current&1),t.flags|=128,null):r&t.child.childLanes?zc(e,t,r):(B(H,H.current&1),e=Ge(e,t,r),e!==null?e.sibling:null);B(H,H.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return Bc(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),B(H,H.current),i)break;return null;case 22:case 23:return t.lanes=0,Ic(e,t,r)}return Ge(e,t,r)}var _c,Ds,Uc,Oc;_c=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ds=function(){};Uc=function(e,t,r,i){var s=e.memoizedProps;if(s!==i){e=t.stateNode,wt(Oe.current);var o=null;switch(r){case"input":s=qi(e,s),i=qi(e,i),o=[];break;case"select":s=$({},s,{value:void 0}),i=$({},i,{value:void 0}),o=[];break;case"textarea":s=ns(e,s),i=ns(e,i),o=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ur)}is(r,i);var a;r=null;for(d in s)if(!i.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var c=s[d];for(a in c)c.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Rn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in i){var l=i[d];if(c=s!=null?s[d]:void 0,i.hasOwnProperty(d)&&l!==c&&(l!=null||c!=null))if(d==="style")if(c){for(a in c)!c.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&c[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(o||(o=[]),o.push(d,r)),r=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&_("scroll",e),o||c===l||(o=[])):(o=o||[]).push(d,l))}r&&(o=o||[]).push("style",r);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Oc=function(e,t,r,i){r!==i&&(t.flags|=4)};function xn(e,t){if(!O)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function xp(e,t,r){var i=t.pendingProps;switch(co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return fe(t.type)&&Or(),se(t),null;case 3:return i=t.stateNode,rn(),U(he),U(ae),yo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(_s(Re),Re=null))),Ds(e,t),se(t),null;case 5:xo(t);var s=wt(Wn.current);if(r=t.type,e!==null&&t.stateNode!=null)Uc(e,t,r,i,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(j(166));return se(t),null}if(e=wt(Oe.current),hr(t)){i=t.stateNode,r=t.type;var o=t.memoizedProps;switch(i[_e]=t,i[Vn]=o,e=(t.mode&1)!==0,r){case"dialog":_("cancel",i),_("close",i);break;case"iframe":case"object":case"embed":_("load",i);break;case"video":case"audio":for(s=0;s<Nn.length;s++)_(Nn[s],i);break;case"source":_("error",i);break;case"img":case"image":case"link":_("error",i),_("load",i);break;case"details":_("toggle",i);break;case"input":$o(i,o),_("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},_("invalid",i);break;case"textarea":Jo(i,o),_("invalid",i)}is(r,o),s=null;for(var a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="children"?typeof c=="string"?i.textContent!==c&&(o.suppressHydrationWarning!==!0&&mr(i.textContent,c,e),s=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&mr(i.textContent,c,e),s=["children",""+c]):Rn.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&_("scroll",i)}switch(r){case"input":sr(i),Wo(i,o,!0);break;case"textarea":sr(i),Xo(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ur)}i=s,t.updateQueue=i,i!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fl(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=a.createElement(r,{is:i.is}):(e=a.createElement(r),r==="select"&&(a=e,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):e=a.createElementNS(e,r),e[_e]=t,e[Vn]=i,_c(e,t,!1,!1),t.stateNode=e;e:{switch(a=ss(r,i),r){case"dialog":_("cancel",e),_("close",e),s=i;break;case"iframe":case"object":case"embed":_("load",e),s=i;break;case"video":case"audio":for(s=0;s<Nn.length;s++)_(Nn[s],e);s=i;break;case"source":_("error",e),s=i;break;case"img":case"image":case"link":_("error",e),_("load",e),s=i;break;case"details":_("toggle",e),s=i;break;case"input":$o(e,i),s=qi(e,i),_("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=$({},i,{value:void 0}),_("invalid",e);break;case"textarea":Jo(e,i),s=ns(e,i),_("invalid",e);break;default:s=i}is(r,s),c=s;for(o in c)if(c.hasOwnProperty(o)){var l=c[o];o==="style"?xl(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gl(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&In(e,l):typeof l=="number"&&In(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rn.hasOwnProperty(o)?l!=null&&o==="onScroll"&&_("scroll",e):l!=null&&Qs(e,o,l,a))}switch(r){case"input":sr(e),Wo(e,i,!1);break;case"textarea":sr(e),Xo(e);break;case"option":i.value!=null&&e.setAttribute("value",""+mt(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?Xt(e,!!i.multiple,o,!1):i.defaultValue!=null&&Xt(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ur)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Oc(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(r=wt(Wn.current),wt(Oe.current),hr(t)){if(i=t.stateNode,r=t.memoizedProps,i[_e]=t,(o=i.nodeValue!==r)&&(e=je,e!==null))switch(e.tag){case 3:mr(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mr(i.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[_e]=t,t.stateNode=i}return se(t),null;case 13:if(U(H),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&ye!==null&&t.mode&1&&!(t.flags&128))sc(),tn(),t.flags|=98560,o=!1;else if(o=hr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[_e]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Re!==null&&(_s(Re),Re=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?K===0&&(K=3):Do())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return rn(),Ds(e,t),e===null&&On(t.stateNode.containerInfo),se(t),null;case 10:return ho(t.type._context),se(t),null;case 17:return fe(t.type)&&Or(),se(t),null;case 19:if(U(H),o=t.memoizedState,o===null)return se(t),null;if(i=(t.flags&128)!==0,a=o.rendering,a===null)if(i)xn(o,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Qr(e),a!==null){for(t.flags|=128,xn(o,!1),i=a.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)o=r,e=i,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return B(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>on&&(t.flags|=128,i=!0,xn(o,!1),t.lanes=4194304)}else{if(!i)if(e=Qr(a),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),xn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!O)return se(t),null}else 2*Q()-o.renderingStartTime>on&&r!==1073741824&&(t.flags|=128,i=!0,xn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,r=H.current,B(H,i?r&1|2:r&1),t):(se(t),null);case 22:case 23:return Fo(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?xe&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function yp(e,t){switch(co(t),t.tag){case 1:return fe(t.type)&&Or(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),U(he),U(ae),yo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xo(t),null;case 13:if(U(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(H),null;case 4:return rn(),null;case 10:return ho(t.type._context),null;case 22:case 23:return Fo(),null;case 24:return null;default:return null}}var vr=!1,oe=!1,jp=typeof WeakSet=="function"?WeakSet:Set,C=null;function Wt(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){W(e,t,i)}else r.current=null}function Ls(e,t,r){try{r()}catch(i){W(e,t,i)}}var Aa=!1;function Sp(e,t){if(fs=zr,e=Jl(),ao(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var s=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,c=-1,l=-1,d=0,h=0,v=e,f=null;t:for(;;){for(var S;v!==r||s!==0&&v.nodeType!==3||(c=a+s),v!==o||i!==0&&v.nodeType!==3||(l=a+i),v.nodeType===3&&(a+=v.nodeValue.length),(S=v.firstChild)!==null;)f=v,v=S;for(;;){if(v===e)break t;if(f===r&&++d===s&&(c=a),f===o&&++h===i&&(l=a),(S=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=S}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(gs={focusedElem:e,selectionRange:r},zr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,I=x.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?k:De(t.type,k),I);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(g){W(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return x=Aa,Aa=!1,x}function Fn(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&Ls(t,r,o)}s=s.next}while(s!==i)}}function di(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Rs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Hc(e){var t=e.alternate;t!==null&&(e.alternate=null,Hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_e],delete t[Vn],delete t[ys],delete t[rp],delete t[ip])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vc(e){return e.tag===5||e.tag===3||e.tag===4}function za(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Is(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ur));else if(i!==4&&(e=e.child,e!==null))for(Is(e,t,r),e=e.sibling;e!==null;)Is(e,t,r),e=e.sibling}function Ms(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Ms(e,t,r),e=e.sibling;e!==null;)Ms(e,t,r),e=e.sibling}var te=null,Le=!1;function Ze(e,t,r){for(r=r.child;r!==null;)$c(e,t,r),r=r.sibling}function $c(e,t,r){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(ri,r)}catch{}switch(r.tag){case 5:oe||Wt(r,t);case 6:var i=te,s=Le;te=null,Ze(e,t,r),te=i,Le=s,te!==null&&(Le?(e=te,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):te.removeChild(r.stateNode));break;case 18:te!==null&&(Le?(e=te,r=r.stateNode,e.nodeType===8?zi(e.parentNode,r):e.nodeType===1&&zi(e,r),Bn(e)):zi(te,r.stateNode));break;case 4:i=te,s=Le,te=r.stateNode.containerInfo,Le=!0,Ze(e,t,r),te=i,Le=s;break;case 0:case 11:case 14:case 15:if(!oe&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var o=s,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ls(r,t,a),s=s.next}while(s!==i)}Ze(e,t,r);break;case 1:if(!oe&&(Wt(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(c){W(r,t,c)}Ze(e,t,r);break;case 21:Ze(e,t,r);break;case 22:r.mode&1?(oe=(i=oe)||r.memoizedState!==null,Ze(e,t,r),oe=i):Ze(e,t,r);break;default:Ze(e,t,r)}}function Ba(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new jp),t.forEach(function(i){var s=Fp.bind(null,e,i);r.has(i)||(r.add(i),i.then(s,s))})}}function Fe(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];try{var o=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:te=c.stateNode,Le=!1;break e;case 3:te=c.stateNode.containerInfo,Le=!0;break e;case 4:te=c.stateNode.containerInfo,Le=!0;break e}c=c.return}if(te===null)throw Error(j(160));$c(o,a,s),te=null,Le=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(d){W(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wc(t,e),t=t.sibling}function Wc(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),ze(e),i&4){try{Fn(3,e,e.return),di(3,e)}catch(k){W(e,e.return,k)}try{Fn(5,e,e.return)}catch(k){W(e,e.return,k)}}break;case 1:Fe(t,e),ze(e),i&512&&r!==null&&Wt(r,r.return);break;case 5:if(Fe(t,e),ze(e),i&512&&r!==null&&Wt(r,r.return),e.flags&32){var s=e.stateNode;try{In(s,"")}catch(k){W(e,e.return,k)}}if(i&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&ml(s,o),ss(c,a);var d=ss(c,o);for(a=0;a<l.length;a+=2){var h=l[a],v=l[a+1];h==="style"?xl(s,v):h==="dangerouslySetInnerHTML"?gl(s,v):h==="children"?In(s,v):Qs(s,h,v,d)}switch(c){case"input":es(s,o);break;case"textarea":hl(s,o);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Xt(s,!!o.multiple,S,!1):f!==!!o.multiple&&(o.defaultValue!=null?Xt(s,!!o.multiple,o.defaultValue,!0):Xt(s,!!o.multiple,o.multiple?[]:"",!1))}s[Vn]=o}catch(k){W(e,e.return,k)}}break;case 6:if(Fe(t,e),ze(e),i&4){if(e.stateNode===null)throw Error(j(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(k){W(e,e.return,k)}}break;case 3:if(Fe(t,e),ze(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(k){W(e,e.return,k)}break;case 4:Fe(t,e),ze(e);break;case 13:Fe(t,e),ze(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(To=Q())),i&4&&Ba(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(oe=(d=oe)||h,Fe(t,e),oe=d):Fe(t,e),ze(e),i&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(v=C=h;C!==null;){switch(f=C,S=f.child,f.tag){case 0:case 11:case 14:case 15:Fn(4,f,f.return);break;case 1:Wt(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,r=f.return;try{t=i,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){W(i,r,k)}}break;case 5:Wt(f,f.return);break;case 22:if(f.memoizedState!==null){Ua(v);continue}}S!==null?(S.return=f,C=S):Ua(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{s=v.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=v.stateNode,l=v.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=vl("display",a))}catch(k){W(e,e.return,k)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(k){W(e,e.return,k)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Fe(t,e),ze(e),i&4&&Ba(e);break;case 21:break;default:Fe(t,e),ze(e)}}function ze(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Vc(r)){var i=r;break e}r=r.return}throw Error(j(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(In(s,""),i.flags&=-33);var o=za(e);Ms(e,o,s);break;case 3:case 4:var a=i.stateNode.containerInfo,c=za(e);Is(e,c,a);break;default:throw Error(j(161))}}catch(l){W(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kp(e,t,r){C=e,Jc(e)}function Jc(e,t,r){for(var i=(e.mode&1)!==0;C!==null;){var s=C,o=s.child;if(s.tag===22&&i){var a=s.memoizedState!==null||vr;if(!a){var c=s.alternate,l=c!==null&&c.memoizedState!==null||oe;c=vr;var d=oe;if(vr=a,(oe=l)&&!d)for(C=s;C!==null;)a=C,l=a.child,a.tag===22&&a.memoizedState!==null?Oa(s):l!==null?(l.return=a,C=l):Oa(s);for(;o!==null;)C=o,Jc(o),o=o.sibling;C=s,vr=c,oe=d}_a(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,C=o):_a(e)}}function _a(e){for(;C!==null;){var t=C;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||di(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!oe)if(r===null)i.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:De(t.type,r.memoizedProps);i.componentDidUpdate(s,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Na(t,o,i);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Na(t,a,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&Bn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}oe||t.flags&512&&Rs(t)}catch(f){W(t,t.return,f)}}if(t===e){C=null;break}if(r=t.sibling,r!==null){r.return=t.return,C=r;break}C=t.return}}function Ua(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var r=t.sibling;if(r!==null){r.return=t.return,C=r;break}C=t.return}}function Oa(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{di(4,t)}catch(l){W(t,r,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var s=t.return;try{i.componentDidMount()}catch(l){W(t,s,l)}}var o=t.return;try{Rs(t)}catch(l){W(t,o,l)}break;case 5:var a=t.return;try{Rs(t)}catch(l){W(t,a,l)}}}catch(l){W(t,t.return,l)}if(t===e){C=null;break}var c=t.sibling;if(c!==null){c.return=t.return,C=c;break}C=t.return}}var Np=Math.ceil,Kr=Ke.ReactCurrentDispatcher,bo=Ke.ReactCurrentOwner,Ee=Ke.ReactCurrentBatchConfig,M=0,ee=null,Y=null,ne=0,xe=0,Jt=gt(0),K=0,Yn=null,Ft=0,pi=0,Eo=0,Dn=null,pe=null,To=0,on=1/0,He=null,Zr=!1,As=null,ut=null,xr=!1,it=null,qr=0,Ln=0,zs=null,Pr=-1,Fr=0;function ce(){return M&6?Q():Pr!==-1?Pr:Pr=Q()}function dt(e){return e.mode&1?M&2&&ne!==0?ne&-ne:op.transition!==null?(Fr===0&&(Fr=Fl()),Fr):(e=z,e!==0||(e=window.event,e=e===void 0?16:zl(e.type)),e):1}function Me(e,t,r,i){if(50<Ln)throw Ln=0,zs=null,Error(j(185));Kn(e,r,i),(!(M&2)||e!==ee)&&(e===ee&&(!(M&2)&&(pi|=r),K===4&&nt(e,ne)),ge(e,i),r===1&&M===0&&!(t.mode&1)&&(on=Q()+500,li&&vt()))}function ge(e,t){var r=e.callbackNode;od(e,t);var i=Ar(e,e===ee?ne:0);if(i===0)r!==null&&Go(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&Go(r),t===1)e.tag===0?sp(Ha.bind(null,e)):nc(Ha.bind(null,e)),tp(function(){!(M&6)&&vt()}),r=null;else{switch(Dl(i)){case 1:r=qs;break;case 4:r=Tl;break;case 16:r=Mr;break;case 536870912:r=Pl;break;default:r=Mr}r=eu(r,Xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Xc(e,t){if(Pr=-1,Fr=0,M&6)throw Error(j(327));var r=e.callbackNode;if(Zt()&&e.callbackNode!==r)return null;var i=Ar(e,e===ee?ne:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=ei(e,i);else{t=i;var s=M;M|=2;var o=Yc();(ee!==e||ne!==t)&&(He=null,on=Q()+500,Ct(e,t));do try{bp();break}catch(c){Qc(e,c)}while(1);mo(),Kr.current=o,M=s,Y!==null?t=0:(ee=null,ne=0,t=K)}if(t!==0){if(t===2&&(s=us(e),s!==0&&(i=s,t=Bs(e,s))),t===1)throw r=Yn,Ct(e,0),nt(e,i),ge(e,Q()),r;if(t===6)nt(e,i);else{if(s=e.current.alternate,!(i&30)&&!wp(s)&&(t=ei(e,i),t===2&&(o=us(e),o!==0&&(i=o,t=Bs(e,o))),t===1))throw r=Yn,Ct(e,0),nt(e,i),ge(e,Q()),r;switch(e.finishedWork=s,e.finishedLanes=i,t){case 0:case 1:throw Error(j(345));case 2:St(e,pe,He);break;case 3:if(nt(e,i),(i&130023424)===i&&(t=To+500-Q(),10<t)){if(Ar(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){ce(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=xs(St.bind(null,e,pe,He),t);break}St(e,pe,He);break;case 4:if(nt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,s=-1;0<i;){var a=31-Ie(i);o=1<<a,a=t[a],a>s&&(s=a),i&=~o}if(i=s,i=Q()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Np(i/1960))-i,10<i){e.timeoutHandle=xs(St.bind(null,e,pe,He),i);break}St(e,pe,He);break;case 5:St(e,pe,He);break;default:throw Error(j(329))}}}return ge(e,Q()),e.callbackNode===r?Xc.bind(null,e):null}function Bs(e,t){var r=Dn;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=ei(e,t),e!==2&&(t=pe,pe=r,t!==null&&_s(t)),e}function _s(e){pe===null?pe=e:pe.push.apply(pe,e)}function wp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var s=r[i],o=s.getSnapshot;s=s.value;try{if(!Ae(o(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Eo,t&=~pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ie(t),i=1<<r;e[r]=-1,t&=~i}}function Ha(e){if(M&6)throw Error(j(327));Zt();var t=Ar(e,0);if(!(t&1))return ge(e,Q()),null;var r=ei(e,t);if(e.tag!==0&&r===2){var i=us(e);i!==0&&(t=i,r=Bs(e,i))}if(r===1)throw r=Yn,Ct(e,0),nt(e,t),ge(e,Q()),r;if(r===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,pe,He),ge(e,Q()),null}function Po(e,t){var r=M;M|=1;try{return e(t)}finally{M=r,M===0&&(on=Q()+500,li&&vt())}}function Dt(e){it!==null&&it.tag===0&&!(M&6)&&Zt();var t=M;M|=1;var r=Ee.transition,i=z;try{if(Ee.transition=null,z=1,e)return e()}finally{z=i,Ee.transition=r,M=t,!(M&6)&&vt()}}function Fo(){xe=Jt.current,U(Jt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,ep(r)),Y!==null)for(r=Y.return;r!==null;){var i=r;switch(co(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Or();break;case 3:rn(),U(he),U(ae),yo();break;case 5:xo(i);break;case 4:rn();break;case 13:U(H);break;case 19:U(H);break;case 10:ho(i.type._context);break;case 22:case 23:Fo()}r=r.return}if(ee=e,Y=e=pt(e.current,null),ne=xe=t,K=0,Yn=null,Eo=pi=Ft=0,pe=Dn=null,Nt!==null){for(t=0;t<Nt.length;t++)if(r=Nt[t],i=r.interleaved,i!==null){r.interleaved=null;var s=i.next,o=r.pending;if(o!==null){var a=o.next;o.next=s,i.next=a}r.pending=i}Nt=null}return e}function Qc(e,t){do{var r=Y;try{if(mo(),br.current=Gr,Yr){for(var i=V.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Yr=!1}if(Pt=0,q=G=V=null,Pn=!1,Jn=0,bo.current=null,r===null||r.return===null){K=1,Yn=t,Y=null;break}e:{var o=e,a=r.return,c=r,l=t;if(t=ne,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,h=c,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=Pa(a);if(S!==null){S.flags&=-257,Fa(S,a,c,o,t),S.mode&1&&Ta(o,d,t),t=S,l=d;var x=t.updateQueue;if(x===null){var k=new Set;k.add(l),t.updateQueue=k}else x.add(l);break e}else{if(!(t&1)){Ta(o,d,t),Do();break e}l=Error(j(426))}}else if(O&&c.mode&1){var I=Pa(a);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Fa(I,a,c,o,t),uo(sn(l,c));break e}}o=l=sn(l,c),K!==4&&(K=2),Dn===null?Dn=[o]:Dn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Dc(o,l,t);ka(o,m);break e;case 1:c=l;var u=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Lc(o,c,t);ka(o,g);break e}}o=o.return}while(o!==null)}Kc(r)}catch(N){t=N,Y===r&&r!==null&&(Y=r=r.return);continue}break}while(1)}function Yc(){var e=Kr.current;return Kr.current=Gr,e===null?Gr:e}function Do(){(K===0||K===3||K===2)&&(K=4),ee===null||!(Ft&268435455)&&!(pi&268435455)||nt(ee,ne)}function ei(e,t){var r=M;M|=2;var i=Yc();(ee!==e||ne!==t)&&(He=null,Ct(e,t));do try{Cp();break}catch(s){Qc(e,s)}while(1);if(mo(),M=r,Kr.current=i,Y!==null)throw Error(j(261));return ee=null,ne=0,K}function Cp(){for(;Y!==null;)Gc(Y)}function bp(){for(;Y!==null&&!Ku();)Gc(Y)}function Gc(e){var t=qc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Kc(e):Y=t,bo.current=null}function Kc(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=yp(r,t),r!==null){r.flags&=32767,Y=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Y=null;return}}else if(r=xp(r,t,xe),r!==null){Y=r;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);K===0&&(K=5)}function St(e,t,r){var i=z,s=Ee.transition;try{Ee.transition=null,z=1,Ep(e,t,r,i)}finally{Ee.transition=s,z=i}return null}function Ep(e,t,r,i){do Zt();while(it!==null);if(M&6)throw Error(j(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(ad(e,o),e===ee&&(Y=ee=null,ne=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||xr||(xr=!0,eu(Mr,function(){return Zt(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ee.transition,Ee.transition=null;var a=z;z=1;var c=M;M|=4,bo.current=null,Sp(e,r),Wc(r,e),Xd(gs),zr=!!fs,gs=fs=null,e.current=r,kp(r),Zu(),M=c,z=a,Ee.transition=o}else e.current=r;if(xr&&(xr=!1,it=e,qr=s),o=e.pendingLanes,o===0&&(ut=null),td(r.stateNode),ge(e,Q()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],i(s.value,{componentStack:s.stack,digest:s.digest});if(Zr)throw Zr=!1,e=As,As=null,e;return qr&1&&e.tag!==0&&Zt(),o=e.pendingLanes,o&1?e===zs?Ln++:(Ln=0,zs=e):Ln=0,vt(),null}function Zt(){if(it!==null){var e=Dl(qr),t=Ee.transition,r=z;try{if(Ee.transition=null,z=16>e?16:e,it===null)var i=!1;else{if(e=it,it=null,qr=0,M&6)throw Error(j(331));var s=M;for(M|=4,C=e.current;C!==null;){var o=C,a=o.child;if(C.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var d=c[l];for(C=d;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:Fn(8,h,o)}var v=h.child;if(v!==null)v.return=h,C=v;else for(;C!==null;){h=C;var f=h.sibling,S=h.return;if(Hc(h),h===d){C=null;break}if(f!==null){f.return=S,C=f;break}C=S}}}var x=o.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var I=k.sibling;k.sibling=null,k=I}while(k!==null)}}C=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,C=a;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Fn(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,C=m;break e}C=o.return}}var u=e.current;for(C=u;C!==null;){a=C;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,C=p;else e:for(a=u;C!==null;){if(c=C,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:di(9,c)}}catch(N){W(c,c.return,N)}if(c===a){C=null;break e}var g=c.sibling;if(g!==null){g.return=c.return,C=g;break e}C=c.return}}if(M=s,vt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(ri,e)}catch{}i=!0}return i}finally{z=r,Ee.transition=t}}return!1}function Va(e,t,r){t=sn(r,t),t=Dc(e,t,1),e=ct(e,t,1),t=ce(),e!==null&&(Kn(e,1,t),ge(e,t))}function W(e,t,r){if(e.tag===3)Va(e,e,r);else for(;t!==null;){if(t.tag===3){Va(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ut===null||!ut.has(i))){e=sn(r,e),e=Lc(t,e,1),t=ct(t,e,1),e=ce(),t!==null&&(Kn(t,1,e),ge(t,e));break}}t=t.return}}function Tp(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&r,ee===e&&(ne&r)===r&&(K===4||K===3&&(ne&130023424)===ne&&500>Q()-To?Ct(e,0):Eo|=r),ge(e,t)}function Zc(e,t){t===0&&(e.mode&1?(t=lr,lr<<=1,!(lr&130023424)&&(lr=4194304)):t=1);var r=ce();e=Ye(e,t),e!==null&&(Kn(e,t,r),ge(e,r))}function Pp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Zc(e,r)}function Fp(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(j(314))}i!==null&&i.delete(t),Zc(e,r)}var qc;qc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return me=!1,vp(e,t,r);me=!!(e.flags&131072)}else me=!1,O&&t.flags&1048576&&rc(t,$r,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Tr(e,t),e=t.pendingProps;var s=en(t,ae.current);Kt(t,r),s=So(null,t,i,e,s,r);var o=ko();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(i)?(o=!0,Hr(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,go(t),s.updater=ui,t.stateNode=s,s._reactInternals=t,Cs(t,i,e,r),t=Ts(null,t,i,!0,o,r)):(t.tag=0,O&&o&&lo(t),le(null,t,s,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Tr(e,t),e=t.pendingProps,s=i._init,i=s(i._payload),t.type=i,s=t.tag=Lp(i),e=De(i,e),s){case 0:t=Es(null,t,i,e,r);break e;case 1:t=Ra(null,t,i,e,r);break e;case 11:t=Da(null,t,i,e,r);break e;case 14:t=La(null,t,i,De(i.type,e),r);break e}throw Error(j(306,i,""))}return t;case 0:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:De(i,s),Es(e,t,i,s,r);case 1:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:De(i,s),Ra(e,t,i,s,r);case 3:e:{if(Ac(t),e===null)throw Error(j(387));i=t.pendingProps,o=t.memoizedState,s=o.element,cc(e,t),Xr(t,i,null,r);var a=t.memoizedState;if(i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=sn(Error(j(423)),t),t=Ia(e,t,i,r,s);break e}else if(i!==s){s=sn(Error(j(424)),t),t=Ia(e,t,i,r,s);break e}else for(ye=lt(t.stateNode.containerInfo.firstChild),je=t,O=!0,Re=null,r=ac(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(tn(),i===s){t=Ge(e,t,r);break e}le(e,t,i,r)}t=t.child}return t;case 5:return uc(t),e===null&&ks(t),i=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,a=s.children,vs(i,s)?a=null:o!==null&&vs(i,o)&&(t.flags|=32),Mc(e,t),le(e,t,a,r),t.child;case 6:return e===null&&ks(t),null;case 13:return zc(e,t,r);case 4:return vo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=nn(t,null,i,r):le(e,t,i,r),t.child;case 11:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:De(i,s),Da(e,t,i,s,r);case 7:return le(e,t,t.pendingProps,r),t.child;case 8:return le(e,t,t.pendingProps.children,r),t.child;case 12:return le(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,s=t.pendingProps,o=t.memoizedProps,a=s.value,B(Wr,i._currentValue),i._currentValue=a,o!==null)if(Ae(o.value,a)){if(o.children===s.children&&!he.current){t=Ge(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){a=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Je(-1,r&-r),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?l.next=l:(l.next=h.next,h.next=l),d.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Ns(o.return,r,t),c.lanes|=r;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),Ns(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}le(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,i=t.pendingProps.children,Kt(t,r),s=Te(s),i=i(s),t.flags|=1,le(e,t,i,r),t.child;case 14:return i=t.type,s=De(i,t.pendingProps),s=De(i.type,s),La(e,t,i,s,r);case 15:return Rc(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:De(i,s),Tr(e,t),t.tag=1,fe(i)?(e=!0,Hr(t)):e=!1,Kt(t,r),Fc(t,i,s),Cs(t,i,s,r),Ts(null,t,i,!0,e,r);case 19:return Bc(e,t,r);case 22:return Ic(e,t,r)}throw Error(j(156,t.tag))};function eu(e,t){return El(e,t)}function Dp(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,r,i){return new Dp(e,t,r,i)}function Lo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lp(e){if(typeof e=="function")return Lo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gs)return 11;if(e===Ks)return 14}return 2}function pt(e,t){var r=e.alternate;return r===null?(r=be(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Dr(e,t,r,i,s,o){var a=2;if(i=e,typeof e=="function")Lo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case At:return bt(r.children,s,o,t);case Ys:a=8,s|=8;break;case Yi:return e=be(12,r,t,s|2),e.elementType=Yi,e.lanes=o,e;case Gi:return e=be(13,r,t,s),e.elementType=Gi,e.lanes=o,e;case Ki:return e=be(19,r,t,s),e.elementType=Ki,e.lanes=o,e;case ul:return mi(r,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ll:a=10;break e;case cl:a=9;break e;case Gs:a=11;break e;case Ks:a=14;break e;case qe:a=16,i=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=be(a,r,t,s),t.elementType=e,t.type=i,t.lanes=o,t}function bt(e,t,r,i){return e=be(7,e,i,t),e.lanes=r,e}function mi(e,t,r,i){return e=be(22,e,i,t),e.elementType=ul,e.lanes=r,e.stateNode={isHidden:!1},e}function Wi(e,t,r){return e=be(6,e,null,t),e.lanes=r,e}function Ji(e,t,r){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rp(e,t,r,i,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bi(0),this.expirationTimes=bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ro(e,t,r,i,s,o,a,c,l){return e=new Rp(e,t,r,c,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},go(o),e}function Ip(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mt,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function tu(e){if(!e)return ht;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var r=e.type;if(fe(r))return tc(e,r,t)}return t}function nu(e,t,r,i,s,o,a,c,l){return e=Ro(r,i,!0,e,s,o,a,c,l),e.context=tu(null),r=e.current,i=ce(),s=dt(r),o=Je(i,s),o.callback=t??null,ct(r,o,s),e.current.lanes=s,Kn(e,s,i),ge(e,i),e}function hi(e,t,r,i){var s=t.current,o=ce(),a=dt(s);return r=tu(r),t.context===null?t.context=r:t.pendingContext=r,t=Je(o,a),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=ct(s,t,a),e!==null&&(Me(e,s,a,o),Cr(e,s,a)),a}function ti(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $a(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Io(e,t){$a(e,t),(e=e.alternate)&&$a(e,t)}function Mp(){return null}var ru=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mo(e){this._internalRoot=e}fi.prototype.render=Mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));hi(e,t,null,null)};fi.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dt(function(){hi(null,e,null,null)}),t[Qe]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Il();e={blockedOn:null,target:e,priority:t};for(var r=0;r<tt.length&&t!==0&&t<tt[r].priority;r++);tt.splice(r,0,e),r===0&&Al(e)}};function Ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wa(){}function Ap(e,t,r,i,s){if(s){if(typeof i=="function"){var o=i;i=function(){var d=ti(a);o.call(d)}}var a=nu(t,i,e,0,null,!1,!1,"",Wa);return e._reactRootContainer=a,e[Qe]=a.current,On(e.nodeType===8?e.parentNode:e),Dt(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var c=i;i=function(){var d=ti(l);c.call(d)}}var l=Ro(e,0,!1,null,null,!1,!1,"",Wa);return e._reactRootContainer=l,e[Qe]=l.current,On(e.nodeType===8?e.parentNode:e),Dt(function(){hi(t,l,r,i)}),l}function vi(e,t,r,i,s){var o=r._reactRootContainer;if(o){var a=o;if(typeof s=="function"){var c=s;s=function(){var l=ti(a);c.call(l)}}hi(t,a,e,s)}else a=Ap(r,t,e,s,i);return ti(a)}Ll=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=kn(t.pendingLanes);r!==0&&(eo(t,r|1),ge(t,Q()),!(M&6)&&(on=Q()+500,vt()))}break;case 13:Dt(function(){var i=Ye(e,1);if(i!==null){var s=ce();Me(i,e,1,s)}}),Io(e,1)}};to=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var r=ce();Me(t,e,134217728,r)}Io(e,134217728)}};Rl=function(e){if(e.tag===13){var t=dt(e),r=Ye(e,t);if(r!==null){var i=ce();Me(r,e,t,i)}Io(e,t)}};Il=function(){return z};Ml=function(e,t){var r=z;try{return z=e,t()}finally{z=r}};as=function(e,t,r){switch(t){case"input":if(es(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var s=ai(i);if(!s)throw Error(j(90));pl(i),es(i,s)}}}break;case"textarea":hl(e,r);break;case"select":t=r.value,t!=null&&Xt(e,!!r.multiple,t,!1)}};Sl=Po;kl=Dt;var zp={usingClientEntryPoint:!1,Events:[qn,Ut,ai,yl,jl,Po]},yn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bp={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cl(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{ri=yr.inject(Bp),Ue=yr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zp;ke.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ao(t))throw Error(j(200));return Ip(e,t,null,r)};ke.createRoot=function(e,t){if(!Ao(e))throw Error(j(299));var r=!1,i="",s=ru;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ro(e,1,!1,null,null,r,!1,i,s),e[Qe]=t.current,On(e.nodeType===8?e.parentNode:e),new Mo(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Cl(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Dt(e)};ke.hydrate=function(e,t,r){if(!gi(t))throw Error(j(200));return vi(null,e,t,!0,r)};ke.hydrateRoot=function(e,t,r){if(!Ao(e))throw Error(j(405));var i=r!=null&&r.hydratedSources||null,s=!1,o="",a=ru;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=nu(t,null,e,1,r??null,s,!1,o,a),e[Qe]=t.current,On(e),i)for(e=0;e<i.length;e++)r=i[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new fi(t)};ke.render=function(e,t,r){if(!gi(t))throw Error(j(200));return vi(null,e,t,!1,r)};ke.unmountComponentAtNode=function(e){if(!gi(e))throw Error(j(40));return e._reactRootContainer?(Dt(function(){vi(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};ke.unstable_batchedUpdates=Po;ke.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!gi(r))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return vi(e,t,r,!1,i)};ke.version="18.3.1-next-f1338f8080-20240426";function iu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iu)}catch(e){console.error(e)}}iu(),il.exports=ke;var _p=il.exports,Ja=_p;Xi.createRoot=Ja.createRoot,Xi.hydrateRoot=Ja.hydrateRoot;var Up={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Op=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hp=(e,t)=>{const r=w.forwardRef(({color:i="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:a,children:c,...l},d)=>w.createElement("svg",{ref:d,...Up,width:s,height:s,stroke:i,strokeWidth:a?Number(o)*24/Number(s):o,className:`lucide lucide-${Op(e)}`,...l},[...t.map(([h,v])=>w.createElement(h,v)),...(Array.isArray(c)?c:[c])||[]]));return r.displayName=`${e}`,r};var J=Hp;const Vp=J("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),su=J("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),$p=J("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Wp=J("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),Jp=J("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Xp=J("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),ou=J("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),Qp=J("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),Yp=J("Layers",[["polygon",{points:"12 2 2 7 12 12 22 7 12 2",key:"1b0ttc"}],["polyline",{points:"2 17 12 22 22 17",key:"imjtdl"}],["polyline",{points:"2 12 12 17 22 12",key:"5dexcv"}]]),Gp=J("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Us=J("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),Kp=J("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]),Zp=J("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]),qp=J("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),Os=J("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),au=J("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),em=J("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),lu=J("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),cu=J("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]),tm=J("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),nm=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),uu=J("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function rm(){const[e,t]=w.useState("home"),[r,i]=w.useState(!1),s=[{id:"home",label:"Home",icon:Qp},{id:"js-fundamentals",label:"JS Fundamentals",icon:Xp},{id:"js-basics",label:"JavaScript Basics",icon:su},{id:"react-core",label:"React Core",icon:uu},{id:"components",label:"Components",icon:Yp},{id:"hooks",label:"Hooks",icon:em},{id:"data-handling",label:"Data Handling",icon:$p},{id:"events-interactions",label:"Events & Interactions",icon:tm},{id:"navigation-routing",label:"Navigation & Routing",icon:Kp},{id:"styling-design",label:"Styling & Design",icon:Zp},{id:"html-css",label:"HTML & CSS",icon:ou},{id:"css-frameworks",label:"CSS Frameworks",icon:lu},{id:"figma-mapping",label:"Figma Mapping",icon:qp}];return n.jsxs("div",{className:"app",children:[n.jsx("header",{className:"header",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"header-content",children:[n.jsxs("h1",{className:"logo",children:[n.jsx(Vp,{className:"logo-icon"}),"React JS Cheatsheet"]}),n.jsx("p",{className:"subtitle",children:"For UX Designers with Figma Analogies"})]}),n.jsx("button",{className:"mobile-menu-toggle",onClick:()=>i(!r),children:r?n.jsx(nm,{className:"menu-icon"}):n.jsx(Gp,{className:"menu-icon"})})]})}),r&&n.jsx("div",{className:"mobile-menu-backdrop",onClick:()=>i(!1)}),n.jsx("nav",{className:`sidebar ${r?"mobile-open":""}`,children:n.jsx("div",{className:"nav-items",children:s.map(o=>{const a=o.icon;return n.jsxs("button",{className:`nav-item ${e===o.id?"active":""}`,onClick:()=>{t(o.id),i(!1)},children:[n.jsx(a,{className:"nav-icon"}),n.jsx("span",{children:o.label})]},o.id)})})}),n.jsx("main",{className:"main-content",children:n.jsxs("div",{className:"container",children:[e==="home"&&n.jsx(im,{}),e==="js-fundamentals"&&n.jsx(sm,{}),e==="js-basics"&&n.jsx(om,{}),e==="react-core"&&n.jsx(am,{}),e==="components"&&n.jsx(lm,{}),e==="hooks"&&n.jsx(cm,{}),e==="data-handling"&&n.jsx(um,{}),e==="events-interactions"&&n.jsx(dm,{}),e==="navigation-routing"&&n.jsx(mm,{}),e==="styling-design"&&n.jsx(pm,{}),e==="html-css"&&n.jsx(hm,{}),e==="css-frameworks"&&n.jsx(fm,{}),e==="figma-mapping"&&n.jsx(gm,{})]})})]})}function im(){return n.jsxs("div",{className:"section",children:[n.jsx("h1",{children:"Welcome to React JS Cheatsheet"}),n.jsx("p",{className:"lead",children:"A comprehensive guide to JavaScript and React concepts, explained through the lens of Figma and design thinking."}),n.jsxs("div",{className:"getting-started",children:[n.jsx("h2",{children:"🎯 How to Use This Cheatsheet"}),n.jsxs("div",{className:"steps",children:[n.jsxs("div",{className:"step",children:[n.jsx("div",{className:"step-number",children:"1"}),n.jsxs("div",{className:"step-content",children:[n.jsx("h4",{children:"Start with JavaScript Basics"}),n.jsx("p",{children:"Understand variables, objects, and functions through Figma analogies"})]})]}),n.jsxs("div",{className:"step",children:[n.jsx("div",{className:"step-number",children:"2"}),n.jsxs("div",{className:"step-content",children:[n.jsx("h4",{children:"Learn React Core Concepts"}),n.jsx("p",{children:"Discover how React components work like Figma components"})]})]}),n.jsxs("div",{className:"step",children:[n.jsx("div",{className:"step-number",children:"3"}),n.jsxs("div",{className:"step-content",children:[n.jsx("h4",{children:"Master Hooks and State"}),n.jsx("p",{children:"Learn to make your UI interactive like Figma prototypes"})]})]}),n.jsxs("div",{className:"step",children:[n.jsx("div",{className:"step-number",children:"4"}),n.jsxs("div",{className:"step-content",children:[n.jsx("h4",{children:"Build Real Projects"}),n.jsx("p",{children:"Apply your knowledge to create interactive prototypes"})]})]})]})]})]})}function sm(){w.useState(0);const[e,t]=w.useState({name:"John",age:25}),[r,i]=w.useState(""),[s,o]=w.useState(["red","blue","green"]),[a,c]=w.useState("Sarah"),[l,d]=w.useState("Sarah"),[h,v]=w.useState({name:"Sarah",age:28}),[f,S]=w.useState({name:"Sarah",age:28}),[x,k]=w.useState(["red","blue","green"]),[I,m]=w.useState(["red","blue","green"]),[u,p]=w.useState({name:"Alex",age:25,skills:["JavaScript","CSS"]}),[g,N]=w.useState({name:"John",age:30,role:"Developer"}),[E,T]=w.useState("");return n.jsxs("div",{className:"section",children:[n.jsx("h1",{children:"JavaScript Fundamentals"}),n.jsx("p",{children:"Core JavaScript concepts with interactive examples"}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Variables"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Variables are like text styles in Figma - they store values that you can reuse throughout your design."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`let variableName = value;
const constantName = value;
var oldWay = value;`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Variable declaration and assignment
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
}`,explanation:"Variables store data that can be used and modified throughout your code."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Variable Examples:"}),n.jsxs("div",{className:"result",children:["userName: ",n.jsx("span",{className:"code-output",children:"Sarah"}),n.jsx("br",{}),"userAge: ",n.jsx("span",{className:"code-output",children:"28"}),n.jsx("br",{}),"oldWay: ",n.jsx("span",{className:"code-output",children:"avoid this"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Change Variable:"}),n.jsx("input",{value:r,onChange:y=>i(y.target.value),placeholder:"Enter a new message"}),n.jsxs("div",{className:"result",children:["Message: ",r||"No message set"]})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Objects"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Objects are like component properties in Figma - they group related data together."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`const objectName = {
  key1: value1,
  key2: value2
};

objectName.key1;           // Access property
objectName["key2"];        // Bracket notation`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Creating an object
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
}`,explanation:"Objects group related data together using key-value pairs."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Demo:"}),n.jsx("div",{className:"output-content",children:n.jsx("div",{className:"demo-controls",children:n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"User Object:"}),n.jsxs("div",{className:"object-display",children:[n.jsxs("span",{children:["Name: ",e.name]}),n.jsxs("span",{children:["Age: ",e.age]})]}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>t(y=>({...y,age:y.age+1})),children:"Increment Age"}),n.jsx("button",{onClick:()=>t(y=>({...y,name:"Jane"})),children:"Change Name"})]})]})})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Functions"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Functions are like reusable actions in Figma - they perform specific tasks when called."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`function functionName(parameter) {
  return value;
}

const arrowFunction = (param) => value;

functionName(argument);     // Call function`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Function declaration
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
}`,explanation:"Functions are reusable blocks of code that perform specific tasks."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Demo:"}),n.jsx("div",{className:"output-content",children:n.jsx("div",{className:"demo-controls",children:n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Function Examples:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",placeholder:"Enter name",id:"greetInput",defaultValue:"Sarah"}),n.jsx("button",{onClick:()=>{const y=document.getElementById("greetInput").value;alert(`Hello, ${y}!`)},children:"Greet"})]}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",placeholder:"Width",id:"areaWidth",defaultValue:"5"}),n.jsx("input",{type:"number",placeholder:"Height",id:"areaHeight",defaultValue:"3"}),n.jsx("button",{onClick:()=>{const y=document.getElementById("areaWidth").value,A=document.getElementById("areaHeight").value;alert(`Area: ${y*A}`)},children:"Calculate Area"})]})]})})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Methods"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Methods are like built-in actions in Figma - they're functions that belong to objects."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`string.method();           // String methods
array.method();             // Array methods
object.method();            // Object methods

const obj = {
  methodName() {
    return value;
  }
};`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// String methods
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
}`,explanation:"Methods are functions that belong to objects and can access the object's data."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Array Methods:"}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>o(y=>[...y,"yellow"]),children:"Push Yellow"}),n.jsx("button",{onClick:()=>o(y=>y.slice(0,-1)),children:"Pop Last"}),n.jsx("button",{onClick:()=>o(y=>["purple",...y]),children:"Unshift Purple"})]}),n.jsxs("div",{className:"result",children:["Colors: [",s.join(", "),"]"]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"String Methods:"}),n.jsx("input",{type:"text",placeholder:"Enter text",id:"stringInput",defaultValue:"Hello World"}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>{const y=document.getElementById("stringInput").value;alert(y.toUpperCase())},children:"To Uppercase"}),n.jsx("button",{onClick:()=>{const y=document.getElementById("stringInput").value;alert(`Length: ${y.length}`)},children:"Get Length"})]})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Classes"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Classes are like component templates in Figma - they define the structure for creating multiple instances."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`class ClassName {
  constructor(parameter) {
    this.property = parameter;
  }
  
  methodName() {
    return value;
  }
}

const instance = new ClassName(value);`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Class definition
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
user1.changeRole("Senior Designer");`,explanation:"Classes are templates for creating objects with shared properties and methods."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Demo:"}),n.jsx("div",{className:"output-content",children:n.jsx("div",{className:"demo-controls",children:n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Class Instance:"}),n.jsxs("div",{className:"result",children:["Name: ",n.jsx("span",{className:"code-output",children:"Sarah"}),n.jsx("br",{}),"Role: ",n.jsx("span",{className:"code-output",children:"Designer"}),n.jsx("br",{}),"Greeting: ",n.jsx("span",{className:"code-output",children:"Hello, I'm Sarah"})]})]})})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Constructors & Properties"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Constructors are like component creation in Figma - they set up the initial properties when you create a new instance."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`class ClassName {
  constructor(parameter) {
    this.property = parameter;    // Instance property
  }
}

// Property access
instance.property;               // Direct access
instance["property"];           // Bracket notation

// Property assignment
instance.property = newValue;   // Change property value`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Constructor function
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
}`,explanation:"Constructors initialize object properties when creating new instances, while properties store data within objects."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"User Instance Properties:"}),n.jsxs("div",{className:"result",children:["Name: ",n.jsx("span",{className:"code-output",children:g.name}),n.jsx("br",{}),"Age: ",n.jsx("span",{className:"code-output",children:g.age}),n.jsx("br",{}),"Role: ",n.jsx("span",{className:"code-output",children:g.role}),n.jsx("br",{}),g.skills&&n.jsxs(n.Fragment,{children:["Skills: ",n.jsx("span",{className:"code-output",children:g.skills.join(", ")}),n.jsx("br",{})]})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Modify Properties:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{value:g.name,onChange:y=>N(A=>({...A,name:y.target.value})),placeholder:"Name"}),n.jsx("input",{type:"number",value:g.age,onChange:y=>N(A=>({...A,age:parseInt(y.target.value)||0})),placeholder:"Age"}),n.jsxs("select",{value:g.role,onChange:y=>N(A=>({...A,role:y.target.value})),children:[n.jsx("option",{value:"Developer",children:"Developer"}),n.jsx("option",{value:"Designer",children:"Designer"}),n.jsx("option",{value:"Manager",children:"Manager"}),n.jsx("option",{value:"Tester",children:"Tester"})]})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Add Skills:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{value:E,onChange:y=>T(y.target.value),placeholder:"Enter a skill"}),n.jsx("button",{onClick:()=>{E.trim()&&(N(y=>({...y,skills:[...y.skills||[],E.trim()]})),T(""))},children:"Add Skill"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Property Info:"}),n.jsxs("div",{className:"result",children:[g.name," is a ",g.age,"-year-old ",g.role,g.skills&&g.skills.length>0&&n.jsxs(n.Fragment,{children:[" with skills in ",g.skills.join(", ")]})]})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Events"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Events are like interactions in Figma prototypes - they respond to user actions."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`element.addEventListener('event', handler);

// In React JSX:
<button onClick={handleClick}>
  Click me
</button>

const handleClick = (event) => {
  // Handle event
};`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Event handling
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
// - mouseover: Mouse hovers over element`,explanation:"Events allow your code to respond to user interactions and system changes."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Event Examples:"}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>alert("Button clicked!"),children:"Click Event"}),n.jsx("button",{onMouseOver:()=>alert("Mouse over!"),children:"Mouse Over"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Input Event:"}),n.jsx("input",{type:"text",placeholder:"Type something...",onChange:y=>i(y.target.value)}),n.jsxs("div",{className:"result",children:["You typed: ",r]})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Parameters & Arguments"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Parameters are like input fields in Figma components - they define what data the function needs."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`function functionName(parameter1, parameter2) {
  // Function body
}

functionName(argument1, argument2);  // Call with arguments

function greet(name = "User") {     // Default parameter
  return "Hello, " + name;
}`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Parameters (in function definition)
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
console.log(greet("Sarah")); // "Hello, Sarah"`,explanation:"Parameters define what data a function expects, arguments are the actual values passed when calling the function."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Demo:"}),n.jsx("div",{className:"output-content",children:n.jsx("div",{className:"demo-controls",children:n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Calculate Total:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",placeholder:"Price",id:"priceInput",defaultValue:"100"}),n.jsx("input",{type:"number",placeholder:"Tax %",id:"taxInput",defaultValue:"10"}),n.jsx("input",{type:"number",placeholder:"Discount %",id:"discountInput",defaultValue:"20"}),n.jsx("button",{onClick:()=>{const y=parseFloat(document.getElementById("priceInput").value),A=parseFloat(document.getElementById("taxInput").value)/100,L=parseFloat(document.getElementById("discountInput").value)/100,ve=y*(1-L)*(1+A);alert(`Total: $${ve.toFixed(2)}`)},children:"Calculate"})]})]})})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Primitive vs Reference Data Types"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Primitives are like individual text elements in Figma, while references are like components - changing a component affects all instances."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Primitive types (copied by value)
let primitive = "value";
let copy = primitive;        // Independent copy

// Reference types (copied by reference)
let reference = { key: "value" };
let refCopy = reference;     // Same reference

// Creating true copies
let deepCopy = { ...reference };     // Spread operator
let arrayCopy = [...array];          // Array spread`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// PRIMITIVE TYPES (copied by value)
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
let userDeepCopy2 = Object.assign({}, user); // Object.assign`,explanation:"Primitive types are copied by value, while reference types are copied by reference. This affects how data is shared and modified."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Primitive Types (Copied by Value):"}),n.jsxs("div",{className:"result",children:[n.jsxs("div",{children:["Original name: ",n.jsx("span",{className:"code-output",children:a})]}),n.jsxs("div",{children:["Copy name: ",n.jsx("span",{className:"code-output",children:l})]})]}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>{d("Jane")},children:'Change Copy to "Jane"'}),n.jsx("button",{onClick:()=>{c("Sarah"),d("Sarah")},children:"Reset Both"})]}),n.jsx("div",{className:"result",style:{fontSize:"12px",color:"#94a3b8"},children:"Notice: Changing the copy doesn't affect the original"})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Reference Types (Copied by Reference):"}),n.jsxs("div",{className:"result",children:[n.jsxs("div",{children:["Original user: ",n.jsx("span",{className:"code-output",children:h.name})]}),n.jsxs("div",{children:["Copy user: ",n.jsx("span",{className:"code-output",children:f.name})]})]}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>{S(y=>({...y,name:"Jane"}))},children:'Change Copy to "Jane"'}),n.jsx("button",{onClick:()=>{v({name:"Sarah",age:28}),S({name:"Sarah",age:28})},children:"Reset Both"})]}),n.jsx("div",{className:"result",style:{fontSize:"12px",color:"#ef4444"},children:"Notice: Changing the copy affects the original!"})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Creating True Copies:"}),n.jsxs("div",{className:"result",children:[n.jsxs("div",{children:["Original array: [",x.join(", "),"]"]}),n.jsxs("div",{children:["Spread copy: [",I.join(", "),"]"]})]}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>{m(y=>[...y,"yellow"])},children:'Add "yellow" to spread copy'}),n.jsx("button",{onClick:()=>{k(["red","blue","green"]),m(["red","blue","green"])},children:"Reset Arrays"})]}),n.jsx("div",{className:"result",style:{fontSize:"12px",color:"#10b981"},children:"Notice: Spread operator creates independent copies"})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"React State Implications:"}),n.jsxs("div",{className:"result",children:[n.jsxs("div",{children:["User state: ",u.name," (age: ",u.age,")"]}),n.jsxs("div",{children:["Skills: [",u.skills.join(", "),"]"]})]}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>{u.age=u.age+1,p(u)},children:"Wrong: Direct Mutation"}),n.jsx("button",{onClick:()=>{p(y=>({...y,age:y.age+1}))},children:"Correct: New Object"}),n.jsx("button",{onClick:()=>{p(y=>({...y,skills:[...y.skills,"React"]}))},children:"Add Skill"})]}),n.jsx("div",{className:"result",style:{fontSize:"12px",color:"#f59e0b"},children:`Try the "Wrong" button - notice React doesn't update! Then try "Correct" buttons.`})]})]})})]})]})]})]})}function om(){const[e,t]=w.useState(0),[r,i]=w.useState("Designer"),[s,o]=w.useState(!0);w.useState(["red","blue","green"]);const[a,c]=w.useState({name:"Sarah",role:"UX Designer"}),[l,d]=w.useState({showMessage:!1,showCount:!1,hasError:!1,count:5});return n.jsxs("div",{className:"section",children:[n.jsx("h1",{children:"JavaScript Basics"}),n.jsx("p",{children:"Core JavaScript concepts explained with Figma analogies"}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Variables & State"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Variables are like text styles or color styles in Figma - they store reusable values."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// React state
const [state, setState] = useState(initialValue);

// Examples:
const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState('');
const [isVisible, setIsVisible] = useState(true);

// Objects and arrays
const user = { name: 'Sarah', role: 'Designer' };
const colors = ['red', 'blue', 'green'];`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// React state (like dynamic properties in Figma)
const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState('Designer');
const [isVisible, setIsVisible] = useState(true);

// Objects (like component properties in Figma)
const user = { name: 'Sarah', role: 'UX Designer' };

// Arrays (like color palettes in Figma)
const colors = ['red', 'blue', 'green'];`,explanation:"State variables can change over time, just like how you can update text or colors in Figma."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsxs("label",{children:["Counter: ",e]}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>t(e-1),children:n.jsx(Us,{size:16})}),n.jsx("button",{onClick:()=>t(e+1),children:n.jsx(Os,{size:16})}),n.jsx("button",{onClick:()=>t(0),children:n.jsx(au,{size:16})})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"User Name:"}),n.jsx("input",{value:r,onChange:h=>i(h.target.value),placeholder:"Enter name"})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Visibility:"}),n.jsxs("button",{onClick:()=>o(!s),children:[s?n.jsx(Jp,{size:16}):n.jsx(Wp,{size:16}),s?" Hide":" Show"]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"User Object:"}),n.jsxs("div",{className:"object-display",children:[n.jsxs("span",{children:["Name: ",a.name]}),n.jsxs("span",{children:["Role: ",a.role]})]})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Arrow Functions"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Arrow functions are like quick actions in Figma - shorter, more concise ways to perform tasks."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Traditional function
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

const calculateArea = (width, height) => width * height;`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Traditional function (like a full plugin in Figma)
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
console.log(getRandomNumber());    // 0.123...`,explanation:"Arrow functions provide a shorter, more modern syntax for writing functions in JavaScript."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Calculate Area:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",placeholder:"Width",id:"width",defaultValue:"10"}),n.jsx("input",{type:"number",placeholder:"Height",id:"height",defaultValue:"5"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("width").value,v=document.getElementById("height").value;alert("Area: "+h*v)},children:"Calculate"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Double Number:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",placeholder:"Number",id:"doubleInput",defaultValue:"8"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("doubleInput").value;alert(`Double: ${h*2}`)},children:"Double"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Random Number:"}),n.jsx("button",{onClick:()=>alert(`Random: ${Math.random().toFixed(3)}`),children:"Generate"})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Ternary Operator"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Ternary operators are like conditional visibility in Figma - show one thing if true, another if false."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Ternary operator
condition ? valueIfTrue : valueIfFalse

// Examples:
const message = isLoggedIn ? 'Welcome back!' : 'Please log in';
const status = user.isActive ? 'Online' : 'Offline';
const buttonText = isLoading ? 'Loading...' : 'Submit';

// In JSX:
{isVisible ? <Component /> : null}
{user ? <UserProfile /> : <LoginForm />}`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Ternary operator: condition ? valueIfTrue : valueIfFalse
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
console.log(status);   // "Online" or "Last seen recently" or "Offline"`,explanation:"Ternary operators provide a concise way to write conditional logic in a single line."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"User Role:"}),n.jsxs("select",{id:"userRole",defaultValue:"Designer",onChange:h=>{const f=h.target.value==="Designer"?"Show design tools":"Show general tools";document.getElementById("roleMessage").textContent=f},children:[n.jsx("option",{value:"Designer",children:"Designer"}),n.jsx("option",{value:"Developer",children:"Developer"}),n.jsx("option",{value:"Manager",children:"Manager"})]}),n.jsxs("div",{className:"result",children:["Message: ",n.jsx("span",{id:"roleMessage",children:"Show design tools"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Loading State:"}),n.jsx("div",{className:"button-group",children:n.jsx("button",{onClick:()=>{const h=document.getElementById("loadingBtn");h.textContent=h.textContent==="Submit"?"Loading...":"Submit",h.style.backgroundColor=h.textContent==="Loading..."?"#f59e0b":"#3b82f6"},id:"loadingBtn",style:{backgroundColor:"#3b82f6"},children:"Submit"})})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Theme Toggle:"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("themeDisplay");h.textContent=h.textContent==="Light"?"Dark":"Light",h.style.color=h.textContent==="Dark"?"#fbbf24":"#1f2937"},children:"Toggle Theme"}),n.jsxs("div",{className:"result",children:["Current: ",n.jsx("span",{id:"themeDisplay",style:{color:"#1f2937"},children:"Light"})]})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Destructuring"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Destructuring is like extracting specific properties from a component in Figma - you pull out just what you need."]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Object destructuring (like extracting component properties)
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
console.log(tertiary);  // "green"`,explanation:"Destructuring allows you to extract values from objects and arrays into separate variables."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Output:"}),n.jsxs("div",{className:"output-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"name:"})," ",n.jsx("span",{className:"code-output",children:"Sarah"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"role:"})," ",n.jsx("span",{className:"code-output",children:"UX Designer"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"firstColor:"})," ",n.jsx("span",{className:"code-output",children:"red"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"tertiary:"})," ",n.jsx("span",{className:"code-output",children:"green"})]})]})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Template Literals"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Template literals are like smart text in Figma - they combine static text with dynamic values."]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Template literals (like smart text in Figma)
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

console.log(message2);  // "Hello Sarah, you have 5 tasks"`,explanation:"Template literals provide a cleaner way to create strings with embedded expressions."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Output:"}),n.jsxs("div",{className:"output-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"message2:"})," ",n.jsx("span",{className:"code-output",children:"Hello Sarah, you have 5 tasks"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"status:"})," ",n.jsx("span",{className:"code-output",children:"User is logged in"})]})]})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Array Methods"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Array methods are like layer operations in Figma - you can filter, transform, and organize your data."]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Array methods (like layer operations in Figma)
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
);`,explanation:"Array methods provide powerful ways to manipulate and transform data collections."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Output:"}),n.jsxs("div",{className:"output-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"taskTitles:"})," ",n.jsx("span",{className:"code-output",children:'["Design homepage", "Create wireframes", "Build prototype"]'})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"highPriorityTasks:"})," ",n.jsx("span",{className:"code-output",children:"2 items"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"totalTasks:"})," ",n.jsx("span",{className:"code-output",children:"3"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"completedCount:"})," ",n.jsx("span",{className:"code-output",children:"1"})]})]})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Logical AND (&&) Operator"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Logical AND is like conditional visibility in Figma - only show an element when a condition is true."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Logical AND operator
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
{name && <h1>Hello, {name}!</h1>}`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Logical AND examples
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
}`,explanation:"The logical AND operator (&&) is perfect for conditional rendering - it only renders the right side when the left side is truthy."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Logical AND Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Toggle Conditions:"}),n.jsxs("div",{className:"button-group",children:[n.jsxs("button",{onClick:()=>d(h=>({...h,showMessage:!h.showMessage})),children:[l.showMessage?"Hide":"Show"," Message"]}),n.jsxs("button",{onClick:()=>d(h=>({...h,showCount:!h.showCount})),children:[l.showCount?"Hide":"Show"," Count"]}),n.jsxs("button",{onClick:()=>d(h=>({...h,hasError:!h.hasError})),children:[l.hasError?"Clear":"Show"," Error"]})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Conditional Elements:"}),n.jsxs("div",{className:"result",children:[l.showMessage&&n.jsx("div",{style:{color:"#10b981",marginBottom:"8px"},children:"✅ This message only shows when condition is true"}),l.showCount&&n.jsxs("div",{style:{color:"#3b82f6",marginBottom:"8px"},children:["📊 Count: ",l.count]}),l.hasError&&n.jsx("div",{style:{color:"#ef4444",marginBottom:"8px"},children:"❌ Error: Something went wrong!"}),!l.showMessage&&!l.showCount&&!l.hasError&&n.jsx("div",{style:{color:"#94a3b8"},children:"No conditions are true - nothing to show"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Multiple Conditions:"}),n.jsx("div",{className:"result",children:l.showMessage&&l.showCount&&n.jsx("div",{style:{color:"#8b5cf6"},children:"🎉 Both conditions are true!"})})]})]})})]})]})]})]})}function am(){return n.jsxs("div",{className:"section",children:[n.jsx("h1",{children:"React Core Concepts"}),n.jsx("p",{children:"Understanding React fundamentals through design thinking"}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"What is React?"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," React is like Figma's component system on steroids - it's a library for building reusable UI components."]}),n.jsx("p",{children:"React is a JavaScript library for building user interfaces. It's like having a super-powered component system where you can create interactive, dynamic interfaces that respond to user actions and data changes."})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"JSX - JavaScript XML"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," JSX is like writing design specs in Figma - it combines structure (HTML) with logic (JavaScript)."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// JSX combines HTML with JavaScript
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
// 4. Must return single parent element`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// JSX combines HTML-like syntax with JavaScript
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
// 4. Use {} for JavaScript expressions`,explanation:"JSX allows you to write HTML-like code inside JavaScript, making it easier to create and manage UI components."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive JSX Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"User Name:"}),n.jsx("input",{type:"text",placeholder:"Enter name",id:"jsxUserName",defaultValue:"Sarah",onChange:e=>{const t=e.target.value;document.getElementById("jsxNameDisplay").textContent=t||"User"}})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Task Count:"}),n.jsx("input",{type:"number",placeholder:"Number of tasks",id:"jsxTaskCount",defaultValue:"5",onChange:e=>{const t=e.target.value;document.getElementById("jsxTaskDisplay").textContent=t||"0"}})]}),n.jsx("div",{className:"jsx-preview",children:n.jsxs("div",{className:"card",children:[n.jsxs("h2",{children:["Welcome, ",n.jsx("span",{id:"jsxNameDisplay",children:"Sarah"}),"!"]}),n.jsxs("p",{children:["You have ",n.jsx("span",{id:"jsxTaskDisplay",children:"5"})," tasks remaining"]}),n.jsx("button",{onClick:()=>alert("Task completed!"),children:"Complete Task"})]})})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Component Types"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Different component types are like different types of Figma components - some are simple, others are complex."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Function Component (Modern)
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
});`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// 1. Function Components (Modern, recommended)
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
));`,explanation:"Function components are the modern way to write React components. They're simpler and work better with hooks."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Component Types:"}),n.jsxs("div",{className:"output-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Function:"})," ",n.jsx("span",{className:"code-output",children:"Modern, hooks-friendly"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Arrow Function:"})," ",n.jsx("span",{className:"code-output",children:"Concise syntax"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Class:"})," ",n.jsx("span",{className:"code-output",children:"Legacy, avoid"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Pure:"})," ",n.jsx("span",{className:"code-output",children:"Performance optimized"})]})]})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Fragments & Multiple Elements"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Fragments are like grouping elements in Figma without adding an extra container - you can return multiple items without a wrapper."]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Without Fragment (adds extra div)
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
}`,explanation:"Fragments allow you to return multiple elements without adding an extra DOM node, keeping your HTML clean."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Fragment Types:"}),n.jsxs("div",{className:"output-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Empty Tags:"})," ",n.jsx("span",{className:"code-output",children:"<> </>"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"React.Fragment:"})," ",n.jsx("span",{className:"code-output",children:"Explicit syntax"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Arrays:"})," ",n.jsx("span",{className:"code-output",children:"With keys"})]})]})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Conditional Rendering"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Conditional rendering is like using visibility settings in Figma - show different content based on conditions."]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// 1. If/else with ternary operator
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
}`,explanation:"Conditional rendering allows you to show different UI based on conditions, just like how you control visibility in Figma."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Conditional Patterns:"}),n.jsxs("div",{className:"output-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Ternary:"})," ",n.jsx("span",{className:"code-output",children:"condition ? A : B"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Logical AND:"})," ",n.jsx("span",{className:"code-output",children:"condition && element"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Early Return:"})," ",n.jsx("span",{className:"code-output",children:"if (condition) return"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Switch:"})," ",n.jsx("span",{className:"code-output",children:"Multiple conditions"})]})]})]})]})]})]})}function lm(){const[e,t]=w.useState("Click me"),[r,i]=w.useState("primary"),[s,o]=w.useState("medium"),[a,c]=w.useState(!1),[l,d]=w.useState({name:"John Doe",email:"john@example.com",id:1}),[h,v]=w.useState("My Container"),[f,S]=w.useState("This is some content"),[x,k]=w.useState(null),[I,m]=w.useState(!1),[u,p]=w.useState({name:"",email:""});return n.jsxs("div",{className:"section",children:[n.jsx("h1",{children:"React Components"}),n.jsx("p",{children:"Building reusable UI pieces like Figma components"}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Props Deep Dive"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Props are like component properties in Figma - they allow you to customize instances with different values."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Component with props
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
};`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// 1. Basic props
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
}`,explanation:"Props are the primary way to pass data and functions to components, making them reusable and customizable."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Props Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Button Props:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{value:e,onChange:g=>t(g.target.value),placeholder:"Button text"}),n.jsxs("select",{value:r,onChange:g=>i(g.target.value),children:[n.jsx("option",{value:"primary",children:"Primary"}),n.jsx("option",{value:"secondary",children:"Secondary"}),n.jsx("option",{value:"danger",children:"Danger"})]}),n.jsxs("select",{value:s,onChange:g=>o(g.target.value),children:[n.jsx("option",{value:"small",children:"Small"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"large",children:"Large"})]}),n.jsx("button",{onClick:()=>c(!a),children:a?"Enable":"Disable"})]}),n.jsx("div",{className:"result",children:n.jsx("button",{className:`btn btn-${r} btn-${s} ${a?"disabled":""}`,disabled:a,onClick:()=>alert("Button clicked!"),style:{backgroundColor:r==="primary"?"#3b82f6":r==="secondary"?"#6b7280":"#ef4444",padding:s==="small"?"4px 8px":s==="medium"?"8px 16px":"12px 24px",opacity:a?.6:1,cursor:a?"not-allowed":"pointer"},children:e})})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"User Card Props:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{value:l.name,onChange:g=>d(N=>({...N,name:g.target.value})),placeholder:"User name"}),n.jsx("input",{value:l.email,onChange:g=>d(N=>({...N,email:g.target.value})),placeholder:"User email"})]}),n.jsx("div",{className:"result",children:n.jsxs("div",{className:"user-card",style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[n.jsx("h3",{style:{margin:"0 0 8px 0"},children:l.name}),n.jsx("p",{style:{margin:"0 0 12px 0",color:"#6b7280"},children:l.email}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>alert("Edit user: "+l.id),style:{marginRight:"8px"},children:"Edit"}),n.jsx("button",{onClick:()=>alert("Delete user: "+l.id),style:{backgroundColor:"#ef4444"},children:"Delete"})]})]})})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Container with Children:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{value:h,onChange:g=>v(g.target.value),placeholder:"Container title"}),n.jsx("input",{value:f,onChange:g=>S(g.target.value),placeholder:"Container content"})]}),n.jsx("div",{className:"result",children:n.jsxs("div",{className:"container",style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[h&&n.jsx("h2",{style:{margin:"0 0 12px 0"},children:h}),n.jsx("div",{children:f})]})})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Component Composition Patterns"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Component composition is like building complex designs in Figma by combining and nesting simple components."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Children composition
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
);`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// 1. Children composition
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
};`,explanation:"Component composition patterns help you build flexible, reusable component systems."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Composition Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Layout Composition:"}),n.jsx("div",{className:"result",children:n.jsxs("div",{className:"layout",style:{border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[n.jsx("header",{style:{backgroundColor:"#f3f4f6",padding:"12px",borderBottom:"1px solid #e5e7eb"},children:n.jsx("h3",{style:{margin:0},children:"Header Content"})}),n.jsxs("div",{style:{display:"flex"},children:[n.jsxs("aside",{style:{backgroundColor:"#f9fafb",padding:"12px",width:"200px",borderRight:"1px solid #e5e7eb"},children:[n.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Sidebar"}),n.jsxs("ul",{style:{margin:0,paddingLeft:"16px"},children:[n.jsx("li",{children:"Menu Item 1"}),n.jsx("li",{children:"Menu Item 2"}),n.jsx("li",{children:"Menu Item 3"})]})]}),n.jsxs("main",{style:{padding:"16px",flex:1},children:[n.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Main Content"}),n.jsx("p",{children:"This is the main content area with flexible layout composition."})]})]}),n.jsx("footer",{style:{backgroundColor:"#f3f4f6",padding:"12px",borderTop:"1px solid #e5e7eb",textAlign:"center"},children:"Footer Content"})]})})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Data Fetcher (Render Props):"}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>{m(!0),setTimeout(()=>{k({message:"Data loaded successfully!",timestamp:new Date().toLocaleTimeString()}),m(!1)},1500)},children:"Simulate Data Fetch"}),n.jsx("button",{onClick:()=>{k(null),m(!1)},children:"Clear Data"})]}),n.jsx("div",{className:"result",children:I?n.jsx("div",{style:{color:"#f59e0b"},children:"🔄 Loading data..."}):x?n.jsxs("div",{style:{color:"#10b981"},children:["✅ ",x.message,n.jsx("br",{}),n.jsxs("small",{children:["Time: ",x.timestamp]})]}):n.jsx("div",{style:{color:"#6b7280"},children:"No data loaded"})})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Compound Form Components:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{value:u.name,onChange:g=>p(N=>({...N,name:g.target.value})),placeholder:"Name"}),n.jsx("input",{value:u.email,onChange:g=>p(N=>({...N,email:g.target.value})),placeholder:"Email"})]}),n.jsx("div",{className:"result",children:n.jsxs("form",{onSubmit:g=>{g.preventDefault(),alert("Form submitted: "+JSON.stringify(u))},style:{border:"1px solid #e5e7eb",padding:"16px",borderRadius:"8px",marginTop:"8px"},children:[n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px"},children:"Name:"}),n.jsx("input",{value:u.name,onChange:g=>p(N=>({...N,name:g.target.value})),style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #d1d5db"}})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px"},children:"Email:"}),n.jsx("input",{value:u.email,onChange:g=>p(N=>({...N,email:g.target.value})),style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #d1d5db"}})]}),n.jsx("button",{type:"submit",style:{backgroundColor:"#3b82f6",color:"white",padding:"8px 16px",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Submit Form"})]})})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Component Best Practices"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Component best practices are like design system guidelines in Figma - they ensure consistency and maintainability."]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// 1. Single responsibility
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
}`,explanation:"Following best practices ensures your components are maintainable, reusable, and performant."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Best Practices:"}),n.jsxs("div",{className:"output-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Single Responsibility:"})," ",n.jsx("span",{className:"code-output",children:"One job per component"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Clean Props:"})," ",n.jsx("span",{className:"code-output",children:"Logical interfaces"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Consistent Naming:"})," ",n.jsx("span",{className:"code-output",children:"Clear conventions"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Error Handling:"})," ",n.jsx("span",{className:"code-output",children:"Error boundaries"})]})]})]})]})]})]})}function cm(){const[e,t]=w.useState(0),[r,i]=w.useState({name:"",email:""}),[s,o]=w.useState(""),[a,c]=w.useState([]),[l,d]=w.useState("React Cheatsheet"),[h,v]=w.useState(0),[f,S]=w.useState({width:window.innerWidth,height:window.innerHeight});return w.useEffect(()=>{document.title=l},[l]),w.useEffect(()=>{const x=()=>{S({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),n.jsxs("div",{className:"section",children:[n.jsx("h1",{children:"React Hooks"}),n.jsx("p",{children:"Managing state and side effects in components"}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"useState Hook Deep Dive"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," useState is like having interactive properties in Figma - values that can change and update the UI."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`const [state, setState] = useState(initialValue);

// Examples:
const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [user, setUser] = useState({ name: '', email: '' });
const [todos, setTodos] = useState([]);`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// 1. Basic useState
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
}`,explanation:"useState is the most fundamental hook for managing component state. It returns the current state and a function to update it."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive useState Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsxs("label",{children:["Counter: ",e]}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>t(e-1),children:n.jsx(Us,{size:16})}),n.jsx("button",{onClick:()=>t(e+1),children:n.jsx(Os,{size:16})}),n.jsx("button",{onClick:()=>t(0),children:n.jsx(au,{size:16})})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"User Form:"}),n.jsx("input",{value:r.name,onChange:x=>i(k=>({...k,name:x.target.value})),placeholder:"Name"}),n.jsx("input",{value:r.email,onChange:x=>i(k=>({...k,email:x.target.value})),placeholder:"Email"}),n.jsxs("div",{className:"result",children:["Name: ",r.name||"Not set"," | Email: ",r.email||"Not set"]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Todo List:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{value:s,onChange:x=>o(x.target.value),placeholder:"Add todo"}),n.jsx("button",{onClick:()=>{s.trim()&&(c(x=>[...x,{id:Date.now(),text:s,completed:!1}]),o(""))},children:"Add"})]}),n.jsx("ul",{className:"todo-list",children:a.map(x=>n.jsx("li",{onClick:()=>c(k=>k.map(I=>I.id===x.id?{...I,completed:!I.completed}:I)),style:{textDecoration:x.completed?"line-through":"none",cursor:"pointer"},children:x.text},x.id))})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"useEffect Hook Deep Dive"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," useEffect is like auto-layout or smart animate in Figma - it runs code when something changes."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`useEffect(() => {
  // Effect code
}, [dependencies]);

// Examples:
useEffect(() => {}, []);           // Run once
useEffect(() => {}, [dep]);        // Run when dep changes
useEffect(() => {
  return () => cleanup();          // Cleanup function
}, []);`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// 1. Basic useEffect (runs after every render)
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
}`,explanation:"useEffect handles side effects in functional components, such as data fetching, subscriptions, or DOM manipulation."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive useEffect Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Document Title Effect:"}),n.jsx("input",{value:l,onChange:x=>d(x.target.value),placeholder:"Enter page title"}),n.jsxs("div",{className:"result",children:["Current title: ",document.title]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Counter with Effect:"}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>v(h-1),children:n.jsx(Us,{size:16})}),n.jsx("span",{style:{padding:"8px 16px",background:"rgba(255,255,255,0.1)",borderRadius:"4px"},children:h}),n.jsx("button",{onClick:()=>v(h+1),children:n.jsx(Os,{size:16})})]}),n.jsxs("div",{className:"result",children:["Effect runs when count changes: ",h%2===0?"Even":"Odd"]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Window Size Effect:"}),n.jsxs("div",{className:"result",children:["Window size: ",f.width," x ",f.height]})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Additional Hooks"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Additional hooks are like specialized tools in Figma - each serves a specific purpose."]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// 1. useRef - Access DOM elements
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
}`,explanation:"Additional hooks provide specialized functionality for different use cases in React applications."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Additional Hooks:"}),n.jsxs("div",{className:"output-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"useRef:"})," ",n.jsx("span",{className:"code-output",children:"DOM access"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"useMemo:"})," ",n.jsx("span",{className:"code-output",children:"Memoize values"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"useCallback:"})," ",n.jsx("span",{className:"code-output",children:"Memoize functions"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"useReducer:"})," ",n.jsx("span",{className:"code-output",children:"Complex state"})]})]})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Custom Hooks"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Custom hooks are like creating your own plugins in Figma - reusable logic that can be shared between components."]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// 1. Basic custom hook
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
}`,explanation:"Custom hooks let you extract and reuse stateful logic between components, making your code more modular and reusable."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Custom Hook Benefits:"}),n.jsxs("div",{className:"output-content",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Reusability:"})," ",n.jsx("span",{className:"code-output",children:"Share logic"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Cleaner Components:"})," ",n.jsx("span",{className:"code-output",children:"Less complexity"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Testing:"})," ",n.jsx("span",{className:"code-output",children:"Easier to test"})]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Composition:"})," ",n.jsx("span",{className:"code-output",children:"Combine hooks"})]})]})]})]})]})]})}function um(){const[e,t]=w.useState([{id:1,title:"Design homepage",completed:!1,category:"design"},{id:2,title:"Create wireframes",completed:!0,category:"design"},{id:3,title:"Build prototype",completed:!1,category:"development"},{id:4,title:"Write tests",completed:!1,category:"testing"},{id:5,title:"Deploy app",completed:!1,category:"deployment"}]),[r,i]=w.useState("all"),[s,o]=w.useState(""),[a,c]=w.useState({name:"Sarah",isAdmin:!1,loading:!1,error:null}),[l,d]=w.useState({name:"",email:""}),[h,v]=w.useState(!1),[f,S]=w.useState(!1),[x,k]=w.useState(!1),[I,m]=w.useState(0);return n.jsxs("div",{className:"section",children:[n.jsx("h1",{children:"Data Handling"}),n.jsx("p",{children:"Working with dynamic data and lists"}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Mapping Arrays"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," map() is like duplicating components in Figma - you create multiple instances from a list."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`array.map(item => (
  <Component key={item.id}>
    {item.property}
  </Component>
));

// Examples:
items.map(item => <li key={item.id}>{item.name}</li>);
users.map(user => <UserCard key={user.id} user={user} />);`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Mapping over arrays (like duplicating components in Figma)
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
}`,explanation:"map() transforms each item in an array into a React element, creating a list of components from your data."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Array Mapping:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Task List (Mapped from Array):"}),n.jsx("ul",{className:"todo-list",children:e.map(u=>n.jsxs("li",{onClick:()=>t(p=>p.map(g=>g.id===u.id?{...g,completed:!g.completed}:g)),style:{textDecoration:u.completed?"line-through":"none",cursor:"pointer",opacity:u.completed?.6:1},children:[u.title," ",u.completed&&"✓"]},u.id))})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Add New Task:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{value:s,onChange:u=>o(u.target.value),placeholder:"Enter task title"}),n.jsx("button",{onClick:()=>{s.trim()&&(t(u=>[...u,{id:Date.now(),title:s,completed:!1,category:"general"}]),o(""))},children:"Add Task"})]})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Filtering Data"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," filter() is like using the layers panel to show/hide elements based on criteria."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`array.filter(item => condition);

// Examples:
items.filter(item => item.completed);
users.filter(user => user.isActive);
tasks.filter(task => task.category === 'design');

// Combined with map:
array.filter(item => condition).map(item => <Component />);`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Filtering data (like showing/hiding layers in Figma)
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
}`,explanation:"filter() creates a new array with only the elements that pass a test, perfect for creating filtered views of your data."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Data Filtering:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Filter by Category:"}),n.jsxs("select",{value:r,onChange:u=>i(u.target.value),children:[n.jsx("option",{value:"all",children:"All Tasks"}),n.jsx("option",{value:"design",children:"Design"}),n.jsx("option",{value:"development",children:"Development"}),n.jsx("option",{value:"testing",children:"Testing"}),n.jsx("option",{value:"deployment",children:"Deployment"}),n.jsx("option",{value:"general",children:"General"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Filtered Tasks:"}),n.jsx("ul",{className:"todo-list",children:e.filter(u=>r==="all"||u.category===r).map(u=>n.jsxs("li",{style:{opacity:u.completed?.6:1},children:[u.title," (",u.category,") ",u.completed&&"✓"]},u.id))}),n.jsxs("div",{className:"result",children:["Showing ",e.filter(u=>r==="all"||u.category===r).length," of ",e.length," tasks"]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Filter by Status:"}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>i("completed"),children:"Show Completed"}),n.jsx("button",{onClick:()=>i("pending"),children:"Show Pending"}),n.jsx("button",{onClick:()=>i("all"),children:"Show All"})]}),n.jsxs("div",{className:"result",children:[r==="completed"&&e.filter(u=>u.completed).length+" completed tasks",r==="pending"&&e.filter(u=>!u.completed).length+" pending tasks",r==="all"&&e.length+" total tasks"]})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Conditional Rendering"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Conditional rendering is like using visibility settings in Figma - showing/hiding elements based on conditions."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}

// Examples:
{isLoading && <Spinner />}
{user ? <UserProfile /> : <LoginForm />}
{items.length > 0 ? <ItemList /> : <EmptyState />}`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Conditional rendering (like visibility settings in Figma)
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
}`,explanation:"Conditional rendering allows you to show different UI based on conditions, just like how you control visibility in Figma."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Conditional Rendering:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"User Role Toggle:"}),n.jsx("div",{className:"button-group",children:n.jsx("button",{onClick:()=>c(u=>({...u,isAdmin:!u.isAdmin})),style:{backgroundColor:a.isAdmin?"#10b981":"#6b7280"},children:a.isAdmin?"Admin Mode":"User Mode"})})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Dashboard Preview:"}),n.jsx("div",{className:"jsx-preview",children:n.jsxs("div",{className:"card",children:[n.jsxs("h2",{children:["Welcome, ",a.name,"!"]}),a.isAdmin?n.jsxs("div",{style:{background:"#fef3c7",padding:"12px",borderRadius:"4px",border:"1px solid #f59e0b"},children:[n.jsx("strong",{children:"Admin Panel:"})," You have full access to all features"]}):n.jsxs("div",{style:{background:"#dbeafe",padding:"12px",borderRadius:"4px",border:"1px solid #3b82f6"},children:[n.jsx("strong",{children:"User Panel:"})," Limited access to basic features"]}),a.loading&&n.jsx("div",{style:{background:"#f3f4f6",padding:"12px",borderRadius:"4px",textAlign:"center"},children:"⏳ Loading..."}),a.error&&n.jsxs("div",{style:{background:"#fee2e2",padding:"12px",borderRadius:"4px",border:"1px solid #ef4444",color:"#dc2626"},children:["Error: ",a.error]})]})})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Simulate States:"}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>c(u=>({...u,loading:!u.loading})),children:a.loading?"Stop Loading":"Start Loading"}),n.jsx("button",{onClick:()=>c(u=>({...u,error:u.error?null:"Something went wrong!"})),children:a.error?"Clear Error":"Show Error"})]})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Key-Value Pairs & Object Manipulation"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Key-value pairs are like component properties in Figma - each property has a name (key) and a value that can be changed."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`const object = {
  key: value,
  property: data
};

object.key;              // Access
object["key"];           // Bracket notation
object.newKey = value;   // Add property
const { key } = object;  // Destructuring`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Key-value pairs in objects (like Figma component properties)
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
const userWithNewProps = { ...user, department: "Design" };`,explanation:"Objects are collections of key-value pairs, where each key is a string and each value can be any data type. This is fundamental for managing state and data in React."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Object Manipulation:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"User Object:"}),n.jsx("div",{className:"result",children:n.jsx("pre",{style:{fontSize:"12px",textAlign:"left"},children:JSON.stringify(a,null,2)})})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Update User Properties:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{placeholder:"New name",onKeyPress:u=>{u.key==="Enter"&&u.target.value.trim()&&(c(p=>({...p,name:u.target.value})),u.target.value="")}}),n.jsx("button",{onClick:()=>c(u=>({...u,isAdmin:!u.isAdmin})),children:"Toggle Admin"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Add New Properties:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{placeholder:"Property name",id:"propName"}),n.jsx("input",{placeholder:"Property value",id:"propValue"}),n.jsx("button",{onClick:()=>{const u=document.getElementById("propName").value,p=document.getElementById("propValue").value;u&&p&&(c(g=>({...g,[u]:p})),document.getElementById("propName").value="",document.getElementById("propValue").value="")},children:"Add Property"})]})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Button State Control"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Button states are like component variants in Figma - different visual states (normal, hover, disabled) for the same component."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`<button 
  disabled={isDisabled}
  onClick={handleClick}
  style={{ opacity: isDisabled ? 0.6 : 1 }}
>
  {isLoading ? 'Loading...' : 'Click me'}
</button>

// State variables:
const [isDisabled, setIsDisabled] = useState(false);
const [isLoading, setIsLoading] = useState(false);`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Button state control (like Figma component variants)
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
}`,explanation:"Button state control involves managing different states (enabled, disabled, loading) and providing visual feedback to users based on the current state."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Button States:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Form Validation Demo:"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{placeholder:"Name",value:l.name,onChange:u=>d(p=>({...p,name:u.target.value}))}),n.jsx("input",{placeholder:"Email",value:l.email,onChange:u=>d(p=>({...p,email:u.target.value}))})]}),n.jsx("div",{className:"button-group",children:n.jsx("button",{onClick:()=>{v(!0),setTimeout(()=>v(!1),2e3)},disabled:!l.name||!l.email||h,style:{backgroundColor:!l.name||!l.email?"#6b7280":"#3b82f6",opacity:!l.name||!l.email||h?.6:1,cursor:!l.name||!l.email||h?"not-allowed":"pointer"},children:h?"Submitting...":"Submit Form"})}),n.jsxs("div",{className:"result",children:["Form valid: ",l.name&&l.email?"✅":"❌"]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Button State Toggle:"}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>S(!f),style:{backgroundColor:f?"#ef4444":"#10b981"},children:f?"Enable Button":"Disable Button"}),n.jsx("button",{onClick:()=>k(!x),style:{backgroundColor:x?"#f59e0b":"#8b5cf6"},children:x?"Stop Loading":"Start Loading"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Controlled Button:"}),n.jsx("div",{className:"button-group",children:n.jsx("button",{onClick:()=>m(u=>u+1),disabled:f||x,style:{backgroundColor:f?"#6b7280":"#3b82f6",opacity:f||x?.6:1,cursor:f||x?"not-allowed":"pointer"},children:x?"Loading...":"Click me! ("+I+")"})}),n.jsxs("div",{className:"result",children:["Button state: ",f?"Disabled":x?"Loading":"Enabled"]})]})]})})]})]})]})]})}function dm(){const[e,t]=w.useState(0),[r,i]=w.useState({x:0,y:0}),[s,o]=w.useState({name:"",email:"",message:""}),[a,c]=w.useState("No events yet");return n.jsxs("div",{className:"section",children:[n.jsx("h1",{children:"Events & Interactions"}),n.jsx("p",{children:"Making your UI interactive like Figma prototypes"}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Event Handlers"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Event handlers are like interactions in Figma - they respond to user actions."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Event handler function
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
// onClick, onChange, onSubmit, onKeyDown, onMouseEnter, onMouseLeave`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Event handlers (like Figma interactions)
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

// Common events: onClick, onChange, onSubmit, onKeyDown, etc.`,explanation:"Event handlers are functions that run when users interact with your UI, just like interactions in Figma prototypes."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Event Examples:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Click Events:"}),n.jsxs("div",{className:"button-group",children:[n.jsxs("button",{onClick:()=>{t(l=>l+1),c("Button clicked!")},children:["Click Counter: ",e]}),n.jsx("button",{onMouseEnter:()=>c("Mouse entered button"),onMouseLeave:()=>c("Mouse left button"),children:"Hover Me"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Mouse Position Tracker:"}),n.jsxs("div",{style:{width:"200px",height:"100px",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},onMouseMove:l=>{const d=l.target.getBoundingClientRect();i({x:Math.round(l.clientX-d.left),y:Math.round(l.clientY-d.top)})},children:["Move mouse here",n.jsxs("div",{style:{position:"absolute",top:"4px",left:"4px",fontSize:"12px",color:"#94a3b8"},children:["X: ",r.x,", Y: ",r.y]})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Last Event:"}),n.jsx("div",{className:"result",children:a})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Form Handling"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Form handling is like creating input fields in Figma - you collect and process user input."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Form state
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
</form>`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Form handling (like input fields in Figma)
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
}`,explanation:"Form handling allows you to collect and process user input, similar to how you create input fields in Figma prototypes."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Interactive Form Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Contact Form:"}),n.jsxs("form",{onSubmit:l=>{l.preventDefault(),alert(`Form submitted!
Name: ${s.name}
Email: ${s.email}
Message: ${s.message}`),o({name:"",email:"",message:""})},children:[n.jsx("input",{type:"text",name:"name",value:s.name,onChange:l=>o(d=>({...d,name:l.target.value})),placeholder:"Your name",style:{marginBottom:"8px"}}),n.jsx("input",{type:"email",name:"email",value:s.email,onChange:l=>o(d=>({...d,email:l.target.value})),placeholder:"Your email",style:{marginBottom:"8px"}}),n.jsx("textarea",{name:"message",value:s.message,onChange:l=>o(d=>({...d,message:l.target.value})),placeholder:"Your message",style:{marginBottom:"8px",minHeight:"60px"}}),n.jsx("button",{type:"submit",style:{width:"100%"},children:"Send Message"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Form Data Preview:"}),n.jsxs("div",{className:"result",children:[n.jsxs("div",{children:["Name: ",s.name||"Not entered"]}),n.jsxs("div",{children:["Email: ",s.email||"Not entered"]}),n.jsxs("div",{children:["Message: ",s.message||"Not entered"]})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Form Validation:"}),n.jsxs("div",{className:"result",children:[!s.name&&n.jsx("div",{style:{color:"#ef4444"},children:"❌ Name is required"}),!s.email&&n.jsx("div",{style:{color:"#ef4444"},children:"❌ Email is required"}),!s.message&&n.jsx("div",{style:{color:"#ef4444"},children:"❌ Message is required"}),s.name&&s.email&&s.message&&n.jsx("div",{style:{color:"#10b981"},children:"✅ Form is complete"})]})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"State Updates"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," State updates are like changing properties in Figma - they trigger visual updates."]}),n.jsx(P,{code:`// State updates (like changing properties in Figma)
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
}`,explanation:"State updates trigger re-renders, just like how changing properties in Figma updates the visual appearance."})]})]})}function pm(){w.useState("light");const[e,t]=w.useState("primary"),[r,i]=w.useState("default"),[s,o]=w.useState("desktop");return n.jsxs("div",{className:"section",children:[n.jsx("h1",{children:"Styling & Design"}),n.jsx("p",{children:"CSS, styling approaches, and design system implementation"}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"CSS-in-JS (Styled Components)"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Styled Components are like Figma components with built-in styles - they combine design and functionality."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Install: npm install styled-components
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
<StyledButton variant="primary">Click me</StyledButton>`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Styled Components (like Figma components with styles)
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
}`,explanation:"Styled Components combine CSS and React components, making them reusable and maintainable like Figma components."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Styled Components Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Button Variant:"}),n.jsxs("select",{value:e,onChange:a=>t(a.target.value),children:[n.jsx("option",{value:"primary",children:"Primary"}),n.jsx("option",{value:"secondary",children:"Secondary"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Card Style:"}),n.jsxs("select",{value:r,onChange:a=>i(a.target.value),children:[n.jsx("option",{value:"default",children:"Default"}),n.jsx("option",{value:"elevated",children:"Elevated"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsxs("div",{style:{background:e==="primary"?"#6366f1":"#f59e0b",color:"white",padding:"12px 24px",border:"none",borderRadius:"8px",cursor:"pointer",marginBottom:"16px"},children:[e==="primary"?"Primary":"Secondary"," Button"]}),n.jsxs("div",{style:{background:"white",borderRadius:"12px",padding:"24px",boxShadow:r==="elevated"?"0 10px 25px rgba(0, 0, 0, 0.15)":"0 4px 6px rgba(0, 0, 0, 0.1)",border:"1px solid #e5e7eb"},children:[n.jsx("h3",{children:"Styled Card"}),n.jsx("p",{children:"This card has built-in styles!"})]})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"CSS Modules & Scoped Styling"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," CSS Modules are like component-specific styles in Figma - they don't affect other components."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Button.module.css
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
}`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// CSS Modules (scoped styling)
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
<Button variant="secondary">Secondary Button</Button>`,explanation:"CSS Modules provide scoped styling that only applies to specific components, preventing style conflicts."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"CSS Modules Demo:"}),n.jsx("div",{className:"output-content",children:n.jsx("div",{className:"demo-controls",children:n.jsxs("div",{className:"demo-item",children:[n.jsx("p",{children:n.jsx("strong",{children:"Benefits:"})}),n.jsxs("ul",{children:[n.jsx("li",{children:"✅ Scoped styles (no conflicts)"}),n.jsx("li",{children:"✅ Component-specific styling"}),n.jsx("li",{children:"✅ Better organization"}),n.jsx("li",{children:"✅ Type safety with TypeScript"})]})]})})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Utility-First CSS (Tailwind)"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Tailwind CSS is like using Figma's design tokens and constraints - you build designs with predefined utilities."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Install: npm install -D tailwindcss
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
</button>`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Tailwind CSS (utility-first approach)
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
}`,explanation:"Tailwind CSS provides utility classes that you combine to build designs, similar to how you use design tokens in Figma."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Tailwind Utilities Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Responsive Size:"}),n.jsxs("select",{value:s,onChange:a=>o(a.target.value),children:[n.jsx("option",{value:"mobile",children:"Mobile"}),n.jsx("option",{value:"tablet",children:"Tablet"}),n.jsx("option",{value:"desktop",children:"Desktop"})]})]}),n.jsx("div",{className:"demo-item",children:n.jsxs("div",{style:{display:"grid",gridTemplateColumns:s==="mobile"?"1fr":s==="tablet"?"1fr 1fr":"1fr 1fr 1fr",gap:"16px",marginTop:"16px"},children:[n.jsx("div",{style:{background:"#f3f4f6",padding:"16px",borderRadius:"4px"},children:"Card 1"}),n.jsx("div",{style:{background:"#f3f4f6",padding:"16px",borderRadius:"4px"},children:"Card 2"}),n.jsx("div",{style:{background:"#f3f4f6",padding:"16px",borderRadius:"4px"},children:"Card 3"})]})})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Responsive Design Patterns"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Responsive design is like creating different frame sizes in Figma - you design for multiple screen sizes."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// CSS Media Queries
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
}`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Responsive Design Patterns
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
}`,explanation:"Responsive design ensures your UI works well on all screen sizes, from mobile to desktop."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Responsive Design Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("p",{children:n.jsx("strong",{children:"Responsive Breakpoints:"})}),n.jsxs("ul",{children:[n.jsx("li",{children:"📱 Mobile: < 768px (1 column)"}),n.jsx("li",{children:"📱 Tablet: 768px - 1024px (2 columns)"}),n.jsx("li",{children:"🖥️ Desktop: > 1024px (3 columns)"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("p",{children:n.jsx("strong",{children:"Design Principles:"})}),n.jsxs("ul",{children:[n.jsx("li",{children:"✅ Mobile-first approach"}),n.jsx("li",{children:"✅ Flexible layouts"}),n.jsx("li",{children:"✅ Scalable typography"}),n.jsx("li",{children:"✅ Touch-friendly interactions"})]})]})]})})]})]})]})]})}function mm(){const[e,t]=w.useState("/"),[r,i]=w.useState(["/"]),[s,o]=w.useState({}),a=l=>{t(l),i(d=>[...d,l])},c=(l,d)=>{t(l),o(d),i(h=>[...h,l+"?"+new URLSearchParams(d)])};return n.jsxs("div",{className:"section",children:[n.jsx("h1",{children:"Navigation & Routing"}),n.jsx("p",{children:"Page navigation, routing, and URL management"}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"React Router Basics"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," React Router is like creating multiple pages in Figma - you can navigate between different views."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Install: npm install react-router-dom
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
<Link to="/contact">Contact</Link>`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// React Router Setup
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
}`,explanation:"React Router enables navigation between different pages/views in your React application."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Router Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Current Route:"}),n.jsx("div",{className:"result",children:e})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Navigation:"}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>a("/"),children:"Home"}),n.jsx("button",{onClick:()=>a("/about"),children:"About"}),n.jsx("button",{onClick:()=>a("/contact"),children:"Contact"}),n.jsx("button",{onClick:()=>a("/products"),children:"Products"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Route History:"}),n.jsx("div",{className:"result",style:{fontSize:"12px",maxHeight:"100px",overflowY:"auto"},children:r.slice(-5).join(" → ")})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Dynamic Routes & Parameters"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Dynamic routes are like Figma components with variants - the same component can display different content based on parameters."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Dynamic route with parameter
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
}`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Dynamic Routes with Parameters
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
}`,explanation:"Dynamic routes allow you to create flexible URLs that can display different content based on parameters."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Dynamic Routes Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Navigate with Parameters:"}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{onClick:()=>c("/products/1",{category:"electronics"}),children:"Product 1 (Electronics)"}),n.jsx("button",{onClick:()=>c("/products/2",{category:"books"}),children:"Product 2 (Books)"}),n.jsx("button",{onClick:()=>c("/products/3",{category:"clothing"}),children:"Product 3 (Clothing)"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("label",{children:"Current Parameters:"}),n.jsx("div",{className:"result",children:Object.keys(s).length>0?Object.entries(s).map(([l,d])=>l+": "+d).join(", "):"No parameters"})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Protected Routes & Authentication"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Protected routes are like Figma files with different permission levels - some content is only visible to certain users."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Protected Route Component
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
};`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Protected Routes Implementation
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
}`,explanation:"Protected routes ensure that certain pages are only accessible to authenticated users."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Protected Routes Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("p",{children:n.jsx("strong",{children:"Route Protection Levels:"})}),n.jsxs("ul",{children:[n.jsx("li",{children:"🏠 Home: Public (no auth required)"}),n.jsx("li",{children:"🔐 Dashboard: Protected (auth required)"}),n.jsx("li",{children:"👤 Profile: Protected (auth required)"}),n.jsx("li",{children:"📧 Contact: Public (no auth required)"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("p",{children:n.jsx("strong",{children:"Authentication Flow:"})}),n.jsxs("ol",{children:[n.jsx("li",{children:"User tries to access protected route"}),n.jsx("li",{children:"Check if user is authenticated"}),n.jsx("li",{children:"If not, redirect to login"}),n.jsx("li",{children:"After login, redirect back to original route"})]})]})]})})]})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Navigation Patterns"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Navigation patterns are like the navigation structure in Figma - you need clear ways to move between different sections."]}),n.jsxs("div",{className:"syntax-example",children:[n.jsx("h4",{children:"Basic Syntax:"}),n.jsx("pre",{className:"syntax-code",children:`// Breadcrumb Navigation
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
}`})]}),n.jsxs("div",{className:"interactive-example",children:[n.jsx("div",{className:"code-panel",children:n.jsx(P,{code:`// Common Navigation Patterns

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
}`,explanation:"Different navigation patterns provide clear ways for users to move through your application."})}),n.jsxs("div",{className:"output-panel",children:[n.jsx("h4",{children:"Navigation Patterns Demo:"}),n.jsx("div",{className:"output-content",children:n.jsxs("div",{className:"demo-controls",children:[n.jsxs("div",{className:"demo-item",children:[n.jsx("p",{children:n.jsx("strong",{children:"Common Patterns:"})}),n.jsxs("ul",{children:[n.jsx("li",{children:"🍞 Breadcrumbs: Show current location"}),n.jsx("li",{children:"📑 Tabs: Switch between related content"}),n.jsx("li",{children:"📱 Sidebar: Persistent navigation"}),n.jsx("li",{children:"☰ Mobile Menu: Collapsible navigation"})]})]}),n.jsxs("div",{className:"demo-item",children:[n.jsx("p",{children:n.jsx("strong",{children:"Best Practices:"})}),n.jsxs("ul",{children:[n.jsx("li",{children:"✅ Clear visual hierarchy"}),n.jsx("li",{children:"✅ Consistent navigation"}),n.jsx("li",{children:"✅ Accessible navigation"}),n.jsx("li",{children:"✅ Mobile-friendly design"})]})]})]})})]})]})]})]})}function hm(){const[e,t]=w.useState("html"),[r,i]=w.useState(""),s=[{category:"Document Structure",elements:[{tag:"<!DOCTYPE html>",description:"Document type declaration",example:"<!DOCTYPE html>"},{tag:"<html>",description:"Root element",example:'<html lang="en">'},{tag:"<head>",description:"Document metadata",example:"<head><title>Page Title</title></head>"},{tag:"<title>",description:"Page title",example:"<title>My Website</title>"},{tag:"<body>",description:"Document body",example:"<body>Content here</body>"},{tag:"<meta>",description:"Metadata",example:'<meta charset="UTF-8">'},{tag:"<link>",description:"External resource link",example:'<link rel="stylesheet" href="style.css">'},{tag:"<script>",description:"JavaScript code",example:'<script src="script.js"><\/script>'}]},{category:"Text Elements",elements:[{tag:"<h1> to <h6>",description:"Headings",example:"<h1>Main Heading</h1>"},{tag:"<p>",description:"Paragraph",example:"<p>This is a paragraph.</p>"},{tag:"<span>",description:"Inline text",example:"<span>Inline text</span>"},{tag:"<div>",description:"Block container",example:"<div>Block content</div>"},{tag:"<br>",description:"Line break",example:"Text<br>New line"},{tag:"<hr>",description:"Horizontal rule",example:"<hr>"},{tag:"<strong>",description:"Bold text",example:"<strong>Bold text</strong>"},{tag:"<em>",description:"Italic text",example:"<em>Italic text</em>"},{tag:"<mark>",description:"Highlighted text",example:"<mark>Highlighted</mark>"},{tag:"<small>",description:"Small text",example:"<small>Small text</small>"},{tag:"<sub>",description:"Subscript",example:"H<sub>2</sub>O"},{tag:"<sup>",description:"Superscript",example:"x<sup>2</sup>"}]},{category:"Lists",elements:[{tag:"<ul>",description:"Unordered list",example:"<ul><li>Item 1</li></ul>"},{tag:"<ol>",description:"Ordered list",example:"<ol><li>Item 1</li></ol>"},{tag:"<li>",description:"List item",example:"<li>List item</li>"},{tag:"<dl>",description:"Description list",example:"<dl><dt>Term</dt><dd>Definition</dd></dl>"},{tag:"<dt>",description:"Description term",example:"<dt>Term</dt>"},{tag:"<dd>",description:"Description details",example:"<dd>Definition</dd>"}]},{category:"Links & Media",elements:[{tag:"<a>",description:"Hyperlink",example:'<a href="https://example.com">Link</a>'},{tag:"<img>",description:"Image",example:'<img src="image.jpg" alt="Description">'},{tag:"<video>",description:"Video",example:'<video src="video.mp4" controls></video>'},{tag:"<audio>",description:"Audio",example:'<audio src="audio.mp3" controls></audio>'},{tag:"<iframe>",description:"Inline frame",example:'<iframe src="https://example.com"></iframe>'}]},{category:"Forms",elements:[{tag:"<form>",description:"Form container",example:'<form action="/submit" method="post">'},{tag:"<input>",description:"Input field",example:'<input type="text" name="username">'},{tag:"<label>",description:"Form label",example:'<label for="username">Username:</label>'},{tag:"<textarea>",description:"Multi-line input",example:'<textarea name="message"></textarea>'},{tag:"<select>",description:"Dropdown",example:"<select><option>Option 1</option></select>"},{tag:"<option>",description:"Dropdown option",example:'<option value="1">Option 1</option>'},{tag:"<button>",description:"Button",example:'<button type="submit">Submit</button>'},{tag:"<fieldset>",description:"Form group",example:"<fieldset><legend>Group</legend></fieldset>"},{tag:"<legend>",description:"Fieldset title",example:"<legend>Form Group</legend>"}]},{category:"Tables",elements:[{tag:"<table>",description:"Table container",example:"<table></table>"},{tag:"<thead>",description:"Table header",example:"<thead><tr><th>Header</th></tr></thead>"},{tag:"<tbody>",description:"Table body",example:"<tbody><tr><td>Data</td></tr></tbody>"},{tag:"<tfoot>",description:"Table footer",example:"<tfoot><tr><td>Footer</td></tr></tfoot>"},{tag:"<tr>",description:"Table row",example:"<tr><td>Cell</td></tr>"},{tag:"<th>",description:"Header cell",example:"<th>Header Cell</th>"},{tag:"<td>",description:"Data cell",example:"<td>Data Cell</td>"},{tag:"<caption>",description:"Table caption",example:"<caption>Table Title</caption>"}]},{category:"Semantic Elements",elements:[{tag:"<header>",description:"Page header",example:"<header>Header content</header>"},{tag:"<nav>",description:"Navigation",example:"<nav>Navigation links</nav>"},{tag:"<main>",description:"Main content",example:"<main>Main content</main>"},{tag:"<section>",description:"Content section",example:"<section>Section content</section>"},{tag:"<article>",description:"Article content",example:"<article>Article content</article>"},{tag:"<aside>",description:"Sidebar content",example:"<aside>Sidebar content</aside>"},{tag:"<footer>",description:"Page footer",example:"<footer>Footer content</footer>"},{tag:"<figure>",description:"Figure container",example:'<figure><img src="image.jpg"><figcaption>Caption</figcaption></figure>'},{tag:"<figcaption>",description:"Figure caption",example:"<figcaption>Image description</figcaption>"}]}],o=[{category:"Layout & Display",properties:[{property:"display",values:"block, inline, inline-block, flex, grid, none, table, table-cell, table-row, contents, flow-root, list-item, run-in, ruby, ruby-base, ruby-text, ruby-base-container, ruby-text-container",description:"Element display type"},{property:"position",values:"static, relative, absolute, fixed, sticky",description:"Positioning method (affects how element is positioned relative to parent)"},{property:"top",values:"auto, 0, 10px, 50%, 100%, inherit, initial, unset",description:"Y-axis top position offset (distance from top of positioned parent)"},{property:"right",values:"auto, 0, 10px, 50%, 100%, inherit, initial, unset",description:"X-axis right position offset (distance from right of positioned parent)"},{property:"bottom",values:"auto, 0, 10px, 50%, 100%, inherit, initial, unset",description:"Y-axis bottom position offset (distance from bottom of positioned parent)"},{property:"left",values:"auto, 0, 10px, 50%, 100%, inherit, initial, unset",description:"X-axis left position offset (distance from left of positioned parent)"},{property:"float",values:"left, right, none, inline-start, inline-end",description:"Element floating"},{property:"clear",values:"left, right, both, none, inline-start, inline-end",description:"Clear floating elements"},{property:"z-index",values:"auto, 0, 1, 999, -1, inherit, initial, unset",description:"Stacking order"},{property:"overflow",values:"visible, hidden, scroll, auto, clip, overlay",description:"Content overflow handling"},{property:"overflow-x",values:"visible, hidden, scroll, auto, clip",description:"Horizontal overflow"},{property:"overflow-y",values:"visible, hidden, scroll, auto, clip",description:"Vertical overflow"},{property:"visibility",values:"visible, hidden, collapse",description:"Element visibility"},{property:"clip",values:"auto, rect(0, 0, 0, 0), inherit, initial, unset",description:"Element clipping (deprecated)"},{property:"clip-path",values:"none, url(), inset(), circle(), ellipse(), polygon(), path()",description:"Element clipping path"},{property:"contain",values:"none, strict, content, size, layout, style, paint",description:"Containment"}]},{category:"Box Model",properties:[{property:"width",values:"auto, 100px, 50%, 100vw, max-content, min-content, fit-content, inherit, initial, unset",description:"Element width"},{property:"height",values:"auto, 100px, 50%, 100vh, max-content, min-content, fit-content, inherit, initial, unset",description:"Element height"},{property:"min-width",values:"auto, 100px, 50%, 100vw, max-content, min-content, fit-content, inherit, initial, unset",description:"Minimum width"},{property:"max-width",values:"none, 100px, 50%, 100vw, max-content, min-content, fit-content, inherit, initial, unset",description:"Maximum width"},{property:"min-height",values:"auto, 100px, 50%, 100vh, max-content, min-content, fit-content, inherit, initial, unset",description:"Minimum height"},{property:"max-height",values:"none, 100px, 50%, 100vh, max-content, min-content, fit-content, inherit, initial, unset",description:"Maximum height"},{property:"margin",values:"0, 10px, 1em, auto, inherit, initial, unset",description:"Margin shorthand (space outside element - affects spacing with siblings)"},{property:"margin-top",values:"0, 10px, 1em, auto, inherit, initial, unset",description:"Y-axis top margin (space above element)"},{property:"margin-right",values:"0, 10px, 1em, auto, inherit, initial, unset",description:"X-axis right margin (space to the right of element)"},{property:"margin-bottom",values:"0, 10px, 1em, auto, inherit, initial, unset",description:"Y-axis bottom margin (space below element)"},{property:"margin-left",values:"0, 10px, 1em, auto, inherit, initial, unset",description:"X-axis left margin (space to the left of element)"},{property:"padding",values:"0, 10px, 1em, inherit, initial, unset",description:"Padding shorthand (space inside element - affects content spacing)"},{property:"padding-top",values:"0, 10px, 1em, inherit, initial, unset",description:"Y-axis top padding (space inside top of element)"},{property:"padding-right",values:"0, 10px, 1em, inherit, initial, unset",description:"X-axis right padding (space inside right of element)"},{property:"padding-bottom",values:"0, 10px, 1em, inherit, initial, unset",description:"Y-axis bottom padding (space inside bottom of element)"},{property:"padding-left",values:"0, 10px, 1em, inherit, initial, unset",description:"X-axis left padding (space inside left of element)"},{property:"border",values:"1px solid black, none, inherit, initial, unset",description:"Border shorthand"},{property:"border-width",values:"thin, medium, thick, 1px, inherit, initial, unset",description:"Border width"},{property:"border-style",values:"none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset, inherit, initial, unset",description:"Border style"},{property:"border-color",values:"black, #000, rgb(0,0,0), currentColor, transparent, inherit, initial, unset",description:"Border color"},{property:"border-top",values:"1px solid black, inherit, initial, unset",description:"Top border shorthand"},{property:"border-right",values:"1px solid black, inherit, initial, unset",description:"Right border shorthand"},{property:"border-bottom",values:"1px solid black, inherit, initial, unset",description:"Bottom border shorthand"},{property:"border-left",values:"1px solid black, inherit, initial, unset",description:"Left border shorthand"},{property:"border-radius",values:"0, 5px, 50%, inherit, initial, unset",description:"Border radius"},{property:"border-top-left-radius",values:"0, 5px, 50%, inherit, initial, unset",description:"Top-left border radius"},{property:"border-top-right-radius",values:"0, 5px, 50%, inherit, initial, unset",description:"Top-right border radius"},{property:"border-bottom-right-radius",values:"0, 5px, 50%, inherit, initial, unset",description:"Bottom-right border radius"},{property:"border-bottom-left-radius",values:"0, 5px, 50%, inherit, initial, unset",description:"Bottom-left border radius"},{property:"box-sizing",values:"content-box, border-box, inherit, initial, unset",description:"Box model calculation"},{property:"box-shadow",values:"none, 2px 2px 5px rgba(0,0,0,0.3), inset 2px 2px 5px rgba(0,0,0,0.3), inherit, initial, unset",description:"Box shadow"},{property:"outline",values:"none, 1px solid black, inherit, initial, unset",description:"Outline shorthand"},{property:"outline-width",values:"thin, medium, thick, 1px, inherit, initial, unset",description:"Outline width"},{property:"outline-style",values:"none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset, inherit, initial, unset",description:"Outline style"},{property:"outline-color",values:"black, #000, rgb(0,0,0), invert, inherit, initial, unset",description:"Outline color"},{property:"outline-offset",values:"0, 5px, inherit, initial, unset",description:"Outline offset"}]},{category:"Flexbox",properties:[{property:"display: flex",values:"flex, inline-flex",description:"Flex container (parent element)"},{property:"flex-direction",values:"row, row-reverse, column, column-reverse, inherit, initial, unset",description:"Flex direction (parent - determines x-axis vs y-axis)"},{property:"flex-wrap",values:"nowrap, wrap, wrap-reverse, inherit, initial, unset",description:"Flex wrapping (parent - allows items to wrap to new lines)"},{property:"flex-flow",values:"row nowrap, column wrap, inherit, initial, unset",description:"Flex direction and wrap shorthand (parent)"},{property:"justify-content",values:"flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right, inherit, initial, unset",description:"X-axis alignment (parent - aligns items horizontally)"},{property:"align-items",values:"stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end, self-start, self-end, inherit, initial, unset",description:"Y-axis alignment (parent - aligns items vertically)"},{property:"align-content",values:"flex-start, flex-end, center, space-between, space-around, space-evenly, stretch, start, end, baseline, first baseline, last baseline, inherit, initial, unset",description:"Multi-line Y-axis alignment (parent - when items wrap)"},{property:"align-self",values:"auto, flex-start, flex-end, center, baseline, stretch, inherit, initial, unset",description:"Individual item Y-axis alignment (child - overrides parent align-items)"},{property:"flex-grow",values:"0, 1, 2, inherit, initial, unset",description:"Growth factor (child - how much item can grow)"},{property:"flex-shrink",values:"0, 1, 2, inherit, initial, unset",description:"Shrink factor (child - how much item can shrink)"},{property:"flex-basis",values:"auto, 0, 100px, 50%, content, inherit, initial, unset",description:"Initial size (child - starting size before growing/shrinking)"},{property:"flex",values:"0 1 auto, 1, 1 0 100px, none, inherit, initial, unset",description:"Flex shorthand (child - combines grow, shrink, basis)"},{property:"order",values:"0, 1, -1, inherit, initial, unset",description:"Flex item order (child - changes display order)"}]},{category:"Grid",properties:[{property:"display: grid",values:"grid, inline-grid, subgrid",description:"Grid container (parent element)"},{property:"grid-template-columns",values:"none, 1fr, 100px, repeat(3, 1fr), minmax(100px, 1fr), inherit, initial, unset",description:"X-axis column definitions (parent - defines column widths)"},{property:"grid-template-rows",values:"none, 1fr, 100px, repeat(3, 1fr), minmax(100px, 1fr), inherit, initial, unset",description:"Y-axis row definitions (parent - defines row heights)"},{property:"grid-template-areas",values:'none, "header header" "sidebar main", inherit, initial, unset',description:"Grid area definitions (parent - creates named areas)"},{property:"grid-template",values:'none, "header header" 100px / 1fr 1fr, inherit, initial, unset',description:"Grid template shorthand (parent)"},{property:"grid-column-gap",values:"0, 10px, 1em, inherit, initial, unset",description:"X-axis column gaps (parent - deprecated, use column-gap)"},{property:"grid-row-gap",values:"0, 10px, 1em, inherit, initial, unset",description:"Y-axis row gaps (parent - deprecated, use row-gap)"},{property:"grid-gap",values:"0, 10px, 10px 20px, inherit, initial, unset",description:"Grid gaps shorthand (parent - deprecated, use gap)"},{property:"gap",values:"0, 10px, 10px 20px, inherit, initial, unset",description:"Grid and flexbox gaps (parent - combines row-gap and column-gap)"},{property:"row-gap",values:"0, 10px, 1em, inherit, initial, unset",description:"Y-axis row gaps (parent)"},{property:"column-gap",values:"0, 10px, 1em, inherit, initial, unset",description:"X-axis column gaps (parent)"},{property:"grid-column",values:"auto, 1, 1 / 3, span 2, inherit, initial, unset",description:"X-axis column placement (child - which columns item occupies)"},{property:"grid-row",values:"auto, 1, 1 / 3, span 2, inherit, initial, unset",description:"Y-axis row placement (child - which rows item occupies)"},{property:"grid-column-start",values:"auto, 1, span 2, inherit, initial, unset",description:"X-axis column start position (child)"},{property:"grid-column-end",values:"auto, 1, span 2, inherit, initial, unset",description:"X-axis column end position (child)"},{property:"grid-row-start",values:"auto, 1, span 2, inherit, initial, unset",description:"Y-axis row start position (child)"},{property:"grid-row-end",values:"auto, 1, span 2, inherit, initial, unset",description:"Y-axis row end position (child)"},{property:"grid-area",values:"auto, 1, header, inherit, initial, unset",description:"Grid area shorthand (child - combines row and column placement)"},{property:"justify-items",values:"start, end, center, stretch, inherit, initial, unset",description:"X-axis item alignment (parent - aligns all items horizontally)"},{property:"align-items",values:"start, end, center, stretch, inherit, initial, unset",description:"Y-axis item alignment (parent - aligns all items vertically)"},{property:"justify-self",values:"auto, start, end, center, stretch, inherit, initial, unset",description:"Individual X-axis alignment (child - overrides parent justify-items)"},{property:"align-self",values:"auto, start, end, center, stretch, inherit, initial, unset",description:"Individual Y-axis alignment (child - overrides parent align-items)"},{property:"justify-content",values:"start, end, center, stretch, space-around, space-between, space-evenly, inherit, initial, unset",description:"X-axis content alignment (parent - when grid is smaller than container)"},{property:"align-content",values:"start, end, center, stretch, space-around, space-between, space-evenly, inherit, initial, unset",description:"Y-axis content alignment (parent - when grid is smaller than container)"},{property:"grid-auto-columns",values:"auto, 100px, 1fr, minmax(100px, 1fr), inherit, initial, unset",description:"Auto-generated X-axis column size (parent)"},{property:"grid-auto-rows",values:"auto, 100px, 1fr, minmax(100px, 1fr), inherit, initial, unset",description:"Auto-generated Y-axis row size (parent)"},{property:"grid-auto-flow",values:"row, column, row dense, column dense, inherit, initial, unset",description:"Auto-placement algorithm (parent - how items flow when not explicitly placed)"}]},{category:"Typography",properties:[{property:"font-family",values:'Arial, "Times New Roman", sans-serif, etc.',description:"Font family"},{property:"font-size",values:"16px, 1em, 1.2rem, 120%, etc.",description:"Font size"},{property:"font-weight",values:"normal, bold, 100-900, etc.",description:"Font weight"},{property:"font-style",values:"normal, italic, oblique",description:"Font style"},{property:"line-height",values:"normal, 1.5, 24px, etc.",description:"Line height"},{property:"text-align",values:"left, center, right, justify",description:"Text alignment"},{property:"text-decoration",values:"none, underline, overline, line-through",description:"Text decoration"},{property:"text-transform",values:"none, uppercase, lowercase, capitalize",description:"Text transformation"},{property:"letter-spacing",values:"normal, 1px, 0.1em, etc.",description:"Letter spacing"},{property:"word-spacing",values:"normal, 2px, 0.2em, etc.",description:"Word spacing"},{property:"white-space",values:"normal, nowrap, pre, pre-wrap",description:"White space handling"},{property:"text-overflow",values:"clip, ellipsis",description:"Text overflow"}]},{category:"Colors & Backgrounds",properties:[{property:"color",values:"black, #000, rgb(0,0,0), rgba(0,0,0,0.5), etc.",description:"Text color"},{property:"background-color",values:"white, #fff, rgb(255,255,255), etc.",description:"Background color"},{property:"background-image",values:'url("image.jpg"), linear-gradient(), etc.',description:"Background image"},{property:"background-repeat",values:"repeat, no-repeat, repeat-x, repeat-y",description:"Background repeat"},{property:"background-position",values:"center, top left, 50% 50%, etc.",description:"Background position"},{property:"background-size",values:"auto, cover, contain, 100px 200px",description:"Background size"},{property:"background-attachment",values:"scroll, fixed, local",description:"Background attachment"},{property:"background",values:"shorthand for all background properties",description:"Background shorthand"},{property:"opacity",values:"0, 0.5, 1, etc.",description:"Element opacity"}]},{category:"Transforms & Animations",properties:[{property:"transform",values:"translate(), rotate(), scale(), skew(), etc.",description:"Element transformation"},{property:"transform-origin",values:"center, top left, 50% 50%, etc.",description:"Transform origin"},{property:"transition",values:"all 0.3s ease, width 0.5s linear, etc.",description:"Transition shorthand"},{property:"transition-property",values:"all, width, height, color, etc.",description:"Transition properties"},{property:"transition-duration",values:"0s, 0.3s, 1s, etc.",description:"Transition duration"},{property:"transition-timing-function",values:"ease, linear, ease-in, ease-out, ease-in-out",description:"Transition timing"},{property:"animation",values:"slideIn 1s ease-in-out, etc.",description:"Animation shorthand"},{property:"animation-name",values:"slideIn, fadeOut, bounce, etc.",description:"Animation name"},{property:"animation-duration",values:"0s, 1s, 2.5s, etc.",description:"Animation duration"},{property:"animation-timing-function",values:"ease, linear, ease-in, ease-out, ease-in-out",description:"Animation timing"},{property:"animation-delay",values:"0s, 1s, -1s, etc.",description:"Animation delay"},{property:"animation-iteration-count",values:"1, infinite, 3, etc.",description:"Animation iterations"},{property:"animation-direction",values:"normal, reverse, alternate, alternate-reverse",description:"Animation direction"},{property:"animation-fill-mode",values:"none, forwards, backwards, both",description:"Animation fill mode"}]},{category:"Responsive Design",properties:[{property:"@media",values:"@media (max-width: 768px) { }",description:"Media queries"},{property:"min-width",values:"320px, 768px, 1024px, etc.",description:"Minimum width"},{property:"max-width",values:"767px, 1023px, 1200px, etc.",description:"Maximum width"},{property:"orientation",values:"portrait, landscape",description:"Device orientation"},{property:"aspect-ratio",values:"16/9, 4/3, 1/1, etc.",description:"Aspect ratio"},{property:"viewport",values:"width=device-width, initial-scale=1.0",description:"Viewport meta tag"}]},{category:"Pseudo-classes & Pseudo-elements",properties:[{property:":hover",values:"element:hover { }",description:"Mouse hover state"},{property:":active",values:"element:active { }",description:"Active state"},{property:":focus",values:"element:focus { }",description:"Focus state"},{property:":focus-within",values:"element:focus-within { }",description:"Focus within element"},{property:":focus-visible",values:"element:focus-visible { }",description:"Focus visible state"},{property:":visited",values:"a:visited { }",description:"Visited link state"},{property:":link",values:"a:link { }",description:"Unvisited link state"},{property:":target",values:"element:target { }",description:"Target element"},{property:":first-child",values:"element:first-child { }",description:"First child element"},{property:":last-child",values:"element:last-child { }",description:"Last child element"},{property:":only-child",values:"element:only-child { }",description:"Only child element"},{property:":first-of-type",values:"element:first-of-type { }",description:"First of type element"},{property:":last-of-type",values:"element:last-of-type { }",description:"Last of type element"},{property:":only-of-type",values:"element:only-of-type { }",description:"Only of type element"},{property:":nth-child()",values:"element:nth-child(2n) { }",description:"Nth child element"},{property:":nth-last-child()",values:"element:nth-last-child(2n) { }",description:"Nth last child element"},{property:":nth-of-type()",values:"element:nth-of-type(2n) { }",description:"Nth of type element"},{property:":nth-last-of-type()",values:"element:nth-last-of-type(2n) { }",description:"Nth last of type element"},{property:":empty",values:"element:empty { }",description:"Empty element"},{property:":root",values:":root { }",description:"Root element"},{property:":not()",values:"element:not(.class) { }",description:"Not selector"},{property:":is()",values:":is(h1, h2, h3) { }",description:"Is selector"},{property:":where()",values:":where(h1, h2, h3) { }",description:"Where selector"},{property:":has()",values:"element:has(child) { }",description:"Has selector"},{property:"::before",values:'element::before { content: ""; }',description:"Before pseudo-element"},{property:"::after",values:'element::after { content: ""; }',description:"After pseudo-element"},{property:"::first-line",values:"p::first-line { }",description:"First line of text"},{property:"::first-letter",values:"p::first-letter { }",description:"First letter of text"},{property:"::selection",values:"::selection { }",description:"Selected text"},{property:"::placeholder",values:"input::placeholder { }",description:"Input placeholder"},{property:"::marker",values:"li::marker { }",description:"List marker"},{property:"::backdrop",values:"::backdrop { }",description:"Backdrop element"}]},{category:"Backgrounds & Borders",properties:[{property:"background",values:"red, url(image.jpg), linear-gradient(), inherit, initial, unset",description:"Background shorthand"},{property:"background-color",values:"transparent, red, #ff0000, rgb(255,0,0), rgba(255,0,0,0.5), inherit, initial, unset",description:"Background color"},{property:"background-image",values:"none, url(image.jpg), linear-gradient(), radial-gradient(), conic-gradient(), inherit, initial, unset",description:"Background image"},{property:"background-repeat",values:"repeat, no-repeat, repeat-x, repeat-y, space, round, inherit, initial, unset",description:"Background repeat"},{property:"background-attachment",values:"scroll, fixed, local, inherit, initial, unset",description:"Background attachment"},{property:"background-position",values:"center, top left, 50% 50%, inherit, initial, unset",description:"Background position"},{property:"background-size",values:"auto, cover, contain, 100px 200px, 50% 100%, inherit, initial, unset",description:"Background size"},{property:"background-clip",values:"border-box, padding-box, content-box, text, inherit, initial, unset",description:"Background clip"},{property:"background-origin",values:"border-box, padding-box, content-box, inherit, initial, unset",description:"Background origin"},{property:"border-image",values:"none, url(image.jpg) 30 stretch, inherit, initial, unset",description:"Border image"},{property:"border-image-source",values:"none, url(image.jpg), inherit, initial, unset",description:"Border image source"},{property:"border-image-slice",values:"100%, 30, 30 30 30, inherit, initial, unset",description:"Border image slice"},{property:"border-image-width",values:"1, 30px, 30%, inherit, initial, unset",description:"Border image width"},{property:"border-image-outset",values:"0, 30px, inherit, initial, unset",description:"Border image outset"},{property:"border-image-repeat",values:"stretch, repeat, round, space, inherit, initial, unset",description:"Border image repeat"}]},{category:"Text & Fonts",properties:[{property:"font",values:"italic bold 12px/1.5 Arial, inherit, initial, unset",description:"Font shorthand"},{property:"font-family",values:'Arial, "Times New Roman", serif, sans-serif, monospace, inherit, initial, unset',description:"Font family"},{property:"font-size",values:"16px, 1em, 1.2rem, 120%, inherit, initial, unset",description:"Font size"},{property:"font-weight",values:"normal, bold, 100-900, inherit, initial, unset",description:"Font weight"},{property:"font-style",values:"normal, italic, oblique, inherit, initial, unset",description:"Font style"},{property:"font-variant",values:"normal, small-caps, inherit, initial, unset",description:"Font variant"},{property:"font-stretch",values:"normal, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded, inherit, initial, unset",description:"Font stretch"},{property:"font-size-adjust",values:"none, 0.5, inherit, initial, unset",description:"Font size adjust"},{property:"font-synthesis",values:"none, weight, style, weight style, inherit, initial, unset",description:"Font synthesis"},{property:"text-align",values:"left, right, center, justify, start, end, inherit, initial, unset",description:"X-axis text alignment (horizontal alignment of text content)"},{property:"text-align-last",values:"auto, left, right, center, justify, start, end, inherit, initial, unset",description:"X-axis last line alignment (horizontal alignment of last line in justified text)"},{property:"text-decoration",values:"none, underline, overline, line-through, inherit, initial, unset",description:"Text decoration shorthand"},{property:"text-decoration-line",values:"none, underline, overline, line-through, blink, inherit, initial, unset",description:"Text decoration line"},{property:"text-decoration-style",values:"solid, double, dotted, dashed, wavy, inherit, initial, unset",description:"Text decoration style"},{property:"text-decoration-color",values:"currentColor, red, #ff0000, inherit, initial, unset",description:"Text decoration color"},{property:"text-decoration-thickness",values:"auto, 1px, 0.1em, inherit, initial, unset",description:"Text decoration thickness"},{property:"text-underline-offset",values:"auto, 1px, inherit, initial, unset",description:"Text underline offset"},{property:"text-underline-position",values:"auto, under, left, right, inherit, initial, unset",description:"Text underline position"},{property:"text-transform",values:"none, uppercase, lowercase, capitalize, full-width, full-size-kana, inherit, initial, unset",description:"Text transformation"},{property:"text-indent",values:"0, 20px, 2em, inherit, initial, unset",description:"Text indent"},{property:"text-overflow",values:"clip, ellipsis, inherit, initial, unset",description:"Text overflow"},{property:"white-space",values:"normal, nowrap, pre, pre-wrap, pre-line, break-spaces, inherit, initial, unset",description:"White space handling"},{property:"word-spacing",values:"normal, 2px, 0.2em, inherit, initial, unset",description:"Word spacing"},{property:"letter-spacing",values:"normal, 1px, 0.1em, inherit, initial, unset",description:"Letter spacing"},{property:"line-height",values:"normal, 1.5, 24px, inherit, initial, unset",description:"Line height"},{property:"vertical-align",values:"baseline, sub, super, top, text-top, middle, bottom, text-bottom, inherit, initial, unset",description:"Vertical alignment"},{property:"word-break",values:"normal, break-all, keep-all, break-word, inherit, initial, unset",description:"Word break"},{property:"word-wrap",values:"normal, break-word, inherit, initial, unset",description:"Word wrap (deprecated)"},{property:"overflow-wrap",values:"normal, break-word, anywhere, inherit, initial, unset",description:"Overflow wrap"},{property:"hyphens",values:"none, manual, auto, inherit, initial, unset",description:"Hyphenation"},{property:"tab-size",values:"4, 8, inherit, initial, unset",description:"Tab size"},{property:"text-orientation",values:"mixed, upright, sideways, inherit, initial, unset",description:"Text orientation"},{property:"writing-mode",values:"horizontal-tb, vertical-rl, vertical-lr, sideways-rl, sideways-lr, inherit, initial, unset",description:"Writing mode"},{property:"direction",values:"ltr, rtl, inherit, initial, unset",description:"Text direction"},{property:"unicode-bidi",values:"normal, embed, isolate, bidi-override, isolate-override, plaintext, inherit, initial, unset",description:"Unicode bidirectional"}]},{category:"Transforms & 3D",properties:[{property:"transform",values:"none, translate(10px), rotate(45deg), scale(2), skew(10deg), inherit, initial, unset",description:"Element transformation (moves, rotates, scales, or skews element)"},{property:"transform-origin",values:"center, top left, 50% 50%, inherit, initial, unset",description:"Transform origin (point around which transformations happen)"},{property:"transform-style",values:"flat, preserve-3d, inherit, initial, unset",description:"Transform style"},{property:"perspective",values:"none, 1000px, inherit, initial, unset",description:"Perspective"},{property:"perspective-origin",values:"center, top left, 50% 50%, inherit, initial, unset",description:"Perspective origin"},{property:"backface-visibility",values:"visible, hidden, inherit, initial, unset",description:"Backface visibility"},{property:"translate",values:"none, 10px, 10px 20px, inherit, initial, unset",description:"Translate shorthand (moves element on X and Y axes)"},{property:"rotate",values:"none, 45deg, inherit, initial, unset",description:"Rotate shorthand (rotates element around its center)"},{property:"scale",values:"none, 2, 2 3, inherit, initial, unset",description:"Scale shorthand (scales element on X and Y axes)"},{property:"skew",values:"none, 10deg, 10deg 20deg, inherit, initial, unset",description:"Skew shorthand (skews element on X and Y axes)"}]},{category:"Transitions & Animations",properties:[{property:"transition",values:"all 0.3s ease, width 0.5s linear, inherit, initial, unset",description:"Transition shorthand"},{property:"transition-property",values:"all, width, height, color, inherit, initial, unset",description:"Transition properties"},{property:"transition-duration",values:"0s, 0.3s, 1s, inherit, initial, unset",description:"Transition duration"},{property:"transition-timing-function",values:"ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(), inherit, initial, unset",description:"Transition timing"},{property:"transition-delay",values:"0s, 1s, inherit, initial, unset",description:"Transition delay"},{property:"animation",values:"slideIn 1s ease-in-out, inherit, initial, unset",description:"Animation shorthand"},{property:"animation-name",values:"none, slideIn, fadeOut, inherit, initial, unset",description:"Animation name"},{property:"animation-duration",values:"0s, 1s, 2.5s, inherit, initial, unset",description:"Animation duration"},{property:"animation-timing-function",values:"ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(), inherit, initial, unset",description:"Animation timing"},{property:"animation-delay",values:"0s, 1s, -1s, inherit, initial, unset",description:"Animation delay"},{property:"animation-iteration-count",values:"1, infinite, 3, inherit, initial, unset",description:"Animation iterations"},{property:"animation-direction",values:"normal, reverse, alternate, alternate-reverse, inherit, initial, unset",description:"Animation direction"},{property:"animation-fill-mode",values:"none, forwards, backwards, both, inherit, initial, unset",description:"Animation fill mode"},{property:"animation-play-state",values:"running, paused, inherit, initial, unset",description:"Animation play state"},{property:"@keyframes",values:"@keyframes slideIn { from { } to { } }",description:"Keyframe animation definition"}]},{category:"Tables",properties:[{property:"table-layout",values:"auto, fixed, inherit, initial, unset",description:"Table layout algorithm (parent - how table calculates column widths)"},{property:"border-collapse",values:"separate, collapse, inherit, initial, unset",description:"Border collapse (parent - how borders between cells are handled)"},{property:"border-spacing",values:"0, 10px, 10px 20px, inherit, initial, unset",description:"Border spacing (parent - space between table cells)"},{property:"caption-side",values:"top, bottom, inherit, initial, unset",description:"Caption side (parent - where table caption appears)"},{property:"empty-cells",values:"show, hide, inherit, initial, unset",description:"Empty cells (parent - how empty table cells are displayed)"}]},{category:"Lists",properties:[{property:"list-style",values:"disc outside none, inherit, initial, unset",description:"List style shorthand (parent - affects all list items)"},{property:"list-style-type",values:"disc, circle, square, decimal, lower-alpha, upper-alpha, inherit, initial, unset",description:"List style type (parent - bullet/number style for list items)"},{property:"list-style-position",values:"outside, inside, inherit, initial, unset",description:"List style position (parent - where bullets/numbers appear relative to list items)"},{property:"list-style-image",values:"none, url(image.jpg), inherit, initial, unset",description:"List style image (parent - custom image for bullets)"}]},{category:"Counters",properties:[{property:"counter-reset",values:"none, counter 0, inherit, initial, unset",description:"Counter reset"},{property:"counter-increment",values:"none, counter 1, inherit, initial, unset",description:"Counter increment"},{property:"content",values:'normal, "text", url(), counter(), attr(), inherit, initial, unset',description:"Content"}]},{category:"Generated Content",properties:[{property:"quotes",values:'auto, "«" "»" "‹" "›", inherit, initial, unset',description:"Quotes"},{property:"resize",values:"none, both, horizontal, vertical, inherit, initial, unset",description:"Resize"},{property:"cursor",values:"auto, pointer, default, text, move, inherit, initial, unset",description:"Cursor"},{property:"caret-color",values:"auto, red, #ff0000, inherit, initial, unset",description:"Caret color"},{property:"user-select",values:"auto, none, text, all, contain, inherit, initial, unset",description:"User select"},{property:"appearance",values:"auto, none, inherit, initial, unset",description:"Appearance"},{property:"accent-color",values:"auto, red, #ff0000, inherit, initial, unset",description:"Accent color"}]}],a=s.map(l=>({...l,elements:l.elements.filter(d=>d.tag.toLowerCase().includes(r.toLowerCase())||d.description.toLowerCase().includes(r.toLowerCase()))})).filter(l=>l.elements.length>0),c=o.map(l=>({...l,properties:l.properties.filter(d=>d.property.toLowerCase().includes(r.toLowerCase())||d.description.toLowerCase().includes(r.toLowerCase()))})).filter(l=>l.properties.length>0);return n.jsxs("div",{className:"section",children:[n.jsx("h1",{children:"HTML & CSS Cheatsheet"}),n.jsx("p",{children:"Complete reference for HTML elements and CSS properties"}),n.jsx("div",{className:"search-container",children:n.jsx("input",{type:"text",placeholder:"Search HTML elements or CSS properties...",value:r,onChange:l=>i(l.target.value),className:"search-input"})}),n.jsxs("div",{className:"tab-navigation",children:[n.jsxs("button",{className:`tab ${e==="html"?"active":""}`,onClick:()=>t("html"),children:[n.jsx(ou,{className:"tab-icon"}),"HTML Elements"]}),n.jsxs("button",{className:`tab ${e==="css"?"active":""}`,onClick:()=>t("css"),children:[n.jsx(cu,{className:"tab-icon"}),"CSS Properties"]})]}),e==="html"&&n.jsxs("div",{className:"cheatsheet-content",children:[n.jsxs("div",{className:"cheatsheet-intro",children:[n.jsx("h2",{children:"HTML Elements Reference"}),n.jsx("p",{children:"Complete list of HTML elements organized by category. Click on any element to see its usage."})]}),a.map((l,d)=>n.jsxs("div",{className:"cheatsheet-category",children:[n.jsx("h3",{className:"category-title",children:l.category}),n.jsx("div",{className:"elements-grid",children:l.elements.map((h,v)=>n.jsxs("div",{className:"element-card",children:[n.jsxs("div",{className:"element-header",children:[n.jsx("code",{className:"element-tag",children:h.tag}),n.jsx("span",{className:"element-description",children:h.description})]}),n.jsxs("div",{className:"element-example",children:[n.jsx("strong",{children:"Example:"}),n.jsx("code",{className:"example-code",children:h.example})]})]},v))})]},d))]}),e==="css"&&n.jsxs("div",{className:"cheatsheet-content",children:[n.jsxs("div",{className:"cheatsheet-intro",children:[n.jsx("h2",{children:"CSS Properties Reference"}),n.jsx("p",{children:"Complete list of CSS properties organized by category. Common values and usage examples included."})]}),n.jsxs("div",{className:"box-model-visual",children:[n.jsx("h3",{children:"CSS Box Model"}),n.jsx("div",{className:"box-model-container",children:n.jsxs("div",{className:"box-model-margin",children:[n.jsxs("div",{className:"box-model-border",children:[n.jsxs("div",{className:"box-model-padding",children:[n.jsxs("div",{className:"box-model-content",children:[n.jsx("span",{children:"Content"}),n.jsx("div",{className:"box-model-label content-label",children:"Content Area"})]}),n.jsx("div",{className:"box-model-label padding-label",children:"Padding"})]}),n.jsx("div",{className:"box-model-label border-label",children:"Border"})]}),n.jsx("div",{className:"box-model-label margin-label",children:"Margin"})]})}),n.jsxs("div",{className:"box-model-explanation",children:[n.jsxs("div",{className:"explanation-item",children:[n.jsx("div",{className:"explanation-color margin-color"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Margin:"})," Outer spacing between elements"]})]}),n.jsxs("div",{className:"explanation-item",children:[n.jsx("div",{className:"explanation-color border-color"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Border:"})," Visible border around the element"]})]}),n.jsxs("div",{className:"explanation-item",children:[n.jsx("div",{className:"explanation-color padding-color"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Padding:"})," Inner spacing between content and border"]})]}),n.jsxs("div",{className:"explanation-item",children:[n.jsx("div",{className:"explanation-color content-color"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Content:"})," The actual content area (text, images, etc.)"]})]})]})]}),c.map((l,d)=>n.jsxs("div",{className:"cheatsheet-category",children:[n.jsx("h3",{className:"category-title",children:l.category}),n.jsx("div",{className:"properties-grid",children:l.properties.map((h,v)=>n.jsxs("div",{className:"property-card",children:[n.jsxs("div",{className:"property-header",children:[n.jsx("code",{className:"property-name",children:h.property}),n.jsx("span",{className:"property-description",children:h.description})]}),n.jsxs("div",{className:"property-values",children:[n.jsx("strong",{children:"Values:"}),n.jsx("code",{className:"values-code",children:h.values})]})]},v))})]},d))]}),n.jsxs("div",{className:"quick-reference",children:[n.jsx("h2",{children:"Quick Reference"}),n.jsxs("div",{className:"reference-grid",children:[n.jsxs("div",{className:"reference-card",children:[n.jsx("h3",{children:"HTML Structure"}),n.jsx("pre",{className:"reference-code",children:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- Content here -->
</body>
</html>`})]}),n.jsxs("div",{className:"reference-card",children:[n.jsx("h3",{children:"CSS Box Model"}),n.jsx("pre",{className:"reference-code",children:`/* Box Model Properties */
.element {
  width: 200px;        /* Content width */
  height: 100px;       /* Content height */
  padding: 20px;       /* Inner spacing */
  border: 2px solid;   /* Border */
  margin: 10px;        /* Outer spacing */
  box-sizing: border-box; /* Include border in width */
}`})]}),n.jsxs("div",{className:"reference-card",children:[n.jsx("h3",{children:"Flexbox Layout"}),n.jsx("pre",{className:"reference-code",children:`/* Flexbox Container */
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
}`})]}),n.jsxs("div",{className:"reference-card",children:[n.jsx("h3",{children:"CSS Grid Layout"}),n.jsx("pre",{className:"reference-code",children:`/* Grid Container */
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
}`})]})]})]})]})}function fm(){const[e,t]=w.useState("custom-properties"),[r,i]=w.useState(""),o=[{category:"CSS Custom Properties (Variables)",properties:[{property:"--variable-name",values:"value, 16px, #ff0000, 1.5, inherit, initial, unset",description:"Custom property declaration (like CSS variables)"},{property:"var(--variable-name)",values:"var(--primary-color), var(--spacing, 16px)",description:"Using custom properties (fallback value optional)"},{property:"calc()",values:"calc(100% - 20px), calc(2rem + 10px)",description:"Mathematical calculations with CSS values"},{property:"env()",values:"env(safe-area-inset-top), env(keyboard-height)",description:"Environment variables (device-specific values)"},{property:"attr()",values:"attr(data-width), attr(href)",description:"Attribute values (limited support)"}]},{category:"CSS Mixins & Functions",properties:[{property:"@mixin",values:"@mixin button($color) { background: $color; }",description:"SCSS/Sass mixin definition (reusable code blocks)"},{property:"@include",values:"@include button(red);",description:"SCSS/Sass mixin usage (includes mixin code)"},{property:"@function",values:"@function multiply($a, $b) { @return $a * $b; }",description:"SCSS/Sass function definition (returns values)"},{property:"@extend",values:"@extend .button;",description:"SCSS/Sass inheritance (extends existing styles)"},{property:"@import",values:'@import "variables"; @import "mixins";',description:"SCSS/Sass file imports (modular CSS)"},{property:"@use",values:'@use "sass:math"; @use "variables" as *;',description:"Modern SCSS/Sass module system"},{property:"@forward",values:'@forward "variables";',description:"SCSS/Sass module forwarding (re-exports)"}]},{category:"CSS-in-JS Properties",properties:[{property:"styled-components",values:'const Button = styled.button`color: ${props => props.primary ? "blue" : "red"};`',description:"Styled Components syntax (CSS-in-JS library)"},{property:"emotion",values:'const Button = styled.button`color: ${props => props.primary ? "blue" : "red"};`',description:"Emotion CSS-in-JS syntax (similar to styled-components)"},{property:"css prop",values:'css`color: ${props => props.primary ? "blue" : "red"};`',description:"Emotion css prop (inline styles with CSS-in-JS)"},{property:"keyframes",values:"const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`",description:"CSS-in-JS keyframes (animations)"},{property:"theme",values:"${props => props.theme.colors.primary}",description:"Theme access in CSS-in-JS (design system values)"},{property:"media queries",values:"${props => props.theme.breakpoints.md}",description:"Media queries in CSS-in-JS (responsive design)"}]},{category:"Tailwind CSS Utilities",properties:[{property:"Layout",values:"flex, grid, block, inline-block, hidden, visible",description:"Display and layout utilities"},{property:"Spacing",values:"p-4, m-2, px-6, py-3, space-x-4, space-y-2",description:"Padding, margin, and spacing utilities"},{property:"Sizing",values:"w-full, h-screen, max-w-md, min-h-32, w-1/2, h-auto",description:"Width, height, and sizing utilities"},{property:"Typography",values:"text-lg, font-bold, text-center, leading-relaxed, tracking-wide",description:"Text styling and typography utilities"},{property:"Colors",values:"bg-blue-500, text-red-600, border-green-300, text-white",description:"Background, text, and border color utilities"},{property:"Borders",values:"border, border-2, rounded-lg, border-gray-300, border-t",description:"Border styling and radius utilities"},{property:"Effects",values:"shadow-lg, opacity-50, blur-sm, grayscale, hover:scale-105",description:"Shadows, opacity, filters, and hover effects"},{property:"Transitions",values:"transition-all, duration-300, ease-in-out, delay-100",description:"Animation and transition utilities"},{property:"Responsive",values:"md:flex, lg:grid, sm:text-lg, xl:px-8",description:"Responsive design utilities (breakpoint prefixes)"},{property:"Dark Mode",values:"dark:bg-gray-800, dark:text-white",description:"Dark mode utilities (dark: prefix)"}]},{category:"CSS Modules",properties:[{property:"Local Scope",values:".button { } /* becomes .button_abc123 */",description:"CSS Modules local scoping (prevents conflicts)"},{property:"Composition",values:'.button { composes: baseButton from "./base.css"; }',description:"CSS Modules composition (inherits from other modules)"},{property:"Global Scope",values:":global(.global-class) { }",description:"CSS Modules global scope (escapes local scoping)"},{property:"Import",values:'import styles from "./Button.module.css";',description:"CSS Modules import (JavaScript import syntax)"},{property:"Usage",values:"className={styles.button}",description:"CSS Modules usage (applies scoped class names)"}]},{category:"CSS Grid Frameworks",properties:[{property:"Bootstrap Grid",values:"col-12, col-md-6, col-lg-4, row, container-fluid",description:"Bootstrap responsive grid system"},{property:"Foundation Grid",values:"small-12, medium-6, large-4, row, column",description:"Foundation responsive grid system"},{property:"Bulma Grid",values:"columns, column, is-12, is-6, is-4",description:"Bulma CSS framework grid system"},{property:"Material-UI Grid",values:"Grid container, Grid item, xs={12}, md={6}",description:"Material-UI responsive grid system"},{property:"Chakra UI Grid",values:"Grid, GridItem, templateColumns, gap",description:"Chakra UI grid system"}]},{category:"CSS Animation Libraries",properties:[{property:"Animate.css",values:"animate__animated, animate__fadeIn, animate__bounce",description:"Animate.css animation classes"},{property:"Framer Motion",values:"motion.div, animate, initial, exit, transition",description:"Framer Motion animation props"},{property:"React Spring",values:"useSpring, animated.div, from, to, config",description:"React Spring animation hooks"},{property:"GSAP",values:"gsap.to(), gsap.from(), gsap.timeline()",description:"GSAP animation library methods"},{property:"Lottie",values:"Lottie animation, bodymovin, After Effects",description:"Lottie animation format and libraries"}]},{category:"CSS Preprocessor Variables",properties:[{property:"SCSS Variables",values:"$primary-color: #007bff; $spacing: 16px;",description:"SCSS variable declarations (compile-time)"},{property:"Sass Variables",values:"$primary-color: #007bff; $spacing: 16px;",description:"Sass variable declarations (compile-time)"},{property:"Less Variables",values:"@primary-color: #007bff; @spacing: 16px;",description:"Less variable declarations (compile-time)"},{property:"Stylus Variables",values:"primary-color = #007bff; spacing = 16px;",description:"Stylus variable declarations (compile-time)"}]},{category:"Modern CSS Features",properties:[{property:"Container Queries",values:"@container (min-width: 400px) { }",description:"Container queries (responsive to parent size)"},{property:"Subgrid",values:"grid-template-columns: subgrid;",description:"CSS Grid subgrid (nested grid alignment)"},{property:"CSS Nesting",values:".parent { .child { color: red; } }",description:"CSS nesting (native CSS nesting)"},{property:"CSS Layers",values:"@layer base, components, utilities;",description:"CSS layers (cascade control)"},{property:"CSS Scope",values:"@scope (.parent) to (.child) { }",description:"CSS scope (limited style inheritance)"},{property:"CSS Container",values:"container-type: inline-size;",description:"CSS container queries setup"},{property:"CSS Houdini",values:"CSS.registerProperty(), CSS.paintWorklet",description:"CSS Houdini APIs (custom CSS features)"}]},{category:"Design System Properties",properties:[{property:"Design Tokens",values:"--color-primary, --spacing-unit, --font-family",description:"Design tokens (design system variables)"},{property:"Theme Variables",values:"--theme-light, --theme-dark, --theme-spacing",description:"Theme variables (multi-theme support)"},{property:"Component Variants",values:"--button-primary, --button-secondary, --button-size",description:"Component variant variables"},{property:"Breakpoint System",values:"--breakpoint-sm, --breakpoint-md, --breakpoint-lg",description:"Breakpoint system variables"},{property:"Typography Scale",values:"--font-size-xs, --font-size-sm, --font-size-base",description:"Typography scale variables"},{property:"Color Palette",values:"--color-50, --color-100, --color-500, --color-900",description:"Color palette variables"}]}].map(a=>({...a,properties:a.properties.filter(c=>c.property.toLowerCase().includes(r.toLowerCase())||c.description.toLowerCase().includes(r.toLowerCase()))})).filter(a=>a.properties.length>0);return n.jsxs("div",{className:"section",children:[n.jsx("h1",{children:"CSS Frameworks & Modern CSS"}),n.jsx("p",{children:"Comprehensive guide to CSS frameworks, preprocessors, and modern CSS features"}),n.jsx("div",{className:"search-container",children:n.jsx("input",{type:"text",placeholder:"Search CSS framework properties...",value:r,onChange:a=>i(a.target.value),className:"search-input"})}),n.jsxs("div",{className:"tab-navigation",children:[n.jsxs("button",{className:`tab ${e==="custom-properties"?"active":""}`,onClick:()=>t("custom-properties"),children:[n.jsx(cu,{className:"tab-icon"}),"Custom Properties"]}),n.jsxs("button",{className:`tab ${e==="preprocessors"?"active":""}`,onClick:()=>t("preprocessors"),children:[n.jsx(su,{className:"tab-icon"}),"Preprocessors"]}),n.jsxs("button",{className:`tab ${e==="frameworks"?"active":""}`,onClick:()=>t("frameworks"),children:[n.jsx(lu,{className:"tab-icon"}),"Frameworks"]}),n.jsxs("button",{className:`tab ${e==="modern"?"active":""}`,onClick:()=>t("modern"),children:[n.jsx(uu,{className:"tab-icon"}),"Modern CSS"]})]}),e==="custom-properties"&&n.jsxs("div",{className:"cheatsheet-content",children:[n.jsxs("div",{className:"cheatsheet-intro",children:[n.jsx("h2",{children:"CSS Custom Properties & Variables"}),n.jsx("p",{children:"Modern CSS variables and dynamic styling capabilities."})]}),o.filter(a=>a.category==="CSS Custom Properties (Variables)"||a.category==="Design System Properties").map((a,c)=>n.jsxs("div",{className:"cheatsheet-category",children:[n.jsx("h3",{className:"category-title",children:a.category}),n.jsx("div",{className:"properties-grid",children:a.properties.map((l,d)=>n.jsxs("div",{className:"property-card",children:[n.jsxs("div",{className:"property-header",children:[n.jsx("code",{className:"property-name",children:l.property}),n.jsx("span",{className:"property-description",children:l.description})]}),n.jsxs("div",{className:"property-values",children:[n.jsx("strong",{children:"Values:"}),n.jsx("code",{className:"values-code",children:l.values})]})]},d))})]},c))]}),e==="preprocessors"&&n.jsxs("div",{className:"cheatsheet-content",children:[n.jsxs("div",{className:"cheatsheet-intro",children:[n.jsx("h2",{children:"CSS Preprocessors & Mixins"}),n.jsx("p",{children:"SCSS, Sass, Less, and other CSS preprocessor features."})]}),o.filter(a=>a.category==="CSS Mixins & Functions"||a.category==="CSS Preprocessor Variables").map((a,c)=>n.jsxs("div",{className:"cheatsheet-category",children:[n.jsx("h3",{className:"category-title",children:a.category}),n.jsx("div",{className:"properties-grid",children:a.properties.map((l,d)=>n.jsxs("div",{className:"property-card",children:[n.jsxs("div",{className:"property-header",children:[n.jsx("code",{className:"property-name",children:l.property}),n.jsx("span",{className:"property-description",children:l.description})]}),n.jsxs("div",{className:"property-values",children:[n.jsx("strong",{children:"Values:"}),n.jsx("code",{className:"values-code",children:l.values})]})]},d))})]},c))]}),e==="frameworks"&&n.jsxs("div",{className:"cheatsheet-content",children:[n.jsxs("div",{className:"cheatsheet-intro",children:[n.jsx("h2",{children:"CSS Frameworks & Libraries"}),n.jsx("p",{children:"Popular CSS frameworks, utility libraries, and CSS-in-JS solutions."})]}),o.filter(a=>a.category==="Tailwind CSS Utilities"||a.category==="CSS-in-JS Properties"||a.category==="CSS Modules"||a.category==="CSS Grid Frameworks"||a.category==="CSS Animation Libraries").map((a,c)=>n.jsxs("div",{className:"cheatsheet-category",children:[n.jsx("h3",{className:"category-title",children:a.category}),n.jsx("div",{className:"properties-grid",children:a.properties.map((l,d)=>n.jsxs("div",{className:"property-card",children:[n.jsxs("div",{className:"property-header",children:[n.jsx("code",{className:"property-name",children:l.property}),n.jsx("span",{className:"property-description",children:l.description})]}),n.jsxs("div",{className:"property-values",children:[n.jsx("strong",{children:"Values:"}),n.jsx("code",{className:"values-code",children:l.values})]})]},d))})]},c))]}),e==="modern"&&n.jsxs("div",{className:"cheatsheet-content",children:[n.jsxs("div",{className:"cheatsheet-intro",children:[n.jsx("h2",{children:"Modern CSS Features"}),n.jsx("p",{children:"Latest CSS features and experimental capabilities."})]}),o.filter(a=>a.category==="Modern CSS Features").map((a,c)=>n.jsxs("div",{className:"cheatsheet-category",children:[n.jsx("h3",{className:"category-title",children:a.category}),n.jsx("div",{className:"properties-grid",children:a.properties.map((l,d)=>n.jsxs("div",{className:"property-card",children:[n.jsxs("div",{className:"property-header",children:[n.jsx("code",{className:"property-name",children:l.property}),n.jsx("span",{className:"property-description",children:l.description})]}),n.jsxs("div",{className:"property-values",children:[n.jsx("strong",{children:"Values:"}),n.jsx("code",{className:"values-code",children:l.values})]})]},d))})]},c))]}),n.jsxs("div",{className:"quick-reference",children:[n.jsx("h2",{children:"Quick Reference"}),n.jsxs("div",{className:"reference-grid",children:[n.jsxs("div",{className:"reference-card",children:[n.jsx("h3",{children:"CSS Custom Properties"}),n.jsx("pre",{className:"reference-code",children:`:root {
  --primary-color: #007bff;
  --spacing-unit: 16px;
  --font-family: 'Arial', sans-serif;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing-unit);
  font-family: var(--font-family);
}`})]}),n.jsxs("div",{className:"reference-card",children:[n.jsx("h3",{children:"SCSS Mixins"}),n.jsx("pre",{className:"reference-code",children:`@mixin button($color) {
  background: $color;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.primary-button {
  @include button(#007bff);
}

.secondary-button {
  @include button(#6c757d);
}`})]}),n.jsxs("div",{className:"reference-card",children:[n.jsx("h3",{children:"Tailwind CSS"}),n.jsx("pre",{className:"reference-code",children:`<!-- Tailwind utility classes -->
<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="bg-white p-8 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">
      Hello World
    </h1>
    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
      Click me
    </button>
  </div>
</div>`})]}),n.jsxs("div",{className:"reference-card",children:[n.jsx("h3",{children:"CSS-in-JS (Styled Components)"}),n.jsx("pre",{className:"reference-code",children:`const Button = styled.button\`
  background: \${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
\`;

function App() {
  return (
    <div>
      <Button primary>Primary</Button>
      <Button>Secondary</Button>
    </div>
  );
}`})]})]})]})]})}function gm(){return n.jsxs("div",{className:"section",children:[n.jsx("h1",{children:"Figma to React Mapping"}),n.jsx("p",{children:"How design concepts translate to code"}),n.jsxs("div",{className:"mapping-grid",children:[n.jsxs("div",{className:"mapping-card",children:[n.jsx("h3",{children:"Figma Frame → React Component"}),n.jsx("p",{children:"A frame in Figma becomes a component in React"}),n.jsx(P,{code:`// Figma Frame → React Component
function Card() {
  return (
    <div className="card">
      <h3>Card Title</h3>
      <p>Card content</p>
    </div>
  );
}`})]}),n.jsxs("div",{className:"mapping-card",children:[n.jsx("h3",{children:"Figma Component → Reusable React Component"}),n.jsx("p",{children:"Figma components become reusable React components with props"}),n.jsx(P,{code:`// Figma Component → React Component with Props
function Button({ text, variant }) {
  return (
    <button className={\`btn btn-\${variant}\`}>
      {text}
    </button>
  );
}`})]}),n.jsxs("div",{className:"mapping-card",children:[n.jsx("h3",{children:"Figma Auto Layout → CSS Flexbox/Grid"}),n.jsx("p",{children:"Auto layout properties translate to CSS layout"}),n.jsx(P,{code:`// Figma Auto Layout → CSS
.card-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}`})]}),n.jsxs("div",{className:"mapping-card",children:[n.jsx("h3",{children:"Figma Constraints → CSS Positioning"}),n.jsx("p",{children:"Constraints become responsive CSS rules"}),n.jsx(P,{code:`// Figma Constraints → CSS
.responsive-element {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}`})]}),n.jsxs("div",{className:"mapping-card",children:[n.jsx("h3",{children:"Figma Interactions → React Event Handlers"}),n.jsx("p",{children:"Figma interactions become JavaScript event handlers"}),n.jsx(P,{code:`// Figma Interaction → React Event Handler
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
}`})]}),n.jsxs("div",{className:"mapping-card",children:[n.jsx("h3",{children:"Figma Variants → React Conditional Rendering"}),n.jsx("p",{children:"Component variants become conditional rendering"}),n.jsx(P,{code:`// Figma Variants → React Conditional Rendering
function Button({ variant, disabled }) {
  return (
    <button 
      className={\`btn btn-\${variant} \${disabled ? 'disabled' : ''}\`}
      disabled={disabled}
    >
      Button Text
    </button>
  );
}`})]})]}),n.jsxs("div",{className:"concept-card",children:[n.jsx("h2",{children:"Design System Translation"}),n.jsxs("div",{className:"figma-analogy",children:[n.jsx("strong",{children:"Figma Analogy:"})," Your Figma design system can be directly translated to React components and CSS variables."]}),n.jsx(P,{code:`// Figma Design System → React/CSS
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
}`,explanation:"Your Figma design system can be directly translated to CSS variables and React components, ensuring consistency between design and code."})]})]})}function P({code:e,explanation:t}){return n.jsxs("div",{className:"code-example",children:[n.jsx("pre",{children:n.jsx("code",{children:e})}),n.jsxs("div",{className:"explanation",children:[n.jsx("strong",{children:"💡 Explanation:"})," ",t]})]})}Xi.createRoot(document.getElementById("root")).render(n.jsx(Tu.StrictMode,{children:n.jsx(rm,{})}));
