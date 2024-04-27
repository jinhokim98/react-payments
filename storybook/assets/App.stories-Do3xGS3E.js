import{u as i,j as n}from"./styled-components.browser.esm-DO55u7qc.js";import{r}from"./index-CsdIBAqE.js";/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const m=r.createContext({outlet:null,matches:[],isDataRoute:!1}),l=r.createContext(null);function d(e){let o=r.useContext(m).outlet;return o&&r.createElement(l.Provider,{value:e},o)}function p(e){return d(e.context)}new Promise(()=>{});const x=i.div`
  width: 37.6rem;
  min-height: 70rem;
  margin: 5rem auto;

  background-color: ${e=>e.theme.color.white};
  border: 0.1rem solid ${e=>e.theme.color.gray};
  border-radius: 0.4rem;
`;function c(){return n.jsx(x,{children:n.jsx(p,{})})}c.__docgenInfo={description:"",methods:[],displayName:"App"};const g={title:"App",component:c},t={};var s,a,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(u=(a=t.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,g as default};
