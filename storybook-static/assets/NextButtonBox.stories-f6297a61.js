var _=Object.defineProperty;var o=(e,t)=>_(e,"name",{value:t,configurable:!0});import{j as d}from"./jsx-runtime-cd98d61a.js";import{a as y,r as i}from"./index-a38f3d31.js";import"./Input-83b14ba2.js";import{B as L}from"./Box-5350e976.js";import{B as w}from"./Button-de42b912.js";import"./es.object.get-own-property-descriptor-d261b708.js";/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},B.apply(this,arguments)}o(B,"_extends");var C;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(C||(C={}));function p(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}o(p,"invariant");function P(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}o(P,"parsePath");var N;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(N||(N={}));function M(e,t){t===void 0&&(t="/");let{pathname:a,search:r="",hash:n=""}=typeof e=="string"?P(e):e;return{pathname:a?a.startsWith("/")?a:I(a,t):t,search:T(r),hash:V(n)}}o(M,"resolvePath");function I(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?a.length>1&&a.pop():n!=="."&&a.push(n)}),a.length>1?a.join("/"):"/"}o(I,"resolvePathname");function g(e,t,a,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}o(g,"getInvalidPathError");function D(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}o(D,"getPathContributingMatches");function W(e,t,a,r){r===void 0&&(r=!1);let n;typeof e=="string"?n=P(e):(n=B({},e),p(!n.pathname||!n.pathname.includes("?"),g("?","pathname","search",n)),p(!n.pathname||!n.pathname.includes("#"),g("#","pathname","hash",n)),p(!n.search||!n.search.includes("#"),g("#","search","hash",n)));let s=e===""||n.pathname==="",u=s?"/":n.pathname,c;if(r||u==null)c=a;else{let m=t.length-1;if(u.startsWith("..")){let x=u.split("/");for(;x[0]==="..";)x.shift(),m-=1;n.pathname=x.join("/")}c=m>=0?t[m]:"/"}let l=M(n,c),f=u&&u!=="/"&&u.endsWith("/"),U=(s||u===".")&&a.endsWith("/");return!l.pathname.endsWith("/")&&(f||U)&&(l.pathname+="/"),l}o(W,"resolveTo");const J=o(e=>e.join("/").replace(/\/\/+/g,"/"),"joinPaths"),T=o(e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,"normalizeSearch"),V=o(e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,"normalizeHash"),k=["post","put","patch","delete"];[...k];/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}o(R,"isPolyfill");const $=typeof Object.is=="function"?Object.is:R,{useState:z,useEffect:q,useLayoutEffect:G,useDebugValue:F}=y;function K(e,t,a){const r=t(),[{inst:n},s]=z({inst:{value:r,getSnapshot:t}});return G(()=>{n.value=r,n.getSnapshot=t,v(n)&&s({inst:n})},[e,r,t]),q(()=>(v(n)&&s({inst:n}),e(o(()=>{v(n)&&s({inst:n})},"handleStoreChange"))),[e]),F(r),r}o(K,"useSyncExternalStore$2");function v(e){const t=e.getSnapshot,a=e.value;try{const r=t();return!$(a,r)}catch{return!0}}o(v,"checkIfSnapshotChanged");function Q(e,t,a){return t()}o(Q,"useSyncExternalStore$1");const X=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Y=!X,Z=Y?Q:K;"useSyncExternalStore"in y&&(e=>e.useSyncExternalStore)(y);const A=i.createContext(null),j=i.createContext(null),H=i.createContext({outlet:null,matches:[]});function O(){return i.useContext(j)!=null}o(O,"useInRouterContext");function ee(){return O()||p(!1),i.useContext(j).location}o(ee,"useLocation");function te(){O()||p(!1);let{basename:e,navigator:t}=i.useContext(A),{matches:a}=i.useContext(H),{pathname:r}=ee(),n=JSON.stringify(D(a).map(c=>c.pathnameBase)),s=i.useRef(!1);return i.useEffect(()=>{s.current=!0}),i.useCallback(function(c,l){if(l===void 0&&(l={}),!s.current)return;if(typeof c=="number"){t.go(c);return}let f=W(c,JSON.parse(n),r,l.relative==="path");e!=="/"&&(f.pathname=f.pathname==="/"?e:J([e,f.pathname])),(l.replace?t.replace:t.push)(f,l.state,l)},[e,t,n,r])}o(te,"useNavigate");var S;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(S||(S={}));var b;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(b||(b={}));var E;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(E||(E={}));new Promise(()=>{});function h({isCompleted:e}){const t=te(),[a,r]=i.useState(!1),n=o(()=>{r(!0),e&&t("/card-completed")},"handleClickNext"),s=!e&&a;return d.jsxs(L,{className:"button-box",children:[s&&d.jsx("div",{className:"warning-text",children:"모든 정보가 입력되지 않았습니다."}),d.jsx(w,{type:"button",className:"button-text",onClick:n,children:"다음"})]})}o(h,"NextButtonBox");try{h.displayName="NextButtonBox",h.__docgenInfo={description:"",displayName:"NextButtonBox",props:{isCompleted:{defaultValue:null,description:"",name:"isCompleted",required:!0,type:{name:"boolean"}}}}}catch{}const fe={parameters:{storySource:{source:`import NextButtonBox from './NextButtonBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'NextButtonBox',
  component: NextButtonBox,
} as Meta;

const Template: ComponentStory<typeof NextButtonBox> = (args) => <NextButtonBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:55,line:10},endLoc:{col:92,line:10},startBody:{col:55,line:10},endBody:{col:92,line:10}}}}},title:"NextButtonBox",component:h},ne=o(e=>d.jsx(h,{...e}),"Template"),ae=ne.bind({});ae.args={};const pe=["Default"];export{ae as Default,pe as __namedExportsOrder,fe as default};
//# sourceMappingURL=NextButtonBox.stories-f6297a61.js.map
