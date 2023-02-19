var l=Object.defineProperty;var _=(e,r)=>l(e,"name",{value:r,configurable:!0});import{r as m}from"./index-a38f3d31.js";var i={},x={get exports(){return i},set exports(e){i=e}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=m,a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,d=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,p){var t,o={},s=null,f=null;p!==void 0&&(s=""+p),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(f=r.ref);for(t in r)v.call(r,t)&&!E.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:a,type:e,key:s,ref:f,props:o,_owner:d.current}}_(u,"q");n.Fragment=c;n.jsx=u;n.jsxs=u;(function(e){e.exports=n})(x);export{i as j};
//# sourceMappingURL=jsx-runtime-cd98d61a.js.map
