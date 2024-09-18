/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9481:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(758),ca=__webpack_require__(1896);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Sg(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null)}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a}}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a)}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function mh(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(uh);G(uh,b)}function zh(){E(uh);E(vh);E(wh)}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c))}function Bh(a){vh.current===a&&(E(uh),E(vh))}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e)}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else{if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a}return O}
function Vh(a,b){return"function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e)}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a)}function ai(a,b,c){return c(function(){ei(b)&&fi(a)})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1)}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return[b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d)}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d)}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b()}finally{C=c,Gh.transition=d}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d)}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d))}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return[d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Ei={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d))}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null)}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b)};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a))}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d)}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo)}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1))}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c)}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304)}else{if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Mj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f)}e=e.next}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c)}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a)}catch(t){W(a,a.return,t)}try{Pj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a)}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function hk(a,b,c){V=a;ik(a,b,c)}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f,b,c),f=f.sibling;V=e;Jj=h;U=l}kk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a,b,c)}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}sh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Rj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Rj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg())}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Fk(c,Gk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else{b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h)}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a)}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d))}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg())}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg()}}function Hj(){fj=ej.current;E(ej)}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj()}c=c.return}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}fh=null}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ih=!1}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return}while(null!==f)}Sk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z)}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e)}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y)}function Lk(){for(;null!==Y&&!cc();)Uk(Y)}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else{c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d)}finally{ok.transition=e,C=d}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c,a,e);dc();K=h;C=g;ok.transition=f}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode,d);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else{a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,ok.transition=b}}return!1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b))}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b)}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c))}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c)}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c)}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c)}b=b.child}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Xi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b)}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a)};function ll(a){this._internalRoot=a}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null)});b[uf]=null}};function ml(a){this._internalRoot=a}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function nl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a)}}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a)}}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d)});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a)}}fl(b,g,a,e)}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c)}}),il(a,1)}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c)}il(a,134217728)}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d)}il(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};exports.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Rk(a)};exports.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};exports.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Qk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};exports.version="18.3.1-next-f1338f8080-20240426";


/***/ }),

/***/ 9576:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(8143);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 8143:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(9481);
} else {}


/***/ }),

/***/ 7462:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(758),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 2713:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 758:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(2713);
} else {}


/***/ }),

/***/ 6070:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(7462);
} else {}


/***/ }),

/***/ 2909:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbsoluteFill = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const AbsoluteFillRefForwarding = (props, ref) => {
    const { style, ...other } = props;
    const actualStyle = (0, react_1.useMemo)(() => {
        return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            ...style,
        };
    }, [style]);
    return (0, jsx_runtime_1.jsx)("div", { ref: ref, style: actualStyle, ...other });
};
/**
 * @description An absolutely positioned <div> element with 100% width, height, and a column flex style
 * @see [Documentation](https://www.remotion.dev/docs/absolute-fill)
 */
exports.AbsoluteFill = (0, react_1.forwardRef)(AbsoluteFillRefForwarding);


/***/ }),

/***/ 4239:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Artifact = void 0;
const react_1 = __webpack_require__(758);
const RenderAssetManager_1 = __webpack_require__(9634);
const get_remotion_environment_1 = __webpack_require__(2161);
const use_current_frame_1 = __webpack_require__(6606);
const Artifact = ({ filename, content }) => {
    const { registerRenderAsset, unregisterRenderAsset } = (0, react_1.useContext)(RenderAssetManager_1.RenderAssetManager);
    const [env] = (0, react_1.useState)(() => (0, get_remotion_environment_1.getRemotionEnvironment)());
    const frame = (0, use_current_frame_1.useCurrentFrame)();
    const [id] = (0, react_1.useState)(() => {
        return String(Math.random());
    });
    (0, react_1.useEffect)(() => {
        if (!env.isRendering) {
            return;
        }
        if (content instanceof Uint8Array) {
            registerRenderAsset({
                type: 'artifact',
                id,
                content: btoa(new TextDecoder('utf8').decode(content)),
                filename,
                frame,
                binary: true,
            });
        }
        else {
            registerRenderAsset({
                type: 'artifact',
                id,
                content,
                filename,
                frame,
                binary: false,
            });
        }
        return () => {
            return unregisterRenderAsset(id);
        };
    }, [
        content,
        env.isRendering,
        filename,
        frame,
        id,
        registerRenderAsset,
        unregisterRenderAsset,
    ]);
    return null;
};
exports.Artifact = Artifact;


/***/ }),

/***/ 7803:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanUseRemotionHooksProvider = exports.CanUseRemotionHooks = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
exports.CanUseRemotionHooks = (0, react_1.createContext)(false);
const CanUseRemotionHooksProvider = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(exports.CanUseRemotionHooks.Provider, { value: true, children: children }));
};
exports.CanUseRemotionHooksProvider = CanUseRemotionHooksProvider;


/***/ }),

/***/ 3256:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Clipper = void 0;
const react_1 = __webpack_require__(758);
const NativeLayers_js_1 = __webpack_require__(596);
const Clipper = ({ height, width, x, y }) => {
    const { setClipRegion } = (0, react_1.useContext)(NativeLayers_js_1.NativeLayersContext);
    (0, react_1.useEffect)(() => {
        setClipRegion((c) => {
            if (c === 'hide') {
                throw new Error('Cannot render <Clipper>, because another <Null> is already rendered');
            }
            if (c === null) {
                return { height, width, x, y };
            }
            throw new Error('Cannot render <Clipper>, because another component clipping the region was already rendered (most likely <Clipper>)');
        });
        return () => {
            setClipRegion(null);
        };
    }, [height, setClipRegion, width, x, y]);
    return null;
};
exports.Clipper = Clipper;


/***/ }),

/***/ 8575:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Composition = exports.ClipComposition = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const react_dom_1 = __webpack_require__(8143);
const AbsoluteFill_js_1 = __webpack_require__(2909);
const CanUseRemotionHooks_js_1 = __webpack_require__(7803);
const CompositionManagerContext_js_1 = __webpack_require__(809);
const Folder_js_1 = __webpack_require__(1365);
const NativeLayers_js_1 = __webpack_require__(596);
const ResolveCompositionConfig_js_1 = __webpack_require__(6905);
const delay_render_js_1 = __webpack_require__(7687);
const get_remotion_environment_js_1 = __webpack_require__(2161);
const input_props_serialization_js_1 = __webpack_require__(1747);
const is_player_js_1 = __webpack_require__(19);
const loading_indicator_js_1 = __webpack_require__(5997);
const nonce_js_1 = __webpack_require__(5574);
const portal_node_js_1 = __webpack_require__(4436);
const use_lazy_component_js_1 = __webpack_require__(3855);
const use_video_js_1 = __webpack_require__(2768);
const validate_composition_id_js_1 = __webpack_require__(6980);
const validate_default_props_js_1 = __webpack_require__(7956);
const ClipComposition = ({ children }) => {
    const { clipRegion } = (0, react_1.useContext)(NativeLayers_js_1.NativeLayersContext);
    const style = (0, react_1.useMemo)(() => {
        return {
            display: 'flex',
            flexDirection: 'row',
            opacity: clipRegion === 'hide' ? 0 : 1,
            clipPath: clipRegion && clipRegion !== 'hide'
                ? `polygon(${clipRegion.x}px ${clipRegion.y}px, ${clipRegion.x}px ${clipRegion.height + clipRegion.y}px, ${clipRegion.width + clipRegion.x}px ${clipRegion.height + clipRegion.y}px, ${clipRegion.width + clipRegion.x}px ${clipRegion.y}px)`
                : undefined,
        };
    }, [clipRegion]);
    return (0, jsx_runtime_1.jsx)(AbsoluteFill_js_1.AbsoluteFill, { style: style, children: children });
};
exports.ClipComposition = ClipComposition;
const Fallback = () => {
    (0, react_1.useEffect)(() => {
        const fallback = (0, delay_render_js_1.delayRender)('Waiting for Root component to unsuspend');
        return () => (0, delay_render_js_1.continueRender)(fallback);
    }, []);
    return null;
};
/**
 * @description This component is used to register a video to make it renderable and make it show in the sidebar, in dev mode.
 * @see [Documentation](https://www.remotion.dev/docs/composition)
 */
const Composition = ({ width, height, fps, durationInFrames, id, defaultProps, schema, ...compProps }) => {
    var _a, _b;
    const { registerComposition, unregisterComposition } = (0, react_1.useContext)(CompositionManagerContext_js_1.CompositionManager);
    const video = (0, use_video_js_1.useVideo)();
    const lazy = (0, use_lazy_component_js_1.useLazyComponent)(compProps);
    const nonce = (0, nonce_js_1.useNonce)();
    const isPlayer = (0, is_player_js_1.useIsPlayer)();
    const environment = (0, get_remotion_environment_js_1.getRemotionEnvironment)();
    const canUseComposition = (0, react_1.useContext)(CanUseRemotionHooks_js_1.CanUseRemotionHooks);
    if (canUseComposition) {
        if (isPlayer) {
            throw new Error('<Composition> was mounted inside the `component` that was passed to the <Player>. See https://remotion.dev/docs/wrong-composition-mount for help.');
        }
        throw new Error('<Composition> mounted inside another composition. See https://remotion.dev/docs/wrong-composition-mount for help.');
    }
    const { folderName, parentName } = (0, react_1.useContext)(Folder_js_1.FolderContext);
    (0, react_1.useEffect)(() => {
        var _a;
        // Ensure it's a URL safe id
        if (!id) {
            throw new Error('No id for composition passed.');
        }
        (0, validate_composition_id_js_1.validateCompositionId)(id);
        (0, validate_default_props_js_1.validateDefaultAndInputProps)(defaultProps, 'defaultProps', id);
        registerComposition({
            durationInFrames: durationInFrames !== null && durationInFrames !== void 0 ? durationInFrames : undefined,
            fps: fps !== null && fps !== void 0 ? fps : undefined,
            height: height !== null && height !== void 0 ? height : undefined,
            width: width !== null && width !== void 0 ? width : undefined,
            id,
            folderName,
            component: lazy,
            defaultProps: (0, input_props_serialization_js_1.serializeThenDeserializeInStudio)((defaultProps !== null && defaultProps !== void 0 ? defaultProps : {})),
            nonce,
            parentFolderName: parentName,
            schema: schema !== null && schema !== void 0 ? schema : null,
            calculateMetadata: (_a = compProps.calculateMetadata) !== null && _a !== void 0 ? _a : null,
        });
        return () => {
            unregisterComposition(id);
        };
    }, [
        durationInFrames,
        fps,
        height,
        lazy,
        id,
        folderName,
        defaultProps,
        registerComposition,
        unregisterComposition,
        width,
        nonce,
        parentName,
        schema,
        compProps.calculateMetadata,
    ]);
    const resolved = (0, ResolveCompositionConfig_js_1.useResolvedVideoConfig)(id);
    if (environment.isStudio && video && video.component === lazy) {
        const Comp = lazy;
        if (resolved === null || resolved.type !== 'success') {
            return null;
        }
        return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(exports.ClipComposition, { children: (0, jsx_runtime_1.jsx)(CanUseRemotionHooks_js_1.CanUseRemotionHooksProvider, { children: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(loading_indicator_js_1.Loading, {}), children: (0, jsx_runtime_1.jsx)(Comp, { ...((_a = resolved.result.props) !== null && _a !== void 0 ? _a : {}) }) }) }) }), (0, portal_node_js_1.portalNode)());
    }
    if (environment.isRendering && video && video.component === lazy) {
        const Comp = lazy;
        if (resolved === null || resolved.type !== 'success') {
            return null;
        }
        return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(CanUseRemotionHooks_js_1.CanUseRemotionHooksProvider, { children: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(Fallback, {}), children: (0, jsx_runtime_1.jsx)(Comp, { ...((_b = resolved.result.props) !== null && _b !== void 0 ? _b : {}) }) }) }), (0, portal_node_js_1.portalNode)());
    }
    return null;
};
exports.Composition = Composition;


/***/ }),

/***/ 7156:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompositionManagerProvider = exports.compositionsRef = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __importStar(__webpack_require__(758));
const CompositionManagerContext_js_1 = __webpack_require__(809);
const RenderAssetManager_js_1 = __webpack_require__(9634);
const ResolveCompositionConfig_js_1 = __webpack_require__(6905);
const SequenceManager_js_1 = __webpack_require__(6109);
const shared_audio_tags_js_1 = __webpack_require__(4368);
exports.compositionsRef = react_1.default.createRef();
const CompositionManagerProvider = ({ children, numberOfAudioTags }) => {
    var _a;
    // Wontfix, expected to have
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [compositions, setCompositions] = (0, react_1.useState)([]);
    const currentcompositionsRef = (0, react_1.useRef)(compositions);
    const [folders, setFolders] = (0, react_1.useState)([]);
    const [canvasContent, setCanvasContent] = (0, react_1.useState)(null);
    const [currentCompositionMetadata, setCurrentCompositionMetadata] = (0, react_1.useState)(null);
    const updateCompositions = (0, react_1.useCallback)((
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateComps) => {
        setCompositions((comps) => {
            const updated = updateComps(comps);
            currentcompositionsRef.current = updated;
            return updated;
        });
    }, []);
    const registerComposition = (0, react_1.useCallback)((comp) => {
        updateCompositions((comps) => {
            if (comps.find((c) => c.id === comp.id)) {
                throw new Error(`Multiple composition with id ${comp.id} are registered.`);
            }
            const value = [...comps, comp]
                .slice()
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .sort((a, b) => a.nonce - b.nonce);
            return value;
        });
    }, [updateCompositions]);
    const unregisterComposition = (0, react_1.useCallback)((id) => {
        setCompositions((comps) => {
            return comps.filter((c) => c.id !== id);
        });
    }, []);
    const registerFolder = (0, react_1.useCallback)((name, parent) => {
        setFolders((prevFolders) => {
            return [
                ...prevFolders,
                {
                    name,
                    parent,
                },
            ];
        });
    }, []);
    const unregisterFolder = (0, react_1.useCallback)((name, parent) => {
        setFolders((prevFolders) => {
            return prevFolders.filter((p) => !(p.name === name && p.parent === parent));
        });
    }, []);
    (0, react_1.useImperativeHandle)(exports.compositionsRef, () => {
        return {
            getCompositions: () => currentcompositionsRef.current,
        };
    }, []);
    const composition = compositions.find((c) => (canvasContent === null || canvasContent === void 0 ? void 0 : canvasContent.type) === 'composition'
        ? c.id === canvasContent.compositionId
        : null);
    const updateCompositionDefaultProps = (0, react_1.useCallback)((id, newDefaultProps) => {
        setCompositions((comps) => {
            const updated = comps.map((c) => {
                if (c.id === id) {
                    return {
                        ...c,
                        defaultProps: newDefaultProps,
                    };
                }
                return c;
            });
            return updated;
        });
    }, []);
    const contextValue = (0, react_1.useMemo)(() => {
        return {
            compositions,
            registerComposition,
            unregisterComposition,
            folders,
            registerFolder,
            unregisterFolder,
            currentCompositionMetadata,
            setCurrentCompositionMetadata,
            canvasContent,
            setCanvasContent,
            updateCompositionDefaultProps,
        };
    }, [
        compositions,
        registerComposition,
        unregisterComposition,
        folders,
        registerFolder,
        unregisterFolder,
        currentCompositionMetadata,
        canvasContent,
        updateCompositionDefaultProps,
    ]);
    return ((0, jsx_runtime_1.jsx)(CompositionManagerContext_js_1.CompositionManager.Provider, { value: contextValue, children: (0, jsx_runtime_1.jsx)(SequenceManager_js_1.SequenceManagerProvider, { children: (0, jsx_runtime_1.jsx)(RenderAssetManager_js_1.RenderAssetManagerProvider, { children: (0, jsx_runtime_1.jsx)(ResolveCompositionConfig_js_1.ResolveCompositionConfig, { children: (0, jsx_runtime_1.jsx)(shared_audio_tags_js_1.SharedAudioContextProvider, { numberOfAudioTags: numberOfAudioTags, component: (_a = composition === null || composition === void 0 ? void 0 : composition.component) !== null && _a !== void 0 ? _a : null, children: children }) }) }) }) }));
};
exports.CompositionManagerProvider = CompositionManagerProvider;


/***/ }),

/***/ 809:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompositionManager = void 0;
const react_1 = __webpack_require__(758);
exports.CompositionManager = (0, react_1.createContext)({
    compositions: [],
    registerComposition: () => undefined,
    unregisterComposition: () => undefined,
    registerFolder: () => undefined,
    unregisterFolder: () => undefined,
    setCurrentCompositionMetadata: () => undefined,
    updateCompositionDefaultProps: () => undefined,
    folders: [],
    currentCompositionMetadata: null,
    canvasContent: null,
    setCanvasContent: () => undefined,
});


/***/ }),

/***/ 8004:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditorPropsProvider = exports.editorPropsProviderRef = exports.EditorPropsContext = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __importStar(__webpack_require__(758));
exports.EditorPropsContext = (0, react_1.createContext)({
    props: {},
    updateProps: () => {
        throw new Error('Not implemented');
    },
    resetUnsaved: () => {
        throw new Error('Not implemented');
    },
});
exports.editorPropsProviderRef = react_1.default.createRef();
const EditorPropsProvider = ({ children }) => {
    const [props, setProps] = react_1.default.useState({});
    const updateProps = (0, react_1.useCallback)(({ defaultProps, id, newProps, }) => {
        setProps((prev) => {
            var _a;
            return {
                ...prev,
                [id]: typeof newProps === 'function'
                    ? newProps((_a = prev[id]) !== null && _a !== void 0 ? _a : defaultProps)
                    : newProps,
            };
        });
    }, []);
    const resetUnsaved = (0, react_1.useCallback)(() => {
        setProps({});
    }, []);
    (0, react_1.useImperativeHandle)(exports.editorPropsProviderRef, () => {
        return {
            getProps: () => props,
            setProps,
        };
    }, [props]);
    const ctx = (0, react_1.useMemo)(() => {
        return { props, updateProps, resetUnsaved };
    }, [props, resetUnsaved, updateProps]);
    return ((0, jsx_runtime_1.jsx)(exports.EditorPropsContext.Provider, { value: ctx, children: children }));
};
exports.EditorPropsProvider = EditorPropsProvider;


/***/ }),

/***/ 1365:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Folder = exports.FolderContext = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const CompositionManagerContext_js_1 = __webpack_require__(809);
const truthy_js_1 = __webpack_require__(9609);
const validate_folder_name_js_1 = __webpack_require__(670);
exports.FolderContext = (0, react_1.createContext)({
    folderName: null,
    parentName: null,
});
/**
 * @description By wrapping a <Composition /> inside a <Folder />, you can visually categorize it in your sidebar, should you have many compositions.
 * @see [Documentation](https://www.remotion.dev/docs/folder)
 */
const Folder = ({ name, children, }) => {
    const parent = (0, react_1.useContext)(exports.FolderContext);
    const { registerFolder, unregisterFolder } = (0, react_1.useContext)(CompositionManagerContext_js_1.CompositionManager);
    (0, validate_folder_name_js_1.validateFolderName)(name);
    const parentNameArr = [parent.parentName, parent.folderName].filter(truthy_js_1.truthy);
    const parentName = parentNameArr.length === 0 ? null : parentNameArr.join('/');
    const value = (0, react_1.useMemo)(() => {
        return {
            folderName: name,
            parentName,
        };
    }, [name, parentName]);
    (0, react_1.useEffect)(() => {
        registerFolder(name, parentName);
        return () => {
            unregisterFolder(name, parentName);
        };
    }, [name, parent.folderName, parentName, registerFolder, unregisterFolder]);
    return ((0, jsx_runtime_1.jsx)(exports.FolderContext.Provider, { value: value, children: children }));
};
exports.Folder = Folder;


/***/ }),

/***/ 4301:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IFrame = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const delay_render_js_1 = __webpack_require__(7687);
const IFrameRefForwarding = ({ onLoad, onError, delayRenderRetries, delayRenderTimeoutInMilliseconds, ...props }, ref) => {
    const [handle] = (0, react_1.useState)(() => (0, delay_render_js_1.delayRender)(`Loading <IFrame> with source ${props.src}`, {
        retries: delayRenderRetries !== null && delayRenderRetries !== void 0 ? delayRenderRetries : undefined,
        timeoutInMilliseconds: delayRenderTimeoutInMilliseconds !== null && delayRenderTimeoutInMilliseconds !== void 0 ? delayRenderTimeoutInMilliseconds : undefined,
    }));
    const didLoad = (0, react_1.useCallback)((e) => {
        (0, delay_render_js_1.continueRender)(handle);
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(e);
    }, [handle, onLoad]);
    const didGetError = (0, react_1.useCallback)((e) => {
        (0, delay_render_js_1.continueRender)(handle);
        if (onError) {
            onError(e);
        }
        else {
            // eslint-disable-next-line no-console
            console.error('Error loading iframe:', e, 'Handle the event using the onError() prop to make this message disappear.');
        }
    }, [handle, onError]);
    return (0, jsx_runtime_1.jsx)("iframe", { ...props, ref: ref, onError: didGetError, onLoad: didLoad });
};
/**
 * @description The <IFrame /> can be used like a regular <iframe> HTML tag.
 * @see [Documentation](https://www.remotion.dev/docs/iframe)
 */
exports.IFrame = (0, react_1.forwardRef)(IFrameRefForwarding);


/***/ }),

/***/ 7066:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Img = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const SequenceContext_js_1 = __webpack_require__(3981);
const cancel_render_js_1 = __webpack_require__(4744);
const delay_render_js_1 = __webpack_require__(7687);
const prefetch_js_1 = __webpack_require__(8470);
const use_buffer_state_js_1 = __webpack_require__(8561);
function exponentialBackoff(errorCount) {
    return 1000 * 2 ** (errorCount - 1);
}
const ImgRefForwarding = ({ onError, maxRetries = 2, src, pauseWhenLoading, delayRenderRetries, delayRenderTimeoutInMilliseconds, onImageFrame, ...props }, ref) => {
    const imageRef = (0, react_1.useRef)(null);
    const errors = (0, react_1.useRef)({});
    const { delayPlayback } = (0, use_buffer_state_js_1.useBufferState)();
    const sequenceContext = (0, react_1.useContext)(SequenceContext_js_1.SequenceContext);
    if (!src) {
        throw new Error('No "src" prop was passed to <Img>.');
    }
    (0, react_1.useImperativeHandle)(ref, () => {
        return imageRef.current;
    }, []);
    const actualSrc = (0, prefetch_js_1.usePreload)(src);
    const retryIn = (0, react_1.useCallback)((timeout) => {
        if (!imageRef.current) {
            return;
        }
        const currentSrc = imageRef.current.src;
        setTimeout(() => {
            var _a;
            if (!imageRef.current) {
                // Component has been unmounted, do not retry
                return;
            }
            const newSrc = (_a = imageRef.current) === null || _a === void 0 ? void 0 : _a.src;
            if (newSrc !== currentSrc) {
                // src has changed, do not retry
                return;
            }
            imageRef.current.removeAttribute('src');
            imageRef.current.setAttribute('src', newSrc);
        }, timeout);
    }, []);
    const didGetError = (0, react_1.useCallback)((e) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (!errors.current) {
            return;
        }
        errors.current[(_a = imageRef.current) === null || _a === void 0 ? void 0 : _a.src] =
            ((_c = errors.current[(_b = imageRef.current) === null || _b === void 0 ? void 0 : _b.src]) !== null && _c !== void 0 ? _c : 0) + 1;
        if (onError &&
            ((_e = errors.current[(_d = imageRef.current) === null || _d === void 0 ? void 0 : _d.src]) !== null && _e !== void 0 ? _e : 0) > maxRetries) {
            onError(e);
            return;
        }
        if (((_g = errors.current[(_f = imageRef.current) === null || _f === void 0 ? void 0 : _f.src]) !== null && _g !== void 0 ? _g : 0) <= maxRetries) {
            const backoff = exponentialBackoff((_j = errors.current[(_h = imageRef.current) === null || _h === void 0 ? void 0 : _h.src]) !== null && _j !== void 0 ? _j : 0);
            // eslint-disable-next-line no-console
            console.warn(`Could not load image with source ${(_k = imageRef.current) === null || _k === void 0 ? void 0 : _k.src}, retrying again in ${backoff}ms`);
            retryIn(backoff);
            return;
        }
        (0, cancel_render_js_1.cancelRender)('Error loading image with src: ' + ((_l = imageRef.current) === null || _l === void 0 ? void 0 : _l.src));
    }, [maxRetries, onError, retryIn]);
    if (typeof window !== 'undefined') {
        const isPremounting = Boolean(sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.premounting);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, react_1.useLayoutEffect)(() => {
            var _a, _b;
            if (((_b = (_a = window.process) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.NODE_ENV) === 'test') {
                return;
            }
            const newHandle = (0, delay_render_js_1.delayRender)('Loading <Img> with src=' + actualSrc, {
                retries: delayRenderRetries !== null && delayRenderRetries !== void 0 ? delayRenderRetries : undefined,
                timeoutInMilliseconds: delayRenderTimeoutInMilliseconds !== null && delayRenderTimeoutInMilliseconds !== void 0 ? delayRenderTimeoutInMilliseconds : undefined,
            });
            const unblock = pauseWhenLoading && !isPremounting
                ? delayPlayback().unblock
                : () => undefined;
            const { current } = imageRef;
            const onComplete = () => {
                var _a, _b, _c, _d;
                if (((_b = errors.current[(_a = imageRef.current) === null || _a === void 0 ? void 0 : _a.src]) !== null && _b !== void 0 ? _b : 0) > 0) {
                    delete errors.current[(_c = imageRef.current) === null || _c === void 0 ? void 0 : _c.src];
                    // eslint-disable-next-line no-console
                    console.info(`Retry successful - ${(_d = imageRef.current) === null || _d === void 0 ? void 0 : _d.src} is now loaded`);
                }
                if (current) {
                    onImageFrame === null || onImageFrame === void 0 ? void 0 : onImageFrame(current);
                }
                unblock();
                (0, delay_render_js_1.continueRender)(newHandle);
            };
            const didLoad = () => {
                onComplete();
            };
            if (current === null || current === void 0 ? void 0 : current.complete) {
                onComplete();
            }
            else {
                current === null || current === void 0 ? void 0 : current.addEventListener('load', didLoad, { once: true });
            }
            // If tag gets unmounted, clear pending handles because image is not going to load
            return () => {
                current === null || current === void 0 ? void 0 : current.removeEventListener('load', didLoad);
                unblock();
                (0, delay_render_js_1.continueRender)(newHandle);
            };
        }, [
            actualSrc,
            delayPlayback,
            delayRenderRetries,
            delayRenderTimeoutInMilliseconds,
            pauseWhenLoading,
            isPremounting,
            onImageFrame,
        ]);
    }
    return ((0, jsx_runtime_1.jsx)("img", { ...props, ref: imageRef, src: actualSrc, onError: didGetError }));
};
/**
 * @description Works just like a regular HTML img tag. When you use the <Img> tag, Remotion will ensure that the image is loaded before rendering the frame.
 * @see [Documentation](https://www.remotion.dev/docs/img)
 */
exports.Img = (0, react_1.forwardRef)(ImgRefForwarding);


/***/ }),

/***/ 596:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NativeLayersProvider = exports.NativeLayersContext = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
exports.NativeLayersContext = (0, react_1.createContext)({
    setClipRegion: () => {
        throw new Error('NativeLayers not set');
    },
    clipRegion: null,
});
const NativeLayersProvider = ({ children, }) => {
    const [clipRegion, setClipRegion] = (0, react_1.useState)(null);
    const context = (0, react_1.useMemo)(() => {
        return {
            setClipRegion,
            clipRegion,
        };
    }, [clipRegion, setClipRegion]);
    if (typeof window !== 'undefined') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, react_1.useLayoutEffect)(() => {
            window.remotion_getClipRegion = () => {
                return clipRegion;
            };
        }, [clipRegion, setClipRegion]);
    }
    return ((0, jsx_runtime_1.jsx)(exports.NativeLayersContext.Provider, { value: context, children: children }));
};
exports.NativeLayersProvider = NativeLayersProvider;


/***/ }),

/***/ 4920:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Null = void 0;
const react_1 = __webpack_require__(758);
const NativeLayers_js_1 = __webpack_require__(596);
const Null = () => {
    const { setClipRegion } = (0, react_1.useContext)(NativeLayers_js_1.NativeLayersContext);
    (0, react_1.useEffect)(() => {
        setClipRegion((c) => {
            if (c === null) {
                return 'hide';
            }
            // Rendering multiple <Null> is fine, because they are all hidden
            if (c === 'hide') {
                return 'hide';
            }
            throw new Error('Cannot render <Null>, because another component clipping the region was already rendered (most likely <Clipper>)');
        });
        return () => {
            setClipRegion(null);
        };
    }, [setClipRegion]);
    return null;
};
exports.Null = Null;


/***/ }),

/***/ 9614:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemotionRoot = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const CompositionManager_js_1 = __webpack_require__(7156);
const EditorProps_js_1 = __webpack_require__(8004);
const NativeLayers_js_1 = __webpack_require__(596);
const buffering_js_1 = __webpack_require__(9211);
const delay_render_js_1 = __webpack_require__(7687);
const nonce_js_1 = __webpack_require__(5574);
const prefetch_state_js_1 = __webpack_require__(2926);
const random_js_1 = __webpack_require__(8910);
const timeline_position_state_js_1 = __webpack_require__(5488);
const duration_state_js_1 = __webpack_require__(4461);
const RemotionRoot = ({ children, numberOfAudioTags }) => {
    const [remotionRootId] = (0, react_1.useState)(() => String((0, random_js_1.random)(null)));
    const [frame, setFrame] = (0, react_1.useState)(() => (0, timeline_position_state_js_1.getInitialFrameState)());
    const [playing, setPlaying] = (0, react_1.useState)(false);
    const imperativePlaying = (0, react_1.useRef)(false);
    const [fastRefreshes, setFastRefreshes] = (0, react_1.useState)(0);
    const [playbackRate, setPlaybackRate] = (0, react_1.useState)(1);
    const audioAndVideoTags = (0, react_1.useRef)([]);
    if (typeof window !== 'undefined') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, react_1.useLayoutEffect)(() => {
            window.remotion_setFrame = (f, composition, attempt) => {
                window.remotion_attempt = attempt;
                const id = (0, delay_render_js_1.delayRender)(`Setting the current frame to ${f}`);
                let asyncUpdate = true;
                setFrame((s) => {
                    var _a;
                    const currentFrame = (_a = s[composition]) !== null && _a !== void 0 ? _a : window.remotion_initialFrame;
                    // Avoid cloning the object
                    if (currentFrame === f) {
                        asyncUpdate = false;
                        return s;
                    }
                    return {
                        ...s,
                        [composition]: f,
                    };
                });
                // After setting the state, need to wait until it is applied in the next cycle
                if (asyncUpdate) {
                    requestAnimationFrame(() => (0, delay_render_js_1.continueRender)(id));
                }
                else {
                    (0, delay_render_js_1.continueRender)(id);
                }
            };
            window.remotion_isPlayer = false;
        }, []);
    }
    const timelineContextValue = (0, react_1.useMemo)(() => {
        return {
            frame,
            playing,
            imperativePlaying,
            rootId: remotionRootId,
            playbackRate,
            setPlaybackRate,
            audioAndVideoTags,
        };
    }, [frame, playbackRate, playing, remotionRootId]);
    const setTimelineContextValue = (0, react_1.useMemo)(() => {
        return {
            setFrame,
            setPlaying,
        };
    }, []);
    const nonceContext = (0, react_1.useMemo)(() => {
        let counter = 0;
        return {
            getNonce: () => counter++,
            fastRefreshes,
        };
    }, [fastRefreshes]);
    (0, react_1.useEffect)(() => {
        if (true) {
            if (module.hot) {
                module.hot.addStatusHandler((status) => {
                    if (status === 'idle') {
                        setFastRefreshes((i) => i + 1);
                    }
                });
            }
        }
    }, []);
    return ((0, jsx_runtime_1.jsx)(nonce_js_1.NonceContext.Provider, { value: nonceContext, children: (0, jsx_runtime_1.jsx)(timeline_position_state_js_1.TimelineContext.Provider, { value: timelineContextValue, children: (0, jsx_runtime_1.jsx)(timeline_position_state_js_1.SetTimelineContext.Provider, { value: setTimelineContextValue, children: (0, jsx_runtime_1.jsx)(EditorProps_js_1.EditorPropsProvider, { children: (0, jsx_runtime_1.jsx)(prefetch_state_js_1.PrefetchProvider, { children: (0, jsx_runtime_1.jsx)(NativeLayers_js_1.NativeLayersProvider, { children: (0, jsx_runtime_1.jsx)(CompositionManager_js_1.CompositionManagerProvider, { numberOfAudioTags: numberOfAudioTags, children: (0, jsx_runtime_1.jsx)(duration_state_js_1.DurationsContextProvider, { children: (0, jsx_runtime_1.jsx)(buffering_js_1.BufferingProvider, { children: children }) }) }) }) }) }) }) }) }));
};
exports.RemotionRoot = RemotionRoot;


/***/ }),

/***/ 9634:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderAssetManagerProvider = exports.RenderAssetManager = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const validate_artifact_js_1 = __webpack_require__(6262);
exports.RenderAssetManager = (0, react_1.createContext)({
    // Must be undefined, otherwise error in Player
    registerRenderAsset: () => undefined,
    unregisterRenderAsset: () => undefined,
    renderAssets: [],
});
const RenderAssetManagerProvider = ({ children }) => {
    const [renderAssets, setRenderAssets] = (0, react_1.useState)([]);
    const registerRenderAsset = (0, react_1.useCallback)((renderAsset) => {
        (0, validate_artifact_js_1.validateRenderAsset)(renderAsset);
        setRenderAssets((assets) => {
            return [...assets, renderAsset];
        });
    }, []);
    const unregisterRenderAsset = (0, react_1.useCallback)((id) => {
        setRenderAssets((assts) => {
            return assts.filter((a) => a.id !== id);
        });
    }, []);
    (0, react_1.useLayoutEffect)(() => {
        if (typeof window !== 'undefined') {
            window.remotion_collectAssets = () => {
                setRenderAssets([]); // clear assets at next render
                return renderAssets;
            };
        }
    }, [renderAssets]);
    const contextValue = (0, react_1.useMemo)(() => {
        return {
            registerRenderAsset,
            unregisterRenderAsset,
            renderAssets,
        };
    }, [renderAssets, registerRenderAsset, unregisterRenderAsset]);
    return ((0, jsx_runtime_1.jsx)(exports.RenderAssetManager.Provider, { value: contextValue, children: children }));
};
exports.RenderAssetManagerProvider = RenderAssetManagerProvider;


/***/ }),

/***/ 6905:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useResolvedVideoConfig = exports.ResolveCompositionConfig = exports.PROPS_UPDATED_EXTERNALLY = exports.needsResolution = exports.resolveCompositionsRef = exports.ResolveCompositionContext = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const CompositionManagerContext_js_1 = __webpack_require__(809);
const EditorProps_js_1 = __webpack_require__(8004);
const input_props_js_1 = __webpack_require__(7955);
const get_remotion_environment_js_1 = __webpack_require__(2161);
const nonce_js_1 = __webpack_require__(5574);
const resolve_video_config_js_1 = __webpack_require__(74);
const validate_dimensions_js_1 = __webpack_require__(6357);
const validate_duration_in_frames_js_1 = __webpack_require__(1241);
const validate_fps_js_1 = __webpack_require__(1309);
exports.ResolveCompositionContext = (0, react_1.createContext)(null);
exports.resolveCompositionsRef = (0, react_1.createRef)();
const needsResolution = (composition) => {
    return Boolean(composition.calculateMetadata);
};
exports.needsResolution = needsResolution;
exports.PROPS_UPDATED_EXTERNALLY = 'remotion.propsUpdatedExternally';
const ResolveCompositionConfig = ({ children }) => {
    const [currentRenderModalComposition, setCurrentRenderModalComposition] = (0, react_1.useState)(null);
    const { compositions, canvasContent, currentCompositionMetadata } = (0, react_1.useContext)(CompositionManagerContext_js_1.CompositionManager);
    const { fastRefreshes } = (0, react_1.useContext)(nonce_js_1.NonceContext);
    const selectedComposition = (0, react_1.useMemo)(() => {
        return compositions.find((c) => canvasContent &&
            canvasContent.type === 'composition' &&
            canvasContent.compositionId === c.id);
    }, [canvasContent, compositions]);
    const renderModalComposition = compositions.find((c) => c.id === currentRenderModalComposition);
    const { props: allEditorProps } = (0, react_1.useContext)(EditorProps_js_1.EditorPropsContext);
    const inputProps = (0, react_1.useMemo)(() => {
        var _a;
        return typeof window === 'undefined' || (0, get_remotion_environment_js_1.getRemotionEnvironment)().isPlayer
            ? {}
            : (_a = (0, input_props_js_1.getInputProps)()) !== null && _a !== void 0 ? _a : {};
    }, []);
    const [resolvedConfigs, setResolvedConfigs] = (0, react_1.useState)({});
    const selectedEditorProps = (0, react_1.useMemo)(() => {
        var _a;
        return selectedComposition
            ? (_a = allEditorProps[selectedComposition.id]) !== null && _a !== void 0 ? _a : {}
            : {};
    }, [allEditorProps, selectedComposition]);
    const renderModalProps = (0, react_1.useMemo)(() => {
        var _a;
        return renderModalComposition
            ? (_a = allEditorProps[renderModalComposition.id]) !== null && _a !== void 0 ? _a : {}
            : {};
    }, [allEditorProps, renderModalComposition]);
    const hasResolution = Boolean(currentCompositionMetadata);
    const doResolution = (0, react_1.useCallback)(({ calculateMetadata, combinedProps, compositionDurationInFrames, compositionFps, compositionHeight, compositionId, compositionWidth, defaultProps, }) => {
        const controller = new AbortController();
        if (hasResolution) {
            return controller;
        }
        const { signal } = controller;
        const result = (0, resolve_video_config_js_1.resolveVideoConfigOrCatch)({
            compositionId,
            calculateMetadata,
            originalProps: combinedProps,
            signal,
            defaultProps,
            compositionDurationInFrames,
            compositionFps,
            compositionHeight,
            compositionWidth,
        });
        if (result.type === 'error') {
            setResolvedConfigs((r) => ({
                ...r,
                [compositionId]: {
                    type: 'error',
                    error: result.error,
                },
            }));
            return controller;
        }
        const promOrNot = result.result;
        if (typeof promOrNot === 'object' && 'then' in promOrNot) {
            setResolvedConfigs((r) => {
                const prev = r[compositionId];
                if ((prev === null || prev === void 0 ? void 0 : prev.type) === 'success' ||
                    (prev === null || prev === void 0 ? void 0 : prev.type) === 'success-and-refreshing') {
                    return {
                        ...r,
                        [compositionId]: {
                            type: 'success-and-refreshing',
                            result: prev.result,
                        },
                    };
                }
                return {
                    ...r,
                    [compositionId]: {
                        type: 'loading',
                    },
                };
            });
            promOrNot
                .then((c) => {
                if (controller.signal.aborted) {
                    return;
                }
                setResolvedConfigs((r) => ({
                    ...r,
                    [compositionId]: {
                        type: 'success',
                        result: c,
                    },
                }));
            })
                .catch((err) => {
                if (controller.signal.aborted) {
                    return;
                }
                setResolvedConfigs((r) => ({
                    ...r,
                    [compositionId]: {
                        type: 'error',
                        error: err,
                    },
                }));
            });
        }
        else {
            setResolvedConfigs((r) => ({
                ...r,
                [compositionId]: {
                    type: 'success',
                    result: promOrNot,
                },
            }));
        }
        return controller;
    }, [hasResolution]);
    const currentComposition = (canvasContent === null || canvasContent === void 0 ? void 0 : canvasContent.type) === 'composition' ? canvasContent.compositionId : null;
    (0, react_1.useImperativeHandle)(exports.resolveCompositionsRef, () => {
        return {
            setCurrentRenderModalComposition: (id) => {
                setCurrentRenderModalComposition(id);
            },
            reloadCurrentlySelectedComposition: () => {
                var _a, _b, _c, _d, _e, _f;
                if (!currentComposition) {
                    return;
                }
                const composition = compositions.find((c) => c.id === currentComposition);
                if (!composition) {
                    throw new Error(`Could not find composition with id ${currentComposition}`);
                }
                const editorProps = (_a = allEditorProps[currentComposition]) !== null && _a !== void 0 ? _a : {};
                const defaultProps = {
                    ...((_b = composition.defaultProps) !== null && _b !== void 0 ? _b : {}),
                    ...(editorProps !== null && editorProps !== void 0 ? editorProps : {}),
                };
                const props = {
                    ...defaultProps,
                    ...(inputProps !== null && inputProps !== void 0 ? inputProps : {}),
                };
                doResolution({
                    defaultProps,
                    calculateMetadata: composition.calculateMetadata,
                    combinedProps: props,
                    compositionDurationInFrames: (_c = composition.durationInFrames) !== null && _c !== void 0 ? _c : null,
                    compositionFps: (_d = composition.fps) !== null && _d !== void 0 ? _d : null,
                    compositionHeight: (_e = composition.height) !== null && _e !== void 0 ? _e : null,
                    compositionWidth: (_f = composition.width) !== null && _f !== void 0 ? _f : null,
                    compositionId: composition.id,
                });
            },
        };
    }, [
        allEditorProps,
        compositions,
        currentComposition,
        doResolution,
        inputProps,
    ]);
    const isTheSame = (selectedComposition === null || selectedComposition === void 0 ? void 0 : selectedComposition.id) === (renderModalComposition === null || renderModalComposition === void 0 ? void 0 : renderModalComposition.id);
    const currentDefaultProps = (0, react_1.useMemo)(() => {
        var _a;
        return {
            ...((_a = selectedComposition === null || selectedComposition === void 0 ? void 0 : selectedComposition.defaultProps) !== null && _a !== void 0 ? _a : {}),
            ...(selectedEditorProps !== null && selectedEditorProps !== void 0 ? selectedEditorProps : {}),
        };
    }, [selectedComposition === null || selectedComposition === void 0 ? void 0 : selectedComposition.defaultProps, selectedEditorProps]);
    const originalProps = (0, react_1.useMemo)(() => {
        return {
            ...currentDefaultProps,
            ...(inputProps !== null && inputProps !== void 0 ? inputProps : {}),
        };
    }, [currentDefaultProps, inputProps]);
    const canResolve = selectedComposition && (0, exports.needsResolution)(selectedComposition);
    const shouldIgnoreUpdate = typeof window !== 'undefined' &&
        window.remotion_ignoreFastRefreshUpdate &&
        fastRefreshes <= window.remotion_ignoreFastRefreshUpdate;
    (0, react_1.useEffect)(() => {
        var _a, _b, _c, _d;
        if (shouldIgnoreUpdate) {
            // We already have the current state, we just saved it back
            // to the file
            return;
        }
        if (canResolve) {
            const controller = doResolution({
                calculateMetadata: selectedComposition.calculateMetadata,
                combinedProps: originalProps,
                compositionDurationInFrames: (_a = selectedComposition.durationInFrames) !== null && _a !== void 0 ? _a : null,
                compositionFps: (_b = selectedComposition.fps) !== null && _b !== void 0 ? _b : null,
                compositionHeight: (_c = selectedComposition.height) !== null && _c !== void 0 ? _c : null,
                compositionWidth: (_d = selectedComposition.width) !== null && _d !== void 0 ? _d : null,
                defaultProps: currentDefaultProps,
                compositionId: selectedComposition.id,
            });
            return () => {
                controller.abort();
            };
        }
    }, [
        canResolve,
        currentDefaultProps,
        doResolution,
        originalProps,
        selectedComposition === null || selectedComposition === void 0 ? void 0 : selectedComposition.calculateMetadata,
        selectedComposition === null || selectedComposition === void 0 ? void 0 : selectedComposition.durationInFrames,
        selectedComposition === null || selectedComposition === void 0 ? void 0 : selectedComposition.fps,
        selectedComposition === null || selectedComposition === void 0 ? void 0 : selectedComposition.height,
        selectedComposition === null || selectedComposition === void 0 ? void 0 : selectedComposition.id,
        selectedComposition === null || selectedComposition === void 0 ? void 0 : selectedComposition.width,
        shouldIgnoreUpdate,
    ]);
    (0, react_1.useEffect)(() => {
        if (shouldIgnoreUpdate) {
            // We already have the current state, we just saved it back
            // to the file
            return;
        }
        window.dispatchEvent(new CustomEvent('remotion.propsUpdatedExternally'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fastRefreshes]);
    (0, react_1.useEffect)(() => {
        var _a, _b, _c, _d, _e;
        if (renderModalComposition && !isTheSame) {
            const combinedProps = {
                ...((_a = renderModalComposition.defaultProps) !== null && _a !== void 0 ? _a : {}),
                ...(renderModalProps !== null && renderModalProps !== void 0 ? renderModalProps : {}),
                ...(inputProps !== null && inputProps !== void 0 ? inputProps : {}),
            };
            const controller = doResolution({
                calculateMetadata: renderModalComposition.calculateMetadata,
                compositionDurationInFrames: (_b = renderModalComposition.durationInFrames) !== null && _b !== void 0 ? _b : null,
                compositionFps: (_c = renderModalComposition.fps) !== null && _c !== void 0 ? _c : null,
                compositionHeight: (_d = renderModalComposition.height) !== null && _d !== void 0 ? _d : null,
                compositionId: renderModalComposition.id,
                compositionWidth: (_e = renderModalComposition.width) !== null && _e !== void 0 ? _e : null,
                defaultProps: currentDefaultProps,
                combinedProps,
            });
            return () => {
                controller.abort();
            };
        }
    }, [
        currentDefaultProps,
        doResolution,
        inputProps,
        isTheSame,
        renderModalComposition,
        renderModalProps,
    ]);
    const resolvedConfigsIncludingStaticOnes = (0, react_1.useMemo)(() => {
        const staticComps = compositions.filter((c) => {
            return c.calculateMetadata === null;
        });
        return {
            ...resolvedConfigs,
            ...staticComps.reduce((acc, curr) => {
                var _a;
                return {
                    ...acc,
                    [curr.id]: {
                        type: 'success',
                        result: { ...curr, defaultProps: (_a = curr.defaultProps) !== null && _a !== void 0 ? _a : {} },
                    },
                };
            }, {}),
        };
    }, [compositions, resolvedConfigs]);
    return ((0, jsx_runtime_1.jsx)(exports.ResolveCompositionContext.Provider, { value: resolvedConfigsIncludingStaticOnes, children: children }));
};
exports.ResolveCompositionConfig = ResolveCompositionConfig;
const useResolvedVideoConfig = (preferredCompositionId) => {
    const context = (0, react_1.useContext)(exports.ResolveCompositionContext);
    const { props: allEditorProps } = (0, react_1.useContext)(EditorProps_js_1.EditorPropsContext);
    const { compositions, canvasContent, currentCompositionMetadata } = (0, react_1.useContext)(CompositionManagerContext_js_1.CompositionManager);
    const currentComposition = (canvasContent === null || canvasContent === void 0 ? void 0 : canvasContent.type) === 'composition' ? canvasContent.compositionId : null;
    const compositionId = preferredCompositionId !== null && preferredCompositionId !== void 0 ? preferredCompositionId : currentComposition;
    const composition = compositions.find((c) => c.id === compositionId);
    const selectedEditorProps = (0, react_1.useMemo)(() => {
        var _a;
        return composition ? (_a = allEditorProps[composition.id]) !== null && _a !== void 0 ? _a : {} : {};
    }, [allEditorProps, composition]);
    return (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d;
        if (!composition) {
            return null;
        }
        if (currentCompositionMetadata) {
            return {
                type: 'success',
                result: {
                    ...currentCompositionMetadata,
                    id: composition.id,
                    props: currentCompositionMetadata.props,
                    defaultProps: (_a = composition.defaultProps) !== null && _a !== void 0 ? _a : {},
                    defaultCodec: currentCompositionMetadata.defaultCodec,
                },
            };
        }
        if (!(0, exports.needsResolution)(composition)) {
            (0, validate_duration_in_frames_js_1.validateDurationInFrames)(composition.durationInFrames, {
                allowFloats: false,
                component: `in <Composition id="${composition.id}">`,
            });
            (0, validate_fps_js_1.validateFps)(composition.fps, `in <Composition id="${composition.id}">`, false);
            (0, validate_dimensions_js_1.validateDimension)(composition.width, 'width', `in <Composition id="${composition.id}">`);
            (0, validate_dimensions_js_1.validateDimension)(composition.height, 'height', `in <Composition id="${composition.id}">`);
            return {
                type: 'success',
                result: {
                    width: composition.width,
                    height: composition.height,
                    fps: composition.fps,
                    id: composition.id,
                    durationInFrames: composition.durationInFrames,
                    defaultProps: (_b = composition.defaultProps) !== null && _b !== void 0 ? _b : {},
                    props: {
                        ...((_c = composition.defaultProps) !== null && _c !== void 0 ? _c : {}),
                        ...(selectedEditorProps !== null && selectedEditorProps !== void 0 ? selectedEditorProps : {}),
                        ...(typeof window === 'undefined' ||
                            (0, get_remotion_environment_js_1.getRemotionEnvironment)().isPlayer
                            ? {}
                            : (_d = (0, input_props_js_1.getInputProps)()) !== null && _d !== void 0 ? _d : {}),
                    },
                    defaultCodec: null,
                },
            };
        }
        if (!context[composition.id]) {
            return null;
        }
        return context[composition.id];
    }, [composition, context, currentCompositionMetadata, selectedEditorProps]);
};
exports.useResolvedVideoConfig = useResolvedVideoConfig;


/***/ }),

/***/ 8808:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sequence = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
/* eslint-disable @typescript-eslint/no-use-before-define */
const react_1 = __webpack_require__(758);
const AbsoluteFill_js_1 = __webpack_require__(2909);
const SequenceContext_js_1 = __webpack_require__(3981);
const SequenceManager_js_1 = __webpack_require__(6109);
const get_remotion_environment_js_1 = __webpack_require__(2161);
const nonce_js_1 = __webpack_require__(5574);
const timeline_position_state_js_1 = __webpack_require__(5488);
const use_video_config_js_1 = __webpack_require__(3299);
const freeze_js_1 = __webpack_require__(7314);
const use_current_frame_1 = __webpack_require__(6606);
const RegularSequenceRefForwardingFunction = ({ from = 0, durationInFrames = Infinity, children, name, height, width, showInTimeline = true, _remotionInternalLoopDisplay: loopDisplay, _remotionInternalStack: stack, _remotionInternalPremountDisplay: premountDisplay, ...other }, ref) => {
    var _a;
    const { layout = 'absolute-fill' } = other;
    const [id] = (0, react_1.useState)(() => String(Math.random()));
    const parentSequence = (0, react_1.useContext)(SequenceContext_js_1.SequenceContext);
    const { rootId } = (0, react_1.useContext)(timeline_position_state_js_1.TimelineContext);
    const cumulatedFrom = parentSequence
        ? parentSequence.cumulatedFrom + parentSequence.relativeFrom
        : 0;
    const nonce = (0, nonce_js_1.useNonce)();
    if (layout !== 'absolute-fill' && layout !== 'none') {
        throw new TypeError(`The layout prop of <Sequence /> expects either "absolute-fill" or "none", but you passed: ${layout}`);
    }
    // @ts-expect-error
    if (layout === 'none' && typeof other.style !== 'undefined') {
        throw new TypeError('If layout="none", you may not pass a style.');
    }
    if (typeof durationInFrames !== 'number') {
        throw new TypeError(`You passed to durationInFrames an argument of type ${typeof durationInFrames}, but it must be a number.`);
    }
    if (durationInFrames <= 0) {
        throw new TypeError(`durationInFrames must be positive, but got ${durationInFrames}`);
    }
    if (typeof from !== 'number') {
        throw new TypeError(`You passed to the "from" props of your <Sequence> an argument of type ${typeof from}, but it must be a number.`);
    }
    if (!Number.isFinite(from)) {
        throw new TypeError(`The "from" prop of a sequence must be finite, but got ${from}.`);
    }
    const absoluteFrame = (0, timeline_position_state_js_1.useTimelinePosition)();
    const videoConfig = (0, use_video_config_js_1.useVideoConfig)();
    const parentSequenceDuration = parentSequence
        ? Math.min(parentSequence.durationInFrames - from, durationInFrames)
        : durationInFrames;
    const actualDurationInFrames = Math.max(0, Math.min(videoConfig.durationInFrames - from, parentSequenceDuration));
    const { registerSequence, unregisterSequence } = (0, react_1.useContext)(SequenceManager_js_1.SequenceManager);
    const { hidden } = (0, react_1.useContext)(SequenceManager_js_1.SequenceVisibilityToggleContext);
    const premounting = (0, react_1.useMemo)(() => {
        var _a;
        return ((_a = parentSequence === null || parentSequence === void 0 ? void 0 : parentSequence.premounting) !== null && _a !== void 0 ? _a : Boolean(other._remotionInternalIsPremounting));
    }, [other._remotionInternalIsPremounting, parentSequence === null || parentSequence === void 0 ? void 0 : parentSequence.premounting]);
    const contextValue = (0, react_1.useMemo)(() => {
        var _a, _b, _c;
        return {
            cumulatedFrom,
            relativeFrom: from,
            durationInFrames: actualDurationInFrames,
            parentFrom: (_a = parentSequence === null || parentSequence === void 0 ? void 0 : parentSequence.relativeFrom) !== null && _a !== void 0 ? _a : 0,
            id,
            height: (_b = height !== null && height !== void 0 ? height : parentSequence === null || parentSequence === void 0 ? void 0 : parentSequence.height) !== null && _b !== void 0 ? _b : null,
            width: (_c = width !== null && width !== void 0 ? width : parentSequence === null || parentSequence === void 0 ? void 0 : parentSequence.width) !== null && _c !== void 0 ? _c : null,
            premounting,
        };
    }, [
        cumulatedFrom,
        from,
        actualDurationInFrames,
        parentSequence,
        id,
        height,
        width,
        premounting,
    ]);
    const timelineClipName = (0, react_1.useMemo)(() => {
        return name !== null && name !== void 0 ? name : '';
    }, [name]);
    (0, react_1.useEffect)(() => {
        var _a;
        if (!(0, get_remotion_environment_js_1.getRemotionEnvironment)().isStudio) {
            return;
        }
        registerSequence({
            from,
            duration: actualDurationInFrames,
            id,
            displayName: timelineClipName,
            parent: (_a = parentSequence === null || parentSequence === void 0 ? void 0 : parentSequence.id) !== null && _a !== void 0 ? _a : null,
            type: 'sequence',
            rootId,
            showInTimeline,
            nonce,
            loopDisplay,
            stack: stack !== null && stack !== void 0 ? stack : null,
            premountDisplay: premountDisplay !== null && premountDisplay !== void 0 ? premountDisplay : null,
        });
        return () => {
            unregisterSequence(id);
        };
    }, [
        durationInFrames,
        id,
        name,
        registerSequence,
        timelineClipName,
        unregisterSequence,
        parentSequence === null || parentSequence === void 0 ? void 0 : parentSequence.id,
        actualDurationInFrames,
        rootId,
        from,
        showInTimeline,
        nonce,
        loopDisplay,
        stack,
        premountDisplay,
    ]);
    // Ceil to support floats
    // https://github.com/remotion-dev/remotion/issues/2958
    const endThreshold = Math.ceil(cumulatedFrom + from + durationInFrames - 1);
    const content = absoluteFrame < cumulatedFrom + from
        ? null
        : absoluteFrame > endThreshold
            ? null
            : children;
    const styleIfThere = other.layout === 'none' ? undefined : other.style;
    const defaultStyle = (0, react_1.useMemo)(() => {
        return {
            flexDirection: undefined,
            ...(width ? { width } : {}),
            ...(height ? { height } : {}),
            ...(styleIfThere !== null && styleIfThere !== void 0 ? styleIfThere : {}),
        };
    }, [height, styleIfThere, width]);
    if (ref !== null && layout === 'none') {
        throw new TypeError('It is not supported to pass both a `ref` and `layout="none"` to <Sequence />.');
    }
    const isSequenceHidden = (_a = hidden[id]) !== null && _a !== void 0 ? _a : false;
    if (isSequenceHidden) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(SequenceContext_js_1.SequenceContext.Provider, { value: contextValue, children: content === null ? null : other.layout === 'none' ? (content) : ((0, jsx_runtime_1.jsx)(AbsoluteFill_js_1.AbsoluteFill, { ref: ref, style: defaultStyle, className: other.className, children: content })) }));
};
const RegularSequence = (0, react_1.forwardRef)(RegularSequenceRefForwardingFunction);
const PremountedSequenceRefForwardingFunction = (props, ref) => {
    const frame = (0, use_current_frame_1.useCurrentFrame)();
    if (props.layout === 'none') {
        throw new Error('`<Sequence>` with `premountFor` prop does not support layout="none"');
    }
    const { style: passedStyle, from = 0, premountFor = 0, ...otherProps } = props;
    const premountingActive = frame < from && frame >= from - premountFor;
    const style = (0, react_1.useMemo)(() => {
        var _a;
        return {
            ...passedStyle,
            opacity: premountingActive ? 0 : 1,
            pointerEvents: premountingActive
                ? 'none'
                : (_a = passedStyle === null || passedStyle === void 0 ? void 0 : passedStyle.pointerEvents) !== null && _a !== void 0 ? _a : undefined,
        };
    }, [premountingActive, passedStyle]);
    return ((0, jsx_runtime_1.jsx)(freeze_js_1.Freeze, { frame: from, active: premountingActive, children: (0, jsx_runtime_1.jsx)(exports.Sequence, { ref: ref, from: from, style: style, _remotionInternalPremountDisplay: premountFor, _remotionInternalIsPremounting: premountingActive, ...otherProps }) }));
};
const PremountedSequence = (0, react_1.forwardRef)(PremountedSequenceRefForwardingFunction);
const SequenceRefForwardingFunction = (props, ref) => {
    if (props.layout !== 'none' &&
        props.premountFor &&
        !(0, get_remotion_environment_js_1.getRemotionEnvironment)().isRendering) {
        return (0, jsx_runtime_1.jsx)(PremountedSequence, { ...props, ref: ref });
    }
    return (0, jsx_runtime_1.jsx)(RegularSequence, { ...props, ref: ref });
};
/**
 * @description A component that time-shifts its children and wraps them in an absolutely positioned <div>.
 * @see [Documentation](https://www.remotion.dev/docs/sequence)
 */
exports.Sequence = (0, react_1.forwardRef)(SequenceRefForwardingFunction);


/***/ }),

/***/ 3981:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SequenceContext = void 0;
const react_1 = __webpack_require__(758);
exports.SequenceContext = (0, react_1.createContext)(null);


/***/ }),

/***/ 6109:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SequenceManagerProvider = exports.SequenceVisibilityToggleContext = exports.SequenceManager = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __importStar(__webpack_require__(758));
exports.SequenceManager = react_1.default.createContext({
    registerSequence: () => {
        throw new Error('SequenceManagerContext not initialized');
    },
    unregisterSequence: () => {
        throw new Error('SequenceManagerContext not initialized');
    },
    sequences: [],
});
exports.SequenceVisibilityToggleContext = react_1.default.createContext({
    hidden: {},
    setHidden: () => {
        throw new Error('SequenceVisibilityToggle not initialized');
    },
});
const SequenceManagerProvider = ({ children }) => {
    const [sequences, setSequences] = (0, react_1.useState)([]);
    const [hidden, setHidden] = (0, react_1.useState)({});
    const registerSequence = (0, react_1.useCallback)((seq) => {
        setSequences((seqs) => {
            return [...seqs, seq];
        });
    }, []);
    const unregisterSequence = (0, react_1.useCallback)((seq) => {
        setSequences((seqs) => seqs.filter((s) => s.id !== seq));
    }, []);
    const sequenceContext = (0, react_1.useMemo)(() => {
        return {
            registerSequence,
            sequences,
            unregisterSequence,
        };
    }, [registerSequence, sequences, unregisterSequence]);
    const hiddenContext = (0, react_1.useMemo)(() => {
        return {
            hidden,
            setHidden,
        };
    }, [hidden]);
    return ((0, jsx_runtime_1.jsx)(exports.SequenceManager.Provider, { value: sequenceContext, children: (0, jsx_runtime_1.jsx)(exports.SequenceVisibilityToggleContext.Provider, { value: hiddenContext, children: children }) }));
};
exports.SequenceManagerProvider = SequenceManagerProvider;


/***/ }),

/***/ 3987:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Still = void 0;
const react_1 = __importDefault(__webpack_require__(758));
const Composition_js_1 = __webpack_require__(8575);
/**
 * @description A `<Still />` is a `<Composition />` that is only 1 frame long.
 * @see [Documentation](https://www.remotion.dev/docs/still)
 */
const Still = (props) => {
    const newProps = {
        ...props,
        durationInFrames: 1,
        fps: 1,
    };
    // @ts-expect-error TypeScript does not understand it, but should still fail on type mismatch
    return react_1.default.createElement((Composition_js_1.Composition), newProps);
};
exports.Still = Still;


/***/ }),

/***/ 4303:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(758);
if (typeof react_1.createContext !== 'function') {
    const err = [
        'Remotion requires React.createContext, but it is "undefined".',
        'If you are in a React Server Component, turn it into a client component by adding "use client" at the top of the file.',
        '',
        'Before:',
        '  import {useCurrentFrame} from "remotion";',
        '',
        'After:',
        '  "use client";',
        '  import {useCurrentFrame} from "remotion";',
    ];
    throw new Error(err.join('\n'));
}


/***/ }),

/***/ 9935:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAbsoluteSrc = void 0;
const getAbsoluteSrc = (relativeSrc) => {
    if (typeof window === 'undefined') {
        return relativeSrc;
    }
    return new URL(relativeSrc, window.origin).href;
};
exports.getAbsoluteSrc = getAbsoluteSrc;


/***/ }),

/***/ 3961:
/***/ (() => {




/***/ }),

/***/ 8750:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Audio = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
/* eslint-disable @typescript-eslint/no-use-before-define */
const react_1 = __webpack_require__(758);
const Sequence_js_1 = __webpack_require__(8808);
const absolute_src_js_1 = __webpack_require__(9935);
const calculate_loop_js_1 = __webpack_require__(4072);
const cancel_render_js_1 = __webpack_require__(4744);
const enable_sequence_stack_traces_js_1 = __webpack_require__(3770);
const get_remotion_environment_js_1 = __webpack_require__(2161);
const index_js_1 = __webpack_require__(3760);
const prefetch_js_1 = __webpack_require__(8470);
const use_video_config_js_1 = __webpack_require__(3299);
const validate_media_props_js_1 = __webpack_require__(9665);
const validate_start_from_props_js_1 = __webpack_require__(9980);
const duration_state_js_1 = __webpack_require__(4461);
const AudioForPreview_js_1 = __webpack_require__(3123);
const AudioForRendering_js_1 = __webpack_require__(2879);
const shared_audio_tags_js_1 = __webpack_require__(4368);
const AudioRefForwardingFunction = (props, ref) => {
    var _a, _b, _c;
    const audioContext = (0, react_1.useContext)(shared_audio_tags_js_1.SharedAudioContext);
    const { startFrom, endAt, name, stack, pauseWhenBuffering, showInTimeline, _remotionDebugSeeking, ...otherProps } = props;
    const { loop, ...propsOtherThanLoop } = props;
    const { fps } = (0, use_video_config_js_1.useVideoConfig)();
    const environment = (0, get_remotion_environment_js_1.getRemotionEnvironment)();
    const { durations, setDurations } = (0, react_1.useContext)(duration_state_js_1.DurationsContext);
    if (typeof props.src !== 'string') {
        throw new TypeError(`The \`<Audio>\` tag requires a string for \`src\`, but got ${JSON.stringify(props.src)} instead.`);
    }
    const preloadedSrc = (0, prefetch_js_1.usePreload)(props.src);
    const onError = (0, react_1.useCallback)((e) => {
        // eslint-disable-next-line no-console
        console.log(e.currentTarget.error);
        // If there is no `loop` property, we don't need to get the duration
        // and this does not need to be a fatal error
        const errMessage = `Could not play audio with src ${preloadedSrc}: ${e.currentTarget.error}. See https://remotion.dev/docs/media-playback-error for help.`;
        if (loop) {
            (0, cancel_render_js_1.cancelRender)(new Error(errMessage));
        }
        else {
            // eslint-disable-next-line no-console
            console.warn(errMessage);
        }
    }, [loop, preloadedSrc]);
    const onDuration = (0, react_1.useCallback)((src, durationInSeconds) => {
        setDurations({ type: 'got-duration', durationInSeconds, src });
    }, [setDurations]);
    const durationFetched = (_a = durations[(0, absolute_src_js_1.getAbsoluteSrc)(preloadedSrc)]) !== null && _a !== void 0 ? _a : durations[(0, absolute_src_js_1.getAbsoluteSrc)(props.src)];
    if (loop && durationFetched !== undefined) {
        const duration = durationFetched * fps;
        return ((0, jsx_runtime_1.jsx)(index_js_1.Loop, { layout: "none", durationInFrames: (0, calculate_loop_js_1.calculateLoopDuration)({
                endAt,
                mediaDuration: duration,
                playbackRate: (_b = props.playbackRate) !== null && _b !== void 0 ? _b : 1,
                startFrom,
            }), children: (0, jsx_runtime_1.jsx)(exports.Audio, { ...propsOtherThanLoop, ref: ref, _remotionInternalNativeLoopPassed: true }) }));
    }
    if (typeof startFrom !== 'undefined' || typeof endAt !== 'undefined') {
        (0, validate_start_from_props_js_1.validateStartFromProps)(startFrom, endAt);
        const startFromFrameNo = startFrom !== null && startFrom !== void 0 ? startFrom : 0;
        const endAtFrameNo = endAt !== null && endAt !== void 0 ? endAt : Infinity;
        return ((0, jsx_runtime_1.jsx)(Sequence_js_1.Sequence, { layout: "none", from: 0 - startFromFrameNo, showInTimeline: false, durationInFrames: endAtFrameNo, name: name, children: (0, jsx_runtime_1.jsx)(exports.Audio, { _remotionInternalNeedsDurationCalculation: Boolean(loop), pauseWhenBuffering: pauseWhenBuffering !== null && pauseWhenBuffering !== void 0 ? pauseWhenBuffering : false, ...otherProps, ref: ref }) }));
    }
    (0, validate_media_props_js_1.validateMediaProps)(props, 'Audio');
    if (environment.isRendering) {
        return ((0, jsx_runtime_1.jsx)(AudioForRendering_js_1.AudioForRendering, { onDuration: onDuration, ...props, ref: ref, onError: onError, _remotionInternalNeedsDurationCalculation: Boolean(loop) }));
    }
    return ((0, jsx_runtime_1.jsx)(AudioForPreview_js_1.AudioForPreview, { _remotionInternalNativeLoopPassed: (_c = props._remotionInternalNativeLoopPassed) !== null && _c !== void 0 ? _c : false, _remotionDebugSeeking: _remotionDebugSeeking !== null && _remotionDebugSeeking !== void 0 ? _remotionDebugSeeking : false, _remotionInternalStack: stack !== null && stack !== void 0 ? stack : null, shouldPreMountAudioTags: audioContext !== null && audioContext.numberOfAudioTags > 0, ...props, ref: ref, onError: onError, onDuration: onDuration, 
        // Proposal: Make this default to true in v5
        pauseWhenBuffering: pauseWhenBuffering !== null && pauseWhenBuffering !== void 0 ? pauseWhenBuffering : false, _remotionInternalNeedsDurationCalculation: Boolean(loop), showInTimeline: showInTimeline !== null && showInTimeline !== void 0 ? showInTimeline : true }));
};
/**
 * @description With this component, you can add audio to your video. All audio formats which are supported by Chromium are supported by the component.
 * @see [Documentation](https://www.remotion.dev/docs/audio)
 */
exports.Audio = (0, react_1.forwardRef)(AudioRefForwardingFunction);
(0, enable_sequence_stack_traces_js_1.addSequenceStackTraces)(exports.Audio);


/***/ }),

/***/ 3123:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioForPreview = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const SequenceContext_js_1 = __webpack_require__(3981);
const SequenceManager_js_1 = __webpack_require__(6109);
const prefetch_js_1 = __webpack_require__(8470);
const random_js_1 = __webpack_require__(8910);
const use_media_in_timeline_js_1 = __webpack_require__(5139);
const use_media_playback_js_1 = __webpack_require__(7649);
const use_media_tag_volume_js_1 = __webpack_require__(8865);
const use_sync_volume_with_media_tag_js_1 = __webpack_require__(9752);
const volume_position_state_js_1 = __webpack_require__(607);
const volume_prop_js_1 = __webpack_require__(3641);
const shared_audio_tags_js_1 = __webpack_require__(4368);
const use_audio_frame_js_1 = __webpack_require__(1976);
const AudioForDevelopmentForwardRefFunction = (props, ref) => {
    var _a;
    const [initialShouldPreMountAudioElements] = (0, react_1.useState)(props.shouldPreMountAudioTags);
    if (props.shouldPreMountAudioTags !== initialShouldPreMountAudioElements) {
        throw new Error('Cannot change the behavior for pre-mounting audio tags dynamically.');
    }
    const { volume, muted, playbackRate, shouldPreMountAudioTags, src, onDuration, acceptableTimeShiftInSeconds, _remotionInternalNeedsDurationCalculation, _remotionInternalNativeLoopPassed, _remotionInternalStack, _remotionDebugSeeking, allowAmplificationDuringRender, name, pauseWhenBuffering, showInTimeline, loopVolumeCurveBehavior, stack, ...nativeProps } = props;
    const [mediaVolume] = (0, volume_position_state_js_1.useMediaVolumeState)();
    const [mediaMuted] = (0, volume_position_state_js_1.useMediaMutedState)();
    const volumePropFrame = (0, use_audio_frame_js_1.useFrameForVolumeProp)(loopVolumeCurveBehavior !== null && loopVolumeCurveBehavior !== void 0 ? loopVolumeCurveBehavior : 'repeat');
    const { hidden } = (0, react_1.useContext)(SequenceManager_js_1.SequenceVisibilityToggleContext);
    if (!src) {
        throw new TypeError("No 'src' was passed to <Audio>.");
    }
    const preloadedSrc = (0, prefetch_js_1.usePreload)(src);
    const sequenceContext = (0, react_1.useContext)(SequenceContext_js_1.SequenceContext);
    const [timelineId] = (0, react_1.useState)(() => String(Math.random()));
    const isSequenceHidden = (_a = hidden[timelineId]) !== null && _a !== void 0 ? _a : false;
    const userPreferredVolume = (0, volume_prop_js_1.evaluateVolume)({
        frame: volumePropFrame,
        volume,
        mediaVolume,
        allowAmplificationDuringRender: false,
    });
    const propsToPass = (0, react_1.useMemo)(() => {
        return {
            muted: muted || mediaMuted || isSequenceHidden || userPreferredVolume <= 0,
            src: preloadedSrc,
            loop: _remotionInternalNativeLoopPassed,
            ...nativeProps,
        };
    }, [
        _remotionInternalNativeLoopPassed,
        isSequenceHidden,
        mediaMuted,
        muted,
        nativeProps,
        preloadedSrc,
        userPreferredVolume,
    ]);
    // Generate a string that's as unique as possible for this asset
    // but at the same time deterministic. We use it to combat strict mode issues.
    const id = (0, react_1.useMemo)(() => `audio-${(0, random_js_1.random)(src !== null && src !== void 0 ? src : '')}-${sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom}-${sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.cumulatedFrom}-${sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.durationInFrames}-muted:${props.muted}-loop:${props.loop}`, [
        src,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.cumulatedFrom,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.durationInFrames,
        props.muted,
        props.loop,
    ]);
    const audioRef = (0, shared_audio_tags_js_1.useSharedAudio)(propsToPass, id).el;
    const actualVolume = (0, use_media_tag_volume_js_1.useMediaTagVolume)(audioRef);
    (0, use_sync_volume_with_media_tag_js_1.useSyncVolumeWithMediaTag)({
        volumePropFrame,
        actualVolume,
        volume,
        mediaVolume,
        mediaRef: audioRef,
    });
    (0, use_media_in_timeline_js_1.useMediaInTimeline)({
        volume,
        mediaVolume,
        mediaRef: audioRef,
        src,
        mediaType: 'audio',
        playbackRate: playbackRate !== null && playbackRate !== void 0 ? playbackRate : 1,
        displayName: name !== null && name !== void 0 ? name : null,
        id: timelineId,
        stack: _remotionInternalStack,
        showInTimeline,
        premountDisplay: null,
        onAutoPlayError: null,
    });
    (0, use_media_playback_js_1.useMediaPlayback)({
        mediaRef: audioRef,
        src,
        mediaType: 'audio',
        playbackRate: playbackRate !== null && playbackRate !== void 0 ? playbackRate : 1,
        onlyWarnForMediaSeekingError: false,
        acceptableTimeshift: acceptableTimeShiftInSeconds !== null && acceptableTimeShiftInSeconds !== void 0 ? acceptableTimeShiftInSeconds : use_media_playback_js_1.DEFAULT_ACCEPTABLE_TIMESHIFT,
        isPremounting: Boolean(sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.premounting),
        pauseWhenBuffering,
        debugSeeking: _remotionDebugSeeking,
        onAutoPlayError: null,
    });
    (0, react_1.useImperativeHandle)(ref, () => {
        return audioRef.current;
    }, [audioRef]);
    const currentOnDurationCallback = (0, react_1.useRef)();
    currentOnDurationCallback.current = onDuration;
    (0, react_1.useEffect)(() => {
        var _a;
        const { current } = audioRef;
        if (!current) {
            return;
        }
        if (current.duration) {
            (_a = currentOnDurationCallback.current) === null || _a === void 0 ? void 0 : _a.call(currentOnDurationCallback, current.src, current.duration);
            return;
        }
        const onLoadedMetadata = () => {
            var _a;
            (_a = currentOnDurationCallback.current) === null || _a === void 0 ? void 0 : _a.call(currentOnDurationCallback, current.src, current.duration);
        };
        current.addEventListener('loadedmetadata', onLoadedMetadata);
        return () => {
            current.removeEventListener('loadedmetadata', onLoadedMetadata);
        };
    }, [audioRef, src]);
    if (initialShouldPreMountAudioElements) {
        return null;
    }
    return (0, jsx_runtime_1.jsx)("audio", { ref: audioRef, preload: "metadata", ...propsToPass });
};
exports.AudioForPreview = (0, react_1.forwardRef)(AudioForDevelopmentForwardRefFunction);


/***/ }),

/***/ 2879:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioForRendering = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const RenderAssetManager_js_1 = __webpack_require__(9634);
const SequenceContext_js_1 = __webpack_require__(3981);
const absolute_src_js_1 = __webpack_require__(9935);
const delay_render_js_1 = __webpack_require__(7687);
const random_js_1 = __webpack_require__(8910);
const timeline_position_state_js_1 = __webpack_require__(5488);
const use_current_frame_js_1 = __webpack_require__(6606);
const volume_prop_js_1 = __webpack_require__(3641);
const use_audio_frame_js_1 = __webpack_require__(1976);
const AudioForRenderingRefForwardingFunction = (props, ref) => {
    const audioRef = (0, react_1.useRef)(null);
    const { volume: volumeProp, playbackRate, allowAmplificationDuringRender, onDuration, toneFrequency, _remotionInternalNeedsDurationCalculation, _remotionInternalNativeLoopPassed, acceptableTimeShiftInSeconds, name, onError, delayRenderRetries, delayRenderTimeoutInMilliseconds, loopVolumeCurveBehavior, pauseWhenBuffering, ...nativeProps } = props;
    const absoluteFrame = (0, timeline_position_state_js_1.useTimelinePosition)();
    const volumePropFrame = (0, use_audio_frame_js_1.useFrameForVolumeProp)(loopVolumeCurveBehavior !== null && loopVolumeCurveBehavior !== void 0 ? loopVolumeCurveBehavior : 'repeat');
    const frame = (0, use_current_frame_js_1.useCurrentFrame)();
    const sequenceContext = (0, react_1.useContext)(SequenceContext_js_1.SequenceContext);
    const { registerRenderAsset, unregisterRenderAsset } = (0, react_1.useContext)(RenderAssetManager_js_1.RenderAssetManager);
    // Generate a string that's as unique as possible for this asset
    // but at the same time the same on all threads
    const id = (0, react_1.useMemo)(() => {
        var _a;
        return `audio-${(0, random_js_1.random)((_a = props.src) !== null && _a !== void 0 ? _a : '')}-${sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom}-${sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.cumulatedFrom}-${sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.durationInFrames}`;
    }, [
        props.src,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.cumulatedFrom,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.durationInFrames,
    ]);
    const volume = (0, volume_prop_js_1.evaluateVolume)({
        volume: volumeProp,
        frame: volumePropFrame,
        mediaVolume: 1,
        allowAmplificationDuringRender: allowAmplificationDuringRender !== null && allowAmplificationDuringRender !== void 0 ? allowAmplificationDuringRender : false,
    });
    (0, react_1.useImperativeHandle)(ref, () => {
        return audioRef.current;
    }, []);
    (0, react_1.useEffect)(() => {
        var _a, _b;
        if (!props.src) {
            throw new Error('No src passed');
        }
        if (!window.remotion_audioEnabled) {
            return;
        }
        if (props.muted) {
            return;
        }
        if (volume <= 0) {
            return;
        }
        registerRenderAsset({
            type: 'audio',
            src: (0, absolute_src_js_1.getAbsoluteSrc)(props.src),
            id,
            frame: absoluteFrame,
            volume,
            mediaFrame: frame,
            playbackRate: (_a = props.playbackRate) !== null && _a !== void 0 ? _a : 1,
            allowAmplificationDuringRender: allowAmplificationDuringRender !== null && allowAmplificationDuringRender !== void 0 ? allowAmplificationDuringRender : false,
            toneFrequency: toneFrequency !== null && toneFrequency !== void 0 ? toneFrequency : null,
            audioStartFrame: Math.max(0, -((_b = sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom) !== null && _b !== void 0 ? _b : 0)),
        });
        return () => unregisterRenderAsset(id);
    }, [
        props.muted,
        props.src,
        registerRenderAsset,
        absoluteFrame,
        id,
        unregisterRenderAsset,
        volume,
        volumePropFrame,
        frame,
        playbackRate,
        props.playbackRate,
        allowAmplificationDuringRender,
        toneFrequency,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom,
    ]);
    const { src } = props;
    // The <audio> tag is only rendered if the duration needs to be calculated for the `loop`
    // attribute to work, or if the user assigns a ref to it.
    const needsToRenderAudioTag = ref || _remotionInternalNeedsDurationCalculation;
    // If audio source switches, make new handle
    (0, react_1.useLayoutEffect)(() => {
        var _a, _b;
        if (((_b = (_a = window.process) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.NODE_ENV) === 'test') {
            return;
        }
        if (!needsToRenderAudioTag) {
            return;
        }
        const newHandle = (0, delay_render_js_1.delayRender)('Loading <Audio> duration with src=' + src, {
            retries: delayRenderRetries !== null && delayRenderRetries !== void 0 ? delayRenderRetries : undefined,
            timeoutInMilliseconds: delayRenderTimeoutInMilliseconds !== null && delayRenderTimeoutInMilliseconds !== void 0 ? delayRenderTimeoutInMilliseconds : undefined,
        });
        const { current } = audioRef;
        const didLoad = () => {
            if (current === null || current === void 0 ? void 0 : current.duration) {
                onDuration(current.src, current.duration);
            }
            (0, delay_render_js_1.continueRender)(newHandle);
        };
        if (current === null || current === void 0 ? void 0 : current.duration) {
            onDuration(current.src, current.duration);
            (0, delay_render_js_1.continueRender)(newHandle);
        }
        else {
            current === null || current === void 0 ? void 0 : current.addEventListener('loadedmetadata', didLoad, { once: true });
        }
        // If tag gets unmounted, clear pending handles because video metadata is not going to load
        return () => {
            current === null || current === void 0 ? void 0 : current.removeEventListener('loadedmetadata', didLoad);
            (0, delay_render_js_1.continueRender)(newHandle);
        };
    }, [
        src,
        onDuration,
        needsToRenderAudioTag,
        delayRenderRetries,
        delayRenderTimeoutInMilliseconds,
    ]);
    if (!needsToRenderAudioTag) {
        return null;
    }
    return (0, jsx_runtime_1.jsx)("audio", { ref: audioRef, ...nativeProps });
};
exports.AudioForRendering = (0, react_1.forwardRef)(AudioForRenderingRefForwardingFunction);


/***/ }),

/***/ 428:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8750), exports);
__exportStar(__webpack_require__(4918), exports);


/***/ }),

/***/ 4918:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4368:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useSharedAudio = exports.SharedAudioContextProvider = exports.SharedAudioContext = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __importStar(__webpack_require__(758));
const play_and_handle_not_allowed_error_js_1 = __webpack_require__(7600);
const EMPTY_AUDIO = 'data:audio/mp3;base64,/+MYxAAJcAV8AAgAABn//////+/gQ5BAMA+D4Pg+BAQBAEAwD4Pg+D4EBAEAQDAPg++hYBH///hUFQVBUFREDQNHmf///////+MYxBUGkAGIMAAAAP/29Xt6lUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxDUAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
const compareProps = (obj1, obj2) => {
    const keysA = Object.keys(obj1).sort();
    const keysB = Object.keys(obj2).sort();
    if (keysA.length !== keysB.length) {
        return false;
    }
    for (let i = 0; i < keysA.length; i++) {
        // Not the same keys
        if (keysA[i] !== keysB[i]) {
            return false;
        }
        // Not the same values
        if (obj1[keysA[i]] !== obj2[keysB[i]]) {
            return false;
        }
    }
    return true;
};
const didPropChange = (key, newProp, prevProp) => {
    // /music.mp3 and http://localhost:3000/music.mp3 are the same
    if (key === 'src' &&
        !prevProp.startsWith('data:') &&
        !newProp.startsWith('data:')) {
        return (new URL(prevProp, window.origin).toString() !==
            new URL(newProp, window.origin).toString());
    }
    if (prevProp === newProp) {
        return false;
    }
    return true;
};
exports.SharedAudioContext = (0, react_1.createContext)(null);
const SharedAudioContextProvider = ({ children, numberOfAudioTags, component }) => {
    const audios = (0, react_1.useRef)([]);
    const [initialNumberOfAudioTags] = (0, react_1.useState)(numberOfAudioTags);
    if (numberOfAudioTags !== initialNumberOfAudioTags) {
        throw new Error('The number of shared audio tags has changed dynamically. Once you have set this property, you cannot change it afterwards.');
    }
    const refs = (0, react_1.useMemo)(() => {
        return new Array(numberOfAudioTags).fill(true).map(() => {
            return { id: Math.random(), ref: (0, react_1.createRef)() };
        });
    }, [numberOfAudioTags]);
    const takenAudios = (0, react_1.useRef)(new Array(numberOfAudioTags).fill(false));
    const rerenderAudios = (0, react_1.useCallback)(() => {
        refs.forEach(({ ref, id }) => {
            var _a;
            const data = (_a = audios.current) === null || _a === void 0 ? void 0 : _a.find((a) => a.id === id);
            const { current } = ref;
            if (!current) {
                // Whole player has been unmounted, the refs don't exist anymore.
                // It is not an error anymore though
                return;
            }
            if (data === undefined) {
                current.src = EMPTY_AUDIO;
                return;
            }
            if (!data) {
                throw new TypeError('Expected audio data to be there');
            }
            Object.keys(data.props).forEach((key) => {
                // @ts-expect-error
                if (didPropChange(key, data.props[key], current[key])) {
                    // @ts-expect-error
                    current[key] = data.props[key];
                }
            });
        });
    }, [refs]);
    const registerAudio = (0, react_1.useCallback)((aud, audioId) => {
        var _a, _b;
        const found = (_a = audios.current) === null || _a === void 0 ? void 0 : _a.find((a) => a.audioId === audioId);
        if (found) {
            return found;
        }
        const firstFreeAudio = takenAudios.current.findIndex((a) => a === false);
        if (firstFreeAudio === -1) {
            throw new Error(`Tried to simultaneously mount ${numberOfAudioTags + 1} <Audio /> tags at the same time. With the current settings, the maximum amount of <Audio /> tags is limited to ${numberOfAudioTags} at the same time. Remotion pre-mounts silent audio tags to help avoid browser autoplay restrictions. See https://remotion.dev/docs/player/autoplay#use-the-numberofsharedaudiotags-property for more information on how to increase this limit.`);
        }
        const { id, ref } = refs[firstFreeAudio];
        const cloned = [...takenAudios.current];
        cloned[firstFreeAudio] = id;
        takenAudios.current = cloned;
        const newElem = {
            props: aud,
            id,
            el: ref,
            audioId,
        };
        (_b = audios.current) === null || _b === void 0 ? void 0 : _b.push(newElem);
        rerenderAudios();
        return newElem;
    }, [numberOfAudioTags, refs, rerenderAudios]);
    const unregisterAudio = (0, react_1.useCallback)((id) => {
        var _a;
        const cloned = [...takenAudios.current];
        const index = refs.findIndex((r) => r.id === id);
        if (index === -1) {
            throw new TypeError('Error occured in ');
        }
        cloned[index] = false;
        takenAudios.current = cloned;
        audios.current = (_a = audios.current) === null || _a === void 0 ? void 0 : _a.filter((a) => a.id !== id);
        rerenderAudios();
    }, [refs, rerenderAudios]);
    const updateAudio = (0, react_1.useCallback)(({ aud, audioId, id, }) => {
        var _a;
        let changed = false;
        audios.current = (_a = audios.current) === null || _a === void 0 ? void 0 : _a.map((prevA) => {
            if (prevA.id === id) {
                const isTheSame = compareProps(aud, prevA.props);
                if (isTheSame) {
                    return prevA;
                }
                changed = true;
                return {
                    ...prevA,
                    props: aud,
                    audioId,
                };
            }
            return prevA;
        });
        if (changed) {
            rerenderAudios();
        }
    }, [rerenderAudios]);
    const playAllAudios = (0, react_1.useCallback)(() => {
        refs.forEach((ref) => {
            (0, play_and_handle_not_allowed_error_js_1.playAndHandleNotAllowedError)(ref.ref, 'audio', null);
        });
    }, [refs]);
    const value = (0, react_1.useMemo)(() => {
        return {
            registerAudio,
            unregisterAudio,
            updateAudio,
            playAllAudios,
            numberOfAudioTags,
        };
    }, [
        numberOfAudioTags,
        playAllAudios,
        registerAudio,
        unregisterAudio,
        updateAudio,
    ]);
    // Fixing a bug: In React, if a component is unmounted using useInsertionEffect, then
    // the cleanup function does sometimes not work properly. That is why when we
    // are changing the composition, we reset the audio state.
    // TODO: Possibly this does not save the problem completely, since the
    // if an audio tag that is inside a sequence will also not be removed
    // from the shared audios.
    const resetAudio = (0, react_1.useCallback)(() => {
        takenAudios.current = new Array(numberOfAudioTags).fill(false);
        audios.current = [];
        rerenderAudios();
    }, [numberOfAudioTags, rerenderAudios]);
    (0, react_1.useEffect)(() => {
        return () => {
            resetAudio();
        };
    }, [component, resetAudio]);
    return ((0, jsx_runtime_1.jsxs)(exports.SharedAudioContext.Provider, { value: value, children: [refs.map(({ id, ref }) => {
                return (
                // Without preload="metadata", iOS will seek the time internally
                // but not actually with sound. Adding `preload="metadata"` helps here.
                // https://discord.com/channels/809501355504959528/817306414069710848/1130519583367888906
                (0, jsx_runtime_1.jsx)("audio", { ref: ref, preload: "metadata", src: EMPTY_AUDIO }, id));
            }), children] }));
};
exports.SharedAudioContextProvider = SharedAudioContextProvider;
const useSharedAudio = (aud, audioId) => {
    var _a;
    const ctx = (0, react_1.useContext)(exports.SharedAudioContext);
    /**
     * We work around this in React 18 so an audio tag will only register itself once
     */
    const [elem] = (0, react_1.useState)(() => {
        if (ctx && ctx.numberOfAudioTags > 0) {
            return ctx.registerAudio(aud, audioId);
        }
        return {
            el: react_1.default.createRef(),
            id: Math.random(),
            props: aud,
            audioId,
        };
    });
    /**
     * Effects in React 18 fire twice, and we are looking for a way to only fire it once.
     * - useInsertionEffect only fires once. If it's available we are in React 18.
     * - useLayoutEffect only fires once in React 17.
     *
     * Need to import it from React to fix React 17 ESM support.
     */
    const effectToUse = (_a = react_1.default.useInsertionEffect) !== null && _a !== void 0 ? _a : react_1.default.useLayoutEffect;
    if (typeof document !== 'undefined') {
        effectToUse(() => {
            if (ctx && ctx.numberOfAudioTags > 0) {
                ctx.updateAudio({ id: elem.id, aud, audioId });
            }
        }, [aud, ctx, elem.id, audioId]);
        effectToUse(() => {
            return () => {
                if (ctx && ctx.numberOfAudioTags > 0) {
                    ctx.unregisterAudio(elem.id);
                }
            };
        }, [ctx, elem.id]);
    }
    return elem;
};
exports.useSharedAudio = useSharedAudio;


/***/ }),

/***/ 1976:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useFrameForVolumeProp = exports.useMediaStartsAt = void 0;
const react_1 = __webpack_require__(758);
const SequenceContext_js_1 = __webpack_require__(3981);
const index_js_1 = __webpack_require__(3760);
const use_current_frame_js_1 = __webpack_require__(6606);
const useMediaStartsAt = () => {
    var _a;
    const parentSequence = (0, react_1.useContext)(SequenceContext_js_1.SequenceContext);
    const startsAt = Math.min(0, (_a = parentSequence === null || parentSequence === void 0 ? void 0 : parentSequence.relativeFrom) !== null && _a !== void 0 ? _a : 0);
    return startsAt;
};
exports.useMediaStartsAt = useMediaStartsAt;
/**
 * When passing a function as the prop for `volume`,
 * we calculate the way more intuitive value for currentFrame
 */
const useFrameForVolumeProp = (behavior) => {
    const loop = index_js_1.Loop.useLoop();
    const frame = (0, use_current_frame_js_1.useCurrentFrame)();
    const startsAt = (0, exports.useMediaStartsAt)();
    if (behavior === 'repeat' || loop === null) {
        return frame + startsAt;
    }
    return frame + startsAt + loop.durationInFrames * loop.iteration;
};
exports.useFrameForVolumeProp = useFrameForVolumeProp;


/***/ }),

/***/ 198:
/***/ ((__unused_webpack_module, exports) => {


// Taken from https://github.com/facebook/react-native/blob/0b9ea60b4fee8cacc36e7160e31b91fc114dbc0d/Libraries/Animated/src/bezier.js
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bezier = void 0;
const NEWTON_ITERATIONS = 4;
const NEWTON_MIN_SLOPE = 0.001;
const SUBDIVISION_PRECISION = 0.0000001;
const SUBDIVISION_MAX_ITERATIONS = 10;
const kSplineTableSize = 11;
const kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
const float32ArraySupported = typeof Float32Array === 'function';
function a(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}
function b(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1;
}
function c(aA1) {
    return 3.0 * aA1;
}
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT, aA1, aA2) {
    return ((a(aA1, aA2) * aT + b(aA1, aA2)) * aT + c(aA1)) * aT;
}
// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT, aA1, aA2) {
    return 3.0 * a(aA1, aA2) * aT * aT + 2.0 * b(aA1, aA2) * aT + c(aA1);
}
function binarySubdivide({ aX, _aA, _aB, mX1, mX2, }) {
    let currentX;
    let currentT;
    let i = 0;
    let aA = _aA;
    let aB = _aB;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        }
        else {
            aA = currentT;
        }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION &&
        ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
}
function newtonRaphsonIterate(aX, _aGuessT, mX1, mX2) {
    let aGuessT = _aGuessT;
    for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
        const currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
function bezier(mX1, mY1, mX2, mY2) {
    if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) {
        throw new Error('bezier x values must be in [0, 1] range');
    }
    // Precompute samples table
    const sampleValues = float32ArraySupported
        ? new Float32Array(kSplineTableSize)
        : new Array(kSplineTableSize);
    if (mX1 !== mY1 || mX2 !== mY2) {
        for (let i = 0; i < kSplineTableSize; ++i) {
            sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
    }
    function getTForX(aX) {
        let intervalStart = 0.0;
        let currentSample = 1;
        const lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        // Interpolate to provide an initial guess for t
        const dist = (aX - sampleValues[currentSample]) /
            (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        const guessForT = intervalStart + dist * kSampleStepSize;
        const initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        }
        if (initialSlope === 0.0) {
            return guessForT;
        }
        return binarySubdivide({
            aX,
            _aA: intervalStart,
            _aB: intervalStart + kSampleStepSize,
            mX1,
            mX2,
        });
    }
    return function (x) {
        if (mX1 === mY1 && mX2 === mY2) {
            return x; // linear
        }
        // Because JavaScript number are imprecise, we should guarantee the extremes are right.
        if (x === 0) {
            return 0;
        }
        if (x === 1) {
            return 1;
        }
        return calcBezier(getTForX(x), mY1, mY2);
    };
}
exports.bezier = bezier;


/***/ }),

/***/ 9797:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useBufferUntilFirstFrame = void 0;
const react_1 = __webpack_require__(758);
const use_buffer_state_1 = __webpack_require__(8561);
const useBufferUntilFirstFrame = ({ mediaRef, mediaType, onVariableFpsVideoDetected, pauseWhenBuffering, }) => {
    const bufferingRef = (0, react_1.useRef)(false);
    const { delayPlayback } = (0, use_buffer_state_1.useBufferState)();
    const bufferUntilFirstFrame = (0, react_1.useCallback)((requestedTime) => {
        if (mediaType !== 'video') {
            return;
        }
        if (!pauseWhenBuffering) {
            return;
        }
        const current = mediaRef.current;
        if (!current) {
            return;
        }
        if (!current.requestVideoFrameCallback) {
            return;
        }
        bufferingRef.current = true;
        const playback = delayPlayback();
        const unblock = () => {
            playback.unblock();
            current.removeEventListener('ended', unblock, {
                // @ts-expect-error
                once: true,
            });
            current.removeEventListener('pause', unblock, {
                // @ts-expect-error
                once: true,
            });
            bufferingRef.current = false;
        };
        const onEndedOrPause = () => {
            unblock();
        };
        current.requestVideoFrameCallback((_, info) => {
            const differenceFromRequested = Math.abs(info.mediaTime - requestedTime);
            if (differenceFromRequested > 0.5) {
                onVariableFpsVideoDetected();
            }
            // Safari often seeks and then stalls.
            // This makes sure that the video actually starts playing.
            current.requestVideoFrameCallback(() => {
                unblock();
            });
        });
        current.addEventListener('ended', onEndedOrPause, { once: true });
        current.addEventListener('pause', onEndedOrPause, { once: true });
    }, [
        delayPlayback,
        mediaRef,
        mediaType,
        onVariableFpsVideoDetected,
        pauseWhenBuffering,
    ]);
    return (0, react_1.useMemo)(() => {
        return {
            isBuffering: () => bufferingRef.current,
            bufferUntilFirstFrame,
        };
    }, [bufferUntilFirstFrame]);
};
exports.useBufferUntilFirstFrame = useBufferUntilFirstFrame;


/***/ }),

/***/ 9211:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BufferingProvider = exports.BufferingContextReact = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __importStar(__webpack_require__(758));
const useBufferManager = () => {
    const [blocks, setBlocks] = (0, react_1.useState)([]);
    const [onBufferingCallbacks, setOnBufferingCallbacks] = (0, react_1.useState)([]);
    const [onResumeCallbacks, setOnResumeCallbacks] = (0, react_1.useState)([]);
    const buffering = (0, react_1.useRef)(false);
    const addBlock = (0, react_1.useCallback)((block) => {
        setBlocks((b) => [...b, block]);
        return {
            unblock: () => {
                setBlocks((b) => {
                    const newArr = b.filter((bx) => bx !== block);
                    if (newArr.length === b.length) {
                        return b;
                    }
                    return newArr;
                });
            },
        };
    }, []);
    const listenForBuffering = (0, react_1.useCallback)((callback) => {
        setOnBufferingCallbacks((c) => [...c, callback]);
        return {
            remove: () => {
                setOnBufferingCallbacks((c) => c.filter((cb) => cb !== callback));
            },
        };
    }, []);
    const listenForResume = (0, react_1.useCallback)((callback) => {
        setOnResumeCallbacks((c) => [...c, callback]);
        return {
            remove: () => {
                setOnResumeCallbacks((c) => c.filter((cb) => cb !== callback));
            },
        };
    }, []);
    (0, react_1.useEffect)(() => {
        if (blocks.length > 0) {
            onBufferingCallbacks.forEach((c) => c());
        }
        // Intentionally only firing when blocks change, not the callbacks
        // otherwise a buffering callback might remove itself after being called
        // and trigger again
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blocks]);
    (0, react_1.useEffect)(() => {
        if (blocks.length === 0) {
            onResumeCallbacks.forEach((c) => c());
        }
        // Intentionally only firing when blocks change, not the callbacks
        // otherwise a resume callback might remove itself after being called
        // and trigger again
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blocks]);
    return (0, react_1.useMemo)(() => {
        return { addBlock, listenForBuffering, listenForResume, buffering };
    }, [addBlock, buffering, listenForBuffering, listenForResume]);
};
exports.BufferingContextReact = react_1.default.createContext(null);
const BufferingProvider = ({ children }) => {
    const bufferManager = useBufferManager();
    return ((0, jsx_runtime_1.jsx)(exports.BufferingContextReact.Provider, { value: bufferManager, children: children }));
};
exports.BufferingProvider = BufferingProvider;


/***/ }),

/***/ 4072:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateLoopDuration = void 0;
const calculateLoopDuration = ({ endAt, mediaDuration, playbackRate, startFrom, }) => {
    let duration = mediaDuration;
    // Account for endAt
    if (typeof endAt !== 'undefined') {
        duration = endAt;
    }
    // Account for startFrom
    if (typeof startFrom !== 'undefined') {
        duration -= startFrom;
    }
    const actualDuration = duration / playbackRate;
    return Math.floor(actualDuration);
};
exports.calculateLoopDuration = calculateLoopDuration;


/***/ }),

/***/ 4744:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cancelRender = void 0;
const isErrorLike = (err) => {
    if (err instanceof Error) {
        return true;
    }
    if (err === null) {
        return false;
    }
    if (typeof err !== 'object') {
        return false;
    }
    if (!('stack' in err)) {
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
    // @ts-ignore we just asserted
    if (typeof err.stack !== 'string') {
        return false;
    }
    if (!('message' in err)) {
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
    // @ts-ignore we just asserted
    if (typeof err.message !== 'string') {
        return false;
    }
    return true;
};
/**
 * @description When you invoke this function, Remotion will stop rendering all the frames without any retries
 * @see [Documentation](https://www.remotion.dev/docs/cancel-render)
 */
function cancelRender(err) {
    let error;
    if (isErrorLike(err)) {
        error = err;
        if (!error.stack) {
            error.stack = new Error(error.message).stack;
        }
    }
    else if (typeof err === 'string') {
        error = Error(err);
    }
    else {
        error = Error('Rendering was cancelled');
    }
    window.remotion_cancelledError = error.stack;
    throw error;
}
exports.cancelRender = cancelRender;


/***/ }),

/***/ 4491:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_CODEC = exports.validCodecs = void 0;
exports.validCodecs = [
    'h264',
    'h265',
    'vp8',
    'vp9',
    'mp3',
    'aac',
    'wav',
    'prores',
    'h264-mkv',
    'h264-ts',
    'gif',
];
exports.DEFAULT_CODEC = 'h264';


/***/ }),

/***/ 7955:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getInputProps = void 0;
const get_remotion_environment_js_1 = __webpack_require__(2161);
const input_props_serialization_js_1 = __webpack_require__(1747);
let didWarnSSRImport = false;
const warnOnceSSRImport = () => {
    if (didWarnSSRImport) {
        return;
    }
    didWarnSSRImport = true;
    // eslint-disable-next-line no-console
    console.warn('Called `getInputProps()` on the server. This function is not available server-side and has returned an empty object.');
    // eslint-disable-next-line no-console
    console.warn("To hide this warning, don't call this function on the server:");
    // eslint-disable-next-line no-console
    console.warn("  typeof window === 'undefined' ? {} : getInputProps()");
};
const getInputProps = () => {
    if (typeof window === 'undefined') {
        warnOnceSSRImport();
        return {};
    }
    if ((0, get_remotion_environment_js_1.getRemotionEnvironment)().isPlayer) {
        throw new Error('You cannot call `getInputProps()` from a <Player>. Instead, the props are available as React props from component that you passed as `component` prop.');
    }
    const param = window.remotion_inputProps;
    if (!param) {
        return {};
    }
    const parsed = (0, input_props_serialization_js_1.deserializeJSONWithCustomFields)(param);
    return parsed;
};
exports.getInputProps = getInputProps;


/***/ }),

/***/ 3798:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeDefaultPreviewCSS = exports.OFFTHREAD_VIDEO_CLASS_NAME = exports.injectCSS = void 0;
const injected = {};
const injectCSS = (css) => {
    // Skip in node
    if (typeof document === 'undefined') {
        return;
    }
    if (injected[css]) {
        return;
    }
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    head.prepend(style);
    injected[css] = true;
};
exports.injectCSS = injectCSS;
exports.OFFTHREAD_VIDEO_CLASS_NAME = '__remotion_offthreadvideo';
const makeDefaultPreviewCSS = (scope, backgroundColor) => {
    if (!scope) {
        return `
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
	    background-color: ${backgroundColor};
    }
    .${exports.OFFTHREAD_VIDEO_CLASS_NAME} {
      object-fit: contain;
    }
    `;
    }
    return `
    ${scope} * {
      box-sizing: border-box;
    }
    ${scope} *:-webkit-full-screen {
      width: 100%;
      height: 100%;
    }
    ${scope} .${exports.OFFTHREAD_VIDEO_CLASS_NAME} {
      object-fit: contain;
    }
  `;
};
exports.makeDefaultPreviewCSS = makeDefaultPreviewCSS;


/***/ }),

/***/ 7687:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.continueRender = exports.delayRender = exports.DELAY_RENDER_RETRY_TOKEN = exports.DELAY_RENDER_RETRIES_LEFT = exports.DELAY_RENDER_CALLSTACK_TOKEN = void 0;
const cancel_render_js_1 = __webpack_require__(4744);
const get_remotion_environment_js_1 = __webpack_require__(2161);
const truthy_js_1 = __webpack_require__(9609);
if (typeof window !== 'undefined') {
    window.remotion_renderReady = false;
}
let handles = [];
if (typeof window !== 'undefined') {
    window.remotion_delayRenderTimeouts = {};
}
exports.DELAY_RENDER_CALLSTACK_TOKEN = 'The delayRender was called:';
exports.DELAY_RENDER_RETRIES_LEFT = 'Retries left: ';
exports.DELAY_RENDER_RETRY_TOKEN = '- Rendering the frame will be retried.';
const defaultTimeout = 30000;
/**
 * @description Call this function to tell Remotion to wait before capturing this frame until data has loaded. Use continueRender() to unblock the render.
 * @param label _optional_ A label to identify the call in case it does time out.
 * @returns {number} An identifier to be passed to continueRender().
 * @see [Documentation](https://www.remotion.dev/docs/delay-render)
 */
const delayRender = (label, options) => {
    var _a, _b, _c, _d, _e;
    if (typeof label !== 'string' && typeof label !== 'undefined') {
        throw new Error('The label parameter of delayRender() must be a string or undefined, got: ' +
            JSON.stringify(label));
    }
    const handle = Math.random();
    handles.push(handle);
    const called = (_b = (_a = Error().stack) === null || _a === void 0 ? void 0 : _a.replace(/^Error/g, '')) !== null && _b !== void 0 ? _b : '';
    if ((0, get_remotion_environment_js_1.getRemotionEnvironment)().isRendering) {
        const timeoutToUse = ((_c = options === null || options === void 0 ? void 0 : options.timeoutInMilliseconds) !== null && _c !== void 0 ? _c : (typeof window === 'undefined'
            ? defaultTimeout
            : (_d = window.remotion_puppeteerTimeout) !== null && _d !== void 0 ? _d : defaultTimeout)) - 2000;
        if (typeof window !== 'undefined') {
            const retriesLeft = ((_e = options === null || options === void 0 ? void 0 : options.retries) !== null && _e !== void 0 ? _e : 0) - (window.remotion_attempt - 1);
            window.remotion_delayRenderTimeouts[handle] = {
                label: label !== null && label !== void 0 ? label : null,
                timeout: setTimeout(() => {
                    const message = [
                        `A delayRender()`,
                        label ? `"${label}"` : null,
                        `was called but not cleared after ${timeoutToUse}ms. See https://remotion.dev/docs/timeout for help.`,
                        retriesLeft > 0 ? exports.DELAY_RENDER_RETRIES_LEFT + retriesLeft : null,
                        retriesLeft > 0 ? exports.DELAY_RENDER_RETRY_TOKEN : null,
                        exports.DELAY_RENDER_CALLSTACK_TOKEN,
                        called,
                    ]
                        .filter(truthy_js_1.truthy)
                        .join(' ');
                    (0, cancel_render_js_1.cancelRender)(Error(message));
                }, timeoutToUse),
            };
        }
    }
    if (typeof window !== 'undefined') {
        window.remotion_renderReady = false;
    }
    return handle;
};
exports.delayRender = delayRender;
/**
 * @description Unblock a render that has been blocked by delayRender()
 * @param handle The return value of delayRender().
 * @see [Documentation](https://www.remotion.dev/docs/continue-render)
 */
const continueRender = (handle) => {
    if (typeof handle === 'undefined') {
        throw new TypeError('The continueRender() method must be called with a parameter that is the return value of delayRender(). No value was passed.');
    }
    if (typeof handle !== 'number') {
        throw new TypeError('The parameter passed into continueRender() must be the return value of delayRender() which is a number. Got: ' +
            JSON.stringify(handle));
    }
    handles = handles.filter((h) => {
        if (h === handle) {
            if ((0, get_remotion_environment_js_1.getRemotionEnvironment)().isRendering) {
                clearTimeout(window.remotion_delayRenderTimeouts[handle].timeout);
                delete window.remotion_delayRenderTimeouts[handle];
            }
            return false;
        }
        return true;
    });
    if (handles.length === 0 && typeof window !== 'undefined') {
        window.remotion_renderReady = true;
    }
};
exports.continueRender = continueRender;


/***/ }),

/***/ 320:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Taken from https://github.com/facebook/react-native/blob/0b9ea60b4fee8cacc36e7160e31b91fc114dbc0d/Libraries/Animated/src/Easing.js
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Easing = void 0;
const bezier_js_1 = __webpack_require__(198);
/**
 * @description The Easing module implements common easing functions. You can use it with the interpolate() API.
 * @see [Documentation](https://www.remotion.dev/docs/easing)
 */
class Easing {
    static step0(n) {
        return n > 0 ? 1 : 0;
    }
    static step1(n) {
        return n >= 1 ? 1 : 0;
    }
    static linear(t) {
        return t;
    }
    static ease(t) {
        return Easing.bezier(0.42, 0, 1, 1)(t);
    }
    static quad(t) {
        return t * t;
    }
    static cubic(t) {
        return t * t * t;
    }
    static poly(n) {
        return (t) => t ** n;
    }
    static sin(t) {
        return 1 - Math.cos((t * Math.PI) / 2);
    }
    static circle(t) {
        return 1 - Math.sqrt(1 - t * t);
    }
    static exp(t) {
        return 2 ** (10 * (t - 1));
    }
    static elastic(bounciness = 1) {
        const p = bounciness * Math.PI;
        return (t) => 1 - Math.cos((t * Math.PI) / 2) ** 3 * Math.cos(t * p);
    }
    static back(s = 1.70158) {
        return (t) => t * t * ((s + 1) * t - s);
    }
    static bounce(t) {
        if (t < 1 / 2.75) {
            return 7.5625 * t * t;
        }
        if (t < 2 / 2.75) {
            const t2_ = t - 1.5 / 2.75;
            return 7.5625 * t2_ * t2_ + 0.75;
        }
        if (t < 2.5 / 2.75) {
            const t2_ = t - 2.25 / 2.75;
            return 7.5625 * t2_ * t2_ + 0.9375;
        }
        const t2 = t - 2.625 / 2.75;
        return 7.5625 * t2 * t2 + 0.984375;
    }
    static bezier(x1, y1, x2, y2) {
        return (0, bezier_js_1.bezier)(x1, y1, x2, y2);
    }
    static in(easing) {
        return easing;
    }
    static out(easing) {
        return (t) => 1 - easing(1 - t);
    }
    static inOut(easing) {
        return (t) => {
            if (t < 0.5) {
                return easing(t * 2) / 2;
            }
            return 1 - easing((1 - t) * 2) / 2;
        };
    }
}
exports.Easing = Easing;


/***/ }),

/***/ 3770:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addSequenceStackTraces = exports.enableSequenceStackTraces = void 0;
const react_1 = __importDefault(__webpack_require__(758));
const get_remotion_environment_1 = __webpack_require__(2161);
const originalCreateElement = react_1.default.createElement;
const componentsToAddStacksTo = [];
// Gets called when a new component is added,
// also when the Studio is mounted
const enableSequenceStackTraces = () => {
    if (!(0, get_remotion_environment_1.getRemotionEnvironment)().isStudio) {
        return;
    }
    const proxy = new Proxy(originalCreateElement, {
        apply(target, thisArg, argArray) {
            if (componentsToAddStacksTo.includes(argArray[0])) {
                const [first, props, ...rest] = argArray;
                const newProps = {
                    ...(props !== null && props !== void 0 ? props : {}),
                    stack: new Error().stack,
                };
                return Reflect.apply(target, thisArg, [first, newProps, ...rest]);
            }
            return Reflect.apply(target, thisArg, argArray);
        },
    });
    react_1.default.createElement = proxy;
};
exports.enableSequenceStackTraces = enableSequenceStackTraces;
const addSequenceStackTraces = (component) => {
    componentsToAddStacksTo.push(component);
    (0, exports.enableSequenceStackTraces)();
};
exports.addSequenceStackTraces = addSequenceStackTraces;


/***/ }),

/***/ 7314:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Freeze = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const SequenceContext_js_1 = __webpack_require__(3981);
const timeline_position_state_js_1 = __webpack_require__(5488);
const use_current_frame_js_1 = __webpack_require__(6606);
const use_video_config_js_1 = __webpack_require__(3299);
/**
 * @description This method freezes all of its children to the frame that you specify as a prop
 * @see [Documentation](https://www.remotion.dev/docs/freeze)
 */
const Freeze = ({ frame: frameToFreeze, children, active = true, }) => {
    var _a;
    const frame = (0, use_current_frame_js_1.useCurrentFrame)();
    const videoConfig = (0, use_video_config_js_1.useVideoConfig)();
    if (typeof frameToFreeze === 'undefined') {
        throw new Error(`The <Freeze /> component requires a 'frame' prop, but none was passed.`);
    }
    if (typeof frameToFreeze !== 'number') {
        throw new Error(`The 'frame' prop of <Freeze /> must be a number, but is of type ${typeof frameToFreeze}`);
    }
    if (Number.isNaN(frameToFreeze)) {
        throw new Error(`The 'frame' prop of <Freeze /> must be a real number, but it is NaN.`);
    }
    if (!Number.isFinite(frameToFreeze)) {
        throw new Error(`The 'frame' prop of <Freeze /> must be a finite number, but it is ${frameToFreeze}.`);
    }
    const isActive = (0, react_1.useMemo)(() => {
        if (typeof active === 'boolean') {
            return active;
        }
        if (typeof active === 'function') {
            return active(frame);
        }
    }, [active, frame]);
    const timelineContext = (0, react_1.useContext)(timeline_position_state_js_1.TimelineContext);
    const sequenceContext = (0, react_1.useContext)(SequenceContext_js_1.SequenceContext);
    const relativeFrom = (_a = sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom) !== null && _a !== void 0 ? _a : 0;
    const timelineValue = (0, react_1.useMemo)(() => {
        if (!isActive) {
            return timelineContext;
        }
        return {
            ...timelineContext,
            playing: false,
            imperativePlaying: {
                current: false,
            },
            frame: {
                [videoConfig.id]: frameToFreeze + relativeFrom,
            },
        };
    }, [isActive, timelineContext, videoConfig.id, frameToFreeze, relativeFrom]);
    return ((0, jsx_runtime_1.jsx)(timeline_position_state_js_1.TimelineContext.Provider, { value: timelineValue, children: children }));
};
exports.Freeze = Freeze;


/***/ }),

/***/ 3883:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAssetDisplayName = void 0;
const getAssetDisplayName = (filename) => {
    if (/data:|blob:/.test(filename.substring(0, 5))) {
        return 'Data URL';
    }
    const splitted = filename
        .split('/')
        .map((s) => s.split('\\'))
        .flat(1);
    return splitted[splitted.length - 1];
};
exports.getAssetDisplayName = getAssetDisplayName;


/***/ }),

/***/ 8160:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPreviewDomElement = exports.REMOTION_STUDIO_CONTAINER_ELEMENT = void 0;
exports.REMOTION_STUDIO_CONTAINER_ELEMENT = '__remotion-studio-container';
const getPreviewDomElement = () => {
    return document.getElementById(exports.REMOTION_STUDIO_CONTAINER_ELEMENT);
};
exports.getPreviewDomElement = getPreviewDomElement;


/***/ }),

/***/ 2161:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRemotionEnvironment = void 0;
// Avoid VITE obfuscation
function getNodeEnvString() {
    return ['NOD', 'E_EN', 'V'].join('');
}
const getEnvString = () => {
    return ['e', 'nv'].join('');
};
/**
 * @description Provides information about the Remotion Environment
 * @see [Documentation](https://www.remotion.dev/docs/get-remotion-environment)
 */
const getRemotionEnvironment = () => {
    const isPlayer = typeof window !== 'undefined' && window.remotion_isPlayer;
    const isRendering = typeof window !== 'undefined' &&
        typeof window.process !== 'undefined' &&
        typeof window.process.env !== 'undefined' &&
        (window.process[getEnvString()][getNodeEnvString()] === 'test' ||
            (window.process[getEnvString()][getNodeEnvString()] === 'production' &&
                typeof window !== 'undefined' &&
                typeof window.remotion_puppeteerTimeout !== 'undefined'));
    const isStudio = typeof window !== 'undefined' && window.remotion_isStudio;
    return {
        isStudio,
        isRendering,
        isPlayer,
    };
};
exports.getRemotionEnvironment = getRemotionEnvironment;


/***/ }),

/***/ 1090:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getStaticFiles = void 0;
const v5_flag_1 = __webpack_require__(2635);
let warnedServer = false;
let warnedPlayer = false;
const warnServerOnce = () => {
    if (warnedServer) {
        return;
    }
    warnedServer = true;
    // eslint-disable-next-line no-console
    console.warn('Called getStaticFiles() on the server. The API is only available in the browser. An empty array was returned.');
};
const warnPlayerOnce = () => {
    if (warnedPlayer) {
        return;
    }
    warnedPlayer = true;
    // eslint-disable-next-line no-console
    console.warn('Called getStaticFiles() while using the Remotion Player. The API is only available while using the Remotion Studio. An empty array was returned.');
};
/**
 * @description The function array containing all files in the public/ folder. You can reference them by using staticFile().
 * @see [Documentation](https://www.remotion.dev/docs/getstaticfiles)
 */
const getStaticFiles = () => {
    if (v5_flag_1.ENABLE_V5_BREAKING_CHANGES) {
        throw new Error('getStaticFiles() has moved into the `@remotion/studio` package. Update your imports.');
    }
    if (typeof document === 'undefined') {
        warnServerOnce();
        return [];
    }
    if (window.remotion_isPlayer) {
        warnPlayerOnce();
        return [];
    }
    return window.remotion_staticFiles;
};
exports.getStaticFiles = getStaticFiles;


/***/ }),

/***/ 4337:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Config = exports.Experimental = exports.watchStaticFile = exports.useCurrentScale = exports.useCurrentFrame = exports.useBufferState = exports.staticFile = exports.Series = exports.Sequence = exports.registerRoot = exports.prefetch = exports.random = exports.interpolate = exports.Loop = exports.interpolateColors = exports.Img = exports.getStaticFiles = exports.getRemotionEnvironment = exports.delayRender = exports.continueRender = exports.getInputProps = exports.Composition = exports.cancelRender = exports.Artifact = void 0;
__webpack_require__(4303);
__webpack_require__(3961);
const Clipper_js_1 = __webpack_require__(3256);
const enable_sequence_stack_traces_js_1 = __webpack_require__(3770);
const is_player_js_1 = __webpack_require__(19);
const multiple_versions_warning_js_1 = __webpack_require__(7746);
const Null_js_1 = __webpack_require__(4920);
const Sequence_js_1 = __webpack_require__(8808);
(0, multiple_versions_warning_js_1.checkMultipleRemotionVersions)();
__exportStar(__webpack_require__(2909), exports);
var Artifact_js_1 = __webpack_require__(4239);
Object.defineProperty(exports, "Artifact", ({ enumerable: true, get: function () { return Artifact_js_1.Artifact; } }));
__exportStar(__webpack_require__(428), exports);
var cancel_render_js_1 = __webpack_require__(4744);
Object.defineProperty(exports, "cancelRender", ({ enumerable: true, get: function () { return cancel_render_js_1.cancelRender; } }));
var Composition_js_1 = __webpack_require__(8575);
Object.defineProperty(exports, "Composition", ({ enumerable: true, get: function () { return Composition_js_1.Composition; } }));
var input_props_js_1 = __webpack_require__(7955);
Object.defineProperty(exports, "getInputProps", ({ enumerable: true, get: function () { return input_props_js_1.getInputProps; } }));
var delay_render_js_1 = __webpack_require__(7687);
Object.defineProperty(exports, "continueRender", ({ enumerable: true, get: function () { return delay_render_js_1.continueRender; } }));
Object.defineProperty(exports, "delayRender", ({ enumerable: true, get: function () { return delay_render_js_1.delayRender; } }));
__exportStar(__webpack_require__(320), exports);
__exportStar(__webpack_require__(1365), exports);
__exportStar(__webpack_require__(7314), exports);
var get_remotion_environment_js_1 = __webpack_require__(2161);
Object.defineProperty(exports, "getRemotionEnvironment", ({ enumerable: true, get: function () { return get_remotion_environment_js_1.getRemotionEnvironment; } }));
var get_static_files_js_1 = __webpack_require__(1090);
Object.defineProperty(exports, "getStaticFiles", ({ enumerable: true, get: function () { return get_static_files_js_1.getStaticFiles; } }));
__exportStar(__webpack_require__(4301), exports);
var Img_js_1 = __webpack_require__(7066);
Object.defineProperty(exports, "Img", ({ enumerable: true, get: function () { return Img_js_1.Img; } }));
__exportStar(__webpack_require__(2875), exports);
var interpolate_colors_js_1 = __webpack_require__(4735);
Object.defineProperty(exports, "interpolateColors", ({ enumerable: true, get: function () { return interpolate_colors_js_1.interpolateColors; } }));
var index_js_1 = __webpack_require__(3760);
Object.defineProperty(exports, "Loop", ({ enumerable: true, get: function () { return index_js_1.Loop; } }));
var no_react_1 = __webpack_require__(2280);
Object.defineProperty(exports, "interpolate", ({ enumerable: true, get: function () { return no_react_1.interpolate; } }));
Object.defineProperty(exports, "random", ({ enumerable: true, get: function () { return no_react_1.random; } }));
var prefetch_js_1 = __webpack_require__(8470);
Object.defineProperty(exports, "prefetch", ({ enumerable: true, get: function () { return prefetch_js_1.prefetch; } }));
var register_root_js_1 = __webpack_require__(8281);
Object.defineProperty(exports, "registerRoot", ({ enumerable: true, get: function () { return register_root_js_1.registerRoot; } }));
var Sequence_js_2 = __webpack_require__(8808);
Object.defineProperty(exports, "Sequence", ({ enumerable: true, get: function () { return Sequence_js_2.Sequence; } }));
var index_js_2 = __webpack_require__(9911);
Object.defineProperty(exports, "Series", ({ enumerable: true, get: function () { return index_js_2.Series; } }));
__exportStar(__webpack_require__(5443), exports);
var static_file_js_1 = __webpack_require__(3162);
Object.defineProperty(exports, "staticFile", ({ enumerable: true, get: function () { return static_file_js_1.staticFile; } }));
__exportStar(__webpack_require__(3987), exports);
var use_buffer_state_1 = __webpack_require__(8561);
Object.defineProperty(exports, "useBufferState", ({ enumerable: true, get: function () { return use_buffer_state_1.useBufferState; } }));
var use_current_frame_js_1 = __webpack_require__(6606);
Object.defineProperty(exports, "useCurrentFrame", ({ enumerable: true, get: function () { return use_current_frame_js_1.useCurrentFrame; } }));
var use_current_scale_1 = __webpack_require__(5341);
Object.defineProperty(exports, "useCurrentScale", ({ enumerable: true, get: function () { return use_current_scale_1.useCurrentScale; } }));
__exportStar(__webpack_require__(3299), exports);
__exportStar(__webpack_require__(8449), exports);
__exportStar(__webpack_require__(6069), exports);
__exportStar(__webpack_require__(7737), exports);
var watch_static_file_js_1 = __webpack_require__(7824);
Object.defineProperty(exports, "watchStaticFile", ({ enumerable: true, get: function () { return watch_static_file_js_1.watchStaticFile; } }));
exports.Experimental = {
    /**
     * @description This is a special component that will cause Remotion to only partially capture the frame of the video.
     * @see [Documentation](https://www.remotion.dev/docs/clipper)
     */
    Clipper: Clipper_js_1.Clipper,
    /**
     * @description This is a special component, that, when rendered, will skip rendering the frame altogether.
     * @see [Documentation](https://www.remotion.dev/docs/null)
     */
    Null: Null_js_1.Null,
    useIsPlayer: is_player_js_1.useIsPlayer,
};
const proxyObj = {};
exports.Config = new Proxy(proxyObj, {
    get(_, prop) {
        if (prop === 'Bundling' ||
            prop === 'Rendering' ||
            prop === 'Log' ||
            prop === 'Puppeteer' ||
            prop === 'Output') {
            return exports.Config;
        }
        return () => {
            /* eslint-disable no-console */
            console.warn('⚠️  The CLI configuration has been extracted from Remotion Core.');
            console.warn('Update the import from the config file:');
            console.warn();
            console.warn('- Delete:');
            console.warn('import {Config} from "remotion";');
            console.warn('+ Replace:');
            console.warn('import {Config} from "@remotion/cli/config";');
            console.warn();
            console.warn('For more information, see https://www.remotion.dev/docs/4-0-migration.');
            /* eslint-enable no-console */
            process.exit(1);
        };
    },
});
(0, enable_sequence_stack_traces_js_1.addSequenceStackTraces)(Sequence_js_1.Sequence);


/***/ }),

/***/ 1747:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Must keep this file in sync with the one in packages/lambda/src/shared/serialize-props.ts!
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serializeThenDeserializeInStudio = exports.deserializeJSONWithCustomFields = exports.serializeJSONWithDate = exports.FILE_TOKEN = exports.DATE_TOKEN = void 0;
const get_remotion_environment_js_1 = __webpack_require__(2161);
const static_file_js_1 = __webpack_require__(3162);
exports.DATE_TOKEN = 'remotion-date:';
exports.FILE_TOKEN = 'remotion-file:';
const serializeJSONWithDate = ({ data, indent, staticBase, }) => {
    let customDateUsed = false;
    let customFileUsed = false;
    let mapUsed = false;
    let setUsed = false;
    try {
        const serializedString = JSON.stringify(data, function (key, value) {
            const item = this[key];
            if (item instanceof Date) {
                customDateUsed = true;
                return `${exports.DATE_TOKEN}${item.toISOString()}`;
            }
            if (item instanceof Map) {
                mapUsed = true;
                return value;
            }
            if (item instanceof Set) {
                setUsed = true;
                return value;
            }
            if (typeof item === 'string' &&
                staticBase !== null &&
                item.startsWith(staticBase)) {
                customFileUsed = true;
                return `${exports.FILE_TOKEN}${item.replace(staticBase + '/', '')}`;
            }
            return value;
        }, indent);
        return { serializedString, customDateUsed, customFileUsed, mapUsed, setUsed };
    }
    catch (err) {
        throw new Error('Could not serialize the passed input props to JSON: ' +
            err.message);
    }
};
exports.serializeJSONWithDate = serializeJSONWithDate;
const deserializeJSONWithCustomFields = (data) => {
    return JSON.parse(data, (_, value) => {
        if (typeof value === 'string' && value.startsWith(exports.DATE_TOKEN)) {
            return new Date(value.replace(exports.DATE_TOKEN, ''));
        }
        if (typeof value === 'string' && value.startsWith(exports.FILE_TOKEN)) {
            return (0, static_file_js_1.staticFile)(value.replace(exports.FILE_TOKEN, ''));
        }
        return value;
    });
};
exports.deserializeJSONWithCustomFields = deserializeJSONWithCustomFields;
const serializeThenDeserializeInStudio = (props) => {
    // Serializing once in the Studio, to catch potential serialization errors before
    // you only get them during rendering
    if ((0, get_remotion_environment_js_1.getRemotionEnvironment)().isStudio) {
        return (0, exports.deserializeJSONWithCustomFields)((0, exports.serializeJSONWithDate)({
            data: props,
            indent: 2,
            staticBase: window.remotion_staticBase,
        }).serializedString);
    }
    return props;
};
exports.serializeThenDeserializeInStudio = serializeThenDeserializeInStudio;


/***/ }),

/***/ 2875:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Internals = void 0;
const shared_audio_tags_js_1 = __webpack_require__(4368);
const use_audio_frame_js_1 = __webpack_require__(1976);
const buffering_js_1 = __webpack_require__(9211);
const CanUseRemotionHooks_js_1 = __webpack_require__(7803);
const Composition_js_1 = __webpack_require__(8575);
const CompositionManager_js_1 = __webpack_require__(7156);
const CompositionManagerContext_js_1 = __webpack_require__(809);
const CSSUtils = __importStar(__webpack_require__(3798));
const EditorProps_js_1 = __webpack_require__(8004);
const enable_sequence_stack_traces_js_1 = __webpack_require__(3770);
const get_preview_dom_element_js_1 = __webpack_require__(8160);
const get_remotion_environment_js_1 = __webpack_require__(2161);
const is_player_js_1 = __webpack_require__(19);
const NativeLayers_js_1 = __webpack_require__(596);
const nonce_js_1 = __webpack_require__(5574);
const portal_node_js_1 = __webpack_require__(4436);
const prefetch_state_js_1 = __webpack_require__(2926);
const prefetch_js_1 = __webpack_require__(8470);
const register_root_js_1 = __webpack_require__(8281);
const RemotionRoot_js_1 = __webpack_require__(9614);
const RenderAssetManager_js_1 = __webpack_require__(9634);
const resolve_video_config_js_1 = __webpack_require__(74);
const ResolveCompositionConfig_js_1 = __webpack_require__(6905);
const SequenceContext_js_1 = __webpack_require__(3981);
const SequenceManager_js_1 = __webpack_require__(6109);
const setup_env_variables_js_1 = __webpack_require__(918);
const TimelinePosition = __importStar(__webpack_require__(5488));
const timeline_position_state_js_1 = __webpack_require__(5488);
const truthy_js_1 = __webpack_require__(9609);
const use_current_scale_js_1 = __webpack_require__(5341);
const use_lazy_component_js_1 = __webpack_require__(3855);
const use_unsafe_video_config_js_1 = __webpack_require__(3782);
const use_video_js_1 = __webpack_require__(2768);
const validate_artifact_js_1 = __webpack_require__(6262);
const validate_composition_id_js_1 = __webpack_require__(6980);
const duration_state_js_1 = __webpack_require__(4461);
const video_fragment_js_1 = __webpack_require__(131);
const volume_position_state_js_1 = __webpack_require__(607);
const watch_static_file_js_1 = __webpack_require__(7824);
const wrap_remotion_context_js_1 = __webpack_require__(1543);
// Mark them as Internals so use don't assume this is public
// API and are less likely to use it
exports.Internals = {
    useUnsafeVideoConfig: use_unsafe_video_config_js_1.useUnsafeVideoConfig,
    Timeline: TimelinePosition,
    CompositionManager: CompositionManagerContext_js_1.CompositionManager,
    SequenceManager: SequenceManager_js_1.SequenceManager,
    SequenceVisibilityToggleContext: SequenceManager_js_1.SequenceVisibilityToggleContext,
    RemotionRoot: RemotionRoot_js_1.RemotionRoot,
    useVideo: use_video_js_1.useVideo,
    getRoot: register_root_js_1.getRoot,
    useMediaVolumeState: volume_position_state_js_1.useMediaVolumeState,
    useMediaMutedState: volume_position_state_js_1.useMediaMutedState,
    useLazyComponent: use_lazy_component_js_1.useLazyComponent,
    truthy: truthy_js_1.truthy,
    SequenceContext: SequenceContext_js_1.SequenceContext,
    useRemotionContexts: wrap_remotion_context_js_1.useRemotionContexts,
    RemotionContextProvider: wrap_remotion_context_js_1.RemotionContextProvider,
    CSSUtils,
    setupEnvVariables: setup_env_variables_js_1.setupEnvVariables,
    MediaVolumeContext: volume_position_state_js_1.MediaVolumeContext,
    SetMediaVolumeContext: volume_position_state_js_1.SetMediaVolumeContext,
    getRemotionEnvironment: get_remotion_environment_js_1.getRemotionEnvironment,
    SharedAudioContext: shared_audio_tags_js_1.SharedAudioContext,
    SharedAudioContextProvider: shared_audio_tags_js_1.SharedAudioContextProvider,
    invalidCompositionErrorMessage: validate_composition_id_js_1.invalidCompositionErrorMessage,
    isCompositionIdValid: validate_composition_id_js_1.isCompositionIdValid,
    getPreviewDomElement: get_preview_dom_element_js_1.getPreviewDomElement,
    compositionsRef: CompositionManager_js_1.compositionsRef,
    portalNode: portal_node_js_1.portalNode,
    waitForRoot: register_root_js_1.waitForRoot,
    CanUseRemotionHooksProvider: CanUseRemotionHooks_js_1.CanUseRemotionHooksProvider,
    CanUseRemotionHooks: CanUseRemotionHooks_js_1.CanUseRemotionHooks,
    PrefetchProvider: prefetch_state_js_1.PrefetchProvider,
    DurationsContextProvider: duration_state_js_1.DurationsContextProvider,
    IsPlayerContextProvider: is_player_js_1.IsPlayerContextProvider,
    useIsPlayer: is_player_js_1.useIsPlayer,
    EditorPropsProvider: EditorProps_js_1.EditorPropsProvider,
    EditorPropsContext: EditorProps_js_1.EditorPropsContext,
    usePreload: prefetch_js_1.usePreload,
    NonceContext: nonce_js_1.NonceContext,
    resolveVideoConfig: resolve_video_config_js_1.resolveVideoConfig,
    useResolvedVideoConfig: ResolveCompositionConfig_js_1.useResolvedVideoConfig,
    resolveCompositionsRef: ResolveCompositionConfig_js_1.resolveCompositionsRef,
    ResolveCompositionConfig: ResolveCompositionConfig_js_1.ResolveCompositionConfig,
    REMOTION_STUDIO_CONTAINER_ELEMENT: get_preview_dom_element_js_1.REMOTION_STUDIO_CONTAINER_ELEMENT,
    RenderAssetManager: RenderAssetManager_js_1.RenderAssetManager,
    persistCurrentFrame: timeline_position_state_js_1.persistCurrentFrame,
    useTimelineSetFrame: timeline_position_state_js_1.useTimelineSetFrame,
    NativeLayersProvider: NativeLayers_js_1.NativeLayersProvider,
    ClipComposition: Composition_js_1.ClipComposition,
    isIosSafari: video_fragment_js_1.isIosSafari,
    WATCH_REMOTION_STATIC_FILES: watch_static_file_js_1.WATCH_REMOTION_STATIC_FILES,
    addSequenceStackTraces: enable_sequence_stack_traces_js_1.addSequenceStackTraces,
    useMediaStartsAt: use_audio_frame_js_1.useMediaStartsAt,
    BufferingProvider: buffering_js_1.BufferingProvider,
    BufferingContextReact: buffering_js_1.BufferingContextReact,
    enableSequenceStackTraces: enable_sequence_stack_traces_js_1.enableSequenceStackTraces,
    CurrentScaleContext: use_current_scale_js_1.CurrentScaleContext,
    PreviewSizeContext: use_current_scale_js_1.PreviewSizeContext,
    calculateScale: use_current_scale_js_1.calculateScale,
    editorPropsProviderRef: EditorProps_js_1.editorPropsProviderRef,
    PROPS_UPDATED_EXTERNALLY: ResolveCompositionConfig_js_1.PROPS_UPDATED_EXTERNALLY,
    validateRenderAsset: validate_artifact_js_1.validateRenderAsset,
};


/***/ }),

/***/ 4735:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * Copied from:
 * https://github.com/software-mansion/react-native-reanimated/blob/master/src/reanimated2/Colors.ts
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.interpolateColors = exports.processColor = exports.colorNames = void 0;
/* eslint no-bitwise: 0 */
const interpolate_js_1 = __webpack_require__(3242);
// var INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';
function call(...args) {
    return '\\(\\s*(' + args.join(')\\s*,\\s*(') + ')\\s*\\)';
}
function getMatchers() {
    const cachedMatchers = {
        rgb: undefined,
        rgba: undefined,
        hsl: undefined,
        hsla: undefined,
        hex3: undefined,
        hex4: undefined,
        hex5: undefined,
        hex6: undefined,
        hex8: undefined,
    };
    if (cachedMatchers.rgb === undefined) {
        cachedMatchers.rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
        cachedMatchers.rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
        cachedMatchers.hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
        cachedMatchers.hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
        cachedMatchers.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
        cachedMatchers.hex4 =
            /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
        cachedMatchers.hex6 = /^#([0-9a-fA-F]{6})$/;
        cachedMatchers.hex8 = /^#([0-9a-fA-F]{8})$/;
    }
    return cachedMatchers;
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
function hslToRgb(h, s, l) {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = hue2rgb(p, q, h + 1 / 3);
    const g = hue2rgb(p, q, h);
    const b = hue2rgb(p, q, h - 1 / 3);
    return ((Math.round(r * 255) << 24) |
        (Math.round(g * 255) << 16) |
        (Math.round(b * 255) << 8));
}
function parse255(str) {
    const int = Number.parseInt(str, 10);
    if (int < 0) {
        return 0;
    }
    if (int > 255) {
        return 255;
    }
    return int;
}
function parse360(str) {
    const int = Number.parseFloat(str);
    return (((int % 360) + 360) % 360) / 360;
}
function parse1(str) {
    const num = Number.parseFloat(str);
    if (num < 0) {
        return 0;
    }
    if (num > 1) {
        return 255;
    }
    return Math.round(num * 255);
}
function parsePercentage(str) {
    // parseFloat conveniently ignores the final %
    const int = Number.parseFloat(str);
    if (int < 0) {
        return 0;
    }
    if (int > 100) {
        return 1;
    }
    return int / 100;
}
exports.colorNames = {
    transparent: 0x00000000,
    // http://www.w3.org/TR/css3-color/#svg-color
    aliceblue: 0xf0f8ffff,
    antiquewhite: 0xfaebd7ff,
    aqua: 0x00ffffff,
    aquamarine: 0x7fffd4ff,
    azure: 0xf0ffffff,
    beige: 0xf5f5dcff,
    bisque: 0xffe4c4ff,
    black: 0x000000ff,
    blanchedalmond: 0xffebcdff,
    blue: 0x0000ffff,
    blueviolet: 0x8a2be2ff,
    brown: 0xa52a2aff,
    burlywood: 0xdeb887ff,
    burntsienna: 0xea7e5dff,
    cadetblue: 0x5f9ea0ff,
    chartreuse: 0x7fff00ff,
    chocolate: 0xd2691eff,
    coral: 0xff7f50ff,
    cornflowerblue: 0x6495edff,
    cornsilk: 0xfff8dcff,
    crimson: 0xdc143cff,
    cyan: 0x00ffffff,
    darkblue: 0x00008bff,
    darkcyan: 0x008b8bff,
    darkgoldenrod: 0xb8860bff,
    darkgray: 0xa9a9a9ff,
    darkgreen: 0x006400ff,
    darkgrey: 0xa9a9a9ff,
    darkkhaki: 0xbdb76bff,
    darkmagenta: 0x8b008bff,
    darkolivegreen: 0x556b2fff,
    darkorange: 0xff8c00ff,
    darkorchid: 0x9932ccff,
    darkred: 0x8b0000ff,
    darksalmon: 0xe9967aff,
    darkseagreen: 0x8fbc8fff,
    darkslateblue: 0x483d8bff,
    darkslategray: 0x2f4f4fff,
    darkslategrey: 0x2f4f4fff,
    darkturquoise: 0x00ced1ff,
    darkviolet: 0x9400d3ff,
    deeppink: 0xff1493ff,
    deepskyblue: 0x00bfffff,
    dimgray: 0x696969ff,
    dimgrey: 0x696969ff,
    dodgerblue: 0x1e90ffff,
    firebrick: 0xb22222ff,
    floralwhite: 0xfffaf0ff,
    forestgreen: 0x228b22ff,
    fuchsia: 0xff00ffff,
    gainsboro: 0xdcdcdcff,
    ghostwhite: 0xf8f8ffff,
    gold: 0xffd700ff,
    goldenrod: 0xdaa520ff,
    gray: 0x808080ff,
    green: 0x008000ff,
    greenyellow: 0xadff2fff,
    grey: 0x808080ff,
    honeydew: 0xf0fff0ff,
    hotpink: 0xff69b4ff,
    indianred: 0xcd5c5cff,
    indigo: 0x4b0082ff,
    ivory: 0xfffff0ff,
    khaki: 0xf0e68cff,
    lavender: 0xe6e6faff,
    lavenderblush: 0xfff0f5ff,
    lawngreen: 0x7cfc00ff,
    lemonchiffon: 0xfffacdff,
    lightblue: 0xadd8e6ff,
    lightcoral: 0xf08080ff,
    lightcyan: 0xe0ffffff,
    lightgoldenrodyellow: 0xfafad2ff,
    lightgray: 0xd3d3d3ff,
    lightgreen: 0x90ee90ff,
    lightgrey: 0xd3d3d3ff,
    lightpink: 0xffb6c1ff,
    lightsalmon: 0xffa07aff,
    lightseagreen: 0x20b2aaff,
    lightskyblue: 0x87cefaff,
    lightslategray: 0x778899ff,
    lightslategrey: 0x778899ff,
    lightsteelblue: 0xb0c4deff,
    lightyellow: 0xffffe0ff,
    lime: 0x00ff00ff,
    limegreen: 0x32cd32ff,
    linen: 0xfaf0e6ff,
    magenta: 0xff00ffff,
    maroon: 0x800000ff,
    mediumaquamarine: 0x66cdaaff,
    mediumblue: 0x0000cdff,
    mediumorchid: 0xba55d3ff,
    mediumpurple: 0x9370dbff,
    mediumseagreen: 0x3cb371ff,
    mediumslateblue: 0x7b68eeff,
    mediumspringgreen: 0x00fa9aff,
    mediumturquoise: 0x48d1ccff,
    mediumvioletred: 0xc71585ff,
    midnightblue: 0x191970ff,
    mintcream: 0xf5fffaff,
    mistyrose: 0xffe4e1ff,
    moccasin: 0xffe4b5ff,
    navajowhite: 0xffdeadff,
    navy: 0x000080ff,
    oldlace: 0xfdf5e6ff,
    olive: 0x808000ff,
    olivedrab: 0x6b8e23ff,
    orange: 0xffa500ff,
    orangered: 0xff4500ff,
    orchid: 0xda70d6ff,
    palegoldenrod: 0xeee8aaff,
    palegreen: 0x98fb98ff,
    paleturquoise: 0xafeeeeff,
    palevioletred: 0xdb7093ff,
    papayawhip: 0xffefd5ff,
    peachpuff: 0xffdab9ff,
    peru: 0xcd853fff,
    pink: 0xffc0cbff,
    plum: 0xdda0ddff,
    powderblue: 0xb0e0e6ff,
    purple: 0x800080ff,
    rebeccapurple: 0x663399ff,
    red: 0xff0000ff,
    rosybrown: 0xbc8f8fff,
    royalblue: 0x4169e1ff,
    saddlebrown: 0x8b4513ff,
    salmon: 0xfa8072ff,
    sandybrown: 0xf4a460ff,
    seagreen: 0x2e8b57ff,
    seashell: 0xfff5eeff,
    sienna: 0xa0522dff,
    silver: 0xc0c0c0ff,
    skyblue: 0x87ceebff,
    slateblue: 0x6a5acdff,
    slategray: 0x708090ff,
    slategrey: 0x708090ff,
    snow: 0xfffafaff,
    springgreen: 0x00ff7fff,
    steelblue: 0x4682b4ff,
    tan: 0xd2b48cff,
    teal: 0x008080ff,
    thistle: 0xd8bfd8ff,
    tomato: 0xff6347ff,
    turquoise: 0x40e0d0ff,
    violet: 0xee82eeff,
    wheat: 0xf5deb3ff,
    white: 0xffffffff,
    whitesmoke: 0xf5f5f5ff,
    yellow: 0xffff00ff,
    yellowgreen: 0x9acd32ff,
};
function normalizeColor(color) {
    const matchers = getMatchers();
    let match;
    // Ordered based on occurrences on Facebook codebase
    if (matchers.hex6) {
        if ((match = matchers.hex6.exec(color))) {
            return Number.parseInt(match[1] + 'ff', 16) >>> 0;
        }
    }
    if (exports.colorNames[color] !== undefined) {
        return exports.colorNames[color];
    }
    if (matchers.rgb) {
        if ((match = matchers.rgb.exec(color))) {
            return (
            // b
            ((parse255(match[1]) << 24) | // r
                (parse255(match[2]) << 16) | // g
                (parse255(match[3]) << 8) |
                0x000000ff) >>> // a
                0);
        }
    }
    if (matchers.rgba) {
        if ((match = matchers.rgba.exec(color))) {
            return (
            // b
            ((parse255(match[1]) << 24) | // r
                (parse255(match[2]) << 16) | // g
                (parse255(match[3]) << 8) |
                parse1(match[4])) >>> // a
                0);
        }
    }
    if (matchers.hex3) {
        if ((match = matchers.hex3.exec(color))) {
            return (Number.parseInt(match[1] +
                match[1] + // r
                match[2] +
                match[2] + // g
                match[3] +
                match[3] + // b
                'ff', // a
            16) >>> 0);
        }
    }
    // https://drafts.csswg.org/css-color-4/#hex-notation
    if (matchers.hex8) {
        if ((match = matchers.hex8.exec(color))) {
            return Number.parseInt(match[1], 16) >>> 0;
        }
    }
    if (matchers.hex4) {
        if ((match = matchers.hex4.exec(color))) {
            return (Number.parseInt(match[1] +
                match[1] + // r
                match[2] +
                match[2] + // g
                match[3] +
                match[3] + // b
                match[4] +
                match[4], // a
            16) >>> 0);
        }
    }
    if (matchers.hsl) {
        if ((match = matchers.hsl.exec(color))) {
            return ((hslToRgb(parse360(match[1]), // h
            parsePercentage(match[2]), // s
            parsePercentage(match[3])) |
                0x000000ff) >>> // a
                0);
        }
    }
    if (matchers.hsla) {
        if ((match = matchers.hsla.exec(color))) {
            return ((hslToRgb(parse360(match[1]), // h
            parsePercentage(match[2]), // s
            parsePercentage(match[3])) |
                parse1(match[4])) >>> // a
                0);
        }
    }
    throw new Error(`invalid color string ${color} provided`);
}
const opacity = (c) => {
    return ((c >> 24) & 255) / 255;
};
const red = (c) => {
    return (c >> 16) & 255;
};
const green = (c) => {
    return (c >> 8) & 255;
};
const blue = (c) => {
    return c & 255;
};
const rgbaColor = (r, g, b, alpha) => {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
function processColor(color) {
    const normalizedColor = normalizeColor(color);
    return ((normalizedColor << 24) | (normalizedColor >>> 8)) >>> 0; // argb
}
exports.processColor = processColor;
const interpolateColorsRGB = (value, inputRange, colors) => {
    const [r, g, b, a] = [red, green, blue, opacity].map((f) => {
        const unrounded = (0, interpolate_js_1.interpolate)(value, inputRange, colors.map((c) => f(c)), {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
        });
        if (f === opacity) {
            return Number(unrounded.toFixed(3));
        }
        return Math.round(unrounded);
    });
    return rgbaColor(r, g, b, a);
};
/**
 * @description This function allows you to map a range of values to colors using a concise syntax.
 * @see [Documentation](https://www.remotion.dev/docs/interpolate-colors)
 */
const interpolateColors = (input, inputRange, outputRange) => {
    if (typeof input === 'undefined') {
        throw new TypeError('input can not be undefined');
    }
    if (typeof inputRange === 'undefined') {
        throw new TypeError('inputRange can not be undefined');
    }
    if (typeof outputRange === 'undefined') {
        throw new TypeError('outputRange can not be undefined');
    }
    if (inputRange.length !== outputRange.length) {
        throw new TypeError('inputRange (' +
            inputRange.length +
            ' values provided) and outputRange (' +
            outputRange.length +
            ' values provided) must have the same length');
    }
    const processedOutputRange = outputRange.map((c) => processColor(c));
    return interpolateColorsRGB(input, inputRange, processedOutputRange);
};
exports.interpolateColors = interpolateColors;


/***/ }),

/***/ 3242:
/***/ ((__unused_webpack_module, exports) => {


// Taken from https://github.com/facebook/react-native/blob/0b9ea60b4fee8cacc36e7160e31b91fc114dbc0d/Libraries/Animated/src/nodes/AnimatedInterpolation.js
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.interpolate = void 0;
function interpolateFunction(input, inputRange, outputRange, options) {
    const { extrapolateLeft, extrapolateRight, easing } = options;
    let result = input;
    const [inputMin, inputMax] = inputRange;
    const [outputMin, outputMax] = outputRange;
    if (result < inputMin) {
        if (extrapolateLeft === 'identity') {
            return result;
        }
        if (extrapolateLeft === 'clamp') {
            result = inputMin;
        }
        else if (extrapolateLeft === 'wrap') {
            const range = inputMax - inputMin;
            result = ((((result - inputMin) % range) + range) % range) + inputMin;
        }
        else if (extrapolateLeft === 'extend') {
            // Noop
        }
    }
    if (result > inputMax) {
        if (extrapolateRight === 'identity') {
            return result;
        }
        if (extrapolateRight === 'clamp') {
            result = inputMax;
        }
        else if (extrapolateRight === 'wrap') {
            const range = inputMax - inputMin;
            result = ((((result - inputMin) % range) + range) % range) + inputMin;
        }
        else if (extrapolateRight === 'extend') {
            // Noop
        }
    }
    if (outputMin === outputMax) {
        return outputMin;
    }
    // Input Range
    result = (result - inputMin) / (inputMax - inputMin);
    // Easing
    result = easing(result);
    // Output Range
    result = result * (outputMax - outputMin) + outputMin;
    return result;
}
function findRange(input, inputRange) {
    let i;
    for (i = 1; i < inputRange.length - 1; ++i) {
        if (inputRange[i] >= input) {
            break;
        }
    }
    return i - 1;
}
function checkValidInputRange(arr) {
    for (let i = 1; i < arr.length; ++i) {
        if (!(arr[i] > arr[i - 1])) {
            throw new Error(`inputRange must be strictly monotonically increasing but got [${arr.join(',')}]`);
        }
    }
}
function checkInfiniteRange(name, arr) {
    if (arr.length < 2) {
        throw new Error(name + ' must have at least 2 elements');
    }
    for (const element of arr) {
        if (typeof element !== 'number') {
            throw new Error(`${name} must contain only numbers`);
        }
        if (!Number.isFinite(element)) {
            throw new Error(`${name} must contain only finite numbers, but got [${arr.join(',')}]`);
        }
    }
}
/**
 * Map a value from an input range to an output range.
 * @link https://www.remotion.dev/docs/interpolate
 * @param {!number} input value to interpolate
 * @param {!number[]} inputRange range of values that you expect the input to assume.
 * @param {!number[]} outputRange range of output values that you want the input to map to.
 * @param {?object} options
 * @param {?Function} options.easing easing function which allows you to customize the input, for example to apply a certain easing function. By default, the input is left unmodified, resulting in a pure linear interpolation {@link https://www.remotion.dev/docs/easing}
 * @param {string=} [options.extrapolateLeft="extend"] What should happen if the input value is outside left the input range, default: "extend" {@link https://www.remotion.dev/docs/interpolate#extrapolateleft}
 * @param {string=} [options.extrapolateRight="extend"] Same as extrapolateLeft, except for values outside right the input range {@link https://www.remotion.dev/docs/interpolate#extrapolateright}
 */
function interpolate(input, inputRange, outputRange, options) {
    var _a;
    if (typeof input === 'undefined') {
        throw new Error('input can not be undefined');
    }
    if (typeof inputRange === 'undefined') {
        throw new Error('inputRange can not be undefined');
    }
    if (typeof outputRange === 'undefined') {
        throw new Error('outputRange can not be undefined');
    }
    if (inputRange.length !== outputRange.length) {
        throw new Error('inputRange (' +
            inputRange.length +
            ') and outputRange (' +
            outputRange.length +
            ') must have the same length');
    }
    checkInfiniteRange('inputRange', inputRange);
    checkInfiniteRange('outputRange', outputRange);
    checkValidInputRange(inputRange);
    const easing = (_a = options === null || options === void 0 ? void 0 : options.easing) !== null && _a !== void 0 ? _a : ((num) => num);
    let extrapolateLeft = 'extend';
    if ((options === null || options === void 0 ? void 0 : options.extrapolateLeft) !== undefined) {
        extrapolateLeft = options.extrapolateLeft;
    }
    let extrapolateRight = 'extend';
    if ((options === null || options === void 0 ? void 0 : options.extrapolateRight) !== undefined) {
        extrapolateRight = options.extrapolateRight;
    }
    if (typeof input !== 'number') {
        throw new TypeError('Cannot interpolate an input which is not a number');
    }
    const range = findRange(input, inputRange);
    return interpolateFunction(input, [inputRange[range], inputRange[range + 1]], [outputRange[range], outputRange[range + 1]], {
        easing,
        extrapolateLeft,
        extrapolateRight,
    });
}
exports.interpolate = interpolate;


/***/ }),

/***/ 3874:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isApproximatelyTheSame = void 0;
const FLOATING_POINT_ERROR_THRESHOLD = 0.00001;
const isApproximatelyTheSame = (num1, num2) => {
    return Math.abs(num1 - num2) < FLOATING_POINT_ERROR_THRESHOLD;
};
exports.isApproximatelyTheSame = isApproximatelyTheSame;


/***/ }),

/***/ 19:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useIsPlayer = exports.IsPlayerContextProvider = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const IsPlayerContext = (0, react_1.createContext)(false);
const IsPlayerContextProvider = ({ children, }) => {
    return (0, jsx_runtime_1.jsx)(IsPlayerContext.Provider, { value: true, children: children });
};
exports.IsPlayerContextProvider = IsPlayerContextProvider;
const useIsPlayer = () => {
    return (0, react_1.useContext)(IsPlayerContext);
};
exports.useIsPlayer = useIsPlayer;


/***/ }),

/***/ 5997:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Loading = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const AbsoluteFill_js_1 = __webpack_require__(2909);
const rotate = {
    transform: `rotate(90deg)`,
};
const ICON_SIZE = 40;
const label = {
    color: 'white',
    fontSize: 14,
    fontFamily: 'sans-serif',
};
const container = {
    justifyContent: 'center',
    alignItems: 'center',
};
const Loading = () => {
    return ((0, jsx_runtime_1.jsxs)(AbsoluteFill_js_1.AbsoluteFill, { style: container, id: "remotion-comp-loading", children: [(0, jsx_runtime_1.jsx)("style", { type: "text/css", children: `
				@keyframes anim {
					from {
						opacity: 0
					}
					to {
						opacity: 1
					}
				}
				#remotion-comp-loading {
					animation: anim 2s;
					animation-fill-mode: forwards;
				}
			` }), (0, jsx_runtime_1.jsx)("svg", { width: ICON_SIZE, height: ICON_SIZE, viewBox: "-100 -100 400 400", style: rotate, children: (0, jsx_runtime_1.jsx)("path", { fill: "#555", stroke: "#555", strokeWidth: "100", strokeLinejoin: "round", d: "M 2 172 a 196 100 0 0 0 195 5 A 196 240 0 0 0 100 2.259 A 196 240 0 0 0 2 172 z" }) }), (0, jsx_runtime_1.jsxs)("p", { style: label, children: ["Resolving ", '<Suspense>', "..."] })] }));
};
exports.Loading = Loading;


/***/ }),

/***/ 3760:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Loop = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __importStar(__webpack_require__(758));
const Sequence_js_1 = __webpack_require__(8808);
const use_current_frame_js_1 = __webpack_require__(6606);
const use_video_config_js_1 = __webpack_require__(3299);
const validate_duration_in_frames_js_1 = __webpack_require__(1241);
const LoopContext = (0, react_1.createContext)(null);
const useLoop = () => {
    return react_1.default.useContext(LoopContext);
};
/**
 * @description This component allows you to quickly lay out an animation so it repeats itself.
 * @see [Documentation](https://www.remotion.dev/docs/loop)
 */
const Loop = ({ durationInFrames, times = Infinity, children, name, ...props }) => {
    const currentFrame = (0, use_current_frame_js_1.useCurrentFrame)();
    const { durationInFrames: compDuration } = (0, use_video_config_js_1.useVideoConfig)();
    (0, validate_duration_in_frames_js_1.validateDurationInFrames)(durationInFrames, {
        component: 'of the <Loop /> component',
        allowFloats: true,
    });
    if (typeof times !== 'number') {
        throw new TypeError(`You passed to "times" an argument of type ${typeof times}, but it must be a number.`);
    }
    if (times !== Infinity && times % 1 !== 0) {
        throw new TypeError(`The "times" prop of a loop must be an integer, but got ${times}.`);
    }
    if (times < 0) {
        throw new TypeError(`The "times" prop of a loop must be at least 0, but got ${times}`);
    }
    const maxTimes = Math.ceil(compDuration / durationInFrames);
    const actualTimes = Math.min(maxTimes, times);
    const style = props.layout === 'none' ? undefined : props.style;
    const maxFrame = durationInFrames * (actualTimes - 1);
    const iteration = Math.floor(currentFrame / durationInFrames);
    const start = iteration * durationInFrames;
    const from = Math.min(start, maxFrame);
    const loopDisplay = (0, react_1.useMemo)(() => {
        return {
            numberOfTimes: actualTimes,
            startOffset: -from,
            durationInFrames,
        };
    }, [actualTimes, durationInFrames, from]);
    const loopContext = (0, react_1.useMemo)(() => {
        return {
            iteration: Math.floor(currentFrame / durationInFrames),
            durationInFrames,
        };
    }, [currentFrame, durationInFrames]);
    return ((0, jsx_runtime_1.jsx)(LoopContext.Provider, { value: loopContext, children: (0, jsx_runtime_1.jsx)(Sequence_js_1.Sequence, { durationInFrames: durationInFrames, from: from, name: name !== null && name !== void 0 ? name : '<Loop>', _remotionInternalLoopDisplay: loopDisplay, layout: props.layout, style: style, children: children }) }));
};
exports.Loop = Loop;
exports.Loop.useLoop = useLoop;


/***/ }),

/***/ 7746:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkMultipleRemotionVersions = void 0;
const truthy_js_1 = __webpack_require__(9609);
const version_js_1 = __webpack_require__(8449);
const checkMultipleRemotionVersions = () => {
    if (typeof globalThis === 'undefined') {
        return;
    }
    const alreadyImported = globalThis.remotion_imported ||
        (typeof window !== 'undefined' && window.remotion_imported);
    if (alreadyImported) {
        if (alreadyImported === version_js_1.VERSION) {
            // Next.JS will reload the package and cause a server-side warning.
            // It's okay if this happens during SSR in developement
            return;
        }
        throw new TypeError(`🚨 Multiple versions of Remotion detected: ${[
            version_js_1.VERSION,
            typeof alreadyImported === 'string'
                ? alreadyImported
                : 'an older version',
        ]
            .filter(truthy_js_1.truthy)
            .join(' and ')}. This will cause things to break in an unexpected way.\nCheck that all your Remotion packages are on the same version. If your dependencies depend on Remotion, make them peer dependencies. You can also run \`npx remotion versions\` from your terminal to see which versions are mismatching.`);
    }
    globalThis.remotion_imported = version_js_1.VERSION;
    if (typeof window !== 'undefined') {
        window.remotion_imported = version_js_1.VERSION;
    }
};
exports.checkMultipleRemotionVersions = checkMultipleRemotionVersions;


/***/ }),

/***/ 2280:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoReactInternals = exports.random = exports.interpolate = void 0;
var interpolate_1 = __webpack_require__(3242);
Object.defineProperty(exports, "interpolate", ({ enumerable: true, get: function () { return interpolate_1.interpolate; } }));
var random_js_1 = __webpack_require__(8910);
Object.defineProperty(exports, "random", ({ enumerable: true, get: function () { return random_js_1.random; } }));
const delay_render_1 = __webpack_require__(7687);
const input_props_serialization_1 = __webpack_require__(1747);
const input_props_serialization_js_1 = __webpack_require__(1747);
const interpolate_colors_1 = __webpack_require__(4735);
const truthy_1 = __webpack_require__(9609);
const v5_flag_1 = __webpack_require__(2635);
const validate_frame_1 = __webpack_require__(2847);
const validate_default_props_1 = __webpack_require__(7956);
const validate_dimensions_1 = __webpack_require__(6357);
const validate_duration_in_frames_1 = __webpack_require__(1241);
const validate_fps_1 = __webpack_require__(1309);
const get_current_time_1 = __webpack_require__(2287);
const offthread_video_source_1 = __webpack_require__(5182);
exports.NoReactInternals = {
    processColor: interpolate_colors_1.processColor,
    truthy: truthy_1.truthy,
    validateFps: validate_fps_1.validateFps,
    validateDimension: validate_dimensions_1.validateDimension,
    validateDurationInFrames: validate_duration_in_frames_1.validateDurationInFrames,
    validateDefaultAndInputProps: validate_default_props_1.validateDefaultAndInputProps,
    validateFrame: validate_frame_1.validateFrame,
    serializeJSONWithDate: input_props_serialization_1.serializeJSONWithDate,
    bundleName: 'bundle.js',
    bundleMapName: 'bundle.js.map',
    deserializeJSONWithCustomFields: input_props_serialization_1.deserializeJSONWithCustomFields,
    DELAY_RENDER_CALLSTACK_TOKEN: delay_render_1.DELAY_RENDER_CALLSTACK_TOKEN,
    DELAY_RENDER_RETRY_TOKEN: delay_render_1.DELAY_RENDER_RETRY_TOKEN,
    DELAY_RENDER_ATTEMPT_TOKEN: delay_render_1.DELAY_RENDER_RETRIES_LEFT,
    getOffthreadVideoSource: offthread_video_source_1.getOffthreadVideoSource,
    getExpectedMediaFrameUncorrected: get_current_time_1.getExpectedMediaFrameUncorrected,
    ENABLE_V5_BREAKING_CHANGES: v5_flag_1.ENABLE_V5_BREAKING_CHANGES,
    MIN_NODE_VERSION: v5_flag_1.ENABLE_V5_BREAKING_CHANGES ? 18 : 16,
    MIN_BUN_VERSION: v5_flag_1.ENABLE_V5_BREAKING_CHANGES ? '1.1.3' : '1.0.3',
    colorNames: interpolate_colors_1.colorNames,
    DATE_TOKEN: input_props_serialization_js_1.DATE_TOKEN,
    FILE_TOKEN: input_props_serialization_js_1.FILE_TOKEN,
};


/***/ }),

/***/ 5574:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useNonce = exports.NonceContext = void 0;
const react_1 = __webpack_require__(758);
exports.NonceContext = (0, react_1.createContext)({
    getNonce: () => 0,
    fastRefreshes: 0,
});
const useNonce = () => {
    const context = (0, react_1.useContext)(exports.NonceContext);
    const [nonce, setNonce] = (0, react_1.useState)(() => context.getNonce());
    const lastContext = (0, react_1.useRef)(context);
    // Only if context changes, but not initially
    (0, react_1.useEffect)(() => {
        if (lastContext.current === context) {
            return;
        }
        lastContext.current = context;
        setNonce(context.getNonce);
    }, [context]);
    return nonce;
};
exports.useNonce = useNonce;


/***/ }),

/***/ 7600:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.playAndHandleNotAllowedError = void 0;
const get_remotion_environment_1 = __webpack_require__(2161);
const playAndHandleNotAllowedError = (mediaRef, mediaType, onAutoPlayError) => {
    const { current } = mediaRef;
    if (!current) {
        return;
    }
    const prom = current.play();
    if (prom.catch) {
        prom.catch((err) => {
            if (!current) {
                return;
            }
            // Pause was called after play in Chrome
            if (err.message.includes('request was interrupted by a call to pause')) {
                return;
            }
            // Pause was called after play in Safari
            if (err.message.includes('The operation was aborted.')) {
                return;
            }
            // Pause was called after play in Firefox
            if (err.message.includes('The fetching process for the media resource was aborted by the user agent')) {
                return;
            }
            // Got replaced by a different audio source in Chromium
            if (err.message.includes('request was interrupted by a new load request')) {
                return;
            }
            // Audio tag got unmounted
            if (err.message.includes('because the media was removed from the document')) {
                return;
            }
            // eslint-disable-next-line no-console
            console.log(`Could not play ${mediaType} due to following error: `, err);
            if (!current.muted) {
                if (onAutoPlayError) {
                    onAutoPlayError();
                    return;
                }
                // eslint-disable-next-line no-console
                console.log(`The video will be muted and we'll retry playing it.`);
                if (mediaType === 'video' && (0, get_remotion_environment_1.getRemotionEnvironment)().isPlayer) {
                    // eslint-disable-next-line no-console
                    console.log('Use onAutoPlayError() to handle this error yourself.');
                }
                current.muted = true;
                current.play();
            }
        });
    }
};
exports.playAndHandleNotAllowedError = playAndHandleNotAllowedError;


/***/ }),

/***/ 4436:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.portalNode = void 0;
let _portalNode = null;
const portalNode = () => {
    if (!_portalNode) {
        if (typeof document === 'undefined') {
            throw new Error('Tried to call an API that only works in the browser from outside the browser');
        }
        _portalNode = document.createElement('div');
        _portalNode.style.position = 'absolute';
        _portalNode.style.top = '0px';
        _portalNode.style.left = '0px';
        _portalNode.style.right = '0px';
        _portalNode.style.bottom = '0px';
        _portalNode.style.width = '100%';
        _portalNode.style.height = '100%';
        _portalNode.style.display = 'flex';
        _portalNode.style.flexDirection = 'column';
        const containerNode = document.createElement('div');
        containerNode.style.position = 'fixed';
        containerNode.style.top = -999999 + 'px';
        containerNode.appendChild(_portalNode);
        document.body.appendChild(containerNode);
    }
    return _portalNode;
};
exports.portalNode = portalNode;


/***/ }),

/***/ 2926:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrefetchProvider = exports.setPreloads = exports.PreloadContext = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
exports.PreloadContext = (0, react_1.createContext)({});
let preloads = {};
let updaters = [];
const setPreloads = (updater) => {
    preloads = updater(preloads);
    updaters.forEach((u) => u());
};
exports.setPreloads = setPreloads;
const PrefetchProvider = ({ children }) => {
    const [_preloads, _setPreloads] = (0, react_1.useState)(() => preloads);
    (0, react_1.useEffect)(() => {
        const updaterFunction = () => {
            _setPreloads(preloads);
        };
        updaters.push(updaterFunction);
        return () => {
            updaters = updaters.filter((u) => u !== updaterFunction);
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)(exports.PreloadContext.Provider, { value: _preloads, children: children }));
};
exports.PrefetchProvider = PrefetchProvider;


/***/ }),

/***/ 8470:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prefetch = exports.usePreload = void 0;
const react_1 = __webpack_require__(758);
const get_remotion_environment_js_1 = __webpack_require__(2161);
const prefetch_state_js_1 = __webpack_require__(2926);
const usePreload = (src) => {
    var _a;
    const preloads = (0, react_1.useContext)(prefetch_state_js_1.PreloadContext);
    return (_a = preloads[src]) !== null && _a !== void 0 ? _a : src;
};
exports.usePreload = usePreload;
const blobToBase64 = function (blob) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = function () {
            const dataUrl = reader.result;
            resolve(dataUrl);
        };
        reader.onerror = (err) => {
            return reject(err);
        };
        reader.readAsDataURL(blob);
    });
};
const getBlobFromReader = async ({ reader, contentType, contentLength, onProgress, }) => {
    let receivedLength = 0;
    const chunks = [];
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        chunks.push(value);
        receivedLength += value.length;
        if (onProgress) {
            onProgress({ loadedBytes: receivedLength, totalBytes: contentLength });
        }
    }
    const chunksAll = new Uint8Array(receivedLength);
    let position = 0;
    for (const chunk of chunks) {
        chunksAll.set(chunk, position);
        position += chunk.length;
    }
    return new Blob([chunksAll], {
        type: contentType !== null && contentType !== void 0 ? contentType : undefined,
    });
};
/**
 * @description When you call the preFetch() function, an asset will be fetched and kept in memory so it is ready when you want to play it in a <Player>.
 * @see [Documentation](https://www.remotion.dev/docs/prefetch)
 */
const prefetch = (src, options) => {
    var _a;
    const method = (_a = options === null || options === void 0 ? void 0 : options.method) !== null && _a !== void 0 ? _a : 'blob-url';
    if ((0, get_remotion_environment_js_1.getRemotionEnvironment)().isRendering) {
        return {
            free: () => undefined,
            waitUntilDone: () => Promise.resolve(src),
        };
    }
    let canceled = false;
    let objectUrl = null;
    let resolve = () => undefined;
    let reject = () => undefined;
    const waitUntilDone = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    const controller = new AbortController();
    let canBeAborted = true;
    fetch(src, {
        signal: controller.signal,
    })
        .then((res) => {
        var _a, _b, _c;
        canBeAborted = false;
        if (canceled) {
            return null;
        }
        if (!res.ok) {
            throw new Error(`HTTP error, status = ${res.status}`);
        }
        const headerContentType = res.headers.get('Content-Type');
        const contentType = (_a = options === null || options === void 0 ? void 0 : options.contentType) !== null && _a !== void 0 ? _a : headerContentType;
        const hasProperContentType = contentType &&
            (contentType.startsWith('video/') ||
                contentType.startsWith('audio/') ||
                contentType.startsWith('image/'));
        if (!hasProperContentType) {
            // eslint-disable-next-line no-console
            console.warn(`Called prefetch() on ${src} which returned a "Content-Type" of ${headerContentType}. Prefetched content should have a proper content type (video/... or audio/...) or a contentType passed the options of prefetch(). Otherwise, prefetching will not work properly in all browsers.`);
        }
        if (!res.body) {
            throw new Error(`HTTP response of ${src} has no body`);
        }
        const reader = res.body.getReader();
        return getBlobFromReader({
            reader,
            contentType: (_c = (_b = options === null || options === void 0 ? void 0 : options.contentType) !== null && _b !== void 0 ? _b : headerContentType) !== null && _c !== void 0 ? _c : null,
            contentLength: res.headers.get('Content-Length')
                ? parseInt(res.headers.get('Content-Length'), 10)
                : null,
            onProgress: options === null || options === void 0 ? void 0 : options.onProgress,
        });
    })
        .then((buf) => {
        if (!buf) {
            return;
        }
        const actualBlob = (options === null || options === void 0 ? void 0 : options.contentType)
            ? new Blob([buf], { type: options.contentType })
            : buf;
        if (method === 'base64') {
            return blobToBase64(actualBlob);
        }
        return URL.createObjectURL(actualBlob);
    })
        .then((url) => {
        if (canceled) {
            return;
        }
        objectUrl = url;
        (0, prefetch_state_js_1.setPreloads)((p) => ({
            ...p,
            [src]: objectUrl,
        }));
        resolve(objectUrl);
    })
        .catch((err) => {
        reject(err);
    });
    return {
        free: () => {
            if (objectUrl) {
                if (method === 'blob-url') {
                    URL.revokeObjectURL(objectUrl);
                }
                (0, prefetch_state_js_1.setPreloads)((p) => {
                    const copy = { ...p };
                    delete copy[src];
                    return copy;
                });
            }
            else {
                canceled = true;
                if (canBeAborted) {
                    try {
                        controller.abort();
                    }
                    catch (e) { }
                }
            }
        },
        waitUntilDone: () => {
            return waitUntilDone;
        },
    };
};
exports.prefetch = prefetch;


/***/ }),

/***/ 8910:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.random = void 0;
/* eslint-disable no-bitwise */
function mulberry32(a) {
    let t = a + 0x6d2b79f5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
function hashCode(str) {
    let i = 0;
    let chr = 0;
    let hash = 0;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
/**
 * @description A deterministic pseudo-random number generator. Pass in the same seed and get the same pseudorandom number.
 * @see [Documentation](https://remotion.dev/docs/random)
 */
const random = (seed, dummy) => {
    if (dummy !== undefined) {
        throw new TypeError('random() takes only one argument');
    }
    if (seed === null) {
        return Math.random();
    }
    if (typeof seed === 'string') {
        return mulberry32(hashCode(seed));
    }
    if (typeof seed === 'number') {
        return mulberry32(seed * 10000000000);
    }
    throw new Error('random() argument must be a number or a string');
};
exports.random = random;


/***/ }),

/***/ 8281:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.waitForRoot = exports.getRoot = exports.registerRoot = void 0;
let Root = null;
let listeners = [];
/**
 * @description This function registers the root component of the Remotion project
 * @see [Documentation](https://www.remotion.dev/docs/register-root)
 */
const registerRoot = (comp) => {
    if (!comp) {
        throw new Error(`You must pass a React component to registerRoot(), but ${JSON.stringify(comp)} was passed.`);
    }
    if (Root) {
        throw new Error('registerRoot() was called more than once.');
    }
    Root = comp;
    listeners.forEach((l) => {
        l(comp);
    });
};
exports.registerRoot = registerRoot;
const getRoot = () => {
    return Root;
};
exports.getRoot = getRoot;
const waitForRoot = (fn) => {
    if (Root) {
        fn(Root);
        return () => undefined;
    }
    listeners.push(fn);
    return () => {
        listeners = listeners.filter((l) => l !== fn);
    };
};
exports.waitForRoot = waitForRoot;


/***/ }),

/***/ 74:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveVideoConfigOrCatch = exports.resolveVideoConfig = void 0;
const input_props_serialization_js_1 = __webpack_require__(1747);
const validate_default_codec_js_1 = __webpack_require__(4176);
const validate_dimensions_js_1 = __webpack_require__(6357);
const validate_duration_in_frames_js_1 = __webpack_require__(1241);
const validate_fps_js_1 = __webpack_require__(1309);
const validateCalculated = ({ calculated, compositionId, compositionFps, compositionHeight, compositionWidth, compositionDurationInFrames, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const calculateMetadataErrorLocation = `calculated by calculateMetadata() for the composition "${compositionId}"`;
    const defaultErrorLocation = `of the "<Composition />" component with the id "${compositionId}"`;
    const width = (_b = (_a = calculated === null || calculated === void 0 ? void 0 : calculated.width) !== null && _a !== void 0 ? _a : compositionWidth) !== null && _b !== void 0 ? _b : undefined;
    (0, validate_dimensions_js_1.validateDimension)(width, 'width', (calculated === null || calculated === void 0 ? void 0 : calculated.width) ? calculateMetadataErrorLocation : defaultErrorLocation);
    const height = (_d = (_c = calculated === null || calculated === void 0 ? void 0 : calculated.height) !== null && _c !== void 0 ? _c : compositionHeight) !== null && _d !== void 0 ? _d : undefined;
    (0, validate_dimensions_js_1.validateDimension)(height, 'height', (calculated === null || calculated === void 0 ? void 0 : calculated.height) ? calculateMetadataErrorLocation : defaultErrorLocation);
    const fps = (_f = (_e = calculated === null || calculated === void 0 ? void 0 : calculated.fps) !== null && _e !== void 0 ? _e : compositionFps) !== null && _f !== void 0 ? _f : null;
    (0, validate_fps_js_1.validateFps)(fps, (calculated === null || calculated === void 0 ? void 0 : calculated.fps) ? calculateMetadataErrorLocation : defaultErrorLocation, false);
    const durationInFrames = (_h = (_g = calculated === null || calculated === void 0 ? void 0 : calculated.durationInFrames) !== null && _g !== void 0 ? _g : compositionDurationInFrames) !== null && _h !== void 0 ? _h : null;
    (0, validate_duration_in_frames_js_1.validateDurationInFrames)(durationInFrames, {
        allowFloats: false,
        component: `of the "<Composition />" component with the id "${compositionId}"`,
    });
    const defaultCodec = calculated === null || calculated === void 0 ? void 0 : calculated.defaultCodec;
    (0, validate_default_codec_js_1.validateDefaultCodec)(defaultCodec, calculateMetadataErrorLocation);
    return { width, height, fps, durationInFrames, defaultCodec };
};
const resolveVideoConfig = ({ calculateMetadata, signal, defaultProps, originalProps, compositionId, compositionDurationInFrames, compositionFps, compositionHeight, compositionWidth, }) => {
    var _a, _b;
    const calculatedProm = calculateMetadata
        ? calculateMetadata({
            defaultProps,
            props: originalProps,
            abortSignal: signal,
            compositionId,
        })
        : null;
    if (calculatedProm !== null &&
        typeof calculatedProm === 'object' &&
        'then' in calculatedProm) {
        return calculatedProm.then((c) => {
            var _a;
            const { height, width, durationInFrames, fps, defaultCodec } = validateCalculated({
                calculated: c,
                compositionDurationInFrames,
                compositionFps,
                compositionHeight,
                compositionWidth,
                compositionId,
            });
            return {
                width,
                height,
                fps,
                durationInFrames,
                id: compositionId,
                defaultProps: (0, input_props_serialization_js_1.serializeThenDeserializeInStudio)(defaultProps),
                props: (0, input_props_serialization_js_1.serializeThenDeserializeInStudio)((_a = c.props) !== null && _a !== void 0 ? _a : originalProps),
                defaultCodec: defaultCodec !== null && defaultCodec !== void 0 ? defaultCodec : null,
            };
        });
    }
    const data = validateCalculated({
        calculated: calculatedProm,
        compositionDurationInFrames,
        compositionFps,
        compositionHeight,
        compositionWidth,
        compositionId,
    });
    if (calculatedProm === null) {
        return {
            ...data,
            id: compositionId,
            defaultProps: (0, input_props_serialization_js_1.serializeThenDeserializeInStudio)(defaultProps !== null && defaultProps !== void 0 ? defaultProps : {}),
            props: (0, input_props_serialization_js_1.serializeThenDeserializeInStudio)(originalProps),
            defaultCodec: null,
        };
    }
    return {
        ...data,
        id: compositionId,
        defaultProps: (0, input_props_serialization_js_1.serializeThenDeserializeInStudio)(defaultProps !== null && defaultProps !== void 0 ? defaultProps : {}),
        props: (0, input_props_serialization_js_1.serializeThenDeserializeInStudio)((_a = calculatedProm.props) !== null && _a !== void 0 ? _a : originalProps),
        defaultCodec: (_b = calculatedProm.defaultCodec) !== null && _b !== void 0 ? _b : null,
    };
};
exports.resolveVideoConfig = resolveVideoConfig;
const resolveVideoConfigOrCatch = (params) => {
    try {
        const promiseOrReturnValue = (0, exports.resolveVideoConfig)(params);
        return {
            type: 'success',
            result: promiseOrReturnValue,
        };
    }
    catch (err) {
        return {
            type: 'error',
            error: err,
        };
    }
};
exports.resolveVideoConfigOrCatch = resolveVideoConfigOrCatch;


/***/ }),

/***/ 6877:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flattenChildren = void 0;
const react_1 = __importDefault(__webpack_require__(758));
const flattenChildren = (children) => {
    const childrenArray = react_1.default.Children.toArray(children);
    return childrenArray.reduce((flatChildren, child) => {
        if (child.type === react_1.default.Fragment) {
            return flatChildren.concat((0, exports.flattenChildren)(child.props
                .children));
        }
        flatChildren.push(child);
        return flatChildren;
    }, []);
};
exports.flattenChildren = flattenChildren;


/***/ }),

/***/ 9911:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Series = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const Sequence_js_1 = __webpack_require__(8808);
const enable_sequence_stack_traces_js_1 = __webpack_require__(3770);
const v5_flag_js_1 = __webpack_require__(2635);
const validate_duration_in_frames_js_1 = __webpack_require__(1241);
const flatten_children_js_1 = __webpack_require__(6877);
const is_inside_series_js_1 = __webpack_require__(2256);
const SeriesSequenceRefForwardingFunction = ({ children }, _ref) => {
    (0, is_inside_series_js_1.useRequireToBeInsideSeries)();
    // Discard ref
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return (0, jsx_runtime_1.jsx)(is_inside_series_js_1.IsNotInsideSeriesProvider, { children: children });
};
const SeriesSequence = (0, react_1.forwardRef)(SeriesSequenceRefForwardingFunction);
/**
 * @description with this component, you can easily stitch together scenes that should play sequentially after another.
 * @see [Documentation](https://www.remotion.dev/docs/series)
 */
const Series = (props) => {
    const childrenValue = (0, react_1.useMemo)(() => {
        let startFrame = 0;
        const flattenedChildren = (0, flatten_children_js_1.flattenChildren)(props.children);
        return react_1.Children.map(flattenedChildren, (child, i) => {
            var _a;
            const castedChild = child;
            if (typeof castedChild === 'string') {
                // Don't throw if it's just some accidential whitespace
                if (castedChild.trim() === '') {
                    return null;
                }
                throw new TypeError(`The <Series /> component only accepts a list of <Series.Sequence /> components as its children, but you passed a string "${castedChild}"`);
            }
            if (castedChild.type !== SeriesSequence) {
                throw new TypeError(`The <Series /> component only accepts a list of <Series.Sequence /> components as its children, but got ${castedChild} instead`);
            }
            const debugInfo = `index = ${i}, duration = ${castedChild.props.durationInFrames}`;
            if (!(castedChild === null || castedChild === void 0 ? void 0 : castedChild.props.children)) {
                throw new TypeError(`A <Series.Sequence /> component (${debugInfo}) was detected to not have any children. Delete it to fix this error.`);
            }
            const durationInFramesProp = castedChild.props.durationInFrames;
            const { durationInFrames, children: _children, from, name, ...passedProps } = castedChild.props; // `from` is not accepted and must be filtered out if used in JS
            if (i !== flattenedChildren.length - 1 ||
                durationInFramesProp !== Infinity) {
                (0, validate_duration_in_frames_js_1.validateDurationInFrames)(durationInFramesProp, {
                    component: `of a <Series.Sequence /> component`,
                    allowFloats: true,
                });
            }
            const offset = (_a = castedChild.props.offset) !== null && _a !== void 0 ? _a : 0;
            if (Number.isNaN(offset)) {
                throw new TypeError(`The "offset" property of a <Series.Sequence /> must not be NaN, but got NaN (${debugInfo}).`);
            }
            if (!Number.isFinite(offset)) {
                throw new TypeError(`The "offset" property of a <Series.Sequence /> must be finite, but got ${offset} (${debugInfo}).`);
            }
            if (offset % 1 !== 0) {
                throw new TypeError(`The "offset" property of a <Series.Sequence /> must be finite, but got ${offset} (${debugInfo}).`);
            }
            const currentStartFrame = startFrame + offset;
            startFrame += durationInFramesProp + offset;
            return ((0, jsx_runtime_1.jsx)(Sequence_js_1.Sequence, { name: name || '<Series.Sequence>', from: currentStartFrame, durationInFrames: durationInFramesProp, ...passedProps, ref: castedChild.ref, children: child }));
        });
    }, [props.children]);
    if (v5_flag_js_1.ENABLE_V5_BREAKING_CHANGES) {
        return ((0, jsx_runtime_1.jsx)(is_inside_series_js_1.IsInsideSeriesContainer, { children: (0, jsx_runtime_1.jsx)(Sequence_js_1.Sequence, { ...props, children: childrenValue }) }));
    }
    return (0, jsx_runtime_1.jsx)(is_inside_series_js_1.IsInsideSeriesContainer, { children: childrenValue });
};
exports.Series = Series;
Series.Sequence = SeriesSequence;
(0, enable_sequence_stack_traces_js_1.addSequenceStackTraces)(SeriesSequence);


/***/ }),

/***/ 2256:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useRequireToBeInsideSeries = exports.IsNotInsideSeriesProvider = exports.IsInsideSeriesContainer = exports.IsInsideSeriesContext = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __importStar(__webpack_require__(758));
exports.IsInsideSeriesContext = (0, react_1.createContext)(false);
const IsInsideSeriesContainer = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(exports.IsInsideSeriesContext.Provider, { value: true, children: children }));
};
exports.IsInsideSeriesContainer = IsInsideSeriesContainer;
const IsNotInsideSeriesProvider = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(exports.IsInsideSeriesContext.Provider, { value: false, children: children }));
};
exports.IsNotInsideSeriesProvider = IsNotInsideSeriesProvider;
const useRequireToBeInsideSeries = () => {
    const isInsideSeries = react_1.default.useContext(exports.IsInsideSeriesContext);
    if (!isInsideSeries) {
        throw new Error('This component must be inside a <Series /> component.');
    }
};
exports.useRequireToBeInsideSeries = useRequireToBeInsideSeries;


/***/ }),

/***/ 918:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupEnvVariables = void 0;
const get_remotion_environment_js_1 = __webpack_require__(2161);
// https://github.com/remotion-dev/remotion/issues/3412#issuecomment-1910120552
// eslint-disable-next-line no-useless-concat
function getEnvVar() {
    const parts = ['proc', 'ess', '.', 'en', 'v', '.', 'NOD', 'E_EN', 'V'];
    return parts.join('');
}
const getEnvVariables = () => {
    if ((0, get_remotion_environment_js_1.getRemotionEnvironment)().isRendering) {
        const param = window.remotion_envVariables;
        if (!param) {
            return {};
        }
        return { ...JSON.parse(param), NODE_ENV: "production" };
    }
    // For the Studio, we already set the environment variables in index-html.ts.
    // We just add NODE_ENV here.
    if (false) {}
    return {
        NODE_ENV: "production",
    };
};
const setupEnvVariables = () => {
    const env = getEnvVariables();
    if (!window.process) {
        window.process = {};
    }
    if (!window.process.env) {
        window.process.env = {};
    }
    Object.keys(env).forEach((key) => {
        window.process.env[key] = env[key];
    });
};
exports.setupEnvVariables = setupEnvVariables;


/***/ }),

/***/ 5443:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.measureSpring = exports.spring = void 0;
const interpolate_js_1 = __webpack_require__(3242);
const validate_frame_js_1 = __webpack_require__(2847);
const validate_fps_js_1 = __webpack_require__(1309);
const validation_spring_duration_js_1 = __webpack_require__(7283);
const measure_spring_js_1 = __webpack_require__(3473);
const spring_utils_js_1 = __webpack_require__(9246);
/**
 * @description Calculates a position based on physical parameters, start and end value, and time.
 * @see [Documentation](https://www.remotion.dev/docs/spring)
 * @param {number} frame The current time value. Most of the time you want to pass in the return value of useCurrentFrame.
 * @param {number} fps The framerate at which the animation runs. Pass in the value obtained by `useVideoConfig()`.
 * @param {?boolean} reverse Whether the animation plays in reverse or not. Default `false`.
 * @param {?Object} config optional object that allows you to customize the physical properties of the animation.
 * @param {number} [config.mass=1] The weight of the spring. If you reduce the mass, the animation becomes faster!
 * @param {number} [config.damping=10] How hard the animation decelerates.
 * @param {number} [config.stiffness=100] Affects bounciness of the animation.
 * @param {boolean} [config.overshootClamping=false] Whether to prevent the animation going beyond the target value.
 * @param {?number} [config.from] The initial value of the animation. Default `0`
 * @param {?number} [config.to] The end value of the animation. Default `1`
 * @param {?number} [config.durationInFrames] Stretch the duration of an animation to  a set value.. Default `undefined`
 * @param {?number} [config.durationThreshold] How close to the end the animation is considered to be done. Default `0.005`
 * @param {?number} [config.delay] Delay the animation for this amount of frames. Default `0`
 */
function spring({ frame: passedFrame, fps, config = {}, from = 0, to = 1, durationInFrames: passedDurationInFrames, durationRestThreshold, delay = 0, reverse = false, }) {
    (0, validation_spring_duration_js_1.validateSpringDuration)(passedDurationInFrames);
    (0, validate_frame_js_1.validateFrame)({
        frame: passedFrame,
        durationInFrames: Infinity,
        allowFloats: true,
    });
    (0, validate_fps_js_1.validateFps)(fps, 'to spring()', false);
    const needsToCalculateNaturalDuration = reverse || typeof passedDurationInFrames !== 'undefined';
    const naturalDuration = needsToCalculateNaturalDuration
        ? (0, measure_spring_js_1.measureSpring)({
            fps,
            config,
            threshold: durationRestThreshold,
        })
        : undefined;
    const naturalDurationGetter = needsToCalculateNaturalDuration
        ? {
            get: () => naturalDuration,
        }
        : {
            get: () => {
                throw new Error('did not calculate natural duration, this is an error with Remotion. Please report');
            },
        };
    const reverseProcessed = reverse
        ? (passedDurationInFrames !== null && passedDurationInFrames !== void 0 ? passedDurationInFrames : naturalDurationGetter.get()) - passedFrame
        : passedFrame;
    const delayProcessed = reverseProcessed + (reverse ? delay : -delay);
    const durationProcessed = passedDurationInFrames === undefined
        ? delayProcessed
        : delayProcessed / (passedDurationInFrames / naturalDurationGetter.get());
    if (passedDurationInFrames && delayProcessed > passedDurationInFrames) {
        return to;
    }
    const spr = (0, spring_utils_js_1.springCalculation)({
        fps,
        frame: durationProcessed,
        config,
    });
    const inner = config.overshootClamping
        ? to >= from
            ? Math.min(spr.current, to)
            : Math.max(spr.current, to)
        : spr.current;
    const interpolated = from === 0 && to === 1 ? inner : (0, interpolate_js_1.interpolate)(inner, [0, 1], [from, to]);
    return interpolated;
}
exports.spring = spring;
var measure_spring_js_2 = __webpack_require__(3473);
Object.defineProperty(exports, "measureSpring", ({ enumerable: true, get: function () { return measure_spring_js_2.measureSpring; } }));


/***/ }),

/***/ 3473:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.measureSpring = void 0;
const validate_fps_js_1 = __webpack_require__(1309);
const spring_utils_js_1 = __webpack_require__(9246);
const cache = new Map();
/**
 * @description The function returns how long it takes for a spring animation to settle
 * @see [Documentation](https://www.remotion.dev/docs/measure-spring)
 */
function measureSpring({ fps, config = {}, threshold = 0.005, }) {
    if (typeof threshold !== 'number') {
        throw new TypeError(`threshold must be a number, got ${threshold} of type ${typeof threshold}`);
    }
    if (threshold === 0) {
        return Infinity;
    }
    if (threshold === 1) {
        return 0;
    }
    if (isNaN(threshold)) {
        throw new TypeError('Threshold is NaN');
    }
    if (!Number.isFinite(threshold)) {
        throw new TypeError('Threshold is not finite');
    }
    if (threshold < 0) {
        throw new TypeError('Threshold is below 0');
    }
    const cacheKey = [
        fps,
        config.damping,
        config.mass,
        config.overshootClamping,
        config.stiffness,
        threshold,
    ].join('-');
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }
    (0, validate_fps_js_1.validateFps)(fps, 'to the measureSpring() function', false);
    let frame = 0;
    let finishedFrame = 0;
    const calc = () => {
        return (0, spring_utils_js_1.springCalculation)({
            fps,
            frame,
            config,
        });
    };
    let animation = calc();
    const calcDifference = () => {
        return Math.abs(animation.current - animation.toValue);
    };
    let difference = calcDifference();
    while (difference >= threshold) {
        frame++;
        animation = calc();
        difference = calcDifference();
    }
    // Since spring is bouncy, just because it's under the threshold we
    // cannot be sure it's done. We need to animate further until it stays in the
    // threshold for, say, 20 frames.
    finishedFrame = frame;
    for (let i = 0; i < 20; i++) {
        frame++;
        animation = calc();
        difference = calcDifference();
        if (difference >= threshold) {
            i = 0;
            finishedFrame = frame + 1;
        }
    }
    cache.set(cacheKey, finishedFrame);
    return finishedFrame;
}
exports.measureSpring = measureSpring;


/***/ }),

/***/ 9246:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.springCalculation = void 0;
const defaultSpringConfig = {
    damping: 10,
    mass: 1,
    stiffness: 100,
    overshootClamping: false,
};
const advanceCache = {};
function advance({ animation, now, config, }) {
    const { toValue, lastTimestamp, current, velocity } = animation;
    const deltaTime = Math.min(now - lastTimestamp, 64);
    if (config.damping <= 0) {
        throw new Error('Spring damping must be greater than 0, otherwise the spring() animation will never end, causing an infinite loop.');
    }
    const c = config.damping;
    const m = config.mass;
    const k = config.stiffness;
    const cacheKey = [
        toValue,
        lastTimestamp,
        current,
        velocity,
        c,
        m,
        k,
        now,
    ].join('-');
    if (advanceCache[cacheKey]) {
        return advanceCache[cacheKey];
    }
    const v0 = -velocity;
    const x0 = toValue - current;
    const zeta = c / (2 * Math.sqrt(k * m)); // damping ratio
    const omega0 = Math.sqrt(k / m); // undamped angular frequency of the oscillator (rad/ms)
    const omega1 = omega0 * Math.sqrt(1 - zeta ** 2); // exponential decay
    const t = deltaTime / 1000;
    const sin1 = Math.sin(omega1 * t);
    const cos1 = Math.cos(omega1 * t);
    // under damped
    const underDampedEnvelope = Math.exp(-zeta * omega0 * t);
    const underDampedFrag1 = underDampedEnvelope *
        (sin1 * ((v0 + zeta * omega0 * x0) / omega1) + x0 * cos1);
    const underDampedPosition = toValue - underDampedFrag1;
    // This looks crazy -- it's actually just the derivative of the oscillation function
    const underDampedVelocity = zeta * omega0 * underDampedFrag1 -
        underDampedEnvelope *
            (cos1 * (v0 + zeta * omega0 * x0) - omega1 * x0 * sin1);
    // critically damped
    const criticallyDampedEnvelope = Math.exp(-omega0 * t);
    const criticallyDampedPosition = toValue - criticallyDampedEnvelope * (x0 + (v0 + omega0 * x0) * t);
    const criticallyDampedVelocity = criticallyDampedEnvelope *
        (v0 * (t * omega0 - 1) + t * x0 * omega0 * omega0);
    const animationNode = {
        toValue,
        prevPosition: current,
        lastTimestamp: now,
        current: zeta < 1 ? underDampedPosition : criticallyDampedPosition,
        velocity: zeta < 1 ? underDampedVelocity : criticallyDampedVelocity,
    };
    advanceCache[cacheKey] = animationNode;
    return animationNode;
}
const calculationCache = {};
function springCalculation({ frame, fps, config = {}, }) {
    const from = 0;
    const to = 1;
    const cacheKey = [
        frame,
        fps,
        config.damping,
        config.mass,
        config.overshootClamping,
        config.stiffness,
    ].join('-');
    if (calculationCache[cacheKey]) {
        return calculationCache[cacheKey];
    }
    let animation = {
        lastTimestamp: 0,
        current: from,
        toValue: to,
        velocity: 0,
        prevPosition: 0,
    };
    const frameClamped = Math.max(0, frame);
    const unevenRest = frameClamped % 1;
    for (let f = 0; f <= Math.floor(frameClamped); f++) {
        if (f === Math.floor(frameClamped)) {
            f += unevenRest;
        }
        const time = (f / fps) * 1000;
        animation = advance({
            animation,
            now: time,
            config: {
                ...defaultSpringConfig,
                ...config,
            },
        });
    }
    calculationCache[cacheKey] = animation;
    return animation;
}
exports.springCalculation = springCalculation;


/***/ }),

/***/ 3162:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.staticFile = exports.includesHexOfUnsafeChar = void 0;
const problematicCharacters = {
    '%3A': ':',
    '%2F': '/',
    '%3F': '?',
    '%23': '#',
    '%5B': '[',
    '%5D': ']',
    '%40': '@',
    '%21': '!',
    '%24': '$',
    '%26': '&',
    '%27': "'",
    '%28': '(',
    '%29': ')',
    '%2A': '*',
    '%2B': '+',
    '%2C': ',',
    '%3B': ';',
};
const didWarn = {};
const warnOnce = (message) => {
    if (didWarn[message]) {
        return;
    }
    // eslint-disable-next-line no-console
    console.warn(message);
    didWarn[message] = true;
};
const includesHexOfUnsafeChar = (path) => {
    for (const key of Object.keys(problematicCharacters)) {
        if (path.includes(key)) {
            return { containsHex: true, hexCode: key };
        }
    }
    return { containsHex: false };
};
exports.includesHexOfUnsafeChar = includesHexOfUnsafeChar;
const trimLeadingSlash = (path) => {
    if (path.startsWith('/')) {
        return trimLeadingSlash(path.substring(1));
    }
    return path;
};
const inner = (path) => {
    if (typeof window !== 'undefined' && window.remotion_staticBase) {
        if (path.startsWith(window.remotion_staticBase)) {
            throw new Error(`The value "${path}" is already prefixed with the static base ${window.remotion_staticBase}. You don't need to call staticFile() on it.`);
        }
        return `${window.remotion_staticBase}/${trimLeadingSlash(path)}`;
    }
    return `/${trimLeadingSlash(path)}`;
};
const encodeBySplitting = (path) => {
    const splitBySlash = path.split('/');
    const encodedArray = splitBySlash.map((element) => {
        return encodeURIComponent(element);
    });
    const merged = encodedArray.join('/');
    return merged;
};
/**
 * @description Reference a file from the public/ folder. If the file does not appear in the autocomplete, type the path manually.
 * @see [Documentation](https://www.remotion.dev/docs/staticfile)
 */
const staticFile = (path) => {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        throw new TypeError(`staticFile() does not support remote URLs - got "${path}". Instead, pass the URL without wrapping it in staticFile(). See: https://remotion.dev/docs/staticfile-remote-urls`);
    }
    if (path.startsWith('..') || path.startsWith('./')) {
        throw new TypeError(`staticFile() does not support relative paths - got "${path}". Instead, pass the name of a file that is inside the public/ folder. See: https://remotion.dev/docs/staticfile-relative-paths`);
    }
    if (path.startsWith('/Users') ||
        path.startsWith('/home') ||
        path.startsWith('/tmp') ||
        path.startsWith('/etc') ||
        path.startsWith('/opt') ||
        path.startsWith('/var') ||
        path.startsWith('C:') ||
        path.startsWith('D:') ||
        path.startsWith('E:')) {
        throw new TypeError(`staticFile() does not support absolute paths - got "${path}". Instead, pass the name of a file that is inside the public/ folder. See: https://remotion.dev/docs/staticfile-relative-paths`);
    }
    if (path.startsWith('public/')) {
        throw new TypeError(`Do not include the public/ prefix when using staticFile() - got "${path}". See: https://remotion.dev/docs/staticfile-relative-paths`);
    }
    const includesHex = (0, exports.includesHexOfUnsafeChar)(path);
    if (includesHex.containsHex) {
        warnOnce(`WARNING: You seem to pass an already encoded path (path contains ${includesHex.hexCode}). Since Remotion 4.0, the encoding is done by staticFile() itself. You may want to remove a encodeURIComponent() wrapping.`);
    }
    const preprocessed = encodeBySplitting(path);
    const preparsed = inner(preprocessed);
    if (!preparsed.startsWith('/')) {
        return `/${preparsed}`;
    }
    return preparsed;
};
exports.staticFile = staticFile;


/***/ }),

/***/ 5488:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.usePlayingState = exports.useTimelineSetFrame = exports.useTimelinePosition = exports.getFrameForComposition = exports.getInitialFrameState = exports.persistCurrentFrame = exports.SetTimelineContext = exports.TimelineContext = void 0;
const react_1 = __webpack_require__(758);
const get_remotion_environment_js_1 = __webpack_require__(2161);
const use_video_js_1 = __webpack_require__(2768);
exports.TimelineContext = (0, react_1.createContext)({
    frame: {},
    playing: false,
    playbackRate: 1,
    rootId: '',
    imperativePlaying: {
        current: false,
    },
    setPlaybackRate: () => {
        throw new Error('default');
    },
    audioAndVideoTags: { current: [] },
});
exports.SetTimelineContext = (0, react_1.createContext)({
    setFrame: () => {
        throw new Error('default');
    },
    setPlaying: () => {
        throw new Error('default');
    },
});
const makeKey = () => {
    return `remotion.time-all`;
};
const persistCurrentFrame = (time) => {
    localStorage.setItem(makeKey(), JSON.stringify(time));
};
exports.persistCurrentFrame = persistCurrentFrame;
const getInitialFrameState = () => {
    var _a;
    const item = (_a = localStorage.getItem(makeKey())) !== null && _a !== void 0 ? _a : '{}';
    const obj = JSON.parse(item);
    return obj;
};
exports.getInitialFrameState = getInitialFrameState;
const getFrameForComposition = (composition) => {
    var _a, _b;
    const item = (_a = localStorage.getItem(makeKey())) !== null && _a !== void 0 ? _a : '{}';
    const obj = JSON.parse(item);
    if (obj[composition] !== undefined) {
        return Number(obj[composition]);
    }
    if (typeof window === 'undefined') {
        return 0;
    }
    return (_b = window.remotion_initialFrame) !== null && _b !== void 0 ? _b : 0;
};
exports.getFrameForComposition = getFrameForComposition;
const useTimelinePosition = () => {
    var _a, _b;
    const videoConfig = (0, use_video_js_1.useVideo)();
    const state = (0, react_1.useContext)(exports.TimelineContext);
    if (!videoConfig) {
        return typeof window === 'undefined'
            ? 0
            : (_a = window.remotion_initialFrame) !== null && _a !== void 0 ? _a : 0;
    }
    const unclamped = (_b = state.frame[videoConfig.id]) !== null && _b !== void 0 ? _b : ((0, get_remotion_environment_js_1.getRemotionEnvironment)().isPlayer
        ? 0
        : (0, exports.getFrameForComposition)(videoConfig.id));
    return Math.min(videoConfig.durationInFrames - 1, unclamped);
};
exports.useTimelinePosition = useTimelinePosition;
const useTimelineSetFrame = () => {
    const { setFrame } = (0, react_1.useContext)(exports.SetTimelineContext);
    return setFrame;
};
exports.useTimelineSetFrame = useTimelineSetFrame;
const usePlayingState = () => {
    const { playing, imperativePlaying } = (0, react_1.useContext)(exports.TimelineContext);
    const { setPlaying } = (0, react_1.useContext)(exports.SetTimelineContext);
    return (0, react_1.useMemo)(() => [playing, setPlaying, imperativePlaying], [imperativePlaying, playing, setPlaying]);
};
exports.usePlayingState = usePlayingState;


/***/ }),

/***/ 9609:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.truthy = void 0;
function truthy(value) {
    return Boolean(value);
}
exports.truthy = truthy;


/***/ }),

/***/ 8561:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useBufferState = void 0;
const react_1 = __webpack_require__(758);
const buffering_1 = __webpack_require__(9211);
const useBufferState = () => {
    const buffer = (0, react_1.useContext)(buffering_1.BufferingContextReact);
    // Allows <Img> tag to be rendered without a context
    // https://github.com/remotion-dev/remotion/issues/4007
    const addBlock = buffer ? buffer.addBlock : null;
    return (0, react_1.useMemo)(() => ({
        delayPlayback: () => {
            if (!addBlock) {
                throw new Error('Tried to enable the buffering state, but a Remotion context was not found. This API can only be called in a component that was passed to the Remotion Player or a <Composition>. Or you might have experienced a version mismatch - run `npx remotion versions` and ensure all packages have the same version. This error is thrown by the buffer state https://remotion.dev/docs/player/buffer-state');
            }
            const { unblock } = addBlock({
                id: String(Math.random()),
            });
            return { unblock };
        },
    }), [addBlock]);
};
exports.useBufferState = useBufferState;


/***/ }),

/***/ 6606:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useCurrentFrame = void 0;
const react_1 = __webpack_require__(758);
const CanUseRemotionHooks_js_1 = __webpack_require__(7803);
const SequenceContext_js_1 = __webpack_require__(3981);
const get_remotion_environment_js_1 = __webpack_require__(2161);
const timeline_position_state_js_1 = __webpack_require__(5488);
/**
 * @description Get the current frame of the video. Frames are 0-indexed, meaning the first frame is 0, the last frame is the duration of the composition in frames minus one.
 * @see [Documentation](https://remotion.dev/docs/use-current-frame)
 */
const useCurrentFrame = () => {
    const canUseRemotionHooks = (0, react_1.useContext)(CanUseRemotionHooks_js_1.CanUseRemotionHooks);
    if (!canUseRemotionHooks) {
        if ((0, get_remotion_environment_js_1.getRemotionEnvironment)().isPlayer) {
            throw new Error(`useCurrentFrame can only be called inside a component that was passed to <Player>. See: https://www.remotion.dev/docs/player/examples`);
        }
        throw new Error(`useCurrentFrame() can only be called inside a component that was registered as a composition. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions`);
    }
    const frame = (0, timeline_position_state_js_1.useTimelinePosition)();
    const context = (0, react_1.useContext)(SequenceContext_js_1.SequenceContext);
    const contextOffset = context
        ? context.cumulatedFrom + context.relativeFrom
        : 0;
    return frame - contextOffset;
};
exports.useCurrentFrame = useCurrentFrame;


/***/ }),

/***/ 5341:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useCurrentScale = exports.calculateScale = exports.PreviewSizeContext = exports.CurrentScaleContext = void 0;
const react_1 = __importStar(__webpack_require__(758));
const get_remotion_environment_1 = __webpack_require__(2161);
const use_unsafe_video_config_1 = __webpack_require__(3782);
exports.CurrentScaleContext = react_1.default.createContext(null);
exports.PreviewSizeContext = (0, react_1.createContext)({
    setSize: () => undefined,
    size: { size: 'auto', translation: { x: 0, y: 0 } },
});
const calculateScale = ({ canvasSize, compositionHeight, compositionWidth, previewSize, }) => {
    const heightRatio = canvasSize.height / compositionHeight;
    const widthRatio = canvasSize.width / compositionWidth;
    const ratio = Math.min(heightRatio, widthRatio);
    return previewSize === 'auto' ? ratio : Number(previewSize);
};
exports.calculateScale = calculateScale;
/**
 * Gets the current scale of the container in which the component is being rendered.
 * Only works in the Remotion Studio and in the Remotion Player.
 */
const useCurrentScale = (options) => {
    const hasContext = react_1.default.useContext(exports.CurrentScaleContext);
    const zoomContext = react_1.default.useContext(exports.PreviewSizeContext);
    const config = (0, use_unsafe_video_config_1.useUnsafeVideoConfig)();
    if (hasContext === null || config === null || zoomContext === null) {
        if (options === null || options === void 0 ? void 0 : options.dontThrowIfOutsideOfRemotion) {
            return 1;
        }
        if ((0, get_remotion_environment_1.getRemotionEnvironment)().isRendering) {
            return 1;
        }
        throw new Error([
            'useCurrentScale() was called outside of a Remotion context.',
            'This hook can only be called in a component that is being rendered by Remotion.',
            'If you want to this hook to return 1 outside of Remotion, pass {dontThrowIfOutsideOfRemotion: true} as an option.',
            'If you think you called this hook in a Remotion component, make sure all versions of Remotion are aligned.',
        ].join('\n'));
    }
    if (hasContext.type === 'scale') {
        return hasContext.scale;
    }
    return (0, exports.calculateScale)({
        canvasSize: hasContext.canvasSize,
        compositionHeight: config.height,
        compositionWidth: config.width,
        previewSize: zoomContext.size.size,
    });
};
exports.useCurrentScale = useCurrentScale;


/***/ }),

/***/ 3855:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useLazyComponent = void 0;
const react_1 = __importStar(__webpack_require__(758));
// Expected, it can be any component props
const useLazyComponent = (compProps) => {
    const lazy = (0, react_1.useMemo)(() => {
        if ('lazyComponent' in compProps &&
            typeof compProps.lazyComponent !== 'undefined') {
            return react_1.default.lazy(compProps.lazyComponent);
        }
        if ('component' in compProps) {
            // In SSR, suspense is not yet supported, we cannot use React.lazy
            if (typeof document === 'undefined') {
                return compProps.component;
            }
            return react_1.default.lazy(() => Promise.resolve({ default: compProps.component }));
        }
        throw new Error("You must pass either 'component' or 'lazyComponent'");
        // Very important to leave the dependencies as they are, or instead
        // the player will remount on every frame.
        // @ts-expect-error
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [compProps.component, compProps.lazyComponent]);
    return lazy;
};
exports.useLazyComponent = useLazyComponent;


/***/ }),

/***/ 6004:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMediaBuffering = void 0;
const react_1 = __webpack_require__(758);
const use_buffer_state_1 = __webpack_require__(8561);
const useMediaBuffering = ({ element, shouldBuffer, isPremounting, }) => {
    const buffer = (0, use_buffer_state_1.useBufferState)();
    const [isBuffering, setIsBuffering] = (0, react_1.useState)(false);
    // Buffer state based on `waiting` and `canplay`
    (0, react_1.useEffect)(() => {
        let cleanupFns = [];
        const { current } = element;
        if (!current) {
            return;
        }
        if (!shouldBuffer) {
            return;
        }
        if (isPremounting) {
            return;
        }
        const cleanup = () => {
            cleanupFns.forEach((fn) => fn());
            cleanupFns = [];
            setIsBuffering(false);
        };
        const onWaiting = () => {
            setIsBuffering(true);
            const { unblock } = buffer.delayPlayback();
            const onCanPlay = () => {
                cleanup();
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                init();
            };
            const onError = () => {
                cleanup();
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                init();
            };
            current.addEventListener('canplay', onCanPlay, {
                once: true,
            });
            cleanupFns.push(() => {
                current.removeEventListener('canplay', onCanPlay);
            });
            current.addEventListener('error', onError, {
                once: true,
            });
            cleanupFns.push(() => {
                current.removeEventListener('error', onError);
            });
            cleanupFns.push(() => {
                unblock();
            });
        };
        const init = () => {
            if (current.readyState < current.HAVE_FUTURE_DATA) {
                onWaiting();
                // Needed by iOS Safari which will not load by default
                // and therefore not fire the canplay event.
                // Be cautious about using `current.load()` as it will
                // reset if a video is already playing.
                // Therefore only calling it after checking if the video
                // has no future data.
                // Breaks on Firefox though: https://github.com/remotion-dev/remotion/issues/3915
                if (!navigator.userAgent.includes('Firefox/')) {
                    current.load();
                }
            }
            else {
                current.addEventListener('waiting', onWaiting);
                cleanupFns.push(() => {
                    current.removeEventListener('waiting', onWaiting);
                });
            }
        };
        init();
        return () => {
            cleanup();
        };
    }, [buffer, element, isPremounting, shouldBuffer]);
    return isBuffering;
};
exports.useMediaBuffering = useMediaBuffering;


/***/ }),

/***/ 5139:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMediaInTimeline = void 0;
const react_1 = __webpack_require__(758);
const SequenceContext_js_1 = __webpack_require__(3981);
const SequenceManager_js_1 = __webpack_require__(6109);
const use_audio_frame_js_1 = __webpack_require__(1976);
const get_asset_file_name_js_1 = __webpack_require__(3883);
const get_remotion_environment_js_1 = __webpack_require__(2161);
const nonce_js_1 = __webpack_require__(5574);
const play_and_handle_not_allowed_error_js_1 = __webpack_require__(7600);
const timeline_position_state_js_1 = __webpack_require__(5488);
const use_video_config_js_1 = __webpack_require__(3299);
const volume_prop_js_1 = __webpack_require__(3641);
const didWarn = {};
const warnOnce = (message) => {
    if (didWarn[message]) {
        return;
    }
    // eslint-disable-next-line no-console
    console.warn(message);
    didWarn[message] = true;
};
const useMediaInTimeline = ({ volume, mediaVolume, mediaRef, src, mediaType, playbackRate, displayName, id, stack, showInTimeline, premountDisplay, onAutoPlayError, }) => {
    const videoConfig = (0, use_video_config_js_1.useVideoConfig)();
    const { rootId, audioAndVideoTags } = (0, react_1.useContext)(timeline_position_state_js_1.TimelineContext);
    const parentSequence = (0, react_1.useContext)(SequenceContext_js_1.SequenceContext);
    const actualFrom = parentSequence
        ? parentSequence.relativeFrom + parentSequence.cumulatedFrom
        : 0;
    const [playing] = (0, timeline_position_state_js_1.usePlayingState)();
    const startsAt = (0, use_audio_frame_js_1.useMediaStartsAt)();
    const { registerSequence, unregisterSequence } = (0, react_1.useContext)(SequenceManager_js_1.SequenceManager);
    const [initialVolume] = (0, react_1.useState)(() => volume);
    const nonce = (0, nonce_js_1.useNonce)();
    const duration = parentSequence
        ? Math.min(parentSequence.durationInFrames, videoConfig.durationInFrames)
        : videoConfig.durationInFrames;
    const doesVolumeChange = typeof volume === 'function';
    const volumes = (0, react_1.useMemo)(() => {
        if (typeof volume === 'number') {
            return volume;
        }
        return new Array(Math.floor(Math.max(0, duration + startsAt)))
            .fill(true)
            .map((_, i) => {
            return (0, volume_prop_js_1.evaluateVolume)({
                frame: i + startsAt,
                volume,
                mediaVolume,
                allowAmplificationDuringRender: false,
            });
        })
            .join(',');
    }, [duration, startsAt, volume, mediaVolume]);
    (0, react_1.useEffect)(() => {
        if (typeof volume === 'number' && volume !== initialVolume) {
            warnOnce(`Remotion: The ${mediaType} with src ${src} has changed it's volume. Prefer the callback syntax for setting volume to get better timeline display: https://www.remotion.dev/docs/using-audio/#controlling-volume`);
        }
    }, [initialVolume, mediaType, src, volume]);
    (0, react_1.useEffect)(() => {
        var _a, _b, _c;
        if (!mediaRef.current) {
            return;
        }
        if (!src) {
            throw new Error('No src passed');
        }
        if (!(0, get_remotion_environment_js_1.getRemotionEnvironment)().isStudio &&
            ((_b = (_a = window.process) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.NODE_ENV) !== 'test') {
            return;
        }
        if (!showInTimeline) {
            return;
        }
        registerSequence({
            type: mediaType,
            src,
            id,
            duration,
            from: 0,
            parent: (_c = parentSequence === null || parentSequence === void 0 ? void 0 : parentSequence.id) !== null && _c !== void 0 ? _c : null,
            displayName: displayName !== null && displayName !== void 0 ? displayName : (0, get_asset_file_name_js_1.getAssetDisplayName)(src),
            rootId,
            volume: volumes,
            showInTimeline: true,
            nonce,
            startMediaFrom: 0 - startsAt,
            doesVolumeChange,
            loopDisplay: undefined,
            playbackRate,
            stack,
            premountDisplay,
        });
        return () => {
            unregisterSequence(id);
        };
    }, [
        actualFrom,
        duration,
        id,
        parentSequence,
        src,
        registerSequence,
        rootId,
        unregisterSequence,
        videoConfig,
        volumes,
        doesVolumeChange,
        nonce,
        mediaRef,
        mediaType,
        startsAt,
        playbackRate,
        displayName,
        stack,
        showInTimeline,
        premountDisplay,
    ]);
    (0, react_1.useEffect)(() => {
        const tag = {
            id,
            play: () => {
                if (!playing) {
                    // Don't play if for example in a <Freeze> state.
                    return;
                }
                return (0, play_and_handle_not_allowed_error_js_1.playAndHandleNotAllowedError)(mediaRef, mediaType, onAutoPlayError);
            },
        };
        audioAndVideoTags.current.push(tag);
        return () => {
            audioAndVideoTags.current = audioAndVideoTags.current.filter((a) => a.id !== id);
        };
    }, [audioAndVideoTags, id, mediaRef, mediaType, onAutoPlayError, playing]);
};
exports.useMediaInTimeline = useMediaInTimeline;


/***/ }),

/***/ 7649:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMediaPlayback = exports.DEFAULT_ACCEPTABLE_TIMESHIFT = void 0;
const react_1 = __webpack_require__(758);
const use_audio_frame_js_1 = __webpack_require__(1976);
const buffer_until_first_frame_js_1 = __webpack_require__(9797);
const buffering_js_1 = __webpack_require__(9211);
const play_and_handle_not_allowed_error_js_1 = __webpack_require__(7600);
const timeline_position_state_js_1 = __webpack_require__(5488);
const use_current_frame_js_1 = __webpack_require__(6606);
const use_media_buffering_js_1 = __webpack_require__(6004);
const use_request_video_callback_time_js_1 = __webpack_require__(342);
const use_video_config_js_1 = __webpack_require__(3299);
const get_current_time_js_1 = __webpack_require__(2287);
const video_fragment_js_1 = __webpack_require__(131);
const warn_about_non_seekable_media_js_1 = __webpack_require__(8489);
exports.DEFAULT_ACCEPTABLE_TIMESHIFT = 0.45;
const seek = (mediaRef, time) => {
    if (!mediaRef.current) {
        return;
    }
    // iOS seeking does not support multiple decimals
    const timeToSet = (0, video_fragment_js_1.isIosSafari)() ? Number(time.toFixed(1)) : time;
    mediaRef.current.currentTime = timeToSet;
};
const useMediaPlayback = ({ mediaRef, src, mediaType, playbackRate: localPlaybackRate, onlyWarnForMediaSeekingError, acceptableTimeshift, pauseWhenBuffering, isPremounting, debugSeeking, onAutoPlayError, }) => {
    const { playbackRate: globalPlaybackRate } = (0, react_1.useContext)(timeline_position_state_js_1.TimelineContext);
    const frame = (0, use_current_frame_js_1.useCurrentFrame)();
    const absoluteFrame = (0, timeline_position_state_js_1.useTimelinePosition)();
    const [playing] = (0, timeline_position_state_js_1.usePlayingState)();
    const buffering = (0, react_1.useContext)(buffering_js_1.BufferingContextReact);
    const { fps } = (0, use_video_config_js_1.useVideoConfig)();
    const mediaStartsAt = (0, use_audio_frame_js_1.useMediaStartsAt)();
    const lastSeekDueToShift = (0, react_1.useRef)(null);
    const lastSeek = (0, react_1.useRef)(null);
    if (!buffering) {
        throw new Error('useMediaPlayback must be used inside a <BufferingContext>');
    }
    const isVariableFpsVideoMap = (0, react_1.useRef)({});
    const onVariableFpsVideoDetected = (0, react_1.useCallback)(() => {
        if (!src) {
            return;
        }
        if (debugSeeking) {
            // eslint-disable-next-line no-console
            console.log(`Detected ${src} as a variable FPS video. Disabling buffering while seeking.`);
        }
        isVariableFpsVideoMap.current[src] = true;
    }, [debugSeeking, src]);
    const currentTime = (0, use_request_video_callback_time_js_1.useRequestVideoCallbackTime)({
        mediaRef,
        mediaType,
        lastSeek,
        onVariableFpsVideoDetected,
    });
    const desiredUnclampedTime = (0, get_current_time_js_1.getMediaTime)({
        frame,
        playbackRate: localPlaybackRate,
        startFrom: -mediaStartsAt,
        fps,
    });
    const isMediaTagBuffering = (0, use_media_buffering_js_1.useMediaBuffering)({
        element: mediaRef,
        shouldBuffer: pauseWhenBuffering,
        isPremounting,
    });
    const { bufferUntilFirstFrame, isBuffering } = (0, buffer_until_first_frame_js_1.useBufferUntilFirstFrame)({
        mediaRef,
        mediaType,
        onVariableFpsVideoDetected,
        pauseWhenBuffering,
    });
    const playbackRate = localPlaybackRate * globalPlaybackRate;
    // For short audio, a lower acceptable time shift is used
    const acceptableTimeShiftButLessThanDuration = (() => {
        var _a;
        if ((_a = mediaRef.current) === null || _a === void 0 ? void 0 : _a.duration) {
            return Math.min(mediaRef.current.duration, acceptableTimeshift !== null && acceptableTimeshift !== void 0 ? acceptableTimeshift : exports.DEFAULT_ACCEPTABLE_TIMESHIFT);
        }
        return acceptableTimeshift;
    })();
    (0, react_1.useEffect)(() => {
        var _a, _b;
        if (!playing) {
            (_a = mediaRef.current) === null || _a === void 0 ? void 0 : _a.pause();
            return;
        }
        const isPlayerBuffering = buffering.buffering.current;
        const isMediaTagBufferingOrStalled = isMediaTagBuffering || isBuffering();
        if (isPlayerBuffering && !isMediaTagBufferingOrStalled) {
            (_b = mediaRef.current) === null || _b === void 0 ? void 0 : _b.pause();
        }
    }, [
        buffering.buffering,
        isBuffering,
        isMediaTagBuffering,
        mediaRef,
        playing,
    ]);
    (0, react_1.useEffect)(() => {
        var _a;
        const tagName = mediaType === 'audio' ? '<Audio>' : '<Video>';
        if (!mediaRef.current) {
            throw new Error(`No ${mediaType} ref found`);
        }
        if (!src) {
            throw new Error(`No 'src' attribute was passed to the ${tagName} element.`);
        }
        const playbackRateToSet = Math.max(0, playbackRate);
        if (mediaRef.current.playbackRate !== playbackRateToSet) {
            mediaRef.current.playbackRate = playbackRateToSet;
        }
        const { duration } = mediaRef.current;
        const shouldBeTime = !Number.isNaN(duration) && Number.isFinite(duration)
            ? Math.min(duration, desiredUnclampedTime)
            : desiredUnclampedTime;
        const mediaTagTime = mediaRef.current.currentTime;
        const rvcTime = (_a = currentTime.current) !== null && _a !== void 0 ? _a : null;
        const isVariableFpsVideo = isVariableFpsVideoMap.current[src];
        const timeShiftMediaTag = Math.abs(shouldBeTime - mediaTagTime);
        const timeShiftRvcTag = rvcTime ? Math.abs(shouldBeTime - rvcTime) : null;
        const timeShift = timeShiftRvcTag && !isVariableFpsVideo
            ? timeShiftRvcTag
            : timeShiftMediaTag;
        if (debugSeeking) {
            // eslint-disable-next-line no-console
            console.log({
                mediaTagTime,
                rvcTime,
                shouldBeTime,
                state: mediaRef.current.readyState,
                playing: !mediaRef.current.paused,
                isVariableFpsVideo,
            });
        }
        if (timeShift > acceptableTimeShiftButLessThanDuration &&
            lastSeekDueToShift.current !== shouldBeTime) {
            // If scrubbing around, adjust timing
            // or if time shift is bigger than 0.45sec
            if (debugSeeking) {
                // eslint-disable-next-line no-console
                console.log('Seeking', {
                    shouldBeTime,
                    isTime: mediaTagTime,
                    rvcTime,
                    timeShift,
                    isVariableFpsVideo,
                });
            }
            seek(mediaRef, shouldBeTime);
            lastSeek.current = shouldBeTime;
            lastSeekDueToShift.current = shouldBeTime;
            if (playing && !isVariableFpsVideo) {
                if (playbackRate > 0) {
                    bufferUntilFirstFrame(shouldBeTime);
                }
                if (mediaRef.current.paused) {
                    (0, play_and_handle_not_allowed_error_js_1.playAndHandleNotAllowedError)(mediaRef, mediaType, onAutoPlayError);
                }
            }
            if (!onlyWarnForMediaSeekingError) {
                (0, warn_about_non_seekable_media_js_1.warnAboutNonSeekableMedia)(mediaRef.current, onlyWarnForMediaSeekingError ? 'console-warning' : 'console-error');
            }
            return;
        }
        const seekThreshold = playing ? 0.15 : 0.00001;
        // Only perform a seek if the time is not already the same.
        // Chrome rounds to 6 digits, so 0.033333333 -> 0.033333,
        // therefore a threshold is allowed.
        // Refer to the https://github.com/remotion-dev/video-buffering-example
        // which is fixed by only seeking conditionally.
        const makesSenseToSeek = Math.abs(mediaRef.current.currentTime - shouldBeTime) > seekThreshold;
        const isMediaTagBufferingOrStalled = isMediaTagBuffering || isBuffering();
        const isSomethingElseBuffering = buffering.buffering.current && !isMediaTagBufferingOrStalled;
        if (!playing || isSomethingElseBuffering) {
            if (makesSenseToSeek) {
                seek(mediaRef, shouldBeTime);
                lastSeek.current = shouldBeTime;
            }
            return;
        }
        // We assured we are in playing state
        if ((mediaRef.current.paused && !mediaRef.current.ended) ||
            absoluteFrame === 0) {
            if (makesSenseToSeek) {
                seek(mediaRef, shouldBeTime);
                lastSeek.current = shouldBeTime;
            }
            (0, play_and_handle_not_allowed_error_js_1.playAndHandleNotAllowedError)(mediaRef, mediaType, onAutoPlayError);
            if (!isVariableFpsVideo) {
                if (playbackRate > 0) {
                    bufferUntilFirstFrame(shouldBeTime);
                }
            }
        }
    }, [
        absoluteFrame,
        acceptableTimeShiftButLessThanDuration,
        bufferUntilFirstFrame,
        buffering.buffering,
        currentTime,
        debugSeeking,
        desiredUnclampedTime,
        isBuffering,
        isMediaTagBuffering,
        mediaRef,
        mediaType,
        onlyWarnForMediaSeekingError,
        playbackRate,
        playing,
        src,
        onAutoPlayError,
    ]);
};
exports.useMediaPlayback = useMediaPlayback;


/***/ }),

/***/ 8865:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMediaTagVolume = void 0;
const react_1 = __webpack_require__(758);
// Returns the real volume of the audio or video while playing,
// no matter what the supposed volume should be
const useMediaTagVolume = (mediaRef) => {
    const [actualVolume, setActualVolume] = (0, react_1.useState)(1);
    (0, react_1.useEffect)(() => {
        const ref = mediaRef.current;
        if (!ref) {
            return;
        }
        const onChange = () => {
            setActualVolume(ref.volume);
        };
        ref.addEventListener('volumechange', onChange);
        return () => ref.removeEventListener('volumechange', onChange);
    }, [mediaRef]);
    (0, react_1.useEffect)(() => {
        const ref = mediaRef.current;
        if (!ref) {
            return;
        }
        if (ref.volume !== actualVolume) {
            setActualVolume(ref.volume);
        }
    }, [actualVolume, mediaRef]);
    return actualVolume;
};
exports.useMediaTagVolume = useMediaTagVolume;


/***/ }),

/***/ 342:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useRequestVideoCallbackTime = void 0;
const react_1 = __webpack_require__(758);
const useRequestVideoCallbackTime = ({ mediaRef, mediaType, lastSeek, onVariableFpsVideoDetected, }) => {
    const currentTime = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const { current } = mediaRef;
        if (current) {
            currentTime.current = current.currentTime;
        }
        else {
            currentTime.current = null;
            return;
        }
        if (mediaType !== 'video') {
            currentTime.current = null;
            return;
        }
        const videoTag = current;
        if (!videoTag.requestVideoFrameCallback) {
            return;
        }
        let cancel = () => undefined;
        const request = () => {
            if (!videoTag) {
                return;
            }
            const cb = videoTag.requestVideoFrameCallback((_, info) => {
                if (currentTime.current !== null) {
                    const difference = Math.abs(currentTime.current - info.mediaTime);
                    const differenceToLastSeek = Math.abs(lastSeek.current === null
                        ? Infinity
                        : info.mediaTime - lastSeek.current);
                    // If a video suddenly jumps to a position much further than previously
                    // and there was no relevant seek
                    // Case to be seen with 66a4a49b0862333a56c7d03c.mp4 and autoPlay and pauseWhenBuffering
                    if (difference > 0.5 &&
                        differenceToLastSeek > 0.5 &&
                        info.mediaTime > currentTime.current) {
                        onVariableFpsVideoDetected();
                    }
                }
                currentTime.current = info.mediaTime;
                request();
            });
            cancel = () => {
                videoTag.cancelVideoFrameCallback(cb);
                cancel = () => undefined;
            };
        };
        request();
        return () => {
            cancel();
        };
    }, [lastSeek, mediaRef, mediaType, onVariableFpsVideoDetected]);
    return currentTime;
};
exports.useRequestVideoCallbackTime = useRequestVideoCallbackTime;


/***/ }),

/***/ 9752:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useSyncVolumeWithMediaTag = void 0;
const react_1 = __webpack_require__(758);
const is_approximately_the_same_js_1 = __webpack_require__(3874);
const volume_prop_js_1 = __webpack_require__(3641);
const useSyncVolumeWithMediaTag = ({ volumePropFrame, actualVolume, volume, mediaVolume, mediaRef, }) => {
    (0, react_1.useEffect)(() => {
        const userPreferredVolume = (0, volume_prop_js_1.evaluateVolume)({
            frame: volumePropFrame,
            volume,
            mediaVolume,
            allowAmplificationDuringRender: false,
        });
        if (!(0, is_approximately_the_same_js_1.isApproximatelyTheSame)(userPreferredVolume, actualVolume) &&
            mediaRef.current) {
            mediaRef.current.volume = userPreferredVolume;
        }
    }, [actualVolume, volumePropFrame, mediaRef, volume, mediaVolume]);
};
exports.useSyncVolumeWithMediaTag = useSyncVolumeWithMediaTag;


/***/ }),

/***/ 3782:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useUnsafeVideoConfig = void 0;
const react_1 = __webpack_require__(758);
const SequenceContext_js_1 = __webpack_require__(3981);
const use_video_js_1 = __webpack_require__(2768);
const useUnsafeVideoConfig = () => {
    var _a, _b, _c;
    const context = (0, react_1.useContext)(SequenceContext_js_1.SequenceContext);
    const ctxWidth = (_a = context === null || context === void 0 ? void 0 : context.width) !== null && _a !== void 0 ? _a : null;
    const ctxHeight = (_b = context === null || context === void 0 ? void 0 : context.height) !== null && _b !== void 0 ? _b : null;
    const ctxDuration = (_c = context === null || context === void 0 ? void 0 : context.durationInFrames) !== null && _c !== void 0 ? _c : null;
    const video = (0, use_video_js_1.useVideo)();
    return (0, react_1.useMemo)(() => {
        if (!video) {
            return null;
        }
        const { id, durationInFrames, fps, height, width, defaultProps, props, defaultCodec, } = video;
        return {
            id,
            width: ctxWidth !== null && ctxWidth !== void 0 ? ctxWidth : width,
            height: ctxHeight !== null && ctxHeight !== void 0 ? ctxHeight : height,
            fps,
            durationInFrames: ctxDuration !== null && ctxDuration !== void 0 ? ctxDuration : durationInFrames,
            defaultProps,
            props,
            defaultCodec,
        };
    }, [ctxDuration, ctxHeight, ctxWidth, video]);
};
exports.useUnsafeVideoConfig = useUnsafeVideoConfig;


/***/ }),

/***/ 3299:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useVideoConfig = void 0;
const react_1 = __webpack_require__(758);
const CanUseRemotionHooks_js_1 = __webpack_require__(7803);
const is_player_js_1 = __webpack_require__(19);
const use_unsafe_video_config_js_1 = __webpack_require__(3782);
/**
 * @description Get some info about the context of the video that you are making.
 * @see [Documentation](https://www.remotion.dev/docs/use-video-config)
 * @returns Returns an object containing `fps`, `width`, `height`, `durationInFrames`, `id` and `defaultProps`.
 */
const useVideoConfig = () => {
    const videoConfig = (0, use_unsafe_video_config_js_1.useUnsafeVideoConfig)();
    const context = (0, react_1.useContext)(CanUseRemotionHooks_js_1.CanUseRemotionHooks);
    const isPlayer = (0, is_player_js_1.useIsPlayer)();
    if (!videoConfig) {
        if ((typeof window !== 'undefined' && window.remotion_isPlayer) ||
            isPlayer) {
            throw new Error([
                'No video config found. Likely reasons:',
                '- You are probably calling useVideoConfig() from outside the component passed to <Player />. See https://www.remotion.dev/docs/player/examples for how to set up the Player correctly.',
                '- You have multiple versions of Remotion installed which causes the React context to get lost.',
            ].join('-'));
        }
        throw new Error('No video config found. You are probably calling useVideoConfig() from a component which has not been registered as a <Composition />. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions for more information.');
    }
    if (!context) {
        throw new Error('Called useVideoConfig() outside a Remotion composition.');
    }
    return videoConfig;
};
exports.useVideoConfig = useVideoConfig;


/***/ }),

/***/ 2768:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useVideo = void 0;
const react_1 = __webpack_require__(758);
const CompositionManagerContext_js_1 = __webpack_require__(809);
const ResolveCompositionConfig_js_1 = __webpack_require__(6905);
const useVideo = () => {
    var _a;
    const { canvasContent, compositions, currentCompositionMetadata } = (0, react_1.useContext)(CompositionManagerContext_js_1.CompositionManager);
    const selected = compositions.find((c) => {
        return ((canvasContent === null || canvasContent === void 0 ? void 0 : canvasContent.type) === 'composition' &&
            c.id === canvasContent.compositionId);
    });
    const resolved = (0, ResolveCompositionConfig_js_1.useResolvedVideoConfig)((_a = selected === null || selected === void 0 ? void 0 : selected.id) !== null && _a !== void 0 ? _a : null);
    return (0, react_1.useMemo)(() => {
        var _a;
        if (!resolved) {
            return null;
        }
        if (resolved.type === 'error') {
            return null;
        }
        if (resolved.type === 'loading') {
            return null;
        }
        if (!selected) {
            return null;
        }
        return {
            ...resolved.result,
            defaultProps: (_a = selected.defaultProps) !== null && _a !== void 0 ? _a : {},
            id: selected.id,
            // We override the selected metadata with the metadata that was passed to renderMedia(),
            // and don't allow it to be changed during render anymore
            ...(currentCompositionMetadata !== null && currentCompositionMetadata !== void 0 ? currentCompositionMetadata : {}),
            component: selected.component,
        };
    }, [currentCompositionMetadata, resolved, selected]);
};
exports.useVideo = useVideo;


/***/ }),

/***/ 2635:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ENABLE_V5_BREAKING_CHANGES = void 0;
exports.ENABLE_V5_BREAKING_CHANGES = false;


/***/ }),

/***/ 2847:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateFrame = void 0;
const validateFrame = ({ allowFloats, durationInFrames, frame, }) => {
    if (typeof frame === 'undefined') {
        throw new TypeError(`Argument missing for parameter "frame"`);
    }
    if (typeof frame !== 'number') {
        throw new TypeError(`Argument passed for "frame" is not a number: ${frame}`);
    }
    if (!Number.isFinite(frame)) {
        throw new RangeError(`Frame ${frame} is not finite`);
    }
    if (frame % 1 !== 0 && !allowFloats) {
        throw new RangeError(`Argument for frame must be an integer, but got ${frame}`);
    }
    if (frame < 0 && frame < -durationInFrames) {
        throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the lowest frame that can be rendered is ${-durationInFrames}`);
    }
    if (frame > durationInFrames - 1) {
        throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the highest frame that can be rendered is ${durationInFrames - 1}`);
    }
};
exports.validateFrame = validateFrame;


/***/ }),

/***/ 9665:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateMediaProps = void 0;
const validateMediaProps = (props, component) => {
    if (typeof props.volume !== 'number' &&
        typeof props.volume !== 'function' &&
        typeof props.volume !== 'undefined') {
        throw new TypeError(`You have passed a volume of type ${typeof props.volume} to your <${component} /> component. Volume must be a number or a function with the signature '(frame: number) => number' undefined.`);
    }
    if (typeof props.volume === 'number' && props.volume < 0) {
        throw new TypeError(`You have passed a volume below 0 to your <${component} /> component. Volume must be between 0 and 1`);
    }
    if (typeof props.playbackRate !== 'number' &&
        typeof props.playbackRate !== 'undefined') {
        throw new TypeError(`You have passed a playbackRate of type ${typeof props.playbackRate} to your <${component} /> component. Playback rate must a real number or undefined.`);
    }
    if (typeof props.playbackRate === 'number' &&
        (isNaN(props.playbackRate) ||
            !Number.isFinite(props.playbackRate) ||
            props.playbackRate <= 0)) {
        throw new TypeError(`You have passed a playbackRate of ${props.playbackRate} to your <${component} /> component. Playback rate must be a real number above 0.`);
    }
};
exports.validateMediaProps = validateMediaProps;


/***/ }),

/***/ 9980:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateStartFromProps = void 0;
const validateStartFromProps = (startFrom, endAt) => {
    if (typeof startFrom !== 'undefined') {
        if (typeof startFrom !== 'number') {
            throw new TypeError(`type of startFrom prop must be a number, instead got type ${typeof startFrom}.`);
        }
        if (isNaN(startFrom) || startFrom === Infinity) {
            throw new TypeError('startFrom prop can not be NaN or Infinity.');
        }
        if (startFrom < 0) {
            throw new TypeError(`startFrom must be greater than equal to 0 instead got ${startFrom}.`);
        }
    }
    if (typeof endAt !== 'undefined') {
        if (typeof endAt !== 'number') {
            throw new TypeError(`type of endAt prop must be a number, instead got type ${typeof endAt}.`);
        }
        if (isNaN(endAt)) {
            throw new TypeError('endAt prop can not be NaN.');
        }
        if (endAt <= 0) {
            throw new TypeError(`endAt must be a positive number, instead got ${endAt}.`);
        }
    }
    if (endAt < startFrom) {
        throw new TypeError('endAt prop must be greater than startFrom prop.');
    }
};
exports.validateStartFromProps = validateStartFromProps;


/***/ }),

/***/ 6262:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateRenderAsset = exports.validateArtifactFilename = void 0;
const validateArtifactFilename = (filename) => {
    if (typeof filename !== 'string') {
        throw new TypeError(`The "filename" must be a string, but you passed a value of type ${typeof filename}`);
    }
    if (filename.trim() === '') {
        throw new Error('The `filename` must not be empty');
    }
    if (!filename.match(/^([0-9a-zA-Z-!_.*'()/:&$@=;+,?]+)/g)) {
        throw new Error('The `filename` must match "/^([0-9a-zA-Z-!_.*\'()/:&$@=;+,?]+)/g". Use forward slashes only, even on Windows.');
    }
};
exports.validateArtifactFilename = validateArtifactFilename;
const validateContent = (content) => {
    if (typeof content !== 'string' && !(content instanceof Uint8Array)) {
        throw new TypeError(`The "content" must be a string or Uint8Array, but you passed a value of type ${typeof content}`);
    }
    if (typeof content === 'string' && content.trim() === '') {
        throw new Error('The `content` must not be empty');
    }
};
const validateRenderAsset = (artifact) => {
    // We don't have validation for it yet
    if (artifact.type !== 'artifact') {
        return;
    }
    (0, exports.validateArtifactFilename)(artifact.filename);
    validateContent(artifact.content);
};
exports.validateRenderAsset = validateRenderAsset;


/***/ }),

/***/ 6980:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.invalidCompositionErrorMessage = exports.validateCompositionId = exports.isCompositionIdValid = void 0;
const getRegex = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g;
const isCompositionIdValid = (id) => id.match(getRegex());
exports.isCompositionIdValid = isCompositionIdValid;
const validateCompositionId = (id) => {
    if (!(0, exports.isCompositionIdValid)(id)) {
        throw new Error(`Composition id can only contain a-z, A-Z, 0-9, CJK characters and -. You passed ${id}`);
    }
};
exports.validateCompositionId = validateCompositionId;
exports.invalidCompositionErrorMessage = `Composition ID must match ${String(getRegex())}`;


/***/ }),

/***/ 4176:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateDefaultCodec = void 0;
const codec_1 = __webpack_require__(4491);
function validateDefaultCodec(defaultCodec, location) {
    if (typeof defaultCodec === 'undefined') {
        return;
    }
    if (typeof defaultCodec !== 'string') {
        throw new TypeError(`The "defaultCodec" prop ${location} must be a string, but you passed a value of type ${typeof defaultCodec}.`);
    }
    if (!codec_1.validCodecs.includes(defaultCodec)) {
        throw new Error(`The "defaultCodec" prop ${location} must be one of ${codec_1.validCodecs.join(', ')}, but you passed ${defaultCodec}.`);
    }
}
exports.validateDefaultCodec = validateDefaultCodec;


/***/ }),

/***/ 7956:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateDefaultAndInputProps = void 0;
const validateDefaultAndInputProps = (defaultProps, name, compositionId) => {
    if (!defaultProps) {
        return;
    }
    if (typeof defaultProps !== 'object') {
        throw new Error(`"${name}" must be an object, but you passed a value of type ${typeof defaultProps}`);
    }
    if (Array.isArray(defaultProps)) {
        throw new Error(`"${name}" must be an object, an array was passed ${compositionId ? `for composition "${compositionId}"` : ''}`);
    }
};
exports.validateDefaultAndInputProps = validateDefaultAndInputProps;


/***/ }),

/***/ 6357:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateDimension = void 0;
function validateDimension(amount, nameOfProp, location) {
    if (typeof amount !== 'number') {
        throw new Error(`The "${nameOfProp}" prop ${location} must be a number, but you passed a value of type ${typeof amount}`);
    }
    if (isNaN(amount)) {
        throw new TypeError(`The "${nameOfProp}" prop ${location} must not be NaN, but is NaN.`);
    }
    if (!Number.isFinite(amount)) {
        throw new TypeError(`The "${nameOfProp}" prop ${location} must be finite, but is ${amount}.`);
    }
    if (amount % 1 !== 0) {
        throw new TypeError(`The "${nameOfProp}" prop ${location} must be an integer, but is ${amount}.`);
    }
    if (amount <= 0) {
        throw new TypeError(`The "${nameOfProp}" prop ${location} must be positive, but got ${amount}.`);
    }
}
exports.validateDimension = validateDimension;


/***/ }),

/***/ 1241:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateDurationInFrames = void 0;
function validateDurationInFrames(durationInFrames, options) {
    const { allowFloats, component } = options;
    if (typeof durationInFrames === 'undefined') {
        throw new Error(`The "durationInFrames" prop ${component} is missing.`);
    }
    if (typeof durationInFrames !== 'number') {
        throw new Error(`The "durationInFrames" prop ${component} must be a number, but you passed a value of type ${typeof durationInFrames}`);
    }
    if (durationInFrames <= 0) {
        throw new TypeError(`The "durationInFrames" prop ${component} must be positive, but got ${durationInFrames}.`);
    }
    if (!allowFloats && durationInFrames % 1 !== 0) {
        throw new TypeError(`The "durationInFrames" prop ${component} must be an integer, but got ${durationInFrames}.`);
    }
    if (!Number.isFinite(durationInFrames)) {
        throw new TypeError(`The "durationInFrames" prop ${component} must be finite, but got ${durationInFrames}.`);
    }
}
exports.validateDurationInFrames = validateDurationInFrames;


/***/ }),

/***/ 670:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.invalidFolderNameErrorMessage = exports.validateFolderName = exports.isFolderNameValid = void 0;
const getRegex = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g;
const isFolderNameValid = (name) => name.match(getRegex());
exports.isFolderNameValid = isFolderNameValid;
const validateFolderName = (name) => {
    if (name === undefined || name === null) {
        throw new TypeError('You must pass a name to a <Folder />.');
    }
    if (typeof name !== 'string') {
        throw new TypeError(`The "name" you pass into <Folder /> must be a string. Got: ${typeof name}`);
    }
    if (!(0, exports.isFolderNameValid)(name)) {
        throw new Error(`Folder name can only contain a-z, A-Z, 0-9 and -. You passed ${name}`);
    }
};
exports.validateFolderName = validateFolderName;
exports.invalidFolderNameErrorMessage = `Folder name must match ${String(getRegex())}`;


/***/ }),

/***/ 1309:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateFps = void 0;
function validateFps(fps, location, isGif) {
    if (typeof fps !== 'number') {
        throw new Error(`"fps" must be a number, but you passed a value of type ${typeof fps} ${location}`);
    }
    if (!Number.isFinite(fps)) {
        throw new Error(`"fps" must be a finite, but you passed ${fps} ${location}`);
    }
    if (isNaN(fps)) {
        throw new Error(`"fps" must not be NaN, but got ${fps} ${location}`);
    }
    if (fps <= 0) {
        throw new TypeError(`"fps" must be positive, but got ${fps} ${location}`);
    }
    if (isGif && fps > 50) {
        throw new TypeError(`The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif`);
    }
}
exports.validateFps = validateFps;


/***/ }),

/***/ 7283:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateSpringDuration = void 0;
const validateSpringDuration = (dur) => {
    if (typeof dur === 'undefined') {
        return;
    }
    if (typeof dur !== 'number') {
        throw new TypeError(`A "duration" of a spring must be a "number" but is "${typeof dur}"`);
    }
    if (Number.isNaN(dur)) {
        throw new TypeError('A "duration" of a spring is NaN, which it must not be');
    }
    if (!Number.isFinite(dur)) {
        throw new TypeError('A "duration" of a spring must be finite, but is ' + dur);
    }
    if (dur <= 0) {
        throw new TypeError('A "duration" of a spring must be positive, but is ' + dur);
    }
};
exports.validateSpringDuration = validateSpringDuration;


/***/ }),

/***/ 8449:
/***/ ((__unused_webpack_module, exports) => {


// Automatically generated on publish
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VERSION = void 0;
/**
 * @description Provides the current version number of the Remotion library.
 * @see [Documentation](https://remotion.dev/docs/version)
 * @returns {string} The current version of the remotion package
 */
exports.VERSION = '4.0.212';


/***/ }),

/***/ 6069:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6173:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OffthreadVideo = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const Sequence_js_1 = __webpack_require__(8808);
const get_remotion_environment_js_1 = __webpack_require__(2161);
const validate_media_props_js_1 = __webpack_require__(9665);
const validate_start_from_props_js_1 = __webpack_require__(9980);
const OffthreadVideoForRendering_js_1 = __webpack_require__(188);
const VideoForPreview_js_1 = __webpack_require__(9335);
/**
 * @description This method imports and displays a video, similar to <Video />. During rendering, it extracts the exact frame from the video and displays it in an <img> tag
 * @see [Documentation](https://www.remotion.dev/docs/offthreadvideo)
 */
const OffthreadVideo = (props) => {
    // Should only destruct `startFrom` and `endAt` from props,
    // rest gets drilled down
    const { startFrom, endAt, name, pauseWhenBuffering, stack, showInTimeline, ...otherProps } = props;
    const environment = (0, get_remotion_environment_js_1.getRemotionEnvironment)();
    const onDuration = (0, react_1.useCallback)(() => undefined, []);
    if (typeof props.src !== 'string') {
        throw new TypeError(`The \`<OffthreadVideo>\` tag requires a string for \`src\`, but got ${JSON.stringify(props.src)} instead.`);
    }
    if (props.imageFormat) {
        throw new TypeError(`The \`<OffthreadVideo>\` tag does no longer accept \`imageFormat\`. Use the \`transparent\` prop if you want to render a transparent video.`);
    }
    if (typeof startFrom !== 'undefined' || typeof endAt !== 'undefined') {
        (0, validate_start_from_props_js_1.validateStartFromProps)(startFrom, endAt);
        const startFromFrameNo = startFrom !== null && startFrom !== void 0 ? startFrom : 0;
        const endAtFrameNo = endAt !== null && endAt !== void 0 ? endAt : Infinity;
        return ((0, jsx_runtime_1.jsx)(Sequence_js_1.Sequence, { layout: "none", from: 0 - startFromFrameNo, showInTimeline: false, durationInFrames: endAtFrameNo, name: name, children: (0, jsx_runtime_1.jsx)(exports.OffthreadVideo, { pauseWhenBuffering: pauseWhenBuffering !== null && pauseWhenBuffering !== void 0 ? pauseWhenBuffering : false, ...otherProps }) }));
    }
    (0, validate_media_props_js_1.validateMediaProps)(props, 'Video');
    if (environment.isRendering) {
        return (0, jsx_runtime_1.jsx)(OffthreadVideoForRendering_js_1.OffthreadVideoForRendering, { ...otherProps });
    }
    const { transparent, toneMapped, _remotionDebugSeeking, onAutoPlayError, onVideoFrame, crossOrigin, ...withoutTransparent } = otherProps;
    return ((0, jsx_runtime_1.jsx)(VideoForPreview_js_1.VideoForPreview, { _remotionInternalStack: stack !== null && stack !== void 0 ? stack : null, _remotionInternalNativeLoopPassed: false, _remotionDebugSeeking: _remotionDebugSeeking !== null && _remotionDebugSeeking !== void 0 ? _remotionDebugSeeking : false, onDuration: onDuration, onlyWarnForMediaSeekingError: true, pauseWhenBuffering: pauseWhenBuffering !== null && pauseWhenBuffering !== void 0 ? pauseWhenBuffering : false, showInTimeline: showInTimeline !== null && showInTimeline !== void 0 ? showInTimeline : true, onAutoPlayError: onAutoPlayError !== null && onAutoPlayError !== void 0 ? onAutoPlayError : undefined, onVideoFrame: onVideoFrame !== null && onVideoFrame !== void 0 ? onVideoFrame : null, crossOrigin: crossOrigin, ...withoutTransparent }));
};
exports.OffthreadVideo = OffthreadVideo;


/***/ }),

/***/ 188:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OffthreadVideoForRendering = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const Img_js_1 = __webpack_require__(7066);
const RenderAssetManager_js_1 = __webpack_require__(9634);
const SequenceContext_js_1 = __webpack_require__(3981);
const absolute_src_js_1 = __webpack_require__(9935);
const use_audio_frame_js_1 = __webpack_require__(1976);
const cancel_render_js_1 = __webpack_require__(4744);
const default_css_js_1 = __webpack_require__(3798);
const delay_render_js_1 = __webpack_require__(7687);
const random_js_1 = __webpack_require__(8910);
const timeline_position_state_js_1 = __webpack_require__(5488);
const truthy_js_1 = __webpack_require__(9609);
const use_current_frame_js_1 = __webpack_require__(6606);
const use_unsafe_video_config_js_1 = __webpack_require__(3782);
const volume_prop_js_1 = __webpack_require__(3641);
const get_current_time_js_1 = __webpack_require__(2287);
const offthread_video_source_js_1 = __webpack_require__(5182);
const OffthreadVideoForRendering = ({ onError, volume: volumeProp, playbackRate, src, muted, allowAmplificationDuringRender, transparent = false, toneMapped = true, toneFrequency, name, loopVolumeCurveBehavior, delayRenderRetries, delayRenderTimeoutInMilliseconds, onVideoFrame, ...props }) => {
    const absoluteFrame = (0, timeline_position_state_js_1.useTimelinePosition)();
    const frame = (0, use_current_frame_js_1.useCurrentFrame)();
    const volumePropsFrame = (0, use_audio_frame_js_1.useFrameForVolumeProp)(loopVolumeCurveBehavior !== null && loopVolumeCurveBehavior !== void 0 ? loopVolumeCurveBehavior : 'repeat');
    const videoConfig = (0, use_unsafe_video_config_js_1.useUnsafeVideoConfig)();
    const sequenceContext = (0, react_1.useContext)(SequenceContext_js_1.SequenceContext);
    const mediaStartsAt = (0, use_audio_frame_js_1.useMediaStartsAt)();
    const { registerRenderAsset, unregisterRenderAsset } = (0, react_1.useContext)(RenderAssetManager_js_1.RenderAssetManager);
    if (!src) {
        throw new TypeError('No `src` was passed to <OffthreadVideo>.');
    }
    // Generate a string that's as unique as possible for this asset
    // but at the same time the same on all threads
    const id = (0, react_1.useMemo)(() => `offthreadvideo-${(0, random_js_1.random)(src !== null && src !== void 0 ? src : '')}-${sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.cumulatedFrom}-${sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom}-${sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.durationInFrames}`, [
        src,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.cumulatedFrom,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.durationInFrames,
    ]);
    if (!videoConfig) {
        throw new Error('No video config found');
    }
    const volume = (0, volume_prop_js_1.evaluateVolume)({
        volume: volumeProp,
        frame: volumePropsFrame,
        mediaVolume: 1,
        allowAmplificationDuringRender: allowAmplificationDuringRender !== null && allowAmplificationDuringRender !== void 0 ? allowAmplificationDuringRender : false,
    });
    (0, react_1.useEffect)(() => {
        var _a;
        if (!src) {
            throw new Error('No src passed');
        }
        if (!window.remotion_audioEnabled) {
            return;
        }
        if (muted) {
            return;
        }
        if (volume <= 0) {
            return;
        }
        registerRenderAsset({
            type: 'video',
            src: (0, absolute_src_js_1.getAbsoluteSrc)(src),
            id,
            frame: absoluteFrame,
            volume,
            mediaFrame: frame,
            playbackRate: playbackRate !== null && playbackRate !== void 0 ? playbackRate : 1,
            allowAmplificationDuringRender: allowAmplificationDuringRender !== null && allowAmplificationDuringRender !== void 0 ? allowAmplificationDuringRender : false,
            toneFrequency: toneFrequency !== null && toneFrequency !== void 0 ? toneFrequency : null,
            audioStartFrame: Math.max(0, -((_a = sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom) !== null && _a !== void 0 ? _a : 0)),
        });
        return () => unregisterRenderAsset(id);
    }, [
        muted,
        src,
        registerRenderAsset,
        id,
        unregisterRenderAsset,
        volume,
        frame,
        absoluteFrame,
        playbackRate,
        allowAmplificationDuringRender,
        toneFrequency,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom,
    ]);
    const currentTime = (0, react_1.useMemo)(() => {
        return ((0, get_current_time_js_1.getExpectedMediaFrameUncorrected)({
            frame,
            playbackRate: playbackRate || 1,
            startFrom: -mediaStartsAt,
        }) / videoConfig.fps);
    }, [frame, mediaStartsAt, playbackRate, videoConfig.fps]);
    const actualSrc = (0, react_1.useMemo)(() => {
        return (0, offthread_video_source_js_1.getOffthreadVideoSource)({
            src,
            currentTime,
            transparent,
            toneMapped,
        });
    }, [toneMapped, currentTime, src, transparent]);
    const [imageSrc, setImageSrc] = (0, react_1.useState)(null);
    (0, react_1.useLayoutEffect)(() => {
        const cleanup = [];
        setImageSrc(null);
        const controller = new AbortController();
        const newHandle = (0, delay_render_js_1.delayRender)(`Fetching ${actualSrc} from server`, {
            retries: delayRenderRetries !== null && delayRenderRetries !== void 0 ? delayRenderRetries : undefined,
            timeoutInMilliseconds: delayRenderTimeoutInMilliseconds !== null && delayRenderTimeoutInMilliseconds !== void 0 ? delayRenderTimeoutInMilliseconds : undefined,
        });
        const execute = async () => {
            try {
                const res = await fetch(actualSrc, {
                    signal: controller.signal,
                });
                if (res.status !== 200) {
                    if (res.status === 500) {
                        const json = await res.json();
                        if (json.error) {
                            const cleanedUpErrorMessage = json.error.replace(/^Error: /, '');
                            throw new Error(cleanedUpErrorMessage);
                        }
                    }
                    throw new Error(`Server returned status ${res.status} while fetching ${actualSrc}`);
                }
                const blob = await res.blob();
                const url = URL.createObjectURL(blob);
                cleanup.push(() => URL.revokeObjectURL(url));
                setImageSrc({
                    src: url,
                    handle: newHandle,
                });
            }
            catch (err) {
                // If component is unmounted, we should not throw
                if (err.message.includes('aborted')) {
                    (0, delay_render_js_1.continueRender)(newHandle);
                    return;
                }
                if (controller.signal.aborted) {
                    (0, delay_render_js_1.continueRender)(newHandle);
                    return;
                }
                if (err.message.includes('Failed to fetch')) {
                    // eslint-disable-next-line no-ex-assign
                    err = new Error(`Failed to fetch ${actualSrc}. This could be caused by Chrome rejecting the request because the disk space is low. Consider increasing the disk size of your environment.`, { cause: err });
                }
                if (onError) {
                    onError(err);
                }
                else {
                    (0, cancel_render_js_1.cancelRender)(err);
                }
            }
        };
        execute();
        cleanup.push(() => {
            if (controller.signal.aborted) {
                return;
            }
            controller.abort();
        });
        return () => {
            cleanup.forEach((c) => c());
        };
    }, [
        actualSrc,
        delayRenderRetries,
        delayRenderTimeoutInMilliseconds,
        onError,
    ]);
    const onErr = (0, react_1.useCallback)(() => {
        if (onError) {
            onError === null || onError === void 0 ? void 0 : onError(new Error('Failed to load image with src ' + imageSrc));
        }
        else {
            (0, cancel_render_js_1.cancelRender)('Failed to load image with src ' + imageSrc);
        }
    }, [imageSrc, onError]);
    const className = (0, react_1.useMemo)(() => {
        return [default_css_js_1.OFFTHREAD_VIDEO_CLASS_NAME, props.className]
            .filter(truthy_js_1.truthy)
            .join(' ');
    }, [props.className]);
    const onImageFrame = (0, react_1.useCallback)((img) => {
        if (onVideoFrame) {
            onVideoFrame(img);
        }
    }, [onVideoFrame]);
    if (!imageSrc) {
        return null;
    }
    (0, delay_render_js_1.continueRender)(imageSrc.handle);
    return ((0, jsx_runtime_1.jsx)(Img_js_1.Img, { src: imageSrc.src, className: className, delayRenderRetries: delayRenderRetries, delayRenderTimeoutInMilliseconds: delayRenderTimeoutInMilliseconds, onImageFrame: onImageFrame, ...props, onError: onErr }));
};
exports.OffthreadVideoForRendering = OffthreadVideoForRendering;


/***/ }),

/***/ 3218:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Video = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
/* eslint-disable @typescript-eslint/no-use-before-define */
const react_1 = __webpack_require__(758);
const Sequence_js_1 = __webpack_require__(8808);
const absolute_src_js_1 = __webpack_require__(9935);
const calculate_loop_js_1 = __webpack_require__(4072);
const enable_sequence_stack_traces_js_1 = __webpack_require__(3770);
const get_remotion_environment_js_1 = __webpack_require__(2161);
const index_js_1 = __webpack_require__(3760);
const prefetch_js_1 = __webpack_require__(8470);
const use_video_config_js_1 = __webpack_require__(3299);
const validate_media_props_js_1 = __webpack_require__(9665);
const validate_start_from_props_js_1 = __webpack_require__(9980);
const VideoForPreview_js_1 = __webpack_require__(9335);
const VideoForRendering_js_1 = __webpack_require__(1475);
const duration_state_js_1 = __webpack_require__(4461);
const VideoForwardingFunction = (props, ref) => {
    var _a, _b;
    const { startFrom, endAt, name, pauseWhenBuffering, stack, _remotionInternalNativeLoopPassed, showInTimeline, onAutoPlayError, crossOrigin, ...otherProps } = props;
    const { loop, _remotionDebugSeeking, ...propsOtherThanLoop } = props;
    const { fps } = (0, use_video_config_js_1.useVideoConfig)();
    const environment = (0, get_remotion_environment_js_1.getRemotionEnvironment)();
    const { durations, setDurations } = (0, react_1.useContext)(duration_state_js_1.DurationsContext);
    if (typeof ref === 'string') {
        throw new Error('string refs are not supported');
    }
    if (typeof props.src !== 'string') {
        throw new TypeError(`The \`<Video>\` tag requires a string for \`src\`, but got ${JSON.stringify(props.src)} instead.`);
    }
    const preloadedSrc = (0, prefetch_js_1.usePreload)(props.src);
    const onDuration = (0, react_1.useCallback)((src, durationInSeconds) => {
        setDurations({ type: 'got-duration', durationInSeconds, src });
    }, [setDurations]);
    const onVideoFrame = (0, react_1.useCallback)(() => { }, []);
    const durationFetched = (_a = durations[(0, absolute_src_js_1.getAbsoluteSrc)(preloadedSrc)]) !== null && _a !== void 0 ? _a : durations[(0, absolute_src_js_1.getAbsoluteSrc)(props.src)];
    if (loop && durationFetched !== undefined) {
        const mediaDuration = durationFetched * fps;
        return ((0, jsx_runtime_1.jsx)(index_js_1.Loop, { durationInFrames: (0, calculate_loop_js_1.calculateLoopDuration)({
                endAt,
                mediaDuration,
                playbackRate: (_b = props.playbackRate) !== null && _b !== void 0 ? _b : 1,
                startFrom,
            }), layout: "none", name: name, children: (0, jsx_runtime_1.jsx)(exports.Video, { ...propsOtherThanLoop, ref: ref, _remotionInternalNativeLoopPassed: true }) }));
    }
    if (typeof startFrom !== 'undefined' || typeof endAt !== 'undefined') {
        (0, validate_start_from_props_js_1.validateStartFromProps)(startFrom, endAt);
        const startFromFrameNo = startFrom !== null && startFrom !== void 0 ? startFrom : 0;
        const endAtFrameNo = endAt !== null && endAt !== void 0 ? endAt : Infinity;
        return ((0, jsx_runtime_1.jsx)(Sequence_js_1.Sequence, { layout: "none", from: 0 - startFromFrameNo, showInTimeline: false, durationInFrames: endAtFrameNo, name: name, children: (0, jsx_runtime_1.jsx)(exports.Video, { pauseWhenBuffering: pauseWhenBuffering !== null && pauseWhenBuffering !== void 0 ? pauseWhenBuffering : false, ...otherProps, ref: ref }) }));
    }
    (0, validate_media_props_js_1.validateMediaProps)(props, 'Video');
    if (environment.isRendering) {
        return ((0, jsx_runtime_1.jsx)(VideoForRendering_js_1.VideoForRendering, { onDuration: onDuration, onVideoFrame: onVideoFrame !== null && onVideoFrame !== void 0 ? onVideoFrame : null, ...otherProps, ref: ref }));
    }
    return ((0, jsx_runtime_1.jsx)(VideoForPreview_js_1.VideoForPreview, { onlyWarnForMediaSeekingError: false, ...otherProps, ref: ref, onVideoFrame: null, 
        // Proposal: Make this default to true in v5
        pauseWhenBuffering: pauseWhenBuffering !== null && pauseWhenBuffering !== void 0 ? pauseWhenBuffering : false, onDuration: onDuration, _remotionInternalStack: stack !== null && stack !== void 0 ? stack : null, _remotionInternalNativeLoopPassed: _remotionInternalNativeLoopPassed !== null && _remotionInternalNativeLoopPassed !== void 0 ? _remotionInternalNativeLoopPassed : false, _remotionDebugSeeking: _remotionDebugSeeking !== null && _remotionDebugSeeking !== void 0 ? _remotionDebugSeeking : false, showInTimeline: showInTimeline !== null && showInTimeline !== void 0 ? showInTimeline : true, onAutoPlayError: onAutoPlayError !== null && onAutoPlayError !== void 0 ? onAutoPlayError : undefined, crossOrigin: crossOrigin }));
};
/**
 * @description allows you to include a video file in your Remotion project. It wraps the native HTMLVideoElement.
 * @see [Documentation](https://www.remotion.dev/docs/video)
 */
exports.Video = (0, react_1.forwardRef)(VideoForwardingFunction);
(0, enable_sequence_stack_traces_js_1.addSequenceStackTraces)(exports.Video);


/***/ }),

/***/ 9335:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VideoForPreview = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const SequenceContext_js_1 = __webpack_require__(3981);
const SequenceManager_js_1 = __webpack_require__(6109);
const use_audio_frame_js_1 = __webpack_require__(1976);
const prefetch_js_1 = __webpack_require__(8470);
const use_media_in_timeline_js_1 = __webpack_require__(5139);
const use_media_playback_js_1 = __webpack_require__(7649);
const use_media_tag_volume_js_1 = __webpack_require__(8865);
const use_sync_volume_with_media_tag_js_1 = __webpack_require__(9752);
const use_video_config_js_1 = __webpack_require__(3299);
const volume_position_state_js_1 = __webpack_require__(607);
const emit_video_frame_js_1 = __webpack_require__(6816);
const video_fragment_js_1 = __webpack_require__(131);
const VideoForDevelopmentRefForwardingFunction = (props, ref) => {
    var _a, _b, _c;
    const videoRef = (0, react_1.useRef)(null);
    const { volume, muted, playbackRate, onlyWarnForMediaSeekingError, src, onDuration, 
    // @ts-expect-error
    acceptableTimeShift, acceptableTimeShiftInSeconds, toneFrequency, name, _remotionInternalNativeLoopPassed, _remotionInternalStack, _remotionDebugSeeking, style, pauseWhenBuffering, showInTimeline, loopVolumeCurveBehavior, onError, onAutoPlayError, onVideoFrame, crossOrigin, ...nativeProps } = props;
    const volumePropFrame = (0, use_audio_frame_js_1.useFrameForVolumeProp)(loopVolumeCurveBehavior !== null && loopVolumeCurveBehavior !== void 0 ? loopVolumeCurveBehavior : 'repeat');
    const { fps, durationInFrames } = (0, use_video_config_js_1.useVideoConfig)();
    const parentSequence = (0, react_1.useContext)(SequenceContext_js_1.SequenceContext);
    const { hidden } = (0, react_1.useContext)(SequenceManager_js_1.SequenceVisibilityToggleContext);
    const [timelineId] = (0, react_1.useState)(() => String(Math.random()));
    const isSequenceHidden = (_a = hidden[timelineId]) !== null && _a !== void 0 ? _a : false;
    if (typeof acceptableTimeShift !== 'undefined') {
        throw new Error('acceptableTimeShift has been removed. Use acceptableTimeShiftInSeconds instead.');
    }
    const actualVolume = (0, use_media_tag_volume_js_1.useMediaTagVolume)(videoRef);
    const [mediaVolume] = (0, volume_position_state_js_1.useMediaVolumeState)();
    const [mediaMuted] = (0, volume_position_state_js_1.useMediaMutedState)();
    (0, use_media_in_timeline_js_1.useMediaInTimeline)({
        mediaRef: videoRef,
        volume,
        mediaVolume,
        mediaType: 'video',
        src,
        playbackRate: (_b = props.playbackRate) !== null && _b !== void 0 ? _b : 1,
        displayName: name !== null && name !== void 0 ? name : null,
        id: timelineId,
        stack: _remotionInternalStack,
        showInTimeline,
        premountDisplay: null,
        onAutoPlayError: onAutoPlayError !== null && onAutoPlayError !== void 0 ? onAutoPlayError : null,
    });
    (0, use_sync_volume_with_media_tag_js_1.useSyncVolumeWithMediaTag)({
        volumePropFrame,
        actualVolume,
        volume,
        mediaVolume,
        mediaRef: videoRef,
    });
    (0, use_media_playback_js_1.useMediaPlayback)({
        mediaRef: videoRef,
        src,
        mediaType: 'video',
        playbackRate: (_c = props.playbackRate) !== null && _c !== void 0 ? _c : 1,
        onlyWarnForMediaSeekingError,
        acceptableTimeshift: acceptableTimeShiftInSeconds !== null && acceptableTimeShiftInSeconds !== void 0 ? acceptableTimeShiftInSeconds : use_media_playback_js_1.DEFAULT_ACCEPTABLE_TIMESHIFT,
        isPremounting: Boolean(parentSequence === null || parentSequence === void 0 ? void 0 : parentSequence.premounting),
        pauseWhenBuffering,
        debugSeeking: _remotionDebugSeeking,
        onAutoPlayError: onAutoPlayError !== null && onAutoPlayError !== void 0 ? onAutoPlayError : null,
    });
    const actualFrom = parentSequence ? parentSequence.relativeFrom : 0;
    const duration = parentSequence
        ? Math.min(parentSequence.durationInFrames, durationInFrames)
        : durationInFrames;
    const actualSrc = (0, video_fragment_js_1.useAppendVideoFragment)({
        actualSrc: (0, prefetch_js_1.usePreload)(src),
        actualFrom,
        duration,
        fps,
    });
    (0, react_1.useImperativeHandle)(ref, () => {
        return videoRef.current;
    }, []);
    (0, react_1.useEffect)(() => {
        const { current } = videoRef;
        if (!current) {
            return;
        }
        const errorHandler = () => {
            var _a;
            if (current.error) {
                // eslint-disable-next-line no-console
                console.error('Error occurred in video', current === null || current === void 0 ? void 0 : current.error);
                // If user is handling the error, we don't cause an unhandled exception
                if (onError) {
                    const err = new Error(`Code ${current.error.code}: ${current.error.message}`);
                    onError(err);
                    return;
                }
                throw new Error(`The browser threw an error while playing the video ${src}: Code ${current.error.code} - ${(_a = current === null || current === void 0 ? void 0 : current.error) === null || _a === void 0 ? void 0 : _a.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`);
            }
            else {
                // If user is handling the error, we don't cause an unhandled exception
                if (onError) {
                    const err = new Error(`The browser threw an error while playing the video ${src}`);
                    onError(err);
                    return;
                }
                throw new Error('The browser threw an error while playing the video');
            }
        };
        current.addEventListener('error', errorHandler, { once: true });
        return () => {
            current.removeEventListener('error', errorHandler);
        };
    }, [onError, src]);
    const currentOnDurationCallback = (0, react_1.useRef)();
    currentOnDurationCallback.current = onDuration;
    (0, emit_video_frame_js_1.useEmitVideoFrame)({ ref: videoRef, onVideoFrame });
    (0, react_1.useEffect)(() => {
        var _a;
        const { current } = videoRef;
        if (!current) {
            return;
        }
        if (current.duration) {
            (_a = currentOnDurationCallback.current) === null || _a === void 0 ? void 0 : _a.call(currentOnDurationCallback, src, current.duration);
            return;
        }
        const onLoadedMetadata = () => {
            var _a;
            (_a = currentOnDurationCallback.current) === null || _a === void 0 ? void 0 : _a.call(currentOnDurationCallback, src, current.duration);
        };
        current.addEventListener('loadedmetadata', onLoadedMetadata);
        return () => {
            current.removeEventListener('loadedmetadata', onLoadedMetadata);
        };
    }, [src]);
    (0, react_1.useEffect)(() => {
        const { current } = videoRef;
        if (!current) {
            return;
        }
        // Without this, on iOS Safari, the video cannot be seeked.
        // if a seek is triggered before `loadedmetadata` is fired,
        // the video will not seek, even if `loadedmetadata` is fired afterwards.
        // Also, this needs to happen in a useEffect, because otherwise
        // the SSR props will be applied.
        if ((0, video_fragment_js_1.isIosSafari)()) {
            current.preload = 'metadata';
        }
        else {
            current.preload = 'auto';
        }
    }, []);
    const actualStyle = (0, react_1.useMemo)(() => {
        var _a;
        return {
            ...style,
            opacity: isSequenceHidden ? 0 : (_a = style === null || style === void 0 ? void 0 : style.opacity) !== null && _a !== void 0 ? _a : 1,
        };
    }, [isSequenceHidden, style]);
    const crossOriginValue = crossOrigin !== null && crossOrigin !== void 0 ? crossOrigin : (onVideoFrame ? 'anonymous' : undefined);
    return ((0, jsx_runtime_1.jsx)("video", { ref: videoRef, muted: muted || mediaMuted, playsInline: true, src: actualSrc, loop: _remotionInternalNativeLoopPassed, style: actualStyle, disableRemotePlayback: true, crossOrigin: crossOriginValue, ...nativeProps }));
};
exports.VideoForPreview = (0, react_1.forwardRef)(VideoForDevelopmentRefForwardingFunction);


/***/ }),

/***/ 1475:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VideoForRendering = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const RenderAssetManager_js_1 = __webpack_require__(9634);
const SequenceContext_js_1 = __webpack_require__(3981);
const absolute_src_js_1 = __webpack_require__(9935);
const use_audio_frame_js_1 = __webpack_require__(1976);
const delay_render_js_1 = __webpack_require__(7687);
const get_remotion_environment_js_1 = __webpack_require__(2161);
const is_approximately_the_same_js_1 = __webpack_require__(3874);
const random_js_1 = __webpack_require__(8910);
const timeline_position_state_js_1 = __webpack_require__(5488);
const use_current_frame_js_1 = __webpack_require__(6606);
const use_unsafe_video_config_js_1 = __webpack_require__(3782);
const volume_prop_js_1 = __webpack_require__(3641);
const get_current_time_js_1 = __webpack_require__(2287);
const seek_until_right_js_1 = __webpack_require__(395);
const VideoForRenderingForwardFunction = ({ onError, volume: volumeProp, allowAmplificationDuringRender, playbackRate, onDuration, toneFrequency, name, acceptableTimeShiftInSeconds, delayRenderRetries, delayRenderTimeoutInMilliseconds, loopVolumeCurveBehavior, ...props }, ref) => {
    const absoluteFrame = (0, timeline_position_state_js_1.useTimelinePosition)();
    const frame = (0, use_current_frame_js_1.useCurrentFrame)();
    const volumePropsFrame = (0, use_audio_frame_js_1.useFrameForVolumeProp)(loopVolumeCurveBehavior !== null && loopVolumeCurveBehavior !== void 0 ? loopVolumeCurveBehavior : 'repeat');
    const videoConfig = (0, use_unsafe_video_config_js_1.useUnsafeVideoConfig)();
    const videoRef = (0, react_1.useRef)(null);
    const sequenceContext = (0, react_1.useContext)(SequenceContext_js_1.SequenceContext);
    const mediaStartsAt = (0, use_audio_frame_js_1.useMediaStartsAt)();
    const environment = (0, get_remotion_environment_js_1.getRemotionEnvironment)();
    const { registerRenderAsset, unregisterRenderAsset } = (0, react_1.useContext)(RenderAssetManager_js_1.RenderAssetManager);
    // Generate a string that's as unique as possible for this asset
    // but at the same time the same on all threads
    const id = (0, react_1.useMemo)(() => {
        var _a;
        return `video-${(0, random_js_1.random)((_a = props.src) !== null && _a !== void 0 ? _a : '')}-${sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.cumulatedFrom}-${sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom}-${sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.durationInFrames}`;
    }, [
        props.src,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.cumulatedFrom,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.durationInFrames,
    ]);
    if (!videoConfig) {
        throw new Error('No video config found');
    }
    const volume = (0, volume_prop_js_1.evaluateVolume)({
        volume: volumeProp,
        frame: volumePropsFrame,
        mediaVolume: 1,
        allowAmplificationDuringRender: allowAmplificationDuringRender !== null && allowAmplificationDuringRender !== void 0 ? allowAmplificationDuringRender : false,
    });
    (0, react_1.useEffect)(() => {
        var _a;
        if (!props.src) {
            throw new Error('No src passed');
        }
        if (props.muted) {
            return;
        }
        if (volume <= 0) {
            return;
        }
        if (!window.remotion_audioEnabled) {
            return;
        }
        registerRenderAsset({
            type: 'video',
            src: (0, absolute_src_js_1.getAbsoluteSrc)(props.src),
            id,
            frame: absoluteFrame,
            volume,
            mediaFrame: frame,
            playbackRate: playbackRate !== null && playbackRate !== void 0 ? playbackRate : 1,
            allowAmplificationDuringRender: allowAmplificationDuringRender !== null && allowAmplificationDuringRender !== void 0 ? allowAmplificationDuringRender : false,
            toneFrequency: toneFrequency !== null && toneFrequency !== void 0 ? toneFrequency : null,
            audioStartFrame: Math.max(0, -((_a = sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom) !== null && _a !== void 0 ? _a : 0)),
        });
        return () => unregisterRenderAsset(id);
    }, [
        props.muted,
        props.src,
        registerRenderAsset,
        id,
        unregisterRenderAsset,
        volume,
        frame,
        absoluteFrame,
        playbackRate,
        allowAmplificationDuringRender,
        toneFrequency,
        sequenceContext === null || sequenceContext === void 0 ? void 0 : sequenceContext.relativeFrom,
    ]);
    (0, react_1.useImperativeHandle)(ref, () => {
        return videoRef.current;
    }, []);
    (0, react_1.useEffect)(() => {
        var _a, _b;
        if (!window.remotion_videoEnabled) {
            return;
        }
        const { current } = videoRef;
        if (!current) {
            return;
        }
        const currentTime = (0, get_current_time_js_1.getMediaTime)({
            frame,
            playbackRate: playbackRate || 1,
            startFrom: -mediaStartsAt,
            fps: videoConfig.fps,
        });
        const handle = (0, delay_render_js_1.delayRender)(`Rendering <Video /> with src="${props.src}"`, {
            retries: delayRenderRetries !== null && delayRenderRetries !== void 0 ? delayRenderRetries : undefined,
            timeoutInMilliseconds: delayRenderTimeoutInMilliseconds !== null && delayRenderTimeoutInMilliseconds !== void 0 ? delayRenderTimeoutInMilliseconds : undefined,
        });
        if (((_b = (_a = window.process) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.NODE_ENV) === 'test') {
            (0, delay_render_js_1.continueRender)(handle);
            return;
        }
        if ((0, is_approximately_the_same_js_1.isApproximatelyTheSame)(current.currentTime, currentTime)) {
            if (current.readyState >= 2) {
                (0, delay_render_js_1.continueRender)(handle);
                return;
            }
            const loadedDataHandler = () => {
                (0, delay_render_js_1.continueRender)(handle);
            };
            current.addEventListener('loadeddata', loadedDataHandler, { once: true });
            return () => {
                current.removeEventListener('loadeddata', loadedDataHandler);
            };
        }
        const endedHandler = () => {
            (0, delay_render_js_1.continueRender)(handle);
        };
        const seek = (0, seek_until_right_js_1.seekToTimeMultipleUntilRight)(current, currentTime, videoConfig.fps);
        seek.prom.then(() => {
            (0, delay_render_js_1.continueRender)(handle);
        });
        current.addEventListener('ended', endedHandler, { once: true });
        const errorHandler = () => {
            var _a;
            if (current === null || current === void 0 ? void 0 : current.error) {
                // eslint-disable-next-line no-console
                console.error('Error occurred in video', current === null || current === void 0 ? void 0 : current.error);
                // If user is handling the error, we don't cause an unhandled exception
                if (onError) {
                    return;
                }
                throw new Error(`The browser threw an error while playing the video ${props.src}: Code ${current.error.code} - ${(_a = current === null || current === void 0 ? void 0 : current.error) === null || _a === void 0 ? void 0 : _a.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`);
            }
            else {
                throw new Error('The browser threw an error');
            }
        };
        current.addEventListener('error', errorHandler, { once: true });
        // If video skips to another frame or unmounts, we clear the created handle
        return () => {
            seek.cancel();
            current.removeEventListener('ended', endedHandler);
            current.removeEventListener('error', errorHandler);
            (0, delay_render_js_1.continueRender)(handle);
        };
    }, [
        volumePropsFrame,
        props.src,
        playbackRate,
        videoConfig.fps,
        frame,
        mediaStartsAt,
        onError,
        delayRenderRetries,
        delayRenderTimeoutInMilliseconds,
    ]);
    const { src } = props;
    // If video source switches, make new handle
    if (environment.isRendering) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, react_1.useLayoutEffect)(() => {
            var _a, _b;
            if (((_b = (_a = window.process) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.NODE_ENV) === 'test') {
                return;
            }
            const newHandle = (0, delay_render_js_1.delayRender)('Loading <Video> duration with src=' + src, {
                retries: delayRenderRetries !== null && delayRenderRetries !== void 0 ? delayRenderRetries : undefined,
                timeoutInMilliseconds: delayRenderTimeoutInMilliseconds !== null && delayRenderTimeoutInMilliseconds !== void 0 ? delayRenderTimeoutInMilliseconds : undefined,
            });
            const { current } = videoRef;
            const didLoad = () => {
                if (current === null || current === void 0 ? void 0 : current.duration) {
                    onDuration(src, current.duration);
                }
                (0, delay_render_js_1.continueRender)(newHandle);
            };
            if (current === null || current === void 0 ? void 0 : current.duration) {
                onDuration(src, current.duration);
                (0, delay_render_js_1.continueRender)(newHandle);
            }
            else {
                current === null || current === void 0 ? void 0 : current.addEventListener('loadedmetadata', didLoad, { once: true });
            }
            // If tag gets unmounted, clear pending handles because video metadata is not going to load
            return () => {
                current === null || current === void 0 ? void 0 : current.removeEventListener('loadedmetadata', didLoad);
                (0, delay_render_js_1.continueRender)(newHandle);
            };
        }, [src, onDuration, delayRenderRetries, delayRenderTimeoutInMilliseconds]);
    }
    return (0, jsx_runtime_1.jsx)("video", { ref: videoRef, ...props });
};
exports.VideoForRendering = (0, react_1.forwardRef)(VideoForRenderingForwardFunction);


/***/ }),

/***/ 4461:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DurationsContextProvider = exports.DurationsContext = exports.durationReducer = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
const react_1 = __webpack_require__(758);
const absolute_src_js_1 = __webpack_require__(9935);
const durationReducer = (state, action) => {
    switch (action.type) {
        case 'got-duration': {
            const absoluteSrc = (0, absolute_src_js_1.getAbsoluteSrc)(action.src);
            if (state[absoluteSrc] === action.durationInSeconds) {
                return state;
            }
            return {
                ...state,
                [absoluteSrc]: action.durationInSeconds,
            };
        }
        default:
            return state;
    }
};
exports.durationReducer = durationReducer;
exports.DurationsContext = (0, react_1.createContext)({
    durations: {},
    setDurations: () => {
        throw new Error('context missing');
    },
});
const DurationsContextProvider = ({ children }) => {
    const [durations, setDurations] = (0, react_1.useReducer)(exports.durationReducer, {});
    const value = (0, react_1.useMemo)(() => {
        return {
            durations,
            setDurations,
        };
    }, [durations]);
    return ((0, jsx_runtime_1.jsx)(exports.DurationsContext.Provider, { value: value, children: children }));
};
exports.DurationsContextProvider = DurationsContextProvider;


/***/ }),

/***/ 6816:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useEmitVideoFrame = void 0;
const react_1 = __webpack_require__(758);
const useEmitVideoFrame = ({ ref, onVideoFrame, }) => {
    (0, react_1.useEffect)(() => {
        const { current } = ref;
        if (!current) {
            return;
        }
        if (!onVideoFrame) {
            return;
        }
        let handle = 0;
        const callback = () => {
            if (!ref.current) {
                return;
            }
            onVideoFrame(ref.current);
            handle = ref.current.requestVideoFrameCallback(callback);
        };
        callback();
        return () => {
            current.cancelVideoFrameCallback(handle);
        };
    }, [onVideoFrame, ref]);
};
exports.useEmitVideoFrame = useEmitVideoFrame;


/***/ }),

/***/ 2287:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Calculate the `.currentTime` of a video or audio element
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMediaTime = exports.getExpectedMediaFrameUncorrected = void 0;
const interpolate_js_1 = __webpack_require__(3242);
const getExpectedMediaFrameUncorrected = ({ frame, playbackRate, startFrom, }) => {
    return (0, interpolate_js_1.interpolate)(frame, [-1, startFrom, startFrom + 1], [-1, startFrom, startFrom + playbackRate]);
};
exports.getExpectedMediaFrameUncorrected = getExpectedMediaFrameUncorrected;
const getMediaTime = ({ fps, frame, playbackRate, startFrom, }) => {
    const expectedFrame = (0, exports.getExpectedMediaFrameUncorrected)({
        frame,
        playbackRate,
        startFrom,
    });
    const msPerFrame = 1000 / fps;
    return (expectedFrame * msPerFrame) / 1000;
};
exports.getMediaTime = getMediaTime;


/***/ }),

/***/ 7737:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Video = exports.OffthreadVideo = void 0;
var OffthreadVideo_js_1 = __webpack_require__(6173);
Object.defineProperty(exports, "OffthreadVideo", ({ enumerable: true, get: function () { return OffthreadVideo_js_1.OffthreadVideo; } }));
var Video_js_1 = __webpack_require__(3218);
Object.defineProperty(exports, "Video", ({ enumerable: true, get: function () { return Video_js_1.Video; } }));


/***/ }),

/***/ 5182:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOffthreadVideoSource = void 0;
const absolute_src_1 = __webpack_require__(9935);
const getOffthreadVideoSource = ({ src, transparent, currentTime, toneMapped, }) => {
    return `http://localhost:${window.remotion_proxyPort}/proxy?src=${encodeURIComponent((0, absolute_src_1.getAbsoluteSrc)(src))}&time=${encodeURIComponent(currentTime)}&transparent=${String(transparent)}&toneMapped=${String(toneMapped)}`;
};
exports.getOffthreadVideoSource = getOffthreadVideoSource;


/***/ }),

/***/ 395:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.seekToTimeMultipleUntilRight = exports.seekToTime = void 0;
const roundTo6Commas = (num) => {
    return Math.round(num * 100000) / 100000;
};
const seekToTime = (element, desiredTime) => {
    element.currentTime = desiredTime;
    let cancel;
    let cancelSeeked = null;
    const prom = new Promise((resolve) => {
        cancel = element.requestVideoFrameCallback((now, metadata) => {
            const displayIn = metadata.expectedDisplayTime - now;
            if (displayIn <= 0) {
                resolve(metadata.mediaTime);
                return;
            }
            setTimeout(() => {
                resolve(metadata.mediaTime);
            }, displayIn + 150);
        });
    });
    const waitForSeekedEvent = new Promise((resolve) => {
        const onDone = () => {
            resolve();
        };
        element.addEventListener('seeked', onDone, {
            once: true,
        });
        cancelSeeked = () => {
            element.removeEventListener('seeked', onDone);
        };
    });
    return {
        wait: Promise.all([prom, waitForSeekedEvent]).then(([time]) => time),
        cancel: () => {
            cancelSeeked === null || cancelSeeked === void 0 ? void 0 : cancelSeeked();
            element.cancelVideoFrameCallback(cancel);
        },
    };
};
exports.seekToTime = seekToTime;
const seekToTimeMultipleUntilRight = (element, desiredTime, fps) => {
    const threshold = 1 / fps / 2;
    let currentCancel = () => undefined;
    if (Number.isFinite(element.duration) &&
        element.currentTime >= element.duration &&
        desiredTime >= element.duration) {
        return {
            prom: Promise.resolve(),
            cancel: () => { },
        };
    }
    const prom = new Promise((resolve, reject) => {
        const firstSeek = (0, exports.seekToTime)(element, desiredTime + threshold);
        firstSeek.wait.then((seekedTo) => {
            const difference = Math.abs(desiredTime - seekedTo);
            if (difference <= threshold) {
                return resolve();
            }
            const sign = desiredTime > seekedTo ? 1 : -1;
            const newSeek = (0, exports.seekToTime)(element, seekedTo + threshold * sign);
            currentCancel = newSeek.cancel;
            newSeek.wait
                .then((newTime) => {
                const newDifference = Math.abs(desiredTime - newTime);
                if (roundTo6Commas(newDifference) <= roundTo6Commas(threshold)) {
                    return resolve();
                }
                const thirdSeek = (0, exports.seekToTime)(element, desiredTime + threshold);
                currentCancel = thirdSeek.cancel;
                return thirdSeek.wait
                    .then(() => {
                    resolve();
                })
                    .catch((err) => {
                    reject(err);
                });
            })
                .catch((err) => {
                reject(err);
            });
        });
        currentCancel = firstSeek.cancel;
    });
    return {
        prom,
        cancel: () => {
            currentCancel();
        },
    };
};
exports.seekToTimeMultipleUntilRight = seekToTimeMultipleUntilRight;


/***/ }),

/***/ 131:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useAppendVideoFragment = exports.appendVideoFragment = exports.isIosSafari = void 0;
const react_1 = __webpack_require__(758);
const toSeconds = (time, fps) => {
    return Math.round((time / fps) * 100) / 100;
};
const isIosSafari = () => {
    if (typeof window === 'undefined') {
        return false;
    }
    const isIpadIPodIPhone = /iP(ad|od|hone)/i.test(window.navigator.userAgent);
    const isAppleWebKit = /AppleWebKit/.test(window.navigator.userAgent);
    return isIpadIPodIPhone && isAppleWebKit;
};
exports.isIosSafari = isIosSafari;
// https://github.com/remotion-dev/remotion/issues/1655
const isIOSSafariAndBlob = (actualSrc) => {
    return (0, exports.isIosSafari)() && actualSrc.startsWith('blob:');
};
const getVideoFragmentStart = ({ actualFrom, fps, }) => {
    return toSeconds(Math.max(0, -actualFrom), fps);
};
const getVideoFragmentEnd = ({ duration, fps, }) => {
    return toSeconds(duration, fps);
};
const appendVideoFragment = ({ actualSrc, actualFrom, duration, fps, }) => {
    var _a;
    if (isIOSSafariAndBlob(actualSrc)) {
        return actualSrc;
    }
    if (actualSrc.startsWith('data:')) {
        return actualSrc;
    }
    const existingHash = Boolean(new URL(actualSrc, (_a = (typeof window === 'undefined' ? null : window.location.href)) !== null && _a !== void 0 ? _a : 'http://localhost:3000').hash);
    if (existingHash) {
        return actualSrc;
    }
    if (!Number.isFinite(actualFrom)) {
        return actualSrc;
    }
    const withStartHash = `${actualSrc}#t=${getVideoFragmentStart({ actualFrom, fps })}`;
    if (!Number.isFinite(duration)) {
        return withStartHash;
    }
    return `${withStartHash},${getVideoFragmentEnd({ duration, fps })}`;
};
exports.appendVideoFragment = appendVideoFragment;
const isSubsetOfDuration = ({ prevStartFrom, newStartFrom, prevDuration, newDuration, fps, }) => {
    const previousFrom = getVideoFragmentStart({ actualFrom: prevStartFrom, fps });
    const newFrom = getVideoFragmentStart({ actualFrom: newStartFrom, fps });
    const previousEnd = getVideoFragmentEnd({ duration: prevDuration, fps });
    const newEnd = getVideoFragmentEnd({ duration: newDuration, fps });
    if (newFrom < previousFrom) {
        return false;
    }
    if (newEnd > previousEnd) {
        return false;
    }
    return true;
};
const useAppendVideoFragment = ({ actualSrc: initialActualSrc, actualFrom: initialActualFrom, duration: initialDuration, fps, }) => {
    const actualFromRef = (0, react_1.useRef)(initialActualFrom);
    const actualDuration = (0, react_1.useRef)(initialDuration);
    const actualSrc = (0, react_1.useRef)(initialActualSrc);
    if (!isSubsetOfDuration({
        prevStartFrom: actualFromRef.current,
        newStartFrom: initialActualFrom,
        prevDuration: actualDuration.current,
        newDuration: initialDuration,
        fps,
    }) ||
        initialActualSrc !== actualSrc.current) {
        actualFromRef.current = initialActualFrom;
        actualDuration.current = initialDuration;
        actualSrc.current = initialActualSrc;
    }
    const appended = (0, exports.appendVideoFragment)({
        actualSrc: actualSrc.current,
        actualFrom: actualFromRef.current,
        duration: actualDuration.current,
        fps,
    });
    return appended;
};
exports.useAppendVideoFragment = useAppendVideoFragment;


/***/ }),

/***/ 607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMediaMutedState = exports.useMediaVolumeState = exports.SetMediaVolumeContext = exports.MediaVolumeContext = void 0;
const react_1 = __webpack_require__(758);
exports.MediaVolumeContext = (0, react_1.createContext)({
    mediaMuted: false,
    mediaVolume: 1,
});
exports.SetMediaVolumeContext = (0, react_1.createContext)({
    setMediaMuted: () => {
        throw new Error('default');
    },
    setMediaVolume: () => {
        throw new Error('default');
    },
});
const useMediaVolumeState = () => {
    const { mediaVolume } = (0, react_1.useContext)(exports.MediaVolumeContext);
    const { setMediaVolume } = (0, react_1.useContext)(exports.SetMediaVolumeContext);
    return (0, react_1.useMemo)(() => {
        return [mediaVolume, setMediaVolume];
    }, [mediaVolume, setMediaVolume]);
};
exports.useMediaVolumeState = useMediaVolumeState;
const useMediaMutedState = () => {
    const { mediaMuted } = (0, react_1.useContext)(exports.MediaVolumeContext);
    const { setMediaMuted } = (0, react_1.useContext)(exports.SetMediaVolumeContext);
    return (0, react_1.useMemo)(() => {
        return [mediaMuted, setMediaMuted];
    }, [mediaMuted, setMediaMuted]);
};
exports.useMediaMutedState = useMediaMutedState;


/***/ }),

/***/ 3641:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.evaluateVolume = void 0;
const evaluateVolume = ({ frame, volume, mediaVolume = 1, allowAmplificationDuringRender, }) => {
    const maxVolume = allowAmplificationDuringRender ? Infinity : 1;
    if (typeof volume === 'number') {
        return Math.min(maxVolume, volume * mediaVolume);
    }
    if (typeof volume === 'undefined') {
        return Number(mediaVolume);
    }
    const evaluated = volume(frame) * mediaVolume;
    if (typeof evaluated !== 'number') {
        throw new TypeError(`You passed in a a function to the volume prop but it did not return a number but a value of type ${typeof evaluated} for frame ${frame}`);
    }
    if (Number.isNaN(evaluated)) {
        throw new TypeError(`You passed in a function to the volume prop but it returned NaN for frame ${frame}.`);
    }
    if (!Number.isFinite(evaluated)) {
        throw new TypeError(`You passed in a function to the volume prop but it returned a non-finite number for frame ${frame}.`);
    }
    return Math.max(0, Math.min(maxVolume, evaluated));
};
exports.evaluateVolume = evaluateVolume;


/***/ }),

/***/ 8489:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.warnAboutNonSeekableMedia = void 0;
const alreadyWarned = {};
const warnAboutNonSeekableMedia = (ref, type) => {
    // Media is not loaded yet, but this does not yet mean something is wrong with the media
    if (ref === null) {
        return;
    }
    if (ref.seekable.length === 0) {
        return;
    }
    if (ref.seekable.length > 1) {
        return;
    }
    if (alreadyWarned[ref.src]) {
        return;
    }
    const range = { start: ref.seekable.start(0), end: ref.seekable.end(0) };
    if (range.start === 0 && range.end === 0) {
        const msg = [
            `The media ${ref.src} cannot be seeked. This could be one of few reasons:`,
            '1) The media resource was replaced while the video is playing but it was not loaded yet.',
            '2) The media does not support seeking.',
            '3) The media was loaded with security headers prventing it from being included.',
            'Please see https://remotion.dev/docs/non-seekable-media for assistance.',
        ].join('\n');
        if (type === 'console-error') {
            // eslint-disable-next-line no-console
            console.error(msg);
        }
        else if (type === 'console-warning') {
            // eslint-disable-next-line no-console
            console.warn(`The media ${ref.src} does not support seeking. The video will render fine, but may not play correctly in the Remotion Studio and in the <Player>. See https://remotion.dev/docs/non-seekable-media for an explanation.`);
        }
        else {
            throw new Error(msg);
        }
        alreadyWarned[ref.src] = true;
    }
};
exports.warnAboutNonSeekableMedia = warnAboutNonSeekableMedia;


/***/ }),

/***/ 7824:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.watchStaticFile = exports.WATCH_REMOTION_STATIC_FILES = void 0;
const get_remotion_environment_1 = __webpack_require__(2161);
const v5_flag_1 = __webpack_require__(2635);
exports.WATCH_REMOTION_STATIC_FILES = 'remotion_staticFilesChanged';
/**
 * @description Watch for changes in a specific static file.
 * @param {string} fileName - The name of the static file to watch for changes.
 * @param {WatcherCallback} callback - A callback function to be called when the file changes.
 * @returns {{cancel: () => void}} A function that can be used to cancel the event listener.
 * @see [Documentation](https://www.remotion.dev/docs/watchstaticfile)
 */
const watchStaticFile = (fileName, callback) => {
    if (v5_flag_1.ENABLE_V5_BREAKING_CHANGES) {
        throw new Error('watchStaticFile() has moved into the `@remotion/studio` package. Update your imports.');
    }
    // Check if function is called in Remotion Studio
    if (!(0, get_remotion_environment_1.getRemotionEnvironment)().isStudio) {
        // eslint-disable-next-line no-console
        console.warn('The API is only available while using the Remotion Studio.');
        return { cancel: () => undefined };
    }
    const withoutStaticBase = fileName.startsWith(window.remotion_staticBase)
        ? fileName.replace(window.remotion_staticBase, '')
        : fileName;
    const withoutLeadingSlash = withoutStaticBase.startsWith('/')
        ? withoutStaticBase.slice(1)
        : withoutStaticBase;
    let prevFileData = window.remotion_staticFiles.find((file) => file.name === withoutLeadingSlash);
    // Check if the specified static file has updated or deleted
    const checkFile = (event) => {
        const staticFiles = event.detail.files;
        // Check for user specified file
        const newFileData = staticFiles.find((file) => file.name === withoutLeadingSlash);
        if (!newFileData) {
            // File is deleted
            if (prevFileData !== undefined) {
                callback(null);
            }
            prevFileData = undefined;
            return;
        }
        if (prevFileData === undefined ||
            prevFileData.lastModified !== newFileData.lastModified) {
            callback(newFileData); // File is added or modified
            prevFileData = newFileData;
        }
    };
    window.addEventListener(exports.WATCH_REMOTION_STATIC_FILES, checkFile);
    const cancel = () => {
        return window.removeEventListener(exports.WATCH_REMOTION_STATIC_FILES, checkFile);
    };
    return { cancel };
};
exports.watchStaticFile = watchStaticFile;


/***/ }),

/***/ 1543:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemotionContextProvider = exports.useRemotionContexts = void 0;
const jsx_runtime_1 = __webpack_require__(6070);
// This is used for when other reconcilers are being used
// such as in React Three Fiber. All the contexts need to be passed again
// for them to be useable
const react_1 = __importStar(__webpack_require__(758));
const CanUseRemotionHooks_js_1 = __webpack_require__(7803);
const CompositionManagerContext_js_1 = __webpack_require__(809);
const NativeLayers_js_1 = __webpack_require__(596);
const RenderAssetManager_js_1 = __webpack_require__(9634);
const ResolveCompositionConfig_js_1 = __webpack_require__(6905);
const SequenceContext_js_1 = __webpack_require__(3981);
const SequenceManager_js_1 = __webpack_require__(6109);
const buffering_js_1 = __webpack_require__(9211);
const nonce_js_1 = __webpack_require__(5574);
const prefetch_state_js_1 = __webpack_require__(2926);
const timeline_position_state_js_1 = __webpack_require__(5488);
function useRemotionContexts() {
    const compositionManagerCtx = react_1.default.useContext(CompositionManagerContext_js_1.CompositionManager);
    const timelineContext = react_1.default.useContext(timeline_position_state_js_1.TimelineContext);
    const setTimelineContext = react_1.default.useContext(timeline_position_state_js_1.SetTimelineContext);
    const sequenceContext = react_1.default.useContext(SequenceContext_js_1.SequenceContext);
    const nonceContext = react_1.default.useContext(nonce_js_1.NonceContext);
    const canUseRemotionHooksContext = react_1.default.useContext(CanUseRemotionHooks_js_1.CanUseRemotionHooks);
    const nativeLayersContext = react_1.default.useContext(NativeLayers_js_1.NativeLayersContext);
    const preloadContext = react_1.default.useContext(prefetch_state_js_1.PreloadContext);
    const resolveCompositionContext = react_1.default.useContext(ResolveCompositionConfig_js_1.ResolveCompositionContext);
    const renderAssetManagerContext = react_1.default.useContext(RenderAssetManager_js_1.RenderAssetManager);
    const sequenceManagerContext = react_1.default.useContext(SequenceManager_js_1.SequenceManager);
    const bufferManagerContext = react_1.default.useContext(buffering_js_1.BufferingContextReact);
    return (0, react_1.useMemo)(() => ({
        compositionManagerCtx,
        timelineContext,
        setTimelineContext,
        sequenceContext,
        nonceContext,
        canUseRemotionHooksContext,
        nativeLayersContext,
        preloadContext,
        resolveCompositionContext,
        renderAssetManagerContext,
        sequenceManagerContext,
        bufferManagerContext,
    }), [
        compositionManagerCtx,
        nonceContext,
        sequenceContext,
        setTimelineContext,
        timelineContext,
        canUseRemotionHooksContext,
        nativeLayersContext,
        preloadContext,
        resolveCompositionContext,
        renderAssetManagerContext,
        sequenceManagerContext,
        bufferManagerContext,
    ]);
}
exports.useRemotionContexts = useRemotionContexts;
const RemotionContextProvider = (props) => {
    const { children, contexts } = props;
    return ((0, jsx_runtime_1.jsx)(CanUseRemotionHooks_js_1.CanUseRemotionHooks.Provider, { value: contexts.canUseRemotionHooksContext, children: (0, jsx_runtime_1.jsx)(nonce_js_1.NonceContext.Provider, { value: contexts.nonceContext, children: (0, jsx_runtime_1.jsx)(NativeLayers_js_1.NativeLayersContext.Provider, { value: contexts.nativeLayersContext, children: (0, jsx_runtime_1.jsx)(prefetch_state_js_1.PreloadContext.Provider, { value: contexts.preloadContext, children: (0, jsx_runtime_1.jsx)(CompositionManagerContext_js_1.CompositionManager.Provider, { value: contexts.compositionManagerCtx, children: (0, jsx_runtime_1.jsx)(SequenceManager_js_1.SequenceManager.Provider, { value: contexts.sequenceManagerContext, children: (0, jsx_runtime_1.jsx)(RenderAssetManager_js_1.RenderAssetManager.Provider, { value: contexts.renderAssetManagerContext, children: (0, jsx_runtime_1.jsx)(ResolveCompositionConfig_js_1.ResolveCompositionContext.Provider, { value: contexts.resolveCompositionContext, children: (0, jsx_runtime_1.jsx)(timeline_position_state_js_1.TimelineContext.Provider, { value: contexts.timelineContext, children: (0, jsx_runtime_1.jsx)(timeline_position_state_js_1.SetTimelineContext.Provider, { value: contexts.setTimelineContext, children: (0, jsx_runtime_1.jsx)(SequenceContext_js_1.SequenceContext.Provider, { value: contexts.sequenceContext, children: (0, jsx_runtime_1.jsx)(buffering_js_1.BufferingContextReact.Provider, { value: contexts.bufferManagerContext, children: children }) }) }) }) }) }) }) }) }) }) }) }));
};
exports.RemotionContextProvider = RemotionContextProvider;


/***/ }),

/***/ 4733:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 1896:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(4733);
} else {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "deco:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdeco"] = self["webpackChunkdeco"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var exports = {};
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
const remotion_1 = __webpack_require__(4337);
remotion_1.Internals.setupEnvVariables();
remotion_1.Internals.CSSUtils.injectCSS(`
  .css-reset, .css-reset * {
    font-size: 16px;
    line-height: 1.5;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    background: transparent;
    box-sizing: border-box;
  }

  .algolia-docsearch-suggestion--highlight {
    font-size: 15px;
    line-height: 1.25;
  }

  .__remotion-info-button-container code {
    font-family: monospace;
    font-size: 14px;
    color: #0584f2
  }

  .__remotion-vertical-scrollbar::-webkit-scrollbar {
      width: 6px;
  }
  .__remotion-vertical-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.0);
  }
  .__remotion-vertical-scrollbar:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .__remotion-vertical-scrollbar:hover::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 1);
  }


  .__remotion-horizontal-scrollbar::-webkit-scrollbar {
    height: 6px;
  }
  .__remotion-horizontal-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.0);
  }
  .__remotion-horizontal-scrollbar:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .__remotion-horizontal-scrollbar:hover::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 1);
  }


  @-moz-document url-prefix() {
    .__remotion-vertical-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.6) rgba(0, 0, 0, 0);
    }

    .__remotion-vertical-scrollbar:hover {
      scrollbar-color: rgba(0, 0, 0, 1) rgba(0, 0, 0, 0);
    }

    .__remotion-horizontal-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.6) rgba(0, 0, 0, 0);
    }

    .__remotion-horizontal-scrollbar:hover {
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 1) rgba(0, 0, 0, 0);
    }
  }


  .__remotion-timeline-slider {
    appearance: none;
    width: 100px;
    border-radius: 3px;
    height: 6px;
    background-color: rgba(255, 255, 255, 0.1);
    accent-color: #ffffff;
  }
  
  .__remotion-timeline-slider::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #ffffff;
    appearance: none;
  }



`);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {

// EXTERNAL MODULE: ./node_modules/.pnpm/remotion@4.0.212_react-dom@18.3.1_react@18.3.1/node_modules/remotion/dist/cjs/index.js
var cjs = __webpack_require__(4337);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(758);
;// CONCATENATED MODULE: ./remotion/Composition.tsx
const MyComposition = () => {
  return /* @__PURE__ */ React.createElement("div", { style: { fontSize: "55px", display: "flex", justifyContent: "center", alignItems: "center" } }, "hello world");
};

;// CONCATENATED MODULE: ./remotion/Root.tsx



const RemotionRoot = () => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    cjs.Composition,
    {
      id: "Empty",
      component: MyComposition,
      durationInFrames: 60,
      fps: 30,
      width: 1280,
      height: 720
    }
  ));
};

;// CONCATENATED MODULE: ./remotion/index.ts


(0,cjs.registerRoot)(RemotionRoot);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);


if (typeof globalThis === 'undefined') {
	window.React = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)));
} else {
	globalThis.React = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)));
}

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/* unused harmony export setBundleModeAndUpdate */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9576);
/* harmony import */ var remotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4337);
/* harmony import */ var remotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remotion_no_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2280);




let currentBundleMode = {
  type: "index"
};
const setBundleMode = (state) => {
  currentBundleMode = state;
};
const getBundleMode = () => {
  return currentBundleMode;
};
remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.CSSUtils.injectCSS(
  remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.CSSUtils.makeDefaultPreviewCSS(null, "#1f2428")
);
const getCanSerializeDefaultProps = (object) => {
  try {
    const str = JSON.stringify(object);
    return str.length < 256 * 1024 * 1024 * 0.9;
  } catch (err) {
    if (err.message.includes("Invalid string length")) {
      return false;
    }
    throw err;
  }
};
const isInHeadlessBrowser = () => {
  return typeof window.remotion_puppeteerTimeout !== "undefined";
};
const DelayedSpinner = () => {
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 2e3);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  if (!show) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    remotion__WEBPACK_IMPORTED_MODULE_2__.AbsoluteFill,
    {
      style: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        opacity: 0.6,
        color: "white",
        fontFamily: "Helvetica, Arial, sans-serif"
      }
    },
    "Loading Studio"
  );
};
const GetVideo = ({ state }) => {
  const video = remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.useVideo();
  const compositions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.CompositionManager);
  const portalContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [handle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(
    () => (0,remotion__WEBPACK_IMPORTED_MODULE_2__.delayRender)("Wait for Composition" + JSON.stringify(state))
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => (0,remotion__WEBPACK_IMPORTED_MODULE_2__.continueRender)(handle);
  }, [handle]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (state.type !== "composition") {
      return;
    }
    if (!video && compositions.compositions.length > 0) {
      const foundComposition = compositions.compositions.find(
        (c) => c.id === state.compositionName
      );
      if (!foundComposition) {
        throw new Error(
          `Found no composition with the name ${state.compositionName}. The following compositions were found instead: ${compositions.compositions.map((c) => c.id).join(
            ", "
          )}. All compositions must have their ID calculated deterministically and must be mounted at the same time.`
        );
      }
      if (foundComposition) {
        compositions.setCanvasContent({
          type: "composition",
          compositionId: foundComposition.id
        });
      } else {
        compositions.setCanvasContent(null);
      }
      compositions.setCurrentCompositionMetadata({
        props: remotion_no_react__WEBPACK_IMPORTED_MODULE_3__.NoReactInternals.deserializeJSONWithCustomFields(
          state.serializedResolvedPropsWithSchema
        ),
        durationInFrames: state.compositionDurationInFrames,
        fps: state.compositionFps,
        height: state.compositionHeight,
        width: state.compositionWidth,
        defaultCodec: state.compositionDefaultCodec
      });
    }
  }, [compositions, compositions.compositions, state, video]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (state.type === "evaluation") {
      (0,remotion__WEBPACK_IMPORTED_MODULE_2__.continueRender)(handle);
    } else if (video) {
      (0,remotion__WEBPACK_IMPORTED_MODULE_2__.continueRender)(handle);
    }
  }, [handle, state.type, video]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!video) {
      return;
    }
    const { current } = portalContainer;
    if (!current) {
      throw new Error("portal did not render");
    }
    current.appendChild(remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.portalNode());
    return () => {
      current.removeChild(remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.portalNode());
    };
  }, [video]);
  if (!video) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      ref: portalContainer,
      id: "remotion-canvas",
      style: {
        width: video.width,
        height: video.height,
        display: "flex",
        backgroundColor: "transparent"
      }
    }
  );
};
const waitForRootHandle = (0,remotion__WEBPACK_IMPORTED_MODULE_2__.delayRender)(
  "Loading root component - See https://remotion.dev/docs/troubleshooting/loading-root-component if you experience a timeout",
  {
    timeoutInMilliseconds: 1e4
  }
);
const videoContainer = document.getElementById(
  "video-container"
);
let root = null;
const getRootForElement = () => {
  if (root) {
    return root;
  }
  root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(videoContainer);
  return root;
};
const renderToDOM = (content) => {
  if (!react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot) {
    if (remotion_no_react__WEBPACK_IMPORTED_MODULE_3__.NoReactInternals.ENABLE_V5_BREAKING_CHANGES) {
      throw new Error(
        "Remotion 5.0 does only support React 18+. However, ReactDOM.createRoot() is undefined."
      );
    }
    react_dom_client__WEBPACK_IMPORTED_MODULE_1__.render(
      content,
      videoContainer
    );
    return;
  }
  getRootForElement().render(content);
};
const renderContent = (Root) => {
  const bundleMode = getBundleMode();
  if (bundleMode.type === "composition") {
    const markup = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.RemotionRoot, { numberOfAudioTags: 0 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Root, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(GetVideo, { state: bundleMode }));
    renderToDOM(markup);
  }
  if (bundleMode.type === "evaluation") {
    const markup = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.RemotionRoot, { numberOfAudioTags: 0 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Root, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(GetVideo, { state: bundleMode }));
    renderToDOM(markup);
  }
  if (bundleMode.type === "index") {
    if (isInHeadlessBrowser()) {
      return;
    }
    renderToDOM(
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DelayedSpinner, null))
    );
    __webpack_require__.e(/* import() */ 941).then(__webpack_require__.bind(__webpack_require__, 9941)).then(({ StudioInternals }) => {
      renderToDOM(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(StudioInternals.Studio, { readOnly: true, rootComponent: Root }));
    }).catch((err) => {
      renderToDOM(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Failed to load Remotion Studio: ", err.message));
    });
  }
};
remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.waitForRoot((Root) => {
  renderContent(Root);
  (0,remotion__WEBPACK_IMPORTED_MODULE_2__.continueRender)(waitForRootHandle);
});
const setBundleModeAndUpdate = (state) => {
  setBundleMode(state);
  const delay = (0,remotion__WEBPACK_IMPORTED_MODULE_2__.delayRender)(
    "Waiting for root component to load - See https://remotion.dev/docs/troubleshooting/loading-root-component if you experience a timeout"
  );
  remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.waitForRoot((Root) => {
    renderContent(Root);
    requestAnimationFrame(() => {
      (0,remotion__WEBPACK_IMPORTED_MODULE_2__.continueRender)(delay);
    });
  });
};
if (typeof window !== "undefined") {
  const getUnevaluatedComps = () => {
    if (!remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.getRoot()) {
      throw new Error(
        "registerRoot() was never called. 1. Make sure you specified the correct entrypoint for your bundle. 2. If your registerRoot() call is deferred, use the delayRender/continueRender pattern to tell Remotion to wait."
      );
    }
    if (!remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.compositionsRef.current) {
      throw new Error("Unexpectedly did not have a CompositionManager");
    }
    const compositions = remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.compositionsRef.current.getCompositions();
    const canSerializeDefaultProps = getCanSerializeDefaultProps(compositions);
    if (!canSerializeDefaultProps) {
      console.warn(
        "defaultProps are too big to serialize - trying to find the problematic composition..."
      );
      for (const comp of compositions) {
        if (!getCanSerializeDefaultProps(comp)) {
          throw new Error(
            `defaultProps too big - could not serialize - the defaultProps of composition with ID ${comp.id} - the object that was passed to defaultProps was too big. Learn how to mitigate this error by visiting https://remotion.dev/docs/troubleshooting/serialize-defaultprops`
          );
        }
      }
      console.warn(
        "Could not single out a problematic composition -  The composition list as a whole is too big to serialize."
      );
      throw new Error(
        "defaultProps too big - Could not serialize - an object that was passed to defaultProps was too big. Learn how to mitigate this error by visiting https://remotion.dev/docs/troubleshooting/serialize-defaultprops"
      );
    }
    return compositions;
  };
  window.getStaticCompositions = () => {
    const compositions = getUnevaluatedComps();
    const inputProps = typeof window === "undefined" || (0,remotion__WEBPACK_IMPORTED_MODULE_2__.getRemotionEnvironment)().isPlayer ? {} : (0,remotion__WEBPACK_IMPORTED_MODULE_2__.getInputProps)() ?? {};
    return Promise.all(
      compositions.map(async (c) => {
        const handle = (0,remotion__WEBPACK_IMPORTED_MODULE_2__.delayRender)(
          `Running calculateMetadata() for composition ${c.id}. If you didn't want to evaluate this composition, use "selectComposition()" instead of "getCompositions()"`
        );
        const originalProps = {
          ...c.defaultProps ?? {},
          ...inputProps ?? {}
        };
        const comp = remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.resolveVideoConfig({
          calculateMetadata: c.calculateMetadata,
          compositionDurationInFrames: c.durationInFrames ?? null,
          compositionFps: c.fps ?? null,
          compositionHeight: c.height ?? null,
          compositionWidth: c.width ?? null,
          signal: new AbortController().signal,
          originalProps,
          defaultProps: c.defaultProps ?? {},
          compositionId: c.id
        });
        const resolved = await Promise.resolve(comp);
        (0,remotion__WEBPACK_IMPORTED_MODULE_2__.continueRender)(handle);
        const { props, defaultProps, ...data } = resolved;
        return {
          ...data,
          serializedResolvedPropsWithCustomSchema: remotion_no_react__WEBPACK_IMPORTED_MODULE_3__.NoReactInternals.serializeJSONWithDate({
            data: props,
            indent: void 0,
            staticBase: null
          }).serializedString,
          serializedDefaultPropsWithCustomSchema: remotion_no_react__WEBPACK_IMPORTED_MODULE_3__.NoReactInternals.serializeJSONWithDate({
            data: defaultProps,
            indent: void 0,
            staticBase: null
          }).serializedString
        };
      })
    );
  };
  window.remotion_getCompositionNames = () => {
    return getUnevaluatedComps().map((c) => c.id);
  };
  window.remotion_calculateComposition = async (compId) => {
    const compositions = getUnevaluatedComps();
    const selectedComp = compositions.find((c) => c.id === compId);
    if (!selectedComp) {
      throw new Error(
        `Could not find composition with ID ${compId}. Available compositions: ${compositions.map((c) => c.id).join(", ")}`
      );
    }
    const abortController = new AbortController();
    const handle = (0,remotion__WEBPACK_IMPORTED_MODULE_2__.delayRender)(
      `Running the calculateMetadata() function for composition ${compId}`
    );
    const inputProps = typeof window === "undefined" || (0,remotion__WEBPACK_IMPORTED_MODULE_2__.getRemotionEnvironment)().isPlayer ? {} : (0,remotion__WEBPACK_IMPORTED_MODULE_2__.getInputProps)() ?? {};
    const originalProps = {
      ...selectedComp.defaultProps ?? {},
      ...inputProps ?? {}
    };
    const prom = await Promise.resolve(
      remotion__WEBPACK_IMPORTED_MODULE_2__.Internals.resolveVideoConfig({
        calculateMetadata: selectedComp.calculateMetadata,
        compositionDurationInFrames: selectedComp.durationInFrames ?? null,
        compositionFps: selectedComp.fps ?? null,
        compositionHeight: selectedComp.height ?? null,
        compositionWidth: selectedComp.width ?? null,
        originalProps,
        signal: abortController.signal,
        defaultProps: selectedComp.defaultProps ?? {},
        compositionId: selectedComp.id
      })
    );
    (0,remotion__WEBPACK_IMPORTED_MODULE_2__.continueRender)(handle);
    const { props, defaultProps, ...data } = prom;
    return {
      ...data,
      serializedResolvedPropsWithCustomSchema: remotion_no_react__WEBPACK_IMPORTED_MODULE_3__.NoReactInternals.serializeJSONWithDate({
        data: props,
        indent: void 0,
        staticBase: null
      }).serializedString,
      serializedDefaultPropsWithCustomSchema: remotion_no_react__WEBPACK_IMPORTED_MODULE_3__.NoReactInternals.serializeJSONWithDate({
        data: defaultProps,
        indent: void 0,
        staticBase: null
      }).serializedString
    };
  };
  window.siteVersion = "11";
  window.remotion_version = remotion__WEBPACK_IMPORTED_MODULE_2__.VERSION;
  window.remotion_setBundleMode = setBundleModeAndUpdate;
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map