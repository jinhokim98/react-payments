import{u as o,j as t}from"./styled-components.browser.esm-DO55u7qc.js";import{r as a}from"./index-CsdIBAqE.js";import{t as d}from"./theme-CdHeXgP_.js";const v=o.div`
  position: relative;
  width: 100%;
  height: 3.2rem;

  border-radius: 0.3rem;
  border: 0.1rem solid ${e=>e.theme.color.lightGray};

  cursor: pointer;
`,w=o.select`
  width: 100%;
  height: 100%;
  background: transparent;
  border: 0 none;
  padding: 0 1rem;
  position: relative;
  z-index: 3;

  &::-ms-expand {
    display: none;
  }

  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;

  color: ${e=>e.$isPlaceholder?e.theme.color.lightGray:e.theme.color.black};
  ${e=>e.theme.typography.input};
`,y=o.div`
  position: absolute;
  top: 25%;
  right: 1rem;
`,f=o.option`
  color: ${e=>e.theme.color.black};
  ${e=>e.theme.typography.input};
`,p=({isActive:e})=>t.jsx("svg",{width:"1.6rem",height:"1.6rem",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:e?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease-in-out"},children:t.jsx("path",{d:"M12.1801 9.54985L8.36014 5.72992L4.54021 9.54985",stroke:e?d.color.black:d.color.lightGray,strokeWidth:"1.32867",strokeLinecap:"round",strokeLinejoin:"round"})});p.__docgenInfo={description:"",methods:[],displayName:"ArrowIcon",props:{isActive:{required:!0,tsType:{name:"boolean"},description:""}}};const x=({label:e,placeholder:i,options:u,value:l,onChange:m})=>{const r=a.useRef(null),[h,c]=a.useState(!1),g=()=>{c(n=>!n)};return a.useEffect(()=>{const n=s=>{r.current&&!r.current.contains(s.target)&&c(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[r]),t.jsxs(v,{"aria-label":e,ref:r,onClick:g,children:[t.jsxs(w,{autoFocus:!0,defaultValue:l??i,$isPlaceholder:l===null,onChange:m,children:[t.jsx("option",{value:i,disabled:!0,hidden:!0,children:i}),u.map((n,s)=>t.jsx(f,{value:n.value,children:n.label},s))]}),t.jsx(y,{children:t.jsx(p,{isActive:h})})]})};x.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""}}};export{x as S};
