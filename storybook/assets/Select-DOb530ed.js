import{u as o,j as t}from"./styled-components.browser.esm-DO55u7qc.js";import{r as l}from"./index-CsdIBAqE.js";import{t as d}from"./theme-CdHeXgP_.js";const w=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  width: 100%;
  height: 3.2rem;
  padding: 0.8rem;

  border-radius: 0.3rem;
  border: 0.1rem solid
    ${e=>e.$isActive?e.theme.color.black:e.theme.color.lightGray};
  color: ${e=>e.theme.color.black};
  ${e=>e.theme.typography.input};

  cursor: pointer;
`,y=o.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 1;
  color: ${e=>e.$unSelected?e.theme.color.lightGray:e.theme.color.black};
`,v=o.ul`
  display: ${e=>e.$isShow?"flex":"none"};
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 3.5rem;
  left: 0;
  z-index: 2;

  border: 0.1rem solid ${e=>e.theme.color.lightGray};
  border-radius: 0.3rem;
  background-color: ${e=>e.theme.color.white};
`,x=o.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding-left: 1rem;

  &:hover {
    background-color: ${e=>e.theme.color.lightGray};
  }
`,m=({isActive:e})=>t.jsx("svg",{width:"1.6rem",height:"1.6rem",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:e?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease-in-out"},children:t.jsx("path",{d:"M12.1801 9.54985L8.36014 5.72992L4.54021 9.54985",stroke:e?d.color.black:d.color.lightGray,strokeWidth:"1.32867",strokeLinecap:"round",strokeLinejoin:"round"})});m.__docgenInfo={description:"",methods:[],displayName:"ArrowIcon",props:{isActive:{required:!0,tsType:{name:"boolean"},description:""}}};const b=({label:e,placeholder:u,options:p,value:a,onChange:h})=>{const n=l.useRef(null),[i,c]=l.useState(!1),g=()=>{c(r=>!r)};return l.useEffect(()=>{const r=s=>{n.current&&!n.current.contains(s.target)&&c(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[n]),t.jsxs(w,{"aria-label":e,$isActive:i,ref:n,onClick:g,children:[t.jsx(y,{$unSelected:a===null,children:a??u}),t.jsx(m,{isActive:i}),t.jsx(v,{$isShow:i,children:p.map((r,s)=>t.jsx(x,{onClick:f=>h(f),children:r.label},s))})]})};b.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLLIElement, MouseEvent>",elements:[{name:"HTMLLIElement"},{name:"MouseEvent"}]},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""}}};export{b as S};
