var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!w.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)w.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,w=-1;function te(){return g?!0:!(e.unstable_now()-w<C)}function ne(){if(g=!1,ee){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?T():ee=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,T=function(){ie.postMessage(null)}}else T=function(){_(ne,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)}},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),w=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case w:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function O(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function k(e,t){fe++,de[fe]=e.current,e.current=t}var me=pe(null),he=pe(null),ge=pe(null),_e=pe(null);function A(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ve(){O(me),O(he),O(ge)}function ye(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function be(e){he.current===e&&(O(me),O(he)),_e.current===e&&(O(_e),Qf._currentValue=ue)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Oe.call(Pt,e)?!0:Oe.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(le(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&tn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&tn(e,a,t[a])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[ht]||null;if(!i)throw Error(s(90));qt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Ut(Tt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Wt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),At(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)_i(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=gi(31,n,t,i),e.elementType=re,e.lanes=a,e;case y:return xi(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=gi(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case w:return e=gi(13,n,t,i),e.elementType=w,e.lanes=a,e;case te:return e=gi(19,n,t,i),e.elementType=te,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case ne:o=14;break a;case T:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=gi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-Ge(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(s(519));function Gi(e){throw Zi(Ei(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=pe(null),$i=null,ea=null;function ta(e,t,n){k(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,O(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ra(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ra(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function aa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Ar(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===_e.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(s(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=E.S;E.S=function(e,t){tu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=pe(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?k(wa,wa.current):k(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(s(460)),ka=Error(s(474)),Aa=Error(s(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(s(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(s(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===T&&Pa(a)===t.type)?(t=i(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=xi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case T:return t=Pa(t),f(e,t,n)}if(le(t)||oe(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===S)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Pa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===S)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Pa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===S)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),M&&Ii(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),M&&Ii(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Pa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Va(c,a),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===y?(c=xi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=bi(a.type,a.key,a.props,null,e.mode,c),Va(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=wi(a,e.mode,c),c.return=e,e=c}return o(e);case T:return a=Pa(a),b(e,r,a,c)}if(le(a))return h(e,r,a,c);if(oe(a)){if(l=oe(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Ba(a),c);if(a.$$typeof===S)return b(e,r,la(e,a),c);Ha(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Si(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=pe(null),ao=pe(0);function oo(e,t){e=Gl,k(ao,e),k(io,t),Gl=e|t.baseLanes}function so(){k(ao,Gl),k(io,io.current)}function co(){Gl=ao.current,O(io),O(ao)}var lo=pe(null),uo=null;function fo(e){var t=e.alternate;k(P,P.current&1),k(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){k(P,P.current),k(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(k(P,P.current),k(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){k(P,P.current),k(lo,lo.current)}function go(e){O(lo),uo===e&&(uo=null),O(P)}var P=pe(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(s(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){E.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(s(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var i=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=i)throw Error(s(301));if(i+=1,L=I=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}E.H=Gs,a=t(n,r)}while(bo);return a}function Ao(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(s(467)):Error(s(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===S)return ca(e)}throw Error(s(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Ar(a,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ar(a,t.memoizedState)||(B=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Uo(e,t,n){var r=F,i=z(),a=M;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Ar((I||i).memoizedState,n);if(o&&(i.memoizedState=n,B=!0),i=i.queue,ms(Ko.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,i){if(zs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};E.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Qo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Rs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=ks(e).queue;Es(e,i,t,ue,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(s(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,i=Po();if(M){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Wo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ps(Ko.bind(null,r,a,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,i,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(s(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Ei(r,n),i=nc(e.stateNode,r,i),Qa(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Wi&&(e=Error(s(422),{cause:r}),Zi(Ei(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Ei(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=rc(i),ic(i,e,n,r),Qa(n,i),!1}n=n.return}while(n!==null);return!1}var oc=Error(s(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref){if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(po(t),i){if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558))}else if(B||aa(e,t,n,!1),i=(n&e.childLanes)!==0,B||i){if(r=G,r!==null&&(o=ct(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,di(e,o),hu(r,e,o),oc;Du(),t=hc(e,t,n)}else e=a.treeContext,j=cf(o.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(P.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(M){if(i?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(ho(t),i=t.mode,c=Dc({mode:`hidden`,children:c},i),r=xi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,o,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,i=t.mode,r=Dc({mode:`visible`,children:r.children},i),c=xi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,o,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),o=(n&e.childLanes)!==0,B||o){if(o=G,o!==null&&(r=ct(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(o,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return i?(ho(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,i,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(i=c.cachePool,i===null?i=Da():(l=N._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=wc(e,o,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,k(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&oa(e)))}function Pc(e,t,n){switch(t.tag){case 3:A(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:ye(t);break;case 4:A(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=cc(null,t,e,r,n);break a}if(i===ne){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(s(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Xs(r,t.pendingProps),bc(e,t,r,i,n);case 3:a:{if(A(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ja(e,t),to(t,r,null,n);var o=t.memoizedState;if(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0),eo(),r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=xc(e,t,r,n);break a}if(r!==i){i=Ei(Error(s(424)),t),Zi(i),t=xc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===i){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Vi=t,Ui=!0,i=j,Zd(t.type)?(lf=i,j=cf(r.firstChild)):j=i),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((i=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?i=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,i=!0)),i||Gi(t)),ye(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Do(e,t,Ao,null,null,n),Qf._currentValue=i),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return A(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,sa(t),i=ca(i),r=r(i),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(i=Ta(),i===null&&(i=G,a=ma(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},qa(t),ta(t,N,i)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ta(t,N,r),r!==i.cache&&ia(t,[N],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Fa=ja,ka}}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Ic(t),a===null?(V(t),Lc(t,i,null,r,n)):(V(t),Rc(t,a))):a?a===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,a)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,i,e,r,n)),null;case 27:if(be(t),n=ge.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),null}e=me.current,Ji(t)?Ki(t,e):(e=ff(i,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(be(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),null}if(a=me.current,Ji(t))Ki(t,a);else{var o=Bd(ge.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[mt]=t,a[ht]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=ge.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Vi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[mt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(s(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[mt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),i=!1}else i=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(O(P),r=t.memoizedState,r===null)return V(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null){if(i)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=_o(e),a!==null){for(t.flags|=128,Bc(r,!1),e=a.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return k(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>nu&&(t.flags|=128,i=!0,Bc(r,!1),t.lanes=4194304)}}else{if(!i){if(e=_o(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!M)return V(t),null}else 2*Ne()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Bc(r,!1),t.lanes=4194304)}r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=P.current,k(P,i?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(s(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(P),null;case 4:return ve(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&O(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:O(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&O(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Xs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,!!(n.subtreeFlags&8772)):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null){if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[xt]||a[mt]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[mt]=e,Dt(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[mt]=e,Dt(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode)}else e.stateNode=If(i,r,e.memoizedProps)}else a===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){i=e.stateNode;try{$t(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Zc(e,i,n===null?i:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||i,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;tl(e,$c(e),i);break;case 5:var a=n.stateNode;n.flags&32&&($t(a,``),n.flags&=-33),tl(e,$c(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;el(e,$c(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:E.T===null?dt():dd()}function mu(){if(Yl===0){if(!(q&536870912)||M){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Yl=e}else Yl=536870912}return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),it(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||et(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-Ne(),10<i)){if(yu(r,t,Yl,!Hl),$e(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Nl(t,a,d);var m=(a&62914560)===a?eu-Ne():(a&4194048)===a?tu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=et(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,E.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=E.H;return E.H=Hs,e===null?Hs:e}function Eu(){var e=E.A;return E.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,E.H=i,E.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Ne()+500,Su(e,t)):Ul=et(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Ma(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,E.H=r,E.A=i,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!je();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=si,at(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,i=D.p,D.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,D.p=i,E.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,D.p=r,E.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,D.p=r,E.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=E.T,i=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,a)}catch{}return!0}finally{D.p=i,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(it(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),it(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Ne()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=nt()),e=di(e,t),e!==null&&(it(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ke(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=$e(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=$e(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?ke(Fe,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Ct(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),o=[];a:{var s=ti.get(e);if(s!==void 0){var c=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:c=qn;break;case`focusin`:u=`focus`,c=Rn;break;case`focusout`:u=`blur`,c=Rn;break;case`beforeblur`:case`afterblur`:c=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Yn;break;case Jr:case Yr:case Xr:c=zn;break;case ei:c=Xn;break;case`scroll`:case`scrollend`:c=jn;break;case`wheel`:c=Zn;break;case`copy`:case`cut`:case`paste`:c=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Jn;break;case`toggle`:case`beforetoggle`:c=Qn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Ct(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Tt(c),h=u==null?s:Tt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Tt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=vr;else if(fr(s)){if(yr)v=Or;else{v=Er;var y=Tr}}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Yt(s,`number`,s.value)}switch(y=r?Tt(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(o,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(o,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,a);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:nn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[ht]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}Qt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Dt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=ge.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Et(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Dt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,Dt(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),Dt(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,Dt(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Dt(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.8`)throw Error(s(527,Lp,`19.2.8`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Zs,a=Qs,o=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),u=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),d=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),f=e=>{let t=d(e);return t.charAt(0).toUpperCase()+t.slice(1)},p={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},m=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},h=n(),g=(0,h.createContext)({}),_=()=>(0,h.useContext)(g),v=(0,h.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:g=`currentColor`,className:v=``}=_()??{},y=r??f?Number(n??d)*24/Number(t??u):n??d;return(0,h.createElement)(`svg`,{ref:c,...p,width:t??u??p.width,height:t??u??p.height,stroke:e??g,strokeWidth:y,className:l(`lucide`,v,i),...!a&&!m(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,h.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),y=(e,t)=>{let n=(0,h.forwardRef)(({className:n,...r},i)=>(0,h.createElement)(v,{ref:i,iconNode:t,className:l(`lucide-${u(f(e))}`,`lucide-${e}`,n),...r}));return n.displayName=f(e),n},b=y(`bell`,[[`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`,key:`vwvbt9`}],[`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,key:`11g9vi`}]]),x=y(`brain`,[[`path`,{d:`M12 18V5`,key:`adv99a`}],[`path`,{d:`M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4`,key:`1e3is1`}],[`path`,{d:`M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5`,key:`1gqd8o`}],[`path`,{d:`M17.997 5.125a4 4 0 0 1 2.526 5.77`,key:`iwvgf7`}],[`path`,{d:`M18 18a4 4 0 0 0 2-7.464`,key:`efp6ie`}],[`path`,{d:`M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517`,key:`1gq6am`}],[`path`,{d:`M6 18a4 4 0 0 1-2-7.464`,key:`k1g0md`}],[`path`,{d:`M6.003 5.125a4 4 0 0 0-2.526 5.77`,key:`q97ue3`}]]),ee=y(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),S=y(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),C=y(`coins`,[[`path`,{d:`M13.744 17.736a6 6 0 1 1-7.48-7.48`,key:`bq4yh3`}],[`path`,{d:`M15 6h1v4`,key:`11y1tn`}],[`path`,{d:`m6.134 14.768.866-.5 2 3.464`,key:`17snzx`}],[`circle`,{cx:`16`,cy:`8`,r:`6`,key:`14bfc9`}]]),w=y(`crosshair`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`22`,x2:`18`,y1:`12`,y2:`12`,key:`l9bcsi`}],[`line`,{x1:`6`,x2:`2`,y1:`12`,y2:`12`,key:`13hhkx`}],[`line`,{x1:`12`,x2:`12`,y1:`6`,y2:`2`,key:`10w3f3`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`18`,key:`15g9kq`}]]),te=y(`eye-off`,[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,key:`ct8e1f`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`,key:`151rxh`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,key:`13bj9a`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]),ne=y(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),T=y(`flame`,[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,key:`1slcih`}]]),re=y(`gem`,[[`path`,{d:`M10.5 3 8 9l4 13 4-13-2.5-6`,key:`b3dvk1`}],[`path`,{d:`M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z`,key:`7w4byz`}],[`path`,{d:`M2 9h20`,key:`16fsjt`}]]),ie=y(`key-round`,[[`path`,{d:`M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`,key:`1s6t7t`}],[`circle`,{cx:`16.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`w0ekpg`}]]),ae=y(`log-out`,[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]),oe=y(`pause`,[[`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`kaeet6`}],[`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`1wsw3u`}]]),se=y(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),ce=y(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),le=y(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),E=y(`shirt`,[[`path`,{d:`M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z`,key:`1wgbhj`}]]),D=y(`shopping-bag`,[[`path`,{d:`M16 10a4 4 0 0 1-8 0`,key:`1ltviw`}],[`path`,{d:`M3.103 6.034h17.794`,key:`awc11p`}],[`path`,{d:`M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,key:`o988cm`}]]),ue=y(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),de=y(`swords`,[[`polyline`,{points:`14.5 17.5 3 6 3 3 6 3 17.5 14.5`,key:`1hfsw2`}],[`line`,{x1:`13`,x2:`19`,y1:`19`,y2:`13`,key:`1vrmhu`}],[`line`,{x1:`16`,x2:`20`,y1:`16`,y2:`20`,key:`1bron3`}],[`line`,{x1:`19`,x2:`21`,y1:`21`,y2:`19`,key:`13pww6`}],[`polyline`,{points:`14.5 6.5 18 3 21 3 21 6 17.5 9.5`,key:`hbey2j`}],[`line`,{x1:`5`,x2:`9`,y1:`14`,y2:`18`,key:`1hf58s`}],[`line`,{x1:`7`,x2:`4`,y1:`17`,y2:`20`,key:`pidxm4`}],[`line`,{x1:`3`,x2:`5`,y1:`19`,y2:`21`,key:`1pehsh`}]]),fe=y(`timer`,[[`line`,{x1:`10`,x2:`14`,y1:`2`,y2:`2`,key:`14vaq8`}],[`line`,{x1:`12`,x2:`15`,y1:`14`,y2:`11`,key:`17fdiu`}],[`circle`,{cx:`12`,cy:`14`,r:`8`,key:`1e1u0o`}]]),pe=y(`trophy`,[[`path`,{d:`M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2`,key:`pwuv1l`}],[`path`,{d:`M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2`,key:`1y54w1`}],[`path`,{d:`M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3`,key:`e30mpu`}],[`path`,{d:`M4 22h16`,key:`57wxv0`}],[`path`,{d:`M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,key:`1mhfuq`}],[`path`,{d:`M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3`,key:`i0yafy`}]]),O=y(`user-round`,[[`circle`,{cx:`12`,cy:`8`,r:`5`,key:`1hypcn`}],[`path`,{d:`M20 21a8 8 0 0 0-16 0`,key:`rfgkzh`}]]),k=y(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),me=y(`zap`,[[`path`,{d:`M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z`,key:`1v7up4`}]]),he=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),ge=e(((e,t)=>{t.exports=he()})),_e=c(),A=ge(),ve=`data:image/webp;base64,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`,ye=`data:image/webp;base64,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`,be=String.raw`
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap');
  :root {
    --line: rgba(161, 174, 207, 0.13);
    --panel: rgba(19, 24, 43, 0.76);
    --panel-strong: rgba(22, 28, 49, 0.94);
    --amber: #f8b84e;
    --coral: #ef7567;
    --cyan: #67cdd1;
    --outfit-indigo: #4b4fbb;
    --outfit-coral: #c6565d;
    --outfit-cyan: #267b8d;
    --outfit-gold: #af752e;
    --app-font-sans: 'Space Grotesk', sans-serif;
    --app-font-mono: 'DM Mono', monospace;
    --safe-bottom: env(safe-area-inset-bottom, 0px);
  }
  * { box-sizing: border-box; }
  html {
    background: #0e111f;
  }

  body {
    min-width: 320px;
    margin: 0;
    overflow-x: hidden;
    color: #f4f0e7;
    font-family: var(--app-font-sans);
    background: radial-gradient(circle at 74% -10%, rgba(239, 117, 103, .12), transparent 31rem),
                radial-gradient(circle at 10% 40%, rgba(103, 205, 209, .07), transparent 26rem), 
                #0e111f;
  }

  button, 
  input, 
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  button:focus-visible, 
  a:focus-visible, 
  input:focus-visible, 
  select:focus-visible {
    outline: 2px solid var(--amber);
    outline-offset: 3px;
  }

  /* Layout Utilities */
  .flex {
    display: flex;
  }

  .flex-1 {
    flex: 1 1 0%;
  }

  .justify-between {
    justify-content: space-between;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .mx-2 {
    margin-left: .5rem;
    margin-right: .5rem;
  }

  .ml-auto {
    margin-left: auto;
  }

  .ml-2 {
    margin-left: .5rem;
  }

  .mr-1 {
    margin-right: .25rem;
  }

  .mb-3 {
    margin-bottom: .75rem;
  }

  .mt-1 {
    margin-top: .25rem;
  }

  .mt-2 {
    margin-top: .5rem;
  }

  .mt-3 {
    margin-top: .75rem;
  }

  .mt-4 {
    margin-top: 1rem;
  }

  .mt-5 {
    margin-top: 1.25rem;
  }

  .mt-7 {
    margin-top: 1.75rem;
  }

  .mt-8 {
    margin-top: 2rem;
  }

  .p-8 {
    padding: 2rem;
  }

  .w-full {
    width: 100%;
  }

  .text-sm {
    font-size: .875rem;
  }

  .text-center {
    text-align: center;
  }

  .relative {
    position: relative;
  }

  .opacity-40 {
    opacity: .4;
  }

  .inline {
    display: inline;
  }

  .text-amber-300 {
    color: #fcd34d;
  }

  .text-cyan-300 {
    color: #67e8f9;
  }

  .text-slate-500 {
    color: #64748b;
  }

  .hover\:text-amber-300:hover {
    color: #fcd34d;
  }

  /* Animations */
  @keyframes drift {
    from {
      transform: translate3d(0, 0, 0) scale(1);
    }
    to {
      transform: translate3d(-18px, 20px, 0) scale(1.08);
    }
  }

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes hit {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-7px);
    }
    50% {
      transform: translateX(7px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .animate-rise {
    animation: rise .5s both;
  }

  .animate-hit {
    animation: hit .36s ease-in-out;
  }

  .stagger-1 {
    animation-delay: .06s;
  }

  .stagger-2 {
    animation-delay: .12s;
  }

  .stagger-3 {
    animation-delay: .18s;
  }

  .stagger-4 {
    animation-delay: .24s;
  }

  /* Shell & Background Effects */
  .derioux-shell {
    min-height: 100dvh;
    position: relative;
    isolation: isolate;
    overflow: hidden;
  }

  .derioux-shell::before {
    content: '';
    pointer-events: none;
    position: fixed;
    inset: 0;
    opacity: .028;
    z-index: 20;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");
    mix-blend-mode: screen;
  }

  .ambient-orb {
    position: fixed;
    border-radius: 999px;
    filter: blur(1px);
    pointer-events: none;
    z-index: -1;
    animation: drift 16s ease-in-out infinite alternate;
  }

  .ambient-orb.one {
    width: 22rem;
    height: 22rem;
    top: 18%;
    right: -10rem;
    background: rgba(239, 117, 103, .06);
  }

  .ambient-orb.two {
    width: 18rem;
    height: 18rem;
    bottom: -6rem;
    left: 16%;
    background: rgba(103, 205, 209, .05);
    animation-delay: -5s;
  }

  /* App Grid & Sidebar */
  .app-grid {
    display: grid;
    grid-template-columns: 246px minmax(0, 1fr);
    height: 100dvh;
    overflow: hidden;
  }

  .sidebar {
    position: sticky;
    top: 0;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    padding: 28px 18px 20px;
    border-right: 1px solid var(--line);
    background: rgba(12, 16, 29, .86);
    backdrop-filter: blur(18px);
    z-index: 10;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 0 10px;
    margin-bottom: 44px;
  }

  .brand-mark {
    display: block;
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 14px rgba(0, 0, 0, .4);
  }

  .brand-mark img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .brand-name {
    letter-spacing: .15em;
    font-size: 13px;
    font-weight: 700;
  }

  .brand-sub {
    color: #75809b;
    font-size: 9px;
    display: block;
    margin-top: 2px;
    letter-spacing: .08em;
  }

  .nav-label {
    padding: 0 12px;
    color: #707995;
    font: 10px var(--app-font-mono);
    text-transform: uppercase;
    letter-spacing: .15em;
    margin-bottom: 10px;
  }

  .nav-list {
    display: grid;
    gap: 5px;
  }

  .nav-btn {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 12px;
    border: 1px solid transparent;
    border-radius: 8px;
    color: #9ca7c4;
    background: transparent;
    text-align: left;
    transition: color .2s, background .2s, transform .2s;
  }

  .nav-btn:hover {
    color: #edf0f8;
    background: rgba(255, 255, 255, .035);
    transform: translateX(2px);
  }

  .nav-btn.active {
    color: var(--amber);
    background: rgba(248, 184, 78, .085);
    border-color: rgba(248, 184, 78, .14);
  }

  .nav-btn.active::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 17px;
    border-radius: 2px;
    background: var(--amber);
    left: -1px;
  }

  .nav-btn span {
    font-size: 13px;
    font-weight: 600;
  }

  .nav-count {
    margin-left: auto;
    font: 10px var(--app-font-mono);
    color: var(--coral);
  }

  .sidebar-bottom {
    margin-top: auto;
    border-top: 1px solid var(--line);
    padding-top: 16px;
  }

  .mini-profile {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 10px 13px;
    min-width: 0;
  }

  .avatar {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: linear-gradient(145deg, #e6a24c, #b24e52);
    color: #171522;
    font-weight: 700;
    border: 1px solid rgba(255, 255, 255, .17);
    flex-shrink: 0;
    overflow: hidden;
  }

  .mini-profile-copy {
    min-width: 0;
    overflow: hidden;
  }

  .mini-profile strong {
    display: block;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mini-profile small {
    color: #7c87a2;
    font: 10px var(--app-font-mono);
  }

  .logout-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    color: #7e89a6;
    padding: 10px;
    background: transparent;
    border: 0;
    font-size: 12px;
  }

  .logout-btn:hover {
    color: var(--coral);
  }

  /* Main Area & Topbar */
  .main-area {
    min-width: 0;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 0 clamp(24px, 3vw, 64px) 60px;
  }

  .topbar {
    position: sticky;
    top: 0;
    /* Pulls the top bar edge-to-edge by matching the parent container's padding */
    margin-left: -24px;
    margin-right: -24px;
    width: calc(100% + 48px);
    
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 0 24px;       /* Keeps your dashboard text and bell icon safely aligned */
    background: #0e111f;   /* Solid background to block scrolling content */
    border-bottom: 1px solid var(--line);
    flex-shrink: 0;
    z-index: 10;
  }

  .breadcrumb {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #76819d;
    font: 10px var(--app-font-mono);
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .breadcrumb b {
    color: var(--amber);
    font-weight: 500;
  }

  .top-actions {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
  }

  .icon-btn {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border: 1px solid var(--line);
    border-radius: 9px;
    color: #9ca7c4;
    background: rgba(22, 28, 49, .62);
    transition: color .2s, border .2s, transform .2s;
    flex-shrink: 0;
  }

  .icon-btn:hover {
    color: var(--amber);
    border-color: rgba(248, 184, 78, .4);
    transform: translateY(-2px);
  }

  .notif-dot {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--coral);
    margin: -22px 0 0 22px;
  }

  /* Typography & Panels */
  .page-wrap {
    width: 100%;
    padding-top: 36px;
  }

  .eyebrow {
    color: var(--amber);
    font: 10px var(--app-font-mono);
    letter-spacing: .18em;
    text-transform: uppercase;
  }

  .page-title {
    margin: 8px 0 0;
    color: #f4f0e7;
    font-size: clamp(26px, 4vw, 42px);
    line-height: 1.1;
    letter-spacing: -.04em;
    font-weight: 600;
    overflow-wrap: break-word;
  }

  .page-title em {
    color: var(--coral);
    font-style: normal;
  }

  .muted {
    color: #7f8aa5;
  }

  .panel {
    border: 1px solid var(--line);
    background: var(--panel);
    border-radius: 13px;
    box-shadow: 0 18px 50px rgba(0, 0, 0, .16);
    backdrop-filter: blur(16px);
    min-width: 0;
  }

  .panel-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 18px 20px;
    border-bottom: 1px solid var(--line);
    flex-wrap: wrap;
  }

  .panel-title {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -.01em;
  }

  .panel-kicker {
    color: #737f9e;
    font: 10px var(--app-font-mono);
    letter-spacing: .08em;
    text-transform: uppercase;
    overflow-wrap: anywhere;
  }

  /* Buttons */
  .btn-primary {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px solid #fac86c;
    color: #151626;
    background: var(--amber);
    border-radius: 7px;
    padding: 11px 15px;
    font-size: 12px;
    font-weight: 700;
    transition: transform .2s, background .2s;
    white-space: nowrap;
  }

  .btn-primary:hover {
    background: #ffd17c;
    transform: translateY(-2px);
  }

  .btn-primary:disabled {
    opacity: .45;
    cursor: not-allowed;
    transform: none;
  }

  .btn-secondary {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--line);
    color: #d4d9e8;
    background: rgba(255, 255, 255, .03);
    border-radius: 7px;
    padding: 10px 14px;
    font-size: 12px;
    font-weight: 600;
    transition: transform .2s, border .2s, color .2s;
    white-space: nowrap;
  }

  .btn-secondary:hover {
    color: var(--amber);
    border-color: rgba(248, 184, 78, .35);
    transform: translateY(-2px);
  }

  .btn-secondary:disabled {
    opacity: .45;
    cursor: not-allowed;
    transform: none;
  }

  .btn-danger {
    color: #ff9a8d;
    border-color: rgba(239, 117, 103, .3);
  }

  /* Progress & Stats */
  .progress-track {
    height: 7px;
    border-radius: 99px;
    background: #20263d;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, var(--amber), var(--coral));
    transition: width .6s cubic-bezier(.22, 1, .36, 1);
  }

  .stat-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
    margin-top: 26px;
  }

  .stat-card {
    padding: 16px;
    min-height: 106px;
    position: relative;
    overflow: hidden;
  }

  .stat-card::after {
    content: '';
    position: absolute;
    right: -25px;
    bottom: -35px;
    width: 90px;
    height: 90px;
    border: 1px solid rgba(248, 184, 78, .1);
    border-radius: 50%;
  }

  .stat-icon {
    color: var(--amber);
    margin-bottom: 12px;
  }

  .stat-value {
    font-size: 22px;
    letter-spacing: -.03em;
    font-weight: 600;
    color: #f4f0e7;
    overflow-wrap: anywhere;
  }

  .stat-label {
    margin-top: 4px;
    color: #7d87a1;
    font: 10px var(--app-font-mono);
    text-transform: uppercase;
    letter-spacing: .08em;
  }

  /* Dashboard Grid & Hero Card - Updated for Perfect Bottom Alignment */
  .dash-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
    gap: 14px;
    margin-top: 14px;
    align-items: stretch;
  }

  .dash-column {
    display: flex;
    flex-direction: column;
    gap: 14px;
    height: 100%;
  }

  .hero-card {
    padding: 25px;
    flex: 1;
    position: relative;
    overflow: hidden;
    background: linear-gradient(120deg, rgba(26, 35, 62, .9), rgba(20, 24, 43, .78));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .hero-card::before {
    content: '';
    position: absolute;
    width: 260px;
    height: 260px;
    right: -46px;
    top: -75px;
    border-radius: 50%;
    border: 1px solid rgba(103, 205, 209, .2);
    box-shadow: inset 0 0 0 18px rgba(103, 205, 209, .025), inset 0 0 0 38px rgba(103, 205, 209, .025);
  }

  .hero-card::after {
    content: '';
    position: absolute;
    top: 0;
    right: 22%;
    width: 1px;
    height: 100%;
    background: rgba(103, 205, 209, .12);
    transform: rotate(28deg);
    transform-origin: top;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 100%;
    min-width: 0;
  }

  .hero-title {
    margin: 10px 0;
    font-size: clamp(20px, 3vw, 31px);
    line-height: 1.15;
    letter-spacing: -.04em;
    overflow-wrap: break-word;
  }

  .hero-copy {
    color: #9fa8bf;
    font-size: 13px;
    line-height: 1.65;
    max-width: 410px;
  }

  .timer {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 22px;
    flex-wrap: wrap;
  }

  .timer-readout {
    color: var(--amber);
    font: 23px var(--app-font-mono);
    letter-spacing: .08em;
  }

  .timer-state {
    color: #8691ae;
    font: 10px var(--app-font-mono);
    text-transform: uppercase;
  }

  /* Quests */
  .quest-list {
    display: grid;
    gap: 0;
  }

  .quest-row {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid var(--line);
    transition: background .2s;
  }

  .quest-row:last-child {
    border-bottom: 0;
  }

  .quest-row:hover {
    background: rgba(255, 255, 255, .025);
  }

  .quest-mark {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border: 1px solid rgba(248, 184, 78, .32);
    border-radius: 8px;
    color: var(--amber);
    flex: 0 0 auto;
  }

  .quest-mark.done {
    color: var(--cyan);
    border-color: rgba(103, 205, 209, .35);
    background: rgba(103, 205, 209, .08);
  }

  .quest-copy {
    min-width: 0;
    flex: 1;
  }

  .quest-name {
    font-size: 12px;
    font-weight: 600;
    overflow-wrap: break-word;
  }

  .quest-meta {
    margin-top: 4px;
    color: #77829e;
    font: 10px var(--app-font-mono);
    overflow-wrap: break-word;
  }

  .reward {
    color: var(--amber);
    white-space: nowrap;
    font: 10px var(--app-font-mono);
    flex-shrink: 0;
  }

  /* Activity Grid */
  .activity-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-top: 14px;
  }

  .streak-card, 
  .goal-card {
    padding: 21px;
    min-width: 0;
  }

  .streak-big {
    display: flex;
    align-items: end;
    gap: 10px;
    margin: 14px 0 16px;
  }

  .streak-big strong {
    font-size: 48px;
    line-height: .8;
    letter-spacing: -.08em;
    color: var(--coral);
  }

  .streak-big span {
    color: #929cb2;
    font-size: 12px;
    padding-bottom: 3px;
  }

  .week {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 6px;
  }

  .day {
    display: grid;
    justify-items: center;
    gap: 7px;
    color: #7a849e;
    font: 9px var(--app-font-mono);
  }

  .day-dot {
    width: 23px;
    height: 23px;
    border-radius: 7px;
    border: 1px solid var(--line);
  }

  .day-dot.on {
    background: var(--amber);
    border-color: var(--amber);
    box-shadow: 0 0 18px rgba(248, 184, 78, .17);
  }

  .day-dot.today {
    border-color: var(--coral);
  }

  .goal-number {
    margin-top: 18px;
    font: 27px var(--app-font-mono);
    color: var(--cyan);
  }

  .goal-caption {
    color: #808ba7;
    font-size: 11px;
    margin-top: 4px;
  }

  .goal-bar {
    margin-top: 17px;
  }

  /* Toast Notifications */
  .toast-stack {
    position: fixed;
    z-index: 30;
    right: 16px;
    top: 16px;
    left: 16px;
    width: auto;
    display: grid;
    gap: 10px;
    justify-items: end;
  }

  .toast {
    display: flex;
    gap: 11px;
    align-items: flex-start;
    padding: 13px 14px;
    border: 1px solid rgba(248, 184, 78, .3);
    border-radius: 9px;
    background: #1b2138;
    box-shadow: 0 14px 30px rgba(0, 0, 0, .32);
    animation: rise .35s both;
    font-size: 12px;
    width: min(330px, 100%);
  }

  .toast svg {
    color: var(--amber);
    flex: 0 0 auto;
    margin-top: 1px;
  }

  .toast > div {
    min-width: 0;
    overflow-wrap: break-word;
  }

  .toast-error {
    border-color: rgba(239, 117, 103, .52);
  }

  /* Quest Cards & Layouts */
  .page-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 18px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .quest-cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .quest-card {
    padding: 20px;
    position: relative;
    overflow: hidden;
    min-width: 0;
  }

  .quest-card.featured {
    grid-column: span 2;
    display: grid;
    grid-template-columns: 1.3fr .7fr;
    gap: 22px;
    background: linear-gradient(125deg, rgba(34, 48, 73, .84), rgba(20, 24, 43, .75));
  }

  .quest-card.featured::after {
    content: 'BOSS';
    position: absolute;
    right: 22px;
    top: 22px;
    color: rgba(239, 117, 103, .62);
    font: 10px var(--app-font-mono);
    letter-spacing: .18em;
  }

  .quest-type {
    color: var(--coral);
    font: 10px var(--app-font-mono);
    text-transform: uppercase;
    letter-spacing: .14em;
  }

  .quest-card h3 {
    margin: 8px 0;
    font-size: 18px;
    letter-spacing: -.03em;
    overflow-wrap: break-word;
  }

  .quest-card p {
    margin: 0;
    color: #8e99b2;
    font-size: 12px;
    line-height: 1.6;
    overflow-wrap: break-word;
  }

  .quest-tags {
    display: flex;
    gap: 7px;
    flex-wrap: wrap;
    margin-top: 15px;
  }

  .tag {
    padding: 5px 7px;
    border-radius: 4px;
    background: rgba(255, 255, 255, .045);
    color: #9ea8bf;
    font: 9px var(--app-font-mono);
    white-space: nowrap;
  }

  .quest-action {
    display: flex;
    align-items: end;
    justify-content: end;
  }

  /* Battle Layout & Arena */
  .battle-layout {
    width: 100%;
    max-width: min(960px, 100%);
    margin: 0 auto;
  }

  .battle-arena {
    padding: 20px;
    margin-bottom: 14px;
    background: radial-gradient(circle at 50% 0%, rgba(103, 205, 209, .09), transparent 47%), var(--panel);
  }

  .battle-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .battle-label {
    color: var(--coral);
    font: 10px var(--app-font-mono);
    letter-spacing: .16em;
  }

  .battle-score {
    color: var(--amber);
    font: 11px var(--app-font-mono);
  }

  .combatants {
    display: grid;
    grid-template-columns: 1fr 100px 1fr;
    align-items: center;
    gap: 12px;
    padding: 28px 8px;
  }

  .combatant {
    text-align: center;
    min-width: 0;
  }

  .combatant-avatar {
    display: grid;
    place-items: center;
    width: 74px;
    height: 74px;
    margin: auto;
    border-radius: 22px;
    font-size: 22px;
    font-weight: 700;
    border: 1px solid rgba(255, 255, 255, .18);
  }

  .combatant-avatar.hero {
    color: #151626;
    background: linear-gradient(145deg, #e9af54, #bf5b5e);
  }

  .combatant-avatar.enemy {
    color: #d3f0e9;
    background: linear-gradient(145deg, #294b65, #1c304d);
    border-color: rgba(103, 205, 209, .32);
  }

  .combatant-name {
    margin-top: 9px;
    font-size: 11px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .health-track {
    height: 5px;
    margin-top: 8px;
    border-radius: 20px;
    background: #242b44;
    overflow: hidden;
  }

  .health-fill {
    height: 100%;
    background: var(--coral);
    transition: width .45s;
  }

  .health-fill.enemy-health {
    background: var(--cyan);
  }

  .versus {
    color: var(--coral);
    font: 13px var(--app-font-mono);
    text-align: center;
  }

  .question-panel {
    padding: 24px;
  }

  .question-index {
    color: var(--cyan);
    font: 10px var(--app-font-mono);
  }

  .question-text {
    margin: 10px 0 22px;
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: -.03em;
    overflow-wrap: break-word;
  }

  .answers {
    display: grid;
    gap: 9px;
  }

  .answer-btn {
    padding: 13px 15px;
    text-align: left;
    border: 1px solid var(--line);
    border-radius: 7px;
    background: rgba(255, 255, 255, .025);
    color: #cad0df;
    font-size: 12px;
    transition: border .2s, background .2s, transform .2s;
    overflow-wrap: break-word;
  }

  .answer-btn:hover {
    border-color: rgba(103, 205, 209, .5);
    background: rgba(103, 205, 209, .06);
    transform: translateX(3px);
  }

  .answer-btn.correct {
    color: #d8f6eb;
    background: rgba(103, 205, 209, .15);
    border-color: var(--cyan);
  }

  .answer-btn.wrong {
    color: #ffd2cb;
    background: rgba(239, 117, 103, .15);
    border-color: var(--coral);
  }

  .feedback {
    margin-top: 15px;
    padding: 12px;
    border-radius: 7px;
    background: rgba(248, 184, 78, .07);
    color: var(--amber);
    font: 11px var(--app-font-mono);
    overflow-wrap: break-word;
  }

  /* Shop */
  .shop-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 14px;
  }

  .shop-card {
    padding: 16px;
    min-width: 0;
  }

  .shop-card.locked {
    opacity: 0.6;
    filter: grayscale(0.4);
  }

  .item-art {
    display: grid;
    place-items: center;
    height: 132px;
    border-radius: 9px;
    background: linear-gradient(145deg, #1f2944, #182035);
    border: 1px solid var(--line);
    position: relative;
    overflow: hidden;
  }

  .item-art::after {
    content: '';
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 1px solid rgba(248, 184, 78, .18);
    position: absolute;
  }

  .item-glyph {
    position: relative;
    z-index: 1;
    color: var(--amber);
  }

  .shop-card h3 {
    margin: 15px 0 5px;
    font-size: 14px;
    overflow-wrap: break-word;
  }

  .shop-card p {
    color: #8490a9;
    font-size: 11px;
    line-height: 1.5;
    min-height: 34px;
    overflow-wrap: break-word;
  }

  .price-row {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
    margin-top: 15px;
    flex-wrap: wrap;
  }

  .price {
    color: var(--amber);
    font: 11px var(--app-font-mono);
    white-space: nowrap;
  }

  .owned {
    color: var(--cyan);
    font: 10px var(--app-font-mono);
  }

  .filter-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 18px;
    flex-wrap: wrap;
  }

  /* Profile */
  .profile-grid {
    display: grid;
    grid-template-columns: 290px minmax(0, 1fr);
    gap: 14px;
    align-items: start;
  }

  .profile-card {
    padding: 24px;
    text-align: center;
  }

  .profile-avatar {
    width: 100%;
    min-height: 200px;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile-card h2 {
    font-size: 20px;
    margin: 0;
    overflow-wrap: break-word;
  }

  .profile-card p {
    color: #8590aa;
    font-size: 11px;
    margin: 6px 0 20px;
  }

  .profile-customize-toggle {
    width: 100%;
    margin-top: 22px;
  }

  .level-chip {
    display: inline-flex;
    gap: 7px;
    align-items: center;
    padding: 7px 10px;
    color: var(--amber);
    border: 1px solid rgba(248, 184, 78, .2);
    border-radius: 6px;
    font: 10px var(--app-font-mono);
    white-space: nowrap;
  }

  .profile-panel {
    padding: 21px;
  }

  .option-grid {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 14px;
  }

  .option-btn {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    border: 1px solid var(--line);
    color: #172033;
    font-size: 11px;
    font-weight: 700;
    transition: transform .2s, border .2s;
    flex-shrink: 0;
  }

  .option-btn:hover {
    transform: translateY(-3px);
  }

  .option-btn.selected {
    border: 2px solid var(--amber);
    box-shadow: 0 0 0 2px rgba(248, 184, 78, .14);
  }

  .setting-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 16px 0;
    border-bottom: 1px solid var(--line);
    flex-wrap: wrap;
  }

  .setting-row:last-child {
    border-bottom: 0;
  }

  .setting-row strong {
    font-size: 12px;
    display: block;
  }

  .setting-row span {
    color: #8490a9;
    font-size: 11px;
  }

  .toggle {
    width: 39px;
    height: 22px;
    padding: 3px;
    border: 1px solid var(--line);
    border-radius: 99px;
    background: #20263d;
    flex-shrink: 0;
  }

  .toggle i {
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #8590a9;
    transition: transform .2s, background .2s;
  }

  .toggle.on {
    background: rgba(248, 184, 78, .22);
    border-color: rgba(248, 184, 78, .5);
  }

  .toggle.on i {
    transform: translateX(16px);
    background: var(--amber);
  }

  .shop-card.equipped {
    border-color: rgba(103, 205, 209, .45);
    box-shadow: 0 0 0 1px rgba(103, 205, 209, .08), 0 18px 50px rgba(0, 0, 0, .16);
  }

  .battle-complete {
    text-align: center;
  }

  .avatar-selectors {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 13px;
    margin-top: 16px;
  }

  .avatar-selectors > .option-label, 
  .avatar-selectors > .option-grid, 
  .avatar-selectors > .field-label.full {
    grid-column: 1 / -1;
  }

  .avatar-selectors .field-label {
    margin: 0;
  }

  /* Authentication Screen */
  .auth-screen {
    min-height: 100dvh;
    display: grid;
    place-items: center;
    padding: 30px 20px;
    position: relative;
    overflow: hidden;
  }

  .auth-screen::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: .16;
    background: linear-gradient(90deg, transparent 49.5%, rgba(103, 205, 209, .12) 50%, transparent 50.5%), 
                linear-gradient(transparent 49.5%, rgba(239, 117, 103, .08) 50%, transparent 50.5%);
    background-size: 82px 82px;
    mask-image: linear-gradient(to bottom, black, transparent 70%);
  }

  .auth-card {
    width: min(490px, 100%);
    position: relative;
    z-index: 1;
    padding: 32px;
    border: 1px solid var(--line);
    border-radius: 15px;
    background: rgba(18, 23, 41, .88);
    box-shadow: 0 25px 90px rgba(0, 0, 0, .34);
    animation: rise .6s both;
  }

  .auth-card.wide {
    width: min(720px, 100%);
  }

  .hero-logo {
    width: min(320px, 78%);
    margin: 0 auto 22px;
  }

  .hero-logo img {
    display: block;
    width: 100%;
    filter: drop-shadow(0 16px 28px rgba(0, 0, 0, .45));
  }

  .auth-title {
    font-size: clamp(30px, 6vw, 52px);
    line-height: 1.02;
    letter-spacing: -.06em;
    margin: 0;
    overflow-wrap: break-word;
  }

  .auth-title span {
    color: var(--amber);
  }

  .auth-copy {
    color: #929db6;
    font-size: 13px;
    line-height: 1.7;
    max-width: 410px;
    margin: 16px 0 26px;
  }

  .auth-form {
    display: grid;
    gap: 12px;
  }

  .field-label {
    color: #99a4bd;
    font: 10px var(--app-font-mono);
    text-transform: uppercase;
    letter-spacing: .1em;
  }

  .field-input {
    width: 100%;
    padding: 13px 14px;
    margin-top: 7px;
    border: 1px solid var(--line);
    border-radius: 7px;
    color: #eef0f7;
    background: rgba(255, 255, 255, .035);
    outline: none;
  }

  .field-input:focus, 
  .select-input:focus {
    border-color: rgba(248, 184, 78, .55);
  }

  .auth-actions {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 9px;
    flex-wrap: wrap;
  }

  .auth-meta {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-top: 22px;
    color: #77829d;
    font: 9px var(--app-font-mono);
    text-transform: uppercase;
    letter-spacing: .08em;
  }

  .status-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    margin-right: 6px;
    border-radius: 50%;
    background: var(--cyan);
    box-shadow: 0 0 9px rgba(103, 205, 209, .8);
  }

  .back-link, 
  .forgot-link {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #8994ae;
    border: 0;
    background: transparent;
    padding: 0;
    font-size: 11px;
  }

  .back-link {
    margin-bottom: 24px;
  }

  .back-link:hover, 
  .forgot-link:hover {
    color: var(--amber);
  }

  .forgot-link {
    display: block;
    margin: 15px auto 0;
    color: var(--amber);
  }

  .rotate-180 {
    transform: rotate(180deg);
  }

  .password-field {
    position: relative;
  }

  .password-field .field-input {
    padding-right: 42px;
  }

  .password-toggle {
    position: absolute;
    right: 12px;
    top: 50%;
    display: grid;
    place-items: center;
    transform: translateY(-50%);
    color: #7d89a4;
    border: 0;
    background: transparent;
    padding: 5px;
  }

  .password-toggle:hover {
    color: var(--amber);
  }

  .select-input {
    width: 100%;
    padding: 10px 11px;
    margin-top: 7px;
    border: 1px solid var(--line);
    border-radius: 7px;
    color: #eef0f7;
    background: #171c31;
    outline: none;
    font-size: 11px;
  }

  .color-input {
    display: block;
    width: 100%;
    height: 36px;
    margin-top: 7px;
    padding: 3px;
    border: 1px solid var(--line);
    border-radius: 7px;
    background: rgba(255, 255, 255, .04);
  }

  .timer-reset {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border: 1px solid var(--line);
    border-radius: 7px;
    color: #8893ad;
    background: rgba(255, 255, 255, .025);
    flex-shrink: 0;
  }

  .timer-reset:hover:not(:disabled) {
    color: var(--coral);
    border-color: rgba(239, 117, 103, .4);
  }

  .timer-reset:disabled {
    cursor: not-allowed;
    opacity: .35;
  }

  .auth-foot {
    color: #79849f;
    font-size: 11px;
    text-align: center;
    margin: 22px 0 0;
  }

  .text-button {
    color: var(--amber);
    border: 0;
    background: transparent;
    font-size: inherit;
    padding: 0;
  }

  .strand-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 18px 0;
  }

  .strand-btn {
    min-height: 96px;
    padding: 14px;
    text-align: left;
    border: 1px solid var(--line);
    border-radius: 9px;
    color: #ced4e3;
    background: rgba(255, 255, 255, .025);
    transition: border .2s, transform .2s, background .2s;
  }

  .strand-btn:hover, 
  .strand-btn.selected {
    border-color: var(--amber);
    background: rgba(248, 184, 78, .08);
    transform: translateY(-2px);
  }

  .strand-btn strong {
    display: block;
    font-size: 12px;
  }

  .strand-btn small {
    display: block;
    margin-top: 8px;
    color: #7e89a4;
    font-size: 10px;
    line-height: 1.4;
  }

  .avatar-editor {
    display: grid;
    grid-template-columns: 230px minmax(0, 1fr);
    align-items: center;
    gap: 32px;
    margin-top: 24px;
  }

  .avatar-stage-large {
    display: grid;
    place-items: center;
    min-height: 320px;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: radial-gradient(circle, rgba(103, 205, 209, .10), transparent 58%), rgba(7, 11, 20, .28);
  }

  .option-label {
    color: #8994ae;
    font: 10px var(--app-font-mono);
    text-transform: uppercase;
    letter-spacing: .1em;
    margin: 17px 0 9px;
  }

  .confirm-card {
    text-align: center;
  }

  .confirm-card .auth-copy {
    margin-left: auto;
    margin-right: auto;
  }

  .confirm-avatar {
    width: 156px;
    height: 156px;
    display: grid;
    place-items: center;
    margin: 0 auto 20px;
    border: 1px solid rgba(248, 184, 78, .2);
    border-radius: 24px;
    background: rgba(248, 184, 78, .05);
  }

  /* Pixel Avatar */
  .pixel-avatar {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 96px;
    height: 152px;
    filter: drop-shadow(0 12px 10px rgba(0, 0, 0, .22));
    image-rendering: pixelated;
  }

  .pixel-avatar.small {
    transform: scale(.52);
    transform-origin: center;
    width: 54px;
    height: 84px;
    margin: -14px;
  }

  .pixel-avatar.large {
    transform: scale(1.18);
  }

  .pixel-avatar.medium {
    transform: scale(1.05);
  }

  .pixel-head {
    position: relative;
    z-index: 2;
    width: 48px;
    height: 42px;
    margin-top: 7px;
    border: 3px solid rgba(20, 22, 38, .9);
    border-radius: 5px;
  }

  .pixel-hair {
    position: absolute;
    z-index: 3;
    top: -7px;
    left: -4px;
    width: 50px;
    height: 17px;
    border: 3px solid rgba(20, 22, 38, .9);
    border-bottom: 0;
  }

  .pixel-hair.long {
    height: 31px;
    border-radius: 5px 5px 2px 2px;
  }

  .pixel-hair.curly {
    height: 20px;
    border-radius: 12px 12px 4px 4px;
  }

  .pixel-eye {
    position: absolute;
    top: 22px;
    width: 5px;
    height: 5px;
    background: #182038;
  }

  .pixel-eye.left {
    left: 10px;
  }

  .pixel-eye.right {
    right: 10px;
  }

  .pixel-body {
    position: relative;
    z-index: 1;
    width: 59px;
    height: 54px;
    margin-top: 3px;
    border: 3px solid rgba(20, 22, 38, .9);
    border-radius: 5px;
  }

  .pixel-body.feminine {
    width: 53px;
    border-radius: 7px 7px 4px 4px;
  }

  .pixel-body.hoodie {
    border-radius: 10px 10px 5px 5px;
  }

  .pixel-body.hoodie::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -6px;
    left: 8px;
    width: 43px;
    height: 15px;
    border: 3px solid rgba(20, 22, 38, .9);
    border-radius: 10px 10px 0 0;
    background: inherit;
  }

  .pixel-body.jacket::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 50%;
    width: 2px;
    height: 45px;
    background: rgba(20, 22, 38, .5);
    transform: translateX(-50%);
  }

  .pixel-arm {
    position: absolute;
    top: 4px;
    width: 12px;
    height: 42px;
    border: 3px solid rgba(20, 22, 38, .9);
  }

  .pixel-arm.left {
    left: -15px;
  }

  .pixel-arm.right {
    right: -15px;
  }

  .pixel-legs {
    display: flex;
    gap: 5px;
    margin-top: 2px;
  }

  .pixel-leg {
    width: 23px;
    height: 35px;
    border: 3px solid rgba(20, 22, 38, .9);
    background: #272c49;
  }

  .pixel-legs.shorts .pixel-leg {
    height: 19px;
  }

  .pixel-skirt {
    width: 62px;
    height: 30px;
    margin-top: 2px;
    border: 3px solid rgba(20, 22, 38, .9);
    clip-path: polygon(18% 0, 82% 0, 100% 100%, 0% 100%);
  }

  .pixel-shoes {
    display: flex;
    gap: 5px;
    margin-top: -5px;
    z-index: 3;
  }

  .pixel-shoes span {
    width: 29px;
    height: 11px;
    border: 3px solid rgba(20, 22, 38, .9);
    background: #181b2d;
  }

  .pixel-shoes.white span {
    background: #c9d3dd;
  }

  .pixel-shoes.amber span {
    background: var(--amber);
  }

  .pixel-shoes.skirt-shoes {
    margin-top: 4px;
  }

  .pixel-shadow {
    position: absolute;
    bottom: -2px;
    width: 76px;
    height: 9px;
    border-radius: 50%;
    background: rgba(0, 0, 0, .28);
    filter: blur(2px);
  }

  .avatar-initials {
    position: absolute;
    z-index: 4;
    bottom: 34px;
    color: rgba(255, 255, 255, .44);
    font: 7px var(--app-font-mono);
    letter-spacing: .08em;
  }

  .profile-avatar .pixel-avatar {
    transform: scale(1.25);
  }

  .profile-avatar .pixel-avatar .avatar-initials, 
  .avatar .pixel-avatar .avatar-initials {
    display: none;
  }

  .avatar > .pixel-avatar {
    transform: scale(.5);
    transform-origin: center;
  }

  /* ===== TABLET (<=1080px) ===== */
  @media (max-width: 1080px) {
    .shop-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .profile-grid {
      grid-template-columns: 240px minmax(0, 1fr);
    }
    .dash-grid {
      grid-template-columns: 1fr;
    }
    .hero-content {
      max-width: 100%;
    }
  }

  /* ===== SMALL TABLET / LANDSCAPE PHONE (<=860px) ===== */
  @media (max-width: 768px) {
    .main-area {
      padding: 0 22px 50px;
    }
    .app-grid {
      grid-template-columns: 72px minmax(0, 1fr);
    }
    .sidebar {
      padding: 22px 10px 16px;
      align-items: center;
    }
    .brand {
      padding: 0;
      margin-bottom: 34px;
    }
    .brand-copy,
    .nav-label,
    .nav-btn span,
    .nav-count,
    .mini-profile-copy,
    .logout-btn span {
      display: none;
    }
    .nav-btn {
      justify-content: center;
      padding: 12px;
    }
    .nav-btn.active::before {
      left: -10px;
    }
    .sidebar-bottom {
      width: 100%;
    }
    .mini-profile {
      justify-content: center;
      padding-left: 0;
      padding-right: 0;
    }
    .logout-btn {
      justify-content: center;
    }
    .activity-grid,
    .profile-grid {
      grid-template-columns: 1fr;
    }
    .stat-row {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* ===== PHONE (<=640px) ===== */
  @media (max-width: 640px) {
    .derioux-shell {
      display: flex;
      flex-direction: column;
      height: 100dvh;
      overflow: hidden;
    }
    .app-grid {
      display: flex;
      flex-direction: column;
      flex: 1 1 0%;
      height: 100%;
      grid-template-columns: none;
      padding-bottom: 0;
      overflow: hidden;
    }
    .sidebar {
      position: sticky;
      z-index: 15;
      bottom: 0;
      top: auto;
      width: 100%;
      height: calc(64px + var(--safe-bottom));
      padding: 5px 8px calc(5px + var(--safe-bottom));
      border-right: 0;
      border-top: 1px solid var(--line);
      flex-direction: row;
      justify-content: center;
      background: rgba(12, 16, 29, .97);
    }
    .brand,
    .sidebar-bottom {
      display: none;
    }
    .nav-list {
      width: 100%;
      display: flex;
      justify-content: space-around;
      gap: 2px;
    }
    .nav-btn {
      display: grid;
      place-items: center;
      gap: 3px;
      padding: 7px 6px;
      width: auto;
    }
    .nav-btn span {
      display: block;
      font-size: 9px;
    }
    .nav-btn.active::before {
      width: 24px;
      height: 2px;
      left: 50%;
      top: 0;
      transform: translateX(-50%);  
    }
    .main-area {
      flex: 1 1 0%;
      height: auto;
      overflow-y: auto;
      padding: 0 14px 0 14px;
    }
      .sidebar {
      position: fixed;
      z-index: 100;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: calc(60px + var(--safe-bottom));
      padding: 6px 12px calc(6px + var(--safe-bottom)) 12px;
      border-right: 0;
      border-top: 1px solid var(--line);
      flex-direction: row;
      justify-content: space-around;
      background: rgba(12, 16, 29, 0.97);
      backdrop-filter: blur(12px);
    }
    .topbar {
      height: 48px;
      margin-left: -14px;
      margin-right: -14px;
      width: calc(100% + 28px);
      padding: 0 14px;
    }
    .page-wrap {
      padding-top: 20px;
    }
    .top-actions {
      gap: 8px;
    }
    .stat-row {
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }
    .stat-card {
      min-height: 88px;
      padding: 12px;
    }
    .stat-value {
      font-size: 19px;
    }
    .dash-grid,
    .activity-grid,
    .profile-grid {
      grid-template-columns: 1fr;
    }
    .hero-content {
      max-width: 100%;
    }
    .hero-card {
      padding: 18px;
      min-height: unset;
    }
    .quest-cards,
    .shop-grid {
      grid-template-columns: 1fr;
    }
    .quest-card.featured {
      grid-column: auto;
      display: block;
    }
    .quest-action {
      justify-content: start;
      margin-top: 18px;
    }
    .page-toolbar {
      align-items: start;
      flex-direction: column;
    }
    .combatants {
      grid-template-columns: 1fr 50px 1fr;
      padding: 18px 0;
      gap: 6px;
    }
    .combatant-avatar {
      width: 54px;
      height: 54px;
      font-size: 17px;
    }
    .question-panel {
      padding: 16px;
    }
    .question-text {
      font-size: 16px;
    }
    .auth-card {
      padding: 22px 18px;
    }
    .strand-grid {
      grid-template-columns: 1fr;
    }
    .avatar-editor {
      grid-template-columns: 1fr;
      gap: 18px;
    }
    .avatar-stage-large {
      min-height: 220px;
    }
    .avatar-selectors {
      grid-template-columns: 1fr;
    }
    .auth-meta {
      flex-direction: column;
      align-items: center;
    }
    .confirm-avatar {
      margin-top: 8px;
      width: 130px;
      height: 130px;
    }
    .toast-stack {
      right: 10px;
      left: 10px;
      top: 10px;
      justify-items: stretch;
    }
    .toast {
      width: 100%;
    }
    .profile-avatar {
      min-height: 150px;
    }
    .profile-avatar .pixel-avatar {
      transform: scale(1.05);
    }
  }
  `;if(!document.getElementById(`derioux-styles`)){let e=document.createElement(`style`);e.id=`derioux-styles`,e.textContent=be,document.head.appendChild(e)}var xe=`derioux-accounts-v2`,Se=[`#e9af54`,`#67cdd1`,`#ef7567`,`#9b8ed4`,`#77b85c`,`#d998b3`],Ce=[[`STEM`,`Science, technology, engineering, and mathematics.`],[`ABM`,`Accountancy, business, management, and economics.`],[`HUMSS`,`Humanities, social sciences, history, and language.`],[`GENERAL KNOWLEDGE`,`Multi-disciplinary quests and critical thinking.`]],we=[{id:`q1`,title:`Enter the study zone`,meta:`Focus for 25 minutes`,rewardXp:80,rewardCoins:25,done:!1},{id:`q2`,title:`Clear the mental cache`,meta:`Complete 3 practice problems`,rewardXp:120,rewardCoins:40,done:!1},{id:`q3`,title:`Algebra Abyss`,meta:`Master foundational expressions`,rewardXp:150,rewardCoins:50,done:!1},{id:`q4`,title:`Keep the signal alive`,meta:`Return tomorrow`,rewardXp:50,rewardCoins:15,done:!1}],Te=[{id:`s1`,name:`Focus Visor`,copy:`A rare drop for long-range concentration.`,price:280,icon:w,category:`Gear`},{id:`s2`,name:`Night Mode Cape`,copy:`For making the late shift feel legendary.`,price:420,icon:ue,category:`Cosmetics`},{id:`s3`,name:`Recall Module`,copy:`A small boost before your next encounter.`,price:190,icon:x,category:`Consumables`},{id:`s4`,name:`Amber Shield`,copy:`Protect your streak from incoming distractions.`,price:360,icon:re,category:`Gear`},{id:`s5`,name:`Deep Work Badge`,copy:`Proof that you stayed when it got hard.`,price:250,icon:pe,category:`Cosmetics`},{id:`s6`,name:`Algebra Blade`,copy:`Unlocks advanced problem-solving speed.`,price:510,icon:me,category:`Gear`,requiredQuestId:`q3`}],Ee=[{id:`a1`,title:`First Spark`,desc:`Complete your very first focus window.`,icon:me,unlocked:!0},{id:`a2`,title:`Algebra Master`,desc:`Clear Quest 3: Algebra Abyss.`,icon:pe,unlocked:!1,requiredQuestId:`q3`},{id:`a3`,title:`Deep Concentration`,desc:`Accumulate over 60 minutes of focus time.`,icon:x,unlocked:!1},{id:`a4`,title:`Market Tycoon`,desc:`Unlock your first shop gear item.`,icon:D,unlocked:!1}],De=[{question:`Which organelle is known as the powerhouse of the cell?`,options:[`Nucleus`,`Mitochondria`,`Ribosome`,`Golgi apparatus`],answer:1},{question:`What is the derivative of x²?`,options:[`x`,`2`,`2x`,`x²`],answer:2},{question:`Which force keeps planets in orbit around the sun?`,options:[`Friction`,`Gravity`,`Magnetism`,`Tension`],answer:1}],Oe=1500,ke=100,Ae=40,je=240,Me=e=>{let t=Math.floor(e/je)+1,n=(t-1)*je;return{level:t,floorXp:n,ceilingXp:t*je,progressPct:Math.min(100,Math.round((e-n)/je*100))}},Ne=()=>({gender:`neutral`,skin:`#e9af54`,hair:`short`,hairColor:`#2d1b2e`,topType:`tshirt`,topColor:`indigo`,bottomType:`pants`,shoes:`dark`}),Pe=()=>({coins:0,xp:0,quests:we.map(e=>({...e})),owned:[],equipped:null,studyMinutes:0,activityDates:[]}),Fe=e=>e.split(` `).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()||`AR`,Ie=e=>{let t=e.getTimezoneOffset();return new Date(e.getTime()-t*6e4).toISOString().slice(0,10)},Le=(e,t)=>{let n=new Date(e);return n.setDate(n.getDate()+t),n},Re=e=>{let t=new Set(e),n=0,r=new Date;for(t.has(Ie(r))||(r=Le(r,-1));t.has(Ie(r));)n++,r=Le(r,-1);return n},ze=()=>{let e=[];for(let t=6;t>=0;t--){let n=Le(new Date,-t);e.push({iso:Ie(n),label:n.toLocaleDateString(`en-US`,{weekday:`narrow`})})}return e},Be=()=>{try{return JSON.parse(window.localStorage.getItem(xe)||`{}`)}catch{return{}}},Ve=e=>{try{window.localStorage.setItem(xe,JSON.stringify(e))}catch{}},He=class extends h.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error(e,t.componentStack)}render(){return this.state.error?(0,A.jsx)(`div`,{className:`auth-screen`,children:(0,A.jsxs)(`div`,{className:`auth-card`,children:[(0,A.jsx)(`div`,{className:`eyebrow`,children:`SYSTEM SIGNAL LOST`}),(0,A.jsxs)(`h1`,{className:`auth-title`,children:[`Reload the`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{children:`run.`})]}),(0,A.jsx)(`p`,{className:`auth-copy`,children:`DERIOUX hit an unexpected error. Refresh the page to return to your player file.`}),(0,A.jsxs)(`button`,{className:`btn-primary w-full`,onClick:()=>window.location.reload(),children:[`Reload DERIOUX `,(0,A.jsx)(ce,{size:15})]})]})}):this.props.children}};function Ue(){return(0,A.jsxs)(`div`,{className:`brand`,"data-testid":`brand-logo`,children:[(0,A.jsx)(`div`,{className:`brand-mark`,children:(0,A.jsx)(`img`,{src:ve,alt:`DERIOUX crest`,width:34,height:34})}),(0,A.jsxs)(`div`,{className:`brand-copy`,children:[(0,A.jsx)(`strong`,{className:`brand-name`,children:`DERIOUX`}),(0,A.jsx)(`span`,{className:`brand-sub`,children:`FOCUS // RPG`})]})]})}function We(){return(0,A.jsx)(`div`,{className:`hero-logo`,children:(0,A.jsx)(`img`,{src:ye,alt:`DERIOUX Explorer's Academy`})})}function Ge({avatar:e,initials:t,size:n=`medium`}){return(0,A.jsxs)(`div`,{className:`pixel-avatar ${n}`,"aria-label":`${t} pixel avatar`,children:[(0,A.jsx)(`div`,{className:`pixel-shadow`}),(0,A.jsxs)(`div`,{className:`pixel-head`,style:{background:e.skin},children:[e.hair!==`bald`&&(0,A.jsx)(`div`,{className:`pixel-hair ${e.hair}`,style:{background:e.hairColor}}),(0,A.jsx)(`span`,{className:`pixel-eye left`}),(0,A.jsx)(`span`,{className:`pixel-eye right`})]}),(0,A.jsxs)(`div`,{className:`pixel-body ${e.gender} ${e.topType}`,style:{background:`var(--outfit-${e.topColor})`},children:[(0,A.jsx)(`span`,{className:`pixel-arm left`,style:{background:e.skin}}),(0,A.jsx)(`span`,{className:`pixel-arm right`,style:{background:e.skin}})]}),e.bottomType===`skirt`?(0,A.jsx)(`div`,{className:`pixel-skirt`,style:{background:`var(--outfit-${e.topColor})`}}):(0,A.jsxs)(`div`,{className:`pixel-legs ${e.bottomType}`,children:[(0,A.jsx)(`span`,{className:`pixel-leg`}),(0,A.jsx)(`span`,{className:`pixel-leg`})]}),(0,A.jsxs)(`div`,{className:`pixel-shoes ${e.shoes} ${e.bottomType===`skirt`?`skirt-shoes`:``}`,children:[(0,A.jsx)(`span`,{}),(0,A.jsx)(`span`,{})]}),(0,A.jsx)(`span`,{className:`avatar-initials`,children:t})]})}function Ke({items:e,onDismiss:t}){return(0,A.jsx)(`div`,{className:`toast-stack`,"aria-live":`polite`,children:e.map(e=>(0,A.jsxs)(`div`,{className:`toast ${e.tone===`error`?`toast-error`:``}`,children:[(0,A.jsx)(b,{size:15}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:e.title}),(0,A.jsx)(`div`,{className:`muted`,children:e.copy})]}),(0,A.jsx)(`button`,{"aria-label":`Dismiss notification`,onClick:()=>t(e.id),className:`ml-auto text-slate-500 hover:text-amber-300`,children:(0,A.jsx)(k,{size:14})})]},e.id))})}function qe({avatar:e,setAvatar:t}){return(0,A.jsxs)(`div`,{className:`avatar-selectors`,children:[(0,A.jsxs)(`label`,{className:`field-label`,children:[`Gender`,(0,A.jsxs)(`select`,{className:`select-input`,value:e.gender,onChange:n=>t({...e,gender:n.target.value}),children:[(0,A.jsx)(`option`,{value:`neutral`,children:`Neutral silhouette`}),(0,A.jsx)(`option`,{value:`feminine`,children:`Feminine silhouette`})]})]}),(0,A.jsxs)(`label`,{className:`field-label`,children:[`Hair style`,(0,A.jsxs)(`select`,{className:`select-input`,value:e.hair,onChange:n=>t({...e,hair:n.target.value}),children:[(0,A.jsx)(`option`,{value:`short`,children:`Short block crop`}),(0,A.jsx)(`option`,{value:`long`,children:`Long flowing`}),(0,A.jsx)(`option`,{value:`curly`,children:`Curly texture`}),(0,A.jsx)(`option`,{value:`bald`,children:`Bald / clean`})]})]}),(0,A.jsxs)(`label`,{className:`field-label`,children:[`Hair color`,(0,A.jsx)(`input`,{className:`color-input`,type:`color`,value:e.hairColor,onChange:n=>t({...e,hairColor:n.target.value})})]}),(0,A.jsxs)(`label`,{className:`field-label`,children:[`Clothes type`,(0,A.jsxs)(`select`,{className:`select-input`,value:e.topType,onChange:n=>t({...e,topType:n.target.value}),children:[(0,A.jsx)(`option`,{value:`tshirt`,children:`T-shirt`}),(0,A.jsx)(`option`,{value:`hoodie`,children:`Hoodie`}),(0,A.jsx)(`option`,{value:`jacket`,children:`Jacket`})]})]}),(0,A.jsxs)(`label`,{className:`field-label`,children:[`Top color`,(0,A.jsxs)(`select`,{className:`select-input`,value:e.topColor,onChange:n=>t({...e,topColor:n.target.value}),children:[(0,A.jsx)(`option`,{value:`indigo`,children:`Indigo academy`}),(0,A.jsx)(`option`,{value:`coral`,children:`Coral combat`}),(0,A.jsx)(`option`,{value:`cyan`,children:`Cyan signal`}),(0,A.jsx)(`option`,{value:`gold`,children:`Gold scholar`})]})]}),(0,A.jsxs)(`label`,{className:`field-label`,children:[`Pants or skirt`,(0,A.jsxs)(`select`,{className:`select-input`,value:e.bottomType,onChange:n=>t({...e,bottomType:n.target.value}),children:[(0,A.jsx)(`option`,{value:`pants`,children:`Pants`}),(0,A.jsx)(`option`,{value:`shorts`,children:`Shorts`}),(0,A.jsx)(`option`,{value:`skirt`,children:`Skirt`})]})]}),(0,A.jsxs)(`label`,{className:`field-label`,children:[`Shoes type`,(0,A.jsxs)(`select`,{className:`select-input`,value:e.shoes,onChange:n=>t({...e,shoes:n.target.value}),children:[(0,A.jsx)(`option`,{value:`dark`,children:`Night runners`}),(0,A.jsx)(`option`,{value:`white`,children:`Cloud trainers`}),(0,A.jsx)(`option`,{value:`amber`,children:`Amber boots`})]})]}),(0,A.jsx)(`div`,{className:`option-label`,children:`Skin tone`}),(0,A.jsx)(`div`,{className:`option-grid`,children:Se.map(n=>(0,A.jsx)(`button`,{type:`button`,"aria-label":`Choose skin tone ${n}`,className:`option-btn ${e.skin===n?`selected`:``}`,style:{background:n},onClick:()=>t({...e,skin:n})},n))})]})}function Je({login:e,checkEmailAvailable:t,completeSignup:n,notify:r}){let[i,a]=(0,h.useState)(`welcome`),[o,s]=(0,h.useState)(``),[c,l]=(0,h.useState)(``),[u,d]=(0,h.useState)(`STEM`),[f,p]=(0,h.useState)(Ne()),[m,g]=(0,h.useState)(``),[_,v]=(0,h.useState)(!1),y=()=>a(i===`strand`?`signup`:i===`avatar`?`strand`:i===`confirm`?`avatar`:`welcome`);return i===`welcome`?(0,A.jsxs)(`div`,{className:`auth-screen`,children:[(0,A.jsx)(`div`,{className:`ambient-orb one`}),(0,A.jsx)(`div`,{className:`ambient-orb two`}),(0,A.jsxs)(`div`,{className:`auth-card`,children:[(0,A.jsx)(We,{}),(0,A.jsx)(`div`,{className:`eyebrow`,children:`YOUR NEXT RUN STARTS HERE`}),(0,A.jsxs)(`h1`,{className:`auth-title`,children:[`Make focus`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{children:`feel like play.`})]}),(0,A.jsx)(`p`,{className:`auth-copy`,children:`DERIOUX turns the work you keep avoiding into a world you want to return to. Build your streak, defeat the backlog, and level up your real life.`}),(0,A.jsxs)(`div`,{className:`auth-actions`,children:[(0,A.jsxs)(`button`,{className:`btn-primary flex-1`,onClick:()=>a(`signup`),children:[`Start a new run `,(0,A.jsx)(S,{size:15})]}),(0,A.jsx)(`button`,{className:`btn-secondary`,onClick:()=>a(`login`),children:`Log in`})]}),(0,A.jsxs)(`div`,{className:`auth-meta`,children:[(0,A.jsxs)(`span`,{children:[(0,A.jsx)(`span`,{className:`status-dot`}),` local player file`]}),(0,A.jsx)(`span`,{children:`v0.9 // night shift`})]}),(0,A.jsx)(`p`,{className:`auth-foot`,children:`A quiet place for loud progress.`})]})]}):i===`login`||i===`signup`?(0,A.jsxs)(`div`,{className:`auth-screen`,children:[(0,A.jsx)(`div`,{className:`ambient-orb one`}),(0,A.jsxs)(`div`,{className:`auth-card`,children:[(0,A.jsx)(Ue,{}),(0,A.jsxs)(`button`,{className:`back-link`,onClick:()=>a(`welcome`),children:[(0,A.jsx)(S,{size:13,className:`rotate-180`}),` Back to start`]}),(0,A.jsx)(`div`,{className:`eyebrow`,children:i===`login`?`WELCOME BACK, PLAYER`:`CREATE YOUR PLAYER FILE`}),(0,A.jsx)(`h1`,{className:`auth-title`,children:i===`login`?(0,A.jsxs)(A.Fragment,{children:[`Resume your`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{children:`run.`})]}):(0,A.jsxs)(A.Fragment,{children:[`Choose to`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{children:`begin.`})]})}),(0,A.jsxs)(`form`,{className:`auth-form mt-7`,onSubmit:n=>{n.preventDefault();let s=c.trim().toLowerCase();if(!(!s||!m.trim())){if(i===`login`){let t=e(s,m);t.ok||r(`Login failed`,t.message??`Please check your email and password and try again.`,`error`);return}if(!o.trim()){r(`Username required`,`Enter a username for your player file.`,`error`);return}if(!t(s)){r(`Player file already exists`,`An account with that email already exists. Try logging in instead.`,`error`);return}if(m.length<6){r(`Password too short`,`Use at least 6 characters to protect your player file.`,`error`);return}a(`strand`)}},children:[(0,A.jsxs)(`label`,{className:`field-label`,children:[`Email`,(0,A.jsx)(`input`,{className:`field-input`,type:`email`,value:c,onChange:e=>l(e.target.value),placeholder:`alex@campus.edu`,required:!0,autoComplete:`email`})]}),i===`signup`&&(0,A.jsxs)(`label`,{className:`field-label`,children:[`Username`,(0,A.jsx)(`input`,{className:`field-input`,value:o,onChange:e=>s(e.target.value),placeholder:`Alex Rivera`,required:!0,autoComplete:`username`})]}),(0,A.jsxs)(`label`,{className:`field-label`,children:[`Password`,(0,A.jsxs)(`div`,{className:`password-field`,children:[(0,A.jsx)(`input`,{className:`field-input`,type:_?`text`:`password`,value:m,onChange:e=>g(e.target.value),placeholder:`At least 6 characters`,required:!0,autoComplete:i===`login`?`current-password`:`new-password`}),(0,A.jsx)(`button`,{type:`button`,className:`password-toggle`,"aria-label":`Toggle password visibility`,onClick:()=>v(!_),children:_?(0,A.jsx)(te,{size:15}):(0,A.jsx)(ne,{size:15})})]})]}),(0,A.jsxs)(`button`,{className:`btn-primary mt-2`,type:`submit`,children:[i===`login`?`Enter DERIOUX`:`Continue`,` `,(0,A.jsx)(S,{size:15})]})]}),(0,A.jsx)(`p`,{className:`auth-foot`,children:(0,A.jsx)(`button`,{className:`text-button`,onClick:y,children:`Back to start`})})]})]}):i===`strand`?(0,A.jsx)(`div`,{className:`auth-screen`,children:(0,A.jsxs)(`div`,{className:`auth-card wide`,children:[(0,A.jsx)(Ue,{}),(0,A.jsxs)(`button`,{className:`back-link`,onClick:y,children:[(0,A.jsx)(S,{size:13,className:`rotate-180`}),` Back`]}),(0,A.jsx)(`div`,{className:`eyebrow`,children:`01 // SELECT YOUR STRAND`}),(0,A.jsxs)(`h1`,{className:`auth-title`,children:[`What are you`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{children:`training for?`})]}),(0,A.jsx)(`p`,{className:`auth-copy`,children:`Your strand tunes the first set of quests. You can change your loadout anytime.`}),(0,A.jsx)(`div`,{className:`strand-grid`,children:Ce.map(([e,t])=>(0,A.jsxs)(`button`,{className:`strand-btn ${u===e?`selected`:``}`,onClick:()=>d(e),children:[(0,A.jsx)(`strong`,{children:e}),(0,A.jsx)(`small`,{children:t})]},e))}),(0,A.jsxs)(`button`,{className:`btn-primary w-full`,onClick:()=>a(`avatar`),children:[`Lock in strand `,(0,A.jsx)(S,{size:15})]})]})}):i===`avatar`?(0,A.jsx)(`div`,{className:`auth-screen`,children:(0,A.jsxs)(`div`,{className:`auth-card wide`,children:[(0,A.jsx)(Ue,{}),(0,A.jsxs)(`button`,{className:`back-link`,onClick:y,children:[(0,A.jsx)(S,{size:13,className:`rotate-180`}),` Back to strand`]}),(0,A.jsx)(`div`,{className:`eyebrow`,children:`02 // BUILD YOUR AVATAR`}),(0,A.jsxs)(`h1`,{className:`auth-title`,children:[`Put a face to`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{children:`the focus.`})]}),(0,A.jsxs)(`div`,{className:`avatar-editor`,children:[(0,A.jsx)(`div`,{className:`avatar-stage-large`,children:(0,A.jsx)(Ge,{avatar:f,initials:Fe(o||`Alex Rivera`),size:`large`})}),(0,A.jsx)(qe,{avatar:f,setAvatar:p})]}),(0,A.jsxs)(`button`,{className:`btn-primary w-full mt-8`,onClick:()=>a(`confirm`),children:[`Preview player file `,(0,A.jsx)(S,{size:15})]})]})}):(0,A.jsx)(`div`,{className:`auth-screen`,children:(0,A.jsxs)(`div`,{className:`auth-card confirm-card`,children:[(0,A.jsx)(Ue,{}),(0,A.jsx)(`div`,{className:`confirm-avatar`,children:(0,A.jsx)(Ge,{avatar:f,initials:Fe(o||`Alex Rivera`),size:`large`})}),(0,A.jsx)(`div`,{className:`eyebrow`,children:`PLAYER FILE READY`}),(0,A.jsxs)(`h1`,{className:`auth-title`,children:[`Welcome to`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{children:`the night shift.`})]}),(0,A.jsxs)(`p`,{className:`auth-copy`,children:[o||`Alex Rivera`,` · Level 1 · `,u,` strand`]}),(0,A.jsxs)(`button`,{className:`btn-primary w-full`,onClick:()=>{n({name:o.trim()||`Alex Rivera`,email:c.trim().toLowerCase(),strand:u,avatar:f},m)},children:[`Enter dashboard `,(0,A.jsx)(S,{size:15})]})]})})}function Ye({screen:e,setScreen:t,onLogout:n,profile:r,xp:i,quests:a}){let o=[{id:`dashboard`,label:`Dashboard`,icon:x},{id:`quests`,label:`Quests`,icon:de},{id:`shop`,label:`Loadout`,icon:D},{id:`achievements`,label:`Achievements`,icon:pe},{id:`profile`,label:`Profile`,icon:O}],{level:s}=Me(i),c=a.filter(e=>!e.done).length;return(0,A.jsxs)(`aside`,{className:`sidebar`,children:[(0,A.jsx)(Ue,{}),(0,A.jsx)(`div`,{className:`nav-label`,children:`Main deck`}),(0,A.jsx)(`nav`,{className:`nav-list`,children:o.map(({id:n,label:r,icon:i})=>(0,A.jsxs)(`button`,{className:`nav-btn ${e===n?`active`:``}`,onClick:()=>t(n),children:[(0,A.jsx)(i,{size:17,strokeWidth:1.7}),(0,A.jsx)(`span`,{children:r}),n===`quests`&&c>0&&(0,A.jsx)(`b`,{className:`nav-count`,children:String(c).padStart(2,`0`)})]},n))}),(0,A.jsxs)(`div`,{className:`sidebar-bottom`,children:[(0,A.jsxs)(`div`,{className:`mini-profile`,children:[(0,A.jsx)(`div`,{className:`avatar`,children:(0,A.jsx)(Ge,{avatar:r.avatar,initials:Fe(r.name),size:`small`})}),(0,A.jsxs)(`div`,{className:`mini-profile-copy`,children:[(0,A.jsx)(`strong`,{children:r.name}),(0,A.jsxs)(`small`,{children:[`LVL `,s,` · `,r.strand]})]})]}),(0,A.jsxs)(`button`,{className:`logout-btn`,onClick:n,children:[(0,A.jsx)(ae,{size:15}),(0,A.jsx)(`span`,{children:`Log out`})]})]})]})}function Xe({screen:e,onNotify:t}){return(0,A.jsxs)(`header`,{className:`topbar`,children:[(0,A.jsxs)(`div`,{className:`breadcrumb`,children:[`DERIOUX `,(0,A.jsx)(`span`,{className:`mx-2 opacity-40`,children:`/`}),` `,(0,A.jsx)(`b`,{children:e})]}),(0,A.jsx)(`div`,{className:`top-actions`,children:(0,A.jsxs)(`button`,{className:`icon-btn relative`,"aria-label":`Notifications`,onClick:t,children:[(0,A.jsx)(b,{size:16}),(0,A.jsx)(`i`,{className:`notif-dot`})]})})]})}function Ze({studyMinutes:e,xp:t,coins:n,streak:r}){let i=[{icon:me,value:t.toLocaleString(),label:`Total XP`},{icon:C,value:n.toLocaleString(),label:`Credits`},{icon:T,value:`${r} day${r===1?``:`s`}`,label:`Current streak`},{icon:fe,value:`${e} min`,label:`Study this week`}];return(0,A.jsx)(`div`,{className:`stat-row`,children:i.map(({icon:e,value:t,label:n},r)=>(0,A.jsxs)(`div`,{className:`panel stat-card animate-rise stagger-${r+1}`,children:[(0,A.jsx)(e,{className:`stat-icon`,size:17}),(0,A.jsx)(`div`,{className:`stat-value`,children:t}),(0,A.jsx)(`div`,{className:`stat-label`,children:n})]},n))})}function Qe({profile:e,quests:t,claimQuest:n,timerRunning:r,secondsLeft:i,toggleTimer:a,resetTimer:o,studyMinutes:s,xp:c,coins:l,streak:u,activityDates:d,setScreen:f}){let p=`${String(Math.floor(i/60)).padStart(2,`0`)}:${String(i%60).padStart(2,`0`)}`,m=t.filter(e=>!e.done).length,h=t.filter(e=>!e.done).reduce((e,t)=>e+t.rewardXp,0),g=ze(),_=new Set(d),v=Ee.filter(e=>e.unlocked||e.requiredQuestId&&t.find(t=>t.id===e.requiredQuestId)?.done).length;return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(`div`,{className:`page-wrap`,children:[(0,A.jsx)(`div`,{className:`eyebrow`,children:`TODAY // RUN 014`}),(0,A.jsxs)(`h1`,{className:`page-title`,children:[`Good evening, `,(0,A.jsxs)(`em`,{children:[e.name.split(` `)[0],`.`]})]}),(0,A.jsx)(`p`,{className:`muted text-sm mt-3`,children:`The noise is outside. Your next move is in here.`}),(0,A.jsx)(Ze,{studyMinutes:s,xp:c,coins:l,streak:u}),(0,A.jsxs)(`div`,{className:`dash-grid`,children:[(0,A.jsxs)(`div`,{className:`dash-column animate-rise`,children:[(0,A.jsxs)(`div`,{className:`panel hero-card`,children:[(0,A.jsxs)(`div`,{className:`hero-content`,children:[(0,A.jsxs)(`div`,{className:`eyebrow`,children:[`ACTIVE MISSION // `,e.strand]}),(0,A.jsxs)(`h2`,{className:`hero-title`,children:[`Turn 25 minutes`,(0,A.jsx)(`br`,{}),`into momentum.`]}),(0,A.jsx)(`p`,{className:`hero-copy`,children:`Start the focus timer and stay with it. When it hits zero, XP and credits land automatically.`})]}),(0,A.jsxs)(`div`,{className:`timer`,children:[(0,A.jsxs)(`button`,{className:`btn-primary`,onClick:a,children:[r?`Pause focus`:i<Oe?`Resume focus`:`Start focus`,` `,r?(0,A.jsx)(oe,{size:14}):(0,A.jsx)(se,{size:14,fill:`currentColor`})]}),(0,A.jsx)(`button`,{className:`timer-reset`,onClick:o,disabled:i===Oe&&!r,"aria-label":`Reset timer`,children:(0,A.jsx)(ce,{size:14})}),(0,A.jsx)(`span`,{className:`timer-readout`,children:p}),(0,A.jsx)(`span`,{className:`timer-state`,children:r?`counting down`:i<Oe?`paused`:`ready`})]})]}),(0,A.jsxs)(`div`,{className:`panel streak-card`,children:[(0,A.jsx)(`div`,{className:`panel-kicker`,children:`Consistency signal`}),(0,A.jsxs)(`div`,{className:`streak-big`,children:[(0,A.jsx)(`strong`,{children:String(u).padStart(2,`0`)}),(0,A.jsxs)(`span`,{children:[`day streak`,(0,A.jsx)(`br`,{}),u>0?`still alive`:`start today`]})]}),(0,A.jsx)(`div`,{className:`week`,children:g.map(({iso:e,label:t})=>(0,A.jsxs)(`div`,{className:`day`,children:[(0,A.jsx)(`div`,{className:`day-dot ${_.has(e)?`on`:``} ${e===Ie(new Date)?`today`:``}`}),t]},e))})]}),(0,A.jsxs)(`div`,{className:`panel goal-card`,children:[(0,A.jsx)(`div`,{className:`panel-kicker`,children:`Weekly objective`}),(0,A.jsxs)(`div`,{className:`goal-number`,children:[s,` / `,180,` min`]}),(0,A.jsxs)(`div`,{className:`goal-caption`,children:[`You are `,Math.max(0,180-s),` minutes from a new personal best.`]}),(0,A.jsx)(`div`,{className:`goal-bar`,children:(0,A.jsx)(`div`,{className:`progress-track`,children:(0,A.jsx)(`div`,{className:`progress-fill`,style:{width:`${Math.min(100,s/180*100)}%`}})})})]})]}),(0,A.jsxs)(`div`,{className:`dash-column animate-rise`,children:[(0,A.jsxs)(`div`,{className:`panel`,style:{padding:`20px`},children:[(0,A.jsxs)(`div`,{className:`panel-head`,style:{padding:`0 0 12px 0`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`panel-title`,children:`Recent Achievements`}),(0,A.jsxs)(`div`,{className:`panel-kicker mt-1`,children:[v,` / `,Ee.length,` Unlocked`]})]}),(0,A.jsx)(`button`,{className:`btn-secondary`,onClick:()=>f(`achievements`),children:`View all`})]}),(0,A.jsx)(`div`,{style:{display:`grid`,gap:`10px`,marginTop:`10px`},children:Ee.slice(0,2).map(e=>{let n=e.icon,r=e.unlocked||e.requiredQuestId&&t.find(t=>t.id===e.requiredQuestId)?.done;return(0,A.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,padding:`8px`,background:`rgba(255,255,255,0.02)`,borderRadius:`8px`,border:`1px solid var(--line)`},children:[(0,A.jsx)(`div`,{className:`quest-mark`,style:{color:r?`var(--amber)`:`var(--slate-500)`},children:(0,A.jsx)(n,{size:14})}),(0,A.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,A.jsx)(`div`,{style:{fontSize:`12px`,fontWeight:600},children:e.title}),(0,A.jsx)(`div`,{className:`muted`,style:{fontSize:`10px`},children:r?`Unlocked`:`Locked`})]})]},e.id)})})]}),(0,A.jsxs)(`div`,{className:`panel`,style:{flex:1,display:`flex`,flexDirection:`column`},children:[(0,A.jsxs)(`div`,{className:`panel-head`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`panel-title`,children:`Daily quests`}),(0,A.jsxs)(`div`,{className:`panel-kicker mt-1`,children:[String(m).padStart(2,`0`),` objectives // `,h,` XP`]})]}),(0,A.jsx)(`button`,{className:`btn-secondary`,onClick:()=>f(`quests`),children:`View all`})]}),(0,A.jsx)(`div`,{className:`quest-list`,style:{flex:1},children:t.map(e=>(0,A.jsxs)(`div`,{className:`quest-row`,children:[(0,A.jsx)(`div`,{className:`quest-mark ${e.done?`done`:``}`,children:e.done?(0,A.jsx)(ee,{size:14}):(0,A.jsx)(w,{size:14})}),(0,A.jsxs)(`div`,{className:`quest-copy`,children:[(0,A.jsx)(`div`,{className:`quest-name`,children:e.title}),(0,A.jsxs)(`div`,{className:`quest-meta`,children:[e.meta,` · +`,e.rewardXp,` XP · +`,e.rewardCoins,` credits`]})]}),e.done?(0,A.jsx)(`span`,{className:`reward`,children:`CLEARED`}):(0,A.jsx)(`button`,{className:`btn-secondary !px-2 !py-1.5`,onClick:()=>n(e.id),children:`Claim`})]},e.id))})]})]})]})]})})}function $e({quests:e}){return(0,A.jsxs)(`div`,{className:`page-wrap`,children:[(0,A.jsx)(`div`,{className:`page-toolbar`,children:(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`eyebrow`,children:`MILESTONES & BADGES`}),(0,A.jsxs)(`h1`,{className:`page-title`,children:[`Your `,(0,A.jsx)(`em`,{children:`Achievements.`})]}),(0,A.jsx)(`p`,{className:`muted text-sm mt-3`,children:`Badges earned through consistency, quest progression, and deep work.`})]})}),(0,A.jsx)(`div`,{className:`shop-grid`,children:Ee.map(t=>{let n=t.icon,r=t.unlocked||t.requiredQuestId&&e.find(e=>e.id===t.requiredQuestId)?.done;return(0,A.jsxs)(`div`,{className:`panel shop-card ${r?``:`locked`}`,children:[(0,A.jsx)(`div`,{className:`item-art`,children:(0,A.jsx)(n,{className:`item-glyph`,size:38,strokeWidth:1.2,style:{color:r?`var(--amber)`:`#7f8aa5`}})}),(0,A.jsx)(`h3`,{children:t.title}),(0,A.jsx)(`p`,{children:t.desc}),(0,A.jsx)(`div`,{className:`price-row`,children:(0,A.jsx)(`span`,{className:r?`owned`:`muted`,children:r?`UNLOCKED`:`LOCKED`})})]},t.id)})})]})}function et({onAccept:e,onLeave:t}){return(0,A.jsxs)(`div`,{className:`page-wrap`,children:[(0,A.jsxs)(`div`,{className:`page-toolbar`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`eyebrow`,children:`MISSION BRIEFING // 01 ACCEPT QUEST`}),(0,A.jsxs)(`h1`,{className:`page-title`,children:[`Enter the `,(0,A.jsx)(`em`,{children:`duel?`})]}),(0,A.jsx)(`p`,{className:`muted text-sm mt-3`,children:`Read the challenge, then commit. Leaving costs nothing — losing focus mid-fight does.`})]}),(0,A.jsxs)(`button`,{className:`btn-secondary`,onClick:t,children:[(0,A.jsx)(k,{size:14}),` Leave`]})]}),(0,A.jsxs)(`div`,{className:`panel battle-arena`,children:[(0,A.jsx)(`div`,{className:`battle-top`,children:(0,A.jsx)(`span`,{className:`battle-label`,children:`BOSS ENCOUNTER // SECTOR 03`})}),(0,A.jsxs)(`div`,{className:`combatants`,style:{gridTemplateColumns:`.6fr 1.4fr`},children:[(0,A.jsxs)(`div`,{className:`combatant`,children:[(0,A.jsx)(`div`,{className:`combatant-avatar enemy`,children:(0,A.jsx)(O,{size:30})}),(0,A.jsx)(`div`,{className:`combatant-name`,children:`The Procrastination Hydra`})]}),(0,A.jsxs)(`div`,{style:{textAlign:`left`},children:[(0,A.jsx)(`div`,{className:`feedback`,style:{fontStyle:`italic`},children:`"Heh! Think you have what it takes to be the top student? Deal me in a duel first!"`}),(0,A.jsx)(`p`,{className:`muted text-sm mt-3`,children:`Three heads, one deadline. Answer the knowledge check under pressure and prove you can keep your attention when the questions get sharp.`}),(0,A.jsxs)(`div`,{className:`quest-tags mt-3`,children:[(0,A.jsxs)(`span`,{className:`tag`,children:[(0,A.jsx)(re,{size:10,className:`inline mr-1`}),`+300 XP`]}),(0,A.jsxs)(`span`,{className:`tag`,children:[(0,A.jsx)(C,{size:10,className:`inline mr-1`}),`+150 credits`]}),(0,A.jsxs)(`span`,{className:`tag`,children:[(0,A.jsx)(ue,{size:10,className:`inline mr-1`}),`high focus`]})]})]})]})]}),(0,A.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:12,marginTop:14},children:[(0,A.jsxs)(`button`,{className:`btn-primary`,onClick:e,children:[(0,A.jsx)(de,{size:15}),` Accept`]}),(0,A.jsx)(`button`,{className:`btn-secondary`,onClick:t,children:`Leave`})]})]})}function tt({quests:e,claimQuest:t,onBattle:n}){return(0,A.jsxs)(`div`,{className:`page-wrap`,children:[(0,A.jsxs)(`div`,{className:`page-toolbar`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`eyebrow`,children:`MISSION CONTROL`}),(0,A.jsxs)(`h1`,{className:`page-title`,children:[`Choose your `,(0,A.jsx)(`em`,{children:`fight.`})]}),(0,A.jsx)(`p`,{className:`muted text-sm mt-3`,children:`Every completed objective makes the next one easier to enter.`})]}),(0,A.jsxs)(`button`,{className:`btn-secondary`,onClick:()=>window.location.reload(),children:[(0,A.jsx)(ce,{size:14}),` Refresh board`]})]}),(0,A.jsxs)(`div`,{className:`quest-cards`,children:[(0,A.jsxs)(`div`,{className:`panel quest-card featured animate-rise`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`quest-type`,children:`Boss encounter · 15 min`}),(0,A.jsx)(`h3`,{children:`The Procrastination Hydra`}),(0,A.jsx)(`p`,{children:`Three heads, one deadline. Enter the quiz battle and prove you can keep your attention when the questions get sharp.`}),(0,A.jsxs)(`div`,{className:`quest-tags`,children:[(0,A.jsx)(`span`,{className:`tag`,children:`+300 XP`}),(0,A.jsx)(`span`,{className:`tag`,children:`+150 credits`}),(0,A.jsx)(`span`,{className:`tag`,children:`high focus`})]})]}),(0,A.jsx)(`div`,{className:`quest-action`,children:(0,A.jsxs)(`button`,{className:`btn-primary`,onClick:n,children:[(0,A.jsx)(de,{size:15}),` Enter battle`]})})]}),e.filter(e=>!e.done).map((n,r)=>(0,A.jsxs)(`div`,{className:`panel quest-card animate-rise`,style:{animationDelay:`${(r+1)*.1}s`},children:[(0,A.jsxs)(`div`,{className:`quest-type`,children:[`Side quest · `,r+1,` of `,e.filter(e=>!e.done).length]}),(0,A.jsx)(`h3`,{children:n.title}),(0,A.jsxs)(`p`,{children:[n.meta,`. A short clear is still a clear.`]}),(0,A.jsxs)(`div`,{className:`quest-tags`,children:[(0,A.jsxs)(`span`,{className:`tag`,children:[`+`,n.rewardXp,` XP`]}),(0,A.jsxs)(`span`,{className:`tag`,children:[`+`,n.rewardCoins,` credits`]})]}),(0,A.jsxs)(`button`,{className:`btn-secondary mt-5`,onClick:()=>t(n.id),children:[`Claim quest `,(0,A.jsx)(S,{size:14})]})]},n.id)),e.every(e=>e.done)&&(0,A.jsxs)(`div`,{className:`panel mt-4 p-8 text-center`,children:[(0,A.jsx)(pe,{className:`mx-auto mb-3 text-amber-300`}),(0,A.jsx)(`div`,{className:`panel-title`,children:`Board cleared.`}),(0,A.jsx)(`p`,{className:`muted text-sm mt-2`,children:`The next wave arrives at midnight.`})]})]})]})}function nt({onExit:e,onComplete:t,notify:n}){let[r,i]=(0,h.useState)(0),[a,o]=(0,h.useState)(null),[s,c]=(0,h.useState)(100),[l,u]=(0,h.useState)(100),[d,f]=(0,h.useState)(0),[p,m]=(0,h.useState)(!1),[g,_]=(0,h.useState)(!1),v=De[r],y=e=>{p||g||(o(e),m(!0),e===v.answer?(c(e=>Math.max(0,e-33)),f(e=>e+100),n(`Critical hit`,`Correct answer. The Hydra lost a head.`)):(u(e=>Math.max(0,e-25)),n(`Glancing blow`,`Not quite. Read the prompt, then keep moving.`,`error`)))};return(0,A.jsxs)(`div`,{className:`page-wrap battle-layout`,children:[(0,A.jsxs)(`div`,{className:`page-toolbar`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`eyebrow`,children:`LIVE ENCOUNTER // SECTOR 03`}),(0,A.jsxs)(`h1`,{className:`page-title`,children:[`The `,(0,A.jsx)(`em`,{children:`Hydra`}),` waits.`]})]}),(0,A.jsxs)(`button`,{className:`btn-secondary`,onClick:e,children:[(0,A.jsx)(k,{size:14}),` Retreat`]})]}),(0,A.jsxs)(`div`,{className:`panel battle-arena`,children:[(0,A.jsxs)(`div`,{className:`battle-top`,children:[(0,A.jsxs)(`span`,{className:`battle-label`,children:[`QUIZ BATTLE // `,g?De.length:r+1,` / `,De.length]}),(0,A.jsxs)(`span`,{className:`battle-score`,children:[`SCORE `,String(d).padStart(4,`0`)]})]}),(0,A.jsxs)(`div`,{className:`combatants`,children:[(0,A.jsxs)(`div`,{className:`combatant`,children:[(0,A.jsx)(`div`,{className:`combatant-avatar hero ${p&&a!==v.answer?`animate-hit`:``}`,children:`AR`}),(0,A.jsx)(`div`,{className:`combatant-name`,children:`Alex Rivera`}),(0,A.jsx)(`div`,{className:`health-track`,children:(0,A.jsx)(`div`,{className:`health-fill`,style:{width:`${l}%`}})})]}),(0,A.jsx)(`div`,{className:`versus`,children:`VS`}),(0,A.jsxs)(`div`,{className:`combatant`,children:[(0,A.jsx)(`div`,{className:`combatant-avatar enemy ${p&&a===v.answer?`animate-hit`:``}`,children:`H`}),(0,A.jsx)(`div`,{className:`combatant-name`,children:`The Hydra`}),(0,A.jsx)(`div`,{className:`health-track`,children:(0,A.jsx)(`div`,{className:`health-fill enemy-health`,style:{width:`${s}%`}})})]})]})]}),g?(0,A.jsxs)(`div`,{className:`panel question-panel battle-complete`,children:[(0,A.jsx)(pe,{size:34,className:`text-amber-300 mx-auto`}),(0,A.jsx)(`div`,{className:`question-index mt-4`,children:`ENCOUNTER CLEARED`}),(0,A.jsx)(`h2`,{className:`question-text`,children:`You stayed with the hard part.`}),(0,A.jsx)(`p`,{className:`muted text-sm`,children:`The result is logged to your player file. Take the momentum with you.`}),(0,A.jsxs)(`button`,{className:`btn-primary mt-5`,onClick:e,children:[`Return to mission control `,(0,A.jsx)(S,{size:14})]})]}):(0,A.jsxs)(`div`,{className:`panel question-panel`,children:[(0,A.jsxs)(`div`,{className:`question-index`,children:[`QUESTION 0`,r+1,` / KNOWLEDGE CHECK`]}),(0,A.jsx)(`h2`,{className:`question-text`,children:v.question}),(0,A.jsx)(`div`,{className:`answers`,children:v.options.map((e,t)=>(0,A.jsxs)(`button`,{className:`answer-btn ${p&&t===v.answer?`correct`:``} ${p&&a===t&&t!==v.answer?`wrong`:``}`,disabled:p,onClick:()=>y(t),children:[String.fromCharCode(65+t),` `,(0,A.jsx)(`span`,{className:`ml-2`,children:e})]},e))}),p&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:`feedback`,children:a===v.answer?`DIRECT HIT // The concept is locked in.`:`MISS // The correct answer was ${v.options[v.answer]}.`}),(0,A.jsxs)(`button`,{className:`btn-primary mt-4`,onClick:()=>{if(r<De.length-1){i(e=>e+1),o(null),m(!1);return}_(!0),t(),n(`Battle cleared`,`You earned ${d+(a===v.answer?100:0)} XP.`)},children:[r===De.length-1?`Finish encounter`:`Next question`,` `,(0,A.jsx)(S,{size:14})]})]})]})]})}function rt({coins:e,owned:t,equipped:n,buyItem:r,equipItem:i,quests:a}){let[o,s]=(0,h.useState)(`All`),c=Te.filter(e=>o===`All`||e.category===o);return(0,A.jsxs)(`div`,{className:`page-wrap`,children:[(0,A.jsxs)(`div`,{className:`page-toolbar`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`eyebrow`,children:`THE LOADOUT // MARKET`}),(0,A.jsxs)(`h1`,{className:`page-title`,children:[`Spend your `,(0,A.jsx)(`em`,{children:`credits.`})]}),(0,A.jsx)(`p`,{className:`muted text-sm mt-3`,children:`Small upgrades and categorized inventory gear.`})]}),(0,A.jsxs)(`div`,{className:`level-chip`,children:[(0,A.jsx)(C,{size:13}),` `,e,` credits`]})]}),(0,A.jsx)(`div`,{className:`filter-tabs`,children:[`All`,`Gear`,`Consumables`,`Cosmetics`].map(e=>(0,A.jsx)(`button`,{className:`btn-secondary ${o===e?`!border-amber-300 !text-amber-300`:``}`,onClick:()=>s(e),children:e},e))}),(0,A.jsx)(`div`,{className:`shop-grid`,children:c.map(o=>{let s=o.icon,c=t.includes(o.id),l=n===o.id,u=o.requiredQuestId?!a.find(e=>e.id===o.requiredQuestId)?.done:!1,d=o.requiredQuestId?a.find(e=>e.id===o.requiredQuestId)?.title:``;return(0,A.jsxs)(`div`,{className:`panel shop-card animate-rise ${l?`equipped`:``} ${u?`locked`:``}`,children:[(0,A.jsx)(`div`,{className:`item-art`,children:(0,A.jsx)(s,{className:`item-glyph`,size:38,strokeWidth:1.2})}),(0,A.jsx)(`h3`,{children:o.name}),(0,A.jsx)(`p`,{children:o.copy}),u&&(0,A.jsxs)(`div`,{style:{fontSize:`10px`,color:`var(--coral)`,marginTop:`6px`},children:[`🔒 Unlock by completing Quest: `,d||o.requiredQuestId]}),(0,A.jsxs)(`div`,{className:`price-row`,children:[c?(0,A.jsx)(`span`,{className:`owned`,children:l?`EQUIPPED`:`UNLOCKED`}):(0,A.jsxs)(`span`,{className:`price`,children:[(0,A.jsx)(C,{size:12,className:`inline mr-1`}),o.price]}),c?(0,A.jsx)(`button`,{className:`btn-secondary !px-3 !py-2`,disabled:l,onClick:()=>i(o.id,o.name),children:l?`Active`:`Equip`}):(0,A.jsx)(`button`,{className:`btn-primary !px-3 !py-2`,disabled:e<o.price||u,onClick:()=>r(o.id,o.price,o.name),title:u?`Locked behind ${d}`:``,children:`Buy`})]})]},o.id)})})]})}function it({profile:e,xp:t,setAvatar:n,owned:r,equipped:i,updateProfileCredentials:a,notify:o}){let[s,c]=(0,h.useState)(!0),[l,u]=(0,h.useState)(!1),[d,f]=(0,h.useState)(!1),[p,m]=(0,h.useState)(e.email),[g,_]=(0,h.useState)(!1),[v,y]=(0,h.useState)(``),[x,ee]=(0,h.useState)(``),[S,C]=(0,h.useState)(``),{level:w,floorXp:te,ceilingXp:ne,progressPct:T}=Me(t);return(0,A.jsxs)(`div`,{className:`page-wrap`,children:[(0,A.jsx)(`div`,{className:`eyebrow`,children:`PLAYER FILE // RUN 014`}),(0,A.jsxs)(`h1`,{className:`page-title`,children:[`Your `,(0,A.jsx)(`em`,{children:`loadout.`})]}),(0,A.jsxs)(`div`,{className:`profile-grid mt-7`,children:[(0,A.jsxs)(`div`,{className:`panel profile-card`,children:[(0,A.jsx)(`div`,{className:`profile-avatar`,children:(0,A.jsx)(Ge,{avatar:e.avatar,initials:Fe(e.name),size:`medium`})}),(0,A.jsx)(`h2`,{children:e.name}),(0,A.jsxs)(`p`,{children:[e.strand,` strand`]}),(0,A.jsxs)(`div`,{className:`level-chip`,children:[(0,A.jsx)(me,{size:12}),` LEVEL `,w]}),(0,A.jsx)(`div`,{className:`progress-track mt-5`,children:(0,A.jsx)(`div`,{className:`progress-fill`,style:{width:`${T}%`}})}),(0,A.jsxs)(`div`,{className:`flex justify-between mt-2`,children:[(0,A.jsxs)(`span`,{className:`panel-kicker`,children:[te.toLocaleString(),` XP`]}),(0,A.jsxs)(`span`,{className:`panel-kicker`,children:[ne.toLocaleString(),` XP`]})]}),(0,A.jsxs)(`button`,{className:`btn-secondary profile-customize-toggle`,onClick:()=>f(e=>!e),children:[(0,A.jsx)(E,{size:14}),` `,d?`Done customizing`:`Customize avatar`]}),d&&(0,A.jsx)(qe,{avatar:e.avatar,setAvatar:n})]}),(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`14px`},children:[(0,A.jsxs)(`div`,{className:`panel profile-panel`,children:[(0,A.jsxs)(`div`,{className:`panel-head !p-0 !pb-4`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`panel-title`,children:`Credentials & Security`}),(0,A.jsx)(`div`,{className:`panel-kicker mt-1`,children:`Manage email and account passwords`})]}),(0,A.jsx)(le,{size:18,className:`text-amber-300`})]}),(0,A.jsxs)(`div`,{className:`setting-row`,style:{alignItems:`flex-start`,flexDirection:`column`,gap:`8px`},children:[(0,A.jsxs)(`div`,{style:{width:`100%`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:`Email Address`}),(0,A.jsx)(`span`,{children:e.email})]}),(0,A.jsx)(`button`,{className:`btn-secondary !px-2 !py-1`,onClick:()=>_(!g),children:g?`Cancel`:`Edit`})]}),g&&(0,A.jsx)(`div`,{style:{width:`100%`,marginTop:`8px`},children:(0,A.jsx)(`input`,{className:`field-input`,type:`email`,value:p,onChange:e=>m(e.target.value),placeholder:`New email address`})})]}),(0,A.jsxs)(`form`,{onSubmit:e=>{if(e.preventDefault(),!v){o(`Password required`,`Please enter your current password.`,`error`);return}if(x.length<6){o(`Password too short`,`New password must be at least 6 characters long.`,`error`);return}if(x!==S){o(`Mismatch`,`New password and confirm password do not match.`,`error`);return}a(p,x)?(o(`Security updated`,`Your email and password settings have been saved successfully.`),y(``),ee(``),C(``),_(!1)):o(`Update failed`,`Incorrect current password or invalid details.`,`error`)},style:{marginTop:`16px`},children:[(0,A.jsxs)(`div`,{style:{fontSize:`13px`,fontWeight:600,marginBottom:`10px`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,A.jsx)(ie,{size:14}),` Password Management`]}),(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`10px`},children:[(0,A.jsxs)(`label`,{className:`field-label`,style:{margin:0},children:[`Current Password`,(0,A.jsx)(`input`,{className:`field-input`,type:`password`,value:v,onChange:e=>y(e.target.value),placeholder:`••••••••`,required:!0})]}),(0,A.jsxs)(`label`,{className:`field-label`,style:{margin:0},children:[`New Password`,(0,A.jsx)(`input`,{className:`field-input`,type:`password`,value:x,onChange:e=>ee(e.target.value),placeholder:`At least 6 characters`,required:!0})]}),(0,A.jsxs)(`label`,{className:`field-label`,style:{margin:0},children:[`Confirm Password`,(0,A.jsx)(`input`,{className:`field-input`,type:`password`,value:S,onChange:e=>C(e.target.value),placeholder:`Confirm new password`,required:!0})]})]}),(0,A.jsx)(`button`,{className:`btn-primary mt-4 w-full`,type:`submit`,children:`Update Credentials`})]})]}),(0,A.jsxs)(`div`,{className:`panel profile-panel`,children:[(0,A.jsxs)(`div`,{className:`panel-head !p-0 !pb-4`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`panel-title`,children:`Preferences`}),(0,A.jsx)(`div`,{className:`panel-kicker mt-1`,children:`Audio and app notification triggers`})]}),(0,A.jsx)(b,{size:18,className:`text-amber-300`})]}),(0,A.jsxs)(`div`,{className:`setting-row`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:`Sound effects`}),(0,A.jsx)(`span`,{children:`Play audio cues on focus completion`})]}),(0,A.jsx)(`button`,{type:`button`,"aria-label":`Toggle sound effects`,className:`toggle ${s?`on`:``}`,onClick:()=>c(!s),children:(0,A.jsx)(`i`,{})})]}),(0,A.jsxs)(`div`,{className:`setting-row`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`strong`,{children:`Encounter feedback`}),(0,A.jsx)(`span`,{children:`Show detailed prompts during quiz battles`})]}),(0,A.jsx)(`button`,{type:`button`,"aria-label":`Toggle encounter feedback`,className:`toggle ${l?`on`:``}`,onClick:()=>u(!l),children:(0,A.jsx)(`i`,{})})]})]})]})]})]})}function at(){let[e,t]=(0,h.useState)(()=>{try{let e=window.localStorage.getItem(`derioux-player-v3-session`);return e?JSON.parse(e):null}catch{return null}}),[n,r]=(0,h.useState)(()=>Be()),i=e?n[e.email]:null,[a,o]=(0,h.useState)(`dashboard`),[s,c]=(0,h.useState)(`list`),[l,u]=(0,h.useState)([]),[d,f]=(0,h.useState)(!1),[p,m]=(0,h.useState)(Oe),g=(e,t,n)=>{let r=Date.now()+Math.random();u(i=>[...i,{id:r,title:e,copy:t,tone:n}]),setTimeout(()=>{u(e=>e.filter(e=>e.id!==r))},4200)},_=t=>{!e||!n[e.email]||r(n=>{let r={...n,[e.email]:t(n[e.email])};return Ve(r),r})};(0,h.useEffect)(()=>{window.history.pushState({guarded:!0},``);let e=()=>{window.history.pushState({guarded:!0},``)};return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]);let[v,y]=(0,h.useState)(0),b=(e,r)=>{let i=n[e];if(!i)return{ok:!1,message:`No player file found with that email.`};if(i.password!==r)return{ok:!1,message:`Incorrect password.`};t({email:e});try{window.localStorage.setItem(`derioux-player-v3-session`,JSON.stringify({email:e}))}catch{}return g(`Welcome back`,`Resuming file for ${i.profile.name}.`),{ok:!0}},x=()=>{t(null),y(e=>e+1);try{window.localStorage.removeItem(`derioux-player-v3-session`)}catch{}g(`Logged out`,`Player session safely saved.`)},ee=(e,i)=>{let a={password:i,profile:e,game:Pe()},o={...n,[e.email]:a};r(o),Ve(o),t({email:e.email});try{window.localStorage.setItem(`derioux-player-v3-session`,JSON.stringify({email:e.email}))}catch{}g(`Player file created`,`Welcome to DERIOUX, ${e.name}.`)},S=e=>!n[e];if((0,h.useEffect)(()=>{if(!d)return;let e=window.setInterval(()=>{m(t=>t<=1?(window.clearInterval(e),f(!1),_(e=>{let t=Ie(new Date),n=Array.from(new Set([...e.game.activityDates,t]));return{...e,game:{...e.game,xp:e.game.xp+ke,coins:e.game.coins+Ae,studyMinutes:e.game.studyMinutes+25,activityDates:n}}}),g(`Focus complete`,`Earned +${ke} XP and +${Ae} credits.`),Oe):t-1)},1e3);return()=>window.clearInterval(e)},[d,e]),!e||!i)return(0,A.jsxs)(He,{children:[(0,A.jsx)(Je,{login:b,checkEmailAvailable:S,completeSignup:ee,notify:g},v),(0,A.jsx)(Ke,{items:l,onDismiss:e=>u(t=>t.filter(t=>t.id!==e))})]});let{profile:C,game:w}=i,te=Re(w.activityDates),ne=e=>{let t=w.quests.find(t=>t.id===e);!t||t.done||(_(n=>({...n,game:{...n.game,xp:n.game.xp+t.rewardXp,coins:n.game.coins+t.rewardCoins,quests:n.game.quests.map(t=>t.id===e?{...t,done:!0}:t)}})),g(`Quest cleared`,`Received +${t.rewardXp} XP and +${t.rewardCoins} credits.`))};return(0,A.jsx)(He,{children:(0,A.jsxs)(`div`,{className:`derioux-shell`,children:[(0,A.jsx)(`div`,{className:`ambient-orb one`}),(0,A.jsx)(`div`,{className:`ambient-orb two`}),(0,A.jsxs)(`div`,{className:`app-grid`,children:[(0,A.jsx)(Ye,{screen:a,setScreen:e=>{c(`list`),o(e)},onLogout:x,profile:C,xp:w.xp,quests:w.quests}),(0,A.jsxs)(`div`,{className:`main-area`,children:[(0,A.jsx)(Xe,{screen:a,onNotify:()=>g(`System status`,`All parameters stable. Ready for your next run.`)}),a===`dashboard`&&(0,A.jsx)(Qe,{profile:C,quests:w.quests,claimQuest:ne,timerRunning:d,secondsLeft:p,toggleTimer:()=>f(!d),resetTimer:()=>{f(!1),m(Oe)},studyMinutes:w.studyMinutes,xp:w.xp,coins:w.coins,streak:te,activityDates:w.activityDates,setScreen:o}),a===`quests`&&s===`list`&&(0,A.jsx)(tt,{quests:w.quests,claimQuest:ne,onBattle:()=>c(`briefing`)}),a===`quests`&&s===`briefing`&&(0,A.jsx)(et,{onAccept:()=>c(`battle`),onLeave:()=>c(`list`)}),a===`quests`&&s===`battle`&&(0,A.jsx)(nt,{onExit:()=>c(`list`),onComplete:()=>{_(e=>({...e,game:{...e.game,xp:e.game.xp+300,coins:e.game.coins+150}})),g(`Boss encounter cleared`,`Received +300 XP and +150 credits.`),c(`list`)},notify:g}),a===`shop`&&(0,A.jsx)(rt,{coins:w.coins,owned:w.owned,equipped:w.equipped,buyItem:(e,t,n)=>{w.coins<t||w.owned.includes(e)||(_(n=>({...n,game:{...n.game,coins:n.game.coins-t,owned:[...n.game.owned,e],equipped:n.game.equipped||e}})),g(`Item acquired`,`You unlocked ${n}.`))},equipItem:(e,t)=>{w.owned.includes(e)&&(_(t=>({...t,game:{...t.game,equipped:e}})),g(`Loadout updated`,`${t} is now active.`))},quests:w.quests}),a===`achievements`&&(0,A.jsx)($e,{quests:w.quests}),a===`profile`&&(0,A.jsx)(it,{profile:C,xp:w.xp,setAvatar:e=>{_(t=>({...t,profile:{...t.profile,avatar:e}})),g(`Avatar updated`,`Changes saved to player file.`)},owned:w.owned,equipped:w.equipped,updateProfileCredentials:(i,a)=>{if(!e)return!1;let o=e.email;if(i!==o&&n[i])return!1;r(e=>{let t={...e},n=t[o];return delete t[o],t[i]={...n,password:a,profile:{...n.profile,email:i}},Ve(t),t}),t({email:i});try{window.localStorage.setItem(`derioux-player-v3-session`,JSON.stringify({email:i}))}catch{}return!0},notify:g})]})]}),(0,A.jsx)(Ke,{items:l,onDismiss:e=>u(t=>t.filter(t=>t.id!==e))})]})})}(0,_e.createRoot)(document.getElementById(`root`)).render((0,A.jsx)(at,{}));