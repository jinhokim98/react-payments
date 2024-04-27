import{u as o,j as t}from"./styled-components.browser.esm-DO55u7qc.js";const s=o.fieldset`
  display: flex;
  gap: 0.8rem;
  width: 100%;
  margin-bottom: 0.4rem;
`,i=o.legend`
  margin-bottom: 0.8rem;
  ${e=>e.theme.typography.label};
  color: ${e=>e.theme.color.black};
`;o.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;const l=o.span`
  ${e=>e.theme.typography.caption};
  color: ${e=>e.theme.color.red};
`,d=({label:e,error:r,children:n})=>t.jsxs(t.Fragment,{children:[t.jsxs(s,{children:[t.jsx(i,{children:e}),n]}),r&&t.jsx(l,{children:r})]});d.__docgenInfo={description:"",methods:[],displayName:"InputField"};export{d as I};
