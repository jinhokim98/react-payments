import{u as t,j as r}from"./styled-components.browser.esm-DO55u7qc.js";const o=t.fieldset`
  display: flex;
  gap: 0.8rem;
  width: 100%;
  margin-bottom: 0.4rem;
`,s=t.legend`
  margin-bottom: 0.8rem;
  ${e=>e.theme.typography.label};
  color: ${e=>e.theme.color.black};
`;t.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;const d=t.span`
  ${e=>e.theme.typography.caption};
  color: ${e=>e.theme.color.red};
`,l=({label:e,error:i,children:n})=>r.jsxs(r.Fragment,{children:[r.jsxs(o,{children:[r.jsx(s,{children:e}),n]}),i&&r.jsx(d,{children:i})]});l.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"JSX.Element"},description:""}}};export{l as I};
