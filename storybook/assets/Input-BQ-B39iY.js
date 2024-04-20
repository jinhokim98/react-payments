import{u as e,a as r,j as t}from"./styled-components.browser.esm-DO55u7qc.js";const a=e.input`
  width: 100%;
  height: 3.2rem;
  padding: 0.8rem;

  border: 0.1rem solid ${o=>o.theme.color.lightGray};
  border-radius: 0.2rem;
  ${o=>o.theme.typography.input};

  ${o=>o["aria-invalid"]&&r`
      border-color: ${o.theme.color.red};
    `}

  &:focus {
    border-color: ${o=>o.theme.color.black};
    outline: none;

    ${o=>o["aria-invalid"]&&r`
        border-color: ${o.theme.color.red};
      `}
  }

  &::placeholder {
    color: ${o=>o.theme.color.lightGray};
  }
`,i=({...o})=>t.jsx(a,{...o});i.__docgenInfo={description:"",methods:[],displayName:"Input"};export{i as I};
