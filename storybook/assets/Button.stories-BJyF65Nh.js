import{u as i,j as p}from"./styled-components.browser.esm-DO55u7qc.js";import"./index-CsdIBAqE.js";const m=i.button`
  width: 100%;
  height: 100%;

  border: none;
  background-color: ${r=>r.theme.color.darkGray};
  ${r=>r.theme.typography.button};
  color: ${r=>r.theme.color.white};

  cursor: pointer;

  &:active {
    background-color: ${r=>r.theme.color.lightGray};
  }
`,d=({label:r,...l})=>p.jsx(m,{...l,children:r});d.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""}}};const h={title:"Button",component:d},e={args:{label:"안녕"}},o={args:{label:"안녕",style:{borderRadius:8}}};var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: '안녕'
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var n,c,u;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: '안녕',
    style: {
      borderRadius: 8
    }
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const y=["기본","테두리_둥글게"];export{y as __namedExportsOrder,h as default,e as 기본,o as 테두리_둥글게};
